// DevOps Intelligence Center - CI/CD Pipeline Analytics & Deployment Optimization
import { useState, useEffect } from 'react';
import { GitBranch, Zap, Shield, Activity, TrendingUp, AlertTriangle, CheckCircle, Clock, Users, BarChart3, Settings, Target } from 'lucide-react';

export default function DevOpsIntelligenceCenter() {
  const [devopsData, setDevopsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    devopsOverview: {
      totalPipelines: 234,
      activePipelines: 187,
      dailyDeployments: 456,
      successfulDeployments: 423,
      failedDeployments: 33,
      avgDeploymentTime: 8.7,
      rollbacksToday: 5,
      infrastructureNodes: 167,
      containerInstances: 2456,
      kubernetesPoods: 1234,
      codeCommits: 789,
      codeReviews: 234,
      securityScans: 345,
      testCoverage: 87.9,
      buildQueueTime: 2.3,
      deploymentFrequency: 3.2
    },
    cicdPipelines: [
      {
        name: 'Web Application',
        repository: 'frontend-app',
        branch: 'main',
        status: 'SUCCESS',
        lastRun: '2026-03-18 10:42:00',
        duration: 6.5,
        stages: {
          build: { status: 'SUCCESS', duration: 2.1 },
          test: { status: 'SUCCESS', duration: 3.2, coverage: 92.4 },
          security: { status: 'SUCCESS', duration: 0.8, vulnerabilities: 0 },
          deploy: { status: 'SUCCESS', duration: 0.4 }
        },
        metrics: {
          successRate: 96.7,
          avgDuration: 7.2,
          deploymentsToday: 8,
          lastDeployment: '2026-03-18 10:42:00',
          environment: 'production'
        },
        quality: {
          testCoverage: 92.4,
          codeQuality: 'A',
          technicalDebt: '2.3 hours',
          duplicateCode: 1.2,
          maintainabilityIndex: 89.4
        },
        security: {
          vulnerabilities: 0,
          securityScore: 95.6,
          lastScan: '2026-03-18 09:00:00',
          complianceScore: 98.7
        }
      },
      {
        name: 'API Service',
        repository: 'backend-api',
        branch: 'develop',
        status: 'RUNNING',
        lastRun: '2026-03-18 10:44:00',
        duration: 4.8,
        stages: {
          build: { status: 'SUCCESS', duration: 1.5 },
          test: { status: 'RUNNING', duration: null, coverage: 88.7 },
          security: { status: 'PENDING', duration: null },
          deploy: { status: 'PENDING', duration: null }
        },
        metrics: {
          successRate: 94.2,
          avgDuration: 5.4,
          deploymentsToday: 12,
          lastDeployment: '2026-03-18 09:15:00',
          environment: 'staging'
        },
        quality: {
          testCoverage: 88.7,
          codeQuality: 'B+',
          technicalDebt: '4.7 hours',
          duplicateCode: 2.8,
          maintainabilityIndex: 82.1
        },
        security: {
          vulnerabilities: 2,
          securityScore: 87.3,
          lastScan: '2026-03-18 08:30:00',
          complianceScore: 91.4
        }
      },
      {
        name: 'Mobile App',
        repository: 'mobile-react-native',
        branch: 'release/v2.4',
        status: 'FAILED',
        lastRun: '2026-03-18 10:35:00',
        duration: 12.3,
        stages: {
          build: { status: 'SUCCESS', duration: 4.2 },
          test: { status: 'SUCCESS', duration: 6.8, coverage: 79.3 },
          security: { status: 'WARNING', duration: 1.1, vulnerabilities: 3 },
          deploy: { status: 'FAILED', duration: 0.2, error: 'Deployment timeout' }
        },
        metrics: {
          successRate: 78.9,
          avgDuration: 11.7,
          deploymentsToday: 3,
          lastDeployment: '2026-03-17 16:30:00',
          environment: 'production'
        },
        quality: {
          testCoverage: 79.3,
          codeQuality: 'C+',
          technicalDebt: '12.5 hours',
          duplicateCode: 5.4,
          maintainabilityIndex: 67.8
        },
        security: {
          vulnerabilities: 3,
          securityScore: 72.6,
          lastScan: '2026-03-18 10:00:00',
          complianceScore: 84.2
        }
      },
      {
        name: 'Infrastructure',
        repository: 'infra-terraform',
        branch: 'main',
        status: 'SUCCESS',
        lastRun: '2026-03-18 09:30:00',
        duration: 15.6,
        stages: {
          validate: { status: 'SUCCESS', duration: 2.1 },
          plan: { status: 'SUCCESS', duration: 4.3 },
          security: { status: 'SUCCESS', duration: 3.2, vulnerabilities: 0 },
          apply: { status: 'SUCCESS', duration: 6.0 }
        },
        metrics: {
          successRate: 98.4,
          avgDuration: 14.8,
          deploymentsToday: 2,
          lastDeployment: '2026-03-18 09:45:00',
          environment: 'production'
        },
        quality: {
          configDrift: 0,
          complianceScore: 97.8,
          costOptimization: 89.4,
          resourceUtilization: 76.3
        },
        security: {
          vulnerabilities: 0,
          securityScore: 98.1,
          lastScan: '2026-03-18 09:15:00',
          complianceScore: 97.8
        }
      },
      {
        name: 'ML Model Pipeline',
        repository: 'ml-models',
        branch: 'experiment/v3.2',
        status: 'SUCCESS',
        lastRun: '2026-03-18 08:00:00',
        duration: 45.7,
        stages: {
          dataValidation: { status: 'SUCCESS', duration: 8.2 },
          training: { status: 'SUCCESS', duration: 32.1 },
          evaluation: { status: 'SUCCESS', duration: 4.8, accuracy: 94.6 },
          deployment: { status: 'SUCCESS', duration: 0.6 }
        },
        metrics: {
          successRate: 89.7,
          avgDuration: 52.3,
          deploymentsToday: 1,
          lastDeployment: '2026-03-18 08:45:00',
          environment: 'production'
        },
        quality: {
          modelAccuracy: 94.6,
          dataQuality: 96.8,
          featureDrift: 2.1,
          performanceDrift: 1.3
        },
        security: {
          dataPrivacy: 98.9,
          modelSecurity: 92.4,
          auditTrail: 'Complete'
        }
      }
    ],
    deploymentMetrics: [
      {
        environment: 'Production',
        deploymentsToday: 23,
        successRate: 91.3,
        avgDeploymentTime: 6.8,
        rollbacks: 2,
        downtime: '3.2 minutes',
        healthScore: 94.7,
        trafficShift: '100% → new version',
        blueGreenActive: true,
        canaryDeployments: 5,
        featureFlags: 34,
        monitoringAlerts: 1,
        performanceImpact: '+2.3% response time',
        userExperience: 'Stable',
        lastIncident: '2026-03-16 14:20:00',
        mttr: '8.5 minutes',
        availability: 99.97
      },
      {
        environment: 'Staging',
        deploymentsToday: 45,
        successRate: 87.8,
        avgDeploymentTime: 5.2,
        rollbacks: 5,
        downtime: '12.7 minutes',
        healthScore: 87.3,
        trafficShift: '80% → new version',
        blueGreenActive: false,
        canaryDeployments: 12,
        featureFlags: 67,
        monitoringAlerts: 3,
        performanceImpact: '-1.2% response time',
        userExperience: 'Good',
        lastIncident: '2026-03-18 09:45:00',
        mttr: '15.2 minutes',
        availability: 99.23
      },
      {
        environment: 'Development',
        deploymentsToday: 89,
        successRate: 82.4,
        avgDeploymentTime: 3.7,
        rollbacks: 12,
        downtime: '45.6 minutes',
        healthScore: 76.8,
        trafficShift: 'N/A',
        blueGreenActive: false,
        canaryDeployments: 0,
        featureFlags: 123,
        monitoringAlerts: 8,
        performanceImpact: 'Variable',
        userExperience: 'Development',
        lastIncident: '2026-03-18 10:30:00',
        mttr: '25.7 minutes',
        availability: 97.85
      }
    ],
    infrastructureHealth: [
      {
        component: 'Kubernetes Cluster',
        status: 'HEALTHY',
        nodes: 12,
        pods: 1234,
        services: 156,
        cpuUtilization: 67.8,
        memoryUtilization: 73.4,
        diskUtilization: 45.6,
        networkThroughput: 234.5,
        requestsPerSecond: 5678,
        errorRate: 0.12,
        availability: 99.98,
        autoScaling: 'ACTIVE',
        namespace: 'production',
        version: 'v1.28.2',
        upgradePending: false,
        securityPatches: 'Up to date',
        backup: 'Scheduled'
      },
      {
        component: 'Docker Registry',
        status: 'HEALTHY',
        repositories: 234,
        images: 2345,
        totalSize: '567 GB',
        pullRequests: 8901,
        pushRequests: 345,
        scanResults: 'Clean',
        vulnerabilities: 0,
        storageUtilization: 67.8,
        availability: 99.95,
        replication: 'Multi-region',
        retention: '30 days',
        cleanupScheduled: true,
        accessControl: 'Role-based',
        auditLogs: 'Enabled'
      },
      {
        component: 'CI/CD Agents',
        status: 'WARNING',
        activeAgents: 23,
        totalAgents: 30,
        queueLength: 12,
        avgWaitTime: 4.5,
        utilization: 89.4,
        jobsToday: 456,
        successRate: 91.2,
        performance: 'Above average',
        capacity: 'Near limit',
        autoScaling: 'PENDING',
        maintenance: 'Scheduled 2026-03-19',
        resourceConstraints: 'CPU: 89%, Memory: 76%',
        recommendations: 'Scale up recommended'
      },
      {
        component: 'Artifact Storage',
        status: 'HEALTHY',
        totalStorage: '2.3 TB',
        usedStorage: '1.8 TB',
        utilization: 78.3,
        artifactsStored: 12345,
        downloadSpeed: '45.6 MB/s',
        uploadSpeed: '23.4 MB/s',
        availability: 99.92,
        replication: 'Cross-region',
        encryption: 'AES-256',
        backup: 'Daily',
        retention: '90 days',
        accessPattern: 'Frequently accessed',
        costOptimization: 'Lifecycle policies active'
      },
      {
        component: 'Monitoring Stack',
        status: 'EXCELLENT',
        metricsIngested: '2.34M/min',
        logsIngested: '567K/min',
        alertsActive: 23,
        dashboards: 145,
        dataRetention: '30 days',
        queryPerformance: '< 100ms',
        availability: 99.99,
        storageUsed: '456 GB',
        indexingRate: '99.8%',
        alertResponse: '< 1 minute',
        grafanaDashboards: 89,
        prometheusMetrics: 5678,
        elasticSearchHealth: 'Green'
      }
    ],
    securityScans: {
      codeScanning: {
        totalScans: 234,
        vulnerabilitiesFound: 12,
        criticalVulns: 0,
        highVulns: 2,
        mediumVulns: 5,
        lowVulns: 5,
        falsePositives: 3,
        remediationTime: '2.3 days avg',
        complianceScore: 94.7,
        lastScan: '2026-03-18 10:15:00',
        coveragePercent: 89.4,
        tools: ['SonarQube', 'CodeQL', 'Bandit'],
        trendsPositive: true
      },
      containerScanning: {
        imagesScanned: 456,
        vulnerabilitiesFound: 23,
        criticalVulns: 1,
        highVulns: 4,
        mediumVulns: 8,
        lowVulns: 10,
        baseImageUpdates: 34,
        patchedImages: 422,
        complianceScore: 91.3,
        lastScan: '2026-03-18 10:30:00',
        registryCompliance: 96.8,
        tools: ['Trivy', 'Clair', 'Twistlock']
      },
      infrastructureScanning: {
        resourcesScanned: 167,
        misconfigurations: 8,
        criticalIssues: 0,
        highIssues: 1,
        mediumIssues: 3,
        lowIssues: 4,
        complianceFrameworks: ['CIS', 'NIST', 'SOC2'],
        complianceScore: 96.4,
        lastScan: '2026-03-18 09:45:00',
        automatedRemediation: 89.4,
        tools: ['Checkov', 'Prowler', 'Scout Suite']
      }
    },
    devopsAlerts: [
      {
        type: 'CRITICAL',
        category: 'Pipeline',
        message: 'Mobile App pipeline failing consistently - 78.9% success rate below 85% threshold',
        pipeline: 'Mobile App',
        currentValue: '78.9% success rate',
        threshold: '85% minimum',
        impact: 'Mobile releases blocked, user-facing features delayed, app store deployment at risk',
        failurePattern: 'Deployment timeouts in production environment',
        severity: 'HIGH',
        timestamp: '10:44',
        trendDirection: 'WORSENING',
        detectedBy: 'Pipeline Monitor',
        recommendation: 'Investigate deployment timeout issues, increase timeout limits, check production infrastructure capacity',
        urgency: 'IMMEDIATE',
        escalation: 'DEVOPS_TEAM',
        affectedDeployments: 23,
        lastSuccessful: '2026-03-17 16:30:00',
        rollbackRequired: true,
        businessImpact: 'Mobile app features unavailable to users'
      },
      {
        type: 'HIGH',
        category: 'Infrastructure',
        message: 'CI/CD agents approaching capacity limits - 89.4% utilization with queue buildup',
        component: 'CI/CD Agents',
        currentValue: '89.4% utilization',
        threshold: '80%',
        impact: 'Build queue delays, slower deployment cycles, developer productivity impact',
        queueLength: 12,
        avgWaitTime: '4.5 minutes',
        severity: 'MEDIUM',
        timestamp: '10:42',
        trendDirection: 'INCREASING',
        detectedBy: 'Infrastructure Monitor',
        recommendation: 'Scale up CI/CD agents immediately, enable auto-scaling, optimize resource allocation',
        urgency: 'HIGH',
        escalation: 'INFRASTRUCTURE_TEAM',
        resourceConstraints: 'CPU: 89%, Memory: 76%',
        autoScalingStatus: 'PENDING',
        costImplication: '+$500/month estimated'
      },
      {
        type: 'WARNING',
        category: 'Security',
        message: 'Container vulnerability detected in production images - 1 critical vulnerability found',
        scanner: 'Container Security',
        currentValue: '1 critical, 4 high vulnerabilities',
        impact: 'Security risk in production environment, compliance violation potential',
        affectedImages: 5,
        severity: 'MEDIUM',
        timestamp: '10:30',
        vulnerability: 'CVE-2024-1234 - Remote code execution',
        detectedBy: 'Security Scanner',
        recommendation: 'Update base images immediately, rebuild and redeploy affected containers',
        urgency: 'HIGH',
        escalation: 'SECURITY_TEAM',
        patchAvailable: true,
        complianceImpact: 'SOC2 compliance at risk',
        remediationETA: '2 hours'
      },
      {
        type: 'INFO',
        category: 'Performance',
        message: 'Infrastructure pipeline achieving exceptional performance - 98.4% success rate with optimized deployment times',
        pipeline: 'Infrastructure',
        currentValue: '98.4% success rate, 15.6min avg',
        benchmarkComparison: '23% better than industry standard',
        impact: 'Reliable infrastructure deployments, minimal downtime, excellent operational stability',
        optimizations: ['Terraform state optimization', 'Parallel execution', 'Smart caching'],
        severity: 'POSITIVE',
        timestamp: '10:25',
        detectedBy: 'Performance Analytics',
        successFactors: ['Infrastructure as Code maturity', 'Automated validation', 'Progressive deployment'],
        opportunity: 'BEST_PRACTICE_SHARING',
        costSavings: '$2,340/month from optimization',
        recommendation: 'Document success patterns for application pipelines'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        deployments: 23,
        successRate: 91.3,
        avgDeploymentTime: 8.7,
        rollbacks: 2,
        buildsQueued: 12,
        testsExecuted: 2456,
        securityScans: 34,
        codeCommits: 45,
        pullRequests: 12,
        trends: {
          deployments: '+15.7%',
          successRate: '-3.2%',
          deploymentTime: '+1.2min',
          rollbacks: '+1 incident'
        }
      },
      {
        period: 'Last 24 Hours',
        deployments: 456,
        successRate: 89.7,
        avgDeploymentTime: 9.2,
        rollbacks: 15,
        buildsQueued: 234,
        testsExecuted: 45678,
        securityScans: 567,
        codeCommits: 789,
        pullRequests: 234,
        trends: {
          deployments: '+22.4%',
          successRate: '-5.8%',
          deploymentTime: '+2.1min',
          rollbacks: '+3 incidents'
        }
      },
      {
        period: 'Last 7 Days',
        deployments: 2345,
        successRate: 91.8,
        avgDeploymentTime: 8.4,
        rollbacks: 67,
        buildsQueued: 1234,
        testsExecuted: 234567,
        securityScans: 3456,
        codeCommits: 4567,
        pullRequests: 1234,
        trends: {
          deployments: '+18.9%',
          successRate: '+2.4%',
          deploymentTime: '-0.8min',
          rollbacks: '-12% incidents'
        }
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDevopsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        devopsOverview: {
          ...prev.devopsOverview,
          activePipelines: Math.max(180, Math.min(200, prev.devopsOverview.activePipelines + Math.floor((Math.random() - 0.5) * 10))),
          dailyDeployments: Math.max(400, Math.min(500, prev.devopsOverview.dailyDeployments + Math.floor((Math.random() - 0.5) * 20))),
          avgDeploymentTime: Math.max(7.0, Math.min(12.0, prev.devopsOverview.avgDeploymentTime + (Math.random() - 0.5) * 1.0)),
          buildQueueTime: Math.max(1.0, Math.min(5.0, prev.devopsOverview.buildQueueTime + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'SUCCESS': return 'text-green-400 bg-green-400/20';
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'RUNNING': return 'text-blue-400 bg-blue-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      case 'PENDING': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'IMMEDIATE': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatDuration = (minutes) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins.toFixed(1)}m`;
    }
    return `${minutes.toFixed(1)}m`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-emerald-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <GitBranch className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">DevOps Intelligence Center</h1>
              <p className="text-green-300">CI/CD pipeline analytics & deployment optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{devopsData.currentTime}</div>
            <div className="text-green-300">DevOps Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* DevOps Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <GitBranch className="w-5 h-5 text-green-400 mr-2" />
                Pipelines
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{devopsData.devopsOverview.activePipelines}</div>
            <div className="text-green-300 text-sm">{devopsData.devopsOverview.totalPipelines} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Deployments
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{devopsData.devopsOverview.dailyDeployments}</div>
            <div className="text-blue-300 text-sm">Daily</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-2" />
                Success Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage((devopsData.devopsOverview.successfulDeployments / devopsData.devopsOverview.dailyDeployments) * 100)}</div>
            <div className="text-cyan-300 text-sm">Deployments</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Deploy Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatDuration(devopsData.devopsOverview.avgDeploymentTime)}</div>
            <div className="text-yellow-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-purple-400 mr-2" />
                Test Coverage
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(devopsData.devopsOverview.testCoverage)}</div>
            <div className="text-purple-300 text-sm">Coverage</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-orange-400 mr-2" />
                Queue Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatDuration(devopsData.devopsOverview.buildQueueTime)}</div>
            <div className="text-orange-300 text-sm">Build Queue</div>
          </div>
        </div>

        {/* CI/CD Pipelines */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <GitBranch className="w-5 h-5 text-green-400 mr-2" />
            CI/CD Pipeline Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Pipeline</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                  <th className="text-center p-3 text-slate-300">Duration</th>
                  <th className="text-center p-3 text-slate-300">Success Rate</th>
                  <th className="text-center p-3 text-slate-300">Quality</th>
                  <th className="text-center p-3 text-slate-300">Security</th>
                </tr>
              </thead>
              <tbody>
                {devopsData.cicdPipelines.map((pipeline, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium text-sm">{pipeline.name}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {pipeline.repository} • {pipeline.branch} • {pipeline.metrics.environment}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(pipeline.status)}`}>
                        {pipeline.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className={`font-medium ${pipeline.duration < 10 ? 'text-green-400' : pipeline.duration < 20 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {formatDuration(pipeline.duration)}
                      </div>
                      <div className="text-slate-400 text-xs">avg {formatDuration(pipeline.metrics.avgDuration)}</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${pipeline.metrics.successRate >= 95 ? 'text-green-400' : pipeline.metrics.successRate >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {formatPercentage(pipeline.metrics.successRate)}
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${pipeline.quality.testCoverage >= 90 ? 'text-green-400' : pipeline.quality.testCoverage >= 80 ? 'text-yellow-400' : 'text-red-400'}`}>
                          Test: {formatPercentage(pipeline.quality.testCoverage)}
                        </div>
                        <div className="text-blue-400">
                          Grade: {pipeline.quality.codeQuality}
                        </div>
                        {pipeline.quality.technicalDebt && (
                          <div className="text-orange-400">
                            Debt: {pipeline.quality.technicalDebt}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${pipeline.security.vulnerabilities === 0 ? 'text-green-400' : pipeline.security.vulnerabilities < 5 ? 'text-yellow-400' : 'text-red-400'}`}>
                          Vulns: {pipeline.security.vulnerabilities}
                        </div>
                        <div className={`${pipeline.security.securityScore >= 90 ? 'text-green-400' : pipeline.security.securityScore >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>
                          Score: {pipeline.security.securityScore}
                        </div>
                        <div className="text-purple-400">
                          Compliance: {formatPercentage(pipeline.security.complianceScore)}
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Deployment Metrics & Infrastructure Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-blue-400 mr-2" />
              Environment Deployment Analytics
            </h3>
            <div className="space-y-4">
              {devopsData.deploymentMetrics.map((env, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{env.environment}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${env.successRate >= 95 ? 'text-green-400' : env.successRate >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {formatPercentage(env.successRate)}
                      </span>
                      <span className="text-slate-400 text-xs">{env.deploymentsToday} today</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Time: {formatDuration(env.avgDeploymentTime)}</div>
                    <div className="text-orange-400">Rollbacks: {env.rollbacks}</div>
                    <div className="text-purple-400">Health: {env.healthScore}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Downtime: {env.downtime}</div>
                    <div className="text-green-400">Uptime: {formatPercentage(env.availability)}</div>
                  </div>
                  
                  {env.blueGreenActive && (
                    <div className="text-blue-400 text-xs mb-2">
                      <strong>Blue/Green:</strong> Active • {env.trafficShift}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Canary: {env.canaryDeployments}</div>
                    <div className="text-pink-400">Flags: {env.featureFlags}</div>
                  </div>
                  
                  <div className="text-slate-400 text-xs">
                    <strong>MTTR:</strong> {env.mttr} • <strong>UX:</strong> {env.userExperience}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-purple-400 mr-2" />
              Infrastructure Health Monitor
            </h3>
            <div className="space-y-4">
              {devopsData.infrastructureHealth.map((component, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{component.component}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(component.status)}`}>
                        {component.status}
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(component.availability || component.utilization || 0)}</span>
                    </div>
                  </div>
                  
                  {component.nodes && (
                    <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                      <div className="text-green-400">Nodes: {component.nodes}</div>
                      <div className="text-blue-400">Pods: {component.pods}</div>
                      <div className="text-cyan-400">Services: {component.services}</div>
                    </div>
                  )}
                  
                  {component.cpuUtilization && (
                    <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                      <div className={`${component.cpuUtilization > 80 ? 'text-red-400' : component.cpuUtilization > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                        CPU: {formatPercentage(component.cpuUtilization)}
                      </div>
                      <div className={`${component.memoryUtilization > 80 ? 'text-red-400' : component.memoryUtilization > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                        MEM: {formatPercentage(component.memoryUtilization)}
                      </div>
                      <div className={`${component.diskUtilization > 80 ? 'text-red-400' : component.diskUtilization > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                        DISK: {formatPercentage(component.diskUtilization)}
                      </div>
                    </div>
                  )}
                  
                  {component.repositories && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-purple-400">Repos: {component.repositories}</div>
                      <div className="text-indigo-400">Images: {component.images}</div>
                    </div>
                  )}
                  
                  {component.activeAgents && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-cyan-400">Agents: {component.activeAgents}/{component.totalAgents}</div>
                      <div className="text-yellow-400">Queue: {component.queueLength}</div>
                    </div>
                  )}
                  
                  {component.metricsIngested && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-green-400">Metrics: {component.metricsIngested}</div>
                      <div className="text-blue-400">Logs: {component.logsIngested}</div>
                    </div>
                  )}
                  
                  <div className="text-slate-400 text-xs">
                    {component.version && <span><strong>Version:</strong> {component.version} • </span>}
                    {component.autoScaling && <span><strong>Scaling:</strong> {component.autoScaling}</span>}
                    {component.capacity && <span><strong>Capacity:</strong> {component.capacity}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Scans & Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Security Scan Analytics
            </h3>
            
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white font-semibold mb-3 text-sm">Code Security Scanning</h4>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-green-400">Scans: {devopsData.securityScans.codeScanning.totalScans}</div>
                  <div className="text-blue-400">Coverage: {formatPercentage(devopsData.securityScans.codeScanning.coveragePercent)}</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                  <div className="text-red-500">Critical: {devopsData.securityScans.codeScanning.criticalVulns}</div>
                  <div className="text-red-400">High: {devopsData.securityScans.codeScanning.highVulns}</div>
                  <div className="text-yellow-400">Medium: {devopsData.securityScans.codeScanning.mediumVulns}</div>
                  <div className="text-green-400">Low: {devopsData.securityScans.codeScanning.lowVulns}</div>
                </div>
                <div className="text-slate-400 text-xs">
                  <strong>Compliance:</strong> {formatPercentage(devopsData.securityScans.codeScanning.complianceScore)} • 
                  <strong> Remediation:</strong> {devopsData.securityScans.codeScanning.remediationTime}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white font-semibold mb-3 text-sm">Container Security Scanning</h4>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-purple-400">Images: {devopsData.securityScans.containerScanning.imagesScanned}</div>
                  <div className="text-green-400">Patched: {devopsData.securityScans.containerScanning.patchedImages}</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                  <div className="text-red-500">Critical: {devopsData.securityScans.containerScanning.criticalVulns}</div>
                  <div className="text-red-400">High: {devopsData.securityScans.containerScanning.highVulns}</div>
                  <div className="text-yellow-400">Medium: {devopsData.securityScans.containerScanning.mediumVulns}</div>
                  <div className="text-green-400">Low: {devopsData.securityScans.containerScanning.lowVulns}</div>
                </div>
                <div className="text-slate-400 text-xs">
                  <strong>Compliance:</strong> {formatPercentage(devopsData.securityScans.containerScanning.complianceScore)} • 
                  <strong> Registry:</strong> {formatPercentage(devopsData.securityScans.containerScanning.registryCompliance)}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white font-semibold mb-3 text-sm">Infrastructure Security Scanning</h4>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Resources: {devopsData.securityScans.infrastructureScanning.resourcesScanned}</div>
                  <div className="text-orange-400">Issues: {devopsData.securityScans.infrastructureScanning.misconfigurations}</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                  <div className="text-red-500">Critical: {devopsData.securityScans.infrastructureScanning.criticalIssues}</div>
                  <div className="text-red-400">High: {devopsData.securityScans.infrastructureScanning.highIssues}</div>
                  <div className="text-yellow-400">Medium: {devopsData.securityScans.infrastructureScanning.mediumIssues}</div>
                  <div className="text-green-400">Low: {devopsData.securityScans.infrastructureScanning.lowIssues}</div>
                </div>
                <div className="text-slate-400 text-xs">
                  <strong>Compliance:</strong> {formatPercentage(devopsData.securityScans.infrastructureScanning.complianceScore)} • 
                  <strong> Auto-fix:</strong> {formatPercentage(devopsData.securityScans.infrastructureScanning.automatedRemediation)}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              DevOps Performance Timeline
            </h3>
            <div className="space-y-4">
              {devopsData.performanceMetrics.map((metrics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metrics.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${metrics.successRate >= 95 ? 'text-green-400' : metrics.successRate >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {formatPercentage(metrics.successRate)}
                      </span>
                      <span className="text-slate-400 text-xs">{metrics.deployments} deploys</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Time: {formatDuration(metrics.avgDeploymentTime)}</div>
                    <div className="text-red-400">Rollbacks: {metrics.rollbacks}</div>
                    <div className="text-purple-400">Queue: {metrics.buildsQueued}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Tests: {formatNumber(metrics.testsExecuted)}</div>
                    <div className="text-orange-400">Scans: {metrics.securityScans}</div>
                    <div className="text-cyan-400">Commits: {metrics.codeCommits}</div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-green-400">Deploy: {metrics.trends.deployments}</div>
                    <div className="text-yellow-400">Success: {metrics.trends.successRate}</div>
                    <div className="text-blue-400">Time: {metrics.trends.deploymentTime}</div>
                    <div className="text-red-400">Rollbacks: {metrics.trends.rollbacks}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DevOps Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            DevOps System Alerts
          </h3>
          <div className="space-y-4">
            {devopsData.devopsAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    {alert.urgency && <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>{alert.urgency}</span>}
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.pipeline && <div className="text-slate-300">Pipeline: {alert.pipeline}</div>}
                  {alert.component && <div className="text-slate-300">Component: {alert.component}</div>}
                  {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                  {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                  {alert.queueLength && <div className="text-slate-300">Queue Length: {alert.queueLength} jobs</div>}
                  {alert.vulnerability && <div className="text-red-400">CVE: {alert.vulnerability}</div>}
                  {alert.benchmarkComparison && <div className="text-green-400">Benchmark: {alert.benchmarkComparison}</div>}
                  {alert.costSavings && <div className="text-green-400">Savings: {alert.costSavings}</div>}
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