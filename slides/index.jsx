import React from 'react';
import {
  Spectacle,
  Deck,
  Slide
} from 'spectacle';

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle>
        <Deck>
          <Slide>hello!</Slide>
        </Deck>
      </Spectacle>
    );
  }
}