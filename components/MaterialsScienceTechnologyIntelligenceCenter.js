// Materials Science Technology Intelligence Center - Advanced Materials & Composites Analytics
import { useState, useEffect } from 'react';
import { Layers, Settings, Activity, Eye, BarChart3, Zap, Lock, AlertTriangle, TrendingUp, Radio, Atom } from 'lucide-react';

export default function MaterialsScienceTechnologyIntelligenceCenter() {
  const [materialsData, setMaterialsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    materialsOverview: {
      materialTypes: 45678,
      compositeMaterials: 23456,
      smartMaterials: 12345,
      biomaterials: 8901,
      nanomaterials: 34567,
      supermaterials: 6789,
      globalProduction: 93.8,
      qualityIndex: 96.2,
      performanceRatio: 1.25,
      strengthToWeight: 450,
      thermalConductivity: 180,
      electricalConductivity: 5900,
      corrosionResistance: 98.7,
      durabilityFactor: 94.5,
      recyclingRate: 76.3,
      costEfficiency: 87.2,
      researchLabs: 2345,
      testingFacilities: 4567,
      productionLines: 7890,
      characterizationTools: 12345
    },
    advancedMaterials: [
      {
        materialName: 'Ultra-High Strength Steel',
        materialId: 'UHSS-1800-MPa-001',
        category: 'METALLIC ALLOY',
        manufacturer: 'Nippon Steel Corporation',
        location: 'Kashima, Japan',
        status: 'PRODUCTION',
        tensileStrength: 1800,
        yieldStrength: 1500,
        elongation: 8.5,
        density: 7.85,
        youngsModulus: 210,
        hardness: 520,
        fatigueLimit: 900,
        thermalConductivity: 46,
        electricalResistivity: 0.17,
        corrosionRate: 0.001,
        costPerKg: 4.50,
        productionVolume: 125000,
        qualityGrade: 'AUTOMOTIVE',
        applications: 'CHASSIS, SAFETY STRUCTURES',
        certifications: 'ISO 9001, TS 16949',
        environmentalImpact: 'LOW CARBON',
        recyclability: 'FULLY RECYCLABLE'
      },
      {
        materialName: 'Carbon Fiber Reinforced Polymer',
        materialId: 'CFRP-T800-001',
        category: 'COMPOSITE',
        manufacturer: 'Toray Industries',
        location: 'Ehime, Japan',
        status: 'PRODUCTION',
        tensileStrength: 5490,
        yieldStrength: 5490,
        elongation: 1.8,
        density: 1.80,
        youngsModulus: 294,
        hardness: 0,
        fatigueLimit: 2745,
        thermalConductivity: 7.0,
        electricalResistivity: 1.6e-5,
        corrosionRate: 0.0,
        costPerKg: 45.00,
        productionVolume: 25000,
        qualityGrade: 'AEROSPACE',
        applications: 'AIRCRAFT STRUCTURES, SATELLITES',
        certifications: 'AS9100, FAA APPROVED',
        environmentalImpact: 'ENERGY INTENSIVE',
        recyclability: 'THERMAL RECYCLING'
      },
      {
        materialName: 'Graphene Enhanced Polymer',
        materialId: 'GEP-MULTI-001',
        category: 'NANOCOMPOSITE',
        manufacturer: 'Graphenea SA',
        location: 'San Sebastian, Spain',
        status: 'PILOT',
        tensileStrength: 120,
        yieldStrength: 85,
        elongation: 15.0,
        density: 1.25,
        youngsModulus: 12,
        hardness: 85,
        fatigueLimit: 60,
        thermalConductivity: 200,
        electricalResistivity: 1.0e-8,
        corrosionRate: 0.0,
        costPerKg: 1250.00,
        productionVolume: 150,
        qualityGrade: 'RESEARCH',
        applications: 'ELECTRONICS, SENSORS',
        certifications: 'RoHS COMPLIANT',
        environmentalImpact: 'SUSTAINABLE',
        recyclability: 'BIODEGRADABLE'
      },
      {
        materialName: 'Shape Memory Alloy',
        materialId: 'SMA-NITI-001',
        category: 'SMART MATERIAL',
        manufacturer: 'Johnson Matthey',
        location: 'West Chester, Pennsylvania',
        status: 'OPERATIONAL',
        tensileStrength: 1200,
        yieldStrength: 800,
        elongation: 6.0,
        density: 6.45,
        youngsModulus: 83,
        hardness: 350,
        fatigueLimit: 600,
        thermalConductivity: 18,
        electricalResistivity: 1.0e-6,
        corrosionRate: 0.002,
        costPerKg: 85.00,
        productionVolume: 8500,
        qualityGrade: 'MEDICAL',
        applications: 'STENTS, ACTUATORS',
        certifications: 'FDA APPROVED, ISO 13485',
        environmentalImpact: 'BIOCOMPATIBLE',
        recyclability: 'REUSABLE'
      }
    ],
    materialsCharacterization: [
      {
        testName: 'Tensile Testing',
        testId: 'ASTM-D638-POLYMER-001',
        facility: 'Materials Testing Institute',
        location: 'Stuttgart, Germany',
        standard: 'ASTM D638',
        status: 'ACTIVE',
        testType: 'MECHANICAL',
        sampleCount: 1250,
        testDuration: 15,
        accuracy: 99.7,
        precision: 0.1,
        temperature: 23,
        humidity: 50,
        strainRate: 5.0,
        maximumLoad: 50000,
        dataPoints: 10000,
        automationLevel: 95,
        resultReporting: 'REAL-TIME',
        qualityAssurance: 'ISO 17025',
        calibrationDate: '2026-03-15',
        nextMaintenance: '2026-04-15'
      },
      {
        testName: 'Thermal Analysis',
        testId: 'DSC-TGA-COMBO-001',
        facility: 'Advanced Characterization Lab',
        location: 'Cambridge, Massachusetts',
        standard: 'ASTM E1131',
        status: 'OPERATIONAL',
        testType: 'THERMAL',
        sampleCount: 850,
        testDuration: 45,
        accuracy: 99.9,
        precision: 0.01,
        temperature: 25,
        atmosphereControl: 'NITROGEN',
        heatingRate: 10.0,
        temperatureRange: '25-600°C',
        dataPoints: 60000,
        automationLevel: 98,
        resultReporting: 'AUTOMATED',
        qualityAssurance: 'NIST TRACEABLE',
        calibrationDate: '2026-03-10',
        nextMaintenance: '2026-06-10'
      },
      {
        testName: 'X-Ray Diffraction',
        testId: 'XRD-POWDER-001',
        facility: 'Crystallography Research Center',
        location: 'Berkeley, California',
        standard: 'ASTM D934',
        status: 'OPERATIONAL',
        testType: 'STRUCTURAL',
        sampleCount: 450,
        testDuration: 120,
        accuracy: 99.8,
        precision: 0.02,
        temperature: 25,
        xraySource: 'CU K-ALPHA',
        wavelength: 1.5406,
        detectorType: 'AREA DETECTOR',
        dataPoints: 4000,
        automationLevel: 90,
        resultReporting: 'PHASE ANALYSIS',
        qualityAssurance: 'ICDD CERTIFIED',
        calibrationDate: '2026-03-01',
        nextMaintenance: '2026-05-01'
      }
    ],
    materialsApplications: [
      {
        applicationName: 'Aerospace Composite Structures',
        applicationId: 'AERO-CFRP-WING-001',
        sector: 'AEROSPACE',
        developer: 'Airbus Defence & Space',
        materialUsed: 'CARBON FIBER COMPOSITE',
        status: 'OPERATIONAL',
        weightReduction: 35,
        strengthImprovement: 200,
        fuelSavings: 12,
        lifespanYears: 30,
        operatingTemperature: '- 55 to 180°C',
        environmentalResistance: 'UV, MOISTURE, SALT',
        certificationLevel: 'FAA CERTIFIED',
        productionVolume: 15000,
        marketValue: '2.3B USD',
        competitiveAdvantage: 'WEIGHT OPTIMIZATION',
        customerSatisfaction: 98.5,
        maintenanceReduction: 45,
        failureRate: 0.001,
        recyclingPotential: 'ENERGY RECOVERY'
      },
      {
        applicationName: 'Medical Implant Devices',
        applicationId: 'MED-TITANIUM-HIP-001',
        sector: 'HEALTHCARE',
        developer: 'Zimmer Biomet',
        materialUsed: 'TITANIUM ALLOY',
        status: 'CLINICAL',
        biocompatibility: 99.9,
        corrosionResistance: 99.8,
        osseointegration: 95,
        lifespanYears: 25,
        operatingTemperature: '37°C BODY',
        environmentalResistance: 'BODILY FLUIDS',
        certificationLevel: 'FDA APPROVED',
        productionVolume: 85000,
        marketValue: '1.8B USD',
        competitiveAdvantage: 'LONGEVITY',
        customerSatisfaction: 97.8,
        revisionRate: 2.1,
        failureRate: 0.05,
        recyclingPotential: 'FULL RECOVERY'
      },
      {
        applicationName: 'Energy Storage Systems',
        applicationId: 'ENERGY-LICOO2-BATT-001',
        sector: 'ENERGY',
        developer: 'CATL Battery Technology',
        materialUsed: 'LITHIUM COBALT OXIDE',
        status: 'PRODUCTION',
        energyDensity: 250,
        powerDensity: 1800,
        cycleLife: 3000,
        lifespanYears: 10,
        operatingTemperature: '-20 to 60°C',
        environmentalResistance: 'THERMAL CYCLING',
        certificationLevel: 'UL LISTED',
        productionVolume: 2500000,
        marketValue: '45B USD',
        competitiveAdvantage: 'ENERGY DENSITY',
        customerSatisfaction: 94.2,
        capacityRetention: 80,
        failureRate: 0.1,
        recyclingPotential: 'MATERIAL RECOVERY'
      }
    ],
    materialsResearch: [
      {
        researchProject: 'Self-Healing Materials',
        projectId: 'SELF-HEAL-POLYMER-001',
        institution: 'University of Illinois',
        principalInvestigator: 'Prof. Nancy Sottos',
        status: 'ACTIVE',
        fundingAgency: 'NSF, DARPA',
        budgetMillion: 8.5,
        timeline: '2024-2027',
        researchGoal: 'AUTONOMOUS REPAIR',
        approach: 'MICROCAPSULE EMBEDDING',
        healingEfficiency: 85,
        cycleLimit: 10,
        currentProgress: 62,
        majorMilestone: 'MULTIPLE HEALING CYCLES',
        recentBreakthrough: 'ROOM TEMPERATURE HEALING',
        collaborations: 'BOEING, 3M',
        publications: 28,
        patents: 12,
        phDStudents: 8,
        postDocs: 4,
        industryPartners: 'LOCKHEED MARTIN',
        nextPhase: 'FIELD TESTING'
      },
      {
        researchProject: 'Ultra-Lightweight Metals',
        projectId: 'ULTRA-LIGHT-MG-001',
        institution: 'MIT Materials Research',
        principalInvestigator: 'Prof. Christopher Schuh',
        status: 'ACTIVE',
        fundingAgency: 'DOE, NSF',
        budgetMillion: 15.2,
        timeline: '2023-2026',
        researchGoal: 'WEIGHT REDUCTION',
        approach: 'NANOSTRUCTURE CONTROL',
        densityReduction: 60,
        strengthMaintenance: 95,
        currentProgress: 78,
        majorMilestone: 'INDUSTRIAL SCALABILITY',
        recentBreakthrough: 'GRAIN REFINEMENT',
        collaborations: 'ALCOA, GENERAL MOTORS',
        publications: 35,
        patents: 18,
        phDStudents: 12,
        postDocs: 6,
        industryPartners: 'FORD MOTOR COMPANY',
        nextPhase: 'PILOT PRODUCTION'
      }
    ],
    materialsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Quality Control Failure',
        message: 'Batch contamination detected in carbon fiber production - Immediate quarantine required',
        facility: 'Toray Carbon Fiber Plant',
        location: 'Ehime, Japan',
        materialType: 'CARBON FIBER T800',
        contaminationSource: 'METALLIC PARTICLES',
        batchSize: 5000,
        impact: 'AEROSPACE DELIVERY DELAY',
        severity: 'HIGH',
        timestamp: '13:18',
        detectedBy: 'Quality Control System',
        recommendation: 'Quarantine affected batches, investigate contamination source',
        affectedCustomers: 'AIRBUS, BOEING',
        estimatedLoss: '$2.8M',
        productionHalt: '24 HOURS',
        rootCauseAnalysis: 'FILTER FAILURE',
        preventiveMeasures: 'ENHANCED FILTRATION',
        regulatoryNotification: 'FAA INFORMED',
        customerNotification: 'IMMEDIATE',
        replacementTimeline: '72 HOURS'
      },
      {
        type: 'HIGH',
        category: 'Material Performance Degradation',
        message: 'Shape memory alloy showing reduced recovery efficiency',
        facility: 'Johnson Matthey Medical Materials',
        location: 'West Chester, Pennsylvania',
        materialType: 'NITINOL SMA',
        performanceMetric: 'SHAPE RECOVERY',
        degradationRate: 15,
        impact: 'MEDICAL DEVICE RELIABILITY',
        severity: 'MODERATE',
        timestamp: '12:45',
        detectedBy: 'Performance Testing',
        recommendation: 'Adjust heat treatment parameters, material reformulation',
        affectedProducts: 'CARDIAC STENTS',
        qualityImpact: 'SPECIFICATION DEVIATION',
        correctionTime: '48 HOURS',
        rootCauseAnalysis: 'THERMAL CYCLING',
        preventiveMeasures: 'PROCESS OPTIMIZATION',
        regulatoryImpact: 'FDA NOTIFICATION',
        customerImpact: 'DELIVERY DELAY',
        alternativeMaterials: 'AVAILABLE'
      },
      {
        type: 'MEDIUM',
        category: 'Equipment Maintenance',
        message: 'XRD diffractometer requires calibration - Accuracy drift detected',
        facility: 'Advanced Characterization Lab',
        location: 'Cambridge, Massachusetts',
        equipmentType: 'X-RAY DIFFRACTOMETER',
        maintenanceType: 'CALIBRATION',
        accuracyDrift: 0.05,
        impact: 'MEASUREMENT UNCERTAINTY',
        severity: 'LOW',
        timestamp: '11:30',
        detectedBy: 'Quality Assurance Check',
        recommendation: 'Schedule immediate calibration with certified standards',
        testingBacklog: '12 SAMPLES',
        downtimeEstimate: '4 HOURS',
        maintenanceCost: '$2,500',
        serviceProvider: 'BRUKER SUPPORT',
        qualityImpact: 'MEASUREMENT HOLD',
        customerImpact: 'MINIMAL',
        backupEquipment: 'AVAILABLE',
        calibrationFrequency: 'QUARTERLY'
      },
      {
        type: 'INFO',
        category: 'Research Breakthrough',
        message: 'Self-healing polymer achieves 95% healing efficiency at room temperature',
        facility: 'University of Illinois Materials Lab',
        location: 'Urbana-Champaign, Illinois',
        achievement: 'HEALING EFFICIENCY',
        performanceImprovement: '95% RECOVERY',
        temperatureCondition: 'ROOM TEMPERATURE',
        significance: 'COMMERCIAL VIABILITY',
        timestamp: '09:45',
        detectedBy: 'Research Team',
        commercialImpact: 'AEROSPACE APPLICATIONS',
        patentStatus: '3 APPLICATIONS FILED',
        industryInterest: 'BOEING, LOCKHEED',
        publicationPlan: 'NATURE MATERIALS',
        fundingIncrease: '$5M ADDITIONAL',
        timeToMarket: '3-5 YEARS',
        marketPotential: '$12B BY 2030',
        collaborationRequests: '8 COMPANIES',
        technologyReadiness: 'TRL 5'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        materialsProduced: 45678,
        qualityTests: 12345,
        qualityIndex: 96.2,
        productionEfficiency: 93.8,
        defectRate: 0.25,
        recyclingRate: 76.3,
        energyConsumption: 2340,
        costEfficiency: 87.2
      },
      {
        period: 'Last 24 Hours',
        materialsProduced: 987654,
        qualityTests: 234567,
        qualityIndex: 95.8,
        productionEfficiency: 93.2,
        defectRate: 0.28,
        recyclingRate: 75.8,
        energyConsumption: 54600,
        costEfficiency: 86.7
      },
      {
        period: 'Last 7 Days',
        materialsProduced: 6543210,
        qualityTests: 1456789,
        qualityIndex: 95.2,
        productionEfficiency: 92.7,
        defectRate: 0.32,
        recyclingRate: 74.9,
        energyConsumption: 367800,
        costEfficiency: 85.9
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMaterialsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        materialsOverview: {
          ...prev.materialsOverview,
          qualityIndex: Math.max(94.0, Math.min(98.0, prev.materialsOverview.qualityIndex + (Math.random() - 0.5) * 1.0)),
          performanceRatio: Math.max(1.1, Math.min(1.4, prev.materialsOverview.performanceRatio + (Math.random() - 0.5) * 0.05))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'PRODUCTION': return 'text-green-400 bg-green-400/20';
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'PILOT': return 'text-yellow-400 bg-yellow-400/20';
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'CLINICAL': return 'text-blue-400 bg-blue-400/20';
      case 'MAINTENANCE': return 'text-orange-400 bg-orange-400/20';
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
  const formatStrength = (strength) => `${strength} MPa`;
  const formatDensity = (density) => `${density} g/cm³`;

  return (
    <div className="h-full bg-gradient-to-br from-amber-900 via-slate-900 to-orange-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-amber-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Materials Science Technology Intelligence Center</h1>
              <p className="text-amber-300">Advanced materials & composites analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-amber-400">{materialsData.currentTime}</div>
            <div className="text-amber-300">Materials Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Materials Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Layers className="w-5 h-5 text-amber-400 mr-2" />
                Materials
              </h3>
            </div>
            <div className="text-3xl font-bold text-amber-400">{formatNumber(materialsData.materialsOverview.materialTypes)}</div>
            <div className="text-amber-300 text-sm">{formatNumber(materialsData.materialsOverview.compositeMaterials)} Composites</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-yellow-400 mr-2" />
                Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(materialsData.materialsOverview.qualityIndex)}</div>
            <div className="text-yellow-300 text-sm">Index</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Performance
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{materialsData.materialsOverview.performanceRatio.toFixed(2)}</div>
            <div className="text-green-300 text-sm">Ratio</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                Strength
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{materialsData.materialsOverview.strengthToWeight}</div>
            <div className="text-orange-300 text-sm">MPa/(g/cm³)</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-purple-400 mr-2" />
                Recycling
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(materialsData.materialsOverview.recyclingRate)}</div>
            <div className="text-purple-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Atom className="w-5 h-5 text-cyan-400 mr-2" />
                Smart
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(materialsData.materialsOverview.smartMaterials)}</div>
            <div className="text-cyan-300 text-sm">Materials</div>
          </div>
        </div>

        {/* Advanced Materials & Materials Characterization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Layers className="w-5 h-5 text-amber-400 mr-2" />
              Advanced Materials
            </h3>
            <div className="space-y-4">
              {materialsData.advancedMaterials.map((material, index) => (
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
                    <div className="text-blue-400">{material.manufacturer}</div>
                    <div className="text-green-400">{material.materialId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Category: {material.category}</div>
                    <div className="text-purple-400">Grade: {material.qualityGrade}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Strength: {formatStrength(material.tensileStrength)}</div>
                    <div className="text-pink-400">Density: {formatDensity(material.density)}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Performance Ratio</span>
                      <span>{(material.tensileStrength / material.density / 1000).toFixed(1)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-amber-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min((material.tensileStrength / material.density / 10), 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Applications: {material.applications}</div>
                    <div className="text-indigo-400">Certs: {material.certifications}</div>
                    <div className="text-cyan-400">Volume: {formatNumber(material.productionVolume)} tons</div>
                    <div className="text-green-400">Cost: ${material.costPerKg}/kg</div>
                    <div className="text-blue-400">Recycling: {material.recyclability}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-yellow-400 mr-2" />
              Materials Characterization
            </h3>
            <div className="space-y-4">
              {materialsData.materialsCharacterization.map((test, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{test.testName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(test.status)}`}>
                        {test.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{test.location}</div>
                    <div className="text-blue-400">{test.facility}</div>
                    <div className="text-green-400">{test.testId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Standard: {test.standard}</div>
                    <div className="text-purple-400">Type: {test.testType}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Samples: {formatNumber(test.sampleCount)}</div>
                    <div className="text-pink-400">Duration: {test.testDuration}min</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Accuracy</span>
                      <span>{formatPercentage(test.accuracy)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-yellow-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${test.accuracy}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Precision: ±{test.precision}</div>
                    <div className="text-indigo-400">Automation: {formatPercentage(test.automationLevel)}</div>
                    <div className="text-cyan-400">Data Points: {formatNumber(test.dataPoints)}</div>
                    <div className="text-green-400">QA: {test.qualityAssurance}</div>
                    <div className="text-blue-400">Calibrated: {test.calibrationDate}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Materials Applications & Research */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-cyan-400 mr-2" />
              Materials Applications
            </h3>
            <div className="space-y-4">
              {materialsData.materialsApplications.map((app, index) => (
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
                    <div className="text-cyan-400">{app.sector}</div>
                    <div className="text-blue-400">{app.developer}</div>
                    <div className="text-green-400">{app.applicationId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Material: {app.materialUsed}</div>
                    <div className="text-purple-400">Certification: {app.certificationLevel}</div>
                  </div>
                  
                  {app.weightReduction && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-orange-400">Weight: -{app.weightReduction}%</div>
                      <div className="text-pink-400">Strength: +{app.strengthImprovement}%</div>
                    </div>
                  )}
                  
                  {app.biocompatibility && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Biocompat: {formatPercentage(app.biocompatibility)}</div>
                      <div className="text-cyan-400">Revision Rate: {app.revisionRate}%</div>
                    </div>
                  )}
                  
                  {app.energyDensity && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-blue-400">Energy: {app.energyDensity} Wh/kg</div>
                      <div className="text-indigo-400">Cycles: {formatNumber(app.cycleLife)}</div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Lifespan: {app.lifespanYears} years</div>
                    <div className="text-indigo-400">Volume: {formatNumber(app.productionVolume)}</div>
                    <div className="text-cyan-400">Value: {app.marketValue}</div>
                    <div className="text-green-400">Satisfaction: {formatPercentage(app.customerSatisfaction)}</div>
                    <div className="text-blue-400">Advantage: {app.competitiveAdvantage}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              Materials Research Programs
            </h3>
            <div className="space-y-4">
              {materialsData.materialsResearch.map((research, index) => (
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
                    <div className="text-cyan-400">
                      {research.healingEfficiency && `Healing: ${research.healingEfficiency}%`}
                      {research.densityReduction && `Density: -{research.densityReduction}%`}
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
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-amber-400 mr-2" />
            Materials Science Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {materialsData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Materials: {formatNumber(metrics.materialsProduced)}</div>
                  <div className="text-green-400">Tests: {formatNumber(metrics.qualityTests)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Quality: {formatPercentage(metrics.qualityIndex)}</div>
                  <div className="text-yellow-400">Efficiency: {formatPercentage(metrics.productionEfficiency)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Defects: {formatPercentage(metrics.defectRate)}</div>
                  <div className="text-orange-400">Recycling: {formatPercentage(metrics.recyclingRate)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Energy: {formatNumber(metrics.energyConsumption)} MWh</div>
                  <div className="text-pink-400">Cost Eff: {formatPercentage(metrics.costEfficiency)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Materials Science Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Materials Science System Alerts
          </h3>
          <div className="space-y-4">
            {materialsData.materialsAlerts.map((alert, index) => (
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
                  {alert.materialType && <div className="text-orange-400">Material: {alert.materialType}</div>}
                  {alert.batchSize && <div className="text-red-400">Batch: {formatNumber(alert.batchSize)} units</div>}
                  {alert.degradationRate && <div className="text-purple-400">Degradation: {alert.degradationRate}%</div>}
                  {alert.accuracyDrift && <div className="text-yellow-400">Drift: {alert.accuracyDrift}%</div>}
                  {alert.achievement && <div className="text-green-400">Achievement: {alert.achievement}</div>}
                  {alert.performanceImprovement && <div className="text-blue-400">Improvement: {alert.performanceImprovement}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact || alert.commercialImpact}
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