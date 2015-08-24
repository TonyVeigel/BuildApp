import React from 'react';
import Logo from './Logo';

class LogoContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      campuses: [],
      url: this.props.url
    };
  }

  loadCampusIdsFromServer() {
    $.ajax({
      url: this.state.url,
      dataType: 'json',
      success: (data) => {
        this.setState({campuses: data});
      },
      error: (xhr, status, err) => {
        console.error(status, err);
      }
    });
  }

  componentDidMount(){
    this.loadCampusIdsFromServer();
  }

  render(){

    let logos = this.state.campuses.map((campus) =>{
      return(
          <Logo key={campus.campusId} campusId={campus.campusId} rcId={campus.rcId}/>
      )
    });

    return(
      <div className="row">
        <div className="col-md-12">
          <div className="logo_container">
            {logos}
          </div>
        </div>
      </div>
    )
  }
}


export default LogoContainer;
