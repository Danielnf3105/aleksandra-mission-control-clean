// InfrastructureDevOpsCenter.js - Infrastructure Monitoring & DevOps Automation Control Center
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const InfrastructureDevOpsCenter = () => {
  const [infrastructureStatus, setInfrastructureStatus] = useState({
    vercelDeployment: {
      status: 'DEPLOYED',
      environment: 'production',
      lastDeploy: Date.now() - 8 * 60 * 1000,
      buildTime: 24.3,
      bundleSize: 73.8,
      deploymentId: 'DThECRLgwsu2t9YnVsVuCUkHH6xt',
      region: 'iad1',
      functions: 7,
      domains: ['aleksandra-mission-control.vercel.app'],
      uptime: 99.97,
      responseTime: 89
    },
    openclawGateway: {
      status: 'RUNNING',
      version: 'v2.1.8',
      uptime: 1567.4, // hours
      sessions: 12,
      activeSessions: 3,
      heartbeatRate: 30, // seconds
      memory: 245.7, // MB
      cpu: 12.4, // %
      connections: 8,
      lastHeartbeat: Date.now() - 1 * 60 * 1000,
      port: 8080,
      configVersion: 'v1.23.1'
    },
    database: {
      status: 'HEALTHY',
      type: 'SQLite',
      size: 847.3, // MB
      queries: 24567,
      avgQueryTime: 23.4, // ms
      connections: 5,
      indexOptimization: 94.2,
      backupStatus: 'RECENT',
      lastBackup: Date.now() - 4 * 60 * 60 * 1000,
      replicationLag: 0
    },
    systemResources: {
      cpu: 24.7,
      memory: 67.3,
      disk: 78.9,
      network: 45.2,
      load: 1.23,
      processes: 247,
      threads: 1234,
      fileDescriptors: 456,
      swapUsage: 2.1,
      networkConnections: 89
    }
  });

  const [devOpsMetrics, setDevOpsMetrics] = useState({
    cicd: {
      pipelinesRun: 47,
      successRate: 97.9,
      avgBuildTime: 24.3,
      deploymentFrequency: 8.7, // per day
      leadTime: 127, // minutes
      mttr: 23, // minutes
      changeFailureRate: 2.1,
      activePipelines: 3,
      queuedBuilds: 1,
      totalCommits: 156,
      hotfixes: 2
    },
    tokenUsage: {
      totalTokens: 2847362,
      todayTokens: 156742,
      costToday: 23.45,
      totalCost: 847.32,
      avgTokensPerRequest: 1247,
      peakUsage: 89234,
      models: [
        { name: 'claude-sonnet-4', tokens: 1256734, cost: 456.78, requests: 1247 },
        { name: 'claude-opus-4', tokens: 847239, cost: 234.56, requests: 789 },
        { name: 'gpt-4-turbo', tokens: 456382, cost: 123.45, requests: 567 },
        { name: 'gemini-pro', tokens: 287007, cost: 32.53, requests: 234 }
      ],
      quotaUtilization: 67.4
    },
    monitoring: {
      alertsActive: 2,
      alertsResolved: 34,
      metricsCollected: 145672,
      logsProcessed: 234567,
      errorRate: 0.23,
      uptimePercentage: 99.94,
      incidentsThisMonth: 3,
      mtbf: 247.8, // hours
      slaCompliance: 99.7,
      monitoringTools: 8
    },
    security: {
      vulnerabilities: 0,
      lastScan: Date.now() - 45 * 60 * 1000,
      complianceScore: 98.7,
      accessAttempts: 2847,
      blockedAttempts: 23,
      certificateExpiry: Date.now() + 87 * 24 * 60 * 60 * 1000,
      sslGrade: 'A+',
      securityPatches: 4,
      auditEvents: 156,
      threatLevel: 'LOW'
    }
  });

  const [scheduledTasks, setScheduledTasks] = useState([
    {
      id: 'task_001',
      name: 'Database Backup',
      schedule: '0 2 * * *',
      status: 'COMPLETED',
      lastRun: Date.now() - 4 * 60 * 60 * 1000,
      nextRun: Date.now() + 20 * 60 * 60 * 1000,
      duration: 234,
      type: 'BACKUP',
      success: true,
      retries: 0
    },
    {
      id: 'task_002',
      name: 'Log Rotation',
      schedule: '0 1 * * 0',
      status: 'SCHEDULED',
      lastRun: Date.now() - 2 * 24 * 60 * 60 * 1000,
      nextRun: Date.now() + 5 * 24 * 60 * 60 * 1000,
      duration: null,
      type: 'MAINTENANCE',
      success: null,
      retries: 0
    },
    {
      id: 'task_003',
      name: 'Security Scan',
      schedule: '0 */6 * * *',
      status: 'RUNNING',
      lastRun: Date.now() - 45 * 60 * 1000,
      nextRun: Date.now() + 315 * 60 * 1000,
      duration: null,
      type: 'SECURITY',
      success: null,
      retries: 0
    },
    {
      id: 'task_004',
      name: 'Agent Heartbeat Monitor',
      schedule: '*/5 * * * *',
      status: 'COMPLETED',
      lastRun: Date.now() - 2 * 60 * 1000,
      nextRun: Date.now() + 3 * 60 * 1000,
      duration: 12,
      type: 'MONITORING',
      success: true,
      retries: 0
    },
    {
      id: 'task_005',
      name: 'Metric Aggregation',
      schedule: '*/15 * * * *',
      status: 'SCHEDULED',
      lastRun: Date.now() - 8 * 60 * 1000,
      nextRun: Date.now() + 7 * 60 * 1000,
      duration: null,
      type: 'ANALYTICS',
      success: null,
      retries: 0
    }
  ]);

  const [gitIntegration, setGitIntegration] = useState({
    repository: 'aleksandra-mission-control',
    branch: 'main',
    lastCommit: {
      hash: '9df02be',
      message: 'Continuous Improvement: Advanced Agent Orchestration & Multi-Agent Collaboration',
      author: 'Aleksandra',
      timestamp: Date.now() - 8 * 60 * 1000,
      files: 2,
      additions: 817,
      deletions: 0
    },
    stats: {
      totalCommits: 23,
      contributors: 1,
      branches: 3,
      tags: 0,
      issues: 0,
      pullRequests: 0,
      codeFrequency: 156,
      linesOfCode: 15847
    },
    ciStatus: {
      status: 'SUCCESS',
      checks: 8,
      passed: 8,
      failed: 0,
      duration: 42.3,
      coverage: 89.4
    }
  });

  const [performanceTrends, setPerformanceTrends] = useState([]);
  const [alertHistory, setAlertHistory] = useState([
    {
      id: 'alert_001',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      severity: 'WARNING',
      service: 'vercel-deployment',
      message: 'Build time exceeded 30 seconds',
      status: 'RESOLVED',
      resolution: 'Optimized bundle size',
      duration: 345
    },
    {
      id: 'alert_002',
      timestamp: Date.now() - 6 * 60 * 60 * 1000,
      severity: 'INFO',
      service: 'openclaw-gateway',
      message: 'Memory usage increased to 250MB',
      status: 'ACKNOWLEDGED',
      resolution: null,
      duration: null
    }
  ]);

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        cpu: Math.random() * 30 + 15,
        memory: Math.random() * 40 + 50,
        disk: Math.random() * 20 + 70,
        network: Math.random() * 50 + 25,
        response_time: Math.random() * 50 + 50,
        throughput: Math.random() * 100 + 200,
        errors: Math.floor(Math.random() * 5)
      });
    }
    return data;
  };

  useEffect(() => {
    setPerformanceTrends(generatePerformanceTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update system resources
      setInfrastructureStatus(prev => ({
        ...prev,
        systemResources: {
          ...prev.systemResources,
          cpu: Math.max(5, Math.min(80, prev.systemResources.cpu + (Math.random() - 0.5) * 8)),
          memory: Math.max(30, Math.min(90, prev.systemResources.memory + (Math.random() - 0.5) * 5)),
          network: Math.max(10, Math.min(90, prev.systemResources.network + (Math.random() - 0.5) * 10))
        },
        vercelDeployment: {
          ...prev.vercelDeployment,
          responseTime: Math.max(50, Math.min(200, prev.vercelDeployment.responseTime + (Math.random() - 0.5) * 10))
        },
        openclawGateway: {
          ...prev.openclawGateway,
          memory: Math.max(200, Math.min(300, prev.openclawGateway.memory + (Math.random() - 0.5) * 5)),
          cpu: Math.max(5, Math.min(30, prev.openclawGateway.cpu + (Math.random() - 0.5) * 3)),
          lastHeartbeat: Date.now()
        },
        database: {
          ...prev.database,
          queries: prev.database.queries + Math.floor(Math.random() * 10),
          avgQueryTime: Math.max(10, Math.min(50, prev.database.avgQueryTime + (Math.random() - 0.5) * 2))
        }
      }));

      // Update DevOps metrics
      setDevOpsMetrics(prev => ({
        ...prev,
        tokenUsage: {
          ...prev.tokenUsage,
          todayTokens: prev.tokenUsage.todayTokens + Math.floor(Math.random() * 100),
          costToday: prev.tokenUsage.costToday + Math.random() * 0.5
        },
        cicd: {
          ...prev.cicd,
          activePipelines: Math.floor(Math.random() * 5),
          queuedBuilds: Math.floor(Math.random() * 3)
        }
      }));

      // Update scheduled tasks
      setScheduledTasks(prev => prev.map(task => {
        if (task.status === 'RUNNING' && Math.random() > 0.7) {
          return {
            ...task,
            status: 'COMPLETED',
            duration: Math.floor(Math.random() * 300) + 30,
            success: Math.random() > 0.1
          };
        }
        if (task.status === 'SCHEDULED' && task.nextRun <= Date.now()) {
          return {
            ...task,
            status: 'RUNNING',
            lastRun: Date.now(),
            nextRun: Date.now() + (Math.random() * 3600 + 1800) * 1000
          };
        }
        return task;
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'DEPLOYED':
      case 'RUNNING':
      case 'HEALTHY':
      case 'SUCCESS':
      case 'COMPLETED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'SCHEDULED':
      case 'ACKNOWLEDGED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'BUILDING':
      case 'DEPLOYING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'FAILED':
      case 'ERROR': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'INFO': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getResourceColor = (value) => {
    if (value > 80) return 'text-red-400';
    if (value > 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  const formatBytes = (bytes) => {
    if (bytes >= 1000) return `${(bytes / 1000).toFixed(1)}GB`;
    return `${bytes.toFixed(1)}MB`;
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (seconds) => {
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  };

  const formatUptime = (hours) => {
    const days = Math.floor(hours / 24);
    const remainingHours = Math.floor(hours % 24);
    return `${days}d ${remainingHours}h`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏗️ INFRASTRUCTURE & DEVOPS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            ALL SYSTEMS OPERATIONAL
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Infrastructure monitoring & automation
          </div>
        </div>
      </div>

      {/* Infrastructure Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">VERCEL UPTIME</div>
              <div className="text-2xl font-bold text-green-100">
                {infrastructureStatus.vercelDeployment.uptime}%
              </div>
              <div className="text-xs text-green-300">
                {infrastructureStatus.vercelDeployment.responseTime}ms response
              </div>
            </div>
            <div className="text-3xl opacity-60">☁️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">GATEWAY STATUS</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatUptime(infrastructureStatus.openclawGateway.uptime)}
              </div>
              <div className="text-xs text-blue-300">
                {infrastructureStatus.openclawGateway.sessions} sessions
              </div>
            </div>
            <div className="text-3xl opacity-60">🚪</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">CI/CD SUCCESS</div>
              <div className="text-2xl font-bold text-purple-100">
                {devOpsMetrics.cicd.successRate}%
              </div>
              <div className="text-xs text-purple-300">
                {devOpsMetrics.cicd.pipelinesRun} pipelines
              </div>
            </div>
            <div className="text-3xl opacity-60">🔄</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">TOKEN COST</div>
              <div className="text-2xl font-bold text-orange-100">
                ${devOpsMetrics.tokenUsage.costToday.toFixed(2)}
              </div>
              <div className="text-xs text-orange-300">today</div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* System Resources and Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Resources */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💻 SYSTEM RESOURCES
          </h3>
          <div className="space-y-4">
            {[
              { name: 'CPU Usage', value: infrastructureStatus.systemResources.cpu, unit: '%', color: 'blue' },
              { name: 'Memory', value: infrastructureStatus.systemResources.memory, unit: '%', color: 'green' },
              { name: 'Disk Usage', value: infrastructureStatus.systemResources.disk, unit: '%', color: 'yellow' },
              { name: 'Network I/O', value: infrastructureStatus.systemResources.network, unit: '%', color: 'purple' }
            ].map((resource, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-300">{resource.name}</span>
                  <span className={`text-sm font-bold ${getResourceColor(resource.value)}`}>
                    {resource.value.toFixed(1)}{resource.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-${resource.color}-400 h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${resource.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Load Average</div>
              <div className="text-cyan-400 font-bold">{infrastructureStatus.systemResources.load}</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Processes</div>
              <div className="text-green-400 font-bold">{infrastructureStatus.systemResources.processes}</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">File Descriptors</div>
              <div className="text-blue-400 font-bold">{infrastructureStatus.systemResources.fileDescriptors}</div>
            </div>
            <div className="bg-gray-700 rounded p-3">
              <div className="text-gray-400">Connections</div>
              <div className="text-purple-400 font-bold">{infrastructureStatus.systemResources.networkConnections}</div>
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PERFORMANCE TRENDS (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={performanceTrends}>
              <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
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
                dataKey="cpu" 
                stackId="1"
                stroke="#3B82F6" 
                fill="url(#cpuGradient)" 
                name="CPU (%)"
              />
              <Area 
                type="monotone" 
                dataKey="memory" 
                stackId="2"
                stroke="#10B981" 
                fill="url(#memoryGradient)" 
                name="Memory (%)"
              />
              <Line 
                type="monotone" 
                dataKey="response_time" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Response Time (ms)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Infrastructure Services and Token Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Infrastructure Services */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔧 INFRASTRUCTURE SERVICES
          </h3>
          
          {/* Vercel Deployment */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-white">Vercel Deployment</h4>
              <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(infrastructureStatus.vercelDeployment.status)}`}>
                {infrastructureStatus.vercelDeployment.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Build Time</div>
                <div className="text-blue-400">{infrastructureStatus.vercelDeployment.buildTime}s</div>
              </div>
              <div>
                <div className="text-gray-400">Bundle Size</div>
                <div className="text-green-400">{infrastructureStatus.vercelDeployment.bundleSize} kB</div>
              </div>
              <div>
                <div className="text-gray-400">Functions</div>
                <div className="text-purple-400">{infrastructureStatus.vercelDeployment.functions}</div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <div className="text-gray-400">Region: {infrastructureStatus.vercelDeployment.region}</div>
              <div className="text-gray-400">Deploy ID: {infrastructureStatus.vercelDeployment.deploymentId}</div>
            </div>
          </div>

          {/* OpenClaw Gateway */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-white">OpenClaw Gateway</h4>
              <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(infrastructureStatus.openclawGateway.status)}`}>
                {infrastructureStatus.openclawGateway.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Memory</div>
                <div className="text-cyan-400">{infrastructureStatus.openclawGateway.memory.toFixed(1)} MB</div>
              </div>
              <div>
                <div className="text-gray-400">CPU</div>
                <div className="text-green-400">{infrastructureStatus.openclawGateway.cpu.toFixed(1)}%</div>
              </div>
              <div>
                <div className="text-gray-400">Connections</div>
                <div className="text-purple-400">{infrastructureStatus.openclawGateway.connections}</div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <div className="text-gray-400">Version: {infrastructureStatus.openclawGateway.version}</div>
              <div className="text-gray-400">Last Heartbeat: {formatTime(infrastructureStatus.openclawGateway.lastHeartbeat)}</div>
            </div>
          </div>

          {/* Database */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-white">Database</h4>
              <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(infrastructureStatus.database.status)}`}>
                {infrastructureStatus.database.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div>
                <div className="text-gray-400">Size</div>
                <div className="text-blue-400">{formatBytes(infrastructureStatus.database.size)}</div>
              </div>
              <div>
                <div className="text-gray-400">Queries</div>
                <div className="text-green-400">{infrastructureStatus.database.queries.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-gray-400">Avg Query</div>
                <div className="text-purple-400">{infrastructureStatus.database.avgQueryTime.toFixed(1)}ms</div>
              </div>
            </div>
            <div className="mt-2 text-xs">
              <div className="text-gray-400">Type: {infrastructureStatus.database.type}</div>
              <div className="text-gray-400">Last Backup: {formatTime(infrastructureStatus.database.lastBackup)}</div>
            </div>
          </div>
        </div>

        {/* Token Usage Analytics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 TOKEN USAGE ANALYTICS
          </h3>
          
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Today's Tokens</div>
                <div className="text-lg font-bold text-cyan-400">
                  {devOpsMetrics.tokenUsage.todayTokens.toLocaleString()}
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">Today's Cost</div>
                <div className="text-lg font-bold text-green-400">
                  ${devOpsMetrics.tokenUsage.costToday.toFixed(2)}
                </div>
              </div>
            </div>
            
            <div className="text-xs text-gray-400 mb-2">Quota Utilization</div>
            <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
              <div 
                className={`h-2 rounded-full ${
                  devOpsMetrics.tokenUsage.quotaUtilization > 80 ? 'bg-red-400' :
                  devOpsMetrics.tokenUsage.quotaUtilization > 60 ? 'bg-yellow-400' :
                  'bg-green-400'
                }`}
                style={{ width: `${devOpsMetrics.tokenUsage.quotaUtilization}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-400 text-right">
              {devOpsMetrics.tokenUsage.quotaUtilization.toFixed(1)}%
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-3">Model Breakdown</h4>
            <div className="space-y-2">
              {devOpsMetrics.tokenUsage.models.map((model, index) => (
                <div key={index} className="bg-gray-700 rounded p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-white font-medium">{model.name}</span>
                    <span className="text-xs text-green-400">${model.cost.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Tokens: </span>
                      <span className="text-cyan-400">{model.tokens.toLocaleString()}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Requests: </span>
                      <span className="text-purple-400">{model.requests}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Tasks and Monitoring */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scheduled Tasks */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⏰ SCHEDULED TASKS
          </h3>
          <div className="space-y-3">
            {scheduledTasks.map((task) => (
              <div key={task.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-sm">{task.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {task.type}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2 font-mono">
                  Schedule: {task.schedule}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Last Run: </span>
                    <span className="text-cyan-400">{formatTime(task.lastRun)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Next Run: </span>
                    <span className="text-green-400">
                      {task.nextRun > Date.now() ? formatTime(Date.now() + (task.nextRun - Date.now())) : 'Soon'}
                    </span>
                  </div>
                </div>

                {task.duration && (
                  <div className="mt-1 text-xs">
                    <span className="text-gray-400">Duration: </span>
                    <span className="text-purple-400">{formatDuration(task.duration)}</span>
                    {task.success !== null && (
                      <span className={`ml-2 ${task.success ? 'text-green-400' : 'text-red-400'}`}>
                        {task.success ? '✓' : '✗'}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Git Integration & CI/CD */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔄 GIT & CI/CD STATUS
          </h3>
          
          {/* Git Status */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-white text-sm mb-3">Repository Status</h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Repository:</span>
                <span className="text-cyan-400">{gitIntegration.repository}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Branch:</span>
                <span className="text-green-400">{gitIntegration.branch}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Commit:</span>
                <span className="text-purple-400">{formatTime(gitIntegration.lastCommit.timestamp)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Lines of Code:</span>
                <span className="text-blue-400">{gitIntegration.stats.linesOfCode.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="mt-3 p-2 bg-gray-800 rounded text-xs">
              <div className="text-gray-400 mb-1">Latest Commit:</div>
              <div className="text-white">{gitIntegration.lastCommit.message}</div>
              <div className="text-gray-500 mt-1">
                {gitIntegration.lastCommit.hash} • +{gitIntegration.lastCommit.additions} lines
              </div>
            </div>
          </div>

          {/* CI/CD Status */}
          <div className="bg-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-bold text-white text-sm">CI/CD Pipeline</h4>
              <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(gitIntegration.ciStatus.status)}`}>
                {gitIntegration.ciStatus.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-xs mb-3">
              <div>
                <div className="text-gray-400">Build Time</div>
                <div className="text-cyan-400">{gitIntegration.ciStatus.duration}s</div>
              </div>
              <div>
                <div className="text-gray-400">Coverage</div>
                <div className="text-green-400">{gitIntegration.ciStatus.coverage}%</div>
              </div>
              <div>
                <div className="text-gray-400">Checks Passed</div>
                <div className="text-blue-400">{gitIntegration.ciStatus.passed}/{gitIntegration.ciStatus.checks}</div>
              </div>
              <div>
                <div className="text-gray-400">Deploy Rate</div>
                <div className="text-purple-400">{devOpsMetrics.cicd.deploymentFrequency}/day</div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Success Rate:</span>
                <span className="text-green-400">{devOpsMetrics.cicd.successRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">MTTR:</span>
                <span className="text-yellow-400">{devOpsMetrics.cicd.mttr}m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Pipelines:</span>
                <span className="text-blue-400">{devOpsMetrics.cicd.activePipelines}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Monitoring Summary */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🛡️ SECURITY & MONITORING SUMMARY
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Security Status */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Security Status</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Vulnerabilities:</span>
                <span className={devOpsMetrics.security.vulnerabilities === 0 ? 'text-green-400' : 'text-red-400'}>
                  {devOpsMetrics.security.vulnerabilities}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SSL Grade:</span>
                <span className="text-green-400">{devOpsMetrics.security.sslGrade}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Compliance:</span>
                <span className="text-blue-400">{devOpsMetrics.security.complianceScore}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Threat Level:</span>
                <span className="text-green-400">{devOpsMetrics.security.threatLevel}</span>
              </div>
            </div>
          </div>

          {/* Monitoring Stats */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Monitoring</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Uptime:</span>
                <span className="text-green-400">{devOpsMetrics.monitoring.uptimePercentage}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Error Rate:</span>
                <span className="text-yellow-400">{devOpsMetrics.monitoring.errorRate}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">MTBF:</span>
                <span className="text-blue-400">{devOpsMetrics.monitoring.mtbf}h</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SLA Compliance:</span>
                <span className="text-green-400">{devOpsMetrics.monitoring.slaCompliance}%</span>
              </div>
            </div>
          </div>

          {/* Recent Alerts */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Recent Alerts</h4>
            {alertHistory.length === 0 ? (
              <div className="text-green-400 text-sm">No recent alerts ✅</div>
            ) : (
              <div className="space-y-2">
                {alertHistory.slice(0, 3).map((alert) => (
                  <div key={alert.id} className="text-xs">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`px-2 py-1 rounded border ${getSeverityColor(alert.severity)}`}>
                        {alert.severity}
                      </span>
                      <span className="text-gray-400">{formatTime(alert.timestamp)}</span>
                    </div>
                    <div className="text-gray-300">{alert.message}</div>
                    <div className="text-cyan-400">{alert.service}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureDevOpsCenter;