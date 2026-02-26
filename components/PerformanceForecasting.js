// PerformanceForecasting.js - Predictive Analytics & Capacity Planning
import { useState, useEffect } from 'react';

const PerformanceForecasting = () => {
  const [forecasts, setForecasts] = useState({
    next24h: {
      taskVolume: 342,
      peakHours: ['09:00', '14:00', '18:00'],
      bottlenecks: ['Content Strategist'],
      recommendedActions: ['Scale up GPU resources', 'Add backup agent for content tasks']
    },
    next7days: {
      capacityNeeded: 125,
      growthRate: 18.5,
      riskAreas: ['Memory usage trending to 95%', 'Token rate approaching limit'],
      optimizations: ['Implement task batching', 'Optimize learning algorithms']
    },
    next30days: {
      scalingRequirement: 'Moderate',
      resourceGrowth: 35,
      newCapabilities: ['Advanced pattern recognition', 'Multi-modal processing'],
      infrastructure: 'Additional GPU cluster recommended'
    }
  });

  const [trendData, setTrendData] = useState([
    { period: '6h ago', tasks: 45, efficiency: 89, errors: 3, load: 67 },
    { period: '5h ago', tasks: 52, efficiency: 91, errors: 2, load: 72 },
    { period: '4h ago', tasks: 48, efficiency: 93, errors: 1, load: 69 },
    { period: '3h ago', tasks: 61, efficiency: 94, errors: 2, load: 78 },
    { period: '2h ago', tasks: 58, efficiency: 96, errors: 1, load: 74 },
    { period: '1h ago', tasks: 67, efficiency: 94, errors: 2, load: 82 },
    { period: 'Now', tasks: 73, efficiency: 95, errors: 1, load: 85 }
  ]);

  const [predictions, setPredictions] = useState({
    nextHourTasks: 78,
    peakLoadTime: '19:30',
    bottleneckRisk: 'Medium',
    errorProbability: 2.1,
    optimizationOpportunity: 'High',
    resourceEfficiency: 92.3
  });

  const [scenarios, setScenarios] = useState([
    {
      name: 'Current Trajectory',
      probability: 75,
      outcome: 'Stable performance, minor capacity strain at peak hours',
      recommendation: 'Monitor closely, prepare scaling',
      metrics: { efficiency: 94, capacity: 85, reliability: 97 }
    },
    {
      name: 'High Load Scenario',
      probability: 20,
      outcome: 'Task queue buildup, potential delays during peak',
      recommendation: 'Immediate scaling, load balancing optimization',
      metrics: { efficiency: 87, capacity: 95, reliability: 92 }
    },
    {
      name: 'Optimization Success',
      probability: 5,
      outcome: 'Breakthrough in efficiency, reduced resource usage',
      recommendation: 'Document improvements, apply globally',
      metrics: { efficiency: 98, capacity: 70, reliability: 99 }
    }
  ]);

  useEffect(() => {
    // Simulate real-time forecasting updates
    const interval = setInterval(() => {
      // Update trend data with new point
      setTrendData(prev => [
        ...prev.slice(-6),
        {
          period: 'Now',
          tasks: Math.max(30, Math.min(100, prev[prev.length - 1]?.tasks + (Math.random() - 0.4) * 10)),
          efficiency: Math.max(80, Math.min(99, prev[prev.length - 1]?.efficiency + (Math.random() - 0.3) * 3)),
          errors: Math.max(0, Math.min(8, prev[prev.length - 1]?.errors + (Math.random() - 0.7) * 2)),
          load: Math.max(40, Math.min(95, prev[prev.length - 1]?.load + (Math.random() - 0.3) * 8))
        }
      ]);

      // Update predictions
      setPredictions(prev => ({
        ...prev,
        nextHourTasks: Math.max(50, Math.min(120, prev.nextHourTasks + (Math.random() - 0.5) * 10)),
        errorProbability: Math.max(0.1, Math.min(5.0, prev.errorProbability + (Math.random() - 0.6) * 0.5)),
        resourceEfficiency: Math.max(85, Math.min(98, prev.resourceEfficiency + (Math.random() - 0.4) * 2))
      }));

      // Update scenarios probabilities
      setScenarios(prev => prev.map(scenario => ({
        ...scenario,
        probability: Math.max(1, Math.min(90, scenario.probability + (Math.random() - 0.5) * 5))
      })));
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const getTrendDirection = (current, previous) => {
    if (current > previous * 1.05) return { icon: '📈', color: '#10B981', text: 'Rising' };
    if (current < previous * 0.95) return { icon: '📉', color: '#EF4444', text: 'Falling' };
    return { icon: '➡️', color: '#F59E0B', text: 'Stable' };
  };

  const getRiskLevel = (value, thresholds) => {
    if (value >= thresholds.high) return { level: 'High', color: '#EF4444' };
    if (value >= thresholds.medium) return { level: 'Medium', color: '#F59E0B' };
    return { level: 'Low', color: '#10B981' };
  };

  const getScenarioProbabilityColor = (prob) => {
    if (prob >= 60) return '#10B981';
    if (prob >= 30) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="space-y-6">
      {/* Prediction Overview */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Next Hour Tasks</div>
          <div className="text-2xl font-bold text-blue-400 mb-1">
            {predictions.nextHourTasks}
          </div>
          <div className="text-xs text-green-400">↗ +{Math.round((predictions.nextHourTasks - trendData[trendData.length - 1]?.tasks) || 0)}</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Peak Load Time</div>
          <div className="text-2xl font-bold text-yellow-400 mb-1">
            {predictions.peakLoadTime}
          </div>
          <div className="text-xs text-gray-400">Predicted</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Bottleneck Risk</div>
          <div className="text-2xl font-bold" style={{ color: getRiskLevel(predictions.bottleneckRisk === 'High' ? 80 : predictions.bottleneckRisk === 'Medium' ? 50 : 20, { high: 70, medium: 40 }).color }}>
            {predictions.bottleneckRisk}
          </div>
          <div className="text-xs text-gray-400">Monitoring</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Error Probability</div>
          <div className="text-2xl font-bold text-red-400 mb-1">
            {predictions.errorProbability.toFixed(1)}%
          </div>
          <div className="text-xs text-green-400">Within tolerance</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Resource Efficiency</div>
          <div className="text-2xl font-bold text-green-400 mb-1">
            {predictions.resourceEfficiency.toFixed(1)}%
          </div>
          <div className="text-xs text-blue-400">Optimizing</div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="text-xs text-gray-400 mb-1">Optimization Opportunity</div>
          <div className="text-2xl font-bold text-purple-400 mb-1">
            {predictions.optimizationOpportunity}
          </div>
          <div className="text-xs text-gray-400">Identified</div>
        </div>
      </div>

      {/* Trend Analysis */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Performance Trend Analysis</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-7 gap-2 mb-4">
            {trendData.map((point, index) => {
              const prevPoint = trendData[index - 1];
              return (
                <div key={index} className="text-center">
                  <div className="text-xs text-gray-400 mb-2">{point.period}</div>
                  <div className="space-y-1 mb-2">
                    <div className="bg-blue-600 rounded" style={{ height: `${point.tasks / 2}px`, maxHeight: '50px' }}></div>
                    <div className="bg-green-600 rounded" style={{ height: `${point.efficiency / 2}px`, maxHeight: '50px' }}></div>
                    <div className="bg-red-600 rounded" style={{ height: `${point.errors * 10}px`, maxHeight: '30px' }}></div>
                  </div>
                  {prevPoint && (
                    <div className="text-xs">
                      {getTrendDirection(point.efficiency, prevPoint.efficiency).icon}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="flex justify-center space-x-6 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded"></div>
              <span className="text-gray-400">Tasks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded"></div>
              <span className="text-gray-400">Efficiency</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-600 rounded"></div>
              <span className="text-gray-400">Errors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scenario Planning */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Scenario Planning & Probabilities</h3>
        </div>
        <div className="p-4 space-y-4">
          {scenarios.map((scenario, index) => (
            <div key={index} className="p-4 bg-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-white font-medium">{scenario.name}</h4>
                <div className="flex items-center space-x-2">
                  <span 
                    className="text-lg font-bold"
                    style={{ color: getScenarioProbabilityColor(scenario.probability) }}
                  >
                    {scenario.probability.toFixed(0)}%
                  </span>
                  <div 
                    className="w-12 bg-gray-600 rounded-full h-2"
                  >
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${scenario.probability}%`,
                        backgroundColor: getScenarioProbabilityColor(scenario.probability)
                      }}
                    />
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-3">{scenario.outcome}</p>
              <div className="flex items-center justify-between">
                <div className="text-xs text-blue-300">
                  📋 {scenario.recommendation}
                </div>
                <div className="flex space-x-4 text-xs">
                  <span className="text-green-400">Eff: {scenario.metrics.efficiency}%</span>
                  <span className="text-yellow-400">Cap: {scenario.metrics.capacity}%</span>
                  <span className="text-blue-400">Rel: {scenario.metrics.reliability}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Forecasting Insights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h4 className="text-white font-medium mb-3 flex items-center">
            🔮 Next 24 Hours
          </h4>
          <div className="space-y-2 text-sm">
            <div className="text-gray-300">
              <span className="text-blue-400">{forecasts.next24h.taskVolume}</span> tasks expected
            </div>
            <div className="text-gray-300">
              Peak hours: <span className="text-yellow-400">{forecasts.next24h.peakHours.join(', ')}</span>
            </div>
            <div className="text-gray-300">
              Bottlenecks: <span className="text-red-400">{forecasts.next24h.bottlenecks.join(', ')}</span>
            </div>
            <div className="mt-3 text-xs text-green-400">
              📋 {forecasts.next24h.recommendedActions[0]}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h4 className="text-white font-medium mb-3 flex items-center">
            📅 Next 7 Days
          </h4>
          <div className="space-y-2 text-sm">
            <div className="text-gray-300">
              Capacity needed: <span className="text-blue-400">{forecasts.next7days.capacityNeeded}%</span>
            </div>
            <div className="text-gray-300">
              Growth rate: <span className="text-green-400">+{forecasts.next7days.growthRate}%</span>
            </div>
            <div className="text-gray-300">
              Risk areas: <span className="text-yellow-400">{forecasts.next7days.riskAreas.length}</span> identified
            </div>
            <div className="mt-3 text-xs text-green-400">
              📋 {forecasts.next7days.optimizations[0]}
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <h4 className="text-white font-medium mb-3 flex items-center">
            🚀 Next 30 Days
          </h4>
          <div className="space-y-2 text-sm">
            <div className="text-gray-300">
              Scaling: <span className="text-blue-400">{forecasts.next30days.scalingRequirement}</span>
            </div>
            <div className="text-gray-300">
              Resource growth: <span className="text-yellow-400">+{forecasts.next30days.resourceGrowth}%</span>
            </div>
            <div className="text-gray-300">
              New capabilities: <span className="text-purple-400">{forecasts.next30days.newCapabilities.length}</span> planned
            </div>
            <div className="mt-3 text-xs text-green-400">
              📋 {forecasts.next30days.infrastructure}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceForecasting;