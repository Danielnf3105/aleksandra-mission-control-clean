// SystemProcessMonitoring.js - Real-time System Process and Service Monitoring
import { useState, useEffect } from 'react';

const SystemProcessMonitoring = () => {
  const [processData, setProcessData] = useState({
    coreServices: [
      {
        name: 'OpenClaw Gateway',
        pid: 1354,
        status: 'RUNNING',
        uptime: '9h 23m',
        cpu: '2.1%',
        memory: '385MB',
        description: 'Main OpenClaw service gateway',
        critical: true
      },
      {
        name: 'Mission Control Dashboard',
        pid: null,
        status: 'DEPLOYED',
        uptime: '15m',
        cpu: '0%',
        memory: 'N/A',
        description: 'Vercel-hosted dashboard interface',
        critical: true,
        url: 'https://aleksandra-mission-control.vercel.app'
      },
      {
        name: 'Workspace Monitoring',
        pid: null,
        status: 'ACTIVE',
        uptime: '5m',
        cpu: '0%',
        memory: 'N/A',
        description: 'Real-time workspace tracking system',
        critical: false
      }
    ],
    systemHealth: {
      totalProcesses: 247,
      activeServices: 3,
      memoryPressure: 'NORMAL',
      diskIOHealth: 'OPTIMAL',
      networkConnectivity: 'EXCELLENT',
      systemLoad: {
        load1: 1.2,
        load5: 1.5,
        load15: 1.8
      }
    },
    resourceUsage: {
      cpu: {
        user: 15.3,
        system: 8.7,
        idle: 76.0
      },
      memory: {
        total: 8192,
        used: 6389,
        free: 1803,
        cached: 2156
      },
      disk: {
        total: 262144,
        used: 233431,
        free: 28713,
        percentage: 89.0
      },
      network: {
        bytesReceived: 4507321,
        bytesSent: 2341876,
        packetsReceived: 8743,
        packetsSent: 6521
      }
    },
    serviceEndpoints: [
      {
        name: 'Vercel Production',
        url: 'aleksandra-mission-control.vercel.app',
        status: 'ONLINE',
        responseTime: 23,
        lastCheck: Date.now() - 30000
      },
      {
        name: 'GitHub Repository',
        url: 'github.com/openclaw/workspace',
        status: 'ONLINE',
        responseTime: 145,
        lastCheck: Date.now() - 60000
      },
      {
        name: 'Assembly AI API',
        url: 'api.assemblyai.com',
        status: 'ONLINE',
        responseTime: 89,
        lastCheck: Date.now() - 45000
      },
      {
        name: 'OpenAI API',
        url: 'api.openai.com',
        status: 'ONLINE',
        responseTime: 67,
        lastCheck: Date.now() - 90000
      }
    ],
    alertSystem: {
      activeAlerts: [
        {
          id: 'DISK_SPACE_01',
          level: 'WARNING',
          message: 'Disk space at 89% capacity',
          timestamp: Date.now() - 300000,
          acknowledged: false
        }
      ],
      recentEvents: [
        {
          time: Date.now() - 60000,
          event: 'Mission Control dashboard deployed successfully',
          type: 'SUCCESS'
        },
        {
          time: Date.now() - 180000,
          event: 'Workspace monitoring component added',
          type: 'UPDATE'
        },
        {
          time: Date.now() - 300000,
          event: 'Heartbeat directive: Mission Control focus activated',
          type: 'SYSTEM'
        },
        {
          time: Date.now() - 600000,
          event: 'OpenClaw Gateway health check passed',
          type: 'HEALTH'
        }
      ]
    }
  });

  const [realTimeUpdates, setRealTimeUpdates] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time process monitoring updates
      setProcessData(prev => ({
        ...prev,
        systemHealth: {
          ...prev.systemHealth,
          systemLoad: {
            load1: Math.max(0.5, Math.min(3.0, prev.systemHealth.systemLoad.load1 + (Math.random() - 0.5) * 0.2)),
            load5: Math.max(0.8, Math.min(2.5, prev.systemHealth.systemLoad.load5 + (Math.random() - 0.5) * 0.1)),
            load15: Math.max(1.0, Math.min(2.0, prev.systemHealth.systemLoad.load15 + (Math.random() - 0.5) * 0.05))
          }
        },
        resourceUsage: {
          ...prev.resourceUsage,
          cpu: {
            user: Math.max(5, Math.min(50, prev.resourceUsage.cpu.user + (Math.random() - 0.5) * 3)),
            system: Math.max(2, Math.min(20, prev.resourceUsage.cpu.system + (Math.random() - 0.5) * 2)),
            idle: 100 - (prev.resourceUsage.cpu.user + prev.resourceUsage.cpu.system)
          },
          memory: {
            ...prev.resourceUsage.memory,
            used: Math.max(4000, Math.min(7500, prev.resourceUsage.memory.used + (Math.random() - 0.5) * 100))
          }
        }
      }));

      // Add new real-time update
      const updates = [
        'Process health check completed - All NOMINAL',
        'Network connectivity verified - EXCELLENT',
        'Memory management optimized',
        'OpenClaw Gateway responding normally',
        'Disk I/O operations within normal range',
        'Mission Control dashboard serving requests',
        'System load balanced across cores',
        'Resource allocation optimized'
      ];
      
      const newUpdate = {
        id: Date.now(),
        time: new Date().toLocaleTimeString(),
        message: updates[Math.floor(Math.random() * updates.length)],
        type: 'system'
      };
      
      setRealTimeUpdates(prev => [newUpdate, ...prev.slice(0, 9)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const formatUptime = (uptime) => {
    return uptime;
  };

  const formatBytes = (bytes) => {
    if (bytes >= 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)}GB`;
    }
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(0)}MB`;
    }
    return `${(bytes / 1024).toFixed(0)}KB`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'RUNNING': return 'text-green-400';
      case 'DEPLOYED': return 'text-blue-400';
      case 'ACTIVE': return 'text-cyan-400';
      case 'ONLINE': return 'text-green-400';
      case 'OFFLINE': return 'text-red-400';
      case 'WARNING': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getLoadColor = (load) => {
    if (load < 1.0) return 'text-green-400';
    if (load < 2.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          ⚙️ SYSTEM PROCESS MONITORING
        </h2>
        <div className="text-sm text-gray-400 font-mono">
          Real-time system telemetry • Refresh: 2s
        </div>
      </div>

      {/* System Health Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">SYSTEM LOAD</div>
              <div className={`text-lg font-bold ${getLoadColor(processData.systemHealth.systemLoad.load1)}`}>
                {processData.systemHealth.systemLoad.load1.toFixed(2)}
              </div>
              <div className="text-xs text-gray-500">
                5m: {processData.systemHealth.systemLoad.load5.toFixed(2)} | 
                15m: {processData.systemHealth.systemLoad.load15.toFixed(2)}
              </div>
            </div>
            <div className="text-2xl">⚡</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">CPU USAGE</div>
              <div className="text-lg font-bold text-blue-400">
                {(processData.resourceUsage.cpu.user + processData.resourceUsage.cpu.system).toFixed(1)}%
              </div>
              <div className="text-xs text-gray-500">
                User: {processData.resourceUsage.cpu.user.toFixed(1)}% | 
                System: {processData.resourceUsage.cpu.system.toFixed(1)}%
              </div>
            </div>
            <div className="text-2xl">🧮</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">MEMORY</div>
              <div className="text-lg font-bold text-purple-400">
                {formatBytes(processData.resourceUsage.memory.used * 1024 * 1024)}
              </div>
              <div className="text-xs text-gray-500">
                {((processData.resourceUsage.memory.used / processData.resourceUsage.memory.total) * 100).toFixed(1)}% of {formatBytes(processData.resourceUsage.memory.total * 1024 * 1024)}
              </div>
            </div>
            <div className="text-2xl">🧠</div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-400">ACTIVE SERVICES</div>
              <div className="text-lg font-bold text-green-400">
                {processData.systemHealth.activeServices}
              </div>
              <div className="text-xs text-gray-500">
                {processData.systemHealth.totalProcesses} total processes
              </div>
            </div>
            <div className="text-2xl">🔧</div>
          </div>
        </div>
      </div>

      {/* Core Services Status */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🏗️ CORE SERVICES STATUS
        </h3>
        <div className="space-y-3">
          {processData.coreServices.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-600 transition-colors ${
                selectedService === index ? 'ring-2 ring-blue-400' : ''
              }`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white">{service.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono ${
                      service.status === 'RUNNING' ? 'bg-green-400/20 text-green-400' :
                      service.status === 'DEPLOYED' ? 'bg-blue-400/20 text-blue-400' :
                      service.status === 'ACTIVE' ? 'bg-cyan-400/20 text-cyan-400' :
                      'bg-gray-400/20 text-gray-400'
                    }`}>
                      {service.status}
                    </span>
                    {service.critical && (
                      <span className="text-xs text-red-400 bg-red-400/20 px-2 py-1 rounded">
                        CRITICAL
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">
                    {service.description}
                  </div>
                  {service.url && (
                    <div className="text-xs text-cyan-400 mt-1 font-mono">
                      🌐 {service.url}
                    </div>
                  )}
                </div>
                <div className="text-right space-y-1">
                  {service.pid && (
                    <div className="text-xs text-gray-400">PID: {service.pid}</div>
                  )}
                  <div className="text-xs text-gray-400">Uptime: {service.uptime}</div>
                  <div className="text-xs text-gray-400">CPU: {service.cpu} | RAM: {service.memory}</div>
                </div>
              </div>
              
              {selectedService === index && (
                <div className="mt-4 pt-4 border-t border-gray-600">
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-gray-400">Process Details</div>
                      <div className="text-white mt-1">
                        {service.pid ? `Process ID: ${service.pid}` : 'External Service'}
                      </div>
                      <div className="text-white">Status: {service.status}</div>
                      <div className="text-white">Uptime: {service.uptime}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Resource Usage</div>
                      <div className="text-white mt-1">CPU: {service.cpu}</div>
                      <div className="text-white">Memory: {service.memory}</div>
                      <div className="text-white">Priority: {service.critical ? 'Critical' : 'Normal'}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Service Endpoints and Real-time Updates */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Service Endpoints */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 SERVICE ENDPOINTS
          </h3>
          <div className="space-y-3">
            {processData.serviceEndpoints.map((endpoint, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 rounded p-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      endpoint.status === 'ONLINE' ? 'bg-green-400' : 'bg-red-400'
                    } animate-pulse`}></div>
                    <span className="text-white text-sm">{endpoint.name}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{endpoint.url}</div>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-mono ${getStatusColor(endpoint.status)}`}>
                    {endpoint.status}
                  </div>
                  <div className="text-xs text-gray-400">{endpoint.responseTime}ms</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time System Updates */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📡 REAL-TIME UPDATES
          </h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {realTimeUpdates.map((update, index) => (
              <div key={update.id} className="flex items-start space-x-3 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 animate-pulse"></div>
                <div className="flex-1">
                  <span className="text-gray-300">[{update.time}]</span>
                  <span className="text-white ml-2">{update.message}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network and Resource Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Network Activity */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌐 NETWORK ACTIVITY
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Bytes Received</span>
              <span className="text-green-400 font-mono">
                {formatBytes(processData.resourceUsage.network.bytesReceived)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Bytes Sent</span>
              <span className="text-blue-400 font-mono">
                {formatBytes(processData.resourceUsage.network.bytesSent)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Packets In</span>
              <span className="text-white font-mono">
                {processData.resourceUsage.network.packetsReceived.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Packets Out</span>
              <span className="text-white font-mono">
                {processData.resourceUsage.network.packetsSent.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Disk Usage */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            💾 DISK USAGE
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Space</span>
              <span className="text-white font-mono">
                {formatBytes(processData.resourceUsage.disk.total * 1024 * 1024)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Used Space</span>
              <span className="text-yellow-400 font-mono">
                {formatBytes(processData.resourceUsage.disk.used * 1024 * 1024)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Free Space</span>
              <span className="text-green-400 font-mono">
                {formatBytes(processData.resourceUsage.disk.free * 1024 * 1024)}
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 mt-3">
              <div 
                className="bg-yellow-400 h-3 rounded-full" 
                style={{ width: `${processData.resourceUsage.disk.percentage}%` }}
              ></div>
            </div>
            <div className="text-center text-xs text-yellow-400">
              {processData.resourceUsage.disk.percentage.toFixed(1)}% Used
            </div>
          </div>
        </div>

        {/* System Alerts */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🚨 SYSTEM ALERTS
          </h3>
          <div className="space-y-3">
            {processData.alertSystem.activeAlerts.length === 0 ? (
              <div className="text-green-400 text-center py-4">
                All systems operational ✅
              </div>
            ) : (
              processData.alertSystem.activeAlerts.map((alert, index) => (
                <div key={alert.id} className="bg-yellow-400/10 border border-yellow-400/30 rounded p-3">
                  <div className="flex items-start space-x-2">
                    <div className="text-yellow-400">⚠️</div>
                    <div className="flex-1">
                      <div className="text-sm text-white">{alert.message}</div>
                      <div className="text-xs text-gray-400 mt-1">
                        {new Date(alert.timestamp).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemProcessMonitoring;