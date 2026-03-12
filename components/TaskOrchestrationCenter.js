// Task Orchestration Center - Advanced task management with AI-powered workflow automation
import { useState, useEffect } from 'react';
import { CheckCircle, Clock, AlertTriangle, Play, Pause, RotateCcw, Target, Zap, Users, ArrowRight, Calendar, TrendingUp } from 'lucide-react';

export default function TaskOrchestrationCenter() {
  const [orchestrationData, setOrchestrationData] = useState({
    activeTasks: [
      {
        id: 'task-001',
        title: 'Instagram Video Processing Pipeline',
        description: 'Process 15 new Instagram videos through Assembly AI transcription',
        priority: 'HIGH',
        status: 'in-progress',
        progress: 68,
        assignedAgent: 'Content Processor',
        estimatedCompletion: '14:30',
        dependencies: [],
        executionTime: '12m 34s',
        resourceUsage: { cpu: 45, memory: 32, api: 'Assembly AI' }
      },
      {
        id: 'task-002', 
        title: 'LinkedIn Outreach Campaign',
        description: 'Send connection requests to 25 target prospects with personalized notes',
        priority: 'MEDIUM',
        status: 'queued',
        progress: 0,
        assignedAgent: 'LinkedIn Outreach',
        estimatedCompletion: '15:45',
        dependencies: ['task-005'],
        executionTime: '0m 0s',
        resourceUsage: { cpu: 0, memory: 0, api: 'LinkedIn API' }
      },
      {
        id: 'task-003',
        title: 'Mission Control Dashboard Enhancement',
        description: 'Add Task Orchestration Center with real-time workflow management',
        priority: 'HIGH',
        status: 'completed',
        progress: 100,
        assignedAgent: 'Aleksandra Main',
        estimatedCompletion: 'COMPLETED',
        dependencies: [],
        executionTime: '28m 47s',
        resourceUsage: { cpu: 15, memory: 8, api: 'Vercel' }
      },
      {
        id: 'task-004',
        title: 'Spec Ad Creation for Target Brand',
        description: 'Research brand, write script, generate voiceover for spec advertisement',
        priority: 'LOW',
        status: 'paused',
        progress: 35,
        assignedAgent: 'Spec Ad Creator',
        estimatedCompletion: 'PAUSED',
        dependencies: ['task-006'],
        executionTime: '8m 12s',
        resourceUsage: { cpu: 0, memory: 0, api: 'ElevenLabs' }
      },
      {
        id: 'task-005',
        title: 'Prospect Research & Analysis',
        description: 'Deep analysis of 50 potential outreach targets using multiple data sources',
        priority: 'MEDIUM',
        status: 'in-progress',
        progress: 82,
        assignedAgent: 'System Orchestrator',
        estimatedCompletion: '13:45',
        dependencies: [],
        executionTime: '22m 18s',
        resourceUsage: { cpu: 28, memory: 16, api: 'Web Search' }
      },
      {
        id: 'task-006',
        title: 'Brand Asset Collection',
        description: 'Gather brand assets, competitor analysis, and creative direction',
        priority: 'LOW',
        status: 'queued',
        progress: 0,
        assignedAgent: 'Instagram Monitor',
        estimatedCompletion: '16:20',
        dependencies: [],
        executionTime: '0m 0s',
        resourceUsage: { cpu: 0, memory: 0, api: 'Brand APIs' }
      }
    ],
    workflowMetrics: {
      totalTasks: 47,
      completedToday: 8,
      inProgress: 3,
      queued: 5,
      averageCompletionTime: '15m 23s',
      successRate: 96.4,
      resourceUtilization: 67.3,
      automationLevel: 89.7
    },
    agentWorkload: [
      { agent: 'Content Processor', activeTasks: 1, queuedTasks: 2, utilization: 68 },
      { agent: 'LinkedIn Outreach', activeTasks: 0, queuedTasks: 1, utilization: 0 },
      { agent: 'Aleksandra Main', activeTasks: 1, queuedTasks: 0, utilization: 45 },
      { agent: 'Spec Ad Creator', activeTasks: 0, queuedTasks: 1, utilization: 0 },
      { agent: 'System Orchestrator', activeTasks: 1, queuedTasks: 2, utilization: 78 },
      { agent: 'Instagram Monitor', activeTasks: 0, queuedTasks: 1, utilization: 12 }
    ],
    scheduledTasks: [
      { time: '13:45', task: 'Prospect Research Completion', agent: 'System Orchestrator' },
      { time: '14:30', task: 'Instagram Processing Complete', agent: 'Content Processor' },
      { time: '15:00', task: 'LinkedIn Campaign Auto-Start', agent: 'LinkedIn Outreach' },
      { time: '15:45', task: 'Outreach Completion Target', agent: 'LinkedIn Outreach' },
      { time: '16:20', task: 'Brand Asset Collection', agent: 'Instagram Monitor' }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOrchestrationData(prev => ({
        ...prev,
        activeTasks: prev.activeTasks.map(task => {
          if (task.status === 'in-progress') {
            const progressIncrement = Math.random() * 3;
            const newProgress = Math.min(100, task.progress + progressIncrement);
            
            // Convert execution time to seconds, add time, convert back
            const [minutes, seconds] = task.executionTime.replace('m ', ':').replace('s', '').split(':');
            const totalSeconds = parseInt(minutes) * 60 + parseInt(seconds) + 15;
            const newMinutes = Math.floor(totalSeconds / 60);
            const newSeconds = totalSeconds % 60;
            
            return {
              ...task,
              progress: newProgress,
              executionTime: `${newMinutes}m ${newSeconds}s`,
              status: newProgress >= 100 ? 'completed' : 'in-progress'
            };
          }
          return task;
        })
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'LOW': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'in-progress': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'queued': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'paused': return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'in-progress': return <Play className="w-4 h-4 text-blue-400" />;
      case 'queued': return <Clock className="w-4 h-4 text-cyan-400" />;
      case 'paused': return <Pause className="w-4 h-4 text-gray-400" />;
      default: return <AlertTriangle className="w-4 h-4 text-orange-400" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Target className="w-8 h-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Task Orchestration Center</h2>
            <p className="text-gray-400">AI-powered workflow automation and task management</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{orchestrationData.workflowMetrics.automationLevel}%</div>
            <div className="text-xs text-gray-400">Automation Level</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">{orchestrationData.workflowMetrics.successRate}%</div>
            <div className="text-xs text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Workflow Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-white">{orchestrationData.workflowMetrics.totalTasks}</div>
          <div className="text-xs text-gray-400">Total Tasks</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{orchestrationData.workflowMetrics.completedToday}</div>
          <div className="text-xs text-gray-400">Completed Today</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{orchestrationData.workflowMetrics.inProgress}</div>
          <div className="text-xs text-gray-400">In Progress</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{orchestrationData.workflowMetrics.queued}</div>
          <div className="text-xs text-gray-400">Queued</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{orchestrationData.workflowMetrics.averageCompletionTime}</div>
          <div className="text-xs text-gray-400">Avg Time</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{orchestrationData.workflowMetrics.successRate}%</div>
          <div className="text-xs text-gray-400">Success Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{orchestrationData.workflowMetrics.resourceUtilization}%</div>
          <div className="text-xs text-gray-400">Resources</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-indigo-400">{orchestrationData.workflowMetrics.automationLevel}%</div>
          <div className="text-xs text-gray-400">Automation</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Tasks */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Active Task Pipeline</h3>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-yellow-400">ORCHESTRATING</div>
            </div>
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {orchestrationData.activeTasks.map((task, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      {getStatusIcon(task.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <div className="text-white font-medium">{task.title}</div>
                        <div className={`text-xs px-2 py-1 rounded border ${getPriorityColor(task.priority)}`}>
                          {task.priority}
                        </div>
                      </div>
                      <div className="text-gray-300 text-sm mb-2">{task.description}</div>
                      <div className="flex items-center space-x-4 text-xs">
                        <div className="text-cyan-400">Agent: {task.assignedAgent}</div>
                        <div className="text-gray-400">•</div>
                        <div className="text-blue-400">ETA: {task.estimatedCompletion}</div>
                        <div className="text-gray-400">•</div>
                        <div className="text-green-400">Runtime: {task.executionTime}</div>
                      </div>
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(task.status)}`}>
                    {task.status.toUpperCase()}
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-white font-bold">{task.progress.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        task.status === 'completed' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                        task.status === 'in-progress' ? 'bg-gradient-to-r from-blue-400 to-cyan-500' :
                        task.status === 'queued' ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                        'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}
                      style={{ width: `${task.progress}%` }}
                    ></div>
                  </div>
                </div>

                {/* Resource Usage */}
                <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t border-gray-600/30">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">CPU</div>
                    <div className="text-sm font-bold text-orange-400">{task.resourceUsage.cpu}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Memory</div>
                    <div className="text-sm font-bold text-purple-400">{task.resourceUsage.memory}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">API</div>
                    <div className="text-sm font-bold text-cyan-400">{task.resourceUsage.api}</div>
                  </div>
                </div>

                {/* Dependencies */}
                {task.dependencies.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-gray-600/30">
                    <div className="flex items-center space-x-2">
                      <ArrowRight className="w-3 h-3 text-gray-400" />
                      <div className="text-xs text-gray-400">
                        Dependencies: {task.dependencies.join(', ')}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Agent Workload & Schedule */}
        <div className="space-y-6">
          {/* Agent Workload */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Users className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-white">Agent Workload</h3>
            </div>
            <div className="space-y-3">
              {orchestrationData.agentWorkload.map((agent, index) => (
                <div key={index} className="p-3 bg-gray-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-white text-sm font-medium">{agent.agent}</div>
                    <div className="text-xs text-gray-400">{agent.utilization}%</div>
                  </div>
                  <div className="flex items-center space-x-3 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-400">{agent.activeTasks} active</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-cyan-400">{agent.queuedTasks} queued</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        style={{ width: `${agent.utilization}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scheduled Tasks */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg font-bold text-white">Task Schedule</h3>
            </div>
            <div className="space-y-3">
              {orchestrationData.scheduledTasks.map((scheduled, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg bg-gray-700/20">
                  <div className="text-purple-400 font-bold text-sm min-w-[3rem]">{scheduled.time}</div>
                  <div className="flex-1">
                    <div className="text-white text-sm">{scheduled.task}</div>
                    <div className="text-gray-400 text-xs">{scheduled.agent}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Workflow Performance Analytics */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-bold text-white">Workflow Performance Analytics</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">{orchestrationData.workflowMetrics.completedToday}</div>
                <div className="text-sm text-gray-300">Tasks Completed Today</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400">{orchestrationData.workflowMetrics.automationLevel}%</div>
                <div className="text-sm text-gray-300">Workflow Automation</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-400">{orchestrationData.workflowMetrics.averageCompletionTime}</div>
                <div className="text-sm text-gray-300">Average Completion Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}