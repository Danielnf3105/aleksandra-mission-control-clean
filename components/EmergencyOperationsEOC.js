// EmergencyOperationsEOC.js - Emergency Operations Center (EOC) & Incident Command System Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

const EmergencyOperationsEOC = () => {
  const [activeIncidents, setActiveIncidents] = useState([
    {
      id: 'inc_001',
      incidentName: 'Wildfire - Pine Valley',
      incidentType: 'WILDFIRE',
      classification: 'TYPE_2',
      status: 'ACTIVE',
      priority: 'HIGH',
      startTime: Date.now() - 6 * 60 * 60 * 1000,
      location: 'Pine Valley, Sector 7-G',
      coordinates: { lat: 41.2156, lon: -8.6789 },
      incidentCommander: 'Chief Anderson',
      unifiedCommand: false,
      threatenedStructures: 245,
      evacuatedPersons: 1200,
      containment: 35,
      acresBurned: 1847,
      forwardProgress: 'STOPPED',
      weather: { temp: 28, humidity: 15, windSpeed: 25, windDirection: 'SW' },
      resources: {
        personnel: 156,
        engines: 18,
        aircraft: 4,
        bulldozers: 6,
        waterTenders: 8
      },
      agencies: ['CAL FIRE', 'County FD', 'Forest Service', 'CHP'],
      publicInfo: 'Evacuation orders in effect for Zones A-C'
    },
    {
      id: 'inc_002',
      incidentName: 'Multi-Vehicle Accident - Highway 101',
      incidentType: 'TRAFFIC_ACCIDENT',
      classification: 'MINOR',
      status: 'CONTAINED',
      priority: 'MEDIUM',
      startTime: Date.now() - 2 * 60 * 60 * 1000,
      location: 'Highway 101, Mile Marker 247',
      coordinates: { lat: 41.1945, lon: -8.6512 },
      incidentCommander: 'Capt. Rodriguez',
      unifiedCommand: true,
      threatenedStructures: 0,
      evacuatedPersons: 0,
      casualties: { fatalities: 0, injuries: 3, transported: 2 },
      lanesBlocked: 2,
      trafficDelay: '45 min',
      resources: {
        personnel: 24,
        engines: 3,
        ambulances: 2,
        trafficControl: 4,
        towTrucks: 3
      },
      agencies: ['Fire Dept', 'EMS', 'CHP', 'Tow Services'],
      publicInfo: 'Avoid Highway 101 northbound, use alternate routes'
    },
    {
      id: 'inc_003',
      incidentName: 'Hazmat Spill - Industrial District',
      incidentType: 'HAZMAT',
      classification: 'TYPE_3',
      status: 'MONITORING',
      priority: 'HIGH',
      startTime: Date.now() - 4 * 60 * 60 * 1000,
      location: 'Industrial District, Sector 12-B',
      coordinates: { lat: 41.1823, lon: -8.6934 },
      incidentCommander: 'Chief Williams',
      unifiedCommand: true,
      threatenedStructures: 45,
      evacuatedPersons: 280,
      containment: 90,
      spillSize: '500 gallons diesel fuel',
      airQuality: 'MODERATE',
      resources: {
        personnel: 67,
        engines: 8,
        hazmatTeams: 3,
        excavators: 2,
        deconUnits: 2
      },
      agencies: ['Fire Dept', 'EPA', 'County Health', 'Sheriff'],
      publicInfo: 'Shelter in place advisory for 1-mile radius'
    }
  ]);

  const [icsStructure, setIcsStructure] = useState({
    incidentCommander: {
      name: 'Chief Anderson',
      position: 'Incident Commander',
      agency: 'CAL FIRE',
      contact: 'IC-Command-1',
      status: 'ACTIVE',
      span: 'All Operations'
    },
    commandStaff: [
      { role: 'Public Information Officer', name: 'Lt. Chen', agency: 'County PIO', contact: 'PIO-1', status: 'ACTIVE' },
      { role: 'Safety Officer', name: 'Capt. Davis', agency: 'Fire Safety', contact: 'SO-1', status: 'ACTIVE' },
      { role: 'Liaison Officer', name: 'Sgt. Martinez', agency: 'CHP', contact: 'LO-1', status: 'ACTIVE' }
    ],
    generalStaff: [
      {
        section: 'Operations',
        chief: 'Chief Thompson',
        agency: 'County Fire',
        contact: 'OPS-Chief',
        status: 'ACTIVE',
        branches: [
          { name: 'Fire Suppression', supervisor: 'Capt. Johnson', resources: 45, status: 'ACTIVE' },
          { name: 'Rescue Operations', supervisor: 'Lt. Brown', resources: 18, status: 'ACTIVE' },
          { name: 'Medical Operations', supervisor: 'EMT Supervisor Wilson', resources: 12, status: 'STANDBY' }
        ]
      },
      {
        section: 'Planning',
        chief: 'Chief Garcia',
        agency: 'Forest Service',
        contact: 'PLAN-Chief',
        status: 'ACTIVE',
        units: [
          { name: 'Situation Unit', leader: 'Analyst Smith', status: 'ACTIVE' },
          { name: 'Resource Unit', leader: 'Coordinator Lee', status: 'ACTIVE' },
          { name: 'Documentation Unit', leader: 'Recorder Taylor', status: 'ACTIVE' }
        ]
      },
      {
        section: 'Logistics',
        chief: 'Chief Rodriguez',
        agency: 'County OES',
        contact: 'LOG-Chief',
        status: 'ACTIVE',
        branches: [
          { name: 'Service Branch', supervisor: 'Lt. Kim', status: 'ACTIVE' },
          { name: 'Support Branch', supervisor: 'Capt. White', status: 'ACTIVE' }
        ]
      },
      {
        section: 'Finance',
        chief: 'Admin Baker',
        agency: 'County Admin',
        contact: 'FIN-Chief',
        status: 'ACTIVE',
        units: [
          { name: 'Cost Unit', leader: 'Analyst Jones', status: 'ACTIVE' },
          { name: 'Compensation Unit', leader: 'HR Clark', status: 'STANDBY' }
        ]
      }
    ]
  });

  const [eocStatus, setEocStatus] = useState({
    activationLevel: 'LEVEL_2',
    eocManager: 'Director Sarah Johnson',
    deputyEocManager: 'Assistant Director Mike Chen',
    activatedTime: Date.now() - 8 * 60 * 60 * 1000,
    operationalPeriod: 'OP-03 (1400-2200Z)',
    nextBriefing: Date.now() + 2 * 60 * 60 * 1000,
    shiftChange: Date.now() + 4 * 60 * 60 * 1000,
    weatherConditions: 'High wind warning, low humidity',
    threatLevel: 'ELEVATED',
    publicWarnings: 3,
    evacuationOrders: 2,
    sheltersOpen: 4,
    shelterPopulation: 847,
    redCrossVolunteers: 23,
    emergencyProclamation: 'ISSUED',
    stateOfEmergency: false,
    mutualAidRequests: 5,
    mutualAidFulfilled: 3
  });

  const [resourceStatus, setResourceStatus] = useState({
    personnel: {
      available: 234,
      assigned: 156,
      enRoute: 34,
      outOfService: 12,
      total: 436
    },
    apparatus: {
      engines: { available: 12, assigned: 18, outOfService: 3, total: 33 },
      trucks: { available: 6, assigned: 8, outOfService: 1, total: 15 },
      ambulances: { available: 8, assigned: 6, outOfService: 2, total: 16 },
      aircraft: { available: 2, assigned: 4, outOfService: 1, total: 7 },
      heavyEquipment: { available: 3, assigned: 6, outOfService: 0, total: 9 }
    },
    facilities: {
      fireStations: { operational: 18, damaged: 1, evacuated: 2, total: 21 },
      hospitals: { operational: 4, surge: 2, evacuation: 0, total: 6 },
      shelters: { open: 4, planned: 2, closed: 1, total: 7 },
      schools: { closed: 23, shelter: 4, damaged: 2, total: 29 }
    }
  });

  const [communications, setCommunications] = useState({
    radioSystems: [
      { name: 'Fire Tactical', frequency: '154.265', status: 'OPERATIONAL', users: 45 },
      { name: 'Fire Command', frequency: '154.280', status: 'OPERATIONAL', users: 12 },
      { name: 'EMS Operations', frequency: '155.340', status: 'OPERATIONAL', users: 18 },
      { name: 'Law Enforcement', frequency: '158.730', status: 'OPERATIONAL', users: 23 },
      { name: 'Public Works', frequency: '151.145', status: 'DEGRADED', users: 8 }
    ],
    emergencyAlertSystem: {
      status: 'READY',
      lastActivation: Date.now() - 3 * 60 * 60 * 1000,
      alertsIssued: 7,
      coverage: 95.7
    },
    publicNotification: {
      nixle: { status: 'ACTIVE', subscribers: 15673, messagesSent: 12 },
      codeRed: { status: 'ACTIVE', subscribers: 23456, messagesSent: 8 },
      socialMedia: { status: 'ACTIVE', followers: 45678, postsPublished: 23 }
    },
    interagencyComms: {
      calFire: 'GOOD',
      sheriff: 'GOOD',
      chp: 'EXCELLENT',
      redCross: 'FAIR',
      utilities: 'GOOD'
    }
  });

  const [emergencyMetrics, setEmergencyMetrics] = useState([]);
  const [incidentTrends, setIncidentTrends] = useState([]);
  const [resourceUtilization, setResourceUtilization] = useState([]);

  const generateEmergencyMetrics = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        active_incidents: Math.floor(Math.random() * 5) + 1,
        personnel_deployed: Math.floor(Math.random() * 100) + 50,
        resources_requested: Math.floor(Math.random() * 15) + 5,
        evacuees: Math.floor(Math.random() * 500) + 200,
        sheltered_persons: Math.floor(Math.random() * 300) + 100,
        response_time: Math.random() * 8 + 6 // 6-14 minutes
      });
    }
    return data;
  };

  const generateIncidentTrends = () => {
    return [
      { type: 'Fire', count: 12, severity: 'High' },
      { type: 'Medical', count: 28, severity: 'Medium' },
      { type: 'Traffic', count: 15, severity: 'Low' },
      { type: 'Hazmat', count: 3, severity: 'High' },
      { type: 'Rescue', count: 8, severity: 'Medium' },
      { type: 'Public Safety', count: 6, severity: 'Low' }
    ];
  };

  const generateResourceUtilization = () => {
    return [
      { category: 'Fire Engines', utilized: 85, available: 15 },
      { category: 'Ambulances', utilized: 75, available: 25 },
      { category: 'Aircraft', utilized: 90, available: 10 },
      { category: 'Personnel', utilized: 68, available: 32 },
      { category: 'Heavy Equipment', utilized: 82, available: 18 },
      { category: 'Command Vehicles', utilized: 45, available: 55 }
    ];
  };

  useEffect(() => {
    setEmergencyMetrics(generateEmergencyMetrics());
    setIncidentTrends(generateIncidentTrends());
    setResourceUtilization(generateResourceUtilization());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update incident statuses
      setActiveIncidents(prev => prev.map(incident => {
        let newContainment = incident.containment;
        let newStatus = incident.status;
        
        if (incident.incidentType === 'WILDFIRE' && incident.status === 'ACTIVE') {
          newContainment = Math.min(100, incident.containment + Math.random() * 2);
          if (newContainment >= 95) {
            newStatus = 'CONTAINED';
          }
        }
        
        if (incident.incidentType === 'TRAFFIC_ACCIDENT' && incident.status === 'CONTAINED') {
          if (Math.random() > 0.9) {
            newStatus = 'CLOSED';
          }
        }

        return {
          ...incident,
          containment: newContainment,
          status: newStatus
        };
      }));

      // Update resource status
      setResourceStatus(prev => ({
        ...prev,
        personnel: {
          ...prev.personnel,
          assigned: Math.max(100, Math.min(200, prev.personnel.assigned + Math.floor((Math.random() - 0.5) * 10))),
          available: Math.max(50, Math.min(300, prev.personnel.available + Math.floor((Math.random() - 0.5) * 15)))
        }
      }));

      // Update EOC status
      setEocStatus(prev => ({
        ...prev,
        shelterPopulation: Math.max(500, Math.min(1000, prev.shelterPopulation + Math.floor((Math.random() - 0.5) * 50))),
        publicWarnings: Math.max(0, Math.min(10, prev.publicWarnings + Math.floor((Math.random() - 0.7) * 2)))
      }));

      // Update communications
      setCommunications(prev => ({
        ...prev,
        emergencyAlertSystem: {
          ...prev.emergencyAlertSystem,
          coverage: Math.max(90, Math.min(100, prev.emergencyAlertSystem.coverage + (Math.random() - 0.5) * 2))
        }
      }));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getIncidentStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'CONTAINED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MONITORING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'CLOSED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': case 'CRITICAL': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getIcsStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'OFF_DUTY': return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
      default: return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
    }
  };

  const getActivationLevelColor = (level) => {
    switch (level) {
      case 'LEVEL_1': return 'text-red-400';
      case 'LEVEL_2': return 'text-orange-400';
      case 'LEVEL_3': return 'text-yellow-400';
      case 'DEACTIVATED': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (timestamp) => {
    const diff = Date.now() - timestamp;
    const hours = Math.floor(diff / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🚨 EMERGENCY OPERATIONS CENTER (EOC)
        </h2>
        <div className="flex items-center space-x-4">
          <div className={`px-3 py-1 rounded-full text-sm font-mono border bg-orange-500/20 text-orange-400 border-orange-500/30`}>
            {eocStatus.activationLevel}
          </div>
          <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-mono border border-red-500/30">
            {eocStatus.threatLevel} THREAT
          </div>
          <div className="text-sm text-gray-400 font-mono">
            FEMA ICS & emergency management dashboard
          </div>
        </div>
      </div>

      {/* EOC Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-200">ACTIVE INCIDENTS</div>
              <div className="text-2xl font-bold text-red-100">
                {activeIncidents.filter(inc => inc.status === 'ACTIVE').length}
              </div>
              <div className="text-xs text-red-300">
                {activeIncidents.length} total incidents
              </div>
            </div>
            <div className="text-3xl opacity-60">🔥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">PERSONNEL DEPLOYED</div>
              <div className="text-2xl font-bold text-orange-100">
                {resourceStatus.personnel.assigned}
              </div>
              <div className="text-xs text-orange-300">
                {resourceStatus.personnel.available} available
              </div>
            </div>
            <div className="text-3xl opacity-60">👥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">EVACUEES</div>
              <div className="text-2xl font-bold text-blue-100">
                {activeIncidents.reduce((sum, inc) => sum + (inc.evacuatedPersons || 0), 0).toLocaleString()}
              </div>
              <div className="text-xs text-blue-300">
                {eocStatus.shelterPopulation} sheltered
              </div>
            </div>
            <div className="text-3xl opacity-60">🏠</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SHELTERS OPEN</div>
              <div className="text-2xl font-bold text-green-100">
                {eocStatus.sheltersOpen}
              </div>
              <div className="text-xs text-green-300">
                {eocStatus.redCrossVolunteers} volunteers
              </div>
            </div>
            <div className="text-3xl opacity-60">🏕️</div>
          </div>
        </div>
      </div>

      {/* Active Incidents and ICS Structure */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Incidents */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔥 ACTIVE INCIDENTS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {activeIncidents.map((incident) => (
              <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getIncidentStatusColor(incident.status)}`}>
                      {incident.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono ${getPriorityColor(incident.priority)}`}>
                      {incident.priority}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {incident.classification}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatDuration(incident.startTime)}
                  </div>
                </div>
                
                <h4 className="font-bold text-white text-sm mb-2">{incident.incidentName}</h4>
                <div className="text-xs text-purple-400 mb-3">IC: {incident.incidentCommander}</div>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Type</div>
                    <div className="text-cyan-400">{incident.incidentType}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Location</div>
                    <div className="text-yellow-400">{incident.location}</div>
                  </div>
                </div>

                {incident.incidentType === 'WILDFIRE' && (
                  <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">Containment</div>
                      <div className="text-green-400">{incident.containment.toFixed(0)}%</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Acres Burned</div>
                      <div className="text-red-400">{incident.acresBurned.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Threatened</div>
                      <div className="text-orange-400">{incident.threatenedStructures} structures</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Progress</div>
                      <div className="text-blue-400">{incident.forwardProgress}</div>
                    </div>
                  </div>
                )}

                {incident.casualties && (
                  <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                    <div>
                      <div className="text-gray-400">Fatalities</div>
                      <div className="text-red-400">{incident.casualties.fatalities}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Injuries</div>
                      <div className="text-yellow-400">{incident.casualties.injuries}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Transported</div>
                      <div className="text-cyan-400">{incident.casualties.transported}</div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Personnel</div>
                    <div className="text-blue-400">{incident.resources.personnel}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Engines</div>
                    <div className="text-green-400">{incident.resources.engines || incident.resources.ambulances || 0}</div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Agencies:</div>
                  <div className="flex flex-wrap gap-1">
                    {incident.agencies.map((agency, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-gray-300 text-xs">
                        {agency}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-cyan-400">
                  📢 {incident.publicInfo}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ICS Structure */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏛️ INCIDENT COMMAND SYSTEM (ICS)
          </h3>
          
          {/* Incident Commander */}
          <div className="mb-6">
            <div className="bg-blue-700 rounded-lg p-4 text-center">
              <div className="text-sm font-bold text-blue-100">INCIDENT COMMANDER</div>
              <div className="text-lg font-bold text-white">{icsStructure.incidentCommander.name}</div>
              <div className="text-xs text-blue-200">{icsStructure.incidentCommander.agency}</div>
              <div className="text-xs text-blue-300">{icsStructure.incidentCommander.contact}</div>
            </div>
          </div>

          {/* Command Staff */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-white mb-3">Command Staff</h4>
            <div className="grid grid-cols-1 gap-2">
              {icsStructure.commandStaff.map((staff, index) => (
                <div key={index} className="bg-purple-700 rounded p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-purple-100">{staff.role}</div>
                      <div className="text-sm text-white">{staff.name}</div>
                      <div className="text-xs text-purple-200">{staff.agency}</div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs font-mono border ${getIcsStatusColor(staff.status)}`}>
                        {staff.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General Staff */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">General Staff</h4>
            <div className="grid grid-cols-2 gap-3">
              {icsStructure.generalStaff.map((section, index) => (
                <div key={index} className="bg-orange-700 rounded p-3">
                  <div className="text-xs font-bold text-orange-100">{section.section} Section</div>
                  <div className="text-sm text-white">{section.chief}</div>
                  <div className="text-xs text-orange-200 mb-2">{section.agency}</div>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getIcsStatusColor(section.status)}`}>
                    {section.status}
                  </span>
                  
                  {section.branches && (
                    <div className="mt-2">
                      <div className="text-xs text-orange-200 mb-1">Branches:</div>
                      {section.branches.map((branch, branchIndex) => (
                        <div key={branchIndex} className="text-xs text-orange-100 ml-2">
                          • {branch.name} ({branch.resources} resources)
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.units && (
                    <div className="mt-2">
                      <div className="text-xs text-orange-200 mb-1">Units:</div>
                      {section.units.map((unit, unitIndex) => (
                        <div key={unitIndex} className="text-xs text-orange-100 ml-2">
                          • {unit.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resource Status and Communications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📦 RESOURCE STATUS
          </h3>
          
          <div className="space-y-4">
            {/* Personnel */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Personnel Deployment</h4>
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={[
                      { name: 'Assigned', value: resourceStatus.personnel.assigned, fill: '#EF4444' },
                      { name: 'Available', value: resourceStatus.personnel.available, fill: '#10B981' },
                      { name: 'En Route', value: resourceStatus.personnel.enRoute, fill: '#F59E0B' },
                      { name: 'Out of Service', value: resourceStatus.personnel.outOfService, fill: '#6B7280' }
                    ]}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={60}
                    paddingAngle={2}
                    dataKey="value"
                  >
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                  />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Apparatus */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Apparatus Status</h4>
              <div className="space-y-2">
                {Object.entries(resourceStatus.apparatus).map(([type, data]) => (
                  <div key={type} className="flex justify-between text-xs">
                    <span className="text-gray-400 capitalize">{type.replace(/([A-Z])/g, ' $1')}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-red-400">{data.assigned} assigned</span>
                      <span className="text-green-400">{data.available} available</span>
                      <span className="text-gray-400">{data.total} total</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Facilities */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Critical Facilities</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Fire Stations</div>
                  <div className="text-green-400">{resourceStatus.facilities.fireStations.operational}/{resourceStatus.facilities.fireStations.total} operational</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Hospitals</div>
                  <div className="text-green-400">{resourceStatus.facilities.hospitals.operational}/{resourceStatus.facilities.hospitals.total} operational</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Shelters</div>
                  <div className="text-blue-400">{resourceStatus.facilities.shelters.open}/{resourceStatus.facilities.shelters.total} open</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="text-gray-400">Schools</div>
                  <div className="text-red-400">{resourceStatus.facilities.schools.closed}/{resourceStatus.facilities.schools.total} closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communications and Public Information */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 COMMUNICATIONS & PUBLIC INFO
          </h3>
          
          <div className="space-y-4">
            {/* Radio Systems */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Radio Systems</h4>
              <div className="space-y-2">
                {communications.radioSystems.map((radio, index) => (
                  <div key={index} className="flex justify-between text-xs">
                    <div>
                      <span className="text-gray-300">{radio.name}</span>
                      <span className="text-cyan-400 ml-2">{radio.frequency}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded ${getIcsStatusColor(radio.status)}`}>
                        {radio.status}
                      </span>
                      <span className="text-purple-400">{radio.users} users</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Alert System */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Emergency Alert System</h4>
              <div className="bg-gray-700 rounded p-3">
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={getIcsStatusColor(communications.emergencyAlertSystem.status).split(' ')[0]}>
                      {communications.emergencyAlertSystem.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coverage:</span>
                    <span className="text-green-400">{communications.emergencyAlertSystem.coverage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Alerts Issued:</span>
                    <span className="text-yellow-400">{communications.emergencyAlertSystem.alertsIssued}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Activation:</span>
                    <span className="text-blue-400">{formatTime(communications.emergencyAlertSystem.lastActivation)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Public Notification */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Public Notification</h4>
              <div className="space-y-2">
                <div className="bg-gray-700 rounded p-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Nixle</span>
                    <span className="text-cyan-400">{communications.publicNotification.nixle.subscribers.toLocaleString()} subscribers</span>
                  </div>
                  <div className="text-xs text-green-400">{communications.publicNotification.nixle.messagesSent} messages sent</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">CodeRED</span>
                    <span className="text-cyan-400">{communications.publicNotification.codeRed.subscribers.toLocaleString()} subscribers</span>
                  </div>
                  <div className="text-xs text-green-400">{communications.publicNotification.codeRed.messagesSent} messages sent</div>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Social Media</span>
                    <span className="text-cyan-400">{communications.publicNotification.socialMedia.followers.toLocaleString()} followers</span>
                  </div>
                  <div className="text-xs text-green-400">{communications.publicNotification.socialMedia.postsPublished} posts published</div>
                </div>
              </div>
            </div>

            {/* Interagency Communications */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Interagency Communications</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {Object.entries(communications.interagencyComms).map(([agency, status]) => (
                  <div key={agency} className="flex justify-between">
                    <span className="text-gray-400 capitalize">{agency.replace(/([A-Z])/g, ' $1')}</span>
                    <span className={
                      status === 'EXCELLENT' ? 'text-green-400' :
                      status === 'GOOD' ? 'text-blue-400' :
                      status === 'FAIR' ? 'text-yellow-400' :
                      'text-red-400'
                    }>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Metrics and EOC Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Emergency Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 EMERGENCY METRICS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={emergencyMetrics}>
              <defs>
                <linearGradient id="incidentsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="personnelGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
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
              <Area 
                type="monotone" 
                dataKey="active_incidents" 
                stackId="1"
                stroke="#EF4444" 
                fill="url(#incidentsGradient)" 
                name="Active Incidents"
              />
              <Area 
                type="monotone" 
                dataKey="personnel_deployed" 
                stackId="2"
                stroke="#10B981" 
                fill="url(#personnelGradient)" 
                name="Personnel Deployed"
              />
              <Line 
                type="monotone" 
                dataKey="evacuees" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Evacuees"
              />
              <Line 
                type="monotone" 
                dataKey="response_time" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Response Time (min)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* EOC Management */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏛️ EOC MANAGEMENT
          </h3>
          
          <div className="space-y-4">
            {/* EOC Leadership */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">EOC Leadership</h4>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-sm text-white mb-1">EOC Manager: {eocStatus.eocManager}</div>
                <div className="text-sm text-cyan-400 mb-1">Deputy: {eocStatus.deputyEocManager}</div>
                <div className="text-xs text-gray-400">Activated: {formatDuration(eocStatus.activatedTime)}</div>
                <div className="text-xs text-purple-400">{eocStatus.operationalPeriod}</div>
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Key Metrics</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-xs text-gray-400">Public Warnings</div>
                  <div className="text-lg font-bold text-yellow-400">{eocStatus.publicWarnings}</div>
                </div>
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-xs text-gray-400">Evacuation Orders</div>
                  <div className="text-lg font-bold text-red-400">{eocStatus.evacuationOrders}</div>
                </div>
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-xs text-gray-400">Mutual Aid Requests</div>
                  <div className="text-lg font-bold text-blue-400">{eocStatus.mutualAidRequests}</div>
                </div>
                <div className="bg-gray-700 rounded p-3">
                  <div className="text-xs text-gray-400">MA Fulfilled</div>
                  <div className="text-lg font-bold text-green-400">{eocStatus.mutualAidFulfilled}</div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Schedule</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Next Briefing:</span>
                  <span className="text-cyan-400">in {Math.floor((eocStatus.nextBriefing - Date.now()) / 60000)}m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shift Change:</span>
                  <span className="text-yellow-400">in {Math.floor((eocStatus.shiftChange - Date.now()) / 60000)}m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Weather:</span>
                  <span className="text-orange-400">{eocStatus.weatherConditions}</span>
                </div>
              </div>
            </div>

            {/* Declarations */}
            <div>
              <h4 className="text-sm font-bold text-white mb-2">Emergency Declarations</h4>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Emergency Proclamation:</span>
                  <span className="text-red-400">{eocStatus.emergencyProclamation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">State of Emergency:</span>
                  <span className={eocStatus.stateOfEmergency ? 'text-red-400' : 'text-green-400'}>
                    {eocStatus.stateOfEmergency ? 'DECLARED' : 'NOT DECLARED'}
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

export default EmergencyOperationsEOC;