import React from 'react';
import {
  Spectacle,
  Deck,
  Slide,
  Heading,
  Link,
  Text,
  Image,
  CodePane,
  BlockQuote,
  Quote,
  Cite,
  List,
  ListItem,
  Appear,
  Fit,
  Fill,
  Layout
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from '../theme';

const theme = createTheme();
const img = {
  pug: require('../assets/745px-Carl_Reichert_Mops.jpg'),
  nyan: require('../assets/nyancat.gif')
};
preloader(img);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="none" transition={['fade']} transitionDuration={200}>
          <Slide>
            <Heading size={1} fit>Hello!</Heading>
            <Link href="https://github.com/sebald/prensentation-template">
              View on Github
            </Link>
          </Slide>
          <Slide>
            <Heading size={1}>H1</Heading>
            <Heading size={2}>H2</Heading>
            <Heading size={3}>H3</Heading>
            <Heading size={4}>H4</Heading>
          </Slide>
          <Slide>
            <BlockQuote>
              <Quote>Falling in love with code means falling in love with problem solving and being a part of a forever ongoing conversation.</Quote>
              <Cite>Kathryn Barrett</Cite>
            </BlockQuote>
          </Slide>
          <Slide>
            <Heading size={2}>A wild List appears...</Heading>
            <List>
              <Appear><ListItem>One</ListItem></Appear>
              <Appear><ListItem>Two</ListItem></Appear>
              <Appear><ListItem>Three</ListItem></Appear>
            </List>
          </Slide>
          <Slide>
            <Image src={img.pug} height="500px"/>
            <Text>A Pug by Carl Reichert (1836-1918)</Text>
          </Slide>
          <Slide bgImage={img.nyan}></Slide>
          <Slide>
            <Heading>Columns</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <Heading>Fitting</Heading>
            <Layout>
              <Fit>
                <Image src={img.pug} height="300px" margin="0 2rem 0 0"/>
              </Fit>
              <Fill>
                <List>
                  <ListItem>One</ListItem>
                  <ListItem>Two</ListItem>
                  <ListItem>Three</ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide>
            <CodePane
              lang="ts"
              source={require('raw!../assets/example.ts')}
            ></CodePane>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}