import React from 'react';
import PropTypes from 'prop-types';

const Toolbar = (props) => {
  return (
      <div className="toolbar">
          <div className="title">
              <img src={props.image} alt={"image of a " + props.image}/> <span>{props.title}</span>
          </div>
          <a href="#" className="button-small" onClick={props.closeApp.bind(null, props.component)}>&#10005;</a>
          <a href="#" className="button-small minimize" onClick={() => props.updateStartbar(props.component, 'minimize')}>_</a>
      </div>
  );
};

Toolbar.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  closeApp: PropTypes.func,
  component: PropTypes.string,
  updateStartbar: PropTypes.func
};

export default Toolbar;
