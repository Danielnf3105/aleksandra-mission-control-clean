// ElasticSearch Log Analytics Dashboard - March 2026
// Advanced log analytics and search dashboard inspired by Elasticsearch/Kibana for comprehensive log monitoring
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, Treemap } from 'recharts';

export default function ElasticSearchLogAnalyticsDashboard() {
  const [elasticMetrics, setElasticMetrics] = useState({
    totalDocuments: 45678901,
    indicesCount: 234,
    shardsCount: 1456,
    nodesCount: 12,
    clusterHealth: 'GREEN',
    diskUsage: 2.4,
    memoryUsage: 78.3,
    queryRate: 1247,
    indexingRate: 567,
    searchLatency: 234,
    logIngestionRate: 15678,
    errorLogRate: 234
  });

  const [logLevels, setLogLevels] = useState([
    { level: 'ERROR', count: 1234, percentage: 7.8, color: '#ef4444', trend: '+12%' },
    { level: 'WARN', count: 2567, percentage: 16.2, color: '#f59e0b', trend: '-3%' },
    { level: 'INFO', count: 9876, percentage: 62.4, color: '#3b82f6', trend: '+1%' },
    { level: 'DEBUG', count: 2143, percentage: 13.6, color: '#8b5cf6', trend: '-8%' }
  ]);

  const [logSources, setLogSources] = useState([
    { source: 'aleksandra-ai-engine', logs: 12456, errors: 45, warnings: 156, info: 11234, debug: 1021 },
    { source: 'content-processor', logs: 8976, errors: 67, warnings: 234, info: 8234, debug: 441 },
    { source: 'instagram-analyzer', logs: 5432, errors: 12, warnings: 89, info: 4987, debug: 344 },
    { source: 'transcription-service', logs: 15789, errors: 89, warnings: 345, info: 14567, debug: 788 },
    { source: 'api-gateway', logs: 23456, errors: 23, warnings: 123, info: 22345, debug: 965 },
    { source: 'mission-dashboard', logs: 3456, errors: 5, warnings: 45, info: 3234, debug: 172 }
  ]);

  const [searchQueries, setSearchQueries] = useState([
    { query: 'level:ERROR AND service:content-processor', results: 67, executionTime: '23ms', timestamp: '5:34:15' },
    { query: 'message:"timeout" AND timestamp:[now-1h TO now]', results: 145, executionTime: '45ms', timestamp: '5:33:42' },
    { query: 'status:500 OR status:503', results: 89, executionTime: '12ms', timestamp: '5:33:18' },
    { query: 'service:aleksandra-ai-engine AND level:WARN', results: 234, executionTime: '67ms', timestamp: '5:32:55' },
    { query: '_exists_:error_code', results: 156, executionTime: '34ms', timestamp: '5:32:23' }
  ]);

  const [recentLogs, setRecentLogs] = useState([
    { timestamp: '2026-03-24T05:34:15.123Z', level: 'ERROR', service: 'content-processor', message: 'Failed to process video: timeout after 30s', source: 'content-processor-2' },
    { timestamp: '2026-03-24T05:34:12.456Z', level: 'WARN', service: 'instagram-analyzer', message: 'API rate limit approaching: 85% of quota used', source: 'instagram-analyzer-1' },
    { timestamp: '2026-03-24T05:34:09.789Z', level: 'INFO', service: 'aleksandra-ai-engine', message: 'Model inference completed successfully: accuracy=97.8%', source: 'ai-engine-3' },
    { timestamp: '2026-03-24T05:34:06.012Z', level: 'ERROR', service: 'transcription-service', message: 'AssemblyAI API returned 503: Service temporarily unavailable', source: 'transcription-service-1' },
    { timestamp: '2026-03-24T05:34:03.345Z', level: 'DEBUG', service: 'api-gateway', message: 'Request routed to content-processor: /api/v1/process', source: 'api-gateway-1' }
  ]);

  const [logPatterns, setLogPatterns] = useState([
    { pattern: 'timeout', occurrences: 567, trend: '+23%', severity: 'high' },
    { pattern: 'rate limit', occurrences: 234, trend: '+45%', severity: 'medium' },
    { pattern: 'connection refused', occurrences: 123, trend: '-12%', severity: 'high' },
    { pattern: 'slow query', occurrences: 89, trend: '+8%', severity: 'medium' },
    { pattern: 'memory allocation', occurrences: 45, trend: '-3%', severity: 'low' }
  ]);

  const [indexStats, setIndexStats] = useState([
    { index: 'aleksandra-logs-2026.03.24', docs: 12456789, size: '2.4GB', shards: 5, replicas: 1, health: 'green' },
    { index: 'aleksandra-logs-2026.03.23', docs: 11234567, size: '2.1GB', shards: 5, replicas: 1, health: 'green' },
    { index: 'aleksandra-logs-2026.03.22', docs: 10987654, size: '2.0GB', shards: 5, replicas: 1, health: 'green' },
    { index: 'aleksandra-errors-2026.03.24', docs: 234567, size: '456MB', shards: 2, replicas: 1, health: 'yellow' },
    { index: 'aleksandra-metrics-2026.03.24', docs: 567890, size: '890MB', shards: 3, replicas: 1, health: 'green' }
  ]);

  const [aggregations, setAggregations] = useState([
    { field: 'service.keyword', terms: [
      { key: 'api-gateway', doc_count: 23456 },
      { key: 'transcription-service', doc_count: 15789 },
      { key: 'aleksandra-ai-engine', doc_count: 12456 },
      { key: 'content-processor', doc_count: 8976 },
      { key: 'instagram-analyzer', doc_count: 5432 }
    ]},
    { field: 'status_code', terms: [
      { key: '200', doc_count: 45678 },
      { key: '404', doc_count: 1234 },
      { key: '500', doc_count: 567 },
      { key: '503', doc_count: 234 },
      { key: '429', doc_count: 123 }
    ]}
  ]);

  const [timeSeriesLogs, setTimeSeriesLogs] = useState([
    { time: '05:34', total: 15678, errors: 234, warnings: 567, info: 12456, debug: 2421 },
    { time: '05:33', total: 14567, errors: 198, warnings: 523, info: 11234, debug: 2612 },
    { time: '05:32', total: 16234, errors: 267, warnings: 601, info: 13456, debug: 1910 },
    { time: '05:31', total: 13456, errors: 189, warnings: 456, info: 10987, debug: 1824 },
    { time: '05:30', total: 15123, errors: 223, warnings: 534, info: 12234, debug: 2132 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update elastic metrics
      setElasticMetrics(prev => ({
        ...prev,
        queryRate: Math.max(800, Math.min(1500, prev.queryRate + Math.floor((Math.random() - 0.5) * 100))),
        indexingRate: Math.max(300, Math.min(800, prev.indexingRate + Math.floor((Math.random() - 0.5) * 50))),
        searchLatency: Math.max(100, Math.min(500, prev.searchLatency + (Math.random() - 0.5) * 50)),
        logIngestionRate: Math.max(10000, Math.min(20000, prev.logIngestionRate + Math.floor((Math.random() - 0.5) * 1000))),
        errorLogRate: Math.max(100, Math.min(500, prev.errorLogRate + Math.floor((Math.random() - 0.5) * 50))),
        memoryUsage: Math.max(60, Math.min(95, prev.memoryUsage + (Math.random() - 0.5) * 3))
      }));

      // Update time series logs
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setTimeSeriesLogs(prev => {
        const newData = {
          time: currentTime,
          total: Math.floor(Math.random() * 5000) + 12000,
          errors: Math.floor(Math.random() * 100) + 150,
          warnings: Math.floor(Math.random() * 200) + 400,
          info: Math.floor(Math.random() * 3000) + 10000,
          debug: Math.floor(Math.random() * 1000) + 1500
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update recent logs
      setRecentLogs(prev => {
        const newLog = {
          timestamp: new Date().toISOString(),
          level: ['ERROR', 'WARN', 'INFO', 'DEBUG'][Math.floor(Math.random() * 4)],
          service: ['content-processor', 'instagram-analyzer', 'aleksandra-ai-engine', 'transcription-service'][Math.floor(Math.random() * 4)],
          message: ['Processing completed successfully', 'API rate limit warning', 'Database connection timeout', 'Model inference error'][Math.floor(Math.random() * 4)],
          source: `service-${Math.floor(Math.random() * 3) + 1}`
        };
        
        return [newLog, ...prev.slice(0, 19)]; // Keep last 20 logs, newest first
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getLevelColor = (level) => {
    switch(level.toUpperCase()) {
      case 'ERROR': return 'text-red-400';
      case 'WARN': case 'WARNING': return 'text-yellow-400';
      case 'INFO': return 'text-blue-400';
      case 'DEBUG': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getHealthColor = (health) => {
    switch(health.toLowerCase()) {
      case 'green': return 'text-green-400';
      case 'yellow': return 'text-yellow-400';
      case 'red': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPatternSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'high': return 'border-red-500 bg-red-900/20 text-red-300';
      case 'medium': return 'border-yellow-500 bg-yellow-900/20 text-yellow-300';
      case 'low': return 'border-green-500 bg-green-900/20 text-green-300';
      default: return 'border-gray-500 bg-gray-900/20 text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Elasticsearch Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🔍 ElasticSearch Log Analytics Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>DOCUMENTS: <span className="text-indigo-400 font-mono">{(elasticMetrics.totalDocuments / 1000000).toFixed(1)}M</span></div>
                <div>INDICES: <span className="text-purple-400">{elasticMetrics.indicesCount}</span></div>
                <div>NODES: <span className="text-blue-400">{elasticMetrics.nodesCount}</span></div>
                <div>HEALTH: <span className={getHealthColor(elasticMetrics.clusterHealth)}>{elasticMetrics.clusterHealth}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-indigo-400">{elasticMetrics.logIngestionRate.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Logs/sec</div>
              <div className="text-xs text-indigo-300">Ingestion Rate</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Performance Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-indigo-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Query Rate</span>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-2xl font-bold text-indigo-400 mb-1">{elasticMetrics.queryRate}</div>
            <div className="text-xs text-gray-400">queries/sec</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Search Latency</span>
              <span className="text-2xl">🕐</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{elasticMetrics.searchLatency}ms</div>
            <div className="text-xs text-gray-400">avg response time</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Indexing Rate</span>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{elasticMetrics.indexingRate}</div>
            <div className="text-xs text-gray-400">docs/sec</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{elasticMetrics.errorLogRate}</div>
            <div className="text-xs text-gray-400">errors/sec</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Log Levels Time Series */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Log Levels Over Time
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={timeSeriesLogs.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#6366f1" tick={{ fontSize: 10 }} />
                <YAxis stroke="#6366f1" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #6366f1' }}
                  labelStyle={{ color: '#6366f1' }}
                />
                <Legend />
                <Area type="monotone" dataKey="errors" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.8} name="Errors" />
                <Area type="monotone" dataKey="warnings" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} name="Warnings" />
                <Area type="monotone" dataKey="info" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} name="Info" />
                <Area type="monotone" dataKey="debug" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} name="Debug" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Log Sources Distribution */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏗️ Log Sources & Distribution
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {logSources.map((source, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-white">{source.source}</span>
                    <span className="text-indigo-400">{source.logs.toLocaleString()}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-red-400">E: {source.errors}</div>
                    <div className="text-yellow-400">W: {source.warnings}</div>
                    <div className="text-blue-400">I: {source.info}</div>
                    <div className="text-purple-400">D: {source.debug}</div>
                  </div>
                  <div className="mt-1 flex gap-1">
                    <div className="bg-red-400 h-1 rounded" style={{ width: `${(source.errors / source.logs) * 100}%` }}></div>
                    <div className="bg-yellow-400 h-1 rounded" style={{ width: `${(source.warnings / source.logs) * 100}%` }}></div>
                    <div className="bg-blue-400 h-1 rounded" style={{ width: `${(source.info / source.logs) * 100}%` }}></div>
                    <div className="bg-purple-400 h-1 rounded" style={{ width: `${(source.debug / source.logs) * 100}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Search Queries */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔍 Recent Search Queries
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {searchQueries.map((query, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-mono text-indigo-300 mb-1 truncate">{query.query}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">{query.results} results</span>
                    <span className="text-gray-400">{query.executionTime}</span>
                  </div>
                  <div className="text-xs text-gray-500">{query.timestamp}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Log Patterns */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🧩 Log Patterns
            </h3>
            <div className="space-y-3">
              {logPatterns.map((pattern, index) => (
                <div key={index} className={`p-3 rounded-lg border-l-4 ${getPatternSeverityColor(pattern.severity)}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white">{pattern.pattern}</span>
                    <span className="text-green-400 text-sm font-bold">{pattern.trend}</span>
                  </div>
                  <div className="text-sm text-gray-300">{pattern.occurrences.toLocaleString()} occurrences</div>
                  <div className="text-xs text-gray-400">Severity: {pattern.severity}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Index Statistics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📚 Index Statistics
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {indexStats.map((index, idx) => (
                <div key={idx} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-white text-sm">{index.index}</span>
                    <span className={`text-sm ${getHealthColor(index.health)}`}>{index.health}</span>
                  </div>
                  <div className="text-xs text-gray-300 space-y-1">
                    <div>Docs: {index.docs.toLocaleString()} | Size: {index.size}</div>
                    <div>Shards: {index.shards} | Replicas: {index.replicas}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Logs Stream */}
        <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📋 Recent Logs Stream
          </h3>
          <div className="space-y-2 max-h-80 overflow-y-auto font-mono text-sm">
            {recentLogs.map((log, index) => (
              <div key={index} className="p-3 bg-gray-700 rounded-lg">
                <div className="grid grid-cols-6 gap-2 items-center">
                  <div className="text-gray-400 text-xs">{log.timestamp.substring(11, 19)}</div>
                  <div className={`font-bold ${getLevelColor(log.level)} text-xs`}>{log.level}</div>
                  <div className="text-indigo-300 text-xs">{log.service}</div>
                  <div className="text-white col-span-2 text-xs">{log.message}</div>
                  <div className="text-gray-500 text-xs">{log.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cluster Statistics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🏗️ Cluster Statistics & Performance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-indigo-400">{(elasticMetrics.totalDocuments / 1000000).toFixed(1)}M</div>
              <div className="text-xs text-gray-300">Total Docs</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">{elasticMetrics.indicesCount}</div>
              <div className="text-xs text-gray-300">Indices</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">{elasticMetrics.shardsCount}</div>
              <div className="text-xs text-gray-300">Shards</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-green-400">{elasticMetrics.nodesCount}</div>
              <div className="text-xs text-gray-300">Nodes</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-yellow-400">{elasticMetrics.diskUsage.toFixed(1)}TB</div>
              <div className="text-xs text-gray-300">Disk Used</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-red-400">{elasticMetrics.memoryUsage.toFixed(1)}%</div>
              <div className="text-xs text-gray-300">Memory</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-cyan-400">{elasticMetrics.queryRate}</div>
              <div className="text-xs text-gray-300">Queries/sec</div>
            </div>
            <div className="text-center p-3 bg-gray-700 rounded-lg">
              <div className="text-2xl font-bold text-orange-400">{elasticMetrics.indexingRate}</div>
              <div className="text-xs text-gray-300">Index/sec</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            ELASTICSEARCH LOG ANALYTICS | ALEKSANDRA AI MONITORING | ADVANCED SEARCH & ANALYSIS
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Kibana-Inspired | Full-Text Search | Log Aggregation | Pattern Detection | Real-time Indexing | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}