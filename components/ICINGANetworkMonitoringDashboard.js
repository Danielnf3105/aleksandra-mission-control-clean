// ICINGA Network Monitoring Dashboard - March 2026
// Comprehensive ICINGA2-inspired network and infrastructure monitoring dashboard for distributed monitoring and alerting
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar } from 'recharts';

export default function ICINGANetworkMonitoringDashboard() {
  const [icingaMetrics, setIcingaMetrics] = useState({
    totalHosts: 2347,
    hostsUp: 2289,
    hostsDown: 34,
    hostsPending: 24,
    totalServices: 12847,
    servicesOk: 11956,
    servicesWarning: 456,
    servicesCritical: 234,
    servicesUnknown: 201,
    totalChecks: 18934,
    activeChecks: 16234,
    passiveChecks: 2700,
    checkResult: 'Latest check results processed',
    avgCheckLatency: 0.234,
    avgCheckExecution: 1.567,
    clusterNodes: 4,
    clusterHealthy: 3
  });

  const [monitoredObjects, setMonitoredObjects] = useState([
    {
      objectName: 'aleksandra-core-switch-01',
      objectType: 'Host',
      checkCommand: 'hostalive',
      state: 'UP',
      stateType: 'HARD',
      lastCheck: '20:42:45',
      nextCheck: '20:47:45',
      checkInterval: '5m',
      retryInterval: '1m',
      maxCheckAttempts: 3,
      checkAttempt: 1,
      lastStateChange: '2026-03-17 09:15:30',
      stateDuration: '7d 11h 27m',
      lastNotification: 'N/A',
      notificationInterval: '30m',
      isFlapping: false,
      inDowntime: false,
      acknowledged: false,
      activeChecks: true,
      passiveChecks: false,
      notifications: true,
      eventHandler: false,
      output: 'PING OK - Packet loss = 0%, RTA = 1.234ms',
      perfdata: 'rta=1.234000ms;3000.000000;5000.000000;0.000000 pl=0%;80;100;0'
    },
    {
      objectName: 'aleksandra-web-server-01',
      objectType: 'Host',
      checkCommand: 'hostalive',
      state: 'UP',
      stateType: 'HARD',
      lastCheck: '20:42:30',
      nextCheck: '20:47:30',
      checkInterval: '5m',
      retryInterval: '1m',
      maxCheckAttempts: 3,
      checkAttempt: 1,
      lastStateChange: '2026-03-24 04:53:54',
      stateDuration: '15h 48m 36s',
      lastNotification: 'N/A',
      notificationInterval: '30m',
      isFlapping: false,
      inDowntime: false,
      acknowledged: false,
      activeChecks: true,
      passiveChecks: true,
      notifications: true,
      eventHandler: true,
      output: 'PING OK - Packet loss = 0%, RTA = 2.456ms',
      perfdata: 'rta=2.456000ms;3000.000000;5000.000000;0.000000 pl=0%;80;100;0'
    },
    {
      objectName: 'HTTP Service',
      objectType: 'Service',
      checkCommand: 'http',
      state: 'OK',
      stateType: 'HARD',
      lastCheck: '20:42:15',
      nextCheck: '20:47:15',
      checkInterval: '5m',
      retryInterval: '1m',
      maxCheckAttempts: 3,
      checkAttempt: 1,
      lastStateChange: '2026-03-24 18:19:45',
      stateDuration: '2h 22m 30s',
      lastNotification: 'N/A',
      notificationInterval: '30m',
      isFlapping: false,
      inDowntime: false,
      acknowledged: false,
      activeChecks: true,
      passiveChecks: false,
      notifications: true,
      eventHandler: false,
      output: 'HTTP OK: HTTP/1.1 200 OK - 4567 bytes in 0.234 second response time',
      perfdata: 'time=0.234567s;2.000000;5.000000;0.000000 size=4567B;;;0'
    },
    {
      objectName: 'aleksandra-db-server-01',
      objectType: 'Host',
      checkCommand: 'hostalive',
      state: 'DOWN',
      stateType: 'HARD',
      lastCheck: '20:42:58',
      nextCheck: '20:47:58',
      checkInterval: '5m',
      retryInterval: '1m',
      maxCheckAttempts: 3,
      checkAttempt: 3,
      lastStateChange: '2026-03-24 19:12:13',
      stateDuration: '1h 30m 45s',
      lastNotification: '19:42:13',
      notificationInterval: '30m',
      isFlapping: false,
      inDowntime: false,
      acknowledged: false,
      activeChecks: true,
      passiveChecks: false,
      notifications: true,
      eventHandler: true,
      output: 'CRITICAL - Host Unreachable (10.0.2.15)',
      perfdata: ''
    },
    {
      objectName: 'MySQL Service',
      objectType: 'Service',
      checkCommand: 'mysql',
      state: 'CRITICAL',
      stateType: 'HARD',
      lastCheck: '20:42:58',
      nextCheck: '20:47:58',
      checkInterval: '5m',
      retryInterval: '1m',
      maxCheckAttempts: 3,
      checkAttempt: 3,
      lastStateChange: '2026-03-24 19:12:13',
      stateDuration: '1h 30m 45s',
      lastNotification: '19:42:13',
      notificationInterval: '30m',
      isFlapping: false,
      inDowntime: false,
      acknowledged: true,
      activeChecks: true,
      passiveChecks: false,
      notifications: true,
      eventHandler: true,
      output: 'CRITICAL - MySQL server not running',
      perfdata: ''
    }
  ]);

  const [icingaCluster, setIcingaCluster] = useState([
    {
      nodeName: 'icinga2-master-01.aleksandra.ai',
      nodeType: 'Master',
      endpoint: 'icinga2-master-01.aleksandra.ai',
      zone: 'master',
      status: 'Connected',
      lastSeen: '20:42:55',
      version: 'r2.14.2-1',
      startTime: '2026-02-08 09:15:30',
      uptime: '45 days, 11 hours',
      activeObjects: 4567,
      checkLatency: 0.123,
      checkExecution: 1.234,
      load1: 0.45,
      load5: 0.67,
      load15: 0.89,
      processCount: 245,
      memoryUsage: '2.4 GB',
      features: ['checker', 'notification', 'api', 'mainlog', 'debuglog']
    },
    {
      nodeName: 'icinga2-satellite-01.aleksandra.ai',
      nodeType: 'Satellite',
      endpoint: 'icinga2-satellite-01.aleksandra.ai',
      zone: 'dmz',
      status: 'Connected',
      lastSeen: '20:42:45',
      version: 'r2.14.2-1',
      startTime: '2026-02-15 14:22:18',
      uptime: '38 days, 6 hours',
      activeObjects: 1234,
      checkLatency: 0.234,
      checkExecution: 2.345,
      load1: 0.23,
      load5: 0.34,
      load15: 0.45,
      processCount: 123,
      memoryUsage: '1.2 GB',
      features: ['checker', 'api']
    },
    {
      nodeName: 'icinga2-satellite-02.aleksandra.ai',
      nodeType: 'Satellite',
      endpoint: 'icinga2-satellite-02.aleksandra.ai',
      zone: 'branch-office',
      status: 'Disconnected',
      lastSeen: '18:15:30',
      version: 'r2.14.1-1',
      startTime: '2026-02-20 10:45:00',
      uptime: '0 days, 0 hours',
      activeObjects: 678,
      checkLatency: 0,
      checkExecution: 0,
      load1: 0,
      load5: 0,
      load15: 0,
      processCount: 0,
      memoryUsage: '0 GB',
      features: []
    },
    {
      nodeName: 'icinga2-agent-01.aleksandra.ai',
      nodeType: 'Agent',
      endpoint: 'icinga2-agent-01.aleksandra.ai',
      zone: 'windows-agents',
      status: 'Connected',
      lastSeen: '20:42:38',
      version: 'r2.14.2-1',
      startTime: '2026-03-01 16:30:22',
      uptime: '23 days, 4 hours',
      activeObjects: 89,
      checkLatency: 0.045,
      checkExecution: 0.567,
      load1: 0.12,
      load5: 0.15,
      load15: 0.18,
      processCount: 67,
      memoryUsage: '512 MB',
      features: ['checker']
    }
  ]);

  const [icingaNotifications, setIcingaNotifications] = useState([
    {
      notificationId: 'ICINGA-2026-8901',
      notificationType: 'PROBLEM',
      objectType: 'Host',
      objectName: 'aleksandra-db-server-01',
      serviceName: null,
      state: 'DOWN',
      output: 'CRITICAL - Host Unreachable (10.0.2.15)',
      author: 'icinga2',
      comment: 'Host check failed',
      sentTime: '19:42:13',
      notificationMethod: 'email',
      recipients: ['admin@aleksandra.ai', 'oncall@aleksandra.ai'],
      acknowledged: false,
      escalated: true,
      escalationLevel: 2
    },
    {
      notificationId: 'ICINGA-2026-7823',
      notificationType: 'ACKNOWLEDGEMENT',
      objectType: 'Service',
      objectName: 'aleksandra-db-server-01',
      serviceName: 'MySQL Service',
      state: 'CRITICAL',
      output: 'Service acknowledged by DBA team',
      author: 'dba_admin',
      comment: 'Database maintenance in progress - expected downtime',
      sentTime: '20:15:45',
      notificationMethod: 'webhook',
      recipients: ['team@aleksandra.ai'],
      acknowledged: true,
      escalated: false,
      escalationLevel: 0
    },
    {
      notificationId: 'ICINGA-2026-6745',
      notificationType: 'RECOVERY',
      objectType: 'Service',
      objectName: 'aleksandra-web-server-01',
      serviceName: 'HTTPS Service',
      state: 'OK',
      output: 'HTTP OK: HTTP/1.1 200 OK - Service recovered',
      author: 'icinga2',
      comment: 'Service state changed to OK',
      sentTime: '18:30:22',
      notificationMethod: 'slack',
      recipients: ['webteam-channel'],
      acknowledged: false,
      escalated: false,
      escalationLevel: 0
    },
    {
      notificationId: 'ICINGA-2026-5667',
      notificationType: 'FLAPPINGSTART',
      objectType: 'Service',
      objectName: 'aleksandra-fw-dmz-01',
      serviceName: 'SNMP Service',
      state: 'WARNING',
      output: 'Service started flapping',
      author: 'icinga2',
      comment: 'Service state is changing frequently',
      sentTime: '17:45:30',
      notificationMethod: 'email',
      recipients: ['network@aleksandra.ai'],
      acknowledged: false,
      escalated: false,
      escalationLevel: 0
    }
  ]);

  const [checkStatistics, setCheckStatistics] = useState([
    {
      checkType: 'Host Checks',
      total: 2347,
      ok: 2289,
      warning: 0,
      critical: 34,
      unknown: 24,
      pending: 0,
      avgLatency: 0.123,
      avgExecution: 0.456,
      lastMinute: 234,
      last5Minutes: 1167,
      last15Minutes: 3501
    },
    {
      checkType: 'Service Checks',
      total: 12847,
      ok: 11956,
      warning: 456,
      critical: 234,
      unknown: 201,
      pending: 0,
      avgLatency: 0.234,
      avgExecution: 1.567,
      lastMinute: 1284,
      last5Minutes: 6423,
      last15Minutes: 19270
    }
  ]);

  const [icingaFeatures, setIcingaFeatures] = useState([
    {
      featureName: 'Checker',
      description: 'Execute active checks',
      status: 'Enabled',
      nodesEnabled: 4,
      lastActivity: '20:42:55',
      configHash: 'a1b2c3d4e5f6'
    },
    {
      featureName: 'Notification',
      description: 'Send notifications',
      status: 'Enabled',
      nodesEnabled: 2,
      lastActivity: '20:15:45',
      configHash: 'b2c3d4e5f6a1'
    },
    {
      featureName: 'API',
      description: 'REST API interface',
      status: 'Enabled',
      nodesEnabled: 3,
      lastActivity: '20:42:50',
      configHash: 'c3d4e5f6a1b2'
    },
    {
      featureName: 'Mainlog',
      description: 'Main log file',
      status: 'Enabled',
      nodesEnabled: 4,
      lastActivity: '20:42:55',
      configHash: 'd4e5f6a1b2c3'
    },
    {
      featureName: 'PerformanceData',
      description: 'Performance data processing',
      status: 'Enabled',
      nodesEnabled: 2,
      lastActivity: '20:42:30',
      configHash: 'e5f6a1b2c3d4'
    },
    {
      featureName: 'GraphiteWriter',
      description: 'Graphite metrics export',
      status: 'Disabled',
      nodesEnabled: 0,
      lastActivity: 'N/A',
      configHash: 'f6a1b2c3d4e5'
    }
  ]);

  const [monitoringTimeline, setMonitoringTimeline] = useState([
    { time: '20:43', hostsUp: 2289, hostsDown: 34, servicesOk: 11956, serviceProblems: 891, checkLatency: 0.234, clusterHealth: 3 },
    { time: '20:42', hostsUp: 2292, hostsDown: 31, servicesOk: 11989, serviceProblems: 858, checkLatency: 0.218, clusterHealth: 3 },
    { time: '20:41', hostsUp: 2295, hostsDown: 28, servicesOk: 12023, serviceProblems: 824, checkLatency: 0.256, clusterHealth: 4 },
    { time: '20:40', hostsUp: 2288, hostsDown: 35, servicesOk: 11934, serviceProblems: 913, checkLatency: 0.245, clusterHealth: 3 },
    { time: '20:39', hostsUp: 2301, hostsDown: 22, servicesOk: 12067, serviceProblems: 780, checkLatency: 0.203, clusterHealth: 4 },
    { time: '20:38', hostsUp: 2293, hostsDown: 30, servicesOk: 11956, serviceProblems: 891, checkLatency: 0.267, clusterHealth: 3 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update ICINGA metrics
      setIcingaMetrics(prev => ({
        ...prev,
        hostsUp: Math.max(prev.totalHosts * 0.9, prev.hostsUp + Math.floor((Math.random() - 0.2) * 8)),
        hostsDown: Math.max(10, Math.min(60, prev.hostsDown + Math.floor((Math.random() - 0.7) * 6))),
        hostsPending: Math.max(5, Math.min(50, prev.hostsPending + Math.floor((Math.random() - 0.8) * 8))),
        servicesOk: Math.max(prev.totalServices * 0.85, prev.servicesOk + Math.floor((Math.random() - 0.3) * 100)),
        servicesWarning: Math.max(200, prev.servicesWarning + Math.floor((Math.random() - 0.5) * 50)),
        servicesCritical: Math.max(100, prev.servicesCritical + Math.floor((Math.random() - 0.6) * 30)),
        servicesUnknown: Math.max(80, prev.servicesUnknown + Math.floor((Math.random() - 0.7) * 20)),
        activeChecks: Math.max(prev.totalChecks * 0.8, prev.activeChecks + Math.floor((Math.random() - 0.3) * 100)),
        passiveChecks: Math.max(1000, prev.passiveChecks + Math.floor((Math.random() - 0.5) * 50)),
        avgCheckLatency: Math.max(0.1, prev.avgCheckLatency + (Math.random() - 0.5) * 0.1),
        avgCheckExecution: Math.max(0.5, prev.avgCheckExecution + (Math.random() - 0.5) * 0.5),
        clusterHealthy: Math.max(2, Math.min(prev.clusterNodes, prev.clusterHealthy + Math.floor((Math.random() - 0.2) * 2)))
      }));

      // Update monitoring timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setMonitoringTimeline(prev => {
        const newData = {
          time: currentTime,
          hostsUp: Math.max(2000, prev[0]?.hostsUp + Math.floor((Math.random() - 0.2) * 20)) || 2289,
          hostsDown: Math.max(15, Math.min(60, prev[0]?.hostsDown + Math.floor((Math.random() - 0.7) * 8))) || 34,
          servicesOk: Math.max(10000, prev[0]?.servicesOk + Math.floor((Math.random() - 0.3) * 150)) || 11956,
          serviceProblems: Math.max(600, prev[0]?.serviceProblems + Math.floor((Math.random() - 0.4) * 100)) || 891,
          checkLatency: Math.max(0.1, prev[0]?.checkLatency + (Math.random() - 0.5) * 0.1) || 0.234,
          clusterHealth: Math.max(2, Math.min(4, prev[0]?.clusterHealth + Math.floor((Math.random() - 0.3) * 2))) || 3
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update monitored objects
      setMonitoredObjects(prev => prev.map(obj => ({
        ...obj,
        state: obj.objectName.includes('db-server') ? 'DOWN' : 
              obj.objectName === 'MySQL Service' ? 'CRITICAL' : 
              obj.objectType === 'Service' && Math.random() < 0.1 ? 'WARNING' : 
              obj.objectType === 'Host' ? 'UP' : 'OK',
        stateType: obj.state === 'DOWN' || obj.state === 'CRITICAL' ? 'HARD' : 'HARD',
        checkAttempt: obj.state === 'DOWN' || obj.state === 'CRITICAL' ? obj.maxCheckAttempts : 1,
        acknowledged: obj.acknowledged || (Math.random() < 0.1 && (obj.state === 'DOWN' || obj.state === 'CRITICAL'))
      })));

      // Update ICINGA cluster
      setIcingaCluster(prev => prev.map(node => ({
        ...node,
        status: node.nodeName.includes('satellite-02') ? 'Disconnected' : 'Connected',
        checkLatency: node.status === 'Connected' ? 
                     Math.max(0.01, node.checkLatency + (Math.random() - 0.5) * 0.05) : 0,
        checkExecution: node.status === 'Connected' ? 
                       Math.max(0.1, node.checkExecution + (Math.random() - 0.5) * 0.3) : 0,
        load1: node.status === 'Connected' ? 
              Math.max(0.1, Math.min(2.0, node.load1 + (Math.random() - 0.5) * 0.2)) : 0,
        load5: node.status === 'Connected' ? 
              Math.max(0.1, Math.min(2.0, node.load5 + (Math.random() - 0.5) * 0.15)) : 0,
        load15: node.status === 'Connected' ? 
               Math.max(0.1, Math.min(2.0, node.load15 + (Math.random() - 0.5) * 0.1)) : 0
      })));

      // Update check statistics
      setCheckStatistics(prev => prev.map(stat => ({
        ...stat,
        ok: Math.max(stat.total * 0.8, stat.ok + Math.floor((Math.random() - 0.3) * 50)),
        warning: Math.max(10, stat.warning + Math.floor((Math.random() - 0.6) * 20)),
        critical: Math.max(5, stat.critical + Math.floor((Math.random() - 0.7) * 10)),
        unknown: Math.max(5, stat.unknown + Math.floor((Math.random() - 0.7) * 8)),
        avgLatency: Math.max(0.05, stat.avgLatency + (Math.random() - 0.5) * 0.05),
        avgExecution: Math.max(0.2, stat.avgExecution + (Math.random() - 0.5) * 0.3),
        lastMinute: Math.max(50, stat.lastMinute + Math.floor((Math.random() - 0.5) * 20)),
        last5Minutes: Math.max(250, stat.last5Minutes + Math.floor((Math.random() - 0.5) * 100)),
        last15Minutes: Math.max(750, stat.last15Minutes + Math.floor((Math.random() - 0.5) * 300))
      })));

      // Update ICINGA features
      setIcingaFeatures(prev => prev.map(feature => ({
        ...feature,
        nodesEnabled: feature.status === 'Enabled' ? 
                     Math.max(1, Math.min(4, feature.nodesEnabled + Math.floor((Math.random() - 0.8) * 1))) : 0
      })));

      // Occasionally update notifications
      if (Math.random() < 0.2) {
        setIcingaNotifications(prev => prev.map(notif => ({
          ...notif,
          acknowledged: notif.acknowledged || (Math.random() < 0.3 && notif.notificationType === 'PROBLEM'),
          escalated: notif.escalated || (Math.random() < 0.1 && notif.notificationType === 'PROBLEM')
        })));
      }

    }, 62000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toUpperCase()) {
      case 'UP': case 'OK': case 'CONNECTED': case 'ENABLED': return 'text-green-400';
      case 'DOWN': case 'CRITICAL': case 'DISCONNECTED': case 'DISABLED': return 'text-red-400';
      case 'WARNING': case 'PENDING': return 'text-yellow-400';
      case 'UNKNOWN': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStateTypeColor = (stateType) => {
    switch(stateType.toUpperCase()) {
      case 'HARD': return 'text-red-400';
      case 'SOFT': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const getNotificationTypeColor = (type) => {
    switch(type.toUpperCase()) {
      case 'PROBLEM': return 'text-red-400';
      case 'RECOVERY': return 'text-green-400';
      case 'ACKNOWLEDGEMENT': return 'text-blue-400';
      case 'FLAPPINGSTART': case 'FLAPPINGSTOP': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getLatencyColor = (latency) => {
    if (latency >= 1) return 'text-red-400';
    if (latency >= 0.5) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getExecutionTimeColor = (execTime) => {
    if (execTime >= 5) return 'text-red-400';
    if (execTime >= 2) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getLoadColor = (load) => {
    if (load >= 1.5) return 'text-red-400';
    if (load >= 1.0) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getAvailabilityPercent = (up, total) => {
    return total > 0 ? ((up / total) * 100).toFixed(1) : '0.0';
  };

  const getAvailabilityColor = (percent) => {
    if (percent >= 99) return 'text-green-400';
    if (percent >= 95) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-cyan-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* ICINGA Monitoring Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                ❄️ ICINGA Network Monitoring
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>HOSTS: <span className="text-blue-400 font-mono">{icingaMetrics.hostsUp}/{icingaMetrics.totalHosts}</span></div>
                <div>SERVICES: <span className="text-cyan-400">{icingaMetrics.servicesOk.toLocaleString()}</span></div>
                <div>CHECKS: <span className="text-teal-400">{icingaMetrics.totalChecks.toLocaleString()}</span></div>
                <div>CLUSTER: <span className="text-blue-300">{icingaMetrics.clusterHealthy}/{icingaMetrics.clusterNodes}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">{getAvailabilityPercent(icingaMetrics.hostsUp, icingaMetrics.totalHosts)}%</div>
              <div className="text-sm text-gray-300">Host Availability</div>
              <div className="text-xs text-blue-300">Latency: {icingaMetrics.avgCheckLatency.toFixed(3)}s</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key ICINGA Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Services OK</span>
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{(icingaMetrics.servicesOk / 1000).toFixed(1)}k</div>
            <div className="text-xs text-gray-400">Healthy services</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Services Critical</span>
              <span className="text-2xl">🔴</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{icingaMetrics.servicesCritical}</div>
            <div className="text-xs text-gray-400">Critical services</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Services Warning</span>
              <span className="text-2xl">⚠️</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{icingaMetrics.servicesWarning}</div>
            <div className="text-xs text-gray-400">Warning states</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-cyan-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Active Checks</span>
              <span className="text-2xl">🔄</span>
            </div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">{(icingaMetrics.activeChecks / 1000).toFixed(1)}k</div>
            <div className="text-xs text-gray-400">Scheduled checks</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* ICINGA Monitoring Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 ICINGA Monitoring Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monitoringTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#3b82f6" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#3b82f6" />
                <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3b82f6' }}
                  labelStyle={{ color: '#3b82f6' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="hostsUp" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" name="Hosts Up" />
                <Area yAxisId="left" type="monotone" dataKey="hostsDown" fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" name="Hosts Down" />
                <Line yAxisId="left" type="monotone" dataKey="servicesOk" stroke="#06b6d4" strokeWidth={2} name="Services OK" />
                <Bar yAxisId="right" dataKey="serviceProblems" fill="#f59e0b" name="Service Problems" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Monitored Objects Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🎯 Monitored Objects Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {monitoredObjects.map((obj, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{obj.objectName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(obj.state)}`}>{obj.state}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{obj.objectType} • {obj.checkCommand}</div>
                  <div className="text-xs text-cyan-300 mb-1 line-clamp-2">{obj.output}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getStateTypeColor(obj.stateType)}>Type: {obj.stateType}</div>
                    <div className="text-purple-400">Attempt: {obj.checkAttempt}/{obj.maxCheckAttempts}</div>
                    <div className="text-yellow-400">Interval: {obj.checkInterval}</div>
                  </div>
                  <div className="text-xs text-orange-300 mb-1 truncate">
                    Duration: {obj.stateDuration.split(' ').slice(0, 3).join(' ')}
                  </div>
                  <div className="flex justify-between text-xs">
                    <div className="flex space-x-1">
                      {obj.acknowledged && <span className="text-green-400">A</span>}
                      {obj.inDowntime && <span className="text-blue-400">D</span>}
                      {obj.isFlapping && <span className="text-yellow-400">F</span>}
                      {obj.notifications && <span className="text-purple-400">N</span>}
                    </div>
                    <span className="text-gray-400">{obj.lastCheck}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* ICINGA Cluster Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏭 ICINGA Cluster Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {icingaCluster.map((node, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{node.nodeName.split('.')[0]}</span>
                    <span className={`text-xs font-bold ${getStatusColor(node.status)}`}>{node.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{node.nodeType} • Zone: {node.zone}</div>
                  <div className="text-xs text-cyan-300 mb-1">{node.version}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-purple-400">Objects: {node.activeObjects}</div>
                    <div className={getLatencyColor(node.checkLatency)}>Lat: {node.checkLatency.toFixed(3)}s</div>
                    <div className={getExecutionTimeColor(node.checkExecution)}>Exec: {node.checkExecution.toFixed(3)}s</div>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getLoadColor(node.load1)}>Load1: {node.load1.toFixed(2)}</div>
                    <div className={getLoadColor(node.load5)}>Load5: {node.load5.toFixed(2)}</div>
                    <div className={getLoadColor(node.load15)}>Load15: {node.load15.toFixed(2)}</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-orange-400">Mem: {node.memoryUsage}</span>
                    <span className="text-green-400">Proc: {node.processCount}</span>
                  </div>
                  <div className="text-xs text-yellow-300 mt-1 truncate">
                    Features: {node.features.slice(0, 3).join(', ')}{node.features.length > 3 ? '...' : ''}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ICINGA Notifications */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📧 ICINGA Notifications
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {icingaNotifications.map((notif, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-purple-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{notif.notificationId}</span>
                    <span className={`text-xs font-bold ${getNotificationTypeColor(notif.notificationType)}`}>
                      {notif.notificationType}
                    </span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">
                    {notif.objectName}{notif.serviceName ? ` - ${notif.serviceName}` : ''}
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{notif.objectType} • State: {notif.state}</div>
                  <div className="text-xs text-cyan-300 mb-1 line-clamp-2">{notif.output}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-yellow-400">Method: {notif.notificationMethod}</div>
                    <div className="text-purple-400">Author: {notif.author}</div>
                  </div>
                  {notif.escalated && (
                    <div className="text-xs text-red-400 mb-1">Escalated (Level {notif.escalationLevel})</div>
                  )}
                  <div className="flex justify-between text-xs">
                    <span className={notif.acknowledged ? 'text-green-400' : 'text-gray-400'}>
                      {notif.acknowledged ? 'Acknowledged' : 'Unacknowledged'}
                    </span>
                    <span className="text-gray-400">{notif.sentTime}</span>
                  </div>
                  {notif.comment && (
                    <div className="text-xs text-orange-300 mt-1 line-clamp-1">
                      Comment: {notif.comment}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Check Statistics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Check Statistics
            </h3>
            <div className="space-y-3">
              {checkStatistics.map((stat, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{stat.checkType}</div>
                  <div className={`text-lg font-bold mb-1 ${getAvailabilityColor(getAvailabilityPercent(stat.ok, stat.total))}`}>
                    {getAvailabilityPercent(stat.ok, stat.total)}% OK
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs mb-2">
                    <div className="text-green-400">OK: {stat.ok}</div>
                    <div className="text-yellow-400">Warn: {stat.warning}</div>
                    <div className="text-red-400">Crit: {stat.critical}</div>
                    <div className="text-purple-400">Unk: {stat.unknown}</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-2">
                    <div className={getLatencyColor(stat.avgLatency)}>
                      Latency: {stat.avgLatency.toFixed(3)}s
                    </div>
                    <div className={getExecutionTimeColor(stat.avgExecution)}>
                      Execution: {stat.avgExecution.toFixed(3)}s
                    </div>
                  </div>
                  <div className="text-xs text-cyan-400 mb-1">Check Volume:</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-blue-400">1m: {stat.lastMinute}</div>
                    <div className="text-teal-400">5m: {stat.last5Minutes}</div>
                    <div className="text-green-400">15m: {stat.last15Minutes}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ICINGA Features Status */}
        <div className="bg-gray-800 rounded-xl p-6 border border-blue-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            ⚙️ ICINGA Features Status
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {icingaFeatures.map((feature, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-white">{feature.featureName}</span>
                  <span className={`text-xs font-bold ${getStatusColor(feature.status)}`}>{feature.status}</span>
                </div>
                <div className="text-xs text-blue-300 mb-2">{feature.description}</div>
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div className="text-cyan-400">Nodes: {feature.nodesEnabled}/4</div>
                  <div className="text-purple-400">Hash: {feature.configHash.slice(0, 8)}...</div>
                </div>
                <div className="text-xs text-orange-400">
                  Last Activity: {feature.lastActivity}
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                  <div 
                    className={`h-2 rounded-full ${feature.status === 'Enabled' ? 'bg-green-400' : 'bg-red-400'}`}
                    style={{ width: `${feature.status === 'Enabled' ? (feature.nodesEnabled / 4) * 100 : 0}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            ICINGA NETWORK MONITORING | ALEKSANDRA AI MONITORING OPERATIONS | DISTRIBUTED INFRASTRUCTURE SURVEILLANCE
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Distributed Monitoring | Cluster Management | Notification System | Check Statistics | Feature Management | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}