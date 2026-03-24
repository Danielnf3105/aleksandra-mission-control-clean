// Zabbix Network Monitoring Dashboard - March 2026
// Comprehensive Zabbix-inspired network and infrastructure monitoring dashboard for enterprise monitoring and alerting
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar } from 'recharts';

export default function ZabbixNetworkMonitoringDashboard() {
  const [zabbixMetrics, setZabbixMetrics] = useState({
    totalHosts: 2847,
    monitoredHosts: 2789,
    unreachableHosts: 58,
    totalItems: 45678,
    unsupportedItems: 234,
    totalTriggers: 8934,
    enabledTriggers: 8756,
    totalProblems: 156,
    unacknowledgedProblems: 89,
    avgItemsPerHost: 16.4,
    dataPointsPerSecond: 1247.8,
    serverProcessUtilization: 67.3,
    historyWriteRate: 234.5
  });

  const [monitoredHosts, setMonitoredHosts] = useState([
    {
      hostName: 'aleksandra-core-router-01',
      hostGroup: 'Network Equipment',
      ipAddress: '192.168.1.1',
      status: 'monitored',
      availability: 99.97,
      lastSeen: '20:30:15',
      itemCount: 45,
      triggerCount: 12,
      activeProblems: 0,
      templates: ['Template Net Cisco IOS', 'Template Module ICMP'],
      interfaces: ['SNMP v2', 'ICMP'],
      zabbixAgent: 'N/A',
      uptime: '247 days, 15 hours'
    },
    {
      hostName: 'aleksandra-web-server-01',
      hostGroup: 'Linux Servers',
      ipAddress: '10.0.1.50',
      status: 'monitored',
      availability: 99.89,
      lastSeen: '20:30:30',
      itemCount: 78,
      triggerCount: 23,
      activeProblems: 1,
      templates: ['Template OS Linux', 'Template App Apache'],
      interfaces: ['Zabbix agent', 'SNMP v2'],
      zabbixAgent: '6.4.12',
      uptime: '89 days, 12 hours'
    },
    {
      hostName: 'aleksandra-db-primary',
      hostGroup: 'Database Servers',
      ipAddress: '10.0.2.15',
      status: 'monitored',
      availability: 99.95,
      lastSeen: '20:30:25',
      itemCount: 134,
      triggerCount: 34,
      activeProblems: 2,
      templates: ['Template OS Windows', 'Template DB MySQL'],
      interfaces: ['Zabbix agent', 'WMI'],
      zabbixAgent: '6.4.11',
      uptime: '156 days, 8 hours'
    },
    {
      hostName: 'aleksandra-backup-storage',
      hostGroup: 'Storage Systems',
      ipAddress: '10.0.3.100',
      status: 'unreachable',
      availability: 98.23,
      lastSeen: '19:15:42',
      itemCount: 67,
      triggerCount: 18,
      activeProblems: 5,
      templates: ['Template Storage Generic', 'Template Module SNMP'],
      interfaces: ['SNMP v3', 'IPMI'],
      zabbixAgent: 'N/A',
      uptime: '0 days, 0 hours'
    },
    {
      hostName: 'aleksandra-firewall-dmz',
      hostGroup: 'Security Infrastructure',
      ipAddress: '203.0.113.1',
      status: 'monitored',
      availability: 99.91,
      lastSeen: '20:30:20',
      itemCount: 89,
      triggerCount: 28,
      activeProblems: 1,
      templates: ['Template Net Fortinet FortiOS', 'Template Module ICMP'],
      interfaces: ['SNMP v2', 'ICMP'],
      zabbixAgent: 'N/A',
      uptime: '178 days, 4 hours'
    }
  ]);

  const [activeProblems, setActiveProblems] = useState([
    {
      problemId: 'ZBX-2026-8901',
      severity: 'disaster',
      problem: 'Host unreachable by ICMP',
      host: 'aleksandra-backup-storage',
      hostGroup: 'Storage Systems',
      lastChange: '19:15:42',
      duration: '1h 14m',
      acknowledgedBy: null,
      description: 'Backup storage system is not responding to ping requests',
      eventId: 'e1234567890',
      suppressed: false,
      maintenanceMode: false
    },
    {
      problemId: 'ZBX-2026-7823',
      severity: 'high',
      problem: 'High CPU utilization',
      host: 'aleksandra-web-server-01',
      hostGroup: 'Linux Servers',
      lastChange: '20:15:30',
      duration: '15m',
      acknowledgedBy: 'admin',
      description: 'CPU usage on web server has exceeded 85% for 10 minutes',
      eventId: 'e1234567891',
      suppressed: false,
      maintenanceMode: false
    },
    {
      problemId: 'ZBX-2026-6745',
      severity: 'warning',
      problem: 'Free disk space too low',
      host: 'aleksandra-db-primary',
      hostGroup: 'Database Servers',
      lastChange: '19:45:15',
      duration: '45m',
      acknowledgedBy: null,
      description: 'Free disk space on C: drive is below 10%',
      eventId: 'e1234567892',
      suppressed: false,
      maintenanceMode: false
    },
    {
      problemId: 'ZBX-2026-5667',
      severity: 'average',
      problem: 'High memory usage',
      host: 'aleksandra-db-primary',
      hostGroup: 'Database Servers',
      lastChange: '20:10:05',
      duration: '20m',
      acknowledgedBy: 'dba_admin',
      description: 'Memory utilization on database server is above 80%',
      eventId: 'e1234567893',
      suppressed: true,
      maintenanceMode: false
    },
    {
      problemId: 'ZBX-2026-4589',
      severity: 'information',
      problem: 'Zabbix agent on host is unreachable',
      host: 'aleksandra-firewall-dmz',
      hostGroup: 'Security Infrastructure',
      lastChange: '18:30:22',
      duration: '2h',
      acknowledgedBy: 'network_admin',
      description: 'Unable to connect to Zabbix agent on firewall device',
      eventId: 'e1234567894',
      suppressed: false,
      maintenanceMode: true
    }
  ]);

  const [triggerStats, setTriggerStats] = useState([
    {
      hostGroup: 'Network Equipment',
      hostsTotal: 67,
      triggersTotal: 834,
      triggersEnabled: 823,
      triggersDisabled: 11,
      problemsActive: 12,
      problemsUnacknowledged: 8,
      severity: {
        disaster: 1,
        high: 3,
        average: 5,
        warning: 2,
        information: 1
      }
    },
    {
      hostGroup: 'Linux Servers',
      hostsTotal: 234,
      triggersTotal: 3456,
      triggersEnabled: 3398,
      triggersDisabled: 58,
      problemsActive: 23,
      problemsUnacknowledged: 15,
      severity: {
        disaster: 0,
        high: 4,
        average: 8,
        warning: 7,
        information: 4
      }
    },
    {
      hostGroup: 'Database Servers',
      hostsTotal: 45,
      triggersTotal: 1567,
      triggersEnabled: 1534,
      triggersDisabled: 33,
      problemsActive: 34,
      problemsUnacknowledged: 22,
      severity: {
        disaster: 2,
        high: 8,
        average: 12,
        warning: 9,
        information: 3
      }
    },
    {
      hostGroup: 'Storage Systems',
      hostsTotal: 28,
      triggersTotal: 678,
      triggersEnabled: 645,
      triggersDisabled: 33,
      problemsActive: 18,
      problemsUnacknowledged: 12,
      severity: {
        disaster: 3,
        high: 5,
        average: 6,
        warning: 3,
        information: 1
      }
    },
    {
      hostGroup: 'Security Infrastructure',
      hostsTotal: 89,
      triggersTotal: 2134,
      triggersEnabled: 2089,
      triggersDisabled: 45,
      problemsActive: 15,
      problemsUnacknowledged: 9,
      severity: {
        disaster: 0,
        high: 2,
        average: 6,
        warning: 5,
        information: 2
      }
    }
  ]);

  const [templateUsage, setTemplateUsage] = useState([
    {
      templateName: 'Template OS Linux',
      description: 'Standard Linux monitoring template',
      hostsLinked: 234,
      itemsTotal: 89,
      triggersTotal: 23,
      graphsTotal: 12,
      discoveryRules: 8,
      macros: 15,
      category: 'Operating Systems'
    },
    {
      templateName: 'Template OS Windows',
      description: 'Windows Server monitoring template',
      hostsLinked: 156,
      itemsTotal: 134,
      triggersTotal: 34,
      graphsTotal: 18,
      discoveryRules: 12,
      macros: 23,
      category: 'Operating Systems'
    },
    {
      templateName: 'Template Net Cisco IOS',
      description: 'Cisco network device template',
      hostsLinked: 67,
      itemsTotal: 45,
      triggersTotal: 12,
      graphsTotal: 8,
      discoveryRules: 6,
      macros: 12,
      category: 'Network Equipment'
    },
    {
      templateName: 'Template DB MySQL',
      description: 'MySQL database monitoring template',
      hostsLinked: 23,
      itemsTotal: 78,
      triggersTotal: 28,
      graphsTotal: 15,
      discoveryRules: 4,
      macros: 18,
      category: 'Databases'
    },
    {
      templateName: 'Template App Apache',
      description: 'Apache web server template',
      hostsLinked: 89,
      itemsTotal: 34,
      triggersTotal: 15,
      graphsTotal: 9,
      discoveryRules: 3,
      macros: 8,
      category: 'Applications'
    }
  ]);

  const [zabbixServer, setZabbixServer] = useState([
    {
      component: 'Zabbix Server',
      status: 'running',
      version: '6.4.12',
      uptime: '45 days, 12 hours',
      processCount: 45,
      memoryUsage: '2.4 GB',
      configCacheUsage: '67.8%',
      valueCacheUsage: '45.2%',
      historyWriteRate: 234.5,
      trendWriteRate: 12.3,
      lastConfigSync: '20:30:00'
    },
    {
      component: 'Zabbix Database',
      status: 'running',
      version: 'PostgreSQL 14.9',
      uptime: '89 days, 6 hours',
      processCount: 12,
      memoryUsage: '8.7 GB',
      configCacheUsage: 'N/A',
      valueCacheUsage: 'N/A',
      historyWriteRate: 456.7,
      trendWriteRate: 23.4,
      lastConfigSync: 'N/A'
    },
    {
      component: 'Zabbix Frontend',
      status: 'running',
      version: 'PHP 8.2.15',
      uptime: '12 days, 3 hours',
      processCount: 8,
      memoryUsage: '512 MB',
      configCacheUsage: 'N/A',
      valueCacheUsage: 'N/A',
      historyWriteRate: 0,
      trendWriteRate: 0,
      lastConfigSync: '20:29:45'
    },
    {
      component: 'Zabbix Proxy',
      status: 'running',
      version: '6.4.11',
      uptime: '23 days, 15 hours',
      processCount: 23,
      memoryUsage: '1.2 GB',
      configCacheUsage: '23.4%',
      valueCacheUsage: '67.9%',
      historyWriteRate: 89.2,
      trendWriteRate: 5.6,
      lastConfigSync: '20:29:30'
    }
  ]);

  const [monitoringTimeline, setMonitoringTimeline] = useState([
    { time: '20:30', hostsMonitored: 2789, unreachableHosts: 58, totalProblems: 156, unacknowledged: 89, itemsPerSecond: 1247.8, serverUtil: 67.3 },
    { time: '20:29', hostsMonitored: 2792, unreachableHosts: 55, totalProblems: 148, unacknowledged: 82, itemsPerSecond: 1234.5, serverUtil: 65.1 },
    { time: '20:28', hostsMonitored: 2795, unreachableHosts: 52, totalProblems: 162, unacknowledged: 94, itemsPerSecond: 1268.2, serverUtil: 69.7 },
    { time: '20:27', hostsMonitored: 2788, unreachableHosts: 59, totalProblems: 159, unacknowledged: 87, itemsPerSecond: 1245.6, serverUtil: 66.4 },
    { time: '20:26', hostsMonitored: 2801, unreachableHosts: 46, totalProblems: 134, unacknowledged: 76, itemsPerSecond: 1223.8, serverUtil: 63.8 },
    { time: '20:25', hostsMonitored: 2793, unreachableHosts: 54, totalProblems: 167, unacknowledged: 98, itemsPerSecond: 1287.4, serverUtil: 71.2 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Zabbix metrics
      setZabbixMetrics(prev => ({
        ...prev,
        monitoredHosts: Math.max(prev.totalHosts * 0.9, prev.monitoredHosts + Math.floor((Math.random() - 0.2) * 8)),
        unreachableHosts: prev.totalHosts - prev.monitoredHosts,
        unsupportedItems: Math.max(100, prev.unsupportedItems + Math.floor((Math.random() - 0.7) * 10)),
        enabledTriggers: Math.max(prev.totalTriggers * 0.95, prev.enabledTriggers + Math.floor((Math.random() - 0.1) * 20)),
        totalProblems: Math.max(50, prev.totalProblems + Math.floor((Math.random() - 0.4) * 20)),
        unacknowledgedProblems: Math.max(30, prev.unacknowledgedProblems + Math.floor((Math.random() - 0.5) * 15)),
        avgItemsPerHost: Math.max(10, prev.avgItemsPerHost + (Math.random() - 0.5) * 2),
        dataPointsPerSecond: Math.max(800, prev.dataPointsPerSecond + (Math.random() - 0.5) * 200),
        serverProcessUtilization: Math.max(40, Math.min(90, prev.serverProcessUtilization + (Math.random() - 0.5) * 8)),
        historyWriteRate: Math.max(100, prev.historyWriteRate + (Math.random() - 0.5) * 50)
      }));

      // Update monitoring timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setMonitoringTimeline(prev => {
        const newData = {
          time: currentTime,
          hostsMonitored: Math.max(2500, prev[0]?.hostsMonitored + Math.floor((Math.random() - 0.2) * 20)) || 2789,
          unreachableHosts: Math.max(30, Math.min(100, prev[0]?.unreachableHosts + Math.floor((Math.random() - 0.7) * 10))) || 58,
          totalProblems: Math.max(100, prev[0]?.totalProblems + Math.floor((Math.random() - 0.4) * 25)) || 156,
          unacknowledged: Math.max(50, prev[0]?.unacknowledged + Math.floor((Math.random() - 0.5) * 20)) || 89,
          itemsPerSecond: Math.max(1000, prev[0]?.itemsPerSecond + (Math.random() - 0.5) * 100) || 1247.8,
          serverUtil: Math.max(50, Math.min(85, prev[0]?.serverUtil + (Math.random() - 0.5) * 8)) || 67.3
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update monitored hosts
      setMonitoredHosts(prev => prev.map(host => ({
        ...host,
        availability: host.status === 'monitored' ? 
                     Math.max(95, Math.min(100, host.availability + (Math.random() - 0.5) * 0.5)) : 
                     Math.max(90, host.availability + (Math.random() - 0.5) * 2),
        activeProblems: host.status === 'monitored' ? 
                       Math.max(0, host.activeProblems + Math.floor((Math.random() - 0.7) * 2)) : 
                       Math.max(3, host.activeProblems + Math.floor((Math.random() - 0.3) * 3)),
        status: host.hostName.includes('backup') ? 'unreachable' : 'monitored'
      })));

      // Update active problems
      setActiveProblems(prev => prev.map(problem => ({
        ...problem,
        acknowledgedBy: problem.acknowledgedBy || (Math.random() < 0.3 ? 'admin' : null),
        suppressed: Math.random() < 0.1 ? !problem.suppressed : problem.suppressed,
        maintenanceMode: Math.random() < 0.05 ? !problem.maintenanceMode : problem.maintenanceMode
      })));

      // Update trigger stats
      setTriggerStats(prev => prev.map(group => ({
        ...group,
        problemsActive: Math.max(5, group.problemsActive + Math.floor((Math.random() - 0.5) * 6)),
        problemsUnacknowledged: Math.max(2, group.problemsUnacknowledged + Math.floor((Math.random() - 0.6) * 4)),
        severity: {
          disaster: Math.max(0, group.severity.disaster + Math.floor((Math.random() - 0.9) * 2)),
          high: Math.max(1, group.severity.high + Math.floor((Math.random() - 0.7) * 3)),
          average: Math.max(2, group.severity.average + Math.floor((Math.random() - 0.5) * 4)),
          warning: Math.max(1, group.severity.warning + Math.floor((Math.random() - 0.6) * 3)),
          information: Math.max(0, group.severity.information + Math.floor((Math.random() - 0.8) * 2))
        }
      })));

      // Update template usage
      setTemplateUsage(prev => prev.map(template => ({
        ...template,
        hostsLinked: Math.max(template.hostsLinked * 0.9, template.hostsLinked + Math.floor((Math.random() - 0.5) * 5))
      })));

      // Update Zabbix server components
      setZabbixServer(prev => prev.map(component => ({
        ...component,
        memoryUsage: component.component === 'Zabbix Database' ? 
                    `${Math.max(6, parseFloat(component.memoryUsage) + (Math.random() - 0.5) * 1).toFixed(1)} GB` :
                    component.component === 'Zabbix Server' ?
                    `${Math.max(1.5, parseFloat(component.memoryUsage) + (Math.random() - 0.5) * 0.5).toFixed(1)} GB` :
                    component.memoryUsage,
        configCacheUsage: component.configCacheUsage !== 'N/A' ? 
                         `${Math.max(30, Math.min(90, parseFloat(component.configCacheUsage) + (Math.random() - 0.5) * 5)).toFixed(1)}%` :
                         'N/A',
        valueCacheUsage: component.valueCacheUsage !== 'N/A' ? 
                        `${Math.max(20, Math.min(80, parseFloat(component.valueCacheUsage) + (Math.random() - 0.5) * 8)).toFixed(1)}%` :
                        'N/A',
        historyWriteRate: component.historyWriteRate > 0 ? 
                         Math.max(50, component.historyWriteRate + (Math.random() - 0.5) * 50) : 0
      })));

    }, 58000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'monitored': case 'running': case 'normal': return 'text-green-400';
      case 'unreachable': case 'stopped': case 'critical': return 'text-red-400';
      case 'maintenance': case 'warning': return 'text-yellow-400';
      case 'disabled': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'disaster': return 'text-red-500';
      case 'high': return 'text-red-400';
      case 'average': return 'text-orange-400';
      case 'warning': return 'text-yellow-400';
      case 'information': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getAvailabilityColor = (availability) => {
    if (availability >= 99.5) return 'text-green-400';
    if (availability >= 99.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getUtilizationColor = (utilization) => {
    if (utilization >= 80) return 'text-red-400';
    if (utilization >= 70) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getCacheUsageColor = (usage) => {
    if (usage >= 80) return 'text-red-400';
    if (usage >= 60) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-gray-900 to-orange-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Zabbix Monitoring Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                🔍 Zabbix Network Monitoring
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>HOSTS: <span className="text-red-400 font-mono">{zabbixMetrics.monitoredHosts}/{zabbixMetrics.totalHosts}</span></div>
                <div>ITEMS: <span className="text-orange-400">{zabbixMetrics.totalItems.toLocaleString()}</span></div>
                <div>TRIGGERS: <span className="text-yellow-400">{zabbixMetrics.enabledTriggers.toLocaleString()}</span></div>
                <div>PROBLEMS: <span className="text-red-400">{zabbixMetrics.totalProblems}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-red-400">{zabbixMetrics.dataPointsPerSecond.toFixed(1)}</div>
              <div className="text-sm text-gray-300">Items/sec</div>
              <div className="text-xs text-red-300">Server: {zabbixMetrics.serverProcessUtilization.toFixed(1)}%</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Zabbix Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Monitored Hosts</span>
              <span className="text-2xl">🖥️</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{zabbixMetrics.monitoredHosts}</div>
            <div className="text-xs text-gray-400">Active monitoring</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Unreachable Hosts</span>
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{zabbixMetrics.unreachableHosts}</div>
            <div className="text-xs text-gray-400">Connection issues</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Unacknowledged</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{zabbixMetrics.unacknowledgedProblems}</div>
            <div className="text-xs text-gray-400">Requires attention</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Items per Host</span>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{zabbixMetrics.avgItemsPerHost.toFixed(1)}</div>
            <div className="text-xs text-gray-400">Average monitoring density</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Zabbix Monitoring Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Zabbix Monitoring Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monitoringTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#ef4444" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#ef4444" />
                <YAxis yAxisId="right" orientation="right" stroke="#ef4444" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #ef4444' }}
                  labelStyle={{ color: '#ef4444' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="hostsMonitored" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" name="Monitored Hosts" />
                <Area yAxisId="left" type="monotone" dataKey="unreachableHosts" fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" name="Unreachable Hosts" />
                <Line yAxisId="right" type="monotone" dataKey="itemsPerSecond" stroke="#f59e0b" strokeWidth={2} name="Items/sec" />
                <Bar yAxisId="right" dataKey="totalProblems" fill="#ef4444" name="Total Problems" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Monitored Hosts Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏠 Monitored Hosts Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {monitoredHosts.map((host, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{host.hostName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(host.status)}`}>{host.status}</span>
                  </div>
                  <div className="text-xs text-red-300 mb-1">{host.hostGroup} • {host.ipAddress}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getAvailabilityColor(host.availability)}>Avail: {host.availability.toFixed(2)}%</div>
                    <div className="text-cyan-400">Items: {host.itemCount}</div>
                    <div className="text-yellow-400">Triggers: {host.triggerCount}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className={host.activeProblems > 0 ? 'text-red-400' : 'text-green-400'}>
                      Problems: {host.activeProblems}
                    </div>
                    <div className="text-blue-400">Agent: {host.zabbixAgent}</div>
                  </div>
                  <div className="text-xs text-purple-300 mb-1 truncate">
                    Templates: {host.templates.slice(0, 2).join(', ')}{host.templates.length > 2 ? '...' : ''}
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">Uptime: {host.uptime.split(',')[0]}</span>
                    <span className="text-gray-400">{host.lastSeen}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Problems */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Problems
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {activeProblems.map((problem, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-orange-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{problem.problemId}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(problem.severity)}`}>{problem.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 line-clamp-2">{problem.problem}</div>
                  <div className="text-xs text-red-300 mb-1">{problem.host}</div>
                  <div className="text-xs text-orange-300 mb-1">{problem.hostGroup}</div>
                  <div className="text-xs text-yellow-300 mb-1 line-clamp-2">{problem.description}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-blue-400">Duration: {problem.duration}</div>
                    <div className="text-purple-400">Event: {problem.eventId}</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={problem.acknowledgedBy ? 'text-green-400' : 'text-red-400'}>
                      {problem.acknowledgedBy ? `Ack: ${problem.acknowledgedBy}` : 'Unacknowledged'}
                    </span>
                    <div className="flex space-x-1">
                      {problem.suppressed && <span className="text-yellow-400">S</span>}
                      {problem.maintenanceMode && <span className="text-blue-400">M</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trigger Statistics by Host Group */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Trigger Statistics by Host Group
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {triggerStats.map((group, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1">{group.hostGroup}</div>
                  <div className="text-xs text-red-300 mb-1">{group.hostsTotal} hosts • {group.triggersEnabled} triggers enabled</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                    <div className="text-red-400">Active: {group.problemsActive}</div>
                    <div className="text-yellow-400">Unack: {group.problemsUnacknowledged}</div>
                  </div>
                  <div className="text-xs text-cyan-400 mb-1">Severity Breakdown:</div>
                  <div className="grid grid-cols-5 gap-1 text-xs">
                    <div className="text-red-500">D: {group.severity.disaster}</div>
                    <div className="text-red-400">H: {group.severity.high}</div>
                    <div className="text-orange-400">A: {group.severity.average}</div>
                    <div className="text-yellow-400">W: {group.severity.warning}</div>
                    <div className="text-blue-400">I: {group.severity.information}</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${group.problemsActive === 0 ? 'bg-green-400' : 
                                                      group.problemsActive < 10 ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${Math.min(100, (group.problemsActive / 50) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Template Usage Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Template Usage Analysis
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {templateUsage.map((template, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1 truncate">{template.templateName}</div>
                  <div className="text-xs text-red-300 mb-1">{template.category}</div>
                  <div className="text-xs text-orange-300 mb-2 line-clamp-2">{template.description}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-green-400">Hosts: {template.hostsLinked}</div>
                    <div className="text-cyan-400">Items: {template.itemsTotal}</div>
                    <div className="text-yellow-400">Triggers: {template.triggersTotal}</div>
                    <div className="text-blue-400">Graphs: {template.graphsTotal}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className="text-purple-400">Discovery: {template.discoveryRules}</div>
                    <div className="text-orange-400">Macros: {template.macros}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Zabbix Server Components */}
        <div className="bg-gray-800 rounded-xl p-6 border border-red-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🖥️ Zabbix Server Infrastructure Components
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {zabbixServer.map((component, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{component.component}</span>
                  <span className={`text-xs font-bold ${getStatusColor(component.status)}`}>{component.status}</span>
                </div>
                <div className="text-xs text-red-300 mb-1">{component.version}</div>
                <div className="text-xs text-orange-300 mb-2">Uptime: {component.uptime}</div>
                <div className="space-y-1 text-xs">
                  <div className="text-blue-400">Memory: {component.memoryUsage}</div>
                  <div className="text-cyan-400">Processes: {component.processCount}</div>
                  {component.configCacheUsage !== 'N/A' && (
                    <div className={getCacheUsageColor(parseFloat(component.configCacheUsage))}>
                      Config Cache: {component.configCacheUsage}
                    </div>
                  )}
                  {component.valueCacheUsage !== 'N/A' && (
                    <div className={getCacheUsageColor(parseFloat(component.valueCacheUsage))}>
                      Value Cache: {component.valueCacheUsage}
                    </div>
                  )}
                  {component.historyWriteRate > 0 && (
                    <div className="text-green-400">
                      History: {component.historyWriteRate.toFixed(1)}/s
                    </div>
                  )}
                  {component.trendWriteRate > 0 && (
                    <div className="text-purple-400">
                      Trends: {component.trendWriteRate.toFixed(1)}/s
                    </div>
                  )}
                  {component.lastConfigSync !== 'N/A' && (
                    <div className="text-yellow-400">
                      Config Sync: {component.lastConfigSync}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            ZABBIX NETWORK MONITORING | ALEKSANDRA AI MONITORING OPERATIONS | INFRASTRUCTURE SURVEILLANCE & ALERTING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Host Monitoring | Problem Management | Template Analysis | Trigger Management | Server Infrastructure | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}