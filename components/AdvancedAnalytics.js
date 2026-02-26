// AdvancedAnalytics.js - ML-Powered Insights & Intelligence Dashboard
import { useState, useEffect } from 'react';

const AdvancedAnalytics = () => {
  const [analyticsInsights, setAnalyticsInsights] = useState([
    {
      id: 'AI001',
      type: 'performance_optimization',
      title: 'Task Routing Efficiency Pattern Detected',
      insight: 'Content Strategist shows 23% higher efficiency with video analysis tasks during 18:00-20:00 window',
      confidence: 94.7,
      impact: 'High',
      actionable: true,
      category: 'optimization',
      recommendation: 'Schedule heavy video processing during peak efficiency hours',
      dateDiscovered: '2024-02-26',
      trend: 'improving'
    },
    {
      id: 'AI002',
      type: 'predictive_maintenance',
      title: 'Memory Usage Growth Trajectory',
      insight: 'Research Assistant memory consumption growing at 3.2% weekly, will reach capacity in 8 weeks',
      confidence: 87.3,
      impact: 'Medium',
      actionable: true,
      category: 'infrastructure',
      recommendation: 'Implement memory optimization or scale resources in 6 weeks',
      dateDiscovered: '2024-02-25',
      trend: 'concerning'
    },
    {
      id: 'AI003',
      type: 'learning_acceleration',
      title: 'Cross-Agent Knowledge Transfer Optimization',
      insight: 'Quality Assurance → Content Strategist knowledge flow 67% more effective than reverse direction',
      confidence: 92.1,
      impact: 'Medium',
      actionable: true,
      category: 'learning',
      recommendation: 'Restructure knowledge sharing protocols to optimize transfer directionality',
      dateDiscovered: '2024-02-26',
      trend: 'stable'
    },
    {
      id: 'AI004',
      type: 'anomaly_detection',
      title: 'Communication Latency Spike Pattern',
      insight: 'Inter-agent latency increases 34% during task queue >20, suggesting resource contention',
      confidence: 89.6,
      impact: 'Low',
      actionable: true,
      category: 'communication',
      recommendation: 'Implement priority-based communication queuing system',
      dateDiscovered: '2024-02-24',
      trend: 'stable'
    }
  ]);

  const [mlModels, setMlModels] = useState([
    {
      name: 'Performance Predictor',
      type: 'Regression',
      accuracy: 94.2,
      lastTrained: '2024-02-26 12:00:00',
      trainingData: '15.2K samples',
      purpose: 'Predict agent performance based on workload and historical patterns',
      status: 'active',
      confidence: 'high'
    },
    {
      name: 'Anomaly Detector',
      type: 'Isolation Forest',
      accuracy: 97.8,
      lastTrained: '2024-02-25 18:30:00',
      trainingData: '8.7K samples',
      purpose: 'Identify unusual patterns in agent behavior and system metrics',
      status: 'active',
      confidence: 'very_high'
    },
    {
      name: 'Resource Optimizer',
      type: 'Reinforcement Learning',
      accuracy: 91.5,
      lastTrained: '2024-02-26 09:15:00',
      trainingData: '22.1K episodes',
      purpose: 'Optimize resource allocation decisions for maximum efficiency',
      status: 'training',
      confidence: 'high'
    },
    {
      name: 'Task Classifier',
      type: 'Neural Network',
      accuracy: 96.3,
      lastTrained: '2024-02-26 15:45:00',
      trainingData: '31.5K samples',
      purpose: 'Classify incoming tasks for optimal agent assignment',
      status: 'active',
      confidence: 'very_high'
    }
  ]);

  const [analyticsMetrics, setAnalyticsMetrics] = useState({
    totalInsights: 247,
    actionableInsights: 89,
    implementedRecommendations: 34,
    averageConfidence: 91.3,
    impactScore: 87.6,
    automationLevel: 76.2
  });

  const [correlationAnalysis, setCorrelationAnalysis] = useState([
    {
      factor1: 'Task Complexity',
      factor2: 'Processing Time',
      correlation: 0.87,
      significance: 'Very High',
      insight: 'Strong positive correlation - higher complexity linearly increases processing time'
    },
    {
      factor1: 'Agent Efficiency',
      factor2: 'Error Rate', 
      correlation: -0.73,
      significance: 'High',
      insight: 'Negative correlation - more efficient agents make fewer errors'
    },
    {
      factor1: 'Communication Latency',
      factor2: 'Task Success Rate',
      correlation: -0.56,
      significance: 'Medium',
      insight: 'Higher latency moderately reduces task completion success'
    },
    {
      factor1: 'Learning Rate',
      factor2: 'Knowledge Transfer',
      correlation: 0.64,
      significance: 'Medium',
      insight: 'Agents with higher learning rates share knowledge more effectively'
    }
  ]);

  const [optimizationTargets, setOptimizationTargets] = useState([
    {
      target: 'Task Processing Speed',
      currentValue: 2.3,
      optimizedValue: 1.8,
      improvement: 21.7,
      effort: 'Medium',
      timeline: '2-3 weeks',
      priority: 'High'
    },
    {
      target: 'Resource Utilization',
      currentValue: 73.2,
      optimizedValue: 85.4,
      improvement: 16.7,
      effort: 'Low',
      timeline: '1 week',
      priority: 'High'
    },
    {
      target: 'Error Recovery Time',
      currentValue: 1.7,
      optimizedValue: 1.2,
      improvement: 29.4,
      effort: 'High',
      timeline: '4-6 weeks',
      priority: 'Medium'
    },
    {
      target: 'Knowledge Coherence',
      currentValue: 91.7,
      optimizedValue: 96.2,
      improvement: 4.9,
      effort: 'Medium',
      timeline: '3-4 weeks',
      priority: 'Low'
    }
  ]);

  useEffect(() => {
    // Simulate real-time analytics updates
    const interval = setInterval(() => {
      // Update analytics metrics
      setAnalyticsMetrics(prev => ({
        ...prev,
        totalInsights: Math.max(200, prev.totalInsights + Math.floor(Math.random() * 5)),
        actionableInsights: Math.max(70, Math.min(120, prev.actionableInsights + Math.floor((Math.random() - 0.4) * 3))),
        averageConfidence: Math.max(85, Math.min(95, prev.averageConfidence + (Math.random() - 0.4) * 1)),
        impactScore: Math.max(80, Math.min(95, prev.impactScore + (Math.random() - 0.3) * 2)),
        automationLevel: Math.max(70, Math.min(85, prev.automationLevel + (Math.random() - 0.4) * 1))
      }));

      // Update ML model accuracy
      setMlModels(prev => prev.map(model => ({
        ...model,
        accuracy: Math.max(85, Math.min(99, model.accuracy + (Math.random() - 0.4) * 0.5))
      })));

      // Occasionally generate new insights
      if (Math.random() < 0.1) {
        const newInsight = {
          id: `AI${String(Math.floor(Math.random() * 999)).padStart(3, '0')}`,
          type: ['performance_optimization', 'predictive_maintenance', 'learning_acceleration'][Math.floor(Math.random() * 3)],
          title: 'New ML-Generated Insight',
          insight: 'Pattern detected in system behavior requiring analysis',
          confidence: Math.floor(Math.random() * 20) + 80,
          impact: ['High', 'Medium', 'Low'][Math.floor(Math.random() * 3)],
          actionable: true,
          category: ['optimization', 'infrastructure', 'learning'][Math.floor(Math.random() * 3)],
          recommendation: 'Automated recommendation generated',
          dateDiscovered: new Date().toISOString().split('T')[0],
          trend: ['improving', 'stable', 'concerning'][Math.floor(Math.random() * 3)]
        };
        
        setAnalyticsInsights(prev => [newInsight, ...prev.slice(0, 3)]);
      }
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getImpactColor = (impact) => {
    const colors = {
      High: '#EF4444',
      Medium: '#F59E0B',
      Low: '#10B981'
    };
    return colors[impact] || '#6B7280';
  };

  const getTrendColor = (trend) => {
    const colors = {
      improving: '#10B981',
      stable: '#3B82F6',
      concerning: '#EF4444'
    };
    return colors[trend] || '#6B7280';
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return '#10B981';
    if (confidence >= 80) return '#F59E0B';
    return '#EF4444';
  };

  const getStatusColor = (status) => {
    const colors = {
      active: '#10B981',
      training: '#F59E0B',
      inactive: '#6B7280'
    };
    return colors[status] || '#6B7280';
  };

  const getCorrelationStrength = (correlation) => {
    const abs = Math.abs(correlation);
    if (abs >= 0.8) return { strength: 'Very Strong', color: '#EF4444' };
    if (abs >= 0.6) return { strength: 'Strong', color: '#F59E0B' };
    if (abs >= 0.4) return { strength: 'Moderate', color: '#3B82F6' };
    return { strength: 'Weak', color: '#10B981' };
  };

  return (
    <div className="space-y-6">
      {/* Analytics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Total Insights</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {analyticsMetrics.totalInsights}
          </div>
          <div className="text-xs text-green-400">↗ Growing knowledge base</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Actionable Insights</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {analyticsMetrics.actionableInsights}
          </div>
          <div className="text-xs text-blue-400">Ready for implementation</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Implemented</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {analyticsMetrics.implementedRecommendations}
          </div>
          <div className="text-xs text-green-400">Optimization applied</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Avg Confidence</div>
          <div className="text-2xl font-bold text-indigo-400 mb-1">
            {analyticsMetrics.averageConfidence.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">High reliability</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Impact Score</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {analyticsMetrics.impactScore.toFixed(1)}
          </div>
          <div className="text-xs text-green-400">High value insights</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Automation Level</div>
          <div className="text-2xl font-bold text-red-400 mb-1">
            {analyticsMetrics.automationLevel.toFixed(1)}%
          </div>
          <div className="text-xs text-blue-400">Self-optimizing</div>
        </div>
      </div>

      {/* ML-Generated Insights */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🧠 ML-Generated Intelligence Insights
            <span className="ml-2 text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
              {analyticsInsights.filter(i => i.actionable).length} actionable
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-4">
          {analyticsInsights.map((insight, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium">{insight.title}</h4>
                <div className="flex items-center space-x-2">
                  <span 
                    className="text-xs px-2 py-1 rounded font-medium"
                    style={{ 
                      backgroundColor: getImpactColor(insight.impact) + '20',
                      color: getImpactColor(insight.impact)
                    }}
                  >
                    {insight.impact} Impact
                  </span>
                  <span 
                    className="text-xs px-2 py-1 rounded font-medium"
                    style={{ 
                      backgroundColor: getTrendColor(insight.trend) + '20',
                      color: getTrendColor(insight.trend)
                    }}
                  >
                    {insight.trend}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">{insight.insight}</p>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-blue-300">💡 {insight.recommendation}</span>
                <div className="flex items-center space-x-3">
                  <span className="text-xs text-gray-400">{insight.dateDiscovered}</span>
                  <span 
                    className="text-xs font-bold"
                    style={{ color: getConfidenceColor(insight.confidence) }}
                  >
                    {insight.confidence.toFixed(1)}% confidence
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ML Models Status */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white flex items-center">
            🤖 Machine Learning Models
            <span className="ml-2 text-xs bg-green-600 text-white px-2 py-1 rounded-full">
              {mlModels.filter(m => m.status === 'active').length} active
            </span>
          </h3>
        </div>
        <div className="p-4 space-y-3">
          {mlModels.map((model, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🧠</span>
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="text-white font-medium">{model.name}</h4>
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">{model.type}</span>
                    <span 
                      className="text-xs px-2 py-1 rounded font-medium"
                      style={{ 
                        backgroundColor: getStatusColor(model.status) + '20',
                        color: getStatusColor(model.status)
                      }}
                    >
                      {model.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{model.purpose}</p>
                  <div className="text-xs text-gray-400">
                    Trained: {model.lastTrained.split(' ')[0]} • Data: {model.trainingData}
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold mb-1" style={{ color: getConfidenceColor(model.accuracy) }}>
                  {model.accuracy.toFixed(1)}%
                </div>
                <div className="text-xs text-gray-400">accuracy</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Correlation Analysis */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">📊 Statistical Correlation Analysis</h3>
        </div>
        <div className="p-4 space-y-3">
          {correlationAnalysis.map((corr, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">📈</span>
                <div>
                  <div className="text-sm text-white mb-1">
                    {corr.factor1} ↔ {corr.factor2}
                  </div>
                  <p className="text-xs text-gray-300">{corr.insight}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold mb-1" style={{ color: getCorrelationStrength(corr.correlation).color }}>
                  {corr.correlation.toFixed(2)}
                </div>
                <div className="text-xs text-gray-400">{getCorrelationStrength(corr.correlation).strength}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Targets */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">🎯 AI-Identified Optimization Targets</h3>
        </div>
        <div className="p-4 space-y-3">
          {optimizationTargets.map((target, index) => (
            <div key={index} className="p-3 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-medium">{target.target}</h4>
                <span className="text-lg font-bold text-green-400">+{target.improvement.toFixed(1)}%</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <span className="text-gray-400">Current: </span>
                  <span className="text-blue-300">{target.currentValue}</span>
                </div>
                <div>
                  <span className="text-gray-400">Optimized: </span>
                  <span className="text-green-300">{target.optimizedValue}</span>
                </div>
                <div>
                  <span className="text-gray-400">Effort: </span>
                  <span className="text-yellow-300">{target.effort}</span>
                </div>
                <div>
                  <span className="text-gray-400">Timeline: </span>
                  <span className="text-purple-300">{target.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedAnalytics;