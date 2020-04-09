import React, { Component } from 'react';

class App extends Component {
  state = {
    cookies:50,
    auto:0,
    priceOne:10,
    priceEight:100,
  }
  componentDidMount(){
    console.log('123')
    this.autoAdd();
  }
  autoAdd = () => {
    console.log('auto add fun')
    this.setState(({cookies , auto})=>({
      cookies:cookies + auto,
    }))
    setTimeout(this.autoAdd, 1000);
  }
  addCookie = () => {
    this.setState({
      cookies: this.state.cookies + 1,
    })
  }
  oneAdd = () => {
    const {cookies , auto, priceOne:price} = this.state;
    if(cookies < price) return;
    this.setState({
      cookies:cookies - price,
      auto: 1,
      priceOne:price * 1.15,
    })
  }
  eightAdd = () =>{
    const {cookies , auto , priceEight:price} = this.state;
    if(cookies < price) return;  
    this.setState({
      cookies:cookies - price,
      auto: 8,
      priceEight:price * 1.15,
    })
  }
  render() {
    const {cookies, priceOne , priceEight} = this.state;
    return (
      <div className="App">
        <h3>Cookies:</h3>
        <h1>{parseInt(cookies , 10)}</h1>
        <hr/>
        <button onClick={this.addCookie}>Click</button>
        <br/>
        <button onClick={this.oneAdd}>-10cookies +1 time</button>
        {parseInt(priceOne , 10)}
        <br/>
        <button onClick={this.eightAdd}>-100cookies +8 time</button>
        {parseInt(priceEight , 10)}
      </div>
    );
  }
}

export default App;
