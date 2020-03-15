import React, { Component } from 'react';
import styled from 'styled-components';
import ProductImg from './ProductImg.js'

const StylePromotionBox = styled.div`
  border:2px solid red;
  display:inline-block;
  h3{
    margin:0;
    color:white;
    background:black;
    padding:20px;
  }
  &.close{
    .img__box{
      height:0;
      overflow:hidden;
    }
  }

`;
const CardBox = styled.div`
`;

class Promotion extends Component {
  // state = {
  //   open: false,
  // }
  // toggle = () =>{
  //   this.setState({
  //     open: !this.state.open
  //   })
  // }
  render() {
    // const open = this.state.open;
    const {open , toggleOpen } = this.props; 
    return (
      <StylePromotionBox className={`${open ? '' : 'close'}`}>
        <h3 onClick={toggleOpen}>Promotion</h3>
        <CardBox className="img__box">
          <ProductImg src={require('./product.jpg')}/>
        </CardBox>
      </StylePromotionBox>
    );
  }
}

export default Promotion;