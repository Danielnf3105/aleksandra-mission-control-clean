// VMware vSphere Monitoring Dashboard - March 2026
// Comprehensive VMware vCenter-inspired virtualization monitoring dashboard for ESXi hosts, virtual machines, and cluster management
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar } from 'recharts';

export default function VMwarevSphereMonitoringDashboard() {
  const [vCenterMetrics, setVCenterMetrics] = useState({
    totalHosts: 24,
    hostsConnected: 23,
    hostsDisconnected: 1,
    totalVMs: 347,
    vmsRunning: 312,
    vmsStopped: 28,
    vmsSuspended: 7,
    totalClusters: 4,
    totalDatastores: 18,
    totalCpuCores: 768,
    totalMemoryGB: 12288,
    avgCpuUsage: 34.7,
    avgMemoryUsage: 67.8,
    totalStorageCapacityTB: 156.7,
    storageUsageTB: 89.3
  });

  const [esxiHosts, setEsxiHosts] = useState([
    {
      hostName: 'aleksandra-esx-01.lab.local',
      status: 'connected',
      cluster: 'Production-Cluster',
      version: 'ESXi 8.0.2',
      cpuModel: 'Intel Xeon Silver 4214R',
      cpuCores: 24,
      cpuThreads: 48,
      cpuUsage: 45.7,
      memoryTotalGB: 512,
      memoryUsageGB: 298.4,
      memoryUsagePercent: 58.3,
      vmCount: 18,
      uptime: '247 days',
      networkAdapters: 4,
      storageAdapters: 2
    },
    {
      hostName: 'aleksandra-esx-02.lab.local',
      status: 'connected',
      cluster: 'Production-Cluster',
      version: 'ESXi 8.0.2',
      cpuModel: 'Intel Xeon Silver 4214R',
      cpuCores: 24,
      cpuThreads: 48,
      cpuUsage: 78.9,
      memoryTotalGB: 512,
      memoryUsageGB: 445.6,
      memoryUsagePercent: 87.0,
      vmCount: 22,
      uptime: '189 days',
      networkAdapters: 4,
      storageAdapters: 2
    },
    {
      hostName: 'aleksandra-esx-03.lab.local',
      status: 'maintenance',
      cluster: 'Development-Cluster',
      version: 'ESXi 8.0.1',
      cpuModel: 'Intel Xeon Silver 4214R',
      cpuCores: 24,
      cpuThreads: 48,
      cpuUsage: 12.3,
      memoryTotalGB: 256,
      memoryUsageGB: 67.8,
      memoryUsagePercent: 26.5,
      vmCount: 5,
      uptime: '67 days',
      networkAdapters: 2,
      storageAdapters: 1
    },
    {
      hostName: 'aleksandra-esx-04.lab.local',
      status: 'disconnected',
      cluster: 'Development-Cluster',
      version: 'ESXi 8.0.0',
      cpuModel: 'Intel Xeon Silver 4214R',
      cpuCores: 24,
      cpuThreads: 48,
      cpuUsage: 0,
      memoryTotalGB: 256,
      memoryUsageGB: 0,
      memoryUsagePercent: 0,
      vmCount: 0,
      uptime: '0 days',
      networkAdapters: 2,
      storageAdapters: 1
    },
    {
      hostName: 'aleksandra-esx-edge-01.lab.local',
      status: 'connected',
      cluster: 'Edge-Cluster',
      version: 'ESXi 8.0.2',
      cpuModel: 'Intel Xeon Gold 6248R',
      cpuCores: 48,
      cpuThreads: 96,
      cpuUsage: 23.1,
      memoryTotalGB: 1024,
      memoryUsageGB: 234.7,
      memoryUsagePercent: 22.9,
      vmCount: 8,
      uptime: '345 days',
      networkAdapters: 6,
      storageAdapters: 4
    }
  ]);

  const [virtualMachines, setVirtualMachines] = useState([
    {
      vmName: 'aleksandra-web-01',
      status: 'running',
      powerState: 'poweredOn',
      host: 'aleksandra-esx-01.lab.local',
      cluster: 'Production-Cluster',
      guestOS: 'Ubuntu 22.04.4 LTS',
      cpuCount: 4,
      cpuUsage: 34.7,
      memoryMB: 8192,
      memoryUsage: 5847,
      memoryUsagePercent: 71.4,
      provisionedSpaceGB: 120,
      usedSpaceGB: 78.5,
      networkAdapters: 1,
      toolsStatus: 'toolsOk',
      uptime: '89 days'
    },
    {
      vmName: 'aleksandra-db-primary',
      status: 'running',
      powerState: 'poweredOn',
      host: 'aleksandra-esx-02.lab.local',
      cluster: 'Production-Cluster',
      guestOS: 'Windows Server 2022',
      cpuCount: 8,
      cpuUsage: 67.8,
      memoryMB: 16384,
      memoryUsage: 12456,
      memoryUsagePercent: 76.0,
      provisionedSpaceGB: 500,
      usedSpaceGB: 234.7,
      networkAdapters: 2,
      toolsStatus: 'toolsOk',
      uptime: '156 days'
    },
    {
      vmName: 'aleksandra-test-env-01',
      status: 'stopped',
      powerState: 'poweredOff',
      host: 'aleksandra-esx-03.lab.local',
      cluster: 'Development-Cluster',
      guestOS: 'CentOS 8',
      cpuCount: 2,
      cpuUsage: 0,
      memoryMB: 4096,
      memoryUsage: 0,
      memoryUsagePercent: 0,
      provisionedSpaceGB: 60,
      usedSpaceGB: 23.4,
      networkAdapters: 1,
      toolsStatus: 'toolsNotInstalled',
      uptime: '0 days'
    },
    {
      vmName: 'aleksandra-backup-server',
      status: 'running',
      powerState: 'poweredOn',
      host: 'aleksandra-esx-edge-01.lab.local',
      cluster: 'Edge-Cluster',
      guestOS: 'Ubuntu 20.04.6 LTS',
      cpuCount: 6,
      cpuUsage: 12.4,
      memoryMB: 12288,
      memoryUsage: 3456,
      memoryUsagePercent: 28.1,
      provisionedSpaceGB: 2000,
      usedSpaceGB: 1234.5,
      networkAdapters: 1,
      toolsStatus: 'toolsOk',
      uptime: '234 days'
    },
    {
      vmName: 'aleksandra-monitoring-01',
      status: 'suspended',
      powerState: 'suspended',
      host: 'aleksandra-esx-01.lab.local',
      cluster: 'Production-Cluster',
      guestOS: 'RHEL 9.3',
      cpuCount: 4,
      cpuUsage: 0,
      memoryMB: 8192,
      memoryUsage: 6789,
      memoryUsagePercent: 82.9,
      provisionedSpaceGB: 200,
      usedSpaceGB: 145.2,
      networkAdapters: 1,
      toolsStatus: 'toolsOk',
      uptime: '0 days'
    }
  ]);

  const [clusterHealth, setClusterHealth] = useState([
    {
      clusterName: 'Production-Cluster',
      status: 'green',
      hostsTotal: 8,
      hostsConnected: 8,
      hostsDisconnected: 0,
      vmsTotal: 156,
      vmsRunning: 148,
      failoverLevel: 1,
      admissionControlEnabled: true,
      drsEnabled: true,
      haEnabled: true,
      cpuUsagePercent: 67.8,
      memoryUsagePercent: 72.4,
      datastores: 12
    },
    {
      clusterName: 'Development-Cluster',
      status: 'yellow',
      hostsTotal: 6,
      hostsConnected: 5,
      hostsDisconnected: 1,
      vmsTotal: 89,
      vmsRunning: 67,
      failoverLevel: 1,
      admissionControlEnabled: true,
      drsEnabled: false,
      haEnabled: true,
      cpuUsagePercent: 34.2,
      memoryUsagePercent: 45.6,
      datastores: 4
    },
    {
      clusterName: 'Edge-Cluster',
      status: 'green',
      hostsTotal: 4,
      hostsConnected: 4,
      hostsDisconnected: 0,
      vmsTotal: 32,
      vmsRunning: 30,
      failoverLevel: 1,
      admissionControlEnabled: false,
      drsEnabled: true,
      haEnabled: false,
      cpuUsagePercent: 23.7,
      memoryUsagePercent: 28.9,
      datastores: 2
    },
    {
      clusterName: 'Management-Cluster',
      status: 'green',
      hostsTotal: 3,
      hostsConnected: 3,
      hostsDisconnected: 0,
      vmsTotal: 18,
      vmsRunning: 16,
      failoverLevel: 1,
      admissionControlEnabled: true,
      drsEnabled: true,
      haEnabled: true,
      cpuUsagePercent: 12.3,
      memoryUsagePercent: 34.7,
      datastores: 3
    }
  ]);

  const [datastoreStatus, setDatastoreStatus] = useState([
    {
      datastoreName: 'VMFS-Production-01',
      type: 'VMFS',
      capacityTB: 24.0,
      usedTB: 16.8,
      freeSpaceTB: 7.2,
      usagePercent: 70.0,
      hostsConnected: 8,
      vmsCount: 89,
      status: 'normal',
      multipleHostAccess: true,
      storageIOControl: true
    },
    {
      datastoreName: 'VMFS-Production-02',
      type: 'VMFS',
      capacityTB: 24.0,
      usedTB: 20.4,
      freeSpaceTB: 3.6,
      usagePercent: 85.0,
      hostsConnected: 8,
      vmsCount: 67,
      status: 'warning',
      multipleHostAccess: true,
      storageIOControl: true
    },
    {
      datastoreName: 'NFS-Development-01',
      type: 'NFS',
      capacityTB: 12.0,
      usedTB: 4.8,
      freeSpaceTB: 7.2,
      usagePercent: 40.0,
      hostsConnected: 6,
      vmsCount: 34,
      status: 'normal',
      multipleHostAccess: true,
      storageIOControl: false
    },
    {
      datastoreName: 'vSAN-Edge-Storage',
      type: 'vSAN',
      capacityTB: 48.0,
      usedTB: 12.5,
      freeSpaceTB: 35.5,
      usagePercent: 26.0,
      hostsConnected: 4,
      vmsCount: 28,
      status: 'normal',
      multipleHostAccess: true,
      storageIOControl: true
    },
    {
      datastoreName: 'VMFS-Backup-Storage',
      type: 'VMFS',
      capacityTB: 96.0,
      usedTB: 67.2,
      freeSpaceTB: 28.8,
      usagePercent: 70.0,
      hostsConnected: 2,
      vmsCount: 12,
      status: 'normal',
      multipleHostAccess: false,
      storageIOControl: false
    }
  ]);

  const [vCenterAlerts, setVCenterAlerts] = useState([
    {
      alertId: 'VC-2026-8901',
      severity: 'critical',
      alertType: 'Host Disconnected',
      object: 'aleksandra-esx-04.lab.local',
      message: 'Host has lost connection to vCenter Server',
      triggeredTime: '20:15:30',
      acknowledgedBy: null,
      description: 'ESXi host in Development cluster is unreachable',
      cluster: 'Development-Cluster',
      impact: 'High - VMs may be orphaned'
    },
    {
      alertId: 'VC-2026-7823',
      severity: 'warning',
      alertType: 'Datastore Space',
      object: 'VMFS-Production-02',
      message: 'Datastore free space below 15% threshold',
      triggeredTime: '19:45:15',
      acknowledgedBy: 'vmware_admin',
      description: 'Production datastore running low on available space',
      cluster: 'Production-Cluster',
      impact: 'Medium - VM provisioning may fail'
    },
    {
      alertId: 'VC-2026-6745',
      severity: 'warning',
      alertType: 'High Memory Usage',
      object: 'aleksandra-esx-02.lab.local',
      message: 'Host memory usage has exceeded 85% for 30 minutes',
      triggeredTime: '20:10:22',
      acknowledgedBy: null,
      description: 'ESXi host memory contention detected',
      cluster: 'Production-Cluster',
      impact: 'Medium - VM performance degradation possible'
    },
    {
      alertId: 'VC-2026-5667',
      severity: 'info',
      alertType: 'Host Maintenance Mode',
      object: 'aleksandra-esx-03.lab.local',
      message: 'Host has been placed in maintenance mode',
      triggeredTime: '18:30:00',
      acknowledgedBy: 'vmware_admin',
      description: 'Scheduled maintenance window for hardware updates',
      cluster: 'Development-Cluster',
      impact: 'Low - Planned maintenance activity'
    }
  ]);

  const [resourcePools, setResourcePools] = useState([
    {
      poolName: 'Production-Web-Tier',
      cluster: 'Production-Cluster',
      cpuLimit: 20000,
      cpuReservation: 8000,
      cpuUsage: 12000,
      cpuUsagePercent: 60.0,
      memoryLimitMB: 65536,
      memoryReservationMB: 32768,
      memoryUsageMB: 45678,
      memoryUsagePercent: 69.7,
      vmsCount: 12,
      status: 'normal'
    },
    {
      poolName: 'Production-DB-Tier',
      cluster: 'Production-Cluster',
      cpuLimit: 32000,
      cpuReservation: 16000,
      cpuUsage: 28000,
      cpuUsagePercent: 87.5,
      memoryLimitMB: 131072,
      memoryReservationMB: 65536,
      memoryUsageMB: 98304,
      memoryUsagePercent: 75.0,
      vmsCount: 8,
      status: 'warning'
    },
    {
      poolName: 'Development-Testing',
      cluster: 'Development-Cluster',
      cpuLimit: 12000,
      cpuReservation: 2000,
      cpuUsage: 4500,
      cpuUsagePercent: 37.5,
      memoryLimitMB: 49152,
      memoryReservationMB: 8192,
      memoryUsageMB: 23456,
      memoryUsagePercent: 47.7,
      vmsCount: 15,
      status: 'normal'
    }
  ]);

  const [performanceTimeline, setPerformanceTimeline] = useState([
    { time: '20:24', cpuUsage: 34.7, memoryUsage: 67.8, storageUsage: 89.3, vmsRunning: 312, hostsConnected: 23, alerts: 4 },
    { time: '20:23', cpuUsage: 32.4, memoryUsage: 65.2, storageUsage: 88.9, vmsRunning: 308, hostsConnected: 24, alerts: 3 },
    { time: '20:22', cpuUsage: 36.8, memoryUsage: 69.4, storageUsage: 89.7, vmsRunning: 315, hostsConnected: 24, alerts: 5 },
    { time: '20:21', cpuUsage: 33.1, memoryUsage: 66.7, storageUsage: 89.1, vmsRunning: 310, hostsConnected: 23, alerts: 4 },
    { time: '20:20', cpuUsage: 35.9, memoryUsage: 68.3, storageUsage: 88.6, vmsRunning: 314, hostsConnected: 24, alerts: 3 },
    { time: '20:19', cpuUsage: 31.2, memoryUsage: 64.9, storageUsage: 89.0, vmsRunning: 311, hostsConnected: 24, alerts: 2 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update vCenter metrics
      setVCenterMetrics(prev => ({
        ...prev,
        hostsConnected: Math.max(prev.totalHosts - 2, prev.hostsConnected + Math.floor((Math.random() - 0.2) * 2)),
        hostsDisconnected: prev.totalHosts - prev.hostsConnected,
        vmsRunning: Math.max(prev.totalVMs * 0.8, prev.vmsRunning + Math.floor((Math.random() - 0.3) * 10)),
        vmsStopped: Math.max(10, prev.vmsStopped + Math.floor((Math.random() - 0.7) * 5)),
        vmsSuspended: Math.max(2, prev.vmsSuspended + Math.floor((Math.random() - 0.8) * 3)),
        avgCpuUsage: Math.max(20, Math.min(80, prev.avgCpuUsage + (Math.random() - 0.5) * 8)),
        avgMemoryUsage: Math.max(50, Math.min(90, prev.avgMemoryUsage + (Math.random() - 0.5) * 6)),
        storageUsageTB: Math.max(70, Math.min(prev.totalStorageCapacityTB * 0.95, prev.storageUsageTB + (Math.random() - 0.5) * 2))
      }));

      // Update performance timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceTimeline(prev => {
        const newData = {
          time: currentTime,
          cpuUsage: Math.max(20, Math.min(70, prev[0]?.cpuUsage + (Math.random() - 0.5) * 8)) || 34.7,
          memoryUsage: Math.max(50, Math.min(85, prev[0]?.memoryUsage + (Math.random() - 0.5) * 6)) || 67.8,
          storageUsage: Math.max(80, Math.min(95, prev[0]?.storageUsage + (Math.random() - 0.5) * 3)) || 89.3,
          vmsRunning: Math.max(280, prev[0]?.vmsRunning + Math.floor((Math.random() - 0.3) * 15)) || 312,
          hostsConnected: Math.max(20, Math.min(24, prev[0]?.hostsConnected + Math.floor((Math.random() - 0.2) * 2))) || 23,
          alerts: Math.max(2, Math.min(8, prev[0]?.alerts + Math.floor((Math.random() - 0.5) * 3))) || 4
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update ESXi hosts
      setEsxiHosts(prev => prev.map(host => ({
        ...host,
        cpuUsage: host.status === 'connected' ? 
                 Math.max(10, Math.min(95, host.cpuUsage + (Math.random() - 0.5) * 12)) : 0,
        memoryUsageGB: host.status === 'connected' ? 
                      Math.max(50, Math.min(host.memoryTotalGB * 0.95, host.memoryUsageGB + (Math.random() - 0.5) * 20)) : 0,
        memoryUsagePercent: host.status === 'connected' ? 
                           (host.memoryUsageGB / host.memoryTotalGB) * 100 : 0,
        vmCount: host.status === 'connected' ? 
                Math.max(5, host.vmCount + Math.floor((Math.random() - 0.5) * 4)) : 0,
        status: host.hostName.includes('04') ? 'disconnected' : 
               host.hostName.includes('03') ? 'maintenance' : 'connected'
      })));

      // Update virtual machines
      setVirtualMachines(prev => prev.map(vm => ({
        ...vm,
        cpuUsage: vm.status === 'running' ? 
                 Math.max(5, Math.min(95, vm.cpuUsage + (Math.random() - 0.5) * 15)) : 0,
        memoryUsage: vm.status === 'running' ? 
                    Math.max(1024, Math.min(vm.memoryMB * 0.95, vm.memoryUsage + Math.floor((Math.random() - 0.5) * 500))) : 
                    vm.status === 'suspended' ? vm.memoryUsage : 0,
        memoryUsagePercent: vm.status === 'running' || vm.status === 'suspended' ? 
                           (vm.memoryUsage / vm.memoryMB) * 100 : 0,
        usedSpaceGB: Math.max(10, Math.min(vm.provisionedSpaceGB * 0.95, vm.usedSpaceGB + (Math.random() - 0.5) * 2))
      })));

      // Update cluster health
      setClusterHealth(prev => prev.map(cluster => ({
        ...cluster,
        hostsConnected: cluster.clusterName === 'Development-Cluster' ? 
                       Math.max(cluster.hostsTotal - 2, cluster.hostsConnected) : cluster.hostsTotal,
        hostsDisconnected: cluster.hostsTotal - cluster.hostsConnected,
        vmsRunning: Math.max(cluster.vmsTotal * 0.8, cluster.vmsRunning + Math.floor((Math.random() - 0.3) * 5)),
        cpuUsagePercent: Math.max(10, Math.min(85, cluster.cpuUsagePercent + (Math.random() - 0.5) * 8)),
        memoryUsagePercent: Math.max(20, Math.min(90, cluster.memoryUsagePercent + (Math.random() - 0.5) * 6)),
        status: cluster.hostsDisconnected > 0 || cluster.cpuUsagePercent > 80 || cluster.memoryUsagePercent > 85 ? 'yellow' : 'green'
      })));

      // Update datastore status
      setDatastoreStatus(prev => prev.map(ds => ({
        ...ds,
        usedTB: Math.max(ds.capacityTB * 0.1, Math.min(ds.capacityTB * 0.95, ds.usedTB + (Math.random() - 0.5) * 0.5)),
        freeSpaceTB: ds.capacityTB - ds.usedTB,
        usagePercent: (ds.usedTB / ds.capacityTB) * 100,
        status: ds.usagePercent > 80 ? 'warning' : ds.usagePercent > 95 ? 'critical' : 'normal'
      })));

      // Update resource pools
      setResourcePools(prev => prev.map(pool => ({
        ...pool,
        cpuUsage: Math.max(pool.cpuReservation, Math.min(pool.cpuLimit * 0.95, pool.cpuUsage + (Math.random() - 0.5) * 1000)),
        cpuUsagePercent: (pool.cpuUsage / pool.cpuLimit) * 100,
        memoryUsageMB: Math.max(pool.memoryReservationMB, Math.min(pool.memoryLimitMB * 0.95, pool.memoryUsageMB + Math.floor((Math.random() - 0.5) * 2048))),
        memoryUsagePercent: (pool.memoryUsageMB / pool.memoryLimitMB) * 100,
        status: pool.cpuUsagePercent > 85 || pool.memoryUsagePercent > 85 ? 'warning' : 'normal'
      })));

      // Occasionally update alert status
      if (Math.random() < 0.2) {
        setVCenterAlerts(prev => prev.map(alert => ({
          ...alert,
          acknowledgedBy: alert.acknowledgedBy || (Math.random() < 0.4 ? 'vmware_admin' : null)
        })));
      }

    }, 56000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'connected': case 'running': case 'normal': case 'green': case 'poweredo': return 'text-green-400';
      case 'disconnected': case 'stopped': case 'critical': case 'red': case 'poweredoff': return 'text-red-400';
      case 'maintenance': case 'suspended': case 'warning': case 'yellow': return 'text-yellow-400';
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
    if (utilization >= 85) return 'text-red-400';
    if (utilization >= 70) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getDatastoreColor = (usage) => {
    if (usage >= 90) return 'text-red-400';
    if (usage >= 80) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getToolsStatusColor = (toolsStatus) => {
    switch(toolsStatus.toLowerCase()) {
      case 'toolsok': return 'text-green-400';
      case 'toolsnotinstalled': case 'toolsnotrunning': return 'text-red-400';
      case 'toolsold': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getClusterHealthColor = (status) => {
    switch(status.toLowerCase()) {
      case 'green': return 'text-green-400';
      case 'yellow': return 'text-yellow-400';
      case 'red': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-green-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* VMware vSphere vCenter Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                ⚡ VMware vSphere Monitoring
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>HOSTS: <span className="text-blue-400 font-mono">{vCenterMetrics.hostsConnected}/{vCenterMetrics.totalHosts}</span></div>
                <div>VMs: <span className="text-green-400">{vCenterMetrics.vmsRunning.toLocaleString()}</span></div>
                <div>CLUSTERS: <span className="text-cyan-400">{vCenterMetrics.totalClusters}</span></div>
                <div>STORAGE: <span className="text-purple-400">{vCenterMetrics.storageUsageTB.toFixed(1)}TB</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">{vCenterMetrics.avgCpuUsage.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Avg CPU Usage</div>
              <div className="text-xs text-blue-300">Memory: {vCenterMetrics.avgMemoryUsage.toFixed(1)}%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key vSphere Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">VMs Running</span>
              <span className="text-2xl">🖥️</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{vCenterMetrics.vmsRunning}</div>
            <div className="text-xs text-gray-400">Active virtual machines</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Total Cores</span>
              <span className="text-2xl">💻</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{vCenterMetrics.totalCpuCores}</div>
            <div className="text-xs text-gray-400">Physical CPU cores</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-purple-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Total Memory</span>
              <span className="text-2xl">🧠</span>
            </div>
            <div className="text-2xl font-bold text-purple-400 mb-1">{(vCenterMetrics.totalMemoryGB / 1024).toFixed(1)}TB</div>
            <div className="text-xs text-gray-400">Physical memory</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-cyan-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Datastores</span>
              <span className="text-2xl">💾</span>
            </div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">{vCenterMetrics.totalDatastores}</div>
            <div className="text-xs text-gray-400">Storage repositories</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* vSphere Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 vSphere Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#3b82f6" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#3b82f6" />
                <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3b82f6' }}
                  labelStyle={{ color: '#3b82f6' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="cpuUsage" fill="#3b82f6" fillOpacity={0.3} stroke="#3b82f6" name="CPU Usage %" />
                <Area yAxisId="left" type="monotone" dataKey="memoryUsage" fill="#8b5cf6" fillOpacity={0.3} stroke="#8b5cf6" name="Memory Usage %" />
                <Line yAxisId="right" type="monotone" dataKey="vmsRunning" stroke="#10b981" strokeWidth={2} name="VMs Running" />
                <Bar yAxisId="right" dataKey="alerts" fill="#f59e0b" name="Active Alerts" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* ESXi Host Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏠 ESXi Host Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {esxiHosts.map((host, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{host.hostName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(host.status)}`}>{host.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{host.cluster} • {host.version}</div>
                  <div className="text-xs text-cyan-300 mb-1">{host.cpuModel}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getUtilizationColor(host.cpuUsage)}>CPU: {host.cpuUsage.toFixed(1)}%</div>
                    <div className={getUtilizationColor(host.memoryUsagePercent)}>MEM: {host.memoryUsagePercent.toFixed(1)}%</div>
                    <div className="text-green-400">VMs: {host.vmCount}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-purple-400">{host.cpuCores}C/{host.cpuThreads}T</div>
                    <div className="text-yellow-400">{host.memoryTotalGB}GB RAM</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-400">Uptime: {host.uptime}</span>
                    <span className="text-orange-400">NICs: {host.networkAdapters}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Virtual Machine Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🖥️ Virtual Machine Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {virtualMachines.map((vm, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{vm.vmName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(vm.status)}`}>{vm.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{vm.guestOS}</div>
                  <div className="text-xs text-cyan-300 mb-1 truncate">{vm.host}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className={getUtilizationColor(vm.cpuUsage)}>CPU: {vm.cpuUsage.toFixed(1)}%</div>
                    <div className={getUtilizationColor(vm.memoryUsagePercent)}>MEM: {vm.memoryUsagePercent.toFixed(1)}%</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-purple-400">{vm.cpuCount} vCPUs</div>
                    <div className="text-yellow-400">{(vm.memoryMB / 1024).toFixed(1)}GB RAM</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">Storage: {vm.usedSpaceGB.toFixed(1)}GB</span>
                    <span className={getToolsStatusColor(vm.toolsStatus)}>
                      {vm.toolsStatus === 'toolsOk' ? 'Tools OK' : 
                       vm.toolsStatus === 'toolsNotInstalled' ? 'No Tools' : vm.toolsStatus}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cluster Health Summary */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏭 Cluster Health Summary
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {clusterHealth.map((cluster, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{cluster.clusterName}</span>
                    <span className={`text-xs font-bold ${getClusterHealthColor(cluster.status)}`}>{cluster.status}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-green-400">{cluster.hostsConnected} hosts</div>
                    <div className="text-blue-400">{cluster.vmsRunning} VMs</div>
                    <div className="text-purple-400">{cluster.datastores} datastores</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className={getUtilizationColor(cluster.cpuUsagePercent)}>CPU: {cluster.cpuUsagePercent.toFixed(1)}%</div>
                    <div className={getUtilizationColor(cluster.memoryUsagePercent)}>MEM: {cluster.memoryUsagePercent.toFixed(1)}%</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className={cluster.drsEnabled ? 'text-green-400' : 'text-red-400'}>
                      DRS: {cluster.drsEnabled ? 'ON' : 'OFF'}
                    </div>
                    <div className={cluster.haEnabled ? 'text-green-400' : 'text-red-400'}>
                      HA: {cluster.haEnabled ? 'ON' : 'OFF'}
                    </div>
                    <div className={cluster.admissionControlEnabled ? 'text-green-400' : 'text-yellow-400'}>
                      AC: {cluster.admissionControlEnabled ? 'ON' : 'OFF'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active vCenter Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active vCenter Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {vCenterAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.alertId}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{alert.alertType}</div>
                  <div className="text-xs text-blue-300 mb-1 truncate">{alert.object}</div>
                  <div className="text-xs text-cyan-300 mb-1">{alert.cluster}</div>
                  <div className="text-xs text-yellow-300 mb-1 line-clamp-2">{alert.description}</div>
                  <div className="text-xs text-red-300 mb-1 line-clamp-1">{alert.impact}</div>
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
        </div>

        {/* Datastore Status & Resource Pools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Datastore Storage Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💾 Datastore Storage Analysis
            </h3>
            <div className="space-y-3">
              {datastoreStatus.map((datastore, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{datastore.datastoreName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(datastore.status)}`}>{datastore.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{datastore.type} • {datastore.hostsConnected} hosts • {datastore.vmsCount} VMs</div>
                  <div className={`text-lg font-bold mb-1 ${getDatastoreColor(datastore.usagePercent)}`}>
                    {datastore.usagePercent.toFixed(1)}% Used
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-purple-400">Cap: {datastore.capacityTB.toFixed(1)}TB</div>
                    <div className="text-red-400">Used: {datastore.usedTB.toFixed(1)}TB</div>
                    <div className="text-green-400">Free: {datastore.freeSpaceTB.toFixed(1)}TB</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={datastore.multipleHostAccess ? 'text-green-400' : 'text-yellow-400'}>
                      Shared: {datastore.multipleHostAccess ? 'Yes' : 'No'}
                    </div>
                    <div className={datastore.storageIOControl ? 'text-green-400' : 'text-gray-400'}>
                      SIOC: {datastore.storageIOControl ? 'On' : 'Off'}
                    </div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getDatastoreColor(datastore.usagePercent) === 'text-green-400' ? 'bg-green-400' : 
                                                      getDatastoreColor(datastore.usagePercent) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${datastore.usagePercent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Pool Management */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏊‍♂️ Resource Pool Management
            </h3>
            <div className="space-y-3">
              {resourcePools.map((pool, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{pool.poolName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(pool.status)}`}>{pool.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-2">{pool.cluster} • {pool.vmsCount} VMs</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-cyan-400 mb-1">CPU Resources</div>
                      <div className={`text-sm font-bold ${getUtilizationColor(pool.cpuUsagePercent)}`}>
                        {pool.cpuUsagePercent.toFixed(1)}% Used
                      </div>
                      <div className="text-xs text-purple-400">
                        {pool.cpuUsage}/{pool.cpuLimit} MHz
                      </div>
                      <div className="text-xs text-yellow-400">
                        Reserved: {pool.cpuReservation} MHz
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                        <div 
                          className={`h-1 rounded-full ${getUtilizationColor(pool.cpuUsagePercent) === 'text-green-400' ? 'bg-green-400' : 
                                                          getUtilizationColor(pool.cpuUsagePercent) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                          style={{ width: `${pool.cpuUsagePercent}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-cyan-400 mb-1">Memory Resources</div>
                      <div className={`text-sm font-bold ${getUtilizationColor(pool.memoryUsagePercent)}`}>
                        {pool.memoryUsagePercent.toFixed(1)}% Used
                      </div>
                      <div className="text-xs text-purple-400">
                        {(pool.memoryUsageMB / 1024).toFixed(1)}/{(pool.memoryLimitMB / 1024).toFixed(1)} GB
                      </div>
                      <div className="text-xs text-yellow-400">
                        Reserved: {(pool.memoryReservationMB / 1024).toFixed(1)} GB
                      </div>
                      <div className="w-full bg-gray-600 rounded-full h-1 mt-1">
                        <div 
                          className={`h-1 rounded-full ${getUtilizationColor(pool.memoryUsagePercent) === 'text-green-400' ? 'bg-green-400' : 
                                                          getUtilizationColor(pool.memoryUsagePercent) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                          style={{ width: `${pool.memoryUsagePercent}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            VMWARE VSPHERE MONITORING | ALEKSANDRA AI VIRTUALIZATION OPERATIONS | INFRASTRUCTURE MANAGEMENT & OPTIMIZATION
          </div>
          <div className="text-sm text-gray-500 mt-2">
            ESXi Host Management | Virtual Machine Monitoring | Cluster Health | Resource Pool Management | Datastore Analysis | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}