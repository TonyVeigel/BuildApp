import React from 'react';
import {Route, NotFoundRoute} from 'react-router';
import App from './components/App';
import Start from './components/StartPage';
import CollegeLocationPage from './components/CollegeLocationPage';

export default (
  <Route handler={App}>
    <Route path='college-search/begin' handler={Start}/>
    <Route path='college-search/location' handler={CollegeLocationPage}/>
  </Route>
);
