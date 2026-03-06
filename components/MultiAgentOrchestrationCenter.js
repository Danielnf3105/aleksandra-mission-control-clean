import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Workflow, Zap, Clock, CheckCircle, ArrowRight, Play, Pause, Settings, Eye, Target, Activity, GitBranch } from 'lucide-react';

const MultiAgentOrchestrationCenter = () => {
  const [crews, setCrews] = useState([
    {
      id: 'CREW-001',
      name: 'Content Operations Crew',
      status: 'active',
      agents: ['Aleksandra Main', 'Content Processor', 'Analytics Agent'],
      currentWorkflow: 'Instagram Content Processing',
      efficiency: 94.2,
      taskCount: 12,
      completedTasks: 9,
      coordinator: 'Aleksandra Main',
      lastActivity: new Date(),
      specialization: 'content'
    },
    {
      id: 'CREW-002', 
      name: 'Security Response Crew',
      status: 'monitoring',
      agents: ['Security Agent', 'Threat Analyzer', 'Incident Responder'],
      currentWorkflow: 'Threat Detection & Response',
      efficiency: 87.6,
      taskCount: 6,
      completedTasks: 6,
      coordinator: 'Security Agent',
      lastActivity: new Date(Date.now() - 300000),
      specialization: 'security'
    },
    {
      id: 'CREW-003',
      name: 'Research & Development Crew',
      status: 'planning',
      agents: ['Research Agent', 'Data Scientist', 'Innovation Agent'],
      currentWorkflow: 'Market Analysis Pipeline',
      efficiency: 78.3,
      taskCount: 8,
      completedTasks: 2,
      coordinator: 'Research Agent',
      lastActivity: new Date(Date.now() - 600000),
      specialization: 'research'
    },
    {
      id: 'CREW-004',
      name: 'Infrastructure Crew',
      status: 'maintenance',
      agents: ['System Monitor', 'DevOps Agent', 'Performance Optimizer'],
      currentWorkflow: 'System Health Monitoring',
      efficiency: 91.8,
      taskCount: 4,
      completedTasks: 3,
      coordinator: 'System Monitor',
      lastActivity: new Date(Date.now() - 180000),
      specialization: 'infrastructure'
    }
  ]);

  const [workflows, setWorkflows] = useState([
    {
      id: 'WF-001',
      name: 'Instagram Content Processing',
      status: 'running',
      progress: 75,
      steps: [
        { name: 'Video Analysis', status: 'completed', agent: 'Content Processor' },
        { name: 'Transcript Generation', status: 'completed', agent: 'Analytics Agent' },
        { name: 'Content Optimization', status: 'active', agent: 'Aleksandra Main' },
        { name: 'Quality Review', status: 'pending', agent: 'Quality Agent' }
      ],
      startTime: new Date(Date.now() - 1800000),
      estimatedCompletion: new Date(Date.now() + 600000),
      priority: 'high'
    },
    {
      id: 'WF-002',
      name: 'Threat Detection & Response',
      status: 'monitoring',
      progress: 100,
      steps: [
        { name: 'Threat Scanning', status: 'completed', agent: 'Security Agent' },
        { name: 'Risk Assessment', status: 'completed', agent: 'Threat Analyzer' },
        { name: 'Response Planning', status: 'completed', agent: 'Incident Responder' },
        { name: 'Continuous Monitoring', status: 'active', agent: 'Security Agent' }
      ],
      startTime: new Date(Date.now() - 3600000),
      estimatedCompletion: null,
      priority: 'critical'
    },
    {
      id: 'WF-003',
      name: 'Market Analysis Pipeline',
      status: 'paused',
      progress: 25,
      steps: [
        { name: 'Data Collection', status: 'completed', agent: 'Research Agent' },
        { name: 'Trend Analysis', status: 'active', agent: 'Data Scientist' },
        { name: 'Insight Generation', status: 'pending', agent: 'Innovation Agent' },
        { name: 'Report Compilation', status: 'pending', agent: 'Research Agent' }
      ],
      startTime: new Date(Date.now() - 7200000),
      estimatedCompletion: new Date(Date.now() + 3600000),
      priority: 'medium'
    }
  ]);

  const [orchestrationMetrics, setOrchestrationMetrics] = useState({
    activeCrews: 2,
    totalAgents: 12,
    runningWorkflows: 3,
    completedToday: 15,
    efficiency: 88.7,
    resourceUtilization: 76.4,
    communicationLatency: 45, // ms
    taskThroughput: 23.7 // tasks/hour
  });

  const [agentCommunications, setAgentCommunications] = useState([
    {
      id: 'MSG-001',
      from: 'Aleksandra Main',
      to: 'Content Processor',
      message: 'Starting video analysis for batch 127',
      timestamp: new Date(),
      type: 'task_assignment',
      status: 'delivered'
    },
    {
      id: 'MSG-002',
      from: 'Security Agent',
      to: 'All Agents',
      message: 'Security scan completed - all clear',
      timestamp: new Date(Date.now() - 300000),
      type: 'broadcast',
      status: 'delivered'
    },
    {
      id: 'MSG-003',
      from: 'Analytics Agent',
      to: 'Aleksandra Main',
      message: 'Content analysis results ready for review',
      timestamp: new Date(Date.now() - 600000),
      type: 'update',
      status: 'read'
    },
    {
      id: 'MSG-004',
      from: 'System Monitor',
      to: 'DevOps Agent',
      message: 'Performance optimization needed on server cluster 3',
      timestamp: new Date(Date.now() - 900000),
      type: 'alert',
      status: 'acknowledged'
    }
  ]);

  // Real-time orchestration updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update workflow progress
      setWorkflows(prev => prev.map(workflow => {
        if (workflow.status === 'running' && workflow.progress < 100) {
          const newProgress = Math.min(100, workflow.progress + Math.random() * 5);
          return {
            ...workflow,
            progress: newProgress,
            status: newProgress >= 100 ? 'completed' : workflow.status
          };
        }
        return workflow;
      }));

      // Update crew metrics
      setCrews(prev => prev.map(crew => {
        if (crew.status === 'active') {
          return {
            ...crew,
            efficiency: Math.max(75, Math.min(100, crew.efficiency + (Math.random() - 0.5) * 3)),
            completedTasks: Math.min(crew.taskCount, crew.completedTasks + (Math.random() > 0.8 ? 1 : 0)),
            lastActivity: new Date()
          };
        }
        return crew;
      }));

      // Occasionally add new communication
      if (Math.random() > 0.9) {
        const agents = ['Aleksandra Main', 'Content Processor', 'Security Agent', 'Analytics Agent'];
        const messageTypes = ['task_assignment', 'update', 'alert', 'coordination'];
        const newMessage = {
          id: `MSG-${Date.now()}`,
          from: agents[Math.floor(Math.random() * agents.length)],
          to: agents[Math.floor(Math.random() * agents.length)],
          message: 'Real-time agent coordination message',
          timestamp: new Date(),
          type: messageTypes[Math.floor(Math.random() * messageTypes.length)],
          status: 'delivered'
        };
        
        setAgentCommunications(prev => [newMessage, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getCrewStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'monitoring': return '#F59E0B';
      case 'planning': return '#3B82F6';
      case 'maintenance': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getWorkflowStatusColor = (status) => {
    switch (status) {
      case 'running': return '#10B981';
      case 'paused': return '#F59E0B';
      case 'completed': return '#3B82F6';
      case 'monitoring': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return '#EF4444';
      case 'high': return '#F59E0B';
      case 'medium': return '#3B82F6';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getMessageTypeIcon = (type) => {
    switch (type) {
      case 'task_assignment': return <Target className="w-3 h-3 text-blue-400" />;
      case 'update': return <Activity className="w-3 h-3 text-green-400" />;
      case 'alert': return <Zap className="w-3 h-3 text-yellow-400" />;
      case 'broadcast': return <Users className="w-3 h-3 text-purple-400" />;
      default: return <Eye className="w-3 h-3 text-gray-400" />;
    }
  };

  const crewDistribution = crews.map(crew => ({
    name: crew.name.split(' ')[0],
    agents: crew.agents.length,
    efficiency: crew.efficiency,
    color: getCrewStatusColor(crew.status)
  }));

  const workflowTypes = [
    { name: 'Content', count: 4, color: '#3B82F6' },
    { name: 'Security', count: 2, color: '#EF4444' },
    { name: 'Research', count: 3, color: '#8B5CF6' },
    { name: 'Infrastructure', count: 2, color: '#10B981' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">MULTI-AGENT ORCHESTRATION CENTER</h1>
            <p className="text-gray-400">Enterprise agent coordination, workflow automation, and crew management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{orchestrationMetrics.activeCrews}</div>
            <div className="text-xs text-gray-400">ACTIVE CREWS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{orchestrationMetrics.totalAgents}</div>
            <div className="text-xs text-gray-400">TOTAL AGENTS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{orchestrationMetrics.efficiency.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">EFFICIENCY</div>
          </div>
        </div>
      </div>

      {/* Orchestration Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Workflow className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">WORKFLOWS</span>
          </div>
          <div className="text-xl font-bold text-white">{orchestrationMetrics.runningWorkflows}</div>
          <div className="text-xs text-gray-400">Running</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">COMPLETED</span>
          </div>
          <div className="text-xl font-bold text-white">{orchestrationMetrics.completedToday}</div>
          <div className="text-xs text-gray-400">Today</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">LATENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{orchestrationMetrics.communicationLatency}ms</div>
          <div className="text-xs text-gray-400">Communication</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Target className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">THROUGHPUT</span>
          </div>
          <div className="text-xl font-bold text-white">{orchestrationMetrics.taskThroughput}</div>
          <div className="text-xs text-gray-400">Tasks/Hour</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Agent Crews */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-400" />
            AGENT CREWS
          </h3>
          <div className="space-y-3">
            {crews.map(crew => (
              <div key={crew.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getCrewStatusColor(crew.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{crew.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getCrewStatusColor(crew.status)}20`, 
                      color: getCrewStatusColor(crew.status) 
                    }}>
                      {crew.status.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-400">{crew.agents.length} agents</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Coordinator: <span className="text-blue-400">{crew.coordinator}</span>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Workflow: <span className="text-white">{crew.currentWorkflow}</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Progress: {crew.completedTasks}/{crew.taskCount}</span>
                  <span className="text-green-400">{crew.efficiency.toFixed(1)}% efficiency</span>
                </div>
                
                <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                  <div 
                    className="bg-blue-500 rounded-full h-1.5 transition-all duration-500" 
                    style={{ width: `${(crew.completedTasks / crew.taskCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Workflows */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Workflow className="w-5 h-5 mr-2 text-green-400" />
            ACTIVE WORKFLOWS
          </h3>
          <div className="space-y-3">
            {workflows.map(workflow => (
              <div key={workflow.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{workflow.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getPriorityColor(workflow.priority)}20`, 
                      color: getPriorityColor(workflow.priority) 
                    }}>
                      {workflow.priority.toUpperCase()}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getWorkflowStatusColor(workflow.status)}20`, 
                      color: getWorkflowStatusColor(workflow.status) 
                    }}>
                      {workflow.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-1 mb-3">
                  {workflow.steps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs">
                      <div className={`w-2 h-2 rounded-full ${
                        step.status === 'completed' ? 'bg-green-400' :
                        step.status === 'active' ? 'bg-yellow-400' : 'bg-gray-600'
                      }`} />
                      <span className="text-gray-400">{step.name}</span>
                      <ArrowRight className="w-3 h-3 text-gray-600" />
                      <span className="text-blue-400">{step.agent}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-gray-400">Progress</span>
                  <span className="text-white">{workflow.progress.toFixed(0)}%</span>
                </div>
                
                <div className="bg-gray-700 rounded-full h-1.5">
                  <div 
                    className="bg-green-500 rounded-full h-1.5 transition-all duration-500" 
                    style={{ width: `${workflow.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Communications */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-purple-400" />
            AGENT COMMUNICATIONS
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {agentCommunications.map(msg => (
              <div key={msg.id} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getMessageTypeIcon(msg.type)}
                    <span className="text-white font-medium text-xs">{msg.from}</span>
                    <ArrowRight className="w-3 h-3 text-gray-400" />
                    <span className="text-blue-400 text-xs">{msg.to}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    msg.status === 'delivered' ? 'bg-green-900 text-green-400' :
                    msg.status === 'read' ? 'bg-blue-900 text-blue-400' :
                    'bg-yellow-900 text-yellow-400'
                  }`}>
                    {msg.status.toUpperCase()}
                  </span>
                </div>
                
                <p className="text-gray-300 text-xs mb-2">{msg.message}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">{msg.type.replace('_', ' ').toUpperCase()}</span>
                  <span className="text-gray-500">
                    {msg.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Crew Performance */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">CREW PERFORMANCE ANALYSIS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={crewDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Bar dataKey="efficiency" fill="#3B82F6" name="Efficiency %" />
              <Bar dataKey="agents" fill="#10B981" name="Agent Count" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Workflow Distribution */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">WORKFLOW TYPE DISTRIBUTION</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={workflowTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="count"
                >
                  {workflowTypes.map((entry, index) => (
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
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-3 mt-4">
              {workflowTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: type.color }}
                    />
                    <span className="text-gray-400 text-sm">{type.name}</span>
                  </div>
                  <span className="text-white font-semibold">{type.count}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Orchestra Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Orchestration Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Play className="w-3 h-3 inline mr-1" />
                  Start Workflow
                </button>
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <GitBranch className="w-3 h-3 inline mr-1" />
                  Create Crew
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Settings className="w-3 h-3 inline mr-1" />
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiAgentOrchestrationCenter;