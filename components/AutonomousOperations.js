import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AutonomousOperations = () => {
  const [autonomyMetrics, setAutonomyMetrics] = useState({
    autonomyLevel: 87.3,
    decisionsPerHour: 342,
    humanInterventions: 12,
    successRate: 96.8,
    learningRate: 23.5,
    adaptationScore: 91.2
  });

  const [decisionHistory, setDecisionHistory] = useState([]);
  const [autonomousAgents, setAutonomousAgents] = useState([
    { 
      id: 'aleksandra', 
      name: 'Aleksandra AI', 
      autonomyLevel: 92, 
      decisions: 1547, 
      interventions: 3, 
      specialization: 'Orchestration',
      status: 'autonomous',
      learningCapability: 'advanced'
    },
    { 
      id: 'content-ai', 
      name: 'Content AI', 
      autonomyLevel: 89, 
      decisions: 234, 
      interventions: 1, 
      specialization: 'Content Processing',
      status: 'autonomous', 
      learningCapability: 'intermediate'
    },
    { 
      id: 'optimization-ai', 
      name: 'Optimization AI', 
      autonomyLevel: 95, 
      decisions: 892, 
      interventions: 0, 
      specialization: 'Performance Tuning',
      status: 'autonomous',
      learningCapability: 'expert'
    },
    { 
      id: 'prediction-ai', 
      name: 'Prediction AI', 
      autonomyLevel: 91, 
      decisions: 445, 
      interventions: 2, 
      specialization: 'Forecasting',
      status: 'autonomous',
      learningCapability: 'advanced'
    },
    { 
      id: 'security-ai', 
      name: 'Security AI', 
      autonomyLevel: 84, 
      decisions: 156, 
      interventions: 4, 
      specialization: 'Threat Detection',
      status: 'supervised',
      learningCapability: 'intermediate'
    },
    { 
      id: 'adaptation-ai', 
      name: 'Adaptation AI', 
      autonomyLevel: 88, 
      decisions: 267, 
      interventions: 2, 
      specialization: 'System Evolution',
      status: 'autonomous',
      learningCapability: 'advanced'
    }
  ]);

  const [autonomousActions, setAutonomousActions] = useState([
    { action: 'Load Balancing', frequency: 47, success: 98.3, impact: 'medium', automated: true },
    { action: 'Error Recovery', frequency: 23, success: 94.7, impact: 'high', automated: true },
    { action: 'Resource Scaling', frequency: 18, success: 96.1, impact: 'medium', automated: true },
    { action: 'Performance Tuning', frequency: 31, success: 92.8, impact: 'high', automated: true },
    { action: 'Security Scanning', frequency: 89, success: 99.1, impact: 'critical', automated: true },
    { action: 'Predictive Maintenance', frequency: 12, success: 89.4, impact: 'medium', automated: true }
  ]);

  const [learningProgress, setLearningProgress] = useState([
    { capability: 'Pattern Recognition', progress: 94, trend: 'improving' },
    { capability: 'Decision Making', progress: 91, trend: 'stable' },
    { capability: 'Self-Optimization', progress: 88, trend: 'improving' },
    { capability: 'Anomaly Detection', progress: 96, trend: 'stable' },
    { capability: 'Predictive Analysis', progress: 92, trend: 'improving' },
    { capability: 'Adaptive Response', progress: 87, trend: 'improving' }
  ]);

  // Initialize decision history
  useEffect(() => {
    const now = Date.now();
    const initialHistory = Array.from({ length: 12 }, (_, i) => ({
      time: new Date(now - (11 - i) * 60 * 60 * 1000).getHours() + ':00',
      autonomousDecisions: Math.floor(Math.random() * 50) + 200,
      humanInterventions: Math.floor(Math.random() * 5),
      successRate: 90 + Math.random() * 10
    }));
    setDecisionHistory(initialHistory);
  }, []);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update autonomy metrics
      setAutonomyMetrics(prev => ({
        autonomyLevel: Math.max(80, Math.min(95, prev.autonomyLevel + (Math.random() - 0.3) * 2)),
        decisionsPerHour: Math.max(200, Math.min(500, prev.decisionsPerHour + Math.floor((Math.random() - 0.4) * 50))),
        humanInterventions: Math.max(0, Math.min(25, prev.humanInterventions + Math.floor((Math.random() - 0.7) * 3))),
        successRate: Math.max(90, Math.min(99, prev.successRate + (Math.random() - 0.2) * 1.5)),
        learningRate: Math.max(15, Math.min(35, prev.learningRate + (Math.random() - 0.3) * 3)),
        adaptationScore: Math.max(85, Math.min(98, prev.adaptationScore + (Math.random() - 0.2) * 2))
      }));

      // Update agent autonomy levels
      setAutonomousAgents(prev => prev.map(agent => ({
        ...agent,
        autonomyLevel: Math.max(75, Math.min(98, agent.autonomyLevel + (Math.random() - 0.3) * 2)),
        decisions: agent.decisions + Math.floor(Math.random() * 10),
        interventions: Math.max(0, agent.interventions + Math.floor((Math.random() - 0.8) * 2))
      })));

      // Update decision history
      setDecisionHistory(prev => {
        const newPoint = {
          time: new Date().getHours() + ':00',
          autonomousDecisions: Math.floor(Math.random() * 50) + 200,
          humanInterventions: Math.floor(Math.random() * 5),
          successRate: 90 + Math.random() * 10
        };
        return [...prev.slice(1), newPoint];
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getAutonomyColor = (level) => {
    if (level >= 90) return '#10B981'; // Green
    if (level >= 75) return '#F59E0B'; // Yellow
    return '#EF4444'; // Red
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'autonomous': return 'text-green-400 bg-green-900/30 border-green-500/30';
      case 'supervised': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30';
      case 'manual': return 'text-red-400 bg-red-900/30 border-red-500/30';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
    }
  };

  const getImpactColor = (impact) => {
    switch(impact) {
      case 'critical': return 'text-red-300';
      case 'high': return 'text-orange-300';
      case 'medium': return 'text-yellow-300';
      case 'low': return 'text-green-300';
      default: return 'text-gray-300';
    }
  };

  const pieColors = ['#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#06B6D4', '#EC4899'];

  return (
    <div className="space-y-6">
      {/* Autonomous Operations Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🤖 Autonomous Operations Center
        </h2>
        
        {/* Key Autonomy Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Autonomy Level</div>
            <div className="text-2xl font-bold font-mono" style={{ color: getAutonomyColor(autonomyMetrics.autonomyLevel) }}>
              {autonomyMetrics.autonomyLevel.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Decisions/Hour</div>
            <div className="text-2xl font-bold font-mono text-blue-400">
              {autonomyMetrics.decisionsPerHour}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Interventions</div>
            <div className="text-2xl font-bold font-mono text-yellow-400">
              {autonomyMetrics.humanInterventions}
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Success Rate</div>
            <div className="text-2xl font-bold font-mono text-green-400">
              {autonomyMetrics.successRate.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Learning Rate</div>
            <div className="text-2xl font-bold font-mono text-purple-400">
              {autonomyMetrics.learningRate.toFixed(1)}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Adaptation</div>
            <div className="text-2xl font-bold font-mono text-cyan-400">
              {autonomyMetrics.adaptationScore.toFixed(1)}%
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-mono text-white">Operational Mode:</span>
            <span className="text-xl font-bold font-mono text-green-400">FULLY AUTONOMOUS</span>
          </div>
          <div className="text-sm font-mono text-gray-400">
            Next Adaptation Cycle: 23 minutes
          </div>
        </div>
      </div>

      {/* Autonomous Agents Grid */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🧠 Autonomous Agent Fleet</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {autonomousAgents.map(agent => (
            <div key={agent.id} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{agent.name}</div>
                <div className={`text-xs px-2 py-1 rounded font-mono border ${getStatusColor(agent.status)}`}>
                  {agent.status.toUpperCase()}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-xs text-gray-400">{agent.specialization}</div>
                
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Autonomy Level</span>
                  <span className="font-mono" style={{ color: getAutonomyColor(agent.autonomyLevel) }}>
                    {agent.autonomyLevel}%
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full transition-all"
                    style={{ 
                      width: `${agent.autonomyLevel}%`,
                      backgroundColor: getAutonomyColor(agent.autonomyLevel)
                    }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-gray-400">Decisions:</span>
                    <span className="font-mono text-blue-400 ml-1">{agent.decisions}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Interventions:</span>
                    <span className="font-mono text-yellow-400 ml-1">{agent.interventions}</span>
                  </div>
                </div>

                <div className="text-xs">
                  <span className="text-gray-400">Learning:</span>
                  <span className={`font-mono ml-1 ${
                    agent.learningCapability === 'expert' ? 'text-green-400' :
                    agent.learningCapability === 'advanced' ? 'text-blue-400' : 'text-yellow-400'
                  }`}>
                    {agent.learningCapability.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Decision History Chart */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">📊 Decision Autonomy Trends</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={decisionHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Line type="monotone" dataKey="autonomousDecisions" stroke="#10B981" strokeWidth={2} name="Autonomous Decisions" />
                <Line type="monotone" dataKey="humanInterventions" stroke="#F59E0B" strokeWidth={2} name="Human Interventions" />
                <Line type="monotone" dataKey="successRate" stroke="#8B5CF6" strokeWidth={2} name="Success Rate %" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Learning Progress */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🎓 Learning & Adaptation Progress</h3>
          <div className="space-y-4">
            {learningProgress.map((capability, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-3 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm text-white">{capability.capability}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-gray-400">{capability.progress}%</span>
                    <span className={`text-xs font-mono ${
                      capability.trend === 'improving' ? 'text-green-400' :
                      capability.trend === 'stable' ? 'text-blue-400' : 'text-yellow-400'
                    }`}>
                      {capability.trend === 'improving' ? '↗' : capability.trend === 'stable' ? '→' : '↘'}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${capability.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Autonomous Actions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">⚡ Autonomous Action Categories</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {autonomousActions.map((action, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{action.action}</div>
                <div className="text-xs bg-green-600 text-white px-2 py-1 rounded font-mono">
                  AUTO
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Frequency (24h)</span>
                  <span className="font-mono text-blue-400">{action.frequency}x</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="font-mono text-green-400">{action.success}%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Impact Level</span>
                  <span className={`font-mono uppercase ${getImpactColor(action.impact)}`}>
                    {action.impact}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${action.success}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Autonomous Operations Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🤖 Live Autonomous Activity</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {[
            '🧠 Aleksandra AI: Optimized content processing pipeline - 23% efficiency gain achieved',
            '⚡ Optimization AI: Autonomous load balancing triggered - distributed 47 tasks across agents',
            '🔮 Prediction AI: Forecasted system peak at 21:30 - pre-scaling resources autonomously',
            '🛡️ Security AI: Detected anomalous pattern in API calls - automatically implemented mitigation',
            '📊 Adaptation AI: Learned new efficiency pattern - updating decision model autonomously',
            '🎯 Content AI: Processed Instagram video batch - 35-second average maintained autonomously',
            '🔧 System AI: Autonomous error recovery completed - 99.8% uptime maintained',
            '🚀 Mission Control: All systems operating in full autonomous mode - human oversight minimal'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 180)} sec ago
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Autonomous Evolution Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🧬 Autonomous Evolution Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 rounded-lg p-4 border border-green-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-lg font-bold text-green-400 font-mono">FULLY OPERATIONAL</div>
              <div className="text-xs text-green-300 mt-1">All systems autonomous</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-lg font-bold text-blue-400 font-mono">SELF-IMPROVING</div>
              <div className="text-xs text-blue-300 mt-1">Continuous learning active</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-center">
              <div className="text-3xl mb-2">🔮</div>
              <div className="text-lg font-bold text-purple-400 font-mono">PREDICTIVE</div>
              <div className="text-xs text-purple-300 mt-1">Future-oriented decisions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutonomousOperations;