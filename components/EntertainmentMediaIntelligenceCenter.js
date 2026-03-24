// Entertainment & Media Intelligence Center - Content Performance, Streaming Analytics, Gaming Intelligence & Creative Industry Operations
import { useState, useEffect } from 'react';
import { Play, Film, Gamepad2, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Radio } from 'lucide-react';

export default function EntertainmentMediaIntelligenceCenter() {
  const [mediaData, setMediaData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    entertainmentOverview: {
      totalContentLibrary: 234567,
      activeStreams: 45678,
      dailyViewers: 12345678,
      revenueToday: 23456789, // EUR
      contentCreators: 67890,
      liveEvents: 234,
      totalSubscribers: 87654321,
      contentHours: 456789,
      averageEngagement: 78.9,
      platformReach: 156789000,
      contentRating: 4.6,
      premiereEvents: 45,
      socialMentions: 987654,
      trendingContent: 123
    },
    streamingPlatforms: [
      {
        platform: 'Netflix Portugal',
        subscribers: 2345678,
        dailyHours: 12345678,
        topContent: 'Stranger Things 5',
        contentLibrary: 15678,
        originalContent: 2345,
        avgRating: 4.7,
        churnRate: 2.1,
        revenue: 45678901,
        marketShare: 34.7,
        concurrentViewers: 567890
      },
      {
        platform: 'Prime Video',
        subscribers: 1987654,
        dailyHours: 9876543,
        topContent: 'The Boys Season 4',
        contentLibrary: 12345,
        originalContent: 1876,
        avgRating: 4.5,
        churnRate: 2.8,
        revenue: 34567890,
        marketShare: 26.8,
        concurrentViewers: 456789
      },
      {
        platform: 'HBO Max',
        subscribers: 1456789,
        dailyHours: 7654321,
        topContent: 'House of Dragon S2',
        contentLibrary: 8765,
        originalContent: 1234,
        avgRating: 4.8,
        churnRate: 1.9,
        revenue: 28765432,
        marketShare: 19.6,
        concurrentViewers: 345678
      },
      {
        platform: 'Disney+',
        subscribers: 1123456,
        dailyHours: 5432109,
        topContent: 'The Mandalorian S4',
        contentLibrary: 6543,
        originalContent: 987,
        avgRating: 4.6,
        churnRate: 1.7,
        revenue: 23456789,
        marketShare: 15.1,
        concurrentViewers: 234567
      }
    ],
    contentPerformance: [
      {
        title: 'Stranger Things 5',
        type: 'TV Series',
        platform: 'Netflix',
        views: 45678901,
        rating: 9.2,
        engagement: 89.7,
        revenue: 12345678,
        demographics: { '18-24': 34.6, '25-34': 28.9, '35-44': 19.7, '45+': 16.8 },
        regions: { 'Portugal': 23.4, 'Brazil': 18.9, 'Spain': 15.6, 'Other': 42.1 },
        trend: 'RISING',
        duration: 8.5, // hours average watch time
        completionRate: 78.9
      },
      {
        title: 'The Batman 2',
        type: 'Movie',
        platform: 'HBO Max',
        views: 23456789,
        rating: 8.8,
        engagement: 92.3,
        revenue: 8765432,
        demographics: { '18-24': 28.9, '25-34': 31.2, '35-44': 23.4, '45+': 16.5 },
        regions: { 'Portugal': 19.8, 'USA': 34.6, 'UK': 12.7, 'Other': 32.9 },
        trend: 'STABLE',
        duration: 2.8,
        completionRate: 85.6
      },
      {
        title: 'Wednesday Season 2',
        type: 'TV Series',
        platform: 'Netflix',
        views: 34567890,
        rating: 8.9,
        engagement: 87.4,
        revenue: 9876543,
        demographics: { '18-24': 45.7, '25-34': 23.4, '35-44': 18.9, '45+': 12.0 },
        regions: { 'Portugal': 15.6, 'Global': 84.4 },
        trend: 'RISING',
        duration: 6.2,
        completionRate: 82.1
      },
      {
        title: 'Dune: Part Three',
        type: 'Movie',
        platform: 'Prime Video',
        views: 18765432,
        rating: 9.1,
        engagement: 94.2,
        revenue: 7654321,
        demographics: { '18-24': 31.2, '25-34': 35.7, '35-44': 21.8, '45+': 11.3 },
        regions: { 'Portugal': 12.4, 'Europe': 45.6, 'Global': 42.0 },
        trend: 'RISING',
        duration: 2.9,
        completionRate: 91.3
      }
    ],
    gamingIntelligence: {
      activeGames: 12456,
      dailyPlayers: 23456789,
      streamingHours: 345678,
      esportsEvents: 123,
      gameRevenue: 456789012, // EUR daily
      topGames: [
        { game: 'FC 25', players: 2345678, hours: 12345678, revenue: 45678901, platform: 'Multi-platform' },
        { game: 'Call of Duty: MW4', players: 1987654, hours: 9876543, revenue: 34567890, platform: 'Multi-platform' },
        { game: 'Fortnite', players: 1654321, hours: 8765432, revenue: 28765432, platform: 'Multi-platform' },
        { game: 'Minecraft', players: 1234567, hours: 6543210, revenue: 23456789, platform: 'Multi-platform' }
      ],
      esportsMetrics: {
        totalViewers: 45678901,
        liveEvents: 234,
        prizePool: 12345678, // EUR
        sponsorships: 87654321,
        streamingPlatforms: ['Twitch', 'YouTube Gaming', 'Facebook Gaming'],
        topTournaments: [
          { tournament: 'League of Legends Worlds', viewers: 12345678, prizePool: 2345678 },
          { tournament: 'CS2 Major', viewers: 8765432, prizePool: 1234567 },
          { tournament: 'Valorant Champions', viewers: 6543210, prizePool: 987654 }
        ]
      },
      mobileGaming: {
        dailyPlayers: 87654321,
        revenue: 234567890,
        downloads: 12345678,
        sessionLength: 23.4, // minutes
        retention: {
          day1: 78.9,
          day7: 45.6,
          day30: 23.4
        }
      }
    },
    socialMediaAnalytics: {
      totalFollowers: 456789012,
      dailyEngagement: 23456789,
      contentPosts: 123456,
      viralContent: 234,
      influencerCampaigns: 567,
      hashtagTrending: 89,
      platforms: [
        {
          platform: 'TikTok',
          followers: 123456789,
          engagement: 34567890,
          posts: 45678,
          viralContent: 89,
          avgViews: 234567,
          demographics: { '16-24': 45.7, '25-34': 28.9, '35-44': 15.6, '45+': 9.8 }
        },
        {
          platform: 'Instagram',
          followers: 98765432,
          engagement: 23456789,
          posts: 34567,
          viralContent: 67,
          avgViews: 187654,
          demographics: { '16-24': 38.9, '25-34': 31.2, '35-44': 19.7, '45+': 10.2 }
        },
        {
          platform: 'YouTube',
          followers: 87654321,
          engagement: 45678901,
          posts: 12345,
          viralContent: 45,
          avgViews: 345678,
          demographics: { '16-24': 32.4, '25-34': 28.7, '35-44': 22.1, '45+': 16.8 }
        },
        {
          platform: 'Twitter/X',
          followers: 76543210,
          engagement: 12345678,
          posts: 56789,
          viralContent: 23,
          avgViews: 123456,
          demographics: { '16-24': 28.9, '25-34': 34.6, '35-44': 23.7, '45+': 12.8 }
        }
      ],
      trendingTopics: [
        { topic: '#StrangerThings5', mentions: 2345678, sentiment: 'POSITIVE', growth: '+345%' },
        { topic: '#TheBatman2', mentions: 1876543, sentiment: 'POSITIVE', growth: '+234%' },
        { topic: '#FC25Launch', mentions: 1234567, sentiment: 'MIXED', growth: '+123%' },
        { topic: '#WednesdayS2', mentions: 987654, sentiment: 'POSITIVE', growth: '+567%' }
      ]
    },
    audienceAnalytics: {
      demographics: {
        age: {
          '16-24': 32.4,
          '25-34': 28.9,
          '35-44': 21.7,
          '45-54': 12.6,
          '55+': 4.4
        },
        gender: {
          'Male': 54.7,
          'Female': 43.2,
          'Non-binary': 2.1
        },
        location: {
          'Portugal': 23.4,
          'Brazil': 18.9,
          'Spain': 15.6,
          'France': 12.1,
          'Other': 30.0
        },
        interests: [
          { interest: 'Sci-Fi/Fantasy', percentage: 67.8 },
          { interest: 'Action/Adventure', percentage: 54.3 },
          { interest: 'Comedy', percentage: 45.7 },
          { interest: 'Drama', percentage: 38.9 },
          { interest: 'Horror', percentage: 23.4 },
          { interest: 'Documentary', percentage: 19.6 }
        ]
      },
      behaviorPatterns: {
        peakHours: [
          { time: '20:00-22:00', activity: 78.9 },
          { time: '22:00-24:00', activity: 89.7 },
          { time: '12:00-14:00', activity: 45.6 },
          { time: '14:00-16:00', activity: 34.2 }
        ],
        devicePreference: {
          'Smart TV': 45.7,
          'Mobile': 34.6,
          'Desktop': 12.8,
          'Tablet': 6.9
        },
        subscriptionBehavior: {
          'Premium': 67.8,
          'Standard': 23.4,
          'Basic': 8.8
        }
      }
    },
    liveEvents: [
      {
        event: 'Eurovision 2026 Final',
        type: 'Live Broadcast',
        platform: 'RTP Play',
        currentViewers: 12345678,
        peakViewers: 23456789,
        duration: 180, // minutes
        status: 'LIVE',
        engagement: 94.2,
        socialMentions: 2345678,
        countries: 37
      },
      {
        event: 'Champions League Final',
        type: 'Sports',
        platform: 'Sport TV',
        currentViewers: 8765432,
        peakViewers: 15678901,
        duration: 120,
        status: 'LIVE',
        engagement: 91.7,
        socialMentions: 1876543,
        countries: 23
      },
      {
        event: 'Gaming Championship',
        type: 'Esports',
        platform: 'Twitch',
        currentViewers: 2345678,
        peakViewers: 4567890,
        duration: 240,
        status: 'LIVE',
        engagement: 87.9,
        socialMentions: 987654,
        countries: 45
      }
    ],
    contentCreators: {
      totalCreators: 67890,
      topCreators: [
        {
          creator: 'Pedro Teixeira',
          platform: 'YouTube',
          subscribers: 2345678,
          monthlyViews: 45678901,
          revenue: 234567,
          category: 'Entertainment',
          engagement: 89.7,
          growth: '+23.4%'
        },
        {
          creator: 'Maria Silva',
          platform: 'TikTok',
          subscribers: 1876543,
          monthlyViews: 67890123,
          revenue: 187654,
          category: 'Lifestyle',
          engagement: 92.3,
          growth: '+45.6%'
        },
        {
          creator: 'GameMaster PT',
          platform: 'Twitch',
          subscribers: 987654,
          monthlyViews: 23456789,
          revenue: 156789,
          category: 'Gaming',
          engagement: 87.1,
          growth: '+67.8%'
        },
        {
          creator: 'Tech Review PT',
          platform: 'YouTube',
          subscribers: 765432,
          monthlyViews: 12345678,
          revenue: 123456,
          category: 'Technology',
          engagement: 85.4,
          growth: '+12.3%'
        }
      ],
      creatorMetrics: {
        averageSubscribers: 23456,
        totalMonthlyViews: 234567890,
        totalRevenue: 12345678,
        contentUploads: 123456,
        collaborations: 2345,
        brandDeals: 567
      }
    },
    monetization: {
      totalRevenue: 456789012, // EUR daily
      subscriptions: 234567890,
      advertising: 123456789,
      merchandise: 45678901,
      sponsorships: 34567890,
      liveEvents: 23456789,
      gaming: 87654321,
      revenueStreams: [
        { stream: 'Subscriptions', percentage: 51.4, revenue: 234567890 },
        { stream: 'Advertising', percentage: 27.1, revenue: 123456789 },
        { stream: 'Gaming/Microtransactions', percentage: 19.2, revenue: 87654321 },
        { stream: 'Merchandise', percentage: 10.0, revenue: 45678901 },
        { stream: 'Sponsorships', percentage: 7.6, revenue: 34567890 },
        { stream: 'Live Events', percentage: 5.1, revenue: 23456789 }
      ]
    },
    mediaAlerts: [
      {
        type: 'SUCCESS',
        category: 'Content Performance',
        message: 'Stranger Things 5 breaks all-time viewing record - 45M views in 24 hours',
        platform: 'Netflix Portugal',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '02:45',
        recommendations: ['Capitalize on momentum', 'Launch merchandising campaign', 'Plan sequel content']
      },
      {
        type: 'WARNING',
        category: 'Platform Issues',
        message: 'HBO Max experiencing buffering issues during peak hours - 15% user complaints',
        platform: 'HBO Max',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '02:40',
        recommendations: ['Scale server capacity', 'Optimize streaming infrastructure', 'Issue user communications']
      },
      {
        type: 'CRITICAL',
        category: 'Gaming Infrastructure',
        message: 'FC 25 servers overloaded - 2.3M players in queue, 25% connection failures',
        platform: 'EA Sports',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '02:50',
        recommendations: ['Emergency server scaling', 'Implement queue system', 'Player compensation plan']
      },
      {
        type: 'INFO',
        category: 'Social Trends',
        message: 'New viral dance challenge trending on TikTok - 234K posts in 6 hours',
        platform: 'TikTok',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '02:30',
        recommendations: ['Monitor brand opportunities', 'Engage influencers', 'Content creation possibilities']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMediaData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        entertainmentOverview: {
          ...prev.entertainmentOverview,
          activeStreams: Math.max(40000, Math.min(50000, prev.entertainmentOverview.activeStreams + Math.floor((Math.random() - 0.5) * 1000))),
          dailyViewers: Math.max(10000000, Math.min(15000000, prev.entertainmentOverview.dailyViewers + Math.floor((Math.random() - 0.5) * 50000)))
        },
        socialMediaAnalytics: {
          ...prev.socialMediaAnalytics,
          dailyEngagement: Math.max(20000000, Math.min(30000000, prev.socialMediaAnalytics.dailyEngagement + Math.floor((Math.random() - 0.5) * 100000)))
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

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'RISING': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'DECLINING': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
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

  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-pink-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <Play className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Entertainment & Media Intelligence Center</h1>
              <p className="text-purple-300">Content performance, streaming analytics, gaming intelligence & creative industry operations</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{mediaData.currentTime}</div>
            <div className="text-purple-300">Media Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Entertainment Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Film className="w-5 h-5 text-purple-400 mr-2" />
                Content Library
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(mediaData.entertainmentOverview.totalContentLibrary)}</div>
            <div className="text-purple-300 text-sm">Active Streams: {formatNumber(mediaData.entertainmentOverview.activeStreams)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-blue-400 mr-2" />
                Daily Viewers
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(mediaData.entertainmentOverview.dailyViewers)}</div>
            <div className="text-blue-300 text-sm">Platform Reach: {formatNumber(mediaData.entertainmentOverview.platformReach)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Daily Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(mediaData.entertainmentOverview.revenueToday)}</div>
            <div className="text-green-300 text-sm">Subscribers: {formatNumber(mediaData.entertainmentOverview.totalSubscribers)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Gamepad2 className="w-5 h-5 text-orange-400 mr-2" />
                Content Creators
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(mediaData.entertainmentOverview.contentCreators)}</div>
            <div className="text-orange-300 text-sm">Live Events: {mediaData.entertainmentOverview.liveEvents}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-2" />
                Avg Rating
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{mediaData.entertainmentOverview.contentRating.toFixed(1)}</div>
            <div className="text-yellow-300 text-sm">Engagement: {formatPercentage(mediaData.entertainmentOverview.averageEngagement)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Radio className="w-5 h-5 text-pink-400 mr-2" />
                Social Mentions
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatNumber(mediaData.entertainmentOverview.socialMentions)}</div>
            <div className="text-pink-300 text-sm">Trending: {mediaData.entertainmentOverview.trendingContent}</div>
          </div>
        </div>

        {/* Streaming Platforms Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Play className="w-5 h-5 text-purple-400 mr-2" />
            Streaming Platforms Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Platform</th>
                  <th className="text-center p-3 text-slate-300">Subscribers</th>
                  <th className="text-center p-3 text-slate-300">Daily Hours</th>
                  <th className="text-center p-3 text-slate-300">Top Content</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                  <th className="text-center p-3 text-slate-300">Rating</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {mediaData.streamingPlatforms.map((platform, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{platform.platform}</div>
                      <div className="text-slate-400 text-xs">Live: {formatNumber(platform.concurrentViewers)}</div>
                    </td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(platform.subscribers)}</td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(platform.dailyHours)}</td>
                    <td className="p-3 text-center text-white text-sm">{platform.topContent}</td>
                    <td className="p-3 text-center text-green-400">{formatPercentage(platform.marketShare)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(platform.avgRating * 20, 80, 90)}`}>
                      {platform.avgRating.toFixed(1)}
                    </td>
                    <td className="p-3 text-center text-emerald-400">{formatCurrency(platform.revenue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Content Performance & Gaming Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Film className="w-5 h-5 text-pink-400 mr-2" />
              Top Content Performance
            </h3>
            <div className="space-y-4">
              {mediaData.contentPerformance.map((content, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{content.title}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {content.type}
                      </span>
                      <span className={`text-sm ${getTrendColor(content.trend)}`}>
                        {content.trend}
                      </span>
                    </div>
                    <span className="text-yellow-400 text-sm">★ {content.rating}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Views: {formatNumber(content.views)}</div>
                      <div className="text-green-400">Revenue: {formatCurrency(content.revenue)}</div>
                      <div className="text-purple-400">Engagement: {formatPercentage(content.engagement)}</div>
                    </div>
                    <div>
                      <div className="text-cyan-400">Duration: {content.duration}h avg</div>
                      <div className="text-orange-400">Completion: {formatPercentage(content.completionRate)}</div>
                      <div className="text-slate-400">Platform: {content.platform}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Demographics: {Object.entries(content.demographics).map(([age, pct]) => `${age}: ${pct}%`).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Gamepad2 className="w-5 h-5 text-orange-400 mr-2" />
              Gaming Intelligence Hub
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatNumber(mediaData.gamingIntelligence.dailyPlayers)}</div>
                <div className="text-orange-300 text-sm">Daily Players</div>
                <div className="text-gray-400 text-xs mt-1">Active Games: {formatNumber(mediaData.gamingIntelligence.activeGames)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(mediaData.gamingIntelligence.gameRevenue)}</div>
                <div className="text-green-300 text-sm">Daily Revenue</div>
                <div className="text-gray-400 text-xs mt-1">Esports Events: {mediaData.gamingIntelligence.esportsEvents}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Top Games</h4>
              {mediaData.gamingIntelligence.topGames.slice(0, 4).map((game, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                  <div>
                    <div className="text-white text-sm font-medium">{game.game}</div>
                    <div className="text-slate-400 text-xs">{game.platform}</div>
                  </div>
                  <div className="text-right text-xs">
                    <div className="text-blue-400">{formatNumber(game.players)} players</div>
                    <div className="text-green-400">{formatCurrency(game.revenue)}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
              <h4 className="text-white text-sm font-medium mb-2">Mobile Gaming</h4>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="text-blue-400">Players: {formatNumber(mediaData.gamingIntelligence.mobileGaming.dailyPlayers)}</div>
                  <div className="text-green-400">Revenue: {formatCurrency(mediaData.gamingIntelligence.mobileGaming.revenue)}</div>
                  <div className="text-purple-400">Downloads: {formatNumber(mediaData.gamingIntelligence.mobileGaming.downloads)}</div>
                </div>
                <div>
                  <div className="text-orange-400">Session: {mediaData.gamingIntelligence.mobileGaming.sessionLength}min</div>
                  <div className="text-cyan-400">D1 Retention: {formatPercentage(mediaData.gamingIntelligence.mobileGaming.retention.day1)}</div>
                  <div className="text-yellow-400">D30 Retention: {formatPercentage(mediaData.gamingIntelligence.mobileGaming.retention.day30)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Analytics & Live Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Radio className="w-5 h-5 text-pink-400 mr-2" />
              Social Media Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-400">{formatNumber(mediaData.socialMediaAnalytics.totalFollowers)}</div>
                <div className="text-pink-300 text-sm">Total Followers</div>
                <div className="text-gray-400 text-xs mt-1">Daily Engagement: {formatNumber(mediaData.socialMediaAnalytics.dailyEngagement)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{mediaData.socialMediaAnalytics.viralContent}</div>
                <div className="text-cyan-300 text-sm">Viral Content</div>
                <div className="text-gray-400 text-xs mt-1">Trending: #{mediaData.socialMediaAnalytics.hashtagTrending}</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Platform Performance</h4>
              {mediaData.socialMediaAnalytics.platforms.slice(0, 4).map((platform, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-white text-sm">{platform.platform}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-blue-400">{formatNumber(platform.followers)}</span>
                    <span className="text-green-400">{formatNumber(platform.engagement)}</span>
                    <span className="text-orange-400">{platform.viralContent} viral</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Trending Topics</h4>
              {mediaData.socialMediaAnalytics.trendingTopics.slice(0, 3).map((topic, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-white text-sm">{topic.topic}</span>
                  <div className="text-xs space-x-2">
                    <span className="text-cyan-400">{formatNumber(topic.mentions)}</span>
                    <span className="text-green-400">{topic.growth}</span>
                    <span className={`${topic.sentiment === 'POSITIVE' ? 'text-green-400' : topic.sentiment === 'MIXED' ? 'text-yellow-400' : 'text-red-400'}`}>
                      {topic.sentiment}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-red-400 mr-2" />
              Live Events Intelligence
            </h3>
            <div className="space-y-4">
              {mediaData.liveEvents.map((event, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{event.event}</span>
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs animate-pulse">
                        {event.status}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">★ {formatPercentage(event.engagement)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Current: {formatNumber(event.currentViewers)}</div>
                      <div className="text-purple-400">Peak: {formatNumber(event.peakViewers)}</div>
                      <div className="text-orange-400">Duration: {event.duration} min</div>
                    </div>
                    <div>
                      <div className="text-cyan-400">Platform: {event.platform}</div>
                      <div className="text-pink-400">Mentions: {formatNumber(event.socialMentions)}</div>
                      <div className="text-slate-400">Countries: {event.countries}</div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Type: {event.type}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Media Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Entertainment & Media Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {mediaData.mediaAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Platform: {alert.platform}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
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

        {/* Revenue Analytics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
            Entertainment Revenue Intelligence
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{formatCurrency(mediaData.monetization.totalRevenue)}</div>
              <div className="text-green-300 text-sm">Total Daily Revenue</div>
              <div className="text-gray-400 text-xs mt-1">All Sources Combined</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{formatCurrency(mediaData.monetization.subscriptions)}</div>
              <div className="text-blue-300 text-sm">Subscriptions</div>
              <div className="text-gray-400 text-xs mt-1">51.4% of total revenue</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-400">{formatCurrency(mediaData.monetization.advertising)}</div>
              <div className="text-orange-300 text-sm">Advertising</div>
              <div className="text-gray-400 text-xs mt-1">27.1% of total revenue</div>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <h4 className="text-white text-sm font-medium">Revenue Streams</h4>
            {mediaData.monetization.revenueStreams.slice(0, 6).map((stream, index) => (
              <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-white text-sm">{stream.stream}</span>
                <div className="text-xs space-x-4">
                  <span className="text-cyan-400">{formatPercentage(stream.percentage)}</span>
                  <span className="text-green-400">{formatCurrency(stream.revenue)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}