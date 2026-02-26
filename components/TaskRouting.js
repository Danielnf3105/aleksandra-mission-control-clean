// TaskRouting.js - Intelligent Task Routing & Assignment System
import { useState, useEffect } from 'react';

const TaskRouting = () => {
  const [taskQueue, setTaskQueue] = useState([
    {
      id: 'T001',
      type: 'instagram_analysis',
      priority: 'high',
      complexity: 7,
      estimatedTime: '2m 15s',
      assignedAgent: 'Content Strategist',
      status: 'processing',
      progress: 67,
      submittedAt: '18:52:34',
      tags: ['video', 'transcription', 'analysis']
    },
    {
      id: 'T002',
      type: 'system_optimization',
      priority: 'medium',
      complexity: 5,
      estimatedTime: '4m 30s',
      assignedAgent: 'Infrastructure Manager',
      status: 'queued',
      progress: 0,
      submittedAt: '18:54:12',
      tags: ['performance', 'optimization', 'monitoring']
    },
    {
      id: 'T003',
      type: 'research_synthesis',
      priority: 'medium',
      complexity: 8,
      estimatedTime: '6m 45s',
      assignedAgent: 'Research Assistant',
      status: 'queued',
      progress: 0,
      submittedAt: '18:54:45',
      tags: ['ai-agents', 'research', 'documentation']
    },
    {
      id: 'T004',
      type: 'quality_validation',
      priority: 'low',
      complexity: 3,
      estimatedTime: '1m 20s',
      assignedAgent: 'Quality Assurance',
      status: 'completed',
      progress: 100,
      submittedAt: '18:51:18',
      tags: ['validation', 'testing', 'quality']
    },
    {
      id: 'T005',
      type: 'communication_routing',
      priority: 'low',
      complexity: 2,
      estimatedTime: '45s',
      assignedAgent: 'Communication Agent',
      status: 'pending',
      progress: 0,
      submittedAt: '18:55:01',
      tags: ['communication', 'routing', 'coordination']
    }
  ]);

  const [routingRules, setRoutingRules] = useState([
    { condition: 'type == "instagram_analysis"', agent: 'Content Strategist', weight: 0.9 },
    { condition: 'priority == "high"', agent: 'Best Available', weight: 0.8 },
    { condition: 'complexity >= 7', agent: 'Research Assistant', weight: 0.7 },
    { condition: 'tags.includes("optimization")', agent: 'Infrastructure Manager', weight: 0.9 },
    { condition: 'estimatedTime < "2m"', agent: 'Quality Assurance', weight: 0.6 }
  ]);

  const [agentWorkload, setAgentWorkload] = useState({
    'Content Strategist': { active: 2, queued: 1, capacity: 85, efficiency: 94.2, specialties: ['content', 'analysis'] },
    'Infrastructure Manager': { active: 1, queued: 2, capacity: 60, efficiency: 98.7, specialties: ['systems', 'optimization'] },
    'Research Assistant': { active: 0, queued: 1, capacity: 45, efficiency: 87.3, specialties: ['research', 'synthesis'] },
    'Quality Assurance': { active: 0, queued: 0, capacity: 20, efficiency: 96.8, specialties: ['validation', 'testing'] },
    'Communication Agent': { active: 0, queued: 1, capacity: 15, efficiency: 92.1, specialties: ['routing', 'coordination'] }
  });

  const [routingStats, setRoutingStats] = useState({
    totalTasks: 1247,
    averageWaitTime: '2m 34s',
    routingAccuracy: 94.7,
    loadBalanceScore: 88.3,
    taskThroughput: 23,
    bottleneckAgent: null
  });

  useEffect(() => {
    // Simulate real-time task routing updates
    const interval = setInterval(() => {
      setTaskQueue(prev => prev.map(task => {
        if (task.status === 'processing') {
          const newProgress = Math.min(100, task.progress + Math.random() * 5);
          return {
            ...task,
            progress: newProgress,
            status: newProgress >= 100 ? 'completed' : 'processing'
          };
        }
        if (task.status === 'queued' && Math.random() < 0.3) {
          return { ...task, status: 'processing', progress: 5 };
        }
        return task;
      }));

      // Update routing stats
      setRoutingStats(prev => ({
        ...prev,
        totalTasks: prev.totalTasks + Math.floor(Math.random() * 3),
        routingAccuracy: Math.max(85, Math.min(99, prev.routingAccuracy + (Math.random() - 0.5) * 2)),
        loadBalanceScore: Math.max(70, Math.min(95, prev.loadBalanceScore + (Math.random() - 0.5) * 3)),
        taskThroughput: Math.max(15, Math.min(35, prev.taskThroughput + (Math.random() - 0.5) * 4))
      }));

      // Update agent workloads
      setAgentWorkload(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(agent => {
          updated[agent] = {
            ...updated[agent],
            capacity: Math.max(0, Math.min(100, updated[agent].capacity + (Math.random() - 0.5) * 8)),
            efficiency: Math.max(75, Math.min(99, updated[agent].efficiency + (Math.random() - 0.5) * 1))
          };
        });
        return updated;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getTaskTypeIcon = (type) => {
    const icons = {
      instagram_analysis: '📹',
      system_optimization: '⚡',
      research_synthesis: '🔬',
      quality_validation: '✅',
      communication_routing: '📡'
    };
    return icons[type] || '📋';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: '#EF4444',
      medium: '#F59E0B',
      low: '#10B981'
    };
    return colors[priority] || '#6B7280';
  };

  const getStatusColor = (status) => {
    const colors = {
      processing: '#3B82F6',
      queued: '#F59E0B',
      completed: '#10B981',
      pending: '#6B7280'
    };
    return colors[status] || '#6B7280';
  };

  const getCapacityColor = (capacity) => {
    return capacity >= 80 ? '#EF4444' : capacity >= 60 ? '#F59E0B' : '#10B981';
  };

  const getComplexityBars = (complexity) => {
    return Array.from({ length: 10 }, (_, i) => (
      <div
        key={i}
        className={`h-2 w-1 ${i < complexity ? 'bg-orange-400' : 'bg-gray-600'} rounded`}
      />
    ));
  };

  return (
    <div className="space-y-6">
      {/* Routing Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Total Tasks</div>
          <div className="text-xl font-bold text-blue-400">{routingStats.totalTasks}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Avg Wait Time</div>
          <div className="text-xl font-bold text-yellow-400">{routingStats.averageWaitTime}</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Routing Accuracy</div>
          <div className="text-xl font-bold text-green-400">{routingStats.routingAccuracy.toFixed(1)}%</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Load Balance</div>
          <div className="text-xl font-bold text-purple-400">{routingStats.loadBalanceScore.toFixed(1)}%</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Throughput</div>
          <div className="text-xl font-bold text-indigo-400">{routingStats.taskThroughput}/min</div>
        </div>
      </div>

      {/* Task Queue */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            📋 Intelligent Task Queue
            <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
              {taskQueue.filter(t => t.status !== 'completed').length} active
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {taskQueue.map((task, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{getTaskTypeIcon(task.type)}</div>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-medium">{task.id}</h4>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getPriorityColor(task.priority) + '20',
                        color: getPriorityColor(task.priority)
                      }}
                    >
                      {task.priority}
                    </span>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getStatusColor(task.status) + '20',
                        color: getStatusColor(task.status)
                      }}
                    >
                      {task.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mb-1">{task.type.replace('_', ' ')}</div>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Est: {task.estimatedTime}</span>
                    <span>Complexity:</span>
                    <div className="flex space-x-1">
                      {getComplexityBars(task.complexity)}
                    </div>
                    <span>{task.submittedAt}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-300 mb-2">{task.assignedAgent}</div>
                {task.status === 'processing' && (
                  <div className="w-24 bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-blue-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                )}
                {task.status === 'completed' && (
                  <div className="text-xs text-green-400">✓ Complete</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Workload Distribution */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Agent Workload & Capacity</h3>
        </div>
        <div className="p-4 space-y-4">
          {Object.entries(agentWorkload).map(([agent, data], index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-lg">🤖</div>
                <div>
                  <h4 className="text-white font-medium">{agent}</h4>
                  <div className="flex items-center space-x-4 text-xs text-gray-400">
                    <span>Active: {data.active}</span>
                    <span>Queued: {data.queued}</span>
                    <span>Efficiency: {data.efficiency.toFixed(1)}%</span>
                  </div>
                  <div className="flex space-x-1 mt-1">
                    {data.specialties.map((spec, i) => (
                      <span key={i} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold mb-1" style={{ color: getCapacityColor(data.capacity) }}>
                  {data.capacity.toFixed(0)}% capacity
                </div>
                <div className="w-24 bg-gray-600 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${data.capacity}%`,
                      backgroundColor: getCapacityColor(data.capacity)
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Routing Rules */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Routing Intelligence Rules</h3>
        </div>
        <div className="p-4 space-y-3">
          {routingRules.map((rule, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="text-lg">⚡</div>
                <div>
                  <div className="text-sm font-mono text-blue-300">{rule.condition}</div>
                  <div className="text-xs text-gray-400">Route to: {rule.agent}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-yellow-400">Weight: {rule.weight}</div>
                <div className="w-16 bg-gray-600 rounded-full h-1">
                  <div 
                    className="bg-yellow-400 h-1 rounded-full"
                    style={{ width: `${rule.weight * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskRouting;