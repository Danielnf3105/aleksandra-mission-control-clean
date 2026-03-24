// Manufacturing & Production Intelligence Center - Industrial Operations, Production Analytics & Manufacturing Optimization
import { useState, useEffect } from 'react';
import { Factory, Cog, TrendingUp, TrendingDown, Activity, Zap, AlertTriangle, CheckCircle, Clock, BarChart3, PieChart, Package } from 'lucide-react';

export default function ManufacturingProductionIntelligenceCenter() {
  const [mfgData, setMfgData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    productionOverview: {
      overallEfficiency: 87.4,
      oeeScore: 82.7, // Overall Equipment Effectiveness
      throughputRate: 94.2,
      qualityScore: 96.8,
      productionVolume: 12847, // units today
      targetVolume: 13500,
      defectRate: 2.1, // percentage
      downtimePercentage: 5.3,
      energyEfficiency: 89.7,
      wasteReduction: 23.4, // percentage vs baseline
      costPerUnit: 23.45,
      targetCostPerUnit: 24.00,
      laborProductivity: 91.6,
      maintenanceCompliance: 94.2
    },
    productionLines: [
      {
        line: 'Assembly Line A',
        status: 'RUNNING',
        efficiency: 92.4,
        oee: 89.7,
        currentProduction: 1247,
        targetProduction: 1350,
        defectRate: 1.8,
        downtime: 2.3,
        operators: 12,
        lastMaintenance: '2 days ago',
        nextMaintenance: '5 days'
      },
      {
        line: 'Assembly Line B',
        status: 'RUNNING',
        efficiency: 88.9,
        oee: 85.4,
        currentProduction: 1134,
        targetProduction: 1200,
        defectRate: 2.4,
        downtime: 4.1,
        operators: 10,
        lastMaintenance: '1 week ago',
        nextMaintenance: '3 days'
      },
      {
        line: 'Packaging Line 1',
        status: 'MAINTENANCE',
        efficiency: 0.0,
        oee: 0.0,
        currentProduction: 0,
        targetProduction: 800,
        defectRate: 0.0,
        downtime: 100.0,
        operators: 0,
        lastMaintenance: 'Now',
        nextMaintenance: 'In Progress'
      },
      {
        line: 'Packaging Line 2',
        status: 'RUNNING',
        efficiency: 94.7,
        oee: 91.2,
        currentProduction: 756,
        targetProduction: 800,
        defectRate: 1.3,
        downtime: 1.8,
        operators: 8,
        lastMaintenance: '3 days ago',
        nextMaintenance: '1 week'
      },
      {
        line: 'Quality Control',
        status: 'RUNNING',
        efficiency: 96.8,
        oee: 94.2,
        currentProduction: 2847,
        targetProduction: 2950,
        defectRate: 2.1,
        downtime: 2.1,
        operators: 15,
        lastMaintenance: '1 day ago',
        nextMaintenance: '2 weeks'
      },
      {
        line: 'Finishing Line',
        status: 'IDLE',
        efficiency: 0.0,
        oee: 0.0,
        currentProduction: 0,
        targetProduction: 600,
        defectRate: 0.0,
        downtime: 100.0,
        operators: 0,
        lastMaintenance: '5 days ago',
        nextMaintenance: '2 days'
      }
    ],
    equipmentStatus: {
      totalEquipment: 156,
      operationalEquipment: 134,
      maintenanceEquipment: 12,
      faultyEquipment: 10,
      equipmentUtilization: 87.9,
      mtbf: 456.7, // Mean Time Between Failures (hours)
      mttr: 4.2, // Mean Time To Repair (hours)
      maintenanceCosts: 234567,
      equipmentCategories: [
        { category: 'CNC Machines', total: 23, operational: 21, maintenance: 1, faulty: 1, utilization: 91.3, efficiency: 89.7 },
        { category: 'Robotic Arms', total: 18, operational: 17, maintenance: 1, faulty: 0, utilization: 94.4, efficiency: 92.1 },
        { category: 'Conveyor Systems', total: 34, operational: 32, maintenance: 2, faulty: 0, utilization: 94.1, efficiency: 88.9 },
        { category: 'Quality Inspection', total: 12, operational: 11, maintenance: 0, faulty: 1, utilization: 91.7, efficiency: 96.2 },
        { category: 'Packaging Machines', total: 15, operational: 12, maintenance: 2, faulty: 1, utilization: 80.0, efficiency: 87.4 },
        { category: 'Material Handling', total: 28, operational: 25, maintenance: 2, faulty: 1, utilization: 89.3, efficiency: 85.7 },
        { category: 'Testing Equipment', total: 26, operational: 16, maintenance: 4, faulty: 6, utilization: 61.5, efficiency: 78.9 }
      ],
      predictiveMaintenance: {
        alertsGenerated: 23,
        scheduledMaintenance: 45,
        emergencyRepairs: 8,
        preventedFailures: 67,
        costSavings: 123456,
        accuracyRate: 89.7
      }
    },
    qualityControl: {
      overallQualityScore: 96.8,
      defectRate: 2.1,
      firstPassYield: 94.7,
      customerReturns: 0.8, // percentage
      qualityInspections: 2847,
      passedInspections: 2751,
      failedInspections: 96,
      reworkRequired: 134,
      scrapGenerated: 1.4, // percentage
      qualityStandards: [
        { standard: 'ISO 9001', compliance: 98.9, lastAudit: '3 months ago', findings: 2 },
        { standard: 'Six Sigma', compliance: 94.7, implementation: 87.9, projects: 12 },
        { standard: 'Lean Manufacturing', compliance: 91.3, implementation: 89.4, initiatives: 23 },
        { standard: 'FDA Compliance', compliance: 97.8, lastInspection: '6 months ago', findings: 1 }
      ],
      qualityMetrics: {
        defectsPerMillion: 21000,
        processCapability: 1.67, // Cpk
        customerSatisfaction: 94.2,
        qualityTraining: 89.7,
        correctiveActions: 23,
        preventiveActions: 45
      }
    },
    supplyChain: {
      supplierPerformance: 89.7,
      inventoryTurnover: 12.4,
      stockoutRate: 2.3, // percentage
      leadTimeVariance: 15.7, // percentage
      supplierOnTimeDelivery: 94.2,
      rawMaterialInventory: 2847000, // value in dollars
      wip: 567000, // Work in Progress value
      finishedGoods: 1234000,
      inventoryAccuracy: 97.8,
      materialUtilization: 92.4,
      suppliers: [
        { supplier: 'Alpha Materials', performance: 94.7, onTime: 97.8, quality: 96.2, cost: 89.4 },
        { supplier: 'Beta Components', performance: 87.9, onTime: 89.7, quality: 94.2, cost: 91.3 },
        { supplier: 'Gamma Supplies', performance: 91.3, onTime: 94.2, quality: 89.7, cost: 93.8 },
        { supplier: 'Delta Materials', performance: 86.4, onTime: 87.9, quality: 91.3, cost: 88.9 },
        { supplier: 'Epsilon Parts', performance: 92.7, onTime: 96.4, quality: 92.1, cost: 89.7 }
      ]
    },
    workforce: {
      totalWorkers: 456,
      presentWorkers: 423,
      absenteeism: 7.2, // percentage
      productivity: 91.6,
      skillLevel: 87.4,
      trainingCompliance: 94.2,
      safetyIncidents: 3,
      certifications: 234,
      overtime: 12.4, // percentage of regular hours
      laborCostPerHour: 28.45,
      shifts: [
        { shift: 'Day Shift', workers: 178, attendance: 96.1, productivity: 93.2, supervisor: 'John Smith' },
        { shift: 'Evening Shift', workers: 145, attendance: 91.7, productivity: 89.4, supervisor: 'Jane Doe' },
        { shift: 'Night Shift', workers: 100, attendance: 88.0, productivity: 87.9, supervisor: 'Mike Johnson' },
        { shift: 'Weekend Shift', workers: 33, attendance: 84.8, productivity: 85.7, supervisor: 'Sarah Wilson' }
      ],
      skillCategories: [
        { skill: 'Machine Operation', workers: 156, certified: 134, proficiency: 89.7 },
        { skill: 'Quality Control', workers: 45, certified: 43, proficiency: 94.2 },
        { skill: 'Maintenance', workers: 34, certified: 32, proficiency: 91.8 },
        { skill: 'Material Handling', workers: 67, certified: 59, proficiency: 87.9 },
        { skill: 'Safety Operations', workers: 456, certified: 429, proficiency: 96.8 }
      ]
    },
    manufacturingAlerts: [
      {
        type: 'CRITICAL',
        category: 'Equipment Failure',
        message: 'Packaging Line 1 offline due to servo motor failure - estimated repair time 4 hours',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Maintenance Team',
        timestamp: '01:45',
        recommendations: ['Deploy backup equipment', 'Expedite servo motor replacement', 'Redirect production flow']
      },
      {
        type: 'WARNING',
        category: 'Quality Control',
        message: 'Defect rate increased to 2.4% on Assembly Line B - above 2.0% threshold',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Quality Team',
        timestamp: '01:40',
        recommendations: ['Inspect calibration', 'Review operator training', 'Check material quality']
      },
      {
        type: 'SUCCESS',
        category: 'Productivity',
        message: 'Assembly Line A achieved 94.7% efficiency - exceeding 90% target for 3rd consecutive day',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Production Team',
        timestamp: '01:35',
        recommendations: ['Document best practices', 'Share success factors', 'Consider replication']
      },
      {
        type: 'INFO',
        category: 'Maintenance',
        message: 'Predictive maintenance alerts suggest CNC Machine #7 needs attention within 48 hours',
        impact: 'LOW',
        actionRequired: true,
        assignedTo: 'Predictive Maintenance Team',
        timestamp: '01:30',
        recommendations: ['Schedule inspection', 'Order replacement parts', 'Plan maintenance window']
      }
    ],
    energyConsumption: {
      totalConsumption: 4567, // kWh today
      targetConsumption: 4800,
      energyEfficiency: 89.7,
      costPerKwh: 0.12,
      totalEnergyCost: 548.04,
      peakDemand: 789, // kW
      consumptionByArea: [
        { area: 'Assembly Lines', consumption: 1890, percentage: 41.4, efficiency: 87.9 },
        { area: 'HVAC Systems', consumption: 1234, percentage: 27.0, efficiency: 82.4 },
        { area: 'Lighting', consumption: 567, percentage: 12.4, efficiency: 94.7 },
        { area: 'Compressed Air', consumption: 456, percentage: 10.0, efficiency: 78.9 },
        { area: 'Material Handling', consumption: 234, percentage: 5.1, efficiency: 91.3 },
        { area: 'Office Areas', consumption: 186, percentage: 4.1, efficiency: 89.7 }
      ],
      renewableEnergy: 23.4, // percentage
      carbonFootprint: 2.1, // tons CO2 today
      energySavingInitiatives: [
        { initiative: 'LED Lighting Upgrade', savings: 234, investment: 45000, payback: 4.8 },
        { initiative: 'Motor Efficiency Program', savings: 456, investment: 89000, payback: 6.2 },
        { initiative: 'HVAC Optimization', savings: 321, investment: 67000, payback: 5.1 },
        { initiative: 'Compressed Air Leak Detection', savings: 123, investment: 23000, payback: 3.7 }
      ]
    },
    kpis: {
      oee: 82.7,
      efficiency: 87.4,
      availability: 94.7,
      performance: 89.2,
      quality: 96.8,
      throughput: 94.2,
      cycleTime: 23.4, // minutes
      setupTime: 12.7, // minutes
      yieldRate: 97.9,
      scrapRate: 1.4,
      reworkRate: 2.1,
      costPerUnit: 23.45,
      laborProductivity: 91.6,
      equipmentUtilization: 87.9,
      inventoryTurnover: 12.4,
      customerSatisfaction: 94.2,
      onTimeDelivery: 96.8,
      firstPassYield: 94.7
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMfgData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        productionOverview: {
          ...prev.productionOverview,
          overallEfficiency: Math.max(80, Math.min(95, prev.productionOverview.overallEfficiency + (Math.random() - 0.5) * 2)),
          oeeScore: Math.max(75, Math.min(90, prev.productionOverview.oeeScore + (Math.random() - 0.5) * 1.5)),
          productionVolume: Math.max(11000, Math.min(14000, prev.productionOverview.productionVolume + Math.floor(Math.random() * 100) - 50)),
          defectRate: Math.max(1, Math.min(5, prev.productionOverview.defectRate + (Math.random() - 0.5) * 0.5))
        },
        equipmentStatus: {
          ...prev.equipmentStatus,
          operationalEquipment: Math.max(120, Math.min(140, prev.equipmentStatus.operationalEquipment + Math.floor(Math.random() * 6) - 3)),
          equipmentUtilization: Math.max(80, Math.min(95, prev.equipmentStatus.equipmentUtilization + (Math.random() - 0.5) * 2))
        }
      }));
    }, 16000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'RUNNING': return 'text-green-400 bg-green-400/20';
      case 'MAINTENANCE': return 'text-yellow-400 bg-yellow-400/20';
      case 'IDLE': return 'text-gray-400 bg-gray-400/20';
      case 'FAULT': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
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

  const getTrendIcon = (current, target) => {
    const percentage = (current / target) * 100;
    if (percentage >= 95) return <TrendingUp className="w-3 h-3 text-green-400" />;
    if (percentage >= 85) return <span className="w-3 h-3 text-yellow-400">→</span>;
    return <TrendingDown className="w-3 h-3 text-red-400" />;
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
              <Factory className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Manufacturing & Production Intelligence Center</h1>
              <p className="text-orange-300">Industrial operations, production analytics, quality control & manufacturing optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-orange-400">{mfgData.currentTime}</div>
            <div className="text-orange-300">Manufacturing Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Production Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Factory className="w-5 h-5 text-orange-400 mr-2" />
                Overall Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(mfgData.productionOverview.overallEfficiency)}</div>
            <div className="text-orange-300 text-sm">OEE: {formatPercentage(mfgData.productionOverview.oeeScore)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-blue-400 mr-2" />
                Production Volume
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(mfgData.productionOverview.productionVolume)}</div>
            <div className="text-blue-300 text-sm">Target: {formatNumber(mfgData.productionOverview.targetVolume)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Quality Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(mfgData.productionOverview.qualityScore)}</div>
            <div className="text-green-300 text-sm">Defects: {formatPercentage(mfgData.productionOverview.defectRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Energy Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(mfgData.productionOverview.energyEfficiency)}</div>
            <div className="text-yellow-300 text-sm">Cost: {formatCurrency(mfgData.energyConsumption.totalEnergyCost)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-purple-400 mr-2" />
                Downtime
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(mfgData.productionOverview.downtimePercentage)}</div>
            <div className="text-purple-300 text-sm">Maintenance: {mfgData.equipmentStatus.maintenanceEquipment}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Cost per Unit
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">${mfgData.productionOverview.costPerUnit}</div>
            <div className="text-cyan-300 text-sm">Target: ${mfgData.productionOverview.targetCostPerUnit}</div>
          </div>
        </div>

        {/* Production Lines Status */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Cog className="w-5 h-5 text-blue-400 mr-2" />
            Production Lines Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Line</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                  <th className="text-center p-3 text-slate-300">Efficiency</th>
                  <th className="text-center p-3 text-slate-300">OEE</th>
                  <th className="text-center p-3 text-slate-300">Production</th>
                  <th className="text-center p-3 text-slate-300">Target</th>
                  <th className="text-center p-3 text-slate-300">Defect Rate</th>
                  <th className="text-center p-3 text-slate-300">Operators</th>
                  <th className="text-center p-3 text-slate-300">Next Maintenance</th>
                </tr>
              </thead>
              <tbody>
                {mfgData.productionLines.map((line, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{line.line}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(line.status)}`}>
                        {line.status}
                      </span>
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(line.efficiency, 80, 90)}`}>
                      {formatPercentage(line.efficiency)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(line.oee, 75, 85)}`}>
                      {formatPercentage(line.oee)}
                    </td>
                    <td className="p-3 text-center text-blue-400">{line.currentProduction}</td>
                    <td className="p-3 text-center text-green-400">{line.targetProduction}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(line.defectRate, 3, 2, true)}`}>
                      {formatPercentage(line.defectRate)}
                    </td>
                    <td className="p-3 text-center text-purple-400">{line.operators}</td>
                    <td className="p-3 text-center text-slate-400 text-sm">{line.nextMaintenance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Equipment Status & Quality Control */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cog className="w-5 h-5 text-cyan-400 mr-2" />
              Equipment Status Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{mfgData.equipmentStatus.operationalEquipment}</div>
                <div className="text-cyan-300 text-sm">Operational</div>
                <div className="text-gray-400 text-xs mt-1">Total: {mfgData.equipmentStatus.totalEquipment}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(mfgData.equipmentStatus.equipmentUtilization)}</div>
                <div className="text-green-300 text-sm">Utilization</div>
                <div className="text-gray-400 text-xs mt-1">MTBF: {mfgData.equipmentStatus.mtbf.toFixed(0)}h</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Equipment Categories</h4>
              {mfgData.equipmentStatus.equipmentCategories.slice(0, 5).map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{category.operational}</span>
                      <span className="text-orange-400 text-sm">{category.maintenance}</span>
                      <span className="text-red-400 text-sm">{category.faulty}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300">Utilization: {formatPercentage(category.utilization)}</span>
                    <span className={`${getPerformanceColor(category.efficiency, 80, 90)}`}>
                      Efficiency: {formatPercentage(category.efficiency)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{mfgData.equipmentStatus.maintenanceEquipment}</div>
                <div className="text-slate-400">Maintenance</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{mfgData.equipmentStatus.faultyEquipment}</div>
                <div className="text-slate-400">Faulty</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{mfgData.equipmentStatus.mttr.toFixed(1)}h</div>
                <div className="text-slate-400">MTTR</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Quality Control Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(mfgData.qualityControl.overallQualityScore)}</div>
                <div className="text-green-300 text-sm">Quality Score</div>
                <div className="text-gray-400 text-xs mt-1">Defects: {formatPercentage(mfgData.qualityControl.defectRate)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(mfgData.qualityControl.firstPassYield)}</div>
                <div className="text-blue-300 text-sm">First Pass Yield</div>
                <div className="text-gray-400 text-xs mt-1">Returns: {formatPercentage(mfgData.qualityControl.customerReturns)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Quality Standards</h4>
              {mfgData.qualityControl.qualityStandards.map((standard, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{standard.standard}</span>
                  <div className="text-xs space-x-2">
                    <span className={`${getPerformanceColor(standard.compliance, 90, 95)}`}>
                      {formatPercentage(standard.compliance)}
                    </span>
                    {standard.findings !== undefined && (
                      <span className="text-orange-400">{standard.findings} findings</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{mfgData.qualityControl.reworkRequired}</div>
                <div className="text-slate-400">Rework</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{formatPercentage(mfgData.qualityControl.scrapGenerated)}</div>
                <div className="text-slate-400">Scrap</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatNumber(mfgData.qualityControl.qualityMetrics.defectsPerMillion)}</div>
                <div className="text-slate-400">DPM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Manufacturing Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mfgData.manufacturingAlerts.map((alert, index) => (
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

        {/* Supply Chain & Workforce */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 text-purple-400 mr-2" />
              Supply Chain Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(mfgData.supplyChain.supplierPerformance)}</div>
                <div className="text-purple-300 text-sm">Supplier Performance</div>
                <div className="text-gray-400 text-xs mt-1">On-Time: {formatPercentage(mfgData.supplyChain.supplierOnTimeDelivery)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{mfgData.supplyChain.inventoryTurnover.toFixed(1)}</div>
                <div className="text-green-300 text-sm">Inventory Turnover</div>
                <div className="text-gray-400 text-xs mt-1">Stockout: {formatPercentage(mfgData.supplyChain.stockoutRate)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Top Suppliers</h4>
              {mfgData.supplyChain.suppliers.map((supplier, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-2 border border-slate-600/30">
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm">{supplier.supplier}</span>
                    <div className="flex items-center space-x-2 text-xs">
                      <span className={`${getPerformanceColor(supplier.performance, 85, 92)}`}>
                        {formatPercentage(supplier.performance)}
                      </span>
                      <span className="text-blue-400">{formatPercentage(supplier.onTime)}</span>
                      <span className="text-green-400">{formatPercentage(supplier.quality)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatCurrency(mfgData.supplyChain.rawMaterialInventory)}</div>
                <div className="text-slate-400">Raw Materials</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{formatCurrency(mfgData.supplyChain.wip)}</div>
                <div className="text-slate-400">WIP</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatCurrency(mfgData.supplyChain.finishedGoods)}</div>
                <div className="text-slate-400">Finished Goods</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-emerald-400 mr-2" />
              Workforce Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{mfgData.workforce.presentWorkers}</div>
                <div className="text-emerald-300 text-sm">Present Workers</div>
                <div className="text-gray-400 text-xs mt-1">Total: {mfgData.workforce.totalWorkers}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(mfgData.workforce.productivity)}</div>
                <div className="text-blue-300 text-sm">Productivity</div>
                <div className="text-gray-400 text-xs mt-1">Skill: {formatPercentage(mfgData.workforce.skillLevel)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Shift Performance</h4>
              {mfgData.workforce.shifts.map((shift, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{shift.shift}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{shift.workers}</span>
                    <span className={`${getPerformanceColor(shift.attendance, 85, 92)}`}>
                      {formatPercentage(shift.attendance)}
                    </span>
                    <span className={`${getPerformanceColor(shift.productivity, 85, 90)}`}>
                      {formatPercentage(shift.productivity)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatPercentage(mfgData.workforce.absenteeism)}</div>
                <div className="text-slate-400">Absenteeism</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{mfgData.workforce.safetyIncidents}</div>
                <div className="text-slate-400">Safety Incidents</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{mfgData.workforce.certifications}</div>
                <div className="text-slate-400">Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}