// Enhanced Real-Time Intelligence Center v2.0
// Inspired by NASA MCC Houston + SpaceX Hawthorne + Modern SOC Best Practices
import { useState, useEffect } from 'react';

const EnhancedRealTimeIntelligence = () => {
  const [missionMetrics, setMissionMetrics] = useState({
    missionElapsedTime: 0,
    contentProcessingActive: true,
    agentFleetStatus: 'OPERATIONAL',
    systemHealthScore: 98.7,
    automationLevel: 94.3,
    predictiveAccuracy: 96.8,
    lastUpdate: new Date().toLocaleTimeString()
  });

  const [agentFleet, setAgentFleet] = useState([
    { id: 'ALEKSANDRA-01', name: 'Content Intelligence', status: 'ACTIVE', workload: 76, efficiency: 98.3 },
    { id: 'TRANSCRIBE-02', name: 'Assembly AI Processor', status: 'ACTIVE', workload: 63, efficiency: 96.7 },
    { id: 'ANALYTICS-03', name: 'Performance Monitor', status: 'ACTIVE', workload: 45, efficiency: 97.9 },
    { id: 'ORCHESTRATOR-04', name: 'Task Coordinator', status: 'ACTIVE', workload: 82, efficiency: 95.4 },
    { id: 'PREDICTOR-05', name: 'Intelligence Engine', status: 'ACTIVE', workload: 58, efficiency: 99.1 },
    { id: 'GUARDIAN-06', name: 'Security Monitor', status: 'ACTIVE', workload: 34, efficiency: 97.2 }
  ]);

  const [automationInsights, setAutomationInsights] = useState([
    { type: 'OPTIMIZATION', message: 'Content processing pipeline auto-scaled +15%', time: '05:42:17', priority: 'HIGH' },
    { type: 'PREDICTION', message: 'System load increase predicted in 2h 34m', time: '05:41:03', priority: 'MEDIUM' },
    { type: 'AUTOMATION', message: 'Agent workload balanced automatically', time: '05:39:45', priority: 'LOW' },
    { type: 'INTELLIGENCE', message: 'Performance pattern anomaly detected & resolved', time: '05:38:22', priority: 'MEDIUM' }
  ]);

  const [realTimeStreams, setRealTimeStreams] = useState({
    contentPipeline: { rate: 15.7, unit: 'items/min', trend: 'UP', health: 'OPTIMAL' },
    agentCommunication: { rate: 247, unit: 'msgs/sec', trend: 'STABLE', health: 'EXCELLENT' },
    systemThroughput: { rate: 94.3, unit: '% capacity', trend: 'STABLE', health: 'OPTIMAL' },
    errorRate: { rate: 0.03, unit: '% errors', trend: 'DOWN', health: 'EXCELLENT' }
  });

  const [intelligenceLevels, setIntelligenceLevels] = useState({
    patternRecognition: 97.4,
    anomalyDetection: 95.8,
    predictiveAnalysis: 96.2,
    automatedResponse: 94.6,
    learningAdaptation: 98.1,
    contextualAwareness: 95.3
  });

  useEffect(() => {
    // Mission timer
    const timerInterval = setInterval(() => {
      setMissionMetrics(prev => ({
        ...prev,
        missionElapsedTime: prev.missionElapsedTime + 1,
        lastUpdate: new Date().toLocaleTimeString()
      }));
    }, 1000);

    // Real-time data simulation
    const dataInterval = setInterval(() => {
      // Update agent fleet metrics
      setAgentFleet(prev => prev.map(agent => ({
        ...agent,
        workload: Math.max(10, Math.min(95, agent.workload + (Math.random() - 0.5) * 8)),
        efficiency: Math.max(85, Math.min(99.9, agent.efficiency + (Math.random() - 0.5) * 2))
      })));

      // Update real-time streams
      setRealTimeStreams(prev => ({
        contentPipeline: {
          ...prev.contentPipeline,
          rate: Math.max(5, prev.contentPipeline.rate + (Math.random() - 0.5) * 3),
          trend: Math.random() > 0.7 ? (Math.random() > 0.5 ? 'UP' : 'DOWN') : 'STABLE'
        },
        agentCommunication: {
          ...prev.agentCommunication,
          rate: Math.max(200, Math.min(300, prev.agentCommunication.rate + (Math.random() - 0.5) * 20))
        },
        systemThroughput: {
          ...prev.systemThroughput,
          rate: Math.max(80, Math.min(98, prev.systemThroughput.rate + (Math.random() - 0.5) * 3))
        },
        errorRate: {
          ...prev.errorRate,
          rate: Math.max(0, Math.min(2, prev.errorRate.rate + (Math.random() - 0.7) * 0.1))
        }
      }));

      // Update intelligence levels
      setIntelligenceLevels(prev => Object.fromEntries(
        Object.entries(prev).map(([key, value]) => [
          key, 
          Math.max(85, Math.min(99.9, value + (Math.random() - 0.5) * 1.5))
        ])
      ));

      // Update mission metrics
      setMissionMetrics(prev => ({
        ...prev,
        systemHealthScore: Math.max(90, Math.min(99.9, prev.systemHealthScore + (Math.random() - 0.3) * 2)),
        automationLevel: Math.max(85, Math.min(98, prev.automationLevel + (Math.random() - 0.4) * 2)),
        predictiveAccuracy: Math.max(90, Math.min(99, prev.predictiveAccuracy + (Math.random() - 0.3) * 1.5))
      }));
    }, 3000);

    // Add periodic insights
    const insightInterval = setInterval(() => {
      const insights = [
        { type: 'OPTIMIZATION', message: 'Resource allocation optimized for peak efficiency', priority: 'HIGH' },
        { type: 'PREDICTION', message: 'Content spike predicted in next 3 hours', priority: 'MEDIUM' },
        { type: 'AUTOMATION', message: 'Auto-scaling triggered for processing queue', priority: 'LOW' },
        { type: 'INTELLIGENCE', message: 'Pattern deviation auto-corrected', priority: 'MEDIUM' },
        { type: 'SECURITY', message: 'All authentication tokens refreshed successfully', priority: 'LOW' },
        { type: 'PERFORMANCE', message: 'System latency reduced by 12%', priority: 'HIGH' }
      ];

      const newInsight = {
        ...insights[Math.floor(Math.random() * insights.length)],
        time: new Date().toLocaleTimeString()
      };

      setAutomationInsights(prev => [newInsight, ...prev.slice(0, 7)]);
    }, 20000);

    return () => {
      clearInterval(timerInterval);
      clearInterval(dataInterval);
      clearInterval(insightInterval);
    };
  }, []);

  const formatMissionTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const getStatusColor = (status) => {
    const colors = {
      'ACTIVE': '#10B981',
      'OPTIMAL': '#10B981',
      'EXCELLENT': '#059669',
      'STANDBY': '#F59E0B',
      'WARNING': '#EF4444',
      'CRITICAL': '#DC2626'
    };
    return colors[status] || '#6B7280';
  };

  const getTrendIcon = (trend) => {
    switch(trend) {
      case 'UP': return '📈';
      case 'DOWN': return '📉';
      case 'STABLE': return '➡️';
      default: return '📊';
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'HIGH': return '#EF4444';
      case 'MEDIUM': return '#F59E0B';
      case 'LOW': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <div className="space-y-6 font-mono text-sm">
      {/* Mission Command Header */}
      <div className="bg-gray-900 rounded-lg border-2 border-blue-500 p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-400 mb-2">ENHANCED REAL-TIME INTELLIGENCE CENTER</h1>
          <div className="text-lg text-white">ALEKSANDRA MISSION CONTROL • v2.0</div>
          <div className="text-sm text-blue-300 mt-2">Inspired by NASA MCC + SpaceX + Modern SOC</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-900 rounded p-4 border border-blue-400">
            <div className="text-blue-400 text-xs mb-1">MISSION TIME</div>
            <div className="text-xl font-bold text-white">{formatMissionTime(missionMetrics.missionElapsedTime)}</div>
            <div className="text-xs text-blue-300">Continuous Operation</div>
          </div>
          
          <div className="bg-green-900 rounded p-4 border border-green-400">
            <div className="text-green-400 text-xs mb-1">SYSTEM HEALTH</div>
            <div className="text-xl font-bold text-white">{missionMetrics.systemHealthScore.toFixed(1)}%</div>
            <div className="text-xs text-green-300">All Systems Nominal</div>
          </div>
          
          <div className="bg-purple-900 rounded p-4 border border-purple-400">
            <div className="text-purple-400 text-xs mb-1">AUTOMATION LEVEL</div>
            <div className="text-xl font-bold text-white">{missionMetrics.automationLevel.toFixed(1)}%</div>
            <div className="text-xs text-purple-300">Full Automation Active</div>
          </div>
          
          <div className="bg-orange-900 rounded p-4 border border-orange-400">
            <div className="text-orange-400 text-xs mb-1">PREDICTIVE ACCURACY</div>
            <div className="text-xl font-bold text-white">{missionMetrics.predictiveAccuracy.toFixed(1)}%</div>
            <div className="text-xs text-orange-300">AI Intelligence Active</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Agent Fleet Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold text-white mb-4">🤖 AI AGENT FLEET COMMAND</h3>
          
          <div className="space-y-3">
            {agentFleet.map((agent) => (
              <div key={agent.id} className="bg-gray-700 rounded p-3 border border-gray-600">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <div className="text-white font-bold text-xs">{agent.id}</div>
                    <div className="text-gray-300 text-xs">{agent.name}</div>
                  </div>
                  <div className="text-right">
                    <div 
                      className="text-xs font-bold"
                      style={{ color: getStatusColor(agent.status) }}
                    >
                      {agent.status}
                    </div>
                    <div className="text-xs text-gray-400">{agent.efficiency.toFixed(1)}% eff</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <div className="bg-gray-600 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full transition-all duration-1000 rounded-full"
                        style={{ 
                          width: `${agent.workload}%`,
                          backgroundColor: agent.workload > 80 ? '#EF4444' : agent.workload > 60 ? '#F59E0B' : '#10B981'
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-xs text-gray-300 min-w-[35px]">{agent.workload}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-Time Data Streams */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
          <h3 className="text-lg font-bold text-white mb-4">📊 REAL-TIME DATA STREAMS</h3>
          
          <div className="space-y-4">
            {Object.entries(realTimeStreams).map(([key, stream]) => (
              <div key={key} className="bg-gray-700 rounded p-4 border border-gray-600">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium capitalize text-sm">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-xs text-gray-400">
                      <span style={{ color: getStatusColor(stream.health) }}>
                        ● {stream.health}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-white font-bold text-lg flex items-center space-x-2">
                      <span>{stream.rate.toFixed(1)}</span>
                      <span className="text-xs">{getTrendIcon(stream.trend)}</span>
                    </div>
                    <div className="text-xs text-gray-400">{stream.unit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intelligence Levels Matrix */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
        <h3 className="text-lg font-bold text-white mb-4">🧠 AI INTELLIGENCE MATRIX</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(intelligenceLevels).map(([capability, level]) => (
            <div key={capability} className="bg-gray-700 rounded p-4 border border-gray-600">
              <div className="text-center">
                <div className="text-white font-medium capitalize text-sm mb-2">
                  {capability.replace(/([A-Z])/g, ' $1').trim()}
                </div>
                <div className="text-2xl font-bold text-white mb-2">
                  {level.toFixed(1)}%
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Automated Intelligence Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
        <h3 className="text-lg font-bold text-white mb-4">🚀 AUTOMATED INTELLIGENCE FEED</h3>
        
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {automationInsights.map((insight, index) => (
            <div key={index} className="flex items-center space-x-4 p-2 bg-gray-700 rounded border border-gray-600">
              <div className="text-gray-400 text-xs min-w-[60px]">{insight.time}</div>
              
              <div 
                className="px-2 py-1 rounded text-xs font-bold"
                style={{ 
                  backgroundColor: `${getPriorityColor(insight.priority)}20`,
                  color: getPriorityColor(insight.priority),
                  border: `1px solid ${getPriorityColor(insight.priority)}`
                }}
              >
                {insight.type}
              </div>
              
              <div className="flex-1 text-gray-300 text-sm">{insight.message}</div>
              
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: getPriorityColor(insight.priority) }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Status Footer */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-600">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <div>Enhanced Real-Time Intelligence • v2.0 • Continuous Operation</div>
          <div>Last Update: {missionMetrics.lastUpdate}</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>LIVE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedRealTimeIntelligence;