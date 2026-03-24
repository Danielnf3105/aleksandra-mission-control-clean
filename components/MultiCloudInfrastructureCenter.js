// Multi-Cloud Infrastructure Operations Center - 2026 Unified Cloud Management
// Based on Firefly, Vantage, CloudQuery, CAST AI, and CloudCheckr research
import { useState, useEffect } from 'react';
import { 
  Cloud, DollarSign, Shield, TrendingUp, TrendingDown, AlertTriangle, CheckCircle,
  Server, Database, Zap, Globe, Target, Activity, Clock, Users, Settings,
  BarChart3, PieChart, LineChart, Gauge, Monitor, Wifi, HardDrive, Cpu,
  Eye, Lock, Key, AlertCircle, Info, Award, Minus, Plus, RefreshCw
} from 'lucide-react';

export default function MultiCloudInfrastructureCenter() {
  const [cloudData, setCloudData] = useState({
    currentTime: new Date().toISOString(),
    totalMonthlyCost: 47829.34,
    costTrend: 'declining',
    costSavings: 8947.12,
    securityPosture: 'COMPLIANT',
    overallHealth: 96.7,
    cloudProviders: [
      {
        name: 'AWS',
        status: 'HEALTHY',
        regions: 3,
        services: 47,
        monthlyCost: 28947.82,
        costTrend: 'stable',
        resources: {
          ec2Instances: 28,
          rdsInstances: 8,
          s3Buckets: 45,
          lambdaFunctions: 156
        },
        utilizationMetrics: {
          compute: 74.3,
          storage: 67.8,
          network: 89.2,
          database: 82.1
        },
        securityScore: 97.4,
        complianceStatus: 'COMPLIANT',
        lastAssessment: '2h ago'
      },
      {
        name: 'Azure',
        status: 'HEALTHY',
        regions: 2,
        services: 32,
        monthlyCost: 12456.73,
        costTrend: 'declining',
        resources: {
          virtualMachines: 15,
          sqlDatabases: 4,
          storageAccounts: 23,
          functionApps: 89
        },
        utilizationMetrics: {
          compute: 68.7,
          storage: 71.4,
          network: 76.3,
          database: 78.9
        },
        securityScore: 95.8,
        complianceStatus: 'COMPLIANT',
        lastAssessment: '1h ago'
      },
      {
        name: 'GCP',
        status: 'WARNING',
        regions: 2,
        services: 24,
        monthlyCost: 6424.79,
        costTrend: 'increasing',
        resources: {
          computeInstances: 12,
          cloudSqlInstances: 3,
          storageBuckets: 18,
          cloudFunctions: 67
        },
        utilizationMetrics: {
          compute: 91.2,
          storage: 45.6,
          network: 67.4,
          database: 73.5
        },
        securityScore: 89.3,
        complianceStatus: 'NEEDS_ATTENTION',
        lastAssessment: '4h ago'
      }
    ],
    finOpsMetrics: {
      monthlyBudget: 52000,
      actualSpend: 47829.34,
      variance: -8.0,
      forecastedSpend: 51247.89,
      costOptimizationOpportunities: [
        {
          provider: 'AWS',
          opportunity: 'Reserved Instance Optimization',
          potentialSavings: 3420.45,
          priority: 'HIGH',
          impact: 'Annual savings of $41,045'
        },
        {
          provider: 'Azure',
          opportunity: 'Unused Storage Cleanup',
          potentialSavings: 890.23,
          priority: 'MEDIUM',
          impact: 'Remove 2.3TB unused storage'
        },
        {
          provider: 'GCP',
          opportunity: 'Right-size Compute Instances',
          potentialSavings: 1247.67,
          priority: 'HIGH',
          impact: 'Optimize 8 oversized instances'
        }
      ]
    },
    securityOverview: {
      criticalFindings: 2,
      mediumFindings: 8,
      lowFindings: 15,
      complianceFrameworks: [
        { name: 'SOC 2', status: 'COMPLIANT', score: 98.7 },
        { name: 'ISO 27001', status: 'COMPLIANT', score: 96.4 },
        { name: 'PCI DSS', status: 'NEEDS_ATTENTION', score: 87.2 },
        { name: 'GDPR', status: 'COMPLIANT', score: 94.8 }
      ]
    },
    costBreakdown: [
      { category: 'Compute', amount: 18947.23, percentage: 39.6 },
      { category: 'Storage', amount: 8734.56, percentage: 18.3 },
      { category: 'Networking', amount: 7245.89, percentage: 15.2 },
      { category: 'Database', status: 'HEALTHY', amount: 6821.34, percentage: 14.3 },
      { category: 'Security', amount: 3456.78, percentage: 7.2 },
      { category: 'Other', amount: 2623.54, percentage: 5.5 }
    ],
    alerts: [
      {
        time: '04:52',
        severity: 'CRITICAL',
        provider: 'GCP',
        type: 'SECURITY',
        message: 'Unusual access pattern detected in Cloud Storage bucket',
        status: 'ACTIVE'
      },
      {
        time: '04:49',
        severity: 'WARNING',
        provider: 'AWS',
        type: 'COST',
        message: 'EC2 instances exceed 90% of monthly budget allocation',
        status: 'ACKNOWLEDGED'
      },
      {
        time: '04:46',
        severity: 'INFO',
        provider: 'Azure',
        type: 'OPTIMIZATION',
        message: 'Cost optimization recommendation: Scale down dev environment',
        status: 'RESOLVED'
      }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Multi-Cloud Health', value: 96.7, unit: '%', trend: 'stable' },
        { metric: 'Cost Efficiency', value: 91.8, unit: '%', trend: 'improving' },
        { metric: 'Security Posture', value: 94.2, unit: '%', trend: 'stable' },
        { metric: 'Resource Utilization', value: 76.4, unit: '%', trend: 'stable' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        totalMonthlyCost: Math.max(40000, Math.min(55000, prev.totalMonthlyCost + (Math.random() - 0.5) * 100)),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'Cost Efficiency' 
              ? Math.max(85, Math.min(98, metric.value + (Math.random() - 0.3) * 1.5))
              : Math.max(90, Math.min(100, metric.value + (Math.random() - 0.5) * 0.8))
          }))
        },
        cloudProviders: prev.cloudProviders.map(provider => ({
          ...provider,
          utilizationMetrics: {
            ...provider.utilizationMetrics,
            compute: Math.max(30, Math.min(100, provider.utilizationMetrics.compute + (Math.random() - 0.5) * 5))
          }
        }))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': case 'COMPLIANT': case 'RESOLVED': return 'text-green-400';
      case 'WARNING': case 'NEEDS_ATTENTION': case 'ACKNOWLEDGED': return 'text-yellow-400';
      case 'CRITICAL': case 'ACTIVE': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'HEALTHY': case 'COMPLIANT': case 'RESOLVED': return 'bg-green-400/20';
      case 'WARNING': case 'NEEDS_ATTENTION': case 'ACKNOWLEDGED': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'ACTIVE': return 'bg-red-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': case 'declining': return <TrendingDown className="w-4 h-4 text-green-400" />;
      case 'increasing': return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getProviderIcon = (provider) => {
    const iconClass = "w-5 h-5";
    switch (provider) {
      case 'AWS': return <Cloud className={`${iconClass} text-orange-400`} />;
      case 'Azure': return <Cloud className={`${iconClass} text-blue-400`} />;
      case 'GCP': return <Cloud className={`${iconClass} text-green-400`} />;
      default: return <Cloud className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Multi-Cloud Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Globe className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Multi-Cloud Infrastructure Operations Center</h2>
              <div className="text-sm text-gray-400">Unified AWS • Azure • GCP Management & FinOps</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(cloudData.securityPosture)} ${getStatusBg(cloudData.securityPosture)}`}>
              {cloudData.securityPosture}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Monthly Spend</div>
            <div className="text-2xl font-mono text-green-400 font-bold">
              {formatCurrency(cloudData.totalMonthlyCost)}
            </div>
            <div className="text-xs text-emerald-400 flex items-center">
              <TrendingDown className="w-3 h-3 mr-1" />
              Saved {formatCurrency(cloudData.costSavings)}
            </div>
          </div>
        </div>
        
        {/* Real-Time Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {cloudData.realTimeMetrics.performance.map((metric, index) => (
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
                    metric.value >= 95 ? 'bg-green-400' : metric.value >= 80 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cloud Providers Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Server className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Cloud Provider Infrastructure</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {cloudData.cloudProviders.filter(p => p.status === 'HEALTHY').length}/{cloudData.cloudProviders.length} HEALTHY
            </div>
          </div>
          
          <div className="space-y-4">
            {cloudData.cloudProviders.map((provider, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getProviderIcon(provider.name)}
                    <h4 className="text-white font-medium">{provider.name}</h4>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(provider.status)} ${getStatusBg(provider.status)}`}>
                      {provider.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-mono text-white">{formatCurrency(provider.monthlyCost)}</div>
                    <div className="flex items-center text-xs">
                      {getTrendIcon(provider.costTrend)}
                      <span className="ml-1 text-gray-400">{provider.costTrend}</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Regions</div>
                    <div className="text-white font-mono text-lg">{provider.regions}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Services</div>
                    <div className="text-white font-mono text-lg">{provider.services}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Security Score</div>
                    <div className={`font-mono text-lg ${provider.securityScore > 95 ? 'text-green-400' : provider.securityScore > 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {provider.securityScore}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Compliance</div>
                    <div className={`text-xs font-semibold ${getStatusColor(provider.complianceStatus)}`}>
                      {provider.complianceStatus.replace('_', ' ')}
                    </div>
                  </div>
                </div>

                {/* Resource Utilization */}
                <div className="grid grid-cols-4 gap-2">
                  {Object.entries(provider.utilizationMetrics).map(([resource, usage]) => (
                    <div key={resource} className="text-center">
                      <div className="text-xs text-gray-400 capitalize">{resource}</div>
                      <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                        <div 
                          className={`h-full rounded-full transition-all duration-300 ${
                            usage > 90 ? 'bg-red-400' : usage > 70 ? 'bg-yellow-400' : 'bg-green-400'
                          }`}
                          style={{ width: `${usage}%` }}
                        />
                      </div>
                      <div className="text-xs text-white mt-1">{usage.toFixed(1)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FinOps Cost Optimization */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <DollarSign className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">FinOps Optimization</h3>
          </div>
          
          {/* Budget vs Actual */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Budget Performance</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Monthly Budget</span>
                <span className="text-white font-mono">{formatCurrency(cloudData.finOpsMetrics.monthlyBudget)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Actual Spend</span>
                <span className="text-green-400 font-mono">{formatCurrency(cloudData.finOpsMetrics.actualSpend)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Variance</span>
                <span className="text-emerald-400 font-mono">{cloudData.finOpsMetrics.variance.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-green-400 h-full rounded-full"
                  style={{ width: `${(cloudData.finOpsMetrics.actualSpend / cloudData.finOpsMetrics.monthlyBudget) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cost Optimization Opportunities */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Optimization Opportunities</div>
            <div className="space-y-2">
              {cloudData.finOpsMetrics.costOptimizationOpportunities.map((opportunity, index) => (
                <div key={index} className="p-2 bg-slate-800/30 rounded border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-blue-400">{opportunity.provider}</span>
                    <div className={`px-1 py-0.5 text-xs font-semibold rounded ${getPriorityColor(opportunity.priority)}`}>
                      {opportunity.priority}
                    </div>
                  </div>
                  <div className="text-sm text-gray-300 mb-1">{opportunity.opportunity}</div>
                  <div className="text-xs text-green-400 font-mono mb-1">
                    Save {formatCurrency(opportunity.potentialSavings)}/month
                  </div>
                  <div className="text-xs text-gray-400">{opportunity.impact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Security & Compliance */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Security & Compliance</h3>
          </div>
          
          {/* Security Findings */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Security Findings</div>
            <div className="grid grid-cols-3 gap-3">
              <div className="text-center p-2 bg-red-400/10 rounded border border-red-400/30">
                <div className="text-red-400 font-mono text-lg">{cloudData.securityOverview.criticalFindings}</div>
                <div className="text-xs text-gray-400">Critical</div>
              </div>
              <div className="text-center p-2 bg-yellow-400/10 rounded border border-yellow-400/30">
                <div className="text-yellow-400 font-mono text-lg">{cloudData.securityOverview.mediumFindings}</div>
                <div className="text-xs text-gray-400">Medium</div>
              </div>
              <div className="text-center p-2 bg-blue-400/10 rounded border border-blue-400/30">
                <div className="text-blue-400 font-mono text-lg">{cloudData.securityOverview.lowFindings}</div>
                <div className="text-xs text-gray-400">Low</div>
              </div>
            </div>
          </div>

          {/* Compliance Frameworks */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Compliance Frameworks</div>
            <div className="space-y-2">
              {cloudData.securityOverview.complianceFrameworks.map((framework, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      framework.status === 'COMPLIANT' ? 'bg-green-400' :
                      framework.status === 'NEEDS_ATTENTION' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></div>
                    <span className="text-sm text-gray-300">{framework.name}</span>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-mono ${
                      framework.score > 95 ? 'text-green-400' :
                      framework.score > 85 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {framework.score}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-Time Alerts & Events */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Multi-Cloud Alerts</h3>
          </div>
          
          <div className="space-y-3">
            {cloudData.alerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded border transition-all ${
                alert.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                alert.severity === 'WARNING' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{alert.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${
                      alert.severity === 'CRITICAL' ? 'text-red-400 bg-red-400/20' :
                      alert.severity === 'WARNING' ? 'text-yellow-400 bg-yellow-400/20' :
                      'text-blue-400 bg-blue-400/20'
                    }`}>
                      {alert.severity}
                    </div>
                    {getProviderIcon(alert.provider)}
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert.status)} ${getStatusBg(alert.status)}`}>
                    {alert.status}
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-1">{alert.message}</div>
                <div className="text-xs text-gray-400">{alert.provider} • {alert.type}</div>
              </div>
            ))}
          </div>

          {/* Cost Breakdown Chart Placeholder */}
          <div className="mt-4 bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Cost Distribution</div>
            <div className="space-y-1">
              {cloudData.costBreakdown.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">{item.category}</span>
                  <span className="text-xs text-white font-mono">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}