import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount(){
    JSON.parse('asdf');
  }
  render() {
    return (
      <div>
        My component
      </div>
    );
  }
}

export default MyComponent;