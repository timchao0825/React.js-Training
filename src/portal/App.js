import React, { Component } from 'react';
import PortalDemo from './PortalDemo.js';

class App extends Component {
  state = {
    detailVisible: false,
  }
  showMore = () => {
    this.setState({
      detailVisible:true,
    })
  }
  render() {
    const {detailVisible} = this.state;
    let model;
    if(detailVisible){
      model = <PortalDemo />;
    }
    return (
      <div>
        <button onClick={this.showMore}>Show More</button>
        {model}
      </div>
    );
  }
}

export default App;