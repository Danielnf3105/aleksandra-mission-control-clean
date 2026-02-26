// AgentCommunication.js - Inter-Agent Communication Network Visualizer
import { useState, useEffect } from 'react';

const AgentCommunication = () => {
  const [communications, setCommunications] = useState([
    { from: 'Content Strategist', to: 'Research Assistant', message: 'Analysis request: Instagram video #11', time: '18:47:23', type: 'task_request' },
    { from: 'Infrastructure Manager', to: 'Quality Assurance', message: 'Deployment status: Mission Control v3.0', time: '18:46:15', type: 'status_update' },
    { from: 'Quality Assurance', to: 'Content Strategist', message: 'Validation complete: Transcription pipeline', time: '18:45:42', type: 'validation' },
    { from: 'Research Assistant', to: 'Infrastructure Manager', message: 'Data gathered: AI agent monitoring systems', time: '18:44:33', type: 'data_transfer' },
    { from: 'Content Strategist', to: 'Infrastructure Manager', message: 'Resource request: Processing capacity', time: '18:43:18', type: 'resource_request' }
  ]);

  const [networkStats, setNetworkStats] = useState({
    totalMessages: 1247,
    activeConnections: 8,
    bandwidthUsage: 78.3,
    latency: 42
  });

  useEffect(() => {
    // Simulate real-time communication updates
    const interval = setInterval(() => {
      const agents = ['Content Strategist', 'Infrastructure Manager', 'Research Assistant', 'Quality Assurance', 'Communication Agent'];
      const messageTypes = ['task_request', 'status_update', 'validation', 'data_transfer', 'resource_request'];
      const messages = [
        'Processing Instagram video analysis',
        'System health check completed',
        'Knowledge base updated',
        'Performance metrics collected',
        'Task queue optimized',
        'Learning rate improvement detected',
        'Error pattern analysis complete',
        'Resource allocation updated'
      ];

      const newMessage = {
        from: agents[Math.floor(Math.random() * agents.length)],
        to: agents[Math.floor(Math.random() * agents.length)],
        message: messages[Math.floor(Math.random() * messages.length)],
        time: new Date().toLocaleTimeString(),
        type: messageTypes[Math.floor(Math.random() * messageTypes.length)]
      };

      // Prevent self-communication
      if (newMessage.from !== newMessage.to) {
        setCommunications(prev => [newMessage, ...prev.slice(0, 4)]);
        setNetworkStats(prev => ({
          totalMessages: prev.totalMessages + 1,
          activeConnections: Math.max(5, Math.min(12, prev.activeConnections + (Math.random() > 0.5 ? 1 : -1))),
          bandwidthUsage: Math.max(20, Math.min(95, prev.bandwidthUsage + (Math.random() - 0.5) * 10)),
          latency: Math.max(15, Math.min(120, prev.latency + (Math.random() - 0.5) * 20))
        }));
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getMessageTypeColor = (type) => {
    const colors = {
      task_request: '#3B82F6',
      status_update: '#10B981', 
      validation: '#F59E0B',
      data_transfer: '#8B5CF6',
      resource_request: '#EF4444'
    };
    return colors[type] || '#6B7280';
  };

  const getMessageTypeIcon = (type) => {
    const icons = {
      task_request: '📋',
      status_update: '✅',
      validation: '🔍',
      data_transfer: '📊',
      resource_request: '⚡'
    };
    return icons[type] || '💬';
  };

  return (
    <div className="space-y-6">
      {/* Network Statistics */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Total Messages</div>
          <div className="text-lg font-bold text-blue-400">{networkStats.totalMessages.toLocaleString()}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Active Connections</div>
          <div className="text-lg font-bold text-green-400">{networkStats.activeConnections}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Bandwidth Usage</div>
          <div className="text-lg font-bold text-yellow-400">{networkStats.bandwidthUsage.toFixed(1)}%</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Avg Latency</div>
          <div className="text-lg font-bold text-purple-400">{networkStats.latency.toFixed(0)}ms</div>
        </div>
      </div>

      {/* Communication Feed */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🌐 Agent Communication Network
            <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">Live</span>
          </h3>
        </div>
        <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
          {communications.map((comm, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700 rounded-lg">
              <div className="flex-shrink-0 text-lg">
                {getMessageTypeIcon(comm.type)}
              </div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm font-medium text-white">
                    <span style={{ color: getMessageTypeColor(comm.type) }}>{comm.from}</span>
                    <span className="text-gray-400 mx-2">→</span>
                    <span className="text-blue-300">{comm.to}</span>
                  </div>
                  <span className="text-xs text-gray-500">{comm.time}</span>
                </div>
                <p className="text-sm text-gray-300">{comm.message}</p>
                <div className="mt-1">
                  <span 
                    className="inline-block px-2 py-1 rounded text-xs font-medium"
                    style={{ 
                      backgroundColor: getMessageTypeColor(comm.type) + '20',
                      color: getMessageTypeColor(comm.type)
                    }}
                  >
                    {comm.type.replace('_', ' ')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Health Indicator */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-white font-medium">Network Health</h4>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-400">Optimal</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-gray-400 mb-1">Message Throughput</div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div className="bg-green-400 h-2 rounded-full" style={{ width: '87%' }}></div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Response Time</div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-400 mb-1">Error Rate</div>
            <div className="w-full bg-gray-600 rounded-full h-2">
              <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '8%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCommunication;