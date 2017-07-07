import React, { Component } from 'react';
import Messenger from './_/components/messenger';
import Work from './_/components/work';
import Contact from './_/components/contact';
import StartBar from './_/components/startbar';
import './_/css/App.css';

import bot from './_/images/bot.svg';
import email from './_/images/email.svg';
import briefcase from './_/images/briefcase.svg';
import wave from './_/images/wave.svg';
import resumeGraphic from './_/images/resume.svg';

import resume from './_/Resume-HeatherVandervecht.pdf';

class App extends Component {
    constructor() {
        super();

        this.state = {
          shutDown: false,
          openApps: ['messenger'],
          minimizedApps: [],
          openStart: false,
          currentlyActiveApp: 'messenger',
          previouslyActiveApp: ''
        };

        this.openApp = this.openApp.bind(this);
        this.closeApp = this.closeApp.bind(this);
        this.minimizeApp = this.minimizeApp.bind(this);
        this.activeApp = this.activeApp.bind(this);
        this.closeStart = this.closeStart.bind(this);
        this.shutDown = this.shutDown.bind(this);
    }

    openApp(event, component) {
        event.preventDefault();

        const openApps = this.state.openApps;
        openApps.push(component);

        this.setState({ openApps: openApps });

        this.activeApp(component);
    }

    closeApp(component, event) {
        event.preventDefault();

        let openApps = this.state.openApps;
        openApps = openApps.filter(e => e !== component);

        this.setState({ openApps: openApps });
    }

    minimizeApp(component, event) {
        event.preventDefault();

        const minimizedApps = this.state.minimizedApps;
        minimizedApps.push(component);

        this.setState({ minimizedApps: minimizedApps });

        this.closeStart();

        event.stopPropagation();
    }

    activeApp(component, event) {
        if(event) {
            event.preventDefault();
        }

        if(component === this.state.activeApp) {
            return;
        }

        this.setState({ previouslyActiveApp: this.state.currentlyActiveApp });
        this.setState({ currentlyActiveApp: component });
    }

    closeStart() {
      if (this.state.openStart) this.setState({ openStart: false });
    }

    openInNewTab(elem) {
        const win = window.open(elem, '_blank');

        if(win) {
            win.focus();
        }
    }

    shutDown(e) {
      e.preventDefault();

      this.setState({ shutDown: true });
    }

    render() {
        return (
            <section className="desktop" onClick={() => this.closeStart()}>
                <div className="icons">
                    <a href="#" onClick={() => this.openApp(event, 'messenger')}><img src={bot} alt="Icon of bot"/> Chat</a>
                    <a href="#" onClick={() => this.openApp(event, 'contact')}><img src={email} alt="Icon of email"/> Contact</a>
                    <a href="#" onClick={() => this.openApp(event, 'work')}><img src={briefcase} alt="Icon of briefcase"/> Work</a>
                    <a href={resume} target="_blank"><img src={resumeGraphic} alt="Icon of resume"/> Resume</a>
                </div>
                <Messenger
                  activeApp={this.activeApp}
                  closeApp={this.closeApp}
                  minimizeApp={this.minimizeApp}
                  openInNewTab={this.openInNewTab}
                  openApps={this.state.openApps}
                  minimizedApps={this.state.minimizedApps}
                  currentlyActiveApp={this.state.currentlyActiveApp}
                  previouslyActiveApp={this.state.previouslyActiveApp} />
                <Work
                  activeApp={this.activeApp}
                  closeApp={this.closeApp}
                  minimizeApp={this.minimizeApp}
                  openInNewTab={this.openInNewTab}
                  openApps={this.state.openApps}
                  minimizedApps={this.state.minimizedApps}
                  currentlyActiveApp={this.state.currentlyActiveApp}
                  previouslyActiveApp={this.state.previouslyActiveApp} />
                <Contact
                  activeApp={this.activeApp}
                  closeApp={this.closeApp}
                  minimizeApp={this.minimizeApp}
                  openInNewTab={this.openInNewTab}
                  openApps={this.state.openApps}
                  minimizedApps={this.state.minimizedApps}
                  currentlyActiveApp={this.state.currentlyActiveApp}
                  previouslyActiveApp={this.state.previouslyActiveApp} />
                <StartBar
                  activeApp={this.activeApp}
                  currentlyActiveApp={this.state.currentlyActiveApp}
                  openApps={this.state.openApps}
                  minimizedApps={this.state.minimizedApps}
                  shutDown={this.shutDown}
                  openStart={this.state.openStart} />

                <div className={`shutDownPage ${this.state.shutDown === true ? 'visible' : ''}`}>
                    <div>
                        <img src={wave} alt="wave"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
