// CollaborativeControlCenter.js - Real-time Collaboration and Multi-Agent Orchestration
import { useState, useEffect } from 'react';

const CollaborativeControlCenter = () => {
  const [activeUsers, setActiveUsers] = useState([
    { id: 1, name: 'Daniel Ferreira', role: 'Mission Commander', status: 'active', avatar: '👨‍💼', lastSeen: 'now', location: 'Lisbon' },
    { id: 2, name: 'Aleksandra AI', role: 'Lead Agent', status: 'active', avatar: '🦾', lastSeen: 'now', location: 'Cloud' },
    { id: 3, name: 'Content Agent', role: 'Content Processor', status: 'busy', avatar: '🤖', lastSeen: '2m ago', location: 'Instagram Pipeline' },
    { id: 4, name: 'Analytics Agent', role: 'Data Analyst', status: 'active', avatar: '📊', lastSeen: '30s ago', location: 'Dashboard' }
  ]);

  const [activeSession, setActiveSession] = useState({
    sessionId: 'session_2026_03_05_061',
    startTime: Date.now() - 45 * 60 * 1000, // 45 minutes ago
    participants: 4,
    tasksCompleted: 12,
    tasksInProgress: 6,
    activeViews: ['Real-Time Monitoring', 'Data Visualization', 'Terminal'],
    collaborationMode: 'synchronized'
  });

  const [realtimeActivities, setRealtimeActivities] = useState([
    { id: 1, user: 'Daniel', action: 'Viewed Data Visualization Center', time: Date.now() - 60000, type: 'view' },
    { id: 2, user: 'Aleksandra', action: 'Deployed mission control update', time: Date.now() - 120000, type: 'deploy' },
    { id: 3, user: 'Content Agent', action: 'Processed 3 Instagram videos', time: Date.now() - 180000, type: 'process' },
    { id: 4, user: 'Analytics Agent', action: 'Generated performance report', time: Date.now() - 240000, type: 'report' }
  ]);

  const [taskOrchestration, setTaskOrchestration] = useState({
    activeTasks: [
      {
        id: 'task_001',
        title: 'Instagram Content Processing',
        assignedTo: 'Content Agent',
        status: 'in_progress',
        priority: 'high',
        progress: 78,
        estimatedCompletion: Date.now() + 15 * 60 * 1000, // 15 minutes from now
        dependencies: [],
        collaborators: ['Aleksandra', 'Analytics Agent']
      },
      {
        id: 'task_002',
        title: 'Dashboard Performance Optimization',
        assignedTo: 'Aleksandra',
        status: 'completed',
        priority: 'medium',
        progress: 100,
        completedAt: Date.now() - 10 * 60 * 1000,
        collaborators: ['Daniel']
      },
      {
        id: 'task_003',
        title: 'Real-time Analytics Enhancement',
        assignedTo: 'Analytics Agent',
        status: 'pending',
        priority: 'low',
        progress: 0,
        estimatedStart: Date.now() + 30 * 60 * 1000,
        dependencies: ['task_001'],
        collaborators: ['Aleksandra']
      }
    ],
    workflowPipeline: [
      { stage: 'Data Intake', status: 'active', throughput: '12 items/min', efficiency: 94 },
      { stage: 'Processing', status: 'active', throughput: '8 items/min', efficiency: 87 },
      { stage: 'Analysis', status: 'active', throughput: '15 reports/hour', efficiency: 92 },
      { stage: 'Deployment', status: 'standby', throughput: '3 deploys/hour', efficiency: 98 }
    ]
  });

  const [collaborationTools, setCollaborationTools] = useState({
    sharedCursor: { enabled: true, users: ['Daniel', 'Aleksandra'] },
    liveComments: { count: 3, unread: 1 },
    screenSharing: { active: false, quality: 'HD', latency: '45ms' },
    voiceChannel: { connected: false, quality: 'excellent' },
    synchronizedViews: { enabled: true, activeView: 'data-visualization', followers: 2 }
  });

  const [communicationFeed, setCommunicationFeed] = useState([
    { id: 1, user: 'Daniel', message: 'Great work on the data visualization center! The real-time charts look fantastic.', time: Date.now() - 300000, type: 'comment' },
    { id: 2, user: 'Aleksandra', message: 'Thank you! Just deployed the latest version with enhanced gradients and KPI indicators.', time: Date.now() - 240000, type: 'reply' },
    { id: 3, user: 'Analytics Agent', message: 'Performance metrics show 23% improvement in user engagement with the new charts.', time: Date.now() - 180000, type: 'insight' },
    { id: 4, user: 'Content Agent', message: 'Processing pipeline is running smoothly - 15 videos processed in the last hour.', time: Date.now() - 120000, type: 'status' }
  ]);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      // Update active users' last seen
      setActiveUsers(prev => prev.map(user => ({
        ...user,
        lastSeen: user.status === 'active' ? 'now' : user.lastSeen
      })));

      // Add new real-time activities
      const activities = [
        'Updated system monitoring dashboard',
        'Processed new content batch',
        'Generated analytics report',
        'Optimized performance metrics',
        'Synchronized with team members',
        'Completed scheduled maintenance',
        'Enhanced user interface',
        'Deployed system improvements'
      ];

      const users = ['Daniel', 'Aleksandra', 'Content Agent', 'Analytics Agent'];
      const types = ['view', 'deploy', 'process', 'report', 'sync'];

      if (Math.random() > 0.7) {
        const newActivity = {
          id: Date.now(),
          user: users[Math.floor(Math.random() * users.length)],
          action: activities[Math.floor(Math.random() * activities.length)],
          time: Date.now(),
          type: types[Math.floor(Math.random() * types.length)]
        };

        setRealtimeActivities(prev => [newActivity, ...prev.slice(0, 9)]);
      }

      // Update task progress for in-progress tasks
      setTaskOrchestration(prev => ({
        ...prev,
        activeTasks: prev.activeTasks.map(task => 
          task.status === 'in_progress' ? {
            ...task,
            progress: Math.min(100, task.progress + Math.random() * 2)
          } : task
        )
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'busy': return 'text-yellow-400';
      case 'idle': return 'text-gray-400';
      case 'offline': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getTaskStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'in_progress': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'pending': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'blocked': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🤝 COLLABORATIVE CONTROL CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {activeUsers.filter(u => u.status === 'active').length} ACTIVE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Session: {activeSession.sessionId}
          </div>
        </div>
      </div>

      {/* Active Users and Session Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Users */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            👥 ACTIVE COLLABORATORS
          </h3>
          <div className="space-y-3">
            {activeUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{user.avatar}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium">{user.name}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        user.status === 'active' ? 'bg-green-400' :
                        user.status === 'busy' ? 'bg-yellow-400' : 'bg-gray-400'
                      } animate-pulse`}></div>
                    </div>
                    <div className="text-xs text-gray-400">{user.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-mono ${getStatusColor(user.status)}`}>
                    {user.status.toUpperCase()}
                  </div>
                  <div className="text-xs text-gray-500">{user.location}</div>
                  <div className="text-xs text-gray-500">{formatTime(Date.now())}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Session Overview */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📊 SESSION OVERVIEW
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">SESSION DURATION</div>
                <div className="text-lg font-bold text-cyan-400">
                  {Math.floor((Date.now() - activeSession.startTime) / 60000)}m
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">PARTICIPANTS</div>
                <div className="text-lg font-bold text-green-400">
                  {activeSession.participants}
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">TASKS COMPLETED</div>
                <div className="text-lg font-bold text-blue-400">
                  {activeSession.tasksCompleted}
                </div>
              </div>
              <div className="bg-gray-700 rounded p-3">
                <div className="text-xs text-gray-400">IN PROGRESS</div>
                <div className="text-lg font-bold text-yellow-400">
                  {activeSession.tasksInProgress}
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <div className="text-xs text-gray-400 mb-2">SYNCHRONIZED VIEWS</div>
              <div className="flex flex-wrap gap-2">
                {activeSession.activeViews.map((view, index) => (
                  <span key={index} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs border border-blue-500/30">
                    {view}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Task Orchestration */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🎯 MULTI-AGENT TASK ORCHESTRATION
        </h3>
        <div className="space-y-4">
          {taskOrchestration.activeTasks.map((task) => (
            <div key={task.id} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <h4 className="font-bold text-white">{task.title}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-mono border ${getTaskStatusColor(task.status)}`}>
                    {task.status.replace('_', ' ').toUpperCase()}
                  </span>
                  <span className={`text-xs font-mono ${getPriorityColor(task.priority)}`}>
                    {task.priority.toUpperCase()}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-white">{task.progress}%</div>
                  {task.estimatedCompletion && (
                    <div className="text-xs text-gray-400">
                      ETA: {Math.floor((task.estimatedCompletion - Date.now()) / 60000)}m
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-3">
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all duration-500" 
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-400">Assigned to: <span className="text-cyan-400">{task.assignedTo}</span></span>
                  {task.collaborators && task.collaborators.length > 0 && (
                    <span className="text-gray-400">
                      Collaborators: <span className="text-purple-400">{task.collaborators.join(', ')}</span>
                    </span>
                  )}
                </div>
                {task.dependencies && task.dependencies.length > 0 && (
                  <span className="text-orange-400">Depends on: {task.dependencies.join(', ')}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Activity Feed and Communication */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real-time Activities */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 REAL-TIME ACTIVITIES
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {realtimeActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 text-sm">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'deploy' ? 'bg-green-400' :
                  activity.type === 'process' ? 'bg-blue-400' :
                  activity.type === 'view' ? 'bg-purple-400' :
                  activity.type === 'report' ? 'bg-yellow-400' :
                  'bg-gray-400'
                } animate-pulse`}></div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400 font-medium">{activity.user}</span>
                    <span className="text-gray-300">{activity.action}</span>
                  </div>
                  <div className="text-xs text-gray-500">{formatTime(activity.time)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communication Feed */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💬 TEAM COMMUNICATION
          </h3>
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {communicationFeed.map((message) => (
              <div key={message.id} className="bg-gray-700 rounded-lg p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-cyan-400 font-medium text-sm">{message.user}</span>
                  <span className={`text-xs px-2 py-1 rounded ${
                    message.type === 'comment' ? 'bg-blue-500/20 text-blue-400' :
                    message.type === 'reply' ? 'bg-green-500/20 text-green-400' :
                    message.type === 'insight' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {message.type}
                  </span>
                </div>
                <div className="text-sm text-white mb-1">{message.message}</div>
                <div className="text-xs text-gray-500">{formatTime(message.time)}</div>
              </div>
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="mt-4 flex space-x-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs">
              Add Comment
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs">
              Share View
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-xs">
              Start Voice
            </button>
          </div>
        </div>
      </div>

      {/* Workflow Pipeline */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🔄 WORKFLOW PIPELINE STATUS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {taskOrchestration.workflowPipeline.map((stage, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-bold text-white text-sm">{stage.stage}</h4>
                <div className={`w-3 h-3 rounded-full ${
                  stage.status === 'active' ? 'bg-green-400' :
                  stage.status === 'standby' ? 'bg-yellow-400' :
                  'bg-gray-400'
                } animate-pulse`}></div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Throughput</span>
                  <span className="text-cyan-400">{stage.throughput}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Efficiency</span>
                  <span className="text-green-400">{stage.efficiency}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full" 
                    style={{ width: `${stage.efficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollaborativeControlCenter;