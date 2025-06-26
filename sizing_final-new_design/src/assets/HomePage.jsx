import React from 'react';
import { Plane, Calculator, Zap, Wind, Target, Settings, BarChart3, FileText, Users, Shield } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => {
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
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
                <Plane className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
              eVTOL Aircraft Sizing Platform
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Professional computational tools for electric vertical takeoff and landing aircraft design. 
              Calculate optimal configurations, performance parameters, and sizing requirements with industry-standard precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setCurrentPage('sizing')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Start Analysis
              </button>
              <button className="border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* eVTOL Types Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Supported Aircraft Configurations</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our platform supports comprehensive analysis for all major eVTOL aircraft architectures
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evtolTypes.map((type) => (
              <div key={type.id} className="bg-gray-700 border border-gray-600 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-200">
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3">
                    {type.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{type.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Platform Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built with aerospace engineering precision and industry best practices
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Precision Engineering</h3>
              <p className="text-gray-400">Industry-standard algorithms and methodologies for accurate eVTOL sizing and performance analysis</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-lg mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Multi-Configuration Support</h3>
              <p className="text-gray-400">Comprehensive support for multirotor, tilt-wing, tilt-rotor, and compound helicopter designs</p>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced Analytics</h3>
              <p className="text-gray-400">Real-time calculations with detailed performance metrics and optimization recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Features */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Comprehensive Documentation</h4>
                <p className="text-gray-400 text-sm">Detailed technical documentation and methodology references for all calculations</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg">
                  <Shield className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Validated Algorithms</h4>
                <p className="text-gray-400 text-sm">All sizing methods are validated against established aerospace engineering principles</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-lg">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Professional Support</h4>
                <p className="text-gray-400 text-sm">Expert technical support and consultation services available for complex projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;