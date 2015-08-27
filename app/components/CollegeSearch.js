import React from 'react';
import {Link} from 'react-router';

class CollegeSearch extends React.Component{

  render(){

    let totalCost;
    if(this.props.cost > 5000){
      totalCost = '$' + this.props.cost;
    }else if(this.props.cost){
      totalCost = <span className="validationError">Invalid Data</span>
    }else{
      totalCost = 'No Preference';
    }

    let collegeSearchLink = "/college-search/public/institution?delMode=" + this.props.delivery +
    "&award=" + this.props.award + "&category=" + this.props.category + "&tuitionMax=" +  this.props.cost +
    "&zipCode=" + this.props.zipCode + "&zipCodeRadius=" + this.props.radius;

    return(
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2>Search</h2>
            <p className="hidden-sm hidden-lg hidden-md">
              You have indicated that you would like to search within a radius of <span className="criteria-answer">{this.props.radius ? this.props.radius + ' miles' : 'No Preference'}</span>
            &nbsp;from ZIP Code <span className="criteria-answer">{this.props.zipCode ? this.props.zipCode : 'No Preference'}</span>. The total cost per year you would like to spend
            is <span className="criteria-answer">{totalCost}</span>. You are looking for a Award/Degree of type <span className="criteria-answer">{this.props.awardDescription ? this.props.awardDescription : 'No Preference'}</span>
          &nbsp;in the program <span className="criteria-answer">{this.props.categoryDescription ? this.props.categoryDescription : 'No Preference'}</span>. You would like the delivery of this program to be
          &nbsp;<span className="criteria-answer">{this.props.deliveryDescription ? this.props.deliveryDescription : 'No Preference'}</span>.
          <br/>
          <br/>
        </p>
        Next, select which type of search you are interested in from the options below.
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-md-4">
        <h3> <a target="_blank" href={collegeSearchLink + "&activeTab=collegeSearch"}>Institution Search</a></h3>
        <p>
          If you would like to see insititutions based on your criteria.
          <br/>
          <a target="_blank" href={collegeSearchLink + "&activeTab=collegeSearch"}>Institution Search</a>
        </p>
      </div>
      <div className="col-md-4">
        <h3><a target="_blank" href={collegeSearchLink + "&activeTab=programSearch"}>Program Search</a></h3>
        If you would like to see programs based on your criteria.
        <br/>
        <a target="_blank" href={collegeSearchLink + "&activeTab=programSearch"}>Program Search</a>
      </div>
      <div className="col-md-4">
        <h3><a target="_blank" href={collegeSearchLink + "&activeTab=mapSearch"}>Location Search</a></h3>
        If you would like to see a map.
        <br/>
        <a target="_blank" href={collegeSearchLink + "&activeTab=mapSearch"}>Location Search</a>
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
  </div>)
  }
}

export default CollegeSearch;
