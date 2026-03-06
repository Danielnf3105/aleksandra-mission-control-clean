import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Bot, Heart, Zap, Clock, Settings, AlertCircle, CheckCircle, XCircle, Play, Pause, RotateCcw, Send, Eye } from 'lucide-react';

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
    },
    {
      id: 'research-agent',
      name: 'Research Agent',
      status: 'error',
      workspace: 'workspace-research',
      model: 'claude-opus-4',
      lastHeartbeat: new Date(Date.now() - 900000).toISOString(),
      tokensUsed: 67340,
      cost: 33.67,
      uptime: 0,
      sessions: 0,
      emoji: '🔬',
      color: '#EF4444'
    },
    {
      id: 'social-media-agent',
      name: 'Social Media Agent',
      status: 'initializing',
      workspace: 'workspace-social',
      model: 'claude-haiku-4',
      lastHeartbeat: new Date(Date.now() - 120000).toISOString(),
      tokensUsed: 5670,
      cost: 1.13,
      uptime: 1200,
      sessions: 1,
      emoji: '📱',
      color: '#F59E0B'
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
        
        // Update status based on heartbeat timing
        if (timeSinceHeartbeat > 600000) { // 10 minutes
          newStatus = 'error';
        } else if (timeSinceHeartbeat > 180000) { // 3 minutes
          newStatus = 'sleeping';
        } else if (agent.status === 'sleeping' && timeSinceHeartbeat < 60000) {
          newStatus = 'active';
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
      case 'active': return <CheckCircle className=\"w-4 h-4 text-green-400\" />;
      case 'sleeping': return <Clock className=\"w-4 h-4 text-yellow-400\" />;
      case 'error': return <XCircle className=\"w-4 h-4 text-red-400\" />;
      case 'initializing': return <RotateCcw className=\"w-4 h-4 text-blue-400 animate-spin\" />;
      default: return <AlertCircle className=\"w-4 h-4 text-gray-400\" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'sleeping': return '#F59E0B';
      case 'error': return '#EF4444';
      case 'initializing': return '#3B82F6';
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
          return { ...agent, status: 'initializing', sessions: 0, uptime: 0 };
        default:
          return agent;
      }
    }));
  };

  const statusDistribution = [
    { name: 'Active', value: agents.filter(a => a.status === 'active').length, color: '#10B981' },
    { name: 'Sleeping', value: agents.filter(a => a.status === 'sleeping').length, color: '#F59E0B' },
    { name: 'Error', value: agents.filter(a => a.status === 'error').length, color: '#EF4444' },
    { name: 'Initializing', value: agents.filter(a => a.status === 'initializing').length, color: '#3B82F6' }
  ];

  return (
    <div className=\"min-h-screen bg-black text-white p-4 font-mono\">
      {/* Header */}
      <div className=\"flex items-center justify-between mb-6 border-b border-gray-800 pb-4\">
        <div className=\"flex items-center space-x-3\">
          <Bot className=\"w-8 h-8 text-green-400\" />
          <div>
            <h1 className=\"text-2xl font-bold text-white\">AGENT LIFECYCLE CENTER</h1>
            <p className=\"text-gray-400\">Agent fleet management, monitoring, and orchestration</p>
          </div>
        </div>
        <div className=\"flex items-center space-x-6\">
          <div className=\"text-center\">
            <div className=\"text-2xl font-bold text-green-400\">{fleetMetrics.activeAgents || 0}</div>
            <div className=\"text-xs text-gray-400\">ACTIVE</div>
          </div>
          <div className=\"text-center\">
            <div className=\"text-2xl font-bold text-blue-400\">{fleetMetrics.totalAgents || 0}</div>
            <div className=\"text-xs text-gray-400\">TOTAL</div>
          </div>
          <div className=\"text-center\">
            <div className=\"text-2xl font-bold text-purple-400\">${(fleetMetrics.totalCost || 0).toFixed(2)}</div>
            <div className=\"text-xs text-gray-400\">COST</div>
          </div>
        </div>
      </div>

      <div className=\"grid grid-cols-3 gap-6 mb-6\">
        {/* Agent Fleet Overview */}
        <div className=\"col-span-2 bg-gray-900 border border-gray-700 rounded-lg p-4\">
          <h3 className=\"text-lg font-semibold text-white mb-4 flex items-center\">
            <Bot className=\"w-5 h-5 mr-2 text-green-400\" />
            AGENT FLEET STATUS
          </h3>
          <div className=\"space-y-3\">
            {agents.map(agent => (
              <div 
                key={agent.id} 
                className={`p-4 bg-gray-800 rounded-lg border-l-4 cursor-pointer hover:bg-gray-700 transition-all ${\n                  selectedAgent?.id === agent.id ? 'ring-2 ring-blue-400' : ''\n                }`}
                style={{ borderLeftColor: getStatusColor(agent.status) }}
                onClick={() => setSelectedAgent(agent)}
              >
                <div className=\"flex items-center justify-between\">
                  <div className=\"flex items-center space-x-3\">
                    <span className=\"text-2xl\">{agent.emoji}</span>
                    <div>
                      <div className=\"flex items-center space-x-2\">
                        <span className=\"text-white font-semibold\">{agent.name}</span>\n                        {getStatusIcon(agent.status)}\n                      </div>\n                      <div className=\"text-sm text-gray-400\">\n                        {agent.workspace} • {agent.model}\n                      </div>\n                    </div>\n                  </div>\n                  <div className=\"flex items-center space-x-6\">\n                    <div className=\"text-center\">\n                      <div className=\"text-white font-semibold\">{agent.tokensUsed.toLocaleString()}</div>\n                      <div className=\"text-xs text-gray-400\">TOKENS</div>\n                    </div>\n                    <div className=\"text-center\">\n                      <div className=\"text-white font-semibold\">${agent.cost.toFixed(2)}</div>\n                      <div className=\"text-xs text-gray-400\">COST</div>\n                    </div>\n                    <div className=\"text-center\">\n                      <div className=\"text-white font-semibold\">{formatUptime(agent.uptime)}</div>\n                      <div className=\"text-xs text-gray-400\">UPTIME</div>\n                    </div>\n                    <div className=\"text-center\">\n                      <div className=\"text-white font-semibold\">{agent.sessions}</div>\n                      <div className=\"text-xs text-gray-400\">SESSIONS</div>\n                    </div>\n                    <div className=\"flex space-x-2\">\n                      <button \n                        onClick={(e) => { e.stopPropagation(); handleAgentAction(agent.id, 'wake'); }}\n                        className=\"p-1 hover:bg-gray-600 rounded text-green-400\"\n                        title=\"Wake Agent\"\n                      >\n                        <Play className=\"w-4 h-4\" />\n                      </button>\n                      <button \n                        onClick={(e) => { e.stopPropagation(); handleAgentAction(agent.id, 'pause'); }}\n                        className=\"p-1 hover:bg-gray-600 rounded text-yellow-400\"\n                        title=\"Pause Agent\"\n                      >\n                        <Pause className=\"w-4 h-4\" />\n                      </button>\n                      <button \n                        onClick={(e) => { e.stopPropagation(); handleAgentAction(agent.id, 'restart'); }}\n                        className=\"p-1 hover:bg-gray-600 rounded text-blue-400\"\n                        title=\"Restart Agent\"\n                      >\n                        <RotateCcw className=\"w-4 h-4\" />\n                      </button>\n                    </div>\n                  </div>\n                </div>\n                <div className=\"mt-3 flex items-center justify-between text-sm\">\n                  <div className=\"flex items-center space-x-2\">\n                    <Heart className=\"w-4 h-4 text-red-400\" />\n                    <span className=\"text-gray-400\">\n                      Last heartbeat: {new Date(agent.lastHeartbeat).toLocaleTimeString()}\n                    </span>\n                  </div>\n                  <div className={`px-2 py-1 rounded-full text-xs font-semibold`}\n                       style={{ backgroundColor: `${getStatusColor(agent.status)}20`, color: getStatusColor(agent.status) }}>\n                    {agent.status.toUpperCase()}\n                  </div>\n                </div>\n              </div>\n            ))}\n          </div>\n        </div>\n\n        {/* Status Distribution */}\n        <div className=\"bg-gray-900 border border-gray-700 rounded-lg p-4\">\n          <h3 className=\"text-lg font-semibold text-white mb-4\">FLEET DISTRIBUTION</h3>\n          <ResponsiveContainer width=\"100%\" height={200}>\n            <PieChart>\n              <Pie\n                data={statusDistribution}\n                cx=\"50%\"\n                cy=\"50%\"\n                innerRadius={40}\n                outerRadius={80}\n                paddingAngle={5}\n                dataKey=\"value\"\n              >\n                {statusDistribution.map((entry, index) => (\n                  <Cell key={`cell-${index}`} fill={entry.color} />\n                ))}\n              </Pie>\n              <Tooltip \n                contentStyle={{ \n                  backgroundColor: '#1F2937', \n                  border: '1px solid #374151',\n                  borderRadius: '8px',\n                  color: '#fff'\n                }} \n              />\n            </PieChart>\n          </ResponsiveContainer>\n          <div className=\"mt-4 space-y-2\">\n            {statusDistribution.map((status, index) => (\n              <div key={index} className=\"flex items-center justify-between\">\n                <div className=\"flex items-center space-x-2\">\n                  <div \n                    className=\"w-3 h-3 rounded-full\" \n                    style={{ backgroundColor: status.color }}\n                  />\n                  <span className=\"text-gray-400 text-sm\">{status.name}</span>\n                </div>\n                <span className=\"text-white font-semibold\">{status.value}</span>\n              </div>\n            ))}\n          </div>\n        </div>\n      </div>\n\n      {/* Historical Charts */}\n      <div className=\"grid grid-cols-2 gap-6 mb-6\">\n        {/* Agent Status History */}\n        <div className=\"bg-gray-900 border border-gray-700 rounded-lg p-4\">\n          <h3 className=\"text-lg font-semibold text-white mb-4\">FLEET STATUS HISTORY</h3>\n          <ResponsiveContainer width=\"100%\" height={300}>\n            <AreaChart data={agentHistory}>\n              <CartesianGrid strokeDasharray=\"3 3\" stroke=\"#374151\" />\n              <XAxis dataKey=\"time\" stroke=\"#9CA3AF\" fontSize={12} />\n              <YAxis stroke=\"#9CA3AF\" fontSize={12} />\n              <Tooltip \n                contentStyle={{ \n                  backgroundColor: '#1F2937', \n                  border: '1px solid #374151',\n                  borderRadius: '8px',\n                  color: '#fff'\n                }} \n              />\n              <Legend />\n              <Area \n                type=\"monotone\" \n                dataKey=\"active\" \n                stackId=\"1\"\n                stroke=\"#10B981\" \n                fill=\"#10B981\"\n                fillOpacity={0.6}\n                name=\"Active\"\n              />\n              <Area \n                type=\"monotone\" \n                dataKey=\"sleeping\" \n                stackId=\"1\"\n                stroke=\"#F59E0B\" \n                fill=\"#F59E0B\"\n                fillOpacity={0.6}\n                name=\"Sleeping\"\n              />\n              <Area \n                type=\"monotone\" \n                dataKey=\"error\" \n                stackId=\"1\"\n                stroke=\"#EF4444\" \n                fill=\"#EF4444\"\n                fillOpacity={0.6}\n                name=\"Error\"\n              />\n            </AreaChart>\n          </ResponsiveContainer>\n        </div>\n\n        {/* Session Activity */}\n        <div className=\"bg-gray-900 border border-gray-700 rounded-lg p-4\">\n          <h3 className=\"text-lg font-semibold text-white mb-4\">SESSION ACTIVITY</h3>\n          <ResponsiveContainer width=\"100%\" height={300}>\n            <LineChart data={agentHistory}>\n              <CartesianGrid strokeDasharray=\"3 3\" stroke=\"#374151\" />\n              <XAxis dataKey=\"time\" stroke=\"#9CA3AF\" fontSize={12} />\n              <YAxis stroke=\"#9CA3AF\" fontSize={12} />\n              <Tooltip \n                contentStyle={{ \n                  backgroundColor: '#1F2937', \n                  border: '1px solid #374151',\n                  borderRadius: '8px',\n                  color: '#fff'\n                }} \n              />\n              <Line \n                type=\"monotone\" \n                dataKey=\"totalSessions\" \n                stroke=\"#8B5CF6\" \n                strokeWidth={3}\n                name=\"Total Sessions\"\n                dot={false}\n              />\n            </LineChart>\n          </ResponsiveContainer>\n        </div>\n      </div>\n\n      {/* Selected Agent Details */}\n      {selectedAgent && (\n        <div className=\"bg-gray-900 border border-gray-700 rounded-lg p-4\">\n          <div className=\"flex items-center justify-between mb-4\">\n            <h3 className=\"text-lg font-semibold text-white flex items-center\">\n              <span className=\"text-2xl mr-2\">{selectedAgent.emoji}</span>\n              {selectedAgent.name} - DETAILED VIEW\n            </h3>\n            <button \n              onClick={() => setSelectedAgent(null)}\n              className=\"text-gray-400 hover:text-white\"\n            >\n              ×\n            </button>\n          </div>\n          \n          <div className=\"grid grid-cols-4 gap-4\">\n            <div className=\"bg-gray-800 rounded-lg p-3\">\n              <div className=\"text-gray-400 text-sm\">Current Status</div>\n              <div className=\"flex items-center space-x-2 mt-1\">\n                {getStatusIcon(selectedAgent.status)}\n                <span className=\"text-white font-semibold capitalize\">{selectedAgent.status}</span>\n              </div>\n            </div>\n            \n            <div className=\"bg-gray-800 rounded-lg p-3\">\n              <div className=\"text-gray-400 text-sm\">Model</div>\n              <div className=\"text-white font-semibold mt-1\">{selectedAgent.model}</div>\n            </div>\n            \n            <div className=\"bg-gray-800 rounded-lg p-3\">\n              <div className=\"text-gray-400 text-sm\">Workspace</div>\n              <div className=\"text-white font-semibold mt-1\">{selectedAgent.workspace}</div>\n            </div>\n            \n            <div className=\"bg-gray-800 rounded-lg p-3\">\n              <div className=\"text-gray-400 text-sm\">Last Heartbeat</div>\n              <div className=\"text-white font-semibold mt-1\">\n                {new Date(selectedAgent.lastHeartbeat).toLocaleTimeString()}\n              </div>\n            </div>\n          </div>\n          \n          <div className=\"mt-4 flex space-x-4\">\n            <button \n              onClick={() => handleAgentAction(selectedAgent.id, 'wake')}\n              className=\"flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors\"\n            >\n              <Zap className=\"w-4 h-4\" />\n              <span>Wake Agent</span>\n            </button>\n            \n            <button \n              onClick={() => handleAgentAction(selectedAgent.id, 'pause')}\n              className=\"flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg transition-colors\"\n            >\n              <Pause className=\"w-4 h-4\" />\n              <span>Pause Agent</span>\n            </button>\n            \n            <button \n              onClick={() => handleAgentAction(selectedAgent.id, 'restart')}\n              className=\"flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors\"\n            >\n              <RotateCcw className=\"w-4 h-4\" />\n              <span>Restart Agent</span>\n            </button>\n            \n            <button className=\"flex items-center space-x-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors\">\n              <Send className=\"w-4 h-4\" />\n              <span>Send Message</span>\n            </button>\n            \n            <button className=\"flex items-center space-x-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg transition-colors\">\n              <Eye className=\"w-4 h-4\" />\n              <span>View Sessions</span>\n            </button>\n          </div>\n        </div>\n      )}\n    </div>\n  );\n};\n\nexport default AgentLifecycleCenter;"