import React from 'react';
import PropTypes from 'prop-types';

import '../css/toolbar.css';

const Toolbar = ({
  image,
  title,
  closeApp,
  component,
  updateStartbar,
  notificationStyle,
}) => (
  <div className="toolbar">
    <div className="title">
      <img src={image} alt={image} />
      {' '}
      <span>{title}</span>
    </div>
    <button
      type="button"
      className={`button-small ${notificationStyle ? 'disabled' : ''}`}
      onClick={(e) => closeApp(e, component)}
    >
      ×
    </button>
    {
        !notificationStyle
        && <button type="button" className="button-small minimize" onClick={() => updateStartbar(component, true)}>_</button>
      }
  </div>
);

Toolbar.defaultProps = {
  image: '',
  title: '',
  closeApp: () => {},
  component: '',
  updateStartbar: () => {},
  notificationStyle: false,
};

Toolbar.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  closeApp: PropTypes.func,
  component: PropTypes.string,
  updateStartbar: PropTypes.func,
  notificationStyle: PropTypes.bool,
};

export default Toolbar;
