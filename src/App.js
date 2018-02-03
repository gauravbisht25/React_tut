import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  state = {
  persons:[
    { name: 'Max' , age: 28 },
    { name: 'Manu' ,  age: 25 },
    { name: 'Stephanie' , age: 29 }
     ],
     showPersons: false
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
              {name:"Max", age:28},
              {name: event.target.value , age: 25},
              {name:'Stephanie' , age:29}
            ]
          })
        }


      togglePerson=()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
      };


     
  render (){

    const style={
       backgroundColor: 'black',
       color:'white',
       borderRadius: '10px',
       border: '1px solid blue',
       padding: '8px'
    };
    

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            changed={this.nameChangeHandler}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}

            click={this.switchHandler.bind(this, "Max!!!")} />


          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}>
            Hobby:Racing</Person>
        </div>
      )
    }

    return (
      <div className = "App">
      <h1>Hi , I m React App</h1>
      <p>This is really working</p>
      <button 
      style={style}
      onClick={this.togglePerson}>Toggle Persons</button>
     
     
     {persons}
     
      </div>
    );
  }
}
export default App;