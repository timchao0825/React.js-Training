import React, { Component } from 'react';
import {Consumer} from './context/context';

import ModalLogin from './ModalLogin';
import style from './Modal.module.scss'

class Modal extends Component {
  renderContent = (modal , setState) =>{
    switch(modal){
      case 'login':
        return <ModalLogin setState={setState}/>;
      default:
          return null;
    }
  }
  render() {
    return (
      <Consumer>
        {({state , setState})=>{
          const {modal} = state;
          if(!modal) return null;
          return(
            <div className={style.modal}>
              <div className={style['modal-content']}>
                {this.renderContent(modal , setState)}
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default Modal;
