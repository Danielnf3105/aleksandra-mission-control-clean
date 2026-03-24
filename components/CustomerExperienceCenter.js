// Customer Experience Center - Customer Journey, Satisfaction & Support Management
import { useState, useEffect } from 'react';
import { Heart, Users, MessageSquare, TrendingUp, Star, ThumbsUp, Phone, Mail, Clock, AlertCircle, Award, Target } from 'lucide-react';

export default function CustomerExperienceCenter() {
  const [customerData, setCustomerData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    experienceOverview: {
      totalCustomers: 2847,
      activeCustomers: 1679,
      newCustomers: 156,
      customerSatisfaction: 94.7,
      netPromoterScore: 67,
      churnRate: 2.3,
      lifetimeValue: 4567,
      supportTickets: 247
    },
    satisfactionMetrics: {
      overall: 94.7,
      product: 96.2,
      support: 92.4,
      onboarding: 89.8,
      billing: 87.3,
      performance: 95.1,
      features: 93.6,
      documentation: 91.2
    },
    customerJourney: [
      {
        stage: 'Awareness',
        customers: 15000,
        conversionRate: 12.4,
        avgTime: '3 days',
        satisfaction: 87.2,
        dropOffRate: 23.4,
        keyTouchpoints: ['Website Visit', 'Social Media', 'Content Consumption']
      },
      {
        stage: 'Interest',
        customers: 1860,
        conversionRate: 34.7,
        avgTime: '7 days',
        satisfaction: 91.6,
        dropOffRate: 18.9,
        keyTouchpoints: ['Product Demo', 'Pricing Page', 'Case Studies']
      },
      {
        stage: 'Consideration',
        customers: 645,
        conversionRate: 58.3,
        avgTime: '14 days',
        satisfaction: 93.4,
        dropOffRate: 15.2,
        keyTouchpoints: ['Free Trial', 'Sales Meeting', 'Technical Consultation']
      },
      {
        stage: 'Purchase',
        customers: 376,
        conversionRate: 89.7,
        avgTime: '2 days',
        satisfaction: 96.8,
        dropOffRate: 4.7,
        keyTouchpoints: ['Contract Signing', 'Payment Processing', 'Account Setup']
      },
      {
        stage: 'Onboarding',
        customers: 337,
        conversionRate: 94.1,
        avgTime: '21 days',
        satisfaction: 89.8,
        dropOffRate: 8.3,
        keyTouchpoints: ['Welcome Session', 'Training', 'Initial Configuration']
      },
      {
        stage: 'Activation',
        customers: 317,
        conversionRate: 97.2,
        avgTime: '30 days',
        satisfaction: 92.7,
        dropOffRate: 3.8,
        keyTouchpoints: ['First Value Achievement', 'Feature Adoption', 'Success Milestone']
      },
      {
        stage: 'Retention',
        customers: 308,
        conversionRate: 96.8,
        avgTime: 'Ongoing',
        satisfaction: 94.7,
        dropOffRate: 2.3,
        keyTouchpoints: ['Regular Check-ins', 'Feature Updates', 'Support Interactions']
      }
    ],
    supportMetrics: {
      openTickets: 247,
      resolvedToday: 89,
      avgResponseTime: 23, // minutes
      avgResolutionTime: 4.7, // hours
      firstCallResolution: 87.3,
      escalationRate: 8.9,
      customerEffort: 2.1, // 1-5 scale, lower better
      supportSatisfaction: 92.4,
      channels: [
        { name: 'Live Chat', tickets: 98, satisfaction: 94.7, avgTime: 12 },
        { name: 'Email Support', tickets: 89, satisfaction: 91.2, avgTime: 156 },
        { name: 'Phone Support', tickets: 45, satisfaction: 96.8, avgTime: 8 },
        { name: 'Knowledge Base', tickets: 15, satisfaction: 89.4, avgTime: 0 }
      ]
    },
    feedbackAnalysis: {
      totalFeedback: 1247,
      positiveFeedback: 1089,
      negativeFeedback: 158,
      sentiment: 87.3,
      commonTopics: [
        { topic: 'User Interface', mentions: 234, sentiment: 92.4, trend: '+12.3%' },
        { topic: 'Performance', mentions: 189, sentiment: 95.7, trend: '+8.9%' },
        { topic: 'Features', mentions: 167, sentiment: 89.1, trend: '+15.2%' },
        { topic: 'Support Quality', mentions: 145, sentiment: 96.2, trend: '+6.7%' },
        { topic: 'Documentation', mentions: 123, sentiment: 84.6, trend: '-2.1%' },
        { topic: 'Pricing', mentions: 98, sentiment: 78.9, trend: '+4.3%' }
      ],
      recentReviews: [
        {
          customer: 'TechCorp Solutions',
          rating: 5,
          title: 'Exceptional mission control capabilities',
          text: 'The real-time analytics and comprehensive dashboards have transformed our operations.',
          sentiment: 'positive',
          date: '2026-03-17',
          category: 'Product Features'
        },
        {
          customer: 'DataFlow Industries',
          rating: 5,
          title: 'Outstanding customer support',
          text: 'Quick response times and knowledgeable support team. Highly recommended.',
          sentiment: 'positive',
          date: '2026-03-16',
          category: 'Customer Support'
        },
        {
          customer: 'StartupX',
          rating: 4,
          title: 'Great platform with room for improvement',
          text: 'Love the AI capabilities but could use better onboarding documentation.',
          sentiment: 'neutral',
          date: '2026-03-15',
          category: 'Onboarding'
        }
      ]
    },
    loyaltyProgram: {
      totalMembers: 1456,
      activeMembers: 1234,
      pointsIssued: 567890,
      pointsRedeemed: 234567,
      rewardsGiven: 189,
      programSatisfaction: 91.8,
      tiers: [
        { name: 'Bronze', members: 678, benefits: 'Basic rewards, priority support', retention: 89.4 },
        { name: 'Silver', members: 456, benefits: 'Enhanced rewards, early access', retention: 94.7 },
        { name: 'Gold', members: 234, benefits: 'Premium rewards, dedicated manager', retention: 97.8 },
        { name: 'Platinum', members: 88, benefits: 'Exclusive benefits, strategic consultation', retention: 98.9 }
      ]
    },
    customerHealth: [
      {
        segment: 'Enterprise',
        customers: 145,
        health: 96.2,
        churnRisk: 'LOW',
        engagement: 94.7,
        satisfaction: 97.1,
        revenue: 2847000,
        trends: { satisfaction: '+2.3%', engagement: '+5.7%', revenue: '+18.9%' }
      },
      {
        segment: 'Mid-Market',
        customers: 567,
        health: 92.8,
        churnRisk: 'LOW',
        engagement: 89.4,
        satisfaction: 93.6,
        revenue: 1456000,
        trends: { satisfaction: '+1.8%', engagement: '+3.4%', revenue: '+12.7%' }
      },
      {
        segment: 'Small Business',
        customers: 1234,
        health: 87.3,
        churnRisk: 'MEDIUM',
        engagement: 82.1,
        satisfaction: 89.7,
        revenue: 678000,
        trends: { satisfaction: '-0.9%', engagement: '+1.2%', revenue: '+8.4%' }
      },
      {
        segment: 'Startup',
        customers: 901,
        health: 83.9,
        churnRisk: 'MEDIUM',
        engagement: 87.6,
        satisfaction: 91.4,
        revenue: 234000,
        trends: { satisfaction: '+3.2%', engagement: '+6.8%', revenue: '+23.1%' }
      }
    ],
    successStories: [
      {
        customer: 'GlobalTech Corp',
        industry: 'Technology',
        achievement: '40% operational efficiency increase',
        timeline: '6 months',
        metrics: { efficiency: '+40%', costs: '-25%', satisfaction: '+35%' },
        quote: 'The mission control system revolutionized our entire operation.'
      },
      {
        customer: 'MegaData Inc',
        industry: 'Data Services',
        achievement: '60% faster decision making',
        timeline: '4 months',
        metrics: { speed: '+60%', accuracy: '+30%', revenue: '+22%' },
        quote: 'Real-time insights transformed how we serve our customers.'
      },
      {
        customer: 'InnovateCo',
        industry: 'Manufacturing',
        achievement: '50% reduction in downtime',
        timeline: '8 months',
        metrics: { uptime: '+50%', productivity: '+35%', quality: '+25%' },
        quote: 'Predictive analytics prevented costly production failures.'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomerData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        experienceOverview: {
          ...prev.experienceOverview,
          customerSatisfaction: Math.max(90, Math.min(98, prev.experienceOverview.customerSatisfaction + (Math.random() - 0.5) * 2)),
          netPromoterScore: Math.max(60, Math.min(80, prev.experienceOverview.netPromoterScore + (Math.random() - 0.5) * 3)),
          supportTickets: Math.max(200, Math.min(300, prev.experienceOverview.supportTickets + Math.floor((Math.random() - 0.5) * 10)))
        },
        supportMetrics: {
          ...prev.supportMetrics,
          avgResponseTime: Math.max(15, Math.min(45, prev.supportMetrics.avgResponseTime + Math.floor((Math.random() - 0.5) * 5))),
          supportSatisfaction: Math.max(88, Math.min(96, prev.supportMetrics.supportSatisfaction + (Math.random() - 0.5) * 1))
        }
      }));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-green-400 bg-green-400/20';
    if (health >= 90) return 'text-cyan-400 bg-cyan-400/20';
    if (health >= 85) return 'text-yellow-400 bg-yellow-400/20';
    return 'text-red-400 bg-red-400/20';
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive': return 'text-green-400 bg-green-400/20';
      case 'neutral': return 'text-yellow-400 bg-yellow-400/20';
      case 'negative': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-500'}`} />
    ));
  };

  return (
    <div className="h-full bg-gradient-to-br from-rose-900 via-slate-900 to-pink-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-rose-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Customer Experience Center</h1>
              <p className="text-rose-300">Customer journey, satisfaction tracking & experience optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-rose-400">{customerData.currentTime}</div>
            <div className="text-rose-300">Experience Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Experience Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-rose-400 mr-2" />
                Total Customers
              </h3>
            </div>
            <div className="text-3xl font-bold text-rose-400">{formatNumber(customerData.experienceOverview.totalCustomers)}</div>
            <div className="text-rose-300 text-sm">{formatNumber(customerData.experienceOverview.activeCustomers)} active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <ThumbsUp className="w-5 h-5 text-green-400 mr-2" />
                Satisfaction
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{customerData.experienceOverview.customerSatisfaction.toFixed(1)}%</div>
            <div className="text-green-300 text-sm">NPS: {customerData.experienceOverview.netPromoterScore}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Lifetime Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(customerData.experienceOverview.lifetimeValue)}</div>
            <div className="text-cyan-300 text-sm">Churn: {customerData.experienceOverview.churnRate}%</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MessageSquare className="w-5 h-5 text-orange-400 mr-2" />
                Support Tickets
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{customerData.experienceOverview.supportTickets}</div>
            <div className="text-orange-300 text-sm">{customerData.supportMetrics.resolvedToday} resolved today</div>
          </div>
        </div>

        {/* Customer Journey & Support Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
              Customer Journey
            </h3>
            <div className="space-y-3">
              {customerData.customerJourney.map((stage, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{stage.stage}</h4>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyan-400 font-medium">{stage.conversionRate.toFixed(1)}%</span>
                      <span className="text-slate-400 text-sm">{stage.avgTime}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-white font-medium">{formatNumber(stage.customers)}</div>
                      <div className="text-slate-400 text-xs">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-medium">{stage.satisfaction.toFixed(1)}%</div>
                      <div className="text-slate-400 text-xs">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-400 font-medium">{stage.dropOffRate.toFixed(1)}%</div>
                      <div className="text-slate-400 text-xs">Drop-off</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs">
                    Key touchpoints: {stage.keyTouchpoints.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 text-blue-400 mr-2" />
              Support Metrics
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{customerData.supportMetrics.avgResponseTime}m</div>
                  <div className="text-blue-300 text-sm">Avg Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{customerData.supportMetrics.supportSatisfaction.toFixed(1)}%</div>
                  <div className="text-green-300 text-sm">Support Satisfaction</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">{customerData.supportMetrics.firstCallResolution.toFixed(1)}%</div>
                  <div className="text-purple-300 text-sm">First Call Resolution</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-orange-400">{customerData.supportMetrics.customerEffort.toFixed(1)}</div>
                  <div className="text-orange-300 text-sm">Customer Effort Score</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white text-sm mb-3">Support Channels</h4>
              {customerData.supportMetrics.channels.map((channel, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <span className="text-white text-sm">{channel.name}</span>
                    <div className="text-slate-400 text-xs">{channel.tickets} tickets</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm">{channel.satisfaction.toFixed(1)}%</div>
                    <div className="text-slate-400 text-xs">{channel.avgTime > 60 ? `${Math.floor(channel.avgTime / 60)}h` : `${channel.avgTime}m`}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Satisfaction Metrics & Feedback Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Satisfaction Breakdown
            </h3>
            <div className="space-y-3">
              {Object.entries(customerData.satisfactionMetrics).map(([category, score], index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-slate-300 capitalize text-sm">{category}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          score >= 95 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          score >= 90 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                          score >= 85 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          'bg-gradient-to-r from-red-500 to-orange-500'
                        }`}
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                    <span className={`text-sm font-medium ${
                      score >= 95 ? 'text-green-400' :
                      score >= 90 ? 'text-cyan-400' :
                      score >= 85 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {score.toFixed(1)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <MessageSquare className="w-5 h-5 text-cyan-400 mr-2" />
              Feedback Analysis
            </h3>
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{customerData.feedbackAnalysis.positiveFeedback}</div>
                  <div className="text-green-300 text-sm">Positive</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{customerData.feedbackAnalysis.sentiment.toFixed(1)}%</div>
                  <div className="text-cyan-300 text-sm">Sentiment Score</div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white text-sm mb-2">Common Topics</h4>
              {customerData.feedbackAnalysis.commonTopics.slice(0, 5).map((topic, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <div>
                    <span className="text-white text-sm">{topic.topic}</span>
                    <div className="text-slate-400 text-xs">{topic.mentions} mentions</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 text-sm">{topic.sentiment.toFixed(1)}%</div>
                    <div className={`text-xs ${topic.trend.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {topic.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Health & Recent Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Heart className="w-5 h-5 text-rose-400 mr-2" />
              Customer Health by Segment
            </h3>
            <div className="space-y-3">
              {customerData.customerHealth.map((segment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-white">{segment.segment}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(segment.churnRisk)}`}>
                        {segment.churnRisk} RISK
                      </span>
                    </div>
                    <span className={`text-lg font-bold ${
                      segment.health >= 95 ? 'text-green-400' :
                      segment.health >= 90 ? 'text-cyan-400' :
                      segment.health >= 85 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {segment.health.toFixed(1)}%
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    <div className="text-center">
                      <div className="text-white font-medium text-sm">{segment.customers}</div>
                      <div className="text-slate-400 text-xs">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-400 font-medium text-sm">{segment.engagement.toFixed(1)}%</div>
                      <div className="text-slate-400 text-xs">Engagement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-medium text-sm">{segment.satisfaction.toFixed(1)}%</div>
                      <div className="text-slate-400 text-xs">Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium text-sm">{formatCurrency(segment.revenue)}</div>
                      <div className="text-slate-400 text-xs">Revenue</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Satisfaction: {segment.trends.satisfaction}</span>
                    <span>Engagement: {segment.trends.engagement}</span>
                    <span>Revenue: {segment.trends.revenue}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Award className="w-5 h-5 text-gold-400 mr-2" />
              Recent Customer Reviews
            </h3>
            <div className="space-y-4">
              {customerData.feedbackAnalysis.recentReviews.map((review, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{review.customer}</h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="text-white text-sm mb-2 font-medium">{review.title}</div>
                  <div className="text-slate-300 text-sm mb-3">{review.text}</div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full font-medium ${getSentimentColor(review.sentiment)}`}>
                        {review.sentiment}
                      </span>
                      <span className="text-slate-400">{review.category}</span>
                    </div>
                    <span className="text-slate-400">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-rose-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Trophy className="w-5 h-5 text-gold-400 mr-2" />
            Customer Success Stories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {customerData.successStories.map((story, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="mb-3">
                  <h4 className="font-medium text-white mb-1">{story.customer}</h4>
                  <div className="text-slate-400 text-sm">{story.industry} | {story.timeline}</div>
                </div>
                <div className="text-lg font-bold text-green-400 mb-3">{story.achievement}</div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {Object.entries(story.metrics).map(([metric, value]) => (
                    <div key={metric} className="text-center">
                      <div className={`font-medium text-sm ${value.includes('+') ? 'text-green-400' : 'text-cyan-400'}`}>
                        {value}
                      </div>
                      <div className="text-slate-400 text-xs capitalize">{metric}</div>
                    </div>
                  ))}
                </div>
                <div className="text-slate-300 text-sm italic">"{story.quote}"</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}