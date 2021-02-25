import React, {Component} from 'react';
import TrendingMovieApi from '../../Seervices/TrendingMovieApi';
import style from './HomePage.module.css';
import Loader from '../../Component/Loader/Loader';

import ListFilms from '../../Component/ListFilms/ListFilms';
class HomePage extends Component {
  state = {
    movies: null,
  };
  componentDidMount() {
    TrendingMovieApi().then((data) => this.setState({movies: data}));
  }
  render() {
    const {movies} = this.state;
    const {match} = this.props;
    return (
      <>
        <h2 className={style.title}>Trending Today</h2>
        {movies ? (
          <ListFilms movies={movies} match={match} />
        ) : (
          <div className={style.loader}>
            <Loader />
          </div>
        )}
      </>
    );
  }
}

export default HomePage;
