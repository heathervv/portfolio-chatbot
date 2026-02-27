import { useEffect, useState } from 'react';

import '../css/clock.css';

const formatHour = (hour: number): number => {
  if (hour === 0) {
    return 12;
  }

  if (hour > 12) {
    return hour - 12;
  }

  return hour;
};

const getTimeString = (): string => {
  const now = new Date();
  const hours24 = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const suffix = hours24 >= 12 ? 'PM' : 'AM';

  return `${formatHour(hours24)}:${minutes} ${suffix}`;
};

const Clock = () => {
  const [time, setTime] = useState<string>(getTimeString);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(getTimeString());
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return <div className="clock">{time}</div>;
};

export default Clock;
