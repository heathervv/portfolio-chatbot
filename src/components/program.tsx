import Draggable from 'react-draggable';
import type { KeyboardEvent } from 'react';

import type {
  AppWindowId,
  ProgramProps,
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
  const activateProgram = () => updateActiveApp(null, programId);
  const onProgramKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      activateProgram();
    }
  };

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
        onClick={activateProgram}
        onKeyDown={onProgramKeyDown}
        role="button"
        tabIndex={0}
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
