// Intelligent Alerts Center - AI-powered alert management and anomaly detection
import { useState, useEffect } from 'react';
import { Bell, AlertTriangle, CheckCircle, Clock, Zap, Brain, TrendingUp, Eye, Settings, Filter } from 'lucide-react';

export default function IntelligentAlertsCenter() {
  const [alertsData, setAlertsData] = useState({
    alertMetrics: {
      totalAlerts: 47,
      criticalAlerts: 3,
      warningAlerts: 12,
      infoAlerts: 32,
      resolvedAlerts: 156,
      averageResolutionTime: '12m 34s',
      falsePositiveRate: 4.2,
      alertAccuracy: 95.8
    },
    activeAlerts: [
      {
        id: 'alert-001',
        severity: 'critical',
        title: 'Assembly AI Queue Overflow',
        description: 'Transcription queue has exceeded 80% capacity with 127/150 items',
        component: 'Assembly AI',
        timestamp: '2026-03-12T15:15:23Z',
        duration: '8m 42s',
        status: 'investigating',
        assignee: 'Auto-Resolver',
        impact: 'High - Processing delays expected',
        recommendation: 'Scale processing workers or implement batching'
      },
      {
        id: 'alert-002',
        severity: 'warning',
        title: 'LinkedIn API Rate Limit Approaching',
        description: 'Connection requests at 78% of hourly limit (78/100)',
        component: 'LinkedIn Outreach',
        timestamp: '2026-03-12T15:08:15Z',
        duration: '16m 30s',
        status: 'monitoring',
        assignee: 'Rate Limiter Agent',
        impact: 'Medium - Outreach may slow down',
        recommendation: 'Distribute requests over time or increase limits'
      },
      {
        id: 'alert-003',
        severity: 'warning',
        title: 'Memory Usage Spike',
        description: 'Spec Ad Creator using 89% memory allocation',
        component: 'Spec Ad Creator',
        timestamp: '2026-03-12T15:12:45Z',
        duration: '11m 15s',
        status: 'auto-resolving',
        assignee: 'Memory Manager',
        impact: 'Low - May affect performance',
        recommendation: 'Garbage collection or memory optimization'
      },
      {
        id: 'alert-004',
        severity: 'critical',
        title: 'Instagram API Connection Timeout',
        description: 'Failed to fetch content for 3 consecutive attempts',
        component: 'Instagram Monitor',
        timestamp: '2026-03-12T15:18:12Z',
        duration: '5m 48s',
        status: 'escalated',
        assignee: 'Network Team',
        impact: 'High - Content ingestion halted',
        recommendation: 'Check network connectivity and API credentials'
      },
      {
        id: 'alert-005',
        severity: 'info',
        title: 'High Processing Volume',
        description: 'Content processing 40% above normal levels',
        component: 'Content Processor',
        timestamp: '2026-03-12T15:05:33Z',
        duration: '18m 27s',
        status: 'acknowledged',
        assignee: 'Load Balancer',
        impact: 'None - Within acceptable range',
        recommendation: 'Monitor for sustained high volume'
      },
      {
        id: 'alert-006',
        severity: 'critical',
        title: 'Cost Threshold Exceeded',
        description: 'Daily API costs have exceeded $50 budget limit',
        component: 'Cost Manager',
        timestamp: '2026-03-12T15:20:07Z',
        duration: '3m 53s',
        status: 'new',
        assignee: 'Budget Controller',
        impact: 'High - Budget overrun risk',
        recommendation: 'Review high-cost operations or adjust budget'
      }
    ],
    alertTrends: [
      { time: '12:00', critical: 2, warning: 8, info: 15 },
      { time: '13:00', critical: 1, warning: 12, info: 18 },
      { time: '14:00', critical: 3, warning: 15, info: 22 },
      { time: '15:00', critical: 4, warning: 14, info: 25 },
      { time: '15:24', critical: 3, warning: 12, info: 32 }
    ],
    anomalyDetection: {
      anomaliesDetected: 8,
      anomaliesResolved: 5,
      patternsLearned: 247,
      predictionAccuracy: 92.4,
      falseAlarms: 12,
      missedAnomalies: 2
    },
    alertRules: [
      {
        name: 'API Queue Overflow',
        condition: 'Queue size > 80% capacity',
        severity: 'critical',
        enabled: true,
        triggered: 23,
        accuracy: 96.7,
        lastTriggered: '8m ago'
      },
      {
        name: 'Memory Usage High',
        condition: 'Memory usage > 85% for 5+ minutes',
        severity: 'warning',
        enabled: true,
        triggered: 45,
        accuracy: 91.2,
        lastTriggered: '11m ago'
      },
      {
        name: 'API Response Time',
        condition: 'Response time > 2000ms average',
        severity: 'warning',
        enabled: true,
        triggered: 67,
        accuracy: 88.9,
        lastTriggered: '2h ago'
      },
      {
        name: 'Cost Budget',
        condition: 'Daily costs > $45',
        severity: 'critical',
        enabled: true,
        triggered: 12,
        accuracy: 100.0,
        lastTriggered: '3m ago'
      },
      {
        name: 'Error Rate Spike',
        condition: 'Error rate > 2% for 10+ minutes',
        severity: 'warning',
        enabled: true,
        triggered: 34,
        accuracy: 94.1,
        lastTriggered: '6h ago'
      },
      {
        name: 'Agent Offline',
        condition: 'No heartbeat for 60+ seconds',
        severity: 'critical',
        enabled: true,
        triggered: 8,
        accuracy: 98.5,
        lastTriggered: '2d ago'
      }
    ],
    intelligentActions: [
      {
        action: 'Auto-scale Resources',
        description: 'Automatically scale CPU/Memory when thresholds exceeded',
        successRate: 94.7,
        timesExecuted: 156,
        avgResolutionTime: '45s',
        costSaved: '$234.50'
      },
      {
        action: 'Queue Management',
        description: 'Redistribute workload across available processors',
        successRate: 89.3,
        timesExecuted: 89,
        avgResolutionTime: '1m 23s',
        costSaved: '$89.20'
      },
      {
        action: 'Rate Limit Handling',
        description: 'Intelligently queue requests when approaching limits',
        successRate: 96.8,
        timesExecuted: 234,
        avgResolutionTime: '2m 15s',
        costSaved: '$456.80'
      },
      {
        action: 'Memory Optimization',
        description: 'Force garbage collection and cache cleanup',
        successRate: 91.2,
        timesExecuted: 67,
        avgResolutionTime: '1m 5s',
        costSaved: '$123.45'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAlertsData(prev => {
        const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        const newTrendPoint = {
          time: currentTime,
          critical: Math.max(0, Math.floor(Math.random() * 5)),
          warning: Math.max(0, Math.floor(Math.random() * 20) + 8),
          info: Math.max(0, Math.floor(Math.random() * 15) + 20)
        };

        return {
          ...prev,
          alertTrends: [...prev.alertTrends.slice(-4), newTrendPoint],
          alertMetrics: {
            ...prev.alertMetrics,
            totalAlerts: prev.alertMetrics.totalAlerts + (Math.random() > 0.7 ? 1 : 0),
            resolvedAlerts: prev.alertMetrics.resolvedAlerts + (Math.random() > 0.8 ? 1 : 0),
            alertAccuracy: Math.max(90, Math.min(99, prev.alertMetrics.alertAccuracy + (Math.random() - 0.5) * 2))
          },
          anomalyDetection: {
            ...prev.anomalyDetection,
            anomaliesDetected: prev.anomalyDetection.anomaliesDetected + (Math.random() > 0.9 ? 1 : 0),
            predictionAccuracy: Math.max(85, Math.min(98, prev.anomalyDetection.predictionAccuracy + (Math.random() - 0.5) * 1))
          }
        };
      });
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'info': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'investigating': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'monitoring': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'auto-resolving': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'escalated': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'acknowledged': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'critical': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'info': return <CheckCircle className="w-4 h-4 text-blue-400" />;
      default: return <Bell className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatDuration = (timestamp) => {
    const now = new Date();
    const alertTime = new Date(timestamp);
    const diffMs = now - alertTime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    
    if (diffHours > 0) return `${diffHours}h ${diffMins % 60}m`;
    return `${diffMins}m`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Intelligent Alerts Center</h2>
            <p className="text-gray-400">AI-powered alert management and anomaly detection</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{alertsData.alertMetrics.alertAccuracy.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Alert Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-red-400">{alertsData.alertMetrics.criticalAlerts}</div>
            <div className="text-xs text-gray-400">Critical Active</div>
          </div>
        </div>
      </div>

      {/* Alert Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-white">{alertsData.alertMetrics.totalAlerts}</div>
          <div className="text-xs text-gray-400">Total Alerts</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{alertsData.alertMetrics.criticalAlerts}</div>
          <div className="text-xs text-gray-400">Critical</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{alertsData.alertMetrics.warningAlerts}</div>
          <div className="text-xs text-gray-400">Warning</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{alertsData.alertMetrics.infoAlerts}</div>
          <div className="text-xs text-gray-400">Info</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{alertsData.alertMetrics.resolvedAlerts}</div>
          <div className="text-xs text-gray-400">Resolved</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{alertsData.alertMetrics.averageResolutionTime}</div>
          <div className="text-xs text-gray-400">Avg Resolution</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{alertsData.alertMetrics.falsePositiveRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">False Positive</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{alertsData.alertMetrics.alertAccuracy.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Accuracy</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Alerts */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bell className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-bold text-white">Active Alerts</h3>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-red-400">LIVE</div>
            </div>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {alertsData.activeAlerts.map((alert, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getSeverityIcon(alert.severity)}
                    <div className="text-white font-medium">{alert.title}</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded border ${getSeverityColor(alert.severity)}`}>
                    {alert.severity.toUpperCase()}
                  </div>
                </div>
                
                <div className="text-gray-300 text-sm mb-2">{alert.description}</div>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div>
                    <div className="text-gray-400">Component</div>
                    <div className="text-cyan-400 font-medium">{alert.component}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Duration</div>
                    <div className="text-yellow-400 font-medium">{alert.duration}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Assignee</div>
                    <div className="text-blue-400 font-medium">{alert.assignee}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Status</div>
                    <div className={`px-1 py-0.5 rounded border text-xs ${getStatusColor(alert.status)}`}>
                      {alert.status.toUpperCase()}
                    </div>
                  </div>
                </div>
                
                <div className="text-orange-400 text-sm mb-2">{alert.impact}</div>
                <div className="text-green-400 text-sm">{alert.recommendation}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Trends */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Alert Trends</h3>
          </div>
          
          {/* Trend Chart */}
          <div className="h-32 flex items-end space-x-2 mb-4">
            {alertsData.alertTrends.map((point, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div 
                    className="w-4 bg-gradient-to-t from-red-400 to-red-500 rounded-sm"
                    style={{ height: `${point.critical * 8}px` }}
                    title={`Critical: ${point.critical}`}
                  ></div>
                  <div 
                    className="w-4 bg-gradient-to-t from-yellow-400 to-yellow-500 rounded-sm"
                    style={{ height: `${point.warning * 3}px` }}
                    title={`Warning: ${point.warning}`}
                  ></div>
                  <div 
                    className="w-4 bg-gradient-to-t from-blue-400 to-blue-500 rounded-sm"
                    style={{ height: `${point.info * 2}px` }}
                    title={`Info: ${point.info}`}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{point.time}</div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="space-y-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded"></div>
              <span className="text-gray-400">Critical</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span className="text-gray-400">Warning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span className="text-gray-400">Info</span>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Rules & Intelligent Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alert Rules */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Alert Rules</h3>
          </div>
          <div className="space-y-3">
            {alertsData.alertRules.map((rule, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{rule.name}</div>
                  <div className={`w-3 h-3 rounded-full ${rule.enabled ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{rule.condition}</div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className={`font-bold ${getSeverityColor(rule.severity).split(' ')[0]}`}>{rule.severity}</div>
                    <div className="text-gray-400">Severity</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{rule.triggered}</div>
                    <div className="text-gray-400">Triggered</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">{rule.accuracy.toFixed(1)}%</div>
                    <div className="text-gray-400">Accuracy</div>
                  </div>
                </div>
                <div className="text-xs text-gray-500 mt-2">Last: {rule.lastTriggered}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Intelligent Actions */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Intelligent Actions</h3>
          </div>
          <div className="space-y-3">
            {alertsData.intelligentActions.map((action, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="text-white font-medium mb-2">{action.action}</div>
                <div className="text-gray-300 text-sm mb-3">{action.description}</div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-green-400">{action.successRate.toFixed(1)}%</div>
                    <div className="text-gray-400">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-400">{action.timesExecuted}</div>
                    <div className="text-gray-400">Executed</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-400">{action.avgResolutionTime}</div>
                    <div className="text-gray-400">Avg Time</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-yellow-400">{action.costSaved}</div>
                    <div className="text-gray-400">Cost Saved</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Anomaly Detection & Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Eye className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Anomaly Detection</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{alertsData.anomalyDetection.anomaliesDetected}</div>
              <div className="text-xs text-gray-400">Detected</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">{alertsData.anomalyDetection.anomaliesResolved}</div>
              <div className="text-xs text-gray-400">Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-blue-400">{alertsData.anomalyDetection.patternsLearned}</div>
              <div className="text-xs text-gray-400">Patterns Learned</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-purple-400">{alertsData.anomalyDetection.predictionAccuracy.toFixed(1)}%</div>
              <div className="text-xs text-gray-400">Prediction Accuracy</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-r from-red-600/20 to-red-400/20 backdrop-blur-sm rounded-lg border border-red-400/30 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400">{alertsData.alertMetrics.criticalAlerts}</div>
                <div className="text-sm text-gray-300">Critical Alerts</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">{alertsData.alertMetrics.alertAccuracy.toFixed(1)}%</div>
                <div className="text-sm text-gray-300">Alert Accuracy</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">{alertsData.alertMetrics.resolvedAlerts}</div>
                <div className="text-sm text-gray-300">Resolved Total</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}