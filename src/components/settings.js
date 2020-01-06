import React from 'react'
import PropTypes from 'prop-types'
import { apps, icons } from '../config'

// Components
import Program from './program'

import '../css/settings.css'

// TOOD:
// - attach to cookie?

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
    systemStyle
  >
    <div className="section background">
      <p className="sectionTitle">Background</p>
      <ul className="options">
        <li className="option"><button>Classic</button></li>
        <li className="option selected"><button>Nasa</button></li>
        <li className="option"><button>Clouds</button></li>
        <li className="option"><button>Logo</button></li>
        <li className="option"><button>Vaporwave</button></li>
        <li className="option"><button>Harry Potter</button></li>
      </ul>
    </div>

    <div className="section theme">
      <p className="sectionTitle">Appearance</p>
      <ul className="options">
        <li className="option selected"><button>Light</button></li>
        <li className="option"><button>Dark</button></li>
        <li className="option"><button>Modern</button></li>
      </ul>
    </div>

    <div className="section attributions">
      <p className="sectionTitle">Attributions</p>
      <p>Emoji artwork is provided by <a href="https://emojitwo.github.io/" target="_blank" rel="noopener noreferrer">Emojitwo</a>, originally released as <a href="https://www.emojione.com/" target="_blank" rel="noopener noreferrer">Emojione 2.2</a> by <a href="http://www.ranks.com/" target="_blank" rel="noopener noreferrer">Ranks.com</a> with contributions from the Emojitwo community and is licensed under <a href="https://creativecommons.org/licenses/by/4.0/legalcode" target="_blank" rel="noopener noreferrer">CC-BY 4.0.</a></p>
    </div>
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
