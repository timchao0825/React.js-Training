import React, { Component } from 'react';

class About extends Component {
  constructor(props){
    super(props)
    console.log(props.data);
    const newAboutString = 'New Add string' + props.data;
    this.state = {
      string: newAboutString,
    }
  }
  render() {
    const {string} = this.state;
    return (
      <div>
        <h2>About.js page + {string}</h2>
      </div>
    );
  }
}

export default About;
