// SEO Intelligence Center - Search Optimization, SERP Monitoring & Organic Performance Analytics
import { useState, useEffect } from 'react';
import { Search, TrendingUp, TrendingDown, Users, Eye, Target, BarChart3, AlertTriangle, CheckCircle, Globe, Zap } from 'lucide-react';

export default function SEOIntelligenceCenter() {
  const [seoData, setSeoData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    seoOverview: {
      organicTraffic: 234567,
      totalKeywords: 12345,
      topRankingKeywords: 567,
      avgPosition: 12.4,
      clickThroughRate: 3.8,
      impressions: 5678901,
      organicClicks: 215678,
      searchVisibility: 78.4,
      domainAuthority: 67,
      backlinks: 45678,
      referringDomains: 2345,
      indexedPages: 8901,
      crawlErrors: 23,
      pagespeedScore: 87.3,
      mobileUsability: 94.6,
      coreWebVitals: 89.2,
      structuredData: 76.8,
      technicalHealth: 85.7
    },
    keywordPerformance: [
      {
        keyword: 'ai marketing automation',
        position: 3,
        previousPosition: 5,
        searchVolume: 45000,
        difficulty: 78,
        clickThroughRate: 8.9,
        impressions: 89012,
        clicks: 7923,
        traffic: 12456,
        conversionRate: 4.2,
        revenue: 52341,
        trend: 'UP',
        rankingUrl: '/ai-marketing-guide',
        competition: 'HIGH',
        opportunity: 'MEDIUM',
        intent: 'Commercial'
      },
      {
        keyword: 'marketing analytics dashboard',
        position: 1,
        previousPosition: 1,
        searchVolume: 23000,
        difficulty: 65,
        clickThroughRate: 31.2,
        impressions: 56789,
        clicks: 17718,
        traffic: 28456,
        conversionRate: 8.9,
        revenue: 98234,
        trend: 'STABLE',
        rankingUrl: '/analytics-dashboard',
        competition: 'MEDIUM',
        opportunity: 'HIGH',
        intent: 'Commercial'
      },
      {
        keyword: 'social media automation',
        position: 7,
        previousPosition: 4,
        searchVolume: 34000,
        difficulty: 72,
        clickThroughRate: 4.2,
        impressions: 67890,
        clicks: 2851,
        traffic: 5234,
        conversionRate: 2.8,
        revenue: 14567,
        trend: 'DOWN',
        rankingUrl: '/social-automation',
        competition: 'HIGH',
        opportunity: 'LOW',
        intent: 'Informational'
      },
      {
        keyword: 'content marketing strategy',
        position: 2,
        previousPosition: 3,
        searchVolume: 67000,
        difficulty: 69,
        clickThroughRate: 18.7,
        impressions: 123456,
        clicks: 23086,
        traffic: 34567,
        conversionRate: 3.4,
        revenue: 67890,
        trend: 'UP',
        rankingUrl: '/content-strategy-guide',
        competition: 'HIGH',
        opportunity: 'HIGH',
        intent: 'Informational'
      },
      {
        keyword: 'email marketing automation',
        position: 4,
        previousPosition: 6,
        searchVolume: 28000,
        difficulty: 58,
        clickThroughRate: 6.8,
        impressions: 45678,
        clicks: 3106,
        traffic: 8901,
        conversionRate: 5.6,
        revenue: 28456,
        trend: 'UP',
        rankingUrl: '/email-automation',
        competition: 'MEDIUM',
        opportunity: 'MEDIUM',
        intent: 'Commercial'
      },
      {
        keyword: 'digital marketing tools',
        position: 12,
        previousPosition: 8,
        searchVolume: 89000,
        difficulty: 81,
        clickThroughRate: 1.8,
        impressions: 234567,
        clicks: 4223,
        traffic: 6789,
        conversionRate: 1.9,
        revenue: 12345,
        trend: 'DOWN',
        rankingUrl: '/marketing-tools',
        competition: 'VERY_HIGH',
        opportunity: 'LOW',
        intent: 'Commercial'
      }
    ],
    competitorAnalysis: [
      {
        competitor: 'marketing-competitor-a.com',
        domainAuthority: 78,
        organicKeywords: 23456,
        organicTraffic: 456789,
        backlinks: 89012,
        referringDomains: 5678,
        contentGaps: 234,
        keywordOverlap: 67.8,
        trafficShare: 34.5,
        brandMentions: 1234,
        topKeywords: ['marketing automation', 'lead generation', 'crm software'],
        contentTypes: ['Blog Posts', 'Whitepapers', 'Case Studies'],
        linkingOpportunities: 156,
        contentOpportunities: 89,
        threat: 'HIGH',
        visibility: 89.4
      },
      {
        competitor: 'digital-agency-b.com',
        domainAuthority: 72,
        organicKeywords: 18901,
        organicTraffic: 289012,
        backlinks: 67890,
        referringDomains: 4567,
        contentGaps: 178,
        keywordOverlap: 52.3,
        trafficShare: 23.8,
        brandMentions: 890,
        topKeywords: ['digital marketing', 'ppc advertising', 'social media'],
        contentTypes: ['Blog Posts', 'Videos', 'Infographics'],
        linkingOpportunities: 234,
        contentOpportunities: 123,
        threat: 'MEDIUM',
        visibility: 72.6
      },
      {
        competitor: 'saas-platform-c.com',
        domainAuthority: 84,
        organicKeywords: 34567,
        organicTraffic: 789012,
        backlinks: 123456,
        referringDomains: 8901,
        contentGaps: 89,
        keywordOverlap: 78.9,
        trafficShare: 45.6,
        brandMentions: 2345,
        topKeywords: ['saas marketing', 'customer analytics', 'business intelligence'],
        contentTypes: ['Product Pages', 'Documentation', 'Webinars'],
        linkingOpportunities: 67,
        contentOpportunities: 234,
        threat: 'CRITICAL',
        visibility: 94.7
      }
    ],
    technicalSEO: {
      crawlability: {
        totalPages: 8901,
        indexablePages: 8234,
        nonIndexablePages: 667,
        crawlErrors: 23,
        redirects: 156,
        brokenLinks: 45,
        crawlDepth: 4.2,
        xmlSitemaps: 12,
        robotsTxt: 'VALID',
        canonicalization: 94.6,
        hreflang: 87.3,
        pagination: 92.1
      },
      pageSpeed: {
        desktopSpeed: 89.4,
        mobileSpeed: 84.7,
        largestContentfulPaint: 1.8, // seconds
        firstInputDelay: 89, // milliseconds
        cumulativeLayoutShift: 0.05,
        timeToInteractive: 2.4, // seconds
        speedIndex: 2.1, // seconds
        totalBlockingTime: 145, // milliseconds
        firstContentfulPaint: 1.2, // seconds
        performanceScore: 87.3,
        accessibilityScore: 89.6,
        bestPracticesScore: 94.2,
        seoScore: 91.8
      },
      mobileOptimization: {
        mobileFriendliness: 94.6,
        mobileUsability: 92.3,
        responsiveDesign: 96.7,
        touchElementSpacing: 89.4,
        viewportConfiguration: 98.2,
        textReadability: 91.5,
        mobilePageSpeed: 84.7,
        ampPages: 23,
        mobileFirstIndexing: 'ENABLED',
        mobileCrawlErrors: 12,
        tabSpacing: 94.8,
        imageOptimization: 87.9
      },
      structuredData: {
        coverage: 76.8,
        validMarkup: 89.4,
        richSnippets: 234,
        schemaTypes: ['Article', 'Organization', 'Product', 'Review', 'FAQ'],
        errors: 23,
        warnings: 67,
        enhancements: 12,
        breadcrumbs: 'IMPLEMENTED',
        localBusiness: 'IMPLEMENTED',
        productSchema: 'IMPLEMENTED',
        reviewSchema: 'IMPLEMENTED',
        faqSchema: 'IMPLEMENTED',
        jsonLd: 94.2
      }
    },
    backlinks: {
      totalBacklinks: 45678,
      followLinks: 34567,
      nofollowLinks: 11111,
      referringDomains: 2345,
      newBacklinks: 156, // this month
      lostBacklinks: 89,
      domainRating: 67,
      urlRating: 45,
      linkVelocity: 23.4, // links per month
      anchorText: {
        branded: 45.6,
        exact: 12.3,
        partial: 23.4,
        generic: 18.7
      },
      topLinkingSites: [
        { domain: 'authoritysite1.com', dr: 89, links: 234, traffic: 567890, type: 'Editorial' },
        { domain: 'industry-blog2.com', dr: 76, links: 156, traffic: 234567, type: 'Guest Post' },
        { domain: 'news-outlet3.com', dr: 84, links: 89, traffic: 789012, type: 'News Mention' },
        { domain: 'partner-site4.com', dr: 72, links: 67, traffic: 123456, type: 'Partnership' }
      ],
      linkTypes: {
        editorial: 34.5,
        guestPost: 23.4,
        directoryListings: 12.3,
        partnerships: 18.7,
        resourcePages: 8.9,
        other: 2.2
      },
      toxicLinks: 234,
      disavowalNeeded: 56
    },
    contentOptimization: {
      contentGaps: [
        {
          topic: 'AI-Powered SEO Tools',
          searchVolume: 34000,
          difficulty: 67,
          competition: 'MEDIUM',
          opportunity: 'HIGH',
          currentRanking: null,
          targetKeywords: ['ai seo tools', 'automated seo', 'machine learning seo'],
          suggestedContent: 'Complete Guide to AI SEO Tools in 2026',
          estimatedTraffic: 12000,
          businessValue: 'HIGH',
          priority: 9,
          contentType: 'Long-form Guide'
        },
        {
          topic: 'Voice Search Optimization',
          searchVolume: 23000,
          difficulty: 54,
          competition: 'LOW',
          opportunity: 'MEDIUM',
          currentRanking: null,
          targetKeywords: ['voice search seo', 'optimize for voice search', 'voice search strategy'],
          suggestedContent: 'Voice Search SEO: Complete Optimization Guide',
          estimatedTraffic: 8900,
          businessValue: 'MEDIUM',
          priority: 7,
          contentType: 'How-to Guide'
        },
        {
          topic: 'E-A-T Optimization',
          searchVolume: 12000,
          difficulty: 45,
          competition: 'LOW',
          opportunity: 'HIGH',
          currentRanking: null,
          targetKeywords: ['eat seo', 'expertise authority trust', 'google eat'],
          suggestedContent: 'E-A-T SEO: Building Expertise, Authority & Trust',
          estimatedTraffic: 6700,
          businessValue: 'HIGH',
          priority: 8,
          contentType: 'Authority Guide'
        }
      ],
      onPageOptimization: {
        titleTagOptimization: 89.4,
        metaDescriptions: 87.6,
        headerTags: 92.3,
        internalLinking: 78.9,
        imageOptimization: 84.7,
        contentLength: 91.2,
        keywordDensity: 'OPTIMAL',
        readabilityScore: 87.3,
        userEngagement: 89.6,
        callToActions: 76.8,
        socialSharing: 82.4,
        schemaMarkup: 76.8
      }
    },
    localSEO: {
      googleMyBusiness: {
        verified: true,
        optimizationScore: 94.6,
        reviews: 234,
        averageRating: 4.7,
        photosUploaded: 156,
        postsPublished: 45,
        questionsAnswered: 23,
        responseRate: 98.9,
        responseTime: '< 1 hour',
        impressions: 45678,
        clicks: 3456,
        callsGenerated: 234,
        directionsRequests: 567,
        websiteClicks: 1890
      },
      localCitations: {
        totalCitations: 345,
        consistentNAP: 89.4, // percentage
        topDirectories: ['Google My Business', 'Yelp', 'Facebook', 'Bing Places'],
        duplicateCitations: 23,
        incompleteListings: 45,
        citationOpportunities: 67,
        localRankings: {
          'marketing agency near me': 3,
          'digital marketing services': 7,
          'seo company': 12,
          'content marketing': 5,
          'social media management': 8
        }
      }
    },
    seoAlerts: [
      {
        type: 'CRITICAL',
        category: 'Rankings',
        message: 'Major keyword "digital marketing tools" dropped 4 positions to #12',
        metric: 'Keyword Position',
        value: 'Position 12',
        change: '-4 positions',
        impact: 'HIGH',
        timestamp: '07:18',
        keyword: 'digital marketing tools',
        affectedUrl: '/marketing-tools',
        trafficLoss: 3456,
        revenueLoss: 8901,
        recommendation: 'Immediate content audit and optimization required',
        urgency: 'CRITICAL',
        competition: 'VERY_HIGH'
      },
      {
        type: 'SUCCESS',
        category: 'Traffic',
        message: 'Organic traffic surge +45% - "marketing analytics dashboard" ranking #1',
        metric: 'Organic Traffic',
        value: '+45%',
        change: '+28,456 sessions',
        impact: 'MAJOR',
        timestamp: '07:15',
        keyword: 'marketing analytics dashboard',
        affectedUrl: '/analytics-dashboard',
        trafficGain: 28456,
        revenueGain: 67890,
        recommendation: 'Capitalize with related content and internal linking',
        urgency: 'HIGH',
        opportunity: 'EXPAND'
      },
      {
        type: 'WARNING',
        category: 'Technical',
        message: 'Core Web Vitals degradation detected - LCP increased to 3.2s',
        metric: 'Largest Contentful Paint',
        value: '3.2s',
        change: '+0.8s from target',
        impact: 'MODERATE',
        timestamp: '07:12',
        affectedPages: 23,
        mobileImpact: 'HIGH',
        desktopImpact: 'LOW',
        recommendation: 'Optimize images and reduce server response time',
        urgency: 'MEDIUM',
        technicalFix: 'REQUIRED'
      },
      {
        type: 'INFO',
        category: 'Backlinks',
        message: 'High-authority backlink acquired from authoritysite1.com (DR 89)',
        metric: 'Domain Rating',
        value: '+2 DR points',
        change: 'From DR 65 to 67',
        impact: 'POSITIVE',
        timestamp: '07:10',
        linkingDomain: 'authoritysite1.com',
        linkType: 'Editorial',
        linkValue: 'HIGH',
        recommendation: 'Monitor ranking improvements and build on this success',
        urgency: 'LOW',
        followUp: 'RELATIONSHIP_BUILDING'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeoData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        seoOverview: {
          ...prev.seoOverview,
          organicTraffic: Math.max(220000, Math.min(250000, prev.seoOverview.organicTraffic + Math.floor((Math.random() - 0.5) * 1000))),
          avgPosition: Math.max(12.0, Math.min(13.0, prev.seoOverview.avgPosition + (Math.random() - 0.5) * 0.2)),
          clickThroughRate: Math.max(3.5, Math.min(4.2, prev.seoOverview.clickThroughRate + (Math.random() - 0.5) * 0.1))
        }
      }));
    }, 11000);

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

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'UP': return 'text-green-400';
      case 'DOWN': return 'text-red-400';
      case 'STABLE': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getThreatColor = (threat) => {
    switch (threat) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
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

  const getPositionColor = (position) => {
    if (position <= 3) return 'text-green-400';
    if (position <= 10) return 'text-blue-400';
    if (position <= 20) return 'text-yellow-400';
    return 'text-red-400';
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
  const formatCurrency = (amount) => `€${formatNumber(amount)}`;

  return (
    <div className="h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <Search className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">SEO Intelligence Center</h1>
              <p className="text-cyan-300">Search optimization, SERP monitoring & organic performance analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{seoData.currentTime}</div>
            <div className="text-cyan-300">SEO Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* SEO Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Traffic
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(seoData.seoOverview.organicTraffic)}</div>
            <div className="text-cyan-300 text-sm">Organic Sessions</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Search className="w-5 h-5 text-blue-400 mr-2" />
                Keywords
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(seoData.seoOverview.totalKeywords)}</div>
            <div className="text-blue-300 text-sm">{seoData.seoOverview.topRankingKeywords} Top 10</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Position
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getPositionColor(seoData.seoOverview.avgPosition)}`}>
              {seoData.seoOverview.avgPosition.toFixed(1)}
            </div>
            <div className="text-green-300 text-sm">Avg Ranking</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-purple-400 mr-2" />
                Visibility
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(seoData.seoOverview.searchVisibility, 70, 85)}`}>
              {formatPercentage(seoData.seoOverview.searchVisibility)}
            </div>
            <div className="text-purple-300 text-sm">Search Visibility</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-orange-400 mr-2" />
                Authority
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(seoData.seoOverview.domainAuthority, 50, 70)}`}>
              {seoData.seoOverview.domainAuthority}
            </div>
            <div className="text-orange-300 text-sm">Domain Authority</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Health
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(seoData.seoOverview.technicalHealth, 80, 90)}`}>
              {formatPercentage(seoData.seoOverview.technicalHealth)}
            </div>
            <div className="text-yellow-300 text-sm">Technical SEO</div>
          </div>
        </div>

        {/* Keyword Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Keyword Performance Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Keyword</th>
                  <th className="text-center p-3 text-slate-300">Position</th>
                  <th className="text-center p-3 text-slate-300">Volume</th>
                  <th className="text-center p-3 text-slate-300">Traffic</th>
                  <th className="text-center p-3 text-slate-300">CTR</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Trend</th>
                </tr>
              </thead>
              <tbody>
                {seoData.keywordPerformance.map((keyword, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{keyword.keyword}</div>
                      <div className="text-slate-400 text-xs">{keyword.rankingUrl} • {keyword.intent}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className={`text-lg font-bold ${getPositionColor(keyword.position)}`}>#{keyword.position}</div>
                      <div className="text-slate-400 text-xs">
                        {keyword.position < keyword.previousPosition ? '↗' : keyword.position > keyword.previousPosition ? '↘' : '='} {keyword.previousPosition}
                      </div>
                    </td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(keyword.searchVolume)}</td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(keyword.traffic)}</td>
                    <td className="p-3 text-center text-green-400">{formatPercentage(keyword.clickThroughRate)}</td>
                    <td className="p-3 text-center text-yellow-400">{formatCurrency(keyword.revenue)}</td>
                    <td className={`p-3 text-center ${getTrendColor(keyword.trend)}`}>
                      {keyword.trend}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technical SEO & Competitor Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Technical SEO Health
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Core Web Vitals</h4>
                <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${seoData.technicalSEO.pageSpeed.largestContentfulPaint <= 2.5 ? 'text-green-400' : 'text-red-400'}`}>
                      {seoData.technicalSEO.pageSpeed.largestContentfulPaint.toFixed(1)}s
                    </div>
                    <div className="text-slate-300">LCP</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${seoData.technicalSEO.pageSpeed.firstInputDelay <= 100 ? 'text-green-400' : 'text-red-400'}`}>
                      {seoData.technicalSEO.pageSpeed.firstInputDelay}ms
                    </div>
                    <div className="text-slate-300">FID</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${seoData.technicalSEO.pageSpeed.cumulativeLayoutShift <= 0.1 ? 'text-green-400' : 'text-red-400'}`}>
                      {seoData.technicalSEO.pageSpeed.cumulativeLayoutShift.toFixed(2)}
                    </div>
                    <div className="text-slate-300">CLS</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-sm font-bold ${getScoreColor(seoData.technicalSEO.pageSpeed.desktopSpeed, 70, 90)}`}>
                      {seoData.technicalSEO.pageSpeed.desktopSpeed}
                    </div>
                    <div className="text-slate-300">Desktop</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-sm font-bold ${getScoreColor(seoData.technicalSEO.pageSpeed.mobileSpeed, 70, 90)}`}>
                      {seoData.technicalSEO.pageSpeed.mobileSpeed}
                    </div>
                    <div className="text-slate-300">Mobile</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Crawlability & Indexing</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-green-400">{formatNumber(seoData.technicalSEO.crawlability.indexablePages)}</div>
                    <div className="text-slate-300">Indexed Pages</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-lg font-bold text-red-400">{seoData.technicalSEO.crawlability.crawlErrors}</div>
                    <div className="text-slate-300">Crawl Errors</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${getScoreColor(seoData.technicalSEO.crawlability.canonicalization, 85, 95)}`}>
                      {formatPercentage(seoData.technicalSEO.crawlability.canonicalization)}
                    </div>
                    <div className="text-slate-300">Canonical</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${getScoreColor(seoData.technicalSEO.structuredData.coverage, 70, 85)}`}>
                      {formatPercentage(seoData.technicalSEO.structuredData.coverage)}
                    </div>
                    <div className="text-slate-300">Schema</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Mobile Optimization</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${getScoreColor(seoData.technicalSEO.mobileOptimization.mobileFriendliness, 85, 95)}`}>
                      {formatPercentage(seoData.technicalSEO.mobileOptimization.mobileFriendliness)}
                    </div>
                    <div className="text-slate-300">Mobile Friendly</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className={`text-lg font-bold ${getScoreColor(seoData.technicalSEO.mobileOptimization.responsiveDesign, 90, 98)}`}>
                      {formatPercentage(seoData.technicalSEO.mobileOptimization.responsiveDesign)}
                    </div>
                    <div className="text-slate-300">Responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-orange-400 mr-2" />
              Competitor Intelligence
            </h3>
            <div className="space-y-4">
              {seoData.competitorAnalysis.map((competitor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{competitor.competitor}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getThreatColor(competitor.threat)}`}>
                      {competitor.threat}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">DA: {competitor.domainAuthority}</div>
                    <div className="text-green-400">Traffic: {formatNumber(competitor.organicTraffic)}</div>
                    <div className="text-purple-400">Keywords: {formatNumber(competitor.organicKeywords)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Share: {formatPercentage(competitor.trafficShare)}</div>
                    <div className="text-orange-400">Overlap: {formatPercentage(competitor.keywordOverlap)}</div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Top: {competitor.topKeywords.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Backlinks & Content Gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-green-400 mr-2" />
              Backlink Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Link Portfolio Overview</h4>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{formatNumber(seoData.backlinks.totalBacklinks)}</div>
                    <div className="text-green-300 text-sm">Total Backlinks</div>
                    <div className="text-gray-400 text-xs">{formatNumber(seoData.backlinks.referringDomains)} domains</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(seoData.backlinks.domainRating, 50, 70)}`}>
                      {seoData.backlinks.domainRating}
                    </div>
                    <div className="text-blue-300 text-sm">Domain Rating</div>
                    <div className="text-gray-400 text-xs">+{seoData.backlinks.newBacklinks} this month</div>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-1 text-xs">
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-blue-400">{formatPercentage(seoData.backlinks.anchorText.branded)}</div>
                    <div className="text-slate-300">Branded</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-green-400">{formatPercentage(seoData.backlinks.anchorText.exact)}</div>
                    <div className="text-slate-300">Exact</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-yellow-400">{formatPercentage(seoData.backlinks.anchorText.partial)}</div>
                    <div className="text-slate-300">Partial</div>
                  </div>
                  <div className="bg-slate-600/30 rounded p-2 text-center">
                    <div className="text-sm font-bold text-purple-400">{formatPercentage(seoData.backlinks.anchorText.generic)}</div>
                    <div className="text-slate-300">Generic</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-3">Top Linking Sites</h4>
                <div className="space-y-2">
                  {seoData.backlinks.topLinkingSites.slice(0, 3).map((site, index) => (
                    <div key={index} className="bg-slate-600/30 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-white text-sm">{site.domain}</span>
                        <span className="text-blue-400 text-xs">DR {site.dr}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1 text-xs">
                        <div className="text-green-400">Links: {site.links}</div>
                        <div className="text-purple-400">Traffic: {formatNumber(site.traffic)}</div>
                        <div className="text-orange-400">{site.type}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-purple-400 mr-2" />
              Content Gap Opportunities
            </h3>
            <div className="space-y-4">
              {seoData.contentOptimization.contentGaps.map((gap, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{gap.topic}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getOpportunityColor(gap.opportunity)}`}>
                        {gap.opportunity}
                      </span>
                      <span className="text-blue-400 text-xs">P{gap.priority}</span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-sm mb-2">{gap.suggestedContent}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Volume: {formatNumber(gap.searchVolume)}</div>
                    <div className="text-green-400">Traffic: {formatNumber(gap.estimatedTraffic)}</div>
                    <div className="text-purple-400">Difficulty: {gap.difficulty}</div>
                  </div>
                  <div className="text-xs text-slate-400">
                    Keywords: {gap.targetKeywords.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <h4 className="text-white text-sm font-medium mb-3">On-Page Optimization Score</h4>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-slate-700/30 rounded p-2 text-center">
                  <div className={`text-sm font-bold ${getScoreColor(seoData.contentOptimization.onPageOptimization.titleTagOptimization, 80, 90)}`}>
                    {formatPercentage(seoData.contentOptimization.onPageOptimization.titleTagOptimization)}
                  </div>
                  <div className="text-slate-300">Titles</div>
                </div>
                <div className="bg-slate-700/30 rounded p-2 text-center">
                  <div className={`text-sm font-bold ${getScoreColor(seoData.contentOptimization.onPageOptimization.metaDescriptions, 80, 90)}`}>
                    {formatPercentage(seoData.contentOptimization.onPageOptimization.metaDescriptions)}
                  </div>
                  <div className="text-slate-300">Metas</div>
                </div>
                <div className="bg-slate-700/30 rounded p-2 text-center">
                  <div className={`text-sm font-bold ${getScoreColor(seoData.contentOptimization.onPageOptimization.internalLinking, 75, 85)}`}>
                    {formatPercentage(seoData.contentOptimization.onPageOptimization.internalLinking)}
                  </div>
                  <div className="text-slate-300">Links</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            SEO Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {seoData.seoAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      alert.urgency === 'CRITICAL' ? 'bg-red-400/20 text-red-400' :
                      alert.urgency === 'HIGH' ? 'bg-orange-400/20 text-orange-400' :
                      alert.urgency === 'MEDIUM' ? 'bg-yellow-400/20 text-yellow-400' :
                      'bg-green-400/20 text-green-400'
                    }`}>
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
                    {alert.keyword && <div className="text-slate-300">Keyword: {alert.keyword}</div>}
                    {alert.affectedUrl && <div className="text-slate-300">URL: {alert.affectedUrl}</div>}
                    {alert.trafficLoss && <div className="text-slate-300">Traffic Loss: {formatNumber(alert.trafficLoss)}</div>}
                    {alert.trafficGain && <div className="text-slate-300">Traffic Gain: {formatNumber(alert.trafficGain)}</div>}
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