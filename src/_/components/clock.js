import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();

        this.startTime = this.startTime.bind(this);
    }
    componentWillMount() {
        this.setState({"time": ""});
    }

    componentDidMount() {
        this.startTime();

    }

    checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }

    startTime() {
        var today = new Date();
        var hh = today.getHours();
        var m = today.getMinutes();
        m = this.checkTime(m);
        var dd = "AM";
        var h = hh;
        if (h >= 12) {
            h = hh - 12;
            dd = "PM";
        }
        if (h === 0) {
            h = 12;
        }

        setTimeout(this.startTime, 1000);

        this.setState({"time": h + ":" + m + " " + dd});
    }

    render() {
        return (
            <div className="clock">{this.state.time}</div>
        );
    }
}

export default Clock;
