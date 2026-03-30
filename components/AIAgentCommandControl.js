import React, { useState, useEffect } from 'react';
import { Bot, Brain, MessageSquare, Zap, Clock, Target, Database, Network, Eye, TrendingUp, Activity } from 'lucide-react';

const AIAgentCommandControl = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [agentMetrics, setAgentMetrics] = useState({
    totalAgents: 8,
    activeAgents: 6,
    queuedTasks: 23,
    completedToday: 147,
    successRate: 94.7,
    avgResponseTime: 1.8,
    tokenUsage: 2847392,
    costToday: 18.45
  });

  const [agents, setAgents] = useState([
    { 
      id: 'aleksandra-main', 
      name: 'Aleksandra Primary', 
      status: 'active', 
      task: 'Mission Control Development',
      model: 'claude-sonnet-4',
      uptime: '3h 42m',
      tokensUsed: 524738,
      performance: 97.3
    },
    { 
      id: 'content-intel', 
      name: 'Content Intelligence', 
      status: 'active', 
      task: 'Instagram Video Analysis',
      model: 'claude-haiku-4',
      uptime: '2h 15m',
      tokensUsed: 389241,
      performance: 92.1
    },
    { 
      id: 'outreach-auto', 
      name: 'Outreach Automation', 
      status: 'standby', 
      task: 'LinkedIn Prospecting',
      model: 'claude-sonnet-4',
      uptime: '45m',
      tokensUsed: 156789,
      performance: 89.4
    },
    { 
      id: 'data-processor', 
      name: 'Data Processing', 
      status: 'active', 
      task: 'Lead Enrichment Pipeline',
      model: 'claude-haiku-4',
      uptime: '6h 12m',
      tokensUsed: 892456,
      performance: 95.8
    }
  ]);

  const [taskQueue, setTaskQueue] = useState([
    { id: 1, priority: 'high', task: 'Process Instagram engagement data', agent: 'content-intel', eta: '2m' },
    { id: 2, priority: 'medium', task: 'Generate outreach templates', agent: 'outreach-auto', eta: '8m' },
    { id: 3, priority: 'low', task: 'Update knowledge base', agent: 'data-processor', eta: '15m' },
    { id: 4, priority: 'high', task: 'Analyze competitor content', agent: 'content-intel', eta: '5m' }
  ]);

  const [conversations, setConversations] = useState([
    { agent: 'aleksandra-main', message: 'Mission Control dashboard enhanced with new components', timestamp: Date.now() - 30000 },
    { agent: 'content-intel', message: 'Processed 47 Instagram videos, 12 high-engagement detected', timestamp: Date.now() - 45000 },
    { agent: 'outreach-auto', message: 'LinkedIn connection rate: 23% (above average)', timestamp: Date.now() - 60000 },
    { agent: 'data-processor', message: 'Enriched 156 leads, 34 qualified prospects identified', timestamp: Date.now() - 120000 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      
      // Simulate real-time updates
      setAgentMetrics(prev => ({
        ...prev,
        tokenUsage: prev.tokenUsage + Math.floor(Math.random() * 1000),
        completedToday: prev.completedToday + (Math.random() > 0.8 ? 1 : 0),
        avgResponseTime: Math.max(0.8, Math.min(3.5, prev.avgResponseTime + (Math.random() - 0.5) * 0.3))
      }));

      // Update agent performance
      setAgents(prev => prev.map(agent => ({
        ...agent,
        tokensUsed: agent.tokensUsed + Math.floor(Math.random() * 100),
        performance: Math.max(85, Math.min(100, agent.performance + (Math.random() - 0.5) * 2))
      })));

      // Simulate task queue changes
      if (Math.random() > 0.7) {
        setTaskQueue(prev => prev.slice(1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'standby': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      case 'maintenance': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-900/20';
      case 'medium': return 'text-yellow-400 bg-yellow-900/20';
      case 'low': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-cyan-400">AI AGENT COMMAND & CONTROL</h1>
          <div className="text-sm text-gray-400">
            T+{Math.floor((Date.now() - timestamp) / 1000)}s | {new Date(timestamp).toLocaleTimeString()}
          </div>
        </div>

        {/* Top-level metrics */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900 p-4 rounded border border-cyan-700/30">
            <div className="flex items-center mb-2">
              <Bot className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-bold">AGENTS ONLINE</span>
            </div>
            <div className="text-2xl font-bold">{agentMetrics.activeAgents}/{agentMetrics.totalAgents}</div>
            <div className="text-xs text-gray-400">Multi-agent system</div>
          </div>

          <div className="bg-gray-900 p-4 rounded border border-green-700/30">
            <div className="flex items-center mb-2">
              <Target className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-bold">SUCCESS RATE</span>
            </div>
            <div className="text-2xl font-bold">{agentMetrics.successRate}%</div>
            <div className="text-xs text-gray-400">Task completion</div>
          </div>

          <div className="bg-gray-900 p-4 rounded border border-purple-700/30">
            <div className="flex items-center mb-2">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-bold">TOKENS/DAY</span>
            </div>
            <div className="text-2xl font-bold">{(agentMetrics.tokenUsage / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-gray-400">${agentMetrics.costToday.toFixed(2)} cost</div>
          </div>

          <div className="bg-gray-900 p-4 rounded border border-yellow-700/30">
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-bold">AVG RESPONSE</span>
            </div>
            <div className="text-2xl font-bold">{agentMetrics.avgResponseTime.toFixed(1)}s</div>
            <div className="text-xs text-gray-400">Latency optimal</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Agent Status Panel */}
          <div className="col-span-2 bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Activity className="w-5 h-5 mr-2 text-cyan-400" />
                AGENT DEPLOYMENT STATUS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {agents.map(agent => (
                <div key={agent.id} className="bg-gray-800 p-4 rounded">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <span className={`w-3 h-3 rounded-full mr-3 ${
                        agent.status === 'active' ? 'bg-green-400 animate-pulse' : 
                        agent.status === 'standby' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></span>
                      <div>
                        <div className="font-semibold text-white">{agent.name}</div>
                        <div className="text-sm text-gray-400">{agent.id}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm uppercase font-bold ${getStatusColor(agent.status)}`}>
                        {agent.status}
                      </div>
                      <div className="text-xs text-gray-400">Up: {agent.uptime}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400 mb-1">Current Task:</div>
                      <div className="text-white">{agent.task}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 mb-1">Model:</div>
                      <div className="text-blue-400">{agent.model}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-700">
                    <div className="text-xs text-gray-400">
                      Tokens: {(agent.tokensUsed / 1000).toFixed(0)}k
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-400 mr-2">Performance:</span>
                      <div className="w-16 bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full"
                          style={{ width: `${agent.performance}%` }}
                        ></div>
                      </div>
                      <span className="text-xs text-white ml-2">{agent.performance.toFixed(0)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Task Queue */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Database className="w-5 h-5 mr-2 text-yellow-400" />
                TASK EXECUTION QUEUE
              </h3>
              <div className="text-sm text-gray-400 mt-1">{taskQueue.length} pending tasks</div>
            </div>
            <div className="p-4 space-y-2 max-h-80 overflow-y-auto">
              {taskQueue.map(task => (
                <div key={task.id} className="bg-gray-800 p-3 rounded">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded text-xs uppercase font-bold ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                    <span className="text-xs text-gray-400">ETA {task.eta}</span>
                  </div>
                  <div className="text-sm text-white mb-1">{task.task}</div>
                  <div className="text-xs text-gray-400">→ {task.agent}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Communication Log */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <MessageSquare className="w-5 h-5 mr-2 text-green-400" />
              AGENT COMMUNICATION LOG
            </h3>
          </div>
          <div className="p-4 space-y-2 max-h-40 overflow-y-auto">
            {conversations.map((conv, index) => (
              <div key={index} className="flex items-start text-sm">
                <span className="text-blue-400 font-mono mr-2 min-w-0 flex-shrink-0">
                  [{new Date(conv.timestamp).toLocaleTimeString()}]
                </span>
                <span className="text-cyan-400 mr-2 min-w-0 flex-shrink-0">{conv.agent}:</span>
                <span className="text-gray-300">{conv.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentCommandControl;