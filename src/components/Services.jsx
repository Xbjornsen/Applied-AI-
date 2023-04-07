import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import {theme} from '../styling/theme';

const Services = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" align="center" sx={{ mt: 4, mb: 4 }}>
          Our Services
        </Typography>
        <List sx={{ mb: 4 }}>
          <ListItem disablePadding>
            <ListItemText primary="AI Toolset Training" secondary="Learn how to use our AI tools to maximize their potential." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="AI Toolset Consultation" secondary="Get expert advice and guidance on how to use our AI tools." />
          </ListItem>
          <ListItem disablePadding>
            <ListItemText primary="AI Tool Creation" secondary="We can create custom AI tools to meet your specific needs." />
          </ListItem>
        </List>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus luctus, ornare felis ac, dictum magna. Nunc posuere, nisl nec posuere commodo, dolor odio consectetur nisl, nec sagittis libero sapien non nunc. Donec euismod velit non nunc vehicula posuere. Etiam semper luctus sapien vel euismod. Sed malesuada est in purus tempor, eget commodo nisl euismod. Nam luctus risus ut erat aliquet laoreet.
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default Services;
