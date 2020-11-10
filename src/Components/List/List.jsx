import React from 'react';
import './css/list.css'
export default class List extends React.Component{
  render(){
    let {Users,ShowPage,isLoading}=this.props;
    if(ShowPage){
      return (
        <li className='a1'>在文本框中输入你想输入的名字</li>
      )
    }else if(isLoading){
      return(
        <li>请等待</li>
      )
    }else if(Users){
      return (
        <ul>
           {
             Users.map((item)=>{
               return <li key={item.id}>
                         <a href={item.html_url}><img src={item.avatar_url} alt="tupian"/></a>
                         <p>
                           {item.login}
                         </p>
                      </li>
             })
          }
        </ul>
      )
    }
  
  }
}