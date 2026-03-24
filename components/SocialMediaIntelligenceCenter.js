// Social Media Intelligence Center - Platform Analytics, Engagement & Brand Intelligence Monitoring
import { useState, useEffect } from 'react';
import { MessageCircle, TrendingUp, TrendingDown, Users, Heart, Share, Eye, BarChart3, AlertTriangle, CheckCircle, Target, Zap } from 'lucide-react';

export default function SocialMediaIntelligenceCenter() {
  const [socialData, setSocialData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    platformOverview: {
      totalFollowers: 2456789,
      totalEngagement: 145678,
      totalImpressions: 45678901,
      totalReach: 12345678,
      brandMentions: 8901,
      sentimentScore: 78.4, // percentage positive
      engagementRate: 6.7, // percentage
      growthRate: 23.4, // monthly percentage
      viralityScore: 89.2,
      influenceScore: 67.8,
      conversationVolume: 23456,
      shareOfVoice: 34.5, // percentage in industry
      crisisRiskLevel: 'LOW',
      competitivePosition: 'STRONG',
      contentVelocity: 234, // posts per day
      responseTime: 8.4 // minutes average
    },
    platformMetrics: [
      {
        platform: 'Instagram',
        followers: 567890,
        engagementRate: 8.9,
        impressions: 12345678,
        reach: 3456789,
        posts: 45,
        stories: 23,
        reels: 34,
        lives: 5,
        saves: 23456,
        shares: 12345,
        comments: 34567,
        likes: 234567,
        growth: 28.4,
        bestTime: '19:00-21:00',
        topHashtags: ['#marketing', '#ai', '#digital', '#business', '#growth'],
        audienceAge: '25-34',
        audienceGender: '62% F / 38% M',
        contentPerformance: 92.3,
        storyViews: 123456,
        profileVisits: 45678
      },
      {
        platform: 'LinkedIn',
        followers: 234567,
        engagementRate: 5.8,
        impressions: 8901234,
        reach: 2345678,
        posts: 23,
        articles: 5,
        videos: 12,
        polls: 3,
        saves: 12345,
        shares: 23456,
        comments: 15678,
        likes: 123456,
        growth: 34.7,
        bestTime: '08:00-10:00',
        topHashtags: ['#leadership', '#innovation', '#technology', '#business', '#professional'],
        audienceAge: '35-44',
        audienceGender: '58% M / 42% F',
        contentPerformance: 87.6,
        profileViews: 34567,
        searchAppearances: 56789
      },
      {
        platform: 'Twitter',
        followers: 345678,
        engagementRate: 4.2,
        impressions: 6789012,
        reach: 1890123,
        tweets: 67,
        retweets: 12345,
        replies: 8901,
        quotes: 2345,
        saves: 5678,
        shares: 9012,
        comments: 11234,
        likes: 89012,
        growth: 19.8,
        bestTime: '12:00-14:00',
        topHashtags: ['#tech', '#startup', '#innovation', '#AI', '#digital'],
        audienceAge: '25-34',
        audienceGender: '65% M / 35% F',
        contentPerformance: 83.4,
        profileVisits: 23456,
        mentions: 4567
      },
      {
        platform: 'TikTok',
        followers: 789012,
        engagementRate: 12.4,
        impressions: 15678901,
        reach: 4567890,
        videos: 34,
        totalViews: 5678901,
        totalLikes: 456789,
        totalShares: 78901,
        totalComments: 123456,
        saves: 34567,
        shares: 45678,
        comments: 67890,
        likes: 345678,
        growth: 67.3,
        bestTime: '18:00-20:00',
        topHashtags: ['#fyp', '#viral', '#trending', '#marketing', '#business'],
        audienceAge: '18-24',
        audienceGender: '68% F / 32% M',
        contentPerformance: 95.7,
        profileViews: 89012,
        duets: 1234
      },
      {
        platform: 'YouTube',
        followers: 456789,
        engagementRate: 7.6,
        impressions: 23456789,
        reach: 6789012,
        videos: 12,
        totalViews: 3456789,
        totalLikes: 234567,
        totalShares: 45678,
        totalComments: 78901,
        saves: 23456,
        shares: 34567,
        comments: 45678,
        likes: 123456,
        growth: 45.2,
        bestTime: '20:00-22:00',
        topHashtags: ['#tutorial', '#marketing', '#business', '#education', '#how-to'],
        audienceAge: '25-34',
        audienceGender: '55% M / 45% F',
        contentPerformance: 91.8,
        subscriptions: 12345,
        watchTime: 234567 // minutes
      },
      {
        platform: 'Facebook',
        followers: 123456,
        engagementRate: 3.9,
        impressions: 4567890,
        reach: 1234567,
        posts: 18,
        videos: 8,
        photos: 15,
        stories: 12,
        saves: 8901,
        shares: 12345,
        comments: 23456,
        likes: 78901,
        growth: 12.7,
        bestTime: '15:00-17:00',
        topHashtags: ['#business', '#marketing', '#community', '#updates', '#news'],
        audienceAge: '35-44',
        audienceGender: '52% F / 48% M',
        contentPerformance: 76.3,
        profileVisits: 12345,
        pageViews: 23456
      }
    ],
    contentAnalytics: {
      topPerformingPosts: [
        {
          platform: 'TikTok',
          type: 'Video',
          content: 'AI Marketing Strategy Breakdown',
          views: 2345678,
          engagement: 234567,
          engagementRate: 15.8,
          likes: 189012,
          shares: 23456,
          comments: 12345,
          saves: 9876,
          reach: 1890123,
          impressions: 3456789,
          viralityScore: 94.7,
          sentiment: 'POSITIVE',
          hashtagsUsed: ['#aimarketing', '#strategy', '#business', '#viral', '#growth'],
          postedAt: '2026-03-17 19:30',
          ageGroup: '18-24'
        },
        {
          platform: 'LinkedIn',
          type: 'Carousel',
          content: '10 LinkedIn Growth Hacks That Actually Work',
          views: 456789,
          engagement: 45678,
          engagementRate: 12.4,
          likes: 34567,
          shares: 6789,
          comments: 3456,
          saves: 867,
          reach: 234567,
          impressions: 678901,
          viralityScore: 87.3,
          sentiment: 'POSITIVE',
          hashtagsUsed: ['#linkedintips', '#networking', '#growth', '#professional', '#career'],
          postedAt: '2026-03-17 09:15',
          ageGroup: '25-34'
        },
        {
          platform: 'Instagram',
          type: 'Reel',
          content: 'Behind the Scenes: AI-Powered Content Creation',
          views: 789012,
          engagement: 78901,
          engagementRate: 11.7,
          likes: 67890,
          shares: 5678,
          comments: 4321,
          saves: 1012,
          reach: 456789,
          impressions: 923456,
          viralityScore: 89.6,
          sentiment: 'POSITIVE',
          hashtagsUsed: ['#behindthescenes', '#ai', '#content', '#creator', '#marketing'],
          postedAt: '2026-03-17 18:45',
          ageGroup: '25-34'
        }
      ],
      contentTypes: {
        videos: { count: 89, avgEngagement: 9.4, totalViews: 5678901, performance: 92.3 },
        images: { count: 156, avgEngagement: 6.8, totalViews: 2345678, performance: 78.9 },
        carousels: { count: 34, avgEngagement: 8.7, totalViews: 1234567, performance: 85.6 },
        stories: { count: 245, avgEngagement: 5.2, totalViews: 3456789, performance: 67.4 },
        reels: { count: 67, avgEngagement: 11.8, totalViews: 4567890, performance: 94.7 },
        lives: { count: 12, avgEngagement: 15.6, totalViews: 789012, performance: 87.3 },
        articles: { count: 23, avgEngagement: 7.9, totalViews: 567890, performance: 81.2 },
        polls: { count: 18, avgEngagement: 6.4, totalViews: 345678, performance: 73.8 }
      },
      hashtagAnalytics: [
        { hashtag: '#aimarketing', uses: 234, avgEngagement: 12.4, reach: 567890, trending: true, growth: 45.6 },
        { hashtag: '#digital', uses: 189, avgEngagement: 8.9, reach: 345678, trending: true, growth: 28.7 },
        { hashtag: '#business', uses: 156, avgEngagement: 7.6, reach: 234567, trending: false, growth: 12.3 },
        { hashtag: '#marketing', uses: 198, avgEngagement: 9.8, reach: 456789, trending: true, growth: 34.5 },
        { hashtag: '#growth', uses: 134, avgEngagement: 11.2, reach: 289012, trending: true, growth: 56.8 }
      ]
    },
    brandMonitoring: {
      mentions: {
        total: 8901,
        positive: 6234,
        negative: 1234,
        neutral: 1433,
        sentiment: 78.4,
        volume24h: 234,
        trending: true,
        keyTopics: ['AI marketing', 'Innovation', 'Customer service', 'Product quality', 'Brand values'],
        influencerMentions: 45,
        mediaPickup: 12,
        ugcContent: 156,
        competitorMentions: 78
      },
      competitors: [
        {
          brand: 'CompetitorA',
          followers: 1234567,
          engagement: 5.6,
          sentiment: 67.8,
          shareOfVoice: 23.4,
          growth: 18.7,
          strongPlatforms: ['Instagram', 'TikTok'],
          weaknesses: ['LinkedIn', 'Twitter'],
          contentGaps: ['Educational', 'Behind-the-scenes'],
          threats: 'HIGH',
          opportunities: 'MEDIUM'
        },
        {
          brand: 'CompetitorB',
          followers: 987654,
          engagement: 4.2,
          sentiment: 72.3,
          shareOfVoice: 19.8,
          growth: 22.1,
          strongPlatforms: ['LinkedIn', 'YouTube'],
          weaknesses: ['TikTok', 'Instagram'],
          contentGaps: ['Viral content', 'User-generated'],
          threats: 'MEDIUM',
          opportunities: 'HIGH'
        },
        {
          brand: 'CompetitorC',
          followers: 2345678,
          engagement: 7.9,
          sentiment: 81.2,
          shareOfVoice: 34.7,
          growth: 45.3,
          strongPlatforms: ['TikTok', 'Instagram', 'YouTube'],
          weaknesses: ['Facebook', 'Twitter'],
          contentGaps: ['Professional content', 'B2B'],
          threats: 'CRITICAL',
          opportunities: 'LOW'
        }
      ],
      crisisAlerts: [
        {
          type: 'LOW',
          message: 'Slight increase in negative sentiment around product pricing',
          platform: 'Twitter',
          severity: 3,
          mentions: 23,
          impact: 'MINIMAL',
          actionRequired: false,
          timestamp: '06:35',
          trends: ['#expensive', '#pricing'],
          recommendation: 'Monitor for 24h, prepare pricing explanation content'
        },
        {
          type: 'INFO',
          message: 'Positive trend detected: users praising AI features',
          platform: 'LinkedIn',
          severity: 0,
          mentions: 67,
          impact: 'POSITIVE',
          actionRequired: false,
          timestamp: '06:28',
          trends: ['#innovation', '#aitools'],
          recommendation: 'Amplify positive sentiment with user testimonials'
        }
      ]
    },
    influencerAnalytics: {
      partnerships: [
        {
          influencer: '@TechInfluencer1',
          platform: 'Instagram',
          followers: 567890,
          engagementRate: 8.9,
          category: 'Technology',
          reachGenerated: 234567,
          engagementGenerated: 23456,
          roi: 340.5, // percentage
          campaignType: 'Product Review',
          contentDelivered: 3,
          contentPlanned: 5,
          performance: 'EXCELLENT',
          sentiment: 'POSITIVE',
          costPerEngagement: 0.45,
          brandAffinity: 92.3,
          audienceAlignment: 89.7,
          credibilityScore: 94.6
        },
        {
          influencer: '@BusinessGuru2',
          platform: 'LinkedIn',
          followers: 123456,
          engagementRate: 6.7,
          category: 'Business',
          reachGenerated: 89012,
          engagementGenerated: 8901,
          roi: 245.8,
          campaignType: 'Thought Leadership',
          contentDelivered: 2,
          contentPlanned: 3,
          performance: 'GOOD',
          sentiment: 'POSITIVE',
          costPerEngagement: 0.67,
          brandAffinity: 87.4,
          audienceAlignment: 91.2,
          credibilityScore: 89.8
        },
        {
          influencer: '@CreativeContent3',
          platform: 'TikTok',
          followers: 890123,
          engagementRate: 12.4,
          category: 'Creative',
          reachGenerated: 456789,
          engagementGenerated: 45678,
          roi: 478.9,
          campaignType: 'Brand Challenge',
          contentDelivered: 5,
          contentPlanned: 5,
          performance: 'OUTSTANDING',
          sentiment: 'POSITIVE',
          costPerEngagement: 0.23,
          brandAffinity: 96.7,
          audienceAlignment: 94.3,
          credibilityScore: 91.5
        }
      ],
      ugcCampaigns: {
        activeCampaigns: 3,
        totalSubmissions: 1234,
        approvedContent: 456,
        avgEngagement: 9.8,
        totalReach: 2345678,
        participationRate: 23.4,
        brandedHashtags: ['#MyBrandStory', '#AIInnovation', '#BehindTheBrand'],
        topContributors: 45,
        conversionRate: 12.7,
        costPerUGC: 23.45,
        qualityScore: 87.9,
        authenticityScore: 92.6
      }
    },
    socialListening: {
      keywordTracking: [
        { keyword: 'AI marketing', volume: 12345, sentiment: 82.4, trending: 'UP', change: '+23%' },
        { keyword: 'digital transformation', volume: 8901, sentiment: 76.8, trending: 'UP', change: '+15%' },
        { keyword: 'social media strategy', volume: 6789, sentiment: 71.2, trending: 'STABLE', change: '+2%' },
        { keyword: 'brand innovation', volume: 4567, sentiment: 89.6, trending: 'UP', change: '+34%' },
        { keyword: 'customer experience', volume: 3456, sentiment: 67.9, trending: 'DOWN', change: '-8%' }
      ],
      trendingTopics: [
        { topic: 'AI Content Creation', volume: 45678, growth: 127.5, platforms: ['TikTok', 'LinkedIn', 'YouTube'] },
        { topic: 'Sustainable Marketing', volume: 23456, growth: 89.3, platforms: ['Instagram', 'LinkedIn'] },
        { topic: 'Influencer Marketing ROI', volume: 34567, growth: 67.8, platforms: ['Twitter', 'LinkedIn'] },
        { topic: 'Social Commerce', volume: 56789, growth: 156.7, platforms: ['Instagram', 'TikTok', 'Facebook'] }
      ],
      emergingConversations: {
        newConversations: 23,
        viralPotential: 8,
        brandRelevance: 12,
        actionRequired: 3,
        monitoringAlerts: 5,
        opportunitySpots: 7,
        riskAssessments: 2,
        responseRecommendations: 4
      }
    },
    performanceAlerts: [
      {
        type: 'SUCCESS',
        platform: 'TikTok',
        message: 'Viral content alert: AI marketing video reached 2.3M views in 24h',
        metric: 'Views',
        value: '2,345,678',
        change: '+2,234%',
        impact: 'MAJOR',
        timestamp: '06:40',
        recommendation: 'Create follow-up content series, engage with comments, prepare for media inquiries',
        potentialReach: 5678901,
        estimatedValue: 12345,
        urgency: 'HIGH'
      },
      {
        type: 'WARNING',
        platform: 'Instagram',
        message: 'Engagement rate dropped 23% compared to last week average',
        metric: 'Engagement Rate',
        value: '6.8%',
        change: '-23%',
        impact: 'MODERATE',
        timestamp: '06:38',
        recommendation: 'Review content strategy, analyze audience insights, test new post types',
        potentialReach: 234567,
        estimatedValue: -1234,
        urgency: 'MEDIUM'
      },
      {
        type: 'INFO',
        platform: 'LinkedIn',
        message: 'Professional content performing 45% above average this month',
        metric: 'Post Performance',
        value: '145%',
        change: '+45%',
        impact: 'POSITIVE',
        timestamp: '06:35',
        recommendation: 'Increase professional content frequency, repurpose top performers',
        potentialReach: 123456,
        estimatedValue: 2345,
        urgency: 'LOW'
      },
      {
        type: 'CRITICAL',
        platform: 'Twitter',
        message: 'Negative sentiment spike detected - respond immediately',
        metric: 'Sentiment Score',
        value: '45%',
        change: '-34%',
        impact: 'HIGH',
        timestamp: '06:42',
        recommendation: 'Immediate response required, crisis management protocol, stakeholder notification',
        potentialReach: 456789,
        estimatedValue: -5678,
        urgency: 'CRITICAL'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSocialData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        platformOverview: {
          ...prev.platformOverview,
          totalEngagement: Math.max(140000, Math.min(150000, prev.platformOverview.totalEngagement + Math.floor((Math.random() - 0.5) * 1000))),
          sentimentScore: Math.max(75, Math.min(82, prev.platformOverview.sentimentScore + (Math.random() - 0.5) * 2)),
          engagementRate: Math.max(6.0, Math.min(7.5, prev.platformOverview.engagementRate + (Math.random() - 0.5) * 0.3)),
          brandMentions: Math.max(8800, Math.min(9200, prev.platformOverview.brandMentions + Math.floor((Math.random() - 0.5) * 50)))
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

  const getPlatformColor = (platform) => {
    switch (platform) {
      case 'Instagram': return 'text-pink-400 bg-pink-400/20';
      case 'LinkedIn': return 'text-blue-400 bg-blue-400/20';
      case 'Twitter': return 'text-cyan-400 bg-cyan-400/20';
      case 'TikTok': return 'text-purple-400 bg-purple-400/20';
      case 'YouTube': return 'text-red-400 bg-red-400/20';
      case 'Facebook': return 'text-indigo-400 bg-indigo-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 5.0, excellent = 8.0) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.6) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSentimentColor = (sentiment) => {
    if (sentiment >= 80) return 'text-green-400';
    if (sentiment >= 60) return 'text-blue-400';
    if (sentiment >= 40) return 'text-yellow-400';
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

  const getROIColor = (roi) => {
    if (roi >= 300) return 'text-green-400';
    if (roi >= 200) return 'text-blue-400';
    if (roi >= 100) return 'text-yellow-400';
    return 'text-red-400';
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

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Social Media Intelligence Center</h1>
              <p className="text-purple-300">Platform analytics, engagement & brand intelligence monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{socialData.currentTime}</div>
            <div className="text-purple-300">Social Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Social Media Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Followers
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(socialData.platformOverview.totalFollowers)}</div>
            <div className="text-purple-300 text-sm">Total Across Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-pink-400 mr-2" />
                Engagement
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatNumber(socialData.platformOverview.totalEngagement)}</div>
            <div className="text-pink-300 text-sm">{formatPercentage(socialData.platformOverview.engagementRate)} Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Impressions
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(socialData.platformOverview.totalImpressions)}</div>
            <div className="text-blue-300 text-sm">Total Views</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Reach
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(socialData.platformOverview.totalReach)}</div>
            <div className="text-green-300 text-sm">Unique Users</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MessageCircle className="w-5 h-5 text-orange-400 mr-2" />
                Mentions
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(socialData.platformOverview.brandMentions)}</div>
            <div className={`text-sm ${getSentimentColor(socialData.platformOverview.sentimentScore)}`}>
              {formatPercentage(socialData.platformOverview.sentimentScore)} Positive
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Growth
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(socialData.platformOverview.growthRate)}</div>
            <div className="text-cyan-300 text-sm">Monthly Growth</div>
          </div>
        </div>

        {/* Platform Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
            Platform Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Platform</th>
                  <th className="text-center p-3 text-slate-300">Followers</th>
                  <th className="text-center p-3 text-slate-300">Engagement</th>
                  <th className="text-center p-3 text-slate-300">Reach</th>
                  <th className="text-center p-3 text-slate-300">Growth</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Best Time</th>
                </tr>
              </thead>
              <tbody>
                {socialData.platformMetrics.map((platform, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(platform.platform)}`}>
                          {platform.platform}
                        </span>
                        <div className="text-slate-400 text-xs">{platform.audienceAge} • {platform.audienceGender}</div>
                      </div>
                    </td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(platform.followers)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(platform.engagementRate, 5.0, 8.0)}`}>
                      {formatPercentage(platform.engagementRate)}
                    </td>
                    <td className="p-3 text-center text-green-400">{formatNumber(platform.reach)}</td>
                    <td className="p-3 text-center text-cyan-400">{formatPercentage(platform.growth)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(platform.contentPerformance, 70, 85)}`}>
                      {formatPercentage(platform.contentPerformance)}
                    </td>
                    <td className="p-3 text-center text-slate-400 text-sm">{platform.bestTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Performing Content & Content Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Top Performing Content
            </h3>
            <div className="space-y-4">
              {socialData.contentAnalytics.topPerformingPosts.map((post, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(post.platform)}`}>
                        {post.platform}
                      </span>
                      <span className="text-slate-300 text-xs">{post.type}</span>
                    </div>
                    <span className="text-yellow-400 text-sm">Virality: {formatPercentage(post.viralityScore)}</span>
                  </div>
                  <div className="text-white text-sm font-medium mb-2">{post.content}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Views: {formatNumber(post.views)}</div>
                    <div className="text-pink-400">Engagement: {formatNumber(post.engagement)}</div>
                    <div className="text-green-400">Rate: {formatPercentage(post.engagementRate)}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-slate-400">❤️ {formatNumber(post.likes)}</div>
                    <div className="text-slate-400">🔄 {formatNumber(post.shares)}</div>
                    <div className="text-slate-400">💬 {formatNumber(post.comments)}</div>
                    <div className="text-slate-400">🔖 {formatNumber(post.saves)}</div>
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs">
                    <span className="text-slate-500">{post.postedAt}</span>
                    <span className={`${getSentimentColor(post.sentiment === 'POSITIVE' ? 85 : 45)}`}>
                      {post.sentiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
              Content Type Analytics
            </h3>
            <div className="space-y-3">
              {Object.entries(socialData.contentAnalytics.contentTypes).map(([type, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm font-medium capitalize">{type}</span>
                    <span className={`text-sm ${getPerformanceColor(data.performance, 70, 85)}`}>
                      {formatPercentage(data.performance)}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-blue-400">Count: {data.count}</div>
                    <div className="text-green-400">Avg Eng: {formatPercentage(data.avgEngagement)}</div>
                    <div className="text-purple-400">Views: {formatNumber(data.totalViews)}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="text-white text-sm font-medium mb-3">Trending Hashtags</h4>
              <div className="space-y-2">
                {socialData.contentAnalytics.hashtagAnalytics.map((hashtag, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2 text-xs">
                    <span className="text-blue-400">{hashtag.hashtag}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400">{formatPercentage(hashtag.avgEngagement)}</span>
                      <span className="text-purple-400">{formatNumber(hashtag.reach)}</span>
                      {hashtag.trending && <span className="text-yellow-400">🔥</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Brand Monitoring & Influencer Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-green-400 mr-2" />
              Brand Monitoring Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Brand Mentions Analysis</h4>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{formatNumber(socialData.brandMonitoring.mentions.total)}</div>
                    <div className="text-green-300 text-sm">Total Mentions</div>
                    <div className="text-gray-400 text-xs">{socialData.brandMonitoring.mentions.volume24h} in 24h</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getSentimentColor(socialData.brandMonitoring.mentions.sentiment)}`}>
                      {formatPercentage(socialData.brandMonitoring.mentions.sentiment)}
                    </div>
                    <div className="text-gray-300 text-sm">Positive Sentiment</div>
                    <div className="text-gray-400 text-xs">
                      {socialData.brandMonitoring.mentions.positive}+ / {socialData.brandMonitoring.mentions.negative}-
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h5 className="text-slate-300 text-xs font-medium">Key Topics:</h5>
                  <div className="flex flex-wrap gap-1">
                    {socialData.brandMonitoring.mentions.keyTopics.map((topic, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Competitive Intelligence</h4>
                <div className="space-y-2">
                  {socialData.brandMonitoring.competitors.map((competitor, index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-medium">{competitor.brand}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          competitor.threats === 'CRITICAL' ? 'bg-red-400/20 text-red-400' :
                          competitor.threats === 'HIGH' ? 'bg-orange-400/20 text-orange-400' :
                          'bg-yellow-400/20 text-yellow-400'
                        }`}>
                          {competitor.threats}
                        </span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-blue-400">Followers: {formatNumber(competitor.followers)}</div>
                        <div className="text-green-400">Engagement: {formatPercentage(competitor.engagement)}</div>
                        <div className="text-purple-400">Growth: {formatPercentage(competitor.growth)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-orange-400 mr-2" />
              Influencer Analytics
            </h3>
            <div className="space-y-4">
              {socialData.influencerAnalytics.partnerships.map((influencer, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{influencer.influencer}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(influencer.platform)}`}>
                        {influencer.platform}
                      </span>
                    </div>
                    <span className={`text-sm px-2 py-1 rounded ${
                      influencer.performance === 'OUTSTANDING' ? 'bg-green-400/20 text-green-400' :
                      influencer.performance === 'EXCELLENT' ? 'bg-blue-400/20 text-blue-400' :
                      'bg-yellow-400/20 text-yellow-400'
                    }`}>
                      {influencer.performance}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-purple-400">Followers: {formatNumber(influencer.followers)}</div>
                      <div className="text-green-400">Engagement: {formatPercentage(influencer.engagementRate)}</div>
                      <div className="text-blue-400">Reach: {formatNumber(influencer.reachGenerated)}</div>
                    </div>
                    <div>
                      <div className={`${getROIColor(influencer.roi)}`}>ROI: {formatPercentage(influencer.roi)}</div>
                      <div className="text-orange-400">Content: {influencer.contentDelivered}/{influencer.contentPlanned}</div>
                      <div className="text-cyan-400">Cost/Eng: €{influencer.costPerEngagement.toFixed(2)}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Campaign: {influencer.campaignType}</span>
                    <span className="text-slate-400">Affinity: {formatPercentage(influencer.brandAffinity)}</span>
                  </div>
                </div>
              ))}
              
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">User-Generated Content</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Active Campaigns</span>
                    <span className="text-blue-400">{socialData.influencerAnalytics.ugcCampaigns.activeCampaigns}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Submissions</span>
                    <span className="text-green-400">{formatNumber(socialData.influencerAnalytics.ugcCampaigns.totalSubmissions)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Participation Rate</span>
                    <span className="text-purple-400">{formatPercentage(socialData.influencerAnalytics.ugcCampaigns.participationRate)}</span>
                  </div>
                  <div className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                    <span className="text-slate-300">Quality Score</span>
                    <span className="text-orange-400">{formatPercentage(socialData.influencerAnalytics.ugcCampaigns.qualityScore)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Listening */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-cyan-400 mr-2" />
            Social Listening Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h4 className="text-white text-sm font-medium mb-3">Keyword Tracking</h4>
              <div className="space-y-2">
                {socialData.socialListening.keywordTracking.map((keyword, index) => (
                  <div key={index} className="bg-slate-700/30 rounded p-3 border border-slate-600/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm">{keyword.keyword}</span>
                      <span className={`text-xs ${keyword.trending === 'UP' ? 'text-green-400' : keyword.trending === 'DOWN' ? 'text-red-400' : 'text-yellow-400'}`}>
                        {keyword.change}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-blue-400">Volume: {formatNumber(keyword.volume)}</div>
                      <div className={`${getSentimentColor(keyword.sentiment)}`}>
                        Sentiment: {formatPercentage(keyword.sentiment)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white text-sm font-medium mb-3">Trending Topics</h4>
              <div className="space-y-2">
                {socialData.socialListening.trendingTopics.map((topic, index) => (
                  <div key={index} className="bg-slate-700/30 rounded p-3 border border-slate-600/30">
                    <div className="text-white text-sm font-medium mb-1">{topic.topic}</div>
                    <div className="text-green-400 text-sm mb-1">Growth: {formatPercentage(topic.growth)}</div>
                    <div className="text-blue-400 text-xs">Volume: {formatNumber(topic.volume)}</div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {topic.platforms.map((platform, pIndex) => (
                        <span key={pIndex} className={`px-1 py-0.5 rounded text-xs ${getPlatformColor(platform)}`}>
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white text-sm font-medium mb-3">Emerging Conversations</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-slate-700/30 rounded p-3 text-center border border-slate-600/30">
                  <div className="text-lg font-bold text-blue-400">{socialData.socialListening.emergingConversations.newConversations}</div>
                  <div className="text-slate-300 text-xs">New Topics</div>
                </div>
                <div className="bg-slate-700/30 rounded p-3 text-center border border-slate-600/30">
                  <div className="text-lg font-bold text-yellow-400">{socialData.socialListening.emergingConversations.viralPotential}</div>
                  <div className="text-slate-300 text-xs">Viral Potential</div>
                </div>
                <div className="bg-slate-700/30 rounded p-3 text-center border border-slate-600/30">
                  <div className="text-lg font-bold text-green-400">{socialData.socialListening.emergingConversations.brandRelevance}</div>
                  <div className="text-slate-300 text-xs">Brand Relevant</div>
                </div>
                <div className="bg-slate-700/30 rounded p-3 text-center border border-slate-600/30">
                  <div className="text-lg font-bold text-orange-400">{socialData.socialListening.emergingConversations.opportunitySpots}</div>
                  <div className="text-slate-300 text-xs">Opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Social Media Performance Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {socialData.performanceAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getPlatformColor(alert.platform)}`}>
                      {alert.platform}
                    </span>
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
                    <div className="text-slate-300">Reach: {formatNumber(alert.potentialReach)}</div>
                    <div className="text-slate-300">Value: €{alert.estimatedValue.toLocaleString()}</div>
                  </div>
                </div>
                <div className="text-slate-300 text-xs">
                  <strong>Recommendation:</strong> {alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}