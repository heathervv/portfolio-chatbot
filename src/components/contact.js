import React from 'react'
import PropTypes from 'prop-types'
import { apps, icons } from '../constants'

// Components
import Program from './program'

const Contact = ({
    updateActiveApp,
    closeApp,
    updateStartbar,
    openInNewTab,
    openApps,
    minimizedApps,
    currentlyActiveApp,
    previouslyActiveApp
  }) => {
  let emailLink = "heathervandervecht@gmail.com"
  let linkedin = "https://ca.linkedin.com/in/heathervandervecht"
  let github = "http://github.com/heathervv"
  let codepen = "http://codepen.io/_heathervv"
  let twitter = "http://twitter.com/_heathervv"
  let instagram = "http://instagram.com/_heathervv"

  return (
    <Program
      programName={apps.contact}
      programIcon={icons[apps.contact.toLowerCase()].url}
      contentEditable
      updateActiveApp={updateActiveApp}
      updateStartbar={updateStartbar}
      closeApp={closeApp}
      openInNewTab={openInNewTab}
      openApps={openApps}
      minimizedApps={minimizedApps}
      currentlyActiveApp={currentlyActiveApp}
      previouslyActiveApp={previouslyActiveApp} >
      Let's chat! I'm always looking to make new friends and chat about code. If you happen to like coffee, let's go grab one!
      <br/>
      <br/>
      ==========================================
      <br/>
      <br/>
      <a onClick={openInNewTab.bind(null, "mailto:" + emailLink)} href={"mailto:" + emailLink}>{emailLink}</a> <br/>
      <a onClick={openInNewTab.bind(null, linkedin)} href={linkedin}>LinkedIn</a> <br/>
      <a onClick={openInNewTab.bind(null, github)} href={github}>GitHub</a> <br/>
      <a onClick={openInNewTab.bind(null, codepen)} href={codepen}>CodePen</a> <br/>
      <a onClick={openInNewTab.bind(null, twitter)} href={twitter}>Twitter</a> <br/>
      <a onClick={openInNewTab.bind(null, instagram)} href={instagram}>Instagram</a>
    </Program>
  )
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
