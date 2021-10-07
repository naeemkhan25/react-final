import { useEffect, useState } from 'react';

export default function GetPosts(){
     const [loading,setLoading] = useState(true);
     const [error,setError] = useState('');
     const [posts,getPosts] = useState({});

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then((data)=>{
          setLoading(false);
          getPosts(data);
          setError('')
        })
        .catch((error)=>{
          setLoading(false);
          getPosts({});
          setError('There was a problem get Posts')
        });
    });
    return (
        <div>
            <h1>{loading?'....Loading...':posts.title}</h1>
            <h1>{error||null}</h1>
        </div>
    );
}