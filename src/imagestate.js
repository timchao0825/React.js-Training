import React, { Component } from 'react';
import Demo from './demo.JPG';
import './style.css';

class Imagestate extends Component {
  state = {
    visible : true,
  }
  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    })
  }
  render() {
    
    const visible = this.state.visible;
    const imgEl = visible ? 'show' : 'hide'
    return (
      <div>
        <button onClick={this.toggle}>Toggle State</button>
        <br/>
        <img className={imgEl} width="300" height="300" src={Demo}/>
      </div>
    );
  }
}

export default Imagestate;