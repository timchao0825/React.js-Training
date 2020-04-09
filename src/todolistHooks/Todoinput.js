import React, { useState , useEffect , useRef } from 'react';

const Todoinput = ({addItem}) =>{
  const [text , setText] = useState('');
  const onChangeText=(e)=>{
    setText(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    addItem(text);
    setText('');
  }
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return(
    <form onSubmit={onSubmit}>
      <input ref={ref} type="text" value={text} onChange={onChangeText}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Todoinput;
