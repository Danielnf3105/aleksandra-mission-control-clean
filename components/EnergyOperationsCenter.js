// EnergyOperationsCenter.js - Energy Operations Center & Smart Grid Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EnergyOperationsCenter = () => {
  const [gridStatus, setGridStatus] = useState({
    operationalStatus: 'NORMAL_OPERATIONS',
    totalGeneration: 15847, // MW
    totalDemand: 14923, // MW
    gridFrequency: 60.02, // Hz
    totalRenewable: 6734, // MW
    renewablePercentage: 42.5,
    gridStability: 97.8, // percentage
    powerQuality: 99.2, // percentage
    transmissionLosses: 3.1, // percentage
    lastUpdate: Date.now()
  });

  const [renewableAssets, setRenewableAssets] = useState([
    {
      asset_id: 'SOLAR_FARM_001',
      asset_type: 'SOLAR_PV',
      location: 'Desert Valley Solar Complex',
      capacity: 250, // MW
      current_output: 198.7, // MW
      efficiency: 79.5, // percentage
      availability: 98.4, // percentage
      status: 'OPTIMAL',
      irradiance: 856, // W/m²
      temperature: 42.3, // °C
      inverter_status: 'ALL_ONLINE',
      energy_today: 3456, // MWh
      forecast_accuracy: 94.2 // percentage
    },
    {
      asset_id: 'WIND_FARM_002',
      asset_type: 'WIND_TURBINE',
      location: 'Coastal Wind Park',
      capacity: 180, // MW
      current_output: 142.3, // MW
      efficiency: 79.1, // percentage
      availability: 94.7, // percentage
      status: 'OPTIMAL',
      wind_speed: 8.7, // m/s
      wind_direction: 235, // degrees
      turbines_online: 34,
      turbines_total: 36,
      energy_today: 2847, // MWh
      forecast_accuracy: 89.6
    },
    {
      asset_id: 'BATTERY_BANK_003',
      asset_type: 'ENERGY_STORAGE',
      location: 'Grid Storage Facility',
      capacity: 100, // MW
      current_output: -45.2, // MW (charging)
      state_of_charge: 72.8, // percentage
      charging_rate: 45.2, // MW
      max_discharge_rate: 100, // MW
      status: 'CHARGING',
      cycles_today: 1.2,
      efficiency: 93.7,
      temperature: 23.5, // °C
      energy_stored: 728, // MWh
      forecast_discharge: Date.now() + 4.5 * 60 * 60 * 1000
    },
    {
      asset_id: 'HYDRO_PLANT_004',
      asset_type: 'HYDROELECTRIC',
      location: 'Mountain Creek Dam',
      capacity: 75, // MW
      current_output: 67.8, // MW
      efficiency: 90.4, // percentage
      availability: 99.2, // percentage
      status: 'OPTIMAL',
      reservoir_level: 86.7, // percentage
      water_flow: 234.6, // m³/s
      turbines_online: 3,
      turbines_total: 3,
      energy_today: 1523, // MWh
      environmental_compliance: 'GREEN'
    },
    {
      asset_id: 'MICROGRID_005',
      asset_type: 'HYBRID_MICROGRID',
      location: 'Industrial Park Microgrid',
      capacity: 25, // MW
      current_output: 18.9, // MW
      grid_connected: true,
      island_mode: false,
      status: 'GRID_TIED',
      local_demand: 22.4, // MW
      import_from_grid: 3.5, // MW
      pv_generation: 8.7, // MW
      battery_storage: 2.2, // MW
      backup_generator: 0, // MW
      reliability: 99.8 // percentage
    }
  ]);

  const [scadaOperations, setScadaOperations] = useState({
    system_integration: {
      scada_nodes: 234,
      ems_integration: 'ACTIVE',
      wams_monitoring: 'ENABLED',
      adms_coordination: 'SYNCHRONIZED',
      gms_status: 'OPERATIONAL'
    },
    remote_control: {
      controllable_devices: 1847,
      automated_responses: 89,
      manual_overrides: 12,
      response_time: 1.2, // seconds
      control_accuracy: 99.7 // percentage
    },
    data_acquisition: {
      measurement_points: 15647,
      data_update_rate: 2, // seconds
      communication_reliability: 99.4, // percentage
      alarm_processing: 23,
      event_logging: 'ACTIVE'
    },
    visualization: {
      one_line_diagrams: 45,
      geographic_displays: 12,
      trend_analysis: 'REAL_TIME',
      customizable_dashboards: 67,
      mobile_access: 'ENABLED'
    }
  });

  const [gridStabilityMetrics, setGridStabilityMetrics] = useState({
    frequency_monitoring: {
      current_frequency: 60.02, // Hz
      frequency_deviation: 0.02, // Hz
      frequency_stability: 'NORMAL',
      automatic_generation_control: 'ACTIVE',
      load_frequency_control: 'ENABLED'
    },
    voltage_control: {
      transmission_voltage: 345, // kV
      distribution_voltage: 13.8, // kV
      voltage_regulation: 98.7, // percentage
      reactive_power_control: 'OPTIMIZED',
      capacitor_bank_status: 'AUTO_SWITCHING'
    },
    power_quality: {
      total_harmonic_distortion: 2.1, // percentage
      power_factor: 0.97,
      voltage_unbalance: 0.8, // percentage
      flicker_severity: 'LOW',
      transient_disturbances: 3
    },
    grid_protection: {
      protection_schemes: 156,
      fault_detection_time: 0.05, // seconds
      auto_reclosing: 'ENABLED',
      backup_protection: 'ARMED',
      cybersecurity_status: 'SECURE'
    }
  });

  const [marketOperations, setMarketOperations] = useState({
    real_time_pricing: {
      current_price: 45.67, // $/MWh
      price_trend: 'STABLE',
      day_ahead_forecast: 47.23, // $/MWh
      peak_price_today: 89.45, // $/MWh
      off_peak_price: 28.34 // $/MWh
    },
    energy_trading: {
      transactions_today: 234,
      revenue_generated: 2847000, // USD
      bilateral_contracts: 45,
      spot_market_sales: 189,
      ancillary_services: 67000 // USD
    },
    demand_response: {
      programs_active: 12,
      curtailable_load: 450, // MW
      participants_enrolled: 2847,
      demand_reduction_today: 123, // MW
      compensation_paid: 23400 // USD
    },
    forecasting: {
      load_forecast_accuracy: 97.3, // percentage
      renewable_forecast_accuracy: 91.8, // percentage
      price_forecast_accuracy: 86.5, // percentage
      weather_integration: 'AI_ENHANCED'
    }
  });

  const [transmissionSystem, setTransmissionSystem] = useState({
    transmission_lines: [
      {
        line_id: 'TL_345_001',
        voltage_level: 345, // kV
        line_length: 125.7, // km
        thermal_rating: 1200, // MW
        current_loading: 756, // MW
        loading_percentage: 63.0,
        status: 'IN_SERVICE',
        power_flow_direction: 'NORTH_TO_SOUTH',
        losses: 2.3, // MW
        temperature: 67.8 // °C
      },
      {
        line_id: 'TL_500_002',
        voltage_level: 500, // kV
        line_length: 89.4, // km
        thermal_rating: 2000, // MW
        current_loading: 1456, // MW
        loading_percentage: 72.8,
        status: 'IN_SERVICE',
        power_flow_direction: 'EAST_TO_WEST',
        losses: 4.1, // MW
        temperature: 72.3
      },
      {
        line_id: 'TL_230_003',
        voltage_level: 230, // kV
        line_length: 67.2, // km
        thermal_rating: 800, // MW
        current_loading: 234, // MW
        loading_percentage: 29.3,
        status: 'MAINTENANCE',
        maintenance_type: 'CONDUCTOR_REPLACEMENT',
        estimated_completion: Date.now() + 6 * 60 * 60 * 1000
      }
    ],
    substations: [
      {
        station_id: 'SUB_CENTRAL_001',
        voltage_levels: [500, 230, 138], // kV
        transformer_loading: 67.8, // percentage
        protection_status: 'ARMED',
        automation_level: 'FULLY_AUTOMATED',
        bay_configuration: '1.5_BREAKER',
        reactive_compensation: 'AUTOMATIC',
        fault_current: 0 // kA (no faults)
      },
      {
        station_id: 'SUB_NORTH_002',
        voltage_levels: [345, 138, 69],
        transformer_loading: 83.4,
        protection_status: 'ARMED',
        automation_level: 'SEMI_AUTOMATED',
        bay_configuration: 'DOUBLE_BUS',
        reactive_compensation: 'MANUAL',
        fault_current: 0
      }
    ]
  });

  const [energyHistory, setEnergyHistory] = useState([]);

  const generateEnergyHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours
      const time = new Date(startOfDay.getTime() + i * 60 * 60 * 1000);
      
      // Simulate realistic energy patterns
      const hour = time.getHours();
      let demandMultiplier = 0.6; // Base demand
      let renewableMultiplier = 0.3; // Base renewable (night)
      
      if (hour >= 6 && hour <= 18) {
        demandMultiplier = 0.9 + 0.3 * Math.sin((hour - 6) * Math.PI / 12); // Peak demand curve
        renewableMultiplier = Math.sin((hour - 6) * Math.PI / 12); // Solar follows sun
      }
      if (hour >= 17 && hour <= 21) demandMultiplier = 1.0; // Evening peak
      
      const baseGeneration = 15000;
      const baseDemand = 14500;
      
      data.push({
        time: time.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        total_generation: Math.floor(baseGeneration + demandMultiplier * 2000 + Math.random() * 500),
        total_demand: Math.floor(baseDemand + demandMultiplier * 2000 + Math.random() * 300),
        renewable_output: Math.floor(renewableMultiplier * 8000 + Math.random() * 1000),
        grid_frequency: 60.0 + (Math.random() - 0.5) * 0.1,
        power_quality: 95 + Math.random() * 4,
        transmission_losses: 2.5 + Math.random() * 1.0,
        market_price: 30 + demandMultiplier * 40 + Math.random() * 10
      });
    }
    return data;
  };

  useEffect(() => {
    setEnergyHistory(generateEnergyHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update grid status
      setGridStatus(prev => ({
        ...prev,
        gridFrequency: Math.max(59.8, Math.min(60.2, prev.gridFrequency + (Math.random() - 0.5) * 0.05)),
        renewablePercentage: Math.max(35.0, Math.min(55.0, prev.renewablePercentage + (Math.random() - 0.5) * 2.0)),
        gridStability: Math.max(95.0, Math.min(99.5, prev.gridStability + (Math.random() - 0.5) * 1.0)),
        powerQuality: Math.max(97.0, Math.min(99.8, prev.powerQuality + (Math.random() - 0.5) * 0.5)),
        lastUpdate: Date.now()
      }));

      // Update renewable assets
      setRenewableAssets(prev => prev.map(asset => {
        let newOutput = asset.current_output;
        if (asset.asset_type === 'SOLAR_PV') {
          // Solar varies with irradiance
          newOutput = Math.max(0, Math.min(asset.capacity, newOutput + (Math.random() - 0.5) * 20));
        } else if (asset.asset_type === 'WIND_TURBINE') {
          // Wind varies with wind speed
          newOutput = Math.max(0, Math.min(asset.capacity, newOutput + (Math.random() - 0.5) * 15));
        }
        
        return {
          ...asset,
          current_output: newOutput,
          efficiency: Math.max(70.0, Math.min(95.0, asset.efficiency + (Math.random() - 0.5) * 2.0))
        };
      }));

      // Update grid stability metrics
      setGridStabilityMetrics(prev => ({
        ...prev,
        frequency_monitoring: {
          ...prev.frequency_monitoring,
          current_frequency: Math.max(59.8, Math.min(60.2, prev.frequency_monitoring.current_frequency + (Math.random() - 0.5) * 0.02)),
          frequency_deviation: Math.abs(prev.frequency_monitoring.current_frequency - 60.0)
        },
        power_quality: {
          ...prev.power_quality,
          total_harmonic_distortion: Math.max(1.0, Math.min(5.0, prev.power_quality.total_harmonic_distortion + (Math.random() - 0.5) * 0.3)),
          power_factor: Math.max(0.90, Math.min(0.99, prev.power_quality.power_factor + (Math.random() - 0.5) * 0.02))
        }
      }));

    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'NORMAL_OPERATIONS':
      case 'OPTIMAL':
      case 'IN_SERVICE':
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'ENABLED':
      case 'ARMED':
      case 'GREEN':
      case 'SECURE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'CHARGING':
      case 'GRID_TIED':
      case 'STABLE':
      case 'AUTO_SWITCHING':
      case 'NORMAL': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'MANUAL': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'FAULT':
      case 'OFFLINE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = timestamp - Date.now();
    if (Math.abs(diff) < 60000) return 'now';
    if (diff > 0) {
      if (diff < 3600000) return `in ${Math.floor(diff / 60000)}min`;
      return `in ${Math.floor(diff / 3600000)}h`;
    } else {
      const absDiff = Math.abs(diff);
      if (absDiff < 3600000) return `${Math.floor(absDiff / 60000)}m ago`;
      return `${Math.floor(absDiff / 3600000)}h ago`;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ⚡ ENERGY OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(gridStatus.gridFrequency, 2)} Hz
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(gridStatus.renewablePercentage, 1)}% Renewable
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(gridStatus.gridStability, 1)}% Stability
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Smart Grid & Renewable Management
          </div>
        </div>
      </div>

      {/* Grid Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL GENERATION</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(gridStatus.totalGeneration)} MW
              </div>
              <div className="text-xs text-blue-300">
                Demand: {formatLargeNumber(gridStatus.totalDemand)} MW
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">RENEWABLE OUTPUT</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(gridStatus.totalRenewable)} MW
              </div>
              <div className="text-xs text-green-300">
                {formatNumber(gridStatus.renewablePercentage, 1)}% of generation
              </div>
            </div>
            <div className="text-3xl opacity-60">🌱</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">GRID FREQUENCY</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(gridStatus.gridFrequency, 2)} Hz
              </div>
              <div className="text-xs text-purple-300">
                Stability: {formatNumber(gridStatus.gridStability, 1)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">POWER QUALITY</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(gridStatus.powerQuality, 1)}%
              </div>
              <div className="text-xs text-orange-300">
                Losses: {formatNumber(gridStatus.transmissionLosses, 1)}%
              </div>
            </div>
            <div className="text-3xl opacity-60">📈</div>
          </div>
        </div>
      </div>

      {/* Renewable Asset Monitoring */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🌿 RENEWABLE ASSET MONITORING & CONTROL
        </h3>
        <div className="space-y-3">
          {renewableAssets.map((asset) => (
            <div key={asset.asset_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{asset.asset_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(asset.status)}`}>
                    {asset.status}
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                    {asset.asset_type.replace(/_/g, ' ')}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {asset.location}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Output: </span>
                <span className="text-cyan-400">{formatNumber(asset.current_output, 1)} MW</span>
                <span className="text-gray-400"> / </span>
                <span className="text-blue-400">{asset.capacity} MW</span>
                <span className="text-gray-400"> ({formatNumber((asset.current_output / asset.capacity) * 100, 1)}%)</span>
              </div>

              <div className="text-xs mb-2">
                <span className="text-gray-400">Efficiency: </span>
                <span className="text-green-400">{formatNumber(asset.efficiency, 1)}%</span>
                <span className="text-gray-400"> | Availability: </span>
                <span className="text-purple-400">{formatNumber(asset.availability, 1)}%</span>
                <span className="text-gray-400"> | Energy Today: </span>
                <span className="text-orange-400">{formatLargeNumber(asset.energy_today)} MWh</span>
                <span className="text-gray-400"> | Forecast Accuracy: </span>
                <span className="text-pink-400">{formatNumber(asset.forecast_accuracy, 1)}%</span>
              </div>

              {asset.asset_type === 'SOLAR_PV' && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Irradiance: </span>
                  <span className="text-yellow-400">{asset.irradiance} W/m²</span>
                  <span className="text-gray-400"> | Temperature: </span>
                  <span className="text-red-400">{formatNumber(asset.temperature, 1)}°C</span>
                  <span className="text-gray-400"> | Inverters: </span>
                  <span className="text-green-400">{asset.inverter_status.replace(/_/g, ' ')}</span>
                </div>
              )}

              {asset.asset_type === 'WIND_TURBINE' && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Wind Speed: </span>
                  <span className="text-cyan-400">{formatNumber(asset.wind_speed, 1)} m/s</span>
                  <span className="text-gray-400"> | Direction: </span>
                  <span className="text-blue-400">{asset.wind_direction}°</span>
                  <span className="text-gray-400"> | Turbines: </span>
                  <span className="text-green-400">{asset.turbines_online}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-purple-400">{asset.turbines_total}</span>
                </div>
              )}

              {asset.asset_type === 'ENERGY_STORAGE' && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">SoC: </span>
                  <span className="text-blue-400">{formatNumber(asset.state_of_charge, 1)}%</span>
                  <span className="text-gray-400"> | Charging: </span>
                  <span className="text-yellow-400">{formatNumber(asset.charging_rate, 1)} MW</span>
                  <span className="text-gray-400"> | Cycles Today: </span>
                  <span className="text-orange-400">{formatNumber(asset.cycles_today, 1)}</span>
                  <span className="text-gray-400"> | Est. Discharge: </span>
                  <span className="text-green-400">{formatTime(asset.forecast_discharge)}</span>
                </div>
              )}

              {asset.asset_type === 'HYDROELECTRIC' && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Reservoir: </span>
                  <span className="text-blue-400">{formatNumber(asset.reservoir_level, 1)}%</span>
                  <span className="text-gray-400"> | Water Flow: </span>
                  <span className="text-cyan-400">{formatNumber(asset.water_flow, 1)} m³/s</span>
                  <span className="text-gray-400"> | Turbines: </span>
                  <span className="text-green-400">{asset.turbines_online}/{asset.turbines_total}</span>
                  <span className="text-gray-400"> | Compliance: </span>
                  <span className="text-green-400">{asset.environmental_compliance}</span>
                </div>
              )}

              {asset.asset_type === 'HYBRID_MICROGRID' && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Local Demand: </span>
                  <span className="text-orange-400">{formatNumber(asset.local_demand, 1)} MW</span>
                  <span className="text-gray-400"> | Grid Import: </span>
                  <span className="text-red-400">{formatNumber(asset.import_from_grid, 1)} MW</span>
                  <span className="text-gray-400"> | PV: </span>
                  <span className="text-yellow-400">{formatNumber(asset.pv_generation, 1)} MW</span>
                  <span className="text-gray-400"> | Battery: </span>
                  <span className="text-purple-400">{formatNumber(asset.battery_storage, 1)} MW</span>
                  <span className="text-gray-400"> | Reliability: </span>
                  <span className="text-green-400">{formatNumber(asset.reliability, 1)}%</span>
                </div>
              )}

              <div className="w-full bg-gray-600 rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-green-400"
                  style={{ width: `${Math.min((asset.current_output / asset.capacity) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCADA Operations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🖥️ SCADA OPERATIONS & SYSTEM INTEGRATION
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">System Integration</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">SCADA Nodes:</span>
                <span className="text-cyan-400">{scadaOperations.system_integration.scada_nodes}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">EMS Integration:</span>
                <span className={`${getStatusColor(scadaOperations.system_integration.ems_integration).split(' ')[0]}`}>
                  {scadaOperations.system_integration.ems_integration}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">WAMS Monitoring:</span>
                <span className={`${getStatusColor(scadaOperations.system_integration.wams_monitoring).split(' ')[0]}`}>
                  {scadaOperations.system_integration.wams_monitoring}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">ADMS Coordination:</span>
                <span className="text-green-400">{scadaOperations.system_integration.adms_coordination}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">GMS Status:</span>
                <span className={`${getStatusColor(scadaOperations.system_integration.gms_status).split(' ')[0]}`}>
                  {scadaOperations.system_integration.gms_status}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Remote Control</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Controllable Devices:</span>
                <span className="text-blue-400">{formatLargeNumber(scadaOperations.remote_control.controllable_devices)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Automated Responses:</span>
                <span className="text-green-400">{scadaOperations.remote_control.automated_responses}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Manual Overrides:</span>
                <span className="text-yellow-400">{scadaOperations.remote_control.manual_overrides}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Response Time:</span>
                <span className="text-purple-400">{formatNumber(scadaOperations.remote_control.response_time, 1)}s</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Control Accuracy:</span>
                <span className="text-green-400">{formatNumber(scadaOperations.remote_control.control_accuracy, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Data Acquisition</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Measurement Points:</span>
                <span className="text-orange-400">{formatLargeNumber(scadaOperations.data_acquisition.measurement_points)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Update Rate:</span>
                <span className="text-cyan-400">{scadaOperations.data_acquisition.data_update_rate}s</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Communication:</span>
                <span className="text-green-400">{formatNumber(scadaOperations.data_acquisition.communication_reliability, 1)}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Alarm Processing:</span>
                <span className="text-red-400">{scadaOperations.data_acquisition.alarm_processing}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Event Logging:</span>
                <span className={`${getStatusColor(scadaOperations.data_acquisition.event_logging).split(' ')[0]}`}>
                  {scadaOperations.data_acquisition.event_logging}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Visualization</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">One-Line Diagrams:</span>
                <span className="text-pink-400">{scadaOperations.visualization.one_line_diagrams}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Geographic Displays:</span>
                <span className="text-blue-400">{scadaOperations.visualization.geographic_displays}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Trend Analysis:</span>
                <span className="text-green-400">{scadaOperations.visualization.trend_analysis.replace(/_/g, ' ')}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Custom Dashboards:</span>
                <span className="text-purple-400">{scadaOperations.visualization.customizable_dashboards}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">Mobile Access:</span>
                <span className={`${getStatusColor(scadaOperations.visualization.mobile_access).split(' ')[0]}`}>
                  {scadaOperations.visualization.mobile_access}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Operations Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 ENERGY OPERATIONS TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={energyHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
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
              dataKey="total_generation"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Total Generation (MW)"
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="total_demand"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.1}
              strokeWidth={2}
              name="Total Demand (MW)"
            />
            <Area
              yAxisId="left"
              type="monotone"
              dataKey="renewable_output"
              stroke="#22C55E"
              fill="#22C55E"
              fillOpacity={0.3}
              strokeWidth={2}
              name="Renewable Output (MW)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="grid_frequency" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Grid Frequency (Hz)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="power_quality" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Power Quality %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="transmission_losses" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Transmission Losses %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="market_price" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Market Price ($/MWh)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Grid Stability and Market Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Grid Stability Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚖️ GRID STABILITY & POWER QUALITY
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Frequency Control</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Frequency:</span>
                <span className="text-green-400">{formatNumber(gridStabilityMetrics.frequency_monitoring.current_frequency, 3)} Hz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Frequency Deviation:</span>
                <span className="text-yellow-400">±{formatNumber(gridStabilityMetrics.frequency_monitoring.frequency_deviation, 3)} Hz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">AGC Status:</span>
                <span className={`${getStatusColor(gridStabilityMetrics.frequency_monitoring.automatic_generation_control).split(' ')[0]}`}>
                  {gridStabilityMetrics.frequency_monitoring.automatic_generation_control}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LFC Status:</span>
                <span className={`${getStatusColor(gridStabilityMetrics.frequency_monitoring.load_frequency_control).split(' ')[0]}`}>
                  {gridStabilityMetrics.frequency_monitoring.load_frequency_control}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Voltage Control</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Transmission:</span>
                <span className="text-blue-400">{gridStabilityMetrics.voltage_control.transmission_voltage} kV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Distribution:</span>
                <span className="text-cyan-400">{formatNumber(gridStabilityMetrics.voltage_control.distribution_voltage, 1)} kV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Voltage Regulation:</span>
                <span className="text-green-400">{formatNumber(gridStabilityMetrics.voltage_control.voltage_regulation, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Reactive Power:</span>
                <span className="text-purple-400">{gridStabilityMetrics.voltage_control.reactive_power_control}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Power Quality</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">THD:</span>
                <span className="text-orange-400">{formatNumber(gridStabilityMetrics.power_quality.total_harmonic_distortion, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Power Factor:</span>
                <span className="text-green-400">{formatNumber(gridStabilityMetrics.power_quality.power_factor, 2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Voltage Unbalance:</span>
                <span className="text-yellow-400">{formatNumber(gridStabilityMetrics.power_quality.voltage_unbalance, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transient Events:</span>
                <span className="text-red-400">{gridStabilityMetrics.power_quality.transient_disturbances}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Market Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💰 MARKET OPERATIONS & ENERGY TRADING
          </h3>
          
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Real-Time Pricing</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Current Price:</span>
                <span className="text-green-400">{formatCurrency(marketOperations.real_time_pricing.current_price)}/MWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Day-Ahead:</span>
                <span className="text-blue-400">{formatCurrency(marketOperations.real_time_pricing.day_ahead_forecast)}/MWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Peak Today:</span>
                <span className="text-red-400">{formatCurrency(marketOperations.real_time_pricing.peak_price_today)}/MWh</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Off-Peak:</span>
                <span className="text-cyan-400">{formatCurrency(marketOperations.real_time_pricing.off_peak_price)}/MWh</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Energy Trading</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions Today:</span>
                <span className="text-purple-400">{marketOperations.energy_trading.transactions_today}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Revenue Generated:</span>
                <span className="text-green-400">{formatCurrency(marketOperations.energy_trading.revenue_generated)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Bilateral Contracts:</span>
                <span className="text-orange-400">{marketOperations.energy_trading.bilateral_contracts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Spot Market:</span>
                <span className="text-yellow-400">{marketOperations.energy_trading.spot_market_sales}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Demand Response</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Active Programs:</span>
                <span className="text-blue-400">{marketOperations.demand_response.programs_active}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Curtailable Load:</span>
                <span className="text-cyan-400">{marketOperations.demand_response.curtailable_load} MW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Participants:</span>
                <span className="text-pink-400">{formatLargeNumber(marketOperations.demand_response.participants_enrolled)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Compensation Paid:</span>
                <span className="text-green-400">{formatCurrency(marketOperations.demand_response.compensation_paid)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transmission System */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔌 TRANSMISSION SYSTEM MONITORING
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Transmission Lines</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {transmissionSystem.transmission_lines.map((line, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{line.line_id}</span>
                    <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(line.status)}`}>
                      {line.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  
                  {line.status === 'IN_SERVICE' ? (
                    <>
                      <div className="text-xs mb-1">
                        <span className="text-gray-400">Voltage: </span>
                        <span className="text-blue-400">{line.voltage_level} kV</span>
                        <span className="text-gray-400"> | Length: </span>
                        <span className="text-cyan-400">{formatNumber(line.line_length, 1)} km</span>
                      </div>
                      <div className="text-xs mb-1">
                        <span className="text-gray-400">Loading: </span>
                        <span className="text-purple-400">{line.current_loading} MW</span>
                        <span className="text-gray-400"> / </span>
                        <span className="text-orange-400">{line.thermal_rating} MW</span>
                        <span className="text-gray-400"> ({formatNumber(line.loading_percentage, 1)}%)</span>
                      </div>
                      <div className="text-xs">
                        <span className="text-gray-400">Flow: </span>
                        <span className="text-yellow-400">{line.power_flow_direction.replace(/_/g, ' ')}</span>
                        <span className="text-gray-400"> | Losses: </span>
                        <span className="text-red-400">{formatNumber(line.losses, 1)} MW</span>
                        <span className="text-gray-400"> | Temp: </span>
                        <span className="text-pink-400">{formatNumber(line.temperature, 1)}°C</span>
                      </div>
                      <div className="w-full bg-gray-500 rounded-full h-1 mt-1">
                        <div 
                          className={`h-1 rounded-full ${line.loading_percentage < 70 ? 'bg-green-400' : 
                                                          line.loading_percentage < 85 ? 'bg-yellow-400' : 'bg-red-400'}`}
                          style={{ width: `${Math.min(line.loading_percentage, 100)}%` }}
                        ></div>
                      </div>
                    </>
                  ) : (
                    <div className="text-xs">
                      <span className="text-gray-400">Maintenance: </span>
                      <span className="text-orange-400">{line.maintenance_type?.replace(/_/g, ' ')}</span>
                      <span className="text-gray-400"> | ETA: </span>
                      <span className="text-yellow-400">{formatTime(line.estimated_completion)}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Substations</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {transmissionSystem.substations.map((station, index) => (
                <div key={index} className="bg-gray-600 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">{station.station_id}</span>
                    <span className="text-xs text-gray-400">
                      {station.automation_level.replace(/_/g, ' ')}
                    </span>
                  </div>
                  
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Voltage Levels: </span>
                    <span className="text-blue-400">{station.voltage_levels.join('/')} kV</span>
                  </div>
                  <div className="text-xs mb-1">
                    <span className="text-gray-400">Transformer Loading: </span>
                    <span className="text-purple-400">{formatNumber(station.transformer_loading, 1)}%</span>
                    <span className="text-gray-400"> | Protection: </span>
                    <span className={`${getStatusColor(station.protection_status).split(' ')[0]}`}>
                      {station.protection_status}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Configuration: </span>
                    <span className="text-cyan-400">{station.bay_configuration.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Reactive: </span>
                    <span className="text-green-400">{station.reactive_compensation}</span>
                  </div>
                  <div className="w-full bg-gray-500 rounded-full h-1 mt-1">
                    <div 
                      className={`h-1 rounded-full ${station.transformer_loading < 70 ? 'bg-green-400' : 
                                                      station.transformer_loading < 85 ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${Math.min(station.transformer_loading, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyOperationsCenter;