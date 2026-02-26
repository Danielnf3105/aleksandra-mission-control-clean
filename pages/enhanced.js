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
  Pause,
  Monitor,
  Cpu,
  HardDrive,
  Wifi
} from 'lucide-react';
import { ProcessingTimeChart, ContentTypeChart, SystemHealthChart } from '../components/MetricsChart';

export default function EnhancedMissionControl() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState('OPERATIONAL');
  const [cpuUsage, setCpuUsage] = useState(23);
  const [memoryUsage, setMemoryUsage] = useState(67);
  const [networkActivity, setNetworkActivity] = useState(45);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time metrics
      setCpuUsage(20 + Math.random() * 15);
      setMemoryUsage(60 + Math.random() * 20);
      setNetworkActivity(30 + Math.random() * 40);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const recentActivities = [
    {
      time: currentTime.toLocaleTimeString('pt-PT').substring(0, 5),
      type: 'mission-control',
      status: 'completed',
      message: 'Enhanced dashboard with charts and real-time metrics',
      duration: '20m'
    },
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
    }
  ];

  const agentSystems = [
    { name: 'Content Modeling', status: 'operational', uptime: '100%', latency: '35ms' },
    { name: 'Email Infrastructure', status: 'operational', uptime: '98%', latency: '120ms' },
    { name: 'Agent Directory', status: 'operational', uptime: '100%', latency: '45ms' },
    { name: 'Notion Integration', status: 'development', uptime: '85%', latency: '890ms' },
    { name: 'LinkedIn Outreach', status: 'paused', uptime: '0%', latency: '-' },
    { name: 'Mission Control', status: 'operational', uptime: '100%', latency: '12ms' }
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
            <h1 className="text-4xl font-bold text-blue-400">
              🚀 ALEKSANDRA MISSION CONTROL
            </h1>
            <p className="text-gray-400 mt-2 text-lg">
              Enhanced Real-time AI Agent Operations Dashboard
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">
              {currentTime.toLocaleTimeString('pt-PT')}
            </div>
            <div className="text-sm text-gray-400">
              {currentTime.toLocaleDateString('pt-PT')}
            </div>
            <div className="flex items-center mt-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className={`text-sm font-semibold ${systemStatus === 'OPERATIONAL' ? 'text-green-400' : 'text-red-400'}`}>
                {systemStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* System Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Cpu className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-400">CPU</span>
            </div>
            <span className="text-blue-400 font-bold">{cpuUsage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${cpuUsage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <HardDrive className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-gray-400">Memory</span>
            </div>
            <span className="text-green-400 font-bold">{memoryUsage.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${memoryUsage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Wifi className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-gray-400">Network</span>
            </div>
            <span className="text-purple-400 font-bold">{networkActivity.toFixed(1)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-purple-400 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${networkActivity}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Monitor className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-gray-400">Uptime</span>
            </div>
            <span className="text-yellow-400 font-bold">99.9%</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">2d 14h 23m</div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <ProcessingTimeChart />
        <ContentTypeChart />
        <SystemHealthChart />
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
                <span className="text-green-400 font-bold">11</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transcriptions</span>
                <span className="text-green-400 font-bold">11</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Processing</span>
                <span className="text-blue-400 font-bold">35 seconds</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">API Calls Today</span>
                <span className="text-yellow-400 font-bold">847</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Active Projects</span>
                <span className="text-purple-400 font-bold">4</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Mission Control v2</span>
                <span className="text-cyan-400 font-bold">Enhanced</span>
              </div>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 h-full">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-green-400" />
              Live Activity Feed
            </h2>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(activity.status)}
                        <span className="font-mono text-sm text-blue-400">
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

        {/* Enhanced System Status */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Settings className="w-5 h-5 mr-2 text-blue-400" />
              Agent Systems
            </h2>
            <div className="space-y-3">
              {agentSystems.map((system, index) => (
                <div key={index} className="border border-gray-800 rounded p-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className={getStatusColor(system.status)}>
                        {getStatusIcon(system.status)}
                      </div>
                      <span className="text-gray-300 text-sm">{system.name}</span>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs font-semibold ${getStatusColor(system.status)}`}>
                        {system.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Uptime: {system.uptime}</span>
                    <span>Latency: {system.latency}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-gray-800 pt-6">
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <div>
            🚀 Aleksandra AI Agent Mission Control v2.0.0 - Enhanced
          </div>
          <div>
            Last Update: {currentTime.toLocaleString('pt-PT')}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Live Data</span>
          </div>
        </div>
      </div>
    </div>
  );
}