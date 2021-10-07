import { useEffect, useState } from 'react';
const useWidth=(screen)=>{
const [onSmallScreen,setOnSmallScreen]=useState(false);
 
 useEffect(()=>{
 const checkRezise=()=>{
      setOnSmallScreen(window.innerWidth<screen);
  }
   checkRezise();
   window.addEventListener("resize",checkRezise);
    return ()=>window.removeEventListener("resize",checkRezise);
 });
 return onSmallScreen;
}
export default useWidth;