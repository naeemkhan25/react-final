
import ClickCount from './classfourth/ClickCount';
import Counters from './classfourth/Counters';
import OnHoverCounter from './classfourth/OnHoverCounter';
function App() {
    return (
        <div className="app">
          <Counters>{(count, IncrementCounter)=>(<ClickCount count={count} IncrementCounter={IncrementCounter}/>)}</Counters>
            <Counters>{(count, IncrementCounter)=>(<OnHoverCounter count={count} IncrementCounter={IncrementCounter}/>)}</Counters> 
        </div>
    );
}

export default App;