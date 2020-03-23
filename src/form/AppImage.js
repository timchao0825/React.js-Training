import React, { Component } from 'react';

class AppImage extends Component {
  state = {
    img: '',
  }
  onChange = (elem) => {
    const file = elem.target.files.item(0);
    // console.log(file)
    const fr = new FileReader();
    fr.addEventListener('load', this.fileload);
    fr.readAsDataURL(file);
  };
  fileload = (elem) => {
    this.setState({
      img: elem.target.result,
    })
  };
  submit = () => {
    console.log('submit');
  }
  render() {
    return (
      <div>
        <h2>App Image</h2>
        <input type="file" onChange={this.onChange} />
        <br />
        <img width="200px" src={this.state.img} alt="" />
        <br />
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}

export default AppImage;