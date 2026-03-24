// Marketing Intelligence Center - Campaign Analytics & Marketing Operations
import { useState, useEffect } from 'react';
import { Target, TrendingUp, TrendingDown, Users, Mail, MousePointer, DollarSign, Eye, Activity, Zap, BarChart3, PieChart } from 'lucide-react';

export default function MarketingIntelligenceCenter() {
  const [marketingData, setMarketingData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    campaignOverview: {
      activeCampaigns: 23,
      totalReach: 2847356,
      impressions: 15847293,
      clicks: 189473,
      conversions: 12847,
      revenue: 847592,
      roi: 347.8,
      ctr: 1.19, // Click-through rate
      conversionRate: 6.78,
      cpc: 0.47, // Cost per click
      cpm: 5.23, // Cost per mille
      roas: 4.8 // Return on ad spend
    },
    channelPerformance: [
      {
        channel: 'Google Ads',
        spend: 89450,
        impressions: 5847293,
        clicks: 67834,
        conversions: 4523,
        revenue: 298567,
        roi: 334.0,
        ctr: 1.16,
        conversionRate: 6.67,
        qualityScore: 8.4
      },
      {
        channel: 'Facebook/Meta',
        spend: 67200,
        impressions: 4238467,
        clicks: 52389,
        conversions: 3698,
        revenue: 234589,
        roi: 349.2,
        ctr: 1.24,
        conversionRate: 7.06,
        qualityScore: 9.1
      },
      {
        channel: 'LinkedIn',
        spend: 34890,
        impressions: 1589234,
        clicks: 18934,
        conversions: 1247,
        revenue: 156783,
        roi: 449.5,
        ctr: 1.19,
        conversionRate: 6.58,
        qualityScore: 8.7
      },
      {
        channel: 'Email Marketing',
        spend: 8950,
        impressions: 847293,
        clicks: 23451,
        conversions: 1834,
        revenue: 89456,
        roi: 999.5,
        ctr: 2.77,
        conversionRate: 7.82,
        qualityScore: 9.3
      },
      {
        channel: 'Organic Social',
        spend: 12400,
        impressions: 2134589,
        clicks: 15678,
        conversions: 934,
        revenue: 45783,
        roi: 369.2,
        ctr: 0.73,
        conversionRate: 5.96,
        qualityScore: 8.2
      },
      {
        channel: 'Content Marketing',
        spend: 18900,
        impressions: 1189567,
        clicks: 11187,
        conversions: 611,
        revenue: 22434,
        roi: 118.7,
        ctr: 0.94,
        conversionRate: 5.46,
        qualityScore: 7.8
      }
    ],
    leadGeneration: {
      totalLeads: 18947,
      qualifiedLeads: 12834,
      mqls: 8945, // Marketing qualified leads
      sqls: 4567, // Sales qualified leads
      customers: 2847,
      leadVelocity: 234.7, // leads per day
      qualificationRate: 67.7,
      conversionToCustomer: 15.0,
      avgLeadValue: 297.45,
      leadScore: 78.4,
      sources: [
        { source: 'Paid Search', leads: 5689, quality: 89.4, cost: 67.45 },
        { source: 'Social Media', leads: 4234, quality: 82.7, cost: 43.89 },
        { source: 'Content Marketing', leads: 3567, quality: 94.2, cost: 23.67 },
        { source: 'Email Campaigns', leads: 2834, quality: 91.8, cost: 12.34 },
        { source: 'Referrals', leads: 1789, quality: 96.7, cost: 8.90 },
        { source: 'Webinars', leads: 834, quality: 93.5, cost: 45.78 }
      ]
    },
    customerAcquisition: {
      cac: 147.89, // Customer acquisition cost
      ltv: 2847.56, // Lifetime value
      ltvCacRatio: 19.3,
      paybackPeriod: 4.2, // months
      retentionRate: 89.4,
      churnRate: 10.6,
      upsellRate: 23.7,
      crossSellRate: 34.9,
      nps: 78.4, // Net promoter score
      customerSatisfaction: 94.2,
      acquisitionChannels: {
        direct: 28.4,
        organic: 34.7,
        paid: 23.6,
        referral: 8.9,
        social: 4.4
      }
    },
    contentMarketing: {
      blogPosts: 89,
      videoContent: 45,
      webinars: 12,
      ebooks: 23,
      caseStudies: 18,
      whitepapers: 15,
      totalViews: 1847293,
      engagementRate: 7.84,
      shareRate: 3.42,
      timeOnPage: 247, // seconds
      bounceRate: 23.7,
      contentConversions: 4567,
      contentROI: 234.6,
      topPerforming: [
        { title: 'AI Marketing Automation Guide', views: 89456, conversions: 834, conversionRate: 0.93 },
        { title: 'Lead Generation Strategies 2026', views: 67823, conversions: 723, conversionRate: 1.07 },
        { title: 'Customer Retention Playbook', views: 54789, conversions: 612, conversionRate: 1.12 },
        { title: 'Marketing Analytics Deep Dive', views: 45623, conversions: 567, conversionRate: 1.24 },
        { title: 'B2B Sales Funnel Optimization', views: 38947, conversions: 489, conversionRate: 1.26 }
      ]
    },
    emailMarketing: {
      subscribers: 89456,
      growthRate: 12.3,
      openRate: 24.7,
      clickRate: 3.89,
      unsubscribeRate: 0.23,
      deliverabilityRate: 98.7,
      automationRevenue: 234567,
      campaignsSent: 156,
      segmentedCampaigns: 89.4,
      personalizationRate: 76.8,
      sequences: [
        { name: 'Welcome Series', emails: 5, openRate: 34.7, clickRate: 5.89, conversionRate: 8.9 },
        { name: 'Nurture Campaign', emails: 8, openRate: 28.4, clickRate: 4.23, conversionRate: 6.7 },
        { name: 'Re-engagement', emails: 3, openRate: 18.9, clickRate: 2.34, conversionRate: 4.2 },
        { name: 'Product Onboarding', emails: 6, openRate: 41.2, clickRate: 7.89, conversionRate: 12.4 },
        { name: 'Customer Winback', emails: 4, openRate: 22.7, clickRate: 3.45, conversionRate: 5.8 }
      ]
    },
    socialMediaMarketing: {
      totalFollowers: 234789,
      followerGrowth: 8.7,
      engagementRate: 4.89,
      reachRate: 12.3,
      shareRate: 2.47,
      mentionsTracked: 1847,
      brandSentiment: 84.7,
      socialConversions: 2834,
      socialROI: 189.4,
      platforms: [
        { platform: 'LinkedIn', followers: 89456, engagement: 6.78, reach: 234567, posts: 45 },
        { platform: 'Twitter/X', followers: 67823, engagement: 4.23, reach: 189234, posts: 89 },
        { platform: 'Instagram', followers: 45678, engagement: 5.67, reach: 156789, posts: 67 },
        { platform: 'YouTube', followers: 23456, engagement: 3.89, reach: 98765, posts: 23 },
        { platform: 'Facebook', followers: 8376, engagement: 2.34, reach: 45678, posts: 34 }
      ]
    },
    marketingAutomation: {
      workflowsActive: 34,
      leadsNurtured: 12847,
      automationRevenue: 456789,
      emailsAutomated: 89.4,
      leadScoringAccuracy: 87.6,
      segmentationAccuracy: 92.3,
      triggersActivated: 15678,
      conversionLift: 23.7,
      timeToConversion: 14.8, // days
      automationROI: 678.9,
      workflows: [
        { name: 'Lead Scoring & Routing', leads: 4567, conversionRate: 18.9, efficiency: 94.2 },
        { name: 'Email Nurture Sequences', leads: 3489, conversionRate: 12.4, efficiency: 89.7 },
        { name: 'Social Media Automation', leads: 2356, conversionRate: 8.9, efficiency: 76.4 },
        { name: 'Customer Onboarding', leads: 1789, conversionRate: 34.7, efficiency: 96.8 },
        { name: 'Upsell/Cross-sell', leads: 656, conversionRate: 28.4, efficiency: 91.3 }
      ]
    },
    marketingAlerts: [
      {
        type: 'CRITICAL',
        category: 'Campaign Performance',
        message: 'Google Ads CTR dropped 15% in last 24 hours (-0.17% to 1.16%)',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Paid Media Manager',
        timestamp: '23:45',
        recommendations: ['Review ad copy', 'Check keyword relevance', 'Adjust bidding strategy']
      },
      {
        type: 'SUCCESS',
        category: 'Email Marketing',
        message: 'Welcome series achieved 34.7% open rate (+8.9% vs target)',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Email Marketing Specialist',
        timestamp: '22:30',
        recommendations: ['Scale successful elements', 'A/B test subject lines']
      },
      {
        type: 'WARNING',
        category: 'Lead Quality',
        message: 'LinkedIn lead qualification rate dropped to 89.4% (target: >92%)',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Lead Generation Manager',
        timestamp: '21:15',
        recommendations: ['Review targeting criteria', 'Update lead scoring', 'Optimize landing pages']
      },
      {
        type: 'INFO',
        category: 'Content Performance',
        message: 'AI Marketing Guide reached 89,456 views milestone',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Content Marketing Manager',
        timestamp: '20:45',
        recommendations: ['Create follow-up content', 'Promote via paid channels']
      }
    ],
    competitorAnalysis: {
      trackingCompetitors: 12,
      marketShare: 23.7,
      shareOfVoice: 18.9,
      competitiveBenchmark: 89.4,
      pricingAdvantage: 12.3,
      brandMentions: 2847,
      sentimentVsCompetitors: 8.7, // points ahead
      competitors: [
        { name: 'Competitor A', marketShare: 34.5, digitalPresence: 92.3, adSpend: 250000 },
        { name: 'Competitor B', marketShare: 18.9, digitalPresence: 87.6, adSpend: 180000 },
        { name: 'Competitor C', marketShare: 12.4, digitalPresence: 78.9, adSpend: 120000 },
        { name: 'Competitor D', marketShare: 8.7, digitalPresence: 89.4, adSpend: 95000 }
      ]
    },
    attributionAnalysis: {
      firstTouchAttribution: {
        organic: 34.7,
        paidSearch: 28.9,
        social: 18.4,
        direct: 12.3,
        referral: 5.7
      },
      lastTouchAttribution: {
        paidSearch: 42.3,
        organic: 23.6,
        email: 18.9,
        social: 10.4,
        direct: 4.8
      },
      multiTouchAttribution: {
        averageTouchpoints: 5.7,
        conversionPath: 14.8, // days
        assistedConversions: 67.8,
        crossChannelSynergy: 23.4
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketingData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        campaignOverview: {
          ...prev.campaignOverview,
          clicks: prev.campaignOverview.clicks + Math.floor(Math.random() * 50),
          conversions: prev.campaignOverview.conversions + Math.floor(Math.random() * 5),
          revenue: prev.campaignOverview.revenue + Math.floor(Math.random() * 1000),
          roi: Math.max(200, Math.min(500, prev.campaignOverview.roi + (Math.random() - 0.5) * 10)),
          ctr: Math.max(0.8, Math.min(2.0, prev.campaignOverview.ctr + (Math.random() - 0.5) * 0.1))
        },
        leadGeneration: {
          ...prev.leadGeneration,
          totalLeads: prev.leadGeneration.totalLeads + Math.floor(Math.random() * 10),
          leadVelocity: Math.max(150, Math.min(300, prev.leadGeneration.leadVelocity + (Math.random() - 0.5) * 20))
        }
      }));
    }, 8000);

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
    if (value >= good * 0.7) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
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

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Marketing Intelligence Center</h1>
              <p className="text-purple-300">Campaign analytics, lead generation, customer acquisition & marketing ROI optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{marketingData.currentTime}</div>
            <div className="text-purple-300">Marketing Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Campaign Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Active Campaigns
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{marketingData.campaignOverview.activeCampaigns}</div>
            <div className="text-purple-300 text-sm">Total reach: {formatNumber(marketingData.campaignOverview.totalReach)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Impressions
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(marketingData.campaignOverview.impressions)}</div>
            <div className="text-blue-300 text-sm">CTR: {formatPercentage(marketingData.campaignOverview.ctr)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MousePointer className="w-5 h-5 text-green-400 mr-2" />
                Clicks
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(marketingData.campaignOverview.clicks)}</div>
            <div className="text-green-300 text-sm">CPC: {formatCurrency(marketingData.campaignOverview.cpc)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Conversions
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(marketingData.campaignOverview.conversions)}</div>
            <div className="text-orange-300 text-sm">Rate: {formatPercentage(marketingData.campaignOverview.conversionRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatCurrency(marketingData.campaignOverview.revenue)}</div>
            <div className="text-emerald-300 text-sm">ROAS: {marketingData.campaignOverview.roas.toFixed(1)}x</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                ROI
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(marketingData.campaignOverview.roi)}</div>
            <div className="text-cyan-300 text-sm">CPM: {formatCurrency(marketingData.campaignOverview.cpm)}</div>
          </div>
        </div>

        {/* Channel Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
            Channel Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Channel</th>
                  <th className="text-center p-3 text-slate-300">Spend</th>
                  <th className="text-center p-3 text-slate-300">Impressions</th>
                  <th className="text-center p-3 text-slate-300">Clicks</th>
                  <th className="text-center p-3 text-slate-300">CTR</th>
                  <th className="text-center p-3 text-slate-300">Conversions</th>
                  <th className="text-center p-3 text-slate-300">Conv. Rate</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">ROI</th>
                  <th className="text-center p-3 text-slate-300">Quality</th>
                </tr>
              </thead>
              <tbody>
                {marketingData.channelPerformance.map((channel, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{channel.channel}</td>
                    <td className="p-3 text-center text-red-400">{formatCurrency(channel.spend)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(channel.impressions)}</td>
                    <td className="p-3 text-center text-green-400">{formatNumber(channel.clicks)}</td>
                    <td className="p-3 text-center text-purple-400">{formatPercentage(channel.ctr)}</td>
                    <td className="p-3 text-center text-orange-400">{formatNumber(channel.conversions)}</td>
                    <td className="p-3 text-center text-cyan-400">{formatPercentage(channel.conversionRate)}</td>
                    <td className="p-3 text-center text-emerald-400">{formatCurrency(channel.revenue)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(channel.roi, 300, 400)}`}>
                      {formatPercentage(channel.roi)}
                    </td>
                    <td className={`p-3 text-center ${getPerformanceColor(channel.qualityScore * 10, 80, 90)}`}>
                      {channel.qualityScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lead Generation & Customer Acquisition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-emerald-400 mr-2" />
              Lead Generation Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatNumber(marketingData.leadGeneration.totalLeads)}</div>
                <div className="text-emerald-300 text-sm">Total Leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(marketingData.leadGeneration.mqls)}</div>
                <div className="text-blue-300 text-sm">MQLs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(marketingData.leadGeneration.customers)}</div>
                <div className="text-purple-300 text-sm">Customers</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-orange-400 font-medium">{marketingData.leadGeneration.leadVelocity.toFixed(0)}</div>
                <div className="text-slate-400 text-xs">Leads/Day</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-cyan-400 font-medium">{formatPercentage(marketingData.leadGeneration.qualificationRate)}</div>
                <div className="text-slate-400 text-xs">Qualification Rate</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Lead Sources</h4>
              {marketingData.leadGeneration.sources.map((source, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{source.source}</span>
                  <div className="text-xs space-x-3">
                    <span className="text-green-400">{formatNumber(source.leads)}</span>
                    <span className="text-purple-400">{formatPercentage(source.quality)}</span>
                    <span className="text-orange-400">{formatCurrency(source.cost)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              Customer Acquisition Analytics
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatCurrency(marketingData.customerAcquisition.cac)}</div>
                <div className="text-red-300 text-sm">CAC</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(marketingData.customerAcquisition.ltv)}</div>
                <div className="text-green-300 text-sm">LTV</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-cyan-400 font-medium">{marketingData.customerAcquisition.ltvCacRatio.toFixed(1)}x</div>
                <div className="text-slate-400 text-xs">LTV/CAC Ratio</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-orange-400 font-medium">{marketingData.customerAcquisition.paybackPeriod.toFixed(1)} mo</div>
                <div className="text-slate-400 text-xs">Payback Period</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Acquisition Channels</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {Object.entries(marketingData.customerAcquisition.acquisitionChannels).map(([channel, percentage], index) => (
                  <div key={index} className="text-center bg-slate-700/30 rounded p-2">
                    <div className="text-purple-400 font-medium">{formatPercentage(percentage)}</div>
                    <div className="text-slate-400 capitalize">{channel}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{marketingData.customerAcquisition.nps.toFixed(1)}</div>
                <div className="text-slate-400">NPS Score</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(marketingData.customerAcquisition.retentionRate)}</div>
                <div className="text-slate-400">Retention</div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Marketing & Social Media */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-2" />
              Email Marketing Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">{formatNumber(marketingData.emailMarketing.subscribers)}</div>
                <div className="text-blue-300 text-sm">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(marketingData.emailMarketing.openRate)}</div>
                <div className="text-green-300 text-sm">Open Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-purple-400">{formatPercentage(marketingData.emailMarketing.clickRate)}</div>
                <div className="text-purple-300 text-sm">Click Rate</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Email Sequences Performance</h4>
              {marketingData.emailMarketing.sequences.map((sequence, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{sequence.name}</span>
                    <span className="text-cyan-400 text-sm">{sequence.emails} emails</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">Open: {formatPercentage(sequence.openRate)}</span>
                    <span className="text-purple-400">Click: {formatPercentage(sequence.clickRate)}</span>
                    <span className="text-orange-400">Conv: {formatPercentage(sequence.conversionRate)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatCurrency(marketingData.emailMarketing.automationRevenue)}</div>
                <div className="text-slate-400">Automation Revenue</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatPercentage(marketingData.emailMarketing.deliverabilityRate)}</div>
                <div className="text-slate-400">Deliverability</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-pink-400 mr-2" />
              Social Media Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-pink-400">{formatNumber(marketingData.socialMediaMarketing.totalFollowers)}</div>
                <div className="text-pink-300 text-sm">Followers</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">{formatPercentage(marketingData.socialMediaMarketing.engagementRate)}</div>
                <div className="text-cyan-300 text-sm">Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">{formatNumber(marketingData.socialMediaMarketing.socialConversions)}</div>
                <div className="text-orange-300 text-sm">Conversions</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Platform Performance</h4>
              {marketingData.socialMediaMarketing.platforms.map((platform, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-white font-medium text-sm">{platform.platform}</span>
                  <div className="text-xs space-x-3">
                    <span className="text-blue-400">{formatNumber(platform.followers)}</span>
                    <span className="text-green-400">{formatPercentage(platform.engagement)}</span>
                    <span className="text-purple-400">{formatNumber(platform.reach)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatPercentage(marketingData.socialMediaMarketing.brandSentiment)}</div>
                <div className="text-slate-400">Sentiment</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-blue-400 font-medium">{formatNumber(marketingData.socialMediaMarketing.mentionsTracked)}</div>
                <div className="text-slate-400">Mentions</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatPercentage(marketingData.socialMediaMarketing.socialROI)}</div>
                <div className="text-slate-400">Social ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Marketing Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 text-yellow-400 mr-2" />
            Marketing Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {marketingData.marketingAlerts.map((alert, index) => (
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

        {/* Content Marketing & Attribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-indigo-400 mr-2" />
              Content Marketing Intelligence
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-indigo-400">{formatNumber(marketingData.contentMarketing.totalViews)}</div>
                <div className="text-indigo-300 text-sm">Total Views</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatPercentage(marketingData.contentMarketing.engagementRate)}</div>
                <div className="text-green-300 text-sm">Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-orange-400">{formatNumber(marketingData.contentMarketing.contentConversions)}</div>
                <div className="text-orange-300 text-sm">Conversions</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Top Performing Content</h4>
              {marketingData.contentMarketing.topPerforming.slice(0, 3).map((content, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="text-white font-medium text-sm mb-1">{content.title}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">{formatNumber(content.views)} views</span>
                    <span className="text-green-400">{content.conversions} conv</span>
                    <span className="text-purple-400">{formatPercentage(content.conversionRate)} rate</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-teal-400 mr-2" />
              Attribution Analysis
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-white text-sm font-medium mb-2">First Touch Attribution</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {Object.entries(marketingData.attributionAnalysis.firstTouchAttribution).map(([channel, percentage], index) => (
                    <div key={index} className="text-center bg-slate-700/30 rounded p-2">
                      <div className="text-green-400 font-medium">{formatPercentage(percentage)}</div>
                      <div className="text-slate-400 capitalize">{channel}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-2">Last Touch Attribution</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {Object.entries(marketingData.attributionAnalysis.lastTouchAttribution).map(([channel, percentage], index) => (
                    <div key={index} className="text-center bg-slate-700/30 rounded p-2">
                      <div className="text-blue-400 font-medium">{formatPercentage(percentage)}</div>
                      <div className="text-slate-400 capitalize">{channel}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="text-center bg-slate-700/50 rounded p-2">
                  <div className="text-purple-400 font-medium">{marketingData.attributionAnalysis.multiTouchAttribution.averageTouchpoints.toFixed(1)}</div>
                  <div className="text-slate-400">Avg Touchpoints</div>
                </div>
                <div className="text-center bg-slate-700/50 rounded p-2">
                  <div className="text-cyan-400 font-medium">{marketingData.attributionAnalysis.multiTouchAttribution.conversionPath.toFixed(0)} days</div>
                  <div className="text-slate-400">Conversion Path</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}