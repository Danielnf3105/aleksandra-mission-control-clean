// Real-Time Data Streams - Live data feeds and streaming analytics dashboard
import { useState, useEffect } from 'react';
import { Radio, TrendingUp, Activity, Zap, Globe, Database, Wifi, BarChart3, Eye, Clock, Signal, Monitor } from 'lucide-react';

export default function RealTimeDataStreams() {
  const [streamData, setStreamData] = useState({
    streamOverview: {
      activeStreams: 12,
      totalDataPoints: 847293,
      streamingRate: 1247.6,
      latencyAverage: '48ms',
      dataVelocity: 'High',
      compressionRatio: 67.3,
      lossRate: 0.02,
      throughputMbps: 156.7
    },
    liveStreams: [
      {
        id: 'stream-001',
        name: 'Instagram Content Feed',
        type: 'content',
        status: 'active',
        dataRate: 87.3,
        latency: 42,
        lastUpdate: '1s ago',
        throughput: 23.4,
        compression: 72.1,
        reliability: 99.7,
        source: 'Instagram API',
        format: 'JSON',
        priority: 'high'
      },
      {
        id: 'stream-002',
        name: 'Assembly AI Transcriptions',
        type: 'transcription',
        status: 'active',
        dataRate: 134.7,
        latency: 156,
        lastUpdate: '2s ago',
        throughput: 45.6,
        compression: 84.2,
        reliability: 98.9,
        source: 'Assembly AI',
        format: 'WebSocket',
        priority: 'critical'
      },
      {
        id: 'stream-003',
        name: 'LinkedIn Engagement Metrics',
        type: 'social',
        status: 'active',
        dataRate: 62.1,
        latency: 28,
        lastUpdate: '1s ago',
        throughput: 18.7,
        compression: 56.8,
        reliability: 96.4,
        source: 'LinkedIn API',
        format: 'REST',
        priority: 'normal'
      },
      {
        id: 'stream-004',
        name: 'X/Twitter Activity Monitor',
        type: 'social',
        status: 'buffering',
        dataRate: 23.4,
        latency: 89,
        lastUpdate: '12s ago',
        throughput: 8.9,
        compression: 45.2,
        reliability: 94.1,
        source: 'X API',
        format: 'Streaming',
        priority: 'normal'
      },
      {
        id: 'stream-005',
        name: 'Agent Performance Telemetry',
        type: 'infrastructure',
        status: 'active',
        dataRate: 245.8,
        latency: 15,
        lastUpdate: '0s ago',
        throughput: 78.3,
        compression: 91.4,
        reliability: 99.9,
        source: 'Agent Network',
        format: 'Binary',
        priority: 'critical'
      },
      {
        id: 'stream-006',
        name: 'Content Processing Queue',
        type: 'processing',
        status: 'active',
        dataRate: 178.2,
        latency: 67,
        lastUpdate: '1s ago',
        throughput: 52.1,
        compression: 78.6,
        reliability: 97.8,
        source: 'Processing Engine',
        format: 'Protobuf',
        priority: 'high'
      },
      {
        id: 'stream-007',
        name: 'Security Event Stream',
        type: 'security',
        status: 'active',
        dataRate: 45.6,
        latency: 12,
        lastUpdate: '0s ago',
        throughput: 15.3,
        compression: 65.7,
        reliability: 99.5,
        source: 'Security Monitor',
        format: 'SIEM',
        priority: 'critical'
      },
      {
        id: 'stream-008',
        name: 'Cost Analytics Feed',
        type: 'analytics',
        status: 'degraded',
        dataRate: 34.2,
        latency: 234,
        lastUpdate: '8s ago',
        throughput: 12.6,
        compression: 58.3,
        reliability: 91.2,
        source: 'Cost API',
        format: 'JSON',
        priority: 'low'
      }
    ],
    dataVelocityTrends: [
      { time: '17:35', velocity: 156, volume: 87432, latency: 45 },
      { time: '17:40', velocity: 189, volume: 93247, latency: 38 },
      { time: '17:41', velocity: 203, volume: 98123, latency: 42 },
      { time: '17:42', velocity: 234, volume: 104567, latency: 35 },
      { time: '17:44', velocity: 247, volume: 112890, latency: 48 }
    ],
    streamTypes: [
      {
        type: 'Content Streams',
        count: 3,
        avgRate: 109.4,
        avgLatency: 75,
        reliability: 98.3,
        status: 'optimal'
      },
      {
        type: 'Social Media',
        count: 2,
        avgRate: 42.8,
        avgLatency: 58,
        reliability: 95.3,
        status: 'healthy'
      },
      {
        type: 'Infrastructure',
        count: 4,
        avgRate: 167.1,
        avgLatency: 34,
        reliability: 98.8,
        status: 'optimal'
      },
      {
        type: 'Analytics',
        count: 2,
        avgRate: 89.9,
        avgLatency: 150,
        reliability: 94.5,
        status: 'warning'
      },
      {
        type: 'Security',
        count: 1,
        avgRate: 45.6,
        avgLatency: 12,
        reliability: 99.5,
        status: 'optimal'
      }
    ],
    protocolBreakdown: {
      websocket: 42.3,
      rest: 28.7,
      streaming: 18.4,
      binary: 7.2,
      other: 3.4
    },
    qualityMetrics: {
      overallLatency: 48,
      dataAccuracy: 99.7,
      uptime: 99.94,
      errorRate: 0.06,
      retransmissionRate: 0.8,
      bufferUtilization: 34.2
    },
    alertsAndAnomalies: [
      {
        stream: 'X/Twitter Activity Monitor',
        type: 'performance',
        severity: 'warning',
        description: 'Latency spike detected (89ms vs 30ms avg)',
        timestamp: '17:43:12',
        action: 'Auto-scaling buffer size'
      },
      {
        stream: 'Cost Analytics Feed',
        type: 'degradation',
        severity: 'medium',
        description: 'Response time degraded (234ms vs 80ms avg)',
        timestamp: '17:42:45',
        action: 'Investigating upstream API'
      },
      {
        stream: 'Agent Performance Telemetry',
        type: 'optimization',
        severity: 'info',
        description: 'Compression ratio improved to 91.4%',
        timestamp: '17:41:28',
        action: 'No action required'
      }
    ],
    networkTopology: [
      { node: 'Instagram Gateway', connections: 3, load: 67.2, status: 'healthy' },
      { node: 'Assembly AI Bridge', connections: 2, load: 89.4, status: 'optimal' },
      { node: 'Social Media Hub', connections: 4, load: 45.6, status: 'healthy' },
      { node: 'Processing Cluster', connections: 8, load: 78.9, status: 'optimal' },
      { node: 'Analytics Engine', connections: 2, load: 34.2, status: 'warning' },
      { node: 'Security Monitor', connections: 1, load: 23.1, status: 'optimal' }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStreamData(prev => {
        const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        const newTrend = {
          time: currentTime,
          velocity: Math.max(150, Math.floor(Math.random() * 100) + 200),
          volume: Math.max(85000, Math.floor(Math.random() * 30000) + 95000),
          latency: Math.max(25, Math.floor(Math.random() * 30) + 35)
        };

        return {
          ...prev,
          dataVelocityTrends: [...prev.dataVelocityTrends.slice(-4), newTrend],
          streamOverview: {
            ...prev.streamOverview,
            totalDataPoints: prev.streamOverview.totalDataPoints + Math.floor(Math.random() * 1000) + 500,
            streamingRate: Math.max(1000, Math.min(1500, prev.streamOverview.streamingRate + (Math.random() - 0.5) * 100)),
            latencyAverage: Math.max(30, Math.min(80, parseInt(prev.streamOverview.latencyAverage) + (Math.random() - 0.5) * 10)).toFixed(0) + 'ms'
          },
          liveStreams: prev.liveStreams.map(stream => ({
            ...stream,
            dataRate: Math.max(20, Math.min(300, stream.dataRate + (Math.random() - 0.5) * 20)),
            latency: Math.max(10, Math.min(250, stream.latency + (Math.random() - 0.5) * 15)),
            lastUpdate: Math.random() > 0.7 ? `${Math.floor(Math.random() * 5)}s ago` : stream.lastUpdate
          }))
        };
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'buffering': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'degraded': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'error': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'optimal': return 'text-cyan-400';
      case 'healthy': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'content': return <Globe className="w-4 h-4 text-blue-400" />;
      case 'transcription': return <Radio className="w-4 h-4 text-purple-400" />;
      case 'social': return <Activity className="w-4 h-4 text-green-400" />;
      case 'infrastructure': return <Database className="w-4 h-4 text-cyan-400" />;
      case 'processing': return <Zap className="w-4 h-4 text-orange-400" />;
      case 'security': return <Eye className="w-4 h-4 text-red-400" />;
      case 'analytics': return <BarChart3 className="w-4 h-4 text-yellow-400" />;
      default: return <Signal className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'high': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'normal': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'low': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'medium': return 'text-orange-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getLatencyColor = (latency) => {
    if (latency < 50) return 'text-green-400';
    if (latency < 100) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getReliabilityColor = (reliability) => {
    if (reliability >= 99) return 'text-green-400';
    if (reliability >= 95) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Radio className="w-8 h-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Real-Time Data Streams</h2>
            <p className="text-gray-400">Live data feeds and streaming analytics dashboard</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{streamData.streamOverview.activeStreams}</div>
            <div className="text-xs text-gray-400">Active Streams</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-400">{streamData.streamOverview.streamingRate.toFixed(1)}</div>
            <div className="text-xs text-gray-400">KB/s</div>
          </div>
        </div>
      </div>

      {/* Stream Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{streamData.streamOverview.activeStreams}</div>
          <div className="text-xs text-gray-400">Active Streams</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{streamData.streamOverview.totalDataPoints.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Data Points</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{streamData.streamOverview.streamingRate.toFixed(1)}</div>
          <div className="text-xs text-gray-400">KB/s Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{streamData.streamOverview.latencyAverage}</div>
          <div className="text-xs text-gray-400">Avg Latency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{streamData.streamOverview.dataVelocity}</div>
          <div className="text-xs text-gray-400">Velocity</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{streamData.streamOverview.compressionRatio.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Compression</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{streamData.streamOverview.lossRate.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Loss Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-emerald-400">{streamData.streamOverview.throughputMbps.toFixed(1)}</div>
          <div className="text-xs text-gray-400">Mbps</div>
        </div>
      </div>

      {/* Live Streams */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Signal className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-bold text-white">Live Data Streams</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="text-xs text-green-400">STREAMING</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {streamData.liveStreams.map((stream, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(stream.type)}
                  <div className="text-white font-medium">{stream.name}</div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(stream.status)}`}>
                    {stream.status.toUpperCase()}
                  </div>
                  <div className={`text-xs px-1 py-1 rounded border ${getPriorityColor(stream.priority)}`}>
                    {stream.priority.charAt(0).toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                <div>
                  <div className="text-gray-400">Data Rate</div>
                  <div className="text-cyan-400 font-medium">{stream.dataRate.toFixed(1)} KB/s</div>
                </div>
                <div>
                  <div className="text-gray-400">Latency</div>
                  <div className={`font-medium ${getLatencyColor(stream.latency)}`}>{stream.latency}ms</div>
                </div>
                <div>
                  <div className="text-gray-400">Throughput</div>
                  <div className="text-blue-400 font-medium">{stream.throughput.toFixed(1)} Mbps</div>
                </div>
                <div>
                  <div className="text-gray-400">Reliability</div>
                  <div className={`font-medium ${getReliabilityColor(stream.reliability)}`}>{stream.reliability.toFixed(1)}%</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-2 text-xs">
                <div>
                  <div className="text-gray-400">Source</div>
                  <div className="text-purple-400 font-medium">{stream.source}</div>
                </div>
                <div>
                  <div className="text-gray-400">Format</div>
                  <div className="text-green-400 font-medium">{stream.format}</div>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-gray-400 text-xs">Compression: {stream.compression.toFixed(1)}%</div>
                <div className="w-full bg-gray-700 rounded-full h-1">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1 rounded-full"
                    style={{ width: `${stream.compression}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">Last update: {stream.lastUpdate}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Velocity Trends */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Data Velocity Trends</h3>
          </div>
          
          {/* Trend Chart */}
          <div className="h-32 flex items-end space-x-2 mb-4">
            {streamData.dataVelocityTrends.map((trend, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div 
                    className="w-6 bg-gradient-to-t from-blue-400 to-blue-500 rounded-sm"
                    style={{ height: `${(trend.velocity / 300) * 100}px` }}
                    title={`Velocity: ${trend.velocity} KB/s`}
                  ></div>
                  <div 
                    className="w-6 bg-gradient-to-t from-green-400 to-green-500 rounded-sm"
                    style={{ height: `${(trend.volume / 120000) * 100}px` }}
                    title={`Volume: ${trend.volume}`}
                  ></div>
                  <div 
                    className="w-6 bg-gradient-to-t from-yellow-400 to-orange-500 rounded-sm"
                    style={{ height: `${(80 - trend.latency) * 1.5}px` }}
                    title={`Latency: ${trend.latency}ms`}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{trend.time}</div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span className="text-gray-400">Velocity</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <span className="text-gray-400">Volume</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span className="text-gray-400">Latency</span>
            </div>
          </div>
        </div>

        {/* Stream Types */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Database className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Stream Categories</h3>
          </div>
          <div className="space-y-3">
            {streamData.streamTypes.map((type, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{type.type}</div>
                  <div className={`text-xs px-2 py-1 rounded ${getStatusColor(type.status)}`}>
                    {type.status.toUpperCase()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{type.count}</div>
                    <div className="text-gray-400">Streams</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-400">{type.avgRate.toFixed(1)}</div>
                    <div className="text-gray-400">Avg Rate</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${getLatencyColor(type.avgLatency)}`}>{type.avgLatency}ms</div>
                    <div className="text-gray-400">Latency</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${getReliabilityColor(type.reliability)}`}>{type.reliability.toFixed(1)}%</div>
                    <div className="text-gray-400">Reliability</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Topology & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Network Topology */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Wifi className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Network Topology</h3>
          </div>
          <div className="space-y-3">
            {streamData.networkTopology.map((node, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{node.node}</div>
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(node.status).includes('green') ? 'bg-green-400' : 
                    getStatusColor(node.status).includes('yellow') ? 'bg-yellow-400' : 
                    getStatusColor(node.status).includes('cyan') ? 'bg-cyan-400' : 'bg-gray-400'}`}></div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{node.connections}</div>
                    <div className="text-gray-400">Connections</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold ${node.load > 80 ? 'text-red-400' : node.load > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {node.load.toFixed(1)}%
                    </div>
                    <div className="text-gray-400">Load</div>
                  </div>
                  <div className="text-center">
                    <div className={`font-bold text-xs ${getStatusColor(node.status).split(' ')[0]}`}>
                      {node.status.toUpperCase()}
                    </div>
                    <div className="text-gray-400">Status</div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div 
                      className={`h-1 rounded-full ${node.load > 80 ? 'bg-red-400' : node.load > 60 ? 'bg-yellow-400' : 'bg-green-400'}`}
                      style={{ width: `${node.load}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts and Anomalies */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-bold text-white">Stream Alerts</h3>
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {streamData.alertsAndAnomalies.map((alert, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-start space-x-2 mb-2">
                  <div className={`w-2 h-2 rounded-full mt-2 ${getSeverityColor(alert.severity).includes('red') ? 'bg-red-400' : 
                    getSeverityColor(alert.severity).includes('yellow') ? 'bg-yellow-400' : 
                    getSeverityColor(alert.severity).includes('orange') ? 'bg-orange-400' : 'bg-blue-400'}`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-white text-sm font-medium">{alert.stream}</div>
                      <div className={`text-xs px-2 py-1 rounded ${getSeverityColor(alert.severity)} bg-opacity-20`}>
                        {alert.severity.toUpperCase()}
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm mb-1">{alert.description}</div>
                    <div className="text-cyan-400 text-sm mb-1">{alert.action}</div>
                    <div className="text-xs text-gray-500">{alert.timestamp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Metrics Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{streamData.qualityMetrics.overallLatency}ms</div>
              <div className="text-sm text-gray-300">Avg Latency</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{streamData.qualityMetrics.dataAccuracy.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Accuracy</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Monitor className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{streamData.qualityMetrics.uptime.toFixed(2)}%</div>
              <div className="text-sm text-gray-300">Uptime</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-600/20 to-red-400/20 backdrop-blur-sm rounded-lg border border-red-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-red-400/20 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-red-400">{streamData.qualityMetrics.errorRate.toFixed(2)}%</div>
              <div className="text-sm text-gray-300">Error Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Radio className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{streamData.qualityMetrics.retransmissionRate.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Retrans Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">{streamData.qualityMetrics.bufferUtilization.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Buffer Usage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}