import React from 'react';
import PropTypes from 'prop-types';
import { apps, icons, contact } from '../config';

// Components
import Program from './program';

const Contact = ({
  updateActiveApp,
  closeApp,
  updateStartbar,
  openApps,
  minimizedApps,
  currentlyActiveApp,
  previouslyActiveApp,
}) => (
  <Program
    programName={apps.contact}
    programIcon={icons[apps.contact.toLowerCase()].url}
    contentEditable
    updateActiveApp={updateActiveApp}
    updateStartbar={updateStartbar}
    closeApp={closeApp}
    openApps={openApps}
    minimizedApps={minimizedApps}
    currentlyActiveApp={currentlyActiveApp}
    previouslyActiveApp={previouslyActiveApp}
  >
    {contact.content}
    <br />
    <br />
    (Try writing here~)
    <br />
    <br />
    ==========================================
    <br />
    <br />
    <a href={contact.emailLink}>{contact.emailLink.replace('mailto:', '')}</a>
    {' '}
    <br />
    <a href={contact.linkedin}>LinkedIn</a>
    {' '}
    <br />
    <a href={contact.github}>GitHub</a>
  </Program>
);

Contact.defaultProps = {
  updateActiveApp: () => { },
  closeApp: () => { },
  updateStartbar: () => { },
  openApps: [],
  minimizedApps: [],
  currentlyActiveApp: '',
  previouslyActiveApp: '',
};

Contact.propTypes = {
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string,
};

export default Contact;
