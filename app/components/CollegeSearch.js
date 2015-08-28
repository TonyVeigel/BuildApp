import React from 'react';
import {Link} from 'react-router';
import CollegeSearchExample from './CollegeSearchExample';
import ProgramSearchExample from './ProgramSearchExample';
import LocationSearchExample from './LocationSearchExample';

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
            <p className="hidden-sm hidden-lg hidden-md">
              You have indicated that you would like to search within a radius of <span className="criteria-answer">{this.props.radius ? this.props.radius + ' miles' : 'No Preference'}</span>
            &nbsp;from ZIP Code <span className="criteria-answer">{this.props.zipCode ? this.props.zipCode : 'No Preference'}</span>. The total cost per year you would like to spend
            is <span className="criteria-answer">{totalCost}</span>. You are looking for a Award/Degree of type <span className="criteria-answer">{this.props.awardDescription ? this.props.awardDescription : 'No Preference'}</span>
          &nbsp;in the program <span className="criteria-answer">{this.props.categoryDescription ? this.props.categoryDescription : 'No Preference'}</span>. You would like the delivery of this program to be
          &nbsp;<span className="criteria-answer">{this.props.deliveryDescription ? this.props.deliveryDescription : 'No Preference'}</span>.
          <br/>
        </p>
      </div>
    </div>
    <br/>
    <div className="row ">
      <div className="border_bottom-grey col-md-12">
        <CollegeSearchExample link={collegeSearchLink}/>
      </div>
      <div className="border_bottom-grey col-md-12">
        <ProgramSearchExample link={collegeSearchLink}/>
      </div>
      <div className="col-md-12">
        <LocationSearchExample link={collegeSearchLink}/>
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
