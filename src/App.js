import styles from './styles.css';
import { useState } from 'react';
function App() {
  const [input ,setinput] =useState('')
function handleChange(Event)
{
 setinput(Event.value)
}
  return (
    <> 
    <div className='main'>
    <h1>get things done!</h1>
    <h4>title</h4>
    <input type='text' placeholder='What is the task today?' className='inputbox' onChange={handleChange(Event)}></input>
    <h4>discribtion</h4>
    <input type='text' placeholder='details of task?' className='inputbox' id='inputbox'></input><br />
    <button >save</button>
    <h4><span id='taskitem'></span> <button className='btn'>edit</button> <button className='btn'>delete</button></h4>
    </div>
    </>
  );
}

export default App;
