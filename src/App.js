import React from 'react';
import './App.css';
import Car from "./Car";

function App() {
  return (
    <div className="App">
      <h1>hello react</h1>
        <Car name={'Audi'}/>
        <Car name={'Ford'}>
            <p>children element</p>
        </Car>
    </div>
  );
}

export default App;
