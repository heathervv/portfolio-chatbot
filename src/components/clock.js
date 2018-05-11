import React, { PureComponent } from 'react'

import '../css/clock.css'

class Clock extends PureComponent {
  state = {
    time: ''
  }

  componentDidMount() {
    this.startTime()
  }

  checkTime(i) {
    return i < 10 ? i = '0' + i : i
  }

  startTime = () => {
    const today = new Date()
    const hh = today.getHours()

    let m = today.getMinutes()
    m = this.checkTime(m)

    let dd = 'AM'

    let h = hh
    if (h >= 12) {
      h = hh - 12
      dd = 'PM'
    }
    if (h === 0) {
      h = 12
    }

    setTimeout(this.startTime, 1000)

    this.setState({ time: `${h}:${m} ${dd}` })
  }

  render() {
    return (
      <div className="clock">{this.state.time}</div>
    )
  }
}

export default Clock
