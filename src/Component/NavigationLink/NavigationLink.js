import React from 'react';
import {NavLink} from 'react-router-dom';
import style from './NavigationLink.module.css';
import routes from '../.././routes'

const NavigationMenu = () => {
  return (
    <>
      <ul className={style.ul}>
        <li className={style.li}>
          <NavLink
            exact
            to={routes.home}
            className={style.Link}
            activeClassName={style.LinkActive}>
            Home
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink
            to={routes.movies}
            className={style.Link}
            activeClassName={style.LinkActive}>
            Movies
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavigationMenu;
