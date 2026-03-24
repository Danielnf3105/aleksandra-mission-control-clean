// Healthcare Technology & Medical Intelligence Center - Medical & Health Analytics
import { useState, useEffect } from 'react';
import { Heart, Activity, Users, Shield, Zap, AlertTriangle, BarChart3, Stethoscope, Pill, Brain, Monitor, TrendingUp } from 'lucide-react';

export default function HealthcareTechnologyMedicalIntelligenceCenter() {
  const [healthcareData, setHealthcareData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    healthcareOverview: {
      medicalFacilities: 125678,
      digitalHealthPlatforms: 56789,
      patients: 890123456,
      medicalDevices: 1234567,
      healthRecords: 2345678901,
      telemedicineConsultations: 45678901,
      medicalAiModels: 12345,
      clinicalTrials: 67890,
      patientSafety: 99.4,
      systemUptime: 99.97,
      dataAccuracy: 98.8,
      complianceScore: 97.6,
      patientSatisfaction: 92.1,
      clinicalEfficiency: 87.9,
      costOptimization: 84.3,
      interoperability: 78.5,
      cybersecurityRating: 96.2,
      innovationIndex: 89.7,
      regulatoryCompliance: 98.9,
      qualityOfCare: 94.6
    },
    medicalFacilities: [
      {
        facilityName: 'Mayo Clinic Digital Health',
        facilityId: 'MAYO-DIGITAL-001',
        location: 'Rochester, Minnesota, USA',
        type: 'INTEGRATED HEALTH SYSTEM',
        status: 'OPERATIONAL',
        bedCapacity: 2059,
        annualPatients: 1300000,
        specialties: 'Multi-specialty, Research, Education',
        accreditation: 'Joint Commission, Magnet',
        ehrSystem: 'Epic Systems',
        telemedicineCapability: 'FULL',
        aiImplementation: 'ADVANCED',
        patientSatisfaction: 96.8,
        qualityRating: '5-STAR',
        safetyScore: 'A',
        financialRating: 'AA',
        staffCount: 65000,
        physiciansCount: 4500,
        nursesCount: 15000,
        researchGrants: 678.9,
        publicationsPerYear: 8500,
        digitalMaturity: 'LEADER',
        cybersecurityCompliance: 'EXCELLENT',
        interoperabilityScore: 94.2
      },
      {
        facilityName: 'Kaiser Permanente Integrated',
        facilityId: 'KP-INTEGRATED-002',
        location: 'Oakland, California, USA',
        type: 'HEALTH MAINTENANCE ORGANIZATION',
        status: 'OPERATIONAL',
        bedCapacity: 5200,
        annualPatients: 12500000,
        specialties: 'Integrated Care, Prevention',
        accreditation: 'NCQA, Joint Commission',
        ehrSystem: 'Epic HealthConnect',
        telemedicineCapability: 'FULL',
        aiImplementation: 'ADVANCED',
        patientSatisfaction: 89.4,
        qualityRating: '4-STAR',
        safetyScore: 'A',
        financialRating: 'A+',
        staffCount: 218000,
        physiciansCount: 23000,
        nursesCount: 59000,
        researchGrants: 234.5,
        digitalMaturity: 'ADVANCED',
        cybersecurityCompliance: 'HIGH',
        interoperabilityScore: 91.7,
        preventiveCareScore: 96.3
      },
      {
        facilityName: 'Cleveland Clinic Innovation',
        facilityId: 'CC-INNOVATION-003',
        location: 'Cleveland, Ohio, USA',
        type: 'ACADEMIC MEDICAL CENTER',
        status: 'OPERATIONAL',
        bedCapacity: 1450,
        annualPatients: 2100000,
        specialties: 'Cardiology, Neurology, Cancer',
        accreditation: 'Joint Commission, AACB',
        ehrSystem: 'Epic MyChart',
        telemedicineCapability: 'FULL',
        aiImplementation: 'RESEARCH',
        patientSatisfaction: 91.2,
        qualityRating: '5-STAR',
        safetyScore: 'A',
        financialRating: 'A',
        staffCount: 67000,
        physiciansCount: 4200,
        nursesCount: 15500,
        researchGrants: 445.7,
        publicationsPerYear: 6200,
        digitalMaturity: 'LEADER',
        cybersecurityCompliance: 'EXCELLENT',
        interoperabilityScore: 89.8
      },
      {
        facilityName: 'Johns Hopkins Digital Medicine',
        facilityId: 'JH-DIGITAL-004',
        location: 'Baltimore, Maryland, USA',
        type: 'ACADEMIC MEDICAL CENTER',
        status: 'SCALING',
        bedCapacity: 1154,
        annualPatients: 950000,
        specialties: 'Research, Education, Complex Care',
        accreditation: 'Joint Commission, LCME',
        ehrSystem: 'Epic Hyperspace',
        telemedicineCapability: 'EXPANDING',
        aiImplementation: 'RESEARCH',
        patientSatisfaction: 88.6,
        qualityRating: '5-STAR',
        safetyScore: 'A',
        financialRating: 'AA-',
        staffCount: 45000,
        physiciansCount: 3800,
        nursesCount: 12000,
        researchGrants: 892.3,
        publicationsPerYear: 12500,
        digitalMaturity: 'ADVANCED',
        cybersecurityCompliance: 'HIGH',
        interoperabilityScore: 87.4
      }
    ],
    digitalHealthPlatforms: [
      {
        platformName: 'Teladoc Health Virtual Care',
        platformId: 'TELADOC-VIRTUAL-001',
        headquarters: 'Purchase, New York, USA',
        category: 'TELEMEDICINE',
        status: 'OPERATIONAL',
        marketCap: 12.4,
        revenue: 2.4,
        registeredUsers: 54000000,
        consultations: 15600000,
        physicians: 65000,
        specialties: 450,
        countries: 175,
        languages: 40,
        platformUptime: 99.95,
        avgConsultationTime: 18.5,
        patientSatisfaction: 94.2,
        physicianSatisfaction: 89.7,
        timeToConsultation: '15 minutes',
        mobileAppRating: 4.8,
        complianceRating: 'HIPAA, SOC 2',
        aiCapabilities: 'Clinical Decision Support',
        integrations: 'Epic, Cerner, Allscripts',
        costSavingsPerVisit: 78,
        qualityScores: 'Above Average',
        growthRate: 42.3
      },
      {
        platformName: 'Epic Systems MyChart',
        platformId: 'EPIC-MYCHART-002',
        headquarters: 'Verona, Wisconsin, USA',
        category: 'ELECTRONIC HEALTH RECORDS',
        status: 'OPERATIONAL',
        marketShare: 31.2,
        revenue: 3.8,
        patientRecords: 280000000,
        healthSystems: 2900,
        hospitals: 6200,
        clinics: 45000,
        countries: 35,
        platformUptime: 99.98,
        dataProcessingCapacity: 'PETABYTE',
        interoperabilityScore: 89.4,
        userSatisfaction: 86.3,
        implementationTime: '18 months',
        complianceRating: 'HIPAA, HITECH, 21 CFR Part 11',
        aiCapabilities: 'Sepsis Prediction, Risk Scoring',
        integrations: 'HL7 FHIR, SMART on FHIR',
        roiForCustomers: '15-25%',
        qualityMetrics: 'Best in Class',
        supportRating: 'EXCELLENT'
      },
      {
        platformName: 'Cerner PowerChart',
        platformId: 'CERNER-POWERCHART-003',
        headquarters: 'North Kansas City, Missouri, USA',
        category: 'CLINICAL INFORMATION SYSTEM',
        status: 'OPERATIONAL',
        marketShare: 26.8,
        revenue: 5.5,
        patientRecords: 195000000,
        healthSystems: 1800,
        hospitals: 4500,
        countries: 30,
        platformUptime: 99.94,
        dataProcessingCapacity: 'EXABYTE',
        interoperabilityScore: 85.7,
        userSatisfaction: 82.1,
        implementationTime: '24 months',
        complianceRating: 'HIPAA, FDA 510(k)',
        aiCapabilities: 'Population Health Analytics',
        integrations: 'HL7, DICOM, IHE',
        roiForCustomers: '12-20%',
        qualityMetrics: 'Industry Standard',
        supportRating: 'GOOD'
      }
    ],
    medicalDevices: [
      {
        deviceCategory: 'Patient Monitoring Systems',
        deviceId: 'PMS-PHILIPS-001',
        manufacturer: 'Philips Healthcare',
        model: 'IntelliVue MX800',
        deploymentScale: 'GLOBAL',
        status: 'OPERATIONAL',
        unitsDeployed: 145000,
        monitorsActive: 890000,
        patientsMonitored: 12500000,
        vitalSignsTracked: 'ECG, SpO2, NIBP, Temperature',
        connectivityType: 'WIRELESS, ETHERNET',
        batteryLife: '4 hours',
        displaySize: '19 inches',
        alarmsPerDay: 2500000,
        falseAlarmRate: 8.5,
        clinicalAlerts: 'SMART ALGORITHMS',
        dataTransmission: 'HL7, FHIR',
        cybersecurityLevel: 'IEC 80001-1',
        maintenanceInterval: '6 months',
        mtbf: '50000 hours',
        costPerUnit: 25000,
        customerSatisfaction: 91.4,
        trainingRequired: '16 hours'
      },
      {
        deviceCategory: 'Diagnostic Imaging',
        deviceId: 'DI-GE-002',
        manufacturer: 'GE Healthcare',
        model: 'Revolution CT',
        deploymentScale: 'ENTERPRISE',
        status: 'OPERATIONAL',
        unitsDeployed: 8500,
        scansPerDay: 125000,
        imageResolution: '0.23mm',
        scanTime: '0.28 seconds',
        radiationDose: 'REDUCED 82%',
        aiAssisted: 'Deep Learning Reconstruction',
        cloudConnectivity: 'GE Edison Intelligence',
        storageCapacity: '10 TB',
        networkSpeed: '10 Gbps',
        upgradeFrequency: 'Annual',
        complianceStandards: 'FDA 510(k), CE Mark',
        maintenanceInterval: '3 months',
        mtbf: '8760 hours',
        costPerUnit: 2400000,
        customerSatisfaction: 89.7,
        trainingRequired: '40 hours'
      },
      {
        deviceCategory: 'Surgical Robotics',
        deviceId: 'SR-INTUITIVE-003',
        manufacturer: 'Intuitive Surgical',
        model: 'da Vinci Xi',
        deploymentScale: 'SPECIALIZED',
        status: 'OPERATIONAL',
        unitsDeployed: 6500,
        proceduresPerformed: 1250000,
        surgicalPrecision: '1mm',
        tremoreReduction: '99%',
        visionSystem: '3D HD',
        instrumentTypes: 60,
        learningCurve: '150-250 procedures',
        complicationRate: 'REDUCED 15%',
        hospitalStay: 'REDUCED 21%',
        surgeonFatigue: 'REDUCED 40%',
        complianceStandards: 'FDA 510(k), ISO 14155',
        maintenanceInterval: '1000 hours',
        mtbf: '2000 hours',
        costPerUnit: 1800000,
        customerSatisfaction: 94.2,
        trainingRequired: '80 hours'
      }
    ],
    healthAiModels: [
      {
        modelName: 'IBM Watson for Oncology',
        modelId: 'IBM-WATSON-ONCO-001',
        provider: 'IBM Watson Health',
        category: 'CLINICAL DECISION SUPPORT',
        status: 'OPERATIONAL',
        accuracy: 96.8,
        cancerTypes: 13,
        treatmentOptions: 8500,
        patientsAnalyzed: 2500000,
        hospitalsUsing: 230,
        countries: 45,
        trainingData: 'Memorial Sloan Kettering',
        updateFrequency: 'QUARTERLY',
        processingTime: '30 seconds',
        confidenceLevel: 94.2,
        clinicalTrialMatching: 'ENABLED',
        evidenceQuality: 'Level 1',
        physicianAcceptance: 78.4,
        costReduction: '23%',
        timeToTreatment: 'REDUCED 35%',
        outcomeImprovement: '18%'
      },
      {
        modelName: 'Google DeepMind AlphaFold',
        modelId: 'GOOGLE-ALPHAFOLD-002',
        provider: 'Google DeepMind',
        category: 'PROTEIN STRUCTURE PREDICTION',
        status: 'OPERATIONAL',
        accuracy: 90.0,
        proteinsPredicted: 200000000,
        researchInstitutions: 1500000,
        drugDiscoveryPrograms: 4500,
        timeReduction: '99%',
        costSavings: '10000x',
        publicationsEnabled: 12000,
        therapeuticTargets: 56000,
        diseasesMapped: 7500,
        pharmaceuticalPartners: 450,
        academicCollaborations: 8900,
        openSourceContributions: 'FULL',
        researchAcceleration: '100x',
        novelInsights: 'BREAKTHROUGH',
        impactFactor: 'REVOLUTIONARY'
      },
      {
        modelName: 'Microsoft Healthcare Bot',
        modelId: 'MSFT-HEALTHBOT-003',
        provider: 'Microsoft Healthcare',
        category: 'CONVERSATIONAL AI',
        status: 'OPERATIONAL',
        accuracy: 92.4,
        languagesSupported: 34,
        healthSystemsUsing: 890,
        interactionsPerMonth: 45000000,
        avgResolutionTime: '3.2 minutes',
        patientSatisfaction: 87.6,
        costSavingsPerInteraction: 12,
        escalationRate: 8.7,
        complianceStandards: 'HIPAA, SOC 2',
        integrations: 'Epic, Cerner, Teams',
        updateFrequency: 'MONTHLY',
        trainingDataSources: 'Medical Literature',
        qualityAssurance: 'CLINICAL REVIEW',
        deploymentTime: '2 weeks',
        roiRealization: '6 months'
      }
    ],
    patientSafety: [
      {
        safetySystem: 'Medication Safety AI',
        systemId: 'MED-SAFETY-AI-001',
        provider: 'Wolters Kluwer Health',
        scope: 'MEDICATION MANAGEMENT',
        status: 'OPERATIONAL',
        alertsGenerated: 12500000,
        adverseEventsBlocked: 234567,
        drugInteractionChecks: 'REAL-TIME',
        allergyScreening: 'COMPREHENSIVE',
        doseOptimization: 'WEIGHT/AGE BASED',
        falsePositiveRate: 12.4,
        clinicalOverrideRate: 8.9,
        patientHarmPrevention: '67%',
        costAvoidance: 2.8,
        pharmacistWorkflowIntegration: 'SEAMLESS',
        physicianAlertFatigue: 'REDUCED',
        evidenceLevel: 'GRADE A',
        regulatoryCompliance: 'FDA, EMA',
        updateFrequency: 'DAILY',
        impactMeasurement: 'OUTCOMES BASED'
      },
      {
        safetySystem: 'Fall Prevention Monitor',
        systemId: 'FALL-PREV-001',
        provider: 'Hill-Rom',
        scope: 'PATIENT MOBILITY',
        status: 'OPERATIONAL',
        patientsMonitored: 890000,
        fallsPreventedPerMonth: 12400,
        falseAlarmRate: 15.2,
        responseTime: '45 seconds',
        nurseCallIntegration: 'AUTOMATED',
        riskAssessment: 'MORSE FALL SCALE',
        mobilityTracking: '24/7',
        staffNotification: 'INSTANT',
        costSavingsPerFall: 34000,
        liabilityReduction: '45%',
        familySatisfaction: 89.7,
        staffSatisfaction: 84.2,
        implementationTime: '1 week',
        roiRealization: '3 months',
        qualityImprovement: 'SIGNIFICANT'
      },
      {
        safetySystem: 'Sepsis Early Warning',
        systemId: 'SEPSIS-WARN-001',
        provider: 'Epic Systems',
        scope: 'SEPSIS DETECTION',
        status: 'OPERATIONAL',
        patientsScreened: 5600000,
        earlyDetections: 89000,
        sensitivity: 89.4,
        specificity: 93.2,
        timeToDetection: '6 hours earlier',
        mortalityReduction: '18%',
        lengthOfStayReduction: '1.2 days',
        costSavingsPerCase: 45000,
        antibioticStewardship: 'OPTIMIZED',
        clinicianAlert: 'PRIORITIZED',
        falsePositiveManagement: 'ADVANCED',
        evidenceBase: 'PEER REVIEWED',
        hospitalAdoption: 2300,
        patientOutcomes: 'IMPROVED',
        qualityMeasures: 'CMS COMPLIANT'
      }
    ],
    complianceFrameworks: [
      {
        framework: 'HIPAA Privacy Rule',
        frameworkId: 'HIPAA-PRIVACY-001',
        authority: 'HHS Office for Civil Rights',
        scope: 'PATIENT PRIVACY',
        status: 'COMPLIANT',
        coveredEntities: 256000,
        businessAssociates: 145000,
        breachReports: 356,
        finesIssued: 12.4,
        auditFrequency: 'ANNUAL',
        riskAssessment: 'REQUIRED',
        employeeTraining: 'MANDATORY',
        incidentResponse: 'DEFINED',
        dataEncryption: 'AES-256',
        accessControls: 'ROLE-BASED',
        auditLogging: 'COMPREHENSIVE',
        businessAssociateAgreements: 'ENFORCED',
        patientRights: 'PROTECTED',
        penaltyRange: '100-1.5M USD',
        complianceCost: 8.9
      },
      {
        framework: 'FDA 21 CFR Part 11',
        frameworkId: 'FDA-21CFR11-002',
        authority: 'Food and Drug Administration',
        scope: 'ELECTRONIC RECORDS',
        status: 'COMPLIANT',
        regulatedEntities: 12400,
        electronicRecords: 'VALIDATED',
        digitalSignatures: 'PKI-BASED',
        auditTrail: 'TAMPER-PROOF',
        accessControl: 'MULTI-FACTOR',
        dataIntegrity: 'ENSURED',
        systemValidation: 'COMPUTER SYSTEM VALIDATION',
        changeControl: 'DOCUMENTED',
        backupRecovery: 'VALIDATED',
        trainingDocumentation: 'REQUIRED',
        inspectionReadiness: 'MAINTAINED',
        correctiveAction: 'TRACEABLE',
        riskManagement: 'ICH Q9',
        qualitySystem: 'ISO 13485',
        complianceCost: 2.3
      },
      {
        framework: 'GDPR Health Data',
        frameworkId: 'GDPR-HEALTH-003',
        authority: 'European Data Protection Board',
        scope: 'HEALTH DATA PROCESSING',
        status: 'COMPLIANT',
        dataSubjects: 89000000,
        healthDataCategories: 'SPECIAL CATEGORY',
        legalBasis: 'VITAL INTERESTS, CONSENT',
        dataProcessingActivities: 2340,
        privacyRequests: 45600,
        dataBreaches: 23,
        dpiasConducted: 890,
        consentManagement: 'GRANULAR',
        dataRetention: 'DEFINED PERIODS',
        dataPortability: 'ENABLED',
        rightOfAccess: 'AUTOMATED',
        rightToErasure: 'IMPLEMENTED',
        dataMinimization: 'APPLIED',
        pseudonymization: 'APPLIED',
        penalties: 234000
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        patients: 12500000,
        consultations: 89000,
        uptime: 99.97,
        dataAccuracy: 98.8,
        responseTime: 1.2,
        alerts: 125000,
        errors: 23,
        incidents: 0
      },
      {
        period: 'Last 24 Hours',
        patients: 298000000,
        consultations: 1890000,
        uptime: 99.94,
        dataAccuracy: 98.6,
        responseTime: 1.4,
        alerts: 2800000,
        errors: 450,
        incidents: 3
      },
      {
        period: 'Last 7 Days',
        patients: 2080000000,
        consultations: 12450000,
        uptime: 99.91,
        dataAccuracy: 98.3,
        responseTime: 1.8,
        alerts: 18900000,
        errors: 2890,
        incidents: 12
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHealthcareData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        healthcareOverview: {
          ...prev.healthcareOverview,
          patientSafety: Math.max(98.0, Math.min(99.8, prev.healthcareOverview.patientSafety + (Math.random() - 0.5) * 0.2)),
          systemUptime: Math.max(99.0, Math.min(99.99, prev.healthcareOverview.systemUptime + (Math.random() - 0.5) * 0.01))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'SCALING': return 'text-blue-400 bg-blue-400/20';
      case 'EXPANDING': return 'text-purple-400 bg-purple-400/20';
      case 'COMPLIANT': return 'text-green-400 bg-green-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
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
  const formatCurrency = (amount) => `$${amount.toFixed(1)}B`;
  const formatMinutes = (min) => `${min.toFixed(1)}min`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Healthcare Technology & Medical Intelligence Center</h1>
              <p className="text-slate-300">Medical & health analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{healthcareData.currentTime}</div>
            <div className="text-slate-300">Healthcare Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Healthcare Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-2" />
                Facilities
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{formatNumber(healthcareData.healthcareOverview.medicalFacilities)}</div>
            <div className="text-red-300 text-sm">{formatNumber(healthcareData.healthcareOverview.digitalHealthPlatforms)} Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Patients
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(healthcareData.healthcareOverview.patients)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(healthcareData.healthcareOverview.healthRecords)} Records</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-green-400 mr-2" />
                Safety
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(healthcareData.healthcareOverview.patientSafety)}</div>
            <div className="text-green-300 text-sm">Patient Safety</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(healthcareData.healthcareOverview.systemUptime)}</div>
            <div className="text-purple-300 text-sm">System Reliability</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Monitor className="w-5 h-5 text-cyan-400 mr-2" />
                Devices
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(healthcareData.healthcareOverview.medicalDevices)}</div>
            <div className="text-cyan-300 text-sm">Connected</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-yellow-400 mr-2" />
                AI Models
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(healthcareData.healthcareOverview.medicalAiModels)}</div>
            <div className="text-yellow-300 text-sm">Medical AI</div>
          </div>
        </div>

        {/* Medical Facilities & Digital Health Platforms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Heart className="w-5 h-5 text-red-400 mr-2" />
              Medical Facilities
            </h3>
            <div className="space-y-4">
              {healthcareData.medicalFacilities.map((facility, index) => (
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
                    <div className="text-blue-400">{facility.type}</div>
                    <div className="text-green-400">{facility.qualityRating}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Beds: {facility.bedCapacity}</div>
                    <div className="text-purple-400">Patients: {formatNumber(facility.annualPatients)}/yr</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Patient Satisfaction</span>
                      <span>{formatPercentage(facility.patientSatisfaction)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-red-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${facility.patientSatisfaction}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Staff: {formatNumber(facility.staffCount)}</div>
                    <div className="text-indigo-400">Physicians: {formatNumber(facility.physiciansCount)}</div>
                    <div className="text-cyan-400">Safety: {facility.safetyScore}</div>
                    <div className="text-green-400">EHR: {facility.ehrSystem}</div>
                    <div className="text-blue-400">Security: {facility.cybersecurityCompliance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Stethoscope className="w-5 h-5 text-blue-400 mr-2" />
              Digital Health Platforms
            </h3>
            <div className="space-y-4">
              {healthcareData.digitalHealthPlatforms.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{platform.platformName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(platform.status)}`}>
                        {platform.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{platform.headquarters}</div>
                    <div className="text-blue-400">{platform.category}</div>
                    <div className="text-green-400">{platform.complianceRating}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">
                      {platform.registeredUsers ? `Users: ${formatNumber(platform.registeredUsers)}` : 
                       platform.patientRecords ? `Records: ${formatNumber(platform.patientRecords)}` :
                       `Share: ${formatPercentage(platform.marketShare)}`}
                    </div>
                    <div className="text-purple-400">Revenue: {formatCurrency(platform.revenue)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Platform Uptime</span>
                      <span>{formatPercentage(platform.platformUptime)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${platform.platformUptime}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {platform.consultations && `Consultations: ${formatNumber(platform.consultations)}`}
                      {platform.healthSystems && `Health Systems: ${formatNumber(platform.healthSystems)}`}
                    </div>
                    <div className="text-indigo-400">
                      {platform.patientSatisfaction && `Satisfaction: ${formatPercentage(platform.patientSatisfaction)}`}
                      {platform.userSatisfaction && `User Satisfaction: ${formatPercentage(platform.userSatisfaction)}`}
                    </div>
                    <div className="text-cyan-400">AI: {platform.aiCapabilities}</div>
                    <div className="text-green-400">Integration: {platform.integrations}</div>
                    <div className="text-blue-400">
                      {platform.timeToConsultation && `Response: ${platform.timeToConsultation}`}
                      {platform.implementationTime && `Implementation: ${platform.implementationTime}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Medical Devices & Health AI Models */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-cyan-400 mr-2" />
              Medical Devices
            </h3>
            <div className="space-y-4">
              {healthcareData.medicalDevices.map((device, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{device.deviceCategory}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(device.status)}`}>
                        {device.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{device.manufacturer}</div>
                    <div className="text-blue-400">{device.model}</div>
                    <div className="text-green-400">{device.deploymentScale}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Units: {formatNumber(device.unitsDeployed)}</div>
                    <div className="text-purple-400">
                      {device.patientsMonitored && `Patients: ${formatNumber(device.patientsMonitored)}`}
                      {device.scansPerDay && `Scans: ${formatNumber(device.scansPerDay)}/day`}
                      {device.proceduresPerformed && `Procedures: ${formatNumber(device.proceduresPerformed)}`}
                    </div>
                  </div>
                  
                  {device.customerSatisfaction && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Customer Satisfaction</span>
                        <span>{formatPercentage(device.customerSatisfaction)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${device.customerSatisfaction}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {device.vitalSignsTracked && `Vitals: ${device.vitalSignsTracked}`}
                      {device.imageResolution && `Resolution: ${device.imageResolution}`}
                      {device.surgicalPrecision && `Precision: ${device.surgicalPrecision}`}
                    </div>
                    <div className="text-indigo-400">
                      {device.falseAlarmRate && `False Alarms: ${formatPercentage(device.falseAlarmRate)}`}
                      {device.radiationDose && `Radiation: ${device.radiationDose}`}
                      {device.complicationRate && `Complications: ${device.complicationRate}`}
                    </div>
                    <div className="text-cyan-400">
                      {device.mtbf && `MTBF: ${device.mtbf} hours`}
                    </div>
                    <div className="text-green-400">Cost: ${formatNumber(device.costPerUnit)}</div>
                    <div className="text-blue-400">Training: {device.trainingRequired}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-yellow-400 mr-2" />
              Health AI Models
            </h3>
            <div className="space-y-4">
              {healthcareData.healthAiModels.map((model, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{model.modelName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(model.status)}`}>
                        {model.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{model.provider}</div>
                    <div className="text-blue-400">{model.category}</div>
                    <div className="text-green-400">{model.modelId}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Accuracy</span>
                      <span>{formatPercentage(model.accuracy)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${model.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {model.patientsAnalyzed && `Patients: ${formatNumber(model.patientsAnalyzed)}`}
                      {model.proteinsPredicted && `Proteins: ${formatNumber(model.proteinsPredicted)}`}
                      {model.interactionsPerMonth && `Interactions: ${formatNumber(model.interactionsPerMonth)}/mo`}
                    </div>
                    <div className="text-indigo-400">
                      {model.cancerTypes && `Cancer Types: ${model.cancerTypes}`}
                      {model.timeReduction && `Time Reduction: ${model.timeReduction}`}
                      {model.avgResolutionTime && `Resolution: ${model.avgResolutionTime}`}
                    </div>
                    <div className="text-cyan-400">
                      {model.hospitalsUsing && `Hospitals: ${formatNumber(model.hospitalsUsing)}`}
                      {model.researchInstitutions && `Research: ${formatNumber(model.researchInstitutions)}`}
                      {model.healthSystemsUsing && `Health Systems: ${formatNumber(model.healthSystemsUsing)}`}
                    </div>
                    <div className="text-green-400">
                      {model.outcomeImprovement && `Outcomes: ${model.outcomeImprovement}`}
                      {model.impactFactor && `Impact: ${model.impactFactor}`}
                      {model.patientSatisfaction && `Satisfaction: ${formatPercentage(model.patientSatisfaction)}`}
                    </div>
                    <div className="text-blue-400">Update: {model.updateFrequency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Patient Safety Systems */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-green-400 mr-2" />
            Patient Safety Systems
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {healthcareData.patientSafety.map((safety, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{safety.safetySystem}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(safety.status)}`}>
                      {safety.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">{safety.provider}</div>
                  <div className="text-blue-400">{safety.scope}</div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">
                    {safety.adverseEventsBlocked && `Events Blocked: ${formatNumber(safety.adverseEventsBlocked)}`}
                    {safety.fallsPreventedPerMonth && `Falls Prevented: ${formatNumber(safety.fallsPreventedPerMonth)}/mo`}
                    {safety.earlyDetections && `Early Detections: ${formatNumber(safety.earlyDetections)}`}
                  </div>
                  <div className="text-indigo-400">
                    {safety.patientHarmPrevention && `Harm Prevention: ${safety.patientHarmPrevention}`}
                    {safety.costSavingsPerFall && `Savings: $${formatNumber(safety.costSavingsPerFall)}/fall`}
                    {safety.mortalityReduction && `Mortality: ${safety.mortalityReduction}`}
                  </div>
                  <div className="text-cyan-400">
                    {safety.falsePositiveRate && `False+: ${formatPercentage(safety.falsePositiveRate)}`}
                    {safety.sensitivity && `Sensitivity: ${formatPercentage(safety.sensitivity)}`}
                  </div>
                  <div className="text-green-400">
                    {safety.costAvoidance && `Cost Avoidance: ${formatCurrency(safety.costAvoidance)}`}
                    {safety.roiRealization && `ROI: ${safety.roiRealization}`}
                  </div>
                  <div className="text-blue-400">
                    {safety.responseTime && `Response: ${safety.responseTime}`}
                    {safety.timeToDetection && `Detection: ${safety.timeToDetection}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Frameworks */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
            Healthcare Compliance Frameworks
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {healthcareData.complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{framework.framework}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(framework.status)}`}>
                      {framework.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Authority: {framework.authority}</div>
                  <div className="text-blue-400">Scope: {framework.scope}</div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">
                    {framework.coveredEntities && `Entities: ${formatNumber(framework.coveredEntities)}`}
                    {framework.regulatedEntities && `Regulated: ${formatNumber(framework.regulatedEntities)}`}
                    {framework.dataSubjects && `Subjects: ${formatNumber(framework.dataSubjects)}`}
                  </div>
                  <div className="text-indigo-400">
                    {framework.breachReports && `Breaches: ${framework.breachReports}`}
                    {framework.dataBreaches && `Data Breaches: ${framework.dataBreaches}`}
                  </div>
                  <div className="text-cyan-400">
                    {framework.finesIssued && `Fines: ${formatCurrency(framework.finesIssued)}`}
                    {framework.penalties && `Penalties: €${formatNumber(framework.penalties)}`}
                  </div>
                  <div className="text-green-400">
                    {framework.complianceCost && `Compliance Cost: ${formatCurrency(framework.complianceCost)}`}
                  </div>
                  <div className="text-blue-400">
                    {framework.auditFrequency && `Audits: ${framework.auditFrequency}`}
                    {framework.dataEncryption && `Encryption: ${framework.dataEncryption}`}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-slate-400 mr-2" />
            Healthcare Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {healthcareData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Patients: {formatNumber(metrics.patients)}</div>
                  <div className="text-green-400">Consultations: {formatNumber(metrics.consultations)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Uptime: {formatPercentage(metrics.uptime)}</div>
                  <div className="text-yellow-400">Accuracy: {formatPercentage(metrics.dataAccuracy)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Response: {formatMinutes(metrics.responseTime)}</div>
                  <div className="text-orange-400">Alerts: {formatNumber(metrics.alerts)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Errors: {metrics.errors}</div>
                  <div className="text-pink-400">Incidents: {metrics.incidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}