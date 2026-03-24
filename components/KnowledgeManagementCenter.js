// Knowledge Management Intelligence Center - Knowledge Base & Information Analytics
import { useState, useEffect } from 'react';
import { BookOpen, TrendingUp, Search, Users, Brain, BarChart3, CheckCircle, AlertTriangle, Target, Settings, Activity, Eye } from 'lucide-react';

export default function KnowledgeManagementCenter() {
  const [knowledgeData, setKnowledgeData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    knowledgeOverview: {
      totalArticles: 45678,
      activeArticles: 41234,
      draftArticles: 3124,
      archivedArticles: 1320,
      totalViews: 2345670,
      monthlyViews: 234567,
      searchQueries: 89456,
      knowledgeScore: 87.6,
      contentFreshness: 92.3,
      searchAccuracy: 94.7,
      userSatisfaction: 89.2,
      knowledgeGaps: 156,
      duplicateContent: 23,
      avgReadTime: 4.7,
      knowledgeUtilization: 78.9
    },
    knowledgeCategories: [
      {
        category: 'Product Documentation',
        articles: 8945,
        views: 567890,
        searchHits: 23456,
        avgRating: 4.3,
        freshness: 89.7,
        utilization: 94.2,
        contributors: 89,
        lastUpdate: '2026-03-17',
        topicCoverage: 87.4,
        duplicates: 4,
        gaps: 23,
        languages: 5,
        formats: ['Documentation', 'Video', 'Tutorial', 'FAQ'],
        qualityScore: 91.2,
        engagement: {
          likes: 12456,
          shares: 3456,
          comments: 8901,
          bookmarks: 5678
        },
        trends: {
          views: '+12.4%',
          engagement: '+8.7%',
          quality: '+3.2%'
        },
        riskLevel: 'LOW'
      },
      {
        category: 'Technical Procedures',
        articles: 6789,
        views: 345670,
        searchHits: 18934,
        avgRating: 4.1,
        freshness: 85.3,
        utilization: 87.6,
        contributors: 67,
        lastUpdate: '2026-03-16',
        topicCoverage: 92.1,
        duplicates: 7,
        gaps: 34,
        languages: 3,
        formats: ['Step-by-step', 'Flowchart', 'Video', 'Checklist'],
        qualityScore: 88.9,
        engagement: {
          likes: 9876,
          shares: 2345,
          comments: 6789,
          bookmarks: 4321
        },
        trends: {
          views: '+7.2%',
          engagement: '+5.6%',
          quality: '+1.8%'
        },
        riskLevel: 'MEDIUM'
      },
      {
        category: 'Best Practices',
        articles: 5432,
        views: 234560,
        searchHits: 15678,
        avgRating: 4.5,
        freshness: 94.7,
        utilization: 82.3,
        contributors: 54,
        lastUpdate: '2026-03-18',
        topicCoverage: 78.9,
        duplicates: 2,
        gaps: 45,
        languages: 4,
        formats: ['Article', 'Case Study', 'Template', 'Checklist'],
        qualityScore: 93.4,
        engagement: {
          likes: 8765,
          shares: 1987,
          comments: 5432,
          bookmarks: 3456
        },
        trends: {
          views: '+15.3%',
          engagement: '+12.1%',
          quality: '+4.7%'
        },
        riskLevel: 'LOW'
      },
      {
        category: 'Training Materials',
        articles: 7890,
        views: 456789,
        searchHits: 21234,
        avgRating: 4.2,
        freshness: 88.5,
        utilization: 91.7,
        contributors: 76,
        lastUpdate: '2026-03-17',
        topicCoverage: 85.6,
        duplicates: 5,
        gaps: 28,
        languages: 6,
        formats: ['Course', 'Module', 'Assessment', 'Interactive'],
        qualityScore: 90.1,
        engagement: {
          likes: 11234,
          shares: 2876,
          comments: 7654,
          bookmarks: 4987
        },
        trends: {
          views: '+9.8%',
          engagement: '+7.3%',
          quality: '+2.5%'
        },
        riskLevel: 'LOW'
      },
      {
        category: 'FAQ & Support',
        articles: 12345,
        views: 789012,
        searchHits: 34567,
        avgRating: 3.9,
        freshness: 82.1,
        utilization: 96.8,
        contributors: 123,
        lastUpdate: '2026-03-18',
        topicCoverage: 94.3,
        duplicates: 12,
        gaps: 67,
        languages: 8,
        formats: ['FAQ', 'Troubleshooting', 'Guide', 'Video'],
        qualityScore: 85.7,
        engagement: {
          likes: 15678,
          shares: 4321,
          comments: 10987,
          bookmarks: 6789
        },
        trends: {
          views: '+18.7%',
          engagement: '+14.2%',
          quality: '+1.3%'
        },
        riskLevel: 'MEDIUM'
      }
    ],
    topContent: [
      {
        title: 'API Integration Best Practices Guide',
        id: 'KB-001-API-GUIDE',
        category: 'Best Practices',
        views: 45678,
        rating: 4.8,
        author: 'Engineering Team',
        created: '2026-01-15',
        lastUpdated: '2026-03-10',
        readTime: '12 min',
        language: 'English',
        format: 'Article',
        tags: ['API', 'Integration', 'Best Practices', 'Development'],
        engagement: {
          likes: 2345,
          shares: 456,
          comments: 789,
          bookmarks: 1234
        },
        qualityMetrics: {
          accuracy: 96.7,
          completeness: 94.2,
          clarity: 97.1,
          usefulness: 95.8
        },
        performance: {
          searchRank: 1,
          clickThrough: 23.4,
          bounceRate: 12.1,
          timeOnPage: '8.7 min'
        },
        translations: ['Spanish', 'French', 'German'],
        relatedArticles: 15,
        status: 'PUBLISHED',
        nextReview: '2026-04-10'
      },
      {
        title: 'Database Performance Optimization',
        id: 'KB-002-DB-PERF',
        category: 'Technical Procedures',
        views: 38901,
        rating: 4.6,
        author: 'Database Team',
        created: '2026-02-01',
        lastUpdated: '2026-03-15',
        readTime: '18 min',
        language: 'English',
        format: 'Step-by-step',
        tags: ['Database', 'Performance', 'Optimization', 'SQL'],
        engagement: {
          likes: 1987,
          shares: 321,
          comments: 654,
          bookmarks: 876
        },
        qualityMetrics: {
          accuracy: 95.3,
          completeness: 97.8,
          clarity: 92.1,
          usefulness: 96.4
        },
        performance: {
          searchRank: 2,
          clickThrough: 19.7,
          bounceRate: 8.9,
          timeOnPage: '14.2 min'
        },
        translations: ['Spanish', 'Chinese'],
        relatedArticles: 23,
        status: 'PUBLISHED',
        nextReview: '2026-05-15'
      },
      {
        title: 'Security Incident Response Playbook',
        id: 'KB-003-SEC-IRP',
        category: 'Product Documentation',
        views: 32456,
        rating: 4.7,
        author: 'Security Team',
        created: '2026-01-20',
        lastUpdated: '2026-03-12',
        readTime: '25 min',
        language: 'English',
        format: 'Documentation',
        tags: ['Security', 'Incident Response', 'Playbook', 'Emergency'],
        engagement: {
          likes: 1765,
          shares: 298,
          comments: 543,
          bookmarks: 987
        },
        qualityMetrics: {
          accuracy: 98.1,
          completeness: 96.7,
          clarity: 94.3,
          usefulness: 97.9
        },
        performance: {
          searchRank: 3,
          clickThrough: 17.2,
          bounceRate: 6.4,
          timeOnPage: '19.8 min'
        },
        translations: ['German', 'Japanese'],
        relatedArticles: 19,
        status: 'PUBLISHED',
        nextReview: '2026-04-20'
      },
      {
        title: 'Agile Development Methodologies',
        id: 'KB-004-AGILE-DEV',
        category: 'Training Materials',
        views: 28934,
        rating: 4.4,
        author: 'Project Management',
        created: '2026-02-10',
        lastUpdated: '2026-03-08',
        readTime: '30 min',
        language: 'English',
        format: 'Course',
        tags: ['Agile', 'Development', 'Scrum', 'Methodology'],
        engagement: {
          likes: 1543,
          shares: 267,
          comments: 456,
          bookmarks: 789
        },
        qualityMetrics: {
          accuracy: 93.7,
          completeness: 95.2,
          clarity: 96.8,
          usefulness: 94.6
        },
        performance: {
          searchRank: 4,
          clickThrough: 15.8,
          bounceRate: 11.3,
          timeOnPage: '22.4 min'
        },
        translations: ['Spanish', 'French', 'Portuguese'],
        relatedArticles: 27,
        status: 'PUBLISHED',
        nextReview: '2026-05-10'
      },
      {
        title: 'Customer Support Troubleshooting Guide',
        id: 'KB-005-CS-TROUBLE',
        category: 'FAQ & Support',
        views: 56789,
        rating: 4.1,
        author: 'Support Team',
        created: '2026-01-05',
        lastUpdated: '2026-03-17',
        readTime: '8 min',
        language: 'English',
        format: 'Troubleshooting',
        tags: ['Support', 'Troubleshooting', 'Customer', 'FAQ'],
        engagement: {
          likes: 2876,
          shares: 543,
          comments: 1098,
          bookmarks: 1567
        },
        qualityMetrics: {
          accuracy: 91.4,
          completeness: 89.7,
          clarity: 95.6,
          usefulness: 93.2
        },
        performance: {
          searchRank: 1,
          clickThrough: 31.7,
          bounceRate: 15.2,
          timeOnPage: '5.8 min'
        },
        translations: ['Spanish', 'French', 'German', 'Italian', 'Chinese'],
        relatedArticles: 34,
        status: 'PUBLISHED',
        nextReview: '2026-04-05'
      }
    ],
    knowledgeMetrics: [
      {
        period: 'Last 30 Days',
        articles: 41234,
        views: 234567,
        searches: 89456,
        userSessions: 45678,
        avgSessionTime: '12.4 min',
        contentCreated: 234,
        contentUpdated: 567,
        qualityScore: 89.2,
        searchAccuracy: 94.7,
        userSatisfaction: 87.6,
        knowledgeGaps: 156,
        duplicateResolution: 89.3,
        trends: {
          usage: '+14.7%',
          quality: '+3.2%',
          satisfaction: '+5.8%'
        }
      },
      {
        period: 'Last 90 Days',
        articles: 40123,
        views: 678901,
        searches: 267890,
        userSessions: 134567,
        avgSessionTime: '11.8 min',
        contentCreated: 678,
        contentUpdated: 1456,
        qualityScore: 87.8,
        searchAccuracy: 92.4,
        userSatisfaction: 85.3,
        knowledgeGaps: 189,
        duplicateResolution: 85.7,
        trends: {
          usage: '+18.9%',
          quality: '+7.4%',
          satisfaction: '+8.2%'
        }
      },
      {
        period: 'Last 12 Months',
        articles: 38456,
        views: 2345670,
        searches: 890123,
        userSessions: 456789,
        avgSessionTime: '10.9 min',
        contentCreated: 2345,
        contentUpdated: 5678,
        qualityScore: 84.9,
        searchAccuracy: 89.7,
        userSatisfaction: 82.1,
        knowledgeGaps: 267,
        duplicateResolution: 78.9,
        trends: {
          usage: '+24.3%',
          quality: '+12.6%',
          satisfaction: '+15.7%'
        }
      }
    ],
    knowledgeAlerts: [
      {
        type: 'CRITICAL',
        category: 'Content Gap',
        message: 'Major knowledge gap detected in "API Authentication" - 156 unanswered searches in last 7 days',
        area: 'Technical Documentation',
        severity: 'HIGH',
        impact: 'High user frustration, support ticket increase',
        timestamp: '09:44',
        searchVolume: 156,
        successRate: 23.4,
        detectedBy: 'Knowledge Gap Analysis',
        recommendation: 'Create comprehensive API Authentication guide with examples and troubleshooting',
        estimatedEffort: '16 hours',
        priority: 'URGENT',
        assignedTo: 'Technical Writing Team',
        dueDate: '2026-03-22'
      },
      {
        type: 'HIGH',
        category: 'Content Quality',
        message: 'Legacy documentation showing quality decline - 23 articles below quality threshold',
        area: 'Product Documentation',
        severity: 'MEDIUM',
        impact: 'Reduced user satisfaction, potential misinformation',
        timestamp: '09:43',
        affectedArticles: 23,
        avgQualityScore: 67.8,
        detectedBy: 'Quality Monitoring',
        recommendation: 'Audit and update legacy documentation, consider archiving outdated content',
        estimatedEffort: '40 hours',
        priority: 'HIGH',
        assignedTo: 'Content Review Team',
        dueDate: '2026-03-29'
      },
      {
        type: 'WARNING',
        category: 'Duplicate Content',
        message: 'Duplicate content detected across multiple categories - affecting search accuracy',
        area: 'Knowledge Organization',
        severity: 'MEDIUM',
        impact: 'Confusion, reduced search effectiveness',
        timestamp: '09:42',
        duplicateCount: 12,
        affectedCategories: ['FAQ', 'Technical Procedures', 'Best Practices'],
        detectedBy: 'Duplicate Detection System',
        recommendation: 'Consolidate duplicate content, establish canonical versions',
        estimatedEffort: '24 hours',
        priority: 'MEDIUM',
        assignedTo: 'Knowledge Architects',
        dueDate: '2026-04-05'
      },
      {
        type: 'INFO',
        category: 'Usage Analytics',
        message: 'Best Practices category showing exceptional engagement - 15.3% increase in views',
        area: 'Content Performance',
        severity: 'POSITIVE',
        impact: 'High user value, knowledge transfer success',
        timestamp: '09:41',
        engagementIncrease: '+15.3%',
        topPerformers: ['API Integration Guide', 'Security Best Practices', 'Code Review Guidelines'],
        detectedBy: 'Performance Analytics',
        recommendation: 'Expand successful content patterns to other categories',
        estimatedEffort: '8 hours',
        priority: 'LOW',
        opportunity: 'CONTENT_STRATEGY_OPTIMIZATION'
      }
    ],
    searchAnalytics: [
      {
        query: 'api authentication',
        frequency: 1567,
        successRate: 23.4,
        avgResultRank: 8.7,
        clickThrough: 12.3,
        userSatisfaction: 2.1,
        trend: '+67.8%',
        gap: true,
        suggestedContent: 'API Authentication Complete Guide',
        priority: 'CRITICAL'
      },
      {
        query: 'database optimization',
        frequency: 1234,
        successRate: 87.9,
        avgResultRank: 1.2,
        clickThrough: 34.7,
        userSatisfaction: 4.6,
        trend: '+12.4%',
        gap: false,
        topResult: 'Database Performance Optimization',
        priority: 'MONITOR'
      },
      {
        query: 'security incident response',
        frequency: 987,
        successRate: 92.3,
        avgResultRank: 1.0,
        clickThrough: 45.2,
        userSatisfaction: 4.7,
        trend: '+8.9%',
        gap: false,
        topResult: 'Security Incident Response Playbook',
        priority: 'MAINTAIN'
      },
      {
        query: 'troubleshooting steps',
        frequency: 2345,
        successRate: 76.4,
        avgResultRank: 3.4,
        clickThrough: 28.9,
        userSatisfaction: 4.1,
        trend: '+23.7%',
        gap: false,
        topResult: 'Customer Support Troubleshooting Guide',
        priority: 'OPTIMIZE'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setKnowledgeData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        knowledgeOverview: {
          ...prev.knowledgeOverview,
          knowledgeScore: Math.max(85.0, Math.min(92.0, prev.knowledgeOverview.knowledgeScore + (Math.random() - 0.5) * 1.2)),
          contentFreshness: Math.max(90.0, Math.min(95.0, prev.knowledgeOverview.contentFreshness + (Math.random() - 0.5) * 0.8)),
          searchAccuracy: Math.max(92.0, Math.min(97.0, prev.knowledgeOverview.searchAccuracy + (Math.random() - 0.5) * 0.6))
        }
      }));
    }, 67000);

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

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'PUBLISHED': return 'text-green-400 bg-green-400/20';
      case 'DRAFT': return 'text-yellow-400 bg-yellow-400/20';
      case 'UNDER_REVIEW': return 'text-blue-400 bg-blue-400/20';
      case 'ARCHIVED': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-purple-400 bg-purple-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-500';
      case 'URGENT': return 'text-red-400';
      case 'HIGH': return 'text-orange-400';
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

  return (
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Knowledge Management Intelligence Center</h1>
              <p className="text-purple-300">Knowledge base & information analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{knowledgeData.currentTime}</div>
            <div className="text-purple-300">Knowledge Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Knowledge Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
                Articles
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(knowledgeData.knowledgeOverview.activeArticles)}</div>
            <div className="text-purple-300 text-sm">{formatNumber(knowledgeData.knowledgeOverview.totalArticles)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                Views
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(knowledgeData.knowledgeOverview.monthlyViews)}</div>
            <div className="text-cyan-300 text-sm">This Month</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Search className="w-5 h-5 text-yellow-400 mr-2" />
                Searches
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(knowledgeData.knowledgeOverview.searchQueries)}</div>
            <div className="text-yellow-300 text-sm">Monthly</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-green-400 mr-2" />
                Quality
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(knowledgeData.knowledgeOverview.knowledgeScore)}`}>
              {formatPercentage(knowledgeData.knowledgeOverview.knowledgeScore)}
            </div>
            <div className="text-green-300 text-sm">Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
                Accuracy
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(knowledgeData.knowledgeOverview.searchAccuracy)}`}>
              {formatPercentage(knowledgeData.knowledgeOverview.searchAccuracy)}
            </div>
            <div className="text-blue-300 text-sm">Search</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-orange-400 mr-2" />
                Satisfaction
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(knowledgeData.knowledgeOverview.userSatisfaction)}`}>
              {formatPercentage(knowledgeData.knowledgeOverview.userSatisfaction)}
            </div>
            <div className="text-orange-300 text-sm">User</div>
          </div>
        </div>

        {/* Knowledge Categories */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
            Knowledge Category Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Articles</th>
                  <th className="text-center p-3 text-slate-300">Views</th>
                  <th className="text-center p-3 text-slate-300">Rating</th>
                  <th className="text-center p-3 text-slate-300">Freshness</th>
                  <th className="text-center p-3 text-slate-300">Risk</th>
                </tr>
              </thead>
              <tbody>
                {knowledgeData.knowledgeCategories.map((category, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{category.category}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {category.contributors} contributors • {category.languages} languages
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-purple-400 font-medium">{formatNumber(category.articles)}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage(category.utilization)} util</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{formatNumber(category.views)}</div>
                      <div className="text-slate-400 text-xs">{category.trends.views} trend</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(category.avgRating * 20)}`}>
                      {category.avgRating.toFixed(1)}/5
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(category.freshness)}`}>
                      {formatPercentage(category.freshness)}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskColor(category.riskLevel)}`}>
                        {category.riskLevel}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Content & Search Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Top Performing Content
            </h3>
            <div className="space-y-4">
              {knowledgeData.topContent.map((content, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{content.title}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400 text-xs">⭐ {content.rating.toFixed(1)}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(content.status)}`}>
                        {content.status}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Views: {formatNumber(content.views)}</div>
                    <div className="text-green-400">Likes: {formatNumber(content.engagement.likes)}</div>
                    <div className="text-blue-400">Read: {content.readTime}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(content.qualityMetrics.accuracy)}`}>Acc: {formatPercentage(content.qualityMetrics.accuracy)}</div>
                    <div className={`${getScoreColor(content.qualityMetrics.completeness)}`}>Comp: {formatPercentage(content.qualityMetrics.completeness)}</div>
                    <div className={`${getScoreColor(content.qualityMetrics.usefulness)}`}>Use: {formatPercentage(content.qualityMetrics.usefulness)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Author:</strong> {content.author} • <strong>Category:</strong> {content.category}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Performance:</strong> #{content.performance.searchRank} rank, {formatPercentage(content.performance.clickThrough)} CTR
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Tags:</strong> {content.tags.slice(0, 3).join(', ')}{content.tags.length > 3 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Search className="w-5 h-5 text-yellow-400 mr-2" />
              Search Analytics Dashboard
            </h3>
            <div className="space-y-4">
              {knowledgeData.searchAnalytics.map((search, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">"{search.query}"</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs ${getPriorityColor(search.priority)}`}>
                        {search.priority}
                      </span>
                      {search.gap && (
                        <span className="px-2 py-1 rounded text-xs bg-red-500/20 text-red-400">
                          GAP
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Freq: {formatNumber(search.frequency)}</div>
                    <div className={`${getScoreColor(search.successRate)}`}>Success: {formatPercentage(search.successRate)}</div>
                    <div className="text-purple-400">Trend: {search.trend}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Rank: {search.avgResultRank.toFixed(1)}</div>
                    <div className="text-blue-400">CTR: {formatPercentage(search.clickThrough)}</div>
                    <div className="text-yellow-400">Sat: {search.userSatisfaction.toFixed(1)}/5</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    {search.gap ? (
                      <><strong>Suggested:</strong> {search.suggestedContent}</>
                    ) : (
                      <><strong>Top Result:</strong> {search.topResult}</>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Knowledge Metrics & Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-blue-400 mr-2" />
              Knowledge Performance Metrics
            </h3>
            <div className="space-y-4">
              {knowledgeData.knowledgeMetrics.map((metrics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metrics.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(metrics.qualityScore)}`}>
                        {formatPercentage(metrics.qualityScore)} Quality
                      </span>
                      <span className="text-purple-400 text-xs">{formatNumber(metrics.userSessions)} sessions</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Articles: {formatNumber(metrics.articles)}</div>
                    <div className="text-cyan-400">Views: {formatNumber(metrics.views)}</div>
                    <div className="text-yellow-400">Searches: {formatNumber(metrics.searches)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Created: {formatNumber(metrics.contentCreated)}</div>
                    <div className="text-blue-400">Updated: {formatNumber(metrics.contentUpdated)}</div>
                    <div className={`${getScoreColor(metrics.searchAccuracy)}`}>Accuracy: {formatPercentage(metrics.searchAccuracy)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-orange-400">Usage: {metrics.trends.usage}</div>
                    <div className="text-green-400">Quality: {metrics.trends.quality}</div>
                    <div className="text-purple-400">Satisfaction: {metrics.trends.satisfaction}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              Knowledge Management Alerts
            </h3>
            <div className="space-y-4">
              {knowledgeData.knowledgeAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      <span className={`text-xs ${getPriorityColor(alert.priority)}`}>
                        {alert.priority}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    <div className="text-slate-300">Area: {alert.area}</div>
                    {alert.searchVolume && <div className="text-slate-300">Search Volume: {alert.searchVolume}</div>}
                    {alert.affectedArticles && <div className="text-slate-300">Affected Articles: {alert.affectedArticles}</div>}
                    {alert.estimatedEffort && <div className="text-slate-300">Effort: {alert.estimatedEffort}</div>}
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