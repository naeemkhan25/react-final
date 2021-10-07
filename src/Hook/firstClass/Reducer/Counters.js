import { useReducer } from "react";
const initialState={
    counter:0,
    
};
const reducer =(state,action)=>{
        switch(action.type){
          case 'increment':
            return { counter:state.counter+action.value};
          case 'decrement':
             if(state.counter>0){
                return { counter:state.counter-action.value};
             }
             return state;
        
          default:
             return state;
        }
}
export default function Counters(){
       const [count,dispatch]=useReducer(reducer,initialState);
        return (
            <div>
        <div className="app">
          <h1> Count is-{count.counter}</h1>
          <hr/>
          <button type="button" onClick={()=>dispatch({
             type:'increment',
             value:1
          })} >Increment by 1</button>
             <button type="button" onClick={()=>dispatch({
             type:'increment',
             value:5
            
          })} >Increment BY 5</button>
           
        </div> 
          <div className="app2">
          <button type="button" onClick={()=>dispatch({
                type:'decrement',
                value:1
            })} >Decrement by 1</button>
            <button type="button" onClick={()=>dispatch({
                type:'decrement',
                value:5
            })} >Decrement by 5</button>
        </div> 
        </div>  
    );
    
}
