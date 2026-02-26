// ErrorRecovery.js - AI Agent Resilience Testing & Recovery Simulation
import { useState, useEffect } from 'react';

const ErrorRecovery = () => {
  const [errorScenarios, setErrorScenarios] = useState([
    {
      id: 'ERR001',
      type: 'Task Timeout',
      severity: 'Medium',
      frequency: 0.3,
      agent: 'Content Strategist',
      description: 'Instagram analysis exceeds 5min timeout threshold',
      lastOccurred: '2024-02-26 18:23:45',
      recoveryTime: '45s',
      status: 'resolved',
      recoveryMethod: 'Automatic restart with reduced complexity'
    },
    {
      id: 'ERR002',
      type: 'Memory Overflow',
      severity: 'High',
      frequency: 0.1,
      agent: 'Research Assistant',
      description: 'Knowledge graph exceeds allocated 2GB memory limit',
      lastOccurred: '2024-02-26 17:45:12',
      recoveryTime: '2m 15s',
      status: 'recovered',
      recoveryMethod: 'Memory cleanup + task segmentation'
    },
    {
      id: 'ERR003',
      type: 'API Rate Limit',
      severity: 'Low',
      frequency: 1.2,
      agent: 'Communication Agent',
      description: 'External service rate limiting (450/min → 400/min)',
      lastOccurred: '2024-02-26 18:54:33',
      recoveryTime: '30s',
      status: 'monitoring',
      recoveryMethod: 'Exponential backoff with queue buffering'
    },
    {
      id: 'ERR004',
      type: 'Network Latency',
      severity: 'Medium',
      frequency: 0.7,
      agent: 'Infrastructure Manager',
      description: 'Inter-agent communication latency >500ms',
      lastOccurred: '2024-02-26 18:41:18',
      recoveryTime: '1m 30s',
      status: 'resolved',
      recoveryMethod: 'Route optimization + connection pooling'
    },
    {
      id: 'ERR005',
      type: 'Learning Plateau',
      severity: 'Low',
      frequency: 0.2,
      agent: 'Quality Assurance',
      description: 'Performance improvement stagnation >72h',
      lastOccurred: '2024-02-25 14:22:01',
      recoveryTime: '4h 20m',
      status: 'recovered',
      recoveryMethod: 'Algorithm refresh + training data augmentation'
    }
  ]);

  const [recoveryStats, setRecoveryStats] = useState({
    totalErrors24h: 23,
    recoveryRate: 97.8,
    averageRecoveryTime: '1m 45s',
    preventedCascades: 8,
    systemUptime: 99.2,
    resilienceScore: 94.6
  });

  const [recoverySimulations, setRecoverySimulations] = useState([
    {
      scenario: 'Complete Agent Failure',
      probability: 0.02,
      impact: 'High',
      recoveryPlan: 'Hot standby activation + state transfer',
      testStatus: 'passed',
      lastTested: '2024-02-24',
      recoveryTime: '3m 45s'
    },
    {
      scenario: 'Database Connection Loss',
      probability: 0.05,
      impact: 'Medium',
      recoveryPlan: 'Local cache fallback + connection retry',
      testStatus: 'passed',
      lastTested: '2024-02-25',
      recoveryTime: '1m 20s'
    },
    {
      scenario: 'Cascading Task Failures',
      probability: 0.08,
      impact: 'High',
      recoveryPlan: 'Circuit breaker + task isolation',
      testStatus: 'warning',
      lastTested: '2024-02-23',
      recoveryTime: '2m 10s'
    },
    {
      scenario: 'Learning Algorithm Corruption',
      probability: 0.01,
      impact: 'Critical',
      recoveryPlan: 'Rollback to last stable checkpoint',
      testStatus: 'passed',
      lastTested: '2024-02-26',
      recoveryTime: '8m 30s'
    }
  ]);

  const [realTimeMonitoring, setRealTimeMonitoring] = useState({
    anomalyDetection: true,
    predictiveFailure: true,
    autoRecovery: true,
    cascadePrevention: true,
    learningAdaptation: true,
    healthChecks: 'All systems nominal'
  });

  useEffect(() => {
    // Simulate real-time error monitoring and recovery updates
    const interval = setInterval(() => {
      // Update recovery stats
      setRecoveryStats(prev => ({
        ...prev,
        totalErrors24h: Math.max(15, Math.min(40, prev.totalErrors24h + (Math.random() - 0.7) * 3)),
        recoveryRate: Math.max(90, Math.min(99.9, prev.recoveryRate + (Math.random() - 0.3) * 1)),
        systemUptime: Math.max(95, Math.min(99.9, prev.systemUptime + (Math.random() - 0.2) * 0.5)),
        resilienceScore: Math.max(85, Math.min(99, prev.resilienceScore + (Math.random() - 0.4) * 2))
      }));

      // Occasionally add new error scenarios
      if (Math.random() < 0.1) {
        const newError = {
          id: `ERR${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`,
          type: ['Token Limit', 'Context Overflow', 'Pattern Recognition Failure', 'Resource Contention'][Math.floor(Math.random() * 4)],
          severity: ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
          frequency: Math.random() * 2,
          agent: ['Content Strategist', 'Research Assistant', 'Infrastructure Manager'][Math.floor(Math.random() * 3)],
          description: 'Simulated error scenario for testing',
          lastOccurred: new Date().toISOString().slice(0, 19).replace('T', ' '),
          recoveryTime: `${Math.floor(Math.random() * 5) + 1}m ${Math.floor(Math.random() * 60)}s`,
          status: 'monitoring',
          recoveryMethod: 'Automated recovery protocol activated'
        };

        setErrorScenarios(prev => [newError, ...prev.slice(0, 4)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    const colors = {
      Low: '#10B981',
      Medium: '#F59E0B',
      High: '#EF4444',
      Critical: '#7C2D12'
    };
    return colors[severity] || '#6B7280';
  };

  const getStatusColor = (status) => {
    const colors = {
      resolved: '#10B981',
      recovered: '#3B82F6',
      monitoring: '#F59E0B',
      active: '#EF4444'
    };
    return colors[status] || '#6B7280';
  };

  const getTestStatusColor = (status) => {
    const colors = {
      passed: '#10B981',
      warning: '#F59E0B',
      failed: '#EF4444'
    };
    return colors[status] || '#6B7280';
  };

  const getStatusIcon = (status) => {
    const icons = {
      resolved: '✅',
      recovered: '🔄',
      monitoring: '👁️',
      active: '🚨'
    };
    return icons[status] || '❓';
  };

  const getTestIcon = (status) => {
    const icons = {
      passed: '✅',
      warning: '⚠️',
      failed: '❌'
    };
    return icons[status] || '❓';
  };

  return (
    <div className="space-y-6">
      {/* Recovery Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Errors (24h)</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {recoveryStats.totalErrors24h}
          </div>
          <div className="text-xs text-green-400">↓ -12% from yesterday</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Recovery Rate</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {recoveryStats.recoveryRate.toFixed(1)}%
          </div>
          <div className="text-xs text-blue-400">↗ Excellent performance</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Avg Recovery Time</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {recoveryStats.averageRecoveryTime}
          </div>
          <div className="text-xs text-green-400">↓ -23s improvement</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Prevented Cascades</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {recoveryStats.preventedCascades}
          </div>
          <div className="text-xs text-green-400">Today</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">System Uptime</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {recoveryStats.systemUptime.toFixed(1)}%
          </div>
          <div className="text-xs text-blue-400">7-day average</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Resilience Score</div>
          <div className="text-2xl font-bold text-indigo-400 mb-1">
            {recoveryStats.resilienceScore.toFixed(1)}
          </div>
          <div className="text-xs text-green-400">↗ +2.3 trending up</div>
        </div>
      </div>

      {/* Error Scenarios Tracking */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🚨 Error Scenarios & Recovery Tracking
            <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
              {errorScenarios.filter(e => e.status === 'resolved').length} resolved today
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {errorScenarios.map((error, index) => (
            <div key={index} className="flex items-start justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-start space-x-3">
                <span className="text-lg">{getStatusIcon(error.status)}</span>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-medium">{error.id}</h4>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getSeverityColor(error.severity) + '20',
                        color: getSeverityColor(error.severity)
                      }}
                    >
                      {error.severity}
                    </span>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getStatusColor(error.status) + '20',
                        color: getStatusColor(error.status)
                      }}
                    >
                      {error.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mb-1">{error.type} - {error.agent}</div>
                  <div className="text-xs text-gray-400 mb-2">{error.description}</div>
                  <div className="text-xs text-blue-300">Recovery: {error.recoveryMethod}</div>
                </div>
              </div>
              <div className="text-right text-xs text-gray-400">
                <div>Recovery: {error.recoveryTime}</div>
                <div>Freq: {error.frequency.toFixed(1)}/day</div>
                <div>{error.lastOccurred.split(' ')[1]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recovery Simulations */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🧪 Disaster Recovery Simulations
            <span className="ml-2 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
              {recoverySimulations.filter(s => s.testStatus === 'passed').length}/4 passed
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {recoverySimulations.map((sim, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">{getTestIcon(sim.testStatus)}</span>
                <div>
                  <h4 className="text-white font-medium">{sim.scenario}</h4>
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mb-1">
                    <span>Probability: {(sim.probability * 100).toFixed(1)}%</span>
                    <span>Impact: {sim.impact}</span>
                    <span>Last Tested: {sim.lastTested}</span>
                  </div>
                  <div className="text-xs text-blue-300">{sim.recoveryPlan}</div>
                </div>
              </div>
              <div className="text-right">
                <div 
                  className="text-sm font-bold mb-1"
                  style={{ color: getTestStatusColor(sim.testStatus) }}
                >
                  {sim.testStatus.toUpperCase()}
                </div>
                <div className="text-xs text-gray-400">RTO: {sim.recoveryTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time Monitoring Systems */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">🔍 Real-time Recovery Monitoring</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {Object.entries(realTimeMonitoring).slice(0, -1).map(([system, status], index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="text-sm text-gray-300">
                  {system.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-lg ${status ? '🟢' : '🔴'}`}>
                    {status ? '🟢' : '🔴'}
                  </span>
                  <span className={`text-xs font-medium ${status ? 'text-green-400' : 'text-red-400'}`}>
                    {status ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 bg-gray-700 rounded-lg">
            <div className="flex items-center space-x-2">
              <span className="text-lg">🎯</span>
              <div className="text-sm text-gray-300">Health Status:</div>
              <div className="text-sm font-medium text-green-400">{realTimeMonitoring.healthChecks}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorRecovery;