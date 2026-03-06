// ChemicalPlantOperations.js - Chemical Plant Operations Control Center & Process Safety Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, RadialBarChart, RadialBar } from 'recharts';

const ChemicalPlantOperations = () => {
  const [processUnits, setProcessUnits] = useState([
    {
      id: 'unit_001',
      name: 'Crude Distillation Unit 1',
      type: 'DISTILLATION',
      status: 'OPERATIONAL',
      capacity: {
        design: 120000, // barrels per day
        current: 108500,
        utilization: 90.4
      },
      process: {
        feedRate: 108500, // bpd
        temperature: 350.4, // celsius
        pressure: 1.8, // bar gauge
        refluxRatio: 2.3,
        cutPoint: 342, // celsius
        qualitySpec: 'WITHIN_LIMITS'
      },
      products: {
        lightNaphtha: { rate: 12340, spec: 'ON_SPEC', density: 0.695 },
        heavyNaphtha: { rate: 8920, spec: 'ON_SPEC', density: 0.742 },
        kerosene: { rate: 15670, spec: 'ON_SPEC', density: 0.805 },
        gasoil: { rate: 32450, spec: 'ON_SPEC', density: 0.865 },
        residue: { rate: 39120, spec: 'ON_SPEC', density: 0.945 }
      },
      safety: {
        safetyLevel: 'SIL_2',
        tripSystems: 'ARMED',
        emergencyShutdown: 'READY',
        fireDetection: 'OPERATIONAL',
        gasDetection: 'OPERATIONAL',
        psv_count: 12,
        psv_status: 'ALL_OPERATIONAL'
      },
      emissions: {
        so2: 45.7, // mg/m³
        nox: 78.3,
        co: 234.5,
        particulates: 12.4,
        voc: 156.8,
        compliance: 'COMPLIANT'
      },
      equipment: {
        furnace: {
          status: 'OPERATIONAL',
          efficiency: 87.2, // percentage
          coilOutletTemp: 365.7, // celsius
          fuelGasRate: 2.34, // MMBtu/hr
          oxygenLevel: 2.8 // percentage
        },
        column: {
          status: 'OPERATIONAL',
          pressure_drop: 0.45, // bar
          flooding: 67.3, // percentage of flood point
          trayEfficiency: 84.7
        },
        pumps: {
          feed: 'OPERATIONAL',
          reflux: 'OPERATIONAL',
          product: 'OPERATIONAL',
          backup: 'STANDBY'
        }
      },
      alarms: {
        active: 3,
        highPriority: 0,
        mediumPriority: 2,
        lowPriority: 1
      },
      alerts: ['Feed rate optimization opportunity detected', 'Tray efficiency declining - inspection due'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    },
    {
      id: 'unit_002',
      name: 'Catalytic Reformer Unit',
      type: 'REFORMER',
      status: 'OPERATIONAL',
      capacity: {
        design: 45000,
        current: 42300,
        utilization: 94.0
      },
      process: {
        feedRate: 42300,
        temperature: 515.8,
        pressure: 8.4,
        whsv: 1.8, // weight hourly space velocity
        h2_purity: 89.4, // percentage
        qualitySpec: 'WITHIN_LIMITS'
      },
      products: {
        reformate: { rate: 35670, spec: 'ON_SPEC', octane: 101.2 },
        hydrogen: { rate: 890, spec: 'ON_SPEC', purity: 89.4 },
        fuel_gas: { rate: 1240, spec: 'ON_SPEC', heating_value: 45.7 }
      },
      catalyst: {
        activity: 94.7, // percentage of fresh
        selectivity: 91.2,
        ageRatio: 0.67,
        cokeContent: 2.3, // weight percentage
        lastRegeneration: '2026-02-15',
        cyclesRemaining: 180
      },
      safety: {
        safetyLevel: 'SIL_3',
        tripSystems: 'ARMED',
        emergencyShutdown: 'READY',
        fireDetection: 'OPERATIONAL',
        gasDetection: 'OPERATIONAL',
        psv_count: 18,
        psv_status: 'ALL_OPERATIONAL'
      },
      emissions: {
        so2: 23.4,
        nox: 156.7,
        co: 89.2,
        particulates: 8.7,
        voc: 78.9,
        compliance: 'COMPLIANT'
      },
      equipment: {
        reactors: {
          r101: 'OPERATIONAL',
          r102: 'OPERATIONAL',
          r103: 'OPERATIONAL',
          r104: 'OPERATIONAL'
        },
        furnaces: {
          status: 'OPERATIONAL',
          efficiency: 91.3,
          fuelConsumption: 4.56,
          stackTemp: 287.4
        },
        compressor: {
          status: 'OPERATIONAL',
          efficiency: 78.9,
          discharge_pressure: 8.6,
          vibration: 'NORMAL'
        }
      },
      alarms: {
        active: 1,
        highPriority: 0,
        mediumPriority: 0,
        lowPriority: 1
      },
      alerts: ['Catalyst activity within normal range', 'Excellent octane production'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'unit_003',
      name: 'Fluid Catalytic Cracking Unit',
      type: 'FCC',
      status: 'STARTUP',
      capacity: {
        design: 65000,
        current: 12000,
        utilization: 18.5
      },
      process: {
        feedRate: 12000,
        temperature: 520.7,
        pressure: 1.9,
        catOilRatio: 8.5,
        conversion: 0.0, // startup phase
        qualitySpec: 'STARTUP_MODE'
      },
      products: {
        gasoline: { rate: 0, spec: 'STARTUP', octane: 0 },
        lightCycle_oil: { rate: 0, spec: 'STARTUP', density: 0 },
        clarified_oil: { rate: 0, spec: 'STARTUP', density: 0 },
        fuel_gas: { rate: 0, spec: 'STARTUP', heating_value: 0 }
      },
      catalyst: {
        inventory: 450, // tonnes
        activity: 100.0, // fresh catalyst
        circulation: 650, // tonnes/hour
        temperature: 520.7,
        carbon_content: 0.0,
        lastAddition: '2026-03-05'
      },
      safety: {
        safetyLevel: 'SIL_3',
        tripSystems: 'ARMED',
        emergencyShutdown: 'READY',
        fireDetection: 'OPERATIONAL',
        gasDetection: 'OPERATIONAL',
        psv_count: 24,
        psv_status: 'ALL_OPERATIONAL'
      },
      emissions: {
        so2: 5.2, // low during startup
        nox: 23.4,
        co: 456.7, // higher during startup
        particulates: 34.2,
        voc: 123.4,
        compliance: 'STARTUP_COMPLIANCE'
      },
      equipment: {
        reactor: {
          status: 'STARTUP',
          temperature: 520.7,
          pressure: 1.9,
          catalyst_level: 89.4
        },
        regenerator: {
          status: 'STARTUP',
          temperature: 720.3,
          oxygen_level: 21.0,
          co_content: 0.02
        },
        mainColumn: {
          status: 'STARTUP',
          pressure: 1.8,
          temperature: 420.5,
          reflux_ratio: 0.0
        }
      },
      alarms: {
        active: 8,
        highPriority: 1,
        mediumPriority: 4,
        lowPriority: 3
      },
      alerts: ['Unit in startup phase - expect fluctuations', 'Catalyst circulation established'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'unit_004',
      name: 'Alkylation Unit',
      type: 'ALKYLATION',
      status: 'SHUTDOWN',
      capacity: {
        design: 18000,
        current: 0,
        utilization: 0.0
      },
      process: {
        feedRate: 0,
        temperature: 0,
        pressure: 0,
        acidStrength: 0,
        isobutane_ratio: 0,
        qualitySpec: 'SHUTDOWN'
      },
      products: {
        alkylate: { rate: 0, spec: 'SHUTDOWN', octane: 0 }
      },
      acid: {
        inventory: 45.7, // tonnes HF
        strength: 99.2, // percentage
        consumption: 0.0,
        lastAddition: '2026-03-01'
      },
      safety: {
        safetyLevel: 'SIL_3',
        tripSystems: 'OFFLINE',
        emergencyShutdown: 'ACTIVATED',
        fireDetection: 'OPERATIONAL',
        gasDetection: 'OPERATIONAL',
        hf_detection: 'OPERATIONAL',
        psv_count: 16,
        psv_status: 'OFFLINE'
      },
      emissions: {
        so2: 0.0,
        nox: 0.0,
        co: 0.0,
        particulates: 0.0,
        voc: 2.3, // fugitive emissions only
        hf: 0.1, // trace amounts
        compliance: 'SHUTDOWN_COMPLIANT'
      },
      equipment: {
        reactor: {
          status: 'SHUTDOWN',
          temperature: 38.4, // ambient
          pressure: 0.0,
          acid_level: 0.0
        },
        settlers: {
          status: 'SHUTDOWN',
          inventory: 0.0
        },
        compressor: {
          status: 'SHUTDOWN',
          discharge_pressure: 0.0
        }
      },
      alarms: {
        active: 0,
        highPriority: 0,
        mediumPriority: 0,
        lowPriority: 0
      },
      alerts: ['Unit in planned shutdown for maintenance', 'HF inventory secured'],
      lastUpdate: Date.now() - 30 * 60 * 1000
    }
  ]);

  const [safetyMetrics, setSafetyMetrics] = useState({
    process_safety: {
      tier1_events: 0, // this year
      tier2_events: 3,
      near_misses: 12,
      psr_completion: 94.7, // percentage
      moc_pending: 8,
      pha_current: 87.3 // percentage
    },
    personal_safety: {
      ltir: 0.24, // lost time injury rate
      trir: 1.47, // total recordable injury rate
      days_without_lti: 287,
      safety_meetings: 156, // this year
      training_compliance: 96.8,
      near_miss_reports: 67
    },
    environmental: {
      air_permits: 'COMPLIANT',
      water_permits: 'COMPLIANT',
      waste_permits: 'COMPLIANT',
      spill_incidents: 1, // minor
      emission_exceedances: 0,
      environmental_inspections: 4
    },
    emergency_response: {
      drills_completed: 12, // this year
      response_time: 4.2, // minutes average
      equipment_readiness: 98.7,
      personnel_certified: 94.2,
      mutual_aid_agreements: 6
    }
  });

  const [controlSystems, setControlSystems] = useState({
    dcs: {
      name: 'DeltaV Distributed Control System',
      status: 'OPERATIONAL',
      availability: 99.87, // percentage
      controllers: {
        total: 24,
        operational: 24,
        redundancy: 'ACTIVE'
      },
      network: {
        primary: 'OPERATIONAL',
        backup: 'STANDBY',
        latency: '12 ms'
      },
      operator_stations: 8,
      engineering_stations: 2
    },
    sis: {
      name: 'Triconex Safety Instrumented System',
      status: 'OPERATIONAL',
      availability: 99.95,
      sil_rating: 'SIL_3',
      trip_functions: {
        total: 156,
        armed: 156,
        bypassed: 0
      },
      proof_testing: {
        last_test: '2026-01-15',
        next_test: '2026-07-15',
        pass_rate: 98.7
      }
    },
    f_g_system: {
      name: 'Fire & Gas Detection System',
      status: 'OPERATIONAL',
      detectors: {
        fire: { total: 234, operational: 232, faulty: 2 },
        gas: { total: 156, operational: 155, faulty: 1 },
        smoke: { total: 89, operational: 89, faulty: 0 }
      },
      response_time: '2.3 seconds',
      suppression_systems: 'ARMED'
    },
    cems: {
      name: 'Continuous Emissions Monitoring',
      status: 'OPERATIONAL',
      stacks_monitored: 12,
      parameters: ['SO2', 'NOx', 'CO', 'Opacity', 'Flow'],
      availability: 96.8,
      calibration: 'CURRENT'
    }
  });

  const [environmentalData, setEnvironmentalData] = useState({
    air_quality: {
      so2: { value: 45.7, limit: 150, units: 'mg/m³', compliance: 'COMPLIANT' },
      nox: { value: 234.5, limit: 400, units: 'mg/m³', compliance: 'COMPLIANT' },
      co: { value: 89.2, limit: 200, units: 'mg/m³', compliance: 'COMPLIANT' },
      particulates: { value: 23.4, limit: 50, units: 'mg/m³', compliance: 'COMPLIANT' },
      voc: { value: 156.8, limit: 300, units: 'mg/m³', compliance: 'COMPLIANT' }
    },
    water_quality: {
      cod: { value: 234, limit: 500, units: 'mg/L', compliance: 'COMPLIANT' },
      bod: { value: 89, limit: 200, units: 'mg/L', compliance: 'COMPLIANT' },
      tss: { value: 45, limit: 100, units: 'mg/L', compliance: 'COMPLIANT' },
      oil_grease: { value: 8.7, limit: 20, units: 'mg/L', compliance: 'COMPLIANT' },
      ph: { value: 7.2, limit: '6.0-9.0', units: '', compliance: 'COMPLIANT' }
    },
    waste_management: {
      hazardous_waste: { generated: 45.7, disposed: 42.3, units: 'tonnes/month' },
      non_hazardous: { generated: 234.5, recycled: 189.7, units: 'tonnes/month' },
      recycling_rate: 81.0, // percentage
      waste_reduction: 12.4 // percentage vs baseline
    },
    noise_levels: {
      property_line: { value: 67.3, limit: 70, units: 'dBA', compliance: 'COMPLIANT' },
      community: { complaints: 0, monitoring_points: 8 }
    }
  });

  const [productionTrends, setProductionTrends] = useState([]);

  const generateProductionTrends = () => {
    const data = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      data.push({
        date: date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}),
        gasoline: Math.floor(Math.random() * 10000) + 35000, // barrels/day
        diesel: Math.floor(Math.random() * 8000) + 28000,
        jetFuel: Math.floor(Math.random() * 5000) + 12000,
        throughput: Math.floor(Math.random() * 15000) + 100000, // crude throughput
        efficiency: Math.floor(Math.random() * 5) + 88, // 88-93%
        emissions: Math.floor(Math.random() * 50) + 200 // tonnes CO2 eq/day
      });
    }
    return data;
  };

  useEffect(() => {
    setProductionTrends(generateProductionTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update process units
      setProcessUnits(prev => prev.map(unit => {
        if (unit.status === 'OPERATIONAL') {
          return {
            ...unit,
            process: {
              ...unit.process,
              temperature: Math.max(300, Math.min(600, unit.process.temperature + (Math.random() - 0.5) * 5)),
              pressure: Math.max(1, Math.min(15, unit.process.pressure + (Math.random() - 0.5) * 0.2)),
              feedRate: Math.max(unit.capacity.design * 0.7, Math.min(unit.capacity.design * 1.05, 
                unit.process.feedRate + (Math.random() - 0.5) * 1000))
            },
            capacity: {
              ...unit.capacity,
              current: Math.max(unit.capacity.design * 0.7, Math.min(unit.capacity.design * 1.05, 
                unit.capacity.current + (Math.random() - 0.5) * 1000))
            },
            emissions: {
              ...unit.emissions,
              so2: Math.max(10, Math.min(100, unit.emissions.so2 + (Math.random() - 0.5) * 5)),
              nox: Math.max(50, Math.min(300, unit.emissions.nox + (Math.random() - 0.5) * 10)),
              co: Math.max(30, Math.min(500, unit.emissions.co + (Math.random() - 0.5) * 20))
            },
            lastUpdate: Date.now()
          };
        } else if (unit.status === 'STARTUP') {
          return {
            ...unit,
            capacity: {
              ...unit.capacity,
              current: Math.min(unit.capacity.design * 0.5, unit.capacity.current + Math.random() * 2000),
              utilization: (unit.capacity.current / unit.capacity.design) * 100
            },
            lastUpdate: Date.now()
          };
        }
        return { ...unit, lastUpdate: Date.now() };
      }));

      // Update environmental data
      setEnvironmentalData(prev => ({
        ...prev,
        air_quality: {
          ...prev.air_quality,
          so2: {
            ...prev.air_quality.so2,
            value: Math.max(20, Math.min(120, prev.air_quality.so2.value + (Math.random() - 0.5) * 5))
          },
          nox: {
            ...prev.air_quality.nox,
            value: Math.max(100, Math.min(350, prev.air_quality.nox.value + (Math.random() - 0.5) * 10))
          }
        }
      }));

    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'COMPLIANT':
      case 'ARMED':
      case 'READY':
      case 'ON_SPEC':
      case 'WITHIN_LIMITS': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STARTUP':
      case 'STARTUP_MODE':
      case 'STANDBY':
      case 'NORMAL': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'SHUTDOWN':
      case 'OFFLINE':
      case 'FAULTY': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'EMERGENCY':
      case 'CRITICAL':
      case 'NON_COMPLIANT': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'CURRENT':
      case 'ACTIVE': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getComplianceColor = (value, limit, isBelow = true) => {
    const ratio = isBelow ? (value / limit) : (limit / value);
    if (ratio <= 0.7) return 'text-green-400';
    if (ratio <= 0.85) return 'text-blue-400';
    if (ratio <= 0.95) return 'text-yellow-400';
    if (ratio <= 1.0) return 'text-orange-400';
    return 'text-red-400';
  };

  const getSafetyColor = (value, type) => {
    if (type === 'days') {
      if (value >= 365) return 'text-green-400';
      if (value >= 180) return 'text-blue-400';
      if (value >= 90) return 'text-yellow-400';
      return 'text-orange-400';
    }
    if (type === 'rate') {
      if (value <= 0.5) return 'text-green-400';
      if (value <= 1.0) return 'text-blue-400';
      if (value <= 2.0) return 'text-yellow-400';
      return 'text-orange-400';
    }
    if (type === 'percentage') {
      if (value >= 95) return 'text-green-400';
      if (value >= 90) return 'text-blue-400';
      if (value >= 80) return 'text-yellow-400';
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
          🏭 CHEMICAL PLANT OPERATIONS CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {safetyMetrics.personal_safety.days_without_lti} Days LTI-Free
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {processUnits.filter(unit => unit.status === 'OPERATIONAL').length}/{processUnits.length} Units Active
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Process Safety Management & Environmental Compliance
          </div>
        </div>
      </div>

      {/* Chemical Plant Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">CRUDE THROUGHPUT</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(processUnits.reduce((sum, unit) => sum + (unit.process?.feedRate || 0), 0) / 1000, 1)}
              </div>
              <div className="text-xs text-orange-300">
                KBPD Total Feed Rate
              </div>
            </div>
            <div className="text-3xl opacity-60">🛢️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SAFETY PERFORMANCE</div>
              <div className="text-2xl font-bold text-green-100">
                {safetyMetrics.process_safety.tier1_events}
              </div>
              <div className="text-xs text-green-300">
                Tier 1 PSE This Year
              </div>
            </div>
            <div className="text-3xl opacity-60">🛡️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ENVIRONMENTAL</div>
              <div className="text-2xl font-bold text-blue-100">
                {Object.values(environmentalData.air_quality).filter(param => param.compliance === 'COMPLIANT').length}
              </div>
              <div className="text-xs text-blue-300">
                /5 Air Parameters Compliant
              </div>
            </div>
            <div className="text-3xl opacity-60">🌱</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">SYSTEM AVAILABILITY</div>
              <div className="text-2xl font-bold text-purple-100">
                {controlSystems.dcs.availability.toFixed(1)}%
              </div>
              <div className="text-xs text-purple-300">
                DCS Uptime
              </div>
            </div>
            <div className="text-3xl opacity-60">💻</div>
          </div>
        </div>
      </div>

      {/* Process Units and Safety Systems */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Process Units */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 PROCESS UNITS & PRODUCTION MONITORING
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {processUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {unit.type}
                    </span>
                    {unit.alerts.length > 0 && (
                      <span className="text-xs px-2 py-1 rounded bg-orange-500 text-white">
                        {unit.alerts.length} alerts
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(unit.lastUpdate)}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-white mb-1">{unit.name}</div>

                {/* Capacity and Utilization */}
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Capacity: </span>
                  <span className="text-green-400">{formatNumber(unit.capacity.current)}</span>
                  <span className="text-gray-400"> / </span>
                  <span className="text-blue-400">{formatNumber(unit.capacity.design)} bpd</span>
                  <span className="text-gray-400"> | Utilization: </span>
                  <span className={getSafetyColor(unit.capacity.utilization, 'percentage')}>
                    {unit.capacity.utilization.toFixed(1)}%
                  </span>
                </div>

                {/* Process Conditions */}
                {unit.process && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Process: </span>
                    <span className="text-orange-400">{unit.process.temperature?.toFixed(1)}°C</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-cyan-400">{unit.process.pressure?.toFixed(1)} bar</span>
                    <span className="text-gray-400"> | Feed: </span>
                    <span className="text-purple-400">{formatNumber(unit.process.feedRate)} bpd</span>
                    <span className="text-gray-400"> | Quality: </span>
                    <span className={getStatusColor(unit.process.qualitySpec)}>{unit.process.qualitySpec}</span>
                  </div>
                )}

                {/* Product Yields */}
                {unit.products && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Products:</div>
                    <div className="grid grid-cols-2 gap-1">
                      {Object.entries(unit.products).slice(0, 4).map(([product, data]) => (
                        <div key={product}>
                          <span className="text-blue-400">{product.replace(/_/g, ' ')}:</span>
                          <span className="text-white"> {formatNumber(data.rate)}</span>
                          <span className={`ml-1 ${getStatusColor(data.spec)}`}>
                            {data.spec === 'ON_SPEC' ? '✓' : data.spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Catalyst Status */}
                {unit.catalyst && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Catalyst: </span>
                    <span className="text-green-400">Activity {unit.catalyst.activity?.toFixed(1)}%</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-blue-400">Selectivity {unit.catalyst.selectivity?.toFixed(1)}%</span>
                    {unit.catalyst.cyclesRemaining && (
                      <>
                        <span className="text-gray-400"> | Cycles: </span>
                        <span className="text-purple-400">{unit.catalyst.cyclesRemaining}</span>
                      </>
                    )}
                  </div>
                )}

                {/* Safety Systems */}
                {unit.safety && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Safety: </span>
                    <span className="text-green-400">{unit.safety.safetyLevel}</span>
                    <span className="text-gray-400"> | ESD: </span>
                    <span className={getStatusColor(unit.safety.emergencyShutdown)}>{unit.safety.emergencyShutdown}</span>
                    <span className="text-gray-400"> | PSVs: </span>
                    <span className={getStatusColor(unit.safety.psv_status)}>{unit.safety.psv_count}</span>
                    <span className="text-gray-400"> | F&G: </span>
                    <span className={getStatusColor(unit.safety.fireDetection)}>{unit.safety.fireDetection}</span>
                  </div>
                )}

                {/* Emissions */}
                {unit.emissions && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Emissions: </span>
                    <span className="text-blue-400">SO₂ {unit.emissions.so2?.toFixed(1)}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-green-400">NOₓ {unit.emissions.nox?.toFixed(1)}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-orange-400">CO {unit.emissions.co?.toFixed(1)} mg/m³</span>
                    <span className="text-gray-400"> | Status: </span>
                    <span className={getStatusColor(unit.emissions.compliance)}>{unit.emissions.compliance}</span>
                  </div>
                )}

                {/* Equipment Status */}
                {unit.equipment && (
                  <div className="text-xs mb-2">
                    <div className="text-gray-400">Equipment Status:</div>
                    <div className="grid grid-cols-2 gap-1">
                      {Object.entries(unit.equipment).slice(0, 4).map(([equip, status]) => (
                        <div key={equip}>
                          <span className="text-purple-400">{equip.replace(/_/g, ' ')}:</span>
                          <span className={`ml-1 ${getStatusColor(typeof status === 'object' ? status.status : status)}`}>
                            {typeof status === 'object' ? status.status : status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Alarms */}
                {unit.alarms && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Alarms: </span>
                    <span className="text-red-400">High: {unit.alarms.highPriority}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-orange-400">Med: {unit.alarms.mediumPriority}</span>
                    <span className="text-gray-400"> | </span>
                    <span className="text-yellow-400">Low: {unit.alarms.lowPriority}</span>
                    <span className="text-gray-400"> | Total: </span>
                    <span className="text-blue-400">{unit.alarms.active}</span>
                  </div>
                )}

                {unit.alerts.length > 0 && (
                  <div className="text-xs">
                    <div className="text-gray-400">Alerts:</div>
                    {unit.alerts.slice(0, 2).map((alert, index) => (
                      <div key={index} className="text-orange-400">🏭 {alert}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Safety & Environmental Monitoring */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🛡️ SAFETY & ENVIRONMENTAL MONITORING
          </h3>
          
          {/* Process Safety Metrics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Process Safety Performance</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Tier 1 PSE</div>
                <div className={getSafetyColor(safetyMetrics.process_safety.tier1_events, 'days')}>
                  {safetyMetrics.process_safety.tier1_events}
                </div>
              </div>
              <div>
                <div className="text-gray-400">Tier 2 PSE</div>
                <div className="text-orange-400">{safetyMetrics.process_safety.tier2_events}</div>
              </div>
              <div>
                <div className="text-gray-400">Near Misses</div>
                <div className="text-blue-400">{safetyMetrics.process_safety.near_misses}</div>
              </div>
              <div>
                <div className="text-gray-400">PSR Completion</div>
                <div className={getSafetyColor(safetyMetrics.process_safety.psr_completion, 'percentage')}>
                  {safetyMetrics.process_safety.psr_completion.toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-gray-400">MOCs Pending</div>
                <div className="text-yellow-400">{safetyMetrics.process_safety.moc_pending}</div>
              </div>
              <div>
                <div className="text-gray-400">PHA Current</div>
                <div className={getSafetyColor(safetyMetrics.process_safety.pha_current, 'percentage')}>
                  {safetyMetrics.process_safety.pha_current.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Personal Safety */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Personal Safety Performance</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Days Without LTI:</span>
                <span className={getSafetyColor(safetyMetrics.personal_safety.days_without_lti, 'days')}>
                  {safetyMetrics.personal_safety.days_without_lti}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">LTIR:</span>
                <span className={getSafetyColor(safetyMetrics.personal_safety.ltir, 'rate')}>
                  {safetyMetrics.personal_safety.ltir}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">TRIR:</span>
                <span className={getSafetyColor(safetyMetrics.personal_safety.trir, 'rate')}>
                  {safetyMetrics.personal_safety.trir}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Training Compliance:</span>
                <span className={getSafetyColor(safetyMetrics.personal_safety.training_compliance, 'percentage')}>
                  {safetyMetrics.personal_safety.training_compliance.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          {/* Environmental Compliance */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Environmental Compliance</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(environmentalData.air_quality).map(([param, data]) => (
                <div key={param} className="flex justify-between">
                  <span className="text-gray-400">{param.toUpperCase()}:</span>
                  <div>
                    <span className={getComplianceColor(data.value, data.limit)}>
                      {data.value.toFixed(1)}
                    </span>
                    <span className="text-gray-500">/{data.limit} {data.units}</span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t border-gray-600">
                <span className="text-gray-400">Emission Exceedances:</span>
                <span className="text-green-400">{safetyMetrics.environmental.emission_exceedances}</span>
              </div>
            </div>
          </div>

          {/* Control Systems Status */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Control Systems Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">DCS Availability:</span>
                <span className={getSafetyColor(controlSystems.dcs.availability, 'percentage')}>
                  {controlSystems.dcs.availability.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SIS Availability:</span>
                <span className={getSafetyColor(controlSystems.sis.availability, 'percentage')}>
                  {controlSystems.sis.availability.toFixed(2)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SIL Rating:</span>
                <span className="text-green-400">{controlSystems.sis.sil_rating}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Trip Functions Armed:</span>
                <span className="text-blue-400">{controlSystems.sis.trip_functions.armed}/{controlSystems.sis.trip_functions.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">F&G System:</span>
                <span className={getStatusColor(controlSystems.f_g_system.status)}>{controlSystems.f_g_system.status}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Production Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 CHEMICAL PLANT PRODUCTION TRENDS (30 DAYS)
        </h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={productionTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12}/>
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
              dataKey="throughput"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.1}
              strokeWidth={3}
              name="Crude Throughput (bpd)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="gasoline" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Gasoline Production"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="diesel" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Diesel Production"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="jetFuel" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Jet Fuel Production"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="efficiency" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Plant Efficiency (%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chemical Plant KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 CHEMICAL PLANT KPIs & PROCESS SAFETY METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Plant Utilization</div>
            <div className="text-white font-bold text-lg">
              {(processUnits.reduce((sum, unit) => sum + unit.capacity.utilization, 0) / processUnits.length).toFixed(1)}%
            </div>
            <div className="text-green-400 text-xs">average capacity</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Days LTI-Free</div>
            <div className="text-white font-bold text-lg">
              {safetyMetrics.personal_safety.days_without_lti}
            </div>
            <div className="text-blue-400 text-xs">safety performance</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Environmental Compliance</div>
            <div className="text-white font-bold text-lg">
              {Object.values(environmentalData.air_quality).filter(p => p.compliance === 'COMPLIANT').length}/5
            </div>
            <div className="text-purple-400 text-xs">air parameters</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">DCS Availability</div>
            <div className="text-white font-bold text-lg">
              {controlSystems.dcs.availability.toFixed(1)}%
            </div>
            <div className="text-orange-400 text-xs">system uptime</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">PSR Completion</div>
            <div className="text-white font-bold text-lg">
              {safetyMetrics.process_safety.psr_completion.toFixed(1)}%
            </div>
            <div className="text-cyan-400 text-xs">process safety reviews</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Tier 1 PSE</div>
            <div className="text-white font-bold text-lg">
              {safetyMetrics.process_safety.tier1_events}
            </div>
            <div className="text-yellow-400 text-xs">this year</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChemicalPlantOperations;