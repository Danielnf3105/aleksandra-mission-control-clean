// Network Operations Center (NOC) - Enterprise-Grade 2026 Design
// Inspired by NASA MCC hierarchical layout, SpaceX clean redesigns, and modern NOC single pane of glass
import { useState, useEffect } from 'react';
import { 
  Activity, AlertTriangle, CheckCircle, Clock, Database, Eye, 
  Globe, Monitor, Network, Router, Server, Settings, Shield, 
  Target, TrendingDown, TrendingUp, Users, Wifi, Zap,
  BarChart3, PieChart, LineChart, Gauge, Bell, MapPin,
  Cpu, HardDrive, MemoryStick, Thermometer, Battery,
  Cloud, Link, Lock, Unlock, Radio, Satellite
} from 'lucide-react';
import { LineChart as RechartsLineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';

export default function NetworkOperationsCenter() {
  const [nocStatus, setNocStatus] = useState({
    totalDevices: 15847,
    onlineDevices: 15621,
    criticalAlerts: 23,
    warningAlerts: 127,
    networkUptime: 99.97,
    avgLatency: 23.7, // ms
    throughput: 847.3, // Gbps
    securityThreats: 156,
    incidentCount: 8,
    automationRate: 94.3
  });

  const [networkSegments, setNetworkSegments] = useState([
    {
      segmentId: 'CORE-NET-01',
      name: 'Core Network Infrastructure',
      type: 'CORE',
      devices: 245,
      uptime: 99.99,
      throughput: 240.7, // Gbps
      latency: 12.3,
      utilization: 67.8,
      status: 'OPTIMAL',
      location: 'Primary Data Center',
      redundancy: 'ACTIVE-ACTIVE',
      lastIncident: '45 days ago'
    },
    {
      segmentId: 'EDGE-NET-02',
      name: 'Edge Computing Network',
      type: 'EDGE',
      devices: 1456,
      uptime: 99.94,
      throughput: 189.4,
      latency: 18.7,
      utilization: 73.2,
      status: 'OPTIMAL',
      location: 'Edge Locations (12)',
      redundancy: 'ACTIVE-STANDBY',
      lastIncident: '12 days ago'
    },
    {
      segmentId: 'WAN-NET-03',
      name: 'Wide Area Network',
      type: 'WAN',
      devices: 3467,
      uptime: 99.89,
      throughput: 156.8,
      latency: 34.5,
      utilization: 81.4,
      status: 'WARNING',
      location: 'Global (89 Sites)',
      redundancy: 'DIVERSE-PATHS',
      lastIncident: '3 days ago'
    },
    {
      segmentId: 'LAN-NET-04',
      name: 'Local Area Networks',
      type: 'LAN',
      devices: 8934,
      uptime: 99.82,
      throughput: 234.6,
      latency: 8.9,
      utilization: 64.7,
      status: 'OPTIMAL',
      location: 'Campus Networks (45)',
      redundancy: 'SPANNING-TREE',
      lastIncident: '1 day ago'
    },
    {
      segmentId: 'WIFI-NET-05',
      name: 'Wireless Infrastructure',
      type: 'WIRELESS',
      devices: 1745,
      uptime: 99.76,
      throughput: 89.3,
      latency: 28.4,
      utilization: 78.9,
      status: 'CAUTION',
      location: 'Wireless APs (234)',
      redundancy: 'CONTROLLER-BASED',
      lastIncident: '6 hours ago'
    }
  ]);

  const [criticalInfrastructure, setCriticalInfrastructure] = useState([
    {
      deviceId: 'CORE-SW-001',
      name: 'Core Switch Alpha',
      type: 'Core Switch',
      status: 'OPERATIONAL',
      uptime: '347 days, 12:45:32',
      cpuUsage: 34.7,
      memoryUsage: 45.2,
      temperature: 42.3, // Celsius
      powerDraw: 1247, // Watts
      portUtilization: 78.9,
      redundancyStatus: 'ACTIVE',
      firmwareVersion: '17.06.04a',
      lastMaintenance: '2025-11-15'
    },
    {
      deviceId: 'CORE-RTR-001',
      name: 'Core Router Beta',
      type: 'Core Router',
      status: 'OPERATIONAL',
      uptime: '189 days, 08:23:17',
      cpuUsage: 28.9,
      memoryUsage: 51.8,
      temperature: 38.7,
      powerDraw: 2134,
      portUtilization: 82.4,
      redundancyStatus: 'STANDBY',
      firmwareVersion: '16.12.09',
      lastMaintenance: '2026-01-08'
    },
    {
      deviceId: 'FW-001',
      name: 'Perimeter Firewall',
      type: 'Next-Gen Firewall',
      status: 'OPERATIONAL',
      uptime: '267 days, 15:09:44',
      cpuUsage: 67.3,
      memoryUsage: 73.4,
      temperature: 51.2,
      powerDraw: 890,
      portUtilization: 91.7,
      redundancyStatus: 'CLUSTERED',
      firmwareVersion: '9.1.14-h3',
      lastMaintenance: '2025-12-03'
    },
    {
      deviceId: 'LB-001',
      name: 'Application Load Balancer',
      type: 'Load Balancer',
      status: 'WARNING',
      uptime: '98 days, 03:41:29',
      cpuUsage: 89.4,
      memoryUsage: 87.2,
      temperature: 61.8,
      powerDraw: 567,
      portUtilization: 94.6,
      redundancyStatus: 'ACTIVE',
      firmwareVersion: '12.1.6.1',
      lastMaintenance: '2025-10-22'
    },
    {
      deviceId: 'WLC-001',
      name: 'Wireless Controller',
      type: 'WLAN Controller',
      status: 'OPERATIONAL',
      uptime: '156 days, 21:17:08',
      cpuUsage: 41.2,
      memoryUsage: 58.7,
      temperature: 44.9,
      powerDraw: 324,
      portUtilization: 67.8,
      redundancyStatus: 'HA-PAIR',
      firmwareVersion: '8.10.162.0',
      lastMaintenance: '2026-01-29'
    }
  ]);

  const [securityOperations, setSecurityOperations] = useState({
    threatLandscape: {
      activeThreatHunts: 12,
      threatIntelSources: 847,
      iocMatches: 234,
      falsePositives: 45,
      highPriorityThreats: 8,
      blockedConnections: 15634,
      quarantinedDevices: 3,
      patchCompliance: 94.7
    },
    firewallMetrics: {
      totalRules: 15634,
      activeBlocks: 2847,
      allowedConnections: 2847392,
      deniedConnections: 156734,
      applicationBlocks: 8934,
      geoBlocks: 12456,
      threatSignatures: 234567,
      performanceIndex: 97.3
    },
    intrusionDetection: {
      sensorsOnline: 189,
      detectionsToday: 1567,
      criticalAlerts: 23,
      investigationsActive: 12,
      responseTime: '2.3 minutes',
      accuracyRate: 96.7,
      automatedResponse: 78.9,
      analystWorkload: 'MODERATE'
    }
  });

  const [networkPerformance, setNetworkPerformance] = useState([
    {
      timestamp: new Date(Date.now() - 300000).toLocaleTimeString(),
      latency: 24.3,
      throughput: 834.7,
      packetLoss: 0.02,
      errors: 12,
      availability: 99.97
    },
    {
      timestamp: new Date(Date.now() - 240000).toLocaleTimeString(),
      latency: 23.8,
      throughput: 856.2,
      packetLoss: 0.01,
      errors: 8,
      availability: 99.98
    },
    {
      timestamp: new Date(Date.now() - 180000).toLocaleTimeString(),
      latency: 22.9,
      throughput: 847.9,
      packetLoss: 0.03,
      errors: 15,
      availability: 99.96
    },
    {
      timestamp: new Date(Date.now() - 120000).toLocaleTimeString(),
      latency: 25.1,
      throughput: 823.4,
      packetLoss: 0.02,
      errors: 11,
      availability: 99.97
    },
    {
      timestamp: new Date(Date.now() - 60000).toLocaleTimeString(),
      latency: 23.7,
      throughput: 847.3,
      packetLoss: 0.01,
      errors: 6,
      availability: 99.98
    },
    {
      timestamp: new Date().toLocaleTimeString(),
      latency: 23.7,
      throughput: 847.3,
      packetLoss: 0.01,
      errors: 6,
      availability: 99.98
    }
  ]);

  const [nocAlerts, setNocAlerts] = useState([
    {
      alertId: 'NOC-2026-003847',
      severity: 'CRITICAL',
      category: 'PERFORMANCE',
      title: 'Load Balancer CPU Threshold Exceeded',
      description: 'Application Load Balancer LB-001 CPU usage at 89.4%, approaching critical threshold of 90%',
      affectedSystems: ['LB-001', 'Web Services Cluster'],
      impact: 'Potential service degradation for web applications',
      recommendation: 'Scale horizontally or redistribute load to secondary load balancer',
      assignedTo: 'NOC Engineer Thompson',
      escalationLevel: 2,
      timeToResolve: '15 minutes',
      automatedActions: ['Load balancing adjustment initiated', 'Secondary LB warming up'],
      timestamp: new Date(Date.now() - 180000)
    },
    {
      alertId: 'NOC-2026-003848',
      severity: 'WARNING',
      category: 'SECURITY',
      title: 'Unusual Traffic Pattern Detected',
      description: 'WAN segment showing 23% increase in traffic volume from Eastern European IP ranges',
      affectedSystems: ['WAN-NET-03', 'Perimeter Firewalls'],
      impact: 'Potential DDoS attack or reconnaissance activity',
      recommendation: 'Engage security team, enable enhanced monitoring, consider geo-blocking',
      assignedTo: 'SOC Analyst Rodriguez',
      escalationLevel: 1,
      timeToResolve: '30 minutes',
      automatedActions: ['Enhanced logging enabled', 'Threat intel correlation started'],
      timestamp: new Date(Date.now() - 420000)
    },
    {
      alertId: 'NOC-2026-003849',
      severity: 'INFO',
      category: 'MAINTENANCE',
      title: 'Scheduled Wireless Controller Update',
      description: 'Wireless Controller WLC-001 scheduled for firmware update tonight at 02:00 GMT',
      affectedSystems: ['WLC-001', 'Campus Wireless APs'],
      impact: 'Brief wireless connectivity disruption (5-10 minutes)',
      recommendation: 'Notify affected users, ensure backup controller ready',
      assignedTo: 'NOC Engineer Chen',
      escalationLevel: 0,
      timeToResolve: '45 minutes',
      automatedActions: ['Change window scheduled', 'Backup verification complete'],
      timestamp: new Date(Date.now() - 600000)
    }
  ]);

  const [automationRules, setAutomationRules] = useState([
    {
      ruleId: 'AUTO-001',
      name: 'High CPU Auto-Scaling',
      trigger: 'CPU > 80% for 5 minutes',
      action: 'Scale out additional instances',
      successRate: 96.7,
      executionsToday: 23,
      lastExecution: '2 hours ago',
      status: 'ACTIVE'
    },
    {
      ruleId: 'AUTO-002',
      name: 'Link Failover Detection',
      trigger: 'Primary link down > 30 seconds',
      action: 'Activate backup link, notify team',
      successRate: 99.2,
      executionsToday: 1,
      lastExecution: '6 hours ago',
      status: 'ACTIVE'
    },
    {
      ruleId: 'AUTO-003',
      name: 'Security Incident Response',
      trigger: 'Critical security alert',
      action: 'Isolate affected systems, gather evidence',
      successRate: 94.3,
      executionsToday: 5,
      lastExecution: '45 minutes ago',
      status: 'ACTIVE'
    },
    {
      ruleId: 'AUTO-004',
      name: 'Performance Optimization',
      trigger: 'Latency > 50ms for 10 minutes',
      action: 'Optimize routing paths, clear buffers',
      successRate: 87.9,
      executionsToday: 12,
      lastExecution: '1 hour ago',
      status: 'ACTIVE'
    }
  ]);

  const [nocTeam, setNocTeam] = useState([
    {
      name: 'Lead Engineer Williams',
      position: 'NOC Team Lead',
      shift: 'Day Shift (08:00-20:00)',
      status: 'ACTIVE',
      location: 'NOC Floor 1',
      specialization: 'Network Architecture',
      alertsHandled: 47,
      escalationsToday: 3,
      certifications: ['CCIE', 'CISSP', 'ITIL Expert']
    },
    {
      name: 'Engineer Thompson',
      position: 'Senior Network Engineer',
      shift: 'Day Shift (08:00-20:00)',
      status: 'HANDLING_INCIDENT',
      location: 'NOC Floor 1',
      specialization: 'Performance & Capacity',
      alertsHandled: 34,
      escalationsToday: 1,
      certifications: ['CCNP', 'CISSP', 'VMware VCP']
    },
    {
      name: 'Analyst Rodriguez',
      position: 'Security Operations Analyst',
      shift: 'Day Shift (08:00-20:00)',
      status: 'MONITORING',
      location: 'SOC Integration Desk',
      specialization: 'Security & Compliance',
      alertsHandled: 28,
      escalationsToday: 2,
      certifications: ['GSEC', 'CEH', 'CISA']
    },
    {
      name: 'Engineer Chen',
      position: 'Network Operations Engineer',
      shift: 'Day Shift (08:00-20:00)',
      status: 'PREVENTIVE_MAINTENANCE',
      location: 'NOC Floor 2',
      specialization: 'Wireless & Mobility',
      alertsHandled: 19,
      escalationsToday: 0,
      certifications: ['CWNA', 'CCNA Wireless', 'ITIL Foundation']
    }
  ]);

  // Real-time NOC updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update NOC status metrics
      setNocStatus(prev => ({
        ...prev,
        onlineDevices: Math.max(15400, Math.min(15850, prev.onlineDevices + Math.floor((Math.random() - 0.3) * 20))),
        avgLatency: Math.max(15, Math.min(40, prev.avgLatency + (Math.random() - 0.5) * 3)),
        throughput: Math.max(600, Math.min(1000, prev.throughput + (Math.random() - 0.5) * 50)),
        networkUptime: Math.max(99.5, Math.min(99.99, prev.networkUptime + (Math.random() - 0.2) * 0.02)),
        securityThreats: Math.max(100, Math.min(300, prev.securityThreats + Math.floor((Math.random() - 0.7) * 10)))
      }));

      // Update network segments
      setNetworkSegments(prev => prev.map(segment => ({
        ...segment,
        throughput: Math.max(segment.throughput * 0.7, Math.min(segment.throughput * 1.3, segment.throughput + (Math.random() - 0.5) * 20)),
        latency: Math.max(5, Math.min(60, segment.latency + (Math.random() - 0.5) * 3)),
        utilization: Math.max(30, Math.min(95, segment.utilization + (Math.random() - 0.5) * 5))
      })));

      // Update critical infrastructure metrics
      setCriticalInfrastructure(prev => prev.map(device => ({
        ...device,
        cpuUsage: Math.max(5, Math.min(95, device.cpuUsage + (Math.random() - 0.5) * 8)),
        memoryUsage: Math.max(20, Math.min(90, device.memoryUsage + (Math.random() - 0.5) * 5)),
        temperature: Math.max(25, Math.min(75, device.temperature + (Math.random() - 0.5) * 3)),
        portUtilization: Math.max(30, Math.min(98, device.portUtilization + (Math.random() - 0.5) * 4))
      })));

      // Update network performance data
      const newPerformanceData = {
        timestamp: new Date().toLocaleTimeString(),
        latency: nocStatus.avgLatency,
        throughput: nocStatus.throughput,
        packetLoss: Math.max(0, Math.min(1, Math.random() * 0.05)),
        errors: Math.floor(Math.random() * 20),
        availability: nocStatus.networkUptime
      };
      
      setNetworkPerformance(prev => [...prev.slice(1), newPerformanceData]);

      // Occasionally add new NOC alerts
      if (Math.random() > 0.94) {
        const alertCategories = ['PERFORMANCE', 'SECURITY', 'CONNECTIVITY', 'MAINTENANCE'];
        const severities = ['INFO', 'WARNING', 'CRITICAL'];
        const systems = ['Core Network', 'Edge Infrastructure', 'Wireless Network', 'Security Systems'];
        
        const newAlert = {
          alertId: `NOC-2026-${Date.now().toString().slice(-6)}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          category: alertCategories[Math.floor(Math.random() * alertCategories.length)],
          title: 'Real-time Network Operations Alert',
          description: 'Automated monitoring system detected anomaly requiring attention',
          affectedSystems: [systems[Math.floor(Math.random() * systems.length)]],
          impact: 'Monitoring and assessment in progress',
          recommendation: 'NOC team investigating, automated response initiated',
          assignedTo: ['NOC Engineer Thompson', 'NOC Engineer Chen', 'SOC Analyst Rodriguez'][Math.floor(Math.random() * 3)],
          escalationLevel: Math.floor(Math.random() * 3),
          timeToResolve: ['5 minutes', '15 minutes', '30 minutes', '1 hour'][Math.floor(Math.random() * 4)],
          automatedActions: ['Alert correlation started', 'Diagnostic tools activated'],
          timestamp: new Date()
        };
        
        setNocAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [nocStatus.avgLatency, nocStatus.throughput, nocStatus.networkUptime]);

  const getStatusColor = (status) => {
    switch(status?.toUpperCase()) {
      case 'OPTIMAL': case 'OPERATIONAL': case 'ACTIVE': case 'ONLINE': return 'text-green-400';
      case 'WARNING': case 'CAUTION': case 'DEGRADED': return 'text-yellow-400';
      case 'CRITICAL': case 'DOWN': case 'OFFLINE': case 'FAILED': return 'text-red-400';
      case 'MAINTENANCE': case 'STANDBY': case 'BACKUP': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'CRITICAL': return 'bg-red-900/30 border-red-500/50 text-red-300';
      case 'WARNING': return 'bg-yellow-900/30 border-yellow-500/50 text-yellow-300';
      case 'INFO': return 'bg-blue-900/30 border-blue-500/50 text-blue-300';
      default: return 'bg-gray-900/30 border-gray-500/50 text-gray-300';
    }
  };

  const getNetworkTypeIcon = (type) => {
    switch(type) {
      case 'CORE': return <Server className="w-4 h-4" />;
      case 'EDGE': return <Cloud className="w-4 h-4" />;
      case 'WAN': return <Globe className="w-4 h-4" />;
      case 'LAN': return <Network className="w-4 h-4" />;
      case 'WIRELESS': return <Wifi className="w-4 h-4" />;
      default: return <Router className="w-4 h-4" />;
    }
  };

  const getUtilizationColor = (utilization) => {
    if (utilization >= 90) return 'text-red-400';
    if (utilization >= 75) return 'text-yellow-400';
    if (utilization >= 50) return 'text-blue-400';
    return 'text-green-400';
  };

  const deviceStatusDistribution = [
    { name: 'Online', value: 98.5, color: '#10B981' },
    { name: 'Warning', value: 1.2, color: '#F59E0B' },
    { name: 'Critical', value: 0.3, color: '#EF4444' }
  ];

  return (
    <div className="h-screen bg-black text-white p-6 overflow-hidden">
      {/* NOC Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-cyan-400 flex items-center">
            <Network className="w-8 h-8 mr-3" />
            Network Operations Center
          </h1>
          <div className="text-sm text-gray-400 flex items-center space-x-4">
            <div className="flex items-center">
              <Activity className="w-4 h-4 mr-2" />
              <span>Uptime: {nocStatus.networkUptime.toFixed(2)}%</span>
            </div>
            <div className="flex items-center">
              <Zap className="w-4 h-4 mr-2" />
              <span>Latency: {nocStatus.avgLatency.toFixed(1)}ms</span>
            </div>
            <div className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              <span>Throughput: {nocStatus.throughput.toFixed(1)} Gbps</span>
            </div>
            <div>Real-Time: {new Date().toLocaleTimeString()}</div>
          </div>
        </div>
        <p className="text-gray-300">Enterprise-grade network monitoring with single pane of glass approach, automated remediation & threat intelligence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        
        {/* Main NOC Dashboard */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Network Operations Overview */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-400 mb-4 flex items-center">
              <Monitor className="w-5 h-5 mr-2" />
              Network Operations Overview
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Total Devices</span>
                  <Router className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-blue-400">
                  {(nocStatus.totalDevices / 1000).toFixed(1)}K
                </div>
                <div className="text-sm text-gray-400">
                  <span className="text-green-400">{nocStatus.onlineDevices}</span> online
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Network Uptime</span>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div className="text-2xl font-bold text-green-400">
                  {nocStatus.networkUptime.toFixed(2)}%
                </div>
                <div className="text-sm text-gray-400">last 30 days</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Throughput</span>
                  <Activity className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-purple-400">
                  {nocStatus.throughput.toFixed(0)}
                </div>
                <div className="text-sm text-gray-400">Gbps current</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Security Threats</span>
                  <Shield className="w-4 h-4 text-red-400" />
                </div>
                <div className="text-2xl font-bold text-red-400">
                  {nocStatus.securityThreats}
                </div>
                <div className="text-sm text-gray-400">blocked today</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400 text-sm">Automation</span>
                  <Settings className="w-4 h-4 text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-orange-400">
                  {nocStatus.automationRate.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">auto-resolved</div>
              </div>
            </div>

            {/* Network Segments Status */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white mb-3">Network Segments</h3>
              {networkSegments.map((segment, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
                    <div>
                      <div className="flex items-center mb-1">
                        {getNetworkTypeIcon(segment.type)}
                        <span className="ml-2 font-bold text-white">{segment.segmentId}</span>
                      </div>
                      <div className="text-sm text-gray-400">{segment.name}</div>
                      <div className="text-xs text-gray-500">{segment.location}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Devices</div>
                      <div className="text-white font-mono">{segment.devices.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">{segment.redundancy}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Uptime</div>
                      <div className="text-green-400 font-mono">{segment.uptime.toFixed(2)}%</div>
                      <div className="text-xs text-gray-500">Last incident: {segment.lastIncident}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Throughput</div>
                      <div className="text-blue-400 font-mono">{segment.throughput.toFixed(1)} Gbps</div>
                      <div className="text-xs text-gray-500">Current load</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Latency</div>
                      <div className="text-white font-mono">{segment.latency.toFixed(1)} ms</div>
                      <div className="text-xs text-gray-500">Average RTT</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Utilization</div>
                      <div className={`font-mono ${getUtilizationColor(segment.utilization)}`}>
                        {segment.utilization.toFixed(1)}%
                      </div>
                      <div className="text-xs text-gray-500">Capacity used</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Status</div>
                      <div className={`font-semibold ${getStatusColor(segment.status)}`}>
                        {segment.status}
                      </div>
                      <div className="text-xs text-gray-500">Current state</div>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
                          segment.utilization > 85 ? 'bg-red-400' :
                          segment.utilization > 70 ? 'bg-yellow-400' :
                          'bg-green-400'
                        }`}
                        style={{width: `${segment.utilization}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Critical Infrastructure & Performance Analytics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Critical Infrastructure */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
                <Server className="w-5 h-5 mr-2" />
                Critical Infrastructure
              </h2>
              
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {criticalInfrastructure.map((device, index) => (
                  <div key={index} className="bg-gray-800 border border-gray-600 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-semibold text-white text-sm">{device.name}</span>
                        <div className="text-xs text-gray-400">{device.type} • {device.deviceId}</div>
                      </div>
                      <span className={`text-sm font-semibold ${getStatusColor(device.status)}`}>
                        {device.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                      <div className="flex justify-between">
                        <span className="text-gray-400">CPU:</span>
                        <span className={getUtilizationColor(device.cpuUsage)}>
                          {device.cpuUsage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Memory:</span>
                        <span className={getUtilizationColor(device.memoryUsage)}>
                          {device.memoryUsage.toFixed(1)}%
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Temp:</span>
                        <span className={device.temperature > 55 ? 'text-red-400' : device.temperature > 45 ? 'text-yellow-400' : 'text-green-400'}>
                          {device.temperature.toFixed(1)}°C
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Power:</span>
                        <span className="text-white">{device.powerDraw}W</span>
                      </div>
                    </div>
                    
                    <div className="text-xs text-gray-400 mb-2">
                      Uptime: <span className="text-blue-400">{device.uptime}</span>
                    </div>
                    
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Redundancy: {device.redundancyStatus}</span>
                      <span className="text-gray-500">FW: {device.firmwareVersion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Network Performance Analytics */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-purple-400 mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Performance Analytics
              </h2>
              
              <ResponsiveContainer width="100%" height={200}>
                <RechartsLineChart data={networkPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="timestamp" stroke="#9CA3AF" fontSize={10} />
                  <YAxis stroke="#9CA3AF" fontSize={10} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend />
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
                    dataKey="throughput" 
                    stroke="#3B82F6" 
                    strokeWidth={2}
                    name="Throughput (Gbps)"
                    dot={false}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="availability" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    name="Availability %"
                    dot={false}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>

              {/* Security Operations Summary */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-3">Security Operations</div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Active Hunts:</span>
                      <span className="text-green-400">{securityOperations.threatLandscape.activeThreatHunts}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Blocked Connections:</span>
                      <span className="text-red-400">{securityOperations.threatLandscape.blockedConnections.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Patch Compliance:</span>
                      <span className="text-blue-400">{securityOperations.threatLandscape.patchCompliance}%</span>
                    </div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">IDS Sensors:</span>
                      <span className="text-green-400">{securityOperations.intrusionDetection.sensorsOnline}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400">Detections Today:</span>
                      <span className="text-yellow-400">{securityOperations.intrusionDetection.detectionsToday.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Response Time:</span>
                      <span className="text-blue-400">{securityOperations.intrusionDetection.responseTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NOC Control Panel */}
        <div className="space-y-4">
          
          {/* Critical Alerts */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-red-400 mb-3 flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Critical Alerts
            </h2>
            
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {nocAlerts.slice(0, 3).map((alert) => (
                <div key={alert.alertId} className={`border rounded p-3 ${getSeverityColor(alert.severity)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-white text-sm">{alert.title}</span>
                    <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                      {alert.severity}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-2">{alert.description}</div>
                  <div className="text-xs text-blue-400 mb-2">
                    <strong>Action:</strong> {alert.recommendation}
                  </div>
                  <div className="text-xs text-gray-400 mb-1">
                    <strong>Assigned:</strong> {alert.assignedTo}
                  </div>
                  <div className="text-xs text-gray-400">{alert.timestamp.toLocaleTimeString()}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Automation Rules */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-orange-400 mb-3 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Automation Rules
            </h2>
            
            <div className="space-y-3">
              {automationRules.map((rule, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{rule.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(rule.status)}`}>
                      {rule.status}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-2">{rule.trigger}</div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Success Rate:</span>
                      <span className="text-green-400">{rule.successRate}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Today:</span>
                      <span className="text-blue-400">{rule.executionsToday}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">Last: {rule.lastExecution}</div>
                </div>
              ))}
            </div>
          </div>

          {/* NOC Team Status */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-400 mb-3 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              NOC Team
            </h2>
            
            <div className="space-y-3">
              {nocTeam.map((member, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{member.name}</span>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(member.status)}`}>
                      {member.status.replace('_', ' ')}
                    </span>
                  </div>
                  
                  <div className="text-xs text-gray-400 mb-1">{member.position}</div>
                  <div className="text-xs text-gray-500 mb-2">{member.shift}</div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Alerts:</span>
                      <span className="text-blue-400">{member.alertsHandled}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Escalations:</span>
                      <span className="text-yellow-400">{member.escalationsToday}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500">
                    Spec: {member.specialization}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Device Status Summary */}
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-green-400 mb-3 flex items-center">
              <PieChart className="w-5 h-5 mr-2" />
              Device Status
            </h2>
            
            <ResponsiveContainer width="100%" height={120}>
              <RechartsPieChart>
                <Pie
                  data={deviceStatusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={20}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {deviceStatusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff',
                    fontSize: '12px'
                  }}
                  formatter={(value) => [`${value}%`, 'Status']}
                />
              </RechartsPieChart>
            </ResponsiveContainer>
            
            <div className="space-y-1 mt-2">
              {deviceStatusDistribution.map((status, index) => (
                <div key={index} className="flex items-center justify-between text-xs">
                  <div className="flex items-center">
                    <div 
                      className="w-2 h-2 rounded-full mr-2" 
                      style={{ backgroundColor: status.color }}
                    />
                    <span className="text-gray-400">{status.name}</span>
                  </div>
                  <span className="text-white font-semibold">{status.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}