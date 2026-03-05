// DataVisualizationCenter.js - Advanced Data Visualization with Modern 2026 UI Trends
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

const DataVisualizationCenter = () => {
  const [timeRange, setTimeRange] = useState('24h');
  const [activeMetric, setActiveMetric] = useState('system-performance');
  const [realTimeData, setRealTimeData] = useState({
    systemPerformance: [],
    agentActivity: [],
    deploymentMetrics: [],
    resourceUtilization: []
  });

  const [dashboardMetrics, setDashboardMetrics] = useState({
    totalRequests: 15847,
    activeUsers: 234,
    systemUptime: 99.97,
    responseTime: 23.4,
    errorRate: 0.03,
    deploymentSuccess: 98.7,
    agentEfficiency: 94.3,
    costOptimization: 91.8
  });

  const [alertTrends, setAlertTrends] = useState([
    { name: 'Info', value: 45, color: '#60A5FA' },
    { name: 'Warning', value: 12, color: '#F59E0B' },
    { name: 'Critical', value: 2, color: '#EF4444' },
    { name: 'Success', value: 89, color: '#10B981' }
  ]);

  // Generate realistic time-series data
  const generateTimeSeriesData = () => {
    const now = new Date();
    const data = [];
    const points = timeRange === '24h' ? 24 : timeRange === '7d' ? 168 : 30 * 24;
    const interval = timeRange === '24h' ? 60 * 60 * 1000 : timeRange === '7d' ? 60 * 60 * 1000 : 24 * 60 * 60 * 1000;

    for (let i = points; i >= 0; i--) {
      const timestamp = new Date(now.getTime() - (i * interval));
      data.push({
        time: timeRange === '24h' ? timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}) :
               timeRange === '7d' ? timestamp.toLocaleDateString([], {month: 'short', day: 'numeric'}) :
               timestamp.toLocaleDateString([], {month: 'short', day: 'numeric'}),
        cpu: Math.max(15, Math.min(85, 45 + Math.sin(i * 0.2) * 20 + (Math.random() - 0.5) * 10)),
        memory: Math.max(50, Math.min(90, 68 + Math.cos(i * 0.15) * 15 + (Math.random() - 0.5) * 8)),
        network: Math.max(20, Math.min(95, 60 + Math.sin(i * 0.3) * 25 + (Math.random() - 0.5) * 12)),
        agents: Math.max(70, Math.min(100, 88 + Math.cos(i * 0.1) * 10 + (Math.random() - 0.5) * 6)),
        deployments: Math.floor(Math.random() * 8) + 2,
        errors: Math.floor(Math.random() * 3),
        responseTime: Math.max(10, Math.min(100, 25 + Math.sin(i * 0.25) * 15 + (Math.random() - 0.5) * 8))
      });
    }
    return data;
  };

  const [chartData, setChartData] = useState(generateTimeSeriesData());

  useEffect(() => {
    // Update data when time range changes
    setChartData(generateTimeSeriesData());
  }, [timeRange]);

  useEffect(() => {
    // Real-time data updates
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev];
        const lastPoint = newData[newData.length - 1];
        
        // Update the latest data point with small variations
        newData[newData.length - 1] = {
          ...lastPoint,
          cpu: Math.max(15, Math.min(85, lastPoint.cpu + (Math.random() - 0.5) * 5)),
          memory: Math.max(50, Math.min(90, lastPoint.memory + (Math.random() - 0.5) * 3)),
          network: Math.max(20, Math.min(95, lastPoint.network + (Math.random() - 0.5) * 8)),
          agents: Math.max(70, Math.min(100, lastPoint.agents + (Math.random() - 0.5) * 2)),
          responseTime: Math.max(10, Math.min(100, lastPoint.responseTime + (Math.random() - 0.5) * 3))
        };

        return newData;
      });

      // Update dashboard metrics
      setDashboardMetrics(prev => ({
        ...prev,
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 3),
        responseTime: Math.max(15, Math.min(50, prev.responseTime + (Math.random() - 0.5) * 2)),
        systemUptime: Math.max(99, Math.min(99.99, prev.systemUptime + (Math.random() - 0.5) * 0.01))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const performanceGaugeData = [
    { name: 'Performance', value: dashboardMetrics.agentEfficiency, fill: '#10B981' },
    { name: 'Remaining', value: 100 - dashboardMetrics.agentEfficiency, fill: '#374151' }
  ];

  const resourceUtilizationData = [
    { name: 'CPU', current: 42, max: 100, color: '#3B82F6' },
    { name: 'Memory', current: 78, max: 100, color: '#8B5CF6' },
    { name: 'Disk', current: 89, max: 100, color: '#F59E0B' },
    { name: 'Network', current: 34, max: 100, color: '#10B981' }
  ];

  const deploymentTrendData = chartData.slice(-12).map((item, index) => ({
    time: item.time,
    successful: Math.floor(Math.random() * 8) + 15,
    failed: Math.floor(Math.random() * 2),
    pending: Math.floor(Math.random() * 3)
  }));

  const getMetricColor = (value, thresholds = [70, 90]) => {
    if (value >= thresholds[1]) return 'text-green-400';
    if (value >= thresholds[0]) return 'text-yellow-400';
    return 'text-red-400';
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
          📊 DATA VISUALIZATION CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-700 text-white px-3 py-2 rounded font-mono text-sm border border-gray-600"
          >
            <option value="24h">Last 24 Hours</option>
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
          </select>
          <div className="text-sm text-gray-400 font-mono">
            Real-time updates • 3s refresh
          </div>
        </div>
      </div>

      {/* Key Performance Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-6 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">TOTAL REQUESTS</div>
              <div className="text-2xl font-bold text-blue-100">
                {formatNumber(dashboardMetrics.totalRequests)}
              </div>
              <div className="text-xs text-blue-300">+234 this hour</div>
            </div>
            <div className="text-3xl opacity-60">📈</div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-blue-800 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '74%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-6 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SYSTEM UPTIME</div>
              <div className="text-2xl font-bold text-green-100">
                {dashboardMetrics.systemUptime.toFixed(2)}%
              </div>
              <div className="text-xs text-green-300">9h 45m current</div>
            </div>
            <div className="text-3xl opacity-60">🟢</div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-green-800 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: `${dashboardMetrics.systemUptime}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-6 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">RESPONSE TIME</div>
              <div className="text-2xl font-bold text-purple-100">
                {dashboardMetrics.responseTime.toFixed(1)}ms
              </div>
              <div className="text-xs text-purple-300">avg last hour</div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-purple-800 rounded-full h-2">
              <div className="bg-purple-400 h-2 rounded-full" style={{ width: `${100 - dashboardMetrics.responseTime}%` }}></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-6 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">AGENT EFFICIENCY</div>
              <div className="text-2xl font-bold text-orange-100">
                {dashboardMetrics.agentEfficiency.toFixed(1)}%
              </div>
              <div className="text-xs text-orange-300">6 agents active</div>
            </div>
            <div className="text-3xl opacity-60">🤖</div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-orange-800 rounded-full h-2">
              <div className="bg-orange-400 h-2 rounded-full" style={{ width: `${dashboardMetrics.agentEfficiency}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* System Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            ⚡ SYSTEM PERFORMANCE TRENDS
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="networkGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
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
              <Legend />
              <Area type="monotone" dataKey="cpu" stroke="#3B82F6" fill="url(#cpuGradient)" name="CPU %" />
              <Area type="monotone" dataKey="memory" stroke="#8B5CF6" fill="url(#memoryGradient)" name="Memory %" />
              <Area type="monotone" dataKey="network" stroke="#10B981" fill="url(#networkGradient)" name="Network %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Agent Performance Gauge */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AGENT PERFORMANCE GAUGE
          </h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <RadialBarChart cx="50%" cy="50%" innerRadius="60%" outerRadius="90%" data={performanceGaugeData}>
                <RadialBar
                  dataKey="value"
                  cornerRadius={10}
                  fill="#10B981"
                  background={{ fill: '#374151' }}
                />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-white text-2xl font-bold">
                  {dashboardMetrics.agentEfficiency.toFixed(1)}%
                </text>
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="text-center">
              <div className="text-xs text-gray-400">EFFICIENCY</div>
              <div className="text-lg font-bold text-green-400">{dashboardMetrics.agentEfficiency.toFixed(1)}%</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-gray-400">COST OPTIMIZATION</div>
              <div className="text-lg font-bold text-blue-400">{dashboardMetrics.costOptimization.toFixed(1)}%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Deployment Metrics and Resource Utilization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Deployment Success Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚀 DEPLOYMENT SUCCESS TRENDS
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deploymentTrendData}>
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
              <Legend />
              <Bar dataKey="successful" fill="#10B981" name="Successful" radius={[2, 2, 0, 0]} />
              <Bar dataKey="failed" fill="#EF4444" name="Failed" radius={[2, 2, 0, 0]} />
              <Bar dataKey="pending" fill="#F59E0B" name="Pending" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Resource Utilization */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💾 RESOURCE UTILIZATION
          </h3>
          <div className="space-y-4">
            {resourceUtilizationData.map((resource, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">{resource.name}</span>
                  <span className="text-sm font-bold" style={{ color: resource.color }}>
                    {resource.current}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500" 
                    style={{ 
                      width: `${resource.current}%`,
                      backgroundColor: resource.color,
                      boxShadow: `0 0 10px ${resource.color}30`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <ResponsiveContainer width="100%" height={150}>
              <PieChart>
                <Pie
                  data={alertTrends}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {alertTrends.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
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
      </div>

      {/* Real-time Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📡 REAL-TIME DATA INSIGHTS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-cyan-400">PERFORMANCE INSIGHTS</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Avg Response Time</span>
                <span className="text-cyan-400">{dashboardMetrics.responseTime.toFixed(1)}ms</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Peak CPU Usage</span>
                <span className="text-yellow-400">67.3%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Memory Efficiency</span>
                <span className="text-green-400">91.7%</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-green-400">DEPLOYMENT STATS</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Success Rate</span>
                <span className="text-green-400">{dashboardMetrics.deploymentSuccess.toFixed(1)}%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Avg Deploy Time</span>
                <span className="text-blue-400">23.4s</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Builds Today</span>
                <span className="text-purple-400">12</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-purple-400">AGENT METRICS</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Active Agents</span>
                <span className="text-purple-400">6/6</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Task Completion</span>
                <span className="text-green-400">94.3%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Network Latency</span>
                <span className="text-cyan-400">12ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataVisualizationCenter;