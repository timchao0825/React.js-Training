import React, { Component } from 'react';

class App extends Component {
  state = {
    text:'test123',
    number:0,
  }
  onChangeText(elem){
    this.setState({
      text: elem.target.value,
    })
  }
  onChangeNum(elem){
    this.setState({
      number: parseInt(elem.target.value),
    })
  }
  render() {
    const {text , number} = this.state;
    // const {} = this.state;
    return (
      <div>
        <div>
          <input 
            type="text" 
            value={text} 
            onChange={this.onChangeText.bind(this)}
          />
          <h2>{text}</h2>
        </div>
        <br/>
        <div>
          <input 
            type="number"
            value={number}
            onChange={this.onChangeNum.bind(this)}
          />
          <h2>{number + 1}</h2>
        </div>
      </div>
    );
  }
}

export default App;