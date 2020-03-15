import React , {Component} from 'react';


// hoc 組件會以一個 components 為一個參數
const withOpen = (WrapperdComponent) => {

  return class extends Component{
    state = {
      open: false,
    }
    toggle = () =>{
      this.setState({
        open: !this.state.open
      })
    }
    render() {
      return (
        <WrapperdComponent 
        open={this.state.open} 
        toggleOpen ={this.toggle}
        {...this.props}
        />
      )
    }
  }

}

export default withOpen;