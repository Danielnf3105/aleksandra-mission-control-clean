// Emergency Response Intelligence Center - Crisis Management, Disaster Response, Emergency Coordination & Public Safety Analytics
import { useState, useEffect } from 'react';
import { AlertTriangle, Shield, Siren, Phone, MapPin, TrendingUp, TrendingDown, Clock, Radio, CheckCircle, BarChart3, PieChart } from 'lucide-react';

export default function EmergencyResponseIntelligenceCenter() {
  const [emergencyData, setEmergencyData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    emergencyOverview: {
      activeIncidents: 23,
      resolvedToday: 87,
      averageResponseTime: 4.7, // minutes
      criticalAlerts: 3,
      emergencyLevel: 'MODERATE',
      resourcesDeployed: 156,
      personnelOnDuty: 2456,
      emergencyVehicles: 234,
      hospitalCapacity: 87.4, // percentage
      shelterCapacity: 67.8,
      communicationStatus: 'OPERATIONAL',
      coordinationCenters: 12,
      publicSafetyIndex: 89.7,
      disasterReadiness: 94.2
    },
    activeIncidents: [
      {
        id: 'INC-2026-0318-001',
        type: 'FIRE',
        severity: 'HIGH',
        location: 'Downtown Commercial District',
        coordinates: '38.7167, -9.1333',
        reportedTime: '02:15',
        estimatedResolution: '04:30',
        resourcesAssigned: 12,
        personnelInvolved: 45,
        evacuationRequired: true,
        evacuatedPersons: 234,
        status: 'ACTIVE',
        incidentCommander: 'Chief Maria Santos',
        description: 'Commercial building fire with potential structural collapse risk',
        affectedServices: ['Power grid', 'Water supply', 'Traffic flow']
      },
      {
        id: 'INC-2026-0318-002',
        type: 'MEDICAL',
        severity: 'CRITICAL',
        location: 'Highway A1 - KM 47',
        coordinates: '39.2167, -8.6833',
        reportedTime: '01:45',
        estimatedResolution: '03:00',
        resourcesAssigned: 8,
        personnelInvolved: 18,
        evacuationRequired: false,
        evacuatedPersons: 0,
        status: 'RESPONDING',
        incidentCommander: 'Dr. João Silva',
        description: 'Multi-vehicle accident with multiple casualties requiring medical helicopter',
        affectedServices: ['Highway traffic', 'Emergency medical services']
      },
      {
        id: 'INC-2026-0318-003',
        type: 'WEATHER',
        severity: 'MEDIUM',
        location: 'Coastal Region - Porto District',
        coordinates: '41.1579, -8.6291',
        reportedTime: '01:20',
        estimatedResolution: '06:00',
        resourcesAssigned: 15,
        personnelInvolved: 67,
        evacuationRequired: false,
        evacuatedPersons: 0,
        status: 'MONITORING',
        incidentCommander: 'Capt. Ana Ferreira',
        description: 'Severe storm with flooding potential - preventive measures activated',
        affectedServices: ['Power distribution', 'Road access', 'Public transport']
      }
    ],
    responseTeams: {
      fireRescue: {
        totalUnits: 45,
        availableUnits: 33,
        deployedUnits: 12,
        personnelTotal: 567,
        personnelAvailable: 422,
        personnelDeployed: 145,
        averageResponseTime: 3.8, // minutes
        equipmentReadiness: 94.7, // percentage
        stationCoverage: 98.9
      },
      medical: {
        ambulances: 89,
        availableAmbulances: 67,
        deployedAmbulances: 22,
        medicalPersonnel: 234,
        availablePersonnel: 189,
        deployedPersonnel: 45,
        averageResponseTime: 5.2, // minutes
        hospitalBeds: 2345,
        availableBeds: 543,
        icuBeds: 123,
        availableIcuBeds: 34
      },
      police: {
        patrolUnits: 156,
        availableUnits: 123,
        deployedUnits: 33,
        officers: 1234,
        availableOfficers: 987,
        deployedOfficers: 247,
        averageResponseTime: 4.1, // minutes
        coverageArea: 99.7, // percentage
        specialUnits: 23,
        availableSpecialUnits: 18
      },
      searchRescue: {
        teams: 12,
        availableTeams: 9,
        deployedTeams: 3,
        personnel: 156,
        availablePersonnel: 123,
        deployedPersonnel: 33,
        helicopters: 8,
        availableHelicopters: 6,
        rescueBoats: 15,
        availableBoats: 12
      }
    },
    emergencyServices: [
      {
        service: 'Fire & Rescue Services',
        status: 'OPERATIONAL',
        readiness: 94.7,
        response_time: 3.8,
        incidents_today: 23,
        personnel_deployed: 145,
        coverage: 98.9,
        equipment_status: 'READY'
      },
      {
        service: 'Emergency Medical Services',
        status: 'OPERATIONAL',
        readiness: 91.3,
        response_time: 5.2,
        incidents_today: 34,
        personnel_deployed: 45,
        coverage: 97.4,
        equipment_status: 'READY'
      },
      {
        service: 'Police Emergency Response',
        status: 'OPERATIONAL',
        readiness: 96.8,
        response_time: 4.1,
        incidents_today: 67,
        personnel_deployed: 247,
        coverage: 99.7,
        equipment_status: 'READY'
      },
      {
        service: 'Search & Rescue',
        status: 'OPERATIONAL',
        readiness: 89.4,
        response_time: 8.7,
        incidents_today: 5,
        personnel_deployed: 33,
        coverage: 85.3,
        equipment_status: 'MAINTENANCE'
      },
      {
        service: 'Hazmat Response',
        status: 'STANDBY',
        readiness: 87.9,
        response_time: 12.4,
        incidents_today: 2,
        personnel_deployed: 12,
        coverage: 78.6,
        equipment_status: 'READY'
      },
      {
        service: 'Emergency Communications',
        status: 'OPERATIONAL',
        readiness: 99.2,
        response_time: 0.5,
        incidents_today: 234,
        personnel_deployed: 23,
        coverage: 99.9,
        equipment_status: 'OPTIMAL'
      }
    ],
    disasterPreparedness: {
      overallReadiness: 94.2,
      evacuation: {
        plansUpdated: 98.7, // percentage
        routesClear: 96.4,
        shelterCapacity: 67.8, // percentage occupied
        transportationReady: 89.3,
        publicAwareness: 78.9
      },
      infrastructure: {
        powerBackup: 94.7, // systems ready
        communicationRedundancy: 98.9,
        waterReserves: 87.4,
        medicalSupplies: 91.8,
        foodSupplies: 84.6,
        fuelReserves: 89.2
      },
      earlyWarning: {
        systemOperational: 99.8,
        sensorNetwork: 97.4,
        alertDistribution: 95.6,
        publicNotification: 92.3,
        mediaCoordination: 87.9,
        internationalAlerts: 78.4
      },
      training: {
        personnelTrained: 94.2, // percentage
        drillsCompleted: 87.9,
        publicEducation: 67.8,
        interagencyExercises: 82.4,
        equipmentFamiliarity: 96.7,
        protocolUpdates: 91.3
      }
    },
    communicationSystems: {
      primaryNetwork: {
        status: 'OPERATIONAL',
        uptime: 99.8,
        coverage: 99.9,
        capacity: 78.9, // percentage used
        redundancy: 'ACTIVE',
        encryption: 'SECURE'
      },
      backupSystems: {
        radio: 'READY',
        satellite: 'READY',
        cellular: 'READY',
        internet: 'READY',
        mesh_network: 'STANDBY',
        emergency_broadcast: 'READY'
      },
      interagencyCoordination: {
        firePolice: 98.9,
        medicalFire: 97.4,
        policeHealth: 95.6,
        searchRescue: 89.7,
        governmentAgencies: 92.3,
        internationalCooperation: 78.9
      },
      publicNotification: {
        emergencyAlerts: 'OPERATIONAL',
        smsSystem: 96.8, // readiness
        broadcastMedia: 94.2,
        socialMediaIntegration: 89.7,
        mobileApps: 87.3,
        sirens: 99.4,
        publicAddressSystem: 92.8
      }
    },
    riskAssessment: {
      currentThreats: [
        { threat: 'Severe Weather', level: 'MEDIUM', probability: 67.8, impact: 'MODERATE', mitigation: 'ACTIVE' },
        { threat: 'Infrastructure Failure', level: 'LOW', probability: 23.4, impact: 'HIGH', mitigation: 'MONITORED' },
        { threat: 'Cyber Attack', level: 'MEDIUM', probability: 45.7, impact: 'HIGH', mitigation: 'ACTIVE' },
        { threat: 'Pandemic Outbreak', level: 'LOW', probability: 12.8, impact: 'CRITICAL', mitigation: 'PREPARED' },
        { threat: 'Terrorist Activity', level: 'LOW', probability: 8.9, impact: 'CRITICAL', mitigation: 'MONITORED' },
        { threat: 'Natural Disaster', level: 'MEDIUM', probability: 34.6, impact: 'HIGH', mitigation: 'PREPARED' }
      ],
      vulnerabilityAssessment: {
        criticalInfrastructure: 87.4,
        populationDensity: 78.9,
        geographicExposure: 65.3,
        economicImpact: 82.7,
        socialVulnerability: 74.6,
        environmentalRisk: 69.8
      },
      mitigationStrategies: {
        prevention: 89.7,
        preparation: 94.2,
        response: 91.8,
        recovery: 86.4,
        adaptation: 78.9,
        resilience: 83.6
      }
    },
    hospitalCapacity: {
      totalHospitals: 45,
      operationalHospitals: 43,
      totalBeds: 2345,
      availableBeds: 543,
      occupancyRate: 76.8, // percentage
      icuBeds: 123,
      availableIcuBeds: 34,
      icuOccupancyRate: 72.4,
      emergencyRooms: 67,
      operationalErs: 65,
      medicalStaff: 3456,
      availableStaff: 2789,
      bloodSupply: 89.7, // percentage of optimal
      medicalSupplies: 91.8,
      oxygenSupply: 94.3,
      patientCapacityStatus: 'AVAILABLE',
      surgeCapacityReady: true
    },
    publicSafety: {
      crimeRate: 12.4, // per 1000 residents
      trafficAccidents: 234, // this month
      publicDisorders: 5,
      evacuationReadiness: 94.2,
      shelterCapacity: 67.8, // percentage occupied
      publicAwareness: 78.9,
      safetyMeasures: [
        { measure: 'Emergency Alerts', effectiveness: 94.7, coverage: 99.2, response_rate: 78.9 },
        { measure: 'Evacuation Routes', effectiveness: 89.3, coverage: 96.4, response_rate: 87.4 },
        { measure: 'Public Shelters', effectiveness: 91.8, coverage: 82.6, response_rate: 94.2 },
        { measure: 'Emergency Services', effectiveness: 96.4, coverage: 98.7, response_rate: 91.3 },
        { measure: 'Public Information', effectiveness: 87.9, coverage: 89.7, response_rate: 67.8 },
        { measure: 'Community Preparedness', effectiveness: 82.4, coverage: 74.6, response_rate: 56.3 }
      ]
    },
    emergencyAlerts: [
      {
        id: 'ALERT-001',
        type: 'CRITICAL',
        category: 'Fire Emergency',
        message: 'Large commercial fire in downtown district - avoid area, evacuation in progress for 3-block radius',
        location: 'Downtown Commercial District',
        issued: '02:15',
        expires: '06:00',
        affected_population: 12000,
        response_required: true,
        agencies_involved: ['Fire Dept', 'Police', 'EMS', 'Emergency Mgmt'],
        evacuation_status: 'IN PROGRESS'
      },
      {
        id: 'ALERT-002',
        type: 'WARNING',
        category: 'Weather Alert',
        message: 'Severe storm warning for coastal regions - strong winds and flooding potential next 4 hours',
        location: 'Porto Coastal District',
        issued: '01:20',
        expires: '06:00',
        affected_population: 45000,
        response_required: false,
        agencies_involved: ['Weather Service', 'Emergency Mgmt', 'Public Works'],
        evacuation_status: 'MONITORING'
      },
      {
        id: 'ALERT-003',
        type: 'INFO',
        category: 'Traffic Advisory',
        message: 'Highway A1 closed at KM 47 due to multi-vehicle accident - use alternate routes',
        location: 'Highway A1 - KM 47',
        issued: '01:45',
        expires: '04:00',
        affected_population: 8000,
        response_required: false,
        agencies_involved: ['Traffic Police', 'Highway Authority', 'EMS'],
        evacuation_status: 'NONE'
      },
      {
        id: 'ALERT-004',
        type: 'SUCCESS',
        category: 'Incident Resolved',
        message: 'Chemical spill at industrial facility successfully contained - area reopened to public',
        location: 'Industrial Zone East',
        issued: '00:30',
        expires: '03:00',
        affected_population: 5000,
        response_required: false,
        agencies_involved: ['Hazmat Team', 'Environmental Agency', 'Health Dept'],
        evacuation_status: 'LIFTED'
      }
    ],
    emergencySupplies: {
      medicalSupplies: {
        masks: { stock: 234567, optimal: 300000, percentage: 78.2, status: 'ADEQUATE' },
        respirators: { stock: 12345, optimal: 15000, percentage: 82.3, status: 'ADEQUATE' },
        medications: { stock: 5678, optimal: 7000, percentage: 81.1, status: 'ADEQUATE' },
        bloodSupply: { stock: 890, optimal: 1000, percentage: 89.0, status: 'GOOD' },
        oxygenTanks: { stock: 234, optimal: 250, percentage: 93.6, status: 'GOOD' }
      },
      emergencyFood: {
        mres: { stock: 45678, optimal: 60000, percentage: 76.1, status: 'ADEQUATE' },
        waterBottles: { stock: 123456, optimal: 150000, percentage: 82.3, status: 'ADEQUATE' },
        babyFormula: { stock: 2345, optimal: 3000, percentage: 78.2, status: 'ADEQUATE' },
        animalFood: { stock: 5678, optimal: 7000, percentage: 81.1, status: 'ADEQUATE' }
      },
      equipment: {
        generators: { stock: 89, optimal: 100, percentage: 89.0, status: 'GOOD' },
        fuelReserves: { stock: 234567, optimal: 300000, percentage: 78.2, status: 'ADEQUATE' },
        communicationDevices: { stock: 456, optimal: 500, percentage: 91.2, status: 'GOOD' },
        rescueBoats: { stock: 15, optimal: 18, percentage: 83.3, status: 'ADEQUATE' },
        helicopters: { stock: 8, optimal: 10, percentage: 80.0, status: 'ADEQUATE' }
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEmergencyData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        emergencyOverview: {
          ...prev.emergencyOverview,
          activeIncidents: Math.max(15, Math.min(35, prev.emergencyOverview.activeIncidents + Math.floor((Math.random() - 0.5) * 4))),
          averageResponseTime: Math.max(3.0, Math.min(8.0, prev.emergencyOverview.averageResponseTime + (Math.random() - 0.5) * 1)),
          hospitalCapacity: Math.max(70, Math.min(95, prev.emergencyOverview.hospitalCapacity + (Math.random() - 0.5) * 3))
        },
        communicationSystems: {
          ...prev.communicationSystems,
          primaryNetwork: {
            ...prev.communicationSystems.primaryNetwork,
            capacity: Math.max(60, Math.min(90, prev.communicationSystems.primaryNetwork.capacity + (Math.random() - 0.5) * 5))
          }
        }
      }));
    }, 22000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'RESPONDING': return 'text-orange-400 bg-orange-400/20';
      case 'MONITORING': return 'text-yellow-400 bg-yellow-400/20';
      case 'STANDBY': return 'text-purple-400 bg-purple-400/20';
      case 'MAINTENANCE': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90, reverse = false) => {
    if (reverse) {
      if (value <= excellent / 3) return 'text-green-400';
      if (value <= good / 2) return 'text-blue-400';
      if (value <= good) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.8) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatTime = (minutes) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins.toFixed(0)}m`;
    }
    return `${minutes.toFixed(1)}m`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-red-900 via-slate-900 to-orange-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-red-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl">
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Emergency Response Intelligence Center</h1>
              <p className="text-red-300">Crisis management, disaster response, emergency coordination & public safety analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-red-400">{emergencyData.currentTime}</div>
            <div className="text-red-300">Emergency Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Emergency Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Siren className="w-5 h-5 text-red-400 mr-2" />
                Active Incidents
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{emergencyData.emergencyOverview.activeIncidents}</div>
            <div className="text-red-300 text-sm">Critical: {emergencyData.emergencyOverview.criticalAlerts}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                Response Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatTime(emergencyData.emergencyOverview.averageResponseTime)}</div>
            <div className="text-blue-300 text-sm">Average Response</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                Resources Deployed
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{emergencyData.emergencyOverview.resourcesDeployed}</div>
            <div className="text-green-300 text-sm">Personnel: {formatNumber(emergencyData.emergencyOverview.personnelOnDuty)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MapPin className="w-5 h-5 text-cyan-400 mr-2" />
                Hospital Capacity
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(emergencyData.emergencyOverview.hospitalCapacity)}</div>
            <div className="text-cyan-300 text-sm">Available Beds: {emergencyData.hospitalCapacity.availableBeds}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-purple-400 mr-2" />
                Communication
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(emergencyData.communicationSystems.primaryNetwork.uptime)}</div>
            <div className="text-purple-300 text-sm">Network Uptime</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                Readiness Level
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(emergencyData.emergencyOverview.disasterReadiness)}</div>
            <div className="text-emerald-300 text-sm">Disaster Prepared</div>
          </div>
        </div>

        {/* Active Incidents */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
            Active Emergency Incidents
          </h3>
          <div className="space-y-4">
            {emergencyData.activeIncidents.map((incident, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-white font-medium">{incident.id}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className="text-blue-400 text-sm">{incident.type}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(incident.status)}`}>
                    {incident.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-white font-medium text-sm mb-1">{incident.description}</div>
                    <div className="text-slate-300 text-sm">Location: {incident.location}</div>
                    <div className="text-slate-300 text-sm">Commander: {incident.incidentCommander}</div>
                  </div>
                  <div className="text-sm">
                    <div className="text-slate-300">Reported: {incident.reportedTime}</div>
                    <div className="text-slate-300">Est. Resolution: {incident.estimatedResolution}</div>
                    <div className="text-slate-300">Resources: {incident.resourcesAssigned} units, {incident.personnelInvolved} personnel</div>
                    {incident.evacuationRequired && (
                      <div className="text-orange-400">Evacuation: {incident.evacuatedPersons} persons</div>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {incident.affectedServices.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Teams & Emergency Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-orange-400 mr-2" />
              Response Teams Status
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Fire & Rescue</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Available Units: {emergencyData.responseTeams.fireRescue.availableUnits}/{emergencyData.responseTeams.fireRescue.totalUnits}</div>
                    <div className="text-slate-300">Personnel: {emergencyData.responseTeams.fireRescue.availablePersonnel}/{emergencyData.responseTeams.fireRescue.personnelTotal}</div>
                  </div>
                  <div>
                    <div className="text-orange-400">Response Time: {formatTime(emergencyData.responseTeams.fireRescue.averageResponseTime)}</div>
                    <div className="text-green-400">Readiness: {formatPercentage(emergencyData.responseTeams.fireRescue.equipmentReadiness)}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Emergency Medical</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Ambulances: {emergencyData.responseTeams.medical.availableAmbulances}/{emergencyData.responseTeams.medical.ambulances}</div>
                    <div className="text-slate-300">Personnel: {emergencyData.responseTeams.medical.availablePersonnel}/{emergencyData.responseTeams.medical.medicalPersonnel}</div>
                  </div>
                  <div>
                    <div className="text-blue-400">Response Time: {formatTime(emergencyData.responseTeams.medical.averageResponseTime)}</div>
                    <div className="text-cyan-400">ICU Beds: {emergencyData.responseTeams.medical.availableIcuBeds}/{emergencyData.responseTeams.medical.icuBeds}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Police Emergency</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Patrol Units: {emergencyData.responseTeams.police.availableUnits}/{emergencyData.responseTeams.police.patrolUnits}</div>
                    <div className="text-slate-300">Officers: {emergencyData.responseTeams.police.availableOfficers}/{emergencyData.responseTeams.police.officers}</div>
                  </div>
                  <div>
                    <div className="text-purple-400">Response Time: {formatTime(emergencyData.responseTeams.police.averageResponseTime)}</div>
                    <div className="text-green-400">Coverage: {formatPercentage(emergencyData.responseTeams.police.coverageArea)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Emergency Services Intelligence
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-600/50">
                    <th className="text-left p-2 text-slate-300">Service</th>
                    <th className="text-center p-2 text-slate-300">Status</th>
                    <th className="text-center p-2 text-slate-300">Response</th>
                    <th className="text-center p-2 text-slate-300">Readiness</th>
                  </tr>
                </thead>
                <tbody>
                  {emergencyData.emergencyServices.map((service, index) => (
                    <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                      <td className="p-2 text-white font-medium text-xs">{service.service}</td>
                      <td className="p-2 text-center">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(service.status)}`}>
                          {service.status}
                        </span>
                      </td>
                      <td className="p-2 text-center text-blue-400 text-xs">{formatTime(service.response_time)}</td>
                      <td className={`p-2 text-center text-xs font-medium ${getPerformanceColor(service.readiness, 85, 92)}`}>
                        {formatPercentage(service.readiness)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Emergency Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Siren className="w-5 h-5 text-yellow-400 mr-2" />
            Emergency Response Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {emergencyData.emergencyAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-slate-400">Issued: {alert.issued}</div>
                    <div className="text-slate-400">Expires: {alert.expires}</div>
                  </div>
                </div>
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Location: {alert.location}</div>
                    <div className="text-slate-300">Affected: {formatNumber(alert.affected_population)} people</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Evacuation: {alert.evacuation_status}</div>
                    <div className="text-slate-300">Response: {alert.response_required ? 'Required' : 'Monitoring'}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {alert.agencies_involved.map((agency, agencyIndex) => (
                    <span key={agencyIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {agency}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disaster Preparedness & Risk Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Disaster Preparedness Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(emergencyData.disasterPreparedness.overallReadiness)}</div>
                <div className="text-cyan-300 text-sm">Overall Readiness</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(emergencyData.disasterPreparedness.earlyWarning.systemOperational)}</div>
                <div className="text-green-300 text-sm">Warning System</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Evacuation Readiness</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Plans Updated: {formatPercentage(emergencyData.disasterPreparedness.evacuation.plansUpdated)}</div>
                    <div className="text-slate-300">Routes Clear: {formatPercentage(emergencyData.disasterPreparedness.evacuation.routesClear)}</div>
                  </div>
                  <div>
                    <div className="text-orange-400">Shelter Capacity: {formatPercentage(emergencyData.disasterPreparedness.evacuation.shelterCapacity)}</div>
                    <div className="text-blue-400">Transport Ready: {formatPercentage(emergencyData.disasterPreparedness.evacuation.transportationReady)}</div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Infrastructure Backup</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Power Backup: {formatPercentage(emergencyData.disasterPreparedness.infrastructure.powerBackup)}</div>
                    <div className="text-slate-300">Water Reserves: {formatPercentage(emergencyData.disasterPreparedness.infrastructure.waterReserves)}</div>
                  </div>
                  <div>
                    <div className="text-green-400">Communications: {formatPercentage(emergencyData.disasterPreparedness.infrastructure.communicationRedundancy)}</div>
                    <div className="text-blue-400">Medical Supplies: {formatPercentage(emergencyData.disasterPreparedness.infrastructure.medicalSupplies)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-yellow-400 mr-2" />
              Risk Assessment Intelligence
            </h3>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Current Threat Assessment</h4>
              {emergencyData.riskAssessment.currentThreats.slice(0, 4).map((threat, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">{threat.threat}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(threat.level)}`}>
                      {threat.level}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="text-slate-300">Probability</div>
                      <div className={`${getRiskLevelColor(threat.level)}`}>{formatPercentage(threat.probability)}</div>
                    </div>
                    <div>
                      <div className="text-slate-300">Impact</div>
                      <div className="text-orange-400">{threat.impact}</div>
                    </div>
                    <div>
                      <div className="text-slate-300">Mitigation</div>
                      <div className="text-green-400">{threat.mitigation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Mitigation Strategies</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-slate-300">Prevention: {formatPercentage(emergencyData.riskAssessment.mitigationStrategies.prevention)}</div>
                  <div className="text-slate-300">Preparation: {formatPercentage(emergencyData.riskAssessment.mitigationStrategies.preparation)}</div>
                  <div className="text-slate-300">Response: {formatPercentage(emergencyData.riskAssessment.mitigationStrategies.response)}</div>
                </div>
                <div>
                  <div className="text-blue-400">Recovery: {formatPercentage(emergencyData.riskAssessment.mitigationStrategies.recovery)}</div>
                  <div className="text-green-400">Adaptation: {formatPercentage(emergencyData.riskAssessment.mitigationStrategies.adaptation)}</div>
                  <div className="text-purple-400">Resilience: {formatPercentage(emergencyData.riskAssessment.mitigationStrategies.resilience)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}