// Agriculture Precision Farming Operations Center - 2026 AgTech & Drone Integration
// Inspired by precision agriculture, drone monitoring, satellite-AI integration, variable-rate systems, real-time sensing
import { useState, useEffect } from 'react';
import { 
  Sprout, Camera, Satellite, Thermometer, Droplets, Wind,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Eye,
  Target, Activity, Zap, Settings, Bell, BarChart3, PieChart,
  MapPin, Clock, Shield, Database, Network, Cloud, Bot,
  Plane, Monitor, Radio, Users, Calendar, Package
} from 'lucide-react';

export default function AgriculturePrecisionFarmingCenter() {
  const [farmMetrics, setFarmMetrics] = useState({
    totalAcreage: 12567,
    activeCrops: 8,
    yieldPrediction: 94.7,
    irrigationEfficiency: 89.3,
    pestApplication: 76.8,
    soilHealth: 91.2,
    weatherCompliance: 87.6,
    resourceOptimization: 93.4
  });

  const [activeDrones, setActiveDrones] = useState([
    {
      droneId: 'AGRI-001',
      type: 'Multispectral Imaging',
      status: 'ACTIVE',
      currentField: 'Field Alpha-7',
      mission: 'Crop Health Survey',
      batteryLevel: 87,
      flightTime: '23m',
      altitude: 120, // feet
      speed: 15, // mph
      dataCollected: '2.3GB',
      lastUpdate: '12m ago',
      weatherResistant: true
    },
    {
      droneId: 'AGRI-002',
      type: 'Precision Spraying',
      status: 'ACTIVE',
      currentField: 'Field Beta-3',
      mission: 'Targeted Pesticide Application',
      batteryLevel: 45,
      flightTime: '67m',
      altitude: 35,
      speed: 8,
      dataCollected: '456MB',
      lastUpdate: '8m ago',
      weatherResistant: true
    },
    {
      droneId: 'AGRI-003',
      type: 'Livestock Monitoring',
      status: 'CHARGING',
      currentField: 'Pasture C-12',
      mission: 'Cattle Count & Health Check',
      batteryLevel: 23,
      flightTime: '145m',
      altitude: 0,
      speed: 0,
      dataCollected: '1.7GB',
      lastUpdate: '45m ago',
      weatherResistant: false
    }
  ]);

  const [cropFields, setCropFields] = useState([
    {
      fieldId: 'ALPHA-7',
      crop: 'Corn',
      acreage: 456.7,
      plantingDate: '2026-03-01',
      growthStage: 'Vegetative V6',
      healthScore: 94.3,
      yieldPrediction: '185 bu/ac',
      irrigation: 'AUTO',
      soilMoisture: 67.8,
      ndviIndex: 0.85,
      lastScouting: '2 days ago'
    },
    {
      fieldId: 'BETA-3',
      crop: 'Soybeans',
      acreage: 234.5,
      plantingDate: '2026-02-15',
      growthStage: 'Reproductive R3',
      healthScore: 89.7,
      yieldPrediction: '62 bu/ac',
      irrigation: 'SCHEDULED',
      soilMoisture: 73.2,
      ndviIndex: 0.78,
      lastScouting: '1 day ago'
    },
    {
      fieldId: 'CHARLIE-12',
      crop: 'Wheat',
      acreage: 567.8,
      plantingDate: '2025-09-20',
      growthStage: 'Grain Filling',
      healthScore: 91.8,
      yieldPrediction: '78 bu/ac',
      irrigation: 'MANUAL',
      soilMoisture: 45.6,
      ndviIndex: 0.72,
      lastScouting: '4 days ago'
    }
  ]);

  const [precisionAgriculture, setPrecisionAgriculture] = useState({
    variableRateApplication: {
      seedingAccuracy: 97.8,
      fertilizationPrecision: 94.5,
      pesticideTargeting: 89.3,
      costSavings: 23.7,
      yieldImprovement: 15.2,
      environmentalImpact: 67.8
    },
    soilSensing: {
      sensorsDeployed: 234,
      moistureMonitoring: 'ACTIVE',
      nutrientMapping: 'UPDATED',
      phLevels: 'OPTIMAL',
      temperatureTracking: 'CONTINUOUS',
      dataAccuracy: 96.4
    },
    weatherIntegration: {
      stationsConnected: 12,
      forecastAccuracy: 91.7,
      microclimateMonitoring: 'ENABLED',
      precipitationTracking: 'REAL-TIME',
      evapotranspirationData: 'CURRENT',
      alertingSystem: 'ACTIVE'
    }
  });

  const [aiScouting, setAiScouting] = useState([
    {
      id: 'SCOUT-001',
      type: 'Disease Detection',
      confidence: 94.7,
      finding: 'Early blight detected in tomato plants, Section B-4',
      recommendation: 'Apply targeted fungicide treatment within 48 hours',
      severity: 'MEDIUM',
      affectedArea: '12.3 acres',
      treatmentCost: '$450',
      yieldImpact: 'Minimal if treated promptly'
    },
    {
      id: 'SCOUT-002',
      type: 'Pest Identification',
      confidence: 89.2,
      finding: 'Corn earworm population above threshold in Field Alpha-7',
      recommendation: 'Deploy targeted bio-pesticide application via drone',
      severity: 'HIGH',
      affectedArea: '67.8 acres',
      treatmentCost: '$1,200',
      yieldImpact: '15-20% loss if untreated'
    },
    {
      id: 'SCOUT-003',
      type: 'Nutrient Deficiency',
      confidence: 96.1,
      finding: 'Nitrogen deficiency observed in wheat crop, Field Charlie-12',
      recommendation: 'Variable-rate nitrogen application based on NDVI mapping',
      severity: 'LOW',
      affectedArea: '145.6 acres',
      treatmentCost: '$890',
      yieldImpact: '5-8% improvement with treatment'
    }
  ]);

  const [farmingAlerts, setFarmingAlerts] = useState([
    {
      id: 'FARM-001',
      type: 'IRRIGATION_ALERT',
      severity: 'HIGH',
      title: 'Soil Moisture Critical',
      description: 'Field Charlie-12 soil moisture dropped to 45.6%, below optimal range',
      impact: 'Wheat crop stress, potential 10-15% yield reduction',
      recommendation: 'Initiate emergency irrigation cycle, increase frequency',
      affectedFields: 1,
      estimatedCost: '$2,400',
      timestamp: '34m ago'
    },
    {
      id: 'FARM-002',
      type: 'WEATHER_WARNING',
      severity: 'MEDIUM',
      title: 'Severe Weather Incoming',
      description: 'Thunderstorms with 45mph winds forecast for tonight',
      impact: 'Potential crop damage, drone operations suspended',
      recommendation: 'Secure equipment, postpone aerial applications',
      affectedFields: 8,
      estimatedCost: 'TBD',
      timestamp: '1h ago'
    },
    {
      id: 'FARM-003',
      type: 'EQUIPMENT_MAINTENANCE',
      severity: 'LOW',
      title: 'Drone AGRI-003 Battery Degradation',
      description: 'Battery capacity down to 78% of original performance',
      impact: 'Reduced flight time, limited mission scope',
      recommendation: 'Schedule battery replacement within 2 weeks',
      affectedFields: 0,
      estimatedCost: '$890',
      timestamp: '2h ago'
    }
  ]);

  const [livestockMonitoring, setLivestockMonitoring] = useState({
    totalAnimals: 456,
    healthScore: 96.8,
    grazingOptimization: 89.4,
    feedEfficiency: 91.7,
    reproductiveHealth: 94.3,
    environmentalStress: 'LOW',
    alerts: [
      {
        animal: 'Cattle #247',
        issue: 'Slight temperature elevation',
        action: 'Veterinary check scheduled',
        priority: 'MEDIUM'
      },
      {
        animal: 'Herd Section B',
        issue: 'Grazing pattern anomaly',
        action: 'Pasture rotation adjustment',
        priority: 'LOW'
      }
    ]
  });

  const [satelliteIntegration, setSatelliteIntegration] = useState({
    coverage: 99.7,
    resolution: '3m multispectral',
    updateFrequency: 'Daily',
    cloudCoverage: 12.3,
    dataLatency: '4 hours',
    analysisAccuracy: 97.8,
    aiProcessing: 'ENABLED',
    historicalTrends: 'AVAILABLE'
  });

  useEffect(() => {
    // Agriculture real-time updates
    const interval = setInterval(() => {
      // Update farm metrics
      setFarmMetrics(prev => ({
        ...prev,
        yieldPrediction: Math.max(85, Math.min(98, prev.yieldPrediction + (Math.random() - 0.4) * 1.5)),
        irrigationEfficiency: Math.max(80, Math.min(95, prev.irrigationEfficiency + (Math.random() - 0.5) * 2)),
        weatherCompliance: Math.max(75, Math.min(95, prev.weatherCompliance + (Math.random() - 0.5) * 3))
      }));

      // Update drone status
      setActiveDrones(prev => prev.map(drone => {
        if (drone.status === 'ACTIVE') {
          return {
            ...drone,
            batteryLevel: Math.max(20, drone.batteryLevel - Math.floor(Math.random() * 3)),
            flightTime: `${parseInt(drone.flightTime) + Math.floor(Math.random() * 5)}m`,
            dataCollected: drone.type === 'Multispectral Imaging' ? 
              `${(parseFloat(drone.dataCollected) + Math.random() * 0.5).toFixed(1)}GB` :
              `${(parseFloat(drone.dataCollected) + Math.random() * 50).toFixed(0)}MB`
          };
        }
        return drone;
      }));

      // Update crop field conditions
      setCropFields(prev => prev.map(field => ({
        ...field,
        soilMoisture: Math.max(30, Math.min(85, field.soilMoisture + (Math.random() - 0.5) * 3)),
        healthScore: Math.max(80, Math.min(98, field.healthScore + (Math.random() - 0.3) * 1.5))
      })));

      // Update satellite data
      setSatelliteIntegration(prev => ({
        ...prev,
        cloudCoverage: Math.max(5, Math.min(40, prev.cloudCoverage + (Math.random() - 0.5) * 8)),
        analysisAccuracy: Math.max(90, Math.min(99, prev.analysisAccuracy + (Math.random() - 0.3) * 1))
      }));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'ACTIVE': case 'OPTIMAL': case 'ENABLED': return 'text-green-400';
      case 'SCHEDULED': case 'UPDATED': case 'CURRENT': return 'text-blue-400';
      case 'CHARGING': case 'MANUAL': return 'text-yellow-400';
      case 'FAILED': case 'CRITICAL': return 'text-red-400';
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

  const getHealthColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getDroneIcon = (type) => {
    switch(type) {
      case 'Multispectral Imaging': return <Camera className="w-4 h-4" />;
      case 'Precision Spraying': return <Droplets className="w-4 h-4" />;
      case 'Livestock Monitoring': return <Eye className="w-4 h-4" />;
      default: return <Plane className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Agriculture Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-green-400 flex items-center">
            <Sprout className="w-8 h-8 mr-3" />
            Agriculture Precision Farming Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>Yield: {farmMetrics.yieldPrediction.toFixed(1)}%</span>
            </div>
            <div className="flex items-center">
              <Droplets className="w-4 h-4 mr-2" />
              <span>Irrigation: {farmMetrics.irrigationEfficiency.toFixed(1)}%</span>
            </div>
            <div className="flex items-center">
              <Plane className="w-4 h-4 mr-2" />
              <span>{activeDrones.filter(d => d.status === 'ACTIVE').length} drones active</span>
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Precision agriculture with drone monitoring, satellite-AI integration, variable-rate systems & real-time sensing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Agriculture Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Farm Operations Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Precision Farming Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Total Acreage</span>
                  <MapPin className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {farmMetrics.totalAcreage.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">acres</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Yield Prediction</span>
                  <TrendingUp className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {farmMetrics.yieldPrediction.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">of target</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Soil Health</span>
                  <Sprout className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  {farmMetrics.soilHealth.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">optimal</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Resource Optimization</span>
                  <Zap className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {farmMetrics.resourceOptimization.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">efficiency</div>
              </div>
            </div>

            {/* Crop Fields Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Active Crop Fields</h3>
              {cropFields.map((field, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div>
                      <div className="font-bold text-white">{field.fieldId}</div>
                      <div className="text-sm text-gray-400">{field.crop}</div>
                      <div className="text-xs text-gray-500">{field.acreage} acres</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Growth Stage</div>
                      <div className="text-white text-sm">{field.growthStage}</div>
                      <div className="text-xs text-gray-500">Planted: {field.plantingDate}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Health Score</div>
                      <div className={`text-lg font-bold ${getHealthColor(field.healthScore)}`}>
                        {field.healthScore.toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-500">NDVI: {field.ndviIndex}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Yield Prediction</div>
                      <div className="text-white font-mono">{field.yieldPrediction}</div>
                      <div className="text-xs text-gray-500">estimated</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Soil Moisture</div>
                      <div className="text-cyan-400 font-mono">{field.soilMoisture.toFixed(1)}%</div>
                      <div className={`text-xs ${getStatusColor(field.irrigation)}`}>
                        {field.irrigation}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Last Scouting</div>
                      <div className="text-white text-sm">{field.lastScouting}</div>
                      <div className="text-xs text-green-400">✓ Monitored</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drone Operations & AI Scouting */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Plane className="w-5 h-5 mr-2" />
              Drone Operations & AI Scouting
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Active Drones */}
              <div>
                <h3 className="font-semibold text-white mb-3">Active Drone Fleet</h3>
                <div className="space-y-3">
                  {activeDrones.map((drone, index) => (
                    <div key={index} className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {getDroneIcon(drone.type)}
                          <span className="ml-2 font-medium text-white">{drone.droneId}</span>
                        </div>
                        <span className={`text-sm font-semibold ${getStatusColor(drone.status)}`}>
                          {drone.status}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400 mb-2">{drone.type} - {drone.currentField}</div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Battery:</span>
                          <span className={drone.batteryLevel > 50 ? 'text-green-400' : 'text-red-400'}>
                            {drone.batteryLevel}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Flight Time:</span>
                          <span className="text-white">{drone.flightTime}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Altitude:</span>
                          <span className="text-white">{drone.altitude}ft</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Data:</span>
                          <span className="text-blue-400">{drone.dataCollected}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">Mission: {drone.mission}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Scouting Results */}
              <div>
                <h3 className="font-semibold text-white mb-3">AI Scouting Intelligence</h3>
                <div className="space-y-3">
                  {aiScouting.map((scout, index) => (
                    <div key={index} className={`border rounded p-3 ${getSeverityColor(scout.severity)}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white text-sm">{scout.type}</span>
                        <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                          {scout.confidence.toFixed(1)}% confidence
                        </span>
                      </div>
                      <div className="text-xs text-gray-300 mb-2">{scout.finding}</div>
                      <div className="text-xs text-blue-400 mb-2">
                        <strong>Action:</strong> {scout.recommendation}
                      </div>
                      <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
                        <div>Area: {scout.affectedArea}</div>
                        <div>Cost: {scout.treatmentCost}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Farm Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Farm Alerts
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {farmingAlerts.map((alert) => (
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
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{alert.timestamp}</span>
                    <span>Cost: {alert.estimatedCost}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Precision Agriculture Systems */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Precision Systems
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Variable Rate Application</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Seeding Accuracy:</span>
                    <span className="text-green-400">{precisionAgriculture.variableRateApplication.seedingAccuracy}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cost Savings:</span>
                    <span className="text-green-400">{precisionAgriculture.variableRateApplication.costSavings}%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Soil Sensing Network</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sensors:</span>
                    <span className="text-blue-400">{precisionAgriculture.soilSensing.sensorsDeployed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accuracy:</span>
                    <span className="text-green-400">{precisionAgriculture.soilSensing.dataAccuracy}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Satellite Integration */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Satellite className="w-5 h-5 mr-2" />
              Satellite Intelligence
            </h2>
            
            <div className="bg-gray-800 p-3 rounded">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Coverage:</span>
                  <span className="text-green-400">{satelliteIntegration.coverage}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Resolution:</span>
                  <span className="text-white">{satelliteIntegration.resolution}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Update Frequency:</span>
                  <span className="text-blue-400">{satelliteIntegration.updateFrequency}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cloud Coverage:</span>
                  <span className="text-yellow-400">{satelliteIntegration.cloudCoverage}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Processing:</span>
                  <span className={getStatusColor(satelliteIntegration.aiProcessing)}>
                    {satelliteIntegration.aiProcessing}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Livestock Monitoring */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Livestock Monitoring
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Animals:</span>
                    <span className="text-white">{livestockMonitoring.totalAnimals}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Health Score:</span>
                    <span className="text-green-400">{livestockMonitoring.healthScore}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Feed Efficiency:</span>
                    <span className="text-blue-400">{livestockMonitoring.feedEfficiency}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Environmental Stress:</span>
                    <span className="text-green-400">{livestockMonitoring.environmentalStress}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                {livestockMonitoring.alerts.slice(0, 2).map((alert, index) => (
                  <div key={index} className="bg-gray-800 p-2 rounded text-xs">
                    <div className="text-white font-medium">{alert.animal}</div>
                    <div className="text-gray-400">{alert.issue}</div>
                    <div className="text-green-400">{alert.action}</div>
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