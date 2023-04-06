import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {theme, darkTheme} from '../styling/theme';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={{ ...theme, palette: { ...theme.palette, mode: isDarkMode ? 'dark' : 'light' } }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Applied AI
            </Link>
          </Typography>
          <Button component={Link} to="/about" color="inherit" sx={{ mr: 2 }}>
            About Us
          </Button>
          <Button component={Link} to="/services" color="inherit" sx={{ mr: 2 }}>
            Our Services
          </Button>
          <Button component={Link} to="/contact" color="inherit" sx={{ mr: 2 }}>
            Contact Us
          </Button>
          <Switch checked={isDarkMode} onChange={toggleDarkMode} />
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
