import React from 'react';
import PropTypes from 'prop-types';

// Components
import Program from './program';

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
    <Program
      programName="Contact"
      programIcon={email}
      contentEditable
      updateActiveApp={props.updateActiveApp}
      updateStartbar={props.updateStartbar}
      closeApp={props.closeApp}
      openInNewTab={props.openInNewTab}
      openApps={props.openApps}
      minimizedApps={props.minimizedApps}
      currentlyActiveApp={props.currentlyActiveApp}
      previouslyActiveApp={props.previouslyActiveApp} >
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
    </Program>
  );
};

Contact.propTypes = {
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
};

export default Contact;
