// Google Cloud Operations Dashboard - March 2026
// Comprehensive Google Cloud Operations (formerly Stackdriver) monitoring dashboard for Google Cloud Platform infrastructure and application management
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar, FunnelChart, Funnel, LabelList } from 'recharts';

export default function GoogleCloudOperationsDashboard() {
  const [gcpMetrics, setGcpMetrics] = useState({
    totalResources: 2847,
    healthyResources: 2789,
    criticalAlerts: 6,
    warningAlerts: 18,
    totalCost: 8967.45,
    projects: 15,
    regions: 8,
    zones: 24,
    cpuUtilization: 62.7,
    memoryUtilization: 73.8,
    diskUtilization: 56.4,
    networkThroughput: 18.9
  });

  const [gcpServices, setGcpServices] = useState([
    {
      service: 'Compute Engine',
      status: 'healthy',
      instances: 89,
      cost: 3456.78,
      utilization: 68.4,
      alerts: 2,
      region: 'us-central1',
      machineType: 'n2-standard-4',
      uptime: 99.97
    },
    {
      service: 'Google Kubernetes Engine',
      status: 'healthy',
      instances: 12,
      cost: 1789.23,
      utilization: 74.6,
      alerts: 1,
      region: 'us-east1',
      machineType: 'e2-standard-2',
      uptime: 99.95
    },
    {
      service: 'Cloud SQL',
      status: 'warning',
      instances: 6,
      cost: 1234.56,
      utilization: 86.7,
      alerts: 4,
      region: 'us-central1',
      machineType: 'db-n1-standard-4',
      uptime: 99.92
    },
    {
      service: 'Cloud Storage',
      status: 'healthy',
      instances: 234,
      cost: 567.89,
      utilization: 45.3,
      alerts: 0,
      region: 'multi-region',
      machineType: 'Standard',
      uptime: 99.99
    },
    {
      service: 'Cloud Functions',
      status: 'critical',
      instances: 67,
      cost: 345.67,
      utilization: 92.8,
      alerts: 6,
      region: 'us-west1',
      machineType: '256MB',
      uptime: 98.45
    },
    {
      service: 'BigQuery',
      status: 'healthy',
      instances: 3,
      cost: 890.12,
      utilization: 34.7,
      alerts: 1,
      region: 'us',
      machineType: 'On-demand',
      uptime: 99.98
    },
    {
      service: 'Cloud Run',
      status: 'healthy',
      instances: 23,
      cost: 234.56,
      utilization: 52.3,
      alerts: 0,
      region: 'us-central1',
      machineType: '1vCPU',
      uptime: 99.96
    },
    {
      service: 'Pub/Sub',
      status: 'warning',
      instances: 45,
      cost: 123.45,
      utilization: 78.9,
      alerts: 3,
      region: 'global',
      machineType: 'Standard',
      uptime: 99.94
    }
  ]);

  const [projectHealth, setProjectHealth] = useState([
    {
      project: 'aleksandra-production-gcp',
      projectId: 'aleksandra-prod-12345',
      resources: 456,
      healthy: 441,
      warning: 12,
      critical: 3,
      cost: 4567.89,
      billing: 'enabled',
      region: 'us-central1',
      lastUpdated: '11:46:30'
    },
    {
      project: 'aleksandra-staging-gcp',
      projectId: 'aleksandra-stage-67890',
      resources: 234,
      healthy: 226,
      warning: 6,
      critical: 2,
      cost: 2345.67,
      billing: 'enabled',
      region: 'us-east1',
      lastUpdated: '11:45:15'
    },
    {
      project: 'aleksandra-development-gcp',
      projectId: 'aleksandra-dev-11111',
      resources: 123,
      healthy: 118,
      warning: 4,
      critical: 1,
      cost: 1234.56,
      billing: 'enabled',
      region: 'us-west1',
      lastUpdated: '11:44:45'
    },
    {
      project: 'aleksandra-data-gcp',
      projectId: 'aleksandra-data-22222',
      resources: 89,
      healthy: 85,
      warning: 3,
      critical: 1,
      cost: 890.12,
      billing: 'enabled',
      region: 'us-central1',
      lastUpdated: '11:43:20'
    }
  ]);

  const [cloudMonitoring, setCloudMonitoring] = useState([
    {
      metric: 'CPU Utilization',
      current: 62.7,
      threshold: 80,
      status: 'healthy',
      trend: '+2.3%',
      alerts: 2,
      resources: 156
    },
    {
      metric: 'Memory Utilization',
      current: 73.8,
      threshold: 85,
      status: 'healthy',
      trend: '+1.8%',
      alerts: 1,
      resources: 156
    },
    {
      metric: 'Disk Utilization',
      current: 56.4,
      threshold: 90,
      status: 'healthy',
      trend: '+0.5%',
      alerts: 0,
      resources: 234
    },
    {
      metric: 'Network Throughput',
      current: 18.9,
      threshold: 50,
      status: 'healthy',
      trend: '+5.2%',
      alerts: 0,
      resources: 89
    },
    {
      metric: 'Error Rate',
      current: 0.8,
      threshold: 5,
      status: 'healthy',
      trend: '-0.3%',
      alerts: 0,
      resources: 67
    },
    {
      metric: 'Request Latency',
      current: 245,
      threshold: 1000,
      status: 'healthy',
      trend: '-12ms',
      alerts: 0,
      resources: 45
    }
  ]);

  const [gcpAlerts, setGcpAlerts] = useState([
    {
      id: 'ALERT-GCP-789012',
      severity: 'critical',
      service: 'Cloud Functions',
      policy: 'Function Execution Time',
      condition: '> 5 minutes',
      value: '7.8 minutes',
      resource: 'aleksandra-image-processor',
      project: 'aleksandra-production-gcp',
      region: 'us-west1',
      fired: '11:42:20',
      duration: '5m 17s',
      status: 'active'
    },
    {
      id: 'ALERT-GCP-456789',
      severity: 'warning',
      service: 'Cloud SQL',
      policy: 'CPU Utilization',
      condition: '> 80%',
      value: '86.7%',
      resource: 'aleksandra-main-db',
      project: 'aleksandra-production-gcp',
      region: 'us-central1',
      fired: '11:38:45',
      duration: '8m 52s',
      status: 'investigating'
    },
    {
      id: 'ALERT-GCP-123456',
      severity: 'warning',
      service: 'Pub/Sub',
      policy: 'Message Backlog',
      condition: '> 1000 messages',
      value: '2,345 messages',
      resource: 'aleksandra-processing-queue',
      project: 'aleksandra-staging-gcp',
      region: 'global',
      fired: '11:40:15',
      duration: '7m 22s',
      status: 'acknowledged'
    },
    {
      id: 'ALERT-GCP-345678',
      severity: 'info',
      service: 'Compute Engine',
      policy: 'Maintenance Window',
      condition: 'Scheduled',
      value: 'March 25, 03:00 UTC',
      resource: 'aleksandra-web-vm-01',
      project: 'aleksandra-staging-gcp',
      region: 'us-east1',
      fired: '11:30:00',
      duration: '17m 37s',
      status: 'planned'
    }
  ]);

  const [cloudLogging, setCloudLogging] = useState([
    {
      logName: 'aleksandra-application-logs',
      entries: 2456789,
      size: '3.4 GB',
      retention: '30 days',
      ingestion: '450 MB/day',
      queries: 1234,
      errors: 89,
      warnings: 234,
      info: 2345567
    },
    {
      logName: 'aleksandra-audit-logs',
      entries: 567890,
      size: '890 MB',
      retention: '365 days',
      ingestion: '125 MB/day',
      queries: 567,
      errors: 12,
      warnings: 45,
      info: 567833
    },
    {
      logName: 'aleksandra-security-logs',
      entries: 1234567,
      size: '1.8 GB',
      retention: '90 days',
      ingestion: '275 MB/day',
      queries: 890,
      errors: 34,
      warnings: 123,
      info: 1234410
    }
  ]);

  const [gcpBilling, setGcpBilling] = useState([
    {
      service: 'Compute Engine',
      cost: 3456.78,
      percentage: 38.6,
      trend: '+4.2%',
      budget: 3600.00,
      forecast: 3589.45,
      usage: 'VM Instances'
    },
    {
      service: 'Google Kubernetes Engine',
      cost: 1789.23,
      percentage: 20.0,
      trend: '+2.8%',
      budget: 1800.00,
      forecast: 1834.56,
      usage: 'Node Pools'
    },
    {
      service: 'Cloud SQL',
      cost: 1234.56,
      percentage: 13.8,
      trend: '+6.1%',
      budget: 1300.00,
      forecast: 1309.78,
      usage: 'Database Instances'
    },
    {
      service: 'Cloud Storage',
      cost: 567.89,
      percentage: 6.3,
      trend: '+1.2%',
      budget: 600.00,
      forecast: 574.23,
      usage: 'Storage Buckets'
    },
    {
      service: 'BigQuery',
      cost: 890.12,
      percentage: 9.9,
      trend: '+8.7%',
      budget: 900.00,
      forecast: 968.34,
      usage: 'Query Processing'
    },
    {
      service: 'Cloud Functions',
      cost: 345.67,
      percentage: 3.9,
      trend: '+12.4%',
      budget: 400.00,
      forecast: 388.45,
      usage: 'Function Invocations'
    },
    {
      service: 'Cloud Run',
      cost: 234.56,
      percentage: 2.6,
      trend: '+3.1%',
      budget: 250.00,
      forecast: 241.78,
      usage: 'Container Requests'
    },
    {
      service: 'Networking',
      cost: 448.64,
      percentage: 5.0,
      trend: '+1.8%',
      budget: 500.00,
      forecast: 456.89,
      usage: 'Data Transfer'
    }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    { time: '11:47', cpu: 62.7, memory: 73.8, disk: 56.4, network: 18.9, requests: 1567, cost: 8967 },
    { time: '11:46', cpu: 61.2, memory: 72.4, disk: 55.8, network: 19.3, requests: 1456, cost: 8923 },
    { time: '11:45', cpu: 63.8, memory: 74.2, disk: 57.1, network: 18.6, requests: 1678, cost: 8989 },
    { time: '11:44', cpu: 60.9, memory: 71.7, disk: 54.9, network: 19.8, requests: 1345, cost: 8856 },
    { time: '11:43', cpu: 64.1, memory: 75.3, disk: 58.2, network: 18.2, requests: 1789, cost: 9012 },
    { time: '11:42', cpu: 61.7, memory: 73.1, disk: 56.7, network: 19.1, requests: 1456, cost: 8934 }
  ]);

  const [gcpRegions, setGcpRegions] = useState([
    {
      region: 'us-central1',
      location: 'Iowa, USA',
      resources: 234,
      cost: 3456.78,
      latency: 15.4,
      availability: 99.97,
      utilization: 68.4,
      alerts: 5,
      zones: 4
    },
    {
      region: 'us-east1',
      location: 'South Carolina, USA',
      resources: 189,
      cost: 2345.67,
      latency: 22.7,
      availability: 99.95,
      utilization: 62.8,
      alerts: 2,
      zones: 3
    },
    {
      region: 'us-west1',
      location: 'Oregon, USA',
      resources: 156,
      cost: 1789.23,
      latency: 28.9,
      availability: 98.45,
      utilization: 75.9,
      alerts: 8,
      zones: 3
    },
    {
      region: 'europe-west1',
      location: 'Belgium',
      resources: 123,
      cost: 1234.56,
      latency: 45.6,
      availability: 99.94,
      utilization: 54.7,
      alerts: 1,
      zones: 3
    },
    {
      region: 'asia-east1',
      location: 'Taiwan',
      resources: 89,
      cost: 890.12,
      latency: 89.3,
      availability: 99.92,
      utilization: 48.2,
      alerts: 2,
      zones: 3
    }
  ]);

  const [traceAnalysis, setTraceAnalysis] = useState([
    {
      service: 'aleksandra-web-api',
      traces: 15678,
      avgLatency: 245,
      p99Latency: 1245,
      errorRate: 0.8,
      throughput: 234,
      spans: 45678,
      dependencies: 8
    },
    {
      service: 'aleksandra-auth-service',
      traces: 8901,
      avgLatency: 156,
      p99Latency: 678,
      errorRate: 0.3,
      throughput: 156,
      spans: 23456,
      dependencies: 4
    },
    {
      service: 'aleksandra-data-processor',
      traces: 5672,
      avgLatency: 567,
      p99Latency: 2345,
      errorRate: 2.1,
      throughput: 89,
      spans: 34567,
      dependencies: 12
    },
    {
      service: 'aleksandra-notification-service',
      traces: 3456,
      avgLatency: 89,
      p99Latency: 234,
      errorRate: 0.1,
      throughput: 78,
      spans: 12345,
      dependencies: 3
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update GCP metrics
      setGcpMetrics(prev => ({
        ...prev,
        healthyResources: Math.max(prev.totalResources * 0.95, prev.healthyResources + Math.floor((Math.random() - 0.3) * 10)),
        criticalAlerts: Math.max(0, prev.criticalAlerts + Math.floor((Math.random() - 0.7) * 3)),
        warningAlerts: Math.max(0, prev.warningAlerts + Math.floor((Math.random() - 0.6) * 5)),
        totalCost: Math.max(7000, prev.totalCost + (Math.random() - 0.5) * 200),
        cpuUtilization: Math.max(30, Math.min(95, prev.cpuUtilization + (Math.random() - 0.5) * 8)),
        memoryUtilization: Math.max(40, Math.min(90, prev.memoryUtilization + (Math.random() - 0.5) * 6)),
        diskUtilization: Math.max(30, Math.min(80, prev.diskUtilization + (Math.random() - 0.5) * 4)),
        networkThroughput: Math.max(10, prev.networkThroughput + (Math.random() - 0.5) * 5)
      }));

      // Update performance metrics timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceMetrics(prev => {
        const newData = {
          time: currentTime,
          cpu: Math.max(30, Math.min(95, prev[0]?.cpu + (Math.random() - 0.5) * 8)) || 62.7,
          memory: Math.max(40, Math.min(90, prev[0]?.memory + (Math.random() - 0.5) * 6)) || 73.8,
          disk: Math.max(30, Math.min(80, prev[0]?.disk + (Math.random() - 0.5) * 4)) || 56.4,
          network: Math.max(10, prev[0]?.network + (Math.random() - 0.5) * 5) || 18.9,
          requests: Math.max(1000, prev[0]?.requests + Math.floor((Math.random() - 0.5) * 400)) || 1567,
          cost: Math.max(7000, prev[0]?.cost + (Math.random() - 0.5) * 200) || 8967
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update GCP services
      setGcpServices(prev => prev.map(service => ({
        ...service,
        utilization: Math.max(20, Math.min(98, service.utilization + (Math.random() - 0.5) * 8)),
        cost: Math.max(service.cost * 0.8, service.cost + (Math.random() - 0.5) * 100),
        alerts: Math.max(0, service.alerts + Math.floor((Math.random() - 0.8) * 2)),
        uptime: Math.max(95, Math.min(99.99, service.uptime + (Math.random() - 0.5) * 0.1)),
        instances: Math.max(1, service.instances + Math.floor((Math.random() - 0.5) * 3)),
        status: service.utilization > 90 || service.alerts > 5 ? 'critical' : 
                service.utilization > 75 || service.alerts > 2 ? 'warning' : 'healthy'
      })));

      // Update project health
      setProjectHealth(prev => prev.map(project => ({
        ...project,
        healthy: Math.max(project.resources * 0.9, project.healthy + Math.floor((Math.random() - 0.3) * 5)),
        warning: Math.max(0, project.warning + Math.floor((Math.random() - 0.7) * 2)),
        critical: Math.max(0, project.critical + Math.floor((Math.random() - 0.9) * 1)),
        cost: Math.max(project.cost * 0.8, project.cost + (Math.random() - 0.5) * 200)
      })));

      // Update cloud monitoring
      setCloudMonitoring(prev => prev.map(metric => ({
        ...metric,
        current: metric.metric.includes('Rate') || metric.metric.includes('Latency') ? 
                Math.max(0, metric.current + (Math.random() - 0.5) * (metric.current * 0.1)) :
                Math.max(10, Math.min(95, metric.current + (Math.random() - 0.5) * 8)),
        alerts: Math.max(0, metric.alerts + Math.floor((Math.random() - 0.8) * 2))
      })));

      // Update GCP billing
      setGcpBilling(prev => prev.map(service => ({
        ...service,
        cost: Math.max(service.cost * 0.8, service.cost + (Math.random() - 0.5) * 100),
        forecast: Math.max(service.forecast * 0.8, service.forecast + (Math.random() - 0.5) * 80)
      })));

      // Update GCP regions
      setGcpRegions(prev => prev.map(region => ({
        ...region,
        cost: Math.max(region.cost * 0.9, region.cost + (Math.random() - 0.5) * 100),
        latency: Math.max(10, region.latency + (Math.random() - 0.5) * 3),
        availability: Math.max(98, Math.min(100, region.availability + (Math.random() - 0.5) * 0.2)),
        utilization: Math.max(30, Math.min(95, region.utilization + (Math.random() - 0.5) * 6)),
        alerts: Math.max(0, region.alerts + Math.floor((Math.random() - 0.8) * 2))
      })));

      // Update cloud logging
      setCloudLogging(prev => prev.map(log => ({
        ...log,
        entries: Math.max(100000, log.entries + Math.floor((Math.random() - 0.5) * 10000)),
        queries: Math.max(100, log.queries + Math.floor((Math.random() - 0.5) * 50)),
        errors: Math.max(0, log.errors + Math.floor((Math.random() - 0.8) * 5)),
        warnings: Math.max(0, log.warnings + Math.floor((Math.random() - 0.7) * 10))
      })));

      // Update trace analysis
      setTraceAnalysis(prev => prev.map(trace => ({
        ...trace,
        traces: Math.max(1000, trace.traces + Math.floor((Math.random() - 0.5) * 500)),
        avgLatency: Math.max(50, trace.avgLatency + Math.floor((Math.random() - 0.5) * 50)),
        p99Latency: Math.max(trace.avgLatency * 2, trace.p99Latency + Math.floor((Math.random() - 0.5) * 100)),
        errorRate: Math.max(0, trace.errorRate + (Math.random() - 0.5) * 0.5),
        throughput: Math.max(10, trace.throughput + Math.floor((Math.random() - 0.5) * 20)),
        spans: Math.max(10000, trace.spans + Math.floor((Math.random() - 0.5) * 2000))
      })));

      // Occasionally update alert status
      if (Math.random() < 0.3) {
        setGcpAlerts(prev => prev.map(alert => {
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
    }, 38000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'healthy': case 'resolved': return 'text-green-400';
      case 'critical': case 'active': return 'text-red-400';
      case 'warning': case 'investigating': case 'acknowledged': return 'text-yellow-400';
      case 'planned': case 'info': return 'text-blue-400';
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

  const getUptimeColor = (uptime) => {
    if (uptime >= 99.5) return 'text-green-400';
    if (uptime >= 99.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCostTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const getMetricStatusColor = (current, threshold) => {
    if (current >= threshold * 0.9) return 'text-red-400';
    if (current >= threshold * 0.75) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getErrorRateColor = (rate) => {
    if (rate >= 5) return 'text-red-400';
    if (rate >= 1) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-gray-900 to-green-800 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Google Cloud Operations Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                ☁️ Google Cloud Operations Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>RESOURCES: <span className="text-blue-400 font-mono">{gcpMetrics.healthyResources}/{gcpMetrics.totalResources}</span></div>
                <div>PROJECTS: <span className="text-green-400">{gcpMetrics.projects}</span></div>
                <div>REGIONS: <span className="text-cyan-400">{gcpMetrics.regions}</span></div>
                <div>ZONES: <span className="text-yellow-400">{gcpMetrics.zones}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-400">${gcpMetrics.totalCost.toFixed(2)}</div>
              <div className="text-sm text-gray-300">Monthly Cost</div>
              <div className="text-xs text-green-300">Network: {gcpMetrics.networkThroughput.toFixed(1)} Gbps</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key GCP Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">CPU Utilization</span>
              <span className="text-2xl">🖥️</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{gcpMetrics.cpuUtilization.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Compute Engine instances</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-green-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Memory Utilization</span>
              <span className="text-2xl">🧠</span>
            </div>
            <div className="text-2xl font-bold text-green-400 mb-1">{gcpMetrics.memoryUtilization.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">System memory usage</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-cyan-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Disk Utilization</span>
              <span className="text-2xl">💾</span>
            </div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">{gcpMetrics.diskUtilization.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Persistent disk usage</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Critical Alerts</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{gcpMetrics.criticalAlerts}</div>
            <div className="text-xs text-gray-400">Require immediate attention</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* GCP Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Google Cloud Infrastructure Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#4285f4" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#4285f4" />
                <YAxis yAxisId="right" orientation="right" stroke="#4285f4" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #4285f4' }}
                  labelStyle={{ color: '#4285f4' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="cpu" fill="#4285f4" fillOpacity={0.3} stroke="#4285f4" name="CPU %" />
                <Area yAxisId="left" type="monotone" dataKey="memory" fill="#34a853" fillOpacity={0.3} stroke="#34a853" name="Memory %" />
                <Line yAxisId="right" type="monotone" dataKey="network" stroke="#00d4ff" strokeWidth={2} name="Network (Gbps)" />
                <Bar yAxisId="right" dataKey="requests" fill="#fbbc04" name="Requests (×100)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* GCP Billing Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💰 Google Cloud Billing & Cost Analysis
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {gcpBilling.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{service.service}</span>
                    <span className={`text-sm font-bold ${getCostTrendColor(service.trend)}`}>{service.trend}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-1">
                    <div className="text-green-400">${service.cost.toFixed(2)}</div>
                    <div className="text-blue-400">{service.percentage.toFixed(1)}%</div>
                    <div className="text-cyan-400">${service.forecast.toFixed(2)} proj</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${service.cost >= service.budget * 0.95 ? 'bg-red-400' : 
                                                      service.cost >= service.budget * 0.80 ? 'bg-yellow-400' : 'bg-green-400'}`}
                      style={{ width: `${Math.min(100, (service.cost / service.budget) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Budget: ${service.budget.toFixed(2)} • {service.usage}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* GCP Services Health */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              ⚙️ Google Cloud Services Health
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {gcpServices.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{service.service}</span>
                    <span className={`text-xs font-bold ${getStatusColor(service.status)}`}>{service.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{service.region} • {service.machineType}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-green-400">{service.instances} instances</div>
                    <div className={getUtilizationColor(service.utilization)}>Util: {service.utilization.toFixed(1)}%</div>
                    <div className={getUptimeColor(service.uptime)}>SLA: {service.uptime.toFixed(2)}%</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-cyan-400">${service.cost.toFixed(2)}</span>
                    <span className={service.alerts > 0 ? 'text-red-400' : 'text-gray-400'}>{service.alerts} alerts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Health Status */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📂 GCP Project Health Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {projectHealth.map((project, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{project.project}</span>
                    <span className="text-xs text-green-400">ACTIVE</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{project.projectId} • {project.region}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-2">
                    <div className="text-green-400">{project.healthy} healthy</div>
                    <div className="text-yellow-400">{project.warning} warning</div>
                    <div className="text-red-400">{project.critical} critical</div>
                  </div>
                  <div className="text-sm text-cyan-400 mb-1">{project.resources} total resources</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">${project.cost.toFixed(2)}</span>
                    <span className="text-blue-400">Billing: {project.billing}</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Updated: {project.lastUpdated}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Active GCP Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Cloud Monitoring Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {gcpAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.id}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{alert.service}</div>
                  <div className="text-xs text-green-300 mb-1">{alert.resource}</div>
                  <div className="text-xs text-blue-300 mb-1">{alert.project} • {alert.region}</div>
                  <div className="text-xs text-yellow-300 mb-2">{alert.policy}: {alert.condition}</div>
                  <div className="text-xs text-red-300 mb-2">Current: {alert.value}</div>
                  <div className="flex justify-between text-xs">
                    <span className={getStatusColor(alert.status)}>{alert.status}</span>
                    <span className="text-gray-400">{alert.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cloud Monitoring & Trace Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Cloud Monitoring Metrics */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Cloud Monitoring Key Metrics
            </h3>
            <div className="space-y-3">
              {cloudMonitoring.map((metric, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-white">{metric.metric}</span>
                    <span className={`text-sm font-bold ${getMetricStatusColor(metric.current, metric.threshold)}`}>
                      {metric.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-blue-400">
                      {metric.metric.includes('Latency') ? `${metric.current}ms` : 
                       metric.metric.includes('Rate') ? `${metric.current}%` : 
                       metric.metric.includes('Throughput') ? `${metric.current} Gbps` : `${metric.current}%`}
                    </div>
                    <div className="text-gray-400">/ {metric.threshold}{metric.metric.includes('Latency') ? 'ms' : metric.metric.includes('Throughput') ? ' Gbps' : '%'}</div>
                    <div className={metric.trend.startsWith('-') ? 'text-green-400' : 'text-red-400'}>{metric.trend}</div>
                    <div className="text-yellow-400">{metric.resources} resources</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getMetricStatusColor(metric.current, metric.threshold) === 'text-green-400' ? 'bg-green-400' : 
                                                      getMetricStatusColor(metric.current, metric.threshold) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${Math.min(100, (metric.current / metric.threshold) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{metric.alerts} active alerts</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cloud Trace Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔗 Cloud Trace Performance Analysis
            </h3>
            <div className="space-y-3">
              {traceAnalysis.map((trace, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{trace.service}</div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="text-blue-400">{trace.traces.toLocaleString()} traces</div>
                    <div className="text-green-400">{trace.avgLatency}ms avg</div>
                    <div className="text-yellow-400">{trace.p99Latency}ms p99</div>
                    <div className={getErrorRateColor(trace.errorRate)}>{trace.errorRate.toFixed(1)}% errors</div>
                    <div className="text-cyan-400">{trace.throughput} req/s</div>
                    <div className="text-purple-400">{trace.spans.toLocaleString()} spans</div>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-indigo-400">{trace.dependencies} dependencies</span>
                    <span className={getErrorRateColor(trace.errorRate)}>
                      {trace.errorRate < 1 ? 'HEALTHY' : trace.errorRate < 5 ? 'WARNING' : 'CRITICAL'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cloud Logging & Regional Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Cloud Logging */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Cloud Logging Analysis
            </h3>
            <div className="space-y-4">
              {cloudLogging.map((log, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{log.logName}</div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-blue-400">{log.entries.toLocaleString()} entries</div>
                    <div className="text-green-400">{log.size} total</div>
                    <div className="text-cyan-400">{log.ingestion} daily</div>
                    <div className="text-purple-400">{log.retention}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs mt-2">
                    <div className="text-red-400">{log.errors} errors</div>
                    <div className="text-yellow-400">{log.warnings} warnings</div>
                    <div className="text-green-400">{log.info.toLocaleString()} info</div>
                    <div className="text-indigo-400">{log.queries} queries</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Distribution */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🌍 GCP Regional Distribution & Performance
            </h3>
            <div className="space-y-3">
              {gcpRegions.map((region, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{region.region}</span>
                    <span className="text-xs text-blue-300">{region.zones} zones</span>
                  </div>
                  <div className="text-xs text-green-300 mb-2">{region.location}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-blue-400">{region.resources} resources</div>
                    <div className="text-cyan-400">${region.cost.toFixed(2)}</div>
                    <div className="text-yellow-400">{region.latency.toFixed(1)}ms</div>
                    <div className={getUptimeColor(region.availability)}>{region.availability.toFixed(2)}%</div>
                    <div className={getUtilizationColor(region.utilization)}>{region.utilization.toFixed(1)}%</div>
                    <div className={region.alerts > 0 ? 'text-red-400' : 'text-gray-400'}>{region.alerts} alerts</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className="bg-green-400 h-2 rounded-full" 
                      style={{ width: `${region.utilization}%` }}
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
            GOOGLE CLOUD OPERATIONS | ALEKSANDRA AI CLOUD MONITORING | GOOGLE CLOUD PLATFORM INFRASTRUCTURE
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Cloud Monitoring | Cloud Logging | Cloud Trace | Cost Management | Multi-Regional Performance | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}