// 💰 Cost Intelligence Dashboard v1.0
// Advanced financial optimization with predictive cost analysis & ROI tracking
import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, TrendingDown, AlertTriangle, Target, BarChart3, PieChart, Clock, Zap, CheckCircle, Calculator, CreditCard, Coins } from 'lucide-react';

export default function CostIntelligenceDashboard() {
  const [costMetrics, setCostMetrics] = useState({
    realTimeCosts: {
      totalDailySpend: 47.83,
      hourlyBurnRate: 2.14,
      monthlyProjection: 1434.90,
      budgetUtilization: 67.8,
      weeklySpend: 334.81,
      avgDailyBurnRate: 47.83
    },
    costBreakdown: {
      openAIUsage: 18.42,
      assemblyAIUsage: 12.67,
      infrastructureCosts: 8.95,
      toolSubscriptions: 45.00,
      vercelHosting: 3.20,
      otherExpenses: 6.59
    },
    profitabilityAnalysis: {
      revenueGenerated: 2847.50,
      totalCosts: 94.83,
      profitMargin: 96.7,
      roiPercentage: 2902.3,
      costToRevenueRatio: 3.3,
      breakEvenTarget: 128.50
    },
    costOptimization: {
      potentialSavings: 23.45,
      efficiencyScore: 87.2,
      optimizationOpportunities: 8,
      lastOptimization: '2 days ago',
      monthlyTarget: 1200.00,
      currentTrajectory: 'on-track'
    }
  });

  const [costBreakdownData, setCostBreakdownData] = useState([
    { 
      category: 'AI Services', 
      amount: 31.09, 
      percentage: 32.8, 
      trend: 'up', 
      change: 5.2,
      subcategories: [
        { name: 'OpenAI API', cost: 18.42, usage: '~47K tokens' },
        { name: 'Assembly AI', cost: 12.67, usage: '23 transcriptions' }
      ]
    },
    { 
      category: 'Tool Subscriptions', 
      amount: 45.00, 
      percentage: 47.5, 
      trend: 'stable', 
      change: 0,
      subcategories: [
        { name: 'LinkedIn Sales Nav', cost: 25.00, usage: 'Monthly' },
        { name: 'Airtable Pro', cost: 20.00, usage: 'Monthly' }
      ]
    },
    { 
      category: 'Infrastructure', 
      amount: 12.15, 
      percentage: 12.8, 
      trend: 'down', 
      change: -2.1,
      subcategories: [
        { name: 'Vercel Hosting', cost: 3.20, usage: 'Bandwidth' },
        { name: 'Storage', cost: 8.95, usage: 'Cloud storage' }
      ]
    },
    { 
      category: 'Other', 
      amount: 6.59, 
      percentage: 6.9, 
      trend: 'up', 
      change: 1.8,
      subcategories: [
        { name: 'Miscellaneous', cost: 6.59, usage: 'Various' }
      ]
    }
  ]);

  const [dailyCostTrend, setDailyCostTrend] = useState([
    { date: 'Mar 07', cost: 42.30, revenue: 890.00, roi: 2003 },
    { date: 'Mar 08', cost: 45.20, revenue: 1150.00, roi: 2444 },
    { date: 'Mar 09', cost: 38.90, revenue: 780.00, roi: 1905 },
    { date: 'Mar 10', cost: 51.15, revenue: 1420.00, roi: 2676 },
    { date: 'Mar 11', cost: 44.80, revenue: 960.00, roi: 2043 },
    { date: 'Mar 12', cost: 47.20, revenue: 1340.00, roi: 2738 },
    { date: 'Mar 13', cost: 47.83, revenue: 2847.50, roi: 5853 }
  ]);

  const [costAlerts, setCostAlerts] = useState([
    {
      type: 'optimization',
      level: 'high',
      title: 'OpenAI Cost Spike Detected',
      message: 'Token usage increased 23% from yesterday - consider optimizing prompts',
      savings: 4.20,
      action: 'Review and optimize AI prompt efficiency',
      time: '2h ago'
    },
    {
      type: 'budget',
      level: 'medium',
      title: 'Monthly Budget Alert',
      message: '67% of monthly budget consumed with 18 days remaining',
      savings: 0,
      action: 'Monitor spending velocity to stay within budget',
      time: '6h ago'
    },
    {
      type: 'opportunity',
      level: 'low',
      title: 'Subscription Optimization',
      message: 'Assembly AI quota underutilized - 34% remaining this month',
      savings: 8.50,
      action: 'Consider processing more content to maximize value',
      time: '1d ago'
    },
    {
      type: 'efficiency',
      level: 'medium',
      title: 'ROI Performance Strong',
      message: 'Current ROI at 2902% - significantly above industry benchmark',
      savings: 0,
      action: 'Consider scaling successful operations',
      time: '3h ago'
    }
  ]);

  const [roiAnalysis, setRoiAnalysis] = useState([
    {
      activity: 'Content Processing',
      cost: 31.09,
      revenue: 1420.50,
      roi: 4470,
      efficiency: 'excellent',
      trend: 'up'
    },
    {
      activity: 'Outreach Campaigns',
      cost: 25.00,
      revenue: 890.00,
      roi: 3460,
      efficiency: 'good',
      trend: 'stable'
    },
    {
      activity: 'Infrastructure',
      cost: 12.15,
      revenue: 537.00,
      roi: 4320,
      efficiency: 'excellent',
      trend: 'up'
    },
    {
      activity: 'Tool Subscriptions',
      cost: 45.00,
      revenue: 0,
      roi: -100,
      efficiency: 'investment',
      trend: 'stable'
    }
  ]);

  const [budgetForecasting, setBudgetForecasting] = useState({
    currentMonthProjection: 1434.90,
    optimizedProjection: 1289.45,
    potentialSavings: 145.45,
    confidenceLevel: 87.3,
    nextMonthForecast: 1567.20,
    quarterlyProjection: 4823.55,
    breakEvenDate: '2026-03-28',
    profitabilityTrend: 'accelerating'
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update real-time costs with realistic fluctuations
      setCostMetrics(prev => ({
        ...prev,
        realTimeCosts: {
          ...prev.realTimeCosts,
          totalDailySpend: Math.max(30, prev.realTimeCosts.totalDailySpend + (Math.random() - 0.5) * 3),
          hourlyBurnRate: Math.max(1, Math.min(5, prev.realTimeCosts.hourlyBurnRate + (Math.random() - 0.5) * 0.2)),
          budgetUtilization: Math.max(50, Math.min(90, prev.realTimeCosts.budgetUtilization + (Math.random() - 0.5) * 2))
        },
        profitabilityAnalysis: {
          ...prev.profitabilityAnalysis,
          revenueGenerated: Math.max(2000, prev.profitabilityAnalysis.revenueGenerated + (Math.random() - 0.3) * 200)
        }
      }));

      // Occasionally add new alerts
      if (Math.random() < 0.15) {
        const alertTypes = [
          'Cost efficiency opportunity detected',
          'Budget optimization recommendation available',
          'ROI improvement suggestion ready',
          'Spending pattern analysis complete',
          'Financial performance alert updated'
        ];
        
        setCostAlerts(prev => [
          {
            type: ['optimization', 'budget', 'opportunity', 'efficiency'][Math.floor(Math.random() * 4)],
            level: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)],
            title: 'Smart Financial Insight',
            message: alertTypes[Math.floor(Math.random() * alertTypes.length)],
            savings: Math.floor(Math.random() * 20),
            action: 'Review detailed financial analysis for optimization',
            time: 'Just now'
          },
          ...prev.slice(0, 3)
        ]);
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend, change) => {
    if (trend === 'up' || change > 0) return <TrendingUp className="w-3 h-3 text-red-400" />;
    if (trend === 'down' || change < 0) return <TrendingDown className="w-3 h-3 text-green-400" />;
    return <TrendingUp className="w-3 h-3 text-gray-400 rotate-90" />;
  };

  const getAlertColor = (level) => {
    switch (level) {
      case 'high': return 'border-red-400 bg-red-900/20';
      case 'medium': return 'border-yellow-400 bg-yellow-900/20';
      case 'low': return 'border-blue-400 bg-blue-900/20';
      default: return 'border-gray-400 bg-gray-900/20';
    }
  };

  const getEfficiencyColor = (efficiency) => {
    switch (efficiency) {
      case 'excellent': return 'text-green-400 bg-green-500/20';
      case 'good': return 'text-blue-400 bg-blue-500/20';
      case 'investment': return 'text-purple-400 bg-purple-500/20';
      default: return 'text-yellow-400 bg-yellow-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Cost Intelligence Dashboard
              </h1>
              <p className="text-gray-400">Advanced financial optimization with predictive cost analysis</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Daily Spend</div>
            <div className="text-2xl font-bold text-green-400">${costMetrics.realTimeCosts.totalDailySpend.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* Key Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Real-time Costs */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Current Spend</span>
            </div>
            <div className="text-blue-400 text-sm">${costMetrics.realTimeCosts.hourlyBurnRate.toFixed(2)}/h</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Today</span>
              <span>${costMetrics.realTimeCosts.totalDailySpend.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Week</span>
              <span>${costMetrics.realTimeCosts.weeklySpend.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Month Proj.</span>
              <span>${(costMetrics.realTimeCosts.monthlyProjection / 1000).toFixed(1)}K</span>
            </div>
          </div>
        </div>

        {/* Profitability */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="font-medium">Profitability</span>
            </div>
            <div className="text-green-400 text-sm">{costMetrics.profitabilityAnalysis.roiPercentage.toFixed(0)}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Revenue</span>
              <span>${(costMetrics.profitabilityAnalysis.revenueGenerated / 1000).toFixed(1)}K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Profit Margin</span>
              <span>{costMetrics.profitabilityAnalysis.profitMargin}%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Cost Ratio</span>
              <span>{costMetrics.profitabilityAnalysis.costToRevenueRatio}%</span>
            </div>
          </div>
        </div>

        {/* Budget Status */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Budget</span>
            </div>
            <div className="text-purple-400 text-sm">{costMetrics.realTimeCosts.budgetUtilization.toFixed(1)}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Used</span>
              <span>${(costMetrics.realTimeCosts.budgetUtilization * 18).toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Target</span>
              <span>${(costMetrics.costOptimization.monthlyTarget / 1000).toFixed(1)}K</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Trajectory</span>
              <span className="capitalize">{costMetrics.costOptimization.currentTrajectory}</span>
            </div>
          </div>
        </div>

        {/* Optimization */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">Optimization</span>
            </div>
            <div className="text-yellow-400 text-sm">{costMetrics.costOptimization.efficiencyScore}%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Savings</span>
              <span className="text-green-400">${costMetrics.costOptimization.potentialSavings}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Opportunities</span>
              <span>{costMetrics.costOptimization.optimizationOpportunities}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Last Opt.</span>
              <span className="text-xs">{costMetrics.costOptimization.lastOptimization}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Analytics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Cost Breakdown Analysis */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <PieChart className="w-5 h-5 text-cyan-400" />
            <span>Cost Breakdown Analysis</span>
          </h3>
          <div className="space-y-4">
            {costBreakdownData.map((category, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">{category.category}</span>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(category.trend, category.change)}
                    <span className="text-lg font-bold">${category.amount.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">{category.percentage}% of total</span>
                  {category.change !== 0 && (
                    <span className={`text-xs px-2 py-1 rounded ${
                      category.change > 0 ? 'bg-red-900/50 text-red-300' : 'bg-green-900/50 text-green-300'
                    }`}>
                      {category.change > 0 ? '+' : ''}{category.change}%
                    </span>
                  )}
                </div>

                <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                  <div 
                    className="bg-cyan-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>

                <div className="space-y-1">
                  {category.subcategories.map((sub, idx) => (
                    <div key={idx} className="flex justify-between text-xs text-gray-400">
                      <span>{sub.name}</span>
                      <span>${sub.cost.toFixed(2)} ({sub.usage})</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Analysis by Activity */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span>ROI Analysis by Activity</span>
          </h3>
          <div className="space-y-4">
            {roiAnalysis.map((activity, index) => (
              <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{activity.activity}</span>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(activity.trend)}
                    <span className={`px-2 py-1 rounded text-xs ${getEfficiencyColor(activity.efficiency)}`}>
                      {activity.efficiency}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm mb-3">
                  <div>
                    <div className="text-gray-400">Cost</div>
                    <div className="text-red-400">${activity.cost.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Revenue</div>
                    <div className="text-green-400">${activity.revenue.toFixed(2)}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ROI</div>
                    <div className={activity.roi > 0 ? 'text-green-400' : 'text-red-400'}>
                      {activity.roi > 0 ? '+' : ''}{activity.roi}%
                    </div>
                  </div>
                </div>

                {activity.roi > 0 && (
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, activity.roi / 50)}%` }}
                    ></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Alerts and Budget Forecasting */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Intelligent Cost Alerts */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <span>Intelligent Cost Alerts</span>
          </h3>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {costAlerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${getAlertColor(alert.level)}`}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      alert.type === 'optimization' ? 'bg-blue-900/50 text-blue-300' :
                      alert.type === 'budget' ? 'bg-yellow-900/50 text-yellow-300' :
                      alert.type === 'opportunity' ? 'bg-green-900/50 text-green-300' :
                      'bg-purple-900/50 text-purple-300'
                    }`}>
                      {alert.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      alert.level === 'high' ? 'bg-red-900/50 text-red-300' :
                      alert.level === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                      'bg-blue-900/50 text-blue-300'
                    }`}>
                      {alert.level}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{alert.time}</span>
                </div>
                
                <h4 className="font-medium text-sm mb-1">{alert.title}</h4>
                <p className="text-sm text-gray-300 mb-2">{alert.message}</p>
                
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-400 italic">{alert.action}</p>
                  {alert.savings > 0 && (
                    <span className="text-xs text-green-400 font-medium">
                      Save ${alert.savings.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Forecasting */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Calculator className="w-5 h-5 text-indigo-400" />
            <span>Budget Forecasting</span>
          </h3>
          
          <div className="space-y-4">
            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-medium mb-3">Monthly Projections</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Trajectory</span>
                  <span>${budgetForecasting.currentMonthProjection.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Optimized Projection</span>
                  <span className="text-green-400">${budgetForecasting.optimizedProjection.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Potential Savings</span>
                  <span className="text-green-400">${budgetForecasting.potentialSavings.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-medium mb-3">Future Outlook</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Next Month</span>
                  <span>${(budgetForecasting.nextMonthForecast / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Quarterly</span>
                  <span>${(budgetForecasting.quarterlyProjection / 1000).toFixed(1)}K</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Break-even</span>
                  <span className="text-xs">{budgetForecasting.breakEvenDate}</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-medium mb-2">Confidence & Trends</h4>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Forecast Confidence</span>
                <span className="text-blue-400">{budgetForecasting.confidenceLevel}%</span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${budgetForecasting.confidenceLevel}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-400">Profitability Trend</span>
                <span className="text-green-400 capitalize">{budgetForecasting.profitabilityTrend}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}