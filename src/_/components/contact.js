import React from 'react';
import PropTypes from 'prop-types';

// Components
import Draggable from 'react-draggable';
import Toolbar from './toolbar';

// Assets
const data = require('../../data.json');
import email from '../images/email.svg';

const Contact = (props) => {
  let emailLink = "heathervandervecht@gmail.com";
  let linkedin = "https://ca.linkedin.com/in/heathervandervecht";
  let github = "http://github.com/heathervv";
  let codepen = "http://codepen.io/_heathervv";
  let twitter = "http://twitter.com/_heathervv";
  let instagram = "http://instagram.com/_heathervv";
  return (
    <Draggable
      defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}}
      handle=".toolbar">
      <div
        className={`contact program txt-file ${props.currentlyActiveApp === 'contact' ? 'active' : ''} ${props.previouslyActiveApp === 'contact' ? 'previous-active' : ''}`}
        data-view={props.openApps.indexOf('contact') === -1 ? 'closed' : props.minimizedApps.indexOf('contact') !== -1 ? 'closed' : ''}
        onClick={props.activeApp.bind(null, 'contact')}>
        <Toolbar
          closeApp={props.closeApp}
          minimizeApp={props.minimizeApp}
          component="contact"
          image={email}
          title="Contact" />
        <div
          className="content"
          contentEditable="true"
          suppressContentEditableWarning>
          {data.contact.infoFile}
          <br/>
          <br/>
          ==========================================
          <br/>
          <br/>
          <a onClick={props.openInNewTab.bind(null, "mailto:" + emailLink)} href={"mailto:" + emailLink}>{emailLink}</a> <br/>
          <a onClick={props.openInNewTab.bind(null, linkedin)} href={linkedin}>LinkedIn</a> <br/>
          <a onClick={props.openInNewTab.bind(null, github)} href={github}>GitHub</a> <br/>
          <a onClick={props.openInNewTab.bind(null, codepen)} href={codepen}>CodePen</a> <br/>
          <a onClick={props.openInNewTab.bind(null, twitter)} href={twitter}>Twitter</a> <br/>
          <a onClick={props.openInNewTab.bind(null, instagram)} href={instagram}>Instagram</a>
        </div>
      </div>
    </Draggable>
  );
};

Contact.propTypes = {
  activeApp: PropTypes.func,
  closeApp: PropTypes.func,
  minimizeApp: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps : PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
};

export default Contact;
