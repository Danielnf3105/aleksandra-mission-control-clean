// AgentOrchestrationCenter.js - Advanced Agent Orchestration and Multi-Agent Collaboration Control
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AgentOrchestrationCenter = () => {
  const [agents, setAgents] = useState([
    {
      id: 'agent_001',
      name: 'Aleksandra',
      type: 'PRIMARY',
      status: 'ACTIVE',
      currentTask: 'Mission control enhancement',
      capabilities: ['content-creation', 'code-generation', 'data-analysis', 'system-management'],
      workload: 78.4,
      efficiency: 96.7,
      uptime: 99.2,
      tasksCompleted: 2847,
      activeTasks: 3,
      queuedTasks: 1,
      lastActivity: Date.now() - 2 * 60 * 1000,
      gatewayUrl: 'openclaw://main-session',
      health: 'EXCELLENT',
      collaboration: {
        leadsTeams: 2,
        participatesIn: 0,
        communications: 156
      }
    },
    {
      id: 'agent_002',
      name: 'Content Specialist',
      type: 'SPECIALIZED',
      status: 'ACTIVE',
      currentTask: 'Instagram transcription processing',
      capabilities: ['video-processing', 'transcription', 'content-analysis', 'social-media'],
      workload: 65.3,
      efficiency: 94.2,
      uptime: 97.8,
      tasksCompleted: 1893,
      activeTasks: 2,
      queuedTasks: 4,
      lastActivity: Date.now() - 5 * 60 * 1000,
      gatewayUrl: 'openclaw://content-agent',
      health: 'GOOD',
      collaboration: {
        leadsTeams: 0,
        participatesIn: 2,
        communications: 89
      }
    },
    {
      id: 'agent_003',
      name: 'Analytics Engine',
      type: 'SPECIALIZED',
      status: 'ACTIVE',
      currentTask: 'Performance metrics analysis',
      capabilities: ['data-analysis', 'reporting', 'visualization', 'performance-monitoring'],
      workload: 82.7,
      efficiency: 92.8,
      uptime: 98.5,
      tasksCompleted: 1456,
      activeTasks: 1,
      queuedTasks: 2,
      lastActivity: Date.now() - 3 * 60 * 1000,
      gatewayUrl: 'openclaw://analytics-agent',
      health: 'GOOD',
      collaboration: {
        leadsTeams: 1,
        participatesIn: 1,
        communications: 67
      }
    },
    {
      id: 'agent_004',
      name: 'Security Monitor',
      type: 'SPECIALIZED',
      status: 'STANDBY',
      currentTask: 'System security scanning',
      capabilities: ['security-monitoring', 'threat-detection', 'compliance', 'audit-logging'],
      workload: 23.4,
      efficiency: 99.1,
      uptime: 99.8,
      tasksCompleted: 892,
      activeTasks: 0,
      queuedTasks: 0,
      lastActivity: Date.now() - 15 * 60 * 1000,
      gatewayUrl: 'openclaw://security-agent',
      health: 'EXCELLENT',
      collaboration: {
        leadsTeams: 0,
        participatesIn: 1,
        communications: 34
      }
    },
    {
      id: 'agent_005',
      name: 'Workflow Coordinator',
      type: 'ORCHESTRATOR',
      status: 'ACTIVE',
      currentTask: 'Cross-agent task distribution',
      capabilities: ['task-orchestration', 'workflow-management', 'resource-allocation', 'coordination'],
      workload: 89.1,
      efficiency: 95.4,
      uptime: 96.3,
      tasksCompleted: 2134,
      activeTasks: 5,
      queuedTasks: 7,
      lastActivity: Date.now() - 1 * 60 * 1000,
      gatewayUrl: 'openclaw://workflow-agent',
      health: 'GOOD',
      collaboration: {
        leadsTeams: 3,
        participatesIn: 0,
        communications: 243
      }
    },
    {
      id: 'agent_006',
      name: 'Resource Manager',
      type: 'SPECIALIZED',
      status: 'MAINTENANCE',
      currentTask: 'System optimization and cleanup',
      capabilities: ['resource-management', 'optimization', 'cleanup', 'system-maintenance'],
      workload: 0,
      efficiency: 91.7,
      uptime: 94.2,
      tasksCompleted: 1678,
      activeTasks: 0,
      queuedTasks: 0,
      lastActivity: Date.now() - 45 * 60 * 1000,
      gatewayUrl: 'openclaw://resource-agent',
      health: 'MAINTENANCE',
      collaboration: {
        leadsTeams: 0,
        participatesIn: 2,
        communications: 56
      }
    }
  ]);

  const [orchestrationMetrics, setOrchestrationMetrics] = useState({
    totalAgents: 6,
    activeAgents: 4,
    standbyAgents: 1,
    maintenanceAgents: 1,
    totalTasks: 487,
    activeTasks: 11,
    queuedTasks: 14,
    completedToday: 73,
    collaborationEvents: 234,
    averageResponseTime: 127, // milliseconds
    systemThroughput: 4.7, // tasks per minute
    resourceUtilization: 73.2,
    crossAgentDependencies: 23,
    communicationLatency: 45
  });

  const [taskOrchestration, setTaskOrchestration] = useState({
    workflows: [
      {
        id: 'workflow_001',
        name: 'Content Processing Pipeline',
        status: 'RUNNING',
        progress: 67,
        agents: ['agent_001', 'agent_002', 'agent_003'],
        tasks: 8,
        completedTasks: 5,
        estimatedCompletion: Date.now() + 15 * 60 * 1000,
        priority: 'HIGH'
      },
      {
        id: 'workflow_002',
        name: 'Performance Analytics Generation',
        status: 'RUNNING',
        progress: 45,
        agents: ['agent_003', 'agent_005'],
        tasks: 4,
        completedTasks: 2,
        estimatedCompletion: Date.now() + 22 * 60 * 1000,
        priority: 'MEDIUM'
      },
      {
        id: 'workflow_003',
        name: 'Security Audit Cycle',
        status: 'QUEUED',
        progress: 0,
        agents: ['agent_004', 'agent_005'],
        tasks: 6,
        completedTasks: 0,
        estimatedCompletion: Date.now() + 45 * 60 * 1000,
        priority: 'LOW'
      },
      {
        id: 'workflow_004',
        name: 'System Optimization',
        status: 'PAUSED',
        progress: 23,
        agents: ['agent_006', 'agent_005'],
        tasks: 3,
        completedTasks: 1,
        estimatedCompletion: Date.now() + 60 * 60 * 1000,
        priority: 'LOW'
      }
    ],
    dependencies: [
      { from: 'agent_001', to: 'agent_002', type: 'DATA_FLOW', strength: 0.8 },
      { from: 'agent_002', to: 'agent_003', type: 'RESULT_PROCESSING', strength: 0.9 },
      { from: 'agent_005', to: 'agent_001', type: 'TASK_ASSIGNMENT', strength: 0.7 },
      { from: 'agent_005', to: 'agent_003', type: 'COORDINATION', strength: 0.6 },
      { from: 'agent_004', to: 'agent_005', type: 'SECURITY_REPORTING', strength: 0.5 }
    ]
  });

  const [communicationMatrix, setCommunicationMatrix] = useState([]);
  const [performanceTrends, setPerformanceTrends] = useState([]);
  const [collaborationEvents, setCollaborationEvents] = useState([
    {
      id: 'collab_001',
      timestamp: Date.now() - 2 * 60 * 1000,
      type: 'TASK_HANDOFF',
      sourceAgent: 'agent_001',
      targetAgent: 'agent_002',
      description: 'Content analysis task transferred',
      status: 'COMPLETED',
      latency: 234
    },
    {
      id: 'collab_002',
      timestamp: Date.now() - 5 * 60 * 1000,
      type: 'DATA_SYNC',
      sourceAgent: 'agent_003',
      targetAgent: 'agent_005',
      description: 'Analytics results synchronized',
      status: 'COMPLETED',
      latency: 156
    },
    {
      id: 'collab_003',
      timestamp: Date.now() - 8 * 60 * 1000,
      type: 'RESOURCE_REQUEST',
      sourceAgent: 'agent_002',
      targetAgent: 'agent_006',
      description: 'Additional processing capacity requested',
      status: 'PENDING',
      latency: null
    }
  ]);

  const generateCommunicationMatrix = () => {
    const matrix = [];
    agents.forEach((agent1, i) => {
      agents.forEach((agent2, j) => {
        if (i !== j) {
          matrix.push({
            source: agent1.name,
            target: agent2.name,
            frequency: Math.floor(Math.random() * 50) + 5,
            latency: Math.floor(Math.random() * 100) + 50,
            success_rate: Math.random() * 15 + 85
          });
        }
      });
    });
    return matrix.slice(0, 10); // Show top 10 communication pairs
  };

  const generatePerformanceTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        throughput: Math.random() * 3 + 3, // 3-6 tasks per minute
        latency: Math.random() * 50 + 75, // 75-125ms
        efficiency: Math.random() * 10 + 90, // 90-100%
        collaboration: Math.random() * 20 + 20, // 20-40 events
        utilization: Math.random() * 20 + 60 // 60-80%
      });
    }
    return data;
  };

  useEffect(() => {
    setCommunicationMatrix(generateCommunicationMatrix());
    setPerformanceTrends(generatePerformanceTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update agent statuses and metrics
      setAgents(prev => prev.map(agent => {
        let newWorkload = agent.workload;
        let newEfficiency = agent.efficiency;
        let newTasksCompleted = agent.tasksCompleted;
        
        if (agent.status === 'ACTIVE') {
          newWorkload = Math.max(10, Math.min(95, agent.workload + (Math.random() - 0.5) * 8));
          newEfficiency = Math.max(80, Math.min(99, agent.efficiency + (Math.random() - 0.5) * 2));
          if (Math.random() > 0.8) {
            newTasksCompleted += 1;
          }
        }

        return {
          ...agent,
          workload: newWorkload,
          efficiency: newEfficiency,
          tasksCompleted: newTasksCompleted,
          lastActivity: agent.status === 'ACTIVE' ? Date.now() : agent.lastActivity
        };
      }));

      // Update orchestration metrics
      setOrchestrationMetrics(prev => ({
        ...prev,
        completedToday: prev.completedToday + (Math.random() > 0.9 ? 1 : 0),
        collaborationEvents: prev.collaborationEvents + (Math.random() > 0.7 ? 1 : 0),
        averageResponseTime: Math.max(80, Math.min(200, prev.averageResponseTime + (Math.random() - 0.5) * 10)),
        systemThroughput: Math.max(2, Math.min(8, prev.systemThroughput + (Math.random() - 0.5) * 0.5)),
        resourceUtilization: Math.max(40, Math.min(90, prev.resourceUtilization + (Math.random() - 0.5) * 3))
      }));

      // Update workflows
      setTaskOrchestration(prev => ({
        ...prev,
        workflows: prev.workflows.map(workflow => {
          if (workflow.status === 'RUNNING') {
            const newProgress = Math.min(100, workflow.progress + Math.random() * 3);
            if (newProgress >= 100) {
              return { ...workflow, status: 'COMPLETED', progress: 100 };
            }
            return { ...workflow, progress: newProgress };
          }
          if (workflow.status === 'QUEUED' && Math.random() > 0.85) {
            return { ...workflow, status: 'RUNNING', progress: 5 };
          }
          return workflow;
        })
      }));

      // Add new collaboration events occasionally
      if (Math.random() > 0.95) {
        const eventTypes = ['TASK_HANDOFF', 'DATA_SYNC', 'RESOURCE_REQUEST', 'STATUS_UPDATE'];
        const newEvent = {
          id: `collab_${Date.now()}`,
          timestamp: Date.now(),
          type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
          sourceAgent: `agent_${String(Math.floor(Math.random() * 6) + 1).padStart(3, '0')}`,
          targetAgent: `agent_${String(Math.floor(Math.random() * 6) + 1).padStart(3, '0')}`,
          description: 'Automated collaboration event',
          status: Math.random() > 0.2 ? 'COMPLETED' : 'PENDING',
          latency: Math.floor(Math.random() * 300) + 100
        };
        setCollaborationEvents(prev => [newEvent, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'STANDBY': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'MAINTENANCE': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'OFFLINE': return 'text-red-400 bg-red-400/20 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getHealthColor = (health) => {
    switch (health) {
      case 'EXCELLENT': return 'text-green-400';
      case 'GOOD': return 'text-blue-400';
      case 'FAIR': return 'text-yellow-400';
      case 'POOR': return 'text-orange-400';
      case 'MAINTENANCE': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getWorkflowStatusColor = (status) => {
    switch (status) {
      case 'RUNNING': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'QUEUED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'PAUSED': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'COMPLETED': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (timestamp) => {
    const diff = timestamp - Date.now();
    if (diff < 60000) return 'Soon';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m`;
    return `${Math.floor(diff / 3600000)}h`;
  };

  const getAgentName = (agentId) => {
    const agent = agents.find(a => a.id === agentId);
    return agent ? agent.name : agentId;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🤖 AGENT ORCHESTRATION CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {orchestrationMetrics.activeAgents} ACTIVE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Multi-agent collaboration & orchestration
          </div>
        </div>
      </div>

      {/* Orchestration Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SYSTEM THROUGHPUT</div>
              <div className="text-2xl font-bold text-green-100">
                {orchestrationMetrics.systemThroughput.toFixed(1)} t/m
              </div>
              <div className="text-xs text-green-300">{orchestrationMetrics.completedToday} completed today</div>
            </div>
            <div className="text-3xl opacity-60">🚀</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">COLLABORATION EVENTS</div>
              <div className="text-2xl font-bold text-blue-100">
                {orchestrationMetrics.collaborationEvents}
              </div>
              <div className="text-xs text-blue-300">{orchestrationMetrics.crossAgentDependencies} dependencies</div>
            </div>
            <div className="text-3xl opacity-60">🤝</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">RESPONSE TIME</div>
              <div className="text-2xl font-bold text-purple-100">
                {orchestrationMetrics.averageResponseTime}ms
              </div>
              <div className="text-xs text-purple-300">avg latency</div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">RESOURCE UTIL</div>
              <div className="text-2xl font-bold text-orange-100">
                {orchestrationMetrics.resourceUtilization.toFixed(1)}%
              </div>
              <div className="text-xs text-orange-300">{orchestrationMetrics.totalTasks} total tasks</div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>
      </div>

      {/* Agent Fleet Status and Performance Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Fleet Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 AGENT FLEET STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{agent.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(agent.status)}`}>
                      {agent.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {agent.type}
                    </span>
                  </div>
                  <div className={`text-lg ${getHealthColor(agent.health)}`}>
                    {agent.health === 'EXCELLENT' ? '💚' :
                     agent.health === 'GOOD' ? '🟢' :
                     agent.health === 'MAINTENANCE' ? '🟠' : '🔴'}
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2 truncate">
                  Current: {agent.currentTask}
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Workload</div>
                    <div className="text-cyan-400 font-bold">{agent.workload.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Efficiency</div>
                    <div className="text-green-400 font-bold">{agent.efficiency.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className="text-blue-400 font-bold">{agent.uptime.toFixed(1)}%</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <div className="text-gray-400">Completed</div>
                    <div className="text-white font-bold">{agent.tasksCompleted}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Active/Queue</div>
                    <div className="text-yellow-400 font-bold">{agent.activeTasks}/{agent.queuedTasks}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Last Active</div>
                    <div className="text-purple-400 font-bold">{formatTime(agent.lastActivity)}</div>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="text-xs text-gray-400 mb-1">Workload</div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        agent.workload > 80 ? 'bg-red-400' :
                        agent.workload > 60 ? 'bg-yellow-400' :
                        'bg-green-400'
                      }`}
                      style={{ width: `${agent.workload}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 ORCHESTRATION PERFORMANCE (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
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
              <Line 
                type="monotone" 
                dataKey="throughput" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Throughput (t/m)"
              />
              <Line 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Efficiency (%)"
              />
              <Line 
                type="monotone" 
                dataKey="collaboration" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Collaboration Events"
              />
              <Line 
                type="monotone" 
                dataKey="latency" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Latency (ms)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Workflow Orchestration and Communication Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Workflows */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔄 WORKFLOW ORCHESTRATION
          </h3>
          <div className="space-y-4">
            {taskOrchestration.workflows.map((workflow) => (
              <div key={workflow.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-white text-sm">{workflow.name}</h4>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getWorkflowStatusColor(workflow.status)}`}>
                      {workflow.status}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getPriorityColor(workflow.priority)}`}>
                      {workflow.priority}
                    </span>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{workflow.progress.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        workflow.status === 'COMPLETED' ? 'bg-green-400' :
                        workflow.status === 'RUNNING' ? 'bg-blue-400' :
                        workflow.status === 'PAUSED' ? 'bg-orange-400' :
                        'bg-gray-400'
                      }`}
                      style={{ width: `${workflow.progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Tasks</div>
                    <div className="text-cyan-400">{workflow.completedTasks}/{workflow.tasks}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Agents</div>
                    <div className="text-purple-400">{workflow.agents.length}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ETA</div>
                    <div className="text-green-400">{formatDuration(workflow.estimatedCompletion)}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="text-gray-400 mb-1">Assigned Agents:</div>
                  <div className="flex flex-wrap gap-1">
                    {workflow.agents.map((agentId, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-600 rounded text-gray-300">
                        {getAgentName(agentId)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Events */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤝 COLLABORATION EVENTS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {collaborationEvents.map((event) => (
              <div key={event.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-white">{event.type}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      event.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {event.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(event.timestamp)}
                  </div>
                </div>

                <div className="text-xs text-gray-300 mb-2">
                  {event.description}
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">{getAgentName(event.sourceAgent)}</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-purple-400">{getAgentName(event.targetAgent)}</span>
                  </div>
                  {event.latency && (
                    <div className="text-green-400">
                      {event.latency}ms
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Dependency Graph and Communication Stats */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🕸️ AGENT DEPENDENCY & COMMUNICATION MATRIX
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dependency Visualization */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Cross-Agent Dependencies</h4>
            <div className="space-y-2">
              {taskOrchestration.dependencies.map((dep, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-blue-400">{getAgentName(dep.from)}</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-purple-400">{getAgentName(dep.to)}</span>
                    </div>
                    <span className="text-xs text-green-400">{(dep.strength * 100).toFixed(0)}%</span>
                  </div>
                  <div className="text-xs text-gray-400 mb-1">{dep.type}</div>
                  <div className="w-full bg-gray-600 rounded-full h-1">
                    <div 
                      className="bg-green-400 h-1 rounded-full" 
                      style={{ width: `${dep.strength * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Communication Statistics */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Top Communication Pairs</h4>
            <div className="space-y-2">
              {communicationMatrix.slice(0, 5).map((comm, index) => (
                <div key={index} className="bg-gray-700 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="text-cyan-400">{comm.source}</span>
                      <span className="text-gray-500">↔</span>
                      <span className="text-pink-400">{comm.target}</span>
                    </div>
                    <span className="text-xs text-yellow-400">{comm.frequency}/h</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-gray-400">Latency: </span>
                      <span className="text-green-400">{comm.latency.toFixed(0)}ms</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Success: </span>
                      <span className="text-blue-400">{comm.success_rate.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentOrchestrationCenter;