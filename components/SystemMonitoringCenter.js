import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Activity, Cpu, HardDrive, Wifi, Server, AlertTriangle, CheckCircle, Clock, TrendingUp } from 'lucide-react';

const SystemMonitoringCenter = () => {
  const [systemData, setSystemData] = useState({
    cpu: { usage: 45, temperature: 62, cores: 8 },
    memory: { used: 12.4, total: 16, usage: 77.5 },
    disk: { used: 245, total: 500, usage: 49 },
    network: { in: 125.6, out: 89.3, total: 214.9 }
  });

  const [historicalData, setHistoricalData] = useState([]);
  const [processData, setProcessData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      const timestamp = new Date().toLocaleTimeString();
      
      // Update current system metrics with realistic fluctuation
      setSystemData(prev => ({
        cpu: { 
          ...prev.cpu, 
          usage: Math.max(15, Math.min(95, prev.cpu.usage + (Math.random() - 0.5) * 10)),
          temperature: Math.max(45, Math.min(85, prev.cpu.temperature + (Math.random() - 0.5) * 4))
        },
        memory: { 
          ...prev.memory, 
          usage: Math.max(20, Math.min(95, prev.memory.usage + (Math.random() - 0.5) * 5)),
          used: Math.max(3, Math.min(15, prev.memory.used + (Math.random() - 0.5) * 0.5))
        },
        disk: { 
          ...prev.disk, 
          usage: Math.max(30, Math.min(90, prev.disk.usage + (Math.random() - 0.5) * 2))
        },
        network: {
          in: Math.max(50, Math.min(500, prev.network.in + (Math.random() - 0.5) * 50)),
          out: Math.max(30, Math.min(300, prev.network.out + (Math.random() - 0.5) * 30)),
          total: 0
        }
      }));

      // Add to historical data
      setHistoricalData(prev => {
        const newData = [...prev, {
          time: timestamp,
          cpu: systemData.cpu.usage,
          memory: systemData.memory.usage,
          network: systemData.network.in + systemData.network.out,
          timestamp: Date.now()
        }].slice(-20); // Keep last 20 data points
        return newData;
      });

      // Update process data
      setProcessData([
        { name: 'Mission Control', cpu: 15.2, memory: 89.4, status: 'running' },
        { name: 'OpenClaw Gateway', cpu: 8.7, memory: 156.7, status: 'running' },
        { name: 'Aleksandra Agent', cpu: 12.4, memory: 234.1, status: 'running' },
        { name: 'Content Processor', cpu: 22.1, memory: 187.3, status: 'running' },
        { name: 'Analytics Engine', cpu: 6.8, memory: 98.2, status: 'running' }
      ]);

      // Generate alerts based on thresholds
      const newAlerts = [];
      if (systemData.cpu.usage > 80) newAlerts.push({ type: 'warning', message: 'High CPU usage detected', timestamp });
      if (systemData.memory.usage > 85) newAlerts.push({ type: 'critical', message: 'Memory usage critical', timestamp });
      if (systemData.cpu.temperature > 75) newAlerts.push({ type: 'warning', message: 'CPU temperature elevated', timestamp });
      
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 10)); // Keep last 10 alerts
    }, 2000);

    return () => clearInterval(interval);
  }, [systemData]);

  const getStatusColor = (usage) => {
    if (usage < 50) return '#10B981'; // Green
    if (usage < 80) return '#F59E0B'; // Yellow  
    return '#EF4444'; // Red
  };

  const formatBytes = (bytes) => {
    return `${bytes.toFixed(1)} GB`;
  };

  const formatNetworkSpeed = (speed) => {
    return `${speed.toFixed(1)} MB/s`;
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Server className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">SYSTEM MONITORING CENTER</h1>
            <p className="text-gray-400">Real-time system performance and health monitoring</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-green-400">OPERATIONAL</span>
          </div>
          <div className="text-gray-400">
            {new Date().toLocaleString()}
          </div>
        </div>
      </div>

      {/* System Overview Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* CPU Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-gray-400">CPU</span>
            </div>
            <span className="text-2xl font-bold" style={{color: getStatusColor(systemData.cpu.usage)}}>
              {systemData.cpu.usage.toFixed(1)}%
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Temperature</span>
              <span className="text-white">{systemData.cpu.temperature}°C</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Cores</span>
              <span className="text-white">{systemData.cpu.cores}</span>
            </div>
          </div>
          <div className="mt-3 bg-gray-800 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500" 
              style={{
                width: `${systemData.cpu.usage}%`,
                backgroundColor: getStatusColor(systemData.cpu.usage)
              }}
            />
          </div>
        </div>

        {/* Memory Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-green-400" />
              <span className="text-gray-400">MEMORY</span>
            </div>
            <span className="text-2xl font-bold" style={{color: getStatusColor(systemData.memory.usage)}}>
              {systemData.memory.usage.toFixed(1)}%
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Used</span>
              <span className="text-white">{formatBytes(systemData.memory.used)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Total</span>
              <span className="text-white">{formatBytes(systemData.memory.total)}</span>
            </div>
          </div>
          <div className="mt-3 bg-gray-800 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500" 
              style={{
                width: `${systemData.memory.usage}%`,
                backgroundColor: getStatusColor(systemData.memory.usage)
              }}
            />
          </div>
        </div>

        {/* Disk Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <HardDrive className="w-5 h-5 text-purple-400" />
              <span className="text-gray-400">DISK</span>
            </div>
            <span className="text-2xl font-bold" style={{color: getStatusColor(systemData.disk.usage)}}>
              {systemData.disk.usage.toFixed(1)}%
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Used</span>
              <span className="text-white">{formatBytes(systemData.disk.used)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Total</span>
              <span className="text-white">{formatBytes(systemData.disk.total)}</span>
            </div>
          </div>
          <div className="mt-3 bg-gray-800 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-500" 
              style={{
                width: `${systemData.disk.usage}%`,
                backgroundColor: getStatusColor(systemData.disk.usage)
              }}
            />
          </div>
        </div>

        {/* Network Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400">NETWORK</span>
            </div>
            <span className="text-2xl font-bold text-cyan-400">
              {formatNetworkSpeed(systemData.network.in + systemData.network.out)}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">↓ In</span>
              <span className="text-white">{formatNetworkSpeed(systemData.network.in)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">↑ Out</span>
              <span className="text-white">{formatNetworkSpeed(systemData.network.out)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* System Performance Chart */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
            SYSTEM PERFORMANCE TRENDS
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cpu" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="CPU %"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="memory" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Memory %"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Process Monitor */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-green-400" />
            PROCESS MONITOR
          </h3>
          <div className="space-y-3">
            {processData.map((process, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    process.status === 'running' ? 'bg-green-400' : 'bg-red-400'
                  }`} />
                  <span className="text-white font-medium">{process.name}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-blue-400">{process.cpu.toFixed(1)}% CPU</span>
                  <span className="text-green-400">{process.memory.toFixed(1)}MB</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alerts Section */}
      {alerts.length > 0 && (
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            SYSTEM ALERTS
          </h3>
          <div className="space-y-2">
            {alerts.map((alert, index) => (
              <div key={index} className={`p-3 rounded-lg border-l-4 ${
                alert.type === 'critical' 
                  ? 'bg-red-900/20 border-red-400' 
                  : 'bg-yellow-900/20 border-yellow-400'
              }`}>
                <div className="flex items-center justify-between">
                  <span className="text-white">{alert.message}</span>
                  <span className="text-gray-400 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {alert.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SystemMonitoringCenter;