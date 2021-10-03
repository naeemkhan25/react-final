import React from 'react';
import Boil from './Boil';
import { convert, toCelsius, toFahrenheit } from './converter';
import Temperatures from './Temparature';

export default class Calculater extends React.Component {
    state={
       tempareature:'',scale:'c'
   }
   onTempareatureCal=(e,scale) =>{
       this.setState({
           tempareature:e.target.value,
           scale,     
        });
   }
   render() {
    const {tempareature, scale} = this.state;
    const celsius= scale==='f'?convert(tempareature,toCelsius):tempareature;
    const fahrenheit= scale==='c'?convert(tempareature,toFahrenheit):tempareature;

       return (
           <div>
               <Temperatures scale='c' tempareature={celsius} tempareatureCal={this.onTempareatureCal}/>
               <Temperatures scale='f' tempareature={fahrenheit} tempareatureCal={this.onTempareatureCal}/>
               <Boil tempareaturees={parseFloat(tempareature)}/>
               </div>
       )
   }

}