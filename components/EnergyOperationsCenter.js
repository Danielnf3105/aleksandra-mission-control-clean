// Energy Operations Center - 2026 Smart Grid & Renewable Energy Management
// Inspired by AI-driven power revolution, smart grid technology, renewable integration, analytics-driven decision making
import { useState, useEffect } from 'react';
import { 
  Zap, Battery, Wind, Sun, Thermometer, Gauge, Activity,
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Eye,
  Target, Settings, Bell, Shield, Database, Network, Cloud,
  BarChart3, PieChart, LineChart, Clock, Monitor, Bot,
  Factory, Building2, Home, MapPin, Radio, Satellite
} from 'lucide-react';

export default function EnergyOperationsCenter() {
  const [gridMetrics, setGridMetrics] = useState({
    totalCapacity: 45678, // MW
    currentLoad: 34567, // MW
    renewablePercentage: 67.8,
    gridStability: 99.7,
    transmissionEfficiency: 94.3,
    carbonIntensity: 234, // gCO2/kWh
    energyStorageLevel: 78.9,
    demandResponse: 89.4
  });

  const [powerSources, setPowerSources] = useState([
    {
      sourceId: 'SOLAR-001',
      type: 'Solar PV',
      capacity: 12500, // MW
      currentOutput: 8750, // MW
      efficiency: 87.3,
      availability: 94.7,
      forecast: 'Increasing',
      weatherDependency: 'HIGH',
      maintenanceStatus: 'OPERATIONAL',
      location: 'Desert Solar Complex A'
    },
    {
      sourceId: 'WIND-002',
      type: 'Wind Turbines',
      capacity: 8900,
      currentOutput: 6230,
      efficiency: 91.2,
      availability: 89.4,
      forecast: 'Variable',
      weatherDependency: 'HIGH',
      maintenanceStatus: 'OPERATIONAL',
      location: 'Offshore Wind Farm B'
    },
    {
      sourceId: 'HYDRO-003',
      type: 'Hydroelectric',
      capacity: 5600,
      currentOutput: 5200,
      efficiency: 96.8,
      availability: 98.1,
      forecast: 'Stable',
      weatherDependency: 'MEDIUM',
      maintenanceStatus: 'OPERATIONAL',
      location: 'Mountain Dam Complex'
    },
    {
      sourceId: 'NUCLEAR-004',
      type: 'Nuclear',
      capacity: 8750,
      currentOutput: 8400,
      efficiency: 89.7,
      availability: 96.0,
      forecast: 'Constant',
      weatherDependency: 'LOW',
      maintenanceStatus: 'SCHEDULED',
      location: 'Nuclear Plant Delta'
    },
    {
      sourceId: 'STORAGE-005',
      type: 'Battery Storage',
      capacity: 2500,
      currentOutput: 1850,
      efficiency: 93.4,
      availability: 99.2,
      forecast: 'On-Demand',
      weatherDependency: 'NONE',
      maintenanceStatus: 'OPTIMAL',
      location: 'Grid Storage Facility'
    }
  ]);

  const [aiGridManagement, setAiGridManagement] = useState({
    demandPrediction: {
      algorithm: 'ACTIVE',
      accuracy: 96.8,
      forecastHorizon: '48 hours',
      dataPoints: 15678,
      weatherIntegration: 'ENABLED',
      lastUpdate: '5m ago'
    },
    supplyOptimization: {
      status: 'OPTIMIZING',
      efficiency: 94.7,
      carbonReduction: 23.4,
      costSavings: 18.9,
      renewableMaximization: 89.3,
      lastUpdate: '2m ago'
    },
    gridBalancing: {
      mode: 'AUTONOMOUS',
      responseTime: '150ms',
      stabilityScore: 99.7,
      frequencyRegulation: 'ACTIVE',
      voltageControl: 'OPTIMAL',
      lastUpdate: '30s ago'
    },
    outagePreventionAI: {
      status: 'MONITORING',
      threatsDetected: 3,
      preventedOutages: 12,
      riskAssessment: 'LOW',
      predictionAccuracy: 97.3,
      lastUpdate: '1m ago'
    }
  });

  const [energyAlerts, setEnergyAlerts] = useState([
    {
      id: 'GRID-001',
      type: 'DEMAND_SURGE',
      severity: 'HIGH',
      title: 'Peak Demand Alert',
      description: 'Demand surge to 38.2 GW predicted in next 2 hours due to heat wave',
      impact: 'Grid stress, potential brownout risk in metropolitan area',
      recommendation: 'Activate demand response programs, bring online backup generators',
      affectedAreas: ['Metro District A', 'Industrial Zone B'],
      estimatedDuration: '4 hours',
      timestamp: '12m ago'
    },
    {
      id: 'GRID-002',
      type: 'RENEWABLE_VARIABILITY',
      severity: 'MEDIUM',
      title: 'Wind Output Fluctuation',
      description: 'Wind farm output varying between 4-8 GW due to unstable weather patterns',
      impact: 'Grid frequency variations, increased need for balancing reserves',
      recommendation: 'Increase battery storage discharge, coordinate with hydro plants',
      affectedAreas: ['Wind Zone C'],
      estimatedDuration: '6 hours',
      timestamp: '34m ago'
    },
    {
      id: 'GRID-003',
      type: 'CYBERSECURITY',
      severity: 'LOW',
      title: 'Security Scan Detected',
      description: 'Automated security scan attempts on substation control systems',
      impact: 'No immediate threat, monitoring protocols activated',
      recommendation: 'Enhanced security posture, log analysis, threat assessment',
      affectedAreas: ['Substation Network'],
      estimatedDuration: 'Ongoing monitoring',
      timestamp: '1h ago'
    }
  ]);

  const [smartGridSystems, setSmartGridSystems] = useState({
    sensors: {
      totalDeployed: 12456,
      operational: 12234,
      dataLatency: '12ms',
      accuracy: 99.8,
      coverage: 'COMPLETE',
      lastMaintenance: '2 days ago'
    },
    communication: {
      fiberOptic: { status: 'OPTIMAL', coverage: 98.7, latency: '3ms' },
      wireless: { status: 'GOOD', coverage: 94.3, latency: '45ms' },
      satellite: { status: 'STANDBY', coverage: 100, latency: '240ms' },
      scada: { status: 'ACTIVE', connections: 5678, uptime: 99.9 }
    },
    automation: {
      autonomousControls: 'ENABLED',
      humanOverride: 'AVAILABLE',
      responseTime: '150ms',
      decisionAccuracy: 97.8,
      learningEnabled: true,
      safetyProtocols: 'ACTIVE'
    }
  });

  const [regionalDemand, setRegionalDemand] = useState([
    {
      region: 'Metropolitan Area',
      currentDemand: 8750, // MW
      peakPrediction: 9850, // MW
      population: 2400000,
      demandType: 'Mixed',
      growthRate: 2.3,
      efficiency: 89.4,
      renewableAdoption: 67.8
    },
    {
      region: 'Industrial District',
      currentDemand: 12400,
      peakPrediction: 13200,
      population: 450000,
      demandType: 'Industrial',
      growthRate: 1.8,
      efficiency: 76.9,
      renewableAdoption: 45.2
    },
    {
      region: 'Agricultural Zone',
      currentDemand: 3450,
      peakPrediction: 4100,
      population: 680000,
      demandType: 'Agricultural',
      growthRate: 3.1,
      efficiency: 91.7,
      renewableAdoption: 89.3
    },
    {
      region: 'Residential Suburbs',
      currentDemand: 6890,
      peakPrediction: 8750,
      population: 1800000,
      demandType: 'Residential',
      growthRate: 2.7,
      efficiency: 84.6,
      renewableAdoption: 72.4
    }
  ]);

  const [energyStorage, setEnergyStorage] = useState({
    batteryFarms: [
      {
        facilityId: 'BESS-001',
        technology: 'Lithium-Ion',
        capacity: 850, // MWh
        currentCharge: 678, // MWh
        efficiency: 94.7,
        cycleCount: 1247,
        status: 'DISCHARGING',
        responseTime: '100ms'
      },
      {
        facilityId: 'BESS-002',
        technology: 'Flow Battery',
        capacity: 1200,
        currentCharge: 1050,
        efficiency: 87.3,
        cycleCount: 856,
        status: 'STANDBY',
        responseTime: '2s'
      }
    ],
    pumpedHydro: {
      facilities: 3,
      totalCapacity: 15600, // MWh
      currentLevel: 12450,
      efficiency: 82.4,
      responseTime: '3m',
      status: 'GENERATING'
    }
  });

  const [carbonMetrics, setCarbonMetrics] = useState({
    currentIntensity: 234, // gCO2/kWh
    dailyEmissions: 45.7, // thousand tons CO2
    renewableContribution: 67.8, // percentage
    emissionReduction: 23.4, // percentage vs last year
    carbonCredits: 12450, // tons CO2 equivalent
    sustainabilityScore: 87.6
  });

  useEffect(() => {
    // Energy grid real-time updates
    const interval = setInterval(() => {
      // Update grid metrics
      setGridMetrics(prev => ({
        ...prev,
        currentLoad: Math.max(25000, Math.min(45000, prev.currentLoad + (Math.random() - 0.5) * 1000)),
        renewablePercentage: Math.max(50, Math.min(80, prev.renewablePercentage + (Math.random() - 0.5) * 2)),
        gridStability: Math.max(95, Math.min(100, prev.gridStability + (Math.random() - 0.3) * 0.5))
      }));

      // Update power source outputs based on time of day and weather simulation
      setPowerSources(prev => prev.map(source => {
        let outputVariation = 0;
        
        if (source.type === 'Solar PV') {
          // Solar varies with time of day simulation
          outputVariation = (Math.random() - 0.3) * 1000;
        } else if (source.type === 'Wind Turbines') {
          // Wind is more variable
          outputVariation = (Math.random() - 0.5) * 1500;
        } else if (source.type === 'Battery Storage') {
          // Battery responds to grid needs
          outputVariation = (Math.random() - 0.5) * 500;
        } else {
          // Other sources are more stable
          outputVariation = (Math.random() - 0.5) * 200;
        }
        
        return {
          ...source,
          currentOutput: Math.max(0, Math.min(source.capacity, source.currentOutput + outputVariation))
        };
      }));

      // Update AI system performance
      setAiGridManagement(prev => ({
        ...prev,
        demandPrediction: {
          ...prev.demandPrediction,
          accuracy: Math.max(90, Math.min(99, prev.demandPrediction.accuracy + (Math.random() - 0.3) * 0.8))
        },
        supplyOptimization: {
          ...prev.supplyOptimization,
          efficiency: Math.max(85, Math.min(98, prev.supplyOptimization.efficiency + (Math.random() - 0.4) * 1))
        }
      }));

      // Update carbon metrics
      setCarbonMetrics(prev => ({
        ...prev,
        currentIntensity: Math.max(150, Math.min(400, prev.currentIntensity + (Math.random() - 0.6) * 15))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status?.toUpperCase()) {
      case 'OPERATIONAL': case 'OPTIMAL': case 'ACTIVE': case 'ENABLED': return 'text-green-400';
      case 'GOOD': case 'STANDBY': case 'AVAILABLE': return 'text-blue-400';
      case 'SCHEDULED': case 'MONITORING': return 'text-yellow-400';
      case 'FAILED': case 'CRITICAL': case 'DOWN': return 'text-red-400';
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

  const getSourceIcon = (type) => {
    switch(type) {
      case 'Solar PV': return <Sun className="w-4 h-4" />;
      case 'Wind Turbines': return <Wind className="w-4 h-4" />;
      case 'Hydroelectric': return <Activity className="w-4 h-4" />;
      case 'Nuclear': return <Zap className="w-4 h-4" />;
      case 'Battery Storage': return <Battery className="w-4 h-4" />;
      default: return <Factory className="w-4 h-4" />;
    }
  };

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 90) return 'text-green-400';
    if (efficiency >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getLoadPercentage = (current, capacity) => {
    return Math.min(100, (current / capacity) * 100);
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Energy Operations Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-yellow-400 flex items-center">
            <Zap className="w-8 h-8 mr-3" />
            Energy Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              <span>Load: {(gridMetrics.currentLoad / 1000).toFixed(1)}GW</span>
            </div>
            <div className="flex items-center">
              <Wind className="w-4 h-4 mr-2" />
              <span>Renewable: {gridMetrics.renewablePercentage.toFixed(1)}%</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-2" />
              <span>Stability: {gridMetrics.gridStability.toFixed(1)}%</span>
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Smart grid operations with AI-driven power management, renewable integration & analytics-driven decision making</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Energy Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Grid Operations Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Smart Grid Operations Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Current Load</span>
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {(gridMetrics.currentLoad / 1000).toFixed(1)}GW
                </div>
                <div className="text-sm text-gray-400">
                  {getLoadPercentage(gridMetrics.currentLoad, gridMetrics.totalCapacity).toFixed(1)}% capacity
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Renewable Energy</span>
                  <Sun className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {gridMetrics.renewablePercentage.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">of total generation</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Grid Stability</span>
                  <Target className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {gridMetrics.gridStability.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">frequency control</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Carbon Intensity</span>
                  <Thermometer className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  {carbonMetrics.currentIntensity}
                </div>
                <div className="text-sm text-gray-400">gCO2/kWh</div>
              </div>
            </div>

            {/* Power Sources Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Generation Sources</h3>
              {powerSources.map((source, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <div>
                      <div className="flex items-center mb-1">
                        {getSourceIcon(source.type)}
                        <span className="ml-2 font-bold text-white">{source.sourceId}</span>
                      </div>
                      <div className="text-sm text-gray-400">{source.type}</div>
                      <div className="text-xs text-gray-500">{source.location}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Output</div>
                      <div className="text-white font-mono">
                        {(source.currentOutput / 1000).toFixed(1)}GW
                      </div>
                      <div className="text-xs text-gray-500">
                        /{(source.capacity / 1000).toFixed(1)}GW capacity
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Efficiency</div>
                      <div className={`font-mono ${getEfficiencyColor(source.efficiency)}`}>
                        {source.efficiency.toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-500">
                        {source.availability.toFixed(1)}% available
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Forecast</div>
                      <div className="text-white text-sm">{source.forecast}</div>
                      <div className="text-xs text-gray-500">
                        Weather: {source.weatherDependency}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Status</div>
                      <div className={`text-sm font-semibold ${getStatusColor(source.maintenanceStatus)}`}>
                        {source.maintenanceStatus}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Load Factor</div>
                      <div className="text-cyan-400 font-mono">
                        {getLoadPercentage(source.currentOutput, source.capacity).toFixed(1)}%
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-cyan-400 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${getLoadPercentage(source.currentOutput, source.capacity)}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Grid Management Systems */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              AI Grid Management Systems
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(aiGridManagement).map(([system, data]) => (
                <div key={system} className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 capitalize">
                    {system.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(data).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}:
                        </span>
                        <span className={
                          typeof value === 'string' && ['ACTIVE', 'ENABLED', 'OPTIMAL', 'AUTONOMOUS'].includes(value) ?
                          getStatusColor(value) : 'text-white'
                        }>
                          {typeof value === 'number' ? 
                            (key.includes('accuracy') || key.includes('efficiency') ? `${value.toFixed(1)}%` : value.toLocaleString()) : 
                            value}
                        </span>
                      </div>
                    ))}
                    <div className="text-xs text-gray-500 pt-2">
                      Last Update: {data.lastUpdate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Energy Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Grid Alerts
            </h2>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {energyAlerts.map((alert) => (
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

          {/* Regional Demand */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Regional Demand
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {regionalDemand.map((region, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white font-medium">{region.region}</span>
                    <span className="text-blue-400">{(region.currentDemand / 1000).toFixed(1)}GW</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">
                    Peak: {(region.peakPrediction / 1000).toFixed(1)}GW | {region.demandType}
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Efficiency:</span>
                      <span className="text-white">{region.efficiency}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Renewable:</span>
                      <span className="text-green-400">{region.renewableAdoption}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Energy Storage */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Battery className="w-5 h-5 mr-2" />
              Energy Storage
            </h2>
            
            <div className="space-y-3">
              {energyStorage.batteryFarms.map((battery, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white font-medium">{battery.facilityId}</span>
                    <span className={getStatusColor(battery.status)}>{battery.status}</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{battery.technology}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Charge:</span>
                    <span className="text-white">{battery.currentCharge}/{battery.capacity} MWh</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Efficiency:</span>
                    <span className="text-green-400">{battery.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className="bg-orange-400 h-2 rounded-full transition-all duration-300" 
                      style={{width: `${(battery.currentCharge / battery.capacity) * 100}%`}}
                    ></div>
                  </div>
                </div>
              ))}
              
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Pumped Hydro</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Facilities:</span>
                    <span className="text-white">{energyStorage.pumpedHydro.facilities}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Level:</span>
                    <span className="text-blue-400">
                      {(energyStorage.pumpedHydro.currentLevel / 1000).toFixed(1)}GWh
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={getStatusColor(energyStorage.pumpedHydro.status)}>
                      {energyStorage.pumpedHydro.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Grid Systems */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Network className="w-5 h-5 mr-2" />
              Smart Grid Systems
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Sensors</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Deployed:</span>
                    <span className="text-green-400">{smartGridSystems.sensors.totalDeployed.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Operational:</span>
                    <span className="text-green-400">{smartGridSystems.sensors.operational.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Data Latency:</span>
                    <span className="text-blue-400">{smartGridSystems.sensors.dataLatency}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Automation</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Controls:</span>
                    <span className={getStatusColor(smartGridSystems.automation.autonomousControls)}>
                      {smartGridSystems.automation.autonomousControls}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Response Time:</span>
                    <span className="text-green-400">{smartGridSystems.automation.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accuracy:</span>
                    <span className="text-green-400">{smartGridSystems.automation.decisionAccuracy}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}