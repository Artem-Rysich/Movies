import React, {Component} from 'react';
import MovieReviewsApi from '../../Seervices/MovieReviewsApi';
import Loader from '../Loader/Loader';

class MovieDiteilsReviews extends Component {
  state = {
    reviews: null,
    loader: true,
  };
  componentDidMount() {
    const {movieID} = this.props.match.params;
    MovieReviewsApi(movieID).then((respons) =>
      this.setState({reviews: respons})
    );
  }
  componentDidUpdate(prevProps, prevState) {
    const prevReviews = prevState.reviews;
    const currentReviews = this.state.reviews;
    if (prevReviews !== currentReviews) {
      this.setState({loader: false});
    }
  }
  render() {
    const {reviews, loader} = this.state;
    return (
      <>
        {loader ? (
          <Loader onLoad={loader} />
        ) : (
          <>
            {reviews.length > 0 ? (
              <ul>
                {reviews.map(({id, author, content}) => (
                  <li key={id}>
                    <h3>User name : {author}</h3>
                    <p>{content}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>Sorry, no reviews yet.</h3>
            )}
          </>
        )}
      </>
    );
  }
}
export default MovieDiteilsReviews;
