import React from 'react';
import PropTypes from 'prop-types';

// Components
import Draggable from 'react-draggable';
import Toolbar from './toolbar';

const Program = (props) => {
  return (
    <Draggable
      defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}}
      handle=".toolbar">
      <div
        className={`${props.programName.toLowerCase()} program txt-file ${props.currentlyActiveApp === props.programName.toLowerCase() ? 'active' : ''} ${props.previouslyActiveApp === props.programName.toLowerCase() ? 'previous-active' : ''}`}
        data-view={props.openApps.indexOf(props.programName.toLowerCase()) === -1 ? 'closed' : props.minimizedApps.indexOf(props.programName.toLowerCase()) !== -1 ? 'closed' : ''}
        onClick={props.updateActiveApp.bind(null, props.programName.toLowerCase())}>
        <Toolbar
          closeApp={props.closeApp}
          updateStartbar={props.updateStartbar}
          component={props.programName.toLowerCase()}
          image={props.programIcon}
          title={`${props.programName} ${props.programRights ? props.programRights : ''}`} />
        <div
          className="content"
          contentEditable={props.contentEditable}
          suppressContentEditableWarning>
          {props.children}
        </div>
      </div>
    </Draggable>
  );
};

Program.propTypes = {
  programName: PropTypes.string.isRequired,
  programRights: PropTypes.string,
  programIcon: PropTypes.string.isRequired,
  contentEditable: PropTypes.bool,
  children: PropTypes.node.isRequired,
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
};

export default Program;
