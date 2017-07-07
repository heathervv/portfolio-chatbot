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

const programs = [Messenger, Work, Contact];

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
    this.updateStartbar = this.updateStartbar.bind(this);
    this.updateActiveApp = this.updateActiveApp.bind(this);
    this.start = this.start.bind(this);
    this.shutDown = this.shutDown.bind(this);
  }

  openApp(event, component) {
    event.preventDefault();

    const openApps = this.state.openApps;
    openApps.push(component);

    this.setState({ openApps });

    this.updateActiveApp(component);
  }

  closeApp(component, event) {
    event.preventDefault();

    let openApps = this.state.openApps;
    openApps = openApps.filter(e => e !== component);

    this.setState({ openApps: openApps });
  }

  updateStartbar(component, appStatus) {
    const minimizedApps = this.state.minimizedApps;

    if (appStatus === 'minimize') {
      minimizedApps.push(component);
    } else if (this.state.minimizedApps.indexOf(component) > -1) {
      const index = minimizedApps.indexOf(component);
      minimizedApps.splice(index, 1);

      this.updateActiveApp(component, null);
    } else if (this.state.minimizedApps.indexOf(component) === -1) {
      minimizedApps.push(component);
    }

    this.setState({ minimizedApps });
    this.start('close');
  }

  updateActiveApp(component, event) {
    if (event) event.preventDefault();

    if (component === this.state.updateActiveApp) return;

    this.setState({ previouslyActiveApp: this.state.currentlyActiveApp });
    this.setState({ currentlyActiveApp: component });
  }

  start(status) {
    if (status === 'close')
      this.setState({ openStart: false });
    else
      this.setState({ openStart: true });
  }

  openInNewTab(elem) {
    const win = window.open(elem, '_blank');

    if(win) win.focus();
  }

  shutDown(e) {
    e.preventDefault();

    this.setState({ shutDown: true });
  }

  render() {
    return (
      <section className="desktop">
        <div className="icons">
          <a href="#" onClick={() => this.openApp(event, 'messenger')}><img src={bot} alt="Icon of bot"/> Chat</a>
          <a href="#" onClick={() => this.openApp(event, 'contact')}><img src={email} alt="Icon of email"/> Contact</a>
          <a href="#" onClick={() => this.openApp(event, 'work')}><img src={briefcase} alt="Icon of briefcase"/> Work</a>
          <a href={resume} target="_blank"><img src={resumeGraphic} alt="Icon of resume"/> Resume</a>
        </div>

        {
          programs.map((program, i) => {
            const ProgramBlock = program;
            return (
              <ProgramBlock
                key={i}
                updateActiveApp={this.updateActiveApp}
                closeApp={this.closeApp}
                updateStartbar={this.updateStartbar}
                openInNewTab={this.openInNewTab}
                openApps={this.state.openApps}
                minimizedApps={this.state.minimizedApps}
                currentlyActiveApp={this.state.currentlyActiveApp}
                previouslyActiveApp={this.state.previouslyActiveApp} />
            );
          })
        }

        <StartBar
          updateActiveApp={this.updateActiveApp}
          currentlyActiveApp={this.state.currentlyActiveApp}
          openApps={this.state.openApps}
          minimizedApps={this.state.minimizedApps}
          shutDown={this.shutDown}
          updateStartbar={this.updateStartbar}
          start={this.start}
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
