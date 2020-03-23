import React, { Component } from "react";

class AppRadio extends Component {
  state = {
    gender:'',
  }
  // onChangeGender = function(elem){
  //   console.log(elem.target.value);
  //   this.setState({
  //     gender:elem.target.value
  //   })
  // };
  onChangeGender = (elem) => {
    console.log(elem.target.value);
    this.setState({
      gender:elem.target.value
    })
  };
  render() {
    const {gender} = this.state;
    return (
      <div>
        <h2>App Radio</h2><br/>
        Your Gender:
        <br />
        <input 
          type="radio"
          value="male"
          onChange={this.onChangeGender}
          checked={gender === 'male'}
        ></input>
        <label>male</label>
        <br />
        <input 
          type="radio"
          value="female"
          onChange={this.onChangeGender}
          checked={gender === 'female'}
        ></input>
        <label>Female</label>
      </div>
    );
  }
}

export default AppRadio;
