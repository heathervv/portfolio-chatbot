import React from 'react'
import PropTypes from 'prop-types'
import { apps, icons } from '../config'

// Components
import Program from './program'

const Settings = ({
    updateActiveApp,
    updateStartbar,
    closeApp,
    openApps,
    minimizedApps,
    currentlyActiveApp,
    previouslyActiveApp
  }) => (
  <Program
    programName={apps.settings}
    programIcon={icons[apps.settings.toLowerCase()].url}
    updateActiveApp={updateActiveApp}
    updateStartbar={updateStartbar}
    closeApp={closeApp}
    openApps={openApps}
    minimizedApps={minimizedApps}
    currentlyActiveApp={currentlyActiveApp}
    previouslyActiveApp={previouslyActiveApp}
  >
    settings!
  </Program>

)

Settings.propTypes = {
  updateActiveApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  closeApp: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
}

export default Settings
