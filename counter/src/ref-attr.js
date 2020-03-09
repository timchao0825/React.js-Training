import React, { Component , createRef } from 'react';

// ref 第一種 “字串選擇”
// react 官方 宣告將不支援字串
// class Input extends Component {
//   componentDidMount(){
//     this.refs.myInput.focus();
//   }

//   render() {
//     return (
//       <div>
//         <h3>Your Name</h3>
//         <input type="text" ref="myInput"/>
//       </div>
//     );
//   }
// }


// ref 第二種用法
// 利用函式代替參數
// class Input extends Component {
//   // componentDidMount(){
//   //   this.myInput.focus();  
//   // }

//   // setRef = (input) => {
//   //   this.myInput = input;
//   // };

//   setRef = (input) => {
//     input.focus();
//   }

//   render() {
//     return (
//       <div>
//         <h3>Your Name</h3>
//         <input type="text" ref={this.setRef} />
//       </div>
//     );
//   }
// }

// ref 第三種用法
// 官方推薦用法
class Input extends Component {
  myInput = createRef();
  componentDidMount(){
    this.myInput.current.focus();
  }

  render() {
    return (
      <div>
        <h3>Your Name</h3>
        <input type="text" ref={this.myInput} />
      </div>
    );
  }
}

export default Input;