 import React from 'react';
import Click from './Click';
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
    const {date,locale} = this.state;
    // let button;
    // if(locale==='bn-BD')
    // {
    //  button =(
    //     <Click change={this.handelClocks} locale="en-US"></Click>
    //  );  
    // }else{
    //    button =(
    //     <Click change={this.handelClocks} locale="bn-BD"></Click>
    //  );  
    // }
  return (
    <div>
    <h2><Wellcome />{date.toLocaleTimeString(locale)}</h2>
    {/* <button  onClick={this.handelClocks.bind(this,'en-US')}>click here</button> */}
      {/* <button  onClick={()=>this.handelClocks('en-US')}>click here</button> */}
      {/* {button} */}
      { locale==='bn-BD'?(
         <Click change={this.handelClocks} locale="en-US"></Click>
      ):(
       <Click change={this.handelClocks} locale="bn-BD"></Click>
      )}
    </div>
 );
  }
}
export default Clock;

