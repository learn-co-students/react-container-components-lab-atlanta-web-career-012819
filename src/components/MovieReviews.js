import React from 'react'

const reviewStyle = {
  border: '5px solid black',
  margin: '5px',
  padding: '5px'
}

const MovieReviews = (props) => ( 
    <div className="review-list">
      { props.reviews.map(review => {
        return(
        <div className="review" style={reviewStyle}>
          <h3>{review.headline}</h3>
          <h4>{review.byline}</h4>
          <h4>{review.publication_date}</h4>
          <p>{review.summary_short}</p>
        </div>
        )
      } )}
    </div>
)

export default MovieReviews
