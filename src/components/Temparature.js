import React from 'react';
 let scaleName={
     c:'celcius',
     f:'farenhite'
 }
export default function Temperatures({scale,tempareature,tempareatureCal}) {
       return (
           <div>
               <fieldset>
                   <legend>Enter the tempareature in {scaleName[scale]}</legend>
                   <input type="text" value={tempareature} onChange={(e)=>tempareatureCal(e,scale)}/>
               </fieldset>
               {/* <Boil tempareature={parseFloat(tempareature)}/> */}
               </div>
       )
   
}