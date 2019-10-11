import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MovieDeatils extends Component {
    constructor(){
      super()
      this.state =[]
    }
   render(){
     const movie = this.props.movies[this.props.match.params.id]
     return(
       <div>
         <h1 className="titleMovie">Name Of The Movie: {movie.title} <br></br> year: {movie.year}</h1>
         <img className="permovieimg" src={movie.img} />
         <p className= "desc">{movie.descrShort}</p>
       </div>
     )
   }
  }
  
  export default MovieDeatils;