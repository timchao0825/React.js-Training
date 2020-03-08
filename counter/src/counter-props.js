import React , {Component} from 'react';
import PropTypes from 'prop-types';
// 用PropTypes 檢查型別

class Counter extends Component{
  // state = {
  //   step : 0,
  //   count : 0,
  // }

  // 方法一：在component內加入static
  // 預防上層組件未設定props的數值，可先預設static defaultprops
  // static defaultProps = {
  //   initCount:0,
  // }

  // 另外加入的proptypes 型別檢查
  static propTypes = {
    initCount: PropTypes.number,
  }


  // 接收上層組件的props用法，constructor
  constructor(props){
    super(props)
    this.state={
      count:props.initCount,
      step:0,
    }
  }
  addCount = () => {
    const {count, step} = this.state;
    this.setState({
      count: count + step,
      step : step + 1,
    })
  }

  render() {
    const {count , step} = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.addCount}>Counter + {step}</button>
      </div>
    )
  }
}

// 方法二：在component外層補上defaultprops
// Counter.defaultProps={
//     initCount:20, 
// }

// 另外補上的型別檢查：
// 如果要將上層傳入的props進行型別檢查可引用proptypes
// Counter.propTypes ={
//   initCount: PropTypes.number,
// }
  
export default Counter;