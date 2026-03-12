// Data Flow Visualizer - Real-time data pipeline monitoring and flow tracking
import { useState, useEffect } from 'react';
import { ArrowRight, ArrowDown, Database, Cloud, Cpu, Zap, Activity, CheckCircle, AlertCircle, Clock, TrendingUp } from 'lucide-react';

export default function DataFlowVisualizer() {
  const [dataFlowData, setDataFlowData] = useState({
    pipelineNodes: [
      {
        id: 'source-instagram',
        name: 'Instagram API',
        type: 'source',
        status: 'active',
        throughput: 47,
        latency: 234,
        errorRate: 0.2,
        position: { x: 0, y: 0 },
        connections: ['processor-content']
      },
      {
        id: 'processor-content',
        name: 'Content Processor',
        type: 'processor',
        status: 'processing',
        throughput: 43,
        latency: 567,
        errorRate: 0.4,
        position: { x: 1, y: 0 },
        connections: ['ai-assembly', 'storage-raw']
      },
      {
        id: 'ai-assembly',
        name: 'Assembly AI',
        type: 'ai-service',
        status: 'active',
        throughput: 41,
        latency: 1234,
        errorRate: 0.1,
        position: { x: 2, y: 0 },
        connections: ['processor-transcript']
      },
      {
        id: 'processor-transcript',
        name: 'Transcript Processor',
        type: 'processor',
        status: 'active',
        throughput: 39,
        latency: 345,
        errorRate: 0.3,
        position: { x: 3, y: 0 },
        connections: ['storage-processed', 'analytics-engine']
      },
      {
        id: 'storage-raw',
        name: 'Raw Storage',
        type: 'storage',
        status: 'active',
        throughput: 43,
        latency: 89,
        errorRate: 0.0,
        position: { x: 1, y: 1 },
        connections: []
      },
      {
        id: 'storage-processed',
        name: 'Processed Storage',
        type: 'storage',
        status: 'active',
        throughput: 39,
        latency: 76,
        errorRate: 0.1,
        position: { x: 3, y: 1 },
        connections: ['api-client']
      },
      {
        id: 'analytics-engine',
        name: 'Analytics Engine',
        type: 'processor',
        status: 'active',
        throughput: 39,
        latency: 456,
        errorRate: 0.2,
        position: { x: 4, y: 0 },
        connections: ['dashboard-mission']
      },
      {
        id: 'api-client',
        name: 'Client API',
        type: 'api',
        status: 'active',
        throughput: 87,
        latency: 123,
        errorRate: 0.1,
        position: { x: 4, y: 1 },
        connections: []
      },
      {
        id: 'dashboard-mission',
        name: 'Mission Control',
        type: 'output',
        status: 'active',
        throughput: 39,
        latency: 234,
        errorRate: 0.0,
        position: { x: 5, y: 0 },
        connections: []
      }
    ],
    dataStreams: [
      {
        name: 'Instagram Videos',
        source: 'source-instagram',
        destination: 'processor-content',
        volume: 47,
        status: 'flowing',
        dataType: 'video/mp4',
        avgSize: '15.3MB'
      },
      {
        name: 'Raw Content',
        source: 'processor-content',
        destination: 'storage-raw',
        volume: 43,
        status: 'flowing',
        dataType: 'binary',
        avgSize: '15.3MB'
      },
      {
        name: 'Audio Extract',
        source: 'processor-content',
        destination: 'ai-assembly',
        volume: 41,
        status: 'flowing',
        dataType: 'audio/wav',
        avgSize: '2.4MB'
      },
      {
        name: 'Transcriptions',
        source: 'ai-assembly',
        destination: 'processor-transcript',
        volume: 39,
        status: 'flowing',
        dataType: 'application/json',
        avgSize: '8.7KB'
      },
      {
        name: 'Processed Data',
        source: 'processor-transcript',
        destination: 'storage-processed',
        volume: 39,
        status: 'flowing',
        dataType: 'application/json',
        avgSize: '12.1KB'
      },
      {
        name: 'Analytics Feed',
        source: 'processor-transcript',
        destination: 'analytics-engine',
        volume: 39,
        status: 'flowing',
        dataType: 'application/json',
        avgSize: '5.2KB'
      },
      {
        name: 'Client Requests',
        source: 'storage-processed',
        destination: 'api-client',
        volume: 87,
        status: 'flowing',
        dataType: 'application/json',
        avgSize: '3.1KB'
      },
      {
        name: 'Dashboard Updates',
        source: 'analytics-engine',
        destination: 'dashboard-mission',
        volume: 39,
        status: 'flowing',
        dataType: 'application/json',
        avgSize: '1.8KB'
      }
    ],
    performanceMetrics: {
      totalThroughput: 342,
      averageLatency: 423,
      overallErrorRate: 0.18,
      dataProcessed: '2.3GB',
      pipelineEfficiency: 94.7,
      bottlenecks: 1,
      healthScore: 96.2
    },
    queueStatus: [
      { queue: 'Instagram Ingestion', size: 23, maxSize: 100, processingRate: 47 },
      { queue: 'Assembly AI Processing', size: 67, maxSize: 150, processingRate: 41 },
      { queue: 'Transcript Processing', size: 12, maxSize: 50, processingRate: 39 },
      { queue: 'Analytics Processing', size: 8, maxSize: 25, processingRate: 39 }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlowData(prev => ({
        ...prev,
        pipelineNodes: prev.pipelineNodes.map(node => ({
          ...node,
          throughput: Math.max(0, node.throughput + (Math.random() - 0.5) * 10),
          latency: Math.max(50, node.latency + (Math.random() - 0.5) * 100),
          errorRate: Math.max(0, Math.min(5, node.errorRate + (Math.random() - 0.7) * 0.3))
        })),
        performanceMetrics: {
          ...prev.performanceMetrics,
          totalThroughput: Math.max(250, prev.performanceMetrics.totalThroughput + (Math.random() - 0.5) * 50),
          averageLatency: Math.max(200, prev.performanceMetrics.averageLatency + (Math.random() - 0.5) * 100),
          pipelineEfficiency: Math.max(90, Math.min(99, prev.performanceMetrics.pipelineEfficiency + (Math.random() - 0.5) * 2))
        },
        queueStatus: prev.queueStatus.map(queue => ({
          ...queue,
          size: Math.max(0, Math.min(queue.maxSize * 0.8, queue.size + (Math.random() - 0.6) * 15))
        }))
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'processing': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'error': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getNodeIcon = (type) => {
    switch (type) {
      case 'source': return <Database className="w-5 h-5 text-cyan-400" />;
      case 'processor': return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'ai-service': return <Zap className="w-5 h-5 text-purple-400" />;
      case 'storage': return <Cloud className="w-5 h-5 text-green-400" />;
      case 'api': return <Activity className="w-5 h-5 text-orange-400" />;
      case 'output': return <TrendingUp className="w-5 h-5 text-pink-400" />;
      default: return <Database className="w-5 h-5 text-gray-400" />;
    }
  };

  const getLatencyColor = (latency) => {
    if (latency < 300) return 'text-green-400';
    if (latency < 600) return 'text-yellow-400';
    if (latency < 1000) return 'text-orange-400';
    return 'text-red-400';
  };

  const getThroughputColor = (throughput) => {
    if (throughput > 40) return 'text-green-400';
    if (throughput > 20) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getQueueUtilization = (size, maxSize) => {
    const utilization = (size / maxSize) * 100;
    return utilization;
  };

  const getQueueColor = (utilization) => {
    if (utilization < 50) return 'bg-green-400';
    if (utilization < 75) return 'bg-yellow-400';
    return 'bg-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Activity className="w-8 h-8 text-cyan-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Data Flow Visualizer</h2>
            <p className="text-gray-400">Real-time data pipeline monitoring and flow tracking</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{dataFlowData.performanceMetrics.totalThroughput.toFixed(0)}</div>
            <div className="text-xs text-gray-400">Total Throughput/min</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-purple-400">{dataFlowData.performanceMetrics.pipelineEfficiency.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Pipeline Efficiency</div>
          </div>
        </div>
      </div>

      {/* Pipeline Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{dataFlowData.performanceMetrics.totalThroughput.toFixed(0)}</div>
          <div className="text-xs text-gray-400">Throughput/min</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{dataFlowData.performanceMetrics.averageLatency.toFixed(0)}ms</div>
          <div className="text-xs text-gray-400">Avg Latency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{dataFlowData.performanceMetrics.overallErrorRate.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Error Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{dataFlowData.performanceMetrics.dataProcessed}</div>
          <div className="text-xs text-gray-400">Data Processed</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{dataFlowData.performanceMetrics.pipelineEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Efficiency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{dataFlowData.performanceMetrics.bottlenecks}</div>
          <div className="text-xs text-gray-400">Bottlenecks</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{dataFlowData.performanceMetrics.healthScore.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Health Score</div>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <ArrowRight className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Data Pipeline Flow</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <div className="text-xs text-cyan-400">LIVE FLOW</div>
          </div>
        </div>
        
        {/* Pipeline Grid */}
        <div className="relative">
          <div className="grid grid-cols-6 gap-8 min-h-[400px]">
            {/* Render nodes based on position */}
            {Array.from({ length: 6 }, (_, x) => (
              <div key={x} className="space-y-8">
                {Array.from({ length: 2 }, (_, y) => {
                  const node = dataFlowData.pipelineNodes.find(n => n.position.x === x && n.position.y === y);
                  return (
                    <div key={y} className="h-20 flex items-center justify-center">
                      {node && (
                        <div className="relative">
                          <div className={`p-4 rounded-lg border ${getStatusColor(node.status)} bg-gray-700/50 min-w-[120px]`}>
                            <div className="flex items-center space-x-2 mb-2">
                              {getNodeIcon(node.type)}
                              <div className="text-white text-sm font-medium">{node.name}</div>
                            </div>
                            <div className="grid grid-cols-2 gap-1 text-xs">
                              <div className="text-center">
                                <div className={`font-bold ${getThroughputColor(node.throughput)}`}>
                                  {node.throughput.toFixed(0)}
                                </div>
                                <div className="text-gray-400">tput/min</div>
                              </div>
                              <div className="text-center">
                                <div className={`font-bold ${getLatencyColor(node.latency)}`}>
                                  {node.latency.toFixed(0)}ms
                                </div>
                                <div className="text-gray-400">latency</div>
                              </div>
                            </div>
                            <div className="text-center text-xs mt-1">
                              <div className="text-red-400 font-bold">{node.errorRate.toFixed(1)}% err</div>
                            </div>
                          </div>
                          
                          {/* Connection arrows */}
                          {node.connections.map((targetId, connIndex) => {
                            const targetNode = dataFlowData.pipelineNodes.find(n => n.id === targetId);
                            if (!targetNode) return null;
                            
                            const isHorizontal = targetNode.position.y === node.position.y;
                            const isDown = targetNode.position.y > node.position.y;
                            
                            return (
                              <div
                                key={connIndex}
                                className={`absolute ${
                                  isHorizontal 
                                    ? 'top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform -translate-y-1/2' 
                                    : isDown
                                    ? 'top-full left-1/2 w-0.5 h-8 bg-gradient-to-b from-cyan-400 to-green-500 transform -translate-x-1/2'
                                    : 'bottom-full left-1/2 w-0.5 h-8 bg-gradient-to-t from-cyan-400 to-yellow-500 transform -translate-x-1/2'
                                } animate-pulse`}
                              >
                                <div className={`absolute ${
                                  isHorizontal 
                                    ? 'right-0 top-1/2 transform -translate-y-1/2' 
                                    : isDown
                                    ? 'bottom-0 left-1/2 transform -translate-x-1/2'
                                    : 'top-0 left-1/2 transform -translate-x-1/2'
                                }`}>
                                  {isHorizontal ? (
                                    <ArrowRight className="w-3 h-3 text-cyan-400" />
                                  ) : (
                                    <ArrowDown className={`w-3 h-3 text-cyan-400 ${isDown ? '' : 'transform rotate-180'}`} />
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Data Streams */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Database className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Data Streams</h3>
          </div>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {dataFlowData.dataStreams.map((stream, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{stream.name}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(stream.status)}`}>
                    {stream.status.toUpperCase()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{stream.volume}/min</div>
                    <div className="text-gray-400">Volume</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">{stream.avgSize}</div>
                    <div className="text-gray-400">Avg Size</div>
                  </div>
                </div>
                <div className="text-center text-xs mt-2">
                  <div className="text-gray-400">{stream.dataType}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Queue Status */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Queue Status</h3>
          </div>
          <div className="space-y-4">
            {dataFlowData.queueStatus.map((queue, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white font-medium">{queue.queue}</span>
                  <span className="text-gray-400">{queue.size}/{queue.maxSize}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full ${getQueueColor(getQueueUtilization(queue.size, queue.maxSize))}`}
                    style={{ width: `${getQueueUtilization(queue.size, queue.maxSize)}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">
                    {getQueueUtilization(queue.size, queue.maxSize).toFixed(1)}% utilized
                  </span>
                  <span className="text-cyan-400">{queue.processingRate}/min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">{dataFlowData.performanceMetrics.totalThroughput.toFixed(0)}</div>
              <div className="text-sm text-gray-300">Total Pipeline Throughput/min</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{dataFlowData.performanceMetrics.pipelineEfficiency.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Pipeline Efficiency</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{dataFlowData.performanceMetrics.healthScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">System Health Score</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}