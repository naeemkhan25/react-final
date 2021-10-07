import { useReducer } from "react";
const initialState=0;
const reducer =(state,action)=>{
        switch(action){
          case 'increment':
            return state+1;
          case 'decrement':
             if(state>0){
                return state-1;
             }
             break;
          default:
             return state;
        }
}
export default function Counters(){
       const [count,dispatch]=useReducer(reducer,initialState);
        return (
        <div className="app">
          <h1> Count is-{count}</h1>
          <hr/>
          <button type="button" onClick={()=>dispatch('increment')} >Increment</button>
            <button type="button" onClick={()=>dispatch('decrement')} >Decrement</button>
        </div>   
    );
    
}
