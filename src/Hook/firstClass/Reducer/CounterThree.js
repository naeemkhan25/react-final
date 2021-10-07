import { useReducer } from "react";
const initialState=0;
const initialState2=5;

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
export default function CounterThree(){
       const [count,dispatch]=useReducer(reducer,initialState);
        const [count2,dispatch2]=useReducer(reducer,initialState2);
        return (
            <div>
        <div className="app">
          <h1> Count is-{count}</h1>
          <hr/>
          <button type="button" onClick={()=>dispatch('increment')} >Increment by 1</button>
             <button type="button" onClick={()=>dispatch('decrement')} >decrement by 1</button>
           
        </div> 
          <div className="app2">
            <h1> Count is-{count2}</h1>
          <button type="button" onClick={()=>dispatch2('increment')} >increment by 1</button>
            <button type="button" onClick={()=>dispatch2('decrement')} >Decrement by 1</button>
        </div> 
        </div>  
    );
    
}
