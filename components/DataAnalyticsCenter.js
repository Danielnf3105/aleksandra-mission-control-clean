// Data Analytics Center - Advanced Analytics & Business Intelligence
import { useState, useEffect } from 'react';
import { BarChart3, PieChart, TrendingUp, Database, Brain, Target, Filter, Download, Share2, RefreshCw, Calendar, Users } from 'lucide-react';

export default function DataAnalyticsCenter() {
  const [analyticsData, setAnalyticsData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    overviewMetrics: {
      totalDataPoints: 2847569,
      realTimeStreams: 12,
      analyticsJobs: 8,
      insightsGenerated: 247,
      accuracyScore: 96.8,
      processingSpeed: '2.3TB/h',
      dataQuality: 94.7
    },
    revenueAnalytics: {
      currentMonth: 24680,
      previousMonth: 21340,
      growth: 15.7,
      forecast: 28450,
      topChannels: [
        { name: 'LinkedIn Outreach', revenue: 12400, growth: 23.4, conversion: 18.7 },
        { name: 'Instagram Content', revenue: 8900, growth: 15.2, conversion: 12.3 },
        { name: 'Spec Ad Campaigns', revenue: 6700, growth: 8.9, conversion: 24.1 },
        { name: 'Referrals', revenue: 4200, growth: 34.2, conversion: 31.8 }
      ]
    },
    contentAnalytics: {
      totalPosts: 1247,
      engagement: 94.7,
      reach: 89340,
      impressions: 234567,
      clickThroughRate: 8.9,
      conversionRate: 3.2,
      topPerformingContent: [
        { title: 'AI Marketing Revolution', engagement: 97.2, reach: 12400, conversions: 34 },
        { title: 'Personal Brand Strategy', engagement: 94.8, reach: 9800, conversions: 28 },
        { title: 'Content Creation Automation', engagement: 92.1, reach: 11200, conversions: 31 },
        { title: 'ROI Optimization Tips', engagement: 89.4, reach: 8900, conversions: 22 }
      ]
    },
    userBehavior: {
      sessionDuration: 287,
      bounceRate: 12.3,
      pageViews: 45678,
      uniqueVisitors: 8934,
      returningVisitors: 67.8,
      conversionFunnel: [
        { stage: 'Awareness', count: 10000, conversion: 100 },
        { stage: 'Interest', count: 6800, conversion: 68 },
        { stage: 'Consideration', count: 4200, conversion: 42 },
        { stage: 'Purchase Intent', count: 2100, conversion: 21 },
        { stage: 'Purchase', count: 890, conversion: 8.9 }
      ]
    },
    performanceMetrics: {
      systemUptime: 99.97,
      responseTime: 142,
      throughput: 4567,
      errorRate: 0.03,
      dataLatency: 23,
      cacheHitRatio: 94.7
    },
    predictiveInsights: [
      {
        category: 'Revenue',
        prediction: 'March revenue likely to exceed $28,500 based on current trends',
        confidence: 94.7,
        impact: 'HIGH',
        actionRequired: 'Scale successful campaigns'
      },
      {
        category: 'Content',
        prediction: 'AI-focused content showing 23% higher engagement',
        confidence: 89.2,
        impact: 'MEDIUM',
        actionRequired: 'Increase AI content production'
      },
      {
        category: 'User Behavior',
        prediction: 'Session duration expected to increase 15% with new UX',
        confidence: 87.4,
        impact: 'MEDIUM',
        actionRequired: 'Implement UX improvements'
      },
      {
        category: 'Conversion',
        prediction: 'LinkedIn outreach conversion rate trending up 18%',
        confidence: 92.1,
        impact: 'HIGH',
        actionRequired: 'Allocate more resources to LinkedIn'
      }
    ],
    dataStreams: [
      { name: 'Instagram API', status: 'active', volume: '2.3GB', latency: '45ms', quality: 98.2 },
      { name: 'LinkedIn Analytics', status: 'active', volume: '1.8GB', latency: '67ms', quality: 96.7 },
      { name: 'Website Analytics', status: 'active', volume: '4.1GB', latency: '23ms', quality: 97.4 },
      { name: 'Email Campaigns', status: 'active', volume: '890MB', latency: '12ms', quality: 99.1 },
      { name: 'CRM Data', status: 'active', volume: '1.2GB', latency: '34ms', quality: 95.8 },
      { name: 'Payment Processing', status: 'active', volume: '456MB', latency: '78ms', quality: 98.9 }
    ],
    realtimeEvents: [
      { time: '14:54', event: 'New conversion from LinkedIn campaign', value: '$1,230', type: 'revenue' },
      { time: '14:52', event: 'Instagram post reached 1K engagement', value: '1,047 likes', type: 'engagement' },
      { time: '14:50', event: 'Website traffic spike detected', value: '+34% increase', type: 'traffic' },
      { time: '14:48', event: 'Email campaign CTR above benchmark', value: '12.7% CTR', type: 'email' },
      { time: '14:45', event: 'LinkedIn profile view surge', value: '+67 views', type: 'social' }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyticsData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        overviewMetrics: {
          ...prev.overviewMetrics,
          totalDataPoints: prev.overviewMetrics.totalDataPoints + Math.floor(Math.random() * 1000),
          accuracyScore: Math.max(94, Math.min(99, prev.overviewMetrics.accuracyScore + (Math.random() - 0.5) * 1)),
          dataQuality: Math.max(90, Math.min(98, prev.overviewMetrics.dataQuality + (Math.random() - 0.5) * 2))
        },
        userBehavior: {
          ...prev.userBehavior,
          sessionDuration: Math.max(200, Math.min(400, prev.userBehavior.sessionDuration + (Math.random() - 0.5) * 20)),
          bounceRate: Math.max(8, Math.min(20, prev.userBehavior.bounceRate + (Math.random() - 0.5) * 2))
        }
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'warning': return 'text-yellow-400 bg-yellow-400/20';
      case 'error': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'revenue': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'engagement': return <Users className="w-4 h-4 text-purple-400" />;
      case 'traffic': return <BarChart3 className="w-4 h-4 text-blue-400" />;
      case 'email': return <Target className="w-4 h-4 text-orange-400" />;
      case 'social': return <Share2 className="w-4 h-4 text-cyan-400" />;
      default: return <Database className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  return (
    <div className="h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Data Analytics Center</h1>
              <p className="text-cyan-300">Advanced analytics, business intelligence & predictive insights</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{analyticsData.currentTime}</div>
            <div className="text-cyan-300">Analytics Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Analytics Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Database className="w-5 h-5 text-cyan-400 mr-2" />
                Data Points
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(analyticsData.overviewMetrics.totalDataPoints)}</div>
            <div className="text-cyan-300 text-sm">{analyticsData.overviewMetrics.realTimeStreams} real-time streams</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-green-400 mr-2" />
                Insights Generated
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{analyticsData.overviewMetrics.insightsGenerated}</div>
            <div className="text-green-300 text-sm">Accuracy: {analyticsData.overviewMetrics.accuracyScore}%</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <RefreshCw className="w-5 h-5 text-purple-400 mr-2" />
                Processing Speed
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{analyticsData.overviewMetrics.processingSpeed}</div>
            <div className="text-purple-300 text-sm">{analyticsData.overviewMetrics.analyticsJobs} active jobs</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Data Quality
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{analyticsData.overviewMetrics.dataQuality}%</div>
            <div className="text-orange-300 text-sm">Quality score</div>
          </div>
        </div>

        {/* Revenue Analytics & Content Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Revenue Analytics
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-green-400">{formatCurrency(analyticsData.revenueAnalytics.currentMonth)}</div>
                  <div className="text-green-300 text-sm">Current Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">+{analyticsData.revenueAnalytics.growth}%</div>
                  <div className="text-cyan-300 text-sm">Growth Rate</div>
                </div>
              </div>
              <div className="text-slate-400 text-sm mb-2">Forecast: {formatCurrency(analyticsData.revenueAnalytics.forecast)}</div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-white text-sm">Top Revenue Channels</h4>
              {analyticsData.revenueAnalytics.topChannels.map((channel, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium text-sm">{channel.name}</span>
                    <span className="text-green-400 font-bold text-sm">{formatCurrency(channel.revenue)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Growth: +{channel.growth}%</span>
                    <span>Conversion: {channel.conversion}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-purple-400 mr-2" />
              Content Performance
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-purple-400">{analyticsData.contentAnalytics.engagement}%</div>
                  <div className="text-purple-300 text-sm">Avg Engagement</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-400">{formatNumber(analyticsData.contentAnalytics.reach)}</div>
                  <div className="text-orange-300 text-sm">Total Reach</div>
                </div>
              </div>
              <div className="text-slate-400 text-sm mb-2">
                CTR: {analyticsData.contentAnalytics.clickThroughRate}% | Conversion: {analyticsData.contentAnalytics.conversionRate}%
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-white text-sm">Top Performing Content</h4>
              {analyticsData.contentAnalytics.topPerformingContent.map((content, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="text-white font-medium text-sm mb-1">{content.title}</div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Engagement: {content.engagement}%</span>
                    <span>Reach: {formatNumber(content.reach)}</span>
                    <span>Conversions: {content.conversions}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Behavior & Predictive Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              User Behavior Analytics
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-blue-400">{analyticsData.userBehavior.sessionDuration}s</div>
                  <div className="text-blue-300 text-sm">Avg Session Duration</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">{analyticsData.userBehavior.bounceRate}%</div>
                  <div className="text-green-300 text-sm">Bounce Rate</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white text-sm mb-3">Conversion Funnel</h4>
              <div className="space-y-2">
                {analyticsData.userBehavior.conversionFunnel.map((stage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-20 text-slate-400 text-sm">{stage.stage}</div>
                    <div className="flex-1 bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          index === 1 ? 'bg-gradient-to-r from-cyan-500 to-teal-500' :
                          index === 2 ? 'bg-gradient-to-r from-teal-500 to-green-500' :
                          index === 3 ? 'bg-gradient-to-r from-green-500 to-yellow-500' :
                          'bg-gradient-to-r from-yellow-500 to-orange-500'
                        }`}
                        style={{ width: `${stage.conversion}%` }}
                      ></div>
                    </div>
                    <div className="w-16 text-white font-medium text-sm text-right">{formatNumber(stage.count)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              Predictive Insights
            </h3>
            <div className="space-y-3">
              {analyticsData.predictiveInsights.map((insight, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{insight.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                        {insight.impact}
                      </span>
                      <span className="text-slate-400 text-xs">{insight.confidence}%</span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-1">{insight.prediction}</div>
                  <div className="text-cyan-400 text-xs">Action: {insight.actionRequired}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Streams & Real-time Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Database className="w-5 h-5 text-cyan-400 mr-2" />
              Data Streams
            </h3>
            <div className="space-y-3">
              {analyticsData.dataStreams.map((stream, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-white text-sm">{stream.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(stream.status)}`}>
                        {stream.status}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">Quality: {stream.quality}%</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Volume: {stream.volume}</span>
                    <span>Latency: {stream.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Calendar className="w-5 h-5 text-orange-400 mr-2" />
              Real-time Events
            </h3>
            <div className="space-y-3">
              {analyticsData.realtimeEvents.map((event, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 flex items-center space-x-3">
                  {getEventTypeIcon(event.type)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">{event.event}</span>
                      <span className="text-slate-400 text-xs">{event.time}</span>
                    </div>
                    <div className="text-cyan-400 text-sm">{event.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics Summary */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
            Analytics Performance Summary
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{analyticsData.performanceMetrics.systemUptime}%</div>
              <div className="text-slate-400 text-sm mb-3">System Uptime</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${analyticsData.performanceMetrics.systemUptime}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{analyticsData.performanceMetrics.responseTime}ms</div>
              <div className="text-slate-400 text-sm mb-3">Response Time</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(0, 100 - (analyticsData.performanceMetrics.responseTime / 5))}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{analyticsData.performanceMetrics.throughput}</div>
              <div className="text-slate-400 text-sm mb-3">Requests/sec</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min(100, (analyticsData.performanceMetrics.throughput / 5000) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}