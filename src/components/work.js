import React from 'react'
import PropTypes from 'prop-types'
import { apps, icons } from '../constants'

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
    previouslyActiveApp={previouslyActiveApp} >
    {/*
      data.workFile.map((item, i) => {
        const url = item.url
        const title = item.title
        const description = item.description
        return (
          <div key={i}>
            <h3><a href="#" onClick={() => props.openInNewTab(url)}>{title}</a></h3>
            <p>{description}</p>
          </div>
        )
      })
    */}
    work yo
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
