// Honeycomb Observability Dashboard - March 2026
// Comprehensive Honeycomb-inspired observability platform dashboard for distributed systems monitoring and performance analysis
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar, Sankey } from 'recharts';

export default function HoneycombObservabilityDashboard() {
  const [honeycombMetrics, setHoneycombMetrics] = useState({
    totalEvents: 25674893,
    totalTraces: 456789,
    totalSpans: 8934567,
    activeQueries: 45,
    datasets: 12,
    environments: 8,
    teams: 6,
    avgLatency: 234.5,
    errorRate: 1.2,
    throughput: 2567,
    p99Latency: 1245.7,
    storageUsed: 12.7 // GB
  });

  const [serviceMap, setServiceMap] = useState([
    {
      service: 'aleksandra-api-gateway',
      type: 'Gateway',
      environment: 'production',
      health: 'healthy',
      latency: 156.7,
      throughput: 567,
      errorRate: 0.8,
      dependencies: 8,
      upstreamServices: ['auth-service', 'user-service', 'content-service'],
      downstreamServices: ['mobile-app', 'web-app', 'admin-dashboard'],
      traces: 45678,
      spans: 234567
    },
    {
      service: 'aleksandra-auth-service',
      type: 'Authentication',
      environment: 'production',
      health: 'healthy',
      latency: 89.4,
      throughput: 234,
      errorRate: 0.3,
      dependencies: 4,
      upstreamServices: ['user-database', 'session-store'],
      downstreamServices: ['api-gateway'],
      traces: 23456,
      spans: 123456
    },
    {
      service: 'aleksandra-content-processor',
      type: 'Background Worker',
      environment: 'production',
      health: 'warning',
      latency: 2345.6,
      throughput: 89,
      errorRate: 3.2,
      dependencies: 6,
      upstreamServices: ['content-queue', 'media-storage', 'ai-service'],
      downstreamServices: ['notification-service'],
      traces: 12345,
      spans: 67890
    },
    {
      service: 'aleksandra-notification-service',
      type: 'Messaging',
      environment: 'production',
      health: 'healthy',
      latency: 67.8,
      throughput: 345,
      errorRate: 0.1,
      dependencies: 5,
      upstreamServices: ['user-preferences', 'message-templates'],
      downstreamServices: ['email-gateway', 'push-gateway', 'sms-gateway'],
      traces: 34567,
      spans: 178901
    },
    {
      service: 'aleksandra-analytics-engine',
      type: 'Analytics',
      environment: 'production',
      health: 'critical',
      latency: 4567.8,
      throughput: 23,
      errorRate: 8.9,
      dependencies: 12,
      upstreamServices: ['event-stream', 'data-warehouse', 'ml-pipeline'],
      downstreamServices: ['dashboard-api', 'reporting-service'],
      traces: 8901,
      spans: 45678
    }
  ]);

  const [traceAnalysis, setTraceAnalysis] = useState([
    {
      traceId: 'trace-45a7b2c8',
      operation: 'POST /api/v1/content/process',
      duration: 2345.7,
      spanCount: 23,
      errorSpans: 2,
      services: ['api-gateway', 'auth-service', 'content-processor', 'media-storage'],
      startTime: '11:53:45',
      status: 'error',
      rootCause: 'Timeout in media-storage service'
    },
    {
      traceId: 'trace-89c3d4e5',
      operation: 'GET /api/v1/user/profile',
      duration: 156.8,
      spanCount: 8,
      errorSpans: 0,
      services: ['api-gateway', 'auth-service', 'user-service', 'user-database'],
      startTime: '11:53:42',
      status: 'success',
      rootCause: null
    },
    {
      traceId: 'trace-12f6g7h8',
      operation: 'POST /api/v1/analytics/event',
      duration: 4567.2,
      spanCount: 45,
      errorSpans: 8,
      services: ['api-gateway', 'analytics-engine', 'event-stream', 'data-warehouse'],
      startTime: '11:53:38',
      status: 'error',
      rootCause: 'Database connection pool exhausted'
    },
    {
      traceId: 'trace-34i9j0k1',
      operation: 'GET /api/v1/content/feed',
      duration: 234.5,
      spanCount: 12,
      errorSpans: 1,
      services: ['api-gateway', 'content-service', 'recommendation-engine'],
      startTime: '11:53:40',
      status: 'warning',
      rootCause: 'Slow recommendation engine response'
    }
  ]);

  const [queryPerformance, setQueryPerformance] = useState([
    {
      queryName: 'Error Rate by Service',
      query: 'COUNT(*) WHERE error=true GROUP BY service_name',
      executionTime: 234.5,
      resultsCount: 156,
      lastRun: '11:54:15',
      complexity: 'medium',
      dataset: 'production-traces',
      frequency: 'real-time'
    },
    {
      queryName: 'P99 Latency Trend',
      query: 'HEATMAP(duration_ms) WHERE operation=api_call',
      executionTime: 567.8,
      resultsCount: 2345,
      lastRun: '11:54:10',
      complexity: 'high',
      dataset: 'production-traces',
      frequency: '1-minute'
    },
    {
      queryName: 'Database Connection Pool',
      query: 'AVG(db_connections) WHERE service=analytics-engine',
      executionTime: 123.4,
      resultsCount: 89,
      lastRun: '11:54:05',
      complexity: 'low',
      dataset: 'infrastructure-metrics',
      frequency: '30-seconds'
    },
    {
      queryName: 'User Journey Analysis',
      query: 'COUNT(*) WHERE user_id EXISTS GROUP BY session_id',
      executionTime: 1234.6,
      resultsCount: 4567,
      lastRun: '11:53:55',
      complexity: 'high',
      dataset: 'user-behavior',
      frequency: '5-minutes'
    }
  ]);

  const [alertsAndTriggers, setAlertsAndTriggers] = useState([
    {
      id: 'ALERT-HC-789012',
      severity: 'critical',
      title: 'High Error Rate in Analytics Engine',
      condition: 'error_rate > 5% for 5 minutes',
      currentValue: '8.9%',
      service: 'aleksandra-analytics-engine',
      environment: 'production',
      fired: '11:48:30',
      duration: '5m 37s',
      status: 'firing',
      query: 'COUNT(*) WHERE error=true AND service_name=aleksandra-analytics-engine'
    },
    {
      id: 'ALERT-HC-456789',
      severity: 'warning',
      title: 'P99 Latency Spike in Content Processor',
      condition: 'p99(duration_ms) > 2000ms for 3 minutes',
      currentValue: '2345.6ms',
      service: 'aleksandra-content-processor',
      environment: 'production',
      fired: '11:51:15',
      duration: '2m 52s',
      status: 'firing',
      query: 'HEATMAP(duration_ms) WHERE service_name=aleksandra-content-processor'
    },
    {
      id: 'ALERT-HC-123456',
      severity: 'info',
      title: 'Deployment Detected',
      condition: 'deployment_event detected',
      currentValue: 'v2.4.1 deployed',
      service: 'aleksandra-api-gateway',
      environment: 'production',
      fired: '11:45:00',
      duration: '9m 7s',
      status: 'resolved',
      query: 'COUNT(*) WHERE meta.deployment_version EXISTS'
    }
  ]);

  const [bubbleUpAnalysis, setBubbleUpAnalysis] = useState([
    {
      field: 'error_type',
      value: 'TimeoutError',
      count: 1234,
      percentage: 45.6,
      impact: 'high',
      services: ['content-processor', 'analytics-engine'],
      trend: '+23%'
    },
    {
      field: 'slow_queries',
      value: 'recommendation_engine',
      count: 567,
      percentage: 20.9,
      impact: 'medium',
      services: ['content-service'],
      trend: '+8%'
    },
    {
      field: 'memory_pressure',
      value: 'high_allocation',
      count: 345,
      percentage: 12.7,
      impact: 'medium',
      services: ['analytics-engine', 'content-processor'],
      trend: '+15%'
    },
    {
      field: 'circuit_breaker',
      value: 'database_timeout',
      count: 234,
      percentage: 8.6,
      impact: 'high',
      services: ['user-service', 'analytics-engine'],
      trend: '+45%'
    },
    {
      field: 'rate_limit',
      value: 'api_throttled',
      count: 123,
      percentage: 4.5,
      impact: 'low',
      services: ['api-gateway'],
      trend: '-2%'
    }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    { time: '11:54', latency: 234.5, throughput: 2567, errorRate: 1.2, p99: 1245.7, events: 25674, traces: 456 },
    { time: '11:53', latency: 231.2, throughput: 2456, errorRate: 1.1, p99: 1198.4, events: 24567, traces: 445 },
    { time: '11:52', latency: 238.9, throughput: 2678, errorRate: 1.4, p99: 1289.3, events: 26789, traces: 467 },
    { time: '11:51', latency: 228.7, throughput: 2345, errorRate: 1.0, p99: 1167.2, events: 23456, traces: 434 },
    { time: '11:50', latency: 235.3, throughput: 2789, errorRate: 1.3, p99: 1234.8, events: 27890, traces: 478 },
    { time: '11:49', latency: 233.1, throughput: 2456, errorRate: 1.1, p99: 1201.5, events: 24567, traces: 445 }
  ]);

  const [datasetUtilization, setDatasetUtilization] = useState([
    {
      dataset: 'production-traces',
      size: '8.9 GB',
      events: 15674893,
      retention: '30 days',
      ingestionRate: '2.3 MB/s',
      queryCount: 1234,
      team: 'Engineering',
      environment: 'production'
    },
    {
      dataset: 'staging-traces',
      size: '2.1 GB',
      events: 3456789,
      retention: '7 days',
      ingestionRate: '567 KB/s',
      queryCount: 345,
      team: 'Engineering',
      environment: 'staging'
    },
    {
      dataset: 'user-behavior',
      size: '1.8 GB',
      events: 2345678,
      retention: '90 days',
      ingestionRate: '234 KB/s',
      queryCount: 567,
      team: 'Product',
      environment: 'production'
    },
    {
      dataset: 'infrastructure-metrics',
      size: '3.4 GB',
      events: 5678901,
      retention: '14 days',
      ingestionRate: '890 KB/s',
      queryCount: 890,
      team: 'SRE',
      environment: 'production'
    },
    {
      dataset: 'security-events',
      size: '567 MB',
      events: 234567,
      retention: '365 days',
      ingestionRate: '45 KB/s',
      queryCount: 123,
      team: 'Security',
      environment: 'production'
    }
  ]);

  const [teamCollaboration, setTeamCollaboration] = useState([
    {
      team: 'Engineering',
      members: 12,
      datasets: 3,
      activeQueries: 15,
      boards: 8,
      alerts: 6,
      lastActivity: '11:54:20',
      topQuery: 'Error Rate Analysis'
    },
    {
      team: 'SRE',
      members: 4,
      datasets: 2,
      activeQueries: 8,
      boards: 5,
      alerts: 12,
      lastActivity: '11:54:15',
      topQuery: 'Infrastructure Health'
    },
    {
      team: 'Product',
      members: 6,
      datasets: 1,
      activeQueries: 5,
      boards: 3,
      alerts: 2,
      lastActivity: '11:53:45',
      topQuery: 'User Journey Funnel'
    },
    {
      team: 'Security',
      members: 3,
      datasets: 1,
      activeQueries: 3,
      boards: 2,
      alerts: 4,
      lastActivity: '11:53:30',
      topQuery: 'Threat Detection'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Honeycomb metrics
      setHoneycombMetrics(prev => ({
        ...prev,
        totalEvents: prev.totalEvents + Math.floor(Math.random() * 10000) + 5000,
        totalTraces: prev.totalTraces + Math.floor(Math.random() * 100) + 50,
        totalSpans: prev.totalSpans + Math.floor(Math.random() * 1000) + 500,
        activeQueries: Math.max(10, prev.activeQueries + Math.floor((Math.random() - 0.5) * 10)),
        avgLatency: Math.max(100, prev.avgLatency + (Math.random() - 0.5) * 50),
        errorRate: Math.max(0.1, prev.errorRate + (Math.random() - 0.5) * 0.5),
        throughput: Math.max(1000, prev.throughput + Math.floor((Math.random() - 0.5) * 500)),
        p99Latency: Math.max(500, prev.p99Latency + (Math.random() - 0.5) * 200),
        storageUsed: Math.max(10, prev.storageUsed + (Math.random() - 0.5) * 0.5)
      }));

      // Update performance metrics timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceMetrics(prev => {
        const newData = {
          time: currentTime,
          latency: Math.max(100, prev[0]?.latency + (Math.random() - 0.5) * 50) || 234.5,
          throughput: Math.max(1000, prev[0]?.throughput + Math.floor((Math.random() - 0.5) * 500)) || 2567,
          errorRate: Math.max(0.1, prev[0]?.errorRate + (Math.random() - 0.5) * 0.5) || 1.2,
          p99: Math.max(500, prev[0]?.p99 + (Math.random() - 0.5) * 200) || 1245.7,
          events: Math.max(10000, prev[0]?.events + Math.floor((Math.random() - 0.5) * 5000)) || 25674,
          traces: Math.max(100, prev[0]?.traces + Math.floor((Math.random() - 0.5) * 50)) || 456
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update service map
      setServiceMap(prev => prev.map(service => ({
        ...service,
        latency: Math.max(50, service.latency + (Math.random() - 0.5) * 100),
        throughput: Math.max(10, service.throughput + Math.floor((Math.random() - 0.5) * 50)),
        errorRate: Math.max(0, service.errorRate + (Math.random() - 0.5) * 1),
        traces: Math.max(1000, service.traces + Math.floor((Math.random() - 0.5) * 1000)),
        spans: Math.max(10000, service.spans + Math.floor((Math.random() - 0.5) * 10000)),
        health: service.errorRate > 5 ? 'critical' : 
               service.errorRate > 2 || service.latency > 2000 ? 'warning' : 'healthy'
      })));

      // Update trace analysis
      setTraceAnalysis(prev => prev.map(trace => ({
        ...trace,
        duration: Math.max(50, trace.duration + (Math.random() - 0.5) * 200),
        spanCount: Math.max(5, trace.spanCount + Math.floor((Math.random() - 0.5) * 10)),
        errorSpans: Math.max(0, trace.errorSpans + Math.floor((Math.random() - 0.8) * 3))
      })));

      // Update query performance
      setQueryPerformance(prev => prev.map(query => ({
        ...query,
        executionTime: Math.max(50, query.executionTime + (Math.random() - 0.5) * 100),
        resultsCount: Math.max(10, query.resultsCount + Math.floor((Math.random() - 0.5) * 100))
      })));

      // Update bubble up analysis
      setBubbleUpAnalysis(prev => prev.map(item => ({
        ...item,
        count: Math.max(50, item.count + Math.floor((Math.random() - 0.5) * 100)),
        percentage: Math.max(1, Math.min(50, item.percentage + (Math.random() - 0.5) * 2))
      })));

      // Update dataset utilization
      setDatasetUtilization(prev => prev.map(dataset => ({
        ...dataset,
        events: dataset.events + Math.floor(Math.random() * 10000) + 1000,
        queryCount: Math.max(10, dataset.queryCount + Math.floor((Math.random() - 0.5) * 20))
      })));

      // Update team collaboration
      setTeamCollaboration(prev => prev.map(team => ({
        ...team,
        activeQueries: Math.max(1, team.activeQueries + Math.floor((Math.random() - 0.5) * 5)),
        alerts: Math.max(0, team.alerts + Math.floor((Math.random() - 0.7) * 3))
      })));

      // Occasionally update alert status
      if (Math.random() < 0.3) {
        setAlertsAndTriggers(prev => prev.map(alert => {
          const duration = alert.duration.split('m')[0];
          const newDuration = parseInt(duration) + 1;
          return {
            ...alert,
            duration: `${newDuration}m ${Math.floor(Math.random() * 60)}s`,
            status: Math.random() < 0.15 ? 
                    (alert.severity === 'critical' ? 'resolved' : alert.status) : alert.status
          };
        }));
      }
    }, 41000);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (health) => {
    switch(health.toLowerCase()) {
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'success': case 'resolved': return 'text-green-400';
      case 'error': case 'firing': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getComplexityColor = (complexity) => {
    switch(complexity.toLowerCase()) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getImpactColor = (impact) => {
    switch(impact.toLowerCase()) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const getErrorRateColor = (rate) => {
    if (rate >= 5) return 'text-red-400';
    if (rate >= 2) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getLatencyColor = (latency) => {
    if (latency >= 2000) return 'text-red-400';
    if (latency >= 1000) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-gray-900 to-amber-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Honeycomb Observability Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🍯 Honeycomb Observability Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>EVENTS: <span className="text-orange-400 font-mono">{(honeycombMetrics.totalEvents / 1000000).toFixed(1)}M</span></div>
                <div>TRACES: <span className="text-amber-400">{honeycombMetrics.totalTraces.toLocaleString()}</span></div>
                <div>DATASETS: <span className="text-yellow-400">{honeycombMetrics.datasets}</span></div>
                <div>TEAMS: <span className="text-orange-300">{honeycombMetrics.teams}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-400">{honeycombMetrics.avgLatency.toFixed(1)}ms</div>
              <div className="text-sm text-gray-300">Avg Latency</div>
              <div className="text-xs text-orange-300">Storage: {honeycombMetrics.storageUsed.toFixed(1)} GB</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Honeycomb Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🐛</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{honeycombMetrics.errorRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Distributed system errors</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-amber-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">P99 Latency</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-amber-400 mb-1">{honeycombMetrics.p99Latency.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">99th percentile response</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Throughput</span>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{honeycombMetrics.throughput}</div>
            <div className="text-xs text-gray-400">Requests per second</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Active Queries</span>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{honeycombMetrics.activeQueries}</div>
            <div className="text-xs text-gray-400">Real-time analysis</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Performance Metrics Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Distributed Systems Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#fb923c" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#fb923c" />
                <YAxis yAxisId="right" orientation="right" stroke="#fb923c" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #fb923c' }}
                  labelStyle={{ color: '#fb923c' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="latency" fill="#fb923c" fillOpacity={0.3} stroke="#fb923c" name="Latency (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#fbbf24" strokeWidth={2} name="Throughput" />
                <Line yAxisId="left" type="monotone" dataKey="errorRate" stroke="#ef4444" strokeWidth={2} name="Error Rate %" />
                <Bar yAxisId="right" dataKey="traces" fill="#f59e0b" name="Traces (×10)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Service Map & Dependencies */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗺️ Service Map & Dependency Graph
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {serviceMap.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{service.service}</span>
                    <span className={`text-xs font-bold ${getHealthColor(service.health)}`}>{service.health}</span>
                  </div>
                  <div className="text-xs text-amber-300 mb-1">{service.type} • {service.environment}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className={getLatencyColor(service.latency)}>Lat: {service.latency.toFixed(1)}ms</div>
                    <div className="text-yellow-400">RPS: {service.throughput}</div>
                    <div className={getErrorRateColor(service.errorRate)}>Err: {service.errorRate.toFixed(1)}%</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-blue-400">{service.traces.toLocaleString()} traces</span>
                    <span className="text-purple-400">{service.dependencies} deps</span>
                  </div>
                  <div className="text-xs text-orange-300 mt-1">
                    ↑ {service.upstreamServices.slice(0, 2).join(', ')}{service.upstreamServices.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-xs text-cyan-300">
                    ↓ {service.downstreamServices.slice(0, 2).join(', ')}{service.downstreamServices.length > 2 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Traces Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔗 Recent Trace Analysis
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {traceAnalysis.map((trace, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-amber-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{trace.traceId}</span>
                    <span className={`text-xs font-bold ${getStatusColor(trace.status)}`}>{trace.status}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 truncate">{trace.operation}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className={getLatencyColor(trace.duration)}>{trace.duration.toFixed(1)}ms</div>
                    <div className="text-blue-400">{trace.spanCount} spans</div>
                    <div className={trace.errorSpans > 0 ? 'text-red-400' : 'text-green-400'}>{trace.errorSpans} errors</div>
                  </div>
                  <div className="text-xs text-orange-300 mt-1 truncate">
                    Services: {trace.services.slice(0, 2).join(', ')}{trace.services.length > 2 ? '...' : ''}
                  </div>
                  {trace.rootCause && (
                    <div className="text-xs text-red-300 mt-1 truncate">
                      Root cause: {trace.rootCause}
                    </div>
                  )}
                  <div className="text-xs text-gray-400 mt-1">{trace.startTime}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Query Performance */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔍 Query Performance & Analytics
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {queryPerformance.map((query, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1">{query.queryName}</div>
                  <div className="text-xs text-amber-300 mb-2 truncate font-mono">{query.query}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-orange-400">{query.executionTime.toFixed(1)}ms exec</div>
                    <div className="text-yellow-400">{query.resultsCount} results</div>
                    <div className={getComplexityColor(query.complexity)}>{query.complexity} complexity</div>
                    <div className="text-blue-400">{query.frequency}</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-purple-400">{query.dataset}</span>
                    <span className="text-gray-400">{query.lastRun}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Honeycomb Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {alertsAndTriggers.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.id}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 line-clamp-2">{alert.title}</div>
                  <div className="text-xs text-amber-300 mb-1">{alert.service} • {alert.environment}</div>
                  <div className="text-xs text-yellow-300 mb-1">{alert.condition}</div>
                  <div className="text-xs text-red-300 mb-2">Current: {alert.currentValue}</div>
                  <div className="flex justify-between text-xs">
                    <span className={getStatusColor(alert.status)}>{alert.status}</span>
                    <span className="text-gray-400">{alert.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bubble Up Analysis & Team Collaboration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bubble Up Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💡 Bubble Up Analysis - High Impact Patterns
            </h3>
            <div className="space-y-3">
              {bubbleUpAnalysis.map((item, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{item.field}</span>
                    <span className={`text-sm font-bold ${getImpactColor(item.impact)}`}>{item.impact} impact</span>
                  </div>
                  <div className="text-sm text-amber-400 mb-1">{item.value}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-orange-400">{item.count.toLocaleString()} occurrences</div>
                    <div className="text-yellow-400">{item.percentage.toFixed(1)}% of total</div>
                    <div className={getTrendColor(item.trend)}>{item.trend} trend</div>
                  </div>
                  <div className="text-xs text-blue-300 mt-1">
                    Affects: {item.services.join(', ')}
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getImpactColor(item.impact) === 'text-red-400' ? 'bg-red-400' : 
                                                      getImpactColor(item.impact) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-green-400'}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Collaboration */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              👥 Team Collaboration & Usage
            </h3>
            <div className="space-y-4">
              {teamCollaboration.map((team, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-white">{team.team}</span>
                    <span className="text-green-400 text-sm">{team.members} members</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-orange-400">{team.datasets} datasets</div>
                    <div className="text-amber-400">{team.activeQueries} queries</div>
                    <div className="text-yellow-400">{team.boards} boards</div>
                    <div className={team.alerts > 0 ? 'text-red-400' : 'text-green-400'}>{team.alerts} alerts</div>
                  </div>
                  <div className="text-xs text-blue-300 mt-2">
                    Top Query: {team.topQuery}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    Last Activity: {team.lastActivity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dataset Utilization */}
        <div className="bg-gray-800 rounded-xl p-6 border border-orange-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📊 Dataset Utilization & Storage Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {datasetUtilization.map((dataset, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="text-sm font-bold text-white mb-2">{dataset.dataset}</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Size:</span>
                    <span className="text-orange-400">{dataset.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Events:</span>
                    <span className="text-amber-400">{(dataset.events / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Retention:</span>
                    <span className="text-yellow-400">{dataset.retention}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Ingestion:</span>
                    <span className="text-blue-400">{dataset.ingestionRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Queries:</span>
                    <span className="text-purple-400">{dataset.queryCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Team:</span>
                    <span className="text-cyan-400">{dataset.team}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Env:</span>
                    <span className="text-green-400">{dataset.environment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            HONEYCOMB OBSERVABILITY | ALEKSANDRA AI DISTRIBUTED SYSTEMS | HIGH-CARDINALITY ANALYTICS PLATFORM
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Distributed Tracing | Service Maps | Query Analytics | Bubble Up Analysis | Team Collaboration | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}