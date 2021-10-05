import { useState } from 'react';

function Count(){
    const [count,satCounter]=useState(0);

     return(
          <div>
              <h1>{count}</h1>
              <button type="button" onClick={()=>satCounter((prevState)=>prevState + 1)}>Add</button>
         </div>
        );
}
export default Count;