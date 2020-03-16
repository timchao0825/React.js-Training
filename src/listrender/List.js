import React, { Component } from 'react';
import styled from 'styled-components';
import Item from './Item.js';
const StyleListBox = styled.div`
  width:300px;
`;

const stepsArray = [
  'Array lesson 1',
  'Array lesson 2',
  'Array lesson 3',
  'Array lesson 4',
  'Array lesson 5',
  'Array lesson 6',
]

const stepsObject = {
  name:'Tim',
  height: 183,
  weight: 78,
  old : 28,
}

// https://cythilya.github.io/2018/06/17/array-and-object-handling/
const objectList = {
  "indexKey1": {
    id: "1234567890",
    name: "Nina Ricci",
  },
  "indexKey2": {
    id: "2345678901",
    name: "Hello Kitty",
  },
  "indexKey3": {
    id: "3456789012",
    name: "Pusheen the cat",
  }
}
const objectKey = Object.keys(objectList);
// console.log(objectKey);
const objectValue = Object.values(objectList)
// console.log(objectValue);

const objectName = Object.values(objectList).map(function(item , index , array){
  // console.log(item); console.log(index); console.log(array);
  return item.name;
});
// console.log(objectName);

const arrayObject = [
  {
    id: "1234567890",
    name: "Nina Ricci",
  },
  {
    id: "2345678901",
    name: "Hello Kitty",
  },
  {
    id: "3456789012",
    name: "Pusheen the cat",
  },
];
const arrayObjectValue = arrayObject.map(function(item , index , array){
  const arrayKey = Object.keys(item);
  const arrayVal = Object.values(item)[0];
  // console.log(item);
  // console.log(arrayKey);
  // console.log(arrayVal);
})


class List extends Component {
  state = {
    list: [
      {id:1,label:'name' , data:'Tim'},
      {id:2,label:'heigh' , data:183},
      {id:3,label:'weight' , data:78},
      {id:4,label:'old' , data:27},
    ],
  }

  removeFirst = () => {
    // console.log('remove first function')
    this.setState({
      list: this.state.list.slice(1),
    })
  }

  render() {
    return (
      <StyleListBox>
        <div>
          {
          this.state.list.map(function(item , index, array){
            return (
              <Item key={item.id} text={`${item.label} : ${item.data}`}></Item>
            )
          })
          }
          <button onClick={this.removeFirst}> - </button>
        </div>
        {/* 原始做法 render
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item> */}
        
        {/* 陣列轉換成list */}
        {/* {stepsArray.map(
          (text , idx , array) => <Item>{text} ({idx})</Item>
        )} */}

        {/* 物件轉換成list */}
        {
          // Object.keys(stepsObject).map((key)=> {
          //   const value = stepsObject[key];
          //   return(
          //     <Item>{key} : {value}</Item>
          //   )
          // })
        }

      </StyleListBox>
    );
  }
}

export default List;