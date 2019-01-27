import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { apps, icons } from '../constants'

// Components
import Clock from './clock'

import '../css/startbar.css'

// Assets
import flag from '../images/flag.svg'
import computer from '../images/computer.svg'

const StartBar = ({
  openApp,
  openApps,
  shutDown,
  start,
  openStart,
  minimizedApps,
  updateStartbar,
  currentlyActiveApp
}) => {
  const nextStatus = openStart ? 'close' : 'open'

  return (
    <Fragment>
      <div className="startbar">
        <button
          className={`start button ${openStart ? 'active' : ''}`}
          onClick={() => start(nextStatus)}>
          <img src={flag} alt="flag"/>
          <span>Start</span>
        </button>
        <div className="programs">
          {
            Object.keys(apps).map((app, i) => {
              const className = apps[app].toLowerCase()
              return (
                <button
                  key={i}
                  className={`
                    startbar-button startbar-{className} button
                    ${currentlyActiveApp.indexOf(className) > -1 ? 'active' : ''}
                    ${
                      openApps.indexOf(className) === -1 ?
                        'closed-program' :
                        ''
                    } ${
                      minimizedApps.indexOf(className) === -1 ?
                        'minimized-program' :
                        ''
                    }`}
                  onClick={e => updateStartbar(className)}>
                  <img src={icons[className].url} alt={icons[className].alt}/>
                  <span>{apps[app]}</span>
                </button>
              )
            })
          }
        </div>
        <Clock />
      </div>
      {
        openStart &&
        <div className="start-cupboard visible">
          <button
          className="shutdown"
          onClick={e => shutDown(e)}>
            <img src={computer} alt="computer"/>
            <span>Shut Down...</span>
          </button>
        </div>
      }
    </Fragment>
  )
}

StartBar.propTypes = {
  openApp: PropTypes.func,
  openApps: PropTypes.array,
  shutDown: PropTypes.func,
  start: PropTypes.func,
  openStart: PropTypes.bool,
  minimizedApps: PropTypes.array,
  updateStartbar: PropTypes.func,
  currentlyActiveApp: PropTypes.string
}

StartBar.defaultProps = {
  openApp: () => {},
  shutDown: () => {},
  start: () => {},
  updateStartbar: () => {},
  openApps: [],
  openStart: false,
  minimizedApps: [],
  currentlyActiveApp: ''
}

export default StartBar
