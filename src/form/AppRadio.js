import React, { Component } from "react";

class AppRadio extends Component {
  state = {
    gender:'',
  }
  onChangeGender = function(elem){
    console.log(elem.target.value);
    this.setState({
      gender:elem.target.value
    })
  };
  render() {
    const {gender} = this.state;
    return (
      <div>
        Your Gender:
        <br />
        <input 
        type="radio"
        value="male"
        onChange={this.onChangeGender.bind(this)}
        checked={gender === 'male'}
        ></input>
        <label>male</label>
        <br />
        <input 
        type="radio"
        value="female"
        onChange={this.onChangeGender.bind(this)}
        checked={gender === 'female'}
        ></input>
        <label>Female</label>
      </div>
    );
  }
}

export default AppRadio;
