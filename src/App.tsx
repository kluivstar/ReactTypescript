import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import PersonList from './components/PersonList'
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Clark } from './components/Clark';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';


function App() {

  // Obj props
  // const personName ={
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // Array Props
  // const nameList = [
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
      {/* Before props are recieved by child components types are set */}

      {/* <Greet name="Sins" messageCount={12} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList}/>

      <Status status='loading'/>
      <Heading>Text</Heading>
      <Clark>
        <Heading>Clark has a not so secret, "secret" identity.</Heading>
      </Clark>
      <Greet name="Sins"  isLoggedIn={true}/>
       
      <Button 
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      /> 
      <Input value='' handleChange={(event) => console.log(event)}/>
      */}
      <Container styles={{border: '2px solid black', padding: '1rem'}}/>
    </div>
  );
}

export default App;
