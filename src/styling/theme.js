import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00c5ff',
    },
    secondary: {
      main: '#c5c5c5',
    },
    background: {
      default: '#f2f2f2',
    },
    text: {
      primary: '#333',
      secondary: '#666',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

// define a dark theme
const darkTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00c5ff',
    },
    secondary: {
      main: '#c5c5c5',
    },
    background: {
      default: '#333',
      paper: '#444',
    },
    text: {
      primary: '#fff',
      secondary: '#c5c5c5',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

export { theme, darkTheme };
