import { useEffect, useState } from 'react';
import graphic from '../images/screensaver.gif';
import '../css/screensaver.css';

const Screensaver = () => {
  const [screensaverIsVisible, changeScreensaverVisibility] = useState(false);

  const classNames = [
    'screensaver',
    screensaverIsVisible ? 'screensaver-visible' : 'screensaver-not-visible',
  ];

  const setScreensaver = (title: string, visibility: boolean) => {
    document.title = title;
    changeScreensaverVisibility(visibility);
  };

  useEffect(() => {
    const originalDocTitle = document.title;
    let timeout: number | undefined;

    const handleMouseMove = () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }

      setScreensaver(originalDocTitle, false);
      timeout = window.setTimeout(() => {
        setScreensaver('Zzz... 🌚', true);
      }, 30000);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setScreensaver('Zzz... 🌚', true);
      } else {
        setScreensaver(originalDocTitle, false);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <div
      className={classNames.join(' ')}
      style={{ backgroundImage: `url(${graphic})` }}
    />
  );
};

export default Screensaver;
