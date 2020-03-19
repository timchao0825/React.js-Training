import React, { Component } from 'react';

// const relation = ['父','母','兄','弟','姊','妹']
const relation = [
  {label:'父', value:0},
  {label:'母', value:1},
  {label:'兄', value:2},
  {label:'弟', value:3},
  {label:'姊', value:4},
  {label:'妹', value:5},
]
class AppSelect extends Component {
  state = {
    text:`${relation[0].value}`,
  }
  onChangeSelect = function(elem){
    this.setState({
      text:elem.target.value,
    })
  }
  render() {
    const {text} = this.state;
    return (
      <div>
        <select value={text} onChange={this.onChangeSelect.bind(this)}>
          {relation.map(function(item,idx,array){
            return <option key={item.label} value={item.value}>{item.label}</option>;
          })}
        </select>
        <h1>
          {
          relation.find(function(item , idx , array){
            return `${item.value}` === text;
          }).label
          }
        </h1>
      </div>
    );
  }
}

export default AppSelect;