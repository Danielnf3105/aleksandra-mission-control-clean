// Cloud Infrastructure Intelligence Center - Multi-Cloud Operations & Infrastructure Analytics
import { useState, useEffect } from 'react';
import { Cloud, Zap, Shield, Activity, TrendingUp, AlertTriangle, CheckCircle, Clock, Users, BarChart3, Settings, Target } from 'lucide-react';

export default function CloudInfrastructureIntelligenceCenter() {
  const [cloudData, setCloudData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    cloudOverview: {
      totalInstances: 1567,
      activeInstances: 1423,
      totalStorage: '2.3 PB',
      usedStorage: '1.7 PB',
      monthlySpend: 234567.89,
      costOptimization: 87.4,
      uptime: 99.97,
      cloudProviders: 3,
      regions: 12,
      availabilityZones: 36,
      containerPods: 2456,
      serverlessFunctions: 345,
      databases: 89,
      loadBalancers: 45,
      cdnDistributions: 23,
      securityGroups: 234,
      autoScalingGroups: 67
    },
    cloudProviders: [
      {
        provider: 'AWS',
        region: 'us-east-1',
        status: 'HEALTHY',
        instances: 567,
        storage: '890 TB',
        monthlySpend: 123456.78,
        services: {
          ec2: { instances: 234, status: 'HEALTHY', cost: 45678.90 },
          s3: { buckets: 45, storage: '567 TB', cost: 23456.78 },
          rds: { databases: 23, status: 'HEALTHY', cost: 12345.67 },
          lambda: { functions: 123, executions: 2345678, cost: 8901.23 },
          cloudfront: { distributions: 12, requests: 45678901, cost: 3456.78 },
          elb: { loadBalancers: 15, status: 'HEALTHY', cost: 2345.67 }
        },
        utilization: {
          cpu: 67.8,
          memory: 73.4,
          network: 45.6,
          storage: 76.3
        },
        performance: {
          latency: 23.4,
          throughput: '2.34 GB/s',
          errorRate: 0.08,
          availability: 99.98
        },
        security: {
          vulnerabilities: 3,
          compliantResources: 234,
          nonCompliantResources: 12,
          securityScore: 94.7
        }
      },
      {
        provider: 'Azure',
        region: 'West Europe',
        status: 'HEALTHY',
        instances: 456,
        storage: '678 TB',
        monthlySpend: 89012.34,
        services: {
          virtualMachines: { instances: 156, status: 'HEALTHY', cost: 23456.78 },
          blobStorage: { accounts: 34, storage: '456 TB', cost: 12345.67 },
          sqlDatabase: { databases: 18, status: 'HEALTHY', cost: 8901.23 },
          functions: { functions: 89, executions: 1234567, cost: 4567.89 },
          frontDoor: { endpoints: 8, requests: 23456789, cost: 2345.67 },
          applicationGateway: { gateways: 12, status: 'HEALTHY', cost: 1234.56 }
        },
        utilization: {
          cpu: 72.1,
          memory: 68.9,
          network: 52.3,
          storage: 81.2
        },
        performance: {
          latency: 18.7,
          throughput: '1.87 GB/s',
          errorRate: 0.05,
          availability: 99.96
        },
        security: {
          vulnerabilities: 1,
          compliantResources: 178,
          nonCompliantResources: 8,
          securityScore: 96.2
        }
      },
      {
        provider: 'GCP',
        region: 'europe-west1',
        status: 'WARNING',
        instances: 400,
        storage: '543 TB',
        monthlySpend: 67890.12,
        services: {
          computeEngine: { instances: 167, status: 'WARNING', cost: 19876.54 },
          cloudStorage: { buckets: 28, storage: '345 TB', cost: 9876.54 },
          cloudSQL: { databases: 14, status: 'HEALTHY', cost: 6543.21 },
          cloudFunctions: { functions: 67, executions: 987654, cost: 3210.98 },
          cloudCDN: { services: 5, requests: 12345678, cost: 1987.65 },
          cloudLoadBalancing: { balancers: 9, status: 'HEALTHY', cost: 987.65 }
        },
        utilization: {
          cpu: 89.4,
          memory: 85.7,
          network: 67.8,
          storage: 72.5
        },
        performance: {
          latency: 34.2,
          throughput: '1.23 GB/s',
          errorRate: 0.12,
          availability: 99.89
        },
        security: {
          vulnerabilities: 7,
          compliantResources: 145,
          nonCompliantResources: 23,
          securityScore: 89.3
        }
      }
    ],
    containerOrchestration: [
      {
        cluster: 'Production EKS',
        provider: 'AWS',
        status: 'HEALTHY',
        nodes: 24,
        pods: 1234,
        services: 156,
        namespaces: 23,
        deployments: 89,
        cpuUtilization: 67.8,
        memoryUtilization: 73.4,
        networkUtilization: 45.6,
        storageUtilization: 56.7,
        podRestarts: 12,
        failedPods: 3,
        version: 'v1.28.2',
        addOns: ['ingress-nginx', 'cert-manager', 'prometheus'],
        autoScaling: true,
        nodeAutoScaling: true
      },
      {
        cluster: 'Staging AKS',
        provider: 'Azure',
        status: 'HEALTHY',
        nodes: 12,
        pods: 567,
        services: 78,
        namespaces: 12,
        deployments: 45,
        cpuUtilization: 45.2,
        memoryUtilization: 52.8,
        networkUtilization: 34.5,
        storageUtilization: 41.3,
        podRestarts: 5,
        failedPods: 1,
        version: 'v1.27.8',
        addOns: ['ingress-nginx', 'azure-key-vault'],
        autoScaling: true,
        nodeAutoScaling: false
      },
      {
        cluster: 'Development GKE',
        provider: 'GCP',
        status: 'WARNING',
        nodes: 8,
        pods: 234,
        services: 34,
        namespaces: 8,
        deployments: 23,
        cpuUtilization: 89.7,
        memoryUtilization: 92.3,
        networkUtilization: 67.8,
        storageUtilization: 78.9,
        podRestarts: 34,
        failedPods: 8,
        version: 'v1.26.5',
        addOns: ['gcp-compute-persistent-disk-csi-driver'],
        autoScaling: false,
        nodeAutoScaling: false
      }
    ],
    serverlessAnalytics: [
      {
        service: 'AWS Lambda',
        functions: 234,
        executions: 4567890,
        avgDuration: 234.5,
        errorRate: 0.08,
        throttles: 12,
        coldStarts: 456,
        concurrentExecutions: 123,
        cost: 12345.67,
        memoryUtilization: 67.8,
        timeout: 30,
        runtime: 'Node.js 18',
        triggers: ['API Gateway', 'S3', 'DynamoDB', 'SNS'],
        layers: 45,
        environment: 'production'
      },
      {
        service: 'Azure Functions',
        functions: 156,
        executions: 2345678,
        avgDuration: 187.3,
        errorRate: 0.05,
        throttles: 5,
        coldStarts: 234,
        concurrentExecutions: 67,
        cost: 6789.01,
        memoryUtilization: 72.4,
        timeout: 60,
        runtime: 'Python 3.9',
        triggers: ['HTTP', 'Timer', 'Queue', 'Blob'],
        appSettings: 23,
        environment: 'production'
      },
      {
        service: 'Google Cloud Functions',
        functions: 89,
        executions: 1234567,
        avgDuration: 156.8,
        errorRate: 0.12,
        throttles: 23,
        coldStarts: 123,
        concurrentExecutions: 34,
        cost: 3456.78,
        memoryUtilization: 84.6,
        timeout: 540,
        runtime: 'Go 1.19',
        triggers: ['HTTP', 'Pub/Sub', 'Storage', 'Firestore'],
        environment: 'production'
      }
    ],
    costOptimization: [
      {
        category: 'Right-sizing Instances',
        potentialSavings: 45678.90,
        currentSpend: 123456.78,
        optimizedSpend: 77777.88,
        savingsPercent: 37.0,
        affectedResources: 45,
        impact: 'LOW',
        implementation: 'RECOMMENDED',
        effort: 'MEDIUM',
        timeline: '2 weeks'
      },
      {
        category: 'Reserved Instances',
        potentialSavings: 23456.78,
        currentSpend: 89012.34,
        optimizedSpend: 65555.56,
        savingsPercent: 26.4,
        affectedResources: 23,
        impact: 'NONE',
        implementation: 'APPROVED',
        effort: 'LOW',
        timeline: '1 week'
      },
      {
        category: 'Unused Resources',
        potentialSavings: 12345.67,
        currentSpend: 45678.90,
        optimizedSpend: 33333.23,
        savingsPercent: 27.0,
        affectedResources: 67,
        impact: 'NONE',
        implementation: 'SCHEDULED',
        effort: 'LOW',
        timeline: '3 days'
      },
      {
        category: 'Storage Optimization',
        potentialSavings: 8901.23,
        currentSpend: 34567.89,
        optimizedSpend: 25666.66,
        savingsPercent: 25.7,
        affectedResources: 134,
        impact: 'LOW',
        implementation: 'REVIEWING',
        effort: 'HIGH',
        timeline: '4 weeks'
      }
    ],
    cloudSecurity: [
      {
        provider: 'AWS',
        securityScore: 94.7,
        vulnerabilities: {
          critical: 0,
          high: 1,
          medium: 2,
          low: 5
        },
        compliance: {
          frameworks: ['SOC 2', 'PCI-DSS', 'GDPR'],
          overallScore: 96.8,
          findings: 3,
          remediated: 145
        },
        identity: {
          users: 234,
          roles: 45,
          policies: 156,
          mfaEnabled: 98.7,
          lastAccessReview: '2026-03-15'
        },
        network: {
          vpcs: 12,
          securityGroups: 89,
          nacls: 23,
          exposedResources: 2,
          privateSubnets: 67
        }
      },
      {
        provider: 'Azure',
        securityScore: 96.2,
        vulnerabilities: {
          critical: 0,
          high: 0,
          medium: 1,
          low: 3
        },
        compliance: {
          frameworks: ['SOC 2', 'ISO 27001'],
          overallScore: 97.5,
          findings: 1,
          remediated: 98
        },
        identity: {
          users: 156,
          roles: 34,
          policies: 89,
          mfaEnabled: 99.2,
          lastAccessReview: '2026-03-10'
        },
        network: {
          vnets: 8,
          nsgs: 45,
          exposedResources: 1,
          privateEndpoints: 23
        }
      },
      {
        provider: 'GCP',
        securityScore: 89.3,
        vulnerabilities: {
          critical: 1,
          high: 2,
          medium: 4,
          low: 8
        },
        compliance: {
          frameworks: ['SOC 2'],
          overallScore: 91.4,
          findings: 7,
          remediated: 67
        },
        identity: {
          users: 89,
          roles: 23,
          policies: 56,
          mfaEnabled: 94.6,
          lastAccessReview: '2026-03-05'
        },
        network: {
          vpcs: 5,
          firewallRules: 34,
          exposedResources: 4,
          privateConnections: 12
        }
      }
    ],
    cloudAlerts: [
      {
        type: 'CRITICAL',
        category: 'Cost Anomaly',
        message: 'Unexpected 400% cost spike detected in GCP Compute Engine - immediate investigation required',
        provider: 'GCP',
        service: 'Compute Engine',
        currentValue: '$19,876.54 daily spend',
        expectedValue: '$4,969.14 daily spend',
        impact: 'Monthly budget exceeded by 400%, potential resource hijacking or misconfiguration',
        anomalyType: 'Cost Spike',
        detectedPattern: 'Sudden increase in VM instances and storage usage',
        severity: 'CRITICAL',
        timestamp: '11:08',
        trendDirection: 'INCREASING',
        detectedBy: 'Cost Anomaly Detection',
        recommendation: 'Immediately review new resource deployments, check for unauthorized access, terminate suspicious instances',
        urgency: 'IMMEDIATE',
        escalation: 'FINOPS_TEAM',
        businessImpact: 'Budget overrun, potential security incident, service availability at risk',
        estimatedOverage: '+$447,000 monthly impact',
        autoActions: 'Spending limits activated, alerts escalated'
      },
      {
        type: 'HIGH',
        category: 'Performance',
        message: 'GCP Development cluster experiencing resource exhaustion - pods failing to start',
        provider: 'GCP',
        cluster: 'Development GKE',
        currentValue: '92.3% memory utilization',
        threshold: '85%',
        impact: 'Development workflows disrupted, application deployments failing, developer productivity impacted',
        failurePattern: '8 failed pods, 34 restarts in last hour',
        severity: 'HIGH',
        timestamp: '11:05',
        trendDirection: 'WORSENING',
        detectedBy: 'Kubernetes Monitor',
        recommendation: 'Scale cluster nodes immediately, review resource requests/limits, enable node auto-scaling',
        urgency: 'HIGH',
        escalation: 'DEVOPS_TEAM',
        resourceConstraints: 'CPU: 89.7%, Memory: 92.3%',
        nodeScalingStatus: 'DISABLED',
        queuedPods: 23
      },
      {
        type: 'MEDIUM',
        category: 'Security',
        message: 'AWS security group exposing SSH access to internet - potential security risk',
        provider: 'AWS',
        resource: 'sg-1234567890abcdef0',
        currentValue: '0.0.0.0/0 SSH access',
        securityBreach: 'Public SSH access detected',
        impact: 'Increased attack surface, potential unauthorized access, compliance violation',
        exposedInstances: 12,
        severity: 'MEDIUM',
        timestamp: '11:00',
        detectedBy: 'Security Scanner',
        recommendation: 'Restrict SSH access to specific IP ranges, implement bastion host, review access logs',
        urgency: 'MEDIUM',
        escalation: 'SECURITY_TEAM',
        complianceImpact: 'Potential SOC 2 violation',
        remediationOptions: ['IP restriction', 'VPN access', 'Bastion host']
      },
      {
        type: 'INFO',
        category: 'Optimization',
        message: 'Azure reserved instance recommendations available - potential 26.4% cost savings identified',
        provider: 'Azure',
        service: 'Virtual Machines',
        potentialSavings: '$23,456.78 monthly',
        recommendation: 'Purchase reserved instances for consistent workloads',
        impact: 'Significant cost reduction opportunity, improved cost predictability, better budget planning',
        analysisWindow: '30 days usage pattern',
        severity: 'POSITIVE',
        timestamp: '10:45',
        detectedBy: 'Cost Optimizer',
        savingsOpportunity: '26.4% reduction on VM costs',
        implementation: 'RECOMMENDED',
        paybackPeriod: '8.5 months',
        riskLevel: 'LOW'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        totalRequests: 2345678,
        avgResponseTime: 234.5,
        errorRate: 0.08,
        throughput: '2.34 GB/s',
        cpuUtilization: 67.8,
        memoryUtilization: 73.4,
        storageIOPS: 45678,
        networkLatency: 23.4,
        availability: 99.97,
        costPerHour: 97.83
      },
      {
        period: 'Last 24 Hours',
        totalRequests: 56789012,
        avgResponseTime: 187.3,
        errorRate: 0.06,
        throughput: '1.87 GB/s',
        cpuUtilization: 72.1,
        memoryUtilization: 68.9,
        storageIOPS: 52341,
        networkLatency: 18.7,
        availability: 99.95,
        costPerDay: 2347.92
      },
      {
        period: 'Last 7 Days',
        totalRequests: 397923084,
        avgResponseTime: 156.8,
        errorRate: 0.07,
        throughput: '1.56 GB/s',
        cpuUtilization: 69.4,
        memoryUtilization: 71.2,
        storageIOPS: 48765,
        networkLatency: 21.3,
        availability: 99.96,
        costPerWeek: 16435.44
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCloudData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        cloudOverview: {
          ...prev.cloudOverview,
          activeInstances: Math.max(1200, Math.min(1600, prev.cloudOverview.activeInstances + Math.floor((Math.random() - 0.5) * 50))),
          monthlySpend: Math.max(200000, Math.min(300000, prev.cloudOverview.monthlySpend + (Math.random() - 0.5) * 10000)),
          uptime: Math.max(99.5, Math.min(100.0, prev.cloudOverview.uptime + (Math.random() - 0.5) * 0.1)),
          costOptimization: Math.max(80.0, Math.min(95.0, prev.cloudOverview.costOptimization + (Math.random() - 0.5) * 2.0))
        }
      }));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'APPROVED': return 'text-green-400 bg-green-400/20';
      case 'SCHEDULED': return 'text-blue-400 bg-blue-400/20';
      case 'RECOMMENDED': return 'text-blue-400 bg-blue-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'REVIEWING': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      case 'POSITIVE': return 'text-blue-400';
      default: return 'text-slate-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => `$${amount.toLocaleString()}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatStorage = (bytes) => {
    if (bytes >= 1000) {
      return `${(bytes / 1000).toFixed(1)} PB`;
    }
    return `${bytes} TB`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
              <Cloud className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Cloud Infrastructure Intelligence Center</h1>
              <p className="text-blue-300">Multi-cloud operations & infrastructure analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{cloudData.currentTime}</div>
            <div className="text-blue-300">Cloud Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Cloud Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cloud className="w-5 h-5 text-blue-400 mr-2" />
                Instances
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{cloudData.cloudOverview.activeInstances}</div>
            <div className="text-blue-300 text-sm">{cloudData.cloudOverview.totalInstances} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Storage
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatStorage(parseFloat(cloudData.cloudOverview.usedStorage.split(' ')[0]))}</div>
            <div className="text-green-300 text-sm">{cloudData.cloudOverview.totalStorage} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Monthly Spend
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(cloudData.cloudOverview.monthlySpend)}</div>
            <div className="text-cyan-300 text-sm">Current</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-yellow-400 mr-2" />
                Optimization
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(cloudData.cloudOverview.costOptimization)}</div>
            <div className="text-yellow-300 text-sm">Efficiency</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(cloudData.cloudOverview.uptime)}</div>
            <div className="text-purple-300 text-sm">Availability</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Settings className="w-5 h-5 text-orange-400 mr-2" />
                Containers
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{cloudData.cloudOverview.containerPods}</div>
            <div className="text-orange-300 text-sm">Pods Active</div>
          </div>
        </div>

        {/* Cloud Providers */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Cloud className="w-5 h-5 text-blue-400 mr-2" />
            Multi-Cloud Provider Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Provider</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                  <th className="text-center p-3 text-slate-300">Instances</th>
                  <th className="text-center p-3 text-slate-300">Storage</th>
                  <th className="text-center p-3 text-slate-300">Monthly Spend</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Security</th>
                </tr>
              </thead>
              <tbody>
                {cloudData.cloudProviders.map((provider, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium text-sm">{provider.provider}</div>
                      <div className="text-slate-400 text-xs mt-1">{provider.region}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(provider.status)}`}>
                        {provider.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-white font-medium">{provider.instances}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{provider.storage}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-green-400 font-medium">{formatCurrency(provider.monthlySpend)}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${provider.performance.availability >= 99.95 ? 'text-green-400' : 'text-yellow-400'}`}>
                          {formatPercentage(provider.performance.availability)} uptime
                        </div>
                        <div className="text-blue-400">{provider.performance.latency}ms latency</div>
                        <div className="text-purple-400">{formatPercentage(provider.performance.errorRate * 100)} errors</div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${provider.security.vulnerabilities <= 3 ? 'text-green-400' : 'text-red-400'}`}>
                          {provider.security.vulnerabilities} vulns
                        </div>
                        <div className="text-purple-400">Score: {provider.security.securityScore}</div>
                        <div className="text-blue-400">{provider.security.compliantResources}/{provider.security.compliantResources + provider.security.nonCompliantResources} compliant</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Container Orchestration & Serverless */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-purple-400 mr-2" />
              Container Orchestration
            </h3>
            <div className="space-y-4">
              {cloudData.containerOrchestration.map((cluster, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{cluster.cluster}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(cluster.status)}`}>
                        {cluster.status}
                      </span>
                      <span className="text-slate-400 text-xs">{cluster.provider}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Nodes: {cluster.nodes}</div>
                    <div className="text-cyan-400">Pods: {cluster.pods}</div>
                    <div className="text-green-400">Services: {cluster.services}</div>
                    <div className="text-purple-400">NS: {cluster.namespaces}</div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className={`${cluster.cpuUtilization > 80 ? 'text-red-400' : cluster.cpuUtilization > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      CPU: {formatPercentage(cluster.cpuUtilization)}
                    </div>
                    <div className={`${cluster.memoryUtilization > 80 ? 'text-red-400' : cluster.memoryUtilization > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      MEM: {formatPercentage(cluster.memoryUtilization)}
                    </div>
                    <div className="text-indigo-400">NET: {formatPercentage(cluster.networkUtilization)}</div>
                    <div className="text-orange-400">DISK: {formatPercentage(cluster.storageUtilization)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`${cluster.failedPods > 5 ? 'text-red-400' : 'text-green-400'}`}>
                      Failed: {cluster.failedPods} pods
                    </div>
                    <div className="text-yellow-400">
                      Auto-scale: {cluster.autoScaling ? 'ON' : 'OFF'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Serverless Analytics
            </h3>
            <div className="space-y-4">
              {cloudData.serverlessAnalytics.map((serverless, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{serverless.service}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-xs">{serverless.functions} functions</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Exec: {formatNumber(serverless.executions)}</div>
                    <div className="text-cyan-400">Duration: {serverless.avgDuration}ms</div>
                    <div className={`${serverless.errorRate > 0.1 ? 'text-red-400' : 'text-green-400'}`}>
                      Errors: {formatPercentage(serverless.errorRate)}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Cold: {serverless.coldStarts}</div>
                    <div className="text-green-400">Concurrent: {serverless.concurrentExecutions}</div>
                    <div className="text-yellow-400">Cost: {formatCurrency(serverless.cost)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-orange-400">Runtime: {serverless.runtime}</div>
                    <div className="text-indigo-400">Memory: {formatPercentage(serverless.memoryUtilization)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Optimization & Cloud Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Cost Optimization Opportunities
            </h3>
            <div className="space-y-4">
              {cloudData.costOptimization.map((optimization, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{optimization.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(optimization.implementation)}`}>
                        {optimization.implementation}
                      </span>
                      <span className="text-green-400 text-xs">{formatPercentage(optimization.savingsPercent)} savings</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-red-400">Current: {formatCurrency(optimization.currentSpend)}</div>
                    <div className="text-green-400">Optimized: {formatCurrency(optimization.optimizedSpend)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Potential: {formatCurrency(optimization.potentialSavings)}</div>
                    <div className="text-purple-400">Resources: {optimization.affectedResources}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-blue-400">Timeline: {optimization.timeline} • Effort: {optimization.effort}</div>
                    <div className="text-cyan-400">Impact: {optimization.impact}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Multi-Cloud Security Posture
            </h3>
            <div className="space-y-4">
              {cloudData.cloudSecurity.map((security, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{security.provider}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-xs">Score: {security.securityScore}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className="text-red-500">Critical: {security.vulnerabilities.critical}</div>
                    <div className="text-red-400">High: {security.vulnerabilities.high}</div>
                    <div className="text-yellow-400">Medium: {security.vulnerabilities.medium}</div>
                    <div className="text-green-400">Low: {security.vulnerabilities.low}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Users: {security.identity.users}</div>
                    <div className="text-purple-400">MFA: {formatPercentage(security.identity.mfaEnabled)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-cyan-400">Compliance: {formatPercentage(security.compliance.overallScore)} ({security.compliance.frameworks.join(', ')})</div>
                    <div className="text-orange-400">Exposed: {security.network.exposedResources} resources</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 text-cyan-400 mr-2" />
            Cloud Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cloudData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Requests: {formatNumber(metrics.totalRequests)}</div>
                  <div className="text-purple-400">Response: {metrics.avgResponseTime}ms</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-green-400">Throughput: {metrics.throughput}</div>
                  <div className="text-red-400">Errors: {formatPercentage(metrics.errorRate)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">CPU: {formatPercentage(metrics.cpuUtilization)}</div>
                  <div className="text-yellow-400">Memory: {formatPercentage(metrics.memoryUtilization)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">IOPS: {formatNumber(metrics.storageIOPS)}</div>
                  <div className="text-orange-400">Latency: {metrics.networkLatency}ms</div>
                </div>
                
                <div className="text-xs mt-2 text-center">
                  <span className="text-green-400">Uptime: {formatPercentage(metrics.availability)}</span> •
                  <span className="text-pink-400 ml-1">Cost/Hr: {formatCurrency(metrics.costPerHour || metrics.costPerDay/24 || metrics.costPerWeek/168)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Cloud Infrastructure Alerts
          </h3>
          <div className="space-y-4">
            {cloudData.cloudAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    {alert.urgency && <span className={`text-xs ${getSeverityColor(alert.urgency)}`}>{alert.urgency}</span>}
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.provider && <div className="text-slate-300">Provider: {alert.provider}</div>}
                  {alert.service && <div className="text-slate-300">Service: {alert.service}</div>}
                  {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                  {alert.expectedValue && <div className="text-slate-300">Expected: {alert.expectedValue}</div>}
                  {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                  {alert.estimatedOverage && <div className="text-red-400">Overage: {alert.estimatedOverage}</div>}
                  {alert.potentialSavings && <div className="text-green-400">Savings: {alert.potentialSavings}</div>}
                  {alert.resourceConstraints && <div className="text-yellow-400">Resources: {alert.resourceConstraints}</div>}
                  {alert.exposedInstances && <div className="text-orange-400">Exposed Instances: {alert.exposedInstances}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact}
                </div>
                
                <div className="text-slate-300 text-xs">
                  <strong>Action:</strong> {alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}