// -------------------------------------
// 箭頭函式
// #語法簡短
// #自動綁定
// #箭頭函式內部的this 與外部相同
// #this 解說
// -------------------------------------
// ES5 原始寫法
var double = function(x){
  return x * 2;
}
// ES6 箭頭函式寫法
const double = () => {
  return x * 2;
}
// 如果單值的話
const double = x => x * 2;

// 範例
// es5
arr.map(function(elm , idx){
  return elm + idx;
})
// es6
arr.map((ele,idx) => elm + idx);
document.addEventListener('click' , () => console.log(10));

// #this
const a = () => {
  console.log(this);
}
console.log(this);

var b = function(){
  console.log(this);
}
console.log(this);

// this 其實就是function 中的 context
// this 是什麼東西取決於這個函式執行的情境
// 直接執行：window(global)
// 作為物件的成員函式執行：該物件
// 作為dom 的偵聽函式執行：該dom

var name = "tim";
var sayMyName = function(){
  console.log(this.name);
}
var teacher = {
  name: "white",
}
teacher.sayMyName = sanMyName;
sayMyName(); // tim
teacher.sayMyName(); // white

//如果使用箭頭函式宣告sayMyName 將會已全域執行的name = "tim" 輸出

// -------------------------------------
// export import
// -------------------------------------

// math.js
const math = {
  square: x => x * 2,
  area: (w, h) => w *h,
};

export default math;
// 另一種export
// name export
export const a1 = 111;
export const b1 = 222;

// main.js
import math from './math.js';

// import name export
import {a1 , b1} from './math.js';
console.log(a1, b1);

// 混著用
import math , {a1 , b1} from './math.js';

// 也可以重新命名(只有name export 可以用)
import math , {a1 as aaa, b1 as bbb} from './math.js';
console.log(aaa, bbbb);

// older Array

const point = [1, 2, 3]; // array

const x = point[0];

const y = point[0];

const z = point[0];

// New es6

const [x, y, z] = point;

// older object

const point = {x:1, y:2,z:3}

const x = point.x;

const y = point.y;

const z = point.z;

// New es6

const {x, y, z} = point;

// 也可以直接解開

// const draw = ({ x, y, z}) => { ....... };

const circleArea = radius => radius * radius * Math.PI;

const visitMessage = ({age , name}) => {
 if(age < 18){
 return `Dear ${name}, you are under age`;
 }
 return `Welcom ${name} !`;
}