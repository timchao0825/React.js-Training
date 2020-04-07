import React, { Component } from 'react';

class ModalLogin extends Component {
  state = {
    username:'',
    password:''
  }
  onChangeUsername = (e) => {
    this.setState({
      username:e.target.value,
    })
  }
  onChangePassword = (e) => {
    this.setState({
      password:e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.setState({
      modal:null,
      login:true,
    })
    // axios ..
  }
  render() {
    const {username , password} = this.state;
    return (
      <div>
        <form className="" onSubmit={this.onSubmit}> 
          <input type="text" value={username} onChange={this.onChangeUsername}/>
          <br/>
          <input type="text" value={password} onChange={this.onChangePassword}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ModalLogin;
