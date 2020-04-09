import React, { useState } from 'react';

import Todoinput from './Todoinput';

const Todolist = () =>{
  const [items , setItems] = useState([]);
  const addItem = (text) => {
    setItems([...items, {id:Date.now(),text}]);
  }
  const removeItem = (id) =>{
    console.log(id)
    // console.log(id);
    setItems(items.filter(item=>item.id !== id))
  }

  return(
    <div>
      <Todoinput addItem={addItem}/>
      <ul>
        {items.map((item)=>{
          return(
            <li key={item.id} onClick={()=>removeItem(item.id)}>{item.text}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todolist;