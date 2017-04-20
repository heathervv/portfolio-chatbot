import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Toolbar from './toolbar';

var data = require('../../data.json');

import briefcase from '../images/briefcase.svg';

class Work extends Component {
    componentDidMount() {
        const links = document.querySelectorAll('.work .content a');

        for(let i = 0; i < links.length; i++) {
            links[i].addEventListener('click', () => {
                this.props.openInNewTab(links[i].getAttribute('href'));
            });
        }
    }

    render() {
        var content = data.workFile.map((item, index) => {
            const url = item.url;
            const title = item.title;
            const description = item.description;
            return (
                <div key={index}>
                    <h3><a href={url}>{title}</a></h3>
                    <p>{description}</p>
                </div>
            )
        });
        return (
            <Draggable defaultPosition={{x: Math.random() * (150 - 50) + 50, y: Math.random() * (150 - 50) + 50}} handle=".toolbar">
                <div className="work program txt-file" data-view="closed" onClick={this.props.activeApp.bind(null, 'work')}>
                    <Toolbar closeApp={this.props.closeApp} minimizeApp={this.props.minimizeApp} component="work" image={briefcase} title="Work [Read Only]" />
                    <div className="content">
                        {content}
                    </div>
                </div>
            </Draggable>
        );
    }
}

export default Work;
