// Unified Observability Correlation Center - 2026 AI-Powered Cross-Platform Analytics
// Based on Dynatrace Davis AI, OpenTelemetry correlation, and modern unified observability standards
import { useState, useEffect } from 'react';
import { 
  Eye, Brain, Activity, Target, Zap, Network, Globe, Search,
  TrendingUp, TrendingDown, BarChart3, Gauge, Settings, Database,
  Server, Monitor, Cpu, Users, Lock, AlertTriangle, CheckCircle,
  Clock, Info, RefreshCw, GitBranch, Package, Code2, Terminal,
  ArrowRight, ArrowLeft, Minus, Plus, Play, Pause, StopCircle,
  Layers, Link, Workflow, Sparkles, Radar, Compass, Map
} from 'lucide-react';

export default function UnifiedObservabilityCenter() {
  const [observabilityData, setObservabilityData] = useState({
    currentTime: new Date().toISOString(),
    overallHealthScore: 94.7,
    aiCorrelationEngine: 'DAVIS_AI',
    correlatedIncidents: 12,
    rootCausesFound: 8,
    falsePositives: 2,
    crossPlatformSources: [
      {
        platform: 'Infrastructure Monitoring',
        source: 'Prometheus + Grafana',
        status: 'HEALTHY',
        dataPoints: 156789,
        lastUpdate: '30s ago',
        correlationScore: 96.4,
        anomalies: 3,
        coverage: 94.7
      },
      {
        platform: 'Application Performance',
        source: 'OpenTelemetry + Jaeger',
        status: 'WARNING',
        dataPoints: 234567,
        lastUpdate: '45s ago',
        correlationScore: 87.2,
        anomalies: 8,
        coverage: 89.3
      },
      {
        platform: 'Service Mesh',
        source: 'Istio + Linkerd',
        status: 'HEALTHY',
        dataPoints: 89432,
        lastUpdate: '1m ago',
        correlationScore: 92.8,
        anomalies: 2,
        coverage: 96.1
      },
      {
        platform: 'Security Analytics',
        source: 'SIEM + UEBA',
        status: 'CRITICAL',
        dataPoints: 445632,
        lastUpdate: '20s ago',
        correlationScore: 78.9,
        anomalies: 15,
        coverage: 85.4
      },
      {
        platform: 'Cloud Infrastructure',
        source: 'AWS + Azure + GCP',
        status: 'HEALTHY',
        dataPoints: 567890,
        lastUpdate: '1m ago',
        correlationScore: 94.1,
        anomalies: 5,
        coverage: 97.8
      },
      {
        platform: 'ML/AI Operations',
        source: 'MLflow + Kubeflow',
        status: 'DEGRADED',
        dataPoints: 123456,
        lastUpdate: '2m ago',
        correlationScore: 82.6,
        anomalies: 6,
        coverage: 88.9
      }
    ],
    aiInsights: [
      {
        id: 'AI-001',
        time: '10:23',
        severity: 'CRITICAL',
        type: 'ROOT_CAUSE_ANALYSIS',
        title: 'Database Connection Pool Exhaustion → Service Degradation',
        confidence: 97.8,
        correlatedSystems: ['Infrastructure', 'APM', 'Service Mesh'],
        rootCause: 'Connection pool misconfiguration in production database cluster',
        impactRadius: 5,
        affectedServices: ['user-service', 'auth-service', 'payment-service'],
        recommendation: 'Increase connection pool size and implement connection recycling',
        aiReasoning: 'Davis AI correlated 847 events across 5 systems, identified connection exhaustion pattern',
        automatedActions: ['Scale DB connections', 'Alert DBAs', 'Initiate failover prep']
      },
      {
        id: 'AI-002',
        time: '10:20',
        severity: 'HIGH',
        type: 'ANOMALY_CORRELATION',
        title: 'Unusual API Response Time Pattern → Security Threat Detection',
        confidence: 89.4,
        correlatedSystems: ['APM', 'Security', 'Network'],
        rootCause: 'Coordinated slow-down attack detected across multiple endpoints',
        impactRadius: 3,
        affectedServices: ['api-gateway', 'user-management', 'billing-service'],
        recommendation: 'Enable rate limiting and DDoS protection on affected endpoints',
        aiReasoning: 'Cross-platform correlation detected pattern matching known attack signatures',
        automatedActions: ['Enable WAF rules', 'Scale load balancers', 'Block suspicious IPs']
      },
      {
        id: 'AI-003',
        time: '10:18',
        severity: 'MEDIUM',
        type: 'PREDICTIVE_ANALYSIS',
        title: 'Resource Utilization Trend → Capacity Planning Alert',
        confidence: 92.6,
        correlatedSystems: ['Infrastructure', 'Cloud', 'MLOps'],
        rootCause: 'Machine learning model training workloads causing resource contention',
        impactRadius: 2,
        affectedServices: ['ml-training-pipeline', 'data-processing-cluster'],
        recommendation: 'Schedule ML workloads during off-peak hours or provision additional compute',
        aiReasoning: 'Predictive model identified 87% probability of resource exhaustion in next 4 hours',
        automatedActions: ['Reserve additional instances', 'Optimize ML pipelines', 'Schedule workloads']
      }
    ],
    correlationMatrix: [
      { source: 'Infrastructure', target: 'APM', strength: 94.7, events: 234, latency: 1.2 },
      { source: 'APM', target: 'Service Mesh', strength: 89.3, events: 156, latency: 0.8 },
      { source: 'Security', target: 'Infrastructure', strength: 87.6, events: 89, latency: 2.1 },
      { source: 'Cloud', target: 'Infrastructure', strength: 96.2, events: 445, latency: 0.5 },
      { source: 'MLOps', target: 'Infrastructure', strength: 78.4, events: 67, latency: 3.2 },
      { source: 'Service Mesh', target: 'Security', strength: 82.9, events: 123, latency: 1.8 }
    ],
    openTelemetryMetrics: {
      tracesCorrelated: 567890,
      spansAnalyzed: 2345678,
      metricsProcessed: 8901234,
      logsIngested: 4567890,
      correlationLatency: 847,
      dataVolume24h: '47.3 GB',
      samplingRate: 15.7,
      retentionPeriod: '30 days'
    },
    unifiedDashboards: [
      {
        name: 'Cross-Platform Health Overview',
        type: 'EXECUTIVE',
        viewers: 45,
        lastUpdate: '2m ago',
        kpis: ['Availability', 'Performance', 'Security', 'Cost'],
        alertsActive: 12,
        status: 'ACTIVE'
      },
      {
        name: 'AI-Driven Incident Analysis',
        type: 'OPERATIONAL',
        viewers: 23,
        lastUpdate: '1m ago',
        kpis: ['MTTR', 'MTBF', 'Root Causes', 'Correlation Score'],
        alertsActive: 8,
        status: 'ACTIVE'
      },
      {
        name: 'Predictive Analytics & Trends',
        type: 'STRATEGIC',
        viewers: 18,
        lastUpdate: '5m ago',
        kpis: ['Capacity', 'Growth', 'Risk Score', 'Optimization'],
        alertsActive: 3,
        status: 'ACTIVE'
      }
    ],
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Correlation Accuracy', value: 94.7, unit: '%', trend: 'improving' },
        { metric: 'Root Cause Detection', value: 89.3, unit: '%', trend: 'stable' },
        { metric: 'Cross-Platform Latency', value: 1.2, unit: 's', trend: 'declining' },
        { metric: 'AI Confidence Score', value: 92.8, unit: '%', trend: 'improving' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setObservabilityData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        overallHealthScore: Math.max(85, Math.min(98, prev.overallHealthScore + (Math.random() - 0.5) * 2)),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'Cross-Platform Latency'
              ? Math.max(0.5, Math.min(3, metric.value + (Math.random() - 0.6) * 0.3))
              : Math.max(80, Math.min(98, metric.value + (Math.random() - 0.5) * 1.5))
          }))
        },
        crossPlatformSources: prev.crossPlatformSources.map(source => ({
          ...source,
          correlationScore: Math.max(70, Math.min(100, source.correlationScore + (Math.random() - 0.5) * 3)),
          anomalies: Math.max(0, Math.min(20, source.anomalies + Math.floor((Math.random() - 0.7) * 2)))
        }))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': case 'ACTIVE': case 'OPERATIONAL': return 'text-green-400';
      case 'WARNING': case 'DEGRADED': return 'text-yellow-400';
      case 'CRITICAL': case 'ERROR': return 'text-red-400';
      case 'INFO': case 'STRATEGIC': return 'text-blue-400';
      case 'EXECUTIVE': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'HEALTHY': case 'ACTIVE': case 'OPERATIONAL': return 'bg-green-400/20';
      case 'WARNING': case 'DEGRADED': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'ERROR': return 'bg-red-400/20';
      case 'INFO': case 'STRATEGIC': return 'bg-blue-400/20';
      case 'EXECUTIVE': return 'bg-purple-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-green-400" />;
      case 'increasing': return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSeverityIcon = (severity) => {
    const iconClass = "w-4 h-4";
    switch (severity) {
      case 'CRITICAL': return <AlertTriangle className={`${iconClass} text-red-400`} />;
      case 'HIGH': return <AlertTriangle className={`${iconClass} text-orange-400`} />;
      case 'MEDIUM': return <Info className={`${iconClass} text-yellow-400`} />;
      default: return <CheckCircle className={`${iconClass} text-blue-400`} />;
    }
  };

  const getCorrelationStrength = (strength) => {
    if (strength >= 90) return { color: 'text-green-400', bg: 'bg-green-400' };
    if (strength >= 80) return { color: 'text-blue-400', bg: 'bg-blue-400' };
    if (strength >= 70) return { color: 'text-yellow-400', bg: 'bg-yellow-400' };
    return { color: 'text-red-400', bg: 'bg-red-400' };
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Unified Observability Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Eye className="w-8 h-8 text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Unified Observability Correlation Center</h2>
              <div className="text-sm text-gray-400">AI-Powered Cross-Platform Analytics • {observabilityData.aiCorrelationEngine}</div>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm font-semibold">AI ACTIVE</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Health Score</div>
            <div className={`text-2xl font-mono font-bold ${
              observabilityData.overallHealthScore >= 95 ? 'text-green-400' :
              observabilityData.overallHealthScore >= 85 ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {observabilityData.overallHealthScore.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {observabilityData.rootCausesFound}/{observabilityData.correlatedIncidents} incidents resolved
            </div>
          </div>
        </div>
        
        {/* Real-Time Observability Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {observabilityData.realTimeMetrics.performance.map((metric, index) => (
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
                    metric.metric === 'Cross-Platform Latency' 
                      ? (metric.value < 1 ? 'bg-green-400' : metric.value < 2 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.value >= 90 ? 'bg-green-400' : metric.value >= 80 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'Cross-Platform Latency' 
                      ? `${Math.min(100, (3 - metric.value) / 3 * 100)}%`
                      : `${Math.min(100, metric.value)}%` 
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cross-Platform Data Sources */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Network className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Cross-Platform Data Sources</h3>
            <div className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs font-semibold rounded">
              {observabilityData.crossPlatformSources.filter(s => s.status === 'HEALTHY').length}/{observabilityData.crossPlatformSources.length} HEALTHY
            </div>
          </div>
          
          <div className="space-y-3">
            {observabilityData.crossPlatformSources.map((source, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    <div>
                      <h4 className="text-white font-medium">{source.platform}</h4>
                      <div className="text-xs text-gray-400">{source.source}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(source.status)} ${getStatusBg(source.status)}`}>
                      {source.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Correlation Score</div>
                    <div className={`font-mono text-lg ${
                      source.correlationScore >= 90 ? 'text-green-400' :
                      source.correlationScore >= 80 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {source.correlationScore.toFixed(1)}%
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Data Points</div>
                    <div className="text-blue-400 font-mono text-lg">{formatNumber(source.dataPoints)}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Anomalies</div>
                    <div className={`font-mono text-lg ${source.anomalies < 5 ? 'text-green-400' : source.anomalies < 10 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {source.anomalies}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Coverage</div>
                    <div className={`font-mono text-lg ${source.coverage >= 95 ? 'text-green-400' : source.coverage >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {source.coverage.toFixed(1)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Last Update</div>
                    <div className="text-purple-400 text-sm">{source.lastUpdate}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Status</div>
                    <div className={`text-xs font-semibold ${getStatusColor(source.status)}`}>
                      {source.status}
                    </div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      source.correlationScore >= 90 ? 'bg-green-400' :
                      source.correlationScore >= 80 ? 'bg-blue-400' :
                      source.correlationScore >= 70 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    style={{ width: `${Math.min(100, source.correlationScore)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OpenTelemetry Integration */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">OpenTelemetry</h3>
          </div>
          
          {/* OTel Metrics */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Telemetry Processing</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Traces Correlated</span>
                <span className="text-green-400 font-mono">{formatNumber(observabilityData.openTelemetryMetrics.tracesCorrelated)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Spans Analyzed</span>
                <span className="text-blue-400 font-mono">{formatNumber(observabilityData.openTelemetryMetrics.spansAnalyzed)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Metrics Processed</span>
                <span className="text-purple-400 font-mono">{formatNumber(observabilityData.openTelemetryMetrics.metricsProcessed)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Logs Ingested</span>
                <span className="text-cyan-400 font-mono">{formatNumber(observabilityData.openTelemetryMetrics.logsIngested)}</span>
              </div>
            </div>
          </div>

          {/* Correlation Performance */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Correlation Performance</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Latency</span>
                <span className="text-yellow-400 font-mono">{observabilityData.openTelemetryMetrics.correlationLatency}ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Data Volume</span>
                <span className="text-orange-400 font-mono">{observabilityData.openTelemetryMetrics.dataVolume24h}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Sampling Rate</span>
                <span className="text-pink-400 font-mono">{observabilityData.openTelemetryMetrics.samplingRate.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Retention</span>
                <span className="text-emerald-400 font-mono">{observabilityData.openTelemetryMetrics.retentionPeriod}</span>
              </div>
            </div>
          </div>

          {/* Unified Dashboards */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Unified Dashboards</div>
            <div className="space-y-2">
              {observabilityData.unifiedDashboards.map((dashboard, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
                  <div>
                    <span className="text-sm text-gray-300">{dashboard.name}</span>
                    <div className="text-xs text-gray-400">{dashboard.viewers} viewers • {dashboard.alertsActive} alerts</div>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(dashboard.type)} ${getStatusBg(dashboard.type)}`}>
                    {dashboard.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI-Powered Insights */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">AI-Powered Insights</h3>
            <div className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs font-semibold rounded">
              DAVIS AI ENGINE
            </div>
          </div>
          
          <div className="space-y-4">
            {observabilityData.aiInsights.map((insight, index) => (
              <div key={index} className={`border rounded p-4 transition-all ${
                insight.severity === 'CRITICAL' ? 'border-red-400/50 bg-red-400/10' :
                insight.severity === 'HIGH' ? 'border-orange-400/50 bg-orange-400/10' :
                'border-yellow-400/50 bg-yellow-400/10'
              }`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{insight.time}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(insight.severity)} ${getStatusBg(insight.severity)}`}>
                      {insight.severity}
                    </div>
                    {getSeverityIcon(insight.severity)}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400">Confidence:</span>
                    <span className={`text-xs font-semibold ${
                      insight.confidence > 90 ? 'text-green-400' :
                      insight.confidence > 80 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {insight.confidence.toFixed(1)}%
                    </span>
                  </div>
                </div>
                
                <h4 className="text-white font-medium mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-300 mb-3">{insight.rootCause}</p>
                
                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-1">Correlated Systems:</div>
                  <div className="flex flex-wrap gap-1">
                    {insight.correlatedSystems.map((system, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-blue-400/20 text-blue-400 rounded">
                        {system}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-xs text-blue-400 mb-2">{insight.recommendation}</div>
                <div className="text-xs text-purple-300 mb-2 italic">{insight.aiReasoning}</div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Impact Radius: {insight.impactRadius} services</span>
                  <span className="text-green-400">Auto-actions: {insight.automatedActions.length}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Correlation Matrix */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Link className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Correlation Matrix</h3>
          </div>
          
          <div className="space-y-3">
            {observabilityData.correlationMatrix.map((correlation, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-blue-400 font-medium">{correlation.source}</span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <span className="text-sm text-green-400 font-medium">{correlation.target}</span>
                  </div>
                  <div className={`text-sm font-semibold ${getCorrelationStrength(correlation.strength).color}`}>
                    {correlation.strength.toFixed(1)}%
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Events:</span>
                    <span className="text-white ml-1">{correlation.events}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-yellow-400 ml-1">{correlation.latency.toFixed(1)}s</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Strength:</span>
                    <span className={`ml-1 ${getCorrelationStrength(correlation.strength).color}`}>
                      {correlation.strength >= 90 ? 'STRONG' : correlation.strength >= 80 ? 'GOOD' : 'WEAK'}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${getCorrelationStrength(correlation.strength).bg}`}
                    style={{ width: `${Math.min(100, correlation.strength)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Summary Statistics */}
          <div className="mt-4 bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Correlation Summary</div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-gray-400">Avg Strength:</span>
                <span className="text-green-400 ml-1">
                  {(observabilityData.correlationMatrix.reduce((sum, c) => sum + c.strength, 0) / observabilityData.correlationMatrix.length).toFixed(1)}%
                </span>
              </div>
              <div>
                <span className="text-gray-400">Total Events:</span>
                <span className="text-blue-400 ml-1">
                  {observabilityData.correlationMatrix.reduce((sum, c) => sum + c.events, 0)}
                </span>
              </div>
              <div>
                <span className="text-gray-400">Avg Latency:</span>
                <span className="text-yellow-400 ml-1">
                  {(observabilityData.correlationMatrix.reduce((sum, c) => sum + c.latency, 0) / observabilityData.correlationMatrix.length).toFixed(1)}s
                </span>
              </div>
              <div>
                <span className="text-gray-400">Strong Links:</span>
                <span className="text-purple-400 ml-1">
                  {observabilityData.correlationMatrix.filter(c => c.strength >= 90).length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}