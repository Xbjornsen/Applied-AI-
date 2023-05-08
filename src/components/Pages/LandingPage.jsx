import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features';
import TestimonialsSection from './Testimonals';
import heroImage from '../../images/hero.jpg';
// import code from '../../images/code.jpg';
import consulation from '../../images/consulation.jpeg';
import aiIcon from '../../images/hero.jpg';
import neuralNetworkIcon from '../../images/aiIcon.jpeg';
import machineLearningIcon from '../../images/machineLearning.jpeg';
import dataVisualizationIcon from '../../images/dataVisualization.jpeg';

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block">AI for Business</span>
              <span className="block">Stay Ahead of the Game</span>
            </h1>
            <p className="mt-3 text-lg text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Simplify your work processes with AI-powered tools and training.
            </p>
            <div className="mt-10">
              <Link
                className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-slate-400 hover:bg-slate-600 hover:text-slate-400"
                to="/aitools"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white flex justify-center  rounded-md">
          <div className="flex items-center justify-center mr-8">
            <img src={aiIcon} alt="AI Icon" className="h-8 w-8 mr-2" />
            <span>AI-Powered-Chatbots</span>
          </div>
          <div className="flex items-center justify-center mr-8">
            <img src={neuralNetworkIcon} alt="Neural Network Icon" className="h-8 w-8 mr-2" />
            <span>Vector Databases</span>
          </div>
          <div className="flex items-center justify-center mr-8">
            <img src={machineLearningIcon} alt="Machine Learning Icon" className="h-8 w-8 mr-2" />
            <span>Large Language Models</span>
          </div>
          <div className="flex items-center justify-center rounded-md">
            <img src={dataVisualizationIcon} alt="Data Visualization Icon" className="h-8 w-8 mr-2" />
            <span>Data Visualization</span>
          </div>
        </div>
      </div>
      <Features />
      <TestimonialsSection />
      {/* CTA Section */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover filter brightness-75" style={{ backgroundImage: `url(${consulation})` }}>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
              <span className="block">Book now for a consultation</span>
            </h2>
            <Link
              className="mt-8 inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-black-500 bg-white hover:bg-green-50 sm:text-lg"
              to="/contact"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
