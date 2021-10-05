import { useState } from 'react';

function Todo(){
    const [todo,sateTodo]=useState('');
    const [warning,updateWarning]=useState(null);

     const handleChange=(e)=>{
     const inputValue=e.target.value;
     const warning=inputValue.includes('.js')?'you need to javascript':null;
     sateTodo(inputValue);
     updateWarning(warning);
    }
     return(
            <div>
            <h1>{todo}</h1>
            <input type="text" onChange={handleChange}/>
            <h1>{warning?warning:'good Choice'}</h1>
            </div>

        );
}
export default Todo;