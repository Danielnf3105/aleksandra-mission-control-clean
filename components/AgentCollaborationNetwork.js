// AgentCollaborationNetwork.js - Advanced Multi-Agent Coordination & Network Intelligence
import { useState, useEffect } from 'react';

const AgentCollaborationNetwork = () => {
  const [networkNodes, setNetworkNodes] = useState([
    {
      id: 'CORE_001',
      name: 'Mission Control Core',
      type: 'orchestrator',
      status: 'active',
      connections: ['PROS_001', 'OUT_002', 'CONT_003', 'SCAL_004'],
      workload: 85.3,
      efficiency: 98.7,
      position: { x: 50, y: 50 }
    },
    {
      id: 'PROS_001',
      name: 'Prospect Research Agent',
      type: 'intelligence',
      status: 'active',
      connections: ['CORE_001', 'OUT_002', 'ANAL_007'],
      workload: 67.2,
      efficiency: 94.8,
      position: { x: 20, y: 20 }
    },
    {
      id: 'OUT_002',
      name: 'Outreach Agent',
      type: 'communication',
      status: 'active',
      connections: ['CORE_001', 'PROS_001', 'FOL_004'],
      workload: 72.1,
      efficiency: 96.3,
      position: { x: 80, y: 20 }
    },
    {
      id: 'CONT_003',
      name: 'Content Pipeline Agent',
      type: 'processing',
      status: 'active',
      connections: ['CORE_001', 'QC_006'],
      workload: 58.4,
      efficiency: 97.1,
      position: { x: 20, y: 80 }
    },
    {
      id: 'SCAL_004',
      name: 'Auto-Scaling Agent',
      type: 'optimization',
      status: 'active',
      connections: ['CORE_001', 'ANAL_007'],
      workload: 43.7,
      efficiency: 95.9,
      position: { x: 80, y: 80 }
    },
    {
      id: 'FOL_004',
      name: 'Follow-up Agent',
      type: 'automation',
      status: 'standby',
      connections: ['OUT_002', 'PAY_005'],
      workload: 23.1,
      efficiency: 92.4,
      position: { x: 90, y: 40 }
    },
    {
      id: 'PAY_005',
      name: 'Payment Agent',
      type: 'transaction',
      status: 'ready',
      connections: ['FOL_004', 'QC_006'],
      workload: 12.8,
      efficiency: 99.2,
      position: { x: 70, y: 60 }
    },
    {
      id: 'QC_006',
      name: 'Quality Control Agent',
      type: 'validation',
      status: 'monitoring',
      connections: ['CONT_003', 'PAY_005', 'ANAL_007'],
      workload: 34.9,
      efficiency: 97.8,
      position: { x: 40, y: 70 }
    },
    {
      id: 'ANAL_007',
      name: 'Analytics Agent',
      type: 'intelligence',
      status: 'active',
      connections: ['PROS_001', 'SCAL_004', 'QC_006'],
      workload: 79.3,
      efficiency: 95.6,
      position: { x: 60, y: 30 }
    }
  ]);

  const [collaborationTasks, setCollaborationTasks] = useState([
    {
      id: 'TASK_001',
      name: 'Instagram Content Processing',
      participants: ['CONT_003', 'PROS_001', 'QC_006'],
      status: 'in_progress',
      progress: 73,
      priority: 'high',
      startTime: '2026-02-26T20:45:00Z',
      estimatedCompletion: '2026-02-26T23:30:00Z'
    },
    {
      id: 'TASK_002',
      name: 'Lead Qualification Pipeline',
      participants: ['PROS_001', 'OUT_002', 'ANAL_007'],
      status: 'active',
      progress: 45,
      priority: 'medium',
      startTime: '2026-02-26T19:15:00Z',
      estimatedCompletion: '2026-02-27T02:00:00Z'
    },
    {
      id: 'TASK_003',
      name: 'Performance Optimization Cycle',
      participants: ['ANAL_007', 'SCAL_004', 'CORE_001'],
      status: 'scheduled',
      progress: 0,
      priority: 'low',
      startTime: '2026-02-27T00:00:00Z',
      estimatedCompletion: '2026-02-27T06:00:00Z'
    }
  ]);

  const [networkMetrics, setNetworkMetrics] = useState({
    totalNodes: 9,
    activeConnections: 24,
    networkEfficiency: 96.3,
    collaborationScore: 87.4,
    taskThroughput: 156,
    averageLatency: 2.3,
    networkLoad: 58.7,
    autonomyLevel: 94.8
  });

  const [communicationFlows, setCommunicationFlows] = useState([
    {
      from: 'PROS_001',
      to: 'OUT_002',
      type: 'data_transfer',
      volume: 247,
      latency: 1.2,
      status: 'active',
      dataType: 'prospect_intelligence'
    },
    {
      from: 'OUT_002',
      to: 'FOL_004',
      type: 'task_handoff',
      volume: 89,
      latency: 0.8,
      status: 'active',
      dataType: 'follow_up_sequences'
    },
    {
      from: 'CONT_003',
      to: 'QC_006',
      type: 'quality_check',
      volume: 34,
      latency: 3.1,
      status: 'processing',
      dataType: 'content_analysis'
    },
    {
      from: 'ANAL_007',
      to: 'SCAL_004',
      type: 'optimization_signal',
      volume: 156,
      latency: 0.5,
      status: 'active',
      dataType: 'performance_metrics'
    }
  ]);

  const [emergentBehaviors, setEmergentBehaviors] = useState([
    {
      pattern: 'Cross-Agent Learning',
      description: 'Agents sharing successful strategies automatically',
      instances: 47,
      impact: 'positive',
      efficiency_gain: 12.3
    },
    {
      pattern: 'Predictive Task Allocation',
      description: 'System predicting workload and pre-allocating resources',
      instances: 23,
      impact: 'positive', 
      efficiency_gain: 8.7
    },
    {
      pattern: 'Autonomous Error Recovery',
      description: 'Network self-healing when individual agents fail',
      instances: 3,
      impact: 'positive',
      efficiency_gain: 15.2
    }
  ]);

  useEffect(() => {
    // Real-time network updates
    const interval = setInterval(() => {
      // Update node workloads and efficiency
      setNetworkNodes(prev => prev.map(node => ({
        ...node,
        workload: Math.max(10, Math.min(95, node.workload + (Math.random() - 0.5) * 8)),
        efficiency: Math.max(85, Math.min(99, node.efficiency + (Math.random() - 0.3) * 2))
      })));

      // Update network metrics
      setNetworkMetrics(prev => ({
        ...prev,
        networkEfficiency: Math.max(90, Math.min(99, prev.networkEfficiency + (Math.random() - 0.4) * 1.5)),
        collaborationScore: Math.max(80, Math.min(95, prev.collaborationScore + (Math.random() - 0.3) * 2)),
        taskThroughput: prev.taskThroughput + Math.floor(Math.random() * 10),
        averageLatency: Math.max(0.5, Math.min(5, prev.averageLatency + (Math.random() - 0.5) * 0.5)),
        networkLoad: Math.max(40, Math.min(80, prev.networkLoad + (Math.random() - 0.4) * 5))
      })));

      // Update task progress
      setCollaborationTasks(prev => prev.map(task => {
        if (task.status === 'in_progress') {
          return {
            ...task,
            progress: Math.min(100, task.progress + Math.random() * 5)
          };
        }
        return task;
      }));

      // Update communication flows
      setCommunicationFlows(prev => prev.map(flow => ({
        ...flow,
        volume: Math.max(0, flow.volume + Math.floor((Math.random() - 0.3) * 20)),
        latency: Math.max(0.1, Math.min(5, flow.latency + (Math.random() - 0.5) * 0.3))
      })));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (type) => {
    const colors = {
      orchestrator: '#8B5CF6', // Purple
      intelligence: '#3B82F6', // Blue  
      communication: '#10B981', // Green
      processing: '#F59E0B', // Orange
      optimization: '#EF4444', // Red
      automation: '#6366F1', // Indigo
      transaction: '#EC4899', // Pink
      validation: '#14B8A6' // Teal
    };
    return colors[type] || '#6B7280';
  };

  const getStatusColor = (status) => {
    const colors = {
      active: '#10B981',
      standby: '#F59E0B', 
      ready: '#3B82F6',
      monitoring: '#8B5CF6',
      offline: '#6B7280'
    };
    return colors[status] || '#6B7280';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: '#EF4444',
      medium: '#F59E0B',
      low: '#10B981'
    };
    return colors[priority] || '#6B7280';
  };

  const calculateNetworkHealth = () => {
    const activeNodes = networkNodes.filter(node => node.status === 'active').length;
    const avgEfficiency = networkNodes.reduce((sum, node) => sum + node.efficiency, 0) / networkNodes.length;
    return (activeNodes / networkNodes.length * 100 * 0.4) + (avgEfficiency * 0.6);
  };

  return (
    <div className="space-y-6">
      {/* Network Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Network Health</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {calculateNetworkHealth().toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">Optimal</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Active Nodes</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {networkNodes.filter(n => n.status === 'active').length}/{networkNodes.length}
          </div>
          <div className="text-xs text-green-400">Multi-agent</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Collaboration Score</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {networkMetrics.collaborationScore.toFixed(1)}
          </div>
          <div className="text-xs text-blue-400">High synergy</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Task Throughput</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {networkMetrics.taskThroughput}/hr
          </div>
          <div className="text-xs text-green-400">Accelerating</div>
        </div>
      </div>

      {/* Network Visualization */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🌐 Agent Collaboration Network
            <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              {networkNodes.filter(n => n.status === 'active').length} active
            </span>
          </h3>
        </div>
        <div className="p-6">
          <div className="relative w-full h-96 bg-gray-900 rounded-lg border border-gray-600 overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Connection lines */}
              {networkNodes.map(node => 
                node.connections.map(connId => {
                  const connectedNode = networkNodes.find(n => n.id === connId);
                  if (!connectedNode) return null;
                  
                  const isActive = communicationFlows.some(flow => 
                    (flow.from === node.id && flow.to === connId) || 
                    (flow.to === node.id && flow.from === connId)
                  );
                  
                  return (
                    <line
                      key={`${node.id}-${connId}`}
                      x1={node.position.x}
                      y1={node.position.y}
                      x2={connectedNode.position.x}
                      y2={connectedNode.position.y}
                      stroke={isActive ? '#10B981' : '#374151'}
                      strokeWidth={isActive ? "0.3" : "0.15"}
                      opacity={isActive ? 0.8 : 0.4}
                    />
                  );
                })
              )}
              
              {/* Agent nodes */}
              {networkNodes.map(node => (
                <g key={node.id}>
                  <circle
                    cx={node.position.x}
                    cy={node.position.y}
                    r="4"
                    fill={getNodeColor(node.type)}
                    stroke={getStatusColor(node.status)}
                    strokeWidth="0.5"
                    opacity={node.status === 'active' ? 1 : 0.6}
                  />
                  <text
                    x={node.position.x}
                    y={node.position.y - 6}
                    textAnchor="middle"
                    fontSize="2.5"
                    fill="#E5E7EB"
                    className="font-mono"
                  >
                    {node.id.split('_')[1]}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Network Legend */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            {['orchestrator', 'intelligence', 'communication', 'processing'].map(type => (
              <div key={type} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getNodeColor(type) }}
                />
                <span className="text-gray-300 capitalize">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Collaboration Tasks */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">🤝 Active Collaboration Tasks</h3>
        </div>
        <div className="p-4 space-y-4">
          {collaborationTasks.map(task => (
            <div key={task.id} className="p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-white font-medium">{task.name}</h4>
                  <div className="text-sm text-gray-300">
                    Participants: {task.participants.join(', ')}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span 
                    className="text-xs px-2 py-1 rounded font-medium"
                    style={{ 
                      backgroundColor: getPriorityColor(task.priority) + '20',
                      color: getPriorityColor(task.priority)
                    }}
                  >
                    {task.priority}
                  </span>
                  <span className="text-sm font-bold text-blue-400">
                    {task.progress}%
                  </span>
                </div>
              </div>

              <div className="w-full bg-gray-600 rounded-full h-2 mb-3">
                <div 
                  className="h-2 rounded-full transition-all duration-500"
                  style={{ 
                    width: `${task.progress}%`,
                    backgroundColor: getPriorityColor(task.priority)
                  }}
                />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-gray-400">Status: </span>
                  <span className="text-white capitalize">{task.status.replace('_', ' ')}</span>
                </div>
                <div>
                  <span className="text-gray-400">Started: </span>
                  <span className="text-blue-300">{new Date(task.startTime).toLocaleTimeString()}</span>
                </div>
                <div>
                  <span className="text-gray-400">ETA: </span>
                  <span className="text-green-300">{new Date(task.estimatedCompletion).toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Flows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">📡 Communication Flows</h3>
          </div>
          <div className="p-4 space-y-3">
            {communicationFlows.map((flow, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded">
                <div>
                  <div className="text-sm text-white font-medium">
                    {flow.from} → {flow.to}
                  </div>
                  <div className="text-xs text-gray-300">{flow.dataType.replace('_', ' ')}</div>
                </div>
                <div className="text-right text-xs">
                  <div className="text-blue-400 font-bold">{flow.volume} msgs</div>
                  <div className="text-gray-400">{flow.latency.toFixed(1)}ms</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergent Behaviors */}
        <div className="bg-gray-800 rounded-lg border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">🧠 Emergent Behaviors</h3>
          </div>
          <div className="p-4 space-y-3">
            {emergentBehaviors.map((behavior, index) => (
              <div key={index} className="p-3 bg-gray-700 rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-white font-medium text-sm">{behavior.pattern}</h4>
                  <span className="text-xs text-green-400">+{behavior.efficiency_gain}%</span>
                </div>
                <div className="text-xs text-gray-300 mb-2">{behavior.description}</div>
                <div className="text-xs text-gray-400">
                  Instances: {behavior.instances} • Impact: {behavior.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Intelligence Metrics */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">🎯 Network Intelligence Metrics</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">
                {networkMetrics.autonomyLevel.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-400">Autonomy Level</div>
              <div className="text-xs text-green-400">Self-governing</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">
                {networkMetrics.averageLatency.toFixed(1)}ms
              </div>
              <div className="text-sm text-gray-400">Avg Latency</div>
              <div className="text-xs text-green-400">Ultra-fast</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">
                {networkMetrics.activeConnections}
              </div>
              <div className="text-sm text-gray-400">Active Connections</div>
              <div className="text-xs text-blue-400">Fully meshed</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-2">
                {networkMetrics.networkLoad.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-400">Network Load</div>
              <div className="text-xs text-green-400">Optimal</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCollaborationNetwork;