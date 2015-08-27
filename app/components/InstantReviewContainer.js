import React from 'react';
import DataStore from '../stores/DataStore';
import InstantReview from './InstantReview';

class InstantReviewContainer extends React.Component{

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
      <InstantReview radius={this.state.radius} zipCode={this.state.zipCode} cost={this.state.cost}
                      awardDescription={this.state.awardDescription} categoryDescription={this.state.categoryDescription}
                      deliveryDescription={this.state.deliveryDescription}/>
    )
  }

}

export default InstantReviewContainer;
