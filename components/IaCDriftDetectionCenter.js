// Infrastructure-as-Code Drift Detection Center - 2026 GitOps & IaC Monitoring
// Based on Driftctl, ArgoCD, Terraform Cloud, and modern IaC drift detection standards
import { useState, useEffect } from 'react';
import { 
  GitBranch, AlertTriangle, CheckCircle, RefreshCw, Clock, Zap, Target,
  FileCode, Database, Server, Cloud, Settings, Shield, Eye, Info,
  TrendingUp, TrendingDown, BarChart3, Activity, Play, Pause, StopCircle,
  ArrowRight, ArrowLeft, Package, Code2, Monitor, Users, Globe, Lock,
  Minus, Plus, GitCommit, GitMerge, GitPullRequest, Terminal, Layers
} from 'lucide-react';

export default function IaCDriftDetectionCenter() {
  const [driftData, setDriftData] = useState({
    currentTime: new Date().toISOString(),
    overallDriftStatus: 'MINOR_DRIFT',
    totalResources: 1247,
    driftedResources: 23,
    criticalDrift: 3,
    environments: [
      {
        name: 'production',
        status: 'MINOR_DRIFT',
        totalResources: 456,
        driftedResources: 8,
        lastScan: '2m ago',
        provider: 'AWS',
        gitRevision: 'abc123f',
        syncStatus: 'OUT_OF_SYNC',
        driftScore: 12.3,
        tfStateVersion: 'v1.7.0',
        argocdSync: 'DEGRADED'
      },
      {
        name: 'staging',
        status: 'HEALTHY',
        totalResources: 234,
        driftedResources: 0,
        lastScan: '1m ago',
        provider: 'Azure',
        gitRevision: 'def456e',
        syncStatus: 'SYNCED',
        driftScore: 0.0,
        tfStateVersion: 'v1.7.0',
        argocdSync: 'HEALTHY'
      },
      {
        name: 'development',
        status: 'CRITICAL_DRIFT',
        totalResources: 557,
        driftedResources: 15,
        lastScan: '30s ago',
        provider: 'GCP',
        gitRevision: 'ghi789d',
        syncStatus: 'OUT_OF_SYNC',
        driftScore: 24.7,
        tfStateVersion: 'v1.6.8',
        argocdSync: 'UNKNOWN'
      }
    ],
    driftEvents: [
      {
        time: '08:14',
        severity: 'CRITICAL',
        environment: 'development',
        resourceType: 'aws_instance',
        resourceName: 'web-server-001',
        driftType: 'RESOURCE_DELETED',
        description: 'EC2 instance manually terminated outside Terraform',
        gitCommit: 'ghi789d',
        autoRemediation: 'FAILED',
        status: 'ACTIVE',
        recommendation: 'Run terraform apply to recreate missing instance'
      },
      {
        time: '08:12',
        severity: 'WARNING',
        environment: 'production',
        resourceType: 'kubernetes_deployment',
        resourceName: 'api-deployment',
        driftType: 'CONFIG_DRIFT',
        description: 'Replica count changed from 3 to 5 manually',
        gitCommit: 'abc123f',
        autoRemediation: 'PENDING',
        status: 'ACTIVE',
        recommendation: 'Update Git repository or revert manual changes'
      },
      {
        time: '08:10',
        severity: 'INFO',
        environment: 'staging',
        resourceType: 'azurerm_storage_account',
        resourceName: 'staging-storage-001',
        driftType: 'METADATA_DRIFT',
        description: 'Tags updated automatically by Azure policy',
        gitCommit: 'def456e',
        autoRemediation: 'SUCCESS',
        status: 'RESOLVED',
        recommendation: 'Update Terraform configuration to match policy tags'
      }
    ],
    gitopsStatus: {
      totalRepositories: 12,
      syncedRepos: 8,
      outOfSyncRepos: 3,
      failedRepos: 1,
      lastGitPull: '1m ago',
      argocdApps: 24,
      healthyApps: 20,
      degradedApps: 3,
      unknownApps: 1
    },
    policyCompliance: [
      { policy: 'Resource Tagging', compliance: 94.7, violations: 23, severity: 'WARNING' },
      { policy: 'Security Groups', compliance: 99.2, violations: 3, severity: 'CRITICAL' },
      { policy: 'Storage Encryption', compliance: 100.0, violations: 0, severity: 'INFO' },
      { policy: 'Network Access', compliance: 87.4, violations: 45, severity: 'WARNING' },
      { policy: 'Backup Configuration', compliance: 96.1, violations: 12, severity: 'INFO' }
    ],
    driftTools: [
      {
        tool: 'Driftctl',
        status: 'OPERATIONAL',
        lastRun: '2m ago',
        resourcesScanned: 1247,
        driftsDetected: 23,
        scanDuration: '45s',
        coverage: 94.3,
        version: 'v0.40.0'
      },
      {
        tool: 'ArgoCD',
        status: 'OPERATIONAL',
        lastRun: '30s ago',
        resourcesScanned: 456,
        driftsDetected: 8,
        scanDuration: '12s',
        coverage: 100.0,
        version: 'v2.10.1'
      },
      {
        tool: 'Terraform Cloud',
        status: 'WARNING',
        lastRun: '5m ago',
        resourcesScanned: 891,
        driftsDetected: 15,
        scanDuration: '2m 15s',
        coverage: 89.7,
        version: 'Latest'
      }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Infrastructure Health', value: 94.2, unit: '%', trend: 'declining' },
        { metric: 'Drift Detection Rate', value: 1.8, unit: '%', trend: 'increasing' },
        { metric: 'Policy Compliance', value: 95.5, unit: '%', trend: 'stable' },
        { metric: 'Auto-Remediation', value: 67.3, unit: '%', trend: 'improving' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDriftData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'Drift Detection Rate'
              ? Math.max(0, Math.min(5, metric.value + (Math.random() - 0.3) * 0.3))
              : metric.metric === 'Infrastructure Health'
              ? Math.max(85, Math.min(98, metric.value + (Math.random() - 0.5) * 1.5))
              : Math.max(60, Math.min(100, metric.value + (Math.random() - 0.5) * 1))
          }))
        },
        environments: prev.environments.map(env => ({
          ...env,
          driftScore: Math.max(0, Math.min(50, env.driftScore + (Math.random() - 0.7) * 2))
        }))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': case 'SYNCED': case 'OPERATIONAL': case 'SUCCESS': case 'RESOLVED': return 'text-green-400';
      case 'MINOR_DRIFT': case 'WARNING': case 'PENDING': case 'DEGRADED': case 'OUT_OF_SYNC': case 'ACTIVE': return 'text-yellow-400';
      case 'CRITICAL_DRIFT': case 'CRITICAL': case 'FAILED': case 'UNKNOWN': return 'text-red-400';
      case 'INFO': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'HEALTHY': case 'SYNCED': case 'OPERATIONAL': case 'SUCCESS': case 'RESOLVED': return 'bg-green-400/20';
      case 'MINOR_DRIFT': case 'WARNING': case 'PENDING': case 'DEGRADED': case 'OUT_OF_SYNC': case 'ACTIVE': return 'bg-yellow-400/20';
      case 'CRITICAL_DRIFT': case 'CRITICAL': case 'FAILED': case 'UNKNOWN': return 'bg-red-400/20';
      case 'INFO': return 'bg-blue-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'increasing': return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getProviderIcon = (provider) => {
    const iconClass = "w-4 h-4";
    switch (provider) {
      case 'AWS': return <Cloud className={`${iconClass} text-orange-400`} />;
      case 'Azure': return <Cloud className={`${iconClass} text-blue-400`} />;
      case 'GCP': return <Cloud className={`${iconClass} text-green-400`} />;
      default: return <Server className={`${iconClass} text-gray-400`} />;
    }
  };

  const getDriftTypeIcon = (driftType) => {
    const iconClass = "w-4 h-4";
    switch (driftType) {
      case 'RESOURCE_DELETED': return <StopCircle className={`${iconClass} text-red-400`} />;
      case 'CONFIG_DRIFT': return <Settings className={`${iconClass} text-yellow-400`} />;
      case 'METADATA_DRIFT': return <FileCode className={`${iconClass} text-blue-400`} />;
      default: return <AlertTriangle className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* IaC Drift Detection Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <GitBranch className="w-8 h-8 text-purple-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">IaC Drift Detection Center</h2>
              <div className="text-sm text-gray-400">Terraform • Kubernetes • GitOps • Policy-as-Code Monitoring</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(driftData.overallDriftStatus)} ${getStatusBg(driftData.overallDriftStatus)}`}>
              {driftData.overallDriftStatus}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Resources Monitored</div>
            <div className="text-2xl font-mono text-purple-400 font-bold">
              {formatNumber(driftData.totalResources)}
            </div>
            <div className="text-xs text-orange-400">
              {driftData.driftedResources} drifted • {driftData.criticalDrift} critical
            </div>
          </div>
        </div>
        
        {/* Real-Time IaC Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {driftData.realTimeMetrics.performance.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(1)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.metric === 'Drift Detection Rate' 
                      ? (metric.value < 1 ? 'bg-green-400' : metric.value < 3 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.value >= 90 ? 'bg-green-400' : metric.value >= 70 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'Drift Detection Rate' 
                      ? `${Math.min(100, (5 - metric.value) / 5 * 100)}%`
                      : `${Math.min(100, metric.value)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Environment Drift Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Layers className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Environment Drift Status</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {driftData.environments.filter(env => env.status === 'HEALTHY').length}/{driftData.environments.length} HEALTHY
            </div>
          </div>
          
          <div className="space-y-4">
            {driftData.environments.map((env, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getProviderIcon(env.provider)}
                    <div>
                      <h4 className="text-white font-medium">{env.name}</h4>
                      <div className="text-xs text-gray-400">{env.provider} • TF {env.tfStateVersion}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(env.status)} ${getStatusBg(env.status)}`}>
                      {env.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Drift Score</div>
                    <div className={`font-mono text-lg ${env.driftScore < 5 ? 'text-green-400' : env.driftScore < 15 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {env.driftScore.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Resources</div>
                    <div className="text-white font-mono text-lg">{env.totalResources}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Drifted</div>
                    <div className={`font-mono text-lg ${env.driftedResources === 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {env.driftedResources}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Git Sync</div>
                    <div className={`text-xs font-semibold ${getStatusColor(env.syncStatus)}`}>
                      {env.syncStatus}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">ArgoCD</div>
                    <div className={`text-xs font-semibold ${getStatusColor(env.argocdSync)}`}>
                      {env.argocdSync}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Last Scan</div>
                    <div className="text-blue-400 text-xs">{env.lastScan}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <GitCommit className="w-3 h-3 text-gray-400" />
                    <span className="text-gray-400">Git:</span>
                    <span className="text-blue-400 font-mono">{env.gitRevision}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-1.5 mx-3">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        env.driftScore < 5 ? 'bg-green-400' : env.driftScore < 15 ? 'bg-yellow-400' : 'bg-red-400'
                      }`}
                      style={{ width: `${Math.min(100, 100 - env.driftScore * 2)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitOps & Policy Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <GitMerge className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">GitOps Status</h3>
          </div>
          
          {/* GitOps Metrics */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Repository Sync Status</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Total Repos</span>
                <span className="text-blue-400 font-mono">{driftData.gitopsStatus.totalRepositories}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Synced</span>
                <span className="text-green-400 font-mono">{driftData.gitopsStatus.syncedRepos}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Out of Sync</span>
                <span className="text-yellow-400 font-mono">{driftData.gitopsStatus.outOfSyncRepos}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Failed</span>
                <span className="text-red-400 font-mono">{driftData.gitopsStatus.failedRepos}</span>
              </div>
            </div>
          </div>

          {/* ArgoCD Applications */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">ArgoCD Applications</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Total Apps</span>
                <span className="text-purple-400 font-mono">{driftData.gitopsStatus.argocdApps}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Healthy</span>
                <span className="text-green-400 font-mono">{driftData.gitopsStatus.healthyApps}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Degraded</span>
                <span className="text-yellow-400 font-mono">{driftData.gitopsStatus.degradedApps}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Unknown</span>
                <span className="text-gray-400 font-mono">{driftData.gitopsStatus.unknownApps}</span>
              </div>
            </div>
          </div>

          {/* Policy Compliance */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Policy Compliance</div>
            <div className="space-y-2">
              {driftData.policyCompliance.slice(0, 3).map((policy, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
                  <div>
                    <span className="text-sm text-gray-300">{policy.policy}</span>
                    <div className="text-xs text-gray-400">{policy.violations} violations</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${
                      policy.compliance > 95 ? 'text-green-400' :
                      policy.compliance > 85 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {policy.compliance.toFixed(1)}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Drift Detection Tools */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Drift Detection Tools</h3>
          </div>
          
          <div className="space-y-3">
            {driftData.driftTools.map((tool, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-medium">{tool.tool}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(tool.status)} ${getStatusBg(tool.status)}`}>
                    {tool.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Resources:</span>
                    <span className="text-blue-400 ml-1">{formatNumber(tool.resourcesScanned)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Drifts:</span>
                    <span className="text-red-400 ml-1">{tool.driftsDetected}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-green-400 ml-1">{tool.scanDuration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Coverage:</span>
                    <span className="text-purple-400 ml-1">{tool.coverage.toFixed(1)}%</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  Version {tool.version} • Last run {tool.lastRun}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Drift Events */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Recent Drift Events</h3>
          </div>
          
          <div className="space-y-3">
            {driftData.driftEvents.map((event, index) => (
              <div key={index} className={`p-3 rounded border transition-all ${
                event.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                event.severity === 'WARNING' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{event.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${
                      event.severity === 'CRITICAL' ? 'text-red-400 bg-red-400/20' :
                      event.severity === 'WARNING' ? 'text-yellow-400 bg-yellow-400/20' :
                      'text-blue-400 bg-blue-400/20'
                    }`}>
                      {event.severity}
                    </div>
                    {getDriftTypeIcon(event.driftType)}
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(event.status)} ${getStatusBg(event.status)}`}>
                    {event.status}
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-2">{event.description}</div>
                <div className="text-xs text-blue-400 mb-2">{event.recommendation}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{event.environment} • {event.resourceName}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">Auto-remediation:</span>
                    <span className={getStatusColor(event.autoRemediation)}>{event.autoRemediation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}