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

        this.minimizeApp = this.minimizeApp.bind(this);
    }

    openApp(event, component) {
        event.preventDefault();

        document.getElementsByClassName(component)[0].removeAttribute('data-view');
        document.getElementsByClassName('startbar-' + component)[0].classList.remove('closed-program');

        this.activeApp(component);

        if(component === 'messenger') {
            let messenger = document.getElementsByClassName('messages')[0];
            messenger.scrollTop = messenger.scrollHeight;

            let message = document.getElementById("messageField");
            if(message) {
                message.focus();
            }
        }
    }

    closeApp(component, event) {
        event.preventDefault();

        document.getElementsByClassName(component)[0].setAttribute('data-view', 'closed');
        document.getElementsByClassName('startbar-' + component)[0].classList.add('closed-program');
    }

    minimizeApp(component, event) {
        event.preventDefault();

        document.getElementsByClassName(component)[0].setAttribute('data-view', 'minimized');
        document.getElementsByClassName('startbar-' + component)[0].classList.add('minimized-program');
        document.getElementsByClassName('startbar-' + component)[0].classList.remove('active');

        this.closeStart();

        event.stopPropagation();
    }

    activeApp(component, event) {
        if(event) {
            event.preventDefault();
        }

        const programs = document.getElementsByClassName('program');
        const startPrograms = document.getElementsByClassName('startbar-button');

        if(document.getElementsByClassName(component)[0].classList.contains('active')) {
            return
        }

        for(let i = 0; i < programs.length; i++) {
            if(programs[i].classList.contains('active')) {
                programs[i].classList.remove('active');
                programs[i].classList.add('previous-active');
            } else {
                programs[i].classList.remove('previous-active');
            }
        }

        for(let i = 0; i < startPrograms.length; i++) {
            startPrograms[i].classList.remove('active');
        }

        document.getElementsByClassName(component)[0].classList.add('active');
        document.getElementsByClassName('startbar-' + component)[0].classList.add('active');
    }

    closeStart() {
        let startCupboard = document.getElementsByClassName('start-cupboard')[0];

        if(startCupboard.classList.contains('visible')) {
            document.getElementsByClassName('start')[0].classList.remove('active');
            startCupboard.classList.remove('visible');
        }
    }

    openInNewTab(elem) {
        var win = window.open(elem, '_blank');

        if(win) {
            win.focus();
        }
    }

    render() {
        return (
            <section className="desktop" onClick={(e) => this.closeStart()}>
                <div className="icons">
                    <a href="#" onClick={(e) => this.openApp(e, 'messenger')}><img src={bot} alt="Icon of bot"/> Chat</a>
                    <a href="#" onClick={(e) => this.openApp(e, 'contact')}><img src={email} alt="Icon of email"/> Contact</a>
                    <a href="#" onClick={(e) => this.openApp(e, 'work')}><img src={briefcase} alt="Icon of briefcase"/> Work</a>
                    <a href={resume} target="_blank"><img src={resumeGraphic} alt="Icon of resume"/> Resume</a>
                </div>
                <Messenger activeApp={this.activeApp} closeApp={this.closeApp} minimizeApp={this.minimizeApp} openInNewTab={this.openInNewTab} />
                <Work activeApp={this.activeApp} closeApp={this.closeApp} minimizeApp={this.minimizeApp} openInNewTab={this.openInNewTab} />
                <Contact activeApp={this.activeApp} closeApp={this.closeApp} minimizeApp={this.minimizeApp} openInNewTab={this.openInNewTab} />
                <StartBar activeApp={this.activeApp} />

                <div className="shutDownPage">
                    <div>
                        <img src={wave} alt="wave"/>
                    </div>
                </div>
            </section>
        );
    }
}

export default App;
