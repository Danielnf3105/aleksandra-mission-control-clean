// Customer Support Intelligence Center - Support Operations & Customer Experience Analytics
import { useState, useEffect } from 'react';
import { Headphones, Users, Clock, TrendingUp, TrendingDown, MessageCircle, Star, AlertCircle, CheckCircle, Phone, Mail, BarChart3 } from 'lucide-react';

export default function CustomerSupportIntelligenceCenter() {
  const [supportData, setSupportData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    supportOverview: {
      activeTickets: 1247,
      newTickets: 189,
      closedTickets: 234,
      escalatedTickets: 67,
      overdueTickets: 89,
      avgResponseTime: 18.4, // minutes
      avgResolutionTime: 4.7, // hours
      firstContactResolution: 78.4,
      customerSatisfaction: 94.2,
      supportAgents: 23,
      activeAgents: 19,
      avgHandleTime: 12.3, // minutes
      ticketBacklog: 456,
      slaCompliance: 92.8
    },
    ticketPriorities: [
      {
        priority: 'Critical',
        tickets: 34,
        percentage: 2.7,
        avgResponseTime: 3.2,
        slaTarget: 15,
        slaCompliance: 98.5,
        color: 'text-red-400'
      },
      {
        priority: 'High',
        tickets: 167,
        percentage: 13.4,
        avgResponseTime: 8.7,
        slaTarget: 30,
        slaCompliance: 94.8,
        color: 'text-orange-400'
      },
      {
        priority: 'Medium',
        tickets: 589,
        percentage: 47.2,
        avgResponseTime: 24.5,
        slaTarget: 120,
        slaCompliance: 91.2,
        color: 'text-yellow-400'
      },
      {
        priority: 'Low',
        tickets: 457,
        percentage: 36.7,
        avgResponseTime: 67.8,
        slaTarget: 480,
        slaCompliance: 89.7,
        color: 'text-green-400'
      }
    ],
    ticketCategories: [
      {
        category: 'Technical Issues',
        tickets: 456,
        percentage: 36.6,
        avgResolutionTime: 6.2,
        satisfaction: 89.4,
        escalationRate: 12.3,
        trend: 'up'
      },
      {
        category: 'Billing & Accounts',
        tickets: 298,
        percentage: 23.9,
        avgResolutionTime: 2.8,
        satisfaction: 96.7,
        escalationRate: 3.4,
        trend: 'down'
      },
      {
        category: 'Product Questions',
        tickets: 234,
        percentage: 18.8,
        avgResolutionTime: 3.4,
        satisfaction: 92.1,
        escalationRate: 8.9,
        trend: 'stable'
      },
      {
        category: 'Feature Requests',
        tickets: 145,
        percentage: 11.6,
        avgResolutionTime: 1.2,
        satisfaction: 87.6,
        escalationRate: 2.1,
        trend: 'up'
      },
      {
        category: 'Bug Reports',
        tickets: 89,
        percentage: 7.1,
        avgResolutionTime: 8.7,
        satisfaction: 84.3,
        escalationRate: 23.6,
        trend: 'down'
      },
      {
        category: 'Other',
        tickets: 25,
        percentage: 2.0,
        avgResolutionTime: 4.1,
        satisfaction: 91.2,
        escalationRate: 8.0,
        trend: 'stable'
      }
    ],
    supportChannels: [
      {
        channel: 'Live Chat',
        tickets: 456,
        percentage: 36.6,
        avgResponseTime: 1.2,
        satisfaction: 96.4,
        firstContactResolution: 84.7,
        agentsOnline: 8
      },
      {
        channel: 'Email',
        tickets: 389,
        percentage: 31.2,
        avgResponseTime: 34.7,
        satisfaction: 92.8,
        firstContactResolution: 76.3,
        agentsOnline: 12
      },
      {
        channel: 'Phone',
        tickets: 234,
        percentage: 18.8,
        avgResponseTime: 0.8,
        satisfaction: 94.9,
        firstContactResolution: 78.9,
        agentsOnline: 6
      },
      {
        channel: 'Self-Service',
        tickets: 123,
        percentage: 9.9,
        avgResponseTime: 0,
        satisfaction: 89.3,
        firstContactResolution: 95.2,
        agentsOnline: 0
      },
      {
        channel: 'Social Media',
        tickets: 45,
        percentage: 3.6,
        avgResponseTime: 15.6,
        satisfaction: 91.7,
        firstContactResolution: 67.8,
        agentsOnline: 3
      }
    ],
    agentPerformance: [
      {
        agent: 'Sarah Martinez',
        ticketsHandled: 89,
        avgResponseTime: 12.4,
        avgResolutionTime: 3.8,
        satisfaction: 97.2,
        firstContactResolution: 84.3,
        escalationRate: 4.5,
        availabilityRate: 94.7
      },
      {
        agent: 'Mike Johnson',
        ticketsHandled: 76,
        avgResponseTime: 15.7,
        avgResolutionTime: 4.2,
        satisfaction: 95.8,
        firstContactResolution: 81.6,
        escalationRate: 6.8,
        availabilityRate: 92.3
      },
      {
        agent: 'Emma Chen',
        ticketsHandled: 82,
        avgResponseTime: 11.2,
        avgResolutionTime: 3.5,
        satisfaction: 96.4,
        firstContactResolution: 86.2,
        escalationRate: 3.7,
        availabilityRate: 96.8
      },
      {
        agent: 'David Rodriguez',
        ticketsHandled: 71,
        avgResponseTime: 18.9,
        avgResolutionTime: 5.1,
        satisfaction: 93.7,
        firstContactResolution: 75.4,
        escalationRate: 9.2,
        availabilityRate: 88.9
      },
      {
        agent: 'Lisa Kim',
        ticketsHandled: 94,
        avgResponseTime: 14.3,
        avgResolutionTime: 4.0,
        satisfaction: 96.9,
        firstContactResolution: 82.1,
        escalationRate: 5.3,
        availabilityRate: 95.2
      }
    ],
    customerFeedback: {
      totalResponses: 2847,
      overallSatisfaction: 94.2,
      nps: 67.8,
      detractors: 8.4,
      passives: 23.8,
      promoters: 67.8,
      feedbackByCategory: [
        { category: 'Agent Helpfulness', score: 96.7, responses: 2745 },
        { category: 'Response Time', score: 89.4, responses: 2698 },
        { category: 'Problem Resolution', score: 92.1, responses: 2623 },
        { category: 'Knowledge Base', score: 87.6, responses: 1834 },
        { category: 'Overall Experience', score: 94.2, responses: 2847 }
      ],
      sentimentAnalysis: {
        positive: 72.4,
        neutral: 19.8,
        negative: 7.8
      },
      topComplaints: [
        { issue: 'Long wait times', percentage: 23.7, trend: 'down' },
        { issue: 'Complex processes', percentage: 18.9, trend: 'stable' },
        { issue: 'Lack of follow-up', percentage: 12.4, trend: 'up' },
        { issue: 'Unclear communication', percentage: 9.6, trend: 'down' },
        { issue: 'Multiple transfers', percentage: 7.8, trend: 'stable' }
      ]
    },
    knowledgeBase: {
      totalArticles: 1847,
      activeArticles: 1623,
      views: 234567,
      searchQueries: 45678,
      selfServiceResolutions: 12847,
      avgRating: 4.6,
      topArticles: [
        { title: 'Password Reset Guide', views: 15678, rating: 4.8, helpfulness: 94.7 },
        { title: 'Billing FAQ', views: 12345, rating: 4.7, helpfulness: 92.3 },
        { title: 'Account Setup Tutorial', views: 9876, rating: 4.6, helpfulness: 89.4 },
        { title: 'Feature Overview', views: 8765, rating: 4.5, helpfulness: 87.9 },
        { title: 'Troubleshooting Guide', views: 7654, rating: 4.4, helpfulness: 86.2 }
      ],
      searchMisses: 1234,
      contentGaps: [
        'Advanced API integration',
        'Mobile app troubleshooting',
        'Enterprise SSO setup',
        'Data export procedures',
        'Custom reporting guides'
      ]
    },
    supportAlerts: [
      {
        type: 'CRITICAL',
        category: 'SLA Breach',
        message: '12 critical tickets approaching SLA deadline in next 30 minutes',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Support Manager',
        timestamp: '01:10',
        recommendations: ['Escalate to senior agents', 'Activate overflow support', 'Notify customers']
      },
      {
        type: 'WARNING',
        category: 'Queue Backlog',
        message: 'Live chat queue has 45+ customers waiting (target: <20)',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Chat Team Lead',
        timestamp: '01:05',
        recommendations: ['Add chat agents', 'Enable chat bots', 'Update wait time messages']
      },
      {
        type: 'SUCCESS',
        category: 'CSAT Achievement',
        message: 'Customer satisfaction reached 94.2% (+2.1% vs target)',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Support Team',
        timestamp: '00:45',
        recommendations: ['Document success factors', 'Share best practices', 'Recognize team performance']
      },
      {
        type: 'INFO',
        category: 'Knowledge Base',
        message: 'New article "API Integration Guide" published with 89% helpfulness',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Content Team',
        timestamp: '00:30',
        recommendations: ['Promote via chat', 'Add to FAQ section', 'Monitor usage metrics']
      }
    ],
    qualityMetrics: {
      callMonitoring: {
        callsReviewed: 234,
        avgQualityScore: 89.4,
        coachingSessionsNeeded: 23,
        topPerformers: 8,
        improvementAreas: [
          'Active listening',
          'Product knowledge',
          'Empathy demonstration',
          'Call wrap-up efficiency'
        ]
      },
      chatQuality: {
        chatsReviewed: 567,
        avgQualityScore: 92.1,
        responseAccuracy: 94.7,
        grammarScore: 96.2,
        etiquetteScore: 91.8
      },
      emailQuality: {
        emailsReviewed: 345,
        avgQualityScore: 90.7,
        responseRelevance: 93.4,
        professionalismScore: 95.8,
        resolutionClarity: 87.9
      }
    },
    workforceManagement: {
      totalAgents: 23,
      activeAgents: 19,
      avgUtilization: 78.9,
      adherenceToSchedule: 92.4,
      breakCompliance: 96.7,
      overtimeHours: 23.4,
      trainingHours: 156.7,
      staffingForecast: [
        { hour: '09:00', required: 15, scheduled: 16, variance: '+1' },
        { hour: '12:00', required: 18, scheduled: 17, variance: '-1' },
        { hour: '15:00', required: 20, scheduled: 19, variance: '-1' },
        { hour: '18:00', required: 12, scheduled: 14, variance: '+2' }
      ]
    },
    automationMetrics: {
      chatbotInteractions: 1847,
      chatbotResolutionRate: 67.8,
      automatedTicketRouting: 89.4,
      selfServiceDeflection: 23.7,
      macroUsage: 78.9,
      workflowAutomation: 45.6,
      automationSavings: 234.7, // hours saved
      customerEffortScore: 2.3 // lower is better
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSupportData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        supportOverview: {
          ...prev.supportOverview,
          activeTickets: prev.supportOverview.activeTickets + Math.floor(Math.random() * 10) - 5,
          newTickets: prev.supportOverview.newTickets + Math.floor(Math.random() * 5),
          avgResponseTime: Math.max(10, Math.min(30, prev.supportOverview.avgResponseTime + (Math.random() - 0.5) * 2)),
          customerSatisfaction: Math.max(85, Math.min(98, prev.supportOverview.customerSatisfaction + (Math.random() - 0.5) * 1)),
          slaCompliance: Math.max(85, Math.min(98, prev.supportOverview.slaCompliance + (Math.random() - 0.5) * 1))
        }
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getPerformanceColor = (value, good = 85, excellent = 95) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-3 h-3 text-green-400" />;
      case 'down': return <TrendingDown className="w-3 h-3 text-red-400" />;
      default: return <span className="w-3 h-3 text-gray-400">→</span>;
    }
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toLocaleString();
  };

  const formatTime = (minutes) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins.toFixed(0)}m`;
    }
    return `${minutes.toFixed(1)}m`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
              <Headphones className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Customer Support Intelligence Center</h1>
              <p className="text-indigo-300">Support operations, customer experience analytics, agent performance & satisfaction tracking</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{supportData.currentTime}</div>
            <div className="text-indigo-300">Support Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Support Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MessageCircle className="w-5 h-5 text-indigo-400 mr-2" />
                Active Tickets
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{supportData.supportOverview.activeTickets}</div>
            <div className="text-indigo-300 text-sm">New: {supportData.supportOverview.newTickets}</div>
            <div className="text-gray-400 text-xs mt-1">Backlog: {supportData.supportOverview.ticketBacklog}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                Response Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatTime(supportData.supportOverview.avgResponseTime)}</div>
            <div className="text-blue-300 text-sm">Resolution: {supportData.supportOverview.avgResolutionTime.toFixed(1)}h</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                First Contact Resolution
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(supportData.supportOverview.firstContactResolution)}</div>
            <div className="text-green-300 text-sm">Handle time: {formatTime(supportData.supportOverview.avgHandleTime)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Customer Satisfaction
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(supportData.supportOverview.customerSatisfaction)}</div>
            <div className="text-yellow-300 text-sm">NPS: {supportData.customerFeedback.nps.toFixed(1)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Active Agents
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{supportData.supportOverview.activeAgents}</div>
            <div className="text-purple-300 text-sm">Total: {supportData.supportOverview.supportAgents}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertCircle className="w-5 h-5 text-orange-400 mr-2" />
                SLA Compliance
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(supportData.supportOverview.slaCompliance)}</div>
            <div className="text-orange-300 text-sm">Overdue: {supportData.supportOverview.overdueTickets}</div>
          </div>
        </div>

        {/* Ticket Priorities & Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-400 mr-2" />
              Ticket Priorities
            </h3>
            <div className="space-y-3">
              {supportData.ticketPriorities.map((priority, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{priority.priority}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`text-lg font-bold ${priority.color}`}>{priority.tickets}</span>
                      <span className="text-slate-400 text-sm">({formatPercentage(priority.percentage)})</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-blue-400 font-medium">{formatTime(priority.avgResponseTime)}</div>
                      <div className="text-slate-400">Avg Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium">{priority.slaTarget}m</div>
                      <div className="text-slate-400">SLA Target</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(priority.slaCompliance, 90, 95)}`}>
                        {formatPercentage(priority.slaCompliance)}
                      </div>
                      <div className="text-slate-400">Compliance</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Ticket Categories
            </h3>
            <div className="space-y-3">
              {supportData.ticketCategories.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 text-sm">{category.tickets}</span>
                      {getTrendIcon(category.trend)}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-orange-400 font-medium">{category.avgResolutionTime.toFixed(1)}h</div>
                      <div className="text-slate-400">Resolution</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(category.satisfaction, 85, 92)}`}>
                        {formatPercentage(category.satisfaction)}
                      </div>
                      <div className="text-slate-400">CSAT</div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-400 font-medium">{formatPercentage(category.escalationRate)}</div>
                      <div className="text-slate-400">Escalation</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium">{formatPercentage(category.percentage)}</div>
                      <div className="text-slate-400">Volume</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Channels */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <MessageCircle className="w-5 h-5 text-green-400 mr-2" />
            Support Channel Performance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Channel</th>
                  <th className="text-center p-3 text-slate-300">Tickets</th>
                  <th className="text-center p-3 text-slate-300">Volume %</th>
                  <th className="text-center p-3 text-slate-300">Response Time</th>
                  <th className="text-center p-3 text-slate-300">CSAT</th>
                  <th className="text-center p-3 text-slate-300">FCR</th>
                  <th className="text-center p-3 text-slate-300">Agents Online</th>
                </tr>
              </thead>
              <tbody>
                {supportData.supportChannels.map((channel, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{channel.channel}</td>
                    <td className="p-3 text-center text-cyan-400">{channel.tickets}</td>
                    <td className="p-3 text-center text-purple-400">{formatPercentage(channel.percentage)}</td>
                    <td className="p-3 text-center text-blue-400">
                      {channel.avgResponseTime === 0 ? 'Instant' : formatTime(channel.avgResponseTime)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(channel.satisfaction, 90, 95)}`}>
                      {formatPercentage(channel.satisfaction)}
                    </td>
                    <td className={`p-3 text-center ${getPerformanceColor(channel.firstContactResolution, 75, 85)}`}>
                      {formatPercentage(channel.firstContactResolution)}
                    </td>
                    <td className="p-3 text-center text-green-400">{channel.agentsOnline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Agent Performance & Customer Feedback */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              Top Agent Performance
            </h3>
            <div className="space-y-3">
              {supportData.agentPerformance.slice(0, 5).map((agent, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{agent.agent}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{agent.ticketsHandled} tickets</span>
                      <span className={`text-sm ${getPerformanceColor(agent.satisfaction, 90, 95)}`}>
                        {formatPercentage(agent.satisfaction)} CSAT
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-blue-400 font-medium">{formatTime(agent.avgResponseTime)}</div>
                      <div className="text-slate-400">Response</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium">{agent.avgResolutionTime.toFixed(1)}h</div>
                      <div className="text-slate-400">Resolution</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-medium">{formatPercentage(agent.firstContactResolution)}</div>
                      <div className="text-slate-400">FCR</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-medium">{formatPercentage(agent.escalationRate)}</div>
                      <div className="text-slate-400">Escalation</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Customer Feedback Analytics
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(supportData.customerFeedback.promoters)}</div>
                <div className="text-green-300 text-sm">Promoters</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{formatPercentage(supportData.customerFeedback.passives)}</div>
                <div className="text-yellow-300 text-sm">Passives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatPercentage(supportData.customerFeedback.detractors)}</div>
                <div className="text-red-300 text-sm">Detractors</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Feedback Categories</h4>
              {supportData.customerFeedback.feedbackByCategory.slice(0, 4).map((feedback, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{feedback.category}</span>
                  <div className="text-xs space-x-2">
                    <span className={`font-medium ${getPerformanceColor(feedback.score, 85, 92)}`}>
                      {feedback.score.toFixed(1)}
                    </span>
                    <span className="text-slate-400">({feedback.responses})</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(supportData.customerFeedback.sentimentAnalysis.positive)}</div>
                <div className="text-slate-400">Positive</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-yellow-400 font-medium">{formatPercentage(supportData.customerFeedback.sentimentAnalysis.neutral)}</div>
                <div className="text-slate-400">Neutral</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-red-400 font-medium">{formatPercentage(supportData.customerFeedback.sentimentAnalysis.negative)}</div>
                <div className="text-slate-400">Negative</div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
            Support Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {supportData.supportAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Knowledge Base & Automation Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Knowledge Base Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{supportData.knowledgeBase.totalArticles}</div>
                <div className="text-purple-300 text-sm">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{formatNumber(supportData.knowledgeBase.views)}</div>
                <div className="text-blue-300 text-sm">Views</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatNumber(supportData.knowledgeBase.selfServiceResolutions)}</div>
                <div className="text-green-300 text-sm">Self-Service</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Top Articles</h4>
              {supportData.knowledgeBase.topArticles.slice(0, 3).map((article, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="text-white font-medium text-sm mb-1">{article.title}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">{formatNumber(article.views)} views</span>
                    <span className="text-yellow-400">{article.rating.toFixed(1)} ⭐</span>
                    <span className="text-green-400">{formatPercentage(article.helpfulness)} helpful</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs">
              <h4 className="text-white font-medium mb-2">Content Gaps Identified</h4>
              <div className="flex flex-wrap gap-1">
                {supportData.knowledgeBase.contentGaps.slice(0, 3).map((gap, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded">
                    {gap}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Phone className="w-5 h-5 text-cyan-400 mr-2" />
              Automation & Efficiency
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">{formatPercentage(supportData.automationMetrics.chatbotResolutionRate)}</div>
                <div className="text-cyan-300 text-sm">Chatbot Resolution</div>
                <div className="text-gray-400 text-xs mt-1">{supportData.automationMetrics.chatbotInteractions} interactions</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(supportData.automationMetrics.selfServiceDeflection)}</div>
                <div className="text-green-300 text-sm">Self-Service Deflection</div>
                <div className="text-gray-400 text-xs mt-1">{supportData.automationMetrics.automationSavings.toFixed(0)}h saved</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(supportData.automationMetrics.automatedTicketRouting)}</div>
                <div className="text-slate-400">Auto Routing</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatPercentage(supportData.automationMetrics.macroUsage)}</div>
                <div className="text-slate-400">Macro Usage</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Workflow Automation:</span>
                <span className="text-yellow-400">{formatPercentage(supportData.automationMetrics.workflowAutomation)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Customer Effort Score:</span>
                <span className="text-green-400">{supportData.automationMetrics.customerEffortScore.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}