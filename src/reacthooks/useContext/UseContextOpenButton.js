import React, { Component , useState , useContext } from 'react';
// import {Consumer} from './Context';

import context from './Context';

// original
// class UseContextOpenButton extends Component {
//   render() {
//     return (
//       <Consumer>
//         {({open,toggle})=>{
//           return <button onClick={toggle}>{open ? 'close' : 'open'}</button>;
//         }}
//       </Consumer>
      
//     );
//   }
// }
//

const UseContextOpenButton = () => {
  const contextValue = useContext(context);
  const {open , toggle} = contextValue;
  return(
    <button onClick={toggle}>
      {open ? 'Close' : 'open'}
    </button>
  )
}

export default UseContextOpenButton;
