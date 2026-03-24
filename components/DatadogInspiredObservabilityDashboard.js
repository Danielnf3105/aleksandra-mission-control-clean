// Datadog-Inspired Observability Dashboard - March 2026
// Advanced monitoring and observability dashboard inspired by Datadog's interface and capabilities
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, Heatmap, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, RadialBarChart, RadialBar, Treemap } from 'recharts';

export default function DatadogInspiredObservabilityDashboard() {
  const [observabilityMetrics, setObservabilityMetrics] = useState({
    totalHosts: 156,
    totalContainers: 2847,
    totalServices: 89,
    apmTraces: 156789,
    logsPerSecond: 4567,
    alertsActive: 12,
    incidentsOpen: 3,
    slaCompliance: 99.97,
    mttr: 4.2,
    healthScore: 96.8,
    errorRate: 0.023,
    p99Latency: 145.7
  });

  const [timeSeriesData, setTimeSeriesData] = useState([
    { time: '04:22', requests: 4567, errors: 12, latency: 145.7, cpu: 67.3, memory: 72.8, apdex: 0.94 },
    { time: '04:21', requests: 4234, errors: 8, latency: 132.4, cpu: 65.1, memory: 71.2, apdex: 0.96 },
    { time: '04:20', requests: 4789, errors: 15, latency: 167.2, cpu: 69.7, memory: 74.1, apdex: 0.92 },
    { time: '04:19', requests: 4456, errors: 11, latency: 156.8, cpu: 71.2, memory: 73.5, apdex: 0.93 },
    { time: '04:18', requests: 4623, errors: 9, latency: 142.3, cpu: 68.4, memory: 72.9, apdex: 0.95 }
  ]);

  const [serviceMap, setServiceMap] = useState([
    { service: 'aleksandra-ai-engine', requests: 1234, errors: 3, latency: 45.2, dependencies: 4, health: 'HEALTHY' },
    { service: 'content-processor', requests: 2156, errors: 8, latency: 78.9, dependencies: 2, health: 'DEGRADED' },
    { service: 'instagram-analyzer', requests: 987, errors: 1, latency: 23.4, dependencies: 3, health: 'HEALTHY' },
    { service: 'transcription-service', requests: 3456, errors: 12, latency: 156.7, dependencies: 1, health: 'WARNING' },
    { service: 'api-gateway', requests: 5678, errors: 2, latency: 12.3, dependencies: 6, health: 'HEALTHY' },
    { service: 'mission-dashboard', requests: 456, errors: 0, latency: 34.7, dependencies: 2, health: 'HEALTHY' }
  ]);

  const [apmTraces, setApmTraces] = useState([
    { traceId: 'abc123def456', service: 'instagram-analyzer', duration: 234, spans: 12, status: 'OK', timestamp: '04:22:15' },
    { traceId: 'ghi789jkl012', service: 'content-processor', duration: 567, spans: 8, status: 'ERROR', timestamp: '04:22:08' },
    { traceId: 'mno345pqr678', service: 'aleksandra-ai-engine', duration: 123, spans: 15, status: 'OK', timestamp: '04:22:03' },
    { traceId: 'stu901vwx234', service: 'transcription-service', duration: 789, spans: 6, status: 'SLOW', timestamp: '04:21:58' },
    { traceId: 'yza567bcd890', service: 'api-gateway', duration: 45, spans: 3, status: 'OK', timestamp: '04:21:52' }
  ]);

  const [logAnalysis, setLogAnalysis] = useState([
    { level: 'ERROR', count: 234, percentage: 5.1, trend: '+12%' },
    { level: 'WARN', count: 567, percentage: 12.4, trend: '-3%' },
    { level: 'INFO', count: 3456, percentage: 75.6, trend: '+1%' },
    { level: 'DEBUG', count: 312, percentage: 6.9, trend: '-8%' }
  ]);

  const [infrastructureHealth, setInfrastructureHealth] = useState([
    { component: 'Load Balancers', status: 'HEALTHY', uptime: 99.99, responseTime: 12.3, throughput: 4567 },
    { component: 'Application Servers', status: 'DEGRADED', uptime: 99.85, responseTime: 156.7, throughput: 3456 },
    { component: 'Databases', status: 'HEALTHY', uptime: 99.97, responseTime: 23.4, throughput: 2345 },
    { component: 'Cache Layer', status: 'HEALTHY', uptime: 99.95, responseTime: 5.8, throughput: 5678 },
    { component: 'Message Queues', status: 'WARNING', uptime: 99.78, responseTime: 78.9, throughput: 1234 }
  ]);

  const [alerts, setAlerts] = useState([
    { id: 'DD-001', severity: 'HIGH', title: 'High Error Rate', description: 'content-processor error rate exceeds threshold (>5%)', service: 'content-processor', triggered: '3m ago', status: 'FIRING' },
    { id: 'DD-002', severity: 'MEDIUM', title: 'Increased Latency', description: 'transcription-service p99 latency > 500ms', service: 'transcription-service', triggered: '8m ago', status: 'FIRING' },
    { id: 'DD-003', severity: 'LOW', title: 'Memory Usage', description: 'Memory utilization above 80% on 3 hosts', service: 'infrastructure', triggered: '15m ago', status: 'ACKNOWLEDGED' },
    { id: 'DD-004', severity: 'INFO', title: 'Deployment Complete', description: 'mission-dashboard v1.4.2 deployed successfully', service: 'mission-dashboard', triggered: '22m ago', status: 'RESOLVED' }
  ]);

  const [customMetrics, setCustomMetrics] = useState([
    { metric: 'Instagram Videos Processed', value: 2847, unit: 'count', change: '+12.3%' },
    { metric: 'AI Model Inference Rate', value: 15.7, unit: 'ops/sec', change: '+8.7%' },
    { metric: 'Transcription Accuracy', value: 97.8, unit: '%', change: '+0.2%' },
    { metric: 'Content Quality Score', value: 94.3, unit: 'score', change: '+1.1%' },
    { metric: 'User Engagement Prediction', value: 87.6, unit: '%', change: '+5.4%' },
    { metric: 'Pipeline Throughput', value: 1.2, unit: 'GB/s', change: '-2.1%' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update real-time metrics
      setObservabilityMetrics(prev => ({
        ...prev,
        logsPerSecond: Math.max(3000, Math.min(6000, prev.logsPerSecond + Math.floor((Math.random() - 0.5) * 500))),
        apmTraces: prev.apmTraces + Math.floor(Math.random() * 100) + 50,
        errorRate: Math.max(0.001, Math.min(0.1, prev.errorRate + (Math.random() - 0.5) * 0.005)),
        p99Latency: Math.max(50, Math.min(300, prev.p99Latency + (Math.random() - 0.5) * 20)),
        healthScore: Math.max(90, Math.min(100, prev.healthScore + (Math.random() - 0.5) * 1))
      }));

      // Update time series data
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setTimeSeriesData(prev => {
        const newData = {
          time: currentTime,
          requests: Math.floor(Math.random() * 1000) + 4000,
          errors: Math.floor(Math.random() * 15) + 5,
          latency: Math.random() * 100 + 100,
          cpu: Math.random() * 20 + 60,
          memory: Math.random() * 15 + 65,
          apdex: Math.random() * 0.1 + 0.9
        };
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update service metrics
      setServiceMap(prev => prev.map(service => ({
        ...service,
        requests: service.requests + Math.floor(Math.random() * 100),
        errors: Math.max(0, service.errors + Math.floor((Math.random() - 0.7) * 3)),
        latency: Math.max(10, service.latency + (Math.random() - 0.5) * 20)
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (status) => {
    switch(status.toUpperCase()) {
      case 'HEALTHY': case 'OK': case 'RESOLVED': return 'text-green-400';
      case 'DEGRADED': case 'SLOW': case 'ACKNOWLEDGED': return 'text-yellow-400';
      case 'WARNING': case 'FIRING': return 'text-orange-400';
      case 'ERROR': case 'CRITICAL': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toUpperCase()) {
      case 'INFO': case 'LOW': return 'border-blue-500 bg-blue-900/20 text-blue-300';
      case 'MEDIUM': case 'WARNING': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'HIGH': case 'CRITICAL': return 'border-red-500 bg-red-900/20 text-red-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Datadog-Style Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                📊 Datadog Observability Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>HOSTS: <span className="text-purple-400 font-mono">{observabilityMetrics.totalHosts}</span></div>
                <div>CONTAINERS: <span className="text-blue-400">{observabilityMetrics.totalContainers}</span></div>
                <div>TRACES: <span className="text-green-400">{observabilityMetrics.apmTraces.toLocaleString()}</span></div>
                <div>LOGS/SEC: <span className="text-yellow-400">{observabilityMetrics.logsPerSecond.toLocaleString()}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">{observabilityMetrics.healthScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">OVERALL HEALTH</div>
              <div className="text-xs text-green-300">SLA: {observabilityMetrics.slaCompliance}%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Performance Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{(observabilityMetrics.errorRate * 100).toFixed(3)}%</div>
            <div className="text-xs text-gray-400">Target: < 0.1%</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">P99 Latency</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{observabilityMetrics.p99Latency.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">Target: < 200ms</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">MTTR</span>
              <span className="text-2xl">🔧</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{observabilityMetrics.mttr.toFixed(1)}m</div>
            <div className="text-xs text-gray-400">Target: < 10m</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Active Alerts</span>
              <span className="text-2xl">🔔</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{observabilityMetrics.alertsActive}</div>
            <div className="text-xs text-gray-400">Incidents: {observabilityMetrics.incidentsOpen}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Performance Metrics Chart */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Application Performance Monitoring
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={timeSeriesData.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#9CA3AF" />
                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="requests" fill="#8b5cf6" fillOpacity={0.3} stroke="#8b5cf6" name="Requests" />
                <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} name="Latency (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="errors" stroke="#ef4444" strokeWidth={2} name="Errors" />
                <Line yAxisId="right" type="monotone" dataKey="apdex" stroke="#10b981" strokeWidth={2} name="Apdex" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Service Map */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗺️ Service Map & Health
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {serviceMap.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{service.service}</span>
                    <span className={`font-bold ${getHealthColor(service.health)}`}>{service.health}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="text-purple-400">{service.requests} req/s</div>
                    <div className="text-red-400">{service.errors} errors</div>
                    <div className="text-yellow-400">{service.latency.toFixed(1)}ms</div>
                    <div className="text-gray-300 col-span-2">{service.dependencies} dependencies</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* APM Traces */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔍 Recent Traces
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {apmTraces.map((trace, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{trace.traceId}</span>
                    <span className={`text-xs font-bold ${getHealthColor(trace.status)}`}>{trace.status}</span>
                  </div>
                  <div className="text-sm text-white mb-1">{trace.service}</div>
                  <div className="text-xs text-gray-300">
                    {trace.duration}ms | {trace.spans} spans | {trace.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Log Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📝 Log Analysis
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={logAnalysis}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="level" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151' }} />
                <Bar dataKey="count" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
              {logAnalysis.map((log, index) => (
                <div key={index} className="flex justify-between p-2 bg-gray-700 rounded">
                  <span className="text-gray-300">{log.level}</span>
                  <span className="text-green-400">{log.trend}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⚡ Business Metrics
            </h3>
            <div className="space-y-3">
              {customMetrics.map((metric, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-white">{metric.metric}</span>
                    <span className="text-green-400 text-xs font-bold">{metric.change}</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-400">
                    {metric.value}{metric.unit !== 'count' && metric.unit !== 'score' ? ' ' + metric.unit : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Alerts */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🚨 Active Alerts & Incidents
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-4 border-l-4 rounded-lg ${getSeverityColor(alert.severity)}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="font-bold text-sm">{alert.title}</span>
                    <span className="text-xs ml-2 px-2 py-1 bg-gray-600 rounded">{alert.service}</span>
                  </div>
                  <span className="text-xs">{alert.triggered}</span>
                </div>
                <p className="text-sm mb-2">{alert.description}</p>
                <div className="flex justify-between items-center text-xs">
                  <span>{alert.id}</span>
                  <span className={`font-bold ${getHealthColor(alert.status)}`}>{alert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Health */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🏗️ Infrastructure Health Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {infrastructureHealth.map((component, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white text-sm">{component.component}</span>
                  <span className={`text-sm ${getHealthColor(component.status)}`}>{component.status}</span>
                </div>
                <div className="text-xs text-gray-300 space-y-1">
                  <div>Uptime: {component.uptime}%</div>
                  <div>Response: {component.responseTime}ms</div>
                  <div>Throughput: {component.throughput} ops/s</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            DATADOG-INSPIRED OBSERVABILITY | ALEKSANDRA AI MONITORING | FULL-STACK VISIBILITY
          </div>
          <div className="text-sm text-gray-500 mt-2">
            APM | Infrastructure | Logs | Traces | Custom Metrics | Real-time Alerting | Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}