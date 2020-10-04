import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Jesus', age: 48},
      {name: 'Elisa', age: 9},
      {name: 'Camila', age: 39}
    ]
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // DON'T DO THIS!!! this.state.persons[0].name = 'Jesus E.';
    this.setState({persons:[
      {name:'Jesus E.', age: 48},
      {name: 'Elisa', age: 9},
      {name: 'Camila', age: 39}
    ]
  })

  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age={this.state.persons[0].age}> My hobbies: Chess </Person>
        <Person name = {this.state.persons[1].name} age={this.state.persons[1].age}> </Person>
      </div>
    );
    
   //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Hi, I\'m a React App!!!'));
  }
}

export default App;