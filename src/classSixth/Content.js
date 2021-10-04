import React from "react";
import Counters from "../classfourth/Counters";
import OnHoverCounter from "../classfourth/OnHoverCounter";
import ThemeContext from "./context/ThemeContext";
export default class Content extends React.Component{
   
    render(){
        const {Theme,swithTheme}=this.context;
    return (
        <div className="content">
            <h1>hello i am content</h1>
              <Counters>{(count, IncrementCounter)=>(<OnHoverCounter Theme={Theme} swithTheme={swithTheme} count={count} IncrementCounter={IncrementCounter}/>)}</Counters> 
         </div>   
    )
    }
} 
Content.contextType=ThemeContext;
