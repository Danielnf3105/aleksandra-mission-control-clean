// Resource Management Center - Infrastructure & Resource Monitoring
import { useState, useEffect } from 'react';
import { Server, Database, Cpu, HardDrive, Zap, Network, Cloud, Monitor, Activity, AlertCircle, Gauge, MemoryStick } from 'lucide-react';

export default function ResourceManagementCenter() {
  const [resourceData, setResourceData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    systemOverview: {
      totalServers: 8,
      activeServices: 23,
      totalStorage: '2.4TB',
      availableStorage: '1.1TB',
      networkBandwidth: '1.2Gbps',
      cpuUtilization: 67.3,
      memoryUsage: 74.8,
      systemHealth: 96.7
    },
    servers: [
      {
        name: 'Mission Control Server',
        status: 'online',
        cpu: 45.2,
        memory: 68.7,
        disk: 34.6,
        network: 125.3,
        uptime: '23d 14h',
        location: 'Vercel Edge',
        services: 3,
        load: 'low'
      },
      {
        name: 'Data Analytics Engine',
        status: 'online',
        cpu: 89.4,
        memory: 91.2,
        disk: 67.8,
        network: 456.7,
        uptime: '15d 8h',
        location: 'AWS eu-west-1',
        services: 5,
        load: 'high'
      },
      {
        name: 'AI Agent Coordinator',
        status: 'online',
        cpu: 72.1,
        memory: 83.4,
        disk: 45.2,
        network: 234.5,
        uptime: '8d 16h',
        location: 'Google Cloud EU',
        services: 8,
        load: 'medium'
      },
      {
        name: 'Content Processing Hub',
        status: 'online',
        cpu: 56.8,
        memory: 67.3,
        disk: 78.9,
        network: 189.4,
        uptime: '12d 4h',
        location: 'Digital Ocean FRA',
        services: 4,
        load: 'medium'
      },
      {
        name: 'Security Monitor',
        status: 'online',
        cpu: 23.7,
        memory: 34.2,
        disk: 23.1,
        network: 67.8,
        uptime: '45d 2h',
        location: 'Azure West EU',
        services: 3,
        load: 'low'
      },
      {
        name: 'Database Cluster',
        status: 'warning',
        cpu: 87.6,
        memory: 94.3,
        disk: 89.1,
        network: 345.2,
        uptime: '67d 12h',
        location: 'AWS eu-central-1',
        services: 6,
        load: 'high'
      }
    ],
    cloudServices: [
      {
        provider: 'Vercel',
        service: 'Mission Control Dashboard',
        status: 'healthy',
        cost: 47.80,
        usage: 'Production',
        region: 'Global Edge',
        metrics: { requests: 15847, bandwidth: '234GB', uptime: 99.97 }
      },
      {
        provider: 'AWS',
        service: 'Data Storage & Analytics',
        status: 'healthy',
        cost: 156.40,
        usage: 'Heavy',
        region: 'eu-west-1',
        metrics: { storage: '890GB', queries: 24567, uptime: 99.95 }
      },
      {
        provider: 'Google Cloud',
        service: 'AI Model Training',
        status: 'active',
        cost: 298.50,
        usage: 'Moderate',
        region: 'europe-west1',
        metrics: { compute: '2.3K hours', models: 12, uptime: 99.89 }
      },
      {
        provider: 'Digital Ocean',
        service: 'Content Processing',
        status: 'healthy',
        cost: 89.20,
        usage: 'Moderate',
        region: 'fra1',
        metrics: { droplets: 4, bandwidth: '156GB', uptime: 99.92 }
      },
      {
        provider: 'Azure',
        service: 'Security Services',
        status: 'healthy',
        cost: 67.30,
        usage: 'Light',
        region: 'westeurope',
        metrics: { events: 8945, storage: '45GB', uptime: 99.98 }
      }
    ],
    resourceAlerts: [
      {
        level: 'warning',
        service: 'Database Cluster',
        message: 'Memory usage exceeding 90% threshold',
        time: '17:02',
        action: 'Scale up recommended'
      },
      {
        level: 'info',
        service: 'Data Analytics Engine',
        message: 'High CPU utilization during processing peak',
        time: '16:45',
        action: 'Normal operation'
      },
      {
        level: 'success',
        service: 'Security Monitor',
        message: 'System optimization completed successfully',
        time: '16:30',
        action: 'Performance improved'
      },
      {
        level: 'warning',
        service: 'Content Processing',
        message: 'Disk space approaching 80% capacity',
        time: '16:15',
        action: 'Cleanup scheduled'
      }
    ],
    networkStatus: {
      totalBandwidth: 1200,
      usedBandwidth: 567,
      latency: 23,
      packetsLost: 0.03,
      connections: 1247,
      throughput: 894.5,
      regions: [
        { name: 'EU West', status: 'optimal', latency: 12, load: 34.7 },
        { name: 'EU Central', status: 'good', latency: 28, load: 67.2 },
        { name: 'US East', status: 'good', latency: 89, load: 23.8 },
        { name: 'Asia Pacific', status: 'fair', latency: 156, load: 45.1 }
      ]
    },
    costOptimization: {
      monthlyBudget: 800,
      currentSpend: 659.20,
      projectedSpend: 742.50,
      savings: 57.80,
      recommendations: [
        { item: 'Unused compute instances', potential: 23.40 },
        { item: 'Storage optimization', potential: 18.60 },
        { item: 'Reserved capacity upgrade', potential: 34.20 },
        { item: 'Network traffic optimization', potential: 12.80 }
      ]
    },
    performanceMetrics: {
      responseTime: 145,
      errorRate: 0.02,
      availability: 99.94,
      throughput: 2847,
      concurrentUsers: 456,
      dataProcessed: '4.7TB'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setResourceData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        systemOverview: {
          ...prev.systemOverview,
          cpuUtilization: Math.max(50, Math.min(85, prev.systemOverview.cpuUtilization + (Math.random() - 0.5) * 4)),
          memoryUsage: Math.max(60, Math.min(90, prev.systemOverview.memoryUsage + (Math.random() - 0.5) * 3)),
          systemHealth: Math.max(95, Math.min(99, prev.systemOverview.systemHealth + (Math.random() - 0.5) * 1))
        },
        networkStatus: {
          ...prev.networkStatus,
          usedBandwidth: Math.max(400, Math.min(800, prev.networkStatus.usedBandwidth + (Math.random() - 0.5) * 50)),
          latency: Math.max(15, Math.min(40, prev.networkStatus.latency + (Math.random() - 0.5) * 8))
        }
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
      case 'healthy':
      case 'optimal':
        return 'text-green-400 bg-green-400/20';
      case 'warning':
      case 'good':
        return 'text-yellow-400 bg-yellow-400/20';
      case 'error':
      case 'critical':
      case 'fair':
        return 'text-red-400 bg-red-400/20';
      case 'active':
        return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getLoadColor = (load) => {
    switch (load) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertColor = (level) => {
    switch (level) {
      case 'success': return 'text-green-400 bg-green-400/20';
      case 'warning': return 'text-yellow-400 bg-yellow-400/20';
      case 'error': return 'text-red-400 bg-red-400/20';
      case 'info': return 'text-blue-400 bg-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const formatBytes = (bytes) => {
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 B';
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-purple-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl">
              <Server className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Resource Management Center</h1>
              <p className="text-indigo-300">Infrastructure monitoring, resource optimization & cost management</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{resourceData.currentTime}</div>
            <div className="text-indigo-300">Resource Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* System Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Server className="w-5 h-5 text-indigo-400 mr-2" />
                Active Servers
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{resourceData.systemOverview.totalServers}</div>
            <div className="text-indigo-300 text-sm">{resourceData.systemOverview.activeServices} services running</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Cpu className="w-5 h-5 text-orange-400 mr-2" />
                CPU Usage
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{resourceData.systemOverview.cpuUtilization.toFixed(1)}%</div>
            <div className="text-orange-300 text-sm">System load average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <MemoryStick className="w-5 h-5 text-cyan-400 mr-2" />
                Memory Usage
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{resourceData.systemOverview.memoryUsage.toFixed(1)}%</div>
            <div className="text-cyan-300 text-sm">RAM utilization</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                System Health
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{resourceData.systemOverview.systemHealth.toFixed(1)}%</div>
            <div className="text-green-300 text-sm">Overall score</div>
          </div>
        </div>

        {/* Server Status & Cloud Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-indigo-400 mr-2" />
              Server Infrastructure
            </h3>
            <div className="space-y-3">
              {resourceData.servers.map((server, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-white">{server.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(server.status)}`}>
                        {server.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gray-700 ${getLoadColor(server.load)}`}>
                        {server.load}
                      </span>
                    </div>
                    <span className="text-slate-400 text-sm">{server.uptime}</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 mb-2">
                    <div className="text-center">
                      <div className="text-xs text-slate-400">CPU</div>
                      <div className={`text-sm font-medium ${server.cpu > 80 ? 'text-red-400' : server.cpu > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                        {server.cpu.toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-400">RAM</div>
                      <div className={`text-sm font-medium ${server.memory > 80 ? 'text-red-400' : server.memory > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                        {server.memory.toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-400">Disk</div>
                      <div className={`text-sm font-medium ${server.disk > 80 ? 'text-red-400' : server.disk > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                        {server.disk.toFixed(1)}%
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-slate-400">Net</div>
                      <div className="text-cyan-400 text-sm font-medium">{server.network.toFixed(0)}MB/s</div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Location: {server.location}</span>
                    <span>Services: {server.services}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Cloud className="w-5 h-5 text-purple-400 mr-2" />
              Cloud Services
            </h3>
            <div className="space-y-3">
              {resourceData.cloudServices.map((service, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-white text-sm">{service.provider}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                        {service.status}
                      </span>
                    </div>
                    <span className="text-green-400 font-medium text-sm">{formatCurrency(service.cost)}/mo</span>
                  </div>
                  <div className="text-slate-300 text-sm mb-2">{service.service}</div>
                  <div className="flex justify-between text-xs text-slate-400 mb-2">
                    <span>Usage: {service.usage}</span>
                    <span>Region: {service.region}</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <span key={key} className="mr-3">{key}: {value}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Network Status & Resource Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Network className="w-5 h-5 text-green-400 mr-2" />
              Network Status
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-green-400">{resourceData.networkStatus.usedBandwidth}MB/s</div>
                  <div className="text-green-300 text-sm">of {resourceData.networkStatus.totalBandwidth}MB/s</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400">{resourceData.networkStatus.latency}ms</div>
                  <div className="text-cyan-300 text-sm">Average latency</div>
                </div>
              </div>
              <div className="w-full bg-slate-600/50 rounded-full h-2 mb-4">
                <div 
                  className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-300"
                  style={{ width: `${(resourceData.networkStatus.usedBandwidth / resourceData.networkStatus.totalBandwidth) * 100}%` }}
                ></div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white text-sm mb-3">Regional Status</h4>
              {resourceData.networkStatus.regions.map((region, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">{region.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(region.status)}`}>
                      {region.status}
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    <span className="mr-3">{region.latency}ms</span>
                    <span>{region.load.toFixed(1)}% load</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
              Resource Alerts
            </h3>
            <div className="space-y-3">
              {resourceData.resourceAlerts.map((alert, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAlertColor(alert.level)}`}>
                        {alert.level}
                      </span>
                      <span className="text-white font-medium text-sm">{alert.service}</span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.time}</span>
                  </div>
                  <div className="text-slate-300 text-sm mb-1">{alert.message}</div>
                  <div className="text-purple-400 text-xs">Action: {alert.action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cost Optimization & Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-orange-400 mr-2" />
              Cost Optimization
            </h3>
            <div className="mb-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-2xl font-bold text-orange-400">{formatCurrency(resourceData.costOptimization.currentSpend)}</div>
                  <div className="text-orange-300 text-sm">Current month spend</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">{formatCurrency(resourceData.costOptimization.savings)}</div>
                  <div className="text-green-300 text-sm">Potential savings</div>
                </div>
              </div>
              <div className="text-slate-400 text-sm mb-2">
                Budget: {formatCurrency(resourceData.costOptimization.monthlyBudget)} | 
                Projected: {formatCurrency(resourceData.costOptimization.projectedSpend)}
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-white text-sm mb-3">Optimization Recommendations</h4>
              {resourceData.costOptimization.recommendations.map((rec, index) => (
                <div key={index} className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300 text-sm">{rec.item}</span>
                  <span className="text-green-400 font-medium text-sm">{formatCurrency(rec.potential)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Gauge className="w-5 h-5 text-cyan-400 mr-2" />
              Performance Metrics
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Response Time</span>
                  <span className="text-cyan-400 font-medium">{resourceData.performanceMetrics.responseTime}ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Error Rate</span>
                  <span className="text-green-400 font-medium">{resourceData.performanceMetrics.errorRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Availability</span>
                  <span className="text-green-400 font-medium">{resourceData.performanceMetrics.availability}%</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Throughput</span>
                  <span className="text-purple-400 font-medium">{resourceData.performanceMetrics.throughput}/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Concurrent Users</span>
                  <span className="text-orange-400 font-medium">{resourceData.performanceMetrics.concurrentUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 text-sm">Data Processed</span>
                  <span className="text-blue-400 font-medium">{resourceData.performanceMetrics.dataProcessed}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}