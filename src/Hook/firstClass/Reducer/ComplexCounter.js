import { useReducer } from "react";
const initialState={
    counter:0,
    counter2:0
    
};
const reducer =(state,action)=>{
        switch(action.type){
          case 'increment':
            return { ...state,counter2:state.counter2+action.value};
          case 'decrement':
                return { ...state,counter2:state.counter2-action.value};
          case 'increment2':
                return { ...state,counter1:state.counter1+action.value};
          case 'decrement2':
                  return { ...state,counter1:state.counter1-action.value}; 
          default:
             return state;
        }
}
export default function ComplexCounter(){
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
                type:'decrement',
                value:1
            })} >Decrement by 1</button>
           
       </div>
       <div className="app2">
          <h1> Count is-{count.counter2}</h1>
          <hr/>
          <button type="button" onClick={()=>dispatch({
             type:'increment2',
             value:1
          })} >Increment by 1</button>
            
          
          <button type="button" onClick={()=>dispatch({
                type:'decrement2',
                value:1
            })} >Decrement by 1</button>
           
       </div>
        </div>  
    );
    
}
