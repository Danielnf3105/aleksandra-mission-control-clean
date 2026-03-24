// Performance Optimization Center - System Performance & Resource Management
import { useState, useEffect } from 'react';
import { Cpu, MemoryStick, HardDrive, Wifi, Zap, TrendingUp, Target, Activity, Gauge, BarChart3, LineChart, AlertTriangle } from 'lucide-react';

export default function PerformanceOptimizationCenter() {
  const [performanceData, setPerformanceData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    systemHealth: 'OPTIMAL',
    overallPerformance: 96.8,
    systemMetrics: {
      cpu: {
        usage: 68.4,
        cores: 8,
        temperature: 62,
        frequency: 3.2,
        efficiency: 94.7,
        processes: 247
      },
      memory: {
        used: 12.4,
        total: 16.0,
        available: 3.6,
        cached: 2.8,
        efficiency: 87.3,
        swapUsed: 0.2
      },
      storage: {
        used: 245.6,
        total: 512.0,
        available: 266.4,
        readSpeed: 850,
        writeSpeed: 720,
        iops: 12400
      },
      network: {
        downloadSpeed: 94.7,
        uploadSpeed: 45.3,
        latency: 12,
        packetLoss: 0.01,
        connections: 89,
        bandwidth: 89.2
      }
    },
    applicationPerformance: {
      missionControl: {
        name: 'Mission Control Dashboard',
        responseTime: 142,
        uptime: 99.97,
        errorRate: 0.02,
        throughput: 1247,
        resourceUsage: 23.4,
        optimization: 94.8
      },
      contentPipeline: {
        name: 'Instagram Content Pipeline',
        responseTime: 89,
        uptime: 99.94,
        errorRate: 0.03,
        throughput: 847,
        resourceUsage: 18.7,
        optimization: 91.2
      },
      agentOrchestration: {
        name: 'AI Agent Orchestration',
        responseTime: 67,
        uptime: 99.98,
        errorRate: 0.01,
        throughput: 2340,
        resourceUsage: 31.2,
        optimization: 97.1
      },
      businessIntelligence: {
        name: 'Business Intelligence',
        responseTime: 156,
        uptime: 99.95,
        errorRate: 0.02,
        throughput: 567,
        resourceUsage: 28.9,
        optimization: 93.6
      },
      threatDetection: {
        name: 'Threat Detection',
        responseTime: 34,
        uptime: 99.99,
        errorRate: 0.00,
        throughput: 4567,
        resourceUsage: 15.3,
        optimization: 98.4
      }
    },
    optimizationRecommendations: [
      {
        category: 'CPU',
        priority: 'MEDIUM',
        issue: 'High CPU usage during peak hours',
        recommendation: 'Implement CPU throttling for non-critical processes',
        impact: 'Reduce CPU usage by 15-20%',
        effort: 'LOW'
      },
      {
        category: 'Memory',
        priority: 'LOW',
        issue: 'Memory fragmentation detected',
        recommendation: 'Schedule periodic memory defragmentation',
        impact: 'Improve memory efficiency by 8%',
        effort: 'MEDIUM'
      },
      {
        category: 'Network',
        priority: 'HIGH',
        issue: 'Occasional latency spikes',
        recommendation: 'Implement connection pooling and CDN optimization',
        impact: 'Reduce latency by 30-40%',
        effort: 'HIGH'
      },
      {
        category: 'Storage',
        priority: 'LOW',
        issue: 'Suboptimal read/write patterns',
        recommendation: 'Enable SSD optimization and caching',
        impact: 'Increase I/O performance by 25%',
        effort: 'MEDIUM'
      }
    ],
    performanceTrends: [
      { time: '11:00', cpu: 65.2, memory: 78.4, network: 87.1, storage: 92.3 },
      { time: '11:05', cpu: 67.8, memory: 79.1, network: 89.4, storage: 91.7 },
      { time: '11:10', cpu: 69.1, memory: 77.6, network: 91.2, storage: 93.1 },
      { time: '11:15', cpu: 68.9, memory: 78.9, network: 88.7, storage: 92.8 },
      { time: '11:20', cpu: 66.4, memory: 80.2, network: 90.3, storage: 91.4 },
      { time: '11:25', cpu: 68.4, memory: 77.5, network: 89.2, storage: 93.6 }
    ],
    resourceAllocation: {
      missionControl: 35.6,
      contentProcessing: 24.8,
      agentOrchestration: 18.9,
      businessIntelligence: 12.4,
      security: 8.3
    },
    alertsAndNotifications: [
      {
        time: '11:24',
        level: 'INFO',
        component: 'Threat Detection Center',
        message: 'Performance optimization completed - 2.3% improvement',
        action: 'Monitored'
      },
      {
        time: '11:22',
        level: 'WARNING',
        component: 'Network Interface',
        message: 'Temporary latency spike detected - 18ms',
        action: 'Auto-resolved'
      },
      {
        time: '11:20',
        level: 'SUCCESS',
        component: 'Business Intelligence',
        message: 'Query optimization successful - 12% faster response',
        action: 'Applied'
      },
      {
        time: '11:18',
        level: 'INFO',
        component: 'AI Agent Hub',
        message: 'Load balancing adjustment completed',
        action: 'Optimized'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPerformanceData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        systemMetrics: {
          ...prev.systemMetrics,
          cpu: {
            ...prev.systemMetrics.cpu,
            usage: Math.max(30, Math.min(90, prev.systemMetrics.cpu.usage + (Math.random() - 0.5) * 4)),
            temperature: Math.max(45, Math.min(75, prev.systemMetrics.cpu.temperature + (Math.random() - 0.5) * 2))
          },
          memory: {
            ...prev.systemMetrics.memory,
            used: Math.max(8, Math.min(15, prev.systemMetrics.memory.used + (Math.random() - 0.5) * 0.8))
          },
          network: {
            ...prev.systemMetrics.network,
            latency: Math.max(8, Math.min(25, prev.systemMetrics.network.latency + (Math.random() - 0.5) * 3)),
            downloadSpeed: Math.max(80, Math.min(100, prev.systemMetrics.network.downloadSpeed + (Math.random() - 0.5) * 5))
          }
        },
        overallPerformance: Math.max(90, Math.min(99, prev.overallPerformance + (Math.random() - 0.5) * 1))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getHealthColor = (value, thresholds = { good: 80, warning: 60 }) => {
    if (value >= thresholds.good) return 'text-green-400';
    if (value >= thresholds.warning) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getAlertLevelIcon = (level) => {
    switch (level) {
      case 'SUCCESS': return <Activity className="w-4 h-4 text-green-400" />;
      case 'WARNING': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'INFO': return <Target className="w-4 h-4 text-blue-400" />;
      default: return <BarChart3 className="w-4 h-4 text-gray-400" />;
    }
  };

  const formatBytes = (bytes) => {
    return `${bytes.toFixed(1)} GB`;
  };

  const formatSpeed = (speed) => {
    return `${speed.toFixed(0)} MB/s`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
              <Gauge className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Performance Optimization Center</h1>
              <p className="text-blue-300">Real-time system monitoring, resource optimization & performance analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{performanceData.currentTime}</div>
            <div className="text-blue-300">Performance Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* System Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
                Overall Performance
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{performanceData.overallPerformance.toFixed(1)}%</div>
            <div className="text-blue-300 text-sm">System Health: {performanceData.systemHealth}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-green-400 mr-2" />
                CPU Usage
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getHealthColor(100 - performanceData.systemMetrics.cpu.usage)}`}>
              {performanceData.systemMetrics.cpu.usage.toFixed(1)}%
            </div>
            <div className="text-green-300 text-sm">{performanceData.systemMetrics.cpu.cores} cores • {performanceData.systemMetrics.cpu.temperature}°C</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MemoryStick className="w-5 h-5 text-purple-400 mr-2" />
                Memory Usage
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatBytes(performanceData.systemMetrics.memory.used)}</div>
            <div className="text-purple-300 text-sm">of {formatBytes(performanceData.systemMetrics.memory.total)} • {formatBytes(performanceData.systemMetrics.memory.available)} free</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wifi className="w-5 h-5 text-orange-400 mr-2" />
                Network Latency
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getHealthColor(50 - performanceData.systemMetrics.network.latency, { good: 30, warning: 20 })}`}>
              {performanceData.systemMetrics.network.latency}ms
            </div>
            <div className="text-orange-300 text-sm">{formatSpeed(performanceData.systemMetrics.network.downloadSpeed)} down</div>
          </div>
        </div>

        {/* System Resource Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <HardDrive className="w-5 h-5 text-cyan-400 mr-2" />
              System Resources
            </h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">CPU Utilization</span>
                  <span className="text-white font-medium">{performanceData.systemMetrics.cpu.usage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      performanceData.systemMetrics.cpu.usage > 80 ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                      performanceData.systemMetrics.cpu.usage > 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                      'bg-gradient-to-r from-green-500 to-cyan-500'
                    }`}
                    style={{ width: `${performanceData.systemMetrics.cpu.usage}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Memory Usage</span>
                  <span className="text-white font-medium">{((performanceData.systemMetrics.memory.used / performanceData.systemMetrics.memory.total) * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                    style={{ width: `${(performanceData.systemMetrics.memory.used / performanceData.systemMetrics.memory.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400">Storage Usage</span>
                  <span className="text-white font-medium">{((performanceData.systemMetrics.storage.used / performanceData.systemMetrics.storage.total) * 100).toFixed(1)}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300"
                    style={{ width: `${(performanceData.systemMetrics.storage.used / performanceData.systemMetrics.storage.total) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-400">Read Speed:</span>
                  <span className="text-cyan-400 ml-2">{formatSpeed(performanceData.systemMetrics.storage.readSpeed)}</span>
                </div>
                <div>
                  <span className="text-slate-400">Write Speed:</span>
                  <span className="text-cyan-400 ml-2">{formatSpeed(performanceData.systemMetrics.storage.writeSpeed)}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <LineChart className="w-5 h-5 text-green-400 mr-2" />
              Application Performance
            </h3>
            <div className="space-y-3">
              {Object.entries(performanceData.applicationPerformance).map(([key, app], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-white text-sm">{app.name}</h4>
                    <span className="text-green-400 text-xs">{app.uptime}% uptime</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400">Response:</span>
                      <span className="text-cyan-400 ml-1">{app.responseTime}ms</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Errors:</span>
                      <span className="text-green-400 ml-1">{app.errorRate}%</span>
                    </div>
                    <div>
                      <span className="text-slate-400">CPU:</span>
                      <span className="text-purple-400 ml-1">{app.resourceUsage}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trends & Optimization Recommendations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-orange-400 mr-2" />
              Performance Trends (Last 25 min)
            </h3>
            <div className="space-y-4">
              {['cpu', 'memory', 'network', 'storage'].map((metric, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-16 text-slate-400 text-sm capitalize">{metric}</div>
                  <div className="flex-1 flex items-end space-x-1 h-8">
                    {performanceData.performanceTrends.map((trend, trendIndex) => (
                      <div 
                        key={trendIndex}
                        className={`flex-1 rounded-t transition-all duration-300 ${
                          metric === 'cpu' ? 'bg-gradient-to-t from-green-600 to-green-400' :
                          metric === 'memory' ? 'bg-gradient-to-t from-purple-600 to-purple-400' :
                          metric === 'network' ? 'bg-gradient-to-t from-orange-600 to-orange-400' :
                          'bg-gradient-to-t from-blue-600 to-blue-400'
                        }`}
                        style={{ height: `${(trend[metric] / 100) * 100}%` }}
                      ></div>
                    ))}
                  </div>
                  <div className="w-12 text-xs text-white text-right">
                    {performanceData.performanceTrends[performanceData.performanceTrends.length - 1][metric].toFixed(0)}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-yellow-400 mr-2" />
              Optimization Recommendations
            </h3>
            <div className="space-y-3">
              {performanceData.optimizationRecommendations.map((rec, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-medium text-sm">{rec.category}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(rec.priority)}`}>
                        {rec.priority}
                      </span>
                    </div>
                  </div>
                  <div className="text-slate-300 text-xs mb-2">{rec.issue}</div>
                  <div className="text-cyan-400 text-xs mb-1">{rec.recommendation}</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">Impact: {rec.impact}</span>
                    <span className="text-purple-400">Effort: {rec.effort}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Real-time Alerts & Resource Allocation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-red-400 mr-2" />
              Real-time Alerts & Notifications
            </h3>
            <div className="space-y-3">
              {performanceData.alertsAndNotifications.map((alert, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30 flex items-center space-x-3">
                  {getAlertLevelIcon(alert.level)}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium text-sm">{alert.component}</span>
                      <span className="text-slate-400 text-xs">{alert.time}</span>
                    </div>
                    <div className="text-slate-300 text-xs">{alert.message}</div>
                    <div className="text-cyan-400 text-xs">Action: {alert.action}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-purple-400 mr-2" />
              Resource Allocation
            </h3>
            <div className="space-y-4">
              {Object.entries(performanceData.resourceAllocation).map(([component, allocation], index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm capitalize">{component.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="text-white font-medium text-sm">{allocation.toFixed(1)}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                        index === 1 ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                        index === 2 ? 'bg-gradient-to-r from-indigo-500 to-blue-500' :
                        index === 3 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                        'bg-gradient-to-r from-red-500 to-orange-500'
                      }`}
                      style={{ width: `${allocation}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-slate-700">
              <div className="text-slate-400 text-sm">Total Resource Utilization</div>
              <div className="text-2xl font-bold text-cyan-400 mt-1">
                {Object.values(performanceData.resourceAllocation).reduce((a, b) => a + b, 0).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}