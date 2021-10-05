import React from 'react';
import ClickCount from './classfourth/ClickCount';
import Counters from './classfourth/Counters';
import ThemeContext from './classSixth/context/ThemeContext';
import Section from './classSixth/Section';
export default class App extends React.Component{
    state={
     Theme:"dark"
    }
    swithTheme=()=>{
      this.setState(({ Theme }) => {
                if (Theme === 'dark') {
                    return {
                        Theme: 'light',
                    };
                }
                return {
                    Theme: 'dark',
                };
            });
    };
    render() {
       const{ Theme}=this.state;
        return (
        <div className="app">
          <Counters>{(count, IncrementCounter)=>(<ClickCount count={count} IncrementCounter={IncrementCounter}/>)}</Counters>
          <ThemeContext.Provider value={{Theme,swithTheme:this.swithTheme}}><Section /></ThemeContext.Provider>
        </div>   
    );
    }
}
