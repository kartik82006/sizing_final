export const formFields = {
  multirotor: [
  { name: 'no_of_rotor', label: 'Number of Rotors', type: 'number', required: true },
  { name: 'blade_options', label: 'Blade Options (comma-separated)', type: 'text', required: true },
  { name: 'disk_loading', label: 'Disk Loading (kg/m²)', type: 'number', required: true },
  { name: 'gtow', label: 'Gross Takeoff Weight (kg)', type: 'number', required: true },
  { name: 'solidity', label: 'Solidity', type: 'number', step: '0.01', required: true },
  { name: 'power_factor', label: 'Power Factor', type: 'number', step: '0.01', required: true },
  { name: 'interference_coefficient', label: 'Interference Coefficient', type: 'number', step: '0.01', required: true },
  { name: 'drag_area', label: 'Drag Area (m²)', type: 'number', step: '0.01', required: true },
  { name: 'cl', label: 'Lift Coefficient (Cl)', type: 'number', step: '0.01', required: true },
  { name: 'cd', label: 'Drag Coefficient (Cd)', type: 'number', step: '0.01', required: true },
  { name: 'cd_profile', label: 'Profile Drag Coefficient (Cdₚ)', type: 'number', step: '0.001', required: true },
  { name: 'ct', label: 'Thrust Coefficient (Ct)', type: 'number', step: '0.001', required: true },
  { name: 'cp', label: 'Power Coefficient (Cp)', type: 'number', step: '0.001', required: true },
  { name: 'induced_power_factor', label: 'Induced Power Factor', type: 'number', step: '0.01', required: true },
  { name: 'v_hover', label: 'Hover Velocity (m/s)', type: 'number', step: '0.1', required: true },
  { name: 'rate_of_climb', label: 'Rate of Climb (m/s)', type: 'number', step: '0.1', required: true },
  { name: 'v_tip', label: 'Tip Velocity (m/s)', type: 'number', required: true },
  { name: 'rho', label: 'Air Density (kg/m³)', type: 'number', step: '0.001', required: true }
],

  tiltrotor: [
    { name: 'grossWeight', label: 'Gross Weight (kg)', type: 'number', required: true },
    { name: 'payloadWeight', label: 'Payload Weight (kg)', type: 'number', required: true },
    { name: 'batteryCapacity', label: 'Battery Capacity (kWh)', type: 'number', required: true },
    { name: 'rotorDiameter', label: 'Rotor Diameter (m)', type: 'number', step: '0.1', required: true },
    { name: 'numberOfRotors', label: 'Number of Rotors', type: 'number', required: true },
    { name: 'wingSpan', label: 'Wing Span (m)', type: 'number', step: '0.1', required: true },
    { name: 'wingArea', label: 'Wing Area (m²)', type: 'number', step: '0.1', required: true },
    { name: 'cruiseSpeed', label: 'Cruise Speed (m/s)', type: 'number', required: true },
    { name: 'hoverTime', label: 'Hover Time (minutes)', type: 'number', required: true },
    { name: 'range', label: 'Range (km)', type: 'number', required: true },
    { name: 'diskLoading', label: 'Disk Loading (N/m²)', type: 'slider', min: 50, max: 1000, step: 10, required: false }
  ],
  compound: [
    { name: 'grossWeight', label: 'Gross Weight (kg)', type: 'number', required: true },
    { name: 'payloadWeight', label: 'Payload Weight (kg)', type: 'number', required: true },
    { name: 'batteryCapacity', label: 'Battery Capacity (kWh)', type: 'number', required: true },
    { name: 'mainRotorDiameter', label: 'Main Rotor Diameter (m)', type: 'number', step: '0.1', required: true },
    { name: 'auxPropDiameter', label: 'Auxiliary Propeller Diameter (m)', type: 'number', step: '0.1', required: true },
    { name: 'wingSpan', label: 'Wing Span (m)', type: 'number', step: '0.1', required: true },
    { name: 'wingArea', label: 'Wing Area (m²)', type: 'number', step: '0.1', required: true },
    { name: 'cruiseSpeed', label: 'Cruise Speed (m/s)', type: 'number', required: true },
    { name: 'hoverTime', label: 'Hover Time (minutes)', type: 'number', required: true },
    { name: 'range', label: 'Range (km)', type: 'number', required: true },
    { name: 'auxPropCount', label: 'Number of Auxiliary Propellers', type: 'number', required: false }
  ],
  tiltwing: [
    { name: 'grossWeight', label: 'Gross Weight (kg)', type: 'number', required: true },
    { name: 'payloadWeight', label: 'Payload Weight (kg)', type: 'number', required: true },
    { name: 'batteryCapacity', label: 'Battery Capacity (kWh)', type: 'number', required: true },
    { name: 'wingSpan', label: 'Wing Span (m)', type: 'number', step: '0.1', required: true },
    { name: 'wingArea', label: 'Wing Area (m²)', type: 'number', step: '0.1', required: true },
    { name: 'propellerDiameter', label: 'Propeller Diameter (m)', type: 'number', step: '0.1', required: true },
    { name: 'numberOfPropellers', label: 'Number of Propellers', type: 'number', required: true },
    { name: 'cruiseSpeed', label: 'Cruise Speed (m/s)', type: 'number', required: true },
    { name: 'hoverTime', label: 'Hover Time (minutes)', type: 'number', required: true },
    { name: 'range', label: 'Range (km)', type: 'number', required: true },
    { name: 'diskLoading', label: 'Disk Loading (N/m²)', type: 'slider', min: 50, max: 1000, step: 10, required: false }
  ]
};