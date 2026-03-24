// Nagios Monitoring Dashboard - March 2026
// Comprehensive Nagios Core-inspired network and infrastructure monitoring dashboard for enterprise alerting and status monitoring
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar } from 'recharts';

export default function NagiosMonitoringDashboard() {
  const [nagiosMetrics, setNagiosMetrics] = useState({
    totalHosts: 1847,
    hostsUp: 1789,
    hostsDown: 23,
    hostsUnreachable: 35,
    totalServices: 8934,
    servicesOk: 8456,
    servicesWarning: 234,
    servicesCritical: 89,
    servicesUnknown: 155,
    hostProblemsUnhandled: 45,
    serviceProblemsUnhandled: 178,
    activeChecks: 7234,
    passiveChecks: 1700,
    avgServiceLatency: 2.34,
    avgHostLatency: 1.89,
    checkExecutionTime: 0.567,
    nagiosLoadAverage: 0.78
  });

  const [monitoredHosts, setMonitoredHosts] = useState([
    {
      hostName: 'aleksandra-core-sw-01',
      hostAlias: 'Core Switch 01',
      address: '192.168.1.10',
      status: 'UP',
      lastCheck: '20:35:45',
      statusDuration: '7d 15h 23m',
      statusInformation: 'PING OK - Packet loss = 0%, RTA = 1.23ms',
      performanceData: 'rta=1.234000ms;3000.000000;5000.000000;0.000000 pl=0%;80;100;0',
      checkCommand: 'check-host-alive',
      lastStateChange: '2026-03-17 09:15:30',
      checkLatency: 0.034,
      checkExecutionTime: 0.012,
      nextScheduledCheck: '20:40:45',
      activeChecks: true,
      notifications: true,
      eventHandler: false,
      flapDetection: true,
      processPerformanceData: true,
      obsessOverHost: false,
      serviceCount: 12,
      problemsCount: 0
    },
    {
      hostName: 'aleksandra-web-srv-01',
      hostAlias: 'Web Server 01',
      address: '10.0.1.50',
      status: 'UP',
      lastCheck: '20:36:12',
      statusDuration: '15h 42m 18s',
      statusInformation: 'PING OK - Packet loss = 0%, RTA = 2.45ms',
      performanceData: 'rta=2.451000ms;3000.000000;5000.000000;0.000000 pl=0%;80;100;0',
      checkCommand: 'check-host-alive',
      lastStateChange: '2026-03-24 04:53:54',
      checkLatency: 0.067,
      checkExecutionTime: 0.023,
      nextScheduledCheck: '20:41:12',
      activeChecks: true,
      notifications: true,
      eventHandler: true,
      flapDetection: true,
      processPerformanceData: true,
      obsessOverHost: false,
      serviceCount: 18,
      problemsCount: 2
    },
    {
      hostName: 'aleksandra-db-srv-01',
      hostAlias: 'Database Server Primary',
      address: '10.0.2.15',
      status: 'DOWN',
      lastCheck: '20:35:58',
      statusDuration: '1h 23m 45s',
      statusInformation: 'CRITICAL - Host Unreachable (10.0.2.15)',
      performanceData: '',
      checkCommand: 'check-host-alive',
      lastStateChange: '2026-03-24 19:12:13',
      checkLatency: 0.123,
      checkExecutionTime: 30.001,
      nextScheduledCheck: '20:40:58',
      activeChecks: true,
      notifications: true,
      eventHandler: true,
      flapDetection: true,
      processPerformanceData: true,
      obsessOverHost: false,
      serviceCount: 24,
      problemsCount: 24
    },
    {
      hostName: 'aleksandra-backup-01',
      hostAlias: 'Backup Storage System',
      address: '10.0.3.100',
      status: 'UNREACHABLE',
      lastCheck: '20:34:30',
      statusDuration: '2h 45m 12s',
      statusInformation: 'CRITICAL - Host Unreachable (10.0.3.100)',
      performanceData: '',
      checkCommand: 'check-host-alive',
      lastStateChange: '2026-03-24 17:51:18',
      checkLatency: 0.089,
      checkExecutionTime: 30.001,
      nextScheduledCheck: '20:39:30',
      activeChecks: true,
      notifications: true,
      eventHandler: false,
      flapDetection: true,
      processPerformanceData: true,
      obsessOverHost: false,
      serviceCount: 8,
      problemsCount: 8
    },
    {
      hostName: 'aleksandra-fw-dmz-01',
      hostAlias: 'DMZ Firewall',
      address: '203.0.113.1',
      status: 'UP',
      lastCheck: '20:36:05',
      statusDuration: '45d 8h 15m',
      statusInformation: 'PING OK - Packet loss = 0%, RTA = 3.78ms',
      performanceData: 'rta=3.784000ms;3000.000000;5000.000000;0.000000 pl=0%;80;100;0',
      checkCommand: 'check-host-alive',
      lastStateChange: '2026-02-08 12:21:05',
      checkLatency: 0.045,
      checkExecutionTime: 0.018,
      nextScheduledCheck: '20:41:05',
      activeChecks: true,
      notifications: true,
      eventHandler: false,
      flapDetection: true,
      processPerformanceData: true,
      obsessOverHost: false,
      serviceCount: 15,
      problemsCount: 1
    }
  ]);

  const [monitoredServices, setMonitoredServices] = useState([
    {
      hostName: 'aleksandra-web-srv-01',
      serviceDescription: 'HTTP',
      status: 'OK',
      lastCheck: '20:35:30',
      statusDuration: '2h 15m 45s',
      statusInformation: 'HTTP OK: HTTP/1.1 200 OK - 3847 bytes in 0.234 second response time',
      performanceData: 'time=0.234567s;2.000000;5.000000;0.000000 size=3847B;;;0',
      checkCommand: 'check_http',
      lastStateChange: '2026-03-24 18:19:45',
      checkLatency: 0.023,
      checkExecutionTime: 0.567,
      nextScheduledCheck: '20:40:30',
      activeChecks: true,
      notifications: true,
      eventHandler: false,
      flapDetection: true,
      isFlapping: false,
      acknowledged: false,
      scheduledDowntime: false
    },
    {
      hostName: 'aleksandra-web-srv-01',
      serviceDescription: 'HTTPS',
      status: 'WARNING',
      lastCheck: '20:35:45',
      statusDuration: '15m 23s',
      statusInformation: 'HTTP WARNING: HTTP/1.1 200 OK - 3847 bytes in 3.456 second response time',
      performanceData: 'time=3.456789s;2.000000;5.000000;0.000000 size=3847B;;;0',
      checkCommand: 'check_https',
      lastStateChange: '2026-03-24 20:20:22',
      checkLatency: 0.034,
      checkExecutionTime: 3.789,
      nextScheduledCheck: '20:40:45',
      activeChecks: true,
      notifications: true,
      eventHandler: true,
      flapDetection: true,
      isFlapping: false,
      acknowledged: true,
      scheduledDowntime: false
    },
    {
      hostName: 'aleksandra-db-srv-01',
      serviceDescription: 'MySQL',
      status: 'CRITICAL',
      lastCheck: '20:35:58',
      statusDuration: '1h 23m 45s',
      statusInformation: 'CRITICAL - MySQL server not running',
      performanceData: '',
      checkCommand: 'check_mysql',
      lastStateChange: '2026-03-24 19:12:13',
      checkLatency: 0.089,
      checkExecutionTime: 10.001,
      nextScheduledCheck: '20:40:58',
      activeChecks: true,
      notifications: true,
      eventHandler: true,
      flapDetection: true,
      isFlapping: false,
      acknowledged: false,
      scheduledDowntime: false
    },
    {
      hostName: 'aleksandra-core-sw-01',
      serviceDescription: 'SNMP',
      status: 'OK',
      lastCheck: '20:36:15',
      statusDuration: '7d 15h 23m',
      statusInformation: 'SNMP OK - sysUpTime.0 = 247 days, 15:23:45.67',
      performanceData: 'uptime=21376425c;;;0',
      checkCommand: 'check_snmp_uptime',
      lastStateChange: '2026-03-17 09:12:52',
      checkLatency: 0.012,
      checkExecutionTime: 0.234,
      nextScheduledCheck: '20:41:15',
      activeChecks: true,
      notifications: true,
      eventHandler: false,
      flapDetection: true,
      isFlapping: false,
      acknowledged: false,
      scheduledDowntime: false
    },
    {
      hostName: 'aleksandra-backup-01',
      serviceDescription: 'Storage Space',
      status: 'UNKNOWN',
      lastCheck: '20:34:30',
      statusDuration: '2h 45m 12s',
      statusInformation: 'UNKNOWN - Unable to connect to host',
      performanceData: '',
      checkCommand: 'check_disk',
      lastStateChange: '2026-03-24 17:51:18',
      checkLatency: 0.067,
      checkExecutionTime: 30.001,
      nextScheduledCheck: '20:39:30',
      activeChecks: true,
      notifications: true,
      eventHandler: false,
      flapDetection: true,
      isFlapping: false,
      acknowledged: false,
      scheduledDowntime: false
    }
  ]);

  const [nagiosAlerts, setNagiosAlerts] = useState([
    {
      alertId: 'NAG-2026-8901',
      severity: 'critical',
      type: 'Host Alert',
      host: 'aleksandra-db-srv-01',
      service: null,
      state: 'DOWN',
      stateType: 'HARD',
      attempt: '3/3',
      output: 'CRITICAL - Host Unreachable (10.0.2.15)',
      time: '19:12:13',
      duration: '1h 23m 45s',
      notificationsSent: 3,
      acknowledged: false,
      acknowledgedBy: null,
      comment: '',
      scheduledDowntime: false
    },
    {
      alertId: 'NAG-2026-7823',
      severity: 'warning',
      type: 'Service Alert',
      host: 'aleksandra-web-srv-01',
      service: 'HTTPS',
      state: 'WARNING',
      stateType: 'SOFT',
      attempt: '2/3',
      output: 'HTTP WARNING: HTTP/1.1 200 OK - 3847 bytes in 3.456 second response time',
      time: '20:20:22',
      duration: '15m 23s',
      notificationsSent: 0,
      acknowledged: true,
      acknowledgedBy: 'webadmin',
      comment: 'Investigating SSL performance issue',
      scheduledDowntime: false
    },
    {
      alertId: 'NAG-2026-6745',
      severity: 'critical',
      type: 'Service Alert',
      host: 'aleksandra-db-srv-01',
      service: 'MySQL',
      state: 'CRITICAL',
      stateType: 'HARD',
      attempt: '3/3',
      output: 'CRITICAL - MySQL server not running',
      time: '19:12:13',
      duration: '1h 23m 45s',
      notificationsSent: 4,
      acknowledged: false,
      acknowledgedBy: null,
      comment: '',
      scheduledDowntime: false
    },
    {
      alertId: 'NAG-2026-5667',
      severity: 'unknown',
      type: 'Service Alert',
      host: 'aleksandra-backup-01',
      service: 'Storage Space',
      state: 'UNKNOWN',
      stateType: 'HARD',
      attempt: '3/3',
      output: 'UNKNOWN - Unable to connect to host',
      time: '17:51:18',
      duration: '2h 45m 12s',
      notificationsSent: 2,
      acknowledged: false,
      acknowledgedBy: null,
      comment: '',
      scheduledDowntime: false
    }
  ]);

  const [hostGroups, setHostGroups] = useState([
    {
      groupName: 'Network Equipment',
      hostsTotal: 67,
      hostsUp: 64,
      hostsDown: 2,
      hostsUnreachable: 1,
      servicesTotal: 234,
      servicesOk: 219,
      servicesWarning: 8,
      servicesCritical: 4,
      servicesUnknown: 3,
      hostProblems: 3,
      serviceProblems: 15
    },
    {
      groupName: 'Linux Servers',
      hostsTotal: 234,
      hostsUp: 228,
      hostsDown: 4,
      hostsUnreachable: 2,
      servicesTotal: 1456,
      servicesOk: 1398,
      servicesWarning: 34,
      servicesCritical: 15,
      servicesUnknown: 9,
      hostProblems: 6,
      serviceProblems: 58
    },
    {
      groupName: 'Windows Servers',
      hostsTotal: 156,
      hostsUp: 149,
      hostsDown: 5,
      hostsUnreachable: 2,
      servicesTotal: 987,
      servicesOk: 923,
      servicesWarning: 28,
      servicesCritical: 23,
      servicesUnknown: 13,
      hostProblems: 7,
      serviceProblems: 64
    },
    {
      groupName: 'Database Servers',
      hostsTotal: 45,
      hostsUp: 42,
      hostsDown: 2,
      hostsUnreachable: 1,
      servicesTotal: 345,
      servicesOk: 298,
      servicesWarning: 23,
      servicesCritical: 18,
      servicesUnknown: 6,
      hostProblems: 3,
      serviceProblems: 47
    },
    {
      groupName: 'Web Servers',
      hostsTotal: 89,
      hostsUp: 86,
      hostsDown: 2,
      hostsUnreachable: 1,
      servicesTotal: 567,
      servicesOk: 534,
      servicesWarning: 18,
      servicesCritical: 12,
      servicesUnknown: 3,
      hostProblems: 3,
      serviceProblems: 33
    }
  ]);

  const [nagiosConfig, setNagiosConfig] = useState([
    {
      component: 'Nagios Core',
      version: '4.4.14',
      status: 'Running',
      startTime: '2026-02-08 09:15:30',
      processId: 12345,
      activeChecks: true,
      passiveChecks: true,
      eventHandlers: true,
      notifications: true,
      flapDetection: true,
      obsessOverServices: false,
      obsessOverHosts: false,
      performanceData: true,
      configFile: '/usr/local/nagios/etc/nagios.cfg',
      lastConfigCheck: '20:30:15'
    }
  ]);

  const [performanceStats, setPerformanceStats] = useState([
    {
      metric: 'Service Check Latency',
      current: 2.34,
      average: 2.89,
      minimum: 0.12,
      maximum: 15.67,
      unit: 'seconds'
    },
    {
      metric: 'Host Check Latency',
      current: 1.89,
      average: 2.12,
      minimum: 0.08,
      maximum: 12.34,
      unit: 'seconds'
    },
    {
      metric: 'Service Check Execution Time',
      current: 0.567,
      average: 0.789,
      minimum: 0.001,
      maximum: 30.001,
      unit: 'seconds'
    },
    {
      metric: 'Host Check Execution Time',
      current: 0.234,
      average: 0.456,
      minimum: 0.001,
      maximum: 30.001,
      unit: 'seconds'
    },
    {
      metric: 'Active Checks',
      current: 7234,
      average: 7456,
      minimum: 6890,
      maximum: 8123,
      unit: 'checks'
    },
    {
      metric: 'Passive Checks',
      current: 1700,
      average: 1834,
      minimum: 1456,
      maximum: 2234,
      unit: 'checks'
    }
  ]);

  const [monitoringTimeline, setMonitoringTimeline] = useState([
    { time: '20:36', hostsUp: 1789, hostsDown: 23, servicesOk: 8456, serviceProblems: 478, checkLatency: 2.34, loadAvg: 0.78 },
    { time: '20:35', hostsUp: 1792, hostsDown: 20, servicesOk: 8489, serviceProblems: 445, checkLatency: 2.12, loadAvg: 0.72 },
    { time: '20:34', hostsUp: 1795, hostsDown: 17, servicesOk: 8523, serviceProblems: 411, checkLatency: 2.89, loadAvg: 0.84 },
    { time: '20:33', hostsUp: 1788, hostsDown: 24, servicesOk: 8434, serviceProblems: 500, checkLatency: 2.56, loadAvg: 0.79 },
    { time: '20:32', hostsUp: 1801, hostsDown: 11, servicesOk: 8567, serviceProblems: 367, checkLatency: 2.01, loadAvg: 0.67 },
    { time: '20:31', hostsUp: 1793, hostsDown: 19, servicesOk: 8456, serviceProblems: 478, checkLatency: 2.67, loadAvg: 0.81 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Nagios metrics
      setNagiosMetrics(prev => ({
        ...prev,
        hostsUp: Math.max(prev.totalHosts * 0.9, prev.hostsUp + Math.floor((Math.random() - 0.2) * 8)),
        hostsDown: Math.max(5, Math.min(50, prev.hostsDown + Math.floor((Math.random() - 0.7) * 6))),
        hostsUnreachable: Math.max(10, Math.min(80, prev.hostsUnreachable + Math.floor((Math.random() - 0.6) * 8))),
        servicesOk: Math.max(prev.totalServices * 0.85, prev.servicesOk + Math.floor((Math.random() - 0.3) * 50)),
        servicesWarning: Math.max(100, prev.servicesWarning + Math.floor((Math.random() - 0.5) * 20)),
        servicesCritical: Math.max(50, prev.servicesCritical + Math.floor((Math.random() - 0.6) * 15)),
        servicesUnknown: Math.max(80, prev.servicesUnknown + Math.floor((Math.random() - 0.7) * 10)),
        hostProblemsUnhandled: Math.max(20, prev.hostProblemsUnhandled + Math.floor((Math.random() - 0.5) * 8)),
        serviceProblemsUnhandled: Math.max(100, prev.serviceProblemsUnhandled + Math.floor((Math.random() - 0.4) * 20)),
        activeChecks: Math.max(6000, prev.activeChecks + Math.floor((Math.random() - 0.3) * 200)),
        passiveChecks: Math.max(1000, prev.passiveChecks + Math.floor((Math.random() - 0.5) * 100)),
        avgServiceLatency: Math.max(1, prev.avgServiceLatency + (Math.random() - 0.5) * 1),
        avgHostLatency: Math.max(0.5, prev.avgHostLatency + (Math.random() - 0.5) * 0.8),
        checkExecutionTime: Math.max(0.1, prev.checkExecutionTime + (Math.random() - 0.5) * 0.5),
        nagiosLoadAverage: Math.max(0.3, Math.min(2.0, prev.nagiosLoadAverage + (Math.random() - 0.5) * 0.3))
      }));

      // Update monitoring timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setMonitoringTimeline(prev => {
        const newData = {
          time: currentTime,
          hostsUp: Math.max(1600, prev[0]?.hostsUp + Math.floor((Math.random() - 0.2) * 20)) || 1789,
          hostsDown: Math.max(10, Math.min(50, prev[0]?.hostsDown + Math.floor((Math.random() - 0.7) * 8))) || 23,
          servicesOk: Math.max(7500, prev[0]?.servicesOk + Math.floor((Math.random() - 0.3) * 100)) || 8456,
          serviceProblems: Math.max(300, prev[0]?.serviceProblems + Math.floor((Math.random() - 0.4) * 50)) || 478,
          checkLatency: Math.max(1, prev[0]?.checkLatency + (Math.random() - 0.5) * 1) || 2.34,
          loadAvg: Math.max(0.4, Math.min(1.5, prev[0]?.loadAvg + (Math.random() - 0.5) * 0.2)) || 0.78
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update monitored hosts
      setMonitoredHosts(prev => prev.map(host => ({
        ...host,
        status: host.hostName.includes('db-srv') || host.hostName.includes('backup') ? 
               (host.hostName.includes('db-srv') ? 'DOWN' : 'UNREACHABLE') : 'UP',
        checkLatency: Math.max(0.01, host.checkLatency + (Math.random() - 0.5) * 0.05),
        checkExecutionTime: host.status === 'UP' ? 
                           Math.max(0.001, host.checkExecutionTime + (Math.random() - 0.5) * 0.02) : 
                           Math.max(20, host.checkExecutionTime + (Math.random() - 0.5) * 5),
        problemsCount: host.status === 'UP' ? 
                      Math.max(0, host.problemsCount + Math.floor((Math.random() - 0.8) * 2)) : 
                      Math.max(5, host.serviceCount)
      })));

      // Update monitored services
      setMonitoredServices(prev => prev.map(service => ({
        ...service,
        status: service.hostName.includes('db-srv') ? 'CRITICAL' :
               service.hostName.includes('backup') ? 'UNKNOWN' :
               service.serviceDescription === 'HTTPS' && service.hostName.includes('web') ? 'WARNING' : 'OK',
        checkLatency: Math.max(0.01, service.checkLatency + (Math.random() - 0.5) * 0.03),
        checkExecutionTime: service.status === 'OK' ? 
                           Math.max(0.1, service.checkExecutionTime + (Math.random() - 0.5) * 0.5) : 
                           Math.max(1, service.checkExecutionTime + (Math.random() - 0.5) * 2),
        acknowledged: service.acknowledged || (Math.random() < 0.1 && service.status !== 'OK')
      })));

      // Update host groups
      setHostGroups(prev => prev.map(group => ({
        ...group,
        hostsUp: Math.max(group.hostsTotal * 0.85, group.hostsUp + Math.floor((Math.random() - 0.2) * 3)),
        hostsDown: Math.max(0, Math.min(group.hostsTotal * 0.1, group.hostsDown + Math.floor((Math.random() - 0.8) * 2))),
        hostsUnreachable: Math.max(0, Math.min(group.hostsTotal * 0.05, group.hostsUnreachable + Math.floor((Math.random() - 0.9) * 1))),
        servicesOk: Math.max(group.servicesTotal * 0.8, group.servicesOk + Math.floor((Math.random() - 0.3) * 10)),
        servicesWarning: Math.max(5, group.servicesWarning + Math.floor((Math.random() - 0.6) * 5)),
        servicesCritical: Math.max(2, group.servicesCritical + Math.floor((Math.random() - 0.7) * 3)),
        servicesUnknown: Math.max(1, group.servicesUnknown + Math.floor((Math.random() - 0.8) * 2)),
        hostProblems: group.hostsDown + group.hostsUnreachable,
        serviceProblems: group.servicesWarning + group.servicesCritical + group.servicesUnknown
      })));

      // Update performance stats
      setPerformanceStats(prev => prev.map(stat => ({
        ...stat,
        current: stat.metric.includes('Latency') || stat.metric.includes('Execution') ? 
                Math.max(stat.minimum, Math.min(stat.maximum, stat.current + (Math.random() - 0.5) * (stat.average * 0.1))) :
                Math.max(stat.minimum, Math.min(stat.maximum, stat.current + Math.floor((Math.random() - 0.5) * (stat.average * 0.1))))
      })));

      // Occasionally update alert acknowledgments
      if (Math.random() < 0.2) {
        setNagiosAlerts(prev => prev.map(alert => ({
          ...alert,
          acknowledged: alert.acknowledged || (Math.random() < 0.3),
          acknowledgedBy: alert.acknowledged && !alert.acknowledgedBy ? 
                         (alert.type.includes('Service') ? 'sysadmin' : 'netadmin') : alert.acknowledgedBy
        })));
      }

    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toUpperCase()) {
      case 'UP': case 'OK': case 'RUNNING': return 'text-green-400';
      case 'DOWN': case 'CRITICAL': return 'text-red-400';
      case 'UNREACHABLE': case 'WARNING': return 'text-yellow-400';
      case 'UNKNOWN': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'unknown': return 'text-purple-400';
      case 'info': return 'text-blue-400';
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

  const getLatencyColor = (latency) => {
    if (latency >= 5) return 'text-red-400';
    if (latency >= 2) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getExecutionTimeColor = (execTime) => {
    if (execTime >= 10) return 'text-red-400';
    if (execTime >= 5) return 'text-yellow-400';
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
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-gray-900 to-red-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Nagios Monitoring Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                👁️ Nagios Network Monitoring
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>HOSTS: <span className="text-green-400 font-mono">{nagiosMetrics.hostsUp}/{nagiosMetrics.totalHosts}</span></div>
                <div>SERVICES: <span className="text-cyan-400">{nagiosMetrics.servicesOk.toLocaleString()}</span></div>
                <div>PROBLEMS: <span className="text-red-400">{nagiosMetrics.hostProblemsUnhandled + nagiosMetrics.serviceProblemsUnhandled}</span></div>
                <div>LATENCY: <span className="text-yellow-400">{nagiosMetrics.avgServiceLatency.toFixed(2)}s</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">{getAvailabilityPercent(nagiosMetrics.hostsUp, nagiosMetrics.totalHosts)}%</div>
              <div className="text-sm text-gray-300">Host Availability</div>
              <div className="text-xs text-green-300">Load: {nagiosMetrics.nagiosLoadAverage.toFixed(2)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Nagios Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Hosts Up</span>
              <span className="text-2xl">🟢</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{nagiosMetrics.hostsUp}</div>
            <div className="text-xs text-gray-400">Available hosts</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Services Critical</span>
              <span className="text-2xl">🔴</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{nagiosMetrics.servicesCritical}</div>
            <div className="text-xs text-gray-400">Critical services</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Services Warning</span>
              <span className="text-2xl">🟡</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{nagiosMetrics.servicesWarning}</div>
            <div className="text-xs text-gray-400">Warning states</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-orange-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Active Checks</span>
              <span className="text-2xl">✅</span>
            </div>
            <div className="text-2xl font-bold text-orange-400 mb-1">{(nagiosMetrics.activeChecks / 1000).toFixed(1)}k</div>
            <div className="text-xs text-gray-400">Scheduled checks</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Nagios Monitoring Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Nagios Monitoring Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monitoringTimeline.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#22c55e" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#22c55e" />
                <YAxis yAxisId="right" orientation="right" stroke="#22c55e" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #22c55e' }}
                  labelStyle={{ color: '#22c55e' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="hostsUp" fill="#22c55e" fillOpacity={0.3} stroke="#22c55e" name="Hosts Up" />
                <Area yAxisId="left" type="monotone" dataKey="hostsDown" fill="#ef4444" fillOpacity={0.3} stroke="#ef4444" name="Hosts Down" />
                <Line yAxisId="left" type="monotone" dataKey="servicesOk" stroke="#06b6d4" strokeWidth={2} name="Services OK" />
                <Bar yAxisId="right" dataKey="serviceProblems" fill="#f59e0b" name="Service Problems" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Monitored Hosts Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏠 Monitored Hosts Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {monitoredHosts.map((host, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{host.hostName}</span>
                    <span className={`text-xs font-bold ${getStatusColor(host.status)}`}>{host.status}</span>
                  </div>
                  <div className="text-xs text-green-300 mb-1">{host.hostAlias} • {host.address}</div>
                  <div className="text-xs text-cyan-300 mb-1 truncate">{host.statusInformation}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-blue-400">Services: {host.serviceCount}</div>
                    <div className={host.problemsCount > 0 ? 'text-red-400' : 'text-green-400'}>
                      Problems: {host.problemsCount}
                    </div>
                    <div className={getLatencyColor(host.checkLatency)}>Latency: {host.checkLatency.toFixed(3)}s</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div className={getExecutionTimeColor(host.checkExecutionTime)}>
                      Exec: {host.checkExecutionTime.toFixed(3)}s
                    </div>
                    <div className="text-purple-400">
                      Duration: {host.statusDuration.split(' ').slice(0, 2).join(' ')}
                    </div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-orange-400">{host.checkCommand}</span>
                    <span className="text-gray-400">{host.lastCheck}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Active Nagios Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Nagios Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {nagiosAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.alertId}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{alert.type}</div>
                  <div className="text-xs text-green-300 mb-1">{alert.host}{alert.service ? ` - ${alert.service}` : ''}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className={getStatusColor(alert.state)}>State: {alert.state}</div>
                    <div className={getStateTypeColor(alert.stateType)}>Type: {alert.stateType}</div>
                    <div className="text-cyan-400">Attempt: {alert.attempt}</div>
                  </div>
                  <div className="text-xs text-yellow-300 mb-1 line-clamp-2">{alert.output}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className="text-purple-400">Duration: {alert.duration}</div>
                    <div className="text-orange-400">Notif: {alert.notificationsSent}</div>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={alert.acknowledged ? 'text-green-400' : 'text-red-400'}>
                      {alert.acknowledged ? `Ack: ${alert.acknowledgedBy}` : 'Unacknowledged'}
                    </span>
                    <span className="text-gray-400">{alert.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monitored Services Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔧 Monitored Services Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {monitoredServices.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{service.serviceDescription}</span>
                    <span className={`text-xs font-bold ${getStatusColor(service.status)}`}>{service.status}</span>
                  </div>
                  <div className="text-xs text-green-300 mb-1">{service.hostName}</div>
                  <div className="text-xs text-cyan-300 mb-1 line-clamp-2">{service.statusInformation}</div>
                  <div className="grid grid-cols-2 gap-1 text-xs mb-1">
                    <div className={getLatencyColor(service.checkLatency)}>Latency: {service.checkLatency.toFixed(3)}s</div>
                    <div className={getExecutionTimeColor(service.checkExecutionTime)}>Exec: {service.checkExecutionTime.toFixed(3)}s</div>
                  </div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-purple-400">Duration: {service.statusDuration.split(' ').slice(0, 2).join(' ')}</span>
                    <span className="text-orange-400">{service.checkCommand}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <div className="flex space-x-1">
                      {service.acknowledged && <span className="text-green-400">A</span>}
                      {service.scheduledDowntime && <span className="text-blue-400">D</span>}
                      {service.isFlapping && <span className="text-yellow-400">F</span>}
                      {!service.activeChecks && <span className="text-gray-400">P</span>}
                    </div>
                    <span className="text-gray-400">{service.lastCheck}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Host Groups Summary */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🏭 Host Groups Summary
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {hostGroups.map((group, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1">{group.groupName}</div>
                  <div className="text-xs text-green-300 mb-1">
                    {group.hostsTotal} hosts • {group.servicesTotal} services
                  </div>
                  <div className={`text-lg font-bold mb-1 ${getAvailabilityColor(getAvailabilityPercent(group.hostsUp, group.hostsTotal))}`}>
                    {getAvailabilityPercent(group.hostsUp, group.hostsTotal)}% Available
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs mb-1">
                    <div className="text-green-400">Up: {group.hostsUp}</div>
                    <div className="text-red-400">Down: {group.hostsDown}</div>
                    <div className="text-yellow-400">Unreach: {group.hostsUnreachable}</div>
                    <div className="text-purple-400">Prob: {group.hostProblems}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs mb-1">
                    <div className="text-green-400">OK: {group.servicesOk}</div>
                    <div className="text-yellow-400">Warn: {group.servicesWarning}</div>
                    <div className="text-red-400">Crit: {group.servicesCritical}</div>
                    <div className="text-purple-400">Unk: {group.servicesUnknown}</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getAvailabilityColor(getAvailabilityPercent(group.hostsUp, group.hostsTotal)) === 'text-green-400' ? 'bg-green-400' : 
                                                      getAvailabilityColor(getAvailabilityPercent(group.hostsUp, group.hostsTotal)) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${getAvailabilityPercent(group.hostsUp, group.hostsTotal)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Statistics & Nagios Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Performance Statistics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Nagios Performance Statistics
            </h3>
            <div className="space-y-3">
              {performanceStats.map((stat, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-1">{stat.metric}</div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div>
                      <div className="text-green-400">Current</div>
                      <div className="text-white font-bold">
                        {typeof stat.current === 'number' ? 
                         (stat.unit === 'seconds' ? stat.current.toFixed(3) : stat.current.toFixed(0)) : 
                         stat.current} {stat.unit === 'seconds' ? 's' : stat.unit === 'checks' ? '' : stat.unit}
                      </div>
                    </div>
                    <div>
                      <div className="text-blue-400">Average</div>
                      <div className="text-gray-300">
                        {typeof stat.average === 'number' ? 
                         (stat.unit === 'seconds' ? stat.average.toFixed(3) : stat.average.toFixed(0)) : 
                         stat.average} {stat.unit === 'seconds' ? 's' : stat.unit === 'checks' ? '' : stat.unit}
                      </div>
                    </div>
                    <div>
                      <div className="text-yellow-400">Min</div>
                      <div className="text-gray-300">
                        {typeof stat.minimum === 'number' ? 
                         (stat.unit === 'seconds' ? stat.minimum.toFixed(3) : stat.minimum.toFixed(0)) : 
                         stat.minimum} {stat.unit === 'seconds' ? 's' : stat.unit === 'checks' ? '' : stat.unit}
                      </div>
                    </div>
                    <div>
                      <div className="text-red-400">Max</div>
                      <div className="text-gray-300">
                        {typeof stat.maximum === 'number' ? 
                         (stat.unit === 'seconds' ? stat.maximum.toFixed(3) : stat.maximum.toFixed(0)) : 
                         stat.maximum} {stat.unit === 'seconds' ? 's' : stat.unit === 'checks' ? '' : stat.unit}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nagios Configuration Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-green-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⚙️ Nagios Configuration Status
            </h3>
            <div className="space-y-3">
              {nagiosConfig.map((config, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-bold text-white">{config.component}</span>
                    <span className={`text-sm font-bold ${getStatusColor(config.status)}`}>{config.status}</span>
                  </div>
                  <div className="text-sm text-green-300 mb-2">{config.version}</div>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Start Time: {config.startTime}</div>
                    <div className="text-cyan-400">Process ID: {config.processId}</div>
                  </div>
                  <div className="text-xs text-purple-300 mb-3 truncate">
                    Config: {config.configFile}
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className={config.activeChecks ? 'text-green-400' : 'text-red-400'}>
                      Active Checks: {config.activeChecks ? 'ON' : 'OFF'}
                    </div>
                    <div className={config.passiveChecks ? 'text-green-400' : 'text-red-400'}>
                      Passive Checks: {config.passiveChecks ? 'ON' : 'OFF'}
                    </div>
                    <div className={config.eventHandlers ? 'text-green-400' : 'text-red-400'}>
                      Event Handlers: {config.eventHandlers ? 'ON' : 'OFF'}
                    </div>
                    <div className={config.notifications ? 'text-green-400' : 'text-red-400'}>
                      Notifications: {config.notifications ? 'ON' : 'OFF'}
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-xs mt-1">
                    <div className={config.flapDetection ? 'text-green-400' : 'text-red-400'}>
                      Flap Detection: {config.flapDetection ? 'ON' : 'OFF'}
                    </div>
                    <div className={config.obsessOverServices ? 'text-green-400' : 'text-gray-400'}>
                      Obsess Services: {config.obsessOverServices ? 'ON' : 'OFF'}
                    </div>
                    <div className={config.obsessOverHosts ? 'text-green-400' : 'text-gray-400'}>
                      Obsess Hosts: {config.obsessOverHosts ? 'ON' : 'OFF'}
                    </div>
                    <div className={config.performanceData ? 'text-green-400' : 'text-red-400'}>
                      Perf Data: {config.performanceData ? 'ON' : 'OFF'}
                    </div>
                  </div>
                  <div className="text-xs text-orange-400 mt-2">
                    Last Config Check: {config.lastConfigCheck}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            NAGIOS NETWORK MONITORING | ALEKSANDRA AI MONITORING OPERATIONS | INFRASTRUCTURE SURVEILLANCE & ALERTING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Host Monitoring | Service Checks | Performance Statistics | Alert Management | Configuration Status | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}