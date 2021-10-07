import React, { useReducer } from "react";
import CounterB from './CounterB';

const initialState=0;
export const counterContext=React.createContext();
const reducer =(state,action)=>{
        switch(action){
          case 'increment':
            return state+1;
          case 'decrement':
             if(state>0){
                return state-1
             }
             return state;
        
          default:
             return state;
        }
}
export default function App(){
       const [count,dispatch]=useReducer(reducer,initialState);
        return (

        <div className="app">
          <h1> Count is-{count}</h1>
          <hr/>
          <counterContext.Provider value={{countdispatch:dispatch}}>
          <CounterB />
           </counterContext.Provider>
        </div> 
        
    );
    
}
