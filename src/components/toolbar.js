import React from 'react'
import PropTypes from 'prop-types'

import '../css/toolbar.css'

const Toolbar = ({ image, title, closeApp, component, updateStartbar }) => (
  <div className="toolbar">
    <div className="title">
      <img src={image} alt={`image of a ${image}`}/> <span>{title}</span>
    </div>
    <button className="button-small" onClick={closeApp.bind(null, component)}>×</button>
    <button className="button-small minimize" onClick={() => updateStartbar(component, true)}>_</button>
  </div>
)

Toolbar.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  closeApp: PropTypes.func,
  component: PropTypes.string,
  updateStartbar: PropTypes.func
}

export default Toolbar
