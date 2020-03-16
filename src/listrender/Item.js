import React, { Component, PureComponent } from 'react';
import styled from 'styled-components';

const StyleLi = styled.li`
  border:2px solid red;
  margin:10px 0px;
`;

class Item extends PureComponent {
  render() {
    console.log('render' , this.props.text);
    return (
    <StyleLi>{this.props.text}</StyleLi>
    );
  }
}

export default Item;