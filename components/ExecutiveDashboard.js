// Executive Dashboard - High-level insights and strategic mission overview
import { useState, useEffect } from 'react';
import { TrendingUp, Target, DollarSign, Shield, Zap, Users, Clock, Award, BarChart3, AlertCircle, CheckCircle, Star } from 'lucide-react';

export default function ExecutiveDashboard() {
  const [executiveData, setExecutiveData] = useState({
    missionOverview: {
      operationalStatus: 'OPTIMAL',
      missionProgress: 87.4,
      systemHealth: 96.2,
      agentEfficiency: 94.7,
      customerSatisfaction: 98.1,
      riskLevel: 'LOW',
      budgetUtilization: 73.2,
      nextMilestone: 'Q2 Content Automation Goals'
    },
    keyMetrics: [
      {
        category: 'Performance',
        value: 94.7,
        target: 95.0,
        trend: 'up',
        change: '+2.3%',
        status: 'on-track',
        icon: TrendingUp,
        color: 'green'
      },
      {
        category: 'Cost Efficiency',
        value: 92.1,
        target: 90.0,
        trend: 'up',
        change: '+5.8%',
        status: 'exceeding',
        icon: DollarSign,
        color: 'blue'
      },
      {
        category: 'Security Score',
        value: 96.8,
        target: 95.0,
        trend: 'up',
        change: '+1.2%',
        status: 'exceeding',
        icon: Shield,
        color: 'purple'
      },
      {
        category: 'Agent Productivity',
        value: 89.3,
        target: 85.0,
        trend: 'up',
        change: '+7.1%',
        status: 'exceeding',
        icon: Users,
        color: 'cyan'
      },
      {
        category: 'Response Time',
        value: 87.6,
        target: 90.0,
        trend: 'down',
        change: '-2.4%',
        status: 'attention',
        icon: Clock,
        color: 'yellow'
      },
      {
        category: 'Automation Level',
        value: 91.4,
        target: 88.0,
        trend: 'up',
        change: '+4.2%',
        status: 'exceeding',
        icon: Zap,
        color: 'orange'
      }
    ],
    strategicInsights: [
      {
        title: 'Content Processing Optimization',
        priority: 'high',
        impact: 'High ROI Expected',
        description: 'Assembly AI processing pipeline shows 23% efficiency gain potential through batch optimization.',
        recommendation: 'Implement batch processing for transcription requests to reduce costs by $8.90/day',
        timeframe: '2-3 weeks',
        expectedROI: '340%'
      },
      {
        title: 'Agent Workload Distribution',
        priority: 'medium',
        impact: 'Operational Excellence',
        description: 'Current agent utilization varies from 34% to 78%, indicating optimization opportunities.',
        recommendation: 'Implement dynamic load balancing to improve overall system efficiency',
        timeframe: '1-2 weeks',
        expectedROI: '180%'
      },
      {
        title: 'LinkedIn Outreach Scaling',
        priority: 'high',
        impact: 'Revenue Growth',
        description: 'Rate limiting constraints affecting outreach volume at 78% of daily capacity.',
        recommendation: 'Distribute requests across multiple time windows and implement smart queuing',
        timeframe: '3-5 days',
        expectedROI: '250%'
      },
      {
        title: 'Security Posture Enhancement',
        priority: 'medium',
        impact: 'Risk Mitigation',
        description: 'ISO 27001 compliance at 87.4% with 5 pending requirements.',
        recommendation: 'Address pending security controls to achieve full compliance certification',
        timeframe: '4-6 weeks',
        expectedROI: 'Risk Reduction'
      }
    ],
    performanceTrends: [
      { period: 'W1', performance: 89.2, cost: 52.1, security: 94.8, automation: 85.6 },
      { period: 'W2', performance: 91.5, cost: 48.7, security: 95.2, automation: 87.3 },
      { period: 'W3', performance: 93.1, cost: 46.8, security: 95.9, automation: 89.1 },
      { period: 'W4', performance: 94.7, cost: 43.2, security: 96.8, automation: 91.4 }
    ],
    riskAssessment: [
      {
        risk: 'API Rate Limiting',
        probability: 'Medium',
        impact: 'High',
        status: 'monitoring',
        mitigation: 'Implement intelligent request queuing',
        owner: 'Technical Team'
      },
      {
        risk: 'Cost Overrun',
        probability: 'Low',
        impact: 'Medium',
        status: 'controlled',
        mitigation: 'Automated budget monitoring and alerts',
        owner: 'Finance Team'
      },
      {
        risk: 'Security Compliance',
        probability: 'Low',
        impact: 'High',
        status: 'managed',
        mitigation: 'Regular security audits and updates',
        owner: 'Security Team'
      },
      {
        risk: 'Agent Downtime',
        probability: 'Very Low',
        impact: 'High',
        status: 'monitored',
        mitigation: 'Multi-agent redundancy and auto-recovery',
        owner: 'Operations Team'
      }
    ],
    financialSummary: {
      monthlyBudget: 1450.00,
      currentSpend: 1061.45,
      projectedSpend: 1380.20,
      savings: 89.60,
      costPerTransaction: 0.045,
      roi: 340,
      budgetVariance: -4.8
    },
    upcomingMilestones: [
      {
        milestone: 'Q2 Content Automation Goals',
        dueDate: '2026-06-30',
        progress: 67,
        status: 'on-track',
        owner: 'Content Team',
        description: 'Achieve 95% automation in content processing pipeline'
      },
      {
        milestone: 'Security Certification',
        dueDate: '2026-05-15',
        progress: 87,
        status: 'ahead',
        owner: 'Security Team',
        description: 'Complete ISO 27001 compliance certification'
      },
      {
        milestone: 'Cost Optimization Phase 2',
        dueDate: '2026-04-30',
        progress: 45,
        status: 'on-track',
        owner: 'Engineering Team',
        description: 'Implement advanced resource optimization strategies'
      },
      {
        milestone: 'Agent Fleet Expansion',
        dueDate: '2026-07-15',
        progress: 23,
        status: 'planning',
        owner: 'Product Team',
        description: 'Scale agent infrastructure to support 50% more workload'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setExecutiveData(prev => ({
        ...prev,
        missionOverview: {
          ...prev.missionOverview,
          systemHealth: Math.max(94, Math.min(99, prev.missionOverview.systemHealth + (Math.random() - 0.5) * 1)),
          agentEfficiency: Math.max(90, Math.min(98, prev.missionOverview.agentEfficiency + (Math.random() - 0.5) * 1.5))
        },
        keyMetrics: prev.keyMetrics.map(metric => ({
          ...metric,
          value: Math.max(70, Math.min(100, metric.value + (Math.random() - 0.5) * 2))
        }))
      }));
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': return 'text-green-400 bg-green-400/20 border-green-400';
      case 'GOOD': return 'text-blue-400 bg-blue-400/20 border-blue-400';
      case 'ATTENTION': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400';
      case 'on-track': return 'text-green-400';
      case 'exceeding': return 'text-blue-400';
      case 'attention': return 'text-yellow-400';
      case 'behind': return 'text-red-400';
      case 'ahead': return 'text-cyan-400';
      case 'planning': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getRiskLevel = (probability, impact) => {
    const probMap = { 'Very Low': 1, 'Low': 2, 'Medium': 3, 'High': 4, 'Very High': 5 };
    const impactMap = { 'Very Low': 1, 'Low': 2, 'Medium': 3, 'High': 4, 'Very High': 5 };
    const score = probMap[probability] * impactMap[impact];
    if (score >= 12) return { level: 'Critical', color: 'text-red-400' };
    if (score >= 8) return { level: 'High', color: 'text-orange-400' };
    if (score >= 4) return { level: 'Medium', color: 'text-yellow-400' };
    return { level: 'Low', color: 'text-green-400' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Executive Dashboard</h2>
            <p className="text-gray-400">High-level insights and strategic mission overview</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className={`text-lg font-bold px-3 py-1 rounded border ${getStatusColor(executiveData.missionOverview.operationalStatus)}`}>
              {executiveData.missionOverview.operationalStatus}
            </div>
            <div className="text-xs text-gray-400 mt-1">Mission Status</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{executiveData.missionOverview.missionProgress.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Mission Progress</div>
          </div>
        </div>
      </div>

      {/* Mission Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{executiveData.missionOverview.missionProgress.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Mission Progress</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{executiveData.missionOverview.systemHealth.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">System Health</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{executiveData.missionOverview.agentEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Agent Efficiency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{executiveData.missionOverview.customerSatisfaction.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Customer Sat.</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{executiveData.missionOverview.riskLevel}</div>
          <div className="text-xs text-gray-400">Risk Level</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{executiveData.missionOverview.budgetUtilization.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Budget Used</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center col-span-2">
          <div className="text-sm font-bold text-white">{executiveData.missionOverview.nextMilestone}</div>
          <div className="text-xs text-gray-400">Next Milestone</div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Key Performance Indicators</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {executiveData.keyMetrics.map((metric, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <metric.icon className={`w-5 h-5 text-${metric.color}-400`} />
                  <div className="text-white font-medium">{metric.category}</div>
                </div>
                <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(metric.status)}`}>
                  {metric.status.toUpperCase()}
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <div className={`text-2xl font-bold text-${metric.color}-400`}>{metric.value.toFixed(1)}%</div>
                <div className={`text-sm ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>{metric.change}</div>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Target: {metric.target}%</span>
                  <span className="text-white">Gap: {(metric.value - metric.target).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r from-${metric.color}-400 to-${metric.color}-500 h-2 rounded-full`}
                    style={{ width: `${Math.min(100, (metric.value / metric.target) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Strategic Insights */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Strategic Insights</h3>
          </div>
          <div className="space-y-4">
            {executiveData.strategicInsights.map((insight, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{insight.title}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getPriorityColor(insight.priority)}`}>
                    {insight.priority.toUpperCase()}
                  </div>
                </div>
                <div className="text-green-400 text-sm mb-2">{insight.impact}</div>
                <div className="text-gray-300 text-sm mb-2">{insight.description}</div>
                <div className="text-cyan-400 text-sm mb-2">{insight.recommendation}</div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Timeline: {insight.timeframe}</span>
                  <span className="text-yellow-400">ROI: {insight.expectedROI}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Performance Trends (4 Week)</h3>
          </div>
          
          {/* Trend Chart */}
          <div className="h-40 flex items-end space-x-4 mb-4">
            {executiveData.performanceTrends.map((period, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div 
                    className="w-6 bg-gradient-to-t from-blue-400 to-blue-500 rounded-sm"
                    style={{ height: `${(period.performance / 100) * 120}px` }}
                    title={`Performance: ${period.performance}%`}
                  ></div>
                  <div 
                    className="w-6 bg-gradient-to-t from-green-400 to-green-500 rounded-sm"
                    style={{ height: `${((100 - period.cost) / 100) * 120}px` }}
                    title={`Cost Efficiency: ${(100 - period.cost).toFixed(1)}%`}
                  ></div>
                  <div 
                    className="w-6 bg-gradient-to-t from-purple-400 to-purple-500 rounded-sm"
                    style={{ height: `${(period.security / 100) * 120}px` }}
                    title={`Security: ${period.security}%`}
                  ></div>
                  <div 
                    className="w-6 bg-gradient-to-t from-yellow-400 to-yellow-500 rounded-sm"
                    style={{ height: `${(period.automation / 100) * 120}px` }}
                    title={`Automation: ${period.automation}%`}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{period.period}</div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span className="text-gray-400">Performance</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <span className="text-gray-400">Cost Efficiency</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded"></div>
              <span className="text-gray-400">Security</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span className="text-gray-400">Automation</span>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Assessment & Financial Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Assessment */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertCircle className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-bold text-white">Risk Assessment</h3>
          </div>
          <div className="space-y-3">
            {executiveData.riskAssessment.map((risk, index) => {
              const riskLevel = getRiskLevel(risk.probability, risk.impact);
              return (
                <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white font-medium">{risk.risk}</div>
                    <div className={`text-xs px-2 py-1 rounded ${riskLevel.color} bg-opacity-20`}>
                      {riskLevel.level}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                    <div>
                      <div className="text-gray-400">Probability</div>
                      <div className="text-yellow-400">{risk.probability}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Impact</div>
                      <div className="text-orange-400">{risk.impact}</div>
                    </div>
                  </div>
                  <div className="text-cyan-400 text-sm mb-1">{risk.mitigation}</div>
                  <div className="text-xs text-gray-400">Owner: {risk.owner}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Financial Summary */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <DollarSign className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Financial Summary</h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-lg font-bold text-green-400">${executiveData.financialSummary.monthlyBudget.toFixed(2)}</div>
                <div className="text-xs text-gray-400">Monthly Budget</div>
              </div>
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-lg font-bold text-blue-400">${executiveData.financialSummary.currentSpend.toFixed(2)}</div>
                <div className="text-xs text-gray-400">Current Spend</div>
              </div>
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-lg font-bold text-yellow-400">${executiveData.financialSummary.projectedSpend.toFixed(2)}</div>
                <div className="text-xs text-gray-400">Projected Spend</div>
              </div>
              <div className="text-center p-3 bg-gray-700/30 rounded-lg">
                <div className="text-lg font-bold text-cyan-400">${executiveData.financialSummary.savings.toFixed(2)}</div>
                <div className="text-xs text-gray-400">Monthly Savings</div>
              </div>
            </div>
            
            <div className="pt-4 border-t border-gray-600/30">
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="text-purple-400 font-bold">${executiveData.financialSummary.costPerTransaction.toFixed(3)}</div>
                  <div className="text-gray-400">Cost/Transaction</div>
                </div>
                <div>
                  <div className="text-green-400 font-bold">{executiveData.financialSummary.roi}%</div>
                  <div className="text-gray-400">ROI</div>
                </div>
                <div>
                  <div className={`font-bold ${executiveData.financialSummary.budgetVariance < 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {executiveData.financialSummary.budgetVariance.toFixed(1)}%
                  </div>
                  <div className="text-gray-400">Budget Variance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Milestones */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Award className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-white">Upcoming Milestones</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {executiveData.upcomingMilestones.map((milestone, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{milestone.milestone}</div>
                <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(milestone.status)}`}>
                  {milestone.status.toUpperCase()}
                </div>
              </div>
              
              <div className="text-gray-300 text-sm mb-3">{milestone.description}</div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white font-bold">{milestone.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-cyan-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${milestone.progress}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Due: {milestone.dueDate}</span>
                  <span className="text-cyan-400">Owner: {milestone.owner}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{executiveData.missionOverview.missionProgress.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Mission Completion</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{executiveData.financialSummary.roi}%</div>
              <div className="text-sm text-gray-300">Return on Investment</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{executiveData.missionOverview.systemHealth.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">System Health Score</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}