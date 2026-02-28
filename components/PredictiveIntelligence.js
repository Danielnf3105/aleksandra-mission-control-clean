import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const PredictiveIntelligence = () => {
  const [forecastData, setForecastData] = useState([]);
  const [riskAssessment, setRiskAssessment] = useState({
    systemRisk: 15,
    performanceRisk: 8,
    resourceRisk: 23,
    securityRisk: 5,
    overallRisk: 'LOW',
    riskTrend: 'DECREASING'
  });

  const [predictiveModels, setPredictiveModels] = useState([
    { name: 'Load Prediction', accuracy: 94.2, confidence: 'HIGH', prediction: 'Stable for 6h', trend: 'STABLE' },
    { name: 'Failure Prediction', accuracy: 97.8, confidence: 'VERY_HIGH', prediction: 'No failures expected', trend: 'STABLE' },
    { name: 'Resource Optimization', accuracy: 89.5, confidence: 'HIGH', prediction: '15% efficiency gain', trend: 'IMPROVING' },
    { name: 'Performance Forecast', accuracy: 92.1, confidence: 'HIGH', prediction: 'Peak at 21:00 UTC', trend: 'PREDICTABLE' },
    { name: 'Anomaly Detection', accuracy: 96.7, confidence: 'VERY_HIGH', prediction: 'Normal patterns', trend: 'STABLE' }
  ]);

  const [aiInsights, setAiInsights] = useState([
    { id: 1, type: 'optimization', insight: 'Content processing can be 23% faster with batch optimization', priority: 'HIGH', confidence: 0.89 },
    { id: 2, type: 'prediction', insight: 'System load will peak at 21:30 based on Instagram posting patterns', priority: 'MEDIUM', confidence: 0.94 },
    { id: 3, type: 'anomaly', insight: 'Notion API response time 34% slower than baseline - investigate', priority: 'HIGH', confidence: 0.92 },
    { id: 4, type: 'efficiency', insight: 'Agent collaboration network can handle 45% more parallel tasks', priority: 'LOW', confidence: 0.78 },
    { id: 5, type: 'forecast', insight: 'Email processing workload expected to increase 67% on Monday', priority: 'MEDIUM', confidence: 0.85 }
  ]);

  const [systemCapabilities, setSystemCapabilities] = useState([
    { capability: 'Processing', current: 78, potential: 92, optimization: 18 },
    { capability: 'Intelligence', current: 94, potential: 97, optimization: 3 },
    { capability: 'Efficiency', current: 85, potential: 96, optimization: 13 },
    { capability: 'Reliability', current: 97, potential: 99, optimization: 2 },
    { capability: 'Scalability', current: 72, potential: 89, optimization: 24 },
    { capability: 'Automation', current: 88, potential: 95, optimization: 8 }
  ]);

  // Initialize forecast data
  useEffect(() => {
    const now = Date.now();
    const initialForecast = Array.from({ length: 24 }, (_, i) => {
      const hour = new Date(now + i * 60 * 60 * 1000).getHours();
      return {
        time: `${hour}:00`,
        predicted_load: Math.max(30, Math.min(95, 
          60 + Math.sin(hour * Math.PI / 12) * 25 + Math.random() * 15
        )),
        confidence: Math.max(75, Math.min(98, 88 + Math.random() * 10)),
        current_load: i === 0 ? 68 : null
      };
    });
    setForecastData(initialForecast);
  }, []);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update risk assessment
      setRiskAssessment(prev => ({
        ...prev,
        systemRisk: Math.max(5, Math.min(40, prev.systemRisk + (Math.random() - 0.6) * 5)),
        performanceRisk: Math.max(2, Math.min(30, prev.performanceRisk + (Math.random() - 0.7) * 3)),
        resourceRisk: Math.max(10, Math.min(50, prev.resourceRisk + (Math.random() - 0.5) * 8)),
        securityRisk: Math.max(1, Math.min(20, prev.securityRisk + (Math.random() - 0.8) * 2))
      }));

      // Update AI insights randomly
      if (Math.random() > 0.7) {
        const newInsights = [
          'Agent efficiency improved 5.2% over last hour',
          'Predicted content spike in 2.5 hours based on engagement patterns',
          'Memory optimization opportunity detected in Content Processor',
          'LinkedIn agent performance correlation with time-of-day identified'
        ];
        const newInsight = {
          id: Date.now(),
          type: ['optimization', 'prediction', 'efficiency', 'anomaly'][Math.floor(Math.random() * 4)],
          insight: newInsights[Math.floor(Math.random() * newInsights.length)],
          priority: ['HIGH', 'MEDIUM', 'LOW'][Math.floor(Math.random() * 3)],
          confidence: 0.6 + Math.random() * 0.4
        };
        
        setAiInsights(prev => [newInsight, ...prev.slice(0, 4)]);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (risk) => {
    if (risk < 10) return '#10B981'; // Green
    if (risk < 25) return '#F59E0B'; // Yellow  
    return '#EF4444'; // Red
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'HIGH': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'MEDIUM': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'LOW': return 'bg-green-500/20 text-green-300 border-green-500/30';
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence === 'VERY_HIGH' || confidence > 0.9) return 'text-green-400';
    if (confidence === 'HIGH' || confidence > 0.8) return 'text-blue-400';
    if (confidence === 'MEDIUM' || confidence > 0.7) return 'text-yellow-400';
    return 'text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Predictive Intelligence Header */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4 font-mono flex items-center">
          🔮 Predictive Intelligence Center
        </h2>
        
        {/* Risk Assessment Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">System Risk</div>
            <div className="text-2xl font-bold font-mono" style={{ color: getRiskColor(riskAssessment.systemRisk) }}>
              {riskAssessment.systemRisk}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Performance Risk</div>
            <div className="text-2xl font-bold font-mono" style={{ color: getRiskColor(riskAssessment.performanceRisk) }}>
              {riskAssessment.performanceRisk}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Resource Risk</div>
            <div className="text-2xl font-bold font-mono" style={{ color: getRiskColor(riskAssessment.resourceRisk) }}>
              {riskAssessment.resourceRisk}%
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-4 border border-gray-600 text-center">
            <div className="text-xs text-gray-400 uppercase mb-1">Security Risk</div>
            <div className="text-2xl font-bold font-mono" style={{ color: getRiskColor(riskAssessment.securityRisk) }}>
              {riskAssessment.securityRisk}%
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="text-lg font-mono text-white">Overall Risk Assessment:</span>
            <span className={`text-xl font-bold font-mono ${
              riskAssessment.overallRisk === 'LOW' ? 'text-green-400' :
              riskAssessment.overallRisk === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'
            }`}>
              {riskAssessment.overallRisk}
            </span>
          </div>
          <div className="text-sm font-mono text-gray-400">
            Trend: <span className="text-green-400">{riskAssessment.riskTrend}</span>
          </div>
        </div>
      </div>

      {/* Predictive Models Dashboard */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🤖 Predictive Models Status</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {predictiveModels.map((model, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-3">
                <div className="font-mono text-sm text-white">{model.name}</div>
                <div className={`text-xs px-2 py-1 rounded font-mono ${getConfidenceColor(model.confidence)} bg-gray-700`}>
                  {model.confidence}
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Accuracy</span>
                  <span className="text-green-400 font-mono">{model.accuracy}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${model.accuracy}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-300 font-mono mt-2">
                  {model.prediction}
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Trend</span>
                  <span className={`font-mono ${
                    model.trend === 'IMPROVING' ? 'text-green-400' :
                    model.trend === 'STABLE' ? 'text-blue-400' : 'text-yellow-400'
                  }`}>
                    {model.trend}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Load Forecast Chart */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">📈 24-Hour Load Forecast</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" fontSize={11} />
                <YAxis stroke="#9CA3AF" fontSize={11} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
                <Area type="monotone" dataKey="predicted_load" stroke="#8B5CF6" fill="#8B5CF6/20" strokeWidth={2} name="Predicted Load %" />
                <Area type="monotone" dataKey="confidence" stroke="#10B981" fill="#10B981/10" strokeWidth={1} name="Confidence %" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Capabilities Radar */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">🎯 System Optimization Potential</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={systemCapabilities}>
                <PolarGrid gridType="polygon" stroke="#374151" />
                <PolarAngleAxis dataKey="capability" tick={{ fontSize: 11, fill: '#9CA3AF' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                <Radar name="Current" dataKey="current" stroke="#10B981" fill="#10B981/20" strokeWidth={2} />
                <Radar name="Potential" dataKey="potential" stroke="#8B5CF6" fill="#8B5CF6/10" strokeWidth={2} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '6px' }}
                  labelStyle={{ color: '#F3F4F6' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Insights Feed */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🧠 AI-Generated Insights</h3>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {aiInsights.map((insight) => (
            <div key={insight.id} className="bg-gray-900 rounded-lg p-4 border border-gray-600">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">
                    {insight.type === 'optimization' ? '⚡' : 
                     insight.type === 'prediction' ? '🔮' :
                     insight.type === 'anomaly' ? '🚨' : '📊'}
                  </span>
                  <span className="text-xs font-mono text-gray-400 uppercase">{insight.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-1 rounded font-mono border ${getPriorityColor(insight.priority)}`}>
                    {insight.priority}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {Math.round(insight.confidence * 100)}% confidence
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-300 font-mono leading-relaxed">
                {insight.insight}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Predictive Actions */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">🎯 Recommended Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-mono text-sm transition-colors text-left">
            <div className="text-lg mb-1">🚀</div>
            <div className="font-bold mb-1">Optimize Processing</div>
            <div className="text-xs opacity-80">Implement batch processing for 23% efficiency gain</div>
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-lg font-mono text-sm transition-colors text-left">
            <div className="text-lg mb-1">📊</div>
            <div className="font-bold mb-1">Scale Resources</div>
            <div className="text-xs opacity-80">Prepare for predicted load spike at 21:30</div>
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-lg font-mono text-sm transition-colors text-left">
            <div className="text-lg mb-1">🔧</div>
            <div className="font-bold mb-1">Tune Performance</div>
            <div className="text-xs opacity-80">Address Notion API latency issues</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictiveIntelligence;