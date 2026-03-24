// FinOps Cost Optimization & Automation Center - 2026 AI-Driven Cloud Cost Management
// Based on Cast AI, CloudCheckr, CloudZero, and modern FinOps automation standards
import { useState, useEffect } from 'react';
import { 
  DollarSign, TrendingDown, TrendingUp, BarChart3, PieChart, Target,
  Zap, Activity, Settings, RefreshCw, AlertTriangle, CheckCircle,
  Clock, Info, Eye, Brain, Gauge, Monitor, Server, Database,
  Globe, Users, Code2, GitBranch, Package, Terminal, Search,
  ArrowRight, ArrowLeft, Minus, Plus, Play, Pause, StopCircle,
  Cpu, MemoryStick, HardDrive, Network, Shield, Key, Lock
} from 'lucide-react';

export default function FinOpsCostOptimizationCenter() {
  const [finopsData, setFinopsData] = useState({
    currentTime: new Date().toISOString(),
    totalMonthlyCost: 247890.45,
    monthlyBudget: 280000.00,
    costTrend: -12.7, // percentage change
    savingsThisMonth: 38475.23,
    optimizationScore: 87.4,
    multiCloudCosts: [
      {
        provider: 'AWS',
        cost: 156789.32,
        percentage: 63.2,
        trend: -8.4,
        services: 42,
        optimizationPotential: 23156.45,
        status: 'OPTIMIZED',
        lastOptimization: '2h ago'
      },
      {
        provider: 'Azure',
        cost: 67834.12,
        percentage: 27.4,
        trend: -15.2,
        services: 28,
        optimizationPotential: 12890.67,
        status: 'OPTIMIZING',
        lastOptimization: '45m ago'
      },
      {
        provider: 'GCP',
        cost: 23267.01,
        percentage: 9.4,
        trend: -18.9,
        services: 15,
        optimizationPotential: 4567.89,
        status: 'NEEDS_ATTENTION',
        lastOptimization: '4h ago'
      }
    ],
    aiOptimizations: [
      {
        id: 'opt-2026-001',
        time: '13:35',
        type: 'RIGHTSIZING',
        resource: 'EC2 instances in production',
        action: 'Downsize overprovisioned instances',
        potentialSavings: 4567.89,
        actualSavings: 4234.56,
        confidence: 94.7,
        status: 'IMPLEMENTED',
        impact: 'No performance degradation detected',
        automation: 'Cast AI'
      },
      {
        id: 'opt-2026-002',
        time: '13:28',
        type: 'SPOT_INSTANCES',
        resource: 'Kubernetes worker nodes',
        action: 'Migrate to Spot instances for dev workloads',
        potentialSavings: 8923.45,
        actualSavings: 8756.23,
        confidence: 89.2,
        status: 'IMPLEMENTED',
        impact: '98.1% availability maintained',
        automation: 'Cast AI'
      },
      {
        id: 'opt-2026-003',
        time: '13:20',
        type: 'COMMITMENT',
        resource: 'Azure Virtual Machines',
        action: 'Purchase 1-year reserved instances',
        potentialSavings: 15234.67,
        actualSavings: null,
        confidence: 96.8,
        status: 'PENDING_APPROVAL',
        impact: 'Projected 42% savings on VM costs',
        automation: 'CloudCheckr CMx'
      }
    ],
    costAnomalies: [
      {
        time: '13:30',
        severity: 'HIGH',
        service: 'AWS RDS',
        anomaly: 'Data transfer costs 340% above baseline',
        cost: 12456.78,
        baseline: 3678.45,
        cause: 'Cross-region replication misconfiguration',
        recommendation: 'Optimize replication topology and enable compression',
        status: 'INVESTIGATING'
      },
      {
        time: '13:15',
        severity: 'MEDIUM',
        service: 'Azure Storage',
        anomaly: 'Storage requests spike detected',
        cost: 5678.90,
        baseline: 2345.67,
        cause: 'Application polling interval increased',
        recommendation: 'Implement intelligent caching layer',
        status: 'RESOLVED'
      },
      {
        time: '12:45',
        severity: 'LOW',
        service: 'GCP Compute Engine',
        anomaly: 'Idle compute resources identified',
        cost: 2345.67,
        baseline: 1890.23,
        cause: 'Development environments left running',
        recommendation: 'Enable auto-shutdown policies',
        status: 'AUTO_RESOLVED'
      }
    ],
    budgetTracking: [
      {
        category: 'Production Workloads',
        budget: 150000.00,
        actual: 134567.89,
        forecast: 142345.67,
        utilization: 89.7,
        status: 'ON_TRACK',
        variance: -5.3
      },
      {
        category: 'Development & Testing',
        budget: 60000.00,
        actual: 67890.12,
        forecast: 72456.78,
        utilization: 113.2,
        status: 'OVER_BUDGET',
        variance: 13.2
      },
      {
        category: 'Data & Analytics',
        budget: 45000.00,
        actual: 31245.67,
        forecast: 38567.89,
        utilization: 69.4,
        status: 'UNDER_BUDGET',
        variance: -30.6
      },
      {
        category: 'Security & Compliance',
        budget: 25000.00,
        actual: 14186.77,
        forecast: 18234.56,
        utilization: 56.7,
        status: 'UNDER_BUDGET',
        variance: -43.3
      }
    ],
    automationTools: [
      {
        name: 'Cast AI',
        type: 'Kubernetes Optimization',
        status: 'ACTIVE',
        savingsThisMonth: 23456.78,
        optimizedResources: 156,
        features: ['Rightsizing', 'Spot Management', 'Auto-scaling', 'Policy Enforcement'],
        nextAction: 'Analyze new workload patterns',
        confidence: 94.2
      },
      {
        name: 'CloudCheckr CMx',
        type: 'Multi-Cloud Management',
        status: 'ACTIVE',
        savingsThisMonth: 12345.67,
        optimizedResources: 89,
        features: ['Budget Tracking', 'Rightsizing', 'Compliance', 'Reporting'],
        nextAction: 'Review Reserved Instance recommendations',
        confidence: 91.8
      },
      {
        name: 'AWS Cost Explorer',
        type: 'Native AWS Analytics',
        status: 'MONITORING',
        savingsThisMonth: 2567.89,
        optimizedResources: 23,
        features: ['Cost Analysis', 'Forecasting', 'Budgets', 'Anomaly Detection'],
        nextAction: 'Update spending thresholds',
        confidence: 87.3
      }
    ],
    rightsizingRecommendations: [
      {
        resource: 'i3.xlarge instances (prod-cluster)',
        currentCost: 1234.56,
        recommendedSize: 'm5.large',
        projectedCost: 567.89,
        potentialSavings: 666.67,
        confidence: 96.7,
        impact: 'CPU utilization: 25% → 65%',
        automation: 'Available'
      },
      {
        resource: 'Azure Standard_D4s_v3 VMs',
        currentCost: 2345.67,
        recommendedSize: 'Standard_D2s_v3',
        projectedCost: 1172.84,
        potentialSavings: 1172.83,
        confidence: 89.4,
        impact: 'Memory utilization: 35% → 70%',
        automation: 'Pending'
      },
      {
        resource: 'GCP n1-standard-4 instances',
        currentCost: 890.12,
        recommendedSize: 'n1-standard-2',
        projectedCost: 445.06,
        potentialSavings: 445.06,
        confidence: 92.8,
        impact: 'Network utilization: 15% → 30%',
        automation: 'Available'
      }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Cost Efficiency', value: 87.4, unit: '%', trend: 'improving' },
        { metric: 'Budget Utilization', value: 88.5, unit: '%', trend: 'stable' },
        { metric: 'Savings Rate', value: 13.4, unit: '%', trend: 'improving' },
        { metric: 'Optimization Coverage', value: 94.2, unit: '%', trend: 'improving' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFinopsData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        totalMonthlyCost: Math.max(200000, Math.min(300000, prev.totalMonthlyCost + (Math.random() - 0.5) * 5000)),
        optimizationScore: Math.max(75, Math.min(95, prev.optimizationScore + (Math.random() - 0.5) * 2)),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: Math.max(70, Math.min(98, metric.value + (Math.random() - 0.5) * 1.5))
          }))
        },
        multiCloudCosts: prev.multiCloudCosts.map(cloud => ({
          ...cloud,
          cost: Math.max(cloud.cost * 0.8, Math.min(cloud.cost * 1.2, cloud.cost + (Math.random() - 0.5) * 5000))
        }))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMIZED': case 'ACTIVE': case 'ON_TRACK': case 'IMPLEMENTED': case 'RESOLVED': case 'AUTO_RESOLVED': return 'text-green-400';
      case 'OPTIMIZING': case 'MONITORING': case 'PENDING_APPROVAL': case 'PENDING': case 'INVESTIGATING': return 'text-yellow-400';
      case 'NEEDS_ATTENTION': case 'OVER_BUDGET': case 'HIGH': return 'text-red-400';
      case 'UNDER_BUDGET': case 'LOW': case 'MEDIUM': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPTIMIZED': case 'ACTIVE': case 'ON_TRACK': case 'IMPLEMENTED': case 'RESOLVED': case 'AUTO_RESOLVED': return 'bg-green-400/20';
      case 'OPTIMIZING': case 'MONITORING': case 'PENDING_APPROVAL': case 'PENDING': case 'INVESTIGATING': return 'bg-yellow-400/20';
      case 'NEEDS_ATTENTION': case 'OVER_BUDGET': case 'HIGH': return 'bg-red-400/20';
      case 'UNDER_BUDGET': case 'LOW': case 'MEDIUM': return 'bg-blue-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    if (typeof trend === 'string') {
      switch (trend) {
        case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
        case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
        case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
        default: return <Activity className="w-4 h-4 text-gray-400" />;
      }
    } else {
      return trend < 0 ? <TrendingDown className="w-4 h-4 text-green-400" /> : <TrendingUp className="w-4 h-4 text-red-400" />;
    }
  };

  const getProviderIcon = (provider) => {
    const iconClass = "w-4 h-4";
    switch (provider) {
      case 'AWS': return <Globe className={`${iconClass} text-orange-400`} />;
      case 'Azure': return <Globe className={`${iconClass} text-blue-400`} />;
      case 'GCP': return <Globe className={`${iconClass} text-green-400`} />;
      default: return <Server className={`${iconClass} text-gray-400`} />;
    }
  };

  const getOptimizationIcon = (type) => {
    const iconClass = "w-4 h-4";
    switch (type) {
      case 'RIGHTSIZING': return <Target className={`${iconClass} text-blue-400`} />;
      case 'SPOT_INSTANCES': return <Zap className={`${iconClass} text-yellow-400`} />;
      case 'COMMITMENT': return <Lock className={`${iconClass} text-green-400`} />;
      default: return <Settings className={`${iconClass} text-purple-400`} />;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getCostEfficiencyColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-blue-400';
    if (score >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* FinOps Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <DollarSign className="w-8 h-8 text-green-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">FinOps Cost Optimization & Automation Center</h2>
              <div className="text-sm text-gray-400">AI-Driven Cost Management • Multi-Cloud Optimization • Automated Savings</div>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">AI OPTIMIZING</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Monthly Cost</div>
            <div className="text-2xl font-mono text-white font-bold">
              {formatCurrency(finopsData.totalMonthlyCost)}
            </div>
            <div className="text-xs flex items-center space-x-1">
              {getTrendIcon(finopsData.costTrend)}
              <span className={finopsData.costTrend < 0 ? 'text-green-400' : 'text-red-400'}>
                {Math.abs(finopsData.costTrend).toFixed(1)}% vs last month
              </span>
            </div>
          </div>
        </div>
        
        {/* Real-Time FinOps Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {finopsData.realTimeMetrics.performance.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.value >= 90 ? 'bg-green-400' : metric.value >= 80 ? 'bg-blue-400' : 
                    metric.value >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${Math.min(100, metric.value)}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <div className="text-sm text-gray-400">Savings This Month</div>
            <div className="text-xl font-mono text-green-400">{formatCurrency(finopsData.savingsThisMonth)}</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400">Budget Utilization</div>
            <div className="text-xl font-mono text-blue-400">
              {((finopsData.totalMonthlyCost / finopsData.monthlyBudget) * 100).toFixed(1)}%
            </div>
          </div>
          <div className="text-center">
            <div className="text-sm text-gray-400">Optimization Score</div>
            <div className={`text-xl font-mono ${getCostEfficiencyColor(finopsData.optimizationScore)}`}>
              {finopsData.optimizationScore.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Multi-Cloud Cost Breakdown */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Multi-Cloud Cost Breakdown</h3>
            <div className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs font-semibold rounded">
              3 PROVIDERS
            </div>
          </div>
          
          <div className="space-y-4">
            {finopsData.multiCloudCosts.map((cloud, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getProviderIcon(cloud.provider)}
                    <div>
                      <h4 className="text-white font-medium">{cloud.provider}</h4>
                      <div className="text-xs text-gray-400">{cloud.services} services • {cloud.percentage.toFixed(1)}% of total</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(cloud.status)} ${getStatusBg(cloud.status)}`}>
                      {cloud.status.replace('_', ' ')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono text-white">{formatCurrency(cloud.cost)}</div>
                    <div className="flex items-center space-x-1">
                      {getTrendIcon(cloud.trend)}
                      <span className={cloud.trend < 0 ? 'text-green-400' : 'text-red-400'} >
                        {Math.abs(cloud.trend).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-400">Optimization Potential</div>
                    <div className="text-green-400 font-mono text-lg">{formatCurrency(cloud.optimizationPotential)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Last Optimization</div>
                    <div className="text-blue-400 text-sm">{cloud.lastOptimization}</div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-green-400 transition-all duration-300"
                    style={{ width: `${cloud.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Optimizations */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">AI Optimizations</h3>
          </div>
          
          <div className="space-y-3">
            {finopsData.aiOptimizations.map((optimization, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getOptimizationIcon(optimization.type)}
                    <span className="text-white font-medium text-sm">{optimization.type.replace('_', ' ')}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(optimization.status)} ${getStatusBg(optimization.status)}`}>
                    {optimization.status.replace('_', ' ')}
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-2">{optimization.action}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Potential:</span>
                    <span className="text-green-400 ml-1">{formatCurrency(optimization.potentialSavings)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Actual:</span>
                    <span className="text-blue-400 ml-1">
                      {optimization.actualSavings ? formatCurrency(optimization.actualSavings) : 'TBD'}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Confidence:</span>
                    <span className="text-purple-400 ml-1">{optimization.confidence.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Time:</span>
                    <span className="text-cyan-400 ml-1">{optimization.time}</span>
                  </div>
                </div>

                <div className="text-xs text-blue-400 mb-1">{optimization.impact}</div>
                <div className="text-xs text-gray-400">
                  By {optimization.automation} • {optimization.resource}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Budget Tracking */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Budget Tracking</h3>
          </div>
          
          <div className="space-y-4">
            {finopsData.budgetTracking.map((budget, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{budget.category}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(budget.status)} ${getStatusBg(budget.status)}`}>
                    {budget.status.replace('_', ' ')}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 mb-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-400">Budget</div>
                    <div className="text-white font-mono">{formatCurrency(budget.budget)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Actual</div>
                    <div className="text-blue-400 font-mono">{formatCurrency(budget.actual)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Forecast</div>
                    <div className="text-purple-400 font-mono">{formatCurrency(budget.forecast)}</div>
                  </div>
                </div>

                <div className="mb-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Utilization: {budget.utilization.toFixed(1)}%</span>
                    <span className={budget.variance < 0 ? 'text-green-400' : 'text-red-400'}>
                      {budget.variance > 0 ? '+' : ''}{budget.variance.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        budget.utilization <= 100 ? 'bg-blue-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${Math.min(100, budget.utilization)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Anomalies & Rightsizing */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Cost Anomalies</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {finopsData.costAnomalies.map((anomaly, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                anomaly.severity === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                anomaly.severity === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{anomaly.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(anomaly.severity)} ${getStatusBg(anomaly.severity)}`}>
                      {anomaly.severity}
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(anomaly.status)} ${getStatusBg(anomaly.status)}`}>
                    {anomaly.status.replace('_', ' ')}
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-2">
                  <strong>{anomaly.service}:</strong> {anomaly.anomaly}
                </div>
                
                <div className="text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current:</span>
                    <span className="text-red-400">{formatCurrency(anomaly.cost)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Baseline:</span>
                    <span className="text-green-400">{formatCurrency(anomaly.baseline)}</span>
                  </div>
                </div>

                <div className="text-xs text-blue-400">{anomaly.recommendation}</div>
              </div>
            ))}
          </div>

          {/* Automation Tools Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Active Automation Tools</div>
            <div className="space-y-2">
              {finopsData.automationTools.map((tool, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <span className="text-gray-300">{tool.name}</span>
                  <span className="text-green-400">{formatCurrency(tool.savingsThisMonth)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}