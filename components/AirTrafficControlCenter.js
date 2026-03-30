import React, { useState, useEffect } from 'react';
import { Plane, Radar, Radio, AlertTriangle, MapPin, Clock, Activity, Target, Gauge, Layers, Zap, Eye } from 'lucide-react';

const AirTrafficControlCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [weatherConditions, setWeatherConditions] = useState({
    visibility: 10, // km
    windSpeed: 15, // knots
    windDirection: 270, // degrees
    ceiling: 2500, // feet
    temperature: 18, // celsius
    pressure: 1013.2, // hPa
    conditions: 'CLEAR'
  });

  const [runwayStatus, setRunwayStatus] = useState({
    '09L': { status: 'ACTIVE', traffic: 'ARRIVAL', nextSlot: '14:32' },
    '09R': { status: 'ACTIVE', traffic: 'DEPARTURE', nextSlot: '14:29' },
    '27L': { status: 'CLOSED', traffic: 'MAINTENANCE', nextSlot: '16:00' },
    '27R': { status: 'STANDBY', traffic: 'NONE', nextSlot: '--:--' }
  });

  const [aircraftTracking, setAircraftTracking] = useState([
    { 
      id: 'UAL123', 
      callsign: 'United 123', 
      type: 'B737', 
      altitude: 8500, 
      heading: 90, 
      speed: 280, 
      x: 45, 
      y: 32, 
      status: 'APPROACH',
      frequency: '124.35',
      squawk: '2341'
    },
    { 
      id: 'DAL456', 
      callsign: 'Delta 456', 
      type: 'A320', 
      altitude: 12000, 
      heading: 180, 
      speed: 420, 
      x: 78, 
      y: 45, 
      status: 'ENROUTE',
      frequency: '120.9',
      squawk: '1200'
    },
    { 
      id: 'AAL789', 
      callsign: 'American 789', 
      type: 'B777', 
      altitude: 2500, 
      heading: 270, 
      speed: 190, 
      x: 15, 
      y: 68, 
      status: 'DEPARTURE',
      frequency: '121.7',
      squawk: '0547'
    },
    { 
      id: 'SWA321', 
      callsign: 'Southwest 321', 
      type: 'B737', 
      altitude: 35000, 
      heading: 45, 
      speed: 480, 
      x: 89, 
      y: 12, 
      status: 'CRUISE',
      frequency: '127.8',
      squawk: '7634'
    }
  ]);

  const [systemAlerts, setSystemAlerts] = useState([
    { id: 1, level: 'CAUTION', message: 'Runway 27L maintenance in progress', time: '14:15', acknowledged: false },
    { id: 2, level: 'ADVISORY', message: 'Weather update: Wind shift to 280°', time: '14:22', acknowledged: true },
    { id: 3, level: 'WARNING', message: 'Aircraft UAL123 below glide path', time: '14:26', acknowledged: false }
  ]);

  const [controllerStations, setControllerStations] = useState({
    ground: { controller: 'ATC-G1', frequency: '121.9', active: true, traffic: 8 },
    tower: { controller: 'ATC-T1', frequency: '118.1', active: true, traffic: 12 },
    approach: { controller: 'ATC-A1', frequency: '124.35', active: true, traffic: 15 },
    departure: { controller: 'ATC-D1', frequency: '121.7', active: true, traffic: 9 }
  });

  const [systemMetrics, setSystemMetrics] = useState({
    radarRange: 60, // nautical miles
    primaryRadarStatus: 'OPERATIONAL',
    secondaryRadarStatus: 'OPERATIONAL',
    communicationsStatus: 'NORMAL',
    weatherRadarStatus: 'OPERATIONAL',
    navaidStatus: 'OPERATIONAL',
    lightingStatus: 'NORMAL',
    powerStatus: 'NORMAL',
    backupPowerStatus: 'STANDBY'
  });

  const [flightStrips, setFlightStrips] = useState([
    { flight: 'UAL123', type: 'ARR', runway: '09L', time: '14:32', altitude: '8500→GND', remarks: 'RNAV APCH' },
    { flight: 'AAL789', type: 'DEP', runway: '09R', time: '14:29', altitude: 'GND→FL350', remarks: 'HEAVY' },
    { flight: 'DAL456', type: 'ARR', runway: '09L', time: '14:45', altitude: 'FL120→GND', remarks: 'PRIORITY' },
    { flight: 'SWA321', type: 'OVR', runway: 'N/A', time: '14:28', altitude: 'FL350', remarks: 'TRANSIT' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());

      // Update aircraft positions
      setAircraftTracking(prev => prev.map(aircraft => ({
        ...aircraft,
        x: Math.max(5, Math.min(95, aircraft.x + (Math.random() - 0.5) * 3)),
        y: Math.max(5, Math.min(95, aircraft.y + (Math.random() - 0.5) * 3)),
        altitude: aircraft.status === 'APPROACH' 
          ? Math.max(0, aircraft.altitude - Math.random() * 200)
          : aircraft.status === 'DEPARTURE'
          ? Math.min(35000, aircraft.altitude + Math.random() * 500)
          : aircraft.altitude + (Math.random() - 0.5) * 100,
        heading: (aircraft.heading + (Math.random() - 0.5) * 10 + 360) % 360
      })));

      // Update weather conditions
      setWeatherConditions(prev => ({
        ...prev,
        windSpeed: Math.max(5, Math.min(35, prev.windSpeed + (Math.random() - 0.5) * 3)),
        windDirection: (prev.windDirection + (Math.random() - 0.5) * 5 + 360) % 360,
        visibility: Math.max(1, Math.min(15, prev.visibility + (Math.random() - 0.5) * 0.5))
      }));

      // Simulate new alerts occasionally
      if (Math.random() > 0.85) {
        const alertTypes = [
          { level: 'ADVISORY', message: 'Traffic pattern adjustment requested' },
          { level: 'CAUTION', message: 'Ground equipment maintenance scheduled' },
          { level: 'WARNING', message: 'Aircraft separation minimum approach' }
        ];
        const newAlert = alertTypes[Math.floor(Math.random() * alertTypes.length)];
        
        setSystemAlerts(prev => [
          {
            id: Date.now(),
            ...newAlert,
            time: new Date().toLocaleTimeString().slice(0, 5),
            acknowledged: false
          },
          ...prev.slice(0, 9)
        ]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (level) => {
    switch (level) {
      case 'WARNING': return 'text-red-400 bg-red-900/30 border-red-500';
      case 'CAUTION': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500';
      case 'ADVISORY': return 'text-blue-400 bg-blue-900/30 border-blue-500';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500';
    }
  };

  const getRunwayStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400';
      case 'STANDBY': return 'text-yellow-400';
      case 'CLOSED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatFrequency = (freq) => {
    return `${freq} MHz`;
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-green-400">AIR TRAFFIC CONTROL CENTER</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">FACILITY: KORD</span>
            <span className="mr-4">SECTOR: 09L/27R</span>
            <span>{new Date(timestamp).toLocaleTimeString()} UTC</span>
          </div>
        </div>

        {/* Weather Strip */}
        <div className="bg-blue-900/30 border border-blue-500 rounded-lg p-3 mb-6">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Eye className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-bold mr-4">WEATHER:</span>
              <span>{weatherConditions.conditions}</span>
            </div>
            <div className="flex items-center space-x-6">
              <span>VIS: {weatherConditions.visibility.toFixed(1)}km</span>
              <span>WIND: {weatherConditions.windDirection.toFixed(0)}°/{weatherConditions.windSpeed.toFixed(0)}kt</span>
              <span>CEIL: {weatherConditions.ceiling}ft</span>
              <span>TEMP: {weatherConditions.temperature}°C</span>
              <span>QNH: {weatherConditions.pressure.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Main Control Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Radar Display */}
          <div className="col-span-2 bg-gray-900 rounded border border-green-500">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Radar className="w-5 h-5 mr-2 text-green-400 animate-spin" />
                PRIMARY RADAR DISPLAY - {systemMetrics.radarRange}NM
              </h3>
            </div>
            <div className="p-4">
              <div className="relative bg-black border border-green-600 rounded h-80 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 400 300" className="absolute inset-0">
                  {/* Radar rings */}
                  <circle cx="200" cy="150" r="60" fill="none" stroke="#065f46" strokeWidth="1" />
                  <circle cx="200" cy="150" r="120" fill="none" stroke="#065f46" strokeWidth="1" />
                  <circle cx="200" cy="150" r="180" fill="none" stroke="#065f46" strokeWidth="1" />
                  
                  {/* Radar sweep line */}
                  <line 
                    x1="200" 
                    y1="150" 
                    x2={200 + 180 * Math.cos((timestamp / 1000) % (2 * Math.PI))} 
                    y2={150 + 180 * Math.sin((timestamp / 1000) % (2 * Math.PI))} 
                    stroke="#10b981" 
                    strokeWidth="2" 
                    opacity="0.8"
                  />
                  
                  {/* Cross-hairs */}
                  <line x1="200" y1="0" x2="200" y2="300" stroke="#065f46" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#065f46" strokeWidth="1" />
                  
                  {/* Aircraft blips */}
                  {aircraftTracking.map((aircraft, index) => {
                    const x = (aircraft.x / 100) * 400;
                    const y = (aircraft.y / 100) * 300;
                    return (
                      <g key={aircraft.id}>
                        <circle 
                          cx={x} 
                          cy={y} 
                          r="4" 
                          fill={aircraft.status === 'WARNING' ? '#ef4444' : '#10b981'} 
                          className="animate-pulse"
                        />
                        <text 
                          x={x + 8} 
                          y={y - 8} 
                          fontSize="8" 
                          fill="#10b981" 
                          className="font-mono"
                        >
                          {aircraft.id}
                        </text>
                        <text 
                          x={x + 8} 
                          y={y + 2} 
                          fontSize="6" 
                          fill="#065f46" 
                          className="font-mono"
                        >
                          {Math.round(aircraft.altitude / 100)}
                        </text>
                      </g>
                    );
                  })}
                  
                  {/* Runway overlay */}
                  <line x1="80" y1="150" x2="320" y2="150" stroke="#fbbf24" strokeWidth="3" />
                  <text x="85" y="145" fontSize="8" fill="#fbbf24" className="font-mono">09L</text>
                  <text x="300" y="145" fontSize="8" fill="#fbbf24" className="font-mono">27R</text>
                </svg>
                
                <div className="absolute bottom-2 left-2 text-xs text-green-400">
                  RANGE: {systemMetrics.radarRange}NM | MODE: S | CONTACTS: {aircraftTracking.length}
                </div>
              </div>
            </div>
          </div>

          {/* Flight Strips & Aircraft Data */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Plane className="w-5 h-5 mr-2 text-blue-400" />
                ACTIVE TRAFFIC
              </h3>
            </div>
            <div className="p-4 space-y-2 max-h-80 overflow-y-auto">
              {aircraftTracking.map((aircraft) => (
                <div key={aircraft.id} className="bg-gray-800 p-3 rounded border border-gray-600">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 font-bold">{aircraft.callsign}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      aircraft.status === 'APPROACH' ? 'bg-green-900 text-green-400' :
                      aircraft.status === 'DEPARTURE' ? 'bg-blue-900 text-blue-400' :
                      aircraft.status === 'CRUISE' ? 'bg-purple-900 text-purple-400' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {aircraft.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">ALT:</span>
                      <span className="text-white ml-1">{Math.round(aircraft.altitude)}ft</span>
                    </div>
                    <div>
                      <span className="text-gray-400">HDG:</span>
                      <span className="text-white ml-1">{aircraft.heading.toFixed(0)}°</span>
                    </div>
                    <div>
                      <span className="text-gray-400">SPD:</span>
                      <span className="text-white ml-1">{aircraft.speed}kt</span>
                    </div>
                    <div>
                      <span className="text-gray-400">FREQ:</span>
                      <span className="text-yellow-400 ml-1">{aircraft.frequency}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="text-gray-400">SQUAWK:</span>
                    <span className="text-orange-400 ml-1">{aircraft.squawk}</span>
                    <span className="text-gray-400 ml-3">TYPE:</span>
                    <span className="text-white ml-1">{aircraft.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Activity className="w-5 h-5 mr-2 text-yellow-400" />
                SYSTEM STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(systemMetrics).map(([key, status]) => {
                if (key === 'radarRange') return null;
                const isOperational = status === 'OPERATIONAL' || status === 'NORMAL' || status === 'STANDBY';
                return (
                  <div key={key} className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className={`font-bold ${
                      isOperational ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {status}
                    </span>
                  </div>
                );
              })}
              
              {/* Runway Status */}
              <div className="pt-3 border-t border-gray-700">
                <div className="text-sm text-gray-400 mb-2">RUNWAY STATUS:</div>
                {Object.entries(runwayStatus).map(([runway, status]) => (
                  <div key={runway} className="flex justify-between items-center text-xs mb-1">
                    <span className="text-white">{runway}:</span>
                    <span className={`font-bold ${getRunwayStatusColor(status.status)}`}>
                      {status.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Controller Stations & Communications */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Radio className="w-5 h-5 mr-2 text-purple-400" />
                CONTROLLER POSITIONS
              </h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(controllerStations).map(([position, info]) => (
                  <div key={position} className="bg-gray-800 p-3 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold uppercase">{position}</span>
                      <div className={`w-3 h-3 rounded-full ${info.active ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                    </div>
                    <div className="text-xs space-y-1">
                      <div>
                        <span className="text-gray-400">FREQ:</span>
                        <span className="text-yellow-400 ml-2">{formatFrequency(info.frequency)}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">CONTROLLER:</span>
                        <span className="text-cyan-400 ml-2">{info.controller}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">TRAFFIC:</span>
                        <span className="text-white ml-2">{info.traffic} A/C</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts & Messages */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                SYSTEM ALERTS & MESSAGES
              </h3>
            </div>
            <div className="p-4 max-h-60 overflow-y-auto">
              {systemAlerts.map((alert) => (
                <div 
                  key={alert.id} 
                  className={`p-3 rounded border mb-2 ${getAlertColor(alert.level)} ${
                    !alert.acknowledged ? 'animate-pulse' : 'opacity-70'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-bold uppercase">{alert.level}</span>
                        <span className="text-xs ml-2 text-gray-400">{alert.time}</span>
                      </div>
                      <div className="text-sm">{alert.message}</div>
                    </div>
                    {!alert.acknowledged && (
                      <span className="text-xs bg-red-900 text-red-300 px-2 py-1 rounded">ACK</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Flight Progress Strips */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orange-400" />
              FLIGHT PROGRESS STRIPS
            </h3>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-4 gap-2">
              {flightStrips.map((strip, index) => (
                <div key={index} className="bg-yellow-100 text-black p-2 rounded text-xs font-mono">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold">{strip.flight}</span>
                    <span className={`px-1 rounded ${
                      strip.type === 'ARR' ? 'bg-green-600 text-white' :
                      strip.type === 'DEP' ? 'bg-blue-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {strip.type}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div><strong>RWY:</strong> {strip.runway}</div>
                    <div><strong>TIME:</strong> {strip.time}</div>
                    <div><strong>ALT:</strong> {strip.altitude}</div>
                    <div><strong>RMK:</strong> {strip.remarks}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTrafficControlCenter;