import React, { Component } from 'react';

class AppCheckbox extends Component {
  state = {
    like: {
      male: false,
      female: false,
    }
  }
  onChangeLike = (e) => {
    const key = e.target.value;
    this.setState((state) => ({
      like: {
        ...state.like,
        [key]: !this.state.like[key],
      },
    }))
  }
  render() {
    const { like } = this.state;
    return (
      <div>
        <h2>App Check Box</h2><br />
        Your like ?
        <br />
        <input
          type="checkbox"
          value="male"
          onChange={this.onChangeLike}
          checked={like.male}
        />
        <label htmlFor="">Male</label>
        <br />
        <input
          type="checkbox"
          value="female"
          onChange={this.onChangeLike}
          checked={like.female}
        />
        <label htmlFor="">Female</label>
        <br />
        <pre>
          {JSON.stringify(this.state, null, 2)}
        </pre>
      </div>
    );
  }
}

export default AppCheckbox;