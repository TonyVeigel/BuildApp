import React from 'react';

class CategorySelect extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      categoryList: [],
      subcategoryList: [],
      category: DataStore.getState().category,
      subcategory: DataStore.getState().subcategory
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
    DataStore.listen(this.onChange);
    this.loadCategoriesFromServer();
    this.loadSubCategoriesFromServer();
  }

  componentWillUnmount(){
    DataStore.unlisten(this.onChange);
  }

  onChange(state){
    this.setState(state);
  }

  render(){

    let categoryOptions = this.props.categoryList.map((category, i) =>{
      return(
      <option key={i} value={category.id}>{category.longDesc}</option>
      )
    });

    return(

    )
  }
}
