import React, { useState, useEffect } from 'react';
import { AlertTriangle, Activity, Cpu, Database, Network, Server, Users, Zap, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const SystemOrchestration = () => {
  const [timestamp, setTimestamp] = useState(Date.now());
  const [systemHealth, setSystemHealth] = useState({
    overall: 98.7,
    cpu: 23.4,
    memory: 67.2,
    storage: 45.8,
    network: 125.3,
    agents: 8,
    activeProcesses: 47,
    uptime: 72.4
  });

  const [alerts, setAlerts] = useState([
    { id: 1, level: 'info', message: 'Agent spawn completed successfully', timestamp: Date.now() - 1000 },
    { id: 2, level: 'warning', message: 'High memory usage detected on Node-2', timestamp: Date.now() - 45000 },
    { id: 3, level: 'success', message: 'Database backup completed', timestamp: Date.now() - 120000 }
  ]);

  const [missions, setMissions] = useState([
    { id: 'MC-001', name: 'Content Intelligence', status: 'active', progress: 87, eta: '2h 15m' },
    { id: 'MC-002', name: 'LinkedIn Outreach', status: 'standby', progress: 45, eta: '4h 30m' },
    { id: 'MC-003', name: 'Data Processing', status: 'active', progress: 92, eta: '45m' },
    { id: 'MC-004', name: 'System Monitoring', status: 'active', progress: 100, eta: 'Complete' }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(Date.now());
      
      // Simulate real-time data updates
      setSystemHealth(prev => ({
        ...prev,
        cpu: Math.max(15, Math.min(95, prev.cpu + (Math.random() - 0.5) * 8)),
        memory: Math.max(20, Math.min(90, prev.memory + (Math.random() - 0.5) * 5)),
        network: Math.max(50, Math.min(200, prev.network + (Math.random() - 0.5) * 20)),
        overall: Math.random() > 0.95 ? Math.random() * 5 + 95 : prev.overall
      }));

      // Update mission progress
      setMissions(prev => prev.map(mission => 
        mission.status === 'active' && mission.progress < 100 
          ? { ...mission, progress: Math.min(100, mission.progress + Math.random() * 2) }
          : mission
      ));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'standby': return 'text-yellow-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getAlertIcon = (level) => {
    switch (level) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'error': return <XCircle className="w-4 h-4 text-red-400" />;
      default: return <AlertCircle className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="bg-black text-white p-6 font-mono">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-blue-400">SYSTEM ORCHESTRATION CENTER</h1>
          <div className="text-sm text-gray-400">
            MET: {new Date(timestamp).toISOString().split('T')[1].split('.')[0]} UTC
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="flex items-center mb-2">
              <Activity className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-bold">SYSTEM HEALTH</span>
            </div>
            <div className="text-2xl font-bold">{systemHealth.overall.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Nominal</div>
          </div>

          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="flex items-center mb-2">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-bold">AGENTS ACTIVE</span>
            </div>
            <div className="text-2xl font-bold">{systemHealth.agents}</div>
            <div className="text-xs text-gray-400">Multi-threaded</div>
          </div>

          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="flex items-center mb-2">
              <Server className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-400 font-bold">PROCESSES</span>
            </div>
            <div className="text-2xl font-bold">{systemHealth.activeProcesses}</div>
            <div className="text-xs text-gray-400">Running</div>
          </div>

          <div className="bg-gray-900 p-4 rounded border border-gray-700">
            <div className="flex items-center mb-2">
              <Clock className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-bold">UPTIME</span>
            </div>
            <div className="text-2xl font-bold">{systemHealth.uptime.toFixed(1)}h</div>
            <div className="text-xs text-gray-400">Stable</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {/* Resource Monitoring */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Cpu className="w-5 h-5 mr-2 text-blue-400" />
                RESOURCE TELEMETRY
              </h3>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>CPU Load</span>
                  <span>{systemHealth.cpu.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${systemHealth.cpu}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Memory Usage</span>
                  <span>{systemHealth.memory.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${systemHealth.memory}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Storage I/O</span>
                  <span>{systemHealth.storage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${systemHealth.storage}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Network Throughput</span>
                  <span>{systemHealth.network.toFixed(1)} MB/s</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-yellow-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, systemHealth.network / 2)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Status */}
          <div className="bg-gray-900 rounded border border-gray-700">
            <div className="p-4 border-b border-gray-700">
              <h3 className="font-bold text-white flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                MISSION OPERATIONS
              </h3>
            </div>
            <div className="p-4 space-y-3">
              {missions.map(mission => (
                <div key={mission.id} className="bg-gray-800 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-2 ${
                        mission.status === 'active' ? 'bg-green-400' : 
                        mission.status === 'standby' ? 'bg-yellow-400' : 'bg-red-400'
                      }`}></span>
                      <span className="text-sm font-semibold">{mission.id}</span>
                    </div>
                    <span className={`text-xs uppercase ${getStatusColor(mission.status)}`}>
                      {mission.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-300 mb-2">{mission.name}</div>
                  <div className="flex justify-between items-center">
                    <div className="w-24 bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-400 to-green-400 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${mission.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">{mission.progress.toFixed(0)}% • ETA {mission.eta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alert System */}
        <div className="bg-gray-900 rounded border border-gray-700">
          <div className="p-4 border-b border-gray-700">
            <h3 className="font-bold text-white flex items-center">
              <AlertTriangle className="w-5 h-5 mr-2 text-red-400" />
              SYSTEM ALERTS & NOTIFICATIONS
            </h3>
          </div>
          <div className="p-4 space-y-2 max-h-32 overflow-y-auto">
            {alerts.map(alert => (
              <div key={alert.id} className="flex items-center text-sm">
                {getAlertIcon(alert.level)}
                <span className="ml-2 flex-1">{alert.message}</span>
                <span className="text-xs text-gray-400">
                  {Math.round((Date.now() - alert.timestamp) / 1000)}s ago
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemOrchestration;