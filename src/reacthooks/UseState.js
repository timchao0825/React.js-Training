import React, { Component , useState } from 'react';


// Class Component use
// class App extends Component {
//   state = {
//     counter:0,
//   }
//   toggleCount = () => {
//     this.setState({
//       counte: this.state.counter++
//     })
//   }
//   render() {
//     const {counter} = this.state
//     return (
      
//       <div>
//         <h3>{counter}</h3>
//         <br/>
//         <button onClick={this.toggleCount}>Add</button>
//       </div>
//     );
//   }
// }


// React Hooks functional component , stateless component

const UseState = () =>{
  // const [counter , setCount] = useState(0);
  // const toggleCount = () =>{
  //   setCount(counter + 1);
  // }

  const [{count1,count2},setState] = useState({count1:0,count2:0});
  const toggleCount = () => {
    // useState 傳入需傳入完整state狀態
    setState((state)=>({
      ...state,
      count1:state.count1 + 1
    }))
  }
  return (
    <div>
      <h3>{count1}</h3>
      <br/>
      <button onClick={toggleCount}>Add</button>
    </div>
  );
}

export default UseState;
