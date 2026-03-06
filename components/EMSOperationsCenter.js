// EMSOperationsCenter.js - Emergency Medical Services Operations Center & Paramedic Dispatch Management
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EMSOperationsCenter = () => {
  const [emsStatus, setEmsStatus] = useState({
    operationalStatus: 'EMS_ACTIVE',
    totalAmbulances: 156,
    ambulancesAvailable: 89,
    ambulancesEnRoute: 45,
    ambulancesOnScene: 22,
    totalCalls: 234,
    highPriorityCalls: 12,
    averageResponseTime: 7.3, // minutes
    averageTransportTime: 18.7, // minutes
    callCompletionRate: 94.8, // percentage
    cardiacArrestSaves: 8,
    lastUpdate: Date.now()
  });

  const [cadSystemMetrics, setCadSystemMetrics] = useState({
    psap_interoperability: {
      connected_psaps: 24,
      cad_to_cad_active: true,
      cross_jurisdictional_calls: 45,
      border_coordination_success: 98.7, // percentage
      virtual_network_online: true,
      unified_dispatch_capability: 'OPERATIONAL',
      interoperability_latency: 156, // milliseconds
      multi_agency_incidents: 18
    },
    call_processing: {
      total_calls_today: 234,
      avg_call_processing_time: 45, // seconds
      priority_1_calls: 12, // life-threatening
      priority_2_calls: 34, // urgent but not life-threatening
      priority_3_calls: 67, // scheduled/routine
      priority_4_calls: 121, // non-emergency
      call_accuracy_rate: 97.3, // percentage
      duplicate_call_detection: 'AI_ENHANCED',
      automatic_location_identification: 99.2 // percentage accuracy
    },
    dispatch_coordination: {
      units_dispatched: 178,
      dispatch_accuracy: 96.8, // percentage
      closest_unit_algorithm: 'OPTIMIZED',
      traffic_aware_routing: 'ACTIVE',
      eta_prediction_accuracy: 94.5, // percentage
      resource_optimization: 'AI_POWERED',
      multi_unit_coordination: 45,
      mutual_aid_requests: 8
    },
    real_time_tracking: {
      gps_equipped_units: 156,
      avl_system_active: true, // Automatic Vehicle Location
      real_time_mapping: 'ENHANCED',
      unit_status_updates: 1578, // updates per hour
      geofencing_alerts: 23,
      route_optimization: 'MACHINE_LEARNING',
      traffic_integration: 'GOOGLE_WAZE_TOMTOM',
      weather_impact_assessment: 'ACTIVE'
    }
  });

  const [ambulanceFleet, setAmbulanceFleet] = useState([
    {
      unit_id: 'AMB_001_ALPHA',
      status: 'AVAILABLE',
      location: 'Station 12 - Downtown',
      crew_type: 'ALS', // Advanced Life Support
      paramedic_lead: 'Sarah Chen, RN',
      emt_partner: 'Mike Rodriguez, EMT-P',
      vehicle_type: 'Type II Ambulance',
      equipment_status: 'FULLY_STOCKED',
      fuel_level: 87, // percentage
      last_maintenance: '2026-03-03',
      response_area: 'Central District',
      years_experience_avg: 8.5
    },
    {
      unit_id: 'AMB_015_BRAVO',
      status: 'EN_ROUTE',
      location: 'Oak Street & 5th Ave',
      crew_type: 'BLS', // Basic Life Support
      paramedic_lead: 'Jennifer Walsh, EMT-B',
      emt_partner: 'David Kim, EMT-I',
      vehicle_type: 'Type I Ambulance',
      equipment_status: 'OPERATIONAL',
      fuel_level: 64, // percentage
      call_priority: 'PRIORITY_2',
      dispatch_time: Date.now() - 4 * 60 * 1000, // 4 minutes ago
      eta_scene: Date.now() + 3 * 60 * 1000, // 3 minutes
      incident_type: 'CHEST_PAIN',
      response_area: 'North District'
    },
    {
      unit_id: 'AMB_032_CHARLIE',
      status: 'ON_SCENE',
      location: 'Memorial Hospital - Emergency',
      crew_type: 'ALS',
      paramedic_lead: 'Robert Martinez, RN',
      emt_partner: 'Lisa Thompson, EMT-P',
      vehicle_type: 'Type III Ambulance',
      equipment_status: 'FULLY_STOCKED',
      fuel_level: 76,
      call_priority: 'PRIORITY_1',
      scene_time: Date.now() - 12 * 60 * 1000, // 12 minutes on scene
      incident_type: 'CARDIAC_ARREST',
      vitals_transmitted: true,
      hospital_notification_sent: true,
      response_area: 'South District'
    },
    {
      unit_id: 'AMB_048_DELTA',
      status: 'TRANSPORTING',
      location: 'I-95 South - Mile 23',
      crew_type: 'ALS',
      paramedic_lead: 'Amanda Foster, RN',
      emt_partner: 'Chris Johnson, EMT-P',
      vehicle_type: 'Type II Ambulance',
      equipment_status: 'IN_USE',
      fuel_level: 52,
      call_priority: 'PRIORITY_2',
      transport_start: Date.now() - 8 * 60 * 1000,
      eta_hospital: Date.now() + 7 * 60 * 1000,
      destination: 'Regional Medical Center',
      patient_status: 'STABLE',
      incident_type: 'MOTOR_VEHICLE_ACCIDENT',
      response_area: 'Highway District'
    },
    {
      unit_id: 'AMB_067_ECHO',
      status: 'OUT_OF_SERVICE',
      location: 'Station 8 - Maintenance Bay',
      crew_type: 'BLS',
      maintenance_type: 'SCHEDULED_INSPECTION',
      maintenance_start: Date.now() - 90 * 60 * 1000,
      estimated_return: Date.now() + 30 * 60 * 1000,
      replacement_unit: 'AMB_089_FOXTROT',
      maintenance_priority: 'ROUTINE',
      response_area: 'East District'
    }
  ]);

  const [medicalProtocols, setMedicalProtocols] = useState({
    life_support_protocols: {
      cardiac_arrest_protocol: 'AHA_2025_GUIDELINES',
      stroke_protocol: 'FAST_PLUS_ASSESSMENT',
      trauma_protocol: 'PHTLS_STANDARDS',
      pediatric_protocol: 'PALS_CERTIFIED',
      maternal_protocol: 'OB_EMERGENCY_READY',
      overdose_protocol: 'NARCAN_STANDING_ORDER',
      respiratory_protocol: 'NIPPV_CAPABLE',
      sepsis_protocol: 'EARLY_RECOGNITION'
    },
    medication_management: {
      controlled_substances_tracked: true,
      narcotic_administration_logged: 'REAL_TIME',
      medication_expiry_monitoring: 'AUTOMATED',
      drug_interactions_alerts: 'AI_POWERED',
      allergy_cross_reference: 'ACTIVE',
      dosage_calculation_assistance: 'WEIGHT_BASED',
      administration_verification: 'DUAL_CHECK',
      inventory_management: 'BARCODE_RFID'
    },
    hospital_coordination: {
      receiving_hospitals: 12,
      bed_availability_real_time: true,
      specialty_capabilities: 'TRAUMA_STROKE_CARDIAC',
      eta_notifications_automatic: true,
      patient_report_transmission: 'ENCRYPTED',
      physician_consultation: 'TELEMED_AVAILABLE',
      diversion_status_monitoring: 'ACTIVE',
      surge_capacity_planning: 'COORDINATED'
    },
    quality_assurance: {
      response_time_compliance: 94.8, // percentage meeting targets
      clinical_outcome_tracking: 'COMPREHENSIVE',
      cardiac_arrest_survival_rate: 23.4, // percentage ROSC
      customer_satisfaction_score: 4.6, // out of 5
      continuing_education_hours: 156, // monthly total
      protocol_compliance_rate: 98.2, // percentage
      peer_review_cases: 23,
      improvement_initiatives: 8
    }
  });

  const [emergencyTypes, setEmergencyTypes] = useState([
    {
      type: 'CARDIAC_EMERGENCY',
      calls_today: 23,
      avg_response_time: 6.8, // minutes
      success_rate: 78.9, // percentage
      priority_level: 'PRIORITY_1',
      specialized_equipment: 'AED_MONITOR_DEFIBRILLATOR',
      protocol: 'ACLS_PROTOCOLS',
      hospital_notification: 'AUTOMATIC',
      typical_crew: 'ALS_REQUIRED'
    },
    {
      type: 'RESPIRATORY_DISTRESS',
      calls_today: 34,
      avg_response_time: 7.2,
      success_rate: 91.3,
      priority_level: 'PRIORITY_2',
      specialized_equipment: 'CPAP_BIPAP_INTUBATION',
      protocol: 'RESPIRATORY_PROTOCOLS',
      hospital_notification: 'CONDITIONAL',
      typical_crew: 'BLS_OR_ALS'
    },
    {
      type: 'TRAUMA_ACCIDENT',
      calls_today: 45,
      avg_response_time: 8.1,
      success_rate: 89.7,
      priority_level: 'PRIORITY_1_OR_2',
      specialized_equipment: 'TRAUMA_KIT_BACKBOARD_COLLAR',
      protocol: 'PHTLS_TRAUMA_PROTOCOLS',
      hospital_notification: 'TRAUMA_CENTER',
      typical_crew: 'ALS_PREFERRED'
    },
    {
      type: 'STROKE_SUSPECTED',
      calls_today: 12,
      avg_response_time: 6.4,
      success_rate: 85.2,
      priority_level: 'PRIORITY_1',
      specialized_equipment: 'STROKE_ASSESSMENT_TOOLS',
      protocol: 'FAST_PLUS_PROTOCOLS',
      hospital_notification: 'STROKE_CENTER',
      typical_crew: 'ALS_REQUIRED'
    },
    {
      type: 'OVERDOSE_POISONING',
      calls_today: 18,
      avg_response_time: 7.9,
      success_rate: 94.1,
      priority_level: 'PRIORITY_1',
      specialized_equipment: 'NARCAN_NALOXONE',
      protocol: 'OVERDOSE_PROTOCOLS',
      hospital_notification: 'EMERGENCY_DEPT',
      typical_crew: 'BLS_SUFFICIENT'
    },
    {
      type: 'PSYCHIATRIC_CRISIS',
      calls_today: 28,
      avg_response_time: 12.3,
      success_rate: 87.5,
      priority_level: 'PRIORITY_3',
      specialized_equipment: 'RESTRAINT_SEDATION',
      protocol: 'CRISIS_INTERVENTION',
      hospital_notification: 'BEHAVIORAL_HEALTH',
      typical_crew: 'ALS_CRISIS_TRAINED'
    },
    {
      type: 'DIABETIC_EMERGENCY',
      calls_today: 21,
      avg_response_time: 8.7,
      success_rate: 96.8,
      priority_level: 'PRIORITY_2',
      specialized_equipment: 'GLUCOMETER_DEXTROSE_GLUCAGON',
      protocol: 'DIABETIC_PROTOCOLS',
      hospital_notification: 'CONDITIONAL',
      typical_crew: 'BLS_OR_ALS'
    },
    {
      type: 'PEDIATRIC_EMERGENCY',
      calls_today: 16,
      avg_response_time: 6.9,
      success_rate: 92.3,
      priority_level: 'PRIORITY_1_OR_2',
      specialized_equipment: 'PEDIATRIC_EQUIPMENT_SET',
      protocol: 'PALS_PEDIATRIC_PROTOCOLS',
      hospital_notification: 'PEDIATRIC_CAPABLE',
      typical_crew: 'PALS_CERTIFIED'
    }
  ]);

  const [responseMetrics, setResponseMetrics] = useState([]);

  const generateResponseMetrics = () => {
    const data = [];
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    
    for (let i = 0; i <= 23; i++) { // 24 hours
      const hour = i;
      let callMultiplier = 0.3; // Base call volume
      
      // EMS call patterns (different from fire/police)
      if (hour >= 6 && hour <= 9) callMultiplier = 0.7; // Morning medical emergencies
      if (hour >= 10 && hour <= 14) callMultiplier = 0.5; // Midday lull
      if (hour >= 15 && hour <= 19) callMultiplier = 0.9; // Afternoon peak
      if (hour >= 20 && hour <= 23) callMultiplier = 0.8; // Evening accidents/incidents
      if (hour >= 0 && hour <= 5) callMultiplier = 0.6; // Overnight medical calls
      if ([18, 19, 20, 21].includes(hour)) callMultiplier = 1.0; // Peak evening hours
      
      data.push({
        hour: `${hour.toString().padStart(2, '0')}:00`,
        total_calls: Math.floor((15 + callMultiplier * 25) + Math.random() * 10),
        priority_1_calls: Math.floor((2 + callMultiplier * 6) + Math.random() * 3),
        priority_2_calls: Math.floor((4 + callMultiplier * 8) + Math.random() * 4),
        avg_response_time: 6.0 + (1.0 - callMultiplier) * 4.0 + Math.random() * 2.0,
        units_dispatched: Math.floor((12 + callMultiplier * 20) + Math.random() * 8),
        transport_rate: 65 + callMultiplier * 20 + Math.random() * 10, // percentage
        cardiac_saves: Math.floor(callMultiplier * 2 + Math.random() * 2),
        refusal_rate: 8 + Math.random() * 6, // percentage of patients refusing transport
        hospital_diversions: Math.floor(callMultiplier * 3 + Math.random() * 2)
      });
    }
    return data;
  };

  useEffect(() => {
    setResponseMetrics(generateResponseMetrics());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update EMS status
      setEmsStatus(prev => ({
        ...prev,
        ambulancesAvailable: Math.max(45, Math.min(120, prev.ambulancesAvailable + Math.floor((Math.random() - 0.5) * 6))),
        ambulancesEnRoute: Math.max(15, Math.min(65, prev.ambulancesEnRoute + Math.floor((Math.random() - 0.5) * 4))),
        ambulancesOnScene: Math.max(8, Math.min(35, prev.ambulancesOnScene + Math.floor((Math.random() - 0.5) * 3))),
        totalCalls: prev.totalCalls + Math.floor(Math.random() * 3),
        averageResponseTime: Math.max(5.0, Math.min(12.0, prev.averageResponseTime + (Math.random() - 0.5) * 0.8)),
        callCompletionRate: Math.max(88.0, Math.min(98.0, prev.callCompletionRate + (Math.random() - 0.5) * 1.2)),
        cardiacArrestSaves: prev.cardiacArrestSaves + (Math.random() < 0.15 ? 1 : 0),
        lastUpdate: Date.now()
      }));

      // Update CAD system metrics
      setCadSystemMetrics(prev => ({
        ...prev,
        call_processing: {
          ...prev.call_processing,
          total_calls_today: prev.call_processing.total_calls_today + Math.floor(Math.random() * 2),
          avg_call_processing_time: Math.max(30, Math.min(75, prev.call_processing.avg_call_processing_time + (Math.random() - 0.5) * 5)),
          priority_1_calls: prev.call_processing.priority_1_calls + (Math.random() < 0.08 ? 1 : 0)
        },
        dispatch_coordination: {
          ...prev.dispatch_coordination,
          units_dispatched: prev.dispatch_coordination.units_dispatched + Math.floor(Math.random() * 3),
          dispatch_accuracy: Math.max(92.0, Math.min(99.0, prev.dispatch_coordination.dispatch_accuracy + (Math.random() - 0.5) * 0.8))
        }
      }));

      // Update ambulance fleet randomly
      setAmbulanceFleet(prev => prev.map(unit => {
        if (unit.status === 'AVAILABLE' && Math.random() < 0.05) {
          return {
            ...unit,
            status: 'EN_ROUTE',
            dispatch_time: Date.now(),
            eta_scene: Date.now() + (5 + Math.random() * 8) * 60 * 1000
          };
        }
        if (unit.status === 'EN_ROUTE' && unit.eta_scene && Date.now() >= unit.eta_scene) {
          return {
            ...unit,
            status: 'ON_SCENE',
            scene_time: Date.now(),
            eta_scene: undefined
          };
        }
        return unit;
      }));

    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'EMS_ACTIVE':
      case 'AVAILABLE':
      case 'FULLY_STOCKED':
      case 'OPERATIONAL':
      case 'OPTIMIZED':
      case 'AI_POWERED':
      case 'AI_ENHANCED':
      case 'MACHINE_LEARNING':
      case 'ACTIVE':
      case 'AUTOMATIC':
      case 'TRAUMA_CENTER':
      case 'STROKE_CENTER':
      case 'ALS_REQUIRED':
      case 'PALS_CERTIFIED':
      case 'COMPREHENSIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'EN_ROUTE':
      case 'TRANSPORTING':
      case 'PRIORITY_2':
      case 'BLS_OR_ALS':
      case 'CONDITIONAL':
      case 'ROUTINE':
      case 'IN_USE': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'ON_SCENE':
      case 'PRIORITY_1':
      case 'PRIORITY_1_OR_2':
      case 'EMERGENCY_DEPT':
      case 'ALS_PREFERRED':
      case 'URGENT': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OUT_OF_SERVICE':
      case 'SCHEDULED_INSPECTION':
      case 'MAINTENANCE':
      case 'PRIORITY_3':
      case 'BEHAVIORAL_HEALTH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'STABLE':
      case 'BLS_SUFFICIENT':
      case 'PEDIATRIC_CAPABLE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatNumber = (num, decimals = 0) => {
    return num.toFixed(decimals);
  };

  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes.toFixed(1)}min`;
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return `${hours}h ${mins}min`;
  };

  const formatTimestamp = (timestamp) => {
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
          🚑 EMS OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {emsStatus.ambulancesAvailable}/{emsStatus.totalAmbulances} Available
          </div>
          <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-mono border border-orange-500/30">
            {emsStatus.highPriorityCalls} Priority 1
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatTime(emsStatus.averageResponseTime)} Avg Response
          </div>
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {emsStatus.cardiacArrestSaves} Saves Today
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Paramedic Dispatch & Emergency Medical Services
          </div>
        </div>
      </div>

      {/* EMS Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TOTAL CALLS TODAY</div>
              <div className="text-2xl font-bold text-green-100">
                {emsStatus.totalCalls}
              </div>
              <div className="text-xs text-green-300">
                {emsStatus.callCompletionRate.toFixed(1)}% completion rate
              </div>
            </div>
            <div className="text-3xl opacity-60">📞</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">AVG RESPONSE TIME</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatTime(emsStatus.averageResponseTime)}
              </div>
              <div className="text-xs text-blue-300">
                Transport: {formatTime(emsStatus.averageTransportTime)}
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">UNITS EN ROUTE</div>
              <div className="text-2xl font-bold text-orange-100">
                {emsStatus.ambulancesEnRoute}
              </div>
              <div className="text-xs text-orange-300">
                {emsStatus.ambulancesOnScene} on scene
              </div>
            </div>
            <div className="text-3xl opacity-60">🚑</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">CARDIAC SAVES</div>
              <div className="text-2xl font-bold text-purple-100">
                {emsStatus.cardiacArrestSaves}
              </div>
              <div className="text-xs text-purple-300">
                Today's resuscitations
              </div>
            </div>
            <div className="text-3xl opacity-60">❤️</div>
          </div>
        </div>
      </div>

      {/* CAD System Integration */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🖥️ CAD SYSTEM INTEGRATION & DISPATCH COORDINATION
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">PSAP Interoperability</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Connected PSAPs:</span>
                <span className="text-blue-400">{cadSystemMetrics.psap_interoperability.connected_psaps}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CAD-to-CAD:</span>
                <span className={`${getStatusColor(cadSystemMetrics.psap_interoperability.cad_to_cad_active ? 'ACTIVE' : 'INACTIVE').split(' ')[0]}`}>
                  {cadSystemMetrics.psap_interoperability.cad_to_cad_active ? 'ACTIVE' : 'INACTIVE'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Cross-Jurisdictional:</span>
                <span className="text-green-400">{cadSystemMetrics.psap_interoperability.cross_jurisdictional_calls}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Coordination Success:</span>
                <span className="text-purple-400">{formatNumber(cadSystemMetrics.psap_interoperability.border_coordination_success, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Network Latency:</span>
                <span className="text-orange-400">{cadSystemMetrics.psap_interoperability.interoperability_latency}ms</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Multi-Agency:</span>
                <span className="text-cyan-400">{cadSystemMetrics.psap_interoperability.multi_agency_incidents}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Call Processing</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Total Calls:</span>
                <span className="text-blue-400">{cadSystemMetrics.call_processing.total_calls_today}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Processing:</span>
                <span className="text-green-400">{cadSystemMetrics.call_processing.avg_call_processing_time}s</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Priority 1 (Life):</span>
                <span className="text-red-400">{cadSystemMetrics.call_processing.priority_1_calls}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Priority 2 (Urgent):</span>
                <span className="text-yellow-400">{cadSystemMetrics.call_processing.priority_2_calls}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Call Accuracy:</span>
                <span className="text-purple-400">{formatNumber(cadSystemMetrics.call_processing.call_accuracy_rate, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ALI Accuracy:</span>
                <span className="text-cyan-400">{formatNumber(cadSystemMetrics.call_processing.automatic_location_identification, 1)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Dispatch Coordination</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Units Dispatched:</span>
                <span className="text-blue-400">{cadSystemMetrics.dispatch_coordination.units_dispatched}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Dispatch Accuracy:</span>
                <span className="text-green-400">{formatNumber(cadSystemMetrics.dispatch_coordination.dispatch_accuracy, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Closest Unit:</span>
                <span className={`${getStatusColor(cadSystemMetrics.dispatch_coordination.closest_unit_algorithm).split(' ')[0]}`}>
                  {cadSystemMetrics.dispatch_coordination.closest_unit_algorithm}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">ETA Accuracy:</span>
                <span className="text-purple-400">{formatNumber(cadSystemMetrics.dispatch_coordination.eta_prediction_accuracy, 1)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Multi-Unit Calls:</span>
                <span className="text-orange-400">{cadSystemMetrics.dispatch_coordination.multi_unit_coordination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Mutual Aid:</span>
                <span className="text-cyan-400">{cadSystemMetrics.dispatch_coordination.mutual_aid_requests}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Real-Time Tracking</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">GPS Units:</span>
                <span className="text-blue-400">{cadSystemMetrics.real_time_tracking.gps_equipped_units}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">AVL System:</span>
                <span className={`${getStatusColor(cadSystemMetrics.real_time_tracking.avl_system_active ? 'ACTIVE' : 'INACTIVE').split(' ')[0]}`}>
                  {cadSystemMetrics.real_time_tracking.avl_system_active ? 'ACTIVE' : 'INACTIVE'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Status Updates/Hr:</span>
                <span className="text-green-400">{cadSystemMetrics.real_time_tracking.unit_status_updates}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Geofence Alerts:</span>
                <span className="text-yellow-400">{cadSystemMetrics.real_time_tracking.geofencing_alerts}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Route Optimization:</span>
                <span className={`${getStatusColor(cadSystemMetrics.real_time_tracking.route_optimization).split(' ')[0]}`}>
                  {cadSystemMetrics.real_time_tracking.route_optimization.replace(/_/g, ' ')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Weather Impact:</span>
                <span className={`${getStatusColor(cadSystemMetrics.real_time_tracking.weather_impact_assessment).split(' ')[0]}`}>
                  {cadSystemMetrics.real_time_tracking.weather_impact_assessment}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambulance Fleet Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚑 AMBULANCE FLEET STATUS & CREW MANAGEMENT
        </h3>
        <div className="space-y-3">
          {ambulanceFleet.map((unit) => (
            <div key={unit.unit_id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-sm font-bold text-white">{unit.unit_id}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(unit.status)}`}>
                    {unit.status.replace(/_/g, ' ')}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(unit.crew_type)}`}>
                    {unit.crew_type}
                  </span>
                  {unit.vehicle_type && (
                    <span className="text-xs text-gray-400">{unit.vehicle_type}</span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {unit.location}
                </div>
              </div>

              {unit.status !== 'OUT_OF_SERVICE' ? (
                <>
                  <div className="text-sm mb-2">
                    <span className="text-gray-400">Crew: </span>
                    <span className="text-cyan-400">{unit.paramedic_lead}</span>
                    <span className="text-gray-400"> & </span>
                    <span className="text-green-400">{unit.emt_partner}</span>
                  </div>

                  {unit.status === 'EN_ROUTE' && (
                    <div className="text-sm mb-2">
                      <span className="text-gray-400">Call: </span>
                      <span className={`${getStatusColor(unit.call_priority)?.split(' ')[0] || 'text-yellow-400'}`}>
                        {unit.call_priority?.replace(/_/g, ' ')}
                      </span>
                      <span className="text-gray-400"> | Type: </span>
                      <span className="text-purple-400">{unit.incident_type?.replace(/_/g, ' ')}</span>
                      <span className="text-gray-400"> | ETA: </span>
                      <span className="text-blue-400">{formatTimestamp(unit.eta_scene)}</span>
                    </div>
                  )}

                  {unit.status === 'ON_SCENE' && (
                    <div className="text-sm mb-2">
                      <span className="text-gray-400">Incident: </span>
                      <span className={`${getStatusColor(unit.call_priority)?.split(' ')[0] || 'text-red-400'}`}>
                        {unit.incident_type?.replace(/_/g, ' ')}
                      </span>
                      <span className="text-gray-400"> | On Scene: </span>
                      <span className="text-orange-400">{formatTimestamp(unit.scene_time)}</span>
                      {unit.vitals_transmitted && (
                        <>
                          <span className="text-gray-400"> | </span>
                          <span className="text-green-400">Vitals Transmitted</span>
                        </>
                      )}
                      {unit.hospital_notification_sent && (
                        <>
                          <span className="text-gray-400"> | </span>
                          <span className="text-blue-400">Hospital Notified</span>
                        </>
                      )}
                    </div>
                  )}

                  {unit.status === 'TRANSPORTING' && (
                    <div className="text-sm mb-2">
                      <span className="text-gray-400">Transporting to: </span>
                      <span className="text-blue-400">{unit.destination}</span>
                      <span className="text-gray-400"> | Patient: </span>
                      <span className={`${getStatusColor(unit.patient_status)?.split(' ')[0] || 'text-green-400'}`}>
                        {unit.patient_status}
                      </span>
                      <span className="text-gray-400"> | ETA: </span>
                      <span className="text-yellow-400">{formatTimestamp(unit.eta_hospital)}</span>
                    </div>
                  )}

                  <div className="text-xs">
                    <span className="text-gray-400">Equipment: </span>
                    <span className={`${getStatusColor(unit.equipment_status)?.split(' ')[0] || 'text-green-400'}`}>
                      {unit.equipment_status?.replace(/_/g, ' ')}
                    </span>
                    <span className="text-gray-400"> | Fuel: </span>
                    <span className="text-purple-400">{unit.fuel_level}%</span>
                    <span className="text-gray-400"> | Response Area: </span>
                    <span className="text-orange-400">{unit.response_area}</span>
                    {unit.years_experience_avg && (
                      <>
                        <span className="text-gray-400"> | Crew Experience: </span>
                        <span className="text-cyan-400">{unit.years_experience_avg} yrs avg</span>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm mb-2">
                    <span className="text-gray-400">Maintenance: </span>
                    <span className="text-orange-400">{unit.maintenance_type?.replace(/_/g, ' ')}</span>
                    <span className="text-gray-400"> | Started: </span>
                    <span className="text-yellow-400">{formatTimestamp(unit.maintenance_start)}</span>
                    <span className="text-gray-400"> | ETA: </span>
                    <span className="text-blue-400">{formatTimestamp(unit.estimated_return)}</span>
                  </div>
                  <div className="text-xs">
                    <span className="text-gray-400">Replacement Unit: </span>
                    <span className="text-green-400">{unit.replacement_unit}</span>
                    <span className="text-gray-400"> | Priority: </span>
                    <span className={`${getStatusColor(unit.maintenance_priority)?.split(' ')[0] || 'text-gray-400'}`}>
                      {unit.maintenance_priority}
                    </span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Emergency Response Trends */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📈 24-HOUR EMS RESPONSE TRENDS
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={responseMetrics}>
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
              dataKey="total_calls"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Total Calls"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="priority_1_calls" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Priority 1 (Life-Threatening)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="priority_2_calls" 
              stroke="#F59E0B" 
              strokeWidth={2}
              name="Priority 2 (Urgent)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="avg_response_time" 
              stroke="#3B82F6" 
              strokeWidth={2}
              name="Avg Response Time (min)"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="cardiac_saves" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              name="Cardiac Saves"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="transport_rate" 
              stroke="#06B6D4" 
              strokeWidth={2}
              name="Transport Rate %"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="hospital_diversions" 
              stroke="#F97316" 
              strokeWidth={2}
              name="Hospital Diversions"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Emergency Types and Medical Protocols */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Types */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🆘 EMERGENCY TYPES & RESPONSE METRICS
          </h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {emergencyTypes.map((emergency, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">
                      {emergency.type.replace(/_/g, ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(emergency.priority_level)}`}>
                      {emergency.priority_level.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-400">
                    {emergency.calls_today} calls today
                  </span>
                </div>
                
                <div className="text-xs mb-2">
                  <span className="text-gray-400">Response: </span>
                  <span className="text-blue-400">{formatTime(emergency.avg_response_time)}</span>
                  <span className="text-gray-400"> | Success: </span>
                  <span className="text-green-400">{formatNumber(emergency.success_rate, 1)}%</span>
                  <span className="text-gray-400"> | Crew: </span>
                  <span className={`${getStatusColor(emergency.typical_crew)?.split(' ')[0] || 'text-yellow-400'}`}>
                    {emergency.typical_crew.replace(/_/g, ' ')}
                  </span>
                </div>
                
                <div className="text-xs">
                  <span className="text-gray-400">Equipment: </span>
                  <span className="text-purple-400">{emergency.specialized_equipment.replace(/_/g, ' ')}</span>
                </div>
                
                <div className="text-xs">
                  <span className="text-gray-400">Protocol: </span>
                  <span className="text-orange-400">{emergency.protocol.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Notify: </span>
                  <span className={`${getStatusColor(emergency.hospital_notification)?.split(' ')[0] || 'text-cyan-400'}`}>
                    {emergency.hospital_notification.replace(/_/g, ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Medical Protocols */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 MEDICAL PROTOCOLS & QUALITY ASSURANCE
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Life Support Protocols</h4>
              <div className="space-y-1 text-xs">
                {Object.entries(medicalProtocols.life_support_protocols).map(([protocol, standard], index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-400">{protocol.replace(/_/g, ' ').replace(/protocol/g, '').trim()}:</span>
                    <span className="text-green-400">{standard.replace(/_/g, ' ')}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Hospital Coordination</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Receiving Hospitals:</span>
                  <span className="text-blue-400">{medicalProtocols.hospital_coordination.receiving_hospitals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Real-Time Beds:</span>
                  <span className={`${getStatusColor(medicalProtocols.hospital_coordination.bed_availability_real_time ? 'ACTIVE' : 'INACTIVE')?.split(' ')[0] || 'text-green-400'}`}>
                    {medicalProtocols.hospital_coordination.bed_availability_real_time ? 'ACTIVE' : 'INACTIVE'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Specialties:</span>
                  <span className="text-purple-400">{medicalProtocols.hospital_coordination.specialty_capabilities.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Auto ETA Notify:</span>
                  <span className={`${getStatusColor(medicalProtocols.hospital_coordination.eta_notifications_automatic ? 'AUTOMATIC' : 'MANUAL')?.split(' ')[0] || 'text-green-400'}`}>
                    {medicalProtocols.hospital_coordination.eta_notifications_automatic ? 'AUTOMATIC' : 'MANUAL'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Telemedicine:</span>
                  <span className="text-cyan-400">{medicalProtocols.hospital_coordination.physician_consultation.replace(/_/g, ' ')}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-bold text-white mb-3">Quality Assurance</h4>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Compliance:</span>
                  <span className="text-green-400">{formatNumber(medicalProtocols.quality_assurance.response_time_compliance, 1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">ROSC Rate:</span>
                  <span className="text-purple-400">{formatNumber(medicalProtocols.quality_assurance.cardiac_arrest_survival_rate, 1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Customer Satisfaction:</span>
                  <span className="text-blue-400">{formatNumber(medicalProtocols.quality_assurance.customer_satisfaction_score, 1)}/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">CE Hours:</span>
                  <span className="text-orange-400">{medicalProtocols.quality_assurance.continuing_education_hours}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Protocol Compliance:</span>
                  <span className="text-cyan-400">{formatNumber(medicalProtocols.quality_assurance.protocol_compliance_rate, 1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Improvement Initiatives:</span>
                  <span className="text-yellow-400">{medicalProtocols.quality_assurance.improvement_initiatives}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMSOperationsCenter;