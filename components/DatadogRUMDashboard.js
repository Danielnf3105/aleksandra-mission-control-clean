// Datadog Real User Monitoring Dashboard - March 2026
// Comprehensive Datadog RUM-inspired real user monitoring dashboard for frontend performance and user experience analytics
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, Funnel, FunnelChart } from 'recharts';

export default function DatadogRUMDashboard() {
  const [rumMetrics, setRumMetrics] = useState({
    totalPageViews: 567890,
    uniqueUsers: 45678,
    sessionsToday: 23456,
    avgSessionDuration: 5.3,
    bounceRate: 24.7,
    pageLoadTime: 2.34,
    firstContentfulPaint: 1.12,
    largestContentfulPaint: 2.67,
    cumulativeLayoutShift: 0.08,
    firstInputDelay: 23.4,
    timeToInteractive: 3.45,
    performanceScore: 89.2
  });

  const [userJourney, setUserJourney] = useState([
    {
      step: 'Landing Page',
      users: 10000,
      conversionRate: 100,
      avgTime: 45.6,
      bounceRate: 35.2,
      errors: 12,
      performance: 89.3
    },
    {
      step: 'Content Upload',
      users: 7800,
      conversionRate: 78,
      avgTime: 123.4,
      bounceRate: 15.6,
      errors: 23,
      performance: 87.1
    },
    {
      step: 'AI Processing',
      users: 6900,
      conversionRate: 69,
      avgTime: 234.5,
      bounceRate: 8.3,
      errors: 45,
      performance: 85.7
    },
    {
      step: 'Results View',
      users: 6200,
      conversionRate: 62,
      avgTime: 89.2,
      bounceRate: 5.1,
      errors: 8,
      performance: 91.2
    },
    {
      step: 'Export/Share',
      users: 4800,
      conversionRate: 48,
      avgTime: 67.8,
      bounceRate: 12.4,
      errors: 15,
      performance: 88.9
    }
  ]);

  const [coreWebVitals, setCoreWebVitals] = useState([
    {
      metric: 'Largest Contentful Paint',
      value: 2.67,
      threshold: 2.5,
      status: 'needs_improvement',
      p75: 3.12,
      p90: 4.56,
      p95: 5.78,
      trend: '+0.15s'
    },
    {
      metric: 'First Input Delay',
      value: 23.4,
      threshold: 100,
      status: 'good',
      p75: 45.6,
      p90: 78.9,
      p95: 123.4,
      trend: '-5.2ms'
    },
    {
      metric: 'Cumulative Layout Shift',
      value: 0.08,
      threshold: 0.1,
      status: 'good',
      p75: 0.12,
      p90: 0.18,
      p95: 0.25,
      trend: '-0.02'
    },
    {
      metric: 'First Contentful Paint',
      value: 1.12,
      threshold: 1.8,
      status: 'good',
      p75: 1.45,
      p90: 2.12,
      p95: 2.78,
      trend: '-0.08s'
    },
    {
      metric: 'Time to Interactive',
      value: 3.45,
      threshold: 3.8,
      status: 'good',
      p75: 4.23,
      p90: 5.67,
      p95: 7.12,
      trend: '+0.23s'
    }
  ]);

  const [userSegments, setUserSegments] = useState([
    {
      segment: 'New Users',
      users: 12345,
      percentage: 27.0,
      avgSessionDuration: 3.2,
      bounceRate: 45.6,
      conversionRate: 12.3,
      revenuePerUser: 0,
      topPage: '/landing'
    },
    {
      segment: 'Returning Users',
      users: 23456,
      percentage: 51.3,
      avgSessionDuration: 6.8,
      bounceRate: 18.9,
      conversionRate: 34.7,
      revenuePerUser: 45.67,
      topPage: '/dashboard'
    },
    {
      segment: 'Power Users',
      users: 8901,
      percentage: 19.5,
      avgSessionDuration: 12.4,
      bounceRate: 8.2,
      conversionRate: 67.8,
      revenuePerUser: 123.45,
      topPage: '/advanced'
    },
    {
      segment: 'Mobile Users',
      users: 15678,
      percentage: 34.3,
      avgSessionDuration: 4.1,
      bounceRate: 38.7,
      conversionRate: 21.5,
      revenuePerUser: 23.89,
      topPage: '/mobile'
    },
    {
      segment: 'Enterprise Users',
      users: 1234,
      percentage: 2.7,
      avgSessionDuration: 18.9,
      bounceRate: 5.3,
      conversionRate: 89.2,
      revenuePerUser: 567.89,
      topPage: '/enterprise'
    }
  ]);

  const [errorTracking, setErrorTracking] = useState([
    {
      error: 'TypeError: Cannot read property of undefined',
      occurrences: 234,
      affectedUsers: 89,
      impactedSessions: 156,
      firstSeen: '06:07:15',
      lastSeen: '06:07:30',
      url: '/content/process',
      browser: 'Chrome 122',
      severity: 'high'
    },
    {
      error: 'NetworkError: Failed to fetch',
      occurrences: 156,
      affectedUsers: 67,
      impactedSessions: 123,
      firstSeen: '06:06:45',
      lastSeen: '06:07:20',
      url: '/api/transcribe',
      browser: 'Firefox 124',
      severity: 'medium'
    },
    {
      error: 'TimeoutError: Request timeout',
      occurrences: 89,
      affectedUsers: 45,
      impactedSessions: 78,
      firstSeen: '06:05:30',
      lastSeen: '06:07:00',
      url: '/analyze/instagram',
      browser: 'Safari 17',
      severity: 'low'
    },
    {
      error: 'ChunkLoadError: Loading chunk failed',
      occurrences: 67,
      affectedUsers: 34,
      impactedSessions: 56,
      firstSeen: '06:04:15',
      lastSeen: '06:06:30',
      url: '/dashboard',
      browser: 'Edge 122',
      severity: 'medium'
    }
  ]);

  const [performanceTimeline, setPerformanceTimeline] = useState([
    { time: '06:07', pageViews: 2345, loadTime: 2.34, fcp: 1.12, lcp: 2.67, cls: 0.08, fid: 23.4, errors: 23, users: 456 },
    { time: '06:06', pageViews: 2156, loadTime: 2.45, fcp: 1.18, lcp: 2.78, cls: 0.09, fid: 28.7, errors: 19, users: 423 },
    { time: '06:05', pageViews: 2267, loadTime: 2.29, fcp: 1.08, lcp: 2.56, cls: 0.07, fid: 21.3, errors: 31, users: 467 },
    { time: '06:04', pageViews: 2098, loadTime: 2.51, fcp: 1.23, lcp: 2.89, cls: 0.11, fid: 34.5, errors: 28, users: 398 },
    { time: '06:03', pageViews: 2234, loadTime: 2.38, fcp: 1.15, lcp: 2.73, cls: 0.08, fid: 26.8, errors: 25, users: 445 }
  ]);

  const [browserAnalytics, setBrowserAnalytics] = useState([
    { browser: 'Chrome', version: '122', users: 18234, percentage: 39.9, avgLoadTime: 2.12, errorRate: 1.8, performance: 91.2 },
    { browser: 'Safari', version: '17', users: 12456, percentage: 27.3, avgLoadTime: 2.45, errorRate: 1.2, performance: 89.7 },
    { browser: 'Firefox', version: '124', users: 8901, percentage: 19.5, avgLoadTime: 2.67, errorRate: 2.3, performance: 87.4 },
    { browser: 'Edge', version: '122', users: 4567, percentage: 10.0, avgLoadTime: 2.34, errorRate: 1.9, performance: 88.9 },
    { browser: 'Opera', version: '108', users: 1512, percentage: 3.3, avgLoadTime: 2.89, errorRate: 2.7, performance: 85.6 }
  ]);

  const [geographicData, setGeographicData] = useState([
    { country: 'United States', users: 15678, percentage: 34.3, avgLoadTime: 2.12, errorRate: 1.5, revenue: 45678.90 },
    { country: 'United Kingdom', users: 8901, percentage: 19.5, avgLoadTime: 2.34, errorRate: 1.8, revenue: 23456.78 },
    { country: 'Germany', users: 6789, percentage: 14.9, avgLoadTime: 2.45, errorRate: 1.3, revenue: 34567.89 },
    { country: 'France', users: 5432, percentage: 11.9, avgLoadTime: 2.67, errorRate: 2.1, revenue: 19876.54 },
    { country: 'Canada', users: 4321, percentage: 9.5, avgLoadTime: 2.23, errorRate: 1.6, revenue: 15432.10 },
    { country: 'Australia', users: 2345, percentage: 5.1, avgLoadTime: 2.89, errorRate: 2.4, revenue: 12345.67 },
    { country: 'Japan', users: 1234, percentage: 2.7, avgLoadTime: 3.12, errorRate: 2.8, revenue: 8765.43 },
    { country: 'Brazil', users: 987, percentage: 2.2, avgLoadTime: 3.45, errorRate: 3.2, revenue: 5678.90 }
  ]);

  const [deviceAnalytics, setDeviceAnalytics] = useState([
    { device: 'Desktop', users: 23456, percentage: 51.3, avgLoadTime: 2.12, errorRate: 1.4, conversionRate: 45.6 },
    { device: 'Mobile', users: 18901, percentage: 41.4, avgLoadTime: 2.78, errorRate: 2.3, conversionRate: 28.7 },
    { device: 'Tablet', users: 3321, percentage: 7.3, avgLoadTime: 2.45, errorRate: 1.8, conversionRate: 34.2 }
  ]);

  const [customEvents, setCustomEvents] = useState([
    { event: 'content_uploaded', count: 12345, uniqueUsers: 8901, avgDuration: 234.5, conversionRate: 78.9 },
    { event: 'ai_analysis_started', count: 9876, uniqueUsers: 7654, avgDuration: 567.8, conversionRate: 89.2 },
    { event: 'results_exported', count: 6543, uniqueUsers: 4567, avgDuration: 123.4, conversionRate: 67.3 },
    { event: 'premium_upgrade', count: 1234, uniqueUsers: 1234, avgDuration: 45.6, conversionRate: 23.4 },
    { event: 'share_social', count: 3456, uniqueUsers: 2345, avgDuration: 67.8, conversionRate: 45.2 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update RUM metrics
      setRumMetrics(prev => ({
        ...prev,
        totalPageViews: prev.totalPageViews + Math.floor(Math.random() * 1000) + 500,
        uniqueUsers: prev.uniqueUsers + Math.floor(Math.random() * 100) + 50,
        sessionsToday: prev.sessionsToday + Math.floor(Math.random() * 200) + 100,
        avgSessionDuration: Math.max(3, Math.min(10, prev.avgSessionDuration + (Math.random() - 0.5) * 0.5)),
        bounceRate: Math.max(15, Math.min(40, prev.bounceRate + (Math.random() - 0.5) * 2)),
        pageLoadTime: Math.max(1.5, Math.min(4, prev.pageLoadTime + (Math.random() - 0.5) * 0.3)),
        firstContentfulPaint: Math.max(0.8, Math.min(2.5, prev.firstContentfulPaint + (Math.random() - 0.5) * 0.2)),
        largestContentfulPaint: Math.max(2, Math.min(4, prev.largestContentfulPaint + (Math.random() - 0.5) * 0.3)),
        cumulativeLayoutShift: Math.max(0.05, Math.min(0.15, prev.cumulativeLayoutShift + (Math.random() - 0.5) * 0.02)),
        firstInputDelay: Math.max(10, Math.min(50, prev.firstInputDelay + (Math.random() - 0.5) * 5)),
        performanceScore: Math.max(75, Math.min(95, prev.performanceScore + (Math.random() - 0.5) * 2))
      }));

      // Update performance timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceTimeline(prev => {
        const newData = {
          time: currentTime,
          pageViews: Math.floor(Math.random() * 1000) + 2000,
          loadTime: Math.max(1.5, Math.min(4, prev[prev.length - 1]?.loadTime + (Math.random() - 0.5) * 0.3)) || 2.34,
          fcp: Math.max(0.8, Math.min(2.5, prev[prev.length - 1]?.fcp + (Math.random() - 0.5) * 0.2)) || 1.12,
          lcp: Math.max(2, Math.min(4, prev[prev.length - 1]?.lcp + (Math.random() - 0.5) * 0.3)) || 2.67,
          cls: Math.max(0.05, Math.min(0.15, prev[prev.length - 1]?.cls + (Math.random() - 0.5) * 0.02)) || 0.08,
          fid: Math.max(10, Math.min(50, prev[prev.length - 1]?.fid + (Math.random() - 0.5) * 5)) || 23.4,
          errors: Math.floor(Math.random() * 30) + 15,
          users: Math.floor(Math.random() * 200) + 400
        };
        
        return [...prev.slice(-19), newData]; // Keep last 20 points
      });

      // Update error tracking
      setErrorTracking(prev => prev.map(error => ({
        ...error,
        occurrences: error.occurrences + Math.floor(Math.random() * 10) + 2,
        affectedUsers: error.affectedUsers + Math.floor(Math.random() * 5) + 1,
        impactedSessions: error.impactedSessions + Math.floor(Math.random() * 8) + 2,
        lastSeen: currentTime
      })));

      // Update user segments
      setUserSegments(prev => prev.map(segment => ({
        ...segment,
        users: segment.users + Math.floor(Math.random() * 100) + 20,
        avgSessionDuration: Math.max(2, Math.min(20, segment.avgSessionDuration + (Math.random() - 0.5) * 0.5)),
        bounceRate: Math.max(5, Math.min(60, segment.bounceRate + (Math.random() - 0.5) * 2)),
        conversionRate: Math.max(5, Math.min(95, segment.conversionRate + (Math.random() - 0.5) * 2))
      })));

      // Update core web vitals
      setCoreWebVitals(prev => prev.map(vital => ({
        ...vital,
        value: Math.max(0, vital.value + (Math.random() - 0.5) * (vital.value * 0.1)),
        p75: Math.max(0, vital.p75 + (Math.random() - 0.5) * (vital.p75 * 0.1)),
        p90: Math.max(0, vital.p90 + (Math.random() - 0.5) * (vital.p90 * 0.1)),
        p95: Math.max(0, vital.p95 + (Math.random() - 0.5) * (vital.p95 * 0.1))
      })));
    }, 22000);

    return () => clearInterval(interval);
  }, []);

  const getVitalStatus = (value, threshold) => {
    if (value <= threshold) return 'good';
    if (value <= threshold * 1.5) return 'needs_improvement';
    return 'poor';
  };

  const getVitalColor = (status) => {
    switch(status) {
      case 'good': return 'text-green-400';
      case 'needs_improvement': return 'text-yellow-400';
      case 'poor': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getConversionColor = (rate) => {
    if (rate >= 60) return 'text-green-400';
    if (rate >= 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-gray-900 to-cyan-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Datadog RUM Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                👁️ Datadog Real User Monitoring
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>VIEWS: <span className="text-indigo-400 font-mono">{(rumMetrics.totalPageViews / 1000).toFixed(1)}K</span></div>
                <div>USERS: <span className="text-cyan-400">{(rumMetrics.uniqueUsers / 1000).toFixed(1)}K</span></div>
                <div>SESSIONS: <span className="text-blue-400">{(rumMetrics.sessionsToday / 1000).toFixed(1)}K</span></div>
                <div>BOUNCE: <span className="text-yellow-400">{rumMetrics.bounceRate.toFixed(1)}%</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-indigo-400">{rumMetrics.pageLoadTime.toFixed(2)}s</div>
              <div className="text-sm text-gray-300">Avg Load Time</div>
              <div className="text-xs text-indigo-300">Score: {rumMetrics.performanceScore.toFixed(0)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key RUM Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-indigo-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Unique Users</span>
              <span className="text-2xl">👥</span>
            </div>
            <div className="text-2xl font-bold text-indigo-400 mb-1">{(rumMetrics.uniqueUsers / 1000).toFixed(1)}K</div>
            <div className="text-xs text-gray-400">Daily active users</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-cyan-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Session Duration</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">{rumMetrics.avgSessionDuration.toFixed(1)}m</div>
            <div className="text-xs text-gray-400">Average session time</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Page Load Time</span>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{rumMetrics.pageLoadTime.toFixed(2)}s</div>
            <div className="text-xs text-gray-400">Average load time</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Performance Score</span>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{rumMetrics.performanceScore.toFixed(0)}</div>
            <div className="text-xs text-gray-400">Overall performance</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Real User Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#6366f1" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#6366f1" />
                <YAxis yAxisId="right" orientation="right" stroke="#6366f1" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #6366f1' }}
                  labelStyle={{ color: '#6366f1' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="pageViews" fill="#6366f1" fillOpacity={0.3} stroke="#6366f1" name="Page Views" />
                <Line yAxisId="right" type="monotone" dataKey="loadTime" stroke="#f59e0b" strokeWidth={2} name="Load Time (s)" />
                <Line yAxisId="right" type="monotone" dataKey="lcp" stroke="#ef4444" strokeWidth={2} name="LCP (s)" />
                <Bar yAxisId="left" dataKey="errors" fill="#dc2626" name="Errors" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Core Web Vitals */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Core Web Vitals Performance
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {coreWebVitals.map((vital, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{vital.metric}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${vital.status === 'good' ? 'bg-green-600' : vital.status === 'needs_improvement' ? 'bg-yellow-600' : 'bg-red-600'}`}>
                      {vital.status.replace(/_/g, ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-1">
                    <div className={getVitalColor(vital.status)}>Current: {typeof vital.value === 'number' ? vital.value.toFixed(2) : vital.value}</div>
                    <div className="text-gray-400">Target: {vital.threshold}</div>
                    <div className="text-blue-400">P75: {vital.p75.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-purple-400">P95: {vital.p95.toFixed(2)}</span>
                    <span className="text-orange-400">Trend: {vital.trend}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* User Journey Funnel */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔄 User Journey Funnel
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {userJourney.map((step, index) => (
                <div key={index} className="relative">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold text-white">{step.step}</span>
                      <span className={`text-xs ${getConversionColor(step.conversionRate)}`}>{step.conversionRate}%</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      <div className="text-indigo-400">{step.users.toLocaleString()} users</div>
                      <div className="text-yellow-400">{step.avgTime.toFixed(0)}s avg</div>
                      <div className="text-red-400">{step.errors} errors</div>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                      <div 
                        className="bg-indigo-400 h-2 rounded-full" 
                        style={{ width: `${step.conversionRate}%` }}
                      ></div>
                    </div>
                  </div>
                  {index < userJourney.length - 1 && (
                    <div className="flex justify-center my-1">
                      <div className="text-gray-400 text-xs">↓ {((userJourney[index + 1].users / step.users) * 100).toFixed(1)}% continue</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Error Tracking */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🐛 Real User Error Tracking
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {errorTracking.map((error, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{error.error}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(error.severity)}`}>{error.severity}</span>
                  </div>
                  <div className="text-xs text-indigo-300 mb-1">{error.url}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-red-400">{error.occurrences} times</div>
                    <div className="text-yellow-400">{error.affectedUsers} users</div>
                    <div className="text-blue-400">{error.browser}</div>
                    <div className="text-gray-400">{error.lastSeen}</div>
                  </div>
                  <div className="text-xs text-purple-300">Sessions: {error.impactedSessions}</div>
                </div>
              ))}
            </div>
          </div>

          {/* User Segments */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              👥 User Segment Analysis
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {userSegments.map((segment, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{segment.segment}</span>
                    <span className="text-xs text-indigo-400">{segment.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-cyan-400">{segment.users.toLocaleString()} users</div>
                    <div className="text-yellow-400">{segment.avgSessionDuration.toFixed(1)}m session</div>
                    <div className={getConversionColor(segment.conversionRate)}>{segment.conversionRate.toFixed(1)}% conv</div>
                    <div className="text-green-400">${segment.revenuePerUser.toFixed(0)} RPU</div>
                  </div>
                  <div className="text-xs text-purple-300">Top: {segment.topPage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Browser & Device Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Browser Analytics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌐 Browser Performance Analytics
            </h3>
            <div className="space-y-3">
              {browserAnalytics.map((browser, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{browser.browser} {browser.version}</span>
                    <span className={`text-sm ${getPerformanceColor(browser.performance)}`}>{browser.performance.toFixed(0)}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-indigo-400">{browser.users.toLocaleString()} users</div>
                    <div className="text-blue-400">{browser.avgLoadTime.toFixed(2)}s load</div>
                    <div className="text-red-400">{browser.errorRate.toFixed(1)}% errors</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-indigo-400 h-2 rounded-full" 
                      style={{ width: `${browser.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Analytics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌍 Geographic Performance Distribution
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {geographicData.map((country, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{country.country}</span>
                    <span className="text-xs text-green-400">${country.revenue.toLocaleString()}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-indigo-400">{country.users.toLocaleString()} users</div>
                    <div className="text-blue-400">{country.avgLoadTime.toFixed(2)}s load</div>
                    <div className="text-red-400">{country.errorRate.toFixed(1)}% errors</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-1">
                    <div 
                      className="bg-cyan-400 h-2 rounded-full" 
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Custom Events & Device Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Custom Events */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Custom Event Tracking
            </h3>
            <div className="space-y-3">
              {customEvents.map((event, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{event.event}</span>
                    <span className={`text-xs ${getConversionColor(event.conversionRate)}`}>{event.conversionRate.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-indigo-400">{event.count.toLocaleString()} events</div>
                    <div className="text-cyan-400">{event.uniqueUsers.toLocaleString()} users</div>
                    <div className="text-yellow-400">{event.avgDuration.toFixed(0)}ms avg</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Analytics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-indigo-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📱 Device Performance Breakdown
            </h3>
            <div className="space-y-4">
              {deviceAnalytics.map((device, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-white">{device.device}</span>
                    <span className="text-indigo-400 text-lg">{device.percentage.toFixed(1)}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-cyan-400">{device.users.toLocaleString()} users</div>
                    <div className="text-blue-400">{device.avgLoadTime.toFixed(2)}s load time</div>
                    <div className="text-red-400">{device.errorRate.toFixed(1)}% error rate</div>
                    <div className={getConversionColor(device.conversionRate)}>{device.conversionRate.toFixed(1)}% conversion</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3 mt-3">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-cyan-500 h-3 rounded-full" 
                      style={{ width: `${device.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            DATADOG REAL USER MONITORING | ALEKSANDRA AI ANALYTICS | FRONTEND PERFORMANCE & USER EXPERIENCE
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Core Web Vitals | User Journey Analytics | Error Tracking | Performance Monitoring | Real User Metrics | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}