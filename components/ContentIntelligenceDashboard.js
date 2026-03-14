// 📊 Content Intelligence Dashboard v1.0
// AI-powered content optimization with performance prediction & trend analysis
import { useState, useEffect } from 'react';
import { Brain, TrendingUp, Eye, Zap, Target, FileText, BarChart3, Star, Clock, CheckCircle, AlertTriangle, ArrowUpRight, ThumbsUp, MessageSquare } from 'lucide-react';

export default function ContentIntelligenceDashboard() {
  const [contentMetrics, setContentMetrics] = useState({
    qualityScoring: {
      avgContentQuality: 87.3,
      topPerformingTopics: ['AI Marketing', 'Social Media Strategy', 'Content Creation'],
      contentDepthScore: 8.4,
      uniquenessRating: 92.7,
      insightDensity: 76.8,
      educationalValue: 89.1
    },
    trendAnalysis: {
      emergingTopics: [
        { topic: 'AI Automation', growth: 234, potential: 94 },
        { topic: 'Personal Branding', growth: 189, potential: 87 },
        { topic: 'Video Marketing', growth: 156, potential: 91 }
      ],
      seasonalTrends: 'Q2 content planning phase',
      competitorGaps: 12,
      viralPrediction: 78.5,
      trendDirection: 'up'
    },
    contentROI: {
      revenuePerContent: 1247,
      totalContentRevenue: 28741,
      topRevenueGenerators: 8,
      investmentAnalysis: 347,
      portfolioROI: 923,
      conversionRate: 14.6
    },
    performancePrediction: {
      nextVideoViralChance: 82.3,
      optimalContentLength: '3-5 minutes',
      bestPublishTime: '10:30 AM Tuesday',
      expectedEngagement: 'High',
      revenueProjection: 2340,
      competitiveAdvantage: 'Strong'
    }
  });

  const [contentAnalytics, setContentAnalytics] = useState([
    {
      title: 'AI Marketing Strategy Deep Dive',
      qualityScore: 94,
      engagement: 2847,
      revenue: 3200,
      viralPotential: 89,
      insights: 'High-value educational content with actionable strategies',
      topics: ['AI', 'Strategy', 'ROI'],
      status: 'viral',
      publishDate: '2026-03-10'
    },
    {
      title: 'LinkedIn Outreach Automation',
      qualityScore: 87,
      engagement: 1923,
      revenue: 1850,
      viralPotential: 76,
      insights: 'Practical tutorial with clear implementation steps',
      topics: ['LinkedIn', 'Automation', 'Outreach'],
      status: 'performing',
      publishDate: '2026-03-08'
    },
    {
      title: 'Content Creation Workflow',
      qualityScore: 92,
      engagement: 2156,
      revenue: 2100,
      viralPotential: 83,
      insights: 'Process-focused content with systematic approach',
      topics: ['Content', 'Workflow', 'Efficiency'],
      status: 'trending',
      publishDate: '2026-03-05'
    },
    {
      title: 'Social Media Analytics Breakdown',
      qualityScore: 85,
      engagement: 1678,
      revenue: 1420,
      viralPotential: 71,
      insights: 'Data-driven insights with visualization examples',
      topics: ['Analytics', 'Social Media', 'Data'],
      status: 'stable',
      publishDate: '2026-03-03'
    }
  ]);

  const [intelligentInsights, setIntelligentInsights] = useState([
    {
      type: 'opportunity',
      title: 'AI Automation Trend Spike',
      message: 'Content about AI automation is trending 234% higher this week',
      action: 'Create AI automation tutorial series',
      impact: 'high',
      confidence: 94
    },
    {
      type: 'optimization',
      title: 'Optimal Content Length Identified',
      message: '3-5 minute videos show 43% higher engagement than longer content',
      action: 'Adjust video production to target 4-minute duration',
      impact: 'medium',
      confidence: 87
    },
    {
      type: 'competitive',
      title: 'Content Gap Opportunity',
      message: '12 high-value topics your competitors are not covering effectively',
      action: 'Develop content for underserved topics',
      impact: 'high',
      confidence: 91
    },
    {
      type: 'prediction',
      title: 'Viral Content Prediction',
      message: 'Next AI marketing video has 82% probability of viral performance',
      action: 'Prepare promotion strategy for Tuesday launch',
      impact: 'high',
      confidence: 82
    },
    {
      type: 'revenue',
      title: 'Revenue Attribution Success',
      message: 'Content-to-revenue tracking shows $28K generated this month',
      action: 'Scale successful content formats',
      impact: 'positive',
      confidence: 96
    }
  ]);

  const [topicPerformance, setTopicPerformance] = useState([
    { topic: 'AI Marketing', score: 94, engagement: 3200, revenue: 4500, trend: 'up' },
    { topic: 'Content Strategy', score: 89, engagement: 2800, revenue: 3200, trend: 'up' },
    { topic: 'LinkedIn Automation', score: 87, engagement: 2400, revenue: 2800, trend: 'stable' },
    { topic: 'Social Media Analytics', score: 85, engagement: 2100, revenue: 2400, trend: 'up' },
    { topic: 'Video Marketing', score: 83, engagement: 1900, revenue: 2100, trend: 'down' },
    { topic: 'Personal Branding', score: 81, engagement: 1700, revenue: 1800, trend: 'up' }
  ]);

  const [contentRecommendations, setContentRecommendations] = useState([
    {
      title: 'AI Automation for Small Businesses',
      reasoning: 'High search volume + low competition + trending topic',
      expectedEngagement: 2800,
      viralPotential: 89,
      revenueProjection: 3400,
      difficulty: 'medium',
      priority: 'high'
    },
    {
      title: 'LinkedIn Video Strategy 2026',
      reasoning: 'Seasonal relevance + competitor gap + audience interest',
      expectedEngagement: 2400,
      viralPotential: 76,
      revenueProjection: 2100,
      difficulty: 'low',
      priority: 'high'
    },
    {
      title: 'Content Repurposing Framework',
      reasoning: 'Efficiency focus + actionable steps + scalable content',
      expectedEngagement: 2100,
      viralPotential: 82,
      revenueProjection: 2800,
      difficulty: 'medium',
      priority: 'medium'
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics with realistic fluctuations
      setContentMetrics(prev => ({
        ...prev,
        qualityScoring: {
          ...prev.qualityScoring,
          avgContentQuality: Math.max(75, Math.min(95, prev.qualityScoring.avgContentQuality + (Math.random() - 0.5) * 2))
        },
        trendAnalysis: {
          ...prev.trendAnalysis,
          viralPrediction: Math.max(60, Math.min(95, prev.trendAnalysis.viralPrediction + (Math.random() - 0.5) * 3))
        },
        contentROI: {
          ...prev.contentROI,
          revenuePerContent: Math.max(800, prev.contentROI.revenuePerContent + Math.floor((Math.random() - 0.4) * 100))
        }
      }));

      // Occasionally add new insights
      if (Math.random() < 0.2) {
        const newInsights = [
          'New trending topic detected in target audience',
          'Content optimization opportunity identified',
          'Competitor content analysis updated',
          'Viral prediction model accuracy improved',
          'Revenue attribution pattern recognized'
        ];
        
        setIntelligentInsights(prev => [
          {
            type: ['opportunity', 'optimization', 'competitive', 'prediction', 'revenue'][Math.floor(Math.random() * 5)],
            title: 'Smart Insight Update',
            message: newInsights[Math.floor(Math.random() * newInsights.length)],
            action: 'Review detailed analytics for optimization',
            impact: Math.random() > 0.6 ? 'high' : 'medium',
            confidence: Math.floor(75 + Math.random() * 20)
          },
          ...prev.slice(0, 4)
        ]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getQualityColor = (score) => {
    if (score >= 90) return 'text-green-400 bg-green-500/20';
    if (score >= 80) return 'text-yellow-400 bg-yellow-500/20';
    if (score >= 70) return 'text-orange-400 bg-orange-500/20';
    return 'text-red-400 bg-red-500/20';
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'viral': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'trending': return <ArrowUpRight className="w-4 h-4 text-blue-400" />;
      case 'performing': return <CheckCircle className="w-4 h-4 text-yellow-400" />;
      default: return <Eye className="w-4 h-4 text-gray-400" />;
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <ArrowUpRight className="w-3 h-3 text-green-400" />;
      case 'down': return <ArrowUpRight className="w-3 h-3 text-red-400 rotate-180" />;
      default: return <ArrowUpRight className="w-3 h-3 text-gray-400 rotate-90" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Content Intelligence Dashboard
              </h1>
              <p className="text-gray-400">AI-powered content optimization with performance prediction</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Content Quality</div>
            <div className="text-2xl font-bold text-green-400">{contentMetrics.qualityScoring.avgContentQuality.toFixed(1)}%</div>
          </div>
        </div>
      </div>

      {/* Key Intelligence Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Content Quality */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Quality Score</span>
            </div>
            <div className="text-purple-400 text-sm">{contentMetrics.qualityScoring.contentDepthScore}/10</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Avg Quality</span>
              <span>{contentMetrics.qualityScoring.avgContentQuality.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Uniqueness</span>
              <span>{contentMetrics.qualityScoring.uniquenessRating}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Education Value</span>
              <span>{contentMetrics.qualityScoring.educationalValue}%</span>
            </div>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Trends</span>
            </div>
            <div className="text-blue-400 text-sm">{contentMetrics.trendAnalysis.viralPrediction.toFixed(1)}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Emerging Topics</span>
              <span>{contentMetrics.trendAnalysis.emergingTopics.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Competitor Gaps</span>
              <span>{contentMetrics.trendAnalysis.competitorGaps}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Viral Potential</span>
              <span>{contentMetrics.trendAnalysis.viralPrediction}%</span>
            </div>
          </div>
        </div>

        {/* Content ROI */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="font-medium">Revenue</span>
            </div>
            <div className="text-green-400 text-sm">{contentMetrics.contentROI.portfolioROI}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Per Content</span>
              <span>${contentMetrics.contentROI.revenuePerContent}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Total Revenue</span>
              <span>${(contentMetrics.contentROI.totalContentRevenue / 1000).toFixed(0)}K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Conversion</span>
              <span>{contentMetrics.contentROI.conversionRate}%</span>
            </div>
          </div>
        </div>

        {/* AI Predictions */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Predictions</span>
            </div>
            <div className="text-yellow-400 text-sm">{contentMetrics.performancePrediction.nextVideoViralChance}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Next Video</span>
              <span className="text-xs">{contentMetrics.performancePrediction.expectedEngagement}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Optimal Length</span>
              <span className="text-xs">{contentMetrics.performancePrediction.optimalContentLength}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Best Time</span>
              <span className="text-xs">{contentMetrics.performancePrediction.bestPublishTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Content Performance Analysis */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-indigo-400" />
            <span>Content Performance Analysis</span>
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {contentAnalytics.map((content, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm">{content.title}</span>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(content.status)}
                    <span className={`px-2 py-1 rounded text-xs ${getQualityColor(content.qualityScore)}`}>
                      {content.qualityScore}%
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-gray-400">Engagement</div>
                    <div className="flex items-center space-x-1">
                      <ThumbsUp className="w-3 h-3 text-blue-400" />
                      <span>{content.engagement.toLocaleString()}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Revenue</div>
                    <div className="text-green-400">${content.revenue}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Viral Potential</div>
                    <div>{content.viralPotential}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Published</div>
                    <div className="text-xs">{content.publishDate}</div>
                  </div>
                </div>

                <div className="text-xs text-gray-400 mb-2">{content.insights}</div>
                
                <div className="flex flex-wrap gap-1">
                  {content.topics.map((topic, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-600 rounded text-xs">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Topic Performance Heatmap */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Eye className="w-5 h-5 text-cyan-400" />
            <span>Topic Performance Heatmap</span>
          </h3>
          <div className="space-y-3">
            {topicPerformance.map((topic, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="w-24 text-sm text-gray-400">{topic.topic}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{topic.score}%</span>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(topic.trend)}
                      <span className="text-xs text-gray-400">${(topic.revenue / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        topic.score >= 90 ? 'bg-green-500' :
                        topic.score >= 80 ? 'bg-blue-500' :
                        topic.score >= 70 ? 'bg-yellow-500' :
                        'bg-red-500'
                      }`}
                      style={{ width: `${topic.score}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Insights and Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Intelligent Insights */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Brain className="w-5 h-5 text-purple-400" />
            <span>AI Intelligence Insights</span>
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {intelligentInsights.map((insight, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${
                insight.impact === 'high' ? 'bg-green-900/20 border-green-400' :
                insight.impact === 'medium' ? 'bg-blue-900/20 border-blue-400' :
                insight.impact === 'positive' ? 'bg-purple-900/20 border-purple-400' :
                'bg-gray-900/20 border-gray-400'
              }`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      insight.type === 'opportunity' ? 'bg-green-900/50 text-green-300' :
                      insight.type === 'optimization' ? 'bg-blue-900/50 text-blue-300' :
                      insight.type === 'competitive' ? 'bg-purple-900/50 text-purple-300' :
                      insight.type === 'prediction' ? 'bg-yellow-900/50 text-yellow-300' :
                      'bg-gray-900/50 text-gray-300'
                    }`}>
                      {insight.type}
                    </span>
                    <span className="text-xs text-gray-400">{insight.confidence}% confident</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded ${
                    insight.impact === 'high' ? 'bg-red-900/50 text-red-300' :
                    insight.impact === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                    'bg-gray-900/50 text-gray-300'
                  }`}>
                    {insight.impact}
                  </span>
                </div>
                <h4 className="font-medium text-sm mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-300 mb-2">{insight.message}</p>
                <p className="text-xs text-gray-400 italic">{insight.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Recommendations */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Target className="w-5 h-5 text-green-400" />
            <span>AI Content Recommendations</span>
          </h3>
          <div className="space-y-4">
            {contentRecommendations.map((rec, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-sm">{rec.title}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs ${
                      rec.priority === 'high' ? 'bg-red-900/50 text-red-300' :
                      rec.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                      'bg-gray-900/50 text-gray-300'
                    }`}>
                      {rec.priority}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      rec.difficulty === 'low' ? 'bg-green-900/50 text-green-300' :
                      rec.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                      'bg-red-900/50 text-red-300'
                    }`}>
                      {rec.difficulty}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-3">{rec.reasoning}</p>
                
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Expected Views</div>
                    <div>{rec.expectedEngagement.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Viral Potential</div>
                    <div className="text-blue-400">{rec.viralPotential}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Revenue Proj.</div>
                    <div className="text-green-400">${rec.revenueProjection}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}