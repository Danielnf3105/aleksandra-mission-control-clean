// HospitalOperations.js - Hospital Operations Center & Healthcare Management Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HospitalOperations = () => {
  const [hospitalStatus, setHospitalStatus] = useState({
    operationalStatus: 'OPERATIONAL',
    totalBeds: 450,
    occupiedBeds: 387,
    availableBeds: 63,
    occupancyRate: 86.0,
    erWaitTime: 18, // minutes
    activePatientsED: 24,
    surgeries: {
      scheduled: 32,
      inProgress: 8,
      completed: 15
    },
    staffingLevel: 'ADEQUATE',
    lastUpdate: Date.now()
  });

  const [departments, setDepartments] = useState([
    {
      id: 'emergency',
      name: 'Emergency Department',
      status: 'ACTIVE',
      capacity: 45,
      current_patients: 24,
      wait_time: 18, // minutes average
      acuity_levels: {
        level_1: 2,  // Critical
        level_2: 4,  // Emergent  
        level_3: 8,  // Urgent
        level_4: 7,  // Less urgent
        level_5: 3   // Non-urgent
      },
      staff_on_duty: {
        physicians: 6,
        nurses: 12,
        techs: 4,
        registration: 2
      },
      metrics: {
        arrival_rate: 2.8, // patients per hour
        discharge_rate: 2.5,
        left_without_being_seen: 3.2, // percentage
        door_to_provider: 12, // minutes average
        throughput: 94.6, // efficiency percentage
        satisfaction_score: 4.2 // out of 5
      },
      alerts: ['High acuity patient influx', 'Wait time approaching target'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'icu',
      name: 'Intensive Care Unit',
      status: 'OPERATIONAL',
      capacity: 24,
      current_patients: 22,
      occupancy: 91.7,
      staff_on_duty: {
        intensivists: 3,
        nurses: 8,
        respiratory_therapists: 2,
        pharmacists: 1
      },
      patient_acuity: {
        ventilator_support: 8,
        vasopressor_support: 5,
        dialysis: 3,
        post_surgical: 6
      },
      metrics: {
        average_los: 4.8, // days
        mortality_rate: 8.3, // percentage
        readmission_rate: 12.1,
        ventilator_days: 2.3, // average
        infection_rate: 2.8,
        nurse_patient_ratio: 2.75 // nurses per patient
      },
      equipment_status: {
        ventilators: { total: 16, available: 4, maintenance: 0 },
        monitors: { total: 24, functional: 23, alerts: 1 },
        pumps: { total: 48, operational: 46, scheduled_maintenance: 2 }
      },
      alerts: ['Near capacity - prepare overflow protocol'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'surgery',
      name: 'Surgical Services',
      status: 'OPERATIONAL',
      or_suites: 16,
      active_surgeries: 8,
      scheduled_today: 32,
      completed_today: 15,
      staff_on_duty: {
        surgeons: 12,
        anesthesiologists: 8,
        or_nurses: 24,
        techs: 16
      },
      surgery_types: {
        orthopedic: { scheduled: 8, active: 2, completed: 4 },
        cardiac: { scheduled: 4, active: 2, completed: 2 },
        general: { scheduled: 12, active: 3, completed: 6 },
        neurosurgery: { scheduled: 3, active: 1, completed: 1 },
        emergency: { scheduled: 5, active: 0, completed: 2 }
      },
      metrics: {
        on_time_starts: 87.5, // percentage
        turnover_time: 23, // minutes average
        case_duration_variance: '+8.2%', // vs scheduled
        cancellation_rate: 2.3,
        utilization_rate: 78.4,
        patient_satisfaction: 4.6
      },
      equipment_status: {
        anesthesia_machines: { total: 16, operational: 15, maintenance: 1 },
        surgical_lights: { total: 16, functional: 16 },
        electrosurgical_units: { total: 20, operational: 19, repair: 1 }
      },
      alerts: ['OR 7 equipment maintenance complete', 'High utilization - extend hours if needed'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'medical_surgical',
      name: 'Medical/Surgical Unit',
      status: 'OPERATIONAL',
      capacity: 180,
      current_patients: 156,
      occupancy: 86.7,
      staff_on_duty: {
        physicians: 8,
        nurses: 22,
        nursing_assistants: 12,
        case_managers: 3
      },
      patient_categories: {
        medical: 89,
        post_surgical: 45,
        observation: 22
      },
      metrics: {
        average_los: 3.6, // days
        readmission_rate: 8.9,
        discharge_before_noon: 67.3, // percentage
        patient_satisfaction: 4.3,
        nurse_patient_ratio: 7.1, // patients per nurse
        falls_per_1000: 1.8
      },
      discharge_planning: {
        discharges_today: 28,
        planned_tomorrow: 31,
        pending_placement: 8,
        home_health_arranged: 12
      },
      alerts: ['8 patients pending discharge placement'],
      lastUpdate: Date.now() - 4 * 60 * 1000
    },
    {
      id: 'maternity',
      name: 'Maternity Ward',
      status: 'OPERATIONAL',
      capacity: 32,
      current_patients: 19,
      occupancy: 59.4,
      staff_on_duty: {
        obstetricians: 4,
        nurses: 8,
        midwives: 2,
        neonatal_specialists: 2
      },
      current_activity: {
        labor_rooms: { capacity: 8, occupied: 3 },
        delivery_rooms: { capacity: 4, occupied: 1 },
        postpartum: { capacity: 20, occupied: 15 },
        nicu_admissions_today: 2
      },
      metrics: {
        births_today: 6,
        cesarean_rate: 28.4, // percentage
        patient_satisfaction: 4.8,
        average_los: 2.1, // days
        breastfeeding_initiation: 94.2,
        complications_rate: 3.1
      },
      safety_metrics: {
        hand_hygiene_compliance: 97.8,
        medication_errors: 0,
        patient_identification_compliance: 99.6
      },
      alerts: ['6 births today - above average', '1 active delivery in progress'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    }
  ]);

  const [patientFlow, setPatientFlow] = useState({
    admissions_today: 47,
    discharges_today: 52,
    transfers_in: 12,
    transfers_out: 8,
    emergency_admissions: 18,
    scheduled_admissions: 29,
    average_los: 4.2, // days
    readmission_rate_30d: 9.8, // percentage
    discharge_planning: {
      pending_discharges: 23,
      delayed_discharges: 6,
      home_health_needed: 15,
      skilled_nursing_placement: 8
    }
  });

  const [staffingStatus, setStaffingStatus] = useState({
    physicians: {
      scheduled: 45,
      present: 42,
      call_coverage: 8,
      utilization: 93.3
    },
    nursing: {
      scheduled: 120,
      present: 115,
      patient_ratio: 6.2,
      overtime_hours: 28,
      agency_nurses: 5
    },
    support_staff: {
      respiratory_therapy: { scheduled: 12, present: 11 },
      pharmacy: { scheduled: 8, present: 7 },
      radiology: { scheduled: 15, present: 14 },
      laboratory: { scheduled: 18, present: 17 }
    },
    overall_staffing: 'ADEQUATE'
  });

  const [qualityMetrics, setQualityMetrics] = useState({
    patient_safety: {
      falls_rate: 2.1, // per 1000 patient days
      pressure_ulcers: 0.8,
      medication_errors: 1.2,
      hospital_acquired_infections: 1.9,
      surgical_site_infections: 0.7
    },
    patient_satisfaction: {
      overall_rating: 4.4, // out of 5
      communication: 4.2,
      responsiveness: 4.1,
      environment: 4.5,
      discharge_planning: 4.3,
      recommend_hospital: 87.6 // percentage
    },
    clinical_outcomes: {
      mortality_rate: 2.8, // percentage
      readmission_rate: 9.8,
      average_los: 4.2, // days
      complication_rate: 3.4,
      infection_prevention_compliance: 96.8
    },
    regulatory_compliance: {
      core_measures: 94.7, // percentage compliance
      joint_commission_score: 92.3,
      cms_star_rating: 4.0,
      dnv_accreditation: 'CURRENT'
    }
  });

  const [resourceUtilization, setResourceUtilization] = useState({
    bed_management: {
      total_beds: 450,
      staffed_beds: 430,
      occupied_beds: 387,
      available_beds: 43,
      beds_out_of_service: 20,
      turnover_time: 45 // minutes average
    },
    operating_rooms: {
      total_ors: 16,
      scheduled_cases: 32,
      emergency_cases: 5,
      utilization_rate: 78.4,
      block_time_utilization: 82.1
    },
    diagnostic_services: {
      radiology: {
        scheduled_exams: 145,
        completed: 98,
        pending: 47,
        equipment_downtime: 2.1 // hours
      },
      laboratory: {
        tests_ordered: 2847,
        results_pending: 342,
        turnaround_time: 23, // minutes average
        critical_values: 18
      },
      pharmacy: {
        prescriptions_filled: 1897,
        medication_reconciliation: 94.6, // percentage
        adverse_drug_events: 2
      }
    }
  });

  const [patientFlowHistory, setPatientFlowHistory] = useState([]);

  const generatePatientFlowHistory = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        admissions: Math.floor(1 + Math.random() * 4),
        discharges: Math.floor(1 + Math.random() * 4),
        er_patients: Math.floor(15 + Math.random() * 20),
        bed_occupancy: 82 + Math.random() * 10,
        wait_time: 12 + Math.random() * 15
      });
    }
    return data;
  };

  useEffect(() => {
    setPatientFlowHistory(generatePatientFlowHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update hospital status
      setHospitalStatus(prev => ({
        ...prev,
        occupiedBeds: Math.max(350, Math.min(430, prev.occupiedBeds + Math.floor((Math.random() - 0.5) * 6))),
        erWaitTime: Math.max(10, Math.min(35, prev.erWaitTime + (Math.random() - 0.5) * 4)),
        activePatientsED: Math.max(15, Math.min(40, prev.activePatientsED + Math.floor((Math.random() - 0.5) * 3))),
        lastUpdate: Date.now()
      }));

      // Update departments
      setDepartments(prev => prev.map(dept => ({
        ...dept,
        current_patients: Math.max(dept.capacity * 0.6, Math.min(dept.capacity * 0.95, 
          dept.current_patients + Math.floor((Math.random() - 0.5) * 2))),
        lastUpdate: Date.now()
      })));

    }, 15000);

    return () => clearInterval(interval);
  }, []);

  // Calculate derived values
  const availableBeds = hospitalStatus.totalBeds - hospitalStatus.occupiedBeds;
  const occupancyRate = (hospitalStatus.occupiedBeds / hospitalStatus.totalBeds) * 100;

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL':
      case 'ACTIVE':
      case 'ADEQUATE':
      case 'CURRENT':
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'BUSY':
      case 'HIGH':
      case 'MODERATE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CRITICAL':
      case 'OVERLOAD':
      case 'LOW': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MAINTENANCE':
      case 'SCHEDULED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getOccupancyColor = (rate) => {
    if (rate >= 95) return 'text-red-400';
    if (rate >= 85) return 'text-yellow-400';
    if (rate >= 70) return 'text-green-400';
    return 'text-blue-400';
  };

  const formatNumber = (num, decimals = 0) => {
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
          🏥 HOSPITAL OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {availableBeds} Beds Available
          </div>
          <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono border border-orange-500/30">
            {formatNumber(occupancyRate)}% Occupancy
          </div>
          <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono border border-red-500/30">
            {hospitalStatus.erWaitTime}min ER Wait
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Healthcare Management & Patient Flow
          </div>
        </div>
      </div>

      {/* Hospital Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">BED CAPACITY</div>
              <div className="text-2xl font-bold text-blue-100">
                {availableBeds}
              </div>
              <div className="text-xs text-blue-300">
                Available of {hospitalStatus.totalBeds}
              </div>
            </div>
            <div className="text-3xl opacity-60">🛏️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">OCCUPANCY RATE</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatNumber(occupancyRate)}%
              </div>
              <div className="text-xs text-orange-300">
                {hospitalStatus.occupiedBeds} Occupied
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-200">ER WAIT TIME</div>
              <div className="text-2xl font-bold text-red-100">
                {hospitalStatus.erWaitTime}
              </div>
              <div className="text-xs text-red-300">
                Minutes Average
              </div>
            </div>
            <div className="text-3xl opacity-60">🚑</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SURGERIES TODAY</div>
              <div className="text-2xl font-bold text-green-100">
                {hospitalStatus.surgeries.completed + hospitalStatus.surgeries.inProgress}
              </div>
              <div className="text-xs text-green-300">
                {hospitalStatus.surgeries.inProgress} In Progress
              </div>
            </div>
            <div className="text-3xl opacity-60">🏥</div>
          </div>
        </div>
      </div>

      {/* Department Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏢 DEPARTMENT STATUS & PATIENT FLOW MONITORING
        </h3>
        <div className="space-y-4">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{dept.name}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(dept.status)}`}>
                    {dept.status}
                  </span>
                  {dept.alerts && dept.alerts.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-black">
                      {dept.alerts.length} alert{dept.alerts.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {formatTime(dept.lastUpdate)}
                </div>
              </div>

              {/* Capacity and Occupancy */}
              <div className="text-xs mb-3">
                <span className="text-gray-400">Capacity: </span>
                <span className="text-blue-400">{dept.current_patients}</span>
                <span className="text-gray-400">/</span>
                <span className="text-green-400">{dept.capacity}</span>
                {dept.occupancy && (
                  <>
                    <span className="text-gray-400"> | Occupancy: </span>
                    <span className={getOccupancyColor(dept.occupancy)}>{formatNumber(dept.occupancy)}%</span>
                  </>
                )}
                {dept.wait_time && (
                  <>
                    <span className="text-gray-400"> | Wait Time: </span>
                    <span className="text-orange-400">{dept.wait_time} min</span>
                  </>
                )}
              </div>

              {/* Department-Specific Details */}
              {dept.id === 'emergency' && dept.acuity_levels && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Acuity: </span>
                  <span className="text-red-400">L1: {dept.acuity_levels.level_1}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">L2: {dept.acuity_levels.level_2}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-yellow-400">L3: {dept.acuity_levels.level_3}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">L4: {dept.acuity_levels.level_4}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">L5: {dept.acuity_levels.level_5}</span>
                </div>
              )}

              {dept.id === 'icu' && dept.patient_acuity && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Acuity: </span>
                  <span className="text-red-400">Vent: {dept.patient_acuity.ventilator_support}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">Vaso: {dept.patient_acuity.vasopressor_support}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Dialysis: {dept.patient_acuity.dialysis}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">Post-Surg: {dept.patient_acuity.post_surgical}</span>
                </div>
              )}

              {dept.id === 'surgery' && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">ORs: </span>
                  <span className="text-green-400">{dept.active_surgeries}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{dept.or_suites} active</span>
                  <span className="text-gray-400"> | Scheduled: </span>
                  <span className="text-purple-400">{dept.scheduled_today}</span>
                  <span className="text-gray-400"> | Completed: </span>
                  <span className="text-cyan-400">{dept.completed_today}</span>
                  <span className="text-gray-400"> | Utilization: </span>
                  <span className="text-orange-400">{formatNumber(dept.metrics.utilization_rate)}%</span>
                </div>
              )}

              {dept.id === 'maternity' && dept.current_activity && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Activity: </span>
                  <span className="text-blue-400">Labor: {dept.current_activity.labor_rooms.occupied}/{dept.current_activity.labor_rooms.capacity}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">Delivery: {dept.current_activity.delivery_rooms.occupied}/{dept.current_activity.delivery_rooms.capacity}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-purple-400">Births Today: {dept.metrics.births_today}</span>
                </div>
              )}

              {/* Staff Information */}
              {dept.staff_on_duty && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Staff: </span>
                  {Object.entries(dept.staff_on_duty).map(([role, count], index) => (
                    <span key={role}>
                      <span className="text-cyan-400">{role.replace(/_/g, ' ')}: {count}</span>
                      {index < Object.entries(dept.staff_on_duty).length - 1 && <span className="text-gray-400"> | </span>}
                    </span>
                  ))}
                </div>
              )}

              {/* Key Metrics */}
              {dept.metrics && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Metrics: </span>
                  {dept.metrics.average_los && (
                    <>
                      <span className="text-green-400">Avg LOS: {formatNumber(dept.metrics.average_los, 1)}d</span>
                      <span className="text-gray-400"> | </span>
                    </>
                  )}
                  {dept.metrics.patient_satisfaction && (
                    <>
                      <span className="text-blue-400">Satisfaction: {formatNumber(dept.metrics.patient_satisfaction, 1)}/5</span>
                      <span className="text-gray-400"> | </span>
                    </>
                  )}
                  {dept.metrics.throughput && (
                    <span className="text-purple-400">Throughput: {formatNumber(dept.metrics.throughput)}%</span>
                  )}
                  {dept.metrics.on_time_starts && (
                    <span className="text-orange-400">On-Time: {formatNumber(dept.metrics.on_time_starts)}%</span>
                  )}
                </div>
              )}

              {dept.alerts && dept.alerts.length > 0 && (
                <div className="text-xs">
                  <div className="text-gray-400">Alerts:</div>
                  {dept.alerts.map((alert, index) => (
                    <div key={index} className="text-yellow-400">🏥 {alert}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Patient Flow and Quality Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patient Flow Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PATIENT FLOW TRENDS (24 HOURS)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={patientFlowHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={10}/>
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
              <Line 
                type="monotone" 
                dataKey="admissions" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Admissions/hr"
              />
              <Line 
                type="monotone" 
                dataKey="discharges" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Discharges/hr"
              />
              <Line 
                type="monotone" 
                dataKey="er_patients" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="ER Patients"
              />
              <Line 
                type="monotone" 
                dataKey="bed_occupancy" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Bed Occupancy %"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Quality Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏆 QUALITY METRICS & PATIENT SAFETY
          </h3>
          
          {/* Patient Safety */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Patient Safety Indicators</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Falls Rate</div>
                <div className="text-green-400">{formatNumber(qualityMetrics.patient_safety.falls_rate, 1)}/1000</div>
              </div>
              <div>
                <div className="text-gray-400">Med Errors</div>
                <div className="text-blue-400">{formatNumber(qualityMetrics.patient_safety.medication_errors, 1)}/1000</div>
              </div>
              <div>
                <div className="text-gray-400">HAI Rate</div>
                <div className="text-purple-400">{formatNumber(qualityMetrics.patient_safety.hospital_acquired_infections, 1)}/1000</div>
              </div>
              <div>
                <div className="text-gray-400">Pressure Ulcers</div>
                <div className="text-orange-400">{formatNumber(qualityMetrics.patient_safety.pressure_ulcers, 1)}/1000</div>
              </div>
            </div>
          </div>

          {/* Patient Satisfaction */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Patient Satisfaction Scores</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Overall Rating:</span>
                <span className="text-green-400">{formatNumber(qualityMetrics.patient_satisfaction.overall_rating, 1)}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Communication:</span>
                <span className="text-blue-400">{formatNumber(qualityMetrics.patient_satisfaction.communication, 1)}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Responsiveness:</span>
                <span className="text-purple-400">{formatNumber(qualityMetrics.patient_satisfaction.responsiveness, 1)}/5</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Recommend Hospital:</span>
                <span className="text-orange-400">{formatNumber(qualityMetrics.patient_satisfaction.recommend_hospital)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Utilization and Staffing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Staffing Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👥 STAFFING STATUS & RESOURCE ALLOCATION
          </h3>
          
          {/* Physician Staffing */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Physician Coverage</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Present/Scheduled</div>
                <div className="text-green-400">{staffingStatus.physicians.present}/{staffingStatus.physicians.scheduled}</div>
              </div>
              <div>
                <div className="text-gray-400">Call Coverage</div>
                <div className="text-blue-400">{staffingStatus.physicians.call_coverage}</div>
              </div>
              <div>
                <div className="text-gray-400">Utilization</div>
                <div className="text-purple-400">{formatNumber(staffingStatus.physicians.utilization)}%</div>
              </div>
              <div>
                <div className="text-gray-400">Overall Status</div>
                <div className={`${getStatusColor(staffingStatus.overall_staffing).split(' ')[0]}`}>
                  {staffingStatus.overall_staffing}
                </div>
              </div>
            </div>
          </div>

          {/* Nursing Staffing */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Nursing Staff</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Present/Scheduled</div>
                <div className="text-green-400">{staffingStatus.nursing.present}/{staffingStatus.nursing.scheduled}</div>
              </div>
              <div>
                <div className="text-gray-400">Patient Ratio</div>
                <div className="text-orange-400">{formatNumber(staffingStatus.nursing.patient_ratio, 1)}:1</div>
              </div>
              <div>
                <div className="text-gray-400">Overtime Hours</div>
                <div className="text-yellow-400">{staffingStatus.nursing.overtime_hours}</div>
              </div>
              <div>
                <div className="text-gray-400">Agency Nurses</div>
                <div className="text-cyan-400">{staffingStatus.nursing.agency_nurses}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Resource Utilization */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏥 RESOURCE UTILIZATION & CAPACITY MANAGEMENT
          </h3>
          
          {/* Bed Management */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Bed Management</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Available Beds</div>
                <div className="text-green-400">{resourceUtilization.bed_management.available_beds}</div>
              </div>
              <div>
                <div className="text-gray-400">Out of Service</div>
                <div className="text-red-400">{resourceUtilization.bed_management.beds_out_of_service}</div>
              </div>
              <div>
                <div className="text-gray-400">Turnover Time</div>
                <div className="text-purple-400">{resourceUtilization.bed_management.turnover_time}min</div>
              </div>
              <div>
                <div className="text-gray-400">Staffed Beds</div>
                <div className="text-blue-400">{resourceUtilization.bed_management.staffed_beds}</div>
              </div>
            </div>
          </div>

          {/* Diagnostic Services */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Diagnostic Services</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Radiology Pending:</span>
                <span className="text-orange-400">{resourceUtilization.diagnostic_services.radiology.pending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Lab Results Pending:</span>
                <span className="text-yellow-400">{resourceUtilization.diagnostic_services.laboratory.results_pending}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Lab Turnaround:</span>
                <span className="text-green-400">{resourceUtilization.diagnostic_services.laboratory.turnaround_time}min</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Prescriptions Filled:</span>
                <span className="text-cyan-400">{resourceUtilization.diagnostic_services.pharmacy.prescriptions_filled}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 HOSPITAL PERFORMANCE KPIs & OPERATIONAL METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Bed Occupancy</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(occupancyRate)}%
            </div>
            <div className="text-green-400 text-xs">optimal range</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">ER Wait Time</div>
            <div className="text-white font-bold text-lg">
              {hospitalStatus.erWaitTime}
            </div>
            <div className="text-orange-400 text-xs">minutes average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Patient Satisfaction</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(qualityMetrics.patient_satisfaction.overall_rating, 1)}
            </div>
            <div className="text-blue-400 text-xs">out of 5</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Average LOS</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(qualityMetrics.clinical_outcomes.average_los, 1)}
            </div>
            <div className="text-purple-400 text-xs">days</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Readmission Rate</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(qualityMetrics.clinical_outcomes.readmission_rate, 1)}%
            </div>
            <div className="text-yellow-400 text-xs">30-day rate</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Staffing Level</div>
            <div className="text-white font-bold text-lg">
              {staffingStatus.overall_staffing}
            </div>
            <div className="text-cyan-400 text-xs">operational status</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalOperations;