import 'normalize.css';
import 'prismjs/components/prism-core';

import './index.css';
import './syntax/nova.css';
import screen from './screen';
import print from 'spectacle/lib/themes/default/print';

/**
 * Load a language syntax extension to use with PrismJS.
 */
require('prismjs/components/prism-clike');
require('./syntax/prism-javascript.nova');
require('./syntax/prism-typescript.nova');

/**
 * Create the theme.
 */
const createTheme = (name) => ({
  screen: screen(name),
  print: print()
});

export default createTheme;