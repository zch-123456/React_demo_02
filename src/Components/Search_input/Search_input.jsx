import React from 'react'

export default class Search_in extends React.Component{
  demo=()=>{
    //  console.log(this.input.value);
    let content=this.input.value;
    this.props.add(content)
  }
    render(){
      return (
        <div>
          <input type="text" placeholder='enter the name you search' ref={input=>{this.input=input}}/>
          <button onClick={this.demo}>Search</button>
        </div>
      )
    }
}