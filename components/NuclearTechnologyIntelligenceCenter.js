// Nuclear Technology Intelligence Center - Nuclear Science & Safety Analytics
import { useState, useEffect } from 'react';
import { Zap, Atom, Activity, Eye, BarChart3, Settings, Lock, AlertTriangle, TrendingUp, Layers, Radio } from 'lucide-react';

export default function NuclearTechnologyIntelligenceCenter() {
  const [nuclearData, setNuclearData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    nuclearOverview: {
      reactorUnits: 445,
      operationalReactors: 432,
      researchFacilities: 284,
      medicalFacilities: 1567,
      totalCapacity: 393400,
      powerGeneration: 2659000,
      globalCoverage: 91.3,
      safetyRating: 99.2,
      radiationLevels: 'NORMAL',
      securityLevel: 'HIGH',
      emergencyPreparedness: 'READY',
      nuclearWaste: 290000,
      enrichmentFacilities: 67,
      fusionProjects: 15,
      radioisotopeProduction: 2340,
      nuclearMedicine: 45000,
      radiationTherapy: 12000
    },
    powerReactors: [
      {
        plantName: 'Vogtle Electric Generating Plant',
        reactorId: 'VEGP-3-4',
        location: 'Georgia, USA',
        reactorType: 'AP1000 PWR',
        status: 'OPERATIONAL',
        powerOutput: 2234,
        capacity: 2430,
        efficiency: 91.9,
        fuelBurnup: 52000,
        reactorPressure: 155.1,
        coolantTemperature: 324,
        controlRodPosition: 78.5,
        neutronFlux: 3.2e13,
        primaryCoolant: 'NORMAL FLOW',
        secondaryLoop: 'STABLE',
        containment: 'INTEGRITY VERIFIED',
        emergencyCore: 'STANDBY READY',
        safetySystems: 'ALL FUNCTIONAL',
        operationalHistory: '18 months continuous',
        lastRefueling: '2025-09-15',
        nextMaintenance: '2026-04-12',
        licensingStatus: 'NRC APPROVED',
        safetyInspection: 'EXCELLENT RATING',
        environmentalImpact: 'WITHIN LIMITS'
      },
      {
        plantName: 'Flamanville Nuclear Plant',
        reactorId: 'FLA-3-EPR',
        location: 'Normandy, France',
        reactorType: 'EPR PWR',
        status: 'COMMISSIONING',
        powerOutput: 1650,
        capacity: 1650,
        efficiency: 100.0,
        fuelBurnup: 0,
        reactorPressure: 155.0,
        coolantTemperature: 290,
        controlRodPosition: 100.0,
        neutronFlux: 0,
        primaryCoolant: 'COLD TESTING',
        secondaryLoop: 'SYSTEM TESTING',
        containment: 'PRESSURE TESTING',
        emergencyCore: 'TESTING PHASE',
        safetySystems: 'UNDER VALIDATION',
        operationalHistory: 'PRE-OPERATIONAL',
        lastRefueling: 'INITIAL FUEL LOAD',
        nextMaintenance: 'POST-COMMISSIONING',
        licensingStatus: 'ASN PENDING',
        safetyInspection: 'COMMISSIONING PHASE',
        environmentalImpact: 'BASELINE MONITORING'
      },
      {
        plantName: 'Palo Verde Nuclear Plant',
        reactorId: 'PVNGS-1-2-3',
        location: 'Arizona, USA',
        reactorType: 'System 80 PWR',
        status: 'MAINTENANCE',
        powerOutput: 0,
        capacity: 4098,
        efficiency: 0.0,
        fuelBurnup: 48500,
        reactorPressure: 0.1,
        coolantTemperature: 35,
        controlRodPosition: 100.0,
        neutronFlux: 0,
        primaryCoolant: 'SHUTDOWN COOLING',
        secondaryLoop: 'DRAINED',
        containment: 'MAINTENANCE ACCESS',
        emergencyCore: 'SHUTDOWN STATE',
        safetySystems: 'MAINTENANCE MODE',
        operationalHistory: '35 years service',
        lastRefueling: '2026-03-01',
        nextMaintenance: '2026-03-30',
        licensingStatus: 'NRC LICENSED',
        safetyInspection: 'ROUTINE INSPECTION',
        environmentalImpact: 'MONITORED'
      },
      {
        plantName: 'Barakah Nuclear Plant',
        reactorId: 'BNP-1-2-3-4',
        location: 'Abu Dhabi, UAE',
        reactorType: 'APR1400 PWR',
        status: 'STARTUP',
        powerOutput: 890,
        capacity: 5600,
        efficiency: 15.9,
        fuelBurnup: 1200,
        reactorPressure: 155.2,
        coolantTemperature: 285,
        controlRodPosition: 85.2,
        neutronFlux: 1.8e12,
        primaryCoolant: 'STARTUP FLOW',
        secondaryLoop: 'WARMING UP',
        containment: 'NORMAL PRESSURE',
        emergencyCore: 'READY',
        safetySystems: 'STARTUP TESTING',
        operationalHistory: '3 months operation',
        lastRefueling: 'INITIAL CRITICALITY',
        nextMaintenance: '2026-06-15',
        licensingStatus: 'FANR LICENSED',
        safetyInspection: 'STARTUP PHASE',
        environmentalImpact: 'INITIAL MONITORING'
      }
    ],
    researchFacilities: [
      {
        facilityName: 'Large Hadron Collider',
        facilityId: 'LHC-CERN-01',
        location: 'Geneva, Switzerland',
        facilityType: 'Particle Accelerator',
        status: 'OPERATIONAL',
        beamEnergy: 6800,
        luminosity: 2.1e34,
        particleBeams: 'PROTON BEAMS',
        magneticField: 8.33,
        operatingTemperature: 1.9,
        vacuumPressure: 1e-10,
        superconductingMagnets: 1624,
        rfCavities: 8,
        detectors: 'ATLAS, CMS, ALICE, LHCb',
        dataGeneration: '50 PB/year',
        collaboratingInstitutions: 10000,
        currentExperiment: 'Higgs boson studies',
        discoveryPotential: 'Beyond Standard Model',
        safetyProtocols: 'RADIATION SAFETY',
        emergencyProcedures: 'BEAM DUMP READY',
        maintenanceSchedule: 'LONG SHUTDOWN 3 2026'
      },
      {
        facilityName: 'Oak Ridge National Laboratory',
        facilityId: 'ORNL-HFIR-01',
        location: 'Tennessee, USA',
        facilityType: 'Research Reactor',
        status: 'OPERATIONAL',
        thermalPower: 85,
        neutronFlux: 2.5e15,
        fuelType: 'HEU FUEL',
        moderator: 'LIGHT WATER',
        coolant: 'LIGHT WATER',
        reflector: 'BERYLLIUM',
        experimentPositions: 674,
        beamLines: 15,
        neutronScattering: 'ACTIVE',
        isotopeProduction: 'Cf-252, transuranics',
        materialsResearch: 'NEUTRON ACTIVATION',
        userFacility: 'INTERNATIONAL ACCESS',
        safetyRecord: 'EXCELLENT',
        operatingLicense: 'DOE APPROVED',
        lastSafety: '2026-01-15'
      },
      {
        facilityName: 'Joint European Torus',
        facilityId: 'JET-UKAEA-01',
        location: 'Oxfordshire, UK',
        facilityType: 'Fusion Tokamak',
        status: 'EXPERIMENTAL',
        plasmaCurrent: 4.2,
        magneticField: 3.7,
        plasmaTemperature: 150000000,
        confinementTime: 4.2,
        fusionPower: 16.1,
        q_factor: 0.67,
        fuelMixture: 'DEUTERIUM-TRITIUM',
        plasmaDuration: 25,
        neutronYield: 1.8e16,
        tritiumHandling: 'ACTIVE SYSTEM',
        remoteHandling: 'ROBOTIC SYSTEMS',
        plasmaHeating: 'NBI + ICRH + ECRH',
        diagnosticSystems: 150,
        dataAcquisition: '1 TB/shot',
        experimentalCampaigns: '2026 D-T CAMPAIGN',
        iterSupport: 'TECHNOLOGY VALIDATION'
      }
    ],
    medicalApplications: [
      {
        facilityName: 'MD Anderson Cancer Center',
        facilityId: 'MDACC-PT-01',
        location: 'Houston, Texas',
        treatmentType: 'Proton Therapy',
        status: 'OPERATIONAL',
        acceleratorType: 'SYNCHROTRON',
        beamEnergy: 250,
        treatmentRooms: 4,
        patientsPerDay: 85,
        cancerTypes: 'PEDIATRIC, CNS, THORACIC',
        treatmentPlanning: 'AI-ENHANCED',
        imageGuidance: 'CONE BEAM CT',
        motionTracking: 'REAL-TIME',
        doseAccuracy: 99.7,
        patientSafety: 'EXCELLENT',
        clinicalTrials: 'PHASE II/III',
        researchPrograms: 'FLASH THERAPY',
        qualityAssurance: 'DAILY QA',
        staffTraining: 'CERTIFIED',
        patientOutcomes: 'SUPERIOR',
        treatmentProtocols: 'NCCN GUIDELINES'
      },
      {
        facilityName: 'Nuclear Medicine Institute',
        facilityId: 'NMI-SPECT-01',
        location: 'Vienna, Austria',
        treatmentType: 'Nuclear Medicine',
        status: 'OPERATIONAL',
        isotopeProduction: 'ON-SITE CYCLOTRON',
        diagnosticProcedures: 'PET, SPECT, Scintigraphy',
        therapeuticAgents: 'Lu-177, I-131, Ra-223',
        patientsPerDay: 150,
        imagingModalities: 'PET/CT, SPECT/CT',
        radiopharmacy: 'GMP CERTIFIED',
        qualityControl: 'AUTOMATED',
        radiationSafety: 'ALARA PROTOCOL',
        wasteManagement: 'DECAY STORAGE',
        researchDevelopment: 'THERANOSTICS',
        clinicalPartnership: 'UNIVERSITY HOSPITAL',
        regulatoryApproval: 'EMA COMPLIANT',
        staffDosimetry: 'ELECTRONIC',
        emergencyProcedures: 'TRAINED RESPONSE'
      }
    ],
    safetyMonitoring: [
      {
        monitorType: 'Radiation Monitoring',
        monitorId: 'RM-GLOBAL-2026',
        coverage: 'WORLDWIDE NETWORK',
        detectorTypes: 'GAMMA, NEUTRON, ALPHA, BETA',
        stationCount: 12567,
        dataFrequency: 'REAL-TIME',
        alertThresholds: 'IAEA STANDARDS',
        backgroundLevels: 'NORMAL VARIATION',
        anomalousEvents: 'ZERO THIS MONTH',
        dataValidation: 'AUTOMATED QC',
        emergencyResponse: 'RAPID NOTIFICATION',
        publicAccess: 'TRANSPARENCY PORTAL',
        internationalSharing: 'IAEA NETWORK',
        qualityAssurance: 'ISO 17025',
        calibrationStatus: 'CURRENT',
        environmentalImpact: 'BASELINE',
        trendAnalysis: 'STABLE PATTERNS',
        predictiveModeling: 'ML ENHANCED'
      },
      {
        monitorType: 'Nuclear Security',
        monitorId: 'NS-IAEA-2026',
        coverage: 'SAFEGUARDED FACILITIES',
        surveillanceTypes: 'CAMERAS, SEALS, SENSORS',
        inspectionFrequency: 'QUARTERLY',
        complianceRate: 99.8,
        safeguardsAgreements: 'NPT COMPLIANT',
        materialAccountancy: 'VERIFIED',
        physicalProtection: 'ENHANCED',
        cybersecurity: 'MULTI-LAYER',
        personnelSecurity: 'BACKGROUND CHECKS',
        transportSecurity: 'ESCORT REQUIRED',
        emergencyResponse: 'COORDINATED',
        internationalCooperation: 'ACTIVE',
        threatAssessment: 'CONTINUOUSLY UPDATED',
        vulnerabilityAnalysis: 'PERIODIC REVIEW',
        securityCulture: 'EMBEDDED',
        incidentReporting: 'IMMEDIATE',
        lessonLearned: 'GLOBAL SHARING'
      }
    ],
    nuclearAlerts: [
      {
        type: 'CRITICAL',
        category: 'Reactor Emergency',
        message: 'Reactor coolant system pressure boundary leak at Unit 2 - Emergency Core Cooling activated',
        facility: 'Three Mile Island Unit 2',
        reactor: 'PWR TMI-2',
        event: 'Loss of Coolant Accident',
        impact: 'Automatic reactor shutdown, ECCS activation, containment isolation',
        severity: 'CRITICAL',
        timestamp: '12:25',
        detectedBy: 'Reactor Protection System',
        recommendation: 'Site emergency declared, off-site authorities notified, emergency response activated',
        reactorStatus: 'SAFE SHUTDOWN',
        radiationLevels: 'CONTAINED',
        personnelEvacuation: 'NON-ESSENTIAL STAFF',
        emergencyResponse: 'FULL ACTIVATION',
        publicProtection: 'SHELTER-IN-PLACE 2-MILE',
        mediaResponse: 'SPOKESPERSON ASSIGNED',
        regulatorNotification: 'NRC OPERATIONS CENTER',
        industryNotification: 'IMMEDIATE'
      },
      {
        type: 'HIGH',
        category: 'Radiation Exposure',
        message: 'Radiological worker exposure exceeds quarterly limit - Medical evaluation in progress',
        facility: 'Research Reactor Facility',
        worker: 'ANONYMOUS ID RW-2026-045',
        exposureDose: '12.5 mSv',
        quarterlyLimit: '12.5 mSv',
        impact: 'Worker removed from radiological areas, medical evaluation, exposure investigation',
        severity: 'HIGH',
        timestamp: '11:38',
        detectedBy: 'Electronic Dosimetry System',
        recommendation: 'Immediate medical evaluation, work practice review, ALARA assessment',
        medicalStatus: 'EVALUATION IN PROGRESS',
        workRestrictions: 'RADIOLOGICAL WORK SUSPENDED',
        investigationTeam: 'ASSIGNED',
        rootCauseAnalysis: 'INITIATED',
        correctiveActions: 'PENDING INVESTIGATION',
        regulatoryReporting: 'REQUIRED',
        industrySharing: 'OPERATING EXPERIENCE'
      },
      {
        type: 'MEDIUM',
        category: 'Equipment Malfunction',
        message: 'Containment isolation valve fails to close during testing - Secondary isolation active',
        facility: 'Nuclear Power Station',
        system: 'Containment Isolation System',
        component: 'Motor-Operated Valve MOV-456',
        impact: 'Redundant isolation available, planned maintenance required, no safety significance',
        severity: 'MEDIUM',
        timestamp: '10:12',
        detectedBy: 'Surveillance Testing',
        recommendation: 'Continue operation with compensatory measures, schedule corrective maintenance',
        safetySignificance: 'LOW',
        compensatoryMeasures: 'MANUAL ISOLATION READY',
        maintenanceWindow: 'NEXT REFUELING',
        operabilityDetermination: 'OPERABLE',
        reportingRequirements: 'LER REQUIRED',
        performanceTrend: 'IMPROVING',
        industryExperience: 'COMMON MODE'
      },
      {
        type: 'INFO',
        category: 'Scientific Discovery',
        message: 'ITER tokamak achieves record plasma duration 17 minutes - Fusion milestone reached',
        facility: 'ITER International Fusion Facility',
        achievement: 'Record plasma duration',
        duration: '17 minutes sustained',
        impact: 'Major fusion energy milestone, demonstrates feasibility of sustained fusion',
        significance: 'BREAKTHROUGH',
        timestamp: '09:45',
        detectedBy: 'Plasma Control System',
        plasmaParameters: 'Q > 1.2, TEMPERATURE 100M°C',
        energyGain: 'NET POSITIVE OUTPUT',
        technologyReadiness: 'TRL 6 ACHIEVED',
        commercialImplications: 'FUSION POWER VIABLE',
        internationalCollaboration: '35 NATIONS',
        nextMilestone: 'CONTINUOUS OPERATION',
        publicImpact: 'CLEAN ENERGY FUTURE',
        scientificPublication: 'NATURE PHYSICS'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        reactorsOperational: 432,
        powerGeneration: 2659000,
        radiationLevels: 'NORMAL',
        safetyChecks: 15678,
        alertsGenerated: 3,
        inspectionsCompleted: 23,
        efficiency: 94.2,
        availabilityFactor: 91.8
      },
      {
        period: 'Last 24 Hours',
        reactorsOperational: 431,
        powerGeneration: 63816000,
        radiationLevels: 'NORMAL',
        safetyChecks: 345678,
        alertsGenerated: 45,
        inspectionsCompleted: 567,
        efficiency: 93.8,
        availabilityFactor: 91.3
      },
      {
        period: 'Last 7 Days',
        reactorsOperational: 428,
        powerGeneration: 442112000,
        radiationLevels: 'NORMAL',
        safetyChecks: 2345678,
        alertsGenerated: 234,
        inspectionsCompleted: 3456,
        efficiency: 93.2,
        availabilityFactor: 90.7
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNuclearData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        nuclearOverview: {
          ...prev.nuclearOverview,
          safetyRating: Math.max(98.0, Math.min(99.9, prev.nuclearOverview.safetyRating + (Math.random() - 0.5) * 0.5)),
          powerGeneration: Math.max(2600000, Math.min(2700000, prev.nuclearOverview.powerGeneration + Math.floor((Math.random() - 0.5) * 10000)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'COMMISSIONING': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'STARTUP': return 'text-cyan-400 bg-cyan-400/20';
      case 'EXPERIMENTAL': return 'text-purple-400 bg-purple-400/20';
      case 'SHUTDOWN': return 'text-gray-400 bg-gray-400/20';
      case 'NORMAL': return 'text-green-400 bg-green-400/20';
      case 'ELEVATED': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-green-500 bg-green-900/30 text-green-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatPower = (power) => `${formatNumber(power)} MWe`;
  const formatTemperature = (temp) => `${temp}°C`;
  const formatPressure = (pressure) => `${pressure} bar`;

  return (
    <div className="h-full bg-gradient-to-br from-orange-900 via-slate-900 to-red-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-orange-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
              <Atom className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Nuclear Technology Intelligence Center</h1>
              <p className="text-orange-300">Nuclear science & safety analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-orange-400">{nuclearData.currentTime}</div>
            <div className="text-orange-300">Nuclear Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Nuclear Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Atom className="w-5 h-5 text-orange-400 mr-2" />
                Reactors
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{nuclearData.nuclearOverview.operationalReactors}</div>
            <div className="text-orange-300 text-sm">{nuclearData.nuclearOverview.reactorUnits} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Power
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(nuclearData.nuclearOverview.powerGeneration/1000)}</div>
            <div className="text-yellow-300 text-sm">GWe Output</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lock className="w-5 h-5 text-green-400 mr-2" />
                Safety
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(nuclearData.nuclearOverview.safetyRating)}</div>
            <div className="text-green-300 text-sm">Rating</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-blue-400 mr-2" />
                Radiation
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{nuclearData.nuclearOverview.radiationLevels}</div>
            <div className="text-blue-300 text-sm">Levels</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Research
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{nuclearData.nuclearOverview.researchFacilities}</div>
            <div className="text-purple-300 text-sm">Facilities</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                Medical
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(nuclearData.nuclearOverview.medicalFacilities)}</div>
            <div className="text-cyan-300 text-sm">Facilities</div>
          </div>
        </div>

        {/* Power Reactors & Research Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              Nuclear Power Reactors
            </h3>
            <div className="space-y-4">
              {nuclearData.powerReactors.map((reactor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{reactor.plantName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(reactor.status)}`}>
                        {reactor.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{reactor.location}</div>
                    <div className="text-blue-400">{reactor.reactorType}</div>
                    <div className="text-green-400">ID: {reactor.reactorId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Output: {formatPower(reactor.powerOutput)}</div>
                    <div className="text-purple-400">Capacity: {formatPower(reactor.capacity)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Efficiency: {formatPercentage(reactor.efficiency)}</div>
                    <div className="text-pink-400">Pressure: {formatPressure(reactor.reactorPressure)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Load Factor</span>
                      <span>{formatPercentage(reactor.efficiency)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-orange-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${reactor.efficiency}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Coolant: {reactor.primaryCoolant}</div>
                    <div className="text-indigo-400">Safety: {reactor.safetySystems}</div>
                    <div className="text-cyan-400">Last Refuel: {reactor.lastRefueling}</div>
                    <div className="text-green-400">License: {reactor.licensingStatus}</div>
                    <div className="text-blue-400">Environmental: {reactor.environmentalImpact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-purple-400 mr-2" />
              Research & Development Facilities
            </h3>
            <div className="space-y-4">
              {nuclearData.researchFacilities.map((facility, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{facility.facilityName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(facility.status)}`}>
                        {facility.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{facility.location}</div>
                    <div className="text-blue-400">{facility.facilityType}</div>
                    <div className="text-green-400">ID: {facility.facilityId}</div>
                  </div>
                  
                  {facility.beamEnergy && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Beam: {facility.beamEnergy} GeV</div>
                      <div className="text-purple-400">Luminosity: {facility.luminosity}</div>
                    </div>
                  )}
                  
                  {facility.thermalPower && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-orange-400">Power: {facility.thermalPower} MW</div>
                      <div className="text-pink-400">Flux: {facility.neutronFlux}</div>
                    </div>
                  )}
                  
                  {facility.plasmaCurrent && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-red-400">Plasma: {facility.plasmaTemperature}°C</div>
                      <div className="text-indigo-400">Q-factor: {facility.q_factor}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {facility.detectors && `Detectors: ${facility.detectors}`}
                      {facility.isotopeProduction && `Production: ${facility.isotopeProduction}`}
                      {facility.fuelMixture && `Fuel: ${facility.fuelMixture}`}
                    </div>
                    <div className="text-cyan-400">
                      {facility.currentExperiment && `Experiment: ${facility.currentExperiment}`}
                      {facility.materialsResearch && `Research: ${facility.materialsResearch}`}
                      {facility.experimentalCampaigns && `Campaign: ${facility.experimentalCampaigns}`}
                    </div>
                    <div className="text-green-400">
                      {facility.collaboratingInstitutions && `Collaborators: ${formatNumber(facility.collaboratingInstitutions)}`}
                      {facility.userFacility && `Access: ${facility.userFacility}`}
                      {facility.iterSupport && `Support: ${facility.iterSupport}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Applications & Safety Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-cyan-400 mr-2" />
              Nuclear Medicine & Therapy
            </h3>
            <div className="space-y-4">
              {nuclearData.medicalApplications.map((medical, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{medical.facilityName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(medical.status)}`}>
                        {medical.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{medical.location}</div>
                    <div className="text-blue-400">{medical.treatmentType}</div>
                    <div className="text-green-400">ID: {medical.facilityId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Patients/Day: {medical.patientsPerDay}</div>
                    <div className="text-purple-400">
                      {medical.beamEnergy && `Energy: ${medical.beamEnergy} MeV`}
                      {medical.isotopeProduction && `Production: ${medical.isotopeProduction}`}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">
                      {medical.treatmentRooms && `Rooms: ${medical.treatmentRooms}`}
                      {medical.diagnosticProcedures && `Procedures: ${medical.diagnosticProcedures}`}
                    </div>
                    <div className="text-pink-400">
                      {medical.doseAccuracy && `Accuracy: ${formatPercentage(medical.doseAccuracy)}`}
                      {medical.radiopharmacy && `Pharmacy: ${medical.radiopharmacy}`}
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {medical.cancerTypes && `Types: ${medical.cancerTypes}`}
                      {medical.therapeuticAgents && `Agents: ${medical.therapeuticAgents}`}
                    </div>
                    <div className="text-indigo-400">
                      {medical.treatmentPlanning && `Planning: ${medical.treatmentPlanning}`}
                      {medical.qualityControl && `QC: ${medical.qualityControl}`}
                    </div>
                    <div className="text-green-400">
                      {medical.patientSafety && `Safety: ${medical.patientSafety}`}
                      {medical.radiationSafety && `Radiation: ${medical.radiationSafety}`}
                    </div>
                    <div className="text-cyan-400">
                      {medical.clinicalTrials && `Trials: ${medical.clinicalTrials}`}
                      {medical.researchDevelopment && `Research: ${medical.researchDevelopment}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 text-green-400 mr-2" />
              Nuclear Safety & Security
            </h3>
            <div className="space-y-4">
              {nuclearData.safetyMonitoring.map((monitor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{monitor.monitorType}</span>
                    <div className="text-green-400 text-xs">{monitor.coverage}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Network: {monitor.monitorId}</div>
                    <div className="text-blue-400">
                      {monitor.stationCount && `Stations: ${formatNumber(monitor.stationCount)}`}
                      {monitor.inspectionFrequency && `Inspections: ${monitor.inspectionFrequency}`}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {monitor.detectorTypes && `Detectors: ${monitor.detectorTypes}`}
                      {monitor.surveillanceTypes && `Surveillance: ${monitor.surveillanceTypes}`}
                    </div>
                    <div className="text-purple-400">
                      {monitor.dataFrequency && `Frequency: ${monitor.dataFrequency}`}
                      {monitor.complianceRate && `Compliance: ${formatPercentage(monitor.complianceRate)}`}
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {monitor.alertThresholds && `Thresholds: ${monitor.alertThresholds}`}
                      {monitor.safeguardsAgreements && `Safeguards: ${monitor.safeguardsAgreements}`}
                    </div>
                    <div className="text-indigo-400">
                      {monitor.backgroundLevels && `Background: ${monitor.backgroundLevels}`}
                      {monitor.materialAccountancy && `Materials: ${monitor.materialAccountancy}`}
                    </div>
                    <div className="text-green-400">
                      {monitor.emergencyResponse && `Emergency: ${monitor.emergencyResponse}`}
                      {monitor.physicalProtection && `Protection: ${monitor.physicalProtection}`}
                    </div>
                    <div className="text-cyan-400">
                      {monitor.internationalSharing && `Sharing: ${monitor.internationalSharing}`}
                      {monitor.internationalCooperation && `Cooperation: ${monitor.internationalCooperation}`}
                    </div>
                    <div className="text-blue-400">
                      {monitor.qualityAssurance && `Quality: ${monitor.qualityAssurance}`}
                      {monitor.securityCulture && `Culture: ${monitor.securityCulture}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
            Nuclear Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {nuclearData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Reactors: {metrics.reactorsOperational}</div>
                  <div className="text-green-400">Power: {formatNumber(metrics.powerGeneration/1000)} GWh</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Radiation: {metrics.radiationLevels}</div>
                  <div className="text-yellow-400">Safety Checks: {formatNumber(metrics.safetyChecks)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Alerts: {metrics.alertsGenerated}</div>
                  <div className="text-orange-400">Inspections: {metrics.inspectionsCompleted}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Efficiency: {formatPercentage(metrics.efficiency)}</div>
                  <div className="text-pink-400">Availability: {formatPercentage(metrics.availabilityFactor)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nuclear Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Nuclear Technology System Alerts
          </h3>
          <div className="space-y-4">
            {nuclearData.nuclearAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.facility && <div className="text-slate-300">Facility: {alert.facility}</div>}
                  {alert.reactor && <div className="text-cyan-400">Reactor: {alert.reactor}</div>}
                  {alert.event && <div className="text-orange-400">Event: {alert.event}</div>}
                  {alert.worker && <div className="text-blue-400">Worker: {alert.worker}</div>}
                  {alert.exposureDose && <div className="text-red-400">Dose: {alert.exposureDose}</div>}
                  {alert.system && <div className="text-purple-400">System: {alert.system}</div>}
                  {alert.component && <div className="text-yellow-400">Component: {alert.component}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.duration && <div className="text-cyan-400">Duration: {alert.duration}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact}
                </div>
                
                <div className="text-slate-300 text-xs">
                  <strong>Action:</strong> {alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}