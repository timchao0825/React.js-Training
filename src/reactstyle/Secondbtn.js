import React, { Component } from 'react';
import style from './style.module.scss';


class Secondbtn extends Component {
  render() {
    return (
      <button className={`${style.btn} ${style.second__btn}`}>Second Btn use scss</button>
    );
  }
}

export default Secondbtn;