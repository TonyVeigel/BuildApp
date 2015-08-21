import React from 'react/addons';
import LogoContainer from './LogoContainer';
import StartHeader from './StartHeader';

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


class StartPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      campusIdsUrl: "/college-search/public/services/institution/list"
    };
  }

  render(){
    return(

      <div className="container">
        <StartHeader/>
        <LogoContainer url={this.state.campusIdsUrl}/>
      </div>

    )
  }
}

export default StartPage;
