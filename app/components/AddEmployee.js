import React from 'react';
import AddEmployeeStore from '../stores/AddEmployeeStore'
import AddEmployeeActions from '../stores/AddEmployeeActions'

class AddEmployee extends React.Component{

  constructor(props){
    super(props);
    this.state = AddEmployeeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    AddEmployeeStore.listen(this.onChange)
  }

  componentWillUnmount(){
    AddEmployeeStore.unlisten(this.onChange)
  }

  onChange(state){
    this.setState(state);
  }


  render(){

    return(



    )
  }
}
