import { useState } from 'react';

function TodoObject(){
    const [todo,sateTodo]=useState({
        title:'',
        description:''
    });
    const {title,description}=todo;
     return(
            <div>
            <h1>{title}</h1>
            <input type="text" value={title} onChange={(e)=>{
             sateTodo({
                 ...todo,
                 title: e.target.value,
             })
            }}/>
            <textarea name="description" value={description} onChange={(e)=>{
                 sateTodo({
                 ...todo,
                 description: e.target.value,
             });
            }}
            />
         </div>
        );
}
export default TodoObject;