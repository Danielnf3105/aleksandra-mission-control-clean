// Mission Control v6.6 - Phase 3: Autonomous Control
import { useState, useEffect } from 'react';

export default function AutonomousControl() {
  const [autonomousData, setAutonomousData] = useState({
    systemRecovery: {
      status: 'ACTIVE',
      healingInstances: [
        { system: 'Assembly AI Queue', action: 'Auto-retry with backoff', progress: 100, timeLeft: '0s' },
        { system: 'Content Pipeline', action: 'Rebalancing load distribution', progress: 75, timeLeft: '12s' }
      ],
      successRate: 98.7,
      avgRecoveryTime: '8.2s',
      totalHeals: 147
    },
    resourceAllocation: {
      mode: 'ADAPTIVE',
      allocations: [
        { resource: 'API Quotas', current: '85%', target: '80%', action: 'Redistributing', efficiency: 94 },
        { resource: 'Memory Usage', current: '72%', target: '70%', action: 'Optimizing buffers', efficiency: 91 },
        { resource: 'Processing Power', current: '68%', target: '75%', action: 'Scaling up workers', efficiency: 97 },
        { resource: 'Storage I/O', current: '45%', target: '50%', action: 'Preloading cache', efficiency: 89 }
      ],
      optimizationScore: 93.2,
      costSavings: '$847/month'
    },
    taskRouting: {
      engine: 'NEURAL_ROUTER_v2.1',
      routingAccuracy: 96.8,
      averageLatency: '43ms',
      totalRouted: 15847,
      intelligentDecisions: [
        { task: 'Instagram Transcription', route: 'Assembly AI Primary → Backup Queue', reason: 'Primary overloaded, 30% faster via backup' },
        { task: 'Content Analysis', route: 'OpenAI GPT-4 → Claude Sonnet', reason: 'Cost optimization, 40% cheaper with similar quality' },
        { task: 'Image Processing', route: 'Local GPU → RunPod RTX 4090', reason: 'Heavy workload detected, cloud GPU more efficient' }
      ]
    },
    problemPrevention: {
      status: 'SCANNING',
      scanInterval: '30s',
      threatsDetected: 3,
      preventedIssues: [
        { type: 'API Rate Limit Breach', confidence: 89, action: 'Preemptive throttling activated', eta: '15 mins' },
        { type: 'Memory Leak Pattern', confidence: 76, action: 'Process recycling scheduled', eta: '2 hours' },
        { type: 'Storage Capacity Warning', confidence: 94, action: 'Archive cleanup initiated', eta: 'NOW' }
      ],
      preventionSuccessRate: 91.4,
      falsePositiveRate: 2.1
    }
  });

  const [autonomousStats, setAutonomousStats] = useState({
    systemsUnderControl: 16,
    autonomousActions: 2847,
    humanInterventions: 12,
    autonomyLevel: 98.7,
    decisionAccuracy: 96.2,
    energyEfficiency: 94.8
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAutonomousData(prev => ({
        ...prev,
        systemRecovery: {
          ...prev.systemRecovery,
          successRate: Math.max(95, Math.min(100, prev.systemRecovery.successRate + (Math.random() - 0.3) * 0.5))
        },
        resourceAllocation: {
          ...prev.resourceAllocation,
          optimizationScore: Math.max(85, Math.min(100, prev.resourceAllocation.optimizationScore + (Math.random() - 0.5) * 1))
        },
        taskRouting: {
          ...prev.taskRouting,
          routingAccuracy: Math.max(90, Math.min(100, prev.taskRouting.routingAccuracy + (Math.random() - 0.4) * 0.8)),
          totalRouted: prev.taskRouting.totalRouted + Math.floor(Math.random() * 5)
        }
      }));
      
      setAutonomousStats(prev => ({
        ...prev,
        autonomousActions: prev.autonomousActions + Math.floor(Math.random() * 3),
        autonomyLevel: Math.max(95, Math.min(100, prev.autonomyLevel + (Math.random() - 0.5) * 0.3))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-900/30 border-green-500/50';
      case 'ADAPTIVE': return 'text-blue-400 bg-blue-900/30 border-blue-500/50';
      case 'SCANNING': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/50';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/50';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-red-400';
    if (confidence >= 70) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-purple-300 mb-2">🤖 Autonomous Control</h2>
          <p className="text-gray-400">Phase 3: Self-Healing, Dynamic Allocation & Intelligent Prevention</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-purple-300">
            Autonomy: {autonomousStats.autonomyLevel.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-400">{autonomousStats.systemsUnderControl} Systems Under Control</div>
        </div>
      </div>

      {/* Autonomous Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(autonomousStats).map(([key, value]) => (
          <div key={key} className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/30">
            <div className="text-2xl font-bold text-purple-300">
              {typeof value === 'number' ? (
                key.includes('Level') || key.includes('Accuracy') || key.includes('Efficiency') 
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

      {/* Self-Healing System Recovery */}
      <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center">
          🔄 Self-Healing System Recovery
          <span className={`ml-3 px-3 py-1 rounded-full text-sm border ${getStatusColor(autonomousData.systemRecovery.status)}`}>
            {autonomousData.systemRecovery.status}
          </span>
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-3">🛠️ Active Healing Processes</h4>
            <div className="space-y-3">
              {autonomousData.systemRecovery.healingInstances.map((instance, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-green-300">{instance.system}</span>
                    <span className="text-sm text-gray-400">{instance.timeLeft}</span>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{instance.action}</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-400 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${instance.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-green-400 mt-1">{instance.progress}% complete</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-green-300 mb-3">📊 Recovery Statistics</h4>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
                <div className="text-2xl font-bold text-green-300">{autonomousData.systemRecovery.successRate}%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
                <div className="text-2xl font-bold text-green-300">{autonomousData.systemRecovery.avgRecoveryTime}</div>
                <div className="text-sm text-gray-400">Avg Recovery Time</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
                <div className="text-2xl font-bold text-green-300">{autonomousData.systemRecovery.totalHeals}</div>
                <div className="text-sm text-gray-400">Total Heals Performed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Resource Allocation */}
      <div className="bg-gray-800/50 border border-blue-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-blue-300 mb-4 flex items-center">
          ⚡ Dynamic Resource Allocation
          <span className={`ml-3 px-3 py-1 rounded-full text-sm border ${getStatusColor(autonomousData.resourceAllocation.mode)}`}>
            {autonomousData.resourceAllocation.mode}
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">🎛️ Resource Management</h4>
            <div className="space-y-3">
              {autonomousData.resourceAllocation.allocations.map((allocation, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-blue-300">{allocation.resource}</span>
                    <span className="text-sm font-mono text-blue-400">{allocation.current} → {allocation.target}</span>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{allocation.action}</div>
                  <div className="flex justify-between items-center">
                    <div className="w-3/4 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                        style={{ width: `${allocation.efficiency}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-blue-400">{allocation.efficiency}% efficient</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-blue-300 mb-3">💰 Optimization Impact</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20 text-center">
                <div className="text-3xl font-bold text-blue-300">{autonomousData.resourceAllocation.optimizationScore.toFixed(1)}</div>
                <div className="text-sm text-gray-400">Optimization Score</div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2 rounded-full"
                    style={{ width: `${autonomousData.resourceAllocation.optimizationScore}%` }}
                  ></div>
                </div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20 text-center">
                <div className="text-2xl font-bold text-green-300">{autonomousData.resourceAllocation.costSavings}</div>
                <div className="text-sm text-gray-400">Monthly Savings</div>
                <div className="text-xs text-green-400 mt-1">Through intelligent allocation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intelligent Task Routing */}
      <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
          🧠 Intelligent Task Routing
          <span className="ml-3 text-sm text-cyan-400">{autonomousData.taskRouting.engine}</span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">📈 Routing Performance</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20 text-center">
                <div className="text-2xl font-bold text-cyan-300">{autonomousData.taskRouting.routingAccuracy.toFixed(1)}%</div>
                <div className="text-sm text-gray-400">Accuracy</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20 text-center">
                <div className="text-2xl font-bold text-cyan-300">{autonomousData.taskRouting.averageLatency}</div>
                <div className="text-sm text-gray-400">Avg Latency</div>
              </div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20 text-center mt-4">
              <div className="text-3xl font-bold text-cyan-300">{autonomousData.taskRouting.totalRouted.toLocaleString()}</div>
              <div className="text-sm text-gray-400">Tasks Routed</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-cyan-300 mb-3">🎯 Recent Intelligent Decisions</h4>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {autonomousData.taskRouting.intelligentDecisions.map((decision, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-3 border border-cyan-500/20">
                  <div className="text-sm font-semibold text-cyan-300">{decision.task}</div>
                  <div className="text-xs text-gray-300 mt-1 font-mono">{decision.route}</div>
                  <div className="text-xs text-cyan-400 mt-2 italic">{decision.reason}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Proactive Problem Prevention */}
      <div className="bg-gray-800/50 border border-yellow-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
          🛡️ Proactive Problem Prevention
          <span className={`ml-3 px-3 py-1 rounded-full text-sm border ${getStatusColor(autonomousData.problemPrevention.status)}`}>
            {autonomousData.problemPrevention.status}
          </span>
        </h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">⚠️ Threats Detected</h4>
            <div className="space-y-3">
              {autonomousData.problemPrevention.preventedIssues.map((issue, index) => (
                <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-yellow-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-yellow-300">{issue.type}</span>
                    <span className={`text-sm font-semibold ${getConfidenceColor(issue.confidence)}`}>
                      {issue.confidence}% confidence
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mb-1">{issue.action}</div>
                  <div className="text-xs text-yellow-400">ETA: {issue.eta}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-yellow-300 mb-3">📊 Prevention Statistics</h4>
            <div className="space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4 border border-yellow-500/20 text-center">
                <div className="text-2xl font-bold text-yellow-300">{autonomousData.problemPrevention.preventionSuccessRate}%</div>
                <div className="text-sm text-gray-400">Prevention Success Rate</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-yellow-500/20 text-center">
                <div className="text-2xl font-bold text-yellow-300">{autonomousData.problemPrevention.falsePositiveRate}%</div>
                <div className="text-sm text-gray-400">False Positive Rate</div>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 border border-yellow-500/20 text-center">
                <div className="text-2xl font-bold text-yellow-300">{autonomousData.problemPrevention.scanInterval}</div>
                <div className="text-sm text-gray-400">Scan Interval</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}