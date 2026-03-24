// Business Intelligence Analytics Center - Data Visualization, KPI Dashboards & Strategic Insights
import { useState, useEffect } from 'react';
import { BarChart3, TrendingUp, PieChart, Activity, Target, Zap, Eye, DollarSign, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

export default function BusinessIntelligenceAnalyticsCenter() {
  const [biData, setBiData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    executiveDashboard: {
      totalRevenue: 2456789,
      revenueGrowth: 23.4,
      grossProfit: 1823567,
      profitMargin: 74.2,
      totalCustomers: 12456,
      customerGrowth: 15.7,
      activeUsers: 89234,
      userGrowth: 18.9,
      churnRate: 2.8,
      ltv: 1234.56,
      cac: 234.56,
      ltvCacRatio: 5.26,
      mrr: 345678,
      arr: 4148136,
      burnRate: 123456,
      runway: 18.7,
      cashBalance: 2345678
    },
    kpiMetrics: [
      {
        category: 'Revenue',
        kpis: [
          { name: 'Monthly Recurring Revenue', value: 345678, target: 300000, unit: 'currency', trend: '+12.4%', status: 'EXCEEDING' },
          { name: 'Annual Recurring Revenue', value: 4148136, target: 3600000, unit: 'currency', trend: '+15.2%', status: 'EXCEEDING' },
          { name: 'Revenue Growth Rate', value: 23.4, target: 20.0, unit: 'percentage', trend: '+3.4pp', status: 'EXCEEDING' },
          { name: 'Gross Profit Margin', value: 74.2, target: 70.0, unit: 'percentage', trend: '+2.1pp', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Customer',
        kpis: [
          { name: 'Customer Acquisition Cost', value: 234.56, target: 250.00, unit: 'currency', trend: '-6.2%', status: 'EXCEEDING' },
          { name: 'Customer Lifetime Value', value: 1234.56, target: 1000.00, unit: 'currency', trend: '+18.7%', status: 'EXCEEDING' },
          { name: 'LTV:CAC Ratio', value: 5.26, target: 4.00, unit: 'ratio', trend: '+31.5%', status: 'EXCEEDING' },
          { name: 'Customer Churn Rate', value: 2.8, target: 5.0, unit: 'percentage', trend: '-44.0%', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Operations',
        kpis: [
          { name: 'Daily Active Users', value: 89234, target: 80000, unit: 'number', trend: '+11.5%', status: 'EXCEEDING' },
          { name: 'User Growth Rate', value: 18.9, target: 15.0, unit: 'percentage', trend: '+26.0%', status: 'EXCEEDING' },
          { name: 'Product Usage Score', value: 87.4, target: 85.0, unit: 'score', trend: '+2.8%', status: 'EXCEEDING' },
          { name: 'System Uptime', value: 99.97, target: 99.9, unit: 'percentage', trend: '+0.07pp', status: 'EXCEEDING' }
        ]
      },
      {
        category: 'Financial Health',
        kpis: [
          { name: 'Cash Burn Rate', value: 123456, target: 150000, unit: 'currency', trend: '-17.7%', status: 'EXCEEDING' },
          { name: 'Cash Runway (months)', value: 18.7, target: 12.0, unit: 'number', trend: '+55.8%', status: 'EXCEEDING' },
          { name: 'Gross Margin', value: 74.2, target: 70.0, unit: 'percentage', trend: '+6.0%', status: 'EXCEEDING' },
          { name: 'Operating Margin', value: 23.4, target: 20.0, unit: 'percentage', trend: '+17.0%', status: 'EXCEEDING' }
        ]
      }
    ],
    departmentPerformance: [
      {
        department: 'Sales',
        revenue: 456789,
        target: 400000,
        attainment: 114.2,
        growth: 23.4,
        employees: 12,
        productivity: 38065,
        satisfaction: 8.7,
        kpis: {
          dealsWon: 89,
          pipelineValue: 234567,
          avgDealSize: 5133,
          salesCycle: 45.6,
          conversionRate: 23.4
        },
        trend: 'UPWARD',
        health: 'EXCELLENT'
      },
      {
        department: 'Marketing',
        revenue: 234567,
        target: 200000,
        attainment: 117.3,
        growth: 18.9,
        employees: 8,
        productivity: 29321,
        satisfaction: 8.2,
        kpis: {
          leads: 1234,
          mqls: 567,
          conversionRate: 45.9,
          cac: 234,
          roas: 4.56
        },
        trend: 'UPWARD',
        health: 'EXCELLENT'
      },
      {
        department: 'Product',
        revenue: 0,
        target: 0,
        attainment: 0,
        growth: 0,
        employees: 15,
        productivity: 0,
        satisfaction: 8.9,
        kpis: {
          features: 23,
          bugFixes: 45,
          userSatisfaction: 4.7,
          adoption: 87.3,
          velocity: 89.4
        },
        trend: 'STABLE',
        health: 'GOOD'
      },
      {
        department: 'Customer Success',
        revenue: 89012,
        target: 75000,
        attainment: 118.7,
        growth: 34.5,
        employees: 6,
        productivity: 14835,
        satisfaction: 9.1,
        kpis: {
          churnRate: 2.8,
          expansionRate: 23.4,
          nps: 8.7,
          csat: 4.5,
          renewalRate: 94.6
        },
        trend: 'UPWARD',
        health: 'EXCELLENT'
      },
      {
        department: 'Engineering',
        revenue: 0,
        target: 0,
        attainment: 0,
        growth: 0,
        employees: 18,
        productivity: 0,
        satisfaction: 8.5,
        kpis: {
          deployments: 156,
          uptime: 99.97,
          responseTime: 125,
          codeQuality: 92.4,
          velocity: 87.9
        },
        trend: 'STABLE',
        health: 'GOOD'
      }
    ],
    predictiveAnalytics: [
      {
        metric: 'Revenue Forecast',
        currentPeriod: 345678,
        nextPeriod: 398530,
        confidence: 89.4,
        variance: '+15.3%',
        factors: ['Seasonal Growth', 'New Product Launch', 'Market Expansion'],
        recommendation: 'Increase sales targets by 12%',
        riskLevel: 'LOW'
      },
      {
        metric: 'Customer Churn Prediction',
        currentPeriod: 2.8,
        nextPeriod: 2.3,
        confidence: 76.8,
        variance: '-17.9%',
        factors: ['Improved Onboarding', 'Enhanced Support', 'Feature Updates'],
        recommendation: 'Continue customer success investments',
        riskLevel: 'LOW'
      },
      {
        metric: 'Market Share Growth',
        currentPeriod: 12.4,
        nextPeriod: 14.7,
        confidence: 82.3,
        variance: '+18.5%',
        factors: ['Competitive Advantage', 'Product Innovation', 'Marketing Efficiency'],
        recommendation: 'Accelerate market penetration strategy',
        riskLevel: 'MEDIUM'
      },
      {
        metric: 'Cash Flow Projection',
        currentPeriod: 234567,
        nextPeriod: 287890,
        confidence: 91.2,
        variance: '+22.7%',
        factors: ['Revenue Growth', 'Cost Optimization', 'Payment Terms'],
        recommendation: 'Consider strategic investments',
        riskLevel: 'LOW'
      }
    ],
    dataQuality: [
      {
        source: 'Salesforce CRM',
        completeness: 94.7,
        accuracy: 92.3,
        freshness: 98.9,
        consistency: 89.4,
        records: 234567,
        lastUpdate: '5 minutes ago',
        status: 'HEALTHY',
        issues: ['Missing contact info (5.3%)', 'Duplicate records (2.1%)']
      },
      {
        source: 'Google Analytics',
        completeness: 98.4,
        accuracy: 95.6,
        freshness: 99.2,
        consistency: 94.7,
        records: 1234567,
        lastUpdate: '2 minutes ago',
        status: 'HEALTHY',
        issues: ['Bot traffic (1.6%)', 'Tracking gaps (0.8%)']
      },
      {
        source: 'Financial System',
        completeness: 99.8,
        accuracy: 98.9,
        freshness: 96.7,
        consistency: 97.8,
        records: 89012,
        lastUpdate: '1 hour ago',
        status: 'EXCELLENT',
        issues: ['Delayed reconciliation (2.2%)']
      },
      {
        source: 'Product Analytics',
        completeness: 89.3,
        accuracy: 87.6,
        freshness: 95.4,
        consistency: 85.2,
        records: 567890,
        lastUpdate: '10 minutes ago',
        status: 'FAIR',
        issues: ['Event tracking gaps (10.7%)', 'User ID mismatches (4.1%)']
      },
      {
        source: 'Marketing Automation',
        completeness: 92.8,
        accuracy: 90.4,
        freshness: 97.3,
        consistency: 88.9,
        records: 345678,
        lastUpdate: '3 minutes ago',
        status: 'GOOD',
        issues: ['Email bounce tracking (7.2%)', 'Attribution gaps (2.3%)']
      }
    ],
    insightAlerts: [
      {
        type: 'SUCCESS',
        category: 'Revenue Growth',
        message: 'Q1 revenue exceeded target by $45.7K (+15.3%) - strongest quarter in company history',
        metric: 'Quarterly Revenue',
        value: '$345.7K',
        change: '+15.3% above target',
        impact: 'MAJOR',
        timestamp: '08:12',
        department: 'Sales',
        recommendation: 'Scale successful strategies, increase Q2 targets by 12%',
        urgency: 'HIGH',
        opportunity: 'STRATEGIC_EXPANSION'
      },
      {
        type: 'CRITICAL',
        category: 'Data Quality',
        message: 'Product Analytics data completeness dropped to 89.3% - potential insight accuracy risk',
        metric: 'Data Completeness',
        value: '89.3%',
        change: '-5.2% from target',
        impact: 'HIGH',
        timestamp: '08:11',
        source: 'Product Analytics',
        affectedReports: 12,
        recommendation: 'Immediate data pipeline investigation, implement backup tracking',
        urgency: 'CRITICAL',
        escalation: 'DATA_ENGINEERING'
      },
      {
        type: 'WARNING',
        category: 'Customer Metrics',
        message: 'Enterprise segment showing 23% increase in support tickets - potential satisfaction risk',
        metric: 'Support Ticket Volume',
        value: '+23%',
        change: 'Above normal threshold',
        impact: 'MODERATE',
        timestamp: '08:09',
        segment: 'Enterprise Customers',
        affectedAccounts: 34,
        recommendation: 'Proactive customer success outreach, product training sessions',
        urgency: 'MEDIUM',
        technicalAction: 'CUSTOMER_SUCCESS_INTERVENTION'
      },
      {
        type: 'INFO',
        category: 'Predictive Insight',
        message: 'AI model predicts 18.5% market share growth opportunity in Q2 based on current trends',
        metric: 'Market Share Growth Prediction',
        value: '+18.5%',
        change: 'Forecast improvement',
        impact: 'POSITIVE',
        timestamp: '08:07',
        confidence: '82.3%',
        timeframe: 'Q2 2026',
        recommendation: 'Accelerate marketing spend, prioritize competitive features',
        urgency: 'LOW',
        opportunity: 'MARKET_EXPANSION'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBiData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        executiveDashboard: {
          ...prev.executiveDashboard,
          totalRevenue: Math.max(2450000, Math.min(2460000, prev.executiveDashboard.totalRevenue + Math.floor((Math.random() - 0.5) * 5000))),
          activeUsers: Math.max(89000, Math.min(89500, prev.executiveDashboard.activeUsers + Math.floor((Math.random() - 0.5) * 50))),
          mrr: Math.max(345000, Math.min(346000, prev.executiveDashboard.mrr + Math.floor((Math.random() - 0.5) * 500)))
        }
      }));
    }, 28000);

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

  const getKpiStatusColor = (status) => {
    switch (status) {
      case 'EXCEEDING': return 'text-green-400 bg-green-400/20';
      case 'MEETING': return 'text-blue-400 bg-blue-400/20';
      case 'APPROACHING': return 'text-yellow-400 bg-yellow-400/20';
      case 'BELOW': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getDepartmentHealthColor = (health) => {
    switch (health) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20';
      case 'FAIR': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'UPWARD': return 'text-green-400';
      case 'STABLE': return 'text-blue-400';
      case 'DOWNWARD': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getDataQualityColor = (status) => {
    switch (status) {
      case 'EXCELLENT': return 'text-green-400';
      case 'HEALTHY': return 'text-blue-400';
      case 'GOOD': return 'text-cyan-400';
      case 'FAIR': return 'text-yellow-400';
      case 'POOR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getRiskLevelColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
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
  const formatCurrency = (amount) => `$${formatNumber(amount)}`;

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Business Intelligence Analytics Center</h1>
              <p className="text-indigo-300">Data visualization, KPI dashboards & strategic insights</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{biData.currentTime}</div>
            <div className="text-indigo-300">BI Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Executive Dashboard */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(biData.executiveDashboard.totalRevenue)}</div>
            <div className="text-green-300 text-sm">+{formatPercentage(biData.executiveDashboard.revenueGrowth)} Growth</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                MRR
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatCurrency(biData.executiveDashboard.mrr)}</div>
            <div className="text-blue-300 text-sm">{formatCurrency(biData.executiveDashboard.arr)} ARR</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-purple-400 mr-2" />
                Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(biData.executiveDashboard.activeUsers)}</div>
            <div className="text-purple-300 text-sm">+{formatPercentage(biData.executiveDashboard.userGrowth)} Growth</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                LTV:CAC
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{biData.executiveDashboard.ltvCacRatio.toFixed(1)}</div>
            <div className="text-cyan-300 text-sm">Ratio</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                Runway
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{biData.executiveDashboard.runway.toFixed(1)}</div>
            <div className="text-orange-300 text-sm">Months</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <PieChart className="w-5 h-5 text-pink-400 mr-2" />
                Margin
              </h3>
            </div>
            <div className="text-3xl font-bold text-pink-400">{formatPercentage(biData.executiveDashboard.profitMargin)}</div>
            <div className="text-pink-300 text-sm">Gross Profit</div>
          </div>
        </div>

        {/* KPI Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-indigo-400 mr-2" />
            KPI Performance Intelligence
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {biData.kpiMetrics.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h4 className="text-white font-medium text-lg text-center">{category.category}</h4>
                {category.kpis.map((kpi, kpiIndex) => (
                  <div key={kpiIndex} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white text-sm font-medium">{kpi.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getKpiStatusColor(kpi.status)}`}>
                        {kpi.status}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {kpi.unit === 'currency' ? formatCurrency(kpi.value) :
                       kpi.unit === 'percentage' ? formatPercentage(kpi.value) :
                       kpi.unit === 'ratio' ? kpi.value.toFixed(2) :
                       formatNumber(kpi.value)}
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">
                        Target: {kpi.unit === 'currency' ? formatCurrency(kpi.target) :
                                kpi.unit === 'percentage' ? formatPercentage(kpi.target) :
                                kpi.unit === 'ratio' ? kpi.target.toFixed(2) :
                                formatNumber(kpi.target)}
                      </span>
                      <span className="text-green-400">{kpi.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Department Performance & Predictive Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-purple-400 mr-2" />
              Department Performance Analytics
            </h3>
            <div className="space-y-4">
              {biData.departmentPerformance.map((dept, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{dept.department}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getDepartmentHealthColor(dept.health)}`}>
                        {dept.health}
                      </span>
                      <span className={`text-sm ${getTrendColor(dept.trend)}`}>
                        {dept.trend === 'UPWARD' ? '↗' : dept.trend === 'DOWNWARD' ? '↘' : '→'}
                      </span>
                    </div>
                  </div>
                  {dept.revenue > 0 && (
                    <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                      <div className="text-green-400">Revenue: {formatCurrency(dept.revenue)}</div>
                      <div className="text-blue-400">Target: {formatCurrency(dept.target)}</div>
                      <div className="text-purple-400">Attain: {formatPercentage(dept.attainment)}</div>
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Team: {dept.employees}</div>
                    <div className="text-orange-400">Growth: {dept.growth > 0 ? `+${formatPercentage(dept.growth)}` : 'N/A'}</div>
                    <div className="text-yellow-400">Satisfaction: {dept.satisfaction.toFixed(1)}/10</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Key KPIs:</strong> {Object.entries(dept.kpis).slice(0, 3).map(([key, value]) => `${key}: ${typeof value === 'number' ? (value > 100 ? formatNumber(value) : value.toFixed(1)) : value}`).join(' • ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Predictive Analytics Intelligence
            </h3>
            <div className="space-y-4">
              {biData.predictiveAnalytics.map((prediction, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{prediction.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getRiskLevelColor(prediction.riskLevel)}`}>
                        {prediction.riskLevel} Risk
                      </span>
                      <span className="text-cyan-400 text-xs">{formatPercentage(prediction.confidence)} Conf</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Current: {formatNumber(prediction.currentPeriod)}</div>
                    <div className="text-green-400">Predicted: {formatNumber(prediction.nextPeriod)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Variance: {prediction.variance}</div>
                    <div className="text-orange-400">Confidence: {formatPercentage(prediction.confidence)}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Factors:</strong> {prediction.factors.join(', ')}
                  </div>
                  <div className="text-slate-300 text-xs">
                    <strong>Recommendation:</strong> {prediction.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Quality & Insight Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Data Quality Intelligence
            </h3>
            <div className="space-y-4">
              {biData.dataQuality.map((source, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{source.source}</span>
                    <span className={`text-sm ${getDataQualityColor(source.status)}`}>
                      {source.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(source.completeness, 90, 95)}`}>Complete: {formatPercentage(source.completeness)}</div>
                    <div className={`${getScoreColor(source.accuracy, 90, 95)}`}>Accurate: {formatPercentage(source.accuracy)}</div>
                    <div className={`${getScoreColor(source.freshness, 90, 95)}`}>Fresh: {formatPercentage(source.freshness)}</div>
                    <div className={`${getScoreColor(source.consistency, 85, 92)}`}>Consist: {formatPercentage(source.consistency)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Records: {formatNumber(source.records)}</div>
                    <div className="text-orange-400">Updated: {source.lastUpdate}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Issues:</strong> {source.issues.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              BI Intelligence Alerts
            </h3>
            <div className="space-y-4">
              {biData.insightAlerts.map((alert, index) => (
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
                      {alert.department && <div className="text-slate-300">Department: {alert.department}</div>}
                      {alert.confidence && <div className="text-slate-300">Confidence: {alert.confidence}</div>}
                      {alert.timeframe && <div className="text-slate-300">Timeframe: {alert.timeframe}</div>}
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
    </div>
  );
}