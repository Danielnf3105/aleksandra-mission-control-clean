import { useState, useEffect } from 'react';

const SystemOrchestration = () => {
  const [commandCenter, setCommandCenter] = useState({
    flightDirector: 'GO',
    missionPhase: 'CONTENT PROCESSING OPERATIONS',
    systemsStatus: 'ALL NOMINAL',
    lastCommand: 'OPTIMIZE ASSEMBLY AI BATCH PROCESSING',
    commandTimestamp: new Date().toLocaleTimeString(),
    nextMilestone: 'Evening Content Spike Preparation',
    authorityLevel: 'MISSION CONTROL DIRECTOR',
    emergencyProtocols: 'STANDBY'
  });

  const [orchestrationMetrics, setOrchestrationMetrics] = useState({
    totalSystems: 8,
    activeSystems: 7,
    criticalSystems: 6,
    orchestrationHealth: 98.7,
    systemIntegration: 94.8,
    automationLevel: 87.3,
    redundancyStatus: 96.2,
    taskQueue: 23,
    processingRate: 94.3,
    errorRate: 0.3,
    autoScalingEvents: 12,
    successfulDeployments: 48,
    lastUpdate: new Date().toLocaleTimeString(),
    uptimeHours: 847,
    throughputOps: 2847,
    commandsExecuted: 156,
    systemRecoveries: 3
  });

  const [missionSystems, setMissionSystems] = useState([
    { 
      id: 'MSYS_001',
      systemName: 'Instagram Content Processing Pipeline', 
      designation: 'PRIMARY CONTENT INTAKE',
      status: 'OPERATIONAL', 
      criticalityLevel: 'MISSION CRITICAL',
      load: 73.4, 
      efficiency: 97.2,
      description: 'Primary content ingestion and processing system',
      dependencies: ['MSYS_002', 'MSYS_005', 'MSYS_006'],
      processingCount: 15,
      queueCount: 3,
      lastCommand: 'OPTIMIZE PROCESSING BATCH SIZE',
      commandResult: 'EXECUTING - 15% IMPROVEMENT',
      agentAssignment: 'Content Analyzer Alpha',
      uptime: 168.5
    },
    { 
      id: 'MSYS_002',
      systemName: 'Assembly AI Transcription Engine', 
      designation: 'SPEECH-TO-TEXT CORE',
      status: 'OPTIMAL', 
      criticalityLevel: 'MISSION CRITICAL',
      load: 68.7, 
      efficiency: 98.4,
      description: 'Advanced speech recognition and transcription system',
      dependencies: [],
      creditUsage: 47,
      creditsRemaining: 953,
      lastCommand: 'INCREASE BATCH PROCESSING EFFICIENCY',
      commandResult: 'COMPLETED - 24% COST OPTIMIZATION',
      agentAssignment: 'Assembly AI Coordinator',
      accuracyRate: 97.8
    },
    { 
      id: 'MSYS_003',
      systemName: 'Mission Control Command Center', 
      designation: 'FLIGHT DIRECTOR CONSOLE',
      status: 'NOMINAL', 
      criticalityLevel: 'COMMAND AUTHORITY',
      load: 23.8, 
      efficiency: 99.2,
      description: 'Central command and monitoring interface',
      dependencies: ['MSYS_008'],
      deployments: 48,
      uptime: 99.9,
      lastCommand: 'DEPLOY AGENT INTELLIGENCE NETWORK ENHANCEMENT',
      commandResult: 'SUCCESS - DEPLOYMENT 48 COMPLETE',
      agentAssignment: 'Aleksandra (Mission Director)',
      globalCDNLatency: 180
    },
    { 
      id: 'MSYS_004',
      systemName: 'Agent Intelligence Coordination Network', 
      designation: 'MULTI-AGENT COMMAND GRID',
      status: 'ACTIVE', 
      criticalityLevel: 'INTELLIGENCE CORE',
      load: 84.2, 
      efficiency: 96.8,
      description: '6-agent collaborative intelligence network',
      dependencies: ['MSYS_001', 'MSYS_005'],
      activeAgents: 6,
      messageVolume: 1247,
      lastCommand: 'SYNC AGENT COGNITIVE LOAD BALANCING',
      commandResult: 'OPTIMAL - 96.8% COLLABORATION EFFICIENCY',
      agentAssignment: 'Pipeline Optimizer Beta',
      networkLatency: 12.4
    },
    { 
      id: 'MSYS_005',
      systemName: 'Content Intelligence Library', 
      designation: 'KNOWLEDGE REPOSITORY',
      status: 'OPERATIONAL', 
      criticalityLevel: 'DATA CORE',
      load: 45.6, 
      efficiency: 94.7,
      description: 'Centralized content storage and intelligence system',
      dependencies: [],
      totalVideos: 15,
      transcriptLines: 1247,
      lastCommand: 'INDEX S-TIER CONTENT PATTERNS',
      commandResult: 'PROCESSING - 6 S-TIER PATTERNS IDENTIFIED',
      agentAssignment: 'Quality Assurance Delta',
      storageEfficiency: 94.7
    },
    { 
      id: 'MSYS_006',
      systemName: 'Predictive Intelligence Engine', 
      designation: 'FORECASTING MATRIX',
      status: 'ANALYZING', 
      criticalityLevel: 'STRATEGIC',
      load: 67.3, 
      efficiency: 95.4,
      description: 'Advanced AI forecasting and pattern recognition',
      dependencies: ['MSYS_004', 'MSYS_005'],
      predictions: 6,
      accuracy: 94.7,
      lastCommand: 'MODEL EVENING CONTENT SPIKE PATTERNS',
      commandResult: 'IN PROGRESS - 18:00-20:00 SPIKE PREDICTED',
      agentAssignment: 'Predictive Intelligence Gamma',
      forecastHorizon: 48
    },
    { 
      id: 'MSYS_007',
      systemName: 'LinkedIn Outreach Automation', 
      designation: 'STRATEGIC COMMUNICATION',
      status: 'STANDBY', 
      criticalityLevel: 'SECONDARY',
      load: 0, 
      efficiency: 0,
      description: 'Automated prospect engagement and outreach system',
      dependencies: ['MSYS_004'],
      connectionsSent: 0,
      responseRate: 0,
      lastCommand: 'SYSTEM HIBERNATION - AWAIT ACTIVATION',
      commandResult: 'HIBERNATING - READY FOR DEPLOYMENT',
      agentAssignment: 'Unassigned',
      readinessLevel: 100
    },
    { 
      id: 'MSYS_008',
      systemName: 'Vercel Global Deployment Platform', 
      designation: 'GLOBAL DISTRIBUTION',
      status: 'EXCELLENT', 
      criticalityLevel: 'INFRASTRUCTURE',
      load: 18.3, 
      efficiency: 99.1,
      description: 'Global CDN and mission control hosting platform',
      dependencies: [],
      deployments: 48,
      globalCDN: true,
      lastCommand: 'DEPLOY ENHANCED AGENT INTELLIGENCE NETWORK',
      commandResult: 'SUCCESS - 35s DEPLOYMENT TIME',
      agentAssignment: 'Aleksandra (Mission Director)',
      responseTime: 180,
      globalEdgeNodes: 47
    }
  ]);

  const [activeCommands, setActiveCommands] = useState([
    {
      id: 'CMD_001',
      command: 'OPTIMIZE ASSEMBLY AI BATCH PROCESSING',
      target: 'MSYS_002',
      status: 'EXECUTING',
      priority: 'HIGH',
      initiatedBy: 'Aleksandra (Mission Director)',
      expectedCompletion: '2m 30s',
      progress: 73
    },
    {
      id: 'CMD_002',
      command: 'SYNC AGENT COGNITIVE LOAD BALANCING',
      target: 'MSYS_004',
      status: 'COMPLETED',
      priority: 'MEDIUM',
      initiatedBy: 'Pipeline Optimizer Beta',
      expectedCompletion: 'COMPLETE',
      progress: 100
    },
    {
      id: 'CMD_003',
      command: 'INDEX S-TIER CONTENT PATTERNS',
      target: 'MSYS_005',
      status: 'PROCESSING',
      priority: 'MEDIUM',
      initiatedBy: 'Quality Assurance Delta',
      expectedCompletion: '5m 12s',
      progress: 45
    }
  ]);

  const [orchestrationWorkflows, setOrchestrationWorkflows] = useState([
    {
      id: 'content-processing',
      name: 'Instagram Content Processing Workflow',
      status: 'active',
      steps: ['URL Input', 'Video Download', 'Audio Extraction', 'Assembly AI Transcription', 'Value Analysis', 'Library Storage'],
      currentStep: 4,
      progress: 73,
      estimatedCompletion: '2.4 minutes',
      priority: 'HIGH'
    },
    {
      id: 'mission-control-deployment',
      name: 'Mission Control Dashboard Deployment',
      status: 'completed',
      steps: ['Build', 'Test', 'Deploy to Vercel', 'Health Check', 'DNS Update'],
      currentStep: 5,
      progress: 100,
      estimatedCompletion: 'Completed',
      priority: 'HIGH'
    },
    {
      id: 'agent-coordination',
      name: 'Multi-Agent Task Coordination',
      status: 'active',
      steps: ['Task Analysis', 'Agent Assignment', 'Resource Allocation', 'Execution Monitoring', 'Results Aggregation'],
      currentStep: 3,
      progress: 67,
      estimatedCompletion: '4.8 minutes',
      priority: 'MEDIUM'
    },
    {
      id: 'predictive-analysis',
      name: 'Predictive Intelligence Update',
      status: 'queued',
      steps: ['Data Collection', 'Pattern Analysis', 'Model Update', 'Forecast Generation', 'Insight Delivery'],
      currentStep: 1,
      progress: 15,
      estimatedCompletion: '12 minutes',
      priority: 'LOW'
    }
  ]);

  const [systemDependencies, setSystemDependencies] = useState([
    { from: 'instagram-pipeline', to: 'assembly-ai', type: 'api_call', status: 'healthy', latency: 23 },
    { from: 'instagram-pipeline', to: 'content-library', type: 'data_write', status: 'healthy', latency: 12 },
    { from: 'agent-network', to: 'instagram-pipeline', type: 'task_assignment', status: 'healthy', latency: 8 },
    { from: 'predictive-intelligence', to: 'content-library', type: 'data_read', status: 'healthy', latency: 15 },
    { from: 'mission-control', to: 'vercel-deployment', type: 'hosting', status: 'healthy', latency: 45 },
    { from: 'agent-network', to: 'predictive-intelligence', type: 'feedback_loop', status: 'healthy', latency: 6 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update command center status
      setCommandCenter(prev => ({
        ...prev,
        commandTimestamp: new Date().toLocaleTimeString(),
        lastCommand: Math.random() > 0.85 ? 
          ['OPTIMIZE ASSEMBLY AI BATCH PROCESSING', 'SYNC AGENT COGNITIVE LOAD', 'ENHANCE CONTENT PIPELINE', 'DEPLOY SYSTEM UPDATES'][Math.floor(Math.random() * 4)] :
          prev.lastCommand
      }));

      // Update orchestration metrics
      setOrchestrationMetrics(prev => ({
        ...prev,
        orchestrationHealth: Math.max(95, Math.min(99, prev.orchestrationHealth + (Math.random() - 0.3) * 0.8)),
        systemIntegration: Math.max(90, Math.min(98, prev.systemIntegration + (Math.random() - 0.4) * 1.2)),
        automationLevel: Math.max(80, Math.min(95, prev.automationLevel + (Math.random() - 0.5) * 1.5)),
        redundancyStatus: Math.max(90, Math.min(99, prev.redundancyStatus + (Math.random() - 0.3) * 0.6)),
        taskQueue: Math.max(15, Math.min(35, prev.taskQueue + Math.floor((Math.random() - 0.5) * 6))),
        processingRate: Math.max(90, Math.min(98, prev.processingRate + (Math.random() - 0.3) * 1.5)),
        errorRate: Math.max(0.1, Math.min(1, prev.errorRate + (Math.random() - 0.5) * 0.1)),
        autoScalingEvents: prev.autoScalingEvents + (Math.random() > 0.9 ? 1 : 0),
        throughputOps: prev.throughputOps + Math.floor(Math.random() * 20),
        commandsExecuted: prev.commandsExecuted + (Math.random() > 0.8 ? 1 : 0),
        lastUpdate: new Date().toLocaleTimeString()
      }));

      // Update mission systems
      setMissionSystems(prev => prev.map(system => ({
        ...system,
        load: system.status === 'STANDBY' ? 0 : 
          Math.max(15, Math.min(95, system.load + (Math.random() - 0.5) * 4)),
        efficiency: system.status === 'STANDBY' ? 0 :
          Math.max(90, Math.min(100, system.efficiency + (Math.random() - 0.3) * 1.2)),
        uptime: system.uptime ? system.uptime + 0.01 : undefined,
        
        // System-specific updates
        ...(system.id === 'MSYS_001' && {
          processingCount: system.processingCount + (Math.random() > 0.85 ? 1 : 0),
          queueCount: Math.max(0, Math.min(5, system.queueCount + (Math.random() > 0.7 ? -1 : Math.random() > 0.95 ? 1 : 0)))
        }),
        ...(system.id === 'MSYS_002' && {
          creditUsage: Math.min(1000, system.creditUsage + (Math.random() > 0.92 ? 1 : 0)),
          creditsRemaining: Math.max(0, 1000 - system.creditUsage),
          accuracyRate: Math.max(95, Math.min(99, system.accuracyRate + (Math.random() - 0.5) * 0.3))
        }),
        ...(system.id === 'MSYS_003' && {
          deployments: system.deployments + (Math.random() > 0.98 ? 1 : 0),
          globalCDNLatency: Math.max(120, Math.min(250, system.globalCDNLatency + (Math.random() - 0.5) * 10))
        }),
        ...(system.id === 'MSYS_004' && {
          messageVolume: system.messageVolume + Math.floor(Math.random() * 5),
          networkLatency: Math.max(8, Math.min(20, system.networkLatency + (Math.random() - 0.5) * 2))
        }),
        ...(system.id === 'MSYS_005' && {
          transcriptLines: system.transcriptLines + (Math.random() > 0.88 ? Math.floor(Math.random() * 50) : 0)
        }),
        ...(system.id === 'MSYS_006' && {
          accuracy: Math.max(90, Math.min(98, system.accuracy + (Math.random() - 0.4) * 0.8)),
          forecastHorizon: system.forecastHorizon + (Math.random() > 0.95 ? 12 : 0)
        })
      })));

      // Update active commands progress
      setActiveCommands(prev => prev.map(cmd => {
        if (cmd.status === 'EXECUTING' || cmd.status === 'PROCESSING') {
          const newProgress = Math.min(100, cmd.progress + Math.random() * 8 + 2);
          return {
            ...cmd,
            progress: newProgress,
            status: newProgress >= 100 ? 'COMPLETED' : cmd.status,
            expectedCompletion: newProgress >= 100 ? 'COMPLETE' : cmd.expectedCompletion
          };
        }
        return cmd;
      }));

      // Update workflow progress
      setOrchestrationWorkflows(prev => prev.map(workflow => {
        if (workflow.status === 'active') {
          const newProgress = Math.min(100, workflow.progress + Math.random() * 4 + 1);
          return {
            ...workflow,
            progress: newProgress,
            currentStep: Math.min(workflow.steps.length, Math.ceil((newProgress / 100) * workflow.steps.length)),
            status: newProgress >= 100 ? 'completed' : 'active'
          };
        } else if (workflow.status === 'queued' && Math.random() > 0.95) {
          return { ...workflow, status: 'active', progress: 5 };
        }
        return workflow;
      }));

      // Update system dependencies
      setSystemDependencies(prev => prev.map(dep => ({
        ...dep,
        latency: Math.max(1, dep.latency + (Math.random() - 0.5) * 3),
        status: dep.latency > 50 ? 'warning' : dep.latency > 30 ? 'caution' : 'healthy'
      })));
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const getSystemStatusColor = (status) => {
    switch(status) {
      case 'OPERATIONAL': case 'NOMINAL': case 'ACTIVE': return '#10B981';
      case 'OPTIMAL': case 'EXCELLENT': return '#06B6D4';
      case 'ANALYZING': case 'PROCESSING': return '#8B5CF6';
      case 'STANDBY': return '#6B7280';
      case 'WARNING': return '#F59E0B';
      case 'CRITICAL': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getCriticalityColor = (level) => {
    switch(level) {
      case 'MISSION CRITICAL': return '#EF4444';
      case 'INTELLIGENCE CORE': return '#8B5CF6';
      case 'COMMAND AUTHORITY': return '#F59E0B';
      case 'STRATEGIC': return '#06B6D4';
      case 'DATA CORE': return '#10B981';
      case 'INFRASTRUCTURE': return '#6B7280';
      case 'SECONDARY': return '#4B5563';
      default: return '#6B7280';
    }
  };

  const getCommandStatusColor = (status) => {
    switch(status) {
      case 'COMPLETED': return '#10B981';
      case 'EXECUTING': return '#F59E0B';
      case 'PROCESSING': return '#8B5CF6';
      case 'QUEUED': return '#6B7280';
      case 'FAILED': return '#EF4444';
      default: return '#6B7280';
    }
  };

  return (
    <div className="space-y-6">
      {/* Mission Command Center Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🛡️ SYSTEM ORCHESTRATION COMMAND CENTER
        </h2>
        
        {/* Flight Director Console */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-900 rounded p-4 border border-green-500">
            <div className="text-green-400 text-sm mb-1 font-mono">FLIGHT DIRECTOR</div>
            <div className="text-xl font-bold text-white">{commandCenter.flightDirector}</div>
            <div className="text-xs text-green-300">{commandCenter.systemsStatus}</div>
          </div>
          <div className="bg-blue-900 rounded p-4 border border-blue-500">
            <div className="text-blue-400 text-sm mb-1 font-mono">MISSION PHASE</div>
            <div className="text-sm font-bold text-white">{commandCenter.missionPhase}</div>
            <div className="text-xs text-blue-300">{commandCenter.nextMilestone}</div>
          </div>
          <div className="bg-yellow-900 rounded p-4 border border-yellow-500">
            <div className="text-yellow-400 text-sm mb-1 font-mono">LAST COMMAND</div>
            <div className="text-sm font-bold text-white">{commandCenter.lastCommand}</div>
            <div className="text-xs text-yellow-300">{commandCenter.commandTimestamp}</div>
          </div>
        </div>

        {/* Advanced Orchestration Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-6">
          <div className="text-center">
            <div className="text-xl font-bold text-green-400 font-mono">
              {orchestrationMetrics.activeSystems}/{orchestrationMetrics.totalSystems}
            </div>
            <div className="text-xs text-gray-400 uppercase">Active Systems</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-400 font-mono">
              {orchestrationMetrics.systemIntegration.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Integration</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-purple-400 font-mono">
              {orchestrationMetrics.automationLevel.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Automation</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-cyan-400 font-mono">
              {orchestrationMetrics.redundancyStatus.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Redundancy</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-yellow-400 font-mono">
              {orchestrationMetrics.taskQueue}
            </div>
            <div className="text-xs text-gray-400 uppercase">Task Queue</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-red-400 font-mono">
              {orchestrationMetrics.errorRate.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400 uppercase">Error Rate</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-pink-400 font-mono">
              {orchestrationMetrics.commandsExecuted}
            </div>
            <div className="text-xs text-gray-400 uppercase">Commands</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-orange-400 font-mono">
              {orchestrationMetrics.throughputOps.toLocaleString()}
            </div>
            <div className="text-xs text-gray-400 uppercase">Throughput</div>
          </div>
        </div>

        {/* System Health Overview */}
        <div className="bg-gray-700 rounded p-4 border border-gray-600">
          <div className="flex items-center justify-between mb-2">
            <div className="text-lg font-mono text-gray-300">ORCHESTRATION HEALTH STATUS</div>
            <div className="text-xl font-bold text-green-400 font-mono">
              {orchestrationMetrics.orchestrationHealth.toFixed(1)}% NOMINAL
            </div>
          </div>
          <div className="w-full bg-gray-600 rounded-full h-3">
            <div 
              className="bg-green-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${orchestrationMetrics.orchestrationHealth}%` }}
            />
          </div>
        </div>
      </div>

      {/* Active Commands Panel */}
      <div className="bg-gray-800 rounded-lg p-6 border border-orange-500/30">
        <h3 className="text-lg font-bold text-white mb-4">🎯 ACTIVE COMMAND EXECUTION</h3>
        <div className="space-y-3">
          {activeCommands.map((cmd) => (
            <div key={cmd.id} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-medium text-sm">{cmd.command}</div>
                  <div className="text-xs text-gray-400">Target: {cmd.target} • Initiated by: {cmd.initiatedBy}</div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className={`text-xs px-2 py-1 rounded border font-mono ${
                    cmd.priority === 'HIGH' ? 'bg-red-600 text-white border-red-500' :
                    cmd.priority === 'MEDIUM' ? 'bg-yellow-600 text-white border-yellow-500' :
                    'bg-blue-600 text-white border-blue-500'
                  }`}>
                    {cmd.priority}
                  </span>
                  <span 
                    className="text-xs px-2 py-1 rounded font-mono"
                    style={{ 
                      backgroundColor: getCommandStatusColor(cmd.status) + '20',
                      color: getCommandStatusColor(cmd.status)
                    }}
                  >
                    {cmd.status}
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Progress</span>
                  <span>{Math.round(cmd.progress)}% • ETA: {cmd.expectedCompletion}</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-orange-500 to-yellow-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${cmd.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Nodes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {missionSystems.map(node => (
          <div key={node.id} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{getStatusIcon(node.status)}</span>
                <div className="font-mono text-sm text-white">{node.name}</div>
              </div>
              <div className={`text-xs font-mono uppercase ${getStatusColor(node.status)}`}>
                {node.status}
              </div>
            </div>

            <div className="text-xs text-gray-400 mb-3">{node.description}</div>
            
            {/* Load Bar */}
            <div className="mb-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Load</span>
                <span>{node.load}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all ${
                    node.load > 80 ? 'bg-red-500' : 
                    node.load > 60 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${node.load}%` }}
                ></div>
              </div>
            </div>

            {/* Efficiency Bar */}
            <div className="mb-3">
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

            {/* System-specific metrics */}
            <div className="space-y-1 text-xs">
              {node.id === 'instagram-pipeline' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processed:</span>
                    <span className="text-white">{node.processingCount} videos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Queue:</span>
                    <span className="text-yellow-300">{node.queueCount} pending</span>
                  </div>
                </>
              )}
              {node.id === 'assembly-ai' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Credits Used:</span>
                    <span className="text-white">{node.creditUsage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Remaining:</span>
                    <span className="text-green-300">{node.creditsRemaining}</span>
                  </div>
                </>
              )}
              {node.id === 'mission-control' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Deployments:</span>
                    <span className="text-white">{node.deployments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-300">{node.uptime}%</span>
                  </div>
                </>
              )}
              {node.id === 'agent-network' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Agents:</span>
                    <span className="text-white">{node.activeAgents} active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Messages:</span>
                    <span className="text-blue-300">{node.messageVolume.toLocaleString()}</span>
                  </div>
                </>
              )}
              {node.id === 'content-library' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Videos:</span>
                    <span className="text-white">{node.totalVideos}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Lines:</span>
                    <span className="text-cyan-300">{node.transcriptLines.toLocaleString()}</span>
                  </div>
                </>
              )}
              {node.id === 'predictive-intelligence' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Models:</span>
                    <span className="text-white">{node.predictions} active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Accuracy:</span>
                    <span className="text-purple-300">{node.accuracy}%</span>
                  </div>
                </>
              )}
              {node.id === 'vercel-deployment' && (
                <>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Deploys:</span>
                    <span className="text-white">{node.deployments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">CDN:</span>
                    <span className="text-green-300">Global</span>
                  </div>
                </>
              )}
            </div>

            {/* Dependencies */}
            {node.dependencies.length > 0 && (
              <div className="mt-3 pt-3 border-t border-gray-600">
                <div className="text-xs text-gray-400 mb-1">Dependencies:</div>
                <div className="flex flex-wrap gap-1">
                  {node.dependencies.map((dep, index) => (
                    <span key={index} className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded">
                      {dep.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active Workflows */}
      <div className="bg-gray-800 rounded-lg p-6 border border-green-500/30">
        <h3 className="text-lg font-bold text-white mb-4 font-mono flex items-center">
          ⚙️ Active Orchestration Workflows
          <span className="ml-3 text-sm text-green-400">
            {orchestrationWorkflows.filter(w => w.status === 'active').length} ACTIVE
          </span>
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {orchestrationWorkflows.map(workflow => (
            <div key={workflow.id} className={`p-4 rounded-lg border-l-4 ${
              workflow.status === 'active' ? 'bg-gray-700 border-green-500' :
              workflow.status === 'completed' ? 'bg-gray-700 border-blue-500' :
              'bg-gray-700 border-yellow-500'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="font-medium text-white text-sm">{workflow.name}</div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded border ${
                    workflow.priority === 'HIGH' ? 'bg-red-600 text-white border-red-500' :
                    workflow.priority === 'MEDIUM' ? 'bg-yellow-600 text-white border-yellow-500' :
                    'bg-blue-600 text-white border-blue-500'
                  }`}>
                    {workflow.priority}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded border ${
                    workflow.status === 'active' ? 'bg-green-600 text-white border-green-500' :
                    workflow.status === 'completed' ? 'bg-blue-600 text-white border-blue-500' :
                    'bg-gray-600 text-white border-gray-500'
                  }`}>
                    {workflow.status.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Step {workflow.currentStep}/{workflow.steps.length}: {workflow.steps[workflow.currentStep - 1]}</span>
                  <span>{workflow.progress}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-400 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${workflow.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between text-xs">
                <span className="text-gray-400">ETA: {workflow.estimatedCompletion}</span>
                <span className="text-gray-400">{workflow.steps.length} steps total</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Dependencies */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🔗 System Dependencies & Communication</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {systemDependencies.map((dep, index) => (
            <div key={index} className={`p-3 rounded-lg border ${
              dep.status === 'healthy' ? 'bg-gray-700 border-green-500/50' : 'bg-gray-700 border-yellow-500/50'
            }`}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm text-gray-300">
                  <span className="text-blue-300">{dep.from.replace(/-/g, ' ')}</span>
                  <span className="text-gray-400 mx-2">→</span>
                  <span className="text-green-300">{dep.to.replace(/-/g, ' ')}</span>
                </div>
                <span className={`w-3 h-3 rounded-full ${
                  dep.status === 'healthy' ? 'bg-green-400' : 'bg-yellow-400'
                }`}></span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-400">{dep.type.replace(/_/g, ' ')}</span>
                <span className={`${dep.latency > 30 ? 'text-yellow-400' : 'text-green-400'}`}>
                  {dep.latency}ms
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Orchestration Commands */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🎛️ Orchestration Commands</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded font-mono text-xs transition-colors">
            ▶️ Start Pipeline
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded font-mono text-xs transition-colors">
            📊 Deploy Dashboard
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2 rounded font-mono text-xs transition-colors">
            🤖 Sync Agents
          </button>
          <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-3 py-2 rounded font-mono text-xs transition-colors">
            ⏸️ Pause Queue
          </button>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 rounded font-mono text-xs transition-colors">
            🔄 Restart Services
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded font-mono text-xs transition-colors">
            🛑 Emergency Stop
          </button>
        </div>
        
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition-colors border border-gray-500">
            ⚡ Auto-Scale Content Processing
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition-colors border border-gray-500">
            📈 Optimize Assembly AI Usage
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded font-mono text-sm transition-colors border border-gray-500">
            🎯 Rebalance Agent Network
          </button>
        </div>
      </div>

      {/* Live Activity Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">📡 Live Orchestration Activity</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {[
            '🎬 Instagram content workflow initiated: "Meta Ads Budget Optimization"',
            '⚡ Assembly AI transcription engine scaled up - 23ms response time',
            '🔄 Content processing pipeline optimized - 15% efficiency gain',
            '🛡️ System health check passed - All 8 nodes operational',
            '📊 Agent coordination network rebalanced - 96% efficiency',
            '🎯 Content value analysis completed - S-TIER classification confirmed',
            '📡 Mission Control dashboard deployed - 47th successful deployment',
            '🔧 Predictive intelligence models updated - 94.7% accuracy',
            '💾 Content library synchronized - 15 videos, 1,247 lines indexed',
            '🌐 Vercel CDN optimized - Global edge cache refreshed',
            '🤖 Multi-agent task coordination active - 6 agents synchronized',
            '📈 Orchestration health at 98.7% - Peak performance maintained'
          ].map((activity, index) => (
            <div key={index} className="flex items-center text-sm font-mono">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">{activity}</span>
              <span className="ml-auto text-gray-500">
                {Math.floor(Math.random() * 60)}s ago
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemOrchestration;