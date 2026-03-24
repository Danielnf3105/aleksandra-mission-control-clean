// Asset Management Intelligence Center - Asset Lifecycle & Maintenance Analytics
import { useState, useEffect } from 'react';
import { Package, TrendingUp, Wrench, DollarSign, Clock, BarChart3, CheckCircle, AlertTriangle, Target, Settings, Activity, Eye } from 'lucide-react';

export default function AssetManagementCenter() {
  const [assetData, setAssetData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    assetOverview: {
      totalAssets: 3247,
      activeAssets: 2894,
      criticalAssets: 234,
      totalValue: 125670000,
      avgUtilization: 78.6,
      maintenanceCompliance: 94.3,
      downtime: 2.7,
      maintenanceCosts: 4560000,
      depreciationRate: 12.8,
      assetHealth: 87.4,
      availabilityRate: 96.8,
      predictiveAccuracy: 89.7
    },
    assetCategories: [
      {
        category: 'Production Equipment',
        count: 456,
        value: 45600000,
        utilization: 89.3,
        health: 85.7,
        availability: 94.2,
        maintenanceCost: 1890000,
        downtime: 3.4,
        criticalAssets: 67,
        avgAge: 7.8,
        replacement: 'Planned 2026',
        roi: 234.5,
        performance: {
          efficiency: 91.2,
          reliability: 87.9,
          quality: 93.4,
          safety: 96.7
        },
        riskLevel: 'MEDIUM',
        nextMaintenance: '2026-04-15'
      },
      {
        category: 'IT Infrastructure',
        count: 789,
        value: 23400000,
        utilization: 67.8,
        health: 92.1,
        availability: 98.7,
        maintenanceCost: 890000,
        downtime: 1.2,
        criticalAssets: 89,
        avgAge: 4.2,
        replacement: 'Continuous',
        roi: 187.3,
        performance: {
          efficiency: 94.6,
          reliability: 96.3,
          quality: 98.1,
          safety: 99.2
        },
        riskLevel: 'LOW',
        nextMaintenance: '2026-04-01'
      },
      {
        category: 'Facilities',
        count: 567,
        value: 34500000,
        utilization: 85.4,
        health: 78.9,
        availability: 97.4,
        maintenanceCost: 1230000,
        downtime: 2.8,
        criticalAssets: 45,
        avgAge: 12.5,
        replacement: 'Planned 2027',
        roi: 145.7,
        performance: {
          efficiency: 82.3,
          reliability: 79.4,
          quality: 88.7,
          safety: 94.2
        },
        riskLevel: 'MEDIUM',
        nextMaintenance: '2026-03-25'
      },
      {
        category: 'Transportation',
        count: 234,
        value: 12300000,
        utilization: 76.2,
        health: 84.6,
        availability: 93.8,
        maintenanceCost: 670000,
        downtime: 4.1,
        criticalAssets: 23,
        avgAge: 5.6,
        replacement: 'Ongoing',
        roi: 198.4,
        performance: {
          efficiency: 88.4,
          reliability: 85.7,
          quality: 90.2,
          safety: 97.8
        },
        riskLevel: 'MEDIUM',
        nextMaintenance: '2026-04-05'
      },
      {
        category: 'Security Systems',
        count: 345,
        value: 5670000,
        utilization: 99.1,
        health: 91.7,
        availability: 99.3,
        maintenanceCost: 340000,
        downtime: 0.6,
        criticalAssets: 89,
        avgAge: 3.8,
        replacement: 'Planned 2028',
        roi: 267.8,
        performance: {
          efficiency: 97.2,
          reliability: 98.4,
          quality: 99.1,
          safety: 99.8
        },
        riskLevel: 'LOW',
        nextMaintenance: '2026-04-20'
      }
    ],
    criticalAssets: [
      {
        name: 'Production Line A - Mixer Unit',
        id: 'PL-A-MX001',
        category: 'Production Equipment',
        value: 2340000,
        age: 8.5,
        condition: 'GOOD',
        utilization: 94.7,
        availability: 92.3,
        health: 78.6,
        lastMaintenance: '2026-02-15',
        nextMaintenance: '2026-04-15',
        maintenanceType: 'PREVENTIVE',
        costToDate: 234000,
        estimatedLife: 15,
        remainingLife: 6.5,
        riskScore: 6.8,
        criticality: 'HIGH',
        location: 'Manufacturing Floor 1',
        manufacturer: 'Industrial Systems Inc',
        serialNumber: 'ISI-MX-2018-001',
        alerts: ['Vibration levels trending upward', 'Lubrication due next week']
      },
      {
        name: 'Main Database Server',
        id: 'IT-DB-001',
        category: 'IT Infrastructure',
        value: 890000,
        age: 3.2,
        condition: 'EXCELLENT',
        utilization: 78.9,
        availability: 99.7,
        health: 96.4,
        lastMaintenance: '2026-03-01',
        nextMaintenance: '2026-06-01',
        maintenanceType: 'PREDICTIVE',
        costToDate: 45000,
        estimatedLife: 7,
        remainingLife: 3.8,
        riskScore: 2.3,
        criticality: 'CRITICAL',
        location: 'Data Center A',
        manufacturer: 'TechCorp',
        serialNumber: 'TC-DB-2022-015',
        alerts: ['Storage capacity at 78%', 'Backup verification pending']
      },
      {
        name: 'HVAC System - Building 1',
        id: 'FAC-HVAC-B1-001',
        category: 'Facilities',
        value: 456000,
        age: 11.3,
        condition: 'FAIR',
        utilization: 87.4,
        availability: 94.8,
        health: 72.1,
        lastMaintenance: '2026-02-28',
        nextMaintenance: '2026-03-28',
        maintenanceType: 'PREVENTIVE',
        costToDate: 167000,
        estimatedLife: 20,
        remainingLife: 8.7,
        riskScore: 7.9,
        criticality: 'MEDIUM',
        location: 'Building 1 Roof',
        manufacturer: 'Climate Solutions',
        serialNumber: 'CS-HVAC-2014-B1',
        alerts: ['Filter replacement overdue', 'Energy efficiency declining']
      },
      {
        name: 'Delivery Truck Fleet Lead',
        id: 'TRN-TRK-001',
        category: 'Transportation',
        value: 123000,
        age: 4.7,
        condition: 'GOOD',
        utilization: 89.2,
        availability: 91.4,
        health: 82.3,
        lastMaintenance: '2026-03-05',
        nextMaintenance: '2026-04-05',
        maintenanceType: 'SCHEDULED',
        costToDate: 23400,
        estimatedLife: 10,
        remainingLife: 5.3,
        riskScore: 5.4,
        criticality: 'MEDIUM',
        location: 'Fleet Garage',
        manufacturer: 'CommercialVehicles Inc',
        serialNumber: 'CVI-TRK-2021-047',
        alerts: ['Tire rotation due', 'Oil change approaching']
      },
      {
        name: 'Perimeter Security Camera Array',
        id: 'SEC-CAM-PER001',
        category: 'Security Systems',
        value: 67000,
        age: 2.1,
        condition: 'EXCELLENT',
        utilization: 99.8,
        availability: 99.1,
        health: 94.7,
        lastMaintenance: '2026-01-15',
        nextMaintenance: '2026-07-15',
        maintenanceType: 'PREDICTIVE',
        costToDate: 12000,
        estimatedLife: 12,
        remainingLife: 9.9,
        riskScore: 1.8,
        criticality: 'HIGH',
        location: 'Perimeter Zone A',
        manufacturer: 'SecureTech',
        serialNumber: 'ST-CAM-2024-PER001',
        alerts: ['Software update available', 'Storage capacity optimization needed']
      }
    ],
    maintenanceSchedule: [
      {
        asset: 'Production Line A - Mixer Unit',
        type: 'PREVENTIVE',
        scheduled: '2026-04-15',
        duration: '8 hours',
        cost: 45000,
        technician: 'Maintenance Team A',
        priority: 'HIGH',
        description: 'Complete overhaul of mixing components, bearing replacement, calibration',
        riskIfDelayed: 'Production stoppage, quality issues',
        partsRequired: ['Bearing Set MX-001', 'Seals Kit', 'Calibration Tools'],
        downtime: 'Scheduled weekend window',
        status: 'SCHEDULED'
      },
      {
        asset: 'HVAC System - Building 1',
        type: 'URGENT',
        scheduled: '2026-03-25',
        duration: '4 hours',
        cost: 12000,
        technician: 'HVAC Specialist',
        priority: 'HIGH',
        description: 'Filter replacement, system cleaning, efficiency optimization',
        riskIfDelayed: 'Reduced air quality, increased energy costs',
        partsRequired: ['HEPA Filters x6', 'Cleaning Solution', 'Belt Replacement'],
        downtime: 'Minimal - backup system available',
        status: 'CONFIRMED'
      },
      {
        asset: 'Delivery Truck Fleet Lead',
        type: 'SCHEDULED',
        scheduled: '2026-04-05',
        duration: '3 hours',
        cost: 890,
        technician: 'Fleet Mechanic',
        priority: 'MEDIUM',
        description: 'Oil change, tire rotation, brake inspection, fluid checks',
        riskIfDelayed: 'Increased breakdown risk, warranty void',
        partsRequired: ['Engine Oil', 'Oil Filter', 'Brake Fluid'],
        downtime: '3 hours - backup vehicle available',
        status: 'SCHEDULED'
      },
      {
        asset: 'Main Database Server',
        type: 'PREDICTIVE',
        scheduled: '2026-06-01',
        duration: '2 hours',
        cost: 5600,
        technician: 'IT Operations',
        priority: 'MEDIUM',
        description: 'Performance optimization, security patches, backup verification',
        riskIfDelayed: 'Performance degradation, security vulnerabilities',
        partsRequired: ['None - software maintenance'],
        downtime: 'Failover to backup - no service interruption',
        status: 'PLANNED'
      }
    ],
    assetPerformance: [
      {
        period: 'Last 30 Days',
        availability: 96.8,
        utilization: 78.6,
        maintenanceCosts: 380000,
        downtime: 2.7,
        healthScore: 87.4,
        incidentCount: 12,
        predictiveAccuracy: 89.7,
        energyEfficiency: 92.3,
        workOrderCompletion: 94.7,
        trends: {
          availability: '+1.2%',
          costs: '-8.4%',
          efficiency: '+3.1%'
        }
      },
      {
        period: 'Last 90 Days',
        availability: 95.4,
        utilization: 76.2,
        maintenanceCosts: 1140000,
        downtime: 3.1,
        healthScore: 85.9,
        incidentCount: 34,
        predictiveAccuracy: 87.2,
        energyEfficiency: 89.7,
        workOrderCompletion: 92.3,
        trends: {
          availability: '+2.8%',
          costs: '-12.7%',
          efficiency: '+5.6%'
        }
      },
      {
        period: 'Last 12 Months',
        availability: 94.1,
        utilization: 74.8,
        maintenanceCosts: 4560000,
        downtime: 4.2,
        healthScore: 83.7,
        incidentCount: 156,
        predictiveAccuracy: 84.9,
        energyEfficiency: 86.4,
        workOrderCompletion: 89.8,
        trends: {
          availability: '+6.7%',
          costs: '-18.9%',
          efficiency: '+12.3%'
        }
      }
    ],
    assetAlerts: [
      {
        type: 'CRITICAL',
        category: 'Condition',
        message: 'Production Line A Mixer showing abnormal vibration patterns - immediate inspection required',
        asset: 'Production Line A - Mixer Unit',
        assetId: 'PL-A-MX001',
        severity: 'HIGH',
        riskScore: 8.7,
        impact: 'Production stoppage risk',
        timestamp: '09:33',
        detectedBy: 'Predictive Analytics',
        recommendation: 'Schedule immediate inspection, consider emergency maintenance',
        estimatedCost: 45000,
        urgency: 'IMMEDIATE',
        escalation: 'MAINTENANCE_MANAGER'
      },
      {
        type: 'HIGH',
        category: 'Maintenance Due',
        message: 'HVAC Building 1 filter replacement overdue by 5 days - air quality impact',
        asset: 'HVAC System - Building 1',
        assetId: 'FAC-HVAC-B1-001',
        severity: 'MEDIUM',
        riskScore: 6.4,
        impact: 'Air quality degradation, energy efficiency loss',
        timestamp: '09:32',
        detectedBy: 'Maintenance Schedule',
        recommendation: 'Complete filter replacement within 24 hours',
        estimatedCost: 2400,
        urgency: 'HIGH',
        escalation: 'FACILITIES_TEAM'
      },
      {
        type: 'WARNING',
        category: 'Performance',
        message: 'IT Infrastructure utilization below optimal levels - capacity underutilized',
        asset: 'IT Infrastructure Category',
        assetId: 'IT-CAT-001',
        severity: 'LOW',
        riskScore: 3.2,
        impact: 'Suboptimal ROI, potential cost savings opportunity',
        timestamp: '09:31',
        detectedBy: 'Performance Analytics',
        recommendation: 'Review capacity planning, consider workload redistribution',
        estimatedCost: 0,
        urgency: 'MEDIUM',
        escalation: 'IT_OPERATIONS'
      },
      {
        type: 'INFO',
        category: 'Optimization',
        message: 'Security Systems category achieving 99.3% availability - exceeding target',
        asset: 'Security Systems Category',
        assetId: 'SEC-CAT-001',
        severity: 'POSITIVE',
        riskScore: 0.5,
        impact: 'Enhanced security posture, excellent performance',
        timestamp: '09:30',
        detectedBy: 'Performance Monitoring',
        recommendation: 'Document best practices for application to other categories',
        estimatedCost: 0,
        urgency: 'LOW',
        opportunity: 'BEST_PRACTICE_SHARING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAssetData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        assetOverview: {
          ...prev.assetOverview,
          avgUtilization: Math.max(76.0, Math.min(82.0, prev.assetOverview.avgUtilization + (Math.random() - 0.5) * 1.2)),
          assetHealth: Math.max(85.0, Math.min(90.0, prev.assetOverview.assetHealth + (Math.random() - 0.5) * 0.8)),
          availabilityRate: Math.max(95.0, Math.min(98.0, prev.assetOverview.availabilityRate + (Math.random() - 0.5) * 0.4))
        }
      }));
    }, 62000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getConditionColor = (condition) => {
    switch (condition) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCriticalityColor = (criticality) => {
    switch (criticality) {
      case 'CRITICAL': return 'text-red-500 bg-red-500/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getMaintenanceTypeColor = (type) => {
    switch (type) {
      case 'PREVENTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'PREDICTIVE': return 'text-green-400 bg-green-400/20';
      case 'SCHEDULED': return 'text-purple-400 bg-purple-400/20';
      case 'URGENT': return 'text-red-400 bg-red-400/20';
      case 'EMERGENCY': return 'text-red-500 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'SCHEDULED': return 'text-blue-400 bg-blue-400/20';
      case 'CONFIRMED': return 'text-green-400 bg-green-400/20';
      case 'PLANNED': return 'text-purple-400 bg-purple-400/20';
      case 'IN_PROGRESS': return 'text-yellow-400 bg-yellow-400/20';
      case 'COMPLETED': return 'text-green-500 bg-green-500/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'IMMEDIATE': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
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

  const formatCurrency = (amount) => `$${formatNumber(amount)}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-teal-600 rounded-xl">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Asset Management Intelligence Center</h1>
              <p className="text-green-300">Asset lifecycle & maintenance analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{assetData.currentTime}</div>
            <div className="text-green-300">Asset Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Asset Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Package className="w-5 h-5 text-green-400 mr-2" />
                Assets
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{assetData.assetOverview.activeAssets}</div>
            <div className="text-green-300 text-sm">{assetData.assetOverview.totalAssets} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-yellow-400 mr-2" />
                Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatCurrency(assetData.assetOverview.totalValue)}</div>
            <div className="text-yellow-300 text-sm">Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                Utilization
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(assetData.assetOverview.avgUtilization)}`}>
              {formatPercentage(assetData.assetOverview.avgUtilization)}
            </div>
            <div className="text-blue-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Health
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(assetData.assetOverview.assetHealth)}`}>
              {formatPercentage(assetData.assetOverview.assetHealth)}
            </div>
            <div className="text-purple-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Availability
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(assetData.assetOverview.availabilityRate)}`}>
              {formatPercentage(assetData.assetOverview.availabilityRate)}
            </div>
            <div className="text-orange-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wrench className="w-5 h-5 text-cyan-400 mr-2" />
                Downtime
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{assetData.assetOverview.downtime.toFixed(1)}%</div>
            <div className="text-cyan-300 text-sm">Current</div>
          </div>
        </div>

        {/* Asset Categories */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
            Asset Category Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Count</th>
                  <th className="text-center p-3 text-slate-300">Value</th>
                  <th className="text-center p-3 text-slate-300">Utilization</th>
                  <th className="text-center p-3 text-slate-300">Health</th>
                  <th className="text-center p-3 text-slate-300">Risk</th>
                </tr>
              </thead>
              <tbody>
                {assetData.assetCategories.map((category, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{category.category}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {category.criticalAssets} critical • Avg age: {category.avgAge}y
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-green-400 font-medium">{category.count}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage(category.availability)} avail</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-yellow-400 font-medium">{formatCurrency(category.value)}</div>
                      <div className="text-slate-400 text-xs">ROI: {formatPercentage(category.roi)}</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(category.utilization)}`}>
                      {formatPercentage(category.utilization)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(category.health)}`}>
                      {formatPercentage(category.health)}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(category.riskLevel)}`}>
                        {category.riskLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Critical Assets & Maintenance Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              Critical Asset Monitoring
            </h3>
            <div className="space-y-4">
              {assetData.criticalAssets.map((asset, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{asset.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getConditionColor(asset.condition)}`}>
                        {asset.condition}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getCriticalityColor(asset.criticality)}`}>
                        {asset.criticality}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Value: {formatCurrency(asset.value)}</div>
                    <div className="text-blue-400">Age: {asset.age.toFixed(1)}y</div>
                    <div className="text-orange-400">Life: {asset.remainingLife.toFixed(1)}y</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(asset.utilization)}`}>Util: {formatPercentage(asset.utilization)}</div>
                    <div className={`${getScoreColor(asset.availability)}`}>Avail: {formatPercentage(asset.availability)}</div>
                    <div className={`${getScoreColor(asset.health)}`}>Health: {formatPercentage(asset.health)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Location:</strong> {asset.location} • <strong>ID:</strong> {asset.id}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Next Maintenance:</strong> {asset.nextMaintenance} ({asset.maintenanceType})
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Alerts:</strong> {asset.alerts.slice(0, 1).join('; ')}{asset.alerts.length > 1 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 text-blue-400 mr-2" />
              Maintenance Schedule Dashboard
            </h3>
            <div className="space-y-4">
              {assetData.maintenanceSchedule.map((maintenance, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{maintenance.asset}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getMaintenanceTypeColor(maintenance.type)}`}>
                        {maintenance.type}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(maintenance.status)}`}>
                        {maintenance.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Date: {maintenance.scheduled}</div>
                    <div className="text-blue-400">Duration: {maintenance.duration}</div>
                    <div className="text-yellow-400">Cost: {formatCurrency(maintenance.cost)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Technician:</strong> {maintenance.technician} • <strong>Priority:</strong> {maintenance.priority}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Work:</strong> {maintenance.description}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Risk if Delayed:</strong> {maintenance.riskIfDelayed}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Downtime:</strong> {maintenance.downtime}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trends & Asset Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
              Asset Performance Trends
            </h3>
            <div className="space-y-4">
              {assetData.assetPerformance.map((performance, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{performance.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(performance.healthScore)}`}>
                        {formatPercentage(performance.healthScore)} Health
                      </span>
                      <span className="text-cyan-400 text-xs">{performance.incidentCount} incidents</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(performance.availability)}`}>Avail: {formatPercentage(performance.availability)}</div>
                    <div className={`${getScoreColor(performance.utilization)}`}>Util: {formatPercentage(performance.utilization)}</div>
                    <div className="text-red-400">Down: {formatPercentage(performance.downtime)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Costs: {formatCurrency(performance.maintenanceCosts)}</div>
                    <div className={`${getScoreColor(performance.energyEfficiency)}`}>Energy: {formatPercentage(performance.energyEfficiency)}</div>
                    <div className={`${getScoreColor(performance.workOrderCompletion)}`}>WO: {formatPercentage(performance.workOrderCompletion)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-green-400">Avail: {performance.trends.availability}</div>
                    <div className="text-blue-400">Cost: {performance.trends.costs}</div>
                    <div className="text-purple-400">Eff: {performance.trends.efficiency}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-yellow-400 mr-2" />
              Asset Management Alerts
            </h3>
            <div className="space-y-4">
              {assetData.assetAlerts.map((alert, index) => (
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
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    <div className="text-slate-300">Asset: {alert.asset}</div>
                    {alert.assetId && <div className="text-slate-300">ID: {alert.assetId}</div>}
                    {alert.riskScore && <div className="text-slate-300">Risk Score: {alert.riskScore.toFixed(1)}</div>}
                    {alert.estimatedCost > 0 && <div className="text-slate-300">Est. Cost: {formatCurrency(alert.estimatedCost)}</div>}
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
    </div>
  );
}