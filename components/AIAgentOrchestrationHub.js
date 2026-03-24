// AI Agent Orchestration Hub - Advanced Agent Fleet Management
import { useState, useEffect } from 'react';
import { Bot, Users, Zap, Target, Activity, Clock, TrendingUp, AlertTriangle, CheckCircle, Cpu, Brain, Network } from 'lucide-react';

export default function AIAgentOrchestrationHub() {
  const [orchestrationData, setOrchestrationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    fleetOverview: {
      totalAgents: 8,
      activeAgents: 6,
      idleAgents: 2,
      busyAgents: 4,
      fleetEfficiency: 94.7,
      totalTasksCompleted: 1247,
      todayTasksCompleted: 67
    },
    activeAgents: [
      {
        id: 'agent_001',
        name: 'Aleksandra',
        type: 'Main Coordinator',
        status: 'ACTIVE',
        currentTask: 'Mission Control Enhancement',
        efficiency: 98.2,
        tasksCompleted: 247,
        uptime: '7d 14h',
        location: 'Mission Control',
        model: 'Claude Sonnet 3.5'
      },
      {
        id: 'agent_002', 
        name: 'Content Analyzer',
        type: 'Instagram Processor',
        status: 'PROCESSING',
        currentTask: 'Video Transcription Pipeline',
        efficiency: 96.8,
        tasksCompleted: 189,
        uptime: '3d 8h',
        location: 'Content Pipeline',
        model: 'AssemblyAI + GPT-4'
      },
      {
        id: 'agent_003',
        name: 'Outreach Specialist',
        type: 'LinkedIn Automation',
        status: 'ACTIVE',
        currentTask: 'Connection Requests',
        efficiency: 89.4,
        tasksCompleted: 156,
        uptime: '2d 12h',
        location: 'Social Media Hub',
        model: 'GPT-4 Turbo'
      },
      {
        id: 'agent_004',
        name: 'Data Analyst',
        type: 'Business Intelligence',
        status: 'ANALYZING',
        currentTask: 'Performance Metrics',
        efficiency: 93.7,
        tasksCompleted: 234,
        uptime: '5d 2h',
        location: 'Analytics Center',
        model: 'Claude Opus'
      },
      {
        id: 'agent_005',
        name: 'SEO Optimizer',
        type: 'Content Strategy',
        status: 'IDLE',
        currentTask: 'Standby Mode',
        efficiency: 87.2,
        tasksCompleted: 98,
        uptime: '1d 6h',
        location: 'Content Hub',
        model: 'GPT-4'
      },
      {
        id: 'agent_006',
        name: 'Research Assistant',
        type: 'Market Intelligence',
        status: 'RESEARCHING',
        currentTask: 'Competitor Analysis',
        efficiency: 91.5,
        tasksCompleted: 123,
        uptime: '4d 18h',
        location: 'Research Lab',
        model: 'Claude Sonnet'
      }
    ],
    taskQueue: [
      { id: 'task_001', priority: 'HIGH', description: 'Instagram content batch processing', assignedTo: 'agent_002', eta: '15min' },
      { id: 'task_002', priority: 'MEDIUM', description: 'LinkedIn profile research', assignedTo: 'agent_003', eta: '30min' },
      { id: 'task_003', priority: 'HIGH', description: 'Dashboard performance optimization', assignedTo: 'agent_001', eta: '45min' },
      { id: 'task_004', priority: 'LOW', description: 'Content calendar planning', assignedTo: 'agent_005', eta: '2h' }
    ],
    orchestrationMetrics: {
      taskDistributionEfficiency: 97.3,
      loadBalancingScore: 94.8,
      communicationLatency: 45, // ms
      errorRate: 1.8,
      automaticFailoverSuccess: 98.5,
      resourceUtilization: 89.2,
      scalingEvents: 3,
      totalApiCalls: 8947
    },
    agentCommunication: [
      { time: '11:08', from: 'Aleksandra', to: 'Content Analyzer', message: 'Priority boost for IG batch processing' },
      { time: '11:07', from: 'Data Analyst', to: 'Aleksandra', message: 'Performance metrics updated' },
      { time: '11:05', from: 'Research Assistant', to: 'Outreach Specialist', message: 'New prospect data ready' },
      { time: '11:02', from: 'Aleksandra', to: 'All Agents', message: 'Mission Control deployment successful' }
    ],
    systemHealth: {
      overallHealth: 96.4,
      networkConnectivity: 99.1,
      apiGatewayStatus: 'OPERATIONAL',
      databaseConnections: 'HEALTHY',
      messageQueueStatus: 'OPTIMAL',
      storageUtilization: 67.3,
      memoryUtilization: 78.9,
      cpuUtilization: 58.7
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOrchestrationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        fleetOverview: {
          ...prev.fleetOverview,
          fleetEfficiency: Math.max(90, Math.min(99, prev.fleetOverview.fleetEfficiency + (Math.random() - 0.5) * 2))
        },
        orchestrationMetrics: {
          ...prev.orchestrationMetrics,
          communicationLatency: Math.max(20, Math.min(80, prev.orchestrationMetrics.communicationLatency + (Math.random() - 0.5) * 10)),
          resourceUtilization: Math.max(75, Math.min(95, prev.orchestrationMetrics.resourceUtilization + (Math.random() - 0.5) * 3))
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'PROCESSING': return 'text-blue-400 bg-blue-400/20';
      case 'ANALYZING': return 'text-purple-400 bg-purple-400/20';
      case 'RESEARCHING': return 'text-orange-400 bg-orange-400/20';
      case 'IDLE': return 'text-gray-400 bg-gray-400/20';
      case 'OPERATIONAL': return 'text-green-400 bg-green-400/20';
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'OPTIMAL': return 'text-cyan-400 bg-cyan-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ACTIVE': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'PROCESSING': return <Activity className="w-4 h-4 text-blue-400 animate-pulse" />;
      case 'ANALYZING': return <Brain className="w-4 h-4 text-purple-400" />;
      case 'RESEARCHING': return <Target className="w-4 h-4 text-orange-400" />;
      case 'IDLE': return <Clock className="w-4 h-4 text-gray-400" />;
      default: return <Bot className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-cyan-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-xl">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">AI Agent Orchestration Hub</h1>
              <p className="text-indigo-300">Advanced fleet management, task orchestration & intelligence coordination</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{orchestrationData.currentTime}</div>
            <div className="text-indigo-300">Fleet Command Center</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Fleet Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-indigo-400 mr-2" />
                Active Agents
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{orchestrationData.fleetOverview.activeAgents}</div>
            <div className="text-indigo-300 text-sm">of {orchestrationData.fleetOverview.totalAgents} total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-green-400 mr-2" />
                Fleet Efficiency
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{orchestrationData.fleetOverview.fleetEfficiency}%</div>
            <div className="text-green-300 text-sm">Performance Score</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-cyan-400 mr-2" />
                Tasks Today
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{orchestrationData.fleetOverview.todayTasksCompleted}</div>
            <div className="text-cyan-300 text-sm">Completed</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                Total Tasks
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{orchestrationData.fleetOverview.totalTasksCompleted}</div>
            <div className="text-purple-300 text-sm">All-time</div>
          </div>
        </div>

        {/* Active Agents Grid */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Bot className="w-5 h-5 text-indigo-400 mr-2" />
            Active Agent Fleet
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {orchestrationData.activeAgents.map((agent, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(agent.status)}
                    <h4 className="font-medium text-white">{agent.name}</h4>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(agent.status)}`}>
                    {agent.status}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Type:</span>
                    <span className="text-white">{agent.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current Task:</span>
                    <span className="text-indigo-300 text-xs">{agent.currentTask}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Efficiency:</span>
                    <span className="text-green-400">{agent.efficiency}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Completed:</span>
                    <span className="text-white">{agent.tasksCompleted}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Uptime:</span>
                    <span className="text-cyan-400">{agent.uptime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Model:</span>
                    <span className="text-purple-300 text-xs">{agent.model}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Queue & Communication */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-orange-400 mr-2" />
              Active Task Queue
            </h3>
            <div className="space-y-3">
              {orchestrationData.taskQueue.map((task, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className="text-slate-400 text-xs">ETA: {task.eta}</span>
                  </div>
                  <div className="text-white text-sm mb-1">{task.description}</div>
                  <div className="text-indigo-400 text-xs">Assigned to: {task.assignedTo}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Network className="w-5 h-5 text-cyan-400 mr-2" />
              Agent Communication
            </h3>
            <div className="space-y-3">
              {orchestrationData.agentCommunication.map((comm, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-indigo-400 text-sm font-medium">{comm.from} → {comm.to}</div>
                    <span className="text-slate-400 text-xs">{comm.time}</span>
                  </div>
                  <div className="text-white text-sm">{comm.message}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Health & Orchestration Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cpu className="w-5 h-5 text-green-400 mr-2" />
              System Health
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Overall Health</span>
                <span className="text-green-400 font-medium">{orchestrationData.systemHealth.overallHealth}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Network Connectivity</span>
                <span className="text-green-400 font-medium">{orchestrationData.systemHealth.networkConnectivity}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">API Gateway</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(orchestrationData.systemHealth.apiGatewayStatus)}`}>
                  {orchestrationData.systemHealth.apiGatewayStatus}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Database Connections</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(orchestrationData.systemHealth.databaseConnections)}`}>
                  {orchestrationData.systemHealth.databaseConnections}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Message Queue</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(orchestrationData.systemHealth.messageQueueStatus)}`}>
                  {orchestrationData.systemHealth.messageQueueStatus}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              Orchestration Metrics
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Task Distribution</span>
                <span className="text-purple-400 font-medium">{orchestrationData.orchestrationMetrics.taskDistributionEfficiency}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Load Balancing</span>
                <span className="text-cyan-400 font-medium">{orchestrationData.orchestrationMetrics.loadBalancingScore}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Communication Latency</span>
                <span className="text-indigo-400 font-medium">{orchestrationData.orchestrationMetrics.communicationLatency}ms</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Error Rate</span>
                <span className="text-yellow-400 font-medium">{orchestrationData.orchestrationMetrics.errorRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Auto Failover Success</span>
                <span className="text-green-400 font-medium">{orchestrationData.orchestrationMetrics.automaticFailoverSuccess}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Resource Utilization Visualization */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-indigo-400 mr-2" />
            Fleet Resource Utilization
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-2">{orchestrationData.systemHealth.cpuUtilization}%</div>
              <div className="text-slate-400 text-sm mb-3">CPU Usage</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                  style={{ width: `${orchestrationData.systemHealth.cpuUtilization}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">{orchestrationData.systemHealth.memoryUtilization}%</div>
              <div className="text-slate-400 text-sm mb-3">Memory Usage</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${orchestrationData.systemHealth.memoryUtilization}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">{orchestrationData.systemHealth.storageUtilization}%</div>
              <div className="text-slate-400 text-sm mb-3">Storage Usage</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-300"
                  style={{ width: `${orchestrationData.systemHealth.storageUtilization}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}