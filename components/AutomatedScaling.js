// AutomatedScaling.js - Dynamic Agent Deployment & Capacity Management
import { useState, useEffect } from 'react';

const AutomatedScaling = () => {
  const [scalingRules, setScalingRules] = useState([
    {
      id: 'SR001',
      name: 'Task Queue Threshold',
      condition: 'queue_depth > 15',
      action: 'Deploy backup Content Strategist',
      priority: 'High',
      cooldown: '5m',
      lastTriggered: '2024-02-26 18:34:12',
      status: 'active',
      successRate: 96.3
    },
    {
      id: 'SR002', 
      name: 'CPU Utilization',
      condition: 'cpu_usage > 85% for 3m',
      action: 'Scale Infrastructure Manager resources',
      priority: 'Medium',
      cooldown: '10m',
      lastTriggered: '2024-02-26 17:22:45',
      status: 'active',
      successRate: 94.7
    },
    {
      id: 'SR003',
      name: 'Error Rate Spike',
      condition: 'error_rate > 5% in 15m',
      action: 'Deploy Quality Assurance backup + circuit breaker',
      priority: 'Critical',
      cooldown: '2m',
      lastTriggered: '2024-02-25 21:18:33',
      status: 'active',
      successRate: 98.9
    },
    {
      id: 'SR004',
      name: 'Learning Plateau',
      condition: 'learning_velocity < 2% for 24h',
      action: 'Deploy Research Assistant cluster',
      priority: 'Low',
      cooldown: '1h',
      lastTriggered: '2024-02-24 14:45:12',
      status: 'monitoring',
      successRate: 91.2
    },
    {
      id: 'SR005',
      name: 'Communication Latency',
      condition: 'avg_latency > 200ms for 5m',
      action: 'Optimize Communication Agent + load balance',
      priority: 'Medium',
      cooldown: '15m',
      lastTriggered: '2024-02-26 16:52:07',
      status: 'active',
      successRate: 97.1
    }
  ]);

  const [scalingEvents, setScalingEvents] = useState([
    {
      timestamp: '2024-02-26 18:34:12',
      event: 'Auto-scale triggered',
      rule: 'Task Queue Threshold',
      action: 'Deployed backup Content Strategist',
      result: 'Success - Queue cleared in 2m 15s',
      impact: '+35% processing capacity',
      cost: '$0.23/hour'
    },
    {
      timestamp: '2024-02-26 17:22:45',
      event: 'Resource scaling',
      rule: 'CPU Utilization', 
      action: 'Allocated additional 2 CPU cores',
      result: 'Success - CPU usage reduced to 68%',
      impact: '+20% computational capacity',
      cost: '$0.15/hour'
    },
    {
      timestamp: '2024-02-26 16:52:07',
      event: 'Network optimization',
      rule: 'Communication Latency',
      action: 'Load balanced communication channels',
      result: 'Success - Latency reduced to 127ms',
      impact: '+18% communication efficiency',
      cost: '$0.08/hour'
    },
    {
      timestamp: '2024-02-25 21:18:33',
      event: 'Emergency scaling',
      rule: 'Error Rate Spike',
      action: 'Emergency QA deployment + circuit breaker',
      result: 'Success - Error rate reduced to 1.2%',
      impact: '+40% system reliability',
      cost: '$0.35/hour'
    }
  ]);

  const [capacityMetrics, setCapacityMetrics] = useState({
    currentAgents: 5,
    maxAgents: 12,
    utilizationRate: 73.2,
    scalingEfficiency: 94.6,
    costOptimization: 89.3,
    responseTime: '1m 23s'
  });

  const [deploymentOptions, setDeploymentOptions] = useState([
    {
      type: 'Hot Standby',
      description: 'Pre-deployed agents ready for immediate activation',
      cost: '$2.45/day',
      responseTime: '<30s',
      reliability: 99.8,
      currentCount: 2,
      maxCount: 4
    },
    {
      type: 'Cold Start',
      description: 'Deploy new agent instances on demand',
      cost: '$0.00 standby',
      responseTime: '1-3m',
      reliability: 97.2,
      currentCount: 0,
      maxCount: 8
    },
    {
      type: 'Hybrid Pool',
      description: 'Mix of hot standby + cold start for optimal cost/performance',
      cost: '$1.20/day',
      responseTime: '30s-2m',
      reliability: 98.5,
      currentCount: 3,
      maxCount: 6
    }
  ]);

  const [predictiveScaling, setPredictiveScaling] = useState({
    nextScaleEvent: '19:45 (predicted)',
    probability: 78,
    trigger: 'Evening task surge pattern',
    recommendedAction: 'Pre-deploy Content Strategist backup',
    confidenceLevel: 94.2,
    costImpact: '+$0.18/hour'
  });

  useEffect(() => {
    // Simulate real-time scaling monitoring updates
    const interval = setInterval(() => {
      // Update capacity metrics
      setCapacityMetrics(prev => ({
        ...prev,
        utilizationRate: Math.max(40, Math.min(95, prev.utilizationRate + (Math.random() - 0.4) * 8)),
        scalingEfficiency: Math.max(85, Math.min(99, prev.scalingEfficiency + (Math.random() - 0.3) * 2)),
        costOptimization: Math.max(75, Math.min(95, prev.costOptimization + (Math.random() - 0.4) * 3))
      }));

      // Update predictive scaling
      setPredictiveScaling(prev => ({
        ...prev,
        probability: Math.max(20, Math.min(95, prev.probability + (Math.random() - 0.5) * 10)),
        confidenceLevel: Math.max(80, Math.min(98, prev.confidenceLevel + (Math.random() - 0.3) * 2))
      }));

      // Occasionally trigger new scaling events
      if (Math.random() < 0.08) {
        const newEvent = {
          timestamp: new Date().toISOString().slice(0, 19).replace('T', ' '),
          event: ['Auto-scale triggered', 'Resource optimization', 'Load balancing'][Math.floor(Math.random() * 3)],
          rule: scalingRules[Math.floor(Math.random() * scalingRules.length)].name,
          action: 'Automated scaling action executed',
          result: 'Success - System optimized',
          impact: `+${Math.floor(Math.random() * 30 + 10)}% capacity`,
          cost: `$${(Math.random() * 0.4 + 0.1).toFixed(2)}/hour`
        };
        
        setScalingEvents(prev => [newEvent, ...prev.slice(0, 3)]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [scalingRules]);

  const getPriorityColor = (priority) => {
    const colors = {
      Critical: '#EF4444',
      High: '#F59E0B', 
      Medium: '#3B82F6',
      Low: '#10B981'
    };
    return colors[priority] || '#6B7280';
  };

  const getStatusColor = (status) => {
    const colors = {
      active: '#10B981',
      monitoring: '#F59E0B',
      disabled: '#6B7280'
    };
    return colors[status] || '#6B7280';
  };

  const getSuccessRateColor = (rate) => {
    if (rate >= 95) return '#10B981';
    if (rate >= 85) return '#F59E0B';
    return '#EF4444';
  };

  const getUtilizationColor = (rate) => {
    if (rate >= 85) return '#EF4444';
    if (rate >= 70) return '#F59E0B';
    return '#10B981';
  };

  return (
    <div className="space-y-6">
      {/* Scaling Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Current Agents</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {capacityMetrics.currentAgents}/{capacityMetrics.maxAgents}
          </div>
          <div className="text-xs text-green-400">Optimal capacity</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Utilization Rate</div>
          <div className="text-2xl font-bold mb-1" style={{ color: getUtilizationColor(capacityMetrics.utilizationRate) }}>
            {capacityMetrics.utilizationRate.toFixed(1)}%
          </div>
          <div className="text-xs text-blue-400">Target: 70-85%</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Scaling Efficiency</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {capacityMetrics.scalingEfficiency.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">High performance</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Cost Optimization</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {capacityMetrics.costOptimization.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">Well optimized</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Response Time</div>
          <div className="text-2xl font-bold text-indigo-400 mb-1">
            {capacityMetrics.responseTime}
          </div>
          <div className="text-xs text-green-400">Fast scaling</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Active Rules</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {scalingRules.filter(r => r.status === 'active').length}
          </div>
          <div className="text-xs text-blue-400">Monitoring</div>
        </div>
      </div>

      {/* Scaling Rules */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            📏 Automated Scaling Rules
            <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
              {scalingRules.filter(r => r.status === 'active').length} active
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {scalingRules.map((rule, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">⚡</span>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-medium">{rule.name}</h4>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getPriorityColor(rule.priority) + '20',
                        color: getPriorityColor(rule.priority)
                      }}
                    >
                      {rule.priority}
                    </span>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getStatusColor(rule.status) + '20',
                        color: getStatusColor(rule.status)
                      }}
                    >
                      {rule.status}
                    </span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{rule.condition}</div>
                  <div className="text-xs text-gray-300">{rule.action}</div>
                </div>
              </div>
              <div className="text-right text-xs">
                <div className="text-sm font-bold mb-1" style={{ color: getSuccessRateColor(rule.successRate) }}>
                  {rule.successRate.toFixed(1)}%
                </div>
                <div className="text-gray-400 mb-1">Cooldown: {rule.cooldown}</div>
                <div className="text-gray-500">Last: {rule.lastTriggered.split(' ')[1]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deployment Options */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">🚀 Deployment Strategies</h3>
        </div>
        <div className="p-4 space-y-4">
          {deploymentOptions.map((option, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🎯</span>
                <div>
                  <h4 className="text-white font-medium">{option.type}</h4>
                  <p className="text-sm text-gray-300 mb-2">{option.description}</p>
                  <div className="flex space-x-4 text-xs text-gray-400">
                    <span>Cost: {option.cost}</span>
                    <span>Response: {option.responseTime}</span>
                    <span>Reliability: {option.reliability}%</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-blue-400 mb-1">
                  {option.currentCount}/{option.maxCount}
                </div>
                <div className="text-xs text-gray-400">agents</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Predictive Scaling */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🔮 Predictive Scaling Intelligence
            <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              {predictiveScaling.probability}% confidence
            </span>
          </h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Next Scale Event:</span>
                <span className="text-sm font-medium text-yellow-400">{predictiveScaling.nextScaleEvent}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Trigger:</span>
                <span className="text-sm text-blue-300">{predictiveScaling.trigger}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Recommended Action:</span>
                <span className="text-sm text-green-300">{predictiveScaling.recommendedAction}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Probability:</span>
                <span className="text-sm font-bold text-purple-400">{predictiveScaling.probability}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Confidence Level:</span>
                <span className="text-sm text-indigo-400">{predictiveScaling.confidenceLevel}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Cost Impact:</span>
                <span className="text-sm text-red-400">{predictiveScaling.costImpact}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Scaling Events */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            📈 Recent Scaling Events
            <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
              {scalingEvents.length} recent
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {scalingEvents.map((event, index) => (
            <div key={index} className="p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{event.event}</h4>
                <span className="text-xs text-gray-400">{event.timestamp.split(' ')[1]}</span>
              </div>
              <div className="text-sm text-blue-300 mb-1">Rule: {event.rule}</div>
              <div className="text-sm text-gray-300 mb-2">Action: {event.action}</div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-green-400">{event.result}</span>
                <div className="text-xs text-gray-400 space-x-2">
                  <span>{event.impact}</span>
                  <span>•</span>
                  <span>{event.cost}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutomatedScaling;