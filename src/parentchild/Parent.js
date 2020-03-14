import React , {Component  , createRef} from 'react';
import Child from './Child.js';

class Parent extends Component {
  childRef = createRef();
  state = {
    count:0,
    childCount:0,
  };
  addParentCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  addChildCount = () => {
    this.setState({
      childCount: this.state.childCount + 1,
    });
  }
  // addChildCount = () => {
  //   this.childRef.current.addCount();
  // }

  render() {
    return (
      <div>
        <h1>Parent {this.state.count}</h1>
        <button onClick={this.addParentCount}>Parent +1 </button>
        <button onClick={this.addChildCount}>Child +1 </button>
        <br/>
        <Child
          // ref={this.childRef} 
          childCount={this.state.childCount}
          addParentCount={this.addParentCount}
          addChildCount = {this.addChildCount}
        />
      </div>
    );
  }
}

export default Parent;