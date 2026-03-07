import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Server, HardDrive, Cpu, TrendingUp, AlertTriangle, Activity, Eye, Shield, Clock, Database, Settings, Zap } from 'lucide-react';

const DataCenterOperationsCenter = () => {
  const [datacenterMetrics, setDatacenterMetrics] = useState({
    totalServers: 2847,
    activeServers: 2734,
    cpuUtilization: 67.3, // %
    memoryUtilization: 72.4, // %
    networkThroughput: 847.3, // Gbps
    powerConsumption: 12.7, // MW
    temperature: 18.7, // celsius
    uptime: 99.97 // %
  });

  const [serverInfrastructure, setServerInfrastructure] = useState([
    {
      id: 'SRV-001',
      hostname: 'web-prod-01.dc1',
      type: 'Web Server',
      rack: 'R07-U14',
      status: 'online',
      cpu: 34.7, // utilization %
      memory: 67.3,
      storage: 45.2,
      network: 234.7, // Mbps
      temperature: 42.3,
      uptime: 127, // days
      alerts: 0
    },
    {
      id: 'SRV-002',
      hostname: 'db-cluster-03.dc1',
      type: 'Database',
      rack: 'R12-U08',
      status: 'online',
      cpu: 89.4,
      memory: 91.7,
      storage: 78.9,
      network: 567.8,
      temperature: 48.7,
      uptime: 89,
      alerts: 1
    },
    {
      id: 'SRV-003',
      hostname: 'app-worker-15.dc2',
      type: 'Application',
      rack: 'R03-U22',
      status: 'warning',
      cpu: 94.6,
      memory: 87.2,
      storage: 34.1,
      network: 123.4,
      temperature: 52.1,
      uptime: 45,
      alerts: 2
    },
    {
      id: 'SRV-004',
      hostname: 'storage-node-07.dc1',
      type: 'Storage',
      rack: 'R18-U05',
      status: 'online',
      cpu: 23.1,
      memory: 34.7,
      storage: 92.8,
      network: 1234.5,
      temperature: 38.9,
      uptime: 234,
      alerts: 0
    },
    {
      id: 'SRV-005',
      hostname: 'backup-srv-02.dc3',
      type: 'Backup',
      rack: 'R25-U12',
      status: 'maintenance',
      cpu: 0,
      memory: 0,
      storage: 0,
      network: 0,
      temperature: 24.2,
      uptime: 0,
      alerts: 0
    }
  ]);

  const [networkOperations, setNetworkOperations] = useState([
    {
      component: 'Core Router CR-01',
      status: 'operational',
      utilization: 67.3, // %
      latency: 1.2, // ms
      packetLoss: 0.001, // %
      throughput: 234.7, // Gbps
      uptime: 99.98,
      connections: 2847,
      bandwidth: 400 // Gbps capacity
    },
    {
      component: 'Distribution Switch DS-03',
      status: 'operational',
      utilization: 45.6,
      latency: 0.8,
      packetLoss: 0.002,
      throughput: 89.4,
      uptime: 99.94,
      connections: 567,
      bandwidth: 200
    },
    {
      component: 'Access Switch AS-12',
      status: 'degraded',
      utilization: 89.7,
      latency: 4.2,
      packetLoss: 0.15,
      throughput: 23.4,
      uptime: 98.76,
      connections: 234,
      bandwidth: 48
    },
    {
      component: 'Firewall FW-Primary',
      status: 'operational',
      utilization: 34.8,
      latency: 2.1,
      packetLoss: 0.003,
      throughput: 123.4,
      uptime: 99.87,
      connections: 1234,
      bandwidth: 300
    },
    {
      component: 'Load Balancer LB-01',
      status: 'operational',
      utilization: 56.7,
      latency: 1.8,
      packetLoss: 0.001,
      throughput: 156.8,
      uptime: 99.92,
      connections: 3456,
      bandwidth: 400
    }
  ]);

  const [cloudServices, setCloudServices] = useState([
    {
      service: 'Compute Instances',
      provider: 'AWS EC2',
      instances: 234,
      utilization: 67.3, // %
      cost: 12567.89, // monthly
      availability: 99.95,
      region: 'us-east-1',
      autoscaling: true
    },
    {
      service: 'Database Service',
      provider: 'AWS RDS',
      instances: 12,
      utilization: 78.9,
      cost: 4567.23,
      availability: 99.99,
      region: 'us-east-1',
      autoscaling: false
    },
    {
      service: 'Storage Service',
      provider: 'AWS S3',
      instances: 1,
      utilization: 45.6,
      cost: 2345.67,
      availability: 99.999,
      region: 'global',
      autoscaling: true
    },
    {
      service: 'CDN Service',
      provider: 'Cloudflare',
      instances: 1,
      utilization: 34.2,
      cost: 567.89,
      availability: 99.98,
      region: 'global',
      autoscaling: true
    },
    {
      service: 'Kubernetes Cluster',
      provider: 'GCP GKE',
      instances: 45,
      utilization: 89.4,
      cost: 6789.12,
      availability: 99.97,
      region: 'us-central1',
      autoscaling: true
    }
  ]);

  const [securityThreats, setSecurityThreats] = useState([
    {
      threat: 'DDoS Attack',
      severity: 'high',
      source: '142.250.*.* range',
      target: 'Load Balancer',
      status: 'mitigated',
      timestamp: new Date(),
      blocked: 23456,
      duration: '12 minutes'
    },
    {
      threat: 'Port Scan',
      severity: 'medium',
      source: '45.76.*.*',
      target: 'Web Servers',
      status: 'monitoring',
      timestamp: new Date(Date.now() - 300000),
      blocked: 567,
      duration: 'ongoing'
    },
    {
      threat: 'Malware Detection',
      severity: 'critical',
      source: 'Internal Network',
      target: 'Workstation WS-234',
      status: 'quarantined',
      timestamp: new Date(Date.now() - 600000),
      blocked: 1,
      duration: '5 minutes'
    },
    {
      threat: 'Unauthorized Access',
      severity: 'high',
      source: '192.168.1.47',
      target: 'Database Server',
      status: 'blocked',
      timestamp: new Date(Date.now() - 900000),
      blocked: 12,
      duration: '3 minutes'
    }
  ]);

  const [dataAnalytics, setDataAnalytics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      cpu: 65.8,
      memory: 70.2,
      network: 834.7,
      storage: 67.3
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      cpu: 66.4,
      memory: 71.1,
      network: 839.2,
      storage: 67.8
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      cpu: 66.8,
      memory: 71.7,
      network: 842.6,
      storage: 68.2
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      cpu: 67.1,
      memory: 72.0,
      network: 845.1,
      storage: 68.6
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      cpu: 67.2,
      memory: 72.2,
      network: 846.7,
      storage: 68.9
    },
    {
      time: new Date().toLocaleTimeString(),
      cpu: 67.3,
      memory: 72.4,
      network: 847.3,
      storage: 69.1
    }
  ]);

  const [datacenterAlerts, setDatacenterAlerts] = useState([
    {
      id: 'DC-001',
      severity: 'critical',
      type: 'High CPU Usage',
      message: 'Database server db-cluster-03.dc1 CPU utilization exceeded 90% threshold',
      timestamp: new Date(),
      status: 'active',
      component: 'Database Server',
      impact: 'high'
    },
    {
      id: 'DC-002',
      severity: 'warning',
      type: 'Network Degradation',
      message: 'Access Switch AS-12 experiencing high packet loss - investigating connection issues',
      timestamp: new Date(Date.now() - 120000),
      status: 'investigating',
      component: 'Network Infrastructure',
      impact: 'medium'
    },
    {
      id: 'DC-003',
      severity: 'info',
      type: 'Maintenance Complete',
      message: 'Scheduled maintenance on backup-srv-02.dc3 completed successfully - bringing back online',
      timestamp: new Date(Date.now() - 180000),
      status: 'resolved',
      component: 'Backup System',
      impact: 'positive'
    }
  ]);

  const [incidentResponse, setIncidentResponse] = useState([
    {
      incident: 'INC-2026-001',
      type: 'Performance Degradation',
      priority: 'P1',
      status: 'investigating',
      assignee: 'NOC Team Alpha',
      created: new Date(Date.now() - 1800000),
      eta: '15 minutes',
      affected: 'Web Services',
      users: 12456
    },
    {
      incident: 'INC-2026-002',
      type: 'Network Connectivity',
      priority: 'P2',
      status: 'monitoring',
      assignee: 'Network Team',
      created: new Date(Date.now() - 3600000),
      eta: '30 minutes',
      affected: 'Access Layer',
      users: 234
    },
    {
      incident: 'INC-2026-003',
      type: 'Security Alert',
      priority: 'P1',
      status: 'resolved',
      assignee: 'Security Team',
      created: new Date(Date.now() - 7200000),
      eta: 'Resolved',
      affected: 'Firewall',
      users: 0
    },
    {
      incident: 'INC-2026-004',
      type: 'Hardware Failure',
      priority: 'P3',
      status: 'scheduled',
      assignee: 'Hardware Team',
      created: new Date(Date.now() - 86400000),
      eta: '2 hours',
      affected: 'Storage Node',
      users: 0
    }
  ]);

  const [environmentalData, setEnvironmentalData] = useState({
    temperature: 18.7, // celsius
    humidity: 45.3, // %
    powerUsage: 12.7, // MW
    coolingEfficiency: 94.2, // %
    pue: 1.34, // Power Usage Effectiveness
    airflow: 847, // CFM
    chiller: 'optimal',
    backup_power: 'standby'
  });

  const [systemMetrics, setSystemMetrics] = useState({
    nocUptime: 99.97, // %
    monitoringSystems: 99.94,
    automationSystems: 99.89,
    ticketingSystem: 99.92,
    configurationManagement: 99.85,
    backupSystems: 98.7,
    avgResolutionTime: 12.47, // minutes
    mttr: 8.34 // minutes
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update datacenter metrics
      setDatacenterMetrics(prev => ({
        ...prev,
        activeServers: Math.max(2600, Math.min(2847, prev.activeServers + Math.floor((Math.random() - 0.5) * 5))),
        cpuUtilization: Math.max(40, Math.min(90, prev.cpuUtilization + (Math.random() - 0.5) * 3)),
        memoryUtilization: Math.max(50, Math.min(95, prev.memoryUtilization + (Math.random() - 0.5) * 2)),
        networkThroughput: Math.max(600, Math.min(1200, prev.networkThroughput + (Math.random() - 0.5) * 20)),
        powerConsumption: Math.max(10, Math.min(20, prev.powerConsumption + (Math.random() - 0.5) * 0.5)),
        temperature: Math.max(16, Math.min(25, prev.temperature + (Math.random() - 0.5) * 0.5)),
        uptime: Math.max(99.5, Math.min(100, prev.uptime + (Math.random() - 0.3) * 0.01))
      }));

      // Update server infrastructure
      setServerInfrastructure(prev => prev.map(server => {
        let newStatus = server.status;
        let newAlerts = server.alerts;
        
        // Dynamic server health changes
        const newCpu = Math.max(10, Math.min(100, server.cpu + (Math.random() - 0.5) * 10));
        const newMemory = Math.max(20, Math.min(100, server.memory + (Math.random() - 0.5) * 5));
        const newTemperature = Math.max(25, Math.min(80, server.temperature + (Math.random() - 0.5) * 2));
        
        // Status logic
        if (server.status !== 'maintenance') {
          if (newCpu > 95 || newMemory > 95 || newTemperature > 70) {
            newStatus = 'warning';
            newAlerts = Math.max(0, newAlerts + Math.floor(Math.random() * 2));
          } else if (newCpu < 85 && newMemory < 85 && newTemperature < 60) {
            newStatus = 'online';
            newAlerts = Math.max(0, newAlerts - 1);
          }
        }
        
        return {
          ...server,
          status: newStatus,
          cpu: newCpu,
          memory: newMemory,
          storage: Math.max(10, Math.min(100, server.storage + (Math.random() - 0.5) * 2)),
          network: Math.max(50, Math.min(2000, server.network + (Math.random() - 0.5) * 50)),
          temperature: newTemperature,
          alerts: newAlerts,
          uptime: server.status === 'online' || server.status === 'warning' ? server.uptime + (1/1440) : 0 // increment by minutes
        };
      }));

      // Update network operations
      setNetworkOperations(prev => prev.map(network => {
        const newUtilization = Math.max(20, Math.min(100, network.utilization + (Math.random() - 0.5) * 5));
        let newStatus = network.status;
        let newLatency = network.latency;
        let newPacketLoss = network.packetLoss;
        
        if (newUtilization > 85) {
          newStatus = 'degraded';
          newLatency = Math.max(network.latency, network.latency + Math.random() * 2);
          newPacketLoss = Math.max(network.packetLoss, network.packetLoss + Math.random() * 0.1);
        } else if (newUtilization < 70) {
          newStatus = 'operational';
          newLatency = Math.max(0.5, network.latency + (Math.random() - 0.5) * 0.3);
          newPacketLoss = Math.max(0.001, network.packetLoss + (Math.random() - 0.5) * 0.01);
        }
        
        return {
          ...network,
          status: newStatus,
          utilization: newUtilization,
          latency: newLatency,
          packetLoss: newPacketLoss,
          throughput: Math.max(10, Math.min(network.bandwidth * 0.9, network.throughput + (Math.random() - 0.5) * 20)),
          connections: Math.max(Math.floor(network.connections * 0.8), Math.min(Math.floor(network.connections * 1.2), network.connections + Math.floor((Math.random() - 0.5) * 100)))
        };
      }));

      // Update cloud services
      setCloudServices(prev => prev.map(service => ({
        ...service,
        utilization: Math.max(20, Math.min(100, service.utilization + (Math.random() - 0.5) * 5)),
        cost: service.cost + (Math.random() - 0.5) * 100,
        availability: Math.max(99.5, Math.min(100, service.availability + (Math.random() - 0.5) * 0.01))
      })));

      // Update environmental data
      setEnvironmentalData(prev => ({
        ...prev,
        temperature: Math.max(16, Math.min(25, prev.temperature + (Math.random() - 0.5) * 0.3)),
        humidity: Math.max(30, Math.min(60, prev.humidity + (Math.random() - 0.5) * 2)),
        powerUsage: Math.max(10, Math.min(20, prev.powerUsage + (Math.random() - 0.5) * 0.2)),
        coolingEfficiency: Math.max(90, Math.min(98, prev.coolingEfficiency + (Math.random() - 0.5) * 1)),
        pue: Math.max(1.2, Math.min(2.0, prev.pue + (Math.random() - 0.5) * 0.05)),
        airflow: Math.max(600, Math.min(1200, prev.airflow + (Math.random() - 0.5) * 20))
      }));

      // Update data analytics
      const newDatacenterData = {
        time: new Date().toLocaleTimeString(),
        cpu: datacenterMetrics.cpuUtilization,
        memory: datacenterMetrics.memoryUtilization,
        network: datacenterMetrics.networkThroughput / 10, // Scale for chart
        storage: 69.1 + (Math.random() - 0.5) * 2 // Simulated storage metric
      };
      
      setDataAnalytics(prev => [...prev.slice(1), newDatacenterData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        nocUptime: Math.max(99.5, Math.min(100, prev.nocUptime + (Math.random() - 0.3) * 0.01)),
        monitoringSystems: Math.max(99.5, Math.min(100, prev.monitoringSystems + (Math.random() - 0.3) * 0.01)),
        avgResolutionTime: Math.max(5, Math.min(30, prev.avgResolutionTime + (Math.random() - 0.5) * 2)),
        mttr: Math.max(3, Math.min(20, prev.mttr + (Math.random() - 0.5) * 1))
      }));

      // Occasionally add new datacenter alerts
      if (Math.random() > 0.93) {
        const alertTypes = ['High CPU Usage', 'Memory Pressure', 'Network Degradation', 'Storage Alert', 'Temperature Warning'];
        const severities = ['info', 'warning', 'critical'];
        const components = ['Server Infrastructure', 'Network Equipment', 'Storage Systems', 'Environmental', 'Power Systems'];
        
        const newAlert = {
          id: `DC-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time data center operations alert generated',
          timestamp: new Date(),
          status: 'active',
          component: components[Math.floor(Math.random() * components.length)],
          impact: ['low', 'medium', 'high', 'positive'][Math.floor(Math.random() * 4)]
        };
        
        setDatacenterAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [datacenterMetrics.cpuUtilization, datacenterMetrics.memoryUtilization, datacenterMetrics.networkThroughput]);

  const getServerStatusColor = (status) => {
    switch (status) {
      case 'online': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'maintenance': return '#8B5CF6';
      case 'offline': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getNetworkStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'degraded': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'maintenance': return '#8B5CF6';
      case 'offline': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getThreatSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'high': return '#F59E0B';
      case 'medium': return '#3B82F6';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getIncidentPriorityColor = (priority) => {
    switch (priority) {
      case 'P1': return '#EF4444';
      case 'P2': return '#F59E0B';
      case 'P3': return '#3B82F6';
      case 'P4': return '#10B981';
      default: return '#6B7280';
    }
  };

  const resourceDistribution = [
    { name: 'Compute', value: 45.7, color: '#3B82F6' },
    { name: 'Storage', value: 28.4, color: '#10B981' },
    { name: 'Network', value: 15.3, color: '#8B5CF6' },
    { name: 'Database', value: 7.2, color: '#F59E0B' },
    { name: 'Backup', value: 3.4, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Server className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">DATA CENTER OPERATIONS CENTER</h1>
            <p className="text-gray-400">Network operations monitoring, server infrastructure management, cloud computing environments, security threat analysis & automated incident resolution</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">
              {datacenterMetrics.totalServers}
            </div>
            <div className="text-xs text-gray-400">SERVERS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">
              {datacenterMetrics.cpuUtilization.toFixed(1)}%
            </div>
            <div className="text-xs text-gray-400">CPU</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{datacenterMetrics.uptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">UPTIME</div>
          </div>
        </div>
      </div>

      {/* Data Center KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Cpu className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">MEMORY</span>
          </div>
          <div className="text-xl font-bold text-white">{datacenterMetrics.memoryUtilization.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Usage</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">NETWORK</span>
          </div>
          <div className="text-xl font-bold text-white">{(datacenterMetrics.networkThroughput / 1000).toFixed(1)}T</div>
          <div className="text-xs text-gray-400">bps</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">POWER</span>
          </div>
          <div className="text-xl font-bold text-white">{datacenterMetrics.powerConsumption.toFixed(1)}MW</div>
          <div className="text-xs text-gray-400">Usage</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <HardDrive className="w-5 h-5 text-cyan-400" />
            <span className="text-xs text-gray-400">ACTIVE</span>
          </div>
          <div className="text-xl font-bold text-white">{datacenterMetrics.activeServers}</div>
          <div className="text-xs text-gray-400">Servers</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Settings className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">TEMP</span>
          </div>
          <div className="text-xl font-bold text-white">{datacenterMetrics.temperature.toFixed(1)}°C</div>
          <div className="text-xs text-gray-400">Ambient</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Database className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">NOC UPTIME</span>
          </div>
          <div className="text-xl font-bold text-white">{systemMetrics.nocUptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">System</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Server Infrastructure */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Server className="w-5 h-5 mr-2 text-blue-400" />
            SERVER INFRASTRUCTURE
          </h3>
          <div className="space-y-3">
            {serverInfrastructure.map(server => (
              <div key={server.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getServerStatusColor(server.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{server.hostname}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getServerStatusColor(server.status)}20`, 
                      color: getServerStatusColor(server.status) 
                    }}>
                      {server.status.toUpperCase()}
                    </span>
                    {server.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {server.alerts} Alert{server.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  Type: <span className="text-purple-400">{server.type}</span> • 
                  Rack: <span className="text-blue-400">{server.rack}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU</span>
                    <span className="text-green-400">{server.cpu.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory</span>
                    <span className="text-blue-400">{server.memory.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage</span>
                    <span className="text-purple-400">{server.storage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network</span>
                    <span className="text-white">{server.network.toFixed(0)} Mbps</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Temp: {server.temperature.toFixed(1)}°C
                  </span>
                  <span className="text-gray-500">
                    Uptime: {server.uptime.toFixed(0)}d
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 mr-2 text-green-400" />
            NETWORK OPERATIONS
          </h3>
          <div className="space-y-3">
            {networkOperations.map((network, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getNetworkStatusColor(network.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{network.component}</span>
                  <span className="text-xs px-2 py-1 rounded-full" style={{ 
                    backgroundColor: `${getNetworkStatusColor(network.status)}20`, 
                    color: getNetworkStatusColor(network.status) 
                  }}>
                    {network.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Utilization</span>
                    <span className="text-blue-400">{network.utilization.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Throughput</span>
                    <span className="text-purple-400">{network.throughput.toFixed(1)} Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-green-400">{network.latency.toFixed(1)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Connections</span>
                    <span className="text-white">{network.connections.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Packet Loss: {network.packetLoss.toFixed(3)}%
                  </span>
                  <span className="text-gray-500">
                    Uptime: {network.uptime.toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud Services & Security */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 mr-2 text-purple-400" />
            CLOUD SERVICES & SECURITY
          </h3>
          <div className="space-y-3 mb-4">
            {cloudServices.slice(0, 4).map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{service.service}</span>
                  <span className="text-xs text-blue-400">{service.provider}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Instances</span>
                    <span className="text-green-400">{service.instances}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Utilization</span>
                    <span className="text-blue-400">{service.utilization.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cost</span>
                    <span className="text-purple-400">${(service.cost / 1000).toFixed(1)}K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Availability</span>
                    <span className="text-white">{service.availability.toFixed(2)}%</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">
                    Region: {service.region}
                  </span>
                  <span className="text-gray-500">
                    {service.autoscaling ? 'Auto-scaling' : 'Fixed'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Security Threats */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Security Threats</div>
            <div className="space-y-2">
              {securityThreats.slice(0, 3).map((threat, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getThreatSeverityColor(threat.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{threat.threat}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getThreatSeverityColor(threat.severity)}20`, 
                      color: getThreatSeverityColor(threat.severity) 
                    }}>
                      {threat.severity.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    Target: {threat.target} • Source: {threat.source}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">Status: {threat.status}</span>
                    <span className="text-gray-500">Blocked: {threat.blocked.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Incident Response */}
          <div className="border-t border-gray-700 pt-3 mt-3">
            <div className="text-sm text-white font-semibold mb-2">Active Incidents</div>
            <div className="space-y-2">
              {incidentResponse.slice(0, 2).map((incident, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-blue-400">{incident.incident}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getIncidentPriorityColor(incident.priority)}20`, 
                      color: getIncidentPriorityColor(incident.priority) 
                    }}>
                      {incident.priority}
                    </span>
                  </div>
                  <div className="text-xs text-gray-300 mb-1">
                    {incident.type} • {incident.assignee}
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-green-400">ETA: {incident.eta}</span>
                    <span className="text-gray-500">Users: {incident.users.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Data Center Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Data Center Analytics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME INFRASTRUCTURE METRICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataAnalytics}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="left" stroke="#9CA3AF" fontSize={12} />
              <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" fontSize={12} />
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
                yAxisId="left"
                type="monotone" 
                dataKey="cpu" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="CPU Utilization %"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="memory" 
                stroke="#10B981" 
                strokeWidth={2}
                name="Memory Utilization %"
                dot={false}
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="storage" 
                stroke="#8B5CF6" 
                strokeWidth={2}
                name="Storage Utilization %"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="network" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Network (x10 Gbps)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Resource Distribution & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">RESOURCE DISTRIBUTION & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={resourceDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {resourceDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Resource Type']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-2">
              {resourceDistribution.map((resource, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: resource.color }}
                    />
                    <span className="text-gray-400 text-sm">{resource.name}</span>
                  </div>
                  <span className="text-white font-semibold">{resource.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">NOC System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">NOC Uptime</span>
                    <span className="text-green-400">{systemMetrics.nocUptime.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Monitoring</span>
                    <span className="text-blue-400">{systemMetrics.monitoringSystems.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Resolution Time</span>
                    <span className="text-purple-400">{systemMetrics.avgResolutionTime.toFixed(1)}min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">MTTR</span>
                    <span className="text-green-400">{systemMetrics.mttr.toFixed(1)}min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Environmental Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white font-semibold">Environmental Systems</span>
              <span className="text-xs text-blue-400">PUE: {environmentalData.pue.toFixed(2)}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-400">Temperature</span>
                  <span className="text-xs text-green-400">{environmentalData.temperature.toFixed(1)}°C</span>
                </div>
                <div className="text-xs text-gray-300">
                  Humidity: {environmentalData.humidity.toFixed(1)}% • Cooling: {environmentalData.coolingEfficiency.toFixed(1)}%
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-blue-400">Power Usage</span>
                  <span className="text-xs text-green-400">{environmentalData.powerUsage.toFixed(1)}MW</span>
                </div>
                <div className="text-xs text-gray-300">
                  Airflow: {environmentalData.airflow.toFixed(0)} CFM • Backup: {environmentalData.backup_power}
                </div>
              </div>
            </div>
          </div>
          
          {/* Data Center Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Data Center Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Server className="w-3 h-3 inline mr-1" />
                  Servers
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Activity className="w-3 h-3 inline mr-1" />
                  Network
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Security
                </button>
              </div>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="text-sm text-white font-semibold mb-2">Active Alerts</div>
            <div className="space-y-2">
              {datacenterAlerts.slice(0, 2).map(alert => (
                <div key={alert.id} className="bg-gray-800 rounded-lg p-2 border-l-2" style={{ borderLeftColor: getAlertSeverityColor(alert.severity) }}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium text-white">{alert.type}</span>
                    <span className="text-xs px-1 py-0.5 rounded-full" style={{ 
                      backgroundColor: `${getAlertSeverityColor(alert.severity)}20`, 
                      color: getAlertSeverityColor(alert.severity) 
                    }}>
                      {alert.severity.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-300 mb-1">{alert.message}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-400">{alert.component}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterOperationsCenter;