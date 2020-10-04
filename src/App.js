import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  
  const [personState, setPersonsState] = useState({
      persons:[
        {name:'Jesus', age: 48},
        {name: 'Elisa', age: 9},
        {name: 'Camila', age: 39}
      ], 
      otherState: 'some other value'
    });

    const switchNameHandler = () => {
      //console.log('Was clicked!');
      // DON'T DO THIS!!! this.state.persons[0].name = 'Jesus E.';
      setPersonsState({persons:[
        {name:'Jesus E.', age: 48},
        {name: 'Elisa', age: 9},
        {name: 'Camila', age: 39}
      ]
    });
    };
  
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name = {personState.persons[0].name} age={personState.persons[0].age}> My hobbies: Chess </Person>
        <Person name = {personState.persons[1].name} age={personState.persons[1].age}> </Person>
      </div>
    );
    
   //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }


export default App;



