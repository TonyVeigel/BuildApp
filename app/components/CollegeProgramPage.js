import React from 'react';
import StepTabsActions from '../actions/StepTabsActions';
import CollegeProgram from './CollegeProgram';
import DataStore from '../stores/DataStore';

class CollegeProgramPage extends React.Component{

  constructor(props){
    super(props);
    let storeData = DataStore.getState();
    this.state = {
      categoryList: [],
      category: storeData.category,
      delivery: storeData.delivery
    }
    this.onChange = this.onChange.bind(this);
  }

  loadCategoriesFromServer() {
    $.ajax({
      url:"/college-search/public/services/category/list",
      dataType: 'json',
      success: (data) => {
        this.setState({categoryList: data});
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
      {style:'done'},
      {style:'doing'},
      {style:'todo'}
    )
    DataStore.listen(this.onChange);
    this.loadCategoriesFromServer();
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
          <div className="college_program_container">
            <CollegeProgram delivery={this.state.delivery} categoryList={this.state.categoryList} category={this.state.category}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CollegeProgramPage;
