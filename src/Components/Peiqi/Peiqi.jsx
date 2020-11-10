import React ,{Component} from 'react';
import './css/main.css'

export default class Peiqi extends Component{
  delete=(e)=>{
    // console.log()
    // let arr1=[];
    let arr=this.props.cont.pro;
    // console.log(arr)
    arr.forEach((item,index) => {
      if(item.name===e.target.value){
        arr.splice(index,index+1)
      }
    });
    this.props.cont1.setState({
      pro:arr
    })
  }
  render(){
    return (
      <div className="a1">
        <h2 style={{display:this.props.cont.pro.length>0?'none':'block'}}>暂时没有评论，您可以添加</h2>
          <div className="list" style={{display:this.props.cont.pro.length>0?'block':'none'}}>
              <h3>评论回复:</h3>
              {
                this.props.cont.pro.map(item=>{
                    return <li key={item.name+item.content}>
                                <h2>{item.name}说:</h2>
                                <p id='p1'>{item.content}</p>
                                <button className='btn' onClick={this.delete} value={item.name}>删除</button>
                          </li>
                })
              }
          </div>
        
      </div>
    )
  }
} 