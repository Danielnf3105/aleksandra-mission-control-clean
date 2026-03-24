// Advanced Manufacturing & Industry 4.0 Intelligence Center - Smart Factory & Production Analytics
import { useState, useEffect } from 'react';
import { Settings, Activity, Eye, BarChart3, Zap, Lock, AlertTriangle, TrendingUp, Radio, Layers, Cpu, Cog } from 'lucide-react';

export default function AdvancedManufacturingIndustry4IntelligenceCenter() {
  const [manufacturingData, setManufacturingData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    manufacturingOverview: {
      smartFactories: 234567,
      productionLines: 89012,
      connectedDevices: 1567890,
      digitalTwins: 45678,
      aiModels: 23456,
      roboticSystems: 156789,
      globalProduction: 96.4,
      oeeScore: 87.3,
      qualityRate: 99.2,
      energyEfficiency: 82.7,
      predictiveMaintenance: 94.8,
      supplyChainVisibility: 91.5,
      costOptimization: 88.9,
      innovationIndex: 85.6,
      sustainabilityScore: 79.8,
      workforceProductivity: 112.5,
      automationLevel: 76.4,
      dataIntegration: 89.7,
      cyberSecurityIndex: 94.1,
      realTimeMonitoring: 98.6
    },
    smartFactories: [
      {
        factoryName: 'Tesla Gigafactory Berlin',
        factoryId: 'TESLA-GF-BERLIN-001',
        location: 'Brandenburg, Germany',
        company: 'Tesla Inc',
        industry: 'AUTOMOTIVE MANUFACTURING',
        status: 'OPERATIONAL',
        productionType: 'ELECTRIC VEHICLES',
        capacity: 500000,
        currentOutput: 450000,
        utilizationRate: 90.0,
        oeeScore: 89.5,
        qualityRate: 99.8,
        energyEfficiency: 92.4,
        automationLevel: 95.8,
        employeeCount: 12000,
        shiftModel: '3-SHIFT OPERATION',
        digitalTwins: 456,
        iotDevices: 45678,
        predictiveModels: 234,
        sustainabilityRating: 'A+',
        co2Reduction: 67.8,
        wasteReduction: 78.5,
        waterRecycling: 85.2,
        renewableEnergy: 93.6
      },
      {
        factoryName: 'Siemens Digital Factory Amberg',
        factoryId: 'SIEMENS-DF-AMB-002',
        location: 'Amberg, Germany',
        company: 'Siemens AG',
        industry: 'ELECTRONICS MANUFACTURING',
        status: 'OPERATIONAL',
        productionType: 'AUTOMATION CONTROLLERS',
        capacity: 1500000,
        currentOutput: 1425000,
        utilizationRate: 95.0,
        oeeScore: 92.8,
        qualityRate: 99.9,
        energyEfficiency: 88.7,
        automationLevel: 98.5,
        employeeCount: 1100,
        shiftModel: '24/7 CONTINUOUS',
        digitalTwins: 234,
        iotDevices: 23456,
        predictiveModels: 156,
        sustainabilityRating: 'A',
        co2Reduction: 72.4,
        wasteReduction: 89.2,
        waterRecycling: 76.8,
        renewableEnergy: 84.3
      },
      {
        factoryName: 'BMW Group Plant Regensburg',
        factoryId: 'BMW-PLANT-REG-003',
        location: 'Regensburg, Germany',
        company: 'BMW Group',
        industry: 'AUTOMOTIVE MANUFACTURING',
        status: 'MAINTENANCE',
        productionType: 'LUXURY VEHICLES',
        capacity: 340000,
        currentOutput: 0,
        utilizationRate: 0.0,
        oeeScore: 0.0,
        qualityRate: 0.0,
        energyEfficiency: 0.0,
        automationLevel: 87.4,
        employeeCount: 9200,
        shiftModel: 'MAINTENANCE SHUTDOWN',
        digitalTwins: 189,
        iotDevices: 34567,
        predictiveModels: 123,
        sustainabilityRating: 'A-',
        co2Reduction: 58.9,
        wasteReduction: 69.4,
        waterRecycling: 72.1,
        renewableEnergy: 78.5
      },
      {
        factoryName: 'Foxconn Smart Manufacturing',
        factoryId: 'FOXCONN-SM-SHZ-004',
        location: 'Shenzhen, China',
        company: 'Foxconn Technology Group',
        industry: 'ELECTRONICS MANUFACTURING',
        status: 'OPERATIONAL',
        productionType: 'CONSUMER ELECTRONICS',
        capacity: 50000000,
        currentOutput: 47500000,
        utilizationRate: 95.0,
        oeeScore: 86.2,
        qualityRate: 99.5,
        energyEfficiency: 79.3,
        automationLevel: 92.1,
        employeeCount: 85000,
        shiftModel: '24/7 CONTINUOUS',
        digitalTwins: 567,
        iotDevices: 156789,
        predictiveModels: 456,
        sustainabilityRating: 'B+',
        co2Reduction: 45.6,
        wasteReduction: 67.8,
        waterRecycling: 58.9,
        renewableEnergy: 62.4
      }
    ],
    industry4Technologies: [
      {
        technologyName: 'Predictive Maintenance AI',
        technologyId: 'AI-PREDMAINT-001',
        provider: 'Siemens MindSphere',
        deploymentScale: 'ENTERPRISE',
        status: 'OPERATIONAL',
        adoptionRate: 78.5,
        implementation: 'MACHINE LEARNING',
        dataPoints: 2500000,
        predictiveAccuracy: 94.7,
        costSavings: 23.8,
        downtimeReduction: 67.4,
        maintenanceCosts: 'REDUCED 45%',
        equipmentLifespan: 'EXTENDED 28%',
        alertResponse: '156ms',
        falseAlarmRate: 4.2,
        integrationComplexity: 'MEDIUM',
        roiTimeframe: '8 MONTHS',
        userSatisfaction: 92.1,
        trainingRequired: '40 HOURS',
        complianceLevel: 'ISO 55000',
        securityRating: 'HIGH'
      },
      {
        technologyName: 'Digital Twin Platform',
        technologyId: 'DT-PLATFORM-002',
        provider: 'GE Digital Twin',
        deploymentScale: 'PLANT-WIDE',
        status: 'SCALING',
        adoptionRate: 65.8,
        implementation: 'REAL-TIME SIMULATION',
        dataPoints: 5000000,
        simulationAccuracy: 97.3,
        optimizationGains: 18.6,
        designCycleTime: 'REDUCED 52%',
        testingCosts: 'REDUCED 38%',
        virtualCommissioning: 'ENABLED',
        modelUpdateFrequency: 'REAL-TIME',
        computationalLoad: 'HIGH',
        integrationComplexity: 'HIGH',
        roiTimeframe: '12 MONTHS',
        userSatisfaction: 88.4,
        trainingRequired: '80 HOURS',
        complianceLevel: 'IEC 62443',
        securityRating: 'VERY HIGH'
      },
      {
        technologyName: 'Autonomous Mobile Robots',
        technologyId: 'AMR-FLEET-003',
        provider: 'KIVA Systems (Amazon)',
        deploymentScale: 'WAREHOUSE',
        status: 'OPERATIONAL',
        adoptionRate: 89.2,
        implementation: 'SWARM ROBOTICS',
        robotCount: 15000,
        navigationAccuracy: 99.8,
        throughputIncrease: 156.7,
        orderFulfillmentTime: 'REDUCED 65%',
        warehouseUtilization: 'OPTIMIZED',
        humanSafety: 'ENHANCED',
        energyConsumption: 'REDUCED 25%',
        maintenanceFrequency: 'QUARTERLY',
        integrationComplexity: 'LOW',
        roiTimeframe: '6 MONTHS',
        userSatisfaction: 96.7,
        trainingRequired: '16 HOURS',
        complianceLevel: 'ISO 3691-4',
        securityRating: 'MEDIUM'
      }
    ],
    productionLines: [
      {
        lineName: 'Model Y Assembly Line 3',
        lineId: 'TESLA-MY-AL3-001',
        factory: 'Tesla Gigafactory Berlin',
        product: 'MODEL Y ELECTRIC SUV',
        status: 'RUNNING',
        targetRate: 120,
        actualRate: 114,
        efficiency: 95.0,
        qualityScore: 99.6,
        downtimeToday: 45,
        plannedDowntime: 30,
        unplannedDowntime: 15,
        cycleTime: 30,
        stationCount: 156,
        operatorCount: 89,
        robotCount: 234,
        defectRate: 0.4,
        reworkRate: 1.2,
        energyConsumption: 2.8,
        materialUtilization: 97.8,
        wasteGeneration: 2.3,
        safetyIncidents: 0,
        lastMaintenance: '2026-03-15',
        nextMaintenance: '2026-03-22'
      },
      {
        lineName: 'SIMATIC S7-1500 Production',
        lineId: 'SIEMENS-S7-PROD-002',
        factory: 'Siemens Digital Factory Amberg',
        product: 'AUTOMATION CONTROLLERS',
        status: 'RUNNING',
        targetRate: 2500,
        actualRate: 2425,
        efficiency: 97.0,
        qualityScore: 99.9,
        downtimeToday: 15,
        plannedDowntime: 10,
        unplannedDowntime: 5,
        cycleTime: 1.44,
        stationCount: 78,
        operatorCount: 12,
        robotCount: 45,
        defectRate: 0.1,
        reworkRate: 0.3,
        energyConsumption: 1.2,
        materialUtilization: 99.2,
        wasteGeneration: 0.8,
        safetyIncidents: 0,
        lastMaintenance: '2026-03-12',
        nextMaintenance: '2026-03-19'
      },
      {
        lineName: 'iPhone Final Assembly',
        lineId: 'FOXCONN-IP-FA-003',
        factory: 'Foxconn Smart Manufacturing',
        product: 'SMARTPHONE ASSEMBLY',
        status: 'HIGH DEMAND',
        targetRate: 850,
        actualRate: 820,
        efficiency: 96.5,
        qualityScore: 99.3,
        downtimeToday: 90,
        plannedDowntime: 60,
        unplannedDowntime: 30,
        cycleTime: 4.2,
        stationCount: 234,
        operatorCount: 456,
        robotCount: 123,
        defectRate: 0.7,
        reworkRate: 2.1,
        energyConsumption: 3.8,
        materialUtilization: 96.5,
        wasteGeneration: 3.2,
        safetyIncidents: 0,
        lastMaintenance: '2026-03-10',
        nextMaintenance: '2026-03-25'
      }
    ],
    qualityManagement: [
      {
        qualitySystem: 'AI Vision Inspection',
        systemId: 'AI-VI-QC-001',
        manufacturer: 'Cognex Corporation',
        applicationArea: 'SURFACE DEFECT DETECTION',
        status: 'OPERATIONAL',
        accuracy: 99.7,
        inspectionSpeed: 45000,
        defectTypes: 'SCRATCHES, DENTS, COLOR',
        falsePositiveRate: 0.8,
        falseNegativeRate: 0.3,
        throughputImpact: 'MINIMAL',
        integrationLevel: 'SEAMLESS',
        learningCapability: 'CONTINUOUS',
        operatorTraining: '8 HOURS',
        maintenanceRequirements: 'LOW',
        costPerInspection: '0.02 USD',
        roiAchieved: 'YES',
        complianceStandards: 'ISO 9001, IATF 16949',
        dataRetention: '7 YEARS',
        realTimeReporting: 'ENABLED'
      },
      {
        qualitySystem: 'Statistical Process Control',
        systemId: 'SPC-MONITOR-002',
        manufacturer: 'Minitab Statistical Software',
        applicationArea: 'PROCESS VARIATION CONTROL',
        status: 'OPERATIONAL',
        controlCharts: 156,
        processCapability: 1.67,
        outOfControlSignals: 2,
        correctionActions: 5,
        processStability: 'STABLE',
        measurementSystem: 'CALIBRATED',
        samplingFrequency: 'EVERY 30 UNITS',
        operatorInterface: 'USER FRIENDLY',
        alertSystem: 'REAL-TIME',
        trendAnalysis: 'AUTOMATED',
        reportGeneration: 'SCHEDULED',
        dataVisualization: 'ADVANCED',
        complianceReporting: 'AUTOMATIC',
        trainingCompliance: '100%',
        auditReadiness: 'MAINTAINED'
      }
    ],
    supplyChainVisibility: [
      {
        supplierName: 'TSMC Advanced Packaging',
        supplierId: 'TSMC-AP-001',
        location: 'Hsinchu, Taiwan',
        supplierTier: 'TIER 1',
        materialCategory: 'SEMICONDUCTORS',
        status: 'PREFERRED',
        qualityRating: 98.5,
        deliveryPerformance: 96.8,
        costCompetitiveness: 89.2,
        innovationCapability: 94.7,
        sustainabilityScore: 87.3,
        riskLevel: 'LOW',
        contractValue: 2.8,
        paymentTerms: '30 DAYS',
        inventoryDays: 15,
        leadTime: 21,
        qualityCertifications: 'ISO 9001, IATF 16949',
        auditScore: 96.2,
        relationshipTenure: '8 YEARS',
        strategicImportance: 'CRITICAL',
        backupSuppliers: 2
      },
      {
        supplierName: 'Bosch Automotive Systems',
        supplierId: 'BOSCH-AUTO-002',
        location: 'Stuttgart, Germany',
        supplierTier: 'TIER 1',
        materialCategory: 'AUTOMOTIVE COMPONENTS',
        status: 'STRATEGIC',
        qualityRating: 97.8,
        deliveryPerformance: 98.2,
        costCompetitiveness: 85.6,
        innovationCapability: 96.4,
        sustainabilityScore: 91.7,
        riskLevel: 'LOW',
        contractValue: 4.5,
        paymentTerms: '45 DAYS',
        inventoryDays: 8,
        leadTime: 14,
        qualityCertifications: 'ISO 9001, ISO 14001',
        auditScore: 97.9,
        relationshipTenure: '12 YEARS',
        strategicImportance: 'CRITICAL',
        backupSuppliers: 1
      }
    ],
    manufacturingAlerts: [
      {
        type: 'CRITICAL',
        category: 'Production Line Failure',
        message: 'Main assembly line experiencing critical equipment failure - production halted',
        facility: 'BMW Group Plant Regensburg',
        location: 'Regensburg, Germany',
        affectedLine: 'LUXURY VEHICLE ASSEMBLY',
        equipmentType: 'ROBOTIC WELDING STATION',
        failureMode: 'HYDRAULIC SYSTEM LEAK',
        impact: 'COMPLETE LINE SHUTDOWN',
        estimatedDowntime: '8-12 HOURS',
        productionLoss: '340 UNITS',
        revenueImpact: '18.7M EUR',
        timestamp: '14:25',
        detectedBy: 'Predictive Maintenance AI',
        recommendation: 'Emergency maintenance team deployed, backup production activated',
        safetyRisk: 'CONTROLLED',
        environmentalImpact: 'MINOR HYDRAULIC SPILL',
        customerImpact: 'DELIVERY DELAYS',
        supplierNotification: 'SENT',
        managementEscalation: 'C-LEVEL'
      },
      {
        type: 'HIGH',
        category: 'Quality Deviation',
        message: 'Quality control system detecting increased defect rate in critical components',
        facility: 'Foxconn Smart Manufacturing',
        location: 'Shenzhen, China',
        affectedLine: 'SMARTPHONE FINAL ASSEMBLY',
        defectType: 'DISPLAY ALIGNMENT',
        currentDefectRate: 2.8,
        normalDefectRate: 0.7,
        deviationLevel: '300% INCREASE',
        samplesAffected: 45,
        batchSize: 1600,
        qualityHold: 'INITIATED',
        timestamp: '13:45',
        detectedBy: 'AI Vision Inspection',
        recommendation: 'Process parameter review, operator retraining required',
        rootCauseAnalysis: 'IN PROGRESS',
        correctiveActions: 'IDENTIFIED',
        preventiveMeasures: 'IMPLEMENTING',
        customerNotification: 'PENDING',
        qualityApproval: 'REQUIRED'
      },
      {
        type: 'MEDIUM',
        category: 'Predictive Maintenance Alert',
        message: 'Bearing temperature trending upward - maintenance recommended within 72 hours',
        facility: 'Siemens Digital Factory Amberg',
        location: 'Amberg, Germany',
        affectedEquipment: 'CNC MACHINING CENTER #7',
        parameterName: 'BEARING TEMPERATURE',
        currentValue: 78.5,
        normalRange: '65-75°C',
        trendDirection: 'INCREASING',
        predictionConfidence: 92.4,
        recommendedAction: 'SCHEDULED MAINTENANCE',
        maintenanceWindow: '72 HOURS',
        timestamp: '12:30',
        detectedBy: 'Vibration Analysis System',
        recommendation: 'Schedule bearing replacement during next planned downtime',
        spareParts: 'AVAILABLE',
        maintenanceTeam: 'NOTIFIED',
        productionImpact: 'MINIMAL',
        costAvoidance: '25000 EUR',
        safetyRisk: 'LOW'
      },
      {
        type: 'INFO',
        category: 'Efficiency Optimization',
        message: 'AI optimization algorithm identified 12% efficiency improvement opportunity',
        facility: 'Tesla Gigafactory Berlin',
        location: 'Brandenburg, Germany',
        optimizationArea: 'BATTERY PACK ASSEMBLY',
        currentEfficiency: 89.5,
        projectedEfficiency: 100.3,
        improvementPotential: 12.1,
        optimizationMethod: 'PRODUCTION SEQUENCING',
        implementationTime: '48 HOURS',
        resourcesRequired: 'SOFTWARE UPDATE',
        timestamp: '11:15',
        detectedBy: 'Production Optimization AI',
        recommendation: 'Implement suggested production sequence changes',
        validationRequired: 'SIMULATION TESTING',
        approvalStatus: 'PENDING',
        expectedBenefit: '54 UNITS/DAY',
        revenueImpact: '2.7M EUR/YEAR',
        implementationRisk: 'LOW'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        smartFactories: 234567,
        productionOutput: 890123,
        oeeScore: 87.3,
        qualityRate: 99.2,
        energyEfficiency: 82.7,
        downtimeEvents: 12,
        safetyIncidents: 0,
        costOptimization: 88.9
      },
      {
        period: 'Last 24 Hours',
        smartFactories: 234234,
        productionOutput: 21456789,
        oeeScore: 86.8,
        qualityRate: 99.0,
        energyEfficiency: 82.1,
        downtimeEvents: 234,
        safetyIncidents: 2,
        costOptimization: 88.2
      },
      {
        period: 'Last 7 Days',
        smartFactories: 233987,
        productionOutput: 145678901,
        oeeScore: 86.2,
        qualityRate: 98.7,
        energyEfficiency: 81.5,
        downtimeEvents: 1456,
        safetyIncidents: 15,
        costOptimization: 87.6
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setManufacturingData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        manufacturingOverview: {
          ...prev.manufacturingOverview,
          oeeScore: Math.max(80.0, Math.min(95.0, prev.manufacturingOverview.oeeScore + (Math.random() - 0.5) * 1.0)),
          qualityRate: Math.max(95.0, Math.min(99.5, prev.manufacturingOverview.qualityRate + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'RUNNING': return 'text-green-400 bg-green-400/20';
      case 'HIGH DEMAND': return 'text-yellow-400 bg-yellow-400/20';
      case 'MAINTENANCE': return 'text-red-400 bg-red-400/20';
      case 'SCALING': return 'text-blue-400 bg-blue-400/20';
      case 'PREFERRED': return 'text-green-400 bg-green-400/20';
      case 'STRATEGIC': return 'text-purple-400 bg-purple-400/20';
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
  const formatUnits = (units) => `${formatNumber(units)} units`;

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-900 to-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Advanced Manufacturing & Industry 4.0 Intelligence Center</h1>
              <p className="text-slate-300">Smart factory & production analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{manufacturingData.currentTime}</div>
            <div className="text-slate-300">Manufacturing Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Manufacturing Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-slate-400 mr-2" />
                Factories
              </h3>
            </div>
            <div className="text-3xl font-bold text-slate-400">{formatNumber(manufacturingData.manufacturingOverview.smartFactories)}</div>
            <div className="text-slate-300 text-sm">{formatNumber(manufacturingData.manufacturingOverview.productionLines)} Lines</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
                OEE
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(manufacturingData.manufacturingOverview.oeeScore)}</div>
            <div className="text-green-300 text-sm">Overall Equipment Effectiveness</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(manufacturingData.manufacturingOverview.qualityRate)}</div>
            <div className="text-blue-300 text-sm">Pass Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Energy
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(manufacturingData.manufacturingOverview.energyEfficiency)}</div>
            <div className="text-yellow-300 text-sm">Efficiency</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                Automation
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(manufacturingData.manufacturingOverview.automationLevel)}</div>
            <div className="text-purple-300 text-sm">Level</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-cyan-400 mr-2" />
                Devices
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(manufacturingData.manufacturingOverview.connectedDevices)}</div>
            <div className="text-cyan-300 text-sm">Connected IoT</div>
          </div>
        </div>

        {/* Smart Factories & Industry 4.0 Technologies */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-slate-400 mr-2" />
              Smart Factories
            </h3>
            <div className="space-y-4">
              {manufacturingData.smartFactories.map((factory, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{factory.factoryName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(factory.status)}`}>
                        {factory.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{factory.location}</div>
                    <div className="text-blue-400">{factory.company}</div>
                    <div className="text-green-400">{factory.factoryId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Industry: {factory.industry}</div>
                    <div className="text-purple-400">Product: {factory.productionType}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Capacity: {formatUnits(factory.capacity)}</div>
                    <div className="text-pink-400">Output: {formatUnits(factory.currentOutput)}</div>
                  </div>
                  
                  {factory.utilizationRate > 0 && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Utilization Rate</span>
                        <span>{formatPercentage(factory.utilizationRate)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-slate-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${factory.utilizationRate}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">OEE: {formatPercentage(factory.oeeScore)}</div>
                    <div className="text-indigo-400">Quality: {formatPercentage(factory.qualityRate)}</div>
                    <div className="text-cyan-400">Automation: {formatPercentage(factory.automationLevel)}</div>
                    <div className="text-green-400">Employees: {formatNumber(factory.employeeCount)}</div>
                    <div className="text-blue-400">Sustainability: {factory.sustainabilityRating}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-blue-400 mr-2" />
              Industry 4.0 Technologies
            </h3>
            <div className="space-y-4">
              {manufacturingData.industry4Technologies.map((tech, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{tech.technologyName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(tech.status)}`}>
                        {tech.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{tech.provider}</div>
                    <div className="text-blue-400">{tech.deploymentScale}</div>
                    <div className="text-green-400">{tech.technologyId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Implementation: {tech.implementation}</div>
                    <div className="text-purple-400">ROI: {tech.roiTimeframe}</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Adoption Rate</span>
                      <span>{formatPercentage(tech.adoptionRate)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-blue-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${tech.adoptionRate}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {tech.predictiveAccuracy && `Accuracy: ${formatPercentage(tech.predictiveAccuracy)}`}
                      {tech.simulationAccuracy && `Simulation: ${formatPercentage(tech.simulationAccuracy)}`}
                      {tech.navigationAccuracy && `Navigation: ${formatPercentage(tech.navigationAccuracy)}`}
                    </div>
                    <div className="text-indigo-400">
                      {tech.costSavings && `Savings: ${formatPercentage(tech.costSavings)}`}
                      {tech.optimizationGains && `Optimization: ${formatPercentage(tech.optimizationGains)}`}
                      {tech.throughputIncrease && `Throughput: +${formatPercentage(tech.throughputIncrease)}`}
                    </div>
                    <div className="text-cyan-400">Satisfaction: {formatPercentage(tech.userSatisfaction)}</div>
                    <div className="text-green-400">Security: {tech.securityRating}</div>
                    <div className="text-blue-400">Training: {tech.trainingRequired}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Production Lines & Quality Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Layers className="w-5 h-5 text-cyan-400 mr-2" />
              Production Lines
            </h3>
            <div className="space-y-4">
              {manufacturingData.productionLines.map((line, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{line.lineName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(line.status)}`}>
                        {line.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{line.factory}</div>
                    <div className="text-blue-400">{line.product}</div>
                    <div className="text-green-400">{line.lineId}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Target: {line.targetRate}/hr</div>
                    <div className="text-purple-400">Actual: {line.actualRate}/hr</div>
                  </div>
                  
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Efficiency</span>
                      <span>{formatPercentage(line.efficiency)}</span>
                    </div>
                    <div className="w-full bg-slate-600 rounded-full h-1">
                      <div 
                        className="bg-cyan-400 h-1 rounded-full transition-all duration-300"
                        style={{ width: `${line.efficiency}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">Quality: {formatPercentage(line.qualityScore)}</div>
                    <div className="text-indigo-400">Cycle Time: {line.cycleTime}s</div>
                    <div className="text-cyan-400">Downtime: {line.downtimeToday}min</div>
                    <div className="text-green-400">Defect Rate: {formatPercentage(line.defectRate)}</div>
                    <div className="text-blue-400">Stations: {line.stationCount}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-green-400 mr-2" />
              Quality Management Systems
            </h3>
            <div className="space-y-4">
              {manufacturingData.qualityManagement.map((quality, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{quality.qualitySystem}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(quality.status)}`}>
                        {quality.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">{quality.manufacturer}</div>
                    <div className="text-blue-400">{quality.applicationArea}</div>
                    <div className="text-green-400">{quality.systemId}</div>
                  </div>
                  
                  {quality.accuracy && (
                    <div className="mb-2">
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Accuracy</span>
                        <span>{formatPercentage(quality.accuracy)}</span>
                      </div>
                      <div className="w-full bg-slate-600 rounded-full h-1">
                        <div 
                          className="bg-green-400 h-1 rounded-full transition-all duration-300"
                          style={{ width: `${quality.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-xs space-y-1">
                    <div className="text-slate-300">
                      {quality.inspectionSpeed && `Speed: ${formatNumber(quality.inspectionSpeed)}/hr`}
                      {quality.processCapability && `Cp: ${quality.processCapability}`}
                    </div>
                    <div className="text-indigo-400">
                      {quality.falsePositiveRate && `False+: ${formatPercentage(quality.falsePositiveRate)}`}
                      {quality.controlCharts && `Charts: ${quality.controlCharts}`}
                    </div>
                    <div className="text-cyan-400">
                      {quality.defectTypes && `Detects: ${quality.defectTypes}`}
                      {quality.samplingFrequency && `Sampling: ${quality.samplingFrequency}`}
                    </div>
                    <div className="text-green-400">Standards: {quality.complianceStandards || quality.complianceReporting}</div>
                    <div className="text-blue-400">Training: {quality.operatorTraining || quality.trainingCompliance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Supply Chain Visibility */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Radio className="w-5 h-5 text-purple-400 mr-2" />
            Supply Chain Visibility
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {manufacturingData.supplyChainVisibility.map((supplier, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{supplier.supplierName}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(supplier.status)}`}>
                      {supplier.status}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">{supplier.location}</div>
                  <div className="text-blue-400">{supplier.supplierTier}</div>
                  <div className="text-green-400">{supplier.materialCategory}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-yellow-400">Quality: {formatPercentage(supplier.qualityRating)}</div>
                  <div className="text-purple-400">Delivery: {formatPercentage(supplier.deliveryPerformance)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-orange-400">Value: ${supplier.contractValue}B</div>
                  <div className="text-pink-400">Lead Time: {supplier.leadTime} days</div>
                </div>
                
                <div className="mb-2">
                  <div className="flex justify-between text-xs text-slate-400 mb-1">
                    <span>Innovation Capability</span>
                    <span>{formatPercentage(supplier.innovationCapability)}</span>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-1">
                    <div 
                      className="bg-purple-400 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${supplier.innovationCapability}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="text-xs space-y-1">
                  <div className="text-slate-300">Risk Level: {supplier.riskLevel}</div>
                  <div className="text-indigo-400">Sustainability: {formatPercentage(supplier.sustainabilityScore)}</div>
                  <div className="text-cyan-400">Audit Score: {formatPercentage(supplier.auditScore)}</div>
                  <div className="text-green-400">Tenure: {supplier.relationshipTenure}</div>
                  <div className="text-blue-400">Importance: {supplier.strategicImportance}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-slate-400 mr-2" />
            Manufacturing Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {manufacturingData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Factories: {formatNumber(metrics.smartFactories)}</div>
                  <div className="text-green-400">Output: {formatNumber(metrics.productionOutput)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">OEE: {formatPercentage(metrics.oeeScore)}</div>
                  <div className="text-yellow-400">Quality: {formatPercentage(metrics.qualityRate)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Energy: {formatPercentage(metrics.energyEfficiency)}</div>
                  <div className="text-orange-400">Cost Opt: {formatPercentage(metrics.costOptimization)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Downtime: {metrics.downtimeEvents}</div>
                  <div className="text-pink-400">Incidents: {metrics.safetyIncidents}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing System Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Manufacturing System Alerts
          </h3>
          <div className="space-y-4">
            {manufacturingData.manufacturingAlerts.map((alert, index) => (
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
                  {alert.affectedLine && <div className="text-orange-400">Line: {alert.affectedLine}</div>}
                  {alert.equipmentType && <div className="text-purple-400">Equipment: {alert.equipmentType}</div>}
                  {alert.failureMode && <div className="text-red-400">Failure: {alert.failureMode}</div>}
                  {alert.defectType && <div className="text-yellow-400">Defect: {alert.defectType}</div>}
                  {alert.affectedEquipment && <div className="text-blue-400">Equipment: {alert.affectedEquipment}</div>}
                  {alert.optimizationArea && <div className="text-green-400">Area: {alert.optimizationArea}</div>}
                  {alert.improvementPotential && <div className="text-green-400">Improvement: {formatPercentage(alert.improvementPotential)}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact || alert.revenueImpact || alert.qualityHold || alert.implementationTime}
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