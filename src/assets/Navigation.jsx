import React, { useState } from 'react';
import { Plane, Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Plane className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">eVTOL Sizing Platform</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'home' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('sizing')}
              className={`text-sm font-medium transition-colors duration-200 ${
                currentPage === 'sizing' ? 'text-blue-400' : 'text-gray-300 hover:text-white'
              }`}
            >
              Sizing Calculator
            </button>
            <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Documentation
            </button>
            <button className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200">
              Support
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700 border-t border-gray-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setCurrentPage('sizing');
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded transition-colors duration-200"
              >
                Sizing Calculator
              </button>
              <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded transition-colors duration-200">
                Documentation
              </button>
              <button className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded transition-colors duration-200">
                Support
              </button>
              <button className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded transition-colors duration-200">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;