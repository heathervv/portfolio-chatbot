import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApiAiClient } from 'api-ai-javascript'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { apps, icons, dialogFlow, initialResponse } from '../constants'

// Components
import Draggable from 'react-draggable'
import Toolbar from './toolbar'
import Message from './message'

import '../css/messenger.css'

class Messenger extends Component {
  constructor() {
    super()

    this.client = new ApiAiClient({accessToken: dialogFlow.token})

    this.state = {
      chatHistory: [],
      username: `Anon${Math.floor(Math.random() * (9999 - 1000) + 1000)}`,
      botName: 'Heather',
      isTyping: true,
      inputValue: ''
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.triggerFirstMessage()
    }, 2000)
  }

  componentDidUpdate({ openApps }) {
    if (openApps.indexOf(apps.messenger.toLowerCase()) !== -1) this.messages.scrollTop = this.messages.scrollHeight

    this.messages.scrollTop = this.messages.scrollHeight
  }

  triggerFirstMessage = () => {
    this.updateHistory(initialResponse, this.state.botName, true)
    this.setState({ isTyping: false, inputValue: 'My name is ' })
  }

  usernameChange = (response) => {
    const { parameters } = response.result

    // set default to their full response because our bot isn't great at unique names.
    let username = response.result.resolvedQuery

    for (let i = 0; i < Object.keys(parameters).length; i += 1) {
      const key = Object.keys(parameters)[i]

      // filter through name parameters to find the one the name was set to (if it was set)
      if (parameters[key] !== '') {
        username = parameters[key]
      }
    }

    this.setState({ username })
  }

  handleResponse = (response) => {
    const { result } = response

    // Custom payload responses vs standard response
    if (result.fulfillment.messages[1].payload) {
      const responses = result.fulfillment.messages[1].payload.response
      let delay = 1000;

      for (let i = 0; i < responses.length; i += 1) {
        delay += i > 0 ? Math.floor(Math.random() * 3000) + 2000 : 0

        setTimeout(() => {
          this.updateHistory(responses[i], this.state.botName, true)

          if (i === responses.length - 1) this.setState({ isTyping: false })
        }, delay)
      }
    } else {
      this.updateHistory(result.fulfillment.speech, this.state.botName, true)
      this.setState({ isTyping: false })
    }


    // store username in state
    if (result.action === 'name.user.save') {
      this.usernameChange(response)
    }
  }

  handleError = () => {
    this.setState({ isTyping: false })
  }

  updateHistory = (message, user, bot = false) => {
    const { chatHistory } = this.state

    chatHistory.push({
      user,
      message,
      bot
    })

    this.setState({ chatHistory })
  }

  sendMessage = (message) => {
    this.setState({ isTyping: true, inputValue: '' })
    this.client.textRequest(message)
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  triggerUserMessage = (event) => {
    event.preventDefault()

    this.updateHistory(this.state.inputValue, this.state.username)
    this.sendMessage(this.state.inputValue)
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value })
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
    const { chatHistory, isTyping, inputValue } = this.state

    const messenger = apps.messenger.toLowerCase()
    const dataView = (openApps.indexOf(messenger) === -1 || minimizedApps.indexOf(messenger) !== -1) ? 'closed' : ''

    return (
      <Draggable
    		defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}}
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

            <div className="userInput">
              <form onSubmit={this.triggerUserMessage}>
                <input
                  type="text"
                  id="messageField"
                  autoFocus
                  value={inputValue}
                  onChange={this.handleInputChange}
                />
              </form>
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
