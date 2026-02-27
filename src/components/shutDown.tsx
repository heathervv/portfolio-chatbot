import { apps, icons } from '../config';
import type { AppWindowId } from '../types/app';

import Program from './program';

interface ShutDownProps {
  restart: () => void;
}

const ShutDown = ({ restart }: ShutDownProps) => {
  const shutdownId = apps.shutdown.toLowerCase() as AppWindowId;

  return (
    <Program
      currentlyActiveApp={shutdownId}
      programName={apps.shutdown}
      openApps={[shutdownId]}
      programIcon={icons[shutdownId].url}
      notificationStyle
      systemStyle
    >
      It is now safe to turn off your computer.
      <br />
      <br />
      <button type="button" className="button-medium" onClick={restart}>
        Restart
      </button>
    </Program>
  );
};

export default ShutDown;
