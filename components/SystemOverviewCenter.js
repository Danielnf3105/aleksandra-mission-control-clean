// System Overview Center - Unified operational status across all mission control areas
import { useState, useEffect } from 'react';
import { Command, Shield, TrendingUp, Zap, Globe, AlertTriangle, CheckCircle, Clock, BarChart3, Users, Server, Activity } from 'lucide-react';

export default function SystemOverviewCenter() {
  const [overviewData, setOverviewData] = useState({
    systemStatus: {
      overallHealth: 96.8,
      operationalState: 'OPTIMAL',
      lastIncident: '4h 23m ago',
      uptime: '99.97%',
      activeSystems: 23,
      totalSystems: 24,
      criticalAlerts: 2,
      maintenanceWindows: 1
    },
    subsystemStatus: [
      {
        name: 'Content Pipeline',
        status: 'optimal',
        health: 98.3,
        throughput: 247,
        capacity: 85.4,
        lastUpdate: '12s ago',
        activeJobs: 12,
        description: 'Instagram videos, transcriptions, content processing'
      },
      {
        name: 'Agent Network',
        status: 'healthy',
        health: 94.7,
        throughput: 1847,
        capacity: 73.2,
        lastUpdate: '3s ago',
        activeJobs: 178,
        description: '15 AI agents, task orchestration, performance monitoring'
      },
      {
        name: 'Project Management',
        status: 'optimal',
        health: 96.1,
        throughput: 72,
        capacity: 68.0,
        lastUpdate: '45s ago',
        activeJobs: 8,
        description: 'Milestones, deliverables, budget tracking, team coordination'
      },
      {
        name: 'Data Streams',
        status: 'optimal',
        health: 99.2,
        throughput: 1248,
        capacity: 67.3,
        lastUpdate: '1s ago',
        activeJobs: 12,
        description: 'Real-time feeds, streaming analytics, network topology'
      },
      {
        name: 'Security Systems',
        status: 'optimal',
        health: 99.5,
        throughput: 423,
        capacity: 34.2,
        lastUpdate: '2s ago',
        activeJobs: 5,
        description: 'Threat detection, compliance monitoring, anomaly analysis'
      },
      {
        name: 'Infrastructure',
        status: 'warning',
        health: 87.4,
        throughput: 156,
        capacity: 89.7,
        lastUpdate: '8s ago',
        activeJobs: 34,
        description: 'Server resources, networking, storage, compute capacity'
      }
    ],
    keyMetrics: [
      { metric: 'System Uptime', value: '99.97%', change: '+0.02%', trend: 'up', target: '99.95%' },
      { metric: 'Response Time', value: '1.2s', change: '-0.3s', trend: 'up', target: '< 2.0s' },
      { metric: 'Error Rate', value: '0.03%', change: '-0.01%', trend: 'up', target: '< 0.1%' },
      { metric: 'Throughput', value: '3.9K/s', change: '+15%', trend: 'up', target: '3.5K/s' },
      { metric: 'Cost Efficiency', value: '92.1%', change: '+3.2%', trend: 'up', target: '90%' },
      { metric: 'Security Score', value: '99.5', change: '+0.8', trend: 'up', target: '95.0' }
    ],
    operationalInsights: [
      {
        title: 'Peak Performance Period',
        description: 'System operating at 96.8% efficiency during high-demand processing',
        impact: 'Positive',
        recommendation: 'Maintain current resource allocation',
        category: 'Performance'
      },
      {
        title: 'Infrastructure Capacity Alert',
        description: 'Server utilization approaching 90% threshold in processing cluster',
        impact: 'Warning',
        recommendation: 'Consider scaling compute resources within 24 hours',
        category: 'Capacity'
      },
      {
        title: 'Security Posture Excellent',
        description: 'All compliance metrics exceed targets with zero security incidents',
        impact: 'Positive',
        recommendation: 'Continue current security protocols',
        category: 'Security'
      },
      {
        title: 'Cost Optimization Success',
        description: 'Resource efficiency improved 3.2% through intelligent allocation',
        impact: 'Positive',
        recommendation: 'Apply optimization patterns to additional workloads',
        category: 'Financial'
      }
    ],
    criticalPaths: [
      {
        path: 'Content → Processing → Assembly AI → Delivery',
        status: 'optimal',
        bottleneck: 'None',
        avgTime: '2m 34s',
        reliability: 98.7
      },
      {
        path: 'Social Media → Engagement → Analysis → Response',
        status: 'healthy',
        bottleneck: 'API Rate Limits',
        avgTime: '1m 12s',
        reliability: 96.3
      },
      {
        path: 'Project Planning → Execution → Delivery → Review',
        status: 'optimal',
        bottleneck: 'None',
        avgTime: '4d 6h',
        reliability: 94.8
      },
      {
        path: 'Data Ingestion → Processing → Analysis → Storage',
        status: 'optimal',
        bottleneck: 'None',
        avgTime: '847ms',
        reliability: 99.4
      }
    ],
    resourceDistribution: {
      compute: 73.2,
      memory: 67.8,
      storage: 23.4,
      network: 45.6,
      cost: 68.0
    },
    recentEvents: [
      {
        time: '18:42',
        event: 'System optimization completed',
        severity: 'info',
        component: 'Resource Manager',
        description: 'CPU utilization reduced by 12% through intelligent load balancing'
      },
      {
        time: '18:35',
        event: 'High throughput detected',
        severity: 'info',
        component: 'Content Pipeline',
        description: 'Processing 40% above baseline - all systems responding normally'
      },
      {
        time: '18:28',
        event: 'Security scan completed',
        severity: 'success',
        component: 'Security Monitor',
        description: 'Full system scan completed - no threats detected'
      },
      {
        time: '18:15',
        event: 'Infrastructure scaling',
        severity: 'warning',
        component: 'Infrastructure',
        description: 'Automatic scaling triggered due to increased demand'
      },
      {
        time: '18:03',
        event: 'Project milestone achieved',
        severity: 'success',
        component: 'Project Tracker',
        description: 'LinkedIn Carousel Automation reached 80% completion'
      }
    ],
    globalAlerts: [
      {
        level: 'critical',
        message: 'Infrastructure capacity approaching limits',
        component: 'Infrastructure Systems',
        action: 'Scale compute resources',
        eta: '6h remaining'
      },
      {
        level: 'warning',
        message: 'Assembly AI queue above optimal threshold',
        component: 'Content Pipeline',
        action: 'Monitor queue processing',
        eta: 'Auto-resolving'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOverviewData(prev => ({
        ...prev,
        systemStatus: {
          ...prev.systemStatus,
          overallHealth: Math.max(94, Math.min(99, prev.systemStatus.overallHealth + (Math.random() - 0.5) * 1)),
          activeSystems: Math.max(22, Math.min(24, prev.systemStatus.activeSystems + (Math.random() > 0.9 ? (Math.random() > 0.5 ? 1 : -1) : 0)))
        },
        subsystemStatus: prev.subsystemStatus.map(system => ({
          ...system,
          health: Math.max(85, Math.min(100, system.health + (Math.random() - 0.5) * 2)),
          throughput: Math.max(system.throughput * 0.8, Math.min(system.throughput * 1.2, system.throughput + (Math.random() - 0.5) * 50)),
          capacity: Math.max(30, Math.min(95, system.capacity + (Math.random() - 0.5) * 5))
        }))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'optimal': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'healthy': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'OPTIMAL': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getHealthColor = (health) => {
    if (health >= 98) return 'text-cyan-400';
    if (health >= 95) return 'text-green-400';
    if (health >= 90) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendIcon = (trend) => {
    return trend === 'up' ? <TrendingUp className="w-3 h-3 text-green-400" /> : <TrendingUp className="w-3 h-3 text-red-400 rotate-180" />;
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'success': return 'text-green-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Positive': return 'text-green-400';
      case 'Warning': return 'text-yellow-400';
      case 'Critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertIcon = (level) => {
    switch (level) {
      case 'critical': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'info': return <CheckCircle className="w-4 h-4 text-blue-400" />;
      default: return <CheckCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Command className="w-8 h-8 text-cyan-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">System Overview Center</h2>
            <p className="text-gray-400">Unified operational status across all mission control areas</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className={`text-lg font-bold px-3 py-1 rounded border ${getStatusColor(overviewData.systemStatus.operationalState)}`}>
              {overviewData.systemStatus.operationalState}
            </div>
            <div className="text-xs text-gray-400 mt-1">System State</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${getHealthColor(overviewData.systemStatus.overallHealth)}`}>
              {overviewData.systemStatus.overallHealth.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400">Overall Health</div>
          </div>
        </div>
      </div>

      {/* System Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className={`text-lg font-bold ${getHealthColor(overviewData.systemStatus.overallHealth)}`}>
            {overviewData.systemStatus.overallHealth.toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400">Health Score</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{overviewData.systemStatus.uptime}</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{overviewData.systemStatus.activeSystems}</div>
          <div className="text-xs text-gray-400">Active Systems</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{overviewData.systemStatus.totalSystems}</div>
          <div className="text-xs text-gray-400">Total Systems</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{overviewData.systemStatus.criticalAlerts}</div>
          <div className="text-xs text-gray-400">Critical Alerts</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{overviewData.systemStatus.maintenanceWindows}</div>
          <div className="text-xs text-gray-400">Maintenance</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center col-span-2">
          <div className="text-sm font-bold text-purple-400">{overviewData.systemStatus.lastIncident}</div>
          <div className="text-xs text-gray-400">Last Incident</div>
        </div>
      </div>

      {/* Global Alerts */}
      {overviewData.globalAlerts.length > 0 && (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-bold text-white">Global Alerts</h3>
          </div>
          <div className="space-y-3">
            {overviewData.globalAlerts.map((alert, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-start space-x-3">
                  {getAlertIcon(alert.level)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-white font-medium">{alert.message}</div>
                      <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(alert.level)}`}>
                        {alert.level.toUpperCase()}
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm mb-1">{alert.component}</div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="text-cyan-400">{alert.action}</div>
                      <div className="text-yellow-400">{alert.eta}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subsystem Status */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Server className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Subsystem Status</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="text-xs text-cyan-400">MONITORING</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {overviewData.subsystemStatus.map((system, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{system.name}</div>
                <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(system.status)}`}>
                  {system.status.toUpperCase()}
                </div>
              </div>

              <div className="text-gray-300 text-sm mb-3">{system.description}</div>

              <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                <div>
                  <div className="text-gray-400">Health Score</div>
                  <div className={`font-medium ${getHealthColor(system.health)}`}>{system.health.toFixed(1)}%</div>
                </div>
                <div>
                  <div className="text-gray-400">Throughput</div>
                  <div className="text-blue-400 font-medium">{system.throughput.toFixed(0)}/s</div>
                </div>
                <div>
                  <div className="text-gray-400">Capacity</div>
                  <div className={`font-medium ${system.capacity > 80 ? 'text-yellow-400' : 'text-green-400'}`}>{system.capacity.toFixed(1)}%</div>
                </div>
                <div>
                  <div className="text-gray-400">Active Jobs</div>
                  <div className="text-purple-400 font-medium">{system.activeJobs}</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Health</span>
                  <span className={`font-bold ${getHealthColor(system.health)}`}>{system.health.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${system.health >= 95 ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' : 
                      system.health >= 90 ? 'bg-gradient-to-r from-green-400 to-green-500' : 
                      'bg-gradient-to-r from-yellow-400 to-orange-500'}`}
                    style={{ width: `${system.health}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">Last update: {system.lastUpdate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Key Metrics */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Key Performance Metrics</h3>
          </div>
          <div className="space-y-3">
            {overviewData.keyMetrics.map((metric, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-white font-medium">{metric.metric}</div>
                  <div className="flex items-center space-x-1">
                    {getTrendIcon(metric.trend)}
                    <div className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {metric.change}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-cyan-400 font-bold text-lg">{metric.value}</div>
                  <div className="text-gray-400 text-sm">Target: {metric.target}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operational Insights */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Operational Insights</h3>
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {overviewData.operationalInsights.map((insight, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{insight.title}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getImpactColor(insight.impact)} bg-opacity-20`}>
                    {insight.impact.toUpperCase()}
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{insight.description}</div>
                <div className="text-cyan-400 text-sm mb-1">{insight.recommendation}</div>
                <div className="text-xs text-gray-500">{insight.category}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Critical Paths & Recent Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Critical Paths */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Critical System Paths</h3>
          </div>
          <div className="space-y-3">
            {overviewData.criticalPaths.map((path, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium text-sm">{path.path}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(path.status)}`}>
                    {path.status.toUpperCase()}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{path.avgTime}</div>
                    <div className="text-gray-400">Avg Time</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">{path.reliability.toFixed(1)}%</div>
                    <div className="text-gray-400">Reliability</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-400">{path.bottleneck}</div>
                    <div className="text-gray-400">Bottleneck</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Events */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Recent System Events</h3>
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {overviewData.recentEvents.map((event, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-start space-x-2">
                  <div className={`w-2 h-2 rounded-full mt-2 ${getSeverityColor(event.severity).includes('red') ? 'bg-red-400' : 
                    getSeverityColor(event.severity).includes('yellow') ? 'bg-yellow-400' : 
                    getSeverityColor(event.severity).includes('green') ? 'bg-green-400' : 'bg-blue-400'}`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-white text-sm font-medium">{event.event}</div>
                      <div className="text-xs text-gray-400">{event.time}</div>
                    </div>
                    <div className="text-gray-300 text-sm mb-1">{event.description}</div>
                    <div className="text-purple-400 text-xs">{event.component}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Distribution */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Global Resource Distribution</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {Object.entries(overviewData.resourceDistribution).map(([resource, usage], index) => (
            <div key={index} className="text-center">
              <div className="text-sm text-gray-300 mb-2 capitalize">{resource}</div>
              <div className="relative w-20 h-20 mx-auto mb-2">
                <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-gray-700"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className={`${usage > 80 ? 'text-red-400' : usage > 60 ? 'text-yellow-400' : 'text-green-400'}`}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={`${usage}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`text-lg font-bold ${usage > 80 ? 'text-red-400' : usage > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {usage.toFixed(0)}%
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-400">Utilization</div>
            </div>
          ))}
        </div>
      </div>

      {/* System Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
              <Command className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">{overviewData.systemStatus.overallHealth.toFixed(0)}%</div>
              <div className="text-sm text-gray-300">System Health</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{overviewData.systemStatus.uptime}</div>
              <div className="text-sm text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{overviewData.systemStatus.activeSystems}/{overviewData.systemStatus.totalSystems}</div>
              <div className="text-sm text-gray-300">Active Systems</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{overviewData.systemStatus.operationalState}</div>
              <div className="text-sm text-gray-300">Operational State</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}