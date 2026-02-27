import Linkify from 'react-linkify';

import { apps, icons, work } from '../config';
import type { AppWindowId, WindowControlProps } from '../types/app';

import Program from './program';

const componentDecorator = (href: string, text: string, key: number | string) => (
  <a href={href} key={key} target="_blank" rel="noreferrer">
    {text}
  </a>
);

const Work = ({
  updateActiveApp,
  updateStartbar,
  closeApp,
  openApps,
  minimizedApps,
  currentlyActiveApp,
  previouslyActiveApp,
}: WindowControlProps) => {
  const workId = apps.work.toLowerCase() as AppWindowId;

  return (
    <Program
      programName={apps.work}
      programRights="[Read Only]"
      programIcon={icons[workId].url}
      updateActiveApp={updateActiveApp}
      updateStartbar={updateStartbar}
      closeApp={closeApp}
      openApps={openApps}
      minimizedApps={minimizedApps}
      currentlyActiveApp={currentlyActiveApp}
      previouslyActiveApp={previouslyActiveApp}
    >
      <Linkify componentDecorator={componentDecorator}>
        {work.map((item) => (
          <div key={`item-${item.title}`}>
            <h3>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.title}</a> : item.title}</h3>
            <p>{item.copy}</p>
          </div>
        ))}
      </Linkify>
    </Program>
  );
};

export default Work;
