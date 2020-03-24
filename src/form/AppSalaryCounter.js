import React, { Component } from 'react';

class AppSalaryCounter extends Component {
  setTime = 0;
  state = {
    month: '',
    startTime: Date.now(),
    // startTime: 0,
    currentTime: Date.now(),
  }
  componentDidMount(){
    setInterval(() => {
      this.setState({
        currentTime: Date.now(),
      })
    }, 100);
  }
  onChangeMonth = (elem) => {
    const inputVal = elem.target.value;
    this.setState({
      month: parseInt(inputVal, 10),
    })
    

    // if(inputVal === '' || inputVal === null){
    //   this.stopDate();
    // }else{
    //   this.startDate();
    // }
  }
  // startDate = () =>{
  //   this.setTime = setInterval(()=>{
  //     this.setState({
  //       startTime: Date.now(),
  //     })
  //   }, 100);
  //   console.log('startDate == ' + this.setTime);
  // }
  // stopDate = () => {
  //   clearInterval(this.setTime);
  //   console.log('stopDate == ' + this.setTime);
  // }
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
        <br />
        <label>時薪</label>
        <input type="number" readOnly value={month / 240} />
        <br />
        <label>分薪</label>
        <input type="number" readOnly value={month / 240 / 60} />
        <br />
        <label>秒薪</label>
        <input type="number" readOnly value={month / 240 / 60 / 60} />
        <br />
        <label>經過時間</label>
        <div>
          {/* { startTime } */}
          {time.toFixed(1)}
        </div>
        <label>正在賺取的薪水</label>
        <div>
          {((time * month) / 240 / 60 / 60).toFixed(2)}
        </div>
      </div>
    );
  }
}

export default AppSalaryCounter;