// 同步與非同步
const fs = require("fs"); /* node 才有的filesystem */

// 問題
const getData = () => {
  fs.readFile("./data.json", (err, content) => {
    return content;
  });
};
const start = () => {
  const data = getData();
  console.log(data);
};
start();

// callback
const getData = callback => {
  fs.readFile("./data.json", (err, content) => {
    callback(content);
  });
};
const start = () => {
  getData(data => {
    console.log(data);
  });
};
start();

// promise
const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data.json", (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
};
const start = () => {
  getData().then(data => {
    console.log(data);
  });
};
start();
// async / await
const getData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data.json", (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
};
const start = async () => {
  const data = await getData();
  console.log(data);
};
start();
