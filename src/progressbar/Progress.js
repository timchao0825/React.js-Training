import React, { Component , PureComponent } from 'react';
import ProgressBar from './Progressbar.js';
import './style.css';

class Progress extends Component {
  state = {
    value : 0,
  }
  add = () => {
    this.setState({
      value:this.state.value +1,
      // value : 0
    })
  }

  render() {
    const {value} = this.state;
    console.count('render')
    return (
      <div>
        <ProgressBar value={value} />
        <button onClick={this.add}>++</button>
      </div>
    );
  }
}

export default Progress;