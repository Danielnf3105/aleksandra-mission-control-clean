import { useState, useEffect } from 'react';

const SystemOrchestration = () => {
  const [orchestrationMetrics, setOrchestrationMetrics] = useState({
    totalSystems: 15,
    activeSystems: 13,
    orchestrationHealth: 97.2,
    taskQueue: 47,
    processingRate: 89.5,
    errorRate: 0.8,
    lastUpdate: new Date().toLocaleTimeString()
  });

  const [systemNodes, setSystemNodes] = useState([
    { id: 'content', name: 'Content Processing', status: 'active', load: 78, efficiency: 94 },
    { id: 'email', name: 'Email Infrastructure', status: 'active', load: 45, efficiency: 98 },
    { id: 'directory', name: 'Agent Directory', status: 'active', load: 32, efficiency: 99 },
    { id: 'notion', name: 'Notion Integration', status: 'warning', load: 89, efficiency: 85 },
    { id: 'linkedin', name: 'LinkedIn Outreach', status: 'paused', load: 0, efficiency: 0 },
    { id: 'mission-control', name: 'Mission Control', status: 'active', load: 12, efficiency: 100 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOrchestrationMetrics(prev => ({
        ...prev,
        orchestrationHealth: Math.max(90, Math.min(99, prev.orchestrationHealth + (Math.random() - 0.3) * 1.5)),
        taskQueue: Math.max(20, Math.min(80, prev.taskQueue + Math.floor((Math.random() - 0.5) * 10))),
        processingRate: Math.max(80, Math.min(95, prev.processingRate + (Math.random() - 0.3) * 2)),
        errorRate: Math.max(0.1, Math.min(2, prev.errorRate + (Math.random() - 0.5) * 0.2)),
        lastUpdate: new Date().toLocaleTimeString()
      }));

      setSystemNodes(prev => prev.map(node => ({
        ...node,
        load: node.status === 'active' 
          ? Math.max(10, Math.min(95, node.load + (Math.random() - 0.5) * 8))
          : node.load,
        efficiency: node.status === 'active'
          ? Math.max(85, Math.min(100, node.efficiency + (Math.random() - 0.3) * 2))
          : node.efficiency
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'paused': return 'text-gray-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return '🟢';
      case 'warning': return '🟡';
      case 'paused': return '⏸️';
      case 'error': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="space-y-6">
      {/* Orchestration Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🛡️ System Orchestration Command Center
        </h2>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 font-mono">
              {orchestrationMetrics.totalSystems}
            </div>
            <div className="text-xs text-gray-400 uppercase">Total Systems</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 font-mono">
              {orchestrationMetrics.activeSystems}
            </div>
            <div className="text-xs text-gray-400 uppercase">Active Systems</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 font-mono">
              {orchestrationMetrics.taskQueue}
            </div>
            <div className="text-xs text-gray-400 uppercase">Task Queue</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 font-mono">
              {orchestrationMetrics.processingRate.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Processing Rate</div>
          </div>
        </div>

        {/* Health Status */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-lg font-mono">Orchestration Health:</div>
            <div className="text-xl font-bold text-green-400 font-mono">
              {orchestrationMetrics.orchestrationHealth.toFixed(1)}%
            </div>
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Last Update: {orchestrationMetrics.lastUpdate}
          </div>
        </div>
      </div>

      {/* System Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {systemNodes.map(node => (
          <div key={node.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getStatusIcon(node.status)}</span>
                <div className="font-mono text-sm text-white">{node.name}</div>
              </div>
              <div className={`text-xs font-mono uppercase ${getStatusColor(node.status)}`}>
                {node.status}
              </div>
            </div>
            
            {/* Load Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Load</span>
                <span>{node.load}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all ${
                    node.load > 80 ? 'bg-red-500' : 
                    node.load > 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${node.load}%` }}
                ></div>
              </div>
            </div>

            {/* Efficiency Bar */}
            <div>
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Efficiency</span>
                <span>{node.efficiency}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all ${
                    node.efficiency > 90 ? 'bg-green-500' : 
                    node.efficiency > 70 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${node.efficiency}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Orchestration Commands */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🎛️ System Commands</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors">
            ▶️ Start All
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors">
            ⏸️ Pause Queue
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors">
            🔄 Restart
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-mono text-sm transition-colors">
            🛑 Emergency Stop
          </button>
        </div>
      </div>

      {/* Live Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">📡 Live Orchestration Activity</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {[
            '🔄 Task routing optimization completed - 12% efficiency gain',
            '⚡ Load balancing triggered: redistributing tasks to Content Processing',
            '🛡️ System health check passed - All nodes operational',
            '📊 Performance analytics update - Processing rate at 89.5%',
            '🔍 Resource allocation adjusted - Memory usage optimized',
            '🎯 Queue management active - 47 tasks in pipeline',
            '🔧 Auto-scaling evaluation - Current capacity sufficient',
            '📈 Orchestration metrics updated - Health at 97.2%'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 60)}s ago
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemOrchestration;