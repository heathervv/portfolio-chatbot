import React from 'react'
import PropTypes from 'prop-types'
import { apps, icons, contact } from '../config'

// Components
import Program from './program'

const Contact = ({
    updateActiveApp,
    closeApp,
    updateStartbar,
    openApps,
    minimizedApps,
    currentlyActiveApp,
    previouslyActiveApp
  }) => {

  return (
    <Program
      programName={apps.contact}
      programIcon={icons[apps.contact.toLowerCase()].url}
      contentEditable
      updateActiveApp={updateActiveApp}
      updateStartbar={updateStartbar}
      closeApp={closeApp}
      openApps={openApps}
      minimizedApps={minimizedApps}
      currentlyActiveApp={currentlyActiveApp}
      previouslyActiveApp={previouslyActiveApp} >
      {contact.content}
      <br/>
      <br/>
      ==========================================
      <br/>
      <br/>
      <a href={contact.emailLink}>{contact.emailLink.replace('mailto:', '')}</a> <br/>
      <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> <br/>
      <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a> <br/>
      <a href={contact.twitter} target="_blank" rel="noopener noreferrer">Twitter</a> <br/>
      <a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
    </Program>
  )
}

Contact.propTypes = {
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
}

export default Contact
