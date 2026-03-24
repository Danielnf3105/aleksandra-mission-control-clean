// Service Mesh Operations Center - 2026 Istio/Linkerd Kubernetes Monitoring
// Based on Istio telemetry v2, Linkerd observability, and modern service mesh standards
import { useState, useEffect } from 'react';
import { 
  Network, Shield, Activity, Zap, Target, Eye, AlertTriangle, CheckCircle,
  Clock, TrendingUp, TrendingDown, BarChart3, Gauge, Settings, Globe,
  Lock, Key, RefreshCw, GitBranch, Package, Server, Database, Wifi,
  ArrowRight, ArrowLeft, Minus, Plus, Play, Pause, StopCircle,
  Users, Code2, Monitor, Cpu, MemoryStick, HardDrive, Info
} from 'lucide-react';

export default function ServiceMeshOperationsCenter() {
  const [meshData, setMeshData] = useState({
    currentTime: new Date().toISOString(),
    meshType: 'Istio',
    meshVersion: 'v1.20.1',
    meshStatus: 'HEALTHY',
    totalServices: 34,
    totalWorkloads: 67,
    activePods: 156,
    services: [
      {
        name: 'content-processing-service',
        namespace: 'default',
        status: 'HEALTHY',
        replicas: 3,
        successRate: 99.7,
        p50Latency: 89,
        p95Latency: 234,
        p99Latency: 567,
        requestRate: 847.3,
        errorRate: 0.12,
        mtls: 'ENABLED',
        circuitBreakerState: 'CLOSED',
        retryRate: 2.4,
        upstreams: ['user-service', 'auth-service', 'database-service'],
        downstreams: ['notification-service', 'analytics-service']
      },
      {
        name: 'user-service',
        namespace: 'default',
        status: 'WARNING',
        replicas: 2,
        successRate: 94.2,
        p50Latency: 156,
        p95Latency: 423,
        p99Latency: 892,
        requestRate: 523.7,
        errorRate: 5.8,
        mtls: 'ENABLED',
        circuitBreakerState: 'HALF_OPEN',
        retryRate: 8.2,
        upstreams: ['auth-service', 'database-service'],
        downstreams: ['content-processing-service', 'recommendation-service']
      },
      {
        name: 'auth-service',
        namespace: 'security',
        status: 'HEALTHY',
        replicas: 4,
        successRate: 99.9,
        p50Latency: 45,
        p95Latency: 123,
        p99Latency: 234,
        requestRate: 1247.8,
        errorRate: 0.05,
        mtls: 'STRICT',
        circuitBreakerState: 'CLOSED',
        retryRate: 0.8,
        upstreams: ['database-service', 'ldap-service'],
        downstreams: ['user-service', 'content-processing-service', 'admin-service']
      }
    ],
    meshTopology: {
      totalConnections: 89,
      activeConnections: 67,
      connectionSuccess: 98.7,
      tlsConnections: 89,
      plaintextConnections: 0,
      mtlsEnforcement: 100,
      certificateExpiry: [
        { service: 'content-processing-service', daysRemaining: 67 },
        { service: 'user-service', daysRemaining: 23 },
        { service: 'auth-service', daysRemaining: 89 }
      ]
    },
    istioConfig: {
      virtualServices: 12,
      destinationRules: 15,
      serviceEntries: 4,
      gateways: 3,
      authorizationPolicies: 8,
      peerAuthentications: 6,
      requestAuthentications: 4,
      envoyFilters: 2
    },
    linkerdMetrics: {
      proxyVersion: 'stable-2.14.1',
      proxyInjection: 94.7,
      meshTlsRatio: 100,
      successRate: 99.2,
      rps: 2847.3,
      p50Latency: 67,
      p95Latency: 189,
      p99Latency: 445
    },
    telemetryPipeline: {
      prometheus: {
        status: 'OPERATIONAL',
        scrapeTargets: 156,
        metricsIngestionRate: 4567,
        storageUsed: '12.4 GB',
        retentionPeriod: '15d'
      },
      jaeger: {
        status: 'OPERATIONAL',
        tracesPerSecond: 892,
        spanIngestionRate: 12456,
        storageUsed: '8.7 GB',
        samplingRate: 1.0
      },
      grafana: {
        status: 'OPERATIONAL',
        dashboards: 24,
        activeUsers: 12,
        alertRules: 34,
        lastUpdate: '2m ago'
      }
    },
    alerts: [
      {
        time: '07:08',
        severity: 'WARNING',
        service: 'user-service',
        type: 'PERFORMANCE',
        message: 'High error rate detected: 5.8% (threshold: 5.0%)',
        status: 'ACTIVE',
        recommendation: 'Check upstream dependencies and enable circuit breaker'
      },
      {
        time: '07:05',
        severity: 'INFO',
        service: 'auth-service',
        type: 'CERTIFICATE',
        message: 'mTLS certificate renewal completed successfully',
        status: 'RESOLVED',
        recommendation: 'Verify certificate rotation across all workloads'
      },
      {
        time: '07:02',
        severity: 'CRITICAL',
        service: 'content-processing-service',
        type: 'CIRCUIT_BREAKER',
        message: 'Circuit breaker opened due to upstream failures',
        status: 'RESOLVED',
        recommendation: 'Circuit breaker automatically closed after recovery'
      }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Mesh Health', value: 96.8, unit: '%', trend: 'stable' },
        { metric: 'Success Rate', value: 97.9, unit: '%', trend: 'improving' },
        { metric: 'P95 Latency', value: 234, unit: 'ms', trend: 'stable' },
        { metric: 'mTLS Coverage', value: 100, unit: '%', trend: 'stable' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMeshData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'P95 Latency' 
              ? Math.max(150, Math.min(400, metric.value + (Math.random() - 0.5) * 30))
              : metric.metric === 'Success Rate'
              ? Math.max(95, Math.min(100, metric.value + (Math.random() - 0.5) * 1))
              : Math.max(90, Math.min(100, metric.value + (Math.random() - 0.5) * 0.8))
          }))
        },
        services: prev.services.map(service => ({
          ...service,
          p95Latency: Math.max(100, Math.min(600, service.p95Latency + (Math.random() - 0.5) * 40)),
          requestRate: Math.max(200, Math.min(1500, service.requestRate + (Math.random() - 0.5) * 50))
        }))
      }));
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': case 'OPERATIONAL': case 'ENABLED': case 'STRICT': case 'CLOSED': case 'RESOLVED': return 'text-green-400';
      case 'WARNING': case 'HALF_OPEN': case 'ACTIVE': return 'text-yellow-400';
      case 'CRITICAL': case 'ERROR': case 'OPEN': return 'text-red-400';
      case 'INFO': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'HEALTHY': case 'OPERATIONAL': case 'ENABLED': case 'STRICT': case 'CLOSED': case 'RESOLVED': return 'bg-green-400/20';
      case 'WARNING': case 'HALF_OPEN': case 'ACTIVE': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'ERROR': case 'OPEN': return 'bg-red-400/20';
      case 'INFO': return 'bg-blue-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getMeshIcon = (meshType) => {
    const iconClass = "w-5 h-5";
    switch (meshType) {
      case 'Istio': return <Network className={`${iconClass} text-blue-400`} />;
      case 'Linkerd': return <Network className={`${iconClass} text-green-400`} />;
      case 'Consul Connect': return <Network className={`${iconClass} text-purple-400`} />;
      default: return <Network className={`${iconClass} text-gray-400`} />;
    }
  };

  const getCircuitBreakerIcon = (state) => {
    switch (state) {
      case 'CLOSED': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'HALF_OPEN': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'OPEN': return <StopCircle className="w-4 h-4 text-red-400" />;
      default: return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Service Mesh Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Network className="w-8 h-8 text-blue-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Service Mesh Operations Center</h2>
              <div className="text-sm text-gray-400">{meshData.meshType} {meshData.meshVersion} • mTLS Enforcement & Observability</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(meshData.meshStatus)} ${getStatusBg(meshData.meshStatus)}`}>
              {meshData.meshStatus}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Services in Mesh</div>
            <div className="text-2xl font-mono text-blue-400 font-bold">
              {meshData.totalServices}
            </div>
            <div className="text-xs text-emerald-400">
              {meshData.totalWorkloads} workloads • {meshData.activePods} pods
            </div>
          </div>
        </div>
        
        {/* Real-Time Service Mesh Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {meshData.realTimeMetrics.performance.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(metric.metric.includes('Latency') ? 0 : 1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.metric === 'P95 Latency' 
                      ? (metric.value < 200 ? 'bg-green-400' : metric.value < 400 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.value >= 98 ? 'bg-green-400' : metric.value >= 90 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'P95 Latency' 
                      ? `${Math.min(100, (500 - metric.value) / 500 * 100)}%`
                      : `${Math.min(100, metric.value)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Service Performance & Health */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Service Performance</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {meshData.services.filter(s => s.status === 'HEALTHY').length}/{meshData.services.length} HEALTHY
            </div>
          </div>
          
          <div className="space-y-4">
            {meshData.services.map((service, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Server className="w-4 h-4 text-blue-400" />
                    <div>
                      <h4 className="text-white font-medium">{service.name}</h4>
                      <div className="text-xs text-gray-400">{service.namespace} • {service.replicas} replicas</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(service.status)} ${getStatusBg(service.status)}`}>
                      {service.status}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lock className={`w-4 h-4 ${service.mtls === 'STRICT' ? 'text-green-400' : 'text-blue-400'}`} />
                    <span className="text-xs text-gray-400">{service.mtls}</span>
                    {getCircuitBreakerIcon(service.circuitBreakerState)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Success Rate</div>
                    <div className={`font-mono text-lg ${service.successRate > 99 ? 'text-green-400' : service.successRate > 95 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {service.successRate.toFixed(1)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">P95 Latency</div>
                    <div className={`font-mono text-lg ${service.p95Latency < 200 ? 'text-green-400' : service.p95Latency < 400 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {service.p95Latency}ms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Request Rate</div>
                    <div className="text-white font-mono text-lg">{formatNumber(service.requestRate)} rps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Error Rate</div>
                    <div className={`font-mono text-lg ${service.errorRate < 1 ? 'text-green-400' : service.errorRate < 5 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {service.errorRate.toFixed(2)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Retry Rate</div>
                    <div className="text-purple-400 font-mono text-lg">{service.retryRate.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Circuit Breaker</div>
                    <div className={`text-xs font-semibold ${getStatusColor(service.circuitBreakerState)}`}>
                      {service.circuitBreakerState}
                    </div>
                  </div>
                </div>

                {/* Service Dependencies */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400">Upstreams:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {service.upstreams.map((upstream, idx) => (
                        <span key={idx} className="px-1 py-0.5 text-xs bg-blue-400/20 text-blue-400 rounded">
                          {upstream}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Downstreams:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {service.downstreams.map((downstream, idx) => (
                        <span key={idx} className="px-1 py-0.5 text-xs bg-green-400/20 text-green-400 rounded">
                          {downstream}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* mTLS & Security Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">mTLS & Security</h3>
          </div>
          
          {/* Mesh Security Overview */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Mesh Security Status</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Total Connections</span>
                <span className="text-blue-400 font-mono">{meshData.meshTopology.totalConnections}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">TLS Connections</span>
                <span className="text-green-400 font-mono">{meshData.meshTopology.tlsConnections}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">mTLS Enforcement</span>
                <span className="text-emerald-400 font-mono">{meshData.meshTopology.mtlsEnforcement}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Connection Success</span>
                <span className="text-green-400 font-mono">{meshData.meshTopology.connectionSuccess}%</span>
              </div>
            </div>
          </div>

          {/* Certificate Expiry */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Certificate Expiry</div>
            <div className="space-y-2">
              {meshData.meshTopology.certificateExpiry.map((cert, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
                  <span className="text-sm text-gray-300 truncate">{cert.service}</span>
                  <div className={`text-xs font-semibold ${
                    cert.daysRemaining > 30 ? 'text-green-400' :
                    cert.daysRemaining > 7 ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {cert.daysRemaining}d
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Istio Configuration */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Istio Configuration</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-gray-400">VirtualServices:</span>
                <span className="text-blue-400 ml-1">{meshData.istioConfig.virtualServices}</span>
              </div>
              <div>
                <span className="text-gray-400">DestinationRules:</span>
                <span className="text-green-400 ml-1">{meshData.istioConfig.destinationRules}</span>
              </div>
              <div>
                <span className="text-gray-400">Gateways:</span>
                <span className="text-purple-400 ml-1">{meshData.istioConfig.gateways}</span>
              </div>
              <div>
                <span className="text-gray-400">AuthZ Policies:</span>
                <span className="text-orange-400 ml-1">{meshData.istioConfig.authorizationPolicies}</span>
              </div>
              <div>
                <span className="text-gray-400">PeerAuth:</span>
                <span className="text-cyan-400 ml-1">{meshData.istioConfig.peerAuthentications}</span>
              </div>
              <div>
                <span className="text-gray-400">RequestAuth:</span>
                <span className="text-pink-400 ml-1">{meshData.istioConfig.requestAuthentications}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Telemetry Pipeline Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart3 className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Telemetry Pipeline</h3>
          </div>
          
          <div className="space-y-4">
            {/* Prometheus */}
            <div className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Gauge className="w-4 h-4 text-orange-400" />
                  <span className="text-white font-medium">Prometheus</span>
                </div>
                <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(meshData.telemetryPipeline.prometheus.status)} ${getStatusBg(meshData.telemetryPipeline.prometheus.status)}`}>
                  {meshData.telemetryPipeline.prometheus.status}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400">Targets:</span>
                  <span className="text-blue-400 ml-1">{meshData.telemetryPipeline.prometheus.scrapeTargets}</span>
                </div>
                <div>
                  <span className="text-gray-400">Ingestion:</span>
                  <span className="text-green-400 ml-1">{formatNumber(meshData.telemetryPipeline.prometheus.metricsIngestionRate)}/s</span>
                </div>
                <div>
                  <span className="text-gray-400">Storage:</span>
                  <span className="text-purple-400 ml-1">{meshData.telemetryPipeline.prometheus.storageUsed}</span>
                </div>
                <div>
                  <span className="text-gray-400">Retention:</span>
                  <span className="text-cyan-400 ml-1">{meshData.telemetryPipeline.prometheus.retentionPeriod}</span>
                </div>
              </div>
            </div>

            {/* Jaeger */}
            <div className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <GitBranch className="w-4 h-4 text-blue-400" />
                  <span className="text-white font-medium">Jaeger</span>
                </div>
                <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(meshData.telemetryPipeline.jaeger.status)} ${getStatusBg(meshData.telemetryPipeline.jaeger.status)}`}>
                  {meshData.telemetryPipeline.jaeger.status}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400">Traces/sec:</span>
                  <span className="text-blue-400 ml-1">{meshData.telemetryPipeline.jaeger.tracesPerSecond}</span>
                </div>
                <div>
                  <span className="text-gray-400">Spans/sec:</span>
                  <span className="text-green-400 ml-1">{formatNumber(meshData.telemetryPipeline.jaeger.spanIngestionRate)}</span>
                </div>
                <div>
                  <span className="text-gray-400">Storage:</span>
                  <span className="text-purple-400 ml-1">{meshData.telemetryPipeline.jaeger.storageUsed}</span>
                </div>
                <div>
                  <span className="text-gray-400">Sampling:</span>
                  <span className="text-cyan-400 ml-1">{meshData.telemetryPipeline.jaeger.samplingRate.toFixed(1)}%</span>
                </div>
              </div>
            </div>

            {/* Grafana */}
            <div className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-green-400" />
                  <span className="text-white font-medium">Grafana</span>
                </div>
                <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(meshData.telemetryPipeline.grafana.status)} ${getStatusBg(meshData.telemetryPipeline.grafana.status)}`}>
                  {meshData.telemetryPipeline.grafana.status}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-gray-400">Dashboards:</span>
                  <span className="text-blue-400 ml-1">{meshData.telemetryPipeline.grafana.dashboards}</span>
                </div>
                <div>
                  <span className="text-gray-400">Users:</span>
                  <span className="text-green-400 ml-1">{meshData.telemetryPipeline.grafana.activeUsers}</span>
                </div>
                <div>
                  <span className="text-gray-400">Alert Rules:</span>
                  <span className="text-purple-400 ml-1">{meshData.telemetryPipeline.grafana.alertRules}</span>
                </div>
                <div>
                  <span className="text-gray-400">Last Update:</span>
                  <span className="text-cyan-400 ml-1">{meshData.telemetryPipeline.grafana.lastUpdate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Mesh Alerts */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Service Mesh Alerts</h3>
          </div>
          
          <div className="space-y-3">
            {meshData.alerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded border transition-all ${
                alert.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                alert.severity === 'WARNING' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{alert.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${
                      alert.severity === 'CRITICAL' ? 'text-red-400 bg-red-400/20' :
                      alert.severity === 'WARNING' ? 'text-yellow-400 bg-yellow-400/20' :
                      'text-blue-400 bg-blue-400/20'
                    }`}>
                      {alert.severity}
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(alert.status)} ${getStatusBg(alert.status)}`}>
                    {alert.status}
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2">{alert.message}</div>
                <div className="text-xs text-blue-400 mb-1">{alert.recommendation}</div>
                <div className="text-xs text-gray-400">{alert.service} • {alert.type}</div>
              </div>
            ))}
          </div>

          {/* Linkerd Metrics Summary */}
          <div className="mt-4 bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Linkerd Proxy Metrics</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400">Success Rate:</span>
                <span className="text-green-400 ml-1">{meshData.linkerdMetrics.successRate}%</span>
              </div>
              <div>
                <span className="text-gray-400">RPS:</span>
                <span className="text-blue-400 ml-1">{formatNumber(meshData.linkerdMetrics.rps)}</span>
              </div>
              <div>
                <span className="text-gray-400">P50 Latency:</span>
                <span className="text-purple-400 ml-1">{meshData.linkerdMetrics.p50Latency}ms</span>
              </div>
              <div>
                <span className="text-gray-400">TLS Ratio:</span>
                <span className="text-emerald-400 ml-1">{meshData.linkerdMetrics.meshTlsRatio}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}