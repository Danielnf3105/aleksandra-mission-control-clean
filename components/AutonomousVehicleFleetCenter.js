// Autonomous Vehicle Fleet Management Center - 2026 Robotaxi & FSD Monitoring
// Based on Waymo, Tesla, Cruise autonomous fleet operations and safety standards
import { useState, useEffect } from 'react';
import { 
  Car, Navigation, Shield, AlertTriangle, CheckCircle, Clock, Info,
  Target, Activity, Settings, RefreshCw, Eye, Search, Play, Pause,
  StopCircle, ArrowRight, ArrowLeft, Minus, Plus, Brain, Users,
  MapPin, Radar, Navigation as RouteIcon, Gauge, Monitor, Server, Network, Globe,
  Zap, BarChart3, TrendingUp, TrendingDown, Package, Terminal,
  Database, HardDrive, Cpu, MemoryStick, Layers, FileCode, Crosshair
} from 'lucide-react';

export default function AutonomousVehicleFleetCenter() {
  const [fleetData, setFleetData] = useState({
    currentTime: new Date().toISOString(),
    overallSafetyScore: 98.7,
    totalAutonomousMiles: 174500000, // 174.5M miles
    fleetSize: 4287,
    activeVehicles: 3894,
    safetyIncidents: 0, // serious crashes
    fleetProviders: [
      {
        name: 'Waymo',
        fleetSize: 2500,
        activeVehicles: 2234,
        autonomousMiles: 98600000,
        safetyScore: 99.2,
        avgSpeed: 23.4, // mph
        utilization: 89.4, // %
        status: 'OPERATIONAL',
        cities: ['San Francisco', 'Phoenix', 'Los Angeles'],
        incidentsThisMonth: 0,
        rideRequests: 45678,
        avgWaitTime: 4.2 // minutes
      },
      {
        name: 'Tesla Robotaxi',
        fleetSize: 1200,
        activeVehicles: 1087,
        autonomousMiles: 45600000,
        safetyScore: 97.8,
        avgSpeed: 28.7,
        utilization: 90.6,
        status: 'OPERATIONAL',
        cities: ['Austin', 'San Francisco'],
        incidentsThisMonth: 5,
        rideRequests: 23456,
        avgWaitTime: 6.8
      },
      {
        name: 'Cruise',
        fleetSize: 400,
        activeVehicles: 312,
        autonomousMiles: 18700000,
        safetyScore: 94.6,
        avgSpeed: 19.8,
        utilization: 78.0,
        status: 'LIMITED',
        cities: ['San Francisco'],
        incidentsThisMonth: 2,
        rideRequests: 8945,
        avgWaitTime: 8.3
      },
      {
        name: 'Zoox',
        fleetSize: 187,
        activeVehicles: 156,
        autonomousMiles: 11600000,
        safetyScore: 96.1,
        avgSpeed: 15.2,
        utilization: 83.4,
        status: 'TESTING',
        cities: ['Las Vegas', 'Foster City'],
        incidentsThisMonth: 1,
        rideRequests: 3567,
        avgWaitTime: 12.1
      }
    ],
    currentRides: [
      {
        id: 'ride-sf-001',
        provider: 'Waymo',
        vehicle: 'WMX-7742',
        pickup: 'Mission District, SF',
        destination: 'Financial District, SF',
        passengerCount: 2,
        startTime: '15:01',
        estimatedArrival: '15:23',
        progress: 67,
        speed: 24.3,
        safetyStatus: 'NORMAL',
        autonomyLevel: 'L4'
      },
      {
        id: 'ride-aus-002',
        provider: 'Tesla Robotaxi',
        vehicle: 'TX-8934',
        pickup: 'South Austin',
        destination: 'Downtown Austin',
        passengerCount: 1,
        startTime: '15:08',
        estimatedArrival: '15:31',
        progress: 34,
        speed: 31.7,
        safetyStatus: 'NORMAL',
        autonomyLevel: 'L4+'
      },
      {
        id: 'ride-phx-003',
        provider: 'Waymo',
        vehicle: 'WMX-4521',
        pickup: 'Chandler Mall',
        destination: 'Sky Harbor Airport',
        passengerCount: 3,
        startTime: '14:55',
        estimatedArrival: '15:19',
        progress: 89,
        speed: 18.9,
        safetyStatus: 'CAUTION',
        autonomyLevel: 'L4'
      }
    ],
    safetyEvents: [
      {
        timestamp: '15:02',
        severity: 'LOW',
        provider: 'Tesla Robotaxi',
        vehicle: 'TX-2847',
        location: 'Austin, TX',
        event: 'Sudden brake activation',
        cause: 'Pedestrian proximity detection',
        response: 'Vehicle stopped, resumed safely',
        passengersAffected: 2,
        status: 'RESOLVED'
      },
      {
        timestamp: '14:57',
        severity: 'MEDIUM',
        provider: 'Cruise',
        vehicle: 'CR-1094',
        location: 'San Francisco, CA',
        event: 'Disengagement requested',
        cause: 'Complex construction zone',
        response: 'Remote operator assistance',
        passengersAffected: 1,
        status: 'RESOLVED'
      },
      {
        timestamp: '14:43',
        severity: 'LOW',
        provider: 'Waymo',
        vehicle: 'WMX-9876',
        location: 'Phoenix, AZ',
        event: 'Route recalculation',
        cause: 'Real-time traffic optimization',
        response: 'Alternative path selected',
        passengersAffected: 3,
        status: 'NORMAL'
      }
    ],
    performanceMetrics: [
      {
        metric: 'Miles Between Disengagements',
        value: 34567,
        unit: 'miles',
        trend: 'improving',
        target: 50000
      },
      {
        metric: 'Safety Score',
        value: 98.7,
        unit: '%',
        trend: 'stable',
        target: 99.0
      },
      {
        metric: 'Fleet Utilization',
        value: 87.2,
        unit: '%',
        trend: 'improving',
        target: 90.0
      },
      {
        metric: 'Average Wait Time',
        value: 6.4,
        unit: 'min',
        trend: 'declining',
        target: 5.0
      }
    ],
    cityOperations: [
      {
        city: 'San Francisco',
        activeVehicles: 1456,
        totalRides: 23678,
        avgWaitTime: 5.2,
        safetyScore: 97.9,
        weatherCondition: 'Foggy',
        trafficLevel: 'Heavy',
        operationalStatus: 'FULL'
      },
      {
        city: 'Phoenix',
        activeVehicles: 892,
        totalRides: 12456,
        avgWaitTime: 3.8,
        safetyScore: 99.1,
        weatherCondition: 'Clear',
        trafficLevel: 'Light',
        operationalStatus: 'FULL'
      },
      {
        city: 'Austin',
        activeVehicles: 678,
        totalRides: 8934,
        avgWaitTime: 7.1,
        safetyScore: 98.3,
        weatherCondition: 'Partly Cloudy',
        trafficLevel: 'Medium',
        operationalStatus: 'FULL'
      },
      {
        city: 'Los Angeles',
        activeVehicles: 534,
        totalRides: 6789,
        avgWaitTime: 8.7,
        safetyScore: 96.5,
        weatherCondition: 'Smoggy',
        trafficLevel: 'Heavy',
        operationalStatus: 'LIMITED'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFleetData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        overallSafetyScore: Math.max(95, Math.min(99.5, prev.overallSafetyScore + (Math.random() - 0.5) * 0.1)),
        totalAutonomousMiles: prev.totalAutonomousMiles + Math.floor(Math.random() * 1000),
        activeVehicles: Math.max(3500, Math.min(4200, prev.activeVehicles + Math.floor((Math.random() - 0.5) * 20))),
        performanceMetrics: prev.performanceMetrics?.map(metric => ({
          ...metric,
          value: metric?.metric === 'Average Wait Time'
            ? Math.max(4, Math.min(10, (metric?.value || 6.4) + (Math.random() - 0.6) * 0.2))
            : metric?.metric === 'Safety Score'
            ? Math.max(95, Math.min(99.5, (metric?.value || 98.7) + (Math.random() - 0.5) * 0.1))
            : metric?.metric === 'Fleet Utilization'
            ? Math.max(75, Math.min(95, (metric?.value || 87.2) + (Math.random() - 0.5) * 1))
            : Math.max(25000, Math.min(60000, (metric?.value || 34567) + Math.floor((Math.random() - 0.5) * 1000)))
        })) || prev.performanceMetrics,
        currentRides: prev.currentRides?.map(ride => ({
          ...ride,
          progress: Math.min(95, (ride?.progress || 50) + Math.floor(Math.random() * 5)),
          speed: Math.max(5, Math.min(45, (ride?.speed || 25) + (Math.random() - 0.5) * 3))
        })) || prev.currentRides
      }));
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'FULL': case 'NORMAL': case 'RESOLVED': return 'text-green-400';
      case 'LIMITED': case 'TESTING': case 'CAUTION': return 'text-yellow-400';
      case 'OFFLINE': case 'EMERGENCY': case 'CRITICAL': return 'text-red-400';
      case 'LOW': case 'MEDIUM': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'FULL': case 'NORMAL': case 'RESOLVED': return 'bg-green-400/20';
      case 'LIMITED': case 'TESTING': case 'CAUTION': return 'bg-yellow-400/20';
      case 'OFFLINE': case 'EMERGENCY': case 'CRITICAL': return 'bg-red-400/20';
      case 'LOW': case 'MEDIUM': return 'bg-blue-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-green-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getProviderIcon = (provider) => {
    const iconClass = "w-4 h-4";
    switch (provider) {
      case 'Waymo': return <Navigation className={`${iconClass} text-blue-400`} />;
      case 'Tesla Robotaxi': return <Zap className={`${iconClass} text-red-400`} />;
      case 'Cruise': return <Car className={`${iconClass} text-green-400`} />;
      case 'Zoox': return <RouteIcon className={`${iconClass} text-purple-400`} />;
      default: return <Car className={`${iconClass} text-gray-400`} />;
    }
  };

  const getSafetyScoreColor = (score) => {
    if (score >= 99) return 'text-green-400';
    if (score >= 95) return 'text-blue-400';
    if (score >= 90) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatMiles = (miles) => {
    if (miles >= 1000000) return (miles / 1000000).toFixed(1) + 'M';
    if (miles >= 1000) return (miles / 1000).toFixed(1) + 'K';
    return miles.toString();
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'Clear': return '☀️';
      case 'Partly Cloudy': return '⛅';
      case 'Foggy': return '🌫️';
      case 'Smoggy': return '🌫️';
      default: return '🌤️';
    }
  };

  const getTrafficColor = (level) => {
    switch (level) {
      case 'Light': return 'text-green-400';
      case 'Medium': return 'text-yellow-400';
      case 'Heavy': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Autonomous Fleet Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Car className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Autonomous Vehicle Fleet Management Center</h2>
              <div className="text-sm text-gray-400">Waymo • Tesla • Cruise • Zoox • Real-Time Safety Monitoring</div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">SAFETY FIRST</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Safety Score</div>
            <div className={`text-2xl font-mono font-bold ${getSafetyScoreColor(fleetData.overallSafetyScore)}`}>
              {fleetData.overallSafetyScore.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {fleetData.activeVehicles}/{fleetData.fleetSize} vehicles active
            </div>
          </div>
        </div>
        
        {/* Global Fleet Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Autonomous Miles</span>
              <RouteIcon className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {formatMiles(fleetData.totalAutonomousMiles)}<span className="text-sm text-gray-400 ml-1">miles</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-blue-400 transition-all duration-300"
                style={{ width: `${Math.min(100, (fleetData.totalAutonomousMiles / 200000000) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">lifetime total</div>
          </div>

          {fleetData.performanceMetrics.slice(0, 3).map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.unit === 'min' ? metric.value.toFixed(1) : 
                 metric.unit === '%' ? metric.value.toFixed(1) : 
                 formatNumber(metric.value)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.metric === 'Average Wait Time'
                      ? (metric.value <= metric.target ? 'bg-green-400' : 'bg-yellow-400')
                      : metric.value >= metric.target ? 'bg-green-400' : 'bg-blue-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'Average Wait Time'
                      ? `${Math.min(100, (metric.target / Math.max(metric.value, metric.target)) * 100)}%`
                      : `${Math.min(100, (metric.value / metric.target) * 100)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fleet Provider Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Navigation className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Fleet Provider Status</h3>
            <div className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-semibold rounded">
              4 PROVIDERS
            </div>
          </div>
          
          <div className="space-y-4">
            {fleetData.fleetProviders.map((provider, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getProviderIcon(provider.name)}
                    <div>
                      <h4 className="text-white font-medium">{provider.name}</h4>
                      <div className="text-xs text-gray-400">{provider.cities.join(', ')}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(provider.status)} ${getStatusBg(provider.status)}`}>
                      {provider.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Safety Score</div>
                    <div className={`text-lg font-mono ${getSafetyScoreColor(provider.safetyScore)}`}>
                      {provider.safetyScore.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Fleet Size</div>
                    <div className="text-blue-400 text-sm">{provider.fleetSize}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Active</div>
                    <div className="text-green-400 text-sm">{provider.activeVehicles}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Utilization</div>
                    <div className="text-purple-400 text-sm">{provider.utilization.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Wait Time</div>
                    <div className="text-cyan-400 text-sm">{provider.avgWaitTime.toFixed(1)}m</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div>
                    <span className="text-gray-400">Total Miles:</span>
                    <span className="text-yellow-400 ml-1">{formatMiles(provider.autonomousMiles)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Avg Speed:</span>
                    <span className="text-orange-400 ml-1">{provider.avgSpeed.toFixed(1)} mph</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Ride Requests:</span>
                    <span className="text-green-400 ml-1">{formatNumber(provider.rideRequests)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Incidents:</span>
                    <span className={provider.incidentsThisMonth > 0 ? 'text-red-400' : 'text-green-400'}>
                      {provider.incidentsThisMonth}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Autonomous Level 4+</span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        provider.status === 'OPERATIONAL' ? 'bg-green-400' :
                        provider.status === 'LIMITED' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`}
                      style={{ width: `${Math.min(100, provider.utilization)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Active Rides */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <RouteIcon className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Active Rides</h3>
          </div>
          
          <div className="space-y-3">
            {fleetData.currentRides.map((ride, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getProviderIcon(ride.provider)}
                    <span className="text-white font-medium text-sm">{ride.vehicle}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(ride.safetyStatus)} ${getStatusBg(ride.safetyStatus)}`}>
                    {ride.safetyStatus}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  <div>{ride.pickup} → {ride.destination}</div>
                  <div>{ride.passengerCount} passengers • {ride.autonomyLevel}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Started:</span>
                    <span className="text-green-400 ml-1">{ride.startTime}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">ETA:</span>
                    <span className="text-blue-400 ml-1">{ride.estimatedArrival}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Speed:</span>
                    <span className="text-purple-400 ml-1">{ride.speed.toFixed(1)} mph</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Progress:</span>
                    <span className="text-cyan-400 ml-1">{ride.progress}%</span>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      ride.safetyStatus === 'NORMAL' ? 'bg-green-400' :
                      ride.safetyStatus === 'CAUTION' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${Math.min(100, ride.progress)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Safety Events */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Safety Events</h3>
          </div>
          
          <div className="space-y-4">
            {fleetData.safetyEvents.map((event, index) => (
              <div key={index} className={`border rounded p-4 transition-all ${
                event.severity === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                event.severity === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{event.event}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">{event.timestamp}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(event.severity)} ${getStatusBg(event.severity)}`}>
                      {event.severity}
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  <div><strong>{event.provider} - {event.vehicle}</strong></div>
                  <div>{event.location}</div>
                </div>
                
                <div className="text-sm mb-2">
                  <div className="text-blue-400 mb-1"><strong>Cause:</strong> {event.cause}</div>
                  <div className="text-green-400"><strong>Response:</strong> {event.response}</div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">
                    Passengers: <span className="text-purple-400">{event.passengersAffected}</span>
                  </span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(event.status)} ${getStatusBg(event.status)}`}>
                    {event.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* City Operations */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">City Operations</h3>
          </div>
          
          <div className="space-y-4">
            {fleetData.cityOperations.map((city, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{city.city}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getWeatherIcon(city.weatherCondition)}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(city.operationalStatus)} ${getStatusBg(city.operationalStatus)}`}>
                      {city.operationalStatus}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-400">Active Vehicles</div>
                    <div className="text-blue-400 font-mono">{city.activeVehicles}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Total Rides</div>
                    <div className="text-green-400 font-mono">{formatNumber(city.totalRides)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Wait Time</div>
                    <div className="text-purple-400 font-mono">{city.avgWaitTime.toFixed(1)}m</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Safety Score</div>
                    <div className={`font-mono ${getSafetyScoreColor(city.safetyScore)}`}>
                      {city.safetyScore.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">{city.weatherCondition}</span>
                    <span className={`${getTrafficColor(city.trafficLevel)}`}>
                      {city.trafficLevel} Traffic
                    </span>
                  </div>
                  <div className="w-16 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        city.operationalStatus === 'FULL' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${Math.min(100, city.safetyScore)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}