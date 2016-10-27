import './font.css';
import hexRgb from 'hex-rgb';
import { ansiGroups, uiGroups } from 'nova-colors';


export const COLOR_THEME = {
  'nova': {
    text: ansiGroups.bright.white, /** want more contrast :-x */
    heading: ansiGroups.normal.cyan,
    highlight: ansiGroups.normal.yellow,
    background: ansiGroups.normal.black
  },
  'default': {
    text: ansiGroups.normal.black,
    heading: ansiGroups.normal.blue,
    highlight: ansiGroups.normal.cyan,
    background: uiGroups.gray6 //'#d5e0e6'
  }
}


export const getColorTheme = (name) => {
  let theme = COLOR_THEME[name];
  if (theme) { return theme; }
  return COLOR_THEME['default'];
}


const screen = (color_theme) => {
  const color = getColorTheme(color_theme);
  const fonts = {
    body: `'Open Sans', sans-serif`,
    header: `Montserrat, sans-serif`,
    code: `'Fira Mono', monospace`
  };

  // Base Style for all Headers
  const header = style => Object.assign({}, {
    fontFamily: fonts.header,
    fontWeight: 700,
    color: color.heading,
    lineHeight: 1,
    margin: '0.5rem auto'
  }, style);

  return {
    colors: color,
    fonts,

    // Global CSS
    // ---------------
    global: {
      body: {
        background: color.background,
        color: color.text,
        fontFamily: fonts.body,
        fontSize: '100%',
        overflow: 'hidden'
      },
      'html, body': {
        height: '100%'
      },
      '*': {
        boxSizing: 'border-box'
      }
    },

    // Presentation Components
    // ---------------
    components: {
      blockquote: {
        display: 'inline-block',
        textAlign: 'left',
        position: 'relative',
        margin: 0,
        padding: '1.2rem 0 1.2rem 2rem',
        borderLeft: `6px double ${color.highlight}`,
      },
      quote: {
        display: 'block',
        fontSize: '4rem',
        fontWeight: 'bold',
        lineHeight: 1.1
      },
      cite: {
        display: 'block',
        marginTop: '2.5rem',
        fontSize: '1.5rem',
        opacity: 0.6
      },
      content: {
        margin: '0 auto',
        textAlign: 'center'
      },
      heading: {
        h1: header({
          fontSize: '7rem'
        }),
        h2: header({
          fontSize: '5rem'
        }),
        h3: header({
          fontSize: '2rem',
          color: color.text
        }),
        h4: header({
          color: color.text
        }),
        link: {
          textDecoration: 'none'
        }
      },
      text: {
        fontSize: '1.75rem',
        margin: '0 auto 0.5rem'
      },
      s: {
        strikethrough: {},
      },
      link: {
        display: 'inline-block',
        color: color.text,
        textDecoration: 'none',
        marginBottom: '-2px',
        borderBottom: `2px solid rgba(${hexRgb(color.heading)}, 0.3)`,
        ':hover': {
          color: color.heading
        }
      },
      listItem: {
        fontSize: '2rem',
        padding: '0.25em 0'
      },
      list: {
        textAlign: 'left',
        padding: '0 0 0 3rem'
      },
      image: {
        display: 'block',
        margin: '0.5rem auto'
      },
      code: {
        display: 'inline-block',
        color: uiGroups.gray5,
        fontFamily: fonts.code,
        fontSize: '90%',
        lineHeight: 1,
        background: uiGroups.gray2,
        padding: '6px 5px 3px',
        borderRadius: '2px'
      },
      codePane: {
        pre: {},
        code: {}
      }
    },

    // Controls (-> none)
    // ---------------
    controls: {
      prev: {
        display: 'none'
      },
      next: {
        display: 'none'
      }
    }
  };
};

export default screen;