import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Server, GitBranch, Layers, Cloud, Database, Monitor, AlertTriangle, CheckCircle, Clock, Zap, Activity, TrendingUp, Target } from 'lucide-react';

const InfrastructureDevOpsCenter = () => {
  const [infraMetrics, setInfraMetrics] = useState({
    uptime: 99.97,
    latency: 23.4,
    throughput: 1247,
    errorRate: 0.12,
    sloCompliance: 99.8,
    apdexScore: 0.94
  });

  const [services, setServices] = useState([
    {
      name: 'Mission Control API',
      status: 'healthy',
      uptime: 99.99,
      latency: 45,
      throughput: 234,
      errorRate: 0.01,
      replicas: 3,
      version: 'v2.1.4',
      environment: 'production'
    },
    {
      name: 'Agent Gateway',
      status: 'healthy', 
      uptime: 99.95,
      latency: 12,
      throughput: 567,
      errorRate: 0.05,
      replicas: 5,
      version: 'v1.8.2',
      environment: 'production'
    },
    {
      name: 'Content Processor',
      status: 'warning',
      uptime: 98.7,
      latency: 156,
      throughput: 89,
      errorRate: 1.2,
      replicas: 2,
      version: 'v3.0.1',
      environment: 'production'
    },
    {
      name: 'Analytics Engine',
      status: 'healthy',
      uptime: 99.8,
      latency: 78,
      throughput: 123,
      errorRate: 0.3,
      replicas: 3,
      version: 'v2.5.0',
      environment: 'production'
    },
    {
      name: 'Security Monitor',
      status: 'healthy',
      uptime: 100,
      latency: 34,
      throughput: 445,
      errorRate: 0.0,
      replicas: 4,
      version: 'v1.9.3',
      environment: 'production'
    }
  ]);

  const [cicdPipelines, setCicdPipelines] = useState([
    {
      name: 'mission-control-deploy',
      status: 'success',
      duration: 142,
      branch: 'main',
      commit: 'd0812de',
      timestamp: new Date(Date.now() - 600000),
      stage: 'deployed',
      environment: 'production'
    },
    {
      name: 'agent-lifecycle-update',
      status: 'running',
      duration: 87,
      branch: 'feature/lifecycle-v2',
      commit: 'f6937ba',
      timestamp: new Date(Date.now() - 300000),
      stage: 'testing',
      environment: 'staging'
    },
    {
      name: 'security-enhancement',
      status: 'failed',
      duration: 203,
      branch: 'hotfix/security-patch',
      commit: '2558029',
      timestamp: new Date(Date.now() - 900000),
      stage: 'build',
      environment: 'development'
    },
    {
      name: 'cost-optimization',
      status: 'pending',
      duration: 0,
      branch: 'feature/cost-analysis',
      commit: 'cd9c6aa',
      timestamp: new Date(),
      stage: 'queue',
      environment: 'development'
    }
  ]);

  const [infraAlerts, setInfraAlerts] = useState([
    {
      id: 'ALERT-001',
      severity: 'warning',
      service: 'Content Processor',
      message: 'High memory usage detected (89%)',
      timestamp: new Date(),
      status: 'active',
      slo: 'Latency SLO'
    },
    {
      id: 'ALERT-002',
      severity: 'info',
      service: 'Agent Gateway',
      message: 'Auto-scaling event triggered - added 2 replicas',
      timestamp: new Date(Date.now() - 300000),
      status: 'resolved',
      slo: 'Availability SLO'
    },
    {
      id: 'ALERT-003',
      severity: 'critical',
      service: 'Database Cluster',
      message: 'Connection pool exhaustion detected',
      timestamp: new Date(Date.now() - 600000),
      status: 'resolved',
      slo: 'Error Rate SLO'
    }
  ]);

  const [sloMetrics, setSloMetrics] = useState([
    {
      name: 'API Availability SLO',
      target: 99.9,
      current: 99.97,
      budget: 43.2, // minutes remaining
      status: 'healthy',
      period: '30d'
    },
    {
      name: 'Response Time SLO',
      target: 200,
      current: 156,
      budget: 78.5, // % remaining
      status: 'warning',
      period: '7d'
    },
    {
      name: 'Error Rate SLO',
      target: 0.5,
      current: 0.12,
      budget: 92.1, // % remaining
      status: 'healthy',
      period: '30d'
    },
    {
      name: 'Throughput SLO',
      target: 1000,
      current: 1247,
      budget: 124.7, // % of target
      status: 'healthy',
      period: '24h'
    }
  ]);

  const [metricsHistory, setMetricsHistory] = useState([]);

  // Generate historical metrics
  useEffect(() => {
    const generateMetricsHistory = () => {
      const history = [];
      for (let i = 23; i >= 0; i--) {
        const time = new Date();
        time.setHours(time.getHours() - i);
        
        history.push({
          time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          latency: 20 + Math.random() * 30 + Math.sin(i / 4) * 10,
          throughput: 800 + Math.random() * 400 + Math.sin(i / 6) * 200,
          errorRate: Math.random() * 0.5,
          cpuUsage: 40 + Math.random() * 30 + Math.sin(i / 3) * 15,
          memoryUsage: 60 + Math.random() * 20 + Math.sin(i / 5) * 10
        });
      }
      return history;
    };

    setMetricsHistory(generateMetricsHistory());
  }, []);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update infrastructure metrics
      setInfraMetrics(prev => ({
        ...prev,
        latency: Math.max(10, Math.min(100, prev.latency + (Math.random() - 0.5) * 5)),
        throughput: Math.max(800, Math.min(1500, prev.throughput + (Math.random() - 0.5) * 50)),
        errorRate: Math.max(0, Math.min(2, prev.errorRate + (Math.random() - 0.5) * 0.1)),
        uptime: Math.max(99.8, Math.min(100, prev.uptime + (Math.random() - 0.3) * 0.01))
      }));

      // Update service statuses
      setServices(prev => prev.map(service => {
        if (Math.random() > 0.95) {
          return {
            ...service,
            latency: Math.max(5, Math.min(200, service.latency + (Math.random() - 0.5) * 10)),
            throughput: Math.max(50, Math.min(600, service.throughput + (Math.random() - 0.5) * 20)),
            errorRate: Math.max(0, Math.min(3, service.errorRate + (Math.random() - 0.8) * 0.2))
          };
        }
        return service;
      }));

      // Occasionally update pipeline statuses
      if (Math.random() > 0.9) {
        setCicdPipelines(prev => prev.map(pipeline => {
          if (pipeline.status === 'running') {
            const shouldComplete = Math.random() > 0.7;
            return {
              ...pipeline,
              status: shouldComplete ? (Math.random() > 0.8 ? 'failed' : 'success') : 'running',
              duration: pipeline.duration + 15,
              stage: shouldComplete ? 'deployed' : pipeline.stage
            };
          }
          return pipeline;
        }));
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getServiceStatusColor = (status) => {
    switch (status) {
      case 'healthy': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'degraded': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getPipelineStatusColor = (status) => {
    switch (status) {
      case 'success': return '#10B981';
      case 'running': return '#3B82F6';
      case 'failed': return '#EF4444';
      case 'pending': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getSloStatusColor = (status) => {
    switch (status) {
      case 'healthy': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'violated': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const serviceDistribution = [
    { name: 'API Gateway', value: 34, color: '#3B82F6' },
    { name: 'Microservices', value: 28, color: '#10B981' },
    { name: 'Databases', value: 22, color: '#8B5CF6' },
    { name: 'Cache Layer', value: 16, color: '#F59E0B' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Server className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">INFRASTRUCTURE & DEVOPS CENTER</h1>
            <p className="text-gray-400">Real-time infrastructure observability, SRE metrics, and DevOps pipeline monitoring</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{infraMetrics.uptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">UPTIME</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{infraMetrics.latency.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">LATENCY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{infraMetrics.sloCompliance.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">SLO COMPLIANCE</div>
          </div>
        </div>
      </div>

      {/* SLO Overview */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {sloMetrics.map((slo, index) => (
          <div key={index} className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-5 h-5" style={{color: getSloStatusColor(slo.status)}} />
              <span className="text-xs px-2 py-1 rounded-full" style={{ 
                backgroundColor: `${getSloStatusColor(slo.status)}20`, 
                color: getSloStatusColor(slo.status) 
              }}>
                {slo.status.toUpperCase()}
              </span>
            </div>
            <div className="text-sm font-semibold text-white mb-1">{slo.name}</div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Current</span>
              <span className="text-white">{slo.current}{slo.name.includes('Time') ? 'ms' : slo.name.includes('Rate') ? '%' : slo.name.includes('Throughput') ? 'rps' : '%'}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Target</span>
              <span className="text-white">{slo.target}{slo.name.includes('Time') ? 'ms' : slo.name.includes('Rate') ? '%' : slo.name.includes('Throughput') ? 'rps' : '%'}</span>
            </div>
            <div className="mt-2 bg-gray-800 rounded-full h-1.5">
              <div 
                className="rounded-full h-1.5 transition-all duration-500"
                style={{
                  width: `${Math.min(100, slo.budget)}%`,
                  backgroundColor: getSloStatusColor(slo.status)
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Service Health */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Monitor className="w-5 h-5 mr-2 text-green-400" />
            SERVICE HEALTH
          </h3>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getServiceStatusColor(service.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{service.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getServiceStatusColor(service.status)}20`, 
                      color: getServiceStatusColor(service.status) 
                    }}>
                      {service.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">v{service.version}</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime</span>
                    <span className="text-green-400">{service.uptime.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-white">{service.latency.toFixed(0)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RPS</span>
                    <span className="text-blue-400">{service.throughput}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Errors</span>
                    <span className={service.errorRate > 1 ? 'text-red-400' : 'text-green-400'}>
                      {service.errorRate.toFixed(2)}%
                    </span>
                  </div>
                </div>
                
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Replicas: {service.replicas}</span>
                  <span className="text-purple-400">{service.environment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CI/CD Pipelines */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <GitBranch className="w-5 h-5 mr-2 text-blue-400" />
            CI/CD PIPELINES
          </h3>
          <div className="space-y-3">
            {cicdPipelines.map((pipeline, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{pipeline.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getPipelineStatusColor(pipeline.status)}20`, 
                      color: getPipelineStatusColor(pipeline.status) 
                    }}>
                      {pipeline.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  <div className="flex justify-between">
                    <span>Branch: <span className="text-blue-400">{pipeline.branch}</span></span>
                    <span>Commit: <span className="text-white">{pipeline.commit}</span></span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Stage: <span className="text-purple-400">{pipeline.stage}</span></span>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 text-gray-400" />
                    <span className="text-white">{pipeline.duration}s</span>
                  </div>
                </div>
                
                <div className="mt-2 text-xs text-gray-500">
                  {pipeline.timestamp.toLocaleTimeString()} • {pipeline.environment}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            INFRASTRUCTURE ALERTS
          </h3>
          <div className="space-y-3">
            {infraAlerts.map(alert => (
              <div key={alert.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getSeverityColor(alert.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{alert.service}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getSeverityColor(alert.severity)}20`, 
                      color: getSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'active' ? 'bg-red-900 text-red-400' : 'bg-green-900 text-green-400'
                    }`}>
                      {alert.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mb-2">{alert.message}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{alert.slo}</span>
                  <span className="text-gray-500">
                    {alert.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Infrastructure Metrics Timeline */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">INFRASTRUCTURE METRICS (24H)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={metricsHistory.slice(-12)}>
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
                dataKey="latency" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Latency (ms)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="throughput" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Throughput (RPS)"
                dot={false}
                yAxisId="right"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Resource Utilization */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">RESOURCE UTILIZATION</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={metricsHistory.slice(-12)}>
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
              <Area 
                type="monotone" 
                dataKey="cpuUsage" 
                stackId="1"
                stroke="#EF4444" 
                fill="#EF4444"
                fillOpacity={0.6}
                name="CPU %"
              />
              <Area 
                type="monotone" 
                dataKey="memoryUsage" 
                stackId="1"
                stroke="#8B5CF6" 
                fill="#8B5CF6"
                fillOpacity={0.6}
                name="Memory %"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Service Distribution & DevOps Metrics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Service Distribution */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">SERVICE DISTRIBUTION</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={serviceDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {serviceDistribution.map((entry, index) => (
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
            <div className="w-2/5 space-y-3 mt-4">
              {serviceDistribution.map((service, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: service.color }}
                    />
                    <span className="text-gray-400 text-sm">{service.name}</span>
                  </div>
                  <span className="text-white font-semibold">{service.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DevOps KPIs */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">DEVOPS KPIs</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Deployment Frequency</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
              <div className="text-xl font-bold text-white">4.2/day</div>
              <div className="text-xs text-green-400">+12% vs last week</div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Lead Time</span>
                <Clock className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-xl font-bold text-white">2.3h</div>
              <div className="text-xs text-green-400">-23% improvement</div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">MTTR</span>
                <Zap className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-xl font-bold text-white">12.4min</div>
              <div className="text-xs text-green-400">Target: &lt;15min</div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Change Fail Rate</span>
                <Activity className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-xl font-bold text-white">2.1%</div>
              <div className="text-xs text-green-400">Target: &lt;5%</div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Infrastructure Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  Scale Services
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  Deploy
                </button>
                <button className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-xs transition-colors">
                  Rollback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureDevOpsCenter;