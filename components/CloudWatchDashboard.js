// AWS CloudWatch Dashboard - March 2026
// Comprehensive AWS CloudWatch monitoring dashboard for cloud infrastructure and application metrics
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, RadialBarChart, RadialBar, PieChart, Pie, Cell } from 'recharts';

export default function CloudWatchDashboard() {
  const [cloudWatchMetrics, setCloudWatchMetrics] = useState({
    totalMetrics: 45678,
    activeAlarms: 23,
    unhealthyTargets: 3,
    logGroups: 187,
    ec2Instances: 12,
    lambdaInvocations: 234567,
    apiGatewayRequests: 189456,
    estimatedCost: 247.83,
    dataPointsIngested: 2.3,
    customMetrics: 156,
    alarmActions: 45,
    dashboardViews: 1234
  });

  const [ec2Metrics, setEc2Metrics] = useState([
    {
      instanceId: 'i-aleksandra-ai-01',
      instanceType: 't3.xlarge',
      state: 'running',
      cpuUtilization: 67.3,
      networkIn: 45.6,
      networkOut: 32.1,
      diskReadOps: 234,
      diskWriteOps: 156,
      statusChecks: 'passed',
      uptime: '15d 8h'
    },
    {
      instanceId: 'i-content-proc-02',
      instanceType: 'm5.large',
      state: 'running',
      cpuUtilization: 54.2,
      networkIn: 28.9,
      networkOut: 41.3,
      diskReadOps: 189,
      diskWriteOps: 267,
      statusChecks: 'passed',
      uptime: '12d 4h'
    },
    {
      instanceId: 'i-transcribe-03',
      instanceType: 'c5.2xlarge',
      state: 'running',
      cpuUtilization: 78.5,
      networkIn: 67.2,
      networkOut: 89.4,
      diskReadOps: 456,
      diskWriteOps: 234,
      statusChecks: 'passed',
      uptime: '8d 12h'
    },
    {
      instanceId: 'i-database-04',
      instanceType: 'r5.xlarge',
      state: 'running',
      cpuUtilization: 45.6,
      networkIn: 123.4,
      networkOut: 78.9,
      diskReadOps: 789,
      diskWriteOps: 456,
      statusChecks: 'passed',
      uptime: '25d 2h'
    },
    {
      instanceId: 'i-gateway-05',
      instanceType: 't3.medium',
      state: 'running',
      cpuUtilization: 23.4,
      networkIn: 234.5,
      networkOut: 189.7,
      diskReadOps: 123,
      diskWriteOps: 89,
      statusChecks: 'passed',
      uptime: '18d 6h'
    }
  ]);

  const [lambdaMetrics, setLambdaMetrics] = useState([
    {
      functionName: 'aleksandra-content-processor',
      invocations: 12456,
      duration: 234.5,
      errors: 23,
      throttles: 2,
      memory: 512,
      concurrent: 45,
      coldStarts: 12,
      cost: 15.67
    },
    {
      functionName: 'instagram-analyzer-function',
      invocations: 8976,
      duration: 156.3,
      errors: 15,
      throttles: 1,
      memory: 256,
      concurrent: 23,
      coldStarts: 8,
      cost: 8.45
    },
    {
      functionName: 'transcription-webhook',
      invocations: 5678,
      duration: 567.8,
      errors: 34,
      throttles: 5,
      memory: 1024,
      concurrent: 78,
      coldStarts: 23,
      cost: 23.12
    },
    {
      functionName: 'ai-inference-engine',
      invocations: 34567,
      duration: 789.2,
      errors: 67,
      throttles: 12,
      memory: 2048,
      concurrent: 156,
      coldStarts: 45,
      cost: 67.89
    }
  ]);

  const [cloudWatchAlarms, setCloudWatchAlarms] = useState([
    {
      alarmName: 'High-CPU-Utilization-AI-Engine',
      state: 'ALARM',
      metric: 'CPUUtilization',
      threshold: 80,
      currentValue: 87.3,
      resource: 'i-aleksandra-ai-01',
      duration: '5 minutes',
      actions: ['SNS Topic: critical-alerts']
    },
    {
      alarmName: 'Lambda-Error-Rate-High',
      state: 'ALARM',
      metric: 'ErrorRate',
      threshold: 5,
      currentValue: 8.2,
      resource: 'transcription-webhook',
      duration: '3 minutes',
      actions: ['Auto Scaling', 'SNS Alert']
    },
    {
      alarmName: 'API-Gateway-Latency',
      state: 'OK',
      metric: 'Latency',
      threshold: 1000,
      currentValue: 245.7,
      resource: 'aleksandra-api',
      duration: 'N/A',
      actions: ['CloudWatch Logs']
    },
    {
      alarmName: 'ELB-UnHealthyHostCount',
      state: 'INSUFFICIENT_DATA',
      metric: 'UnHealthyHostCount',
      threshold: 0,
      currentValue: 0,
      resource: 'aleksandra-alb',
      duration: 'N/A',
      actions: ['Auto Scaling']
    },
    {
      alarmName: 'RDS-DatabaseConnections',
      state: 'OK',
      metric: 'DatabaseConnections',
      threshold: 80,
      currentValue: 45,
      resource: 'aleksandra-db',
      duration: 'N/A',
      actions: ['CloudWatch Dashboard']
    }
  ]);

  const [logInsights, setLogInsights] = useState([
    {
      logGroup: '/aws/lambda/aleksandra-content-processor',
      logStreams: 45,
      retention: '7 days',
      storedBytes: '2.3 GB',
      recentErrors: 23,
      errorRate: 1.8,
      topError: 'TimeoutError: Request timeout after 30s'
    },
    {
      logGroup: '/aws/apigateway/aleksandra-api',
      logStreams: 12,
      retention: '14 days',
      storedBytes: '890 MB',
      recentErrors: 8,
      errorRate: 0.4,
      topError: '502 Bad Gateway: Upstream connection error'
    },
    {
      logGroup: '/aws/ec2/aleksandra-ai-engine',
      logStreams: 23,
      retention: '30 days',
      storedBytes: '1.7 GB',
      recentErrors: 15,
      errorRate: 2.3,
      topError: 'OutOfMemoryError: Java heap space exceeded'
    },
    {
      logGroup: '/aws/rds/aleksandra-database',
      logStreams: 8,
      retention: '7 days',
      storedBytes: '456 MB',
      recentErrors: 3,
      errorRate: 0.2,
      topError: 'Slow query: SELECT took 5.67s to execute'
    }
  ]);

  const [serviceMap, setServiceMap] = useState([
    {
      service: 'API Gateway',
      requests: 189456,
      latency: 245.7,
      errorRate: 1.2,
      throttles: 23,
      cachingHitRate: 67.8,
      cost: 45.67
    },
    {
      service: 'Application Load Balancer',
      requests: 234567,
      latency: 156.3,
      errorRate: 0.8,
      healthy: 4,
      unhealthy: 1,
      cost: 23.45
    },
    {
      service: 'CloudFront CDN',
      requests: 567890,
      hitRatio: 85.4,
      originLatency: 89.2,
      bandwidth: '2.3 TB',
      cost: 78.90,
      errors: 234
    },
    {
      service: 'RDS Database',
      connections: 45,
      cpuUtilization: 34.5,
      readIOPS: 234,
      writeIOPS: 156,
      freeStorage: '67%',
      cost: 156.78
    },
    {
      service: 'ElastiCache',
      hitRate: 94.2,
      cpuUtilization: 23.4,
      networkBytes: 45.6,
      evictions: 12,
      connections: 23,
      cost: 34.56
    }
  ]);

  const [costAnalysis, setCostAnalysis] = useState([
    { service: 'EC2 Instances', cost: 67.89, percentage: 27.4, trend: '+5.2%' },
    { service: 'Lambda Functions', cost: 45.23, percentage: 18.3, trend: '+12.1%' },
    { service: 'RDS Database', cost: 34.56, percentage: 14.0, trend: '-2.3%' },
    { service: 'API Gateway', cost: 28.90, percentage: 11.7, trend: '+8.7%' },
    { service: 'CloudWatch', cost: 23.45, percentage: 9.5, trend: '+15.3%' },
    { service: 'S3 Storage', cost: 18.67, percentage: 7.5, trend: '+3.1%' },
    { service: 'CloudFront', cost: 15.23, percentage: 6.2, trend: '-1.8%' },
    { service: 'ElastiCache', cost: 12.90, percentage: 5.2, trend: '+4.5%' }
  ]);

  const [performanceTimeline, setPerformanceTimeline] = useState([
    { time: '05:53', requests: 12456, latency: 245.7, errors: 23, cpuAvg: 65.4, networkIn: 123.4, networkOut: 89.2 },
    { time: '05:52', requests: 11789, latency: 234.5, errors: 18, cpuAvg: 63.2, networkIn: 134.5, networkOut: 92.1 },
    { time: '05:51', requests: 13245, latency: 267.8, errors: 28, cpuAvg: 68.7, networkIn: 145.6, networkOut: 87.3 },
    { time: '05:50', requests: 10567, latency: 223.4, errors: 15, cpuAvg: 61.9, networkIn: 112.3, networkOut: 95.4 },
    { time: '05:49', requests: 14321, latency: 289.1, errors: 34, cpuAvg: 71.2, networkIn: 156.7, networkOut: 78.9 }
  ]);

  const [autoScalingGroups, setAutoScalingGroups] = useState([
    {
      groupName: 'aleksandra-ai-asg',
      desired: 6,
      running: 6,
      min: 2,
      max: 12,
      unhealthy: 0,
      pendingCount: 0,
      terminatingCount: 0,
      lastActivity: 'Scale Out - 2 instances'
    },
    {
      groupName: 'content-processor-asg',
      desired: 4,
      running: 4,
      min: 2,
      max: 8,
      unhealthy: 0,
      pendingCount: 0,
      terminatingCount: 0,
      lastActivity: 'No scaling activity'
    },
    {
      groupName: 'api-gateway-asg',
      desired: 2,
      running: 2,
      min: 1,
      max: 6,
      unhealthy: 0,
      pendingCount: 1,
      terminatingCount: 0,
      lastActivity: 'Scale Out - 1 instance pending'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update CloudWatch metrics
      setCloudWatchMetrics(prev => ({
        ...prev,
        totalMetrics: prev.totalMetrics + Math.floor(Math.random() * 1000) + 500,
        activeAlarms: Math.max(10, prev.activeAlarms + Math.floor((Math.random() - 0.7) * 5)),
        unhealthyTargets: Math.max(0, prev.unhealthyTargets + Math.floor((Math.random() - 0.8) * 2)),
        lambdaInvocations: prev.lambdaInvocations + Math.floor(Math.random() * 10000) + 5000,
        apiGatewayRequests: prev.apiGatewayRequests + Math.floor(Math.random() * 5000) + 2000,
        estimatedCost: Math.max(200, prev.estimatedCost + (Math.random() - 0.5) * 10),
        dataPointsIngested: Math.max(1, prev.dataPointsIngested + (Math.random() - 0.5) * 0.5),
        customMetrics: prev.customMetrics + Math.floor((Math.random() - 0.5) * 10),
        alarmActions: prev.alarmActions + Math.floor(Math.random() * 5)
      }));

      // Update performance timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceTimeline(prev => {
        const newData = {
          time: currentTime,
          requests: Math.floor(Math.random() * 5000) + 10000,
          latency: Math.max(100, Math.min(500, prev[prev.length - 1]?.latency + (Math.random() - 0.5) * 50)) || 245,
          errors: Math.floor(Math.random() * 30) + 10,
          cpuAvg: Math.max(40, Math.min(90, prev[prev.length - 1]?.cpuAvg + (Math.random() - 0.5) * 10)) || 65,
          networkIn: Math.max(50, Math.min(200, prev[prev.length - 1]?.networkIn + (Math.random() - 0.5) * 30)) || 123,
          networkOut: Math.max(50, Math.min(150, prev[prev.length - 1]?.networkOut + (Math.random() - 0.5) * 20)) || 89
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update EC2 metrics
      setEc2Metrics(prev => prev.map(instance => ({
        ...instance,
        cpuUtilization: Math.max(20, Math.min(95, instance.cpuUtilization + (Math.random() - 0.5) * 10)),
        networkIn: Math.max(10, Math.min(300, instance.networkIn + (Math.random() - 0.5) * 20)),
        networkOut: Math.max(10, Math.min(200, instance.networkOut + (Math.random() - 0.5) * 15)),
        diskReadOps: Math.max(50, instance.diskReadOps + Math.floor((Math.random() - 0.5) * 100)),
        diskWriteOps: Math.max(50, instance.diskWriteOps + Math.floor((Math.random() - 0.5) * 80))
      })));

      // Update Lambda metrics
      setLambdaMetrics(prev => prev.map(lambda => ({
        ...lambda,
        invocations: lambda.invocations + Math.floor(Math.random() * 1000) + 100,
        duration: Math.max(50, Math.min(2000, lambda.duration + (Math.random() - 0.5) * 100)),
        errors: Math.max(0, lambda.errors + Math.floor((Math.random() - 0.9) * 5)),
        throttles: Math.max(0, lambda.throttles + Math.floor((Math.random() - 0.95) * 2)),
        concurrent: Math.max(0, Math.min(lambda.memory / 4, lambda.concurrent + Math.floor((Math.random() - 0.5) * 10))),
        coldStarts: Math.max(0, lambda.coldStarts + Math.floor((Math.random() - 0.8) * 3))
      })));

      // Update alarm states
      setCloudWatchAlarms(prev => prev.map(alarm => ({
        ...alarm,
        currentValue: Math.max(0, alarm.currentValue + (Math.random() - 0.5) * (alarm.threshold * 0.1))
      })));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getAlarmStateColor = (state) => {
    switch(state) {
      case 'ALARM': return 'text-red-500';
      case 'OK': return 'text-green-500';
      case 'INSUFFICIENT_DATA': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getInstanceStateColor = (state) => {
    switch(state.toLowerCase()) {
      case 'running': return 'text-green-400';
      case 'stopped': return 'text-red-400';
      case 'stopping': case 'starting': return 'text-yellow-400';
      case 'pending': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getCpuColor = (cpu) => {
    if (cpu >= 80) return 'text-red-400';
    if (cpu >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getErrorRateColor = (rate) => {
    if (rate >= 5) return 'text-red-400';
    if (rate >= 2) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getCostTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* CloudWatch Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                ☁️ AWS CloudWatch Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>METRICS: <span className="text-blue-400 font-mono">{(cloudWatchMetrics.totalMetrics / 1000).toFixed(1)}K</span></div>
                <div>ALARMS: <span className="text-orange-400">{cloudWatchMetrics.activeAlarms}</span></div>
                <div>LAMBDAS: <span className="text-purple-400">{(cloudWatchMetrics.lambdaInvocations / 1000).toFixed(1)}K</span></div>
                <div>COST: <span className="text-green-400">${cloudWatchMetrics.estimatedCost.toFixed(2)}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">{cloudWatchMetrics.dataPointsIngested.toFixed(1)}M</div>
              <div className="text-sm text-gray-300">Data Points/hour</div>
              <div className="text-xs text-blue-300">Custom: {cloudWatchMetrics.customMetrics}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key CloudWatch Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">EC2 Instances</span>
              <span className="text-2xl">🖥️</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{cloudWatchMetrics.ec2Instances}</div>
            <div className="text-xs text-gray-400">Running instances</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Lambda Invocations</span>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{(cloudWatchMetrics.lambdaInvocations / 1000).toFixed(0)}K</div>
            <div className="text-xs text-gray-400">Today's invocations</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Active Alarms</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{cloudWatchMetrics.activeAlarms}</div>
            <div className="text-xs text-gray-400">Monitoring alerts</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Monthly Cost</span>
              <span className="text-2xl">💰</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">${cloudWatchMetrics.estimatedCost.toFixed(0)}</div>
            <div className="text-xs text-gray-400">Estimated spend</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Infrastructure Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#3b82f6" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#3b82f6" />
                <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3b82f6' }}
                  labelStyle={{ color: '#3b82f6' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="requests" fill="#3b82f6" fillOpacity={0.3} stroke="#3b82f6" name="Requests" />
                <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} name="Latency (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="cpuAvg" stroke="#10b981" strokeWidth={2} name="Avg CPU %" />
                <Bar yAxisId="left" dataKey="errors" fill="#ef4444" name="Errors" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Cost Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💰 Cost Breakdown & Trends
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {costAnalysis.map((cost, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{cost.service}</span>
                    <span className={`text-sm font-bold ${getCostTrendColor(cost.trend)}`}>{cost.trend}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 text-lg">${cost.cost.toFixed(2)}</span>
                    <span className="text-gray-400 text-sm">{cost.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full" 
                      style={{ width: `${cost.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* CloudWatch Alarms */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 CloudWatch Alarms
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {cloudWatchAlarms.map((alarm, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{alarm.alarmName}</span>
                    <span className={`text-sm font-bold ${getAlarmStateColor(alarm.state)}`}>{alarm.state}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{alarm.resource}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-gray-300">Threshold: {alarm.threshold}</div>
                    <div className="text-yellow-400">Current: {alarm.currentValue.toFixed(1)}</div>
                    <div className="text-gray-400 col-span-2">Duration: {alarm.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EC2 Instances */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🖥️ EC2 Instance Metrics
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {ec2Metrics.map((instance, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{instance.instanceId}</span>
                    <span className={`text-xs ${getInstanceStateColor(instance.state)}`}>{instance.state}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{instance.instanceType}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={getCpuColor(instance.cpuUtilization)}>CPU: {instance.cpuUtilization.toFixed(1)}%</div>
                    <div className="text-green-400">Net In: {instance.networkIn.toFixed(1)} MB/s</div>
                    <div className="text-yellow-400">Net Out: {instance.networkOut.toFixed(1)} MB/s</div>
                    <div className="text-purple-400">Read: {instance.diskReadOps} IOPS</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Uptime: {instance.uptime}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lambda Functions */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⚡ Lambda Function Metrics
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {lambdaMetrics.map((lambda, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1 truncate">{lambda.functionName}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-purple-400">{lambda.invocations.toLocaleString()} invocations</div>
                    <div className="text-blue-400">{lambda.duration.toFixed(1)}ms avg</div>
                    <div className="text-red-400">{lambda.errors} errors</div>
                    <div className="text-yellow-400">{lambda.throttles} throttles</div>
                    <div className="text-green-400">{lambda.memory}MB memory</div>
                    <div className="text-orange-400">{lambda.concurrent} concurrent</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Cost: ${lambda.cost.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Map & Auto Scaling Groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* AWS Service Map */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗺️ AWS Service Performance Map
            </h3>
            <div className="space-y-3">
              {serviceMap.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{service.service}</span>
                    <span className="text-green-400 text-sm">${service.cost.toFixed(2)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {service.requests && <div className="text-blue-400">{service.requests.toLocaleString()} req</div>}
                    {service.latency && <div className="text-yellow-400">{service.latency.toFixed(1)}ms</div>}
                    {service.errorRate && <div className={getErrorRateColor(service.errorRate)}>{service.errorRate.toFixed(1)}% errors</div>}
                    {service.hitRatio && <div className="text-green-400">{service.hitRatio.toFixed(1)}% hit ratio</div>}
                    {service.healthy && <div className="text-green-400">{service.healthy} healthy</div>}
                    {service.cpuUtilization && <div className={getCpuColor(service.cpuUtilization)}>{service.cpuUtilization.toFixed(1)}% CPU</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Auto Scaling Groups */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Auto Scaling Groups
            </h3>
            <div className="space-y-3">
              {autoScalingGroups.map((asg, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{asg.groupName}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-green-400">Desired: {asg.desired}</div>
                    <div className="text-blue-400">Running: {asg.running}</div>
                    <div className="text-gray-400">Min: {asg.min}</div>
                    <div className="text-gray-400">Max: {asg.max}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-red-400">Unhealthy: {asg.unhealthy}</div>
                    <div className="text-yellow-400">Pending: {asg.pendingCount}</div>
                    <div className="text-orange-400">Terminating: {asg.terminatingCount}</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Last: {asg.lastActivity}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CloudWatch Logs Insights */}
        <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            📝 CloudWatch Logs Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {logInsights.map((log, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="text-sm font-bold text-white mb-1 truncate">{log.logGroup}</div>
                <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                  <div className="text-blue-400">{log.logStreams} streams</div>
                  <div className="text-purple-400">{log.storedBytes}</div>
                  <div className="text-gray-400">{log.retention}</div>
                  <div className={getErrorRateColor(log.errorRate)}>{log.errorRate.toFixed(1)}% errors</div>
                </div>
                <div className="text-xs text-red-400">{log.recentErrors} recent errors</div>
                <div className="text-xs text-gray-400 mt-1 truncate">Top: {log.topError}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            AWS CLOUDWATCH | ALEKSANDRA AI MONITORING | CLOUD INFRASTRUCTURE OBSERVABILITY
          </div>
          <div className="text-sm text-gray-500 mt-2">
            EC2 Monitoring | Lambda Analytics | Cost Optimization | Auto Scaling | CloudWatch Logs | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}