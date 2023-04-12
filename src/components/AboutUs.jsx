import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h3 className="text-3xl font-bold text-center pb-4">About Us</h3>
        <p className="text-lg pb-4">
          Our team is dedicated to helping businesses upskill with AI tools. We believe that AI can greatly improve efficiency and productivity in many industries, and we want to make these benefits accessible to all. With our expertise and passion for AI, we can provide the resources and guidance needed to help businesses thrive in today's fast-paced digital landscape.
        </p>
        <h4 className="text-2xl font-bold pb-2">Our Team</h4>
        <ul className="list-disc pl-4">
          <li className="text-lg">John Doe - CEO</li>
          <li className="text-lg">Jane Smith - CTO</li>
          <li className="text-lg">Mark Johnson - Senior Developer</li>
          <li className="text-lg">Sara Lee - Marketing Manager</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
