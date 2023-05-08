import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };

  const handleMenuClose = () => {
    setIsOpen(false);
  };

  const isSmallScreen = 'sm';

  return (
    <>
      <header>
        <nav className= "bg-slate-800 border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <button
                  onClick={handleMenuOpen}
                  className="text-white hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                >
                  <MenuIcon className="h-6 w-6" />
                </button>
                <Link
                  to="/"
                  className="ml-4 text-2xl font-bold text-white hover:text-gray-500"
                >
                  Applied AI
                </Link>
              </div>
              <div className="hidden sm:flex sm:space-x-4">
                {!isSmallScreen && (
                  <>
                    <Link
                      to="/about"
                      className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md font-medium"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="text-gray-800 hover:text-gray-700 px-3 py-2 rounded-md font-medium"
                    >
                      Contact
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          <Transition
            show={isOpen}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            {(ref) => (
              <div
                ref={ref}
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <Link
                        to="/"
                        className="text-2xl font-bold text-gray-800 hover:text-gray-700"
                      >
                        Applied AI
                      </Link>
                    </div>
                    <div className="mr-2">
                      <button
                        onClick={handleMenuClose}
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                      >
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1"
                  >
                    <Link
                      to="/about"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        </nav>
      </header>
    </>
  );
};

export default Header;
