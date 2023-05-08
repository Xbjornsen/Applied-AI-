import React from 'react';

const Features = () => {
  return (
    <div className="bg-slate-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Features</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Feature Block 1 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            {/* <img src={featureImage1} alt="Feature 1" className="h-48 w-full object-cover" /> */}
            <div className="px-4 py-4">
              <h3 className="text-lg font-medium text-gray-900">Feature 1</h3>
              <p className="mt-2 text-base text-gray-500">Description of feature 1 goes here.</p>
            </div>
          </div>

          {/* Feature Block 2 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            {/* <img src={featureImage2} alt="Feature 2" className="h-48 w-full object-cover" /> */}
            <div className="px-4 py-4">
              <h3 className="text-lg font-medium text-gray-900">Feature 2</h3>
              <p className="mt-2 text-base text-gray-500">Description of feature 2 goes here.</p>
            </div>
          </div>

          {/* Feature Block 3 */}
          <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
            {/* <img src={featureImage3} alt="Feature 3" className="h-48 w-full object-cover" /> */}
            <div className="px-4 py-4">
              <h3 className="text-lg font-medium text-gray-900">Feature 3</h3>
              <p className="mt-2 text-base text-gray-500">Description of feature 3 goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
