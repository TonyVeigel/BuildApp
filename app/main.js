import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.getElementById('app'));
});

/*Note that <Route/> components are not ever rendered,
they are just configuration objects that the router uses to
 create an internal tree of routes.*/
