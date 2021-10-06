// import Count from './Hook/firstClass/Count';
import { useCallback, useMemo, useState } from "react";
import Button from "./Hook/firstClass/useCallback/Button";
import ShowCount from "./Hook/firstClass/useCallback/ShowCount";
import Title from "./Hook/firstClass/useCallback/Title";
//use demo return value dhore rakhe.useDemo
//useCallback function mone rakhe bar bar re render hote dey na
//demo oi file value update dhore rakhe but sob somay use er proyojon nei aplication boro hoile aita use korbo

export default function App(){
         const [count1,setCount1] =useState(0);
         const [count2,setCount2] =useState(0);
        const incrementByOne=useCallback(()=>{
           setCount1((prevCount)=>prevCount+1)  
         },[]);
         const incrementByFive=useCallback(()=>{
           setCount2((prevCount)=>prevCount+5)  
         },[]); 
         //ei khane faka mane sob kisu mone rakbe
         //jodi kono function bahire thake thaile tar dependanci diye dithe hoibe smae vabe vvariable
         //use callback choto choto case a use korbo na jemon ekhane use korar dorkar nai
         const looping=useMemo(()=>{
             let i=0;
             while(i<1000000000) i+=1;
             return count1%2===0;
         },[count1])
        return (
        <div className="app">
         <h1><Title /></h1>
       <hr/>
         <ShowCount Count={count1} Title="Counter 1"/>
         <span>{ looping?"odd":"even"}</span>
         <Button handleClick={incrementByOne}>Increment BY One </Button>   
          <hr/>
           <ShowCount Count={count2} Title="Counter 2"/>
         <Button handleClick={incrementByFive}>Increment BY Five </Button>   
        </div>   
    );
    
}
