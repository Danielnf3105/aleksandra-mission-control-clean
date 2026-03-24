// Content Intelligence Center - Content Management, Performance Analytics & Publishing Operations
import { useState, useEffect } from 'react';
import { FileText, TrendingUp, TrendingDown, Users, Eye, Calendar, BarChart3, AlertTriangle, CheckCircle, Target, Zap } from 'lucide-react';

export default function ContentIntelligenceCenter() {
  const [contentData, setContentData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    contentOverview: {
      totalContent: 12345,
      publishedContent: 8901,
      draftContent: 2345,
      scheduledContent: 567,
      archivedContent: 532,
      totalViews: 5678901,
      totalEngagement: 234567,
      avgEngagementRate: 4.8,
      totalShares: 89012,
      totalComments: 45678,
      contentVelocity: 23, // pieces per day
      avgContentLifespan: 45, // days
      contentROI: 340.5, // percentage
      seoScore: 78.4,
      readabilityScore: 82.6,
      duplicateContent: 2.3, // percentage
      contentGaps: 15,
      topicCoverage: 87.9 // percentage
    },
    contentTypes: [
      {
        type: 'Blog Posts',
        count: 3456,
        published: 2890,
        drafts: 456,
        scheduled: 110,
        avgWordCount: 1250,
        avgReadTime: 5.2, // minutes
        avgEngagement: 6.8,
        totalViews: 1234567,
        conversionRate: 3.4,
        seoScore: 85.6,
        socialShares: 23456,
        backlinks: 567,
        organicTraffic: 45.6, // percentage
        performance: 'EXCELLENT',
        topKeywords: ['AI marketing', 'digital strategy', 'automation']
      },
      {
        type: 'Video Content',
        count: 2345,
        published: 1890,
        drafts: 345,
        scheduled: 110,
        avgDuration: 8.5, // minutes
        avgWatchTime: 6.2, // minutes
        avgEngagement: 12.4,
        totalViews: 2345678,
        conversionRate: 5.8,
        seoScore: 72.3,
        socialShares: 45678,
        thumbnailCTR: 8.9, // percentage
        completionRate: 67.8, // percentage
        performance: 'GOOD',
        topKeywords: ['how-to', 'tutorial', 'marketing tips']
      },
      {
        type: 'Infographics',
        count: 1234,
        published: 987,
        drafts: 178,
        scheduled: 69,
        avgElements: 12,
        avgDesignTime: 4.5, // hours
        avgEngagement: 9.8,
        totalViews: 567890,
        conversionRate: 4.2,
        seoScore: 68.9,
        socialShares: 34567,
        downloads: 12345,
        embedShares: 2345,
        performance: 'GOOD',
        topKeywords: ['statistics', 'data visualization', 'trends']
      },
      {
        type: 'Social Posts',
        count: 4567,
        published: 4123,
        drafts: 234,
        scheduled: 210,
        avgCharacters: 156,
        avgHashtags: 8,
        avgEngagement: 5.6,
        totalViews: 1890123,
        conversionRate: 2.1,
        seoScore: 45.7,
        socialShares: 78901,
        clickThroughRate: 3.2, // percentage
        impressionShare: 23.4, // percentage
        performance: 'AVERAGE',
        topKeywords: ['trending', 'viral', 'engagement']
      },
      {
        type: 'Whitepapers',
        count: 234,
        published: 198,
        drafts: 28,
        scheduled: 8,
        avgWordCount: 5670,
        avgReadTime: 22.5, // minutes
        avgEngagement: 15.6,
        totalViews: 123456,
        conversionRate: 12.8,
        seoScore: 92.3,
        downloads: 23456,
        leadGeneration: 567,
        authorityScore: 89.4,
        performance: 'OUTSTANDING',
        topKeywords: ['industry report', 'research', 'insights']
      },
      {
        type: 'Case Studies',
        count: 156,
        published: 134,
        drafts: 18,
        scheduled: 4,
        avgWordCount: 2340,
        avgReadTime: 9.8, // minutes
        avgEngagement: 11.2,
        totalViews: 89012,
        conversionRate: 18.7,
        seoScore: 88.9,
        socialShares: 5678,
        leadGeneration: 234,
        trustScore: 94.6,
        performance: 'OUTSTANDING',
        topKeywords: ['success story', 'results', 'ROI']
      }
    ],
    editorialCalendar: {
      thisWeek: {
        published: 23,
        scheduled: 15,
        inReview: 8,
        inProgress: 12,
        planned: 18,
        overdue: 3
      },
      nextWeek: {
        scheduled: 28,
        inProgress: 16,
        planned: 22,
        deadlines: 12,
        reviewSlots: 8,
        approvalPending: 5
      },
      contentPipeline: {
        ideation: 45,
        research: 23,
        writing: 34,
        editing: 18,
        design: 12,
        review: 15,
        approval: 8,
        scheduling: 6
      },
      teamWorkload: {
        writers: { assigned: 156, capacity: 180, utilization: 86.7 },
        editors: { assigned: 89, capacity: 100, utilization: 89.0 },
        designers: { assigned: 45, capacity: 60, utilization: 75.0 },
        reviewers: { assigned: 67, capacity: 80, utilization: 83.8 }
      }
    },
    seoIntelligence: {
      organicTraffic: {
        totalSessions: 234567,
        organicSessions: 156789,
        organicPercentage: 66.9,
        keywordRankings: 12345,
        topRankingKeywords: 567,
        avgPosition: 8.9,
        clickThroughRate: 4.2,
        impressions: 2345678,
        featuredSnippets: 89,
        voiceSearchOptimized: 23.4, // percentage
        mobileOptimized: 94.6, // percentage
        pageSpeedScore: 87.3
      },
      contentGaps: [
        {
          topic: 'AI Content Creation',
          searchVolume: 45000,
          difficulty: 67,
          opportunity: 'HIGH',
          competition: 'MEDIUM',
          suggestedContent: 'Complete Guide to AI Content Tools',
          potentialTraffic: 12000,
          keywordVariations: 23,
          contentFormat: 'Long-form Blog Post',
          priority: 9
        },
        {
          topic: 'Marketing Automation ROI',
          searchVolume: 23000,
          difficulty: 54,
          opportunity: 'MEDIUM',
          competition: 'LOW',
          suggestedContent: 'Marketing Automation ROI Calculator',
          potentialTraffic: 8900,
          keywordVariations: 18,
          contentFormat: 'Interactive Tool + Guide',
          priority: 8
        },
        {
          topic: 'Social Media Analytics',
          searchVolume: 34000,
          difficulty: 72,
          opportunity: 'HIGH',
          competition: 'HIGH',
          suggestedContent: 'Social Media Analytics Dashboard Guide',
          potentialTraffic: 9500,
          keywordVariations: 31,
          contentFormat: 'Video Tutorial Series',
          priority: 7
        }
      ],
      technicalSEO: {
        crawlErrors: 23,
        brokenLinks: 45,
        duplicateContent: 12,
        missingMetaTags: 67,
        slowPages: 34,
        mobileIssues: 18,
        structuredData: 89.4, // coverage percentage
        sitemapHealth: 96.7, // percentage
        robotsHealth: 100, // percentage
        sslCertificate: 'VALID'
      }
    },
    contentPerformance: {
      topPerformers: [
        {
          title: 'The Ultimate Guide to AI Marketing in 2026',
          type: 'Blog Post',
          views: 89012,
          engagement: 12345,
          engagementRate: 13.8,
          shares: 2345,
          comments: 456,
          backlinks: 89,
          organicTraffic: 78.9,
          conversionRate: 8.9,
          leadGeneration: 234,
          publishDate: '2026-02-15',
          author: 'Content Team',
          performance: 'VIRAL',
          seoScore: 94.6
        },
        {
          title: 'How to Build a Marketing Funnel That Converts',
          type: 'Video Content',
          views: 67890,
          engagement: 8901,
          engagementRate: 13.1,
          shares: 1789,
          comments: 234,
          watchTime: 89.7, // percentage
          clickThroughRate: 12.4,
          conversionRate: 15.6,
          leadGeneration: 456,
          publishDate: '2026-02-28',
          author: 'Video Team',
          performance: 'EXCELLENT',
          seoScore: 87.3
        },
        {
          title: 'Marketing ROI Calculator & Analysis Template',
          type: 'Whitepaper',
          views: 45678,
          engagement: 6789,
          engagementRate: 14.9,
          downloads: 3456,
          shares: 567,
          leadGeneration: 789,
          authorityScore: 96.7,
          conversionRate: 23.4,
          backlinks: 156,
          publishDate: '2026-03-05',
          author: 'Research Team',
          performance: 'OUTSTANDING',
          seoScore: 92.8
        }
      ],
      underperformers: [
        {
          title: 'Weekly Marketing News Roundup #45',
          type: 'Social Post',
          views: 1234,
          engagement: 89,
          engagementRate: 7.2,
          shares: 12,
          comments: 5,
          impressions: 5678,
          clickThroughRate: 1.2,
          publishDate: '2026-03-10',
          issues: ['Poor timing', 'Low relevance', 'Weak headline'],
          recommendations: ['Improve timing', 'Add trending topics', 'Optimize headline']
        }
      ]
    },
    contentWorkflow: {
      automationRules: {
        totalRules: 45,
        activeRules: 38,
        automatedTasks: 234,
        timeSaved: 156, // hours per month
        errorReduction: 67.8, // percentage
        approvalWorkflow: 'ENABLED',
        publishingQueue: 'AUTOMATED',
        seoOptimization: 'AUTO-SUGGESTIONS',
        socialDistribution: 'SCHEDULED'
      },
      collaborationMetrics: {
        totalCollaborators: 23,
        activeCollaborators: 18,
        avgResponseTime: 2.4, // hours
        approvalCycle: 18.7, // hours average
        revisionRounds: 2.1, // average
        collaborationScore: 87.9,
        conflictResolution: 94.6, // percentage success
        teamSatisfaction: 89.4 // percentage
      },
      qualityControl: {
        grammarScore: 96.7,
        readabilityScore: 82.6,
        brandConsistency: 91.2,
        factChecking: 94.8,
        plagiarismCheck: 99.2,
        legalCompliance: 97.3,
        accessibilityScore: 89.7,
        errorRate: 1.8 // percentage
      }
    },
    distributionChannels: [
      {
        channel: 'Website Blog',
        contentPieces: 2890,
        avgViews: 1234,
        engagement: 6.8,
        organicTraffic: 78.9,
        conversionRate: 4.2,
        seoValue: 'HIGH',
        performance: 'EXCELLENT',
        automation: 'FULL',
        lastUpdate: '2026-03-18 06:30'
      },
      {
        channel: 'LinkedIn',
        contentPieces: 1456,
        avgViews: 2345,
        engagement: 8.9,
        clickThroughRate: 5.6,
        conversionRate: 3.8,
        leadGeneration: 'HIGH',
        performance: 'EXCELLENT',
        automation: 'PARTIAL',
        lastUpdate: '2026-03-18 06:45'
      },
      {
        channel: 'YouTube',
        contentPieces: 234,
        avgViews: 12345,
        engagement: 11.2,
        watchTime: 67.8,
        subscriberGrowth: 23.4,
        monetization: 'ENABLED',
        performance: 'GOOD',
        automation: 'MINIMAL',
        lastUpdate: '2026-03-18 05:20'
      },
      {
        channel: 'Email Newsletter',
        contentPieces: 156,
        avgOpens: 8901,
        openRate: 34.5,
        clickRate: 8.9,
        conversionRate: 12.4,
        listGrowth: 15.6,
        performance: 'EXCELLENT',
        automation: 'FULL',
        lastUpdate: '2026-03-18 06:00'
      },
      {
        channel: 'Instagram',
        contentPieces: 2345,
        avgViews: 3456,
        engagement: 9.8,
        storyViews: 12345,
        reachGrowth: 28.7,
        hashtagPerformance: 'GOOD',
        performance: 'GOOD',
        automation: 'PARTIAL',
        lastUpdate: '2026-03-18 06:15'
      }
    ],
    contentAlerts: [
      {
        type: 'SUCCESS',
        category: 'Performance',
        message: 'AI Marketing Guide viral surge - 89K views in 24h (+340% above average)',
        metric: 'Content Views',
        value: '89,012',
        change: '+340%',
        impact: 'MAJOR',
        timestamp: '07:02',
        recommendation: 'Create follow-up content series, promote across all channels, prepare press release',
        contentType: 'Blog Post',
        author: 'Content Team',
        urgency: 'HIGH',
        opportunity: 'CAPITALIZE'
      },
      {
        type: 'WARNING',
        category: 'Editorial',
        message: 'Content pipeline bottleneck - 18 pieces stuck in editing phase',
        metric: 'Editorial Workflow',
        value: '18 pieces',
        change: '+12 from yesterday',
        impact: 'MODERATE',
        timestamp: '07:00',
        recommendation: 'Allocate additional editing resources, review approval workflow',
        contentType: 'Multiple',
        assignee: 'Editorial Team',
        urgency: 'MEDIUM',
        deadline: '2026-03-20'
      },
      {
        type: 'CRITICAL',
        category: 'SEO',
        message: 'Organic traffic drop detected - 23% decline in past 48h',
        metric: 'Organic Traffic',
        value: '-23%',
        change: '-36K sessions',
        impact: 'HIGH',
        timestamp: '06:58',
        recommendation: 'Audit recent content changes, check for technical SEO issues, analyze competitor activity',
        contentType: 'All Content',
        team: 'SEO Team',
        urgency: 'CRITICAL',
        investigation: 'REQUIRED'
      },
      {
        type: 'INFO',
        category: 'Planning',
        message: 'Q2 content calendar 87% complete - 23 pieces still needed for April',
        metric: 'Content Planning',
        value: '87%',
        change: '+12% this week',
        impact: 'POSITIVE',
        timestamp: '06:55',
        recommendation: 'Focus on remaining April content, begin Q3 planning',
        contentType: 'All Types',
        team: 'Planning Team',
        urgency: 'LOW',
        deadline: '2026-03-25'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setContentData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        contentOverview: {
          ...prev.contentOverview,
          totalViews: Math.max(5600000, Math.min(5800000, prev.contentOverview.totalViews + Math.floor((Math.random() - 0.5) * 10000))),
          avgEngagementRate: Math.max(4.5, Math.min(5.2, prev.contentOverview.avgEngagementRate + (Math.random() - 0.5) * 0.2)),
          contentVelocity: Math.max(20, Math.min(26, prev.contentOverview.contentVelocity + Math.floor((Math.random() - 0.5) * 2)))
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

  const getChannelColor = (channel) => {
    switch (channel) {
      case 'Website Blog': return 'text-green-400 bg-green-400/20';
      case 'LinkedIn': return 'text-blue-400 bg-blue-400/20';
      case 'YouTube': return 'text-red-400 bg-red-400/20';
      case 'Email Newsletter': return 'text-purple-400 bg-purple-400/20';
      case 'Instagram': return 'text-pink-400 bg-pink-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
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

  const getOpportunityColor = (opportunity) => {
    switch (opportunity) {
      case 'HIGH': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.7) return 'text-yellow-400';
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
    <div className="h-full bg-gradient-to-br from-violet-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-violet-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Content Intelligence Center</h1>
              <p className="text-violet-300">Content management, performance analytics & publishing operations</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-violet-400">{contentData.currentTime}</div>
            <div className="text-violet-300">Content Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Content Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <FileText className="w-5 h-5 text-violet-400 mr-2" />
                Content
              </h3>
            </div>
            <div className="text-3xl font-bold text-violet-400">{formatNumber(contentData.contentOverview.totalContent)}</div>
            <div className="text-violet-300 text-sm">{formatNumber(contentData.contentOverview.publishedContent)} Published</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-indigo-400 mr-2" />
                Views
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{formatNumber(contentData.contentOverview.totalViews)}</div>
            <div className="text-indigo-300 text-sm">{formatNumber(contentData.contentOverview.totalEngagement)} Engagement</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
                Performance
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(contentData.contentOverview.avgEngagementRate)}</div>
            <div className="text-blue-300 text-sm">Avg Engagement</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-green-400 mr-2" />
                Velocity
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{contentData.contentOverview.contentVelocity}</div>
            <div className="text-green-300 text-sm">Pieces/Day</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                SEO Score
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(contentData.contentOverview.seoScore, 70, 85)}`}>
              {formatPercentage(contentData.contentOverview.seoScore)}
            </div>
            <div className="text-orange-300 text-sm">Overall SEO</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                ROI
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{contentData.contentOverview.contentROI.toFixed(0)}%</div>
            <div className="text-cyan-300 text-sm">Content ROI</div>
          </div>
        </div>

        {/* Content Types Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-violet-400 mr-2" />
            Content Type Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Content Type</th>
                  <th className="text-center p-3 text-slate-300">Count</th>
                  <th className="text-center p-3 text-slate-300">Views</th>
                  <th className="text-center p-3 text-slate-300">Engagement</th>
                  <th className="text-center p-3 text-slate-300">Conversion</th>
                  <th className="text-center p-3 text-slate-300">SEO</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                </tr>
              </thead>
              <tbody>
                {contentData.contentTypes.map((type, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{type.type}</div>
                      <div className="text-slate-400 text-xs">
                        {type.avgWordCount ? `${type.avgWordCount} words avg` : 
                         type.avgDuration ? `${type.avgDuration}min avg` : 
                         type.avgElements ? `${type.avgElements} elements avg` : 
                         `${type.avgCharacters} chars avg`}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-violet-400">{formatNumber(type.count)}</div>
                      <div className="text-slate-400 text-xs">{type.published} live</div>
                    </td>
                    <td className="p-3 text-center text-indigo-400">{formatNumber(type.totalViews)}</td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(type.avgEngagement, 5.0, 10.0)}`}>
                      {formatPercentage(type.avgEngagement)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(type.conversionRate, 3.0, 8.0)}`}>
                      {formatPercentage(type.conversionRate)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(type.seoScore, 70, 85)}`}>
                      {formatPercentage(type.seoScore)}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(type.performance)}`}>
                        {type.performance}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Editorial Calendar & SEO Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Calendar className="w-5 h-5 text-purple-400 mr-2" />
              Editorial Calendar Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">This Week Pipeline</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-green-400">{contentData.editorialCalendar.thisWeek.published}</div>
                    <div className="text-slate-300">Published</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-blue-400">{contentData.editorialCalendar.thisWeek.scheduled}</div>
                    <div className="text-slate-300">Scheduled</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-yellow-400">{contentData.editorialCalendar.thisWeek.inProgress}</div>
                    <div className="text-slate-300">In Progress</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-purple-400">{contentData.editorialCalendar.thisWeek.inReview}</div>
                    <div className="text-slate-300">In Review</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-cyan-400">{contentData.editorialCalendar.thisWeek.planned}</div>
                    <div className="text-slate-300">Planned</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-red-400">{contentData.editorialCalendar.thisWeek.overdue}</div>
                    <div className="text-slate-300">Overdue</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Team Utilization</h4>
                <div className="space-y-2">
                  {Object.entries(contentData.editorialCalendar.teamWorkload).map(([role, data], index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-medium capitalize">{role}</span>
                        <span className={`text-sm ${getScoreColor(data.utilization, 70, 90)}`}>
                          {formatPercentage(data.utilization)}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">
                        {data.assigned}/{data.capacity} capacity
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Content Pipeline Flow</h4>
                <div className="grid grid-cols-4 gap-1 text-xs">
                  {Object.entries(contentData.editorialCalendar.contentPipeline).map(([stage, count], index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-1 text-center">
                      <div className="text-sm font-bold text-indigo-400">{count}</div>
                      <div className="text-slate-300 capitalize text-xs">{stage}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              SEO Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Organic Performance</h4>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-400">{formatNumber(contentData.seoIntelligence.organicTraffic.organicSessions)}</div>
                    <div className="text-green-300 text-sm">Organic Sessions</div>
                    <div className="text-gray-400 text-xs">{formatPercentage(contentData.seoIntelligence.organicTraffic.organicPercentage)} of total</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">{contentData.seoIntelligence.organicTraffic.avgPosition.toFixed(1)}</div>
                    <div className="text-blue-300 text-sm">Avg Position</div>
                    <div className="text-gray-400 text-xs">{formatNumber(contentData.seoIntelligence.organicTraffic.keywordRankings)} keywords</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-purple-400">{formatPercentage(contentData.seoIntelligence.organicTraffic.clickThroughRate)}</div>
                    <div className="text-slate-300">CTR</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-cyan-400">{contentData.seoIntelligence.organicTraffic.featuredSnippets}</div>
                    <div className="text-slate-300">Snippets</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-sm font-bold ${getScoreColor(contentData.seoIntelligence.organicTraffic.pageSpeedScore, 70, 85)}`}>
                      {contentData.seoIntelligence.organicTraffic.pageSpeedScore.toFixed(0)}
                    </div>
                    <div className="text-slate-300">Speed</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Content Gap Opportunities</h4>
                <div className="space-y-2">
                  {contentData.seoIntelligence.contentGaps.slice(0, 2).map((gap, index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm font-medium">{gap.topic}</span>
                        <span className={`px-1 py-0.5 rounded text-xs ${getOpportunityColor(gap.opportunity)}`}>
                          {gap.opportunity}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 mb-1">{gap.suggestedContent}</div>
                      <div className="grid grid-cols-3 gap-1 text-xs">
                        <div className="text-blue-400">Vol: {formatNumber(gap.searchVolume)}</div>
                        <div className="text-green-400">Traffic: {formatNumber(gap.potentialTraffic)}</div>
                        <div className="text-purple-400">Priority: {gap.priority}/10</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Technical SEO Health</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-red-400">{contentData.seoIntelligence.technicalSEO.crawlErrors}</div>
                    <div className="text-slate-300">Crawl Errors</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-yellow-400">{contentData.seoIntelligence.technicalSEO.brokenLinks}</div>
                    <div className="text-slate-300">Broken Links</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-sm font-bold ${getScoreColor(contentData.seoIntelligence.technicalSEO.structuredData, 80, 95)}`}>
                      {formatPercentage(contentData.seoIntelligence.technicalSEO.structuredData)}
                    </div>
                    <div className="text-slate-300">Schema</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-sm font-bold ${getScoreColor(contentData.seoIntelligence.technicalSEO.sitemapHealth, 90, 98)}`}>
                      {formatPercentage(contentData.seoIntelligence.technicalSEO.sitemapHealth)}
                    </div>
                    <div className="text-slate-300">Sitemap</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performers & Distribution Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Top Performing Content
            </h3>
            <div className="space-y-4">
              {contentData.contentPerformance.topPerformers.map((content, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(content.performance)}`}>
                        {content.performance}
                      </span>
                      <span className="text-slate-300 text-xs">{content.type}</span>
                    </div>
                    <span className={`text-sm ${getScoreColor(content.seoScore, 80, 90)}`}>SEO: {formatPercentage(content.seoScore)}</span>
                  </div>
                  <div className="text-white text-sm font-medium mb-2">{content.title}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Views: {formatNumber(content.views)}</div>
                    <div className="text-green-400">Eng: {formatNumber(content.engagement)}</div>
                    <div className="text-purple-400">Rate: {formatPercentage(content.engagementRate)}</div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">{content.publishDate} • {content.author}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-orange-400">Conv: {formatPercentage(content.conversionRate)}</span>
                      {content.leadGeneration && (
                        <span className="text-cyan-400">Leads: {content.leadGeneration}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-cyan-400 mr-2" />
              Distribution Channel Performance
            </h3>
            <div className="space-y-4">
              {contentData.distributionChannels.map((channel, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getChannelColor(channel.channel)}`}>
                        {channel.channel}
                      </span>
                      <span className={`text-xs ${getPerformanceColor(channel.performance)}`}>
                        {channel.performance}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">
                      {channel.lastUpdate}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-violet-400">Content: {formatNumber(channel.contentPieces)}</div>
                    <div className="text-indigo-400">Avg Views: {formatNumber(channel.avgViews)}</div>
                    <div className="text-blue-400">Engagement: {formatPercentage(channel.engagement)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {channel.organicTraffic && (
                      <div className="text-green-400">Organic: {formatPercentage(channel.organicTraffic)}</div>
                    )}
                    {channel.clickThroughRate && (
                      <div className="text-purple-400">CTR: {formatPercentage(channel.clickThroughRate)}</div>
                    )}
                    {channel.watchTime && (
                      <div className="text-orange-400">Watch: {formatPercentage(channel.watchTime)}</div>
                    )}
                    {channel.openRate && (
                      <div className="text-cyan-400">Open: {formatPercentage(channel.openRate)}</div>
                    )}
                    {channel.reachGrowth && (
                      <div className="text-pink-400">Growth: {formatPercentage(channel.reachGrowth)}</div>
                    )}
                    <div className="text-yellow-400">Conv: {formatPercentage(channel.conversionRate)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Content Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {contentData.contentAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Impact: {alert.impact}</div>
                  </div>
                  <div>
                    <div className="text-slate-300">Content: {alert.contentType}</div>
                    {alert.author && <div className="text-slate-300">Author: {alert.author}</div>}
                    {alert.team && <div className="text-slate-300">Team: {alert.team}</div>}
                    {alert.deadline && <div className="text-slate-300">Due: {alert.deadline}</div>}
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