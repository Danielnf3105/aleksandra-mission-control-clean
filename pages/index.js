import { useState, useEffect } from 'react';
import { 
  Brain, 
  Zap, 
  Target,
  MessageSquare,
  FileText,
  TrendingUp,
  Activity,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  Database,
  Cpu,
  Network,
  BarChart3,
  PieChart,
  Users,
  Bot,
  Timer,
  Shield,
  Lightbulb,
  ArrowRight,
  PlayCircle,
  PauseCircle,
  StopCircle
} from 'lucide-react';

export default function AIAgentMissionControl() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [agentStats, setAgentStats] = useState({
    tasksCompleted: 847,
    successRate: 96.8,
    avgProcessingTime: 35,
    tokensProcessed: 2847293,
    learningProgress: 78.5,
    qualityScore: 94.2
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate real-time agent metrics
      setAgentStats(prev => ({
        ...prev,
        tasksCompleted: prev.tasksCompleted + Math.random() > 0.7 ? 1 : 0,
        successRate: 95 + Math.random() * 5,
        avgProcessingTime: 30 + Math.random() * 20,
        learningProgress: Math.min(100, prev.learningProgress + Math.random() * 0.1)
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const aiAgents = [
    {
      name: 'Content Strategist',
      status: 'active',
      currentTask: 'Processing Instagram video #11',
      efficiency: 94.2,
      tasksToday: 15,
      specialization: 'Content Analysis & Transcription',
      lastActivity: '2 min ago',
      capabilities: ['Assembly AI Integration', 'Content Categorization', 'Value Assessment']
    },
    {
      name: 'Infrastructure Manager', 
      status: 'active',
      currentTask: 'Monitoring agent email systems',
      efficiency: 98.7,
      tasksToday: 23,
      specialization: 'System Orchestration',
      lastActivity: '30 sec ago',
      capabilities: ['Service Health', 'Account Management', 'API Monitoring']
    },
    {
      name: 'Research Assistant',
      status: 'learning',
      currentTask: 'Analyzing AI mission control patterns',
      efficiency: 87.3,
      tasksToday: 8,
      specialization: 'Information Synthesis',
      lastActivity: '1 min ago',
      capabilities: ['Web Research', 'Data Analysis', 'Pattern Recognition']
    },
    {
      name: 'Communication Agent',
      status: 'standby',
      currentTask: 'Waiting for outreach tasks',
      efficiency: 92.1,
      tasksToday: 0,
      specialization: 'Human-AI Interaction',
      lastActivity: '2 hours ago',
      capabilities: ['Email Composition', 'Social Media', 'Client Communication']
    },
    {
      name: 'Quality Assurance',
      status: 'active',
      currentTask: 'Validating transcript accuracy',
      efficiency: 96.8,
      tasksToday: 11,
      specialization: 'Output Validation',
      lastActivity: '45 sec ago',
      capabilities: ['Content Review', 'Error Detection', 'Performance Analysis']
    }
  ];

  const cognitiveMetrics = [
    { name: 'Reasoning Quality', value: 94.2, trend: '+2.1%', color: 'text-blue-400' },
    { name: 'Decision Accuracy', value: 96.8, trend: '+1.3%', color: 'text-green-400' },
    { name: 'Learning Rate', value: 78.5, trend: '+5.7%', color: 'text-purple-400' },
    { name: 'Adaptability', value: 88.9, trend: '+3.2%', color: 'text-yellow-400' },
    { name: 'Error Recovery', value: 97.1, trend: '+0.8%', color: 'text-cyan-400' },
    { name: 'Context Retention', value: 91.7, trend: '+2.5%', color: 'text-pink-400' }
  ];

  const taskQueues = [
    { 
      category: 'Content Processing',
      pending: 3,
      active: 2, 
      completed: 15,
      avgTime: '35s',
      priority: 'high'
    },
    {
      category: 'Infrastructure Tasks',
      pending: 1,
      active: 4,
      completed: 23,
      avgTime: '2m 15s', 
      priority: 'medium'
    },
    {
      category: 'Research & Analysis',
      pending: 5,
      active: 1,
      completed: 8,
      avgTime: '8m 30s',
      priority: 'low'
    },
    {
      category: 'Communication',
      pending: 0,
      active: 0,
      completed: 0,
      avgTime: '-',
      priority: 'paused'
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-400';
      case 'learning': return 'text-blue-400';
      case 'standby': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return <PlayCircle className="w-4 h-4" />;
      case 'learning': return <Brain className="w-4 h-4" />;
      case 'standby': return <PauseCircle className="w-4 h-4" />;
      case 'error': return <AlertTriangle className="w-4 h-4" />;
      default: return <StopCircle className="w-4 h-4" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      case 'paused': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <div className="border-b border-gray-800 pb-6 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-400 flex items-center">
              <Bot className="w-10 h-10 mr-3" />
              AI AGENT MISSION CONTROL
            </h1>
            <p className="text-gray-400 mt-2 text-lg">
              Aleksandra's Intelligent Agent Monitoring & Orchestration System
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
              <span className="text-sm font-semibold text-green-400">
                ALL AGENTS OPERATIONAL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Agent Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 mb-6">
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Target className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-gray-400 text-sm">Tasks Today</span>
            </div>
            <span className="text-green-400 font-bold text-lg">{agentStats.tasksCompleted}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">+12 since last hour</div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-gray-400 text-sm">Success Rate</span>
            </div>
            <span className="text-blue-400 font-bold text-lg">{agentStats.successRate.toFixed(1)}%</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">+1.2% improvement</div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Timer className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-gray-400 text-sm">Avg Time</span>
            </div>
            <span className="text-purple-400 font-bold text-lg">{agentStats.avgProcessingTime.toFixed(0)}s</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">-5s optimization</div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Database className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-gray-400 text-sm">Tokens</span>
            </div>
            <span className="text-yellow-400 font-bold text-lg">{(agentStats.tokensProcessed / 1000).toFixed(0)}K</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Processing efficiency</div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-gray-400 text-sm">Learning</span>
            </div>
            <span className="text-cyan-400 font-bold text-lg">{agentStats.learningProgress.toFixed(1)}%</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Capability growth</div>
        </div>

        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-gray-400 text-sm">Quality</span>
            </div>
            <span className="text-pink-400 font-bold text-lg">{agentStats.qualityScore.toFixed(1)}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Output validation</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* AI Agent Status */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Bot className="w-5 h-5 mr-2 text-blue-400" />
              Active AI Agents
            </h2>
            <div className="space-y-4">
              {aiAgents.map((agent, index) => (
                <div key={index} className="border border-gray-800 rounded p-3 bg-gray-950">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center space-x-2">
                      <div className={getStatusColor(agent.status)}>
                        {getStatusIcon(agent.status)}
                      </div>
                      <div>
                        <span className="text-gray-300 font-medium text-sm">{agent.name}</span>
                        <div className="text-xs text-gray-500">{agent.specialization}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-400 font-bold">{agent.efficiency}%</div>
                      <div className="text-xs text-gray-500">{agent.tasksToday} tasks</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">{agent.currentTask}</div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Last: {agent.lastActivity}</span>
                    <span className={getStatusColor(agent.status)}>{agent.status.toUpperCase()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cognitive Metrics */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              Cognitive Performance
            </h2>
            <div className="space-y-4">
              {cognitiveMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300 text-sm">{metric.name}</span>
                    <div className="text-xs text-gray-500">{metric.trend}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${metric.color}`}>{metric.value}%</div>
                    <div className="w-20 bg-gray-700 rounded-full h-1 mt-1">
                      <div 
                        className={`h-1 rounded-full ${metric.color.replace('text', 'bg')}`}
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Agent Communication */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mt-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Network className="w-5 h-5 mr-2 text-green-400" />
              Agent Communication
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Inter-Agent Messages</span>
                <span className="text-green-400 font-bold">1,247</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Task Handoffs</span>
                <span className="text-blue-400 font-bold">23</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Knowledge Sharing</span>
                <span className="text-purple-400 font-bold">89%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Coordination Score</span>
                <span className="text-yellow-400 font-bold">94.2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Task Queue Management */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Activity className="w-5 h-5 mr-2 text-yellow-400" />
              Task Queue Status
            </h2>
            <div className="space-y-4">
              {taskQueues.map((queue, index) => (
                <div key={index} className="border border-gray-800 rounded p-3">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 font-medium text-sm">{queue.category}</span>
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(queue.priority)}`}></div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="text-yellow-400 font-bold">{queue.pending}</div>
                      <div className="text-gray-500">Pending</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-400 font-bold">{queue.active}</div>
                      <div className="text-gray-500">Active</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 font-bold">{queue.completed}</div>
                      <div className="text-gray-500">Done</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 text-center">
                    Avg: {queue.avgTime}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Learning Progress */}
          <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 mt-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Lightbulb className="w-5 h-5 mr-2 text-cyan-400" />
              Learning & Adaptation
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Content Analysis</span>
                  <span className="text-cyan-400 font-bold">94%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cyan-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Task Automation</span>
                  <span className="text-green-400 font-bold">87%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-green-400 h-2 rounded-full" style={{ width: '87%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Pattern Recognition</span>
                  <span className="text-blue-400 font-bold">91%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-blue-400 h-2 rounded-full" style={{ width: '91%' }}></div>
                </div>
              </div>
              <div className="text-xs text-gray-500 mt-3">
                Learning velocity: +2.3% this week
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 border-t border-gray-800 pt-6">
        <div className="flex justify-between items-center text-gray-500 text-sm">
          <div className="flex items-center">
            <Bot className="w-4 h-4 mr-2" />
            AI Agent Mission Control v3.0.0 - Cognitive Intelligence Platform
          </div>
          <div>
            Aleksandra Research: AI Agent-Specific Dashboard | Last Update: {currentTime.toLocaleString('pt-PT')}
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>AI Agents Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}