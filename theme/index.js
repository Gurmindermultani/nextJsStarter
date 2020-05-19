import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
  breakpoints: ['576px', '992px', '1000px'],
  typography: {
    'h1': {
      fontSizes: [30, 34, 40],
			fontWeight: '600',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'h2': {
      fontSizes: [24, 28, 32],
      fontWeight: '600',
			fontFamily: 'Poppins',
      color: 'primaryText',
		},
		'h3': {
      fontSizes: [26, 20, 20],
      fontWeight: '600',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'h4': {
      fontSizes: [22, 18, 18],
      fontWeight: '600',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'h5': {
      fontSizes: [18, 16, 16],
      fontWeight: '600',
			fontFamily: 'Poppins',
      color: 'primaryText',
		},
		'h6': {
      fontSizes: [16, 14, 14],
      fontWeight: '600',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'subHeading': {
      fontSizes: [20, 14, 14],
      fontWeight: '400',
			fontFamily: 'Open Sans',
      color: 'secondaryText',
    },
    'caption': {
      fontSizes: [11, 10, 10],
      fontWeight: '600',
			fontFamily: 'Open Sans',
      color: 'secondaryText',
    },
    'tags': {
      fontSizes: [13, 13, 13],
      fontWeight: '500',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'button': {
      fontSizes: [12, 14, 16],
      fontWeight: '500',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'textLink': {
      fontSizes: [14, 12, 12],
      fontWeight: '500',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'paragraph1': {
      fontSizes: [14, 14, 14],
      fontWeight: '400',
			fontFamily: 'Open Sans',
      color: 'secondaryText',
    },
    'paragraph2': {
      fontSizes: [14, 14, 14],
      fontWeight: '400',
			fontFamily: 'Poppins',
      color: 'secondaryText',
    },
    'paragraphM1': {
      fontSizes: [13, 13, 13],
      fontWeight: '400',
			fontFamily: 'Open Sans',
      color: 'secondaryText',
    },
    'paragraphM2': {
      fontSizes: [13, 13, 13],
      fontWeight: '400',
			fontFamily: 'Poppins',
      color: 'secondaryText',
    },
    'paragraphS1': {
      fontSizes: [12, 12, 12],
      fontWeight: '500',
			fontFamily: 'Open Sans',
      color: 'primaryText',
    },
    'paragraphS2': {
      fontSizes: [12, 12, 12],
      fontWeight: '400',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
    'highlight1': {
      fontSizes: [10, 10, 10],
      fontWeight: '600',
			fontFamily: 'Open Sans',
      color: 'primaryText',
    },
    'highlight2': {
      fontSizes: [10, 10, 10],
      fontWeight: '400',
			fontFamily: 'Poppins',
      color: 'primaryText',
    },
  },
  palette: {
    white: "#fff",
    black: "#000",
    smoke : "#F6F6F6",
    hover: "#eeeeee",
    primary: {
      light: '#E7F1FD',
      main: '#0f72ee',
      dark: "#195fcb",
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#a3e1db',
      main: '#39a3a5',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    text: {
      primary: '#212121',
      secondary: '#616161',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    accent: {
      main : '#304ffe',
      error: "#ff5252",
      success: "#39B54A",
      warning: "#FF9900",
      grey: "#39a3a5",
    },
    border : {
      main: '#9e9e9e',
      light: '#f6f6f6',
    }
    // error: will use the default color
  },
});
