import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Movie extends Component {
    constructor(){
      super()
      this.state =[]
    }
    rented =()=>{
        if(this.props.budget > 2 || this.props.type === "add"){
            this.props.rented(this.props.id)
            this.props.budgetChange(this.props.type)
        }
        else {
            alert("cant rent anything")
        }
    }
   render(){
     
     return(
       <div>
              <div>
                {!this.props.isRented ?
                <div><div className="add" onClick={this.rented} > + </div> <Link to={`/movies/${this.props.id}`}> <img className="movieimg" src={this.props.img} /></Link></div>
                : <div><div className="add" onClick={this.rented} > - </div> <Link to={`/movies/${this.props.id}`}><img className="movieimg" src={this.props.img} /></Link></div> }
            </div>
        </div>
     )
   }
  }
  
  export default Movie;