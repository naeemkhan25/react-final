function Welcome(props) {
 return (
    <h2>{new Date().toLocaleTimeString(props.name)}</h2>
 );
}
