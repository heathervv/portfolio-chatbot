import type { MouseEvent } from 'react';

import { apps, icons } from '../config';
import type { AppConfigKey, AppWindowId } from '../types/app';

import Clock from './clock';

import '../css/startbar.css';

import flag from '../images/flag.svg';
import computer from '../images/computer.svg';
import settings from '../images/settings.svg';

interface StartBarProps {
  openApps: AppWindowId[];
  shutDown: (event: MouseEvent<HTMLButtonElement>) => void;
  start: (status: 'close' | 'open') => void;
  openStart: boolean;
  minimizedApps: AppWindowId[];
  updateStartbar: (component: AppWindowId, minimizeWindow?: boolean) => void;
  currentlyActiveApp: AppWindowId | '';
  openSettings: (event: MouseEvent<HTMLButtonElement>) => void;
}

const StartBar = ({
  openApps,
  shutDown,
  start,
  openStart,
  minimizedApps,
  updateStartbar,
  currentlyActiveApp,
  openSettings,
}: StartBarProps) => {
  const nextStatus = openStart ? 'close' : 'open';

  return (
    <>
      <div className="startbar">
        <button
          type="button"
          className={`start button ${openStart ? 'active' : ''}`}
          onClick={() => start(nextStatus)}
        >
          <img src={flag} alt="flag" />
          <span>Start</span>
        </button>
        <div className="programs">
          {Object.keys(apps).map((app) => {
            if (app === 'shutdowncomputer') {
              return null;
            }

            const className = apps[app as AppConfigKey].toLowerCase() as AppWindowId;

            return (
              <button
                key={`startbar-${className}`}
                type="button"
                className={`
                    startbar-button startbar-${className} button
                    ${currentlyActiveApp.indexOf(className) > -1 ? 'active' : ''}
                    ${openApps.indexOf(className) === -1
    ? 'closed-program'
    : ''
} ${minimizedApps.indexOf(className) === -1
    ? 'minimized-program'
    : ''
}`}
                onClick={() => updateStartbar(className)}
              >
                <img src={icons[className].url} alt={icons[className].alt} />
                <span>{apps[app as AppConfigKey]}</span>
              </button>
            );
          })}
        </div>
        <Clock />
      </div>
      {openStart && (
        <div className="start-cupboard visible">
          <button
            type="button"
            className="settings"
            onClick={openSettings}
          >
            <img src={settings} alt="settings" />
            <span>Settings</span>
          </button>
          <button
            type="button"
            className="shutdown"
            onClick={shutDown}
          >
            <img src={computer} alt="computer" />
            <span>Shut Down...</span>
          </button>
        </div>
      )}
    </>
  );
};

export default StartBar;
