export default function ClickCount(props){
     const { count, IncrementCounter } = props;
     return (
      <div>
            <button type="button" onClick={IncrementCounter}>
                Clicked {count} times
            </button>
        </div>
     );
}


