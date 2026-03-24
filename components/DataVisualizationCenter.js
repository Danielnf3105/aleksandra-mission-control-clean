// Data Visualization Intelligence Center - Dashboard & Analytics Visualization
import { useState, useEffect } from 'react';
import { PieChart, TrendingUp, BarChart, Activity, Layers, BarChart3, CheckCircle, AlertTriangle, Target, Settings, Eye, Zap } from 'lucide-react';

export default function DataVisualizationCenter() {
  const [vizData, setVizData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    visualizationOverview: {
      totalDashboards: 2456,
      activeDashboards: 2234,
      totalCharts: 15678,
      activeCharts: 14321,
      dataQueries: 89012345,
      renderTime: 234,
      cacheHitRate: 92.7,
      userSessions: 45678,
      interactionRate: 78.9,
      loadTime: 1.8,
      errorRate: 0.3,
      refreshRate: 15.4,
      dataVolume: 567890123,
      visualComplexity: 7.2,
      performance: 94.6
    },
    chartTypes: [
      {
        type: 'Line Charts',
        count: 4567,
        usage: 29.1,
        renderTime: 156,
        interactions: 123456,
        dataPoints: 2345678,
        performance: 96.8,
        cacheRate: 94.3,
        errorRate: 0.2,
        complexityScore: 6.8,
        popularLibraries: ['Chart.js', 'D3.js', 'Recharts'],
        avgLoadTime: '1.2s',
        responsiveness: 98.7,
        accessibility: 89.4,
        features: {
          realTime: 78.9,
          interactive: 92.3,
          responsive: 96.4,
          animated: 87.6
        },
        dataTypes: ['Time Series', 'Metrics', 'KPIs', 'Trends'],
        optimization: {
          compression: 84.7,
          caching: 94.3,
          lazy_loading: 76.8,
          virtualization: 45.2
        }
      },
      {
        type: 'Bar Charts',
        count: 3456,
        usage: 22.0,
        renderTime: 187,
        interactions: 98765,
        dataPoints: 1987654,
        performance: 93.2,
        cacheRate: 91.7,
        errorRate: 0.4,
        complexityScore: 5.9,
        popularLibraries: ['Chart.js', 'ApexCharts', 'Highcharts'],
        avgLoadTime: '1.4s',
        responsiveness: 97.3,
        accessibility: 92.1,
        features: {
          realTime: 67.8,
          interactive: 89.4,
          responsive: 95.2,
          animated: 83.7
        },
        dataTypes: ['Categories', 'Comparisons', 'Rankings', 'Distributions'],
        optimization: {
          compression: 81.3,
          caching: 91.7,
          lazy_loading: 72.4,
          virtualization: 38.9
        }
      },
      {
        type: 'Pie Charts',
        count: 2345,
        usage: 14.9,
        renderTime: 143,
        interactions: 76543,
        dataPoints: 876543,
        performance: 95.4,
        cacheRate: 96.2,
        errorRate: 0.1,
        complexityScore: 4.3,
        popularLibraries: ['Chart.js', 'D3.js', 'Victory'],
        avgLoadTime: '0.9s',
        responsiveness: 98.9,
        accessibility: 87.6,
        features: {
          realTime: 45.6,
          interactive: 78.9,
          responsive: 98.3,
          animated: 89.7
        },
        dataTypes: ['Proportions', 'Percentages', 'Parts of Whole', 'Segments'],
        optimization: {
          compression: 89.4,
          caching: 96.2,
          lazy_loading: 67.8,
          virtualization: 23.4
        }
      },
      {
        type: 'Heatmaps',
        count: 1890,
        usage: 12.0,
        renderTime: 298,
        interactions: 54321,
        dataPoints: 3456789,
        performance: 87.6,
        cacheRate: 88.9,
        errorRate: 0.7,
        complexityScore: 8.7,
        popularLibraries: ['D3.js', 'Plotly', 'Observable'],
        avgLoadTime: '2.3s',
        responsiveness: 89.4,
        accessibility: 76.8,
        features: {
          realTime: 89.3,
          interactive: 94.7,
          responsive: 87.2,
          animated: 67.4
        },
        dataTypes: ['Correlations', 'Density', 'Intensity', 'Patterns'],
        optimization: {
          compression: 76.8,
          caching: 88.9,
          lazy_loading: 89.4,
          virtualization: 78.9
        }
      },
      {
        type: 'Scatter Plots',
        count: 1567,
        usage: 9.9,
        renderTime: 234,
        interactions: 43210,
        dataPoints: 5678901,
        performance: 91.3,
        cacheRate: 89.7,
        errorRate: 0.5,
        complexityScore: 7.6,
        popularLibraries: ['D3.js', 'Plotly', 'Observable'],
        avgLoadTime: '1.8s',
        responsiveness: 93.7,
        accessibility: 82.4,
        features: {
          realTime: 72.6,
          interactive: 96.8,
          responsive: 91.3,
          animated: 74.2
        },
        dataTypes: ['Relationships', 'Correlations', 'Clusters', 'Outliers'],
        optimization: {
          compression: 79.3,
          caching: 89.7,
          lazy_loading: 83.4,
          virtualization: 67.8
        }
      },
      {
        type: 'Gauge Charts',
        count: 1234,
        usage: 7.8,
        renderTime: 167,
        interactions: 32109,
        dataPoints: 234567,
        performance: 97.2,
        cacheRate: 95.8,
        errorRate: 0.2,
        complexityScore: 5.4,
        popularLibraries: ['ApexCharts', 'Highcharts', 'AmCharts'],
        avgLoadTime: '1.1s',
        responsiveness: 96.8,
        accessibility: 91.7,
        features: {
          realTime: 94.3,
          interactive: 67.8,
          responsive: 97.6,
          animated: 91.4
        },
        dataTypes: ['KPIs', 'Thresholds', 'Progress', 'Status'],
        optimization: {
          compression: 87.9,
          caching: 95.8,
          lazy_loading: 54.3,
          virtualization: 12.7
        }
      }
    ],
    dashboardPerformance: [
      {
        dashboard: 'Executive KPI Dashboard',
        id: 'DASH-EXE-001',
        category: 'Executive',
        charts: 12,
        users: 234,
        loadTime: 1.2,
        renderTime: 189,
        interactions: 5678,
        dataQueries: 89012,
        cacheHit: 96.4,
        errorRate: 0.1,
        complexity: 8.9,
        dataVolume: 234567890,
        updateFrequency: '5 minutes',
        responsiveness: 98.7,
        accessibility: 94.3,
        performance: {
          lcp: '1.1s',
          fid: '34ms',
          cls: '0.05',
          tti: '1.8s'
        },
        optimizations: {
          lazy_loading: true,
          virtualization: true,
          compression: true,
          caching: true
        },
        issues: ['Minor rendering delay on mobile'],
        recommendations: ['Implement progressive loading', 'Optimize mobile layout']
      },
      {
        dashboard: 'Marketing Analytics Hub',
        id: 'DASH-MKT-002',
        category: 'Marketing',
        charts: 18,
        users: 156,
        loadTime: 2.1,
        renderTime: 267,
        interactions: 7890,
        dataQueries: 123456,
        cacheHit: 89.7,
        errorRate: 0.4,
        complexity: 9.2,
        dataVolume: 345678901,
        updateFrequency: '1 minute',
        responsiveness: 92.4,
        accessibility: 87.6,
        performance: {
          lcp: '1.9s',
          fid: '67ms',
          cls: '0.12',
          tti: '2.6s'
        },
        optimizations: {
          lazy_loading: true,
          virtualization: false,
          compression: true,
          caching: true
        },
        issues: ['Heavy data queries', 'Complex animations'],
        recommendations: ['Implement data pagination', 'Reduce animation complexity']
      },
      {
        dashboard: 'Operations Monitor',
        id: 'DASH-OPS-003',
        category: 'Operations',
        charts: 24,
        users: 89,
        loadTime: 1.6,
        renderTime: 234,
        interactions: 3456,
        dataQueries: 67890,
        cacheHit: 94.2,
        errorRate: 0.2,
        complexity: 7.8,
        dataVolume: 178901234,
        updateFrequency: '10 seconds',
        responsiveness: 95.8,
        accessibility: 91.2,
        performance: {
          lcp: '1.4s',
          fid: '45ms',
          cls: '0.08',
          tti: '2.1s'
        },
        optimizations: {
          lazy_loading: true,
          virtualization: true,
          compression: true,
          caching: true
        },
        issues: ['High refresh rate impact'],
        recommendations: ['Smart refresh optimization', 'Delta updates only']
      },
      {
        dashboard: 'Financial Reporting',
        id: 'DASH-FIN-004',
        category: 'Finance',
        charts: 15,
        users: 67,
        loadTime: 1.8,
        renderTime: 201,
        interactions: 2345,
        dataQueries: 45678,
        cacheHit: 97.8,
        errorRate: 0.1,
        complexity: 6.4,
        dataVolume: 123456789,
        updateFrequency: '1 hour',
        responsiveness: 97.3,
        accessibility: 96.8,
        performance: {
          lcp: '1.3s',
          fid: '23ms',
          cls: '0.03',
          tti: '1.9s'
        },
        optimizations: {
          lazy_loading: true,
          virtualization: false,
          compression: true,
          caching: true
        },
        issues: [],
        recommendations: ['Excellent performance - maintain current optimization']
      },
      {
        dashboard: 'Real-Time Monitoring',
        id: 'DASH-RT-005',
        category: 'Real-Time',
        charts: 32,
        users: 123,
        loadTime: 2.8,
        renderTime: 389,
        interactions: 9876,
        dataQueries: 234567,
        cacheHit: 78.9,
        errorRate: 0.6,
        complexity: 9.7,
        dataVolume: 456789012,
        updateFrequency: '1 second',
        responsiveness: 87.6,
        accessibility: 82.4,
        performance: {
          lcp: '2.4s',
          fid: '89ms',
          cls: '0.18',
          tti: '3.2s'
        },
        optimizations: {
          lazy_loading: true,
          virtualization: true,
          compression: true,
          caching: false
        },
        issues: ['Real-time data overhead', 'Memory usage high', 'Layout shifts'],
        recommendations: ['Implement WebSocket optimization', 'Memory leak prevention', 'Stable layout design']
      }
    ],
    dataConnectors: [
      {
        source: 'PostgreSQL',
        connections: 234,
        queries: 123456,
        avgResponseTime: 89,
        errorRate: 0.4,
        dataVolume: 234567890,
        usage: 34.7,
        optimization: 'Query Caching',
        status: 'HEALTHY',
        lastUpdated: '2026-03-18 10:07'
      },
      {
        source: 'REST APIs',
        connections: 156,
        queries: 234567,
        avgResponseTime: 267,
        errorRate: 1.2,
        dataVolume: 123456789,
        usage: 28.9,
        optimization: 'Response Caching',
        status: 'WARNING',
        lastUpdated: '2026-03-18 10:06'
      },
      {
        source: 'MongoDB',
        connections: 89,
        queries: 67890,
        avgResponseTime: 134,
        errorRate: 0.7,
        dataVolume: 67890123,
        usage: 15.6,
        optimization: 'Index Optimization',
        status: 'HEALTHY',
        lastUpdated: '2026-03-18 10:08'
      },
      {
        source: 'Redis Cache',
        connections: 78,
        queries: 345678,
        avgResponseTime: 12,
        errorRate: 0.1,
        dataVolume: 12345678,
        usage: 12.3,
        optimization: 'TTL Management',
        status: 'EXCELLENT',
        lastUpdated: '2026-03-18 10:08'
      },
      {
        source: 'Elasticsearch',
        connections: 45,
        queries: 56789,
        avgResponseTime: 198,
        errorRate: 0.9,
        dataVolume: 45678901,
        usage: 8.5,
        optimization: 'Search Optimization',
        status: 'HEALTHY',
        lastUpdated: '2026-03-18 10:05'
      }
    ],
    visualizationAlerts: [
      {
        type: 'CRITICAL',
        category: 'Performance',
        message: 'Real-Time Monitoring dashboard experiencing severe performance degradation - 3.2s load time',
        dashboard: 'Real-Time Monitoring',
        dashboardId: 'DASH-RT-005',
        severity: 'HIGH',
        impact: 'User experience severely impacted, potential data loss',
        timestamp: '10:08',
        loadTime: '3.2s',
        baseline: '1.8s',
        affectedUsers: 123,
        detectedBy: 'Performance Monitor',
        recommendation: 'Implement data streaming optimization, reduce chart complexity',
        urgency: 'IMMEDIATE',
        escalation: 'VISUALIZATION_TEAM',
        rootCause: 'High-frequency updates causing memory leaks'
      },
      {
        type: 'HIGH',
        category: 'Data Quality',
        message: 'REST API connector showing elevated error rates - 1.2% failure rate detected',
        connector: 'REST APIs',
        severity: 'MEDIUM',
        impact: 'Incomplete data visualization, user confusion',
        timestamp: '10:07',
        errorRate: '1.2%',
        threshold: '0.5%',
        affectedQueries: 2876,
        detectedBy: 'Data Quality Monitor',
        recommendation: 'Investigate API reliability, implement retry logic',
        urgency: 'HIGH',
        escalation: 'DATA_TEAM',
        source: 'Third-party API instability'
      },
      {
        type: 'WARNING',
        category: 'Resource Usage',
        message: 'Memory consumption approaching 80% threshold across visualization engines',
        resource: 'Memory',
        severity: 'MEDIUM',
        impact: 'Potential performance slowdown, chart rendering delays',
        timestamp: '10:06',
        currentUsage: '78.4%',
        threshold: '80%',
        trendDirection: 'INCREASING',
        detectedBy: 'Resource Monitor',
        recommendation: 'Implement garbage collection optimization, chart virtualization',
        urgency: 'MEDIUM',
        escalation: 'INFRASTRUCTURE_TEAM',
        projectedLimit: 'Next 2 hours'
      },
      {
        type: 'INFO',
        category: 'Optimization',
        message: 'Financial Reporting dashboard achieving excellent performance - 97.8% cache hit rate',
        dashboard: 'Financial Reporting',
        dashboardId: 'DASH-FIN-004',
        severity: 'POSITIVE',
        impact: 'Optimal user experience, reduced server load',
        timestamp: '10:05',
        cacheHitRate: '97.8%',
        improvement: '+4.2%',
        loadTimeReduction: '23%',
        detectedBy: 'Performance Analytics',
        recommendation: 'Apply similar optimization patterns to other dashboards',
        priority: 'LOW',
        opportunity: 'BEST_PRACTICE_SHARING'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        dashboards: 2234,
        totalQueries: 89012,
        avgLoadTime: 1.8,
        avgRenderTime: 234,
        cacheHitRate: 92.7,
        errorRate: 0.3,
        userInteractions: 45678,
        dataVolume: 567890123,
        performance: 94.6,
        trends: {
          load_time: '-8.4%',
          cache_hits: '+3.2%',
          errors: '-12.7%'
        }
      },
      {
        period: 'Last 24 Hours',
        dashboards: 2189,
        totalQueries: 2034567,
        avgLoadTime: 2.1,
        avgRenderTime: 267,
        cacheHitRate: 89.4,
        errorRate: 0.5,
        userInteractions: 987654,
        dataVolume: 12345678901,
        performance: 91.2,
        trends: {
          load_time: '-15.6%',
          cache_hits: '+7.8%',
          errors: '-23.4%'
        }
      },
      {
        period: 'Last 7 Days',
        dashboards: 2067,
        totalQueries: 14567890,
        avgLoadTime: 2.4,
        avgRenderTime: 289,
        cacheHitRate: 86.7,
        errorRate: 0.8,
        userInteractions: 6789012,
        dataVolume: 89012345678,
        performance: 87.8,
        trends: {
          load_time: '-22.3%',
          cache_hits: '+12.9%',
          errors: '-34.7%'
        }
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVizData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        visualizationOverview: {
          ...prev.visualizationOverview,
          renderTime: Math.max(200, Math.min(300, prev.visualizationOverview.renderTime + (Math.random() - 0.5) * 30)),
          cacheHitRate: Math.max(89.0, Math.min(96.0, prev.visualizationOverview.cacheHitRate + (Math.random() - 0.5) * 2.0)),
          performance: Math.max(92.0, Math.min(97.0, prev.visualizationOverview.performance + (Math.random() - 0.5) * 1.0))
        }
      }));
    }, 75000);

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
      case 'EXCELLENT': return 'text-green-500 bg-green-500/20';
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'ERROR': return 'text-red-400 bg-red-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
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

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-violet-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-violet-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Data Visualization Intelligence Center</h1>
              <p className="text-violet-300">Dashboard & analytics visualization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-violet-400">{vizData.currentTime}</div>
            <div className="text-violet-300">Visualization Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Visualization Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-violet-400 mr-2" />
                Dashboards
              </h3>
            </div>
            <div className="text-3xl font-bold text-violet-400">{formatNumber(vizData.visualizationOverview.activeDashboards)}</div>
            <div className="text-violet-300 text-sm">{formatNumber(vizData.visualizationOverview.totalDashboards)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <PieChart className="w-5 h-5 text-cyan-400 mr-2" />
                Charts
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(vizData.visualizationOverview.activeCharts)}</div>
            <div className="text-cyan-300 text-sm">{formatNumber(vizData.visualizationOverview.totalCharts)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Performance
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(vizData.visualizationOverview.performance)}`}>
              {formatPercentage(vizData.visualizationOverview.performance)}
            </div>
            <div className="text-yellow-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Render Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{vizData.visualizationOverview.renderTime}ms</div>
            <div className="text-green-300 text-sm">Avg</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Cache Rate
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(vizData.visualizationOverview.cacheHitRate)}`}>
              {formatPercentage(vizData.visualizationOverview.cacheHitRate)}
            </div>
            <div className="text-blue-300 text-sm">Hit</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-orange-400 mr-2" />
                Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(vizData.visualizationOverview.userSessions)}</div>
            <div className="text-orange-300 text-sm">Active</div>
          </div>
        </div>

        {/* Chart Types Analysis */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart className="w-5 h-5 text-violet-400 mr-2" />
            Chart Type Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Chart Type</th>
                  <th className="text-center p-3 text-slate-300">Count</th>
                  <th className="text-center p-3 text-slate-300">Usage</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Render Time</th>
                  <th className="text-center p-3 text-slate-300">Features</th>
                </tr>
              </thead>
              <tbody>
                {vizData.chartTypes.map((chart, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{chart.type}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {chart.popularLibraries.slice(0, 2).join(', ')} • {chart.complexityScore}/10 complexity
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-violet-400 font-medium">{formatNumber(chart.count)}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(chart.dataPoints)} pts</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{formatPercentage(chart.usage)}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(chart.interactions)} int</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(chart.performance)}`}>
                      {formatPercentage(chart.performance)}
                    </td>
                    <td className="p-3 text-center">
                      <div className={`font-medium ${chart.renderTime < 200 ? 'text-green-400' : chart.renderTime < 300 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {chart.renderTime}ms
                      </div>
                      <div className="text-slate-400 text-xs">{chart.avgLoadTime}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <span className={`px-1 py-0.5 rounded ${chart.features.realTime > 80 ? 'text-green-400' : 'text-slate-400'}`}>
                          RT: {formatPercentage(chart.features.realTime)}
                        </span>
                        <span className={`px-1 py-0.5 rounded ${chart.features.interactive > 80 ? 'text-blue-400' : 'text-slate-400'}`}>
                          Int: {formatPercentage(chart.features.interactive)}
                        </span>
                        <span className={`px-1 py-0.5 rounded ${chart.features.responsive > 90 ? 'text-purple-400' : 'text-slate-400'}`}>
                          Resp: {formatPercentage(chart.features.responsive)}
                        </span>
                        <span className={`px-1 py-0.5 rounded ${chart.features.animated > 80 ? 'text-yellow-400' : 'text-slate-400'}`}>
                          Anim: {formatPercentage(chart.features.animated)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dashboard Performance & Data Connectors */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Top Dashboard Performance
            </h3>
            <div className="space-y-4">
              {vizData.dashboardPerformance.map((dashboard, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{dashboard.dashboard}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(dashboard.performance.lcp.replace('s', '') * 100 / 4)}`}>
                        {dashboard.performance.lcp} LCP
                      </span>
                      <span className="text-slate-400 text-xs">{dashboard.loadTime}s</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-violet-400">Charts: {dashboard.charts}</div>
                    <div className="text-cyan-400">Users: {dashboard.users}</div>
                    <div className="text-green-400">Cache: {formatPercentage(dashboard.cacheHit)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Render: {dashboard.renderTime}ms</div>
                    <div className="text-blue-400">Queries: {formatNumber(dashboard.dataQueries)}</div>
                    <div className="text-purple-400">Updates: {dashboard.updateFrequency}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Performance:</strong> LCP {dashboard.performance.lcp}, FID {dashboard.performance.fid}, TTI {dashboard.performance.tti}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Optimization:</strong> {Object.entries(dashboard.optimizations).filter(([_, enabled]) => enabled).map(([key, _]) => key.replace('_', ' ')).join(', ')}
                  </div>
                  {dashboard.issues.length > 0 && (
                    <div className="text-red-400 text-xs">
                      <strong>Issues:</strong> {dashboard.issues.slice(0, 1).join('; ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Layers className="w-5 h-5 text-blue-400 mr-2" />
              Data Connector Analytics
            </h3>
            <div className="space-y-4">
              {vizData.dataConnectors.map((connector, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{connector.source}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(connector.status)}`}>
                        {connector.status}
                      </span>
                      <span className="text-slate-400 text-xs">{connector.avgResponseTime}ms</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Conn: {connector.connections}</div>
                    <div className="text-green-400">Queries: {formatNumber(connector.queries)}</div>
                    <div className="text-purple-400">Usage: {formatPercentage(connector.usage)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Data: {formatNumber(connector.dataVolume)}</div>
                    <div className={`${connector.errorRate < 0.5 ? 'text-green-400' : connector.errorRate < 1.0 ? 'text-yellow-400' : 'text-red-400'}`}>
                      Errors: {formatPercentage(connector.errorRate)}
                    </div>
                    <div className="text-cyan-400">Opt: {connector.optimization}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Last Updated:</strong> {connector.lastUpdated}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics & Visualization Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Performance Metrics Timeline
            </h3>
            <div className="space-y-4">
              {vizData.performanceMetrics.map((metrics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metrics.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(metrics.performance)}`}>
                        {formatPercentage(metrics.performance)} Score
                      </span>
                      <span className="text-slate-400 text-xs">{formatNumber(metrics.dashboards)} dashboards</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-violet-400">Queries: {formatNumber(metrics.totalQueries)}</div>
                    <div className="text-green-400">Load: {metrics.avgLoadTime}s</div>
                    <div className="text-blue-400">Render: {metrics.avgRenderTime}ms</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Cache: {formatPercentage(metrics.cacheHitRate)}</div>
                    <div className={`${metrics.errorRate < 0.5 ? 'text-green-400' : 'text-red-400'}`}>
                      Errors: {formatPercentage(metrics.errorRate)}
                    </div>
                    <div className="text-purple-400">Data: {formatNumber(metrics.dataVolume)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-green-400">Load: {metrics.trends.load_time}</div>
                    <div className="text-blue-400">Cache: {metrics.trends.cache_hits}</div>
                    <div className="text-orange-400">Errors: {metrics.trends.errors}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Visualization System Alerts
            </h3>
            <div className="space-y-4">
              {vizData.visualizationAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                        {alert.urgency}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    {alert.dashboard && <div className="text-slate-300">Dashboard: {alert.dashboard}</div>}
                    {alert.connector && <div className="text-slate-300">Connector: {alert.connector}</div>}
                    {alert.loadTime && <div className="text-slate-300">Load Time: {alert.loadTime}</div>}
                    {alert.errorRate && <div className="text-slate-300">Error Rate: {alert.errorRate}</div>}
                    {alert.currentUsage && <div className="text-slate-300">Usage: {alert.currentUsage}</div>}
                    {alert.cacheHitRate && <div className="text-slate-300">Cache Hit: {alert.cacheHitRate}</div>}
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
    </div>
  );
}