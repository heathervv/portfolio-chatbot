import React, { Component } from 'react';

class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div className="title">
                    <img src={this.props.image} alt={"image of a " + this.props.image}/> <span>{this.props.title}</span>
                </div>
                <a href="#" className="button-small" onClick={this.props.closeApp.bind(null, this.props.component)}>&#10005;</a>
                <a href="#" className="button-small minimize" onClick={this.props.minimizeApp.bind(null, this.props.component)}>_</a>
            </div>
        );
    }
}

export default Toolbar;
