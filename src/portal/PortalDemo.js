import React, { Component } from 'react';
import {createPortal} from 'react-dom';

class PortalDemo extends Component {
  render() {
    return createPortal(
      <div>Custom Portal</div>,
      document.getElementById('model'),
    );
  }
}

export default PortalDemo;