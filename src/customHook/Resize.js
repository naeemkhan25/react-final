import useWidth from './Hook/useWidth';
export default function Resize(){
 const onSmallScreen=useWidth(768);
 return (
  <div>
      <h1>this window is {onSmallScreen?'small':"large"}</h1>
  </div>
 );

}