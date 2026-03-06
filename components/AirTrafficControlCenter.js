import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Plane, Radar, Radio, Navigation, MapPin, Clock, AlertTriangle, CheckCircle, Zap, Activity, Eye, Target } from 'lucide-react';

const AirTrafficControlCenter = () => {
  const [atcStatus, setAtcStatus] = useState({
    totalAircraft: 2847,
    activeFlights: 1247,
    controlledAirspace: 89.7, // percentage
    delayedFlights: 23,
    averageDelay: 8.4, // minutes
    weatherImpact: 'low',
    systemUptime: 99.97,
    communicationChannels: 24
  });

  const [activeAircraft, setActiveAircraft] = useState([
    {
      id: 'UAL1847',
      callsign: 'United 1847',
      aircraft: 'Boeing 737-800',
      origin: 'LAX',
      destination: 'SFO',
      altitude: 37000, // feet
      speed: 478, // knots
      heading: 315, // degrees
      status: 'en-route',
      eta: '14:32',
      fuel: 3.2, // hours
      souls: 167,
      sector: 'ZLA-42'
    },
    {
      id: 'DAL2156',
      callsign: 'Delta 2156',
      aircraft: 'Airbus A320',
      origin: 'DEN',
      destination: 'LAX',
      altitude: 12000,
      speed: 245,
      heading: 245,
      status: 'approach',
      eta: '13:45',
      fuel: 2.1,
      souls: 152,
      sector: 'ZLA-18'
    },
    {
      id: 'SWA1234',
      callsign: 'Southwest 1234',
      aircraft: 'Boeing 737-700',
      origin: 'LAS',
      destination: 'LAX',
      altitude: 2500,
      speed: 180,
      heading: 200,
      status: 'landing',
      eta: '13:28',
      fuel: 1.8,
      souls: 142,
      sector: 'LAX-TWR'
    },
    {
      id: 'AAL789',
      callsign: 'American 789',
      aircraft: 'Boeing 777-300',
      origin: 'JFK',
      destination: 'LAX',
      altitude: 39000,
      speed: 512,
      heading: 275,
      status: 'cruise',
      eta: '16:15',
      fuel: 5.7,
      souls: 298,
      sector: 'ZDV-21'
    },
    {
      id: 'JBU567',
      callsign: 'JetBlue 567',
      aircraft: 'Airbus A321',
      origin: 'BOS',
      destination: 'LAX',
      altitude: 8000,
      speed: 210,
      heading: 90,
      status: 'departure',
      eta: '17:22',
      fuel: 4.3,
      souls: 189,
      sector: 'BOS-DEP'
    }
  ]);

  const [controlSectors, setControlSectors] = useState([
    {
      id: 'ZLA-42',
      name: 'Los Angeles High',
      controller: 'ATC Johnson',
      aircraft: 18,
      status: 'normal',
      frequency: '127.350',
      altitudeRange: '24,000 - 40,000',
      workload: 'medium',
      weather: 'clear'
    },
    {
      id: 'ZLA-18',
      name: 'Los Angeles Approach',
      controller: 'ATC Martinez',
      aircraft: 23,
      status: 'busy',
      frequency: '124.900',
      altitudeRange: '5,000 - 18,000',
      workload: 'high',
      weather: 'clear'
    },
    {
      id: 'LAX-TWR',
      name: 'LAX Tower',
      controller: 'ATC Williams',
      aircraft: 12,
      status: 'normal',
      frequency: '120.950',
      altitudeRange: 'Surface - 5,000',
      workload: 'medium',
      weather: 'light winds'
    },
    {
      id: 'LAX-GND',
      name: 'LAX Ground',
      controller: 'ATC Davis',
      aircraft: 15,
      status: 'normal',
      frequency: '121.750',
      altitudeRange: 'Surface',
      workload: 'low',
      weather: 'clear'
    },
    {
      id: 'ZDV-21',
      name: 'Denver Center',
      controller: 'ATC Thompson',
      aircraft: 32,
      status: 'busy',
      frequency: '135.750',
      altitudeRange: '20,000 - 45,000',
      workload: 'high',
      weather: 'thunderstorms'
    }
  ]);

  const [trafficFlow, setTrafficFlow] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      arrivals: 28,
      departures: 24,
      overflights: 45,
      total: 97
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      arrivals: 31,
      departures: 27,
      overflights: 42,
      total: 100
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      arrivals: 29,
      departures: 25,
      overflights: 48,
      total: 102
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      arrivals: 33,
      departures: 30,
      overflights: 44,
      total: 107
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      arrivals: 35,
      departures: 32,
      overflights: 46,
      total: 113
    },
    {
      time: new Date().toLocaleTimeString(),
      arrivals: 32,
      departures: 28,
      overflights: 49,
      total: 109
    }
  ]);

  const [atcAlerts, setAtcAlerts] = useState([
    {
      id: 'ATC-001',
      severity: 'warning',
      type: 'Weather Alert',
      message: 'Thunderstorms developing in ZDV-21 sector - expect delays',
      timestamp: new Date(),
      status: 'active',
      sector: 'ZDV-21',
      affected: 8
    },
    {
      id: 'ATC-002',
      severity: 'caution',
      type: 'Traffic Volume',
      message: 'High traffic volume in LAX approach sector',
      timestamp: new Date(Date.now() - 180000),
      status: 'monitoring',
      sector: 'ZLA-18',
      affected: 23
    },
    {
      id: 'ATC-003',
      severity: 'info',
      type: 'System Update',
      message: 'ADS-B surveillance system operating nominally',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      sector: 'All',
      affected: 0
    }
  ]);

  const [weatherConditions, setWeatherConditions] = useState([
    {
      airport: 'LAX',
      conditions: 'Clear',
      visibility: '10+ miles',
      winds: '250/08',
      temperature: 72,
      pressure: 30.12,
      status: 'green'
    },
    {
      airport: 'SFO',
      conditions: 'Light Fog',
      visibility: '3 miles',
      winds: '280/15G25',
      temperature: 58,
      pressure: 30.05,
      status: 'yellow'
    },
    {
      airport: 'DEN',
      conditions: 'Thunderstorms',
      visibility: '5 miles',
      winds: '190/22G35',
      temperature: 65,
      pressure: 29.95,
      status: 'red'
    },
    {
      airport: 'JFK',
      conditions: 'Partly Cloudy',
      visibility: '8 miles',
      winds: '310/12',
      temperature: 68,
      pressure: 30.08,
      status: 'green'
    }
  ]);

  const [atcControllers, setAtcControllers] = useState([
    {
      position: 'Facility Manager',
      name: 'Manager Sarah Chen',
      status: 'on-duty',
      shift: 'Day Shift',
      sector: 'Operations',
      experience: '22 years'
    },
    {
      position: 'Approach Control',
      name: 'Controller Martinez',
      status: 'on-duty',
      shift: 'Day Shift',
      sector: 'ZLA-18',
      experience: '14 years'
    },
    {
      position: 'Tower Control',
      name: 'Controller Williams',
      status: 'on-duty',
      shift: 'Day Shift',
      sector: 'LAX-TWR',
      experience: '18 years'
    },
    {
      position: 'Ground Control',
      name: 'Controller Davis',
      status: 'on-duty',
      shift: 'Day Shift',
      sector: 'LAX-GND',
      experience: '12 years'
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    radarCoverage: 99.8, // percentage
    communicationReliability: 99.95,
    navigationAccuracy: 99.92,
    automationLevel: 87.3,
    conflictAlerts: 0,
    separationViolations: 0,
    handoffSuccessRate: 99.97,
    dataLinkOperational: 98.4
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update ATC status
      setAtcStatus(prev => ({
        ...prev,
        activeFlights: Math.max(1000, Math.min(1500, prev.activeFlights + Math.floor((Math.random() - 0.5) * 20))),
        delayedFlights: Math.max(10, Math.min(50, prev.delayedFlights + Math.floor((Math.random() - 0.5) * 5))),
        averageDelay: Math.max(5, Math.min(25, prev.averageDelay + (Math.random() - 0.5) * 2)),
        controlledAirspace: Math.max(85, Math.min(95, prev.controlledAirspace + (Math.random() - 0.5) * 1)),
        systemUptime: Math.max(99.5, Math.min(100, prev.systemUptime + (Math.random() - 0.3) * 0.01))
      }));

      // Update active aircraft
      setActiveAircraft(prev => prev.map(aircraft => {
        const newAltitude = aircraft.status === 'approach' || aircraft.status === 'landing' ? 
          Math.max(0, aircraft.altitude - Math.random() * 1000) :
          aircraft.status === 'departure' ?
          Math.min(40000, aircraft.altitude + Math.random() * 2000) :
          aircraft.altitude + (Math.random() - 0.5) * 500;

        return {
          ...aircraft,
          altitude: Math.max(0, Math.min(45000, newAltitude)),
          speed: Math.max(150, Math.min(580, aircraft.speed + (Math.random() - 0.5) * 20)),
          heading: (aircraft.heading + (Math.random() - 0.5) * 10) % 360,
          fuel: Math.max(0.5, aircraft.fuel - 0.02)
        };
      }));

      // Update control sectors
      setControlSectors(prev => prev.map(sector => {
        const workloadLevels = ['low', 'medium', 'high'];
        return {
          ...sector,
          aircraft: Math.max(5, Math.min(40, sector.aircraft + Math.floor((Math.random() - 0.5) * 3))),
          workload: Math.random() > 0.8 ? workloadLevels[Math.floor(Math.random() * workloadLevels.length)] : sector.workload
        };
      }));

      // Update traffic flow
      const newTrafficData = {
        time: new Date().toLocaleTimeString(),
        arrivals: 25 + Math.floor(Math.random() * 15),
        departures: 20 + Math.floor(Math.random() * 15),
        overflights: 40 + Math.floor(Math.random() * 15),
        total: 0
      };
      newTrafficData.total = newTrafficData.arrivals + newTrafficData.departures + newTrafficData.overflights;
      
      setTrafficFlow(prev => [...prev.slice(1), newTrafficData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        radarCoverage: Math.max(98, Math.min(100, prev.radarCoverage + (Math.random() - 0.5) * 0.1)),
        communicationReliability: Math.max(99, Math.min(100, prev.communicationReliability + (Math.random() - 0.5) * 0.05)),
        navigationAccuracy: Math.max(99, Math.min(100, prev.navigationAccuracy + (Math.random() - 0.5) * 0.05)),
        automationLevel: Math.max(80, Math.min(95, prev.automationLevel + (Math.random() - 0.5) * 1))
      }));

      // Occasionally add new ATC alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['Weather Alert', 'Traffic Volume', 'System Update', 'Equipment Status'];
        const severities = ['info', 'caution', 'warning', 'critical'];
        const sectors = controlSectors.map(s => s.id);
        
        const newAlert = {
          id: `ATC-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time air traffic control alert',
          timestamp: new Date(),
          status: 'active',
          sector: sectors[Math.floor(Math.random() * sectors.length)],
          affected: Math.floor(Math.random() * 20)
        };
        
        setAtcAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [controlSectors]);

  const getAircraftStatusColor = (status) => {
    switch (status) {
      case 'cruise': return '#10B981';
      case 'en-route': return '#3B82F6';
      case 'approach': return '#F59E0B';
      case 'landing': return '#EF4444';
      case 'departure': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getSectorStatusColor = (status) => {
    switch (status) {
      case 'normal': return '#10B981';
      case 'busy': return '#F59E0B';
      case 'critical': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getWorkloadColor = (workload) => {
    switch (workload) {
      case 'low': return '#10B981';
      case 'medium': return '#F59E0B';
      case 'high': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getWeatherStatusColor = (status) => {
    switch (status) {
      case 'green': return '#10B981';
      case 'yellow': return '#F59E0B';
      case 'red': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'caution': return '#3B82F6';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const aircraftTypeDistribution = [
    { name: 'Boeing 737', value: 28, color: '#3B82F6' },
    { name: 'Airbus A320', value: 25, color: '#10B981' },
    { name: 'Boeing 777', value: 18, color: '#8B5CF6' },
    { name: 'Airbus A330', value: 15, color: '#F59E0B' },
    { name: 'Other', value: 14, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Radar className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">AIR TRAFFIC CONTROL CENTER</h1>
            <p className="text-gray-400">24/7 aviation operations, real-time aircraft monitoring, and strategic airspace management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{atcStatus.activeFlights.toLocaleString()}</div>
            <div className="text-xs text-gray-400">ACTIVE FLIGHTS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{atcStatus.controlledAirspace.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">AIRSPACE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{atcStatus.systemUptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">UPTIME</div>
          </div>
        </div>
      </div>

      {/* ATC System KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Plane className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">TOTAL AIRCRAFT</span>
          </div>
          <div className="text-xl font-bold text-white">{atcStatus.totalAircraft.toLocaleString()}</div>
          <div className="text-xs text-gray-400">In System</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">DELAYED</span>
          </div>
          <div className="text-xl font-bold text-white">{atcStatus.delayedFlights}</div>
          <div className="text-xs text-gray-400">Flights</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">AVG DELAY</span>
          </div>
          <div className="text-xl font-bold text-white">{atcStatus.averageDelay.toFixed(1)}</div>
          <div className="text-xs text-gray-400">Minutes</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Radio className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">COMM CHANNELS</span>
          </div>
          <div className="text-xl font-bold text-white">{atcStatus.communicationChannels}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">RADAR</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.radarCoverage.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Coverage</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Navigation className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">WEATHER</span>
          </div>
          <div className="text-xl font-bold text-white">{atcStatus.weatherImpact.toUpperCase()}</div>
          <div className="text-xs text-gray-400">Impact</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Active Aircraft */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Plane className="w-5 h-5 mr-2 text-blue-400" />
            ACTIVE AIRCRAFT
          </h3>
          <div className="space-y-3">
            {activeAircraft.map(aircraft => (
              <div key={aircraft.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getAircraftStatusColor(aircraft.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{aircraft.callsign}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getAircraftStatusColor(aircraft.status)}20`, 
                      color: getAircraftStatusColor(aircraft.status) 
                    }}>
                      {aircraft.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{aircraft.aircraft.split(' ')[1]}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">{aircraft.origin} → {aircraft.destination}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Altitude</span>
                    <span className="text-blue-400">{aircraft.altitude.toLocaleString()}'</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Speed</span>
                    <span className="text-green-400">{aircraft.speed.toFixed(0)} kts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Heading</span>
                    <span className="text-white">{aircraft.heading.toFixed(0)}°</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ETA</span>
                    <span className="text-purple-400">{aircraft.eta}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Sector: {aircraft.sector}</span>
                  <span className="text-gray-400">SOB: {aircraft.souls}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Sectors */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-green-400" />
            CONTROL SECTORS
          </h3>
          <div className="space-y-3">
            {controlSectors.map(sector => (
              <div key={sector.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getSectorStatusColor(sector.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{sector.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getSectorStatusColor(sector.status)}20`, 
                      color: getSectorStatusColor(sector.status) 
                    }}>
                      {sector.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{sector.aircraft} A/C</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Controller: <span className="text-blue-400">{sector.controller}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Frequency</span>
                    <span className="text-green-400">{sector.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Workload</span>
                    <span style={{color: getWorkloadColor(sector.workload)}}>{sector.workload.toUpperCase()}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  Altitude: <span className="text-white">{sector.altitudeRange}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">Weather: {sector.weather}</span>
                  <span className="text-gray-500">{sector.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            WEATHER & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {weatherConditions.map((weather, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{weather.airport}</span>
                  <span 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: getWeatherStatusColor(weather.status) }}
                  />
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{weather.conditions}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Visibility</span>
                    <span className="text-blue-400">{weather.visibility}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Winds</span>
                    <span className="text-green-400">{weather.winds}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ATC Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">ATC Alerts</div>
            <div className="space-y-2">
              {atcAlerts.slice(0, 3).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.sector}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Air Traffic Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Traffic Flow */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME TRAFFIC FLOW</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={trafficFlow}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="arrivals" 
                stackId="1"
                stroke="#3B82F6" 
                fill="#3B82F6"
                fillOpacity={0.6}
                name="Arrivals"
              />
              <Area 
                type="monotone" 
                dataKey="departures" 
                stackId="1"
                stroke="#10B981" 
                fill="#10B981"
                fillOpacity={0.6}
                name="Departures"
              />
              <Area 
                type="monotone" 
                dataKey="overflights" 
                stackId="1"
                stroke="#8B5CF6" 
                fill="#8B5CF6"
                fillOpacity={0.6}
                name="Overflights"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Aircraft Fleet Analysis & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">FLEET ANALYSIS & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={aircraftTypeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {aircraftTypeDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Fleet Composition']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {aircraftTypeDistribution.map((aircraft, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: aircraft.color }}
                    />
                    <span className="text-gray-400 text-sm">{aircraft.name}</span>
                  </div>
                  <span className="text-white font-semibold">{aircraft.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Navigation Accuracy</span>
                    <span className="text-green-400">{systemMetrics.navigationAccuracy.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Automation Level</span>
                    <span className="text-blue-400">{systemMetrics.automationLevel.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Handoff Success</span>
                    <span className="text-green-400">{systemMetrics.handoffSuccessRate.toFixed(2)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* ATC Command Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Air Traffic Control Operations</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Radar className="w-3 h-3 inline mr-1" />
                  Radar Display
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Radio className="w-3 h-3 inline mr-1" />
                  Frequency Mgmt
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Flight Tracking
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirTrafficControlCenter;