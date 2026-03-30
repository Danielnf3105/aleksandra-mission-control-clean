import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Radio, Eye, Users, Zap, Target, AlertTriangle, Clock, Crosshair, Radar, Satellite } from 'lucide-react';

const MilitaryTacticalOperationsCenter = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [missionStatus, setMissionStatus] = useState({
    operationName: 'OPERATION STEEL GUARDIAN',
    phase: 'PHASE II - RECONNAISSANCE',
    classification: 'SECRET',
    threatLevel: 'MODERATE',
    opsecStatus: 'GREEN',
    forceProtection: 'CHARLIE',
    lastUpdate: new Date().toLocaleTimeString()
  });

  const [battlespaceAwareness, setBattlespaceAwareness] = useState({
    friendly: { ground: 147, air: 23, naval: 8, total: 178 },
    hostile: { confirmed: 12, suspected: 27, unknown: 8, total: 47 },
    civilian: { population: 'HIGH', evacuated: 2847, remaining: 15000 },
    geography: { aor: '850 km²', terrain: 'URBAN/MIXED', weather: 'CLEAR', visibility: '12 km' }
  });

  const [activeUnits, setActiveUnits] = useState([
    {
      callSign: 'ALPHA-6',
      type: 'Infantry Company',
      status: 'COMBAT EFFECTIVE',
      position: '32.1234, -117.5678',
      strength: '89%',
      mission: 'PATROL SECTOR 7',
      lastComms: '15:34:23',
      readiness: 'GREEN'
    },
    {
      callSign: 'BRAVO-2',
      type: 'Armored Squadron',
      status: 'MOVING',
      position: '32.1456, -117.5432',
      strength: '94%',
      mission: 'CONVOY ESCORT',
      lastComms: '15:33:45',
      readiness: 'GREEN'
    },
    {
      callSign: 'CHARLIE-9',
      type: 'Air Support',
      status: 'ON STATION',
      position: 'FL180, SECTOR 3',
      strength: '100%',
      mission: 'CAS STANDBY',
      lastComms: '15:34:12',
      readiness: 'GREEN'
    },
    {
      callSign: 'DELTA-4',
      type: 'Artillery Battery',
      status: 'FIRING POSITION',
      position: '32.1678, -117.5234',
      strength: '100%',
      mission: 'FIRE SUPPORT',
      lastComms: '15:33:58',
      readiness: 'AMBER'
    },
    {
      callSign: 'ECHO-1',
      type: 'Reconnaissance',
      status: 'OBSERVING',
      position: '32.1897, -117.4987',
      strength: '75%',
      mission: 'SURVEILLANCE',
      lastComms: '15:34:19',
      readiness: 'GREEN'
    }
  ]);

  const [threatAssessment, setThreatAssessment] = useState([
    {
      id: 'T-001',
      type: 'HOSTILE VEHICLE',
      priority: 'HIGH',
      position: '32.1345, -117.5789',
      distance: '2.3 km',
      bearing: '045°',
      status: 'MOBILE',
      confidence: '85%',
      lastSeen: '15:31:45'
    },
    {
      id: 'T-002',
      type: 'SNIPER POSITION',
      priority: 'CRITICAL',
      position: '32.1567, -117.5345',
      distance: '800 m',
      bearing: '270°',
      status: 'STATIONARY',
      confidence: '92%',
      lastSeen: '15:29:12'
    },
    {
      id: 'T-003',
      type: 'IED SUSPECTED',
      priority: 'HIGH',
      position: '32.1432, -117.5698',
      distance: '1.5 km',
      bearing: '180°',
      status: 'UNCONFIRMED',
      confidence: '67%',
      lastSeen: '15:25:33'
    }
  ]);

  const [isrAssets, setIsrAssets] = useState({
    uav: [
      { callSign: 'REAPER-1', type: 'MQ-9', status: 'AIRBORNE', fuel: '78%', mission: 'PATTERN SEARCH' },
      { callSign: 'SHADOW-3', type: 'RQ-7', status: 'RTB', fuel: '23%', mission: 'BDA' }
    ],
    satellite: [
      { name: 'KEYHOLE-14', status: 'ACTIVE', coverage: 'FULL AOR', nextPass: '16:23:00' },
      { name: 'LACROSSE-5', status: 'AVAILABLE', coverage: 'STANDBY', nextPass: '17:45:00' }
    ],
    sensors: [
      { type: 'GROUND RADAR', status: 'OPERATIONAL', range: '25 km', contacts: 14 },
      { type: 'ACOUSTIC ARRAY', status: 'OPERATIONAL', range: '8 km', contacts: 3 },
      { type: 'SIGINT', status: 'MONITORING', range: '50 km', intercepts: 27 }
    ]
  });

  const [communications, setCommunications] = useState({
    primary: { freq: '142.375 MHz', status: 'CLEAR', encryption: 'AES-256' },
    secondary: { freq: '156.800 MHz', status: 'CLEAR', encryption: 'AES-256' },
    emergency: { freq: '121.500 MHz', status: 'MONITOR', encryption: 'NONE' },
    satcom: { status: 'OPERATIONAL', bandwidth: '85%', latency: '145ms' }
  });

  const [commandGuidance, setCommandGuidance] = useState([
    { time: '15:32:15', from: 'HIGHER HQ', message: 'Continue reconnaissance operations in SECTOR 7, report any hostile activity immediately', priority: 'ROUTINE' },
    { time: '15:28:43', from: 'FIRES COORD', message: 'DELTA-4 cleared to engage targets in GRID 32SMB12345678 on request', priority: 'IMMEDIATE' },
    { time: '15:25:07', from: 'AIR CONTROL', message: 'CHARLIE-9 authorized for CAS missions, maintain station SECTOR 3', priority: 'PRIORITY' },
    { time: '15:22:34', from: 'LOG CENTER', message: 'Resupply convoy departing FOB at 1630Z, ETA your location 1730Z', priority: 'ROUTINE' }
  ]);

  const [logisticsStatus, setLogisticsStatus] = useState({
    ammunition: { small: 89, medium: 67, heavy: 23, status: 'GREEN' },
    fuel: { diesel: 78, aviation: 92, status: 'GREEN' },
    medical: { supplies: 94, casualties: 2, status: 'GREEN' },
    maintenance: { operational: 156, deadlined: 8, status: 'AMBER' }
  });

  const [weatherData, setWeatherData] = useState({
    temperature: 24,
    windSpeed: 12,
    windDirection: 'SW',
    visibility: 12,
    cloudCover: 15,
    precipitation: 'NONE',
    pressure: 1013,
    humidity: 45
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());

      // Update mission status
      setMissionStatus(prev => ({
        ...prev,
        lastUpdate: new Date().toLocaleTimeString()
      }));

      // Simulate unit position updates
      setActiveUnits(prev => prev.map(unit => {
        const newStrength = Math.max(60, Math.min(100, unit.strength.replace('%', '') * 1 + (Math.random() - 0.5) * 2));
        const readinessOptions = ['GREEN', 'GREEN', 'GREEN', 'AMBER', 'RED'];
        
        return {
          ...unit,
          strength: `${Math.round(newStrength)}%`,
          lastComms: new Date().toLocaleTimeString(),
          readiness: Math.random() > 0.9 ? readinessOptions[Math.floor(Math.random() * readinessOptions.length)] : unit.readiness
        };
      }));

      // Update battlespace awareness
      setBattlespaceAwareness(prev => ({
        ...prev,
        hostile: {
          ...prev.hostile,
          confirmed: Math.max(8, Math.min(20, prev.hostile.confirmed + (Math.random() - 0.5) * 2)),
          suspected: Math.max(15, Math.min(35, prev.hostile.suspected + (Math.random() - 0.5) * 4))
        }
      }));

      // Simulate new command guidance
      if (Math.random() > 0.85) {
        const guidanceTypes = [
          { from: 'HIGHER HQ', message: 'Adjust patrol routes to avoid civilian concentration area GRID 32SMB23456789', priority: 'PRIORITY' },
          { from: 'INTEL', message: 'New intelligence indicates possible hostile activity in SECTOR 4, increase surveillance', priority: 'IMMEDIATE' },
          { from: 'LOG CENTER', message: 'Medical resupply available on request, coordinate through S-4', priority: 'ROUTINE' }
        ];

        const newGuidance = guidanceTypes[Math.floor(Math.random() * guidanceTypes.length)];
        setCommandGuidance(prev => [
          {
            time: new Date().toLocaleTimeString(),
            ...newGuidance
          },
          ...prev.slice(0, 19)
        ]);
      }

      // Update weather
      setWeatherData(prev => ({
        ...prev,
        windSpeed: Math.max(5, Math.min(25, prev.windSpeed + (Math.random() - 0.5) * 2)),
        visibility: Math.max(8, Math.min(15, prev.visibility + (Math.random() - 0.5) * 0.5))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status.toUpperCase()) {
      case 'GREEN':
      case 'OPERATIONAL':
      case 'CLEAR':
      case 'AIRBORNE': return 'text-green-400';
      case 'AMBER':
      case 'MODERATE':
      case 'MOVING': return 'text-yellow-400';
      case 'RED':
      case 'HIGH':
      case 'CRITICAL': return 'text-red-400';
      case 'CHARLIE': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toUpperCase()) {
      case 'CRITICAL': return 'text-red-400 bg-red-900/30 border-red-500';
      case 'IMMEDIATE': return 'text-orange-400 bg-orange-900/30 border-orange-500';
      case 'PRIORITY': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500';
      case 'ROUTINE': return 'text-blue-400 bg-blue-900/30 border-blue-500';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500';
    }
  };

  const getReadinessIcon = (readiness) => {
    switch (readiness) {
      case 'GREEN': return <Shield className="w-4 h-4 text-green-400" />;
      case 'AMBER': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'RED': return <Target className="w-4 h-4 text-red-400" />;
      default: return <Shield className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-green-400">TACTICAL OPERATIONS CENTER</h1>
          <div className="flex items-center text-sm text-gray-400">
            <span className="mr-4">{missionStatus.classification}</span>
            <span className="mr-4">OPSEC: {missionStatus.opsecStatus}</span>
            <span>{new Date(timestamp).toLocaleTimeString()} ZULU</span>
          </div>
        </div>

        {/* Mission Status Strip */}
        <div className="bg-green-900/30 border border-green-500 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Target className="w-6 h-6 text-green-400 mr-3" />
              <div>
                <span className="text-green-400 font-bold text-lg">{missionStatus.operationName}</span>
                <div className="text-sm text-cyan-400">{missionStatus.phase}</div>
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-gray-400">THREAT LEVEL</div>
                <div className={`font-bold ${getStatusColor(missionStatus.threatLevel)}`}>{missionStatus.threatLevel}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">FORCE PROTECTION</div>
                <div className={`font-bold ${getStatusColor(missionStatus.forceProtection)}`}>{missionStatus.forceProtection}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-400">BATTLESPACE</div>
                <div className="text-white font-bold">{battlespaceAwareness.geography.aor}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Battlespace Overview */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900 rounded border border-gray-700 p-4">
            <div className="flex items-center mb-3">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-bold">FRIENDLY FORCES</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-blue-900/30 p-2 rounded text-center">
                <div className="text-blue-400">Ground</div>
                <div className="text-white font-bold">{battlespaceAwareness.friendly.ground}</div>
              </div>
              <div className="bg-blue-900/30 p-2 rounded text-center">
                <div className="text-blue-400">Air</div>
                <div className="text-white font-bold">{battlespaceAwareness.friendly.air}</div>
              </div>
              <div className="bg-blue-900/30 p-2 rounded text-center">
                <div className="text-blue-400">Naval</div>
                <div className="text-white font-bold">{battlespaceAwareness.friendly.naval}</div>
              </div>
              <div className="bg-blue-900/30 p-2 rounded text-center">
                <div className="text-cyan-400">Total</div>
                <div className="text-white font-bold">{battlespaceAwareness.friendly.total}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded border border-gray-700 p-4">
            <div className="flex items-center mb-3">
              <Target className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-red-400 font-bold">HOSTILE FORCES</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-red-900/30 p-2 rounded text-center">
                <div className="text-red-400">Confirmed</div>
                <div className="text-white font-bold">{Math.round(battlespaceAwareness.hostile.confirmed)}</div>
              </div>
              <div className="bg-orange-900/30 p-2 rounded text-center">
                <div className="text-orange-400">Suspected</div>
                <div className="text-white font-bold">{Math.round(battlespaceAwareness.hostile.suspected)}</div>
              </div>
              <div className="bg-yellow-900/30 p-2 rounded text-center">
                <div className="text-yellow-400">Unknown</div>
                <div className="text-white font-bold">{battlespaceAwareness.hostile.unknown}</div>
              </div>
              <div className="bg-red-900/30 p-2 rounded text-center">
                <div className="text-red-400">Total</div>
                <div className="text-white font-bold">{Math.round(battlespaceAwareness.hostile.total)}</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded border border-gray-700 p-4">
            <div className="flex items-center mb-3">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-bold">CIVILIAN STATUS</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Population:</span>
                <span className="text-yellow-400">{battlespaceAwareness.civilian.population}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Evacuated:</span>
                <span className="text-green-400">{battlespaceAwareness.civilian.evacuated.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Remaining:</span>
                <span className="text-orange-400">{battlespaceAwareness.civilian.remaining.toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded border border-gray-700 p-4">
            <div className="flex items-center mb-3">
              <Eye className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-bold">ENVIRONMENTAL</span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Terrain:</span>
                <span className="text-cyan-400">{battlespaceAwareness.geography.terrain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weather:</span>
                <span className="text-green-400">{battlespaceAwareness.geography.weather}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Visibility:</span>
                <span className="text-white">{battlespaceAwareness.geography.visibility}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wind:</span>
                <span className="text-blue-400">{weatherData.windSpeed} kt {weatherData.windDirection}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Operations Grid */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Active Units */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-400" />
                ACTIVE UNITS STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {activeUnits.map((unit, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-cyan-400 font-bold">{unit.callSign}</span>
                    <div className="flex items-center">
                      {getReadinessIcon(unit.readiness)}
                      <span className={`ml-1 text-xs ${getStatusColor(unit.readiness)}`}>{unit.readiness}</span>
                    </div>
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="text-gray-400">{unit.type}</div>
                    <div className={`text-sm ${getStatusColor(unit.status)}`}>{unit.status}</div>
                    <div className="text-gray-400">Mission: <span className="text-white">{unit.mission}</span></div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Strength:</span>
                      <span className="text-green-400">{unit.strength}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last Comms:</span>
                      <span className="text-blue-400">{unit.lastComms}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ISR Assets */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Satellite className="w-5 h-5 mr-2 text-cyan-400" />
                ISR ASSETS
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <h4 className="text-yellow-400 text-sm font-bold mb-2">UAV ASSETS</h4>
                {isrAssets.uav.map((uav, index) => (
                  <div key={index} className="bg-gray-800 p-2 rounded mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-cyan-400 font-bold text-xs">{uav.callSign}</span>
                      <span className={`text-xs ${getStatusColor(uav.status)}`}>{uav.status}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">{uav.type}</span>
                      <span className="text-green-400">Fuel: {uav.fuel}</span>
                    </div>
                    <div className="text-xs text-gray-400">Mission: <span className="text-white">{uav.mission}</span></div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-yellow-400 text-sm font-bold mb-2">SATELLITE COVERAGE</h4>
                {isrAssets.satellite.map((sat, index) => (
                  <div key={index} className="bg-gray-800 p-2 rounded mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-cyan-400 font-bold text-xs">{sat.name}</span>
                      <span className={`text-xs ${getStatusColor(sat.status)}`}>{sat.status}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Coverage: <span className="text-white">{sat.coverage}</span></span>
                      <span className="text-blue-400">Next: {sat.nextPass}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-yellow-400 text-sm font-bold mb-2">SENSOR GRID</h4>
                {isrAssets.sensors.map((sensor, index) => (
                  <div key={index} className="bg-gray-800 p-2 rounded mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-cyan-400 font-bold text-xs">{sensor.type}</span>
                      <span className={`text-xs ${getStatusColor(sensor.status)}`}>{sensor.status}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Range: <span className="text-white">{sensor.range}</span></span>
                      <span className="text-green-400">Contacts: {sensor.contacts || sensor.intercepts}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Threat Assessment */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
                THREAT ASSESSMENT
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {threatAssessment.map((threat) => (
                <div key={threat.id} className={`p-3 rounded border ${getPriorityColor(threat.priority)}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-xs">{threat.id}</span>
                    <span className="text-xs font-bold uppercase">{threat.priority}</span>
                  </div>
                  <div className="text-sm font-bold mb-1">{threat.type}</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Distance:</span>
                      <span className="text-white">{threat.distance}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Bearing:</span>
                      <span className="text-yellow-400">{threat.bearing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className={getStatusColor(threat.status)}>{threat.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Confidence:</span>
                      <span className="text-green-400">{threat.confidence}</span>
                    </div>
                    <div className="text-gray-400">Last Seen: <span className="text-blue-400">{threat.lastSeen}</span></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Communications & Support Grid */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Communications */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Radio className="w-5 h-5 mr-2 text-green-400" />
                COMMUNICATIONS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(communications).map(([type, data]) => (
                <div key={type} className="bg-gray-800 p-2 rounded">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-cyan-400 uppercase text-xs font-bold">{type}</span>
                    <span className={`text-xs ${getStatusColor(data.status)}`}>{data.status}</span>
                  </div>
                  <div className="text-xs space-y-1">
                    {data.freq && <div className="text-gray-400">Freq: <span className="text-white">{data.freq}</span></div>}
                    {data.encryption && <div className="text-gray-400">Enc: <span className="text-green-400">{data.encryption}</span></div>}
                    {data.bandwidth && <div className="text-gray-400">BW: <span className="text-yellow-400">{data.bandwidth}</span></div>}
                    {data.latency && <div className="text-gray-400">Lat: <span className="text-blue-400">{data.latency}</span></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics Status */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                LOGISTICS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {Object.entries(logisticsStatus).map(([type, data]) => (
                <div key={type} className="bg-gray-800 p-2 rounded">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-cyan-400 uppercase text-xs font-bold">{type}</span>
                    <span className={`text-xs ${getStatusColor(data.status)}`}>{data.status}</span>
                  </div>
                  <div className="text-xs space-y-1">
                    {data.small !== undefined && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Small Arms:</span>
                          <span className="text-green-400">{data.small}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Medium:</span>
                          <span className="text-yellow-400">{data.medium}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Heavy:</span>
                          <span className="text-red-400">{data.heavy}%</span>
                        </div>
                      </>
                    )}
                    {data.diesel !== undefined && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Diesel:</span>
                          <span className="text-green-400">{data.diesel}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Aviation:</span>
                          <span className="text-blue-400">{data.aviation}%</span>
                        </div>
                      </>
                    )}
                    {data.supplies !== undefined && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Supplies:</span>
                          <span className="text-green-400">{data.supplies}%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Casualties:</span>
                          <span className="text-yellow-400">{data.casualties}</span>
                        </div>
                      </>
                    )}
                    {data.operational !== undefined && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Operational:</span>
                          <span className="text-green-400">{data.operational}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Deadlined:</span>
                          <span className="text-red-400">{data.deadlined}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2">
            {/* Command Guidance */}
            <div className="bg-gray-900 rounded border border-gray-700">
              <div className="p-4 border-b border-gray-700">
                <h3 className="font-bold text-white flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-400" />
                  COMMAND GUIDANCE & ORDERS
                </h3>
              </div>
              <div className="p-4 max-h-64 overflow-y-auto">
                {commandGuidance.map((msg, index) => (
                  <div key={index} className={`mb-3 p-3 rounded border ${getPriorityColor(msg.priority)}`}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono text-blue-400">[{msg.time}]</span>
                      <span className="text-xs font-bold uppercase">{msg.priority}</span>
                    </div>
                    <div className="text-xs text-yellow-400 font-bold mb-1">FROM: {msg.from}</div>
                    <div className="text-sm text-gray-300">{msg.message}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilitaryTacticalOperationsCenter;