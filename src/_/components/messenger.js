import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import Draggable from 'react-draggable';
import Toolbar from './toolbar';
import Message from './message';
import UserInput from './userInput';

import bot from '../images/bot.svg';

var data = require('../../data.json');
var firstTime = true;
var userInput;
var workCount = 1;

class Messenger extends Component {
    constructor() {
        super();

        this.findResponses = this.findResponses.bind(this);
        this.addMessage = this.addMessage.bind(this);
        this.loadSection = this.loadSection.bind(this);
    }

    componentWillMount() {
        this.setState({
			messages: [{id:0,type:"",content:""}],
            entryField: [{type: 'textField', response: data.introduction.response, settings: 'replaceName', addtlResponses: 1, marker: 'introduction'}],
            guestName: ""
		});
    }

    componentDidMount() {
        let count = 2000;
        let activeTyping = document.getElementsByClassName('activeTyping')[0];

        setTimeout(() => {
            activeTyping.classList.add('visible');
        }, count / 2);

        setTimeout(() => {
            this.setState({
    			messages: [{id:1,type:"received",content:data.introduction.greeting}],
    		});

            activeTyping.classList.remove('visible');
        }, count);

        userInput = document.getElementsByClassName('userInput')[0];

        var textField = document.getElementById("messageField");
        textField.focus();

        textField.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {

                this.findResponses(textField);

                textField.value = "";

                userInput.classList.add('hidden');
                textField.blur();
            }
        }.bind(this));
    }

    componentDidUpdate() {
        var objDiv = document.getElementsByClassName("messages")[0];
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    findResponses(userObject) {
        let responseBasic, response, extraResponses;

        if(userObject.hasAttribute('data-response')) {
            responseBasic = userObject.getAttribute('data-response');

            if(userObject.hasAttribute('data-settings') && userObject.getAttribute('data-settings') === "replaceName") {
                response = responseBasic.replace('NAME', userObject.value);
                    this.setState({guestName: userObject.value});
            }
        }

        if(userObject.getAttribute('data-addtl-responses')) {
            extraResponses = this.createExtraResponses(Number(userObject.getAttribute('data-addtl-responses')), userObject.getAttribute('data-marker'), responseBasic);
        }

        this.addMessage('sent', userObject.value, response, extraResponses);
    }

    createExtraResponses(total, spot, originalResponse) {
        let addtlResponses;

        let dataMarker = "";
        if(spot === 'work') {
            dataMarker = data[spot]['project' + workCount];
        } else {
            dataMarker = data[spot];
        }

        const getKey = (obj,val) => Object.keys(obj).find(key => obj[key] === val);

        let totalResponses = total;
        let dataArray = Object.keys(dataMarker);
        let dataResponse = getKey(dataMarker,originalResponse);
        let dataLocation = dataArray.indexOf(dataResponse);
            addtlResponses = [];

        for(let i = 1; i <= totalResponses; i++) {
            addtlResponses.push(dataMarker[dataArray[dataLocation + i]]);
        }

        return addtlResponses;
    }

    addMessage(type, content, response, addtlResponses) {
        let id = this.state.messages[this.state.messages.length-1].id + 1;
        let newMessages = this.state.messages.slice();
        let count = 2500;
        let activeTyping = document.getElementsByClassName('activeTyping')[0];

        if(content) {
            newMessages.push({id: id, type: type, content: content});
            this.setState({messages:newMessages});
        }

        if(response) {
            setTimeout(() => {
                activeTyping.classList.add('visible');
            }, count / 2);

            setTimeout(() => {
                newMessages.push({id: id + 1, type: "received", content: response});
                this.setState({messages:newMessages});
            }, count);
        }

        if(addtlResponses) {
            for(let i = 1; i <= addtlResponses.length; i++) {
                count += Math.floor(Math.random() * 3000) + 2000;
                this.additionalMessages(i, count, newMessages, addtlResponses, activeTyping);
            }
        } else {
            // If there are no additional responses, we still need to make sure our activeTyping message and userInput fields hide/show appropriately (timing based on how long the first response always takes)
            setTimeout(() => {
                activeTyping.classList.remove('visible');
                userInput.classList.remove('hidden');
            }, count);
        }
    }

    additionalMessages(i, count, newMessages, addtlResponses, activeTyping) {
        setTimeout(() => {
            let lastMessage = newMessages[newMessages.length-1].id;
            newMessages.push({id: lastMessage + 1, type: "received", content: addtlResponses[i - 1]});
            this.setState({messages:newMessages});

            if(i >= addtlResponses.length) {
                activeTyping.classList.remove('visible');
                userInput.classList.remove('hidden');

                // Checking to see if we've just finished the introduction, in which case let's trigger the homescreen
                if(this.state.messages[3] && !this.state.messages[4]) {
                    this.homeScreen();
                }
            }
        }, count);
    }

    homeScreen(email, userChoice) {
        userInput.classList.add('hidden');

        if(firstTime) {
            this.setState({entryField: [{type: 'button', response: data.home.choiceFirstTime}]});
        } else {
            this.setState({entryField: [{type: 'button', response: data.home.choiceGeneral}]});
        }

        let message = "";
        if(firstTime) {
            message = data.home.questionFirstTime;
            firstTime = false;
        } else if(email) {
            message = data.home.questionEmailSent;
        } else {
            message = data.home.questionGeneral;
        }

        if(userChoice) {
            this.addMessage('sent', userChoice, message);
        } else {
            this.addMessage('received', null, message);
        }
    }

    loadSection(location, index, extra, buttonCopy) {
        if(location !== 'yes' && location !== 'work') {
            workCount = 1;
        }

        if(location === 'email') {
            window.open('mailto:' + index, '_blank');

            this.homeScreen('email');

            return;
        }

        if(location === 'home' || location === 'no') {
            this.homeScreen(null, buttonCopy);

            return;
        }

        userInput.classList.add('hidden');

        let startingPoint = "";
        if(location === 'yes') {
            workCount += 1;
            startingPoint = data['work']['project' + workCount]['response'];
            extra = Object.keys(data['work']['project' + workCount]).length - 1;
            location = 'work';
        } else if(typeof data[location][index] === 'object') {
            startingPoint = data[location][index]['response'];
        } else {
            startingPoint = data[location][index];
        }

        let extraResponses = "";
        if(!isNaN(extra)) {
            extraResponses = this.createExtraResponses(extra, location, startingPoint);
        }

        this.addMessage('sent', buttonCopy, startingPoint, extraResponses);

        let choice = data[location].choice;
        if(location === 'work' && data['work']['project' + (workCount + 1)] === undefined) {
            choice = data[location].choiceLast;
        }

        this.setState({entryField: [{type: 'button', response: choice}]});
    }

    render() {
        return (
            <Draggable defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}} handle=".toolbar">
                <div className="messenger program" onClick={this.props.activeApp.bind(null, 'messenger')}>
                    <Toolbar closeApp={this.props.closeApp} minimizeApp={this.props.minimizeApp} component="messenger" image={bot} title="Chat" />
                    <div className="messages content">
                        <CSSTransitionGroup
                        transitionName="messages--transition"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                            {
                                this.state.messages.map((item, index) => (
                                        <Message key={item.id} type={item.type} content={item.content} classes={item.classes} guest={this.state.guestName} openInNewTab={this.props.openInNewTab}/>
                                ))
                            }
                        </CSSTransitionGroup>
                    </div>
                    <span className="activeTyping">Heather is typing...</span>
                    <UserInput entryField={this.state.entryField} loadData={this.loadSection} />
                </div>
            </Draggable>
        );
    }
}

export default Messenger;
