import React, { Component } from 'react';
import styled from 'styled-components';

import Promotion from './Promotion';
import CreditCard from './CreditCard';
import withOpen from '../hocs/withOpen';

const PromotionWithOpen = withOpen(Promotion);
const CreditCardWithOpen = withOpen(CreditCard);

const StyleBlock = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  div{
    margin:0px 10px;
  }
`
class Block extends Component {
  render() {
    return (
      <StyleBlock>
        <PromotionWithOpen />
        <CreditCardWithOpen />
      </StyleBlock>
    );
  }
}

export default Block;