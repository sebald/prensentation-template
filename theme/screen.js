import './font.css';
import hexRgb from 'hex-rgb';

export const COLOR_THEME = {
  'purple rain': {
    text: '#3F1263',
    heading: '#986EAD',
    highlight: '#D8CBBB',
    background: '#F2F2F2'
  },
  'autumn': {
    text: '#392F2F',
    heading: '#3A7563',
    highlight: '#59A985',
    background: '#E6D3A7'
  },
  'bam': {
    text: '#58828B',
    heading: '#5E9387',
    highlight: '#C8E29D',
    background: '#F2F299'
  },
  'cold': {
    text: '#00334E',
    heading: '#145374',
    highlight: '#5588A3',
    background: '#E8E8E8'
  },
  'nova': {
    text: '#e6eef3',
    heading: '#7fc1ca',
    highlight: '#dada93',
    background: '#3c4c55'
  },
  'default': {
    text: '#1e272c',
    heading: '#4d8fb5',
    highlight: '#4aa6b3',
    background: '#d5e0e6'
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
    header: 'Montserrat, sans-serif'
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
        fontSize: '150%',
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
        fontSize: '2.25rem',
        margin: '0.25rem auto'
      },
      link: {
        display: 'inline-block',
        color: color.text,
        textDecoration: 'none',
        paddingBottom: '3px',
        borderBottom: `2px solid rgba(${hexRgb(color.heading)}, 0.3)`,
        ':hover': {
          color: color.heading
        }
      },
      listItem: {
        fontSize: '2.66rem',
        padding: '0.175rem 0'
      },
      list: {
        textAlign: 'left',
        padding: '0 0 0 3rem'
      },
      image: {
        display: 'block',
        margin: '0.5rem auto'
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