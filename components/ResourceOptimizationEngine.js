// Resource Optimization Engine - Intelligent resource allocation and cost optimization
import { useState, useEffect } from 'react';
import { Cpu, MemoryStick, HardDrive, Wifi, DollarSign, TrendingDown, TrendingUp, Zap, Target, Settings, AlertTriangle, CheckCircle } from 'lucide-react';

export default function ResourceOptimizationEngine() {
  const [optimizationData, setOptimizationData] = useState({
    resourceMetrics: {
      totalCost: 47.83,
      savingsPotential: 12.47,
      efficiencyScore: 87.4,
      optimizationLevel: 73.2,
      autoOptimizations: 24,
      manualActions: 3,
      energyEfficiency: 91.6,
      wasteReduction: 15.3
    },
    resourceUtilization: [
      {
        resource: 'CPU Cores',
        current: 68,
        optimal: 75,
        allocated: 16,
        used: 11.2,
        cost: '$12.45/day',
        recommendation: 'Scale up during peak hours (18:00-20:00)',
        savings: '$2.30',
        priority: 'medium'
      },
      {
        resource: 'Memory (RAM)',
        current: 82,
        optimal: 70,
        allocated: 64,
        used: 52.4,
        cost: '$18.67/day',
        recommendation: 'Reduce allocation by 16GB, optimize memory usage',
        savings: '$4.80',
        priority: 'high'
      },
      {
        resource: 'Storage (SSD)',
        current: 45,
        optimal: 60,
        allocated: 512,
        used: 231,
        cost: '$8.92/day',
        recommendation: 'Increase storage for caching, reduce I/O operations',
        savings: '$1.20',
        priority: 'low'
      },
      {
        resource: 'Network Bandwidth',
        current: 34,
        optimal: 45,
        allocated: 1000,
        used: 340,
        cost: '$7.79/day',
        recommendation: 'Implement data compression, optimize API calls',
        savings: '$3.67',
        priority: 'medium'
      }
    ],
    optimizationStrategies: [
      {
        strategy: 'Smart Scaling',
        description: 'Auto-scale resources based on workload patterns',
        impact: 'Reduce costs by 20-25%',
        complexity: 'Medium',
        timeToImplement: '3-5 days',
        currentStatus: 'planning',
        affectedResources: ['CPU', 'Memory'],
        estimatedSavings: 8.90
      },
      {
        strategy: 'API Call Optimization',
        description: 'Batch requests and implement intelligent caching',
        impact: 'Reduce API costs by 35%',
        complexity: 'Low',
        timeToImplement: '1-2 days',
        currentStatus: 'ready',
        affectedResources: ['Network', 'CPU'],
        estimatedSavings: 4.50
      },
      {
        strategy: 'Memory Pool Management',
        description: 'Implement dynamic memory allocation and garbage collection',
        impact: 'Improve memory efficiency by 30%',
        complexity: 'High',
        timeToImplement: '1-2 weeks',
        currentStatus: 'researching',
        affectedResources: ['Memory'],
        estimatedSavings: 5.60
      },
      {
        strategy: 'Storage Tiering',
        description: 'Move cold data to cheaper storage tiers automatically',
        impact: 'Reduce storage costs by 40%',
        complexity: 'Medium',
        timeToImplement: '4-6 days',
        currentStatus: 'testing',
        affectedResources: ['Storage'],
        estimatedSavings: 3.57
      }
    ],
    performanceImprovements: [
      {
        component: 'Assembly AI Processing',
        currentLatency: 1234,
        targetLatency: 890,
        improvement: '28% faster',
        method: 'Request batching and parallel processing',
        resourceImpact: '+15% CPU, -20% API calls'
      },
      {
        component: 'Content Processing Pipeline',
        currentLatency: 567,
        targetLatency: 420,
        improvement: '26% faster',
        method: 'Memory caching and async processing',
        resourceImpact: '+8% Memory, -12% I/O operations'
      },
      {
        component: 'LinkedIn Outreach',
        currentLatency: 2150,
        targetLatency: 1800,
        improvement: '16% faster',
        method: 'Connection pooling and request optimization',
        resourceImpact: '-25% Network usage, +5% CPU'
      },
      {
        component: 'Mission Control Dashboard',
        currentLatency: 234,
        targetLatency: 180,
        improvement: '23% faster',
        method: 'Client-side caching and lazy loading',
        resourceImpact: '-30% Network bandwidth, +10% client memory'
      }
    ],
    costBreakdown: {
      categories: [
        { name: 'Compute (CPU)', current: 12.45, optimized: 9.80, savings: 2.65 },
        { name: 'Memory (RAM)', current: 18.67, optimized: 14.20, savings: 4.47 },
        { name: 'Storage', current: 8.92, optimized: 7.50, savings: 1.42 },
        { name: 'Network', current: 7.79, optimized: 5.90, savings: 1.89 },
        { name: 'API Calls', current: 0, optimized: 0, savings: 2.04 }
      ]
    },
    automationRules: [
      {
        rule: 'Auto-scale CPU',
        condition: 'CPU usage > 80% for 5+ minutes',
        action: 'Scale up by 25%',
        status: 'active',
        triggered: 12,
        savings: '$1.20/day'
      },
      {
        rule: 'Memory cleanup',
        condition: 'Memory usage > 90%',
        action: 'Force garbage collection and clear cache',
        status: 'active',
        triggered: 8,
        savings: '$2.30/day'
      },
      {
        rule: 'Storage archival',
        condition: 'Files older than 30 days',
        action: 'Move to cold storage',
        status: 'active',
        triggered: 156,
        savings: '$0.85/day'
      },
      {
        rule: 'API rate limiting',
        condition: 'Rate limit approaching',
        action: 'Queue requests and batch process',
        status: 'active',
        triggered: 23,
        savings: '$1.40/day'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setOptimizationData(prev => ({
        ...prev,
        resourceMetrics: {
          ...prev.resourceMetrics,
          efficiencyScore: Math.max(80, Math.min(95, prev.resourceMetrics.efficiencyScore + (Math.random() - 0.5) * 2)),
          optimizationLevel: Math.max(70, Math.min(85, prev.resourceMetrics.optimizationLevel + (Math.random() - 0.5) * 1.5)),
          autoOptimizations: prev.resourceMetrics.autoOptimizations + (Math.random() > 0.7 ? 1 : 0)
        },
        resourceUtilization: prev.resourceUtilization.map(resource => ({
          ...resource,
          current: Math.max(20, Math.min(90, resource.current + (Math.random() - 0.5) * 8))
        }))
      }));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/30';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'low': return 'text-green-400 bg-green-400/10 border-green-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'ready': return 'text-blue-400 bg-blue-400/10 border-blue-400/30';
      case 'planning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'testing': return 'text-purple-400 bg-purple-400/10 border-purple-400/30';
      case 'researching': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getUtilizationColor = (current, optimal) => {
    const diff = Math.abs(current - optimal);
    if (diff <= 5) return 'text-green-400';
    if (diff <= 15) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getResourceIcon = (resource) => {
    if (resource.includes('CPU')) return <Cpu className="w-5 h-5 text-blue-400" />;
    if (resource.includes('Memory')) return <MemoryStick className="w-5 h-5 text-green-400" />;
    if (resource.includes('Storage')) return <HardDrive className="w-5 h-5 text-purple-400" />;
    if (resource.includes('Network')) return <Wifi className="w-5 h-5 text-cyan-400" />;
    return <Settings className="w-5 h-5 text-gray-400" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Target className="w-8 h-8 text-green-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">Resource Optimization Engine</h2>
            <p className="text-gray-400">Intelligent resource allocation and cost optimization</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{optimizationData.resourceMetrics.efficiencyScore.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Efficiency Score</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-yellow-400">${optimizationData.resourceMetrics.savingsPotential.toFixed(2)}</div>
            <div className="text-xs text-gray-400">Daily Savings</div>
          </div>
        </div>
      </div>

      {/* Optimization Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">${optimizationData.resourceMetrics.totalCost.toFixed(2)}</div>
          <div className="text-xs text-gray-400">Total Cost/day</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">${optimizationData.resourceMetrics.savingsPotential.toFixed(2)}</div>
          <div className="text-xs text-gray-400">Savings/day</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{optimizationData.resourceMetrics.efficiencyScore.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Efficiency</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{optimizationData.resourceMetrics.optimizationLevel.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Optimization</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{optimizationData.resourceMetrics.autoOptimizations}</div>
          <div className="text-xs text-gray-400">Auto Opts</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{optimizationData.resourceMetrics.manualActions}</div>
          <div className="text-xs text-gray-400">Manual</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{optimizationData.resourceMetrics.energyEfficiency.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Energy Eff</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{optimizationData.resourceMetrics.wasteReduction.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Waste ↓</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Utilization */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Settings className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white">Resource Utilization</h3>
          </div>
          <div className="space-y-4">
            {optimizationData.resourceUtilization.map((resource, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getResourceIcon(resource.resource)}
                    <div className="text-white font-medium">{resource.resource}</div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded border ${getPriorityColor(resource.priority)}`}>
                    {resource.priority.toUpperCase()}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                  <div className="text-center">
                    <div className={`font-bold ${getUtilizationColor(resource.current, resource.optimal)}`}>
                      {resource.current}%
                    </div>
                    <div className="text-gray-400">Current</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">{resource.optimal}%</div>
                    <div className="text-gray-400">Optimal</div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-cyan-500 h-3 rounded-full"
                      style={{ width: `${resource.current}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">{resource.used.toFixed(1)}/{resource.allocated} units</span>
                    <span className="text-yellow-400">{resource.cost}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">{resource.recommendation}</div>
                <div className="text-xs text-green-400">Potential savings: {resource.savings}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Optimization Strategies */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Optimization Strategies</h3>
          </div>
          <div className="space-y-4">
            {optimizationData.optimizationStrategies.map((strategy, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-white font-medium">{strategy.strategy}</div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(strategy.currentStatus)}`}>
                    {strategy.currentStatus.toUpperCase()}
                  </div>
                </div>
                
                <div className="text-gray-300 text-sm mb-2">{strategy.description}</div>
                <div className="text-green-400 text-sm mb-2">{strategy.impact}</div>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{strategy.complexity}</div>
                    <div className="text-gray-400">Complexity</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-400">{strategy.timeToImplement}</div>
                    <div className="text-gray-400">Timeline</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-600/30">
                  <div className="text-xs text-gray-400">
                    Affects: {strategy.affectedResources.join(', ')}
                  </div>
                  <div className="text-xs font-bold text-green-400">
                    ${strategy.estimatedSavings.toFixed(2)}/day
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Improvements & Cost Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Improvements */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Performance Improvements</h3>
          </div>
          <div className="space-y-3">
            {optimizationData.performanceImprovements.map((improvement, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="text-white font-medium mb-2">{improvement.component}</div>
                <div className="grid grid-cols-3 gap-3 text-xs mb-2">
                  <div className="text-center">
                    <div className="font-bold text-red-400">{improvement.currentLatency}ms</div>
                    <div className="text-gray-400">Current</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">{improvement.targetLatency}ms</div>
                    <div className="text-gray-400">Target</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-cyan-400">{improvement.improvement}</div>
                    <div className="text-gray-400">Improvement</div>
                  </div>
                </div>
                <div className="text-gray-300 text-xs mb-1">{improvement.method}</div>
                <div className="text-blue-400 text-xs">{improvement.resourceImpact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <DollarSign className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-bold text-white">Cost Optimization</h3>
          </div>
          <div className="space-y-3">
            {optimizationData.costBreakdown.categories.map((category, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-medium">{category.name}</div>
                  <div className="text-green-400 text-sm">-${category.savings.toFixed(2)}</div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-center">
                    <div className="font-bold text-red-400">${category.current.toFixed(2)}</div>
                    <div className="text-gray-400">Current</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-green-400">${category.optimized.toFixed(2)}</div>
                    <div className="text-gray-400">Optimized</div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-red-400 to-green-400 h-2 rounded-full"
                      style={{ width: `${((category.current - category.optimized) / category.current) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {(((category.current - category.optimized) / category.current) * 100).toFixed(1)}% reduction
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Automation Rules */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
        <div className="flex items-center space-x-2 mb-4">
          <CheckCircle className="w-5 h-5 text-green-400" />
          <h3 className="text-lg font-bold text-white">Automation Rules</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {optimizationData.automationRules.map((rule, index) => (
            <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white font-medium">{rule.rule}</div>
                <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(rule.status)}`}>
                  {rule.status.toUpperCase()}
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="text-gray-300">
                  <span className="text-gray-400">When:</span> {rule.condition}
                </div>
                <div className="text-cyan-400">
                  <span className="text-gray-400">Then:</span> {rule.action}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-gray-600/30 text-xs">
                <div className="text-center">
                  <div className="font-bold text-yellow-400">{rule.triggered}</div>
                  <div className="text-gray-400">Triggered</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-green-400">{rule.savings}</div>
                  <div className="text-gray-400">Savings</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optimization Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">${optimizationData.resourceMetrics.savingsPotential.toFixed(2)}</div>
              <div className="text-sm text-gray-300">Daily Cost Savings</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <Target className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{optimizationData.resourceMetrics.efficiencyScore.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Resource Efficiency</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-400/20 backdrop-blur-sm rounded-lg border border-blue-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">{optimizationData.resourceMetrics.autoOptimizations}</div>
              <div className="text-sm text-gray-300">Auto Optimizations Applied</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}