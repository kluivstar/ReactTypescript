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
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/context/UserContext';
import {DomRef} from './components/ref/DomRef'
import {Mutable} from './components/ref/Mutable'
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import CustomButton from './components/html/Button'

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
      
      <Container styles={{border: '2px solid black', padding: '1rem'}}/>
      
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <Private isLoggedIn={true} Component={Profile}/>
      
      
      <List
        items ={[
          {
            id: 1,
            first: 'Steve',
            last: 'Roger',
          },
          {
            id:2,
            first: 'Tom',
            last: 'Holland',
          },
        ]}
        onClick={item => console.log(item)}
      />
      
      <Toast position='center'/>
      
      <RandomNumber value={10} isPositive/>
      */}
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}/>Button label
    </div>
  );
}

export default App;
