// Supply Chain Analytics Center - Logistics Optimization, Procurement Analytics & Demand Forecasting
import { useState, useEffect } from 'react';
import { Truck, Package2, TrendingUp, MapPin, Clock, Zap, AlertTriangle, CheckCircle, DollarSign, BarChart3, Globe } from 'lucide-react';

export default function SupplyChainAnalyticsCenter() {
  const [scData, setScData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    supplyChainOverview: {
      totalShipments: 2345,
      activeShipments: 567,
      deliveredShipments: 1234,
      delayedShipments: 23,
      totalSuppliers: 156,
      activeSuppliers: 89,
      totalWarehous: 12,
      activeWarehouses: 12,
      inventoryValue: 4567890,
      orderFulfillment: 94.7,
      onTimeDelivery: 92.3,
      costPerShipment: 45.67,
      avgTransitTime: 3.4,
      carbonFootprint: 234.5,
      fillRate: 96.8
    },
    demandForecasting: [
      {
        product: 'Electronics Components',
        currentDemand: 1234,
        forecastedDemand: 1567,
        variance: '+26.9%',
        confidence: 89.4,
        trend: 'INCREASING',
        seasonality: 'HIGH',
        leadTime: 14.5,
        safetyStock: 345,
        reorderPoint: 567,
        stockStatus: 'HEALTHY',
        riskLevel: 'LOW'
      },
      {
        product: 'Raw Materials',
        currentDemand: 890,
        forecastedDemand: 923,
        variance: '+3.7%',
        confidence: 92.6,
        trend: 'STABLE',
        seasonality: 'MEDIUM',
        leadTime: 21.3,
        safetyStock: 123,
        reorderPoint: 234,
        stockStatus: 'HEALTHY',
        riskLevel: 'LOW'
      },
      {
        product: 'Packaging Materials',
        currentDemand: 456,
        forecastedDemand: 389,
        variance: '-14.7%',
        confidence: 78.9,
        trend: 'DECREASING',
        seasonality: 'LOW',
        leadTime: 7.2,
        safetyStock: 67,
        reorderPoint: 89,
        stockStatus: 'OVERSUPPLY',
        riskLevel: 'MEDIUM'
      },
      {
        product: 'Finished Goods',
        currentDemand: 678,
        forecastedDemand: 834,
        variance: '+23.0%',
        confidence: 85.7,
        trend: 'INCREASING',
        seasonality: 'HIGH',
        leadTime: 10.8,
        safetyStock: 156,
        reorderPoint: 289,
        stockStatus: 'LOW_STOCK',
        riskLevel: 'HIGH'
      }
    ],
    logisticsPerformance: [
      {
        route: 'Europe West Coast',
        distance: 1234,
        avgTransitTime: 2.8,
        onTimeRate: 96.4,
        costPerKm: 0.87,
        totalShipments: 234,
        fuelEfficiency: 7.8,
        carbonEmission: 45.6,
        utilization: 89.4,
        reliability: 'EXCELLENT',
        congestion: 'LOW',
        weather: 'FAVORABLE'
      },
      {
        route: 'North America Express',
        distance: 2345,
        avgTransitTime: 4.2,
        onTimeRate: 89.7,
        costPerKm: 1.23,
        totalShipments: 167,
        fuelEfficiency: 6.4,
        carbonEmission: 78.9,
        utilization: 92.6,
        reliability: 'GOOD',
        congestion: 'MEDIUM',
        weather: 'VARIABLE'
      },
      {
        route: 'Asia Pacific Hub',
        distance: 3456,
        avgTransitTime: 7.1,
        onTimeRate: 84.5,
        costPerKm: 1.56,
        totalShipments: 89,
        fuelEfficiency: 5.9,
        carbonEmission: 123.4,
        utilization: 78.9,
        reliability: 'FAIR',
        congestion: 'HIGH',
        weather: 'CHALLENGING'
      },
      {
        route: 'Regional Distribution',
        distance: 567,
        avgTransitTime: 1.4,
        onTimeRate: 98.2,
        costPerKm: 0.45,
        totalShipments: 345,
        fuelEfficiency: 9.2,
        carbonEmission: 23.1,
        utilization: 87.3,
        reliability: 'EXCELLENT',
        congestion: 'LOW',
        weather: 'OPTIMAL'
      }
    ],
    procurementAnalytics: [
      {
        category: 'Direct Materials',
        totalSpend: 1234567,
        suppliers: 45,
        avgLeadTime: 18.4,
        qualityScore: 94.7,
        costSavings: 123456,
        riskScore: 23.4,
        compliance: 96.8,
        performance: 'EXCELLENT',
        trend: 'IMPROVING',
        contracts: 67,
        renewals: 12
      },
      {
        category: 'Indirect Materials',
        totalSpend: 567890,
        suppliers: 78,
        avgLeadTime: 12.7,
        qualityScore: 89.3,
        costSavings: 67890,
        riskScore: 34.6,
        compliance: 92.4,
        performance: 'GOOD',
        trend: 'STABLE',
        contracts: 89,
        renewals: 23
      },
      {
        category: 'Services',
        totalSpend: 345678,
        suppliers: 34,
        avgLeadTime: 8.9,
        qualityScore: 87.6,
        costSavings: 45678,
        riskScore: 45.7,
        compliance: 89.7,
        performance: 'GOOD',
        trend: 'STABLE',
        contracts: 45,
        renewals: 8
      },
      {
        category: 'Capital Equipment',
        totalSpend: 890123,
        suppliers: 23,
        avgLeadTime: 45.6,
        qualityScore: 91.2,
        costSavings: 89012,
        riskScore: 56.8,
        compliance: 94.3,
        performance: 'GOOD',
        trend: 'DECLINING',
        contracts: 12,
        renewals: 3
      }
    ],
    warehouseOperations: [
      {
        warehouse: 'Distribution Center East',
        location: 'New York, NY',
        capacity: 50000,
        utilization: 87.4,
        throughput: 1234,
        accuracy: 99.2,
        productivity: 89.7,
        costPerUnit: 2.45,
        staffing: 67,
        automation: 45.6,
        energy: 78.9,
        safety: 97.8,
        performance: 'EXCELLENT',
        alerts: 2
      },
      {
        warehouse: 'Distribution Center West',
        location: 'Los Angeles, CA',
        capacity: 45000,
        utilization: 92.8,
        throughput: 1567,
        accuracy: 98.4,
        productivity: 94.3,
        costPerUnit: 2.89,
        staffing: 89,
        automation: 67.8,
        energy: 82.4,
        safety: 96.7,
        performance: 'EXCELLENT',
        alerts: 1
      },
      {
        warehouse: 'Regional Hub Central',
        location: 'Chicago, IL',
        capacity: 35000,
        utilization: 76.5,
        throughput: 890,
        accuracy: 97.6,
        productivity: 78.9,
        costPerUnit: 3.12,
        staffing: 45,
        automation: 23.4,
        energy: 67.8,
        safety: 98.9,
        performance: 'GOOD',
        alerts: 0
      },
      {
        warehouse: 'Cross-Dock South',
        location: 'Atlanta, GA',
        capacity: 25000,
        utilization: 89.6,
        throughput: 678,
        accuracy: 96.8,
        productivity: 87.2,
        costPerUnit: 1.67,
        staffing: 34,
        automation: 78.9,
        energy: 89.4,
        safety: 95.6,
        performance: 'GOOD',
        alerts: 3
      }
    ],
    riskAssessment: [
      {
        riskType: 'Supplier Disruption',
        probability: 23.4,
        impact: 'HIGH',
        riskScore: 67.8,
        mitigation: 'Diversify supplier base, maintain safety stock',
        status: 'MONITORED',
        lastReview: '2026-03-15',
        nextReview: '2026-04-15',
        owner: 'Procurement Team',
        contingency: 'Alternative suppliers identified',
        timeline: '48 hours'
      },
      {
        riskType: 'Transportation Delays',
        probability: 34.6,
        impact: 'MEDIUM',
        riskScore: 45.7,
        mitigation: 'Multi-modal transport, route optimization',
        status: 'ACTIVE',
        lastReview: '2026-03-10',
        nextReview: '2026-04-10',
        owner: 'Logistics Team',
        contingency: 'Express shipping available',
        timeline: '24 hours'
      },
      {
        riskType: 'Demand Volatility',
        probability: 45.7,
        impact: 'MEDIUM',
        riskScore: 56.8,
        mitigation: 'Flexible capacity, demand sensing',
        status: 'MONITORED',
        lastReview: '2026-03-12',
        nextReview: '2026-04-12',
        owner: 'Planning Team',
        contingency: 'Surge capacity contracts',
        timeline: '72 hours'
      },
      {
        riskType: 'Quality Issues',
        probability: 12.3,
        impact: 'HIGH',
        riskScore: 34.5,
        mitigation: 'Quality audits, supplier certification',
        status: 'CONTROLLED',
        lastReview: '2026-03-08',
        nextReview: '2026-04-08',
        owner: 'Quality Team',
        contingency: 'Quarantine and recall procedures',
        timeline: '12 hours'
      }
    ],
    supplyChainAlerts: [
      {
        type: 'WARNING',
        category: 'Inventory Management',
        message: 'Finished Goods showing LOW_STOCK status with +23% demand increase forecast',
        metric: 'Stock Level',
        value: 'LOW_STOCK',
        change: '+23% demand forecast',
        impact: 'HIGH',
        timestamp: '08:29',
        product: 'Finished Goods',
        location: 'Multiple warehouses',
        recommendation: 'Expedite production, increase safety stock levels',
        urgency: 'HIGH',
        escalation: 'SUPPLY_CHAIN_MANAGER'
      },
      {
        type: 'CRITICAL',
        category: 'Transportation',
        message: 'Asia Pacific Hub route showing 84.5% on-time rate - below 85% threshold',
        metric: 'On-Time Delivery',
        value: '84.5%',
        change: 'Below threshold',
        impact: 'MODERATE',
        timestamp: '08:28',
        route: 'Asia Pacific Hub',
        affectedShipments: 23,
        recommendation: 'Review route optimization, consider alternative carriers',
        urgency: 'MEDIUM',
        technicalAction: 'LOGISTICS_OPTIMIZATION'
      },
      {
        type: 'SUCCESS',
        category: 'Cost Optimization',
        message: 'Direct Materials procurement achieved $123K cost savings (+15.2%) this quarter',
        metric: 'Cost Savings',
        value: '$123K',
        change: '+15.2% above target',
        impact: 'POSITIVE',
        timestamp: '08:27',
        category_detail: 'Direct Materials',
        contribution: 'Strategic sourcing and bulk purchasing',
        recommendation: 'Expand successful sourcing strategies to other categories',
        urgency: 'LOW',
        opportunity: 'PROCUREMENT_EXCELLENCE'
      },
      {
        type: 'INFO',
        category: 'Demand Planning',
        message: 'Electronics Components demand forecast shows 89.4% confidence with +26.9% growth',
        metric: 'Demand Forecast Confidence',
        value: '89.4%',
        change: '+26.9% growth expected',
        impact: 'POSITIVE',
        timestamp: '08:26',
        product: 'Electronics Components',
        confidence: '89.4%',
        recommendation: 'Increase procurement planning, secure supplier capacity',
        urgency: 'MEDIUM',
        opportunity: 'CAPACITY_PLANNING'
      }
    ],
    kpiDashboard: [
      {
        category: 'Delivery Performance',
        kpis: [
          { name: 'On-Time Delivery Rate', value: 92.3, target: 95.0, unit: 'percentage', status: 'BELOW_TARGET' },
          { name: 'Fill Rate', value: 96.8, target: 95.0, unit: 'percentage', status: 'EXCEEDING' },
          { name: 'Order Accuracy', value: 98.4, target: 98.0, unit: 'percentage', status: 'EXCEEDING' },
          { name: 'Perfect Order Rate', value: 89.7, target: 90.0, unit: 'percentage', status: 'APPROACHING' }
        ]
      },
      {
        category: 'Cost Management',
        kpis: [
          { name: 'Cost Per Shipment', value: 45.67, target: 50.00, unit: 'currency', status: 'EXCEEDING' },
          { name: 'Inventory Carrying Cost', value: 234567, target: 250000, unit: 'currency', status: 'EXCEEDING' },
          { name: 'Transportation Cost', value: 123456, target: 130000, unit: 'currency', status: 'EXCEEDING' },
          { name: 'Procurement Savings', value: 156789, target: 120000, unit: 'currency', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Operational Efficiency',
        kpis: [
          { name: 'Warehouse Utilization', value: 87.4, target: 85.0, unit: 'percentage', status: 'EXCEEDING' },
          { name: 'Transit Time Average', value: 3.4, target: 4.0, unit: 'days', status: 'EXCEEDING' },
          { name: 'Inventory Turnover', value: 12.4, target: 10.0, unit: 'ratio', status: 'EXCEEDING' },
          { name: 'Supplier Performance', value: 91.2, target: 90.0, unit: 'percentage', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Sustainability',
        kpis: [
          { name: 'Carbon Footprint', value: 234.5, target: 250.0, unit: 'tons', status: 'EXCEEDING' },
          { name: 'Fuel Efficiency', value: 7.8, target: 7.0, unit: 'km/l', status: 'EXCEEDING' },
          { name: 'Packaging Optimization', value: 89.4, target: 85.0, unit: 'percentage', status: 'EXCEEDING' },
          { name: 'Waste Reduction', value: 23.4, target: 20.0, unit: 'percentage', status: 'EXCEEDING' }
        ]
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setScData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        supplyChainOverview: {
          ...prev.supplyChainOverview,
          activeShipments: Math.max(560, Math.min(575, prev.supplyChainOverview.activeShipments + Math.floor((Math.random() - 0.5) * 8))),
          onTimeDelivery: Math.max(91.0, Math.min(93.0, prev.supplyChainOverview.onTimeDelivery + (Math.random() - 0.5) * 0.4)),
          fillRate: Math.max(96.0, Math.min(97.5, prev.supplyChainOverview.fillRate + (Math.random() - 0.5) * 0.3))
        }
      }));
    }, 30000);

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

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'INCREASING': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'DECREASING': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStockStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'LOW_STOCK': return 'text-yellow-400 bg-yellow-400/20';
      case 'OVERSUPPLY': return 'text-blue-400 bg-blue-400/20';
      case 'OUT_OF_STOCK': return 'text-red-400 bg-red-400/20';
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

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getKpiStatusColor = (status) => {
    switch (status) {
      case 'EXCEEDING': return 'text-green-400 bg-green-400/20';
      case 'MEETING': return 'text-blue-400 bg-blue-400/20';
      case 'APPROACHING': return 'text-yellow-400 bg-yellow-400/20';
      case 'BELOW_TARGET': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskStatusColor = (status) => {
    switch (status) {
      case 'CONTROLLED': return 'text-green-400 bg-green-400/20';
      case 'MONITORED': return 'text-blue-400 bg-blue-400/20';
      case 'ACTIVE': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
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

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
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
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Supply Chain Analytics Center</h1>
              <p className="text-emerald-300">Logistics optimization, procurement analytics & demand forecasting</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{scData.currentTime}</div>
            <div className="text-emerald-300">SC Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Supply Chain Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Truck className="w-5 h-5 text-emerald-400 mr-2" />
                Shipments
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{scData.supplyChainOverview.activeShipments}</div>
            <div className="text-emerald-300 text-sm">{scData.supplyChainOverview.totalShipments} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-blue-400 mr-2" />
                Suppliers
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{scData.supplyChainOverview.activeSuppliers}</div>
            <div className="text-blue-300 text-sm">{scData.supplyChainOverview.totalSuppliers} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package2 className="w-5 h-5 text-purple-400 mr-2" />
                Inventory
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(scData.supplyChainOverview.inventoryValue)}</div>
            <div className="text-purple-300 text-sm">Value</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                Delivery
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(scData.supplyChainOverview.onTimeDelivery, 85, 92)}`}>
              {formatPercentage(scData.supplyChainOverview.onTimeDelivery)}
            </div>
            <div className="text-orange-300 text-sm">On-Time</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                Fill Rate
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(scData.supplyChainOverview.fillRate, 90, 95)}`}>
              {formatPercentage(scData.supplyChainOverview.fillRate)}
            </div>
            <div className="text-cyan-300 text-sm">Fulfillment</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                Cost/Unit
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">${scData.supplyChainOverview.costPerShipment.toFixed(0)}</div>
            <div className="text-green-300 text-sm">Per Shipment</div>
          </div>
        </div>

        {/* KPI Dashboard */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-emerald-400 mr-2" />
            Supply Chain KPI Dashboard
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {scData.kpiDashboard.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h4 className="text-white font-medium text-lg text-center">{category.category}</h4>
                {category.kpis.map((kpi, kpiIndex) => (
                  <div key={kpiIndex} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">{kpi.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getKpiStatusColor(kpi.status)}`}>
                        {kpi.status.replace('_', ' ')}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {kpi.unit === 'currency' ? formatCurrency(kpi.value) :
                       kpi.unit === 'percentage' ? formatPercentage(kpi.value) :
                       kpi.unit === 'ratio' ? kpi.value.toFixed(1) :
                       kpi.unit === 'days' ? `${kpi.value.toFixed(1)} days` :
                       kpi.unit === 'tons' ? `${kpi.value.toFixed(1)} tons` :
                       kpi.unit === 'km/l' ? `${kpi.value.toFixed(1)} km/l` :
                       formatNumber(kpi.value)}
                    </div>
                    <div className="text-slate-400 text-xs">
                      Target: {kpi.unit === 'currency' ? formatCurrency(kpi.target) :
                              kpi.unit === 'percentage' ? formatPercentage(kpi.target) :
                              kpi.unit === 'ratio' ? kpi.target.toFixed(1) :
                              kpi.unit === 'days' ? `${kpi.target.toFixed(1)}d` :
                              kpi.unit === 'tons' ? `${kpi.target.toFixed(1)}t` :
                              kpi.unit === 'km/l' ? `${kpi.target.toFixed(1)}` :
                              formatNumber(kpi.target)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Demand Forecasting & Logistics Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Demand Forecasting Intelligence
            </h3>
            <div className="space-y-4">
              {scData.demandForecasting.map((forecast, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{forecast.product}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStockStatusColor(forecast.stockStatus)}`}>
                        {forecast.stockStatus.replace('_', ' ')}
                      </span>
                      <span className={`text-sm ${getTrendColor(forecast.trend)}`}>
                        {forecast.trend === 'INCREASING' ? '↗' : forecast.trend === 'DECREASING' ? '↘' : '→'}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Current: {formatNumber(forecast.currentDemand)}</div>
                    <div className="text-green-400">Forecast: {formatNumber(forecast.forecastedDemand)}</div>
                    <div className={`${getTrendColor(forecast.trend)}`}>Variance: {forecast.variance}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Confidence: {formatPercentage(forecast.confidence)}</div>
                    <div className="text-orange-400">Lead: {forecast.leadTime.toFixed(1)}d</div>
                    <div className={`px-2 py-1 rounded text-xs ${getRiskLevelColor(forecast.riskLevel)}`}>
                      {forecast.riskLevel} Risk
                    </div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Safety Stock:</strong> {formatNumber(forecast.safetyStock)} • <strong>Reorder:</strong> {formatNumber(forecast.reorderPoint)} • <strong>Seasonality:</strong> {forecast.seasonality}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-2" />
              Logistics Route Performance
            </h3>
            <div className="space-y-4">
              {scData.logisticsPerformance.map((route, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{route.route}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(route.reliability)}`}>
                        {route.reliability}
                      </span>
                      <span className={`text-sm ${getScoreColor(route.onTimeRate, 85, 92)}`}>
                        {formatPercentage(route.onTimeRate)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Distance: {formatNumber(route.distance)}km</div>
                    <div className="text-orange-400">Transit: {route.avgTransitTime.toFixed(1)}d</div>
                    <div className="text-green-400">Cost: ${route.costPerKm.toFixed(2)}/km</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Shipments: {route.totalShipments}</div>
                    <div className="text-yellow-400">Utilization: {formatPercentage(route.utilization)}</div>
                    <div className="text-blue-400">Efficiency: {route.fuelEfficiency.toFixed(1)}L/100km</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Emissions:</strong> {route.carbonEmission.toFixed(1)}kg CO₂ • <strong>Congestion:</strong> {route.congestion} • <strong>Weather:</strong> {route.weather}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Procurement Analytics & Warehouse Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-yellow-400 mr-2" />
              Procurement Analytics Intelligence
            </h3>
            <div className="space-y-4">
              {scData.procurementAnalytics.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(category.performance)}`}>
                        {category.performance}
                      </span>
                      <span className={`text-sm ${getTrendColor(category.trend)}`}>
                        {category.trend === 'IMPROVING' ? '↗' : category.trend === 'DECLINING' ? '↘' : '→'}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Spend: {formatCurrency(category.totalSpend)}</div>
                    <div className="text-blue-400">Suppliers: {category.suppliers}</div>
                    <div className="text-orange-400">Lead: {category.avgLeadTime.toFixed(1)}d</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(category.qualityScore, 85, 92)}`}>Quality: {formatPercentage(category.qualityScore)}</div>
                    <div className="text-purple-400">Savings: {formatCurrency(category.costSavings)}</div>
                    <div className={`${getScoreColor(100 - category.riskScore, 70, 85)}`}>Risk: {formatPercentage(category.riskScore)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Compliance:</strong> {formatPercentage(category.compliance)} • <strong>Contracts:</strong> {category.contracts} • <strong>Renewals:</strong> {category.renewals}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Package2 className="w-5 h-5 text-purple-400 mr-2" />
              Warehouse Operations Intelligence
            </h3>
            <div className="space-y-4">
              {scData.warehouseOperations.map((warehouse, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{warehouse.warehouse}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(warehouse.performance)}`}>
                        {warehouse.performance}
                      </span>
                      <span className="text-red-400 text-xs">{warehouse.alerts} alerts</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Capacity: {formatNumber(warehouse.capacity)} m²</div>
                    <div className={`${getScoreColor(warehouse.utilization, 70, 85)}`}>Util: {formatPercentage(warehouse.utilization)}</div>
                    <div className="text-orange-400">Throughput: {formatNumber(warehouse.throughput)}/day</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(warehouse.accuracy, 95, 98)}`}>Accuracy: {formatPercentage(warehouse.accuracy)}</div>
                    <div className="text-green-400">Staff: {warehouse.staffing}</div>
                    <div className="text-purple-400">Cost: ${warehouse.costPerUnit.toFixed(2)}/unit</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Location:</strong> {warehouse.location} • <strong>Automation:</strong> {formatPercentage(warehouse.automation)} • <strong>Safety:</strong> {formatPercentage(warehouse.safety)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Assessment & Supply Chain Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              Supply Chain Risk Assessment
            </h3>
            <div className="space-y-4">
              {scData.riskAssessment.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{risk.riskType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskStatusColor(risk.status)}`}>
                        {risk.status}
                      </span>
                      <span className={`text-sm ${getScoreColor(100 - risk.riskScore, 70, 85)}`}>
                        {risk.riskScore.toFixed(0)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Probability: {formatPercentage(risk.probability)}</div>
                    <div className="text-red-400">Impact: {risk.impact}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Owner: {risk.owner}</div>
                    <div className="text-purple-400">Timeline: {risk.timeline}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Mitigation:</strong> {risk.mitigation}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Contingency:</strong> {risk.contingency} • <strong>Next Review:</strong> {risk.nextReview}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Supply Chain Intelligence Alerts
            </h3>
            <div className="space-y-4">
              {scData.supplyChainAlerts.map((alert, index) => (
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
                      {alert.product && <div className="text-slate-300">Product: {alert.product}</div>}
                      {alert.route && <div className="text-slate-300">Route: {alert.route}</div>}
                      {alert.confidence && <div className="text-slate-300">Confidence: {alert.confidence}</div>}
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
    </div>
  );
}