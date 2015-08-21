import React from 'react';

class Logo extends React.Component {

  constructor(props){
    super(props);
    this.state={
      campusId: props.campusId,
      rcId: props.rcId
    }
  }

  render(){

    let imagePath = "/college-search/assets/campus/" + this.state.campusId + "/responsive-logo-lt-bg.png";
    let hrefPath = "https://webproc.mnscu.edu/college-search/public/institution/institutionProfile?search=college&rcId=" + this.state.rcId

    return(
      <a href={hrefPath}>
        <img className="campus_logo" height="65px;" src={imagePath}/>
      </a>
  )
  }
}

export default Logo;
