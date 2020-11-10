import React from 'react'
import './App.css';
import axios from 'axios'
import Search from './Components/Search/Search.jsx';
import List from './Components/List/List.jsx'

export default  class App extends React.Component{
  state={
    Users:[],
    ShowPage:true,
    isLoading:false,
    error:''
  }
  addApp=(val)=>{
    this.setState({
      ShowPage:false,
      isLoading:true
    })
    axios({
      method:'GET',
      url:`https://api.github.com/search/users`,
      params:{
        q:val
      }
    })
    .then(
      val=>{
        let arr=[];
        for(let i=0;i<val.data.items.length;i++){
          arr.push(val.data.items[i]);
        }
        this.setState({
          Users:arr,
          isLoading:false
        })
      },
      err=>{

      }
    )
  }
  componentDidMount(){
    
  }

  render(){
    return (
      <div>
        <Search addApp={this.addApp}/>
        <List {...this.state}/>
      </div> 
      
    )
  }
}





