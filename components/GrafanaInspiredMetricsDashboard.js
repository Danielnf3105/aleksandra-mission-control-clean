// Grafana-Inspired Metrics Dashboard - March 2026
// Advanced metrics visualization dashboard inspired by Grafana's powerful charting and alerting capabilities
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function GrafanaInspiredMetricsDashboard() {
  const [dashboardMetrics, setDashboardMetrics] = useState({
    totalPanels: 24,
    dataSourcesConnected: 8,
    queriesPerSecond: 1247,
    alertRules: 156,
    alertsFiring: 3,
    dashboardsActive: 12,
    usersActive: 89,
    dataRetention: '30d',
    queryResponseTime: 245,
    systemLoad: 67.3,
    storageUsed: 2.4,
    networkTraffic: 156.7
  });

  const [timeSeriesMetrics, setTimeSeriesMetrics] = useState([
    { time: '04:26', cpu: 67.3, memory: 72.8, disk: 45.7, network: 156.7, queries: 1247, alerts: 3 },
    { time: '04:25', cpu: 65.1, memory: 71.2, disk: 45.5, network: 134.2, queries: 1156, alerts: 4 },
    { time: '04:24', cpu: 69.7, memory: 74.1, disk: 45.3, network: 167.9, queries: 1345, alerts: 2 },
    { time: '04:23', cpu: 71.2, memory: 73.5, disk: 45.1, network: 189.4, queries: 1289, alerts: 3 },
    { time: '04:22', cpu: 68.4, memory: 72.9, disk: 44.9, network: 145.6, queries: 1198, alerts: 5 }
  ]);

  const [panels, setPanels] = useState([
    { 
      id: 'panel-01',
      title: 'Instagram Content Processing Rate', 
      type: 'graph', 
      target: 'content_processor_rate',
      value: 15.7,
      unit: 'items/sec',
      status: 'OK',
      threshold: { warn: 10, critical: 5 }
    },
    { 
      id: 'panel-02',
      title: 'AssemblyAI Transcription Latency', 
      type: 'singlestat', 
      target: 'assemblyai_latency_p99',
      value: 1.2,
      unit: 'seconds',
      status: 'OK',
      threshold: { warn: 2, critical: 5 }
    },
    { 
      id: 'panel-03',
      title: 'AI Model Inference Accuracy', 
      type: 'gauge', 
      target: 'ai_model_accuracy',
      value: 97.8,
      unit: '%',
      status: 'OK',
      threshold: { warn: 95, critical: 90 }
    },
    { 
      id: 'panel-04',
      title: 'System Error Rate', 
      type: 'graph', 
      target: 'system_error_rate',
      value: 0.023,
      unit: '%',
      status: 'WARNING',
      threshold: { warn: 0.02, critical: 0.05 }
    },
    { 
      id: 'panel-05',
      title: 'Content Quality Score', 
      type: 'stat', 
      target: 'content_quality_average',
      value: 94.3,
      unit: 'score',
      status: 'OK',
      threshold: { warn: 85, critical: 75 }
    },
    { 
      id: 'panel-06',
      title: 'API Response Time P95', 
      type: 'graph', 
      target: 'api_response_time_p95',
      value: 145.7,
      unit: 'ms',
      status: 'OK',
      threshold: { warn: 200, critical: 500 }
    }
  ]);

  const [alertingRules, setAlertingRules] = useState([
    { 
      id: 'rule-001',
      name: 'High Content Processing Latency',
      query: 'content_processor_latency_p99 > 5',
      severity: 'warning',
      status: 'OK',
      lastEvaluation: '30s ago',
      evaluationTime: '15s'
    },
    { 
      id: 'rule-002',
      name: 'AI Model Accuracy Drop',
      query: 'ai_model_accuracy < 95',
      severity: 'critical',
      status: 'OK',
      lastEvaluation: '45s ago',
      evaluationTime: '60s'
    },
    { 
      id: 'rule-003',
      name: 'Instagram API Rate Limit',
      query: 'instagram_api_rate_limit > 80',
      severity: 'warning',
      status: 'FIRING',
      lastEvaluation: '15s ago',
      evaluationTime: '30s'
    },
    { 
      id: 'rule-004',
      name: 'System Memory Usage',
      query: 'system_memory_usage > 85',
      severity: 'critical',
      status: 'PENDING',
      lastEvaluation: '20s ago',
      evaluationTime: '30s'
    }
  ]);

  const [dataSources, setDataSources] = useState([
    { name: 'Prometheus', type: 'prometheus', status: 'connected', queries: 847, latency: 23 },
    { name: 'InfluxDB', type: 'influxdb', status: 'connected', queries: 234, latency: 45 },
    { name: 'Elasticsearch', type: 'elasticsearch', status: 'connected', queries: 156, latency: 67 },
    { name: 'PostgreSQL', type: 'postgres', status: 'connected', queries: 89, latency: 12 },
    { name: 'Redis', type: 'redis', status: 'connected', queries: 567, latency: 8 },
    { name: 'CloudWatch', type: 'cloudwatch', status: 'connected', queries: 345, latency: 156 }
  ]);

  const [variablesConfig, setVariablesConfig] = useState([
    { name: 'environment', type: 'custom', value: 'production', options: ['production', 'staging', 'development'] },
    { name: 'service', type: 'query', value: 'aleksandra-ai-engine', query: 'label_values(service)' },
    { name: 'instance', type: 'query', value: 'all', query: 'label_values(instance)' },
    { name: 'time_range', type: 'interval', value: '5m', options: ['1m', '5m', '15m', '1h', '6h', '24h'] }
  ]);

  const [annotations, setAnnotations] = useState([
    { time: '04:20', title: 'Deployment: mission-dashboard v1.5.0', text: 'New Grafana dashboard deployed', tags: ['deployment'], color: '#00ff00' },
    { time: '04:15', title: 'Alert: High CPU Usage Resolved', text: 'CPU usage returned to normal levels', tags: ['resolved'], color: '#0080ff' },
    { time: '04:10', title: 'Maintenance: Cache Flush', text: 'Redis cache manually flushed', tags: ['maintenance'], color: '#ff8000' },
    { time: '04:05', title: 'Incident: API Timeout', text: 'Instagram API experiencing timeouts', tags: ['incident'], color: '#ff0000' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update dashboard metrics
      setDashboardMetrics(prev => ({
        ...prev,
        queriesPerSecond: Math.max(800, Math.min(1500, prev.queriesPerSecond + Math.floor((Math.random() - 0.5) * 100))),
        queryResponseTime: Math.max(100, Math.min(500, prev.queryResponseTime + (Math.random() - 0.5) * 50)),
        systemLoad: Math.max(40, Math.min(90, prev.systemLoad + (Math.random() - 0.5) * 5)),
        storageUsed: Math.max(1, Math.min(5, prev.storageUsed + (Math.random() - 0.5) * 0.1)),
        networkTraffic: Math.max(50, Math.min(300, prev.networkTraffic + (Math.random() - 0.5) * 30))
      }));

      // Update time series data
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setTimeSeriesMetrics(prev => {
        const newMetric = {
          time: currentTime,
          cpu: Math.max(40, Math.min(90, prev[prev.length - 1]?.cpu + (Math.random() - 0.5) * 5)) || 67,
          memory: Math.max(50, Math.min(85, prev[prev.length - 1]?.memory + (Math.random() - 0.5) * 3)) || 72,
          disk: Math.max(30, Math.min(70, prev[prev.length - 1]?.disk + (Math.random() - 0.5) * 2)) || 45,
          network: Math.max(50, Math.min(300, prev[prev.length - 1]?.network + (Math.random() - 0.5) * 20)) || 156,
          queries: Math.max(800, Math.min(1500, prev[prev.length - 1]?.queries + Math.floor((Math.random() - 0.5) * 100))) || 1247,
          alerts: Math.max(0, Math.min(10, prev[prev.length - 1]?.alerts + Math.floor((Math.random() - 0.5) * 2))) || 3
        };
        
        return [...prev.slice(-19), newMetric]; // Keep last 20 points
      });

      // Update panel values
      setPanels(prev => prev.map(panel => ({
        ...panel,
        value: panel.type === 'gauge' && panel.unit === '%' 
          ? Math.max(85, Math.min(100, panel.value + (Math.random() - 0.5) * 1))
          : Math.max(panel.value * 0.5, Math.min(panel.value * 1.5, panel.value + (Math.random() - 0.5) * panel.value * 0.1))
      })));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toUpperCase()) {
      case 'OK': case 'CONNECTED': return 'text-green-400';
      case 'WARNING': case 'PENDING': return 'text-yellow-400';
      case 'CRITICAL': case 'FIRING': return 'text-red-400';
      case 'UNKNOWN': return 'text-gray-400';
      default: return 'text-blue-400';
    }
  };

  const getPanelTypeIcon = (type) => {
    switch(type) {
      case 'graph': return '📈';
      case 'singlestat': return '📊';
      case 'gauge': return '⏱️';
      case 'stat': return '💯';
      case 'table': return '📋';
      default: return '📊';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'info': return 'border-blue-500 bg-blue-900/20 text-blue-300';
      case 'warning': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'critical': return 'border-red-500 bg-red-900/20 text-red-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Grafana-Style Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                📊 Grafana Metrics Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>PANELS: <span className="text-orange-400 font-mono">{dashboardMetrics.totalPanels}</span></div>
                <div>DATA SOURCES: <span className="text-green-400">{dashboardMetrics.dataSourcesConnected}</span></div>
                <div>QUERIES/SEC: <span className="text-blue-400">{dashboardMetrics.queriesPerSecond}</span></div>
                <div>ALERTS: <span className="text-red-400">{dashboardMetrics.alertsFiring}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-400">{dashboardMetrics.queryResponseTime}ms</div>
              <div className="text-sm text-gray-300">Query Response Time</div>
              <div className="text-xs text-orange-300">Average P95</div>
            </div>
          </div>
        </div>

        {/* Dashboard Variables */}
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6">
          <div className="flex flex-wrap gap-4">
            {variablesConfig.map((variable, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="text-gray-300 text-sm">{variable.name}:</span>
                <select className="bg-gray-700 text-white text-sm px-2 py-1 rounded border border-gray-600">
                  <option value={variable.value}>{variable.value}</option>
                  {variable.options?.map((option, optIndex) => (
                    option !== variable.value && (
                      <option key={optIndex} value={option}>{option}</option>
                    )
                  ))}
                </select>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm">Refresh:</span>
              <select className="bg-gray-700 text-white text-sm px-2 py-1 rounded border border-gray-600">
                <option value="30s">30s</option>
                <option value="1m">1m</option>
                <option value="5m">5m</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Real-time System Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 System Performance Metrics
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={timeSeriesMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#f97316" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#f97316" />
                <YAxis yAxisId="right" orientation="right" stroke="#f97316" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #f97316' }}
                  labelStyle={{ color: '#f97316' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="cpu" fill="#f59e0b" fillOpacity={0.3} stroke="#f59e0b" name="CPU %" />
                <Area yAxisId="left" type="monotone" dataKey="memory" fill="#8b5cf6" fillOpacity={0.2} stroke="#8b5cf6" name="Memory %" />
                <Line yAxisId="right" type="monotone" dataKey="network" stroke="#10b981" strokeWidth={2} name="Network MB/s" />
                <Line yAxisId="right" type="monotone" dataKey="alerts" stroke="#ef4444" strokeWidth={3} name="Active Alerts" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Panel Grid */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎛️ Dashboard Panels
            </h3>
            <div className="grid grid-cols-2 gap-3 max-h-80 overflow-y-auto">
              {panels.map((panel) => (
                <div key={panel.id} className="p-3 bg-gray-700 rounded-lg border-l-4 border-orange-400">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-300 flex items-center gap-1">
                      {getPanelTypeIcon(panel.type)} {panel.title}
                    </span>
                    <span className={`text-xs font-bold ${getStatusColor(panel.status)}`}>{panel.status}</span>
                  </div>
                  <div className="text-lg font-bold text-orange-400 mb-1">
                    {typeof panel.value === 'number' ? panel.value.toFixed(panel.unit === '%' ? 1 : 2) : panel.value}
                    <span className="text-sm text-gray-300 ml-1">{panel.unit}</span>
                  </div>
                  <div className="text-xs text-gray-400">Target: {panel.target}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Alerting Rules */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Alert Rules
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {alertingRules.map((rule) => (
                <div key={rule.id} className={`p-3 rounded-lg border-l-4 ${getSeverityColor(rule.severity)}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{rule.name}</span>
                    <span className={`text-xs font-bold ${getStatusColor(rule.status)}`}>{rule.status}</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1 font-mono">{rule.query}</div>
                  <div className="text-xs text-gray-400">
                    Last eval: {rule.lastEvaluation} | Every: {rule.evaluationTime}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Sources */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔗 Data Sources
            </h3>
            <div className="space-y-3">
              {dataSources.map((ds, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">{ds.name}</span>
                    <span className={`text-sm ${getStatusColor(ds.status)}`}>{ds.status}</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">{ds.type}</div>
                  <div className="text-xs text-gray-400">
                    {ds.queries} queries | {ds.latency}ms avg
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Annotations Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📝 Annotations
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {annotations.map((annotation, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4" style={{ borderLeftColor: annotation.color }}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{annotation.title}</span>
                    <span className="text-xs text-gray-400">{annotation.time}</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">{annotation.text}</div>
                  <div className="flex gap-1">
                    {annotation.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-1 bg-gray-600 rounded" style={{ color: annotation.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Query Performance */}
        <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            ⚡ Query Performance & Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-orange-400">{dashboardMetrics.queriesPerSecond}</div>
              <div className="text-xs text-gray-300">Queries/sec</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{dashboardMetrics.queryResponseTime}ms</div>
              <div className="text-xs text-gray-300">Avg Response</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">{dashboardMetrics.dashboardsActive}</div>
              <div className="text-xs text-gray-300">Dashboards</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">{dashboardMetrics.usersActive}</div>
              <div className="text-xs text-gray-300">Active Users</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">{dashboardMetrics.systemLoad.toFixed(1)}%</div>
              <div className="text-xs text-gray-300">System Load</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-red-400">{dashboardMetrics.storageUsed.toFixed(1)}TB</div>
              <div className="text-xs text-gray-300">Storage Used</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">{dashboardMetrics.dataRetention}</div>
              <div className="text-xs text-gray-300">Retention</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-orange-400">{dashboardMetrics.networkTraffic.toFixed(0)}MB/s</div>
              <div className="text-xs text-gray-300">Network I/O</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            GRAFANA-INSPIRED METRICS DASHBOARD | ALEKSANDRA AI MONITORING | ADVANCED VISUALIZATION & ALERTING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Query Engine: PromQL | Time Series DB | Real-time Alerts | Custom Annotations | Last refresh: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}