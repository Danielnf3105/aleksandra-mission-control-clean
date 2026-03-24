// Influencer Marketing Intelligence Center - Creator Analytics, Partnership Tracking & Campaign Performance
import { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Eye, Heart, MessageCircle, Share, Star, Award, Target, BarChart3, Zap } from 'lucide-react';

export default function InfluencerMarketingIntelligenceCenter() {
  const [influencerData, setInfluencerData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    campaignOverview: {
      activeCampaigns: 23,
      totalInfluencers: 456,
      activeInfluencers: 189,
      totalReach: 12345678,
      totalImpressions: 34567890,
      totalEngagements: 1234567,
      avgEngagementRate: 4.8,
      totalRevenue: 456789,
      avgROI: 587.3,
      costPerEngagement: 0.37,
      costPerAcquisition: 23.45,
      conversionRate: 3.2,
      brandMentions: 2345,
      ugcPosts: 567,
      videoViews: 5678901,
      storyViews: 2345678
    },
    topInfluencers: [
      {
        name: 'Sarah Chen',
        handle: '@sarahtech_',
        platform: 'Instagram',
        tier: 'Mega',
        followers: 2300000,
        avgViews: 850000,
        engagementRate: 6.7,
        niche: 'Technology',
        location: 'San Francisco, CA',
        activeCampaigns: 3,
        totalEarnings: 125000,
        lastPost: '2 hours ago',
        performanceScore: 94.6,
        brandFit: 'EXCELLENT',
        reliability: 96.8,
        audienceQuality: 92.4,
        contentQuality: 89.7,
        growthRate: 12.3,
        avgCPE: 0.24,
        conversions: 234,
        reach: 1950000,
        impressions: 3200000,
        saves: 45600,
        shares: 12300,
        comments: 23400,
        likes: 156700,
        demographics: {
          age: '25-34 (45%), 18-24 (32%)',
          gender: 'Female (67%), Male (33%)',
          location: 'US (52%), CA (18%), UK (12%)',
          interests: 'Tech, Business, Lifestyle'
        }
      },
      {
        name: 'Marcus Johnson',
        handle: '@fitnessmarcus',
        platform: 'YouTube',
        tier: 'Macro',
        followers: 890000,
        avgViews: 420000,
        engagementRate: 8.9,
        niche: 'Fitness',
        location: 'Los Angeles, CA',
        activeCampaigns: 2,
        totalEarnings: 89000,
        lastPost: '5 hours ago',
        performanceScore: 91.2,
        brandFit: 'EXCELLENT',
        reliability: 94.3,
        audienceQuality: 88.9,
        contentQuality: 93.6,
        growthRate: 18.7,
        avgCPE: 0.19,
        conversions: 178,
        reach: 756000,
        impressions: 1680000,
        saves: 23400,
        shares: 8900,
        comments: 15600,
        likes: 89400,
        demographics: {
          age: '18-34 (78%), 35-44 (15%)',
          gender: 'Male (58%), Female (42%)',
          location: 'US (48%), CA (22%), AU (11%)',
          interests: 'Fitness, Health, Nutrition'
        }
      },
      {
        name: 'Emily Rodriguez',
        handle: '@emilylifestyle',
        platform: 'TikTok',
        tier: 'Macro',
        followers: 1200000,
        avgViews: 980000,
        engagementRate: 12.4,
        niche: 'Lifestyle',
        location: 'Miami, FL',
        activeCampaigns: 4,
        totalEarnings: 76000,
        lastPost: '1 hour ago',
        performanceScore: 88.7,
        brandFit: 'GOOD',
        reliability: 89.4,
        audienceQuality: 85.7,
        contentQuality: 91.2,
        growthRate: 34.5,
        avgCPE: 0.31,
        conversions: 145,
        reach: 1020000,
        impressions: 2890000,
        saves: 67800,
        shares: 34500,
        comments: 78900,
        likes: 234500,
        demographics: {
          age: '16-24 (67%), 25-34 (23%)',
          gender: 'Female (73%), Male (27%)',
          location: 'US (45%), MX (18%), BR (12%)',
          interests: 'Lifestyle, Fashion, Beauty'
        }
      },
      {
        name: 'David Kim',
        handle: '@davidcooks',
        platform: 'Instagram',
        tier: 'Mid',
        followers: 450000,
        avgViews: 180000,
        engagementRate: 9.3,
        niche: 'Food',
        location: 'New York, NY',
        activeCampaigns: 2,
        totalEarnings: 34000,
        lastPost: '3 hours ago',
        performanceScore: 86.9,
        brandFit: 'GOOD',
        reliability: 92.1,
        audienceQuality: 87.3,
        contentQuality: 88.9,
        growthRate: 15.2,
        avgCPE: 0.28,
        conversions: 89,
        reach: 382500,
        impressions: 675000,
        saves: 18900,
        shares: 4500,
        comments: 12300,
        likes: 67800,
        demographics: {
          age: '25-44 (58%), 18-24 (28%)',
          gender: 'Female (54%), Male (46%)',
          location: 'US (56%), CA (19%), UK (9%)',
          interests: 'Food, Cooking, Restaurants'
        }
      }
    ],
    activeCampaigns: [
      {
        name: 'AI Marketing Tools Spring Launch',
        brand: 'TechFlow Solutions',
        status: 'ACTIVE',
        startDate: '2026-03-10',
        endDate: '2026-03-24',
        budget: 125000,
        spent: 67800,
        influencers: 12,
        platforms: ['Instagram', 'YouTube', 'TikTok'],
        targetReach: 5000000,
        actualReach: 3456789,
        impressions: 8900000,
        engagements: 234567,
        engagementRate: 6.8,
        clicks: 45678,
        conversions: 1234,
        conversionRate: 2.7,
        revenue: 234567,
        roi: 346.2,
        cpe: 0.29,
        cpa: 54.90,
        brandMentions: 456,
        ugcGenerated: 89,
        videoViews: 2345678,
        topPerformer: 'Sarah Chen',
        campaignType: 'Product Launch',
        objective: 'Brand Awareness + Sales',
        deliverables: 24,
        completed: 18,
        pending: 6,
        contentApproval: 89.5,
        onTime: 94.2
      },
      {
        name: 'Fitness Gear Summer Collection',
        brand: 'ActiveLife Pro',
        status: 'ACTIVE',
        startDate: '2026-03-15',
        endDate: '2026-04-15',
        budget: 89000,
        spent: 34500,
        influencers: 8,
        platforms: ['YouTube', 'Instagram'],
        targetReach: 2500000,
        actualReach: 1234567,
        impressions: 3456789,
        engagements: 123456,
        engagementRate: 8.9,
        clicks: 23456,
        conversions: 567,
        conversionRate: 2.4,
        revenue: 123456,
        roi: 357.8,
        cpe: 0.28,
        cpa: 60.84,
        brandMentions: 234,
        ugcGenerated: 45,
        videoViews: 1234567,
        topPerformer: 'Marcus Johnson',
        campaignType: 'Product Promotion',
        objective: 'Sales + Engagement',
        deliverables: 16,
        completed: 8,
        pending: 8,
        contentApproval: 92.3,
        onTime: 87.5
      },
      {
        name: 'Lifestyle Brand Ambassador Program',
        brand: 'Zen Living Co',
        status: 'PLANNING',
        startDate: '2026-03-25',
        endDate: '2026-06-25',
        budget: 156000,
        spent: 0,
        influencers: 15,
        platforms: ['Instagram', 'TikTok', 'Pinterest'],
        targetReach: 8000000,
        actualReach: 0,
        impressions: 0,
        engagements: 0,
        engagementRate: 0,
        clicks: 0,
        conversions: 0,
        conversionRate: 0,
        revenue: 0,
        roi: 0,
        cpe: 0,
        cpa: 0,
        brandMentions: 0,
        ugcGenerated: 0,
        videoViews: 0,
        topPerformer: 'TBD',
        campaignType: 'Brand Ambassador',
        objective: 'Brand Awareness + Community',
        deliverables: 45,
        completed: 0,
        pending: 45,
        contentApproval: 0,
        onTime: 0
      }
    ],
    platformPerformance: [
      {
        platform: 'Instagram',
        influencers: 123,
        followers: 8900000,
        avgEngagement: 5.6,
        totalReach: 4567890,
        impressions: 12345678,
        clicks: 234567,
        conversions: 5678,
        revenue: 234567,
        roi: 456.7,
        topNiches: ['Lifestyle', 'Fashion', 'Food'],
        avgCPE: 0.32,
        avgCPA: 41.30,
        videoViews: 1234567,
        storyViews: 2345678,
        saves: 123456,
        shares: 45678,
        comments: 234567,
        brandMentions: 1234
      },
      {
        platform: 'TikTok',
        influencers: 89,
        followers: 6700000,
        avgEngagement: 11.2,
        totalReach: 3456789,
        impressions: 8900000,
        clicks: 156789,
        conversions: 3456,
        revenue: 156789,
        roi: 389.4,
        topNiches: ['Entertainment', 'Dance', 'Comedy'],
        avgCPE: 0.28,
        avgCPA: 45.38,
        videoViews: 3456789,
        storyViews: 0,
        saves: 78900,
        shares: 234567,
        comments: 567890,
        brandMentions: 789
      },
      {
        platform: 'YouTube',
        influencers: 67,
        followers: 4500000,
        avgEngagement: 7.8,
        totalReach: 2345678,
        impressions: 5678901,
        clicks: 123456,
        conversions: 2345,
        revenue: 123456,
        roi: 278.9,
        topNiches: ['Technology', 'Gaming', 'Education'],
        avgCPE: 0.35,
        avgCPA: 52.63,
        videoViews: 2345678,
        storyViews: 0,
        saves: 34567,
        shares: 67890,
        comments: 123456,
        brandMentions: 567
      },
      {
        platform: 'LinkedIn',
        influencers: 45,
        followers: 1200000,
        avgEngagement: 3.4,
        totalReach: 890123,
        impressions: 1234567,
        clicks: 45678,
        conversions: 1234,
        revenue: 67890,
        roi: 234.5,
        topNiches: ['Business', 'Technology', 'Marketing'],
        avgCPE: 0.42,
        avgCPA: 55.02,
        videoViews: 234567,
        storyViews: 0,
        saves: 12345,
        shares: 23456,
        comments: 34567,
        brandMentions: 234
      }
    ],
    contentPerformance: [
      {
        contentType: 'Reels/Short Videos',
        posts: 456,
        avgViews: 890000,
        avgEngagement: 9.2,
        avgReach: 780000,
        totalImpressions: 12345678,
        clicks: 123456,
        saves: 45678,
        shares: 23456,
        comments: 78901,
        completionRate: 67.8,
        avgCPE: 0.28,
        conversionRate: 3.4,
        revenue: 234567,
        topHashtags: ['#AIMarketing', '#TechReview', '#DigitalTips']
      },
      {
        contentType: 'Stories',
        posts: 789,
        avgViews: 450000,
        avgEngagement: 4.1,
        avgReach: 380000,
        totalImpressions: 5678901,
        clicks: 67890,
        saves: 12345,
        shares: 8901,
        comments: 23456,
        completionRate: 45.6,
        avgCPE: 0.35,
        conversionRate: 2.8,
        revenue: 123456,
        topHashtags: ['#BehindTheScenes', '#Tutorial', '#ProductDemo']
      },
      {
        contentType: 'Feed Posts',
        posts: 234,
        avgViews: 320000,
        avgEngagement: 6.8,
        avgReach: 280000,
        totalImpressions: 3456789,
        clicks: 45678,
        saves: 23456,
        shares: 12345,
        comments: 34567,
        completionRate: 89.2,
        avgCPE: 0.31,
        conversionRate: 4.2,
        revenue: 156789,
        topHashtags: ['#ProductReview', '#Unboxing', '#Recommendation']
      },
      {
        contentType: 'Live Videos',
        posts: 67,
        avgViews: 180000,
        avgEngagement: 12.5,
        avgReach: 150000,
        totalImpressions: 890123,
        clicks: 23456,
        saves: 5678,
        shares: 3456,
        comments: 12345,
        completionRate: 23.4,
        avgCPE: 0.22,
        conversionRate: 5.6,
        revenue: 89012,
        topHashtags: ['#LiveDemo', '#QnA', '#ProductLaunch']
      }
    ],
    audienceInsights: {
      totalAudience: 23456789,
      uniqueReach: 18901234,
      avgAge: 28.4,
      topAgeGroups: [
        { range: '18-24', percentage: 34.5 },
        { range: '25-34', percentage: 42.8 },
        { range: '35-44', percentage: 15.7 },
        { range: '45+', percentage: 7.0 }
      ],
      genderDistribution: {
        female: 58.6,
        male: 39.2,
        nonBinary: 2.2
      },
      topLocations: [
        { country: 'United States', percentage: 45.2 },
        { country: 'Canada', percentage: 18.9 },
        { country: 'United Kingdom', percentage: 12.4 },
        { country: 'Australia', percentage: 8.7 },
        { country: 'Germany', percentage: 6.3 },
        { country: 'Other', percentage: 8.5 }
      ],
      topInterests: [
        'Technology (67%)',
        'Business (45%)',
        'Lifestyle (38%)',
        'Fashion (32%)',
        'Fitness (28%)',
        'Food (24%)',
        'Travel (21%)',
        'Gaming (18%)'
      ],
      devices: {
        mobile: 78.9,
        desktop: 18.4,
        tablet: 2.7
      },
      engagementTimes: [
        { time: '9:00 AM', engagement: 78 },
        { time: '12:00 PM', engagement: 85 },
        { time: '3:00 PM', engagement: 92 },
        { time: '6:00 PM', engagement: 95 },
        { time: '9:00 PM', engagement: 88 }
      ]
    },
    performanceAlerts: [
      {
        type: 'SUCCESS',
        category: 'Campaign Performance',
        message: 'AI Marketing Tools campaign exceeded ROI target by 73% - 346.2% vs 200% target',
        metric: 'Campaign ROI',
        value: '346.2%',
        change: '+73% above target',
        impact: 'MAJOR',
        timestamp: '07:25',
        campaign: 'AI Marketing Tools Spring Launch',
        influencer: 'Sarah Chen',
        recommendation: 'Extend campaign duration, increase budget allocation for top performers',
        urgency: 'HIGH',
        opportunity: 'SCALE'
      },
      {
        type: 'WARNING',
        category: 'Content Approval',
        message: 'Fitness Gear campaign content approval rate dropped to 87.5% from 95% target',
        metric: 'Content Approval Rate',
        value: '87.5%',
        change: '-7.5% below target',
        impact: 'MODERATE',
        timestamp: '07:22',
        campaign: 'Fitness Gear Summer Collection',
        affectedInfluencers: 3,
        recommendation: 'Review brand guidelines, provide clearer creative direction',
        urgency: 'MEDIUM',
        technicalAction: 'REVIEW_GUIDELINES'
      },
      {
        type: 'INFO',
        category: 'Influencer Growth',
        message: 'Emily Rodriguez gained 45K followers (+3.8%) this week with 34.5% growth rate',
        metric: 'Follower Growth',
        value: '+45K',
        change: '+34.5% growth rate',
        impact: 'POSITIVE',
        timestamp: '07:20',
        influencer: 'Emily Rodriguez',
        platform: 'TikTok',
        recommendation: 'Consider increased investment, negotiate better rates while growth continues',
        urgency: 'LOW',
        opportunity: 'LEVERAGE_GROWTH'
      },
      {
        type: 'CRITICAL',
        category: 'Conversion Performance',
        message: 'LinkedIn campaign conversion rate dropped 67% - urgent optimization needed',
        metric: 'Conversion Rate',
        value: '1.1%',
        change: '-67% from last campaign',
        impact: 'HIGH',
        timestamp: '07:26',
        platform: 'LinkedIn',
        affectedCampaigns: 2,
        recommendation: 'Pause underperforming content, A/B test new creative approaches',
        urgency: 'CRITICAL',
        escalation: 'STRATEGY_TEAM'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setInfluencerData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        campaignOverview: {
          ...prev.campaignOverview,
          totalReach: Math.max(12000000, Math.min(13000000, prev.campaignOverview.totalReach + Math.floor((Math.random() - 0.5) * 50000))),
          avgEngagementRate: Math.max(4.5, Math.min(5.2, prev.campaignOverview.avgEngagementRate + (Math.random() - 0.5) * 0.1)),
          avgROI: Math.max(550, Math.min(620, prev.campaignOverview.avgROI + (Math.random() - 0.5) * 10))
        }
      }));
    }, 15000);

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

  const getTierColor = (tier) => {
    switch (tier) {
      case 'Mega': return 'text-purple-400 bg-purple-400/20';
      case 'Macro': return 'text-blue-400 bg-blue-400/20';
      case 'Mid': return 'text-green-400 bg-green-400/20';
      case 'Micro': return 'text-yellow-400 bg-yellow-400/20';
      case 'Nano': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'Instagram': return 'text-pink-400 bg-pink-400/20';
      case 'TikTok': return 'text-red-400 bg-red-400/20';
      case 'YouTube': return 'text-red-500 bg-red-500/20';
      case 'LinkedIn': return 'text-blue-500 bg-blue-500/20';
      case 'Twitter': return 'text-cyan-400 bg-cyan-400/20';
      case 'Pinterest': return 'text-red-300 bg-red-300/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400';
      case 'PLANNING': return 'text-yellow-400';
      case 'COMPLETED': return 'text-blue-400';
      case 'PAUSED': return 'text-orange-400';
      case 'CANCELLED': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getBrandFitColor = (fit) => {
    switch (fit) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
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
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;
  const formatCPE = (cpe) => `$${cpe.toFixed(2)}`;

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Influencer Marketing Intelligence Center</h1>
              <p className="text-purple-300">Creator analytics, partnership tracking & campaign performance</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{influencerData.currentTime}</div>
            <div className="text-purple-300">Influencer Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Campaign Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Influencers
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(influencerData.campaignOverview.activeInfluencers)}</div>
            <div className="text-purple-300 text-sm">{formatNumber(influencerData.campaignOverview.totalInfluencers)} Total • Active</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-pink-400 mr-2" />
                Reach
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatNumber(influencerData.campaignOverview.totalReach)}</div>
            <div className="text-pink-300 text-sm">{formatNumber(influencerData.campaignOverview.totalImpressions)} Impressions</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-red-400 mr-2" />
                Engagement
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(influencerData.campaignOverview.avgEngagementRate, 3, 6)}`}>
              {formatPercentage(influencerData.campaignOverview.avgEngagementRate)}
            </div>
            <div className="text-red-300 text-sm">{formatNumber(influencerData.campaignOverview.totalEngagements)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                ROI
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(influencerData.campaignOverview.avgROI)}</div>
            <div className="text-green-300 text-sm">Average Return</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(influencerData.campaignOverview.totalRevenue)}</div>
            <div className="text-cyan-300 text-sm">{formatCPE(influencerData.campaignOverview.costPerEngagement)} CPE</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Campaigns
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{influencerData.campaignOverview.activeCampaigns}</div>
            <div className="text-yellow-300 text-sm">Active Now</div>
          </div>
        </div>

        {/* Top Influencers */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Star className="w-5 h-5 text-purple-400 mr-2" />
            Top Performing Influencers
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Creator</th>
                  <th className="text-center p-3 text-slate-300">Followers</th>
                  <th className="text-center p-3 text-slate-300">Engagement</th>
                  <th className="text-center p-3 text-slate-300">Campaigns</th>
                  <th className="text-center p-3 text-slate-300">Earnings</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                </tr>
              </thead>
              <tbody>
                {influencerData.topInfluencers.map((influencer, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{influencer.name}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-slate-400 text-sm">{influencer.handle}</span>
                        <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(influencer.platform)}`}>
                          {influencer.platform}
                        </span>
                        <span className={`px-2 py-1 rounded text-xs ${getTierColor(influencer.tier)}`}>
                          {influencer.tier}
                        </span>
                      </div>
                      <div className="text-slate-400 text-xs mt-1">
                        {influencer.niche} • {influencer.location}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-purple-400 font-medium">{formatNumber(influencer.followers)}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(influencer.avgViews)} avg views</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(influencer.engagementRate, 3, 6)}`}>
                      {formatPercentage(influencer.engagementRate)}
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-pink-400 font-medium">{influencer.activeCampaigns}</div>
                      <div className="text-slate-400 text-xs">Active</div>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(influencer.totalEarnings)}</td>
                    <td className="p-3 text-center">
                      <div className={`text-sm font-medium ${getScoreColor(influencer.performanceScore, 70, 85)}`}>
                        {influencer.performanceScore.toFixed(1)}
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${getBrandFitColor(influencer.brandFit)}`}>
                        {influencer.brandFit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Active Campaigns & Platform Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-cyan-400 mr-2" />
              Active Campaign Intelligence
            </h3>
            <div className="space-y-4">
              {influencerData.activeCampaigns.map((campaign, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{campaign.name}</span>
                      <span className={`text-sm ${getStatusColor(campaign.status)}`}>{campaign.status}</span>
                    </div>
                    <div className="text-slate-400 text-xs">{campaign.endDate}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Budget: {formatCurrency(campaign.budget)}</div>
                    <div className="text-pink-400">Spent: {formatCurrency(campaign.spent)}</div>
                    <div className="text-green-400">ROI: {formatPercentage(campaign.roi)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Reach: {formatNumber(campaign.actualReach)}</div>
                    <div className="text-cyan-400">Engagement: {formatPercentage(campaign.engagementRate)}</div>
                    <div className="text-yellow-400">Conv: {formatPercentage(campaign.conversionRate)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Top:</strong> {campaign.topPerformer} • <strong>Influencers:</strong> {campaign.influencers} • <strong>Deliverables:</strong> {campaign.completed}/{campaign.deliverables}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Share className="w-5 h-5 text-pink-400 mr-2" />
              Platform Performance Analytics
            </h3>
            <div className="space-y-4">
              {influencerData.platformPerformance.map((platform, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(platform.platform)}`}>
                        {platform.platform}
                      </span>
                      <span className="text-white text-sm">{platform.influencers} creators</span>
                    </div>
                    <span className={`text-sm ${getScoreColor(platform.avgEngagement, 3, 6)}`}>
                      {formatPercentage(platform.avgEngagement)} Engagement
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Followers: {formatNumber(platform.followers)}</div>
                    <div className="text-blue-400">Reach: {formatNumber(platform.totalReach)}</div>
                    <div className="text-green-400">Revenue: {formatCurrency(platform.revenue)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">ROI: {formatPercentage(platform.roi)}</div>
                    <div className="text-orange-400">CPE: {formatCPE(platform.avgCPE)}</div>
                    <div className="text-pink-400">Views: {formatNumber(platform.videoViews)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Top Niches:</strong> {platform.topNiches.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Performance & Audience Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              Content Performance Intelligence
            </h3>
            <div className="space-y-4">
              {influencerData.contentPerformance.map((content, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{content.contentType}</span>
                    <span className={`text-sm ${getScoreColor(content.avgEngagement, 3, 6)}`}>
                      {formatPercentage(content.avgEngagement)} Engagement
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Posts: {content.posts}</div>
                    <div className="text-blue-400">Avg Views: {formatNumber(content.avgViews)}</div>
                    <div className="text-green-400">Revenue: {formatCurrency(content.revenue)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Saves: {formatNumber(content.saves)}</div>
                    <div className="text-pink-400">Shares: {formatNumber(content.shares)}</div>
                    <div className="text-orange-400">Conv: {formatPercentage(content.conversionRate)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Top Tags:</strong> {content.topHashtags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              Audience Intelligence Analytics
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Total Audience Reach</h4>
                <div className="text-center mb-3">
                  <div className="text-2xl font-bold text-blue-400">{formatNumber(influencerData.audienceInsights.totalAudience)}</div>
                  <div className="text-slate-300 text-sm">{formatNumber(influencerData.audienceInsights.uniqueReach)} Unique • Avg Age {influencerData.audienceInsights.avgAge}</div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {influencerData.audienceInsights.topAgeGroups.slice(0, 4).map((age, index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-2 text-center">
                      <div className="text-purple-400 font-bold">{formatPercentage(age.percentage)}</div>
                      <div className="text-slate-300">{age.range}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Demographics & Interests</h4>
                <div className="space-y-2">
                  <div className="bg-slate-600/30 rounded p-2">
                    <div className="text-slate-300 text-xs mb-1">Gender Distribution</div>
                    <div className="grid grid-cols-3 gap-1 text-xs">
                      <div className="text-pink-400">F: {formatPercentage(influencerData.audienceInsights.genderDistribution.female)}</div>
                      <div className="text-blue-400">M: {formatPercentage(influencerData.audienceInsights.genderDistribution.male)}</div>
                      <div className="text-purple-400">NB: {formatPercentage(influencerData.audienceInsights.genderDistribution.nonBinary)}</div>
                    </div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2">
                    <div className="text-slate-300 text-xs mb-1">Top Locations</div>
                    <div className="space-y-1">
                      {influencerData.audienceInsights.topLocations.slice(0, 3).map((location, index) => (
                        <div key={index} className="flex justify-between text-xs">
                          <span className="text-cyan-400">{location.country}</span>
                          <span className="text-slate-400">{formatPercentage(location.percentage)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Top Interests</h4>
                <div className="flex flex-wrap gap-1">
                  {influencerData.audienceInsights.topInterests.slice(0, 8).map((interest, index) => (
                    <span key={index} className="px-2 py-1 bg-slate-600/30 rounded text-xs text-green-400">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Award className="w-5 h-5 text-yellow-400 mr-2" />
            Influencer Marketing Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {influencerData.performanceAlerts.map((alert, index) => (
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
                    {alert.influencer && <div className="text-slate-300">Influencer: {alert.influencer}</div>}
                    {alert.platform && <div className="text-slate-300">Platform: {alert.platform}</div>}
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