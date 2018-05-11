import React, { Component} from 'react'
import PropTypes from 'prop-types'

// Components
import Draggable from 'react-draggable'
import Toolbar from './toolbar'

import '../css/messenger.css'

// Assets
// const data = require('../../data.json')
import bot from '../images/bot.svg'

class Contact extends Component {
  render() {
    const {
      updateActiveApp,
      closeApp,
      updateStartbar,
      // openInNewTab,
      openApps,
      minimizedApps,
      currentlyActiveApp,
      previouslyActiveApp
    } = this.props

    return (
    <Draggable
  		defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}}
  		handle=".toolbar">
        <div
  				className={`messenger program  ${currentlyActiveApp === 'messenger' ? 'active' : ''} ${previouslyActiveApp === 'messenger' ? 'previous-active' : ''}`}
  				onClick={updateActiveApp.bind(null, 'messenger')}
          data-view={openApps.indexOf('messenger') === -1 ? 'closed' : minimizedApps.indexOf('messenger') !== -1 ? 'closed' : ''}>
          <Toolbar
  					closeApp={closeApp}
  					updateStartbar={updateStartbar}
  					component="messenger"
  					image={bot}
  					title="Chat" />
          <div className="messages content" ref={(input) => { this.messages = input }} >
          </div>
          <span className="activeTyping">Heather is typing...</span>
          {/* <UserInput
  					entryField={this.state.entryField}
  					loadData={this.loadSection}
            ref={(input) => { this.messageField = input }}  /> */}
        </div>
    </Draggable>
  )
  }
}

Contact.propTypes = {
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
}

export default Contact
