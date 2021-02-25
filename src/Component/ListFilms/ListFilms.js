import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import style from './ListFilms.module.css';
import ImagesAPi from '../../Seervices/ImagesApi';

class ListFilms extends Component {
  render() {
    const {movies, match} = this.props;
    return (
      <ul className={style.list}>
        {movies.map(({id, poster_path, title}) => (
          <li key={id} className={style.items}>
            <Link to={`${match.url}/${id}`}>
              <img
                src={ImagesAPi() + poster_path}
                onError={(event) =>
                  (event.target.src = 'https://i.ibb.co/1sLF6dH/4004.jpg')
                }
                alt={title}
                height="350"
                width="250"
              />
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
export default ListFilms;
