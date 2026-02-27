import { useEffect, useState } from 'react';
import type { ComponentType, MouseEvent as ReactMouseEvent } from 'react';
import './App.css';

import {
  apps,
  icons,
  resumeLink,
  systemSettings as systemConfig,
} from './config';
import StartBar from './components/startbar';
import Messenger from './components/messenger';
import Work from './components/work';
import Contact from './components/contact';
import Settings from './components/settings';
import ShutDown from './components/shutDown';
import Screensaver from './components/screensaver';

import type {
  ActiveSystemSettings,
  AppWindowId,
  SystemBackground,
  SystemTheme,
} from './types/app';

import resume from './images/resume.svg';

import './css/theme.css';

const programComponents: Record<Exclude<AppWindowId, 'shutdown'>, ComponentType<any>> = {
  chat: Messenger,
  work: Work,
  contact: Contact,
  settings: Settings,
};

const getDefaultBackground = (): SystemBackground => systemConfig.background[0];
const getDefaultTheme = (): SystemTheme => systemConfig.theme[0] ?? 'Light';

const App = () => {
  const loadSystemBackground = (): SystemBackground => {
    const existingBackground = localStorage.getItem('background');

    if (existingBackground) {
      const background = systemConfig.background.find((item) => item.name === existingBackground);
      if (background) {
        return background;
      }
    }

    const defaultBackground = getDefaultBackground();
    localStorage.setItem('background', defaultBackground.name);
    return defaultBackground;
  };

  const loadSystemTheme = (): SystemTheme => {
    const existingTheme = localStorage.getItem('theme');

    if (existingTheme) {
      const theme = systemConfig.theme.find((item) => item === existingTheme);
      if (theme) {
        return theme;
      }
    }

    const defaultTheme = getDefaultTheme();
    localStorage.setItem('theme', defaultTheme);
    return defaultTheme;
  };

  const openInNewTab = (elem: string) => {
    const win = window.open(elem, '_blank');

    if (win) {
      win.focus();
    }
  };

  const linkClickListener = (event: Event) => {
    const target = event.target as HTMLElement | null;

    if (target?.tagName === 'A') {
      openInNewTab((target as HTMLAnchorElement).href);
    }
  };

  const [shutDown, setShutDown] = useState(false);
  const [openApps, setOpenApps] = useState<AppWindowId[]>(['chat']);
  const [minimizedApps, setMinimizedApps] = useState<AppWindowId[]>([]);
  const [openStart, setOpenStart] = useState(false);
  const [currentlyActiveApp, setCurrentlyActiveApp] = useState<AppWindowId | ''>('chat');
  const [previouslyActiveApp, setPreviouslyActiveApp] = useState<AppWindowId | ''>('');
  const [systemSettings, setSystemSettings] = useState<ActiveSystemSettings>({
    background: loadSystemBackground(),
    theme: loadSystemTheme(),
  });

  useEffect(() => {
    document.addEventListener('click', linkClickListener, false);

    const legacyDocument = document as Document & {
      attachEvent?: (type: string, listener: (event: Event) => void) => void;
    };

    if (!document.addEventListener && legacyDocument.attachEvent) {
      legacyDocument.attachEvent('onclick', linkClickListener);
    }

    return () => {
      document.removeEventListener('click', linkClickListener, false);
    };
  }, []);

  const start = (status: 'close' | 'open') => {
    setOpenStart(status !== 'close');
  };

  const updateActiveApp = (
    event: ReactMouseEvent<HTMLElement> | null,
    component: AppWindowId,
  ) => {
    if (event) {
      event.preventDefault();
    }

    if (component === currentlyActiveApp) {
      return;
    }

    setPreviouslyActiveApp(currentlyActiveApp);
    setCurrentlyActiveApp(component);
  };

  const openApp = (
    event: ReactMouseEvent<HTMLElement> | null,
    component: AppWindowId,
  ) => {
    if (event) {
      event.preventDefault();
    }

    const updatedMinimizedApps = [...minimizedApps];
    if (updatedMinimizedApps.indexOf(component) > -1) {
      for (let i = updatedMinimizedApps.length - 1; i >= 0; i -= 1) {
        if (updatedMinimizedApps[i] === component) {
          updatedMinimizedApps.splice(i, 1);
        }
      }
    }

    setOpenApps((prev) => [...prev, component]);
    setMinimizedApps(updatedMinimizedApps);

    updateActiveApp(null, component);
    start('close');
  };

  const closeApp = (
    event: ReactMouseEvent<HTMLElement> | null,
    component: AppWindowId,
  ) => {
    if (event) {
      event.preventDefault();
    }

    setOpenApps((prev) => prev.filter((app) => app !== component));
  };

  const updateStartbar = (component: AppWindowId, minimizeWindow?: boolean) => {
    const updatedMinimizedApps = [...minimizedApps];

    if (minimizeWindow) {
      // if we manually ask to minimize
      updatedMinimizedApps.push(component);
    } else if (updatedMinimizedApps.indexOf(component) > -1) {
      // if app is currently minimized and needs to be brought back
      const index = updatedMinimizedApps.indexOf(component);
      updatedMinimizedApps.splice(index, 1);

      updateActiveApp(null, component);
    } else {
      // Otherwise, let's just set to currently active app
      updateActiveApp(null, component);
    }

    setMinimizedApps(updatedMinimizedApps);
    start('close');
  };

  const triggerShutdown = (event: ReactMouseEvent<HTMLElement> | null, restart = false) => {
    if (event) {
      event.preventDefault();
    }

    setShutDown(!restart);
    setOpenStart(false);
    setOpenApps([]);
    setMinimizedApps([]);
    setCurrentlyActiveApp('');
    setPreviouslyActiveApp('');
  };

  const changeSystemSettings = (background: SystemBackground | null = null, theme: SystemTheme | null = null) => {
    if (background) {
      localStorage.setItem('background', background.name);
    }

    if (theme) {
      localStorage.setItem('theme', theme);
    }

    setSystemSettings((current) => ({
      background: background ?? current.background,
      theme: theme ?? current.theme,
    }));
  };

  return (
    <section className={`desktop theme-${systemSettings.theme.toLowerCase()}`} style={{ backgroundImage: `url(${systemSettings.background.url})` }}>
      <div className="icons">
        <button type="button" onClick={(event) => openApp(event, apps.messenger.toLowerCase() as AppWindowId)}>
          <img
            src={icons[apps.messenger.toLowerCase() as AppWindowId].url}
            alt={icons[apps.messenger.toLowerCase() as AppWindowId].alt}
          />
          {' '}
          {apps.messenger}
        </button>
        <button type="button" onClick={(event) => openApp(event, apps.contact.toLowerCase() as AppWindowId)}>
          <img
            src={icons[apps.contact.toLowerCase() as AppWindowId].url}
            alt={icons[apps.contact.toLowerCase() as AppWindowId].alt}
          />
          {' '}
          {apps.contact}
        </button>
        <button type="button" onClick={(event) => openApp(event, apps.work.toLowerCase() as AppWindowId)}>
          <img src={icons[apps.work.toLowerCase() as AppWindowId].url} alt={icons[apps.work.toLowerCase() as AppWindowId].alt} />
          {' '}
          {apps.work}
        </button>
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
          <img src={resume} alt="Icon of resume" />
          {' '}
          Resume
        </a>
      </div>

      {Object.keys(programComponents).map((program) => {
        const programId = program as Exclude<AppWindowId, 'shutdown'>;

        if (
          openApps.indexOf(programId) === -1
          && minimizedApps.indexOf(programId) === -1
        ) {
          return null;
        }

        const ProgramBlock = programComponents[programId];

        return (
          <ProgramBlock
            key={`program-${programId}`}
            updateActiveApp={updateActiveApp}
            closeApp={closeApp}
            updateStartbar={updateStartbar}
            openApps={openApps}
            minimizedApps={minimizedApps}
            currentlyActiveApp={currentlyActiveApp}
            previouslyActiveApp={previouslyActiveApp}
            activeSystemSettings={systemSettings}
            changeSystemSettings={changeSystemSettings}
          />
        );
      })}

      <StartBar
        currentlyActiveApp={currentlyActiveApp}
        openApps={openApps}
        minimizedApps={minimizedApps}
        shutDown={triggerShutdown}
        updateStartbar={updateStartbar}
        start={start}
        openStart={openStart}
        openSettings={(event: ReactMouseEvent<HTMLElement>) => openApp(event, apps.settings.toLowerCase() as AppWindowId)}
      />

      <div className={`shutDownPage ${shutDown ? 'visible' : ''}`}>
        <ShutDown restart={() => triggerShutdown(null, true)} />
      </div>

      <Screensaver />
    </section>
  );
};

export default App;
