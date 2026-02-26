// AgentMetrics.js - Real-time AI Agent Performance Component
import { useState, useEffect } from 'react';

const AgentMetrics = () => {
  const [metrics, setMetrics] = useState({
    cognitiveLoad: 76.3,
    taskQueue: 15,
    learningRate: 78.5,
    errorRate: 2.1,
    efficiency: 94.2,
    adaptability: 88.9
  });

  const [trends, setTrends] = useState({
    cognitiveLoad: -2.3,
    efficiency: +1.8,
    learningRate: +5.7,
    adaptability: +3.2
  });

  useEffect(() => {
    // Simulate real-time metric updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cognitiveLoad: Math.max(0, Math.min(100, prev.cognitiveLoad + (Math.random() - 0.5) * 2)),
        taskQueue: Math.max(0, prev.taskQueue + Math.floor((Math.random() - 0.6) * 3)),
        learningRate: Math.max(0, Math.min(100, prev.learningRate + (Math.random() - 0.4) * 0.5)),
        errorRate: Math.max(0, Math.min(10, prev.errorRate + (Math.random() - 0.7) * 0.3)),
        efficiency: Math.max(0, Math.min(100, prev.efficiency + (Math.random() - 0.3) * 0.8)),
        adaptability: Math.max(0, Math.min(100, prev.adaptability + (Math.random() - 0.4) * 0.6))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value, isGood = true) => {
    if (isGood) {
      return value >= 90 ? '#10B981' : value >= 70 ? '#F59E0B' : '#EF4444';
    } else {
      return value <= 2 ? '#10B981' : value <= 5 ? '#F59E0B' : '#EF4444';
    }
  };

  const getTrendIcon = (trend) => {
    if (trend > 0) return '↗️';
    if (trend < 0) return '↘️';
    return '→';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {/* Cognitive Load */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-300">Cognitive Load</h3>
          <span className="text-xs text-gray-500">{getTrendIcon(trends.cognitiveLoad)} {Math.abs(trends.cognitiveLoad)}%</span>
        </div>
        <div className="text-2xl font-bold" style={{ color: getStatusColor(100 - metrics.cognitiveLoad) }}>
          {metrics.cognitiveLoad.toFixed(1)}%
        </div>
        <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
          <div 
            className="h-1.5 rounded-full transition-all duration-500"
            style={{ 
              width: `${metrics.cognitiveLoad}%`,
              backgroundColor: getStatusColor(100 - metrics.cognitiveLoad)
            }}
          />
        </div>
      </div>

      {/* Task Queue */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-300">Active Tasks</h3>
          <span className="text-xs text-gray-500">Queue</span>
        </div>
        <div className="text-2xl font-bold text-blue-400">
          {metrics.taskQueue}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {metrics.taskQueue < 10 ? 'Low load' : metrics.taskQueue < 20 ? 'Normal' : 'High load'}
        </div>
      </div>

      {/* Learning Rate */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-300">Learning Rate</h3>
          <span className="text-xs text-green-400">{getTrendIcon(trends.learningRate)} {Math.abs(trends.learningRate)}%</span>
        </div>
        <div className="text-2xl font-bold" style={{ color: getStatusColor(metrics.learningRate) }}>
          {metrics.learningRate.toFixed(1)}%
        </div>
        <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
          <div 
            className="h-1.5 rounded-full transition-all duration-500"
            style={{ 
              width: `${metrics.learningRate}%`,
              backgroundColor: getStatusColor(metrics.learningRate)
            }}
          />
        </div>
      </div>

      {/* Error Rate */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-300">Error Rate</h3>
          <span className="text-xs text-gray-500">{getTrendIcon(-trends.cognitiveLoad)} Low</span>
        </div>
        <div className="text-2xl font-bold" style={{ color: getStatusColor(metrics.errorRate, false) }}>
          {metrics.errorRate.toFixed(1)}%
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {metrics.errorRate < 2 ? 'Excellent' : metrics.errorRate < 5 ? 'Good' : 'Needs attention'}
        </div>
      </div>

      {/* Efficiency */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-300">Efficiency</h3>
          <span className="text-xs text-green-400">{getTrendIcon(trends.efficiency)} {Math.abs(trends.efficiency)}%</span>
        </div>
        <div className="text-2xl font-bold" style={{ color: getStatusColor(metrics.efficiency) }}>
          {metrics.efficiency.toFixed(1)}%
        </div>
        <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
          <div 
            className="h-1.5 rounded-full transition-all duration-500"
            style={{ 
              width: `${metrics.efficiency}%`,
              backgroundColor: getStatusColor(metrics.efficiency)
            }}
          />
        </div>
      </div>

      {/* Adaptability */}
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-gray-300">Adaptability</h3>
          <span className="text-xs text-green-400">{getTrendIcon(trends.adaptability)} {Math.abs(trends.adaptability)}%</span>
        </div>
        <div className="text-2xl font-bold" style={{ color: getStatusColor(metrics.adaptability) }}>
          {metrics.adaptability.toFixed(1)}%
        </div>
        <div className="w-full bg-gray-600 rounded-full h-1.5 mt-2">
          <div 
            className="h-1.5 rounded-full transition-all duration-500"
            style={{ 
              width: `${metrics.adaptability}%`,
              backgroundColor: getStatusColor(metrics.adaptability)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentMetrics;