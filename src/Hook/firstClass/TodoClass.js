import React from 'react';
export default class TodoClass extends React.Component {
    state={
        todo:'',
        warning:null
    };
   handleChange=(e)=>{
     const inputValue=e.target.value;
     const warning=inputValue.includes('.js')?'you need to javascript':null;
     this.setState({todo:inputValue,warning});
       }
    render() {
        const{todo,warning} = this.state;
        return(
            <div>
            <h1>{todo}</h1>
            <input type="text" onChange={this.handleChange}/>
            <p>{warning?warning:'good Choice'}</p>
            </div>

        );
          
    }
}