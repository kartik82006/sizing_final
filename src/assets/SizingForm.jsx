import React, { useEffect, useState } from 'react';
import { Calculator, Zap, Wind, Plane } from 'lucide-react';
import axios from 'axios';

const SizingForm = ({ selectedEvtol, formData, setFormData, resetForm }) => {
  

  const [formFields, setFormFields] = useState(null);
  const [loadingFields, setLoadingFields] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFormFields = async () => {
      setLoadingFields(true);
      setError(null);
      try {
        // Use full backend URL here
        const response = await axios.get('http://localhost:3000/type/formFields');
        setFormFields(response.data);
      } catch (err) {
        console.error("Error fetching form fields:", err);
        setError('Failed to load form fields.');
      } finally {
        setLoadingFields(false);
      }
    };

    fetchFormFields();
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    if (!formFields || !formFields[selectedEvtol]) {
      alert('Form fields not loaded yet.');
      return;
    }

    const requiredFields = formFields[selectedEvtol].filter(field => field.required);
    const missingFields = requiredFields.filter(field => !formData[field.name]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.map(f => f.label).join(', ')}`);
      return;
    }

    console.log('Form submitted:', formData);
    alert('Sizing calculation submitted! (In a real application, this would process the data)');
    
  };

  const clearForm = () => {
    setFormData({});
  };

  if (loadingFields) return <div className="text-white text-center mt-10">Loading form fields...</div>;
  if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;
  if (!formFields || !formFields[selectedEvtol]) return <div className="text-white text-center mt-10">No form fields found for selected eVTOL type.</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-gray-800 border border-gray-700 rounded-lg">
        <div className="border-b border-gray-700 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-blue-400 mr-3">
                {evtolTypes.find(t => t.id === selectedEvtol)?.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">
                  {evtolTypes.find(t => t.id === selectedEvtol)?.name} Configuration
                </h2>
                <p className="text-gray-400 mt-1">Input design parameters for sizing analysis</p>
              </div>
            </div>
            <button
              onClick={resetForm}
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Change Type
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formFields[selectedEvtol].map((field) => (
                <div key={field.name} className={field.type === 'slider' ? 'md:col-span-2 lg:col-span-3' : ''}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                    {field.type === 'slider' && (
                      <input
                        className="text-blue-400 ml-2 font-mono text-xs"
                        type='number'
                        min={field.min}
                        max={field.max}
                        value={formData[field.name] ?? field.min}
                        onChange={(e) => handleInputChange(field.name, parseInt(e.target.value, 10))}
                      />
                    )}
                  </label>

                  {field.type === 'slider' ? (
                    <div className="space-y-3">
                      <input
                        type="range"
                        min={field.min}
                        max={field.max}
                        step={field.step}
                        value={formData[field.name] ?? field.min}
                        onChange={(e) => handleInputChange(field.name, parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((formData[field.name] ?? field.min) - field.min) / (field.max - field.min) * 100}%, #4b5563 ${((formData[field.name] ?? field.min) - field.min) / (field.max - field.min) * 100}%, #4b5563 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>{field.min}</span>
                        <span className="text-gray-300">Typical Range: 200-500 N/m²</span>
                        <span>{field.max}</span>
                      </div>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      step={field.step}
                      value={formData[field.name] ?? ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Calculate Sizing Parameters
                </button>
                <button
                  onClick={clearForm}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  Clear All Fields
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SizingForm;
