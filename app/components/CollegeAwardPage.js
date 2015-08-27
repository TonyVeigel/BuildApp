import React from 'react';
import StepTabsActions from '../actions/StepTabsActions';
import DataStore from '../stores/DataStore';
import CollegeAward from './CollegeAward';

class CollegeAwardPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
        awardList: [],
        award: DataStore.getState().award
    }
    this.onChange = this.onChange.bind(this);
  }

  loadAwardsFromServer() {
    $.ajax({
      url:"/college-search/public/services/degree/list",
      dataType: 'json',
      success: (data) => {
        this.setState({awardList: data});
      },
      error: (xhr, status, err) => {
        console.error(status, err);
      }
    });
  }

  componentDidMount(){
    StepTabsActions.updateSteps(
      {style:'done'},
      {style:'done'},
      {style:'doing'},
      {style:'todo'},
      {style:'todo'}
    )
    DataStore.listen(this.onChange);
    this.loadAwardsFromServer();
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
          <div className="college_award_container">
            <CollegeAward awardList={this.state.awardList} award={this.state.award}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeAwardPage;