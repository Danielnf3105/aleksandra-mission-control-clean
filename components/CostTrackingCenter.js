import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, Calculator, Target, AlertTriangle, Clock } from 'lucide-react';

const CostTrackingCenter = () => {
  const [costData, setCostData] = useState({
    totalSpend: 127.45,
    monthlyBudget: 500.00,
    dailyAverage: 4.25,
    tokenUsage: 2847650,
    efficiency: 85.3
  });

  const [dailyCosts, setDailyCosts] = useState([]);
  const [modelBreakdown, setModelBreakdown] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Generate data on component mount
  useEffect(() => {
    // Generate daily cost data
    const costs = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      
      const baseSpend = 3 + Math.random() * 4;
      const weekendMultiplier = date.getDay() === 0 || date.getDay() === 6 ? 0.6 : 1;
      const totalSpend = baseSpend * weekendMultiplier;
      
      costs.push({
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        spend: parseFloat(totalSpend.toFixed(2)),
        tokens: Math.floor(totalSpend * 15000 + Math.random() * 5000)
      });
    }
    setDailyCosts(costs);

    // Generate model breakdown
    setModelBreakdown([
      { model: 'Claude Sonnet 4', spend: 45.67, percentage: 35.8, color: '#3B82F6' },
      { model: 'Claude Opus 4', spend: 52.34, percentage: 41.1, color: '#8B5CF6' },
      { model: 'Claude Haiku 4', spend: 18.92, percentage: 14.8, color: '#10B981' },
      { model: 'GPT-4 Turbo', spend: 8.45, percentage: 6.6, color: '#F59E0B' },
      { model: 'GPT-4', spend: 2.07, percentage: 1.6, color: '#EF4444' }
    ]);

    // Generate alerts
    setAlerts([
      { type: 'warning', message: 'Monthly budget 80% utilized', timestamp: new Date().toLocaleTimeString() }
    ]);
  }, []);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCostData(prev => ({
        ...prev,
        totalSpend: prev.totalSpend + (Math.random() * 0.1),
        tokenUsage: prev.tokenUsage + Math.floor(Math.random() * 100),
        efficiency: Math.max(70, Math.min(95, prev.efficiency + (Math.random() - 0.5) * 2))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
  const formatTokens = (tokens) => `${(tokens / 1000000).toFixed(1)}M`;

  const getEfficiencyColor = (efficiency) => {
    if (efficiency >= 85) return '#10B981';
    if (efficiency >= 70) return '#F59E0B';
    return '#EF4444';
  };

  const getBudgetStatus = () => {
    const utilization = (costData.totalSpend / costData.monthlyBudget) * 100;
    if (utilization < 60) return { color: '#10B981', status: 'Good' };
    if (utilization < 80) return { color: '#F59E0B', status: 'Monitor' };
    return { color: '#EF4444', status: 'Critical' };
  };

  const budgetStatus = getBudgetStatus();

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <DollarSign className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">COST TRACKING CENTER</h1>
            <p className="text-gray-400">AI operations cost analysis, token usage, and budget monitoring</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{formatCurrency(costData.totalSpend)}</div>
            <div className="text-xs text-gray-400">MONTH TO DATE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{formatTokens(costData.tokenUsage)}</div>
            <div className="text-xs text-gray-400">TOKENS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold" style={{color: getEfficiencyColor(costData.efficiency)}}>
              {costData.efficiency.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400">EFFICIENCY</div>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Monthly Budget */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-green-400" />
              <span className="text-gray-400">BUDGET</span>
            </div>
            <span className="text-sm px-2 py-1 rounded-full" 
                  style={{ backgroundColor: `${budgetStatus.color}20`, color: budgetStatus.color }}>
              {budgetStatus.status}
            </span>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-white">{formatCurrency(costData.monthlyBudget)}</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Used</span>
              <span className="text-white">{formatCurrency(costData.totalSpend)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Remaining</span>
              <span className="text-white">{formatCurrency(costData.monthlyBudget - costData.totalSpend)}</span>
            </div>
          </div>
          <div className="mt-3 bg-gray-800 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500" 
              style={{
                width: `${Math.min(100, (costData.totalSpend / costData.monthlyBudget) * 100)}%`,
                backgroundColor: budgetStatus.color
              }}
            />
          </div>
        </div>

        {/* Daily Average */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Calculator className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">DAILY AVG</span>
            </div>
            <TrendingUp className="w-5 h-5 text-green-400" />
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-white">{formatCurrency(costData.dailyAverage)}</div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Target</span>
              <span className="text-white">{formatCurrency(costData.monthlyBudget / 30)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Variance</span>
              <span className={costData.dailyAverage > costData.monthlyBudget / 30 ? 'text-red-400' : 'text-green-400'}>
                {formatCurrency(Math.abs(costData.dailyAverage - costData.monthlyBudget / 30))}
              </span>
            </div>
          </div>
        </div>

        {/* Token Usage */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">TOKENS</span>
            </div>
            <span className="text-2xl font-bold text-purple-400">
              {formatTokens(costData.tokenUsage)}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Today</span>
              <span className="text-white">{formatTokens(costData.tokenUsage * 0.05)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Cost/1K</span>
              <span className="text-white">${(costData.totalSpend / (costData.tokenUsage / 1000)).toFixed(4)}</span>
            </div>
          </div>
        </div>

        {/* Efficiency */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400">EFFICIENCY</span>
            </div>
            <span className="text-2xl font-bold" style={{color: getEfficiencyColor(costData.efficiency)}}>
              {costData.efficiency.toFixed(1)}%
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Target</span>
              <span className="text-white">85%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Status</span>
              <span className={costData.efficiency >= 85 ? 'text-green-400' : 'text-yellow-400'}>
                {costData.efficiency >= 85 ? 'Good' : 'Monitor'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Daily Spend Trend */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">DAILY SPEND TRENDS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyCosts}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="spend" fill="#3B82F6" name="Daily Spend ($)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Model Cost Breakdown */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">MODEL COST BREAKDOWN</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={300}>
              <PieChart>
                <Pie
                  data={modelBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="spend"
                >
                  {modelBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [formatCurrency(value), 'Spend']}
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-3 mt-4">
              {modelBreakdown.map((model, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: model.color }}
                      />
                      <span className="text-white text-sm font-medium">{model.model}</span>
                    </div>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Spend</span>
                      <span className="text-white">{formatCurrency(model.spend)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Share</span>
                      <span className="text-white">{model.percentage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cost Alerts */}
      {alerts.length > 0 && (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            COST ALERTS
          </h3>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className="p-3 rounded-lg border-l-4 bg-yellow-900/20 border-yellow-400">
                <div className="flex items-center justify-between">
                  <span className="text-white">{alert.message}</span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {alert.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CostTrackingCenter;