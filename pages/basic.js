import { useState, useEffect } from 'react';
import { 
  Activity, 
  Brain, 
  Clock, 
  FileText, 
  MessageSquare, 
  Settings, 
  TrendingUp,
  Zap,
  Database,
  Globe,
  Users,
  CheckCircle,
  AlertCircle,
  PlayCircle,
  Pause
} from 'lucide-react';

export default function BasicMissionControl() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Live data - this would connect to real APIs in production
  const liveStats = {
    contentProcessed: 11,
    transcriptionsCompleted: 11,
    agentInfrastructureReady: true,
    apiCallsToday: 847,
    processingTimeAvg: '35 seconds',
    lastActivity: 'Audio transcription completed',
    activeProjects: 4
  };

  const recentActivities = [
    {
      time: '18:33',
      type: 'transcription',
      status: 'completed',
      message: 'Audio message transcribed via Assembly AI',
      duration: '12s'
    },
    {
      time: '17:33', 
      type: 'content',
      status: 'completed',
      message: 'Instagram video processed - Entry #11 added',
      duration: '35s'
    },
    {
      time: '16:45',
      type: 'infrastructure',
      status: 'completed', 
      message: 'Notion account creation attempted',
      duration: '15m'
    },
    {
      time: '16:29',
      type: 'setup',
      status: 'completed',
      message: 'Agent infrastructure setup completed',
      duration: '5m'
    },
    {
      time: '15:30',
      type: 'content',
      status: 'completed',
      message: 'Content library organized - 10 videos',
      duration: '45m'
    }
  ];

  const contentPipeline = [
    { stage: 'Instagram Download', status: 'ready', count: 0 },
    { stage: 'Assembly AI Processing', status: 'ready', count: 0 },
    { stage: 'Transcript Formatting', status: 'ready', count: 0 },
    { stage: 'Content Analysis', status: 'ready', count: 0 },
    { stage: 'Library Integration', status: 'ready', count: 0 }
  ];

  const agentSystems = [
    { name: 'Content Modeling', status: 'operational', uptime: '100%' },
    { name: 'Email Infrastructure', status: 'operational', uptime: '98%' },
    { name: 'Agent Directory', status: 'operational', uptime: '100%' },
    { name: 'Notion Integration', status: 'development', uptime: '85%' },
    { name: 'LinkedIn Outreach', status: 'paused', uptime: '0%' }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'operational': return 'text-green-400';
      case 'development': return 'text-yellow-400'; 
      case 'paused': return 'text-red-400';
      case 'completed': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'operational': return <CheckCircle className="w-4 h-4" />;
      case 'development': return <Settings className="w-4 h-4" />;
      case 'paused': return <Pause className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="border-b border-gray-800 pb-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-400">
              🤖 ALEKSANDRA MISSION CONTROL
            </h1>
            <p className="text-gray-400 mt-2">
              Real-time AI Agent Operations Dashboard
            </p>
          </div>
          <div className="text-right">
            <div className="text-xl font-mono">
              {currentTime.toLocaleTimeString('pt-PT')}
            </div>
            <div className="text-sm text-gray-400">
              {currentTime.toLocaleDateString('pt-PT')}
            </div>
            <div className={`text-sm font-semibold mt-1 ${systemStatus === 'OPERATIONAL' ? 'text-green-400' : 'text-red-400'}`}>
              STATUS: {systemStatus}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Stats */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
              Live Metrics
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Content Processed</span>
                <span className="text-green-400 font-bold">{liveStats.contentProcessed}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transcriptions</span>
                <span className="text-green-400 font-bold">{liveStats.transcriptionsCompleted}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Processing</span>
                <span className="text-blue-400 font-bold">{liveStats.processingTimeAvg}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">API Calls Today</span>
                <span className="text-yellow-400 font-bold">{liveStats.apiCallsToday}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Projects</span>
                <span className="text-purple-400 font-bold">{liveStats.activeProjects}</span>
              </div>
            </div>
          </div>

          {/* Content Pipeline */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mt-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-400" />
              Content Pipeline
            </h2>
            <div className="space-y-3">
              {contentPipeline.map((stage, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">{stage.stage}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 text-xs">{stage.count}</span>
                    <div className={`w-2 h-2 rounded-full ${
                      stage.status === 'ready' ? 'bg-green-400' : 
                      stage.status === 'processing' ? 'bg-yellow-400' : 'bg-gray-600'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 h-full">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-green-400" />
              Recent Activity
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(activity.status)}
                        <span className="font-mono text-sm text-gray-400">
                          {activity.time}
                        </span>
                        <span className="text-xs bg-gray-800 px-2 py-1 rounded">
                          {activity.type}
                        </span>
                      </div>
                      <p className="text-gray-300 mt-1 text-sm">
                        {activity.message}
                      </p>
                      <span className="text-xs text-gray-500">
                        {activity.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              Agent Systems
            </h2>
            <div className="space-y-3">
              {agentSystems.map((system, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className={getStatusColor(system.status)}>
                      {getStatusIcon(system.status)}
                    </div>
                    <span className="text-gray-300">{system.name}</span>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-semibold ${getStatusColor(system.status)}`}>
                      {system.status.toUpperCase()}
                    </div>
                    <div className="text-xs text-gray-500">
                      {system.uptime} uptime
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mt-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <PlayCircle className="w-5 h-5 mr-2 text-purple-400" />
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm transition-colors">
                Process Content
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded text-sm transition-colors">
                Create Agent
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded text-sm transition-colors">
                Check Status
              </button>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-3 rounded text-sm transition-colors">
                View Logs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-gray-800 pt-6">
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <div>
            🚀 Aleksandra AI Agent Mission Control v1.0.0
          </div>
          <div>
            Last Update: {currentTime.toLocaleString('pt-PT')}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live</span>
          </div>
        </div>
      </div>
    </div>
  );
}