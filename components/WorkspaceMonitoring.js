// WorkspaceMonitoring.js - Daniel's Workspace Real-Time Monitoring
import { useState, useEffect } from 'react';

const WorkspaceMonitoring = () => {
  const [workspaceStatus, setWorkspaceStatus] = useState({
    currentTime: new Date().toLocaleString('en-US', { 
      timeZone: 'Europe/Lisbon',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    activeProjects: [
      { 
        name: 'Mission Control Dashboard', 
        status: 'DEPLOYED', 
        progress: 100, 
        priority: 'HIGH',
        url: 'https://aleksandra-mission-control.vercel.app',
        lastUpdate: 'Just now'
      },
      { 
        name: 'Instagram Content Processing', 
        status: 'ACTIVE', 
        progress: 87, 
        priority: 'HIGH',
        activities: ['Transcription pipeline', 'Content modeling'],
        lastUpdate: '15 minutes ago'
      },
      { 
        name: 'LinkedIn Outreach System', 
        status: 'STANDBY', 
        progress: 65, 
        priority: 'MEDIUM',
        activities: ['Prospect research', 'Connection automation'],
        lastUpdate: '2 hours ago'
      },
      { 
        name: 'Carousel Creator Tool', 
        status: 'READY', 
        progress: 95, 
        priority: 'MEDIUM',
        activities: ['Content generation', 'Template optimization'],
        lastUpdate: '1 day ago'
      }
    ],
    systemMetrics: {
      diskSpace: { used: 228, total: 256, percentage: 89 },
      memory: { used: 6.2, total: 8, percentage: 78 },
      cpuLoad: 42,
      networkActivity: 'MODERATE',
      openSessions: 3,
      activeAgents: 6
    },
    recentActivity: [
      { time: '16:57', action: 'Mission Control deployed to Vercel', type: 'SUCCESS' },
      { time: '16:55', action: 'Enhanced dashboard with 38 components', type: 'UPDATE' },
      { time: '16:52', action: 'Built production-ready application', type: 'BUILD' },
      { time: '16:47', action: 'Heartbeat mission control focus activated', type: 'SYSTEM' },
      { time: '16:40', action: 'Workspace organization and cleanup', type: 'MAINTENANCE' }
    ],
    nextActions: [
      { 
        priority: 'HIGH', 
        task: 'Continue dashboard improvements', 
        estimate: '30 min',
        type: 'DEVELOPMENT'
      },
      { 
        priority: 'MEDIUM', 
        task: 'Research additional mission control features', 
        estimate: '45 min',
        type: 'RESEARCH'
      },
      { 
        priority: 'LOW', 
        task: 'Update documentation and logs', 
        estimate: '15 min',
        type: 'MAINTENANCE'
      }
    ],
    alertsAndNotifications: {
      critical: 0,
      warnings: 1,
      info: 3,
      activeAlerts: [
        { 
          level: 'WARNING', 
          message: 'Disk space at 89% - consider cleanup', 
          time: '16:45' 
        }
      ]
    }
  });

  const [liveUpdates, setLiveUpdates] = useState([]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newUpdate = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        message: getRandomUpdate(),
        type: Math.random() > 0.7 ? 'important' : 'normal'
      };
      
      setLiveUpdates(prev => [newUpdate, ...prev.slice(0, 9)]);
      
      // Update metrics with small variations
      setWorkspaceStatus(prev => ({
        ...prev,
        systemMetrics: {
          ...prev.systemMetrics,
          cpuLoad: Math.max(15, Math.min(85, prev.systemMetrics.cpuLoad + (Math.random() - 0.5) * 10)),
          memory: {
            ...prev.systemMetrics.memory,
            percentage: Math.max(60, Math.min(90, prev.systemMetrics.memory.percentage + (Math.random() - 0.5) * 5))
          }
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getRandomUpdate = () => {
    const updates = [
      'Mission Control dashboard responding optimally',
      'Vercel deployment monitoring active',
      'System performance within nominal parameters',
      'Real-time telemetry streaming successfully',
      'Workspace organization maintaining efficiency',
      'Agent coordination protocols functioning',
      'Content processing pipeline status: GREEN',
      'Infrastructure monitoring: All systems go',
      'Development environment optimized',
      'Mission objectives tracking on schedule'
    ];
    return updates[Math.floor(Math.random() * updates.length)];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'DEPLOYED': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'STANDBY': return 'text-yellow-400 bg-yellow-400/20';
      case 'READY': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🏠 WORKSPACE MONITORING
        </h2>
        <div className="text-sm text-gray-400 font-mono">
          {workspaceStatus.currentTime} • Lisbon
        </div>
      </div>

      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">DISK SPACE</div>
              <div className="text-lg font-bold text-yellow-400">
                {workspaceStatus.systemMetrics.diskSpace.percentage}%
              </div>
              <div className="text-xs text-gray-500">
                {workspaceStatus.systemMetrics.diskSpace.used}GB / {workspaceStatus.systemMetrics.diskSpace.total}GB
              </div>
            </div>
            <div className="text-2xl">💾</div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-yellow-400 h-2 rounded-full" 
              style={{ width: `${workspaceStatus.systemMetrics.diskSpace.percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">MEMORY</div>
              <div className="text-lg font-bold text-blue-400">
                {workspaceStatus.systemMetrics.memory.percentage}%
              </div>
              <div className="text-xs text-gray-500">
                {workspaceStatus.systemMetrics.memory.used}GB / {workspaceStatus.systemMetrics.memory.total}GB
              </div>
            </div>
            <div className="text-2xl">🧠</div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-blue-400 h-2 rounded-full" 
              style={{ width: `${workspaceStatus.systemMetrics.memory.percentage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">CPU LOAD</div>
              <div className="text-lg font-bold text-green-400">
                {Math.round(workspaceStatus.systemMetrics.cpuLoad)}%
              </div>
              <div className="text-xs text-gray-500">
                {workspaceStatus.systemMetrics.openSessions} sessions
              </div>
            </div>
            <div className="text-2xl">⚡</div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-green-400 h-2 rounded-full" 
              style={{ width: `${workspaceStatus.systemMetrics.cpuLoad}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">ACTIVE AGENTS</div>
              <div className="text-lg font-bold text-purple-400">
                {workspaceStatus.systemMetrics.activeAgents}
              </div>
              <div className="text-xs text-gray-500">
                Network: {workspaceStatus.systemMetrics.networkActivity}
              </div>
            </div>
            <div className="text-2xl">🤖</div>
          </div>
          <div className="flex space-x-1 mt-2">
            {Array.from({ length: workspaceStatus.systemMetrics.activeAgents }, (_, i) => (
              <div key={i} className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Projects */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚀 ACTIVE PROJECTS
        </h3>
        <div className="space-y-4">
          {workspaceStatus.activeProjects.map((project, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white">{project.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`text-xs font-mono ${getPriorityColor(project.priority)}`}>
                      {project.priority}
                    </span>
                  </div>
                  {project.url && (
                    <div className="text-xs text-cyan-400 mt-1 font-mono">
                      🌐 {project.url}
                    </div>
                  )}
                  {project.activities && (
                    <div className="text-xs text-gray-400 mt-1">
                      • {project.activities.join(' • ')}
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mt-1">
                    Last update: {project.lastUpdate}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white">
                    {project.progress}%
                  </div>
                  <div className="w-20 bg-gray-600 rounded-full h-2 mt-1">
                    <div 
                      className="bg-green-400 h-2 rounded-full transition-all duration-500" 
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Live Activity Feed and Next Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Live Updates */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 LIVE ACTIVITY FEED
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {liveUpdates.map((update, index) => (
              <div key={update.id} className="flex items-start space-x-3 text-sm">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  update.type === 'important' ? 'bg-red-400' : 'bg-green-400'
                } animate-pulse`}></div>
                <div className="flex-1">
                  <span className="text-gray-300">[{update.time}]</span>
                  <span className="text-white ml-2">{update.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Actions */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 NEXT ACTIONS
          </h3>
          <div className="space-y-3">
            {workspaceStatus.nextActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 rounded p-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs font-mono ${getPriorityColor(action.priority)}`}>
                      {action.priority}
                    </span>
                    <span className="text-gray-400 text-xs">•</span>
                    <span className="text-gray-400 text-xs">{action.type}</span>
                  </div>
                  <div className="text-white text-sm mt-1">{action.task}</div>
                </div>
                <div className="text-xs text-gray-400 font-mono">
                  {action.estimate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity Timeline */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 RECENT ACTIVITY
        </h3>
        <div className="space-y-3">
          {workspaceStatus.recentActivity.map((activity, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="text-xs text-gray-400 font-mono w-12">
                {activity.time}
              </div>
              <div className={`w-2 h-2 rounded-full ${
                activity.type === 'SUCCESS' ? 'bg-green-400' :
                activity.type === 'UPDATE' ? 'bg-blue-400' :
                activity.type === 'BUILD' ? 'bg-purple-400' :
                activity.type === 'SYSTEM' ? 'bg-yellow-400' :
                'bg-gray-400'
              }`}></div>
              <div className="text-white text-sm flex-1">
                {activity.action}
              </div>
              <div className="text-xs text-gray-400">
                {activity.type}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts Panel */}
      {workspaceStatus.alertsAndNotifications.activeAlerts.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-6 border border-yellow-500">
          <h3 className="text-lg font-bold text-yellow-400 mb-4 font-mono">
            ⚠️ ACTIVE ALERTS
          </h3>
          <div className="space-y-2">
            {workspaceStatus.alertsAndNotifications.activeAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between bg-yellow-400/10 rounded p-3">
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-400">⚠️</div>
                  <div>
                    <div className="text-white text-sm">{alert.message}</div>
                    <div className="text-xs text-gray-400">{alert.time}</div>
                  </div>
                </div>
                <button className="text-xs text-yellow-400 hover:text-yellow-300 font-mono">
                  ACKNOWLEDGE
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkspaceMonitoring;