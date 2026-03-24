// Sentry Error Tracking Dashboard - March 2026
// Comprehensive Sentry-inspired error tracking and performance monitoring dashboard for application stability
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart } from 'recharts';

export default function SentryErrorTrackingDashboard() {
  const [sentryMetrics, setSentryMetrics] = useState({
    totalEvents: 156789,
    totalErrors: 23456,
    totalIssues: 1234,
    criticalIssues: 23,
    errorRate: 3.2,
    crashFreeRate: 99.68,
    apdexScore: 0.94,
    usersAffected: 4567,
    sessionsAffected: 8912,
    releaseHealth: 98.7,
    performanceScore: 87.3,
    totalReleases: 156
  });

  const [recentErrors, setRecentErrors] = useState([
    {
      id: 'ALEKSANDRA-ERR-001',
      error: 'TypeError: Cannot read property of undefined',
      level: 'error',
      environment: 'production',
      platform: 'javascript',
      release: 'aleksandra-ai@2.1.0',
      count: 234,
      userCount: 89,
      firstSeen: '05:57:15',
      lastSeen: '05:57:45',
      status: 'unresolved',
      assignee: 'Aleksandra AI'
    },
    {
      id: 'ALEKSANDRA-ERR-002', 
      error: 'NetworkError: Failed to fetch transcription',
      level: 'error',
      environment: 'production',
      platform: 'python',
      release: 'transcription-service@1.9.1',
      count: 156,
      userCount: 67,
      firstSeen: '05:56:30',
      lastSeen: '05:57:20',
      status: 'in_review',
      assignee: 'Daniel F.'
    },
    {
      id: 'ALEKSANDRA-ERR-003',
      error: 'TimeoutError: Request timeout after 30s',
      level: 'warning',
      environment: 'production',
      platform: 'node.js',
      release: 'content-processor@1.8.3',
      count: 89,
      userCount: 45,
      firstSeen: '05:55:10',
      lastSeen: '05:57:00',
      status: 'resolved',
      assignee: 'Auto-Resolution'
    },
    {
      id: 'ALEKSANDRA-ERR-004',
      error: 'RateLimitError: Instagram API rate limit exceeded',
      level: 'info',
      environment: 'production',
      platform: 'python',
      release: 'instagram-analyzer@1.5.2',
      count: 67,
      userCount: 23,
      firstSeen: '05:54:45',
      lastSeen: '05:56:15',
      status: 'ignored',
      assignee: 'Rate Limit Handler'
    },
    {
      id: 'ALEKSANDRA-ERR-005',
      error: 'DatabaseConnectionError: Connection pool exhausted',
      level: 'fatal',
      environment: 'production',
      platform: 'postgresql',
      release: 'database-service@3.2.1',
      count: 12,
      userCount: 234,
      firstSeen: '05:53:20',
      lastSeen: '05:55:30',
      status: 'in_progress',
      assignee: 'SOC Team'
    }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    {
      transaction: 'POST /api/v1/content/process',
      p50: 234.5,
      p75: 345.6,
      p95: 567.8,
      p99: 789.1,
      throughput: 1234,
      errorRate: 2.3,
      apdex: 0.94,
      userMisery: 1.2
    },
    {
      transaction: 'GET /api/v1/analyze/instagram',
      p50: 156.7,
      p75: 234.5,
      p95: 345.6,
      p99: 456.7,
      throughput: 897,
      errorRate: 1.8,
      apdex: 0.96,
      userMisery: 0.8
    },
    {
      transaction: 'POST /api/v1/transcribe',
      p50: 567.8,
      p75: 789.1,
      p95: 1234.5,
      p99: 1567.8,
      throughput: 456,
      errorRate: 4.2,
      apdex: 0.87,
      userMisery: 2.1
    },
    {
      transaction: 'POST /api/v1/ai/inference',
      p50: 345.6,
      p75: 456.7,
      p95: 678.9,
      p99: 890.1,
      throughput: 678,
      errorRate: 1.5,
      apdex: 0.93,
      userMisery: 1.0
    },
    {
      transaction: 'GET /api/v1/health',
      p50: 12.3,
      p75: 23.4,
      p95: 45.6,
      p99: 67.8,
      throughput: 2345,
      errorRate: 0.1,
      apdex: 0.99,
      userMisery: 0.1
    }
  ]);

  const [releaseHealth, setReleaseHealth] = useState([
    {
      release: 'aleksandra-ai@2.1.0',
      adoption: 87.3,
      crashFreeUsers: 99.2,
      crashFreeSessions: 99.5,
      sessionCount: 12456,
      userCount: 3456,
      errorCount: 234,
      deployedAt: '2026-03-22',
      health: 'healthy'
    },
    {
      release: 'content-processor@1.8.3',
      adoption: 76.8,
      crashFreeUsers: 98.7,
      crashFreeSessions: 99.1,
      sessionCount: 8976,
      userCount: 2345,
      errorCount: 156,
      deployedAt: '2026-03-20',
      health: 'healthy'
    },
    {
      release: 'transcription-service@1.9.1',
      adoption: 65.4,
      crashFreeUsers: 97.3,
      crashFreeSessions: 98.2,
      sessionCount: 5678,
      userCount: 1567,
      errorCount: 89,
      deployedAt: '2026-03-18',
      health: 'unhealthy'
    },
    {
      release: 'instagram-analyzer@1.5.2',
      adoption: 92.1,
      crashFreeUsers: 99.5,
      crashFreeSessions: 99.8,
      sessionCount: 15678,
      userCount: 4567,
      errorCount: 67,
      deployedAt: '2026-03-24',
      health: 'healthy'
    }
  ]);

  const [errorTrends, setErrorTrends] = useState([
    { time: '05:57', errors: 23, warnings: 45, info: 123, resolved: 67, newIssues: 12, users: 234 },
    { time: '05:56', errors: 28, warnings: 52, info: 134, resolved: 72, newIssues: 15, users: 267 },
    { time: '05:55', errors: 19, warnings: 38, info: 156, resolved: 63, newIssues: 8, users: 189 },
    { time: '05:54', errors: 34, warnings: 67, info: 145, resolved: 89, newIssues: 18, users: 298 },
    { time: '05:53', errors: 21, warnings: 43, info: 167, resolved: 54, newIssues: 9, users: 178 }
  ]);

  const [taggedErrors, setTaggedErrors] = useState([
    { tag: 'browser', count: 1234, percentage: 34.5, trend: '+12.3%' },
    { tag: 'api_error', count: 987, percentage: 27.6, trend: '+8.7%' },
    { tag: 'database', count: 654, percentage: 18.3, trend: '-3.2%' },
    { tag: 'network', count: 432, percentage: 12.1, trend: '+5.6%' },
    { tag: 'authentication', count: 267, percentage: 7.5, trend: '-1.8%' }
  ]);

  const [userFeedback, setUserFeedback] = useState([
    {
      id: 'FEEDBACK-001',
      name: 'daniel@aleksandra.ai',
      email: 'daniel@aleksandra.ai',
      message: 'Content processing is taking too long, timing out frequently',
      errorId: 'ALEKSANDRA-ERR-001',
      timestamp: '05:57:30',
      environment: 'production',
      release: 'aleksandra-ai@2.1.0'
    },
    {
      id: 'FEEDBACK-002', 
      name: 'anonymous_user_4567',
      email: 'anonymous',
      message: 'Instagram analysis failed with network error',
      errorId: 'ALEKSANDRA-ERR-002',
      timestamp: '05:56:45',
      environment: 'production',
      release: 'instagram-analyzer@1.5.2'
    },
    {
      id: 'FEEDBACK-003',
      name: 'api_consumer_123',
      email: 'developer@client.com',
      message: 'API endpoint returning 503 errors consistently',
      errorId: 'ALEKSANDRA-ERR-005',
      timestamp: '05:55:15',
      environment: 'production',
      release: 'api-gateway@3.2.1'
    }
  ]);

  const [breadcrumbs, setBreadcrumbs] = useState([
    {
      errorId: 'ALEKSANDRA-ERR-001',
      breadcrumbs: [
        { category: 'navigation', message: 'User navigated to /content/upload', timestamp: '05:57:10' },
        { category: 'ui.click', message: 'Clicked upload button', timestamp: '05:57:12' },
        { category: 'http.request', message: 'POST /api/v1/content/process', timestamp: '05:57:13' },
        { category: 'error', message: 'TypeError: Cannot read property of undefined', timestamp: '05:57:15' }
      ]
    }
  ]);

  const [environmentMetrics, setEnvironmentMetrics] = useState([
    { environment: 'production', errors: 1234, users: 4567, sessions: 8901, releases: 12 },
    { environment: 'staging', errors: 234, users: 123, sessions: 456, releases: 8 },
    { environment: 'development', errors: 567, users: 45, sessions: 89, releases: 23 },
    { environment: 'testing', errors: 89, users: 12, sessions: 34, releases: 5 }
  ]);

  const [alertRules, setAlertRules] = useState([
    {
      name: 'High Error Rate Alert',
      condition: 'Error rate > 5% for 5 minutes',
      status: 'active',
      triggered: 3,
      lastTriggered: '05:45:20',
      channel: 'Slack #alerts'
    },
    {
      name: 'Critical Issue Alert',
      condition: 'New critical issue detected',
      status: 'active',
      triggered: 1,
      lastTriggered: '05:53:20',
      channel: 'PagerDuty'
    },
    {
      name: 'Performance Degradation',
      condition: 'P95 latency > 1000ms',
      status: 'active',
      triggered: 2,
      lastTriggered: '05:48:10',
      channel: 'Email + Slack'
    },
    {
      name: 'Release Health',
      condition: 'Crash-free rate < 99%',
      status: 'paused',
      triggered: 0,
      lastTriggered: 'Never',
      channel: 'Slack #releases'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Sentry metrics
      setSentryMetrics(prev => ({
        ...prev,
        totalEvents: prev.totalEvents + Math.floor(Math.random() * 1000) + 500,
        totalErrors: prev.totalErrors + Math.floor(Math.random() * 50) + 20,
        totalIssues: prev.totalIssues + Math.floor(Math.random() * 10) + 3,
        criticalIssues: Math.max(10, prev.criticalIssues + Math.floor((Math.random() - 0.8) * 3)),
        errorRate: Math.max(1, Math.min(8, prev.errorRate + (Math.random() - 0.5) * 0.5)),
        crashFreeRate: Math.max(95, Math.min(100, prev.crashFreeRate + (Math.random() - 0.3) * 0.2)),
        apdexScore: Math.max(0.8, Math.min(1.0, prev.apdexScore + (Math.random() - 0.5) * 0.02)),
        usersAffected: prev.usersAffected + Math.floor(Math.random() * 100) + 20,
        performanceScore: Math.max(70, Math.min(100, prev.performanceScore + (Math.random() - 0.5) * 2)),
        releaseHealth: Math.max(85, Math.min(100, prev.releaseHealth + (Math.random() - 0.4) * 1))
      }));

      // Update error trends
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setErrorTrends(prev => {
        const newData = {
          time: currentTime,
          errors: Math.floor(Math.random() * 30) + 15,
          warnings: Math.floor(Math.random() * 50) + 30,
          info: Math.floor(Math.random() * 80) + 100,
          resolved: Math.floor(Math.random() * 40) + 50,
          newIssues: Math.floor(Math.random() * 15) + 5,
          users: Math.floor(Math.random() * 200) + 150
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update performance metrics
      setPerformanceMetrics(prev => prev.map(metric => ({
        ...metric,
        p50: Math.max(50, metric.p50 + (Math.random() - 0.5) * 30),
        p75: Math.max(100, metric.p75 + (Math.random() - 0.5) * 40),
        p95: Math.max(200, metric.p95 + (Math.random() - 0.5) * 60),
        p99: Math.max(300, metric.p99 + (Math.random() - 0.5) * 80),
        throughput: Math.max(metric.throughput * 0.8, Math.min(metric.throughput * 1.2, metric.throughput + (Math.random() - 0.5) * 100)),
        errorRate: Math.max(0.1, Math.min(10, metric.errorRate + (Math.random() - 0.5) * 0.5)),
        apdex: Math.max(0.7, Math.min(1.0, metric.apdex + (Math.random() - 0.5) * 0.02))
      })));

      // Update release health
      setReleaseHealth(prev => prev.map(release => ({
        ...release,
        adoption: Math.max(50, Math.min(100, release.adoption + (Math.random() - 0.5) * 2)),
        crashFreeUsers: Math.max(95, Math.min(100, release.crashFreeUsers + (Math.random() - 0.3) * 0.3)),
        crashFreeSessions: Math.max(97, Math.min(100, release.crashFreeSessions + (Math.random() - 0.3) * 0.2)),
        errorCount: Math.max(0, release.errorCount + Math.floor((Math.random() - 0.7) * 5))
      })));

      // Update recent errors
      setRecentErrors(prev => prev.map(error => ({
        ...error,
        count: error.count + Math.floor(Math.random() * 10) + 2,
        userCount: error.userCount + Math.floor(Math.random() * 5) + 1,
        lastSeen: currentTime
      })));
    }, 18000);

    return () => clearInterval(interval);
  }, []);

  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'fatal': return 'text-red-600';
      case 'error': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'unresolved': return 'text-red-400';
      case 'in_progress': case 'in_review': return 'text-yellow-400';
      case 'resolved': return 'text-green-400';
      case 'ignored': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getHealthColor = (health) => {
    switch(health.toLowerCase()) {
      case 'healthy': return 'text-green-400';
      case 'unhealthy': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getApdexColor = (apdex) => {
    if (apdex >= 0.95) return 'text-green-400';
    if (apdex >= 0.85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-pink-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Sentry Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🐛 Sentry Error Tracking Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>EVENTS: <span className="text-purple-400 font-mono">{(sentryMetrics.totalEvents / 1000).toFixed(1)}K</span></div>
                <div>ERRORS: <span className="text-red-400">{(sentryMetrics.totalErrors / 1000).toFixed(1)}K</span></div>
                <div>ISSUES: <span className="text-yellow-400">{sentryMetrics.totalIssues}</span></div>
                <div>CRITICAL: <span className="text-red-500 font-bold">{sentryMetrics.criticalIssues}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-purple-400">{sentryMetrics.crashFreeRate.toFixed(2)}%</div>
              <div className="text-sm text-gray-300">Crash-free Rate</div>
              <div className="text-xs text-purple-300">Users: {sentryMetrics.usersAffected}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Error Tracking Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{sentryMetrics.errorRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Current error rate</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Apdex Score</span>
              <span className="text-2xl">📈</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{sentryMetrics.apdexScore.toFixed(2)}</div>
            <div className="text-xs text-gray-400">User satisfaction</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Critical Issues</span>
              <span className="text-2xl">🔥</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{sentryMetrics.criticalIssues}</div>
            <div className="text-xs text-gray-400">High priority</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Performance</span>
              <span className="text-2xl">⚡</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{sentryMetrics.performanceScore.toFixed(0)}</div>
            <div className="text-xs text-gray-400">Performance score</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Error Trends Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Error Trends & Resolution Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={errorTrends.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#a855f7" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#a855f7" />
                <YAxis yAxisId="right" orientation="right" stroke="#a855f7" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #a855f7' }}
                  labelStyle={{ color: '#a855f7' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="errors" fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" name="Errors" />
                <Area yAxisId="left" type="monotone" dataKey="warnings" fill="#f59e0b" fillOpacity={0.3} stroke="#f59e0b" name="Warnings" />
                <Line yAxisId="right" type="monotone" dataKey="resolved" stroke="#22c55e" strokeWidth={2} name="Resolved" />
                <Bar yAxisId="left" dataKey="newIssues" fill="#8b5cf6" name="New Issues" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚀 Transaction Performance Metrics
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1 truncate">{metric.transaction}</div>
                  <div className="grid grid-cols-4 gap-1 text-xs mb-2">
                    <div className="text-blue-400">P50: {metric.p50.toFixed(0)}ms</div>
                    <div className="text-yellow-400">P95: {metric.p95.toFixed(0)}ms</div>
                    <div className="text-purple-400">{metric.throughput} rpm</div>
                    <div className={getApdexColor(metric.apdex)}>{metric.apdex.toFixed(2)} apdx</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-red-400">{metric.errorRate.toFixed(1)}% errors</span>
                    <span className="text-orange-400">Misery: {metric.userMisery.toFixed(1)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Recent Errors */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🐛 Recent Error Issues
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {recentErrors.map((error, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{error.id}</span>
                    <span className={`text-xs font-bold ${getLevelColor(error.level)}`}>{error.level}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 truncate">{error.error}</div>
                  <div className="text-xs text-purple-300 mb-1">{error.platform} • {error.environment}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-red-400">{error.count} events</div>
                    <div className="text-yellow-400">{error.userCount} users</div>
                    <div className={getStatusColor(error.status)}>{error.status}</div>
                    <div className="text-gray-400">{error.lastSeen}</div>
                  </div>
                  <div className="text-xs text-blue-300 mt-1">{error.assignee}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Release Health */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📦 Release Health Status
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {releaseHealth.map((release, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{release.release}</span>
                    <span className={`text-xs font-bold ${getHealthColor(release.health)}`}>{release.health}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-1">Deployed: {release.deployedAt}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-green-400">{release.crashFreeUsers.toFixed(1)}% crash-free users</div>
                    <div className="text-blue-400">{release.adoption.toFixed(1)}% adoption</div>
                    <div className="text-yellow-400">{release.sessionCount.toLocaleString()} sessions</div>
                    <div className="text-red-400">{release.errorCount} errors</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* User Feedback */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💬 User Feedback & Reports
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {userFeedback.map((feedback, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{feedback.name}</span>
                    <span className="text-xs text-gray-400">{feedback.timestamp}</span>
                  </div>
                  <div className="text-xs text-purple-300 mb-1">{feedback.errorId}</div>
                  <div className="text-xs text-gray-300 mb-2">{feedback.message}</div>
                  <div className="text-xs text-blue-300">{feedback.release}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tagged Errors & Environment Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Error Tags */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏷️ Error Classification & Tags
            </h3>
            <div className="space-y-3">
              {taggedErrors.map((tag, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{tag.tag}</span>
                    <span className={`text-sm font-bold ${getTrendColor(tag.trend)}`}>{tag.trend}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-400 text-lg">{tag.count.toLocaleString()}</span>
                    <span className="text-gray-400 text-sm">{tag.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-purple-400 h-2 rounded-full" 
                      style={{ width: `${tag.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Environment Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌍 Environment Error Distribution
            </h3>
            <div className="space-y-3">
              {environmentMetrics.map((env, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{env.environment}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-red-400">{env.errors} errors</div>
                    <div className="text-blue-400">{env.users.toLocaleString()} users</div>
                    <div className="text-green-400">{env.sessions.toLocaleString()} sessions</div>
                    <div className="text-purple-400">{env.releases} releases</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert Rules */}
        <div className="bg-gray-800 rounded-xl p-6 border border-purple-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🔔 Alert Rules & Notifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {alertRules.map((rule, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{rule.name}</span>
                  <span className={`text-xs px-2 py-1 rounded ${rule.status === 'active' ? 'bg-green-600' : 'bg-gray-600'}`}>
                    {rule.status}
                  </span>
                </div>
                <div className="text-xs text-purple-300 mb-2">{rule.condition}</div>
                <div className="grid grid-cols-2 gap-1 text-xs">
                  <div className="text-orange-400">Triggered: {rule.triggered}</div>
                  <div className="text-gray-400">Last: {rule.lastTriggered}</div>
                  <div className="text-blue-400 col-span-2">{rule.channel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            SENTRY ERROR TRACKING | ALEKSANDRA AI MONITORING | APPLICATION STABILITY & PERFORMANCE
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Error Tracking | Performance Monitoring | Release Health | User Feedback | Real-time Alerts | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}