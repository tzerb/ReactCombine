import * as React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';

import TripsPage from './components/trips/TripsPage';
import TripView from './components/trips/TripView';//eslint-disable-line import/no-named-as-default

import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}> 
    <IndexRoute component={HomePage}/>
    <Route path="trips" component={TripsPage}/>
    <Route path="tripview/:id" component={TripView}/>
    <Route path="about" component={AboutPage}/>
  </Route>
);
