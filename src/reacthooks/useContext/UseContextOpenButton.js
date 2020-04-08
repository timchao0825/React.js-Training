import React, { Component } from 'react';
import {Consumer} from './Context';

class UseContextOpenButton extends Component {
  render() {
    return (
      <Consumer>
        {({open,toggle})=>{
          return <button onClick={toggle}>{open ? 'close' : 'open'}</button>;
        }}
      </Consumer>
      
    );
  }
}

export default UseContextOpenButton;
