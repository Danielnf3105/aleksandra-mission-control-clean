import { useState, useEffect } from 'react';

const AgentCollaborationNetwork = () => {
  const [missionNetworkMetrics, setMissionNetworkMetrics] = useState({
    networkEfficiency: 96.8,
    collaborationScore: 94.7,
    contentProcessingTasks: 15,
    realtimeLatency: 1.2,
    networkLoad: 73.4,
    activeAgentConnections: 6,
    messageVolume: 1247,
    missionSuccessRate: 98.7,
    contentPipelineThroughput: 87.4,
    assemblyAICoordination: 97.8,
    systemOrchestrationHealth: 94.8,
    predictiveIntelligenceSync: 88.9,
    agentLoadBalancing: 78.3,
    realTimeResponseTime: 180, // milliseconds
    missionCriticalTasksActive: 3,
    contentValueOptimization: 89.2
  });

  const [realTimeContentCommunications, setRealTimeContentCommunications] = useState([
    {
      from: 'AGENT_001_ALEKSANDRA',
      to: 'AGENT_002_CONTENT_ANALYZER',
      message: 'MISSION: Process Instagram "Facebook Ads Budget Optimization 2026" - S-TIER predicted',
      timestamp: new Date().toLocaleTimeString(),
      type: 'MISSION_ASSIGNMENT',
      status: 'ACTIVE',
      priority: 'HIGH',
      contentId: 'PROC_001',
      expectedCompletion: '2m 34s',
      agentResponse: 'ACKNOWLEDGED - Processing initiated'
    },
    {
      from: 'AGENT_002_CONTENT_ANALYZER',
      to: 'AGENT_003_ASSEMBLY_AI',
      message: 'Audio extraction complete - 2m 47s video ready for transcription batch',
      timestamp: new Date(Date.now() - 12000).toLocaleTimeString(),
      type: 'CONTENT_HANDOFF',
      status: 'COMPLETED',
      priority: 'HIGH',
      contentId: 'PROC_001',
      dataSize: '15.7MB',
      agentResponse: 'BATCH PROCESSING - 97.8% accuracy target'
    },
    {
      from: 'AGENT_003_ASSEMBLY_AI',
      to: 'AGENT_001_ALEKSANDRA',
      message: 'Transcription 87% complete - Meta Ads keywords detected, S-TIER confidence: 89%',
      timestamp: new Date(Date.now() - 8000).toLocaleTimeString(),
      type: 'PROGRESS_UPDATE',
      status: 'ACTIVE',
      priority: 'MEDIUM',
      contentId: 'PROC_001',
      accuracyRate: '97.8%',
      agentResponse: 'MONITORING - Performance optimal'
    },
    {
      from: 'AGENT_006_QUALITY_ASSURANCE',
      to: 'AGENT_001_ALEKSANDRA',
      message: 'Content value analysis complete - Facebook Ads strategy confirmed S-TIER (94.7 score)',
      timestamp: new Date(Date.now() - 23000).toLocaleTimeString(),
      type: 'QUALITY_VALIDATION',
      status: 'COMPLETED',
      priority: 'HIGH',
      contentId: 'PROC_001',
      valueScore: '94.7/100',
      agentResponse: 'CONFIRMED - S-TIER classification validated'
    },
    {
      from: 'AGENT_005_PREDICTIVE_INTEL',
      to: 'AGENT_001_ALEKSANDRA',
      message: 'Evening content spike predicted: 6-8 videos at 18:00-20:00 (94.7% confidence)',
      timestamp: new Date(Date.now() - 45000).toLocaleTimeString(),
      type: 'FORECAST_ALERT',
      status: 'COMPLETED',
      priority: 'MEDIUM',
      forecastAccuracy: '94.7%',
      predictedVolume: '6-8 videos',
      agentResponse: 'NOTED - Scaling preparation recommended'
    },
    {
      from: 'AGENT_004_PIPELINE_OPTIMIZER',
      to: 'AGENT_001_ALEKSANDRA',
      message: 'Parallel processing optimization deployed - 34% throughput improvement confirmed',
      timestamp: new Date(Date.now() - 67000).toLocaleTimeString(),
      type: 'SYSTEM_OPTIMIZATION',
      status: 'COMPLETED',
      priority: 'HIGH',
      performanceGain: '+34%',
      implementation: 'Parallel Assembly AI calls',
      agentResponse: 'ACKNOWLEDGED - Optimization metrics updated'
    }
  ]);

  const [missionAgentNodes, setMissionAgentNodes] = useState([
    {
      agentId: 'AGENT_001',
      name: 'Aleksandra (Mission Director)',
      designation: 'MISSION_CONTROL_DIRECTOR',
      type: 'mission_command',
      workload: 73.2,
      efficiency: 94.7,
      status: 'COORDINATING',
      role: 'Strategic Mission Control & Agent Orchestration',
      currentTasks: ['Mission Control Dashboard Enhancement', 'Agent Network Coordination', 'Content Pipeline Optimization'],
      specialization: 'System Architecture & Strategic Planning',
      tasksCompleted: 247,
      messagesSent: 156,
      uptime: '168.5h',
      cognitiveLoad: 73.2,
      networkConnections: 5
    },
    {
      agentId: 'AGENT_002',
      name: 'Content Analyzer Alpha',
      designation: 'CONTENT_INTELLIGENCE_SPECIALIST',
      type: 'content_analysis',
      workload: 68.5,
      efficiency: 96.8,
      status: 'PROCESSING',
      role: 'Instagram Video Analysis & S-TIER Content Detection',
      currentTasks: ['Video Analysis: "Facebook Ads Budget Optimization"', 'Value Tier Classification', 'Content Pattern Recognition'],
      specialization: 'Content Intelligence & Value Assessment',
      tasksCompleted: 156,
      messagesSent: 89,
      uptime: '72.3h',
      cognitiveLoad: 68.5,
      networkConnections: 4,
      sTierDetectionRate: '89% (Meta content)'
    },
    {
      agentId: 'AGENT_003',
      name: 'Assembly AI Coordinator',
      designation: 'TRANSCRIPTION_OPERATIONS_SPECIALIST',
      type: 'transcription_specialist',
      workload: 45.8,
      efficiency: 97.4,
      status: 'OPTIMAL',
      role: 'Speech-to-Text Processing & Quality Optimization',
      currentTasks: ['Batch Processing Optimization', 'API Credit Management', 'Accuracy Monitoring'],
      specialization: 'Audio Processing & Transcription Excellence',
      tasksCompleted: 89,
      messagesSent: 67,
      uptime: '96.7h',
      cognitiveLoad: 45.8,
      networkConnections: 6,
      accuracyRate: '97.8%',
      costOptimization: '+24% efficiency'
    },
    {
      agentId: 'AGENT_004',
      name: 'Pipeline Optimizer Beta',
      designation: 'WORKFLOW_MANAGEMENT_SPECIALIST',
      type: 'optimization_specialist',
      workload: 82.1,
      efficiency: 91.2,
      status: 'OPTIMIZING',
      role: 'Process Efficiency & Latency Reduction',
      currentTasks: ['Parallel Processing Implementation', 'Throughput Optimization', 'System Performance Monitoring'],
      specialization: 'Pipeline Architecture & Performance Tuning',
      tasksCompleted: 78,
      messagesSent: 45,
      uptime: '54.2h',
      cognitiveLoad: 82.1,
      networkConnections: 5,
      performanceImprovement: '+34% throughput'
    },
    {
      agentId: 'AGENT_005',
      name: 'Predictive Intelligence Gamma',
      designation: 'FORECASTING_ENGINE_SPECIALIST',
      type: 'prediction_specialist',
      workload: 91.3,
      efficiency: 88.9,
      status: 'ANALYZING',
      role: 'Content Spike Prediction & Pattern Recognition',
      currentTasks: ['Evening Spike Modeling', 'Content Volume Forecasting', 'Performance Prediction'],
      specialization: 'AI Forecasting & Behavioral Analysis',
      tasksCompleted: 34,
      messagesSent: 28,
      uptime: '24.8h',
      cognitiveLoad: 91.3,
      networkConnections: 3,
      predictionAccuracy: '94.7%',
      forecastHorizon: '48 hours'
    },
    {
      agentId: 'AGENT_006',
      name: 'Quality Assurance Delta',
      designation: 'OUTPUT_VALIDATION_SPECIALIST',
      type: 'quality_specialist',
      workload: 35.7,
      efficiency: 99.1,
      status: 'MONITORING',
      role: 'Content Quality Validation & Error Detection',
      currentTasks: ['S-TIER Content Validation', 'Transcription Quality Control', 'System Health Monitoring'],
      specialization: 'Quality Control & Error Prevention',
      tasksCompleted: 123,
      messagesSent: 92,
      uptime: '156.9h',
      cognitiveLoad: 35.7,
      networkConnections: 6,
      errorDetectionRate: '99.3%',
      qualityThreshold: 'Exceeding 97.5% accuracy'
    }
  ]);

  const [collaborationTasks, setCollaborationTasks] = useState([
    {
      id: 1,
      name: 'Meta Ads Budget Optimization - Content Analysis',
      agents: ['aleksandra', 'content', 'assemblyai'],
      status: 'in_progress',
      progress: 85,
      description: 'Processing Instagram reel for Facebook Ads strategy content',
      priority: 'HIGH',
      eta: '8 minutes'
    },
    {
      id: 2,
      name: 'Mission Control Dashboard Enhancement',
      agents: ['aleksandra'],
      status: 'completed',
      progress: 100,
      description: 'Enhanced content pipeline monitoring with real-time queue',
      priority: 'HIGH',
      eta: 'Completed'
    },
    {
      id: 3,
      name: 'Content Value Tier Classification',
      agents: ['aleksandra', 'content', 'analysis'],
      status: 'in_progress',
      progress: 67,
      description: 'Analyzing 15 processed videos for S/A/B/C tier content value',
      priority: 'MEDIUM',
      eta: '12 minutes'
    },
    {
      id: 4,
      name: 'Assembly AI Credit Monitoring',
      agents: ['aleksandra', 'assemblyai'],
      status: 'completed',
      progress: 100,
      description: 'Real-time credit usage tracking and optimization',
      priority: 'MEDIUM',
      eta: 'Completed'
    },
    {
      id: 5,
      name: 'LinkedIn Outreach Pipeline Preparation',
      agents: ['aleksandra', 'outreach', 'crm'],
      status: 'queued',
      progress: 15,
      description: 'Setting up automated connection request system',
      priority: 'LOW',
      eta: 'Pending'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkMetrics(prev => ({
        ...prev,
        networkEfficiency: Math.max(90, Math.min(99, prev.networkEfficiency + (Math.random() - 0.4) * 1.5)),
        collaborationScore: Math.max(80, Math.min(95, prev.collaborationScore + (Math.random() - 0.3) * 2)),
        taskThroughput: prev.taskThroughput + Math.floor(Math.random() * 10),
        averageLatency: Math.max(0.5, Math.min(5, prev.averageLatency + (Math.random() - 0.5) * 0.5)),
        networkLoad: Math.max(40, Math.min(80, prev.networkLoad + (Math.random() - 0.4) * 5))
      }));

      setNetworkNodes(prev => prev.map(node => ({
        ...node,
        workload: node.status === 'active'
          ? Math.max(10, Math.min(95, node.workload + (Math.random() - 0.5) * 8))
          : node.workload,
        efficiency: node.status === 'active'
          ? Math.max(85, Math.min(99, node.efficiency + (Math.random() - 0.3) * 2))
          : node.efficiency
      })));

      setCollaborationTasks(prev => prev.map(task => {
        if (task.status === 'in_progress') {
          return {
            ...task,
            progress: Math.min(100, task.progress + Math.random() * 5)
          };
        }
        return task;
      }));

      // Simulate new communication messages
      if (Math.random() < 0.3) { // 30% chance of new message
        const newMessages = [
          {
            from: 'content',
            to: 'aleksandra',
            message: 'S-TIER content detected - Facebook Ads optimization strategy',
            type: 'ANALYSIS_RESULT',
            status: 'ACTIVE'
          },
          {
            from: 'assemblyai',
            to: 'content',
            message: 'Transcription accuracy: 98.7% - processing complete',
            type: 'STATUS_UPDATE',
            status: 'COMPLETED'
          },
          {
            from: 'aleksandra',
            to: 'analysis',
            message: 'Performance metrics request - content value analysis',
            type: 'TASK_ASSIGNMENT',
            status: 'ACTIVE'
          },
          {
            from: 'crm',
            to: 'aleksandra',
            message: 'Lead database updated - 47 new prospects added',
            type: 'DATA_TRANSFER',
            status: 'COMPLETED'
          }
        ];

        setCommunicationChannels(prev => [
          {
            ...newMessages[Math.floor(Math.random() * newMessages.length)],
            timestamp: new Date().toLocaleTimeString()
          },
          ...prev.slice(0, 7) // Keep only last 8 messages
        ]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getNodeColor = (type) => {
    const colors = {
      orchestrator: '#8B5CF6', // Purple
      specialist: '#10B981',   // Green
      coordinator: '#F59E0B'   // Yellow
    };
    return colors[type] || '#6B7280';
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'active': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'paused': return 'text-gray-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'active': return '🟢';
      case 'warning': return '🟡';
      case 'paused': return '⏸️';
      case 'error': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="space-y-6">
      {/* Network Overview */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🌐 Agent Collaboration Network
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 font-mono">
              {networkMetrics.networkEfficiency.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Network Efficiency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 font-mono">
              {networkMetrics.collaborationScore.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Collaboration Score</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 font-mono">
              {networkMetrics.taskThroughput}
            </div>
            <div className="text-xs text-gray-400 uppercase">Task Throughput</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400 font-mono">
              {networkMetrics.averageLatency.toFixed(1)}s
            </div>
            <div className="text-xs text-gray-400 uppercase">Average Latency</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-400 font-mono">
              {networkMetrics.networkLoad}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Network Load</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-indigo-400 font-mono">
              {networkMetrics.activeConnections}
            </div>
            <div className="text-xs text-gray-400 uppercase">Active Connections</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 font-mono">
              {networkMetrics.messageVolume.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400 uppercase">Message Volume</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-pink-400 font-mono">
              {networkMetrics.successRate.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Agent Nodes */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🤖 Agent Nodes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {networkNodes.map(node => (
            <div key={node.id} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getNodeColor(node.type) }}
                  ></div>
                  <div className="font-mono text-sm text-white">{node.name}</div>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm">{getStatusIcon(node.status)}</span>
                  <div className={`text-xs font-mono uppercase ${getStatusColor(node.status)}`}>
                    {node.status}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Workload</span>
                    <span>{node.workload}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        node.workload > 80 ? 'bg-red-500' :
                        node.workload > 60 ? 'bg-yellow-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${node.workload}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Efficiency</span>
                    <span>{node.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        node.efficiency > 90 ? 'bg-green-500' :
                        node.efficiency > 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${node.efficiency}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collaboration Tasks */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🔗 Collaborative Tasks</h3>
        <div className="space-y-3">
          {collaborationTasks.map(task => (
            <div key={task.id} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-between mb-3">
                <div className="font-mono text-white">{task.name}</div>
                <div className={`text-sm font-mono uppercase px-2 py-1 rounded ${
                  task.status === 'completed' ? 'bg-green-600 text-white' :
                  task.status === 'in_progress' ? 'bg-blue-600 text-white' :
                  'bg-gray-600 text-gray-300'
                }`}>
                  {task.status.replace('_', ' ')}
                </div>
              </div>

              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{Math.round(task.progress)}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-400">Agents:</span>
                {task.agents.map(agentId => {
                  const agent = networkNodes.find(n => n.id === agentId);
                  return agent ? (
                    <span key={agentId} className="text-xs bg-gray-700 px-2 py-1 rounded font-mono">
                      {agent.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-Time Communication Channels */}
      <div className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
        <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center">
          📡 Real-Time Agent Communications
          <span className="ml-3 text-sm text-green-400">
            {communicationChannels.filter(c => c.status === 'ACTIVE').length} ACTIVE CHANNELS
          </span>
        </h3>
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {communicationChannels.map((channel, index) => {
            const fromAgent = networkNodes.find(n => n.id === channel.from);
            const toAgent = networkNodes.find(n => n.id === channel.to);
            return (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                channel.status === 'ACTIVE'
                  ? 'bg-gray-700 border-green-500'
                  : 'bg-gray-700/70 border-gray-500'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-green-300">
                      {fromAgent?.name || channel.from}
                    </span>
                    <span className="text-blue-400">→</span>
                    <span className="text-sm font-medium text-blue-300">
                      {toAgent?.name || channel.to}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      channel.type === 'TASK_ASSIGNMENT' ? 'bg-purple-600 text-white' :
                      channel.type === 'DATA_TRANSFER' ? 'bg-blue-600 text-white' :
                      channel.type === 'STATUS_UPDATE' ? 'bg-yellow-600 text-white' :
                      'bg-green-600 text-white'
                    }`}>
                      {channel.type.replace(/_/g, ' ')}
                    </span>
                    <span className={`w-3 h-3 rounded-full ${
                      channel.status === 'ACTIVE' ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
                    }`}></span>
                  </div>
                </div>
                <div className="text-sm text-gray-300 mb-1">{channel.message}</div>
                <div className="text-xs text-gray-400">{channel.timestamp}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Network Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">📊 Network Activity Timeline</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {[
            '🎬 Instagram Pipeline: "Meta Ads Budget Optimization" - S-TIER content processing',
            '🔥 Assembly AI: 98.2% transcription accuracy achieved - optimal performance',
            '📊 Content Analysis: 6 S-TIER, 5 A-TIER pieces identified in library',
            '⚡ Processing Queue: 2 videos actively transcribing - 85% complete',
            '🎯 Mission Control: Dashboard enhanced with real-time monitoring',
            '🚀 Network efficiency peaked at 96.8% - agent coordination optimal',
            '📈 Performance Analytics: Content value classification accuracy improved',
            '🔄 System Health: All 6 agents operational - no bottlenecks detected',
            '💾 Content Library: 15 videos processed, 1,247 transcript lines indexed',
            '📡 Communication Channels: 18 active connections across agent network'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500 text-xs">
                {Math.floor(Math.random() * 45)} min ago
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentCollaborationNetwork;