import React ,{Component} from 'react';
import './css/hello.css'
export default class Hello extends Component{
  myRef1=React.createRef();
  myRef2=React.createRef();
  demo=()=>{
    let in1=this.myRef1.current.value;
    let in2=this.myRef2.current.value;
    if(in1.trim()===''){
      alert('请输入你的昵称');
      return;
    }
    if(in2.trim()===''){
      alert('请输入你要发表的言论');
      return;
    }
    let obj={name:in1,content:in2}
    this.props.add(obj)
  }
  render(){
    return (
      <div className='hel'>
        <p>用户名</p>
        <input type="text" ref={this.myRef1}/>
        <p>评论内容</p>
        <textarea name="" id="" cols="30" rows="10" placeholder='评论内容' ref={this.myRef2}></textarea>
        <button onClick={this.demo}>发表</button>
      </div>
    )
  }
} 