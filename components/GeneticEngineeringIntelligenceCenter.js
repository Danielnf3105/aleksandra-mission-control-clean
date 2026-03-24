// Genetic Engineering Intelligence Center - Gene Editing & Biotechnology Analytics
import { useState, useEffect } from 'react';
import { Dna, Microscope, FlaskConical, Shield, Target, Activity, BarChart3, Settings, Lock, AlertTriangle, Zap, Eye } from 'lucide-react';

export default function GeneticEngineeringIntelligenceCenter() {
  const [geneticData, setGeneticData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    geneticOverview: {
      totalProjects: 247,
      activeExperiments: 189,
      geneEditingSuccess: 94.3,
      crisprAccuracy: 91.7,
      bioSafetyScore: 97.8,
      regulatoryCompliance: 96.4,
      clinicalTrials: 67,
      syntheticBiologyProjects: 134,
      geneTherapyPipeline: 89,
      proteinEngineering: 156,
      metabolicEngineering: 78,
      cellLineDevelopment: 234,
      biomanufacturing: 167,
      qualityControl: 98.2,
      ethicsApproval: 94.7,
      patentsApplied: 342,
      publicationsGenerated: 178
    },
    laboratoryFacilities: [
      {
        facilityName: 'CRISPR Innovation Lab',
        location: 'Boston, MA',
        biosafety: 'BSL-2',
        status: 'OPERATIONAL',
        capacity: 'High-throughput',
        equipment: ['CRISPR-Cas9', 'Base editors', 'Prime editors'],
        activeProjects: 67,
        successRate: 96.8,
        throughputDaily: 450,
        safetyIncidents: 0,
        complianceRating: 'A+',
        lastInspection: '2026-03-10',
        certifications: ['FDA', 'EMA', 'ISO 15189'],
        specialization: 'Therapeutic gene editing',
        teamSize: 34,
        uptime: 99.7,
        utilizationRate: 87.3
      },
      {
        facilityName: 'Synthetic Biology Center',
        location: 'Cambridge, UK',
        biosafety: 'BSL-1',
        status: 'ACTIVE',
        capacity: 'Medium-scale',
        equipment: ['DNA synthesizers', 'Bioreactors', 'Automated cloning'],
        activeProjects: 45,
        successRate: 89.4,
        throughputDaily: 280,
        safetyIncidents: 1,
        complianceRating: 'A',
        lastInspection: '2026-02-28',
        certifications: ['MHRA', 'ISO 14001'],
        specialization: 'Metabolic pathway design',
        teamSize: 28,
        uptime: 96.2,
        utilizationRate: 74.6
      },
      {
        facilityName: 'Cell Engineering Facility',
        location: 'Singapore',
        biosafety: 'BSL-3',
        status: 'MAINTENANCE',
        capacity: 'High-security',
        equipment: ['Flow cytometers', 'Cell sorters', 'Incubation systems'],
        activeProjects: 23,
        successRate: 92.1,
        throughputDaily: 150,
        safetyIncidents: 0,
        complianceRating: 'A+',
        lastInspection: '2026-03-15',
        certifications: ['HSA Singapore', 'WHO GMP'],
        specialization: 'CAR-T cell development',
        teamSize: 19,
        uptime: 94.8,
        utilizationRate: 61.3
      },
      {
        facilityName: 'Protein Design Studio',
        location: 'Zurich, Switzerland',
        biosafety: 'BSL-1',
        status: 'OPERATIONAL',
        capacity: 'AI-enhanced',
        equipment: ['AlphaFold servers', 'X-ray crystallography', 'NMR'],
        activeProjects: 34,
        successRate: 87.9,
        throughputDaily: 180,
        safetyIncidents: 0,
        complianceRating: 'A',
        lastInspection: '2026-03-05',
        certifications: ['Swissmedic', 'ISO 9001'],
        specialization: 'Computational protein design',
        teamSize: 22,
        uptime: 98.4,
        utilizationRate: 82.7
      },
      {
        facilityName: 'Gene Therapy Pilot Plant',
        location: 'San Francisco, CA',
        biosafety: 'BSL-2',
        status: 'SCALING',
        capacity: 'Pilot-scale',
        equipment: ['Viral vectors', 'Purification systems', 'Quality testing'],
        activeProjects: 12,
        successRate: 94.6,
        throughputDaily: 95,
        safetyIncidents: 2,
        complianceRating: 'B+',
        lastInspection: '2026-03-12',
        certifications: ['FDA IND', 'cGMP'],
        specialization: 'AAV vector production',
        teamSize: 41,
        uptime: 91.3,
        utilizationRate: 68.9
      }
    ],
    geneEditingProjects: [
      {
        projectName: 'Sickle Cell Gene Therapy',
        projectId: 'GE-2026-001',
        targetGene: 'HBB (Beta-globin)',
        editingTechnology: 'CRISPR-Cas9',
        phase: 'Phase II Clinical',
        progressPercent: 67.4,
        patientsEnrolled: 45,
        targetEnrollment: 120,
        primaryEndpoint: 'Vaso-occlusive crisis reduction',
        efficacyRate: 89.7,
        safetyProfile: 'Favorable',
        adverseEvents: 'Mild (Grade 1-2)',
        principalInvestigator: 'Dr. Sarah Martinez',
        institution: 'Boston Children\'s Hospital',
        startDate: '2025-08-15',
        estimatedCompletion: '2027-12-31',
        budget: '$45.7M',
        currentSpend: '$30.8M',
        regulatoryStatus: 'FDA Fast Track',
        ethicsApproval: 'IRB Approved',
        publicationsPending: 3,
        patentsApplied: 7
      },
      {
        projectName: 'Huntington\'s Disease Silencing',
        projectId: 'GE-2026-002',
        targetGene: 'HTT (Huntingtin)',
        editingTechnology: 'Base editing',
        phase: 'Phase I Clinical',
        progressPercent: 34.2,
        patientsEnrolled: 12,
        targetEnrollment: 36,
        primaryEndpoint: 'HTT protein reduction',
        efficacyRate: 76.3,
        safetyProfile: 'Monitoring',
        adverseEvents: 'None significant',
        principalInvestigator: 'Prof. Michael Chen',
        institution: 'UCSF Neuroscience',
        startDate: '2026-01-22',
        estimatedCompletion: '2028-06-30',
        budget: '$62.3M',
        currentSpend: '$21.3M',
        regulatoryStatus: 'IND Active',
        ethicsApproval: 'Institutional Review',
        publicationsPending: 1,
        patentsApplied: 4
      },
      {
        projectName: 'CAR-T Cell Enhancement',
        projectId: 'GE-2026-003',
        targetGene: 'CD19 receptor modification',
        editingTechnology: 'Prime editing',
        phase: 'Preclinical',
        progressPercent: 78.9,
        patientsEnrolled: 0,
        targetEnrollment: 'N/A',
        primaryEndpoint: 'Enhanced persistence',
        efficacyRate: 92.4,
        safetyProfile: 'In vitro validation',
        adverseEvents: 'N/A',
        principalInvestigator: 'Dr. Lisa Wang',
        institution: 'Memorial Sloan Kettering',
        startDate: '2025-11-03',
        estimatedCompletion: '2026-09-15',
        budget: '$28.9M',
        currentSpend: '$22.8M',
        regulatoryStatus: 'Pre-IND planning',
        ethicsApproval: 'IACUC Approved',
        publicationsPending: 2,
        patentsApplied: 5
      },
      {
        projectName: 'Duchenne Muscular Dystrophy',
        projectId: 'GE-2026-004',
        targetGene: 'DMD (Dystrophin)',
        editingTechnology: 'CRISPR-Cas12',
        phase: 'Phase I/II Clinical',
        progressPercent: 45.7,
        patientsEnrolled: 8,
        targetEnrollment: 24,
        primaryEndpoint: 'Dystrophin restoration',
        efficacyRate: 67.8,
        safetyProfile: 'Acceptable',
        adverseEvents: 'Injection site reactions',
        principalInvestigator: 'Dr. Robert Kim',
        institution: 'Children\'s Hospital Philadelphia',
        startDate: '2025-12-10',
        estimatedCompletion: '2027-08-31',
        budget: '$38.4M',
        currentSpend: '$17.5M',
        regulatoryStatus: 'FDA Rare Disease',
        ethicsApproval: 'Multi-site IRB',
        publicationsPending: 1,
        patentsApplied: 3
      }
    ],
    syntheticBiology: [
      {
        organismName: 'E. coli Biofuel Producer',
        engineeringType: 'Metabolic pathway',
        targetProduct: 'Biodiesel precursors',
        yieldOptimization: 78.4,
        productionRate: '45.7 g/L/h',
        fermentationTime: '72 hours',
        scalabilityScore: 89.2,
        costEffectiveness: '$2.34/kg',
        commercializationStage: 'Pilot scale',
        environmentalImpact: '67% CO2 reduction',
        regulatoryStatus: 'EPA notification',
        safetyAssessment: 'Contained use approved',
        intellectualProperty: '12 patents filed',
        partnershipStatus: 'Shell collaboration',
        marketPotential: '$2.8B addressable'
      },
      {
        organismName: 'Yeast Pharmaceutical Factory',
        engineeringType: 'Protein expression',
        targetProduct: 'Insulin analogs',
        yieldOptimization: 92.1,
        productionRate: '12.3 g/L/h',
        fermentationTime: '48 hours',
        scalabilityScore: 94.7,
        costEffectiveness: '$0.67/unit',
        commercializationStage: 'Commercial',
        environmentalImpact: '89% waste reduction',
        regulatoryStatus: 'FDA approved',
        safetyAssessment: 'GRAS status',
        intellectualProperty: '8 patents granted',
        partnershipStatus: 'Novo Nordisk license',
        marketPotential: '$1.2B annual revenue'
      },
      {
        organismName: 'Algae Carbon Capture',
        engineeringType: 'CO2 fixation',
        targetProduct: 'Carbon-negative materials',
        yieldOptimization: 84.6,
        productionRate: '89.4 tons CO2/day',
        fermentationTime: 'Continuous',
        scalabilityScore: 76.3,
        costEffectiveness: '$45/ton CO2',
        commercializationStage: 'Demo scale',
        environmentalImpact: 'Net negative emissions',
        regulatoryStatus: 'Carbon credit approved',
        safetyAssessment: 'Environmental release pending',
        intellectualProperty: '15 patents pending',
        partnershipStatus: 'Microsoft funding',
        marketPotential: '$180B carbon market'
      }
    ],
    regulatoryCompliance: [
      {
        regulation: 'FDA Gene Therapy Guidance',
        complianceScore: 96.4,
        lastAudit: '2026-02-15',
        findings: 2,
        correctiveActions: 1,
        auditType: 'Internal',
        nextAudit: '2026-08-15',
        riskLevel: 'LOW',
        documentation: 'Complete',
        training: 'Current',
        violations: 0,
        recommendations: 'Minor process improvements'
      },
      {
        regulation: 'EMA Advanced Therapy Guidelines',
        complianceScore: 94.8,
        lastAudit: '2026-01-28',
        findings: 3,
        correctiveActions: 2,
        auditType: 'Regulatory',
        nextAudit: '2026-07-28',
        riskLevel: 'LOW',
        documentation: 'Complete',
        training: 'Current',
        violations: 0,
        recommendations: 'Documentation updates'
      },
      {
        regulation: 'NIH Recombinant DNA Guidelines',
        complianceScore: 98.7,
        lastAudit: '2026-03-01',
        findings: 1,
        correctiveActions: 0,
        auditType: 'Institutional',
        nextAudit: '2027-03-01',
        riskLevel: 'VERY_LOW',
        documentation: 'Exemplary',
        training: 'Current',
        violations: 0,
        recommendations: 'Continue current practices'
      },
      {
        regulation: 'CDC Biosafety Guidelines',
        complianceScore: 97.2,
        lastAudit: '2026-02-20',
        findings: 2,
        correctiveActions: 1,
        auditType: 'External',
        nextAudit: '2026-11-20',
        riskLevel: 'LOW',
        documentation: 'Comprehensive',
        training: 'Up to date',
        violations: 0,
        recommendations: 'Equipment calibration schedule'
      }
    ],
    bioSafetyMonitoring: [
      {
        safetyCategory: 'Containment Integrity',
        riskLevel: 'LOW',
        monitoringScore: 98.9,
        lastInspection: '2026-03-17',
        findings: 'All containment systems operational',
        airflowStatus: 'Negative pressure maintained',
        hepaFilters: '99.97% efficiency',
        emergencyProcedures: 'Tested monthly',
        incidents: 0,
        mitigations: ['Redundant HEPA filtration', 'Real-time pressure monitoring', 'Emergency shutoff systems'],
        nextInspection: '2026-06-17'
      },
      {
        safetyCategory: 'Personnel Protection',
        riskLevel: 'VERY_LOW',
        monitoringScore: 99.4,
        lastInspection: '2026-03-15',
        findings: 'All PPE protocols followed',
        trainingCompliance: '100% current',
        medicalSurveillance: 'Up to date',
        vaccinations: 'Required vaccines current',
        incidents: 0,
        mitigations: ['Comprehensive training', 'Regular health monitoring', 'Emergency response drills'],
        nextInspection: '2026-09-15'
      },
      {
        safetyCategory: 'Waste Management',
        riskLevel: 'LOW',
        monitoringScore: 97.6,
        lastInspection: '2026-03-10',
        findings: 'Proper segregation and treatment',
        autoclaveEfficiency: '99.9% sterilization',
        wasteTracking: 'Complete documentation',
        disposal: 'Licensed contractors',
        incidents: 1,
        mitigations: ['Automated waste tracking', 'Double sterilization', 'Chain of custody protocols'],
        nextInspection: '2026-06-10'
      },
      {
        safetyCategory: 'Environmental Release',
        riskLevel: 'MEDIUM',
        monitoringScore: 93.8,
        lastInspection: '2026-03-05',
        findings: 'Monitoring systems operational',
        environmentalSampling: 'Quarterly testing',
        airMonitoring: 'Continuous',
        waterTesting: 'Weekly samples',
        incidents: 2,
        mitigations: ['Enhanced environmental monitoring', 'Containment validation', 'Emergency response protocols'],
        nextInspection: '2026-05-05'
      }
    ],
    qualityMetrics: [
      {
        metric: 'Gene Editing Precision',
        currentValue: 94.3,
        target: 95.0,
        trend: 'IMPROVING',
        lastMeasurement: '2026-03-18',
        sampleSize: 2847,
        standardDeviation: 2.1,
        confidenceInterval: '92.2-96.4%',
        benchmarkComparison: 'Industry leading'
      },
      {
        metric: 'Off-target Effects',
        currentValue: 0.07,
        target: 0.05,
        trend: 'DECLINING',
        lastMeasurement: '2026-03-17',
        sampleSize: 1923,
        standardDeviation: 0.03,
        confidenceInterval: '0.04-0.10%',
        benchmarkComparison: 'Above average'
      },
      {
        metric: 'Cell Viability Post-Edit',
        currentValue: 89.7,
        target: 90.0,
        trend: 'STABLE',
        lastMeasurement: '2026-03-18',
        sampleSize: 4567,
        standardDeviation: 4.2,
        confidenceInterval: '85.5-93.9%',
        benchmarkComparison: 'Meeting standards'
      },
      {
        metric: 'Protein Expression Level',
        currentValue: 87.4,
        target: 85.0,
        trend: 'EXCEEDING',
        lastMeasurement: '2026-03-16',
        sampleSize: 3456,
        standardDeviation: 5.8,
        confidenceInterval: '81.6-93.2%',
        benchmarkComparison: 'Best in class'
      }
    ],
    geneticAlerts: [
      {
        type: 'CRITICAL',
        category: 'Safety Incident',
        message: 'Containment breach detected in BSL-3 facility - emergency protocols activated',
        facility: 'Cell Engineering Facility (Singapore)',
        incident: 'HEPA filter failure in laboratory C-304, potential aerosol release',
        impact: 'Personnel evacuation, experiment suspension, 6-hour facility lockdown required',
        severity: 'CRITICAL',
        timestamp: '11:42',
        detectedBy: 'Environmental Monitor',
        recommendation: 'Complete facility decontamination, equipment inspection, incident investigation',
        affectedExperiments: ['CAR-T development', 'Viral vector production', 'Cell line expansion'],
        personnelAffected: 19,
        emergencyResponse: 'HAZMAT Team deployed',
        estimatedDowntime: '24-48 hours',
        regulatoryNotification: 'HSA Singapore alerted',
        rootCause: 'Under investigation'
      },
      {
        type: 'HIGH',
        category: 'Quality Deviation',
        message: 'Off-target editing detected above threshold in Sickle Cell trial - immediate review needed',
        project: 'Sickle Cell Gene Therapy (GE-2026-001)',
        finding: 'Off-target rate 0.12% vs 0.05% specification in 3 patient samples',
        impact: 'Trial enrollment paused, safety review initiated, FDA notification required',
        severity: 'HIGH',
        timestamp: '11:28',
        detectedBy: 'Quality Control',
        recommendation: 'Hold patient dosing, investigate editing parameters, enhance screening protocols',
        affectedPatients: 3,
        clinicalHold: 'Under consideration',
        principalInvestigator: 'Dr. Sarah Martinez notified',
        safetyBoard: 'Emergency meeting scheduled',
        regulatoryActions: 'FDA safety update due 48h',
        protocolAmendment: 'May be required'
      },
      {
        type: 'MEDIUM',
        category: 'Compliance Alert',
        message: 'Documentation gaps identified in Gene Therapy Pilot Plant - corrective action needed',
        facility: 'Gene Therapy Pilot Plant (San Francisco)',
        gap: 'Batch records missing QC signatures for 12 vector lots, traceability compromised',
        impact: 'Potential compliance violation, batch investigation required, release delays possible',
        severity: 'MEDIUM',
        timestamp: '11:15',
        detectedBy: 'Quality Assurance',
        recommendation: 'Complete missing documentation, investigate root cause, implement CAPA',
        affectedBatches: 12,
        productImpact: 'Release pending',
        timelineDelay: '2-3 weeks',
        regulatoryRisk: 'FDA inspection concern',
        correctiveAction: 'Training and system updates',
        preventiveAction: 'Electronic batch records implementation'
      },
      {
        type: 'INFO',
        category: 'Milestone Achievement',
        message: 'Protein Design Studio achieves 95% structure prediction accuracy - new benchmark established',
        facility: 'Protein Design Studio (Zurich)',
        achievement: 'AlphaFold integration improves prediction accuracy from 87.9% to 95.2%',
        impact: 'Accelerated protein design pipeline, reduced experimental cycles, enhanced IP position',
        validation: 'X-ray crystallography confirmation completed',
        timestamp: '11:05',
        detectedBy: 'Performance Monitor',
        opportunity: 'PUBLICATION_READY',
        businessValue: 'Significant competitive advantage in protein engineering market',
        newCapabilities: ['Faster design cycles', 'Higher success rates', 'Novel protein architectures'],
        marketImpact: 'Potential $50M additional revenue from enhanced capabilities',
        nextGoal: '97% accuracy target by Q4 2026',
        publicationPotential: 'Nature Biotechnology submission planned'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        experimentsCompleted: 23,
        editingSuccess: 92.8,
        qualityTests: 156,
        safetyIncidents: 1,
        complianceChecks: 45,
        prototypesDeveloped: 3,
        patentsFilings: 2,
        publicationsSubmitted: 1
      },
      {
        period: 'Last 24 Hours',
        experimentsCompleted: 189,
        editingSuccess: 94.1,
        qualityTests: 1247,
        safetyIncidents: 3,
        complianceChecks: 342,
        prototypesDeveloped: 12,
        patentsFilings: 8,
        publicationsSubmitted: 3
      },
      {
        period: 'Last 7 Days',
        experimentsCompleted: 1234,
        editingSuccess: 93.7,
        qualityTests: 8765,
        safetyIncidents: 12,
        complianceChecks: 2341,
        prototypesDeveloped: 67,
        patentsFilings: 28,
        publicationsSubmitted: 14
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setGeneticData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        geneticOverview: {
          ...prev.geneticOverview,
          geneEditingSuccess: Math.max(85.0, Math.min(98.0, prev.geneticOverview.geneEditingSuccess + (Math.random() - 0.5) * 1.0)),
          crisprAccuracy: Math.max(88.0, Math.min(96.0, prev.geneticOverview.crisprAccuracy + (Math.random() - 0.5) * 0.8)),
          bioSafetyScore: Math.max(95.0, Math.min(99.5, prev.geneticOverview.bioSafetyScore + (Math.random() - 0.5) * 0.5)),
          activeExperiments: Math.max(150, Math.min(220, prev.geneticOverview.activeExperiments + Math.floor((Math.random() - 0.5) * 5)))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'SCALING': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getPhaseColor = (phase) => {
    switch (phase) {
      case 'Preclinical': return 'text-blue-400 bg-blue-400/20';
      case 'Phase I Clinical': return 'text-cyan-400 bg-cyan-400/20';
      case 'Phase I/II Clinical': return 'text-green-400 bg-green-400/20';
      case 'Phase II Clinical': return 'text-yellow-400 bg-yellow-400/20';
      case 'Phase III Clinical': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'VERY_LOW': return 'text-green-500';
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'IMPROVING': return 'text-green-400';
      case 'EXCEEDING': return 'text-green-500';
      case 'STABLE': return 'text-yellow-400';
      case 'DECLINING': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const getBiosafety = (level) => {
    switch (level) {
      case 'BSL-1': return 'text-green-400';
      case 'BSL-2': return 'text-yellow-400';
      case 'BSL-3': return 'text-orange-400';
      case 'BSL-4': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => {
    const numericAmount = parseFloat(amount.replace(/[$M]/g, ''));
    if (amount.includes('M')) {
      return `$${numericAmount.toFixed(1)}M`;
    }
    return `$${numericAmount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-green-600 rounded-xl">
              <Dna className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Genetic Engineering Intelligence Center</h1>
              <p className="text-emerald-300">Gene editing & biotechnology analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{geneticData.currentTime}</div>
            <div className="text-emerald-300">Genetic Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Genetic Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Dna className="w-5 h-5 text-emerald-400 mr-2" />
                Projects
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{geneticData.geneticOverview.activeExperiments}</div>
            <div className="text-emerald-300 text-sm">{geneticData.geneticOverview.totalProjects} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Editing Success
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(geneticData.geneticOverview.geneEditingSuccess)}</div>
            <div className="text-green-300 text-sm">Gene Editing</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                CRISPR Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(geneticData.geneticOverview.crisprAccuracy)}</div>
            <div className="text-cyan-300 text-sm">Precision Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-blue-400 mr-2" />
                BioSafety
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(geneticData.geneticOverview.bioSafetyScore)}</div>
            <div className="text-blue-300 text-sm">Safety Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FlaskConical className="w-5 h-5 text-yellow-400 mr-2" />
                Clinical Trials
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{geneticData.geneticOverview.clinicalTrials}</div>
            <div className="text-yellow-300 text-sm">Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Microscope className="w-5 h-5 text-purple-400 mr-2" />
                Compliance
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(geneticData.geneticOverview.regulatoryCompliance)}</div>
            <div className="text-purple-300 text-sm">Regulatory</div>
          </div>
        </div>

        {/* Laboratory Facilities & Gene Editing Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Microscope className="w-5 h-5 text-emerald-400 mr-2" />
              Laboratory Facilities
            </h3>
            <div className="space-y-4">
              {geneticData.laboratoryFacilities.map((facility, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{facility.facilityName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(facility.status)}`}>
                        {facility.status}
                      </span>
                      <span className={`text-xs ${getBiosafety(facility.biosafety)}`}>
                        {facility.biosafety}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-emerald-400">{facility.location}</div>
                    <div className="text-cyan-400">Projects: {facility.activeProjects}</div>
                    <div className="text-green-400">Success: {formatPercentage(facility.successRate)}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Team: {facility.teamSize}</div>
                    <div className="text-blue-400">Uptime: {formatPercentage(facility.uptime)}</div>
                    <div className="text-purple-400">Utilization: {formatPercentage(facility.utilizationRate)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Specialization: {facility.specialization}</div>
                    <div className="text-indigo-400">Rating: {facility.complianceRating} | Incidents: {facility.safetyIncidents}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Dna className="w-5 h-5 text-green-400 mr-2" />
              Gene Editing Projects
            </h3>
            <div className="space-y-4">
              {geneticData.geneEditingProjects.map((project, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{project.projectName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPhaseColor(project.phase)}`}>
                        {project.phase}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-emerald-400">{project.editingTechnology}</div>
                    <div className="text-cyan-400">Target: {project.targetGene}</div>
                    <div className="text-green-400">Efficacy: {formatPercentage(project.efficacyRate)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{formatPercentage(project.progressPercent)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${project.progressPercent}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Budget: {formatCurrency(project.budget)}</div>
                    <div className="text-blue-400">Patients: {project.patientsEnrolled}/{project.targetEnrollment}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">PI: {project.principalInvestigator}</div>
                    <div className="text-purple-400">Status: {project.regulatoryStatus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Synthetic Biology & Regulatory Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FlaskConical className="w-5 h-5 text-cyan-400 mr-2" />
              Synthetic Biology Programs
            </h3>
            <div className="space-y-4">
              {geneticData.syntheticBiology.map((organism, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{organism.organismName}</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-emerald-400">{organism.engineeringType}</div>
                    <div className="text-cyan-400">Product: {organism.targetProduct}</div>
                    <div className="text-green-400">Yield: {formatPercentage(organism.yieldOptimization)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Rate: {organism.productionRate}</div>
                    <div className="text-blue-400">Cost: {organism.costEffectiveness}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Scale: {organism.scalabilityScore.toFixed(1)}/100</div>
                    <div className="text-orange-400">Stage: {organism.commercializationStage}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Impact: {organism.environmentalImpact}</div>
                    <div className="text-indigo-400">Market: {organism.marketPotential}</div>
                    <div className="text-pink-400">Partnership: {organism.partnershipStatus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Lock className="w-5 h-5 text-blue-400 mr-2" />
              Regulatory Compliance Status
            </h3>
            <div className="space-y-4">
              {geneticData.regulatoryCompliance.map((regulation, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{regulation.regulation}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-xs">{formatPercentage(regulation.complianceScore)}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(regulation.riskLevel)} bg-slate-800/50`}>
                        {regulation.riskLevel}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Findings: {regulation.findings}</div>
                    <div className="text-yellow-400">Actions: {regulation.correctiveActions}</div>
                    <div className="text-blue-400">Violations: {regulation.violations}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Last Audit: {regulation.lastAudit}</div>
                    <div className="text-green-400">Next: {regulation.nextAudit}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Documentation: {regulation.documentation}</div>
                    <div className="text-indigo-400">Training: {regulation.training}</div>
                    <div className="text-orange-400">Recommendations: {regulation.recommendations}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BioSafety Monitoring & Quality Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-blue-400 mr-2" />
              BioSafety Monitoring
            </h3>
            <div className="space-y-4">
              {geneticData.bioSafetyMonitoring.map((safety, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{safety.safetyCategory}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(safety.riskLevel)} bg-slate-800/50`}>
                        {safety.riskLevel}
                      </span>
                      <span className="text-green-400 text-xs">{formatPercentage(safety.monitoringScore)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Inspection: {safety.lastInspection}</div>
                    <div className="text-red-400">Incidents: {safety.incidents}</div>
                  </div>
                  
                  <div className="text-xs space-y-1 mb-2">
                    <div className="text-slate-300">Finding: {safety.findings}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-blue-400">Next: {safety.nextInspection}</div>
                    <div className="text-purple-400">Mitigations: {safety.mitigations.length} active</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Quality Metrics Dashboard
            </h3>
            <div className="space-y-4">
              {geneticData.qualityMetrics.map((metric, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs ${getTrendColor(metric.trend)}`}>{metric.trend}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Current: {metric.currentValue.toFixed(2)}{metric.metric.includes('%') ? '%' : ''}</div>
                    <div className="text-yellow-400">Target: {metric.target.toFixed(2)}{metric.metric.includes('%') ? '%' : ''}</div>
                    <div className="text-blue-400">Samples: {formatNumber(metric.sampleSize)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">σ: {metric.standardDeviation.toFixed(2)}</div>
                    <div className="text-cyan-400">CI: {metric.confidenceInterval}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Last: {metric.lastMeasurement}</div>
                    <div className="text-indigo-400">Benchmark: {metric.benchmarkComparison}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Genetic Engineering Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {geneticData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Experiments: {metrics.experimentsCompleted}</div>
                  <div className="text-green-400">Success: {formatPercentage(metrics.editingSuccess)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">QC Tests: {formatNumber(metrics.qualityTests)}</div>
                  <div className="text-red-400">Safety Events: {metrics.safetyIncidents}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Compliance: {metrics.complianceChecks}</div>
                  <div className="text-yellow-400">Prototypes: {metrics.prototypesDeveloped}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-orange-400">Patents: {metrics.patentsFilings}</div>
                  <div className="text-indigo-400">Publications: {metrics.publicationsSubmitted}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Genetic Engineering Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Genetic Engineering System Alerts
          </h3>
          <div className="space-y-4">
            {geneticData.geneticAlerts.map((alert, index) => (
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
                  {alert.project && <div className="text-cyan-400">Project: {alert.project}</div>}
                  {alert.incident && <div className="text-red-400">Incident: {alert.incident}</div>}
                  {alert.finding && <div className="text-yellow-400">Finding: {alert.finding}</div>}
                  {alert.gap && <div className="text-orange-400">Gap: {alert.gap}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.personnelAffected && <div className="text-purple-400">Personnel: {alert.personnelAffected}</div>}
                  {alert.affectedPatients && <div className="text-blue-400">Patients: {alert.affectedPatients}</div>}
                  {alert.emergencyResponse && <div className="text-red-400">Response: {alert.emergencyResponse}</div>}
                  {alert.regulatoryNotification && <div className="text-orange-400">Regulatory: {alert.regulatoryNotification}</div>}
                  {alert.businessValue && <div className="text-green-400">Value: {alert.businessValue}</div>}
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