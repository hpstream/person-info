import React, { Component } from "react";
import "./lib/css/index.scss";
import "./lib/js/main";
import mp3 from "./mp3/1.mp3";
import "./App.css";
import personInfo from './data.js';

class App extends Component {
  constructor() {
    super();
    this.state =personInfo;
  }
  getHtml(item){
    if(item.name !=='我的经历'){
      return item.data.map((d, i) => {
        return (
          <div
            className={"colom-" + item.colom}
            key={i}
            dangerouslySetInnerHTML={{ __html: d }}
          >
          </div>
        );
      })
    }
    return item.data.map((d, i) => {

      return (
        <div
          className={"pt2  colom-" + item.colom}
          key={i}
        >
          <div>
            {d.time.map((m)=>{
              return (<span className='pr4 bold500'>{m}</span>)
          })}
          </div>
          {d.children.map((cd)=>{
              return (
                <div>
                  <div className='pt2 px2 color-link'>{cd.protectName}</div>
                  <div className='pt1 px2'>{cd.protectInfo}</div>
                  <div className='pt1 px2'>{cd.protextDuty}</div>
                  <div className='pb0 clearfix'>
                  {cd.data.map((s1,s)=>{
                      return (<div
                        className={"pl6 colom-" + item.colom}
                        key={s}
                        dangerouslySetInnerHTML={{ __html: s1 }}
                      >
                      </div>)
                  })}
                  </div>
               </div>
            )
          })}
        </div>
      );
    });
  }
  controlAudio(data){
    console.log(data);
  }
  componentDidMount(){
    this.refs.audio.play();
    // console.log(this.refs.audio);
  }
  render() {
    return (
      <div className="person-info px4">
        <audio src={mp3} id='audio' ref='audio' preload='true'  onCanPlay={() => this.controlAudio('allTime')}></audio>
        <header className="title p4 flex justify-between">
          {personInfo.title.data.map((item, i) => {
            return <div key={i}>{item}</div>;
          })}
        </header>
        <div className="App-intro p4 clearfx">
          {personInfo.infos.map((item, i)=> {
            return (
              <div key={i} className="clearfix">
                <div className="header">
                  <span className="text">{item.name}</span>
                </div>

                <div className="row py2 px2 clearfx">
                 {this.getHtml(item)}
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
