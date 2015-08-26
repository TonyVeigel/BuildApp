import React from 'react';
import {Link} from 'react-router';

class CollegeSearch extends React.Component{

  render(){

    let totalCost;
    if(this.props.cost > 5000){
      totalCost = this.props.cost;
    }else if(this.props.cost){
      totalCost = 5001;
    }

    let collegeSearchLink = "https://webproc.mnscu.edu/college-search/public/institution?delMode=" + this.props.delivery +
    "&award=" + this.props.award + "&category=" + this.props.category + "&tuitionMax=" +  totalCost +
    "&zipCode=" + this.props.zipCode + "&zipCodeRadius=" + this.props.radius + "&activeTab=collegeSearch";

    let programSearchLink = "https://webproc.mnscu.edu/college-search/public/institution?delMode=" + this.props.delivery +
    "&award=" + this.props.award + "&category=" + this.props.category + "&tuitionMax=" +  totalCost +
    "&zipCode=" + this.props.zipCode + "&zipCodeRadius=" + this.props.radius + "&activeTab=programSearch";

    let locationSearchLink = "https://webproc.mnscu.edu/college-search/public/institution?delMode=" + this.props.delivery +
    "&award=" + this.props.award + "&category=" + this.props.category + "&tuitionMax=" +  totalCost +
    "&zipCode=" + this.props.zipCode + "&zipCodeRadius=" + this.props.radius + "&activeTab=mapSearch";

    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2>Insitution Search</h2>
              <p>
                If you would like to see insititutions based on your criteria &nbsp;
                <a target="_blank" href={collegeSearchLink}>Search Institutions</a>
              </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Program Search</h2>
            If you would like to see programs based on your criteria &nbsp;
            <a target="_blank" href={programSearchLink}>Search Programs</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h2>Location Search</h2>
              If you would like to see a map &nbsp;
              <a target="_blank" href={locationSearchLink}>Search Locations</a>
          </div>
        </div>

        <br/>
        <div className="row">
          <div className="col-md-12">
            <Link className="btn-no-decoration" to="/college-search/guide/program">
              <div className="btn btn-success pull-left">
                &larr; Program
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeSearch;
