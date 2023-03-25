import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  
  return (
    <div className="App">
      <button className='button buttonAdd' >ADD</button>
      <br/>
      {count}
      <br/>
      <button className='button buttonSub'>SUBTRACT</button>
    </div>
  );
}

export default App;
