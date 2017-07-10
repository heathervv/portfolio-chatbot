import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import Program from './program';

// Assets
import paint from '../images/paint.svg';

// Global Variables
let canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0;

let lineWidth = 2;

const colors = ['black', 'slateGray', 'maroon', 'darkOliveGreen', 'forestGreen', 'lightSeaGreen', 'blue', 'mediumVioletRed', 'antiqueWhite', 'chartreuse', 'darkOrange', 'orange', 'yellow', 'fuschia', 'red', 'gold', 'lightGrey', 'white', 'aquamarine', 'aqua', 'lime', 'purple', 'violet', 'tan', 'salmon', 'olive', 'lightCoral', 'lavender'];

class Paint extends Component {
  constructor() {
    super();

    this.draw = this.draw.bind(this);
    this.findxy = this.findxy.bind(this);

    this.state = {
      color: "black"
    }
  }

  componentDidMount() {
    canvas = this.canvas;
    ctx = canvas.getContext("2d");
    // w = canvas.width;
    // h = canvas.height;

    canvas.addEventListener("mousemove", (e) => {
      this.findxy('move', e);
    }, false);
    canvas.addEventListener("mousedown", (e) => {
      this.findxy('down', e);
    }, false);
    canvas.addEventListener("mouseup", (e) => {
      this.findxy('up', e);
    }, false);
    canvas.addEventListener("mouseout", (e) => {
      this.findxy('out', e);
    }, false);
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = this.state.color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    ctx.closePath();
  }

  findxy(res, e) {
    if (res === 'down') {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;

      flag = true;
    }

    if (res === 'up' || res === "out") {
      flag = false;
    }

    if (res === 'move') {
      if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        this.draw();
      }
    }
  }

  color(color) {
    if (color !== this.state.color) this.setState({ color });
  }

  render() {
    return (
      <Program
        programName="Paint"
        programIcon={paint}
        updateActiveApp={this.props.updateActiveApp}
        updateStartbar={this.props.updateStartbar}
        closeApp={this.props.closeApp}
        openInNewTab={this.props.openInNewTab}
        openApps={this.props.openApps}
        minimizedApps={this.props.minimizedApps}
        currentlyActiveApp={this.props.currentlyActiveApp}
        previouslyActiveApp={this.props.previouslyActiveApp} >
        <canvas ref={(input) => { this.canvas = input; }} />
        <div className="paint__colors">
          <div className="paint__active-color">
            <div className="button-small" aria-label={this.state.color} style={{ backgroundColor: this.state.color }} />
          </div>
          <div className="paint__color-swatches">
            {
              colors.map((color, i) => {
                return (
                  <button
                    key={i}
                    className="button-inset"
                    aria-label={color}
                    style={{ backgroundColor: color}}
                    onClick={() => this.color(color)} />
                );
              })
            }
          </div>
        </div>
      </Program>
    );
  }
}

Paint.propTypes = {
  updateActiveApp: PropTypes.func,
  closeApp: PropTypes.func,
  updateStartbar: PropTypes.func,
  openInNewTab: PropTypes.func,
  openApps: PropTypes.array,
  minimizedApps: PropTypes.array,
  currentlyActiveApp: PropTypes.string,
  previouslyActiveApp: PropTypes.string
};

export default Paint;
