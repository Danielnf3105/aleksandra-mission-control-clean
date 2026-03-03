// Mission Control v6.5 - Intelligent Analytics Phase 2
import { useState, useEffect } from 'react';

export default function IntelligentAnalytics() {
  const [analyticsData, setAnalyticsData] = useState({
    performancePredictions: {
      nextHourEfficiency: 94.2,
      peakPerformanceTime: '14:30',
      expectedBottlenecks: ['API Rate Limits', 'Memory Usage'],
      confidenceScore: 88.6
    },
    bottleneckDetection: {
      current: [
        { type: 'Assembly AI Queue', severity: 'medium', eta: '3 mins', impact: 15 },
        { type: 'Memory Usage', severity: 'low', eta: 'monitoring', impact: 8 }
      ],
      predicted: [
        { type: 'API Rate Limits', severity: 'high', eta: '45 mins', impact: 35 },
        { type: 'Content Processing', severity: 'medium', eta: '2 hours', impact: 22 }
      ]
    },
    qualityTrends: {
      transcriptionAccuracy: { current: 96.8, trend: '+2.1%', period: '7 days' },
      contentRelevance: { current: 92.4, trend: '+1.8%', period: '7 days' },
      processedItemsQuality: { current: 89.7, trend: '+3.2%', period: '7 days' },
      overallQualityScore: { current: 93.0, trend: '+2.4%', period: '7 days' }
    },
    optimizationRecommendations: [
      {
        category: 'Performance',
        recommendation: 'Batch process Instagram content during low-usage hours (02:00-06:00)',
        impact: 'High',
        effort: 'Low',
        estimatedGain: '25% faster processing'
      },
      {
        category: 'Resource',
        recommendation: 'Pre-allocate Assembly AI quota for peak content hours',
        impact: 'Medium',
        effort: 'Medium',
        estimatedGain: '15% reduced wait times'
      },
      {
        category: 'Quality',
        recommendation: 'Implement parallel transcription verification for accuracy boost',
        impact: 'High',
        effort: 'High',
        estimatedGain: '98%+ accuracy target'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyticsData(prev => ({
        ...prev,
        performancePredictions: {
          ...prev.performancePredictions,
          nextHourEfficiency: Math.max(85, Math.min(99, prev.performancePredictions.nextHourEfficiency + (Math.random() - 0.5) * 2)),
          confidenceScore: Math.max(80, Math.min(95, prev.performancePredictions.confidenceScore + (Math.random() - 0.5) * 1.5))
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-900/30 border-red-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30';
      case 'low': return 'text-green-400 bg-green-900/30 border-green-500/30';
      default: return 'text-gray-400 bg-gray-900/30 border-gray-500/30';
    }
  };

  const getImpactColor = (impact) => {
    if (impact === 'High') return 'text-red-400';
    if (impact === 'Medium') return 'text-yellow-400';
    return 'text-green-400';
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-green-400';
    if (trend.startsWith('-')) return 'text-red-400';
    return 'text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-cyan-300 mb-2">🧠 Intelligent Analytics</h2>
          <p className="text-gray-400">Phase 2: Predictive Performance & Optimization Intelligence</p>
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold text-cyan-300">
            Confidence: {analyticsData.performancePredictions.confidenceScore.toFixed(1)}%
          </div>
          <div className="text-sm text-gray-400">AI Prediction Engine</div>
        </div>
      </div>

      {/* Predictive Performance */}
      <div className="bg-gray-800/50 border border-cyan-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-cyan-300 mb-4 flex items-center">
          🔮 Predictive Performance Modeling
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20">
            <div className="text-2xl font-bold text-cyan-300">
              {analyticsData.performancePredictions.nextHourEfficiency.toFixed(1)}%
            </div>
            <div className="text-sm text-gray-400">Next Hour Efficiency</div>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${analyticsData.performancePredictions.nextHourEfficiency}%` }}
              ></div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20">
            <div className="text-2xl font-bold text-green-400">
              {analyticsData.performancePredictions.peakPerformanceTime}
            </div>
            <div className="text-sm text-gray-400">Peak Performance ETA</div>
            <div className="text-xs text-green-300 mt-2">Optimal processing window</div>
          </div>
          
          <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-500/20">
            <div className="text-sm text-gray-400 mb-2">Expected Challenges</div>
            <div className="space-y-1">
              {analyticsData.performancePredictions.expectedBottlenecks.map((bottleneck, index) => (
                <div key={index} className="text-xs text-yellow-400 bg-yellow-900/20 rounded px-2 py-1">
                  {bottleneck}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottleneck Detection */}
      <div className="bg-gray-800/50 border border-yellow-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center">
          ⚠️ Automatic Bottleneck Detection
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-red-300 mb-3">🔴 Current Bottlenecks</h4>
            <div className="space-y-2">
              {analyticsData.bottleneckDetection.current.map((bottleneck, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getSeverityColor(bottleneck.severity)}`}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{bottleneck.type}</span>
                    <span className="text-sm">{bottleneck.impact}% impact</span>
                  </div>
                  <div className="text-sm mt-1">Resolution ETA: {bottleneck.eta}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-orange-300 mb-3">🟡 Predicted Issues</h4>
            <div className="space-y-2">
              {analyticsData.bottleneckDetection.predicted.map((bottleneck, index) => (
                <div key={index} className={`p-3 rounded-lg border ${getSeverityColor(bottleneck.severity)} opacity-75`}>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{bottleneck.type}</span>
                    <span className="text-sm">{bottleneck.impact}% potential impact</span>
                  </div>
                  <div className="text-sm mt-1">Expected in: {bottleneck.eta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quality Trends */}
      <div className="bg-gray-800/50 border border-green-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center">
          📈 Quality Trend Analysis
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(analyticsData.qualityTrends).map(([key, data]) => (
            <div key={key} className="bg-gray-900/50 rounded-lg p-4 border border-green-500/20">
              <div className="text-2xl font-bold text-green-300">
                {data.current.toFixed(1)}%
              </div>
              <div className="text-sm text-gray-400 capitalize mb-2">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className={`text-sm font-semibold ${getTrendColor(data.trend)}`}>
                {data.trend} ({data.period})
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Recommendations */}
      <div className="bg-gray-800/50 border border-purple-500/30 rounded-lg p-6">
        <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center">
          💡 Resource Optimization Recommendations
        </h3>
        <div className="space-y-4">
          {analyticsData.optimizationRecommendations.map((rec, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/20">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-purple-300 font-semibold text-sm">{rec.category}</span>
                  <div className="text-white font-semibold">{rec.recommendation}</div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold ${getImpactColor(rec.impact)}`}>
                    {rec.impact} Impact
                  </div>
                  <div className="text-xs text-gray-400">{rec.effort} Effort</div>
                </div>
              </div>
              <div className="text-sm text-cyan-300 bg-cyan-900/20 rounded px-3 py-1 inline-block">
                Expected Gain: {rec.estimatedGain}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}