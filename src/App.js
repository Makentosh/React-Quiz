import React, {Component} from 'react';
import './App.scss';
import Car from "./Car";

function App(props) {
  return (
    <div className="App">
      <h1>{ props.title }</h1>
        <Car name={'Audi'}/>
        <Car name={'Ford'}>
            <p>children element</p>
        </Car>
    </div>
  );
}

export default App;
