import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckSquare, Clock, AlertCircle, User, Calendar, Plus, Search, MoreVertical } from 'lucide-react';

const TaskManagementCenter = () => {
  const [tasks, setTasks] = useState([
    {
      id: 'TASK-001',
      title: 'Implement Real-time System Monitoring',
      description: 'Build comprehensive system monitoring with CPU, Memory, Network metrics',
      status: 'completed',
      priority: 'high',
      assignee: 'Aleksandra Main',
      created: new Date('2026-03-01'),
      updated: new Date('2026-03-06'),
      tags: ['monitoring', 'system'],
      progress: 100,
      estimatedHours: 8,
      actualHours: 6.5
    },
    {
      id: 'TASK-002', 
      title: 'Deploy Mission Control to Vercel',
      description: 'Configure and deploy the dashboard to Vercel production environment',
      status: 'completed',
      priority: 'high',
      assignee: 'Aleksandra Main',
      created: new Date('2026-03-02'),
      updated: new Date('2026-03-06'),
      tags: ['deployment', 'vercel'],
      progress: 100,
      estimatedHours: 4,
      actualHours: 3.8
    },
    {
      id: 'TASK-003',
      title: 'Build Agent Lifecycle Management',
      description: 'Create comprehensive agent monitoring, heartbeat tracking, and orchestration',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Aleksandra Main',
      created: new Date('2026-03-04'),
      updated: new Date('2026-03-06'),
      tags: ['agents', 'lifecycle'],
      progress: 85,
      estimatedHours: 12,
      actualHours: 10.2
    },
    {
      id: 'TASK-004',
      title: 'Task Management Kanban Board',
      description: 'Build interactive Kanban board for task orchestration and workflow management',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Aleksandra Main',
      created: new Date('2026-03-06'),
      updated: new Date('2026-03-06'),
      tags: ['kanban', 'workflow'],
      progress: 75,
      estimatedHours: 10,
      actualHours: 7.5
    },
    {
      id: 'TASK-005',
      title: 'AI-Assisted Planning Module',
      description: 'Implement intelligent task planning and resource allocation',
      status: 'todo',
      priority: 'medium',
      assignee: 'AI Agent',
      created: new Date('2026-03-06'),
      updated: new Date('2026-03-06'),
      tags: ['ai', 'planning'],
      progress: 0,
      estimatedHours: 15,
      actualHours: 0
    },
    {
      id: 'TASK-006',
      title: 'Security Operations Integration',
      description: 'Enhance security monitoring and threat detection capabilities',
      status: 'backlog',
      priority: 'low',
      assignee: 'Security Agent',
      created: new Date('2026-03-06'),
      updated: new Date('2026-03-06'),
      tags: ['security', 'monitoring'],
      progress: 0,
      estimatedHours: 20,
      actualHours: 0
    }
  ]);

  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTask, setSelectedTask] = useState(null);

  const statusColumns = [
    { id: 'backlog', name: 'BACKLOG', color: '#6B7280', count: 0 },
    { id: 'todo', name: 'TO DO', color: '#3B82F6', count: 0 },
    { id: 'in-progress', name: 'IN PROGRESS', color: '#F59E0B', count: 0 },
    { id: 'completed', name: 'COMPLETED', color: '#10B981', count: 0 }
  ];

  const priorityColors = {
    low: '#6B7280',
    medium: '#F59E0B',
    high: '#EF4444'
  };

  // Filter tasks
  const filteredTasks = tasks.filter(task => {
    const matchesStatus = selectedStatus === 'all' || task.status === selectedStatus;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  // Real-time updates simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prev => prev.map(task => {
        if (task.status === 'in-progress' && Math.random() > 0.8) {
          const progressIncrement = Math.random() * 5;
          const newProgress = Math.min(100, task.progress + progressIncrement);
          const newActualHours = task.actualHours + (Math.random() * 0.5);
          
          return {
            ...task,
            progress: newProgress,
            actualHours: newActualHours,
            updated: new Date(),
            status: newProgress >= 100 ? 'completed' : task.status
          };
        }
        return task;
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getTasksByStatus = (status) => {
    return filteredTasks.filter(task => task.status === status);
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckSquare className="w-4 h-4 text-green-400" />;
      case 'in-progress': return <Clock className="w-4 h-4 text-yellow-400" />;
      case 'todo': return <AlertCircle className="w-4 h-4 text-blue-400" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  // Analytics data
  const tasksByPriority = [
    { priority: 'High', count: tasks.filter(t => t.priority === 'high').length, color: '#EF4444' },
    { priority: 'Medium', count: tasks.filter(t => t.priority === 'medium').length, color: '#F59E0B' },
    { priority: 'Low', count: tasks.filter(t => t.priority === 'low').length, color: '#6B7280' }
  ];

  const weeklyProgress = [
    { week: 'Week 1', completed: 12, inProgress: 8, todo: 15 },
    { week: 'Week 2', completed: 18, inProgress: 6, todo: 12 },
    { week: 'Week 3', completed: 24, inProgress: 9, todo: 8 },
    { week: 'Week 4', completed: 32, inProgress: 5, todo: 6 }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <CheckSquare className="w-8 h-8 text-green-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">TASK MANAGEMENT CENTER</h1>
            <p className="text-gray-400">Kanban workflow orchestration and project management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{tasks.filter(t => t.status === 'completed').length}</div>
            <div className="text-xs text-gray-400">COMPLETED</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{tasks.filter(t => t.status === 'in-progress').length}</div>
            <div className="text-xs text-gray-400">IN PROGRESS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{tasks.length}</div>
            <div className="text-xs text-gray-400">TOTAL</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="backlog">Backlog</option>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Task</span>
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-6">
        {/* Kanban Board */}
        <div className="col-span-3">
          <div className="grid grid-cols-4 gap-4 h-full">
            {statusColumns.map(column => (
              <div key={column.id} className="bg-gray-900 rounded-lg border border-gray-700">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-white">{column.name}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                        {getTasksByStatus(column.id).length}
                      </span>
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: column.color }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 space-y-3 min-h-96">
                  {getTasksByStatus(column.id).map(task => (
                    <div
                      key={task.id}
                      onClick={() => setSelectedTask(task)}
                      className="bg-gray-800 rounded-lg p-3 border border-gray-600 cursor-pointer hover:bg-gray-700 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-gray-400">{task.id}</span>
                        <div className="flex items-center space-x-2">
                          <div 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: priorityColors[task.priority] }}
                          />
                          <MoreVertical className="w-3 h-3 text-gray-400" />
                        </div>
                      </div>
                      
                      <h4 className="text-white font-medium text-sm mb-2">{task.title}</h4>
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">{task.description}</p>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1">
                          <User className="w-3 h-3 text-gray-400" />
                          <span className="text-gray-400">{task.assignee.split(' ')[0]}</span>
                        </div>
                        <span className="text-gray-400">{formatDate(task.updated)}</span>
                      </div>
                      
                      {task.status === 'in-progress' && (
                        <div className="mt-2">
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>Progress</span>
                            <span>{task.progress.toFixed(0)}%</span>
                          </div>
                          <div className="bg-gray-700 rounded-full h-1.5">
                            <div 
                              className="bg-blue-500 rounded-full h-1.5 transition-all duration-500" 
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {task.tags.map(tag => (
                          <span key={tag} className="text-xs px-2 py-0.5 bg-gray-700 text-gray-300 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics Panel */}
        <div className="space-y-4">
          {/* Task Priority Distribution */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4">PRIORITY BREAKDOWN</h3>
            <div className="space-y-3">
              {tasksByPriority.map(item => (
                <div key={item.priority} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-gray-400 text-sm">{item.priority}</span>
                  </div>
                  <span className="text-white font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Team Performance */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4">TEAM PERFORMANCE</h3>
            <div className="space-y-3">
              {['Aleksandra Main', 'AI Agent', 'Security Agent'].map(assignee => {
                const assigneeTasks = tasks.filter(t => t.assignee === assignee);
                const completed = assigneeTasks.filter(t => t.status === 'completed').length;
                const total = assigneeTasks.length;
                const efficiency = total > 0 ? (completed / total * 100) : 0;
                
                return (
                  <div key={assignee} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{assignee.split(' ')[0]}</span>
                      <span className="text-white">{efficiency.toFixed(0)}%</span>
                    </div>
                    <div className="bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-green-500 rounded-full h-2 transition-all duration-500" 
                        style={{ width: `${efficiency}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-white mb-4">RECENT ACTIVITY</h3>
            <div className="space-y-3 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400">TASK-003 progress updated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-400">TASK-004 created</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-400">TASK-005 moved to progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-400">TASK-001 completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Progress Chart */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-4">WEEKLY PROGRESS TRENDS</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weeklyProgress}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="week" stroke="#9CA3AF" fontSize={12} />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#fff'
              }} 
            />
            <Legend />
            <Bar dataKey="completed" stackId="a" fill="#10B981" name="Completed" />
            <Bar dataKey="inProgress" stackId="a" fill="#F59E0B" name="In Progress" />
            <Bar dataKey="todo" stackId="a" fill="#3B82F6" name="To Do" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Task Detail Modal */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-96 max-w-90vw">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{selectedTask.title}</h3>
              <button 
                onClick={() => setSelectedTask(null)}
                className="text-gray-400 hover:text-white"
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4 text-sm">
              <div>
                <span className="text-gray-400">Description:</span>
                <p className="text-white mt-1">{selectedTask.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-400">Status:</span>
                  <div className="flex items-center space-x-2 mt-1">
                    {getStatusIcon(selectedTask.status)}
                    <span className="text-white capitalize">{selectedTask.status.replace('-', ' ')}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Priority:</span>
                  <div className="flex items-center space-x-2 mt-1">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: priorityColors[selectedTask.priority] }}
                    />
                    <span className="text-white capitalize">{selectedTask.priority}</span>
                  </div>
                </div>
                <div>
                  <span className="text-gray-400">Assignee:</span>
                  <p className="text-white mt-1">{selectedTask.assignee}</p>
                </div>
                <div>
                  <span className="text-gray-400">Progress:</span>
                  <p className="text-white mt-1">{selectedTask.progress.toFixed(0)}%</p>
                </div>
              </div>
              
              <div>
                <span className="text-gray-400">Tags:</span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {selectedTask.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskManagementCenter;