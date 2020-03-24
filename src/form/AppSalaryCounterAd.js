import React, { Component } from 'react';

class AppSalaryCounterAd extends Component {
  state = {
    month: 0,
    startTime: 0,
    currentTime: 0,
  };

  componentWillUpdate(_, prevState) {
    if (prevState.month !== this.state.month) {
      this.handleResetTime()
      this.setStartTime()
      this.setCurrentTime()
    }
  }

  onChangeMonth = (e) => {
    this.setState({
      month: parseInt(e.target.value, 10),
    });
  };

  handleStopTime = () => {
    clearInterval(this.intervalID);
  }

  handleResetTime = () => {
    this.handleStopTime();
    if (this.state.month) {
      this.setState({
        startTime: Date.now(),
        currentTime: Date.now(),
      });
    }
  }
  setStartTime = () => {
    if (this.state.month) {
      this.setState({
        startTime: Date.now(),
      });
    }
  }
  setCurrentTime = () => {
    if (this.state.month) {
      this.intervalID = setInterval(() => {
        this.setState({
          currentTime: Date.now(),
        });
      }, 100);
    }
  }

  render() {
    const { month, startTime, currentTime } = this.state;
    const time = (currentTime - startTime) / 1000;
    return (
      <div>
        <h2>Salary Counter</h2>
        <br />
        <label htmlFor="">月薪</label>
        <input
          type="number"
          value={month}
          onChange={this.onChangeMonth}
        />
        <button onClick={this.handleStopTime}>Stop time</button>
        <button onClick={this.handleResetTime}>Reset time</button>
        <br />
        <label>時薪</label>
        <input
          type="number"
          value={month / 240}
          readOnly
        />
        <br />
        <label>分薪</label>
        <input type="number" value={month / 200 / 60} readOnly />
        <br />
        <label>秒薪</label>
        <input type="number" value={month / 200 / 60 / 60} readOnly />
        <br />
        <label>經過時間</label>
        <div>
          {time.toFixed(1)}
        </div>
        <label>正在賺取的薪水</label>
        <div>
          {((time * month) / 200 / 60 / 60).toFixed(2)}
        </div>
      </div>
    );
  }
}

export default AppSalaryCounterAd;