import { useEffect, useState } from 'react';
export default function Effect(){
  const [count,setCount]=useState(0);
  const [date,setDate]=useState(new Date().toLocaleString("en-BD"));
useEffect(()=>{
    console.log("hello world");
    document.title=`Clicked ${count} times`;
},[count]);
//jemon ekhane count upore ache gloabl kaj korche show aita parbo
const tick=()=>{
    setDate(new Date().toLocaleString("en-BD"));
}
useEffect(()=>{
    const unmount=setInterval(tick,1000);
    //willunmount er kaj kore jokhon onno page jei aita jeno r kaj na kore
    return ()=>{
       clearInterval(unmount);
    }
},[]);//ai khane [] mane ek bar run hoibe
//dependance function o dite pari jeita update hoile amr aita update hoibe.
//react er bulit in function dependance use korbo na and local
 const IncrementCounter=()=>{
     setCount((prvCount)=>prvCount+1);
 }
    return (
        <div>
            <p>time:{date}</p>
            <button type="button" onClick={IncrementCounter}>ADD update</button>
        </div>
    )
}