import { createContext } from "react";

// const context = createContext({
//   orders:[],
//   addOrder:()=>{},

// });

// export default context;

// 簡化

export const { Provider, Consumer } = createContext({
  orders: [],
  addOrder: () => {}
});
