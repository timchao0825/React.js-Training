const array = [1,2,3];

// map
// return to array 2 , 4 , 6
const result = array.map(function(elem , idx , array){
  return elem * 2;
// return <li>{elem * 2}</li>;
});
// console.log => 2 , 4 , 6

// filter 過濾
const result = array.filter(function(elem,idx,arr){
  return elem % 2 === 0;
});
// console.log => 2

//             0 1 3 6 10 15
const array = [1,2,3,4,5,6];
//             1 3 6 10 15 21
// reduce
const result = array.reduce(function(accumulator , elem , idx, arr){
  return accumulator + elem;
});


// 會改變陣列的內容
array.pop()
// 移除並回傳陣列的最後一個元素
const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
// expected output: "tomato"
console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]


array.push()
// 添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]


array.shift()
// 移除並回傳陣列的第一個元素。此方法會改變陣列的長度。
const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);
// expected output: Array [2, 3]
console.log(firstElement);
// expected output: 1


array.unshift() 
// 添加一個或多個元素至陣列的開頭，並且回傳陣列的新長度。
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]


array.reverse();
// 會原地（in place）反轉（reverses）一個陣列。陣列中的第一個元素變為最後
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

array.sort();
//對一個陣列的所有元素進行排序，並回傳此陣列。排序不一定是穩定的（stable）。預設的排序順序是根據字串的 Unicode 編碼位置（code points）而定。

array.splice();
// 藉由刪除既有元素並／或加入新元素來改變一個陣列的內容。
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

const newArr = array.slice(); // 複製一個新的array
// ES6 複製方法
const newArr = [...array];
