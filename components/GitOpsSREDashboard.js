// GitOps SRE Dashboard - 2026 Platform Engineering Operations Center
// Based on Kubara, Devtron, Prometheus, Grafana, and AI-enhanced monitoring
import { useState, useEffect } from 'react';
import { 
  GitBranch, Activity, Zap, AlertTriangle, CheckCircle, Clock, Settings,
  Server, Database, Cloud, Code2, Shield, TrendingUp, TrendingDown,
  Cpu, MemoryStick, HardDrive, Wifi, Target, Globe, RefreshCw,
  GitCommit, GitMerge, ArrowUpCircle, ArrowDownCircle, Minus, Plus,
  PlayCircle, PauseCircle, StopCircle, RotateCcw, AlertCircle, Info, Brain
} from 'lucide-react';

export default function GitOpsSREDashboard() {
  const [sreData, setSreData] = useState({
    currentTime: new Date().toISOString(),
    clusterHealth: 'HEALTHY',
    gitOpsStatus: 'SYNCED',
    sliCompliance: 99.7,
    incidentStatus: 'GREEN',
    clusters: [
      { 
        name: 'production', 
        status: 'HEALTHY', 
        nodes: 12, 
        pods: 347, 
        services: 89,
        cpuUsage: 67.3,
        memoryUsage: 73.8,
        lastSync: '2m ago'
      },
      { 
        name: 'staging', 
        status: 'HEALTHY', 
        nodes: 6, 
        pods: 124, 
        services: 34,
        cpuUsage: 45.2,
        memoryUsage: 52.1,
        lastSync: '1m ago'
      },
      { 
        name: 'development', 
        status: 'WARNING', 
        nodes: 3, 
        pods: 67, 
        services: 18,
        cpuUsage: 82.4,
        memoryUsage: 89.3,
        lastSync: '5m ago'
      }
    ],
    gitOpsRepositories: [
      {
        name: 'infrastructure-config',
        status: 'SYNCED',
        lastCommit: '8f3a2b1',
        author: 'daniel.ferreira',
        syncedAt: '3m ago',
        reconciliation: 'SUCCESS',
        resources: 45
      },
      {
        name: 'application-manifests',
        status: 'SYNCING',
        lastCommit: '2c9d4e5',
        author: 'aleksandra.ai',
        syncedAt: '1m ago',
        reconciliation: 'IN_PROGRESS',
        resources: 23
      },
      {
        name: 'platform-services',
        status: 'FAILED',
        lastCommit: '7b1c8f2',
        author: 'system',
        syncedAt: '12m ago',
        reconciliation: 'FAILED',
        resources: 12,
        error: 'Resource validation failed'
      }
    ],
    sliMetrics: [
      { name: 'Availability SLI', current: 99.97, target: 99.9, trend: 'stable' },
      { name: 'Latency SLI', current: 98.4, target: 95.0, trend: 'improving' },
      { name: 'Error Rate SLI', current: 99.8, target: 99.5, trend: 'stable' },
      { name: 'Throughput SLI', current: 97.2, target: 95.0, trend: 'declining' }
    ],
    alerts: [
      {
        time: '04:47',
        severity: 'WARNING',
        source: 'prometheus',
        rule: 'PodCrashLooping',
        cluster: 'development',
        namespace: 'default',
        message: 'Pod content-processor-7b9c8d has been crash looping for 5m',
        status: 'FIRING'
      },
      {
        time: '04:45',
        severity: 'INFO',
        source: 'flux',
        rule: 'GitRepositoryReconciliation',
        cluster: 'production',
        namespace: 'flux-system',
        message: 'GitRepository infrastructure-config reconciled successfully',
        status: 'RESOLVED'
      },
      {
        time: '04:42',
        severity: 'CRITICAL',
        source: 'kube-state-metrics',
        rule: 'NodeDiskPressure',
        cluster: 'production',
        namespace: 'kube-system',
        message: 'Node prod-worker-3 experiencing disk pressure',
        status: 'RESOLVED'
      }
    ],
    aiInsights: [
      {
        type: 'ANOMALY_DETECTION',
        confidence: 97.3,
        message: 'Unusual spike in memory usage detected in development cluster',
        recommendation: 'Consider reviewing resource requests for recent deployments',
        timestamp: '04:48'
      },
      {
        type: 'PREDICTIVE_SCALING',
        confidence: 89.7,
        message: 'Traffic pattern suggests need for horizontal pod autoscaling',
        recommendation: 'Enable HPA for content-processing service',
        timestamp: '04:45'
      }
    ],
    platformServices: {
      cicd: { status: 'OPERATIONAL', version: 'v2.1.3', health: 98.7 },
      monitoring: { status: 'OPERATIONAL', version: 'v1.9.2', health: 99.2 },
      logging: { status: 'DEGRADED', version: 'v3.2.1', health: 87.4 },
      security: { status: 'OPERATIONAL', version: 'v1.5.8', health: 96.9 },
      networking: { status: 'OPERATIONAL', version: 'v2.0.4', health: 99.1 },
      storage: { status: 'OPERATIONAL', version: 'v1.8.7', health: 95.6 }
    },
    deployments: [
      {
        app: 'mission-control-dashboard',
        environment: 'production',
        status: 'SUCCESS',
        duration: '2m 34s',
        commit: '1a2b3c4',
        deployedAt: '04:43'
      },
      {
        app: 'content-processor',
        environment: 'staging', 
        status: 'IN_PROGRESS',
        duration: '1m 12s',
        commit: '5d6e7f8',
        deployedAt: '04:46'
      },
      {
        app: 'ai-agent-orchestrator',
        environment: 'development',
        status: 'FAILED',
        duration: '45s',
        commit: '9g0h1i2',
        deployedAt: '04:41',
        error: 'Image pull timeout'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSreData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        sliMetrics: prev.sliMetrics.map(sli => ({
          ...sli,
          current: sli.name === 'Throughput SLI' 
            ? Math.max(90, Math.min(100, sli.current + (Math.random() - 0.6) * 1.2))
            : Math.max(95, Math.min(100, sli.current + (Math.random() - 0.5) * 0.3))
        })),
        clusters: prev.clusters.map(cluster => ({
          ...cluster,
          cpuUsage: Math.max(20, Math.min(100, cluster.cpuUsage + (Math.random() - 0.5) * 5)),
          memoryUsage: Math.max(30, Math.min(100, cluster.memoryUsage + (Math.random() - 0.5) * 3))
        }))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': case 'OPERATIONAL': case 'SYNCED': case 'SUCCESS': case 'RESOLVED': return 'text-green-400';
      case 'WARNING': case 'DEGRADED': case 'SYNCING': case 'IN_PROGRESS': return 'text-yellow-400';
      case 'FAILED': case 'CRITICAL': case 'FIRING': return 'text-red-400';
      case 'GREEN': return 'text-emerald-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'HEALTHY': case 'OPERATIONAL': case 'SYNCED': case 'SUCCESS': case 'RESOLVED': return 'bg-green-400/20';
      case 'WARNING': case 'DEGRADED': case 'SYNCING': case 'IN_PROGRESS': return 'bg-yellow-400/20';
      case 'FAILED': case 'CRITICAL': case 'FIRING': return 'bg-red-400/20';
      case 'GREEN': return 'bg-emerald-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'CRITICAL': return <AlertTriangle className="w-4 h-4 text-red-400" />;
      case 'WARNING': return <AlertCircle className="w-4 h-4 text-yellow-400" />;
      case 'INFO': return <Info className="w-4 h-4 text-blue-400" />;
      default: return <CheckCircle className="w-4 h-4 text-green-400" />;
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

  return (
    <div className="space-y-6">
      {/* SRE Header - GitOps Platform Engineering Style */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <GitBranch className="w-8 h-8 text-purple-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">GitOps SRE Operations Center</h2>
              <div className="text-sm text-gray-400">Platform Engineering • Multi-Cluster Observability</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(sreData.clusterHealth)} ${getStatusBg(sreData.clusterHealth)}`}>
              {sreData.clusterHealth}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">SLI Compliance</div>
            <div className="text-2xl font-mono text-green-400 font-bold">
              {sreData.sliCompliance}%
            </div>
          </div>
        </div>
        
        {/* SLI Metrics Dashboard */}
        <div className="grid grid-cols-4 gap-4">
          {sreData.sliMetrics.map((sli, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{sli.name}</span>
                {getTrendIcon(sli.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {sli.current.toFixed(2)}<span className="text-sm text-gray-400 ml-1">%</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Target: {sli.target}%
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    sli.current >= sli.target ? 'bg-green-400' : 'bg-red-400'
                  }`}
                  style={{ width: `${Math.min(100, (sli.current / sli.target) * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kubernetes Clusters Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Server className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Kubernetes Clusters</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {sreData.clusters.filter(c => c.status === 'HEALTHY').length}/{sreData.clusters.length} HEALTHY
            </div>
          </div>
          
          <div className="space-y-4">
            {sreData.clusters.map((cluster, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      cluster.status === 'HEALTHY' ? 'bg-green-400' :
                      cluster.status === 'WARNING' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></div>
                    <h4 className="text-white font-medium">{cluster.name}</h4>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(cluster.status)} ${getStatusBg(cluster.status)}`}>
                      {cluster.status}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    Last sync: {cluster.lastSync}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-gray-400">Nodes</div>
                    <div className="text-white font-mono text-lg">{cluster.nodes}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Pods</div>
                    <div className="text-white font-mono text-lg">{cluster.pods}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Services</div>
                    <div className="text-white font-mono text-lg">{cluster.services}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">CPU Usage</div>
                    <div className={`font-mono text-lg ${cluster.cpuUsage > 80 ? 'text-red-400' : cluster.cpuUsage > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {cluster.cpuUsage.toFixed(1)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Memory Usage</div>
                    <div className={`font-mono text-lg ${cluster.memoryUsage > 85 ? 'text-red-400' : cluster.memoryUsage > 70 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {cluster.memoryUsage.toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitOps Repositories */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <GitCommit className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">GitOps Repositories</h3>
          </div>
          
          <div className="space-y-3">
            {sreData.gitOpsRepositories.map((repo, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium text-sm">{repo.name}</div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(repo.status)} ${getStatusBg(repo.status)}`}>
                    {repo.status}
                  </div>
                </div>
                
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Last Commit:</span>
                    <span className="text-blue-400 font-mono">{repo.lastCommit}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Author:</span>
                    <span className="text-gray-300">{repo.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Synced:</span>
                    <span className="text-gray-300">{repo.syncedAt}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Resources:</span>
                    <span className="text-white font-mono">{repo.resources}</span>
                  </div>
                  {repo.error && (
                    <div className="text-red-400 text-xs mt-1 p-1 bg-red-400/10 rounded">
                      {repo.error}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platform Services Health */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-semibold text-white">Platform Services</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(sreData.platformServices).map(([service, data]) => (
              <div key={service} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white capitalize text-sm">{service}</span>
                  <div className={`w-2 h-2 rounded-full ${
                    data.status === 'OPERATIONAL' ? 'bg-green-400' :
                    data.status === 'DEGRADED' ? 'bg-yellow-400' : 'bg-red-400'
                  }`}></div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="text-gray-400">Version: <span className="text-gray-300">{data.version}</span></div>
                  <div className="text-gray-400">Health: <span className={`${data.health > 95 ? 'text-green-400' : data.health > 80 ? 'text-yellow-400' : 'text-red-400'}`}>{data.health}%</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights & Alerts */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-semibold text-white">AI Insights & Alerts</h3>
          </div>
          
          {/* AI Insights */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">AI-Powered Insights</div>
            <div className="space-y-2">
              {sreData.aiInsights.map((insight, index) => (
                <div key={index} className="p-3 bg-slate-800/50 rounded border border-slate-600/30">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="text-xs text-purple-400 font-semibold">{insight.type}</div>
                    <div className="text-xs text-gray-400">Confidence: {insight.confidence}%</div>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{insight.message}</div>
                  <div className="text-xs text-blue-400">{insight.recommendation}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Alerts */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Recent Alerts</div>
            <div className="space-y-1">
              {sreData.alerts.slice(0, 3).map((alert, index) => (
                <div key={index} className="p-2 bg-slate-800/30 rounded text-xs">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-gray-400 font-mono">{alert.time}</span>
                    {getSeverityIcon(alert.severity)}
                    <span className={`px-1 py-0.5 rounded font-semibold ${getStatusColor(alert.status)} ${getStatusBg(alert.status)}`}>
                      {alert.status}
                    </span>
                  </div>
                  <div className="text-gray-300">{alert.message}</div>
                  <div className="text-blue-400 mt-1">{alert.cluster} • {alert.namespace}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}