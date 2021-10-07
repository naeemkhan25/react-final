import { useEffect, useReducer } from "react";


const initialState={
    loading: true,
    error:'',
    posts:{}
}

const reducer = (state,action)=>{
         switch(action.type){
             case 'Success':
                return {
                loading: false,
                error:'',
                posts:action.result 
                 }
                case 'Error':
                return{
                loading: false,
                error:"there is problem fatching",
                posts:{}
                 }
                 default:
                     return state
         }
}

export default function GetPosts2(){
    const [state,dispatch] =useReducer(reducer,initialState);
     
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data)=>{
           dispatch({type:'Success',result:data});
        })
        .catch((error)=>{
           dispatch({type:'Error'});
        });
    });
    return (
        <div className="fatching">
           <h1>{state.loading?"....loading...":state.posts.title}</h1>
            <h1>{state.error||null}</h1>
        </div>

    )
}