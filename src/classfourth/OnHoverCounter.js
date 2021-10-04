
 function OnHoverCounter(props){
    const { Theme,swithTheme,count, IncrementCounter } = props;
     const style=Theme==='dark'?{backgroundColor:'#000000',color:'#ffff'}:null;
    return (
        <div>
            <h1 style={style} onMouseOver={IncrementCounter}>Hovered {count} times</h1>
            <button type="button" onClick={swithTheme}>drak</button>
        </div>
    )
}
export default OnHoverCounter;