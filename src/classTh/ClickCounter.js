
import withCounter from './HOC/withCounter';

const ClickCounter=(props)=>{
     const { count, IncrementCounter } = props;
     return (
      <div>
            <button type="button" onClick={IncrementCounter}>
                Clicked {count} times
            </button>
        </div>
     );
}
export default withCounter(ClickCounter);


