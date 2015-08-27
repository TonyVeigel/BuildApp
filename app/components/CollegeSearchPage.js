import React from 'react';
import StepTabsActions from '../actions/StepTabsActions';
import CollegeSearch from './CollegeSearch';
import DataStore from '../stores/DataStore';

class CollegeSearchPage extends React.Component{

  constructor(props){
    super(props);
    this.state = DataStore.getState();
  }

  componentDidMount(){
    StepTabsActions.updateSteps(
      {style:'done'},
      {style:'done'},
      {style:'done'},
      {style:'done'},
      {style:'done'}
    )
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
      <div className="row">
        <div className="col-md-12">
          <div className="college_search_container">
            <CollegeSearch radius={this.state.radius} zipCode={this.state.zipCode} cost={this.state.cost} award={this.state.award}
              awardDescription={this.state.awardDescription} categoryDescription={this.state.categoryDescription}
              deliveryDescription={this.state.deliveryDescription} category={this.state.category} delivery={this.state.delivery}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeSearchPage;
