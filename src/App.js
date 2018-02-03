import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component{
  state = {
  persons:[
    { id:'ab',name:  'Max' , age: 28 },
    { id:'bc', name: 'Manu' ,  age: 25 },
    { id:'cd',name: 'Stephanie' , age: 29 }
     ],
     showPersons: false
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

            deleteHandler = (personIndex)=>{
              const persons = [...this.state.persons];
              persons.splice(personIndex , 1);
              this.setState({persons: persons})
            }

      togglePerson=()=>{
      const doesShow = this.state.showPersons;
      this.setState({showPersons : !doesShow});
      };


  render (){

    const style={
       backgroundColor: 'green',
       color:'white',
       borderRadius: '4px',
       border: '1px solid green',
       padding: '8px'
    };
    

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
        {this.state.persons.map((person , index) =>{
          return <Person 
           click ={()=>this.deleteHandler(index)}
            name ={person.name}
            key ={person.id}
            age= {person.age} />
        })}
          
        </div>
      );
      style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length<= 1){
      classes.push('bold');
    }

    return (
      <div className = "App">
      <h1>Hi , I m React App</h1>
      <p className ={classes.join(' ')} >This is really working</p>
      <button 
      style={style}
      onClick={this.togglePerson}>Toggle Persons</button>
     
     
     {persons}
     
      </div>
    );
  }
}
export default App;