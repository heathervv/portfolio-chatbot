import React from 'react';
import PropTypes from 'prop-types';

// Components
import Program from './program';

// Assets
const data = require('../../data.json');
import briefcase from '../images/briefcase.svg';

const Work = (props) => {
  return (
    <Program
      programName="Work"
      programRights="[Read Only]"
      programIcon={briefcase}
      updateActiveApp={props.updateActiveApp}
      updateStartbar={props.updateStartbar}
      closeApp={props.closeApp}
      openInNewTab={props.openInNewTab}
      openApps={props.openApps}
      minimizedApps={props.minimizedApps}
      currentlyActiveApp={props.currentlyActiveApp}
      previouslyActiveApp={props.previouslyActiveApp} >
      {
        data.workFile.map((item, i) => {
          const url = item.url;
          const title = item.title;
          const description = item.description;
          return (
            <div key={i}>
              <h3><a href="#" onClick={() => props.openInNewTab(url)}>{title}</a></h3>
              <p>{description}</p>
            </div>
          );
        })
      }
    </Program>

  );
};

Work.propTypes = {
  updateActiveApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  closeApp: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
};

export default Work;
