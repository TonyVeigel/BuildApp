import React from 'react';

class Logo extends React.Component {

  constructor(props){
    super(props);
    this.state={
      campusId: props.campusId
    }
  }

  render(){

    let imagePath = "/college-search/assets/campus/" + this.state.campusId + "/responsive-logo-lt-bg.png";

    return(
      <img className="campus_logo" height="65px;" src={imagePath}/>
    )
  }
}

export default Logo;
