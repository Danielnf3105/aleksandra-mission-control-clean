// Competitive Intelligence Center - Market Analysis & Competitive Monitoring
import { useState, useEffect } from 'react';
import { Eye, TrendingUp, Target, Users, DollarSign, BarChart3, Zap, AlertTriangle, Trophy, Star, Globe, Activity } from 'lucide-react';

export default function CompetitiveIntelligenceCenter() {
  const [competitiveData, setCompetitiveData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    marketOverview: {
      marketSize: 15600000000, // $15.6B
      marketGrowth: 23.4,
      ourMarketShare: 2.1,
      competitorCount: 247,
      threatLevel: 'MEDIUM',
      opportunityScore: 87.3,
      marketMaturity: 'GROWTH',
      avgDealSize: 67000
    },
    competitors: [
      {
        name: 'DataVision Analytics',
        marketShare: 18.7,
        revenue: 2890000000,
        growthRate: 15.2,
        threatLevel: 'HIGH',
        strengths: ['Enterprise Sales', 'Brand Recognition', 'Global Reach'],
        weaknesses: ['Legacy Technology', 'Slow Innovation', 'High Prices'],
        recentNews: 'Acquired startup for $120M to enhance AI capabilities',
        stockPrice: 142.35,
        stockChange: -2.3,
        customerSentiment: 72.4,
        productRating: 3.8
      },
      {
        name: 'IntelliFlow Systems',
        marketShare: 12.3,
        revenue: 1940000000,
        growthRate: 28.7,
        threatLevel: 'HIGH',
        strengths: ['Modern Tech Stack', 'Fast Growth', 'Strong Engineering'],
        weaknesses: ['Limited Enterprise Presence', 'Customer Support', 'Market Positioning'],
        recentNews: 'Raised Series D funding of $200M',
        stockPrice: 89.67,
        stockChange: 4.8,
        customerSentiment: 84.2,
        productRating: 4.3
      },
      {
        name: 'AnalyticsPro',
        marketShare: 8.9,
        revenue: 1380000000,
        growthRate: 19.4,
        threatLevel: 'MEDIUM',
        strengths: ['Cost-Effective', 'SMB Focus', 'Easy Integration'],
        weaknesses: ['Limited Features', 'Scalability Issues', 'No Mobile App'],
        recentNews: 'Launched new real-time analytics module',
        stockPrice: 67.23,
        stockChange: 1.7,
        customerSentiment: 79.6,
        productRating: 4.0
      },
      {
        name: 'CloudMetrics Inc',
        marketShare: 6.7,
        revenue: 1040000000,
        growthRate: 31.2,
        threatLevel: 'MEDIUM',
        strengths: ['Cloud-Native', 'API-First', 'Developer-Friendly'],
        weaknesses: ['Small Customer Base', 'Limited Sales Team', 'Brand Awareness'],
        recentNews: 'Partnership with major cloud provider announced',
        stockPrice: 34.89,
        stockChange: 7.2,
        customerSentiment: 88.1,
        productRating: 4.5
      },
      {
        name: 'SmartDash Solutions',
        marketShare: 4.2,
        revenue: 650000000,
        growthRate: 12.8,
        threatLevel: 'LOW',
        strengths: ['Vertical Solutions', 'Domain Expertise', 'Customer Relationships'],
        weaknesses: ['Narrow Focus', 'Limited Innovation', 'Aging Platform'],
        recentNews: 'CEO announces retirement, succession planning underway',
        stockPrice: 28.45,
        stockChange: -0.8,
        customerSentiment: 67.3,
        productRating: 3.5
      }
    ],
    pricingIntelligence: {
      ourPricing: {
        starter: 99,
        professional: 299,
        enterprise: 999,
        avgDeal: 67000
      },
      marketAverage: {
        starter: 150,
        professional: 450,
        enterprise: 1200,
        avgDeal: 78000
      },
      competitorPricing: [
        { competitor: 'DataVision Analytics', starter: 199, professional: 599, enterprise: 1500 },
        { competitor: 'IntelliFlow Systems', starter: 129, professional: 399, enterprise: 1100 },
        { competitor: 'AnalyticsPro', starter: 89, professional: 249, enterprise: 699 },
        { competitor: 'CloudMetrics Inc', starter: 149, professional: 449, enterprise: 1299 }
      ],
      priceAdvantage: 23.7 // % better than average
    },
    featureComparison: [
      {
        feature: 'Real-time Analytics',
        us: 'STRONG',
        dataVision: 'MEDIUM',
        intelliFlow: 'STRONG',
        analyticsPro: 'WEAK',
        cloudMetrics: 'STRONG',
        importance: 'CRITICAL'
      },
      {
        feature: 'AI Integration',
        us: 'STRONG',
        dataVision: 'WEAK',
        intelliFlow: 'MEDIUM',
        analyticsPro: 'WEAK',
        cloudMetrics: 'MEDIUM',
        importance: 'HIGH'
      },
      {
        feature: 'Mobile Experience',
        us: 'STRONG',
        dataVision: 'MEDIUM',
        intelliFlow: 'MEDIUM',
        analyticsPro: 'WEAK',
        cloudMetrics: 'STRONG',
        importance: 'HIGH'
      },
      {
        feature: 'API Ecosystem',
        us: 'STRONG',
        dataVision: 'WEAK',
        intelliFlow: 'STRONG',
        analyticsPro: 'MEDIUM',
        cloudMetrics: 'STRONG',
        importance: 'HIGH'
      },
      {
        feature: 'Enterprise Security',
        us: 'MEDIUM',
        dataVision: 'STRONG',
        intelliFlow: 'MEDIUM',
        analyticsPro: 'WEAK',
        cloudMetrics: 'MEDIUM',
        importance: 'CRITICAL'
      },
      {
        feature: 'Customer Support',
        us: 'STRONG',
        dataVision: 'MEDIUM',
        intelliFlow: 'WEAK',
        analyticsPro: 'MEDIUM',
        cloudMetrics: 'WEAK',
        importance: 'HIGH'
      }
    ],
    marketMovements: [
      {
        time: '23:15',
        event: 'DataVision Analytics announces Q1 earnings miss',
        impact: 'NEGATIVE',
        competitor: 'DataVision Analytics',
        significance: 'HIGH',
        details: 'Revenue down 3% QoQ, guidance lowered for Q2'
      },
      {
        time: '22:45',
        event: 'IntelliFlow Systems hires former Google VP',
        impact: 'POSITIVE',
        competitor: 'IntelliFlow Systems',
        significance: 'MEDIUM',
        details: 'New VP of Product to lead AI initiative'
      },
      {
        time: '21:30',
        event: 'CloudMetrics announces major partnership',
        impact: 'POSITIVE',
        competitor: 'CloudMetrics Inc',
        significance: 'HIGH',
        details: 'Strategic alliance with AWS for joint go-to-market'
      },
      {
        time: '20:15',
        event: 'Industry report highlights growth in real-time analytics',
        impact: 'POSITIVE',
        competitor: 'Market',
        significance: 'MEDIUM',
        details: 'Gartner predicts 40% growth in real-time analytics market'
      },
      {
        time: '19:45',
        event: 'AnalyticsPro customer data breach reported',
        impact: 'NEGATIVE',
        competitor: 'AnalyticsPro',
        significance: 'HIGH',
        details: 'Security incident affects 50K+ customers'
      }
    ],
    winLossAnalysis: {
      winRate: 67.3,
      lossRate: 32.7,
      avgSalesCycle: 89, // days
      topWinReasons: [
        { reason: 'Superior AI capabilities', percentage: 34.7 },
        { reason: 'Better pricing', percentage: 28.3 },
        { reason: 'Faster implementation', percentage: 23.1 },
        { reason: 'Better customer support', percentage: 19.8 },
        { reason: 'Modern user interface', percentage: 16.2 }
      ],
      topLossReasons: [
        { reason: 'Incumbent vendor preference', percentage: 41.2 },
        { reason: 'Missing enterprise features', percentage: 29.7 },
        { reason: 'Budget constraints', percentage: 23.8 },
        { reason: 'Integration complexity', percentage: 18.4 },
        { reason: 'Brand recognition', percentage: 15.9 }
      ],
      competitorWins: [
        { competitor: 'DataVision Analytics', wins: 23, winRate: 45.2 },
        { competitor: 'IntelliFlow Systems', wins: 18, winRate: 38.7 },
        { competitor: 'AnalyticsPro', wins: 12, winRate: 33.1 },
        { competitor: 'CloudMetrics Inc', wins: 8, winRate: 28.9 }
      ]
    },
    socialSentiment: {
      ourBrand: {
        mentions: 2847,
        sentiment: 84.7,
        engagement: 12.3,
        trending: '+15.7%'
      },
      competitors: [
        { name: 'DataVision', mentions: 5678, sentiment: 68.2, engagement: 8.9, trending: '-3.2%' },
        { name: 'IntelliFlow', mentions: 3421, sentiment: 79.4, engagement: 15.6, trending: '+22.8%' },
        { name: 'AnalyticsPro', mentions: 2156, sentiment: 58.7, engagement: 6.7, trending: '-18.4%' },
        { name: 'CloudMetrics', mentions: 1789, sentiment: 81.2, engagement: 18.9, trending: '+31.5%' }
      ]
    },
    marketOpportunities: [
      {
        opportunity: 'Real-time Manufacturing Analytics',
        marketSize: 2400000000,
        growthRate: 34.7,
        competitionLevel: 'LOW',
        timeToMarket: '6 months',
        investmentRequired: 890000,
        expectedROI: 245.3
      },
      {
        opportunity: 'AI-Powered Predictive Maintenance',
        marketSize: 1800000000,
        growthRate: 42.1,
        competitionLevel: 'MEDIUM',
        timeToMarket: '9 months',
        investmentRequired: 1200000,
        expectedROI: 189.7
      },
      {
        opportunity: 'Edge Computing Analytics',
        marketSize: 3200000000,
        growthRate: 38.9,
        competitionLevel: 'HIGH',
        timeToMarket: '12 months',
        investmentRequired: 1800000,
        expectedROI: 167.8
      },
      {
        opportunity: 'Healthcare Data Analytics',
        marketSize: 4600000000,
        growthRate: 28.4,
        competitionLevel: 'HIGH',
        timeToMarket: '18 months',
        investmentRequired: 2500000,
        expectedROI: 156.2
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCompetitiveData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        marketOverview: {
          ...prev.marketOverview,
          ourMarketShare: Math.max(1.5, Math.min(3.0, prev.marketOverview.ourMarketShare + (Math.random() - 0.5) * 0.1)),
          opportunityScore: Math.max(80, Math.min(95, prev.marketOverview.opportunityScore + (Math.random() - 0.5) * 2))
        },
        winLossAnalysis: {
          ...prev.winLossAnalysis,
          winRate: Math.max(60, Math.min(75, prev.winLossAnalysis.winRate + (Math.random() - 0.5) * 2))
        }
      }));
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  const getThreatColor = (threat) => {
    switch (threat) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      case 'NEGATIVE': return 'text-red-400 bg-red-400/20';
      case 'NEUTRAL': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getSignificanceColor = (significance) => {
    switch (significance) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getFeatureColor = (strength) => {
    switch (strength) {
      case 'STRONG': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'WEAK': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getCompetitionColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `$${(amount / 1000000000).toFixed(1)}B`;
    } else if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount}`;
  };

  const formatPercentage = (value) => {
    const sign = value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-orange-900 via-slate-900 to-red-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-orange-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Competitive Intelligence Center</h1>
              <p className="text-orange-300">Market analysis, competitive monitoring & strategic intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-orange-400">{competitiveData.currentTime}</div>
            <div className="text-orange-300">Intelligence Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Market Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-orange-400 mr-2" />
                Market Size
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatCurrency(competitiveData.marketOverview.marketSize)}</div>
            <div className="text-orange-300 text-sm">{formatPercentage(competitiveData.marketOverview.marketGrowth)} growth</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Market Share
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{competitiveData.marketOverview.ourMarketShare.toFixed(1)}%</div>
            <div className="text-cyan-300 text-sm">{competitiveData.marketOverview.competitorCount} competitors</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
                Threat Level
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getThreatColor(competitiveData.marketOverview.threatLevel).split(' ')[0]}`}>
              {competitiveData.marketOverview.threatLevel}
            </div>
            <div className="text-yellow-300 text-sm">Market assessment</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Star className="w-5 h-5 text-green-400 mr-2" />
                Opportunity Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{competitiveData.marketOverview.opportunityScore.toFixed(1)}</div>
            <div className="text-green-300 text-sm">Growth potential</div>
          </div>
        </div>

        {/* Competitors & Pricing Intelligence */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-red-400 mr-2" />
              Top Competitors
            </h3>
            <div className="space-y-4">
              {competitiveData.competitors.slice(0, 4).map((competitor, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{competitor.name}</h4>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatColor(competitor.threatLevel)}`}>
                        {competitor.threatLevel}
                      </span>
                      <span className="text-cyan-400 text-sm">{competitor.marketShare.toFixed(1)}%</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-green-400 font-medium text-sm">{formatCurrency(competitor.revenue)}</div>
                      <div className="text-slate-400 text-xs">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium text-sm ${competitor.growthRate > 20 ? 'text-green-400' : competitor.growthRate > 10 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {formatPercentage(competitor.growthRate)}
                      </div>
                      <div className="text-slate-400 text-xs">Growth</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium text-sm">{competitor.productRating.toFixed(1)}/5</div>
                      <div className="text-slate-400 text-xs">Rating</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs mb-2">{competitor.recentNews}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">Strengths: {competitor.strengths.slice(0, 2).join(', ')}</span>
                    <span className="text-red-400">Weaknesses: {competitor.weaknesses.slice(0, 1).join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-green-400 mr-2" />
              Pricing Intelligence
            </h3>
            <div className="mb-6">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(competitiveData.pricingIntelligence.priceAdvantage)}</div>
                <div className="text-green-300 text-sm">Price Advantage</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mb-4 text-center">
                <div>
                  <div className="text-white font-medium text-sm">Starter</div>
                  <div className="text-cyan-400 text-sm">${competitiveData.pricingIntelligence.ourPricing.starter}</div>
                  <div className="text-slate-400 text-xs">vs ${competitiveData.pricingIntelligence.marketAverage.starter}</div>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Pro</div>
                  <div className="text-cyan-400 text-sm">${competitiveData.pricingIntelligence.ourPricing.professional}</div>
                  <div className="text-slate-400 text-xs">vs ${competitiveData.pricingIntelligence.marketAverage.professional}</div>
                </div>
                <div>
                  <div className="text-white font-medium text-sm">Enterprise</div>
                  <div className="text-cyan-400 text-sm">${competitiveData.pricingIntelligence.ourPricing.enterprise}</div>
                  <div className="text-slate-400 text-xs">vs ${competitiveData.pricingIntelligence.marketAverage.enterprise}</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white text-sm font-medium mb-2">Competitor Pricing</h4>
              <div className="space-y-2">
                {competitiveData.pricingIntelligence.competitorPricing.map((comp, index) => (
                  <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                    <span className="text-slate-300 text-sm">{comp.competitor.split(' ')[0]}</span>
                    <div className="text-xs space-x-2">
                      <span className="text-green-400">${comp.starter}</span>
                      <span className="text-yellow-400">${comp.professional}</span>
                      <span className="text-red-400">${comp.enterprise}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison & Market Movements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-purple-400 mr-2" />
              Feature Comparison
            </h3>
            <div className="space-y-3">
              {competitiveData.featureComparison.map((feature, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{feature.feature}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${feature.importance === 'CRITICAL' ? 'text-red-400 bg-red-400/20' : 'text-yellow-400 bg-yellow-400/20'}`}>
                      {feature.importance}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-slate-400">Us</div>
                      <span className={`px-1 py-0.5 rounded ${getFeatureColor(feature.us)}`}>
                        {feature.us}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400">DV</div>
                      <span className={`px-1 py-0.5 rounded ${getFeatureColor(feature.dataVision)}`}>
                        {feature.dataVision}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400">IF</div>
                      <span className={`px-1 py-0.5 rounded ${getFeatureColor(feature.intelliFlow)}`}>
                        {feature.intelliFlow}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400">AP</div>
                      <span className={`px-1 py-0.5 rounded ${getFeatureColor(feature.analyticsPro)}`}>
                        {feature.analyticsPro}
                      </span>
                    </div>
                    <div className="text-center">
                      <div className="text-slate-400">CM</div>
                      <span className={`px-1 py-0.5 rounded ${getFeatureColor(feature.cloudMetrics)}`}>
                        {feature.cloudMetrics}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Market Movements
            </h3>
            <div className="space-y-3">
              {competitiveData.marketMovements.map((movement, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(movement.impact)}`}>
                        {movement.impact}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSignificanceColor(movement.significance)}`}>
                        {movement.significance}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{movement.time}</span>
                  </div>
                  <div className="text-white text-sm font-medium mb-1">{movement.event}</div>
                  <div className="text-slate-300 text-xs">{movement.details}</div>
                  <div className="text-orange-400 text-xs mt-1">Competitor: {movement.competitor}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Win/Loss Analysis & Social Sentiment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Trophy className="w-5 h-5 text-gold-400 mr-2" />
              Win/Loss Analysis
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{competitiveData.winLossAnalysis.winRate.toFixed(1)}%</div>
                  <div className="text-green-300 text-sm">Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{competitiveData.winLossAnalysis.avgSalesCycle}d</div>
                  <div className="text-orange-300 text-sm">Sales Cycle</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-green-400 text-sm font-medium mb-2">Top Win Reasons</h4>
                <div className="space-y-1">
                  {competitiveData.winLossAnalysis.topWinReasons.slice(0, 3).map((reason, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{reason.reason}</span>
                      <span className="text-green-400">{reason.percentage.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-red-400 text-sm font-medium mb-2">Top Loss Reasons</h4>
                <div className="space-y-1">
                  {competitiveData.winLossAnalysis.topLossReasons.slice(0, 3).map((reason, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-slate-300">{reason.reason}</span>
                      <span className="text-red-400">{reason.percentage.toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-purple-400 mr-2" />
              Social Sentiment
            </h3>
            <div className="mb-6">
              <div className="bg-slate-700/30 rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">Our Brand</span>
                  <span className="text-green-400 font-bold">{competitiveData.socialSentiment.ourBrand.sentiment.toFixed(1)}%</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-xs text-slate-400">
                  <span>Mentions: {competitiveData.socialSentiment.ourBrand.mentions.toLocaleString()}</span>
                  <span>Engagement: {competitiveData.socialSentiment.ourBrand.engagement.toFixed(1)}%</span>
                  <span className="text-green-400">Trending: {competitiveData.socialSentiment.ourBrand.trending}</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium mb-2">Competitor Sentiment</h4>
              {competitiveData.socialSentiment.competitors.map((comp, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <div>
                    <span className="text-white text-sm">{comp.name}</span>
                    <div className="text-slate-400 text-xs">{comp.mentions.toLocaleString()} mentions</div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${comp.sentiment > 75 ? 'text-green-400' : comp.sentiment > 60 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {comp.sentiment.toFixed(1)}%
                    </div>
                    <div className={`text-xs ${comp.trending.includes('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {comp.trending}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Opportunities */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
            Market Opportunities
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {competitiveData.marketOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="font-medium text-white text-sm mb-3">{opportunity.opportunity}</h4>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Market Size</span>
                    <span className="text-green-400 font-medium">{formatCurrency(opportunity.marketSize)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Growth Rate</span>
                    <span className="text-purple-400 font-medium">{formatPercentage(opportunity.growthRate)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Competition</span>
                    <span className={`font-medium ${getCompetitionColor(opportunity.competitionLevel).split(' ')[0]}`}>
                      {opportunity.competitionLevel}
                    </span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Time to Market</span>
                    <span className="text-cyan-400 font-medium">{opportunity.timeToMarket}</span>
                  </div>
                </div>
                <div className="text-center pt-2 border-t border-slate-600">
                  <div className="text-orange-400 font-medium text-sm">{opportunity.expectedROI.toFixed(1)}%</div>
                  <div className="text-slate-400 text-xs">Expected ROI</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}