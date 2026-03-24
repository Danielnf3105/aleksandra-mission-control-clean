// Dynatrace APM Dashboard - March 2026
// Comprehensive Dynatrace-inspired application performance monitoring dashboard for AI-powered observability and automated problem detection
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar, FunnelChart, Funnel, LabelList } from 'recharts';

export default function DynatraceAPMDashboard() {
  const [dynatraceMetrics, setDynatraceMetrics] = useState({
    totalApplications: 45,
    healthyApplications: 41,
    problemsDetected: 8,
    criticalProblems: 2,
    responseTime: 287.5,
    throughput: 3456,
    errorRate: 1.4,
    apdex: 0.89,
    infraStructures: 156,
    processes: 2847,
    services: 234,
    userSessions: 15678
  });

  const [smartscapeTopology, setSmartscapeTopology] = useState([
    {
      entity: 'aleksandra-web-application',
      type: 'Application',
      status: 'healthy',
      responseTime: 234.5,
      throughput: 567,
      errorRate: 0.8,
      apdex: 0.92,
      dependencies: ['aleksandra-api-service', 'user-database', 'cache-service'],
      technology: 'Node.js',
      environment: 'production',
      hostCount: 4
    },
    {
      entity: 'aleksandra-api-service',
      type: 'Service',
      status: 'warning',
      responseTime: 456.7,
      throughput: 234,
      errorRate: 2.3,
      apdex: 0.78,
      dependencies: ['user-database', 'notification-service', 'analytics-service'],
      technology: 'Java',
      environment: 'production',
      hostCount: 6
    },
    {
      entity: 'aleksandra-mobile-app',
      type: 'Mobile Application',
      status: 'healthy',
      responseTime: 345.6,
      throughput: 456,
      errorRate: 1.2,
      apdex: 0.85,
      dependencies: ['aleksandra-api-service', 'cdn-service'],
      technology: 'React Native',
      environment: 'production',
      hostCount: 2
    },
    {
      entity: 'aleksandra-background-processor',
      type: 'Process',
      status: 'critical',
      responseTime: 2345.8,
      throughput: 89,
      errorRate: 5.7,
      apdex: 0.34,
      dependencies: ['message-queue', 'media-storage', 'ai-service'],
      technology: 'Python',
      environment: 'production',
      hostCount: 8
    },
    {
      entity: 'user-database',
      type: 'Database',
      status: 'healthy',
      responseTime: 123.4,
      throughput: 1234,
      errorRate: 0.1,
      apdex: 0.95,
      dependencies: ['backup-storage'],
      technology: 'PostgreSQL',
      environment: 'production',
      hostCount: 3
    }
  ]);

  const [aiInsights, setAiInsights] = useState([
    {
      id: 'INSIGHT-DT-789012',
      severity: 'critical',
      title: 'Anomalous response time increase detected',
      description: 'AI detected 300% response time increase in background processor with correlation to memory leak pattern',
      affectedEntities: ['aleksandra-background-processor', 'media-storage'],
      rootCause: 'Memory leak in image processing pipeline causing GC pressure',
      confidence: 95,
      impact: 'high',
      recommendedAction: 'Restart affected services and implement memory profiling',
      detectedAt: '11:58:45',
      category: 'Performance'
    },
    {
      id: 'INSIGHT-DT-456789',
      severity: 'warning',
      title: 'Unusual error pattern identified',
      description: 'AI identified spike in database timeout errors correlating with increased load',
      affectedEntities: ['aleksandra-api-service', 'user-database'],
      rootCause: 'Database connection pool exhaustion under peak load',
      confidence: 87,
      impact: 'medium',
      recommendedAction: 'Increase connection pool size and implement query optimization',
      detectedAt: '11:55:30',
      category: 'Infrastructure'
    },
    {
      id: 'INSIGHT-DT-123456',
      severity: 'info',
      title: 'Performance optimization opportunity',
      description: 'AI suggests CDN optimization based on geographic user distribution patterns',
      affectedEntities: ['aleksandra-mobile-app', 'cdn-service'],
      rootCause: 'Sub-optimal CDN edge selection for European users',
      confidence: 72,
      impact: 'low',
      recommendedAction: 'Configure additional CDN edge locations in Europe',
      detectedAt: '11:52:15',
      category: 'Optimization'
    }
  ]);

  const [userExperienceAnalysis, setUserExperienceAnalysis] = useState([
    {
      application: 'aleksandra-web-app',
      userSessions: 8934,
      bounceRate: 23.4,
      avgSessionDuration: 456.7,
      pageLoadTime: 2.34,
      visuallyComplete: 3.45,
      speedIndex: 2.89,
      userActionRate: 89.5,
      conversionRate: 12.3,
      apdex: 0.89,
      geography: 'Global',
      satisfiedUsers: 79.5,
      toleratingUsers: 16.2,
      frustratedUsers: 4.3
    },
    {
      application: 'aleksandra-mobile-app',
      userSessions: 5673,
      bounceRate: 18.7,
      avgSessionDuration: 623.4,
      pageLoadTime: 1.89,
      visuallyComplete: 2.67,
      speedIndex: 2.23,
      userActionRate: 92.3,
      conversionRate: 15.7,
      apdex: 0.93,
      geography: 'Global',
      satisfiedUsers: 84.2,
      toleratingUsers: 13.1,
      frustratedUsers: 2.7
    },
    {
      application: 'aleksandra-admin-dashboard',
      userSessions: 234,
      bounceRate: 5.6,
      avgSessionDuration: 1234.5,
      pageLoadTime: 3.12,
      visuallyComplete: 4.23,
      speedIndex: 3.67,
      userActionRate: 95.8,
      conversionRate: 87.4,
      apdex: 0.91,
      geography: 'Internal',
      satisfiedUsers: 91.2,
      toleratingUsers: 7.8,
      frustratedUsers: 1.0
    }
  ]);

  const [businessImpactAnalysis, setBusinessImpactAnalysis] = useState([
    {
      metric: 'Revenue Impact',
      value: '$12,345',
      trend: '-2.3%',
      cause: 'Increased response times affecting checkout conversion',
      timeframe: 'Last 4 hours',
      severity: 'high'
    },
    {
      metric: 'User Satisfaction',
      value: '87.2%',
      trend: '-1.8%',
      cause: 'Mobile app performance degradation',
      timeframe: 'Last 2 hours',
      severity: 'medium'
    },
    {
      metric: 'SLA Compliance',
      value: '94.6%',
      trend: '-3.2%',
      cause: 'Background processor failures',
      timeframe: 'Last 1 hour',
      severity: 'high'
    },
    {
      metric: 'Operational Efficiency',
      value: '91.4%',
      trend: '+0.5%',
      cause: 'Automated scaling improvements',
      timeframe: 'Last 6 hours',
      severity: 'low'
    }
  ]);

  const [performanceHotspots, setPerformanceHotspots] = useState([
    {
      hotspot: 'Database Query Optimization',
      impact: 'high',
      frequency: 234,
      avgResponseTime: 1234.5,
      contribution: 34.7,
      method: 'getUserProfileWithPreferences()',
      service: 'aleksandra-api-service',
      recommendation: 'Add database index on user_preferences.user_id'
    },
    {
      hotspot: 'Memory Allocation Pattern',
      impact: 'high',
      frequency: 567,
      avgResponseTime: 2345.6,
      contribution: 28.9,
      method: 'processImageUpload()',
      service: 'aleksandra-background-processor',
      recommendation: 'Implement streaming image processing to reduce memory footprint'
    },
    {
      hotspot: 'API Gateway Latency',
      impact: 'medium',
      frequency: 890,
      avgResponseTime: 456.7,
      contribution: 15.4,
      method: 'authenticationMiddleware()',
      service: 'aleksandra-api-gateway',
      recommendation: 'Cache JWT validation results for repeated requests'
    },
    {
      hotspot: 'External Service Dependency',
      impact: 'medium',
      frequency: 123,
      avgResponseTime: 3456.8,
      contribution: 12.8,
      method: 'sendNotification()',
      service: 'notification-service',
      recommendation: 'Implement circuit breaker pattern for external notification providers'
    }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    { time: '12:00', responseTime: 287.5, throughput: 3456, errorRate: 1.4, apdex: 0.89, problems: 8, userSessions: 15678 },
    { time: '11:59', responseTime: 284.2, throughput: 3398, errorRate: 1.3, apdex: 0.91, problems: 6, userSessions: 15234 },
    { time: '11:58', responseTime: 291.8, throughput: 3512, errorRate: 1.6, apdex: 0.87, problems: 9, userSessions: 15987 },
    { time: '11:57', responseTime: 279.3, throughput: 3287, errorRate: 1.2, apdex: 0.92, problems: 5, userSessions: 14876 },
    { time: '11:56', responseTime: 295.7, throughput: 3634, errorRate: 1.5, apdex: 0.88, problems: 7, userSessions: 16234 },
    { time: '11:55', responseTime: 283.1, throughput: 3445, errorRate: 1.3, apdex: 0.90, problems: 6, userSessions: 15456 }
  ]);

  const [hostInfrastructure, setHostInfrastructure] = useState([
    {
      hostname: 'aleksandra-web-01.prod',
      status: 'healthy',
      cpuUsage: 67.8,
      memoryUsage: 73.4,
      diskUsage: 45.2,
      networkIO: 234.5,
      processes: 23,
      applications: 3,
      osVersion: 'Ubuntu 22.04',
      dynatraceAgent: 'v1.289.134'
    },
    {
      hostname: 'aleksandra-api-02.prod',
      status: 'warning',
      cpuUsage: 89.3,
      memoryUsage: 91.7,
      diskUsage: 78.9,
      networkIO: 567.8,
      processes: 34,
      applications: 5,
      osVersion: 'Ubuntu 22.04',
      dynatraceAgent: 'v1.289.134'
    },
    {
      hostname: 'aleksandra-worker-03.prod',
      status: 'critical',
      cpuUsage: 96.4,
      memoryUsage: 97.8,
      diskUsage: 91.2,
      networkIO: 123.4,
      processes: 45,
      applications: 2,
      osVersion: 'Ubuntu 20.04',
      dynatraceAgent: 'v1.285.120'
    },
    {
      hostname: 'aleksandra-db-01.prod',
      status: 'healthy',
      cpuUsage: 45.6,
      memoryUsage: 67.9,
      diskUsage: 56.3,
      networkIO: 890.1,
      processes: 12,
      applications: 1,
      osVersion: 'Ubuntu 22.04',
      dynatraceAgent: 'v1.289.134'
    }
  ]);

  const [syntheticMonitoring, setSyntheticMonitoring] = useState([
    {
      monitor: 'User Login Journey',
      status: 'success',
      responseTime: 2.34,
      availability: 99.8,
      successRate: 98.7,
      location: 'Global',
      frequency: '5 minutes',
      lastRun: '12:00:15',
      stepCount: 8,
      failedSteps: 0
    },
    {
      monitor: 'Checkout Process',
      status: 'warning',
      responseTime: 4.67,
      availability: 97.3,
      successRate: 95.2,
      location: 'Global',
      frequency: '2 minutes',
      lastRun: '12:00:10',
      stepCount: 12,
      failedSteps: 1
    },
    {
      monitor: 'API Health Check',
      status: 'success',
      responseTime: 0.89,
      availability: 99.9,
      successRate: 99.5,
      location: 'Multi-region',
      frequency: '1 minute',
      lastRun: '12:00:30',
      stepCount: 3,
      failedSteps: 0
    },
    {
      monitor: 'Mobile App Performance',
      status: 'critical',
      responseTime: 8.45,
      availability: 94.2,
      successRate: 87.6,
      location: 'Mobile Networks',
      frequency: '10 minutes',
      lastRun: '11:58:45',
      stepCount: 15,
      failedSteps: 3
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Dynatrace metrics
      setDynatraceMetrics(prev => ({
        ...prev,
        healthyApplications: Math.max(prev.totalApplications * 0.85, prev.healthyApplications + Math.floor((Math.random() - 0.3) * 5)),
        problemsDetected: Math.max(0, prev.problemsDetected + Math.floor((Math.random() - 0.6) * 4)),
        criticalProblems: Math.max(0, prev.criticalProblems + Math.floor((Math.random() - 0.8) * 2)),
        responseTime: Math.max(150, prev.responseTime + (Math.random() - 0.5) * 50),
        throughput: Math.max(2000, prev.throughput + Math.floor((Math.random() - 0.5) * 500)),
        errorRate: Math.max(0.1, prev.errorRate + (Math.random() - 0.5) * 0.5),
        apdex: Math.max(0.5, Math.min(1.0, prev.apdex + (Math.random() - 0.5) * 0.1)),
        processes: Math.max(2000, prev.processes + Math.floor((Math.random() - 0.5) * 100)),
        userSessions: Math.max(10000, prev.userSessions + Math.floor((Math.random() - 0.5) * 2000))
      }));

      // Update performance metrics timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceMetrics(prev => {
        const newData = {
          time: currentTime,
          responseTime: Math.max(150, prev[0]?.responseTime + (Math.random() - 0.5) * 50) || 287.5,
          throughput: Math.max(2000, prev[0]?.throughput + Math.floor((Math.random() - 0.5) * 500)) || 3456,
          errorRate: Math.max(0.1, prev[0]?.errorRate + (Math.random() - 0.5) * 0.5) || 1.4,
          apdex: Math.max(0.5, Math.min(1.0, prev[0]?.apdex + (Math.random() - 0.5) * 0.1)) || 0.89,
          problems: Math.max(0, prev[0]?.problems + Math.floor((Math.random() - 0.6) * 4)) || 8,
          userSessions: Math.max(10000, prev[0]?.userSessions + Math.floor((Math.random() - 0.5) * 2000)) || 15678
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update Smartscape topology
      setSmartscapeTopology(prev => prev.map(entity => ({
        ...entity,
        responseTime: Math.max(50, entity.responseTime + (Math.random() - 0.5) * 100),
        throughput: Math.max(10, entity.throughput + Math.floor((Math.random() - 0.5) * 50)),
        errorRate: Math.max(0, entity.errorRate + (Math.random() - 0.5) * 1),
        apdex: Math.max(0.3, Math.min(1.0, entity.apdex + (Math.random() - 0.5) * 0.1)),
        status: entity.errorRate > 4 || entity.apdex < 0.5 ? 'critical' : 
               entity.errorRate > 2 || entity.apdex < 0.7 ? 'warning' : 'healthy'
      })));

      // Update user experience analysis
      setUserExperienceAnalysis(prev => prev.map(app => ({
        ...app,
        userSessions: Math.max(100, app.userSessions + Math.floor((Math.random() - 0.5) * 500)),
        bounceRate: Math.max(5, Math.min(40, app.bounceRate + (Math.random() - 0.5) * 3)),
        avgSessionDuration: Math.max(200, app.avgSessionDuration + (Math.random() - 0.5) * 100),
        pageLoadTime: Math.max(1, app.pageLoadTime + (Math.random() - 0.5) * 0.5),
        apdex: Math.max(0.5, Math.min(1.0, app.apdex + (Math.random() - 0.5) * 0.05)),
        conversionRate: Math.max(5, Math.min(25, app.conversionRate + (Math.random() - 0.5) * 2))
      })));

      // Update business impact analysis
      setBusinessImpactAnalysis(prev => prev.map(metric => {
        const change = (Math.random() - 0.5) * 2;
        return {
          ...metric,
          trend: change >= 0 ? `+${Math.abs(change).toFixed(1)}%` : `-${Math.abs(change).toFixed(1)}%`
        };
      }));

      // Update performance hotspots
      setPerformanceHotspots(prev => prev.map(hotspot => ({
        ...hotspot,
        frequency: Math.max(50, hotspot.frequency + Math.floor((Math.random() - 0.5) * 50)),
        avgResponseTime: Math.max(100, hotspot.avgResponseTime + (Math.random() - 0.5) * 200),
        contribution: Math.max(5, Math.min(50, hotspot.contribution + (Math.random() - 0.5) * 3))
      })));

      // Update host infrastructure
      setHostInfrastructure(prev => prev.map(host => ({
        ...host,
        cpuUsage: Math.max(20, Math.min(100, host.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(30, Math.min(100, host.memoryUsage + (Math.random() - 0.5) * 8)),
        diskUsage: Math.max(20, Math.min(95, host.diskUsage + (Math.random() - 0.5) * 5)),
        networkIO: Math.max(50, host.networkIO + (Math.random() - 0.5) * 100),
        processes: Math.max(10, host.processes + Math.floor((Math.random() - 0.5) * 5)),
        status: host.cpuUsage > 90 || host.memoryUsage > 90 ? 'critical' :
               host.cpuUsage > 80 || host.memoryUsage > 80 ? 'warning' : 'healthy'
      })));

      // Update synthetic monitoring
      setSyntheticMonitoring(prev => prev.map(monitor => ({
        ...monitor,
        responseTime: Math.max(0.5, monitor.responseTime + (Math.random() - 0.5) * 1),
        availability: Math.max(90, Math.min(100, monitor.availability + (Math.random() - 0.5) * 2)),
        successRate: Math.max(85, Math.min(100, monitor.successRate + (Math.random() - 0.5) * 3)),
        failedSteps: Math.max(0, monitor.failedSteps + Math.floor((Math.random() - 0.8) * 2)),
        status: monitor.availability < 95 || monitor.successRate < 90 ? 'critical' :
               monitor.availability < 98 || monitor.successRate < 95 ? 'warning' : 'success'
      })));

      // Occasionally update AI insights
      if (Math.random() < 0.2) {
        setAiInsights(prev => prev.map(insight => ({
          ...insight,
          confidence: Math.max(60, Math.min(99, insight.confidence + Math.floor((Math.random() - 0.5) * 10)))
        })));
      }
    }, 44000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'healthy': case 'success': return 'text-green-400';
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getImpactColor = (impact) => {
    switch(impact.toLowerCase()) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getApdexColor = (apdex) => {
    if (apdex >= 0.85) return 'text-green-400';
    if (apdex >= 0.7) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getUtilizationColor = (utilization) => {
    if (utilization >= 90) return 'text-red-400';
    if (utilization >= 80) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-400';
    if (confidence >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Dynatrace APM Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🧠 Dynatrace APM Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>APPLICATIONS: <span className="text-purple-400 font-mono">{dynatraceMetrics.healthyApplications}/{dynatraceMetrics.totalApplications}</span></div>
                <div>SERVICES: <span className="text-indigo-400">{dynatraceMetrics.services}</span></div>
                <div>HOSTS: <span className="text-cyan-400">{dynatraceMetrics.infraStructures}</span></div>
                <div>SESSIONS: <span className="text-blue-400">{(dynatraceMetrics.userSessions / 1000).toFixed(1)}k</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-400">{dynatraceMetrics.apdex.toFixed(2)}</div>
              <div className="text-sm text-gray-300">Application Performance Index</div>
              <div className="text-xs text-purple-300">{dynatraceMetrics.responseTime.toFixed(1)}ms avg response</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Dynatrace Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Response Time</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{dynatraceMetrics.responseTime.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">Average across all apps</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-indigo-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Throughput</span>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-2xl font-bold text-indigo-400 mb-1">{dynatraceMetrics.throughput.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Requests per minute</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🐛</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{dynatraceMetrics.errorRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Failed requests</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Problems</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{dynatraceMetrics.problemsDetected}</div>
            <div className="text-xs text-gray-400">AI-detected issues</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* AI-Powered Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 AI-Powered Application Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#a855f7" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#a855f7" />
                <YAxis yAxisId="right" orientation="right" stroke="#a855f7" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #a855f7' }}
                  labelStyle={{ color: '#a855f7' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="responseTime" fill="#a855f7" fillOpacity={0.3} stroke="#a855f7" name="Response Time (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#6366f1" strokeWidth={2} name="Throughput" />
                <Line yAxisId="left" type="monotone" dataKey="apdex" stroke="#22c55e" strokeWidth={2} name="Apdex" />
                <Bar yAxisId="right" dataKey="problems" fill="#ef4444" name="Problems" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Smartscape Technology Map */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗺️ Smartscape Technology Map
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {smartscapeTopology.map((entity, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-purple-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{entity.entity}</span>
                    <span className={`text-xs font-bold ${getStatusColor(entity.status)}`}>{entity.status}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-1">{entity.type} • {entity.technology} • {entity.environment}</div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-indigo-400">{entity.responseTime.toFixed(1)}ms</div>
                    <div className="text-cyan-400">{entity.throughput} rpm</div>
                    <div className="text-yellow-400">{entity.errorRate.toFixed(1)}% err</div>
                    <div className={getApdexColor(entity.apdex)}>Apdex: {entity.apdex.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-blue-400">{entity.hostCount} hosts</span>
                    <span className="text-gray-400">{entity.dependencies.length} deps</span>
                  </div>
                  <div className="text-xs text-purple-300 mt-1 truncate">
                    Dependencies: {entity.dependencies.slice(0, 3).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* AI Insights & Root Cause Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🧠 AI Insights & Root Cause Analysis
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {aiInsights.map((insight, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-indigo-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{insight.id}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(insight.severity)}`}>{insight.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 line-clamp-2">{insight.title}</div>
                  <div className="text-xs text-purple-300 mb-2 line-clamp-3">{insight.description}</div>
                  <div className="text-xs text-yellow-300 mb-1">Root Cause: {insight.rootCause}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className={getConfidenceColor(insight.confidence)}>Confidence: {insight.confidence}%</div>
                    <div className={getImpactColor(insight.impact)}>{insight.impact} impact</div>
                  </div>
                  <div className="text-xs text-blue-300 mb-1 line-clamp-2">{insight.recommendedAction}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">{insight.category}</span>
                    <span className="text-gray-400">{insight.detectedAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Experience Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              👥 Real User Experience Analysis
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {userExperienceAnalysis.map((app, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{app.application}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">{app.userSessions.toLocaleString()} sessions</div>
                    <div className="text-indigo-400">{app.bounceRate.toFixed(1)}% bounce</div>
                    <div className="text-cyan-400">{app.avgSessionDuration.toFixed(0)}s avg</div>
                    <div className="text-yellow-400">{app.pageLoadTime.toFixed(2)}s load</div>
                    <div className="text-blue-400">{app.speedIndex.toFixed(2)}s speed</div>
                    <div className="text-green-400">{app.conversionRate.toFixed(1)}% conv</div>
                  </div>
                  <div className={`text-lg font-bold mb-1 ${getApdexColor(app.apdex)}`}>
                    Apdex: {app.apdex.toFixed(2)}
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-green-400">{app.satisfiedUsers.toFixed(1)}% satisfied</div>
                    <div className="text-yellow-400">{app.toleratingUsers.toFixed(1)}% tolerating</div>
                    <div className="text-red-400">{app.frustratedUsers.toFixed(1)}% frustrated</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Hotspots */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔥 Performance Hotspots & Code Analysis
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {performanceHotspots.map((hotspot, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{hotspot.hotspot}</span>
                    <span className={`text-xs font-bold ${getImpactColor(hotspot.impact)}`}>{hotspot.impact}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-1">{hotspot.service}</div>
                  <div className="text-xs text-yellow-300 mb-1 font-mono truncate">{hotspot.method}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-indigo-400">{hotspot.frequency} calls</div>
                    <div className="text-cyan-400">{hotspot.avgResponseTime.toFixed(1)}ms</div>
                    <div className="text-orange-400">{hotspot.contribution.toFixed(1)}% impact</div>
                  </div>
                  <div className="text-xs text-blue-300 line-clamp-2">
                    💡 {hotspot.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Host Infrastructure & Synthetic Monitoring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Host Infrastructure */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🖥️ Host Infrastructure & OneAgent Monitoring
            </h3>
            <div className="space-y-3">
              {hostInfrastructure.map((host, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{host.hostname}</span>
                    <span className={`text-xs font-bold ${getStatusColor(host.status)}`}>{host.status}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-2">{host.osVersion} • Agent: {host.dynatraceAgent}</div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className={getUtilizationColor(host.cpuUsage)}>CPU: {host.cpuUsage.toFixed(1)}%</div>
                    <div className={getUtilizationColor(host.memoryUsage)}>MEM: {host.memoryUsage.toFixed(1)}%</div>
                    <div className={getUtilizationColor(host.diskUsage)}>DISK: {host.diskUsage.toFixed(1)}%</div>
                    <div className="text-cyan-400">NET: {host.networkIO.toFixed(1)} MB/s</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-indigo-400">{host.processes} processes</span>
                    <span className="text-blue-400">{host.applications} applications</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Synthetic Monitoring */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔍 Synthetic Monitoring & User Journeys
            </h3>
            <div className="space-y-3">
              {syntheticMonitoring.map((monitor, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{monitor.monitor}</span>
                    <span className={`text-xs font-bold ${getStatusColor(monitor.status)}`}>{monitor.status}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-1">{monitor.location} • Every {monitor.frequency}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-indigo-400">{monitor.responseTime.toFixed(2)}s response</div>
                    <div className="text-cyan-400">{monitor.availability.toFixed(1)}% uptime</div>
                    <div className="text-green-400">{monitor.successRate.toFixed(1)}% success</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-yellow-400">{monitor.stepCount} steps ({monitor.failedSteps} failed)</span>
                    <span className="text-gray-400">{monitor.lastRun}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Impact Analysis */}
        <div className="bg-gray-800 rounded-xl p-6 border border-purple-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            💼 Business Impact Analysis & KPI Correlation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {businessImpactAnalysis.map((metric, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-white mb-1">{metric.metric}</div>
                <div className="text-2xl font-bold text-purple-400 mb-1">{metric.value}</div>
                <div className={`text-sm font-bold mb-2 ${getTrendColor(metric.trend)}`}>{metric.trend}</div>
                <div className="text-xs text-yellow-300 mb-1">Cause: {metric.cause}</div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">{metric.timeframe}</span>
                  <span className={`font-bold ${getImpactColor(metric.severity)}`}>{metric.severity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            DYNATRACE APM | ALEKSANDRA AI APPLICATION MONITORING | AI-POWERED OBSERVABILITY PLATFORM
          </div>
          <div className="text-sm text-gray-500 mt-2">
            AI Root Cause Analysis | Smartscape Topology | Real User Monitoring | Synthetic Monitoring | Business Impact Correlation | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}