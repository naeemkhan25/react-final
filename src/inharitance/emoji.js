import React from 'react';

export default class Emoji extends React.Component {
   addEmoji=(emoji,text) => `${emoji} ${text} ${emoji} `
  render(textdata){
    return (
       <div>{textdata}</div>
    )
}
}