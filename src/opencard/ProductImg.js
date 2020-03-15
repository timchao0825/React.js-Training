import React, { Component } from 'react';
import styled from 'styled-components';
const StyleProductImg = styled.img`
  width:300px;
`;

class ProductImg extends Component {
  render() {
    const imgSrc = this.props.src;
    return (
      <StyleProductImg src={imgSrc} alt="" srcset=""/>
    );
  }
}

export default ProductImg;