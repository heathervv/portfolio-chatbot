import type { MouseEvent } from 'react';
import '../css/toolbar.css';

interface ToolbarProps {
  image?: string;
  title?: string;
  closeApp?: (event: MouseEvent<HTMLButtonElement>, component: string) => void;
  component?: string;
  updateStartbar?: (component: string, minimizeWindow?: boolean) => void;
  notificationStyle?: boolean;
}

const Toolbar = ({
  image = '',
  title = '',
  closeApp = () => {},
  component = '',
  updateStartbar = () => {},
  notificationStyle = false,
}: ToolbarProps) => (
  <div className="toolbar">
    <div className="title">
      <img src={image} alt={image} />
      {' '}
      <span>{title}</span>
    </div>
    <button
      type="button"
      className={`button-small ${notificationStyle ? 'disabled' : ''}`}
      onClick={(event) => closeApp(event, component)}
    >
      ×
    </button>
    {!notificationStyle && (
      <button
        type="button"
        className="button-small minimize"
        onClick={() => updateStartbar(component, true)}
      >
        _
      </button>
    )}
  </div>
);

export default Toolbar;
