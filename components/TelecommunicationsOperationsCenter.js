import React, { useState, useEffect } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Radio, Signal, Wifi, Smartphone, TrendingUp, AlertTriangle, CheckCircle, Activity, Settings, Eye, Router, Antenna } from 'lucide-react';

const TelecommunicationsOperationsCenter = () => {
  const [networkStatus, setNetworkStatus] = useState({
    totalSubscribers: 12847563,
    activeConnections: 9234521,
    networkUptime: 99.97,
    avgThroughput: 2847.3, // Gbps
    call5GCoverage: 89.4, // %
    dataTraffic: 18647.2, // TB/day
    serviceQuality: 98.2, // %
    incidentCount: 7
  });

  const [cellTowerOperations, setCellTowerOperations] = useState([
    {
      id: 'TOWER-001',
      location: 'Downtown Hub Alpha',
      type: '5G NR',
      coordinates: '40.7128°N 74.0060°W',
      status: 'operational',
      coverage: 95.7, // %
      connectedUsers: 8947,
      capacity: 12000,
      signalStrength: -67, // dBm
      throughput: 3.4, // Gbps
      bands: ['n78 (3.5GHz)', 'n41 (2.5GHz)', 'n71 (600MHz)'],
      backhaul: 'fiber',
      temperature: 34.2, // °C
      powerLevel: 87.3 // %
    },
    {
      id: 'TOWER-002',
      location: 'Suburban Site Beta',
      type: '4G LTE',
      coordinates: '40.7589°N 73.9851°W',
      status: 'operational',
      coverage: 92.1,
      connectedUsers: 6234,
      capacity: 8000,
      signalStrength: -71,
      throughput: 1.8,
      bands: ['B2 (1900MHz)', 'B12 (700MHz)', 'B66 (AWS)'],
      backhaul: 'fiber',
      temperature: 31.8,
      powerLevel: 91.2
    },
    {
      id: 'TOWER-003',
      location: 'Industrial Zone Gamma',
      type: '5G NR',
      coordinates: '40.6892°N 74.0445°W',
      status: 'maintenance',
      coverage: 78.4,
      connectedUsers: 2847,
      capacity: 10000,
      signalStrength: -78,
      throughput: 2.1,
      bands: ['n78 (3.5GHz)', 'n260 (28GHz)'],
      backhaul: 'microwave',
      temperature: 39.1,
      powerLevel: 62.7
    },
    {
      id: 'TOWER-004',
      location: 'University Campus Delta',
      type: '5G NR',
      coordinates: '40.7505°N 73.9934°W',
      status: 'operational',
      coverage: 97.2,
      connectedUsers: 11234,
      capacity: 15000,
      signalStrength: -65,
      throughput: 4.1,
      bands: ['n78 (3.5GHz)', 'n41 (2.5GHz)', 'n260 (28GHz)'],
      backhaul: 'fiber',
      temperature: 33.6,
      powerLevel: 93.8
    },
    {
      id: 'TOWER-005',
      location: 'Highway Corridor Epsilon',
      type: '4G LTE',
      coordinates: '40.7282°N 73.7949°W',
      status: 'degraded',
      coverage: 86.3,
      connectedUsers: 4567,
      capacity: 7000,
      signalStrength: -74,
      throughput: 1.2,
      bands: ['B2 (1900MHz)', 'B4 (AWS)', 'B12 (700MHz)'],
      backhaul: 'fiber',
      temperature: 41.7,
      powerLevel: 78.9
    }
  ]);

  const [nocMonitoring, setNocMonitoring] = useState([
    {
      id: 'NOC-CORE-001',
      system: 'Core Network',
      component: '5G SA Core',
      status: 'operational',
      cpu: 34.7, // %
      memory: 67.2, // %
      connections: 2847561,
      throughput: 12.4, // Gbps
      latency: 12.3, // ms
      packetLoss: 0.002, // %
      alerts: 0,
      lastUpdate: new Date()
    },
    {
      id: 'NOC-RAN-001',
      system: 'Radio Access Network',
      component: '5G gNodeB',
      status: 'operational',
      cpu: 28.9,
      memory: 54.3,
      connections: 1234567,
      throughput: 8.7,
      latency: 8.9,
      packetLoss: 0.001,
      alerts: 0,
      lastUpdate: new Date()
    },
    {
      id: 'NOC-TRANS-001',
      system: 'Transport Network',
      component: 'Optical Transport',
      status: 'warning',
      cpu: 67.8,
      memory: 89.2,
      connections: 0,
      throughput: 45.6,
      latency: 2.1,
      packetLoss: 0.008,
      alerts: 2,
      lastUpdate: new Date()
    },
    {
      id: 'NOC-IMS-001',
      system: 'IMS Core',
      component: 'Voice over LTE',
      status: 'operational',
      cpu: 42.1,
      memory: 71.8,
      connections: 456789,
      throughput: 3.4,
      latency: 45.2,
      packetLoss: 0.003,
      alerts: 0,
      lastUpdate: new Date()
    },
    {
      id: 'NOC-BSS-001',
      system: 'BSS/OSS',
      component: 'Billing & Operations',
      status: 'operational',
      cpu: 51.6,
      memory: 76.4,
      connections: 12847563,
      throughput: 1.8,
      latency: 156.7,
      packetLoss: 0.001,
      alerts: 1,
      lastUpdate: new Date()
    }
  ]);

  const [serviceQualityMetrics, setServiceQualityMetrics] = useState([
    {
      time: new Date(Date.now() - 300000).toLocaleTimeString(),
      callSuccess: 98.9,
      dataSpeed: 2834.2,
      latency: 11.8,
      availability: 99.96
    },
    {
      time: new Date(Date.now() - 240000).toLocaleTimeString(),
      callSuccess: 98.7,
      dataSpeed: 2841.8,
      latency: 12.1,
      availability: 99.95
    },
    {
      time: new Date(Date.now() - 180000).toLocaleTimeString(),
      callSuccess: 98.8,
      dataSpeed: 2845.6,
      latency: 11.9,
      availability: 99.97
    },
    {
      time: new Date(Date.now() - 120000).toLocaleTimeString(),
      callSuccess: 99.1,
      dataSpeed: 2846.3,
      latency: 12.0,
      availability: 99.96
    },
    {
      time: new Date(Date.now() - 60000).toLocaleTimeString(),
      callSuccess: 99.0,
      dataSpeed: 2847.2,
      latency: 12.2,
      availability: 99.97
    },
    {
      time: new Date().toLocaleTimeString(),
      callSuccess: 98.2,
      dataSpeed: 2847.3,
      latency: 12.3,
      availability: 99.97
    }
  ]);

  const [telecomAlerts, setTelecomAlerts] = useState([
    {
      id: 'TEL-001',
      severity: 'warning',
      type: 'High CPU Usage',
      message: 'Optical Transport system CPU utilization at 67.8% - monitoring closely',
      timestamp: new Date(),
      status: 'active',
      location: 'Transport Network',
      impact: 'medium'
    },
    {
      id: 'TEL-002',
      severity: 'caution',
      type: 'Signal Degradation',
      message: 'Highway Corridor tower experiencing reduced signal quality',
      timestamp: new Date(Date.now() - 180000),
      status: 'investigating',
      location: 'TOWER-005',
      impact: 'low'
    },
    {
      id: 'TEL-003',
      severity: 'info',
      type: 'Maintenance Complete',
      message: '5G NR upgrade completed successfully at Industrial Zone site',
      timestamp: new Date(Date.now() - 360000),
      status: 'resolved',
      location: 'TOWER-003',
      impact: 'positive'
    }
  ]);

  const [trafficAnalysis, setTrafficAnalysis] = useState([
    {
      region: 'Metropolitan Core',
      subscribers: 4234567,
      dataUsage: 6847.3, // TB/day
      callMinutes: 2847563,
      smsCount: 1234567,
      avgSpeed: 287.4, // Mbps
      satisfaction: 96.8
    },
    {
      region: 'Suburban Areas',
      subscribers: 3456789,
      dataUsage: 4532.1,
      callMinutes: 1987654,
      smsCount: 987654,
      avgSpeed: 234.7,
      satisfaction: 94.2
    },
    {
      region: 'Industrial Zones',
      subscribers: 1892345,
      dataUsage: 2847.6,
      callMinutes: 1123456,
      smsCount: 567890,
      avgSpeed: 198.3,
      satisfaction: 92.1
    },
    {
      region: 'University Districts',
      subscribers: 2234567,
      dataUsage: 3456.7,
      callMinutes: 1456789,
      smsCount: 789012,
      avgSpeed: 312.8,
      satisfaction: 97.5
    },
    {
      region: 'Highway Corridors',
      subscribers: 1029895,
      dataUsage: 963.5,
      callMinutes: 678901,
      smsCount: 345678,
      avgSpeed: 156.2,
      satisfaction: 89.7
    }
  ]);

  const [nocTeam, setNocTeam] = useState([
    {
      name: 'NOC Manager Chen',
      position: 'Network Operations Manager',
      shift: 'Day Shift',
      status: 'on-duty',
      location: 'Primary NOC',
      experience: '16 years'
    },
    {
      name: '5G Specialist Rodriguez',
      position: '5G Network Specialist',
      shift: 'Day Shift',
      status: 'monitoring',
      location: '5G Control Center',
      experience: '8 years'
    },
    {
      name: 'Transport Engineer Kim',
      position: 'Transport Network Engineer',
      shift: 'Day Shift',
      status: 'investigating',
      location: 'Transport NOC',
      experience: '12 years'
    },
    {
      name: 'QoS Analyst Williams',
      position: 'Quality of Service Analyst',
      shift: 'Day Shift',
      status: 'analyzing',
      location: 'QoS Center',
      experience: '10 years'
    }
  ]);

  const [systemMetrics, setSystemMetrics] = useState({
    networkReliability: 99.97,
    aiopsIntegration: 94.3, // AIOps automation level
    securityCompliance: 98.7,
    energyEfficiency: 91.2,
    capacityUtilization: 76.8,
    automationLevel: 88.4,
    predictiveMaintenance: 92.6,
    customerSatisfaction: 96.3
  });

  // Real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Update network status
      setNetworkStatus(prev => ({
        ...prev,
        activeConnections: Math.max(8000000, Math.min(10000000, prev.activeConnections + Math.floor((Math.random() - 0.5) * 50000))),
        avgThroughput: Math.max(2500, Math.min(3500, prev.avgThroughput + (Math.random() - 0.5) * 50)),
        call5GCoverage: Math.max(85, Math.min(95, prev.call5GCoverage + (Math.random() - 0.5) * 0.5)),
        dataTraffic: Math.max(15000, Math.min(25000, prev.dataTraffic + (Math.random() - 0.5) * 500)),
        serviceQuality: Math.max(95, Math.min(99.5, prev.serviceQuality + (Math.random() - 0.5) * 0.3)),
        incidentCount: Math.max(3, Math.min(15, prev.incidentCount + Math.floor((Math.random() - 0.7) * 2)))
      }));

      // Update cell tower operations
      setCellTowerOperations(prev => prev.map(tower => {
        if (tower.status === 'operational') {
          return {
            ...tower,
            connectedUsers: Math.max(tower.capacity * 0.2, Math.min(tower.capacity * 0.9, tower.connectedUsers + Math.floor((Math.random() - 0.5) * 500))),
            coverage: Math.max(85, Math.min(98, tower.coverage + (Math.random() - 0.5) * 2)),
            throughput: Math.max(tower.throughput * 0.7, Math.min(tower.throughput * 1.3, tower.throughput + (Math.random() - 0.5) * 0.3)),
            signalStrength: Math.max(-85, Math.min(-60, tower.signalStrength + Math.floor((Math.random() - 0.5) * 3))),
            temperature: Math.max(25, Math.min(50, tower.temperature + (Math.random() - 0.5) * 2)),
            powerLevel: Math.max(70, Math.min(100, tower.powerLevel + (Math.random() - 0.5) * 2))
          };
        }
        return tower;
      }));

      // Update NOC monitoring
      setNocMonitoring(prev => prev.map(system => ({
        ...system,
        cpu: Math.max(20, Math.min(80, system.cpu + (Math.random() - 0.5) * 5)),
        memory: Math.max(40, Math.min(90, system.memory + (Math.random() - 0.5) * 3)),
        connections: system.component === 'Billing & Operations' ? system.connections : Math.max(system.connections * 0.8, Math.min(system.connections * 1.2, system.connections + Math.floor((Math.random() - 0.5) * 10000))),
        throughput: Math.max(system.throughput * 0.8, Math.min(system.throughput * 1.2, system.throughput + (Math.random() - 0.5) * 1)),
        latency: Math.max(system.latency * 0.5, Math.min(system.latency * 1.5, system.latency + (Math.random() - 0.5) * 2)),
        packetLoss: Math.max(0.001, Math.min(0.01, system.packetLoss + (Math.random() - 0.5) * 0.001)),
        lastUpdate: new Date()
      })));

      // Update service quality metrics
      const newQualityData = {
        time: new Date().toLocaleTimeString(),
        callSuccess: networkStatus.serviceQuality,
        dataSpeed: networkStatus.avgThroughput,
        latency: 10 + Math.random() * 5,
        availability: networkStatus.networkUptime
      };
      
      setServiceQualityMetrics(prev => [...prev.slice(1), newQualityData]);

      // Update system metrics
      setSystemMetrics(prev => ({
        ...prev,
        networkReliability: Math.max(99.9, Math.min(100, prev.networkReliability + (Math.random() - 0.5) * 0.01)),
        aiopsIntegration: Math.max(90, Math.min(98, prev.aiopsIntegration + (Math.random() - 0.5) * 0.5)),
        securityCompliance: Math.max(95, Math.min(100, prev.securityCompliance + (Math.random() - 0.5) * 0.2)),
        energyEfficiency: Math.max(85, Math.min(95, prev.energyEfficiency + (Math.random() - 0.5) * 0.3))
      }));

      // Occasionally add new telecom alerts
      if (Math.random() > 0.96) {
        const alertTypes = ['High CPU Usage', 'Signal Degradation', 'Network Congestion', 'Equipment Status'];
        const severities = ['info', 'caution', 'warning', 'critical'];
        const locations = ['Core Network', '5G Sites', 'Transport Network', 'BSS Systems', 'Radio Access'];
        
        const newAlert = {
          id: `TEL-${Date.now()}`,
          severity: severities[Math.floor(Math.random() * severities.length)],
          type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
          message: 'Real-time telecommunications operations alert',
          timestamp: new Date(),
          status: 'active',
          location: locations[Math.floor(Math.random() * locations.length)],
          impact: ['low', 'medium', 'high'][Math.floor(Math.random() * 3)]
        };
        
        setTelecomAlerts(prev => [newAlert, ...prev.slice(0, 9)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [networkStatus.serviceQuality, networkStatus.avgThroughput, networkStatus.networkUptime]);

  const getTowerStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'maintenance': return '#8B5CF6';
      case 'degraded': return '#F59E0B';
      case 'offline': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getNocStatusColor = (status) => {
    switch (status) {
      case 'operational': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'critical': return '#EF4444';
      case 'maintenance': return '#8B5CF6';
      default: return '#6B7280';
    }
  };

  const getAlertSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#EF4444';
      case 'warning': return '#F59E0B';
      case 'caution': return '#3B82F6';
      case 'info': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getNetworkTypeColor = (type) => {
    switch (type) {
      case '5G NR': return '#8B5CF6';
      case '4G LTE': return '#3B82F6';
      case '3G UMTS': return '#F59E0B';
      default: return '#6B7280';
    }
  };

  const networkTechnologyDistribution = [
    { name: '5G NR', value: 45.2, color: '#8B5CF6' },
    { name: '4G LTE', value: 48.7, color: '#3B82F6' },
    { name: '3G UMTS', value: 5.8, color: '#F59E0B' },
    { name: 'Other', value: 0.3, color: '#6B7280' }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
        <div className="flex items-center space-x-3">
          <Radio className="w-8 h-8 text-blue-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">TELECOMMUNICATIONS OPERATIONS CENTER</h1>
            <p className="text-gray-400">Network Operations NOC, 5G/fiber monitoring, service quality, security & incident management</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{networkStatus.networkUptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">UPTIME</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{(networkStatus.activeConnections / 1000000).toFixed(1)}M</div>
            <div className="text-xs text-gray-400">CONNECTIONS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{networkStatus.avgThroughput.toFixed(1)}</div>
            <div className="text-xs text-gray-400">GBPS</div>
          </div>
        </div>
      </div>

      {/* Telecommunications KPIs */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Smartphone className="w-5 h-5 text-green-400" />
            <span className="text-xs text-gray-400">SUBSCRIBERS</span>
          </div>
          <div className="text-xl font-bold text-white">{(networkStatus.totalSubscribers / 1000000).toFixed(1)}M</div>
          <div className="text-xs text-gray-400">Total</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Signal className="w-5 h-5 text-purple-400" />
            <span className="text-xs text-gray-400">5G COVERAGE</span>
          </div>
          <div className="text-xl font-bold text-white">{networkStatus.call5GCoverage.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Population</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <Activity className="w-5 h-5 text-yellow-400" />
            <span className="text-xs text-gray-400">DATA TRAFFIC</span>
          </div>
          <div className="text-xl font-bold text-white">{(networkStatus.dataTraffic / 1000).toFixed(1)}</div>
          <div className="text-xs text-gray-400">PB/day</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <CheckCircle className="w-5 h-5 text-blue-400" />
            <span className="text-xs text-gray-400">SERVICE QUALITY</span>
          </div>
          <div className="text-xl font-bold text-white">{networkStatus.serviceQuality.toFixed(1)}%</div>
          <div className="text-xs text-gray-400">KPI Score</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-xs text-gray-400">INCIDENTS</span>
          </div>
          <div className="text-xl font-bold text-white">{networkStatus.incidentCount}</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-orange-400" />
            <span className="text-xs text-gray-400">CAPACITY</span>
          </div>
          <div className="text-xl font-bold text-white">{((networkStatus.activeConnections / networkStatus.totalSubscribers) * 100).toFixed(1)}%</div>
          <div className="text-xs text-gray-400">Utilization</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Cell Tower Operations */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Antenna className="w-5 h-5 mr-2 text-purple-400" />
            CELL TOWER OPERATIONS
          </h3>
          <div className="space-y-3">
            {cellTowerOperations.map(tower => (
              <div key={tower.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getTowerStatusColor(tower.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{tower.id}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getNetworkTypeColor(tower.type)}20`, 
                      color: getNetworkTypeColor(tower.type) 
                    }}>
                      {tower.type}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getTowerStatusColor(tower.status)}20`, 
                      color: getTowerStatusColor(tower.status) 
                    }}>
                      {tower.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  {tower.location}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Users</span>
                    <span className="text-green-400">{tower.connectedUsers.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Capacity</span>
                    <span className="text-blue-400">{tower.capacity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Coverage</span>
                    <span className="text-purple-400">{tower.coverage.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Signal</span>
                    <span className="text-white">{tower.signalStrength} dBm</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-300 mb-2">
                  Throughput: <span className="text-cyan-400">{tower.throughput.toFixed(1)} Gbps</span>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Temp: {tower.temperature.toFixed(1)}°C</span>
                  <span className="text-gray-500">Power: {tower.powerLevel.toFixed(1)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NOC Monitoring */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Router className="w-5 h-5 mr-2 text-blue-400" />
            NOC MONITORING
          </h3>
          <div className="space-y-3">
            {nocMonitoring.map(system => (
              <div key={system.id} className="bg-gray-800 rounded-lg p-3 border-l-4" style={{ borderLeftColor: getNocStatusColor(system.status) }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{system.system}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ 
                      backgroundColor: `${getNocStatusColor(system.status)}20`, 
                      color: getNocStatusColor(system.status) 
                    }}>
                      {system.status.toUpperCase()}
                    </span>
                    {system.alerts > 0 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-red-900 text-red-400">
                        {system.alerts} Alert{system.alerts > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="text-xs text-gray-400 mb-2">
                  {system.component}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">CPU</span>
                    <span className="text-green-400">{system.cpu.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Memory</span>
                    <span className="text-blue-400">{system.memory.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Throughput</span>
                    <span className="text-purple-400">{system.throughput.toFixed(1)} Gbps</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Latency</span>
                    <span className="text-white">{system.latency.toFixed(1)} ms</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-yellow-400">Loss: {(system.packetLoss * 100).toFixed(3)}%</span>
                  <span className="text-gray-500">
                    {system.connections > 0 ? `${(system.connections / 1000000).toFixed(1)}M conn` : 'N/A'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic Analysis & Alerts */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-yellow-400" />
            TRAFFIC ANALYSIS & ALERTS
          </h3>
          <div className="space-y-3 mb-4">
            {trafficAnalysis.slice(0, 4).map((region, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{region.region}</span>
                  <span className="text-xs text-gray-400">
                    {(region.subscribers / 1000000).toFixed(1)}M subs
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Data Usage</span>
                    <span className="text-blue-400">{region.dataUsage.toFixed(0)} TB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Avg Speed</span>
                    <span className="text-green-400">{region.avgSpeed.toFixed(0)} Mbps</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-xs">
                  <span className="text-purple-400">Satisfaction: {region.satisfaction.toFixed(1)}%</span>
                  <span className="text-gray-500">
                    {(region.callMinutes / 1000000).toFixed(1)}M mins
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Telecom Alerts */}
          <div className="border-t border-gray-700 pt-3">
            <div className="text-sm text-white font-semibold mb-2">Network Alerts</div>
            <div className="space-y-2">
              {telecomAlerts.slice(0, 3).map(alert => (
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
                    <span className="text-blue-400">{alert.location}</span>
                    <span className="text-gray-500">{alert.timestamp.toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Network Analytics */}
      <div className="grid grid-cols-2 gap-6">
        {/* Real-time Service Quality Metrics */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">REAL-TIME SERVICE QUALITY METRICS</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={serviceQualityMetrics}>
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
                dataKey="callSuccess" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Call Success %"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="dataSpeed" 
                stroke="#3B82F6" 
                strokeWidth={2}
                name="Data Speed (Mbps)"
                dot={false}
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="latency" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="Latency (ms)"
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Network Technology Mix & System Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-white mb-4">NETWORK TECHNOLOGY MIX & SYSTEM STATUS</h3>
          <div className="flex">
            <ResponsiveContainer width="60%" height={200}>
              <PieChart>
                <Pie
                  data={networkTechnologyDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {networkTechnologyDistribution.map((entry, index) => (
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
                  formatter={(value) => [`${value}%`, 'Network Mix']}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-2/5 space-y-2 mt-4">
              {networkTechnologyDistribution.map((tech, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: tech.color }}
                    />
                    <span className="text-gray-400 text-sm">{tech.name}</span>
                  </div>
                  <span className="text-white font-semibold">{tech.value}%</span>
                </div>
              ))}
              
              {/* System Status */}
              <div className="mt-4 pt-3 border-t border-gray-700">
                <div className="text-sm text-white font-semibold mb-2">System Status</div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network Reliability</span>
                    <span className="text-green-400">{systemMetrics.networkReliability.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">AIOps Integration</span>
                    <span className="text-blue-400">{systemMetrics.aiopsIntegration.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Security Compliance</span>
                    <span className="text-purple-400">{systemMetrics.securityCompliance.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Automation Level</span>
                    <span className="text-green-400">{systemMetrics.automationLevel.toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Telecommunications Control Panel */}
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Network Operations Control</span>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs transition-colors">
                  <Signal className="w-3 h-3 inline mr-1" />
                  5G Management
                </button>
                <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 rounded text-xs transition-colors">
                  <Router className="w-3 h-3 inline mr-1" />
                  NOC Operations
                </button>
                <button className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors">
                  <Eye className="w-3 h-3 inline mr-1" />
                  Quality Monitoring
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelecommunicationsOperationsCenter;