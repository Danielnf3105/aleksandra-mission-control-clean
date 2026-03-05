// RealTimeNotificationCenter.js - Advanced AI-powered Real-time Notifications and Alert System
import { useState, useEffect } from 'react';

const RealTimeNotificationCenter = () => {
  const [notifications, setNotifications] = useState([]);
  const [alertRules, setAlertRules] = useState([
    {
      id: 'rule_001',
      name: 'AI Model Performance',
      condition: 'response_time > 500ms OR error_rate > 5%',
      severity: 'HIGH',
      enabled: true,
      triggered: false,
      lastTriggered: null,
      description: 'Monitors AI agent response times and error rates'
    },
    {
      id: 'rule_002', 
      name: 'Token Usage Anomaly',
      condition: 'token_usage > avg_7d * 1.5',
      severity: 'MEDIUM',
      enabled: true,
      triggered: false,
      lastTriggered: Date.now() - 2 * 60 * 60 * 1000,
      description: 'Detects unusual token consumption patterns'
    },
    {
      id: 'rule_003',
      name: 'Security Threat Detection',
      condition: 'failed_auth > 10 IN 5min',
      severity: 'CRITICAL',
      enabled: true,
      triggered: false,
      lastTriggered: null,
      description: 'Identifies potential security breaches'
    },
    {
      id: 'rule_004',
      name: 'System Resource Threshold',
      condition: 'cpu_usage > 90% AND memory_usage > 85%',
      severity: 'HIGH',
      enabled: true,
      triggered: true,
      lastTriggered: Date.now() - 15 * 60 * 1000,
      description: 'Monitors system resource consumption'
    }
  ]);

  const [realTimeMetrics, setRealTimeMetrics] = useState({
    activeAlerts: 3,
    resolvedToday: 8,
    avgResponseTime: 245,
    tokenUsageRate: 1247,
    errorRate: 0.8,
    systemLoad: 67.3,
    predictionAccuracy: 94.7,
    falsePositiveRate: 2.1
  });

  const [predictiveAlerts, setPredictiveAlerts] = useState([
    {
      id: 'pred_001',
      type: 'PREDICTIVE',
      severity: 'WARNING',
      title: 'Potential Resource Shortage',
      message: 'AI models predict high resource demand in next 2 hours based on usage patterns',
      confidence: 87.3,
      estimatedTime: '2h 15m',
      recommendation: 'Consider scaling resources or optimizing current processes',
      aiReasoning: 'Pattern analysis shows 87% correlation with historical data'
    },
    {
      id: 'pred_002',
      type: 'PREDICTIVE',
      severity: 'INFO',
      title: 'Model Performance Drift',
      message: 'Content processing accuracy may decrease based on recent input patterns',
      confidence: 73.2,
      estimatedTime: '6h 30m',
      recommendation: 'Monitor model outputs and consider retraining if drift continues',
      aiReasoning: 'Detected gradual shift in input data distribution'
    }
  ]);

  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    slackIntegration: false,
    teamsIntegration: true,
    webhookUrl: 'https://hooks.slack.com/...',
    quietHours: { start: '23:00', end: '07:00', enabled: true },
    severityFilters: {
      critical: true,
      high: true,
      medium: true,
      low: false,
      info: false
    }
  });

  const [alertHistory, setAlertHistory] = useState([
    {
      id: 'hist_001',
      timestamp: Date.now() - 15 * 60 * 1000,
      type: 'THRESHOLD',
      severity: 'HIGH',
      title: 'High CPU Usage Detected',
      message: 'CPU usage exceeded 90% threshold',
      status: 'ACTIVE',
      acknowledgingUser: null,
      resolutionTime: null
    },
    {
      id: 'hist_002',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      type: 'ANOMALY',
      severity: 'MEDIUM',
      title: 'Token Usage Anomaly',
      message: 'Unusual spike in token consumption detected',
      status: 'RESOLVED',
      acknowledgingUser: 'Daniel',
      resolutionTime: 45 * 60 * 1000 // 45 minutes
    },
    {
      id: 'hist_003',
      timestamp: Date.now() - 4 * 60 * 60 * 1000,
      type: 'SYSTEM',
      severity: 'INFO',
      title: 'Deployment Successful',
      message: 'Mission Control v6.2 deployed successfully',
      status: 'RESOLVED',
      acknowledgingUser: 'Aleksandra',
      resolutionTime: 2 * 60 * 1000 // 2 minutes
    }
  ]);

  // Simulate real-time notifications
  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics with realistic variations
      setRealTimeMetrics(prev => ({
        ...prev,
        avgResponseTime: Math.max(150, Math.min(800, prev.avgResponseTime + (Math.random() - 0.5) * 50)),
        tokenUsageRate: Math.max(800, Math.min(2000, prev.tokenUsageRate + (Math.random() - 0.5) * 100)),
        errorRate: Math.max(0, Math.min(5, prev.errorRate + (Math.random() - 0.5) * 0.5)),
        systemLoad: Math.max(30, Math.min(95, prev.systemLoad + (Math.random() - 0.5) * 8)),
        predictionAccuracy: Math.max(85, Math.min(99, prev.predictionAccuracy + (Math.random() - 0.5) * 2))
      }));

      // Occasionally generate new notifications
      if (Math.random() > 0.85) {
        const notificationTypes = [
          'Agent performance optimized',
          'Security scan completed',
          'Data processing pipeline updated',
          'New deployment initiated',
          'Resource allocation adjusted',
          'Anomaly detection triggered',
          'User authentication verified',
          'System backup completed'
        ];
        
        const severities = ['INFO', 'SUCCESS', 'WARNING', 'HIGH'];
        const icons = ['ℹ️', '✅', '⚠️', '🔥'];
        
        const severity = severities[Math.floor(Math.random() * severities.length)];
        const newNotification = {
          id: Date.now(),
          type: 'REAL_TIME',
          severity: severity,
          title: notificationTypes[Math.floor(Math.random() * notificationTypes.length)],
          message: 'AI-powered monitoring system detected this event',
          timestamp: Date.now(),
          read: false,
          actionRequired: severity === 'HIGH' || severity === 'WARNING',
          icon: icons[severities.indexOf(severity)]
        };
        
        setNotifications(prev => [newNotification, ...prev.slice(0, 19)]); // Keep latest 20
      }

      // Update alert rule statuses
      setAlertRules(prev => prev.map(rule => ({
        ...rule,
        triggered: Math.random() > 0.95 ? !rule.triggered : rule.triggered
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const acknowledgeAlert = (alertId) => {
    setAlertHistory(prev => prev.map(alert => 
      alert.id === alertId ? {
        ...alert,
        status: 'ACKNOWLEDGED',
        acknowledgingUser: 'Daniel',
        resolutionTime: Date.now() - alert.timestamp
      } : alert
    ));
  };

  const markAsRead = (notificationId) => {
    setNotifications(prev => prev.map(notif => 
      notif.id === notificationId ? { ...notif, read: true } : notif
    ));
  };

  const toggleAlertRule = (ruleId) => {
    setAlertRules(prev => prev.map(rule => 
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'WARNING':
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'SUCCESS': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'INFO': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
    return `${Math.floor(diff / 86400000)}d ago`;
  };

  const formatDuration = (ms) => {
    if (ms < 60000) return `${Math.floor(ms / 1000)}s`;
    if (ms < 3600000) return `${Math.floor(ms / 60000)}m`;
    return `${Math.floor(ms / 3600000)}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🔔 REAL-TIME NOTIFICATION CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-mono border border-blue-500/30">
            {notifications.filter(n => !n.read).length} UNREAD
          </div>
          <div className="text-sm text-gray-400 font-mono">
            AI-Powered Monitoring
          </div>
        </div>
      </div>

      {/* Real-time Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-lg p-4 border border-red-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-red-200">ACTIVE ALERTS</div>
              <div className="text-2xl font-bold text-red-100">
                {realTimeMetrics.activeAlerts}
              </div>
              <div className="text-xs text-red-300">Needs attention</div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">RESOLVED TODAY</div>
              <div className="text-2xl font-bold text-green-100">
                {realTimeMetrics.resolvedToday}
              </div>
              <div className="text-xs text-green-300">Auto-resolved</div>
            </div>
            <div className="text-3xl opacity-60">✅</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">AVG RESPONSE</div>
              <div className="text-2xl font-bold text-blue-100">
                {realTimeMetrics.avgResponseTime.toFixed(0)}ms
              </div>
              <div className="text-xs text-blue-300">Alert processing</div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">PREDICTION ACC.</div>
              <div className="text-2xl font-bold text-purple-100">
                {realTimeMetrics.predictionAccuracy.toFixed(1)}%
              </div>
              <div className="text-xs text-purple-300">AI forecasting</div>
            </div>
            <div className="text-3xl opacity-60">🔮</div>
          </div>
        </div>
      </div>

      {/* Live Notifications Stream and Predictive Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Notifications */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center">
            📡 LIVE NOTIFICATION STREAM
            <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </h3>
          <div className="space-y-2 max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="text-gray-400 text-center py-8">
                No recent notifications
              </div>
            ) : (
              notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    notification.read 
                      ? 'bg-gray-700/50 border-gray-600' 
                      : 'bg-gray-700 border-blue-500/30 shadow-lg'
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-lg mt-0.5">{notification.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-white font-medium text-sm">{notification.title}</span>
                        <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(notification.severity)}`}>
                          {notification.severity}
                        </span>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <div className="text-sm text-gray-300">{notification.message}</div>
                      <div className="text-xs text-gray-500 mt-1">{formatTime(notification.timestamp)}</div>
                    </div>
                  </div>
                  {notification.actionRequired && (
                    <div className="mt-2 pt-2 border-t border-gray-600">
                      <button className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded">
                        Take Action
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* AI Predictive Alerts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AI PREDICTIVE ALERTS
          </h3>
          <div className="space-y-3">
            {predictiveAlerts.map((alert) => (
              <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(alert.severity)}`}>
                    {alert.severity}
                  </span>
                  <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded text-xs border border-purple-500/30">
                    PREDICTIVE
                  </span>
                  <span className="text-xs text-gray-400">
                    {alert.confidence.toFixed(1)}% confidence
                  </span>
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{alert.title}</h4>
                <div className="text-sm text-gray-300 mb-2">{alert.message}</div>
                <div className="text-xs text-blue-400 mb-2">
                  <strong>Recommendation:</strong> {alert.recommendation}
                </div>
                <div className="text-xs text-purple-400 mb-2">
                  <strong>AI Reasoning:</strong> {alert.aiReasoning}
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">ETA: {alert.estimatedTime}</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded">
                    Prepare
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Rules Configuration and Recent History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alert Rules */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚙️ ALERT RULES CONFIGURATION
          </h3>
          <div className="space-y-3">
            {alertRules.map((rule) => (
              <div key={rule.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{rule.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(rule.severity)}`}>
                      {rule.severity}
                    </span>
                    {rule.triggered && (
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-red-400">TRIGGERED</span>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleAlertRule(rule.id)}
                    className={`px-3 py-1 rounded text-xs font-mono ${
                      rule.enabled 
                        ? 'bg-green-600 hover:bg-green-700 text-white' 
                        : 'bg-gray-600 hover:bg-gray-500 text-gray-300'
                    }`}
                  >
                    {rule.enabled ? 'ENABLED' : 'DISABLED'}
                  </button>
                </div>
                <div className="text-xs text-gray-300 mb-2">{rule.description}</div>
                <div className="text-xs text-cyan-400 mb-2 font-mono">
                  Condition: {rule.condition}
                </div>
                {rule.lastTriggered && (
                  <div className="text-xs text-gray-500">
                    Last triggered: {formatTime(rule.lastTriggered)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Alert History */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📋 ALERT HISTORY
          </h3>
          <div className="space-y-3">
            {alertHistory.map((alert) => (
              <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${
                      alert.status === 'ACTIVE' ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                      alert.status === 'ACKNOWLEDGED' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                      'bg-green-500/20 text-green-400 border-green-500/30'
                    }`}>
                      {alert.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{formatTime(alert.timestamp)}</span>
                </div>
                <h4 className="font-bold text-white text-sm mb-1">{alert.title}</h4>
                <div className="text-sm text-gray-300 mb-2">{alert.message}</div>
                <div className="flex items-center justify-between text-xs">
                  {alert.acknowledgingUser && (
                    <span className="text-gray-400">
                      Acknowledged by: <span className="text-cyan-400">{alert.acknowledgingUser}</span>
                    </span>
                  )}
                  {alert.resolutionTime && (
                    <span className="text-gray-400">
                      Resolution time: <span className="text-green-400">{formatDuration(alert.resolutionTime)}</span>
                    </span>
                  )}
                  {alert.status === 'ACTIVE' && (
                    <button
                      onClick={() => acknowledgeAlert(alert.id)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      Acknowledge
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔧 NOTIFICATION SETTINGS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-bold text-cyan-400 mb-3">DELIVERY CHANNELS</h4>
            <div className="space-y-2">
              {[
                { key: 'emailNotifications', label: 'Email Notifications' },
                { key: 'pushNotifications', label: 'Push Notifications' },
                { key: 'slackIntegration', label: 'Slack Integration' },
                { key: 'teamsIntegration', label: 'Teams Integration' }
              ].map(setting => (
                <div key={setting.key} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">{setting.label}</span>
                  <button
                    onClick={() => setNotificationSettings(prev => ({
                      ...prev,
                      [setting.key]: !prev[setting.key]
                    }))}
                    className={`px-2 py-1 rounded text-xs font-mono ${
                      notificationSettings[setting.key]
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {notificationSettings[setting.key] ? 'ON' : 'OFF'}
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-purple-400 mb-3">SEVERITY FILTERS</h4>
            <div className="space-y-2">
              {Object.entries(notificationSettings.severityFilters).map(([severity, enabled]) => (
                <div key={severity} className="flex items-center justify-between">
                  <span className="text-sm text-gray-300 capitalize">{severity}</span>
                  <button
                    onClick={() => setNotificationSettings(prev => ({
                      ...prev,
                      severityFilters: {
                        ...prev.severityFilters,
                        [severity]: !enabled
                      }
                    }))}
                    className={`px-2 py-1 rounded text-xs font-mono ${
                      enabled ? 'bg-green-600 text-white' : 'bg-gray-600 text-gray-300'
                    }`}
                  >
                    {enabled ? 'ON' : 'OFF'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-yellow-400 mb-3">QUIET HOURS</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Enable Quiet Hours</span>
                <button
                  onClick={() => setNotificationSettings(prev => ({
                    ...prev,
                    quietHours: { ...prev.quietHours, enabled: !prev.quietHours.enabled }
                  }))}
                  className={`px-2 py-1 rounded text-xs font-mono ${
                    notificationSettings.quietHours.enabled
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {notificationSettings.quietHours.enabled ? 'ON' : 'OFF'}
                </button>
              </div>
              <div className="text-xs text-gray-400">
                {notificationSettings.quietHours.start} - {notificationSettings.quietHours.end}
              </div>
              <div className="text-xs text-gray-500">
                Critical alerts will still be delivered during quiet hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeNotificationCenter;