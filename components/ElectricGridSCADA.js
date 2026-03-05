// ElectricGridSCADA.js - Electric Grid Control Center & SCADA Power System Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

const ElectricGridSCADA = () => {
  const [gridSections, setGridSections] = useState([
    {
      id: 'section_001',
      name: 'North Transmission',
      type: 'TRANSMISSION',
      voltage: 345, // kV
      status: 'NORMAL',
      load: 1847.5, // MW
      capacity: 2100,
      utilization: 87.9,
      frequency: 60.02, // Hz
      powerFactor: 0.95,
      temperature: 65, // °C
      lastUpdate: Date.now() - 2 * 60 * 1000,
      substations: ['North-A', 'North-B', 'North-C'],
      emergencyLevel: 'GREEN',
      maintenanceScheduled: false,
      protectionStatus: 'ARMED'
    },
    {
      id: 'section_002',
      name: 'Central Distribution',
      type: 'DISTRIBUTION',
      voltage: 138,
      status: 'ALERT',
      load: 892.3,
      capacity: 950,
      utilization: 93.9,
      frequency: 59.98,
      powerFactor: 0.92,
      temperature: 78,
      lastUpdate: Date.now() - 30 * 1000,
      substations: ['Central-1', 'Central-2', 'Central-3', 'Central-4'],
      emergencyLevel: 'YELLOW',
      maintenanceScheduled: true,
      protectionStatus: 'ARMED'
    },
    {
      id: 'section_003',
      name: 'South Industrial',
      type: 'INDUSTRIAL',
      voltage: 230,
      status: 'NORMAL',
      load: 1234.7,
      capacity: 1500,
      utilization: 82.3,
      frequency: 60.01,
      powerFactor: 0.98,
      temperature: 72,
      lastUpdate: Date.now() - 1 * 60 * 1000,
      substations: ['South-X', 'South-Y'],
      emergencyLevel: 'GREEN',
      maintenanceScheduled: false,
      protectionStatus: 'ARMED'
    },
    {
      id: 'section_004',
      name: 'East Residential',
      type: 'RESIDENTIAL',
      voltage: 69,
      status: 'MAINTENANCE',
      load: 456.8,
      capacity: 800,
      utilization: 57.1,
      frequency: 60.00,
      powerFactor: 0.89,
      temperature: 58,
      lastUpdate: Date.now() - 5 * 60 * 1000,
      substations: ['East-R1', 'East-R2', 'East-R3'],
      emergencyLevel: 'BLUE',
      maintenanceScheduled: true,
      protectionStatus: 'BLOCKED'
    },
    {
      id: 'section_005',
      name: 'West Renewables',
      type: 'RENEWABLE',
      voltage: 115,
      status: 'NORMAL',
      load: 678.9, // generation
      capacity: 850,
      utilization: 79.9,
      frequency: 60.03,
      powerFactor: 0.96,
      temperature: 45,
      lastUpdate: Date.now() - 1 * 60 * 1000,
      substations: ['Solar-A', 'Wind-B', 'Storage-C'],
      emergencyLevel: 'GREEN',
      maintenanceScheduled: false,
      protectionStatus: 'ARMED'
    }
  ]);

  const [powerPlants, setPowerPlants] = useState([
    {
      id: 'plant_001',
      name: 'Base Load Station 1',
      type: 'NUCLEAR',
      status: 'ONLINE',
      output: 1200, // MW
      capacity: 1250,
      efficiency: 96.0,
      fuelLevel: 85.4,
      temperature: 315, // °C
      pressure: 2250, // PSI
      controlRods: 'AUTO',
      coolantFlow: 'NORMAL',
      turbineSpeed: 1800, // RPM
      generator: 'SYNC',
      lastMaintenance: Date.now() - 30 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 60 * 24 * 60 * 60 * 1000,
      operationalHours: 8760,
      emissions: 0, // tons CO2/hour
      operator: 'Auto Control'
    },
    {
      id: 'plant_002',
      name: 'Peaking Unit Alpha',
      type: 'GAS_TURBINE',
      status: 'STANDBY',
      output: 0,
      capacity: 450,
      efficiency: 0,
      fuelLevel: 76.8,
      temperature: 25,
      pressure: 14.7,
      controlRods: 'N/A',
      coolantFlow: 'N/A',
      turbineSpeed: 0,
      generator: 'OFFLINE',
      lastMaintenance: Date.now() - 15 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 45 * 24 * 60 * 60 * 1000,
      operationalHours: 2340,
      emissions: 0,
      operator: 'Manual Standby'
    },
    {
      id: 'plant_003',
      name: 'Combined Cycle Beta',
      type: 'COMBINED_CYCLE',
      status: 'ONLINE',
      output: 675,
      capacity: 750,
      efficiency: 90.0,
      fuelLevel: 92.1,
      temperature: 580,
      pressure: 1450,
      controlRods: 'N/A',
      coolantFlow: 'ACTIVE',
      turbineSpeed: 3600,
      generator: 'SYNC',
      lastMaintenance: Date.now() - 45 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 30 * 24 * 60 * 60 * 1000,
      operationalHours: 6780,
      emissions: 45.2,
      operator: 'Auto Control'
    },
    {
      id: 'plant_004',
      name: 'Solar Farm Delta',
      type: 'SOLAR',
      status: 'ONLINE',
      output: 234,
      capacity: 300,
      efficiency: 78.0,
      fuelLevel: 100, // sunlight
      temperature: 45,
      pressure: 0,
      controlRods: 'N/A',
      coolantFlow: 'N/A',
      turbineSpeed: 0,
      generator: 'INVERTER',
      lastMaintenance: Date.now() - 7 * 24 * 60 * 60 * 1000,
      nextMaintenance: Date.now() + 83 * 24 * 60 * 60 * 1000,
      operationalHours: 3650,
      emissions: 0,
      operator: 'Auto Tracking'
    }
  ]);

  const [scadaAlarms, setScadaAlarms] = useState([
    {
      id: 'alarm_001',
      timestamp: Date.now() - 8 * 60 * 1000,
      severity: 'HIGH',
      type: 'VOLTAGE',
      location: 'Central Distribution',
      message: 'Voltage out of range - 142.5 kV detected',
      status: 'ACTIVE',
      operator: 'Acknowledged by Operator A',
      automaticAction: 'Voltage regulator activated',
      source: 'SCADA Point CV-142',
      priority: 1
    },
    {
      id: 'alarm_002',
      timestamp: Date.now() - 15 * 60 * 1000,
      severity: 'MEDIUM',
      type: 'TEMPERATURE',
      location: 'North Transmission',
      message: 'Transformer temperature elevated - 68°C',
      status: 'CLEARED',
      operator: 'Auto-cleared',
      automaticAction: 'Cooling fan activated',
      source: 'Temperature Sensor NT-T03',
      priority: 3
    },
    {
      id: 'alarm_003',
      timestamp: Date.now() - 25 * 60 * 1000,
      severity: 'LOW',
      type: 'COMMUNICATION',
      location: 'East Residential',
      message: 'RTU communication timeout - Station ER-3',
      status: 'ACKNOWLEDGED',
      operator: 'Under investigation by Tech B',
      automaticAction: 'Backup communication path activated',
      source: 'RTU ER-3',
      priority: 4
    },
    {
      id: 'alarm_004',
      timestamp: Date.now() - 35 * 60 * 1000,
      severity: 'CRITICAL',
      type: 'FREQUENCY',
      location: 'System Wide',
      message: 'Frequency deviation detected - 59.95 Hz',
      status: 'CLEARED',
      operator: 'Auto-corrected by AGC',
      automaticAction: 'Automatic Generation Control engaged',
      source: 'Frequency Monitor FM-1',
      priority: 1
    }
  ]);

  const [gridMetrics, setGridMetrics] = useState({
    totalGeneration: 2109, // MW
    totalLoad: 4431.3, // MW
    systemFrequency: 60.01, // Hz
    interconnectFlow: -2322.3, // MW (negative = importing)
    reserveMargin: 15.8, // %
    voltageStability: 98.5, // %
    loadForecast: {
      next1Hour: 4567,
      next4Hours: 4890,
      next24Hours: 5234,
      peakToday: 5678
    },
    emissions: {
      co2Rate: 45.2, // tons/hour
      noxRate: 2.1,
      so2Rate: 0.8,
      dailyTotal: 1085
    },
    reliability: {
      saifi: 0.45, // interruptions per customer
      saidi: 67.8, // minutes per customer
      caidi: 150.7, // minutes per interruption
      availability: 99.92 // %
    }
  });

  const [powerFlow, setPowerFlow] = useState([
    {
      id: 'flow_001',
      from: 'Base Load Station 1',
      to: 'North Transmission',
      power: 1200,
      voltage: 345,
      current: 2015,
      direction: 'EXPORT',
      status: 'NORMAL',
      congestion: 'NONE'
    },
    {
      id: 'flow_002',
      from: 'North Transmission',
      to: 'Central Distribution',
      power: 675,
      voltage: 138,
      current: 2825,
      direction: 'EXPORT',
      status: 'NORMAL',
      congestion: 'LIGHT'
    },
    {
      id: 'flow_003',
      from: 'External Grid',
      to: 'Central Distribution',
      power: 2322,
      voltage: 230,
      current: 5835,
      direction: 'IMPORT',
      status: 'NORMAL',
      congestion: 'MODERATE'
    },
    {
      id: 'flow_004',
      from: 'Solar Farm Delta',
      to: 'West Renewables',
      power: 234,
      voltage: 115,
      current: 1178,
      direction: 'EXPORT',
      status: 'VARIABLE',
      congestion: 'NONE'
    }
  ]);

  const [energyTrends, setEnergyTrends] = useState([]);
  const [generationMix, setGenerationMix] = useState([]);

  const generateEnergyTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      const baseLoad = 3800;
      const peakFactor = Math.sin((23 - i) * Math.PI / 12) * 0.3 + 0.7;
      const randomVariation = (Math.random() - 0.5) * 200;
      const totalLoad = baseLoad * peakFactor + randomVariation;
      
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        total_load: Math.max(3000, totalLoad),
        generation: Math.max(2800, totalLoad * 0.85 + Math.random() * 400),
        renewable: Math.max(100, Math.random() * 400 + 200),
        imports: Math.max(0, Math.random() * 1000 + 1500),
        frequency: 59.95 + Math.random() * 0.1,
        voltage_stability: 96 + Math.random() * 4
      });
    }
    return data;
  };

  const generateGenerationMix = () => {
    return [
      { source: 'Nuclear', capacity: 1250, output: 1200, availability: 96.0, color: '#10B981' },
      { source: 'Gas Turbine', capacity: 450, output: 0, availability: 0, color: '#3B82F6' },
      { source: 'Combined Cycle', capacity: 750, output: 675, availability: 90.0, color: '#8B5CF6' },
      { source: 'Solar', capacity: 300, output: 234, availability: 78.0, color: '#F59E0B' },
      { source: 'Wind', capacity: 500, output: 0, availability: 0, color: '#06B6D4' },
      { source: 'Hydro', capacity: 200, output: 0, availability: 0, color: '#84CC16' }
    ];
  };

  useEffect(() => {
    setEnergyTrends(generateEnergyTrends());
    setGenerationMix(generateGenerationMix());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update grid sections
      setGridSections(prev => prev.map(section => {
        let newLoad = section.load;
        let newUtilization = section.utilization;
        let newTemperature = section.temperature;
        let newStatus = section.status;
        
        if (section.status !== 'MAINTENANCE') {
          newLoad = Math.max(0, section.load + (Math.random() - 0.5) * 50);
          newUtilization = (newLoad / section.capacity) * 100;
          newTemperature = Math.max(25, Math.min(85, section.temperature + (Math.random() - 0.5) * 3));
          
          if (newUtilization > 95) {
            newStatus = 'ALERT';
          } else if (newUtilization < 85 && section.status === 'ALERT') {
            newStatus = 'NORMAL';
          }
        }

        return {
          ...section,
          load: newLoad,
          utilization: newUtilization,
          temperature: newTemperature,
          status: newStatus,
          lastUpdate: Date.now(),
          frequency: 60 + (Math.random() - 0.5) * 0.1
        };
      }));

      // Update power plants
      setPowerPlants(prev => prev.map(plant => {
        let newOutput = plant.output;
        let newEfficiency = plant.efficiency;
        
        if (plant.status === 'ONLINE') {
          if (plant.type === 'SOLAR') {
            // Solar varies with time of day
            const hour = new Date().getHours();
            const solarFactor = hour >= 6 && hour <= 18 ? 
              Math.sin((hour - 6) * Math.PI / 12) * 0.8 + 0.2 : 0;
            newOutput = Math.max(0, plant.capacity * solarFactor * (0.9 + Math.random() * 0.2));
            newEfficiency = newOutput > 0 ? (newOutput / plant.capacity) * 100 : 0;
          } else {
            newOutput = Math.max(0, Math.min(plant.capacity, plant.output + (Math.random() - 0.5) * 20));
            newEfficiency = newOutput > 0 ? (newOutput / plant.capacity) * 100 : 0;
          }
        }

        return {
          ...plant,
          output: newOutput,
          efficiency: newEfficiency,
          temperature: plant.status === 'ONLINE' ? 
            Math.max(25, Math.min(600, plant.temperature + (Math.random() - 0.5) * 5)) : 
            Math.max(20, plant.temperature - 1)
        };
      }));

      // Update grid metrics
      setGridMetrics(prev => {
        const newTotalLoad = gridSections.reduce((sum, section) => sum + section.load, 0);
        const newTotalGeneration = powerPlants.filter(p => p.status === 'ONLINE').reduce((sum, plant) => sum + plant.output, 0);
        
        return {
          ...prev,
          totalLoad: newTotalLoad,
          totalGeneration: newTotalGeneration,
          systemFrequency: Math.max(59.9, Math.min(60.1, prev.systemFrequency + (Math.random() - 0.5) * 0.02)),
          interconnectFlow: newTotalLoad - newTotalGeneration,
          voltageStability: Math.max(95, Math.min(100, prev.voltageStability + (Math.random() - 0.5) * 1))
        };
      });

      // Occasionally add new alarms
      if (Math.random() > 0.97) {
        const severities = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
        const types = ['VOLTAGE', 'CURRENT', 'FREQUENCY', 'TEMPERATURE', 'PROTECTION'];
        const locations = gridSections.map(s => s.name);
        
        const newAlarm = {
          id: `alarm_${Date.now()}`,
          timestamp: Date.now(),
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: types[Math.floor(Math.random() * types.length)],
          location: locations[Math.floor(Math.random() * locations.length)],
          message: 'Automated SCADA alarm detection',
          status: 'ACTIVE',
          operator: 'Pending acknowledgment',
          automaticAction: 'System monitoring active',
          source: `SCADA-${Math.floor(Math.random() * 100)}`,
          priority: Math.floor(Math.random() * 4) + 1
        };
        
        setScadaAlarms(prev => [newAlarm, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [gridSections, powerPlants]);

  const getGridStatusColor = (status) => {
    switch (status) {
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'ALERT': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'WARNING': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPlantStatusColor = (status) => {
    switch (status) {
      case 'ONLINE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFFLINE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getAlarmSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getEmergencyLevelColor = (level) => {
    switch (level) {
      case 'GREEN': return 'text-green-400';
      case 'YELLOW': return 'text-yellow-400';
      case 'ORANGE': return 'text-orange-400';
      case 'RED': return 'text-red-400';
      case 'BLUE': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatPower = (mw) => {
    if (mw >= 1000) return `${(mw / 1000).toFixed(1)} GW`;
    return `${mw.toFixed(1)} MW`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ⚡ ELECTRIC GRID CONTROL CENTER (SCADA)
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {gridMetrics.systemFrequency.toFixed(2)} Hz
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${
            gridMetrics.voltageStability >= 98 ? 'bg-green-500/20 text-green-400 border-green-500/30' :
            gridMetrics.voltageStability >= 95 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
            'bg-red-500/20 text-red-400 border-red-500/30'
          }`}>
            {gridMetrics.voltageStability.toFixed(1)}% STABLE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Hitachi Energy Network Manager EMS
          </div>
        </div>
      </div>

      {/* Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL LOAD</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatPower(gridMetrics.totalLoad)}
              </div>
              <div className="text-xs text-blue-300">
                Peak: {formatPower(gridMetrics.loadForecast.peakToday)}
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">GENERATION</div>
              <div className="text-2xl font-bold text-green-100">
                {formatPower(gridMetrics.totalGeneration)}
              </div>
              <div className="text-xs text-green-300">
                Reserve: {gridMetrics.reserveMargin.toFixed(1)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">🏭</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">INTERCHANGE</div>
              <div className="text-2xl font-bold text-purple-100">
                {Math.abs(gridMetrics.interconnectFlow) < 1000 ? 
                  `${gridMetrics.interconnectFlow.toFixed(0)} MW` :
                  `${(gridMetrics.interconnectFlow / 1000).toFixed(1)} GW`}
              </div>
              <div className="text-xs text-purple-300">
                {gridMetrics.interconnectFlow < 0 ? 'Importing' : 'Exporting'}
              </div>
            </div>
            <div className="text-3xl opacity-60">🔄</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">RELIABILITY</div>
              <div className="text-2xl font-bold text-orange-100">
                {gridMetrics.reliability.availability}%
              </div>
              <div className="text-xs text-orange-300">
                SAIDI: {gridMetrics.reliability.saidi.toFixed(1)}min
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>
      </div>

      {/* Grid Sections and Power Plants */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grid Sections */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔌 GRID SECTIONS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {gridSections.map((section) => (
              <div key={section.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{section.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getGridStatusColor(section.status)}`}>
                      {section.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {section.voltage} kV
                    </span>
                    <span className={`text-xs ${getEmergencyLevelColor(section.emergencyLevel)}`}>
                      {section.emergencyLevel}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(section.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-xs text-purple-400 mb-3">{section.type}</div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Load</div>
                    <div className="text-cyan-400">{formatPower(section.load)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-green-400">{formatPower(section.capacity)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Utilization</div>
                    <div className={`font-bold ${
                      section.utilization > 95 ? 'text-red-400' :
                      section.utilization > 85 ? 'text-yellow-400' :
                      'text-green-400'
                    }`}>
                      {section.utilization.toFixed(1)}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Frequency</div>
                    <div className="text-blue-400">{section.frequency.toFixed(2)} Hz</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Power Factor</div>
                    <div className="text-yellow-400">{section.powerFactor.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-orange-400">{section.temperature}°C</div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Substations:</div>
                  <div className="flex flex-wrap gap-1">
                    {section.substations.map((sub, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-gray-300 text-xs">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <div>
                    <span className="text-gray-400">Protection: </span>
                    <span className={section.protectionStatus === 'ARMED' ? 'text-green-400' : 'text-red-400'}>
                      {section.protectionStatus}
                    </span>
                  </div>
                  {section.maintenanceScheduled && (
                    <span className="text-blue-400">🔧 Maintenance Scheduled</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Power Plants */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 POWER GENERATION
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {powerPlants.map((plant) => (
              <div key={plant.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{plant.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getPlantStatusColor(plant.status)}`}>
                      {plant.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {plant.type.replace('_', ' ')}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Output</div>
                    <div className="text-cyan-400">{formatPower(plant.output)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-green-400">{formatPower(plant.capacity)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className="text-yellow-400">{plant.efficiency.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Fuel Level</div>
                    <div className="text-blue-400">{plant.fuelLevel.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Temperature</div>
                    <div className="text-orange-400">{plant.temperature}°C</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Operator</div>
                    <div className="text-purple-400">{plant.operator}</div>
                  </div>
                </div>

                {plant.type !== 'SOLAR' && (
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Pressure</div>
                      <div className="text-pink-400">{plant.pressure} PSI</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Turbine Speed</div>
                      <div className="text-indigo-400">{plant.turbineSpeed} RPM</div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <div className="text-gray-400">Generator</div>
                    <div className="text-green-400">{plant.generator}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">CO₂ Emissions</div>
                    <div className="text-red-400">{plant.emissions} t/h</div>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="text-gray-400">Operational Hours: </div>
                  <div className="text-cyan-400">{plant.operationalHours.toLocaleString()}h</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SCADA Alarms and Energy Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SCADA Alarms */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 SCADA ALARMS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {scadaAlarms.map((alarm) => (
              <div key={alarm.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getAlarmSeverityColor(alarm.severity)}`}>
                      {alarm.severity}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {alarm.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      alarm.status === 'ACTIVE' ? 'bg-red-500 text-white' :
                      alarm.status === 'ACKNOWLEDGED' ? 'bg-yellow-500 text-black' :
                      'bg-green-500 text-white'
                    }`}>
                      {alarm.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(alarm.timestamp)}
                  </div>
                </div>
                
                <div className="text-sm text-white mb-2">{alarm.message}</div>
                <div className="text-xs text-cyan-400 mb-1">📍 {alarm.location}</div>
                <div className="text-xs text-purple-400 mb-1">🔗 {alarm.source}</div>
                
                <div className="text-xs text-green-400 mb-1">
                  ⚡ {alarm.automaticAction}
                </div>
                <div className="text-xs text-orange-400">
                  👨‍💼 {alarm.operator}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Energy Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 ENERGY TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={energyTrends}>
              <defs>
                <linearGradient id="loadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="genGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
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
                dataKey="total_load" 
                stroke="#3B82F6" 
                fill="url(#loadGradient)" 
                name="Total Load (MW)"
              />
              <Area 
                type="monotone" 
                dataKey="generation" 
                stroke="#10B981" 
                fill="url(#genGradient)" 
                name="Generation (MW)"
              />
              <Line 
                type="monotone" 
                dataKey="renewable" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Renewable (MW)"
              />
              <Line 
                type="monotone" 
                dataKey="frequency" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Frequency (Hz)"
                yAxisId="right"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Generation Mix and System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Generation Mix */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔋 GENERATION MIX
          </h3>
          <div className="space-y-3">
            {generationMix.map((source, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-sm">{source.source}</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {source.availability.toFixed(0)}% Available
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Output</div>
                    <div className="text-cyan-400">{formatPower(source.output)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Capacity</div>
                    <div className="text-green-400">{formatPower(source.capacity)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Utilization</div>
                    <div className="text-yellow-400">{((source.output / source.capacity) * 100).toFixed(1)}%</div>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${(source.output / source.capacity) * 100}%`,
                        backgroundColor: source.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🖥️ SYSTEM STATUS
          </h3>
          
          <div className="space-y-4">
            {/* Load Forecast */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Load Forecast</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Next Hour</div>
                  <div className="text-cyan-400">{formatPower(gridMetrics.loadForecast.next1Hour)}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Next 4 Hours</div>
                  <div className="text-yellow-400">{formatPower(gridMetrics.loadForecast.next4Hours)}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Next 24 Hours</div>
                  <div className="text-purple-400">{formatPower(gridMetrics.loadForecast.next24Hours)}</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Today's Peak</div>
                  <div className="text-red-400">{formatPower(gridMetrics.loadForecast.peakToday)}</div>
                </div>
              </div>
            </div>

            {/* Environmental Data */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Environmental Impact</h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">CO₂ Rate</div>
                  <div className="text-red-400">{gridMetrics.emissions.co2Rate} t/h</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">NOₓ Rate</div>
                  <div className="text-orange-400">{gridMetrics.emissions.noxRate} t/h</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">SO₂ Rate</div>
                  <div className="text-yellow-400">{gridMetrics.emissions.so2Rate} t/h</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Daily Total</div>
                  <div className="text-blue-400">{gridMetrics.emissions.dailyTotal} t</div>
                </div>
              </div>
            </div>

            {/* Reliability Metrics */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Reliability Indices</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">SAIFI (interruptions/customer):</span>
                  <span className="text-green-400">{gridMetrics.reliability.saifi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SAIDI (minutes/customer):</span>
                  <span className="text-yellow-400">{gridMetrics.reliability.saidi.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CAIDI (minutes/interruption):</span>
                  <span className="text-orange-400">{gridMetrics.reliability.caidi.toFixed(1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">System Availability:</span>
                  <span className="text-blue-400">{gridMetrics.reliability.availability}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricGridSCADA;