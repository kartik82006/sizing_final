import React from 'react';
import EvtolTypeSelector from './EvtolTypeSelector';
import SizingForm from './SizingForm';

const SizingPage = ({ 
  selectedEvtol, 
  setSelectedEvtol, 
  formData, 
  setFormData, 
  resetForm 
}) => {
  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Aircraft Sizing Calculator</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select your eVTOL configuration and input the design parameters for comprehensive sizing analysis
          </p>
        </div>

        {!selectedEvtol ? (
          <EvtolTypeSelector 
            setSelectedEvtol={setSelectedEvtol} 
          />
        ) : (
          <SizingForm 
            selectedEvtol={selectedEvtol}
            formData={formData}
            setFormData={setFormData}
            resetForm={resetForm}
          />
        )}
      </div>
    </div>
  );
};

export default SizingPage;