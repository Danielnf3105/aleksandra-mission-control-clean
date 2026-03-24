// Operations Intelligence Center - Supply Chain, Manufacturing & Operational Excellence Analytics
import { useState, useEffect } from 'react';
import { Cog, Truck, Factory, Package, TrendingUp, TrendingDown, Clock, AlertCircle, CheckCircle, BarChart3, PieChart, Zap } from 'lucide-react';

export default function OperationsIntelligenceCenter() {
  const [opsData, setOpsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    operationalOverview: {
      overallEfficiency: 94.7,
      productionCapacity: 87.3,
      qualityScore: 96.2,
      onTimeDelivery: 92.8,
      costEfficiency: 89.4,
      wasteReduction: 78.9,
      energyEfficiency: 85.6,
      safetyScore: 99.1,
      employeeProductivity: 91.7,
      customerSatisfaction: 94.3,
      inventoryTurnover: 12.4,
      totalOrders: 15847,
      completedOrders: 14623,
      pendingOrders: 1224
    },
    supplyChainMetrics: {
      supplierPerformance: 91.8,
      totalSuppliers: 234,
      activeSuppliers: 187,
      criticalSuppliers: 23,
      supplierRiskScore: 15.7, // lower is better
      procurementCost: 2847293,
      costSavings: 234567,
      leadTime: 14.7, // days
      fillRate: 96.4,
      backorderRate: 3.6,
      supplierDiversity: 67.8,
      sustainabilityScore: 82.4,
      suppliers: [
        {
          name: 'Supplier Alpha',
          performance: 97.2,
          onTimeDelivery: 98.5,
          qualityRating: 95.8,
          costRating: 91.3,
          riskLevel: 'LOW',
          contractValue: 567890,
          lastDelivery: '2 days ago'
        },
        {
          name: 'Supplier Beta',
          performance: 89.4,
          onTimeDelivery: 87.6,
          qualityRating: 92.1,
          costRating: 88.9,
          riskLevel: 'MEDIUM',
          contractValue: 445670,
          lastDelivery: '1 day ago'
        },
        {
          name: 'Supplier Gamma',
          performance: 94.6,
          onTimeDelivery: 96.3,
          qualityRating: 93.8,
          costRating: 94.2,
          riskLevel: 'LOW',
          contractValue: 389456,
          lastDelivery: '4 hours ago'
        },
        {
          name: 'Supplier Delta',
          performance: 86.7,
          onTimeDelivery: 84.2,
          qualityRating: 89.5,
          costRating: 86.9,
          riskLevel: 'HIGH',
          contractValue: 234567,
          lastDelivery: '5 days ago'
        }
      ]
    },
    manufacturingMetrics: {
      productionVolume: 234567,
      plannedProduction: 256789,
      productionVariance: -8.7,
      oee: 87.3, // Overall Equipment Effectiveness
      availability: 94.2,
      performance: 92.7,
      quality: 99.9,
      downtime: 2.8, // percentage
      plannedDowntime: 1.2,
      unplannedDowntime: 1.6,
      scrapRate: 1.4,
      reworkRate: 2.3,
      firstPassYield: 96.3,
      cycleTime: 24.7, // minutes
      setupTime: 18.9, // minutes
      changeovers: 67,
      productionLines: [
        {
          line: 'Line A',
          status: 'RUNNING',
          efficiency: 94.7,
          output: 45678,
          planned: 48000,
          downtime: 1.2,
          quality: 99.1,
          operators: 8
        },
        {
          line: 'Line B',
          status: 'MAINTENANCE',
          efficiency: 0,
          output: 0,
          planned: 42000,
          downtime: 100,
          quality: 0,
          operators: 0
        },
        {
          line: 'Line C',
          status: 'RUNNING',
          efficiency: 91.3,
          output: 38456,
          planned: 42000,
          downtime: 3.4,
          quality: 97.8,
          operators: 6
        },
        {
          line: 'Line D',
          status: 'SETUP',
          efficiency: 45.2,
          output: 15234,
          planned: 35000,
          downtime: 25.6,
          quality: 98.9,
          operators: 4
        }
      ]
    },
    inventoryManagement: {
      totalInventoryValue: 4567890,
      rawMaterials: 1678234,
      workInProcess: 856789,
      finishedGoods: 2032867,
      stockAccuracy: 99.2,
      inventoryTurns: 12.4,
      daysOfInventory: 29.5,
      stockouts: 12,
      excessInventory: 234567,
      obsoleteInventory: 89456,
      carryingCost: 15.7, // percentage
      inventoryCategories: [
        { category: 'Raw Materials', value: 1678234, turns: 15.6, accuracy: 99.8 },
        { category: 'Components', value: 945678, turns: 18.3, accuracy: 98.7 },
        { category: 'WIP', value: 856789, turns: 45.2, accuracy: 97.4 },
        { category: 'Finished Goods', value: 2032867, turns: 8.9, accuracy: 99.5 },
        { category: 'MRO Supplies', value: 54322, turns: 6.7, accuracy: 95.3 }
      ]
    },
    logisticsMetrics: {
      totalShipments: 8947,
      onTimeShipments: 8304,
      delayedShipments: 643,
      onTimePerformance: 92.8,
      averageDeliveryTime: 3.7, // days
      shippingCost: 456789,
      costPerShipment: 51.02,
      fuelEfficiency: 8.9, // km/liter
      carbonFootprint: 234.7, // tons CO2
      vehicleUtilization: 87.4,
      routeOptimization: 91.6,
      warehouseUtilization: 78.9,
      pickAccuracy: 99.7,
      packingEfficiency: 94.2,
      lastMileDelivery: 96.3,
      returnRate: 2.8,
      damagedGoods: 0.7,
      regions: [
        { region: 'North', deliveries: 2456, onTime: 94.7, avgTime: 3.2, cost: 48.90 },
        { region: 'South', deliveries: 2134, onTime: 91.2, avgTime: 4.1, cost: 52.45 },
        { region: 'East', deliveries: 1987, onTime: 93.8, avgTime: 3.5, cost: 49.78 },
        { region: 'West', deliveries: 1890, onTime: 90.5, avgTime: 4.3, cost: 54.12 },
        { region: 'Central', deliveries: 480, onTime: 96.8, avgTime: 2.8, cost: 45.67 }
      ]
    },
    qualityMetrics: {
      overallQualityScore: 96.2,
      defectRate: 0.8, // percentage
      customerComplaints: 34,
      warrantyReturns: 67,
      qualityIncidents: 12,
      correctionActions: 89,
      preventiveActions: 156,
      qualityAudits: 23,
      auditScore: 94.7,
      certificationCompliance: 98.9,
      processCapability: 1.67, // Cpk
      sigmaLevel: 4.2,
      qualityInspections: [
        { process: 'Incoming Inspection', passRate: 98.7, samples: 1247, defects: 16 },
        { process: 'In-Process QC', passRate: 97.4, samples: 4567, defects: 119 },
        { process: 'Final Inspection', passRate: 99.2, samples: 2834, defects: 23 },
        { process: 'Customer Audit', passRate: 96.8, samples: 89, defects: 3 }
      ]
    },
    maintenanceMetrics: {
      equipmentUptime: 96.8,
      plannedMaintenance: 89.4,
      emergencyRepairs: 23,
      maintenanceCost: 234567,
      costPerEquipment: 3456,
      mtbf: 2847, // Mean Time Between Failures (hours)
      mttr: 4.7, // Mean Time To Repair (hours)
      maintenanceBacklog: 67,
      workOrderCompletion: 94.2,
      preventiveMaintenanceRatio: 78.9,
      sparePartsAvailability: 91.3,
      maintenanceScheduleAdherence: 87.6,
      equipmentAge: 6.8, // years
      assetReliability: 95.4,
      maintenanceTypes: [
        { type: 'Preventive', percentage: 68.9, cost: 145678, efficiency: 94.2 },
        { type: 'Predictive', percentage: 18.4, cost: 45678, efficiency: 97.8 },
        { type: 'Corrective', percentage: 12.7, cost: 43211, efficiency: 78.9 }
      ]
    },
    sustainabilityMetrics: {
      carbonEmissions: 2847.3, // tons CO2e
      energyConsumption: 1234567, // kWh
      waterUsage: 456789, // liters
      wasteGenerated: 234.7, // tons
      wasteRecycled: 189.3, // tons
      recyclingRate: 80.6,
      renewableEnergy: 34.7, // percentage
      sustainabilityScore: 82.4,
      greenCertifications: 12,
      environmentalIncidents: 0,
      complianceRate: 100.0,
      carbonIntensity: 2.1, // kg CO2/unit
      energyIntensity: 1.8, // kWh/unit
      waterIntensity: 0.67, // liters/unit
      sustainabilityInitiatives: [
        { initiative: 'Solar Panel Installation', progress: 78.9, savings: 45678, impact: 'HIGH' },
        { initiative: 'Waste Reduction Program', progress: 92.3, savings: 23456, impact: 'MEDIUM' },
        { initiative: 'Water Conservation', progress: 67.4, savings: 12345, impact: 'MEDIUM' },
        { initiative: 'Green Supply Chain', progress: 54.8, savings: 34567, impact: 'HIGH' }
      ]
    },
    operationsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Production',
        message: 'Line B down for unplanned maintenance - impacting daily production target by 15%',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Production Manager',
        timestamp: '01:18',
        recommendations: ['Activate backup line', 'Reallocate resources', 'Update delivery schedules']
      },
      {
        type: 'WARNING',
        category: 'Supply Chain',
        message: 'Supplier Delta delivery delayed by 3 days - may affect production schedule',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Supply Chain Manager',
        timestamp: '01:10',
        recommendations: ['Contact alternative suppliers', 'Adjust production plan', 'Monitor inventory levels']
      },
      {
        type: 'SUCCESS',
        category: 'Quality',
        message: 'Quality score reached 96.2% (+1.8% vs target) - best month this year',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Quality Team',
        timestamp: '00:45',
        recommendations: ['Document best practices', 'Recognize team performance', 'Share success factors']
      },
      {
        type: 'INFO',
        category: 'Sustainability',
        message: 'Solar panel installation reached 78.9% completion - ahead of schedule',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Sustainability Manager',
        timestamp: '00:30',
        recommendations: ['Continue current pace', 'Plan next phase', 'Monitor energy savings']
      }
    ],
    kpiDashboard: {
      safetyMetrics: {
        daysWithoutIncidents: 147,
        accidentRate: 0.2, // per 1000 hours
        nearMisses: 12,
        safetyTrainingCompletion: 98.7,
        safetyAudits: 23,
        safetyScore: 99.1
      },
      operationalExcellence: {
        leanImplementation: 87.3,
        sixSigmaProjects: 34,
        continuousImprovement: 91.8,
        processStandardization: 94.2,
        digitalMaturity: 76.8,
        automationLevel: 45.6
      },
      financialMetrics: {
        operatingMargin: 18.7,
        costReduction: 234567,
        productivity: 91.7,
        assetUtilization: 87.4,
        roi: 23.8,
        ebitda: 4567890
      }
    },
    realTimeMetrics: {
      currentProduction: 1247,
      targetProduction: 1350,
      productionGap: -103,
      activeEquipment: 89,
      totalEquipment: 95,
      currentShifts: 3,
      activeWorkers: 234,
      scheduledWorkers: 245,
      currentOrders: 156,
      urgentOrders: 23,
      equipmentAlerts: 5,
      qualityAlerts: 2
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOpsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        operationalOverview: {
          ...prev.operationalOverview,
          overallEfficiency: Math.max(85, Math.min(98, prev.operationalOverview.overallEfficiency + (Math.random() - 0.5) * 1)),
          productionCapacity: Math.max(80, Math.min(95, prev.operationalOverview.productionCapacity + (Math.random() - 0.5) * 2)),
          qualityScore: Math.max(90, Math.min(99, prev.operationalOverview.qualityScore + (Math.random() - 0.5) * 0.5)),
          onTimeDelivery: Math.max(85, Math.min(98, prev.operationalOverview.onTimeDelivery + (Math.random() - 0.5) * 1)),
          completedOrders: prev.operationalOverview.completedOrders + Math.floor(Math.random() * 10)
        },
        realTimeMetrics: {
          ...prev.realTimeMetrics,
          currentProduction: prev.realTimeMetrics.currentProduction + Math.floor(Math.random() * 20) - 10,
          activeEquipment: Math.max(85, Math.min(95, prev.realTimeMetrics.activeEquipment + Math.floor(Math.random() * 3) - 1)),
          activeWorkers: Math.max(220, Math.min(250, prev.realTimeMetrics.activeWorkers + Math.floor(Math.random() * 6) - 3))
        }
      }));
    }, 11000);

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

  const getStatusColor = (status) => {
    switch (status) {
      case 'RUNNING': return 'text-green-400 bg-green-400/20';
      case 'MAINTENANCE': return 'text-red-400 bg-red-400/20';
      case 'SETUP': return 'text-yellow-400 bg-yellow-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 85, excellent = 95) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="h-full bg-gradient-to-br from-orange-900 via-slate-900 to-amber-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-orange-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl">
              <Cog className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Operations Intelligence Center</h1>
              <p className="text-orange-300">Supply chain, manufacturing, logistics, quality & operational excellence analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-orange-400">{opsData.currentTime}</div>
            <div className="text-orange-300">Operations Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Operational Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-orange-400 mr-2" />
                Overall Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(opsData.operationalOverview.overallEfficiency)}</div>
            <div className="text-orange-300 text-sm">Capacity: {formatPercentage(opsData.operationalOverview.productionCapacity)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Quality Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(opsData.operationalOverview.qualityScore)}</div>
            <div className="text-green-300 text-sm">Safety: {formatPercentage(opsData.operationalOverview.safetyScore)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                On-Time Delivery
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(opsData.operationalOverview.onTimeDelivery)}</div>
            <div className="text-blue-300 text-sm">Completed: {formatNumber(opsData.operationalOverview.completedOrders)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-purple-400 mr-2" />
                Inventory Turns
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{opsData.operationalOverview.inventoryTurnover.toFixed(1)}x</div>
            <div className="text-purple-300 text-sm">DOI: {opsData.inventoryManagement.daysOfInventory.toFixed(0)} days</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Cost Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(opsData.operationalOverview.costEfficiency)}</div>
            <div className="text-cyan-300 text-sm">Waste: -{formatPercentage(opsData.operationalOverview.wasteReduction)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Factory className="w-5 h-5 text-emerald-400 mr-2" />
                Active Orders
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{opsData.operationalOverview.totalOrders}</div>
            <div className="text-emerald-300 text-sm">Pending: {opsData.operationalOverview.pendingOrders}</div>
          </div>
        </div>

        {/* Real-Time Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 text-yellow-400 mr-2" />
            Real-Time Operations Dashboard
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="font-medium text-white mb-3">Production Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Current:</span>
                  <span className="text-green-400 font-medium">{opsData.realTimeMetrics.currentProduction}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Target:</span>
                  <span className="text-blue-400">{opsData.realTimeMetrics.targetProduction}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Gap:</span>
                  <span className={`font-medium ${opsData.realTimeMetrics.productionGap < 0 ? 'text-red-400' : 'text-green-400'}`}>
                    {opsData.realTimeMetrics.productionGap}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="font-medium text-white mb-3">Equipment Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Active:</span>
                  <span className="text-green-400 font-medium">{opsData.realTimeMetrics.activeEquipment}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Total:</span>
                  <span className="text-blue-400">{opsData.realTimeMetrics.totalEquipment}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Alerts:</span>
                  <span className="text-orange-400 font-medium">{opsData.realTimeMetrics.equipmentAlerts}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="font-medium text-white mb-3">Workforce Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Active:</span>
                  <span className="text-green-400 font-medium">{opsData.realTimeMetrics.activeWorkers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Scheduled:</span>
                  <span className="text-blue-400">{opsData.realTimeMetrics.scheduledWorkers}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Shifts:</span>
                  <span className="text-purple-400 font-medium">{opsData.realTimeMetrics.currentShifts}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="font-medium text-white mb-3">Order Status</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Current:</span>
                  <span className="text-green-400 font-medium">{opsData.realTimeMetrics.currentOrders}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Urgent:</span>
                  <span className="text-red-400 font-medium">{opsData.realTimeMetrics.urgentOrders}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Quality Alerts:</span>
                  <span className="text-yellow-400 font-medium">{opsData.realTimeMetrics.qualityAlerts}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing & Supply Chain */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Factory className="w-5 h-5 text-blue-400 mr-2" />
              Manufacturing Performance
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(opsData.manufacturingMetrics.oee)}</div>
                <div className="text-blue-300 text-sm">OEE</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(opsData.manufacturingMetrics.availability)}</div>
                <div className="text-green-300 text-sm">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(opsData.manufacturingMetrics.quality)}</div>
                <div className="text-purple-300 text-sm">Quality</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Production Lines</h4>
              {opsData.manufacturingMetrics.productionLines.map((line, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{line.line}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(line.status)}`}>
                      {line.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(line.efficiency, 80, 90)}`}>
                        {formatPercentage(line.efficiency)}
                      </div>
                      <div className="text-slate-400">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-medium">{formatNumber(line.output)}</div>
                      <div className="text-slate-400">Output</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-medium">{formatPercentage(line.downtime)}</div>
                      <div className="text-slate-400">Downtime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium">{line.operators}</div>
                      <div className="text-slate-400">Operators</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Truck className="w-5 h-5 text-green-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(opsData.supplyChainMetrics.supplierPerformance)}</div>
                <div className="text-green-300 text-sm">Supplier Performance</div>
                <div className="text-gray-400 text-xs mt-1">{opsData.supplyChainMetrics.activeSuppliers} active</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(opsData.supplyChainMetrics.fillRate)}</div>
                <div className="text-blue-300 text-sm">Fill Rate</div>
                <div className="text-gray-400 text-xs mt-1">{opsData.supplyChainMetrics.leadTime.toFixed(0)} day lead time</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Key Suppliers</h4>
              {opsData.supplyChainMetrics.suppliers.slice(0, 3).map((supplier, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{supplier.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{formatCurrency(supplier.contractValue)}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(supplier.riskLevel)}`}>
                        {supplier.riskLevel}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(supplier.performance, 85, 92)}`}>
                        {formatPercentage(supplier.performance)}
                      </div>
                      <div className="text-slate-400">Performance</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(supplier.onTimeDelivery, 85, 95)}`}>
                        {formatPercentage(supplier.onTimeDelivery)}
                      </div>
                      <div className="text-slate-400">On-Time</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(supplier.qualityRating, 85, 92)}`}>
                        {formatPercentage(supplier.qualityRating)}
                      </div>
                      <div className="text-slate-400">Quality</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatCurrency(opsData.supplyChainMetrics.costSavings)}</div>
                <div className="text-slate-400">Cost Savings</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(opsData.supplyChainMetrics.supplierDiversity)}</div>
                <div className="text-slate-400">Diversity</div>
              </div>
            </div>
          </div>
        </div>

        {/* Operations Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
            Operations Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {opsData.operationsAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality & Sustainability Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Quality Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(opsData.qualityMetrics.overallQualityScore)}</div>
                <div className="text-green-300 text-sm">Quality Score</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-red-400">{formatPercentage(opsData.qualityMetrics.defectRate)}</div>
                <div className="text-red-300 text-sm">Defect Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{opsData.qualityMetrics.sigmaLevel.toFixed(1)}σ</div>
                <div className="text-purple-300 text-sm">Sigma Level</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Quality Inspections</h4>
              {opsData.qualityMetrics.qualityInspections.map((inspection, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{inspection.process}</span>
                  <div className="text-xs space-x-3">
                    <span className={`font-medium ${getPerformanceColor(inspection.passRate, 95, 98)}`}>
                      {formatPercentage(inspection.passRate)}
                    </span>
                    <span className="text-blue-400">{inspection.samples} samples</span>
                    <span className="text-red-400">{inspection.defects} defects</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-emerald-400 mr-2" />
              Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-emerald-400">{formatPercentage(opsData.sustainabilityMetrics.sustainabilityScore)}</div>
                <div className="text-emerald-300 text-sm">Sustainability Score</div>
                <div className="text-gray-400 text-xs mt-1">{opsData.sustainabilityMetrics.greenCertifications} certifications</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(opsData.sustainabilityMetrics.recyclingRate)}</div>
                <div className="text-green-300 text-sm">Recycling Rate</div>
                <div className="text-gray-400 text-xs mt-1">{opsData.sustainabilityMetrics.wasteRecycled.toFixed(1)}T recycled</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Sustainability Initiatives</h4>
              {opsData.sustainabilityMetrics.sustainabilityInitiatives.map((initiative, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{initiative.initiative}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{formatCurrency(initiative.savings)}</span>
                      <span className={`px-1 py-0.5 rounded text-xs ${initiative.impact === 'HIGH' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'}`}>
                        {initiative.impact}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Progress:</span>
                    <span className="text-cyan-400">{formatPercentage(initiative.progress)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{opsData.sustainabilityMetrics.carbonEmissions.toFixed(0)}T</div>
                <div className="text-slate-400">CO2 Emissions</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatPercentage(opsData.sustainabilityMetrics.renewableEnergy)}</div>
                <div className="text-slate-400">Renewable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}