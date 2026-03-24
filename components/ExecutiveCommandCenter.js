// Executive Command Center - 2026 C-Suite Analytics & Business Intelligence
// Inspired by conversational analytics, contextual insights, automated monitoring, unified organizational view
import { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, Users, Target, Zap,
  BarChart3, PieChart, LineChart, ArrowUpRight, ArrowDownRight,
  Brain, MessageCircle, Bell, Eye, Settings, Calendar,
  Globe, Building, Briefcase, ChevronRight, AlertCircle,
  CheckCircle, Clock, Activity, Search, Filter, Maximize2
} from 'lucide-react';

export default function ExecutiveCommandCenter() {
  const [executiveMetrics, setExecutiveMetrics] = useState({
    revenue: {
      current: 2847392,
      target: 3000000,
      growth: 12.7,
      forecast: 3156789,
      quarter: 'Q1 2026'
    },
    profitability: {
      grossMargin: 67.8,
      netMargin: 23.4,
      ebitda: 1967452,
      burnRate: 234567,
      runway: 18.2
    },
    operations: {
      customerAcquisition: 1247,
      churnRate: 2.3,
      nps: 67,
      employeeCount: 156,
      utilization: 84.7
    },
    strategic: {
      marketShare: 8.9,
      competitorGap: 2.3,
      innovationIndex: 7.8,
      riskScore: 3.2,
      complianceScore: 94.7
    }
  });

  const [conversationalInsights, setConversationalInsights] = useState([
    {
      id: 1,
      question: "What's driving our revenue growth this quarter?",
      answer: "Revenue growth of 12.7% is primarily driven by enterprise client expansion (+34%) and improved pricing strategy. New product launches contributed $340K additional revenue.",
      context: "Based on CRM data, billing analytics, and product metrics",
      confidence: 94,
      timestamp: "2 minutes ago",
      category: "revenue"
    },
    {
      id: 2,
      question: "Are we on track to meet our hiring goals?",
      answer: "We're 67% to target with 156 employees vs 180 goal. Engineering and Sales teams need 15 more hires. Current pipeline shows 23 candidates in final rounds.",
      context: "HR analytics and recruiting pipeline data",
      confidence: 89,
      timestamp: "5 minutes ago",
      category: "operations"
    },
    {
      id: 3,
      question: "What are the biggest risks to Q1 targets?",
      answer: "Top risks: Enterprise deal slippage (35% probability), competitor pricing pressure (28%), supply chain delays (22%). Risk mitigation plans active for all.",
      context: "Risk management system and predictive analytics",
      confidence: 91,
      timestamp: "8 minutes ago",
      category: "strategic"
    }
  ]);

  const [businessIntelligence, setBusinessIntelligence] = useState({
    customerSegments: {
      enterprise: { count: 34, revenue: 1200000, growth: 23.4 },
      midmarket: { count: 127, revenue: 890000, growth: 15.7 },
      startup: { count: 445, revenue: 567000, growth: 8.9 }
    },
    productPerformance: {
      coreProduct: { revenue: 1800000, margin: 72.3, adoption: 89.4 },
      newFeatures: { revenue: 340000, margin: 45.6, adoption: 34.7 },
      services: { revenue: 567000, margin: 55.2, adoption: 67.8 }
    },
    marketAnalysis: {
      totalAddressable: 15000000000,
      serviceable: 3400000000,
      penetration: 2.1,
      growthRate: 24.7,
      competitorShare: 67.8
    }
  });

  const [proactiveAlerts, setProactiveAlerts] = useState([
    {
      id: 'alert-exec-001',
      priority: 'HIGH',
      category: 'Revenue',
      title: 'Q1 Revenue Target at Risk',
      description: 'Current trajectory shows 94% of target achievement. $180K gap identified.',
      impact: '$180,000 revenue shortfall',
      recommendation: 'Accelerate 3 enterprise deals in pipeline, implement flash promotion',
      timeRemaining: '23 days to quarter end',
      confidence: 87,
      automated: true
    },
    {
      id: 'alert-exec-002',
      priority: 'MEDIUM',
      category: 'Operations',
      title: 'Customer Support Capacity Alert',
      description: 'Support ticket volume increased 34% while resolution time degraded 12%',
      impact: 'NPS risk, potential churn increase',
      recommendation: 'Deploy 2 additional support agents, implement AI triage system',
      timeRemaining: 'Immediate action needed',
      confidence: 92,
      automated: true
    },
    {
      id: 'alert-exec-003',
      priority: 'LOW',
      category: 'Strategic',
      title: 'Competitor Analysis Update',
      description: 'Competitor X raised $50M Series B, launching competitive features Q2',
      impact: 'Market positioning, competitive pressure',
      recommendation: 'Update product roadmap, consider strategic partnership',
      timeRemaining: '60 days estimated impact',
      confidence: 73,
      automated: false
    }
  ]);

  const [kpiDashboard, setKpiDashboard] = useState({
    financial: [
      { name: 'ARR', value: '8.7M', change: 23.4, target: '10M', status: 'on-track' },
      { name: 'MRR', value: '725K', change: 12.7, target: '833K', status: 'at-risk' },
      { name: 'CAC', value: '$1,240', change: -8.9, target: '$1,000', status: 'good' },
      { name: 'LTV', value: '$15,670', change: 15.3, target: '$18,000', status: 'on-track' }
    ],
    operational: [
      { name: 'Active Users', value: '45.2K', change: 18.7, target: '50K', status: 'on-track' },
      { name: 'Support Tickets', value: '234', change: 34.2, target: '<200', status: 'at-risk' },
      { name: 'Uptime', value: '99.94%', change: 0.12, target: '99.9%', status: 'good' },
      { name: 'Feature Adoption', value: '67.8%', change: 12.4, target: '70%', status: 'on-track' }
    ],
    strategic: [
      { name: 'Market Share', value: '8.9%', change: 1.2, target: '12%', status: 'on-track' },
      { name: 'Employee NPS', value: '78', change: 5.6, target: '80', status: 'on-track' },
      { name: 'R&D Investment', value: '23.4%', change: 2.1, target: '25%', status: 'good' },
      { name: 'Innovation Index', value: '7.8', change: 0.9, target: '8.5', status: 'on-track' }
    ]
  });

  useEffect(() => {
    // Executive-level real-time updates
    const interval = setInterval(() => {
      // Update executive metrics
      setExecutiveMetrics(prev => ({
        ...prev,
        revenue: {
          ...prev.revenue,
          current: prev.revenue.current + Math.floor(Math.random() * 5000),
          growth: Math.max(8, Math.min(18, prev.revenue.growth + (Math.random() - 0.5) * 0.5))
        },
        profitability: {
          ...prev.profitability,
          grossMargin: Math.max(60, Math.min(75, prev.profitability.grossMargin + (Math.random() - 0.5) * 1)),
          netMargin: Math.max(18, Math.min(30, prev.profitability.netMargin + (Math.random() - 0.5) * 0.8))
        },
        operations: {
          ...prev.operations,
          customerAcquisition: prev.operations.customerAcquisition + Math.floor(Math.random() * 3),
          nps: Math.max(50, Math.min(80, prev.operations.nps + (Math.random() - 0.5) * 2))
        }
      }));

      // Update KPI dashboard
      setKpiDashboard(prev => ({
        ...prev,
        financial: prev.financial.map(kpi => ({
          ...kpi,
          change: kpi.change + (Math.random() - 0.5) * 0.8
        }))
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'HIGH': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'LOW': return 'text-green-400 bg-green-900/20 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'good': return 'text-green-400';
      case 'on-track': return 'text-blue-400';
      case 'at-risk': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getChangeColor = (change) => change >= 0 ? 'text-green-400' : 'text-red-400';
  const getChangeIcon = (change) => change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'revenue': return <DollarSign className="w-4 h-4" />;
      case 'operations': return <Users className="w-4 h-4" />;
      case 'strategic': return <Target className="w-4 h-4" />;
      default: return <Activity className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Executive Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-blue-400 flex items-center">
            <Briefcase className="w-8 h-8 mr-3" />
            Executive Command Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Brain className="w-4 h-4 mr-2" />
              <span>AI-Powered Business Intelligence</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{executiveMetrics.revenue.quarter}</span>
            </div>
            <div>Last Update: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Conversational analytics, automated monitoring & unified organizational insights for C-suite decision making</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main Executive Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Executive KPI Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 mr-2" />
              Executive KPI Dashboard
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              {/* Revenue */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Q1 Revenue</span>
                  <DollarSign className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  ${(executiveMetrics.revenue.current / 1000000).toFixed(1)}M
                </div>
                <div className="flex items-center text-sm">
                  {getChangeIcon(executiveMetrics.revenue.growth)}
                  <span className={getChangeColor(executiveMetrics.revenue.growth)}>
                    {executiveMetrics.revenue.growth.toFixed(1)}% vs target
                  </span>
                </div>
              </div>
              
              {/* Gross Margin */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Gross Margin</span>
                  <PieChart className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {executiveMetrics.profitability.grossMargin.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">
                  Net: {executiveMetrics.profitability.netMargin.toFixed(1)}%
                </div>
              </div>
              
              {/* Customer Acquisition */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">New Customers</span>
                  <Users className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {executiveMetrics.operations.customerAcquisition.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">
                  NPS: {executiveMetrics.operations.nps}
                </div>
              </div>
              
              {/* Market Position */}
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Market Share</span>
                  <Target className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-2xl font-bold text-cyan-400">
                  {executiveMetrics.strategic.marketShare.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">
                  Innovation: {executiveMetrics.strategic.innovationIndex}/10
                </div>
              </div>
            </div>

            {/* Detailed KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(kpiDashboard).map(([category, kpis]) => (
                <div key={category} className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white capitalize mb-3">{category} KPIs</h3>
                  <div className="space-y-3">
                    {kpis.map((kpi, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-300">{kpi.name}</div>
                          <div className="text-lg font-bold text-white">{kpi.value}</div>
                        </div>
                        <div className="text-right">
                          <div className={`text-sm font-medium ${getStatusColor(kpi.status)}`}>
                            {kpi.status.replace('-', ' ').toUpperCase()}
                          </div>
                          <div className={`text-sm flex items-center ${getChangeColor(kpi.change)}`}>
                            {getChangeIcon(kpi.change)}
                            <span className="ml-1">{kpi.change.toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversational Analytics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Conversational Business Intelligence
            </h2>
            
            <div className="space-y-4">
              {conversationalInsights.map((insight) => (
                <div key={insight.id} className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      {getCategoryIcon(insight.category)}
                      <span className="ml-2 font-semibold text-white text-sm">
                        "{insight.question}"
                      </span>
                    </div>
                    <div className="flex items-center text-xs text-gray-400">
                      <span className="mr-2">{insight.confidence}% confidence</span>
                      <span>{insight.timestamp}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-300 mb-2 pl-6">
                    {insight.answer}
                  </div>
                  
                  <div className="text-xs text-gray-500 pl-6">
                    Context: {insight.context}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Natural Language Query Interface */}
            <div className="mt-4 p-4 bg-gray-800 rounded-lg border-2 border-dashed border-gray-600">
              <div className="flex items-center text-gray-400">
                <Search className="w-5 h-5 mr-3" />
                <span className="text-sm">Ask me anything about business performance...</span>
              </div>
              <div className="mt-2 text-xs text-gray-500">
                Example: "What's our customer acquisition cost trend?" or "Show me Q1 pipeline status"
              </div>
            </div>
          </div>
        </div>

        {/* Executive Control Panel */}
        <div className="space-y-4">
          
          {/* Proactive Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Proactive Alerts
            </h2>
            
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {proactiveAlerts.map((alert) => (
                <div key={alert.id} className={`border rounded p-3 ${getPriorityColor(alert.priority)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.title}</span>
                    <div className="flex items-center space-x-2">
                      {alert.automated && <Brain className="w-3 h-3 text-purple-400" />}
                      <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                        {alert.priority}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="text-xs text-blue-400 mb-2">
                    <strong>Impact:</strong> {alert.impact}
                  </div>
                  <div className="text-xs text-green-400 mb-2">
                    <strong>Action:</strong> {alert.recommendation}
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{alert.timeRemaining}</span>
                    <span>{alert.confidence}% confidence</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Intelligence Summary */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <LineChart className="w-5 h-5 mr-2" />
              Business Intelligence
            </h2>
            
            <div className="space-y-4">
              {/* Customer Segments */}
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Customer Segments</div>
                {Object.entries(businessIntelligence.customerSegments).map(([segment, data]) => (
                  <div key={segment} className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400 capitalize">{segment}:</span>
                    <span className="text-white">{data.count} (${(data.revenue/1000).toFixed(0)}K)</span>
                  </div>
                ))}
              </div>
              
              {/* Market Analysis */}
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Market Position</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">TAM:</span>
                    <span className="text-white">${(businessIntelligence.marketAnalysis.totalAddressable/1000000000).toFixed(1)}B</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Growth:</span>
                    <span className="text-green-400">{businessIntelligence.marketAnalysis.growthRate.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Penetration:</span>
                    <span className="text-white">{businessIntelligence.marketAnalysis.penetration.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-gray-800 p-3 rounded">
                <div className="text-sm font-semibold text-white mb-2">Quick Actions</div>
                <div className="space-y-2">
                  <button className="w-full text-left text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2" />
                    View detailed financials
                  </button>
                  <button className="w-full text-left text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2" />
                    Schedule board meeting
                  </button>
                  <button className="w-full text-left text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2" />
                    Export executive summary
                  </button>
                  <button className="w-full text-left text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center">
                    <ChevronRight className="w-3 h-3 mr-2" />
                    Competitive analysis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}