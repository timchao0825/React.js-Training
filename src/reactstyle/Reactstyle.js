import React, { Component } from 'react';
import Secondbtn from './Secondbtn.js';
// import style from './style.css';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #fed766 ;
  padding:20px;
  border:1px solid red;
  border-radius: 20px;
  margin:20px;
`;
const ButtonText = styled.span`
  color:red;
`;

class Reactstyle extends Component {
  render() {
    return (
      <div>
        <h1>React Style</h1>
        <Button>first button</Button>
        <ButtonText>This is style components span</ButtonText>
        <br />
        <Secondbtn/>
      </div>
    );
  }
}

export default Reactstyle;