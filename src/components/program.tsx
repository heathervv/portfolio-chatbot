/* eslint-disable jsx-a11y/click-events-have-key-events */
/* Event handler added to div for delight, not actual functionality */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Draggable from 'react-draggable';

import type {
  AppWindowId,
  CloseApp,
  ProgramProps,
  UpdateActiveApp,
  UpdateStartbar,
} from '../types/app';

import Toolbar from './toolbar';

const Program = ({
  notificationStyle = false,
  programName,
  openApps = [],
  currentlyActiveApp = '',
  previouslyActiveApp = '',
  minimizedApps = [],
  updateActiveApp = () => { },
  updateStartbar = () => { },
  programIcon,
  programRights = null,
  closeApp = () => { },
  contentEditable = false,
  systemStyle = false,
  children,
}: ProgramProps) => {
  const programId = programName.toLowerCase() as AppWindowId;

  return (
    <Draggable
      defaultPosition={notificationStyle
        ? undefined
        : { x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50 }}
      handle=".toolbar"
      cancel=".button-small"
    >
      <div
        className={`${programId} program txt-file ${currentlyActiveApp === programId ? 'active' : ''} ${previouslyActiveApp === programId ? 'previous-active' : ''} ${notificationStyle ? 'notification' : ''} ${systemStyle ? 'system' : ''}`}
        data-view={openApps.indexOf(programId) === -1 || minimizedApps.indexOf(programId) !== -1 ? 'closed' : ''}
        onClick={() => updateActiveApp(null, programId)}
      >
        <Toolbar
          closeApp={closeApp}
          updateStartbar={updateStartbar}
          component={programId}
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
};

export default Program;
