import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class AddUser extends Component {
    constructor(){
      super()
      this.state ={
        name: '',
        backgroundcolor: '#56555B'
      }
    }
   changeState=(event)=>{
       this.setState({name: event.target.value}, function () {
           console.log(this.state.name)
       })
   }
    addUser=()=>{
        this.props.addUser(this.state.name, this.state.backgroundcolor)
        console.log(this.state.name, this.state.backgroundcolor)
    }
   render(){
      
     return(
       <div className="popUp">
        Name: <input value={this.state.name} onChange={this.changeState}></input>
         <button onClick={this.addUser}>Send!</button>
       </div>
     )
   }
  }
  
  export default AddUser;