import React from 'react';
import IconButton from '@mui/material/IconButton';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
      <IconButton
        href="https://twitter.com/"
        target="_blank"
        rel="noopener"
        aria-label="Twitter"
        sx={{ mr: 2 }}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        sx={{ mr: 2 }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="mailto:info@mycompany.com"
        aria-label="Email"
        sx={{ mr: 2 }}
      >
        <EmailIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;
