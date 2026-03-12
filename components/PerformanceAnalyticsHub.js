// Performance Analytics Hub - Advanced performance monitoring and optimization insights
import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, BarChart3, PieChart, Activity, Zap, Clock, Target, Cpu, HardDrive, Wifi, Database } from 'lucide-react';

export default function PerformanceAnalyticsHub() {
  const [analyticsData, setAnalyticsData] = useState({
    overallMetrics: {
      systemPerformance: 94.7,
      responseTime: 156,
      throughput: 1247,
      errorRate: 0.3,
      uptime: 99.97,
      resourceEfficiency: 87.4,
      costOptimization: 92.1,
      userSatisfaction: 96.2
    },
    performanceTrends: [
      { time: '10:00', cpu: 45, memory: 67, network: 23, disk: 12 },
      { time: '11:00', cpu: 52, memory: 71, network: 34, disk: 18 },
      { time: '12:00', cpu: 48, memory: 74, network: 28, disk: 15 },
      { time: '13:00', cpu: 56, memory: 78, network: 41, disk: 22 },
      { time: '14:00', cpu: 61, memory: 82, network: 38, disk: 19 },
      { time: '14:12', cpu: 58, memory: 79, network: 35, disk: 17 }
    ],
    agentPerformance: [
      {
        agent: 'Content Processor',
        efficiency: 96.4,
        tasksCompleted: 247,
        averageTime: '45s',
        errorRate: 0.1,
        resourceUsage: 68,
        costPerTask: '$0.024',
        trend: 'up'
      },
      {
        agent: 'LinkedIn Outreach',
        efficiency: 89.3,
        tasksCompleted: 156,
        averageTime: '2m 15s',
        errorRate: 1.2,
        resourceUsage: 34,
        costPerTask: '$0.087',
        trend: 'stable'
      },
      {
        agent: 'Aleksandra Main',
        efficiency: 97.8,
        tasksCompleted: 89,
        averageTime: '1m 32s',
        errorRate: 0.2,
        resourceUsage: 45,
        costPerTask: '$0.156',
        trend: 'up'
      },
      {
        agent: 'System Orchestrator',
        efficiency: 94.1,
        tasksCompleted: 312,
        averageTime: '23s',
        errorRate: 0.4,
        resourceUsage: 52,
        costPerTask: '$0.019',
        trend: 'down'
      },
      {
        agent: 'Instagram Monitor',
        efficiency: 92.7,
        tasksCompleted: 178,
        averageTime: '1m 8s',
        errorRate: 0.6,
        resourceUsage: 29,
        costPerTask: '$0.034',
        trend: 'up'
      },
      {
        agent: 'Spec Ad Creator',
        efficiency: 85.2,
        tasksCompleted: 23,
        averageTime: '8m 45s',
        errorRate: 2.1,
        resourceUsage: 73,
        costPerTask: '$0.234',
        trend: 'stable'
      }
    ],
    optimizationRecommendations: [
      {
        category: 'Resource Optimization',
        priority: 'high',
        title: 'Optimize Spec Ad Creator Memory Usage',
        description: 'Agent using 73% resources - consider memory optimization or task batching',
        impact: 'Could improve overall system efficiency by 8-12%',
        effort: 'Medium',
        eta: '2-3 days'
      },
      {
        category: 'Performance Enhancement',
        priority: 'medium',
        title: 'Cache LinkedIn API Responses',
        description: 'Implement response caching to reduce API calls and improve response times',
        impact: 'Reduce LinkedIn agent response time by 30-40%',
        effort: 'Low',
        eta: '1 day'
      },
      {
        category: 'Cost Optimization',
        priority: 'medium',
        title: 'Batch Processing for Assembly AI',
        description: 'Group transcription requests to leverage bulk pricing tiers',
        impact: 'Reduce transcription costs by 15-20%',
        effort: 'Medium',
        eta: '3-4 days'
      },
      {
        category: 'Reliability',
        priority: 'low',
        title: 'Enhanced Error Handling',
        description: 'Improve error recovery for LinkedIn Outreach agent',
        impact: 'Reduce error rate from 1.2% to <0.5%',
        effort: 'Low',
        eta: '1-2 days'
      }
    ],
    costAnalysis: {
      totalDailyCost: 47.83,
      costByCategory: [
        { category: 'API Calls', cost: 28.45, percentage: 59.5 },
        { category: 'Compute Resources', cost: 12.67, percentage: 26.5 },
        { category: 'Storage', cost: 4.23, percentage: 8.8 },
        { category: 'Network', cost: 2.48, percentage: 5.2 }
      ],
      costTrends: [
        { date: '2024-03-06', cost: 52.14 },
        { date: '2024-03-07', cost: 48.92 },
        { date: '2024-03-08', cost: 51.23 },
        { date: '2024-03-09', cost: 49.67 },
        { date: '2024-03-10', cost: 46.84 },
        { date: '2024-03-11', cost: 45.91 },
        { date: '2024-03-12', cost: 47.83 }
      ]
    },
    bottleneckAnalysis: [
      {
        component: 'Assembly AI API',
        bottleneckScore: 23,
        impact: 'Moderate',
        description: 'Queue delays during peak hours (18:00-20:00)',
        recommendation: 'Implement request queuing and load balancing'
      },
      {
        component: 'LinkedIn Rate Limiting',
        bottleneckScore: 67,
        impact: 'High',
        description: 'Connection request limits affecting outreach volume',
        recommendation: 'Distribute requests across multiple time windows'
      },
      {
        component: 'Memory Usage - Spec Creator',
        bottleneckScore: 45,
        impact: 'Medium',
        description: 'High memory consumption during video generation',
        recommendation: 'Optimize video processing pipeline'
      },
      {
        component: 'Database Queries',
        bottleneckScore: 18,
        impact: 'Low',
        description: 'Minor query optimization opportunities',
        recommendation: 'Add indexes for frequently accessed data'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalyticsData(prev => {
        const newTime = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
        const newDataPoint = {
          time: newTime,
          cpu: Math.max(0, Math.min(100, 58 + (Math.random() - 0.5) * 20)),
          memory: Math.max(0, Math.min(100, 79 + (Math.random() - 0.5) * 15)),
          network: Math.max(0, Math.min(100, 35 + (Math.random() - 0.5) * 25)),
          disk: Math.max(0, Math.min(100, 17 + (Math.random() - 0.5) * 10))
        };

        return {
          ...prev,
          performanceTrends: [...prev.performanceTrends.slice(-5), newDataPoint],
          overallMetrics: {
            ...prev.overallMetrics,
            systemPerformance: Math.max(90, Math.min(99, prev.overallMetrics.systemPerformance + (Math.random() - 0.5) * 2)),
            responseTime: Math.max(100, Math.min(300, prev.overallMetrics.responseTime + (Math.random() - 0.5) * 50)),
            throughput: Math.max(1000, prev.overallMetrics.throughput + Math.floor((Math.random() - 0.5) * 100))
          }
        };
      });
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Activity className="w-4 h-4 text-yellow-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getBottleneckColor = (score) => {
    if (score < 30) return 'text-green-400 bg-green-400/10';
    if (score < 60) return 'text-yellow-400 bg-yellow-400/10';
    return 'text-red-400 bg-red-400/10';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <BarChart3 className="w-8 h-8 text-purple-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Performance Analytics Hub</h2>
            <p className="text-gray-400">Advanced performance monitoring and optimization insights</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{analyticsData.overallMetrics.systemPerformance.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">System Performance</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">{analyticsData.overallMetrics.resourceEfficiency.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Efficiency</div>
          </div>
        </div>
      </div>

      {/* Overall Metrics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{analyticsData.overallMetrics.systemPerformance.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Performance</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{analyticsData.overallMetrics.responseTime}ms</div>
          <div className="text-xs text-gray-400">Response Time</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{analyticsData.overallMetrics.throughput.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Throughput</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{analyticsData.overallMetrics.errorRate}%</div>
          <div className="text-xs text-gray-400">Error Rate</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{analyticsData.overallMetrics.uptime}%</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{analyticsData.overallMetrics.resourceEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Efficiency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-indigo-400">{analyticsData.overallMetrics.costOptimization.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Cost Opt.</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-pink-400">{analyticsData.overallMetrics.userSatisfaction.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Satisfaction</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Trends Chart */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Real-Time Performance Trends</h3>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-green-400">LIVE</div>
            </div>
          </div>
          
          {/* Chart Area */}
          <div className="h-64 flex items-end space-x-2">
            {analyticsData.performanceTrends.map((point, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="relative w-full h-48 flex items-end space-x-1">
                  <div 
                    className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm"
                    style={{ height: `${(point.cpu / 100) * 100}%` }}
                    title={`CPU: ${point.cpu}%`}
                  ></div>
                  <div 
                    className="flex-1 bg-gradient-to-t from-green-500 to-green-400 rounded-t-sm"
                    style={{ height: `${(point.memory / 100) * 100}%` }}
                    title={`Memory: ${point.memory}%`}
                  ></div>
                  <div 
                    className="flex-1 bg-gradient-to-t from-yellow-500 to-yellow-400 rounded-t-sm"
                    style={{ height: `${(point.network / 100) * 100}%` }}
                    title={`Network: ${point.network}%`}
                  ></div>
                  <div 
                    className="flex-1 bg-gradient-to-t from-purple-500 to-purple-400 rounded-t-sm"
                    style={{ height: `${(point.disk / 100) * 100}%` }}
                    title={`Disk: ${point.disk}%`}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-2">{point.time}</div>
              </div>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center space-x-6 mt-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded"></div>
              <span className="text-gray-400">CPU</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded"></div>
              <span className="text-gray-400">Memory</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-400 rounded"></div>
              <span className="text-gray-400">Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded"></div>
              <span className="text-gray-400">Disk</span>
            </div>
          </div>
        </div>

        {/* Cost Analysis */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <PieChart className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Cost Analysis</h3>
          </div>
          
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-green-400">${analyticsData.costAnalysis.totalDailyCost.toFixed(2)}</div>
            <div className="text-xs text-gray-400">Total Daily Cost</div>
          </div>
          
          <div className="space-y-3">
            {analyticsData.costAnalysis.costByCategory.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">{category.category}</span>
                  <span className="text-white font-bold">${category.cost.toFixed(2)}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      index === 0 ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                      index === 1 ? 'bg-gradient-to-r from-green-400 to-green-500' :
                      index === 2 ? 'bg-gradient-to-r from-yellow-400 to-yellow-500' :
                      'bg-gradient-to-r from-purple-400 to-purple-500'
                    }`}
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">{category.percentage.toFixed(1)}% of total</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Performance Analysis */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Target className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Agent Performance Analysis</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {analyticsData.agentPerformance.map((agent, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{agent.agent}</div>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(agent.trend)}
                  <span className="text-sm font-bold text-cyan-400">{agent.efficiency.toFixed(1)}%</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="text-center">
                  <div className="font-bold text-blue-400">{agent.tasksCompleted}</div>
                  <div className="text-gray-400">Tasks</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-400">{agent.averageTime}</div>
                  <div className="text-gray-400">Avg Time</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-red-400">{agent.errorRate}%</div>
                  <div className="text-gray-400">Errors</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-purple-400">{agent.resourceUsage}%</div>
                  <div className="text-gray-400">Resources</div>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-600/30 text-center">
                <div className="font-bold text-yellow-400">{agent.costPerTask}</div>
                <div className="text-xs text-gray-400">Cost per Task</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Recommendations & Bottleneck Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Optimization Recommendations */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Optimization Recommendations</h3>
          </div>
          <div className="space-y-3">
            {analyticsData.optimizationRecommendations.map((rec, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{rec.title}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getPriorityColor(rec.priority)}`}>
                    {rec.priority.toUpperCase()}
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{rec.description}</div>
                <div className="text-green-400 text-sm mb-2">{rec.impact}</div>
                <div className="flex items-center justify-between text-xs">
                  <div className="text-gray-400">{rec.category}</div>
                  <div className="text-cyan-400">ETA: {rec.eta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottleneck Analysis */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Clock className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-bold text-white">Bottleneck Analysis</h3>
          </div>
          <div className="space-y-3">
            {analyticsData.bottleneckAnalysis.map((bottleneck, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{bottleneck.component}</div>
                  <div className={`text-xs px-2 py-1 rounded ${getBottleneckColor(bottleneck.bottleneckScore)}`}>
                    {bottleneck.bottleneckScore}/100
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{bottleneck.description}</div>
                <div className="text-cyan-400 text-sm mb-2">{bottleneck.recommendation}</div>
                <div className="text-xs text-gray-400">Impact: {bottleneck.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{analyticsData.overallMetrics.systemPerformance.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">System Performance</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{analyticsData.overallMetrics.resourceEfficiency.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Resource Efficiency</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">${analyticsData.costAnalysis.totalDailyCost.toFixed(2)}</div>
              <div className="text-sm text-gray-300">Daily Operating Cost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}