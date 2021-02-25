import React, {Component} from 'react';
import Searchbar from '../../Component/Searchbar/Searchbar';
import ListFilms from '../../Component/ListFilms/ListFilms';
import FindMovieApi from '../../Seervices/FindMovieApi';
import NotFoundMovies from '../../Component/NotFoundMovies/NotFoundMovies';
import Loader from '../../Component/Loader/Loader';
import style from './Movies.module.css';

class Movies extends Component {
  state = {
    movies: [],
    searchQuery: '',
    notFound: true,
    loader: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const currentQuery = this.state.searchQuery;
    const prevQuery = prevState.searchQuery;
    if (currentQuery !== prevQuery && currentQuery !== '') {
      this.setState({loader: true});
      FindMovieApi(currentQuery).then((respons) => this.addMovies(respons));
    }
  }
  addMovies = (respons) => {
    if (respons.length === 0) {
      return this.setState({notFound: false, loader: false});
    }
    this.setState({movies: respons, notFound: true, loader: false});
  };
  addSearchQuery = (query) => {
    this.setState({searchQuery: query});
  };
  render() {
    const {movies, notFound, loader} = this.state;
    const {match} = this.props;
    return (
      <>
        <Searchbar addSearchQuery={this.addSearchQuery} />
        {loader ? (
          <div className={style.loader}>
            <Loader onLoad={loader} />
          </div>
        ) : (
          <>
            {notFound ? (
              <ListFilms movies={movies} match={match} />
            ) : (
              <NotFoundMovies />
            )}
          </>
        )}
      </>
    );
  }
}
export default Movies;
