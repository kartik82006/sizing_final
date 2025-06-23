export const formFields = {
  multirotor: [
    { name: 'grossWeight', label: 'Gross Weight (kg)', type: 'number', required: true },
    { name: 'payloadWeight', label: 'Payload Weight (kg)', type: 'number', required: true },
    { name: 'batteryCapacity', label: 'Battery Capacity (kWh)', type: 'number', required: true },
    { name: 'numberOfRotors', label: 'Number of Rotors', type: 'number', required: true },
    { name: 'rotorDiameter', label: 'Rotor Diameter (m)', type: 'number', step: '0.1', required: true },
    { name: 'cruiseSpeed', label: 'Cruise Speed (m/s)', type: 'number', required: true },
    { name: 'stallSpeed', label: 'Stall Speed (m/s)', type: 'number', required: true },
    { name: 'range', label: 'Range (km)', type: 'number', required: true },
    { name: 'aspectRatio', label: 'Wing Aspect Ratio', type: 'number', step: '0.1', required: false }
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