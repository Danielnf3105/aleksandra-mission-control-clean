// PoliceOperations.js - Police Operations Center & Law Enforcement CAD Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PoliceOperations = () => {
  const [operationsStatus, setOperationsStatus] = useState({
    operationalReadiness: 'READY',
    activeIncidents: 12,
    unitsAvailable: 28,
    unitsCommitted: 15,
    totalOfficers: 85,
    averageResponseTime: 6.8, // minutes
    priority1Response: 3.2,
    crimeActivity: 'MODERATE',
    lastUpdate: Date.now()
  });

  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 'PD-2026-003851',
      type: 'ARMED_ROBBERY',
      priority: 'PRIORITY_1',
      status: 'ACTIVE',
      location: '450 Main Street',
      beat: 'Beat 7',
      dispatchTime: Date.now() - 18 * 60 * 1000,
      firstUnitOnScene: Date.now() - 12 * 60 * 1000,
      assignedUnits: 4,
      officers: 6,
      suspect: {
        description: 'Male, 25-30, black hoodie, armed with handgun',
        direction: 'Last seen northbound on foot',
        weapon: 'HANDGUN',
        vehicle: 'None observed'
      },
      incident_commander: 'Sergeant Martinez',
      perimeter_established: true,
      k9_requested: true,
      detectives_enroute: true,
      witnesses: 2,
      injuries: 'None reported',
      scene_secure: false,
      alerts: ['Suspect armed and dangerous', 'Perimeter established'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    },
    {
      id: 'PD-2026-003852',
      type: 'DOMESTIC_VIOLENCE',
      priority: 'PRIORITY_2',
      status: 'ON_SCENE',
      location: '1875 Oak Drive, Apt 4B',
      beat: 'Beat 3',
      dispatchTime: Date.now() - 32 * 60 * 1000,
      firstUnitOnScene: Date.now() - 25 * 60 * 1000,
      assignedUnits: 2,
      officers: 3,
      domestic_details: {
        relationship: 'EX_BOYFRIEND',
        restraining_order: true,
        previous_calls: 7,
        weapons_present: false,
        children_present: true,
        victim_cooperation: 'PARTIAL'
      },
      medical_needed: false,
      arrest_made: false,
      report_number: 'DR-2026-0847',
      victim_services_contacted: true,
      alerts: ['Active restraining order on file', '2 children ages 6, 8 present'],
      lastUpdate: Date.now() - 3 * 60 * 1000
    },
    {
      id: 'PD-2026-003853',
      type: 'TRAFFIC_PURSUIT',
      priority: 'PRIORITY_1',
      status: 'ACTIVE',
      location: 'Highway 405 Southbound MM 23',
      beat: 'Beat 12',
      dispatchTime: Date.now() - 8 * 60 * 1000,
      firstUnitOnScene: Date.now() - 8 * 60 * 1000,
      assignedUnits: 5,
      officers: 7,
      pursuit_details: {
        vehicle: '2019 Honda Civic, Blue, License: ABC-123',
        reason: 'FELONY_EVASION',
        speed: 85, // mph
        direction: 'SOUTHBOUND',
        duration: 8, // minutes
        spike_strips_deployed: false,
        helicopter_requested: true,
        stop_sticks_ready: true
      },
      supervisor_authorized: true,
      termination_criteria: 'MONITOR',
      public_safety_risk: 'MODERATE',
      weather_conditions: 'CLEAR',
      traffic_density: 'MODERATE',
      alerts: ['Helicopter ETA 4 minutes', 'Approaching residential area'],
      lastUpdate: Date.now() - 30 * 1000
    },
    {
      id: 'PD-2026-003854',
      type: 'BURGLARY_ALARM',
      priority: 'PRIORITY_3',
      status: 'ENROUTE',
      location: '2200 Industrial Blvd',
      beat: 'Beat 9',
      dispatchTime: Date.now() - 5 * 60 * 1000,
      firstUnitOnScene: null,
      assignedUnits: 2,
      officers: 2,
      alarm_details: {
        alarm_company: 'SecureGuard Systems',
        zones_triggered: ['Motion Detector Zone 3', 'Door Contact Zone 1'],
        keyholder_notified: true,
        false_alarm_history: 3, // last 90 days
        business_type: 'Electronics Store'
      },
      eta: 3.5, // minutes
      backup_requested: false,
      alerts: ['3 false alarms in last 90 days'],
      lastUpdate: Date.now() - 1 * 60 * 1000
    }
  ]);

  const [patrolUnits, setPatrolUnits] = useState([
    {
      id: 'UNIT-701',
      callsign: '7-Adam-1',
      status: 'AVAILABLE',
      beat: 'Beat 7',
      location: 'Pine St & 3rd Ave',
      officers: ['Officer Johnson, M.', 'Officer Chen, L.'],
      vehicle: {
        type: 'PATROL_CAR',
        number: '701',
        mileage: 87534,
        fuel_level: 68,
        equipment_status: 'OPERATIONAL'
      },
      last_activity: Date.now() - 15 * 60 * 1000,
      shift: 'DAY',
      supervisor: 'Sergeant Martinez',
      response_times: {
        last_call: 4.8, // minutes
        average_shift: 5.2
      }
    },
    {
      id: 'UNIT-312',
      callsign: '3-Adam-12',
      status: 'COMMITTED',
      beat: 'Beat 3',
      location: '1875 Oak Drive',
      officers: ['Officer Williams, T.', 'Officer Davis, R.'],
      vehicle: {
        type: 'PATROL_CAR',
        number: '312',
        mileage: 92847,
        fuel_level: 43,
        equipment_status: 'OPERATIONAL'
      },
      current_incident: 'PD-2026-003852',
      on_scene_time: Date.now() - 25 * 60 * 1000,
      shift: 'DAY',
      supervisor: 'Sergeant Kim'
    },
    {
      id: 'UNIT-K9-1',
      callsign: 'K9-1',
      status: 'ENROUTE',
      beat: 'CITYWIDE',
      location: 'Responding to Main Street',
      officers: ['Officer Rodriguez, A.'],
      vehicle: {
        type: 'K9_UNIT',
        number: 'K9-1',
        mileage: 45632,
        fuel_level: 78,
        equipment_status: 'OPERATIONAL'
      },
      k9_partner: 'Rex (German Shepherd)',
      specialization: 'NARCOTICS_DETECTION',
      eta_destination: 4, // minutes
      shift: 'DAY',
      supervisor: 'Lieutenant Brooks'
    },
    {
      id: 'UNIT-DET-5',
      callsign: 'Detective-5',
      status: 'ENROUTE',
      beat: 'INVESTIGATIONS',
      location: 'Responding to Main Street',
      officers: ['Detective Thompson, K.', 'Detective Lee, S.'],
      vehicle: {
        type: 'UNMARKED',
        number: 'DET-5',
        mileage: 67891,
        fuel_level: 82,
        equipment_status: 'OPERATIONAL'
      },
      assignment: 'ROBBERY_INVESTIGATION',
      eta_destination: 6, // minutes
      shift: 'DAY',
      supervisor: 'Detective Sergeant Parker'
    }
  ]);

  const [crimeAnalytics, setCrimeAnalytics] = useState({
    daily_statistics: {
      calls_for_service: 156,
      priority_1_calls: 12,
      priority_2_calls: 34,
      priority_3_calls: 68,
      arrests_made: 8,
      citations_issued: 23,
      reports_filed: 47
    },
    crime_trends: {
      violent_crime: '+8.5%', // vs last month
      property_crime: '-12.3%',
      drug_offenses: '+15.7%',
      traffic_violations: '-3.2%',
      domestic_calls: '+6.1%'
    },
    hotspots: [
      { area: 'Downtown Commercial', calls: 28, type: 'THEFT' },
      { area: 'University District', calls: 19, type: 'DISTURBANCE' },
      { area: 'Industrial Zone', calls: 15, type: 'BURGLARY' },
      { area: 'Residential West', calls: 12, type: 'DOMESTIC' }
    ],
    weekly_patterns: {
      highest_activity: 'Friday 22:00-02:00',
      lowest_activity: 'Tuesday 06:00-10:00',
      peak_domestic: 'Saturday Evening',
      peak_traffic: 'Friday Afternoon'
    }
  });

  const [cadSystemStatus, setCadSystemStatus] = useState({
    system_health: 'OPERATIONAL',
    response_time: 0.8, // seconds
    uptime: '99.7%',
    active_dispatchers: 4,
    call_queue: 2,
    avg_call_processing: 45, // seconds
    database_connections: 'STABLE',
    backup_systems: 'READY',
    integration_status: {
      rms: 'CONNECTED',
      mobile_units: 'CONNECTED',
      emergency_services: 'CONNECTED',
      court_system: 'CONNECTED',
      jail_management: 'CONNECTED'
    },
    last_system_backup: Date.now() - 4 * 60 * 60 * 1000,
    pending_updates: 0,
    security_status: 'SECURE'
  });

  const [responseTimeHistory, setResponseTimeHistory] = useState([]);

  const generate911CallHistory = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const hour = new Date();
      hour.setHours(hour.getHours() - i);
      
      data.push({
        time: hour.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'}),
        response_time: 4.5 + Math.random() * 4,
        call_volume: Math.floor(2 + Math.random() * 8),
        priority_1: Math.floor(Math.random() * 3),
        target: 8.0 // target response time
      });
    }
    return data;
  };

  useEffect(() => {
    setResponseTimeHistory(generate911CallHistory());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update operations status
      setOperationsStatus(prev => ({
        ...prev,
        averageResponseTime: Math.max(5.0, Math.min(9.0, prev.averageResponseTime + (Math.random() - 0.5) * 0.5)),
        priority1Response: Math.max(2.0, Math.min(5.0, prev.priority1Response + (Math.random() - 0.5) * 0.3)),
        lastUpdate: Date.now()
      }));

      // Simulate incident progression
      setActiveIncidents(prev => prev.map(incident => {
        if (incident.status === 'ENROUTE' && Math.random() < 0.2) {
          return {
            ...incident,
            status: 'ON_SCENE',
            firstUnitOnScene: Date.now(),
            lastUpdate: Date.now()
          };
        }
        return incident;
      }));

    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'AVAILABLE':
      case 'READY':
      case 'OPERATIONAL':
      case 'CONNECTED':
      case 'SECURE':
      case 'STABLE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'COMMITTED':
      case 'ACTIVE':
      case 'ENROUTE':
      case 'ON_SCENE': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'PRIORITY_1': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'PRIORITY_2': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'PRIORITY_3': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'MODERATE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'PRIORITY_1': return 'text-red-400';
      case 'PRIORITY_2': return 'text-yellow-400';
      case 'PRIORITY_3': return 'text-cyan-400';
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
          🚔 POLICE OPERATIONS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono border border-red-500/30">
            {operationsStatus.activeIncidents} Active
          </div>
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {operationsStatus.unitsAvailable} Available
          </div>
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {formatNumber(operationsStatus.averageResponseTime)}min Response
          </div>
          <div className="text-sm text-gray-400 font-mono">
            CAD & 911 Emergency Dispatch
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
                Emergency Calls
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">UNITS AVAILABLE</div>
              <div className="text-2xl font-bold text-green-100">
                {operationsStatus.unitsAvailable}
              </div>
              <div className="text-xs text-green-300">
                Ready for Dispatch
              </div>
            </div>
            <div className="text-3xl opacity-60">🚔</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">RESPONSE TIME</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(operationsStatus.averageResponseTime)}
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
              <div className="text-xs text-purple-200">OFFICERS ON DUTY</div>
              <div className="text-2xl font-bold text-purple-100">
                {operationsStatus.totalOfficers}
              </div>
              <div className="text-xs text-purple-300">
                Total Personnel
              </div>
            </div>
            <div className="text-3xl opacity-60">👮</div>
          </div>
        </div>
      </div>

      {/* Active Incidents */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚨 ACTIVE INCIDENTS & 911 EMERGENCY CALLS
        </h3>
        <div className="space-y-4">
          {activeIncidents.map((incident) => (
            <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-mono">
                    {incident.id.split('-')[2]}
                  </div>
                  <div className="text-sm font-bold text-white">{incident.type.replace(/_/g, ' ')}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-mono ${getPriorityColor(incident.priority)}`}>
                    {incident.priority.replace(/_/g, ' ')}
                  </span>
                  {incident.alerts && incident.alerts.length > 0 && (
                    <span className="text-xs px-2 py-1 rounded bg-red-500 text-white">
                      {incident.alerts.length} alert{incident.alerts.length > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <div className="text-xs text-gray-400">
                  {formatTime(incident.lastUpdate)}
                </div>
              </div>

              {/* Location and Beat */}
              <div className="text-sm mb-3">
                <div className="text-white font-bold">{incident.location}</div>
                <div className="text-cyan-400 text-xs">{incident.beat}</div>
              </div>

              {/* Time Information */}
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
              </div>

              {/* Resource Assignment */}
              <div className="text-xs mb-3">
                <span className="text-gray-400">Resources: </span>
                <span className="text-blue-400">{incident.assignedUnits} units</span>
                <span className="text-gray-400"> | </span>
                <span className="text-green-400">{incident.officers} officers</span>
                {incident.incident_commander && (
                  <>
                    <span className="text-gray-400"> | IC: </span>
                    <span className="text-yellow-400">{incident.incident_commander}</span>
                  </>
                )}
              </div>

              {/* Incident-Specific Details */}
              {incident.type === 'ARMED_ROBBERY' && incident.suspect && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Suspect: </span>
                  <span className="text-orange-400">{incident.suspect.description}</span>
                  <span className="text-gray-400"> | Weapon: </span>
                  <span className="text-red-400">{incident.suspect.weapon}</span>
                  <span className="text-gray-400"> | Direction: </span>
                  <span className="text-cyan-400">{incident.suspect.direction}</span>
                  {incident.perimeter_established && (
                    <>
                      <span className="text-gray-400"> | </span>
                      <span className="text-green-400">Perimeter Established</span>
                    </>
                  )}
                </div>
              )}

              {incident.type === 'DOMESTIC_VIOLENCE' && incident.domestic_details && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Details: </span>
                  <span className="text-yellow-400">{incident.domestic_details.relationship.replace(/_/g, ' ')}</span>
                  {incident.domestic_details.restraining_order && (
                    <>
                      <span className="text-gray-400"> | </span>
                      <span className="text-red-400">Restraining Order</span>
                    </>
                  )}
                  <span className="text-gray-400"> | Previous: </span>
                  <span className="text-orange-400">{incident.domestic_details.previous_calls} calls</span>
                  {incident.domestic_details.children_present && (
                    <>
                      <span className="text-gray-400"> | </span>
                      <span className="text-purple-400">Children Present</span>
                    </>
                  )}
                </div>
              )}

              {incident.type === 'TRAFFIC_PURSUIT' && incident.pursuit_details && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Vehicle: </span>
                  <span className="text-blue-400">{incident.pursuit_details.vehicle}</span>
                  <span className="text-gray-400"> | Speed: </span>
                  <span className="text-red-400">{incident.pursuit_details.speed} mph</span>
                  <span className="text-gray-400"> | Direction: </span>
                  <span className="text-yellow-400">{incident.pursuit_details.direction}</span>
                  <span className="text-gray-400"> | Duration: </span>
                  <span className="text-orange-400">{incident.pursuit_details.duration}min</span>
                </div>
              )}

              {incident.type === 'BURGLARY_ALARM' && incident.alarm_details && (
                <div className="text-xs mb-3">
                  <span className="text-gray-400">Business: </span>
                  <span className="text-cyan-400">{incident.alarm_details.business_type}</span>
                  <span className="text-gray-400"> | Company: </span>
                  <span className="text-blue-400">{incident.alarm_details.alarm_company}</span>
                  <span className="text-gray-400"> | False Alarms: </span>
                  <span className="text-orange-400">{incident.alarm_details.false_alarm_history} (90d)</span>
                  {incident.eta && (
                    <>
                      <span className="text-gray-400"> | ETA: </span>
                      <span className="text-green-400">{formatNumber(incident.eta)}min</span>
                    </>
                  )}
                </div>
              )}

              {incident.alerts && incident.alerts.length > 0 && (
                <div className="text-xs">
                  <div className="text-gray-400">Alerts:</div>
                  {incident.alerts.slice(0, 2).map((alert, index) => (
                    <div key={index} className="text-red-400">🚨 {alert}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Units Status and Response Time */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Patrol Units */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚔 PATROL UNITS & OFFICER STATUS
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {patrolUnits.map((unit) => (
              <div key={unit.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(unit.status)}`}>
                      {unit.status}
                    </span>
                    <span className="text-sm font-bold text-white">{unit.callsign}</span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {unit.vehicle.type.replace(/_/g, ' ')}
                    </span>
                    {unit.k9_partner && (
                      <span className="text-xs px-2 py-1 rounded bg-yellow-600 text-white">
                        K9
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-cyan-400">{unit.beat}</div>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Location: </span>
                  <span className="text-green-400">{unit.location}</span>
                  <span className="text-gray-400"> | Vehicle: </span>
                  <span className="text-blue-400">{unit.vehicle.number}</span>
                  <span className="text-gray-400"> | Fuel: </span>
                  <span className="text-purple-400">{unit.vehicle.fuel_level}%</span>
                </div>

                <div className="text-xs mb-2">
                  <span className="text-gray-400">Officers: </span>
                  {unit.officers.map((officer, index) => (
                    <span key={index} className="text-yellow-400">
                      {officer}{index < unit.officers.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  {unit.k9_partner && (
                    <>
                      <span className="text-gray-400"> | K9: </span>
                      <span className="text-orange-400">{unit.k9_partner}</span>
                    </>
                  )}
                </div>

                {unit.current_incident && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">Current Call: </span>
                    <span className="text-red-400">{unit.current_incident}</span>
                    <span className="text-gray-400"> | On Scene: </span>
                    <span className="text-green-400">{formatDuration(unit.on_scene_time)}</span>
                  </div>
                )}

                {unit.eta_destination && (
                  <div className="text-xs mb-2">
                    <span className="text-gray-400">ETA: </span>
                    <span className="text-blue-400">{formatNumber(unit.eta_destination)}min</span>
                    {unit.assignment && (
                      <>
                        <span className="text-gray-400"> | Assignment: </span>
                        <span className="text-yellow-400">{unit.assignment.replace(/_/g, ' ')}</span>
                      </>
                    )}
                  </div>
                )}

                <div className="text-xs">
                  <span className="text-gray-400">Supervisor: </span>
                  <span className="text-cyan-400">{unit.supervisor}</span>
                  <span className="text-gray-400"> | Shift: </span>
                  <span className="text-purple-400">{unit.shift}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Performance */}
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
                name="Avg Response Time (min)"
              />
              <Line 
                type="monotone" 
                dataKey="target" 
                stroke="#EF4444" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="Target (8 min)"
              />
              <Line 
                type="monotone" 
                dataKey="priority_1" 
                stroke="#DC2626" 
                strokeWidth={3}
                name="Priority 1 Calls"
              />
              <Line 
                type="monotone" 
                dataKey="call_volume" 
                stroke="#10B981" 
                strokeWidth={1}
                name="Total Call Volume"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CAD System Status and Crime Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CAD System Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💻 CAD SYSTEM STATUS & INTEGRATION
          </h3>
          
          {/* System Health */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">System Performance</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">System Health</div>
                <div className={`${getStatusColor(cadSystemStatus.system_health).split(' ')[0]}`}>
                  {cadSystemStatus.system_health}
                </div>
              </div>
              <div>
                <div className="text-gray-400">Response Time</div>
                <div className="text-green-400">{formatNumber(cadSystemStatus.response_time, 2)}s</div>
              </div>
              <div>
                <div className="text-gray-400">System Uptime</div>
                <div className="text-blue-400">{cadSystemStatus.uptime}</div>
              </div>
              <div>
                <div className="text-gray-400">Active Dispatchers</div>
                <div className="text-purple-400">{cadSystemStatus.active_dispatchers}</div>
              </div>
            </div>
          </div>

          {/* System Integration */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">System Integration Status</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(cadSystemStatus.integration_status).map(([system, status]) => (
                <div key={system} className="flex justify-between">
                  <span className="text-gray-400 capitalize">{system.replace(/_/g, ' ')}:</span>
                  <span className={`${getStatusColor(status).split(' ')[0]}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crime Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 CRIME ANALYTICS & TRENDS
          </h3>
          
          {/* Daily Statistics */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="text-sm font-bold text-white mb-3">Daily Statistics</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Calls for Service</div>
                <div className="text-green-400">{crimeAnalytics.daily_statistics.calls_for_service}</div>
              </div>
              <div>
                <div className="text-gray-400">Priority 1 Calls</div>
                <div className="text-red-400">{crimeAnalytics.daily_statistics.priority_1_calls}</div>
              </div>
              <div>
                <div className="text-gray-400">Arrests Made</div>
                <div className="text-orange-400">{crimeAnalytics.daily_statistics.arrests_made}</div>
              </div>
              <div>
                <div className="text-gray-400">Reports Filed</div>
                <div className="text-blue-400">{crimeAnalytics.daily_statistics.reports_filed}</div>
              </div>
            </div>
          </div>

          {/* Crime Trends */}
          <div className="bg-gray-700 rounded-lg p-4">
            <h4 className="text-sm font-bold text-white mb-3">Crime Trends (vs Last Month)</h4>
            <div className="space-y-2 text-xs">
              {Object.entries(crimeAnalytics.crime_trends).map(([crime, trend]) => (
                <div key={crime} className="flex justify-between">
                  <span className="text-gray-400 capitalize">{crime.replace(/_/g, ' ')}:</span>
                  <span className={trend.startsWith('+') ? 'text-red-400' : 'text-green-400'}>
                    {trend}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance KPIs */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 POLICE DEPARTMENT KPIs & OPERATIONAL METRICS
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Avg Response Time</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(operationsStatus.averageResponseTime)}
            </div>
            <div className="text-green-400 text-xs">minutes</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Priority 1 Response</div>
            <div className="text-white font-bold text-lg">
              {formatNumber(operationsStatus.priority1Response)}
            </div>
            <div className="text-red-400 text-xs">minutes</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Unit Availability</div>
            <div className="text-white font-bold text-lg">
              {formatNumber((operationsStatus.unitsAvailable / (operationsStatus.unitsAvailable + operationsStatus.unitsCommitted)) * 100)}%
            </div>
            <div className="text-blue-400 text-xs">patrol ready</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Call Processing</div>
            <div className="text-white font-bold text-lg">
              {cadSystemStatus.avg_call_processing}
            </div>
            <div className="text-purple-400 text-xs">seconds average</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">Daily Arrests</div>
            <div className="text-white font-bold text-lg">
              {crimeAnalytics.daily_statistics.arrests_made}
            </div>
            <div className="text-orange-400 text-xs">arrests made</div>
          </div>
          
          <div className="bg-gray-700 rounded-lg p-3">
            <div className="text-xs text-gray-400">CAD System Uptime</div>
            <div className="text-white font-bold text-lg">
              {cadSystemStatus.uptime}
            </div>
            <div className="text-cyan-400 text-xs">operational</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceOperations;