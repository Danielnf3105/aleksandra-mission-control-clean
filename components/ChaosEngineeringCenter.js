// Chaos Engineering & Reliability Testing Center - 2026 Modern Resilience Engineering
// Based on LitmusChaos, Gremlin, Chaos Monkey, and modern chaos engineering standards
import { useState, useEffect } from 'react';
import { 
  Zap, Target, Activity, AlertTriangle, CheckCircle, Clock, Info,
  TrendingUp, TrendingDown, BarChart3, Gauge, Settings, RefreshCw,
  Play, Pause, StopCircle, Minus, Plus, Eye, Shield, Brain,
  Network, Server, Database, Globe, Users, Code2, Terminal,
  GitBranch, Package, Monitor, Cpu, MemoryStick, ArrowRight,
  ArrowLeft, Search, Key, Lock, Crosshair, Radar, Flame, Bug
} from 'lucide-react';

export default function ChaosEngineeringCenter() {
  const [chaosData, setChaosData] = useState({
    currentTime: new Date().toISOString(),
    overallReliabilityScore: 94.2,
    chaosMaturityLevel: 'ADVANCED',
    activeExperiments: 8,
    completedExperiments: 156,
    totalExperiments: 164,
    activePlatforms: [
      {
        name: 'LitmusChaos',
        version: 'v3.2.0',
        status: 'OPERATIONAL',
        experiments: 89,
        successRate: 94.7,
        coverage: 'Kubernetes',
        activeTests: 5,
        lastRun: '15m ago',
        features: ['GitOps', 'Probes', 'RBAC', 'Observability']
      },
      {
        name: 'Gremlin',
        version: 'v2.18.3',
        status: 'OPERATIONAL',
        experiments: 67,
        successRate: 96.2,
        coverage: 'Infrastructure',
        activeTests: 2,
        lastRun: '32m ago',
        features: ['Blast Radius', 'SLO Integration', 'Rollback', 'Gamedays']
      },
      {
        name: 'Chaos Monkey',
        version: 'v2.1.1',
        status: 'DEGRADED',
        experiments: 8,
        successRate: 89.4,
        coverage: 'AWS EC2',
        activeTests: 1,
        lastRun: '2h ago',
        features: ['Instance Termination', 'Scheduling', 'Targeting', 'Notifications']
      }
    ],
    chaosExperiments: [
      {
        id: 'litmus-pod-delete-001',
        name: 'Pod Delete - Payment Service',
        platform: 'LitmusChaos',
        type: 'RESOURCE_CHAOS',
        target: 'payment-service-deployment',
        status: 'RUNNING',
        startTime: '12:15',
        estimatedDuration: '10m',
        progress: 67,
        hypothesis: 'Payment service should handle pod failures gracefully with <2s recovery',
        slo: 'Availability > 99.5% during experiment',
        blastRadius: 'Single pod in payment-service',
        healthScore: 96.3,
        probes: ['HTTP Response', 'Database Connection', 'Queue Processing']
      },
      {
        id: 'gremlin-cpu-stress-002',
        name: 'CPU Stress - Analytics Cluster',
        platform: 'Gremlin',
        type: 'RESOURCE_STRESS',
        target: 'analytics-cluster-nodes',
        status: 'RUNNING',
        startTime: '12:20',
        estimatedDuration: '15m',
        progress: 43,
        hypothesis: 'Analytics cluster should maintain performance under CPU stress',
        slo: 'Response time < 500ms under 80% CPU load',
        blastRadius: '2 nodes in analytics cluster',
        healthScore: 87.9,
        probes: ['CPU Utilization', 'Memory Usage', 'API Latency']
      },
      {
        id: 'monkey-instance-kill-003',
        name: 'Random Instance Termination',
        platform: 'Chaos Monkey',
        type: 'INSTANCE_CHAOS',
        target: 'web-tier-autoscaling-group',
        status: 'PAUSED',
        startTime: '11:45',
        estimatedDuration: '30m',
        progress: 78,
        hypothesis: 'Auto-scaling should replace terminated instances within 3m',
        slo: 'Service availability maintained during instance replacement',
        blastRadius: '1 instance in web-tier ASG',
        healthScore: 92.1,
        probes: ['Load Balancer Health', 'Instance Count', 'Response Time']
      }
    ],
    reliabilityMetrics: {
      mtbf: 168.7, // hours
      mttr: 4.2,   // minutes
      availabilityScore: 99.87,
      errorBudgetRemaining: 87.3,
      incidentsThisMonth: 3,
      experimentsPerWeek: 12.5,
      hypothesesValidated: 89,
      sloBreaches: 2
    },
    experimentHistory: [
      {
        id: 'exp-2024-03-19-001',
        name: 'Database Connection Pool Exhaustion',
        date: '2026-03-19',
        duration: '12m',
        result: 'HYPOTHESIS_VALIDATED',
        platform: 'LitmusChaos',
        impactScore: 'LOW',
        findings: 'Connection pool gracefully handled exhaustion, fallback mechanisms activated',
        improvements: ['Increased pool monitoring alerts', 'Optimized connection recycling'],
        sloImpact: 'No SLO breach detected'
      },
      {
        id: 'exp-2024-03-18-002',
        name: 'Network Partition - Microservices',
        date: '2026-03-18',
        duration: '18m',
        result: 'HYPOTHESIS_REJECTED',
        platform: 'Gremlin',
        impactScore: 'MEDIUM',
        findings: 'Service mesh failed to handle partition, cascading failures detected',
        improvements: ['Enhanced circuit breaker timeouts', 'Improved service mesh config'],
        sloImpact: '0.02% availability impact'
      },
      {
        id: 'exp-2024-03-17-003',
        name: 'Memory Leak Simulation',
        date: '2026-03-17',
        duration: '25m',
        result: 'HYPOTHESIS_VALIDATED',
        platform: 'LitmusChaos',
        impactScore: 'HIGH',
        findings: 'Memory monitoring detected leak early, auto-restart prevented outage',
        improvements: ['Enhanced memory profiling', 'Reduced restart threshold'],
        sloImpact: 'No SLO breach detected'
      }
    ],
    gamedays: [
      {
        name: 'Multi-Region Disaster Recovery',
        date: '2026-03-25',
        status: 'SCHEDULED',
        participants: 23,
        duration: '4h',
        scenarios: ['Primary region failure', 'Database corruption', 'CDN outage'],
        objectives: ['Validate RTO < 15m', 'Test communication protocols', 'Verify data consistency'],
        lastScore: null
      },
      {
        name: 'Black Friday Load Simulation',
        date: '2026-03-15',
        status: 'COMPLETED',
        participants: 18,
        duration: '3h',
        scenarios: ['10x traffic spike', 'Payment gateway failure', 'Inventory system crash'],
        objectives: ['Maintain <2s response times', 'Zero payment failures', 'Auto-scaling validation'],
        lastScore: 87.4
      }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'System Reliability', value: 94.2, unit: '%', trend: 'improving' },
        { metric: 'Experiment Success Rate', value: 91.8, unit: '%', trend: 'stable' },
        { metric: 'MTTR', value: 4.2, unit: 'min', trend: 'declining' },
        { metric: 'Error Budget Health', value: 87.3, unit: '%', trend: 'stable' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setChaosData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        overallReliabilityScore: Math.max(88, Math.min(99, prev.overallReliabilityScore + (Math.random() - 0.5) * 1)),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'MTTR'
              ? Math.max(2, Math.min(10, metric.value + (Math.random() - 0.6) * 0.5))
              : Math.max(80, Math.min(99, metric.value + (Math.random() - 0.5) * 1))
          }))
        },
        chaosExperiments: prev.chaosExperiments.map(exp => ({
          ...exp,
          progress: exp.status === 'RUNNING' 
            ? Math.min(100, Math.max(0, exp.progress + Math.floor(Math.random() * 5)))
            : exp.progress,
          healthScore: Math.max(75, Math.min(100, exp.healthScore + (Math.random() - 0.5) * 2))
        }))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'RUNNING': case 'COMPLETED': case 'HYPOTHESIS_VALIDATED': case 'SCHEDULED': return 'text-green-400';
      case 'DEGRADED': case 'PAUSED': case 'HYPOTHESIS_REJECTED': return 'text-yellow-400';
      case 'FAILED': case 'ERROR': return 'text-red-400';
      case 'ADVANCED': case 'HIGH': return 'text-purple-400';
      case 'MEDIUM': return 'text-orange-400';
      case 'LOW': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPERATIONAL': case 'RUNNING': case 'COMPLETED': case 'HYPOTHESIS_VALIDATED': case 'SCHEDULED': return 'bg-green-400/20';
      case 'DEGRADED': case 'PAUSED': case 'HYPOTHESIS_REJECTED': return 'bg-yellow-400/20';
      case 'FAILED': case 'ERROR': return 'bg-red-400/20';
      case 'ADVANCED': case 'HIGH': return 'bg-purple-400/20';
      case 'MEDIUM': return 'bg-orange-400/20';
      case 'LOW': return 'bg-blue-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-green-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPlatformIcon = (platform) => {
    const iconClass = "w-4 h-4";
    switch (platform) {
      case 'LitmusChaos': return <Zap className={`${iconClass} text-purple-400`} />;
      case 'Gremlin': return <Bug className={`${iconClass} text-green-400`} />;
      case 'Chaos Monkey': return <Target className={`${iconClass} text-orange-400`} />;
      default: return <Activity className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getReliabilityColor = (score) => {
    if (score >= 95) return 'text-green-400';
    if (score >= 90) return 'text-blue-400';
    if (score >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getChaosTypeIcon = (type) => {
    const iconClass = "w-4 h-4";
    switch (type) {
      case 'RESOURCE_CHAOS': return <Server className={`${iconClass} text-red-400`} />;
      case 'RESOURCE_STRESS': return <Cpu className={`${iconClass} text-yellow-400`} />;
      case 'INSTANCE_CHAOS': return <Monitor className={`${iconClass} text-blue-400`} />;
      case 'NETWORK_CHAOS': return <Network className={`${iconClass} text-green-400`} />;
      default: return <Zap className={`${iconClass} text-purple-400`} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Chaos Engineering Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Zap className="w-8 h-8 text-purple-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Chaos Engineering & Reliability Center</h2>
              <div className="text-sm text-gray-400">LitmusChaos • Gremlin • Chaos Monkey • SLO Validation</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(chaosData.chaosMaturityLevel)} ${getStatusBg(chaosData.chaosMaturityLevel)}`}>
              {chaosData.chaosMaturityLevel}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Reliability Score</div>
            <div className={`text-2xl font-mono font-bold ${getReliabilityColor(chaosData.overallReliabilityScore)}`}>
              {chaosData.overallReliabilityScore.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {chaosData.activeExperiments}/{chaosData.totalExperiments} experiments active
            </div>
          </div>
        </div>
        
        {/* Real-Time Chaos Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {chaosData.realTimeMetrics.performance.map((metric, index) => (
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
                    metric.metric === 'MTTR'
                      ? (metric.value < 5 ? 'bg-green-400' : metric.value < 8 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.value >= 90 ? 'bg-green-400' : metric.value >= 80 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'MTTR'
                      ? `${Math.min(100, (10 - metric.value) / 10 * 100)}%`
                      : `${Math.min(100, metric.value)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Chaos Experiments */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Active Chaos Experiments</h3>
            <div className="px-2 py-1 bg-red-400/20 text-red-400 text-xs font-semibold rounded">
              {chaosData.chaosExperiments.filter(exp => exp.status === 'RUNNING').length} RUNNING
            </div>
          </div>
          
          <div className="space-y-4">
            {chaosData.chaosExperiments.map((experiment, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getPlatformIcon(experiment.platform)}
                    <div>
                      <h4 className="text-white font-medium">{experiment.name}</h4>
                      <div className="text-xs text-gray-400">{experiment.platform} • {experiment.type.replace('_', ' ')}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(experiment.status)} ${getStatusBg(experiment.status)}`}>
                      {experiment.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Health Score</div>
                    <div className={`font-mono text-lg ${getReliabilityColor(experiment.healthScore)}`}>
                      {experiment.healthScore.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm text-gray-300 mb-2">
                    <strong>Hypothesis:</strong> {experiment.hypothesis}
                  </div>
                  <div className="text-sm text-blue-300 mb-2">
                    <strong>SLO:</strong> {experiment.slo}
                  </div>
                  <div className="text-sm text-yellow-300">
                    <strong>Blast Radius:</strong> {experiment.blastRadius}
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Started</div>
                    <div className="text-green-400 text-sm">{experiment.startTime}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Duration</div>
                    <div className="text-blue-400 text-sm">{experiment.estimatedDuration}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Progress</div>
                    <div className="text-purple-400 text-sm">{experiment.progress}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Probes</div>
                    <div className="text-cyan-400 text-sm">{experiment.probes.length}</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-1">Active Probes:</div>
                  <div className="flex flex-wrap gap-1">
                    {experiment.probes.map((probe, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded">
                        {probe}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Target: <span className="text-orange-400">{experiment.target}</span></span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        experiment.status === 'RUNNING' ? 'bg-green-400' :
                        experiment.status === 'PAUSED' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`}
                      style={{ width: `${Math.min(100, experiment.progress)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chaos Platforms Status */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Bug className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Chaos Platforms</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {chaosData.activePlatforms.map((platform, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getPlatformIcon(platform.name)}
                    <span className="text-white font-medium text-sm">{platform.name}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(platform.status)} ${getStatusBg(platform.status)}`}>
                    {platform.status}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Experiments:</span>
                    <span className="text-blue-400 ml-1">{platform.experiments}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Success Rate:</span>
                    <span className="text-green-400 ml-1">{platform.successRate.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Active Tests:</span>
                    <span className="text-purple-400 ml-1">{platform.activeTests}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Coverage:</span>
                    <span className="text-cyan-400 ml-1">{platform.coverage}</span>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-1">Features:</div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {platform.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="px-1 py-0.5 text-xs bg-purple-400/20 text-purple-400 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-400">Version {platform.version} • Last run: {platform.lastRun}</div>
              </div>
            ))}
          </div>

          {/* Reliability Metrics Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Reliability Metrics</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400">MTBF:</span>
                <span className="text-green-400 ml-1">{chaosData.reliabilityMetrics.mtbf.toFixed(1)}h</span>
              </div>
              <div>
                <span className="text-gray-400">MTTR:</span>
                <span className="text-blue-400 ml-1">{chaosData.reliabilityMetrics.mttr.toFixed(1)}m</span>
              </div>
              <div>
                <span className="text-gray-400">Availability:</span>
                <span className="text-purple-400 ml-1">{chaosData.reliabilityMetrics.availabilityScore.toFixed(2)}%</span>
              </div>
              <div>
                <span className="text-gray-400">Error Budget:</span>
                <span className="text-emerald-400 ml-1">{chaosData.reliabilityMetrics.errorBudgetRemaining.toFixed(1)}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Experiment History */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Recent Experiments</h3>
          </div>
          
          <div className="space-y-4">
            {chaosData.experimentHistory.map((experiment, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium text-sm">{experiment.name}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(experiment.result)} ${getStatusBg(experiment.result)}`}>
                      {experiment.result.replace('_', ' ')}
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(experiment.impactScore)} ${getStatusBg(experiment.impactScore)}`}>
                      {experiment.impactScore}
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-2">{experiment.findings}</div>
                
                <div className="mb-2">
                  <div className="text-xs text-gray-400 mb-1">Improvements Applied:</div>
                  <ul className="text-xs text-green-400 space-y-1">
                    {experiment.improvements.map((improvement, idx) => (
                      <li key={idx}>• {improvement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{experiment.date} • {experiment.duration}</span>
                  <div className="flex items-center space-x-2">
                    {getPlatformIcon(experiment.platform)}
                    <span className="text-cyan-400">{experiment.sloImpact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Days & Disaster Recovery */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Shield className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Game Days & DR Tests</h3>
          </div>
          
          <div className="space-y-4 mb-4">
            {chaosData.gamedays.map((gameday, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium text-sm">{gameday.name}</span>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(gameday.status)} ${getStatusBg(gameday.status)}`}>
                    {gameday.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div>
                    <span className="text-gray-400">Date:</span>
                    <span className="text-blue-400 ml-1">{gameday.date}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-green-400 ml-1">{gameday.duration}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Participants:</span>
                    <span className="text-purple-400 ml-1">{gameday.participants}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Score:</span>
                    <span className="text-cyan-400 ml-1">
                      {gameday.lastScore ? `${gameday.lastScore.toFixed(1)}%` : 'TBD'}
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-1">Scenarios:</div>
                  <div className="flex flex-wrap gap-1">
                    {gameday.scenarios.slice(0, 2).map((scenario, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-red-400/20 text-red-400 rounded">
                        {scenario}
                      </span>
                    ))}
                    {gameday.scenarios.length > 2 && (
                      <span className="px-2 py-1 text-xs bg-gray-400/20 text-gray-400 rounded">
                        +{gameday.scenarios.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-xs text-blue-400">
                  Objectives: {gameday.objectives.slice(0, 2).join(' • ')}
                  {gameday.objectives.length > 2 && ` • +${gameday.objectives.length - 2} more`}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Chaos Engineering Stats</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400">Experiments/Week:</span>
                <span className="text-green-400 ml-1">{chaosData.reliabilityMetrics.experimentsPerWeek}</span>
              </div>
              <div>
                <span className="text-gray-400">Hypotheses Validated:</span>
                <span className="text-blue-400 ml-1">{chaosData.reliabilityMetrics.hypothesesValidated}</span>
              </div>
              <div>
                <span className="text-gray-400">SLO Breaches:</span>
                <span className="text-red-400 ml-1">{chaosData.reliabilityMetrics.sloBreaches}</span>
              </div>
              <div>
                <span className="text-gray-400">Incidents (Month):</span>
                <span className="text-purple-400 ml-1">{chaosData.reliabilityMetrics.incidentsThisMonth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}