import React, { useState } from 'react';
import Navigation from './Navigation';
import HomePage from './HomePage';
import SizingPage from './SizingPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedEvtol, setSelectedEvtol] = useState('');
  const [formData, setFormData] = useState({});

  const resetForm = () => {
    setFormData({});
    setSelectedEvtol('');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />
      
      {currentPage === 'home' ? (
        <HomePage setCurrentPage={setCurrentPage} />
      ) : (
        <SizingPage 
          selectedEvtol={selectedEvtol}
          setSelectedEvtol={setSelectedEvtol}
          formData={formData}
          setFormData={setFormData}
          resetForm={resetForm}
        />
      )}
    </div>
  );
};

export default App;