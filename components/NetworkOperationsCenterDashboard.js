// Network Operations Center Dashboard - March 2026
// Comprehensive NOC-inspired network infrastructure monitoring dashboard for telecom and ISP operations management
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function NetworkOperationsCenterDashboard() {
  const [networkMetrics, setNetworkMetrics] = useState({
    totalDevices: 2847,
    onlineDevices: 2789,
    criticalAlerts: 12,
    warnings: 34,
    totalBandwidth: 45.8, // Gbps
    utilizationPercent: 73.2,
    packetsPerSecond: 2847593,
    latencyMs: 2.4,
    uptime: 99.97,
    bgpSessions: 156,
    ospfRoutes: 2347,
    vlanCount: 234
  });

  const [networkTopology, setNetworkTopology] = useState([
    {
      nodeId: 'CORE-01',
      type: 'Core Router',
      location: 'London DataCenter',
      status: 'online',
      cpu: 23.5,
      memory: 45.2,
      temperature: 42.3,
      uptime: 99.98,
      connections: 24,
      bandwidth: 12.4,
      packets: 567890,
      vendor: 'Cisco',
      model: 'ASR 9000'
    },
    {
      nodeId: 'CORE-02',
      type: 'Core Router',
      location: 'London DataCenter',
      status: 'online',
      cpu: 28.7,
      memory: 52.1,
      temperature: 44.8,
      uptime: 99.95,
      connections: 22,
      bandwidth: 11.8,
      packets: 543210,
      vendor: 'Juniper',
      model: 'MX Series'
    },
    {
      nodeId: 'AGG-NYC-01',
      type: 'Aggregation Switch',
      location: 'New York PoP',
      status: 'online',
      cpu: 34.2,
      memory: 38.9,
      temperature: 39.5,
      uptime: 99.92,
      connections: 48,
      bandwidth: 8.7,
      packets: 345678,
      vendor: 'Arista',
      model: '7500R Series'
    },
    {
      nodeId: 'EDGE-FRA-01',
      type: 'Edge Router',
      location: 'Frankfurt PoP',
      status: 'warning',
      cpu: 78.5,
      memory: 82.3,
      temperature: 58.7,
      uptime: 99.89,
      connections: 16,
      bandwidth: 6.2,
      packets: 234567,
      vendor: 'Cisco',
      model: 'ASR 1000'
    },
    {
      nodeId: 'EDGE-TOK-01',
      type: 'Edge Router',
      location: 'Tokyo PoP',
      status: 'critical',
      cpu: 92.3,
      memory: 95.7,
      temperature: 67.2,
      uptime: 98.45,
      connections: 12,
      bandwidth: 4.1,
      packets: 156789,
      vendor: 'Juniper',
      model: 'SRX Series'
    },
    {
      nodeId: 'FW-DMZ-01',
      type: 'Firewall',
      location: 'London DMZ',
      status: 'online',
      cpu: 45.6,
      memory: 67.2,
      temperature: 46.8,
      uptime: 99.94,
      connections: 8,
      bandwidth: 2.3,
      packets: 123456,
      vendor: 'Palo Alto',
      model: 'PA-5220'
    }
  ]);

  const [bgpPeerings, setBgpPeerings] = useState([
    {
      peer: 'Cogent (174)',
      asn: 174,
      status: 'established',
      routes: 887234,
      uptime: '45d 12h 34m',
      location: 'London',
      type: 'Transit',
      bandwidth: '10G',
      utilization: 45.7,
      sessions: 4
    },
    {
      peer: 'Level3 (3356)',
      asn: 3356,
      status: 'established',
      routes: 923456,
      uptime: '67d 8h 21m',
      location: 'New York',
      type: 'Transit',
      bandwidth: '10G',
      utilization: 62.3,
      sessions: 4
    },
    {
      peer: 'Hurricane Electric (6939)',
      asn: 6939,
      status: 'established',
      routes: 756789,
      uptime: '23d 15h 47m',
      location: 'Frankfurt',
      type: 'Transit',
      bandwidth: '10G',
      utilization: 38.9,
      sessions: 2
    },
    {
      peer: 'Google (15169)',
      asn: 15169,
      status: 'established',
      routes: 234,
      uptime: '12d 6h 12m',
      location: 'London',
      type: 'Peering',
      bandwidth: '10G',
      utilization: 78.4,
      sessions: 4
    },
    {
      peer: 'Cloudflare (13335)',
      asn: 13335,
      status: 'established',
      routes: 156,
      uptime: '8d 22h 45m',
      location: 'Frankfurt',
      type: 'Peering',
      bandwidth: '10G',
      utilization: 56.7,
      sessions: 2
    },
    {
      peer: 'Amazon (16509)',
      asn: 16509,
      status: 'idle',
      routes: 0,
      uptime: '0d 0h 0m',
      location: 'Tokyo',
      type: 'Peering',
      bandwidth: '10G',
      utilization: 0,
      sessions: 0
    }
  ]);

  const [circuitStatus, setCircuitStatus] = useState([
    {
      circuitId: 'LON-NYC-001',
      type: 'Dark Fiber',
      capacity: '100G',
      utilization: 67.8,
      latency: 76.4,
      packetLoss: 0.01,
      status: 'up',
      provider: 'Zayo',
      endpoints: ['London DC', 'New York PoP'],
      cost: 15000,
      sla: 99.95
    },
    {
      circuitId: 'LON-FRA-002',
      type: 'Wavelength',
      capacity: '100G',
      utilization: 45.2,
      latency: 23.7,
      packetLoss: 0.002,
      status: 'up',
      provider: 'Eunetworks',
      endpoints: ['London DC', 'Frankfurt PoP'],
      cost: 8500,
      sla: 99.9
    },
    {
      circuitId: 'NYC-MIA-003',
      type: 'DWDM',
      capacity: '40G',
      utilization: 78.9,
      latency: 45.3,
      packetLoss: 0.015,
      status: 'degraded',
      provider: 'CenturyLink',
      endpoints: ['New York PoP', 'Miami PoP'],
      cost: 6200,
      sla: 99.9
    },
    {
      circuitId: 'FRA-AMS-004',
      type: 'Ethernet',
      capacity: '10G',
      utilization: 89.4,
      latency: 12.8,
      packetLoss: 0.008,
      status: 'up',
      provider: 'KPN',
      endpoints: ['Frankfurt PoP', 'Amsterdam PoP'],
      cost: 2400,
      sla: 99.5
    },
    {
      circuitId: 'TOK-SIN-005',
      type: 'Submarine Cable',
      capacity: '100G',
      utilization: 34.7,
      latency: 67.2,
      packetLoss: 0.012,
      status: 'maintenance',
      provider: 'NTT',
      endpoints: ['Tokyo PoP', 'Singapore PoP'],
      cost: 18500,
      sla: 99.95
    }
  ]);

  const [alertsAndIncidents, setAlertsAndIncidents] = useState([
    {
      id: 'INC-2026-3456',
      severity: 'critical',
      type: 'Interface Down',
      device: 'EDGE-TOK-01',
      description: 'Interface TenGigE0/0/1 down due to high temperature',
      timeStarted: '11:28:45',
      duration: '6m 15s',
      status: 'investigating',
      assignee: 'Network Team Tokyo',
      impact: 'Customer traffic affected'
    },
    {
      id: 'ALT-2026-7890',
      severity: 'warning',
      type: 'High CPU',
      device: 'EDGE-FRA-01',
      description: 'CPU utilization above 75% threshold',
      timeStarted: '11:15:20',
      duration: '19m 40s',
      status: 'acknowledged',
      assignee: 'Frankfurt NOC',
      impact: 'Performance degradation possible'
    },
    {
      id: 'ALT-2026-1234',
      severity: 'warning',
      type: 'BGP Flapping',
      device: 'CORE-02',
      description: 'BGP session with AS174 unstable',
      timeStarted: '11:20:10',
      duration: '14m 50s',
      status: 'monitoring',
      assignee: 'Routing Team',
      impact: 'Potential route instability'
    },
    {
      id: 'ALT-2026-5678',
      severity: 'info',
      type: 'Maintenance',
      device: 'TOK-SIN-005',
      description: 'Scheduled maintenance window active',
      timeStarted: '11:00:00',
      duration: '35m 0s',
      status: 'planned',
      assignee: 'Operations Team',
      impact: 'Reduced redundancy'
    }
  ]);

  const [trafficAnalytics, setTrafficAnalytics] = useState([
    {
      protocol: 'HTTP/HTTPS',
      percentage: 68.4,
      volume: 31.4, // Gbps
      packets: 1947583,
      growth: '+2.3%',
      ports: [80, 443],
      classification: 'Web Traffic'
    },
    {
      protocol: 'Video Streaming',
      percentage: 18.2,
      volume: 8.3,
      packets: 456789,
      growth: '+12.7%',
      ports: [1935, 8080],
      classification: 'Media'
    },
    {
      protocol: 'P2P/File Sharing',
      percentage: 7.8,
      volume: 3.6,
      packets: 234567,
      growth: '-5.4%',
      ports: ['Various'],
      classification: 'File Transfer'
    },
    {
      protocol: 'Gaming',
      percentage: 3.2,
      volume: 1.5,
      packets: 123456,
      growth: '+8.9%',
      ports: ['Various'],
      classification: 'Interactive'
    },
    {
      protocol: 'Email/SMTP',
      percentage: 1.8,
      volume: 0.8,
      packets: 67890,
      growth: '-1.2%',
      ports: [25, 587, 465],
      classification: 'Communication'
    },
    {
      protocol: 'DNS',
      percentage: 0.6,
      volume: 0.3,
      packets: 345678,
      growth: '+0.8%',
      ports: [53],
      classification: 'Infrastructure'
    }
  ]);

  const [ddosProtection, setDdosProtection] = useState([
    {
      id: 'DDOS-001',
      type: 'UDP Flood',
      target: '203.0.113.45',
      volume: '2.3 Gbps',
      packets: 4567890,
      duration: '45m 12s',
      status: 'mitigated',
      source: 'Multiple IPs',
      mitigation: 'Rate Limiting + Blackhole',
      detected: '10:45:30'
    },
    {
      id: 'DDOS-002',
      type: 'SYN Flood',
      target: '198.51.100.23',
      volume: '1.8 Gbps',
      packets: 2345678,
      duration: '12m 34s',
      status: 'active',
      source: 'Botnet',
      mitigation: 'SYN Cookies + Scrubbing',
      detected: '11:20:15'
    },
    {
      id: 'DDOS-003',
      type: 'DNS Amplification',
      target: '192.0.2.67',
      volume: '890 Mbps',
      packets: 1234567,
      duration: '8m 56s',
      status: 'blocked',
      source: 'Open Resolvers',
      mitigation: 'Upstream Filtering',
      detected: '11:25:40'
    }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    { time: '11:35', bandwidth: 45.8, latency: 2.4, utilization: 73.2, packetLoss: 0.008, connections: 247589 },
    { time: '11:34', bandwidth: 44.2, latency: 2.6, utilization: 71.8, packetLoss: 0.012, connections: 245678 },
    { time: '11:33', bandwidth: 46.1, latency: 2.2, utilization: 74.6, packetLoss: 0.006, connections: 249123 },
    { time: '11:32', bandwidth: 43.9, latency: 2.8, utilization: 70.2, packetLoss: 0.015, connections: 243456 },
    { time: '11:31', bandwidth: 45.5, latency: 2.5, utilization: 72.9, packetLoss: 0.009, connections: 247890 },
    { time: '11:30', bandwidth: 44.7, latency: 2.7, utilization: 71.4, packetLoss: 0.011, connections: 245123 }
  ]);

  const [geographicDistribution, setGeographicDistribution] = useState([
    { region: 'Europe', traffic: 18.7, devices: 1247, alerts: 8, latency: 23.4, cost: 45600 },
    { region: 'North America', traffic: 15.2, devices: 956, alerts: 3, latency: 67.8, cost: 38900 },
    { region: 'Asia Pacific', traffic: 8.4, devices: 456, alerts: 12, latency: 89.2, cost: 28700 },
    { region: 'South America', traffic: 2.1, devices: 134, alerts: 2, latency: 156.7, cost: 12400 },
    { region: 'Africa', traffic: 1.4, devices: 54, alerts: 1, latency: 234.5, cost: 8900 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update network metrics
      setNetworkMetrics(prev => ({
        ...prev,
        onlineDevices: Math.max(prev.totalDevices * 0.95, prev.onlineDevices + Math.floor((Math.random() - 0.5) * 10)),
        criticalAlerts: Math.max(0, prev.criticalAlerts + Math.floor((Math.random() - 0.7) * 3)),
        warnings: Math.max(0, prev.warnings + Math.floor((Math.random() - 0.6) * 5)),
        totalBandwidth: Math.max(30, prev.totalBandwidth + (Math.random() - 0.5) * 5),
        utilizationPercent: Math.max(40, Math.min(95, prev.utilizationPercent + (Math.random() - 0.5) * 8)),
        packetsPerSecond: Math.max(1000000, prev.packetsPerSecond + Math.floor((Math.random() - 0.5) * 500000)),
        latencyMs: Math.max(1.5, prev.latencyMs + (Math.random() - 0.5) * 1),
        uptime: Math.max(99, Math.min(99.99, prev.uptime + (Math.random() - 0.5) * 0.02))
      }));

      // Update performance metrics timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceMetrics(prev => {
        const newData = {
          time: currentTime,
          bandwidth: Math.max(30, prev[0]?.bandwidth + (Math.random() - 0.5) * 5) || 45.8,
          latency: Math.max(1.5, prev[0]?.latency + (Math.random() - 0.5) * 1) || 2.4,
          utilization: Math.max(40, Math.min(95, prev[0]?.utilization + (Math.random() - 0.5) * 8)) || 73.2,
          packetLoss: Math.max(0.001, prev[0]?.packetLoss + (Math.random() - 0.5) * 0.01) || 0.008,
          connections: Math.max(200000, prev[0]?.connections + Math.floor((Math.random() - 0.5) * 10000)) || 247589
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update network topology status
      setNetworkTopology(prev => prev.map(node => ({
        ...node,
        cpu: Math.max(10, Math.min(98, node.cpu + (Math.random() - 0.5) * 8)),
        memory: Math.max(20, Math.min(95, node.memory + (Math.random() - 0.5) * 6)),
        temperature: Math.max(25, Math.min(70, node.temperature + (Math.random() - 0.5) * 4)),
        bandwidth: Math.max(1, node.bandwidth + (Math.random() - 0.5) * 2),
        packets: Math.max(50000, node.packets + Math.floor((Math.random() - 0.5) * 50000)),
        status: node.cpu > 90 || node.memory > 90 || node.temperature > 60 ? 
                (node.cpu > 95 || node.memory > 95 || node.temperature > 65 ? 'critical' : 'warning') : 'online'
      })));

      // Update BGP peerings
      setBgpPeerings(prev => prev.map(peer => ({
        ...peer,
        utilization: Math.max(10, Math.min(95, peer.utilization + (Math.random() - 0.5) * 8)),
        routes: peer.status === 'established' ? 
                Math.max(100, peer.routes + Math.floor((Math.random() - 0.5) * 1000)) : 0
      })));

      // Update circuit status
      setCircuitStatus(prev => prev.map(circuit => ({
        ...circuit,
        utilization: Math.max(10, Math.min(98, circuit.utilization + (Math.random() - 0.5) * 6)),
        latency: Math.max(5, circuit.latency + (Math.random() - 0.5) * 3),
        packetLoss: Math.max(0.001, Math.min(0.1, circuit.packetLoss + (Math.random() - 0.5) * 0.01))
      })));

      // Update traffic analytics
      setTrafficAnalytics(prev => prev.map(traffic => ({
        ...traffic,
        volume: Math.max(0.1, traffic.volume + (Math.random() - 0.5) * 2),
        packets: Math.max(10000, traffic.packets + Math.floor((Math.random() - 0.5) * 50000))
      })));

      // Update geographic distribution
      setGeographicDistribution(prev => prev.map(region => ({
        ...region,
        traffic: Math.max(0.5, region.traffic + (Math.random() - 0.5) * 1),
        alerts: Math.max(0, region.alerts + Math.floor((Math.random() - 0.8) * 2)),
        latency: Math.max(10, region.latency + (Math.random() - 0.5) * 5)
      })));

      // Occasionally update alerts
      if (Math.random() < 0.3) {
        setAlertsAndIncidents(prev => prev.map(alert => {
          const duration = alert.duration.split('m')[0];
          const newDuration = parseInt(duration) + 1;
          return {
            ...alert,
            duration: `${newDuration}m ${Math.floor(Math.random() * 60)}s`,
            status: Math.random() < 0.1 ? 
                    (alert.severity === 'critical' ? 'resolved' : alert.status) : alert.status
          };
        }));
      }
    }, 32000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'online': case 'up': case 'established': case 'resolved': case 'mitigated': return 'text-green-400';
      case 'critical': case 'down': case 'failed': return 'text-red-400';
      case 'warning': case 'degraded': case 'idle': case 'active': return 'text-yellow-400';
      case 'maintenance': case 'planned': case 'acknowledged': return 'text-blue-400';
      case 'investigating': case 'monitoring': return 'text-orange-400';
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
    if (utilization >= 90) return 'text-red-400';
    if (utilization >= 75) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getProtocolColor = (protocol) => {
    const colors = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6', '#06b6d4'];
    return colors[Math.abs(protocol.charCodeAt(0)) % colors.length];
  };

  const getDdosStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'mitigated': case 'blocked': return 'text-green-400';
      case 'active': return 'text-red-400';
      case 'monitoring': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-cyan-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Network Operations Center Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🌐 Network Operations Center (NOC)
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>DEVICES: <span className="text-cyan-400 font-mono">{networkMetrics.onlineDevices}/{networkMetrics.totalDevices}</span></div>
                <div>BANDWIDTH: <span className="text-blue-400">{networkMetrics.totalBandwidth.toFixed(1)} Gbps</span></div>
                <div>UTILIZATION: <span className="text-yellow-400">{networkMetrics.utilizationPercent.toFixed(1)}%</span></div>
                <div>LATENCY: <span className="text-green-400">{networkMetrics.latencyMs.toFixed(1)}ms</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-cyan-400">{networkMetrics.uptime.toFixed(2)}%</div>
              <div className="text-sm text-gray-300">Network Uptime</div>
              <div className="text-xs text-cyan-300">PPS: {(networkMetrics.packetsPerSecond / 1000000).toFixed(1)}M</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Network Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-cyan-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Critical Alerts</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{networkMetrics.criticalAlerts}</div>
            <div className="text-xs text-gray-400">Immediate attention</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">BGP Sessions</span>
              <span className="text-2xl">🔗</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{networkMetrics.bgpSessions}</div>
            <div className="text-xs text-gray-400">Active peerings</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">OSPF Routes</span>
              <span className="text-2xl">🛤️</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{networkMetrics.ospfRoutes.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Dynamic routes</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">VLANs</span>
              <span className="text-2xl">🏷️</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{networkMetrics.vlanCount}</div>
            <div className="text-xs text-gray-400">Configured VLANs</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Network Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Network Performance Metrics Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#06b6d4" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#06b6d4" />
                <YAxis yAxisId="right" orientation="right" stroke="#06b6d4" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #06b6d4' }}
                  labelStyle={{ color: '#06b6d4' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="bandwidth" fill="#06b6d4" fillOpacity={0.3} stroke="#06b6d4" name="Bandwidth (Gbps)" />
                <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#f59e0b" strokeWidth={2} name="Latency (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="utilization" stroke="#ef4444" strokeWidth={2} name="Utilization %" />
                <Bar yAxisId="right" dataKey="packetLoss" fill="#8b5cf6" name="Packet Loss (×1000)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Analytics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Traffic Analysis & Classification
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={trafficAnalytics}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={60}
                    dataKey="percentage"
                    nameKey="protocol"
                  >
                    {trafficAnalytics.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getProtocolColor(entry.protocol)} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2">
                {trafficAnalytics.map((traffic, index) => (
                  <div key={index} className="text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-bold truncate">{traffic.protocol}</span>
                      <span className="text-cyan-400">{traffic.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>{traffic.volume.toFixed(1)} Gbps</span>
                      <span className={traffic.growth.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                        {traffic.growth}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Network Topology Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌐 Network Topology Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {networkTopology.map((node, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{node.nodeId}</span>
                    <span className={`text-xs font-bold ${getStatusColor(node.status)}`}>{node.status}</span>
                  </div>
                  <div className="text-xs text-cyan-300 mb-1">{node.type} • {node.location}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className={getUtilizationColor(node.cpu)}>CPU: {node.cpu.toFixed(1)}%</div>
                    <div className={getUtilizationColor(node.memory)}>MEM: {node.memory.toFixed(1)}%</div>
                    <div className="text-yellow-400">TEMP: {node.temperature.toFixed(1)}°C</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-blue-400">{node.bandwidth.toFixed(1)} Gbps</span>
                    <span className="text-green-400">{(node.packets / 1000).toFixed(0)}k pps</span>
                  </div>
                  <div className="text-xs text-purple-300 mt-1">{node.vendor} {node.model}</div>
                </div>
              ))}
            </div>
          </div>

          {/* BGP Peering Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔗 BGP Peering Sessions
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {bgpPeerings.map((peer, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{peer.peer}</span>
                    <span className={`text-xs font-bold ${getStatusColor(peer.status)}`}>{peer.status}</span>
                  </div>
                  <div className="text-xs text-cyan-300 mb-1">AS{peer.asn} • {peer.type} • {peer.location}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-blue-400">{peer.routes.toLocaleString()} routes</div>
                    <div className="text-green-400">{peer.bandwidth} capacity</div>
                    <div className={getUtilizationColor(peer.utilization)}>Util: {peer.utilization.toFixed(1)}%</div>
                    <div className="text-purple-400">{peer.sessions} sessions</div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Uptime: {peer.uptime}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Alerts & Incidents */}
          <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Alerts & Incidents
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {alertsAndIncidents.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.id}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{alert.type}</div>
                  <div className="text-xs text-cyan-300 mb-1">{alert.device}</div>
                  <div className="text-xs text-yellow-300 mb-2 line-clamp-2">{alert.description}</div>
                  <div className="flex justify-between text-xs">
                    <span className={getStatusColor(alert.status)}>{alert.status}</span>
                    <span className="text-gray-400">{alert.duration}</span>
                  </div>
                  <div className="text-xs text-blue-300 mt-1">{alert.assignee}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Circuit Status & Geographic Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* WAN Circuit Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🛰️ WAN Circuit Status & Performance
            </h3>
            <div className="space-y-3">
              {circuitStatus.map((circuit, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{circuit.circuitId}</span>
                    <span className={`text-xs font-bold ${getStatusColor(circuit.status)}`}>{circuit.status}</span>
                  </div>
                  <div className="text-xs text-cyan-300 mb-1">{circuit.type} • {circuit.capacity} • {circuit.provider}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getUtilizationColor(circuit.utilization)}>Util: {circuit.utilization.toFixed(1)}%</div>
                    <div className="text-yellow-400">Lat: {circuit.latency.toFixed(1)}ms</div>
                    <div className="text-red-400">Loss: {(circuit.packetLoss * 100).toFixed(3)}%</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">${circuit.cost.toLocaleString()}/mo</span>
                    <span className="text-blue-400">SLA: {circuit.sla}%</span>
                  </div>
                  <div className="text-xs text-purple-300 mt-1 truncate">
                    {circuit.endpoints.join(' ↔ ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌍 Geographic Traffic Distribution
            </h3>
            <div className="space-y-3 mb-4">
              {geographicDistribution.map((region, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{region.region}</span>
                    <span className="text-cyan-400 text-sm">{region.traffic.toFixed(1)} Gbps</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-blue-400">{region.devices} devices</div>
                    <div className={region.alerts > 0 ? 'text-red-400' : 'text-green-400'}>{region.alerts} alerts</div>
                    <div className="text-yellow-400">{region.latency.toFixed(1)}ms avg</div>
                    <div className="text-green-400">${region.cost.toLocaleString()}/mo</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-cyan-400 h-2 rounded-full" 
                      style={{ width: `${(region.traffic / 20) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <RadarChart data={geographicDistribution}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="region" tick={{ fontSize: 10, fill: '#06b6d4' }} />
                <PolarRadiusAxis angle={18} domain={[0, 'dataMax']} tick={{ fontSize: 8, fill: '#374151' }} />
                <Radar name="Traffic" dataKey="traffic" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                <Radar name="Latency" dataKey="latency" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* DDoS Protection */}
        <div className="bg-gray-800 rounded-xl p-6 border border-cyan-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🛡️ DDoS Protection & Security Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ddosProtection.map((attack, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg border-l-4 border-red-500">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{attack.type}</span>
                  <span className={`text-xs font-bold ${getDdosStatusColor(attack.status)}`}>{attack.status}</span>
                </div>
                <div className="text-xs text-cyan-300 mb-1">ID: {attack.id}</div>
                <div className="text-xs text-yellow-400 mb-1">Target: {attack.target}</div>
                <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                  <div className="text-red-400">{attack.volume}</div>
                  <div className="text-blue-400">{(attack.packets / 1000000).toFixed(1)}M pps</div>
                  <div className="text-purple-400">{attack.duration}</div>
                  <div className="text-gray-400">{attack.detected}</div>
                </div>
                <div className="text-xs text-green-300 mb-1">Mitigation: {attack.mitigation}</div>
                <div className="text-xs text-orange-300">Source: {attack.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            NETWORK OPERATIONS CENTER | ALEKSANDRA AI TELECOMMUNICATIONS | 24/7 NETWORK MONITORING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            BGP Routing | Traffic Engineering | DDoS Protection | Performance Monitoring | Incident Response | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}