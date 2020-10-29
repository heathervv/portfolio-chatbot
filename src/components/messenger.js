import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApiAiClient } from 'api-ai-javascript'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import {
  apps,
  icons,
  dialogFlow,
  initialResponse,
  changeInputResponse
} from '../config'

// Components
import Draggable from 'react-draggable'
import Toolbar from './toolbar'
import Message from './message'

import '../css/messenger.css'

class Messenger extends Component {
  constructor() {
    super()

    // Create new bot client
    this.client = new ApiAiClient({ accessToken: dialogFlow.token })

    // Set all our base app details
    this.state = {
      chatHistory: [],
      username: `Anon${Math.floor(Math.random() * (9999 - 1000) + 1000)}`,
      botName: 'HeatherBot',
      isTyping: true,
      inputValue: '',
      curatedOptions: {
        visible: false,
        links: [
          'Who are you?',
          'Can I see your work?',
          'What do you like to code in?',
          'I\'d like to get in touch with you'
        ]
      }
    }
  }

  componentDidMount() {
    // First message is doesn't come from bot so we can introduce the app to the user
    setTimeout(() => {
      this.triggerFirstMessage()
    }, 2000)
  }

  componentDidUpdate({ openApps }) {
    // Always keep messenger window scrolled to last message
    if (openApps.indexOf(apps.messenger.toLowerCase()) !== -1) this.messages.scrollTop = this.messages.scrollHeight

    this.messages.scrollTop = this.messages.scrollHeight
  }

  // Called once on componentDidMount to say hi to the user
  triggerFirstMessage = () => {
    this.updateHistory(initialResponse, this.state.botName, true)
    this.setState({
      isTyping: false,
      curatedOptions: {
        ...this.state.curatedOptions,
        visible: true
      }
    })
  }

  // This function listens to any response from the bot
  handleResponse = (response) => {
    const { result } = response

    // See what type of response the bot comes back with
    const type = result.fulfillment.messages.map((message) => {
      if (message.speech && message.speech.length > 0) return 'single'
      if (message.payload) return 'multiple'

      return null
    })

    // Change logic based on response type (multi-based response appears as multiple messages)
    if (type.includes('multiple')) {
      const base = result.fulfillment.messages.find((item) => item.payload).payload
      const responses = base.response
      let delay = 1000;

      for (let i = 0; i < responses.length; i += 1) {
        delay += i > 0 ? Math.floor(Math.random() * 2000) + 1000 : 0

        setTimeout(() => {
          this.updateHistory(responses[i], this.state.botName, true)

          // If we're on the last response, trigger next step
          if (i === responses.length - 1) {
            this.setState({ isTyping: false })

            // If user has curated options turned on, check for any new ones from the bot
            if (this.state.curatedOptions.visible && base.moreOptions) {
              this.setState({
                curatedOptions: {
                  visible: true,
                  links: base.moreOptions
                }
              })
            }
          }
        }, delay)
      }
    } else {
      this.updateHistory(result.fulfillment.speech, this.state.botName, true)
      this.setState({ isTyping: false })
    }
  }

  sendMessage = (event, directValue = null) => {
    if ((event && (event.keyCode === 13 || event.which === 13)) || directValue) {
      const message = directValue || this.state.inputValue

      // Pass user message into state
      this.updateHistory(message, this.state.username)

      // Send user message to analytics
      window.dataLayer.push({ event: 'dialogflow', message })

      // Send off to bot
      this.setState({ isTyping: true, inputValue: '' }, () => {
        this.client.textRequest(message)
          .then(this.handleResponse)
          .catch(this.handleError)
      })
    }
  }

  // Basic input function
  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
  }

  // Toggle for user to use preselected messages or type their own to the bot
  changeInput = (option) => {
    this.updateHistory(changeInputResponse[option], this.state.botName, true)

    this.setState({
      curatedOptions: {
        ...this.state.curatedOptions,
        visible: !this.state.curatedOptions.visible
      }
    })
  }

  // Basic error handling
  handleError = () => {
    this.setState({ isTyping: false })
  }

  // This is the final frontier. All message-based functions end with a call to this one
  // It updates the local state with whatever argument was passed to it
  updateHistory = (message, user, bot = false) => {
    const { chatHistory } = this.state

    chatHistory.push({
      user,
      message,
      bot
    })

    this.setState({ chatHistory })
  }

  render() {
    const {
      updateActiveApp,
      closeApp,
      updateStartbar,
      openApps,
      minimizedApps,
      currentlyActiveApp,
      previouslyActiveApp
    } = this.props

    const {
      chatHistory,
      isTyping,
      inputValue,
      curatedOptions
    } = this.state

    const messenger = apps.messenger.toLowerCase()
    const dataView = (openApps.indexOf(messenger) === -1 || minimizedApps.indexOf(messenger) !== -1) ? 'closed' : ''

    return (
      <Draggable
        defaultPosition={{ x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50 }}
        handle=".toolbar">
        <div
          className={`
              messenger
              program
              ${currentlyActiveApp === messenger ? 'active' : ''}
              ${previouslyActiveApp === messenger ? 'previous-active' : ''}
            `}
          onClick={updateActiveApp.bind(null, messenger)}
          data-view={dataView}
        >
          <Toolbar
            closeApp={closeApp}
            updateStartbar={updateStartbar}
            component={messenger}
            image={icons[apps.messenger.toLowerCase()].url}
            title={apps.messenger}
          />

          <div className="messages content" ref={(input) => { this.messages = input }} >
            <TransitionGroup>
              {
                chatHistory.map((item, index) => (
                  <CSSTransition key={index} timeout={500} classNames="message">
                    <Message
                      key={index}
                      type={item.bot ? 'sent' : 'received'}
                      user={item.user}
                      content={item.message}
                    />
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
          </div>

          <span className={`activeTyping ${isTyping ? 'visible' : ''}`}>Heather is typing...</span>

          <div className={`userInput ${isTyping ? 'hidden' : ''}`}>
            <div className="field">
              {
                curatedOptions.visible ? (
                  <div className="buttonWrapper">
                    <div>
                      {
                        curatedOptions.links.map(link => (
                          <button
                            key={link.replace(/\s+/g, '').toLowerCase()}
                            className="button-medium"
                            onClick={() => this.sendMessage(null, link)}>
                            {link}
                          </button>
                        ))
                      }
                    </div>
                  </div>
                ) : (
                    <input
                      type="text"
                      id="messageField"
                      autoFocus
                      value={inputValue}
                      onChange={this.handleInputChange}
                      onKeyPress={this.sendMessage}
                    />
                  )
              }
            </div>
            <button
              onClick={() => this.changeInput(curatedOptions.visible ? 'free' : 'options')}
              className="button-medium option-toggle"
            >
              {
                curatedOptions.visible ? (
                  'Free type'
                ) : (
                    'Curated'
                  )
              }
            </button>
          </div>
        </div>
      </Draggable>
    )
  }
}

Messenger.propTypes = {
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
}

export default Messenger
