import { useState, useEffect } from 'react';

const AgentCollaborationNetwork = () => {
  const [networkMetrics, setNetworkMetrics] = useState({
    networkEfficiency: 94.2,
    collaborationScore: 87.8,
    taskThroughput: 156,
    averageLatency: 2.3,
    networkLoad: 68,
    activeConnections: 24
  });

  const [networkNodes, setNetworkNodes] = useState([
    { id: 'aleksandra', name: 'Aleksandra AI', type: 'orchestrator', workload: 72, efficiency: 96, status: 'active' },
    { id: 'content', name: 'Content Processor', type: 'specialist', workload: 85, efficiency: 92, status: 'active' },
    { id: 'email', name: 'Email Agent', type: 'specialist', workload: 43, efficiency: 98, status: 'active' },
    { id: 'directory', name: 'Directory Agent', type: 'specialist', workload: 38, efficiency: 95, status: 'active' },
    { id: 'notion', name: 'Notion Agent', type: 'specialist', workload: 89, efficiency: 85, status: 'warning' },
    { id: 'linkedin', name: 'LinkedIn Agent', type: 'specialist', workload: 0, efficiency: 0, status: 'paused' }
  ]);

  const [collaborationTasks, setCollaborationTasks] = useState([
    { id: 1, name: 'Instagram Content Processing', agents: ['aleksandra', 'content'], status: 'in_progress', progress: 78 },
    { id: 2, name: 'Email Campaign Setup', agents: ['aleksandra', 'email'], status: 'completed', progress: 100 },
    { id: 3, name: 'Notion Database Sync', agents: ['aleksandra', 'notion'], status: 'in_progress', progress: 45 },
    { id: 4, name: 'Agent Directory Update', agents: ['aleksandra', 'directory'], status: 'completed', progress: 100 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkMetrics(prev => ({
        ...prev,
        networkEfficiency: Math.max(90, Math.min(99, prev.networkEfficiency + (Math.random() - 0.4) * 1.5)),
        collaborationScore: Math.max(80, Math.min(95, prev.collaborationScore + (Math.random() - 0.3) * 2)),
        taskThroughput: prev.taskThroughput + Math.floor(Math.random() * 10),
        averageLatency: Math.max(0.5, Math.min(5, prev.averageLatency + (Math.random() - 0.5) * 0.5)),
        networkLoad: Math.max(40, Math.min(80, prev.networkLoad + (Math.random() - 0.4) * 5))
      }));

      setNetworkNodes(prev => prev.map(node => ({
        ...node,
        workload: node.status === 'active' 
          ? Math.max(10, Math.min(95, node.workload + (Math.random() - 0.5) * 8))
          : node.workload,
        efficiency: node.status === 'active'
          ? Math.max(85, Math.min(99, node.efficiency + (Math.random() - 0.3) * 2))
          : node.efficiency
      })));

      setCollaborationTasks(prev => prev.map(task => {
        if (task.status === 'in_progress') {
          return {
            ...task,
            progress: Math.min(100, task.progress + Math.random() * 5)
          };
        }
        return task;
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (type) => {
    const colors = {
      orchestrator: '#8B5CF6', // Purple
      specialist: '#10B981',   // Green
      coordinator: '#F59E0B'   // Yellow
    };
    return colors[type] || '#6B7280';
  };

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
      {/* Network Overview */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🌐 Agent Collaboration Network
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 font-mono">
              {networkMetrics.networkEfficiency.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Network Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 font-mono">
              {networkMetrics.collaborationScore.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Collaboration Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 font-mono">
              {networkMetrics.taskThroughput}
            </div>
            <div className="text-xs text-gray-400 uppercase">Task Throughput</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 font-mono">
              {networkMetrics.averageLatency.toFixed(1)}s
            </div>
            <div className="text-xs text-gray-400 uppercase">Average Latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400 font-mono">
              {networkMetrics.networkLoad}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Network Load</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400 font-mono">
              {networkMetrics.activeConnections}
            </div>
            <div className="text-xs text-gray-400 uppercase">Active Connections</div>
          </div>
        </div>
      </div>

      {/* Agent Nodes */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🤖 Agent Nodes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {networkNodes.map(node => (
            <div key={node.id} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getNodeColor(node.type) }}
                  ></div>
                  <div className="font-mono text-sm text-white">{node.name}</div>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm">{getStatusIcon(node.status)}</span>
                  <div className={`text-xs font-mono uppercase ${getStatusColor(node.status)}`}>
                    {node.status}
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Workload</span>
                    <span>{node.workload}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all ${
                        node.workload > 80 ? 'bg-red-500' : 
                        node.workload > 60 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${node.workload}%` }}
                    ></div>
                  </div>
                </div>

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
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Tasks */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🔗 Collaborative Tasks</h3>
        <div className="space-y-3">
          {collaborationTasks.map(task => (
            <div key={task.id} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-white">{task.name}</div>
                <div className={`text-sm font-mono uppercase px-2 py-1 rounded ${
                  task.status === 'completed' ? 'bg-green-600 text-white' :
                  task.status === 'in_progress' ? 'bg-blue-600 text-white' :
                  'bg-gray-600 text-gray-300'
                }`}>
                  {task.status.replace('_', ' ')}
                </div>
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{Math.round(task.progress)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">Agents:</span>
                {task.agents.map(agentId => {
                  const agent = networkNodes.find(n => n.id === agentId);
                  return agent ? (
                    <span key={agentId} className="text-xs bg-gray-700 px-2 py-1 rounded font-mono">
                      {agent.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">📡 Network Activity</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {[
            '🤝 Aleksandra → Content Processor: Instagram processing task assigned',
            '📧 Email Agent → Aleksandra: Campaign setup completed successfully', 
            '⚡ Content Processor: Processing latency optimized by 15%',
            '🔄 Notion Agent → Aleksandra: Database sync in progress (45%)',
            '🎯 Directory Agent: Agent registry updated with new capabilities',
            '🚀 Network efficiency increased to 94.2% - collaboration peak',
            '🔍 Aleksandra: Resource allocation optimized across all agents',
            '📊 System telemetry: All collaboration metrics within nominal range'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 120)} min ago
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCollaborationNetwork;