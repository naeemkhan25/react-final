import { useEffect, useState } from 'react';

export default function Resize(){
 const [onSmallScreen,setOnSmallScreen]=useState(false);

  const checkRezise=()=>{
      setOnSmallScreen(window.innerWidth<768);
  }
 useEffect(()=>{
   checkRezise();
   window.addEventListener("resize",checkRezise);
    return ()=>window.removeEventListener("resize",checkRezise);
 },[]);

 return (
  <div>
      <h1>this window is {onSmallScreen?'small':"large"}</h1>
  </div>
 );

}