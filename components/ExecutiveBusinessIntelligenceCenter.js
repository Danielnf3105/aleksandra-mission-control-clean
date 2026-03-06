import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart } from 'recharts';
import { TrendingUp, DollarSign, Users, Target, Award, Calendar, PieChart as PieChartIcon, BarChart3, Activity, Zap, Eye, Globe } from 'lucide-react';

const ExecutiveBusinessIntelligenceCenter = () => {
  const [executiveKPIs, setExecutiveKPIs] = useState({
    revenue: {
      current: 247500,
      growth: 23.7,
      target: 300000,
      trend: 'up'
    },
    customerAcquisition: {
      current: 1847,
      growth: 18.9,
      target: 2000,
      trend: 'up'
    },
    operationalEfficiency: {
      current: 94.2,
      growth: 8.1,
      target: 95.0,
      trend: 'up'
    },
    marketShare: {
      current: 12.7,
      growth: 4.2,
      target: 15.0,
      trend: 'up'
    },
    customerSatisfaction: {
      current: 4.6,
      growth: 2.8,
      target: 4.8,
      trend: 'up'
    },
    costOptimization: {
      current: 176800,
      growth: -12.4,
      target: 160000,
      trend: 'down'
    }
  });

  const [businessMetrics, setBusinessMetrics] = useState([
    {
      month: 'Jan',
      revenue: 195000,
      costs: 145000,
      profit: 50000,
      customers: 1420,
      efficiency: 87.2
    },
    {
      month: 'Feb',
      revenue: 218000,
      costs: 158000,
      profit: 60000,
      customers: 1590,
      efficiency: 89.1
    },
    {
      month: 'Mar',
      revenue: 235000,
      costs: 167000,
      profit: 68000,
      customers: 1720,
      efficiency: 91.8
    },
    {
      month: 'Apr',
      revenue: 242000,
      costs: 172000,
      profit: 70000,
      customers: 1780,
      efficiency: 92.4
    },
    {
      month: 'May',
      revenue: 247500,
      costs: 176800,
      profit: 70700,
      customers: 1847,
      efficiency: 94.2
    }
  ]);

  const [departmentPerformance, setDepartmentPerformance] = useState([
    {
      department: 'Marketing',
      budget: 45000,
      spent: 38200,
      roi: 287.3,
      kpiScore: 96.8,
      status: 'excellent'
    },
    {
      department: 'Sales',
      budget: 52000,
      spent: 49100,
      roi: 412.6,
      kpiScore: 94.2,
      status: 'excellent'
    },
    {
      department: 'Engineering',
      budget: 78000,
      spent: 76500,
      roi: 234.8,
      kpiScore: 91.7,
      status: 'good'
    },
    {
      department: 'Operations',
      budget: 32000,
      spent: 28900,
      roi: 156.9,
      kpiScore: 88.4,
      status: 'good'
    },
    {
      department: 'HR',
      budget: 25000,
      spent: 24100,
      roi: 89.7,
      kpiScore: 85.2,
      status: 'adequate'
    }
  ]);

  const [strategicInitiatives, setStrategicInitiatives] = useState([
    {
      id: 'INIT-001',
      name: 'AI Automation Rollout',
      progress: 78,
      budget: 150000,
      spent: 98000,
      impact: 'high',
      timeline: '2026 Q2',
      owner: 'Engineering',
      status: 'on-track'
    },
    {
      id: 'INIT-002',
      name: 'Market Expansion LATAM',
      progress: 45,
      budget: 200000,
      spent: 87000,
      impact: 'high',
      timeline: '2026 Q3',
      owner: 'Sales',
      status: 'on-track'
    },
    {
      id: 'INIT-003',
      name: 'Customer Experience Platform',
      progress: 62,
      budget: 120000,
      spent: 89000,
      impact: 'medium',
      timeline: '2026 Q2',
      owner: 'Marketing',
      status: 'at-risk'
    },
    {
      id: 'INIT-004',
      name: 'Operational Efficiency Program',
      progress: 89,
      budget: 85000,
      spent: 71000,
      impact: 'medium',
      timeline: '2026 Q1',
      owner: 'Operations',
      status: 'ahead'
    }
  ]);

  const [competitiveIntelligence, setCompetitiveIntelligence] = useState({
    marketPosition: 3,
    competitorCount: 8,
    marketGrowthRate: 24.8,
    threatLevel: 'medium',
    opportunities: [
      {
        area: 'AI Integration',
        potential: 'high',
        timeframe: '6 months'
      },
      {
        area: 'Enterprise Partnerships',
        potential: 'high', 
        timeframe: '3 months'
      },
      {
        area: 'Mobile Platform',
        potential: 'medium',
        timeframe: '12 months'
      }
    ]
  });

  const [executiveAlerts, setExecutiveAlerts] = useState([
    {
      id: 'ALERT-001',
      type: 'opportunity',
      priority: 'high',
      message: 'New enterprise client interested in 6-figure deal',
      department: 'Sales',
      timestamp: new Date(),
      impact: 'revenue'
    },
    {
      id: 'ALERT-002',
      type: 'risk',
      priority: 'medium',
      message: 'Customer Experience Platform initiative falling behind',
      department: 'Marketing',
      timestamp: new Date(Date.now() - 300000),
      impact: 'timeline'
    },
    {
      id: 'ALERT-003',
      type: 'achievement',
      priority: 'low',
      message: 'Operational Efficiency Program exceeded targets by 12%',
      department: 'Operations',
      timestamp: new Date(Date.now() - 600000),
      impact: 'cost'
    }
  ]);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update KPIs with realistic business fluctuations
      setExecutiveKPIs(prev => ({
        ...prev,
        revenue: {
          ...prev.revenue,
          current: Math.max(200000, Math.min(300000, prev.revenue.current + (Math.random() - 0.3) * 1000)),
          growth: Math.max(15, Math.min(30, prev.revenue.growth + (Math.random() - 0.5) * 0.5))
        },
        customerAcquisition: {
          ...prev.customerAcquisition,
          current: Math.max(1500, Math.min(2200, prev.customerAcquisition.current + Math.floor((Math.random() - 0.3) * 10)))
        },
        operationalEfficiency: {
          ...prev.operationalEfficiency,
          current: Math.max(85, Math.min(98, prev.operationalEfficiency.current + (Math.random() - 0.5) * 0.5))
        }
      }));

      // Update department performance
      setDepartmentPerformance(prev => prev.map(dept => ({
        ...dept,
        roi: Math.max(50, Math.min(500, dept.roi + (Math.random() - 0.5) * 10)),
        kpiScore: Math.max(75, Math.min(100, dept.kpiScore + (Math.random() - 0.5) * 2))
      })));

      // Update strategic initiative progress
      setStrategicInitiatives(prev => prev.map(init => {
        if (init.progress < 100 && Math.random() > 0.7) {
          const progressIncrease = Math.random() * 2;
          return {
            ...init,
            progress: Math.min(100, init.progress + progressIncrease),
            spent: Math.min(init.budget, init.spent + Math.random() * 1000)
          };
        }
        return init;
      }));

      // Occasionally add new executive alerts
      if (Math.random() > 0.95) {
        const alertTypes = ['opportunity', 'risk', 'achievement', 'milestone'];
        const priorities = ['high', 'medium', 'low'];
        const departments = ['Sales', 'Marketing', 'Engineering', 'Operations', 'Finance'];
        
        const newAlert = {
          id: `ALERT-${Date.now()}`,
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          priority: priorities[Math.floor(Math.random() * priorities.length)],
          message: 'Real-time business intelligence alert',
          department: departments[Math.floor(Math.random() * departments.length)],
          timestamp: new Date(),
          impact: ['revenue', 'cost', 'timeline', 'efficiency'][Math.floor(Math.random() * 4)]
        };
        
        setExecutiveAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getKPITrendColor = (trend, growth) => {
    if (trend === 'up' && growth > 0) return '#10B981';
    if (trend === 'down' && growth < 0) return '#10B981'; // Cost reduction is good
    if (Math.abs(growth) < 2) return '#F59E0B';
    return '#EF4444';
  };

  const getDepartmentStatusColor = (status) => {
    switch (status) {
      case 'excellent': return '#10B981';
      case 'good': return '#3B82F6';
      case 'adequate': return '#F59E0B';
      case 'poor': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getInitiativeStatusColor = (status) => {
    switch (status) {
      case 'ahead': return '#10B981';
      case 'on-track': return '#3B82F6';
      case 'at-risk': return '#F59E0B';
      case 'delayed': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getAlertTypeColor = (type) => {
    switch (type) {
      case 'opportunity': return '#10B981';
      case 'achievement': return '#3B82F6';
      case 'risk': return '#F59E0B';
      case 'critical': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const revenueBreakdown = [
    { name: 'Product Sales', value: 156000, color: '#3B82F6' },
    { name: 'Services', value: 62400, color: '#10B981' },
    { name: 'Subscriptions', value: 29100, color: '#8B5CF6' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <PieChartIcon className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">EXECUTIVE BUSINESS INTELLIGENCE CENTER</h1>
            <p className="text-gray-400">Real-time analytics, executive reporting, and strategic business insights for data-driven decisions</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">${(executiveKPIs.revenue.current / 1000).toFixed(0)}K</div>
            <div className="text-xs text-gray-400">REVENUE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{executiveKPIs.customerAcquisition.current}</div>
            <div className="text-xs text-gray-400">CUSTOMERS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{executiveKPIs.operationalEfficiency.current.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">EFFICIENCY</div>
          </div>
        </div>
      </div>

      {/* Executive KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">REVENUE</span>
          </div>
          <div className="text-xl font-bold text-white">${(executiveKPIs.revenue.current / 1000).toFixed(0)}K</div>
          <div className="flex items-center text-xs">
            <TrendingUp className="w-3 h-3 mr-1" style={{color: getKPITrendColor(executiveKPIs.revenue.trend, executiveKPIs.revenue.growth)}} />
            <span style={{color: getKPITrendColor(executiveKPIs.revenue.trend, executiveKPIs.revenue.growth)}}>
              {executiveKPIs.revenue.growth > 0 ? '+' : ''}{executiveKPIs.revenue.growth.toFixed(1)}%
            </span>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">CUSTOMERS</span>
          </div>
          <div className="text-xl font-bold text-white">{executiveKPIs.customerAcquisition.current.toLocaleString()}</div>
          <div className="flex items-center text-xs">
            <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400">+{executiveKPIs.customerAcquisition.growth.toFixed(1)}%</span>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">EFFICIENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{executiveKPIs.operationalEfficiency.current.toFixed(1)}%</div>
          <div className="flex items-center text-xs">
            <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400">+{executiveKPIs.operationalEfficiency.growth.toFixed(1)}%</span>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">MARKET SHARE</span>
          </div>
          <div className="text-xl font-bold text-white">{executiveKPIs.marketShare.current.toFixed(1)}%</div>
          <div className="flex items-center text-xs">
            <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400">+{executiveKPIs.marketShare.growth.toFixed(1)}%</span>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">SATISFACTION</span>
          </div>
          <div className="text-xl font-bold text-white">{executiveKPIs.customerSatisfaction.current.toFixed(1)}/5</div>
          <div className="flex items-center text-xs">
            <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400">+{executiveKPIs.customerSatisfaction.growth.toFixed(1)}%</span>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">COSTS</span>
          </div>
          <div className="text-xl font-bold text-white">${(executiveKPIs.costOptimization.current / 1000).toFixed(0)}K</div>
          <div className="flex items-center text-xs">
            <TrendingUp className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400">{executiveKPIs.costOptimization.growth.toFixed(1)}%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Department Performance */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <BarChart3 className="w-5 h-5 mr-2 text-blue-400" />
            DEPARTMENT PERFORMANCE
          </h3>
          <div className="space-y-3">
            {departmentPerformance.map((dept, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getDepartmentStatusColor(dept.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{dept.department}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getDepartmentStatusColor(dept.status)}20`, 
                    color: getDepartmentStatusColor(dept.status) 
                  }}>
                    {dept.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Budget</span>
                    <span className="text-white">${(dept.budget / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Spent</span>
                    <span className="text-blue-400">${(dept.spent / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">ROI</span>
                    <span className="text-green-400">{dept.roi.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">KPI Score</span>
                    <span className="text-purple-400">{dept.kpiScore.toFixed(1)}%</span>
                  </div>
                </div>
                
                <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                  <div 
                    className="bg-blue-500 rounded-full h-1.5 transition-all duration-500" 
                    style={{ width: `${(dept.spent / dept.budget) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Initiatives */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2 text-purple-400" />
            STRATEGIC INITIATIVES
          </h3>
          <div className="space-y-3">
            {strategicInitiatives.map(initiative => (
              <div key={initiative.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{initiative.name}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getInitiativeStatusColor(initiative.status)}20`, 
                    color: getInitiativeStatusColor(initiative.status) 
                  }}>
                    {initiative.status.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{initiative.progress.toFixed(0)}%</span>
                </div>
                
                <div className="bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-purple-500 rounded-full h-2 transition-all duration-500" 
                    style={{ width: `${initiative.progress}%` }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{initiative.owner}</span>
                  <span className="text-gray-400">${(initiative.spent / 1000).toFixed(0)}K / ${(initiative.budget / 1000).toFixed(0)}K</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Executive Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-yellow-400" />
            EXECUTIVE ALERTS
          </h3>
          <div className="space-y-3">
            {executiveAlerts.map(alert => (
              <div key={alert.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getAlertTypeColor(alert.type) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{alert.department}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getAlertTypeColor(alert.type)}20`, 
                      color: getAlertTypeColor(alert.type) 
                    }}>
                      {alert.type.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.priority === 'high' ? 'bg-red-900 text-red-400' :
                      alert.priority === 'medium' ? 'bg-yellow-900 text-yellow-400' : 'bg-blue-900 text-blue-400'
                    }`}>
                      {alert.priority.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mb-2">{alert.message}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">Impact: {alert.impact}</span>
                  <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Business Analytics Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Business Trends */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">BUSINESS PERFORMANCE TRENDS (5M)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={businessMetrics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Bar 
                yAxisId="left"
                dataKey="revenue" 
                fill="#3B82F6" 
                name="Revenue ($)"
                opacity={0.8}
              />
              <Bar 
                yAxisId="left"
                dataKey="costs" 
                fill="#EF4444" 
                name="Costs ($)"
                opacity={0.8}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="customers" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Customers"
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="efficiency" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                name="Efficiency %"
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Breakdown */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REVENUE BREAKDOWN & MARKET INTELLIGENCE</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={revenueBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {revenueBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`$${(value / 1000).toFixed(0)}K`, '']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {revenueBreakdown.map((segment, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: segment.color }}
                    />
                    <span className="text-gray-400 text-sm">{segment.name}</span>
                  </div>
                  <span className="text-white font-semibold">${(segment.value / 1000).toFixed(0)}K</span>
                </div>
              ))}
              
              {/* Market Intelligence */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Market Intelligence</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Position</span>
                    <span className="text-blue-400">#{competitiveIntelligence.marketPosition}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Growth</span>
                    <span className="text-green-400">+{competitiveIntelligence.marketGrowthRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Threat Level</span>
                    <span className="text-yellow-400">{competitiveIntelligence.threatLevel.toUpperCase()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Executive Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Executive Command Center</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <BarChart3 className="w-3 h-3 inline mr-1" />
                  Generate Report
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Globe className="w-3 h-3 inline mr-1" />
                  Market Analysis
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Calendar className="w-3 h-3 inline mr-1" />
                  Strategic Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveBusinessIntelligenceCenter;