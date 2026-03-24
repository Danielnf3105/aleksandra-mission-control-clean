// GitHub Actions CI/CD Dashboard - March 2026
// Comprehensive GitHub Actions-inspired CI/CD pipeline monitoring dashboard for development workflow automation
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function GitHubActionsDashboard() {
  const [workflowMetrics, setWorkflowMetrics] = useState({
    totalWorkflows: 45,
    activeWorkflows: 12,
    successfulRuns: 234,
    failedRuns: 23,
    totalRunTime: 1247,
    avgRunDuration: 5.3,
    queuedJobs: 8,
    runningJobs: 15,
    successRate: 91.0,
    deploymentFrequency: 23,
    leadTime: 18.7,
    meanTimeToRecover: 12.4
  });

  const [recentWorkflowRuns, setRecentWorkflowRuns] = useState([
    {
      id: 'run-12345',
      workflow: 'aleksandra-ai-deploy',
      branch: 'main',
      commit: 'a1b2c3d',
      status: 'success',
      duration: '4m 23s',
      triggeredBy: 'Daniel F.',
      startTime: '06:12:15',
      endTime: '06:16:38',
      event: 'push',
      jobs: 4,
      steps: 18
    },
    {
      id: 'run-12344',
      workflow: 'content-processor-ci',
      branch: 'feature/new-transcription',
      commit: 'f1e2d3c',
      status: 'in_progress',
      duration: '3m 45s',
      triggeredBy: 'Aleksandra AI',
      startTime: '06:11:30',
      endTime: null,
      event: 'pull_request',
      jobs: 3,
      steps: 12
    },
    {
      id: 'run-12343',
      workflow: 'security-scan',
      branch: 'main',
      commit: 'b3c4d5e',
      status: 'failure',
      duration: '2m 17s',
      triggeredBy: 'scheduled',
      startTime: '06:10:00',
      endTime: '06:12:17',
      event: 'schedule',
      jobs: 2,
      steps: 8
    },
    {
      id: 'run-12342',
      workflow: 'instagram-analyzer-test',
      branch: 'development',
      commit: 'c4d5e6f',
      status: 'success',
      duration: '6m 12s',
      triggeredBy: 'Daniel F.',
      startTime: '06:05:45',
      endTime: '06:11:57',
      event: 'push',
      jobs: 5,
      steps: 24
    },
    {
      id: 'run-12341',
      workflow: 'api-gateway-deploy',
      branch: 'main',
      commit: 'd5e6f7a',
      status: 'cancelled',
      duration: '1m 34s',
      triggeredBy: 'Daniel F.',
      startTime: '06:03:20',
      endTime: '06:04:54',
      event: 'workflow_dispatch',
      jobs: 2,
      steps: 7
    }
  ]);

  const [repositoryStatus, setRepositoryStatus] = useState([
    {
      repo: 'aleksandra/ai-engine',
      lastCommit: '2 hours ago',
      branch: 'main',
      status: 'passing',
      coverage: 87.3,
      workflows: 8,
      activeWorkflows: 2,
      deployments: 12,
      lastDeploy: '06:10:30'
    },
    {
      repo: 'aleksandra/content-processor',
      lastCommit: '45 minutes ago',
      branch: 'main',
      status: 'failing',
      coverage: 82.1,
      workflows: 6,
      activeWorkflows: 1,
      deployments: 8,
      lastDeploy: '05:45:20'
    },
    {
      repo: 'aleksandra/instagram-analyzer',
      lastCommit: '15 minutes ago',
      branch: 'main',
      status: 'passing',
      coverage: 91.7,
      workflows: 5,
      activeWorkflows: 1,
      deployments: 15,
      lastDeploy: '06:11:45'
    },
    {
      repo: 'aleksandra/api-gateway',
      lastCommit: '3 hours ago',
      branch: 'main',
      status: 'passing',
      coverage: 94.2,
      workflows: 4,
      activeWorkflows: 0,
      deployments: 6,
      lastDeploy: '03:30:15'
    },
    {
      repo: 'aleksandra/transcription-service',
      lastCommit: '1 hour ago',
      branch: 'main',
      status: 'pending',
      coverage: 78.9,
      workflows: 7,
      activeWorkflows: 3,
      deployments: 9,
      lastDeploy: '05:20:10'
    },
    {
      repo: 'aleksandra/mission-control',
      lastCommit: '5 minutes ago',
      branch: 'main',
      status: 'passing',
      coverage: 89.4,
      workflows: 3,
      activeWorkflows: 0,
      deployments: 156,
      lastDeploy: '06:12:00'
    }
  ]);

  const [deploymentMetrics, setDeploymentMetrics] = useState([
    {
      environment: 'production',
      deployments: 45,
      successRate: 93.3,
      avgDuration: 8.7,
      lastDeployment: '06:10:30',
      rollbacks: 3,
      status: 'healthy'
    },
    {
      environment: 'staging',
      deployments: 89,
      successRate: 87.6,
      avgDuration: 5.2,
      lastDeployment: '06:11:45',
      rollbacks: 8,
      status: 'healthy'
    },
    {
      environment: 'development',
      deployments: 234,
      successRate: 78.9,
      avgDuration: 3.4,
      lastDeployment: '06:12:00',
      rollbacks: 23,
      status: 'degraded'
    },
    {
      environment: 'testing',
      deployments: 156,
      successRate: 82.1,
      avgDuration: 4.1,
      lastDeployment: '06:09:15',
      rollbacks: 15,
      status: 'healthy'
    }
  ]);

  const [workflowTimeline, setWorkflowTimeline] = useState([
    { time: '06:12', runs: 12, success: 10, failure: 2, duration: 5.3, queueTime: 23.4, deployments: 3 },
    { time: '06:11', runs: 15, success: 13, failure: 2, duration: 6.1, queueTime: 34.5, deployments: 2 },
    { time: '06:10', runs: 8, success: 6, failure: 2, duration: 4.8, queueTime: 45.6, deployments: 4 },
    { time: '06:09', runs: 18, success: 15, failure: 3, duration: 7.2, queueTime: 56.7, deployments: 1 },
    { time: '06:08', runs: 11, success: 9, failure: 2, duration: 5.9, queueTime: 28.9, deployments: 5 }
  ]);

  const [runnerMetrics, setRunnerMetrics] = useState([
    {
      runner: 'GitHub-hosted Ubuntu',
      jobs: 145,
      avgDuration: 4.2,
      queueTime: 12.3,
      utilization: 78.9,
      cost: 45.67,
      status: 'available'
    },
    {
      runner: 'GitHub-hosted macOS',
      jobs: 67,
      avgDuration: 8.7,
      queueTime: 34.5,
      utilization: 65.4,
      cost: 123.45,
      status: 'available'
    },
    {
      runner: 'GitHub-hosted Windows',
      jobs: 23,
      avgDuration: 6.1,
      queueTime: 28.7,
      utilization: 45.6,
      cost: 67.89,
      status: 'available'
    },
    {
      runner: 'Self-hosted ARM64',
      jobs: 89,
      avgDuration: 3.4,
      queueTime: 8.9,
      utilization: 92.1,
      cost: 23.45,
      status: 'busy'
    },
    {
      runner: 'Self-hosted GPU',
      jobs: 34,
      avgDuration: 12.5,
      queueTime: 45.6,
      utilization: 87.3,
      cost: 234.56,
      status: 'available'
    }
  ]);

  const [securityScans, setSecurityScans] = useState([
    {
      scanType: 'CodeQL Analysis',
      status: 'passed',
      vulnerabilities: 0,
      lastScan: '06:11:30',
      duration: '3m 45s',
      coverage: 89.2,
      severity: 'none'
    },
    {
      scanType: 'Dependency Scan',
      status: 'warning',
      vulnerabilities: 3,
      lastScan: '06:10:15',
      duration: '1m 23s',
      coverage: 94.7,
      severity: 'medium'
    },
    {
      scanType: 'Container Scan',
      status: 'passed',
      vulnerabilities: 0,
      lastScan: '06:09:00',
      duration: '2m 12s',
      coverage: 87.8,
      severity: 'none'
    },
    {
      scanType: 'License Compliance',
      status: 'failed',
      vulnerabilities: 2,
      lastScan: '06:08:45',
      duration: '45s',
      coverage: 96.3,
      severity: 'high'
    },
    {
      scanType: 'Secret Detection',
      status: 'passed',
      vulnerabilities: 0,
      lastScan: '06:12:00',
      duration: '1m 8s',
      coverage: 91.5,
      severity: 'none'
    }
  ]);

  const [testMetrics, setTestMetrics] = useState([
    { suite: 'Unit Tests', passed: 1234, failed: 23, skipped: 45, coverage: 89.2, duration: 45.6 },
    { suite: 'Integration Tests', passed: 456, failed: 12, skipped: 8, coverage: 78.9, duration: 123.4 },
    { suite: 'E2E Tests', passed: 78, failed: 5, skipped: 3, coverage: 67.3, duration: 234.5 },
    { suite: 'Performance Tests', passed: 23, failed: 2, skipped: 1, coverage: 45.6, duration: 345.6 },
    { suite: 'Security Tests', passed: 34, failed: 1, skipped: 0, coverage: 91.8, duration: 67.8 }
  ]);

  const [artifactMetrics, setArtifactMetrics] = useState([
    { type: 'Docker Images', count: 45, size: '2.3 GB', retention: '30 days', lastUpdated: '06:11:45' },
    { type: 'Build Artifacts', count: 123, size: '890 MB', retention: '7 days', lastUpdated: '06:12:00' },
    { type: 'Test Reports', count: 234, size: '156 MB', retention: '14 days', lastUpdated: '06:11:30' },
    { type: 'Coverage Reports', count: 67, size: '45 MB', retention: '14 days', lastUpdated: '06:10:15' },
    { type: 'Security Scans', count: 89, size: '23 MB', retention: '90 days', lastUpdated: '06:09:00' }
  ]);

  const [doraMetrics, setDoraMetrics] = useState([
    { metric: 'Deployment Frequency', value: 23, unit: 'per day', target: 20, trend: '+15%', status: 'excellent' },
    { metric: 'Lead Time for Changes', value: 18.7, unit: 'minutes', target: 30, trend: '-12%', status: 'good' },
    { metric: 'Mean Time to Recovery', value: 12.4, unit: 'minutes', target: 15, trend: '-8%', status: 'good' },
    { metric: 'Change Failure Rate', value: 4.2, unit: '%', target: 5, trend: '-2%', status: 'excellent' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update workflow metrics
      setWorkflowMetrics(prev => ({
        ...prev,
        totalWorkflows: prev.totalWorkflows + Math.floor((Math.random() - 0.8) * 3),
        activeWorkflows: Math.max(5, prev.activeWorkflows + Math.floor((Math.random() - 0.5) * 3)),
        successfulRuns: prev.successfulRuns + Math.floor(Math.random() * 10) + 5,
        failedRuns: prev.failedRuns + Math.floor(Math.random() * 3),
        queuedJobs: Math.max(0, prev.queuedJobs + Math.floor((Math.random() - 0.6) * 5)),
        runningJobs: Math.max(5, Math.min(25, prev.runningJobs + Math.floor((Math.random() - 0.5) * 5))),
        avgRunDuration: Math.max(3, Math.min(10, prev.avgRunDuration + (Math.random() - 0.5) * 1)),
        successRate: Math.max(80, Math.min(98, prev.successRate + (Math.random() - 0.5) * 2)),
        deploymentFrequency: prev.deploymentFrequency + Math.floor(Math.random() * 3),
        leadTime: Math.max(10, Math.min(30, prev.leadTime + (Math.random() - 0.5) * 2))
      }));

      // Update workflow timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setWorkflowTimeline(prev => {
        const newData = {
          time: currentTime,
          runs: Math.floor(Math.random() * 15) + 8,
          success: 0,
          failure: 0,
          duration: Math.max(3, Math.min(10, prev[prev.length - 1]?.duration + (Math.random() - 0.5) * 1)) || 5.3,
          queueTime: Math.max(10, Math.min(60, prev[prev.length - 1]?.queueTime + (Math.random() - 0.5) * 10)) || 23.4,
          deployments: Math.floor(Math.random() * 6) + 1
        };
        
        newData.success = Math.floor(newData.runs * (0.8 + Math.random() * 0.15));
        newData.failure = newData.runs - newData.success;
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update recent workflow runs
      setRecentWorkflowRuns(prev => {
        const statuses = ['success', 'failure', 'in_progress', 'cancelled'];
        const workflows = ['aleksandra-ai-deploy', 'content-processor-ci', 'security-scan', 'instagram-analyzer-test', 'api-gateway-deploy'];
        const branches = ['main', 'development', 'feature/new-feature', 'hotfix/urgent-fix'];
        const events = ['push', 'pull_request', 'schedule', 'workflow_dispatch'];
        
        if (Math.random() < 0.3) { // 30% chance to add new run
          const newRun = {
            id: `run-${12345 + Math.floor(Math.random() * 1000)}`,
            workflow: workflows[Math.floor(Math.random() * workflows.length)],
            branch: branches[Math.floor(Math.random() * branches.length)],
            commit: Math.random().toString(36).substring(2, 9),
            status: statuses[Math.floor(Math.random() * statuses.length)],
            duration: `${Math.floor(Math.random() * 8) + 2}m ${Math.floor(Math.random() * 60)}s`,
            triggeredBy: Math.random() > 0.5 ? 'Daniel F.' : 'Aleksandra AI',
            startTime: currentTime,
            endTime: Math.random() > 0.3 ? currentTime : null,
            event: events[Math.floor(Math.random() * events.length)],
            jobs: Math.floor(Math.random() * 6) + 2,
            steps: Math.floor(Math.random() * 20) + 8
          };
          
          return [newRun, ...prev.slice(0, 19)]; // Keep last 20 runs, newest first
        }
        
        return prev;
      });

      // Update repository status
      setRepositoryStatus(prev => prev.map(repo => ({
        ...repo,
        coverage: Math.max(70, Math.min(95, repo.coverage + (Math.random() - 0.5) * 2)),
        activeWorkflows: Math.max(0, repo.activeWorkflows + Math.floor((Math.random() - 0.7) * 2)),
        deployments: repo.deployments + Math.floor(Math.random() * 2)
      })));

      // Update runner metrics
      setRunnerMetrics(prev => prev.map(runner => ({
        ...runner,
        jobs: runner.jobs + Math.floor(Math.random() * 10) + 2,
        avgDuration: Math.max(2, Math.min(15, runner.avgDuration + (Math.random() - 0.5) * 0.5)),
        queueTime: Math.max(5, Math.min(60, runner.queueTime + (Math.random() - 0.5) * 5)),
        utilization: Math.max(40, Math.min(100, runner.utilization + (Math.random() - 0.5) * 5)),
        cost: runner.cost + (Math.random() - 0.5) * 10
      })));
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'success': case 'passing': case 'passed': case 'healthy': return 'text-green-400';
      case 'failure': case 'failing': case 'failed': case 'degraded': return 'text-red-400';
      case 'in_progress': case 'pending': case 'busy': return 'text-yellow-400';
      case 'cancelled': case 'warning': return 'text-orange-400';
      case 'available': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getCoverageColor = (coverage) => {
    if (coverage >= 90) return 'text-green-400';
    if (coverage >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getDoraStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'excellent': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'fair': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'none': return 'text-green-400';
      case 'low': return 'text-blue-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-green-400';
    if (trend.startsWith('-')) return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* GitHub Actions Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🔧 GitHub Actions CI/CD Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>WORKFLOWS: <span className="text-green-400 font-mono">{workflowMetrics.totalWorkflows}</span></div>
                <div>SUCCESS: <span className="text-green-500">{workflowMetrics.successfulRuns}</span></div>
                <div>FAILED: <span className="text-red-400">{workflowMetrics.failedRuns}</span></div>
                <div>RATE: <span className="text-blue-400">{workflowMetrics.successRate.toFixed(1)}%</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">{workflowMetrics.deploymentFrequency}</div>
              <div className="text-sm text-gray-300">Deployments/day</div>
              <div className="text-xs text-green-300">Lead Time: {workflowMetrics.leadTime.toFixed(1)}min</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key CI/CD Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Success Rate</span>
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{workflowMetrics.successRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Workflow success rate</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Active Workflows</span>
              <span className="text-2xl">🔄</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{workflowMetrics.activeWorkflows}</div>
            <div className="text-xs text-gray-400">Currently running</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Avg Duration</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{workflowMetrics.avgRunDuration.toFixed(1)}m</div>
            <div className="text-xs text-gray-400">Average run time</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Queued Jobs</span>
              <span className="text-2xl">⏳</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{workflowMetrics.queuedJobs}</div>
            <div className="text-xs text-gray-400">Waiting to run</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Workflow Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 CI/CD Pipeline Activity Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={workflowTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#22c55e" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#22c55e" />
                <YAxis yAxisId="right" orientation="right" stroke="#22c55e" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #22c55e' }}
                  labelStyle={{ color: '#22c55e' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="runs" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" name="Total Runs" />
                <Bar yAxisId="left" dataKey="success" fill="#10b981" name="Success" />
                <Bar yAxisId="left" dataKey="failure" fill="#ef4444" name="Failures" />
                <Line yAxisId="right" type="monotone" dataKey="duration" stroke="#f59e0b" strokeWidth={2} name="Avg Duration (min)" />
                <Line yAxisId="right" type="monotone" dataKey="deployments" stroke="#8b5cf6" strokeWidth={2} name="Deployments" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* DORA Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 DORA DevOps Performance Metrics
            </h3>
            <div className="space-y-4">
              {doraMetrics.map((metric, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{metric.metric}</span>
                    <span className={`text-xs px-2 py-1 rounded ${metric.status === 'excellent' ? 'bg-green-600' : metric.status === 'good' ? 'bg-blue-600' : 'bg-yellow-600'}`}>
                      {metric.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-green-400">{metric.value} {metric.unit}</span>
                    <span className={getTrendColor(metric.trend)}>{metric.trend}</span>
                  </div>
                  <div className="text-xs text-gray-400">Target: {metric.target} {metric.unit}</div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full" 
                      style={{ width: `${Math.min(100, (metric.value / metric.target) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Workflow Runs */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔄 Recent Workflow Runs
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentWorkflowRuns.map((run, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{run.id}</span>
                    <span className={`text-xs font-bold ${getStatusColor(run.status)}`}>{run.status}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 truncate">{run.workflow}</div>
                  <div className="text-xs text-green-300 mb-1">{run.branch} • {run.commit}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-blue-400">{run.duration}</div>
                    <div className="text-yellow-400">{run.jobs} jobs</div>
                    <div className="text-purple-400">{run.event}</div>
                    <div className="text-gray-400">{run.startTime}</div>
                  </div>
                  <div className="text-xs text-cyan-300 mt-1">By: {run.triggeredBy}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Repository Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📦 Repository CI/CD Status
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {repositoryStatus.map((repo, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{repo.repo}</span>
                    <span className={`text-xs font-bold ${getStatusColor(repo.status)}`}>{repo.status}</span>
                  </div>
                  <div className="text-xs text-green-300 mb-1">{repo.branch} • {repo.lastCommit}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={getCoverageColor(repo.coverage)}>{repo.coverage.toFixed(1)}% coverage</div>
                    <div className="text-blue-400">{repo.workflows} workflows</div>
                    <div className="text-yellow-400">{repo.activeWorkflows} active</div>
                    <div className="text-purple-400">{repo.deployments} deploys</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Last deploy: {repo.lastDeploy}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Runner Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🖥️ Runner Performance Metrics
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {runnerMetrics.map((runner, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{runner.runner}</span>
                    <span className={`text-xs font-bold ${getStatusColor(runner.status)}`}>{runner.status}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-blue-400">{runner.jobs} jobs</div>
                    <div className="text-yellow-400">{runner.avgDuration.toFixed(1)}m avg</div>
                    <div className="text-purple-400">{runner.utilization.toFixed(1)}% util</div>
                    <div className="text-green-400">${runner.cost.toFixed(2)}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Queue: {runner.queueTime.toFixed(1)}s</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security & Testing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Security Scans */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔒 Security Scan Results
            </h3>
            <div className="space-y-3">
              {securityScans.map((scan, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{scan.scanType}</span>
                    <span className={`text-xs font-bold ${getStatusColor(scan.status)}`}>{scan.status}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className={getSeverityColor(scan.severity)}>{scan.vulnerabilities} vulns</div>
                    <div className="text-blue-400">{scan.duration}</div>
                    <div className={getCoverageColor(scan.coverage)}>{scan.coverage.toFixed(1)}% cov</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Last: {scan.lastScan}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Test Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🧪 Test Suite Performance
            </h3>
            <div className="space-y-3">
              {testMetrics.map((test, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{test.suite}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">{test.passed} passed</div>
                    <div className="text-red-400">{test.failed} failed</div>
                    <div className="text-yellow-400">{test.skipped} skipped</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getCoverageColor(test.coverage)}>{test.coverage.toFixed(1)}% coverage</span>
                    <span className="text-blue-400">{test.duration.toFixed(1)}s</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full" 
                      style={{ width: `${(test.passed / (test.passed + test.failed + test.skipped)) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deployment & Artifacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Deployment Environments */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚀 Deployment Environment Status
            </h3>
            <div className="space-y-4">
              {deploymentMetrics.map((env, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-white">{env.environment}</span>
                    <span className={`text-sm ${getStatusColor(env.status)}`}>{env.status}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-blue-400">{env.deployments} deployments</div>
                    <div className="text-green-400">{env.successRate.toFixed(1)}% success</div>
                    <div className="text-yellow-400">{env.avgDuration.toFixed(1)}m duration</div>
                    <div className="text-red-400">{env.rollbacks} rollbacks</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Last: {env.lastDeployment}</div>
                  <div className="w-full bg-gray-600 rounded-full h-3 mt-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-blue-500 h-3 rounded-full" 
                      style={{ width: `${env.successRate}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Artifacts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📦 Build Artifacts & Storage
            </h3>
            <div className="space-y-3">
              {artifactMetrics.map((artifact, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{artifact.type}</span>
                    <span className="text-xs text-gray-400">{artifact.lastUpdated}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-blue-400">{artifact.count} items</div>
                    <div className="text-yellow-400">{artifact.size}</div>
                    <div className="text-purple-400">{artifact.retention}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            GITHUB ACTIONS CI/CD | ALEKSANDRA AI DEVELOPMENT | CONTINUOUS INTEGRATION & DEPLOYMENT AUTOMATION
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Workflow Automation | DORA Metrics | Security Scanning | Test Automation | Deployment Pipelines | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}