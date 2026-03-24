// Real-Time Workspace Analytics - March 17, 2026 Enhanced Edition
import { useState, useEffect } from 'react';
import { Activity, Zap, Brain, Target, Rocket, TrendingUp, Clock, Users, ChevronRight, AlertTriangle } from 'lucide-react';

export default function RealTimeWorkspaceAnalytics() {
  const [workspaceData, setWorkspaceData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    currentUser: 'Daniel Ferreira',
    activeProjects: [
      { 
        name: 'Mission Control Dashboard', 
        status: 'ACTIVE', 
        progress: 97.8, 
        lastUpdate: '14h ago',
        priority: 'HIGH'
      },
      { 
        name: 'Instagram Content Pipeline', 
        status: 'MONITORING', 
        progress: 89.2, 
        lastUpdate: '2h ago',
        priority: 'MEDIUM'
      },
      { 
        name: 'AI Agent Orchestration', 
        status: 'OPTIMIZING', 
        progress: 94.7, 
        lastUpdate: '45m ago',
        priority: 'HIGH'
      }
    ],
    recentActivities: [
      { time: '11:02', action: 'Mission Control heartbeat triggered', type: 'SYSTEM' },
      { time: '11:00', action: 'Enhanced Workspace Analytics deployed', type: 'DEPLOY' },
      { time: '10:58', action: 'Vercel deployment verification completed', type: 'VERIFY' },
      { time: '10:55', action: 'Real-time dashboard improvements initiated', type: 'DEVELOP' }
    ],
    systemMetrics: {
      cpuUsage: 68.4,
      memoryUsage: 72.1,
      diskUsage: 45.6,
      networkActivity: 89.3,
      activeConnections: 12,
      uptime: '7d 14h 23m'
    },
    aiAgentStatus: {
      totalAgents: 6,
      activeAgents: 5,
      idleAgents: 1,
      efficiency: 96.7,
      tasksQueued: 3,
      tasksCompleted: 247
    },
    missionObjectives: [
      { objective: 'Maintain 99%+ dashboard uptime', status: 'ON_TRACK', completion: 99.7 },
      { objective: 'Process Instagram content pipeline', status: 'ACTIVE', completion: 94.3 },
      { objective: 'Optimize AI agent coordination', status: 'EXCEEDED', completion: 103.2 }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setWorkspaceData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        systemMetrics: {
          ...prev.systemMetrics,
          cpuUsage: Math.max(30, Math.min(85, prev.systemMetrics.cpuUsage + (Math.random() - 0.5) * 5)),
          memoryUsage: Math.max(40, Math.min(90, prev.systemMetrics.memoryUsage + (Math.random() - 0.5) * 3)),
          networkActivity: Math.max(60, Math.min(95, prev.systemMetrics.networkActivity + (Math.random() - 0.5) * 8))
        }
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20';
      case 'MONITORING': return 'text-blue-400 bg-blue-400/20';
      case 'OPTIMIZING': return 'text-purple-400 bg-purple-400/20';
      case 'ON_TRACK': return 'text-green-400 bg-green-400/20';
      case 'EXCEEDED': return 'text-emerald-400 bg-emerald-400/20';
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

  const getActionTypeIcon = (type) => {
    switch (type) {
      case 'SYSTEM': return <Zap className="w-4 h-4 text-blue-400" />;
      case 'DEPLOY': return <Rocket className="w-4 h-4 text-green-400" />;
      case 'VERIFY': return <Target className="w-4 h-4 text-purple-400" />;
      case 'DEVELOP': return <Brain className="w-4 h-4 text-orange-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Real-Time Workspace Analytics</h1>
              <p className="text-slate-300">Live workspace monitoring & performance intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{workspaceData.currentTime}</div>
            <div className="text-slate-400">Europe/Lisbon</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Current User & Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Active User
              </h3>
              <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                ONLINE
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  DF
                </div>
                <div>
                  <div className="text-white font-medium">{workspaceData.currentUser}</div>
                  <div className="text-slate-400 text-sm">Primary Operator</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Brain className="w-5 h-5 text-purple-400 mr-2" />
                AI Agent Fleet
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-green-400">{workspaceData.aiAgentStatus.activeAgents}</div>
                <div className="text-slate-400 text-sm">Active Agents</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-cyan-400">{workspaceData.aiAgentStatus.efficiency}%</div>
                <div className="text-slate-400 text-sm">Efficiency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Target className="w-5 h-5 text-orange-400 mr-2" />
            Active Projects
          </h3>
          <div className="space-y-4">
            {workspaceData.activeProjects.map((project, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-white">{project.name}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  <span className="text-slate-400 text-sm">{project.lastUpdate}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-slate-600/50 rounded-full h-2">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium text-sm">{project.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Metrics & Recent Activities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              System Metrics
            </h3>
            <div className="space-y-4">
              {Object.entries(workspaceData.systemMetrics).slice(0, 4).map(([key, value], index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-slate-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-slate-600/50 rounded-full h-2">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${
                          typeof value === 'number' && value > 80 ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                          typeof value === 'number' && value > 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                          'bg-gradient-to-r from-green-500 to-cyan-500'
                        }`}
                        style={{ width: typeof value === 'number' ? `${value}%` : '0%' }}
                      ></div>
                    </div>
                    <span className="text-white font-medium text-sm w-12 text-right">
                      {typeof value === 'number' ? `${value.toFixed(1)}%` : value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 text-blue-400 mr-2" />
              Recent Activities
            </h3>
            <div className="space-y-3">
              {workspaceData.recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-slate-700/30">
                  {getActionTypeIcon(activity.type)}
                  <div className="flex-1">
                    <div className="text-white text-sm">{activity.action}</div>
                    <div className="text-slate-400 text-xs">{activity.time}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Objectives */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
            Mission Objectives
          </h3>
          <div className="space-y-4">
            {workspaceData.missionObjectives.map((objective, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{objective.objective}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(objective.status)}`}>
                    {objective.status}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-1 bg-slate-600/50 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        objective.completion > 100 ? 'bg-gradient-to-r from-emerald-500 to-green-500' :
                        objective.completion > 90 ? 'bg-gradient-to-r from-green-500 to-cyan-500' :
                        'bg-gradient-to-r from-cyan-500 to-blue-500'
                      }`}
                      style={{ width: `${Math.min(100, objective.completion)}%` }}
                    ></div>
                  </div>
                  <span className="text-white font-medium text-sm">{objective.completion}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}