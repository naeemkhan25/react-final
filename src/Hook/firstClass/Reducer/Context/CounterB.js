import { useContext } from 'react';
import { counterContext } from './App';
export default function CounterB(){
    const countContext=useContext(counterContext);
    return (
        <div>
        <button type="button" onClick={()=>countContext.countdispatch('increment')} >Increment by 1</button>
       <button type="button" onClick={()=>countContext.countdispatch('decrement')} >decrement by 1</button> 
   </div>
    );
}