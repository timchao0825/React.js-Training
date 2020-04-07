import React, { Component } from 'react';
import {Provider} from './context/context'

import Header from './Header';
import AppStyle from './App.module.scss';
import Modal from './Modal'

class App extends Component {
  state = {
    // modal: 'test',
    modal:null,
    login:false,
  }
  toggleLogin = () => {
    this.setState({
      modal:'login'
    });
  };
  render() {
    const contextValue = {
      state : this.state,
      setState: this.setState.bind(this),
      toggleLogin:this.toggleLogin,
    }
    return (
      <Provider value={contextValue}>
        <div className={`${AppStyle.app}`}>
          <Header />
          <Modal />
        </div>
      </Provider>
    );
  }
}

export default App;