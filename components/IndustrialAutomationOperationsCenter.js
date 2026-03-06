// IndustrialAutomationOperationsCenter.js - Industrial Automation Operations Center & Smart Factory Control
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const IndustrialAutomationOperationsCenter = () => {
  const [automationStatus, setAutomationStatus] = useState({
    operationalStatus: 'INDUSTRY_4_0_ACTIVE',
    totalFactories: 12,
    factoriesOnline: 11,
    totalProductionLines: 156,
    productionLinesActive: 142,
    totalPlcs: 2847,
    plcsOnline: 2789,
    overallEquipmentEffectiveness: 87.3, // OEE percentage
    dailyProductionOutput: 15847, // units
    qualityRate: 98.7, // percentage
    automationLevel: 94.2, // percentage
    lastUpdate: Date.now()
  });

  const [scadaSystems, setScadaSystems] = useState({
    hmi_interfaces: {
      total_screens: 245,
      active_screens: 238,
      operator_stations: 67,
      stations_logged_in: 54,
      screen_response_time: 89, // milliseconds
      interface_availability: 97.1, // percentage
      cybersecurity_status: 'SECURED',
      remote_access_active: true
    },
    data_acquisition: {
      total_sensors: 15847,
      sensors_online: 15234,
      data_points_per_second: 47892,
      historian_storage: 98.7, // percentage utilized
      real_time_processing: 'ACTIVE',
      data_quality_score: 96.8, // percentage
      compression_efficiency: 87.4, // percentage
      backup_systems: 'REDUNDANT'
    },
    control_systems: {
      supervisory_controllers: 47,
      controllers_operational: 45,
      setpoint_optimization: 'AI_ENHANCED',
      cascade_control_loops: 234,
      loops_in_auto: 218,
      control_performance: 93.4, // percentage
      alarm_management: 'RATIONALIZED',
      safety_systems_status: 'FUNCTIONAL'
    },
    network_infrastructure: {
      ethernet_networks: 12,
      networks_operational: 12,
      wireless_networks: 8,
      wireless_active: 7,
      network_latency: 3.2, // milliseconds
      bandwidth_utilization: 67.8, // percentage
      security_gateways: 'ACTIVE',
      redundancy_status: 'DUAL_PATH'
    }
  });

  const [plcSystems, setPlcSystems] = useState([
    {
      plc_id: 'PLC_001_MAIN_LINE',
      model: 'Allen-Bradley ControlLogix',
      location: 'Production Line A',
      status: 'RUNNING',
      cpu_utilization: 67.3, // percentage
      memory_usage: 45.2, // percentage
      scan_time: 12.7, // milliseconds
      io_modules: 24,
      io_fault_count: 0,
      program_version: 'v2.4.1',
      last_maintenance: '2026-02-28',
      communication_status: 'ONLINE',
      safety_status: 'OK',
      recipe_active: 'PRODUCT_A_V3'
    },
    {
      plc_id: 'PLC_012_PACKAGING',
      model: 'Siemens S7-1500',
      location: 'Packaging Station 3',
      status: 'RUNNING',
      cpu_utilization: 45.8,
      memory_usage: 38.7,
      scan_time: 8.3,
      io_modules: 18,
      io_fault_count: 1,
      program_version: 'v1.8.2',
      last_maintenance: '2026-03-01',
      communication_status: 'ONLINE',
      safety_status: 'OK',
      recipe_active: 'PKG_STANDARD'
    },
    {
      plc_id: 'PLC_027_QUALITY',
      model: 'Rockwell CompactLogix',
      location: 'Quality Control Lab',
      status: 'RUNNING',
      cpu_utilization: 29.4,
      memory_usage: 22.1,
      scan_time: 5.9,
      io_modules: 12,
      io_fault_count: 0,
      program_version: 'v3.1.0',
      last_maintenance: '2026-02-25',
      communication_status: 'ONLINE',
      safety_status: 'OK',
      recipe_active: 'QC_INSPECTION'
    },
    {
      plc_id: 'PLC_045_MATERIAL',
      model: 'Schneider Modicon M580',
      location: 'Material Handling',
      status: 'MAINTENANCE',
      cpu_utilization: 0.0,
      memory_usage: 0.0,
      scan_time: null,
      io_modules: 20,
      io_fault_count: 3,
      program_version: 'v2.2.4',
      last_maintenance: '2026-03-05',
      communication_status: 'OFFLINE',
      safety_status: 'LOCKOUT',
      maintenance_type: 'SCHEDULED_UPGRADE'
    },
    {
      plc_id: 'PLC_063_UTILITIES',
      model: 'Mitsubishi MELSEC iQ-R',
      location: 'Utilities Building',
      status: 'RUNNING',
      cpu_utilization: 34.7,
      memory_usage: 41.2,
      scan_time: 15.2,
      io_modules: 16,
      io_fault_count: 0,
      program_version: 'v1.5.3',
      last_maintenance: '2026-02-20',
      communication_status: 'ONLINE',
      safety_status: 'OK',
      recipe_active: 'HVAC_CONTROL'
    }
  ]);

  const [iiotDevices, setIiotDevices] = useState({
    sensor_networks: {
      temperature_sensors: 2847,
      temp_sensors_online: 2801,
      pressure_sensors: 1567,
      pressure_sensors_online: 1534,
      vibration_sensors: 892,
      vibration_sensors_online: 879,
      flow_sensors: 654,
      flow_sensors_online: 639,
      level_sensors: 423,
      level_sensors_online: 418,
      humidity_sensors: 234,
      humidity_sensors_online: 231
    },
    edge_computing: {
      edge_gateways: 47,
      gateways_online: 45,
      local_processing_power: 89.4, // percentage utilized
      ai_inference_jobs: 1247,
      ml_model_accuracy: 94.7, // percentage
      edge_storage_used: 67.8, // percentage
      cloud_sync_status: 'ACTIVE',
      firmware_updates: 'CURRENT'
    },
    digital_twins: {
      twin_models_active: 156,
      twin_sync_accuracy: 97.3, // percentage
      simulation_runs_daily: 284,
      predictive_models: 67,
      model_prediction_accuracy: 91.8, // percentage
      optimization_suggestions: 23,
      virtual_commissioning: 'ENABLED',
      real_time_mirroring: 'SYNCHRONIZED'
    },
    connectivity: {
      wifi_6_networks: 8,
      wifi_devices_connected: 1247,
      cellular_5g_modules: 23,
      cellular_signal_strength: 87.3, // percentage
      bluetooth_beacons: 156,
      beacons_active: 152,
      ethernet_devices: 2891,
      ethernet_connection_rate: 99.2 // percentage
    }
  });

  const [smartFactoryMetrics, setSmartFactoryMetrics] = useState({
    production_efficiency: {
      overall_equipment_effectiveness: 87.3, // percentage
      availability: 92.8, // percentage
      performance: 89.7, // percentage
      quality: 98.7, // percentage
      throughput_rate: 847, // units per hour
      cycle_time: 4.2, // minutes
      changeover_time: 23.7, // minutes
      unplanned_downtime: 2.3 // percentage
    },
    quality_control: {
      first_pass_yield: 96.8, // percentage
      defect_rate: 0.32, // percentage
      rework_rate: 2.1, // percentage
      customer_complaints: 12, // monthly
      quality_cost_percentage: 1.7, // percentage of sales
      inspection_coverage: 99.4, // percentage
      statistical_process_control: 'ACTIVE',
      ai_vision_systems: 'OPERATIONAL'
    },
    maintenance_operations: {
      predictive_maintenance_active: true,
      maintenance_requests: 47,
      preventive_maintenance_compliance: 97.2, // percentage
      mean_time_between_failures: 2847, // hours
      mean_time_to_repair: 4.7, // hours
      maintenance_cost_per_unit: 12.34, // USD
      spare_parts_inventory: 89.7, // percentage stocked
      condition_monitoring: 'CONTINUOUS'
    },
    energy_management: {
      total_energy_consumption: 23847, // kWh daily
      energy_efficiency_score: 91.7, // percentage
      renewable_energy_usage: 34.8, // percentage
      peak_demand_management: 'OPTIMIZED',
      power_factor: 0.94,
      carbon_footprint_reduction: 23.4, // percentage vs baseline
      energy_cost_per_unit: 0.87, // USD per unit
      demand_response_active: true
    }
  });

  const [productionLines, setProductionLines] = useState([
    {
      line_id: 'LINE_A_ASSEMBLY',
      product: 'Widget Assembly',
      status: 'RUNNING',
      current_speed: 847, // units per hour
      target_speed: 900,
      efficiency: 94.1, // percentage
      quality_rate: 98.9, // percentage
      operator_count: 6,
      shift: 'DAY_SHIFT',
      recipe: 'WIDGET_A_V2.1',
      last_changeover: '2026-03-05T06:00:00Z',
      next_maintenance: '2026-03-08T02:00:00Z',
      active_alarms: 0,
      energy_consumption: 234.7 // kWh per hour
    },
    {
      line_id: 'LINE_B_PACKAGING',
      product: 'Retail Packaging',
      status: 'RUNNING',
      current_speed: 1247,
      target_speed: 1350,
      efficiency: 92.4,
      quality_rate: 97.6,
      operator_count: 4,
      shift: 'DAY_SHIFT',
      recipe: 'PKG_RETAIL_V1.8',
      last_changeover: '2026-03-04T22:00:00Z',
      next_maintenance: '2026-03-06T14:00:00Z',
      active_alarms: 2,
      energy_consumption: 189.3
    },
    {
      line_id: 'LINE_C_INSPECTION',
      product: 'Quality Inspection',
      status: 'RUNNING',
      current_speed: 567,
      target_speed: 600,
      efficiency: 94.5,
      quality_rate: 99.8,
      operator_count: 2,
      shift: 'DAY_SHIFT',
      recipe: 'INSPECT_FULL_V3.0',
      last_changeover: '2026-03-05T00:00:00Z',
      next_maintenance: '2026-03-10T10:00:00Z',
      active_alarms: 0,
      energy_consumption: 156.8
    },
    {
      line_id: 'LINE_D_MATERIAL',
      product: 'Material Handling',
      status: 'STANDBY',
      current_speed: 0,
      target_speed: 450,
      efficiency: 0.0,
      quality_rate: null,
      operator_count: 1,
      shift: 'DAY_SHIFT',
      recipe: 'MAT_HANDLING_V2.3',
      last_changeover: '2026-03-04T18:00:00Z',
      next_maintenance: '2026-03-05T20:00:00Z',
      active_alarms: 1,
      energy_consumption: 23.4
    },
    {
      line_id: 'LINE_E_FINISHING',
      product: 'Surface Finishing',
      status: 'MAINTENANCE',
      current_speed: 0,
      target_speed: 320,
      efficiency: 0.0,
      quality_rate: null,
      operator_count: 0,
      shift: 'DAY_SHIFT',
      recipe: null,
      last_changeover: null,
      next_maintenance: null,
      active_alarms: 0,
      energy_consumption: 12.1,
      maintenance_type: 'SCHEDULED_CLEANING'
    }
  ]);

  const [automationHistory, setAutomationHistory] = useState([]);

  const generateAutomationHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of operation
      const hour = i;
      let productionMultiplier = 0.3; // Base production
      
      // Industrial production patterns
      if (hour >= 6 && hour <= 14) productionMultiplier = 1.0; // Day shift peak
      if (hour >= 14 && hour <= 22) productionMultiplier = 0.9; // Evening shift
      if (hour >= 22 || hour <= 6) productionMultiplier = 0.7; // Night shift
      if ([7, 8, 15, 16].includes(hour)) productionMultiplier = 0.6; // Shift changes
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        production_output: Math.floor((400 + productionMultiplier * 800) + Math.random() * 200),
        oee_percentage: 75 + productionMultiplier * 20 + Math.random() * 8,
        quality_rate: 96 + Math.random() * 3,
        energy_efficiency: 85 + productionMultiplier * 10 + Math.random() * 8,
        equipment_availability: 88 + productionMultiplier * 10 + Math.random() * 5,
        automation_level: 90 + Math.random() * 8,
        alarm_count: Math.floor((1 - productionMultiplier) * 8 + Math.random() * 6),
        predictive_alerts: Math.floor(Math.random() * 4),
        maintenance_events: Math.floor(Math.random() * 2)
      });
    }
    return data;
  };

  useEffect(() => {
    setAutomationHistory(generateAutomationHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update automation status
      setAutomationStatus(prev => ({
        ...prev,
        factoriesOnline: Math.max(9, Math.min(12, prev.factoriesOnline + Math.floor((Math.random() - 0.5) * 2))),
        productionLinesActive: Math.max(125, Math.min(156, prev.productionLinesActive + Math.floor((Math.random() - 0.5) * 8))),
        plcsOnline: Math.max(2650, Math.min(2847, prev.plcsOnline + Math.floor((Math.random() - 0.5) * 20))),
        overallEquipmentEffectiveness: Math.max(80.0, Math.min(95.0, prev.overallEquipmentEffectiveness + (Math.random() - 0.5) * 2.0)),
        dailyProductionOutput: prev.dailyProductionOutput + Math.floor(Math.random() * 100),
        qualityRate: Math.max(95.0, Math.min(99.5, prev.qualityRate + (Math.random() - 0.5) * 0.8)),
        automationLevel: Math.max(90.0, Math.min(98.0, prev.automationLevel + (Math.random() - 0.5) * 1.0)),
        lastUpdate: Date.now()
      }));

      // Update SCADA systems
      setScadaSystems(prev => ({
        ...prev,
        hmi_interfaces: {
          ...prev.hmi_interfaces,
          active_screens: Math.max(220, Math.min(245, prev.hmi_interfaces.active_screens + Math.floor((Math.random() - 0.5) * 6))),
          stations_logged_in: Math.max(40, Math.min(67, prev.hmi_interfaces.stations_logged_in + Math.floor((Math.random() - 0.5) * 4)))
        },
        data_acquisition: {
          ...prev.data_acquisition,
          sensors_online: Math.max(14800, Math.min(15847, prev.data_acquisition.sensors_online + Math.floor((Math.random() - 0.5) * 100))),
          data_points_per_second: Math.max(40000, Math.min(55000, prev.data_acquisition.data_points_per_second + Math.floor((Math.random() - 0.5) * 2000)))
        }
      }));

      // Update production lines randomly
      setProductionLines(prev => prev.map(line => {
        if (line.status === 'RUNNING') {
          return {
            ...line,
            current_speed: Math.max(0, Math.min(line.target_speed * 1.1, line.current_speed + Math.floor((Math.random() - 0.5) * 50))),
            efficiency: Math.max(80.0, Math.min(98.0, line.efficiency + (Math.random() - 0.5) * 3.0)),
            active_alarms: Math.max(0, line.active_alarms + Math.floor((Math.random() - 0.8) * 2))
          };
        }
        return line;
      }));

    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'INDUSTRY_4_0_ACTIVE':
      case 'RUNNING':
      case 'ONLINE':
      case 'ACTIVE':
      case 'OPERATIONAL':
      case 'ENABLED':
      case 'SYNCHRONIZED':
      case 'CURRENT':
      case 'FUNCTIONAL':
      case 'SECURED':
      case 'REDUNDANT':
      case 'OPTIMIZED':
      case 'CONTINUOUS':
      case 'AI_ENHANCED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY':
      case 'DUAL_PATH':
      case 'DAY_SHIFT':
      case 'SCHEDULED_CLEANING':
      case 'SCHEDULED_UPGRADE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE':
      case 'LOCKOUT':
      case 'RATIONALIZED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OFFLINE':
      case 'ERROR':
      case 'FAULT': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 1) => {
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatDuration = (hours) => {
    if (hours < 1) return `${Math.round(hours * 60)}min`;
    if (hours < 24) return `${hours.toFixed(1)}h`;
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    return `${days}d ${remainingHours.toFixed(1)}h`;
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'N/A';
    return new Date(dateTimeString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏭 INDUSTRIAL AUTOMATION OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(automationStatus.operationalStatus)}`}>
            {automationStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {automationStatus.factoriesOnline}/{automationStatus.totalFactories} Factories
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            OEE {formatNumber(automationStatus.overallEquipmentEffectiveness)}%
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatLargeNumber(automationStatus.dailyProductionOutput)} Units
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Smart Factory & Industry 4.0 Control
          </div>
        </div>
      </div>

      {/* Automation Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">OVERALL EQUIPMENT EFFICIENCY</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(automationStatus.overallEquipmentEffectiveness)}%
              </div>
              <div className="text-xs text-blue-300">
                Smart manufacturing KPI
              </div>
            </div>
            <div className="text-3xl opacity-60">⚙️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">PRODUCTION OUTPUT</div>
              <div className="text-2xl font-bold text-green-100">
                {formatLargeNumber(automationStatus.dailyProductionOutput)}
              </div>
              <div className="text-xs text-green-300">
                Units produced today
              </div>
            </div>
            <div className="text-3xl opacity-60">🏭</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">QUALITY RATE</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatNumber(automationStatus.qualityRate)}%
              </div>
              <div className="text-xs text-purple-300">
                First pass yield
              </div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">AUTOMATION LEVEL</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(automationStatus.automationLevel)}%
              </div>
              <div className="text-xs text-orange-300">
                Industry 4.0 adoption
              </div>
            </div>
            <div className="text-3xl opacity-60">🤖</div>
          </div>
        </div>
      </div>

      {/* SCADA Systems Integration */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🖥️ SCADA SYSTEMS & HMI INTEGRATION
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">HMI Interfaces</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Screens:</span>
                <span className="text-blue-400">{scadaSystems.hmi_interfaces.total_screens}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Screens:</span>
                <span className="text-green-400">{scadaSystems.hmi_interfaces.active_screens}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Operator Stations:</span>
                <span className="text-purple-400">{scadaSystems.hmi_interfaces.operator_stations}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Logged In:</span>
                <span className="text-orange-400">{scadaSystems.hmi_interfaces.stations_logged_in}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Response Time:</span>
                <span className="text-cyan-400">{scadaSystems.hmi_interfaces.screen_response_time}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Availability:</span>
                <span className="text-green-400">{formatNumber(scadaSystems.hmi_interfaces.interface_availability)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Security Status:</span>
                <span className={`${getStatusColor(scadaSystems.hmi_interfaces.cybersecurity_status)?.split(' ')[0] || 'text-green-400'}`}>
                  {scadaSystems.hmi_interfaces.cybersecurity_status}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Remote Access:</span>
                <span className={`${scadaSystems.hmi_interfaces.remote_access_active ? 'text-green-400' : 'text-red-400'}`}>
                  {scadaSystems.hmi_interfaces.remote_access_active ? 'ACTIVE' : 'DISABLED'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Data Acquisition</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Sensors:</span>
                <span className="text-blue-400">{formatLargeNumber(scadaSystems.data_acquisition.total_sensors)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sensors Online:</span>
                <span className="text-green-400">{formatLargeNumber(scadaSystems.data_acquisition.sensors_online)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Points/Sec:</span>
                <span className="text-purple-400">{formatLargeNumber(scadaSystems.data_acquisition.data_points_per_second)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Historian Storage:</span>
                <span className="text-orange-400">{formatNumber(scadaSystems.data_acquisition.historian_storage)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Real-Time Proc:</span>
                <span className={`${getStatusColor(scadaSystems.data_acquisition.real_time_processing)?.split(' ')[0] || 'text-green-400'}`}>
                  {scadaSystems.data_acquisition.real_time_processing}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Data Quality:</span>
                <span className="text-cyan-400">{formatNumber(scadaSystems.data_acquisition.data_quality_score)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Compression:</span>
                <span className="text-yellow-400">{formatNumber(scadaSystems.data_acquisition.compression_efficiency)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Backup Systems:</span>
                <span className={`${getStatusColor(scadaSystems.data_acquisition.backup_systems)?.split(' ')[0] || 'text-green-400'}`}>
                  {scadaSystems.data_acquisition.backup_systems}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Control Systems</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Supervisory Controllers:</span>
                <span className="text-blue-400">{scadaSystems.control_systems.supervisory_controllers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Controllers Online:</span>
                <span className="text-green-400">{scadaSystems.control_systems.controllers_operational}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Control Loops:</span>
                <span className="text-purple-400">{scadaSystems.control_systems.cascade_control_loops}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Loops in Auto:</span>
                <span className="text-orange-400">{scadaSystems.control_systems.loops_in_auto}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Performance:</span>
                <span className="text-cyan-400">{formatNumber(scadaSystems.control_systems.control_performance)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Setpoint Optim:</span>
                <span className={`${getStatusColor(scadaSystems.control_systems.setpoint_optimization)?.split(' ')[0] || 'text-green-400'}`}>
                  {scadaSystems.control_systems.setpoint_optimization.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Alarm Mgmt:</span>
                <span className={`${getStatusColor(scadaSystems.control_systems.alarm_management)?.split(' ')[0] || 'text-yellow-400'}`}>
                  {scadaSystems.control_systems.alarm_management}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Safety Systems:</span>
                <span className={`${getStatusColor(scadaSystems.control_systems.safety_systems_status)?.split(' ')[0] || 'text-green-400'}`}>
                  {scadaSystems.control_systems.safety_systems_status}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Network Infrastructure</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Ethernet Networks:</span>
                <span className="text-blue-400">{scadaSystems.network_infrastructure.networks_operational}/{scadaSystems.network_infrastructure.ethernet_networks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Wireless Networks:</span>
                <span className="text-green-400">{scadaSystems.network_infrastructure.wireless_active}/{scadaSystems.network_infrastructure.wireless_networks}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network Latency:</span>
                <span className="text-purple-400">{formatNumber(scadaSystems.network_infrastructure.network_latency)}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Bandwidth Usage:</span>
                <span className="text-orange-400">{formatNumber(scadaSystems.network_infrastructure.bandwidth_utilization)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Security Gateways:</span>
                <span className={`${getStatusColor(scadaSystems.network_infrastructure.security_gateways)?.split(' ')[0] || 'text-green-400'}`}>
                  {scadaSystems.network_infrastructure.security_gateways}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Redundancy:</span>
                <span className={`${getStatusColor(scadaSystems.network_infrastructure.redundancy_status)?.split(' ')[0] || 'text-green-400'}`}>
                  {scadaSystems.network_infrastructure.redundancy_status.replace(/_/g, ' ')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PLC Systems Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔧 PLC SYSTEMS & PROGRAMMABLE CONTROLLERS
        </h3>
        <div className="space-y-3">
          {plcSystems.map((plc) => (
            <div key={plc.plc_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{plc.plc_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(plc.status)}`}>
                    {plc.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs border ${getStatusColor(plc.communication_status)}`}>
                    {plc.communication_status}
                  </span>
                </div>
                <div className="text-xs text-gray-400">
                  {plc.location}
                </div>
              </div>

              <div className="text-sm mb-2">
                <span className="text-gray-400">Model: </span>
                <span className="text-cyan-400">{plc.model}</span>
                <span className="text-gray-400"> | Version: </span>
                <span className="text-green-400">{plc.program_version}</span>
                {plc.recipe_active && (
                  <>
                    <span className="text-gray-400"> | Recipe: </span>
                    <span className="text-purple-400">{plc.recipe_active}</span>
                  </>
                )}
              </div>

              {plc.status === 'RUNNING' && (
                <>
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">CPU: </span>
                    <span className="text-blue-400">{formatNumber(plc.cpu_utilization)}%</span>
                    <span className="text-gray-400"> | Memory: </span>
                    <span className="text-purple-400">{formatNumber(plc.memory_usage)}%</span>
                    <span className="text-gray-400"> | Scan: </span>
                    <span className="text-orange-400">{formatNumber(plc.scan_time)}ms</span>
                    <span className="text-gray-400"> | I/O Modules: </span>
                    <span className="text-green-400">{plc.io_modules}</span>
                  </div>
                  
                  <div className="text-xs">
                    <span className="text-gray-400">Safety: </span>
                    <span className={`${getStatusColor(plc.safety_status)?.split(' ')[0] || 'text-green-400'}`}>
                      {plc.safety_status}
                    </span>
                    <span className="text-gray-400"> | I/O Faults: </span>
                    <span className={`${plc.io_fault_count > 0 ? 'text-red-400' : 'text-green-400'}`}>
                      {plc.io_fault_count}
                    </span>
                    <span className="text-gray-400"> | Last Maintenance: </span>
                    <span className="text-cyan-400">{formatDate(plc.last_maintenance)}</span>
                  </div>
                </>
              )}

              {plc.status === 'MAINTENANCE' && (
                <>
                  <div className="text-sm mb-2">
                    <span className="text-gray-400">Maintenance Type: </span>
                    <span className="text-orange-400">{plc.maintenance_type?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Safety Status: </span>
                    <span className={`${getStatusColor(plc.safety_status)?.split(' ')[0] || 'text-orange-400'}`}>
                      {plc.safety_status}
                    </span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">I/O Faults: </span>
                    <span className="text-red-400">{plc.io_fault_count}</span>
                    <span className="text-gray-400"> | Maintenance Started: </span>
                    <span className="text-yellow-400">{formatDate(plc.last_maintenance)}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Production Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 PRODUCTION PERFORMANCE TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={automationHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
            <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={10}/>
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
              dataKey="production_output"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Production Output (units/h)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="oee_percentage" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="OEE %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="quality_rate" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Quality Rate %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="energy_efficiency" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Energy Efficiency %"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="automation_level" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Automation Level %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="alarm_count" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Active Alarms"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="predictive_alerts" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Predictive Alerts"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Production Lines and IIoT Devices */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production Lines */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 PRODUCTION LINES & SMART MANUFACTURING
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {productionLines.map((line) => (
              <div key={line.line_id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{line.line_id}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(line.status)}`}>
                      {line.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">
                    {line.product}
                  </span>
                </div>
                
                {line.status === 'RUNNING' && (
                  <>
                    <div className="text-xs mb-2">
                      <span className="text-gray-400">Speed: </span>
                      <span className="text-blue-400">{line.current_speed}</span>
                      <span className="text-gray-400">/{line.target_speed} units/h</span>
                      <span className="text-gray-400"> | Efficiency: </span>
                      <span className="text-green-400">{formatNumber(line.efficiency)}%</span>
                      <span className="text-gray-400"> | Quality: </span>
                      <span className="text-purple-400">{formatNumber(line.quality_rate)}%</span>
                    </div>
                    
                    <div className="text-xs">
                      <span className="text-gray-400">Operators: </span>
                      <span className="text-orange-400">{line.operator_count}</span>
                      <span className="text-gray-400"> | Shift: </span>
                      <span className={`${getStatusColor(line.shift)?.split(' ')[0] || 'text-yellow-400'}`}>
                        {line.shift.replace(/_/g, ' ')}
                      </span>
                      <span className="text-gray-400"> | Energy: </span>
                      <span className="text-cyan-400">{formatNumber(line.energy_consumption)} kWh/h</span>
                      {line.active_alarms > 0 && (
                        <>
                          <span className="text-gray-400"> | Alarms: </span>
                          <span className="text-red-400">{line.active_alarms}</span>
                        </>
                      )}
                    </div>

                    {line.recipe && (
                      <div className="text-xs mt-1">
                        <span className="text-gray-400">Recipe: </span>
                        <span className="text-yellow-400">{line.recipe}</span>
                        <span className="text-gray-400"> | Next Maintenance: </span>
                        <span className="text-cyan-400">{formatDateTime(line.next_maintenance)}</span>
                      </div>
                    )}
                  </>
                )}

                {line.status === 'STANDBY' && (
                  <div className="text-xs">
                    <span className="text-gray-400">Target Speed: </span>
                    <span className="text-blue-400">{line.target_speed} units/h</span>
                    <span className="text-gray-400"> | Operators: </span>
                    <span className="text-orange-400">{line.operator_count}</span>
                    <span className="text-gray-400"> | Next Maintenance: </span>
                    <span className="text-cyan-400">{formatDateTime(line.next_maintenance)}</span>
                  </div>
                )}

                {line.status === 'MAINTENANCE' && (
                  <div className="text-xs">
                    <span className="text-gray-400">Maintenance: </span>
                    <span className="text-orange-400">{line.maintenance_type?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Energy: </span>
                    <span className="text-cyan-400">{formatNumber(line.energy_consumption)} kWh/h</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* IIoT Devices and Smart Factory */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 IIOT DEVICES & INDUSTRY 4.0 INTEGRATION
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Sensor Networks</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Temperature:</span>
                  <span className="text-blue-400">{iiotDevices.sensor_networks.temp_sensors_online}/{iiotDevices.sensor_networks.temperature_sensors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pressure:</span>
                  <span className="text-green-400">{iiotDevices.sensor_networks.pressure_sensors_online}/{iiotDevices.sensor_networks.pressure_sensors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vibration:</span>
                  <span className="text-purple-400">{iiotDevices.sensor_networks.vibration_sensors_online}/{iiotDevices.sensor_networks.vibration_sensors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Flow:</span>
                  <span className="text-orange-400">{iiotDevices.sensor_networks.flow_sensors_online}/{iiotDevices.sensor_networks.flow_sensors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Level:</span>
                  <span className="text-cyan-400">{iiotDevices.sensor_networks.level_sensors_online}/{iiotDevices.sensor_networks.level_sensors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Humidity:</span>
                  <span className="text-yellow-400">{iiotDevices.sensor_networks.humidity_sensors_online}/{iiotDevices.sensor_networks.humidity_sensors}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Edge Computing & AI</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Edge Gateways:</span>
                  <span className="text-blue-400">{iiotDevices.edge_computing.gateways_online}/{iiotDevices.edge_computing.edge_gateways}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Processing Power:</span>
                  <span className="text-green-400">{formatNumber(iiotDevices.edge_computing.local_processing_power)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">AI Inference Jobs:</span>
                  <span className="text-purple-400">{formatLargeNumber(iiotDevices.edge_computing.ai_inference_jobs)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ML Model Accuracy:</span>
                  <span className="text-orange-400">{formatNumber(iiotDevices.edge_computing.ml_model_accuracy)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Edge Storage:</span>
                  <span className="text-cyan-400">{formatNumber(iiotDevices.edge_computing.edge_storage_used)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cloud Sync:</span>
                  <span className={`${getStatusColor(iiotDevices.edge_computing.cloud_sync_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {iiotDevices.edge_computing.cloud_sync_status}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Digital Twins</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Twin Models:</span>
                  <span className="text-blue-400">{iiotDevices.digital_twins.twin_models_active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sync Accuracy:</span>
                  <span className="text-green-400">{formatNumber(iiotDevices.digital_twins.twin_sync_accuracy)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Daily Simulations:</span>
                  <span className="text-purple-400">{iiotDevices.digital_twins.simulation_runs_daily}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Predictive Models:</span>
                  <span className="text-orange-400">{iiotDevices.digital_twins.predictive_models}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Prediction Accuracy:</span>
                  <span className="text-cyan-400">{formatNumber(iiotDevices.digital_twins.model_prediction_accuracy)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Optimizations:</span>
                  <span className="text-yellow-400">{iiotDevices.digital_twins.optimization_suggestions}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Smart Factory Metrics</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-green-400">{formatNumber(smartFactoryMetrics.production_efficiency.availability)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Performance:</span>
                  <span className="text-blue-400">{formatNumber(smartFactoryMetrics.production_efficiency.performance)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">First Pass Yield:</span>
                  <span className="text-purple-400">{formatNumber(smartFactoryMetrics.quality_control.first_pass_yield)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Energy Efficiency:</span>
                  <span className="text-orange-400">{formatNumber(smartFactoryMetrics.energy_management.energy_efficiency_score)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Predictive Maint:</span>
                  <span className={`${smartFactoryMetrics.maintenance_operations.predictive_maintenance_active ? 'text-green-400' : 'text-red-400'}`}>
                    {smartFactoryMetrics.maintenance_operations.predictive_maintenance_active ? 'ACTIVE' : 'INACTIVE'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">MTBF:</span>
                  <span className="text-cyan-400">{formatDuration(smartFactoryMetrics.maintenance_operations.mean_time_between_failures)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialAutomationOperationsCenter;