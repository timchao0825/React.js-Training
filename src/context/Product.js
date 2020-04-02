import React, { Component } from 'react';

// import OrderContext from './context/OrderContext.js';
// 簡化
import {Consumer} from './context/OrderContext.js';

class Product extends Component {
  render() {
    const {id, name} = this.props;
    return (
    <li>
      <span>{name}</span>
      {/* <button onClick={addOrder.bind(this,id)}>+</button> */}
      <Consumer>
        {value=>(
          <button onClick={()=>value.addOrder(id)}>+</button>
        )}
      </Consumer>
      
    </li>
    );
  }
}

export default Product;
