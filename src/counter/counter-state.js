import React , {Component} from 'react';

class Counter extends Component{
  state = {
    count : 0,
  }
  addCount = () => {
    const {count, step} = this.state;
    // 用函式方法即可操作同步
    this.setState((state)=>{
      return{
        count:state.count + 1
      }
    },()=>{
      this.sendCount();
      // 執行完count + 1 之後才會執行 sendCount
    })
    // setState 使用 callback

    // this.setState({
    //   count: count + 1,
    // })
    // this.setState({
    //   count: count + 1,
    // })
    // setState 是非同步操作，放多個也只能加ㄧ
    // 
  }
  sendCount = () => {
    console.log('send count function');
  }

  render() {
    const {count , step} = this.state;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={this.addCount}>Counter + 1</button>
      </div>
    )
  }
}


export default Counter;