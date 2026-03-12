// Real-Time Agent Communication Network - Live agent messaging and coordination monitoring
import { useState, useEffect } from 'react';
import { MessageSquare, Users, Zap, Activity, Clock, CheckCircle, AlertTriangle, ArrowRight, Network, Send } from 'lucide-react';

export default function RealTimeAgentCommunication() {
  const [communicationData, setCommunicationData] = useState({
    activeAgents: [
      { id: 'aleksandra-main', name: 'Aleksandra Main', status: 'active', lastSeen: '2s ago', tasks: 3, messages: 24 },
      { id: 'content-processor', name: 'Content Processor', status: 'processing', lastSeen: '5s ago', tasks: 1, messages: 12 },
      { id: 'spec-ad-creator', name: 'Spec Ad Creator', status: 'idle', lastSeen: '2m ago', tasks: 0, messages: 8 },
      { id: 'linkedin-outreach', name: 'LinkedIn Outreach', status: 'active', lastSeen: '1s ago', tasks: 2, messages: 18 },
      { id: 'instagram-monitor', name: 'Instagram Monitor', status: 'monitoring', lastSeen: '10s ago', tasks: 1, messages: 15 },
      { id: 'system-orchestrator', name: 'System Orchestrator', status: 'coordinating', lastSeen: '3s ago', tasks: 4, messages: 31 }
    ],
    recentMessages: [
      { 
        id: 1, 
        from: 'aleksandra-main', 
        to: 'content-processor', 
        message: 'Priority task: Process latest Instagram video batch', 
        timestamp: '12:57:45',
        type: 'task-assignment',
        status: 'delivered'
      },
      { 
        id: 2, 
        from: 'content-processor', 
        to: 'aleksandra-main', 
        message: 'Video transcription completed - 94.7% accuracy achieved', 
        timestamp: '12:57:20',
        type: 'status-update',
        status: 'read'
      },
      { 
        id: 3, 
        from: 'system-orchestrator', 
        to: 'all-agents', 
        message: 'System health check initiated - all agents report status', 
        timestamp: '12:56:30',
        type: 'broadcast',
        status: 'delivered'
      },
      { 
        id: 4, 
        from: 'linkedin-outreach', 
        to: 'aleksandra-main', 
        message: 'Connection request sent to target prospect - awaiting response', 
        timestamp: '12:55:15',
        type: 'progress-report',
        status: 'read'
      },
      { 
        id: 5, 
        from: 'instagram-monitor', 
        to: 'content-processor', 
        message: 'New content detected: 3 videos queued for processing', 
        timestamp: '12:54:22',
        type: 'data-flow',
        status: 'processing'
      },
      { 
        id: 6, 
        from: 'aleksandra-main', 
        to: 'spec-ad-creator', 
        message: 'Standby mode activated - ready for next creative brief', 
        timestamp: '12:53:45',
        type: 'mode-change',
        status: 'acknowledged'
      }
    ],
    communicationMetrics: {
      totalMessages: 847,
      messagesPerMinute: 12.4,
      averageResponseTime: '1.8s',
      networkLatency: '23ms',
      messageDeliveryRate: 99.7,
      activeConversations: 8
    },
    networkTopology: [
      { from: 'aleksandra-main', to: 'content-processor', strength: 'high', latency: '15ms' },
      { from: 'aleksandra-main', to: 'linkedin-outreach', strength: 'high', latency: '18ms' },
      { from: 'aleksandra-main', to: 'system-orchestrator', strength: 'critical', latency: '12ms' },
      { from: 'content-processor', to: 'instagram-monitor', strength: 'medium', latency: '25ms' },
      { from: 'system-orchestrator', to: 'all-agents', strength: 'broadcast', latency: '20ms' }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time message updates
      setCommunicationData(prev => ({
        ...prev,
        communicationMetrics: {
          ...prev.communicationMetrics,
          messagesPerMinute: prev.communicationMetrics.messagesPerMinute + (Math.random() - 0.5) * 2,
          networkLatency: Math.max(10, Math.min(50, prev.communicationMetrics.networkLatency + (Math.random() - 0.5) * 5)) + 'ms',
          totalMessages: prev.communicationMetrics.totalMessages + Math.floor(Math.random() * 3)
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'processing': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'monitoring': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'coordinating': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'idle': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getMessageTypeIcon = (type) => {
    switch (type) {
      case 'task-assignment': return <Send className="w-4 h-4 text-orange-400" />;
      case 'status-update': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'broadcast': return <Network className="w-4 h-4 text-purple-400" />;
      case 'progress-report': return <Activity className="w-4 h-4 text-blue-400" />;
      case 'data-flow': return <ArrowRight className="w-4 h-4 text-cyan-400" />;
      case 'mode-change': return <Zap className="w-4 h-4 text-yellow-400" />;
      default: return <MessageSquare className="w-4 h-4 text-gray-400" />;
    }
  };

  const getMessageStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-green-400';
      case 'read': return 'text-blue-400';
      case 'processing': return 'text-yellow-400';
      case 'acknowledged': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getConnectionStrengthColor = (strength) => {
    switch (strength) {
      case 'critical': return 'border-red-400 bg-red-400/10';
      case 'high': return 'border-green-400 bg-green-400/10';
      case 'medium': return 'border-yellow-400 bg-yellow-400/10';
      case 'broadcast': return 'border-purple-400 bg-purple-400/10';
      default: return 'border-gray-400 bg-gray-400/10';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Network className="w-8 h-8 text-cyan-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Real-Time Agent Communication</h2>
            <p className="text-gray-400">Live agent network coordination and messaging</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{communicationData.activeAgents.length}</div>
            <div className="text-xs text-gray-400">Active Agents</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-cyan-400">{communicationData.communicationMetrics.messagesPerMinute.toFixed(1)}/min</div>
            <div className="text-xs text-gray-400">Message Rate</div>
          </div>
        </div>
      </div>

      {/* Communication Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-white">{communicationData.communicationMetrics.totalMessages.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Total Messages</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{communicationData.communicationMetrics.messagesPerMinute.toFixed(1)}</div>
          <div className="text-xs text-gray-400">Messages/min</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{communicationData.communicationMetrics.averageResponseTime}</div>
          <div className="text-xs text-gray-400">Avg Response</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{communicationData.communicationMetrics.networkLatency}</div>
          <div className="text-xs text-gray-400">Network Latency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{communicationData.communicationMetrics.messageDeliveryRate}%</div>
          <div className="text-xs text-gray-400">Delivery Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{communicationData.communicationMetrics.activeConversations}</div>
          <div className="text-xs text-gray-400">Active Chats</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Agents Panel */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Users className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Agent Network Status</h3>
          </div>
          <div className="space-y-3">
            {communicationData.activeAgents.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${agent.status === 'active' ? 'bg-green-400 animate-pulse' : agent.status === 'processing' ? 'bg-blue-400 animate-pulse' : agent.status === 'monitoring' ? 'bg-cyan-400 animate-pulse' : agent.status === 'coordinating' ? 'bg-purple-400 animate-pulse' : 'bg-gray-400'}`}></div>
                    <div className="text-white font-medium">{agent.name}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-sm font-bold text-cyan-400">{agent.tasks}</div>
                    <div className="text-xs text-gray-400">Tasks</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-blue-400">{agent.messages}</div>
                    <div className="text-xs text-gray-400">Messages</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(agent.status)}`}>
                    {agent.status.toUpperCase()}
                  </div>
                  <div className="text-xs text-gray-500">{agent.lastSeen}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Topology */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Network className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">Network Topology</h3>
          </div>
          <div className="space-y-3">
            {communicationData.networkTopology.map((connection, index) => (
              <div key={index} className={`p-3 rounded-lg border ${getConnectionStrengthColor(connection.strength)}`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-white font-medium">{connection.from}</div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="text-sm text-white font-medium">{connection.to}</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`text-xs px-2 py-1 rounded ${connection.strength === 'critical' ? 'bg-red-400/20 text-red-400' : connection.strength === 'high' ? 'bg-green-400/20 text-green-400' : connection.strength === 'medium' ? 'bg-yellow-400/20 text-yellow-400' : 'bg-purple-400/20 text-purple-400'}`}>
                      {connection.strength.toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-400">{connection.latency}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Real-Time Message Stream */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Live Message Stream</h3>
          <div className="ml-auto flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <div className="text-xs text-green-400">LIVE</div>
          </div>
        </div>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {communicationData.recentMessages.map((message, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    {getMessageTypeIcon(message.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="text-sm font-medium text-cyan-400">{message.from}</div>
                      <ArrowRight className="w-3 h-3 text-gray-500" />
                      <div className="text-sm font-medium text-blue-400">{message.to}</div>
                      <div className="text-xs text-gray-500">•</div>
                      <div className="text-xs text-gray-400 capitalize">{message.type.replace('-', ' ')}</div>
                    </div>
                    <div className="text-white text-sm mb-2">{message.message}</div>
                    <div className="flex items-center space-x-3">
                      <div className="text-xs text-gray-500">{message.timestamp}</div>
                      <div className={`text-xs ${getMessageStatusColor(message.status)}`}>
                        {message.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Communication Health Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{communicationData.communicationMetrics.messageDeliveryRate}%</div>
              <div className="text-sm text-gray-300">Message Delivery Success</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{communicationData.communicationMetrics.averageResponseTime}</div>
              <div className="text-sm text-gray-300">Average Response Time</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{communicationData.communicationMetrics.activeConversations}</div>
              <div className="text-sm text-gray-300">Active Conversations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}