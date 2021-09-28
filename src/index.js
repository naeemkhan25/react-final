import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import reportWebVitals from './reportWebVitals';
  function Welcome() {
  return <h1>Hello khan</h1>;
}

class Clock extends React.Component{

  render(){
  return (
    <div>{this.props.children}{new Date().toLocaleTimeString(this.props.name)}</div>
 );
  }
}

ReactDOM.render(
   <Clock name='bn-BD'><Welcome /></Clock>,
  document.getElementById('root')
);
ReactDOM.render(
   <Clock name='en-BD'/>,
  document.getElementById('root2')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
