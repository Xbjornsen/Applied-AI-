import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button, Alert } from '@mui/material';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onSubmit = async (data) => {
    const { name, email, message } = data;
    const content = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    try {
      await fetch('https://formspree.io/f/xjvpdngn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: content }),
      });

      setShowSuccessMessage(true);
      reset();
    } catch (error) {
      alert('There was an error submitting your message. Please try again later.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Contact Us
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Name"
              {...register('name', { required: 'Please enter your name' })}
              error={Boolean(errors.name)}
              helperText={errors.name?.message}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Email"
              {...register('email', {
                required: 'Please enter your email',
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: 'Please enter a valid email address',
                },
              })}
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Message"
              {...register('message', { required: 'Please enter a message' })}
              error={Boolean(errors.message)}
              helperText={errors.message?.message}
              margin="normal"
              multiline
              rows={4}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
          {showSuccessMessage && (
            <Alert severity="success" sx={{ mt: 2 }} onClose={() => setShowSuccessMessage(false)}>
              Thank you for your message!
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactUs;
