// HealthcareOperationsCenter.js - Healthcare Operations Center & Patient Flow Management
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HealthcareOperationsCenter = () => {
  const [hospitalStatus, setHospitalStatus] = useState({
    operationalStatus: 'PATIENT_FLOW_ACTIVE',
    totalBeds: 647,
    occupiedBeds: 523,
    availableBeds: 124,
    occupancyRate: 80.8, // percentage
    totalPatients: 612,
    emergencyDepartmentStatus: 'NORMAL',
    icuCapacity: 85.7, // percentage
    averageWaitTime: 23.4, // minutes
    lastUpdate: Date.now()
  });

  const [patientFlowManagement, setPatientFlowManagement] = useState({
    emergency_department: {
      total_ed_beds: 45,
      occupied_ed_beds: 37,
      ed_occupancy_rate: 82.2,
      triage_levels: {
        level_1_critical: 3,
        level_2_emergent: 8,
        level_3_urgent: 15,
        level_4_semi_urgent: 9,
        level_5_non_urgent: 2
      },
      average_wait_time_minutes: 23.4,
      left_without_being_seen_rate: 4.7, // percentage
      ambulance_diversions_today: 2,
      ed_length_of_stay_hours: 4.2,
      fast_track_patients: 12,
      trauma_cases_today: 6,
      psychiatric_evaluations: 3
    },
    inpatient_units: {
      medical_surgical_units: {
        total_beds: 245,
        occupied_beds: 198,
        occupancy_rate: 80.8,
        pending_admissions: 12,
        pending_discharges: 18,
        average_length_of_stay_days: 4.7
      },
      intensive_care_unit: {
        total_icu_beds: 28,
        occupied_icu_beds: 24,
        icu_occupancy_rate: 85.7,
        ventilator_beds: 16,
        ventilators_in_use: 11,
        icu_mortality_rate: 8.9, // percentage for this period
        average_icu_stay_days: 6.8
      },
      pediatric_unit: {
        total_peds_beds: 35,
        occupied_peds_beds: 22,
        peds_occupancy_rate: 62.9,
        nicu_beds: 12,
        nicu_occupied: 8,
        peds_er_visits_today: 15
      },
      maternity_ward: {
        total_ob_beds: 25,
        occupied_ob_beds: 18,
        ob_occupancy_rate: 72.0,
        deliveries_today: 4,
        c_sections_today: 2,
        labor_rooms: 8,
        labor_rooms_occupied: 3
      }
    },
    bed_management: {
      bed_turnover_time_minutes: 87.3,
      housekeeping_response_time_minutes: 12.4,
      bed_assignment_time_minutes: 8.7,
      discharge_planning_efficiency: 89.4, // percentage
      same_day_discharge_rate: 23.7, // percentage
      readmission_rate_30_day: 11.2, // percentage
      patient_satisfaction_score: 87.6,
      bed_utilization_efficiency: 91.3
    }
  });

  const [clinicalOperations, setClinicalOperations] = useState({
    surgical_services: {
      operating_rooms: 18,
      or_utilization_rate: 87.4, // percentage
      surgeries_scheduled_today: 24,
      surgeries_completed: 18,
      surgeries_in_progress: 3,
      surgeries_cancelled: 1,
      emergency_surgeries: 2,
      average_case_length_minutes: 127,
      first_case_on_time_starts: 89.2, // percentage
      turnover_time_minutes: 23.4
    },
    diagnostic_services: {
      radiology_studies_today: 156,
      ct_scans: 34,
      mri_scans: 12,
      ultrasounds: 45,
      x_rays: 65,
      mammograms: 8,
      average_report_turnaround_hours: 2.3,
      radiology_backlog: 12,
      equipment_utilization: 78.9 // percentage
    },
    laboratory_services: {
      lab_tests_today: 2347,
      stat_lab_results_avg_minutes: 18.7,
      routine_lab_results_avg_hours: 4.2,
      microbiology_cultures: 87,
      blood_bank_units_available: 234,
      blood_bank_units_crossmatched: 45,
      lab_quality_score: 98.7,
      critical_value_alerts: 12
    },
    pharmacy_operations: {
      medications_dispensed_today: 1456,
      medication_errors: 0,
      pharmacy_response_time_minutes: 15.7,
      controlled_substances_count: 'VERIFIED',
      drug_inventory_status: 'ADEQUATE',
      clinical_interventions: 23,
      medication_reconciliation_rate: 94.7, // percentage
      iv_admixture_preparations: 89
    }
  });

  const [qualityMetrics, setQualityMetrics] = useState({
    patient_safety: {
      infection_control_compliance: 97.8, // percentage
      hand_hygiene_compliance: 89.4,
      fall_incidents_today: 1,
      medication_safety_score: 98.9,
      pressure_ulcer_rate: 2.1, // per 1000 patient days
      catheter_associated_uti_rate: 0.8,
      central_line_infection_rate: 1.2,
      surgical_site_infection_rate: 2.3
    },
    regulatory_compliance: {
      joint_commission_readiness: 92.7, // percentage
      cms_quality_measures: 94.3,
      dnv_accreditation_status: 'CURRENT',
      fire_safety_compliance: 98.2,
      environment_of_care_score: 96.8,
      emergency_preparedness_score: 91.4,
      data_privacy_compliance: 99.1,
      documentation_compliance: 88.7
    },
    clinical_outcomes: {
      mortality_index: 0.87, // risk adjusted
      patient_satisfaction_hcahps: 87.6,
      core_measures_compliance: 94.8,
      sepsis_bundle_compliance: 89.7,
      stroke_care_measures: 92.4,
      heart_attack_care_measures: 95.1,
      pneumonia_care_measures: 91.8,
      surgical_care_improvement: 93.6
    }
  });

  const [resourceManagement, setResourceManagement] = useState({
    staffing_levels: {
      nursing_staff_present: 89,
      nursing_staff_scheduled: 94,
      nursing_fill_rate: 94.7, // percentage
      physician_coverage: 'ADEQUATE',
      respiratory_therapists: 12,
      pharmacy_staff: 8,
      environmental_services: 15,
      security_staff: 6,
      overtime_hours_today: 23.7,
      agency_staff_today: 4
    },
    equipment_status: {
      ventilators_total: 45,
      ventilators_available: 23,
      iv_pumps_total: 234,
      iv_pumps_available: 189,
      patient_monitors_total: 156,
      patient_monitors_available: 134,
      wheelchairs_available: 45,
      stretchers_available: 23,
      equipment_maintenance_due: 12,
      biomedical_alerts: 3
    },
    supply_chain: {
      inventory_status: 'GREEN',
      ppe_stock_level: 'ADEQUATE',
      medical_supplies_stock: 94.7, // percentage of target
      pharmaceutical_stock: 92.3,
      blood_products_stock: 87.6,
      food_service_stock: 96.8,
      linen_availability: 'SUFFICIENT',
      supply_chain_disruptions: 0
    }
  });

  const [emergencyPreparedness, setEmergencyPreparedness] = useState({
    disaster_response: {
      emergency_management_status: 'STANDBY',
      surge_capacity_beds: 45,
      surge_capacity_available: 38,
      emergency_supplies_status: 'STOCKED',
      backup_power_status: 'TESTED_OK',
      communication_systems: 'OPERATIONAL',
      evacuation_plan_current: true,
      mass_casualty_protocol: 'READY',
      hazmat_response_team: 'ON_CALL'
    },
    infection_prevention: {
      isolation_rooms: 12,
      isolation_rooms_available: 8,
      negative_pressure_rooms: 6,
      negative_pressure_operational: 5,
      ppe_consumption_rate: 'NORMAL',
      isolation_precautions_active: 15,
      outbreak_investigations: 0,
      environmental_cleaning_score: 95.7,
      air_quality_monitoring: 'NORMAL'
    },
    security_operations: {
      security_incidents_today: 2,
      workplace_violence_alerts: 0,
      visitor_screening_status: 'ACTIVE',
      access_control_compliance: 97.8,
      surveillance_system_status: 'OPERATIONAL',
      panic_button_tests: 'CURRENT',
      psychiatric_security_calls: 3,
      infant_security_system: 'ARMED'
    }
  });

  const [healthcareHistory, setHealthcareHistory] = useState([]);

  const generateHealthcareHistory = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours of healthcare data
      const hour = i;
      let patientLoadMultiplier = 0.5; // Base patient load
      
      // Hospital patient flow patterns
      if (hour >= 6 && hour <= 10) patientLoadMultiplier = 1.1; // Morning admission surge
      if (hour >= 14 && hour <= 18) patientLoadMultiplier = 1.0; // Afternoon activity
      if (hour >= 20 && hour <= 22) patientLoadMultiplier = 0.8; // Evening discharge
      if (hour >= 23 || hour <= 5) patientLoadMultiplier = 0.4; // Night/early morning
      if ([8, 9, 15, 16].includes(hour)) patientLoadMultiplier = 1.3; // Peak admission times
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        bed_occupancy: Math.max(70, Math.min(95, 80 + patientLoadMultiplier * 10 + Math.random() * 8)),
        ed_volume: Math.floor((20 + patientLoadMultiplier * 25) + Math.random() * 10),
        icu_occupancy: Math.max(60, Math.min(100, 85 + patientLoadMultiplier * 8 + Math.random() * 6)),
        surgery_cases: Math.floor(patientLoadMultiplier * 6 + Math.random() * 4),
        average_wait_time: Math.max(5, Math.min(60, 25 - patientLoadMultiplier * 8 + Math.random() * 15)),
        patient_satisfaction: Math.max(75, Math.min(95, 87 - patientLoadMultiplier * 3 + Math.random() * 5)),
        nursing_ratio: Math.max(3.0, Math.min(8.0, 5.5 + (1 - patientLoadMultiplier) * 1.5 + Math.random() * 1.0)),
        lab_turnaround: Math.max(2, Math.min(8, 4 + patientLoadMultiplier * 2 + Math.random() * 1.5)),
        medication_errors: Math.floor(patientLoadMultiplier * 0.5 + Math.random() * 0.8),
        infection_rate: Math.max(0, Math.min(5, 2.1 + (Math.random() - 0.5) * 1.0)),
        discharge_rate: Math.max(5, Math.min(25, 15 + (1 - patientLoadMultiplier) * 8 + Math.random() * 5)),
        emergency_cases: Math.floor(patientLoadMultiplier * 4 + Math.random() * 3)
      });
    }
    return data;
  };

  useEffect(() => {
    setHealthcareHistory(generateHealthcareHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update hospital status
      setHospitalStatus(prev => ({
        ...prev,
        occupiedBeds: Math.max(450, Math.min(647, prev.occupiedBeds + Math.floor((Math.random() - 0.5) * 10))),
        totalPatients: Math.max(500, Math.min(700, prev.totalPatients + Math.floor((Math.random() - 0.5) * 8))),
        occupancyRate: Math.max(70.0, Math.min(95.0, prev.occupancyRate + (Math.random() - 0.5) * 3.0)),
        averageWaitTime: Math.max(10.0, Math.min(45.0, prev.averageWaitTime + (Math.random() - 0.5) * 5.0)),
        lastUpdate: Date.now()
      }));

      // Update patient flow management
      setPatientFlowManagement(prev => ({
        ...prev,
        emergency_department: {
          ...prev.emergency_department,
          occupied_ed_beds: Math.max(25, Math.min(45, prev.emergency_department.occupied_ed_beds + Math.floor((Math.random() - 0.5) * 3))),
          average_wait_time_minutes: Math.max(10.0, Math.min(45.0, prev.emergency_department.average_wait_time_minutes + (Math.random() - 0.5) * 4.0)),
          trauma_cases_today: prev.emergency_department.trauma_cases_today + Math.floor(Math.random() * 0.3)
        },
        inpatient_units: {
          ...prev.inpatient_units,
          intensive_care_unit: {
            ...prev.inpatient_units.intensive_care_unit,
            occupied_icu_beds: Math.max(18, Math.min(28, prev.inpatient_units.intensive_care_unit.occupied_icu_beds + Math.floor((Math.random() - 0.6) * 2))),
            ventilators_in_use: Math.max(6, Math.min(16, prev.inpatient_units.intensive_care_unit.ventilators_in_use + Math.floor((Math.random() - 0.5) * 2)))
          }
        },
        bed_management: {
          ...prev.bed_management,
          bed_turnover_time_minutes: Math.max(60.0, Math.min(120.0, prev.bed_management.bed_turnover_time_minutes + (Math.random() - 0.5) * 10.0))
        }
      }));

      // Update clinical operations
      setClinicalOperations(prev => ({
        ...prev,
        surgical_services: {
          ...prev.surgical_services,
          surgeries_completed: Math.min(prev.surgical_services.surgeries_scheduled_today, prev.surgical_services.surgeries_completed + Math.floor(Math.random() * 2)),
          surgeries_in_progress: Math.max(0, Math.min(6, prev.surgical_services.surgeries_in_progress + Math.floor((Math.random() - 0.6) * 2)))
        },
        laboratory_services: {
          ...prev.laboratory_services,
          lab_tests_today: prev.laboratory_services.lab_tests_today + Math.floor(Math.random() * 50) + 25,
          critical_value_alerts: Math.max(0, prev.laboratory_services.critical_value_alerts + Math.floor((Math.random() - 0.8) * 2))
        }
      }));

      // Update quality metrics
      setQualityMetrics(prev => ({
        ...prev,
        patient_safety: {
          ...prev.patient_safety,
          infection_control_compliance: Math.max(90.0, Math.min(100.0, prev.patient_safety.infection_control_compliance + (Math.random() - 0.5) * 1.0)),
          hand_hygiene_compliance: Math.max(80.0, Math.min(98.0, prev.patient_safety.hand_hygiene_compliance + (Math.random() - 0.5) * 2.0))
        }
      }));

    }, 35000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'PATIENT_FLOW_ACTIVE':
      case 'NORMAL':
      case 'ADEQUATE':
      case 'GREEN':
      case 'SUFFICIENT':
      case 'STOCKED':
      case 'TESTED_OK':
      case 'OPERATIONAL':
      case 'READY':
      case 'ON_CALL':
      case 'ACTIVE':
      case 'CURRENT':
      case 'ARMED':
      case 'VERIFIED':
      case 'STANDBY': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'MODERATE':
      case 'YELLOW':
      case 'SCHEDULED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'HIGH':
      case 'RED':
      case 'CRITICAL':
      case 'ALERT': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const formatNumber = (num, decimals = 1) => {
    if (!num && num !== 0) return 'N/A';
    return num.toFixed(decimals);
  };

  const formatLargeNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}k`;
    return num.toString();
  };

  const formatPercentage = (num) => {
    return `${formatNumber(num)}%`;
  };

  // Calculate derived values
  const availableBeds = hospitalStatus.totalBeds - hospitalStatus.occupiedBeds;
  const edOccupancyRate = (patientFlowManagement.emergency_department.occupied_ed_beds / patientFlowManagement.emergency_department.total_ed_beds) * 100;
  const icuOccupancyRate = (patientFlowManagement.inpatient_units.intensive_care_unit.occupied_icu_beds / patientFlowManagement.inpatient_units.intensive_care_unit.total_icu_beds) * 100;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏥 HEALTHCARE OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border ${getStatusColor(hospitalStatus.operationalStatus)}`}>
            {hospitalStatus.operationalStatus.replace(/_/g, ' ')}
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {hospitalStatus.occupiedBeds}/{hospitalStatus.totalBeds} Beds
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatPercentage(hospitalStatus.occupancyRate)} Occupancy
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {formatNumber(hospitalStatus.averageWaitTime)} min Wait
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Real-Time Patient Flow & Clinical Operations
          </div>
        </div>
      </div>

      {/* Hospital Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">BED OCCUPANCY</div>
              <div className="text-2xl font-bold text-green-100">
                {formatPercentage(hospitalStatus.occupancyRate)}
              </div>
              <div className="text-xs text-green-300">
                {hospitalStatus.occupiedBeds} / {hospitalStatus.totalBeds} beds
              </div>
            </div>
            <div className="text-3xl opacity-60">🛏️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">ED STATUS</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatPercentage(edOccupancyRate)}
              </div>
              <div className="text-xs text-blue-300">
                {patientFlowManagement.emergency_department.occupied_ed_beds} / {patientFlowManagement.emergency_department.total_ed_beds} ED beds
              </div>
            </div>
            <div className="text-3xl opacity-60">🚑</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ICU CAPACITY</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatPercentage(icuOccupancyRate)}
              </div>
              <div className="text-xs text-purple-300">
                {patientFlowManagement.inpatient_units.intensive_care_unit.occupied_icu_beds} / {patientFlowManagement.inpatient_units.intensive_care_unit.total_icu_beds} ICU beds
              </div>
            </div>
            <div className="text-3xl opacity-60">🏥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TOTAL PATIENTS</div>
              <div className="text-2xl font-bold text-orange-100">
                {hospitalStatus.totalPatients}
              </div>
              <div className="text-xs text-orange-300">
                Active patient census
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>
      </div>

      {/* Patient Flow Performance Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 PATIENT FLOW & CLINICAL PERFORMANCE TRENDS (24 HOURS)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={healthcareHistory}>
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
              dataKey="bed_occupancy"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Bed Occupancy %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="ed_volume" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="ED Volume"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="icu_occupancy" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="ICU Occupancy %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="surgery_cases" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Surgery Cases"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="average_wait_time" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Wait Time (min)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="patient_satisfaction" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Satisfaction %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="discharge_rate" 
              stroke="#84CC16" 
              strokeWidth={2}
              name="Discharges"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Patient Flow Management & Clinical Operations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Flow Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚑 PATIENT FLOW & BED MANAGEMENT
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Emergency Department</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">ED Beds:</span>
                  <span className="text-blue-400">{patientFlowManagement.emergency_department.occupied_ed_beds}/{patientFlowManagement.emergency_department.total_ed_beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ED Occupancy:</span>
                  <span className="text-green-400">{formatPercentage(edOccupancyRate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Wait Time:</span>
                  <span className="text-purple-400">{formatNumber(patientFlowManagement.emergency_department.average_wait_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">LWBS Rate:</span>
                  <span className="text-orange-400">{formatPercentage(patientFlowManagement.emergency_department.left_without_being_seen_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Diversions Today:</span>
                  <span className="text-red-400">{patientFlowManagement.emergency_department.ambulance_diversions_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Trauma Cases:</span>
                  <span className="text-yellow-400">{patientFlowManagement.emergency_department.trauma_cases_today}</span>
                </div>
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Triage Levels: </span>
                  <span className="text-red-400">L1:{patientFlowManagement.emergency_department.triage_levels.level_1_critical}</span>
                  <span className="text-orange-400"> L2:{patientFlowManagement.emergency_department.triage_levels.level_2_emergent}</span>
                  <span className="text-yellow-400"> L3:{patientFlowManagement.emergency_department.triage_levels.level_3_urgent}</span>
                  <span className="text-green-400"> L4:{patientFlowManagement.emergency_department.triage_levels.level_4_semi_urgent}</span>
                  <span className="text-blue-400"> L5:{patientFlowManagement.emergency_department.triage_levels.level_5_non_urgent}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Intensive Care Unit</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">ICU Beds:</span>
                  <span className="text-blue-400">{patientFlowManagement.inpatient_units.intensive_care_unit.occupied_icu_beds}/{patientFlowManagement.inpatient_units.intensive_care_unit.total_icu_beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ICU Occupancy:</span>
                  <span className="text-green-400">{formatPercentage(icuOccupancyRate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Ventilators:</span>
                  <span className="text-purple-400">{patientFlowManagement.inpatient_units.intensive_care_unit.ventilators_in_use}/{patientFlowManagement.inpatient_units.intensive_care_unit.ventilator_beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg ICU Stay:</span>
                  <span className="text-orange-400">{formatNumber(patientFlowManagement.inpatient_units.intensive_care_unit.average_icu_stay_days)} days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Mortality Rate:</span>
                  <span className="text-red-400">{formatPercentage(patientFlowManagement.inpatient_units.intensive_care_unit.icu_mortality_rate)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Bed Management</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Turnover Time:</span>
                  <span className="text-blue-400">{formatNumber(patientFlowManagement.bed_management.bed_turnover_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Housekeeping Response:</span>
                  <span className="text-green-400">{formatNumber(patientFlowManagement.bed_management.housekeeping_response_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Bed Assignment:</span>
                  <span className="text-purple-400">{formatNumber(patientFlowManagement.bed_management.bed_assignment_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Discharge Planning:</span>
                  <span className="text-orange-400">{formatPercentage(patientFlowManagement.bed_management.discharge_planning_efficiency)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">30-Day Readmission:</span>
                  <span className="text-red-400">{formatPercentage(patientFlowManagement.bed_management.readmission_rate_30_day)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Patient Satisfaction:</span>
                  <span className="text-cyan-400">{formatNumber(patientFlowManagement.bed_management.patient_satisfaction_score)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Operations */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏥 CLINICAL OPERATIONS & SERVICES
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Surgical Services</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">OR Utilization:</span>
                  <span className="text-blue-400">{formatPercentage(clinicalOperations.surgical_services.or_utilization_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Scheduled Today:</span>
                  <span className="text-green-400">{clinicalOperations.surgical_services.surgeries_scheduled_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Completed:</span>
                  <span className="text-purple-400">{clinicalOperations.surgical_services.surgeries_completed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">In Progress:</span>
                  <span className="text-orange-400">{clinicalOperations.surgical_services.surgeries_in_progress}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency Cases:</span>
                  <span className="text-red-400">{clinicalOperations.surgical_services.emergency_surgeries}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Avg Case Length:</span>
                  <span className="text-cyan-400">{clinicalOperations.surgical_services.average_case_length_minutes} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">On-Time Starts:</span>
                  <span className="text-yellow-400">{formatPercentage(clinicalOperations.surgical_services.first_case_on_time_starts)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Laboratory Services</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Tests Today:</span>
                  <span className="text-blue-400">{formatLargeNumber(clinicalOperations.laboratory_services.lab_tests_today)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">STAT Results:</span>
                  <span className="text-green-400">{formatNumber(clinicalOperations.laboratory_services.stat_lab_results_avg_minutes)} min avg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Routine Results:</span>
                  <span className="text-purple-400">{formatNumber(clinicalOperations.laboratory_services.routine_lab_results_avg_hours)} hr avg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Micro Cultures:</span>
                  <span className="text-orange-400">{clinicalOperations.laboratory_services.microbiology_cultures}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Blood Bank Units:</span>
                  <span className="text-red-400">{clinicalOperations.laboratory_services.blood_bank_units_available}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Quality Score:</span>
                  <span className="text-cyan-400">{formatPercentage(clinicalOperations.laboratory_services.lab_quality_score)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Critical Alerts:</span>
                  <span className="text-yellow-400">{clinicalOperations.laboratory_services.critical_value_alerts}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Pharmacy Operations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Meds Dispensed:</span>
                  <span className="text-blue-400">{formatLargeNumber(clinicalOperations.pharmacy_operations.medications_dispensed_today)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Medication Errors:</span>
                  <span className="text-green-400">{clinicalOperations.pharmacy_operations.medication_errors}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-purple-400">{formatNumber(clinicalOperations.pharmacy_operations.pharmacy_response_time_minutes)} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Controlled Substances:</span>
                  <span className={`${getStatusColor(clinicalOperations.pharmacy_operations.controlled_substances_count)?.split(' ')[0] || 'text-green-400'}`}>
                    {clinicalOperations.pharmacy_operations.controlled_substances_count}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Inventory Status:</span>
                  <span className={`${getStatusColor(clinicalOperations.pharmacy_operations.drug_inventory_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {clinicalOperations.pharmacy_operations.drug_inventory_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Clinical Interventions:</span>
                  <span className="text-orange-400">{clinicalOperations.pharmacy_operations.clinical_interventions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Med Reconciliation:</span>
                  <span className="text-cyan-400">{formatPercentage(clinicalOperations.pharmacy_operations.medication_reconciliation_rate)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Metrics & Resource Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quality Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 QUALITY METRICS & PATIENT SAFETY
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Patient Safety</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Infection Control:</span>
                  <span className="text-blue-400">{formatPercentage(qualityMetrics.patient_safety.infection_control_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hand Hygiene:</span>
                  <span className="text-green-400">{formatPercentage(qualityMetrics.patient_safety.hand_hygiene_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Falls Today:</span>
                  <span className="text-red-400">{qualityMetrics.patient_safety.fall_incidents_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Med Safety Score:</span>
                  <span className="text-purple-400">{formatPercentage(qualityMetrics.patient_safety.medication_safety_score)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pressure Ulcers:</span>
                  <span className="text-orange-400">{formatNumber(qualityMetrics.patient_safety.pressure_ulcer_rate)} per 1k</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CAUTI Rate:</span>
                  <span className="text-cyan-400">{formatNumber(qualityMetrics.patient_safety.catheter_associated_uti_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CLABSI Rate:</span>
                  <span className="text-yellow-400">{formatNumber(qualityMetrics.patient_safety.central_line_infection_rate)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Clinical Outcomes</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mortality Index:</span>
                  <span className="text-blue-400">{formatNumber(qualityMetrics.clinical_outcomes.mortality_index, 2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Patient Satisfaction:</span>
                  <span className="text-green-400">{formatNumber(qualityMetrics.clinical_outcomes.patient_satisfaction_hcahps)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Core Measures:</span>
                  <span className="text-purple-400">{formatPercentage(qualityMetrics.clinical_outcomes.core_measures_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sepsis Bundle:</span>
                  <span className="text-orange-400">{formatPercentage(qualityMetrics.clinical_outcomes.sepsis_bundle_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Stroke Care:</span>
                  <span className="text-cyan-400">{formatPercentage(qualityMetrics.clinical_outcomes.stroke_care_measures)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Heart Attack Care:</span>
                  <span className="text-yellow-400">{formatPercentage(qualityMetrics.clinical_outcomes.heart_attack_care_measures)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Regulatory Compliance</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Joint Commission:</span>
                  <span className="text-blue-400">{formatPercentage(qualityMetrics.regulatory_compliance.joint_commission_readiness)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CMS Quality:</span>
                  <span className="text-green-400">{formatPercentage(qualityMetrics.regulatory_compliance.cms_quality_measures)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">DNV Status:</span>
                  <span className={`${getStatusColor(qualityMetrics.regulatory_compliance.dnv_accreditation_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {qualityMetrics.regulatory_compliance.dnv_accreditation_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fire Safety:</span>
                  <span className="text-purple-400">{formatPercentage(qualityMetrics.regulatory_compliance.fire_safety_compliance)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Environment of Care:</span>
                  <span className="text-orange-400">{formatPercentage(qualityMetrics.regulatory_compliance.environment_of_care_score)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data Privacy:</span>
                  <span className="text-cyan-400">{formatPercentage(qualityMetrics.regulatory_compliance.data_privacy_compliance)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👥 RESOURCE MANAGEMENT & EMERGENCY PREPAREDNESS
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Staffing Levels</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Nursing Staff:</span>
                  <span className="text-blue-400">{resourceManagement.staffing_levels.nursing_staff_present}/{resourceManagement.staffing_levels.nursing_staff_scheduled}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Nursing Fill Rate:</span>
                  <span className="text-green-400">{formatPercentage(resourceManagement.staffing_levels.nursing_fill_rate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Physician Coverage:</span>
                  <span className={`${getStatusColor(resourceManagement.staffing_levels.physician_coverage)?.split(' ')[0] || 'text-green-400'}`}>
                    {resourceManagement.staffing_levels.physician_coverage}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Respiratory Therapists:</span>
                  <span className="text-purple-400">{resourceManagement.staffing_levels.respiratory_therapists}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Overtime Hours:</span>
                  <span className="text-orange-400">{formatNumber(resourceManagement.staffing_levels.overtime_hours_today)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Agency Staff:</span>
                  <span className="text-red-400">{resourceManagement.staffing_levels.agency_staff_today}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Equipment Status</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Ventilators:</span>
                  <span className="text-blue-400">{resourceManagement.equipment_status.ventilators_available}/{resourceManagement.equipment_status.ventilators_total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">IV Pumps:</span>
                  <span className="text-green-400">{resourceManagement.equipment_status.iv_pumps_available}/{resourceManagement.equipment_status.iv_pumps_total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Patient Monitors:</span>
                  <span className="text-purple-400">{resourceManagement.equipment_status.patient_monitors_available}/{resourceManagement.equipment_status.patient_monitors_total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Wheelchairs:</span>
                  <span className="text-orange-400">{resourceManagement.equipment_status.wheelchairs_available}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Maintenance Due:</span>
                  <span className="text-red-400">{resourceManagement.equipment_status.equipment_maintenance_due}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Biomedical Alerts:</span>
                  <span className="text-yellow-400">{resourceManagement.equipment_status.biomedical_alerts}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Emergency Preparedness</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency Status:</span>
                  <span className={`${getStatusColor(emergencyPreparedness.disaster_response.emergency_management_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {emergencyPreparedness.disaster_response.emergency_management_status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Surge Capacity:</span>
                  <span className="text-blue-400">{emergencyPreparedness.disaster_response.surge_capacity_available}/{emergencyPreparedness.disaster_response.surge_capacity_beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Isolation Rooms:</span>
                  <span className="text-green-400">{emergencyPreparedness.infection_prevention.isolation_rooms_available}/{emergencyPreparedness.infection_prevention.isolation_rooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Negative Pressure:</span>
                  <span className="text-purple-400">{emergencyPreparedness.infection_prevention.negative_pressure_operational}/{emergencyPreparedness.infection_prevention.negative_pressure_rooms}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Incidents:</span>
                  <span className="text-orange-400">{emergencyPreparedness.security_operations.security_incidents_today}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Backup Power:</span>
                  <span className={`${getStatusColor(emergencyPreparedness.disaster_response.backup_power_status)?.split(' ')[0] || 'text-green-400'}`}>
                    {emergencyPreparedness.disaster_response.backup_power_status.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareOperationsCenter;