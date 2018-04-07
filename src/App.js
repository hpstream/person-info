import React, { Component } from 'react';
import logo from './logo.svg';
import './lib/css/index.scss'
import './App.css';

//个人信息，求职意向，专业技能，我的文章，求职经历 自我评价
const personInfo ={
    title:['黄鹏','求职意向：前端开发','手机号：13155183095'],
    info:{
      '个人信息':[],

    }
}
class App extends Component {
  constructor(){
      super();
  }
  render() {
    return (
      <div className="person-info">
        <header className="title p4 flex justify-around">
          { personInfo.title.map((item, i)=>{
            return <div  key={i}>{item}</div>
          })}
        </header>
        <p className="App-intro clearfx">
          
        </p>
      </div>
    );
  }
}

export default App;
