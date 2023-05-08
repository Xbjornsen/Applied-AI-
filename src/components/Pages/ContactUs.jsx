import React, { useState } from 'react';
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
    <div className="flex justify-center mt-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-400 p-2 rounded-md focus:outline-none"
                {...register('name', { required: 'Please enter your name' })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-400 p-2 rounded-md focus:outline-none"
                {...register('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-1">
                Message
              </label>
              <textarea
                id="message"
                className="w-full border border-gray-400 p-2 rounded-md focus:outline-none resize-none h-24"
                {...register('message', { required: 'Please enter a message' })}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
          {showSuccessMessage && (
            <div className="mt-4">
              <div className="bg-green-100 border border-green-300 text-green-800 px-4 py-3 rounded-md">
                Thank you for contacting us! Your message has been successfully submitted.
              </div>
            </div>
          )}
      </div>
    </div>
    </div >
  );
};

export default ContactUs;