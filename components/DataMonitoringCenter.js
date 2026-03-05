// DataMonitoringCenter.js - Real-Time Data Monitoring & IoT-Style Sensor Dashboard
import { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DataMonitoringCenter = () => {
  const [sensorData, setSensorData] = useState([
    {
      id: 'sensor_001',
      name: 'System Temperature',
      type: 'TEMPERATURE',
      value: 67.3,
      unit: '°C',
      status: 'NORMAL',
      threshold: { min: 45, max: 75, critical: 85 },
      location: 'CPU Package',
      lastUpdate: Date.now() - 2 * 1000,
      trend: 'STABLE',
      alertEnabled: true,
      calibrated: true
    },
    {
      id: 'sensor_002',
      name: 'Memory Pressure',
      type: 'PRESSURE',
      value: 73.2,
      unit: '%',
      status: 'WARNING',
      threshold: { min: 0, max: 80, critical: 90 },
      location: 'System RAM',
      lastUpdate: Date.now() - 1 * 1000,
      trend: 'INCREASING',
      alertEnabled: true,
      calibrated: true
    },
    {
      id: 'sensor_003',
      name: 'Network Throughput',
      type: 'THROUGHPUT',
      value: 89.7,
      unit: 'Mbps',
      status: 'NORMAL',
      threshold: { min: 10, max: 100, critical: 150 },
      location: 'Primary Interface',
      lastUpdate: Date.now() - 3 * 1000,
      trend: 'FLUCTUATING',
      alertEnabled: true,
      calibrated: true
    },
    {
      id: 'sensor_004',
      name: 'Disk I/O Rate',
      type: 'IO_RATE',
      value: 234.5,
      unit: 'IOPS',
      status: 'NORMAL',
      threshold: { min: 50, max: 500, critical: 800 },
      location: 'Primary SSD',
      lastUpdate: Date.now() - 5 * 1000,
      trend: 'STABLE',
      alertEnabled: true,
      calibrated: true
    },
    {
      id: 'sensor_005',
      name: 'API Response Latency',
      type: 'LATENCY',
      value: 156.7,
      unit: 'ms',
      status: 'NORMAL',
      threshold: { min: 50, max: 200, critical: 500 },
      location: 'Gateway Endpoint',
      lastUpdate: Date.now() - 1 * 1000,
      trend: 'DECREASING',
      alertEnabled: true,
      calibrated: true
    },
    {
      id: 'sensor_006',
      name: 'Database Connections',
      type: 'CONNECTIONS',
      value: 23,
      unit: 'conn',
      status: 'NORMAL',
      threshold: { min: 5, max: 50, critical: 100 },
      location: 'SQLite Instance',
      lastUpdate: Date.now() - 4 * 1000,
      trend: 'STABLE',
      alertEnabled: true,
      calibrated: true
    },
    {
      id: 'sensor_007',
      name: 'Error Rate Sensor',
      type: 'ERROR_RATE',
      value: 1.2,
      unit: '%',
      status: 'CRITICAL',
      threshold: { min: 0, max: 1, critical: 3 },
      location: 'Application Layer',
      lastUpdate: Date.now() - 8 * 1000,
      trend: 'INCREASING',
      alertEnabled: true,
      calibrated: false
    },
    {
      id: 'sensor_008',
      name: 'Token Consumption',
      type: 'CONSUMPTION',
      value: 2847,
      unit: 'tokens/min',
      status: 'NORMAL',
      threshold: { min: 100, max: 5000, critical: 8000 },
      location: 'AI Model Interface',
      lastUpdate: Date.now() - 2 * 1000,
      trend: 'STABLE',
      alertEnabled: true,
      calibrated: true
    }
  ]);

  const [environmentalMetrics, setEnvironmentalMetrics] = useState({
    systemHealth: 87.3,
    overallStatus: 'HEALTHY',
    activeAlerts: 1,
    sensorsOnline: 8,
    sensorsOffline: 0,
    dataPointsToday: 145672,
    averageLatency: 89.4,
    compressionRatio: 67.8,
    storageUsed: 234.7, // MB
    retentionDays: 30,
    lastBackup: Date.now() - 4 * 60 * 60 * 1000,
    syncStatus: 'SYNCED'
  });

  const [deviceRegistry, setDeviceRegistry] = useState([
    {
      id: 'device_001',
      name: 'Mission Control Gateway',
      type: 'GATEWAY',
      status: 'ONLINE',
      ip: '192.168.1.100',
      mac: '00:1B:44:11:3A:B7',
      firmware: 'v2.1.8',
      uptime: 1567.2,
      sensors: ['sensor_001', 'sensor_002', 'sensor_003'],
      location: 'Primary Server',
      lastSeen: Date.now() - 30 * 1000,
      batteryLevel: null,
      signalStrength: -45
    },
    {
      id: 'device_002',
      name: 'Database Monitor',
      type: 'MONITOR',
      status: 'ONLINE',
      ip: '192.168.1.101',
      mac: '00:1B:44:11:3A:B8',
      firmware: 'v1.5.3',
      uptime: 892.4,
      sensors: ['sensor_004', 'sensor_006'],
      location: 'Database Server',
      lastSeen: Date.now() - 45 * 1000,
      batteryLevel: null,
      signalStrength: -38
    },
    {
      id: 'device_003',
      name: 'API Performance Probe',
      type: 'PROBE',
      status: 'ONLINE',
      ip: '192.168.1.102',
      mac: '00:1B:44:11:3A:B9',
      firmware: 'v3.0.1',
      uptime: 456.7,
      sensors: ['sensor_005', 'sensor_007'],
      location: 'API Gateway',
      lastSeen: Date.now() - 15 * 1000,
      batteryLevel: 87,
      signalStrength: -52
    },
    {
      id: 'device_004',
      name: 'Token Usage Meter',
      type: 'METER',
      status: 'DEGRADED',
      ip: '192.168.1.103',
      mac: '00:1B:44:11:3A:BA',
      firmware: 'v2.2.0',
      uptime: 234.1,
      sensors: ['sensor_008'],
      location: 'AI Interface',
      lastSeen: Date.now() - 2 * 60 * 1000,
      batteryLevel: 23,
      signalStrength: -67
    }
  ]);

  const [dataStreams, setDataStreams] = useState([
    {
      id: 'stream_001',
      name: 'System Telemetry',
      protocol: 'MQTT',
      endpoint: 'mqtt://localhost:1883/telemetry',
      status: 'ACTIVE',
      messageRate: 156.7,
      totalMessages: 234567,
      lastMessage: Date.now() - 2 * 1000,
      compression: 'LZ4',
      encryption: 'TLS 1.3',
      qos: 2,
      retainedMessages: 45
    },
    {
      id: 'stream_002',
      name: 'Performance Metrics',
      protocol: 'WebSocket',
      endpoint: 'wss://api.localhost/metrics',
      status: 'ACTIVE',
      messageRate: 89.3,
      totalMessages: 156782,
      lastMessage: Date.now() - 1 * 1000,
      compression: 'GZIP',
      encryption: 'TLS 1.3',
      qos: 1,
      retainedMessages: 12
    },
    {
      id: 'stream_003',
      name: 'Error Events',
      protocol: 'HTTP POST',
      endpoint: 'https://api.localhost/events',
      status: 'INTERMITTENT',
      messageRate: 12.4,
      totalMessages: 8934,
      lastMessage: Date.now() - 45 * 1000,
      compression: 'None',
      encryption: 'TLS 1.2',
      qos: 0,
      retainedMessages: 67
    },
    {
      id: 'stream_004',
      name: 'Agent Communications',
      protocol: 'gRPC',
      endpoint: 'grpc://localhost:50051',
      status: 'ACTIVE',
      messageRate: 67.8,
      totalMessages: 45623,
      lastMessage: Date.now() - 3 * 1000,
      compression: 'GZIP',
      encryption: 'TLS 1.3',
      qos: 2,
      retainedMessages: 23
    }
  ]);

  const [sensorTrends, setSensorTrends] = useState([]);
  const [alertHistory, setAlertHistory] = useState([
    {
      id: 'alert_001',
      timestamp: Date.now() - 15 * 60 * 1000,
      sensor: 'sensor_007',
      severity: 'CRITICAL',
      message: 'Error rate exceeds critical threshold',
      value: 1.2,
      threshold: 3,
      status: 'ACTIVE',
      ackBy: null,
      resolvedBy: null,
      duration: 900 // seconds
    },
    {
      id: 'alert_002',
      timestamp: Date.now() - 2 * 60 * 60 * 1000,
      sensor: 'sensor_002',
      severity: 'WARNING',
      message: 'Memory pressure approaching limit',
      value: 73.2,
      threshold: 80,
      status: 'ACKNOWLEDGED',
      ackBy: 'System Admin',
      resolvedBy: null,
      duration: 1800
    },
    {
      id: 'alert_003',
      timestamp: Date.now() - 6 * 60 * 60 * 1000,
      sensor: 'sensor_001',
      severity: 'WARNING',
      message: 'Temperature spike detected',
      value: 78.5,
      threshold: 75,
      status: 'RESOLVED',
      ackBy: 'Auto System',
      resolvedBy: 'Thermal Control',
      duration: 300
    }
  ]);

  const generateSensorTrends = () => {
    const data = [];
    for (let i = 59; i >= 0; i--) {
      const time = new Date();
      time.setMinutes(time.getMinutes() - i);
      data.push({
        time: time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'}),
        temperature: Math.random() * 15 + 60, // 60-75°C
        memory: Math.random() * 20 + 65, // 65-85%
        network: Math.random() * 40 + 70, // 70-110 Mbps
        latency: Math.random() * 100 + 100, // 100-200ms
        io_rate: Math.random() * 200 + 200, // 200-400 IOPS
        error_rate: Math.random() * 2 + 0.5 // 0.5-2.5%
      });
    }
    return data;
  };

  useEffect(() => {
    setSensorTrends(generateSensorTrends());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update sensor values
      setSensorData(prev => prev.map(sensor => {
        let newValue = sensor.value;
        let newStatus = sensor.status;
        let newTrend = sensor.trend;
        
        // Simulate realistic sensor data changes
        const variance = sensor.value * 0.05; // 5% variance
        const change = (Math.random() - 0.5) * variance;
        newValue = Math.max(0, sensor.value + change);
        
        // Determine status based on thresholds
        if (newValue >= sensor.threshold.critical) {
          newStatus = 'CRITICAL';
        } else if (newValue >= sensor.threshold.max) {
          newStatus = 'WARNING';
        } else {
          newStatus = 'NORMAL';
        }
        
        // Determine trend
        const trendChange = change / sensor.value;
        if (Math.abs(trendChange) < 0.01) {
          newTrend = 'STABLE';
        } else if (trendChange > 0.01) {
          newTrend = 'INCREASING';
        } else {
          newTrend = 'DECREASING';
        }
        
        return {
          ...sensor,
          value: newValue,
          status: newStatus,
          trend: newTrend,
          lastUpdate: Date.now()
        };
      }));

      // Update environmental metrics
      setEnvironmentalMetrics(prev => ({
        ...prev,
        dataPointsToday: prev.dataPointsToday + Math.floor(Math.random() * 10),
        averageLatency: Math.max(50, Math.min(150, prev.averageLatency + (Math.random() - 0.5) * 5)),
        storageUsed: prev.storageUsed + Math.random() * 0.1
      }));

      // Update device registry
      setDeviceRegistry(prev => prev.map(device => {
        let newStatus = device.status;
        let newBatteryLevel = device.batteryLevel;
        
        if (device.batteryLevel !== null) {
          newBatteryLevel = Math.max(0, device.batteryLevel - Math.random() * 0.1);
          if (newBatteryLevel < 20) {
            newStatus = 'DEGRADED';
          }
        }
        
        return {
          ...device,
          status: newStatus,
          batteryLevel: newBatteryLevel,
          lastSeen: Math.random() > 0.8 ? Date.now() : device.lastSeen,
          uptime: device.uptime + 0.017 // Add 1 minute in hours
        };
      }));

      // Update data streams
      setDataStreams(prev => prev.map(stream => ({
        ...stream,
        messageRate: Math.max(5, Math.min(200, stream.messageRate + (Math.random() - 0.5) * 10)),
        totalMessages: stream.totalMessages + Math.floor(Math.random() * 10),
        lastMessage: stream.status === 'ACTIVE' ? Date.now() : stream.lastMessage
      })));

      // Generate new alerts occasionally
      if (Math.random() > 0.98) {
        const severities = ['WARNING', 'CRITICAL'];
        const newAlert = {
          id: `alert_${Date.now()}`,
          timestamp: Date.now(),
          sensor: sensorData[Math.floor(Math.random() * sensorData.length)].id,
          severity: severities[Math.floor(Math.random() * severities.length)],
          message: 'Automated threshold violation detected',
          value: Math.random() * 100,
          threshold: Math.random() * 80 + 10,
          status: 'ACTIVE',
          ackBy: null,
          resolvedBy: null,
          duration: 0
        };
        setAlertHistory(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [sensorData]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'NORMAL':
      case 'ONLINE':
      case 'ACTIVE':
      case 'SYNCED':
      case 'HEALTHY': return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'WARNING':
      case 'DEGRADED':
      case 'ACKNOWLEDGED': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'CRITICAL':
      case 'OFFLINE':
      case 'ERROR': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'INTERMITTENT': return 'text-orange-400 bg-orange-400/20 border-orange-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'INCREASING': return '📈';
      case 'DECREASING': return '📉';
      case 'STABLE': return '➡️';
      case 'FLUCTUATING': return '📊';
      default: return '⚪';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'INFO': return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default: return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const formatTime = (timestamp) => {
    const diff = Date.now() - timestamp;
    if (diff < 60000) return 'now';
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
    return `${Math.floor(diff / 3600000)}h ago`;
  };

  const formatUptime = (hours) => {
    const days = Math.floor(hours / 24);
    const remainingHours = Math.floor(hours % 24);
    return `${days}d ${remainingHours}h`;
  };

  const formatBytes = (mb) => {
    if (mb >= 1000) return `${(mb / 1000).toFixed(1)}GB`;
    return `${mb.toFixed(1)}MB`;
  };

  const getBatteryColor = (level) => {
    if (level === null) return 'text-gray-400';
    if (level > 60) return 'text-green-400';
    if (level > 30) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSignalStrength = (rssi) => {
    if (rssi > -40) return '📶';
    if (rssi > -55) return '📶';
    if (rssi > -70) return '📶';
    return '📶';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white font-mono">
          📡 REAL-TIME DATA MONITORING CENTER
        </h2>
        <div className="flex items-center space-x-4">
          <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-mono border border-green-500/30">
            {environmentalMetrics.sensorsOnline} SENSORS ONLINE
          </div>
          <div className="text-sm text-gray-400 font-mono">
            IoT-style sensor monitoring & telemetry
          </div>
        </div>
      </div>

      {/* Environmental Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-lg p-4 border border-green-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-green-200">SYSTEM HEALTH</div>
              <div className="text-2xl font-bold text-green-100">
                {environmentalMetrics.systemHealth.toFixed(1)}%
              </div>
              <div className="text-xs text-green-300">
                {environmentalMetrics.overallStatus}
              </div>
            </div>
            <div className="text-3xl opacity-60">🏥</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-4 border border-blue-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-blue-200">DATA POINTS TODAY</div>
              <div className="text-2xl font-bold text-blue-100">
                {environmentalMetrics.dataPointsToday.toLocaleString()}
              </div>
              <div className="text-xs text-blue-300">
                {environmentalMetrics.averageLatency.toFixed(1)}ms avg latency
              </div>
            </div>
            <div className="text-3xl opacity-60">📊</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-lg p-4 border border-purple-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-purple-200">ACTIVE ALERTS</div>
              <div className="text-2xl font-bold text-purple-100">
                {environmentalMetrics.activeAlerts}
              </div>
              <div className="text-xs text-purple-300">
                sensor monitoring
              </div>
            </div>
            <div className="text-3xl opacity-60">🚨</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-900 to-orange-800 rounded-lg p-4 border border-orange-500/30">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-orange-200">STORAGE USED</div>
              <div className="text-2xl font-bold text-orange-100">
                {formatBytes(environmentalMetrics.storageUsed)}
              </div>
              <div className="text-xs text-orange-300">
                {environmentalMetrics.retentionDays}d retention
              </div>
            </div>
            <div className="text-3xl opacity-60">💾</div>
          </div>
        </div>
      </div>

      {/* Sensor Status and Real-time Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sensor Status Grid */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🎛️ SENSOR STATUS GRID
          </h3>
          <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
            {sensorData.map((sensor) => (
              <div key={sensor.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{sensor.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(sensor.status)}`}>
                      {sensor.status}
                    </span>
                    <span className="text-lg">{getTrendIcon(sensor.trend)}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-400">
                      {sensor.value.toFixed(1)} {sensor.unit}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Type: </span>
                    <span className="text-purple-400">{sensor.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Location: </span>
                    <span className="text-green-400">{sensor.location}</span>
                  </div>
                </div>

                <div className="flex justify-between text-xs mb-2">
                  <span className="text-gray-400">
                    Threshold: {sensor.threshold.max}{sensor.unit} 
                    / Critical: {sensor.threshold.critical}{sensor.unit}
                  </span>
                  <span className="text-gray-400">
                    Last: {formatTime(sensor.lastUpdate)}
                  </span>
                </div>

                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      sensor.status === 'CRITICAL' ? 'bg-red-400' :
                      sensor.status === 'WARNING' ? 'bg-yellow-400' :
                      'bg-green-400'
                    }`}
                    style={{ 
                      width: `${Math.min(100, (sensor.value / sensor.threshold.critical) * 100)}%` 
                    }}
                  ></div>
                </div>

                <div className="flex justify-between text-xs mt-2">
                  <span className={`${sensor.calibrated ? 'text-green-400' : 'text-red-400'}`}>
                    {sensor.calibrated ? '✓ Calibrated' : '⚠ Needs Calibration'}
                  </span>
                  <span className={`${sensor.alertEnabled ? 'text-blue-400' : 'text-gray-400'}`}>
                    {sensor.alertEnabled ? '🔔 Alerts On' : '🔕 Alerts Off'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Sensor Trends */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            📈 REAL-TIME SENSOR TRENDS
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={sensorTrends}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151"/>
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12}/>
              <YAxis stroke="#9CA3AF" fontSize={12}/>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="temperature" 
                stroke="#EF4444" 
                strokeWidth={2}
                name="Temperature (°C)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="memory" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Memory (%)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="latency" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Latency (ms)"
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="error_rate" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Error Rate (%)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Device Registry and Data Streams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Device Registry */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🔌 DEVICE REGISTRY
          </h3>
          <div className="space-y-3">
            {deviceRegistry.map((device) => (
              <div key={device.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{device.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(device.status)}`}>
                      {device.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {device.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{getSignalStrength(device.signalStrength)}</span>
                    {device.batteryLevel !== null && (
                      <span className={`text-sm ${getBatteryColor(device.batteryLevel)}`}>
                        🔋 {device.batteryLevel.toFixed(0)}%
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <span className="text-gray-400">IP: </span>
                    <span className="text-cyan-400">{device.ip}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">MAC: </span>
                    <span className="text-purple-400">{device.mac}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Firmware: </span>
                    <span className="text-green-400">{device.firmware}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Uptime: </span>
                    <span className="text-blue-400">{formatUptime(device.uptime)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400">Location: </span>
                    <span className="text-yellow-400">{device.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Sensors: </span>
                    <span className="text-orange-400">{device.sensors.length}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Last Seen: </span>
                    <span className="text-pink-400">{formatTime(device.lastSeen)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Signal: </span>
                    <span className="text-emerald-400">{device.signalStrength} dBm</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Streams */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-lg font-bold text-white mb-4 font-mono">
            🌊 DATA STREAMS
          </h3>
          <div className="space-y-3">
            {dataStreams.map((stream) => (
              <div key={stream.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-bold text-white text-sm">{stream.name}</h4>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(stream.status)}`}>
                      {stream.status}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-gray-600 text-gray-300">
                      {stream.protocol}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2 font-mono">
                  {stream.endpoint}
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                  <div>
                    <span className="text-gray-400">Rate: </span>
                    <span className="text-cyan-400">{stream.messageRate.toFixed(1)} msg/s</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Total: </span>
                    <span className="text-green-400">{stream.totalMessages.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">QoS: </span>
                    <span className="text-purple-400">{stream.qos}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Retained: </span>
                    <span className="text-yellow-400">{stream.retainedMessages}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400">Compression: </span>
                    <span className="text-blue-400">{stream.compression}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Encryption: </span>
                    <span className="text-green-400">{stream.encryption}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-400">Last Message: </span>
                    <span className="text-pink-400">{formatTime(stream.lastMessage)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Alert Management */}
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4 font-mono">
          🚨 SENSOR ALERT MANAGEMENT
        </h3>
        
        {alertHistory.length === 0 ? (
          <div className="text-green-400 text-center py-8">
            No sensor alerts ✅
          </div>
        ) : (
          <div className="space-y-3">
            {alertHistory.map((alert) => (
              <div key={alert.id} className="bg-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getSeverityColor(alert.severity)}`}>
                      {alert.severity}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-mono border ${getStatusColor(alert.status)}`}>
                      {alert.status}
                    </span>
                    <span className="text-sm text-white font-medium">{alert.message}</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {formatTime(alert.timestamp)}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-xs mb-3">
                  <div>
                    <span className="text-gray-400">Sensor: </span>
                    <span className="text-cyan-400">{alert.sensor}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Value: </span>
                    <span className={`${alert.severity === 'CRITICAL' ? 'text-red-400' : 'text-yellow-400'}`}>
                      {alert.value.toFixed(2)} / {alert.threshold.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-400">Duration: </span>
                    <span className="text-purple-400">{Math.floor(alert.duration / 60)}m {alert.duration % 60}s</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Acknowledged: </span>
                    <span className="text-green-400">{alert.ackBy || 'No'}</span>
                  </div>
                </div>

                {alert.resolvedBy && (
                  <div className="text-xs">
                    <span className="text-gray-400">Resolved by: </span>
                    <span className="text-green-400">{alert.resolvedBy}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DataMonitoringCenter;