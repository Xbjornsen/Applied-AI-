import React from 'react';
import { FaTwitter, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="flex justify-center mt-4 fixed bottom-0 left-0 right-0 bg-white py-2">
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="mr-2">
        <FaTwitter className="text-gray-500 hover:text-blue-500 transition duration-200" size={24} />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-2">
        <FaLinkedin className="text-gray-500 hover:text-blue-500 transition duration-200" size={24} />
      </a>
      <a href="mailto:appliedai@gmail.com" className="mr-2">
        <FaMailBulk className="text-gray-500 hover:text-blue-500 transition duration-200" size={24} />
      </a>
    </div>
  );
};

export default Footer;
 