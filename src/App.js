import './App.css';
import React from 'react'
import Parent from './Components/ContextAPI-1/Parent';
import Parent01 from './Components/ContextAPI-2/Parent01';
function App() {
  return (
    <>
      <h1 style={{textAlign:'center',marginTop:'1rem'}}>Context API ASSIGNMENT 17</h1>
    <div className="App">
    <div id='Div1'>
      <Parent/>

      </div>
      <div id='Div2'>
      <Parent01/>

      </div>
     </div>
    </>
  );
}

export default App;
