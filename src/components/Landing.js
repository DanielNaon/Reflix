import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddUser from './AddUser'

class Landing extends Component {
    constructor(){
      super()
      this.state ={
          users: [
              {name: "Dani", backgroundColor: '#56555B '},
              {name: "Avi", backgroundColor: '#140365'},
              {name: "Boris", backgroundColor: '#56555B'},
              {name: "Roni", backgroundColor: '#140365'}
          ],
          AddUser: false
          
      }
    }
   
    changeAddUser=()=>{
      this.setState({AddUser: !this.state.AddUser}, function(){
        console.log(this.state.AddUser)
      })
    }
 
    addUser=(name, color)=>{
      let newUsers = [...this.state.users]
      let newUser = {name: name, backgroundColor: color}
      newUsers.push(newUser)
      this.setState({users: newUsers}, function(){
        console.log(this.state.users)
      })
      
      }
    
   render(){
     
     return(
    <div>
      <div>
        <h1 className="header">Who Is Watching?</h1>
      </div>
      <div>
      {this.state.users.map(m=><Link to="/catalog">
        <span className="user" style={{backgroundColor: m.backgroundColor}}>{m.name}</span></Link>)}
      </div>
      <div>
      
        <button className="adduser" onClick={this.changeAddUser}> Would You Like to Add New User?</button>
        {this.state.AddUser ? <AddUser addUser={this.addUser} /> : null} 
      </div> 
    </div>
     )
   }
  }
  
  export default Landing;