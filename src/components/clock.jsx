import React, { useState, useEffect } from 'react';

import '../css/clock.css';

const Clock = () => {
  const [time, setTime] = useState('');

  const checkTime = (i) => (i < 10 ? `0${i}` : i);

  const startTime = () => {
    const today = new Date();
    const hh = today.getHours();

    let m = today.getMinutes();
    m = checkTime(m);

    let dd = 'AM';

    let h = hh;
    if (h >= 12) {
      h = hh - 12;
      dd = 'PM';
    }
    if (h === 0) {
      h = 12;
    }

    setTimeout(startTime, 1000);

    setTime(`${h}:${m} ${dd}`);
  };

  useEffect(() => {
    startTime();
  }, []);

  return (
    <div className="clock">{time}</div>
  );
};

export default Clock;
