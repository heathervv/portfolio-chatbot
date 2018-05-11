import React from 'react'
import PropTypes from 'prop-types'

// Components
import Program from './program'

// Assets
// const data = require('../../data.json')
import briefcase from '../images/briefcase.svg'

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
    programName="Work"
    programRights="[Read Only]"
    programIcon={briefcase}
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
