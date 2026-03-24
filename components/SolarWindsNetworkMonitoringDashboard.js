// SolarWinds Network Monitoring Dashboard - March 2026
// Comprehensive SolarWinds NPM-inspired network monitoring dashboard for network performance and infrastructure management
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar } from 'recharts';

export default function SolarWindsNetworkMonitoringDashboard() {
  const [networkMetrics, setNetworkMetrics] = useState({
    totalNodes: 1847,
    upNodes: 1789,
    downNodes: 23,
    warningNodes: 35,
    totalInterfaces: 8934,
    interfacesUp: 8756,
    interfacesDown: 178,
    avgCpuUtilization: 34.7,
    avgMemoryUtilization: 67.8,
    networkUtilization: 45.3,
    totalAlerts: 156,
    criticalAlerts: 12,
    warningAlerts: 89
  });

  const [networkDevices, setNetworkDevices] = useState([
    {
      deviceName: 'aleksandra-core-switch-01',
      ipAddress: '192.168.1.10',
      deviceType: 'Layer 3 Switch',
      status: 'up',
      cpuUtilization: 23.4,
      memoryUtilization: 45.7,
      uptime: '247 days',
      location: 'Data Center - Core',
      vendor: 'Cisco',
      model: 'Catalyst 9500',
      lastSeen: '20:19:30',
      responseTime: 1.2
    },
    {
      deviceName: 'aleksandra-firewall-dmz',
      ipAddress: '192.168.100.1',
      deviceType: 'Firewall',
      status: 'warning',
      cpuUtilization: 89.3,
      memoryUtilization: 91.2,
      uptime: '156 days',
      location: 'DMZ',
      vendor: 'Fortinet',
      model: 'FortiGate 500E',
      lastSeen: '20:19:25',
      responseTime: 3.8
    },
    {
      deviceName: 'aleksandra-wan-router-01',
      ipAddress: '203.0.113.1',
      deviceType: 'WAN Router',
      status: 'up',
      cpuUtilization: 45.6,
      memoryUtilization: 67.9,
      uptime: '89 days',
      location: 'Network Edge',
      vendor: 'Cisco',
      model: 'ISR 4331',
      lastSeen: '20:19:35',
      responseTime: 2.1
    },
    {
      deviceName: 'aleksandra-access-switch-fl2',
      ipAddress: '192.168.2.20',
      deviceType: 'Access Switch',
      status: 'down',
      cpuUtilization: 0,
      memoryUtilization: 0,
      uptime: '0 days',
      location: 'Floor 2 - West Wing',
      vendor: 'Cisco',
      model: 'Catalyst 2960X',
      lastSeen: '18:45:12',
      responseTime: 0
    },
    {
      deviceName: 'aleksandra-wireless-controller',
      ipAddress: '192.168.50.10',
      deviceType: 'Wireless Controller',
      status: 'up',
      cpuUtilization: 34.8,
      memoryUtilization: 52.4,
      uptime: '178 days',
      location: 'Network Operations Center',
      vendor: 'Aruba',
      model: 'WLC 8400',
      lastSeen: '20:19:33',
      responseTime: 1.7
    }
  ]);

  const [interfaceStatus, setInterfaceStatus] = useState([
    {
      deviceName: 'aleksandra-core-switch-01',
      interfaceName: 'GigabitEthernet1/0/1',
      description: 'Uplink to WAN Router',
      status: 'up',
      utilization: 67.8,
      inputRate: '234.5 Mbps',
      outputRate: '189.3 Mbps',
      errors: 0,
      discards: 2,
      lastChange: '2 hours ago'
    },
    {
      deviceName: 'aleksandra-core-switch-01',
      interfaceName: 'GigabitEthernet1/0/24',
      description: 'Connection to Server Farm',
      status: 'up',
      utilization: 89.4,
      inputRate: '567.8 Mbps',
      outputRate: '623.1 Mbps',
      errors: 12,
      discards: 45,
      lastChange: '15 minutes ago'
    },
    {
      deviceName: 'aleksandra-firewall-dmz',
      interfaceName: 'port1',
      description: 'External Interface',
      status: 'up',
      utilization: 78.9,
      inputRate: '345.6 Mbps',
      outputRate: '298.7 Mbps',
      errors: 3,
      discards: 8,
      lastChange: '1 day ago'
    },
    {
      deviceName: 'aleksandra-access-switch-fl2',
      interfaceName: 'FastEthernet0/1',
      description: 'Workstation Connection',
      status: 'down',
      utilization: 0,
      inputRate: '0 Mbps',
      outputRate: '0 Mbps',
      errors: 567,
      discards: 234,
      lastChange: '2 hours ago'
    },
    {
      deviceName: 'aleksandra-wan-router-01',
      interfaceName: 'Serial0/0/0',
      description: 'ISP Connection',
      status: 'up',
      utilization: 45.7,
      inputRate: '89.4 Mbps',
      outputRate: '67.8 Mbps',
      errors: 1,
      discards: 0,
      lastChange: '5 days ago'
    }
  ]);

  const [networkAlerts, setNetworkAlerts] = useState([
    {
      alertId: 'NPM-2026-8901',
      severity: 'critical',
      alertType: 'Node Down',
      object: 'aleksandra-access-switch-fl2',
      message: 'Device is not responding to SNMP or ICMP requests',
      triggeredTime: '18:45:12',
      acknowledgedBy: null,
      description: 'Access switch in Floor 2 West Wing has gone offline',
      impact: 'High - 24 users affected'
    },
    {
      alertId: 'NPM-2026-7823',
      severity: 'warning',
      alertType: 'High CPU Utilization',
      object: 'aleksandra-firewall-dmz',
      message: 'CPU utilization has exceeded 85% for 10 minutes',
      triggeredTime: '20:05:30',
      acknowledgedBy: 'network_admin',
      description: 'Firewall CPU usage trending upward during peak hours',
      impact: 'Medium - Performance degradation possible'
    },
    {
      alertId: 'NPM-2026-6745',
      severity: 'warning',
      alertType: 'Interface High Utilization',
      object: 'aleksandra-core-switch-01 - Gi1/0/24',
      message: 'Interface utilization has exceeded 80% threshold',
      triggeredTime: '19:30:15',
      acknowledgedBy: null,
      description: 'Server farm uplink experiencing high traffic volume',
      impact: 'Medium - Potential bottleneck during peak usage'
    },
    {
      alertId: 'NPM-2026-5667',
      severity: 'critical',
      alertType: 'Interface Errors',
      object: 'aleksandra-access-switch-fl2 - Fa0/1',
      message: 'Interface error rate has exceeded acceptable threshold',
      triggeredTime: '18:45:12',
      acknowledgedBy: null,
      description: 'High error count indicating possible hardware failure',
      impact: 'High - Data integrity concerns'
    }
  ]);

  const [topologyHealth, setTopologyHealth] = useState([
    {
      segment: 'Core Network',
      devices: 4,
      upDevices: 4,
      downDevices: 0,
      healthScore: 95.8,
      avgResponseTime: 1.2,
      utilizationLevel: 'moderate',
      criticalAlerts: 0,
      warningAlerts: 1
    },
    {
      segment: 'DMZ',
      devices: 8,
      upDevices: 7,
      downDevices: 1,
      healthScore: 78.4,
      avgResponseTime: 3.2,
      utilizationLevel: 'high',
      criticalAlerts: 1,
      warningAlerts: 3
    },
    {
      segment: 'Access Layer',
      devices: 45,
      upDevices: 42,
      downDevices: 3,
      healthScore: 89.2,
      avgResponseTime: 2.1,
      utilizationLevel: 'low',
      criticalAlerts: 2,
      warningAlerts: 8
    },
    {
      segment: 'Wireless Infrastructure',
      devices: 67,
      upDevices: 65,
      downDevices: 2,
      healthScore: 92.5,
      avgResponseTime: 1.8,
      utilizationLevel: 'moderate',
      criticalAlerts: 0,
      warningAlerts: 4
    },
    {
      segment: 'WAN Links',
      devices: 12,
      upDevices: 11,
      downDevices: 1,
      healthScore: 87.3,
      avgResponseTime: 4.5,
      utilizationLevel: 'moderate',
      criticalAlerts: 1,
      warningAlerts: 2
    }
  ]);

  const [bandwidthUtilization, setBandwidthUtilization] = useState([
    {
      interface: 'WAN Link - Primary',
      currentUtilization: 45.7,
      capacity: '1000 Mbps',
      peak24h: 78.9,
      average24h: 52.3,
      inbound: '234.5 Mbps',
      outbound: '189.3 Mbps',
      qosPolicy: 'Business_Critical'
    },
    {
      interface: 'Server Farm Uplink',
      currentUtilization: 89.4,
      capacity: '10000 Mbps',
      peak24h: 94.7,
      average24h: 67.8,
      inbound: '5678 Mbps',
      outbound: '6234 Mbps',
      qosPolicy: 'Data_Center'
    },
    {
      interface: 'DMZ Firewall External',
      currentUtilization: 67.8,
      capacity: '1000 Mbps',
      peak24h: 89.2,
      average24h: 45.6,
      inbound: '345.6 Mbps',
      outbound: '298.7 Mbps',
      qosPolicy: 'Security_Optimized'
    },
    {
      interface: 'Wireless Backhaul',
      currentUtilization: 34.2,
      capacity: '1000 Mbps',
      peak24h: 56.8,
      average24h: 29.4,
      inbound: '167.8 Mbps',
      outbound: '123.4 Mbps',
      qosPolicy: 'Wireless_Priority'
    }
  ]);

  const [slaCompliance, setSlaCompliance] = useState([
    {
      slaName: 'Core Network Availability',
      target: 99.9,
      current: 99.7,
      thisMonth: 99.8,
      lastMonth: 99.9,
      status: 'at_risk',
      violations: 2,
      downtime: '43 minutes'
    },
    {
      slaName: 'WAN Link Performance',
      target: 95.0,
      current: 97.8,
      thisMonth: 96.5,
      lastMonth: 98.2,
      status: 'compliant',
      violations: 0,
      downtime: '12 minutes'
    },
    {
      slaName: 'DMZ Response Time',
      target: 99.0,
      current: 94.2,
      thisMonth: 95.8,
      lastMonth: 97.1,
      status: 'non_compliant',
      violations: 8,
      downtime: '156 minutes'
    },
    {
      slaName: 'Wireless Coverage',
      target: 98.0,
      current: 99.2,
      thisMonth: 98.9,
      lastMonth: 99.0,
      status: 'compliant',
      violations: 0,
      downtime: '8 minutes'
    }
  ]);

  const [networkTimeline, setNetworkTimeline] = useState([
    { time: '20:19', nodesUp: 1789, nodesDown: 23, avgCpu: 34.7, avgMemory: 67.8, utilization: 45.3, alerts: 156 },
    { time: '20:18', nodesUp: 1792, nodesDown: 20, avgCpu: 32.4, avgMemory: 65.2, utilization: 43.8, alerts: 148 },
    { time: '20:17', nodesUp: 1795, nodesDown: 17, avgCpu: 35.9, avgMemory: 69.1, utilization: 47.2, alerts: 162 },
    { time: '20:16', nodesUp: 1788, nodesDown: 24, avgCpu: 33.1, avgMemory: 66.7, utilization: 44.6, alerts: 159 },
    { time: '20:15', nodesUp: 1801, nodesDown: 11, avgCpu: 31.8, avgMemory: 63.4, utilization: 42.1, alerts: 134 },
    { time: '20:14', nodesUp: 1793, nodesDown: 19, avgCpu: 36.5, avgMemory: 70.3, utilization: 48.7, alerts: 167 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update network metrics
      setNetworkMetrics(prev => ({
        ...prev,
        upNodes: Math.max(prev.totalNodes * 0.85, prev.upNodes + Math.floor((Math.random() - 0.3) * 8)),
        downNodes: Math.max(5, Math.min(50, prev.downNodes + Math.floor((Math.random() - 0.7) * 6))),
        warningNodes: Math.max(10, Math.min(80, prev.warningNodes + Math.floor((Math.random() - 0.5) * 8))),
        interfacesUp: Math.max(prev.totalInterfaces * 0.9, prev.interfacesUp + Math.floor((Math.random() - 0.2) * 20)),
        interfacesDown: Math.max(50, Math.min(300, prev.interfacesDown + Math.floor((Math.random() - 0.8) * 15))),
        avgCpuUtilization: Math.max(20, Math.min(80, prev.avgCpuUtilization + (Math.random() - 0.5) * 8)),
        avgMemoryUtilization: Math.max(40, Math.min(90, prev.avgMemoryUtilization + (Math.random() - 0.5) * 6)),
        networkUtilization: Math.max(30, Math.min(85, prev.networkUtilization + (Math.random() - 0.5) * 10)),
        totalAlerts: Math.max(100, prev.totalAlerts + Math.floor((Math.random() - 0.4) * 20)),
        criticalAlerts: Math.max(5, Math.min(30, prev.criticalAlerts + Math.floor((Math.random() - 0.7) * 4))),
        warningAlerts: Math.max(40, Math.min(150, prev.warningAlerts + Math.floor((Math.random() - 0.5) * 15)))
      }));

      // Update network timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setNetworkTimeline(prev => {
        const newData = {
          time: currentTime,
          nodesUp: Math.max(1500, prev[0]?.nodesUp + Math.floor((Math.random() - 0.3) * 20)) || 1789,
          nodesDown: Math.max(10, Math.min(50, prev[0]?.nodesDown + Math.floor((Math.random() - 0.7) * 8))) || 23,
          avgCpu: Math.max(20, Math.min(70, prev[0]?.avgCpu + (Math.random() - 0.5) * 8)) || 34.7,
          avgMemory: Math.max(50, Math.min(85, prev[0]?.avgMemory + (Math.random() - 0.5) * 6)) || 67.8,
          utilization: Math.max(30, Math.min(80, prev[0]?.utilization + (Math.random() - 0.5) * 10)) || 45.3,
          alerts: Math.max(120, prev[0]?.alerts + Math.floor((Math.random() - 0.4) * 30)) || 156
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update network devices
      setNetworkDevices(prev => prev.map(device => ({
        ...device,
        cpuUtilization: device.status === 'up' ? 
                       Math.max(10, Math.min(95, device.cpuUtilization + (Math.random() - 0.5) * 10)) : 0,
        memoryUtilization: device.status === 'up' ? 
                          Math.max(30, Math.min(95, device.memoryUtilization + (Math.random() - 0.5) * 8)) : 0,
        responseTime: device.status === 'up' ? 
                     Math.max(0.5, device.responseTime + (Math.random() - 0.5) * 2) : 0,
        status: device.deviceName.includes('fl2') ? 'down' : 
               device.cpuUtilization > 85 || device.memoryUtilization > 85 ? 'warning' : 'up'
      })));

      // Update interface status
      setInterfaceStatus(prev => prev.map(iface => ({
        ...iface,
        utilization: iface.status === 'up' ? 
                    Math.max(10, Math.min(95, iface.utilization + (Math.random() - 0.5) * 15)) : 0,
        errors: iface.status === 'up' ? 
               Math.max(0, iface.errors + Math.floor((Math.random() - 0.8) * 5)) : iface.errors,
        discards: iface.status === 'up' ? 
                 Math.max(0, iface.discards + Math.floor((Math.random() - 0.7) * 8)) : iface.discards
      })));

      // Update topology health
      setTopologyHealth(prev => prev.map(segment => ({
        ...segment,
        healthScore: Math.max(70, Math.min(99, segment.healthScore + (Math.random() - 0.5) * 5)),
        avgResponseTime: Math.max(1, segment.avgResponseTime + (Math.random() - 0.5) * 1),
        criticalAlerts: Math.max(0, segment.criticalAlerts + Math.floor((Math.random() - 0.8) * 2)),
        warningAlerts: Math.max(0, segment.warningAlerts + Math.floor((Math.random() - 0.6) * 3))
      })));

      // Update bandwidth utilization
      setBandwidthUtilization(prev => prev.map(bw => ({
        ...bw,
        currentUtilization: Math.max(20, Math.min(95, bw.currentUtilization + (Math.random() - 0.5) * 12)),
        peak24h: Math.max(bw.currentUtilization, bw.peak24h + (Math.random() - 0.5) * 5),
        average24h: Math.max(30, Math.min(80, bw.average24h + (Math.random() - 0.5) * 3))
      })));

      // Update SLA compliance
      setSlaCompliance(prev => prev.map(sla => ({
        ...sla,
        current: Math.max(85, Math.min(100, sla.current + (Math.random() - 0.5) * 2)),
        thisMonth: Math.max(88, Math.min(100, sla.thisMonth + (Math.random() - 0.5) * 1)),
        violations: Math.max(0, sla.violations + Math.floor((Math.random() - 0.9) * 2)),
        status: sla.current >= sla.target ? 'compliant' : 
               sla.current >= sla.target * 0.95 ? 'at_risk' : 'non_compliant'
      })));

      // Occasionally update alert status
      if (Math.random() < 0.2) {
        setNetworkAlerts(prev => prev.map(alert => ({
          ...alert,
          acknowledgedBy: alert.acknowledgedBy || (Math.random() < 0.3 ? 'network_admin' : null)
        })));
      }

    }, 54000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'up': case 'compliant': return 'text-green-400';
      case 'down': case 'non_compliant': return 'text-red-400';
      case 'warning': case 'at_risk': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'info': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getUtilizationColor = (utilization) => {
    if (utilization >= 80) return 'text-red-400';
    if (utilization >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getHealthColor = (health) => {
    if (health >= 95) return 'text-green-400';
    if (health >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getSlaColor = (current, target) => {
    if (current >= target) return 'text-green-400';
    if (current >= target * 0.95) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getResponseTimeColor = (responseTime) => {
    if (responseTime <= 2) return 'text-green-400';
    if (responseTime <= 5) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900 via-gray-900 to-yellow-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* SolarWinds NPM Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🌞 SolarWinds Network Performance Monitor
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>NODES: <span className="text-orange-400 font-mono">{networkMetrics.upNodes}/{networkMetrics.totalNodes}</span></div>
                <div>INTERFACES: <span className="text-yellow-400">{networkMetrics.interfacesUp.toLocaleString()}</span></div>
                <div>UTILIZATION: <span className="text-amber-400">{networkMetrics.networkUtilization.toFixed(1)}%</span></div>
                <div>ALERTS: <span className="text-red-400">{networkMetrics.totalAlerts}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-orange-400">{networkMetrics.avgCpuUtilization.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Avg CPU Utilization</div>
              <div className="text-xs text-orange-300">Memory: {networkMetrics.avgMemoryUtilization.toFixed(1)}%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Network Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Nodes Up</span>
              <span className="text-2xl">🟢</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{networkMetrics.upNodes}</div>
            <div className="text-xs text-gray-400">Active network devices</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Nodes Down</span>
              <span className="text-2xl">🔴</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{networkMetrics.downNodes}</div>
            <div className="text-xs text-gray-400">Offline devices</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Warning Nodes</span>
              <span className="text-2xl">🟡</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{networkMetrics.warningNodes}</div>
            <div className="text-xs text-gray-400">Performance issues</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Critical Alerts</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{networkMetrics.criticalAlerts}</div>
            <div className="text-xs text-gray-400">Immediate attention</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Network Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Network Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={networkTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#f97316" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#f97316" />
                <YAxis yAxisId="right" orientation="right" stroke="#f97316" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #f97316' }}
                  labelStyle={{ color: '#f97316' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="nodesUp" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" name="Nodes Up" />
                <Area yAxisId="left" type="monotone" dataKey="nodesDown" fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" name="Nodes Down" />
                <Line yAxisId="right" type="monotone" dataKey="avgCpu" stroke="#f59e0b" strokeWidth={2} name="Avg CPU %" />
                <Bar yAxisId="right" dataKey="alerts" fill="#f97316" name="Total Alerts" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Network Device Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🖧 Network Device Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {networkDevices.map((device, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{device.deviceName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(device.status)}`}>{device.status}</span>
                  </div>
                  <div className="text-xs text-orange-300 mb-1">{device.vendor} {device.model}</div>
                  <div className="text-xs text-yellow-300 mb-1">{device.ipAddress} • {device.location}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getUtilizationColor(device.cpuUtilization)}>CPU: {device.cpuUtilization.toFixed(1)}%</div>
                    <div className={getUtilizationColor(device.memoryUtilization)}>MEM: {device.memoryUtilization.toFixed(1)}%</div>
                    <div className={getResponseTimeColor(device.responseTime)}>RTT: {device.responseTime.toFixed(1)}ms</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">Uptime: {device.uptime}</span>
                    <span className="text-gray-400">{device.lastSeen}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Network Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Network Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {networkAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.alertId}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{alert.alertType}</div>
                  <div className="text-xs text-orange-300 mb-1 truncate">{alert.object}</div>
                  <div className="text-xs text-yellow-300 mb-1 line-clamp-2">{alert.message}</div>
                  <div className="text-xs text-red-300 mb-1 line-clamp-2">{alert.impact}</div>
                  <div className="flex justify-between text-xs">
                    <span className={alert.acknowledgedBy ? 'text-green-400' : 'text-red-400'}>
                      {alert.acknowledgedBy ? `Ack: ${alert.acknowledgedBy}` : 'Unacknowledged'}
                    </span>
                    <span className="text-gray-400">{alert.triggeredTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interface Status Monitoring */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔌 Interface Status Monitor
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {interfaceStatus.map((iface, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{iface.interfaceName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(iface.status)}`}>{iface.status}</span>
                  </div>
                  <div className="text-xs text-orange-300 mb-1 truncate">{iface.deviceName}</div>
                  <div className="text-xs text-yellow-300 mb-1 line-clamp-1">{iface.description}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className={getUtilizationColor(iface.utilization)}>Util: {iface.utilization.toFixed(1)}%</div>
                    <div className="text-cyan-400">In: {iface.inputRate}</div>
                    <div className="text-blue-400">Out: {iface.outputRate}</div>
                    <div className={iface.errors > 10 ? 'text-red-400' : 'text-green-400'}>Err: {iface.errors}</div>
                  </div>
                  <div className="text-xs text-gray-400">{iface.lastChange}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Topology Health Summary */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗺️ Network Topology Health
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {topologyHealth.map((segment, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{segment.segment}</span>
                    <span className={`text-xs font-bold ${getHealthColor(segment.healthScore)}`}>
                      {segment.healthScore.toFixed(1)}%
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-green-400">{segment.upDevices} up</div>
                    <div className="text-red-400">{segment.downDevices} down</div>
                    <div className={getResponseTimeColor(segment.avgResponseTime)}>
                      RTT: {segment.avgResponseTime.toFixed(1)}ms
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-orange-400">Util: {segment.utilizationLevel}</div>
                    <div className="text-red-400">Crit: {segment.criticalAlerts}</div>
                    <div className="text-yellow-400">Warn: {segment.warningAlerts}</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getHealthColor(segment.healthScore) === 'text-green-400' ? 'bg-green-400' : 
                                                      getHealthColor(segment.healthScore) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${segment.healthScore}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bandwidth Utilization & SLA Compliance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Bandwidth Utilization */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Bandwidth Utilization Analysis
            </h3>
            <div className="space-y-3">
              {bandwidthUtilization.map((bw, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{bw.interface}</span>
                    <span className={`text-xs font-bold ${getUtilizationColor(bw.currentUtilization)}`}>
                      {bw.currentUtilization.toFixed(1)}%
                    </span>
                  </div>
                  <div className="text-xs text-orange-300 mb-1">Capacity: {bw.capacity} • Policy: {bw.qosPolicy}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-yellow-400">Peak: {bw.peak24h.toFixed(1)}%</div>
                    <div className="text-blue-400">Avg: {bw.average24h.toFixed(1)}%</div>
                    <div className="text-cyan-400">In: {bw.inbound}</div>
                  </div>
                  <div className="text-xs text-purple-300 mb-2">Out: {bw.outbound}</div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getUtilizationColor(bw.currentUtilization) === 'text-green-400' ? 'bg-green-400' : 
                                                      getUtilizationColor(bw.currentUtilization) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${bw.currentUtilization}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SLA Compliance Monitoring */}
          <div className="bg-gray-800 rounded-xl p-6 border border-orange-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 SLA Compliance Monitor
            </h3>
            <div className="space-y-3">
              {slaCompliance.map((sla, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{sla.slaName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(sla.status)}`}>{sla.status}</span>
                  </div>
                  <div className={`text-lg font-bold mb-1 ${getSlaColor(sla.current, sla.target)}`}>
                    {sla.current.toFixed(1)}% / {sla.target.toFixed(1)}%
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-blue-400">This: {sla.thisMonth.toFixed(1)}%</div>
                    <div className="text-cyan-400">Last: {sla.lastMonth.toFixed(1)}%</div>
                    <div className="text-red-400">Violations: {sla.violations}</div>
                  </div>
                  <div className="text-xs text-yellow-300 mb-2">Downtime: {sla.downtime}</div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${getSlaColor(sla.current, sla.target) === 'text-green-400' ? 'bg-green-400' : 
                                                      getSlaColor(sla.current, sla.target) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${(sla.current / 100) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            SOLARWINDS NETWORK PERFORMANCE MONITOR | ALEKSANDRA AI NETWORK OPERATIONS | INFRASTRUCTURE MONITORING & MANAGEMENT
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Network Monitoring | Device Management | Interface Analytics | Bandwidth Analysis | SLA Compliance | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}