import React, { Component } from 'react';

import Product from './Product.js';

const foodlists = [
  {id:1,name:'牛肉'},
  {id:2,name:'豬肉'},
  {id:3,name:'羊肉'},
  {id:4,name:'雞肉'},
]

class ProductList extends Component {
  render() {
    // const {addOrder} = this.props;
    return (
      <ul>
        {foodlists.map((foodlist)=>{
          // return <Product {...foodlist} addOrder={addOrder} key={foodlist.id}/>
          return <Product {...foodlist} key={foodlist.id}/>
        })}
      </ul>
    );
  }
}

export default ProductList;