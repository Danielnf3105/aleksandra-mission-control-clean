// Strategic Planning Center - Strategic Planning & Mission Coordination
import { useState, useEffect } from 'react';
import { Target, Map, Calendar, TrendingUp, Brain, Compass, Flag, Trophy, ChevronRight, Star, Zap, Users } from 'lucide-react';

export default function StrategicPlanningCenter() {
  const [strategyData, setStrategyData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    missionOverview: {
      primaryMission: 'Build Comprehensive AI-Powered Mission Control',
      phase: 'Execution',
      completion: 87.4,
      timeline: '2026 Q1',
      status: 'ON_TRACK',
      lastUpdate: '2026-03-17',
      keyMetrics: {
        componentsBuilt: 10,
        deploymentSuccess: 100,
        systemHealth: 96.7,
        userEngagement: 89.3
      }
    },
    strategicGoals: [
      {
        id: 'goal-1',
        title: 'Complete Mission Control Suite',
        category: 'Product Development',
        priority: 'CRITICAL',
        progress: 87.4,
        deadline: '2026-03-31',
        owner: 'Aleksandra',
        status: 'IN_PROGRESS',
        keyResults: [
          { name: '10+ Intelligence Centers', current: 10, target: 12, unit: 'centers' },
          { name: 'Real-time Data Integration', current: 95.2, target: 100, unit: '%' },
          { name: 'Performance Optimization', current: 96.7, target: 98, unit: '%' },
          { name: 'User Experience Score', current: 89.3, target: 95, unit: '%' }
        ]
      },
      {
        id: 'goal-2',
        title: 'Scale Infrastructure Operations',
        category: 'Infrastructure',
        priority: 'HIGH',
        progress: 73.8,
        deadline: '2026-04-15',
        owner: 'DevOps Team',
        status: 'IN_PROGRESS',
        keyResults: [
          { name: 'Server Capacity', current: 8, target: 15, unit: 'servers' },
          { name: 'Cost Optimization', current: 659, target: 500, unit: '$' },
          { name: 'Uptime Target', current: 99.94, target: 99.99, unit: '%' },
          { name: 'Response Time', current: 145, target: 100, unit: 'ms' }
        ]
      },
      {
        id: 'goal-3',
        title: 'Expand AI Agent Capabilities',
        category: 'AI Development',
        priority: 'HIGH',
        progress: 68.5,
        deadline: '2026-05-01',
        owner: 'AI Research Team',
        status: 'IN_PROGRESS',
        keyResults: [
          { name: 'Active AI Agents', current: 5, target: 15, unit: 'agents' },
          { name: 'Task Automation', current: 67.3, target: 85, unit: '%' },
          { name: 'Decision Accuracy', current: 94.7, target: 98, unit: '%' },
          { name: 'Learning Rate', current: 2.3, target: 4.0, unit: 'cycles/day' }
        ]
      },
      {
        id: 'goal-4',
        title: 'Revenue Growth & Optimization',
        category: 'Business',
        priority: 'HIGH',
        progress: 78.2,
        deadline: '2026-06-30',
        owner: 'Business Team',
        status: 'ON_TRACK',
        keyResults: [
          { name: 'Monthly Revenue', current: 24680, target: 50000, unit: '$' },
          { name: 'Client Acquisition', current: 12, target: 25, unit: 'clients' },
          { name: 'ROI Improvement', current: 234, target: 400, unit: '%' },
          { name: 'Market Share', current: 2.1, target: 5.0, unit: '%' }
        ]
      }
    ],
    roadmapMilestones: [
      {
        quarter: 'Q1 2026',
        title: 'Mission Control Foundation',
        status: 'ACTIVE',
        progress: 87.4,
        initiatives: [
          { name: 'Core Intelligence Centers', status: 'COMPLETED', progress: 100 },
          { name: 'Real-time Data Streams', status: 'IN_PROGRESS', progress: 95 },
          { name: 'Security Implementation', status: 'COMPLETED', progress: 100 },
          { name: 'Performance Optimization', status: 'IN_PROGRESS', progress: 84 }
        ]
      },
      {
        quarter: 'Q2 2026',
        title: 'Advanced Analytics & AI',
        status: 'PLANNED',
        progress: 23.7,
        initiatives: [
          { name: 'Predictive Analytics', status: 'PLANNING', progress: 15 },
          { name: 'ML Model Training', status: 'RESEARCH', progress: 8 },
          { name: 'Natural Language Processing', status: 'PLANNING', progress: 45 },
          { name: 'Automated Decision Making', status: 'RESEARCH', progress: 12 }
        ]
      },
      {
        quarter: 'Q3 2026',
        title: 'Enterprise Scale & Integration',
        status: 'PLANNED',
        progress: 5.2,
        initiatives: [
          { name: 'Multi-tenant Architecture', status: 'RESEARCH', progress: 0 },
          { name: 'API Gateway', status: 'RESEARCH', progress: 12 },
          { name: 'Enterprise Security', status: 'RESEARCH', progress: 8 },
          { name: 'Global Deployment', status: 'RESEARCH', progress: 0 }
        ]
      },
      {
        quarter: 'Q4 2026',
        title: 'Innovation & Market Leadership',
        status: 'CONCEPT',
        progress: 0,
        initiatives: [
          { name: 'Next-Gen AI Features', status: 'CONCEPT', progress: 0 },
          { name: 'Strategic Partnerships', status: 'CONCEPT', progress: 0 },
          { name: 'Market Expansion', status: 'CONCEPT', progress: 0 },
          { name: 'Innovation Lab', status: 'CONCEPT', progress: 0 }
        ]
      }
    ],
    riskAssessment: [
      {
        category: 'Technical',
        risk: 'Infrastructure scaling challenges',
        impact: 'HIGH',
        probability: 'MEDIUM',
        mitigation: 'Implement auto-scaling and load balancing',
        owner: 'DevOps Team',
        status: 'MONITORING'
      },
      {
        category: 'Business',
        risk: 'Market competition intensification',
        impact: 'MEDIUM',
        probability: 'HIGH',
        mitigation: 'Focus on unique AI capabilities and faster innovation',
        owner: 'Strategy Team',
        status: 'ACTIVE'
      },
      {
        category: 'Resource',
        risk: 'Talent acquisition for specialized roles',
        impact: 'MEDIUM',
        probability: 'MEDIUM',
        mitigation: 'Partner with universities and AI communities',
        owner: 'HR Team',
        status: 'PLANNING'
      },
      {
        category: 'Technology',
        risk: 'Rapid AI technology obsolescence',
        impact: 'HIGH',
        probability: 'LOW',
        mitigation: 'Maintain research focus and flexible architecture',
        owner: 'CTO',
        status: 'MONITORING'
      }
    ],
    strategicInitiatives: [
      {
        name: 'AI-First Architecture Evolution',
        phase: 'Execution',
        budget: 150000,
        spent: 87600,
        roi: 234.7,
        timeline: '6 months',
        team: 'Engineering',
        impact: 'Transform all systems to AI-native architecture'
      },
      {
        name: 'Real-time Intelligence Platform',
        phase: 'Development',
        budget: 200000,
        spent: 124300,
        roi: 189.4,
        timeline: '8 months',
        team: 'Data Science',
        impact: 'Enable instant decision-making across all operations'
      },
      {
        name: 'Automated Business Operations',
        phase: 'Planning',
        budget: 120000,
        spent: 23400,
        roi: 145.2,
        timeline: '5 months',
        team: 'Business Intelligence',
        impact: 'Reduce manual tasks by 80% through intelligent automation'
      }
    ],
    competitiveAnalysis: {
      marketPosition: 'Emerging Leader',
      competitiveAdvantages: [
        'Real-time AI integration',
        'Comprehensive intelligence suite',
        'Rapid deployment capability',
        'Unified command interface'
      ],
      keyCompetitors: [
        { name: 'Traditional BI Platforms', strength: 'Established market', weakness: 'Legacy architecture', threat: 'LOW' },
        { name: 'AI-Only Solutions', strength: 'Specialized AI', weakness: 'Limited integration', threat: 'MEDIUM' },
        { name: 'Enterprise Dashboards', strength: 'Enterprise features', weakness: 'Slow innovation', threat: 'MEDIUM' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStrategyData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        missionOverview: {
          ...prev.missionOverview,
          completion: Math.max(85, Math.min(95, prev.missionOverview.completion + (Math.random() - 0.4) * 0.5)),
          keyMetrics: {
            ...prev.missionOverview.keyMetrics,
            systemHealth: Math.max(94, Math.min(99, prev.missionOverview.keyMetrics.systemHealth + (Math.random() - 0.5) * 1))
          }
        }
      }));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'COMPLETED':
      case 'ON_TRACK':
      case 'ACTIVE':
        return 'text-green-400 bg-green-400/20';
      case 'IN_PROGRESS':
      case 'PLANNING':
        return 'text-blue-400 bg-blue-400/20';
      case 'DELAYED':
      case 'AT_RISK':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'BLOCKED':
      case 'CRITICAL':
        return 'text-red-400 bg-red-400/20';
      case 'CONCEPT':
      case 'RESEARCH':
        return 'text-purple-400 bg-purple-400/20';
      case 'PLANNED':
        return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getRiskColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="h-full bg-gradient-to-br from-violet-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-violet-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl">
              <Compass className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Strategic Planning Center</h1>
              <p className="text-violet-300">Mission coordination, strategic goals & long-term planning</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-violet-400">{strategyData.currentTime}</div>
            <div className="text-violet-300">Strategy Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Mission Overview */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-violet-400 mr-2" />
            Primary Mission Status
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-white mb-2">{strategyData.missionOverview.primaryMission}</h4>
                <div className="flex items-center space-x-4 mb-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(strategyData.missionOverview.status)}`}>
                    {strategyData.missionOverview.status}
                  </span>
                  <span className="text-violet-300 text-sm">Phase: {strategyData.missionOverview.phase}</span>
                  <span className="text-violet-300 text-sm">Timeline: {strategyData.missionOverview.timeline}</span>
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-sm">Mission Progress</span>
                    <span className="text-white font-medium">{strategyData.missionOverview.completion.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full transition-all duration-500"
                      style={{ width: `${strategyData.missionOverview.completion}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white text-sm mb-3">Key Performance Indicators</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-400">{strategyData.missionOverview.keyMetrics.componentsBuilt}</div>
                  <div className="text-slate-400 text-xs">Centers Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{strategyData.missionOverview.keyMetrics.deploymentSuccess}%</div>
                  <div className="text-slate-400 text-xs">Deploy Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">{strategyData.missionOverview.keyMetrics.systemHealth.toFixed(1)}%</div>
                  <div className="text-slate-400 text-xs">System Health</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">{strategyData.missionOverview.keyMetrics.userEngagement.toFixed(1)}%</div>
                  <div className="text-slate-400 text-xs">Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Goals */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Flag className="w-5 h-5 text-orange-400 mr-2" />
            Strategic Goals & Key Results
          </h3>
          <div className="space-y-4">
            {strategyData.strategicGoals.map((goal, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-white">{goal.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(goal.priority)}`}>
                      {goal.priority}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                      {goal.status}
                    </span>
                  </div>
                  <span className="text-slate-400 text-sm">{goal.deadline}</span>
                </div>
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-sm">Overall Progress</span>
                    <span className="text-white font-medium text-sm">{goal.progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-600/50 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        goal.progress >= 80 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        goal.progress >= 60 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                        goal.progress >= 40 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                        'bg-gradient-to-r from-red-500 to-orange-500'
                      }`}
                      style={{ width: `${goal.progress}%` }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {goal.keyResults.map((result, rIndex) => (
                    <div key={rIndex} className="bg-slate-600/30 rounded p-2">
                      <div className="text-white text-xs font-medium mb-1">{result.name}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-violet-400 text-sm font-bold">{result.current}</span>
                        <span className="text-slate-400 text-xs">/{result.target} {result.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-slate-400 mt-2">
                  <span>Category: {goal.category}</span>
                  <span>Owner: {goal.owner}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap & Risk Assessment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Map className="w-5 h-5 text-blue-400 mr-2" />
              Strategic Roadmap
            </h3>
            <div className="space-y-4">
              {strategyData.roadmapMilestones.map((milestone, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-white text-sm">{milestone.quarter}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(milestone.status)}`}>
                        {milestone.status}
                      </span>
                    </div>
                    <span className="text-white text-sm">{milestone.progress.toFixed(1)}%</span>
                  </div>
                  <div className="text-slate-300 text-sm mb-3">{milestone.title}</div>
                  <div className="space-y-2">
                    {milestone.initiatives.map((initiative, iIndex) => (
                      <div key={iIndex} className="flex items-center justify-between bg-slate-600/30 rounded p-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-300 text-xs">{initiative.name}</span>
                          <span className={`px-1 py-0.5 rounded text-xs ${getStatusColor(initiative.status)}`}>
                            {initiative.status}
                          </span>
                        </div>
                        <span className="text-white text-xs">{initiative.progress}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-2" />
              Risk Assessment
            </h3>
            <div className="space-y-3">
              {strategyData.riskAssessment.map((risk, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{risk.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(risk.impact)}`}>
                        {risk.impact}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(risk.probability)}`}>
                        {risk.probability}
                      </span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(risk.status)}`}>
                      {risk.status}
                    </span>
                  </div>
                  <div className="text-slate-300 text-sm mb-1">{risk.risk}</div>
                  <div className="text-cyan-400 text-xs mb-1">Mitigation: {risk.mitigation}</div>
                  <div className="text-slate-400 text-xs">Owner: {risk.owner}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Initiatives & Competitive Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-purple-400 mr-2" />
              Strategic Initiatives
            </h3>
            <div className="space-y-3">
              {strategyData.strategicInitiatives.map((initiative, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white text-sm">{initiative.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(initiative.phase)}`}>
                      {initiative.phase}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <div className="text-green-400 font-medium text-sm">{formatCurrency(initiative.budget)}</div>
                      <div className="text-slate-400 text-xs">Budget</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-medium text-sm">{formatCurrency(initiative.spent)}</div>
                      <div className="text-slate-400 text-xs">Spent</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 font-medium text-sm">{initiative.roi.toFixed(1)}%</div>
                      <div className="text-slate-400 text-xs">ROI</div>
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs mb-2">{initiative.impact}</div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Timeline: {initiative.timeline}</span>
                    <span>Team: {initiative.team}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-violet-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Trophy className="w-5 h-5 text-gold-400 mr-2" />
              Competitive Analysis
            </h3>
            <div className="mb-4">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-gold-400">{strategyData.competitiveAnalysis.marketPosition}</div>
                <div className="text-slate-400 text-sm">Market Position</div>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-white text-sm mb-2">Competitive Advantages</h4>
                <div className="space-y-1">
                  {strategyData.competitiveAnalysis.competitiveAdvantages.map((advantage, index) => (
                    <div key={index} className="flex items-center text-green-400 text-sm">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {advantage}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white text-sm mb-3">Key Competitors</h4>
              <div className="space-y-2">
                {strategyData.competitiveAnalysis.keyCompetitors.map((competitor, index) => (
                  <div key={index} className="bg-slate-700/30 rounded p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-medium text-sm">{competitor.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskColor(competitor.threat)}`}>
                        {competitor.threat}
                      </span>
                    </div>
                    <div className="text-xs text-slate-400">
                      <div>Strength: {competitor.strength}</div>
                      <div>Weakness: {competitor.weakness}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}