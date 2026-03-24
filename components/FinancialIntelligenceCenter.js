// Financial Intelligence Center - Budget Tracking, Revenue Analysis & Financial Optimization
import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, TrendingDown, PieChart, BarChart3, CreditCard, Banknote, Calculator, Target, AlertTriangle, CheckCircle, Zap } from 'lucide-react';

export default function FinancialIntelligenceCenter() {
  const [financialData, setFinancialData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    revenueOverview: {
      monthlyRevenue: 287400,
      monthlyTarget: 350000,
      quarterlyRevenue: 789600,
      quarterlyTarget: 1050000,
      annualRevenue: 2890400,
      annualTarget: 4200000,
      growth: {
        monthly: 15.7,
        quarterly: 22.3,
        annual: 18.9
      },
      runway: 14.7, // months
      burnRate: 58900 // monthly
    },
    profitabilityMetrics: {
      grossMargin: 78.4,
      netMargin: 23.7,
      operatingMargin: 28.9,
      ebitda: 412000,
      customerAcquisitionCost: 1247,
      lifetimeValue: 18500,
      ltvcacRatio: 14.8,
      paybackPeriod: 8.3, // months
      churnRate: 3.2,
      monthlyRecurringRevenue: 234500
    },
    budgetTracking: {
      totalBudget: 450000,
      spentThisMonth: 267890,
      remainingBudget: 182110,
      budgetUtilization: 59.5,
      categories: [
        {
          category: 'Engineering & Development',
          budgeted: 120000,
          spent: 89750,
          remaining: 30250,
          utilization: 74.8,
          status: 'ON_TRACK'
        },
        {
          category: 'Marketing & Sales',
          budgeted: 85000,
          spent: 72300,
          remaining: 12700,
          utilization: 85.1,
          status: 'HIGH_USAGE'
        },
        {
          category: 'Infrastructure & Cloud',
          budgeted: 45000,
          spent: 38940,
          remaining: 6060,
          utilization: 86.5,
          status: 'HIGH_USAGE'
        },
        {
          category: 'HR & Operations',
          budgeted: 75000,
          spent: 45600,
          remaining: 29400,
          utilization: 60.8,
          status: 'ON_TRACK'
        },
        {
          category: 'Legal & Compliance',
          budgeted: 25000,
          spent: 12800,
          remaining: 12200,
          utilization: 51.2,
          status: 'UNDER_BUDGET'
        },
        {
          category: 'Research & Development',
          budgeted: 100000,
          spent: 8500,
          remaining: 91500,
          utilization: 8.5,
          status: 'UNDER_BUDGET'
        }
      ],
      forecasts: [
        { month: 'April', projected: 298500, confidence: 87.3 },
        { month: 'May', projected: 315200, confidence: 82.1 },
        { month: 'June', projected: 342800, confidence: 76.5 },
        { month: 'July', projected: 367500, confidence: 71.2 }
      ]
    },
    cashFlow: {
      currentCash: 1847200,
      operatingCashFlow: 234500,
      freeCashFlow: 189300,
      cashFlowPositive: true,
      dailyBurn: 1963,
      weeklyInflow: 67850,
      weeklyOutflow: 13741,
      netWeeklyCashFlow: 54109,
      cashFlowTrend: 'POSITIVE',
      projectedCashEndOfMonth: 1978700,
      emergencyFund: {
        required: 354000, // 6 months runway
        current: 1200000,
        coverage: 20.3 // months covered
      }
    },
    expenseBreakdown: [
      {
        category: 'Personnel',
        amount: 189500,
        percentage: 45.7,
        trend: 'STABLE',
        subCategories: [
          { name: 'Engineering', amount: 98500, percentage: 52.0 },
          { name: 'Sales & Marketing', amount: 52000, percentage: 27.4 },
          { name: 'Operations', amount: 24500, percentage: 12.9 },
          { name: 'Executive', amount: 14500, percentage: 7.7 }
        ]
      },
      {
        category: 'Technology',
        amount: 67800,
        percentage: 16.4,
        trend: 'INCREASING',
        subCategories: [
          { name: 'Cloud Infrastructure', amount: 32400, percentage: 47.8 },
          { name: 'Software Licenses', amount: 18900, percentage: 27.9 },
          { name: 'Security Tools', amount: 9800, percentage: 14.5 },
          { name: 'Analytics Platforms', amount: 6700, percentage: 9.9 }
        ]
      },
      {
        category: 'Marketing',
        amount: 54200,
        percentage: 13.1,
        trend: 'INCREASING',
        subCategories: [
          { name: 'Paid Advertising', amount: 28500, percentage: 52.6 },
          { name: 'Content Creation', amount: 12800, percentage: 23.6 },
          { name: 'Events & Conferences', amount: 8400, percentage: 15.5 },
          { name: 'PR & Branding', amount: 4500, percentage: 8.3 }
        ]
      },
      {
        category: 'Operations',
        amount: 42600,
        percentage: 10.3,
        trend: 'STABLE',
        subCategories: [
          { name: 'Office & Facilities', amount: 18900, percentage: 44.4 },
          { name: 'Professional Services', amount: 12300, percentage: 28.9 },
          { name: 'Travel & Entertainment', amount: 7200, percentage: 16.9 },
          { name: 'Other Operations', amount: 4200, percentage: 9.9 }
        ]
      },
      {
        category: 'Sales',
        amount: 35700,
        percentage: 8.6,
        trend: 'INCREASING',
        subCategories: [
          { name: 'Sales Tools & CRM', amount: 15800, percentage: 44.3 },
          { name: 'Lead Generation', amount: 11200, percentage: 31.4 },
          { name: 'Sales Commissions', amount: 6500, percentage: 18.2 },
          { name: 'Sales Events', amount: 2200, percentage: 6.2 }
        ]
      },
      {
        category: 'Legal & Compliance',
        amount: 24100,
        percentage: 5.8,
        trend: 'STABLE',
        subCategories: [
          { name: 'Legal Fees', amount: 12500, percentage: 51.9 },
          { name: 'Compliance & Auditing', amount: 7200, percentage: 29.9 },
          { name: 'Insurance', amount: 4400, percentage: 18.3 }
        ]
      }
    ],
    revenueStreams: [
      {
        stream: 'SaaS Subscriptions',
        monthlyRevenue: 189500,
        percentage: 65.9,
        growth: 18.7,
        customers: 1247,
        avgRevenuePerCustomer: 152,
        churnRate: 2.8,
        trend: 'GROWING'
      },
      {
        stream: 'Professional Services',
        monthlyRevenue: 52800,
        percentage: 18.4,
        growth: 12.4,
        customers: 89,
        avgRevenuePerCustomer: 593,
        churnRate: 5.2,
        trend: 'STABLE'
      },
      {
        stream: 'Enterprise Licensing',
        monthlyRevenue: 32400,
        percentage: 11.3,
        growth: 8.9,
        customers: 12,
        avgRevenuePerCustomer: 2700,
        churnRate: 1.2,
        trend: 'STABLE'
      },
      {
        stream: 'Training & Certification',
        monthlyRevenue: 12700,
        percentage: 4.4,
        growth: 24.6,
        customers: 234,
        avgRevenuePerCustomer: 54,
        churnRate: 8.7,
        trend: 'GROWING'
      }
    ],
    financialAlerts: [
      {
        type: 'WARNING',
        category: 'Budget',
        message: 'Marketing budget at 85.1% utilization with 3 weeks remaining',
        severity: 'MEDIUM',
        actionRequired: true,
        timestamp: '23:25'
      },
      {
        type: 'INFO',
        category: 'Revenue',
        message: 'Q1 revenue target exceeded by 7.2%',
        severity: 'LOW',
        actionRequired: false,
        timestamp: '22:15'
      },
      {
        type: 'WARNING',
        category: 'Cash Flow',
        message: 'Large client payment delayed - expected next week',
        severity: 'MEDIUM',
        actionRequired: true,
        timestamp: '21:45'
      },
      {
        type: 'SUCCESS',
        category: 'Profitability',
        message: 'Monthly gross margin improved to 78.4% (+2.1%)',
        severity: 'LOW',
        actionRequired: false,
        timestamp: '20:30'
      }
    ],
    keyMetrics: {
      bookingsGrowth: 22.4,
      salesVelocity: 89.3, // days
      dealConversionRate: 18.7,
      averageDealSize: 47800,
      monthlyNewBusinessRevenue: 67500,
      monthlyExpansionRevenue: 23400,
      netRevenueRetention: 118.7,
      magicNumber: 1.34,
      ruleOf40: 42.6 // Growth rate + Profit margin
    },
    investments: {
      totalInvestments: 2400000,
      currentValuation: 15600000,
      investmentRounds: [
        { round: 'Seed', amount: 500000, date: '2024-03', valuation: 3000000 },
        { round: 'Series A', amount: 1900000, date: '2025-08', valuation: 15600000 }
      ],
      burnMultiple: 1.8,
      capitalEfficiency: 0.73,
      monthsToNextRound: 8.3,
      targetNextRoundSize: 8500000
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFinancialData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        revenueOverview: {
          ...prev.revenueOverview,
          monthlyRevenue: prev.revenueOverview.monthlyRevenue + (Math.random() - 0.5) * 1000,
          growth: {
            ...prev.revenueOverview.growth,
            monthly: Math.max(10, Math.min(25, prev.revenueOverview.growth.monthly + (Math.random() - 0.5) * 1))
          }
        },
        cashFlow: {
          ...prev.cashFlow,
          currentCash: prev.cashFlow.currentCash + (Math.random() - 0.5) * 5000,
          dailyBurn: Math.max(1500, Math.min(2500, prev.cashFlow.dailyBurn + (Math.random() - 0.5) * 100))
        },
        profitabilityMetrics: {
          ...prev.profitabilityMetrics,
          grossMargin: Math.max(70, Math.min(85, prev.profitabilityMetrics.grossMargin + (Math.random() - 0.5) * 1)),
          netMargin: Math.max(15, Math.min(30, prev.profitabilityMetrics.netMargin + (Math.random() - 0.5) * 0.5))
        }
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ON_TRACK': return 'text-green-400 bg-green-400/20';
      case 'HIGH_USAGE': return 'text-yellow-400 bg-yellow-400/20';
      case 'UNDER_BUDGET': return 'text-blue-400 bg-blue-400/20';
      case 'OVER_BUDGET': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'SUCCESS': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'ERROR': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'INFO': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getTrendColor = (trend) => {
    switch (trend) {
      case 'INCREASING': return 'text-red-400';
      case 'DECREASING': return 'text-green-400';
      case 'STABLE': return 'text-gray-400';
      case 'GROWING': return 'text-green-400';
      case 'POSITIVE': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'INCREASING': return <TrendingUp className="w-3 h-3" />;
      case 'DECREASING': return <TrendingDown className="w-3 h-3" />;
      case 'GROWING': return <TrendingUp className="w-3 h-3" />;
      case 'POSITIVE': return <TrendingUp className="w-3 h-3" />;
      default: return <BarChart3 className="w-3 h-3" />;
    }
  };

  const formatCurrency = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    } else if (amount >= 1000) {
      return `$${(amount / 1000).toFixed(0)}K`;
    }
    return `$${amount.toLocaleString()}`;
  };

  const formatPercentage = (value, showSign = false) => {
    const sign = showSign && value >= 0 ? '+' : '';
    return `${sign}${value.toFixed(1)}%`;
  };

  const getProgressColor = (utilization) => {
    if (utilization >= 90) return 'bg-red-500';
    if (utilization >= 75) return 'bg-yellow-500';
    if (utilization >= 50) return 'bg-blue-500';
    return 'bg-green-500';
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
              <h1 className="text-2xl font-bold text-white">Financial Intelligence Center</h1>
              <p className="text-green-300">Budget tracking, revenue analysis, financial optimization & cash flow management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{financialData.currentTime}</div>
            <div className="text-green-300">Financial Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Revenue Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                Monthly Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(financialData.revenueOverview.monthlyRevenue)}</div>
            <div className="text-green-300 text-sm">{formatPercentage(financialData.revenueOverview.growth.monthly, true)} growth</div>
            <div className="text-gray-400 text-xs mt-2">Target: {formatCurrency(financialData.revenueOverview.monthlyTarget)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <PieChart className="w-5 h-5 text-cyan-400 mr-2" />
                Gross Margin
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatPercentage(financialData.profitabilityMetrics.grossMargin)}</div>
            <div className="text-cyan-300 text-sm">Net: {formatPercentage(financialData.profitabilityMetrics.netMargin)}</div>
            <div className="text-gray-400 text-xs mt-2">LTV/CAC: {financialData.profitabilityMetrics.ltvcacRatio.toFixed(1)}x</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Banknote className="w-5 h-5 text-emerald-400 mr-2" />
                Cash Position
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{formatCurrency(financialData.cashFlow.currentCash)}</div>
            <div className="text-emerald-300 text-sm">{financialData.revenueOverview.runway.toFixed(1)} months runway</div>
            <div className="text-gray-400 text-xs mt-2">Burn: {formatCurrency(financialData.revenueOverview.burnRate)}/mo</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Rule of 40
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{financialData.keyMetrics.ruleOf40.toFixed(1)}</div>
            <div className="text-purple-300 text-sm">Growth + Margin</div>
            <div className="text-gray-400 text-xs mt-2">Magic Number: {financialData.keyMetrics.magicNumber.toFixed(2)}</div>
          </div>
        </div>

        {/* Budget Tracking & Revenue Streams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Calculator className="w-5 h-5 text-blue-400 mr-2" />
              Budget Tracking
            </h3>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white">Overall Utilization</span>
                <span className="text-blue-400 font-medium">{formatPercentage(financialData.budgetTracking.budgetUtilization)}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${getProgressColor(financialData.budgetTracking.budgetUtilization)}`}
                  style={{ width: `${Math.min(100, financialData.budgetTracking.budgetUtilization)}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Spent: {formatCurrency(financialData.budgetTracking.spentThisMonth)}</span>
                <span>Remaining: {formatCurrency(financialData.budgetTracking.remainingBudget)}</span>
              </div>
            </div>
            <div className="space-y-3">
              {financialData.budgetTracking.categories.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{category.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(category.status)}`}>
                        {category.status.replace('_', ' ')}
                      </span>
                      <span className="text-cyan-400 text-sm">{formatPercentage(category.utilization)}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full ${getProgressColor(category.utilization)}`}
                      style={{ width: `${Math.min(100, category.utilization)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>Spent: {formatCurrency(category.spent)}</span>
                    <span>Budget: {formatCurrency(category.budgeted)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Revenue Streams
            </h3>
            <div className="space-y-4">
              {financialData.revenueStreams.map((stream, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-medium">{stream.stream}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getTrendColor(stream.trend)} flex items-center`}>
                        {getTrendIcon(stream.trend)}
                        <span className="ml-1">{formatPercentage(stream.growth, true)}</span>
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-green-400 font-medium text-sm">{formatCurrency(stream.monthlyRevenue)}</div>
                      <div className="text-slate-400 text-xs">Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium text-sm">{stream.customers}</div>
                      <div className="text-slate-400 text-xs">Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-cyan-400 font-medium text-sm">{formatCurrency(stream.avgRevenuePerCustomer)}</div>
                      <div className="text-slate-400 text-xs">ARPC</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-xs">{formatPercentage(stream.percentage)} of total revenue</span>
                    <span className="text-red-400 text-xs">{formatPercentage(stream.churnRate)} churn</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cash Flow & Expense Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CreditCard className="w-5 h-5 text-emerald-400 mr-2" />
              Cash Flow Analysis
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">{formatCurrency(financialData.cashFlow.operatingCashFlow)}</div>
                <div className="text-emerald-300 text-sm">Operating Cash Flow</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatCurrency(financialData.cashFlow.freeCashFlow)}</div>
                <div className="text-cyan-300 text-sm">Free Cash Flow</div>
              </div>
            </div>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-slate-300">Daily Burn Rate</span>
                <span className="text-red-400 font-medium">{formatCurrency(financialData.cashFlow.dailyBurn)}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-slate-300">Weekly Inflow</span>
                <span className="text-green-400 font-medium">{formatCurrency(financialData.cashFlow.weeklyInflow)}</span>
              </div>
              <div className="flex items-center justify-between bg-slate-700/30 rounded p-3">
                <span className="text-slate-300">Net Weekly Cash Flow</span>
                <span className={`font-medium ${financialData.cashFlow.netWeeklyCashFlow > 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {formatCurrency(financialData.cashFlow.netWeeklyCashFlow)}
                </span>
              </div>
            </div>
            <div className="bg-slate-700/50 rounded-lg p-3">
              <div className="text-white text-sm font-medium mb-2">Emergency Fund</div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">Coverage: {financialData.cashFlow.emergencyFund.coverage.toFixed(1)} months</span>
                <span className="text-emerald-400">{formatCurrency(financialData.cashFlow.emergencyFund.current)}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-orange-400 mr-2" />
              Expense Breakdown
            </h3>
            <div className="space-y-3">
              {financialData.expenseBreakdown.map((expense, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{expense.category}</span>
                      <span className={`text-xs flex items-center ${getTrendColor(expense.trend)}`}>
                        {getTrendIcon(expense.trend)}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-orange-400 font-medium text-sm">{formatCurrency(expense.amount)}</div>
                      <div className="text-gray-400 text-xs">{formatPercentage(expense.percentage)}</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {expense.subCategories.slice(0, 2).map((sub, subIndex) => (
                      <div key={subIndex} className="flex justify-between">
                        <span className="text-slate-400">{sub.name}</span>
                        <span className="text-slate-300">{formatCurrency(sub.amount)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Financial Alerts & Key Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Financial Alerts
            </h3>
            <div className="space-y-3">
              {financialData.financialAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-3 border ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm font-medium ${alert.type === 'SUCCESS' ? 'text-green-400' : alert.type === 'WARNING' ? 'text-yellow-400' : alert.type === 'ERROR' ? 'text-red-400' : 'text-blue-400'}`}>
                        {alert.type}
                      </span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white text-sm">{alert.message}</div>
                  {alert.actionRequired && (
                    <div className="mt-2">
                      <span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 rounded text-xs">Action Required</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-purple-400 mr-2" />
              Key Financial Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-green-400 font-bold text-lg">{formatCurrency(financialData.keyMetrics.averageDealSize)}</div>
                <div className="text-slate-400 text-xs">Average Deal Size</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-purple-400 font-bold text-lg">{financialData.keyMetrics.salesVelocity.toFixed(0)}d</div>
                <div className="text-slate-400 text-xs">Sales Velocity</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-cyan-400 font-bold text-lg">{formatPercentage(financialData.keyMetrics.dealConversionRate)}</div>
                <div className="text-slate-400 text-xs">Deal Conversion</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-orange-400 font-bold text-lg">{formatPercentage(financialData.keyMetrics.netRevenueRetention)}</div>
                <div className="text-slate-400 text-xs">Net Revenue Retention</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-emerald-400 font-bold text-lg">{formatCurrency(financialData.keyMetrics.monthlyNewBusinessRevenue)}</div>
                <div className="text-slate-400 text-xs">New Business MRR</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 text-center">
                <div className="text-yellow-400 font-bold text-lg">{formatCurrency(financialData.keyMetrics.monthlyExpansionRevenue)}</div>
                <div className="text-slate-400 text-xs">Expansion MRR</div>
              </div>
            </div>
            <div className="mt-4 bg-slate-700/50 rounded-lg p-3">
              <div className="text-white text-sm font-medium mb-2">Investment Overview</div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Raised</span>
                  <span className="text-green-400">{formatCurrency(financialData.investments.totalInvestments)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Valuation</span>
                  <span className="text-purple-400">{formatCurrency(financialData.investments.currentValuation)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Burn Multiple</span>
                  <span className="text-orange-400">{financialData.investments.burnMultiple.toFixed(1)}x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Next Round</span>
                  <span className="text-cyan-400">{financialData.investments.monthsToNextRound.toFixed(1)}mo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Forecast */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
            Revenue Forecast
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {financialData.budgetTracking.forecasts.map((forecast, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-center">
                  <div className="text-white font-medium text-sm mb-2">{forecast.month} 2026</div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">{formatCurrency(forecast.projected)}</div>
                  <div className="text-slate-400 text-xs">Projected Revenue</div>
                  <div className="mt-3">
                    <div className={`text-sm font-medium ${forecast.confidence >= 80 ? 'text-green-400' : forecast.confidence >= 70 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {forecast.confidence.toFixed(1)}% confidence
                    </div>
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