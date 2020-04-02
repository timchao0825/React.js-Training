import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    hasError : false,
  }
  static getDerivedStateFromError(error){
    return {hasError:true};
  }
  render() {
    const {hasError} = this.state;
    if(hasError){
      return <h1>Error!</h1>
    }
    return (
      <div>
        <h1>App</h1>
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;