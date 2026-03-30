import React, { useState, useEffect } from 'react';
import { AlertTriangle, Phone, MapPin, Users, Clock, Activity, Shield, Radio, Truck, Eye, Target, Zap } from 'lucide-react';

const EmergencyOperationsCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [incidentStatus, setIncidentStatus] = useState({
    activeIncidents: 4,
    criticalAlerts: 2,
    unitsDeployed: 23,
    activationLevel: 'LEVEL 2',
    eocStatus: 'ACTIVATED',
    lastUpdate: new Date().toLocaleTimeString()
  });

  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 'INC-2026-0325-001',
      type: 'STRUCTURE FIRE',
      priority: 'HIGH',
      location: 'Downtown Commercial District',
      coordinates: '40.7589, -73.9851',
      status: 'ACTIVE',
      unitsAssigned: 8,
      startTime: '20:45',
      ic: 'Battalion Chief Miller',
      agencies: ['Fire', 'Police', 'EMS']
    },
    {
      id: 'INC-2026-0325-002', 
      type: 'HAZMAT SPILL',
      priority: 'CRITICAL',
      location: 'Industrial Zone Highway 101',
      coordinates: '40.7505, -73.9934',
      status: 'CONTAINED',
      unitsAssigned: 12,
      startTime: '19:32',
      ic: 'Fire Chief Rodriguez',
      agencies: ['Fire', 'Police', 'EPA', 'Public Health']
    },
    {
      id: 'INC-2026-0325-003',
      type: 'MULTI-VEHICLE ACCIDENT',
      priority: 'MEDIUM',
      location: 'Interstate 95 Mile Marker 47',
      coordinates: '40.7282, -74.0776',
      status: 'CLEARING',
      unitsAssigned: 6,
      startTime: '21:15',
      ic: 'Sergeant Thompson',
      agencies: ['Police', 'EMS', 'DOT']
    },
    {
      id: 'INC-2026-0325-004',
      type: 'WEATHER EVENT',
      priority: 'MEDIUM',
      location: 'County-Wide',
      coordinates: '40.7128, -74.0060',
      status: 'MONITORING',
      unitsAssigned: 15,
      startTime: '18:00',
      ic: 'Emergency Manager Davis',
      agencies: ['Emergency Mgmt', 'Public Works', 'Utilities']
    }
  ]);

  const [resources, setResources] = useState({
    fire: { available: 12, deployed: 8, enroute: 2, maintenance: 1 },
    police: { available: 18, deployed: 11, enroute: 3, maintenance: 0 },
    ems: { available: 15, deployed: 9, enroute: 4, maintenance: 1 },
    publicWorks: { available: 8, deployed: 5, enroute: 1, maintenance: 2 },
    utilities: { available: 6, deployed: 3, enroute: 1, maintenance: 0 },
    volunteers: { available: 45, deployed: 23, enroute: 8, maintenance: 0 }
  });

  const [weatherData, setWeatherData] = useState({
    condition: 'SEVERE THUNDERSTORM WARNING',
    temperature: 18,
    windSpeed: 45,
    windDirection: 'SW',
    visibility: 2.5,
    precipitation: 'HEAVY RAIN',
    alerts: ['Flash Flood Watch', 'High Wind Advisory']
  });

  const [communicationStatus, setCommunicationStatus] = useState({
    primary: 'OPERATIONAL',
    backup: 'STANDBY',
    cellular: 'DEGRADED',
    internet: 'OPERATIONAL',
    radio: 'OPERATIONAL',
    emergency: 'AVAILABLE'
  });

  const [shelterStatus, setShelterStatus] = useState({
    redCross: { capacity: 200, occupied: 45, available: 155, status: 'OPEN' },
    community: { capacity: 150, occupied: 0, available: 150, status: 'STANDBY' },
    school: { capacity: 300, occupied: 0, available: 300, status: 'CLOSED' }
  });

  const [recentUpdates, setRecentUpdates] = useState([
    { time: '21:23:45', agency: 'FIRE', message: 'Structure fire 60% contained, evacuation perimeter reduced' },
    { time: '21:20:12', agency: 'EOC', message: 'Shelter capacity increased to 500 total with Community Center activation' },
    { time: '21:18:33', agency: 'POLICE', message: 'Highway 101 hazmat scene secured, traffic diversion in effect' },
    { time: '21:15:20', agency: 'EMS', message: 'Multi-vehicle accident - 3 transported to Regional Medical Center' },
    { time: '21:12:45', agency: 'PUBLIC WORKS', message: 'Storm drain clearance teams deployed to flood-prone areas' }
  ]);

  const [agencyCoordination, setAgencyCoordination] = useState({
    fireChief: { status: 'ACTIVE', location: 'EOC', contact: 'Ch-1' },
    policeChief: { status: 'ACTIVE', location: 'EOC', contact: 'Ch-2' },
    emsDirector: { status: 'ACTIVE', location: 'EOC', contact: 'Ch-3' },
    emergencyManager: { status: 'ACTIVE', location: 'EOC', contact: 'Ch-4' },
    publicWorks: { status: 'REMOTE', location: 'Field HQ', contact: 'Ch-5' },
    redCross: { status: 'ACTIVE', location: 'EOC', contact: 'Ch-6' },
    healthDept: { status: 'STANDBY', location: 'Health Dept', contact: 'Ch-7' },
    utilities: { status: 'ACTIVE', location: 'Utility EOC', contact: 'Ch-8' }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());

      // Update incident status
      setIncidentStatus(prev => ({
        ...prev,
        lastUpdate: new Date().toLocaleTimeString(),
        unitsDeployed: Math.max(15, Math.min(35, prev.unitsDeployed + (Math.random() - 0.5) * 2))
      }));

      // Update weather conditions
      setWeatherData(prev => ({
        ...prev,
        windSpeed: Math.max(25, Math.min(65, prev.windSpeed + (Math.random() - 0.5) * 8)),
        visibility: Math.max(0.5, Math.min(10, prev.visibility + (Math.random() - 0.5) * 0.5))
      }));

      // Simulate new updates
      if (Math.random() > 0.8) {
        const updateTypes = [
          { agency: 'FIRE', message: 'Additional engine company requested for structure fire' },
          { agency: 'POLICE', message: 'Traffic control point established at Main St intersection' },
          { agency: 'EMS', message: 'Medical unit standing by at incident command post' },
          { agency: 'EOC', message: 'Public information officer briefing scheduled for 22:00' },
          { agency: 'PUBLIC WORKS', message: 'Road closure barriers deployed on affected routes' }
        ];
        
        const newUpdate = updateTypes[Math.floor(Math.random() * updateTypes.length)];
        setRecentUpdates(prev => [
          {
            time: new Date().toLocaleTimeString(),
            ...newUpdate
          },
          ...prev.slice(0, 19) // Keep last 20 updates
        ]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-900/30 border-red-500';
      case 'HIGH': return 'text-orange-400 bg-orange-900/30 border-orange-500';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500';
      case 'LOW': return 'text-green-400 bg-green-900/30 border-green-500';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE':
      case 'OPERATIONAL':
      case 'OPEN': return 'text-green-400';
      case 'CONTAINED':
      case 'STANDBY':
      case 'AVAILABLE': return 'text-yellow-400';
      case 'CLEARING':
      case 'DEGRADED': return 'text-orange-400';
      case 'CLOSED':
      case 'FAILED': return 'text-red-400';
      case 'MONITORING':
      case 'REMOTE': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getActivationColor = (level) => {
    switch (level) {
      case 'LEVEL 1': return 'text-green-400';
      case 'LEVEL 2': return 'text-yellow-400';
      case 'LEVEL 3': return 'text-orange-400';
      case 'FULL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-red-400">EMERGENCY OPERATIONS CENTER</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">COUNTY EOC</span>
            <span className="mr-4">STATUS: {incidentStatus.eocStatus}</span>
            <span>{new Date(timestamp).toLocaleTimeString()} LOCAL</span>
          </div>
        </div>

        {/* Activation Status Strip */}
        <div className="bg-red-900/30 border border-red-500 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-400 mr-3" />
              <div>
                <span className="text-red-400 font-bold text-lg">EOC ACTIVATION STATUS</span>
                <div className={`text-sm font-bold ${getActivationColor(incidentStatus.activationLevel)}`}>
                  {incidentStatus.activationLevel} - PARTIAL ACTIVATION
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-gray-400">ACTIVE INCIDENTS</div>
                <div className="text-white font-bold text-xl">{incidentStatus.activeIncidents}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">CRITICAL ALERTS</div>
                <div className="text-red-400 font-bold text-xl">{incidentStatus.criticalAlerts}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">UNITS DEPLOYED</div>
                <div className="text-yellow-400 font-bold text-xl">{Math.round(incidentStatus.unitsDeployed)}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Operations Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Active Incidents */}
          <div className="col-span-2 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Target className="w-5 h-5 mr-2 text-orange-400" />
                ACTIVE INCIDENTS - INCIDENT COMMAND STATUS
              </h3>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              {activeIncidents.map((incident) => (
                <div key={incident.id} className={`mb-4 p-4 rounded border ${getPriorityColor(incident.priority)}`}>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="font-bold text-white text-lg">{incident.type}</div>
                      <div className="text-cyan-400 font-mono text-sm">{incident.id}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{incident.priority}</div>
                      <div className={`text-sm ${getStatusColor(incident.status)}`}>{incident.status}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <div className="text-gray-400 text-xs">LOCATION:</div>
                      <div className="text-white text-sm">{incident.location}</div>
                      <div className="text-gray-500 text-xs">{incident.coordinates}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-xs">INCIDENT COMMANDER:</div>
                      <div className="text-yellow-400 text-sm">{incident.ic}</div>
                      <div className="text-gray-400 text-xs">Started: {incident.startTime}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <span className="text-xs text-gray-400">UNITS:</span>
                      <span className="text-white font-bold">{incident.unitsAssigned}</span>
                    </div>
                    <div className="flex space-x-2">
                      {incident.agencies.map((agency, index) => (
                        <span key={index} className="bg-blue-900 text-blue-300 px-2 py-1 rounded text-xs">
                          {agency}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Status */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Truck className="w-5 h-5 mr-2 text-green-400" />
                RESOURCE STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {Object.entries(resources).map(([type, status]) => (
                <div key={type} className="bg-gray-800 p-3 rounded">
                  <div className="text-white font-bold capitalize mb-2">{type.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-900 p-1 rounded text-center">
                      <div className="text-green-400">Available</div>
                      <div className="text-white font-bold">{status.available}</div>
                    </div>
                    <div className="bg-yellow-900 p-1 rounded text-center">
                      <div className="text-yellow-400">Deployed</div>
                      <div className="text-white font-bold">{status.deployed}</div>
                    </div>
                    <div className="bg-blue-900 p-1 rounded text-center">
                      <div className="text-blue-400">En Route</div>
                      <div className="text-white font-bold">{status.enroute}</div>
                    </div>
                    <div className="bg-red-900 p-1 rounded text-center">
                      <div className="text-red-400">Maintenance</div>
                      <div className="text-white font-bold">{status.maintenance}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Systems Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Weather Conditions */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Eye className="w-5 h-5 mr-2 text-blue-400" />
                WEATHER STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="text-center">
                <div className="text-red-400 font-bold text-sm mb-2">{weatherData.condition}</div>
                <div className="text-2xl font-bold text-white">{weatherData.temperature}°C</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Wind:</span>
                  <span className="text-yellow-400">{weatherData.windDirection} {weatherData.windSpeed} km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Visibility:</span>
                  <span className="text-cyan-400">{weatherData.visibility} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Precipitation:</span>
                  <span className="text-blue-400">{weatherData.precipitation}</span>
                </div>
              </div>
              <div className="space-y-1">
                {weatherData.alerts.map((alert, index) => (
                  <div key={index} className="bg-red-900 text-red-300 px-2 py-1 rounded text-xs">
                    {alert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Communications */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Radio className="w-5 h-5 mr-2 text-purple-400" />
                COMMUNICATIONS
              </h3>
            </div>
            <div className="p-4 space-y-2">
              {Object.entries(communicationStatus).map(([system, status]) => (
                <div key={system} className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 capitalize">{system}:</span>
                  <span className={`font-bold ${getStatusColor(status)}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shelter Status */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-400" />
                SHELTER STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(shelterStatus).map(([shelter, data]) => (
                <div key={shelter} className="bg-gray-800 p-2 rounded">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-white text-sm capitalize">{shelter.replace(/([A-Z])/g, ' $1')}</span>
                    <span className={`text-xs font-bold ${getStatusColor(data.status)}`}>{data.status}</span>
                  </div>
                  <div className="text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Capacity:</span>
                      <span className="text-white">{data.capacity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Occupied:</span>
                      <span className="text-yellow-400">{data.occupied}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Available:</span>
                      <span className="text-green-400">{data.available}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agency Coordination */}
          <div className="col-span-1 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                AGENCY COORDINATION
              </h3>
            </div>
            <div className="p-4 space-y-2 max-h-64 overflow-y-auto">
              {Object.entries(agencyCoordination).map(([agency, info]) => (
                <div key={agency} className="flex justify-between items-center text-xs">
                  <div>
                    <div className="text-white capitalize">{agency.replace(/([A-Z])/g, ' $1')}</div>
                    <div className="text-gray-400">{info.location}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${getStatusColor(info.status)}`}>{info.status}</div>
                    <div className="text-gray-400">{info.contact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-orange-400" />
              REAL-TIME OPERATIONS LOG
            </h3>
          </div>
          <div className="p-4 max-h-48 overflow-y-auto">
            {recentUpdates.map((update, index) => (
              <div key={index} className="flex items-center mb-2 text-sm">
                <span className="text-blue-400 font-mono mr-3 min-w-0 flex-shrink-0">[{update.time}]</span>
                <span className="text-yellow-400 mr-3 min-w-0 flex-shrink-0">{update.agency}:</span>
                <span className="text-gray-300">{update.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyOperationsCenter;