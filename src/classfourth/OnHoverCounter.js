
 function OnHoverCounter(props){
    const { count, IncrementCounter } = props;
    return (
        <div>
            <h1 onMouseOver={IncrementCounter}>Hovered {count} times</h1>
        </div>
    )
}
export default OnHoverCounter;