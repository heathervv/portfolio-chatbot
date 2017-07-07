import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Clock from './clock';

// Assets
import bot from '../images/bot.svg';
import flag from '../images/flag.svg';
import email from '../images/email.svg';
import briefcase from '../images/briefcase.svg';
import computer from '../images/computer.svg';

class StartBar extends Component {
    unminimizeApp(event, component) {
      // This needs to be moved up to App.js and hooked up to state.
        event.preventDefault();

        let button = document.getElementsByClassName(component)[0];
        if(button.getAttribute('data-view') === 'minimized') {
            document.getElementsByClassName(component)[0].removeAttribute('data-view');

            this.props.activeApp(component, null);
        } else if(button.classList.contains('active')) {
            document.getElementsByClassName('startbar-' + component)[0].classList.remove('active');
            document.getElementsByClassName(component)[0].setAttribute('data-view', 'minimized');
        } else {
            this.props.activeApp(component, null);
        }
    }

    openStart(event) {
        event.preventDefault();

        let start = document.getElementsByClassName('start')[0];
        let startCupboard = document.getElementsByClassName('start-cupboard')[0];

        if(start.classList.contains('active')) {
            start.classList.remove('active');
            startCupboard.classList.remove('visible');
        } else {
            start.classList.add('active');
            startCupboard.classList.add('visible');
        }

        const startPrograms = document.getElementsByClassName('startbar-button');

        for(let i = 0; i < startPrograms.length; i++) {
            startPrograms[i].classList.remove('active');
        }

        event.stopPropagation();
    }

    render() {
        return (
            <div className="start-wrapper">
                <div className="startbar">
                    <a
                      href="#"
                      className={`start button ${this.props.openStart ? 'active' : ''}`}
                      onClick={(e) => this.openStart(e)}>
                        <img src={flag} alt="flag"/>
                        <span>Start</span>
                    </a>
                    <div className="programs">
                        <a
                          href="#"
                          className={`startbar-button startbar-messenger button active ${this.props.openApps.indexOf('messenger') === -1 ? 'closed-program' : ''} ${this.props.minimizedApps.indexOf('messenger') === -1 ? 'minimized-program' : ''}`}
                          onClick={(e) => this.unminimizeApp(e, 'messenger')}>
                            <img src={bot} alt="bot"/>
                            <span>Chat</span>
                        </a>
                        <a
                          href="#"
                          className={`startbar-button startbar-work button ${this.props.openApps.indexOf('work') === -1 ? 'closed-program' : ''} ${this.props.minimizedApps.indexOf('work') === -1 ? 'minimized-program' : ''}`}
                          onClick={(e) => this.unminimizeApp(e, 'work')}>
                            <img src={briefcase} alt="briefcase"/>
                            <span>Work</span>
                          </a>
                        <a
                          href="#"
                          className={`startbar-button startbar-contact button ${this.props.openApps.indexOf('contact') === -1 ? 'closed-program' : ''} ${this.props.minimizedApps.indexOf('contact') === -1 ? 'minimized-program' : ''}`}
                          onClick={(e) => this.unminimizeApp(e, 'contact')}>
                            <img src={email} alt="email"/>
                            <span>Contact</span>
                        </a>
                    </div>
                    <Clock />
                </div>
                <div className={`start-cupboard ${this.props.openStart ? 'visible' : ''}`}>
                    <a
                      href="#"
                      className="shutdown"
                      onClick={(e) => this.props.shutDown(e)}>
                        <img src={computer} alt="computer"/>
                        <span>Shut Down...</span>
                    </a>
                </div>
            </div>
        );
    }
}

StartBar.propTypes = {
  activeApp: PropTypes.func,
  openApps: PropTypes.array,
  shutDown: PropTypes.func,
  openStart: PropTypes.bool,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string
};

export default StartBar;
