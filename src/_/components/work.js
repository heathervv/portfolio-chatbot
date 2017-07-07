import React from 'react';
import PropTypes from 'prop-types';

// Components
import Draggable from 'react-draggable';
import Toolbar from './toolbar';

// Assets
const data = require('../../data.json');
import briefcase from '../images/briefcase.svg';

const Work = (props) => {
  return (
    <Draggable
			defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}}
			handle=".toolbar">
        <div
					className={`work program txt-file  ${props.currentlyActiveApp === 'work' ? 'active' : ''} ${props.previouslyActiveApp === 'work' ? 'previous-active' : ''}`}
					data-view={props.openApps.indexOf('work') === -1 ? 'closed' : props.minimizedApps.indexOf('work') !== -1 ? 'closed' : ''}
					onClick={() => props.activeApp('work', null)}>
            <Toolbar
							closeApp={props.closeApp}
							minimizeApp={props.minimizeApp}
							component="work" image={briefcase}
							title="Work [Read Only]" />
            <div className="content">
                {
									data.workFile.map((item, i) => {
				            const url = item.url;
				            const title = item.title;
				            const description = item.description;
				            return (
				                <div key={i}>
				                    <h3><a href="#" onClick={() => props.openInNewTab(url)}>{title}</a></h3>
				                    <p>{description}</p>
				                </div>
				            );
									})
								}
            </div>
        </div>
    </Draggable>
  );
};

Work.propTypes = {
  activeApp: PropTypes.func,
  minimizeApp: PropTypes.func,
  closeApp: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
};

export default Work;
