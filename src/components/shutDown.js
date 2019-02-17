import React from 'react'
import PropTypes from 'prop-types'
import { apps, icons } from '../config'

// Components
import Program from './program'

const ShutDown = ({ restart }) => (
  <Program
    currentlyActiveApp={apps.shutdown.toLowerCase()}
    programName={apps.shutdown}
    openApps={[apps.shutdown.toLowerCase()]}
    programIcon={icons[apps.shutdown.toLowerCase()].url}
    notificationStyle
  >
    It is now safe to turn off your computer.
    <br />
    <br />
    <button className="button-medium" onClick={restart}>Restart</button>
  </Program>
)

ShutDown.propTypes = {
  restart: PropTypes.func.isRequired
}

export default ShutDown
