// Jaeger Distributed Tracing Dashboard - March 2026
// Advanced distributed tracing dashboard inspired by Jaeger UI for microservices monitoring
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, Sankey, Treemap } from 'recharts';

export default function JaegerDistributedTracingDashboard() {
  const [tracingMetrics, setTracingMetrics] = useState({
    totalTraces: 234567,
    totalSpans: 1567890,
    servicesCount: 12,
    operationsCount: 89,
    avgTraceDuration: 245.7,
    errorRate: 2.3,
    throughputRPS: 1247,
    p99Latency: 567.8,
    activeCollectors: 3,
    storageRetention: '7d',
    samplingRate: 0.1,
    tracesPerSecond: 123
  });

  const [recentTraces, setRecentTraces] = useState([
    {
      traceID: 'a1b2c3d4e5f67890',
      operationName: 'POST /api/v1/content/process',
      service: 'api-gateway',
      duration: '245.7ms',
      spans: 8,
      startTime: '05:39:15.123',
      status: 'success',
      tags: { 'http.method': 'POST', 'http.url': '/api/v1/content/process', 'user.id': '12345' }
    },
    {
      traceID: 'f1e2d3c4b5a67890',
      operationName: 'transcribe_audio',
      service: 'transcription-service',
      duration: '1.2s',
      spans: 12,
      startTime: '05:39:12.456',
      status: 'error',
      tags: { 'audio.format': 'mp3', 'audio.duration': '30s', 'error': 'timeout' }
    },
    {
      traceID: 'b3c4d5e6f7a89012',
      operationName: 'analyze_content',
      service: 'aleksandra-ai-engine',
      duration: '567.8ms',
      spans: 6,
      startTime: '05:39:09.789',
      status: 'success',
      tags: { 'model.version': 'v2.1.0', 'content.type': 'video', 'accuracy': '97.8%' }
    },
    {
      traceID: 'c4d5e6f7a8b90123',
      operationName: 'process_instagram_content',
      service: 'instagram-analyzer',
      duration: '89.2ms',
      spans: 4,
      startTime: '05:39:06.012',
      status: 'success',
      tags: { 'instagram.post_id': 'abc123', 'content.category': 'reel', 'engagement': 'high' }
    },
    {
      traceID: 'd5e6f7a8b9c01234',
      operationName: 'store_results',
      service: 'content-processor',
      duration: '156.3ms',
      spans: 5,
      startTime: '05:39:03.345',
      status: 'success',
      tags: { 'database': 'postgres', 'table': 'processed_content', 'rows_affected': '1' }
    }
  ]);

  const [serviceMap, setServiceMap] = useState([
    { 
      service: 'api-gateway',
      operations: 15,
      avgLatency: 45.6,
      errorRate: 0.5,
      requestRate: 234,
      dependencies: ['content-processor', 'instagram-analyzer', 'aleksandra-ai-engine']
    },
    { 
      service: 'content-processor',
      operations: 8,
      avgLatency: 123.4,
      errorRate: 1.2,
      requestRate: 156,
      dependencies: ['transcription-service', 'database']
    },
    { 
      service: 'aleksandra-ai-engine',
      operations: 12,
      avgLatency: 234.5,
      errorRate: 0.8,
      requestRate: 89,
      dependencies: ['model-server', 'cache-redis']
    },
    { 
      service: 'instagram-analyzer',
      operations: 6,
      avgLatency: 67.8,
      errorRate: 2.1,
      requestRate: 78,
      dependencies: ['instagram-api', 'content-processor']
    },
    { 
      service: 'transcription-service',
      operations: 4,
      avgLatency: 456.7,
      errorRate: 3.4,
      requestRate: 45,
      dependencies: ['assemblyai-api', 'file-storage']
    }
  ]);

  const [spanAnalysis, setSpanAnalysis] = useState([
    { operation: 'http_request', count: 45678, avgDuration: 123.4, p95Duration: 234.5, errorRate: 1.2 },
    { operation: 'database_query', count: 23456, avgDuration: 67.8, p95Duration: 156.7, errorRate: 0.5 },
    { operation: 'api_call', count: 34567, avgDuration: 189.3, p95Duration: 345.6, errorRate: 2.1 },
    { operation: 'file_processing', count: 12345, avgDuration: 567.8, p95Duration: 890.1, errorRate: 3.4 },
    { operation: 'cache_operation', count: 56789, avgDuration: 12.3, p95Duration: 45.6, errorRate: 0.1 }
  ]);

  const [traceTimeline, setTraceTimeline] = useState([
    { time: '05:39', traces: 123, errors: 5, avgDuration: 245.7, p99: 567.8 },
    { time: '05:38', traces: 134, errors: 3, avgDuration: 234.5, p99: 456.7 },
    { time: '05:37', traces: 145, errors: 7, avgDuration: 256.8, p99: 678.9 },
    { time: '05:36', traces: 118, errors: 4, avgDuration: 223.4, p99: 445.6 },
    { time: '05:35', traces: 156, errors: 6, avgDuration: 267.9, p99: 589.0 }
  ]);

  const [operationMetrics, setOperationMetrics] = useState([
    { operation: 'POST /api/v1/content/process', service: 'api-gateway', calls: 1234, avgLatency: 245.7, errors: 15 },
    { operation: 'transcribe_audio', service: 'transcription-service', calls: 567, avgLatency: 1234.5, errors: 23 },
    { operation: 'analyze_content', service: 'aleksandra-ai-engine', calls: 890, avgLatency: 567.8, errors: 8 },
    { operation: 'process_instagram_content', service: 'instagram-analyzer', calls: 456, avgLatency: 89.2, errors: 12 },
    { operation: 'store_results', service: 'content-processor', calls: 789, avgLatency: 156.3, errors: 5 }
  ]);

  const [collectorStats, setCollectorStats] = useState([
    { collector: 'jaeger-collector-1', spans: 156789, bytesReceived: '2.3GB', uptime: '15d 8h', status: 'healthy' },
    { collector: 'jaeger-collector-2', spans: 134567, bytesReceived: '2.1GB', uptime: '15d 8h', status: 'healthy' },
    { collector: 'jaeger-collector-3', spans: 145678, bytesReceived: '2.2GB', uptime: '12d 4h', status: 'healthy' }
  ]);

  const [errorAnalysis, setErrorAnalysis] = useState([
    { errorType: 'timeout', count: 234, service: 'transcription-service', percentage: 45.6 },
    { errorType: 'connection_refused', count: 156, service: 'assemblyai-api', percentage: 30.4 },
    { errorType: 'rate_limit_exceeded', count: 89, service: 'instagram-api', percentage: 17.3 },
    { errorType: 'authentication_failed', count: 34, service: 'api-gateway', percentage: 6.6 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update tracing metrics
      setTracingMetrics(prev => ({
        ...prev,
        totalTraces: prev.totalTraces + Math.floor(Math.random() * 50) + 20,
        totalSpans: prev.totalSpans + Math.floor(Math.random() * 200) + 100,
        avgTraceDuration: Math.max(100, Math.min(500, prev.avgTraceDuration + (Math.random() - 0.5) * 50)),
        errorRate: Math.max(0.5, Math.min(5, prev.errorRate + (Math.random() - 0.5) * 0.5)),
        throughputRPS: Math.max(800, Math.min(1500, prev.throughputRPS + Math.floor((Math.random() - 0.5) * 100))),
        p99Latency: Math.max(300, Math.min(1000, prev.p99Latency + (Math.random() - 0.5) * 100)),
        tracesPerSecond: Math.max(50, Math.min(200, prev.tracesPerSecond + Math.floor((Math.random() - 0.5) * 20)))
      }));

      // Update trace timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setTraceTimeline(prev => {
        const newData = {
          time: currentTime,
          traces: Math.floor(Math.random() * 50) + 100,
          errors: Math.floor(Math.random() * 10) + 2,
          avgDuration: Math.random() * 100 + 200,
          p99: Math.random() * 200 + 400
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update service metrics
      setServiceMap(prev => prev.map(service => ({
        ...service,
        avgLatency: Math.max(20, service.avgLatency + (Math.random() - 0.5) * 20),
        errorRate: Math.max(0.1, Math.min(5, service.errorRate + (Math.random() - 0.5) * 0.5)),
        requestRate: Math.max(service.requestRate * 0.8, Math.min(service.requestRate * 1.2, service.requestRate + (Math.random() - 0.5) * 20))
      })));

      // Update recent traces with new trace
      setRecentTraces(prev => {
        const newTrace = {
          traceID: Math.random().toString(16).substring(2, 18),
          operationName: ['POST /api/v1/content/process', 'transcribe_audio', 'analyze_content', 'process_instagram_content'][Math.floor(Math.random() * 4)],
          service: ['api-gateway', 'transcription-service', 'aleksandra-ai-engine', 'instagram-analyzer'][Math.floor(Math.random() * 4)],
          duration: (Math.random() * 1000 + 50).toFixed(1) + 'ms',
          spans: Math.floor(Math.random() * 10) + 3,
          startTime: now.toLocaleTimeString('en-US', { hour12: false }) + '.' + Math.floor(Math.random() * 1000).toString().padStart(3, '0'),
          status: Math.random() > 0.9 ? 'error' : 'success',
          tags: { 'trace.id': Math.random().toString(16).substring(2, 10) }
        };
        
        return [newTrace, ...prev.slice(0, 19)]; // Keep last 20 traces, newest first
      });
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'success': case 'healthy': return 'text-green-400';
      case 'error': case 'failed': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'pending': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getDurationColor = (duration) => {
    const ms = parseFloat(duration);
    if (ms < 100) return 'text-green-400';
    if (ms < 500) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getErrorRateColor = (rate) => {
    if (rate < 1) return 'text-green-400';
    if (rate < 3) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-teal-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Jaeger Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🔗 Jaeger Distributed Tracing Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>TRACES: <span className="text-teal-400 font-mono">{(tracingMetrics.totalTraces / 1000).toFixed(1)}K</span></div>
                <div>SPANS: <span className="text-blue-400">{(tracingMetrics.totalSpans / 1000).toFixed(1)}K</span></div>
                <div>SERVICES: <span className="text-cyan-400">{tracingMetrics.servicesCount}</span></div>
                <div>OPS: <span className="text-purple-400">{tracingMetrics.operationsCount}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-teal-400">{tracingMetrics.tracesPerSecond}</div>
              <div className="text-sm text-gray-300">Traces/sec</div>
              <div className="text-xs text-teal-300">Sampling: {(tracingMetrics.samplingRate * 100)}%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Performance Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-teal-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Avg Duration</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-teal-400 mb-1">{tracingMetrics.avgTraceDuration.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">Average trace time</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">P99 Latency</span>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{tracingMetrics.p99Latency.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">99th percentile</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Throughput</span>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{tracingMetrics.throughputRPS}</div>
            <div className="text-xs text-gray-400">requests/sec</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{tracingMetrics.errorRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Failed traces</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Trace Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-teal-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Trace Timeline & Performance
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={traceTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#14b8a6" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#14b8a6" />
                <YAxis yAxisId="right" orientation="right" stroke="#14b8a6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #14b8a6' }}
                  labelStyle={{ color: '#14b8a6' }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="traces" fill="#14b8a6" fillOpacity={0.7} name="Traces" />
                <Line yAxisId="right" type="monotone" dataKey="avgDuration" stroke="#f59e0b" strokeWidth={2} name="Avg Duration (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="p99" stroke="#ef4444" strokeWidth={2} name="P99 Latency (ms)" />
                <Line yAxisId="left" type="monotone" dataKey="errors" stroke="#dc2626" strokeWidth={3} name="Errors" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Service Map */}
          <div className="bg-gray-800 rounded-xl p-6 border border-teal-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗺️ Service Dependency Map
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {serviceMap.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{service.service}</span>
                    <span className={`text-sm ${getErrorRateColor(service.errorRate)}`}>{service.errorRate.toFixed(1)}% errors</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                    <div className="text-teal-400">{service.avgLatency.toFixed(1)}ms avg</div>
                    <div className="text-blue-400">{service.requestRate} req/s</div>
                    <div className="text-purple-400">{service.operations} ops</div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Dependencies: {service.dependencies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Traces */}
          <div className="bg-gray-800 rounded-xl p-6 border border-teal-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔍 Recent Traces
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentTraces.map((trace, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{trace.traceID.substring(0, 8)}...</span>
                    <span className={`text-xs font-bold ${getStatusColor(trace.status)}`}>{trace.status}</span>
                  </div>
                  <div className="text-sm text-white mb-1 truncate">{trace.operationName}</div>
                  <div className="text-xs text-teal-300 mb-1">{trace.service}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs text-gray-300">
                    <div className={getDurationColor(trace.duration)}>{trace.duration}</div>
                    <div>{trace.spans} spans</div>
                    <div>{trace.startTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Operation Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-teal-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⚙️ Operation Metrics
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {operationMetrics.map((op, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1 truncate">{op.operation}</div>
                  <div className="text-xs text-teal-300 mb-2">{op.service}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-blue-400">{op.calls} calls</div>
                    <div className="text-yellow-400">{op.avgLatency.toFixed(1)}ms</div>
                    <div className="text-red-400">{op.errors} errors</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Error Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-teal-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Error Analysis
            </h3>
            <div className="space-y-3">
              {errorAnalysis.map((error, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{error.errorType}</span>
                    <span className="text-red-400 text-sm font-bold">{error.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">{error.service}</div>
                  <div className="text-xs text-gray-400">{error.count} occurrences</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Span Analysis */}
        <div className="bg-gray-800 rounded-xl p-6 border border-teal-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🔬 Span Analysis & Operation Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {spanAnalysis.map((span, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="text-center mb-3">
                  <div className="font-bold text-white">{span.operation}</div>
                  <div className="text-xs text-gray-400">{span.count.toLocaleString()} operations</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Avg:</span>
                    <span className="text-teal-400">{span.avgDuration.toFixed(1)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">P95:</span>
                    <span className="text-blue-400">{span.p95Duration.toFixed(1)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Error:</span>
                    <span className={getErrorRateColor(span.errorRate)}>{span.errorRate.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collector Statistics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-teal-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📡 Jaeger Collector Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collectorStats.map((collector, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white">{collector.collector}</span>
                  <span className={`text-sm ${getStatusColor(collector.status)}`}>{collector.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-teal-400">Spans: {collector.spans.toLocaleString()}</div>
                  <div className="text-blue-400">Data: {collector.bytesReceived}</div>
                  <div className="text-purple-400 col-span-2">Uptime: {collector.uptime}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            JAEGER DISTRIBUTED TRACING | ALEKSANDRA AI MONITORING | MICROSERVICES OBSERVABILITY
          </div>
          <div className="text-sm text-gray-500 mt-2">
            OpenTracing | Distributed Tracing | Span Analysis | Service Dependencies | Performance Monitoring | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}