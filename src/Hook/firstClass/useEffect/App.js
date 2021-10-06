// import Count from './Hook/firstClass/Count';
import { useState } from "react";
import Effect from "./Hook/firstClass/useEffect/Effect";
export default function App(){
         const [show,setShow]=useState(true);

        return (
        <div className="app">
            
           <div>{show &&<Effect />}</div>
           <button onClick={()=>{
               setShow((prevState)=>!prevState);
           }} type="button"> {show?"hide Post":'Show post'}</button>
          
        </div>   
    );
    
}
