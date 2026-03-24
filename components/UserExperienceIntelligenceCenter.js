// User Experience Intelligence Center - UX Analytics & User Journey Optimization
import { useState, useEffect } from 'react';
import { Users, MousePointer, Smartphone, Eye, TrendingUp, Clock, Target, AlertTriangle, CheckCircle, Activity, BarChart3, Zap } from 'lucide-react';

export default function UserExperienceIntelligenceCenter() {
  const [uxData, setUxData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    uxOverview: {
      totalUsers: 487623,
      activeUsers: 23456,
      sessionsToday: 78934,
      averageSessionDuration: 342,
      bounceRate: 23.7,
      conversionRate: 4.8,
      pageViews: 1234567,
      uniquePageViews: 987654,
      exitRate: 45.6,
      timeOnPage: 189,
      userSatisfaction: 8.7,
      npsScore: 67,
      csat: 87.4,
      ces: 6.2,
      errorRate: 0.8,
      loadTime: 1.4
    },
    userJourneyAnalytics: [
      {
        stage: 'Landing Page',
        users: 78934,
        conversionRate: 78.9,
        avgTimeSpent: 45,
        exitRate: 21.1,
        topSources: ['Organic Search', 'Social Media', 'Direct'],
        satisfactionScore: 8.2,
        issues: ['Slow loading on mobile', 'Unclear CTA'],
        improvements: ['+12% conversion with A/B test', 'Reduced bounce by 8%'],
        deviceBreakdown: {
          desktop: 45.6,
          mobile: 38.9,
          tablet: 15.5
        },
        geographicData: {
          topCountries: ['United States', 'United Kingdom', 'Canada'],
          conversionByRegion: 'US: 5.2%, UK: 4.8%, CA: 4.1%'
        },
        engagement: {
          clicks: 67890,
          scrollDepth: 67.8,
          videoViews: 12345,
          formStarts: 8901
        }
      },
      {
        stage: 'Product Catalog',
        users: 62345,
        conversionRate: 67.8,
        avgTimeSpent: 234,
        exitRate: 32.2,
        topSources: ['Landing Page', 'Search Results', 'Category Pages'],
        satisfactionScore: 8.5,
        issues: ['Filter performance', 'Image loading delays'],
        improvements: ['Enhanced search filters', '+15% engagement'],
        deviceBreakdown: {
          desktop: 52.3,
          mobile: 34.7,
          tablet: 13.0
        },
        geographicData: {
          topCountries: ['United States', 'Germany', 'France'],
          conversionByRegion: 'US: 6.1%, DE: 5.7%, FR: 5.3%'
        },
        engagement: {
          clicks: 234567,
          scrollDepth: 78.4,
          videoViews: 23456,
          formStarts: 5678
        }
      },
      {
        stage: 'Product Details',
        users: 42456,
        conversionRate: 56.7,
        avgTimeSpent: 187,
        exitRate: 43.3,
        topSources: ['Product Catalog', 'Search Results', 'Recommendations'],
        satisfactionScore: 8.8,
        issues: ['Missing product info', 'Review system bugs'],
        improvements: ['Enhanced product gallery', '+9% conversion'],
        deviceBreakdown: {
          desktop: 48.9,
          mobile: 37.8,
          tablet: 13.3
        },
        geographicData: {
          topCountries: ['United States', 'United Kingdom', 'Australia'],
          conversionByRegion: 'US: 7.2%, UK: 6.8%, AU: 6.4%'
        },
        engagement: {
          clicks: 187654,
          scrollDepth: 85.2,
          videoViews: 34567,
          formStarts: 8765
        }
      },
      {
        stage: 'Shopping Cart',
        users: 24087,
        conversionRate: 34.5,
        avgTimeSpent: 156,
        exitRate: 65.5,
        topSources: ['Product Details', 'Quick Add', 'Wishlist'],
        satisfactionScore: 7.9,
        issues: ['Shipping calculator slow', 'Payment options limited'],
        improvements: ['Simplified checkout', '+22% completion'],
        deviceBreakdown: {
          desktop: 56.7,
          mobile: 31.2,
          tablet: 12.1
        },
        geographicData: {
          topCountries: ['United States', 'Canada', 'United Kingdom'],
          conversionByRegion: 'US: 8.9%, CA: 8.1%, UK: 7.6%'
        },
        engagement: {
          clicks: 98765,
          scrollDepth: 92.3,
          videoViews: 4567,
          formStarts: 12345
        }
      },
      {
        stage: 'Checkout Process',
        users: 8310,
        conversionRate: 67.8,
        avgTimeSpent: 278,
        exitRate: 32.2,
        topSources: ['Shopping Cart', 'Express Checkout', 'Guest Checkout'],
        satisfactionScore: 8.1,
        issues: ['Form validation errors', 'Address autocomplete'],
        improvements: ['One-click payment', '+18% conversion'],
        deviceBreakdown: {
          desktop: 62.4,
          mobile: 28.9,
          tablet: 8.7
        },
        geographicData: {
          topCountries: ['United States', 'United Kingdom', 'Germany'],
          conversionByRegion: 'US: 9.7%, UK: 9.2%, DE: 8.8%'
        },
        engagement: {
          clicks: 45678,
          scrollDepth: 98.7,
          videoViews: 1234,
          formStarts: 7890
        }
      },
      {
        stage: 'Order Confirmation',
        users: 5634,
        conversionRate: 95.6,
        avgTimeSpent: 89,
        exitRate: 4.4,
        topSources: ['Checkout Process', 'Payment Success'],
        satisfactionScore: 9.2,
        issues: ['Email delivery delays'],
        improvements: ['Enhanced confirmation page', '+3% satisfaction'],
        deviceBreakdown: {
          desktop: 58.9,
          mobile: 32.1,
          tablet: 9.0
        },
        geographicData: {
          topCountries: ['United States', 'United Kingdom', 'Canada'],
          conversionByRegion: 'US: 96.2%, UK: 95.8%, CA: 95.1%'
        },
        engagement: {
          clicks: 23456,
          scrollDepth: 87.6,
          videoViews: 890,
          formStarts: 3456
        }
      }
    ],
    deviceAnalytics: [
      {
        device: 'Desktop',
        users: 234567,
        percentage: 48.1,
        sessionDuration: 398,
        bounceRate: 19.3,
        conversionRate: 6.2,
        pageLoadTime: 1.2,
        satisfaction: 8.9,
        topResolutions: ['1920x1080', '1366x768', '2560x1440'],
        browsers: {
          chrome: 67.8,
          firefox: 18.9,
          safari: 8.7,
          edge: 4.6
        },
        operatingSystems: {
          windows: 72.3,
          macos: 21.7,
          linux: 6.0
        },
        issues: ['Legacy browser compatibility', 'High-DPI display scaling'],
        performance: {
          lcp: '1.1s',
          fid: '23ms',
          cls: '0.05',
          tti: '1.8s'
        },
        engagement: {
          pagesPerSession: 5.7,
          timeOnPage: 234,
          scrollDepth: 78.9,
          clickThroughRate: 12.3
        }
      },
      {
        device: 'Mobile',
        users: 189234,
        percentage: 38.8,
        sessionDuration: 256,
        bounceRate: 32.1,
        conversionRate: 3.4,
        pageLoadTime: 2.1,
        satisfaction: 7.8,
        topResolutions: ['375x667', '414x896', '360x640'],
        browsers: {
          chrome: 54.3,
          safari: 32.1,
          firefox: 8.9,
          samsung: 4.7
        },
        operatingSystems: {
          android: 58.9,
          ios: 41.1
        },
        issues: ['Slow 3G performance', 'Touch target sizing', 'Form input issues'],
        performance: {
          lcp: '2.3s',
          fid: '67ms',
          cls: '0.18',
          tti: '3.4s'
        },
        engagement: {
          pagesPerSession: 3.2,
          timeOnPage: 167,
          scrollDepth: 89.4,
          clickThroughRate: 8.7
        }
      },
      {
        device: 'Tablet',
        users: 63822,
        percentage: 13.1,
        sessionDuration: 334,
        bounceRate: 25.7,
        conversionRate: 4.9,
        pageLoadTime: 1.6,
        satisfaction: 8.4,
        topResolutions: ['768x1024', '1024x768', '820x1180'],
        browsers: {
          safari: 67.8,
          chrome: 23.4,
          firefox: 6.7,
          edge: 2.1
        },
        operatingSystems: {
          ios: 72.3,
          android: 27.7
        },
        issues: ['Orientation handling', 'Touch gesture conflicts'],
        performance: {
          lcp: '1.6s',
          fid: '34ms',
          cls: '0.09',
          tti: '2.1s'
        },
        engagement: {
          pagesPerSession: 4.6,
          timeOnPage: 198,
          scrollDepth: 82.1,
          clickThroughRate: 10.4
        }
      }
    ],
    behaviorAnalytics: [
      {
        pattern: 'Power Users',
        userCount: 23456,
        percentage: 4.8,
        sessionDuration: 789,
        pagesPerSession: 12.3,
        frequency: 'Daily',
        conversionRate: 18.7,
        revenue: 234567,
        characteristics: ['High engagement', 'Feature adoption', 'Advocacy'],
        preferredFeatures: ['Advanced search', 'Bulk operations', 'Customization'],
        satisfaction: 9.2,
        retention: 94.6,
        supportTickets: 0.8,
        churnRisk: 'LOW',
        engagement: {
          featureUsage: 89.4,
          socialSharing: 23.4,
          feedbackProvided: 45.6,
          communityParticipation: 67.8
        },
        demographics: {
          avgAge: 35,
          techSavvy: 92.3,
          incomeLevel: 'High',
          education: 'Graduate'
        }
      },
      {
        pattern: 'Regular Users',
        userCount: 156789,
        percentage: 32.1,
        sessionDuration: 298,
        pagesPerSession: 4.7,
        frequency: '2-3x per week',
        conversionRate: 6.8,
        revenue: 789012,
        characteristics: ['Consistent usage', 'Goal-oriented', 'Efficiency-focused'],
        preferredFeatures: ['Quick actions', 'Favorites', 'Recently viewed'],
        satisfaction: 8.4,
        retention: 78.9,
        supportTickets: 1.2,
        churnRisk: 'MEDIUM',
        engagement: {
          featureUsage: 67.8,
          socialSharing: 12.3,
          feedbackProvided: 28.9,
          communityParticipation: 34.5
        },
        demographics: {
          avgAge: 31,
          techSavvy: 74.6,
          incomeLevel: 'Medium',
          education: 'Bachelor'
        }
      },
      {
        pattern: 'Casual Browsers',
        userCount: 234567,
        percentage: 48.1,
        sessionDuration: 145,
        pagesPerSession: 2.1,
        frequency: 'Weekly',
        conversionRate: 1.9,
        revenue: 123456,
        characteristics: ['Low engagement', 'Price-sensitive', 'Comparison shopping'],
        preferredFeatures: ['Search', 'Categories', 'Reviews'],
        satisfaction: 7.2,
        retention: 43.2,
        supportTickets: 2.1,
        churnRisk: 'HIGH',
        engagement: {
          featureUsage: 34.5,
          socialSharing: 5.6,
          feedbackProvided: 8.9,
          communityParticipation: 12.3
        },
        demographics: {
          avgAge: 28,
          techSavvy: 56.7,
          incomeLevel: 'Low-Medium',
          education: 'High School'
        }
      },
      {
        pattern: 'One-time Visitors',
        userCount: 72901,
        percentage: 14.9,
        sessionDuration: 67,
        pagesPerSession: 1.3,
        frequency: 'Single visit',
        conversionRate: 0.4,
        revenue: 12345,
        characteristics: ['High bounce rate', 'Quick exit', 'Research mode'],
        preferredFeatures: ['Search', 'Landing page', 'Contact info'],
        satisfaction: 6.1,
        retention: 5.2,
        supportTickets: 0.3,
        churnRisk: 'IMMEDIATE',
        engagement: {
          featureUsage: 12.3,
          socialSharing: 1.2,
          feedbackProvided: 2.3,
          communityParticipation: 0.8
        },
        demographics: {
          avgAge: 26,
          techSavvy: 45.6,
          incomeLevel: 'Varied',
          education: 'Varied'
        }
      }
    ],
    uxAlerts: [
      {
        type: 'CRITICAL',
        category: 'Performance',
        message: 'Mobile page load time exceeding 3 seconds - severe UX impact detected',
        metric: 'Page Load Time',
        currentValue: '3.2s',
        threshold: '2.5s',
        impact: 'High bounce rate, low conversion, user frustration',
        affectedUsers: 189234,
        severity: 'HIGH',
        timestamp: '10:15',
        trendDirection: 'WORSENING',
        detectedBy: 'Performance Monitor',
        recommendation: 'Implement image optimization, reduce JavaScript bundle size, enable CDN',
        urgency: 'IMMEDIATE',
        escalation: 'UX_TEAM',
        estimatedRevenueLoss: '$23,456/day',
        userFeedback: '67% report slow loading issues',
        deviceSpecific: true,
        regions: ['Global']
      },
      {
        type: 'HIGH',
        category: 'Conversion',
        message: 'Shopping cart abandonment rate increased 15% in last 24 hours',
        metric: 'Cart Abandonment',
        currentValue: '65.5%',
        threshold: '50%',
        impact: 'Lost sales opportunity, reduced conversion funnel efficiency',
        affectedUsers: 24087,
        severity: 'MEDIUM',
        timestamp: '10:12',
        trendDirection: 'INCREASING',
        detectedBy: 'Conversion Analytics',
        recommendation: 'Review checkout flow, implement cart recovery emails, simplify payment process',
        urgency: 'HIGH',
        escalation: 'CONVERSION_TEAM',
        estimatedRevenueLoss: '$45,678/day',
        userFeedback: '43% report checkout complexity',
        deviceSpecific: false,
        regions: ['North America', 'Europe']
      },
      {
        type: 'WARNING',
        category: 'User Satisfaction',
        message: 'NPS score dropped below target threshold - user sentiment declining',
        metric: 'Net Promoter Score',
        currentValue: '67',
        threshold: '70',
        impact: 'Reduced customer loyalty, potential churn increase, brand reputation risk',
        affectedUsers: 23456,
        severity: 'MEDIUM',
        timestamp: '10:10',
        trendDirection: 'DECLINING',
        detectedBy: 'Satisfaction Monitor',
        recommendation: 'Conduct user interviews, analyze feedback themes, implement quick fixes',
        urgency: 'MEDIUM',
        escalation: 'CUSTOMER_SUCCESS',
        estimatedRevenueLoss: '$12,345/week',
        userFeedback: 'Mixed reviews on recent UI changes',
        deviceSpecific: false,
        regions: ['Global']
      },
      {
        type: 'INFO',
        category: 'Optimization',
        message: 'Desktop conversion rate achieved new record high - 6.2% success',
        metric: 'Desktop Conversion',
        currentValue: '6.2%',
        baseline: '5.8%',
        impact: 'Increased revenue, improved user experience, validation of recent optimizations',
        affectedUsers: 234567,
        severity: 'POSITIVE',
        timestamp: '10:08',
        trendDirection: 'IMPROVING',
        detectedBy: 'Conversion Analytics',
        recommendation: 'Apply successful patterns to mobile experience, document best practices',
        priority: 'LOW',
        opportunity: 'CROSS_PLATFORM_OPTIMIZATION',
        revenueGain: '+$34,567/week',
        userFeedback: 'Positive response to new checkout flow',
        deviceSpecific: true,
        successFactors: ['Simplified navigation', 'Improved CTAs', 'Faster loading']
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        users: 23456,
        sessions: 18234,
        pageViews: 67890,
        bounceRate: 23.7,
        conversionRate: 4.8,
        satisfaction: 8.7,
        loadTime: 1.4,
        errorRate: 0.8,
        trends: {
          users: '+5.2%',
          conversion: '+0.3%',
          satisfaction: '+0.1%',
          loadTime: '+0.2s'
        },
        topPages: [
          { page: '/products', views: 12345, conversion: 5.6 },
          { page: '/home', views: 9876, conversion: 3.2 },
          { page: '/categories', views: 7654, conversion: 4.1 }
        ],
        issues: 1,
        achievements: 2
      },
      {
        period: 'Last 24 Hours',
        users: 487623,
        sessions: 378934,
        pageViews: 1234567,
        bounceRate: 25.2,
        conversionRate: 4.6,
        satisfaction: 8.5,
        loadTime: 1.6,
        errorRate: 1.1,
        trends: {
          users: '+12.7%',
          conversion: '-0.2%',
          satisfaction: '-0.2%',
          loadTime: '+0.4s'
        },
        topPages: [
          { page: '/products', views: 234567, conversion: 5.4 },
          { page: '/home', views: 189234, conversion: 2.9 },
          { page: '/search', views: 123456, conversion: 3.8 }
        ],
        issues: 3,
        achievements: 1
      },
      {
        period: 'Last 7 Days',
        users: 2891234,
        sessions: 2234567,
        pageViews: 7890123,
        bounceRate: 27.8,
        conversionRate: 4.2,
        satisfaction: 8.2,
        loadTime: 1.8,
        errorRate: 1.4,
        trends: {
          users: '+18.9%',
          conversion: '-0.6%',
          satisfaction: '-0.5%',
          loadTime: '+0.6s'
        },
        topPages: [
          { page: '/products', views: 1567890, conversion: 5.1 },
          { page: '/home', views: 1234567, conversion: 2.6 },
          { page: '/categories', views: 987654, conversion: 3.5 }
        ],
        issues: 8,
        achievements: 4
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setUxData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        uxOverview: {
          ...prev.uxOverview,
          activeUsers: Math.max(20000, Math.min(30000, prev.uxOverview.activeUsers + Math.floor((Math.random() - 0.5) * 1000))),
          bounceRate: Math.max(20.0, Math.min(30.0, prev.uxOverview.bounceRate + (Math.random() - 0.5) * 2.0)),
          conversionRate: Math.max(4.0, Math.min(6.0, prev.uxOverview.conversionRate + (Math.random() - 0.5) * 0.5)),
          userSatisfaction: Math.max(8.0, Math.min(9.0, prev.uxOverview.userSatisfaction + (Math.random() - 0.5) * 0.3))
        }
      }));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'IMMEDIATE': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
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
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">User Experience Intelligence Center</h1>
              <p className="text-purple-300">UX analytics & user journey optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{uxData.currentTime}</div>
            <div className="text-purple-300">Experience Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* UX Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Active Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(uxData.uxOverview.activeUsers)}</div>
            <div className="text-purple-300 text-sm">{formatNumber(uxData.uxOverview.totalUsers)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Sessions
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(uxData.uxOverview.sessionsToday)}</div>
            <div className="text-cyan-300 text-sm">Today</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Conversion
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(uxData.uxOverview.conversionRate, 3, 5)}`}>
              {formatPercentage(uxData.uxOverview.conversionRate)}
            </div>
            <div className="text-green-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Session Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatDuration(uxData.uxOverview.averageSessionDuration)}</div>
            <div className="text-yellow-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Satisfaction
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(uxData.uxOverview.userSatisfaction * 10, 75, 85)}`}>
              {uxData.uxOverview.userSatisfaction.toFixed(1)}
            </div>
            <div className="text-blue-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
                Bounce Rate
              </h3>
            </div>
            <div className={`text-3xl font-bold ${uxData.uxOverview.bounceRate < 25 ? 'text-green-400' : uxData.uxOverview.bounceRate < 35 ? 'text-yellow-400' : 'text-red-400'}`}>
              {formatPercentage(uxData.uxOverview.bounceRate)}
            </div>
            <div className="text-orange-300 text-sm">Bounce</div>
          </div>
        </div>

        {/* User Journey Analytics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <MousePointer className="w-5 h-5 text-purple-400 mr-2" />
            User Journey Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Journey Stage</th>
                  <th className="text-center p-3 text-slate-300">Users</th>
                  <th className="text-center p-3 text-slate-300">Conversion</th>
                  <th className="text-center p-3 text-slate-300">Time Spent</th>
                  <th className="text-center p-3 text-slate-300">Satisfaction</th>
                  <th className="text-center p-3 text-slate-300">Key Issues</th>
                </tr>
              </thead>
              <tbody>
                {uxData.userJourneyAnalytics.map((stage, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{stage.stage}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {stage.topSources.slice(0, 2).join(', ')} • {formatPercentage(stage.exitRate)} exit
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-purple-400 font-medium">{formatNumber(stage.users)}</div>
                      <div className="text-slate-400 text-xs">
                        D: {formatPercentage(stage.deviceBreakdown.desktop)} | M: {formatPercentage(stage.deviceBreakdown.mobile)}
                      </div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(stage.conversionRate, 50, 70)}`}>
                      {formatPercentage(stage.conversionRate)}
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-yellow-400 font-medium">{formatDuration(stage.avgTimeSpent)}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(stage.engagement.clicks)} clicks</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(stage.satisfactionScore * 10, 75, 85)}`}>
                      {stage.satisfactionScore.toFixed(1)}
                    </td>
                    <td className="p-3">
                      <div className="text-red-400 text-xs mb-1">
                        {stage.issues.slice(0, 1).map(issue => `• ${issue}`)}
                      </div>
                      <div className="text-green-400 text-xs">
                        {stage.improvements.slice(0, 1).map(improvement => `• ${improvement}`)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Device Analytics & Behavior Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Smartphone className="w-5 h-5 text-cyan-400 mr-2" />
              Device Experience Analytics
            </h3>
            <div className="space-y-4">
              {uxData.deviceAnalytics.map((device, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{device.device}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(device.satisfaction * 10, 75, 85)}`}>
                        {device.satisfaction.toFixed(1)} Satisfaction
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(device.percentage)}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Users: {formatNumber(device.users)}</div>
                    <div className="text-cyan-400">Session: {formatDuration(device.sessionDuration)}</div>
                    <div className="text-green-400">Conv: {formatPercentage(device.conversionRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Load: {device.pageLoadTime}s</div>
                    <div className={`${device.bounceRate < 25 ? 'text-green-400' : 'text-red-400'}`}>
                      Bounce: {formatPercentage(device.bounceRate)}
                    </div>
                    <div className="text-blue-400">Pages: {device.engagement.pagesPerSession}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">LCP: {device.performance.lcp}</div>
                    <div className="text-pink-400">FID: {device.performance.fid}</div>
                    <div className="text-orange-400">TTI: {device.performance.tti}</div>
                  </div>
                  {device.issues.length > 0 && (
                    <div className="text-red-400 text-xs">
                      <strong>Issues:</strong> {device.issues.slice(0, 2).join('; ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              User Behavior Patterns
            </h3>
            <div className="space-y-4">
              {uxData.behaviorAnalytics.map((pattern, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{pattern.pattern}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(pattern.satisfaction * 10, 75, 85)}`}>
                        {pattern.satisfaction.toFixed(1)} Sat
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(pattern.percentage)}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Users: {formatNumber(pattern.userCount)}</div>
                    <div className="text-cyan-400">Session: {formatDuration(pattern.sessionDuration)}</div>
                    <div className="text-green-400">Conv: {formatPercentage(pattern.conversionRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Pages: {pattern.pagesPerSession}</div>
                    <div className="text-blue-400">Frequency: {pattern.frequency}</div>
                    <div className="text-orange-400">Revenue: ${formatNumber(pattern.revenue)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-pink-400">Retention: {formatPercentage(pattern.retention)}</div>
                    <div className={`${pattern.churnRisk === 'LOW' ? 'text-green-400' : pattern.churnRisk === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'}`}>
                      Risk: {pattern.churnRisk}
                    </div>
                    <div className="text-indigo-400">Support: {pattern.supportTickets}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Characteristics:</strong> {pattern.characteristics.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics & UX Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-green-400 mr-2" />
              UX Performance Timeline
            </h3>
            <div className="space-y-4">
              {uxData.performanceMetrics.map((metrics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metrics.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(metrics.satisfaction * 10, 75, 85)}`}>
                        {metrics.satisfaction.toFixed(1)} Satisfaction
                      </span>
                      <span className="text-slate-400 text-xs">{formatNumber(metrics.users)} users</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Sessions: {formatNumber(metrics.sessions)}</div>
                    <div className="text-cyan-400">Views: {formatNumber(metrics.pageViews)}</div>
                    <div className="text-green-400">Conv: {formatPercentage(metrics.conversionRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${metrics.bounceRate < 25 ? 'text-green-400' : 'text-red-400'}`}>
                      Bounce: {formatPercentage(metrics.bounceRate)}
                    </div>
                    <div className="text-yellow-400">Load: {metrics.loadTime}s</div>
                    <div className="text-orange-400">Errors: {formatPercentage(metrics.errorRate)}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-green-400">Users: {metrics.trends.users}</div>
                    <div className="text-blue-400">Conv: {metrics.trends.conversion}</div>
                    <div className="text-purple-400">Sat: {metrics.trends.satisfaction}</div>
                    <div className="text-red-400">Load: {metrics.trends.loadTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              UX System Alerts
            </h3>
            <div className="space-y-4">
              {uxData.uxAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      {alert.urgency && <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>{alert.urgency}</span>}
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                    {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                    {alert.affectedUsers && <div className="text-slate-300">Affected: {formatNumber(alert.affectedUsers)} users</div>}
                    {alert.estimatedRevenueLoss && <div className="text-red-400">Revenue Impact: {alert.estimatedRevenueLoss}</div>}
                    {alert.revenueGain && <div className="text-green-400">Revenue Gain: {alert.revenueGain}</div>}
                  </div>
                  <div className="text-slate-300 text-xs mb-2">
                    <strong>Impact:</strong> {alert.impact}
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