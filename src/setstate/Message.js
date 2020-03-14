import React, { Component } from 'react';

class Message extends Component {
  state = {
    title : 'Message Title',
    text : 'Hello React',
  }

  sayHi = () => {
    this.setState({
      text:'Hi Hi',
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.text}</h2>
        <button onClick={this.sayHi}> Say Hi </button>
      </div>
    );
  }
}

export default Message;