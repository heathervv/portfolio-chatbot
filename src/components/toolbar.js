import React from 'react'
import PropTypes from 'prop-types'

import '../css/toolbar.css'

const Toolbar = ({
  image,
  title,
  closeApp,
  component,
  updateStartbar,
  notificationStyle
}) => (
  <div className="toolbar">
    <div className="title">
      <img src={image} alt={image}/> <span>{title}</span>
    </div>
    <button className={`button-small ${notificationStyle ? 'disabled' : ''}`} onClick={closeApp.bind(null, component)}>×</button>
    {
      !notificationStyle &&
      <button className="button-small minimize" onClick={() => updateStartbar(component, true)}>_</button>
    }
  </div>
)

Toolbar.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  closeApp: PropTypes.func,
  component: PropTypes.string,
  updateStartbar: PropTypes.func,
  notificationStyle: PropTypes.bool
}

export default Toolbar
