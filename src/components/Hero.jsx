import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-80vh bg-gray-100">
      <h2 className="text-4xl font-bold text-center">AI for Business</h2>
      <h5 className="text-xl text-center">Stay Ahead of the Game</h5>
      <p className="text-gray-500 text-center">
        Simplify your work processes with AI-powered tools and training.
      </p>
      <button
        className="mt-8 px-8 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 focus:outline-none"
        style={{ width: '100%', maxWidth: '250px' }}
        component={Link} 
        to="aitools"
      >
        Get Started
      </button>
    </div>
  );
};

export default Hero;
