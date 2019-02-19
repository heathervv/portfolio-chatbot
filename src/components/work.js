import React from 'react'
import PropTypes from 'prop-types'
import Linkify from 'react-linkify'
import { apps, icons, work } from '../config'

// Components
import Program from './program'

const Work = ({
    updateActiveApp,
    updateStartbar,
    closeApp,
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
    openApps={openApps}
    minimizedApps={minimizedApps}
    currentlyActiveApp={currentlyActiveApp}
    previouslyActiveApp={previouslyActiveApp}
  >
    <Linkify properties={{target: "_blank", rel: "noopener noreferrer"}}>
      {
        work.map((item, i) => (
          <div key={i}>
            <h3><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
            <p>{item.copy}</p>
          </div>
        ))
      }
    </Linkify>
  </Program>

)

Work.propTypes = {
  updateActiveApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  closeApp: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
}

export default Work
