import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Zap, Battery, Sun, Wind, TrendingUp, AlertTriangle, CheckCircle, Activity, Settings, Eye, Gauge, Power } from 'lucide-react';

const EnergyOperationsCenter = () => {
  const [energyStatus, setEnergyStatus] = useState({
    totalGeneration: 2847.6, // MW
    totalDemand: 2234.8, // MW
    gridFrequency: 60.02, // Hz
    systemEfficiency: 94.3, // %
    renewableShare: 67.8, // %
    peakDemand: 2956.4, // MW
    carbonIntensity: 142.5, // gCO2/kWh
    gridStability: 99.2 // %
  });

  const [powerGenerationSources, setPowerGenerationSources] = useState([
    {
      id: 'SOLAR-001',
      name: 'Desert Solar Farm',
      type: 'Solar PV',
      capacity: 540, // MW
      currentOutput: 487.3,
      efficiency: 90.2,
      availability: 98.7,
      location: 'Nevada Desert',
      status: 'operational',
      batteryStorage: 225, // MWh
      batteryLevel: 78.5,
      irradiance: 876 // W/m²
    },
    {
      id: 'WIND-001',
      name: 'Offshore Wind Array',
      type: 'Wind Turbine',
      capacity: 450,
      currentOutput: 321.7,
      efficiency: 71.5,
      availability: 96.3,
      location: 'Atlantic Coast',
      status: 'operational',
      windSpeed: 14.2, // m/s
      turbineCount: 75,
      gridConnection: 99.1
    },
    {
      id: 'HYDRO-001',
      name: 'Mountain Hydro Plant',
      type: 'Hydroelectric',
      capacity: 380,
      currentOutput: 342.8,
      efficiency: 90.2,
      availability: 99.8,
      location: 'Rocky Mountains',
      status: 'operational',
      waterLevel: 87.4, // %
      flowRate: 1240, // m³/s
      turbineEfficiency: 94.1
    },
    {
      id: 'GAS-001',
      name: 'Natural Gas Peaker',
      type: 'Natural Gas',
      capacity: 650,
      currentOutput: 489.2,
      efficiency: 75.3,
      availability: 97.1,
      location: 'Central Grid',
      status: 'operational',
      fuelLevel: 89.3, // %
      emissions: 389, // gCO2/kWh
      rampRate: 15 // MW/min
    },
    {
      id: 'NUCLEAR-001',
      name: 'Central Nuclear Plant',
      type: 'Nuclear',
      capacity: 1200,
      currentOutput: 1156.8,
      efficiency: 96.4,
      availability: 99.9,
      location: 'Central Region',
      status: 'operational',
      reactorTemp: 287.4, // °C
      coolantFlow: 98.7, // %
      controlRodPosition: 23.4 // %
    }
  ]);

  const [scadaMonitoring, setScadaMonitoring] = useState([
    {
      id: 'SCADA-001',
      location: 'Substation Alpha',
      type: 'Distribution',
      voltage: 138.2, // kV
      current: 428.7, // A
      power: 58.9, // MW
      frequency: 60.01, // Hz
      status: 'normal',
      transformerTemp: 45.2, // °C
      loadFactor: 67.3,
      alarms: 0
    },
    {
      id: 'SCADA-002',
      location: 'Substation Beta',
      type: 'Transmission',
      voltage: 345.8,
      current: 1247.3,
      power: 431.2,
      frequency: 60.02,
      status: 'normal',
      transformerTemp: 52.1,
      loadFactor: 89.4,
      alarms: 0
    },
    {
      id: 'SCADA-003',
      location: 'Substation Gamma',
      type: 'Distribution',
      voltage: 69.4,
      current: 687.9,
      power: 47.7,
      frequency: 59.98,
      status: 'warning',
      transformerTemp: 67.8,
      loadFactor: 92.1,
      alarms: 1
    },
    {
      id: 'SCADA-004',
      location: 'Substation Delta',
      type: 'Generation',
      voltage: 500.2,
      current: 2134.5,
      power: 1067.1,
      frequency: 60.03,
      status: 'normal',
      transformerTemp: 49.6,
      loadFactor: 78.9,
      alarms: 0
    },
    {
      id: 'SCADA-005',
      location: 'Substation Epsilon',
      type: 'Industrial',
      voltage: 23.1,
      current: 892.3,
      power: 20.6,
      frequency: 60.00,
      status: 'normal',
      transformerTemp: 41.3,
      loadFactor: 56.7,
      alarms: 0
    }
  ]);

  const [gridPerformance, setGridPerformance] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      generation: 2834.2,
      demand: 2220.5,
      frequency: 60.01,
      stability: 99.1
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      generation: 2841.8,
      demand: 2228.3,
      frequency: 60.02,
      stability: 99.0
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      generation: 2845.6,
      demand: 2231.7,
      frequency: 60.01,
      stability: 99.2
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      generation: 2846.3,
      demand: 2233.1,
      frequency: 60.02,
      stability: 99.1
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      generation: 2847.2,
      demand: 2234.5,
      frequency: 60.02,
      stability: 99.2
    },
    {
      time: new Date().toLocaleTimeString(),
      generation: 2847.6,
      demand: 2234.8,
      frequency: 60.02,
      stability: 99.2
    }
  ]);

  const [energyAlerts, setEnergyAlerts] = useState([
    {
      id: 'ENE-001',
      severity: 'warning',
      type: 'High Temperature',
      message: 'Substation Gamma transformer temperature elevated - monitoring closely',
      timestamp: new Date(),
      status: 'active',
      location: 'Substation Gamma',
      impact: 'medium'
    },
    {
      id: 'ENE-002',
      severity: 'caution',
      type: 'Demand Spike',
      message: 'Grid demand approaching 2300 MW - preparing peaker units',
      timestamp: new Date(Date.now() - 180000),
      status: 'monitoring',
      location: 'System Wide',
      impact: 'low'
    },
    {
      id: 'ENE-003',
      severity: 'info',
      type: 'Renewable Milestone',
      message: 'Renewable energy share reached 68% - exceeding sustainability targets',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      location: 'Grid Operations',
      impact: 'positive'
    }
  ]);

  const [demandForecast, setDemandForecast] = useState([
    {
      hour: '00:00',
      forecasted: 1987.3,
      actual: 1992.1,
      residential: 1134.2,
      commercial: 623.8,
      industrial: 234.1
    },
    {
      hour: '06:00',
      forecasted: 2156.7,
      actual: 2148.9,
      residential: 1287.4,
      commercial: 672.3,
      industrial: 189.2
    },
    {
      hour: '12:00',
      forecasted: 2289.4,
      actual: 2234.8,
      residential: 1456.7,
      commercial: 598.7,
      industrial: 179.4
    },
    {
      hour: '18:00',
      forecasted: 2654.3,
      actual: 2589.2,
      residential: 1789.6,
      commercial: 634.2,
      industrial: 165.4
    },
    {
      hour: '21:00',
      forecasted: 2456.8,
      actual: 2423.7,
      residential: 1634.5,
      commercial: 589.3,
      industrial: 199.9
    }
  ]);

  const [energyTeam, setEnergyTeam] = useState([
    {
      name: 'Grid Manager Thompson',
      position: 'Grid Operations Manager',
      shift: 'Day Shift',
      status: 'on-duty',
      location: 'Control Room',
      experience: '18 years'
    },
    {
      name: 'SCADA Operator Wilson',
      position: 'SCADA Operations Specialist',
      shift: 'Day Shift',
      status: 'monitoring',
      location: 'SCADA Center',
      experience: '12 years'
    },
    {
      name: 'Renewable Coordinator Kim',
      position: 'Renewable Energy Coordinator',
      shift: 'Day Shift',
      status: 'optimizing',
      location: 'Renewable Control',
      experience: '9 years'
    },
    {
      name: 'Load Dispatcher Rodriguez',
      position: 'Load Dispatch Specialist',
      shift: 'Day Shift',
      status: 'forecasting',
      location: 'Load Center',
      experience: '15 years'
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    pmuAccuracy: 99.8, // Phasor Measurement Units
    scadaReliability: 99.95,
    emsIntegration: 98.7, // Energy Management System
    cybersecurity: 99.1,
    loadForecastAccuracy: 96.3,
    renewableIntegration: 94.8,
    gridAutomation: 91.2,
    marketIntegration: 87.9
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update energy status
      setEnergyStatus(prev => ({
        ...prev,
        totalGeneration: Math.max(2500, Math.min(3200, prev.totalGeneration + (Math.random() - 0.5) * 50)),
        totalDemand: Math.max(2000, Math.min(2800, prev.totalDemand + (Math.random() - 0.5) * 40)),
        gridFrequency: Math.max(59.95, Math.min(60.05, prev.gridFrequency + (Math.random() - 0.5) * 0.02)),
        systemEfficiency: Math.max(90, Math.min(98, prev.systemEfficiency + (Math.random() - 0.5) * 0.5)),
        renewableShare: Math.max(60, Math.min(75, prev.renewableShare + (Math.random() - 0.5) * 1)),
        gridStability: Math.max(98, Math.min(100, prev.gridStability + (Math.random() - 0.5) * 0.2))
      }));

      // Update power generation sources
      setPowerGenerationSources(prev => prev.map(source => {
        const newOutput = Math.max(source.capacity * 0.3, Math.min(source.capacity, source.currentOutput + (Math.random() - 0.5) * 20));
        return {
          ...source,
          currentOutput: newOutput,
          efficiency: Math.max(70, Math.min(98, source.efficiency + (Math.random() - 0.5) * 1)),
          availability: Math.max(95, Math.min(100, source.availability + (Math.random() - 0.5) * 0.2)),
          batteryLevel: source.batteryStorage ? Math.max(20, Math.min(100, source.batteryLevel + (Math.random() - 0.5) * 2)) : undefined,
          windSpeed: source.type === 'Wind Turbine' ? Math.max(8, Math.min(25, source.windSpeed + (Math.random() - 0.5) * 2)) : undefined,
          waterLevel: source.type === 'Hydroelectric' ? Math.max(70, Math.min(95, source.waterLevel + (Math.random() - 0.5) * 1)) : undefined,
          fuelLevel: source.type === 'Natural Gas' ? Math.max(60, Math.min(100, source.fuelLevel - Math.random() * 0.1)) : undefined,
          reactorTemp: source.type === 'Nuclear' ? Math.max(280, Math.min(300, source.reactorTemp + (Math.random() - 0.5) * 2)) : undefined
        };
      }));

      // Update SCADA monitoring
      setScadaMonitoring(prev => prev.map(station => ({
        ...station,
        voltage: Math.max(station.voltage * 0.95, Math.min(station.voltage * 1.05, station.voltage + (Math.random() - 0.5) * 2)),
        current: Math.max(station.current * 0.8, Math.min(station.current * 1.2, station.current + (Math.random() - 0.5) * 20)),
        power: Math.max(station.power * 0.7, Math.min(station.power * 1.3, station.power + (Math.random() - 0.5) * 5)),
        frequency: Math.max(59.95, Math.min(60.05, station.frequency + (Math.random() - 0.5) * 0.02)),
        transformerTemp: Math.max(35, Math.min(80, station.transformerTemp + (Math.random() - 0.5) * 2)),
        loadFactor: Math.max(40, Math.min(95, station.loadFactor + (Math.random() - 0.5) * 3))
      })));

      // Update grid performance
      const newPerformanceData = {
        time: new Date().toLocaleTimeString(),
        generation: energyStatus.totalGeneration,
        demand: energyStatus.totalDemand,
        frequency: energyStatus.gridFrequency,
        stability: energyStatus.gridStability
      };
      
      setGridPerformance(prev => [...prev.slice(1), newPerformanceData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        pmuAccuracy: Math.max(99, Math.min(100, prev.pmuAccuracy + (Math.random() - 0.5) * 0.1)),
        scadaReliability: Math.max(99, Math.min(100, prev.scadaReliability + (Math.random() - 0.5) * 0.05)),
        emsIntegration: Math.max(95, Math.min(100, prev.emsIntegration + (Math.random() - 0.5) * 0.2)),
        cybersecurity: Math.max(98, Math.min(100, prev.cybersecurity + (Math.random() - 0.5) * 0.1))
      }));

      // Occasionally add new energy alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['High Temperature', 'Demand Spike', 'Frequency Deviation', 'Equipment Status'];
        const severities = ['info', 'caution', 'warning', 'critical'];
        const locations = ['Substation Alpha', 'Substation Beta', 'System Wide', 'Solar Farm', 'Wind Array'];
        
        const newAlert = {
          id: `ENE-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time energy operations alert',
          timestamp: new Date(),
          status: 'active',
          location: locations[Math.floor(Math.random() * locations.length)],
          impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setEnergyAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [energyStatus.totalGeneration, energyStatus.totalDemand, energyStatus.gridFrequency, energyStatus.gridStability]);

  const getGenerationStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'maintenance': return '#8B5CF6';
      case 'offline': return '#EF4444';
      case 'ramping': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  const getScadaStatusColor = (status) => {
    switch (status) {
      case 'normal': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'alarm': return '#EF4444';
      case 'offline': return '#6B7280';
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

  const getSourceTypeColor = (type) => {
    switch (type) {
      case 'Solar PV': return '#F59E0B';
      case 'Wind Turbine': return '#3B82F6';
      case 'Hydroelectric': return '#06B6D4';
      case 'Natural Gas': return '#8B5CF6';
      case 'Nuclear': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const energyMixDistribution = [
    { name: 'Nuclear', value: 40.7, color: '#EF4444' },
    { name: 'Solar PV', value: 17.1, color: '#F59E0B' },
    { name: 'Natural Gas', value: 17.2, color: '#8B5CF6' },
    { name: 'Wind', value: 11.3, color: '#3B82F6' },
    { name: 'Hydro', value: 12.0, color: '#06B6D4' },
    { name: 'Other', value: 1.7, color: '#6B7280' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Zap className="w-8 h-8 text-yellow-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">ENERGY OPERATIONS CENTER</h1>
            <p className="text-gray-400">Smart grid management, SCADA operations, renewable energy monitoring, and power quality control</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{energyStatus.totalGeneration.toFixed(1)}</div>
            <div className="text-xs text-gray-400">GENERATION MW</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{energyStatus.totalDemand.toFixed(1)}</div>
            <div className="text-xs text-gray-400">DEMAND MW</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{energyStatus.gridFrequency.toFixed(2)}</div>
            <div className="text-xs text-gray-400">FREQUENCY HZ</div>
          </div>
        </div>
      </div>

      {/* Energy KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Gauge className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">EFFICIENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{energyStatus.systemEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Sun className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">RENEWABLE</span>
          </div>
          <div className="text-xl font-bold text-white">{energyStatus.renewableShare.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Share</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">PEAK DEMAND</span>
          </div>
          <div className="text-xl font-bold text-white">{energyStatus.peakDemand.toFixed(0)}</div>
          <div className="text-xs text-gray-400">MW</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">CARBON</span>
          </div>
          <div className="text-xl font-bold text-white">{energyStatus.carbonIntensity.toFixed(0)}</div>
          <div className="text-xs text-gray-400">gCO₂/kWh</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">STABILITY</span>
          </div>
          <div className="text-xl font-bold text-white">{energyStatus.gridStability.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Grid</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Power className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">RESERVE</span>
          </div>
          <div className="text-xl font-bold text-white">{((energyStatus.totalGeneration - energyStatus.totalDemand) / energyStatus.totalDemand * 100).toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Margin</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Power Generation Sources */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            POWER GENERATION
          </h3>
          <div className="space-y-3">
            {powerGenerationSources.map(source => (
              <div key={source.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getSourceTypeColor(source.type) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{source.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getGenerationStatusColor(source.status)}20`, 
                      color: getGenerationStatusColor(source.status) 
                    }}>
                      {source.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{((source.currentOutput / source.capacity) * 100).toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Type: <span className="text-blue-400">{source.type}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Output</span>
                    <span className="text-green-400">{source.currentOutput.toFixed(1)} MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-blue-400">{source.capacity} MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Efficiency</span>
                    <span className="text-purple-400">{source.efficiency.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-white">{source.availability.toFixed(1)}%</span>
                  </div>
                </div>
                
                {source.batteryStorage && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-yellow-400">Battery: {source.batteryLevel.toFixed(1)}%</span>
                    <span className="text-gray-500">{source.batteryStorage} MWh</span>
                  </div>
                )}
                
                {source.windSpeed && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-cyan-400">Wind: {source.windSpeed.toFixed(1)} m/s</span>
                    <span className="text-gray-500">{source.turbineCount} turbines</span>
                  </div>
                )}
                
                {source.waterLevel && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">Reservoir: {source.waterLevel.toFixed(1)}%</span>
                    <span className="text-gray-500">{source.flowRate} m³/s</span>
                  </div>
                )}
                
                {source.fuelLevel && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-orange-400">Fuel: {source.fuelLevel.toFixed(1)}%</span>
                    <span className="text-gray-500">{source.emissions} gCO₂/kWh</span>
                  </div>
                )}
                
                {source.reactorTemp && (
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-red-400">Reactor: {source.reactorTemp.toFixed(1)}°C</span>
                    <span className="text-gray-500">Core {source.controlRodPosition.toFixed(1)}%</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SCADA Monitoring */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Settings className="w-5 h-5 mr-2 text-green-400" />
            SCADA MONITORING
          </h3>
          <div className="space-y-3">
            {scadaMonitoring.map(station => (
              <div key={station.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getScadaStatusColor(station.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{station.id}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getScadaStatusColor(station.status)}20`, 
                      color: getScadaStatusColor(station.status) 
                    }}>
                      {station.status.toUpperCase()}
                    </span>
                    {station.alarms > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {station.alarms} Alarm{station.alarms > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  {station.location} - {station.type}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Voltage</span>
                    <span className="text-green-400">{station.voltage.toFixed(1)} kV</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current</span>
                    <span className="text-blue-400">{station.current.toFixed(1)} A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Power</span>
                    <span className="text-purple-400">{station.power.toFixed(1)} MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Frequency</span>
                    <span className="text-white">{station.frequency.toFixed(2)} Hz</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Temp: {station.transformerTemp.toFixed(1)}°C</span>
                  <span className="text-gray-500">Load: {station.loadFactor.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demand Forecast & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            DEMAND FORECAST & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {demandForecast.slice(0, 4).map((forecast, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{forecast.hour}</span>
                  <span className="text-xs text-gray-400">
                    {((forecast.actual - forecast.forecasted) / forecast.forecasted * 100).toFixed(1)}% variance
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Forecast</span>
                    <span className="text-blue-400">{forecast.forecasted.toFixed(0)} MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Actual</span>
                    <span className="text-green-400">{forecast.actual.toFixed(0)} MW</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300">
                  Residential: {((forecast.residential / forecast.actual) * 100).toFixed(0)}% | 
                  Commercial: {((forecast.commercial / forecast.actual) * 100).toFixed(0)}% | 
                  Industrial: {((forecast.industrial / forecast.actual) * 100).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>

          {/* Energy Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">System Alerts</div>
            <div className="space-y-2">
              {energyAlerts.slice(0, 3).map(alert => (
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
                    <span className="text-blue-400">{alert.location}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Grid Performance */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME GRID PERFORMANCE</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={gridPerformance}>
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
                dataKey="generation" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Generation (MW)"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="demand" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Demand (MW)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="frequency" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Frequency (Hz)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Energy Mix & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">ENERGY MIX & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={energyMixDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {energyMixDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Energy Mix']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {energyMixDistribution.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-gray-400 text-sm">{source.name}</span>
                  </div>
                  <span className="text-white font-semibold">{source.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">PMU Accuracy</span>
                    <span className="text-green-400">{systemMetrics.pmuAccuracy.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">SCADA Reliability</span>
                    <span className="text-blue-400">{systemMetrics.scadaReliability.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">EMS Integration</span>
                    <span className="text-purple-400">{systemMetrics.emsIntegration.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cybersecurity</span>
                    <span className="text-green-400">{systemMetrics.cybersecurity.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Energy Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Energy Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-yellow-600 hover:bg-yellow-700 rounded text-xs transition-colors">
                  <Zap className="w-3 h-3 inline mr-1" />
                  Grid Management
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Sun className="w-3 h-3 inline mr-1" />
                  Renewable Control
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  SCADA Monitoring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyOperationsCenter;