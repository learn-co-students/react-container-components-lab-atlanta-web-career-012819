import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = '&api-key=V6PKrSU5969cK6WJQcsFvUWM1lYwJKkU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ``
    }
  }

  handleSearch = (e) => {
    e.preventDefault()
    fetch(URL + e.target.elements[0].value + NYT_API_KEY)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSearch}>
          <h3>Search Movie Reviews</h3>
          <input type="text" name="search" placeholder="Search Reviews" />
          <input type="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer