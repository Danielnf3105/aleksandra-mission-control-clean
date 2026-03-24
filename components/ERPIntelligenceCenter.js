// ERP Intelligence Center - Enterprise Resource Planning, Supply Chain & Operations Optimization
import { useState, useEffect } from 'react';
import { Layers, Package, TrendingUp, Clock, Zap, AlertTriangle, CheckCircle, DollarSign, Users, BarChart3, Settings } from 'lucide-react';

export default function ERPIntelligenceCenter() {
  const [erpData, setErpData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    resourceOverview: {
      totalInventory: 2456789,
      inventoryValue: 3456789,
      lowStockItems: 23,
      outOfStockItems: 7,
      totalOrders: 1234,
      pendingOrders: 234,
      processedOrders: 567,
      shippedOrders: 433,
      totalSuppliers: 89,
      activeSuppliers: 67,
      totalProducts: 1456,
      activeProducts: 1234,
      warehouseUtilization: 78.9,
      turnoverRate: 12.4,
      fillRate: 94.7,
      onTimeDelivery: 92.3
    },
    supplyChainMetrics: [
      {
        category: 'Procurement',
        metrics: [
          { name: 'Purchase Orders', value: 234, target: 200, unit: 'number', trend: '+17.0%', status: 'ABOVE_TARGET' },
          { name: 'Supplier Performance', value: 94.7, target: 90.0, unit: 'percentage', trend: '+5.2%', status: 'EXCEEDING' },
          { name: 'Cost Savings', value: 156789, target: 120000, unit: 'currency', trend: '+30.7%', status: 'EXCEEDING' },
          { name: 'Lead Time', value: 12.4, target: 15.0, unit: 'days', trend: '-17.3%', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Inventory',
        metrics: [
          { name: 'Stock Accuracy', value: 98.7, target: 95.0, unit: 'percentage', trend: '+3.9%', status: 'EXCEEDING' },
          { name: 'Turnover Ratio', value: 12.4, target: 10.0, unit: 'ratio', trend: '+24.0%', status: 'EXCEEDING' },
          { name: 'Carrying Cost', value: 234567, target: 300000, unit: 'currency', trend: '-21.8%', status: 'EXCEEDING' },
          { name: 'Stockout Rate', value: 2.3, target: 5.0, unit: 'percentage', trend: '-54.0%', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Production',
        metrics: [
          { name: 'Production Efficiency', value: 89.4, target: 85.0, unit: 'percentage', trend: '+5.2%', status: 'EXCEEDING' },
          { name: 'Quality Rate', value: 97.8, target: 95.0, unit: 'percentage', trend: '+2.9%', status: 'EXCEEDING' },
          { name: 'Equipment Uptime', value: 94.6, target: 90.0, unit: 'percentage', trend: '+5.1%', status: 'EXCEEDING' },
          { name: 'Cycle Time', value: 23.4, target: 30.0, unit: 'hours', trend: '-22.0%', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Distribution',
        metrics: [
          { name: 'On-Time Delivery', value: 92.3, target: 90.0, unit: 'percentage', trend: '+2.6%', status: 'EXCEEDING' },
          { name: 'Shipping Cost', value: 45678, target: 50000, unit: 'currency', trend: '-8.6%', status: 'EXCEEDING' },
          { name: 'Order Accuracy', value: 96.7, target: 95.0, unit: 'percentage', trend: '+1.8%', status: 'EXCEEDING' },
          { name: 'Delivery Speed', value: 2.1, target: 3.0, unit: 'days', trend: '-30.0%', status: 'EXCEEDING' }
        ]
      }
    ],
    inventoryAnalysis: [
      {
        category: 'Raw Materials',
        totalValue: 1234567,
        items: 234,
        turnover: 15.6,
        avgAge: 23.4,
        lowStock: 12,
        outOfStock: 3,
        utilization: 87.9,
        forecast: '+12.4%',
        riskLevel: 'LOW',
        reorderPoints: 45,
        safety: 89.7
      },
      {
        category: 'Work in Progress',
        totalValue: 567890,
        items: 89,
        turnover: 8.9,
        avgAge: 12.3,
        lowStock: 5,
        outOfStock: 2,
        utilization: 76.4,
        forecast: '+8.7%',
        riskLevel: 'MEDIUM',
        reorderPoints: 23,
        safety: 78.4
      },
      {
        category: 'Finished Goods',
        totalValue: 1654332,
        items: 456,
        turnover: 18.9,
        avgAge: 18.7,
        lowStock: 6,
        outOfStock: 2,
        utilization: 92.3,
        forecast: '+15.6%',
        riskLevel: 'LOW',
        reorderPoints: 67,
        safety: 94.2
      },
      {
        category: 'Spare Parts',
        totalValue: 89012,
        items: 123,
        turnover: 4.5,
        avgAge: 89.4,
        lowStock: 0,
        outOfStock: 0,
        utilization: 34.6,
        forecast: '+2.3%',
        riskLevel: 'LOW',
        reorderPoints: 12,
        safety: 100.0
      }
    ],
    supplierPerformance: [
      {
        supplier: 'GlobalTech Materials',
        category: 'Electronics',
        performance: 97.8,
        onTimeDelivery: 96.4,
        qualityScore: 98.7,
        costEfficiency: 89.2,
        totalOrders: 145,
        orderValue: 456789,
        leadTime: 8.4,
        defectRate: 1.3,
        riskLevel: 'LOW',
        certification: 'ISO 9001',
        relationship: 'STRATEGIC',
        renewalDate: '2026-12-15'
      },
      {
        supplier: 'Pacific Steel Works',
        category: 'Raw Materials',
        performance: 89.4,
        onTimeDelivery: 87.6,
        qualityScore: 94.2,
        costEfficiency: 92.3,
        totalOrders: 89,
        orderValue: 234567,
        leadTime: 12.7,
        defectRate: 5.8,
        riskLevel: 'MEDIUM',
        certification: 'ISO 14001',
        relationship: 'PREFERRED',
        renewalDate: '2026-08-30'
      },
      {
        supplier: 'Regional Logistics Co',
        category: 'Transportation',
        performance: 92.6,
        onTimeDelivery: 94.3,
        qualityScore: 89.7,
        costEfficiency: 94.8,
        totalOrders: 234,
        orderValue: 123456,
        leadTime: 5.2,
        defectRate: 2.1,
        riskLevel: 'LOW',
        certification: 'NVOCC',
        relationship: 'APPROVED',
        renewalDate: '2027-03-15'
      },
      {
        supplier: 'Metro Parts Supply',
        category: 'Components',
        performance: 76.8,
        onTimeDelivery: 72.3,
        qualityScore: 84.7,
        costEfficiency: 73.4,
        totalOrders: 67,
        orderValue: 78901,
        leadTime: 18.9,
        defectRate: 15.3,
        riskLevel: 'HIGH',
        certification: 'None',
        relationship: 'PROBATION',
        renewalDate: '2026-06-30'
      }
    ],
    operationalEfficiency: [
      {
        department: 'Manufacturing',
        efficiency: 89.4,
        productivity: 112.7,
        utilization: 87.9,
        quality: 97.8,
        downtime: 2.4,
        maintenance: 5.6,
        energyUsage: 234567,
        wastage: 3.2,
        employees: 145,
        outputPerHour: 156.7,
        costPerUnit: 23.45,
        target: 85.0,
        trend: 'IMPROVING',
        status: 'EXCELLENT'
      },
      {
        department: 'Warehousing',
        efficiency: 78.9,
        productivity: 89.4,
        utilization: 78.9,
        quality: 94.6,
        downtime: 1.2,
        maintenance: 3.4,
        energyUsage: 89012,
        wastage: 1.8,
        employees: 67,
        outputPerHour: 89.4,
        costPerUnit: 12.34,
        target: 80.0,
        trend: 'STABLE',
        status: 'GOOD'
      },
      {
        department: 'Quality Control',
        efficiency: 94.7,
        productivity: 78.9,
        utilization: 89.4,
        quality: 98.9,
        downtime: 0.8,
        maintenance: 2.1,
        energyUsage: 23456,
        wastage: 0.3,
        employees: 23,
        outputPerHour: 45.6,
        costPerUnit: 5.67,
        target: 90.0,
        trend: 'IMPROVING',
        status: 'EXCELLENT'
      },
      {
        department: 'Logistics',
        efficiency: 87.6,
        productivity: 94.3,
        utilization: 92.8,
        quality: 92.3,
        downtime: 3.4,
        maintenance: 6.7,
        energyUsage: 67890,
        wastage: 4.2,
        employees: 89,
        outputPerHour: 78.9,
        costPerUnit: 8.90,
        target: 85.0,
        trend: 'IMPROVING',
        status: 'GOOD'
      }
    ],
    resourceAlerts: [
      {
        type: 'CRITICAL',
        category: 'Inventory Management',
        message: '7 items out of stock - production line impact risk detected',
        metric: 'Stock Level',
        value: '0 units',
        change: 'Critical shortage',
        impact: 'HIGH',
        timestamp: '08:21',
        department: 'Inventory',
        affectedProducts: ['Component A-123', 'Material B-456', 'Part C-789'],
        recommendation: 'Emergency procurement, activate backup suppliers',
        urgency: 'CRITICAL',
        escalation: 'SUPPLY_CHAIN_MANAGER'
      },
      {
        type: 'WARNING',
        category: 'Supplier Performance',
        message: 'Metro Parts Supply performance dropped to 76.8% - contract review required',
        metric: 'Supplier Score',
        value: '76.8%',
        change: '-12.4% decline',
        impact: 'MODERATE',
        timestamp: '08:20',
        supplier: 'Metro Parts Supply',
        affectedOrders: 15,
        recommendation: 'Performance review meeting, consider alternative suppliers',
        urgency: 'HIGH',
        technicalAction: 'SUPPLIER_AUDIT'
      },
      {
        type: 'SUCCESS',
        category: 'Production Efficiency',
        message: 'Manufacturing efficiency reached 89.4% - exceeding target by 4.4%',
        metric: 'Production Efficiency',
        value: '89.4%',
        change: '+4.4% above target',
        impact: 'POSITIVE',
        timestamp: '08:19',
        department: 'Manufacturing',
        contribution: 'Process optimization and team training',
        recommendation: 'Document best practices, share with other facilities',
        urgency: 'LOW',
        opportunity: 'KNOWLEDGE_TRANSFER'
      },
      {
        type: 'INFO',
        category: 'Cost Optimization',
        message: 'Procurement savings exceeded target by $36.8K (+30.7%) this quarter',
        metric: 'Cost Savings',
        value: '$156.8K',
        change: '+30.7% above target',
        impact: 'MAJOR',
        timestamp: '08:18',
        department: 'Procurement',
        savings: 'Supplier renegotiation and bulk purchasing',
        recommendation: 'Expand successful negotiation strategies',
        urgency: 'LOW',
        opportunity: 'STRATEGIC_SOURCING'
      }
    ],
    resourceOptimization: [
      {
        resource: 'Warehouse Space',
        currentUtilization: 78.9,
        optimalRange: [70, 85],
        efficiency: 'GOOD',
        recommendation: 'Optimal utilization - monitor seasonal variations',
        potentialSavings: 0,
        risk: 'LOW',
        nextReview: '2026-04-01'
      },
      {
        resource: 'Production Capacity',
        currentUtilization: 87.9,
        optimalRange: [80, 90],
        efficiency: 'EXCELLENT',
        recommendation: 'Consider capacity expansion for Q3 demand',
        potentialSavings: 0,
        risk: 'LOW',
        nextReview: '2026-05-15'
      },
      {
        resource: 'Transportation Fleet',
        currentUtilization: 92.8,
        optimalRange: [75, 85],
        efficiency: 'OVER_UTILIZED',
        recommendation: 'Add 2 vehicles or optimize routes',
        potentialSavings: 23456,
        risk: 'MEDIUM',
        nextReview: '2026-03-25'
      },
      {
        resource: 'Energy Consumption',
        currentUtilization: 89.4,
        optimalRange: [60, 80],
        efficiency: 'HIGH',
        recommendation: 'Implement energy-saving initiatives',
        potentialSavings: 45678,
        risk: 'MEDIUM',
        nextReview: '2026-04-10'
      },
      {
        resource: 'Human Resources',
        currentUtilization: 94.3,
        optimalRange: [85, 95],
        efficiency: 'EXCELLENT',
        recommendation: 'Monitor overtime and hire 3 additional staff',
        potentialSavings: 12345,
        risk: 'LOW',
        nextReview: '2026-04-01'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setErpData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        resourceOverview: {
          ...prev.resourceOverview,
          totalOrders: Math.max(1230, Math.min(1240, prev.resourceOverview.totalOrders + Math.floor((Math.random() - 0.5) * 6))),
          pendingOrders: Math.max(230, Math.min(240, prev.resourceOverview.pendingOrders + Math.floor((Math.random() - 0.5) * 4))),
          warehouseUtilization: Math.max(78.0, Math.min(80.0, prev.resourceOverview.warehouseUtilization + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 32000);

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
      case 'EXCEEDING': return 'text-green-400 bg-green-400/20';
      case 'ABOVE_TARGET': return 'text-blue-400 bg-blue-400/20';
      case 'MEETING': return 'text-cyan-400 bg-cyan-400/20';
      case 'BELOW_TARGET': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskLevelColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (performance, good = 70, excellent = 85) => {
    if (performance >= excellent) return 'text-green-400';
    if (performance >= good) return 'text-blue-400';
    if (performance >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'IMPROVING': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'DECLINING': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRelationshipColor = (relationship) => {
    switch (relationship) {
      case 'STRATEGIC': return 'text-purple-400 bg-purple-400/20';
      case 'PREFERRED': return 'text-blue-400 bg-blue-400/20';
      case 'APPROVED': return 'text-green-400 bg-green-400/20';
      case 'PROBATION': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getEfficiencyColor = (efficiency) => {
    switch (efficiency) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'OVER_UTILIZED': return 'text-orange-400 bg-orange-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;

  return (
    <div className="h-full bg-gradient-to-br from-orange-900 via-slate-900 to-red-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-orange-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
              <Layers className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">ERP Intelligence Center</h1>
              <p className="text-orange-300">Enterprise resource planning, supply chain & operations optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-orange-400">{erpData.currentTime}</div>
            <div className="text-orange-300">ERP Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Resource Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-orange-400 mr-2" />
                Inventory
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(erpData.resourceOverview.totalInventory)}</div>
            <div className="text-orange-300 text-sm">{formatCurrency(erpData.resourceOverview.inventoryValue)} Value</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
                Orders
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{erpData.resourceOverview.totalOrders}</div>
            <div className="text-green-300 text-sm">{erpData.resourceOverview.pendingOrders} Pending</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Suppliers
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{erpData.resourceOverview.activeSuppliers}</div>
            <div className="text-blue-300 text-sm">{erpData.resourceOverview.totalSuppliers} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                Turnover
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{erpData.resourceOverview.turnoverRate.toFixed(1)}</div>
            <div className="text-purple-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-cyan-400 mr-2" />
                Delivery
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getPerformanceColor(erpData.resourceOverview.onTimeDelivery, 85, 92)}`}>
              {formatPercentage(erpData.resourceOverview.onTimeDelivery)}
            </div>
            <div className="text-cyan-300 text-sm">On-Time</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-yellow-400 mr-2" />
                Utilization
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getPerformanceColor(erpData.resourceOverview.warehouseUtilization, 70, 85)}`}>
              {formatPercentage(erpData.resourceOverview.warehouseUtilization)}
            </div>
            <div className="text-yellow-300 text-sm">Warehouse</div>
          </div>
        </div>

        {/* Supply Chain Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Zap className="w-5 h-5 text-orange-400 mr-2" />
            Supply Chain Performance Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {erpData.supplyChainMetrics.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h4 className="text-white font-medium text-lg text-center">{category.category}</h4>
                {category.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">{metric.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(metric.status)}`}>
                        {metric.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {metric.unit === 'currency' ? formatCurrency(metric.value) :
                       metric.unit === 'percentage' ? formatPercentage(metric.value) :
                       metric.unit === 'ratio' ? metric.value.toFixed(1) :
                       metric.unit === 'days' ? `${metric.value.toFixed(1)} days` :
                       formatNumber(metric.value)}
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">
                        Target: {metric.unit === 'currency' ? formatCurrency(metric.target) :
                                metric.unit === 'percentage' ? formatPercentage(metric.target) :
                                metric.unit === 'ratio' ? metric.target.toFixed(1) :
                                metric.unit === 'days' ? `${metric.target.toFixed(1)}d` :
                                formatNumber(metric.target)}
                      </span>
                      <span className="text-green-400">{metric.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Analysis & Supplier Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package className="w-5 h-5 text-green-400 mr-2" />
              Inventory Category Analysis
            </h3>
            <div className="space-y-4">
              {erpData.inventoryAnalysis.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskLevelColor(category.riskLevel)}`}>
                        {category.riskLevel} Risk
                      </span>
                      <span className="text-cyan-400 text-xs">{formatPercentage(category.safety)} Safe</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Value: {formatCurrency(category.totalValue)}</div>
                    <div className="text-blue-400">Items: {category.items}</div>
                    <div className="text-purple-400">Turnover: {category.turnover.toFixed(1)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Age: {category.avgAge.toFixed(0)} days</div>
                    <div className="text-yellow-400">Low Stock: {category.lowStock}</div>
                    <div className="text-red-400">Out: {category.outOfStock}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Utilization:</strong> {formatPercentage(category.utilization)} • <strong>Forecast:</strong> {category.forecast} • <strong>Reorder:</strong> {category.reorderPoints}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              Supplier Performance Intelligence
            </h3>
            <div className="space-y-4">
              {erpData.supplierPerformance.map((supplier, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{supplier.supplier}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRelationshipColor(supplier.relationship)}`}>
                        {supplier.relationship}
                      </span>
                      <span className={`text-sm ${getPerformanceColor(supplier.performance, 80, 90)}`}>
                        {supplier.performance.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Orders: {supplier.totalOrders}</div>
                    <div className="text-purple-400">Value: {formatCurrency(supplier.orderValue)}</div>
                    <div className="text-orange-400">Lead: {supplier.leadTime.toFixed(1)}d</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getPerformanceColor(supplier.onTimeDelivery, 85, 92)}`}>Delivery: {formatPercentage(supplier.onTimeDelivery)}</div>
                    <div className={`${getPerformanceColor(supplier.qualityScore, 90, 95)}`}>Quality: {formatPercentage(supplier.qualityScore)}</div>
                    <div className="text-red-400">Defects: {formatPercentage(supplier.defectRate)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Category:</strong> {supplier.category} • <strong>Cert:</strong> {supplier.certification} • <strong>Renewal:</strong> {supplier.renewalDate}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Operational Efficiency & Resource Optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
              Operational Efficiency Analytics
            </h3>
            <div className="space-y-4">
              {erpData.operationalEfficiency.map((dept, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{dept.department}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getEfficiencyColor(dept.status)}`}>
                        {dept.status}
                      </span>
                      <span className={`text-sm ${getTrendColor(dept.trend)}`}>
                        {dept.trend === 'IMPROVING' ? '↗' : dept.trend === 'DECLINING' ? '↘' : '→'}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getPerformanceColor(dept.efficiency, 75, 85)}`}>Efficiency: {formatPercentage(dept.efficiency)}</div>
                    <div className="text-blue-400">Productivity: {formatPercentage(dept.productivity)}</div>
                    <div className="text-purple-400">Quality: {formatPercentage(dept.quality)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Downtime: {formatPercentage(dept.downtime)}</div>
                    <div className="text-cyan-400">Team: {dept.employees}</div>
                    <div className="text-green-400">Output/hr: {dept.outputPerHour.toFixed(1)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Target:</strong> {formatPercentage(dept.target)} • <strong>Cost/Unit:</strong> ${dept.costPerUnit.toFixed(2)} • <strong>Energy:</strong> {formatNumber(dept.energyUsage)} kWh
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-yellow-400 mr-2" />
              Resource Optimization Intelligence
            </h3>
            <div className="space-y-4">
              {erpData.resourceOptimization.map((resource, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{resource.resource}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getEfficiencyColor(resource.efficiency)}`}>
                        {resource.efficiency.replace('_', ' ')}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getRiskLevelColor(resource.risk)}`}>
                        {resource.risk}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Utilization: {formatPercentage(resource.currentUtilization)}</div>
                    <div className="text-orange-400">Optimal: {resource.optimalRange[0]}-{resource.optimalRange[1]}%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-green-400">Savings: {formatCurrency(resource.potentialSavings)}</div>
                    <div className="text-purple-400">Review: {resource.nextReview}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Action:</strong> {resource.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ERP Resource Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            ERP Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {erpData.resourceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                      {alert.urgency}
                    </span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <div className="text-slate-300">Metric: {alert.metric}</div>
                    <div className="text-slate-300">Value: {alert.value}</div>
                    <div className="text-slate-300">Change: {alert.change}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Impact: {alert.impact}</div>
                    {alert.department && <div className="text-slate-300">Department: {alert.department}</div>}
                    {alert.supplier && <div className="text-slate-300">Supplier: {alert.supplier}</div>}
                    {alert.affectedProducts && <div className="text-slate-300">Products: {alert.affectedProducts.length}</div>}
                  </div>
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