// Nanotechnology Intelligence Center - Nanoscale Engineering & Materials Analytics
import { useState, useEffect } from 'react';
import { Cpu, Layers, Activity, Eye, BarChart3, Settings, Lock, AlertTriangle, TrendingUp, Zap, Radio, Atom } from 'lucide-react';

export default function NanotechnologyIntelligenceCenter() {
  const [nanotechData, setNanotechData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    nanotechOverview: {
      fabricationFacilities: 234,
      operationalNodes: 45678,
      nanomaterials: 12567,
      researchLabs: 456,
      productionLines: 789,
      qualityControlStations: 1234,
      globalProduction: 94.3,
      yieldRate: 87.5,
      defectRate: 0.012,
      nodeSize: 2,
      throughput: 15000,
      cleanroomClass: 'ISO 1',
      equipmentUptime: 96.8,
      processStability: 99.2,
      materialPurity: 99.999,
      carbonNanotubes: 45000,
      grapheneSheets: 78000,
      quantumDots: 23400,
      nanoparticles: 156000,
      molecularAssembly: 12300
    },
    semiconductorFabs: [
      {
        facilityName: 'TSMC Fab 18',
        facilityId: 'TSMC-FAB18-N2',
        location: 'Hsinchu, Taiwan',
        company: 'Taiwan Semiconductor',
        status: 'OPERATIONAL',
        process: '2nm GAA',
        nodeSize: 2,
        waferSize: 300,
        monthlyCapacity: 150000,
        currentUtilization: 94.7,
        yieldRate: 89.3,
        defectDensity: 0.008,
        throughputWPH: 145,
        cleanroomClass: 'ISO 1',
        equipmentCount: 2300,
        maintenanceHours: 168,
        qualityScore: 98.7,
        energyEfficiency: 92.1,
        waterRecycling: 95.6,
        chemicalConsumption: 12500,
        wasteReduction: 87.3,
        automationLevel: 96.5,
        rampStatus: 'VOLUME PRODUCTION'
      },
      {
        facilityName: 'Samsung Foundry S5',
        facilityId: 'SEC-S5-GAA-3NM',
        location: 'Hwaseong, South Korea',
        company: 'Samsung Electronics',
        status: 'OPERATIONAL',
        process: '3nm GAA',
        nodeSize: 3,
        waferSize: 300,
        monthlyCapacity: 120000,
        currentUtilization: 91.2,
        yieldRate: 86.7,
        defectDensity: 0.012,
        throughputWPH: 132,
        cleanroomClass: 'ISO 1',
        equipmentCount: 1890,
        maintenanceHours: 192,
        qualityScore: 97.4,
        energyEfficiency: 89.8,
        waterRecycling: 93.2,
        chemicalConsumption: 15600,
        wasteReduction: 84.1,
        automationLevel: 94.8,
        rampStatus: 'VOLUME PRODUCTION'
      },
      {
        facilityName: 'Intel Fab 42',
        facilityId: 'INTEL-FAB42-18A',
        location: 'Chandler, Arizona',
        company: 'Intel Corporation',
        status: 'RAMP-UP',
        process: '18A FinFET',
        nodeSize: 1.8,
        waferSize: 300,
        monthlyCapacity: 80000,
        currentUtilization: 67.3,
        yieldRate: 78.9,
        defectDensity: 0.025,
        throughputWPH: 89,
        cleanroomClass: 'ISO 1',
        equipmentCount: 1567,
        maintenanceHours: 256,
        qualityScore: 94.2,
        energyEfficiency: 86.5,
        waterRecycling: 91.8,
        chemicalConsumption: 18900,
        wasteReduction: 79.6,
        automationLevel: 91.3,
        rampStatus: 'LEARNING PHASE'
      },
      {
        facilityName: 'GlobalFoundries Fab 1',
        facilityId: 'GF-FAB1-12LP',
        location: 'Dresden, Germany',
        company: 'GlobalFoundries',
        status: 'MAINTENANCE',
        process: '12nm FinFET',
        nodeSize: 12,
        waferSize: 300,
        monthlyCapacity: 45000,
        currentUtilization: 0.0,
        yieldRate: 0.0,
        defectDensity: 0.000,
        throughputWPH: 0,
        cleanroomClass: 'ISO 1',
        equipmentCount: 890,
        maintenanceHours: 720,
        qualityScore: 0.0,
        energyEfficiency: 0.0,
        waterRecycling: 0.0,
        chemicalConsumption: 0,
        wasteReduction: 0.0,
        automationLevel: 0.0,
        rampStatus: 'SCHEDULED MAINTENANCE'
      }
    ],
    nanomaterialProduction: [
      {
        materialName: 'Carbon Nanotubes',
        materialId: 'CNT-SWCNT-001',
        facility: 'Nanotech Materials Inc',
        location: 'Boston, Massachusetts',
        productionMethod: 'CVD SYNTHESIS',
        status: 'OPERATIONAL',
        diameter: 1.4,
        length: 1000,
        purity: 99.95,
        productionRate: 250,
        qualityGrade: 'PREMIUM',
        defectDensity: 0.005,
        electricalConductivity: 10000000,
        thermalConductivity: 6000,
        tensileStrength: 63000,
        applications: 'ELECTRONICS, COMPOSITES',
        marketDemand: 'HIGH',
        inventoryLevel: 15600,
        pricePerGram: 450,
        certifications: 'ISO 9001, RoHS',
        customerSectors: 'AEROSPACE, AUTOMOTIVE',
        researchPartnership: 'MIT, STANFORD'
      },
      {
        materialName: 'Graphene Sheets',
        materialId: 'GRS-CVD-MONO-001',
        facility: 'Graphene Technologies Ltd',
        location: 'Manchester, UK',
        productionMethod: 'CVD GROWTH',
        status: 'OPERATIONAL',
        layerCount: 1,
        crystallinity: 99.8,
        purity: 99.9,
        productionRate: 180,
        qualityGrade: 'RESEARCH',
        defectDensity: 0.002,
        electricalConductivity: 1000000,
        thermalConductivity: 5300,
        opticalTransmission: 97.7,
        applications: 'SENSORS, BATTERIES',
        marketDemand: 'GROWING',
        inventoryLevel: 8900,
        pricePerSquareCm: 25,
        certifications: 'CE MARKING',
        customerSectors: 'ENERGY, ELECTRONICS',
        researchPartnership: 'CAMBRIDGE, OXFORD'
      },
      {
        materialName: 'Quantum Dots',
        materialId: 'QD-CDSE-001',
        facility: 'Quantum Materials Corp',
        location: 'San Jose, California',
        productionMethod: 'COLLOIDAL SYNTHESIS',
        status: 'OPERATIONAL',
        coreSize: 4.2,
        shellThickness: 2.1,
        purity: 99.7,
        productionRate: 95,
        qualityGrade: 'DISPLAY',
        defectDensity: 0.008,
        quantumYield: 95.3,
        wavelengthPeak: 550,
        bandwidth: 25,
        applications: 'DISPLAYS, LIGHTING',
        marketDemand: 'VERY HIGH',
        inventoryLevel: 12300,
        pricePerGram: 2800,
        certifications: 'UL LISTED',
        customerSectors: 'DISPLAY, AUTOMOTIVE',
        researchPartnership: 'UC BERKELEY, CALTECH'
      }
    ],
    nanoApplications: [
      {
        applicationName: 'Nanoelectronics Processor',
        applicationId: 'NANO-PROC-2NM-001',
        developer: 'Advanced Chip Dynamics',
        technologyNode: '2nm',
        status: 'DEVELOPMENT',
        transistorCount: 150000000000,
        chipSize: 120,
        powerConsumption: 45,
        clockSpeed: 5200,
        performance: '15% IMPROVEMENT',
        manufacturingPartner: 'TSMC',
        designComplexity: 'EXTREME',
        aiAcceleration: 'INTEGRATED NPU',
        quantumElements: 'QUANTUM TUNNELING',
        thermalManagement: 'ADVANCED COOLING',
        marketSegment: 'HIGH PERFORMANCE',
        timeToMarket: '18 MONTHS',
        developmentCost: '2.8B',
        competitiveAdvantage: 'FIRST TO MARKET',
        intellectualProperty: '450 PATENTS'
      },
      {
        applicationName: 'Nanomedical Drug Delivery',
        applicationId: 'NANO-MED-LIPID-001',
        developer: 'NanoMed Therapeutics',
        deliveryMethod: 'LIPID NANOPARTICLES',
        status: 'CLINICAL TRIAL',
        particleSize: 80,
        drugLoading: 25.6,
        bioavailability: 87.3,
        targetingEfficiency: 94.2,
        sideEffectReduction: '65% IMPROVEMENT',
        therapeuticArea: 'CANCER TREATMENT',
        trialPhase: 'PHASE II',
        patientEnrollment: 245,
        safetyProfile: 'EXCELLENT',
        efficacyEndpoint: 'TUMOR REDUCTION',
        regulatoryStatus: 'FDA IND',
        commercialPartner: 'BIG PHARMA',
        marketPotential: '8.5B ANNUALLY',
        competitiveAdvantage: 'TARGETED DELIVERY',
        intellectualProperty: '78 PATENTS'
      },
      {
        applicationName: 'Nano Solar Cells',
        applicationId: 'NANO-SOLAR-PERO-001',
        developer: 'Solar Nano Innovations',
        cellTechnology: 'PEROVSKITE TANDEM',
        status: 'PILOT PRODUCTION',
        efficiency: 32.8,
        stability: '25 YEAR LIFETIME',
        costPerWatt: 0.18,
        manufacturingScale: 'GW CAPACITY',
        environmentalImpact: 'LOW CARBON',
        installationPartner: 'UTILITY SCALE',
        marketReadiness: '2 YEARS',
        productionCost: '45% REDUCTION',
        performanceAdvantage: 'HIGHEST EFFICIENCY',
        durabilityTesting: 'ACCELERATED AGING',
        certificationStatus: 'IEC 61215',
        deploymentRegions: 'GLOBAL',
        marketPotential: '125B BY 2030',
        competitiveAdvantage: 'COST EFFECTIVE',
        intellectualProperty: '234 PATENTS'
      }
    ],
    nanotechResearch: [
      {
        researchProject: 'Molecular Assembly',
        projectId: 'MOLEC-ASSEM-DNA-001',
        institution: 'MIT Nano Research',
        principalInvestigator: 'Dr. Angela Chen',
        status: 'ACTIVE',
        fundingAgency: 'NSF, DARPA',
        budgetMillion: 15.7,
        timeline: '2024-2027',
        researchGoal: 'PROGRAMMABLE ASSEMBLY',
        approach: 'DNA ORIGAMI',
        precisionLevel: 'ATOMIC',
        assemblySize: '100nm',
        currentProgress: 72,
        majorMilestone: 'COMPLEX 3D STRUCTURES',
        recentBreakthrough: 'SELF-HEALING ASSEMBLY',
        collaborations: 'HARVARD, CALTECH',
        publications: 18,
        patents: 9,
        phDStudents: 12,
        postDocs: 5,
        industryPartners: 'NANO ASSEMBLY CORP',
        nextPhase: 'MANUFACTURING SCALE'
      },
      {
        researchProject: 'Quantum Nanomaterials',
        projectId: 'QUANTUM-NANO-2D-001',
        institution: 'Stanford Quantum Center',
        principalInvestigator: 'Prof. David Kim',
        status: 'ACTIVE',
        fundingAgency: 'DOE, NSF',
        budgetMillion: 22.3,
        timeline: '2023-2026',
        researchGoal: 'QUANTUM PROPERTIES CONTROL',
        approach: '2D MATERIAL ENGINEERING',
        precisionLevel: 'SINGLE ATOM',
        quantumCoherence: '10 MICROSECONDS',
        currentProgress: 85,
        majorMilestone: 'ROOM TEMP COHERENCE',
        recentBreakthrough: 'TOPOLOGICAL STATES',
        collaborations: 'MIT, BERKELEY',
        publications: 31,
        patents: 15,
        phDStudents: 16,
        postDocs: 8,
        industryPartners: 'IBM QUANTUM, GOOGLE',
        nextPhase: 'DEVICE INTEGRATION'
      }
    ],
    nanotechAlerts: [
      {
        type: 'CRITICAL',
        category: 'Contamination Event',
        message: 'Particle contamination detected in cleanroom - Production line shutdown',
        facility: 'TSMC Fab 18 Cleanroom 3',
        location: 'Hsinchu, Taiwan',
        contaminationType: 'METALLIC PARTICLES',
        particleSize: 0.05,
        density: 150,
        impact: 'PRODUCTION HALT, WAFER SCRAPPING',
        severity: 'HIGH',
        timestamp: '13:02',
        detectedBy: 'Particle Counter Network',
        recommendation: 'Emergency cleaning protocol, source investigation',
        affectedProducts: '2NM PROCESSORS',
        estimatedLoss: '$12.5M',
        cleanupDuration: '48 HOURS',
        rootCauseAnalysis: 'EQUIPMENT WEAR',
        preventiveMeasures: 'FILTER UPGRADE',
        complianceImpact: 'ISO CERTIFICATION',
        customerNotification: 'IMMEDIATE',
        supplychainImpact: 'DELIVERY DELAYS'
      },
      {
        type: 'HIGH',
        category: 'Process Deviation',
        message: 'CVD growth parameters outside specification limits',
        facility: 'Graphene Technologies CVD Line 2',
        location: 'Manchester, UK',
        processType: 'GRAPHENE CVD GROWTH',
        deviationParameter: 'TEMPERATURE',
        targetValue: 1050,
        actualValue: 1073,
        tolerance: 10,
        impact: 'QUALITY DEGRADATION',
        severity: 'MODERATE',
        timestamp: '12:45',
        detectedBy: 'Process Control System',
        recommendation: 'Temperature recalibration, process adjustment',
        affectedBatches: 12,
        qualityImpact: '5% YIELD LOSS',
        correctionTime: '2 HOURS',
        rootCauseAnalysis: 'THERMOCOUPLE DRIFT',
        preventiveMeasures: 'SENSOR REPLACEMENT',
        processStability: 'MONITORING',
        customerImpact: 'MINIMAL',
        certificationStatus: 'MAINTAINED'
      },
      {
        type: 'MEDIUM',
        category: 'Equipment Maintenance',
        message: 'Ion beam etcher requires preventive maintenance',
        facility: 'Intel Fab 42 Etch Bay 5',
        location: 'Chandler, Arizona',
        equipmentType: 'ION BEAM ETCHER',
        maintenanceType: 'PREVENTIVE',
        hoursOperation: 2856,
        scheduledInterval: 3000,
        impact: 'SCHEDULE OPTIMIZATION',
        severity: 'LOW',
        timestamp: '11:30',
        detectedBy: 'Predictive Maintenance AI',
        recommendation: 'Schedule maintenance during next planned downtime',
        downtimeWindow: 'WEEKEND SHIFT',
        partsRequired: 'ION SOURCE',
        maintenanceDuration: '8 HOURS',
        performanceImpact: 'NONE',
        costOptimization: 'PLANNED',
        sparesInventory: 'AVAILABLE',
        technicianSchedule: 'CONFIRMED',
        qualityValidation: 'POST-MAINTENANCE'
      },
      {
        type: 'INFO',
        category: 'Research Breakthrough',
        message: 'Room temperature quantum coherence achieved in 2D materials',
        facility: 'Stanford Quantum Nanomaterials Lab',
        location: 'Stanford, California',
        achievementType: 'QUANTUM COHERENCE',
        coherenceTime: '45 MICROSECONDS',
        temperature: '295 K',
        significance: 'WORLD RECORD',
        timestamp: '09:15',
        detectedBy: 'Quantum Measurement System',
        researchImpact: 'QUANTUM COMPUTING BREAKTHROUGH',
        materialType: 'ENGINEERED 2D HETEROSTRUCTURE',
        collaborations: 'MIT, IBM QUANTUM',
        publicationStatus: 'NATURE PHYSICS SUBMITTED',
        patentFiling: '3 PATENTS SUBMITTED',
        industrialInterest: 'HIGH',
        fundingImplication: 'ADDITIONAL $15M',
        timelineAcceleration: '2 YEARS AHEAD',
        commercialPotential: 'REVOLUTIONARY'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        facilitiesOperational: 234,
        waferThroughput: 2340,
        yieldRate: 87.2,
        defectDensity: 0.013,
        equipmentUptime: 96.5,
        qualityScore: 98.1,
        energyEfficiency: 91.7,
        productionVolume: 125000
      },
      {
        period: 'Last 24 Hours',
        facilitiesOperational: 233,
        waferThroughput: 54320,
        yieldRate: 86.8,
        defectDensity: 0.014,
        equipmentUptime: 95.9,
        qualityScore: 97.8,
        energyEfficiency: 91.3,
        productionVolume: 2890000
      },
      {
        period: 'Last 7 Days',
        facilitiesOperational: 231,
        waferThroughput: 376890,
        yieldRate: 86.2,
        defectDensity: 0.015,
        equipmentUptime: 95.2,
        qualityScore: 97.3,
        energyEfficiency: 90.8,
        productionVolume: 19670000
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNanotechData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        nanotechOverview: {
          ...prev.nanotechOverview,
          yieldRate: Math.max(85.0, Math.min(90.0, prev.nanotechOverview.yieldRate + (Math.random() - 0.5) * 1.0)),
          defectRate: Math.max(0.008, Math.min(0.020, prev.nanotechOverview.defectRate + (Math.random() - 0.5) * 0.002))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'RAMP-UP': return 'text-yellow-400 bg-yellow-400/20';
      case 'MAINTENANCE': return 'text-orange-400 bg-orange-400/20';
      case 'OFFLINE': return 'text-red-400 bg-red-400/20';
      case 'DEVELOPMENT': return 'text-purple-400 bg-purple-400/20';
      case 'CLINICAL TRIAL': return 'text-blue-400 bg-blue-400/20';
      case 'PILOT PRODUCTION': return 'text-cyan-400 bg-cyan-400/20';
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'VOLUME PRODUCTION': return 'text-green-400 bg-green-400/20';
      case 'LEARNING PHASE': return 'text-yellow-400 bg-yellow-400/20';
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
  const formatNode = (node) => `${node}nm`;
  const formatPower = (power) => `${power}W`;

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Nanotechnology Intelligence Center</h1>
              <p className="text-indigo-300">Nanoscale engineering & materials analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{nanotechData.currentTime}</div>
            <div className="text-indigo-300">Nanotech Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Nanotechnology Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-indigo-400 mr-2" />
                Facilities
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{nanotechData.nanotechOverview.fabricationFacilities}</div>
            <div className="text-indigo-300 text-sm">{formatNumber(nanotechData.nanotechOverview.operationalNodes)} Nodes</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Atom className="w-5 h-5 text-purple-400 mr-2" />
                Node Size
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNode(nanotechData.nanotechOverview.nodeSize)}</div>
            <div className="text-purple-300 text-sm">Leading Edge</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Yield
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(nanotechData.nanotechOverview.yieldRate)}</div>
            <div className="text-green-300 text-sm">Production</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-cyan-400 mr-2" />
                Defects
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(nanotechData.nanotechOverview.defectRate)}</div>
            <div className="text-cyan-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Throughput
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(nanotechData.nanotechOverview.throughput)}</div>
            <div className="text-yellow-300 text-sm">WPH</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Lock className="w-5 h-5 text-orange-400 mr-2" />
                Materials
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(nanotechData.nanotechOverview.nanomaterials)}</div>
            <div className="text-orange-300 text-sm">Types</div>
          </div>
        </div>

        {/* Semiconductor Fabs & Nanomaterial Production */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-indigo-400 mr-2" />
              Semiconductor Fabrication Facilities
            </h3>
            <div className="space-y-4">
              {nanotechData.semiconductorFabs.map((fab, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{fab.facilityName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(fab.status)}`}>
                        {fab.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{fab.location}</div>
                    <div className="text-blue-400">{fab.company}</div>
                    <div className="text-green-400">{fab.facilityId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Node: {formatNode(fab.nodeSize)}</div>
                    <div className="text-purple-400">Process: {fab.process}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Yield: {formatPercentage(fab.yieldRate)}</div>
                    <div className="text-pink-400">Capacity: {formatNumber(fab.monthlyCapacity)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Utilization</span>
                      <span>{formatPercentage(fab.currentUtilization)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-indigo-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${fab.currentUtilization}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">WPH: {fab.throughputWPH}</div>
                    <div className="text-indigo-400">Defects: {fab.defectDensity}/cm²</div>
                    <div className="text-cyan-400">Equipment: {formatNumber(fab.equipmentCount)}</div>
                    <div className="text-green-400">Quality: {formatPercentage(fab.qualityScore)}</div>
                    <div className="text-blue-400">Status: {fab.rampStatus}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Atom className="w-5 h-5 text-purple-400 mr-2" />
              Nanomaterial Production Lines
            </h3>
            <div className="space-y-4">
              {nanotechData.nanomaterialProduction.map((material, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{material.materialName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(material.status)}`}>
                        {material.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{material.location}</div>
                    <div className="text-blue-400">{material.facility}</div>
                    <div className="text-green-400">{material.materialId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Method: {material.productionMethod}</div>
                    <div className="text-purple-400">Purity: {formatPercentage(material.purity)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Rate: {material.productionRate} g/day</div>
                    <div className="text-pink-400">Grade: {material.qualityGrade}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Apps: {material.applications}</div>
                    <div className="text-indigo-400">Demand: {material.marketDemand}</div>
                    <div className="text-cyan-400">Inventory: {formatNumber(material.inventoryLevel)} g</div>
                    <div className="text-green-400">Price: ${material.pricePerGram || material.pricePerSquareCm}/unit</div>
                    <div className="text-blue-400">Partners: {material.researchPartnership}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Nano Applications & Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-blue-400 mr-2" />
              Nanotechnology Applications
            </h3>
            <div className="space-y-4">
              {nanotechData.nanoApplications.map((app, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{app.applicationName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{app.developer}</div>
                    <div className="text-blue-400">{app.technologyNode || app.deliveryMethod || app.cellTechnology}</div>
                    <div className="text-green-400">{app.applicationId}</div>
                  </div>
                  
                  {app.transistorCount && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Transistors: {formatNumber(app.transistorCount)}</div>
                      <div className="text-purple-400">Power: {formatPower(app.powerConsumption)}</div>
                    </div>
                  )}
                  
                  {app.particleSize && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-orange-400">Size: {app.particleSize}nm</div>
                      <div className="text-pink-400">Loading: {app.drugLoading}%</div>
                    </div>
                  )}
                  
                  {app.efficiency && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Efficiency: {app.efficiency}%</div>
                      <div className="text-cyan-400">Cost: ${app.costPerWatt}/W</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {app.performance && `Performance: ${app.performance}`}
                      {app.bioavailability && `Bioavailability: ${app.bioavailability}%`}
                      {app.stability && `Stability: ${app.stability}`}
                    </div>
                    <div className="text-indigo-400">
                      {app.marketSegment && `Market: ${app.marketSegment}`}
                      {app.therapeuticArea && `Area: ${app.therapeuticArea}`}
                      {app.marketReadiness && `Ready: ${app.marketReadiness}`}
                    </div>
                    <div className="text-cyan-400">
                      {app.timeToMarket && `TTM: ${app.timeToMarket}`}
                      {app.trialPhase && `Trial: ${app.trialPhase}`}
                      {app.marketPotential && `Potential: $${app.marketPotential}`}
                    </div>
                    <div className="text-green-400">Advantage: {app.competitiveAdvantage}</div>
                    <div className="text-blue-400">IP: {app.intellectualProperty}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Nanotechnology Research Programs
            </h3>
            <div className="space-y-4">
              {nanotechData.nanotechResearch.map((research, index) => (
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
                    <div className="text-yellow-400">Budget: ${research.budgetMillion}M</div>
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
                    <div className="text-cyan-400">Precision: {research.precisionLevel}</div>
                    <div className="text-green-400">Milestone: {research.majorMilestone}</div>
                    <div className="text-blue-400">Publications: {research.publications}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-indigo-400 mr-2" />
            Nanotechnology Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {nanotechData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Facilities: {metrics.facilitiesOperational}</div>
                  <div className="text-green-400">Wafers: {formatNumber(metrics.waferThroughput)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Yield: {formatPercentage(metrics.yieldRate)}</div>
                  <div className="text-yellow-400">Defects: {metrics.defectDensity}/cm²</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Uptime: {formatPercentage(metrics.equipmentUptime)}</div>
                  <div className="text-orange-400">Quality: {formatPercentage(metrics.qualityScore)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Energy: {formatPercentage(metrics.energyEfficiency)}</div>
                  <div className="text-pink-400">Volume: {formatNumber(metrics.productionVolume)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nanotechnology Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Nanotechnology System Alerts
          </h3>
          <div className="space-y-4">
            {nanotechData.nanotechAlerts.map((alert, index) => (
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
                  {alert.location && <div className="text-cyan-400">Location: {alert.location}</div>}
                  {alert.contaminationType && <div className="text-orange-400">Type: {alert.contaminationType}</div>}
                  {alert.particleSize && <div className="text-red-400">Size: {alert.particleSize}μm</div>}
                  {alert.deviationParameter && <div className="text-purple-400">Parameter: {alert.deviationParameter}</div>}
                  {alert.equipmentType && <div className="text-yellow-400">Equipment: {alert.equipmentType}</div>}
                  {alert.achievementType && <div className="text-green-400">Achievement: {alert.achievementType}</div>}
                  {alert.coherenceTime && <div className="text-blue-400">Coherence: {alert.coherenceTime}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact || alert.researchImpact}
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