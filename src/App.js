import React, { Component } from 'react'
import './App.css'

import StartBar from './components/startbar'
import Messenger from './components/messenger'
import Work from './components/work'
import Contact from './components/contact'

import bot from './images/bot.svg'
import email from './images/email.svg'
import briefcase from './images/briefcase.svg'
import wave from './images/wave.svg'
import resume from './images/resume.svg'

import resumeFile from './Resume-HeatherVandervecht.pdf'

const programs = [Messenger, Work, Contact]

class App extends Component {
  state = {
    shutDown: false,
    openApps: ['messenger'],
    minimizedApps: [],
    openStart: false,
    currentlyActiveApp: 'messenger',
    previouslyActiveApp: ''
  }

  openApp = (e, component) => {
    e.preventDefault()

    const openApps = this.state.openApps
    openApps.push(component)

    this.setState({ openApps })

    this.updateActiveApp(component)

    this.start('close')
  }

  closeApp = (component, e) => {
    e.preventDefault()

    let openApps = this.state.openApps
    openApps = openApps.filter(e => e !== component)

    this.setState({ openApps })
  }

  updateStartbar = (component, appStatus) => {
    const minimizedApps = this.state.minimizedApps

    if (appStatus === 'minimize' || this.state.minimizedApps.indexOf(component) === -1) {
      minimizedApps.push(component)
    } else if (this.state.minimizedApps.indexOf(component) > -1) {
      const index = minimizedApps.indexOf(component)
      minimizedApps.splice(index, 1)

      this.updateActiveApp(component, null)
    }

    this.setState({ minimizedApps })
    this.start('close')
  }

  updateActiveApp = (component, e) => {
    if (e) e.preventDefault()

    if (component === this.state.updateActiveApp) return

    this.setState({ previouslyActiveApp: this.state.currentlyActiveApp })
    this.setState({ currentlyActiveApp: component })
  }


  start = (status) => {
    if (status === 'close')
      this.setState({ openStart: false })
    else
      this.setState({ openStart: true })
  }

  openInNewTab = (elem) => {
    const win = window.open(elem, '_blank')

    if(win) win.focus()
  }

  shutDown = (e) => {
    e.preventDefault()

    this.setState({ shutDown: true })
  }

  render() {
    const { openApps, minimizedApps, currentlyActiveApp, previouslyActiveApp, openStart, shutDown } = this.state

    return (
      <section className="desktop">
        <div className="icons">
          <button onClick={e => this.openApp(e, 'messenger')}>
            <img src={bot} alt="Icon of bot" /> Chat
          </button>
          <button onClick={e => this.openApp(e, 'contact')}>
            <img src={email} alt="Icon of email" /> Contact
          </button>
          <button onClick={e => this.openApp(e, 'work')}>
            <img src={briefcase} alt="Icon of briefcase" /> Work
          </button>
          <a href={resumeFile} target="_blank">
            <img src={resume} alt="Icon of resume" /> Resume
          </a>
        </div>

        {
          programs.map((program, i) => {
            const ProgramBlock = program

            return (
              <ProgramBlock
                key={i}
                updateActiveApp={this.updateActiveApp}
                closeApp={this.closeApp}
                updateStartbar={this.updateStartbar}
                openInNewTab={this.openInNewTab}
                openApps={openApps}
                minimizedApps={minimizedApps}
                currentlyActiveApp={currentlyActiveApp}
                previouslyActiveApp={previouslyActiveApp} />
            )
          })
        }

        <StartBar
          openApp={this.openApp}
          updateActiveApp={this.updateActiveApp}
          currentlyActiveApp={currentlyActiveApp}
          openApps={openApps}
          minimizedApps={minimizedApps}
          shutDown={this.shutDown}
          updateStartbar={this.updateStartbar}
          start={this.start}
          openStart={openStart}
        />

        <div className={`shutDownPage ${shutDown ? 'visible' : ''}`}>
          <div>
            <img src={wave} alt="wave" />
          </div>
        </div>
      </section>
    )
  }
}

export default App
