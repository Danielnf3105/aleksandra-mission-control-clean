// Workspace Activity Monitor - Real-time tracking of Daniel's workspace and project activity
import { useState, useEffect } from 'react';
import { Activity, FileText, Code, Clock, TrendingUp, Database, Zap, Eye, Cpu, HardDrive } from 'lucide-react';

export default function WorkspaceActivityMonitor() {
  const [workspaceData, setWorkspaceData] = useState({
    currentProjects: [
      { name: 'Mission Control Dashboard', status: 'ACTIVE', progress: 87, lastActivity: '2 min ago', type: 'development' },
      { name: 'Instagram Content Pipeline', status: 'MONITORING', progress: 94, lastActivity: '15 min ago', type: 'automation' },
      { name: 'Agent Orchestration System', status: 'OPTIMIZING', progress: 76, lastActivity: '32 min ago', type: 'infrastructure' },
      { name: 'Spec Ad Creator Pipeline', status: 'IDLE', progress: 45, lastActivity: '2h ago', type: 'content' }
    ],
    recentActivity: [
      { time: '11:52', action: 'Mission Control deployed to Vercel', type: 'deployment', impact: 'high' },
      { time: '11:45', action: 'Added WorkspaceActivityMonitor component', type: 'development', impact: 'medium' },
      { time: '11:30', action: 'System health monitoring optimized', type: 'infrastructure', impact: 'medium' },
      { time: '11:15', action: 'Agent coordination protocols updated', type: 'automation', impact: 'high' },
      { time: '11:00', action: 'Performance analytics refreshed', type: 'monitoring', impact: 'low' },
      { time: '10:45', action: 'Security scan completed successfully', type: 'security', impact: 'medium' }
    ],
    systemMetrics: {
      activeProcesses: 24,
      memoryUsage: 68,
      diskUsage: 45,
      networkActivity: 156,
      agentHeartbeats: 6,
      apiCalls: 1247
    },
    productivityScore: 94.3,
    focusTime: '2h 15m',
    tasksCompleted: 8,
    codeCommits: 3
  });

  const [timeData, setTimeData] = useState([
    { time: '09:00', productivity: 65, activity: 45 },
    { time: '10:00', productivity: 78, activity: 62 },
    { time: '11:00', productivity: 94, activity: 85 },
    { time: '11:30', productivity: 96, activity: 92 },
    { time: '11:54', productivity: 94, activity: 88 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setWorkspaceData(prev => ({
        ...prev,
        systemMetrics: {
          ...prev.systemMetrics,
          networkActivity: prev.systemMetrics.networkActivity + Math.floor(Math.random() * 10 - 5),
          apiCalls: prev.systemMetrics.apiCalls + Math.floor(Math.random() * 5)
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'MONITORING': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'OPTIMIZING': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'IDLE': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'deployment': return <Zap className="w-4 h-4 text-green-400" />;
      case 'development': return <Code className="w-4 h-4 text-blue-400" />;
      case 'infrastructure': return <Cpu className="w-4 h-4 text-purple-400" />;
      case 'automation': return <Activity className="w-4 h-4 text-cyan-400" />;
      case 'monitoring': return <Eye className="w-4 h-4 text-yellow-400" />;
      case 'security': return <Database className="w-4 h-4 text-red-400" />;
      default: return <FileText className="w-4 h-4 text-gray-400" />;
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'high': return 'border-l-4 border-l-green-400 bg-green-400/5';
      case 'medium': return 'border-l-4 border-l-yellow-400 bg-yellow-400/5';
      case 'low': return 'border-l-4 border-l-gray-400 bg-gray-400/5';
      default: return 'border-l-4 border-l-gray-400 bg-gray-400/5';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Activity className="w-8 h-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Workspace Activity Monitor</h2>
            <p className="text-gray-400">Real-time tracking of Daniel's development workflow</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{workspaceData.productivityScore}%</div>
            <div className="text-xs text-gray-400">Productivity Score</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-400">{workspaceData.focusTime}</div>
            <div className="text-xs text-gray-400">Focus Time</div>
          </div>
        </div>
      </div>

      {/* Current Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {workspaceData.currentProjects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm font-medium text-white truncate">{project.name}</div>
              <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(project.status)}`}>
                {project.status}
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-400">Progress</span>
                <span className="text-white font-bold">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">{project.type}</span>
                <span className="text-gray-400">{project.lastActivity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity Stream */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">Recent Activity</h3>
          </div>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {workspaceData.recentActivity.map((activity, index) => (
              <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${getImpactColor(activity.impact)}`}>
                <div className="flex-shrink-0">
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-white">{activity.action}</div>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="text-xs text-gray-400">{activity.time}</div>
                    <div className="text-xs text-gray-500">•</div>
                    <div className="text-xs text-gray-400 capitalize">{activity.type}</div>
                    <div className="text-xs text-gray-500">•</div>
                    <div className={`text-xs capitalize ${activity.impact === 'high' ? 'text-green-400' : activity.impact === 'medium' ? 'text-yellow-400' : 'text-gray-400'}`}>
                      {activity.impact} impact
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Metrics */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Cpu className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-bold text-white">System Metrics</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Active Processes</span>
              <span className="text-green-400 font-bold">{workspaceData.systemMetrics.activeProcesses}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Memory Usage</span>
                <span className="text-yellow-400 font-bold">{workspaceData.systemMetrics.memoryUsage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full" style={{ width: `${workspaceData.systemMetrics.memoryUsage}%` }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Disk Usage</span>
                <span className="text-cyan-400 font-bold">{workspaceData.systemMetrics.diskUsage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full" style={{ width: `${workspaceData.systemMetrics.diskUsage}%` }}></div>
              </div>
            </div>
            <div className="pt-2 border-t border-gray-700">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Network Activity</span>
                <span className="text-blue-400 font-bold">{workspaceData.systemMetrics.networkActivity} KB/s</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400">Agent Heartbeats</span>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400 font-bold">{workspaceData.systemMetrics.agentHeartbeats}</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">API Calls Today</span>
                <span className="text-purple-400 font-bold">{workspaceData.systemMetrics.apiCalls.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Productivity Chart */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-bold text-white">Today's Productivity Timeline</h3>
        </div>
        <div className="flex items-end space-x-4 h-32">
          {timeData.map((point, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="flex space-x-1 mb-2">
                <div 
                  className="w-4 bg-gradient-to-t from-green-400 to-green-500 rounded-sm"
                  style={{ height: `${point.productivity}px` }}
                  title={`Productivity: ${point.productivity}%`}
                ></div>
                <div 
                  className="w-4 bg-gradient-to-t from-blue-400 to-blue-500 rounded-sm"
                  style={{ height: `${point.activity}px` }}
                  title={`Activity: ${point.activity}%`}
                ></div>
              </div>
              <div className="text-xs text-gray-400">{point.time}</div>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-4 mt-4 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded"></div>
            <span className="text-gray-400">Productivity</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
            <span className="text-gray-400">Activity</span>
          </div>
        </div>
      </div>

      {/* Daily Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{workspaceData.tasksCompleted}</div>
              <div className="text-sm text-gray-300">Tasks Completed Today</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{workspaceData.codeCommits}</div>
              <div className="text-sm text-gray-300">Code Commits Today</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <HardDrive className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{workspaceData.focusTime}</div>
              <div className="text-sm text-gray-300">Deep Work Time</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}