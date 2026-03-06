// FireEmergencyOperations.js - Fire Emergency Operations Center & Incident Command Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FireEmergencyOperations = () => {
  const [operationsStatus, setOperationsStatus] = useState({
    operationalReadiness: 'READY',
    activeIncidents: 7,
    availableUnits: 42,
    totalPersonnel: 156,
    responseTime: 4.2, // minutes average
    alertLevel: 'NORMAL',
    weatherConditions: 'CLEAR',
    fireRiskLevel: 'MODERATE',
    lastUpdate: Date.now()
  });

  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 'INC-2026-001247',
      type: 'STRUCTURE_FIRE',
      priority: 'HIGH',
      status: 'ACTIVE',
      address: '1247 Oak Street',
      district: 'District 3',
      dispatchTime: Date.now() - 25 * 60 * 1000,
      firstUnitOnScene: Date.now() - 18 * 60 * 1000,
      incidentCommander: 'Battalion Chief 3',
      assignedUnits: 8,
      personnel: 24,
      apparatus: ['Engine 7', 'Engine 12', 'Ladder 3', 'Battalion 3', 'EMS 15'],
      stage: 'INTERIOR_ATTACK',
      waterSupply: 'ADEQUATE',
      hazards: ['PROPANE_TANK'],
      occupancy: 'RESIDENTIAL_SINGLE',
      construction: 'TYPE_V_WOOD',
      progress: {
        search_rescue: 'COMPLETE',
        fire_attack: 'IN_PROGRESS',
        ventilation: 'COMPLETE',
        exposure_protection: 'COMPLETE'
      },
      benchmarks: {
        arrival_time: 4.3, // minutes
        water_on_fire: 6.8,
        primary_search: 12.5,
        fire_under_control: null // pending
      },
      resources: {
        engines: 3,
        ladders: 1,
        rescue_units: 0,
        tankers: 1,
        ems_units: 2,
        chief_officers: 1
      },
      accountability: {
        personnel_assigned: 24,
        personnel_accounted: 24,
        crews_interior: 2,
        crews_exterior: 4,
        rehabilitation: 0
      },
      weather: {
        temperature: 18, // celsius
        humidity: 45,
        wind_speed: 12, // km/h
        wind_direction: 'SW',
        precipitation: 'NONE'
      },
      alerts: ['Interior crews report good progress on fire suppression'],
      lastUpdate: Date.now() - 2 * 60 * 1000
    },
    {
      id: 'INC-2026-001248',
      type: 'MEDICAL_EMERGENCY',
      priority: 'HIGH',
      status: 'ENROUTE',
      address: '789 Pine Avenue',
      district: 'District 1',
      dispatchTime: Date.now() - 8 * 60 * 1000,
      firstUnitOnScene: null,
      incidentCommander: null,
      assignedUnits: 3,
      personnel: 6,
      apparatus: ['EMS 4', 'Engine 2', 'Battalion 1'],
      stage: 'RESPONSE',
      medicalCategory: 'CARDIAC_ARREST',
      priority: 'DELTA',
      patient: {
        age: 67,
        gender: 'MALE',
        conscious: false,
        breathing: false,
        pulse: false
      },
      bls_als: 'ALS',
      eta: 2.8, // minutes
      hospital: 'Metro General',
      transport_unit: 'EMS 4',
      benchmarks: {
        dispatch_to_enroute: 1.2,
        response_time_target: 8.0,
        on_scene_time: null,
        transport_time: null
      },
      alerts: ['High priority cardiac arrest - ALS response'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'INC-2026-001249',
      type: 'VEHICLE_ACCIDENT',
      priority: 'MEDIUM',
      status: 'ON_SCENE',
      address: 'Highway 101 MM 45',
      district: 'District 2',
      dispatchTime: Date.now() - 35 * 60 * 1000,
      firstUnitOnScene: Date.now() - 28 * 60 * 1000,
      incidentCommander: 'Captain Engine 5',
      assignedUnits: 4,
      personnel: 12,
      apparatus: ['Engine 5', 'Rescue 2', 'EMS 8', 'Battalion 2'],
      stage: 'STABILIZATION',
      vehiclesInvolved: 2,
      injuries: {
        fatalities: 0,
        critical: 1,
        moderate: 2,
        minor: 1,
        uninjured: 3
      },
      hazards: ['FUEL_SPILL', 'TRAFFIC'],
      extrication: {
        required: true,
        in_progress: true,
        estimated_time: 15 // minutes
      },
      traffic_control: 'ESTABLISHED',
      landing_zone: 'REQUESTED',
      benchmarks: {
        arrival_time: 7.2,
        scene_safety: 9.5,
        patient_access: 12.3,
        extrication_complete: null
      },
      alerts: ['Extrication in progress - helicopter ETA 12 minutes'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    }
  ]);

  const [availableUnits, setAvailableUnits] = useState([
    {
      id: 'ENG-01',
      callsign: 'Engine 1',
      type: 'ENGINE',
      status: 'AVAILABLE',
      location: 'Station 1',
      district: 'District 1',
      staffing: 4,
      apparatus: {
        pump_capacity: 1500, // GPM
        tank_capacity: 750, // gallons
        hose: '1200_feet',
        ladder: '24_foot',
        equipment_level: 'STANDARD'
      },
      crew: {
        captain: 'Smith, J.',
        engineer: 'Johnson, R.',
        firefighters: ['Brown, M.', 'Davis, K.']
      },
      response_area: 'Central Business District',
      last_activity: Date.now() - 45 * 60 * 1000,
      maintenance_status: 'OPERATIONAL',
      fuel_level: 87,
      mileage: 45230,
      next_inspection: '2026-03-12'
    },
    {
      id: 'LAD-02',
      callsign: 'Ladder 2',
      type: 'LADDER',
      status: 'AVAILABLE',
      location: 'Station 2',
      district: 'District 2',
      staffing: 4,
      apparatus: {
        ladder_height: 100, // feet
        pump_capacity: 1250,
        tank_capacity: 300,
        rescue_equipment: 'FULL',
        ventilation_equipment: 'COMPLETE'
      },
      crew: {
        captain: 'Wilson, P.',
        engineer: 'Miller, T.',
        firefighters: ['Anderson, L.', 'Taylor, S.']
      },
      response_area: 'Industrial District',
      last_activity: Date.now() - 2 * 60 * 60 * 1000,
      maintenance_status: 'OPERATIONAL',
      fuel_level: 72,
      mileage: 38950,
      aerial_certification: '2026-05-15'
    },
    {
      id: 'RES-01',
      callsign: 'Rescue 1',
      type: 'RESCUE',
      status: 'COMMITTED',
      location: 'Highway 101 MM 45',
      district: 'District 2',
      staffing: 3,
      apparatus: {
        rescue_tools: 'HYDRAULIC',
        medical_equipment: 'ALS',
        confined_space: 'CERTIFIED',
        water_rescue: 'BASIC',
        technical_rescue: 'ADVANCED'
      },
      crew: {
        captain: 'Garcia, M.',
        specialists: ['Rodriguez, A.', 'Lee, D.']
      },
      current_incident: 'INC-2026-001249',
      eta_available: 45, // minutes
      maintenance_status: 'OPERATIONAL',
      equipment_checks: 'CURRENT'
    },
    {
      id: 'BAT-03',
      callsign: 'Battalion 3',
      type: 'BATTALION_CHIEF',
      status: 'COMMITTED',
      location: '1247 Oak Street',
      district: 'District 3',
      staffing: 2,
      apparatus: {
        command_vehicle: true,
        mobile_command: 'BASIC',
        communications: 'ENHANCED',
        accountability_system: 'DIGITAL'
      },
      crew: {
        battalion_chief: 'Thompson, R.',
        aide: 'Martinez, C.'
      },
      current_incident: 'INC-2026-001247',
      command_role: 'INCIDENT_COMMANDER',
      supervision_area: 'Districts 3,4,5',
      experience_years: 18,
      certifications: ['INCIDENT_COMMAND', 'HAZMAT_OPS', 'FIRE_OFFICER_III']
    }
  ]);

  const [departmentResources, setDepartmentResources] = useState({
    stations: {
      total: 12,
      staffed: 11,
      minimum_staffing: 1,
      apparatus_total: 45,
      apparatus_available: 37,
      apparatus_committed: 8
    },
    personnel: {
      on_duty: 156,
      available: 138,
      committed: 18,
      off_duty_recalled: 0,
      mutual_aid_received: 0,
      mutual_aid_provided: 0
    },
    apparatus_by_type: {
      engines: { total: 15, available: 13, committed: 2 },
      ladders: { total: 8, available: 7, committed: 1 },
      rescues: { total: 4, available: 3, committed: 1 },
      tankers: { total: 3, available: 2, committed: 1 },
      ems_units: { total: 12, available: 9, committed: 3 },
      chief_officers: { total: 3, available: 2, committed: 1 }
    },
    special_units: {
      hazmat: { status: 'AVAILABLE', location: 'Station 7', staffing: 4 },
      urban_search_rescue: { status: 'AVAILABLE', location: 'Station 9', staffing: 6 },
      marine_unit: { status: 'AVAILABLE', location: 'Marine Station', staffing: 3 },
      air_unit: { status: 'AVAILABLE', location: 'Airport', crew: 2 },
      mobile_command: { status: 'AVAILABLE', location: 'Headquarters', staffing: 2 }
    },
    mutual_aid: {
      automatic_aid_agreements: 8,
      available_resources: 23,
      response_time_avg: 12.5, // minutes
      last_activation: 'Yesterday 14:30'
    }
  });

  const [performanceMetrics, setPerformanceMetrics] = useState({
    response_times: {
      current_shift_avg: 4.2,
      daily_target: 5.0,
      monthly_avg: 4.8,
      yearly_avg: 4.9,
      compliance_rate: 87.3 // percentage within target
    },
    incident_statistics: {
      calls_today: 47,
      calls_this_shift: 23,
      calls_last_24h: 72,
      call_volume_trend: '+12%', // vs last month
      peak_hours: '18:00-22:00'
    },
    call_types_distribution: [
      { type: 'Medical Emergency', count: 32, percentage: 68.1 },
      { type: 'Vehicle Accident', count: 7, percentage: 14.9 },
      { type: 'Structure Fire', count: 3, percentage: 6.4 },
      { type: 'Public Assist', count: 3, percentage: 6.4 },
      { type: 'Alarm Investigation', count: 2, percentage: 4.3 }
    ],
    unit_utilization: {
      engines_avg: 32.4, // percentage
      ladders_avg: 18.7,
      rescues_avg: 41.2,
      ems_avg: 67.8,
      peak_utilization: 89.5,
      busiest_unit: 'EMS 4'
    }
  ]);

  const [responseTimeHistory, setResponseTimeHistory] = useState([]);

  const [weatherConditions, setWeatherConditions] = useState({
    current: {
      temperature: 18, // celsius
      humidity: 45,
      wind_speed: 12, // km/h
      wind_direction: 'SW',
      visibility: 10, // km
      precipitation: 'NONE',
      fire_weather_index: 'MODERATE'
    },
    forecast: {
      next_6_hours: 'Partly cloudy, winds increasing to 18 km/h',
      fire_risk_trend: 'INCREASING',
      red_flag_warning: false,
      critical_fire_weather: false
    },
    alerts: ['Wind speed increasing - monitor for fire spread potential']
  });

  const generateResponseTimeHistory = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        response_time: 3.5 + Math.random() * 2.5,
        call_volume: Math.floor(1 + Math.random() * 4),
        available_units: 35 + Math.floor(Math.random() * 15),
        target: 5.0
      });
    }
    return data;
  };

  useEffect(() => {
    setResponseTimeHistory(generateResponseTimeHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update operations status
      setOperationsStatus(prev => ({
        ...prev,
        responseTime: Math.max(3.0, Math.min(6.0, prev.responseTime + (Math.random() - 0.5) * 0.3)),
        lastUpdate: Date.now()
      }));

      // Update active incidents (simulate progression)
      setActiveIncidents(prev => prev.map(incident => {
        if (incident.stage === 'RESPONSE' && Math.random() < 0.3) {
          return {
            ...incident,
            stage: 'ON_SCENE',
            firstUnitOnScene: Date.now(),
            benchmarks: {
              ...incident.benchmarks,
              arrival_time: (Date.now() - incident.dispatchTime) / 60000
            },
            lastUpdate: Date.now()
          };
        }
        return incident;
      }));

    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'AVAILABLE':
      case 'READY':
      case 'OPERATIONAL':
      case 'COMPLETE':
      case 'ADEQUATE':
      case 'CURRENT':
      case 'CLEAR':
      case 'NORMAL': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'COMMITTED':
      case 'ACTIVE':
      case 'ENROUTE':
      case 'ON_SCENE':
      case 'IN_PROGRESS': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'HIGH':
      case 'CRITICAL':
      case 'DELTA': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MEDIUM':
      case 'MODERATE':
      case 'REQUESTED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW':
      case 'ESTABLISHED': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH':
      case 'CRITICAL':
      case 'DELTA': return 'text-red-400';
      case 'MEDIUM':
      case 'CHARLIE': return 'text-yellow-400';
      case 'LOW':
      case 'BRAVO': return 'text-blue-400';
      case 'ALPHA': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num, decimals = 1) => {
    return num.toFixed(decimals);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = Date.now() - timestamp;
    if (diff < 60000) return `${Math.floor(diff / 1000)}s ago`;
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (timestamp) => {
    if (!timestamp) return 'N/A';
    const diff = Date.now() - timestamp;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚒 FIRE EMERGENCY OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono border border-red-500/30">
            {operationsStatus.activeIncidents} Active Incidents
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {operationsStatus.availableUnits} Available Units
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(operationsStatus.responseTime)}min Response
          </div>
          <div className="text-sm text-gray-400 font-mono">
            CAD & Incident Command System
          </div>
        </div>
      </div>

      {/* Operations Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-200">ACTIVE INCIDENTS</div>
              <div className="text-2xl font-bold text-red-100">
                {operationsStatus.activeIncidents}
              </div>
              <div className="text-xs text-red-300">
                Current Emergency Calls
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">AVAILABLE UNITS</div>
              <div className="text-2xl font-bold text-green-100">
                {operationsStatus.availableUnits}
              </div>
              <div className="text-xs text-green-300">
                Ready for Dispatch
              </div>
            </div>
            <div className="text-3xl opacity-60">🚒</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">RESPONSE TIME</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(operationsStatus.responseTime)}
              </div>
              <div className="text-xs text-blue-300">
                Minutes Average
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">PERSONNEL</div>
              <div className="text-2xl font-bold text-purple-100">
                {operationsStatus.totalPersonnel}
              </div>
              <div className="text-xs text-purple-300">
                Total On Duty
              </div>
            </div>
            <div className="text-3xl opacity-60">👨‍🚒</div>
          </div>
        </div>
      </div>

      {/* Active Incidents */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔥 ACTIVE INCIDENTS & INCIDENT COMMAND STATUS
        </h3>
        <div className="space-y-4">
          {activeIncidents.map((incident) => (
            <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-mono">
                    {incident.id.split('-')[2]}
                  </div>
                  <div className="text-sm font-bold text-white">{incident.type.replace(/_/g, ' ')}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-mono ${getPriorityColor(incident.priority)}`}>
                    {incident.priority}
                  </span>
                  {incident.alerts && incident.alerts.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">
                      {incident.alerts.length} update{incident.alerts.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {formatTime(incident.lastUpdate)}
                </div>
              </div>

              {/* Incident Location and Command */}
              <div className="text-sm mb-3">
                <div className="text-white font-bold">{incident.address}</div>
                <div className="text-cyan-400 text-xs">{incident.district}</div>
                {incident.incidentCommander && (
                  <div className="text-xs">
                    <span className="text-gray-400">IC: </span>
                    <span className="text-green-400">{incident.incidentCommander}</span>
                  </div>
                )}
              </div>

              {/* Time Benchmarks */}
              <div className="text-xs mb-3">
                <span className="text-gray-400">Dispatch: </span>
                <span className="text-blue-400">{formatTime(incident.dispatchTime)}</span>
                {incident.firstUnitOnScene && (
                  <>
                    <span className="text-gray-400"> | On Scene: </span>
                    <span className="text-green-400">{formatTime(incident.firstUnitOnScene)}</span>
                  </>
                )}
                <span className="text-gray-400"> | Duration: </span>
                <span className="text-purple-400">{formatDuration(incident.dispatchTime)}</span>
                {incident.benchmarks && incident.benchmarks.arrival_time && (
                  <>
                    <span className="text-gray-400"> | Arrival: </span>
                    <span className="text-orange-400">{formatNumber(incident.benchmarks.arrival_time)}min</span>
                  </>
                )}
              </div>

              {/* Resources Assigned */}
              <div className="text-xs mb-3">
                <span className="text-gray-400">Resources: </span>
                <span className="text-blue-400">{incident.assignedUnits} units</span>
                <span className="text-gray-400"> | </span>
                <span className="text-green-400">{incident.personnel} personnel</span>
                {incident.apparatus && incident.apparatus.length > 0 && (
                  <>
                    <span className="text-gray-400"> | Units: </span>
                    <span className="text-yellow-400">{incident.apparatus.slice(0, 3).join(', ')}</span>
                    {incident.apparatus.length > 3 && (
                      <span className="text-gray-400"> +{incident.apparatus.length - 3} more</span>
                    )}
                  </>
                )}
              </div>

              {/* Incident-Specific Details */}
              {incident.type === 'STRUCTURE_FIRE' && incident.progress && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Progress: </span>
                  <span className="text-green-400">Search/Rescue: {incident.progress.search_rescue}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-orange-400">Fire Attack: {incident.progress.fire_attack}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">Ventilation: {incident.progress.ventilation}</span>
                  <span className="text-gray-400"> | Water Supply: </span>
                  <span className={getStatusColor(incident.waterSupply)}>{incident.waterSupply}</span>
                </div>
              )}

              {incident.type === 'MEDICAL_EMERGENCY' && incident.patient && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Patient: </span>
                  <span className="text-yellow-400">{incident.patient.age}yo {incident.patient.gender}</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-red-400">{incident.medicalCategory?.replace(/_/g, ' ')}</span>
                  <span className="text-gray-400"> | Conscious: </span>
                  <span className={incident.patient.conscious ? 'text-green-400' : 'text-red-400'}>
                    {incident.patient.conscious ? 'YES' : 'NO'}
                  </span>
                  <span className="text-gray-400"> | Hospital: </span>
                  <span className="text-cyan-400">{incident.hospital}</span>
                </div>
              )}

              {incident.type === 'VEHICLE_ACCIDENT' && incident.injuries && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Casualties: </span>
                  <span className="text-red-400">{incident.injuries.critical} critical</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-yellow-400">{incident.injuries.moderate} moderate</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-blue-400">{incident.injuries.minor} minor</span>
                  <span className="text-gray-400"> | </span>
                  <span className="text-green-400">{incident.injuries.uninjured} uninjured</span>
                  {incident.extrication && incident.extrication.required && (
                    <>
                      <span className="text-gray-400"> | Extrication: </span>
                      <span className="text-orange-400">{incident.extrication.in_progress ? 'IN PROGRESS' : 'REQUIRED'}</span>
                    </>
                  )}
                </div>
              )}

              {/* Hazards and Special Considerations */}
              {incident.hazards && incident.hazards.length > 0 && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Hazards: </span>
                  {incident.hazards.map((hazard, index) => (
                    <span key={index} className="text-red-400">
                      {hazard.replace(/_/g, ' ')}{index < incident.hazards.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              )}

              {/* Accountability (for structure fires) */}
              {incident.accountability && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Accountability: </span>
                  <span className="text-green-400">{incident.accountability.personnel_accounted}/{incident.accountability.personnel_assigned} accounted</span>
                  <span className="text-gray-400"> | Interior: </span>
                  <span className="text-orange-400">{incident.accountability.crews_interior} crews</span>
                  <span className="text-gray-400"> | Exterior: </span>
                  <span className="text-blue-400">{incident.accountability.crews_exterior} crews</span>
                </div>
              )}

              {incident.alerts && incident.alerts.length > 0 && (
                <div className="text-xs">
                  <div className="text-gray-400">Latest Updates:</div>
                  {incident.alerts.slice(0, 2).map((alert, index) => (
                    <div key={index} className="text-blue-400">🚒 {alert}</div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {activeIncidents.length === 0 && (
            <div className="text-center text-green-400 py-8">
              ✅ No Active Incidents - All Clear
            </div>
          )}
        </div>
      </div>

      {/* Available Units and Response Times */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Available Units */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚛 AVAILABLE UNITS & APPARATUS STATUS
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {availableUnits.filter(unit => unit.status === 'AVAILABLE').map((unit) => (
              <div key={unit.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                    <span className="text-sm font-bold text-white">{unit.callsign}</span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {unit.type.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <div className="text-xs text-cyan-400">{unit.location}</div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Staffing: </span>
                  <span className="text-green-400">{unit.staffing}</span>
                  <span className="text-gray-400"> | Captain: </span>
                  <span className="text-blue-400">{unit.crew.captain}</span>
                  <span className="text-gray-400"> | District: </span>
                  <span className="text-purple-400">{unit.district}</span>
                </div>

                {unit.apparatus && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Capabilities: </span>
                    {unit.apparatus.pump_capacity && (
                      <>
                        <span className="text-orange-400">{unit.apparatus.pump_capacity} GPM</span>
                        <span className="text-gray-400"> | </span>
                      </>
                    )}
                    {unit.apparatus.tank_capacity && (
                      <>
                        <span className="text-blue-400">{unit.apparatus.tank_capacity} gal</span>
                        <span className="text-gray-400"> | </span>
                      </>
                    )}
                    {unit.apparatus.ladder_height && (
                      <>
                        <span className="text-yellow-400">{unit.apparatus.ladder_height}ft ladder</span>
                        <span className="text-gray-400"> | </span>
                      </>
                    )}
                    <span className="text-cyan-400">Fuel: {unit.fuel_level}%</span>
                  </div>
                )}

                <div className="text-xs">
                  <span className="text-gray-400">Last Activity: </span>
                  <span className="text-purple-400">{formatTime(unit.last_activity)}</span>
                  <span className="text-gray-400"> | Response Area: </span>
                  <span className="text-green-400">{unit.response_area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 RESPONSE TIME PERFORMANCE (24 HOURS)
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={responseTimeHistory}>
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
                dataKey="response_time" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Response Time (min)"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#EF4444" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target (5 min)"
              />
              <Line 
                type="monotone" 
                dataKey="call_volume" 
                stroke="#10B981" 
                strokeWidth={1}
                name="Call Volume"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Resources and Performance Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Department Resources */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏢 DEPARTMENT RESOURCES & STAFFING
          </h3>
          
          {/* Station Status */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Fire Stations & Apparatus</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Stations Staffed</div>
                <div className="text-green-400">{departmentResources.stations.staffed}/{departmentResources.stations.total}</div>
              </div>
              <div>
                <div className="text-gray-400">Apparatus Available</div>
                <div className="text-blue-400">{departmentResources.stations.apparatus_available}/{departmentResources.stations.apparatus_total}</div>
              </div>
            </div>
          </div>

          {/* Personnel Status */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Personnel Status</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">On Duty</div>
                <div className="text-green-400">{departmentResources.personnel.on_duty}</div>
              </div>
              <div>
                <div className="text-gray-400">Available</div>
                <div className="text-blue-400">{departmentResources.personnel.available}</div>
              </div>
              <div>
                <div className="text-gray-400">Committed</div>
                <div className="text-orange-400">{departmentResources.personnel.committed}</div>
              </div>
              <div>
                <div className="text-gray-400">Recalled</div>
                <div className="text-purple-400">{departmentResources.personnel.off_duty_recalled}</div>
              </div>
            </div>
          </div>

          {/* Apparatus by Type */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Apparatus by Type</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(departmentResources.apparatus_by_type).map(([type, data]) => (
                <div key={type} className="flex justify-between">
                  <span className="text-gray-400 capitalize">{type.replace(/_/g, ' ')}:</span>
                  <span className="text-green-400">{data.available}</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-blue-400">{data.total}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PERFORMANCE METRICS & STATISTICS
          </h3>
          
          {/* Response Time Performance */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Response Time Performance</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Current Shift Avg</div>
                <div className="text-green-400">{formatNumber(performanceMetrics.response_times.current_shift_avg)} min</div>
              </div>
              <div>
                <div className="text-gray-400">Daily Target</div>
                <div className="text-blue-400">{formatNumber(performanceMetrics.response_times.daily_target)} min</div>
              </div>
              <div>
                <div className="text-gray-400">Monthly Average</div>
                <div className="text-purple-400">{formatNumber(performanceMetrics.response_times.monthly_avg)} min</div>
              </div>
              <div>
                <div className="text-gray-400">Compliance Rate</div>
                <div className="text-orange-400">{formatNumber(performanceMetrics.response_times.compliance_rate)}%</div>
              </div>
            </div>
          </div>

          {/* Call Statistics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Call Volume Statistics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Calls Today</div>
                <div className="text-green-400">{performanceMetrics.incident_statistics.calls_today}</div>
              </div>
              <div>
                <div className="text-gray-400">This Shift</div>
                <div className="text-blue-400">{performanceMetrics.incident_statistics.calls_this_shift}</div>
              </div>
              <div>
                <div className="text-gray-400">Last 24 Hours</div>
                <div className="text-purple-400">{performanceMetrics.incident_statistics.calls_last_24h}</div>
              </div>
              <div>
                <div className="text-gray-400">Volume Trend</div>
                <div className="text-orange-400">{performanceMetrics.incident_statistics.call_volume_trend}</div>
              </div>
            </div>
          </div>

          {/* Unit Utilization */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Unit Utilization</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Engines:</span>
                <span className="text-green-400">{formatNumber(performanceMetrics.unit_utilization.engines_avg)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">EMS Units:</span>
                <span className="text-orange-400">{formatNumber(performanceMetrics.unit_utilization.ems_avg)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Peak Utilization:</span>
                <span className="text-red-400">{formatNumber(performanceMetrics.unit_utilization.peak_utilization)}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Busiest Unit:</span>
                <span className="text-yellow-400">{performanceMetrics.unit_utilization.busiest_unit}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 FIRE DEPARTMENT KPIs & OPERATIONAL READINESS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Response Time</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(operationsStatus.responseTime)}
            </div>
            <div className="text-green-400 text-xs">minutes average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Unit Availability</div>
            <div className="text-white font-bold text-lg">
              {formatNumber((operationsStatus.availableUnits / (operationsStatus.availableUnits + 8)) * 100)}%
            </div>
            <div className="text-blue-400 text-xs">apparatus ready</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Target Compliance</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(performanceMetrics.response_times.compliance_rate)}%
            </div>
            <div className="text-purple-400 text-xs">within 5 minutes</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Daily Call Volume</div>
            <div className="text-white font-bold text-lg">
              {performanceMetrics.incident_statistics.calls_today}
            </div>
            <div className="text-orange-400 text-xs">emergency responses</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Peak Utilization</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(performanceMetrics.unit_utilization.peak_utilization)}%
            </div>
            <div className="text-cyan-400 text-xs">maximum capacity</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Personnel Staffing</div>
            <div className="text-white font-bold text-lg">
              {formatNumber((departmentResources.personnel.on_duty / 180) * 100)}%
            </div>
            <div className="text-yellow-400 text-xs">of target staffing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FireEmergencyOperations;