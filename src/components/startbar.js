import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { apps, icons } from '../config';

// Components
import Clock from './clock';

import '../css/startbar.css';

// Assets
import flag from '../images/flag.svg';
import computer from '../images/computer.svg';
import settings from '../images/settings.svg';

const StartBar = ({
  openApps,
  shutDown,
  start,
  openStart,
  minimizedApps,
  updateStartbar,
  currentlyActiveApp,
  openSettings,
}) => {
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
          {
            Object.keys(apps).map((app) => {
              const className = apps[app].toLowerCase();

              if (app === 'shutdowncomputer') return null;

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
                  <span>{apps[app]}</span>
                </button>
              );
            })
          }
        </div>
        <Clock />
      </div>
      {
        openStart
        && (
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
              onClick={(e) => shutDown(e)}
            >
              <img src={computer} alt="computer" />
              <span>Shut Down...</span>
            </button>
          </div>
        )
      }
    </>
  );
};

StartBar.defaultProps = {
  shutDown: () => { },
  start: () => { },
  updateStartbar: () => { },
  openApps: [],
  openStart: false,
  minimizedApps: [],
  currentlyActiveApp: '',
  openSettings: () => { },
};

StartBar.propTypes = {
  openApps: PropTypes.array,
  shutDown: PropTypes.func,
  start: PropTypes.func,
  openStart: PropTypes.bool,
  minimizedApps: PropTypes.array,
  updateStartbar: PropTypes.func,
  currentlyActiveApp: PropTypes.string,
  openSettings: PropTypes.func,
};

export default StartBar;
