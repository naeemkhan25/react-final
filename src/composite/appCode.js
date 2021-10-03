import Emoji from './Emoji';
import Braket from '/Braket';
import Text from '/Text';

function App() {
    return (
      <div>
        <div>
        <Emoji>
            {({ addEmoji }) => (
                <Braket>
                    {({ addBracket }) => <Text addEmoji={addEmoji} addBracket={addBracket} />}
                </Braket>
            )}
        </Emoji>
        </div>
        <div>
           <Emoji>
            {({ addEmoji }) => (
                <Braket>
                    {({ addBracket }) => <Text addBracket={addBracket} />}
                </Braket>
            )}
        </Emoji>
        </div>
        </div>
    );
}

export default App;

