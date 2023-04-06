import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  hero: {
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    backgroundImage: 'url(/images/hero-background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '2.5rem'
    }
  },
  heroDescription: {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  },
  heroButton: {
    fontSize: '1.2rem',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <section className={classes.hero}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" className={classes.heroTitle}>
            Welcome to My Brand Name
          </Typography>
          <Typography variant="h3" className={classes.heroDescription}>
            We offer the best products and services to our customers.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
};

export default Hero;
