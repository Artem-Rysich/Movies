import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import NavigationMenu from './NavigationLink/NavigationLink';
import HomePage from '../Views/HomePage/HomePage';
import Movies from '../Views/Movies/Movies';
import MovieDiteils from '../Views/MovieDiteils/MovieDiteils';
import routes from '../routes';

const App = () => {
  return (
    <>
      <NavigationMenu />
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={Movies} />
        <Route path={routes.movieDiteils} component={MovieDiteils} />
        <Redirect to={routes.home} />
      </Switch>
    </>
  );
};

export default App;
