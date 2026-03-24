// Transportation Operations Center - 2026 Smart Mobility & Traffic Management Evolution
// Inspired by Vehicle-Road-Cloud Integration, AI traffic management, autonomous vehicles, smart mobility deployment
import { useState, useEffect } from 'react';
import { 
  Car, Truck, Bus, Bike, MapPin, Route, Navigation,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Eye,
  Target, Activity, Settings, Bell, Shield, Database, Network,
  BarChart3, PieChart, Clock, Monitor, Bot, Cloud, Zap,
  Radio, Satellite, Camera, Users, Calendar, Gauge
} from 'lucide-react';

export default function TransportationOperationsCenter() {
  const [trafficMetrics, setTrafficMetrics] = useState({
    totalVehicles: 45678,
    averageSpeed: 42.7, // mph
    congestionLevel: 23.4, // percentage
    incidentCount: 12,
    signalOptimization: 87.9,
    airQualityIndex: 156,
    transitRidership: 234567,
    autonomousVehicles: 8934
  });

  const [trafficCorridors, setTrafficCorridors] = useState([
    {
      corridorId: 'I-95-North',
      name: 'Interstate 95 Northbound',
      length: 45.7, // miles
      currentVolume: 3450, // vehicles per hour
      capacity: 4800,
      averageSpeed: 52.3, // mph
      speedLimit: 65,
      congestionLevel: 'MODERATE',
      incidents: 2,
      smartSignals: 23,
      autonomousVehicles: 245,
      airQuality: 'GOOD'
    },
    {
      corridorId: 'US-101-South',
      name: 'Highway 101 Southbound',
      length: 38.9,
      currentVolume: 4200,
      capacity: 5200,
      averageSpeed: 38.7,
      speedLimit: 55,
      congestionLevel: 'HIGH',
      incidents: 4,
      smartSignals: 31,
      autonomousVehicles: 398,
      airQuality: 'MODERATE'
    },
    {
      corridorId: 'DOWNTOWN-LOOP',
      name: 'Downtown Business Loop',
      length: 12.3,
      currentVolume: 2890,
      capacity: 3600,
      averageSpeed: 18.5,
      speedLimit: 35,
      congestionLevel: 'SEVERE',
      incidents: 3,
      smartSignals: 45,
      autonomousVehicles: 156,
      airQuality: 'POOR'
    },
    {
      corridorId: 'EXPRESS-LANE-A',
      name: 'Express Lane Network A',
      length: 28.4,
      currentVolume: 1950,
      capacity: 3000,
      averageSpeed: 67.8,
      speedLimit: 70,
      congestionLevel: 'LIGHT',
      incidents: 0,
      smartSignals: 18,
      autonomousVehicles: 567,
      airQuality: 'GOOD'
    }
  ]);

  const [aiTrafficManagement, setAiTrafficManagement] = useState({
    adaptiveSignals: {
      status: 'ACTIVE',
      optimizedIntersections: 234,
      trafficFlowImprovement: 23.7,
      waitTimeReduction: 34.8,
      fuelSavings: 15.6,
      emissionReduction: 18.9,
      lastUpdate: '3m ago'
    },
    predictiveRouting: {
      algorithm: 'OPERATIONAL',
      routesOptimized: 1567,
      travelTimeSavings: 19.4,
      congestionPrevention: 78.3,
      userAdoption: 67.8,
      accuracy: 91.7,
      lastUpdate: '1m ago'
    },
    incidentDetection: {
      aiCameras: 456,
      detectionAccuracy: 96.3,
      responseTime: '2.4 minutes',
      falseAlarms: 4.7,
      automatedResponse: 89.2,
      emergencyDispatch: 'ENABLED',
      lastUpdate: '45s ago'
    },
    mobilityAsService: {
      platforms: 12,
      activeUsers: 89456,
      tripOptimization: 84.7,
      multimodalIntegration: 'ACTIVE',
      sustainabilityScore: 87.3,
      carbonReduction: 26.4,
      lastUpdate: '2m ago'
    }
  });

  const [vehicleRoadCloud, setVehicleRoadCloud] = useState({
    connectedVehicles: 34567,
    v2xCommunication: 'OPERATIONAL',
    cloudProcessingLatency: '45ms',
    edgeComputingNodes: 89,
    dataPoints: '2.3M/hour',
    networkReliability: 98.7,
    realTimeUpdates: 'ENABLED',
    cybersecurityStatus: 'SECURED'
  });

  const [transportationAlerts, setTransportationAlerts] = useState([
    {
      id: 'TRAFFIC-001',
      type: 'INCIDENT',
      severity: 'HIGH',
      title: 'Multi-Vehicle Accident',
      description: 'Three-vehicle collision on I-95 Northbound at Mile Marker 23.7',
      impact: 'Two lanes blocked, 45-minute delays expected',
      recommendation: 'Deploy emergency response teams, activate alternate route guidance',
      affectedRoutes: ['I-95-North', 'Local Route 15A'],
      estimatedDuration: '90 minutes',
      timestamp: '18m ago'
    },
    {
      id: 'TRAFFIC-002',
      type: 'CONGESTION',
      severity: 'MEDIUM',
      title: 'Peak Hour Congestion',
      description: 'Heavy traffic buildup in Downtown Business Loop due to special event',
      impact: 'Average speeds reduced to 12 mph, public transit capacity at 95%',
      recommendation: 'Optimize signal timing, encourage public transit usage',
      affectedRoutes: ['DOWNTOWN-LOOP', 'Metro Lines 1-3'],
      estimatedDuration: '3 hours',
      timestamp: '42m ago'
    },
    {
      id: 'TRAFFIC-003',
      type: 'INFRASTRUCTURE',
      severity: 'LOW',
      title: 'Smart Signal Maintenance',
      description: 'Scheduled maintenance on adaptive traffic signals in Sector 7',
      impact: 'Temporary manual signal operation, minimal traffic disruption',
      recommendation: 'Monitor traffic patterns, adjust timing as needed',
      affectedRoutes: ['US-101-South'],
      estimatedDuration: '2 hours',
      timestamp: '1h ago'
    }
  ]);

  const [autonomousVehicleData, setAutonomousVehicleData] = useState({
    totalFleet: 8934,
    operationalLevels: {
      level2: 3456, // partial automation
      level3: 2890, // conditional automation
      level4: 2234, // high automation
      level5: 354   // full automation
    },
    safetyMetrics: {
      accidentRate: 0.23, // per million miles
      disengagements: 45,   // per thousand miles
      weatherAdaptation: 94.7,
      trafficCompliance: 98.2,
      emergencyResponse: 'ACTIVE'
    },
    robotaxiServices: {
      fleetSize: 1234,
      ridesCompleted: 45678,
      averageWaitTime: '4.2 minutes',
      serviceArea: 234.5, // square miles
      userSatisfaction: 4.6, // out of 5
      availability: '24/7'
    }
  });

  const [publicTransitSystems, setPublicTransitSystems] = useState([
    {
      systemId: 'METRO-BUS',
      type: 'Bus Rapid Transit',
      fleetSize: 234,
      routesActive: 45,
      currentRidership: 12456,
      onTimePerformance: 87.3,
      averageSpeed: 22.4,
      emissions: 'LOW',
      smartFeatures: 'ENABLED'
    },
    {
      systemId: 'LIGHT-RAIL',
      type: 'Light Rail',
      fleetSize: 67,
      routesActive: 8,
      currentRidership: 8934,
      onTimePerformance: 94.7,
      averageSpeed: 35.8,
      emissions: 'ZERO',
      smartFeatures: 'ACTIVE'
    },
    {
      systemId: 'BIKE-SHARE',
      type: 'Smart Bike Sharing',
      fleetSize: 3456,
      routesActive: 156,
      currentRidership: 2345,
      onTimePerformance: 92.1,
      averageSpeed: 8.7,
      emissions: 'ZERO',
      smartFeatures: 'ADVANCED'
    },
    {
      systemId: 'MICRO-MOBILITY',
      type: 'E-Scooter Network',
      fleetSize: 5678,
      routesActive: 89,
      currentRidership: 1567,
      onTimePerformance: 89.4,
      averageSpeed: 12.3,
      emissions: 'ZERO',
      smartFeatures: 'IOT'
    }
  ]);

  const [smartInfrastructure, setSmartInfrastructure] = useState({
    edgeAiNodes: 189,
    roadSideCabinets: 456,
    cameraNetwork: 1234,
    sensorDeployment: 3456,
    communicationLatency: '25ms',
    dataProcessingCapacity: '89TB/day',
    networkUptime: 99.8,
    cybersecurityLevel: 'HIGH'
  });

  const [environmentalMetrics, setEnvironmentalMetrics] = useState({
    airQualityIndex: 156,
    co2Emissions: 234.7, // tons per hour
    noiseLevel: 67.8, // dB average
    energyConsumption: 45.6, // MW
    sustainabilityScore: 74.3,
    greenTransportShare: 34.7,
    electricVehicleAdoption: 23.4
  });

  useEffect(() => {
    // Real-time transportation updates
    const interval = setInterval(() => {
      // Update traffic metrics
      setTrafficMetrics(prev => ({
        ...prev,
        averageSpeed: Math.max(15, Math.min(65, prev.averageSpeed + (Math.random() - 0.5) * 4)),
        congestionLevel: Math.max(0, Math.min(50, prev.congestionLevel + (Math.random() - 0.5) * 3)),
        signalOptimization: Math.max(70, Math.min(95, prev.signalOptimization + (Math.random() - 0.3) * 2))
      }));

      // Update traffic corridors
      setTrafficCorridors(prev => prev.map(corridor => ({
        ...corridor,
        currentVolume: Math.max(500, Math.min(corridor.capacity, corridor.currentVolume + (Math.random() - 0.5) * 200)),
        averageSpeed: Math.max(10, Math.min(corridor.speedLimit, corridor.averageSpeed + (Math.random() - 0.5) * 5)),
        autonomousVehicles: Math.max(0, corridor.autonomousVehicles + Math.floor((Math.random() - 0.3) * 10))
      })));

      // Update AI performance metrics
      setAiTrafficManagement(prev => ({
        ...prev,
        adaptiveSignals: {
          ...prev.adaptiveSignals,
          trafficFlowImprovement: Math.max(15, Math.min(35, prev.adaptiveSignals.trafficFlowImprovement + (Math.random() - 0.4) * 1.5))
        },
        incidentDetection: {
          ...prev.incidentDetection,
          detectionAccuracy: Math.max(90, Math.min(99, prev.incidentDetection.detectionAccuracy + (Math.random() - 0.3) * 0.8))
        }
      }));

      // Update vehicle-road-cloud integration
      setVehicleRoadCloud(prev => ({
        ...prev,
        connectedVehicles: Math.max(30000, prev.connectedVehicles + Math.floor((Math.random() - 0.2) * 50)),
        cloudProcessingLatency: `${Math.max(20, Math.min(80, parseInt(prev.cloudProcessingLatency) + (Math.random() - 0.5) * 10))}ms`
      }));

      // Update environmental metrics
      setEnvironmentalMetrics(prev => ({
        ...prev,
        airQualityIndex: Math.max(50, Math.min(300, prev.airQualityIndex + (Math.random() - 0.6) * 15)),
        sustainabilityScore: Math.max(60, Math.min(90, prev.sustainabilityScore + (Math.random() - 0.4) * 2))
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status?.toUpperCase()) {
      case 'OPERATIONAL': case 'ACTIVE': case 'ENABLED': case 'GOOD': return 'text-green-400';
      case 'MODERATE': case 'SECURED': case 'ADVANCED': return 'text-blue-400';
      case 'HIGH': case 'POOR': case 'IOT': return 'text-yellow-400';
      case 'SEVERE': case 'CRITICAL': case 'DOWN': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'HIGH': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'LOW': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getCongestionColor = (level) => {
    switch(level) {
      case 'LIGHT': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': case 'SEVERE': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getVehicleIcon = (type) => {
    switch(type) {
      case 'Bus Rapid Transit': return <Bus className="w-4 h-4" />;
      case 'Light Rail': return <Navigation className="w-4 h-4" />;
      case 'Smart Bike Sharing': return <Bike className="w-4 h-4" />;
      case 'E-Scooter Network': return <Zap className="w-4 h-4" />;
      default: return <Car className="w-4 h-4" />;
    }
  };

  const getCapacityPercentage = (current, capacity) => {
    return Math.min(100, (current / capacity) * 100);
  };

  const getAirQualityColor = (aqi) => {
    if (aqi <= 50) return 'text-green-400'; // Good
    if (aqi <= 100) return 'text-yellow-400'; // Moderate
    if (aqi <= 150) return 'text-orange-400'; // Unhealthy for sensitive
    return 'text-red-400'; // Unhealthy
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Transportation Operations Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
            <Car className="w-8 h-8 mr-3" />
            Transportation Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              <span>Avg Speed: {trafficMetrics.averageSpeed.toFixed(1)} mph</span>
            </div>
            <div className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>Congestion: {trafficMetrics.congestionLevel.toFixed(1)}%</span>
            </div>
            <div className="flex items-center">
              <Bot className="w-4 h-4 mr-2" />
              <span>{vehicleRoadCloud.connectedVehicles.toLocaleString()} connected vehicles</span>
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Smart mobility operations with Vehicle-Road-Cloud integration, AI traffic management & autonomous vehicle coordination</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Transportation Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Traffic Operations Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Traffic Operations Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Active Vehicles</span>
                  <Car className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {(trafficMetrics.totalVehicles / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-400">on network</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Signal Optimization</span>
                  <Target className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {trafficMetrics.signalOptimization.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">efficiency</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Transit Ridership</span>
                  <Bus className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {(trafficMetrics.transitRidership / 1000).toFixed(0)}K
                </div>
                <div className="text-sm text-gray-400">daily riders</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Air Quality</span>
                  <Gauge className="w-4 h-4 text-orange-400" />
                </div>
                <div className={`text-2xl font-bold ${getAirQualityColor(environmentalMetrics.airQualityIndex)}`}>
                  {environmentalMetrics.airQualityIndex}
                </div>
                <div className="text-sm text-gray-400">AQI</div>
              </div>
            </div>

            {/* Traffic Corridors Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Major Traffic Corridors</h3>
              {trafficCorridors.map((corridor, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div>
                      <div className="font-bold text-white">{corridor.corridorId}</div>
                      <div className="text-sm text-gray-400">{corridor.name}</div>
                      <div className="text-xs text-gray-500">{corridor.length} miles</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Volume/Capacity</div>
                      <div className="text-white font-mono">
                        {corridor.currentVolume}/{corridor.capacity}
                      </div>
                      <div className="text-xs text-gray-500">
                        {getCapacityPercentage(corridor.currentVolume, corridor.capacity).toFixed(0)}% capacity
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Speed</div>
                      <div className="text-white font-mono">
                        {corridor.averageSpeed.toFixed(1)} mph
                      </div>
                      <div className="text-xs text-gray-500">
                        Limit: {corridor.speedLimit} mph
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Congestion</div>
                      <div className={`font-semibold ${getCongestionColor(corridor.congestionLevel)}`}>
                        {corridor.congestionLevel}
                      </div>
                      <div className="text-xs text-gray-500">
                        Incidents: {corridor.incidents}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Smart Signals</div>
                      <div className="text-blue-400 font-mono">{corridor.smartSignals}</div>
                      <div className="text-xs text-gray-500">adaptive</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Autonomous</div>
                      <div className="text-purple-400 font-mono">{corridor.autonomousVehicles}</div>
                      <div className="text-xs text-gray-500">vehicles</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          getCapacityPercentage(corridor.currentVolume, corridor.capacity) > 80 ? 'bg-red-400' :
                          getCapacityPercentage(corridor.currentVolume, corridor.capacity) > 60 ? 'bg-yellow-400' :
                          'bg-green-400'
                        }`}
                        style={{width: `${getCapacityPercentage(corridor.currentVolume, corridor.capacity)}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Traffic Management & Public Transit */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* AI Traffic Management */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                <Bot className="w-5 h-5 mr-2" />
                AI Traffic Management
              </h2>
              
              <div className="space-y-4">
                {Object.entries(aiTrafficManagement).map(([system, data]) => (
                  <div key={system} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold capitalize text-white text-sm">
                        {system.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className={`text-sm font-semibold ${getStatusColor(data.status || data.algorithm)}`}>
                        {data.status || data.algorithm}
                      </span>
                    </div>
                    
                    <div className="space-y-1 text-xs">
                      {Object.entries(data).slice(1, 5).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </span>
                          <span className="text-white font-mono">
                            {typeof value === 'number' ? 
                              (key.includes('Improvement') || key.includes('Reduction') || key.includes('Savings') || 
                               key.includes('Prevention') || key.includes('Adoption') || key.includes('Accuracy') ? 
                                `${value.toFixed(1)}%` : 
                               key.includes('Time') ? `${value} min` :
                               value.toLocaleString()) : 
                              value}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-gray-500 pt-2">
                      {data.lastUpdate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Public Transit Systems */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                <Bus className="w-5 h-5 mr-2" />
                Public Transit Systems
              </h2>
              
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {publicTransitSystems.map((system, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {getVehicleIcon(system.type)}
                        <span className="ml-2 font-semibold text-white text-sm">{system.systemId}</span>
                      </div>
                      <span className={`text-xs font-semibold ${getStatusColor(system.smartFeatures)}`}>
                        {system.smartFeatures}
                      </span>
                    </div>
                    
                    <div className="text-xs text-gray-400 mb-2">{system.type}</div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Fleet:</span>
                        <span className="text-white">{system.fleetSize}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Routes:</span>
                        <span className="text-white">{system.routesActive}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Riders:</span>
                        <span className="text-blue-400">{system.currentRidership.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">On-Time:</span>
                        <span className="text-green-400">{system.onTimePerformance}%</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Speed: {system.averageSpeed} mph</span>
                      <span className={system.emissions === 'ZERO' ? 'text-green-400' : 'text-yellow-400'}>
                        {system.emissions} emissions
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Transportation Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Traffic Alerts
            </h2>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {transportationAlerts.map((alert) => (
                <div key={alert.id} className={`border rounded p-3 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.title}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {alert.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="text-xs text-blue-400 mb-2">
                    <strong>Action:</strong> {alert.recommendation}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    <strong>Duration:</strong> {alert.estimatedDuration}
                  </div>
                  <div className="text-xs text-gray-400">{alert.timestamp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Autonomous Vehicle Fleet */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              Autonomous Vehicles
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Fleet Composition</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level 2 (Partial):</span>
                    <span className="text-white">{autonomousVehicleData.operationalLevels.level2.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level 3 (Conditional):</span>
                    <span className="text-white">{autonomousVehicleData.operationalLevels.level3.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level 4 (High):</span>
                    <span className="text-blue-400">{autonomousVehicleData.operationalLevels.level4.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level 5 (Full):</span>
                    <span className="text-green-400">{autonomousVehicleData.operationalLevels.level5}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Robotaxi Services</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Fleet Size:</span>
                    <span className="text-green-400">{autonomousVehicleData.robotaxiServices.fleetSize.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Rides Today:</span>
                    <span className="text-blue-400">{autonomousVehicleData.robotaxiServices.ridesCompleted.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Wait:</span>
                    <span className="text-white">{autonomousVehicleData.robotaxiServices.averageWaitTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Satisfaction:</span>
                    <span className="text-green-400">{autonomousVehicleData.robotaxiServices.userSatisfaction}/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle-Road-Cloud */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Cloud className="w-5 h-5 mr-2" />
              Vehicle-Road-Cloud
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Connected Vehicles:</span>
                    <span className="text-cyan-400">{vehicleRoadCloud.connectedVehicles.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">V2X Communication:</span>
                    <span className={getStatusColor(vehicleRoadCloud.v2xCommunication)}>
                      {vehicleRoadCloud.v2xCommunication}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cloud Latency:</span>
                    <span className="text-green-400">{vehicleRoadCloud.cloudProcessingLatency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Edge Nodes:</span>
                    <span className="text-white">{vehicleRoadCloud.edgeComputingNodes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network Reliability:</span>
                    <span className="text-green-400">{vehicleRoadCloud.networkReliability}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <Gauge className="w-5 h-5 mr-2" />
              Environmental Impact
            </h2>
            
            <div className="bg-gray-800 p-3 rounded">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Air Quality Index:</span>
                  <span className={getAirQualityColor(environmentalMetrics.airQualityIndex)}>
                    {environmentalMetrics.airQualityIndex}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CO2 Emissions:</span>
                  <span className="text-orange-400">{environmentalMetrics.co2Emissions} t/hr</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Green Transport:</span>
                  <span className="text-green-400">{environmentalMetrics.greenTransportShare}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">EV Adoption:</span>
                  <span className="text-blue-400">{environmentalMetrics.electricVehicleAdoption}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sustainability Score:</span>
                  <span className="text-green-400">{environmentalMetrics.sustainabilityScore}/100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}