//8th class code for
 import React from 'react';
import Click from './Click';
function Welcome(props) {
 return (
    <h2>{new Date().toLocaleTimeString(props.name)}</h2>
 );
}
 function Wellcome(){
   return (
       <div>Hello world</div>
   );
 }
class Clock extends React.Component{
     state={date:new Date(),locale:'bn-BD'}
    componentDidMount(){
      this.timeId=setInterval(() =>
       this.Tick(),1000);
    }
    Tick(){
      this.setState({date:new Date()});
    }
   componentWillUnmount() {
    clearInterval(this.timerID);
  }
  handelClocks=(locale)=>{
     this.setState({locale});
  }

  render(){
    console.log('clock componenet rendered');
    const {date,locale} = this.state;
  return (
    <div>
    <h2><Wellcome />{date.toLocaleTimeString(locale)}</h2>
    {/* <button  onClick={this.handelClocks.bind(this,'en-US')}>click here</button> */}
      {/* <button  onClick={()=>this.handelClocks('en-US')}>click here</button> */}
       <Click change={this.handelClocks} local="en-US"></Click>
    </div>
 );
  }
}
export default Clock;

