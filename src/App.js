import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  state = {
  persons:[
    { name: 'Max' , age: 28 },
    { name: 'Manu' ,  age: 25 },
    { name: 'Stephanie' , age: 29 }
  

  ]
  }
      
      switchHandler = (newName)=>{
        this.setState({
          persons:[
            { name: newName, age: 28 },
            { name: 'Manu', age: 25 },
            { name: 'Stephanie', age: 27 }
          ]
        })
      }

        nameChangeHandler = (event)=>{
          this.setState({
            persons:[
              {name: 'Max', age:28},
              {name: event.target.value , age: 25},
              {name:'Stephanie' , age:29}
            ]
          })
        }
      

  render (){
    return (
      <div className = "App">
      <h1>Hi , I m React App</h1>
      <p>This is really working</p>
      <button onClick={this.switchHandler.bind(this , "Maximilian")}>Switch Name</button>
      <Person 
      name={this.state.persons[0].name} 
      age={this.state.persons[0].age}/>
      <Person 
      name={this.state.persons[1].name} 
      age={this.state.persons[1].age}
      changed ={this.nameChangeHandler}
      click = {this.switchHandler.bind(this , "Max!!!")}/>
    
   
      <Person
       name={this.state.persons[2].name}
       age={this.state.persons[2].age}>
       Hobby:Racing</Person>
      </div>
    );
  }
}
export default App;