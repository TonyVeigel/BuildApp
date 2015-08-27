import React from 'react';
import {Link} from 'react-router';

class InstantReview extends React.Component{

  render(){

    let totalCost;
    if(this.props.cost > 5000){
      totalCost = '$' + this.props.cost;
    }else if(this.props.cost){
      totalCost = <span className="validationError">Invalid Data</span>
    }else{
      totalCost = 'No Preference';
    }

    return(
      <div>
        <div className="instant_review_container">
          Review
        </div>
        <h5><Link className="link-no-decoration" to="/college-search/guide/location">Location</Link></h5>
        <ul>
          <li className="criteria_sub_heading">Raidus <br/><span className="criteria-answer">{this.props.radius ? this.props.radius + ' miles' : 'No Preference'}</span></li>
          <li className="criteria_sub_heading">ZIP Code <br/><span className="criteria-answer">{this.props.zipCode ? this.props.zipCode : 'No Preference'}</span></li>
        </ul>
        <h5><Link className="link-no-decoration" to="/college-search/guide/cost">Cost</Link></h5>
        <ul>
          <li className="criteria_sub_heading">Total Cost <br/> <span className="criteria-answer">{totalCost}</span></li>
        </ul>
        <h5><Link className="link-no-decoration" to="/college-search/guide/award">Award</Link></h5>
        <ul>
          <li className="criteria_sub_heading">Award/Degree <br/> <span className="criteria-answer">{this.props.awardDescription ? this.props.awardDescription : 'No Preference'}</span></li>
        </ul>
        <h5><Link className="link-no-decoration" to="/college-search/guide/program">Program</Link></h5>
        <ul>
          <li className="criteria_sub_heading">Program <br/><span className="criteria-answer">{this.props.categoryDescription ? this.props.categoryDescription : 'No Preference'}</span></li>
          <li className="criteria_sub_heading">Delivery <br/><span className="criteria-answer">{this.props.deliveryDescription ? this.props.deliveryDescription : 'No Preference'}</span></li>
        </ul>
      </div>
    )
  }
}

export default InstantReview;
