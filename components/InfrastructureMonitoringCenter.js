// Infrastructure Monitoring Center - 2026 Kubernetes/Prometheus/Grafana Best Practices
// Inspired by kube-prometheus-stack, ServiceMonitors, and GitOps workflows
import { useState, useEffect } from 'react';
import { 
  Server, Activity, AlertTriangle, CheckCircle, XCircle,
  Cpu, HardDrive, Network, Zap, Clock, TrendingUp, TrendingDown,
  Database, Cloud, Shield, RefreshCw, Settings, Terminal,
  GitBranch, Eye, Bell, Target, Layers, Box, Monitor
} from 'lucide-react';

export default function InfrastructureMonitoringCenter() {
  const [clusterMetrics, setClusterMetrics] = useState({
    nodes: {
      total: 6,
      healthy: 5,
      unhealthy: 1,
      cpuUsage: 67.3,
      memoryUsage: 73.8,
      diskUsage: 45.2,
      networkIO: 234.7
    },
    services: {
      total: 24,
      running: 22,
      degraded: 2,
      failed: 0,
      uptime: 99.7,
      avgResponseTime: 127,
      throughput: 1247.8
    },
    infrastructure: {
      apiServer: { status: 'healthy', latency: 45, requests: 1567 },
      etcd: { status: 'healthy', latency: 12, dbSize: 2.4 },
      scheduler: { status: 'healthy', queue: 3, pods: 45 },
      controller: { status: 'degraded', latency: 234, errors: 12 },
      kubelet: { status: 'healthy', pods: 8, containers: 24 },
      proxy: { status: 'healthy', connections: 156, bandwidth: 45.7 }
    }
  });

  const [serviceMonitors, setServiceMonitors] = useState([
    {
      name: 'mission-control-api',
      namespace: 'production',
      status: 'healthy',
      endpoints: 3,
      scrapeInterval: '30s',
      lastScrape: '2s ago',
      metrics: { requests: 4567, errors: 12, latency: 89 },
      alerts: 0
    },
    {
      name: 'content-processor',
      namespace: 'agents',
      status: 'healthy', 
      endpoints: 2,
      scrapeInterval: '15s',
      lastScrape: '1s ago',
      metrics: { requests: 2345, errors: 3, latency: 156 },
      alerts: 0
    },
    {
      name: 'analytics-engine',
      namespace: 'agents',
      status: 'degraded',
      endpoints: 1,
      scrapeInterval: '60s',
      lastScrape: '45s ago',
      metrics: { requests: 987, errors: 67, latency: 456 },
      alerts: 2
    },
    {
      name: 'outreach-manager',
      namespace: 'agents',
      status: 'healthy',
      endpoints: 2,
      scrapeInterval: '30s',
      lastScrape: '3s ago',
      metrics: { requests: 1234, errors: 5, latency: 234 },
      alerts: 0
    },
    {
      name: 'infrastructure-monitor',
      namespace: 'system',
      status: 'healthy',
      endpoints: 4,
      scrapeInterval: '10s',
      lastScrape: '1s ago',
      metrics: { requests: 8901, errors: 1, latency: 23 },
      alerts: 0
    }
  ]);

  const [promqlQueries, setPromqlQueries] = useState([
    {
      name: 'CPU Usage by Node',
      query: '100 - (avg by (instance) (irate(node_cpu_seconds_total{mode="idle"}[5m])) * 100)',
      value: '67.3%',
      status: 'normal',
      trend: 'stable'
    },
    {
      name: 'Memory Usage',
      query: '(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100',
      value: '73.8%',
      status: 'warning',
      trend: 'increasing'
    },
    {
      name: 'Pod Restart Rate',
      query: 'rate(kube_pod_container_status_restarts_total[1h])',
      value: '0.02/h',
      status: 'normal',
      trend: 'stable'
    },
    {
      name: 'API Server Latency',
      query: 'histogram_quantile(0.95, rate(apiserver_request_duration_seconds_bucket[5m]))',
      value: '45ms',
      status: 'good',
      trend: 'improving'
    },
    {
      name: 'Disk IO Wait',
      query: 'rate(node_disk_io_time_seconds_total[1m])',
      value: '2.3%',
      status: 'normal',
      trend: 'stable'
    },
    {
      name: 'Network Bandwidth',
      query: 'rate(node_network_receive_bytes_total[1m])',
      value: '234.7MB/s',
      status: 'normal',
      trend: 'stable'
    }
  ]);

  const [activeAlerts, setActiveAlerts] = useState([
    {
      id: 'alert-001',
      name: 'HighCPUUsage',
      severity: 'warning',
      description: 'Node CPU usage above 80%',
      target: 'node-worker-3',
      duration: '5m 23s',
      value: '84.7%',
      threshold: '80%',
      runbook: 'Check for resource-intensive pods and consider scaling'
    },
    {
      id: 'alert-002',
      name: 'ServiceDegraded',
      severity: 'critical',
      description: 'Analytics Engine showing high error rate',
      target: 'analytics-engine-pod-7f8b',
      duration: '2m 45s',
      value: '6.8%',
      threshold: '5%',
      runbook: 'Investigate logs and restart if necessary'
    },
    {
      id: 'alert-003',
      name: 'DiskSpaceWarning',
      severity: 'warning',
      description: 'Low disk space on storage volume',
      target: '/var/lib/docker',
      duration: '15m 12s',
      value: '89%',
      threshold: '85%',
      runbook: 'Clean up old images and logs, expand volume if needed'
    }
  ]);

  const [gitOpsStatus, setGitOpsStatus] = useState({
    lastSync: '2m 34s ago',
    syncStatus: 'synced',
    repoUrl: 'github.com/aleksandra/mission-control-config',
    branch: 'main',
    commit: 'c595c9c',
    dashboardsProvisioned: 24,
    alertsProvisioned: 18,
    configMapsUpdated: 6
  });

  useEffect(() => {
    // Real-time infrastructure monitoring updates
    const interval = setInterval(() => {
      // Update cluster metrics
      setClusterMetrics(prev => ({
        ...prev,
        nodes: {
          ...prev.nodes,
          cpuUsage: Math.max(45, Math.min(95, prev.nodes.cpuUsage + (Math.random() - 0.4) * 3)),
          memoryUsage: Math.max(50, Math.min(90, prev.nodes.memoryUsage + (Math.random() - 0.3) * 2)),
          networkIO: Math.max(100, Math.min(500, prev.nodes.networkIO + (Math.random() - 0.5) * 50))
        },
        services: {
          ...prev.services,
          avgResponseTime: Math.max(50, Math.min(300, prev.services.avgResponseTime + (Math.random() - 0.5) * 20)),
          throughput: Math.max(1000, Math.min(2000, prev.services.throughput + (Math.random() - 0.5) * 100))
        }
      }));

      // Update PromQL query values
      setPromqlQueries(prev => prev.map(query => ({
        ...query,
        trend: Math.random() > 0.7 ? (Math.random() > 0.5 ? 'increasing' : 'improving') : 'stable'
      })));

      // Update service monitors
      setServiceMonitors(prev => prev.map(monitor => ({
        ...monitor,
        lastScrape: Math.floor(Math.random() * 10) + 's ago',
        metrics: {
          ...monitor.metrics,
          requests: monitor.metrics.requests + Math.floor(Math.random() * 50),
          latency: Math.max(10, Math.min(500, monitor.metrics.latency + (Math.random() - 0.5) * 30))
        }
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'healthy': case 'good': case 'synced': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'degraded': case 'warning': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'unhealthy': case 'failed': case 'critical': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'normal': return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getSeverityIcon = (severity) => {
    switch(severity) {
      case 'critical': return <XCircle className="w-4 h-4 text-red-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'info': return <CheckCircle className="w-4 h-4 text-blue-400" />;
      default: return <Bell className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'increasing': return <TrendingDown className="w-4 h-4 text-red-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
            <Server className="w-8 h-8 mr-3" />
            Infrastructure Monitoring Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <GitBranch className="w-4 h-4 mr-2" />
              <span>GitOps: {gitOpsStatus.syncStatus}</span>
            </div>
            <div>Last Sync: {gitOpsStatus.lastSync}</div>
          </div>
        </div>
        <p className="text-gray-300">Kubernetes-style monitoring with Prometheus metrics & GitOps workflows</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Cluster Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <Layers className="w-5 h-5 mr-2" />
              Cluster Health
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Nodes</span>
                  <Server className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {clusterMetrics.nodes.healthy}/{clusterMetrics.nodes.total}
                </div>
                <div className="text-xs text-gray-400">Healthy/Total</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Services</span>
                  <Box className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {clusterMetrics.services.running}/{clusterMetrics.services.total}
                </div>
                <div className="text-xs text-gray-400">Running/Total</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">CPU Usage</span>
                  <Cpu className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  {clusterMetrics.nodes.cpuUsage.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-400">Cluster Average</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Memory</span>
                  <HardDrive className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {clusterMetrics.nodes.memoryUsage.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-400">Cluster Average</div>
              </div>
            </div>

            {/* Infrastructure Components */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(clusterMetrics.infrastructure).map(([component, data]) => (
                <div key={component} className={`border rounded-lg p-3 ${getStatusColor(data.status)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold capitalize text-white">{component}</span>
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <span className="capitalize">{data.status}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Latency:</span>
                      <span>{data.latency}ms</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PromQL Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <Database className="w-5 h-5 mr-2" />
              PromQL Metrics
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {promqlQueries.map((query, index) => (
                <div key={index} className={`border rounded-lg p-4 ${getStatusColor(query.status)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white">{query.name}</span>
                    {getTrendIcon(query.trend)}
                  </div>
                  <div className="text-2xl font-mono font-bold mb-2">{query.value}</div>
                  <div className="text-xs font-mono text-gray-400 bg-gray-800 p-2 rounded">
                    {query.query}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          
          {/* Active Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2" />
              Active Alerts ({activeAlerts.length})
            </h2>
            
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {activeAlerts.map((alert) => (
                <div key={alert.id} className={`border rounded p-3 ${getStatusColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.name}</span>
                    {getSeverityIcon(alert.severity)}
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration:</span>
                      <span>{alert.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Value:</span>
                      <span>{alert.value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ServiceMonitors */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              ServiceMonitors
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {serviceMonitors.map((monitor, index) => (
                <div key={index} className={`border rounded p-3 ${getStatusColor(monitor.status)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{monitor.name}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">{monitor.namespace}</span>
                  </div>
                  <div className="text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Endpoints:</span>
                      <span>{monitor.endpoints}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Interval:</span>
                      <span>{monitor.scrapeInterval}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Last:</span>
                      <span>{monitor.lastScrape}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Latency:</span>
                      <span>{monitor.metrics.latency}ms</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitOps Status */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <GitBranch className="w-5 h-5 mr-2" />
              GitOps Status
            </h2>
            
            <div className="space-y-3">
              <div className={`border rounded p-3 ${getStatusColor(gitOpsStatus.syncStatus)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-white text-sm">Sync Status</span>
                  <CheckCircle className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Sync:</span>
                    <span>{gitOpsStatus.lastSync}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Commit:</span>
                    <span className="font-mono">{gitOpsStatus.commit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dashboards:</span>
                    <span>{gitOpsStatus.dashboardsProvisioned}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Alerts:</span>
                    <span>{gitOpsStatus.alertsProvisioned}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}