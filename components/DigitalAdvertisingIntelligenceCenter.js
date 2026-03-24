// Digital Advertising Intelligence Center - Campaign Analytics, Ad Performance & Media Buying Intelligence
import { useState, useEffect } from 'react';
import { TrendingUp, Target, DollarSign, Eye, MousePointer, BarChart3, Zap, Users, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function DigitalAdvertisingIntelligenceCenter() {
  const [adData, setAdData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    campaignOverview: {
      activeCampaigns: 67,
      totalAdSpend: 189234,
      totalRevenue: 567891,
      roas: 3.2,
      totalImpressions: 12345678,
      totalClicks: 234567,
      ctr: 1.9,
      avgCpc: 0.81,
      avgCpm: 5.67,
      conversions: 8901,
      conversionRate: 3.8,
      costPerConversion: 21.25,
      qualityScore: 7.8,
      adSpendToday: 5432,
      revenueToday: 17890,
      impressionsToday: 345678,
      clicksToday: 6789,
      conversionsToday: 234
    },
    platformPerformance: [
      {
        platform: 'Google Ads',
        spend: 78901,
        revenue: 245678,
        roas: 3.11,
        impressions: 5678901,
        clicks: 123456,
        ctr: 2.2,
        cpc: 0.64,
        cpm: 4.89,
        conversions: 4567,
        conversionRate: 3.7,
        qualityScore: 8.2,
        campaigns: 23,
        adGroups: 156,
        keywords: 2345,
        status: 'ACTIVE',
        trend: '+12.4%',
        topCampaign: 'AI Marketing Suite - Search',
        attribution: 'Last Click'
      },
      {
        platform: 'Facebook Ads',
        spend: 56789,
        revenue: 178902,
        roas: 3.15,
        impressions: 3456789,
        clicks: 67890,
        ctr: 2.0,
        cpc: 0.84,
        cpm: 6.78,
        conversions: 2345,
        conversionRate: 3.5,
        qualityScore: 7.6,
        campaigns: 18,
        adGroups: 89,
        keywords: 0,
        status: 'ACTIVE',
        trend: '+8.7%',
        topCampaign: 'Email Marketing Pro - Interest',
        attribution: 'View Through'
      },
      {
        platform: 'LinkedIn Ads',
        spend: 34567,
        revenue: 89012,
        roas: 2.57,
        impressions: 1234567,
        clicks: 23456,
        ctr: 1.9,
        cpc: 1.47,
        cpm: 12.34,
        conversions: 1234,
        conversionRate: 5.3,
        qualityScore: 7.9,
        campaigns: 12,
        adGroups: 45,
        keywords: 567,
        status: 'ACTIVE',
        trend: '+15.2%',
        topCampaign: 'B2B Analytics - Sponsored',
        attribution: 'First Click'
      },
      {
        platform: 'Microsoft Ads',
        spend: 19017,
        revenue: 54299,
        roas: 2.86,
        impressions: 890123,
        clicks: 19012,
        ctr: 2.1,
        cpc: 1.00,
        cpm: 8.45,
        conversions: 756,
        conversionRate: 4.0,
        qualityScore: 7.4,
        campaigns: 8,
        adGroups: 34,
        keywords: 890,
        status: 'ACTIVE',
        trend: '+6.3%',
        topCampaign: 'SEO Tools - Exact Match',
        attribution: 'Last Click'
      }
    ],
    topCampaigns: [
      {
        name: 'AI Marketing Suite - Search Campaign',
        platform: 'Google Ads',
        type: 'Search',
        status: 'ACTIVE',
        budget: 1500,
        spent: 1234,
        revenue: 7890,
        roas: 6.39,
        impressions: 234567,
        clicks: 5678,
        ctr: 2.4,
        cpc: 0.22,
        conversions: 234,
        conversionRate: 4.1,
        qualityScore: 9.2,
        targetAudience: 'Marketing Professionals',
        startDate: '2026-03-10',
        endDate: '2026-03-31',
        objective: 'Sales',
        bidStrategy: 'Target ROAS',
        devices: ['Desktop (45%)', 'Mobile (55%)'],
        geoPerformance: 'US (60%), CA (25%), UK (15%)',
        timeOfDay: 'Peak: 10AM-2PM, 6PM-9PM'
      },
      {
        name: 'Email Marketing Pro - Interest Targeting',
        platform: 'Facebook Ads',
        type: 'Interest',
        status: 'ACTIVE',
        budget: 1200,
        spent: 987,
        revenue: 4567,
        roas: 4.63,
        impressions: 456789,
        clicks: 8901,
        ctr: 1.9,
        cpc: 0.11,
        conversions: 156,
        conversionRate: 1.8,
        qualityScore: 8.1,
        targetAudience: 'Small Business Owners',
        startDate: '2026-03-12',
        endDate: '2026-04-12',
        objective: 'Conversions',
        bidStrategy: 'Lowest Cost',
        devices: ['Mobile (75%)', 'Desktop (25%)'],
        geoPerformance: 'US (50%), AU (20%), UK (15%), CA (15%)',
        timeOfDay: 'Peak: 7PM-11PM, 9AM-11AM'
      },
      {
        name: 'B2B Analytics - Sponsored Content',
        platform: 'LinkedIn Ads',
        type: 'Sponsored Content',
        status: 'ACTIVE',
        budget: 800,
        spent: 645,
        revenue: 2345,
        roas: 3.64,
        impressions: 123456,
        clicks: 2345,
        ctr: 1.9,
        cpc: 0.28,
        conversions: 89,
        conversionRate: 3.8,
        qualityScore: 8.7,
        targetAudience: 'B2B Decision Makers',
        startDate: '2026-03-08',
        endDate: '2026-04-08',
        objective: 'Lead Generation',
        bidStrategy: 'Maximum Delivery',
        devices: ['Desktop (85%)', 'Mobile (15%)'],
        geoPerformance: 'US (70%), EU (20%), APAC (10%)',
        timeOfDay: 'Peak: 8AM-12PM, 2PM-6PM'
      },
      {
        name: 'SEO Tools - Exact Match Keywords',
        platform: 'Microsoft Ads',
        type: 'Search',
        status: 'ACTIVE',
        budget: 600,
        spent: 456,
        revenue: 1567,
        roas: 3.44,
        impressions: 67890,
        clicks: 1234,
        ctr: 1.8,
        cpc: 0.37,
        conversions: 45,
        conversionRate: 3.6,
        qualityScore: 7.9,
        targetAudience: 'SEO Professionals',
        startDate: '2026-03-15',
        endDate: '2026-04-15',
        objective: 'Sales',
        bidStrategy: 'Enhanced CPC',
        devices: ['Desktop (70%)', 'Mobile (30%)'],
        geoPerformance: 'US (65%), CA (20%), UK (15%)',
        timeOfDay: 'Peak: 9AM-11AM, 2PM-5PM'
      }
    ],
    audienceSegments: [
      {
        name: 'Enterprise Decision Makers',
        size: 2345678,
        platforms: ['LinkedIn Ads', 'Google Ads'],
        spend: 45678,
        revenue: 145678,
        roas: 3.19,
        ctr: 2.1,
        conversionRate: 4.2,
        avgOrderValue: 289.45,
        demographics: {
          age: '35-54 (67%), 25-34 (23%)',
          gender: 'Male (58%), Female (42%)',
          interests: ['Business Intelligence', 'Enterprise Software', 'Data Analytics'],
          jobTitles: ['VP Marketing', 'CMO', 'Director Analytics', 'Head of Growth']
        },
        performance: 'EXCELLENT',
        growth: '+18.7%',
        engagement: 'High'
      },
      {
        name: 'Small Business Owners',
        size: 5678901,
        platforms: ['Facebook Ads', 'Google Ads'],
        spend: 78901,
        revenue: 234567,
        roas: 2.97,
        ctr: 1.9,
        conversionRate: 3.1,
        avgOrderValue: 156.78,
        demographics: {
          age: '25-44 (72%), 45-54 (18%)',
          gender: 'Female (54%), Male (46%)',
          interests: ['Small Business', 'Marketing Tools', 'Cost Savings'],
          jobTitles: ['Business Owner', 'Founder', 'CEO', 'Marketing Manager']
        },
        performance: 'GOOD',
        growth: '+12.4%',
        engagement: 'Medium'
      },
      {
        name: 'Marketing Professionals',
        size: 3456789,
        platforms: ['Google Ads', 'LinkedIn Ads'],
        spend: 34567,
        revenue: 123456,
        roas: 3.57,
        ctr: 2.3,
        conversionRate: 4.8,
        avgOrderValue: 167.89,
        demographics: {
          age: '25-44 (68%), 22-34 (22%)',
          gender: 'Female (61%), Male (39%)',
          interests: ['Digital Marketing', 'Analytics', 'Automation'],
          jobTitles: ['Marketing Manager', 'Digital Marketer', 'Growth Manager', 'Campaign Manager']
        },
        performance: 'EXCELLENT',
        growth: '+23.1%',
        engagement: 'High'
      },
      {
        name: 'Tech Startups',
        size: 1234567,
        platforms: ['Facebook Ads', 'LinkedIn Ads'],
        spend: 23456,
        revenue: 67890,
        roas: 2.89,
        ctr: 1.7,
        conversionRate: 2.8,
        avgOrderValue: 189.34,
        demographics: {
          age: '22-35 (78%), 35-45 (15%)',
          gender: 'Male (52%), Female (48%)',
          interests: ['Startups', 'SaaS', 'Growth Hacking'],
          jobTitles: ['Founder', 'CTO', 'Product Manager', 'Head of Marketing']
        },
        performance: 'FAIR',
        growth: '+8.9%',
        engagement: 'Medium'
      }
    ],
    creativePerfomance: [
      {
        creativeId: 'CR001',
        type: 'Video Ad',
        platform: 'Facebook Ads',
        format: '16:9 Landscape Video',
        duration: '30 seconds',
        impressions: 456789,
        clicks: 8901,
        ctr: 1.95,
        engagements: 12345,
        engagementRate: 2.7,
        conversions: 234,
        conversionRate: 2.6,
        cost: 987,
        revenue: 4567,
        roas: 4.63,
        videoViews: 345678,
        videoCompletions: 123456,
        completionRate: 35.7,
        thumbstops: 67890,
        thumbstopRate: 14.8,
        headline: 'Transform Your Email Marketing in 30 Days',
        description: 'See how top marketers are 10xing their email ROI',
        cta: 'Start Free Trial',
        performance: 'EXCELLENT'
      },
      {
        creativeId: 'CR002',
        type: 'Image Ad',
        platform: 'Google Ads',
        format: 'Responsive Display',
        duration: 'Static',
        impressions: 234567,
        clicks: 5678,
        ctr: 2.42,
        engagements: 6789,
        engagementRate: 2.9,
        conversions: 189,
        conversionRate: 3.3,
        cost: 1234,
        revenue: 7890,
        roas: 6.39,
        videoViews: 0,
        videoCompletions: 0,
        completionRate: 0,
        thumbstops: 0,
        thumbstopRate: 0,
        headline: 'AI-Powered Marketing Suite',
        description: 'Automate your marketing with advanced AI',
        cta: 'Get Started',
        performance: 'EXCELLENT'
      },
      {
        creativeId: 'CR003',
        type: 'Carousel Ad',
        platform: 'LinkedIn Ads',
        format: 'Carousel',
        duration: 'Interactive',
        impressions: 123456,
        clicks: 2345,
        ctr: 1.9,
        engagements: 3456,
        engagementRate: 2.8,
        conversions: 89,
        conversionRate: 3.8,
        cost: 645,
        revenue: 2345,
        roas: 3.64,
        videoViews: 0,
        videoCompletions: 0,
        completionRate: 0,
        thumbstops: 0,
        thumbstopRate: 0,
        headline: 'B2B Analytics That Actually Work',
        description: 'Stop guessing, start knowing your ROI',
        cta: 'Book Demo',
        performance: 'GOOD'
      },
      {
        creativeId: 'CR004',
        type: 'Text Ad',
        platform: 'Microsoft Ads',
        format: 'Expanded Text Ad',
        duration: 'Static',
        impressions: 67890,
        clicks: 1234,
        ctr: 1.82,
        engagements: 1345,
        engagementRate: 2.0,
        conversions: 45,
        conversionRate: 3.6,
        cost: 456,
        revenue: 1567,
        roas: 3.44,
        videoViews: 0,
        videoCompletions: 0,
        completionRate: 0,
        thumbstops: 0,
        thumbstopRate: 0,
        headline: 'Professional SEO Tools - Free Trial',
        description: 'Rank higher with enterprise SEO software',
        cta: 'Try Free',
        performance: 'GOOD'
      }
    ],
    performanceAlerts: [
      {
        type: 'SUCCESS',
        category: 'Campaign Performance',
        message: 'AI Marketing Suite campaign ROAS increased to 6.39 (+89% above target)',
        metric: 'Campaign ROAS',
        value: '6.39',
        change: '+89% above target',
        impact: 'MAJOR',
        timestamp: '07:50',
        campaign: 'AI Marketing Suite - Search Campaign',
        platform: 'Google Ads',
        recommendation: 'Increase budget allocation by 50%, expand keyword targeting',
        urgency: 'HIGH',
        opportunity: 'SCALE_WINNING_CAMPAIGN'
      },
      {
        type: 'WARNING',
        category: 'Quality Score',
        message: 'Microsoft Ads quality score dropped to 6.8 (-1.2 from baseline)',
        metric: 'Average Quality Score',
        value: '6.8',
        change: '-1.2 from baseline',
        impact: 'MODERATE',
        timestamp: '07:48',
        platform: 'Microsoft Ads',
        affectedCampaigns: 3,
        recommendation: 'Review ad copy relevance, improve landing page experience',
        urgency: 'MEDIUM',
        technicalAction: 'OPTIMIZE_CREATIVES'
      },
      {
        type: 'CRITICAL',
        category: 'Budget Utilization',
        message: 'LinkedIn Ads spending 340% of daily budget - budget exhausted early',
        metric: 'Budget Utilization',
        value: '340%',
        change: '+240% over budget',
        impact: 'HIGH',
        timestamp: '07:52',
        platform: 'LinkedIn Ads',
        affectedCampaigns: 5,
        lostImpressions: 45678,
        recommendation: 'Immediate budget increase or bid adjustments to prevent traffic loss',
        urgency: 'CRITICAL',
        escalation: 'CAMPAIGN_MANAGER'
      },
      {
        type: 'INFO',
        category: 'Audience Expansion',
        message: 'Marketing Professionals audience showing +23.1% growth opportunity',
        metric: 'Audience Growth Potential',
        value: '+23.1%',
        change: 'Available expansion',
        impact: 'POSITIVE',
        timestamp: '07:45',
        audience: 'Marketing Professionals',
        potentialReach: '+890K',
        estimatedRevenue: '+$34K',
        recommendation: 'Test lookalike audiences, expand interest targeting',
        urgency: 'LOW',
        opportunity: 'EXPAND_AUDIENCE'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAdData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        campaignOverview: {
          ...prev.campaignOverview,
          totalAdSpend: Math.max(185000, Math.min(195000, prev.campaignOverview.totalAdSpend + Math.floor((Math.random() - 0.5) * 500))),
          totalRevenue: Math.max(560000, Math.min(575000, prev.campaignOverview.totalRevenue + Math.floor((Math.random() - 0.5) * 1000))),
          roas: Math.max(3.0, Math.min(3.5, prev.campaignOverview.roas + (Math.random() - 0.5) * 0.1))
        }
      }));
    }, 20000);

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

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'Google Ads': return 'text-blue-400 bg-blue-400/20';
      case 'Facebook Ads': return 'text-blue-500 bg-blue-500/20';
      case 'LinkedIn Ads': return 'text-cyan-400 bg-cyan-400/20';
      case 'Microsoft Ads': return 'text-green-400 bg-green-400/20';
      case 'Twitter Ads': return 'text-sky-400 bg-sky-400/20';
      case 'TikTok Ads': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCampaignTypeColor = (type) => {
    switch (type) {
      case 'Search': return 'text-green-400 bg-green-400/20';
      case 'Interest': return 'text-purple-400 bg-purple-400/20';
      case 'Sponsored Content': return 'text-cyan-400 bg-cyan-400/20';
      case 'Display': return 'text-orange-400 bg-orange-400/20';
      case 'Video': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400';
      case 'PAUSED': return 'text-yellow-400';
      case 'ENDED': return 'text-gray-400';
      case 'DRAFT': return 'text-blue-400';
      case 'REJECTED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getScoreColor = (score, good = 5, excellent = 7) => {
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
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;
  const formatCPC = (cpc) => `$${cpc.toFixed(2)}`;
  const formatCPM = (cpm) => `$${cpm.toFixed(2)}`;

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Digital Advertising Intelligence Center</h1>
              <p className="text-blue-300">Campaign analytics, ad performance & media buying intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{adData.currentTime}</div>
            <div className="text-blue-300">Advertising Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Campaign Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-blue-400 mr-2" />
                Campaigns
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{adData.campaignOverview.activeCampaigns}</div>
            <div className="text-blue-300 text-sm">Active Now</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-indigo-400 mr-2" />
                Ad Spend
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatCurrency(adData.campaignOverview.totalAdSpend)}</div>
            <div className="text-indigo-300 text-sm">{formatCurrency(adData.campaignOverview.adSpendToday)} Today</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                ROAS
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(adData.campaignOverview.roas, 2, 3)}`}>
              {adData.campaignOverview.roas.toFixed(1)}x
            </div>
            <div className="text-green-300 text-sm">Return on Ad Spend</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MousePointer className="w-5 h-5 text-purple-400 mr-2" />
                CTR
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(adData.campaignOverview.ctr, 1.5, 2.5)}`}>
              {formatPercentage(adData.campaignOverview.ctr)}
            </div>
            <div className="text-purple-300 text-sm">Click Through Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                Impressions
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(adData.campaignOverview.totalImpressions)}</div>
            <div className="text-cyan-300 text-sm">{formatNumber(adData.campaignOverview.impressionsToday)} Today</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Conversions
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(adData.campaignOverview.conversions)}</div>
            <div className="text-orange-300 text-sm">{formatPercentage(adData.campaignOverview.conversionRate)} Rate</div>
          </div>
        </div>

        {/* Platform Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
            Platform Performance Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Platform</th>
                  <th className="text-center p-3 text-slate-300">Spend</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">ROAS</th>
                  <th className="text-center p-3 text-slate-300">CTR</th>
                  <th className="text-center p-3 text-slate-300">CPC</th>
                  <th className="text-center p-3 text-slate-300">Quality</th>
                </tr>
              </thead>
              <tbody>
                {adData.platformPerformance.map((platform, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(platform.platform)}`}>
                          {platform.platform}
                        </span>
                        <span className={`text-sm ${getStatusColor(platform.status)}`}>{platform.status}</span>
                      </div>
                      <div className="text-slate-400 text-xs mt-1">
                        {platform.campaigns} campaigns • Top: {platform.topCampaign}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-indigo-400 font-medium">{formatCurrency(platform.spend)}</div>
                      <div className={`text-xs ${platform.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                        {platform.trend}
                      </div>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(platform.revenue)}</td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(platform.roas, 2, 3)}`}>
                      {platform.roas.toFixed(2)}x
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(platform.ctr, 1.5, 2.5)}`}>
                      {formatPercentage(platform.ctr)}
                    </td>
                    <td className="p-3 text-center text-purple-400">{formatCPC(platform.cpc)}</td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(platform.qualityScore, 6, 8)}`}>
                      {platform.qualityScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Campaigns & Audience Segments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-indigo-400 mr-2" />
              Top Campaign Intelligence
            </h3>
            <div className="space-y-4">
              {adData.topCampaigns.map((campaign, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{campaign.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(campaign.platform)}`}>
                        {campaign.platform}
                      </span>
                    </div>
                    <span className={`text-sm ${getScoreColor(campaign.roas, 2, 4)}`}>
                      {campaign.roas.toFixed(1)}x ROAS
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Spend: {formatCurrency(campaign.spent)}</div>
                    <div className="text-green-400">Revenue: {formatCurrency(campaign.revenue)}</div>
                    <div className="text-purple-400">CTR: {formatPercentage(campaign.ctr)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Impr: {formatNumber(campaign.impressions)}</div>
                    <div className="text-orange-400">Conv: {formatPercentage(campaign.conversionRate)}</div>
                    <div className="text-yellow-400">QS: {campaign.qualityScore.toFixed(1)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Target:</strong> {campaign.targetAudience} • <strong>Peak:</strong> {campaign.timeOfDay}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Audience Segment Intelligence
            </h3>
            <div className="space-y-4">
              {adData.audienceSegments.map((segment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{segment.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(segment.performance)}`}>
                        {segment.performance}
                      </span>
                      <span className="text-green-400 text-xs">{segment.growth}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Size: {formatNumber(segment.size)}</div>
                    <div className="text-green-400">ROAS: {segment.roas.toFixed(1)}x</div>
                    <div className="text-purple-400">CTR: {formatPercentage(segment.ctr)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Spend: {formatCurrency(segment.spend)}</div>
                    <div className="text-orange-400">Conv: {formatPercentage(segment.conversionRate)}</div>
                    <div className="text-yellow-400">AOV: {formatCurrency(segment.avgOrderValue)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Age:</strong> {segment.demographics.age} • <strong>Engagement:</strong> {segment.engagement}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Creative Performance & Performance Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-purple-400 mr-2" />
              Creative Performance Intelligence
            </h3>
            <div className="space-y-4">
              {adData.creativePerfomance.map((creative, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{creative.type}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(creative.platform)}`}>
                        {creative.platform}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(creative.performance)}`}>
                      {creative.performance}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Impr: {formatNumber(creative.impressions)}</div>
                    <div className="text-purple-400">CTR: {formatPercentage(creative.ctr)}</div>
                    <div className="text-green-400">ROAS: {creative.roas.toFixed(1)}x</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Conv: {formatPercentage(creative.conversionRate)}</div>
                    <div className="text-yellow-400">Eng: {formatPercentage(creative.engagementRate)}</div>
                    {creative.type === 'Video Ad' && (
                      <div className="text-red-400">Comp: {formatPercentage(creative.completionRate)}</div>
                    )}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Headline:</strong> {creative.headline}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Advertising Intelligence Alerts
            </h3>
            <div className="space-y-4">
              {adData.performanceAlerts.map((alert, index) => (
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
                      {alert.platform && <div className="text-slate-300">Platform: {alert.platform}</div>}
                      {alert.audience && <div className="text-slate-300">Audience: {alert.audience}</div>}
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
    </div>
  );
}