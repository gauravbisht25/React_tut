import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  state = {
  persons:[
    { name: 'Max' , age: 28 },
    { name: 'Manu' ,  age: 25 },
    { name: 'Stephanie' , age: 29 }
  

  ]}

  render (){
    return (
      <div className = "App">
      <h1>Hi , I m React App</h1>
      <p>This is really working</p>
      <button>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person name="Manu" age="22"></Person>
   
      <Person name="Stephanie" age="29">Hobby:Racing</Person>
      </div>
    );
  }
}
export default App;