import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApiAiClient } from 'api-ai-javascript'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { apps, icons } from '../constants'

// Components
import Draggable from 'react-draggable'
import Toolbar from './toolbar'
import Message from './message'

import '../css/messenger.css'

class Messenger extends Component {
  constructor() {
    super()

    this.client = new ApiAiClient({accessToken: '184dc97ff8e442a7991119cf7e45e47f'})

    this.state = {
      chatHistory: [],
      username: `Anon${Math.floor(Math.random() * (9999 - 1000) + 1000)}`,
      botName: 'Heather',
      isTyping: true
    }
  }

  componentWillReceiveProps({ openApps }) {
    if (openApps.indexOf(apps.messenger.toLowerCase()) !== -1) this.messages.scrollTop = this.messages.scrollHeight
  }

  componentDidMount() {
    setTimeout(() => {
      this.triggerFirstMessage()
    }, 2000)

    this.textField.addEventListener('keyup', (e) => {
      e.preventDefault()
      if (e.keyCode === 13) {
        this.updateHistory(this.textField.value, this.state.username)
        this.sendMessage(this.textField.value)
      }
    })
  }

  componentDidUpdate() {
    this.messages.scrollTop = this.messages.scrollHeight
  }

  triggerFirstMessage = () => {
    this.updateHistory('Hi there! I\'m Heather. What\'s your name?', this.state.botName)
    this.setState({ isTyping: false })
  }

  usernameChange = (response) => {
    let username = response.result.resolvedQuery

    for (let i = 0; i < Object.keys(response.result.parameters).length; i += 1) {
      const key = Object.keys(response.result.parameters)[i]

      if (response.result.parameters[key] !== '') {
        username = response.result.parameters[key]
      }
    }

    this.setState({ username })
  }

  handleResponse = (response) => {
    this.updateHistory(response.result.fulfillment.speech, this.state.botName)
    this.setState({ isTyping: false })

    // Handle username update
    if (response.result.action === 'name.user.save') {
      this.usernameChange(response)
    }
  }

  handleError = (error) => {
    this.setState({ isTyping: false })
  }

  updateHistory = (message, user) => {
    const chatHistory = this.state.chatHistory

    chatHistory.push({
      user,
      message
    })

    this.setState({ chatHistory })
  }

  sendMessage = (message) => {
    this.textField.value = ''
    this.setState({ isTyping: true })
    this.client.textRequest(message)
      .then(this.handleResponse)
      .catch(this.handleError)
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

    const messenger = apps.messenger.toLowerCase()

    const { chatHistory, botName, isTyping } = this.state

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
  										type={item.user === botName ? 'sent' : 'received'}
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
            <input
              ref={(input) => { this.textField = input }}
              type="text"
              id="messageField"
              autoFocus />
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
