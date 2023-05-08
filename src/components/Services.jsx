import React from 'react';
import { Container } from 'react-bootstrap'; // Assuming you are using Bootstrap for layout

const Services = () => {
  return (
    <>
      <Container maxWidth="md" className="flex flex-col items-center">
        <h4 className="text-2xl font-bold mt-4 mb-4 text-center">
          Our Services
        </h4>
        <ul className="mb-4">
          <li className="list-none p-0">
            <h5 className="text-lg font-semibold">
              AI Toolset Training
            </h5>
            <p className="text-gray-500">
              Learn how to use our AI tools to maximize their potential.
            </p>
          </li>
          <li className="list-none p-0">
            <h5 className="text-lg font-semibold">
              AI Toolset Consultation
            </h5>
            <p className="text-gray-500">
              Get expert advice and guidance on how to use our AI tools.
            </p>
          </li>
          <li className="list-none p-0">
            <h5 className="text-lg font-semibold">
              AI Tool Creation
            </h5>
            <p className="text-gray-500">
              We can create custom AI tools to meet your specific needs.
            </p>
          </li>
        </ul>
        <p className="text-base text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut tellus luctus, ornare felis ac, dictum magna. Nunc posuere, nisl nec posuere commodo, dolor odio consectetur nisl, nec sagittis libero sapien non nunc. Donec euismod velit non nunc vehicula posuere. Etiam semper luctus sapien vel euismod. Sed malesuada est in purus tempor, eget commodo nisl euismod. Nam luctus risus ut erat aliquet laoreet.
        </p>
      </Container>
    </>
  );
};

export default Services;
