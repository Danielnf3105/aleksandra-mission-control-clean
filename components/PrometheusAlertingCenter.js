// Prometheus Alerting Center - March 2026
// Advanced alerting and monitoring dashboard inspired by Prometheus AlertManager and monitoring stack
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell } from 'recharts';

export default function PrometheusAlertingCenter() {
  const [alertingMetrics, setAlertingMetrics] = useState({
    totalAlerts: 247,
    firingAlerts: 12,
    pendingAlerts: 8,
    resolvedAlerts: 227,
    silencedAlerts: 3,
    alertmanagerInstances: 3,
    scrapeTargets: 156,
    scrapeSuccess: 98.7,
    rulesTotalEvaluations: 45678,
    ruleEvaluationDuration: 2.34,
    storageRetention: '15d',
    samplesIngested: 1567890
  });

  const [alertHistory, setAlertHistory] = useState([
    { time: '04:29', firing: 12, pending: 8, resolved: 227, silenced: 3, total: 247 },
    { time: '04:28', firing: 14, pending: 6, resolved: 223, silenced: 4, total: 243 },
    { time: '04:27', firing: 9, pending: 12, resolved: 219, silenced: 3, total: 240 },
    { time: '04:26', firing: 11, pending: 7, resolved: 215, silenced: 2, total: 235 },
    { time: '04:25', firing: 15, pending: 9, resolved: 211, silenced: 4, total: 235 }
  ]);

  const [activeAlerts, setActiveAlerts] = useState([
    {
      id: 'alert-001',
      alertname: 'HighContentProcessingLatency',
      severity: 'critical',
      instance: 'content-processor-1:8080',
      job: 'content-processor',
      status: 'firing',
      activeFor: '8m 23s',
      value: '5.67s',
      threshold: '> 5s',
      fingerprint: 'a1b2c3d4e5f6',
      labels: { service: 'content-processor', environment: 'production', team: 'ai-platform' },
      annotations: { description: 'Content processing latency is above 5 seconds', runbook: 'https://runbooks.ai/content-latency' }
    },
    {
      id: 'alert-002',
      alertname: 'InstagramAPIRateLimit',
      severity: 'warning',
      instance: 'instagram-analyzer-2:8080',
      job: 'instagram-analyzer',
      status: 'firing',
      activeFor: '3m 45s',
      value: '87%',
      threshold: '> 80%',
      fingerprint: 'g7h8i9j0k1l2',
      labels: { service: 'instagram-analyzer', environment: 'production', team: 'content-team' },
      annotations: { description: 'Instagram API rate limit usage is high', runbook: 'https://runbooks.ai/api-limits' }
    },
    {
      id: 'alert-003',
      alertname: 'AIModelAccuracyDrop',
      severity: 'warning',
      instance: 'aleksandra-ai-engine-1:8080',
      job: 'aleksandra-ai-engine',
      status: 'pending',
      activeFor: '45s',
      value: '94.2%',
      threshold: '< 95%',
      fingerprint: 'm3n4o5p6q7r8',
      labels: { service: 'aleksandra-ai-engine', environment: 'production', team: 'ml-platform' },
      annotations: { description: 'AI model accuracy has dropped below threshold', runbook: 'https://runbooks.ai/model-accuracy' }
    }
  ]);

  const [alertRules, setAlertRules] = useState([
    {
      name: 'ContentProcessingAlerts',
      file: 'content.rules.yml',
      rules: [
        { alert: 'HighContentProcessingLatency', expr: 'content_processing_duration_seconds > 5', for: '2m', severity: 'critical' },
        { alert: 'ContentQueueBacklog', expr: 'content_queue_size > 1000', for: '5m', severity: 'warning' },
        { alert: 'TranscriptionFailureRate', expr: 'rate(transcription_failures_total[5m]) > 0.1', for: '3m', severity: 'critical' }
      ]
    },
    {
      name: 'InfrastructureAlerts',
      file: 'infrastructure.rules.yml',
      rules: [
        { alert: 'HighCPUUsage', expr: 'cpu_usage_percent > 85', for: '10m', severity: 'warning' },
        { alert: 'LowDiskSpace', expr: 'disk_free_percent < 10', for: '5m', severity: 'critical' },
        { alert: 'HighMemoryUsage', expr: 'memory_usage_percent > 90', for: '5m', severity: 'warning' }
      ]
    },
    {
      name: 'ApplicationAlerts',
      file: 'application.rules.yml',
      rules: [
        { alert: 'HighErrorRate', expr: 'rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.05', for: '2m', severity: 'critical' },
        { alert: 'HighResponseLatency', expr: 'http_request_duration_seconds{quantile="0.95"} > 2', for: '5m', severity: 'warning' }
      ]
    }
  ]);

  const [scrapeTargets, setScrapeTargets] = useState([
    { job: 'aleksandra-ai-engine', targets: 6, up: 6, lastScrape: '12s ago', scrapeTime: '234ms', health: 'UP' },
    { job: 'content-processor', targets: 4, up: 4, lastScrape: '8s ago', scrapeTime: '156ms', health: 'UP' },
    { job: 'instagram-analyzer', targets: 3, up: 3, lastScrape: '15s ago', scrapeTime: '89ms', health: 'UP' },
    { job: 'transcription-service', targets: 8, up: 7, lastScrape: '22s ago', scrapeTime: '345ms', health: 'DOWN' },
    { job: 'api-gateway', targets: 2, up: 2, lastScrape: '6s ago', scrapeTime: '67ms', health: 'UP' },
    { job: 'mission-dashboard', targets: 3, up: 3, lastScrape: '10s ago', scrapeTime: '123ms', health: 'UP' }
  ]);

  const [silenceRules, setSilenceRules] = useState([
    {
      id: 'silence-001',
      matchers: [{ name: 'alertname', value: 'HighCPUUsage', isRegex: false }],
      startsAt: '2026-03-24T04:20:00Z',
      endsAt: '2026-03-24T06:00:00Z',
      createdBy: 'sre-team',
      comment: 'Expected high CPU during batch processing window',
      status: 'active'
    },
    {
      id: 'silence-002', 
      matchers: [{ name: 'service', value: 'legacy-.*', isRegex: true }],
      startsAt: '2026-03-24T03:00:00Z',
      endsAt: '2026-03-24T07:00:00Z',
      createdBy: 'platform-team',
      comment: 'Legacy services maintenance window',
      status: 'active'
    }
  ]);

  const [alertmanagerConfig, setAlertmanagerConfig] = useState({
    global: {
      smtpSmarthost: 'localhost:587',
      smtpFrom: 'alerts@aleksandra.ai'
    },
    routes: [
      { receiver: 'critical-alerts', matchers: ['severity="critical"'], groupWait: '10s', groupInterval: '10s', repeatInterval: '1h' },
      { receiver: 'warning-alerts', matchers: ['severity="warning"'], groupWait: '30s', groupInterval: '5m', repeatInterval: '6h' },
      { receiver: 'default', groupWait: '10s', groupInterval: '10s', repeatInterval: '24h' }
    ],
    receivers: [
      { name: 'critical-alerts', channels: ['slack-critical', 'pagerduty', 'email-oncall'] },
      { name: 'warning-alerts', channels: ['slack-warnings', 'email-team'] },
      { name: 'default', channels: ['email-team'] }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Update alerting metrics
      setAlertingMetrics(prev => ({
        ...prev,
        firingAlerts: Math.max(5, Math.min(20, prev.firingAlerts + Math.floor((Math.random() - 0.5) * 3))),
        pendingAlerts: Math.max(2, Math.min(15, prev.pendingAlerts + Math.floor((Math.random() - 0.5) * 2))),
        scrapeSuccess: Math.max(95, Math.min(100, prev.scrapeSuccess + (Math.random() - 0.5) * 1)),
        ruleEvaluationDuration: Math.max(1, Math.min(5, prev.ruleEvaluationDuration + (Math.random() - 0.5) * 0.5)),
        samplesIngested: prev.samplesIngested + Math.floor(Math.random() * 1000) + 500
      }));

      // Update alert history
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setAlertHistory(prev => {
        const newData = {
          time: currentTime,
          firing: Math.max(5, Math.min(20, prev[prev.length - 1]?.firing + Math.floor((Math.random() - 0.5) * 3))) || 12,
          pending: Math.max(2, Math.min(15, prev[prev.length - 1]?.pending + Math.floor((Math.random() - 0.5) * 2))) || 8,
          resolved: (prev[prev.length - 1]?.resolved || 227) + Math.floor(Math.random() * 5),
          silenced: Math.max(0, Math.min(10, prev[prev.length - 1]?.silenced + Math.floor((Math.random() - 0.5) * 1))) || 3,
          total: 0
        };
        newData.total = newData.firing + newData.pending + newData.resolved + newData.silenced;
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update scrape targets
      setScrapeTargets(prev => prev.map(target => ({
        ...target,
        up: Math.max(Math.floor(target.targets * 0.8), Math.min(target.targets, target.up + Math.floor((Math.random() - 0.3) * 1))),
        scrapeTime: Math.max(50, Math.min(500, target.scrapeTime + (Math.random() - 0.5) * 50))
      })));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const getAlertSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'border-red-500 bg-red-900/20 text-red-300';
      case 'warning': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'info': return 'border-blue-500 bg-blue-900/20 text-blue-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  const getAlertStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'firing': return 'text-red-400';
      case 'pending': return 'text-yellow-400';
      case 'resolved': return 'text-green-400';
      case 'silenced': return 'text-gray-400';
      default: return 'text-blue-400';
    }
  };

  const getHealthColor = (health) => {
    switch(health.toUpperCase()) {
      case 'UP': return 'text-green-400';
      case 'DOWN': return 'text-red-400';
      case 'UNKNOWN': return 'text-gray-400';
      default: return 'text-yellow-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-orange-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Prometheus Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🔥 Prometheus Alerting Center
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>TOTAL ALERTS: <span className="text-red-400 font-mono">{alertingMetrics.totalAlerts}</span></div>
                <div>FIRING: <span className="text-red-400">{alertingMetrics.firingAlerts}</span></div>
                <div>PENDING: <span className="text-yellow-400">{alertingMetrics.pendingAlerts}</span></div>
                <div>TARGETS: <span className="text-green-400">{alertingMetrics.scrapeTargets}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-400">{alertingMetrics.scrapeSuccess.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Scrape Success</div>
              <div className="text-xs text-red-300">{alertingMetrics.alertmanagerInstances} Instances</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Alert Status Cards */}
          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Firing Alerts</span>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{alertingMetrics.firingAlerts}</div>
            <div className="text-xs text-gray-400">Requires attention</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Pending Alerts</span>
              <span className="text-2xl">⏳</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{alertingMetrics.pendingAlerts}</div>
            <div className="text-xs text-gray-400">Under evaluation</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Silenced</span>
              <span className="text-2xl">🔇</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{alertingMetrics.silencedAlerts}</div>
            <div className="text-xs text-gray-400">Temporarily suppressed</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Rule Eval Duration</span>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{alertingMetrics.ruleEvaluationDuration.toFixed(2)}s</div>
            <div className="text-xs text-gray-400">Average evaluation time</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Alert History Chart */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Alert History Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={alertHistory.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#ef4444" tick={{ fontSize: 10 }} />
                <YAxis stroke="#ef4444" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #ef4444' }}
                  labelStyle={{ color: '#ef4444' }}
                />
                <Legend />
                <Area type="monotone" dataKey="firing" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Firing" />
                <Area type="monotone" dataKey="pending" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Pending" />
                <Area type="monotone" dataKey="silenced" stackId="1" stroke="#6b7280" fill="#6b7280" fillOpacity={0.4} name="Silenced" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Active Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {activeAlerts.map((alert) => (
                <div key={alert.id} className={`p-4 rounded-lg border-l-4 ${getAlertSeverityColor(alert.severity)}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{alert.alertname}</span>
                    <span className={`text-sm font-bold ${getAlertStatusColor(alert.status)}`}>{alert.status.toUpperCase()}</span>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{alert.annotations.description}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-gray-400">Instance: {alert.instance}</div>
                    <div className="text-gray-400">Active for: {alert.activeFor}</div>
                    <div className="text-gray-400">Value: {alert.value}</div>
                    <div className="text-gray-400">Threshold: {alert.threshold}</div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Fingerprint: {alert.fingerprint}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Scrape Targets */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Scrape Targets
            </h3>
            <div className="space-y-3">
              {scrapeTargets.map((target, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">{target.job}</span>
                    <span className={`text-sm font-bold ${getHealthColor(target.health)}`}>{target.health}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                    <div>Targets: {target.up}/{target.targets}</div>
                    <div>Last scrape: {target.lastScrape}</div>
                    <div>Scrape time: {target.scrapeTime}</div>
                    <div>Health: {target.health}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Rules */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Alert Rules
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {alertRules.map((ruleGroup, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="font-bold text-white mb-2">{ruleGroup.name}</div>
                  <div className="text-xs text-gray-400 mb-2">{ruleGroup.file}</div>
                  <div className="space-y-1">
                    {ruleGroup.rules.slice(0, 2).map((rule, ruleIndex) => (
                      <div key={ruleIndex} className="text-xs">
                        <div className="text-yellow-400">{rule.alert}</div>
                        <div className="text-gray-300 font-mono truncate">{rule.expr}</div>
                        <div className="text-gray-400">for: {rule.for} | severity: {rule.severity}</div>
                      </div>
                    ))}
                    {ruleGroup.rules.length > 2 && (
                      <div className="text-xs text-gray-400">+{ruleGroup.rules.length - 2} more rules...</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Silence Rules */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔇 Active Silences
            </h3>
            <div className="space-y-3">
              {silenceRules.map((silence) => (
                <div key={silence.id} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{silence.id}</span>
                    <span className="text-xs text-blue-400">{silence.status}</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">{silence.comment}</div>
                  <div className="text-xs text-gray-400">
                    By: {silence.createdBy} | Until: {new Date(silence.endsAt).toLocaleTimeString()}
                  </div>
                  <div className="mt-1 text-xs">
                    {silence.matchers.map((matcher, index) => (
                      <span key={index} className="inline-block bg-gray-600 px-2 py-1 rounded mr-1 mb-1">
                        {matcher.name}: {matcher.value}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Summary */}
        <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📈 Prometheus Metrics Summary
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-red-400">{alertingMetrics.totalAlerts}</div>
              <div className="text-xs text-gray-300">Total Alerts</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{alertingMetrics.scrapeTargets}</div>
              <div className="text-xs text-gray-300">Scrape Targets</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">{alertingMetrics.rulesTotalEvaluations.toLocaleString()}</div>
              <div className="text-xs text-gray-300">Rule Evaluations</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">{(alertingMetrics.samplesIngested / 1000).toFixed(1)}K</div>
              <div className="text-xs text-gray-300">Samples/sec</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">{alertingMetrics.storageRetention}</div>
              <div className="text-xs text-gray-300">Retention</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-orange-400">{alertingMetrics.alertmanagerInstances}</div>
              <div className="text-xs text-gray-300">AM Instances</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            PROMETHEUS ALERTING CENTER | ALEKSANDRA AI MONITORING | ADVANCED ALERTING & SCRAPING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            AlertManager | PromQL | Time Series | Rule Evaluation | Silence Management | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}