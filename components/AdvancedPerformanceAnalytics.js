import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AdvancedPerformanceAnalytics = () => {
  const [performanceData, setPerformanceData] = useState([]);
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    cpu: 45,
    memory: 67,
    apiQuota: 83,
    networkIO: 34,
    diskUsage: 78,
    activeThreads: 12
  });

  const [alertSystem, setAlertSystem] = useState({
    criticalAlerts: 0,
    warningAlerts: 2,
    infoAlerts: 5,
    resolvedToday: 23
  });

  const [agentPerformance, setAgentPerformance] = useState([
    { name: 'Aleksandra AI', efficiency: 96, tasksCompleted: 847, responseTime: 120 },
    { name: 'Content Processor', efficiency: 92, tasksCompleted: 234, responseTime: 3500 },
    { name: 'Email Agent', efficiency: 98, tasksCompleted: 156, responseTime: 89 },
    { name: 'Directory Agent', efficiency: 95, tasksCompleted: 89, responseTime: 45 },
    { name: 'Notion Agent', efficiency: 85, tasksCompleted: 67, responseTime: 890 },
    { name: 'Mission Control', efficiency: 100, tasksCompleted: 1205, responseTime: 12 }
  ]);

  const [contentProcessingStats, setContentProcessingStats] = useState([
    { stage: 'Upload', completed: 11, processing: 0, queued: 0 },
    { stage: 'Transcription', completed: 11, processing: 0, queued: 0 },
    { stage: 'Analysis', completed: 9, processing: 1, queued: 1 },
    { stage: 'Formatting', completed: 8, processing: 2, queued: 1 },
    { stage: 'Export', completed: 7, processing: 1, queued: 3 }
  ]);

  // Initialize performance data
  useEffect(() => {
    const now = Date.now();
    const initialData = Array.from({ length: 20 }, (_, i) => ({
      time: new Date(now - (19 - i) * 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      cpu: Math.max(20, Math.min(80, 45 + Math.sin(i * 0.3) * 15 + Math.random() * 10)),
      memory: Math.max(30, Math.min(90, 67 + Math.cos(i * 0.4) * 20 + Math.random() * 8)),
      throughput: Math.max(50, Math.min(150, 89 + Math.sin(i * 0.2) * 30 + Math.random() * 20)),
      latency: Math.max(10, Math.min(100, 35 + Math.cos(i * 0.5) * 25 + Math.random() * 15))
    }));
    setPerformanceData(initialData);
  }, []);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update real-time metrics
      setRealTimeMetrics(prev => ({
        cpu: Math.max(20, Math.min(90, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.max(30, Math.min(95, prev.memory + (Math.random() - 0.4) * 8)),
        apiQuota: Math.max(70, Math.min(100, prev.apiQuota + (Math.random() - 0.3) * 5)),
        networkIO: Math.max(10, Math.min(80, prev.networkIO + (Math.random() - 0.5) * 15)),
        diskUsage: Math.max(60, Math.min(95, prev.diskUsage + (Math.random() - 0.2) * 3)),
        activeThreads: Math.max(8, Math.min(20, prev.activeThreads + Math.floor((Math.random() - 0.5) * 4)))
      }));

      // Update performance chart data
      setPerformanceData(prev => {
        const newPoint = {
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          cpu: Math.max(20, Math.min(80, prev[prev.length - 1].cpu + (Math.random() - 0.5) * 8)),
          memory: Math.max(30, Math.min(90, prev[prev.length - 1].memory + (Math.random() - 0.4) * 6)),
          throughput: Math.max(50, Math.min(150, prev[prev.length - 1].throughput + (Math.random() - 0.3) * 15)),
          latency: Math.max(10, Math.min(100, prev[prev.length - 1].latency + (Math.random() - 0.4) * 12))
        };
        return [...prev.slice(1), newPoint];
      });

      // Update agent performance
      setAgentPerformance(prev => prev.map(agent => ({
        ...agent,
        efficiency: Math.max(80, Math.min(100, agent.efficiency + (Math.random() - 0.3) * 2)),
        tasksCompleted: agent.tasksCompleted + Math.floor(Math.random() * 3),
        responseTime: Math.max(10, Math.min(5000, agent.responseTime + (Math.random() - 0.5) * 50))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getResourceColor = (value, type) => {
    if (type === 'warning' && value > 80) return '#F59E0B';
    if (type === 'critical' && value > 90) return '#EF4444';
    if (value < 50) return '#10B981';
    if (value < 75) return '#F59E0B';
    return '#EF4444';
  };

  const pieColors = ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4', '#8B5CF6'];

  return (
    <div className="space-y-6">
      {/* Performance Analytics Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          📊 Advanced Performance Analytics
        </h2>
        
        {/* Real-Time System Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {Object.entries(realTimeMetrics).map(([metric, value]) => (
            <div key={metric} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="text-center">
                <div className="text-xs text-gray-400 uppercase mb-1">{metric.replace(/([A-Z])/g, ' $1').trim()}</div>
                <div className={`text-2xl font-bold font-mono mb-2`} style={{ color: getResourceColor(value) }}>
                  {typeof value === 'number' ? (metric === 'activeThreads' ? value : `${value}%`) : value}
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all"
                    style={{ 
                      width: `${typeof value === 'number' ? (metric === 'activeThreads' ? (value / 20) * 100 : value) : 50}%`,
                      backgroundColor: getResourceColor(value)
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Trends Chart */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">📈 Performance Trends (Last 20 Minutes)</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                labelStyle={{ color: '#F3F4F6' }}
              />
              <Line type="monotone" dataKey="cpu" stroke="#EF4444" strokeWidth={2} name="CPU %" />
              <Line type="monotone" dataKey="memory" stroke="#F59E0B" strokeWidth={2} name="Memory %" />
              <Line type="monotone" dataKey="throughput" stroke="#10B981" strokeWidth={2} name="Throughput" />
              <Line type="monotone" dataKey="latency" stroke="#8B5CF6" strokeWidth={2} name="Latency (ms)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Performance Metrics */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🤖 Agent Performance Rankings</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={agentPerformance} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#9CA3AF" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="#9CA3AF" fontSize={10} width={100} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                  formatter={(value, name) => [
                    name === 'efficiency' ? `${value}%` : 
                    name === 'responseTime' ? `${value}ms` : value,
                    name === 'tasksCompleted' ? 'Tasks' :
                    name === 'responseTime' ? 'Response Time' : 'Efficiency'
                  ]}
                />
                <Bar dataKey="efficiency" fill="#10B981" name="efficiency" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Content Processing Pipeline */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🎬 Content Processing Pipeline</h3>
          <div className="space-y-4">
            {contentProcessingStats.map((stage, index) => (
              <div key={stage.stage} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-white">{stage.stage}</span>
                  <div className="flex space-x-4 text-xs font-mono">
                    <span className="text-green-400">✓ {stage.completed}</span>
                    <span className="text-yellow-400">⚡ {stage.processing}</span>
                    <span className="text-gray-400">⏳ {stage.queued}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="flex h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-green-500"
                      style={{ width: `${(stage.completed / 11) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-yellow-500"
                      style={{ width: `${(stage.processing / 11) * 100}%` }}
                    ></div>
                    <div 
                      className="bg-gray-500"
                      style={{ width: `${(stage.queued / 11) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert System Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🚨 Alert System Status</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-red-900/30 rounded-lg p-4 border border-red-500/30 text-center">
            <div className="text-2xl font-bold text-red-400 font-mono">{alertSystem.criticalAlerts}</div>
            <div className="text-xs text-red-300 uppercase">Critical Alerts</div>
          </div>
          <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-500/30 text-center">
            <div className="text-2xl font-bold text-yellow-400 font-mono">{alertSystem.warningAlerts}</div>
            <div className="text-xs text-yellow-300 uppercase">Warning Alerts</div>
          </div>
          <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-500/30 text-center">
            <div className="text-2xl font-bold text-blue-400 font-mono">{alertSystem.infoAlerts}</div>
            <div className="text-xs text-blue-300 uppercase">Info Alerts</div>
          </div>
          <div className="bg-green-900/30 rounded-lg p-4 border border-green-500/30 text-center">
            <div className="text-2xl font-bold text-green-400 font-mono">{alertSystem.resolvedToday}</div>
            <div className="text-xs text-green-300 uppercase">Resolved Today</div>
          </div>
        </div>

        {/* Recent Alerts Feed */}
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-600">
          <h4 className="text-sm font-bold text-white mb-3 font-mono">📡 Recent Alerts</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {[
              { level: 'warning', message: 'Notion Agent latency above 800ms threshold', time: '2m ago' },
              { level: 'info', message: 'Content processing pipeline optimization completed', time: '15m ago' },
              { level: 'warning', message: 'Memory usage reached 85% on primary node', time: '23m ago' },
              { level: 'info', message: 'Mission Control deployment successful', time: '1h ago' },
              { level: 'info', message: 'Agent collaboration network efficiency at 94.2%', time: '1h ago' }
            ].map((alert, index) => (
              <div key={index} className="flex items-center justify-between text-sm font-mono">
                <div className="flex items-center">
                  <div className={`w-2 h-2 rounded-full mr-3 ${
                    alert.level === 'critical' ? 'bg-red-500' :
                    alert.level === 'warning' ? 'bg-yellow-500' :
                    'bg-blue-500'
                  }`}></div>
                  <span className="text-gray-300">{alert.message}</span>
                </div>
                <span className="text-gray-500">{alert.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceAnalytics;