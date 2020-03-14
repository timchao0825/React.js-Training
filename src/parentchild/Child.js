import React, { Component , createRef} from 'react';

class Child extends Component {
  // state = {
  //   count:0,

  // };
  // addCount = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // }
  render() {
    const {childCount , addParentCount , addChildCount} = this.props;
    return (
      <div>
        <h1>Child {childCount}</h1>
        <button onClick={addParentCount}>Parent +1 </button>
        <button onClick={addChildCount}>Child +1 </button>
      </div>
    );
  }
}

export default Child;