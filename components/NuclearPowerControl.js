// NuclearPowerControl.js - Nuclear Power Plant Control Center & Operations Monitoring Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter } from 'recharts';

const NuclearPowerControl = () => {
  const [reactorUnits, setReactorUnits] = useState([
    {
      id: 'unit_001',
      name: 'Unit 1 - PWR',
      type: 'PRESSURIZED_WATER_REACTOR',
      status: 'OPERATING',
      powerLevel: 98.7, // percentage of rated power
      ratedPowerMWe: 1200,
      actualPowerMWe: 1184,
      reactorCoolantTemp: 315.2, // Celsius
      reactorPressure: 15.5, // MPa
      steamGeneratorPressure: 6.8,
      controlRodPosition: 225, // steps withdrawn
      neutronFlux: 100.2, // percentage
      primaryCoolantFlow: 85400, // m³/h
      fuelBurnup: 18750, // MWd/tU
      lastRefuel: Date.now() - 245 * 24 * 60 * 60 * 1000,
      nextRefuel: Date.now() + 120 * 24 * 60 * 60 * 1000,
      operatorLicense: 'SR001',
      shiftSupervisor: 'John Mitchell',
      lastMaintenance: Date.now() - 7 * 24 * 60 * 60 * 1000,
      safetyStatus: 'NORMAL',
      radiationLevel: 0.012, // mSv/h
      emergencyCore: 'AVAILABLE'
    },
    {
      id: 'unit_002',
      name: 'Unit 2 - PWR',
      type: 'PRESSURIZED_WATER_REACTOR',
      status: 'MAINTENANCE',
      powerLevel: 0,
      ratedPowerMWe: 1200,
      actualPowerMWe: 0,
      reactorCoolantTemp: 65.8,
      reactorPressure: 0.1,
      steamGeneratorPressure: 0.1,
      controlRodPosition: 0, // fully inserted
      neutronFlux: 0,
      primaryCoolantFlow: 12500, // reduced for maintenance
      fuelBurnup: 22300,
      lastRefuel: Date.now() - 45 * 24 * 60 * 60 * 1000,
      nextRefuel: Date.now() + 320 * 24 * 60 * 60 * 1000,
      operatorLicense: 'MAINT',
      shiftSupervisor: 'Sarah Rodriguez',
      lastMaintenance: Date.now() - 5 * 60 * 60 * 1000,
      safetyStatus: 'SHUTDOWN',
      radiationLevel: 0.005,
      emergencyCore: 'AVAILABLE'
    },
    {
      id: 'unit_003',
      name: 'Unit 3 - BWR',
      type: 'BOILING_WATER_REACTOR',
      status: 'OPERATING',
      powerLevel: 85.4,
      ratedPowerMWe: 1100,
      actualPowerMWe: 939,
      reactorCoolantTemp: 288.7,
      reactorPressure: 7.2,
      steamGeneratorPressure: 7.0, // BWR doesn't have steam generator, this is steam pressure
      controlRodPosition: 180,
      neutronFlux: 85.8,
      primaryCoolantFlow: 45600,
      fuelBurnup: 28900,
      lastRefuel: Date.now() - 89 * 24 * 60 * 60 * 1000,
      nextRefuel: Date.now() + 276 * 24 * 60 * 60 * 1000,
      operatorLicense: 'RO003',
      shiftSupervisor: 'Michael Chen',
      lastMaintenance: Date.now() - 12 * 24 * 60 * 60 * 1000,
      safetyStatus: 'NORMAL',
      radiationLevel: 0.018,
      emergencyCore: 'AVAILABLE'
    }
  ]);

  const [controlOperators, setControlOperators] = useState([
    {
      id: 'op_001',
      name: 'James Patterson',
      role: 'Senior Reactor Operator',
      license: 'SRO-7542',
      unit: 'Unit 1',
      shift: 'DAY_SHIFT',
      status: 'ON_WATCH',
      experience: '15 years',
      certification: 'NRC Licensed SRO',
      lastTraining: Date.now() - 45 * 24 * 60 * 60 * 1000,
      nextTraining: Date.now() + 45 * 24 * 60 * 60 * 1000,
      medicalStatus: 'CURRENT',
      alertsHandled: 3,
      proceduresCompleted: 8,
      lastBreak: Date.now() - 3 * 60 * 60 * 1000,
      radiationExposure: 2.47, // mSv this quarter
      location: 'Main Control Room'
    },
    {
      id: 'op_002',
      name: 'Jennifer Walsh',
      role: 'Reactor Operator',
      license: 'RO-8934',
      unit: 'Unit 3',
      shift: 'DAY_SHIFT',
      status: 'ON_WATCH',
      experience: '8 years',
      certification: 'NRC Licensed RO',
      lastTraining: Date.now() - 60 * 24 * 60 * 60 * 1000,
      nextTraining: Date.now() + 30 * 24 * 60 * 60 * 1000,
      medicalStatus: 'CURRENT',
      alertsHandled: 1,
      proceduresCompleted: 5,
      lastBreak: Date.now() - 2.5 * 60 * 60 * 1000,
      radiationExposure: 1.89,
      location: 'Unit 3 Control Panel'
    },
    {
      id: 'op_003',
      name: 'Robert Kim',
      role: 'Shift Manager',
      license: 'SM-2156',
      unit: 'All Units',
      shift: 'DAY_SHIFT',
      status: 'ON_DUTY',
      experience: '22 years',
      certification: 'Shift Manager License',
      lastTraining: Date.now() - 30 * 24 * 60 * 60 * 1000,
      nextTraining: Date.now() + 60 * 24 * 60 * 60 * 1000,
      medicalStatus: 'CURRENT',
      alertsHandled: 7,
      proceduresCompleted: 12,
      lastBreak: Date.now() - 4 * 60 * 60 * 1000,
      radiationExposure: 3.12,
      location: 'Control Room Supervisor Station'
    },
    {
      id: 'op_004',
      name: 'Maria Santos',
      role: 'Maintenance Supervisor',
      license: 'MS-4789',
      unit: 'Unit 2',
      shift: 'DAY_SHIFT',
      status: 'ACTIVE',
      experience: '12 years',
      certification: 'Maintenance Supervisor',
      lastTraining: Date.now() - 90 * 24 * 60 * 60 * 1000,
      nextTraining: Date.now() + 90 * 24 * 60 * 60 * 1000,
      medicalStatus: 'CURRENT',
      alertsHandled: 2,
      proceduresCompleted: 15,
      lastBreak: Date.now() - 1 * 60 * 60 * 1000,
      radiationExposure: 4.67,
      location: 'Unit 2 Maintenance Area'
    }
  ]);

  const [safetySystems, setSafetySystems] = useState([
    {
      id: 'safety_001',
      name: 'Emergency Core Cooling System (ECCS)',
      type: 'ACTIVE_SAFETY',
      status: 'STANDBY',
      redundancy: 'TRIPLE',
      lastTest: Date.now() - 15 * 24 * 60 * 60 * 1000,
      nextTest: Date.now() + 15 * 24 * 60 * 60 * 1000,
      availability: 99.87, // percentage
      pumps: [
        { id: 'pump_a', status: 'STANDBY', flow: 0 },
        { id: 'pump_b', status: 'STANDBY', flow: 0 },
        { id: 'pump_c', status: 'STANDBY', flow: 0 }
      ],
      valves: 24,
      valvesOperable: 24,
      waterLevel: 95.4, // percentage of tank capacity
      boronConcentration: 2500 // ppm
    },
    {
      id: 'safety_002',
      name: 'Containment System',
      type: 'PASSIVE_SAFETY',
      status: 'NORMAL',
      redundancy: 'SINGLE',
      lastTest: Date.now() - 30 * 24 * 60 * 60 * 1000,
      nextTest: Date.now() + 335 * 24 * 60 * 60 * 1000,
      availability: 100.0,
      pressure: 0.1, // MPa (atmospheric)
      temperature: 32.1, // Celsius
      humidity: 65.7, // percentage
      leakRate: 0.02, // percentage per day
      isolation: 'COMPLETE',
      atmosphere: [
        { gas: 'Nitrogen', percentage: 78.1 },
        { gas: 'Oxygen', percentage: 20.9 },
        { gas: 'Other', percentage: 1.0 }
      ]
    },
    {
      id: 'safety_003',
      name: 'Control Rod Drive System',
      type: 'ACTIVE_SAFETY',
      status: 'OPERATING',
      redundancy: 'DOUBLE',
      lastTest: Date.now() - 7 * 24 * 60 * 60 * 1000,
      nextTest: Date.now() + 23 * 24 * 60 * 60 * 1000,
      availability: 98.95,
      rodsClusters: 53,
      rodsOperable: 53,
      rodsFullyInserted: 28,
      rodsPartiallyWithdrawn: 25,
      scranCapability: 'AVAILABLE',
      insertionTime: 2.1, // seconds for full insertion
      magneticPower: 'NORMAL'
    },
    {
      id: 'safety_004',
      name: 'Reactor Protection System (RPS)',
      type: 'INSTRUMENTATION',
      status: 'MONITORING',
      redundancy: 'QUADRUPLE',
      lastTest: Date.now() - 1 * 24 * 60 * 60 * 1000,
      nextTest: Date.now() + 29 * 24 * 60 * 60 * 1000,
      availability: 99.99,
      channels: [
        { id: 'ch_a', status: 'NORMAL', bias: 0.12 },
        { id: 'ch_b', status: 'NORMAL', bias: -0.08 },
        { id: 'ch_c', status: 'NORMAL', bias: 0.15 },
        { id: 'ch_d', status: 'NORMAL', bias: -0.03 }
      ],
      tripConditions: 12,
      tripConditionsActive: 12,
      response: 50 // milliseconds
    }
  ]);

  const [plantMetrics, setPlantMetrics] = useState({
    totalPowerGeneration: 2123, // MWe total
    plantCapacityFactor: 94.3, // percentage
    thermalEfficiency: 33.8,
    steamPressure: 6.75, // MPa average
    condenserVacuum: 95.2, // percentage
    feedwaterTemperature: 224.6, // Celsius
    electricalOutput: 2089, // MWe net
    heatRate: 10680, // kJ/kWh
    nuclearFuelCost: 0.67, // cents per kWh
    operatingCost: 2.1, // cents per kWh
    safetySystemsAvailable: 98.8, // percentage
    automaticScrams: 0, // this year
    unplannedShutdowns: 1, // this year
    industrialSafetyRate: 0.12, // incidents per 200,000 hours
    radiationExposureTotal: 24.7, // person-mSv this quarter
    environmentalCompliance: 100.0,
    wasteVolume: 145.6, // cubic meters this year
    nuclearSafety: 'GREEN'
  });

  const [radiationMonitoring, setRadiationMonitoring] = useState([
    {
      id: 'rad_001',
      location: 'Reactor Building',
      level: 0.025, // mSv/h
      threshold: 1.0,
      trend: 'STABLE',
      lastCalibration: Date.now() - 30 * 24 * 60 * 60 * 1000,
      status: 'NORMAL',
      detector: 'Ion Chamber IC-101'
    },
    {
      id: 'rad_002',
      location: 'Control Room',
      level: 0.002,
      threshold: 0.1,
      trend: 'STABLE',
      lastCalibration: Date.now() - 25 * 24 * 60 * 60 * 1000,
      status: 'NORMAL',
      detector: 'GM Detector GM-201'
    },
    {
      id: 'rad_003',
      location: 'Turbine Building',
      level: 0.008,
      threshold: 0.5,
      trend: 'DECREASING',
      lastCalibration: Date.now() - 20 * 24 * 60 * 60 * 1000,
      status: 'NORMAL',
      detector: 'Scintillation SC-301'
    },
    {
      id: 'rad_004',
      location: 'Stack Effluent',
      level: 0.0001,
      threshold: 0.01,
      trend: 'STABLE',
      lastCalibration: Date.now() - 10 * 24 * 60 * 60 * 1000,
      status: 'NORMAL',
      detector: 'Beta/Gamma BG-401'
    },
    {
      id: 'rad_005',
      location: 'Site Boundary',
      level: 0.00005,
      threshold: 0.001,
      trend: 'STABLE',
      lastCalibration: Date.now() - 35 * 24 * 60 * 60 * 1000,
      status: 'NORMAL',
      detector: 'Environmental EN-501'
    }
  ]);

  const [emergencyProcedures, setEmergencyProcedures] = useState([
    {
      id: 'eop_001',
      name: 'Emergency Operating Procedure 1',
      title: 'Reactor Trip Response',
      status: 'STANDBY',
      lastUpdate: Date.now() - 120 * 24 * 60 * 60 * 1000,
      nextReview: Date.now() + 245 * 24 * 60 * 60 * 1000,
      steps: 47,
      criticalActions: 8,
      estimatedTime: '45 minutes',
      trainingRequired: 'Annual',
      lastDrill: Date.now() - 90 * 24 * 60 * 60 * 1000
    },
    {
      id: 'eop_002',
      name: 'Emergency Operating Procedure 2',
      title: 'Loss of Coolant Accident',
      status: 'STANDBY',
      lastUpdate: Date.now() - 90 * 24 * 60 * 60 * 1000,
      nextReview: Date.now() + 275 * 24 * 60 * 60 * 1000,
      steps: 73,
      criticalActions: 15,
      estimatedTime: '2 hours',
      trainingRequired: 'Biannual',
      lastDrill: Date.now() - 180 * 24 * 60 * 60 * 1000
    },
    {
      id: 'eop_003',
      name: 'Emergency Operating Procedure 3',
      title: 'Steam Generator Tube Rupture',
      status: 'STANDBY',
      lastUpdate: Date.now() - 60 * 24 * 60 * 60 * 1000,
      nextReview: Date.now() + 305 * 24 * 60 * 60 * 1000,
      steps: 52,
      criticalActions: 11,
      estimatedTime: '90 minutes',
      trainingRequired: 'Annual',
      lastDrill: Date.now() - 120 * 24 * 60 * 60 * 1000
    }
  ]);

  const [powerTrends, setPowerTrends] = useState([]);
  const [safetyTrends, setSafetyTrends] = useState([]);

  const generatePowerTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        unit1_power: Math.random() * 5 + 95, // 95-100%
        unit2_power: 0, // maintenance
        unit3_power: Math.random() * 10 + 80, // 80-90%
        total_generation: Math.random() * 100 + 2000, // 2000-2100 MWe
        capacity_factor: Math.random() * 5 + 92, // 92-97%
        efficiency: Math.random() * 2 + 32 // 32-34%
      });
    }
    return data;
  };

  const generateSafetyTrends = () => {
    return [
      { system: 'ECCS', availability: 99.87, lastTest: 15, nextTest: 15 },
      { system: 'Containment', availability: 100.0, lastTest: 30, nextTest: 335 },
      { system: 'Control Rods', availability: 98.95, lastTest: 7, nextTest: 23 },
      { system: 'RPS', availability: 99.99, lastTest: 1, nextTest: 29 }
    ];
  };

  useEffect(() => {
    setPowerTrends(generatePowerTrends());
    setSafetyTrends(generateSafetyTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update reactor units
      setReactorUnits(prev => prev.map(unit => {
        if (unit.status === 'OPERATING') {
          let newPowerLevel = unit.powerLevel + (Math.random() - 0.5) * 2;
          newPowerLevel = Math.max(85, Math.min(100, newPowerLevel));
          
          let newTemp = unit.reactorCoolantTemp + (Math.random() - 0.5) * 2;
          newTemp = Math.max(280, Math.min(320, newTemp));
          
          let newPressure = unit.reactorPressure + (Math.random() - 0.5) * 0.5;
          newPressure = Math.max(14, Math.min(16, newPressure));

          return {
            ...unit,
            powerLevel: newPowerLevel,
            actualPowerMWe: Math.floor(unit.ratedPowerMWe * (newPowerLevel / 100)),
            reactorCoolantTemp: newTemp,
            reactorPressure: newPressure,
            neutronFlux: newPowerLevel,
            radiationLevel: Math.max(0.01, Math.min(0.03, unit.radiationLevel + (Math.random() - 0.5) * 0.002))
          };
        }
        return unit;
      }));

      // Update control operators
      setControlOperators(prev => prev.map(operator => ({
        ...operator,
        alertsHandled: operator.status === 'ON_WATCH' ? 
          operator.alertsHandled + Math.floor(Math.random() * 2) : operator.alertsHandled,
        radiationExposure: Math.max(0, Math.min(20, operator.radiationExposure + Math.random() * 0.01))
      })));

      // Update radiation monitoring
      setRadiationMonitoring(prev => prev.map(monitor => ({
        ...monitor,
        level: Math.max(0, Math.min(monitor.threshold * 0.5, 
          monitor.level + (Math.random() - 0.5) * monitor.level * 0.1))
      })));

      // Update plant metrics
      setPlantMetrics(prev => ({
        ...prev,
        totalPowerGeneration: Math.max(1800, Math.min(2400, prev.totalPowerGeneration + (Math.random() - 0.5) * 50)),
        plantCapacityFactor: Math.max(85, Math.min(100, prev.plantCapacityFactor + (Math.random() - 0.5) * 2)),
        thermalEfficiency: Math.max(30, Math.min(36, prev.thermalEfficiency + (Math.random() - 0.5) * 0.5))
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getReactorStatusColor = (status) => {
    switch (status) {
      case 'OPERATING': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'SHUTDOWN': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'EMERGENCY': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getOperatorStatusColor = (status) => {
    switch (status) {
      case 'ON_WATCH': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'ON_DUTY': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'BREAK': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFF_DUTY': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSafetyStatusColor = (status) => {
    switch (status) {
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'OPERATING': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MONITORING': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'TESTING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'ALARM': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getRadiationLevelColor = (level, threshold) => {
    const percentage = (level / threshold) * 100;
    if (percentage < 25) return 'text-green-400';
    if (percentage < 50) return 'text-yellow-400';
    if (percentage < 75) return 'text-orange-400';
    return 'text-red-400';
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 24 * 3600000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / (24 * 3600000))}d ago`;
  };

  const formatTimeToFuture = (timestamp) => {
    const diff = timestamp - Date.now();
    if (diff < 0) return 'Overdue';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
    if (diff < 24 * 3600000) return `${Math.floor(diff / 3600000)}h`;
    return `${Math.floor(diff / (24 * 3600000))}d`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ☢️ NUCLEAR POWER PLANT CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${
            plantMetrics.nuclearSafety === 'GREEN' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
            plantMetrics.nuclearSafety === 'YELLOW' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
            'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            SAFETY {plantMetrics.nuclearSafety}
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {plantMetrics.totalPowerGeneration.toFixed(0)} MWe
          </div>
          <div className="text-sm text-gray-400 font-mono">
            NRC Licensed Facility
          </div>
        </div>
      </div>

      {/* Plant Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">POWER OUTPUT</div>
              <div className="text-2xl font-bold text-green-100">
                {plantMetrics.totalPowerGeneration.toFixed(0)} MWe
              </div>
              <div className="text-xs text-green-300">
                {plantMetrics.plantCapacityFactor.toFixed(1)}% capacity
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">EFFICIENCY</div>
              <div className="text-2xl font-bold text-blue-100">
                {plantMetrics.thermalEfficiency.toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                thermal efficiency
              </div>
            </div>
            <div className="text-3xl opacity-60">🔥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">SAFETY SYSTEMS</div>
              <div className="text-2xl font-bold text-purple-100">
                {plantMetrics.safetySystemsAvailable.toFixed(1)}%
              </div>
              <div className="text-xs text-purple-300">
                available & tested
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">RADIATION</div>
              <div className="text-2xl font-bold text-orange-100">
                {plantMetrics.radiationExposureTotal.toFixed(1)}
              </div>
              <div className="text-xs text-orange-300">
                person-mSv this quarter
              </div>
            </div>
            <div className="text-3xl opacity-60">☢️</div>
          </div>
        </div>
      </div>

      {/* Reactor Units and Control Operators */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Reactor Units */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ☢️ REACTOR UNITS STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {reactorUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{unit.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getReactorStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {unit.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">
                  Supervisor: {unit.shiftSupervisor} | License: {unit.operatorLicense}
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Power Level</div>
                    <div className={unit.powerLevel >= 95 ? 'text-green-400' : unit.powerLevel >= 80 ? 'text-yellow-400' : 'text-orange-400'}>
                      {unit.powerLevel.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Output</div>
                    <div className="text-blue-400">{unit.actualPowerMWe} MWe</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Coolant Temp</div>
                    <div className="text-green-400">{unit.reactorCoolantTemp.toFixed(1)}°C</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Pressure</div>
                    <div className="text-cyan-400">{unit.reactorPressure.toFixed(1)} MPa</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Neutron Flux</div>
                    <div className="text-orange-400">{unit.neutronFlux.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Control Rods</div>
                    <div className="text-pink-400">{unit.controlRodPosition} steps</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Fuel Burnup</div>
                    <div className="text-yellow-400">{(unit.fuelBurnup / 1000).toFixed(1)}K MWd/tU</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Radiation</div>
                    <div className={getRadiationLevelColor(unit.radiationLevel, 0.1)}>
                      {(unit.radiationLevel * 1000).toFixed(1)} μSv/h
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Safety Status</div>
                    <div className={unit.safetyStatus === 'NORMAL' ? 'text-green-400' : 'text-yellow-400'}>
                      {unit.safetyStatus}
                    </div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Next Refuel: </span>
                  <span className="text-indigo-400">{formatTimeToFuture(unit.nextRefuel)}</span>
                  <span className="text-gray-400"> | ECCS: </span>
                  <span className="text-green-400">{unit.emergencyCore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Control Operators */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👨‍🔬 LICENSED OPERATORS
          </h3>
          <div className="space-y-3">
            {controlOperators.map((operator) => (
              <div key={operator.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{operator.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getOperatorStatusColor(operator.status)}`}>
                      {operator.status.replace('_', ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {operator.license}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-2">{operator.role}</div>
                <div className="text-xs text-cyan-400 mb-3">{operator.certification}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Unit Assignment</div>
                    <div className="text-green-400">{operator.unit}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Experience</div>
                    <div className="text-yellow-400">{operator.experience}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Medical Status</div>
                    <div className="text-orange-400">{operator.medicalStatus}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Alerts Handled</div>
                    <div className="text-blue-400">{operator.alertsHandled}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Procedures</div>
                    <div className="text-pink-400">{operator.proceduresCompleted}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Location</div>
                    <div className="text-indigo-400">{operator.location}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Radiation Exposure: </span>
                  <span className={operator.radiationExposure > 10 ? 'text-red-400' : 'text-green-400'}>
                    {operator.radiationExposure.toFixed(2)} mSv
                  </span>
                  <span className="text-gray-400"> | Next Training: </span>
                  <span className="text-purple-400">{formatTimeToFuture(operator.nextTraining)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Safety Systems and Radiation Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Safety Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ SAFETY SYSTEMS
          </h3>
          <div className="space-y-3">
            {safetySystems.map((system) => (
              <div key={system.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{system.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSafetyStatusColor(system.status)}`}>
                      {system.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {system.type.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-3">
                  Redundancy: {system.redundancy} | Availability: {system.availability.toFixed(2)}%
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Last Test</div>
                    <div className="text-green-400">{formatTime(system.lastTest)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Next Test</div>
                    <div className="text-yellow-400">{formatTimeToFuture(system.nextTest)}</div>
                  </div>
                </div>

                {/* System-specific details */}
                {system.pumps && (
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    {system.pumps.map((pump, index) => (
                      <div key={pump.id} className="bg-gray-600 rounded p-1">
                        <div className="text-gray-400">Pump {index + 1}</div>
                        <div className={pump.status === 'STANDBY' ? 'text-blue-400' : 'text-green-400'}>
                          {pump.status}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {system.channels && (
                  <div className="grid grid-cols-4 gap-1 text-xs mb-2">
                    {system.channels.map((channel) => (
                      <div key={channel.id} className="bg-gray-600 rounded p-1">
                        <div className="text-gray-400">{channel.id.toUpperCase()}</div>
                        <div className={channel.status === 'NORMAL' ? 'text-green-400' : 'text-red-400'}>
                          {channel.bias > 0 ? '+' : ''}{(channel.bias * 100).toFixed(1)}%
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {system.rodsOperable && (
                  <div className="text-xs">
                    <span className="text-gray-400">Control Rods: </span>
                    <span className="text-cyan-400">{system.rodsOperable}/{system.rodsClusters} operable</span>
                    <span className="text-gray-400"> | Scram: </span>
                    <span className="text-green-400">{system.scranCapability}</span>
                  </div>
                )}

                {system.waterLevel && (
                  <div className="text-xs">
                    <span className="text-gray-400">Water Level: </span>
                    <span className="text-blue-400">{system.waterLevel.toFixed(1)}%</span>
                    <span className="text-gray-400"> | Boron: </span>
                    <span className="text-purple-400">{system.boronConcentration} ppm</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Radiation Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ☢️ RADIATION MONITORING
          </h3>
          <div className="space-y-3">
            {radiationMonitoring.map((monitor) => (
              <div key={monitor.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{monitor.location}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${
                      monitor.status === 'NORMAL' ? 'text-green-400 bg-green-400/20 border-green-400/30' : 
                      'text-red-400 bg-red-400/20 border-red-400/30'
                    }`}>
                      {monitor.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {monitor.trend}
                  </div>
                </div>
                
                <div className="text-xs text-cyan-400 mb-3">{monitor.detector}</div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Current Level</div>
                    <div className={getRadiationLevelColor(monitor.level, monitor.threshold)}>
                      {monitor.level >= 0.001 ? 
                        `${(monitor.level * 1000).toFixed(1)} μSv/h` : 
                        `${(monitor.level * 1000000).toFixed(1)} nSv/h`
                      }
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Threshold</div>
                    <div className="text-yellow-400">
                      {monitor.threshold >= 0.001 ? 
                        `${(monitor.threshold * 1000).toFixed(1)} μSv/h` : 
                        `${(monitor.threshold * 1000000).toFixed(1)} nSv/h`
                      }
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Percentage</div>
                    <div className="text-orange-400">
                      {((monitor.level / monitor.threshold) * 100).toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Last Calibration: </span>
                  <span className="text-purple-400">{formatTime(monitor.lastCalibration)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Power Trends and Emergency Procedures */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Power Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 POWER GENERATION TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={powerTrends}>
              <defs>
                <linearGradient id="unit1Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="unit3Gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="unit1_power" 
                stroke="#10B981" 
                fill="url(#unit1Gradient)" 
                name="Unit 1 Power %"
              />
              <Area 
                type="monotone" 
                dataKey="unit3_power" 
                stroke="#3B82F6" 
                fill="url(#unit3Gradient)" 
                name="Unit 3 Power %"
              />
              <Line 
                type="monotone" 
                dataKey="capacity_factor" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Capacity Factor %"
              />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Thermal Efficiency %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Emergency Procedures */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 EMERGENCY OPERATING PROCEDURES
          </h3>
          
          <div className="space-y-4">
            {/* EOPs */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Emergency Operating Procedures</h4>
              <div className="space-y-2">
                {emergencyProcedures.map((eop) => (
                  <div key={eop.id} className="bg-gray-700 rounded p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-white font-bold">{eop.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                          {eop.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-cyan-400 mb-2">{eop.title}</div>
                    <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                      <div>
                        <div className="text-gray-400">Steps</div>
                        <div className="text-green-400">{eop.steps}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Critical Actions</div>
                        <div className="text-red-400">{eop.criticalActions}</div>
                      </div>
                      <div>
                        <div className="text-gray-400">Est. Time</div>
                        <div className="text-yellow-400">{eop.estimatedTime}</div>
                      </div>
                    </div>
                    <div className="text-xs">
                      <span className="text-gray-400">Last Drill: </span>
                      <span className="text-purple-400">{formatTime(eop.lastDrill)}</span>
                      <span className="text-gray-400"> | Training: </span>
                      <span className="text-orange-400">{eop.trainingRequired}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety System Availability */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Safety System Availability</h4>
              <div className="space-y-2">
                {safetyTrends.map((system, index) => (
                  <div key={index} className="bg-gray-700 rounded p-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-white">{system.system}</span>
                      <span className={`text-xs font-bold ${
                        system.availability >= 99 ? 'text-green-400' :
                        system.availability >= 95 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {system.availability.toFixed(2)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mb-1">
                      <div 
                        className={`h-2 rounded-full ${
                          system.availability >= 99 ? 'bg-green-400' :
                          system.availability >= 95 ? 'bg-yellow-400' :
                          'bg-red-400'
                        }`}
                        style={{ width: `${system.availability}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400">
                      Last test: {system.lastTest}d ago | Next: {system.nextTest}d
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plant Status Summary */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Plant Status Summary</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Automatic Scrams</div>
                  <div className="text-green-400 font-bold">{plantMetrics.automaticScrams} this year</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Unplanned Shutdowns</div>
                  <div className="text-yellow-400 font-bold">{plantMetrics.unplannedShutdowns} this year</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Safety Rate</div>
                  <div className="text-blue-400 font-bold">{plantMetrics.industrialSafetyRate} per 200K hrs</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Waste Volume</div>
                  <div className="text-purple-400 font-bold">{plantMetrics.wasteVolume.toFixed(1)} m³</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuclearPowerControl;