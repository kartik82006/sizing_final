import React from 'react';
import { Calculator, Zap, Wind, Plane } from 'lucide-react';

const EvtolTypeSelector = ({ setSelectedEvtol }) => {
  const evtolTypes = [
    {
      id: 'multirotor',
      name: 'Multirotor',
      description: 'Multiple rotors for vertical takeoff and landing',
      icon: <Wind className="w-6 h-6" />
    },
    {
      id: 'tiltwing',
      name: 'Tilt-Wing',
      description: 'Wings that rotate for vertical and horizontal flight',
      icon: <Plane className="w-6 h-6" />
    },
    {
      id: 'tiltrotor',
      name: 'Tilt-Rotor',
      description: 'Rotors that tilt for efficient forward flight',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'compound',
      name: 'Compound Helicopter',
      description: 'Traditional helicopter with additional propulsion',
      icon: <Calculator className="w-6 h-6" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-white mb-2 text-center">Select Aircraft Configuration</h2>
        <p className="text-gray-400 text-center">Choose the eVTOL type that matches your design requirements</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {evtolTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedEvtol(type.id)}
            className="bg-gray-800 border border-gray-700 rounded-lg p-8 hover:bg-gray-700 hover:border-gray-600 transition-all duration-200 text-left group"
          >
            <div className="flex items-center mb-4">
              <div className="text-blue-400 mr-4 group-hover:text-blue-300">
                {type.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">{type.name}</h3>
            </div>
            <p className="text-gray-400 group-hover:text-gray-300">{type.description}</p>
            <div className="mt-4 text-blue-400 text-sm font-medium">Configure Parameters →</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EvtolTypeSelector;