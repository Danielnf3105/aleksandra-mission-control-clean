import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, RadialBarChart, RadialBar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brain, TrendingUp, AlertTriangle, Shield, Zap, Target, Eye, Clock, CheckCircle, XCircle, Activity } from 'lucide-react';

const AIPredictiveIntelligenceCenter = () => {
  const [predictions, setPredictions] = useState({
    taskCompletion: 87.3,
    resourceOptimization: 92.1,
    threatLevel: 23.4,
    systemEfficiency: 89.7,
    budgetForecast: 94.2,
    agentPerformance: 91.8
  });

  const [insights, setInsights] = useState([
    {
      id: 'INSIGHT-001',
      type: 'optimization',
      priority: 'high',
      title: 'Task Allocation Optimization Detected',
      description: 'AI analysis suggests redistributing 3 high-priority tasks to Aleksandra Main for 23% faster completion',
      confidence: 94.7,
      impact: 'Estimated 4.2 hours saved',
      status: 'recommended',
      timestamp: new Date(),
      category: 'performance'
    },
    {
      id: 'INSIGHT-002',
      type: 'security',
      priority: 'medium',
      title: 'Anomalous Agent Behavior Pattern',
      description: 'Research Agent showing unusual token consumption patterns - potential efficiency optimization needed',
      confidence: 78.3,
      impact: 'Cost savings: $12.45/day',
      status: 'monitoring',
      timestamp: new Date(Date.now() - 1800000),
      category: 'security'
    },
    {
      id: 'INSIGHT-003',
      type: 'forecast',
      priority: 'low',
      title: 'Budget Threshold Alert Prediction',
      description: 'Current spending trajectory indicates 83% budget utilization by month-end (within targets)',
      confidence: 89.1,
      impact: 'Budget on track',
      status: 'informational',
      timestamp: new Date(Date.now() - 3600000),
      category: 'finance'
    },
    {
      id: 'INSIGHT-004',
      type: 'automation',
      priority: 'high',
      title: 'Workflow Automation Opportunity',
      description: 'Repetitive task pattern detected in content processing - automation could reduce manual effort by 45%',
      confidence: 96.2,
      impact: '15.3 hours/week saved',
      status: 'recommended',
      timestamp: new Date(Date.now() - 7200000),
      category: 'automation'
    }
  ]);

  const [systemHealth, setSystemHealth] = useState({
    aiModels: 98.7,
    dataQuality: 94.3,
    predictionAccuracy: 91.8,
    responseTime: 99.2,
    securityScore: 87.4
  });

  const [forecastData, setForecastData] = useState([]);
  const [threatMatrix, setThreatMatrix] = useState([]);
  const [performanceMetrics, setPerformanceMetrics] = useState([]);

  // Generate forecast data
  useEffect(() => {
    const generateForecastData = () => {
      const data = [];
      const today = new Date();
      
      for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        
        const base = 85 + Math.random() * 10;
        const trend = Math.sin(i / 7 * Math.PI) * 5;
        const prediction = Math.max(75, Math.min(100, base + trend));
        
        data.push({
          date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          efficiency: prediction + Math.random() * 4 - 2,
          predicted: prediction,
          confidence: 85 + Math.random() * 10,
          tasks: Math.floor(12 + Math.random() * 8),
          cost: 4 + Math.random() * 2
        });
      }
      return data;
    };

    const generateThreatMatrix = () => {
      return [
        { threat: 'Unusual Token Usage', severity: 'medium', probability: 23, impact: 67, mitigation: 92 },
        { threat: 'Budget Overrun Risk', severity: 'low', probability: 12, impact: 45, mitigation: 98 },
        { threat: 'Agent Performance Drop', severity: 'high', probability: 34, impact: 78, mitigation: 85 },
        { threat: 'System Latency Spike', severity: 'medium', probability: 28, impact: 56, mitigation: 94 },
        { threat: 'Security Anomaly', severity: 'low', probability: 8, impact: 89, mitigation: 96 }
      ];
    };

    const generatePerformanceMetrics = () => {
      return [
        { metric: 'Task Completion Rate', current: 94.2, predicted: 96.8, target: 95 },
        { metric: 'Cost Efficiency', current: 89.7, predicted: 92.1, target: 90 },
        { metric: 'Agent Utilization', current: 87.3, predicted: 91.4, target: 85 },
        { metric: 'System Uptime', current: 99.8, predicted: 99.9, target: 99.5 },
        { metric: 'Response Time', current: 98.4, predicted: 98.8, target: 95 }
      ];
    };

    setForecastData(generateForecastData());
    setThreatMatrix(generateThreatMatrix());
    setPerformanceMetrics(generatePerformanceMetrics());
  }, []);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPredictions(prev => ({
        ...prev,
        taskCompletion: Math.max(80, Math.min(100, prev.taskCompletion + (Math.random() - 0.5) * 2)),
        resourceOptimization: Math.max(85, Math.min(100, prev.resourceOptimization + (Math.random() - 0.5) * 1)),
        threatLevel: Math.max(0, Math.min(100, prev.threatLevel + (Math.random() - 0.7) * 3)),
        systemEfficiency: Math.max(85, Math.min(100, prev.systemEfficiency + (Math.random() - 0.5) * 1.5))
      }));

      // Occasionally add new insights
      if (Math.random() > 0.95) {
        const newInsight = {
          id: `INSIGHT-${Date.now()}`,
          type: ['optimization', 'security', 'forecast', 'automation'][Math.floor(Math.random() * 4)],
          priority: ['high', 'medium', 'low'][Math.floor(Math.random() * 3)],
          title: 'Real-time AI Insight Generated',
          description: 'Predictive analysis has identified a new optimization opportunity',
          confidence: 75 + Math.random() * 20,
          impact: 'Dynamic impact assessment',
          status: 'new',
          timestamp: new Date(),
          category: 'realtime'
        };
        
        setInsights(prev => [newInsight, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'recommended': return <Target className="w-4 h-4 text-blue-400" />;
      case 'monitoring': return <Eye className="w-4 h-4 text-yellow-400" />;
      case 'informational': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'new': return <Zap className="w-4 h-4 text-purple-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getThreatColor = (severity) => {
    switch (severity) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Brain className="w-8 h-8 text-purple-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">AI PREDICTIVE INTELLIGENCE CENTER</h1>
            <p className="text-gray-400">Machine learning insights, predictions, and intelligent automation</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{predictions.taskCompletion.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">EFFICIENCY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{systemHealth.predictionAccuracy.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">ACCURACY</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{predictions.threatLevel.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">THREAT LEVEL</div>
          </div>
        </div>
      </div>

      {/* AI System Health */}
      <div className="grid grid-cols-5 gap-4 mb-6">
        {Object.entries(systemHealth).map(([key, value]) => (
          <div key={key} className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">{key.replace(/([A-Z])/g, ' $1').toUpperCase()}</span>
              <div className={`w-2 h-2 rounded-full ${value > 90 ? 'bg-green-400' : value > 80 ? 'bg-yellow-400' : 'bg-red-400'}`} />
            </div>
            <div className="text-xl font-bold text-white">{value.toFixed(1)}%</div>
            <div className="mt-2 bg-gray-800 rounded-full h-1.5">
              <div 
                className={`rounded-full h-1.5 transition-all duration-500 ${
                  value > 90 ? 'bg-green-400' : value > 80 ? 'bg-yellow-400' : 'bg-red-400'
                }`}
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* AI Insights Feed */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Brain className="w-5 h-5 mr-2 text-purple-400" />
            AI INSIGHTS & RECOMMENDATIONS
          </h3>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {insights.map(insight => (
              <div key={insight.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getPriorityColor(insight.priority) }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(insight.status)}
                    <span className="text-white font-medium text-sm">{insight.title}</span>
                  </div>
                  <span className="text-xs text-gray-400">{insight.confidence.toFixed(1)}%</span>
                </div>
                
                <p className="text-gray-400 text-xs mb-2">{insight.description}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-green-400">{insight.impact}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">{insight.category}</span>
                    <span className="text-gray-500">
                      {new Date(insight.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Predictive Forecasting */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
            PREDICTIVE FORECASTING
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={forecastData.slice(0, 10)}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" stroke="#9CA3AF" fontSize={11} />
              <YAxis stroke="#9CA3AF" fontSize={11} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="efficiency" 
                stroke="#3B82F6" 
                fill="#3B82F6"
                fillOpacity={0.3}
                name="Current Efficiency"
              />
              <Area 
                type="monotone" 
                dataKey="predicted" 
                stroke="#8B5CF6" 
                fill="#8B5CF6"
                fillOpacity={0.2}
                name="AI Prediction"
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Threat Analysis Matrix */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-red-400" />
            THREAT ANALYSIS MATRIX
          </h3>
          <div className="space-y-3">
            {threatMatrix.map((threat, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{threat.threat}</span>
                  <div 
                    className="px-2 py-1 rounded-full text-xs"
                    style={{ 
                      backgroundColor: `${getThreatColor(threat.severity)}20`, 
                      color: getThreatColor(threat.severity) 
                    }}
                  >
                    {threat.severity.toUpperCase()}
                  </div>
                </div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Probability</span>
                    <span className="text-white">{threat.probability}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Impact</span>
                    <span className="text-white">{threat.impact}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mitigation</span>
                    <span className="text-green-400">{threat.mitigation}%</span>
                  </div>
                </div>
                
                <div className="mt-2 bg-gray-700 rounded-full h-1.5">
                  <div 
                    className="bg-green-500 rounded-full h-1.5 transition-all duration-500" 
                    style={{ width: `${threat.mitigation}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics & Automation Opportunities */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* AI Performance Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">AI PERFORMANCE PREDICTIONS</h3>
          <div className="space-y-4">
            {performanceMetrics.map((metric, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">{metric.metric}</span>
                  <div className="flex items-center space-x-4">
                    <span className="text-white">Current: {metric.current}%</span>
                    <span className="text-blue-400">Predicted: {metric.predicted}%</span>
                    <span className="text-gray-500">Target: {metric.target}%</span>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-500" 
                      style={{ width: `${metric.current}%` }}
                    />
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 rounded-full h-2 transition-all duration-500" 
                      style={{ width: `${metric.predicted}%` }}
                    />
                  </div>
                  <div className="flex-1 bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-green-500 rounded-full h-2" 
                      style={{ width: `${metric.target}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Automation Opportunities */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">INTELLIGENT AUTOMATION OPPORTUNITIES</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={[
              { task: 'Content Processing', current: 65, automated: 88, savings: 23 },
              { task: 'Task Allocation', current: 72, automated: 94, savings: 22 },
              { task: 'Cost Monitoring', current: 78, automated: 96, savings: 18 },
              { task: 'Agent Orchestration', current: 68, automated: 91, savings: 23 },
              { task: 'Report Generation', current: 45, automated: 89, savings: 44 }
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="task" stroke="#9CA3AF" fontSize={10} angle={-45} textAnchor="end" />
              <YAxis stroke="#9CA3AF" fontSize={10} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Bar dataKey="current" fill="#6B7280" name="Current Efficiency" />
              <Bar dataKey="automated" fill="#3B82F6" name="AI Automated" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Command Center */}
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-white flex items-center">
            <Zap className="w-5 h-5 mr-2 text-yellow-400" />
            AI COMMAND CENTER
          </h3>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors">
              Auto-Optimize
            </button>
            <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-sm transition-colors">
              Generate Insights
            </button>
            <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-sm transition-colors">
              Execute Recommendations
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-blue-400">47</div>
            <div className="text-xs text-gray-400">Active ML Models</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">1,247</div>
            <div className="text-xs text-gray-400">Predictions/Hour</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-purple-400">$127.45</div>
            <div className="text-xs text-gray-400">Savings This Month</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400">23min</div>
            <div className="text-xs text-gray-400">Avg Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIPredictiveIntelligenceCenter;