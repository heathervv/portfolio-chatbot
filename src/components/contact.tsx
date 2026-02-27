import { apps, contact, icons } from '../config';
import type { AppWindowId, WindowControlProps } from '../types/app';

import Program from './program';

const Contact = ({
  updateActiveApp,
  closeApp,
  updateStartbar,
  openApps,
  minimizedApps,
  currentlyActiveApp,
  previouslyActiveApp,
}: WindowControlProps) => {
  const contactId = apps.contact.toLowerCase() as AppWindowId;

  return (
    <Program
      programName={apps.contact}
      programIcon={icons[contactId].url}
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
};

export default Contact;
