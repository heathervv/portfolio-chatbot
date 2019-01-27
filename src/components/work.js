import React from 'react'
import PropTypes from 'prop-types'
import { apps, icons, work } from '../constants'

// Components
import Program from './program'

// Assets

const Work = ({
    updateActiveApp,
    updateStartbar,
    closeApp,
    openInNewTab,
    openApps,
    minimizedApps,
    currentlyActiveApp,
    previouslyActiveApp
  }) => (
  <Program
    programName={apps.work}
    programRights="[Read Only]"
    programIcon={icons[apps.work.toLowerCase()].url}
    updateActiveApp={updateActiveApp}
    updateStartbar={updateStartbar}
    closeApp={closeApp}
    openInNewTab={openInNewTab}
    openApps={openApps}
    minimizedApps={minimizedApps}
    currentlyActiveApp={currentlyActiveApp}
    previouslyActiveApp={previouslyActiveApp}
  >
    {
      work.map((item, i) => (
        <div key={i}>
          <h3><a href={item.url} onClick={() => openInNewTab(item.url)}>{item.title}</a></h3>
          <p>{item.copy}</p>
        </div>
      ))
    }
  </Program>

)

Work.propTypes = {
  updateActiveApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  closeApp: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
}

export default Work
