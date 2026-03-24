// Communication Hub - Real-Time Messaging & Collaboration Center
import { useState, useEffect } from 'react';
import { MessageCircle, Users, Phone, Video, Bell, Send, Mic, MicOff, Camera, CameraOff, Hash, AtSign, Globe } from 'lucide-react';

export default function CommunicationHub() {
  const [communicationData, setCommunicationData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    communicationStats: {
      totalChannels: 12,
      activeChannels: 8,
      onlineUsers: 23,
      messagesSent: 1847,
      videoCallsToday: 15,
      responseTime: 1.2,
      collaborationScore: 94.7
    },
    activeChannels: [
      {
        id: 'general',
        name: '#general',
        type: 'text',
        participants: 18,
        lastActivity: '2m ago',
        status: 'active',
        unreadCount: 3,
        priority: 'normal'
      },
      {
        id: 'mission-control',
        name: '#mission-control',
        type: 'text',
        participants: 8,
        lastActivity: '5m ago',
        status: 'active',
        unreadCount: 7,
        priority: 'high'
      },
      {
        id: 'development',
        name: '#development',
        type: 'text',
        participants: 12,
        lastActivity: '1m ago',
        status: 'active',
        unreadCount: 12,
        priority: 'high'
      },
      {
        id: 'ai-agents',
        name: '#ai-agents',
        type: 'text',
        participants: 6,
        lastActivity: '30s ago',
        status: 'active',
        unreadCount: 2,
        priority: 'normal'
      },
      {
        id: 'security-alerts',
        name: '#security-alerts',
        type: 'text',
        participants: 4,
        lastActivity: '10m ago',
        status: 'monitoring',
        unreadCount: 0,
        priority: 'critical'
      },
      {
        id: 'daily-standup',
        name: 'Daily Standup',
        type: 'video',
        participants: 15,
        lastActivity: 'in progress',
        status: 'live',
        unreadCount: 0,
        priority: 'high'
      }
    ],
    recentMessages: [
      {
        channel: '#mission-control',
        user: 'Aleksandra',
        message: 'Performance Optimization Center deployed successfully ✅',
        timestamp: '14:47',
        type: 'system',
        priority: 'high'
      },
      {
        channel: '#development',
        user: 'Daniel',
        message: 'Great work on the dashboard enhancements! 6 components in 32 minutes',
        timestamp: '14:45',
        type: 'user',
        priority: 'normal'
      },
      {
        channel: '#ai-agents',
        user: 'Content Analyzer',
        message: 'Instagram pipeline processing 3 new videos',
        timestamp: '14:44',
        type: 'agent',
        priority: 'normal'
      },
      {
        channel: '#general',
        user: 'System',
        message: 'All systems operational - 96.8% overall performance',
        timestamp: '14:42',
        type: 'system',
        priority: 'normal'
      },
      {
        channel: '#security-alerts',
        user: 'Security Monitor',
        message: 'Threat level: LOW - All security metrics within normal parameters',
        timestamp: '14:40',
        type: 'security',
        priority: 'low'
      },
      {
        channel: '#mission-control',
        user: 'Business Intelligence',
        message: 'Revenue metrics updated: $24,680 monthly revenue (+23.4%)',
        timestamp: '14:38',
        type: 'agent',
        priority: 'normal'
      }
    ],
    onlineUsers: [
      { name: 'Daniel', status: 'online', role: 'Owner', activity: 'Active', avatar: 'DF' },
      { name: 'Aleksandra', status: 'online', role: 'AI Assistant', activity: 'Mission Control', avatar: 'AL' },
      { name: 'Content Analyzer', status: 'busy', role: 'AI Agent', activity: 'Processing', avatar: 'CA' },
      { name: 'Security Monitor', status: 'online', role: 'AI Agent', activity: 'Monitoring', avatar: 'SM' },
      { name: 'Business Intelligence', status: 'online', role: 'AI Agent', activity: 'Analytics', avatar: 'BI' },
      { name: 'Performance Optimizer', status: 'online', role: 'AI Agent', activity: 'Optimizing', avatar: 'PO' },
      { name: 'Threat Detector', status: 'online', role: 'AI Agent', activity: 'Scanning', avatar: 'TD' }
    ],
    integrations: [
      { name: 'Telegram', status: 'connected', messageCount: 156, responseTime: '0.8s' },
      { name: 'WhatsApp', status: 'connected', messageCount: 89, responseTime: '1.2s' },
      { name: 'Discord', status: 'connected', messageCount: 234, responseTime: '0.5s' },
      { name: 'Slack', status: 'connected', messageCount: 67, responseTime: '1.1s' },
      { name: 'Email', status: 'connected', messageCount: 45, responseTime: '2.3s' },
      { name: 'SMS', status: 'connected', messageCount: 23, responseTime: '1.8s' }
    ],
    notifications: [
      {
        type: 'mention',
        channel: '#mission-control',
        user: 'Daniel',
        message: '@Aleksandra excellent dashboard work today!',
        timestamp: '14:48',
        priority: 'high'
      },
      {
        type: 'system',
        channel: 'System Alert',
        user: 'Performance Monitor',
        message: 'CPU optimization recommendation available',
        timestamp: '14:45',
        priority: 'medium'
      },
      {
        type: 'security',
        channel: '#security-alerts',
        user: 'Security System',
        message: 'Weekly security scan completed successfully',
        timestamp: '14:30',
        priority: 'low'
      }
    ],
    callActivity: {
      activeCall: {
        name: 'Daily Standup',
        participants: 15,
        duration: '23:45',
        status: 'in-progress',
        quality: 'HD',
        recording: true
      },
      scheduledCalls: [
        { name: 'Sprint Review', time: '15:30', participants: 12, type: 'video' },
        { name: 'Client Check-in', time: '16:00', participants: 4, type: 'video' },
        { name: 'Team Sync', time: '17:00', participants: 8, type: 'audio' }
      ]
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCommunicationData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        communicationStats: {
          ...prev.communicationStats,
          messagesSent: prev.communicationStats.messagesSent + Math.floor(Math.random() * 5),
          responseTime: Math.max(0.5, Math.min(3, prev.communicationStats.responseTime + (Math.random() - 0.5) * 0.3)),
          collaborationScore: Math.max(85, Math.min(99, prev.communicationStats.collaborationScore + (Math.random() - 0.5) * 2))
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'text-green-400 bg-green-400/20';
      case 'busy': return 'text-yellow-400 bg-yellow-400/20';
      case 'away': return 'text-orange-400 bg-orange-400/20';
      case 'offline': return 'text-gray-400 bg-gray-400/20';
      case 'active': return 'text-green-400 bg-green-400/20';
      case 'monitoring': return 'text-blue-400 bg-blue-400/20';
      case 'live': return 'text-red-400 bg-red-400/20';
      case 'connected': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-red-400 bg-red-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'normal': return 'text-blue-400 bg-blue-400/20';
      case 'low': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getMessageTypeIcon = (type) => {
    switch (type) {
      case 'user': return <MessageCircle className="w-4 h-4 text-blue-400" />;
      case 'agent': return <Users className="w-4 h-4 text-purple-400" />;
      case 'system': return <Bell className="w-4 h-4 text-green-400" />;
      case 'security': return <Bell className="w-4 h-4 text-red-400" />;
      default: return <MessageCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getChannelIcon = (type, status) => {
    if (type === 'video' && status === 'live') {
      return <Video className="w-4 h-4 text-red-400" />;
    }
    if (type === 'video') {
      return <Video className="w-4 h-4 text-blue-400" />;
    }
    return <Hash className="w-4 h-4 text-gray-400" />;
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Communication Hub</h1>
              <p className="text-indigo-300">Real-time messaging, collaboration & communication coordination</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{communicationData.currentTime}</div>
            <div className="text-indigo-300">Communication Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Communication Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-indigo-400 mr-2" />
                Online Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{communicationData.communicationStats.onlineUsers}</div>
            <div className="text-indigo-300 text-sm">{communicationData.communicationStats.activeChannels} active channels</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MessageCircle className="w-5 h-5 text-green-400 mr-2" />
                Messages Today
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{communicationData.communicationStats.messagesSent}</div>
            <div className="text-green-300 text-sm">Avg response: {communicationData.communicationStats.responseTime.toFixed(1)}s</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Video className="w-5 h-5 text-purple-400 mr-2" />
                Video Calls
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{communicationData.communicationStats.videoCallsToday}</div>
            <div className="text-purple-300 text-sm">Today's meetings</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Bell className="w-5 h-5 text-orange-400 mr-2" />
                Collaboration Score
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{communicationData.communicationStats.collaborationScore.toFixed(1)}%</div>
            <div className="text-orange-300 text-sm">Team effectiveness</div>
          </div>
        </div>

        {/* Active Channels & Recent Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Hash className="w-5 h-5 text-indigo-400 mr-2" />
              Active Channels
            </h3>
            <div className="space-y-3">
              {communicationData.activeChannels.map((channel, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getChannelIcon(channel.type, channel.status)}
                      <h4 className="font-medium text-white text-sm">{channel.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(channel.status)}`}>
                        {channel.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(channel.priority)}`}>
                        {channel.priority}
                      </span>
                    </div>
                    {channel.unreadCount > 0 && (
                      <div className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                        {channel.unreadCount}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{channel.participants} participants</span>
                    <span>{channel.lastActivity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <MessageCircle className="w-5 h-5 text-green-400 mr-2" />
              Recent Messages
            </h3>
            <div className="space-y-3">
              {communicationData.recentMessages.map((message, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 flex items-start space-x-3">
                  {getMessageTypeIcon(message.type)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-medium text-sm">{message.user}</span>
                        <span className="text-slate-400 text-xs">{message.channel}</span>
                      </div>
                      <span className="text-slate-400 text-xs">{message.timestamp}</span>
                    </div>
                    <div className="text-slate-300 text-sm">{message.message}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Online Users & Integrations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Online Team Members
            </h3>
            <div className="space-y-3">
              {communicationData.onlineUsers.map((user, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-700/30">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                    {user.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{user.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </div>
                    <div className="text-slate-400 text-xs">{user.role} • {user.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Globe className="w-5 h-5 text-cyan-400 mr-2" />
              Communication Integrations
            </h3>
            <div className="space-y-3">
              {communicationData.integrations.map((integration, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-white text-sm">{integration.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(integration.status)}`}>
                        {integration.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>{integration.messageCount} messages</span>
                    <span>Avg response: {integration.responseTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Active Call & Notifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Video className="w-5 h-5 text-red-400 mr-2" />
              Active Call
            </h3>
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30 mb-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white">{communicationData.callActivity.activeCall.name}</h4>
                <div className="flex items-center space-x-2">
                  <span className="text-red-400 text-sm animate-pulse">● LIVE</span>
                  {communicationData.callActivity.activeCall.recording && (
                    <span className="text-purple-400 text-xs">REC</span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-slate-400">Duration:</span>
                  <span className="text-cyan-400 ml-2">{communicationData.callActivity.activeCall.duration}</span>
                </div>
                <div>
                  <span className="text-slate-400">Participants:</span>
                  <span className="text-green-400 ml-2">{communicationData.callActivity.activeCall.participants}</span>
                </div>
                <div>
                  <span className="text-slate-400">Quality:</span>
                  <span className="text-purple-400 ml-2">{communicationData.callActivity.activeCall.quality}</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-white text-sm mb-3">Upcoming Calls</h4>
              <div className="space-y-2">
                {communicationData.callActivity.scheduledCalls.map((call, index) => (
                  <div key={index} className="flex items-center justify-between text-sm bg-slate-700/20 rounded p-2">
                    <span className="text-white">{call.name}</span>
                    <div className="flex items-center space-x-2 text-slate-400">
                      <span>{call.time}</span>
                      <span>•</span>
                      <span>{call.participants} people</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Bell className="w-5 h-5 text-orange-400 mr-2" />
              Recent Notifications
            </h3>
            <div className="space-y-3">
              {communicationData.notifications.map((notification, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                        {notification.type}
                      </span>
                      <span className="text-white font-medium text-sm">{notification.user}</span>
                    </div>
                    <span className="text-slate-400 text-xs">{notification.timestamp}</span>
                  </div>
                  <div className="text-slate-300 text-sm">{notification.message}</div>
                  <div className="text-slate-400 text-xs mt-1">{notification.channel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Communication Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AtSign className="w-5 h-5 text-indigo-400 mr-2" />
            Communication Performance Metrics
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{communicationData.communicationStats.responseTime.toFixed(1)}s</div>
              <div className="text-slate-400 text-sm mb-3">Average Response Time</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-300"
                  style={{ width: `${Math.max(0, 100 - (communicationData.communicationStats.responseTime * 20))}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{communicationData.communicationStats.collaborationScore.toFixed(1)}%</div>
              <div className="text-slate-400 text-sm mb-3">Collaboration Score</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${communicationData.communicationStats.collaborationScore}%` }}
                ></div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">{Math.round((communicationData.communicationStats.onlineUsers / communicationData.communicationStats.totalChannels) * 100)}%</div>
              <div className="text-slate-400 text-sm mb-3">Channel Engagement</div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300"
                  style={{ width: `${(communicationData.communicationStats.onlineUsers / communicationData.communicationStats.totalChannels) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}