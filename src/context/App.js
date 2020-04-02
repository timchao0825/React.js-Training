import React, { Component } from 'react';

import Header from './Header.js';
import ProductList from './ProductList.js';

// import OrderContent from './context/OrderContext.js';
// 簡化
import {Provider} from './context/OrderContext.js';

class App extends Component {
  state = {
    orders: [],
  };
  addOrder = (order) =>{
    this.setState({
      orders: [...this.state.orders, order],
    })
  }
  render() {
    const {orders} = this.state;
    const contextValue = {
      orders,
      addOrder:this.addOrder,
    }
    return (
      <div>
        <Provider value={contextValue}>
          <Header />
          <ProductList/>
        </Provider>
        <hr/>
        <pre>
          {JSON.stringify(orders, null, 2)}
        </pre>
      </div>
    );
  }
}

export default App;