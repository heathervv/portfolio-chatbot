import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ApiAiClient } from 'api-ai-javascript'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

// Components
import Draggable from 'react-draggable'
import Toolbar from './toolbar'
import Message from './message'

import '../css/messenger.css'

// Assets
import bot from '../images/bot.svg'

class Messenger extends Component {
  constructor() {
    super()

    this.client = new ApiAiClient({accessToken: '184dc97ff8e442a7991119cf7e45e47f'})

    this.state = {
      chatHistory: [],
      botName: 'Heather'
    }
  }

  componentDidMount() {
    this.textField.addEventListener("keyup", (e) => {
      e.preventDefault()
      if (e.keyCode === 13) {
        this.updateHistory(this.textField.value, 'Stranger')
        this.sendMessage(this.textField.value)
      }
    })
  }

  handleResponse = (response) => {
    this.updateHistory(response.result.fulfillment.speech, this.state.botName)

    console.log('success', response)
  }

  handleError = (error) => {
    console.log('error', error)
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
    this.client.textRequest(message)
      .then(this.handleResponse)
      .catch(this.handleError)
  }

  // TODO
  // X - add text field
  // X - connect text field to state
  // X - update chat history with text field content
  // X - api calls from text field
  // X - connect api response to state
  // X - update chat history with api response
  // - animate api response (heather is typing... with delay)
  // - replace "Stranger" with parameter field
    // - Add follow up intent to name change

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

    const { chatHistory, botName } = this.state

    return (
    <Draggable
  		defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}}
  		handle=".toolbar">
        <div
  				className={`
            messenger
            program
            ${currentlyActiveApp === 'messenger' ? 'active' : ''}
            ${previouslyActiveApp === 'messenger' ? 'previous-active' : ''}
          `}
  				onClick={updateActiveApp.bind(null, 'messenger')}
          data-view={(openApps.indexOf('messenger') === -1 || minimizedApps.indexOf('messenger') !== -1) ? 'closed' : ''}
        >
          <Toolbar
  					closeApp={closeApp}
  					updateStartbar={updateStartbar}
  					component="messenger"
  					image={bot}
  					title="Chat"
          />

          <div className="messages content" ref={(input) => { this.messages = input }} >
            <TransitionGroup>
              {
                chatHistory.map((item, index) => (
                  <CSSTransition timeout={500} classNames="message">
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

          <span className="activeTyping">Heather is typing...</span>

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
