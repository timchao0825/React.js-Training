import React, { Component } from 'react';

// import OrderContent from './context/OrderContext.js';
// 簡化
import {Consumer} from './context/OrderContext.js';

class Header extends Component {
  render() {
    const {orders} = this.props;
    return (
      <div>
        <h3>
          <Consumer>
            {value=>(
              `購物車 (${value.orders.length})`
            )}
          </Consumer>
        </h3>
        <hr />
      </div>
    );
  }
}

export default Header;