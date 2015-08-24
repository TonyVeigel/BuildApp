import React from 'react';
import LogoContainer from './LogoContainer';
import WelcomeHeader from './WelcomeHeader';
import {Link} from 'react-router';

class WelcomePage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      campusIdsUrl: "/college-search/public/services/institution/list"
    };
  }

  render(){
    return(

      <div className="container">
          <WelcomeHeader/>
          <LogoContainer url={this.state.campusIdsUrl}/>
    </div>

    )
  }
}

export default WelcomePage;
