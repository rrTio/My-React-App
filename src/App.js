import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';

export default function App() {

  const [count, setCount] = useState(0);
  
  function btnAdd(){
    setCount(count + 1);
  }

  function btnSub(){
    setCount(count - 1);
  }

  return (
    <div className="App">
      <button className='button buttonAdd' onClick={btnAdd}>ADD</button>
      <br/>
      {count}
      <br/>
      <button className='button buttonSub' onClick={btnSub}>SUBTRACT</button>
    </div>
  );
}


