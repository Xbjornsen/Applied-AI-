import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const Section = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f1f1f1', // A light gray color
});

const CallToAction = styled(Button)({
  margin: '2rem',
  backgroundColor: '#6fcf97', // A green color
  color: 'white',
  '&:hover': {
    backgroundColor: '#5bbf88', // A darker shade of green on hover
  },
});

const Hero = () => {
  return (
    <Section>
      <Typography variant="h1" textAlign="center">
        AI for Business
      </Typography>
      <Typography variant="h4" textAlign="center">
      Stay Ahead of the Game
      </Typography>
      <Typography variant="subtitle1" textAlign="center" color="text.secondary">
        Simplify your work processes with AI-powered tools and training.
      </Typography>
      <CallToAction component={Link} to='aitools' variant="contained">Get Started</CallToAction>
    </Section>
  );
};

export default Hero;
