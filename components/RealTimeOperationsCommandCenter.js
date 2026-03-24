// Real-Time Operations Command Center (2026 Mission Control Design Trends)
// Inspired by 2026 live dashboard analytics, visual business intelligence, and LifeOS concepts
import { useState, useEffect } from 'react';

export default function RealTimeOperationsCommandCenter() {
  const [operationsData, setOperationsData] = useState({
    // 2026 Live Dashboard Analytics (Eyes & Ears for Large-Scale Operations)
    liveAnalytics: {
      totalActiveOperations: 23,
      realTimeEvents: 1247,
      criticalAlertsActive: 3,
      operationalEfficiency: 94.7,
      liveFeedSources: 45,
      instantAlertTriggers: 156,
      analyticsAccuracy: 97.8,
      decisionSupportScore: 96.3,
      earlyDetectionRate: 89.4,
      issuePreventionCount: 67
    },

    // Mission Control "LifeOS" - One Place for All Tasks
    lifeOSOperations: {
      totalTasksTracked: 2456,
      todaysFocusItems: 12,
      completedToday: 8,
      activeProjects: 34,
      urgentDeadlines: 5,
      workflowAutomation: 87.3,
      productivityScore: 178.4,
      focusEfficiency: 92.6,
      taskCompletionRate: 94.1,
      contextSwitchingReduction: 67.8
    },

    // AI Agent Fleet Orchestration & Management
    agentFleetOperations: {
      totalAgentsDeployed: 89,
      activeAgentsNow: 67,
      agentTasksCompleted: 1456,
      costOptimizationSavings: 234567,
      workflowOrchestrationActive: 23,
      agentEfficiencyScore: 96.8,
      autonomousDecisionRate: 84.7,
      humanHandoffRequired: 15.3,
      agentLearningRate: 91.2,
      fleetCoordinationScore: 97.4
    },

    // Real-Time Data Visualization (2026 Must-Have)
    visualizationMetrics: {
      liveDataFeeds: 156,
      chartUpdateFrequency: '0.5s',
      interactiveElements: 234,
      visualizationLatency: '87ms',
      dataVisualizationAccuracy: 99.2,
      userEngagementScore: 94.6,
      insightGenerationRate: 67,
      visualComplexityHandling: 'ADVANCED',
      responsiveDesignScore: 98.1,
      accessibilityCompliance: 96.7
    },

    // Visual Business Intelligence & Performance Edge
    businessIntelligence: {
      bigPictureViewActive: true,
      historicalTrendAnalysis: 'COMPREHENSIVE',
      futurePredictionAccuracy: 91.8,
      performanceEdgeGained: 156.7, // % improvement
      cognitiveLoadReduction: 78.9,
      decisionMakingSpeed: '2.3x faster',
      strategicInsightGeneration: 45,
      businessImpactScore: 97.2,
      competitiveAdvantageIndex: 94.6,
      revenueOptimizationImpact: 23.4
    },

    // Real-Time Operations Status
    operationsStatus: [
      {
        operationId: 'OPS-001',
        operationName: 'Content Processing Pipeline',
        status: 'OPTIMAL',
        healthScore: 98.7,
        activeWorkers: 12,
        throughput: '2.3K items/hour',
        latency: '0.8s',
        successRate: 99.2,
        resourceUtilization: 67.3,
        costEfficiency: 94.8,
        lastUpdate: 'Live'
      },
      {
        operationId: 'OPS-002', 
        operationName: 'AI Agent Coordination',
        status: 'GOOD',
        healthScore: 96.4,
        activeWorkers: 67,
        throughput: '847 tasks/hour',
        latency: '1.2s',
        successRate: 97.8,
        resourceUtilization: 78.9,
        costEfficiency: 91.3,
        lastUpdate: 'Live'
      },
      {
        operationId: 'OPS-003',
        operationName: 'Real-Time Analytics Engine',
        status: 'OPTIMAL',
        healthScore: 99.1,
        activeWorkers: 34,
        throughput: '12.7K events/sec',
        latency: '0.3s',
        successRate: 99.6,
        resourceUtilization: 54.2,
        costEfficiency: 97.1,
        lastUpdate: 'Live'
      },
      {
        operationId: 'OPS-004',
        operationName: 'Infrastructure Monitoring',
        status: 'WARNING',
        healthScore: 87.3,
        activeWorkers: 23,
        throughput: '456 metrics/min',
        latency: '2.1s',
        successRate: 94.7,
        resourceUtilization: 89.4,
        costEfficiency: 82.6,
        lastUpdate: 'Live'
      }
    ],

    // Live Event Feed (Eyes & Ears for Operations)
    liveEventFeed: [
      {
        eventId: 'EVT-001',
        timestamp: new Date(Date.now() - 30000),
        type: 'PERFORMANCE_OPTIMIZATION',
        severity: 'INFO',
        source: 'Content Processing Pipeline',
        message: 'Throughput optimization achieved +12.4% efficiency gain',
        impact: 'POSITIVE',
        actionRequired: false,
        autoResolved: true
      },
      {
        eventId: 'EVT-002',
        timestamp: new Date(Date.now() - 75000),
        type: 'COST_OPTIMIZATION',
        severity: 'INFO',
        source: 'AI Agent Fleet',
        message: 'Resource allocation optimized, saving $1,247 this hour',
        impact: 'COST_SAVINGS',
        actionRequired: false,
        autoResolved: true
      },
      {
        eventId: 'EVT-003',
        timestamp: new Date(Date.now() - 120000),
        type: 'ALERT_THRESHOLD',
        severity: 'WARNING',
        source: 'Infrastructure Monitoring',
        message: 'CPU utilization approaching 90% threshold on cluster-03',
        impact: 'RESOURCE_CONSTRAINT',
        actionRequired: true,
        autoResolved: false
      },
      {
        eventId: 'EVT-004',
        timestamp: new Date(Date.now() - 180000),
        type: 'WORKFLOW_COMPLETION',
        severity: 'SUCCESS',
        source: 'Agent Orchestration',
        message: 'Automated workflow completed 156 tasks with 98.7% success',
        impact: 'PRODUCTIVITY',
        actionRequired: false,
        autoResolved: true
      }
    ],

    // Today's Focus Dashboard (LifeOS Concept)
    todaysFocus: [
      {
        focusId: 'FOCUS-001',
        title: 'Content Pipeline Optimization',
        priority: 'HIGH',
        progress: 78,
        deadline: '18:00',
        estimatedCompletion: '16:45',
        assignedAgents: 3,
        dependencies: ['AI Model Training', 'Data Processing'],
        status: 'ON_TRACK',
        impactScore: 94.7
      },
      {
        focusId: 'FOCUS-002',
        title: 'Cost Analysis & Budget Planning',
        priority: 'MEDIUM',
        progress: 45,
        deadline: 'Tomorrow',
        estimatedCompletion: '14:30',
        assignedAgents: 2,
        dependencies: ['Financial Data Sync'],
        status: 'ON_TRACK',
        impactScore: 87.3
      },
      {
        focusId: 'FOCUS-003',
        title: 'System Performance Monitoring',
        priority: 'HIGH',
        progress: 92,
        deadline: 'Continuous',
        estimatedCompletion: 'Ongoing',
        assignedAgents: 5,
        dependencies: ['Real-time Metrics'],
        status: 'OPTIMAL',
        impactScore: 96.8
      },
      {
        focusId: 'FOCUS-004',
        title: 'Agent Fleet Scaling',
        priority: 'MEDIUM',
        progress: 67,
        deadline: '20:00',
        estimatedCompletion: '19:15',
        assignedAgents: 4,
        dependencies: ['Resource Allocation'],
        status: 'ON_TRACK',
        impactScore: 89.4
      }
    ],

    // Instant Alert System (2026 Live Dashboard Requirement)
    instantAlerts: [
      {
        alertId: 'ALERT-001',
        type: 'PERFORMANCE',
        title: 'Response Time Degradation',
        description: 'API response time increased by 23% in last 5 minutes',
        severity: 'MEDIUM',
        source: 'Analytics Engine',
        triggerTime: new Date(Date.now() - 45000),
        estimatedImpact: 'SERVICE_SLOWDOWN',
        recommendedAction: 'Scale API workers +2 instances',
        autoRemediationAvailable: true,
        businessImpact: 'MINIMAL'
      },
      {
        alertId: 'ALERT-002',
        type: 'COST',
        title: 'Budget Threshold Approaching',
        description: 'Daily spend at 87% of allocated budget',
        severity: 'LOW',
        source: 'Cost Management',
        triggerTime: new Date(Date.now() - 90000),
        estimatedImpact: 'BUDGET_ALERT',
        recommendedAction: 'Review resource allocation priorities',
        autoRemediationAvailable: false,
        businessImpact: 'PLANNING'
      },
      {
        alertId: 'ALERT-003',
        type: 'WORKFLOW',
        title: 'Agent Task Queue Building',
        description: '234 tasks queued, processing capacity at 89%',
        severity: 'HIGH',
        source: 'Agent Fleet Manager',
        triggerTime: new Date(Date.now() - 120000),
        estimatedImpact: 'TASK_DELAYS',
        recommendedAction: 'Deploy additional processing agents',
        autoRemediationAvailable: true,
        businessImpact: 'PRODUCTIVITY'
      }
    ],

    // Interactive Command Center Controls
    commandCenterControls: {
      totalControlPanels: 12,
      activeControls: 34,
      automationToggles: 23,
      manualOverrides: 5,
      emergencyProtocols: 8,
      quickActions: 67,
      customDashboards: 15,
      userPermissionLevel: 'ADMIN',
      securityProtocols: 'ENABLED',
      auditTrailActive: true
    },

    // System Performance Metrics
    systemPerformance: {
      overallHealth: 96.8,
      responseTime: '0.3s',
      uptime: 99.97,
      throughput: '45.6K ops/min',
      errorRate: 0.02,
      resourceEfficiency: 94.7,
      costOptimization: 87.3,
      userSatisfaction: 93.4,
      businessValue: '$67.8K/hour',
      competitiveAdvantage: 'SIGNIFICANT'
    }
  });

  const [liveMetrics, setLiveMetrics] = useState({
    realTimeEvents: 1247,
    activeOperations: 23,
    criticalAlerts: 3,
    agentEfficiency: 96.8,
    todaysFocusProgress: 70.5
  });

  // Real-time data simulation (2026 requirement: live data feeds)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => ({
        realTimeEvents: prev.realTimeEvents + Math.floor(Math.random() * 10 + 5),
        activeOperations: Math.max(15, Math.min(35, prev.activeOperations + (Math.random() - 0.5) * 2)),
        criticalAlerts: Math.max(0, Math.min(8, prev.criticalAlerts + (Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0))),
        agentEfficiency: Math.max(85, Math.min(99, prev.agentEfficiency + (Math.random() - 0.5) * 1)),
        todaysFocusProgress: Math.min(100, prev.todaysFocusProgress + Math.random() * 0.5)
      }));

      // Update live event feed with new events
      if (Math.random() < 0.4) {
        const eventTypes = ['OPTIMIZATION', 'COMPLETION', 'ALERT', 'SUCCESS', 'AUTOMATION'];
        const newEvent = {
          eventId: `EVT-${Date.now()}`,
          timestamp: new Date(),
          type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
          severity: Math.random() > 0.7 ? 'WARNING' : 'INFO',
          source: 'Live Operations',
          message: `${eventTypes[Math.floor(Math.random() * eventTypes.length)].toLowerCase()} event detected`,
          impact: 'MONITORING',
          actionRequired: Math.random() > 0.8,
          autoResolved: Math.random() > 0.3
        };
        
        setOperationsData(prev => ({
          ...prev,
          liveEventFeed: [newEvent, ...prev.liveEventFeed.slice(0, 7)]
        }));
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': return 'text-green-400';
      case 'GOOD': return 'text-blue-400';
      case 'WARNING': return 'text-yellow-400';
      case 'CRITICAL': return 'text-red-400';
      case 'ON_TRACK': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getHealthColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH': return 'border-l-red-500 bg-red-900/20';
      case 'MEDIUM': return 'border-l-yellow-500 bg-yellow-900/20';
      case 'LOW': return 'border-l-green-500 bg-green-900/20';
      case 'INFO': return 'border-l-blue-500 bg-blue-900/20';
      case 'SUCCESS': return 'border-l-green-500 bg-green-900/20';
      default: return 'border-l-gray-500 bg-gray-900/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-white">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🎯🚀 Real-Time Operations Command Center
        </h1>
        <p className="text-gray-300 text-lg">
          2026 Mission Control Design • Live Dashboard Analytics • Visual Business Intelligence • LifeOS Operations
        </p>
      </div>

      {/* Live Analytics Dashboard (2026 Eyes & Ears) */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
        <div className="bg-black/40 border border-cyan-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">📊 Live Events</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.realTimeEvents.toLocaleString()}</div>
          <div className="text-sm text-gray-300">real-time analytics</div>
        </div>
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-400 mb-2">⚡ Active Ops</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.activeOperations}</div>
          <div className="text-sm text-gray-300">operations running</div>
        </div>
        <div className="bg-black/40 border border-yellow-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">🚨 Critical Alerts</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.criticalAlerts}</div>
          <div className="text-sm text-gray-300">require attention</div>
        </div>
        <div className="bg-black/40 border border-green-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-400 mb-2">🤖 Agent Efficiency</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.agentEfficiency.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">fleet performance</div>
        </div>
        <div className="bg-black/40 border border-indigo-500/30 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-indigo-400 mb-2">🎯 Focus Progress</h3>
          <div className="text-2xl font-bold text-white">{liveMetrics.todaysFocusProgress.toFixed(1)}%</div>
          <div className="text-sm text-gray-300">today's completion</div>
        </div>
      </div>

      {/* Real-Time Operations Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-blue-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">⚡ Real-Time Operations Status</h3>
          <div className="space-y-4">
            {operationsData.operationsStatus.map((operation, index) => (
              <div key={operation.operationId} className="border border-gray-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-lg font-semibold text-white">{operation.operationName}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${getStatusColor(operation.status)}`}>
                    {operation.status} • {operation.lastUpdate}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-gray-300">Health Score</div>
                    <div className={`font-bold ${getHealthColor(operation.healthScore)}`}>{operation.healthScore}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Throughput</div>
                    <div className="text-cyan-400 font-bold">{operation.throughput}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Success Rate</div>
                    <div className={getHealthColor(operation.successRate)}>{operation.successRate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Latency</div>
                    <div className="text-white">{operation.latency}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Workers</div>
                    <div className="text-purple-400">{operation.activeWorkers}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Cost Efficiency</div>
                    <div className={getHealthColor(operation.costEfficiency)}>{operation.costEfficiency}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Focus (LifeOS Concept) */}
        <div className="bg-black/40 border border-purple-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-400 mb-4">🎯 Today's Focus (LifeOS)</h3>
          <div className="space-y-4">
            {operationsData.todaysFocus.map((focus, index) => (
              <div key={focus.focusId} className="border border-gray-600/30 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-white">{focus.title}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${getPriorityColor(focus.priority)}`}>
                    {focus.priority}
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">Progress</span>
                    <span className="text-white">{focus.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${focus.progress >= 80 ? 'bg-green-500' : focus.progress >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${focus.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-300">Deadline</div>
                    <div className="text-white">{focus.deadline}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">ETA</div>
                    <div className="text-cyan-400">{focus.estimatedCompletion}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Agents</div>
                    <div className="text-purple-400">{focus.assignedAgents}</div>
                  </div>
                  <div>
                    <div className="text-gray-300">Impact</div>
                    <div className={getHealthColor(focus.impactScore)}>{focus.impactScore}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs">
                  <div className="text-gray-400">Status: <span className={getStatusColor(focus.status)}>{focus.status}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live Event Feed & Instant Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-green-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-400 mb-4">📡 Live Event Feed (Eyes & Ears)</h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {operationsData.liveEventFeed.map((event, index) => (
              <div key={event.eventId} className={`border-l-4 p-3 rounded ${getSeverityColor(event.severity)}`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-semibold text-white">{event.type.replace('_', ' ')}</h4>
                  <div className="text-xs text-gray-400">{event.timestamp.toLocaleTimeString()}</div>
                </div>
                <p className="text-sm text-gray-300 mb-2">{event.message}</p>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-400">Source: {event.source}</span>
                  <span className={`${event.autoResolved ? 'text-green-400' : 'text-yellow-400'}`}>
                    {event.autoResolved ? 'Auto-Resolved' : event.actionRequired ? 'Action Required' : 'Monitoring'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instant Alert System */}
        <div className="bg-black/40 border border-red-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-400 mb-4">🚨 Instant Alert System</h3>
          <div className="space-y-4">
            {operationsData.instantAlerts.map((alert, index) => (
              <div key={alert.alertId} className={`border-l-4 p-4 rounded ${getSeverityColor(alert.severity)}`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-semibold text-white">{alert.title}</h4>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${
                    alert.severity === 'HIGH' ? 'text-red-400' :
                    alert.severity === 'MEDIUM' ? 'text-yellow-400' : 'text-green-400'
                  }`}>
                    {alert.severity}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-3">{alert.description}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div className="text-gray-400">Impact</div>
                    <div className="text-white">{alert.estimatedImpact.replace('_', ' ')}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Business Impact</div>
                    <div className="text-cyan-400">{alert.businessImpact}</div>
                  </div>
                </div>
                <div className="mt-3 text-sm">
                  <div className="text-gray-400">Recommended Action</div>
                  <div className="text-blue-400">{alert.recommendedAction}</div>
                </div>
                {alert.autoRemediationAvailable && (
                  <div className="mt-2">
                    <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs font-bold">
                      Auto-Remediate
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Business Intelligence Summary */}
      <div className="bg-black/40 border border-indigo-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-indigo-400 mb-4">📊 Visual Business Intelligence & Performance Edge</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{operationsData.businessIntelligence.performanceEdgeGained}%</div>
            <div className="text-sm text-gray-300">Performance Edge</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{operationsData.businessIntelligence.decisionMakingSpeed}</div>
            <div className="text-sm text-gray-300">Decision Speed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{operationsData.businessIntelligence.futurePredictionAccuracy}%</div>
            <div className="text-sm text-gray-300">Prediction Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{operationsData.businessIntelligence.strategicInsightGeneration}</div>
            <div className="text-sm text-gray-300">Strategic Insights</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{operationsData.businessIntelligence.competitiveAdvantageIndex}%</div>
            <div className="text-sm text-gray-300">Competitive Advantage</div>
          </div>
        </div>
      </div>

      {/* Footer with Live Status */}
      <div className="text-center text-gray-400 text-sm">
        <div className="flex justify-center items-center space-x-4">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Live Analytics: ACTIVE
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            Operations: {liveMetrics.activeOperations} running
          </span>
          <span className="flex items-center">
            <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
            Agent Fleet: {liveMetrics.agentEfficiency.toFixed(1)}% efficiency
          </span>
        </div>
        <div className="mt-2">
          🚀 Real-Time Operations Command Center • 2026 Mission Control Design • Last Updated: {new Date().toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}