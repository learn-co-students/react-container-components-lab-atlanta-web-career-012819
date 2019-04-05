import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'V6PKrSU5969cK6WJQcsFvUWM1lYwJKkU';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Movie Reviews</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
