// Agent Activity Tracker - Real-time monitoring of AI agent operations and performance
import { useState, useEffect } from 'react';
import { Bot, Activity, Zap, Clock, CheckCircle, AlertTriangle, Users, Cpu, MessageCircle, Target, TrendingUp, Brain } from 'lucide-react';

export default function AgentActivityTracker() {
  const [agentData, setAgentData] = useState({
    agentOverview: {
      totalAgents: 15,
      activeAgents: 12,
      idleAgents: 2,
      offlineAgents: 1,
      totalTasks: 1847,
      completedTasks: 1623,
      activeTasks: 178,
      failedTasks: 46,
      averageResponseTime: '1.2s',
      systemLoad: 73.4
    },
    activeAgents: [
      {
        id: 'agent-001',
        name: 'Content Processor',
        type: 'content',
        status: 'processing',
        currentTask: 'Instagram video transcription',
        taskProgress: 78,
        uptime: '4h 23m',
        tasksCompleted: 156,
        successRate: 98.7,
        averageTaskTime: '2m 45s',
        cpuUsage: 45.2,
        memoryUsage: 67.8,
        lastActivity: '12s ago',
        priority: 'high'
      },
      {
        id: 'agent-002',
        name: 'LinkedIn Outreach',
        type: 'outreach',
        status: 'active',
        currentTask: 'Connection request analysis',
        taskProgress: 34,
        uptime: '2h 15m',
        tasksCompleted: 89,
        successRate: 94.1,
        averageTaskTime: '1m 33s',
        cpuUsage: 23.1,
        memoryUsage: 42.3,
        lastActivity: '3s ago',
        priority: 'normal'
      },
      {
        id: 'agent-003',
        name: 'Spec Ad Creator',
        type: 'creative',
        status: 'processing',
        currentTask: 'Brand research and script generation',
        taskProgress: 91,
        uptime: '6h 42m',
        tasksCompleted: 34,
        successRate: 97.1,
        averageTaskTime: '8m 12s',
        cpuUsage: 89.3,
        memoryUsage: 78.9,
        lastActivity: '1s ago',
        priority: 'high'
      },
      {
        id: 'agent-004',
        name: 'X Engagement Bot',
        type: 'social',
        status: 'active',
        currentTask: 'Reply composition and sentiment analysis',
        taskProgress: 56,
        uptime: '1h 07m',
        tasksCompleted: 267,
        successRate: 96.3,
        averageTaskTime: '45s',
        cpuUsage: 12.7,
        memoryUsage: 28.4,
        lastActivity: '8s ago',
        priority: 'normal'
      },
      {
        id: 'agent-005',
        name: 'Assembly AI Manager',
        type: 'transcription',
        status: 'processing',
        currentTask: 'Audio processing queue management',
        taskProgress: 45,
        uptime: '3h 28m',
        tasksCompleted: 423,
        successRate: 99.2,
        averageTaskTime: '3m 18s',
        cpuUsage: 34.6,
        memoryUsage: 51.2,
        lastActivity: '2s ago',
        priority: 'high'
      },
      {
        id: 'agent-006',
        name: 'Instagram Monitor',
        type: 'monitoring',
        status: 'idle',
        currentTask: 'Waiting for new content',
        taskProgress: 0,
        uptime: '8h 15m',
        tasksCompleted: 189,
        successRate: 98.4,
        averageTaskTime: '1m 12s',
        cpuUsage: 5.2,
        memoryUsage: 18.7,
        lastActivity: '15m ago',
        priority: 'low'
      },
      {
        id: 'agent-007',
        name: 'Cost Optimizer',
        type: 'optimization',
        status: 'active',
        currentTask: 'Resource allocation analysis',
        taskProgress: 72,
        uptime: '5h 33m',
        tasksCompleted: 78,
        successRate: 95.6,
        averageTaskTime: '4m 28s',
        cpuUsage: 28.4,
        memoryUsage: 45.1,
        lastActivity: '5s ago',
        priority: 'normal'
      },
      {
        id: 'agent-008',
        name: 'Security Monitor',
        type: 'security',
        status: 'warning',
        currentTask: 'Anomaly detection scan',
        taskProgress: 89,
        uptime: '12h 04m',
        tasksCompleted: 1245,
        successRate: 99.8,
        averageTaskTime: '30s',
        cpuUsage: 15.7,
        memoryUsage: 32.1,
        lastActivity: '1s ago',
        priority: 'critical'
      }
    ],
    agentTypes: [
      {
        type: 'Content Processing',
        count: 3,
        totalTasks: 567,
        avgSuccessRate: 97.8,
        avgResponseTime: '2m 15s',
        status: 'healthy'
      },
      {
        type: 'Social Engagement', 
        count: 4,
        totalTasks: 823,
        avgSuccessRate: 95.4,
        avgResponseTime: '1m 8s',
        status: 'healthy'
      },
      {
        type: 'Creative Generation',
        count: 2,
        totalTasks: 156,
        avgSuccessRate: 96.8,
        avgResponseTime: '6m 45s',
        status: 'healthy'
      },
      {
        type: 'Infrastructure',
        count: 4,
        totalTasks: 1987,
        avgSuccessRate: 98.9,
        avgResponseTime: '45s',
        status: 'optimal'
      },
      {
        type: 'Security & Monitoring',
        count: 2,
        totalTasks: 2234,
        avgSuccessRate: 99.1,
        avgResponseTime: '28s',
        status: 'optimal'
      }
    ],
    performanceMetrics: [
      { time: '16:20', tasks: 34, success: 97.2, response: 1.1 },
      { time: '16:25', tasks: 41, success: 96.8, response: 1.3 },
      { time: '16:30', tasks: 38, success: 98.1, response: 0.9 },
      { time: '16:35', tasks: 45, success: 97.6, response: 1.2 },
      { time: '16:36', tasks: 42, success: 98.3, response: 1.0 }
    ],
    taskDistribution: {
      contentProcessing: 34.2,
      socialEngagement: 28.7,
      creativeGeneration: 12.4,
      monitoring: 15.3,
      optimization: 9.4
    },
    agentCommunication: [
      {
        fromAgent: 'Content Processor',
        toAgent: 'Assembly AI Manager',
        message: 'New video batch ready for transcription',
        timestamp: '16:35:42',
        type: 'task-handoff',
        priority: 'normal'
      },
      {
        fromAgent: 'Security Monitor',
        toAgent: 'System Alert',
        message: 'Anomaly detected in API usage pattern',
        timestamp: '16:34:18',
        type: 'alert',
        priority: 'high'
      },
      {
        fromAgent: 'Cost Optimizer',
        toAgent: 'Resource Manager',
        message: 'GPU scaling recommendation available',
        timestamp: '16:33:07',
        type: 'recommendation',
        priority: 'normal'
      },
      {
        fromAgent: 'LinkedIn Outreach',
        toAgent: 'Rate Limiter',
        message: 'Approaching hourly connection limit',
        timestamp: '16:32:54',
        type: 'warning',
        priority: 'medium'
      },
      {
        fromAgent: 'Spec Ad Creator',
        toAgent: 'Content Processor',
        message: 'Brand research complete, ready for video generation',
        timestamp: '16:31:23',
        type: 'completion',
        priority: 'normal'
      }
    ],
    resourceAllocation: {
      totalCPU: 67.3,
      totalMemory: 54.2,
      totalNetwork: 23.8,
      totalStorage: 12.4,
      agentLoadBalance: 85.7
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAgentData(prev => {
        const currentTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        const newMetric = {
          time: currentTime,
          tasks: Math.max(25, Math.floor(Math.random() * 30) + 30),
          success: Math.max(94, Math.min(100, Math.random() * 6 + 95)),
          response: Math.max(0.5, Math.min(2.0, Math.random() * 1.5 + 0.8))
        };

        return {
          ...prev,
          performanceMetrics: [...prev.performanceMetrics.slice(-4), newMetric],
          agentOverview: {
            ...prev.agentOverview,
            totalTasks: prev.agentOverview.totalTasks + (Math.random() > 0.7 ? Math.floor(Math.random() * 3) + 1 : 0),
            activeTasks: Math.max(150, Math.min(200, prev.agentOverview.activeTasks + Math.floor((Math.random() - 0.5) * 10))),
            systemLoad: Math.max(60, Math.min(85, prev.agentOverview.systemLoad + (Math.random() - 0.5) * 5))
          },
          activeAgents: prev.activeAgents.map(agent => ({
            ...agent,
            taskProgress: agent.status === 'processing' && agent.taskProgress < 100 ? 
              Math.min(100, agent.taskProgress + Math.random() * 8) : agent.taskProgress,
            cpuUsage: Math.max(5, Math.min(95, agent.cpuUsage + (Math.random() - 0.5) * 8)),
            lastActivity: Math.random() > 0.8 ? `${Math.floor(Math.random() * 30)}s ago` : agent.lastActivity
          }))
        };
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'idle': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'warning': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'offline': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'healthy': return 'text-green-400';
      case 'optimal': return 'text-cyan-400';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'content': return <Bot className="w-4 h-4 text-blue-400" />;
      case 'outreach': return <MessageCircle className="w-4 h-4 text-green-400" />;
      case 'creative': return <Brain className="w-4 h-4 text-purple-400" />;
      case 'social': return <Users className="w-4 h-4 text-cyan-400" />;
      case 'transcription': return <Activity className="w-4 h-4 text-orange-400" />;
      case 'monitoring': return <Target className="w-4 h-4 text-yellow-400" />;
      case 'optimization': return <TrendingUp className="w-4 h-4 text-pink-400" />;
      case 'security': return <CheckCircle className="w-4 h-4 text-red-400" />;
      default: return <Cpu className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'high': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'normal': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'low': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getCommunicationTypeIcon = (type) => {
    switch (type) {
      case 'task-handoff': return <Zap className="w-3 h-3 text-blue-400" />;
      case 'alert': return <AlertTriangle className="w-3 h-3 text-red-400" />;
      case 'recommendation': return <TrendingUp className="w-3 h-3 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-3 h-3 text-yellow-400" />;
      case 'completion': return <CheckCircle className="w-3 h-3 text-cyan-400" />;
      default: return <MessageCircle className="w-3 h-3 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Bot className="w-8 h-8 text-cyan-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Agent Activity Tracker</h2>
            <p className="text-gray-400">Real-time monitoring of AI agent operations and performance</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{agentData.agentOverview.activeAgents}</div>
            <div className="text-xs text-gray-400">Active Agents</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">{agentData.agentOverview.systemLoad.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">System Load</div>
          </div>
        </div>
      </div>

      {/* Agent Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-white">{agentData.agentOverview.totalAgents}</div>
          <div className="text-xs text-gray-400">Total Agents</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{agentData.agentOverview.activeAgents}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{agentData.agentOverview.idleAgents}</div>
          <div className="text-xs text-gray-400">Idle</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{agentData.agentOverview.offlineAgents}</div>
          <div className="text-xs text-gray-400">Offline</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{agentData.agentOverview.totalTasks}</div>
          <div className="text-xs text-gray-400">Total Tasks</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{agentData.agentOverview.activeTasks}</div>
          <div className="text-xs text-gray-400">Active Tasks</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{agentData.agentOverview.completedTasks}</div>
          <div className="text-xs text-gray-400">Completed</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{agentData.agentOverview.averageResponseTime}</div>
          <div className="text-xs text-gray-400">Avg Response</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Agents */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Active Agents</h3>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-green-400">LIVE</div>
            </div>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {agentData.activeAgents.map((agent, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(agent.type)}
                    <div className="text-white font-medium">{agent.name}</div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(agent.status)}`}>
                      {agent.status.toUpperCase()}
                    </div>
                    <div className={`text-xs px-1 py-1 rounded border ${getPriorityColor(agent.priority)}`}>
                      {agent.priority.charAt(0).toUpperCase()}
                    </div>
                  </div>
                </div>
                
                <div className="text-gray-300 text-sm mb-2">{agent.currentTask}</div>
                
                <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                  <div>
                    <div className="text-gray-400">Progress</div>
                    <div className="text-cyan-400 font-medium">{agent.taskProgress}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Uptime</div>
                    <div className="text-green-400 font-medium">{agent.uptime}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Tasks Done</div>
                    <div className="text-blue-400 font-medium">{agent.tasksCompleted}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Success Rate</div>
                    <div className="text-purple-400 font-medium">{agent.successRate.toFixed(1)}%</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 mb-2 text-xs">
                  <div>
                    <div className="text-gray-400">CPU: {agent.cpuUsage.toFixed(1)}%</div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-cyan-400 h-1 rounded-full"
                        style={{ width: `${agent.cpuUsage}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">MEM: {agent.memoryUsage.toFixed(1)}%</div>
                    <div className="w-full bg-gray-700 rounded-full h-1">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-emerald-400 h-1 rounded-full"
                        style={{ width: `${agent.memoryUsage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">Last active: {agent.lastActivity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Performance */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Performance Trends</h3>
          </div>
          
          {/* Performance Chart */}
          <div className="h-32 flex items-end space-x-3 mb-4">
            {agentData.performanceMetrics.map((metric, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col items-center space-y-1">
                  <div 
                    className="w-6 bg-gradient-to-t from-blue-400 to-blue-500 rounded-sm"
                    style={{ height: `${(metric.tasks / 50) * 100}px` }}
                    title={`Tasks: ${metric.tasks}`}
                  ></div>
                  <div 
                    className="w-6 bg-gradient-to-t from-green-400 to-green-500 rounded-sm"
                    style={{ height: `${metric.success}px` }}
                    title={`Success: ${metric.success.toFixed(1)}%`}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{metric.time}</div>
              </div>
            ))}
          </div>
          
          {/* Legend & Current Stats */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-400 rounded"></div>
                <span className="text-gray-400">Tasks/5min</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded"></div>
                <span className="text-gray-400">Success Rate</span>
              </div>
            </div>
            
            <div className="pt-3 border-t border-gray-600/30">
              <div className="grid grid-cols-3 gap-3 text-center text-sm">
                <div>
                  <div className="text-cyan-400 font-bold">{agentData.performanceMetrics[agentData.performanceMetrics.length - 1]?.tasks || 0}</div>
                  <div className="text-gray-400">Current Tasks</div>
                </div>
                <div>
                  <div className="text-green-400 font-bold">{agentData.performanceMetrics[agentData.performanceMetrics.length - 1]?.success.toFixed(1) || 0}%</div>
                  <div className="text-gray-400">Success Rate</div>
                </div>
                <div>
                  <div className="text-purple-400 font-bold">{agentData.performanceMetrics[agentData.performanceMetrics.length - 1]?.response.toFixed(1) || 0}s</div>
                  <div className="text-gray-400">Response Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Types & Communication */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agent Types */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Agent Categories</h3>
          </div>
          <div className="space-y-3">
            {agentData.agentTypes.map((type, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{type.type}</div>
                  <div className={`text-xs px-2 py-1 rounded ${getStatusColor(type.status)}`}>
                    {type.status.toUpperCase()}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{type.count}</div>
                    <div className="text-gray-400">Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-400">{type.totalTasks}</div>
                    <div className="text-gray-400">Tasks</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">{type.avgSuccessRate.toFixed(1)}%</div>
                    <div className="text-gray-400">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-yellow-400">{type.avgResponseTime}</div>
                    <div className="text-gray-400">Avg Time</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Communication */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <MessageCircle className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Agent Communication</h3>
          </div>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {agentData.agentCommunication.map((comm, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-start space-x-2 mb-2">
                  {getCommunicationTypeIcon(comm.type)}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="text-cyan-400 text-sm font-medium">{comm.fromAgent}</div>
                      <div className="text-gray-500 text-xs">→</div>
                      <div className="text-blue-400 text-sm font-medium">{comm.toAgent}</div>
                      <div className={`text-xs px-1 py-0.5 rounded ${getPriorityColor(comm.priority)}`}>
                        {comm.priority.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="text-gray-300 text-sm">{comm.message}</div>
                    <div className="text-xs text-gray-500 mt-1">{comm.timestamp}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resource Allocation Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{agentData.resourceAllocation.totalCPU.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Total CPU</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{agentData.resourceAllocation.totalMemory.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Memory Usage</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{agentData.resourceAllocation.totalNetwork.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Network</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 backdrop-blur-sm rounded-lg border border-yellow-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-yellow-400/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">{agentData.resourceAllocation.totalStorage.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Storage</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">{agentData.resourceAllocation.agentLoadBalance.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Load Balance</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}