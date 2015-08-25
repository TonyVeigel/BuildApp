import React from 'react';
import LogoContainer from './LogoContainer';
import WelcomeHeader from './WelcomeHeader';
import {Link} from 'react-router';

class WelcomePage extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(

      <div className="container">
          <WelcomeHeader/>
          <LogoContainer/>
        </div>

    )
  }
}

export default WelcomePage;
