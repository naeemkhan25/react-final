import React from 'react';

const withCounter=(OrginalCounters)=>{
    class NewComponent extends React.Component {
    state ={
        count:0,
    }
    IncrementCounter=()=>{
         this.setState((prevState) => ({ count: prevState.count + 1 }));
    }
    render() {
             const { count } = this.state;
            return <OrginalCounters count={count} IncrementCounter={this.IncrementCounter}></OrginalCounters>
    }
}

    return NewComponent;

}
export default withCounter;