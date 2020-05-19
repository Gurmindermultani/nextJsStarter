import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Open Sans",sans-serif',
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
