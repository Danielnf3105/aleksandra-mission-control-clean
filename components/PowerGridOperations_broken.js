// PowerGridOperations.js - Power Grid Operations Control Center & Smart Grid Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const PowerGridOperations = () => {
  const [gridStatus, setGridStatus] = useState({
    systemFrequency: 60.02, // Hz
    systemVoltage: 345.7, // kV average
    totalLoad: 28450, // MW
    totalGeneration: 28690, // MW
    reserves: {
      spinning: 1240, // MW
      nonSpinning: 890,
      regulation: 320
    },
    stability: 'STABLE',
    emergencyLevel: 'NORMAL',
    lastUpdate: Date.now()
  });

  const [transmissionLines, setTransmissionLines] = useState([
    {
      id: 'line_001',
      name: 'North-Central 765kV',
      voltage: 765.2, // kV
      current: 2340, // A
      power: 2890, // MW
      capacity: 3200,
      utilization: 90.3, // percentage
      status: 'ENERGIZED',
      temperature: 67.3, // celsius
      sag: 8.4, // meters
      weather: 'CLEAR',
      protection: 'ARMED',
      maintenance: 'SCHEDULED_2026-03-15',
      from: 'Nuclear Station Alpha',
      to: 'Metro Substation 1',
      length: 145.7, // km
      conductor: 'ACSR 954 kcmil',
      losses: 23.4, // MW
      reliability: 99.87, // percentage
      lastFault: '2025-11-23',
      alerts: ['High loading - monitor closely'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'line_002',
      name: 'East-West 500kV',
      voltage: 498.7,
      current: 1890,
      power: 1630,
      capacity: 2100,
      utilization: 77.6,
      status: 'ENERGIZED',
      temperature: 52.1,
      sag: 6.8,
      weather: 'LIGHT_RAIN',
      protection: 'ARMED',
      maintenance: 'COMPLETED_2026-02-28',
      from: 'Coal Plant Beta',
      to: 'Industrial District Sub',
      length: 89.3,
      conductor: 'ACSR 636 kcmil',
      losses: 14.7,
      reliability: 99.92,
      lastFault: '2024-08-15',
      alerts: [],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'line_003',
      name: 'Solar Farm 345kV',
      voltage: 342.8,
      current: 890,
      power: 529,
      capacity: 800,
      utilization: 66.1,
      status: 'ENERGIZED',
      temperature: 45.6,
      sag: 5.2,
      weather: 'SUNNY',
      protection: 'ARMED',
      maintenance: 'DUE_2026-04-01',
      from: 'Desert Solar Complex',
      to: 'Regional Transmission Hub',
      length: 67.9,
      conductor: 'ACSR 477 kcmil',
      losses: 8.9,
      reliability: 99.94,
      lastFault: 'NONE',
      alerts: ['Optimal solar generation conditions'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'line_004',
      name: 'Wind Farm 230kV',
      voltage: 231.4,
      current: 1240,
      power: 498,
      capacity: 650,
      utilization: 76.6,
      status: 'ENERGIZED',
      temperature: 38.9,
      sag: 4.1,
      weather: 'WINDY',
      protection: 'ARMED',
      maintenance: 'CURRENT',
      from: 'Offshore Wind Array',
      to: 'Coastal Substation',
      length: 45.2,
      conductor: 'ACSR 336 kcmil',
      losses: 6.7,
      reliability: 99.89,
      lastFault: '2025-12-10',
      alerts: ['Strong wind conditions - high output'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    }
  ]);

  const [substations, setSubstations] = useState([
    {
      id: 'sub_001',
      name: 'Metro Substation 1',
      voltage: 345, // kV primary
      type: 'TRANSMISSION',
      status: 'OPERATIONAL',
      transformers: {
        total: 4,
        operational: 4,
        loading: [89.2, 76.5, 82.1, 91.3], // percentage
        temperature: [67.8, 62.4, 65.1, 69.2] // celsius
      },
      switchgear: {
        breakers: 12,
        operational: 12,
        protection: 'ARMED',
        recent_ops: 3 // last 30 days
      },
      power_quality: {
        voltage_regulation: 0.8, // percentage
        thd_voltage: 1.2, // percentage
        thd_current: 2.8,
        power_factor: 0.95,
        flicker: 'MINIMAL'
      },
      load: {
        total: 890, // MW
        peak_today: 1020,
        forecast_peak: 1140,
        customer_count: 145000
      },
      reliability: {
        saidi: 45.2, // minutes/year
        saifi: 0.8, // interruptions/year
        caidi: 56.5, // minutes
        availability: 99.91
      },
      protection: {
        differential: 'ENABLED',
        distance: 'ENABLED',
        overcurrent: 'ENABLED',
        frequency: 'ENABLED',
        last_test: '2026-02-15'
      },
      scada: {
        communication: 'ONLINE',
        data_quality: 98.7, // percentage
        alarms: 2,
        points: 234,
        update_rate: '2 seconds'
      },
      alerts: ['Transformer T3 approaching 90% loading'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'sub_002',
      name: 'Industrial District Sub',
      voltage: 138,
      type: 'DISTRIBUTION',
      status: 'OPERATIONAL',
      transformers: {
        total: 6,
        operational: 5,
        loading: [67.4, 78.9, 82.3, 0.0, 71.2, 88.6],
        temperature: [58.9, 64.2, 66.8, 25.1, 60.4, 67.9]
      },
      switchgear: {
        breakers: 18,
        operational: 17,
        protection: 'ARMED',
        recent_ops: 7
      },
      power_quality: {
        voltage_regulation: 1.4,
        thd_voltage: 2.1,
        thd_current: 4.2,
        power_factor: 0.92,
        flicker: 'LOW'
      },
      load: {
        total: 445,
        peak_today: 478,
        forecast_peak: 512,
        customer_count: 2340
      },
      reliability: {
        saidi: 78.9,
        saifi: 1.4,
        caidi: 56.4,
        availability: 99.85
      },
      protection: {
        differential: 'ENABLED',
        distance: 'ENABLED',
        overcurrent: 'ENABLED',
        frequency: 'ENABLED',
        last_test: '2026-02-20'
      },
      scada: {
        communication: 'ONLINE',
        data_quality: 97.3,
        alarms: 5,
        points: 189,
        update_rate: '3 seconds'
      },
      alerts: ['Transformer T4 out of service for maintenance', 'Industrial load trending higher'],
      lastUpdate: Date.now() - 5 * 60 * 1000
    },
    {
      id: 'sub_003',
      name: 'Renewable Integration Hub',
      voltage: 230,
      type: 'RENEWABLE',
      status: 'OPERATIONAL',
      transformers: {
        total: 3,
        operational: 3,
        loading: [56.7, 62.1, 59.4],
        temperature: [52.3, 55.8, 53.7]
      },
      switchgear: {
        breakers: 9,
        operational: 9,
        protection: 'ARMED',
        recent_ops: 12 // frequent switching due to renewable variability
      },
      power_quality: {
        voltage_regulation: 2.1,
        thd_voltage: 3.4,
        thd_current: 5.1,
        power_factor: 0.89, // variable due to renewables
        flicker: 'MODERATE'
      },
      renewables: {
        solar_capacity: 450, // MW
        solar_output: 387, // MW current
        wind_capacity: 280,
        wind_output: 223,
        battery_capacity: 150,
        battery_soc: 78.4, // percentage
        battery_mode: 'CHARGING'
      },
      grid_services: {
        frequency_response: 'ACTIVE',
        voltage_support: 'ACTIVE',
        spinning_reserve: 45, // MW
        ramp_rate: 25 // MW/min
      },
      scada: {
        communication: 'ONLINE',
        data_quality: 99.1,
        alarms: 3,
        points: 312,
        update_rate: '1 second'
      },
      alerts: ['Battery storage optimizing for evening peak', 'Variable renewable output due to weather'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    }
  ]);

  const [powerPlants, setPowerPlants] = useState([
    {
      id: 'plant_001',
      name: 'Nuclear Station Alpha',
      type: 'NUCLEAR',
      status: 'OPERATIONAL',
      capacity: 2400, // MW
      output: 2385,
      efficiency: 99.4,
      availability: 92.7, // capacity factor
      fuel: {
        type: 'URANIUM',
        burn_up: 45678, // MWd/tonne
        enrichment: 4.2, // percentage
        inventory: 'ADEQUATE'
      },
      reactor: {
        power_level: 99.4, // percentage
        temperature: 315.7, // celsius
        pressure: 155.2, // bar
        control_rods: 'NORMAL_POSITION',
        neutron_flux: 'STABLE'
      },
      cooling: {
        primary_flow: 89567, // m³/hr
        secondary_flow: 145890,
        cooling_tower: 'OPERATIONAL',
        discharge_temp: 32.4 // celsius
      },
      safety: {
        scram_systems: 'ARMED',
        containment: 'INTACT',
        radiation_levels: 'NORMAL',
        emergency_systems: 'OPERATIONAL',
        last_incident: 'NONE'
      },
      environmental: {
        emissions: 0.0, // tonnes CO2/MWh
        radioactive_release: 'WITHIN_LIMITS',
        water_usage: 2340, // m³/hr
        thermal_efficiency: 35.2
      },
      alerts: ['Excellent performance - 99.4% power level'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'plant_002',
      name: 'Combined Cycle Gas Plant',
      type: 'NATURAL_GAS',
      status: 'OPERATIONAL',
      capacity: 1200,
      output: 987,
      efficiency: 82.25,
      availability: 89.4,
      fuel: {
        type: 'NATURAL_GAS',
        heat_rate: 7250, // Btu/kWh
        consumption: 234567, // mcf/hr
        pressure: 450, // psi
        quality: 'PIPELINE_SPEC'
      },
      gas_turbines: {
        gt1: { output: 340, efficiency: 38.7, temperature: 1150 },
        gt2: { output: 338, efficiency: 38.5, temperature: 1165 },
        gt3: { output: 309, efficiency: 37.9, temperature: 1180 }
      },
      steam_turbine: {
        output: 187,
        steam_pressure: 89.7, // bar
        steam_temperature: 565, // celsius
        condenser_vacuum: 94.2 // percentage
      },
      environmental: {
        emissions: 0.35, // tonnes CO2/MWh
        nox: 9.2, // ppmvd
        co: 5.1,
        so2: 2.3,
        stack_opacity: 4.1 // percentage
      },
      heat_recovery: {
        hrsg_efficiency: 89.7,
        steam_production: 456, // tonnes/hr
        economizer_temp: 234,
        superheater_temp: 565
      },
      alerts: ['GT3 slightly elevated exhaust temperature'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    },
    {
      id: 'plant_003',
      name: 'Desert Solar Complex',
      type: 'SOLAR_PV',
      status: 'OPERATIONAL',
      capacity: 450,
      output: 387,
      efficiency: 86.0,
      availability: 98.7,
      solar_conditions: {
        irradiance: 850, // W/m²
        module_temp: 55.7, // celsius
        ambient_temp: 28.4,
        wind_speed: 3.2, // m/s
        cloud_cover: 15 // percentage
      },
      inverters: {
        total: 45,
        operational: 44,
        efficiency: 98.2,
        power_factor: 0.95,
        thd: 2.1 // percentage
      },
      tracking: {
        type: 'SINGLE_AXIS',
        angle: 45.7, // degrees
        tracking_accuracy: 0.5,
        motor_status: 'OPERATIONAL'
      },
      energy_storage: {
        battery_capacity: 150, // MWh
        current_soc: 78.4,
        charge_rate: 45, // MW
        discharge_rate: 60,
        efficiency: 94.7,
        temperature: 25.8
      },
      environmental: {
        emissions: 0.0,
        water_usage: 12.3, // m³/hr (cleaning)
        land_use: 1800, // hectares
        wildlife_impact: 'MINIMAL'
      },
      alerts: ['Optimal generation conditions', 'Battery charging for evening peak'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'plant_004',
      name: 'Offshore Wind Array',
      type: 'WIND',
      status: 'OPERATIONAL',
      capacity: 280,
      output: 223,
      efficiency: 79.6,
      availability: 94.8,
      wind_conditions: {
        speed: 12.4, // m/s
        direction: 245, // degrees
        turbulence: 8.7, // percentage
        gust: 15.2, // m/s
        forecast: 'FAVORABLE'
      },
      turbines: {
        total: 35,
        operational: 33,
        maintenance: 2,
        rated_power: 8.0, // MW each
        rotor_speed: 12.7, // rpm
        blade_angle: 8.4 // degrees
      },
      electrical: {
        voltage: 33, // kV collection
        frequency: 60.0,
        power_factor: 0.92,
        transformer_loading: 76.8,
        cable_losses: 2.3 // percentage
      },
      marine_conditions: {
        wave_height: 2.1, // meters
        water_depth: 45.7,
        current_speed: 0.8, // m/s
        salinity: 'NORMAL'
      },
      environmental: {
        emissions: 0.0,
        noise_level: 45.2, // dBA at 400m
        bird_impact: 'MONITORED',
        marine_life: 'NO_IMPACT'
      },
      alerts: ['Strong wind conditions - high output', '2 turbines in scheduled maintenance'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    }
  ]);

  const [gridReliability, setGridReliability] = useState({
    system_reliability: {
      saidi: 67.8, // minutes/customer/year
      saifi: 1.23, // interruptions/customer/year
      caidi: 55.1, // minutes/interruption
      maifi: 2.8, // momentary interruptions/customer/year
      availability: 99.87 // percentage
    },
    power_quality: {
      voltage_regulation: 1.1, // percentage
      frequency_deviation: 0.02, // Hz
      thd_voltage: 2.1, // percentage
      thd_current: 3.8,
      flicker_severity: 'LOW',
      sag_events: 12 // this month
    },
    cybersecurity: {
      threat_level: 'ELEVATED',
      incidents_blocked: 1247, // this month
      security_patches: 'CURRENT',
      penetration_tests: 4, // this year
      compliance: 'NERC_CIP',
      last_audit: '2026-01-15'
    },
    emergency_response: {
      blackstart_capability: 'VERIFIED',
      restoration_time: '4.2 hours', // average
      emergency_reserves: 890, // MW
      mutual_assistance: 'ACTIVE',
      communication_systems: 'OPERATIONAL'
    },
    load_forecast: {
      current: 28450, // MW
      peak_today: 32100,
      peak_tomorrow: 31800,
      weekly_peak: 33200,
      accuracy: 98.4 // percentage
    }
  });

  const [energyTrends, setEnergyTrends] = useState([]);

  const generateEnergyTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      const hourOfDay = hour.getHours();
      
      // Realistic daily load curve
      let baseLoad = 20000;
      if (hourOfDay >= 6 && hourOfDay <= 9) baseLoad = 28000; // morning peak
      if (hourOfDay >= 17 && hourOfDay <= 21) baseLoad = 32000; // evening peak
      if (hourOfDay >= 22 || hourOfDay <= 5) baseLoad = 18000; // overnight
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        load: baseLoad + Math.random() * 2000 - 1000,
        generation: baseLoad + Math.random() * 1000 + 500,
        nuclear: 2385 + Math.random() * 50 - 25,
        gas: 900 + Math.random() * 200 - 100,
        solar: hourOfDay >= 6 && hourOfDay <= 18 ? 200 + Math.random() * 300 : 0,
        wind: 150 + Math.random() * 150,
        frequency: 60.0 + (Math.random() - 0.5) * 0.1,
        voltage: 345 + (Math.random() - 0.5) * 10
      });
    }
    return data;
  };

  useEffect(() => {
    setEnergyTrends(generateEnergyTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update grid status
      setGridStatus(prev => ({
        ...prev,
        systemFrequency: Math.max(59.95, Math.min(60.05, prev.systemFrequency + (Math.random() - 0.5) * 0.02)),
        totalLoad: Math.max(25000, Math.min(35000, prev.totalLoad + (Math.random() - 0.5) * 500)),
        totalGeneration: Math.max(25000, Math.min(35000, prev.totalGeneration + (Math.random() - 0.5) * 400)),
        lastUpdate: Date.now()
      }));

      // Update transmission lines
      setTransmissionLines(prev => prev.map(line => ({
        ...line,
        voltage: Math.max(line.voltage * 0.95, Math.min(line.voltage * 1.05, 
          line.voltage + (Math.random() - 0.5) * 5)),
        current: Math.max(0, Math.min(line.capacity * 1.2, 
          line.current + (Math.random() - 0.5) * 100)),
        power: Math.max(0, Math.min(line.capacity, line.power + (Math.random() - 0.5) * 50)),
        temperature: Math.max(20, Math.min(80, line.temperature + (Math.random() - 0.5) * 2)),
        lastUpdate: Date.now()
      })));

      // Update power plants
      setPowerPlants(prev => prev.map(plant => {
        if (plant.type === 'SOLAR_PV') {
          const hour = new Date().getHours();
          const maxOutput = hour >= 6 && hour <= 18 ? plant.capacity * 0.9 : 0;
          return {
            ...plant,
            output: Math.max(0, Math.min(maxOutput, plant.output + (Math.random() - 0.5) * 20)),
            solar_conditions: {
              ...plant.solar_conditions,
              irradiance: Math.max(0, Math.min(1000, plant.solar_conditions.irradiance + (Math.random() - 0.5) * 50))
            },
            lastUpdate: Date.now()
          };
        } else if (plant.type === 'WIND') {
          return {
            ...plant,
            output: Math.max(0, Math.min(plant.capacity * 0.95, plant.output + (Math.random() - 0.5) * 30)),
            wind_conditions: {
              ...plant.wind_conditions,
              speed: Math.max(3, Math.min(25, plant.wind_conditions.speed + (Math.random() - 0.5) * 1))
            },
            lastUpdate: Date.now()
          };
        }
        return {
          ...plant,
          output: Math.max(plant.capacity * 0.7, Math.min(plant.capacity, 
            plant.output + (Math.random() - 0.5) * 50)),
          lastUpdate: Date.now()
        };
      })));

    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'ENERGIZED':
      case 'ONLINE':
      case 'ARMED':
      case 'ENABLED':
      case 'STABLE':
      case 'NORMAL':
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MAINTENANCE':
      case 'SCHEDULED':
      case 'MODERATE':
      case 'ELEVATED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFFLINE':
      case 'OUT_OF_SERVICE':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'STANDBY':
      case 'CHARGING':
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MINIMAL': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getLoadingColor = (percentage) => {
    if (percentage >= 95) return 'text-red-400';
    if (percentage >= 85) return 'text-orange-400';
    if (percentage >= 75) return 'text-yellow-400';
    if (percentage >= 50) return 'text-blue-400';
    return 'text-green-400';
  };

  const getReliabilityColor = (value, type) => {
    if (type === 'saidi' || type === 'caidi') {
      if (value <= 60) return 'text-green-400';
      if (value <= 120) return 'text-blue-400';
      if (value <= 180) return 'text-yellow-400';
      return 'text-orange-400';
    }
    if (type === 'availability') {
      if (value >= 99.9) return 'text-green-400';
      if (value >= 99.5) return 'text-blue-400';
      if (value >= 99.0) return 'text-yellow-400';
      return 'text-orange-400';
    }
    return 'text-gray-400';
  };

  const formatNumber = (num, decimals = 0) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(decimals)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(decimals)}K`;
    }
    return num.toFixed(decimals);
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ⚡ POWER GRID OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {gridStatus.systemFrequency.toFixed(2)} Hz
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(gridStatus.totalLoad)} MW Load
          </div>
          <div className="text-sm text-gray-400 font-mono">
            SCADA & Smart Grid Management
          </div>
        </div>
      </div>

      {/* Power Grid Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SYSTEM FREQUENCY</div>
              <div className="text-2xl font-bold text-green-100">
                {gridStatus.systemFrequency.toFixed(2)}
              </div>
              <div className="text-xs text-green-300">
                Hz (Nominal 60.00)
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL LOAD</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(gridStatus.totalLoad)}
              </div>
              <div className="text-xs text-blue-300">
                MW System Demand
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">RESERVES</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(gridStatus.reserves.spinning + gridStatus.reserves.nonSpinning)}
              </div>
              <div className="text-xs text-purple-300">
                MW Available
              </div>
            </div>
            <div className="text-3xl opacity-60">🔋</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">RENEWABLES</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(
                  powerPlants.filter(p => p.type === 'SOLAR_PV' || p.type === 'WIND').reduce((sum, p) => sum + p.output, 0)
                )}
              </div>
              <div className="text-xs text-orange-300">
                MW Green Energy
              </div>
            </div>
            <div className="text-3xl opacity-60">🌱</div>
          </div>
        </div>
      </div>

      {/* Transmission Lines and Substations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Transmission Lines */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔌 TRANSMISSION LINES & POWER FLOW
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {transmissionLines.map((line) => (
              <div key={line.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(line.status)}`}>
                      {line.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {line.voltage}kV
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getLoadingColor(line.utilization)}`}>
                      {line.utilization.toFixed(1)}%
                    </span>
                    {line.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {line.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(line.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{line.name}</div>
                <div className="text-xs text-cyan-400 mb-2">{line.from} → {line.to}</div>

                {/* Electrical Parameters */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Electrical: </span>
                  <span className="text-green-400">{line.voltage.toFixed(1)} kV</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">{formatNumber(line.current)} A</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">{formatNumber(line.power)} MW</span>
                  <span className="text-gray-400"> | Losses: </span>
                  <span className="text-orange-400">{line.losses.toFixed(1)} MW</span>
                </div>

                {/* Capacity and Loading */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Capacity: </span>
                  <span className="text-blue-400">{formatNumber(line.capacity)} MW</span>
                  <span className="text-gray-400"> | Loading: </span>
                  <span className={getLoadingColor(line.utilization)}>
                    {line.utilization.toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | Length: </span>
                  <span className="text-cyan-400">{line.length.toFixed(1)} km</span>
                </div>

                {/* Physical Parameters */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Physical: </span>
                  <span className="text-orange-400">{line.temperature.toFixed(1)}°C</span>
                  <span className="text-gray-400"> | Sag: </span>
                  <span className="text-blue-400">{line.sag.toFixed(1)}m</span>
                  <span className="text-gray-400"> | Conductor: </span>
                  <span className="text-purple-400">{line.conductor}</span>
                </div>

                {/* Weather and Reliability */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Weather: </span>
                  <span className={getStatusColor(line.weather)}>{line.weather.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Reliability: </span>
                  <span className={getReliabilityColor(line.reliability, 'availability')}>
                    {line.reliability.toFixed(2)}%
                  </span>
                  <span className="text-gray-400"> | Last Fault: </span>
                  <span className="text-cyan-400">{line.lastFault}</span>
                </div>

                {/* Protection Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Protection: </span>
                  <span className={getStatusColor(line.protection)}>{line.protection}</span>
                  <span className="text-gray-400"> | Maintenance: </span>
                  <span className="text-yellow-400">{line.maintenance.replace(/_/g, ' ')}</span>
                </div>

                {line.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {line.alerts.map((alert, index) => (
                      <div key={index} className="text-orange-400">⚡ {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Substations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏢 SUBSTATIONS & SWITCHING FACILITIES
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {substations.map((sub) => (
              <div key={sub.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(sub.status)}`}>
                      {sub.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {sub.type.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">
                      {sub.voltage}kV
                    </span>
                    {sub.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {sub.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(sub.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{sub.name}</div>

                {/* Transformer Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Transformers: </span>
                  <span className="text-green-400">{sub.transformers.operational}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{sub.transformers.total}</span>
                  <span className="text-gray-400"> | Max Loading: </span>
                  <span className={getLoadingColor(Math.max(...sub.transformers.loading))}>
                    {Math.max(...sub.transformers.loading).toFixed(1)}%
                  </span>
                  <span className="text-gray-400"> | Max Temp: </span>
                  <span className="text-orange-400">{Math.max(...sub.transformers.temperature).toFixed(1)}°C</span>
                </div>

                {/* Load Information */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Load: </span>
                  <span className="text-purple-400">{formatNumber(sub.load.total)} MW</span>
                  <span className="text-gray-400"> | Peak Today: </span>
                  <span className="text-blue-400">{formatNumber(sub.load.peak_today)} MW</span>
                  <span className="text-gray-400"> | Forecast: </span>
                  <span className="text-yellow-400">{formatNumber(sub.load.forecast_peak)} MW</span>
                </div>

                {/* Switchgear */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Switchgear: </span>
                  <span className="text-green-400">{sub.switchgear.operational}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{sub.switchgear.breakers} breakers</span>
                  <span className="text-gray-400"> | Protection: </span>
                  <span className={getStatusColor(sub.switchgear.protection)}>{sub.switchgear.protection}</span>
                  <span className="text-gray-400"> | Ops: </span>
                  <span className="text-cyan-400">{sub.switchgear.recent_ops} (30d)</span>
                </div>

                {/* Power Quality */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Power Quality: </span>
                  <span className="text-green-400">V.Reg {sub.power_quality.voltage_regulation.toFixed(1)}%</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">THDv {sub.power_quality.thd_voltage.toFixed(1)}%</span>
                  <span className="text-gray-400"> | PF: </span>
                  <span className="text-purple-400">{sub.power_quality.power_factor.toFixed(2)}</span>
                  <span className="text-gray-400"> | Flicker: </span>
                  <span className={getStatusColor(sub.power_quality.flicker)}>{sub.power_quality.flicker}</span>
                </div>

                {/* Reliability Indices */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Reliability: </span>
                  <span className={getReliabilityColor(sub.reliability.saidi, 'saidi')}>
                    SAIDI {sub.reliability.saidi.toFixed(1)}
                  </span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">SAIFI {sub.reliability.saifi.toFixed(1)}</span>
                  <span className="text-gray-400"> | Avail: </span>
                  <span className={getReliabilityColor(sub.reliability.availability, 'availability')}>
                    {sub.reliability.availability.toFixed(2)}%
                  </span>
                </div>

                {/* SCADA Status */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">SCADA: </span>
                  <span className={getStatusColor(sub.scada.communication)}>{sub.scada.communication}</span>
                  <span className="text-gray-400"> | Quality: </span>
                  <span className="text-green-400">{sub.scada.data_quality.toFixed(1)}%</span>
                  <span className="text-gray-400"> | Points: </span>
                  <span className="text-blue-400">{sub.scada.points}</span>
                  <span className="text-gray-400"> | Alarms: </span>
                  <span className="text-orange-400">{sub.scada.alarms}</span>
                </div>

                {/* Renewables (if applicable) */}
                {sub.renewables && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Renewables: </span>
                    <span className="text-yellow-400">Solar {formatNumber(sub.renewables.solar_output)}/{formatNumber(sub.renewables.solar_capacity)}MW</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-blue-400">Wind {formatNumber(sub.renewables.wind_output)}/{formatNumber(sub.renewables.wind_capacity)}MW</span>
                    <span className="text-gray-400"> | Batt: </span>
                    <span className="text-green-400">{sub.renewables.battery_soc.toFixed(1)}%</span>
                  </div>
                )}

                {/* Customer Information */}
                {sub.load.customer_count && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Customers: </span>
                    <span className="text-cyan-400">{formatNumber(sub.load.customer_count)}</span>
                    <span className="text-gray-400"> | Load/Customer: </span>
                    <span className="text-purple-400">{(sub.load.total * 1000 / sub.load.customer_count).toFixed(1)} kW</span>
                  </div>
                )}

                {sub.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {sub.alerts.slice(0, 2).map((alert, index) => (
                      <div key={index} className="text-orange-400">🏢 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Power Plants and Grid Reliability */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Power Plants */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 POWER GENERATION FACILITIES
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {powerPlants.map((plant) => (
              <div key={plant.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(plant.status)}`}>
                      {plant.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {plant.type.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-blue-600 text-white">
                      {formatNumber(plant.capacity)} MW
                    </span>
                    {plant.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-green-500 text-white">
                        {plant.alerts.length} status
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(plant.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{plant.name}</div>

                {/* Output and Efficiency */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Output: </span>
                  <span className="text-green-400">{formatNumber(plant.output)} MW</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{formatNumber(plant.capacity)} MW</span>
                  <span className="text-gray-400"> | Efficiency: </span>
                  <span className="text-purple-400">{plant.efficiency.toFixed(1)}%</span>
                  <span className="text-gray-400"> | Availability: </span>
                  <span className="text-cyan-400">{plant.availability.toFixed(1)}%</span>
                </div>

                {/* Specific Technology Details */}
                {plant.type === 'NUCLEAR' && plant.reactor && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Reactor: </span>
                    <span className="text-green-400">Power {plant.reactor.power_level.toFixed(1)}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-orange-400">{plant.reactor.temperature.toFixed(1)}°C</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-blue-400">{plant.reactor.pressure.toFixed(1)} bar</span>
                    <span className="text-gray-400"> | Rods: </span>
                    <span className={getStatusColor(plant.reactor.control_rods)}>{plant.reactor.control_rods.replace(/_/g, ' ')}</span>
                  </div>
                )}

                {plant.type === 'NATURAL_GAS' && plant.gas_turbines && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Gas Turbines: </span>
                    <span className="text-green-400">GT1 {formatNumber(plant.gas_turbines.gt1.output)}MW</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-blue-400">GT2 {formatNumber(plant.gas_turbines.gt2.output)}MW</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-purple-400">GT3 {formatNumber(plant.gas_turbines.gt3.output)}MW</span>
                    <span className="text-gray-400"> | ST: </span>
                    <span className="text-orange-400">{formatNumber(plant.steam_turbine.output)}MW</span>
                  </div>
                )}

                {plant.type === 'SOLAR_PV' && plant.solar_conditions && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Solar: </span>
                    <span className="text-yellow-400">{plant.solar_conditions.irradiance} W/m²</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-orange-400">{plant.solar_conditions.module_temp.toFixed(1)}°C</span>
                    <span className="text-gray-400"> | Cloud: </span>
                    <span className="text-blue-400">{plant.solar_conditions.cloud_cover}%</span>
                    <span className="text-gray-400"> | Inverters: </span>
                    <span className="text-green-400">{plant.inverters.operational}/{plant.inverters.total}</span>
                  </div>
                )}

                {plant.type === 'WIND' && plant.wind_conditions && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Wind: </span>
                    <span className="text-cyan-400">{plant.wind_conditions.speed.toFixed(1)} m/s</span>
                    <span className="text-gray-400"> | Dir: </span>
                    <span className="text-blue-400">{plant.wind_conditions.direction}°</span>
                    <span className="text-gray-400"> | Turbines: </span>
                    <span className="text-green-400">{plant.turbines.operational}/{plant.turbines.total}</span>
                    <span className="text-gray-400"> | Maint: </span>
                    <span className="text-orange-400">{plant.turbines.maintenance}</span>
                  </div>
                )}

                {/* Energy Storage (if applicable) */}
                {plant.energy_storage && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Storage: </span>
                    <span className="text-green-400">SOC {plant.energy_storage.current_soc.toFixed(1)}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-blue-400">{formatNumber(plant.energy_storage.battery_capacity)} MWh</span>
                    <span className="text-gray-400"> | Mode: </span>
                    <span className="text-purple-400">{plant.energy_storage.charge_rate > 0 ? 'CHARGING' : 'STANDBY'}</span>
                    <span className="text-gray-400"> | Eff: </span>
                    <span className="text-cyan-400">{plant.energy_storage.efficiency.toFixed(1)}%</span>
                  </div>
                )}

                {/* Environmental Impact */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Environmental: </span>
                  <span className="text-green-400">CO₂ {plant.environmental.emissions.toFixed(2)} t/MWh</span>
                  {plant.environmental.water_usage && (
                    <>
                      <span className="text-gray-400"> | Water: </span>
                      <span className="text-blue-400">{formatNumber(plant.environmental.water_usage)} m³/hr</span>
                    </>
                  )}
                  {plant.environmental.thermal_efficiency && (
                    <>
                      <span className="text-gray-400"> | Thermal: </span>
                      <span className="text-orange-400">{plant.environmental.thermal_efficiency.toFixed(1)}%</span>
                    </>
                  )}
                </div>

                {/* Fuel Information */}
                {plant.fuel && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Fuel: </span>
                    <span className="text-purple-400">{plant.fuel.type.replace(/_/g, ' ')}</span>
                    {plant.fuel.consumption && (
                      <>
                        <span className="text-gray-400"> | Rate: </span>
                        <span className="text-yellow-400">{formatNumber(plant.fuel.consumption)}</span>
                      </>
                    )}
                    {plant.fuel.inventory && (
                      <>
                        <span className="text-gray-400"> | Inventory: </span>
                        <span className="text-cyan-400">{plant.fuel.inventory}</span>
                      </>
                    )}
                  </div>
                )}

                {plant.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Status:</div>
                    {plant.alerts.map((alert, index) => (
                      <div key={index} className="text-green-400">🏭 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Grid Reliability & Cyber Security */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ GRID RELIABILITY & CYBERSECURITY
          </h3>
          
          {/* System Reliability */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">System Reliability</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">SAIDI</div>
                <div className={getReliabilityColor(gridReliability.system_reliability.saidi, 'saidi')}>
                  {gridReliability.system_reliability.saidi.toFixed(1)} min
                </div>
              </div>
              <div>
                <div className="text-gray-400">SAIFI</div>
                <div className="text-blue-400">{gridReliability.system_reliability.saifi.toFixed(2)}</div>
              </div>
              <div>
                <div className="text-gray-400">CAIDI</div>
                <div className={getReliabilityColor(gridReliability.system_reliability.caidi, 'caidi')}>
                  {gridReliability.system_reliability.caidi.toFixed(1)} min
                </div>
              </div>
              <div>
                <div className="text-gray-400">Availability</div>
                <div className={getReliabilityColor(gridReliability.system_reliability.availability, 'availability')}>
                  {gridReliability.system_reliability.availability.toFixed(2)}%
                </div>
              </div>
            </div>
          </div>

          {/* Power Quality */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Power Quality</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Voltage Regulation:</span>
                <span className="text-green-400">{gridReliability.power_quality.voltage_regulation.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Frequency Deviation:</span>
                <span className="text-blue-400">±{gridReliability.power_quality.frequency_deviation.toFixed(2)} Hz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">THD Voltage:</span>
                <span className="text-purple-400">{gridReliability.power_quality.thd_voltage.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">THD Current:</span>
                <span className="text-orange-400">{gridReliability.power_quality.thd_current.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Flicker Severity:</span>
                <span className={getStatusColor(gridReliability.power_quality.flicker_severity)}>
                  {gridReliability.power_quality.flicker_severity}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Voltage Sag Events:</span>
                <span className="text-yellow-400">{gridReliability.power_quality.sag_events} this month</span>
              </div>
            </div>
          </div>

          {/* Cybersecurity */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Cybersecurity Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Threat Level:</span>
                <span className={getStatusColor(gridReliability.cybersecurity.threat_level)}>
                  {gridReliability.cybersecurity.threat_level}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Incidents Blocked:</span>
                <span className="text-green-400">{formatNumber(gridReliability.cybersecurity.incidents_blocked)} this month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Security Patches:</span>
                <span className="text-blue-400">{gridReliability.cybersecurity.security_patches}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Compliance:</span>
                <span className="text-green-400">{gridReliability.cybersecurity.compliance}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Audit:</span>
                <span className="text-cyan-400">{gridReliability.cybersecurity.last_audit}</span>
              </div>
            </div>
          </div>

          {/* Emergency Response */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Emergency Response</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Blackstart Capability:</span>
                <span className="text-green-400">{gridReliability.emergency_response.blackstart_capability}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Restoration Time:</span>
                <span className="text-blue-400">{gridReliability.emergency_response.restoration_time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Emergency Reserves:</span>
                <span className="text-purple-400">{formatNumber(gridReliability.emergency_response.emergency_reserves)} MW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Mutual Assistance:</span>
                <span className={getStatusColor(gridReliability.emergency_response.mutual_assistance)}>
                  {gridReliability.emergency_response.mutual_assistance}
                </span>
              </div>
            </div>
          </div>

          {/* Load Forecast */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Load Forecast</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Load:</span>
                <span className="text-green-400">{formatNumber(gridReliability.load_forecast.current)} MW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Peak Today:</span>
                <span className="text-blue-400">{formatNumber(gridReliability.load_forecast.peak_today)} MW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Peak Tomorrow:</span>
                <span className="text-purple-400">{formatNumber(gridReliability.load_forecast.peak_tomorrow)} MW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weekly Peak:</span>
                <span className="text-orange-400">{formatNumber(gridReliability.load_forecast.weekly_peak)} MW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Forecast Accuracy:</span>
                <span className="text-cyan-400">{gridReliability.load_forecast.accuracy.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 POWER SYSTEM TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={energyTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12}/>
            <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12}/>
            <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12}/>
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
              yAxisId="left"
              type="monotone"
              dataKey="load"
              stroke="#F59E0B"
              fill="#F59E0B"
              fillOpacity={0.1}
              strokeWidth={3}
              name="System Load (MW)"
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="generation"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.1}
              strokeWidth={3}
              name="Total Generation (MW)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="nuclear" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Nuclear"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="gas" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Natural Gas"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="solar" 
              stroke="#EAB308" 
              strokeWidth={2}
              name="Solar"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="wind" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Wind"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="frequency" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Frequency (Hz)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Power Grid KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 POWER GRID KPIs & SYSTEM PERFORMANCE METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">System Frequency</div>
            <div className="text-white font-bold text-lg">
              {gridStatus.systemFrequency.toFixed(2)}
            </div>
            <div className="text-green-400 text-xs">Hz (±0.05 target)</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">System Availability</div>
            <div className="text-white font-bold text-lg">
              {gridReliability.system_reliability.availability.toFixed(2)}%
            </div>
            <div className="text-blue-400 text-xs">annual target >99.9%</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">SAIDI</div>
            <div className="text-white font-bold text-lg">
              {gridReliability.system_reliability.saidi.toFixed(1)}
            </div>
            <div className="text-purple-400 text-xs">minutes per customer</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Renewable Penetration</div>
            <div className="text-white font-bold text-lg">
              {((powerPlants.filter(p => p.type === 'SOLAR_PV' || p.type === 'WIND').reduce((sum, p) => sum + p.output, 0) / gridStatus.totalGeneration) * 100).toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">clean energy share</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Load Factor</div>
            <div className="text-white font-bold text-lg">
              {((gridStatus.totalLoad / Math.max(...energyTrends.map(t => t.load))) * 100).toFixed(1)}%
            </div>
            <div className="text-cyan-400 text-xs">of daily peak</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Reserve Margin</div>
            <div className="text-white font-bold text-lg">
              {(((gridStatus.totalGeneration - gridStatus.totalLoad) / gridStatus.totalLoad) * 100).toFixed(1)}%
            </div>
            <div className="text-yellow-400 text-xs">operating reserve</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerGridOperations;