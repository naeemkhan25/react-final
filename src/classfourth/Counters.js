import React from 'react';
class Counters extends React.Component {
    state ={
        count:0,
    }
    IncrementCounter=()=>{
         this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    render() {
             const {children}=this.props;
             const { count} = this.state;
            return  children(count,this.IncrementCounter);
    }
}
export default Counters;