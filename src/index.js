import React from 'react';
import { render } from 'react-dom';
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Table,
  TableItem,
  TableHeaderItem,
  TableRow,
  Text
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from './theme/theme';


// Re-export for easy access
export {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  List,
  ListItem,
  Markdown,
  Quote,
  S,
  Slide,
  Table,
  TableItem,
  TableHeaderItem,
  TableRow,
  Text
};


// Base presentation component
export const Presentation = ({ children, theme = 'nova', images = {} }) => {
  preloader(images)
  return (
    <Spectacle theme={createTheme(theme)}>
      <Deck progress="none" transition={['fade']} transitionDuration={200}>
        {children}
      </Deck>
    </Spectacle>
  );
};


// ...lazy
const renderPresentation = Root => render(<Root />, document.getElementById('root'));
export default renderPresentation;