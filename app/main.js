import React from 'react';
import Router from 'react-router';
import routes from './routes';
import storage from './libs/Storage';
import persist from './libs/Persist';
import alt from './alt';

main();

function main(){

  persist(alt, storage, 'app');

  Router.run(routes, Router.HistoryLocation, function(Handler) {
    React.render(<Handler />, document.getElementById('appStartPoint'));
  });
}

/*Note that <Route/> components are not ever rendered,
they are just configuration objects that the router uses to
 create an internal tree of routes.*/
