import Clock from "./Clock";
export default function ClockList({looping=[]}){
    return (
    <div>
        {looping.map((key)=>( 
        <Clock key={key}></Clock>
        ))}
    </div> 
    );
}
