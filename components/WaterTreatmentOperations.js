// WaterTreatmentOperations.js - Water Treatment Plant Operations Control Center & SCADA Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WaterTreatmentOperations = () => {
  const [plantStatus, setPlantStatus] = useState({
    operationalStatus: 'OPERATIONAL',
    totalFlow: 45.7, // MGD (Million Gallons per Day)
    waterQuality: 'EXCELLENT',
    chemicalFeed: 'OPTIMAL',
    systemPressure: 85.3, // PSI
    turbidity: 0.08, // NTU
    chlorineResidual: 1.2, // mg/L
    ph: 7.4,
    lastUpdate: Date.now()
  });

  const [treatmentStages, setTreatmentStages] = useState([
    {
      id: 'intake',
      name: 'Raw Water Intake',
      status: 'OPERATIONAL',
      flow: 48.2, // MGD
      turbidity: 12.5, // NTU
      temperature: 14.8, // celsius
      ph: 7.1,
      conductivity: 285, // μS/cm
      pumps: {
        total: 4,
        operational: 3,
        maintenance: 1,
        flow_rates: [12.1, 11.9, 12.3, 0.0] // MGD per pump
      },
      screens: {
        coarse_screens: 'CLEAR',
        fine_screens: 'CLEANING_CYCLE',
        debris_removed: 245 // kg today
      },
      source_quality: {
        algae_count: 850, // cells/mL
        coliform: 'DETECTED',
        hardness: 185, // mg/L as CaCO3
        iron: 0.8, // mg/L
        manganese: 0.3
      },
      alerts: ['Pump 4 scheduled maintenance active'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'coagulation',
      name: 'Coagulation & Flocculation',
      status: 'OPERATIONAL', 
      flow: 47.8,
      retention_time: 45, // minutes
      paddle_wheel_rpm: 25,
      temperature: 15.2,
      chemical_dosing: {
        alum: {
          dosage: 35.2, // mg/L
          feed_rate: 1680, // L/hr
          tank_level: 78.4, // percentage
          purity: 98.7,
          cost_per_ton: 285
        },
        polymer: {
          dosage: 0.8,
          feed_rate: 38.2,
          tank_level: 65.1,
          concentration: 0.5, // percentage
          effectiveness: 94.2
        },
        lime: {
          dosage: 15.7,
          feed_rate: 750,
          tank_level: 82.3,
          ph_adjustment: 0.3,
          alkalinity_target: 85
        }
      },
      mixing_conditions: {
        rapid_mix_time: 2.5, // minutes
        slow_mix_time: 42.5,
        velocity_gradient: 85, // s⁻¹
        floc_formation: 'OPTIMAL',
        particle_removal: 92.7 // percentage
      },
      water_quality: {
        turbidity_in: 12.5,
        turbidity_out: 2.1,
        ph_in: 7.1,
        ph_out: 7.3,
        alkalinity: 82.4, // mg/L
        hardness_reduction: 15.2
      },
      alerts: ['Chemical feed optimization in progress'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'sedimentation',
      name: 'Sedimentation Basins',
      status: 'OPERATIONAL',
      flow: 47.5,
      basin_count: 6,
      operational_basins: 5,
      cleaning_basin: 1,
      overflow_rate: 0.85, // GPM/sq ft
      detention_time: 4.2, // hours
      sludge_management: {
        sludge_blanket_depth: 1.8, // meters
        sludge_age: 12.5, // days
        withdrawal_rate: 125, // GPM
        solids_concentration: 8500, // mg/L
        dewatering_efficiency: 94.3,
        disposal_volume: 15.7 // cubic yards today
      },
      basin_performance: [
        { id: 1, status: 'OPERATIONAL', efficiency: 96.2, turbidity_out: 1.8 },
        { id: 2, status: 'OPERATIONAL', efficiency: 95.8, turbidity_out: 1.9 },
        { id: 3, status: 'OPERATIONAL', efficiency: 96.5, turbidity_out: 1.7 },
        { id: 4, status: 'OPERATIONAL', efficiency: 95.9, turbidity_out: 1.8 },
        { id: 5, status: 'OPERATIONAL', efficiency: 96.1, turbidity_out: 1.8 },
        { id: 6, status: 'CLEANING', efficiency: 0.0, turbidity_out: 0.0 }
      ],
      water_quality: {
        turbidity_reduction: 85.7, // percentage
        suspended_solids_removal: 92.4,
        color_removal: 78.3,
        algae_removal: 89.6,
        particle_count_reduction: 94.1
      },
      alerts: ['Basin 6 cleaning cycle - return to service in 4 hours'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'filtration',
      name: 'Rapid Sand Filtration',
      status: 'OPERATIONAL',
      flow: 47.1,
      filter_count: 8,
      operational_filters: 7,
      backwash_cycle: 1,
      filtration_rate: 4.8, // GPM/sq ft
      head_loss: 5.2, // feet
      filter_performance: [
        { id: 1, status: 'OPERATIONAL', runtime: 18.5, head_loss: 4.8, turbidity: 0.12 },
        { id: 2, status: 'OPERATIONAL', runtime: 22.1, head_loss: 6.1, turbidity: 0.09 },
        { id: 3, status: 'OPERATIONAL', runtime: 15.7, head_loss: 4.2, turbidity: 0.11 },
        { id: 4, status: 'OPERATIONAL', runtime: 28.3, head_loss: 7.8, turbidity: 0.08 },
        { id: 5, status: 'OPERATIONAL', runtime: 12.9, head_loss: 3.9, turbidity: 0.13 },
        { id: 6, status: 'OPERATIONAL', runtime: 20.8, head_loss: 5.5, turbidity: 0.10 },
        { id: 7, status: 'OPERATIONAL', runtime: 25.4, head_loss: 6.9, turbidity: 0.07 },
        { id: 8, status: 'BACKWASH', runtime: 0.0, head_loss: 0.0, turbidity: 0.0 }
      ],
      backwash_system: {
        backwash_frequency: 36, // hours average
        backwash_duration: 12, // minutes
        water_usage: 2.8, // percentage of production
        air_scour: 'ENABLED',
        surface_wash: 'ENABLED',
        waste_water_volume: 1.25 // MG per cycle
      },
      filter_media: {
        sand_depth: 30, // inches
        anthracite_depth: 18,
        effective_size: 0.55, // mm
        uniformity_coefficient: 1.65,
        media_replacement_due: 'Q3_2026'
      },
      water_quality: {
        turbidity_in: 1.8,
        turbidity_out: 0.09,
        turbidity_removal: 95.0,
        particle_removal: 99.7,
        cyst_removal: 99.95,
        bacteria_removal: 99.99
      },
      alerts: ['Filter 8 backwash cycle - 8 minutes remaining'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'disinfection',
      name: 'Disinfection & pH Adjustment',
      status: 'OPERATIONAL',
      flow: 46.8,
      chlorine_contact_time: 45, // minutes
      ct_value: 54, // mg⋅min/L
      disinfection_efficiency: 99.99,
      chlorination_system: {
        primary_chlorine: {
          type: 'SODIUM_HYPOCHLORITE',
          concentration: 12.5, // percentage
          dosage: 2.8, // mg/L
          feed_rate: 131, // GPH
          tank_level: 72.4,
          residual_target: 1.2,
          contact_basin_level: 85.7
        },
        secondary_chlorine: {
          type: 'CHLORINE_GAS',
          dosage: 0.0,
          status: 'STANDBY',
          safety_systems: 'ARMED',
          leak_detection: 'OPERATIONAL',
          scrubber_system: 'READY'
        }
      },
      ph_adjustment: {
        current_ph: 7.4,
        target_ph: 7.2,
        caustic_soda_dosage: 8.5, // mg/L
        feed_rate: 398, // L/hr
        tank_level: 68.9,
        distribution_system_ph: 7.3,
        corrosion_control: 'OPTIMAL'
      },
      fluoridation: {
        fluoride_dosage: 0.8, // mg/L
        target_dosage: 0.7,
        feed_rate: 37.4, // L/hr
        tank_level: 78.2,
        fluoride_residual: 0.72,
        public_health_compliance: 'COMPLIANT'
      },
      disinfection_byproducts: {
        total_trihalomethanes: 28.4, // μg/L
        haloacetic_acids: 15.2,
        chlorate: 156,
        chlorite: 89,
        regulatory_compliance: 'COMPLIANT'
      },
      pathogen_inactivation: {
        giardia_log_removal: 3.5,
        virus_log_removal: 4.2,
        cryptosporidium_log_removal: 2.8,
        total_coliform: 'ABSENT',
        e_coli: 'ABSENT'
      },
      alerts: ['Fluoride feed rate optimized for target residual'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'clearwell',
      name: 'Clear Well & Distribution',
      status: 'OPERATIONAL',
      flow: 46.5,
      storage_capacity: 15.5, // MG
      current_level: 12.8,
      level_percentage: 82.6,
      turnover_time: 6.8, // hours
      distribution_pumping: {
        high_service_pumps: {
          total: 6,
          operational: 4,
          standby: 2,
          total_capacity: 85, // MGD
          current_output: 46.5,
          efficiency: 89.7,
          energy_usage: 2850 // kWh today
        },
        booster_stations: {
          station_1: { status: 'OPERATIONAL', pressure: 65.2, flow: 18.7 },
          station_2: { status: 'OPERATIONAL', pressure: 68.9, flow: 15.3 },
          station_3: { status: 'OPERATIONAL', pressure: 71.4, flow: 12.5 }
        },
        system_pressure: {
          average: 68.5, // PSI
          minimum: 52.1,
          maximum: 89.7,
          target_range: '60-80',
          pressure_zones: 12
        }
      },
      water_quality_monitoring: {
        online_analyzers: {
          turbidity: 0.08, // NTU
          free_chlorine: 1.18, // mg/L
          ph: 7.4,
          conductivity: 298, // μS/cm
          temperature: 16.2, // celsius
          fluoride: 0.74 // mg/L
        },
        grab_sample_results: {
          heterotrophic_plate_count: 12, // CFU/mL
          total_dissolved_solids: 189, // mg/L
          hardness: 158,
          alkalinity: 84.2,
          iron: 0.02,
          manganese: 0.01
        },
        distribution_monitoring: {
          sampling_sites: 45,
          weekly_samples: 180,
          monthly_samples: 45,
          compliance_rate: 99.7,
          last_violation: 'NONE_2025'
        }
      },
      energy_management: {
        total_power_usage: 1850, // kW current
        daily_energy_cost: 4250, // dollars
        energy_efficiency: 3.2, // kWh per thousand gallons
        renewable_energy: 15.7, // percentage from solar
        demand_response: 'ENROLLED',
        peak_shaving: 'ACTIVE'
      },
      alerts: ['Energy demand response event scheduled 19:00-21:00'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    }
  ]);

  const [waterQualityTrends, setWaterQualityTrends] = useState([]);

  const [systemAlerts, setSystemAlerts] = useState([
    {
      id: 'alert_001',
      severity: 'INFO',
      timestamp: Date.now() - 15 * 60 * 1000,
      message: 'Filter 8 backwash cycle initiated - normal operation',
      location: 'Filtration Plant',
      category: 'MAINTENANCE',
      acknowledged: true
    },
    {
      id: 'alert_002',
      severity: 'LOW',
      timestamp: Date.now() - 45 * 60 * 1000,
      message: 'Alum tank level approaching 75% - refill scheduled',
      location: 'Chemical Feed System',
      category: 'CHEMICAL_INVENTORY',
      acknowledged: false
    },
    {
      id: 'alert_003',
      severity: 'INFO',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      message: 'Energy demand response event confirmed for evening peak',
      location: 'Electrical Systems',
      category: 'ENERGY_MANAGEMENT',
      acknowledged: true
    }
  ]);

  const generateWaterQualityTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        turbidity: 0.05 + Math.random() * 0.08,
        ph: 7.2 + Math.random() * 0.4,
        chlorine: 1.0 + Math.random() * 0.4,
        flow: 44 + Math.random() * 6,
        pressure: 65 + Math.random() * 10,
        temperature: 14 + Math.random() * 4
      });
    }
    return data;
  };

  useEffect(() => {
    setWaterQualityTrends(generateWaterQualityTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update plant status
      setPlantStatus(prev => ({
        ...prev,
        totalFlow: Math.max(40, Math.min(50, prev.totalFlow + (Math.random() - 0.5) * 2)),
        systemPressure: Math.max(75, Math.min(95, prev.systemPressure + (Math.random() - 0.5) * 3)),
        turbidity: Math.max(0.05, Math.min(0.15, prev.turbidity + (Math.random() - 0.5) * 0.02)),
        chlorineResidual: Math.max(1.0, Math.min(1.5, prev.chlorineResidual + (Math.random() - 0.5) * 0.1)),
        ph: Math.max(7.0, Math.min(7.8, prev.ph + (Math.random() - 0.5) * 0.1)),
        lastUpdate: Date.now()
      }));

      // Update treatment stages
      setTreatmentStages(prev => prev.map(stage => ({
        ...stage,
        flow: Math.max(stage.flow * 0.9, Math.min(stage.flow * 1.1, 
          stage.flow + (Math.random() - 0.5) * 1)),
        temperature: Math.max(10, Math.min(25, stage.temperature + (Math.random() - 0.5) * 0.5)),
        lastUpdate: Date.now()
      })));

    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'OPTIMAL':
      case 'EXCELLENT':
      case 'COMPLIANT':
      case 'CLEAR':
      case 'ENABLED':
      case 'READY':
      case 'ARMED':
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'CLEANING_CYCLE':
      case 'BACKWASH':
      case 'CLEANING':
      case 'STANDBY':
      case 'ENROLLED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'DETECTED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'INFO': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 1) => {
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
          💧 WATER TREATMENT PLANT OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(plantStatus.totalFlow)} MGD Flow
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {formatNumber(plantStatus.turbidity, 2)} NTU
          </div>
          <div className="text-sm text-gray-400 font-mono">
            SCADA & Water Quality Management
          </div>
        </div>
      </div>

      {/* Plant Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL FLOW</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(plantStatus.totalFlow)}
              </div>
              <div className="text-xs text-blue-300">
                Million Gallons/Day
              </div>
            </div>
            <div className="text-3xl opacity-60">💧</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">WATER QUALITY</div>
              <div className="text-2xl font-bold text-green-100">
                {plantStatus.waterQuality}
              </div>
              <div className="text-xs text-green-300">
                Turbidity: {formatNumber(plantStatus.turbidity, 2)} NTU
              </div>
            </div>
            <div className="text-3xl opacity-60">✨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">CHLORINE RESIDUAL</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(plantStatus.chlorineResidual)}
              </div>
              <div className="text-xs text-purple-300">
                mg/L (Target: 1.2)
              </div>
            </div>
            <div className="text-3xl opacity-60">🧪</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">SYSTEM PRESSURE</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(plantStatus.systemPressure)}
              </div>
              <div className="text-xs text-orange-300">
                PSI | pH: {formatNumber(plantStatus.ph)}
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>
      </div>

      {/* Treatment Process Flow */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔄 WATER TREATMENT PROCESS FLOW & SCADA MONITORING
        </h3>
        <div className="space-y-4">
          {treatmentStages.map((stage, index) => (
            <div key={stage.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-mono">
                    {index + 1}
                  </div>
                  <div className="text-sm font-bold text-white">{stage.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(stage.status)}`}>
                    {stage.status}
                  </span>
                  {stage.alerts && stage.alerts.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                      {stage.alerts.length} alert{stage.alerts.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {formatTime(stage.lastUpdate)}
                </div>
              </div>

              {/* Basic Parameters */}
              <div className="text-xs mb-3">
                <span className="text-gray-400">Flow: </span>
                <span className="text-blue-400">{formatNumber(stage.flow)} MGD</span>
                {stage.temperature && (
                  <>
                    <span className="text-gray-400"> | Temp: </span>
                    <span className="text-orange-400">{formatNumber(stage.temperature)}°C</span>
                  </>
                )}
                {stage.ph && (
                  <>
                    <span className="text-gray-400"> | pH: </span>
                    <span className="text-green-400">{formatNumber(stage.ph)}</span>
                  </>
                )}
                {stage.turbidity && (
                  <>
                    <span className="text-gray-400"> | Turbidity: </span>
                    <span className="text-purple-400">{formatNumber(stage.turbidity)} NTU</span>
                  </>
                )}
              </div>

              {/* Stage-Specific Details */}
              {stage.id === 'intake' && stage.pumps && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Pumps: </span>
                  <span className="text-green-400">{stage.pumps.operational}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{stage.pumps.total} operational</span>
                  <span className="text-gray-400"> | Screens: </span>
                  <span className={getStatusColor(stage.screens.coarse_screens)}>
                    {stage.screens.coarse_screens.replace(/_/g, ' ')}
                  </span>
                  <span className="text-gray-400"> | Debris: </span>
                  <span className="text-orange-400">{stage.screens.debris_removed} kg today</span>
                </div>
              )}

              {stage.id === 'coagulation' && stage.chemical_dosing && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Chemicals: </span>
                  <span className="text-yellow-400">Alum {formatNumber(stage.chemical_dosing.alum.dosage)} mg/L</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">Polymer {formatNumber(stage.chemical_dosing.polymer.dosage)} mg/L</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">Lime {formatNumber(stage.chemical_dosing.lime.dosage)} mg/L</span>
                  <span className="text-gray-400"> | Removal: </span>
                  <span className="text-purple-400">{formatNumber(stage.mixing_conditions.particle_removal)}%</span>
                </div>
              )}

              {stage.id === 'sedimentation' && stage.sludge_management && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Basins: </span>
                  <span className="text-green-400">{stage.operational_basins}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{stage.basin_count} operational</span>
                  <span className="text-gray-400"> | Efficiency: </span>
                  <span className="text-purple-400">
                    {formatNumber(stage.basin_performance.filter(b => b.status === 'OPERATIONAL')
                      .reduce((avg, b) => avg + b.efficiency, 0) / stage.operational_basins)}%
                  </span>
                  <span className="text-gray-400"> | Sludge: </span>
                  <span className="text-orange-400">{formatNumber(stage.sludge_management.sludge_blanket_depth)}m depth</span>
                </div>
              )}

              {stage.id === 'filtration' && stage.filter_performance && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Filters: </span>
                  <span className="text-green-400">{stage.operational_filters}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{stage.filter_count} operational</span>
                  <span className="text-gray-400"> | Head Loss: </span>
                  <span className="text-orange-400">{formatNumber(stage.head_loss)} ft</span>
                  <span className="text-gray-400"> | Avg Turbidity: </span>
                  <span className="text-purple-400">
                    {formatNumber(stage.filter_performance.filter(f => f.status === 'OPERATIONAL')
                      .reduce((avg, f) => avg + f.turbidity, 0) / stage.operational_filters, 2)} NTU
                  </span>
                </div>
              )}

              {stage.id === 'disinfection' && stage.chlorination_system && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Chlorination: </span>
                  <span className="text-green-400">{formatNumber(stage.chlorination_system.primary_chlorine.dosage)} mg/L</span>
                  <span className="text-gray-400"> | pH: </span>
                  <span className="text-blue-400">{formatNumber(stage.ph_adjustment.current_ph)}</span>
                  <span className="text-gray-400"> (Target: {formatNumber(stage.ph_adjustment.target_ph)})</span>
                  <span className="text-gray-400"> | CT Value: </span>
                  <span className="text-purple-400">{stage.ct_value} mg⋅min/L</span>
                  <span className="text-gray-400"> | Efficiency: </span>
                  <span className="text-green-400">{formatNumber(stage.disinfection_efficiency)}%</span>
                </div>
              )}

              {stage.id === 'clearwell' && stage.distribution_pumping && (
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Storage: </span>
                  <span className="text-blue-400">{formatNumber(stage.current_level)} MG</span>
                  <span className="text-gray-400"> (</span>
                  <span className="text-green-400">{formatNumber(stage.level_percentage)}%</span>
                  <span className="text-gray-400">) | Pumps: </span>
                  <span className="text-purple-400">{stage.distribution_pumping.high_service_pumps.operational}/{stage.distribution_pumping.high_service_pumps.total}</span>
                  <span className="text-gray-400"> | Energy: </span>
                  <span className="text-orange-400">{formatNumber(stage.energy_management.energy_efficiency)} kWh/kgal</span>
                </div>
              )}

              {stage.alerts && stage.alerts.length > 0 && (
                <div className="text-xs">
                  <div className="text-gray-400">Alerts:</div>
                  {stage.alerts.slice(0, 2).map((alert, index) => (
                    <div key={index} className="text-yellow-400">💧 {alert}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Water Quality Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 WATER QUALITY TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={waterQualityTrends}>
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
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="turbidity" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Turbidity (NTU)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="ph" 
              stroke="#10B981" 
              strokeWidth={2}
              name="pH"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="chlorine" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Chlorine (mg/L)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="flow" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Flow (MGD)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="pressure" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Pressure (PSI)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* System Alerts */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚨 SYSTEM ALERTS & NOTIFICATIONS
        </h3>
        <div className="space-y-3">
          {systemAlerts.length === 0 ? (
            <div className="text-center text-green-400 py-4">
              ✅ No active alerts - All systems operating normally
            </div>
          ) : (
            systemAlerts.map((alert) => (
              <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {alert.category.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs text-cyan-400">{alert.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {alert.acknowledged && (
                      <span className="text-xs px-2 py-1 rounded bg-green-500 text-white">ACK</span>
                    )}
                    <div className="text-xs text-gray-400">
                      {formatTime(alert.timestamp)}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-white">{alert.message}</div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Plant Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 WATER TREATMENT PLANT KPIs & PERFORMANCE METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Turbidity Removal</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(((12.5 - plantStatus.turbidity) / 12.5) * 100)}%
            </div>
            <div className="text-green-400 text-xs">Raw to finished</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Plant Efficiency</div>
            <div className="text-white font-bold text-lg">96.8%</div>
            <div className="text-blue-400 text-xs">Overall treatment</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Energy Usage</div>
            <div className="text-white font-bold text-lg">3.2</div>
            <div className="text-purple-400 text-xs">kWh/thousand gallons</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Chemical Cost</div>
            <div className="text-white font-bold text-lg">$0.18</div>
            <div className="text-orange-400 text-xs">per thousand gallons</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Compliance Rate</div>
            <div className="text-white font-bold text-lg">99.7%</div>
            <div className="text-cyan-400 text-xs">Regulatory standards</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Production Rate</div>
            <div className="text-white font-bold text-lg">{formatNumber(plantStatus.totalFlow)}</div>
            <div className="text-yellow-400 text-xs">MGD capacity</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterTreatmentOperations;