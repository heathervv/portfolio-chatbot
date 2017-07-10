import React from 'react';
import PropTypes from 'prop-types';

// Components
import Clock from './clock';

// Assets
import bot from '../images/bot.svg';
import flag from '../images/flag.svg';
import email from '../images/email.svg';
import briefcase from '../images/briefcase.svg';
import computer from '../images/computer.svg';
import paint from '../images/paint.svg';

const StartBar = (props) => {
  const nextStatus = props.openStart ? 'close' : 'open';
  return (
    <div className="start-wrapper">
      <div className="startbar">
        <button
          className={`start button ${props.openStart ? 'active' : ''}`}
          onClick={() => props.start(nextStatus)}>
          <img src={flag} alt="flag"/>
          <span>Start</span>
        </button>
        <div className="programs">
          <button
            className={`
              startbar-button startbar-messenger button
              ${props.currentlyActiveApp.indexOf('messenger') > -1 ? 'active' : ''}
              ${props.openApps.indexOf('messenger') === -1 ? 'closed-program' : ''} ${props.minimizedApps.indexOf('messenger') === -1 ? 'minimized-program' : ''}`}
            onClick={(e) => props.updateStartbar('messenger')}>
            <img src={bot} alt="bot"/>
            <span>Chat</span>
          </button>
          <button
            className={`
              startbar-button startbar-work button
              ${props.currentlyActiveApp.indexOf('work') > -1 ? 'active' : ''}
              ${props.openApps.indexOf('work') === -1 ? 'closed-program' : ''}
              ${props.minimizedApps.indexOf('work') === -1 ? 'minimized-program' : ''}`}
            onClick={(e) => props.updateStartbar('work')}>
            <img src={briefcase} alt="briefcase"/>
            <span>Work</span>
          </button>
          <button
            className={`
              startbar-button startbar-contact button
              ${props.currentlyActiveApp.indexOf('contact') > -1 ? 'active' : ''}
              ${props.openApps.indexOf('contact') === -1 ? 'closed-program' : ''}
              ${props.minimizedApps.indexOf('contact') === -1 ? 'minimized-program' : ''}`}
            onClick={(e) => props.updateStartbar('contact')}>
            <img src={email} alt="email"/>
            <span>Contact</span>
          </button>
          <button
            className={`
              startbar-button startbar-contact button
              ${props.currentlyActiveApp.indexOf('paint') > -1 ? 'active' : ''}
              ${props.openApps.indexOf('paint') === -1 ? 'closed-program' : ''}
              ${props.minimizedApps.indexOf('paint') === -1 ? 'minimized-program' : ''}`}
            onClick={(e) => props.updateStartbar('paint')}>
            <img src={paint} alt="paint"/>
            <span>Paint</span>
          </button>
        </div>
        <Clock />
      </div>
      {
        props.openStart &&
        <div className="start-cupboard visible">
          <a
          href="#"
          className="paint"
          onClick={(e) => props.openApp(e, 'paint')}>
          <img src={paint} alt="computer"/>
            <span>Paint</span>
          </a>
          <a
          href="#"
          className="shutdown"
          onClick={(e) => props.shutDown(e)}>
          <img src={computer} alt="computer"/>
            <span>Shut Down...</span>
          </a>
        </div>
      }
    </div>
  );
};

StartBar.propTypes = {
  openApp: PropTypes.func,
  openApps: PropTypes.array,
  shutDown: PropTypes.func,
  start: PropTypes.func,
  openStart: PropTypes.bool,
  minimizedApps: PropTypes.array,
  updateStartbar: PropTypes.func,
  currentlyActiveApp: PropTypes.string
};

export default StartBar;
