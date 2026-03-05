// AIPredictiveCenter.js - AI-Powered Predictive Analytics & Mission-Critical Decision Support
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AIPredictiveCenter = () => {
  const [predictiveModels, setPredictiveModels] = useState([
    {
      id: 'model_001',
      name: 'System Failure Prediction',
      type: 'ANOMALY_DETECTION',
      status: 'ACTIVE',
      accuracy: 94.7,
      confidence: 87.3,
      lastTrained: Date.now() - 2 * 60 * 60 * 1000,
      nextTrain: Date.now() + 6 * 60 * 60 * 1000,
      dataPoints: 145672,
      features: 23,
      algorithm: 'Ensemble Random Forest',
      predictions: 2847,
      alertsGenerated: 12,
      falsePositives: 0.8,
      version: 'v3.2.1'
    },
    {
      id: 'model_002',
      name: 'Resource Optimization Model',
      type: 'OPTIMIZATION',
      status: 'TRAINING',
      accuracy: 89.2,
      confidence: 82.1,
      lastTrained: Date.now() - 45 * 60 * 1000,
      nextTrain: Date.now() + 3 * 60 * 60 * 1000,
      dataPoints: 89456,
      features: 18,
      algorithm: 'Gradient Boosting',
      predictions: 1563,
      alertsGenerated: 8,
      falsePositives: 1.2,
      version: 'v2.8.3'
    },
    {
      id: 'model_003',
      name: 'Performance Forecast Engine',
      type: 'FORECASTING',
      status: 'ACTIVE',
      accuracy: 92.4,
      confidence: 91.8,
      lastTrained: Date.now() - 4 * 60 * 60 * 1000,
      nextTrain: Date.now() + 8 * 60 * 60 * 1000,
      dataPoints: 234567,
      features: 31,
      algorithm: 'LSTM Neural Network',
      predictions: 4521,
      alertsGenerated: 6,
      falsePositives: 0.4,
      version: 'v4.1.2'
    },
    {
      id: 'model_004',
      name: 'Cost Prediction Model',
      type: 'FINANCIAL',
      status: 'ACTIVE',
      accuracy: 96.1,
      confidence: 93.7,
      lastTrained: Date.now() - 1 * 60 * 60 * 1000,
      nextTrain: Date.now() + 12 * 60 * 60 * 1000,
      dataPoints: 67834,
      features: 15,
      algorithm: 'XGBoost Regressor',
      predictions: 1247,
      alertsGenerated: 3,
      falsePositives: 0.2,
      version: 'v5.0.1'
    },
    {
      id: 'model_005',
      name: 'Threat Detection Neural Net',
      type: 'SECURITY',
      status: 'ACTIVE',
      accuracy: 98.3,
      confidence: 95.6,
      lastTrained: Date.now() - 30 * 60 * 1000,
      nextTrain: Date.now() + 2 * 60 * 60 * 1000,
      dataPoints: 189234,
      features: 42,
      algorithm: 'Deep Neural Network',
      predictions: 789,
      alertsGenerated: 15,
      falsePositives: 0.1,
      version: 'v6.3.4'
    },
    {
      id: 'model_006',
      name: 'Agent Behavior Predictor',
      type: 'BEHAVIORAL',
      status: 'DEGRADED',
      accuracy: 76.8,
      confidence: 69.2,
      lastTrained: Date.now() - 8 * 60 * 60 * 1000,
      nextTrain: Date.now() + 1 * 60 * 60 * 1000,
      dataPoints: 45623,
      features: 28,
      algorithm: 'Support Vector Machine',
      predictions: 2341,
      alertsGenerated: 21,
      falsePositives: 3.4,
      version: 'v1.9.8'
    }
  ]);

  const [aiInsights, setAiInsights] = useState([
    {
      id: 'insight_001',
      timestamp: Date.now() - 15 * 60 * 1000,
      type: 'PREDICTION',
      severity: 'HIGH',
      model: 'model_001',
      title: 'Database Connection Pool Exhaustion Predicted',
      description: 'ML models predict 94.7% probability of connection pool exhaustion within 2 hours',
      confidence: 94.7,
      timeToEvent: 7200, // seconds
      recommendedActions: [
        'Scale database connection pool by 25%',
        'Implement connection recycling',
        'Monitor query performance'
      ],
      status: 'ACTIVE',
      impact: 'CRITICAL',
      dataSource: 'database_metrics'
    },
    {
      id: 'insight_002',
      timestamp: Date.now() - 45 * 60 * 1000,
      type: 'OPTIMIZATION',
      severity: 'MEDIUM',
      model: 'model_002',
      title: 'CPU Resource Allocation Inefficiency Detected',
      description: 'AI identifies 23% potential performance improvement through resource rebalancing',
      confidence: 89.2,
      timeToEvent: null,
      recommendedActions: [
        'Redistribute CPU allocation across agents',
        'Enable dynamic scaling policies',
        'Optimize process scheduling'
      ],
      status: 'IN_PROGRESS',
      impact: 'MODERATE',
      dataSource: 'system_telemetry'
    },
    {
      id: 'insight_003',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      type: 'FORECAST',
      severity: 'LOW',
      model: 'model_003',
      title: 'API Traffic Surge Anticipated',
      description: 'Performance models forecast 340% traffic increase during peak hours (14:00-16:00)',
      confidence: 92.4,
      timeToEvent: 3600,
      recommendedActions: [
        'Pre-scale API infrastructure',
        'Enable CDN aggressive caching',
        'Prepare load balancing rules'
      ],
      status: 'ACKNOWLEDGED',
      impact: 'LOW',
      dataSource: 'api_analytics'
    },
    {
      id: 'insight_004',
      timestamp: Date.now() - 3 * 60 * 60 * 1000,
      type: 'ANOMALY',
      severity: 'CRITICAL',
      model: 'model_005',
      title: 'Abnormal Authentication Pattern Detected',
      description: 'Security AI detected 500% increase in failed authentication attempts from specific IP ranges',
      confidence: 98.3,
      timeToEvent: 0,
      recommendedActions: [
        'Implement IP-based rate limiting',
        'Enable enhanced monitoring',
        'Consider temporary IP blocking'
      ],
      status: 'RESOLVED',
      impact: 'HIGH',
      dataSource: 'security_logs'
    }
  ]);

  const [decisionSupport, setDecisionSupport] = useState({
    activeDecisions: [
      {
        id: 'decision_001',
        title: 'Infrastructure Scaling Decision',
        priority: 'HIGH',
        deadline: Date.now() + 2 * 60 * 60 * 1000,
        aiRecommendation: 'SCALE_UP',
        confidence: 91.4,
        factors: [
          { name: 'Predicted Load Increase', weight: 0.4, impact: 'HIGH' },
          { name: 'Cost Optimization', weight: 0.3, impact: 'MEDIUM' },
          { name: 'Performance Requirements', weight: 0.3, impact: 'HIGH' }
        ],
        options: [
          { name: 'Immediate Scale Up', score: 91.4, cost: 234.50, risk: 'LOW' },
          { name: 'Scheduled Scale Up', score: 78.2, cost: 189.30, risk: 'MEDIUM' },
          { name: 'Maintain Current', score: 45.8, cost: 0, risk: 'HIGH' }
        ],
        status: 'PENDING',
        assignedTo: 'DevOps Team'
      },
      {
        id: 'decision_002',
        title: 'Agent Workflow Optimization',
        priority: 'MEDIUM',
        deadline: Date.now() + 6 * 60 * 60 * 1000,
        aiRecommendation: 'OPTIMIZE_WORKFLOW',
        confidence: 87.6,
        factors: [
          { name: 'Agent Efficiency', weight: 0.5, impact: 'HIGH' },
          { name: 'Resource Utilization', weight: 0.3, impact: 'MEDIUM' },
          { name: 'Task Completion Rate', weight: 0.2, impact: 'MEDIUM' }
        ],
        options: [
          { name: 'Implement AI Suggestions', score: 87.6, cost: 67.80, risk: 'LOW' },
          { name: 'Manual Optimization', score: 72.3, cost: 156.20, risk: 'MEDIUM' },
          { name: 'No Changes', score: 58.1, cost: 0, risk: 'LOW' }
        ],
        status: 'ANALYZING',
        assignedTo: 'AI Operations Team'
      }
    ],
    completedDecisions: 47,
    averageAccuracy: 89.3,
    costSavings: 12847.50,
    timeToDecision: 23.4 // minutes
  });

  const [mlMetrics, setMlMetrics] = useState({
    totalModels: 6,
    activeModels: 4,
    trainingModels: 1,
    degradedModels: 1,
    averageAccuracy: 90.8,
    totalPredictions: 13672,
    accuratePredictions: 12408,
    computeHours: 234.7,
    dataProcessed: 1.2, // TB
    featureEngineering: {
      totalFeatures: 167,
      activeFeatures: 134,
      correlationThreshold: 0.85,
      importanceScore: 0.73
    }
  });

  const [predictionTrends, setPredictionTrends] = useState([]);
  const [modelPerformance, setModelPerformance] = useState([]);

  const generatePredictionTrends = () => {
    const data = [];
    for (let i = 23; i >= 0; i--) {
      const time = new Date();
      time.setHours(time.getHours() - i);
      data.push({
        hour: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        predictions: Math.floor(Math.random() * 100) + 50,
        accuracy: Math.random() * 10 + 88,
        confidence: Math.random() * 15 + 80,
        anomalies: Math.floor(Math.random() * 10),
        decisions_supported: Math.floor(Math.random() * 5) + 1
      });
    }
    return data;
  };

  const generateModelPerformance = () => {
    return predictiveModels.map(model => ({
      name: model.name.split(' ')[0],
      accuracy: model.accuracy,
      confidence: model.confidence,
      predictions: model.predictions,
      alerts: model.alertsGenerated,
      false_positives: model.falsePositives
    }));
  };

  useEffect(() => {
    setPredictionTrends(generatePredictionTrends());
    setModelPerformance(generateModelPerformance());
  }, [predictiveModels]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update ML models
      setPredictiveModels(prev => prev.map(model => {
        let newAccuracy = model.accuracy;
        let newConfidence = model.confidence;
        let newStatus = model.status;

        if (model.status === 'ACTIVE') {
          newAccuracy = Math.max(75, Math.min(99, model.accuracy + (Math.random() - 0.5) * 2));
          newConfidence = Math.max(70, Math.min(98, model.confidence + (Math.random() - 0.5) * 3));
        }

        if (model.status === 'TRAINING' && Math.random() > 0.8) {
          newStatus = 'ACTIVE';
          newAccuracy = Math.random() * 15 + 80;
          newConfidence = Math.random() * 20 + 75;
        }

        return {
          ...model,
          accuracy: newAccuracy,
          confidence: newConfidence,
          status: newStatus,
          predictions: model.predictions + Math.floor(Math.random() * 5)
        };
      }));

      // Update metrics
      setMlMetrics(prev => ({
        ...prev,
        totalPredictions: prev.totalPredictions + Math.floor(Math.random() * 10),
        accuratePredictions: prev.accuratePredictions + Math.floor(Math.random() * 8),
        computeHours: prev.computeHours + Math.random() * 0.1
      }));

      // Update decision support
      setDecisionSupport(prev => ({
        ...prev,
        completedDecisions: Math.random() > 0.9 ? prev.completedDecisions + 1 : prev.completedDecisions,
        averageAccuracy: Math.max(80, Math.min(95, prev.averageAccuracy + (Math.random() - 0.5) * 1))
      }));

      // Occasionally add new insights
      if (Math.random() > 0.95) {
        const insightTypes = ['PREDICTION', 'OPTIMIZATION', 'ANOMALY', 'FORECAST'];
        const severities = ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'];
        const newInsight = {
          id: `insight_${Date.now()}`,
          timestamp: Date.now(),
          type: insightTypes[Math.floor(Math.random() * insightTypes.length)],
          severity: severities[Math.floor(Math.random() * severities.length)],
          model: predictiveModels[Math.floor(Math.random() * predictiveModels.length)].id,
          title: 'AI-Generated Predictive Insight',
          description: 'Machine learning models have identified a pattern requiring attention',
          confidence: Math.random() * 20 + 75,
          timeToEvent: Math.random() * 7200,
          recommendedActions: ['Review AI recommendations', 'Validate with domain experts'],
          status: 'ACTIVE',
          impact: severities[Math.floor(Math.random() * severities.length)],
          dataSource: 'ml_pipeline'
        };
        setAiInsights(prev => [newInsight, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [predictiveModels]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'TRAINING': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'DEGRADED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'FAILED': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'IN_PROGRESS': return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'ACKNOWLEDGED': return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'RESOLVED': return 'text-green-400 bg-green-400/20 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'LOW': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getAccuracyColor = (accuracy) => {
    if (accuracy >= 95) return 'text-green-400';
    if (accuracy >= 85) return 'text-blue-400';
    if (accuracy >= 75) return 'text-yellow-400';
    return 'text-red-400';
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatDuration = (seconds) => {
    if (seconds < 60) return `${seconds.toFixed(0)}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    return `${Math.floor(seconds / 3600)}h`;
  };

  const formatBytes = (tb) => {
    if (tb >= 1) return `${tb.toFixed(1)}TB`;
    return `${(tb * 1000).toFixed(0)}GB`;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          🧠 AI PREDICTIVE ANALYTICS CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-mono border border-purple-500/30">
            {mlMetrics.activeModels} MODELS ACTIVE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            Machine learning & decision support
          </div>
        </div>
      </div>

      {/* ML Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">AVG ACCURACY</div>
              <div className="text-2xl font-bold text-purple-100">
                {mlMetrics.averageAccuracy.toFixed(1)}%
              </div>
              <div className="text-xs text-purple-300">
                {mlMetrics.totalPredictions.toLocaleString()} predictions
              </div>
            </div>
            <div className="text-3xl opacity-60">🎯</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 rounded-lg p-4 border border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-cyan-200">COMPUTE HOURS</div>
              <div className="text-2xl font-bold text-cyan-100">
                {mlMetrics.computeHours.toFixed(1)}h
              </div>
              <div className="text-xs text-cyan-300">
                {formatBytes(mlMetrics.dataProcessed)} processed
              </div>
            </div>
            <div className="text-3xl opacity-60">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-lg p-4 border border-emerald-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-emerald-200">DECISIONS SUPPORTED</div>
              <div className="text-2xl font-bold text-emerald-100">
                {decisionSupport.completedDecisions}
              </div>
              <div className="text-xs text-emerald-300">
                {decisionSupport.averageAccuracy.toFixed(1)}% accuracy
              </div>
            </div>
            <div className="text-3xl opacity-60">🎛️</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-lg p-4 border border-amber-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-amber-200">COST SAVINGS</div>
              <div className="text-2xl font-bold text-amber-100">
                ${(decisionSupport.costSavings / 1000).toFixed(1)}K
              </div>
              <div className="text-xs text-amber-300">
                {decisionSupport.timeToDecision.toFixed(1)}m avg decision time
              </div>
            </div>
            <div className="text-3xl opacity-60">💰</div>
          </div>
        </div>
      </div>

      {/* ML Models and Prediction Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ML Models Status */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🤖 ML MODELS STATUS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {predictiveModels.map((model) => (
              <div key={model.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{model.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(model.status)}`}>
                      {model.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {model.type}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Accuracy</div>
                    <div className={`font-bold ${getAccuracyColor(model.accuracy)}`}>
                      {model.accuracy.toFixed(1)}%
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400">Confidence</div>
                    <div className="text-cyan-400 font-bold">{model.confidence.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Predictions</div>
                    <div className="text-green-400 font-bold">{model.predictions.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <div className="text-gray-400">Algorithm</div>
                    <div className="text-purple-400">{model.algorithm}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Features</div>
                    <div className="text-blue-400">{model.features}</div>
                  </div>
                  <div>
                    <div className="text-gray-400">False Positives</div>
                    <div className="text-yellow-400">{model.falsePositives.toFixed(1)}%</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Version</div>
                    <div className="text-pink-400">{model.version}</div>
                  </div>
                </div>

                <div className="text-xs">
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400">Last Trained:</span>
                    <span className="text-emerald-400">{formatTime(model.lastTrained)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Data Points:</span>
                    <span className="text-orange-400">{model.dataPoints.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prediction Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 PREDICTION PERFORMANCE (24H)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={predictionTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="hour" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="accuracy" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Accuracy (%)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="confidence" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Confidence (%)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="predictions" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Predictions/h"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="anomalies" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Anomalies"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights and Decision Support */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Insights */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💡 AI-GENERATED INSIGHTS
          </h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {aiInsights.map((insight) => (
              <div key={insight.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(insight.severity)}`}>
                      {insight.severity}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(insight.status)}`}>
                      {insight.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {insight.type}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(insight.timestamp)}
                  </div>
                </div>
                
                <h4 className="text-sm font-bold text-white mb-2">{insight.title}</h4>
                <p className="text-xs text-gray-300 mb-3">{insight.description}</p>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <span className="text-gray-400">Confidence: </span>
                    <span className="text-purple-400 font-bold">{insight.confidence.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Model: </span>
                    <span className="text-cyan-400">{insight.model.split('_')[1]}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Impact: </span>
                    <span className={insight.impact === 'CRITICAL' ? 'text-red-400' : 
                                   insight.impact === 'HIGH' ? 'text-orange-400' :
                                   insight.impact === 'MODERATE' ? 'text-yellow-400' : 'text-blue-400'}>
                      {insight.impact}
                    </span>
                  </div>
                  {insight.timeToEvent && (
                    <div>
                      <span className="text-gray-400">ETA: </span>
                      <span className="text-green-400">{formatDuration(insight.timeToEvent)}</span>
                    </div>
                  )}
                </div>

                <div>
                  <div className="text-xs text-gray-400 mb-1">Recommended Actions:</div>
                  <ul className="text-xs text-green-400 space-y-1">
                    {insight.recommendedActions.map((action, index) => (
                      <li key={index} className="flex items-center space-x-1">
                        <span>•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Support */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎯 AI DECISION SUPPORT
          </h3>
          <div className="space-y-4">
            {decisionSupport.activeDecisions.map((decision) => (
              <div key={decision.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-sm">{decision.title}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getPriorityColor(decision.priority)}`}>
                      {decision.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Due: {formatTime(Date.now() + (decision.deadline - Date.now()))}
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">AI Recommendation:</span>
                    <span className="text-purple-400 font-bold">{decision.aiRecommendation}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Confidence:</span>
                    <span className="text-cyan-400 font-bold">{decision.confidence.toFixed(1)}%</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-2">Decision Factors:</div>
                  {decision.factors.map((factor, index) => (
                    <div key={index} className="flex justify-between text-xs mb-1">
                      <span className="text-gray-300">{factor.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-yellow-400">{(factor.weight * 100).toFixed(0)}%</span>
                        <span className={factor.impact === 'HIGH' ? 'text-red-400' : 
                                       factor.impact === 'MEDIUM' ? 'text-yellow-400' : 'text-blue-400'}>
                          {factor.impact}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-2">Options Analysis:</div>
                  {decision.options.map((option, index) => (
                    <div key={index} className="bg-gray-800 rounded p-2 mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-white font-medium">{option.name}</span>
                        <span className="text-green-400 font-bold">{option.score.toFixed(1)}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-gray-400">Cost: </span>
                          <span className="text-orange-400">${option.cost.toFixed(2)}</span>
                        </div>
                        <div>
                          <span className="text-gray-400">Risk: </span>
                          <span className={option.risk === 'LOW' ? 'text-green-400' :
                                         option.risk === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'}>
                            {option.risk}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Assigned to:</span>
                    <span className="text-blue-400">{decision.assignedTo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Performance Comparison */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          📊 MODEL PERFORMANCE COMPARISON
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Chart */}
          <div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={modelPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12}/>
                <YAxis stroke="#9CA3AF" fontSize={12}/>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Legend />
                <Bar dataKey="accuracy" fill="#10B981" name="Accuracy (%)" />
                <Bar dataKey="confidence" fill="#3B82F6" name="Confidence (%)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Feature Engineering Stats */}
          <div>
            <h4 className="text-sm font-bold text-white mb-3">Feature Engineering Pipeline</h4>
            <div className="space-y-3">
              <div className="bg-gray-700 rounded p-3">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Total Features</span>
                  <span className="text-cyan-400 font-bold">{mlMetrics.featureEngineering.totalFeatures}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Active Features</span>
                  <span className="text-green-400 font-bold">{mlMetrics.featureEngineering.activeFeatures}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Correlation Threshold</span>
                  <span className="text-purple-400 font-bold">{mlMetrics.featureEngineering.correlationThreshold}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Importance Score</span>
                  <span className="text-yellow-400 font-bold">{mlMetrics.featureEngineering.importanceScore}</span>
                </div>
              </div>

              <div className="bg-gray-700 rounded p-3">
                <h5 className="text-sm font-bold text-white mb-2">ML Pipeline Stats</h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-center">
                    <div className="text-gray-400">Models Deployed</div>
                    <div className="text-cyan-400 font-bold text-lg">{mlMetrics.totalModels}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Prediction Rate</div>
                    <div className="text-green-400 font-bold text-lg">{(mlMetrics.totalPredictions/24).toFixed(0)}/h</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Accuracy Rate</div>
                    <div className="text-purple-400 font-bold text-lg">{((mlMetrics.accuratePredictions / mlMetrics.totalPredictions) * 100).toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-400">Compute Efficiency</div>
                    <div className="text-yellow-400 font-bold text-lg">{(mlMetrics.totalPredictions / mlMetrics.computeHours).toFixed(0)}/h</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictiveCenter;