// Smart City IoT Infrastructure & Urban Monitoring Center - 2026 Urban Intelligence
// Based on Barcelona Sentilo, Singapore smart systems, and modern IoT urban monitoring
import { useState, useEffect } from 'react';
import { 
  Building2, Wifi, Thermometer, Wind, Car, Lightbulb, Droplets, Zap,
  AlertTriangle, CheckCircle, Clock, Info, Target, Activity, Settings,
  RefreshCw, Eye, Search, Play, Pause, StopCircle, ArrowRight, ArrowLeft,
  Minus, Plus, Brain, Users, MapPin, Radar, BarChart3, TrendingUp,
  TrendingDown, Monitor, Server, Network, Globe, Gauge, Package,
  Terminal, Database, HardDrive, Cpu, MemoryStick, Layers, FileCode,
  TreePine, Volume2, Truck, Bike, Camera, Signal, Battery, Leaf
} from 'lucide-react';

export default function SmartCityInfrastructureCenter() {
  const [cityData, setCityData] = useState({
    currentTime: new Date().toISOString(),
    overallCityHealth: 87.4,
    totalSensors: 19247,
    activeSensors: 18934,
    dataPointsToday: 45678923,
    energySavings: 30.2, // percent vs baseline
    sensorNetworks: [
      {
        name: 'Barcelona Sentilo',
        location: 'Barcelona, Spain',
        sensors: 19000,
        activeSensors: 18756,
        coverage: 'City-wide',
        uptime: 98.7,
        dataPoints: 25000000,
        categories: ['Air Quality', 'Noise', 'Traffic', 'Energy'],
        status: 'OPERATIONAL',
        lastUpdate: '2m ago'
      },
      {
        name: 'Singapore Urban Network',
        location: 'Singapore',
        sensors: 12500,
        activeSensors: 12234,
        coverage: 'Nation-wide',
        uptime: 99.2,
        dataPoints: 18500000,
        categories: ['Water', 'Energy', 'Transport', 'Environment'],
        status: 'OPERATIONAL',
        lastUpdate: '1m ago'
      },
      {
        name: 'Amsterdam Smart Grid',
        location: 'Amsterdam, Netherlands',
        sensors: 8700,
        activeSensors: 8456,
        coverage: 'Metropolitan',
        uptime: 97.8,
        dataPoints: 12300000,
        categories: ['Energy', 'Water', 'Waste', 'Mobility'],
        status: 'MAINTENANCE',
        lastUpdate: '5m ago'
      }
    ],
    environmentalMetrics: [
      {
        metric: 'Air Quality Index',
        value: 42,
        status: 'GOOD',
        trend: 'improving',
        unit: 'AQI',
        target: 50,
        locations: 156,
        change24h: -8.3
      },
      {
        metric: 'Noise Levels',
        value: 58.3,
        status: 'MODERATE',
        trend: 'stable',
        unit: 'dB',
        target: 55,
        locations: 234,
        change24h: -0.7
      },
      {
        metric: 'Temperature',
        value: 18.7,
        status: 'OPTIMAL',
        trend: 'stable',
        unit: '°C',
        target: 20,
        locations: 189,
        change24h: +1.2
      },
      {
        metric: 'Humidity',
        value: 62.4,
        status: 'OPTIMAL',
        trend: 'declining',
        unit: '%',
        target: 60,
        locations: 189,
        change24h: -3.1
      }
    ],
    trafficSystems: [
      {
        intersection: 'Gran Via - Passeig de Gràcia',
        city: 'Barcelona',
        sensors: 12,
        vehicles: 2847,
        avgSpeed: 28.3,
        waitTime: 42,
        signalOptimization: 'AI_ACTIVE',
        congestionLevel: 'MODERATE',
        co2Reduction: 18.7,
        status: 'OPTIMIZED'
      },
      {
        intersection: 'Orchard Road - Scotts Road',
        city: 'Singapore',
        sensors: 8,
        vehicles: 1965,
        avgSpeed: 31.7,
        waitTime: 28,
        signalOptimization: 'PREDICTIVE',
        congestionLevel: 'LOW',
        co2Reduction: 23.4,
        status: 'OPTIMAL'
      },
      {
        intersection: 'Damrak - Centraal Station',
        city: 'Amsterdam',
        sensors: 6,
        vehicles: 1234,
        avgSpeed: 15.2,
        waitTime: 67,
        signalOptimization: 'MANUAL',
        congestionLevel: 'HIGH',
        co2Reduction: 5.8,
        status: 'CONGESTED'
      }
    ],
    energyInfrastructure: [
      {
        district: 'Eixample',
        city: 'Barcelona',
        consumption: 245.7, // MWh
        renewable: 78.4, // %
        gridEfficiency: 94.2,
        smartLights: 4567,
        energySavings: 31.8,
        outages: 0,
        batteryLevel: 87.3,
        status: 'OPTIMAL'
      },
      {
        district: 'Marina Bay',
        city: 'Singapore',
        consumption: 187.3,
        renewable: 85.7,
        gridEfficiency: 96.8,
        smartLights: 2345,
        energySavings: 28.4,
        outages: 0,
        batteryLevel: 92.1,
        status: 'OPTIMAL'
      },
      {
        district: 'Centrum',
        city: 'Amsterdam',
        consumption: 156.9,
        renewable: 72.1,
        gridEfficiency: 91.5,
        smartLights: 1890,
        energySavings: 25.6,
        outages: 1,
        batteryLevel: 76.8,
        status: 'MAINTENANCE'
      }
    ],
    smartSystems: [
      {
        system: 'Waste Management',
        sensors: 2847,
        efficiency: 89.7,
        fillLevel: 67.2,
        collections: 156,
        routeOptimization: 'AI_ENABLED',
        carbonSaved: '234 kg',
        status: 'OPERATIONAL'
      },
      {
        system: 'Water Network',
        sensors: 1965,
        efficiency: 94.3,
        leakDetection: 98.7,
        pressure: 'OPTIMAL',
        qualityScore: 96.8,
        consumption: '145k L',
        status: 'OPTIMAL'
      },
      {
        system: 'Public Transport',
        sensors: 3456,
        onTimeRate: 91.4,
        occupancy: 73.8,
        delays: '2.3 min avg',
        satisfaction: 87.9,
        emissions: '-15.2%',
        status: 'OPTIMAL'
      },
      {
        system: 'Emergency Services',
        sensors: 1234,
        responseTime: 4.7,
        incidents: 23,
        resolved: 21,
        alertsActive: 2,
        coverage: 99.1,
        status: 'READY'
      }
    ],
    realtimeAlerts: [
      {
        id: 'alert-001',
        timestamp: '15:08',
        priority: 'MEDIUM',
        type: 'AIR_QUALITY',
        location: 'Plaça Catalunya, Barcelona',
        message: 'AQI spike detected - 15% above normal',
        cause: 'Heavy traffic convergence',
        response: 'Traffic rerouting initiated',
        affectedArea: '0.8 km radius',
        sensors: 8,
        status: 'RESPONDING'
      },
      {
        id: 'alert-002',
        timestamp: '15:05',
        priority: 'LOW',
        type: 'ENERGY',
        location: 'District 9, Singapore',
        message: 'Solar panel efficiency 5% below optimal',
        cause: 'Partial cloud coverage',
        response: 'Automatic grid compensation',
        affectedArea: 'Residential block',
        sensors: 12,
        status: 'AUTO_RESOLVED'
      },
      {
        id: 'alert-003',
        timestamp: '15:02',
        priority: 'HIGH',
        type: 'WATER',
        location: 'Jordaan District, Amsterdam',
        message: 'Pressure drop in water network',
        cause: 'Potential pipe maintenance needed',
        response: 'Field team dispatched',
        affectedArea: '2.1 km network',
        sensors: 15,
        status: 'INVESTIGATING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCityData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        overallCityHealth: Math.max(80, Math.min(95, prev.overallCityHealth + (Math.random() - 0.5) * 0.5)),
        dataPointsToday: prev.dataPointsToday + Math.floor(Math.random() * 10000),
        activeSensors: Math.max(18500, Math.min(19200, prev.activeSensors + Math.floor((Math.random() - 0.5) * 50))),
        environmentalMetrics: prev.environmentalMetrics?.map(metric => ({
          ...metric,
          value: metric?.metric === 'Air Quality Index'
            ? Math.max(25, Math.min(100, (metric?.value || 42) + (Math.random() - 0.6) * 3))
            : metric?.metric === 'Noise Levels'
            ? Math.max(45, Math.min(75, (metric?.value || 58.3) + (Math.random() - 0.5) * 2))
            : metric?.metric === 'Temperature'
            ? Math.max(15, Math.min(25, (metric?.value || 18.7) + (Math.random() - 0.5) * 0.5))
            : Math.max(40, Math.min(80, (metric?.value || 62.4) + (Math.random() - 0.5) * 2))
        })) || prev.environmentalMetrics,
        trafficSystems: prev.trafficSystems?.map(traffic => ({
          ...traffic,
          vehicles: Math.max(500, Math.min(4000, (traffic?.vehicles || 2000) + Math.floor((Math.random() - 0.5) * 200))),
          avgSpeed: Math.max(10, Math.min(50, (traffic?.avgSpeed || 30) + (Math.random() - 0.5) * 3)),
          waitTime: Math.max(15, Math.min(90, (traffic?.waitTime || 45) + Math.floor((Math.random() - 0.5) * 10)))
        })) || prev.trafficSystems
      }));
    }, 4800);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'OPTIMAL': case 'GOOD': case 'OPTIMIZED': case 'READY': case 'AUTO_RESOLVED': return 'text-green-400';
      case 'MAINTENANCE': case 'MODERATE': case 'RESPONDING': case 'INVESTIGATING': case 'MEDIUM': return 'text-yellow-400';
      case 'OFFLINE': case 'CRITICAL': case 'CONGESTED': case 'HIGH': case 'POOR': return 'text-red-400';
      case 'LOW': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'OPTIMAL': case 'GOOD': case 'OPTIMIZED': case 'READY': case 'AUTO_RESOLVED': return 'bg-green-400/20';
      case 'MAINTENANCE': case 'MODERATE': case 'RESPONDING': case 'INVESTIGATING': case 'MEDIUM': return 'bg-yellow-400/20';
      case 'OFFLINE': case 'CRITICAL': case 'CONGESTED': case 'HIGH': case 'POOR': return 'bg-red-400/20';
      case 'LOW': return 'bg-blue-400/20';
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

  const getMetricIcon = (metric) => {
    const iconClass = "w-4 h-4";
    switch (metric) {
      case 'Air Quality Index': return <Wind className={`${iconClass} text-green-400`} />;
      case 'Noise Levels': return <Volume2 className={`${iconClass} text-blue-400`} />;
      case 'Temperature': return <Thermometer className={`${iconClass} text-orange-400`} />;
      case 'Humidity': return <Droplets className={`${iconClass} text-cyan-400`} />;
      default: return <Monitor className={`${iconClass} text-gray-400`} />;
    }
  };

  const getSystemIcon = (system) => {
    const iconClass = "w-4 h-4";
    switch (system) {
      case 'Waste Management': return <Truck className={`${iconClass} text-brown-400`} />;
      case 'Water Network': return <Droplets className={`${iconClass} text-blue-400`} />;
      case 'Public Transport': return <Car className={`${iconClass} text-green-400`} />;
      case 'Emergency Services': return <AlertTriangle className={`${iconClass} text-red-400`} />;
      default: return <Monitor className={`${iconClass} text-gray-400`} />;
    }
  };

  const getAlertIcon = (type) => {
    const iconClass = "w-4 h-4";
    switch (type) {
      case 'AIR_QUALITY': return <Wind className={`${iconClass} text-green-400`} />;
      case 'ENERGY': return <Zap className={`${iconClass} text-yellow-400`} />;
      case 'WATER': return <Droplets className={`${iconClass} text-blue-400`} />;
      case 'TRAFFIC': return <Car className={`${iconClass} text-red-400`} />;
      default: return <AlertTriangle className={`${iconClass} text-gray-400`} />;
    }
  };

  const getCityHealthColor = (health) => {
    if (health >= 90) return 'text-green-400';
    if (health >= 80) return 'text-blue-400';
    if (health >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Smart City Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Building2 className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Smart City IoT Infrastructure & Urban Monitoring Center</h2>
              <div className="text-sm text-gray-400">Barcelona Sentilo • Singapore • Amsterdam • Real-Time Urban Intelligence</div>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">IoT CONNECTED</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">City Health Score</div>
            <div className={`text-2xl font-mono font-bold ${getCityHealthColor(cityData.overallCityHealth)}`}>
              {(cityData.overallCityHealth || 87.4).toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {cityData.activeSensors}/{cityData.totalSensors} sensors active
            </div>
          </div>
        </div>
        
        {/* Global Urban Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Data Points Today</span>
              <Database className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {formatNumber(cityData.dataPointsToday)}<span className="text-sm text-gray-400 ml-1">points</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-purple-400 transition-all duration-300"
                style={{ width: `${Math.min(100, (cityData.dataPointsToday / 50000000) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">real-time analytics</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Energy Savings</span>
              <Lightbulb className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {(cityData.energySavings || 30.2).toFixed(1)}<span className="text-sm text-gray-400 ml-1">%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-yellow-400 transition-all duration-300"
                style={{ width: `${Math.min(100, (cityData.energySavings / 40) * 100)}%` }}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1">vs baseline</div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Sensor Networks</span>
              <Network className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {cityData.sensorNetworks.length}<span className="text-sm text-gray-400 ml-1">cities</span>
            </div>
            <div className="text-xs text-cyan-400 mt-1">
              {cityData.sensorNetworks.filter(n => n.status === 'OPERATIONAL').length} operational
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Network Uptime</span>
              <CheckCircle className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {((cityData.sensorNetworks?.reduce((acc, n) => acc + (n?.uptime || 0), 0) / (cityData.sensorNetworks?.length || 1)) || 98.5).toFixed(1)}<span className="text-sm text-gray-400 ml-1">%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-green-400 transition-all duration-300"
                style={{ width: `${Math.min(100, ((cityData.sensorNetworks.reduce((acc, n) => acc + n.uptime, 0) / cityData.sensorNetworks.length)))}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Environmental Monitoring */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Leaf className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Environmental Monitoring</h3>
            <div className="px-2 py-1 bg-green-400/20 text-green-400 text-xs font-semibold rounded">
              REAL-TIME
            </div>
          </div>
          
          <div className="space-y-4">
            {cityData.environmentalMetrics.map((metric, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getMetricIcon(metric.metric)}
                    <div>
                      <h4 className="text-white font-medium">{metric.metric}</h4>
                      <div className="text-xs text-gray-400">{metric.locations} monitoring locations</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(metric.status)} ${getStatusBg(metric.status)}`}>
                      {metric.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono text-white">
                      {(metric?.value || 0).toFixed(1)} {metric?.unit || ''}
                    </div>
                    <div className="flex items-center space-x-1">
                      {getTrendIcon(metric.trend)}
                      <span className={metric.change24h < 0 ? 'text-green-400' : 'text-blue-400'} >
                        {(metric?.change24h || 0) > 0 ? '+' : ''}{(metric?.change24h || 0).toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Current vs Target: {metric.target} {metric.unit}</span>
                    <span className={metric.value <= metric.target ? 'text-green-400' : 'text-yellow-400'}>
                      {metric.value <= metric.target ? 'Within limits' : 'Elevated'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        metric.status === 'GOOD' || metric.status === 'OPTIMAL' ? 'bg-green-400' :
                        metric.status === 'MODERATE' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${Math.min(100, Math.max(20, (metric.target / Math.max(metric.value, metric.target)) * 100))}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sensor Network Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Network className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Sensor Networks</h3>
          </div>
          
          <div className="space-y-3">
            {cityData.sensorNetworks.map((network, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium text-sm">{network.name}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(network.status)} ${getStatusBg(network.status)}`}>
                    {network.status}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{network.location} • {network.coverage}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Sensors:</span>
                    <span className="text-blue-400 ml-1">{formatNumber(network.sensors)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Active:</span>
                    <span className="text-green-400 ml-1">{formatNumber(network.activeSensors)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-purple-400 ml-1">{(network?.uptime || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Data Points:</span>
                    <span className="text-cyan-400 ml-1">{formatNumber(network.dataPoints)}</span>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Monitoring Categories:</div>
                  <div className="flex flex-wrap gap-1">
                    {network.categories.map((category, idx) => (
                      <span key={idx} className="px-1 py-0.5 text-xs bg-cyan-400/20 text-cyan-400 rounded">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Updated: {network.lastUpdate}</span>
                  <div className="w-16 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        network.status === 'OPERATIONAL' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${Math.min(100, network.uptime)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic & Energy Systems */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Car className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Traffic & Energy Systems</h3>
          </div>
          
          <div className="space-y-4 mb-4">
            <div className="text-sm text-gray-400 mb-2">Smart Traffic Intersections</div>
            {cityData.trafficSystems.map((traffic, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{traffic.intersection}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(traffic.status)} ${getStatusBg(traffic.status)}`}>
                    {traffic.status}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{traffic.city} • {traffic.signalOptimization}</div>
                
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Vehicles:</span>
                    <span className="text-blue-400 ml-1">{traffic.vehicles}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Speed:</span>
                    <span className="text-green-400 ml-1">{(traffic?.avgSpeed || 0).toFixed(1)} km/h</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Wait:</span>
                    <span className="text-purple-400 ml-1">{traffic.waitTime}s</span>
                  </div>
                </div>

                <div className="mt-2 text-xs text-emerald-400">
                  CO₂ Reduction: -{(traffic?.co2Reduction || 0).toFixed(1)}%
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-sm text-gray-400 mb-2">Energy Districts</div>
            {cityData.energyInfrastructure.slice(0, 2).map((energy, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{energy.district}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(energy.status)} ${getStatusBg(energy.status)}`}>
                    {energy.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Renewable:</span>
                    <span className="text-green-400 ml-1">{(energy?.renewable || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Efficiency:</span>
                    <span className="text-blue-400 ml-1">{(energy?.gridEfficiency || 0).toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Smart Lights:</span>
                    <span className="text-yellow-400 ml-1">{formatNumber(energy.smartLights)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Savings:</span>
                    <span className="text-purple-400 ml-1">{(energy?.energySavings || 0).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Smart Systems & Alerts */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Real-Time Alerts</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {cityData.realtimeAlerts.map((alert, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                alert.priority === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                alert.priority === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getAlertIcon(alert.type)}
                    <span className="text-xs text-gray-400 font-mono">{alert.timestamp}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert.priority)} ${getStatusBg(alert.priority)}`}>
                      {alert.priority}
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert.status)} ${getStatusBg(alert.status)}`}>
                      {alert.status.replace('_', ' ')}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-1">{alert.message}</div>
                <div className="text-xs text-blue-400 mb-1"><strong>Location:</strong> {alert.location}</div>
                <div className="text-xs text-green-400"><strong>Response:</strong> {alert.response}</div>

                <div className="flex items-center justify-between text-xs mt-2">
                  <span className="text-gray-400">
                    Affected: {alert.affectedArea} • {alert.sensors} sensors
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Smart Systems Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Smart Systems Status</div>
            <div className="space-y-2">
              {cityData.smartSystems.map((system, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    {getSystemIcon(system.system)}
                    <span className="text-gray-300">{system.system}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">{(system?.efficiency || 0).toFixed(1)}%</span>
                    <div className={`px-1 py-0.5 text-xs rounded ${getStatusColor(system.status)} ${getStatusBg(system.status)}`}>
                      {system.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}