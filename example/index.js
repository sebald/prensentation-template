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
  Layout,
  Markdown,
  Code
} from 'spectacle';

import preloader from 'spectacle/lib/utils/preloader';
import createTheme from '../theme';

const theme = createTheme();
const gutter = '25px';
const img = {
  pug: require('./assets/745px-Carl_Reichert_Mops.jpg'),
  nyan: require('./assets/nyancat.gif')
};
preloader(img);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck progress="none" transition={['fade']} transitionDuration={200}>
          <Slide>
            <Heading size={1} fit>Hello!</Heading>
            <Text>
              <Link href="https://github.com/sebald/prensentation-template">
                View on Github
              </Link>
            </Text>
          </Slide>
          <Slide>
            <Heading size={1}>H1</Heading>
            <Heading size={2}>H2</Heading>
            <Heading size={3}>H3</Heading>
            <Heading size={4}>H4</Heading>
          </Slide>
          <Slide>
            <Markdown>{`HTTP as API. Grunt is a language. The only difference is that the *revealing module pattern* was engineered as a way to ensure that all methods and variables are kept private until they are acceptable before being submitted to the D3. [Broccoli](https://en.wikipedia.org/wiki/Broccoli) is a lightweight data-interchange format. Isomorphic is an application is said to be universal isomorphic when its code can run both in the ECMAScript language specification. It allows you to write powerful and flexible code with its elegant, well documented, and coherent APIs.`}</Markdown>
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
                <Text margin={`0 ${gutter} 0 0`} textAlign="left">
                  JSON for Linked Data. Ionic is a realtime MVC Framework for Node. JavaScript language that compiles into JavaScript. Express is a JavaScript library for JavaScript programmers. MVC Framework for Node.
                </Text>
              </Fill>
              <Fill>
                <Text margin={`0 0 0 ${gutter}`} textAlign="left">
                  Applications such as PDF documents, site-specific browsers, and desktop widgets. JavaScript developer. MongoDB, ExpressJS, AngularJS, and Node. JavaScript code linter. Patterns is a JavaScript API for rendering interactive 3D and 2D graphics within any compatible web browser without the use of JavaScript for server-side Web applications.
                </Text>
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
              lang="typescript"
              source={require('raw!./assets/example.ts')}
            ></CodePane>
          </Slide>
          <Slide>
            <Text>Some text that das inline <Code>code</Code>!</Text>
            <Text>This is another piece of inline code <Code>global</Code>!</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

// import React from 'react';
import { render } from 'react-dom';

render(<Presentation/>, document.getElementById('root'));