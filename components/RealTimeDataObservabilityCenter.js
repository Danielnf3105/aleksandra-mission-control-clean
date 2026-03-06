import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Database, TrendingUp, AlertTriangle, CheckCircle, Clock, Zap, Activity, Eye, GitBranch, Layers, Filter, BarChart3, PieChart as PieChartIcon } from 'lucide-react';

const RealTimeDataObservabilityCenter = () => {
  const [dataPipelines, setDataPipelines] = useState([
    {
      id: 'PIPE-001',
      name: 'Instagram Content Pipeline',
      status: 'healthy',
      throughput: 1247,
      latency: 23.4,
      errorRate: 0.02,
      dataQualityScore: 98.7,
      recordsProcessed: 847392,
      lastProcessed: new Date(),
      source: 'Instagram API',
      destination: 'Analytics DB'
    },
    {
      id: 'PIPE-002', 
      name: 'User Analytics Pipeline',
      status: 'warning',
      throughput: 856,
      latency: 67.8,
      errorRate: 1.2,
      dataQualityScore: 94.3,
      recordsProcessed: 234556,
      lastProcessed: new Date(Date.now() - 120000),
      source: 'User Events',
      destination: 'Data Lake'
    },
    {
      id: 'PIPE-003',
      name: 'Real-time Metrics Pipeline',
      status: 'healthy',
      throughput: 2134,
      latency: 12.8,
      errorRate: 0.01,
      dataQualityScore: 99.2,
      recordsProcessed: 1293847,
      lastProcessed: new Date(),
      source: 'System Metrics',
      destination: 'Time Series DB'
    },
    {
      id: 'PIPE-004',
      name: 'AI Model Training Pipeline',
      status: 'degraded',
      throughput: 234,
      latency: 234.5,
      errorRate: 2.8,
      dataQualityScore: 91.7,
      recordsProcessed: 98234,
      lastProcessed: new Date(Date.now() - 300000),
      source: 'Training Data',
      destination: 'ML Platform'
    }
  ]);

  const [dataQualityMetrics, setDataQualityMetrics] = useState({
    overallScore: 96.2,
    completeness: 98.4,
    accuracy: 94.8,
    consistency: 97.1,
    timeliness: 95.6,
    validity: 96.9,
    uniqueness: 98.7
  });

  const [streamingMetrics, setStreamingMetrics] = useState([
    {
      time: new Date(Date.now() - 600000).toLocaleTimeString(),
      throughput: 1200,
      latency: 25,
      errorRate: 0.1,
      dataQuality: 97.2
    },
    {
      time: new Date(Date.now() - 480000).toLocaleTimeString(),
      throughput: 1150,
      latency: 28,
      errorRate: 0.2,
      dataQuality: 96.8
    },
    {
      time: new Date(Date.now() - 360000).toLocaleTimeString(),
      throughput: 1300,
      latency: 22,
      errorRate: 0.15,
      dataQuality: 97.5
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      throughput: 1180,
      latency: 30,
      errorRate: 0.8,
      dataQuality: 94.2
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      throughput: 1250,
      latency: 26,
      errorRate: 0.3,
      dataQuality: 96.1
    },
    {
      time: new Date().toLocaleTimeString(),
      throughput: 1247,
      latency: 23,
      errorRate: 0.02,
      dataQuality: 98.7
    }
  ]);

  const [dataAnomalies, setDataAnomalies] = useState([
    {
      id: 'ANOM-001',
      severity: 'high',
      pipeline: 'User Analytics Pipeline',
      type: 'Data Drift',
      message: 'Significant change in user behavior patterns detected',
      timestamp: new Date(),
      status: 'active',
      impactScore: 8.7
    },
    {
      id: 'ANOM-002',
      severity: 'medium',
      pipeline: 'Instagram Content Pipeline',
      type: 'Volume Spike',
      message: 'Unusual increase in content processing volume (+340%)',
      timestamp: new Date(Date.now() - 300000),
      status: 'investigating',
      impactScore: 6.2
    },
    {
      id: 'ANOM-003',
      severity: 'low',
      pipeline: 'Real-time Metrics Pipeline',
      type: 'Schema Change',
      message: 'New field detected in incoming data schema',
      timestamp: new Date(Date.now() - 600000),
      status: 'resolved',
      impactScore: 2.1
    }
  ]);

  const [dataLineage, setDataLineage] = useState([
    {
      source: 'Instagram API',
      transformation: 'Content Extraction',
      destination: 'Raw Data Store',
      status: 'active',
      recordsFlow: 1247
    },
    {
      source: 'Raw Data Store',
      transformation: 'Data Cleaning',
      destination: 'Processed Data',
      status: 'active',
      recordsFlow: 1235
    },
    {
      source: 'Processed Data',
      transformation: 'Analytics Transform',
      destination: 'Analytics DB',
      status: 'active',
      recordsFlow: 1230
    },
    {
      source: 'Analytics DB',
      transformation: 'ML Feature Engineering',
      destination: 'Feature Store',
      status: 'warning',
      recordsFlow: 1156
    }
  ]);

  const [observabilityKPIs, setObservabilityKPIs] = useState({
    dataAvailability: 99.8,
    pipelineReliability: 97.2,
    dataFreshness: 94.6,
    errorDetectionTime: 2.3, // minutes
    anomalyDetectionAccuracy: 96.8,
    dataCoverage: 98.1
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update pipeline metrics
      setDataPipelines(prev => prev.map(pipeline => {
        const variation = (Math.random() - 0.5) * 0.1;
        return {
          ...pipeline,
          throughput: Math.max(50, Math.min(2500, pipeline.throughput + (Math.random() - 0.5) * 100)),
          latency: Math.max(5, Math.min(300, pipeline.latency + (Math.random() - 0.5) * 10)),
          errorRate: Math.max(0, Math.min(5, pipeline.errorRate + (Math.random() - 0.7) * 0.2)),
          dataQualityScore: Math.max(85, Math.min(100, pipeline.dataQualityScore + variation)),
          recordsProcessed: pipeline.recordsProcessed + Math.floor(pipeline.throughput / 10),
          lastProcessed: Math.random() > 0.7 ? new Date() : pipeline.lastProcessed
        };
      }));

      // Update streaming metrics
      const newMetric = {
        time: new Date().toLocaleTimeString(),
        throughput: 1000 + Math.random() * 500,
        latency: 15 + Math.random() * 25,
        errorRate: Math.random() * 2,
        dataQuality: 94 + Math.random() * 6
      };
      
      setStreamingMetrics(prev => [...prev.slice(1), newMetric]);

      // Update quality metrics
      setDataQualityMetrics(prev => ({
        ...prev,
        overallScore: Math.max(90, Math.min(100, prev.overallScore + (Math.random() - 0.5) * 2)),
        completeness: Math.max(90, Math.min(100, prev.completeness + (Math.random() - 0.5) * 1)),
        accuracy: Math.max(85, Math.min(100, prev.accuracy + (Math.random() - 0.5) * 2)),
        timeliness: Math.max(85, Math.min(100, prev.timeliness + (Math.random() - 0.5) * 2))
      }));

      // Occasionally add new anomalies
      if (Math.random() > 0.95) {
        const anomalyTypes = ['Data Drift', 'Volume Spike', 'Schema Change', 'Quality Drop', 'Latency Spike'];
        const severities = ['low', 'medium', 'high'];
        const pipelines = ['Instagram Content Pipeline', 'User Analytics Pipeline', 'Real-time Metrics Pipeline'];
        
        const newAnomaly = {
          id: `ANOM-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          pipeline: pipelines[Math.floor(Math.random() * pipelines.length)],
          type: anomalyTypes[Math.floor(Math.random() * anomalyTypes.length)],
          message: 'Real-time anomaly detected in data pipeline',
          timestamp: new Date(),
          status: 'active',
          impactScore: 1 + Math.random() * 9
        };
        
        setDataAnomalies(prev => [newAnomaly, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getPipelineStatusColor = (status) => {
    switch (status) {
      case 'healthy': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'degraded': return '#EF4444';
      case 'critical': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const getAnomalySeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getLineageStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'blocked': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const dataQualityDistribution = [
    { name: 'Completeness', value: dataQualityMetrics.completeness, color: '#3B82F6' },
    { name: 'Accuracy', value: dataQualityMetrics.accuracy, color: '#10B981' },
    { name: 'Consistency', value: dataQualityMetrics.consistency, color: '#8B5CF6' },
    { name: 'Timeliness', value: dataQualityMetrics.timeliness, color: '#F59E0B' },
    { name: 'Validity', value: dataQualityMetrics.validity, color: '#EF4444' },
    { name: 'Uniqueness', value: dataQualityMetrics.uniqueness, color: '#06B6D4' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Database className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">REAL-TIME DATA OBSERVABILITY CENTER</h1>
            <p className="text-gray-400">Enterprise data pipeline monitoring, quality analytics, and streaming observability</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{dataQualityMetrics.overallScore.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">DATA QUALITY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{observabilityKPIs.dataAvailability.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">AVAILABILITY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{observabilityKPIs.pipelineReliability.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">RELIABILITY</div>
          </div>
        </div>
      </div>

      {/* Observability KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Eye className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">FRESHNESS</span>
          </div>
          <div className="text-xl font-bold text-white">{observabilityKPIs.dataFreshness.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Data Freshness</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">DETECTION</span>
          </div>
          <div className="text-xl font-bold text-white">{observabilityKPIs.errorDetectionTime.toFixed(1)}m</div>
          <div className="text-xs text-gray-400">Error Detection</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">ACCURACY</span>
          </div>
          <div className="text-xl font-bold text-white">{observabilityKPIs.anomalyDetectionAccuracy.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Anomaly Detection</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <BarChart3 className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">COVERAGE</span>
          </div>
          <div className="text-xl font-bold text-white">{observabilityKPIs.dataCoverage.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Data Coverage</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">PIPELINES</span>
          </div>
          <div className="text-xl font-bold text-white">{dataPipelines.length}</div>
          <div className="text-xs text-gray-400">Active Pipelines</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">ANOMALIES</span>
          </div>
          <div className="text-xl font-bold text-white">{dataAnomalies.filter(a => a.status === 'active').length}</div>
          <div className="text-xs text-gray-400">Active Anomalies</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Data Pipeline Health */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-green-400" />
            DATA PIPELINE HEALTH
          </h3>
          <div className="space-y-3">
            {dataPipelines.map(pipeline => (
              <div key={pipeline.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getPipelineStatusColor(pipeline.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{pipeline.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getPipelineStatusColor(pipeline.status)}20`, 
                    color: getPipelineStatusColor(pipeline.status) 
                  }}>
                    {pipeline.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Throughput</span>
                    <span className="text-blue-400">{pipeline.throughput.toFixed(0)} rec/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-white">{pipeline.latency.toFixed(1)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Error Rate</span>
                    <span className={pipeline.errorRate > 1 ? 'text-red-400' : 'text-green-400'}>
                      {pipeline.errorRate.toFixed(2)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Quality</span>
                    <span className="text-purple-400">{pipeline.dataQualityScore.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{pipeline.source} → {pipeline.destination}</span>
                  <span className="text-gray-500">{pipeline.recordsProcessed.toLocaleString()} records</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Anomalies */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            DATA ANOMALIES
          </h3>
          <div className="space-y-3">
            {dataAnomalies.map(anomaly => (
              <div key={anomaly.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getAnomalySeverityColor(anomaly.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{anomaly.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getAnomalySeverityColor(anomaly.severity)}20`, 
                      color: getAnomalySeverityColor(anomaly.severity) 
                    }}>
                      {anomaly.severity.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      anomaly.status === 'active' ? 'bg-red-900 text-red-400' : 
                      anomaly.status === 'resolved' ? 'bg-green-900 text-green-400' : 'bg-blue-900 text-blue-400'
                    }`}>
                      {anomaly.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mb-2">{anomaly.message}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{anomaly.pipeline}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">Impact: {anomaly.impactScore.toFixed(1)}</span>
                    <span className="text-gray-500">{anomaly.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Lineage */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <GitBranch className="w-5 h-5 mr-2 text-purple-400" />
            DATA LINEAGE FLOW
          </h3>
          <div className="space-y-3">
            {dataLineage.map((flow, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{flow.transformation}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getLineageStatusColor(flow.status)}20`, 
                    color: getLineageStatusColor(flow.status) 
                  }}>
                    {flow.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-400">{flow.source}</span>
                  <span className="text-gray-600">→</span>
                  <span className="text-blue-400">{flow.destination}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">{flow.recordsFlow.toLocaleString()} records/s</span>
                  <div className="w-20 bg-gray-700 rounded-full h-1.5">
                    <div 
                      className="bg-green-500 rounded-full h-1.5 transition-all duration-500" 
                      style={{ width: `${Math.min(100, (flow.recordsFlow / 1500) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Real-time Streaming Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">STREAMING DATA METRICS (REAL-TIME)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={streamingMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="throughput" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Throughput (rec/s)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="dataQuality" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Data Quality %"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="latency" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Latency (ms)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Data Quality Distribution */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">DATA QUALITY DIMENSIONS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={dataQualityDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {dataQualityDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {dataQualityDistribution.map((dimension, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: dimension.color }}
                    />
                    <span className="text-gray-400 text-sm">{dimension.name}</span>
                  </div>
                  <span className="text-white font-semibold">{dimension.value.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Observability Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Data Observability Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Filter className="w-3 h-3 inline mr-1" />
                  Monitor Pipeline
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Analyze Quality
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Layers className="w-3 h-3 inline mr-1" />
                  Trace Lineage
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeDataObservabilityCenter;