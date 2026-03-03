// Mission Control v6.8 - Phase 5: Distributed Swarm Intelligence
// Inspired by NASA's 2025 Distributed Spacecraft Autonomy (DSA) and Starling Mission
import { useState, useEffect } from 'react';

export default function DistributedSwarmIntelligence() {
  const [swarmData, setSwarmData] = useState({
    swarmManeuverPlanning: {
      status: 'COORDINATING_SWARM',
      activeSwarms: 3,
      totalAgents: 24,
      maneuverAccuracy: 98.4,
      coordinationLatency: '12ms',
      currentManeuvers: [
        {
          swarm: 'Content Processing Swarm',
          agents: 8,
          maneuver: 'Distributed Instagram batch processing',
          progress: 87,
          eta: '4 mins',
          complexity: 'HIGH',
          success_rate: 99.2
        },
        {
          swarm: 'Marketing Intelligence Swarm', 
          agents: 6,
          maneuver: 'LinkedIn prospect coordination',
          progress: 65,
          eta: '8 mins',
          complexity: 'MEDIUM',
          success_rate: 96.8
        },
        {
          swarm: 'Infrastructure Optimization Swarm',
          agents: 10,
          maneuver: 'Auto-scaling resource allocation',
          progress: 92,
          eta: '2 mins', 
          complexity: 'ULTRA',
          success_rate: 98.9
        }
      ],
      completedManeuvers: 847,
      averageExecutionTime: '3.2 mins'
    },
    communicationsNetworking: {
      protocol: 'DSA_MESH_v2.1',
      networkTopology: 'ADAPTIVE_MESH',
      activeConnections: 156,
      bandwidthUtilization: 73.4,
      latencyOptimization: 94.8,
      meshNodes: [
        { id: 'CTRL-01', type: 'Command Node', connections: 24, load: 68, status: 'OPTIMAL' },
        { id: 'PROC-CLUSTER', type: 'Processing Hub', connections: 18, load: 84, status: 'HIGH_THROUGHPUT' },
        { id: 'MKTG-NET', type: 'Marketing Network', connections: 12, load: 56, status: 'COORDINATING' },
        { id: 'INFRA-MESH', type: 'Infrastructure Mesh', connections: 32, load: 71, status: 'OPTIMIZING' },
        { id: 'LEARN-NODE', type: 'Learning Center', connections: 15, load: 45, status: 'EVOLVING' },
        { id: 'COORD-HUB', type: 'Coordination Hub', connections: 28, load: 89, status: 'ORCHESTRATING' }
      ],
      networkResilience: 97.6,
      selfHealingEvents: 23
    },
    relativeNavigation: {
      engine: 'SWARM_NAV_AI_v3.0',
      navigationAccuracy: 99.7,
      relativePositioning: 'ULTRA_PRECISE',
      trackingAgents: 24,
      navigationEvents: [
        { agent: 'Content-Agent-07', position: 'Processing Queue Alpha', relation: '2.3ms ahead of cluster', efficiency: 98 },
        { agent: 'Marketing-Agent-03', position: 'LinkedIn Outreach Zone', relation: '1.1ms sync with lead scorer', efficiency: 96 },
        { agent: 'Infra-Agent-12', position: 'Resource Optimization Grid', relation: 'Perfectly aligned with load balancer', efficiency: 99 },
        { agent: 'Learning-Agent-01', position: 'Knowledge Integration Space', relation: '0.8ms ahead of synthesis cluster', efficiency: 97 }
      ],
      positioningPrecision: '±0.05ms',
      relativeDrift: 0.03,
      navigationCorrections: 12
    },
    autonomousCoordination: {
      coordinationProtocol: 'DSA_AUTONOMOUS_v4.2',
      decisionMakingNodes: 6,
      autonomousDecisions: 1834,
      coordinationEfficiency: 96.8,
      humanInterventionRate: 1.3,
      distributedTasks: [
        {
          task: 'Multi-platform content synchronization',
          assignedSwarms: ['Content Processing', 'Marketing Intelligence'],
          autonomyLevel: 98,
          status: 'SELF_EXECUTING',
          decisions_made: 47
        },
        {
          task: 'Predictive resource scaling',
          assignedSwarms: ['Infrastructure Optimization', 'Learning Center'],
          autonomyLevel: 95,
          status: 'ADAPTING',
          decisions_made: 23
        },
        {
          task: 'Cross-agent knowledge synthesis',
          assignedSwarms: ['Learning Center', 'Content Processing'],
          autonomyLevel: 92,
          status: 'EVOLVING',
          decisions_made: 34
        }
      ],
      coordinationMatrix: {
        intraSwarmSync: 99.1,
        interSwarmCoord: 94.7,
        globalAlignment: 96.2
      }
    },
    humanSwarmCommanding: {
      interface: 'UNIFIED_SWARM_COMMAND_v2.0',
      commandingMode: 'INTENT_BASED',
      humanOperators: 1,
      swarmResponseTime: '0.8s',
      commandComplexity: 'NATURAL_LANGUAGE',
      recentCommands: [
        {
          command: "Optimize Instagram processing for peak efficiency",
          swarms_activated: 2,
          agents_coordinated: 14,
          execution_time: '2.1s',
          success: true,
          autonomous_interpretation: 'Deployed parallel processing with load balancing'
        },
        {
          command: "Focus marketing efforts on warm leads only",
          swarms_activated: 1, 
          agents_coordinated: 6,
          execution_time: '1.3s',
          success: true,
          autonomous_interpretation: 'Reprioritized lead scoring and outreach sequences'
        },
        {
          command: "Prepare for high-volume content batch tonight",
          swarms_activated: 3,
          agents_coordinated: 20,
          execution_time: '0.9s',
          success: true,
          autonomous_interpretation: 'Pre-allocated resources and scaled processing capacity'
        }
      ],
      intentAccuracy: 97.4,
      commandUnderstood: 98.7,
      swarmAlignment: 96.9
    }
  });

  const [phase5Stats, setPhase5Stats] = useState({
    totalSwarmIntelligence: 97.8,
    distributedDecisions: 1834,
    swarmCoordinations: 847,
    networkNodes: 6,
    autonomousManeuvers: 24,
    humanSwarmSync: 98.3
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSwarmData(prev => ({
        ...prev,
        swarmManeuverPlanning: {
          ...prev.swarmManeuverPlanning,
          maneuverAccuracy: Math.max(95, Math.min(100, prev.swarmManeuverPlanning.maneuverAccuracy + (Math.random() - 0.4) * 0.6)),
          completedManeuvers: prev.swarmManeuverPlanning.completedManeuvers + Math.floor(Math.random() * 2)
        },
        autonomousCoordination: {
          ...prev.autonomousCoordination,
          autonomousDecisions: prev.autonomousCoordination.autonomousDecisions + Math.floor(Math.random() * 4),
          coordinationEfficiency: Math.max(90, Math.min(100, prev.autonomousCoordination.coordinationEfficiency + (Math.random() - 0.5) * 1))
        },
        communicationsNetworking: {
          ...prev.communicationsNetworking,
          bandwidthUtilization: Math.max(60, Math.min(90, prev.communicationsNetworking.bandwidthUtilization + (Math.random() - 0.5) * 4))
        }
      }));
      
      setPhase5Stats(prev => ({
        ...prev,
        totalSwarmIntelligence: Math.max(90, Math.min(100, prev.totalSwarmIntelligence + (Math.random() - 0.5) * 0.4)),
        distributedDecisions: prev.distributedDecisions + Math.floor(Math.random() * 3),
        swarmCoordinations: prev.swarmCoordinations + (Math.random() > 0.6 ? 1 : 0)
      }));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getComplexityColor = (complexity) => {
    switch (complexity) {
      case 'ULTRA': return 'text-red-400 bg-red-900/30 border-red-500/50';
      case 'HIGH': return 'text-orange-400 bg-orange-900/30 border-orange-500/50';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/50';
      case 'LOW': return 'text-green-400 bg-green-900/30 border-green-500/50';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/50';
    }
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'OPTIMAL': 'text-green-400 bg-green-900/30',
      'HIGH_THROUGHPUT': 'text-blue-400 bg-blue-900/30',
      'COORDINATING': 'text-cyan-400 bg-cyan-900/30',
      'OPTIMIZING': 'text-yellow-400 bg-yellow-900/30',
      'EVOLVING': 'text-purple-400 bg-purple-900/30',
      'ORCHESTRATING': 'text-pink-400 bg-pink-900/30',
      'SELF_EXECUTING': 'text-green-400 bg-green-900/30',
      'ADAPTING': 'text-orange-400 bg-orange-900/30'
    };
    return statusColors[status] || 'text-gray-400 bg-gray-900/30';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-indigo-300 mb-2">🛰️🌐 Distributed Swarm Intelligence</h2>
          <p className="text-gray-400">Phase 5: NASA-Inspired Autonomous Spacecraft Swarm Coordination • DSA Protocol Active</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-indigo-300">
            Swarm Intelligence: {phase5Stats.totalSwarmIntelligence.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-400">{phase5Stats.networkNodes} Network Nodes • {phase5Stats.autonomousManeuvers} Active Agents</div>
        </div>
      </div>

      {/* Phase 5 Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(phase5Stats).map(([key, value]) => (
          <div key={key} className="bg-gray-800/50 rounded-lg p-4 border border-indigo-500/30">
            <div className="text-2xl font-bold text-indigo-300">
              {typeof value === 'number' ? (
                key.includes('Intelligence') || key.includes('Sync') 
                  ? `${value.toFixed(1)}%` 
                  : value.toLocaleString()
              ) : value}
            </div>
            <div className="text-sm text-gray-400 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </div>
          </div>
        ))}
      </div>

      {/* Swarm Maneuver Planning */}
      <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
          🎯 Swarm Maneuver Planning & Execution
          <span className="ml-3 text-sm text-blue-400">
            {swarmData.swarmManeuverPlanning.activeSwarms} Active Swarms • {swarmData.swarmManeuverPlanning.maneuverAccuracy.toFixed(1)}% Accuracy
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">⚡ Active Swarm Maneuvers</h4>
            <div className="space-y-3">
              {swarmData.swarmManeuverPlanning.currentManeuvers.map((maneuver, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-blue-300">{maneuver.swarm}</span>
                    <span className={`px-2 py-1 rounded text-xs border ${getComplexityColor(maneuver.complexity)}`}>
                      {maneuver.complexity}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{maneuver.maneuver}</div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-blue-400">{maneuver.agents} agents coordinated</span>
                    <span className="text-xs text-green-400">{maneuver.success_rate}% success rate</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${maneuver.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-blue-400">ETA: {maneuver.eta} • {maneuver.progress}% complete</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">📊 Maneuver Performance</h4>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20 text-center">
                <div className="text-2xl font-bold text-blue-300">{swarmData.swarmManeuverPlanning.completedManeuvers}</div>
                <div className="text-sm text-gray-400">Completed Maneuvers</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20 text-center">
                <div className="text-2xl font-bold text-blue-300">{swarmData.swarmManeuverPlanning.averageExecutionTime}</div>
                <div className="text-sm text-gray-400">Avg Execution Time</div>
              </div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20 text-center">
              <div className="text-2xl font-bold text-blue-300">{swarmData.swarmManeuverPlanning.coordinationLatency}</div>
              <div className="text-sm text-gray-400">Coordination Latency</div>
              <div className="text-xs text-blue-400 mt-1">Ultra-low latency swarm sync</div>
            </div>
          </div>
        </div>
      </div>

      {/* Communications Networking */}
      <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
          📡 Communications Networking
          <span className="ml-3 text-sm text-cyan-400">
            {swarmData.communicationsNetworking.protocol} • {swarmData.communicationsNetworking.networkTopology}
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">🌐 Network Mesh Nodes</h4>
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {swarmData.communicationsNetworking.meshNodes.map((node, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-cyan-300 text-sm">{node.id}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(node.status)}`}>
                      {node.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">{node.type}</div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-cyan-400">{node.connections} connections</span>
                    <span className="text-gray-400">Load: {node.load}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">📈 Network Performance</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20 text-center">
                  <div className="text-lg font-bold text-cyan-300">{swarmData.communicationsNetworking.activeConnections}</div>
                  <div className="text-xs text-gray-400">Active Connections</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20 text-center">
                  <div className="text-lg font-bold text-cyan-300">{swarmData.communicationsNetworking.bandwidthUtilization.toFixed(1)}%</div>
                  <div className="text-xs text-gray-400">Bandwidth Usage</div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20">
                <div className="text-sm font-semibold text-cyan-300 mb-2">Network Resilience</div>
                <div className="text-2xl font-bold text-green-300 text-center">{swarmData.communicationsNetworking.networkResilience}%</div>
                <div className="text-xs text-gray-400 text-center">Self-healing events: {swarmData.communicationsNetworking.selfHealingEvents}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Relative Navigation */}
      <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center">
          🧭 Relative Navigation
          <span className="ml-3 text-sm text-green-400">
            {swarmData.relativeNavigation.engine} • {swarmData.relativeNavigation.navigationAccuracy}% Accuracy
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-3">🎯 Agent Positioning</h4>
            <div className="space-y-3">
              {swarmData.relativeNavigation.navigationEvents.map((event, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-green-300 text-sm">{event.agent}</span>
                    <span className="text-sm text-green-400">{event.efficiency}% efficient</span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">Position: {event.position}</div>
                  <div className="text-xs text-green-400 italic">{event.relation}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-3">⚡ Navigation Precision</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20 text-center">
                <div className="text-2xl font-bold text-green-300">{swarmData.relativeNavigation.positioningPrecision}</div>
                <div className="text-sm text-gray-400">Positioning Precision</div>
                <div className="text-xs text-green-400 mt-1">{swarmData.relativeNavigation.relativePositioning}</div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-green-500/20 text-center">
                  <div className="text-lg font-bold text-green-300">{swarmData.relativeNavigation.relativeDrift}</div>
                  <div className="text-xs text-gray-400">Relative Drift</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-green-500/20 text-center">
                  <div className="text-lg font-bold text-green-300">{swarmData.relativeNavigation.navigationCorrections}</div>
                  <div className="text-xs text-gray-400">Auto Corrections</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Autonomous Coordination */}
      <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
          🤝 Autonomous Coordination
          <span className="ml-3 text-sm text-purple-400">
            {swarmData.autonomousCoordination.coordinationProtocol} • {swarmData.autonomousCoordination.coordinationEfficiency}% Efficiency
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">🎛️ Distributed Tasks</h4>
            <div className="space-y-3">
              {swarmData.autonomousCoordination.distributedTasks.map((task, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-purple-300 text-sm">{task.task}</span>
                    <span className={`px-2 py-1 rounded text-xs ${getStatusColor(task.status)}`}>
                      {task.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">
                    Swarms: {task.assignedSwarms.join(', ')}
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-purple-400">Autonomy: {task.autonomyLevel}%</span>
                    <span className="text-gray-400">Decisions: {task.decisions_made}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-purple-300 mb-3">📊 Coordination Matrix</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/20">
                <div className="text-sm font-semibold text-purple-300 mb-3">Synchronization Levels</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Intra-Swarm Sync</span>
                    <span className="text-sm text-purple-400">{swarmData.autonomousCoordination.coordinationMatrix.intraSwarmSync}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Inter-Swarm Coord</span>
                    <span className="text-sm text-purple-400">{swarmData.autonomousCoordination.coordinationMatrix.interSwarmCoord}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Global Alignment</span>
                    <span className="text-sm text-purple-400">{swarmData.autonomousCoordination.coordinationMatrix.globalAlignment}%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 text-center">
                  <div className="text-lg font-bold text-purple-300">{swarmData.autonomousCoordination.autonomousDecisions}</div>
                  <div className="text-xs text-gray-400">Auto Decisions</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-purple-500/20 text-center">
                  <div className="text-lg font-bold text-purple-300">{swarmData.autonomousCoordination.humanInterventionRate}%</div>
                  <div className="text-xs text-gray-400">Human Intervention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Human-Swarm Commanding */}
      <div className="bg-gray-800/50 border border-yellow-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
          🎤 Human-Swarm Commanding
          <span className="ml-3 text-sm text-yellow-400">
            {swarmData.humanSwarmCommanding.interface} • {swarmData.humanSwarmCommanding.commandingMode}
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">💬 Recent Commands</h4>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {swarmData.humanSwarmCommanding.recentCommands.map((cmd, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-yellow-500/20">
                  <div className="text-sm text-yellow-300 mb-2 font-semibold">"{cmd.command}"</div>
                  <div className="text-xs text-gray-300 mb-2">{cmd.autonomous_interpretation}</div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-yellow-400">{cmd.swarms_activated} swarms • {cmd.agents_coordinated} agents</span>
                    <span className="text-green-400">✓ {cmd.execution_time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">🎯 Command Intelligence</h4>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-900/50 rounded-lg p-3 border border-yellow-500/20 text-center">
                  <div className="text-lg font-bold text-yellow-300">{swarmData.humanSwarmCommanding.intentAccuracy}%</div>
                  <div className="text-xs text-gray-400">Intent Accuracy</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3 border border-yellow-500/20 text-center">
                  <div className="text-lg font-bold text-yellow-300">{swarmData.humanSwarmCommanding.swarmResponseTime}</div>
                  <div className="text-xs text-gray-400">Response Time</div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-yellow-500/20 text-center">
                <div className="text-2xl font-bold text-yellow-300">{swarmData.humanSwarmCommanding.swarmAlignment}%</div>
                <div className="text-sm text-gray-400">Swarm Alignment</div>
                <div className="text-xs text-yellow-400 mt-1">Natural language command processing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}