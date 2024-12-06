import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';


function App() {

  // Obj props
  const personName ={
    first: 'Bruce',
    last: 'Wayne'
  }

  // Array Props
  // const personList = [
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Steve',
  //     last: 'Rogers'
  //   },
  // ]

  return (
    <div className="App">
      <Greet name="Sins" messageCount={12} isLoggedIn={true}/>
      <Person name={personName}/>
      
    </div>
  );
}

export default App;
