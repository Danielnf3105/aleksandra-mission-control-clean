// IT Infrastructure Intelligence Center - Technology Systems, DevOps & Infrastructure Monitoring
import { useState, useEffect } from 'react';
import { Monitor, Server, Cloud, Database, Cpu, HardDrive, Wifi, Shield, Code, Activity, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ITInfrastructureIntelligenceCenter() {
  const [infraData, setInfraData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    systemOverview: {
      overallHealth: 97.8,
      totalServers: 156,
      activeServers: 151,
      serverUptime: 99.7,
      totalServices: 234,
      runningServices: 227,
      serviceAvailability: 99.4,
      totalApplications: 89,
      healthyApplications: 86,
      applicationHealth: 96.6,
      networkUptime: 99.9,
      storageUtilization: 67.8,
      cpuUtilization: 23.4,
      memoryUtilization: 78.9,
      diskUtilization: 45.6
    },
    cloudInfrastructure: {
      totalInstances: 234,
      runningInstances: 227,
      stoppedInstances: 7,
      cloudCost: 45678,
      monthlyGrowth: 12.3,
      costOptimization: 23456,
      autoScalingEvents: 1247,
      cloudProviders: [
        {
          provider: 'AWS',
          instances: 156,
          cost: 28945,
          utilization: 78.9,
          availability: 99.8,
          regions: ['us-east-1', 'eu-west-1', 'ap-southeast-1']
        },
        {
          provider: 'Azure',
          instances: 45,
          cost: 12456,
          utilization: 67.4,
          availability: 99.6,
          regions: ['eastus', 'westeurope', 'southeastasia']
        },
        {
          provider: 'GCP',
          instances: 33,
          cost: 4277,
          utilization: 82.1,
          availability: 99.7,
          regions: ['us-central1', 'europe-west1', 'asia-southeast1']
        }
      ],
      containerOrchestration: {
        kubernetesNodes: 45,
        runningPods: 1847,
        healthyPods: 1823,
        podHealth: 98.7,
        namespaces: 23,
        deployments: 156,
        services: 234,
        configMaps: 345
      }
    },
    networkInfrastructure: {
      bandwidth: 10000, // Mbps
      latency: 12.4, // ms
      packetLoss: 0.02,
      networkUptime: 99.9,
      firewallRules: 2847,
      blockedRequests: 156789,
      allowedRequests: 12847293,
      dnsQueries: 2847293,
      dnsResponseTime: 8.7,
      cdnHits: 78.9,
      loadBalancers: 12,
      endpoints: [
        { endpoint: 'api.company.com', status: 'HEALTHY', latency: 45.2, uptime: 99.9 },
        { endpoint: 'app.company.com', status: 'HEALTHY', latency: 38.7, uptime: 99.8 },
        { endpoint: 'cdn.company.com', status: 'HEALTHY', latency: 15.3, uptime: 99.9 },
        { endpoint: 'auth.company.com', status: 'DEGRADED', latency: 89.4, uptime: 98.7 },
        { endpoint: 'db.company.com', status: 'HEALTHY', latency: 23.8, uptime: 99.6 }
      ]
    },
    databaseSystems: {
      totalDatabases: 67,
      healthyDatabases: 65,
      databaseHealth: 97.0,
      totalConnections: 2847,
      activeConnections: 1234,
      queryPerformance: 94.7,
      avgQueryTime: 45.2, // ms
      slowQueries: 156,
      backupStatus: 98.9,
      replicationLag: 0.8, // seconds
      storageUsed: 2847, // GB
      storageCapacity: 5600, // GB
      databases: [
        {
          name: 'Production MySQL',
          type: 'MySQL',
          status: 'HEALTHY',
          connections: 456,
          cpu: 23.4,
          memory: 67.8,
          storage: 78.9,
          queries: 12847
        },
        {
          name: 'Analytics PostgreSQL',
          type: 'PostgreSQL',
          status: 'HEALTHY',
          connections: 234,
          cpu: 34.7,
          memory: 45.6,
          storage: 56.8,
          queries: 8945
        },
        {
          name: 'Cache Redis',
          type: 'Redis',
          status: 'HEALTHY',
          connections: 678,
          cpu: 12.3,
          memory: 89.4,
          storage: 23.4,
          queries: 156789
        },
        {
          name: 'Search Elasticsearch',
          type: 'Elasticsearch',
          status: 'WARNING',
          connections: 123,
          cpu: 78.9,
          memory: 91.2,
          storage: 67.4,
          queries: 23456
        }
      ]
    },
    applicationPerformance: {
      totalApplications: 89,
      healthyApplications: 86,
      applicationUptime: 98.9,
      avgResponseTime: 234.7, // ms
      requestsPerMinute: 15847,
      errorRate: 0.23,
      apdexScore: 0.94,
      throughput: 1247, // requests/sec
      applications: [
        {
          name: 'Main Web App',
          status: 'HEALTHY',
          uptime: 99.8,
          responseTime: 156.7,
          errorRate: 0.12,
          traffic: 5647,
          apdex: 0.97
        },
        {
          name: 'API Gateway',
          status: 'HEALTHY',
          uptime: 99.9,
          responseTime: 78.9,
          errorRate: 0.08,
          traffic: 8945,
          apdex: 0.98
        },
        {
          name: 'User Authentication',
          status: 'DEGRADED',
          uptime: 98.4,
          responseTime: 456.8,
          errorRate: 0.67,
          traffic: 2847,
          apdex: 0.78
        },
        {
          name: 'Data Processing',
          status: 'HEALTHY',
          uptime: 99.6,
          responseTime: 1247.3,
          errorRate: 0.23,
          traffic: 456,
          apdex: 0.89
        }
      ]
    },
    devOpsMetrics: {
      deployments: 156,
      successfulDeployments: 147,
      deploymentSuccessRate: 94.2,
      avgDeploymentTime: 12.4, // minutes
      buildSuccessRate: 96.8,
      testCoverage: 87.6,
      codeQuality: 92.4,
      vulnerabilityScore: 8.7, // lower is better
      cicdPipelines: 45,
      activePipelines: 23,
      buildQueue: 12,
      environments: [
        { env: 'Production', status: 'STABLE', lastDeploy: '2 hours ago', version: 'v2.4.7' },
        { env: 'Staging', status: 'STABLE', lastDeploy: '30 minutes ago', version: 'v2.4.8' },
        { env: 'Development', status: 'ACTIVE', lastDeploy: '5 minutes ago', version: 'v2.4.9-dev' },
        { env: 'Testing', status: 'STABLE', lastDeploy: '1 hour ago', version: 'v2.4.8-rc1' }
      ]
    },
    securityMetrics: {
      securityScore: 94.7,
      vulnerabilities: 23,
      criticalVulns: 0,
      highVulns: 2,
      mediumVulns: 8,
      lowVulns: 13,
      patchCompliance: 96.4,
      sslCertificates: 45,
      expiringSoon: 3,
      accessAttempts: 15847,
      failedLogins: 234,
      suspiciousActivity: 12,
      securityIncidents: 2,
      complianceScore: 97.8,
      backupIntegrity: 99.2
    },
    monitoringAlerts: [
      {
        type: 'CRITICAL',
        category: 'Database',
        message: 'Elasticsearch cluster CPU usage at 91.2% - performance degraded',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Database Team',
        timestamp: '01:24',
        recommendations: ['Scale cluster', 'Optimize queries', 'Review indexing strategy']
      },
      {
        type: 'WARNING',
        category: 'Application',
        message: 'User Authentication service response time increased to 456ms (SLA: <200ms)',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Platform Team',
        timestamp: '01:20',
        recommendations: ['Check dependencies', 'Review resource allocation', 'Analyze bottlenecks']
      },
      {
        type: 'SUCCESS',
        category: 'Deployment',
        message: 'Staging deployment v2.4.8 completed successfully - all tests passed',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'DevOps Team',
        timestamp: '01:15',
        recommendations: ['Promote to production', 'Monitor performance', 'Verify features']
      },
      {
        type: 'INFO',
        category: 'Security',
        message: '3 SSL certificates expiring within 30 days - renewal required',
        impact: 'LOW',
        actionRequired: true,
        assignedTo: 'Security Team',
        timestamp: '01:10',
        recommendations: ['Schedule renewals', 'Update automation', 'Verify domains']
      }
    ],
    costOptimization: {
      monthlyCost: 67890,
      optimizationSavings: 12456,
      savingsPercentage: 18.4,
      rightSizingOpportunities: 23,
      unusedResources: 8945,
      reservedInstances: 78.9,
      spotInstanceUsage: 34.7,
      costByCategory: [
        { category: 'Compute', cost: 28456, percentage: 41.9, trend: 'up' },
        { category: 'Storage', cost: 15678, percentage: 23.1, trend: 'stable' },
        { category: 'Network', cost: 9876, percentage: 14.5, trend: 'down' },
        { category: 'Database', cost: 7890, percentage: 11.6, trend: 'up' },
        { category: 'Security', cost: 3456, percentage: 5.1, trend: 'stable' },
        { category: 'Monitoring', cost: 2534, percentage: 3.7, trend: 'stable' }
      ]
    },
    performanceMetrics: {
      cpuUsage: 23.4,
      memoryUsage: 78.9,
      diskUsage: 45.6,
      networkThroughput: 1247.5, // Mbps
      iops: 15847,
      diskLatency: 4.7, // ms
      networkLatency: 12.4, // ms
      cacheHitRatio: 94.7,
      queueLength: 45,
      performanceTrends: [
        { metric: 'CPU', current: 23.4, yesterday: 25.6, trend: 'down' },
        { metric: 'Memory', current: 78.9, yesterday: 76.3, trend: 'up' },
        { metric: 'Disk', current: 45.6, yesterday: 47.2, trend: 'down' },
        { metric: 'Network', current: 1247.5, yesterday: 1189.7, trend: 'up' }
      ]
    },
    incidentManagement: {
      activeIncidents: 3,
      resolvedToday: 12,
      avgResolutionTime: 45.7, // minutes
      mttr: 38.9, // minutes
      incidentsByPriority: {
        p1: 1,
        p2: 2,
        p3: 8,
        p4: 15
      },
      slaCompliance: 94.7,
      escalations: 4,
      customerImpact: 'LOW',
      incidents: [
        {
          id: 'INC-2847',
          priority: 'P2',
          status: 'INVESTIGATING',
          title: 'Database Performance Degradation',
          duration: '25 minutes',
          assignee: 'Database Team'
        },
        {
          id: 'INC-2848',
          priority: 'P3',
          status: 'IN_PROGRESS',
          title: 'Authentication Service Latency',
          duration: '18 minutes',
          assignee: 'Platform Team'
        },
        {
          id: 'INC-2849',
          priority: 'P4',
          status: 'MONITORING',
          title: 'SSL Certificate Renewal',
          duration: '5 minutes',
          assignee: 'Security Team'
        }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setInfraData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        systemOverview: {
          ...prev.systemOverview,
          overallHealth: Math.max(90, Math.min(99, prev.systemOverview.overallHealth + (Math.random() - 0.5) * 0.5)),
          activeServers: Math.max(145, Math.min(156, prev.systemOverview.activeServers + Math.floor(Math.random() * 3) - 1)),
          cpuUtilization: Math.max(15, Math.min(35, prev.systemOverview.cpuUtilization + (Math.random() - 0.5) * 3)),
          memoryUtilization: Math.max(70, Math.min(90, prev.systemOverview.memoryUtilization + (Math.random() - 0.5) * 2))
        },
        applicationPerformance: {
          ...prev.applicationPerformance,
          avgResponseTime: Math.max(150, Math.min(300, prev.applicationPerformance.avgResponseTime + (Math.random() - 0.5) * 20)),
          requestsPerMinute: prev.applicationPerformance.requestsPerMinute + Math.floor(Math.random() * 200) - 100,
          errorRate: Math.max(0.1, Math.min(1.0, prev.applicationPerformance.errorRate + (Math.random() - 0.5) * 0.1))
        }
      }));
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'STABLE': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'DEGRADED': return 'text-orange-400 bg-orange-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'INVESTIGATING': return 'text-yellow-400 bg-yellow-400/20';
      case 'IN_PROGRESS': return 'text-blue-400 bg-blue-400/20';
      case 'MONITORING': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 95, reverse = false) => {
    if (reverse) {
      if (value <= excellent) return 'text-green-400';
      if (value <= good) return 'text-blue-400';
      if (value <= good * 1.5) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.7) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return '↗️';
      case 'down': return '↘️';
      default: return '→';
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">IT Infrastructure Intelligence Center</h1>
              <p className="text-slate-300">Technology systems, DevOps, cloud infrastructure, databases & performance monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-slate-400">{infraData.currentTime}</div>
            <div className="text-slate-300">Infrastructure Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* System Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                System Health
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(infraData.systemOverview.overallHealth)}</div>
            <div className="text-green-300 text-sm">Uptime: {formatPercentage(infraData.systemOverview.serverUptime)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Server className="w-5 h-5 text-blue-400 mr-2" />
                Active Servers
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{infraData.systemOverview.activeServers}</div>
            <div className="text-blue-300 text-sm">Total: {infraData.systemOverview.totalServers}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Code className="w-5 h-5 text-purple-400 mr-2" />
                Applications
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{infraData.systemOverview.healthyApplications}</div>
            <div className="text-purple-300 text-sm">Health: {formatPercentage(infraData.systemOverview.applicationHealth)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-orange-400 mr-2" />
                CPU Usage
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(infraData.systemOverview.cpuUtilization)}</div>
            <div className="text-orange-300 text-sm">Memory: {formatPercentage(infraData.systemOverview.memoryUtilization)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wifi className="w-5 h-5 text-cyan-400 mr-2" />
                Network Health
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(infraData.systemOverview.networkUptime)}</div>
            <div className="text-cyan-300 text-sm">Latency: {infraData.networkInfrastructure.latency.toFixed(1)}ms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <HardDrive className="w-5 h-5 text-yellow-400 mr-2" />
                Storage
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(infraData.systemOverview.storageUtilization)}</div>
            <div className="text-yellow-300 text-sm">Disk: {formatPercentage(infraData.systemOverview.diskUtilization)}</div>
          </div>
        </div>

        {/* Cloud Infrastructure & Network */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cloud className="w-5 h-5 text-blue-400 mr-2" />
              Cloud Infrastructure
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{infraData.cloudInfrastructure.runningInstances}</div>
                <div className="text-blue-300 text-sm">Running Instances</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(infraData.cloudInfrastructure.cloudCost)}</div>
                <div className="text-green-300 text-sm">Monthly Cost</div>
                <div className="text-gray-400 text-xs mt-1">+{formatPercentage(infraData.cloudInfrastructure.monthlyGrowth)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(infraData.cloudInfrastructure.autoScalingEvents)}</div>
                <div className="text-purple-300 text-sm">Auto-scaling Events</div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="text-white text-sm font-medium">Cloud Providers</h4>
              {infraData.cloudInfrastructure.cloudProviders.map((provider, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{provider.provider}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{formatCurrency(provider.cost)}</span>
                      <span className={`text-sm ${getPerformanceColor(provider.availability, 99, 99.5)}`}>
                        {formatPercentage(provider.availability)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-blue-400 font-medium">{provider.instances}</div>
                      <div className="text-slate-400">Instances</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(provider.utilization, 70, 85)}`}>
                        {formatPercentage(provider.utilization)}
                      </div>
                      <div className="text-slate-400">Utilization</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium">{provider.regions.length}</div>
                      <div className="text-slate-400">Regions</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{infraData.cloudInfrastructure.containerOrchestration.runningPods}</div>
                <div className="text-slate-400">K8s Pods</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatPercentage(infraData.cloudInfrastructure.containerOrchestration.podHealth)}</div>
                <div className="text-slate-400">Pod Health</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wifi className="w-5 h-5 text-cyan-400 mr-2" />
              Network Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{infraData.networkInfrastructure.bandwidth}</div>
                <div className="text-cyan-300 text-sm">Bandwidth (Mbps)</div>
                <div className="text-gray-400 text-xs mt-1">CDN: {formatPercentage(infraData.networkInfrastructure.cdnHits)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{infraData.networkInfrastructure.latency.toFixed(1)}ms</div>
                <div className="text-green-300 text-sm">Avg Latency</div>
                <div className="text-gray-400 text-xs mt-1">Loss: {formatPercentage(infraData.networkInfrastructure.packetLoss)}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Key Endpoints</h4>
              {infraData.networkInfrastructure.endpoints.map((endpoint, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{endpoint.endpoint}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(endpoint.status)}`}>
                      {endpoint.status}
                    </span>
                    <span className="text-blue-400 text-xs">{endpoint.latency.toFixed(0)}ms</span>
                    <span className="text-green-400 text-xs">{formatPercentage(endpoint.uptime)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{formatNumber(infraData.networkInfrastructure.blockedRequests)}</div>
                <div className="text-slate-400">Blocked Requests</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{infraData.networkInfrastructure.dnsResponseTime.toFixed(1)}ms</div>
                <div className="text-slate-400">DNS Response</div>
              </div>
            </div>
          </div>
        </div>

        {/* Database Systems & Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 text-green-400 mr-2" />
              Database Systems
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{infraData.databaseSystems.healthyDatabases}</div>
                <div className="text-green-300 text-sm">Healthy DBs</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{infraData.databaseSystems.activeConnections}</div>
                <div className="text-blue-300 text-sm">Connections</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{infraData.databaseSystems.avgQueryTime.toFixed(0)}ms</div>
                <div className="text-purple-300 text-sm">Avg Query</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Database Instances</h4>
              {infraData.databaseSystems.databases.map((db, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{db.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-xs">{db.type}</span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(db.status)}`}>
                        {db.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-blue-400 font-medium">{db.connections}</div>
                      <div className="text-slate-400">Conn</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(db.cpu, 70, 50, true)}`}>
                        {formatPercentage(db.cpu)}
                      </div>
                      <div className="text-slate-400">CPU</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(db.memory, 80, 60, true)}`}>
                        {formatPercentage(db.memory)}
                      </div>
                      <div className="text-slate-400">Memory</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-medium">{formatNumber(db.queries)}</div>
                      <div className="text-slate-400">Queries</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Code className="w-5 h-5 text-purple-400 mr-2" />
              Application Performance
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{formatPercentage(infraData.applicationPerformance.applicationUptime)}</div>
                <div className="text-purple-300 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">{infraData.applicationPerformance.avgResponseTime.toFixed(0)}ms</div>
                <div className="text-orange-300 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">{infraData.applicationPerformance.apdexScore.toFixed(2)}</div>
                <div className="text-cyan-300 text-sm">Apdex Score</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Applications</h4>
              {infraData.applicationPerformance.applications.map((app, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{app.name}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(app.uptime, 98, 99)}`}>
                        {formatPercentage(app.uptime)}
                      </div>
                      <div className="text-slate-400">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(app.responseTime, 200, 100, true)}`}>
                        {app.responseTime.toFixed(0)}ms
                      </div>
                      <div className="text-slate-400">Response</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(app.errorRate, 1, 0.5, true)}`}>
                        {formatPercentage(app.errorRate)}
                      </div>
                      <div className="text-slate-400">Error</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-medium">{formatNumber(app.traffic)}</div>
                      <div className="text-slate-400">Traffic</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Infrastructure Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {infraData.monitoringAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DevOps & Security Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-blue-400 mr-2" />
              DevOps Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{formatPercentage(infraData.devOpsMetrics.deploymentSuccessRate)}</div>
                <div className="text-blue-300 text-sm">Deploy Success</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{infraData.devOpsMetrics.avgDeploymentTime.toFixed(1)}m</div>
                <div className="text-green-300 text-sm">Avg Deploy Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{formatPercentage(infraData.devOpsMetrics.testCoverage)}</div>
                <div className="text-purple-300 text-sm">Test Coverage</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environments</h4>
              {infraData.devOpsMetrics.environments.map((env, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{env.env}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(env.status)}`}>
                      {env.status}
                    </span>
                    <span className="text-blue-400 text-xs">{env.version}</span>
                    <span className="text-slate-400 text-xs">{env.lastDeploy}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{infraData.devOpsMetrics.buildQueue}</div>
                <div className="text-slate-400">Build Queue</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{infraData.devOpsMetrics.activePipelines}</div>
                <div className="text-slate-400">Active Pipelines</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Security Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatPercentage(infraData.securityMetrics.securityScore)}</div>
                <div className="text-red-300 text-sm">Security Score</div>
                <div className="text-gray-400 text-xs mt-1">{infraData.securityMetrics.vulnerabilities} vulns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(infraData.securityMetrics.patchCompliance)}</div>
                <div className="text-green-300 text-sm">Patch Compliance</div>
                <div className="text-gray-400 text-xs mt-1">{infraData.securityMetrics.backupIntegrity.toFixed(1)}% backup</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{infraData.securityMetrics.criticalVulns}</div>
                <div className="text-slate-400">Critical</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{infraData.securityMetrics.highVulns}</div>
                <div className="text-slate-400">High</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{infraData.securityMetrics.mediumVulns}</div>
                <div className="text-slate-400">Medium</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{infraData.securityMetrics.lowVulns}</div>
                <div className="text-slate-400">Low</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">SSL Certificates:</span>
                <span className="text-green-400">{infraData.securityMetrics.sslCertificates} (3 expiring)</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Failed Logins:</span>
                <span className="text-orange-400">{infraData.securityMetrics.failedLogins}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Security Incidents:</span>
                <span className="text-red-400">{infraData.securityMetrics.securityIncidents}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Compliance Score:</span>
                <span className="text-blue-400">{formatPercentage(infraData.securityMetrics.complianceScore)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}