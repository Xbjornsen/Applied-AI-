import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const AboutUs = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={10} md={8} lg={6}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Our team is dedicated to helping businesses upskill with AI tools. We believe that AI can greatly improve efficiency and productivity in many industries, and we want to make these benefits accessible to all. With our expertise and passion for AI, we can provide the resources and guidance needed to help businesses thrive in today's fast-paced digital landscape.
        </Typography>
        <Typography variant="h4" gutterBottom>
          Our Team
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">John Doe - CEO</Typography>
          </li>
          <li>
            <Typography variant="body1">Jane Smith - CTO</Typography>
          </li>
          <li>
            <Typography variant="body1">Mark Johnson - Senior Developer</Typography>
          </li>
          <li>
            <Typography variant="body1">Sara Lee - Marketing Manager</Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default AboutUs;
