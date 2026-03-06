import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Rocket, Satellite, Globe, Radio, Zap, Activity, AlertTriangle, CheckCircle, Clock, Target, Eye, Navigation } from 'lucide-react';

const SpaceMissionControlCenter = () => {
  const [missionStatus, setMissionStatus] = useState({
    activeMissions: 4,
    crewOnboard: 7,
    satelitesOperational: 12,
    groundStations: 24,
    dataDownlinkRate: 2.47, // Gbps
    missionUptime: 99.97
  });

  const [activeMissions, setActiveMissions] = useState([
    {
      id: 'ISS-EXP70',
      name: 'ISS Expedition 70',
      status: 'nominal',
      crew: 7,
      altitude: 408.7, // km
      velocity: 27580, // km/h
      nextOrbit: 92.8, // minutes
      lastComm: new Date(),
      missionDay: 156,
      priority: 'critical'
    },
    {
      id: 'ARTEMIS-II',
      name: 'Artemis II Lunar Mission',
      status: 'prelaunch',
      crew: 4,
      altitude: 0,
      velocity: 0,
      nextOrbit: 0,
      lastComm: new Date(),
      missionDay: -45, // T-45 days
      priority: 'high'
    },
    {
      id: 'STARSHIP-7',
      name: 'Starship Test Flight 7',
      status: 'nominal',
      crew: 0,
      altitude: 185.3,
      velocity: 28100,
      nextOrbit: 89.4,
      lastComm: new Date(Date.now() - 30000),
      missionDay: 3,
      priority: 'medium'
    },
    {
      id: 'EUROPA-CLIP',
      name: 'Europa Clipper',
      status: 'cruise',
      crew: 0,
      altitude: 47800000, // km from Earth
      velocity: 23400,
      nextOrbit: 0,
      lastComm: new Date(Date.now() - 180000),
      missionDay: 234,
      priority: 'medium'
    }
  ]);

  const [spacecraft, setSpacecraft] = useState([
    {
      id: 'ISS',
      name: 'International Space Station',
      type: 'station',
      status: 'nominal',
      power: 84.7, // kW
      temperature: 21.3, // C
      pressure: 101.3, // kPa
      co2Level: 0.38, // mmHg
      oxygen: 20.9, // %
      systems: 'all nominal',
      crew: 7
    },
    {
      id: 'ORION-CM',
      name: 'Orion Command Module',
      type: 'capsule',
      status: 'prelaunch',
      power: 0,
      temperature: 18.2,
      pressure: 0,
      co2Level: 0,
      oxygen: 21.0,
      systems: 'ground power',
      crew: 0
    },
    {
      id: 'STARSHIP-B7',
      name: 'Starship B7',
      type: 'vehicle',
      status: 'nominal',
      power: 67.2,
      temperature: -95.4, // LOX temp
      pressure: 89.6,
      co2Level: 0.12,
      oxygen: 20.8,
      systems: 'propulsion nominal',
      crew: 0
    },
    {
      id: 'EUROPA-PROBE',
      name: 'Europa Clipper Probe',
      type: 'probe',
      status: 'cruise',
      power: 12.8,
      temperature: -156.7, // deep space
      pressure: 0,
      co2Level: 0,
      oxygen: 0,
      systems: 'science nominal',
      crew: 0
    }
  ]);

  const [telemetryData, setTelemetryData] = useState([
    {
      time: new Date(Date.now() - 600000).toLocaleTimeString(),
      altitude: 406.8,
      velocity: 27560,
      power: 82.1,
      temp: 21.1
    },
    {
      time: new Date(Date.now() - 480000).toLocaleTimeString(),
      altitude: 407.2,
      velocity: 27565,
      power: 83.4,
      temp: 21.2
    },
    {
      time: new Date(Date.now() - 360000).toLocaleTimeString(),
      altitude: 407.9,
      velocity: 27572,
      power: 84.1,
      temp: 21.4
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      altitude: 408.1,
      velocity: 27575,
      power: 83.8,
      temp: 21.3
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      altitude: 408.4,
      velocity: 27578,
      power: 84.2,
      temp: 21.2
    },
    {
      time: new Date().toLocaleTimeString(),
      altitude: 408.7,
      velocity: 27580,
      power: 84.7,
      temp: 21.3
    }
  ]);

  const [missionAlerts, setMissionAlerts] = useState([
    {
      id: 'ALERT-001',
      severity: 'caution',
      mission: 'ISS Expedition 70',
      system: 'Environmental Control',
      message: 'CO2 scrubber performance slightly degraded - backup system ready',
      timestamp: new Date(),
      status: 'monitoring',
      flight: 'Flight Engineer monitoring'
    },
    {
      id: 'ALERT-002',
      severity: 'advisory',
      mission: 'Starship Test Flight 7',
      system: 'Communication',
      message: 'Intermittent signal loss during orbital nighttime passes',
      timestamp: new Date(Date.now() - 300000),
      status: 'acknowledged',
      flight: 'CAPCOM investigating'
    },
    {
      id: 'ALERT-003',
      severity: 'nominal',
      mission: 'Europa Clipper',
      system: 'Science Instruments',
      message: 'All science instruments nominal - Jupiter trajectory on track',
      timestamp: new Date(Date.now() - 600000),
      status: 'resolved',
      flight: 'Science team confirms'
    }
  ]);

  const [groundStations, setGroundStations] = useState([
    {
      id: 'KSC-FL',
      name: 'Kennedy Space Center',
      location: 'Florida, USA',
      status: 'operational',
      dishes: 3,
      frequency: '2.2-2.3 GHz',
      dataRate: 150.7, // Mbps
      elevation: 45.3, // degrees
      nextPass: '14:32 UTC'
    },
    {
      id: 'JSC-TX',
      name: 'Johnson Space Center',
      location: 'Houston, USA',
      status: 'operational',
      dishes: 4,
      frequency: '2.0-2.1 GHz',
      dataRate: 89.4,
      elevation: 67.8,
      nextPass: '15:45 UTC'
    },
    {
      id: 'DSN-CA',
      name: 'Deep Space Network',
      location: 'Goldstone, USA',
      status: 'operational',
      dishes: 1,
      frequency: '8.4-8.5 GHz',
      dataRate: 512.3,
      elevation: 23.7,
      nextPass: '16:12 UTC'
    },
    {
      id: 'ESA-SP',
      name: 'Cebreros Station',
      location: 'Spain',
      status: 'maintenance',
      dishes: 1,
      frequency: '8.4 GHz',
      dataRate: 0,
      elevation: 0,
      nextPass: 'Maintenance'
    }
  ]);

  const [flightControllers, setFlightControllers] = useState([
    {
      position: 'Flight Director',
      name: 'Sarah Mitchell',
      status: 'on-console',
      shift: 'Orbit 1',
      responsibility: 'Overall mission command',
      experience: '15 years'
    },
    {
      position: 'CAPCOM',
      name: 'Marcus Chen',
      status: 'on-console',
      shift: 'Orbit 1',
      responsibility: 'Crew communication',
      experience: '8 years'
    },
    {
      position: 'EECOM',
      name: 'Lisa Rodriguez',
      status: 'on-console',
      shift: 'Orbit 1',
      responsibility: 'Electrical & Environmental',
      experience: '12 years'
    },
    {
      position: 'GNC',
      name: 'David Park',
      status: 'monitoring',
      shift: 'Orbit 1',
      responsibility: 'Guidance Navigation Control',
      experience: '10 years'
    },
    {
      position: 'SURGEON',
      name: 'Dr. Amanda Foster',
      status: 'on-call',
      shift: 'Orbit 1',
      responsibility: 'Crew medical monitoring',
      experience: '20 years'
    }
  ]);

  const [orbitalMetrics, setOrbitalMetrics] = useState({
    totalOrbits: 156847,
    orbitsToday: 15,
    averageAltitude: 408.7,
    perigee: 406.2,
    apogee: 411.3,
    inclination: 51.64, // degrees
    orbitalPeriod: 92.8, // minutes
    groundTrackVelocity: 7.66 // km/s
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update mission status
      setMissionStatus(prev => ({
        ...prev,
        dataDownlinkRate: Math.max(1.5, Math.min(4.0, prev.dataDownlinkRate + (Math.random() - 0.5) * 0.1)),
        missionUptime: Math.max(99.8, Math.min(100, prev.missionUptime + (Math.random() - 0.3) * 0.01))
      }));

      // Update active missions
      setActiveMissions(prev => prev.map(mission => {
        if (mission.status === 'nominal' || mission.status === 'cruise') {
          return {
            ...mission,
            altitude: mission.id === 'EUROPA-CLIP' ? mission.altitude + Math.random() * 1000 :
                     Math.max(380, Math.min(420, mission.altitude + (Math.random() - 0.5) * 0.5)),
            velocity: Math.max(25000, Math.min(29000, mission.velocity + (Math.random() - 0.5) * 10)),
            nextOrbit: mission.nextOrbit > 0 ? Math.max(85, Math.min(95, mission.nextOrbit + (Math.random() - 0.5) * 0.2)) : 0,
            lastComm: Math.random() > 0.8 ? new Date() : mission.lastComm
          };
        }
        return mission;
      }));

      // Update spacecraft systems
      setSpacecraft(prev => prev.map(craft => {
        if (craft.status === 'nominal' || craft.status === 'cruise') {
          return {
            ...craft,
            power: craft.type === 'probe' ? Math.max(10, Math.min(15, craft.power + (Math.random() - 0.5) * 0.5)) :
                   Math.max(60, Math.min(90, craft.power + (Math.random() - 0.5) * 2)),
            temperature: craft.type === 'probe' ? craft.temperature + (Math.random() - 0.5) * 0.1 :
                        Math.max(18, Math.min(25, craft.temperature + (Math.random() - 0.5) * 0.3)),
            pressure: craft.status !== 'prelaunch' ? Math.max(85, Math.min(105, craft.pressure + (Math.random() - 0.5) * 1)) : craft.pressure,
            co2Level: Math.max(0.1, Math.min(0.5, craft.co2Level + (Math.random() - 0.5) * 0.02)),
            oxygen: Math.max(20.5, Math.min(21.2, craft.oxygen + (Math.random() - 0.5) * 0.05))
          };
        }
        return craft;
      }));

      // Update telemetry data
      const currentISS = activeMissions.find(m => m.id === 'ISS-EXP70');
      if (currentISS) {
        const newTelemetry = {
          time: new Date().toLocaleTimeString(),
          altitude: currentISS.altitude,
          velocity: currentISS.velocity,
          power: spacecraft.find(s => s.id === 'ISS')?.power || 84.7,
          temp: spacecraft.find(s => s.id === 'ISS')?.temperature || 21.3
        };
        
        setTelemetryData(prev => [...prev.slice(1), newTelemetry]);
      }

      // Update ground stations
      setGroundStations(prev => prev.map(station => {
        if (station.status === 'operational') {
          return {
            ...station,
            dataRate: Math.max(50, Math.min(600, station.dataRate + (Math.random() - 0.5) * 20)),
            elevation: Math.max(5, Math.min(90, station.elevation + (Math.random() - 0.5) * 2))
          };
        }
        return station;
      }));

      // Occasionally add new mission alerts
      if (Math.random() > 0.97) {
        const alertSeverities = ['nominal', 'advisory', 'caution', 'warning'];
        const systems = ['Environmental Control', 'Power Systems', 'Communication', 'Guidance', 'Propulsion'];
        const missions = activeMissions.map(m => m.name);
        
        const newAlert = {
          id: `ALERT-${Date.now()}`,
          severity: alertSeverities[Math.floor(Math.random() * alertSeverities.length)],
          mission: missions[Math.floor(Math.random() * missions.length)],
          system: systems[Math.floor(Math.random() * systems.length)],
          message: 'Real-time mission monitoring alert',
          timestamp: new Date(),
          status: 'active',
          flight: 'Flight team investigating'
        };
        
        setMissionAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeMissions, spacecraft]);

  const getMissionStatusColor = (status) => {
    switch (status) {
      case 'nominal': return '#10B981';
      case 'caution': return '#F59E0B';
      case 'warning': return '#EF4444';
      case 'prelaunch': return '#3B82F6';
      case 'cruise': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'nominal': return '#10B981';
      case 'advisory': return '#3B82F6';
      case 'caution': return '#F59E0B';
      case 'warning': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getControllerStatusColor = (status) => {
    switch (status) {
      case 'on-console': return '#10B981';
      case 'monitoring': return '#3B82F6';
      case 'on-call': return '#F59E0B';
      case 'off-shift': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getSpacecraftIcon = (type) => {
    switch (type) {
      case 'station': return <Globe className="w-4 h-4" />;
      case 'capsule': return <Rocket className="w-4 h-4" />;
      case 'vehicle': return <Rocket className="w-4 h-4" />;
      case 'probe': return <Satellite className="w-4 h-4" />;
      default: return <Rocket className="w-4 h-4" />;
    }
  };

  const missionTypeDistribution = [
    { name: 'Human Spaceflight', value: 40, color: '#3B82F6' },
    { name: 'Robotic Missions', value: 30, color: '#10B981' },
    { name: 'Satellite Operations', value: 20, color: '#8B5CF6' },
    { name: 'Deep Space', value: 10, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Rocket className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">SPACE MISSION CONTROL CENTER</h1>
            <p className="text-gray-400">24/7 human spaceflight operations, real-time spacecraft monitoring, and mission management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{missionStatus.activeMissions}</div>
            <div className="text-xs text-gray-400">ACTIVE MISSIONS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{missionStatus.crewOnboard}</div>
            <div className="text-xs text-gray-400">CREW ONBOARD</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{missionStatus.missionUptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">MISSION UPTIME</div>
          </div>
        </div>
      </div>

      {/* Mission Control KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Satellite className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">SATELLITES</span>
          </div>
          <div className="text-xl font-bold text-white">{missionStatus.satelitesOperational}</div>
          <div className="text-xs text-gray-400">Operational</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Radio className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">GROUND STATIONS</span>
          </div>
          <div className="text-xl font-bold text-white">{missionStatus.groundStations}</div>
          <div className="text-xs text-gray-400">Worldwide</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">DOWNLINK</span>
          </div>
          <div className="text-xl font-bold text-white">{missionStatus.dataDownlinkRate.toFixed(2)}</div>
          <div className="text-xs text-gray-400">Gbps</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Navigation className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">ALTITUDE</span>
          </div>
          <div className="text-xl font-bold text-white">{orbitalMetrics.averageAltitude.toFixed(1)}</div>
          <div className="text-xs text-gray-400">km (ISS)</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">VELOCITY</span>
          </div>
          <div className="text-xl font-bold text-white">{(activeMissions.find(m => m.id === 'ISS-EXP70')?.velocity || 27580).toFixed(0)}</div>
          <div className="text-xs text-gray-400">km/h</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">ORBIT PERIOD</span>
          </div>
          <div className="text-xl font-bold text-white">{orbitalMetrics.orbitalPeriod.toFixed(1)}</div>
          <div className="text-xs text-gray-400">minutes</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Active Missions */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Rocket className="w-5 h-5 mr-2 text-blue-400" />
            ACTIVE MISSIONS
          </h3>
          <div className="space-y-3">
            {activeMissions.map(mission => (
              <div key={mission.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getMissionStatusColor(mission.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{mission.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getMissionStatusColor(mission.status)}20`, 
                      color: getMissionStatusColor(mission.status) 
                    }}>
                      {mission.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">T{mission.missionDay >= 0 ? '+' : ''}{mission.missionDay}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Crew</span>
                    <span className="text-white">{mission.crew}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Altitude</span>
                    <span className="text-blue-400">
                      {mission.altitude > 1000 ? `${(mission.altitude / 1000).toFixed(0)}K km` : `${mission.altitude.toFixed(1)} km`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Velocity</span>
                    <span className="text-green-400">{mission.velocity.toFixed(0)} km/h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Next Orbit</span>
                    <span className="text-purple-400">{mission.nextOrbit > 0 ? `${mission.nextOrbit.toFixed(1)}m` : 'N/A'}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">{mission.priority.toUpperCase()} PRIORITY</span>
                  <span className="text-gray-500">Last Comm: {mission.lastComm.toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacecraft Systems */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 mr-2 text-green-400" />
            SPACECRAFT SYSTEMS
          </h3>
          <div className="space-y-3">
            {spacecraft.map(craft => (
              <div key={craft.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getMissionStatusColor(craft.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getSpacecraftIcon(craft.type)}
                    <span className="text-white font-medium text-sm">{craft.name}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getMissionStatusColor(craft.status)}20`, 
                    color: getMissionStatusColor(craft.status) 
                  }}>
                    {craft.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Power</span>
                    <span className="text-green-400">{craft.power.toFixed(1)} kW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temp</span>
                    <span className="text-blue-400">{craft.temperature.toFixed(1)}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Pressure</span>
                    <span className="text-white">{craft.pressure.toFixed(1)} kPa</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">O2</span>
                    <span className="text-purple-400">{craft.oxygen.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{craft.systems}</span>
                  <span className="text-gray-400">Crew: {craft.crew}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            MISSION ALERTS
          </h3>
          <div className="space-y-3">
            {missionAlerts.map(alert => (
              <div key={alert.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{alert.system}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'monitoring' ? 'bg-yellow-900 text-yellow-400' :
                      alert.status === 'resolved' ? 'bg-green-900 text-green-400' : 'bg-blue-900 text-blue-400'
                    }`}>
                      {alert.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mb-2">{alert.message}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{alert.mission}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">{alert.flight}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Flight Controllers */}
          <div className="mt-4 pt-3 border-t border-gray-700">
            <div className="text-sm text-white font-semibold mb-2">Flight Control Team</div>
            <div className="space-y-1 text-xs">
              {flightControllers.slice(0, 3).map((controller, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-400">{controller.position}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white">{controller.name}</span>
                    <span 
                      className="w-2 h-2 rounded-full" 
                      style={{ backgroundColor: getControllerStatusColor(controller.status) }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Analytics Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* ISS Telemetry */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">ISS REAL-TIME TELEMETRY</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={telemetryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="altitude" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Altitude (km)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="power" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Power (kW)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="temp" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Temperature (°C)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Mission Distribution & Ground Network */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">MISSION TYPE DISTRIBUTION & GROUND NETWORK</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={missionTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {missionTypeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Mission Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {missionTypeDistribution.map((mission, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: mission.color }}
                    />
                    <span className="text-gray-400 text-sm">{mission.name}</span>
                  </div>
                  <span className="text-white font-semibold">{mission.value}%</span>
                </div>
              ))}
              
              {/* Ground Station Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Ground Stations</div>
                <div className="space-y-1 text-xs">
                  {groundStations.slice(0, 3).map((station, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-400">{station.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-400">{station.dataRate.toFixed(0)} Mbps</span>
                        <span 
                          className="w-2 h-2 rounded-full" 
                          style={{ backgroundColor: getMissionStatusColor(station.status === 'operational' ? 'nominal' : 'caution') }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mission Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Mission Control Operations</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Radio className="w-3 h-3 inline mr-1" />
                  CAPCOM
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Target className="w-3 h-3 inline mr-1" />
                  Flight Plan
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Telemetry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceMissionControlCenter;