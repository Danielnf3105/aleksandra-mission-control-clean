// WaterUtilityOperationsCenter.js - Water Utility Operations Center & SCADA Management
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const WaterUtilityOperationsCenter = () => {
  const [utilityStatus, setUtilityStatus] = useState({
    operationalStatus: 'SCADA_INTEGRATED_ACTIVE',
    totalTreatmentPlants: 14,
    plantsOperational: 13,
    totalPumpStations: 89,
    pumpStationsOnline: 85,
    totalReservoirs: 23,
    reservoirsActive: 22,
    waterProductionDaily: 245000000, // gallons
    waterDistribution: 238000000, // gallons
    systemEfficiency: 91.4, // percentage
    lastUpdate: Date.now()
  });

  const [drinkingWaterSystems, setDrinkingWaterSystems] = useState({
    water_treatment_plants: {
      main_treatment_facility: {
        plant_id: 'WTP_MAIN_001',
        capacity_mgd: 125.0, // million gallons per day
        current_flow_rate: 98.7, // MGD
        efficiency: 92.3, // percentage
        raw_water_source: 'RIVER_PRIMARY',
        treatment_processes: ['COAGULATION', 'SEDIMENTATION', 'FILTRATION', 'DISINFECTION', 'PH_ADJUSTMENT'],
        turbidity_ntu: 0.12, // nephelometric turbidity units
        ph_level: 7.2,
        chlorine_residual: 0.8, // mg/L
        fluoride_level: 0.7, // mg/L
        water_quality_compliance: 99.8, // percentage
        energy_consumption_kwh: 2847, // current hourly
        chemical_dosing_active: true,
        backwash_cycle_status: 'NORMAL',
        filter_efficiency: 97.4
      },
      secondary_facility: {
        plant_id: 'WTP_SECONDARY_002',
        capacity_mgd: 45.0,
        current_flow_rate: 32.1,
        efficiency: 89.7,
        raw_water_source: 'GROUNDWATER_WELLS',
        treatment_processes: ['AERATION', 'FILTRATION', 'DISINFECTION', 'SOFTENING'],
        turbidity_ntu: 0.08,
        ph_level: 7.4,
        chlorine_residual: 0.9,
        fluoride_level: 0.8,
        water_quality_compliance: 99.5,
        energy_consumption_kwh: 1234,
        chemical_dosing_active: true,
        backwash_cycle_status: 'SCHEDULED',
        filter_efficiency: 96.1
      }
    },
    distribution_system: {
      total_pipeline_miles: 1247,
      pipeline_condition: 'GOOD',
      pressure_zones: 12,
      active_pressure_zones: 12,
      average_pressure_psi: 58.7,
      pressure_range: '45-85 PSI',
      storage_tanks: 15,
      tanks_operational: 14,
      total_storage_capacity_mg: 45.7, // million gallons
      current_storage_level: 38.9, // million gallons
      storage_percentage: 85.1,
      water_loss_percentage: 8.6, // unaccounted for water
      leak_detection_alerts: 3,
      valve_operations_today: 12,
      hydrant_maintenance_scheduled: 23
    },
    quality_monitoring: {
      sampling_points: 89,
      samples_collected_today: 145,
      bacteria_tests_passed: 145,
      chemical_tests_passed: 142,
      compliance_rate: 99.2,
      turbidity_violations: 0,
      chlorine_violations: 0,
      ph_violations: 1,
      fluoride_violations: 0,
      lead_copper_compliance: 100.0,
      trihalomethanes_compliance: 98.7,
      haloacetic_acids_compliance: 99.3,
      nitrate_compliance: 100.0
    }
  });

  const [wastewaterSystems, setWastewaterSystems] = useState({
    wastewater_treatment_plants: {
      main_wwtp: {
        plant_id: 'WWTP_MAIN_001',
        design_capacity_mgd: 85.0,
        current_flow_mgd: 67.3,
        influent_bod_mg_l: 245, // biochemical oxygen demand
        effluent_bod_mg_l: 8.2,
        bod_removal_efficiency: 96.7,
        influent_tss_mg_l: 189, // total suspended solids
        effluent_tss_mg_l: 12.4,
        tss_removal_efficiency: 93.4,
        ammonia_removal_efficiency: 94.8,
        phosphorus_removal_efficiency: 87.2,
        permit_compliance: 98.9,
        energy_consumption_kwh: 3456,
        biogas_production_scfh: 1247, // standard cubic feet per hour
        sludge_production_dry_tons: 23.7,
        chlorine_contact_time_minutes: 30,
        uv_disinfection_active: true
      },
      secondary_wwtp: {
        plant_id: 'WWTP_SECONDARY_002',
        design_capacity_mgd: 25.0,
        current_flow_mgd: 18.9,
        influent_bod_mg_l: 198,
        effluent_bod_mg_l: 12.1,
        bod_removal_efficiency: 93.9,
        influent_tss_mg_l: 167,
        effluent_tss_mg_l: 15.8,
        tss_removal_efficiency: 90.5,
        ammonia_removal_efficiency: 91.3,
        phosphorus_removal_efficiency: 82.7,
        permit_compliance: 97.4,
        energy_consumption_kwh: 1892,
        biogas_production_scfh: 423,
        sludge_production_dry_tons: 8.9,
        chlorine_contact_time_minutes: 25,
        uv_disinfection_active: false
      }
    },
    collection_system: {
      total_sewer_miles: 987,
      sewer_condition: 'FAIR',
      pump_stations: 45,
      pump_stations_operational: 43,
      force_main_miles: 89,
      gravity_sewer_miles: 898,
      manholes_total: 3456,
      manholes_inspected_ytd: 2134,
      overflow_incidents_mtd: 0, // month to date
      backup_incidents_mtd: 2,
      infiltration_inflow_percentage: 12.4,
      peak_flow_capacity_utilization: 67.8,
      emergency_bypass_active: false,
      grease_trap_inspections: 45,
      industrial_pretreatment_compliance: 96.8
    },
    biosolids_management: {
      biosolids_production_wet_tons: 89.7,
      biosolids_production_dry_tons: 23.4,
      moisture_content_percentage: 73.9,
      pathogen_reduction: 'CLASS_A',
      vector_attraction_reduction: 'COMPLIANT',
      metal_content_compliance: 100.0,
      land_application_acres: 1247,
      composting_active: true,
      incineration_active: false,
      landfill_disposal_percentage: 15.2,
      beneficial_reuse_percentage: 84.8
    }
  });

  const [stormwaterManagement, setStormwaterManagement] = useState({
    stormwater_infrastructure: {
      catch_basins: 2456,
      catch_basins_cleaned_ytd: 1789,
      storm_drains_miles: 456,
      storm_drains_inspected_ytd: 289,
      retention_ponds: 23,
      retention_ponds_capacity_ac_ft: 456.7, // acre-feet
      green_infrastructure_projects: 12,
      permeable_pavement_sq_ft: 234567,
      bioswales_linear_ft: 12456,
      rain_gardens_count: 89,
      tree_trenches_count: 67
    },
    water_quality_monitoring: {
      outfall_monitoring_points: 34,
      samples_collected_monthly: 156,
      total_suspended_solids_compliance: 94.7,
      bacteria_compliance: 91.2,
      nutrients_compliance: 87.8,
      metals_compliance: 96.3,
      oil_grease_compliance: 98.1,
      ph_compliance: 99.2,
      temperature_compliance: 97.6,
      dissolved_oxygen_compliance: 89.4
    },
    flood_management: {
      early_warning_systems: 15,
      warning_systems_operational: 14,
      rain_gauges: 45,
      stream_gauges: 23,
      flood_gates: 8,
      flood_gates_operational: 7,
      emergency_pumping_capacity_gpm: 45000, // gallons per minute
      flood_alert_level: 'GREEN',
      current_rainfall_inches_24h: 0.23,
      river_stage_ft: 12.4,
      flood_stage_ft: 18.0,
      time_to_flood_stage_hours: 'N/A'
    }
  });

  const [scadaIntegration, setScadaIntegration] = useState({
    control_systems: {
      total_rtu_sites: 167,
      rtu_sites_online: 159,
      plc_controllers: 234,
      plc_controllers_active: 226,
      hmi_stations: 45,
      hmi_stations_operational: 43,
      communication_protocols: ['MODBUS_TCP', 'DNP3', 'ETHERNET_IP', 'OPC_UA'],
      network_reliability: 99.3, // percentage uptime
      data_acquisition_rate_seconds: 5,
      alarm_acknowledgment_time_avg_seconds: 45,
      operator_response_time_avg_minutes: 3.2
    },
    automation_systems: {
      automated_processes: 89,
      manual_override_active: 3,
      setpoint_control_loops: 156,
      control_loops_in_auto: 148,
      cascade_control_active: 23,
      feedforward_control_active: 12,
      adaptive_control_systems: 8,
      model_predictive_control: 4,
      energy_optimization_active: true,
      chemical_feed_optimization: true,
      pump_speed_optimization: true
    },
    cybersecurity: {
      firewall_status: 'ACTIVE',
      intrusion_detection_status: 'MONITORING',
      security_patches_current: true,
      user_access_controls: 'ENFORCED',
      network_segmentation: 'IMPLEMENTED',
      security_incidents_mtd: 0,
      vulnerability_scans_current: true,
      backup_systems_tested: true,
      disaster_recovery_ready: true,
      compliance_certifications: ['NIST', 'NERC_CIP', 'ISO_27001']
    }
  });

  const [waterQualityData, setWaterQualityData] = useState([]);

  const generateWaterQualityHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of water quality data
      const hour = i;
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        turbidity_ntu: Math.max(0.05, Math.min(0.3, 0.12 + (Math.random() - 0.5) * 0.08)),
        ph_level: Math.max(6.5, Math.min(8.5, 7.2 + (Math.random() - 0.5) * 0.4)),
        chlorine_residual: Math.max(0.2, Math.min(1.2, 0.8 + (Math.random() - 0.5) * 0.3)),
        fluoride_level: Math.max(0.4, Math.min(1.0, 0.7 + (Math.random() - 0.5) * 0.2)),
        water_production_mgd: Math.max(80, Math.min(120, 98.7 + (Math.random() - 0.5) * 15)),
        energy_consumption_kwh: Math.max(2000, Math.min(4000, 2847 + (Math.random() - 0.5) * 800)),
        system_pressure_psi: Math.max(45, Math.min(75, 58.7 + (Math.random() - 0.5) * 10)),
        storage_level_percent: Math.max(70, Math.min(95, 85.1 + (Math.random() - 0.5) * 8)),
        flow_rate_mgd: Math.max(60, Math.min(100, 67.3 + (Math.random() - 0.5) * 12)),
        treatment_efficiency: Math.max(85, Math.min(98, 91.4 + (Math.random() - 0.5) * 4)),
        chemical_consumption_lbs: Math.max(500, Math.min(1500, 1000 + Math.random() * 400)),
        compliance_score: Math.max(95, Math.min(100, 99.2 + (Math.random() - 0.5) * 2))
      });
    }
    return data;
  };

  useEffect(() => {
    setWaterQualityData(generateWaterQualityHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update utility status
      setUtilityStatus(prev => ({
        ...prev,
        plantsOperational: Math.max(12, Math.min(14, prev.plantsOperational + Math.floor((Math.random() - 0.6) * 2))),
        pumpStationsOnline: Math.max(80, Math.min(89, prev.pumpStationsOnline + Math.floor((Math.random() - 0.5) * 3))),
        reservoirsActive: Math.max(20, Math.min(23, prev.reservoirsActive + Math.floor((Math.random() - 0.7) * 2))),
        waterProductionDaily: Math.max(220000000, Math.min(260000000, prev.waterProductionDaily + Math.floor((Math.random() - 0.5) * 5000000))),
        systemEfficiency: Math.max(85.0, Math.min(95.0, prev.systemEfficiency + (Math.random() - 0.5) * 2.0)),
        lastUpdate: Date.now()
      }));

      // Update drinking water systems
      setDrinkingWaterSystems(prev => ({
        ...prev,
        water_treatment_plants: {
          ...prev.water_treatment_plants,
          main_treatment_facility: {
            ...prev.water_treatment_plants.main_treatment_facility,
            current_flow_rate: Math.max(85.0, Math.min(125.0, prev.water_treatment_plants.main_treatment_facility.current_flow_rate + (Math.random() - 0.5) * 5.0)),
            efficiency: Math.max(85.0, Math.min(98.0, prev.water_treatment_plants.main_treatment_facility.efficiency + (Math.random() - 0.5) * 1.5)),
            turbidity_ntu: Math.max(0.05, Math.min(0.3, prev.water_treatment_plants.main_treatment_facility.turbidity_ntu + (Math.random() - 0.5) * 0.05)),
            energy_consumption_kwh: Math.max(2000, Math.min(4000, prev.water_treatment_plants.main_treatment_facility.energy_consumption_kwh + Math.floor((Math.random() - 0.5) * 200)))
          }
        },
        distribution_system: {
          ...prev.distribution_system,
          average_pressure_psi: Math.max(45.0, Math.min(75.0, prev.distribution_system.average_pressure_psi + (Math.random() - 0.5) * 3.0)),
          current_storage_level: Math.max(30.0, Math.min(45.7, prev.distribution_system.current_storage_level + (Math.random() - 0.5) * 2.0)),
          leak_detection_alerts: Math.max(0, Math.min(10, prev.distribution_system.leak_detection_alerts + Math.floor((Math.random() - 0.7) * 2)))
        }
      }));

      // Update wastewater systems
      setWastewaterSystems(prev => ({
        ...prev,
        wastewater_treatment_plants: {
          ...prev.wastewater_treatment_plants,
          main_wwtp: {
            ...prev.wastewater_treatment_plants.main_wwtp,
            current_flow_mgd: Math.max(50.0, Math.min(85.0, prev.wastewater_treatment_plants.main_wwtp.current_flow_mgd + (Math.random() - 0.5) * 4.0)),
            bod_removal_efficiency: Math.max(90.0, Math.min(99.0, prev.wastewater_treatment_plants.main_wwtp.bod_removal_efficiency + (Math.random() - 0.5) * 1.0)),
            permit_compliance: Math.max(95.0, Math.min(100.0, prev.wastewater_treatment_plants.main_wwtp.permit_compliance + (Math.random() - 0.5) * 1.0))
          }
        }
      }));

    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'SCADA_INTEGRATED_ACTIVE':
      case 'GOOD':
      case 'NORMAL':
      case 'ACTIVE':
      case 'COMPLIANT':
      case 'CLASS_A':
      case 'ENFORCED':
      case 'IMPLEMENTED':
      case 'MONITORING':
      case 'GREEN': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'FAIR':
      case 'SCHEDULED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'POOR':
      case 'DELAYED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const formatNumber = (num, decimals = 1) => {
    if (!num && num !== 0) return 'N/A';
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000000) return `${(num / 1000000000).toFixed(1)}B`;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatPercentage = (num) => {
    return `${formatNumber(num)}%`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          💧 WATER UTILITY OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(utilityStatus.operationalStatus)}`}>
            {utilityStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {utilityStatus.plantsOperational}/{utilityStatus.totalTreatmentPlants} Plants
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatLargeNumber(utilityStatus.waterProductionDaily)} GPD
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            Efficiency {formatPercentage(utilityStatus.systemEfficiency)}
          </div>
          <div className="text-sm text-gray-400 font-mono">
            SCADA Integrated Water & Wastewater Management
          </div>
        </div>
      </div>

      {/* Utility Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">WATER PRODUCTION</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatLargeNumber(utilityStatus.waterProductionDaily)}
              </div>
              <div className="text-xs text-blue-300">
                Gallons per day
              </div>
            </div>
            <div className="text-3xl opacity-60">💧</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SYSTEM EFFICIENCY</div>
              <div className="text-2xl font-bold text-green-100">
                {formatPercentage(utilityStatus.systemEfficiency)}
              </div>
              <div className="text-xs text-green-300">
                Overall performance
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">PUMP STATIONS</div>
              <div className="text-2xl font-bold text-purple-100">
                {utilityStatus.pumpStationsOnline}/{utilityStatus.totalPumpStations}
              </div>
              <div className="text-xs text-purple-300">
                Online status
              </div>
            </div>
            <div className="text-3xl opacity-60">⚙️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-lg p-4 border border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-cyan-200">STORAGE RESERVOIRS</div>
              <div className="text-2xl font-bold text-cyan-100">
                {utilityStatus.reservoirsActive}/{utilityStatus.totalReservoirs}
              </div>
              <div className="text-xs text-cyan-300">
                Active capacity
              </div>
            </div>
            <div className="text-3xl opacity-60">🏗️</div>
          </div>
        </div>
      </div>

      {/* Water Quality Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 WATER QUALITY & SYSTEM PERFORMANCE TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={waterQualityData}>
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
              dataKey="water_production_mgd"
              stroke="#3B82F6"
              fill="#3B82F6"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Water Production (MGD)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="ph_level" 
              stroke="#10B981" 
              strokeWidth={2}
              name="pH Level"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="chlorine_residual" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Chlorine Residual (mg/L)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="turbidity_ntu" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Turbidity (NTU)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="treatment_efficiency" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Treatment Efficiency %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="energy_consumption_kwh" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Energy Consumption (kWh)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="system_pressure_psi" 
              stroke="#84CC16" 
              strokeWidth={2}
              name="System Pressure (PSI)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Drinking Water & Wastewater Systems */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drinking Water Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚰 DRINKING WATER TREATMENT & DISTRIBUTION
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Main Treatment Facility</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Plant ID:</span>
                  <span className="text-blue-400">{drinkingWaterSystems.water_treatment_plants.main_treatment_facility.plant_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Flow:</span>
                  <span className="text-green-400">{formatNumber(drinkingWaterSystems.water_treatment_plants.main_treatment_facility.current_flow_rate)} MGD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Capacity:</span>
                  <span className="text-purple-400">{formatNumber(drinkingWaterSystems.water_treatment_plants.main_treatment_facility.capacity_mgd)} MGD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Efficiency:</span>
                  <span className="text-orange-400">{formatPercentage(drinkingWaterSystems.water_treatment_plants.main_treatment_facility.efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Turbidity:</span>
                  <span className="text-cyan-400">{formatNumber(drinkingWaterSystems.water_treatment_plants.main_treatment_facility.turbidity_ntu, 2)} NTU</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">pH Level:</span>
                  <span className="text-yellow-400">{formatNumber(drinkingWaterSystems.water_treatment_plants.main_treatment_facility.ph_level, 1)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Chlorine Residual:</span>
                  <span className="text-pink-400">{formatNumber(drinkingWaterSystems.water_treatment_plants.main_treatment_facility.chlorine_residual, 1)} mg/L</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Quality Compliance:</span>
                  <span className="text-green-400">{formatPercentage(drinkingWaterSystems.water_treatment_plants.main_treatment_facility.water_quality_compliance)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Distribution System</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Pipeline Miles:</span>
                  <span className="text-blue-400">{drinkingWaterSystems.distribution_system.total_pipeline_miles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pipeline Condition:</span>
                  <span className={`${getStatusColor(drinkingWaterSystems.distribution_system.pipeline_condition)?.split(' ')[0] || 'text-green-400'}`}>
                    {drinkingWaterSystems.distribution_system.pipeline_condition}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pressure Zones:</span>
                  <span className="text-green-400">{drinkingWaterSystems.distribution_system.active_pressure_zones}/{drinkingWaterSystems.distribution_system.pressure_zones}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Pressure:</span>
                  <span className="text-purple-400">{formatNumber(drinkingWaterSystems.distribution_system.average_pressure_psi)} PSI</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage Tanks:</span>
                  <span className="text-orange-400">{drinkingWaterSystems.distribution_system.tanks_operational}/{drinkingWaterSystems.distribution_system.storage_tanks}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storage Level:</span>
                  <span className="text-cyan-400">{formatNumber(drinkingWaterSystems.distribution_system.current_storage_level)} MG ({formatPercentage(drinkingWaterSystems.distribution_system.storage_percentage)})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Water Loss:</span>
                  <span className="text-yellow-400">{formatPercentage(drinkingWaterSystems.distribution_system.water_loss_percentage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Leak Alerts:</span>
                  <span className="text-red-400">{drinkingWaterSystems.distribution_system.leak_detection_alerts}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Water Quality Monitoring</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Sampling Points:</span>
                  <span className="text-blue-400">{drinkingWaterSystems.quality_monitoring.sampling_points}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Samples Today:</span>
                  <span className="text-green-400">{drinkingWaterSystems.quality_monitoring.samples_collected_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bacteria Tests:</span>
                  <span className="text-purple-400">{drinkingWaterSystems.quality_monitoring.bacteria_tests_passed}/{drinkingWaterSystems.quality_monitoring.samples_collected_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Chemical Tests:</span>
                  <span className="text-orange-400">{drinkingWaterSystems.quality_monitoring.chemical_tests_passed}/{drinkingWaterSystems.quality_monitoring.samples_collected_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Compliance Rate:</span>
                  <span className="text-cyan-400">{formatPercentage(drinkingWaterSystems.quality_monitoring.compliance_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Lead/Copper:</span>
                  <span className="text-green-400">{formatPercentage(drinkingWaterSystems.quality_monitoring.lead_copper_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">THMs:</span>
                  <span className="text-yellow-400">{formatPercentage(drinkingWaterSystems.quality_monitoring.trihalomethanes_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">HAA5:</span>
                  <span className="text-pink-400">{formatPercentage(drinkingWaterSystems.quality_monitoring.haloacetic_acids_compliance)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wastewater Systems */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏭 WASTEWATER TREATMENT & COLLECTION
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Main WWTP</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Plant ID:</span>
                  <span className="text-blue-400">{wastewaterSystems.wastewater_treatment_plants.main_wwtp.plant_id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Flow:</span>
                  <span className="text-green-400">{formatNumber(wastewaterSystems.wastewater_treatment_plants.main_wwtp.current_flow_mgd)} MGD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Design Capacity:</span>
                  <span className="text-purple-400">{formatNumber(wastewaterSystems.wastewater_treatment_plants.main_wwtp.design_capacity_mgd)} MGD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">BOD Removal:</span>
                  <span className="text-orange-400">{formatPercentage(wastewaterSystems.wastewater_treatment_plants.main_wwtp.bod_removal_efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TSS Removal:</span>
                  <span className="text-cyan-400">{formatPercentage(wastewaterSystems.wastewater_treatment_plants.main_wwtp.tss_removal_efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ammonia Removal:</span>
                  <span className="text-yellow-400">{formatPercentage(wastewaterSystems.wastewater_treatment_plants.main_wwtp.ammonia_removal_efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Phosphorus Removal:</span>
                  <span className="text-pink-400">{formatPercentage(wastewaterSystems.wastewater_treatment_plants.main_wwtp.phosphorus_removal_efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Permit Compliance:</span>
                  <span className="text-green-400">{formatPercentage(wastewaterSystems.wastewater_treatment_plants.main_wwtp.permit_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Biogas Production:</span>
                  <span className="text-blue-400">{wastewaterSystems.wastewater_treatment_plants.main_wwtp.biogas_production_scfh} SCFH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">UV Disinfection:</span>
                  <span className={`${wastewaterSystems.wastewater_treatment_plants.main_wwtp.uv_disinfection_active ? 'text-green-400' : 'text-red-400'}`}>
                    {wastewaterSystems.wastewater_treatment_plants.main_wwtp.uv_disinfection_active ? 'ACTIVE' : 'INACTIVE'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Collection System</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Sewer Miles:</span>
                  <span className="text-blue-400">{wastewaterSystems.collection_system.total_sewer_miles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sewer Condition:</span>
                  <span className={`${getStatusColor(wastewaterSystems.collection_system.sewer_condition)?.split(' ')[0] || 'text-yellow-400'}`}>
                    {wastewaterSystems.collection_system.sewer_condition}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pump Stations:</span>
                  <span className="text-green-400">{wastewaterSystems.collection_system.pump_stations_operational}/{wastewaterSystems.collection_system.pump_stations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Force Main Miles:</span>
                  <span className="text-purple-400">{wastewaterSystems.collection_system.force_main_miles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Gravity Sewer:</span>
                  <span className="text-orange-400">{wastewaterSystems.collection_system.gravity_sewer_miles}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Manholes Inspected:</span>
                  <span className="text-cyan-400">{wastewaterSystems.collection_system.manholes_inspected_ytd}/{wastewaterSystems.collection_system.manholes_total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">SSO Incidents MTD:</span>
                  <span className="text-yellow-400">{wastewaterSystems.collection_system.overflow_incidents_mtd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">I&I Percentage:</span>
                  <span className="text-pink-400">{formatPercentage(wastewaterSystems.collection_system.infiltration_inflow_percentage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Peak Flow Usage:</span>
                  <span className="text-green-400">{formatPercentage(wastewaterSystems.collection_system.peak_flow_capacity_utilization)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Biosolids Management</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Production (Dry):</span>
                  <span className="text-blue-400">{formatNumber(wastewaterSystems.biosolids_management.biosolids_production_dry_tons)} tons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Production (Wet):</span>
                  <span className="text-green-400">{formatNumber(wastewaterSystems.biosolids_management.biosolids_production_wet_tons)} tons</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Moisture Content:</span>
                  <span className="text-purple-400">{formatPercentage(wastewaterSystems.biosolids_management.moisture_content_percentage)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pathogen Reduction:</span>
                  <span className={`${getStatusColor(wastewaterSystems.biosolids_management.pathogen_reduction)?.split(' ')[0] || 'text-green-400'}`}>
                    {wastewaterSystems.biosolids_management.pathogen_reduction}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Vector Reduction:</span>
                  <span className={`${getStatusColor(wastewaterSystems.biosolids_management.vector_attraction_reduction)?.split(' ')[0] || 'text-green-400'}`}>
                    {wastewaterSystems.biosolids_management.vector_attraction_reduction}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Metal Compliance:</span>
                  <span className="text-green-400">{formatPercentage(wastewaterSystems.biosolids_management.metal_content_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Land Application:</span>
                  <span className="text-orange-400">{wastewaterSystems.biosolids_management.land_application_acres} acres</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Beneficial Reuse:</span>
                  <span className="text-cyan-400">{formatPercentage(wastewaterSystems.biosolids_management.beneficial_reuse_percentage)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stormwater Management & SCADA Integration */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stormwater Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌧️ STORMWATER MANAGEMENT & FLOOD CONTROL
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Stormwater Infrastructure</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Catch Basins:</span>
                  <span className="text-blue-400">{stormwaterManagement.stormwater_infrastructure.catch_basins}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cleaned YTD:</span>
                  <span className="text-green-400">{stormwaterManagement.stormwater_infrastructure.catch_basins_cleaned_ytd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Storm Drains:</span>
                  <span className="text-purple-400">{stormwaterManagement.stormwater_infrastructure.storm_drains_miles} miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Inspected YTD:</span>
                  <span className="text-orange-400">{stormwaterManagement.stormwater_infrastructure.storm_drains_inspected_ytd} miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Retention Ponds:</span>
                  <span className="text-cyan-400">{stormwaterManagement.stormwater_infrastructure.retention_ponds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pond Capacity:</span>
                  <span className="text-yellow-400">{formatNumber(stormwaterManagement.stormwater_infrastructure.retention_ponds_capacity_ac_ft)} ac-ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Green Infrastructure:</span>
                  <span className="text-pink-400">{stormwaterManagement.stormwater_infrastructure.green_infrastructure_projects} projects</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bioswales:</span>
                  <span className="text-green-400">{formatLargeNumber(stormwaterManagement.stormwater_infrastructure.bioswales_linear_ft)} ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rain Gardens:</span>
                  <span className="text-blue-400">{stormwaterManagement.stormwater_infrastructure.rain_gardens_count}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Water Quality Monitoring</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Outfall Points:</span>
                  <span className="text-blue-400">{stormwaterManagement.water_quality_monitoring.outfall_monitoring_points}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Monthly Samples:</span>
                  <span className="text-green-400">{stormwaterManagement.water_quality_monitoring.samples_collected_monthly}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">TSS Compliance:</span>
                  <span className="text-purple-400">{formatPercentage(stormwaterManagement.water_quality_monitoring.total_suspended_solids_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bacteria Compliance:</span>
                  <span className="text-orange-400">{formatPercentage(stormwaterManagement.water_quality_monitoring.bacteria_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nutrients:</span>
                  <span className="text-cyan-400">{formatPercentage(stormwaterManagement.water_quality_monitoring.nutrients_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Metals:</span>
                  <span className="text-yellow-400">{formatPercentage(stormwaterManagement.water_quality_monitoring.metals_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Oil & Grease:</span>
                  <span className="text-pink-400">{formatPercentage(stormwaterManagement.water_quality_monitoring.oil_grease_compliance)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Flood Management</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Early Warning:</span>
                  <span className="text-blue-400">{stormwaterManagement.flood_management.warning_systems_operational}/{stormwaterManagement.flood_management.early_warning_systems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Rain Gauges:</span>
                  <span className="text-green-400">{stormwaterManagement.flood_management.rain_gauges}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Stream Gauges:</span>
                  <span className="text-purple-400">{stormwaterManagement.flood_management.stream_gauges}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Flood Gates:</span>
                  <span className="text-orange-400">{stormwaterManagement.flood_management.flood_gates_operational}/{stormwaterManagement.flood_management.flood_gates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Alert Level:</span>
                  <span className={`${getStatusColor(stormwaterManagement.flood_management.flood_alert_level)?.split(' ')[0] || 'text-green-400'}`}>
                    {stormwaterManagement.flood_management.flood_alert_level}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">24h Rainfall:</span>
                  <span className="text-cyan-400">{formatNumber(stormwaterManagement.flood_management.current_rainfall_inches_24h, 2)}"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">River Stage:</span>
                  <span className="text-yellow-400">{formatNumber(stormwaterManagement.flood_management.river_stage_ft)} ft</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Flood Stage:</span>
                  <span className="text-pink-400">{formatNumber(stormwaterManagement.flood_management.flood_stage_ft)} ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SCADA Integration */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🖥️ SCADA INTEGRATION & AUTOMATION
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Control Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">RTU Sites:</span>
                  <span className="text-blue-400">{scadaIntegration.control_systems.rtu_sites_online}/{scadaIntegration.control_systems.total_rtu_sites}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">PLC Controllers:</span>
                  <span className="text-green-400">{scadaIntegration.control_systems.plc_controllers_active}/{scadaIntegration.control_systems.plc_controllers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">HMI Stations:</span>
                  <span className="text-purple-400">{scadaIntegration.control_systems.hmi_stations_operational}/{scadaIntegration.control_systems.hmi_stations}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Network Reliability:</span>
                  <span className="text-orange-400">{formatPercentage(scadaIntegration.control_systems.network_reliability)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Acquisition:</span>
                  <span className="text-cyan-400">{scadaIntegration.control_systems.data_acquisition_rate_seconds}s intervals</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Alarm Response:</span>
                  <span className="text-yellow-400">{formatNumber(scadaIntegration.control_systems.operator_response_time_avg_minutes)} min avg</span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400">Protocols: </span>
                  <span className="text-pink-400">{scadaIntegration.control_systems.communication_protocols.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Automation Systems</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Automated Processes:</span>
                  <span className="text-blue-400">{scadaIntegration.automation_systems.automated_processes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Manual Override:</span>
                  <span className="text-red-400">{scadaIntegration.automation_systems.manual_override_active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Control Loops:</span>
                  <span className="text-green-400">{scadaIntegration.automation_systems.control_loops_in_auto}/{scadaIntegration.automation_systems.setpoint_control_loops}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cascade Control:</span>
                  <span className="text-purple-400">{scadaIntegration.automation_systems.cascade_control_active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Feedforward Control:</span>
                  <span className="text-orange-400">{scadaIntegration.automation_systems.feedforward_control_active}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Adaptive Control:</span>
                  <span className="text-cyan-400">{scadaIntegration.automation_systems.adaptive_control_systems}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">MPC Systems:</span>
                  <span className="text-yellow-400">{scadaIntegration.automation_systems.model_predictive_control}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Energy Optimization:</span>
                  <span className={`${scadaIntegration.automation_systems.energy_optimization_active ? 'text-green-400' : 'text-red-400'}`}>
                    {scadaIntegration.automation_systems.energy_optimization_active ? 'ACTIVE' : 'INACTIVE'}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Cybersecurity</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Firewall:</span>
                  <span className={`${getStatusColor(scadaIntegration.cybersecurity.firewall_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {scadaIntegration.cybersecurity.firewall_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Intrusion Detection:</span>
                  <span className={`${getStatusColor(scadaIntegration.cybersecurity.intrusion_detection_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {scadaIntegration.cybersecurity.intrusion_detection_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Patches:</span>
                  <span className={`${scadaIntegration.cybersecurity.security_patches_current ? 'text-green-400' : 'text-red-400'}`}>
                    {scadaIntegration.cybersecurity.security_patches_current ? 'CURRENT' : 'OUTDATED'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Access Controls:</span>
                  <span className={`${getStatusColor(scadaIntegration.cybersecurity.user_access_controls)?.split(' ')[0] || 'text-green-400'}`}>
                    {scadaIntegration.cybersecurity.user_access_controls}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Network Segmentation:</span>
                  <span className={`${getStatusColor(scadaIntegration.cybersecurity.network_segmentation)?.split(' ')[0] || 'text-green-400'}`}>
                    {scadaIntegration.cybersecurity.network_segmentation}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Incidents MTD:</span>
                  <span className="text-green-400">{scadaIntegration.cybersecurity.security_incidents_mtd}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">DR Ready:</span>
                  <span className={`${scadaIntegration.cybersecurity.disaster_recovery_ready ? 'text-green-400' : 'text-red-400'}`}>
                    {scadaIntegration.cybersecurity.disaster_recovery_ready ? 'YES' : 'NO'}
                  </span>
                </div>
                <div className="text-xs">
                  <span className="text-gray-400">Certifications: </span>
                  <span className="text-pink-400">{scadaIntegration.cybersecurity.compliance_certifications.join(', ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaterUtilityOperationsCenter;