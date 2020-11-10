import React from 'react'
import './App.css';
// import axios from 'axios'


export default  class App extends React.Component{
  state={
    RespName:'',
    RespURL:'',
    isLoading:false,
    error:'',
    keyWords:'v'
  }

  componentDidMount(){
    //  const URL=`https://api.github.com/search/repositories?q=${this.state.keyWords}&sort=stars`;
    //使用axios发送请求
    //  axios({
    //    method:'GET',
    //    url:'https://api.github.com/search/repositories',
    //    params:{
    //      q:this.state.keyWords,
    //      sort:'stars'
    //    }
    //  }).then(val=>{
    //    let {name,html_url}=val.data.items[0];
    //    this.setState({
    //      RespName:name,
    //      RespURL:html_url,
    //      isLoading:true
    //    })
    //  },err=>{
    //    console.log(err);
    //  })
    const URL=`https://api.github.com/search/repositories?q=${this.state.keyWords}&sort=stars`;
    fetch(URL)
    .then(val=>{
      //此步骤是看是否连接上服务器,要返回一个promise的实例(val.json())才可以。
      //如果前面域名都写对了，只有后面的路由写错了，也会返回一个promise实例所以要进行判断。
      if(val.status>=200&&val.status<=299){
        return val.json();
      }else{
        return Promise.reject('请求路径有错误')
      }
    })
    .then(val=>{
      let {name,html_url}=val.items[0]
      // console.log(name,html_url);
      this.setState({
        RespName:name,
        RespURL:html_url,
        isLoading:true
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    if(!this.state.isLoading){
      return <p>Loading...</p>
    }else{
      return (
          <p>
             你好啊，最多的是<a href={this.state.RespURL}>{this.state.RespName}</a>  
          </p>
      )
    }
    
  }
}





