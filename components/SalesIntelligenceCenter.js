// Sales Intelligence Center - Sales Pipeline Analytics & Revenue Operations
import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, TrendingDown, Users, Target, Award, Phone, Calendar, FileText, Briefcase, BarChart3, PieChart } from 'lucide-react';

export default function SalesIntelligenceCenter() {
  const [salesData, setSalesData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    pipelineOverview: {
      totalPipeline: 4875920,
      activePipeline: 3284756,
      qualifiedPipeline: 2847293,
      closingPipeline: 1456892,
      totalDeals: 1847,
      activeDeals: 1234,
      wonDeals: 389,
      lostDeals: 224,
      winRate: 63.5,
      avgDealSize: 15890,
      salesCycle: 42.7, // days
      conversionRate: 21.1,
      forecastAccuracy: 87.4,
      quarterlyQuota: 5200000,
      quotaAttainment: 78.9
    },
    salesStages: [
      {
        stage: 'Lead',
        deals: 456,
        value: 1847293,
        avgValue: 4050,
        conversionRate: 34.7,
        avgTimeInStage: 3.2,
        progressToNext: 89.4
      },
      {
        stage: 'Qualified',
        deals: 298,
        value: 1456789,
        avgValue: 4890,
        conversionRate: 67.8,
        avgTimeInStage: 5.7,
        progressToNext: 78.9
      },
      {
        stage: 'Proposal',
        deals: 189,
        value: 1189456,
        avgValue: 6290,
        conversionRate: 78.4,
        avgTimeInStage: 8.3,
        progressToNext: 82.6
      },
      {
        stage: 'Negotiation',
        deals: 123,
        value: 945678,
        avgValue: 7690,
        conversionRate: 84.7,
        avgTimeInStage: 12.4,
        progressToNext: 91.2
      },
      {
        stage: 'Closing',
        deals: 89,
        value: 756234,
        avgValue: 8500,
        conversionRate: 89.7,
        avgTimeInStage: 6.8,
        progressToNext: 94.3
      }
    ],
    salesTeamPerformance: [
      {
        rep: 'Sarah Johnson',
        territory: 'Enterprise North',
        quota: 1200000,
        actual: 1045600,
        attainment: 87.1,
        dealsWon: 67,
        avgDealSize: 15600,
        winRate: 69.1,
        pipeline: 2847293,
        activities: 1847
      },
      {
        rep: 'Michael Chen',
        territory: 'Enterprise South',
        quota: 1200000,
        actual: 978450,
        attainment: 81.5,
        dealsWon: 59,
        avgDealSize: 16580,
        winRate: 71.8,
        pipeline: 2456789,
        activities: 1634
      },
      {
        rep: 'Emma Rodriguez',
        territory: 'Mid-Market',
        quota: 900000,
        actual: 834670,
        attainment: 92.7,
        dealsWon: 78,
        avgDealSize: 10700,
        winRate: 74.3,
        pipeline: 1789234,
        activities: 2156
      },
      {
        rep: 'David Kim',
        territory: 'SMB',
        quota: 600000,
        actual: 567890,
        attainment: 94.6,
        dealsWon: 134,
        avgDealSize: 4240,
        winRate: 67.9,
        pipeline: 987654,
        activities: 2847
      },
      {
        rep: 'Lisa Thompson',
        territory: 'International',
        quota: 800000,
        actual: 689450,
        attainment: 86.2,
        dealsWon: 45,
        avgDealSize: 15320,
        winRate: 72.6,
        pipeline: 1456789,
        activities: 1423
      },
      {
        rep: 'James Wilson',
        territory: 'Strategic Accounts',
        quota: 1500000,
        actual: 1234560,
        attainment: 82.3,
        dealsWon: 23,
        avgDealSize: 53680,
        winRate: 76.7,
        pipeline: 3456789,
        activities: 945
      }
    ],
    revenueAnalytics: {
      monthlyRecurringRevenue: 2847293,
      annualRecurringRevenue: 34167516,
      revenueGrowth: 23.7, // YoY
      churnRate: 3.4,
      expansionRevenue: 456789,
      netRevenueRetention: 112.4,
      revenuePerEmployee: 287490,
      customerLifetimeValue: 147890,
      avgContractValue: 23450,
      upsellRate: 34.7,
      crossSellRate: 28.9,
      renewalRate: 94.7,
      revenueBySegment: {
        enterprise: 67.8,
        midMarket: 23.6,
        smb: 8.6
      },
      revenueByProduct: [
        { product: 'Enterprise Suite', revenue: 1456789, growth: 28.4, margin: 78.9 },
        { product: 'Professional Plan', revenue: 894567, growth: 19.7, margin: 67.4 },
        { product: 'Starter Package', revenue: 345678, growth: 34.2, margin: 45.8 },
        { product: 'Add-on Services', revenue: 150259, growth: 42.7, margin: 89.3 }
      ]
    },
    salesActivities: {
      totalActivities: 15847,
      calls: 6789,
      emails: 5234,
      meetings: 2456,
      demos: 1368,
      callConnectRate: 34.7,
      emailResponseRate: 18.9,
      meetingShowRate: 78.4,
      demoConversionRate: 67.8,
      activitiesPerRep: 78.9,
      avgCallDuration: 18.4, // minutes
      avgEmailResponseTime: 4.7, // hours
      followUpRate: 89.3,
      prospectingTime: 32.6 // percentage of time
    },
    customerAnalytics: {
      totalCustomers: 2847,
      newCustomers: 189,
      customerGrowth: 12.4,
      customerSatisfaction: 94.2,
      nps: 78.4,
      customerHealthScore: 86.7,
      atRiskCustomers: 89,
      expandableAccounts: 456,
      advocateCustomers: 234,
      customerSegments: [
        { segment: 'Champions', count: 456, value: 1456789, satisfaction: 97.2, churn: 1.2 },
        { segment: 'Satisfied', count: 1789, value: 2847293, satisfaction: 89.4, churn: 2.8 },
        { segment: 'Neutral', count: 423, value: 567890, satisfaction: 72.6, churn: 7.9 },
        { segment: 'At Risk', count: 179, value: 234567, satisfaction: 54.8, churn: 23.4 }
      ]
    },
    forecastingAnalytics: {
      quarterlyForecast: 4200000,
      commitForecast: 3800000,
      bestCaseForecast: 4600000,
      worstCaseForecast: 3200000,
      forecastAccuracy: 87.4,
      riskAdjustedForecast: 3650000,
      pipelineCoverage: 3.2,
      weightedPipeline: 2847293,
      linearForecast: 3950000,
      monthlyForecasts: [
        { month: 'January', target: 1400000, actual: 1289456, variance: -7.9 },
        { month: 'February', target: 1350000, actual: 1423678, variance: +5.5 },
        { month: 'March', target: 1450000, actual: 1356890, variance: -6.4 },
        { month: 'April', target: 1400000, actual: 1478234, variance: +5.6 }
      ]
    },
    competitorAnalysis: {
      competitiveDealCount: 456,
      competitiveWinRate: 67.8,
      lossReasons: [
        { reason: 'Price', percentage: 34.7, deals: 78 },
        { reason: 'Features', percentage: 23.6, deals: 53 },
        { reason: 'Timeline', percentage: 18.9, deals: 42 },
        { reason: 'Relationship', percentage: 12.4, deals: 28 },
        { reason: 'Other', percentage: 10.4, deals: 23 }
      ],
      topCompetitors: [
        { competitor: 'Competitor A', encounters: 189, winRate: 72.5, avgDealSize: 23450 },
        { competitor: 'Competitor B', encounters: 134, winRate: 68.7, avgDealSize: 18900 },
        { competitor: 'Competitor C', encounters: 98, winRate: 61.2, avgDealSize: 15600 },
        { competitor: 'Competitor D', encounters: 67, winRate: 59.7, avgDealSize: 12300 }
      ]
    },
    salesAlerts: [
      {
        type: 'CRITICAL',
        category: 'Quota Attainment',
        message: 'Q1 quota attainment at 78.9% with 3 weeks remaining (target: 85%)',
        impact: 'HIGH',
        actionRequired: true,
        assignedTo: 'Sales Manager',
        timestamp: '01:05',
        recommendations: ['Accelerate closing pipeline', 'Focus on high-value deals', 'Increase activity levels']
      },
      {
        type: 'WARNING',
        category: 'Pipeline Health',
        message: 'Enterprise pipeline down 12% week-over-week',
        impact: 'MEDIUM',
        actionRequired: true,
        assignedTo: 'Enterprise Sales Team',
        timestamp: '00:45',
        recommendations: ['Increase prospecting', 'Review qualification criteria', 'Accelerate deal progression']
      },
      {
        type: 'SUCCESS',
        category: 'Deal Closed',
        message: 'James Wilson closed $180K Strategic Account deal (15% above forecast)',
        impact: 'POSITIVE',
        actionRequired: false,
        assignedTo: 'Strategic Accounts',
        timestamp: '00:30',
        recommendations: ['Document best practices', 'Share success factors', 'Replicate approach']
      },
      {
        type: 'INFO',
        category: 'Activity Metrics',
        message: 'Team call volume increased 23% this week vs last week',
        impact: 'LOW',
        actionRequired: false,
        assignedTo: 'Sales Operations',
        timestamp: '00:15',
        recommendations: ['Monitor conversion rates', 'Ensure quality over quantity']
      }
    ],
    salesOpsMetrics: {
      leadResponseTime: 18, // minutes
      opportunityCreationTime: 2.4, // hours
      quoteDeliveryTime: 4.7, // hours
      proposalAcceptanceRate: 67.8,
      contractCycleTime: 8.4, // days
      salesToolAdoption: 94.2,
      dataQuality: 87.6,
      crmUsage: 96.4,
      salesContentUsage: 78.9,
      salesEnabledDeals: 89.3,
      processCompliance: 92.1,
      forecastSubmissionRate: 97.8
    },
    territoryAnalytics: {
      territories: [
        {
          territory: 'Enterprise North',
          quota: 1200000,
          pipeline: 2847293,
          coverage: 2.4,
          winRate: 69.1,
          avgDealSize: 15600,
          growth: 23.7
        },
        {
          territory: 'Enterprise South',
          quota: 1200000,
          pipeline: 2456789,
          coverage: 2.0,
          winRate: 71.8,
          avgDealSize: 16580,
          growth: 18.9
        },
        {
          territory: 'Mid-Market',
          quota: 900000,
          pipeline: 1789234,
          coverage: 2.0,
          winRate: 74.3,
          avgDealSize: 10700,
          growth: 34.2
        },
        {
          territory: 'SMB',
          quota: 600000,
          pipeline: 987654,
          coverage: 1.6,
          winRate: 67.9,
          avgDealSize: 4240,
          growth: 28.4
        }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        pipelineOverview: {
          ...prev.pipelineOverview,
          activePipeline: prev.pipelineOverview.activePipeline + Math.floor(Math.random() * 50000),
          activeDeals: prev.pipelineOverview.activeDeals + Math.floor(Math.random() * 3),
          winRate: Math.max(55, Math.min(75, prev.pipelineOverview.winRate + (Math.random() - 0.5) * 2)),
          quotaAttainment: Math.max(70, Math.min(95, prev.pipelineOverview.quotaAttainment + (Math.random() - 0.5) * 1))
        },
        revenueAnalytics: {
          ...prev.revenueAnalytics,
          monthlyRecurringRevenue: prev.revenueAnalytics.monthlyRecurringRevenue + Math.floor(Math.random() * 10000),
          revenueGrowth: Math.max(15, Math.min(35, prev.revenueAnalytics.revenueGrowth + (Math.random() - 0.5) * 2))
        }
      }));
    }, 9000);

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

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.7) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
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

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-emerald-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Sales Intelligence Center</h1>
              <p className="text-green-300">Pipeline analytics, revenue operations, sales team performance & forecasting intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{salesData.currentTime}</div>
            <div className="text-green-300">Sales Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Pipeline Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-green-400 mr-2" />
                Total Pipeline
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(salesData.pipelineOverview.totalPipeline)}</div>
            <div className="text-green-300 text-sm">Active: {formatCurrency(salesData.pipelineOverview.activePipeline)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Briefcase className="w-5 h-5 text-blue-400 mr-2" />
                Active Deals
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{salesData.pipelineOverview.activeDeals}</div>
            <div className="text-blue-300 text-sm">Won: {salesData.pipelineOverview.wonDeals}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Award className="w-5 h-5 text-purple-400 mr-2" />
                Win Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(salesData.pipelineOverview.winRate)}</div>
            <div className="text-purple-300 text-sm">Conversion: {formatPercentage(salesData.pipelineOverview.conversionRate)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-orange-400 mr-2" />
                Avg Deal Size
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatCurrency(salesData.pipelineOverview.avgDealSize)}</div>
            <div className="text-orange-300 text-sm">Cycle: {salesData.pipelineOverview.salesCycle.toFixed(0)} days</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
                Quota Progress
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatPercentage(salesData.pipelineOverview.quotaAttainment)}</div>
            <div className="text-emerald-300 text-sm">Target: {formatCurrency(salesData.pipelineOverview.quarterlyQuota)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
                Forecast Accuracy
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(salesData.pipelineOverview.forecastAccuracy)}</div>
            <div className="text-cyan-300 text-sm">Qualified: {formatCurrency(salesData.pipelineOverview.qualifiedPipeline)}</div>
          </div>
        </div>

        {/* Sales Stages Funnel */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-green-400 mr-2" />
            Sales Pipeline Funnel Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {salesData.salesStages.map((stage, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 relative">
                <div className="text-center mb-3">
                  <h4 className="font-medium text-white">{stage.stage}</h4>
                  <div className="text-2xl font-bold text-green-400">{stage.deals}</div>
                  <div className="text-green-300 text-sm">deals</div>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Value:</span>
                    <span className="text-blue-400">{formatCurrency(stage.value)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Avg Value:</span>
                    <span className="text-purple-400">{formatCurrency(stage.avgValue)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Conversion:</span>
                    <span className={`${getPerformanceColor(stage.conversionRate, 60, 80)}`}>{formatPercentage(stage.conversionRate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Avg Time:</span>
                    <span className="text-orange-400">{stage.avgTimeInStage.toFixed(1)}d</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Progress:</span>
                    <span className="text-cyan-400">{formatPercentage(stage.progressToNext)}</span>
                  </div>
                </div>
                {index < salesData.salesStages.length - 1 && (
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-green-400">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Sales Team Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Users className="w-5 h-5 text-blue-400 mr-2" />
            Sales Team Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Rep</th>
                  <th className="text-center p-3 text-slate-300">Territory</th>
                  <th className="text-center p-3 text-slate-300">Quota</th>
                  <th className="text-center p-3 text-slate-300">Actual</th>
                  <th className="text-center p-3 text-slate-300">Attainment</th>
                  <th className="text-center p-3 text-slate-300">Deals Won</th>
                  <th className="text-center p-3 text-slate-300">Avg Deal</th>
                  <th className="text-center p-3 text-slate-300">Win Rate</th>
                  <th className="text-center p-3 text-slate-300">Pipeline</th>
                  <th className="text-center p-3 text-slate-300">Activities</th>
                </tr>
              </thead>
              <tbody>
                {salesData.salesTeamPerformance.map((rep, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3 text-white font-medium">{rep.rep}</td>
                    <td className="p-3 text-center text-slate-300">{rep.territory}</td>
                    <td className="p-3 text-center text-orange-400">{formatCurrency(rep.quota)}</td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(rep.actual)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(rep.attainment, 80, 90)}`}>
                      {formatPercentage(rep.attainment)}
                    </td>
                    <td className="p-3 text-center text-blue-400">{rep.dealsWon}</td>
                    <td className="p-3 text-center text-purple-400">{formatCurrency(rep.avgDealSize)}</td>
                    <td className={`p-3 text-center ${getPerformanceColor(rep.winRate, 65, 75)}`}>
                      {formatPercentage(rep.winRate)}
                    </td>
                    <td className="p-3 text-center text-cyan-400">{formatCurrency(rep.pipeline)}</td>
                    <td className="p-3 text-center text-yellow-400">{rep.activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Analytics & Sales Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <DollarSign className="w-5 h-5 text-emerald-400 mr-2" />
              Revenue Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatCurrency(salesData.revenueAnalytics.monthlyRecurringRevenue)}</div>
                <div className="text-emerald-300 text-sm">MRR</div>
                <div className="text-gray-400 text-xs mt-1">+{formatPercentage(salesData.revenueAnalytics.revenueGrowth)} YoY</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatCurrency(salesData.revenueAnalytics.annualRecurringRevenue)}</div>
                <div className="text-green-300 text-sm">ARR</div>
                <div className="text-gray-400 text-xs mt-1">NRR: {formatPercentage(salesData.revenueAnalytics.netRevenueRetention)}</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <h4 className="text-white text-sm font-medium">Revenue by Product</h4>
              {salesData.revenueAnalytics.revenueByProduct.map((product, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{product.product}</span>
                    <span className="text-green-400 text-sm">{formatCurrency(product.revenue)}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">Growth: {formatPercentage(product.growth)}</span>
                    <span className="text-purple-400">Margin: {formatPercentage(product.margin)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-cyan-400 font-medium">{formatCurrency(salesData.revenueAnalytics.customerLifetimeValue)}</div>
                <div className="text-slate-400">CLV</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatPercentage(salesData.revenueAnalytics.upsellRate)}</div>
                <div className="text-slate-400">Upsell</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{formatPercentage(salesData.revenueAnalytics.renewalRate)}</div>
                <div className="text-slate-400">Renewal</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-2" />
              Sales Activities Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(salesData.salesActivities.totalActivities)}</div>
                <div className="text-blue-300 text-sm">Total Activities</div>
                <div className="text-gray-400 text-xs mt-1">{salesData.salesActivities.activitiesPerRep.toFixed(0)}/rep</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(salesData.salesActivities.callConnectRate)}</div>
                <div className="text-green-300 text-sm">Call Connect Rate</div>
                <div className="text-gray-400 text-xs mt-1">{salesData.salesActivities.avgCallDuration.toFixed(1)} min avg</div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-blue-400 font-medium">{formatNumber(salesData.salesActivities.calls)}</div>
                <div className="text-slate-400 text-xs">Calls</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-green-400 font-medium">{formatNumber(salesData.salesActivities.emails)}</div>
                <div className="text-slate-400 text-xs">Emails</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-purple-400 font-medium">{formatNumber(salesData.salesActivities.meetings)}</div>
                <div className="text-slate-400 text-xs">Meetings</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-3">
                <div className="text-orange-400 font-medium">{formatNumber(salesData.salesActivities.demos)}</div>
                <div className="text-slate-400 text-xs">Demos</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Email Response Rate:</span>
                <span className="text-cyan-400">{formatPercentage(salesData.salesActivities.emailResponseRate)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Meeting Show Rate:</span>
                <span className="text-green-400">{formatPercentage(salesData.salesActivities.meetingShowRate)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Demo Conversion:</span>
                <span className="text-purple-400">{formatPercentage(salesData.salesActivities.demoConversionRate)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Follow-up Rate:</span>
                <span className="text-orange-400">{formatPercentage(salesData.salesActivities.followUpRate)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sales Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-yellow-400 mr-2" />
            Sales Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {salesData.salesAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="text-slate-400 text-xs mb-2">Assigned: {alert.assignedTo}</div>
                {alert.actionRequired && (
                  <div className="mt-2">
                    <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap gap-1">
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

        {/* Forecasting & Territory Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Forecasting Analytics
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-bold text-cyan-400">{formatCurrency(salesData.forecastingAnalytics.quarterlyForecast)}</div>
                <div className="text-cyan-300 text-sm">Quarterly Forecast</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">{formatCurrency(salesData.forecastingAnalytics.commitForecast)}</div>
                <div className="text-green-300 text-sm">Commit Forecast</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4 text-xs">
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-green-400 font-medium">{formatCurrency(salesData.forecastingAnalytics.bestCaseForecast)}</div>
                <div className="text-slate-400">Best Case</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-orange-400 font-medium">{formatCurrency(salesData.forecastingAnalytics.worstCaseForecast)}</div>
                <div className="text-slate-400">Worst Case</div>
              </div>
              <div className="text-center bg-slate-700/50 rounded p-2">
                <div className="text-purple-400 font-medium">{salesData.forecastingAnalytics.pipelineCoverage.toFixed(1)}x</div>
                <div className="text-slate-400">Coverage</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Monthly Performance</h4>
              {salesData.forecastingAnalytics.monthlyForecasts.map((month, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{month.month}</span>
                  <div className="text-xs space-x-3">
                    <span className="text-blue-400">{formatCurrency(month.target)}</span>
                    <span className="text-green-400">{formatCurrency(month.actual)}</span>
                    <span className={`${month.variance > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {month.variance > 0 ? '+' : ''}{formatPercentage(month.variance)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-purple-400 mr-2" />
              Territory Analytics
            </h3>
            <div className="space-y-3">
              {salesData.territoryAnalytics.territories.map((territory, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{territory.territory}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-400 text-sm">{formatCurrency(territory.quota)}</span>
                      <span className={`text-sm flex items-center ${territory.growth > 20 ? 'text-green-400' : 'text-yellow-400'}`}>
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {formatPercentage(territory.growth)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-3 text-xs">
                    <div className="text-center">
                      <div className="text-blue-400 font-medium">{formatCurrency(territory.pipeline)}</div>
                      <div className="text-slate-400">Pipeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium">{territory.coverage.toFixed(1)}x</div>
                      <div className="text-slate-400">Coverage</div>
                    </div>
                    <div className="text-center">
                      <div className={`font-medium ${getPerformanceColor(territory.winRate, 65, 75)}`}>{formatPercentage(territory.winRate)}</div>
                      <div className="text-slate-400">Win Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-medium">{formatCurrency(territory.avgDealSize)}</div>
                      <div className="text-slate-400">Avg Deal</div>
                    </div>
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