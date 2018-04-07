import React, { Component } from 'react';
import logo from './logo.svg';
import './lib/css/index.scss'
import './App.css';

//个人信息，求职意向，专业技能，我的文章，求职经历 自我评价
['性　  别： 黄鹏'	,'年    龄： 23','学    历： 本科','邮箱地址： 915414300@qq.com','专    业： 计算机电子信息工程专业',
'工作年限： 2年' ,'联系电话： 13155183095']

['求职意向：前端开发工程师','工作性质：全职','期望薪资：面议','目前状态：离职','期望地点：合肥']

['熟练使用 Html，Css ，JavaScript，能够合理完成pc端和移动端页面的编写和维护',
'掌握移动端编程，熟练使用Bootstrap 框架响应式布，开发基于移动端的页面',
'熟悉jquery等实用插件的应用,轮播图，tab栏，瀑布流，延迟加载，全屏滚动等等常用功能的实现',
'熟练原生js, 了解js面向对象原理，闭包以及原型结构',
'熟练Ajax交互，promise,fecth根据后台接口能够合理完成前后台交互',
'熟练使用less,sass预处理语言和gulp，webpack代码打包工具',
'熟练使用javascrtipt设计模式，可以采用面向对象编程进行页面开发。',
'熟悉html5,css3新特性，可用css3制作动画',
'熟练使用 angularJS（ng1）,vue.js，react可以完成无需刷新的单页面应用',
'了解Node.js，express，koa等web框架，会使用npm命令行以git版本管理工具',
'了解cordova，ngCorderva,曾改写过别人的插件',
'了解mysql的使用']

['简书账号：https://www.jianshu.com/u/0e190d5b2e72',
  'segmentfault : https://segmentfault.com/u/believe_dream/articles',
  'github: https://github.com/hpstream'
]

['有责任，工作踏实，性格开朗乐观，积极上进',
'喜欢前端开发，非常热爱编程，喜欢钻研新的技术',
'能够很好的与产品、设计师和后台开发人员沟通协作，具有良好的团队合作精神',
'具有很强的自学能力和良好的学习方法，喜欢研究各种新的框架']



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
