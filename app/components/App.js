import React from 'react';
import {RouteHandler} from 'react-router';

class App extends React.Component{

  render(){

    /* RouteHandler is a component that renders the active child route handler.
     It will render one of the following components depending on the URL path
      React-router is then initialized by calling the RouteHandler component.
     */
    return(
      <div className="container">
        <mnscu-header mnscu-base-url="http://www.mnscu.edu" college-search-base-url="https://webproc.mnscu.edu"></mnscu-header>
        <RouteHandler/>
        <top-mnscu-footer mnscu-base-url="http://www.mnscu.edu" college-search-base-url="https://webproc.mnscu.edu"></top-mnscu-footer>
        <mnscu-footer files-base-url="http://www.mnscu.edu" links-base-url="http://www.mnscu.edu"></mnscu-footer>
      </div>
    )
  }
}

export default App;
