// Smart City Operations Center - 2026 IoT & AI-Driven Urban Infrastructure
// Inspired by integrated urban infrastructure management, IoT sensor networks, predictive maintenance, real-time situational awareness
import { useState, useEffect } from 'react';
import { 
  Building2, Car, Zap, Droplets, Wind, Thermometer, 
  Activity, Users, Shield, Truck, Wifi, Satellite,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock,
  MapPin, Camera, Lightbulb, TreePine, Recycle, Construction,
  BarChart3, LineChart, PieChart, Eye, Bell, Settings,
  Radio, Database, Cloud, Monitor, Target, Globe
} from 'lucide-react';

export default function SmartCityOperationsCenter() {
  const [cityMetrics, setCityMetrics] = useState({
    population: 2847392,
    activeDevices: 45678,
    dataPoints: 1234567,
    alerts: 23,
    serviceLevel: 94.7,
    energyEfficiency: 87.3,
    airQuality: 156, // AQI
    trafficFlow: 78.9
  });

  const [iotSensorNetworks, setIotSensorNetworks] = useState({
    environmental: {
      airQuality: { sensors: 234, status: 'optimal', aqi: 156, trend: 'improving' },
      noise: { sensors: 187, status: 'good', level: 45, trend: 'stable' },
      temperature: { sensors: 312, status: 'normal', temp: 22.4, trend: 'stable' },
      humidity: { sensors: 298, status: 'optimal', level: 67.8, trend: 'decreasing' }
    },
    infrastructure: {
      smartLights: { devices: 5678, status: 'operational', efficiency: 89.4, trend: 'improving' },
      waterSystems: { sensors: 456, status: 'optimal', pressure: 4.2, trend: 'stable' },
      wasteManagement: { bins: 1234, status: 'good', fullness: 34.7, trend: 'increasing' },
      energyGrid: { meters: 23456, status: 'excellent', load: 78.9, trend: 'stable' }
    },
    mobility: {
      trafficLights: { controllers: 789, status: 'synchronized', efficiency: 92.1, trend: 'improving' },
      parkingSensors: { spaces: 12345, status: 'active', occupancy: 67.8, trend: 'fluctuating' },
      publicTransport: { vehicles: 456, status: 'operational', onTime: 87.4, trend: 'improving' },
      bikeShares: { stations: 234, status: 'available', utilization: 45.6, trend: 'increasing' }
    }
  });

  const [urbanServices, setUrbanServices] = useState([
    {
      category: 'Traffic Management',
      services: [
        { name: 'Adaptive Signal Control', status: 'active', performance: 92.1, incidents: 3 },
        { name: 'Congestion Prediction', status: 'learning', performance: 87.6, incidents: 0 },
        { name: 'Emergency Vehicle Priority', status: 'standby', performance: 98.2, incidents: 0 }
      ]
    },
    {
      category: 'Utility Optimization',
      services: [
        { name: 'Smart Grid Management', status: 'optimal', performance: 94.7, incidents: 1 },
        { name: 'Water Distribution', status: 'active', performance: 89.3, incidents: 2 },
        { name: 'Waste Collection Routes', status: 'optimizing', performance: 76.8, incidents: 0 }
      ]
    },
    {
      category: 'Environmental Monitoring',
      services: [
        { name: 'Air Quality Network', status: 'monitoring', performance: 91.4, incidents: 0 },
        { name: 'Noise Level Tracking', status: 'active', performance: 88.7, incidents: 1 },
        { name: 'Green Space Health', status: 'surveying', performance: 82.3, incidents: 0 }
      ]
    },
    {
      category: 'Citizen Services',
      services: [
        { name: 'Emergency Response', status: 'ready', performance: 96.8, incidents: 5 },
        { name: 'Public Safety Cameras', status: 'monitoring', performance: 93.2, incidents: 2 },
        { name: 'Digital Service Portal', status: 'online', performance: 89.1, incidents: 1 }
      ]
    }
  ]);

  const [realTimeAlerts, setRealTimeAlerts] = useState([
    {
      id: 'city-001',
      type: 'TRAFFIC',
      severity: 'HIGH',
      title: 'Major Intersection Congestion',
      description: 'Traffic backup at Main St & 5th Ave affecting 3 bus routes',
      location: { lat: 40.7589, lon: -73.9851, address: 'Main St & 5th Ave' },
      impact: '1,200 affected commuters, 15min avg delay',
      response: 'Traffic control deployed, alternate routes activated',
      timestamp: '4m ago',
      estimatedResolution: '25 minutes',
      priority: 1
    },
    {
      id: 'city-002',
      type: 'ENVIRONMENTAL',
      severity: 'MEDIUM',
      title: 'Air Quality Alert - Industrial District',
      description: 'AQI spike to 178 in manufacturing zone, PM2.5 elevated',
      location: { lat: 40.7282, lon: -74.0776, address: 'Industrial District' },
      impact: 'Health advisory for sensitive groups',
      response: 'Mobile monitoring unit dispatched, notifications sent',
      timestamp: '12m ago',
      estimatedResolution: '3 hours',
      priority: 2
    },
    {
      id: 'city-003',
      type: 'UTILITY',
      severity: 'LOW',
      title: 'Smart Grid Load Balancing',
      description: 'Predicted peak load in residential zone, preemptive adjustment',
      location: { lat: 40.7505, lon: -73.9934, address: 'Residential Zone C' },
      impact: 'Proactive load distribution to prevent outages',
      response: 'Automated grid rebalancing initiated',
      timestamp: '8m ago',
      estimatedResolution: 'Automated',
      priority: 3
    }
  ]);

  const [predictiveMaintenance, setPredictiveMaintenance] = useState({
    infrastructure: [
      { asset: 'Bridge #47', type: 'structural', health: 78.4, nextMaintenance: '23 days', risk: 'low' },
      { asset: 'Water Pump Station #12', type: 'mechanical', health: 67.8, nextMaintenance: '8 days', risk: 'medium' },
      { asset: 'Traffic Controller #891', type: 'electronic', health: 45.2, nextMaintenance: '2 days', risk: 'high' },
      { asset: 'Street Light Grid #5', type: 'electrical', health: 89.1, nextMaintenance: '45 days', risk: 'low' }
    ],
    predictedFailures: [
      { component: 'Sewer Line Segment 234', probability: 34.7, timeframe: '14 days', impact: 'high' },
      { component: 'Power Transformer #67', probability: 23.1, timeframe: '28 days', impact: 'critical' },
      { component: 'Traffic Signal Main St', probability: 67.8, timeframe: '5 days', impact: 'medium' }
    ]
  });

  const [communicationProtocols, setCommunicationProtocols] = useState({
    networks: {
      '5g': { coverage: 89.4, devices: 12456, latency: '12ms', status: 'optimal' },
      'lora': { coverage: 94.7, devices: 8901, latency: '2.3s', status: 'excellent' },
      'nbiot': { coverage: 78.9, devices: 5634, latency: '800ms', status: 'good' },
      'fiber': { coverage: 67.3, devices: 3456, latency: '3ms', status: 'excellent' }
    },
    dataFlow: {
      sensorsToCloud: '2.4TB/day',
      cloudToApplications: '890GB/day',
      realTimeStreams: 1247,
      batchProcessing: 89,
      edgeComputing: 234
    }
  });

  const [citizenEngagement, setCitizenEngagement] = useState({
    digitalServices: {
      activeUsers: 156789,
      serviceRequests: 2341,
      satisfaction: 87.6,
      responseTime: '2.4 hours'
    },
    smartApps: {
      trafficApp: { users: 45678, rating: 4.2 },
      parkingApp: { users: 23456, rating: 3.8 },
      utilityApp: { users: 34567, rating: 4.5 },
      emergencyApp: { users: 67890, rating: 4.7 }
    },
    socialMedia: {
      mentions: 1234,
      sentiment: 'positive',
      engagement: 12.7
    }
  });

  useEffect(() => {
    // Smart city real-time updates
    const interval = setInterval(() => {
      // Update city metrics
      setCityMetrics(prev => ({
        ...prev,
        activeDevices: prev.activeDevices + Math.floor(Math.random() * 10),
        dataPoints: prev.dataPoints + Math.floor(Math.random() * 1000),
        serviceLevel: Math.max(85, Math.min(98, prev.serviceLevel + (Math.random() - 0.4) * 1.5)),
        trafficFlow: Math.max(60, Math.min(95, prev.trafficFlow + (Math.random() - 0.5) * 3))
      }));

      // Update IoT sensor readings
      setIotSensorNetworks(prev => ({
        ...prev,
        environmental: {
          ...prev.environmental,
          airQuality: {
            ...prev.environmental.airQuality,
            aqi: Math.max(50, Math.min(300, prev.environmental.airQuality.aqi + (Math.random() - 0.5) * 10))
          },
          temperature: {
            ...prev.environmental.temperature,
            temp: Math.max(15, Math.min(35, prev.environmental.temperature.temp + (Math.random() - 0.5) * 2))
          }
        },
        infrastructure: {
          ...prev.infrastructure,
          energyGrid: {
            ...prev.infrastructure.energyGrid,
            load: Math.max(40, Math.min(95, prev.infrastructure.energyGrid.load + (Math.random() - 0.5) * 4))
          }
        }
      }));

      // Update citizen engagement
      setCitizenEngagement(prev => ({
        ...prev,
        digitalServices: {
          ...prev.digitalServices,
          activeUsers: prev.digitalServices.activeUsers + Math.floor(Math.random() * 50),
          serviceRequests: prev.digitalServices.serviceRequests + Math.floor(Math.random() * 5)
        }
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'HIGH': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'LOW': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'optimal': case 'excellent': case 'operational': return 'text-green-400';
      case 'good': case 'active': case 'online': return 'text-blue-400';
      case 'normal': case 'monitoring': case 'ready': return 'text-yellow-400';
      case 'standby': case 'learning': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      case 'critical': return 'text-red-500';
      default: return 'text-gray-400';
    }
  };

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Traffic Management': return <Car className="w-4 h-4" />;
      case 'Utility Optimization': return <Zap className="w-4 h-4" />;
      case 'Environmental Monitoring': return <Wind className="w-4 h-4" />;
      case 'Citizen Services': return <Users className="w-4 h-4" />;
      default: return <Building2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Smart City Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
            <Building2 className="w-8 h-8 mr-3" />
            Smart City Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Wifi className="w-4 h-4 mr-2" />
              <span>{cityMetrics.activeDevices.toLocaleString()} IoT devices</span>
            </div>
            <div className="flex items-center">
              <Database className="w-4 h-4 mr-2" />
              <span>{(cityMetrics.dataPoints / 1000000).toFixed(1)}M data points</span>
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">IoT-driven urban infrastructure with predictive maintenance, real-time situational awareness & citizen services</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main City Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* City Overview Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              City Operations Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Population</span>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {(cityMetrics.population / 1000000).toFixed(1)}M
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Service Level</span>
                  <Target className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {cityMetrics.serviceLevel.toFixed(1)}%
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Air Quality</span>
                  <Wind className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  AQI {cityMetrics.airQuality}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Traffic Flow</span>
                  <Car className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {cityMetrics.trafficFlow.toFixed(1)}%
                </div>
              </div>
            </div>

            {/* IoT Sensor Network Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(iotSensorNetworks).map(([category, sensors]) => (
                <div key={category} className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white capitalize mb-3 flex items-center">
                    {category === 'environmental' && <Wind className="w-4 h-4 mr-2" />}
                    {category === 'infrastructure' && <Building2 className="w-4 h-4 mr-2" />}
                    {category === 'mobility' && <Car className="w-4 h-4 mr-2" />}
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(sensors).map(([sensor, data]) => (
                      <div key={sensor} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-300 capitalize">
                            {sensor.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                          <div className="text-xs text-gray-400">
                            {data.sensors || data.devices || data.controllers || data.spaces || data.vehicles || data.stations} units
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${getStatusColor(data.status)}`}>
                            {data.status.toUpperCase()}
                          </div>
                          <div className="text-xs text-gray-400">
                            {data.trend}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Urban Services Management */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Urban Services Management
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {urbanServices.map((category, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center">
                    {getCategoryIcon(category.category)}
                    <span className="ml-2">{category.category}</span>
                  </h3>
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-gray-700 rounded p-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-white">{service.name}</span>
                          <span className={`text-xs px-2 py-1 rounded ${getStatusColor(service.status)} bg-opacity-20`}>
                            {service.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Performance:</span>
                          <span className="text-white">{service.performance.toFixed(1)}%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Incidents:</span>
                          <span className={service.incidents > 0 ? 'text-red-400' : 'text-green-400'}>
                            {service.incidents}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Real-Time City Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Real-Time Alerts
            </h2>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {realTimeAlerts.map((alert) => (
                <div key={alert.id} className={`border rounded p-3 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.title}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {alert.type}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="text-xs text-blue-400 mb-2">
                    <MapPin className="w-3 h-3 inline mr-1" />
                    {alert.location.address}
                  </div>
                  <div className="text-xs text-yellow-400 mb-2">
                    <strong>Impact:</strong> {alert.impact}
                  </div>
                  <div className="text-xs text-green-400 mb-2">
                    <strong>Response:</strong> {alert.response}
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{alert.timestamp}</span>
                    <span>ETA: {alert.estimatedResolution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Predictive Maintenance */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Predictive Maintenance
            </h2>
            
            <div className="space-y-3">
              <div className="text-sm font-semibold text-white mb-2">Infrastructure Health</div>
              {predictiveMaintenance.infrastructure.map((asset, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{asset.asset}</span>
                    <span className={getRiskColor(asset.risk)}>{asset.risk.toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Health: {asset.health.toFixed(1)}%</span>
                    <span>Next: {asset.nextMaintenance}</span>
                  </div>
                </div>
              ))}
              
              <div className="text-sm font-semibold text-white mt-4 mb-2">Predicted Failures</div>
              {predictiveMaintenance.predictedFailures.map((failure, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="text-sm text-gray-300 mb-1">{failure.component}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-red-400">{failure.probability.toFixed(1)}% risk</span>
                    <span className="text-gray-400">{failure.timeframe}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Networks */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Radio className="w-5 h-5 mr-2" />
              Network Status
            </h2>
            
            <div className="space-y-3">
              {Object.entries(communicationProtocols.networks).map(([network, data]) => (
                <div key={network} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white uppercase">{network}</span>
                    <span className={getStatusColor(data.status)}>{data.status.toUpperCase()}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div>Coverage: {data.coverage}%</div>
                    <div>Devices: {data.devices.toLocaleString()}</div>
                    <div>Latency: {data.latency}</div>
                    <div></div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Data Flow</div>
                <div className="space-y-1 text-xs text-gray-400">
                  <div>To Cloud: {communicationProtocols.dataFlow.sensorsToCloud}</div>
                  <div>Real-time Streams: {communicationProtocols.dataFlow.realTimeStreams}</div>
                  <div>Edge Processing: {communicationProtocols.dataFlow.edgeComputing} nodes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Citizen Engagement */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Citizen Services
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Digital Services</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Active Users:</span>
                    <span className="text-white">{citizenEngagement.digitalServices.activeUsers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Requests:</span>
                    <span className="text-white">{citizenEngagement.digitalServices.serviceRequests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Satisfaction:</span>
                    <span className="text-green-400">{citizenEngagement.digitalServices.satisfaction}%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Smart Apps</div>
                {Object.entries(citizenEngagement.smartApps).map(([app, data]) => (
                  <div key={app} className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400 capitalize">{app.replace('App', '')}:</span>
                    <span className="text-white">{data.users.toLocaleString()} (★{data.rating})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}