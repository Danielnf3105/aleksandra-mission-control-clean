// PerformanceAnalyticsCenter.js - Advanced Performance Analytics and Cost Management for AI Operations
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceAnalyticsCenter = () => {
  const [performanceData, setPerformanceData] = useState({
    costMetrics: {
      totalCosts: 847.32,
      apiCosts: 234.56,
      computeCosts: 189.23,
      storageCosts: 67.89,
      networkCosts: 123.45,
      otherCosts: 232.19,
      monthlyBudget: 1200.00,
      projectedMonthly: 923.45,
      costTrend: 'DECREASING',
      costOptimization: 15.7
    },
    agentFleetMetrics: {
      totalAgents: 6,
      activeAgents: 5,
      idleAgents: 1,
      avgUtilization: 87.3,
      totalTasks: 2847,
      completedTasks: 2731,
      failedTasks: 89,
      avgTaskDuration: 23400, // milliseconds
      costPerTask: 0.31,
      agentEfficiency: 95.9
    },
    resourceOptimization: {
      cpuOptimization: 92.4,
      memoryOptimization: 89.7,
      networkOptimization: 94.1,
      storageOptimization: 87.3,
      overallOptimization: 90.9,
      recommendedActions: 3,
      potentialSavings: 127.45
    },
    kpiMetrics: [
      { 
        name: 'Task Success Rate',
        current: 95.9,
        target: 97.0,
        trend: 'IMPROVING',
        importance: 'HIGH'
      },
      {
        name: 'Agent Availability',
        current: 98.7,
        target: 99.0,
        trend: 'STABLE',
        importance: 'HIGH'
      },
      {
        name: 'Response Time',
        current: 234,
        target: 200,
        trend: 'WORSENING',
        importance: 'MEDIUM',
        unit: 'ms'
      },
      {
        name: 'Cost Efficiency',
        current: 84.3,
        target: 85.0,
        trend: 'IMPROVING',
        importance: 'HIGH',
        unit: '%'
      },
      {
        name: 'Throughput',
        current: 847,
        target: 900,
        trend: 'IMPROVING',
        importance: 'MEDIUM',
        unit: 'tasks/hour'
      }
    ]
  });

  const [timeSeriesData, setTimeSeriesData] = useState([]);
  const [costBredownData, setCostBredownData] = useState([]);
  const [agentPerformanceData, setAgentPerformanceData] = useState([]);
  const [selectedTimeRange, setSelectedTimeRange] = useState('24h');
  const [selectedMetric, setSelectedMetric] = useState('costs');

  // Generate realistic time series data
  const generateTimeSeriesData = () => {
    const now = new Date();
    const points = selectedTimeRange === '24h' ? 24 : selectedTimeRange === '7d' ? 168 : 30 * 24;
    const interval = selectedTimeRange === '24h' ? 60 * 60 * 1000 : selectedTimeRange === '7d' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000;
    
    const data = [];
    for (let i = points; i >= 0; i--) {
      const timestamp = new Date(now.getTime() - (i * interval));
      data.push({
        time: selectedTimeRange === '24h' ? timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) :
              timestamp.toLocaleDateString([], {month: 'short', day: 'numeric'}),
        costs: Math.max(20, Math.min(60, 35 + Math.sin(i * 0.1) * 10 + (Math.random() - 0.5) * 8)),
        tasks: Math.max(50, Math.min(120, 85 + Math.cos(i * 0.15) * 20 + (Math.random() - 0.5) * 15)),
        utilization: Math.max(60, Math.min(95, 82 + Math.sin(i * 0.2) * 12 + (Math.random() - 0.5) * 8)),
        responseTime: Math.max(150, Math.min(400, 250 + Math.cos(i * 0.18) * 75 + (Math.random() - 0.5) * 30)),
        efficiency: Math.max(80, Math.min(98, 90 + Math.sin(i * 0.12) * 6 + (Math.random() - 0.5) * 4))
      });
    }
    return data;
  };

  const generateCostBreakdownData = () => {
    return [
      { name: 'API Calls', value: 234.56, color: '#3B82F6' },
      { name: 'Compute', value: 189.23, color: '#8B5CF6' },
      { name: 'Storage', value: 67.89, color: '#10B981' },
      { name: 'Network', value: 123.45, color: '#F59E0B' },
      { name: 'Other', value: 232.19, color: '#EF4444' }
    ];
  };

  const generateAgentPerformanceData = () => {
    return [
      { name: 'Aleksandra', tasks: 847, success: 96.7, utilization: 94.2, cost: 156.78 },
      { name: 'Content Agent', tasks: 623, success: 98.1, utilization: 89.3, cost: 134.23 },
      { name: 'Analytics Agent', tasks: 456, success: 94.8, utilization: 76.4, cost: 98.45 },
      { name: 'Security Agent', tasks: 289, success: 99.3, utilization: 67.8, cost: 67.89 },
      { name: 'Workflow Agent', tasks: 378, success: 92.4, utilization: 82.1, cost: 89.34 },
      { name: 'Monitor Agent', tasks: 254, success: 97.6, utilization: 71.2, cost: 56.78 }
    ];
  };

  useEffect(() => {
    setTimeSeriesData(generateTimeSeriesData());
    setCostBredownData(generateCostBreakdownData());
    setAgentPerformanceData(generateAgentPerformanceData());
  }, [selectedTimeRange]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update real-time metrics
      setPerformanceData(prev => ({
        ...prev,
        costMetrics: {
          ...prev.costMetrics,
          totalCosts: prev.costMetrics.totalCosts + (Math.random() - 0.5) * 5,
          costOptimization: Math.max(10, Math.min(25, prev.costMetrics.costOptimization + (Math.random() - 0.5) * 1))
        },
        agentFleetMetrics: {
          ...prev.agentFleetMetrics,
          avgUtilization: Math.max(70, Math.min(95, prev.agentFleetMetrics.avgUtilization + (Math.random() - 0.5) * 3)),
          completedTasks: prev.agentFleetMetrics.completedTasks + Math.floor(Math.random() * 3),
          agentEfficiency: Math.max(85, Math.min(99, prev.agentFleetMetrics.agentEfficiency + (Math.random() - 0.5) * 2))
        },
        kpiMetrics: prev.kpiMetrics.map(kpi => ({
          ...kpi,
          current: kpi.name === 'Response Time' 
            ? Math.max(150, Math.min(350, kpi.current + (Math.random() - 0.5) * 10))
            : Math.max(kpi.current * 0.8, Math.min(kpi.current * 1.2, kpi.current + (Math.random() - 0.5) * 2))
        }))
      }));

      // Update time series data
      if (Math.random() > 0.7) {
        setTimeSeriesData(prev => {
          const newData = [...prev];
          if (newData.length > 0) {
            const lastPoint = newData[newData.length - 1];
            newData[newData.length - 1] = {
              ...lastPoint,
              costs: Math.max(20, Math.min(60, lastPoint.costs + (Math.random() - 0.5) * 3)),
              tasks: Math.max(50, Math.min(120, lastPoint.tasks + (Math.random() - 0.5) * 5)),
              utilization: Math.max(60, Math.min(95, lastPoint.utilization + (Math.random() - 0.5) * 2)),
              responseTime: Math.max(150, Math.min(400, lastPoint.responseTime + (Math.random() - 0.5) * 10)),
              efficiency: Math.max(80, Math.min(98, lastPoint.efficiency + (Math.random() - 0.5) * 1))
            };
          }
          return newData;
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getKPITrendColor = (trend) => {
    switch (trend) {
      case 'IMPROVING': return 'text-green-400';
      case 'STABLE': return 'text-yellow-400';
      case 'WORSENING': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getKPITrendIcon = (trend) => {
    switch (trend) {
      case 'IMPROVING': return '📈';
      case 'STABLE': return '➡️';
      case 'WORSENING': return '📉';
      default: return '⚪';
    }
  };

  const getImportanceColor = (importance) => {
    switch (importance) {
      case 'HIGH': return 'border-red-400/30 bg-red-400/10';
      case 'MEDIUM': return 'border-yellow-400/30 bg-yellow-400/10';
      case 'LOW': return 'border-green-400/30 bg-green-400/10';
      default: return 'border-gray-400/30 bg-gray-400/10';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          📊 PERFORMANCE ANALYTICS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="bg-gray-700 text-white px-3 py-2 rounded font-mono text-sm border border-gray-600"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
          <div className="text-sm text-gray-400 font-mono">
            Real-time cost & performance tracking
          </div>
        </div>
      </div>

      {/* Cost Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">TOTAL COSTS</div>
              <div className="text-2xl font-bold text-green-100">
                {formatCurrency(performanceData.costMetrics.totalCosts)}
              </div>
              <div className="text-xs text-green-300">
                {((performanceData.costMetrics.totalCosts / performanceData.costMetrics.monthlyBudget) * 100).toFixed(1)}% of budget
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">AGENT EFFICIENCY</div>
              <div className="text-2xl font-bold text-blue-100">
                {performanceData.agentFleetMetrics.agentEfficiency.toFixed(1)}%
              </div>
              <div className="text-xs text-blue-300">
                {performanceData.agentFleetMetrics.activeAgents}/{performanceData.agentFleetMetrics.totalAgents} active
              </div>
            </div>
            <div className="text-3xl opacity-60">🤖</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">COST PER TASK</div>
              <div className="text-2xl font-bold text-purple-100">
                {formatCurrency(performanceData.agentFleetMetrics.costPerTask)}
              </div>
              <div className="text-xs text-purple-300">
                {formatNumber(performanceData.agentFleetMetrics.completedTasks)} completed
              </div>
            </div>
            <div className="text-3xl opacity-60">📈</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">OPTIMIZATION</div>
              <div className="text-2xl font-bold text-orange-100">
                {performanceData.resourceOptimization.overallOptimization.toFixed(1)}%
              </div>
              <div className="text-xs text-orange-300">
                {formatCurrency(performanceData.resourceOptimization.potentialSavings)} savings
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Time Series Performance */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PERFORMANCE TRENDS
          </h3>
          <div className="mb-4">
            <select
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="bg-gray-700 text-white px-3 py-1 rounded text-sm border border-gray-600"
            >
              <option value="costs">Cost Trends</option>
              <option value="tasks">Task Volume</option>
              <option value="utilization">Agent Utilization</option>
              <option value="responseTime">Response Time</option>
              <option value="efficiency">Efficiency</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={timeSeriesData}>
              <defs>
                <linearGradient id={`${selectedMetric}Gradient`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={
                    selectedMetric === 'costs' ? '#10B981' :
                    selectedMetric === 'tasks' ? '#3B82F6' :
                    selectedMetric === 'utilization' ? '#8B5CF6' :
                    selectedMetric === 'responseTime' ? '#F59E0B' :
                    '#EF4444'
                  } stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={
                    selectedMetric === 'costs' ? '#10B981' :
                    selectedMetric === 'tasks' ? '#3B82F6' :
                    selectedMetric === 'utilization' ? '#8B5CF6' :
                    selectedMetric === 'responseTime' ? '#F59E0B' :
                    '#EF4444'
                  } stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Area 
                type="monotone" 
                dataKey={selectedMetric} 
                stroke={
                  selectedMetric === 'costs' ? '#10B981' :
                  selectedMetric === 'tasks' ? '#3B82F6' :
                  selectedMetric === 'utilization' ? '#8B5CF6' :
                  selectedMetric === 'responseTime' ? '#F59E0B' :
                  '#EF4444'
                }
                fill={`url(#${selectedMetric}Gradient)`} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💰 COST BREAKDOWN
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={costBredownData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {costBredownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => formatCurrency(value)}
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* KPI Dashboard and Agent Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* KPI Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 KEY PERFORMANCE INDICATORS
          </h3>
          <div className="space-y-3">
            {performanceData.kpiMetrics.map((kpi, index) => (
              <div key={index} className={`border rounded-lg p-4 ${getImportanceColor(kpi.importance)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white text-sm">{kpi.name}</span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {kpi.importance}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getKPITrendIcon(kpi.trend)}</span>
                    <span className={`text-xs font-mono ${getKPITrendColor(kpi.trend)}`}>
                      {kpi.trend}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-bold text-white">
                      {kpi.current.toFixed(kpi.name === 'Response Time' ? 0 : 1)}{kpi.unit || ''}
                    </div>
                    <div className="text-xs text-gray-400">
                      Target: {kpi.target.toFixed(kpi.name === 'Response Time' ? 0 : 1)}{kpi.unit || ''}
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-500 ${
                          kpi.current >= kpi.target ? 'bg-green-400' : 'bg-yellow-400'
                        }`}
                        style={{ width: `${Math.min(100, (kpi.current / kpi.target) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Performance */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AGENT PERFORMANCE RANKING
          </h3>
          <div className="space-y-3">
            {agentPerformanceData.map((agent, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' :
                      index === 1 ? 'bg-gray-400' :
                      index === 2 ? 'bg-amber-600' :
                      'bg-gray-600'
                    }`}>
                      {index + 1}
                    </div>
                    <span className="font-bold text-white">{agent.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-green-400">
                      {formatCurrency(agent.cost)}
                    </div>
                    <div className="text-xs text-gray-400">total cost</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">Tasks</div>
                    <div className="text-white font-bold">{agent.tasks}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Success</div>
                    <div className="text-green-400 font-bold">{agent.success.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Utilization</div>
                    <div className="text-blue-400 font-bold">{agent.utilization.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Optimization Recommendations */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          ⚡ OPTIMIZATION RECOMMENDATIONS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'CPU', value: performanceData.resourceOptimization.cpuOptimization, color: 'blue' },
            { name: 'Memory', value: performanceData.resourceOptimization.memoryOptimization, color: 'purple' },
            { name: 'Network', value: performanceData.resourceOptimization.networkOptimization, color: 'green' },
            { name: 'Storage', value: performanceData.resourceOptimization.storageOptimization, color: 'yellow' }
          ].map((resource, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-medium">{resource.name}</span>
                <span className={`text-lg font-bold text-${resource.color}-400`}>
                  {resource.value.toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
                <div 
                  className={`bg-${resource.color}-400 h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${resource.value}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-400">
                {resource.value > 90 ? 'Excellent' : resource.value > 80 ? 'Good' : 'Needs improvement'}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
            <div className="text-green-400 font-bold text-sm mb-1">💡 Cost Optimization</div>
            <div className="text-white text-sm">Reduce API calls during off-peak hours</div>
            <div className="text-green-300 text-xs mt-1">Potential savings: {formatCurrency(45.67)}/month</div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
            <div className="text-blue-400 font-bold text-sm mb-1">⚡ Performance</div>
            <div className="text-white text-sm">Optimize agent task distribution</div>
            <div className="text-blue-300 text-xs mt-1">Expected improvement: 12% faster response</div>
          </div>
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
            <div className="text-purple-400 font-bold text-sm mb-1">🔧 Resource</div>
            <div className="text-white text-sm">Scale down idle agents automatically</div>
            <div className="text-purple-300 text-xs mt-1">Savings: {formatCurrency(23.45)}/week</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceAnalyticsCenter;