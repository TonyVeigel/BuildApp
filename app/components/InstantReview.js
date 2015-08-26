import React from 'react';
import DataStore from '../stores/DataStore';
import {Link} from 'react-router';

class InstantReview extends React.Component{

  constructor(props){
    super(props);
    this.state = DataStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    DataStore.listen(this.onChange);
  }

  componentWillUnmount(){
    DataStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
  }

  render(){

    let totalCost;
    if(this.state.cost >= 5000){
      totalCost = '$' + this.state.cost;
    }else if(this.state.cost){
      totalCost = '$5000';
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
          <li className="criteria_sub_heading">Raidus <br/><span className="criteria-answer">{this.state.radius ? this.state.radius + ' miles' : 'No Preference'}</span></li>
          <li className="criteria_sub_heading">ZIP Code <br/><span className="criteria-answer">{this.state.zipCode ? this.state.zipCode : 'No Preference'}</span></li>
        </ul>
        <h5><Link className="link-no-decoration" to="/college-search/guide/cost">Cost</Link></h5>
        <ul>
          <li className="criteria_sub_heading">Total Cost <br/> <span className="criteria-answer">{totalCost}</span></li>
        </ul>
        <h5><Link className="link-no-decoration" to="/college-search/guide/award">Award</Link></h5>
        <ul>
          <li className="criteria_sub_heading">Award/Degree <br/> <span className="criteria-answer">{this.state.awardDescription ? this.state.awardDescription : 'No Preference'}</span></li>
        </ul>
        <h5><Link className="link-no-decoration" to="/college-search/guide/program">Program</Link></h5>
        <ul>
          <li className="criteria_sub_heading">Program <br/><span className="criteria-answer">{this.state.categoryDescription ? this.state.categoryDescription : 'No Preference'}</span></li>
          <li className="criteria_sub_heading">Delivery <br/><span className="criteria-answer">{this.state.deliveryDescription ? this.state.deliveryDescription : 'No Preference'}</span></li>
        </ul>
      </div>
    )
  }

}

export default InstantReview;
