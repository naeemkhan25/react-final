import React from 'react';


function Button({handleClick,children}){
    console.log(`Rendaring Button ${children}`);
    return (
        <button onClick={handleClick} type="button">{children}</button>
    )
}
export default React.memo(Button);