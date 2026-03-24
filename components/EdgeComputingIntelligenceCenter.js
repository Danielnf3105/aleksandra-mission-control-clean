// Edge Computing Intelligence Center - Distributed Edge Operations & IoT Analytics
import { useState, useEffect } from 'react';
import { Wifi, Zap, Shield, Activity, TrendingUp, AlertTriangle, CheckCircle, Clock, Users, BarChart3, Settings, Target } from 'lucide-react';

export default function EdgeComputingIntelligenceCenter() {
  const [edgeData, setEdgeData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    edgeOverview: {
      totalEdgeNodes: 1234,
      activeEdgeNodes: 1156,
      iotDevices: 45678,
      activeIotDevices: 43567,
      edgeApplications: 234,
      activeApplications: 221,
      dataProcessed: '2.3 PB',
      realTimeStreams: 5678,
      edgeToCloudSync: 98.7,
      avgLatency: 12.4,
      bandwidthUtilization: 67.8,
      edgeStorageUsed: '456 TB',
      edgeComputeUtilization: 73.4,
      networkReliability: 99.2,
      edgeSecurityScore: 94.6,
      costSavings: 234567.89
    },
    edgeLocations: [
      {
        location: 'London Data Center',
        region: 'Europe West',
        provider: 'AWS Wavelength',
        status: 'HEALTHY',
        nodes: 24,
        devices: 3456,
        applications: 45,
        latency: 8.7,
        throughput: '1.23 GB/s',
        uptime: 99.97,
        cpuUtilization: 67.8,
        memoryUtilization: 73.4,
        storageUtilization: 54.6,
        networkLatency: 5.2,
        securityIncidents: 0,
        lastMaintenance: '2026-03-15 14:00:00',
        coordinates: { lat: 51.5074, lng: -0.1278 }
      },
      {
        location: 'Frankfurt Edge Zone',
        region: 'Europe Central',
        provider: 'Azure Edge Zones',
        status: 'HEALTHY',
        nodes: 18,
        devices: 2789,
        applications: 34,
        latency: 6.3,
        throughput: '987 MB/s',
        uptime: 99.94,
        cpuUtilization: 72.1,
        memoryUtilization: 68.9,
        storageUtilization: 62.3,
        networkLatency: 4.8,
        securityIncidents: 1,
        lastMaintenance: '2026-03-12 10:30:00',
        coordinates: { lat: 50.1109, lng: 8.6821 }
      },
      {
        location: 'Paris Metro Edge',
        region: 'Europe West',
        provider: 'Google Distributed Cloud',
        status: 'WARNING',
        nodes: 12,
        devices: 1567,
        applications: 23,
        latency: 15.8,
        throughput: '654 MB/s',
        uptime: 97.89,
        cpuUtilization: 89.4,
        memoryUtilization: 92.3,
        storageUtilization: 87.5,
        networkLatency: 12.7,
        securityIncidents: 3,
        lastMaintenance: '2026-03-08 16:45:00',
        coordinates: { lat: 48.8566, lng: 2.3522 }
      },
      {
        location: 'Amsterdam IoT Hub',
        region: 'Europe West',
        provider: 'Cloudflare Workers',
        status: 'HEALTHY',
        nodes: 36,
        devices: 5678,
        applications: 67,
        latency: 4.2,
        throughput: '2.1 GB/s',
        uptime: 99.99,
        cpuUtilization: 45.6,
        memoryUtilization: 52.8,
        storageUtilization: 34.7,
        networkLatency: 2.1,
        securityIncidents: 0,
        lastMaintenance: '2026-03-17 20:00:00',
        coordinates: { lat: 52.3676, lng: 4.9041 }
      },
      {
        location: 'Barcelona 5G Edge',
        region: 'Europe South',
        provider: 'Multi-Cloud Edge',
        status: 'CRITICAL',
        nodes: 8,
        devices: 890,
        applications: 12,
        latency: 45.7,
        throughput: '234 MB/s',
        uptime: 89.67,
        cpuUtilization: 95.7,
        memoryUtilization: 98.2,
        storageUtilization: 94.8,
        networkLatency: 34.5,
        securityIncidents: 7,
        lastMaintenance: '2026-03-01 12:00:00',
        coordinates: { lat: 41.3851, lng: 2.1734 }
      }
    ],
    iotAnalytics: [
      {
        deviceType: 'Smart Sensors',
        totalDevices: 12345,
        activeDevices: 11876,
        dataIngestionRate: '234 MB/s',
        avgBatteryLevel: 78.4,
        firmwareVersion: 'v2.3.1',
        lastUpdate: '2026-03-15 09:00:00',
        alertsGenerated: 45,
        maintenanceRequired: 123,
        connectivityStatus: 96.2,
        edgeProcessing: true,
        realTimeAnalytics: true,
        predictiveMaintenance: 'ENABLED'
      },
      {
        deviceType: 'Industrial Controllers',
        totalDevices: 8901,
        activeDevices: 8567,
        dataIngestionRate: '156 MB/s',
        avgBatteryLevel: 'N/A (Powered)',
        firmwareVersion: 'v1.8.4',
        lastUpdate: '2026-03-10 14:30:00',
        alertsGenerated: 23,
        maintenanceRequired: 67,
        connectivityStatus: 98.7,
        edgeProcessing: true,
        realTimeAnalytics: true,
        predictiveMaintenance: 'ENABLED'
      },
      {
        deviceType: 'Environmental Monitors',
        totalDevices: 6789,
        activeDevices: 6234,
        dataIngestionRate: '89 MB/s',
        avgBatteryLevel: 67.9,
        firmwareVersion: 'v3.1.2',
        lastUpdate: '2026-03-16 11:15:00',
        alertsGenerated: 12,
        maintenanceRequired: 45,
        connectivityStatus: 91.8,
        edgeProcessing: false,
        realTimeAnalytics: true,
        predictiveMaintenance: 'DISABLED'
      },
      {
        deviceType: 'Security Cameras',
        totalDevices: 4567,
        activeDevices: 4321,
        dataIngestionRate: '567 MB/s',
        avgBatteryLevel: 45.2,
        firmwareVersion: 'v2.7.3',
        lastUpdate: '2026-03-14 16:45:00',
        alertsGenerated: 78,
        maintenanceRequired: 234,
        connectivityStatus: 89.4,
        edgeProcessing: true,
        realTimeAnalytics: true,
        predictiveMaintenance: 'ENABLED'
      },
      {
        deviceType: 'Vehicle Trackers',
        totalDevices: 3456,
        activeDevices: 3123,
        dataIngestionRate: '123 MB/s',
        avgBatteryLevel: 82.6,
        firmwareVersion: 'v4.2.1',
        lastUpdate: '2026-03-17 08:20:00',
        alertsGenerated: 34,
        maintenanceRequired: 89,
        connectivityStatus: 94.7,
        edgeProcessing: true,
        realTimeAnalytics: true,
        predictiveMaintenance: 'ENABLED'
      }
    ],
    edgeApplications: [
      {
        name: 'Real-Time Video Analytics',
        category: 'Computer Vision',
        deployedNodes: 45,
        activeInstances: 42,
        cpuUsage: 78.9,
        memoryUsage: 84.3,
        storageUsage: 67.2,
        requestsPerSecond: 2345,
        avgResponseTime: 23.4,
        errorRate: 0.12,
        dataProcessed: '456 GB',
        costSavings: 45678.90,
        edgeToCloudRatio: '80:20',
        realTimeProcessing: true,
        mlInference: true,
        lastDeployment: '2026-03-16 14:20:00'
      },
      {
        name: 'IoT Data Aggregation',
        category: 'Data Processing',
        deployedNodes: 67,
        activeInstances: 63,
        cpuUsage: 56.7,
        memoryUsage: 62.4,
        storageUsage: 78.9,
        requestsPerSecond: 5678,
        avgResponseTime: 12.7,
        errorRate: 0.05,
        dataProcessed: '2.3 TB',
        costSavings: 23456.78,
        edgeToCloudRatio: '90:10',
        realTimeProcessing: true,
        mlInference: false,
        lastDeployment: '2026-03-15 10:45:00'
      },
      {
        name: 'Predictive Maintenance',
        category: 'Machine Learning',
        deployedNodes: 23,
        activeInstances: 21,
        cpuUsage: 89.4,
        memoryUsage: 92.1,
        storageUsage: 45.6,
        requestsPerSecond: 234,
        avgResponseTime: 67.8,
        errorRate: 0.23,
        dataProcessed: '123 GB',
        costSavings: 12345.67,
        edgeToCloudRatio: '70:30',
        realTimeProcessing: true,
        mlInference: true,
        lastDeployment: '2026-03-14 09:30:00'
      },
      {
        name: 'Smart Traffic Control',
        category: 'Traffic Management',
        deployedNodes: 34,
        activeInstances: 32,
        cpuUsage: 67.3,
        memoryUsage: 71.8,
        storageUsage: 52.4,
        requestsPerSecond: 1567,
        avgResponseTime: 8.9,
        errorRate: 0.08,
        dataProcessed: '789 GB',
        costSavings: 34567.89,
        edgeToCloudRatio: '85:15',
        realTimeProcessing: true,
        mlInference: true,
        lastDeployment: '2026-03-17 12:15:00'
      }
    ],
    networkPerformance: [
      {
        metric: 'Edge-to-Cloud Latency',
        currentValue: 12.4,
        unit: 'ms',
        threshold: 20.0,
        status: 'HEALTHY',
        trend: 'IMPROVING',
        last24hAvg: 14.7,
        last7dAvg: 16.2,
        benchmark: 'Industry: 25ms'
      },
      {
        metric: 'Data Synchronization',
        currentValue: 98.7,
        unit: '%',
        threshold: 95.0,
        status: 'EXCELLENT',
        trend: 'STABLE',
        last24hAvg: 98.4,
        last7dAvg: 97.9,
        benchmark: 'Industry: 92%'
      },
      {
        metric: 'Bandwidth Utilization',
        currentValue: 67.8,
        unit: '%',
        threshold: 80.0,
        status: 'HEALTHY',
        trend: 'INCREASING',
        last24hAvg: 65.2,
        last7dAvg: 62.8,
        benchmark: 'Industry: 75%'
      },
      {
        metric: 'Network Reliability',
        currentValue: 99.2,
        unit: '%',
        threshold: 99.0,
        status: 'EXCELLENT',
        trend: 'STABLE',
        last24hAvg: 99.1,
        last7dAvg: 99.0,
        benchmark: 'Industry: 98.5%'
      },
      {
        metric: 'Edge Compute Efficiency',
        currentValue: 73.4,
        unit: '%',
        threshold: 70.0,
        status: 'HEALTHY',
        trend: 'IMPROVING',
        last24hAvg: 71.8,
        last7dAvg: 69.4,
        benchmark: 'Industry: 65%'
      }
    ],
    edgeAlerts: [
      {
        type: 'CRITICAL',
        category: 'Infrastructure',
        message: 'Barcelona 5G Edge experiencing severe resource exhaustion - immediate intervention required',
        location: 'Barcelona 5G Edge',
        provider: 'Multi-Cloud Edge',
        currentValue: '95.7% CPU, 98.2% memory utilization',
        impact: 'Edge services degraded, IoT device connectivity failing, real-time processing compromised',
        affectedDevices: 890,
        affectedApplications: 12,
        severity: 'CRITICAL',
        timestamp: '11:15',
        trendDirection: 'CRITICAL',
        detectedBy: 'Edge Monitor',
        recommendation: 'Scale edge infrastructure immediately, redistribute workloads, schedule emergency maintenance',
        urgency: 'IMMEDIATE',
        escalation: 'EDGE_OPERATIONS',
        businessImpact: 'IoT operations disrupted, real-time analytics compromised, SLA violations imminent',
        uptimeImpact: '89.67% vs 99% SLA',
        autoScalingStatus: 'FAILED'
      },
      {
        type: 'HIGH',
        category: 'Connectivity',
        message: 'Paris Metro Edge showing degraded network performance - latency above threshold',
        location: 'Paris Metro Edge',
        provider: 'Google Distributed Cloud',
        currentValue: '15.8ms edge-to-cloud latency',
        threshold: '10ms',
        impact: 'Real-time processing delayed, user experience degraded, application performance affected',
        affectedDevices: 1567,
        affectedApplications: 23,
        severity: 'HIGH',
        timestamp: '11:10',
        trendDirection: 'WORSENING',
        detectedBy: 'Network Monitor',
        recommendation: 'Investigate network bottlenecks, optimize routing, consider edge capacity upgrade',
        urgency: 'HIGH',
        escalation: 'NETWORK_TEAM',
        networkLatency: '12.7ms vs 5ms target',
        maintenanceOverdue: '10 days since last maintenance'
      },
      {
        type: 'MEDIUM',
        category: 'Device Management',
        message: 'Security cameras showing increased maintenance requirements - battery degradation detected',
        deviceType: 'Security Cameras',
        currentValue: '234 devices require maintenance',
        normalRange: '< 50 devices',
        impact: 'Increased operational costs, potential service interruptions, battery replacement needed',
        maintenanceRequired: 234,
        avgBatteryLevel: 45.2,
        severity: 'MEDIUM',
        timestamp: '11:05',
        detectedBy: 'Device Monitor',
        recommendation: 'Schedule battery replacement campaign, implement power optimization, upgrade to solar charging',
        urgency: 'MEDIUM',
        escalation: 'FIELD_OPERATIONS',
        costImpact: 'Estimated $23,400 maintenance cost',
        predictiveAnalysis: 'Battery life declining 15% faster than expected'
      },
      {
        type: 'INFO',
        category: 'Performance',
        message: 'Amsterdam IoT Hub achieving exceptional performance - 99.99% uptime with optimal latency',
        location: 'Amsterdam IoT Hub',
        provider: 'Cloudflare Workers',
        achievements: ['99.99% uptime', '2.1ms network latency', '2.1 GB/s throughput'],
        impact: 'Excellent user experience, optimal resource utilization, industry-leading performance',
        devicesServed: 5678,
        applicationsRunning: 67,
        severity: 'POSITIVE',
        timestamp: '11:00',
        detectedBy: 'Performance Analytics',
        successFactors: ['Optimal resource allocation', 'Advanced caching', 'Efficient load balancing'],
        opportunity: 'BEST_PRACTICE_SHARING',
        costOptimization: '$12,345/month savings from efficiency',
        recommendation: 'Document success patterns for other edge locations'
      }
    ],
    costOptimization: [
      {
        category: 'Edge-to-Cloud Data Transfer',
        currentCost: 45678.90,
        optimizedCost: 23456.78,
        potentialSavings: 22222.12,
        savingsPercent: 48.7,
        implementation: 'ACTIVE',
        description: 'Process more data at edge, reduce cloud transfer',
        dataProcessedAtEdge: '80%',
        dataTransferReduction: '45%'
      },
      {
        category: 'Compute Resource Right-sizing',
        currentCost: 23456.78,
        optimizedCost: 17890.12,
        potentialSavings: 5566.66,
        savingsPercent: 23.7,
        implementation: 'RECOMMENDED',
        description: 'Optimize edge node specifications for workload',
        underutilizedNodes: 23,
        overProvisionedResources: '34%'
      },
      {
        category: 'Network Bandwidth Optimization',
        currentCost: 12345.67,
        optimizedCost: 9876.54,
        potentialSavings: 2469.13,
        savingsPercent: 20.0,
        implementation: 'REVIEWING',
        description: 'Implement data compression and caching',
        bandwidthReduction: '30%',
        cacheHitRatio: '85%'
      },
      {
        category: 'Device Lifecycle Management',
        currentCost: 34567.89,
        optimizedCost: 27654.32,
        potentialSavings: 6913.57,
        savingsPercent: 20.0,
        implementation: 'PLANNED',
        description: 'Extend device lifecycle with predictive maintenance',
        deviceLifeExtension: '25%',
        maintenanceReduction: '40%'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        dataProcessed: '234 GB',
        edgeComputeRequests: 567890,
        avgLatency: 12.4,
        errorRate: 0.08,
        bandwidthUsage: '1.23 GB/s',
        deviceConnectivity: 96.2,
        edgeToCloudSync: 98.7,
        costSavings: 2345.67
      },
      {
        period: 'Last 24 Hours',
        dataProcessed: '5.6 TB',
        edgeComputeRequests: 13626360,
        avgLatency: 14.7,
        errorRate: 0.06,
        bandwidthUsage: '987 MB/s',
        deviceConnectivity: 95.8,
        edgeToCloudSync: 98.4,
        costSavings: 56296.08
      },
      {
        period: 'Last 7 Days',
        dataProcessed: '39.2 TB',
        edgeComputeRequests: 95384520,
        avgLatency: 16.2,
        errorRate: 0.07,
        bandwidthUsage: '654 MB/s',
        deviceConnectivity: 94.9,
        edgeToCloudSync: 97.9,
        costSavings: 394072.56
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEdgeData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        edgeOverview: {
          ...prev.edgeOverview,
          activeEdgeNodes: Math.max(1100, Math.min(1200, prev.edgeOverview.activeEdgeNodes + Math.floor((Math.random() - 0.5) * 20))),
          realTimeStreams: Math.max(5000, Math.min(6000, prev.edgeOverview.realTimeStreams + Math.floor((Math.random() - 0.5) * 100))),
          avgLatency: Math.max(8.0, Math.min(20.0, prev.edgeOverview.avgLatency + (Math.random() - 0.5) * 2.0)),
          bandwidthUtilization: Math.max(50.0, Math.min(80.0, prev.edgeOverview.bandwidthUtilization + (Math.random() - 0.5) * 5.0))
        }
      }));
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'MEDIUM': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'ACTIVE': return 'text-blue-400 bg-blue-400/20';
      case 'RECOMMENDED': return 'text-blue-400 bg-blue-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'REVIEWING': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      case 'POSITIVE': return 'text-blue-400';
      default: return 'text-slate-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1)}B`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatCurrency = (amount) => `$${amount.toLocaleString()}`;
  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatLatency = (ms) => `${ms.toFixed(1)}ms`;

  return (
    <div className="h-full bg-gradient-to-br from-teal-900 via-slate-900 to-emerald-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-teal-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Edge Computing Intelligence Center</h1>
              <p className="text-teal-300">Distributed edge operations & IoT analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-teal-400">{edgeData.currentTime}</div>
            <div className="text-teal-300">Edge Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Edge Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wifi className="w-5 h-5 text-teal-400 mr-2" />
                Edge Nodes
              </h3>
            </div>
            <div className="text-3xl font-bold text-teal-400">{edgeData.edgeOverview.activeEdgeNodes}</div>
            <div className="text-teal-300 text-sm">{edgeData.edgeOverview.totalEdgeNodes} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-blue-400 mr-2" />
                IoT Devices
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(edgeData.edgeOverview.activeIotDevices)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(edgeData.edgeOverview.iotDevices)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                Applications
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{edgeData.edgeOverview.activeApplications}</div>
            <div className="text-cyan-300 text-sm">{edgeData.edgeOverview.edgeApplications} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Latency
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatLatency(edgeData.edgeOverview.avgLatency)}</div>
            <div className="text-yellow-300 text-sm">Edge-Cloud</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
                Sync Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(edgeData.edgeOverview.edgeToCloudSync)}</div>
            <div className="text-green-300 text-sm">Cloud Sync</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
                Cost Savings
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(edgeData.edgeOverview.costSavings)}</div>
            <div className="text-purple-300 text-sm">Monthly</div>
          </div>
        </div>

        {/* Edge Locations */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Wifi className="w-5 h-5 text-teal-400 mr-2" />
            Edge Location Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Location</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                  <th className="text-center p-3 text-slate-300">Nodes/Devices</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Utilization</th>
                  <th className="text-center p-3 text-slate-300">Security</th>
                </tr>
              </thead>
              <tbody>
                {edgeData.edgeLocations.map((location, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium text-sm">{location.location}</div>
                      <div className="text-slate-400 text-xs mt-1">{location.region} • {location.provider}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(location.status)}`}>
                        {location.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className="text-blue-400">{location.nodes} nodes</div>
                        <div className="text-cyan-400">{formatNumber(location.devices)} devices</div>
                        <div className="text-purple-400">{location.applications} apps</div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${location.latency < 10 ? 'text-green-400' : location.latency < 20 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {formatLatency(location.latency)} latency
                        </div>
                        <div className="text-blue-400">{location.throughput}</div>
                        <div className={`${location.uptime >= 99.9 ? 'text-green-400' : location.uptime >= 99 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {formatPercentage(location.uptime)} uptime
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${location.cpuUtilization > 80 ? 'text-red-400' : location.cpuUtilization > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                          CPU: {formatPercentage(location.cpuUtilization)}
                        </div>
                        <div className={`${location.memoryUtilization > 80 ? 'text-red-400' : location.memoryUtilization > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                          MEM: {formatPercentage(location.memoryUtilization)}
                        </div>
                        <div className="text-indigo-400">STOR: {formatPercentage(location.storageUtilization)}</div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${location.securityIncidents === 0 ? 'text-green-400' : location.securityIncidents < 5 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {location.securityIncidents} incidents
                        </div>
                        <div className="text-orange-400">Net: {formatLatency(location.networkLatency)}</div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IoT Analytics & Edge Applications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-blue-400 mr-2" />
              IoT Device Analytics
            </h3>
            <div className="space-y-4">
              {edgeData.iotAnalytics.map((device, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{device.deviceType}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-xs">{formatNumber(device.totalDevices)} total</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-green-400">Active: {formatNumber(device.activeDevices)}</div>
                    <div className="text-blue-400">Data: {device.dataIngestionRate}</div>
                    <div className="text-purple-400">Conn: {formatPercentage(device.connectivityStatus)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className={`${device.avgBatteryLevel !== 'N/A (Powered)' && parseFloat(device.avgBatteryLevel) < 50 ? 'text-red-400' : 'text-green-400'}`}>
                      Battery: {device.avgBatteryLevel}
                    </div>
                    <div className="text-cyan-400">FW: {device.firmwareVersion}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Alerts: {device.alertsGenerated}</div>
                    <div className="text-orange-400">Maint: {device.maintenanceRequired}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-indigo-400">Edge Processing: {device.edgeProcessing ? 'ON' : 'OFF'}</div>
                    <div className="text-pink-400">Predictive: {device.predictiveMaintenance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              Edge Application Performance
            </h3>
            <div className="space-y-4">
              {edgeData.edgeApplications.map((app, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{app.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-slate-400 text-xs">{app.category}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Nodes: {app.deployedNodes}</div>
                    <div className="text-green-400">Active: {app.activeInstances}</div>
                    <div className="text-purple-400">RPS: {formatNumber(app.requestsPerSecond)}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className={`${app.cpuUsage > 80 ? 'text-red-400' : app.cpuUsage > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      CPU: {formatPercentage(app.cpuUsage)}
                    </div>
                    <div className={`${app.memoryUsage > 80 ? 'text-red-400' : app.memoryUsage > 60 ? 'text-yellow-400' : 'text-green-400'}`}>
                      MEM: {formatPercentage(app.memoryUsage)}
                    </div>
                    <div className="text-cyan-400">RT: {formatLatency(app.avgResponseTime)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Data: {app.dataProcessed}</div>
                    <div className="text-orange-400">Savings: {formatCurrency(app.costSavings)}</div>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="text-indigo-400">Edge/Cloud: {app.edgeToCloudRatio}</div>
                    <div className={`${app.errorRate > 0.2 ? 'text-red-400' : app.errorRate > 0.1 ? 'text-yellow-400' : 'text-green-400'}`}>
                      Errors: {formatPercentage(app.errorRate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Network Performance & Cost Optimization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
              Network Performance Metrics
            </h3>
            <div className="space-y-4">
              {edgeData.networkPerformance.map((metric, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Current: {metric.currentValue}{metric.unit}</div>
                    <div className="text-purple-400">24h Avg: {metric.last24hAvg}{metric.unit}</div>
                    <div className="text-indigo-400">7d Avg: {metric.last7dAvg}{metric.unit}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="text-yellow-400">Threshold: {metric.threshold}{metric.unit}</div>
                    <div className="text-green-400">Trend: {metric.trend}</div>
                  </div>
                  
                  <div className="text-slate-400 text-xs mt-2">
                    <strong>Benchmark:</strong> {metric.benchmark}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Edge Cost Optimization
            </h3>
            <div className="space-y-4">
              {edgeData.costOptimization.map((optimization, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{optimization.category}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(optimization.implementation)}`}>
                        {optimization.implementation}
                      </span>
                      <span className="text-green-400 text-xs">{formatPercentage(optimization.savingsPercent)} savings</span>
                    </div>
                  </div>
                  
                  <div className="text-slate-300 text-sm mb-2">{optimization.description}</div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-red-400">Current: {formatCurrency(optimization.currentCost)}</div>
                    <div className="text-green-400">Optimized: {formatCurrency(optimization.optimizedCost)}</div>
                  </div>
                  
                  <div className="text-yellow-400 text-sm font-medium">
                    Potential Savings: {formatCurrency(optimization.potentialSavings)}
                  </div>
                  
                  {optimization.dataProcessedAtEdge && (
                    <div className="text-xs mt-2 space-y-1">
                      <div className="text-blue-400">Edge Processing: {optimization.dataProcessedAtEdge}</div>
                      <div className="text-cyan-400">Transfer Reduction: {optimization.dataTransferReduction}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Activity className="w-5 h-5 text-cyan-400 mr-2" />
            Edge Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {edgeData.performanceMetrics.map((metrics, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="text-white font-semibold mb-3 text-center">{metrics.period}</div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-blue-400">Data: {metrics.dataProcessed}</div>
                  <div className="text-purple-400">Requests: {formatNumber(metrics.edgeComputeRequests)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-green-400">Latency: {formatLatency(metrics.avgLatency)}</div>
                  <div className="text-red-400">Errors: {formatPercentage(metrics.errorRate)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Bandwidth: {metrics.bandwidthUsage}</div>
                  <div className="text-yellow-400">Connectivity: {formatPercentage(metrics.deviceConnectivity)}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-indigo-400">Sync: {formatPercentage(metrics.edgeToCloudSync)}</div>
                  <div className="text-orange-400">Savings: {formatCurrency(metrics.costSavings)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edge Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-teal-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Edge Computing Alerts
          </h3>
          <div className="space-y-4">
            {edgeData.edgeAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                    {alert.urgency && <span className={`text-xs ${getSeverityColor(alert.urgency)}`}>{alert.urgency}</span>}
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                
                <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                
                <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                  {alert.location && <div className="text-slate-300">Location: {alert.location}</div>}
                  {alert.provider && <div className="text-slate-300">Provider: {alert.provider}</div>}
                  {alert.deviceType && <div className="text-slate-300">Device Type: {alert.deviceType}</div>}
                  {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                  {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                  {alert.affectedDevices && <div className="text-yellow-400">Devices: {alert.affectedDevices} affected</div>}
                  {alert.affectedApplications && <div className="text-orange-400">Apps: {alert.affectedApplications} affected</div>}
                  {alert.uptimeImpact && <div className="text-red-400">SLA Impact: {alert.uptimeImpact}</div>}
                  {alert.costImpact && <div className="text-green-400">Cost Impact: {alert.costImpact}</div>}
                  {alert.costOptimization && <div className="text-green-400">Savings: {alert.costOptimization}</div>}
                  {alert.achievements && <div className="text-blue-400">Achievements: {alert.achievements.join(', ')}</div>}
                </div>
                
                <div className="text-slate-300 text-xs mb-2">
                  <strong>Impact:</strong> {alert.impact}
                </div>
                
                <div className="text-slate-300 text-xs">
                  <strong>Action:</strong> {alert.recommendation}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}