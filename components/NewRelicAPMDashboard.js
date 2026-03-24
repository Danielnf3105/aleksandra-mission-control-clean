// New Relic APM Dashboard - March 2026
// Advanced Application Performance Monitoring dashboard inspired by New Relic for comprehensive application monitoring
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';

export default function NewRelicAPMDashboard() {
  const [apmMetrics, setApmMetrics] = useState({
    applicationHealth: 96.7,
    responseTime: 234.5,
    throughput: 1247,
    errorRate: 2.3,
    apdexScore: 0.94,
    cpuUtilization: 67.3,
    memoryUsage: 78.2,
    databaseTime: 45.6,
    externalServices: 89.3,
    gcPauseTime: 12.4,
    transactionsPerMinute: 15678,
    sqlQueries: 23456
  });

  const [applicationOverview, setApplicationOverview] = useState([
    { 
      app: 'aleksandra-ai-engine',
      health: 98.2,
      responseTime: 123.4,
      throughput: 456,
      errorRate: 0.8,
      apdex: 0.97,
      instances: 6,
      version: 'v2.1.0'
    },
    { 
      app: 'content-processor',
      health: 95.6,
      responseTime: 234.5,
      throughput: 234,
      errorRate: 1.2,
      apdex: 0.93,
      instances: 4,
      version: 'v1.8.3'
    },
    { 
      app: 'instagram-analyzer',
      health: 97.8,
      responseTime: 89.2,
      throughput: 189,
      errorRate: 0.5,
      apdex: 0.96,
      instances: 3,
      version: 'v1.5.2'
    },
    { 
      app: 'transcription-service',
      health: 92.4,
      responseTime: 567.8,
      throughput: 123,
      errorRate: 3.2,
      apdex: 0.88,
      instances: 8,
      version: 'v1.9.1'
    },
    { 
      app: 'api-gateway',
      health: 99.1,
      responseTime: 45.6,
      throughput: 789,
      errorRate: 0.3,
      apdex: 0.98,
      instances: 2,
      version: 'v3.2.1'
    }
  ]);

  const [transactionTraces, setTransactionTraces] = useState([
    {
      transaction: 'POST /api/v1/content/process',
      duration: 234.5,
      timestamp: '05:43:15',
      slowest: 'Database Query',
      slowestTime: 123.4,
      calls: 8,
      app: 'content-processor'
    },
    {
      transaction: 'GET /api/v1/analyze/instagram',
      duration: 89.2,
      timestamp: '05:43:12',
      slowest: 'External API Call',
      slowestTime: 45.6,
      calls: 4,
      app: 'instagram-analyzer'
    },
    {
      transaction: 'POST /api/v1/transcribe',
      duration: 567.8,
      timestamp: '05:43:09',
      slowest: 'AssemblyAI API',
      slowestTime: 234.5,
      calls: 3,
      app: 'transcription-service'
    },
    {
      transaction: 'POST /api/v1/ai/inference',
      duration: 123.4,
      timestamp: '05:43:06',
      slowest: 'Model Loading',
      slowestTime: 67.8,
      calls: 6,
      app: 'aleksandra-ai-engine'
    },
    {
      transaction: 'GET /api/v1/health',
      duration: 12.3,
      timestamp: '05:43:03',
      slowest: 'Health Check',
      slowestTime: 5.6,
      calls: 1,
      app: 'api-gateway'
    }
  ]);

  const [databaseMetrics, setDatabaseMetrics] = useState([
    {
      operation: 'SELECT content_metadata',
      calls: 12456,
      avgTime: 45.6,
      totalTime: 567890,
      database: 'PostgreSQL',
      table: 'content_metadata'
    },
    {
      operation: 'INSERT processed_content',
      calls: 8976,
      avgTime: 23.4,
      totalTime: 210123,
      database: 'PostgreSQL',
      table: 'processed_content'
    },
    {
      operation: 'UPDATE user_sessions',
      calls: 5432,
      avgTime: 34.5,
      totalTime: 187234,
      database: 'Redis',
      table: 'user_sessions'
    },
    {
      operation: 'SELECT instagram_posts',
      calls: 7890,
      avgTime: 67.8,
      totalTime: 535234,
      database: 'MongoDB',
      table: 'instagram_posts'
    }
  ]);

  const [externalServices, setExternalServices] = useState([
    {
      service: 'AssemblyAI API',
      responseTime: 234.5,
      calls: 567,
      errorRate: 2.1,
      availability: 98.7,
      throughput: 45
    },
    {
      service: 'Instagram Graph API',
      responseTime: 89.3,
      calls: 234,
      errorRate: 1.2,
      availability: 99.2,
      throughput: 23
    },
    {
      service: 'OpenAI API',
      responseTime: 156.7,
      calls: 189,
      errorRate: 0.8,
      availability: 99.5,
      throughput: 18
    },
    {
      service: 'AWS S3',
      responseTime: 45.6,
      calls: 890,
      errorRate: 0.2,
      availability: 99.9,
      throughput: 78
    }
  ]);

  const [errorAnalysis, setErrorAnalysis] = useState([
    {
      error: 'TimeoutError',
      count: 234,
      rate: 0.8,
      app: 'transcription-service',
      lastOccurrence: '05:43:10',
      impact: 'High'
    },
    {
      error: 'ConnectionRefusedError',
      count: 156,
      rate: 0.5,
      app: 'content-processor',
      lastOccurrence: '05:42:45',
      impact: 'Medium'
    },
    {
      error: 'RateLimitExceededError',
      count: 89,
      rate: 0.3,
      app: 'instagram-analyzer',
      lastOccurrence: '05:42:30',
      impact: 'Low'
    },
    {
      error: 'AuthenticationError',
      count: 45,
      rate: 0.2,
      app: 'api-gateway',
      lastOccurrence: '05:42:15',
      impact: 'High'
    }
  ]);

  const [performanceTimeline, setPerformanceTimeline] = useState([
    { time: '05:43', responseTime: 234.5, throughput: 1247, errorRate: 2.3, apdex: 0.94, cpu: 67.3, memory: 78.2 },
    { time: '05:42', responseTime: 223.1, throughput: 1189, errorRate: 2.1, apdex: 0.95, cpu: 65.7, memory: 76.8 },
    { time: '05:41', responseTime: 245.8, throughput: 1298, errorRate: 2.5, apdex: 0.92, cpu: 69.2, memory: 79.1 },
    { time: '05:40', responseTime: 212.3, throughput: 1156, errorRate: 1.8, apdex: 0.96, cpu: 63.4, memory: 75.3 },
    { time: '05:39', responseTime: 256.7, throughput: 1334, errorRate: 2.7, apdex: 0.91, cpu: 71.5, memory: 80.4 }
  ]);

  const [infrastructureMetrics, setInfrastructureMetrics] = useState([
    { host: 'app-server-01', cpu: 67.3, memory: 78.2, disk: 45.6, network: 234.5, load: 2.3 },
    { host: 'app-server-02', cpu: 72.1, memory: 81.4, disk: 42.3, network: 189.7, load: 2.8 },
    { host: 'app-server-03', cpu: 59.8, memory: 74.6, disk: 48.9, network: 267.3, load: 1.9 },
    { host: 'db-server-01', cpu: 45.2, memory: 67.8, disk: 78.4, network: 345.6, load: 1.5 },
    { host: 'cache-server-01', cpu: 23.4, memory: 45.7, disk: 12.3, network: 567.8, load: 0.8 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update APM metrics
      setApmMetrics(prev => ({
        ...prev,
        applicationHealth: Math.max(90, Math.min(100, prev.applicationHealth + (Math.random() - 0.5) * 1)),
        responseTime: Math.max(100, Math.min(500, prev.responseTime + (Math.random() - 0.5) * 30)),
        throughput: Math.max(800, Math.min(1500, prev.throughput + Math.floor((Math.random() - 0.5) * 100))),
        errorRate: Math.max(0.5, Math.min(5, prev.errorRate + (Math.random() - 0.5) * 0.3)),
        apdexScore: Math.max(0.85, Math.min(1.0, prev.apdexScore + (Math.random() - 0.5) * 0.02)),
        cpuUtilization: Math.max(40, Math.min(90, prev.cpuUtilization + (Math.random() - 0.5) * 5)),
        memoryUsage: Math.max(50, Math.min(95, prev.memoryUsage + (Math.random() - 0.5) * 3)),
        transactionsPerMinute: prev.transactionsPerMinute + Math.floor(Math.random() * 1000) + 500,
        sqlQueries: prev.sqlQueries + Math.floor(Math.random() * 500) + 200
      }));

      // Update performance timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceTimeline(prev => {
        const newData = {
          time: currentTime,
          responseTime: Math.max(100, Math.min(500, prev[prev.length - 1]?.responseTime + (Math.random() - 0.5) * 30)) || 234,
          throughput: Math.max(800, Math.min(1500, prev[prev.length - 1]?.throughput + Math.floor((Math.random() - 0.5) * 100))) || 1247,
          errorRate: Math.max(0.5, Math.min(5, prev[prev.length - 1]?.errorRate + (Math.random() - 0.5) * 0.3)) || 2.3,
          apdex: Math.max(0.85, Math.min(1.0, prev[prev.length - 1]?.apdex + (Math.random() - 0.5) * 0.02)) || 0.94,
          cpu: Math.max(40, Math.min(90, prev[prev.length - 1]?.cpu + (Math.random() - 0.5) * 5)) || 67,
          memory: Math.max(50, Math.min(95, prev[prev.length - 1]?.memory + (Math.random() - 0.5) * 3)) || 78
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update application metrics
      setApplicationOverview(prev => prev.map(app => ({
        ...app,
        health: Math.max(85, Math.min(100, app.health + (Math.random() - 0.5) * 1)),
        responseTime: Math.max(20, app.responseTime + (Math.random() - 0.5) * 20),
        throughput: Math.max(app.throughput * 0.8, Math.min(app.throughput * 1.2, app.throughput + (Math.random() - 0.5) * 20)),
        errorRate: Math.max(0.1, Math.min(5, app.errorRate + (Math.random() - 0.5) * 0.3)),
        apdex: Math.max(0.8, Math.min(1.0, app.apdex + (Math.random() - 0.5) * 0.02))
      })));

      // Update infrastructure metrics
      setInfrastructureMetrics(prev => prev.map(host => ({
        ...host,
        cpu: Math.max(20, Math.min(95, host.cpu + (Math.random() - 0.5) * 5)),
        memory: Math.max(30, Math.min(98, host.memory + (Math.random() - 0.5) * 3)),
        disk: Math.max(10, Math.min(90, host.disk + (Math.random() - 0.5) * 2)),
        network: Math.max(50, Math.min(1000, host.network + (Math.random() - 0.5) * 50)),
        load: Math.max(0.5, Math.min(5, host.load + (Math.random() - 0.5) * 0.3))
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-green-400';
    if (health >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getApdexColor = (apdex) => {
    if (apdex >= 0.95) return 'text-green-400';
    if (apdex >= 0.85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getResponseTimeColor = (time) => {
    if (time < 100) return 'text-green-400';
    if (time < 300) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getErrorRateColor = (rate) => {
    if (rate < 1) return 'text-green-400';
    if (rate < 3) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getImpactColor = (impact) => {
    switch(impact.toLowerCase()) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-gray-900 to-green-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* New Relic Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                📊 New Relic APM Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>HEALTH: <span className={`font-mono ${getHealthColor(apmMetrics.applicationHealth)}`}>{apmMetrics.applicationHealth.toFixed(1)}%</span></div>
                <div>RESPONSE: <span className="text-emerald-400">{apmMetrics.responseTime.toFixed(1)}ms</span></div>
                <div>THROUGHPUT: <span className="text-green-400">{apmMetrics.throughput} rpm</span></div>
                <div>APDEX: <span className={getApdexColor(apmMetrics.apdexScore)}>{apmMetrics.apdexScore.toFixed(2)}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-emerald-400">{apmMetrics.transactionsPerMinute.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Transactions/min</div>
              <div className="text-xs text-emerald-300">SQL: {apmMetrics.sqlQueries.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Performance Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-emerald-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Response Time</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-emerald-400 mb-1">{apmMetrics.responseTime.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">Average response</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Apdex Score</span>
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{apmMetrics.apdexScore.toFixed(2)}</div>
            <div className="text-xs text-gray-400">User satisfaction</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Throughput</span>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{apmMetrics.throughput}</div>
            <div className="text-xs text-gray-400">requests/min</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{apmMetrics.errorRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Error percentage</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Application Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#10b981" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#10b981" />
                <YAxis yAxisId="right" orientation="right" stroke="#10b981" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #10b981' }}
                  labelStyle={{ color: '#10b981' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="throughput" fill="#10b981" fillOpacity={0.3} stroke="#10b981" name="Throughput" />
                <Line yAxisId="right" type="monotone" dataKey="responseTime" stroke="#f59e0b" strokeWidth={2} name="Response Time (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="errorRate" stroke="#ef4444" strokeWidth={2} name="Error Rate %" />
                <Line yAxisId="right" type="monotone" dataKey="apdex" stroke="#8b5cf6" strokeWidth={3} name="Apdex Score" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Application Overview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Application Health Overview
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {applicationOverview.map((app, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{app.app}</span>
                    <span className={`text-sm ${getHealthColor(app.health)}`}>{app.health.toFixed(1)}% Health</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                    <div className={getResponseTimeColor(app.responseTime)}>{app.responseTime.toFixed(1)}ms</div>
                    <div className="text-blue-400">{app.throughput} rpm</div>
                    <div className={getApdexColor(app.apdex)}>{app.apdex.toFixed(2)} apdx</div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{app.instances} instances</span>
                    <span className={getErrorRateColor(app.errorRate)}>{app.errorRate.toFixed(1)}% errors</span>
                    <span>v{app.version}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Transaction Traces */}
          <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔍 Slowest Transaction Traces
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {transactionTraces.map((trace, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1 truncate">{trace.transaction}</div>
                  <div className="text-xs text-emerald-300 mb-1">{trace.app}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={getResponseTimeColor(trace.duration)}>Total: {trace.duration}ms</div>
                    <div className="text-yellow-400">Calls: {trace.calls}</div>
                    <div className="text-red-400 col-span-2">Slowest: {trace.slowest} ({trace.slowestTime}ms)</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{trace.timestamp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Database Operations */}
          <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗄️ Database Operations
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {databaseMetrics.map((db, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1">{db.operation}</div>
                  <div className="text-xs text-emerald-300 mb-2">{db.database} - {db.table}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-blue-400">{db.calls.toLocaleString()} calls</div>
                    <div className="text-yellow-400">{db.avgTime.toFixed(1)}ms avg</div>
                    <div className="text-purple-400 col-span-2">{(db.totalTime / 1000).toFixed(1)}s total</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* External Services */}
          <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌐 External Services
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {externalServices.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{service.service}</span>
                    <span className={`text-xs ${getHealthColor(service.availability)}`}>{service.availability.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={getResponseTimeColor(service.responseTime)}>{service.responseTime.toFixed(1)}ms</div>
                    <div className="text-blue-400">{service.calls} calls</div>
                    <div className={getErrorRateColor(service.errorRate)}>{service.errorRate.toFixed(1)}% errors</div>
                    <div className="text-purple-400">{service.throughput} rpm</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Error Analysis */}
        <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🚨 Error Analysis & Exception Tracking
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {errorAnalysis.map((error, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg border-l-4 border-red-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{error.error}</span>
                  <span className={`text-xs font-bold ${getImpactColor(error.impact)}`}>{error.impact}</span>
                </div>
                <div className="text-xs text-emerald-300 mb-1">{error.app}</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="text-red-400">{error.count} occurrences</div>
                  <div className="text-yellow-400">{error.rate.toFixed(1)}% rate</div>
                  <div className="text-gray-400 col-span-2">Last: {error.lastOccurrence}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Metrics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-emerald-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🖥️ Infrastructure & Host Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {infrastructureMetrics.map((host, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="text-center mb-3">
                  <div className="font-bold text-white">{host.host}</div>
                  <div className="text-xs text-gray-400">Load: {host.load.toFixed(1)}</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">CPU:</span>
                    <span className="text-emerald-400">{host.cpu.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Memory:</span>
                    <span className="text-blue-400">{host.memory.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Disk:</span>
                    <span className="text-yellow-400">{host.disk.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Network:</span>
                    <span className="text-purple-400">{host.network.toFixed(0)}MB/s</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            NEW RELIC APM | ALEKSANDRA AI MONITORING | APPLICATION PERFORMANCE MONITORING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Transaction Tracing | Database Monitoring | Error Tracking | Infrastructure Metrics | Real-time APM | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}