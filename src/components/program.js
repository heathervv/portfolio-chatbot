import React from 'react'
import PropTypes from 'prop-types'

// Components
import Draggable from 'react-draggable'
import Toolbar from './toolbar'

const Program = (props) => {
  return (
    <Draggable
      defaultPosition={props.notificationStyle
        ? {}
        : {x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}
      }
      handle=".toolbar">
      <div
        className={`${props.programName.toLowerCase()} program txt-file ${props.currentlyActiveApp === props.programName.toLowerCase() ? 'active' : ''} ${props.previouslyActiveApp === props.programName.toLowerCase() ? 'previous-active' : ''} ${props.notificationStyle ? 'notification' : ''}`}
        data-view={props.openApps.indexOf(props.programName.toLowerCase()) === -1 ? 'closed' : props.minimizedApps.indexOf(props.programName.toLowerCase()) !== -1 ? 'closed' : ''}
        onClick={props.updateActiveApp.bind(null, props.programName.toLowerCase())}>
        <Toolbar
          closeApp={props.closeApp}
          updateStartbar={props.updateStartbar}
          component={props.programName.toLowerCase()}
          image={props.programIcon}
          title={`${props.programName} ${props.programRights ? props.programRights : ''}`}
          notificationStyle={props.notificationStyle}
        />
        <div
          className="content"
          contentEditable={props.contentEditable}
          suppressContentEditableWarning>
          {props.children}
        </div>
      </div>
    </Draggable>
  )
}

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
  notificationStyle: PropTypes.bool
}

Program.defaultProps = {
  programRights: null,
  contentEditable: false,
  updateActiveApp: () => {},
  closeApp: () => {},
  updateStartbar: () => {},
  openApps: [],
  minimizedApps: [],
  currentlyActiveApp: null,
  previouslyActiveApp: null,
  notificationStyle: false
}

export default Program
