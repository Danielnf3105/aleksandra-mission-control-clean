import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, LineChart, Line } from 'recharts';
import { Bot, Heart, Zap, Clock, CheckCircle, XCircle, Play, Pause, RotateCcw, Send, Eye } from 'lucide-react';

const AgentLifecycleCenter = () => {
  const [agents, setAgents] = useState([
    {
      id: 'main',
      name: 'Aleksandra Main',
      status: 'active',
      workspace: 'workspace',
      model: 'claude-sonnet-4',
      lastHeartbeat: new Date().toISOString(),
      tokensUsed: 45670,
      cost: 18.25,
      uptime: 142560, // seconds
      sessions: 8,
      emoji: '🤖',
      color: '#3B82F6'
    },
    {
      id: 'content-processor',
      name: 'Content Processor',
      status: 'active',
      workspace: 'workspace-content',
      model: 'claude-haiku-4',
      lastHeartbeat: new Date(Date.now() - 45000).toISOString(),
      tokensUsed: 28340,
      cost: 5.67,
      uptime: 89430,
      sessions: 12,
      emoji: '📝',
      color: '#10B981'
    },
    {
      id: 'analytics-agent',
      name: 'Analytics Agent',
      status: 'sleeping',
      workspace: 'workspace-analytics',
      model: 'claude-sonnet-4',
      lastHeartbeat: new Date(Date.now() - 300000).toISOString(),
      tokensUsed: 15890,
      cost: 6.34,
      uptime: 67200,
      sessions: 3,
      emoji: '📊',
      color: '#8B5CF6'
    }
  ]);

  const [selectedAgent, setSelectedAgent] = useState(null);
  const [agentHistory, setAgentHistory] = useState([]);
  const [fleetMetrics, setFleetMetrics] = useState({});

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update agent heartbeats and metrics
      setAgents(prev => prev.map(agent => {
        const timeSinceHeartbeat = Date.now() - new Date(agent.lastHeartbeat).getTime();
        let newStatus = agent.status;
        
        if (agent.status === 'active' && Math.random() > 0.95) {
          // Occasionally update heartbeat for active agents
          return {
            ...agent,
            lastHeartbeat: new Date().toISOString(),
            tokensUsed: agent.tokensUsed + Math.floor(Math.random() * 100),
            cost: agent.cost + (Math.random() * 0.5),
            uptime: agent.uptime + 5,
            sessions: agent.sessions + (Math.random() > 0.8 ? 1 : 0)
          };
        }
        
        return {
          ...agent,
          status: newStatus,
          uptime: newStatus === 'active' ? agent.uptime + 5 : agent.uptime
        };
      }));

      // Update fleet metrics
      setFleetMetrics({
        totalAgents: agents.length,
        activeAgents: agents.filter(a => a.status === 'active').length,
        sleepingAgents: agents.filter(a => a.status === 'sleeping').length,
        errorAgents: agents.filter(a => a.status === 'error').length,
        totalTokens: agents.reduce((sum, a) => sum + a.tokensUsed, 0),
        totalCost: agents.reduce((sum, a) => sum + a.cost, 0),
        totalUptime: agents.reduce((sum, a) => sum + a.uptime, 0)
      });

      // Add to historical data
      const timestamp = new Date().toLocaleTimeString();
      setAgentHistory(prev => [...prev, {
        time: timestamp,
        active: agents.filter(a => a.status === 'active').length,
        sleeping: agents.filter(a => a.status === 'sleeping').length,
        error: agents.filter(a => a.status === 'error').length,
        totalSessions: agents.reduce((sum, a) => sum + a.sessions, 0)
      }].slice(-20));
    }, 5000);

    return () => clearInterval(interval);
  }, [agents]);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'sleeping': return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-400" />;
      default: return <Clock className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'sleeping': return '#F59E0B';
      case 'error': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const handleAgentAction = (agentId, action) => {
    setAgents(prev => prev.map(agent => {
      if (agent.id !== agentId) return agent;
      
      switch (action) {
        case 'wake':
          return { ...agent, status: 'active', lastHeartbeat: new Date().toISOString() };
        case 'pause':
          return { ...agent, status: 'sleeping' };
        case 'restart':
          return { ...agent, status: 'active', sessions: 0, uptime: 0 };
        default:
          return agent;
      }
    }));
  };

  const statusDistribution = [
    { name: 'Active', value: agents.filter(a => a.status === 'active').length, color: '#10B981' },
    { name: 'Sleeping', value: agents.filter(a => a.status === 'sleeping').length, color: '#F59E0B' },
    { name: 'Error', value: agents.filter(a => a.status === 'error').length, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Bot className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">AGENT LIFECYCLE CENTER</h1>
            <p className="text-gray-400">Agent fleet management, monitoring, and orchestration</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{fleetMetrics.activeAgents || 0}</div>
            <div className="text-xs text-gray-400">ACTIVE</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{fleetMetrics.totalAgents || 0}</div>
            <div className="text-xs text-gray-400">TOTAL</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">${(fleetMetrics.totalCost || 0).toFixed(2)}</div>
            <div className="text-xs text-gray-400">COST</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Agent Fleet Overview */}
        <div className="col-span-2 bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Bot className="w-5 h-5 mr-2 text-green-400" />
            AGENT FLEET STATUS
          </h3>
          <div className="space-y-3">
            {agents.map(agent => (
              <div 
                key={agent.id} 
                className={`p-4 bg-gray-800 rounded-lg border-l-4 cursor-pointer hover:bg-gray-700 transition-all ${
                  selectedAgent?.id === agent.id ? 'ring-2 ring-blue-400' : ''
                }`}
                style={{ borderLeftColor: getStatusColor(agent.status) }}
                onClick={() => setSelectedAgent(agent)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{agent.emoji}</span>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-semibold">{agent.name}</span>
                        {getStatusIcon(agent.status)}
                      </div>
                      <div className="text-sm text-gray-400">
                        {agent.workspace} • {agent.model}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-white font-semibold">{agent.tokensUsed.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">TOKENS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold">${agent.cost.toFixed(2)}</div>
                      <div className="text-xs text-gray-400">COST</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold">{formatUptime(agent.uptime)}</div>
                      <div className="text-xs text-gray-400">UPTIME</div>
                    </div>
                    <div className="flex space-x-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleAgentAction(agent.id, 'wake'); }}
                        className="p-1 hover:bg-gray-600 rounded text-green-400"
                        title="Wake Agent"
                      >
                        <Play className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleAgentAction(agent.id, 'pause'); }}
                        className="p-1 hover:bg-gray-600 rounded text-yellow-400"
                        title="Pause Agent"
                      >
                        <Pause className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleAgentAction(agent.id, 'restart'); }}
                        className="p-1 hover:bg-gray-600 rounded text-blue-400"
                        title="Restart Agent"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-gray-400">
                      Last heartbeat: {new Date(agent.lastHeartbeat).toLocaleTimeString()}
                    </span>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold`}
                       style={{ backgroundColor: `${getStatusColor(agent.status)}20`, color: getStatusColor(agent.status) }}>
                    {agent.status.toUpperCase()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Distribution */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">FLEET DISTRIBUTION</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={statusDistribution}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {statusDistribution.map((entry, index) => (
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
          <div className="mt-4 space-y-2">
            {statusDistribution.map((status, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: status.color }}
                  />
                  <span className="text-gray-400 text-sm">{status.name}</span>
                </div>
                <span className="text-white font-semibold">{status.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Historical Charts */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Agent Status History */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">FLEET STATUS HISTORY</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={agentHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
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
              <Area 
                type="monotone" 
                dataKey="active" 
                stackId="1"
                stroke="#10B981" 
                fill="#10B981"
                fillOpacity={0.6}
                name="Active"
              />
              <Area 
                type="monotone" 
                dataKey="sleeping" 
                stackId="1"
                stroke="#F59E0B" 
                fill="#F59E0B"
                fillOpacity={0.6}
                name="Sleeping"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Session Activity */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">SESSION ACTIVITY</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={agentHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="totalSessions" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                name="Total Sessions"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Selected Agent Details */}
      {selectedAgent && (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white flex items-center">
              <span className="text-2xl mr-2">{selectedAgent.emoji}</span>
              {selectedAgent.name} - DETAILED VIEW
            </h3>
            <button 
              onClick={() => setSelectedAgent(null)}
              className="text-gray-400 hover:text-white"
            >
              ×
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-gray-400 text-sm">Current Status</div>
              <div className="flex items-center space-x-2 mt-1">
                {getStatusIcon(selectedAgent.status)}
                <span className="text-white font-semibold capitalize">{selectedAgent.status}</span>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-gray-400 text-sm">Model</div>
              <div className="text-white font-semibold mt-1">{selectedAgent.model}</div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-gray-400 text-sm">Workspace</div>
              <div className="text-white font-semibold mt-1">{selectedAgent.workspace}</div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="text-gray-400 text-sm">Last Heartbeat</div>
              <div className="text-white font-semibold mt-1">
                {new Date(selectedAgent.lastHeartbeat).toLocaleTimeString()}
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <button 
              onClick={() => handleAgentAction(selectedAgent.id, 'wake')}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              <Zap className="w-4 h-4" />
              <span>Wake Agent</span>
            </button>
            
            <button 
              onClick={() => handleAgentAction(selectedAgent.id, 'pause')}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors"
            >
              <Pause className="w-4 h-4" />
              <span>Pause Agent</span>
            </button>
            
            <button 
              onClick={() => handleAgentAction(selectedAgent.id, 'restart')}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Restart Agent</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentLifecycleCenter;