import React from 'react';
import Search_in from '../Search_input/Search_input.jsx';

export default class Search  extends React.Component{
  add=(val)=>{
    this.props.addApp(val);
  }
  render(){
    return(
      <div>
         <h2>Search Github Users</h2>
         <Search_in add={this.add}/>
      </div>
    )
  }
}