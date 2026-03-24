// Biotechnology & Life Sciences Intelligence Center - Biotech Research & Development Analytics
import { useState, useEffect } from 'react';
import { Activity, Eye, BarChart3, Zap, Lock, AlertTriangle, TrendingUp, Radio, Layers, Cpu, Users } from 'lucide-react';

export default function BiotechnologyLifeSciencesIntelligenceCenter() {
  const [biotechData, setBiotechData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    biotechOverview: {
      researchProjects: 45678,
      clinicalTrials: 12345,
      approvedDrugs: 8901,
      biotechCompanies: 23456,
      researchPapers: 156789,
      patents: 67890,
      globalFunding: 180.5,
      successRate: 12.8,
      developmentTime: 8.5,
      regulatoryApprovals: 94.2,
      marketValue: 4200.8,
      patientBeneficiaries: 250000000,
      therapeuticAreas: 45,
      biomarkers: 34567,
      cellTherapies: 2345,
      geneTherapies: 1234,
      vaccinePrograms: 567,
      antibodyDrugs: 4567,
      clinicalSites: 15678
    },
    drugDevelopment: [
      {
        drugName: 'Adalimumab Biosimilar',
        drugId: 'ADA-BIO-001',
        developer: 'Amgen Inc',
        therapeuticArea: 'AUTOIMMUNE DISORDERS',
        phase: 'PHASE III',
        indication: 'RHEUMATOID ARTHRITIS',
        mechanism: 'TNF-ALPHA INHIBITOR',
        status: 'ACTIVE',
        patientEnrollment: 2400,
        primaryEndpoint: 'ACR20 RESPONSE',
        efficacyRate: 78.5,
        safetyProfile: 'ACCEPTABLE',
        trialSites: 156,
        globalTrials: 'YES',
        estimatedCompletion: '2026-Q4',
        marketPotential: '12.8B USD',
        competitorDrugs: 'HUMIRA, SIMPONI',
        regulatoryPath: 'FDA BIOLOGICS',
        patentExpiry: '2029',
        manufacturingCost: '450 USD/DOSE',
        reimbursementStatus: 'LIKELY',
        fastTrack: 'NO'
      },
      {
        drugName: 'CAR-T Cell Therapy',
        drugId: 'CART-CD19-002',
        developer: 'Novartis Oncology',
        therapeuticArea: 'HEMATOLOGIC MALIGNANCIES',
        phase: 'PHASE II',
        indication: 'RELAPSED B-CELL LYMPHOMA',
        mechanism: 'CD19-TARGETED CAR-T',
        status: 'RECRUITING',
        patientEnrollment: 180,
        primaryEndpoint: 'COMPLETE RESPONSE RATE',
        efficacyRate: 85.2,
        safetyProfile: 'MANAGEABLE CRS',
        trialSites: 32,
        globalTrials: 'YES',
        estimatedCompletion: '2027-Q2',
        marketPotential: '8.5B USD',
        competitorDrugs: 'KYMRIAH, YESCARTA',
        regulatoryPath: 'FDA BIOLOGICS',
        patentExpiry: '2035',
        manufacturingCost: '450000 USD/TREATMENT',
        reimbursementStatus: 'PREMIUM',
        fastTrack: 'YES'
      },
      {
        drugName: 'mRNA Vaccine Platform',
        drugId: 'MRNA-VAC-003',
        developer: 'Moderna Therapeutics',
        therapeuticArea: 'INFECTIOUS DISEASES',
        phase: 'PHASE I',
        indication: 'RESPIRATORY SYNCYTIAL VIRUS',
        mechanism: 'MRNA IMMUNIZATION',
        status: 'DOSING',
        patientEnrollment: 120,
        primaryEndpoint: 'IMMUNOGENICITY',
        efficacyRate: 0,
        safetyProfile: 'MILD REACTOGENICITY',
        trialSites: 8,
        globalTrials: 'NO',
        estimatedCompletion: '2026-Q3',
        marketPotential: '15.2B USD',
        competitorDrugs: 'SYNAGIS, PREVNAR',
        regulatoryPath: 'FDA VACCINES',
        patentExpiry: '2040',
        manufacturingCost: '25 USD/DOSE',
        reimbursementStatus: 'STANDARD',
        fastTrack: 'YES'
      },
      {
        drugName: 'Gene Editing Therapy',
        drugId: 'CRISPR-SCDL-004',
        developer: 'CRISPR Therapeutics',
        therapeuticArea: 'GENETIC DISORDERS',
        phase: 'PHASE I/II',
        indication: 'SICKLE CELL DISEASE',
        mechanism: 'CRISPR-CAS9 BCL11A',
        status: 'ACTIVE',
        patientEnrollment: 45,
        primaryEndpoint: 'VASO-OCCLUSIVE CRISES',
        efficacyRate: 92.3,
        safetyProfile: 'FAVORABLE',
        trialSites: 12,
        globalTrials: 'YES',
        estimatedCompletion: '2027-Q4',
        marketPotential: '25.6B USD',
        competitorDrugs: 'HYDROXYUREA, VOXELOTOR',
        regulatoryPath: 'FDA RMAT',
        patentExpiry: '2045',
        manufacturingCost: '2100000 USD/TREATMENT',
        reimbursementStatus: 'ULTRA-ORPHAN',
        fastTrack: 'YES'
      }
    ],
    biotechCompanies: [
      {
        companyName: 'Moderna Inc',
        companyId: 'MRNA-NASDAQ',
        headquarters: 'Cambridge, Massachusetts',
        marketCap: 68.5,
        employees: 4200,
        focusArea: 'MRNA THERAPEUTICS',
        pipelineSize: 48,
        clinicalAssets: 24,
        approvedProducts: 3,
        revenue2025: 18.4,
        rdExpenditure: 3.8,
        partnerships: 'NIH, BARDA, GAVI',
        keyTechnology: 'LIPID NANOPARTICLES',
        competitiveAdvantage: 'PLATFORM SCALABILITY',
        marketPosition: 'MRNA LEADER',
        stockPerformance: 'VOLATILE',
        analystRating: 'BUY',
        nextMilestone: 'CMV VACCINE RESULTS',
        patentPortfolio: 2400,
        fdaApprovals: 'SPIKEVAX, SPIKEVAX BIVALENT',
        globalPresence: '25 COUNTRIES'
      },
      {
        companyName: 'Genentech Inc',
        companyId: 'DNA-ROCHE',
        headquarters: 'South San Francisco, CA',
        marketCap: 145.2,
        employees: 15800,
        focusArea: 'ONCOLOGY, IMMUNOLOGY',
        pipelineSize: 156,
        clinicalAssets: 89,
        approvedProducts: 32,
        revenue2025: 45.7,
        rdExpenditure: 12.3,
        partnerships: 'ROCHE, FOUNDATION MEDICINE',
        keyTechnology: 'MONOCLONAL ANTIBODIES',
        competitiveAdvantage: 'RESEARCH EXCELLENCE',
        marketPosition: 'BIOTECH PIONEER',
        stockPerformance: 'STABLE',
        analystRating: 'HOLD',
        nextMilestone: 'ALZHEIMER DRUG APPROVAL',
        patentPortfolio: 4500,
        fdaApprovals: 'HERCEPTIN, AVASTIN, RITUXAN',
        globalPresence: 'WORLDWIDE'
      },
      {
        companyName: 'CRISPR Therapeutics',
        companyId: 'CRSP-NASDAQ',
        headquarters: 'Zug, Switzerland',
        marketCap: 4.8,
        employees: 540,
        focusArea: 'GENE EDITING',
        pipelineSize: 12,
        clinicalAssets: 6,
        approvedProducts: 1,
        revenue2025: 0.45,
        rdExpenditure: 0.38,
        partnerships: 'VERTEX, BAYER',
        keyTechnology: 'CRISPR-CAS9',
        competitiveAdvantage: 'EDITING PLATFORM',
        marketPosition: 'GENE EDITING LEADER',
        stockPerformance: 'GROWTH',
        analystRating: 'BUY',
        nextMilestone: 'CASGEVY LAUNCH',
        patentPortfolio: 650,
        fdaApprovals: 'CASGEVY (CONDITIONAL)',
        globalPresence: '15 COUNTRIES'
      }
    ],
    therapeuticAreas: [
      {
        areaName: 'Oncology',
        areaId: 'ONCO-THER-001',
        marketSize: 285.7,
        growthRate: 8.4,
        activeDrugs: 2456,
        pipelineDrugs: 8901,
        keyTargets: 'PD-1, HER2, EGFR, BRAF',
        majorPlayers: 'ROCHE, BMS, MERCK',
        treatmentModalities: 'IMMUNO, TARGETED, ADC',
        patientPopulation: 19500000,
        unmetNeed: 'RESISTANCE, TOXICITY',
        emergingTechnologies: 'CAR-T, TCR-T, BISPECIFICS',
        regulatoryTrends: 'ACCELERATED APPROVAL',
        costOfCare: 'HIGH',
        reimbursementChallenges: 'VALUE-BASED',
        futureOutlook: 'PRECISION MEDICINE',
        biotechOpportunity: 'NOVEL TARGETS',
        clinicalTrials: 4567,
        successRate: 15.2,
        averageCost: '2.8B USD',
        timeToDevelopment: '12 YEARS'
      },
      {
        areaName: 'Rare Diseases',
        areaId: 'RARE-THER-002',
        marketSize: 175.3,
        growthRate: 12.1,
        activeDrugs: 567,
        pipelineDrugs: 2345,
        keyTargets: 'ENZYME REPLACEMENT, GENE',
        majorPlayers: 'ALEXION, BIOMARIN, SAREPTA',
        treatmentModalities: 'ERT, GENE THERAPY, ASO',
        patientPopulation: 420000000,
        unmetNeed: 'LIMITED TREATMENTS',
        emergingTechnologies: 'GENE EDITING, BASE EDITING',
        regulatoryTrends: 'ORPHAN DESIGNATION',
        costOfCare: 'ULTRA-HIGH',
        reimbursementChallenges: 'ACCESS BARRIERS',
        futureOutlook: 'PLATFORM APPROACHES',
        biotechOpportunity: 'HIGH UNMET NEED',
        clinicalTrials: 1234,
        successRate: 25.8,
        averageCost: '1.2B USD',
        timeToDevelopment: '8 YEARS'
      },
      {
        areaName: 'Autoimmune Disorders',
        areaId: 'AUTO-THER-003',
        marketSize: 158.9,
        growthRate: 6.7,
        activeDrugs: 1234,
        pipelineDrugs: 3456,
        keyTargets: 'TNF, IL-17, JAK, BTK',
        majorPlayers: 'ABBVIE, AMGEN, J&J',
        treatmentModalities: 'MABS, SMALL MOLECULES',
        patientPopulation: 125000000,
        unmetNeed: 'SAFETY, EFFICACY',
        emergingTechnologies: 'BISPECIFICS, PRECISION',
        regulatoryTrends: 'BIOSIMILARS',
        costOfCare: 'HIGH',
        reimbursementChallenges: 'STEP THERAPY',
        futureOutlook: 'PERSONALIZED TREATMENT',
        biotechOpportunity: 'NOVEL MECHANISMS',
        clinicalTrials: 2345,
        successRate: 18.5,
        averageCost: '1.8B USD',
        timeToDevelopment: '10 YEARS'
      }
    ],
    biotechResearch: [
      {
        researchProject: 'mRNA Vaccine Platform',
        projectId: 'MRNA-PLAT-001',
        institution: 'Moderna Inc',
        principalInvestigator: 'Dr. Melissa Moore',
        status: 'ACTIVE',
        fundingAgency: 'BARDA, NIH, CEPI',
        budgetMillion: 2500.0,
        timeline: '2020-2030',
        researchGoal: 'PLATFORM VACCINATION',
        approach: 'LIPID NANOPARTICLES',
        currentCapabilities: 'COVID, FLU, RSV, CMV',
        platformVaccines: 15,
        currentProgress: 85,
        majorMilestone: 'PANDEMIC PREPAREDNESS',
        recentBreakthrough: 'SELF-AMPLIFYING RNA',
        collaborations: 'NIH VRC, GAVI, WHO',
        publications: 245,
        patents: 890,
        clinicalPrograms: 12,
        regulatoryApprovals: 3,
        globalPartnerships: '25 COUNTRIES',
        nextPhase: 'UNIVERSAL VACCINES'
      },
      {
        researchProject: 'CRISPR Gene Editing',
        projectId: 'CRISPR-EDIT-002',
        institution: 'Broad Institute',
        principalInvestigator: 'Dr. Feng Zhang',
        status: 'ACTIVE',
        fundingAgency: 'NIH, NSF, HHMI',
        budgetMillion: 180.5,
        timeline: '2018-2028',
        researchGoal: 'THERAPEUTIC EDITING',
        approach: 'BASE EDITING, PRIME EDITING',
        currentCapabilities: 'IN-VIVO, EX-VIVO',
        editingTools: 8,
        currentProgress: 72,
        majorMilestone: 'IN-VIVO DELIVERY',
        recentBreakthrough: 'MINIATURIZED EDITORS',
        collaborations: 'CRISPR THERAPEUTICS, EDITAS',
        publications: 456,
        patents: 234,
        clinicalPrograms: 6,
        regulatoryApprovals: 1,
        globalPartnerships: 'GLOBAL ALLIANCE',
        nextPhase: 'EPIGENOME EDITING'
      }
    ],
    biotechAlerts: [
      {
        type: 'CRITICAL',
        category: 'Clinical Trial Failure',
        message: 'Phase III oncology drug fails primary endpoint - stock impact imminent',
        company: 'BioTech Pharmaceuticals',
        location: 'Global Multi-Center',
        trialName: 'STELLAR-301',
        drugName: 'Experimental PD-L1',
        indication: 'NON-SMALL CELL LUNG CANCER',
        patientCount: 890,
        primaryEndpoint: 'OVERALL SURVIVAL',
        hazardRatio: 0.95,
        pValue: 0.24,
        significance: 'NOT ACHIEVED',
        timestamp: '14:25',
        detectedBy: 'Data Safety Monitoring Board',
        recommendation: 'Immediate disclosure, strategic review required',
        stockImpact: 'MAJOR DECLINE EXPECTED',
        marketValue: '$2.8B AT RISK',
        nextSteps: 'REGULATORY CONSULTATION',
        patientSafety: 'NO SAFETY CONCERNS',
        continuationPlan: 'TRIAL TERMINATION',
        investorCall: 'SCHEDULED'
      },
      {
        type: 'HIGH',
        category: 'Regulatory Approval',
        message: 'FDA grants Breakthrough Therapy Designation for rare disease treatment',
        company: 'Gene Therapeutics Inc',
        location: 'Silver Spring, Maryland',
        designation: 'BREAKTHROUGH THERAPY',
        drugName: 'GT-101 Gene Therapy',
        indication: 'DUCHENNE MUSCULAR DYSTROPHY',
        patientBeneficiaries: 15000,
        clinicalData: 'FUNCTIONAL IMPROVEMENT',
        unmetNeed: 'SIGNIFICANT',
        acceleratedPath: 'PRIORITY REVIEW',
        timestamp: '13:45',
        detectedBy: 'FDA Communications',
        recommendation: 'Accelerate development timeline, prepare commercial strategy',
        marketOpportunity: '$5.2B PEAK SALES',
        competitiveAdvantage: 'FIRST-IN-CLASS',
        nextMilestone: 'PHASE III INITIATION',
        partnershipInterest: '8 INQUIRIES',
        stockImpact: 'POSITIVE RALLY',
        timelineAcceleration: '18 MONTHS'
      },
      {
        type: 'MEDIUM',
        category: 'Manufacturing Scale-up',
        message: 'CAR-T manufacturing facility experiences yield variability',
        company: 'Cellular Therapeutics Corp',
        location: 'Philadelphia, Pennsylvania',
        facility: 'CAR-T MANUFACTURING',
        product: 'CD19 CAR-T CELLS',
        yieldVariability: 35,
        targetYield: 85,
        actualYield: 55,
        impact: 'PATIENT TREATMENT DELAYS',
        timestamp: '12:30',
        detectedBy: 'Quality Control',
        recommendation: 'Process optimization, additional QC measures',
        affectedPatients: 24,
        treatmentDelay: '2-4 WEEKS',
        rootCause: 'DONOR VARIABILITY',
        correctionPlan: 'PROTOCOL REVISION',
        regulatoryNotification: 'FDA INFORMED',
        costImpact: '$1.2M ADDITIONAL',
        timelineImpact: 'MANAGEABLE'
      },
      {
        type: 'INFO',
        category: 'Scientific Breakthrough',
        message: 'Novel protein folding prediction AI achieves 95% accuracy for drug targets',
        institution: 'Stanford University',
        location: 'Stanford, California',
        achievement: 'PROTEIN FOLDING AI',
        accuracy: 95,
        targetProteins: 'GPCRS, KINASES',
        drugDiscoveryImpact: 'ACCELERATED DESIGN',
        significanceLevel: 'BREAKTHROUGH',
        timestamp: '11:15',
        detectedBy: 'Nature Publication',
        commercialImpact: 'DRUG DISCOVERY ACCELERATION',
        partnershipInterest: 'PHARMA COMPANIES',
        publicationVenue: 'NATURE BIOTECHNOLOGY',
        citationPotential: 'HIGH',
        industryAdoption: 'IMMEDIATE',
        competitiveImplication: 'PLATFORM ADVANTAGE',
        patentApplications: '12 FILED',
        licensingInquiries: '25+ COMPANIES'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        researchProjects: 45678,
        clinicalTrials: 12345,
        patientEnrollment: 2400,
        dataPoints: 156789,
        approvalRate: 12.8,
        fundingSecured: 180.5,
        publicationRate: 245,
        patentApplications: 890
      },
      {
        period: 'Last 24 Hours',
        researchProjects: 45234,
        clinicalTrials: 12298,
        patientEnrollment: 2378,
        dataPoints: 155234,
        approvalRate: 12.6,
        fundingSecured: 178.2,
        publicationRate: 243,
        patentApplications: 887
      },
      {
        period: 'Last 7 Days',
        researchProjects: 44987,
        clinicalTrials: 12156,
        patientEnrollment: 2298,
        dataPoints: 152346,
        approvalRate: 12.3,
        fundingSecured: 175.8,
        publicationRate: 238,
        patentApplications: 876
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBiotechData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        biotechOverview: {
          ...prev.biotechOverview,
          successRate: Math.max(10.0, Math.min(15.0, prev.biotechOverview.successRate + (Math.random() - 0.5) * 0.5)),
          regulatoryApprovals: Math.max(90.0, Math.min(98.0, prev.biotechOverview.regulatoryApprovals + (Math.random() - 0.5) * 1.0))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'RECRUITING': return 'text-blue-400 bg-blue-400/20';
      case 'DOSING': return 'text-yellow-400 bg-yellow-400/20';
      case 'COMPLETED': return 'text-purple-400 bg-purple-400/20';
      case 'SUSPENDED': return 'text-red-400 bg-red-400/20';
      case 'PHASE I': return 'text-cyan-400 bg-cyan-400/20';
      case 'PHASE II': return 'text-blue-400 bg-blue-400/20';
      case 'PHASE III': return 'text-green-400 bg-green-400/20';
      case 'PHASE I/II': return 'text-indigo-400 bg-indigo-400/20';
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
  const formatMoney = (amount) => `$${amount.toFixed(1)}B`;
  const formatYears = (years) => `${years.toFixed(1)} years`;

  return (
    <div className="h-full bg-gradient-to-br from-teal-900 via-slate-900 to-green-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-teal-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-teal-600 to-green-600 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Biotechnology & Life Sciences Intelligence Center</h1>
              <p className="text-teal-300">Biotech research & development analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-teal-400">{biotechData.currentTime}</div>
            <div className="text-teal-300">Biotech Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Biotechnology Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-teal-400 mr-2" />
                Projects
              </h3>
            </div>
            <div className="text-3xl font-bold text-teal-400">{formatNumber(biotechData.biotechOverview.researchProjects)}</div>
            <div className="text-teal-300 text-sm">{formatNumber(biotechData.biotechOverview.clinicalTrials)} Clinical</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Success
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(biotechData.biotechOverview.successRate)}</div>
            <div className="text-yellow-300 text-sm">Approval Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                Funding
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatMoney(biotechData.biotechOverview.globalFunding)}</div>
            <div className="text-green-300 text-sm">Billion USD</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lock className="w-5 h-5 text-purple-400 mr-2" />
                Approvals
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(biotechData.biotechOverview.regulatoryApprovals)}</div>
            <div className="text-purple-300 text-sm">Regulatory</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Patients
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(biotechData.biotechOverview.patientBeneficiaries)}</div>
            <div className="text-blue-300 text-sm">Beneficiaries</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-orange-400 mr-2" />
                Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatMoney(biotechData.biotechOverview.marketValue)}</div>
            <div className="text-orange-300 text-sm">Value</div>
          </div>
        </div>

        {/* Drug Development & Biotech Companies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Layers className="w-5 h-5 text-teal-400 mr-2" />
              Drug Development Pipeline
            </h3>
            <div className="space-y-4">
              {biotechData.drugDevelopment.map((drug, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{drug.drugName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(drug.phase)}`}>
                        {drug.phase}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(drug.status)}`}>
                        {drug.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{drug.developer}</div>
                    <div className="text-blue-400">{drug.therapeuticArea}</div>
                    <div className="text-green-400">{drug.drugId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Indication: {drug.indication}</div>
                    <div className="text-purple-400">Mechanism: {drug.mechanism}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Patients: {drug.patientEnrollment}</div>
                    <div className="text-pink-400">Sites: {drug.trialSites}</div>
                  </div>
                  
                  {drug.efficacyRate > 0 && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Efficacy Rate</span>
                        <span>{formatPercentage(drug.efficacyRate)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-teal-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${drug.efficacyRate}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Endpoint: {drug.primaryEndpoint}</div>
                    <div className="text-indigo-400">Safety: {drug.safetyProfile}</div>
                    <div className="text-cyan-400">Timeline: {drug.estimatedCompletion}</div>
                    <div className="text-green-400">Market: {drug.marketPotential}</div>
                    <div className="text-blue-400">Path: {drug.regulatoryPath}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-blue-400 mr-2" />
              Biotechnology Companies
            </h3>
            <div className="space-y-4">
              {biotechData.biotechCompanies.map((company, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{company.companyName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor('ACTIVE')}`}>
                        {company.analystRating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{company.headquarters}</div>
                    <div className="text-blue-400">{company.companyId}</div>
                    <div className="text-green-400">{formatMoney(company.marketCap)} Cap</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Focus: {company.focusArea}</div>
                    <div className="text-purple-400">Pipeline: {company.pipelineSize}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Employees: {formatNumber(company.employees)}</div>
                    <div className="text-pink-400">Clinical: {company.clinicalAssets}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Revenue: {formatMoney(company.revenue2025)}</div>
                    <div className="text-cyan-400">R&D: {formatMoney(company.rdExpenditure)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Technology: {company.keyTechnology}</div>
                    <div className="text-green-400">Position: {company.marketPosition}</div>
                    <div className="text-blue-400">Milestone: {company.nextMilestone}</div>
                    <div className="text-purple-400">Patents: {formatNumber(company.patentPortfolio)}</div>
                    <div className="text-yellow-400">Global: {company.globalPresence}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Therapeutic Areas & Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-cyan-400 mr-2" />
              Therapeutic Areas
            </h3>
            <div className="space-y-4">
              {biotechData.therapeuticAreas.map((area, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{area.areaName}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-xs">+{formatPercentage(area.growthRate)} Growth</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{area.areaId}</div>
                    <div className="text-blue-400">{formatMoney(area.marketSize)} Market</div>
                    <div className="text-green-400">{formatNumber(area.activeDrugs)} Drugs</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Pipeline: {formatNumber(area.pipelineDrugs)}</div>
                    <div className="text-purple-400">Patients: {formatNumber(area.patientPopulation)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Success Rate</span>
                      <span>{formatPercentage(area.successRate)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${area.successRate}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Targets: {area.keyTargets}</div>
                    <div className="text-indigo-400">Players: {area.majorPlayers}</div>
                    <div className="text-cyan-400">Modalities: {area.treatmentModalities}</div>
                    <div className="text-green-400">Unmet Need: {area.unmetNeed}</div>
                    <div className="text-blue-400">Outlook: {area.futureOutlook}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Biotechnology Research Programs
            </h3>
            <div className="space-y-4">
              {biotechData.biotechResearch.map((research, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{research.researchProject}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(research.status)}`}>
                        {research.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{research.institution}</div>
                    <div className="text-blue-400">{research.principalInvestigator}</div>
                    <div className="text-green-400">{research.projectId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Budget: ${research.budgetMillion}B</div>
                    <div className="text-purple-400">Timeline: {research.timeline}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Progress</span>
                      <span>{formatPercentage(research.currentProgress)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-green-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${research.currentProgress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Goal: {research.researchGoal}</div>
                    <div className="text-indigo-400">Approach: {research.approach}</div>
                    <div className="text-cyan-400">
                      {research.platformVaccines && `Vaccines: ${research.platformVaccines}`}
                      {research.editingTools && `Tools: ${research.editingTools}`}
                    </div>
                    <div className="text-green-400">Milestone: {research.majorMilestone}</div>
                    <div className="text-blue-400">Publications: {research.publications}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-teal-400 mr-2" />
            Biotechnology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {biotechData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Projects: {formatNumber(metrics.researchProjects)}</div>
                  <div className="text-green-400">Trials: {formatNumber(metrics.clinicalTrials)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Patients: {formatNumber(metrics.patientEnrollment)}</div>
                  <div className="text-yellow-400">Data Points: {formatNumber(metrics.dataPoints)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Approval: {formatPercentage(metrics.approvalRate)}</div>
                  <div className="text-orange-400">Funding: {formatMoney(metrics.fundingSecured)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Papers: {metrics.publicationRate}</div>
                  <div className="text-pink-400">Patents: {metrics.patentApplications}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Biotechnology System Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Biotechnology System Alerts
          </h3>
          <div className="space-y-4">
            {biotechData.biotechAlerts.map((alert, index) => (
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
                  {alert.company && <div className="text-slate-300">Company: {alert.company}</div>}
                  {alert.location && <div className="text-cyan-400">Location: {alert.location}</div>}
                  {alert.trialName && <div className="text-orange-400">Trial: {alert.trialName}</div>}
                  {alert.drugName && <div className="text-purple-400">Drug: {alert.drugName}</div>}
                  {alert.indication && <div className="text-yellow-400">Indication: {alert.indication}</div>}
                  {alert.patientCount && <div className="text-blue-400">Patients: {alert.patientCount}</div>}
                  {alert.designation && <div className="text-green-400">Designation: {alert.designation}</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.accuracy && <div className="text-blue-400">Accuracy: {alert.accuracy}%</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.stockImpact || alert.marketOpportunity || alert.drugDiscoveryImpact || alert.impact}
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