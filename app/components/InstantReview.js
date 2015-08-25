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
    return(
      <div>
        <div className="instant_review_container">
        </div>
        <h4><Link to="/college-search/location">Location</Link></h4>
        <ul>
          <li>Raidus : <span className="criteria-answer">{this.state.radius ? this.state.radius + ' miles' : this.state.radius}</span></li>
          <li>ZIP Code : <span className="criteria-answer">{this.state.zipCode}</span></li>
        </ul>
      </div>
    )
  }

}

export default InstantReview;
