// Emergency Operations Center (EOC) - FEMA NIMS-Based 2026 Design
// Inspired by FEMA ICS structure, incident command systems, and multi-agency coordination
import { useState, useEffect } from 'react';
import { 
  AlertTriangle, Bell, Shield, Users, Radio, Map, Clock, Target,
  Activity, TrendingUp, TrendingDown, CheckCircle, XCircle, 
  Phone, MessageSquare, Navigation, Zap, Eye, Settings,
  BarChart3, PieChart, LineChart, Gauge, MapPin, Satellite,
  Truck, Plane, Building, Home,
  Wifi, Database, Cloud, Monitor, Server, Network, Router,
  Wind, Thermometer, Droplets, Sun, CloudRain, Snowflake,
  Camera, Megaphone, FileText, Clipboard, Calendar, Archive
} from 'lucide-react';
import { LineChart as RechartsLineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, RadialBarChart, RadialBar } from 'recharts';

export default function EmergencyOperationsCenter() {
  const [eocStatus, setEocStatus] = useState({
    activationLevel: 'LEVEL_2', // LEVEL_1 (Full), LEVEL_2 (Partial), LEVEL_3 (Monitoring)
    activeIncidents: 7,
    criticalIncidents: 2,
    resourcesDeployed: 156,
    personnelActivated: 89,
    agenciesCoordinating: 23,
    operationalPeriod: '12 hours',
    nextBriefing: '14:30',
    weatherCondition: 'SEVERE_WEATHER_WARNING',
    communicationsStatus: 'OPTIMAL',
    sheltersOpen: 12,
    evacuationOrders: 3
  });

  const [incidentCommandStructure, setIncidentCommandStructure] = useState({
    incidentCommander: {
      name: 'IC Williams',
      position: 'Incident Commander',
      status: 'ACTIVE',
      location: 'EOC Command Post',
      experience: '15 years',
      certifications: ['ICS-400', 'AHiM', 'PIO'],
      activeSpan: '08:00 - Current'
    },
    commandStaff: [
      {
        name: 'PIO Rodriguez',
        position: 'Public Information Officer',
        status: 'BRIEFING_MEDIA',
        location: 'Media Center',
        experience: '8 years',
        certifications: ['ICS-300', 'G-290'],
        currentTask: 'Coordinating public messaging for evacuation zones'
      },
      {
        name: 'SO Thompson',
        position: 'Safety Officer',
        status: 'FIELD_ASSESSMENT',
        location: 'Zone Alpha',
        experience: '12 years',
        certifications: ['ICS-300', 'OSHA-30'],
        currentTask: 'Monitoring responder safety in flood zones'
      },
      {
        name: 'LO Chen',
        position: 'Liaison Officer',
        status: 'COORDINATING',
        location: 'EOC Floor',
        experience: '10 years',
        certifications: ['ICS-300', 'G-775'],
        currentTask: 'Federal agency coordination for resource requests'
      }
    ],
    operationsSections: [
      {
        sectionChief: 'OPS Chief Johnson',
        status: 'DIRECTING_OPERATIONS',
        location: 'Operations Center',
        branches: [
          {
            name: 'Fire/Rescue Branch',
            director: 'Fire Chief Martinez',
            units: 12,
            personnel: 156,
            status: 'FULLY_DEPLOYED',
            primaryTask: 'Search and rescue operations in affected areas'
          },
          {
            name: 'Law Enforcement Branch',
            director: 'Police Chief Anderson',
            units: 8,
            personnel: 89,
            status: 'TRAFFIC_CONTROL',
            primaryTask: 'Evacuation route security and traffic management'
          },
          {
            name: 'EMS Branch',
            director: 'EMS Director Taylor',
            units: 15,
            personnel: 67,
            status: 'STANDBY_READY',
            primaryTask: 'Medical support and emergency transportation'
          },
          {
            name: 'Public Works Branch',
            director: 'PW Director Wilson',
            units: 6,
            personnel: 45,
            status: 'INFRASTRUCTURE_REPAIR',
            primaryTask: 'Road clearance and utility restoration'
          }
        ]
      }
    ],
    planningSection: {
      sectionChief: 'Planning Chief Davis',
      status: 'DEVELOPING_IAP',
      location: 'Planning Room',
      nextIAPDue: '18:00',
      situationUnit: 'COLLECTING_DATA',
      resourcesUnit: 'TRACKING_ASSIGNMENTS',
      demobilizationUnit: 'PLANNING_PHASE_DOWN'
    },
    logisticsSection: {
      sectionChief: 'Logistics Chief Brown',
      status: 'RESOURCE_COORDINATION',
      location: 'Resource Center',
      facilitiesUnit: 'SHELTER_MANAGEMENT',
      supplyUnit: 'DISTRIBUTING_SUPPLIES',
      groundSupportUnit: 'EQUIPMENT_STAGING',
      communicationsUnit: 'NETWORK_OPTIMAL'
    },
    financeSection: {
      sectionChief: 'Finance Chief Garcia',
      status: 'COST_TRACKING',
      location: 'Admin Center',
      estimatedCosts: '$2.4M',
      reimbursementStatus: 'FEMA_SUBMITTED',
      personnelTimeUnit: 'TRACKING_HOURS',
      procurementUnit: 'EMERGENCY_PURCHASES'
    }
  });

  const [activeIncidents, setActiveIncidents] = useState([
    {
      incidentId: 'INC-2026-0847',
      type: 'SEVERE_WEATHER',
      status: 'ACTIVE',
      priority: 'HIGH',
      title: 'Hurricane Zeta Landfall',
      description: 'Category 3 hurricane making landfall with 115 mph winds, storm surge 12-15 feet',
      location: 'Coastal Zone Alpha-Bravo',
      startTime: '2026-03-14T06:00:00Z',
      impactArea: '250 square miles',
      populationAffected: 125000,
      evacuationStatus: 'MANDATORY_ORDERED',
      resourcesAssigned: 89,
      incidentCommander: 'IC Williams',
      nextUpdate: '11:45 PM',
      weatherData: {
        windSpeed: 115,
        pressure: 945,
        rainfall: 8.5,
        stormSurge: 14.2
      }
    },
    {
      incidentId: 'INC-2026-0848',
      type: 'STRUCTURE_FIRE',
      status: 'CONTAINED',
      priority: 'MEDIUM',
      title: 'Industrial Complex Fire',
      description: 'Multi-alarm fire at chemical processing facility, hazmat concerns',
      location: 'Industrial District, Zone Charlie',
      startTime: '2026-03-14T09:30:00Z',
      impactArea: '0.5 square miles',
      populationAffected: 2500,
      evacuationStatus: 'SHELTER_IN_PLACE',
      resourcesAssigned: 34,
      incidentCommander: 'Fire Chief Martinez',
      nextUpdate: '12:00 AM',
      hazmatStatus: 'LEVEL_B_CONTAINMENT'
    },
    {
      incidentId: 'INC-2026-0849',
      type: 'MASS_CASUALTY',
      status: 'STABILIZED',
      priority: 'CRITICAL',
      title: 'Multi-Vehicle Highway Accident',
      description: '15-vehicle collision on Interstate 95, multiple casualties',
      location: 'I-95 Mile Marker 127',
      startTime: '2026-03-14T14:45:00Z',
      impactArea: '2 miles highway closure',
      populationAffected: 35000,
      evacuationStatus: 'TRAFFIC_DIVERSION',
      resourcesAssigned: 28,
      incidentCommander: 'EMS Director Taylor',
      nextUpdate: '11:50 PM',
      casualtyCount: {
        critical: 8,
        serious: 15,
        minor: 22,
        fatalities: 3
      }
    },
    {
      incidentId: 'INC-2026-0850',
      type: 'UTILITY_OUTAGE',
      status: 'RESPONDING',
      priority: 'MEDIUM',
      title: 'Power Grid Failure',
      description: 'Hurricane-related power outages affecting 85,000 customers',
      location: 'Grid Sectors 7-12',
      startTime: '2026-03-14T07:15:00Z',
      impactArea: '150 square miles',
      populationAffected: 85000,
      evacuationStatus: 'COOLING_CENTERS_OPEN',
      resourcesAssigned: 45,
      incidentCommander: 'PW Director Wilson',
      nextUpdate: '12:15 AM',
      restorationETA: '72 hours'
    },
    {
      incidentId: 'INC-2026-0851',
      type: 'FLOODING',
      status: 'MONITORING',
      priority: 'HIGH',
      title: 'River Flooding',
      description: 'Rushing River exceeding flood stage, levee monitoring critical',
      location: 'Riverside Communities',
      startTime: '2026-03-14T10:00:00Z',
      impactArea: '25 square miles',
      populationAffected: 15000,
      evacuationStatus: 'VOLUNTARY_EVACUATION',
      resourcesAssigned: 23,
      incidentCommander: 'OPS Chief Johnson',
      nextUpdate: 'Continuous',
      waterLevel: '24.7 feet (flood stage: 22 feet)'
    }
  ]);

  const [resourceStatus, setResourceStatus] = useState({
    personnel: {
      firefighters: { available: 234, deployed: 156, reserve: 78 },
      lawEnforcement: { available: 189, deployed: 89, reserve: 100 },
      ems: { available: 145, deployed: 67, reserve: 78 },
      publicWorks: { available: 89, deployed: 45, reserve: 44 },
      volunteers: { available: 456, deployed: 89, reserve: 367 }
    },
    equipment: {
      fireEngines: { available: 45, deployed: 28, maintenance: 3 },
      ambulances: { available: 34, deployed: 15, maintenance: 2 },
      rescueVehicles: { available: 23, deployed: 12, maintenance: 1 },
      utilityTrucks: { available: 67, deployed: 34, maintenance: 4 },
      helicopters: { available: 8, deployed: 3, weather_grounded: 2 }
    },
    facilities: {
      shelters: { capacity: 15000, occupied: 8945, available: 6055 },
      hospitals: { beds: 2340, occupied: 1876, available: 464 },
      stagingAreas: { total: 12, active: 8, setup_in_progress: 2 },
      commandPosts: { total: 8, active: 6, reserve: 2 }
    },
    supplies: {
      water: { bottles: 125000, distributed: 34567, remaining: 90433 },
      mre: { meals: 89000, distributed: 23456, remaining: 65544 },
      blankets: { units: 15000, distributed: 8945, remaining: 6055 },
      medicalSupplies: { status: 'ADEQUATE', criticalItems: 3, reorderLevel: false }
    }
  });

  const [communicationsSystems, setCommunicationsSystems] = useState({
    primaryRadio: { status: 'OPERATIONAL', channels: 16, traffic: 'HIGH' },
    backupRadio: { status: 'STANDBY', channels: 8, traffic: 'LOW' },
    cellularNetwork: { status: 'DEGRADED', coverage: 67, congestion: 'SEVERE' },
    satelliteCom: { status: 'OPERATIONAL', terminals: 12, latency: '145ms' },
    internetConnectivity: { status: 'OPERATIONAL', bandwidth: '500 Mbps', backup: 'ACTIVE' },
    alertingSystems: {
      eas: { status: 'ACTIVE', lastAlert: '10:30 PM' },
      wirelessAlert: { status: 'OPERATIONAL', coverage: 94 },
      socialMedia: { status: 'ACTIVE', followers_reached: 234567 },
      mediaRelations: { activeOutlets: 23, pressConferences: 3 }
    }
  });

  const [situationalAwareness, setSituationalAwareness] = useState({
    weatherData: {
      temperature: 78, // Fahrenheit
      windSpeed: 85, // mph
      windDirection: 'ENE',
      barometricPressure: 29.12,
      humidity: 89,
      visibility: 0.5, // miles
      precipitation: 'HEAVY_RAIN',
      forecast: 'DETERIORATING'
    },
    hazmatSituations: {
      chemicalSpills: 1,
      radiationLevels: 'NORMAL',
      airQuality: 'MODERATE',
      waterContamination: 'MONITORING'
    },
    infrastructureStatus: {
      bridges: { total: 45, closed: 8, monitored: 12 },
      roads: { total_miles: 567, closed_miles: 89, detours: 23 },
      airports: { total: 3, operational: 1, closed: 2 },
      seaports: { total: 2, operational: 0, storm_closure: 2 },
      railways: { total_miles: 234, operational_miles: 156, suspended: 78 }
    },
    emergencyServices: {
      fireStations: { total: 34, operational: 32, evacuated: 2 },
      policeStations: { total: 23, operational: 23, backup_power: 8 },
      hospitals: { total: 12, operational: 10, generator_power: 6, evacuated: 2 },
      schools: { total: 89, shelters: 12, evacuated: 34, closed: 43 }
    }
  });

  const [operationalTimeline, setOperationalTimeline] = useState([
    {
      time: '06:00',
      event: 'Hurricane Zeta landfall imminent - EOC Level 2 activation',
      type: 'ACTIVATION',
      priority: 'HIGH'
    },
    {
      time: '06:15',
      event: 'Mandatory evacuation ordered for Coastal Zones A-B',
      type: 'EVACUATION',
      priority: 'CRITICAL'
    },
    {
      time: '07:15',
      event: 'Power grid failure reported - 85,000 customers affected',
      type: 'INFRASTRUCTURE',
      priority: 'HIGH'
    },
    {
      time: '08:30',
      event: 'Hurricane eye wall contact - winds 115 mph sustained',
      type: 'WEATHER',
      priority: 'CRITICAL'
    },
    {
      time: '09:30',
      event: 'Industrial complex fire reported - hazmat response activated',
      type: 'INCIDENT',
      priority: 'HIGH'
    },
    {
      time: '10:00',
      event: 'Rushing River exceeding flood stage - levee monitoring initiated',
      type: 'FLOODING',
      priority: 'HIGH'
    },
    {
      time: '11:45',
      event: 'Storm surge peak - 14.2 feet recorded at gauge station',
      type: 'WEATHER',
      priority: 'CRITICAL'
    },
    {
      time: '14:45',
      event: 'Multi-vehicle accident I-95 - mass casualty incident declared',
      type: 'INCIDENT',
      priority: 'CRITICAL'
    }
  ]);

  // Real-time EOC updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update EOC status
      setEocStatus(prev => ({
        ...prev,
        activeIncidents: Math.max(3, Math.min(12, prev.activeIncidents + Math.floor((Math.random() - 0.6) * 2))),
        resourcesDeployed: Math.max(100, Math.min(250, prev.resourcesDeployed + Math.floor((Math.random() - 0.5) * 10))),
        personnelActivated: Math.max(60, Math.min(150, prev.personnelActivated + Math.floor((Math.random() - 0.5) * 5))),
        agenciesCoordinating: Math.max(15, Math.min(35, prev.agenciesCoordinating + Math.floor((Math.random() - 0.5) * 2)))
      }));

      // Update weather data
      setSituationalAwareness(prev => ({
        ...prev,
        weatherData: {
          ...prev.weatherData,
          windSpeed: Math.max(40, Math.min(120, prev.weatherData.windSpeed + Math.floor((Math.random() - 0.3) * 8))),
          barometricPressure: Math.max(28.5, Math.min(30.5, prev.weatherData.barometricPressure + (Math.random() - 0.5) * 0.2)),
          visibility: Math.max(0.1, Math.min(10, prev.weatherData.visibility + (Math.random() - 0.3) * 0.5))
        }
      }));

      // Update resource deployments
      setResourceStatus(prev => ({
        ...prev,
        personnel: {
          ...prev.personnel,
          firefighters: {
            ...prev.personnel.firefighters,
            deployed: Math.max(100, Math.min(200, prev.personnel.firefighters.deployed + Math.floor((Math.random() - 0.4) * 8)))
          }
        },
        facilities: {
          ...prev.facilities,
          shelters: {
            ...prev.facilities.shelters,
            occupied: Math.max(6000, Math.min(12000, prev.facilities.shelters.occupied + Math.floor((Math.random() - 0.2) * 200)))
          }
        }
      }));

      // Occasionally add timeline events
      if (Math.random() > 0.92) {
        const eventTypes = ['UPDATE', 'RESOURCE', 'WEATHER', 'INCIDENT'];
        const priorities = ['INFO', 'MEDIUM', 'HIGH', 'CRITICAL'];
        const events = [
          'Resource request fulfilled - additional units deployed',
          'Weather conditions updating - monitoring continues',
          'Shelter capacity status updated',
          'Communications check completed - all systems operational',
          'Situational update from field commanders received'
        ];
        
        const newEvent = {
          time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
          event: events[Math.floor(Math.random() * events.length)],
          type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
          priority: priorities[Math.floor(Math.random() * priorities.length)]
        };
        
        setOperationalTimeline(prev => [newEvent, ...prev.slice(0, 19)]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status?.toUpperCase()) {
      case 'OPERATIONAL': case 'ACTIVE': case 'OPTIMAL': case 'CONTAINED': return 'text-green-400';
      case 'DEGRADED': case 'MONITORING': case 'STANDBY': case 'RESPONDING': return 'text-yellow-400';
      case 'CRITICAL': case 'SEVERE': case 'FAILED': case 'DOWN': return 'text-red-400';
      case 'STABILIZED': case 'COORDINATING': case 'BRIEFING_MEDIA': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority?.toUpperCase()) {
      case 'CRITICAL': return 'bg-red-900/30 border-red-500/50 text-red-300';
      case 'HIGH': return 'bg-orange-900/30 border-orange-500/50 text-orange-300';
      case 'MEDIUM': return 'bg-yellow-900/30 border-yellow-500/50 text-yellow-300';
      case 'LOW': case 'INFO': return 'bg-blue-900/30 border-blue-500/50 text-blue-300';
      default: return 'bg-gray-900/30 border-gray-500/50 text-gray-300';
    }
  };

  const getIncidentTypeIcon = (type) => {
    switch(type) {
      case 'SEVERE_WEATHER': return <CloudRain className="w-5 h-5" />;
      case 'STRUCTURE_FIRE': return <Truck className="w-5 h-5" />;
      case 'MASS_CASUALTY': return <Truck className="w-5 h-5" />;
      case 'UTILITY_OUTAGE': return <Zap className="w-5 h-5" />;
      case 'FLOODING': return <Droplets className="w-5 h-5" />;
      case 'HAZMAT': return <AlertTriangle className="w-5 h-5" />;
      default: return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getActivationLevelColor = (level) => {
    switch(level) {
      case 'LEVEL_1': return 'text-red-400 bg-red-900/20';
      case 'LEVEL_2': return 'text-yellow-400 bg-yellow-900/20';
      case 'LEVEL_3': return 'text-blue-400 bg-blue-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const resourceUtilization = [
    { name: 'Fire/Rescue', deployed: 156, available: 234, utilization: 67 },
    { name: 'Law Enforcement', deployed: 89, available: 189, utilization: 47 },
    { name: 'EMS', deployed: 67, available: 145, utilization: 46 },
    { name: 'Public Works', deployed: 45, available: 89, utilization: 51 },
    { name: 'Volunteers', deployed: 89, available: 456, utilization: 20 }
  ];

  const incidentPriorityDistribution = [
    { name: 'Critical', value: 2, color: '#EF4444' },
    { name: 'High', value: 3, color: '#F97316' },
    { name: 'Medium', value: 2, color: '#EAB308' }
  ];

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* EOC Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-red-400 flex items-center">
            <Shield className="w-8 h-8 mr-3" />
            Emergency Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-lg font-semibold ${getActivationLevelColor(eocStatus.activationLevel)}`}>
              {eocStatus.activationLevel.replace('_', ' ')}
            </div>
            <div className="flex items-center">
              <AlertTriangle className="w-4 h-4 mr-2" />
              <span>{eocStatus.activeIncidents} Active Incidents</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span>{eocStatus.personnelActivated} Personnel</span>
            </div>
            <div>Next Briefing: {eocStatus.nextBriefing}</div>
          </div>
        </div>
        <p className="text-gray-300">FEMA NIMS-based incident command system with multi-agency coordination, resource management & situational awareness</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main EOC Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Incident Command Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Incident Command Structure (ICS)
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Activation Level</span>
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
                <div className="text-lg font-bold text-red-400">
                  {eocStatus.activationLevel.replace('_', ' ')}
                </div>
                <div className="text-sm text-gray-400">Partial EOC</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Active Incidents</span>
                  <AlertTriangle className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-lg font-bold text-orange-400">
                  {eocStatus.activeIncidents}
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-red-400">{eocStatus.criticalIncidents}</span> critical
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Resources</span>
                  <Truck className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-lg font-bold text-blue-400">
                  {eocStatus.resourcesDeployed}
                </div>
                <div className="text-sm text-gray-400">deployed</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Personnel</span>
                  <Users className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-lg font-bold text-purple-400">
                  {eocStatus.personnelActivated}
                </div>
                <div className="text-sm text-gray-400">activated</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Agencies</span>
                  <Building className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-lg font-bold text-green-400">
                  {eocStatus.agenciesCoordinating}
                </div>
                <div className="text-sm text-gray-400">coordinating</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Shelters</span>
                  <Home className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-lg font-bold text-cyan-400">
                  {eocStatus.sheltersOpen}
                </div>
                <div className="text-sm text-gray-400">operational</div>
              </div>
            </div>

            {/* Incident Commander & Command Staff */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Command Staff</h3>
              
              {/* Incident Commander */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 mr-2 text-red-400" />
                    <span className="font-bold text-white">{incidentCommandStructure.incidentCommander.name}</span>
                  </div>
                  <span className={`text-sm font-semibold ${getStatusColor(incidentCommandStructure.incidentCommander.status)}`}>
                    {incidentCommandStructure.incidentCommander.status}
                  </span>
                </div>
                <div className="text-sm text-red-300 mb-1">{incidentCommandStructure.incidentCommander.position}</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Location: </span>
                    <span className="text-white">{incidentCommandStructure.incidentCommander.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Experience: </span>
                    <span className="text-blue-400">{incidentCommandStructure.incidentCommander.experience}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Active: </span>
                    <span className="text-green-400">{incidentCommandStructure.incidentCommander.activeSpan}</span>
                  </div>
                </div>
              </div>

              {/* Command Staff */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {incidentCommandStructure.commandStaff.map((staff, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-white text-sm">{staff.name}</span>
                      <span className={`text-xs font-semibold ${getStatusColor(staff.status)}`}>
                        {staff.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-sm text-blue-300 mb-2">{staff.position}</div>
                    <div className="text-xs text-gray-400 mb-1">
                      Location: <span className="text-white">{staff.location}</span>
                    </div>
                    <div className="text-xs text-gray-300">{staff.currentTask}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Active Incidents & Resource Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Active Incidents */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-orange-400 mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Active Incidents
              </h2>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {activeIncidents.slice(0, 4).map((incident, index) => (
                  <div key={index} className={`border rounded p-4 ${getPriorityColor(incident.priority)}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {getIncidentTypeIcon(incident.type)}
                        <span className="ml-2 font-semibold text-white text-sm">{incident.title}</span>
                      </div>
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                        {incident.priority}
                      </span>
                    </div>
                    
                    <div className="text-xs text-gray-300 mb-2">{incident.description}</div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div>
                        <span className="text-gray-400">Location: </span>
                        <span className="text-blue-400">{incident.location}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">IC: </span>
                        <span className="text-green-400">{incident.incidentCommander}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Population: </span>
                        <span className="text-white">{incident.populationAffected.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Resources: </span>
                        <span className="text-purple-400">{incident.resourcesAssigned}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className={`${getStatusColor(incident.status)}`}>{incident.status}</span>
                      <span className="text-gray-400">Next Update: {incident.nextUpdate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resource Utilization */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Resource Utilization
              </h2>
              
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={resourceUtilization}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" fontSize={10} />
                  <YAxis stroke="#9CA3AF" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend />
                  <Bar dataKey="deployed" fill="#3B82F6" name="Deployed" />
                  <Bar dataKey="available" fill="#6B7280" name="Available" />
                </BarChart>
              </ResponsiveContainer>

              {/* Facilities Status */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-3">Critical Facilities</div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Shelters:</span>
                      <span className="text-green-400">{resourceStatus?.facilities?.shelters?.occupied?.toLocaleString() || 0}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Hospital Beds:</span>
                      <span className="text-blue-400">{resourceStatus?.facilities?.hospitals?.available || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Staging Areas:</span>
                      <span className="text-purple-400">{resourceStatus?.facilities?.stagingAreas?.active || 0}</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Water (bottles):</span>
                      <span className="text-green-400">{resourceStatus?.supplies?.water?.remaining?.toLocaleString() || 0}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">MREs:</span>
                      <span className="text-blue-400">{resourceStatus?.supplies?.mre?.remaining?.toLocaleString() || 0}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Blankets:</span>
                      <span className="text-purple-400">{resourceStatus?.supplies?.blankets?.remaining?.toLocaleString() || 0}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* EOC Control Panel */}
        <div className="space-y-4">
          
          {/* Situational Awareness */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              Situational Awareness
            </h2>
            
            {/* Weather Conditions */}
            <div className="bg-gray-800 rounded-lg p-3 mb-3">
              <div className="text-sm font-semibold text-white mb-2">Current Conditions</div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Wind:</span>
                  <span className="text-red-400">{situationalAwareness?.weatherData?.windSpeed || 0} mph {situationalAwareness?.weatherData?.windDirection || 'N'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pressure:</span>
                  <span className="text-blue-400">{situationalAwareness?.weatherData?.barometricPressure || 30.0}"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Visibility:</span>
                  <span className="text-yellow-400">{situationalAwareness?.weatherData?.visibility || 0} mi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Humidity:</span>
                  <span className="text-white">{situationalAwareness?.weatherData?.humidity || 0}%</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Status */}
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-sm font-semibold text-white mb-2">Infrastructure</div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Bridges Closed:</span>
                  <span className="text-red-400">{situationalAwareness?.infrastructureStatus?.bridges?.closed || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Road Closures:</span>
                  <span className="text-yellow-400">{situationalAwareness?.infrastructureStatus?.roads?.closed_miles || 0} mi</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Airports Open:</span>
                  <span className="text-green-400">{situationalAwareness?.infrastructureStatus?.airports?.operational || 0}/3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Hospitals Evac:</span>
                  <span className="text-orange-400">{situationalAwareness?.infrastructureStatus?.emergencyServices?.hospitals?.evacuated || 0}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Communications Status */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <Radio className="w-5 h-5 mr-2" />
              Communications
            </h2>
            
            <div className="space-y-3">
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-sm font-semibold text-white mb-2">Primary Systems</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Primary Radio:</span>
                    <span className={getStatusColor(communicationsSystems.primaryRadio.status)}>
                      {communicationsSystems.primaryRadio.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cellular:</span>
                    <span className={getStatusColor(communicationsSystems.cellularNetwork.status)}>
                      {communicationsSystems.cellularNetwork.status} ({communicationsSystems.cellularNetwork.coverage}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Satellite:</span>
                    <span className={getStatusColor(communicationsSystems.satelliteCom.status)}>
                      {communicationsSystems.satelliteCom.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Internet:</span>
                    <span className={getStatusColor(communicationsSystems.internetConnectivity.status)}>
                      500 Mbps
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-sm font-semibold text-white mb-2">Public Alerting</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">EAS:</span>
                    <span className="text-green-400">ACTIVE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Wireless Alert:</span>
                    <span className="text-green-400">94% coverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Social Media:</span>
                    <span className="text-blue-400">234K reached</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Media Outlets:</span>
                    <span className="text-white">23 active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Operational Timeline */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Timeline
            </h2>
            
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {operationalTimeline.slice(0, 8).map((event, index) => (
                <div key={index} className="bg-gray-800 rounded p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-blue-400 font-mono text-xs">{event.time}</span>
                    <span className={`text-xs px-2 py-0.5 rounded ${getPriorityColor(event.priority)}`}>
                      {event.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300">{event.event}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Incident Priority Distribution */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <PieChart className="w-5 h-5 mr-2" />
              Incident Priority
            </h2>
            
            <ResponsiveContainer width="100%" height={120}>
              <RechartsPieChart>
                <Pie
                  data={incidentPriorityDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {incidentPriorityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                  formatter={(value) => [`${value}`, 'Incidents']}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
            
            <div className="space-y-1 mt-2">
              {incidentPriorityDistribution.map((priority, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-2" 
                      style={{ backgroundColor: priority.color }}
                    />
                    <span className="text-gray-400">{priority.name}</span>
                  </div>
                  <span className="text-white font-semibold">{priority.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}