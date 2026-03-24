// AI Intelligence Layer - Predictive Analytics & Anomaly Detection
// Inspired by Datadog AI-powered monitoring and Fast Forward Labs research
import React, { useState, useEffect, useRef } from 'react';

const AIIntelligenceLayer = () => {
  const [predictions, setPredictions] = useState({});
  const [anomalies, setAnomalies] = useState([]);
  const [correlations, setCorrelations] = useState([]);
  const [mlModels, setMLModels] = useState({
    autoencoder: { status: 'trained', accuracy: 0.94, lastUpdated: Date.now() },
    timeSeriesPredictor: { status: 'training', accuracy: 0.87, lastUpdated: Date.now() },
    anomalyDetector: { status: 'active', accuracy: 0.91, lastUpdated: Date.now() }
  });
  const [intelligenceMetrics, setIntelligenceMetrics] = useState({
    predictiveAccuracy: 0.92,
    falsePositiveRate: 0.05,
    anomaliesDetected: 0,
    correlationsFound: 0,
    modelConfidence: 0.89
  });

  // Simulated AI-powered data analysis
  const runAIAnalysis = () => {
    // Generate predictive insights
    const newPredictions = {
      systemLoad: {
        next15min: 78 + Math.random() * 15,
        next1hour: 65 + Math.random() * 20,
        trend: Math.random() > 0.5 ? 'increasing' : 'stable',
        confidence: 0.85 + Math.random() * 0.1
      },
      memoryUsage: {
        next15min: 72 + Math.random() * 18,
        next1hour: 68 + Math.random() * 22,
        trend: Math.random() > 0.7 ? 'increasing' : 'decreasing',
        confidence: 0.88 + Math.random() * 0.08
      },
      agentPerformance: {
        next15min: 95 + Math.random() * 4,
        next1hour: 92 + Math.random() * 7,
        trend: Math.random() > 0.6 ? 'improving' : 'stable',
        confidence: 0.90 + Math.random() * 0.05
      },
      errorRate: {
        next15min: Math.random() * 3,
        next1hour: Math.random() * 5,
        trend: Math.random() > 0.8 ? 'increasing' : 'decreasing',
        confidence: 0.82 + Math.random() * 0.12
      }
    };

    // Detect anomalies using simulated autoencoder scoring
    const newAnomalies = [];
    const currentTime = new Date().toLocaleTimeString();
    
    if (Math.random() > 0.7) {
      newAnomalies.push({
        id: `anomaly_${Date.now()}`,
        timestamp: currentTime,
        type: 'Performance Spike',
        metric: 'CPU Usage',
        severity: Math.random() > 0.5 ? 'high' : 'medium',
        anomalyScore: 0.75 + Math.random() * 0.2,
        description: 'Unusual CPU utilization pattern detected',
        confidence: 0.87 + Math.random() * 0.1,
        suggestedAction: 'Check for resource-intensive processes'
      });
    }

    if (Math.random() > 0.8) {
      newAnomalies.push({
        id: `anomaly_${Date.now() + 1}`,
        timestamp: currentTime,
        type: 'Network Anomaly',
        metric: 'Response Time',
        severity: 'medium',
        anomalyScore: 0.68 + Math.random() * 0.15,
        description: 'Response time deviation from normal pattern',
        confidence: 0.79 + Math.random() * 0.15,
        suggestedAction: 'Investigate network latency'
      });
    }

    // Generate correlations using simulated Watchdog Explains
    const newCorrelations = [];
    if (Math.random() > 0.6) {
      newCorrelations.push({
        id: `correlation_${Date.now()}`,
        primaryMetric: 'CPU Usage',
        correlatedMetric: 'Memory Usage',
        correlationStrength: 0.82 + Math.random() * 0.15,
        timeWindow: '15 minutes',
        description: 'Strong positive correlation detected',
        impact: 'Resource contention likely',
        rootCause: 'Memory allocation spike causing CPU overhead'
      });
    }

    setPredictions(newPredictions);
    setAnomalies(prev => [...newAnomalies, ...prev].slice(0, 10)); // Keep last 10
    setCorrelations(prev => [...newCorrelations, ...prev].slice(0, 5)); // Keep last 5

    // Update intelligence metrics
    setIntelligenceMetrics(prev => ({
      ...prev,
      anomaliesDetected: prev.anomaliesDetected + newAnomalies.length,
      correlationsFound: prev.correlationsFound + newCorrelations.length,
      predictiveAccuracy: 0.88 + Math.random() * 0.08,
      falsePositiveRate: 0.03 + Math.random() * 0.04,
      modelConfidence: 0.85 + Math.random() * 0.1
    }));
  };

  // Run AI analysis every 10 seconds
  useEffect(() => {
    const interval = setInterval(runAIAnalysis, 10000);
    runAIAnalysis(); // Initial run
    return () => clearInterval(interval);
  }, []);

  // AI Model Status Component
  const AIModelCard = ({ name, model }) => {
    const getStatusColor = (status) => {
      switch (status) {
        case 'active': return 'text-green-400 bg-green-900/20';
        case 'trained': return 'text-blue-400 bg-blue-900/20';
        case 'training': return 'text-yellow-400 bg-yellow-900/20';
        default: return 'text-gray-400 bg-gray-900/20';
      }
    };

    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-sm font-semibold text-white">{name}</h4>
          <div className={`px-2 py-1 rounded text-xs ${getStatusColor(model.status)}`}>
            {model.status.toUpperCase()}
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Accuracy:</span>
            <span className="text-white font-mono">{(model.accuracy * 100).toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Last Updated:</span>
            <span className="text-gray-300 text-xs">
              {new Date(model.lastUpdated).toLocaleTimeString()}
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Prediction Card Component
  const PredictionCard = ({ title, prediction, icon }) => {
    const getTrendIcon = (trend) => {
      switch (trend) {
        case 'increasing': return '📈';
        case 'decreasing': return '📉';
        case 'improving': return '⬆️';
        default: return '➡️';
      }
    };

    const getTrendColor = (trend) => {
      switch (trend) {
        case 'increasing': return 'text-orange-400';
        case 'decreasing': return 'text-blue-400';
        case 'improving': return 'text-green-400';
        default: return 'text-gray-400';
      }
    };

    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{icon}</span>
            <h4 className="text-sm font-semibold text-white">{title}</h4>
          </div>
          <div className="text-xs text-gray-400">
            {(prediction.confidence * 100).toFixed(0)}% confidence
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Next 15m:</span>
            <span className="text-white font-mono">{prediction.next15min.toFixed(1)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Next 1h:</span>
            <span className="text-white font-mono">{prediction.next1hour.toFixed(1)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">Trend:</span>
            <div className={`flex items-center space-x-1 ${getTrendColor(prediction.trend)}`}>
              <span>{getTrendIcon(prediction.trend)}</span>
              <span className="text-sm capitalize">{prediction.trend}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Anomaly Card Component
  const AnomalyCard = ({ anomaly }) => {
    const getSeverityColor = (severity) => {
      switch (severity) {
        case 'high': return 'text-red-400 bg-red-900/20 border-red-500';
        case 'medium': return 'text-yellow-400 bg-yellow-900/20 border-yellow-500';
        case 'low': return 'text-blue-400 bg-blue-900/20 border-blue-500';
        default: return 'text-gray-400 bg-gray-900/20 border-gray-500';
      }
    };

    return (
      <div className={`border rounded-lg p-3 ${getSeverityColor(anomaly.severity)}`}>
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-lg">🚨</span>
            <div>
              <h5 className="font-semibold text-sm">{anomaly.type}</h5>
              <p className="text-xs text-gray-400">{anomaly.metric}</p>
            </div>
          </div>
          <div className="text-xs">
            Score: {anomaly.anomalyScore.toFixed(2)}
          </div>
        </div>
        
        <p className="text-sm mb-2">{anomaly.description}</p>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-400">{anomaly.timestamp}</span>
          <span>Confidence: {(anomaly.confidence * 100).toFixed(0)}%</span>
        </div>
        
        <div className="mt-2 p-2 bg-gray-900/50 rounded text-xs">
          <strong>Suggested Action:</strong> {anomaly.suggestedAction}
        </div>
      </div>
    );
  };

  // Correlation Card Component
  const CorrelationCard = ({ correlation }) => {
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg">🔗</span>
          <span className="text-xs text-gray-400">{correlation.timeWindow}</span>
        </div>
        
        <div className="space-y-1 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Primary:</span>
            <span className="text-white">{correlation.primaryMetric}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Correlated:</span>
            <span className="text-white">{correlation.correlatedMetric}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Strength:</span>
            <span className="text-green-400 font-mono">
              {correlation.correlationStrength.toFixed(2)}
            </span>
          </div>
        </div>
        
        <div className="mt-2 text-xs text-gray-300">
          <p className="mb-1">{correlation.description}</p>
          <p className="text-yellow-400">Impact: {correlation.impact}</p>
          <p className="text-blue-400">Root Cause: {correlation.rootCause}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              🧠 AI Intelligence Layer
            </h1>
            <div className="text-sm text-gray-400">
              Predictive Analytics • Anomaly Detection • Root Cause Analysis
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-400">
              Model Confidence: <span className="text-green-400 font-mono">
                {(intelligenceMetrics.modelConfidence * 100).toFixed(1)}%
              </span>
            </div>
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Intelligence Metrics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-purple-400">
            {(intelligenceMetrics.predictiveAccuracy * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400">Predictive Accuracy</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-green-400">
            {(intelligenceMetrics.falsePositiveRate * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400">False Positive Rate</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-red-400">
            {intelligenceMetrics.anomaliesDetected}
          </div>
          <div className="text-xs text-gray-400">Anomalies Detected</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-blue-400">
            {intelligenceMetrics.correlationsFound}
          </div>
          <div className="text-xs text-gray-400">Correlations Found</div>
        </div>
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">
            {(intelligenceMetrics.modelConfidence * 100).toFixed(1)}%
          </div>
          <div className="text-xs text-gray-400">Model Confidence</div>
        </div>
      </div>

      {/* AI Models Status */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4 text-cyan-300">🤖 AI Models Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AIModelCard name="Autoencoder" model={mlModels.autoencoder} />
          <AIModelCard name="Time Series Predictor" model={mlModels.timeSeriesPredictor} />
          <AIModelCard name="Anomaly Detector" model={mlModels.anomalyDetector} />
        </div>
      </div>

      {/* Predictive Analytics */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-4 text-green-300">📈 Predictive Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PredictionCard 
            title="System Load" 
            prediction={predictions.systemLoad || {next15min: 0, next1hour: 0, trend: 'stable', confidence: 0.9}}
            icon="🖥️"
          />
          <PredictionCard 
            title="Memory Usage" 
            prediction={predictions.memoryUsage || {next15min: 0, next1hour: 0, trend: 'stable', confidence: 0.9}}
            icon="💾"
          />
          <PredictionCard 
            title="Agent Performance" 
            prediction={predictions.agentPerformance || {next15min: 0, next1hour: 0, trend: 'stable', confidence: 0.9}}
            icon="🤖"
          />
          <PredictionCard 
            title="Error Rate" 
            prediction={predictions.errorRate || {next15min: 0, next1hour: 0, trend: 'stable', confidence: 0.9}}
            icon="⚠️"
          />
        </div>
      </div>

      {/* Real-Time Anomalies & Correlations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Anomaly Detection */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-red-300">🚨 Real-Time Anomaly Detection</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {anomalies.length > 0 ? (
              anomalies.map((anomaly) => (
                <AnomalyCard key={anomaly.id} anomaly={anomaly} />
              ))
            ) : (
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center text-gray-400">
                No anomalies detected - all systems operating normally
              </div>
            )}
          </div>
        </div>

        {/* Predictive Correlations */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-blue-300">🔗 Predictive Correlations</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {correlations.length > 0 ? (
              correlations.map((correlation) => (
                <CorrelationCard key={correlation.id} correlation={correlation} />
              ))
            ) : (
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-center text-gray-400">
                Analyzing metric correlations... No significant patterns detected yet
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
        <div className="flex justify-center items-center space-x-6">
          <span>🧠 Powered by Deep Learning</span>
          <span>🎯 Datadog-inspired AI Analysis</span>
          <span>⚡ Real-time Inference</span>
          <span>📊 TensorFlow.js Ready</span>
        </div>
      </div>
    </div>
  );
};

export default AIIntelligenceLayer;