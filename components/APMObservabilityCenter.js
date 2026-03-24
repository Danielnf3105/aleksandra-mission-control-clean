// APM & AI Observability Center - 2026 OpenTelemetry GenAI Standards
// Based on OpenTelemetry semantic conventions, AI agent monitoring, and next-gen APM platforms
import { useState, useEffect } from 'react';
import { 
  Activity, Brain, Zap, Target, Eye, AlertTriangle, CheckCircle, Info,
  Clock, TrendingUp, TrendingDown, BarChart3, LineChart, Gauge, Settings,
  Server, Database, Cpu, MemoryStick, HardDrive, Wifi, Globe, Shield,
  Code2, GitBranch, Package, Users, RefreshCw, Play, Pause, StopCircle,
  ArrowUp, ArrowDown, Minus, Plus, AlertCircle, Award, Monitor
} from 'lucide-react';

export default function APMObservabilityCenter() {
  const [apmData, setApmData] = useState({
    currentTime: new Date().toISOString(),
    systemStatus: 'OPTIMAL',
    overallHealth: 98.4,
    totalServices: 24,
    aiAgentsActive: 8,
    applications: [
      {
        name: 'mission-control-dashboard',
        status: 'HEALTHY',
        responseTime: 142,
        throughput: 847,
        errorRate: 0.12,
        availability: 99.97,
        framework: 'Next.js',
        version: 'v2.1.0',
        lastDeploy: '2h ago',
        apdex: 0.96,
        transactions24h: 156789,
        aiIntegrations: ['content-classifier', 'recommendation-engine']
      },
      {
        name: 'content-processing-api',
        status: 'WARNING',
        responseTime: 234,
        throughput: 523,
        errorRate: 2.34,
        availability: 98.7,
        framework: 'FastAPI',
        version: 'v1.8.3',
        lastDeploy: '6h ago',
        apdex: 0.87,
        transactions24h: 89423,
        aiIntegrations: ['sentiment-analyzer', 'content-classifier']
      },
      {
        name: 'ai-agent-orchestrator',
        status: 'HEALTHY',
        responseTime: 89,
        throughput: 312,
        errorRate: 0.05,
        availability: 99.93,
        framework: 'Python',
        version: 'v3.2.1',
        lastDeploy: '1h ago',
        apdex: 0.98,
        transactions24h: 67834,
        aiIntegrations: ['multi-agent-system', 'task-orchestrator']
      }
    ],
    aiAgentObservability: [
      {
        agentName: 'content-classifier-agent',
        framework: 'CrewAI',
        provider: 'OpenAI',
        model: 'gpt-4',
        status: 'ACTIVE',
        tasksCompleted: 1247,
        avgTokenUsage: 245,
        avgLatency: 1.8,
        costPerTask: 0.034,
        successRate: 96.7,
        toolCalls: 89,
        semanticConventions: {
          'gen_ai.system': 'openai',
          'gen_ai.operation.name': 'classify_content',
          'gen_ai.request.model': 'gpt-4-0125-preview',
          'gen_ai.usage.prompt_tokens': 245,
          'gen_ai.usage.completion_tokens': 89
        }
      },
      {
        agentName: 'multi-modal-agent',
        framework: 'LangGraph',
        provider: 'Anthropic',
        model: 'claude-3-sonnet',
        status: 'ACTIVE',
        tasksCompleted: 892,
        avgTokenUsage: 356,
        avgLatency: 2.3,
        costPerTask: 0.067,
        successRate: 94.2,
        toolCalls: 156,
        semanticConventions: {
          'gen_ai.system': 'anthropic',
          'gen_ai.operation.name': 'multimodal_analysis',
          'gen_ai.request.model': 'claude-3-sonnet-20240229',
          'gen_ai.usage.prompt_tokens': 356,
          'gen_ai.usage.completion_tokens': 124
        }
      },
      {
        agentName: 'code-review-agent',
        framework: 'AutoGen',
        provider: 'Azure',
        model: 'gpt-4-turbo',
        status: 'IDLE',
        tasksCompleted: 234,
        avgTokenUsage: 512,
        avgLatency: 3.1,
        costPerTask: 0.089,
        successRate: 98.1,
        toolCalls: 45,
        semanticConventions: {
          'gen_ai.system': 'azure_openai',
          'gen_ai.operation.name': 'code_review',
          'gen_ai.request.model': 'gpt-4-turbo-2024-04-09',
          'gen_ai.usage.prompt_tokens': 512,
          'gen_ai.usage.completion_tokens': 203
        }
      }
    ],
    openTelemetryMetrics: {
      spansPerSecond: 2847,
      metricsPerSecond: 1523,
      logsPerSecond: 967,
      tracesActive: 45,
      instrumentedServices: 24,
      exporterLatency: 89,
      samplingRate: 85.7,
      dataVolume24h: '14.2 GB'
    },
    performanceMetrics: {
      p50Latency: 89,
      p90Latency: 234,
      p99Latency: 567,
      apdexScore: 0.94,
      errorBudget: 99.5,
      errorBudgetBurn: 12.3,
      mttr: 4.2,
      mtbf: 72.5
    },
    infrastructureHealth: [
      { component: 'Load Balancers', status: 'HEALTHY', utilization: 67.3, responseTime: 23 },
      { component: 'Application Servers', status: 'HEALTHY', utilization: 74.8, responseTime: 89 },
      { component: 'Database Clusters', status: 'WARNING', utilization: 89.2, responseTime: 156 },
      { component: 'Cache Layer', status: 'HEALTHY', utilization: 45.6, responseTime: 12 },
      { component: 'Message Queues', status: 'HEALTHY', utilization: 56.7, responseTime: 34 },
      { component: 'AI/ML Infrastructure', status: 'OPTIMAL', utilization: 82.1, responseTime: 78 }
    ],
    alerts: [
      {
        time: '06:02',
        severity: 'WARNING',
        source: 'content-processing-api',
        type: 'PERFORMANCE',
        message: 'Response time threshold exceeded: 234ms (threshold: 200ms)',
        status: 'ACTIVE',
        recommendation: 'Scale horizontally or optimize database queries'
      },
      {
        time: '05:58',
        severity: 'INFO',
        source: 'ai-agent-orchestrator',
        type: 'DEPLOYMENT',
        message: 'Successful deployment with improved AI agent performance',
        status: 'RESOLVED',
        recommendation: 'Monitor agent metrics for next 24h'
      },
      {
        time: '05:55',
        severity: 'CRITICAL',
        source: 'database-cluster-2',
        type: 'RESOURCE',
        message: 'CPU utilization critical: 92.4% (threshold: 85%)',
        status: 'RESOLVED',
        recommendation: 'Auto-scaling triggered, additional instances provisioned'
      }
    ],
    aiCostAnalytics: {
      totalDaily: 247.89,
      totalMonthly: 7436.70,
      topProviders: [
        { provider: 'OpenAI', cost: 4234.56, percentage: 56.9 },
        { provider: 'Anthropic', cost: 2145.78, percentage: 28.8 },
        { provider: 'Azure OpenAI', cost: 1056.36, percentage: 14.2 }
      ],
      costTrend: 'increasing',
      tokenUsage24h: 2456789,
      avgCostPerToken: 0.000034
    },
    realTimeMetrics: {
      timestamp: new Date().toISOString(),
      performance: [
        { metric: 'Application Health', value: 98.4, unit: '%', trend: 'stable' },
        { metric: 'Response Time P95', value: 156, unit: 'ms', trend: 'stable' },
        { metric: 'Error Rate', value: 0.8, unit: '%', trend: 'declining' },
        { metric: 'AI Agent Efficiency', value: 96.3, unit: '%', trend: 'improving' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setApmData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        realTimeMetrics: {
          timestamp: new Date().toISOString(),
          performance: prev.realTimeMetrics.performance.map(metric => ({
            ...metric,
            value: metric.metric === 'Response Time P95' 
              ? Math.max(80, Math.min(300, metric.value + (Math.random() - 0.5) * 20))
              : metric.metric === 'Error Rate'
              ? Math.max(0, Math.min(5, metric.value + (Math.random() - 0.6) * 0.5))
              : Math.max(90, Math.min(100, metric.value + (Math.random() - 0.5) * 1))
          }))
        },
        applications: prev.applications.map(app => ({
          ...app,
          responseTime: Math.max(50, Math.min(400, app.responseTime + (Math.random() - 0.5) * 25)),
          throughput: Math.max(200, Math.min(1000, app.throughput + (Math.random() - 0.5) * 50))
        })),
        aiAgentObservability: prev.aiAgentObservability.map(agent => ({
          ...agent,
          avgLatency: Math.max(0.5, Math.min(5, agent.avgLatency + (Math.random() - 0.5) * 0.5)),
          avgTokenUsage: Math.max(100, Math.min(800, agent.avgTokenUsage + (Math.random() - 0.5) * 30))
        }))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': case 'OPTIMAL': case 'ACTIVE': case 'RESOLVED': return 'text-green-400';
      case 'WARNING': case 'IDLE': return 'text-yellow-400';
      case 'CRITICAL': case 'ERROR': return 'text-red-400';
      case 'INFO': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'HEALTHY': case 'OPTIMAL': case 'ACTIVE': case 'RESOLVED': return 'bg-green-400/20';
      case 'WARNING': case 'IDLE': return 'bg-yellow-400/20';
      case 'CRITICAL': case 'ERROR': return 'bg-red-400/20';
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

  const getFrameworkIcon = (framework) => {
    const iconClass = "w-4 h-4";
    switch (framework) {
      case 'Next.js': return <Code2 className={`${iconClass} text-white`} />;
      case 'FastAPI': return <Code2 className={`${iconClass} text-green-400`} />;
      case 'Python': return <Code2 className={`${iconClass} text-blue-400`} />;
      case 'CrewAI': return <Brain className={`${iconClass} text-purple-400`} />;
      case 'LangGraph': return <Brain className={`${iconClass} text-cyan-400`} />;
      case 'AutoGen': return <Brain className={`${iconClass} text-orange-400`} />;
      default: return <Code2 className={`${iconClass} text-gray-400`} />;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* APM Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Activity className="w-8 h-8 text-green-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">APM & AI Observability Center</h2>
              <div className="text-sm text-gray-400">OpenTelemetry GenAI • Real-time Performance Monitoring</div>
            </div>
            <div className={`px-3 py-1 rounded text-sm font-semibold ${getStatusColor(apmData.systemStatus)} ${getStatusBg(apmData.systemStatus)}`}>
              {apmData.systemStatus}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Overall Health</div>
            <div className="text-2xl font-mono text-green-400 font-bold">
              {apmData.overallHealth.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {apmData.totalServices} services • {apmData.aiAgentsActive} AI agents
            </div>
          </div>
        </div>
        
        {/* Real-Time APM Metrics */}
        <div className="grid grid-cols-4 gap-4">
          {apmData.realTimeMetrics.performance.map((metric, index) => (
            <div key={index} className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">{metric.metric}</span>
                {getTrendIcon(metric.trend)}
              </div>
              <div className="text-lg font-mono text-white">
                {metric.value.toFixed(metric.metric.includes('Rate') ? 1 : 0)}<span className="text-sm text-gray-400 ml-1">{metric.unit}</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    metric.metric === 'Error Rate' 
                      ? (metric.value < 1 ? 'bg-green-400' : metric.value < 3 ? 'bg-yellow-400' : 'bg-red-400')
                      : metric.value >= 95 ? 'bg-green-400' : metric.value >= 80 ? 'bg-blue-400' : 'bg-yellow-400'
                  }`}
                  style={{ 
                    width: metric.metric === 'Error Rate' 
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
        {/* Application Performance Status */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Monitor className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-semibold text-white">Application Performance</h3>
            <div className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-semibold rounded">
              {apmData.applications.filter(app => app.status === 'HEALTHY').length}/{apmData.applications.length} HEALTHY
            </div>
          </div>
          
          <div className="space-y-4">
            {apmData.applications.map((app, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getFrameworkIcon(app.framework)}
                    <h4 className="text-white font-medium">{app.name}</h4>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(app.status)} ${getStatusBg(app.status)}`}>
                      {app.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">Version {app.version}</div>
                    <div className="text-xs text-gray-400">Deployed {app.lastDeploy}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Response Time</div>
                    <div className={`font-mono text-lg ${app.responseTime < 100 ? 'text-green-400' : app.responseTime < 200 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {app.responseTime}ms
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Throughput</div>
                    <div className="text-white font-mono text-lg">{app.throughput} rps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Error Rate</div>
                    <div className={`font-mono text-lg ${app.errorRate < 1 ? 'text-green-400' : app.errorRate < 3 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {app.errorRate.toFixed(2)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Availability</div>
                    <div className={`font-mono text-lg ${app.availability > 99.5 ? 'text-green-400' : app.availability > 99 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {app.availability.toFixed(2)}%
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Apdex</div>
                    <div className={`font-mono text-lg ${app.apdex > 0.9 ? 'text-green-400' : app.apdex > 0.7 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {app.apdex.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Transactions</div>
                    <div className="text-blue-400 font-mono text-lg">{formatNumber(app.transactions24h)}</div>
                  </div>
                </div>

                {/* AI Integrations */}
                {app.aiIntegrations.length > 0 && (
                  <div className="mt-2">
                    <div className="text-xs text-gray-400 mb-1">AI Integrations:</div>
                    <div className="flex flex-wrap gap-1">
                      {app.aiIntegrations.map((integration, idx) => (
                        <span key={idx} className="px-2 py-1 text-xs bg-purple-400/20 text-purple-400 rounded">
                          {integration}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* OpenTelemetry Metrics */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Target className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">OpenTelemetry</h3>
          </div>
          
          {/* OTel Metrics */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30 mb-4">
            <div className="text-sm text-gray-400 mb-2">Telemetry Volume</div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Spans/sec</span>
                <span className="text-blue-400 font-mono">{formatNumber(apmData.openTelemetryMetrics.spansPerSecond)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Metrics/sec</span>
                <span className="text-green-400 font-mono">{formatNumber(apmData.openTelemetryMetrics.metricsPerSecond)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Logs/sec</span>
                <span className="text-purple-400 font-mono">{formatNumber(apmData.openTelemetryMetrics.logsPerSecond)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Active Traces</span>
                <span className="text-cyan-400 font-mono">{apmData.openTelemetryMetrics.tracesActive}</span>
              </div>
            </div>
          </div>

          {/* Performance SLIs */}
          <div className="mb-4">
            <div className="text-sm text-gray-400 mb-2">Performance SLIs</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-2 bg-green-400/10 rounded border border-green-400/30">
                <div className="text-green-400 font-mono text-lg">P95</div>
                <div className="text-xs text-gray-400">{apmData.performanceMetrics.p90Latency}ms</div>
              </div>
              <div className="text-center p-2 bg-blue-400/10 rounded border border-blue-400/30">
                <div className="text-blue-400 font-mono text-lg">APDEX</div>
                <div className="text-xs text-gray-400">{apmData.performanceMetrics.apdexScore}</div>
              </div>
              <div className="text-center p-2 bg-purple-400/10 rounded border border-purple-400/30">
                <div className="text-purple-400 font-mono text-lg">MTTR</div>
                <div className="text-xs text-gray-400">{apmData.performanceMetrics.mttr}m</div>
              </div>
              <div className="text-center p-2 bg-cyan-400/10 rounded border border-cyan-400/30">
                <div className="text-cyan-400 font-mono text-lg">MTBF</div>
                <div className="text-xs text-gray-400">{apmData.performanceMetrics.mtbf}h</div>
              </div>
            </div>
          </div>

          {/* Data Volume */}
          <div className="text-xs text-gray-400">
            Daily Volume: <span className="text-white font-mono">{apmData.openTelemetryMetrics.dataVolume24h}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Agent Observability - OpenTelemetry GenAI */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">AI Agent Observability</h3>
            <div className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs font-semibold rounded">
              OTel GenAI
            </div>
          </div>
          
          <div className="space-y-3">
            {apmData.aiAgentObservability.map((agent, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getFrameworkIcon(agent.framework)}
                    <span className="text-white font-medium text-sm">{agent.agentName}</span>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(agent.status)} ${getStatusBg(agent.status)}`}>
                    {agent.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Tasks:</span>
                    <span className="text-green-400 ml-1">{formatNumber(agent.tasksCompleted)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Success:</span>
                    <span className="text-blue-400 ml-1">{agent.successRate.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-purple-400 ml-1">{agent.avgLatency.toFixed(1)}s</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Cost:</span>
                    <span className="text-orange-400 ml-1">{formatCurrency(agent.costPerTask)}</span>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-1">OpenTelemetry Attributes:</div>
                <div className="bg-slate-900/50 p-2 rounded text-xs font-mono">
                  <div className="text-blue-300">gen_ai.system: <span className="text-yellow-300">{agent.semanticConventions['gen_ai.system']}</span></div>
                  <div className="text-blue-300">model: <span className="text-yellow-300">{agent.semanticConventions['gen_ai.request.model']}</span></div>
                  <div className="text-blue-300">prompt_tokens: <span className="text-green-300">{agent.semanticConventions['gen_ai.usage.prompt_tokens']}</span></div>
                </div>
                
                <div className="text-xs text-gray-400 mt-1">
                  {agent.provider} • {agent.model} • {agent.framework}
                </div>
              </div>
            ))}
          </div>

          {/* AI Cost Summary */}
          <div className="mt-4 bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">AI Costs (Daily)</div>
            <div className="text-lg font-mono text-green-400 mb-2">{formatCurrency(apmData.aiCostAnalytics.totalDaily)}</div>
            <div className="space-y-1">
              {apmData.aiCostAnalytics.topProviders.map((provider, index) => (
                <div key={index} className="flex justify-between text-xs">
                  <span className="text-gray-300">{provider.provider}</span>
                  <span className="text-white">{provider.percentage.toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* APM Alerts & Infrastructure */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Performance Alerts</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {apmData.alerts.map((alert, index) => (
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
                <div className="text-xs text-gray-400">{alert.source} • {alert.type}</div>
              </div>
            ))}
          </div>

          {/* Infrastructure Health */}
          <div>
            <div className="text-sm text-gray-400 mb-2">Infrastructure Health</div>
            <div className="space-y-2">
              {apmData.infrastructureHealth.map((component, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-slate-800/30 rounded">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      component.status === 'HEALTHY' || component.status === 'OPTIMAL' ? 'bg-green-400' :
                      component.status === 'WARNING' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></div>
                    <span className="text-sm text-gray-300">{component.component}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">{component.utilization.toFixed(1)}% • {component.responseTime}ms</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}