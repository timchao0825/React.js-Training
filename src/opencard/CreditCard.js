import React, { Component } from 'react';
import styled from 'styled-components';
import ProductImg from './ProductImg.js'

const StyleCreditBox = styled.div`
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
class CreditCard extends Component {
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
      <StyleCreditBox className={`${open ? '' : 'close'}`}>
        <h3 onClick={toggleOpen}>CreditCard</h3>
        <CardBox className="img__box">
          <ProductImg src={require('./product2.jpg')}/>
        </CardBox>
      </StyleCreditBox>
    );
  }
}

export default CreditCard;