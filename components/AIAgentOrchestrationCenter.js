// AI Agent Orchestration Center - 2026 Modern Mission Control
// Inspired by builderz-labs, Apollo MC, NVIDIA Mission Control, and agentic task management
import { useState, useEffect, useRef } from 'react';
import { 
  Bot, Users, Zap, Clock, DollarSign, GitBranch, 
  Activity, AlertCircle, CheckCircle, Pause, Play,
  RefreshCw, Settings, Terminal, FileText, Target,
  TrendingUp, TrendingDown, Cpu, HardDrive, Network,
  ArrowRight, ArrowUp, ArrowDown, MoreHorizontal,
  Eye, Brain, Shield, Workflow, MessageSquare
} from 'lucide-react';

export default function AIAgentOrchestrationCenter() {
  const [agentFleet, setAgentFleet] = useState({
    'agent-1': {
      name: 'Content Processor',
      type: 'content-analysis',
      status: 'active',
      currentTask: 'Instagram video transcription batch #47',
      progress: 73,
      uptime: '2h 34m',
      tasksCompleted: 156,
      costToday: 12.43,
      efficiency: 94.7,
      lastSeen: '2s ago',
      capabilities: ['video-processing', 'transcript-generation', 'content-analysis'],
      health: 98.1
    },
    'agent-2': {
      name: 'Research Assistant',
      type: 'research-analysis',
      status: 'active',
      currentTask: 'Market research: Competitor analysis for @brandname',
      progress: 45,
      uptime: '1h 12m',
      tasksCompleted: 23,
      costToday: 8.76,
      efficiency: 91.2,
      lastSeen: '5s ago',
      capabilities: ['web-research', 'data-analysis', 'report-generation'],
      health: 96.8
    },
    'agent-3': {
      name: 'Content Creator',
      type: 'content-generation',
      status: 'active',
      currentTask: 'Carousel script generation - Batch 12 of 15',
      progress: 89,
      uptime: '3h 45m',
      tasksCompleted: 89,
      costToday: 15.32,
      efficiency: 97.3,
      lastSeen: '1s ago',
      capabilities: ['script-writing', 'carousel-design', 'copy-creation'],
      health: 99.2
    },
    'agent-4': {
      name: 'Outreach Manager',
      type: 'automation',
      status: 'paused',
      currentTask: 'LinkedIn connection queue - Awaiting approval',
      progress: 0,
      uptime: '0m',
      tasksCompleted: 34,
      costToday: 4.21,
      efficiency: 88.9,
      lastSeen: '12m ago',
      capabilities: ['linkedin-automation', 'email-outreach', 'crm-management'],
      health: 95.5
    },
    'agent-5': {
      name: 'Analytics Engine',
      type: 'analytics',
      status: 'active',
      currentTask: 'Performance metrics aggregation - Weekly report',
      progress: 67,
      uptime: '1h 56m',
      tasksCompleted: 67,
      costToday: 6.89,
      efficiency: 92.8,
      lastSeen: '3s ago',
      capabilities: ['data-processing', 'metrics-analysis', 'reporting'],
      health: 97.6
    },
    'agent-6': {
      name: 'Infrastructure Monitor',
      type: 'monitoring',
      status: 'active',
      currentTask: 'System health check - API quota monitoring',
      progress: 100,
      uptime: '6h 22m',
      tasksCompleted: 203,
      costToday: 2.15,
      efficiency: 99.1,
      lastSeen: '1s ago',
      capabilities: ['system-monitoring', 'alert-management', 'health-checks'],
      health: 99.8
    }
  });

  const [orchestrationMetrics, setOrchestrationMetrics] = useState({
    totalAgents: 6,
    activeAgents: 5,
    totalTasks: 47,
    completedTasks: 572,
    failedTasks: 8,
    totalCost: 49.76,
    avgEfficiency: 94.0,
    systemLoad: 67.8,
    throughput: 23.4,
    sessionResilience: 99.2
  });

  const [taskQueue, setTaskQueue] = useState([
    {
      id: 'task-001',
      title: 'Instagram Video Processing',
      type: 'content-analysis',
      priority: 'high',
      assignedTo: 'agent-1',
      estimatedTime: '8m',
      status: 'in-progress',
      progress: 73,
      costEstimate: 1.24
    },
    {
      id: 'task-002',
      title: 'Carousel Script Generation',
      type: 'content-creation',
      priority: 'medium',
      assignedTo: 'agent-3',
      estimatedTime: '12m',
      status: 'in-progress',
      progress: 89,
      costEstimate: 2.15
    },
    {
      id: 'task-003',
      title: 'Market Research Analysis',
      type: 'research',
      priority: 'medium',
      assignedTo: 'agent-2',
      estimatedTime: '15m',
      status: 'in-progress',
      progress: 45,
      costEstimate: 1.67
    },
    {
      id: 'task-004',
      title: 'Weekly Analytics Report',
      type: 'analytics',
      priority: 'low',
      assignedTo: 'agent-5',
      estimatedTime: '20m',
      status: 'queued',
      progress: 0,
      costEstimate: 0.98
    },
    {
      id: 'task-005',
      title: 'LinkedIn Outreach Campaign',
      type: 'automation',
      priority: 'high',
      assignedTo: null,
      estimatedTime: '25m',
      status: 'waiting-approval',
      progress: 0,
      costEstimate: 3.42
    }
  ]);

  const [automationRules, setAutomationRules] = useState([
    {
      id: 'rule-1',
      name: 'Auto-Respawn Failed Tasks',
      description: 'Automatically restart tasks that fail due to timeouts or errors',
      enabled: true,
      triggers: 3,
      successRate: 94.7
    },
    {
      id: 'rule-2',
      name: 'Cost Optimization Routing',
      description: 'Route tasks to most cost-efficient available agent',
      enabled: true,
      triggers: 18,
      successRate: 89.2
    },
    {
      id: 'rule-3',
      name: 'Load Balancing',
      description: 'Distribute tasks evenly across active agents',
      enabled: true,
      triggers: 45,
      successRate: 96.8
    },
    {
      id: 'rule-4',
      name: 'Emergency Scaling',
      description: 'Spawn additional agents during high-demand periods',
      enabled: false,
      triggers: 0,
      successRate: 0
    }
  ]);

  useEffect(() => {
    // Real-time orchestration updates
    const interval = setInterval(() => {
      // Update task progress
      setTaskQueue(prev => prev.map(task => {
        if (task.status === 'in-progress' && task.progress < 100) {
          const increment = Math.random() * 5;
          const newProgress = Math.min(100, task.progress + increment);
          
          if (newProgress >= 100) {
            // Mark task as completed
            return { ...task, progress: 100, status: 'completed' };
          }
          return { ...task, progress: newProgress };
        }
        return task;
      }));

      // Update agent metrics
      setAgentFleet(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(agentId => {
          const agent = updated[agentId];
          if (agent.status === 'active') {
            // Update efficiency and health
            agent.efficiency = Math.max(85, Math.min(99, agent.efficiency + (Math.random() - 0.4) * 1.2));
            agent.health = Math.max(95, Math.min(100, agent.health + (Math.random() - 0.3) * 0.8));
          }
        });
        return updated;
      });

      // Update orchestration metrics
      setOrchestrationMetrics(prev => ({
        ...prev,
        systemLoad: Math.max(45, Math.min(95, prev.systemLoad + (Math.random() - 0.5) * 3)),
        throughput: Math.max(15, Math.min(35, prev.throughput + (Math.random() - 0.5) * 2)),
        totalCost: prev.totalCost + Math.random() * 0.05
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-400 bg-green-900/20 border-green-500/30';
      case 'paused': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500/30';
      case 'error': return 'text-red-400 bg-red-900/20 border-red-500/30';
      case 'idle': return 'text-gray-400 bg-gray-900/20 border-gray-500/30';
      default: return 'text-blue-400 bg-blue-900/20 border-blue-500/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'text-red-400 bg-red-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'low': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const toggleAgent = (agentId) => {
    setAgentFleet(prev => ({
      ...prev,
      [agentId]: {
        ...prev[agentId],
        status: prev[agentId].status === 'active' ? 'paused' : 'active'
      }
    }));
  };

  const toggleAutomationRule = (ruleId) => {
    setAutomationRules(prev => prev.map(rule => 
      rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
    ));
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
            <Bot className="w-8 h-8 mr-3" />
            AI Agent Orchestration Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span>Real-time Orchestration</span>
            </div>
            <div>Last Update: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Modern mission control for AI agent fleet management & task orchestration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Fleet Overview */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Orchestration Metrics */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2" />
              Fleet Status
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Active Agents</span>
                  <Users className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {orchestrationMetrics.activeAgents}/{orchestrationMetrics.totalAgents}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Tasks Today</span>
                  <Target className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {orchestrationMetrics.completedTasks}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Total Cost</span>
                  <DollarSign className="w-4 h-4 text-yellow-400" />
                </div>
                <div className="text-2xl font-bold text-yellow-400">
                  ${orchestrationMetrics.totalCost.toFixed(2)}
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Avg Efficiency</span>
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {orchestrationMetrics.avgEfficiency.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          {/* Agent Fleet */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              Agent Fleet
            </h2>
            
            <div className="space-y-4">
              {Object.entries(agentFleet).map(([agentId, agent]) => (
                <div key={agentId} className={`border rounded-lg p-4 ${getStatusColor(agent.status)}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-5 h-5" />
                        <div>
                          <div className="font-semibold text-white">{agent.name}</div>
                          <div className="text-xs text-gray-400 capitalize">{agent.type}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-sm font-mono">{agent.efficiency.toFixed(1)}% efficiency</div>
                        <div className="text-xs text-gray-400">Health: {agent.health.toFixed(1)}%</div>
                      </div>
                      
                      <button
                        onClick={() => toggleAgent(agentId)}
                        className={`p-2 rounded-md transition-colors ${
                          agent.status === 'active' 
                            ? 'bg-red-600 hover:bg-red-500' 
                            : 'bg-green-600 hover:bg-green-500'
                        }`}
                      >
                        {agent.status === 'active' ? 
                          <Pause className="w-4 h-4" /> : 
                          <Play className="w-4 h-4" />
                        }
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="text-sm text-gray-300 mb-1">{agent.currentTask}</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${agent.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>{agent.progress.toFixed(1)}% complete</span>
                      <span>Last seen: {agent.lastSeen}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">
                      Uptime: {agent.uptime} • Tasks: {agent.tasksCompleted} • Cost: ${agent.costToday.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Control Panel */}
        <div className="space-y-4">
          
          {/* Task Queue */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-purple-400 mb-3 flex items-center">
              <Workflow className="w-5 h-5 mr-2" />
              Task Queue
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {taskQueue.map((task) => (
                <div key={task.id} className="bg-gray-800 border border-gray-600 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-white">{task.title}</div>
                    <span className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-2">
                    {task.assignedTo ? `Assigned: ${agentFleet[task.assignedTo]?.name || task.assignedTo}` : 'Unassigned'}
                  </div>
                  
                  {task.status === 'in-progress' && (
                    <div className="w-full bg-gray-700 rounded-full h-1 mb-2">
                      <div 
                        className="bg-blue-500 h-1 rounded-full transition-all"
                        style={{ width: `${task.progress}%` }}
                      ></div>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Est: {task.estimatedTime}</span>
                    <span>${task.costEstimate.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Rules */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Automation
            </h2>
            
            <div className="space-y-3">
              {automationRules.map((rule) => (
                <div key={rule.id} className="bg-gray-800 border border-gray-600 rounded p-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm font-semibold text-white">{rule.name}</div>
                    <button
                      onClick={() => toggleAutomationRule(rule.id)}
                      className={`w-10 h-5 rounded-full relative transition-colors ${
                        rule.enabled ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${
                        rule.enabled ? 'translate-x-5' : 'translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-2">
                    {rule.description}
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Triggers: {rule.triggers}</span>
                    <span>Success: {rule.successRate.toFixed(1)}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
              <Terminal className="w-5 h-5 mr-2" />
              Quick Actions
            </h2>
            
            <div className="space-y-2">
              <button className="w-full bg-green-600 hover:bg-green-500 py-2 px-3 rounded text-sm font-semibold transition-colors">
                Deploy New Agent
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 px-3 rounded text-sm font-semibold transition-colors">
                Optimize Fleet
              </button>
              <button className="w-full bg-yellow-600 hover:bg-yellow-500 py-2 px-3 rounded text-sm font-semibold transition-colors">
                Export Metrics
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-500 py-2 px-3 rounded text-sm font-semibold transition-colors">
                Schedule Maintenance
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}