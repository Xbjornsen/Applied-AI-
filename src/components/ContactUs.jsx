import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1" component="p">
            Email: example@domain.com
          </Typography>
          <Typography variant="body1" component="p">
            Phone: 123-456-7890
          </Typography>
          <Typography variant="body1" component="p">
            Address: 123 Main St, Anytown USA
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
