import React from 'react';
function ShowCount({Count,Title}){
  console.log(`Reandring ${Title}`);
    return (
        <p>{Title} is {Count}</p>
    )
}
export default React.memo(ShowCount);
