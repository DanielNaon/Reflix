import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MovieDeatils from './MovieDetails';
import Movie from './Movie'
class Catalog extends Component {
  constructor() {
    super()
    this.state = {
      seacrhInpot: '',
      budget: 10

    }
  }
  changeInput = (event) => {
    let input = event.target.value
    this.setState({ seacrhInpot: input }, function () {
      console.log(this.state.seacrhInpot)
    })
  }
  budgetChange = (type) => {
    type === "add" ? this.setState({ budget: this.state.budget + 3 }) : this.setState({ budget: this.state.budget - 3 })
  }
  rented = (id) => {
    this.props.rented(id)
  }
  render() {
    let movies = this.props.movies
    return (
      <div className="catalogComp">
        <span className="budget" value={this.state.budget}>your budget is:{this.state.budget}</span>
        <span className="search">Choose your movie:</span>
        <input type="text" className="searchInput" value={this.state.seacrhInpot} onChange={this.changeInput}></input>
        <div className="movieContainer">
          <div classNam="rent">
          {movies.filter(m => m.isRented).length > 0 ? <h2 className="titleRented">Rented</h2> : null}
          {movies.filter(m => m.title.toLowerCase().includes(this.state.seacrhInpot)).filter(m => m.isRented).map(m => <Movie budget={this.state.budget} type='add' budgetChange={this.budgetChange} img={m.img} id={m.id} rented={this.props.rented} isRented={m.isRented} />)}
          </div>
          {/* <div className="movieContainer"></div> */}
          <div className="catal">
          {movies.filter(m => m.isRented).length > 0 ? <h2 className="titleCatalog">Catalog</h2> : null}
          {movies.filter(m => m.title.toLowerCase().includes(this.state.seacrhInpot)).filter(r=>!r.isRented).map(m => <Movie budget={this.state.budget} type='minus' budgetChange={this.budgetChange} img={m.img} id={m.id} rented={this.props.rented} isRented={m.isRented} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default Catalog;