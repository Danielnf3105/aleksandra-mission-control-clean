// APIManagementCenter.js - Advanced API Management & Microservices Monitoring Center
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const APIManagementCenter = () => {
  const [apiEndpoints, setApiEndpoints] = useState([
    {
      id: 'api_001',
      name: 'OpenClaw Gateway API',
      endpoint: '/api/gateway',
      method: 'POST',
      status: 'HEALTHY',
      uptime: 99.97,
      avgLatency: 127,
      requestsPerMinute: 156,
      errorRate: 0.12,
      lastRequest: Date.now() - 2 * 1000,
      rateLimit: 1000,
      rateLimitUsed: 234,
      responseTime: {
        p50: 89,
        p95: 156,
        p99: 234
      },
      version: 'v2.1.8',
      documentation: 'https://docs.openclaw.ai/gateway'
    },
    {
      id: 'api_002', 
      name: 'Anthropic Claude API',
      endpoint: '/v1/messages',
      method: 'POST',
      status: 'HEALTHY',
      uptime: 99.94,
      avgLatency: 234,
      requestsPerMinute: 89,
      errorRate: 0.08,
      lastRequest: Date.now() - 5 * 1000,
      rateLimit: 200,
      rateLimitUsed: 67,
      responseTime: {
        p50: 156,
        p95: 289,
        p99: 456
      },
      version: 'v1',
      documentation: 'https://docs.anthropic.com/api'
    },
    {
      id: 'api_003',
      name: 'Assembly AI Transcription',
      endpoint: '/v2/transcript',
      method: 'POST', 
      status: 'DEGRADED',
      uptime: 97.8,
      avgLatency: 456,
      requestsPerMinute: 23,
      errorRate: 2.1,
      lastRequest: Date.now() - 45 * 1000,
      rateLimit: 100,
      rateLimitUsed: 34,
      responseTime: {
        p50: 289,
        p95: 567,
        p99: 1234
      },
      version: 'v2',
      documentation: 'https://www.assemblyai.com/docs'
    },
    {
      id: 'api_004',
      name: 'Vercel Deployment API',
      endpoint: '/v2/deployments',
      method: 'GET',
      status: 'HEALTHY',
      uptime: 99.99,
      avgLatency: 67,
      requestsPerMinute: 12,
      errorRate: 0.02,
      lastRequest: Date.now() - 8 * 60 * 1000,
      rateLimit: 500,
      rateLimitUsed: 8,
      responseTime: {
        p50: 45,
        p95: 89,
        p99: 156
      },
      version: 'v2',
      documentation: 'https://vercel.com/docs/api'
    },
    {
      id: 'api_005',
      name: 'GitHub API',
      endpoint: '/repos/aleksandra-mission-control',
      method: 'GET',
      status: 'HEALTHY',
      uptime: 99.92,
      avgLatency: 89,
      requestsPerMinute: 8,
      errorRate: 0.05,
      lastRequest: Date.now() - 15 * 60 * 1000,
      rateLimit: 5000,
      rateLimitUsed: 234,
      responseTime: {
        p50: 67,
        p95: 123,
        p99: 234
      },
      version: 'v3',
      documentation: 'https://docs.github.com/en/rest'
    },
    {
      id: 'api_006',
      name: 'Internal Metrics API',
      endpoint: '/metrics/health',
      method: 'GET',
      status: 'CRITICAL',
      uptime: 89.4,
      avgLatency: 1234,
      requestsPerMinute: 45,
      errorRate: 8.7,
      lastRequest: Date.now() - 2 * 60 * 1000,
      rateLimit: 200,
      rateLimitUsed: 189,
      responseTime: {
        p50: 567,
        p95: 1234,
        p99: 2345
      },
      version: 'v1',
      documentation: '/docs/metrics'
    }
  ]);

  const [microservices, setMicroservices] = useState([
    {
      id: 'service_001',
      name: 'Content Processing Service',
      type: 'WORKER',
      status: 'RUNNING',
      instances: 3,
      health: 'HEALTHY',
      cpu: 67.3,
      memory: 145.7,
      uptime: 1234.5,
      version: 'v2.3.1',
      dependencies: ['service_002', 'service_005'],
      endpoints: ['api_001'],
      errorRate: 0.23,
      throughput: 156.7
    },
    {
      id: 'service_002',
      name: 'Agent Orchestration Service',
      type: 'COORDINATOR',
      status: 'RUNNING',
      instances: 2,
      health: 'EXCELLENT',
      cpu: 34.2,
      memory: 89.3,
      uptime: 2567.8,
      version: 'v1.8.4',
      dependencies: ['service_003', 'service_004'],
      endpoints: ['api_001', 'api_002'],
      errorRate: 0.08,
      throughput: 234.2
    },
    {
      id: 'service_003',
      name: 'Analytics Engine',
      type: 'PROCESSOR',
      status: 'RUNNING',
      instances: 1,
      health: 'GOOD',
      cpu: 89.7,
      memory: 267.4,
      uptime: 856.2,
      version: 'v3.1.2',
      dependencies: ['service_006'],
      endpoints: ['api_006'],
      errorRate: 1.2,
      throughput: 89.4
    },
    {
      id: 'service_004',
      name: 'Security Monitor',
      type: 'GUARDIAN',
      status: 'STANDBY',
      instances: 1,
      health: 'GOOD',
      cpu: 12.4,
      memory: 45.6,
      uptime: 3456.7,
      version: 'v1.5.6',
      dependencies: [],
      endpoints: [],
      errorRate: 0.01,
      throughput: 23.1
    },
    {
      id: 'service_005',
      name: 'Notification Service',
      type: 'MESSENGER',
      status: 'RUNNING',
      instances: 2,
      health: 'HEALTHY',
      cpu: 23.8,
      memory: 67.2,
      uptime: 1789.3,
      version: 'v2.0.1',
      dependencies: ['service_001'],
      endpoints: ['api_001'],
      errorRate: 0.45,
      throughput: 67.8
    },
    {
      id: 'service_006',
      name: 'Database Service',
      type: 'STORAGE',
      status: 'DEGRADED',
      instances: 1,
      health: 'FAIR',
      cpu: 78.9,
      memory: 456.7,
      uptime: 567.8,
      version: 'v4.2.1',
      dependencies: [],
      endpoints: ['api_006'],
      errorRate: 3.4,
      throughput: 345.6
    }
  ]);

  const [apiMetrics, setApiMetrics] = useState({
    totalRequests: 2847362,
    requestsToday: 156742,
    avgResponseTime: 156,
    totalErrors: 2847,
    errorRate: 0.32,
    uptimePercentage: 98.7,
    activeEndpoints: 6,
    rateLimitViolations: 23,
    dataTransfer: 2347.8, // MB
    peakRpm: 567,
    servicesHealthy: 4,
    servicesTotal: 6
  });

  const [incidentHistory, setIncidentHistory] = useState([
    {
      id: 'incident_001',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'HIGH',
      service: 'Internal Metrics API',
      title: 'High latency and error rates',
      status: 'INVESTIGATING',
      affectedEndpoints: ['api_006'],
      duration: 7200, // seconds
      impact: 'Performance degraded for analytics features',
      assignedTo: 'DevOps Team'
    },
    {
      id: 'incident_002',
      timestamp: Date.now() - 6 * 60 * 60 * 1000,
      severity: 'MEDIUM',
      service: 'Assembly AI Transcription',
      title: 'Intermittent transcription failures',
      status: 'RESOLVED',
      affectedEndpoints: ['api_003'],
      duration: 1800,
      impact: 'Some video transcriptions failed',
      assignedTo: 'Content Team',
      resolution: 'API provider issue resolved'
    },
    {
      id: 'incident_003',
      timestamp: Date.now() - 12 * 60 * 60 * 1000,
      severity: 'LOW',
      service: 'Database Service',
      title: 'Slow query performance',
      status: 'RESOLVED',
      affectedEndpoints: ['api_006'],
      duration: 3600,
      impact: 'Dashboard loading delays',
      assignedTo: 'Database Team',
      resolution: 'Query optimization applied'
    }
  ]);

  const [apiTrafficTrends, setApiTrafficTrends] = useState([]);
  const [serviceDependencies, setServiceDependencies] = useState([
    { source: 'Content Processing', target: 'Agent Orchestration', strength: 0.8, type: 'DATA_FLOW' },
    { source: 'Content Processing', target: 'Notification Service', strength: 0.6, type: 'EVENT' },
    { source: 'Agent Orchestration', target: 'Analytics Engine', strength: 0.9, type: 'METRICS' },
    { source: 'Agent Orchestration', target: 'Security Monitor', strength: 0.4, type: 'AUDIT' },
    { source: 'Analytics Engine', target: 'Database Service', strength: 0.95, type: 'STORAGE' },
    { source: 'Notification Service', target: 'Content Processing', strength: 0.3, type: 'FEEDBACK' }
  ]);

  const generateApiTrafficTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        requests: Math.floor(Math.random() * 200) + 100,
        errors: Math.floor(Math.random() * 10),
        latency: Math.floor(Math.random() * 100) + 50,
        throughput: Math.floor(Math.random() * 500) + 200,
        rate_limit_hits: Math.floor(Math.random() * 5)
      });
    }
    return data;
  };

  useEffect(() => {
    setApiTrafficTrends(generateApiTrafficTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update API endpoints
      setApiEndpoints(prev => prev.map(api => {
        let newLatency = api.avgLatency;
        let newErrorRate = api.errorRate;
        let newRpm = api.requestsPerMinute;
        
        if (api.status === 'HEALTHY' || api.status === 'DEGRADED') {
          newLatency = Math.max(20, Math.min(800, api.avgLatency + (Math.random() - 0.5) * 50));
          newErrorRate = Math.max(0, Math.min(10, api.errorRate + (Math.random() - 0.5) * 0.5));
          newRpm = Math.max(1, Math.min(300, api.requestsPerMinute + (Math.random() - 0.5) * 20));
        }

        return {
          ...api,
          avgLatency: newLatency,
          errorRate: newErrorRate,
          requestsPerMinute: newRpm,
          lastRequest: api.status !== 'CRITICAL' ? Date.now() : api.lastRequest,
          rateLimitUsed: Math.min(api.rateLimit, api.rateLimitUsed + Math.floor(Math.random() * 5))
        };
      }));

      // Update microservices
      setMicroservices(prev => prev.map(service => {
        let newCpu = service.cpu;
        let newMemory = service.memory;
        let newThroughput = service.throughput;

        if (service.status === 'RUNNING') {
          newCpu = Math.max(5, Math.min(95, service.cpu + (Math.random() - 0.5) * 10));
          newMemory = Math.max(20, Math.min(500, service.memory + (Math.random() - 0.5) * 20));
          newThroughput = Math.max(10, Math.min(400, service.throughput + (Math.random() - 0.5) * 30));
        }

        return {
          ...service,
          cpu: newCpu,
          memory: newMemory,
          throughput: newThroughput
        };
      }));

      // Update metrics
      setApiMetrics(prev => ({
        ...prev,
        requestsToday: prev.requestsToday + Math.floor(Math.random() * 10),
        avgResponseTime: Math.max(50, Math.min(300, prev.avgResponseTime + (Math.random() - 0.5) * 10)),
        errorRate: Math.max(0.1, Math.min(2, prev.errorRate + (Math.random() - 0.5) * 0.1))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY':
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'GOOD':
      case 'DEGRADED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'FAIR':
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'RUNNING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'STANDBY': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getHealthColor = (health) => {
    switch (health) {
      case 'EXCELLENT': return 'text-green-400';
      case 'HEALTHY': case 'GOOD': return 'text-blue-400';
      case 'FAIR': return 'text-yellow-400';
      case 'POOR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getLatencyColor = (latency) => {
    if (latency > 500) return 'text-red-400';
    if (latency > 200) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getMethodColor = (method) => {
    switch (method) {
      case 'GET': return 'text-green-400';
      case 'POST': return 'text-blue-400';
      case 'PUT': return 'text-yellow-400';
      case 'DELETE': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatBytes = (mb) => {
    if (mb >= 1000) return `${(mb / 1000).toFixed(1)}GB`;
    return `${mb.toFixed(1)}MB`;
  };

  const formatUptime = (hours) => {
    const days = Math.floor(hours / 24);
    const remainingHours = Math.floor(hours % 24);
    return `${days}d ${remainingHours}h`;
  };

  const formatDuration = (seconds) => {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🔗 API MANAGEMENT & MICROSERVICES CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {apiMetrics.servicesHealthy}/{apiMetrics.servicesTotal} HEALTHY
          </div>
          <div className="text-sm text-gray-400 font-mono">
            API monitoring & service orchestration
          </div>
        </div>
      </div>

      {/* API Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">REQUESTS TODAY</div>
              <div className="text-2xl font-bold text-green-100">
                {apiMetrics.requestsToday.toLocaleString()}
              </div>
              <div className="text-xs text-green-300">
                {apiMetrics.peakRpm} peak RPM
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">AVG RESPONSE TIME</div>
              <div className="text-2xl font-bold text-blue-100">
                {apiMetrics.avgResponseTime}ms
              </div>
              <div className="text-xs text-blue-300">
                {apiMetrics.activeEndpoints} endpoints
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ERROR RATE</div>
              <div className="text-2xl font-bold text-purple-100">
                {apiMetrics.errorRate.toFixed(2)}%
              </div>
              <div className="text-xs text-purple-300">
                {apiMetrics.totalErrors.toLocaleString()} total errors
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">UPTIME</div>
              <div className="text-2xl font-bold text-orange-100">
                {apiMetrics.uptimePercentage}%
              </div>
              <div className="text-xs text-orange-300">
                {formatBytes(apiMetrics.dataTransfer)} transferred
              </div>
            </div>
            <div className="text-3xl opacity-60">⏱️</div>
          </div>
        </div>
      </div>

      {/* API Endpoints and Traffic Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* API Endpoints Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔗 API ENDPOINTS STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {apiEndpoints.map((api) => (
              <div key={api.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{api.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(api.status)}`}>
                      {api.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono ${getMethodColor(api.method)}`}>
                      {api.method}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2 font-mono">
                  {api.endpoint}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Latency</div>
                    <div className={`font-bold ${getLatencyColor(api.avgLatency)}`}>
                      {api.avgLatency.toFixed(0)}ms
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">RPM</div>
                    <div className="text-cyan-400 font-bold">{api.requestsPerMinute.toFixed(0)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Error Rate</div>
                    <div className={`font-bold ${api.errorRate > 1 ? 'text-red-400' : 'text-green-400'}`}>
                      {api.errorRate.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Rate Limit</div>
                    <div className="text-yellow-400">
                      {api.rateLimitUsed}/{api.rateLimit}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className="text-green-400">{api.uptime.toFixed(2)}%</div>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Last Request:</span>
                    <span className="text-purple-400">{formatTime(api.lastRequest)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Version:</span>
                    <span className="text-blue-400">{api.version}</span>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="text-xs text-gray-400 mb-1">Rate Limit Usage</div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        (api.rateLimitUsed / api.rateLimit) > 0.8 ? 'bg-red-400' :
                        (api.rateLimitUsed / api.rateLimit) > 0.6 ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`}
                      style={{ width: `${(api.rateLimitUsed / api.rateLimit) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* API Traffic Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 API TRAFFIC TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={apiTrafficTrends}>
              <defs>
                <linearGradient id="requestsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="errorsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="requests" 
                stackId="1"
                stroke="#10B981" 
                fill="url(#requestsGradient)" 
                name="Requests"
              />
              <Area 
                type="monotone" 
                dataKey="errors" 
                stackId="1"
                stroke="#EF4444" 
                fill="url(#errorsGradient)" 
                name="Errors"
              />
              <Line 
                type="monotone" 
                dataKey="latency" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Latency (ms)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Microservices and Service Dependencies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Microservices Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🏗️ MICROSERVICES STATUS
          </h3>
          <div className="space-y-3">
            {microservices.map((service) => (
              <div key={service.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{service.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(service.status)}`}>
                      {service.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {service.type}
                    </span>
                  </div>
                  <div className={`text-lg ${getHealthColor(service.health)}`}>
                    {service.health === 'EXCELLENT' ? '💚' :
                     service.health === 'HEALTHY' || service.health === 'GOOD' ? '🟢' :
                     service.health === 'FAIR' ? '🟡' : '🔴'}
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Instances</div>
                    <div className="text-cyan-400 font-bold">{service.instances}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">CPU</div>
                    <div className={`font-bold ${service.cpu > 80 ? 'text-red-400' : service.cpu > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {service.cpu.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Memory</div>
                    <div className="text-blue-400 font-bold">{formatBytes(service.memory)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Throughput</div>
                    <div className="text-purple-400 font-bold">{service.throughput.toFixed(0)}/s</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className="text-green-400">{formatUptime(service.uptime)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Error Rate</div>
                    <div className={`${service.errorRate > 2 ? 'text-red-400' : 'text-green-400'}`}>
                      {service.errorRate.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Version:</span>
                    <span className="text-blue-400">{service.version}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dependencies:</span>
                    <span className="text-purple-400">{service.dependencies.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Dependencies */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🕸️ SERVICE DEPENDENCY MAP
          </h3>
          <div className="space-y-3">
            {serviceDependencies.map((dep, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-blue-400">{dep.source}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-purple-400">{dep.target}</span>
                  </div>
                  <span className="text-xs text-green-400">{(dep.strength * 100).toFixed(0)}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">{dep.type}</span>
                  <div className="w-32 bg-gray-600 rounded-full h-1">
                    <div 
                      className="bg-green-400 h-1 rounded-full" 
                      style={{ width: `${dep.strength * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-bold text-white mb-3">Service Mesh Overview</h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Total Services</div>
                <div className="text-cyan-400 font-bold">{microservices.length}</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Dependencies</div>
                <div className="text-purple-400 font-bold">{serviceDependencies.length}</div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Total Instances</div>
                <div className="text-green-400 font-bold">
                  {microservices.reduce((sum, service) => sum + service.instances, 0)}
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-gray-400">Avg CPU Usage</div>
                <div className="text-yellow-400 font-bold">
                  {(microservices.reduce((sum, service) => sum + service.cpu, 0) / microservices.length).toFixed(1)}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Management */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚨 INCIDENT MANAGEMENT
        </h3>
        
        {incidentHistory.length === 0 ? (
          <div className="text-green-400 text-center py-8">
            No incidents reported ✅
          </div>
        ) : (
          <div className="space-y-4">
            {incidentHistory.map((incident) => (
              <div key={incident.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{incident.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(incident.severity)}`}>
                      {incident.severity}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${
                      incident.status === 'RESOLVED' ? getStatusColor('HEALTHY') :
                      incident.status === 'INVESTIGATING' ? 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30' :
                      'text-blue-400 bg-blue-400/20 border-blue-400/30'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(incident.timestamp)}
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-2">{incident.impact}</div>
                
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <span className="text-gray-400">Service: </span>
                    <span className="text-cyan-400">{incident.service}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration: </span>
                    <span className="text-purple-400">{formatDuration(incident.duration)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Assigned to: </span>
                    <span className="text-green-400">{incident.assignedTo}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Endpoints: </span>
                    <span className="text-blue-400">{incident.affectedEndpoints.length}</span>
                  </div>
                </div>

                {incident.resolution && (
                  <div className="text-xs">
                    <span className="text-gray-400">Resolution: </span>
                    <span className="text-green-400">{incident.resolution}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default APIManagementCenter;