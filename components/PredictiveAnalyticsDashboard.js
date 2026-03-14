// Predictive Analytics Dashboard - AI-Powered Mission Control Enhancement
// Based on NASA/SpaceX research and modern dashboard best practices
import { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, AlertTriangle, CheckCircle, 
  Brain, Zap, Clock, Target, Activity, Eye 
} from 'lucide-react';

export default function PredictiveAnalyticsDashboard() {
  const [predictions, setPredictions] = useState({
    systemLoad: {
      current: 67,
      predicted: 85,
      trend: 'increasing',
      confidence: 94,
      timeToAlert: '2.3 hours',
      recommendation: 'Scale resources proactively'
    },
    contentProcessing: {
      current: 15,
      predicted: 28,
      trend: 'spike_incoming',
      confidence: 89,
      timeToSpike: '45 minutes',
      recommendation: 'Prepare additional Assembly AI capacity'
    },
    agentPerformance: {
      current: 96.7,
      predicted: 98.2,
      trend: 'improving',
      confidence: 92,
      optimizationPotential: '12%',
      recommendation: 'Continue current optimization strategy'
    },
    apiQuotaConsumption: {
      current: 43,
      predicted: 78,
      trend: 'accelerating',
      confidence: 88,
      timeToLimit: '6.2 hours',
      recommendation: 'Monitor OpenAI usage patterns'
    }
  });

  const [anomalies, setAnomalies] = useState([
    {
      id: 1,
      type: 'performance',
      severity: 'medium',
      title: 'Agent Response Time Deviation',
      description: 'Content Creator agent showing 15% slower response times than baseline',
      prediction: 'May indicate memory leak or API rate limiting',
      confidence: 87,
      timeDetected: '3 minutes ago',
      suggestedActions: ['Restart agent process', 'Check API quotas', 'Monitor memory usage']
    },
    {
      id: 2,
      type: 'resource',
      severity: 'low',
      title: 'Unusual Processing Pattern',
      description: 'Instagram video processing showing non-standard duration distribution',
      prediction: 'Possible content type shift or quality changes',
      confidence: 73,
      timeDetected: '12 minutes ago',
      suggestedActions: ['Analyze content samples', 'Verify Assembly AI settings']
    },
    {
      id: 3,
      type: 'optimization',
      severity: 'high',
      title: 'Cost Efficiency Opportunity',
      description: 'Token usage pattern suggests 22% optimization potential',
      prediction: 'Model switching could reduce costs without quality loss',
      confidence: 91,
      timeDetected: '18 minutes ago',
      suggestedActions: ['Test Sonnet vs Opus for routine tasks', 'Implement intelligent model routing']
    }
  ]);

  const [insights, setInsights] = useState([
    {
      category: 'performance',
      insight: 'Agent fleet performing 15% above baseline this week',
      impact: 'positive',
      actionable: 'Document current configuration for replication'
    },
    {
      category: 'efficiency',
      insight: 'Content processing pipeline 23% more efficient after recent optimizations',
      impact: 'positive',
      actionable: 'Apply similar optimizations to other workflows'
    },
    {
      category: 'cost',
      insight: 'API costs trending 8% higher than projected for March',
      impact: 'neutral',
      actionable: 'Review usage patterns and implement smart caching'
    },
    {
      category: 'quality',
      insight: 'Assembly AI accuracy improved 2.3% with new preprocessing',
      impact: 'positive',
      actionable: 'Expand preprocessing to all content types'
    }
  ]);

  useEffect(() => {
    // Simulate real-time updates with NASA-style precision
    const interval = setInterval(() => {
      setPredictions(prev => ({
        ...prev,
        systemLoad: {
          ...prev.systemLoad,
          current: Math.max(45, Math.min(95, prev.systemLoad.current + (Math.random() - 0.4) * 3)),
          predicted: Math.max(50, Math.min(98, prev.systemLoad.predicted + (Math.random() - 0.3) * 2))
        },
        agentPerformance: {
          ...prev.agentPerformance,
          current: Math.max(85, Math.min(99, prev.agentPerformance.current + (Math.random() - 0.5) * 0.8))
        }
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getPredictionColor = (trend) => {
    switch(trend) {
      case 'improving': return 'text-green-400';
      case 'increasing': return 'text-yellow-400';
      case 'spike_incoming': return 'text-orange-400';
      case 'accelerating': return 'text-red-400';
      default: return 'text-blue-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'high': return 'border-red-500 bg-red-900/20';
      case 'medium': return 'border-yellow-500 bg-yellow-900/20';
      case 'low': return 'border-blue-500 bg-blue-900/20';
      default: return 'border-gray-500 bg-gray-900/20';
    }
  };

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-blue-400 flex items-center">
            <Brain className="w-8 h-8 mr-3" />
            Predictive Analytics Dashboard
          </h1>
          <div className="text-sm text-gray-400">
            Last Analysis: {new Date().toLocaleTimeString()}
          </div>
        </div>
        <p className="text-gray-300">AI-Powered Mission Control with Predictive Intelligence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        
        {/* Predictive Metrics */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Predictive Metrics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(predictions).map(([key, data]) => (
              <div key={key} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold capitalize text-gray-200">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <span className={`text-sm font-medium ${getPredictionColor(data.trend)}`}>
                    {data.confidence}% confidence
                  </span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current:</span>
                    <span className="font-mono">{data.current}{key.includes('Performance') ? '%' : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Predicted:</span>
                    <span className={`font-mono ${getPredictionColor(data.trend)}`}>
                      {data.predicted}{key.includes('Performance') ? '%' : ''}
                    </span>
                  </div>
                  
                  {data.timeToAlert && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time to Alert:</span>
                      <span className="font-mono text-yellow-400">{data.timeToAlert}</span>
                    </div>
                  )}
                  
                  <div className="mt-3 p-2 bg-gray-700 rounded text-xs">
                    <strong className="text-blue-400">Recommendation:</strong>
                    <br />
                    {data.recommendation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Anomaly Detection */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
            <Eye className="w-5 h-5 mr-2" />
            Anomaly Detection
          </h2>
          
          <div className="space-y-3 max-h-[400px] overflow-y-auto">
            {anomalies.map((anomaly) => (
              <div key={anomaly.id} className={`border rounded-lg p-3 ${getSeverityColor(anomaly.severity)}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-sm">{anomaly.title}</h3>
                  <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                    {anomaly.confidence}% confidence
                  </span>
                </div>
                
                <p className="text-xs text-gray-300 mb-2">{anomaly.description}</p>
                <p className="text-xs text-yellow-300 mb-2">
                  <strong>Prediction:</strong> {anomaly.prediction}
                </p>
                
                <div className="text-xs text-gray-400 mb-2">
                  Detected {anomaly.timeDetected}
                </div>
                
                <div className="space-y-1">
                  <strong className="text-xs text-blue-400">Suggested Actions:</strong>
                  {anomaly.suggestedActions.map((action, idx) => (
                    <div key={idx} className="text-xs text-gray-300 ml-2">
                      • {action}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Intelligence Insights */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
          <Zap className="w-5 h-5 mr-2" />
          AI-Generated Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {insights.map((insight, idx) => (
            <div key={idx} className="bg-gray-800 border border-gray-600 rounded-lg p-3">
              <div className="flex items-center mb-2">
                <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded capitalize">
                  {insight.category}
                </span>
                {insight.impact === 'positive' && <TrendingUp className="w-4 h-4 ml-2 text-green-400" />}
                {insight.impact === 'negative' && <TrendingDown className="w-4 h-4 ml-2 text-red-400" />}
                {insight.impact === 'neutral' && <Activity className="w-4 h-4 ml-2 text-yellow-400" />}
              </div>
              
              <p className="text-sm text-gray-300 mb-2">{insight.insight}</p>
              <p className="text-xs text-blue-400">
                <strong>Action:</strong> {insight.actionable}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}