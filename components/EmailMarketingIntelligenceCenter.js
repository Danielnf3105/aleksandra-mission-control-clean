// Email Marketing Intelligence Center - Campaign Analytics, Automation & Deliverability Monitoring
import { useState, useEffect } from 'react';
import { Mail, TrendingUp, TrendingDown, Users, Eye, Target, BarChart3, AlertTriangle, CheckCircle, Globe, Zap } from 'lucide-react';

export default function EmailMarketingIntelligenceCenter() {
  const [emailData, setEmailData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    campaignOverview: {
      totalSubscribers: 89012,
      activeSubscribers: 67890,
      newSubscribers: 1234, // this week
      unsubscribers: 234,
      totalCampaigns: 456,
      activeCampaigns: 23,
      campaignsSent: 189,
      emailsSentTotal: 2345678,
      emailsDelivered: 2234567,
      emailsOpened: 756789,
      emailsClicked: 123456,
      totalRevenue: 234567,
      avgOpenRate: 34.5,
      avgClickRate: 5.6,
      avgConversionRate: 2.8,
      deliverabilityScore: 96.7,
      listGrowthRate: 12.4,
      engagementScore: 78.9,
      automationRevenue: 123456,
      segmentationUsage: 89.4
    },
    recentCampaigns: [
      {
        name: 'AI Marketing Weekly Newsletter #47',
        type: 'Newsletter',
        status: 'DELIVERED',
        sentDate: '2026-03-17',
        recipients: 67890,
        delivered: 66234,
        opens: 22891,
        clicks: 3456,
        conversions: 234,
        revenue: 12345,
        openRate: 34.6,
        clickRate: 5.2,
        conversionRate: 3.4,
        deliverabilityRate: 97.6,
        bounceRate: 1.8,
        unsubscribeRate: 0.3,
        spamComplaints: 5,
        listPerformance: 'EXCELLENT',
        subjectLine: '🚀 5 AI Tools That Will 10x Your Marketing ROI',
        previewText: 'Discover the secret weapons top marketers use...',
        topDevice: 'Mobile (67%)',
        topLocation: 'United States (45%)',
        automationTriggered: false
      },
      {
        name: 'Product Launch: Marketing Analytics Pro',
        type: 'Product Launch',
        status: 'DELIVERED',
        sentDate: '2026-03-16',
        recipients: 23456,
        delivered: 22890,
        opens: 9156,
        clicks: 1834,
        conversions: 167,
        revenue: 45678,
        openRate: 40.0,
        clickRate: 8.0,
        conversionRate: 9.1,
        deliverabilityRate: 97.6,
        bounceRate: 2.1,
        unsubscribeRate: 0.8,
        spamComplaints: 3,
        listPerformance: 'OUTSTANDING',
        subjectLine: 'Finally! The Analytics Dashboard You\'ve Been Waiting For',
        previewText: 'See exactly which campaigns drive revenue...',
        topDevice: 'Desktop (52%)',
        topLocation: 'United Kingdom (38%)',
        automationTriggered: false
      },
      {
        name: 'Welcome Series Email 3: Getting Started',
        type: 'Automation',
        status: 'ACTIVE',
        sentDate: 'Ongoing',
        recipients: 456, // this week
        delivered: 445,
        opens: 201,
        clicks: 67,
        conversions: 23,
        revenue: 2345,
        openRate: 45.2,
        clickRate: 14.7,
        conversionRate: 11.4,
        deliverabilityRate: 97.6,
        bounceRate: 1.9,
        unsubscribeRate: 0.4,
        spamComplaints: 0,
        listPerformance: 'OUTSTANDING',
        subjectLine: 'Ready to see what\'s possible? (Tutorial inside)',
        previewText: 'Your personalized setup guide is ready...',
        topDevice: 'Mobile (71%)',
        topLocation: 'Canada (28%)',
        automationTriggered: true
      },
      {
        name: 'Cart Abandonment Recovery',
        type: 'Automation',
        status: 'ACTIVE',
        sentDate: 'Ongoing',
        recipients: 234, // this week
        delivered: 227,
        opens: 89,
        clicks: 34,
        conversions: 19,
        revenue: 4567,
        openRate: 39.2,
        clickRate: 15.0,
        conversionRate: 25.3,
        deliverabilityRate: 97.0,
        bounceRate: 2.8,
        unsubscribeRate: 0.2,
        spamComplaints: 1,
        listPerformance: 'EXCELLENT',
        subjectLine: 'You left something in your cart 🛒',
        previewText: 'Complete your purchase and save 10%...',
        topDevice: 'Mobile (82%)',
        topLocation: 'Australia (34%)',
        automationTriggered: true
      }
    ],
    segmentPerformance: [
      {
        segment: 'Enterprise Customers',
        subscribers: 5678,
        avgOpenRate: 42.3,
        avgClickRate: 8.9,
        avgConversionRate: 12.4,
        revenue: 89012,
        revenuePerSubscriber: 15.67,
        engagementScore: 94.6,
        growthRate: 23.4,
        churnRate: 2.1,
        lifetimeValue: 234.56,
        topInterests: ['Enterprise Solutions', 'API Integration', 'Custom Analytics'],
        preferredSendTime: 'Tuesday 10:00 AM',
        devicePreference: 'Desktop (68%)',
        geoDistribution: 'US (45%), EU (32%), APAC (23%)'
      },
      {
        segment: 'Small Business Owners',
        subscribers: 23456,
        avgOpenRate: 36.7,
        avgClickRate: 6.8,
        avgConversionRate: 4.2,
        revenue: 67890,
        revenuePerSubscriber: 2.89,
        engagementScore: 78.3,
        growthRate: 34.5,
        churnRate: 5.6,
        lifetimeValue: 89.45,
        topInterests: ['Small Business Tools', 'Cost Savings', 'Easy Setup'],
        preferredSendTime: 'Thursday 2:00 PM',
        devicePreference: 'Mobile (73%)',
        geoDistribution: 'US (52%), EU (28%), Other (20%)'
      },
      {
        segment: 'Marketing Professionals',
        subscribers: 34567,
        avgOpenRate: 38.9,
        avgClickRate: 7.2,
        avgConversionRate: 3.8,
        revenue: 45678,
        revenuePerSubscriber: 1.32,
        engagementScore: 82.7,
        growthRate: 28.9,
        churnRate: 4.3,
        lifetimeValue: 67.89,
        topInterests: ['Marketing Automation', 'Analytics', 'Best Practices'],
        preferredSendTime: 'Wednesday 11:00 AM',
        devicePreference: 'Mobile (65%)',
        geoDistribution: 'US (48%), EU (35%), Other (17%)'
      },
      {
        segment: 'Free Trial Users',
        subscribers: 12345,
        avgOpenRate: 28.4,
        avgClickRate: 4.1,
        avgConversionRate: 1.8,
        revenue: 12345,
        revenuePerSubscriber: 1.00,
        engagementScore: 56.8,
        growthRate: 89.2,
        churnRate: 23.4,
        lifetimeValue: 23.45,
        topInterests: ['Getting Started', 'Tutorials', 'Free Resources'],
        preferredSendTime: 'Monday 9:00 AM',
        devicePreference: 'Mobile (78%)',
        geoDistribution: 'US (41%), EU (31%), Other (28%)'
      }
    ],
    automationWorkflows: [
      {
        name: 'Welcome Email Series',
        status: 'ACTIVE',
        emails: 5,
        subscribers: 12345,
        completionRate: 67.8,
        avgOpenRate: 45.6,
        avgClickRate: 12.4,
        conversionRate: 8.9,
        revenue: 23456,
        revenuePerSubscriber: 1.90,
        triggerType: 'Subscription',
        frequency: 'Daily for 5 days',
        lastOptimized: '2026-03-10',
        performance: 'EXCELLENT',
        nextAction: 'A/B test subject lines',
        emailSequence: [
          { subject: 'Welcome! Your journey starts now 🚀', openRate: 52.3, clickRate: 15.6 },
          { subject: 'Here\'s how to get started in 5 minutes', openRate: 48.9, clickRate: 13.2 },
          { subject: 'Your first quick win (tutorial inside)', openRate: 45.2, clickRate: 11.8 },
          { subject: 'Real success stories from customers like you', openRate: 42.1, clickRate: 10.4 },
          { subject: 'Ready for the next level?', openRate: 38.7, clickRate: 8.9 }
        ]
      },
      {
        name: 'Cart Abandonment Recovery',
        status: 'ACTIVE',
        emails: 3,
        subscribers: 2345,
        completionRate: 45.2,
        avgOpenRate: 38.9,
        avgClickRate: 15.6,
        conversionRate: 23.4,
        revenue: 34567,
        revenuePerSubscriber: 14.74,
        triggerType: 'Cart Abandonment',
        frequency: 'After 1hr, 24hr, 72hr',
        lastOptimized: '2026-03-12',
        performance: 'OUTSTANDING',
        nextAction: 'Test discount percentage',
        emailSequence: [
          { subject: 'You left something in your cart 🛒', openRate: 42.1, clickRate: 18.9 },
          { subject: 'Still thinking it over? Here\'s 10% off', openRate: 38.7, clickRate: 15.2 },
          { subject: 'Last chance! Your cart expires in 24 hours', openRate: 35.9, clickRate: 12.8 }
        ]
      },
      {
        name: 'Post-Purchase Upsell',
        status: 'ACTIVE',
        emails: 4,
        subscribers: 567,
        completionRate: 78.9,
        avgOpenRate: 56.7,
        avgClickRate: 18.4,
        conversionRate: 34.5,
        revenue: 12345,
        revenuePerSubscriber: 21.78,
        triggerType: 'Purchase',
        frequency: 'After 3 days, 1 week, 2 weeks, 1 month',
        lastOptimized: '2026-03-08',
        performance: 'OUTSTANDING',
        nextAction: 'Expand product recommendations',
        emailSequence: [
          { subject: 'Thank you! Here\'s how to get even more value', openRate: 62.3, clickRate: 22.1 },
          { subject: 'Customers like you also love these tools', openRate: 58.9, clickRate: 19.6 },
          { subject: 'Unlock advanced features with our Pro plan', openRate: 54.2, clickRate: 17.8 },
          { subject: 'Your exclusive upgrade offer expires soon', openRate: 51.6, clickRate: 14.2 }
        ]
      },
      {
        name: 'Re-engagement Campaign',
        status: 'ACTIVE',
        emails: 3,
        subscribers: 8901,
        completionRate: 23.4,
        avgOpenRate: 18.9,
        avgClickRate: 3.4,
        conversionRate: 1.2,
        revenue: 5678,
        revenuePerSubscriber: 0.64,
        triggerType: 'Inactivity (60 days)',
        frequency: 'Weekly for 3 weeks',
        lastOptimized: '2026-03-15',
        performance: 'POOR',
        nextAction: 'Revamp content strategy',
        emailSequence: [
          { subject: 'We miss you! Here\'s what you\'ve been missing', openRate: 21.4, clickRate: 4.2 },
          { subject: 'Last chance to stay connected', openRate: 18.9, clickRate: 3.1 },
          { subject: 'Goodbye for now (but we\'ll keep your spot)', openRate: 16.4, clickRate: 2.9 }
        ]
      }
    ],
    deliverabilityMetrics: {
      overallScore: 96.7,
      inboxPlacement: 94.2,
      spamFolderRate: 3.8,
      bounceRate: 1.9,
      hardBounces: 0.8,
      softBounces: 1.1,
      spamComplaints: 0.02,
      unsubscribeRate: 0.4,
      listHygiene: 94.6,
      senderReputation: 'EXCELLENT',
      domainReputation: 'GOOD',
      ipReputation: 'EXCELLENT',
      authenticationStatus: {
        spf: 'PASS',
        dkim: 'PASS',
        dmarc: 'PASS',
        bimi: 'IMPLEMENTED'
      },
      ispsPerformance: {
        gmail: { inboxRate: 95.6, spamRate: 2.8, bounceRate: 1.6 },
        outlook: { inboxRate: 92.3, spamRate: 4.7, bounceRate: 3.0 },
        yahoo: { inboxRate: 91.8, spamRate: 5.2, bounceRate: 3.0 },
        apple: { inboxRate: 96.7, spamRate: 1.8, bounceRate: 1.5 }
      }
    },
    abTestResults: [
      {
        testName: 'Subject Line Optimization - Newsletter',
        status: 'COMPLETED',
        winner: 'Variant B',
        confidence: 95.6,
        improvement: '+18.7%',
        metric: 'Open Rate',
        variantA: {
          subject: 'Weekly Marketing Update #47',
          recipients: 11234,
          opens: 3456,
          openRate: 30.8,
          clicks: 567,
          clickRate: 5.0
        },
        variantB: {
          subject: '🚀 5 AI Tools That Will 10x Your Marketing ROI',
          recipients: 11123,
          opens: 4789,
          openRate: 43.1,
          clicks: 723,
          clickRate: 6.5
        },
        duration: '7 days',
        startDate: '2026-03-10',
        insights: ['Emojis increased open rates', 'Specific numbers perform better', 'AI-related content resonates'],
        nextTest: 'CTA button optimization'
      },
      {
        testName: 'Send Time Optimization - Product Launch',
        status: 'RUNNING',
        progress: 67.8,
        metric: 'Click Rate',
        variantA: {
          sendTime: 'Tuesday 10:00 AM',
          recipients: 5678,
          opens: 2134,
          openRate: 37.6,
          clicks: 389,
          clickRate: 6.9
        },
        variantB: {
          sendTime: 'Thursday 2:00 PM',
          recipients: 5689,
          opens: 1987,
          openRate: 34.9,
          clicks: 456,
          clickRate: 8.0
        },
        duration: '14 days',
        startDate: '2026-03-15',
        estimatedCompletion: '2026-03-29',
        currentLeader: 'Variant B',
        confidenceLevel: 72.3
      }
    ],
    performanceAlerts: [
      {
        type: 'SUCCESS',
        category: 'Campaign Performance',
        message: 'Product launch campaign exceeded revenue target by 156% - €45,678 vs €29,000 target',
        metric: 'Campaign Revenue',
        value: '€45,678',
        change: '+156%',
        impact: 'MAJOR',
        timestamp: '07:25',
        campaign: 'Marketing Analytics Pro Launch',
        recommendation: 'Create follow-up nurture sequence, scale successful elements',
        audience: 'Enterprise Customers',
        urgency: 'HIGH',
        opportunity: 'EXPAND'
      },
      {
        type: 'WARNING',
        category: 'Deliverability',
        message: 'Outlook inbox placement dropped to 89.2% from 94.1% average',
        metric: 'Inbox Placement Rate',
        value: '89.2%',
        change: '-5.2%',
        impact: 'MODERATE',
        timestamp: '07:22',
        provider: 'Microsoft Outlook',
        affectedCampaigns: 3,
        recommendation: 'Review content for spam triggers, check sender reputation',
        urgency: 'MEDIUM',
        technicalAction: 'REQUIRED'
      },
      {
        type: 'CRITICAL',
        category: 'Automation',
        message: 'Welcome series email 4 failing - 67% delivery failure rate',
        metric: 'Delivery Rate',
        value: '33%',
        change: '-64% from normal',
        impact: 'HIGH',
        timestamp: '07:26',
        automation: 'Welcome Email Series',
        emailNumber: 4,
        affectedSubscribers: 234,
        recommendation: 'Immediate technical investigation, pause automation if needed',
        urgency: 'CRITICAL',
        escalation: 'TECHNICAL_TEAM'
      },
      {
        type: 'INFO',
        category: 'List Growth',
        message: 'Subscriber growth up 45% this week - 1,234 new subscribers vs 850 average',
        metric: 'Weekly Subscriber Growth',
        value: '+45%',
        change: '+384 subscribers',
        impact: 'POSITIVE',
        timestamp: '07:20',
        source: 'Organic signups (67%), Paid ads (23%), Referrals (10%)',
        recommendation: 'Analyze top growth sources, optimize welcome sequence capacity',
        urgency: 'LOW',
        opportunity: 'OPTIMIZE'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEmailData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        campaignOverview: {
          ...prev.campaignOverview,
          activeSubscribers: Math.max(67500, Math.min(68500, prev.campaignOverview.activeSubscribers + Math.floor((Math.random() - 0.5) * 20))),
          avgOpenRate: Math.max(33.0, Math.min(36.0, prev.campaignOverview.avgOpenRate + (Math.random() - 0.5) * 0.3)),
          avgClickRate: Math.max(5.0, Math.min(6.2, prev.campaignOverview.avgClickRate + (Math.random() - 0.5) * 0.2))
        }
      }));
    }, 12000);

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

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'OUTSTANDING': return 'text-green-400 bg-green-400/20';
      case 'EXCELLENT': return 'text-blue-400 bg-blue-400/20';
      case 'GOOD': return 'text-cyan-400 bg-cyan-400/20';
      case 'AVERAGE': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCampaignTypeColor = (type) => {
    switch (type) {
      case 'Newsletter': return 'text-blue-400 bg-blue-400/20';
      case 'Product Launch': return 'text-purple-400 bg-purple-400/20';
      case 'Automation': return 'text-green-400 bg-green-400/20';
      case 'Promotional': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'DELIVERED': return 'text-green-400';
      case 'ACTIVE': return 'text-blue-400';
      case 'DRAFT': return 'text-yellow-400';
      case 'SCHEDULED': return 'text-purple-400';
      case 'PAUSED': return 'text-orange-400';
      case 'FAILED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'CRITICAL': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => `€${formatNumber(amount)}`;

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Email Marketing Intelligence Center</h1>
              <p className="text-indigo-300">Campaign analytics, automation & deliverability monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{emailData.currentTime}</div>
            <div className="text-indigo-300">Email Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Email Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-indigo-400 mr-2" />
                Subscribers
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatNumber(emailData.campaignOverview.activeSubscribers)}</div>
            <div className="text-indigo-300 text-sm">{formatNumber(emailData.campaignOverview.totalSubscribers)} Total • +{formatNumber(emailData.campaignOverview.newSubscribers)} This Week</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Mail className="w-5 h-5 text-purple-400 mr-2" />
                Campaigns
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{emailData.campaignOverview.activeCampaigns}</div>
            <div className="text-purple-300 text-sm">{emailData.campaignOverview.totalCampaigns} Total • {emailData.campaignOverview.campaignsSent} Sent</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Open Rate
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(emailData.campaignOverview.avgOpenRate, 25, 35)}`}>
              {formatPercentage(emailData.campaignOverview.avgOpenRate)}
            </div>
            <div className="text-blue-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Click Rate
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(emailData.campaignOverview.avgClickRate, 3, 6)}`}>
              {formatPercentage(emailData.campaignOverview.avgClickRate)}
            </div>
            <div className="text-green-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-orange-400 mr-2" />
                Deliverability
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(emailData.campaignOverview.deliverabilityScore, 85, 95)}`}>
              {formatPercentage(emailData.campaignOverview.deliverabilityScore)}
            </div>
            <div className="text-orange-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(emailData.campaignOverview.totalRevenue)}</div>
            <div className="text-cyan-300 text-sm">{formatCurrency(emailData.campaignOverview.automationRevenue)} Auto</div>
          </div>
        </div>

        {/* Recent Campaigns */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-indigo-400 mr-2" />
            Recent Campaign Performance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Campaign</th>
                  <th className="text-center p-3 text-slate-300">Recipients</th>
                  <th className="text-center p-3 text-slate-300">Open Rate</th>
                  <th className="text-center p-3 text-slate-300">Click Rate</th>
                  <th className="text-center p-3 text-slate-300">Conv Rate</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                </tr>
              </thead>
              <tbody>
                {emailData.recentCampaigns.map((campaign, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{campaign.name}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded text-xs ${getCampaignTypeColor(campaign.type)}`}>
                          {campaign.type}
                        </span>
                        <span className={`text-xs ${getStatusColor(campaign.status)}`}>
                          {campaign.status}
                        </span>
                      </div>
                      <div className="text-slate-400 text-xs mt-1">
                        {campaign.sentDate} • {campaign.topDevice}
                      </div>
                    </td>
                    <td className="p-3 text-center text-indigo-400">{formatNumber(campaign.recipients)}</td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(campaign.openRate, 25, 35)}`}>
                      {formatPercentage(campaign.openRate)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(campaign.clickRate, 3, 6)}`}>
                      {formatPercentage(campaign.clickRate)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(campaign.conversionRate, 2, 5)}`}>
                      {formatPercentage(campaign.conversionRate)}
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(campaign.revenue)}</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(campaign.listPerformance)}`}>
                        {campaign.listPerformance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Automation Workflows & Segment Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              Automation Workflow Intelligence
            </h3>
            <div className="space-y-4">
              {emailData.automationWorkflows.map((workflow, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{workflow.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(workflow.performance)}`}>
                        {workflow.performance}
                      </span>
                    </div>
                    <span className={`text-sm ${getStatusColor(workflow.status)}`}>{workflow.status}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Subscribers: {formatNumber(workflow.subscribers)}</div>
                    <div className="text-green-400">Open: {formatPercentage(workflow.avgOpenRate)}</div>
                    <div className="text-purple-400">Click: {formatPercentage(workflow.avgClickRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Conv: {formatPercentage(workflow.conversionRate)}</div>
                    <div className="text-cyan-400">Revenue: {formatCurrency(workflow.revenue)}</div>
                    <div className="text-yellow-400">RPU: {formatCurrency(workflow.revenuePerSubscriber)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Trigger:</strong> {workflow.triggerType} • <strong>Next:</strong> {workflow.nextAction}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Segment Performance Analytics
            </h3>
            <div className="space-y-4">
              {emailData.segmentPerformance.map((segment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{segment.segment}</span>
                    <span className={`text-sm ${getScoreColor(segment.engagementScore, 70, 85)}`}>
                      {formatPercentage(segment.engagementScore)} Engagement
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Size: {formatNumber(segment.subscribers)}</div>
                    <div className="text-green-400">Open: {formatPercentage(segment.avgOpenRate)}</div>
                    <div className="text-blue-400">Click: {formatPercentage(segment.avgClickRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Conv: {formatPercentage(segment.avgConversionRate)}</div>
                    <div className="text-cyan-400">Revenue: {formatCurrency(segment.revenue)}</div>
                    <div className="text-orange-400">LTV: {formatCurrency(segment.lifetimeValue)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Best Time:</strong> {segment.preferredSendTime} • <strong>Device:</strong> {segment.devicePreference}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deliverability & A/B Testing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-orange-400 mr-2" />
              Deliverability Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Overall Deliverability Score</h4>
                <div className="text-center mb-3">
                  <div className={`text-3xl font-bold ${getScoreColor(emailData.deliverabilityMetrics.overallScore, 85, 95)}`}>
                    {formatPercentage(emailData.deliverabilityMetrics.overallScore)}
                  </div>
                  <div className="text-slate-300 text-sm">Deliverability Score</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${getScoreColor(emailData.deliverabilityMetrics.inboxPlacement, 85, 95)}`}>
                      {formatPercentage(emailData.deliverabilityMetrics.inboxPlacement)}
                    </div>
                    <div className="text-slate-300">Inbox Rate</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-red-400">
                      {formatPercentage(emailData.deliverabilityMetrics.spamFolderRate)}
                    </div>
                    <div className="text-slate-300">Spam Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Authentication Status</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-green-400 font-bold">✓ {emailData.deliverabilityMetrics.authenticationStatus.spf}</div>
                    <div className="text-slate-300">SPF</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-green-400 font-bold">✓ {emailData.deliverabilityMetrics.authenticationStatus.dkim}</div>
                    <div className="text-slate-300">DKIM</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-green-400 font-bold">✓ {emailData.deliverabilityMetrics.authenticationStatus.dmarc}</div>
                    <div className="text-slate-300">DMARC</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-blue-400 font-bold">✓ {emailData.deliverabilityMetrics.authenticationStatus.bimi}</div>
                    <div className="text-slate-300">BIMI</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">ISP Performance</h4>
                <div className="space-y-2">
                  {Object.entries(emailData.deliverabilityMetrics.ispsPerformance).map(([isp, metrics], index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm capitalize">{isp}</span>
                        <span className={`text-xs ${getScoreColor(metrics.inboxRate, 85, 95)}`}>
                          {formatPercentage(metrics.inboxRate)} Inbox
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 text-xs">
                        <div className="text-green-400">Inbox: {formatPercentage(metrics.inboxRate)}</div>
                        <div className="text-red-400">Spam: {formatPercentage(metrics.spamRate)}</div>
                        <div className="text-yellow-400">Bounce: {formatPercentage(metrics.bounceRate)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-cyan-400 mr-2" />
              A/B Testing Intelligence
            </h3>
            <div className="space-y-4">
              {emailData.abTestResults.map((test, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{test.testName}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      test.status === 'COMPLETED' ? 'bg-green-400/20 text-green-400' :
                      test.status === 'RUNNING' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-yellow-400/20 text-yellow-400'
                    }`}>
                      {test.status}
                    </span>
                  </div>
                  
                  {test.status === 'COMPLETED' && (
                    <>
                      <div className="bg-green-400/20 rounded p-3 mb-3">
                        <div className="text-green-400 text-sm font-medium">Winner: {test.winner}</div>
                        <div className="text-green-300 text-xs">
                          {test.improvement} improvement • {test.confidence}% confidence
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-600/30 rounded p-2">
                          <div className="text-slate-300 mb-1">Variant A</div>
                          <div className="text-blue-400">{test.variantA.subject || `${test.variantA.sendTime}`}</div>
                          <div className="text-green-400">{test.metric}: {formatPercentage(test.variantA.openRate || test.variantA.clickRate)}</div>
                        </div>
                        <div className="bg-slate-600/30 rounded p-2">
                          <div className="text-slate-300 mb-1">Variant B (Winner)</div>
                          <div className="text-blue-400">{test.variantB.subject || `${test.variantB.sendTime}`}</div>
                          <div className="text-green-400">{test.metric}: {formatPercentage(test.variantB.openRate || test.variantB.clickRate)}</div>
                        </div>
                      </div>
                    </>
                  )}
                  
                  {test.status === 'RUNNING' && (
                    <>
                      <div className="bg-blue-400/20 rounded p-3 mb-3">
                        <div className="flex items-center justify-between">
                          <div className="text-blue-400 text-sm">Progress: {formatPercentage(test.progress)}</div>
                          <div className="text-blue-300 text-xs">Current Leader: {test.currentLeader}</div>
                        </div>
                        <div className="text-blue-300 text-xs mt-1">
                          Confidence: {formatPercentage(test.confidenceLevel)} • Est. completion: {test.estimatedCompletion}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-600/30 rounded p-2">
                          <div className="text-slate-300 mb-1">Variant A</div>
                          <div className="text-blue-400">{test.variantA.sendTime}</div>
                          <div className="text-green-400">Click Rate: {formatPercentage(test.variantA.clickRate)}</div>
                        </div>
                        <div className="bg-slate-600/30 rounded p-2">
                          <div className="text-slate-300 mb-1">Variant B</div>
                          <div className="text-blue-400">{test.variantB.sendTime}</div>
                          <div className="text-green-400">Click Rate: {formatPercentage(test.variantB.clickRate)}</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Email Marketing Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Email Marketing Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {emailData.performanceAlerts.map((alert, index) => (
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
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <div className="text-slate-300">Metric: {alert.metric}</div>
                    <div className="text-slate-300">Value: {alert.value}</div>
                    <div className="text-slate-300">Change: {alert.change}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Impact: {alert.impact}</div>
                    {alert.campaign && <div className="text-slate-300">Campaign: {alert.campaign}</div>}
                    {alert.automation && <div className="text-slate-300">Automation: {alert.automation}</div>}
                    {alert.provider && <div className="text-slate-300">Provider: {alert.provider}</div>}
                  </div>
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
  );
}