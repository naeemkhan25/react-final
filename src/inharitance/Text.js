

import Emoji from './emoji';

export default class Text extends Emoji {
    // contructor(props) {
    //     super(props);
    // }

    render() {
        let contenxtData =this.addEmoji("I am a javascript Language","ract");
        return super.render(contenxtData);
    }
}