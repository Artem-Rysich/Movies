import React, {Component} from 'react';
import MovieCastApi from '../../Seervices/MovieCastApi';
import ImagesAPi from '../../Seervices/ImagesApi';
import Loader from '../Loader/Loader';
import style from './MovieDiteilsCast.module.css';
class MovieDiteilsCast extends Component {
  state = {
    cast: null,
    loader: true,
  };
  componentDidMount() {
    const {movieID} = this.props.match.params;
    MovieCastApi(movieID).then((data) => this.setState({cast: data}));
  }
  componentDidUpdate(prevProps, prevState) {
    const prevCast = prevState.cast;
    const currentCast = this.state.cast;

    if (prevCast !== currentCast) {
      this.setState({loader: false});
    }
  }
  render() {
    const {cast, loader} = this.state;
    return (
      <>
        {loader ? (
          <Loader onLoad={loader} />
        ) : (
          <>
            {cast.length > 0 ? (
              <ul className={style.ul}>
                {cast.map(({id, name, character, profile_path}) => (
                  <li key={id} className={style.li}>
                    <img
                      src={ImagesAPi() + profile_path}
                      onError={(event) =>
                        (event.target.src = 'https://i.ibb.co/1sLF6dH/4004.jpg')
                      }
                      alt={name}
                      className={style.img}
                    />
                    <p>{name}</p>
                    <p>Character : {character}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>Sorry, we don’t have data about this actors.</h3>
            )}
          </>
        )}
      </>
    );
  }
}
export default MovieDiteilsCast;
