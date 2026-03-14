// 🎯 Outreach Performance Analytics Dashboard v1.0
// LinkedIn outreach tracking with revenue attribution & conversion optimization
import { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Target, MessageSquare, Calendar, BarChart3, Zap, Clock, CheckCircle, AlertCircle, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function OutreachPerformanceAnalytics() {
  const [outreachMetrics, setOutreachMetrics] = useState({
    campaignPerformance: {
      activeCampaigns: 8,
      totalOutreachToday: 47,
      responseRate: 18.3,
      connectionAcceptanceRate: 24.7,
      meetingBookedRate: 8.5,
      avgResponseTime: 14.6, // hours
      conversionVelocity: 5.2 // days from first contact to meeting
    },
    revenueAttribution: {
      pipelineValue: 127500,
      monthlyPipeline: 89300,
      closedDealsThisMonth: 3,
      totalRevenue: 45000,
      roi: 1847,
      costPerAcquisition: 127,
      avgDealSize: 15000,
      conversionToRevenue: 6.4
    },
    performanceInsights: {
      bestOutreachHour: '10:00 AM',
      bestOutreachDay: 'Tuesday',
      topPerformingIndustry: 'SaaS',
      optimalSequenceLength: 4,
      highestConverting: 'Personal + Case Study',
      improvementOpportunity: 'Follow-up timing',
      trendDirection: 'up',
      weekOverWeekGrowth: 12.4
    },
    currentActivity: {
      messagesInQueue: 23,
      scheduledFollowUps: 41,
      pendingResponses: 15,
      meetingsThisWeek: 6,
      proposalsOut: 4,
      negotiationStage: 2
    }
  });

  const [campaignData, setCampaignData] = useState([
    {
      id: 'camp_001',
      name: 'SaaS Founders - March',
      status: 'active',
      progress: 67,
      totalOutreach: 234,
      responses: 43,
      meetings: 12,
      deals: 2,
      revenue: 30000,
      responseRate: 18.4,
      conversionRate: 27.9,
      priority: 'high'
    },
    {
      id: 'camp_002', 
      name: 'Marketing Directors - Q1',
      status: 'active',
      progress: 89,
      totalOutreach: 156,
      responses: 31,
      meetings: 8,
      deals: 1,
      revenue: 15000,
      responseRate: 19.9,
      conversionRate: 25.8,
      priority: 'medium'
    },
    {
      id: 'camp_003',
      name: 'E-commerce CEOs',
      status: 'completed',
      progress: 100,
      totalOutreach: 89,
      responses: 22,
      meetings: 7,
      deals: 3,
      revenue: 45000,
      responseRate: 24.7,
      conversionRate: 31.8,
      priority: 'high'
    }
  ]);

  const [outreachHeatmapData, setOutreachHeatmapData] = useState([
    { day: 'Mon', '9AM': 12, '10AM': 18, '11AM': 22, '2PM': 15, '3PM': 19, '4PM': 16 },
    { day: 'Tue', '9AM': 16, '10AM': 25, '11AM': 28, '2PM': 20, '3PM': 23, '4PM': 18 },
    { day: 'Wed', '9AM': 14, '10AM': 21, '11AM': 24, '2PM': 17, '3PM': 20, '4PM': 15 },
    { day: 'Thu', '9AM': 18, '10AM': 23, '11AM': 26, '2PM': 19, '3PM': 22, '4PM': 17 },
    { day: 'Fri', '9AM': 11, '10AM': 16, '11AM': 19, '2PM': 13, '3PM': 15, '4PM': 12 }
  ]);

  const [leadProgressionData, setLeadProgressionData] = useState([
    { stage: 'Outreach', count: 234, rate: 100 },
    { stage: 'Response', count: 43, rate: 18.4 },
    { stage: 'Qualified', count: 31, rate: 13.2 },
    { stage: 'Meeting', count: 12, rate: 5.1 },
    { stage: 'Proposal', count: 6, rate: 2.6 },
    { stage: 'Closed', count: 2, rate: 0.85 }
  ]);

  const [recentInsights, setRecentInsights] = useState([
    {
      type: 'performance',
      message: 'Tuesday 10 AM outreach shows 34% higher response rates',
      time: '18:05',
      impact: 'positive',
      actionable: 'Schedule more outreach for Tuesday mornings'
    },
    {
      type: 'revenue',
      message: 'E-commerce campaign generated $45K in March',
      time: '17:58',
      impact: 'positive',
      actionable: 'Replicate messaging for similar verticals'
    },
    {
      type: 'optimization',
      message: 'Follow-up message #3 has 2x higher response rate',
      time: '17:45',
      impact: 'insight',
      actionable: 'A/B test follow-up timing and content'
    },
    {
      type: 'alert',
      message: '23 scheduled follow-ups pending for this afternoon',
      time: '17:30',
      impact: 'warning',
      actionable: 'Review and prioritize high-value prospects'
    },
    {
      type: 'prediction',
      message: 'Current pipeline suggests $67K potential revenue',
      time: '17:15',
      impact: 'positive',
      actionable: 'Focus on closing 4 active opportunities'
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics with realistic fluctuations
      setOutreachMetrics(prev => ({
        ...prev,
        campaignPerformance: {
          ...prev.campaignPerformance,
          responseRate: Math.max(12, Math.min(25, prev.campaignPerformance.responseRate + (Math.random() - 0.5) * 1)),
          totalOutreachToday: prev.campaignPerformance.totalOutreachToday + Math.floor(Math.random() * 3)
        },
        revenueAttribution: {
          ...prev.revenueAttribution,
          pipelineValue: Math.max(100000, prev.revenueAttribution.pipelineValue + (Math.random() - 0.5) * 5000)
        }
      }));

      // Occasionally add new insights
      if (Math.random() < 0.3) {
        const insights = [
          'New high-value prospect responded to outreach',
          'Meeting scheduled with Fortune 500 contact',
          'Proposal sent to qualified lead in SaaS vertical',
          'Follow-up sequence optimization opportunity detected',
          'Revenue attribution updated with new closed deal'
        ];
        
        setRecentInsights(prev => [
          {
            type: ['performance', 'revenue', 'optimization', 'alert', 'prediction'][Math.floor(Math.random() * 5)],
            message: insights[Math.floor(Math.random() * insights.length)],
            time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
            impact: Math.random() > 0.7 ? 'warning' : 'positive',
            actionable: 'Review details and optimize accordingly'
          },
          ...prev.slice(0, 4)
        ]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getHeatmapColor = (value) => {
    if (value >= 25) return 'bg-green-500';
    if (value >= 20) return 'bg-yellow-500';
    if (value >= 15) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getHeatmapIntensity = (value) => {
    const intensity = Math.min(100, (value / 30) * 100);
    return `${intensity}%`;
  };

  const getCampaignStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-500/20';
      case 'completed': return 'text-blue-400 bg-blue-500/20';
      case 'paused': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Outreach Performance Analytics
              </h1>
              <p className="text-gray-400">LinkedIn campaigns with revenue attribution & conversion optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Pipeline Value</div>
            <div className="text-2xl font-bold text-green-400">${(outreachMetrics.revenueAttribution.pipelineValue / 1000).toFixed(0)}K</div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Campaign Performance */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Outreach</span>
            </div>
            <div className="text-blue-400 text-sm">{outreachMetrics.campaignPerformance.responseRate.toFixed(1)}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Today</span>
              <span>{outreachMetrics.campaignPerformance.totalOutreachToday}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Acceptance</span>
              <span>{outreachMetrics.campaignPerformance.connectionAcceptanceRate}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Avg Response</span>
              <span>{outreachMetrics.campaignPerformance.avgResponseTime}h</span>
            </div>
          </div>
        </div>

        {/* Revenue Attribution */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-green-400" />
              <span className="font-medium">Revenue</span>
            </div>
            <div className="text-green-400 text-sm">{outreachMetrics.revenueAttribution.roi}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Monthly</span>
              <span>${(outreachMetrics.revenueAttribution.monthlyPipeline / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Closed</span>
              <span>{outreachMetrics.revenueAttribution.closedDealsThisMonth} deals</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Avg Deal</span>
              <span>${(outreachMetrics.revenueAttribution.avgDealSize / 1000).toFixed(0)}K</span>
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Insights</span>
            </div>
            <div className="text-purple-400 text-sm">+{outreachMetrics.performanceInsights.weekOverWeekGrowth}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Best Time</span>
              <span className="text-xs">{outreachMetrics.performanceInsights.bestOutreachHour}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Best Day</span>
              <span className="text-xs">{outreachMetrics.performanceInsights.bestOutreachDay}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Top Industry</span>
              <span className="text-xs">{outreachMetrics.performanceInsights.topPerformingIndustry}</span>
            </div>
          </div>
        </div>

        {/* Current Activity */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-orange-400" />
              <span className="font-medium">Activity</span>
            </div>
            <div className="text-orange-400 text-sm">{outreachMetrics.currentActivity.meetingsThisWeek}</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Queue</span>
              <span>{outreachMetrics.currentActivity.messagesInQueue}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Follow-ups</span>
              <span>{outreachMetrics.currentActivity.scheduledFollowUps}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Proposals</span>
              <span>{outreachMetrics.currentActivity.proposalsOut}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Response Rate Heatmap */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-yellow-400" />
            <span>Response Rate Heatmap</span>
          </h3>
          <div className="space-y-3">
            <div className="grid grid-cols-7 gap-2 text-xs text-gray-400 mb-2">
              <div></div>
              <div className="text-center">9AM</div>
              <div className="text-center">10AM</div>
              <div className="text-center">11AM</div>
              <div className="text-center">2PM</div>
              <div className="text-center">3PM</div>
              <div className="text-center">4PM</div>
            </div>
            {outreachHeatmapData.map((day, index) => (
              <div key={index} className="grid grid-cols-7 gap-2 items-center">
                <div className="text-sm text-gray-400 w-12">{day.day}</div>
                <div className={`h-8 rounded ${getHeatmapColor(day['9AM'])} flex items-center justify-center text-xs text-white font-medium`} style={{opacity: getHeatmapIntensity(day['9AM'])}}>
                  {day['9AM']}%
                </div>
                <div className={`h-8 rounded ${getHeatmapColor(day['10AM'])} flex items-center justify-center text-xs text-white font-medium`} style={{opacity: getHeatmapIntensity(day['10AM'])}}>
                  {day['10AM']}%
                </div>
                <div className={`h-8 rounded ${getHeatmapColor(day['11AM'])} flex items-center justify-center text-xs text-white font-medium`} style={{opacity: getHeatmapIntensity(day['11AM'])}}>
                  {day['11AM']}%
                </div>
                <div className={`h-8 rounded ${getHeatmapColor(day['2PM'])} flex items-center justify-center text-xs text-white font-medium`} style={{opacity: getHeatmapIntensity(day['2PM'])}}>
                  {day['2PM']}%
                </div>
                <div className={`h-8 rounded ${getHeatmapColor(day['3PM'])} flex items-center justify-center text-xs text-white font-medium`} style={{opacity: getHeatmapIntensity(day['3PM'])}}>
                  {day['3PM']}%
                </div>
                <div className={`h-8 rounded ${getHeatmapColor(day['4PM'])} flex items-center justify-center text-xs text-white font-medium`} style={{opacity: getHeatmapIntensity(day['4PM'])}}>
                  {day['4PM']}%
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
            <span>Lower Response</span>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded"></div>
              <div className="w-3 h-3 bg-orange-500 rounded"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded"></div>
              <div className="w-3 h-3 bg-green-500 rounded"></div>
            </div>
            <span>Higher Response</span>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Target className="w-5 h-5 text-green-400" />
            <span>Active Campaigns</span>
          </h3>
          <div className="space-y-4">
            {campaignData.map((campaign, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{campaign.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${getCampaignStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      campaign.priority === 'high' ? 'bg-red-900/50 text-red-300' :
                      campaign.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                      'bg-gray-900/50 text-gray-300'
                    }`}>
                      {campaign.priority}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-gray-400">Outreach</div>
                    <div>{campaign.totalOutreach}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Response Rate</div>
                    <div className="text-blue-400">{campaign.responseRate}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Meetings</div>
                    <div>{campaign.meetings}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Revenue</div>
                    <div className="text-green-400">${(campaign.revenue / 1000).toFixed(0)}K</div>
                  </div>
                </div>

                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{campaign.progress}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Progression Funnel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Users className="w-5 h-5 text-indigo-400" />
            <span>Lead Progression Funnel</span>
          </h3>
          <div className="space-y-4">
            {leadProgressionData.map((stage, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-20 text-sm text-gray-400">{stage.stage}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{stage.count}</span>
                    <span className="text-sm text-gray-400">{stage.rate}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        index === 0 ? 'bg-blue-500' :
                        index === 1 ? 'bg-cyan-500' :
                        index === 2 ? 'bg-yellow-500' :
                        index === 3 ? 'bg-orange-500' :
                        index === 4 ? 'bg-red-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${Math.min(100, (stage.rate / leadProgressionData[0].rate) * 100)}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-xs text-gray-500">
                  {index < leadProgressionData.length - 1 && (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Insights */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span>Performance Insights</span>
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {recentInsights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                insight.impact === 'positive' ? 'bg-green-900/20 border-green-400' :
                insight.impact === 'warning' ? 'bg-yellow-900/20 border-yellow-400' :
                insight.impact === 'insight' ? 'bg-blue-900/20 border-blue-400' :
                'bg-gray-900/20 border-gray-400'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded ${
                    insight.type === 'performance' ? 'bg-indigo-900/50 text-indigo-300' :
                    insight.type === 'revenue' ? 'bg-green-900/50 text-green-300' :
                    insight.type === 'optimization' ? 'bg-purple-900/50 text-purple-300' :
                    insight.type === 'alert' ? 'bg-red-900/50 text-red-300' :
                    'bg-blue-900/50 text-blue-300'
                  }`}>
                    {insight.type}
                  </span>
                  <span className="text-xs text-gray-400">{insight.time}</span>
                </div>
                <p className="text-sm mb-2">{insight.message}</p>
                <p className="text-xs text-gray-400 italic">{insight.actionable}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}