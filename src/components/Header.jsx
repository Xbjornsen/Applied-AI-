import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { theme, darkTheme} from '../styling/theme';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider
      theme={
        isDarkMode
          ? darkTheme : theme
      }
    >
      <AppBar position="static" color="primary">
        <Toolbar>
        <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'text.primary' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Applied AI
            </Link>
          </Typography>

          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem component={Link} to="/courses" onClick={handleMenuClose}>
              Courses
            </MenuItem>
            <MenuItem component={Link} to="/consultation" onClick={handleMenuClose}>
              Consultation
            </MenuItem>
            <MenuItem component={Link} to="/aitools" onClick={handleMenuClose}>
              AI Tools
            </MenuItem>
            <MenuItem component={Link} to="/quotes" onClick={handleMenuClose}>
              Quotes
            </MenuItem>
          </Menu>
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
