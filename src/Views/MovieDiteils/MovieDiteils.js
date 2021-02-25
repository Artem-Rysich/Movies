import React, {Component} from 'react';
import {NavLink, Route} from 'react-router-dom';
import MovieDiteilsApi from '../../Seervices/MovieDiteilsApi';
import ImagesAPi from '../../Seervices/ImagesApi';
import style from './MovieDiteils.module.css';
import MovieDiteilsCast from '../../Component/MovieDiteilsCast/MovieDiteilsCast';
import MovieDiteilsReviews from '../../Component/MovieDiteilsReviews/MovieDiteilsReviews';
import Loader from '../../Component/Loader/Loader';

class MovieDiteils extends Component {
  state = {
    movie: null,
  };
  componentDidMount() {
    const {movieID} = this.props.match.params;
    console.log(movieID);
    MovieDiteilsApi(movieID).then((data) => this.setState({movie: data}));
  }
  render() {
    const {movie} = this.state;
    const {match} = this.props;
    return (
      <>
        {movie ? (
          <>
            <ul className={style.ul}>
              <li className={style.li}>
                <div>
                  <img
                    src={ImagesAPi() + movie.poster_path}
                    onError={(event) =>
                      (event.target.src = 'https://i.ibb.co/1sLF6dH/4004.jpg')
                    }
                    alt={movie.original_title}
                    className={style.img}
                  />
                </div>
                <div className={style.wrapper}>
                  <h2 className={style.title}>{movie.original_title}</h2>
                  <h3 className={style.subtitle}>
                    User score :
                    <span className={style.text}>
                      {Math.round(movie.vote_average * 10)}%
                    </span>
                  </h3>
                  <h3 className={style.subtitle}>
                    Overview :
                    <span className={style.text}>{movie.overview}</span>
                  </h3>
                  <div>
                    <h3 className={style.subtitle}>Geners</h3>
                    <ul className={style.ul}>
                      {movie.genres.map(({id, name}) => (
                        <li key={id} className={style.list}>
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <>
              <h2>Additional information</h2>
              <ul className={style.listInfo}>
                <li>
                  <NavLink
                    to={`${match.url}/cast`}
                    className={style.Link}
                    activeClassName={style.LinkActive}>
                    Cast{' '}
                  </NavLink>
                  <Route
                    path={`/:movies/:movieID/cast`}
                    component={MovieDiteilsCast}
                  />
                </li>

                <li>
                  <NavLink
                    to={`${match.url}/reviews`}
                    className={style.Link}
                    activeClassName={style.LinkActive}>
                    Reviews
                  </NavLink>
                  <Route
                    path={`/:movies/:movieID/reviews`}
                    component={MovieDiteilsReviews}
                  />
                </li>
              </ul>
            </>
          </>
        ) : (
          <div className={style.loader}>
            <Loader />
          </div>
        )}
      </>
    );
  }
}

export default MovieDiteils;
