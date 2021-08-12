/* eslint-disable jsx-a11y/click-events-have-key-events */
/* Event handler added to div for delight, not actual functionality */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Draggable from 'react-draggable';
import Toolbar from './toolbar';

const Program = ({
  notificationStyle,
  programName,
  openApps,
  currentlyActiveApp,
  previouslyActiveApp,
  minimizedApps,
  updateActiveApp,
  updateStartbar,
  programIcon,
  programRights,
  closeApp,
  contentEditable,
  systemStyle,
  children,
}) => (
  <Draggable
    defaultPosition={notificationStyle
      ? {}
      : { x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50 }}
    handle=".toolbar"
    cancel=".button-small"
  >
    <div
      className={`${programName.toLowerCase()} program txt-file ${currentlyActiveApp === programName.toLowerCase() ? 'active' : ''} ${previouslyActiveApp === programName.toLowerCase() ? 'previous-active' : ''} ${notificationStyle ? 'notification' : ''} ${systemStyle ? 'system' : ''}`}
      data-view={openApps.indexOf(programName.toLowerCase()) === -1 || minimizedApps.indexOf(programName.toLowerCase()) !== -1 ? 'closed' : ''}
      onClick={() => updateActiveApp(null, programName.toLowerCase())}
    >
      <Toolbar
        closeApp={closeApp}
        updateStartbar={updateStartbar}
        component={programName.toLowerCase()}
        image={programIcon}
        title={`${programName} ${programRights || ''}`}
        notificationStyle={notificationStyle}
      />
      <div
        className="content"
        contentEditable={contentEditable}
        suppressContentEditableWarning
      >
        {children}
      </div>
    </div>
  </Draggable>
);

Program.propTypes = {
  programName: PropTypes.string.isRequired,
  programIcon: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  programRights: PropTypes.string,
  contentEditable: PropTypes.bool,
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string,
  notificationStyle: PropTypes.bool,
  systemStyle: PropTypes.bool,
};

Program.defaultProps = {
  programRights: null,
  contentEditable: false,
  updateActiveApp: () => { },
  closeApp: () => { },
  updateStartbar: () => { },
  openApps: [],
  minimizedApps: [],
  currentlyActiveApp: null,
  previouslyActiveApp: null,
  notificationStyle: false,
  systemStyle: false,
};

export default Program;
