import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6194c9',
    },
    secondary: {
      main: '#9a59c1',
    },
    text: {
      primary: '#333333', // A dark gray for body text
      secondary: '#666666', // A light gray for secondary text
    },
    background: {
      default: '#f5f5f5', // A light gray for the background
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#4caf50',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd',
    },
  },
});



export { theme, darkTheme};
