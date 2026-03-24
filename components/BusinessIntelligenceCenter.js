// Business Intelligence Center - ROI Tracking & Revenue Analytics
import { useState, useEffect } from 'react';
import { DollarSign, TrendingUp, Target, BarChart3, PieChart, Users, Calendar, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function BusinessIntelligenceCenter() {
  const [businessData, setBusinessData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    revenueMetrics: {
      monthlyRevenue: 24680,
      monthlyGrowth: 15.7,
      yearToDateRevenue: 67240,
      averageOrderValue: 1230,
      conversionRate: 8.9,
      customerLifetimeValue: 4560,
      revenueGrowthTrend: '+23.4%'
    },
    leadGeneration: {
      totalLeads: 342,
      qualifiedLeads: 156,
      hotProspects: 28,
      conversionToSale: 12.7,
      costPerLead: 47,
      leadQualityScore: 87.3,
      pipelineValue: 145600,
      averageTimeToClose: 21 // days
    },
    contentROI: {
      instagramEngagement: 94.7,
      linkedinReach: 12400,
      contentConversions: 89,
      socialMediaROI: 340, // %
      videoCompletionRate: 78.6,
      organicTrafficGrowth: 45.2,
      contentToLeadRatio: 15.8,
      brandMentions: 167
    },
    operationalMetrics: {
      automationSavings: 8960, // monthly
      taskCompletionRate: 96.8,
      processEfficiency: 94.2,
      costReduction: 22.1, // %
      timeToDelivery: 3.2, // days
      clientSatisfaction: 97.4,
      operationalUptime: 99.7,
      resourceUtilization: 89.3
    },
    monthlyBreakdown: [
      { month: 'Sep', revenue: 18400, leads: 124, conversion: 11.2 },
      { month: 'Oct', revenue: 21200, leads: 145, conversion: 12.8 },
      { month: 'Nov', revenue: 23800, leads: 178, conversion: 13.9 },
      { month: 'Dec', revenue: 26900, leads: 198, conversion: 14.7 },
      { month: 'Jan', revenue: 22100, leads: 156, conversion: 12.1 },
      { month: 'Feb', revenue: 24680, leads: 189, conversion: 15.2 },
      { month: 'Mar', revenue: 27300, leads: 213, conversion: 16.8 }
    ],
    topPerformingChannels: [
      { channel: 'LinkedIn Outreach', revenue: 12400, leads: 89, roi: 420 },
      { channel: 'Instagram Content', revenue: 8900, leads: 156, roi: 380 },
      { channel: 'Spec Ad Campaigns', revenue: 6700, leads: 45, roi: 290 },
      { channel: 'Referrals', revenue: 4200, leads: 23, roi: 520 },
      { channel: 'Organic Search', revenue: 3100, leads: 67, roi: 340 }
    ],
    upcomingTargets: [
      { target: 'Q1 Revenue Goal', current: 89400, goal: 95000, deadline: '31 Mar' },
      { target: 'Lead Quality Score', current: 87.3, goal: 90.0, deadline: '15 Apr' },
      { target: 'Conversion Rate', current: 8.9, goal: 10.0, deadline: '30 Mar' },
      { target: 'Cost Per Lead', current: 47, goal: 40, deadline: '15 Apr' }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        revenueMetrics: {
          ...prev.revenueMetrics,
          monthlyRevenue: prev.revenueMetrics.monthlyRevenue + Math.floor(Math.random() * 100 - 50),
          conversionRate: Math.max(7, Math.min(12, prev.revenueMetrics.conversionRate + (Math.random() - 0.5) * 0.5))
        },
        leadGeneration: {
          ...prev.leadGeneration,
          totalLeads: prev.leadGeneration.totalLeads + Math.floor(Math.random() * 3),
          leadQualityScore: Math.max(80, Math.min(95, prev.leadGeneration.leadQualityScore + (Math.random() - 0.5) * 2))
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getProgressColor = (current, goal) => {
    const percentage = (current / goal) * 100;
    if (percentage >= 90) return 'from-green-500 to-emerald-500';
    if (percentage >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-orange-500';
  };

  const getTrendIcon = (trend) => {
    if (trend > 0) return <ArrowUpRight className="w-4 h-4 text-green-400" />;
    return <ArrowDownRight className="w-4 h-4 text-red-400" />;
  };

  return (
    <div className="h-full bg-gradient-to-br from-green-900 via-slate-900 to-emerald-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-green-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Business Intelligence Center</h1>
              <p className="text-green-300">Revenue analytics, ROI tracking & performance intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-green-400">{businessData.currentTime}</div>
            <div className="text-green-300">Revenue Command Center</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Revenue Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="w-5 h-5 text-green-400 mr-2" />
                Monthly Revenue
              </h3>
              {getTrendIcon(businessData.revenueMetrics.monthlyGrowth)}
            </div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(businessData.revenueMetrics.monthlyRevenue)}</div>
            <div className="text-green-300 text-sm">{businessData.revenueMetrics.revenueGrowthTrend} vs last month</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-cyan-400 mr-2" />
                Conversion Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{businessData.revenueMetrics.conversionRate}%</div>
            <div className="text-cyan-300 text-sm">Leads to customers</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Total Leads
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{businessData.leadGeneration.totalLeads}</div>
            <div className="text-purple-300 text-sm">{businessData.leadGeneration.qualifiedLeads} qualified</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-orange-400 mr-2" />
                Pipeline Value
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatCurrency(businessData.leadGeneration.pipelineValue)}</div>
            <div className="text-orange-300 text-sm">{businessData.leadGeneration.hotProspects} hot prospects</div>
          </div>
        </div>

        {/* ROI & Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <PieChart className="w-5 h-5 text-green-400 mr-2" />
              Content ROI Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Instagram Engagement</span>
                <span className="text-green-400 font-medium">{businessData.contentROI.instagramEngagement}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">LinkedIn Reach</span>
                <span className="text-cyan-400 font-medium">{businessData.contentROI.linkedinReach.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Social Media ROI</span>
                <span className="text-purple-400 font-medium">{businessData.contentROI.socialMediaROI}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Video Completion Rate</span>
                <span className="text-orange-400 font-medium">{businessData.contentROI.videoCompletionRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Organic Traffic Growth</span>
                <span className="text-green-400 font-medium">+{businessData.contentROI.organicTrafficGrowth}%</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Operational Efficiency
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Automation Savings</span>
                <span className="text-green-400 font-medium">{formatCurrency(businessData.operationalMetrics.automationSavings)}/mo</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Task Completion Rate</span>
                <span className="text-cyan-400 font-medium">{businessData.operationalMetrics.taskCompletionRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Process Efficiency</span>
                <span className="text-purple-400 font-medium">{businessData.operationalMetrics.processEfficiency}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Cost Reduction</span>
                <span className="text-orange-400 font-medium">-{businessData.operationalMetrics.costReduction}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Client Satisfaction</span>
                <span className="text-green-400 font-medium">{businessData.operationalMetrics.clientSatisfaction}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Performing Channels */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
            Top Performing Channels
          </h3>
          <div className="space-y-4">
            {businessData.topPerformingChannels.map((channel, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{channel.channel}</h4>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">{formatCurrency(channel.revenue)}</div>
                    <div className="text-green-300 text-sm">ROI: {channel.roi}%</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Leads Generated: {channel.leads}</span>
                  <span className="text-slate-400">Avg Deal: {formatCurrency(channel.revenue / channel.leads)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Targets & Goals */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-orange-400 mr-2" />
            Goals & Target Progress
          </h3>
          <div className="space-y-4">
            {businessData.upcomingTargets.map((target, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{target.target}</h4>
                  <span className="text-slate-400 text-sm">Due: {target.deadline}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-slate-600/50 rounded-full h-3">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 bg-gradient-to-r ${getProgressColor(target.current, target.goal)}`}
                      style={{ width: `${Math.min(100, (target.current / target.goal) * 100)}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium text-sm">
                    {typeof target.current === 'number' && target.current > 1000 
                      ? formatCurrency(target.current) 
                      : target.current.toString()
                    } / {typeof target.goal === 'number' && target.goal > 1000 
                      ? formatCurrency(target.goal) 
                      : target.goal.toString()
                    }
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Revenue Trend Visualization */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Calendar className="w-5 h-5 text-cyan-400 mr-2" />
            Monthly Performance Trend
          </h3>
          <div className="flex items-end space-x-4 h-32">
            {businessData.monthlyBreakdown.map((month, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div 
                  className="w-full bg-gradient-to-t from-green-600 to-cyan-500 rounded-t-lg transition-all duration-300 hover:from-green-500 hover:to-cyan-400"
                  style={{ height: `${(month.revenue / 30000) * 100}%` }}
                ></div>
                <div className="mt-2 text-center">
                  <div className="text-white text-sm font-medium">{month.month}</div>
                  <div className="text-green-400 text-xs">{formatCurrency(month.revenue)}</div>
                  <div className="text-slate-400 text-xs">{month.leads} leads</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}