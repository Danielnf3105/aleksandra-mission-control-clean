// Chemical Technology Intelligence Center - Chemistry & Process Analytics
import { useState, useEffect } from 'react';
import { Beaker, Atom, Zap, Activity, Eye, BarChart3, Settings, Lock, AlertTriangle, TrendingUp, Layers, FlaskConical } from 'lucide-react';

export default function ChemicalTechnologyIntelligenceCenter() {
  const [chemicalData, setChemicalData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    chemicalOverview: {
      processingFacilities: 34567,
      operationalFacilities: 33245,
      reactionMonitors: 156789,
      qualityControlStations: 23456,
      activeReactions: 45678,
      chemicalInventory: 2345678,
      safetySystemsActive: 98765,
      globalCoverage: 89.7,
      processEfficiency: 94.8,
      safetyCompliance: 97.2,
      environmentalCompliance: 95.6,
      productionOutput: 234567890,
      wasteReduction: 78.4,
      energyOptimization: 89.3,
      automationLevel: 92.1,
      digitalTwinSystems: 12345,
      aiOptimizedProcesses: 6789
    },
    chemicalProcesses: [
      {
        processName: 'Ammonia Synthesis',
        processId: 'AS-HB-2026',
        facility: 'Haber-Bosch Plant #3',
        location: 'Louisiana, USA',
        processType: 'Catalytic Synthesis',
        status: 'OPTIMIZED',
        temperature: 450,
        pressure: 250,
        efficiency: 94.7,
        throughput: 1500,
        catalystLife: 78.2,
        energyConsumption: 28.5,
        co2Emissions: 1.8,
        yieldOptimization: '89.4% theoretical',
        processConditions: 'Iron catalyst, 450°C, 250 atm',
        feedstockQuality: 'PREMIUM N2/H2',
        productPurity: '99.5% NH3',
        byproductManagement: 'CAPTURED & RECYCLED',
        automationLevel: '95% automated',
        digitalTwin: 'REAL-TIME SYNC',
        predictiveMaintenance: 'SCHEDULED 72H',
        safetyRating: 'EXCELLENT',
        environmentalImpact: 'LOW',
        economicPerformance: '$234/MT margin'
      },
      {
        processName: 'Polyethylene Production',
        processId: 'PE-POL-2026',
        facility: 'Polymer Complex Delta',
        location: 'Texas, USA',
        processType: 'Polymerization',
        status: 'ACTIVE',
        temperature: 85,
        pressure: 35,
        efficiency: 91.3,
        throughput: 850,
        catalystLife: 45.8,
        energyConsumption: 42.1,
        co2Emissions: 2.3,
        yieldOptimization: '92.7% conversion',
        processConditions: 'Ziegler-Natta catalyst, 85°C',
        feedstockQuality: 'ETHYLENE 99.9%',
        productPurity: '98.8% HDPE',
        byproductManagement: 'WAXES RECOVERED',
        automationLevel: '88% automated',
        digitalTwin: 'MODELING ACTIVE',
        predictiveMaintenance: 'NEXT 156H',
        safetyRating: 'GOOD',
        environmentalImpact: 'MODERATE',
        economicPerformance: '$189/MT margin'
      },
      {
        processName: 'Sulfuric Acid Contact',
        processId: 'SA-CON-2026',
        facility: 'Chemical Valley Plant',
        location: 'Ontario, Canada',
        processType: 'Contact Process',
        status: 'MAINTENANCE',
        temperature: 420,
        pressure: 4.2,
        efficiency: 87.5,
        throughput: 1200,
        catalystLife: 23.1,
        energyConsumption: 18.7,
        co2Emissions: 0.8,
        yieldOptimization: '98.5% conversion',
        processConditions: 'V2O5 catalyst, 420°C',
        feedstockQuality: 'SO2 FROM SMELTER',
        productPurity: '98% H2SO4',
        byproductManagement: 'HEAT RECOVERY',
        automationLevel: '92% automated',
        digitalTwin: 'MAINTENANCE MODE',
        predictiveMaintenance: 'CATALYST REPLACEMENT',
        safetyRating: 'EXCELLENT',
        environmentalImpact: 'MINIMAL',
        economicPerformance: '$145/MT margin'
      },
      {
        processName: 'Pharmaceutical Synthesis',
        processId: 'PS-API-2026',
        facility: 'BioPharma Manufacturing',
        location: 'Basel, Switzerland',
        processType: 'Multi-step Synthesis',
        status: 'CRITICAL',
        temperature: 25,
        pressure: 1.2,
        efficiency: 73.2,
        throughput: 45,
        catalystLife: 98.7,
        energyConsumption: 156.4,
        co2Emissions: 0.2,
        yieldOptimization: '76.8% overall yield',
        processConditions: 'Sterile conditions, GMP',
        feedstockQuality: 'PHARMACEUTICAL GRADE',
        productPurity: '99.8% API',
        byproductManagement: 'INCINERATION',
        automationLevel: '67% automated',
        digitalTwin: 'BATCH TRACKING',
        predictiveMaintenance: 'WEEKLY VALIDATION',
        safetyRating: 'CRITICAL CONTROL',
        environmentalImpact: 'MINIMAL',
        economicPerformance: '$45K/kg margin'
      }
    ],
    safetyMonitoring: [
      {
        facilityName: 'Petrochemical Complex Alpha',
        facilityId: 'PCA-TX-2026',
        location: 'Houston, Texas',
        hazardLevel: 'HIGH',
        safetyRating: 'EXCELLENT',
        lastIncident: '234 days ago',
        riskAssessment: 'TIER 1 PROCESS',
        emergencyPreparedness: 'LEVEL 4 READY',
        gasDetectors: 456,
        fireSuppressionSystems: 89,
        pressureReliefValves: 234,
        emergencyShutdowns: 67,
        personnelOnSite: 1245,
        trainingCompliance: 98.7,
        psm: 'PROCESS SAFETY MANAGEMENT',
        rmp: 'RISK MANAGEMENT PLAN',
        mocCompliance: 'MANAGEMENT OF CHANGE',
        phaStatus: 'PROCESS HAZARD ANALYSIS',
        incidentReporting: 'NEAR MISS SYSTEM',
        safetyKPIs: 'ZERO HARM GOAL',
        behavioralSafety: 'ACTIVE PROGRAM',
        contractorSafety: 'INTEGRATED MGMT',
        emergencyDrills: 'QUARTERLY',
        safetyCulture: 'EXCELLENT'
      },
      {
        facilityName: 'Specialty Chemicals Plant',
        facilityId: 'SCP-NJ-2026',
        location: 'New Jersey, USA',
        hazardLevel: 'MODERATE',
        safetyRating: 'GOOD',
        lastIncident: '89 days ago',
        riskAssessment: 'TIER 2 PROCESS',
        emergencyPreparedness: 'LEVEL 3 READY',
        gasDetectors: 234,
        fireSuppressionSystems: 45,
        pressureReliefValves: 123,
        emergencyShutdowns: 34,
        personnelOnSite: 567,
        trainingCompliance: 94.3,
        psm: 'ENHANCED PROCEDURES',
        rmp: 'UPDATED ANNUALLY',
        mocCompliance: 'DIGITAL SYSTEM',
        phaStatus: 'REVALIDATION DUE',
        incidentReporting: 'BEHAVIORAL BASED',
        safetyKPIs: 'INJURY REDUCTION',
        behavioralSafety: 'DEVELOPING',
        contractorSafety: 'STANDARD MGMT',
        emergencyDrills: 'MONTHLY',
        safetyCulture: 'IMPROVING'
      },
      {
        facilityName: 'Fine Chemicals Laboratory',
        facilityId: 'FCL-CA-2026',
        location: 'California, USA',
        hazardLevel: 'LOW',
        safetyRating: 'EXCELLENT',
        lastIncident: '456 days ago',
        riskAssessment: 'RESEARCH SCALE',
        emergencyPreparedness: 'LEVEL 2 READY',
        gasDetectors: 89,
        fireSuppressionSystems: 23,
        pressureReliefValves: 45,
        emergencyShutdowns: 12,
        personnelOnSite: 156,
        trainingCompliance: 99.1,
        psm: 'RESEARCH PROTOCOLS',
        rmp: 'LABORATORY SAFETY',
        mocCompliance: 'PEER REVIEW',
        phaStatus: 'CONTINUOUS ASSESSMENT',
        incidentReporting: 'LEARNING CULTURE',
        safetyKPIs: 'PREVENTION FOCUS',
        behavioralSafety: 'EMBEDDED',
        contractorSafety: 'VISITOR PROTOCOL',
        emergencyDrills: 'SCENARIO BASED',
        safetyCulture: 'WORLD CLASS'
      }
    ],
    qualityControl: [
      {
        testingLab: 'Central QC Laboratory',
        labId: 'CQC-LAB-001',
        location: 'Corporate HQ',
        analysisCapacity: '2500 samples/day',
        instrumentCount: 145,
        certifications: 'ISO 17025, GLP, GMP',
        automationLevel: '78% automated',
        turnaroundTime: '4.2 hours average',
        accuracy: 99.7,
        precision: 99.9,
        testMethods: 567,
        sampleTypes: 234,
        qualityMetrics: 'STATISTICAL CONTROL',
        labInformationSystem: 'FULLY INTEGRATED',
        dataIntegrity: 'BLOCKCHAIN VERIFIED',
        calibrationStatus: 'CURRENT',
        proficiencyTesting: 'EXCELLENT RESULTS',
        methodValidation: 'CONTINUOUS',
        outOfSpecification: '0.3% rate',
        customerSatisfaction: '98.4% rating',
        regulatoryCompliance: 'FULL COMPLIANCE',
        continuousImprovement: 'LEAN SIX SIGMA'
      },
      {
        testingLab: 'Process Analytics Center',
        labId: 'PAC-LAB-002',
        location: 'Manufacturing Site',
        analysisCapacity: '500 samples/day',
        instrumentCount: 67,
        certifications: 'ISO 9001, FDA',
        automationLevel: '85% automated',
        turnaroundTime: '1.8 hours average',
        accuracy: 99.4,
        precision: 99.6,
        testMethods: 234,
        sampleTypes: 89,
        qualityMetrics: 'REAL-TIME MONITORING',
        labInformationSystem: 'PROCESS INTEGRATED',
        dataIntegrity: 'SECURE PROTOCOLS',
        calibrationStatus: 'AUTOMATED',
        proficiencyTesting: 'GOOD RESULTS',
        methodValidation: 'VALIDATED',
        outOfSpecification: '0.1% rate',
        customerSatisfaction: '97.8% rating',
        regulatoryCompliance: 'AUDITED ANNUALLY',
        continuousImprovement: 'PAT ENABLED'
      }
    ],
    environmentalMonitoring: [
      {
        monitoringType: 'Air Emissions',
        monitorId: 'AE-CEMS-2026',
        coverage: 'ALL STACKS',
        parameters: 'SO2, NOx, CO, VOCs, PM',
        complianceStatus: 'FULL COMPLIANCE',
        emissionLimits: 'BELOW REGULATORY',
        monitoringFrequency: 'CONTINUOUS',
        dataReliability: 99.2,
        exceedances: 'ZERO THIS YEAR',
        reportingCompliance: 'AUTOMATED',
        emissionsTrend: 'DECREASING',
        reductionEfforts: 'SCRUBBER UPGRADES',
        alternativeFuels: 'NATURAL GAS CONVERSION',
        carbonFootprint: '23% REDUCTION',
        sustainabilityGoals: '2030 NET ZERO',
        regulatoryRelationship: 'PROACTIVE',
        communityEngagement: 'QUARTERLY MEETINGS',
        environmentalImpact: 'MINIMAL'
      },
      {
        monitoringType: 'Wastewater Discharge',
        monitorId: 'WW-NPDES-2026',
        coverage: 'ALL OUTFALLS',
        parameters: 'BOD, TSS, pH, metals',
        complianceStatus: 'EXCELLENT',
        dischargeLimits: 'WELL BELOW PERMIT',
        monitoringFrequency: 'DAILY COMPOSITE',
        dataReliability: 98.8,
        exceedances: 'NONE',
        reportingCompliance: 'ELECTRONIC',
        waterQuality: 'IMPROVING',
        treatmentEfficiency: '97.8% removal',
        waterRecycling: '45% REUSED',
        zeroDischarge: 'PILOT PROGRAM',
        waterFootprint: '18% REDUCTION',
        aquaticProtection: 'BIOMONITORING',
        stakeholderEngagement: 'TRANSPARENT',
        bestPractices: 'INDUSTRY LEADING'
      }
    ],
    chemicalAlerts: [
      {
        type: 'CRITICAL',
        category: 'Process Upset',
        message: 'Reactor temperature excursion at Petrochemical Alpha - Emergency cooling activated, facility evacuation initiated',
        facility: 'Petrochemical Complex Alpha',
        process: 'Ethylene Cracker Unit #3',
        parameter: 'Temperature 987°C (limit 850°C)',
        impact: 'Production shutdown, potential equipment damage, safety system activation',
        severity: 'CRITICAL',
        timestamp: '12:18',
        detectedBy: 'Distributed Control System',
        recommendation: 'Emergency response team activated, external emergency services notified, shelter-in-place advisory',
        safetySystemResponse: 'AUTOMATIC ISOLATION',
        personnelStatus: 'EVACUATION COMPLETE',
        environmentalImpact: 'FLARE SYSTEM ACTIVATED',
        rootCauseAnalysis: 'PRELIMINARY: COOLING SYSTEM FAILURE',
        estimatedDowntime: '72-96 HOURS',
        economicImpact: '$2.3M POTENTIAL LOSS',
        regulatoryNotification: 'AUTHORITIES INFORMED',
        mediaResponse: 'COMMUNICATIONS TEAM'
      },
      {
        type: 'HIGH',
        category: 'Safety Incident',
        message: 'Chemical leak detected at Specialty Plant - Chlorine gas release, emergency response in progress',
        facility: 'Specialty Chemicals Plant',
        chemical: 'Chlorine gas (Cl2)',
        releaseQuantity: '15 kg estimated',
        impact: 'Local evacuation, respiratory protection required, environmental monitoring active',
        severity: 'HIGH',
        timestamp: '11:52',
        detectedBy: 'Gas detection system',
        recommendation: 'Continue evacuation procedures, medical team on standby, air monitoring expanded',
        windDirection: 'NORTHEAST 12 KM/H',
        affectedRadius: '500M PRECAUTIONARY',
        personnelExposure: 'NONE REPORTED',
        emergencyServices: 'FIRE DEPT ON SCENE',
        decontamination: 'PROCEDURES ACTIVE',
        sourceisolation: 'VALVE CLOSED',
        airMonitoring: 'BELOW DETECTION LIMITS',
        hospitalNotification: 'STANDBY STATUS',
        communityAlert: 'REVERSE 911 SENT'
      },
      {
        type: 'MEDIUM',
        category: 'Quality Deviation',
        message: 'Pharmaceutical batch quality failure - API purity below specification, investigation underway',
        facility: 'BioPharma Manufacturing',
        product: 'Active Pharmaceutical Ingredient',
        batch: 'BP-2026-0789',
        specification: '99.8% minimum purity',
        actualResult: '98.9% purity',
        impact: 'Batch quarantine, production delay, customer notification required',
        severity: 'MEDIUM',
        timestamp: '10:35',
        detectedBy: 'Quality Control Laboratory',
        recommendation: 'Full batch investigation, process review, customer communication',
        batchSize: '450 KG',
        batchValue: '$2.1M',
        customerImpact: 'DELIVERY DELAY',
        regulatoryImplications: 'DEVIATION REPORT',
        rootCauseInvestigation: 'INITIATED',
        preventiveActions: 'PROCESS REVIEW',
        qualityAgreement: 'CUSTOMER NOTIFICATION',
        supplychainImpact: 'ALTERNATIVE SOURCING'
      },
      {
        type: 'INFO',
        category: 'Process Optimization',
        message: 'AI optimization achieves 3.2% efficiency gain in Ammonia Synthesis - New operating parameters validated',
        facility: 'Haber-Bosch Plant #3',
        process: 'Ammonia Synthesis',
        improvement: '3.2% efficiency increase',
        impact: 'Energy savings $1.2M annually, reduced CO2 emissions 890 tons/year',
        significance: 'OPTIMIZATION SUCCESS',
        timestamp: '09:15',
        detectedBy: 'AI Process Optimization System',
        energySavings: '$1.2M ANNUALLY',
        co2Reduction: '890 TONS/YEAR',
        implementationTime: '2 WEEKS',
        validationPeriod: '30 DAYS SUCCESSFUL',
        safetyImpact: 'ENHANCED STABILITY',
        operatorTraining: 'COMPLETED',
        documentationUpdate: 'IN PROGRESS',
        bestPracticeSharing: 'GLOBAL ROLLOUT',
        sustainabilityCredits: 'CARBON OFFSET'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        facilitiesOperational: 33245,
        reactionsMonitored: 45678,
        qualityTests: 2345,
        safetyChecks: 8967,
        alertsGenerated: 12,
        processOptimizations: 234,
        efficiency: 94.8,
        safety: 99.7
      },
      {
        period: 'Last 24 Hours',
        facilitiesOperational: 33156,
        reactionsMonitored: 987654,
        qualityTests: 56789,
        safetyChecks: 123456,
        alertsGenerated: 89,
        processOptimizations: 1234,
        efficiency: 94.3,
        safety: 99.4
      },
      {
        period: 'Last 7 Days',
        facilitiesOperational: 32987,
        reactionsMonitored: 6789123,
        qualityTests: 345678,
        safetyChecks: 789123,
        alertsGenerated: 456,
        processOptimizations: 6789,
        efficiency: 93.8,
        safety: 99.1
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChemicalData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        chemicalOverview: {
          ...prev.chemicalOverview,
          processEfficiency: Math.max(92.0, Math.min(97.0, prev.chemicalOverview.processEfficiency + (Math.random() - 0.5) * 1.0)),
          safetyCompliance: Math.max(95.0, Math.min(99.0, prev.chemicalOverview.safetyCompliance + (Math.random() - 0.5) * 0.8)),
          activeReactions: Math.max(40000, Math.min(50000, prev.chemicalOverview.activeReactions + Math.floor((Math.random() - 0.5) * 200)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMIZED': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MODERATE': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'FULL COMPLIANCE': return 'text-green-400 bg-green-400/20';
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

  const getHazardColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400';
      case 'MODERATE': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  const getRatingColor = (rating) => {
    switch (rating) {
      case 'WORLD CLASS': return 'text-green-500';
      case 'EXCELLENT': return 'text-green-400';
      case 'GOOD': return 'text-blue-400';
      case 'IMPROVING': return 'text-yellow-400';
      default: return 'text-slate-400';
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
  const formatTemperature = (temp) => `${temp}°C`;
  const formatPressure = (pressure) => `${pressure} atm`;
  const formatThroughput = (throughput) => `${throughput} MT/day`;

  return (
    <div className="h-full bg-gradient-to-br from-violet-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-violet-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
              <Beaker className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Chemical Technology Intelligence Center</h1>
              <p className="text-violet-300">Chemistry & process analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-violet-400">{chemicalData.currentTime}</div>
            <div className="text-violet-300">Chemical Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Chemical Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FlaskConical className="w-5 h-5 text-violet-400 mr-2" />
                Facilities
              </h3>
            </div>
            <div className="text-3xl font-bold text-violet-400">{formatNumber(chemicalData.chemicalOverview.operationalFacilities)}</div>
            <div className="text-violet-300 text-sm">{formatNumber(chemicalData.chemicalOverview.processingFacilities)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Atom className="w-5 h-5 text-blue-400 mr-2" />
                Reactions
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(chemicalData.chemicalOverview.activeReactions)}</div>
            <div className="text-blue-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(chemicalData.chemicalOverview.processEfficiency)}</div>
            <div className="text-green-300 text-sm">Process</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lock className="w-5 h-5 text-yellow-400 mr-2" />
                Safety
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(chemicalData.chemicalOverview.safetyCompliance)}</div>
            <div className="text-yellow-300 text-sm">Compliance</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Layers className="w-5 h-5 text-cyan-400 mr-2" />
                Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(chemicalData.chemicalOverview.qualityControlStations)}</div>
            <div className="text-cyan-300 text-sm">Stations</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                Automation
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(chemicalData.chemicalOverview.automationLevel)}</div>
            <div className="text-orange-300 text-sm">Level</div>
          </div>
        </div>

        {/* Chemical Processes & Safety Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Atom className="w-5 h-5 text-violet-400 mr-2" />
              Active Chemical Processes
            </h3>
            <div className="space-y-4">
              {chemicalData.chemicalProcesses.map((process, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{process.processName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(process.status)}`}>
                        {process.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{process.facility}</div>
                    <div className="text-blue-400">{process.processType}</div>
                    <div className="text-green-400">{process.location}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-red-400">Temp: {formatTemperature(process.temperature)}</div>
                    <div className="text-orange-400">Pressure: {formatPressure(process.pressure)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Efficiency: {formatPercentage(process.efficiency)}</div>
                    <div className="text-purple-400">Throughput: {formatThroughput(process.throughput)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Process Efficiency</span>
                      <span>{formatPercentage(process.efficiency)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-violet-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${process.efficiency}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Conditions: {process.processConditions}</div>
                    <div className="text-indigo-400">Yield: {process.yieldOptimization}</div>
                    <div className="text-cyan-400">Purity: {process.productPurity}</div>
                    <div className="text-green-400">Automation: {process.automationLevel}</div>
                    <div className="text-pink-400">Economic: {process.economicPerformance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 text-yellow-400 mr-2" />
              Safety Monitoring Systems
            </h3>
            <div className="space-y-4">
              {chemicalData.safetyMonitoring.map((facility, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{facility.facilityName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(facility.safetyRating)}`}>
                        {facility.safetyRating}
                      </span>
                      <span className={`text-xs ${getHazardColor(facility.hazardLevel)}`}>
                        {facility.hazardLevel}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{facility.location}</div>
                    <div className="text-blue-400">Personnel: {formatNumber(facility.personnelOnSite)}</div>
                    <div className="text-green-400">ID: {facility.facilityId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Gas Detectors: {facility.gasDetectors}</div>
                    <div className="text-purple-400">Fire Systems: {facility.fireSuppressionSystems}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Relief Valves: {facility.pressureReliefValves}</div>
                    <div className="text-pink-400">ESDs: {facility.emergencyShutdowns}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Last Incident: {facility.lastIncident}</div>
                    <div className="text-green-400">Training: {formatPercentage(facility.trainingCompliance)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Risk: {facility.riskAssessment}</div>
                    <div className="text-cyan-400">Emergency: {facility.emergencyPreparedness}</div>
                    <div className="text-blue-400">PSM: {facility.psm}</div>
                    <div className={getRatingColor(facility.safetyCulture)}>Culture: {facility.safetyCulture}</div>
                    <div className="text-green-400">Drills: {facility.emergencyDrills}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Control & Environmental Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Quality Control Laboratories
            </h3>
            <div className="space-y-4">
              {chemicalData.qualityControl.map((lab, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{lab.testingLab}</span>
                    <div className="text-green-400 text-xs">{lab.certifications}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{lab.location}</div>
                    <div className="text-blue-400">Capacity: {lab.analysisCapacity}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Instruments: {lab.instrumentCount}</div>
                    <div className="text-purple-400">Automation: {lab.automationLevel}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-green-400">Accuracy: {formatPercentage(lab.accuracy)}</div>
                    <div className="text-orange-400">Precision: {formatPercentage(lab.precision)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Turnaround: {lab.turnaroundTime}</div>
                    <div className="text-pink-400">Methods: {lab.testMethods}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">System: {lab.labInformationSystem}</div>
                    <div className="text-cyan-400">OOS Rate: {lab.outOfSpecification}</div>
                    <div className="text-blue-400">Satisfaction: {lab.customerSatisfaction}</div>
                    <div className="text-green-400">Compliance: {lab.regulatoryCompliance}</div>
                    <div className="text-purple-400">Improvement: {lab.continuousImprovement}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-green-400 mr-2" />
              Environmental Monitoring
            </h3>
            <div className="space-y-4">
              {chemicalData.environmentalMonitoring.map((monitor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{monitor.monitoringType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(monitor.complianceStatus)}`}>
                        {monitor.complianceStatus}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{monitor.coverage}</div>
                    <div className="text-blue-400">ID: {monitor.monitorId}</div>
                    <div className="text-green-400">Frequency: {monitor.monitoringFrequency}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Parameters: {monitor.parameters}</div>
                    <div className="text-purple-400">Reliability: {formatPercentage(monitor.dataReliability)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Limits: {monitor.emissionLimits || monitor.dischargeLimits}</div>
                    <div className="text-pink-400">Exceedances: {monitor.exceedances}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Trend: {monitor.emissionsTrend || monitor.waterQuality}</div>
                    <div className="text-indigo-400">
                      Reduction: {monitor.carbonFootprint || monitor.waterFootprint || 'N/A'}
                    </div>
                    <div className="text-cyan-400">
                      Goals: {monitor.sustainabilityGoals || monitor.zeroDischarge || 'N/A'}
                    </div>
                    <div className="text-green-400">
                      Efficiency: {monitor.treatmentEfficiency || 'N/A'}
                    </div>
                    <div className="text-blue-400">
                      Community: {monitor.communityEngagement || monitor.stakeholderEngagement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-violet-400 mr-2" />
            Chemical Technology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {chemicalData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Facilities: {formatNumber(metrics.facilitiesOperational)}</div>
                  <div className="text-green-400">Reactions: {formatNumber(metrics.reactionsMonitored)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Quality Tests: {formatNumber(metrics.qualityTests)}</div>
                  <div className="text-yellow-400">Safety Checks: {formatNumber(metrics.safetyChecks)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Alerts: {metrics.alertsGenerated}</div>
                  <div className="text-orange-400">Optimizations: {formatNumber(metrics.processOptimizations)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Efficiency: {formatPercentage(metrics.efficiency)}</div>
                  <div className="text-pink-400">Safety: {formatPercentage(metrics.safety)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chemical Technology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Chemical Technology System Alerts
          </h3>
          <div className="space-y-4">
            {chemicalData.chemicalAlerts.map((alert, index) => (
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
                  {alert.process && <div className="text-cyan-400">Process: {alert.process}</div>}
                  {alert.parameter && <div className="text-red-400">Parameter: {alert.parameter}</div>}
                  {alert.chemical && <div className="text-orange-400">Chemical: {alert.chemical}</div>}
                  {alert.releaseQuantity && <div className="text-yellow-400">Release: {alert.releaseQuantity}</div>}
                  {alert.product && <div className="text-blue-400">Product: {alert.product}</div>}
                  {alert.batch && <div className="text-purple-400">Batch: {alert.batch}</div>}
                  {alert.improvement && <div className="text-green-400">Improvement: {alert.improvement}</div>}
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