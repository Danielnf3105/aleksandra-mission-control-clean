// Mission Control Summary - Executive dashboard with unified metrics and insights
import { useState, useEffect } from 'react';
import { Command, TrendingUp, Activity, Users, Shield, Zap, Clock, CheckCircle, AlertTriangle, Target, Globe, Star } from 'lucide-react';

export default function MissionControlSummary() {
  const [summaryData, setSummaryData] = useState({
    executiveSummary: {
      missionStatus: 'OPERATIONAL EXCELLENCE',
      overallEfficiency: 94.8,
      systemsOnline: 24,
      totalSystems: 24,
      criticalIssues: 0,
      uptime: 99.97,
      lastMajorIncident: '72h ago',
      nextPlannedMaintenance: '18h'
    },
    keyPerformanceIndicators: [
      {
        name: 'Content Processing',
        value: 98.3,
        target: 95.0,
        trend: '+2.4%',
        status: 'exceeding',
        description: 'Instagram videos, transcriptions, content pipeline efficiency'
      },
      {
        name: 'Agent Operations',
        value: 94.7,
        target: 90.0,
        trend: '+5.2%',
        status: 'exceeding',
        description: '15 AI agents, task coordination, performance optimization'
      },
      {
        name: 'Project Delivery',
        value: 72.4,
        target: 75.0,
        trend: '+8.1%',
        status: 'on-track',
        description: '8 active projects, milestones, deliverable tracking'
      },
      {
        name: 'Data Streaming',
        value: 99.2,
        target: 95.0,
        trend: '+1.8%',
        status: 'exceeding',
        description: '12 live streams, real-time analytics, network topology'
      },
      {
        name: 'Security Posture',
        value: 99.5,
        target: 95.0,
        trend: '+0.7%',
        status: 'exceeding',
        description: 'Threat detection, compliance, anomaly monitoring'
      },
      {
        name: 'Infrastructure',
        value: 87.4,
        target: 85.0,
        trend: '+3.9%',
        status: 'healthy',
        description: 'Compute, storage, network, resource optimization'
      }
    ],
    operationalHighlights: [
      {
        category: 'Performance',
        icon: TrendingUp,
        color: 'green',
        highlight: 'Peak efficiency achieved at 94.8%',
        description: 'All subsystems operating above baseline with optimal resource utilization',
        impact: 'High'
      },
      {
        category: 'Security',
        icon: Shield,
        color: 'blue',
        highlight: 'Zero security incidents detected',
        description: 'Complete threat mitigation with 99.5% compliance score maintained',
        impact: 'Critical'
      },
      {
        category: 'Innovation',
        icon: Star,
        color: 'purple',
        highlight: 'Real-time dashboard evolution',
        description: 'Mission control capabilities enhanced with unified operational intelligence',
        impact: 'Strategic'
      },
      {
        category: 'Reliability',
        icon: CheckCircle,
        color: 'cyan',
        highlight: '99.97% system uptime maintained',
        description: 'Continuous operation with zero unplanned downtime events',
        impact: 'High'
      }
    ],
    missionObjectives: [
      {
        objective: 'Content Processing Excellence',
        progress: 98.3,
        status: 'achieved',
        description: 'Automated Instagram content processing with transcription capabilities',
        completionDate: '2026-03-12'
      },
      {
        objective: 'Agent Network Optimization',
        progress: 94.7,
        status: 'on-track',
        description: 'Multi-agent coordination and task orchestration framework',
        completionDate: '2026-03-15'
      },
      {
        objective: 'Real-time Intelligence',
        progress: 91.6,
        status: 'on-track',
        description: 'Live data streaming and performance analytics dashboard',
        completionDate: '2026-03-18'
      },
      {
        objective: 'Project Visibility',
        progress: 88.2,
        status: 'on-track',
        description: 'Comprehensive project tracking and milestone management',
        completionDate: '2026-03-22'
      },
      {
        objective: 'Security Integration',
        progress: 99.5,
        status: 'achieved',
        description: 'End-to-end security monitoring and compliance framework',
        completionDate: '2026-03-10'
      }
    ],
    resourceUtilization: {
      compute: {
        current: 73.2,
        optimal: 75.0,
        trend: 'stable',
        efficiency: 97.6
      },
      memory: {
        current: 67.8,
        optimal: 70.0,
        trend: 'decreasing',
        efficiency: 96.9
      },
      storage: {
        current: 23.4,
        optimal: 60.0,
        trend: 'stable',
        efficiency: 39.0
      },
      network: {
        current: 45.6,
        optimal: 50.0,
        trend: 'increasing',
        efficiency: 91.2
      }
    },
    strategicInsights: [
      {
        insight: 'Infrastructure Scaling Opportunity',
        priority: 'medium',
        description: 'Current capacity utilization indicates readiness for 40% workload increase',
        recommendation: 'Evaluate expansion opportunities for content processing pipeline',
        timeframe: '2-3 weeks',
        impact: 'Growth enablement'
      },
      {
        insight: 'Agent Optimization Success',
        priority: 'low',
        description: 'AI agent network achieving 94.7% efficiency with room for enhancement',
        recommendation: 'Implement advanced coordination algorithms for 5% efficiency gain',
        timeframe: '1-2 weeks',
        impact: 'Performance optimization'
      },
      {
        insight: 'Security Excellence Maintained',
        priority: 'low',
        description: 'Zero incidents with comprehensive threat coverage and compliance',
        recommendation: 'Continue current security protocols and monitoring practices',
        timeframe: 'Ongoing',
        impact: 'Risk mitigation'
      }
    ],
    systemHealth: {
      overall: 94.8,
      components: [
        { name: 'Content Pipeline', health: 98.3, status: 'optimal' },
        { name: 'Agent Network', health: 94.7, status: 'healthy' },
        { name: 'Project Systems', health: 72.4, status: 'healthy' },
        { name: 'Data Streams', health: 99.2, status: 'optimal' },
        { name: 'Security Layer', health: 99.5, status: 'optimal' },
        { name: 'Infrastructure', health: 87.4, status: 'warning' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSummaryData(prev => ({
        ...prev,
        executiveSummary: {
          ...prev.executiveSummary,
          overallEfficiency: Math.max(92, Math.min(98, prev.executiveSummary.overallEfficiency + (Math.random() - 0.5) * 1)),
          uptime: Math.max(99.90, Math.min(99.99, prev.executiveSummary.uptime + (Math.random() - 0.5) * 0.01))
        },
        keyPerformanceIndicators: prev.keyPerformanceIndicators.map(kpi => ({
          ...kpi,
          value: Math.max(70, Math.min(100, kpi.value + (Math.random() - 0.5) * 1.5))
        }))
      }));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'exceeding': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'on-track': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'healthy': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'achieved': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'optimal': return 'text-cyan-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-cyan-400';
    if (health >= 90) return 'text-green-400';
    if (health >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'green': return 'text-green-400';
      case 'blue': return 'text-blue-400';
      case 'purple': return 'text-purple-400';
      case 'cyan': return 'text-cyan-400';
      case 'yellow': return 'text-yellow-400';
      case 'orange': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getProgressColor = (progress, target) => {
    const ratio = progress / target;
    if (ratio >= 1.0) return 'text-cyan-400';
    if (ratio >= 0.9) return 'text-green-400';
    if (ratio >= 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendIcon = (trend) => {
    return trend.startsWith('+') ? 
      <TrendingUp className="w-3 h-3 text-green-400" /> : 
      <TrendingUp className="w-3 h-3 text-red-400 rotate-180" />;
  };

  const getResourceTrendColor = (trend) => {
    switch (trend) {
      case 'increasing': return 'text-green-400';
      case 'stable': return 'text-blue-400';
      case 'decreasing': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Command className="w-8 h-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Mission Control Summary</h2>
            <p className="text-gray-400">Executive dashboard with unified metrics and insights</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className={`text-lg font-bold px-3 py-1 rounded border ${getStatusColor('exceeding')}`}>
              {summaryData.executiveSummary.missionStatus}
            </div>
            <div className="text-xs text-gray-400 mt-1">Mission Status</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{summaryData.executiveSummary.overallEfficiency.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Overall Efficiency</div>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{summaryData.executiveSummary.overallEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Efficiency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{summaryData.executiveSummary.systemsOnline}</div>
          <div className="text-xs text-gray-400">Systems Online</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{summaryData.executiveSummary.totalSystems}</div>
          <div className="text-xs text-gray-400">Total Systems</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{summaryData.executiveSummary.criticalIssues}</div>
          <div className="text-xs text-gray-400">Critical Issues</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{summaryData.executiveSummary.uptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{summaryData.executiveSummary.lastMajorIncident}</div>
          <div className="text-xs text-gray-400">Last Incident</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center col-span-2">
          <div className="text-sm font-bold text-yellow-400">{summaryData.executiveSummary.nextPlannedMaintenance}</div>
          <div className="text-xs text-gray-400">Next Maintenance</div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Key Performance Indicators</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="text-xs text-blue-400">TRACKING</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {summaryData.keyPerformanceIndicators.map((kpi, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{kpi.name}</div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(kpi.trend)}
                  <div className="text-sm text-green-400">{kpi.trend}</div>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className={`text-2xl font-bold ${getProgressColor(kpi.value, kpi.target)}`}>
                  {kpi.value.toFixed(1)}%
                </div>
                <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(kpi.status)}`}>
                  {kpi.status.toUpperCase()}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Target: {kpi.target.toFixed(1)}%</span>
                  <span className="text-white">Gap: {(kpi.value - kpi.target).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      kpi.value >= kpi.target ? 'bg-gradient-to-r from-cyan-400 to-cyan-500' :
                      kpi.value >= kpi.target * 0.9 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                      'bg-gradient-to-r from-yellow-400 to-orange-500'
                    }`}
                    style={{ width: `${Math.min(100, (kpi.value / kpi.target) * 100)}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-300">{kpi.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Operational Highlights */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Operational Highlights</h3>
          </div>
          <div className="space-y-4">
            {summaryData.operationalHighlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 ${getIconColor(highlight.color)} bg-opacity-20 rounded-lg flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 ${getIconColor(highlight.color)}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-white font-medium">{highlight.highlight}</div>
                        <div className="text-xs px-2 py-1 rounded bg-gray-600/30 text-purple-400">
                          {highlight.impact.toUpperCase()}
                        </div>
                      </div>
                      <div className="text-gray-300 text-sm mb-1">{highlight.description}</div>
                      <div className="text-xs text-gray-500">{highlight.category}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Objectives */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Mission Objectives</h3>
          </div>
          <div className="space-y-4">
            {summaryData.missionObjectives.map((objective, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{objective.objective}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(objective.status)}`}>
                    {objective.status.toUpperCase()}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-bold">{objective.progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${objective.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-300">{objective.description}</div>
                  <div className="text-xs text-gray-500">Due: {objective.completionDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Health & Resource Utilization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Health */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">System Health Overview</h3>
          </div>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-lg font-bold text-white">Overall Health</div>
              <div className={`text-2xl font-bold ${getHealthColor(summaryData.systemHealth.overall)}`}>
                {summaryData.systemHealth.overall.toFixed(1)}%
              </div>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full"
                style={{ width: `${summaryData.systemHealth.overall}%` }}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            {summaryData.systemHealth.components.map((component, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${
                    component.status === 'optimal' ? 'bg-cyan-400' :
                    component.status === 'healthy' ? 'bg-green-400' :
                    component.status === 'warning' ? 'bg-yellow-400' : 'bg-red-400'
                  }`}></div>
                  <div className="text-white text-sm">{component.name}</div>
                </div>
                <div className={`text-sm font-bold ${getHealthColor(component.health)}`}>
                  {component.health.toFixed(1)}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resource Utilization */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Globe className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Resource Utilization</h3>
          </div>
          <div className="space-y-4">
            {Object.entries(summaryData.resourceUtilization).map(([resource, data], index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-white capitalize">{resource}</div>
                  <div className="flex items-center space-x-2">
                    <div className={`text-sm ${getResourceTrendColor(data.trend)}`}>
                      {data.trend}
                    </div>
                    <div className="text-white font-bold">{data.current.toFixed(1)}%</div>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      data.current > data.optimal ? 'bg-gradient-to-r from-red-400 to-red-500' :
                      data.current > data.optimal * 0.8 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                      'bg-gradient-to-r from-green-400 to-green-500'
                    }`}
                    style={{ width: `${Math.min(100, data.current)}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Optimal: {data.optimal.toFixed(1)}%</span>
                  <span className="text-cyan-400">Efficiency: {data.efficiency.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Insights */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Zap className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-bold text-white">Strategic Insights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {summaryData.strategicInsights.map((insight, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{insight.insight}</div>
                <div className={`text-xs px-2 py-1 rounded border ${getPriorityColor(insight.priority)}`}>
                  {insight.priority.toUpperCase()}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-gray-300">{insight.description}</div>
                <div className="text-cyan-400">{insight.recommendation}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Timeline: {insight.timeframe}</span>
                  <span className="text-purple-400">{insight.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
              <Command className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">{summaryData.executiveSummary.overallEfficiency.toFixed(0)}%</div>
              <div className="text-sm text-gray-300">Mission Efficiency</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{summaryData.executiveSummary.systemsOnline}</div>
              <div className="text-sm text-gray-300">Systems Online</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{summaryData.executiveSummary.uptime.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">System Uptime</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{summaryData.executiveSummary.criticalIssues}</div>
              <div className="text-sm text-gray-300">Critical Issues</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}