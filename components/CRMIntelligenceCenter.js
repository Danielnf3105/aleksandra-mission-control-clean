// CRM Intelligence Center - Customer Lifecycle Analytics, Pipeline Management & Relationship Intelligence
import { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Heart, BarChart3, Clock, Target, AlertTriangle, CheckCircle, Star, Activity } from 'lucide-react';

export default function CRMIntelligenceCenter() {
  const [crmData, setCrmData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    crmOverview: {
      totalCustomers: 12456,
      activeCustomers: 8934,
      newCustomers: 234, // this month
      churned: 45,
      totalDeals: 567,
      openDeals: 234,
      closedWonDeals: 89,
      totalRevenue: 1234567,
      projectedRevenue: 890123,
      avgDealSize: 13890.45,
      avgSalesCycle: 45.6,
      conversionRate: 23.4,
      customerLifetime: 890.23,
      churnRate: 2.8,
      nps: 8.7,
      csat: 4.2,
      retentionRate: 87.4
    },
    salesPipeline: [
      {
        stage: 'Prospecting',
        deals: 89,
        value: 234567,
        avgStageTime: '12 days',
        conversionRate: 45.6,
        velocity: 19567,
        probability: 15.0,
        nextStage: 'Qualification',
        dropoffRate: 54.4,
        stageHealth: 'GOOD',
        topSources: ['Inbound', 'Cold Outreach', 'Referral']
      },
      {
        stage: 'Qualification',
        deals: 67,
        value: 189012,
        avgStageTime: '8 days',
        conversionRate: 67.8,
        velocity: 23626,
        probability: 25.0,
        nextStage: 'Proposal',
        dropoffRate: 32.2,
        stageHealth: 'EXCELLENT',
        topSources: ['Inbound', 'Marketing', 'Referral']
      },
      {
        stage: 'Proposal',
        deals: 45,
        value: 156789,
        avgStageTime: '15 days',
        conversionRate: 78.9,
        velocity: 10453,
        probability: 50.0,
        nextStage: 'Negotiation',
        dropoffRate: 21.1,
        stageHealth: 'EXCELLENT',
        topSources: ['Demo Request', 'Qualified Lead', 'Warm Referral']
      },
      {
        stage: 'Negotiation',
        deals: 34,
        value: 123456,
        avgStageTime: '10 days',
        conversionRate: 89.2,
        velocity: 12346,
        probability: 75.0,
        nextStage: 'Closed Won',
        dropoffRate: 10.8,
        stageHealth: 'EXCELLENT',
        topSources: ['Proposal Submitted', 'Price Negotiation', 'Contract Review']
      },
      {
        stage: 'Closed Won',
        deals: 23,
        value: 89012,
        avgStageTime: '3 days',
        conversionRate: 100.0,
        velocity: 29671,
        probability: 100.0,
        nextStage: 'Onboarding',
        dropoffRate: 0.0,
        stageHealth: 'OUTSTANDING',
        topSources: ['Contract Signed', 'Payment Received', 'Implementation Started']
      }
    ],
    topCustomers: [
      {
        id: 'CUST001',
        name: 'TechCorp Solutions',
        type: 'Enterprise',
        industry: 'Technology',
        totalRevenue: 89012,
        ltv: 456789,
        healthScore: 92.4,
        churnRisk: 'LOW',
        lastActivity: '2 hours ago',
        accountManager: 'Sarah Johnson',
        contractValue: 234567,
        contractExpiry: '2026-12-15',
        nps: 9.2,
        csat: 4.8,
        openDeals: 2,
        dealValue: 45678,
        engagementLevel: 'HIGH',
        supportTickets: 3,
        productUsage: 89.7,
        renewalProbability: 95.6
      },
      {
        id: 'CUST002',
        name: 'Global Marketing Inc',
        type: 'Mid-Market',
        industry: 'Marketing',
        totalRevenue: 56789,
        ltv: 234567,
        healthScore: 87.9,
        churnRisk: 'LOW',
        lastActivity: '1 day ago',
        accountManager: 'Mike Chen',
        contractValue: 123456,
        contractExpiry: '2027-03-20',
        nps: 8.7,
        csat: 4.5,
        openDeals: 1,
        dealValue: 23456,
        engagementLevel: 'HIGH',
        supportTickets: 1,
        productUsage: 76.3,
        renewalProbability: 89.4
      },
      {
        id: 'CUST003',
        name: 'StartupX',
        type: 'Small Business',
        industry: 'SaaS',
        totalRevenue: 23456,
        ltv: 89012,
        healthScore: 73.2,
        churnRisk: 'MEDIUM',
        lastActivity: '5 days ago',
        accountManager: 'Emma Davis',
        contractValue: 34567,
        contractExpiry: '2026-08-30',
        nps: 7.8,
        csat: 4.1,
        openDeals: 0,
        dealValue: 0,
        engagementLevel: 'MEDIUM',
        supportTickets: 7,
        productUsage: 45.8,
        renewalProbability: 67.3
      },
      {
        id: 'CUST004',
        name: 'Regional Services Co',
        type: 'Mid-Market',
        industry: 'Services',
        totalRevenue: 34567,
        ltv: 156789,
        healthScore: 65.8,
        churnRisk: 'HIGH',
        lastActivity: '2 weeks ago',
        accountManager: 'David Wilson',
        contractValue: 67890,
        contractExpiry: '2026-06-15',
        nps: 6.9,
        csat: 3.8,
        openDeals: 1,
        dealValue: 12345,
        engagementLevel: 'LOW',
        supportTickets: 12,
        productUsage: 23.4,
        renewalProbability: 45.7
      }
    ],
    salesTeamPerformance: [
      {
        name: 'Sarah Johnson',
        role: 'Senior Account Executive',
        quota: 500000,
        achieved: 423678,
        attainment: 84.7,
        deals: 23,
        avgDealSize: 18420,
        conversionRate: 34.6,
        salesCycle: 42.3,
        pipeline: 234567,
        activities: 156,
        callsPerWeek: 45,
        emailsPerWeek: 89,
        meetingsPerWeek: 12,
        performance: 'EXCELLENT'
      },
      {
        name: 'Mike Chen',
        role: 'Account Executive',
        quota: 350000,
        achieved: 298765,
        attainment: 85.4,
        deals: 19,
        avgDealSize: 15724,
        conversionRate: 28.9,
        salesCycle: 38.7,
        pipeline: 189012,
        activities: 134,
        callsPerWeek: 52,
        emailsPerWeek: 76,
        meetingsPerWeek: 14,
        performance: 'EXCELLENT'
      },
      {
        name: 'Emma Davis',
        role: 'Account Executive',
        quota: 300000,
        achieved: 234567,
        attainment: 78.2,
        deals: 16,
        avgDealSize: 14660,
        conversionRate: 24.3,
        salesCycle: 45.8,
        pipeline: 156789,
        activities: 123,
        callsPerWeek: 38,
        emailsPerWeek: 67,
        meetingsPerWeek: 9,
        performance: 'GOOD'
      },
      {
        name: 'David Wilson',
        role: 'Junior Account Executive',
        quota: 200000,
        achieved: 123456,
        attainment: 61.7,
        deals: 8,
        avgDealSize: 15432,
        conversionRate: 18.7,
        salesCycle: 52.4,
        pipeline: 89012,
        activities: 98,
        callsPerWeek: 28,
        emailsPerWeek: 45,
        meetingsPerWeek: 6,
        performance: 'DEVELOPING'
      }
    ],
    customerSegments: [
      {
        segment: 'Enterprise',
        customers: 234,
        percentage: 18.8,
        avgRevenue: 67890,
        ltv: 456789,
        churnRate: 1.2,
        healthScore: 89.4,
        nps: 8.9,
        retentionRate: 94.6,
        expansionRate: 23.4,
        contractValue: 234567,
        supportTickets: 2.3,
        productUsage: 87.5,
        growth: '+12.4%'
      },
      {
        segment: 'Mid-Market',
        customers: 567,
        percentage: 45.5,
        avgRevenue: 23456,
        ltv: 156789,
        churnRate: 2.8,
        healthScore: 78.9,
        nps: 7.8,
        retentionRate: 87.3,
        expansionRate: 15.7,
        contractValue: 89012,
        supportTickets: 4.2,
        productUsage: 67.8,
        growth: '+8.7%'
      },
      {
        segment: 'Small Business',
        customers: 890,
        percentage: 71.5,
        avgRevenue: 8901,
        ltv: 45678,
        churnRate: 5.6,
        healthScore: 67.2,
        nps: 6.9,
        retentionRate: 78.9,
        expansionRate: 8.4,
        contractValue: 23456,
        supportTickets: 6.7,
        productUsage: 45.3,
        growth: '+15.2%'
      },
      {
        segment: 'Startup',
        customers: 456,
        percentage: 36.6,
        avgRevenue: 3456,
        ltv: 12345,
        churnRate: 12.4,
        healthScore: 58.7,
        nps: 6.2,
        retentionRate: 67.8,
        expansionRate: 3.2,
        contractValue: 8901,
        supportTickets: 8.9,
        productUsage: 34.6,
        growth: '+23.8%'
      }
    ],
    renewalTracking: [
      {
        customer: 'TechCorp Solutions',
        contractValue: 234567,
        renewalDate: '2026-12-15',
        daysToRenewal: 272,
        probability: 95.6,
        healthScore: 92.4,
        accountManager: 'Sarah Johnson',
        riskFactors: [],
        engagementLevel: 'HIGH',
        lastContact: '2 hours ago',
        renewalStage: 'Early Engagement',
        priority: 'HIGH'
      },
      {
        customer: 'Global Marketing Inc',
        contractValue: 123456,
        renewalDate: '2027-03-20',
        daysToRenewal: 367,
        probability: 89.4,
        healthScore: 87.9,
        accountManager: 'Mike Chen',
        riskFactors: ['Budget Concerns'],
        engagementLevel: 'HIGH',
        lastContact: '1 day ago',
        renewalStage: 'Monitoring',
        priority: 'MEDIUM'
      },
      {
        customer: 'StartupX',
        contractValue: 34567,
        renewalDate: '2026-08-30',
        daysToRenewal: 165,
        probability: 67.3,
        healthScore: 73.2,
        accountManager: 'Emma Davis',
        riskFactors: ['Low Usage', 'Support Issues'],
        engagementLevel: 'MEDIUM',
        lastContact: '5 days ago',
        renewalStage: 'At Risk',
        priority: 'HIGH'
      },
      {
        customer: 'Regional Services Co',
        contractValue: 67890,
        renewalDate: '2026-06-15',
        daysToRenewal: 89,
        probability: 45.7,
        healthScore: 65.8,
        accountManager: 'David Wilson',
        riskFactors: ['Poor Engagement', 'Competitor Evaluation', 'Budget Cuts'],
        engagementLevel: 'LOW',
        lastContact: '2 weeks ago',
        renewalStage: 'High Risk',
        priority: 'CRITICAL'
      }
    ],
    performanceAlerts: [
      {
        type: 'CRITICAL',
        category: 'Customer Health',
        message: 'Regional Services Co health score dropped to 65.8 - high churn risk detected',
        metric: 'Health Score',
        value: '65.8',
        change: '-12.4 points',
        impact: 'HIGH',
        timestamp: '08:04',
        customer: 'Regional Services Co',
        accountManager: 'David Wilson',
        contractValue: '$67.9K',
        renewalDate: '2026-06-15',
        recommendation: 'Immediate intervention, schedule executive meeting',
        urgency: 'CRITICAL',
        escalation: 'SALES_DIRECTOR'
      },
      {
        type: 'SUCCESS',
        category: 'Sales Performance',
        message: 'Sarah Johnson exceeded Q1 target by 24.7% - $423.7K vs $340K target',
        metric: 'Quota Attainment',
        value: '124.7%',
        change: '+24.7% above target',
        impact: 'MAJOR',
        timestamp: '08:02',
        salesperson: 'Sarah Johnson',
        deals: 23,
        recommendation: 'Recognition program, share best practices with team',
        urgency: 'LOW',
        opportunity: 'TEAM_TRAINING'
      },
      {
        type: 'WARNING',
        category: 'Pipeline Health',
        message: 'Prospecting stage velocity decreased 15% - potential future revenue impact',
        metric: 'Stage Velocity',
        value: '$19.6K/day',
        change: '-15% from last month',
        impact: 'MODERATE',
        timestamp: '08:01',
        stage: 'Prospecting',
        affectedDeals: 89,
        recommendation: 'Increase lead generation activities, review qualification criteria',
        urgency: 'MEDIUM',
        technicalAction: 'MARKETING_ALIGNMENT'
      },
      {
        type: 'INFO',
        category: 'Customer Growth',
        message: 'Enterprise segment showing +12.4% growth with 94.6% retention rate',
        metric: 'Segment Growth',
        value: '+12.4%',
        change: 'Positive trend',
        impact: 'POSITIVE',
        timestamp: '08:00',
        segment: 'Enterprise',
        customers: 234,
        opportunity: 'Focus expansion efforts on enterprise market',
        recommendation: 'Allocate more resources to enterprise segment',
        urgency: 'LOW',
        opportunity: 'SCALE_SUCCESS'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCrmData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        crmOverview: {
          ...prev.crmOverview,
          activeCustomers: Math.max(8900, Math.min(9000, prev.crmOverview.activeCustomers + Math.floor((Math.random() - 0.5) * 10))),
          totalRevenue: Math.max(1230000, Math.min(1240000, prev.crmOverview.totalRevenue + Math.floor((Math.random() - 0.5) * 2000))),
          conversionRate: Math.max(22.0, Math.min(25.0, prev.crmOverview.conversionRate + (Math.random() - 0.5) * 0.2))
        }
      }));
    }, 25000);

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

  const getCustomerTypeColor = (type) => {
    switch (type) {
      case 'Enterprise': return 'text-purple-400 bg-purple-400/20';
      case 'Mid-Market': return 'text-blue-400 bg-blue-400/20';
      case 'Small Business': return 'text-green-400 bg-green-400/20';
      case 'Startup': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getChurnRiskColor = (risk) => {
    switch (risk) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case 'OUTSTANDING': return 'text-green-400 bg-green-400/20';
      case 'EXCELLENT': return 'text-blue-400 bg-blue-400/20';
      case 'GOOD': return 'text-cyan-400 bg-cyan-400/20';
      case 'DEVELOPING': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStageHealthColor = (health) => {
    switch (health) {
      case 'OUTSTANDING': return 'text-green-400';
      case 'EXCELLENT': return 'text-blue-400';
      case 'GOOD': return 'text-cyan-400';
      case 'FAIR': return 'text-yellow-400';
      case 'POOR': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
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
    <div className="h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">CRM Intelligence Center</h1>
              <p className="text-cyan-300">Customer lifecycle analytics, pipeline management & relationship intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{crmData.currentTime}</div>
            <div className="text-cyan-300">CRM Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* CRM Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Customers
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(crmData.crmOverview.activeCustomers)}</div>
            <div className="text-cyan-300 text-sm">{formatNumber(crmData.crmOverview.totalCustomers)} Total • +{crmData.crmOverview.newCustomers} New</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                Revenue
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(crmData.crmOverview.totalRevenue)}</div>
            <div className="text-green-300 text-sm">{formatCurrency(crmData.crmOverview.projectedRevenue)} Projected</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Conversion
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(crmData.crmOverview.conversionRate, 15, 25)}`}>
              {formatPercentage(crmData.crmOverview.conversionRate)}
            </div>
            <div className="text-purple-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-orange-400 mr-2" />
                Sales Cycle
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{crmData.crmOverview.avgSalesCycle.toFixed(0)}</div>
            <div className="text-orange-300 text-sm">Days Avg</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Heart className="w-5 h-5 text-pink-400 mr-2" />
                NPS
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(crmData.crmOverview.nps, 7, 8.5)}`}>
              {crmData.crmOverview.nps.toFixed(1)}
            </div>
            <div className="text-pink-300 text-sm">Net Promoter Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-indigo-400 mr-2" />
                Retention
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(crmData.crmOverview.retentionRate, 80, 90)}`}>
              {formatPercentage(crmData.crmOverview.retentionRate)}
            </div>
            <div className="text-indigo-300 text-sm">Rate</div>
          </div>
        </div>

        {/* Sales Pipeline */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            Sales Pipeline Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Stage</th>
                  <th className="text-center p-3 text-slate-300">Deals</th>
                  <th className="text-center p-3 text-slate-300">Value</th>
                  <th className="text-center p-3 text-slate-300">Conversion</th>
                  <th className="text-center p-3 text-slate-300">Velocity</th>
                  <th className="text-center p-3 text-slate-300">Health</th>
                </tr>
              </thead>
              <tbody>
                {crmData.salesPipeline.map((stage, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{stage.stage}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        Avg: {stage.avgStageTime} • Prob: {formatPercentage(stage.probability)}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{stage.deals}</div>
                      <div className="text-red-400 text-xs">{formatPercentage(stage.dropoffRate)} dropoff</div>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(stage.value)}</td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(stage.conversionRate, 40, 70)}`}>
                      {formatPercentage(stage.conversionRate)}
                    </td>
                    <td className="p-3 text-center text-orange-400">{formatCurrency(stage.velocity)}/day</td>
                    <td className="p-3 text-center">
                      <span className={`text-sm ${getStageHealthColor(stage.stageHealth)}`}>
                        {stage.stageHealth}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Customers & Sales Team */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Top Customer Intelligence
            </h3>
            <div className="space-y-4">
              {crmData.topCustomers.map((customer, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{customer.name}</span>
                      <span className={`px-2 py-1 rounded text-xs ${getCustomerTypeColor(customer.type)}`}>
                        {customer.type}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs ${getChurnRiskColor(customer.churnRisk)}`}>
                      {customer.churnRisk} Risk
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Revenue: {formatCurrency(customer.totalRevenue)}</div>
                    <div className="text-purple-400">LTV: {formatCurrency(customer.ltv)}</div>
                    <div className={`${getScoreColor(customer.healthScore, 70, 85)}`}>Health: {customer.healthScore.toFixed(0)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Contract: {formatCurrency(customer.contractValue)}</div>
                    <div className="text-orange-400">Usage: {formatPercentage(customer.productUsage)}</div>
                    <div className="text-yellow-400">Renewal: {formatPercentage(customer.renewalProbability)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>AM:</strong> {customer.accountManager} • <strong>Industry:</strong> {customer.industry} • <strong>Exp:</strong> {customer.contractExpiry}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-blue-400 mr-2" />
              Sales Team Performance
            </h3>
            <div className="space-y-4">
              {crmData.salesTeamPerformance.map((person, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{person.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPerformanceColor(person.performance)}`}>
                        {person.performance}
                      </span>
                      <span className={`text-sm ${getScoreColor(person.attainment, 70, 90)}`}>
                        {formatPercentage(person.attainment)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Achieved: {formatCurrency(person.achieved)}</div>
                    <div className="text-purple-400">Quota: {formatCurrency(person.quota)}</div>
                    <div className="text-cyan-400">Pipeline: {formatCurrency(person.pipeline)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-orange-400">Deals: {person.deals}</div>
                    <div className="text-yellow-400">Avg: {formatCurrency(person.avgDealSize)}</div>
                    <div className="text-blue-400">Conv: {formatPercentage(person.conversionRate)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Role:</strong> {person.role} • <strong>Cycle:</strong> {person.salesCycle.toFixed(0)} days • <strong>Activities:</strong> {person.activities}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Segments & Renewal Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Customer Segment Analytics
            </h3>
            <div className="space-y-4">
              {crmData.customerSegments.map((segment, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getCustomerTypeColor(segment.segment)}`}>
                        {segment.segment}
                      </span>
                      <span className="text-white text-sm">{segment.customers} customers</span>
                    </div>
                    <span className="text-green-400 text-sm">{segment.growth}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Avg Rev: {formatCurrency(segment.avgRevenue)}</div>
                    <div className="text-purple-400">LTV: {formatCurrency(segment.ltv)}</div>
                    <div className="text-red-400">Churn: {formatPercentage(segment.churnRate)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${getScoreColor(segment.healthScore, 70, 85)}`}>Health: {segment.healthScore.toFixed(0)}</div>
                    <div className="text-cyan-400">NPS: {segment.nps.toFixed(1)}</div>
                    <div className="text-orange-400">Retention: {formatPercentage(segment.retentionRate)}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Usage:</strong> {formatPercentage(segment.productUsage)} • <strong>Expansion:</strong> {formatPercentage(segment.expansionRate)} • <strong>Tickets:</strong> {segment.supportTickets} avg
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 text-orange-400 mr-2" />
              Renewal Tracking Intelligence
            </h3>
            <div className="space-y-4">
              {crmData.renewalTracking.map((renewal, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{renewal.customer}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getPriorityColor(renewal.priority)}`}>
                        {renewal.priority}
                      </span>
                      <span className={`text-sm ${getScoreColor(renewal.probability, 60, 80)}`}>
                        {formatPercentage(renewal.probability)}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Value: {formatCurrency(renewal.contractValue)}</div>
                    <div className="text-orange-400">Days: {renewal.daysToRenewal}</div>
                    <div className="text-cyan-400">Health: {renewal.healthScore.toFixed(0)}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Stage: {renewal.renewalStage}</div>
                    <div className="text-yellow-400">AM: {renewal.accountManager}</div>
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Risks:</strong> {renewal.riskFactors.length ? renewal.riskFactors.join(', ') : 'None'} • <strong>Last Contact:</strong> {renewal.lastContact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CRM Performance Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            CRM Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {crmData.performanceAlerts.map((alert, index) => (
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
                    {alert.customer && <div className="text-slate-300">Customer: {alert.customer}</div>}
                    {alert.salesperson && <div className="text-slate-300">Rep: {alert.salesperson}</div>}
                    {alert.segment && <div className="text-slate-300">Segment: {alert.segment}</div>}
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