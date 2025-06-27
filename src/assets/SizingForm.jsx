import React from 'react';
import { Calculator, Zap, Wind, Plane } from 'lucide-react';
import { formFields } from './formFields';

const SizingForm = ({ selectedEvtol, formData, setFormData, resetForm }) => {
  const [data, setData] = React.useState({});
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const evtolTypes = [
    { id: 'multirotor', name: 'Multirotor', icon: <Wind className="w-6 h-6" /> },
    { id: 'tiltwing', name: 'Tilt-Wing', icon: <Plane className="w-6 h-6" /> },
    { id: 'tiltrotor', name: 'Tilt-Rotor', icon: <Zap className="w-6 h-6" /> },
    { id: 'compound', name: 'Compound Helicopter', icon: <Calculator className="w-6 h-6" /> }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    const requiredFields = formFields[selectedEvtol].filter(field => field.required);
    const missingFields = requiredFields.filter(field => !formData[field.name]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.map(f => f.label).join(', ')}`);
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      const response = await fetch("http://localhost:8000/api/size/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          no_of_rotor: parseInt(formData.no_of_rotor),
          blade_options: formData.blade_options
            ? formData.blade_options.split(',').map(n => parseInt(n.trim()))
            : [3, 4, 6],
          config_type: selectedEvtol,
        }),
      });

      const result = await response.json();
      console.log("✅ Received Results from Backend:", result);

      setMessage(result.message || '');

      if (result.results && result.results.length > 0) {
        setData(result.results[0]);
      } else {
        setData({});
        alert("⚠️ No results returned from server.");
      }
    } catch (error) {
      console.error("❌ Error submitting to backend:", error);
      alert("❌ Something went wrong while calculating.");
    }
    setLoading(false);
  };

  const clearForm = () => {
    setFormData({});
    setData({});
    setMessage('');
  };

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
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
            >
              Change Type
            </button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formFields[selectedEvtol].map((field) => (
              <div key={field.name} className={field.type === 'slider' ? 'md:col-span-2 lg:col-span-3' : ''}>
                <label className="block text-md font-medium text-gray-300 mb-2">
                  
                  {field.label} {field.required && <span className="text-red-400">*</span>}
                   <h1 className='flex justify-between text-sm text-[#7c89a3] '>{field.min?`Range from ${field.min} to ${field.max}`: 'No range specified'}</h1>
                  {field.type === 'slider' && (
                    <input
                      className="text-blue-400 ml-2 font-mono text-xs"
                      type='number'
                      min={field.min}
                      max={field.max}
                      value={formData[field.name] || field.min}
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
                      value={formData[field.name] || field.min}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #2563eb 0%, #2563eb ${((formData[field.name] || field.min) - field.min) / (field.max - field.min) * 100}%, #4b5563 ${((formData[field.name] || field.min) - field.min) / (field.max - field.min) * 100}%, #4b5563 100%)`
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
                    value={formData[field.name] || ''}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg"
              >
                {loading ? "Calculating..." : "Calculate Sizing Parameters"}
              </button>
              <button
                onClick={clearForm}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
              >
                Clear All Fields
              </button>
            </div>
          </div>

          {message && (
            <p className="text-green-400 text-sm mt-4">✅ {message}</p>
          )}

          {Object.keys(data).length > 0 && (
            <div className="pt-6 border-t border-gray-700 space-y-4">
              <h3 className="text-lg font-semibold text-gray-300">Calculated Sizing Parameters</h3>

              <div className="bg-gray-900 rounded-lg p-4 space-y-4">
                {Object.entries(data).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between text-sm text-gray-300 border-b border-gray-700 py-1"
                  >
                    <span className="text-gray-400">{key}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SizingForm;
