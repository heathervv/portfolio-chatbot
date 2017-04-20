import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Toolbar from './toolbar';

var data = require('../../data.json');

import email from '../images/email.svg';

class Contact extends Component {
    render() {
        let emailLink = "heathervandervecht@gmail.com";
        let linkedin = "https://ca.linkedin.com/in/heathervandervecht";
        let github = "http://github.com/heathervv";
        let codepen = "http://codepen.io/_heathervv";
        let twitter = "http://twitter.com/_heathervv";
        let instagram = "http://instagram.com/_heathervv";
        return (
            <Draggable defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}} handle=".toolbar">
                <div className="contact program txt-file" data-view="closed" onClick={this.props.activeApp.bind(null, 'contact')}>
                    <Toolbar closeApp={this.props.closeApp} minimizeApp={this.props.minimizeApp} component="contact" image={email} title="Contact" />
                    <div className="content" contentEditable="true" suppressContentEditableWarning>
                        {data.contact.infoFile}
                        <br/>
                        <br/>
                        ==========================================
                        <br/>
                        <br/>
                        <a onClick={this.props.openInNewTab.bind(null, "mailto:" + emailLink)} href={"mailto:" + emailLink}>{emailLink}</a> <br/>
                        <a onClick={this.props.openInNewTab.bind(null, linkedin)} href={linkedin}>LinkedIn</a> <br/>
                        <a onClick={this.props.openInNewTab.bind(null, github)} href={github}>GitHub</a> <br/>
                        <a onClick={this.props.openInNewTab.bind(null, codepen)} href={codepen}>CodePen</a> <br/>
                        <a onClick={this.props.openInNewTab.bind(null, twitter)} href={twitter}>Twitter</a> <br/>
                        <a onClick={this.props.openInNewTab.bind(null, instagram)} href={instagram}>Instagram</a>
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Contact;
