// 🤖 Aleksandra AI Agent Monitoring System v3.0
// Real-time Instagram Content Processing & Agent Performance Dashboard
import { useState, useEffect } from 'react';
import { Activity, Brain, Instagram, Mic, Users, Zap, FileText, Clock, Target, TrendingUp, AlertCircle, CheckCircle, Database, Cpu, MemoryStick } from 'lucide-react';

export default function AleksandraAgentMonitor() {
  const [agentMetrics, setAgentMetrics] = useState({
    contentProcessing: {
      videosToday: 23,
      transcriptionsCompleted: 18,
      assemblyAILatency: 342,
      processingQueue: 5,
      successRate: 94.7,
      avgProcessingTime: '2m 34s'
    },
    agentPerformance: {
      tasksCompleted: 156,
      activeTasks: 8,
      avgResponseTime: 1.2,
      errorRate: 2.3,
      learningProgress: 97.8,
      autonomyLevel: 94.1
    },
    systemHealth: {
      cpuUsage: 23.5,
      memoryUsage: 67.2,
      apiQuotaUsed: 34.1,
      tokensBurned: 28743,
      costToday: 12.47,
      uptime: '99.7%'
    },
    instagramPipeline: {
      contentModeled: 34,
      trendsAnalyzed: 12,
      carouselsDrafted: 8,
      scriptsGenerated: 15,
      outreachMessages: 25,
      responseRate: 18.3
    }
  });

  const [realtimeActivity, setRealtimeActivity] = useState([
    { time: '16:02:15', agent: 'Content Processor', action: 'Processing IG video transcript', status: 'active', type: 'processing' },
    { time: '16:01:58', agent: 'Research Assistant', action: 'Analyzing competitor content', status: 'completed', type: 'research' },
    { time: '16:01:42', agent: 'Outreach Manager', action: 'LinkedIn connection sent to CMO', status: 'active', type: 'outreach' },
    { time: '16:01:23', agent: 'Content Creator', action: 'Generated carousel script', status: 'completed', type: 'creation' },
    { time: '16:00:56', agent: 'Infrastructure Monitor', action: 'Assembly AI health check', status: 'completed', type: 'monitoring' },
    { time: '16:00:31', agent: 'Analytics Engine', action: 'Processing engagement metrics', status: 'active', type: 'analytics' }
  ]);

  const [alertsAndInsights, setAlertsAndInsights] = useState([
    { type: 'success', message: 'Instagram processing pipeline operating at 94.7% efficiency', priority: 'normal' },
    { type: 'warning', message: 'Assembly AI API latency increased by 23% in last hour', priority: 'medium' },
    { type: 'info', message: '5 new content opportunities detected from trend analysis', priority: 'low' },
    { type: 'success', message: 'LinkedIn outreach response rate up 12% this week', priority: 'high' }
  ]);

  const agentTypes = [
    {
      name: 'Content Processor',
      status: 'active',
      tasks: 3,
      performance: 96.2,
      icon: <Instagram className="w-5 h-5" />,
      color: 'text-pink-400',
      specialty: 'Instagram video analysis & transcription'
    },
    {
      name: 'Research Assistant',
      status: 'active',
      tasks: 2,
      performance: 98.7,
      icon: <Brain className="w-5 h-5" />,
      color: 'text-purple-400',
      specialty: 'Market research & competitor analysis'
    },
    {
      name: 'Content Creator',
      status: 'standby',
      tasks: 1,
      performance: 94.3,
      icon: <FileText className="w-5 h-5" />,
      color: 'text-blue-400',
      specialty: 'Script writing & carousel creation'
    },
    {
      name: 'Outreach Manager',
      status: 'active',
      tasks: 4,
      performance: 91.8,
      icon: <Users className="w-5 h-5" />,
      color: 'text-green-400',
      specialty: 'LinkedIn & cold outreach automation'
    },
    {
      name: 'Analytics Engine',
      status: 'active',
      tasks: 2,
      performance: 99.1,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-yellow-400',
      specialty: 'Performance tracking & optimization'
    },
    {
      name: 'Infrastructure Monitor',
      status: 'active',
      tasks: 1,
      performance: 97.5,
      icon: <Activity className="w-5 h-5" />,
      color: 'text-cyan-400',
      specialty: 'System health & API monitoring'
    }
  ];

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update metrics with realistic fluctuations
      setAgentMetrics(prev => ({
        ...prev,
        contentProcessing: {
          ...prev.contentProcessing,
          assemblyAILatency: Math.max(200, Math.min(800, prev.contentProcessing.assemblyAILatency + (Math.random() - 0.5) * 50)),
          processingQueue: Math.max(0, Math.min(15, prev.contentProcessing.processingQueue + Math.floor((Math.random() - 0.5) * 3)))
        },
        systemHealth: {
          ...prev.systemHealth,
          cpuUsage: Math.max(10, Math.min(95, prev.systemHealth.cpuUsage + (Math.random() - 0.5) * 5)),
          memoryUsage: Math.max(40, Math.min(90, prev.systemHealth.memoryUsage + (Math.random() - 0.5) * 3))
        }
      }));

      // Occasionally add new activity
      if (Math.random() < 0.3) {
        const activities = [
          'Processing new Instagram video',
          'Analyzing engagement patterns',
          'Generating content ideas',
          'Optimizing outreach templates',
          'Monitoring API performance',
          'Creating carousel graphics'
        ];
        const agents = ['Content Processor', 'Research Assistant', 'Content Creator', 'Outreach Manager', 'Analytics Engine'];
        
        setRealtimeActivity(prev => [
          {
            time: new Date().toLocaleTimeString(),
            agent: agents[Math.floor(Math.random() * agents.length)],
            action: activities[Math.floor(Math.random() * activities.length)],
            status: Math.random() > 0.3 ? 'active' : 'completed',
            type: ['processing', 'research', 'creation', 'outreach', 'analytics'][Math.floor(Math.random() * 5)]
          },
          ...prev.slice(0, 5)
        ]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Aleksandra AI Agent Monitor
              </h1>
              <p className="text-gray-400">Instagram Content Processing & Agent Performance Dashboard</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Last Updated</div>
            <div className="text-lg font-mono">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Content Processing */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Instagram className="w-5 h-5 text-pink-400" />
              <span className="font-medium">Content Processing</span>
            </div>
            <div className="text-green-400 text-sm">94.7%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Videos Today</span>
              <span>{agentMetrics.contentProcessing.videosToday}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Transcriptions</span>
              <span>{agentMetrics.contentProcessing.transcriptionsCompleted}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Queue</span>
              <span className={agentMetrics.contentProcessing.processingQueue > 10 ? 'text-yellow-400' : 'text-green-400'}>
                {agentMetrics.contentProcessing.processingQueue}
              </span>
            </div>
          </div>
        </div>

        {/* Agent Performance */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Agent Performance</span>
            </div>
            <div className="text-green-400 text-sm">97.8%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Tasks Completed</span>
              <span>{agentMetrics.agentPerformance.tasksCompleted}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Active Tasks</span>
              <span>{agentMetrics.agentPerformance.activeTasks}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Error Rate</span>
              <span className="text-green-400">{agentMetrics.agentPerformance.errorRate}%</span>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">System Health</span>
            </div>
            <div className="text-green-400 text-sm">99.7%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">CPU Usage</span>
              <span className={agentMetrics.systemHealth.cpuUsage > 80 ? 'text-red-400' : 'text-green-400'}>
                {agentMetrics.systemHealth.cpuUsage.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Memory</span>
              <span className={agentMetrics.systemHealth.memoryUsage > 85 ? 'text-yellow-400' : 'text-green-400'}>
                {agentMetrics.systemHealth.memoryUsage.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Cost Today</span>
              <span>${agentMetrics.systemHealth.costToday.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Instagram Pipeline */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-pink-400" />
              <span className="font-medium">Instagram Pipeline</span>
            </div>
            <div className="text-green-400 text-sm">18.3%</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Content Modeled</span>
              <span>{agentMetrics.instagramPipeline.contentModeled}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Carousels</span>
              <span>{agentMetrics.instagramPipeline.carouselsDrafted}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Response Rate</span>
              <span className="text-green-400">{agentMetrics.instagramPipeline.responseRate}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Fleet Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Users className="w-5 h-5 text-blue-400" />
            <span>Agent Fleet Status</span>
          </h3>
          <div className="space-y-4">
            {agentTypes.map((agent, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`${agent.color}`}>
                    {agent.icon}
                  </div>
                  <div>
                    <div className="font-medium">{agent.name}</div>
                    <div className="text-sm text-gray-400">{agent.specialty}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      agent.status === 'active' ? 'bg-green-400' : 
                      agent.status === 'standby' ? 'bg-yellow-400' : 'bg-gray-400'
                    }`}></div>
                    <span className="text-sm capitalize">{agent.status}</span>
                  </div>
                  <div className="text-sm text-gray-400">{agent.tasks} tasks • {agent.performance}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Activity Feed */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
            <Activity className="w-5 h-5 text-green-400" />
            <span>Real-time Activity</span>
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {realtimeActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-700/30 rounded-lg">
                <div className="flex-shrink-0">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === 'active' ? 'bg-blue-400 animate-pulse' : 'bg-green-400'
                  }`}></div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium">{activity.agent}</div>
                  <div className="text-sm text-gray-400">{activity.action}</div>
                </div>
                <div className="text-xs text-gray-500 font-mono">
                  {activity.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts & Insights */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-yellow-400" />
          <span>Alerts & Insights</span>
        </h3>
        <div className="space-y-3">
          {alertsAndInsights.map((alert, index) => (
            <div key={index} className={`flex items-start space-x-3 p-4 rounded-lg border-l-4 ${
              alert.type === 'success' ? 'bg-green-900/20 border-green-400' :
              alert.type === 'warning' ? 'bg-yellow-900/20 border-yellow-400' :
              alert.type === 'error' ? 'bg-red-900/20 border-red-400' :
              'bg-blue-900/20 border-blue-400'
            }`}>
              <div className={`flex-shrink-0 mt-0.5 ${
                alert.type === 'success' ? 'text-green-400' :
                alert.type === 'warning' ? 'text-yellow-400' :
                alert.type === 'error' ? 'text-red-400' :
                'text-blue-400'
              }`}>
                {alert.type === 'success' ? <CheckCircle className="w-4 h-4" /> :
                 alert.type === 'warning' ? <AlertCircle className="w-4 h-4" /> :
                 alert.type === 'error' ? <AlertCircle className="w-4 h-4" /> :
                 <Activity className="w-4 h-4" />}
              </div>
              <div className="flex-1">
                <p className="text-sm">{alert.message}</p>
              </div>
              <div className={`text-xs px-2 py-1 rounded ${
                alert.priority === 'high' ? 'bg-red-900/50 text-red-300' :
                alert.priority === 'medium' ? 'bg-yellow-900/50 text-yellow-300' :
                'bg-gray-900/50 text-gray-300'
              }`}>
                {alert.priority}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}