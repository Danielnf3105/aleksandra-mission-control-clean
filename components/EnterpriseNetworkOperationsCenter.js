import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Wifi, Globe, Server, Shield, AlertTriangle, CheckCircle, Clock, Zap, Activity, Radio, Router, Smartphone } from 'lucide-react';

const EnterpriseNetworkOperationsCenter = () => {
  const [networkHealth, setNetworkHealth] = useState({
    overallStatus: 'operational',
    uptime: 99.97,
    totalDevices: 847,
    activeConnections: 23947,
    bandwidth: 78.4,
    latency: 12.7,
    packetLoss: 0.03
  });

  const [networkInfrastructure, setNetworkInfrastructure] = useState([
    {
      id: 'CORE-001',
      name: 'Core Router NYC',
      type: 'router',
      status: 'operational',
      cpu: 67.2,
      memory: 71.8,
      temperature: 42,
      connections: 8947,
      uptime: 99.99,
      location: 'New York',
      bandwidth: 89.3
    },
    {
      id: 'CORE-002', 
      name: 'Core Switch LAX',
      type: 'switch',
      status: 'operational',
      cpu: 45.8,
      memory: 62.4,
      temperature: 38,
      connections: 6234,
      uptime: 99.95,
      location: 'Los Angeles',
      bandwidth: 72.1
    },
    {
      id: 'FW-001',
      name: 'Firewall London',
      type: 'firewall',
      status: 'warning',
      cpu: 89.1,
      memory: 94.2,
      temperature: 68,
      connections: 12456,
      uptime: 99.8,
      location: 'London',
      bandwidth: 95.7
    },
    {
      id: 'AP-001',
      name: 'WiFi Controller SG',
      type: 'wireless',
      status: 'operational',
      cpu: 34.7,
      memory: 48.2,
      temperature: 35,
      connections: 3847,
      uptime: 99.92,
      location: 'Singapore',
      bandwidth: 56.8
    },
    {
      id: 'LB-001',
      name: 'Load Balancer FR',
      type: 'loadbalancer',
      status: 'operational',
      cpu: 78.3,
      memory: 82.1,
      temperature: 55,
      connections: 15678,
      uptime: 99.97,
      location: 'Frankfurt',
      bandwidth: 84.2
    }
  ]);

  const [networkTraffic, setNetworkTraffic] = useState([
    {
      time: new Date(Date.now() - 600000).toLocaleTimeString(),
      inbound: 12.8,
      outbound: 9.4,
      internal: 15.2,
      latency: 14.2
    },
    {
      time: new Date(Date.now() - 480000).toLocaleTimeString(),
      inbound: 15.1,
      outbound: 11.7,
      internal: 13.8,
      latency: 12.8
    },
    {
      time: new Date(Date.now() - 360000).toLocaleTimeString(),
      inbound: 18.7,
      outbound: 14.2,
      internal: 16.4,
      latency: 15.6
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      inbound: 16.3,
      outbound: 12.9,
      internal: 14.7,
      latency: 13.1
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      inbound: 19.2,
      outbound: 16.1,
      internal: 17.9,
      latency: 11.9
    },
    {
      time: new Date().toLocaleTimeString(),
      inbound: 17.6,
      outbound: 13.8,
      internal: 15.7,
      latency: 12.7
    }
  ]);

  const [securityEvents, setSecurityEvents] = useState([
    {
      id: 'SEC-001',
      severity: 'high',
      type: 'DDoS Attack',
      source: '192.168.1.0/24',
      target: 'Web Server Cluster',
      blocked: true,
      timestamp: new Date(),
      packets: 847362,
      action: 'BLOCKED'
    },
    {
      id: 'SEC-002',
      severity: 'medium',
      type: 'Suspicious Port Scan',
      source: 'External IP Range',
      target: 'Database Servers',
      blocked: true,
      timestamp: new Date(Date.now() - 300000),
      packets: 23451,
      action: 'MONITORED'
    },
    {
      id: 'SEC-003',
      severity: 'low',
      type: 'Failed Authentication',
      source: 'Internal Network',
      target: 'Admin Console',
      blocked: false,
      timestamp: new Date(Date.now() - 600000),
      packets: 156,
      action: 'LOGGED'
    }
  ]);

  const [networkAlerts, setNetworkAlerts] = useState([
    {
      id: 'ALERT-001',
      priority: 'critical',
      device: 'Firewall London',
      type: 'High CPU Usage',
      message: 'CPU utilization reached 89% - Performance degradation possible',
      timestamp: new Date(),
      status: 'active',
      impact: 'performance'
    },
    {
      id: 'ALERT-002',
      priority: 'warning',
      device: 'Core Switch LAX',
      type: 'Interface Down',
      message: 'GigabitEthernet0/3 interface down - Backup route activated',
      timestamp: new Date(Date.now() - 180000),
      status: 'acknowledged',
      impact: 'connectivity'
    },
    {
      id: 'ALERT-003',
      priority: 'info',
      device: 'WiFi Controller SG',
      type: 'New Device Connected',
      message: '47 new wireless devices connected during peak hours',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      impact: 'capacity'
    }
  ]);

  const [callFlowMetrics, setCallFlowMetrics] = useState({
    totalCalls: 12847,
    activeCalls: 234,
    callSuccessRate: 98.7,
    averageCallDuration: 4.3, // minutes
    busyHourTraffic: 89.4,
    voipQuality: 4.2, // MOS score
    jitter: 2.1, // ms
    codecUtilization: 76.8
  });

  const [geographicDistribution, setGeographicDistribution] = useState([
    { region: 'North America', traffic: 34.2, latency: 15.6, devices: 285 },
    { region: 'Europe', traffic: 28.7, latency: 22.1, devices: 247 },
    { region: 'Asia Pacific', traffic: 22.1, latency: 45.8, devices: 198 },
    { region: 'Latin America', traffic: 10.4, latency: 67.3, devices: 89 },
    { region: 'Africa/ME', traffic: 4.6, latency: 89.2, devices: 28 }
  ]);

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update network health metrics
      setNetworkHealth(prev => ({
        ...prev,
        bandwidth: Math.max(50, Math.min(95, prev.bandwidth + (Math.random() - 0.5) * 5)),
        latency: Math.max(5, Math.min(50, prev.latency + (Math.random() - 0.5) * 2)),
        packetLoss: Math.max(0, Math.min(2, prev.packetLoss + (Math.random() - 0.8) * 0.05)),
        activeConnections: Math.max(20000, Math.min(30000, prev.activeConnections + Math.floor((Math.random() - 0.5) * 500)))
      }));

      // Update infrastructure metrics
      setNetworkInfrastructure(prev => prev.map(device => ({
        ...device,
        cpu: Math.max(20, Math.min(95, device.cpu + (Math.random() - 0.5) * 5)),
        memory: Math.max(30, Math.min(98, device.memory + (Math.random() - 0.5) * 3)),
        temperature: Math.max(25, Math.min(75, device.temperature + (Math.random() - 0.5) * 2)),
        connections: Math.max(1000, Math.min(20000, device.connections + Math.floor((Math.random() - 0.5) * 100)))
      })));

      // Update network traffic
      const newTraffic = {
        time: new Date().toLocaleTimeString(),
        inbound: 10 + Math.random() * 15,
        outbound: 8 + Math.random() * 12,
        internal: 12 + Math.random() * 10,
        latency: 8 + Math.random() * 10
      };
      
      setNetworkTraffic(prev => [...prev.slice(1), newTraffic]);

      // Update call flow metrics
      setCallFlowMetrics(prev => ({
        ...prev,
        activeCalls: Math.max(50, Math.min(500, prev.activeCalls + Math.floor((Math.random() - 0.5) * 20))),
        callSuccessRate: Math.max(95, Math.min(100, prev.callSuccessRate + (Math.random() - 0.5) * 0.5)),
        averageCallDuration: Math.max(2, Math.min(8, prev.averageCallDuration + (Math.random() - 0.5) * 0.2)),
        voipQuality: Math.max(3.5, Math.min(5, prev.voipQuality + (Math.random() - 0.5) * 0.1))
      }));

      // Occasionally add new security events
      if (Math.random() > 0.97) {
        const eventTypes = ['Port Scan', 'Brute Force', 'Malware Detection', 'Intrusion Attempt'];
        const severities = ['low', 'medium', 'high'];
        
        const newEvent = {
          id: `SEC-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: eventTypes[Math.floor(Math.random() * eventTypes.length)],
          source: `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.0/24`,
          target: 'Network Infrastructure',
          blocked: Math.random() > 0.3,
          timestamp: new Date(),
          packets: Math.floor(Math.random() * 100000),
          action: ['BLOCKED', 'MONITORED', 'LOGGED'][Math.floor(Math.random() * 3)]
        };
        
        setSecurityEvents(prev => [newEvent, ...prev.slice(0, 9)]);
      }

      // Occasionally add network alerts
      if (Math.random() > 0.95) {
        const alertTypes = ['High CPU Usage', 'Memory Warning', 'Interface Down', 'Temperature Alert'];
        const priorities = ['critical', 'warning', 'info'];
        
        const newAlert = {
          id: `ALERT-${Date.now()}`,
          priority: priorities[Math.floor(Math.random() * priorities.length)],
          device: networkInfrastructure[Math.floor(Math.random() * networkInfrastructure.length)].name,
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time network monitoring alert generated',
          timestamp: new Date(),
          status: 'active',
          impact: ['performance', 'connectivity', 'security'][Math.floor(Math.random() * 3)]
        };
        
        setNetworkAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getDeviceStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'maintenance': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getDeviceIcon = (type) => {
    switch (type) {
      case 'router': return <Router className="w-4 h-4" />;
      case 'switch': return <Zap className="w-4 h-4" />;
      case 'firewall': return <Shield className="w-4 h-4" />;
      case 'wireless': return <Wifi className="w-4 h-4" />;
      case 'loadbalancer': return <Activity className="w-4 h-4" />;
      default: return <Server className="w-4 h-4" />;
    }
  };

  const getAlertPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const trafficDistribution = [
    { name: 'HTTP/HTTPS', value: 45.2, color: '#3B82F6' },
    { name: 'VoIP/SIP', value: 23.1, color: '#10B981' },
    { name: 'Email/SMTP', value: 12.7, color: '#8B5CF6' },
    { name: 'File Transfer', value: 10.4, color: '#F59E0B' },
    { name: 'Database', value: 8.6, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Globe className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">ENTERPRISE NETWORK OPERATIONS CENTER</h1>
            <p className="text-gray-400">24/7 telecommunications infrastructure monitoring, network security, and real-time performance analysis</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{networkHealth.uptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">UPTIME</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{networkHealth.totalDevices}</div>
            <div className="text-xs text-gray-400">DEVICES</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{networkHealth.bandwidth.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">BANDWIDTH</div>
          </div>
        </div>
      </div>

      {/* Network Health KPIs */}
      <div className="grid grid-cols-7 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Globe className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">CONNECTIONS</span>
          </div>
          <div className="text-xl font-bold text-white">{networkHealth.activeConnections.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">LATENCY</span>
          </div>
          <div className="text-xl font-bold text-white">{networkHealth.latency.toFixed(1)}ms</div>
          <div className="text-xs text-gray-400">Average</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">PACKET LOSS</span>
          </div>
          <div className="text-xl font-bold text-white">{networkHealth.packetLoss.toFixed(3)}%</div>
          <div className="text-xs text-gray-400">Current</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Radio className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">CALLS</span>
          </div>
          <div className="text-xl font-bold text-white">{callFlowMetrics.activeCalls}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Smartphone className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">VOIP QUALITY</span>
          </div>
          <div className="text-xl font-bold text-white">{callFlowMetrics.voipQuality.toFixed(1)}</div>
          <div className="text-xs text-gray-400">MOS Score</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">SUCCESS RATE</span>
          </div>
          <div className="text-xl font-bold text-white">{callFlowMetrics.callSuccessRate.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Calls</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">AVG DURATION</span>
          </div>
          <div className="text-xl font-bold text-white">{callFlowMetrics.averageCallDuration.toFixed(1)}m</div>
          <div className="text-xs text-gray-400">Call Length</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Network Infrastructure */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Server className="w-5 h-5 mr-2 text-green-400" />
            NETWORK INFRASTRUCTURE
          </h3>
          <div className="space-y-3">
            {networkInfrastructure.map(device => (
              <div key={device.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getDeviceStatusColor(device.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    {getDeviceIcon(device.type)}
                    <span className="text-white font-medium text-sm">{device.name}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getDeviceStatusColor(device.status)}20`, 
                    color: getDeviceStatusColor(device.status) 
                  }}>
                    {device.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU</span>
                    <span className={device.cpu > 85 ? 'text-red-400' : 'text-green-400'}>{device.cpu.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory</span>
                    <span className={device.memory > 90 ? 'text-red-400' : 'text-blue-400'}>{device.memory.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Temp</span>
                    <span className={device.temperature > 60 ? 'text-red-400' : 'text-white'}>{device.temperature}°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Connections</span>
                    <span className="text-purple-400">{device.connections.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{device.location}</span>
                  <span className="text-green-400">Uptime: {device.uptime.toFixed(2)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Events */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-red-400" />
            SECURITY EVENTS
          </h3>
          <div className="space-y-3">
            {securityEvents.map(event => (
              <div key={event.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getSeverityColor(event.severity) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{event.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getSeverityColor(event.severity)}20`, 
                      color: getSeverityColor(event.severity) 
                    }}>
                      {event.severity.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      event.blocked ? 'bg-red-900 text-red-400' : 'bg-green-900 text-green-400'
                    }`}>
                      {event.action}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  <div>Source: <span className="text-blue-400">{event.source}</span></div>
                  <div>Target: <span className="text-yellow-400">{event.target}</span></div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">{event.packets.toLocaleString()} packets</span>
                  <span className="text-gray-500">{event.timestamp.toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            NETWORK ALERTS
          </h3>
          <div className="space-y-3">
            {networkAlerts.map(alert => (
              <div key={alert.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getAlertPriorityColor(alert.priority) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{alert.type}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getAlertPriorityColor(alert.priority)}20`, 
                      color: getAlertPriorityColor(alert.priority) 
                    }}>
                      {alert.priority.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      alert.status === 'active' ? 'bg-red-900 text-red-400' :
                      alert.status === 'resolved' ? 'bg-green-900 text-green-400' : 'bg-blue-900 text-blue-400'
                    }`}>
                      {alert.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 text-xs mb-2">{alert.message}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-blue-400">{alert.device}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-purple-400">Impact: {alert.impact}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Network Analytics Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Traffic Flow */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME NETWORK TRAFFIC (GBPS)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={networkTraffic}>
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
              <Area 
                type="monotone" 
                dataKey="inbound" 
                stackId="1"
                stroke="#3B82F6" 
                fill="#3B82F6"
                fillOpacity={0.6}
                name="Inbound (Gbps)"
              />
              <Area 
                type="monotone" 
                dataKey="outbound" 
                stackId="1"
                stroke="#10B981" 
                fill="#10B981"
                fillOpacity={0.6}
                name="Outbound (Gbps)"
              />
              <Area 
                type="monotone" 
                dataKey="internal" 
                stackId="1"
                stroke="#8B5CF6" 
                fill="#8B5CF6"
                fillOpacity={0.6}
                name="Internal (Gbps)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Traffic Distribution & Geographic Analysis */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">TRAFFIC DISTRIBUTION & GEOGRAPHIC ANALYSIS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={trafficDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {trafficDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value) => [`${value}%`, 'Traffic']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {trafficDistribution.map((protocol, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: protocol.color }}
                    />
                    <span className="text-gray-400 text-sm">{protocol.name}</span>
                  </div>
                  <span className="text-white font-semibold">{protocol.value}%</span>
                </div>
              ))}
              
              {/* Geographic Distribution */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">Geographic Distribution</div>
                <div className="space-y-1 text-xs">
                  {geographicDistribution.slice(0, 3).map((region, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-gray-400">{region.region}</span>
                      <div className="flex space-x-3">
                        <span className="text-blue-400">{region.traffic.toFixed(1)}%</span>
                        <span className="text-yellow-400">{region.latency.toFixed(0)}ms</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* NOC Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Network Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Activity className="w-3 h-3 inline mr-1" />
                  Traffic Analysis
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Security Scan
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Globe className="w-3 h-3 inline mr-1" />
                  Topology View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseNetworkOperationsCenter;