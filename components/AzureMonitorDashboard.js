// Azure Monitor Dashboard - March 2026
// Comprehensive Azure Monitor-inspired cloud monitoring dashboard for Microsoft Azure infrastructure and application performance management
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar } from 'recharts';

export default function AzureMonitorDashboard() {
  const [azureMetrics, setAzureMetrics] = useState({
    totalResources: 3456,
    healthyResources: 3398,
    criticalAlerts: 8,
    warningAlerts: 23,
    totalCost: 12847.93,
    subscriptions: 12,
    resourceGroups: 89,
    availabilityZones: 6,
    computeUtilization: 67.8,
    storageUtilization: 78.4,
    networkThroughput: 23.7,
    activeConnections: 15679
  });

  const [azureServices, setAzureServices] = useState([
    {
      service: 'Virtual Machines',
      status: 'healthy',
      instances: 145,
      cost: 4567.89,
      utilization: 72.3,
      alerts: 3,
      region: 'East US',
      sku: 'Standard_D4s_v3',
      availability: 99.96
    },
    {
      service: 'App Service',
      status: 'healthy',
      instances: 23,
      cost: 1234.56,
      utilization: 45.8,
      alerts: 1,
      region: 'West Europe',
      sku: 'P1v2',
      availability: 99.98
    },
    {
      service: 'Azure SQL Database',
      status: 'warning',
      instances: 8,
      cost: 2345.67,
      utilization: 89.4,
      alerts: 5,
      region: 'East US',
      sku: 'S3',
      availability: 99.94
    },
    {
      service: 'Storage Accounts',
      status: 'healthy',
      instances: 67,
      cost: 678.90,
      utilization: 56.7,
      alerts: 0,
      region: 'West US',
      sku: 'Standard_LRS',
      availability: 99.99
    },
    {
      service: 'Azure Functions',
      status: 'critical',
      instances: 34,
      cost: 456.78,
      utilization: 95.2,
      alerts: 8,
      region: 'North Europe',
      sku: 'Consumption',
      availability: 98.67
    },
    {
      service: 'Cosmos DB',
      status: 'healthy',
      instances: 5,
      cost: 1890.34,
      utilization: 34.6,
      alerts: 1,
      region: 'Southeast Asia',
      sku: 'Standard',
      availability: 99.97
    },
    {
      service: 'Azure Cache',
      status: 'warning',
      instances: 12,
      cost: 567.89,
      utilization: 78.9,
      alerts: 2,
      region: 'West Europe',
      sku: 'Premium P1',
      availability: 99.92
    },
    {
      service: 'Logic Apps',
      status: 'healthy',
      instances: 18,
      cost: 234.56,
      utilization: 23.4,
      alerts: 0,
      region: 'East US',
      sku: 'Standard',
      availability: 99.95
    }
  ]);

  const [resourceHealth, setResourceHealth] = useState([
    {
      resourceGroup: 'aleksandra-production',
      region: 'East US',
      resources: 456,
      healthy: 445,
      warning: 8,
      critical: 3,
      cost: 5678.90,
      compliance: 94.8,
      lastUpdated: '11:40:30'
    },
    {
      resourceGroup: 'aleksandra-staging',
      region: 'West Europe',
      resources: 234,
      healthy: 228,
      warning: 5,
      critical: 1,
      cost: 2345.67,
      compliance: 97.2,
      lastUpdated: '11:39:15'
    },
    {
      resourceGroup: 'aleksandra-development',
      region: 'West US',
      resources: 189,
      healthy: 182,
      warning: 6,
      critical: 1,
      cost: 1456.78,
      compliance: 96.1,
      lastUpdated: '11:38:45'
    },
    {
      resourceGroup: 'aleksandra-data',
      region: 'North Europe',
      resources: 345,
      healthy: 339,
      warning: 4,
      critical: 2,
      cost: 3456.78,
      compliance: 98.4,
      lastUpdated: '11:37:20'
    },
    {
      resourceGroup: 'aleksandra-monitoring',
      region: 'Southeast Asia',
      resources: 67,
      healthy: 65,
      warning: 2,
      critical: 0,
      cost: 789.01,
      compliance: 99.1,
      lastUpdated: '11:36:50'
    }
  ]);

  const [applicationInsights, setApplicationInsights] = useState([
    {
      app: 'aleksandra-web-app',
      requests: 25674,
      responseTime: 234,
      availability: 99.94,
      exceptions: 12,
      dependencies: 89.7,
      pageViews: 156789,
      users: 4567,
      sessions: 8901
    },
    {
      app: 'aleksandra-api-service',
      requests: 89234,
      responseTime: 156,
      availability: 99.97,
      exceptions: 3,
      dependencies: 95.8,
      pageViews: 0,
      users: 0,
      sessions: 0
    },
    {
      app: 'aleksandra-worker-service',
      requests: 12456,
      responseTime: 345,
      availability: 98.92,
      exceptions: 45,
      dependencies: 87.3,
      pageViews: 0,
      users: 0,
      sessions: 0
    },
    {
      app: 'aleksandra-mobile-app',
      requests: 45678,
      responseTime: 567,
      availability: 97.85,
      exceptions: 89,
      dependencies: 78.9,
      pageViews: 89234,
      users: 2345,
      sessions: 4567
    }
  ]);

  const [azureAlerts, setAzureAlerts] = useState([
    {
      id: 'ALERT-456789',
      severity: 'critical',
      service: 'Azure Functions',
      metric: 'Function Execution Duration',
      condition: '> 5 minutes',
      value: '7.3 minutes',
      resource: 'aleksandra-processor-func',
      resourceGroup: 'aleksandra-production',
      region: 'North Europe',
      fired: '11:35:20',
      duration: '6m 25s',
      status: 'active'
    },
    {
      id: 'ALERT-123456',
      severity: 'warning',
      service: 'Azure SQL Database',
      metric: 'DTU Percentage',
      condition: '> 80%',
      value: '89.4%',
      resource: 'aleksandra-main-db',
      resourceGroup: 'aleksandra-production',
      region: 'East US',
      fired: '11:28:15',
      duration: '13m 30s',
      status: 'investigating'
    },
    {
      id: 'ALERT-789012',
      severity: 'warning',
      service: 'Azure Cache',
      metric: 'Server Load',
      condition: '> 75%',
      value: '78.9%',
      resource: 'aleksandra-redis-cache',
      resourceGroup: 'aleksandra-production',
      region: 'West Europe',
      fired: '11:32:45',
      duration: '9m 0s',
      status: 'acknowledged'
    },
    {
      id: 'ALERT-345678',
      severity: 'info',
      service: 'Virtual Machines',
      metric: 'Maintenance Scheduled',
      condition: 'Upcoming',
      value: 'March 25, 02:00 UTC',
      resource: 'aleksandra-web-vm-01',
      resourceGroup: 'aleksandra-staging',
      region: 'West Europe',
      fired: '11:25:10',
      duration: '16m 35s',
      status: 'planned'
    }
  ]);

  const [costAnalysis, setCostAnalysis] = useState([
    {
      category: 'Compute',
      cost: 4567.89,
      percentage: 35.6,
      trend: '+3.2%',
      budget: 5000.00,
      forecast: 4732.45,
      services: ['Virtual Machines', 'App Service', 'Azure Functions']
    },
    {
      category: 'Storage',
      cost: 1234.56,
      percentage: 9.6,
      trend: '+1.8%',
      budget: 1500.00,
      forecast: 1267.89,
      services: ['Storage Accounts', 'Managed Disks']
    },
    {
      category: 'Database',
      cost: 4236.01,
      percentage: 33.0,
      trend: '+5.7%',
      budget: 4000.00,
      forecast: 4489.23,
      services: ['Azure SQL Database', 'Cosmos DB']
    },
    {
      category: 'Networking',
      cost: 789.12,
      percentage: 6.1,
      trend: '-2.1%',
      budget: 1000.00,
      forecast: 772.45,
      services: ['Virtual Network', 'Load Balancer', 'Application Gateway']
    },
    {
      category: 'Analytics',
      cost: 567.89,
      percentage: 4.4,
      trend: '+8.9%',
      budget: 600.00,
      forecast: 618.34,
      services: ['Application Insights', 'Log Analytics']
    },
    {
      category: 'Security',
      cost: 345.67,
      percentage: 2.7,
      trend: '+12.3%',
      budget: 400.00,
      forecast: 388.45,
      services: ['Key Vault', 'Security Center', 'Azure Sentinel']
    },
    {
      category: 'Integration',
      cost: 234.56,
      percentage: 1.8,
      trend: '-0.5%',
      budget: 300.00,
      forecast: 233.78,
      services: ['Logic Apps', 'Service Bus', 'Event Grid']
    },
    {
      category: 'AI/ML',
      cost: 456.78,
      percentage: 3.6,
      trend: '+15.7%',
      budget: 500.00,
      forecast: 528.67,
      services: ['Cognitive Services', 'Machine Learning', 'Bot Service']
    }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    { time: '11:41', cpu: 67.8, memory: 78.4, network: 23.7, storage: 45.2, requests: 2567, cost: 12847 },
    { time: '11:40', cpu: 65.2, memory: 76.8, network: 25.1, storage: 43.8, requests: 2456, cost: 12789 },
    { time: '11:39', cpu: 68.9, memory: 79.2, network: 22.4, storage: 46.7, requests: 2678, cost: 12901 },
    { time: '11:38', cpu: 64.7, memory: 75.3, network: 24.6, storage: 44.1, requests: 2345, cost: 12734 },
    { time: '11:37', cpu: 69.3, memory: 77.9, network: 23.8, storage: 47.3, requests: 2789, cost: 12856 },
    { time: '11:36', cpu: 66.1, memory: 78.1, network: 25.3, storage: 42.9, requests: 2456, cost: 12798 }
  ]);

  const [logAnalytics, setLogAnalytics] = useState([
    {
      workspace: 'aleksandra-primary-logs',
      ingestion: '2.3 GB/day',
      retention: '90 days',
      queries: 1456,
      alerts: 12,
      cost: 234.56,
      tables: 45,
      lastUpdate: '11:41:15'
    },
    {
      workspace: 'aleksandra-security-logs',
      ingestion: '890 MB/day',
      retention: '365 days',
      queries: 567,
      alerts: 8,
      cost: 456.78,
      tables: 23,
      lastUpdate: '11:40:30'
    },
    {
      workspace: 'aleksandra-performance-logs',
      ingestion: '1.8 GB/day',
      retention: '30 days',
      queries: 2345,
      alerts: 5,
      cost: 123.45,
      tables: 67,
      lastUpdate: '11:39:45'
    }
  ]);

  const [azureRegions, setAzureRegions] = useState([
    {
      region: 'East US',
      resources: 601,
      cost: 5678.90,
      latency: 12.4,
      availability: 99.96,
      utilization: 72.3,
      alerts: 8
    },
    {
      region: 'West Europe',
      resources: 456,
      cost: 3456.78,
      latency: 8.7,
      availability: 99.98,
      utilization: 65.7,
      alerts: 3
    },
    {
      region: 'West US',
      resources: 234,
      cost: 1789.01,
      latency: 15.2,
      availability: 99.94,
      utilization: 58.9,
      alerts: 2
    },
    {
      region: 'North Europe',
      resources: 345,
      cost: 2345.67,
      latency: 9.8,
      availability: 98.67,
      utilization: 89.4,
      alerts: 12
    },
    {
      region: 'Southeast Asia',
      resources: 123,
      cost: 890.45,
      latency: 45.6,
      availability: 99.92,
      utilization: 34.2,
      alerts: 1
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update Azure metrics
      setAzureMetrics(prev => ({
        ...prev,
        healthyResources: Math.max(prev.totalResources * 0.95, prev.healthyResources + Math.floor((Math.random() - 0.3) * 10)),
        criticalAlerts: Math.max(0, prev.criticalAlerts + Math.floor((Math.random() - 0.7) * 3)),
        warningAlerts: Math.max(0, prev.warningAlerts + Math.floor((Math.random() - 0.6) * 5)),
        totalCost: Math.max(10000, prev.totalCost + (Math.random() - 0.5) * 200),
        computeUtilization: Math.max(30, Math.min(95, prev.computeUtilization + (Math.random() - 0.5) * 8)),
        storageUtilization: Math.max(40, Math.min(90, prev.storageUtilization + (Math.random() - 0.5) * 6)),
        networkThroughput: Math.max(10, prev.networkThroughput + (Math.random() - 0.5) * 5),
        activeConnections: Math.max(10000, prev.activeConnections + Math.floor((Math.random() - 0.5) * 2000))
      }));

      // Update performance metrics timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceMetrics(prev => {
        const newData = {
          time: currentTime,
          cpu: Math.max(30, Math.min(95, prev[0]?.cpu + (Math.random() - 0.5) * 8)) || 67.8,
          memory: Math.max(40, Math.min(90, prev[0]?.memory + (Math.random() - 0.5) * 6)) || 78.4,
          network: Math.max(10, prev[0]?.network + (Math.random() - 0.5) * 5) || 23.7,
          storage: Math.max(20, Math.min(80, prev[0]?.storage + (Math.random() - 0.5) * 4)) || 45.2,
          requests: Math.max(1000, prev[0]?.requests + Math.floor((Math.random() - 0.5) * 500)) || 2567,
          cost: Math.max(10000, prev[0]?.cost + (Math.random() - 0.5) * 200) || 12847
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update Azure services
      setAzureServices(prev => prev.map(service => ({
        ...service,
        utilization: Math.max(10, Math.min(98, service.utilization + (Math.random() - 0.5) * 8)),
        cost: Math.max(service.cost * 0.8, service.cost + (Math.random() - 0.5) * 100),
        alerts: Math.max(0, service.alerts + Math.floor((Math.random() - 0.8) * 2)),
        availability: Math.max(95, Math.min(99.99, service.availability + (Math.random() - 0.5) * 0.1)),
        instances: Math.max(1, service.instances + Math.floor((Math.random() - 0.5) * 3)),
        status: service.utilization > 90 || service.alerts > 5 ? 'critical' : 
                service.utilization > 75 || service.alerts > 2 ? 'warning' : 'healthy'
      })));

      // Update resource health
      setResourceHealth(prev => prev.map(rg => ({
        ...rg,
        healthy: Math.max(rg.resources * 0.9, rg.healthy + Math.floor((Math.random() - 0.3) * 5)),
        warning: Math.max(0, rg.warning + Math.floor((Math.random() - 0.7) * 2)),
        critical: Math.max(0, rg.critical + Math.floor((Math.random() - 0.9) * 1)),
        cost: Math.max(rg.cost * 0.8, rg.cost + (Math.random() - 0.5) * 200),
        compliance: Math.max(90, Math.min(100, rg.compliance + (Math.random() - 0.5) * 2))
      })));

      // Update application insights
      setApplicationInsights(prev => prev.map(app => ({
        ...app,
        requests: Math.max(1000, app.requests + Math.floor((Math.random() - 0.5) * 1000)),
        responseTime: Math.max(50, app.responseTime + Math.floor((Math.random() - 0.5) * 50)),
        availability: Math.max(95, Math.min(100, app.availability + (Math.random() - 0.5) * 0.5)),
        exceptions: Math.max(0, app.exceptions + Math.floor((Math.random() - 0.8) * 5)),
        dependencies: Math.max(70, Math.min(100, app.dependencies + (Math.random() - 0.5) * 5)),
        pageViews: app.pageViews > 0 ? Math.max(10000, app.pageViews + Math.floor((Math.random() - 0.5) * 5000)) : 0,
        users: app.users > 0 ? Math.max(100, app.users + Math.floor((Math.random() - 0.5) * 100)) : 0,
        sessions: app.sessions > 0 ? Math.max(500, app.sessions + Math.floor((Math.random() - 0.5) * 200)) : 0
      })));

      // Update cost analysis
      setCostAnalysis(prev => prev.map(category => ({
        ...category,
        cost: Math.max(category.cost * 0.8, category.cost + (Math.random() - 0.5) * 100),
        forecast: Math.max(category.forecast * 0.8, category.forecast + (Math.random() - 0.5) * 80)
      })));

      // Update Azure regions
      setAzureRegions(prev => prev.map(region => ({
        ...region,
        cost: Math.max(region.cost * 0.9, region.cost + (Math.random() - 0.5) * 100),
        latency: Math.max(5, region.latency + (Math.random() - 0.5) * 3),
        availability: Math.max(98, Math.min(100, region.availability + (Math.random() - 0.5) * 0.2)),
        utilization: Math.max(30, Math.min(95, region.utilization + (Math.random() - 0.5) * 6)),
        alerts: Math.max(0, region.alerts + Math.floor((Math.random() - 0.8) * 2))
      })));

      // Update log analytics
      setLogAnalytics(prev => prev.map(workspace => ({
        ...workspace,
        queries: Math.max(100, workspace.queries + Math.floor((Math.random() - 0.5) * 100)),
        alerts: Math.max(0, workspace.alerts + Math.floor((Math.random() - 0.8) * 2)),
        cost: Math.max(workspace.cost * 0.9, workspace.cost + (Math.random() - 0.5) * 20)
      })));

      // Occasionally update alert status
      if (Math.random() < 0.3) {
        setAzureAlerts(prev => prev.map(alert => {
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
    }, 35000);

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

  const getAvailabilityColor = (availability) => {
    if (availability >= 99.5) return 'text-green-400';
    if (availability >= 99.0) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCostTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const getCostStatusColor = (cost, budget) => {
    if (cost >= budget * 0.95) return 'text-red-400';
    if (cost >= budget * 0.80) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-indigo-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* Azure Monitor Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                ☁️ Azure Monitor Dashboard
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>RESOURCES: <span className="text-blue-400 font-mono">{azureMetrics.healthyResources}/{azureMetrics.totalResources}</span></div>
                <div>SUBSCRIPTIONS: <span className="text-indigo-400">{azureMetrics.subscriptions}</span></div>
                <div>RESOURCE GROUPS: <span className="text-cyan-400">{azureMetrics.resourceGroups}</span></div>
                <div>REGIONS: <span className="text-purple-400">{azureMetrics.availabilityZones}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">${azureMetrics.totalCost.toFixed(2)}</div>
              <div className="text-sm text-gray-300">Monthly Cost</div>
              <div className="text-xs text-blue-300">Connections: {azureMetrics.activeConnections.toLocaleString()}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key Azure Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Compute Utilization</span>
              <span className="text-2xl">💻</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{azureMetrics.computeUtilization.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Virtual machines & functions</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-indigo-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Storage Utilization</span>
              <span className="text-2xl">💾</span>
            </div>
            <div className="text-2xl font-bold text-indigo-400 mb-1">{azureMetrics.storageUtilization.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Storage accounts & disks</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-cyan-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Network Throughput</span>
              <span className="text-2xl">🌐</span>
            </div>
            <div className="text-2xl font-bold text-cyan-400 mb-1">{azureMetrics.networkThroughput.toFixed(1)} Gbps</div>
            <div className="text-xs text-gray-400">Virtual networks & gateways</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Critical Alerts</span>
              <span className="text-2xl">🚨</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{azureMetrics.criticalAlerts}</div>
            <div className="text-xs text-gray-400">Immediate attention required</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Azure Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Azure Infrastructure Performance Timeline
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceMetrics.slice().reverse()}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#3b82f6" tick={{ fontSize: 10 }} />
                <YAxis yAxisId="left" stroke="#3b82f6" />
                <YAxis yAxisId="right" orientation="right" stroke="#3b82f6" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #3b82f6' }}
                  labelStyle={{ color: '#3b82f6' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="cpu" fill="#3b82f6" fillOpacity={0.3} stroke="#3b82f6" name="CPU %" />
                <Area yAxisId="left" type="monotone" dataKey="memory" fill="#6366f1" fillOpacity={0.3} stroke="#6366f1" name="Memory %" />
                <Line yAxisId="right" type="monotone" dataKey="network" stroke="#06b6d4" strokeWidth={2} name="Network (Gbps)" />
                <Bar yAxisId="right" dataKey="requests" fill="#8b5cf6" name="Requests (×100)" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Cost Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💰 Azure Cost Analysis & Budget Tracking
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {costAnalysis.map((category, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{category.category}</span>
                    <span className={`text-sm font-bold ${getCostTrendColor(category.trend)}`}>{category.trend}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-1">
                    <div className="text-blue-400">${category.cost.toFixed(2)}</div>
                    <div className="text-indigo-400">{category.percentage.toFixed(1)}%</div>
                    <div className="text-cyan-400">${category.forecast.toFixed(2)} proj</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getCostStatusColor(category.cost, category.budget) === 'text-green-400' ? 'bg-green-400' : 
                                                      getCostStatusColor(category.cost, category.budget) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${Math.min(100, (category.cost / category.budget) * 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Budget: ${category.budget.toFixed(2)}</div>
                  <div className="text-xs text-purple-300 mt-1 truncate">
                    {category.services.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Azure Services Health */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔧 Azure Services Health & Performance
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {azureServices.map((service, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{service.service}</span>
                    <span className={`text-xs font-bold ${getStatusColor(service.status)}`}>{service.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{service.region} • {service.sku}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs">
                    <div className="text-indigo-400">{service.instances} instances</div>
                    <div className={getUtilizationColor(service.utilization)}>Util: {service.utilization.toFixed(1)}%</div>
                    <div className={getAvailabilityColor(service.availability)}>SLA: {service.availability.toFixed(2)}%</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-green-400">${service.cost.toFixed(2)}</span>
                    <span className={service.alerts > 0 ? 'text-red-400' : 'text-gray-400'}>{service.alerts} alerts</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resource Groups Health */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📦 Resource Groups Health Status
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {resourceHealth.map((rg, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{rg.resourceGroup}</span>
                    <span className="text-xs text-blue-300">{rg.region}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-2">
                    <div className="text-green-400">{rg.healthy} healthy</div>
                    <div className="text-yellow-400">{rg.warning} warning</div>
                    <div className="text-red-400">{rg.critical} critical</div>
                  </div>
                  <div className="text-sm text-indigo-400 mb-1">{rg.resources} total resources</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">${rg.cost.toFixed(2)}</span>
                    <span className="text-cyan-400">{rg.compliance.toFixed(1)}% compliant</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Updated: {rg.lastUpdated}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Azure Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Azure Monitor Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {azureAlerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.id}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{alert.service}</div>
                  <div className="text-xs text-blue-300 mb-1">{alert.resource}</div>
                  <div className="text-xs text-cyan-300 mb-1">{alert.resourceGroup} • {alert.region}</div>
                  <div className="text-xs text-yellow-300 mb-2">{alert.metric}: {alert.condition}</div>
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

        {/* Application Insights & Log Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Application Insights */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📈 Application Insights Performance Metrics
            </h3>
            <div className="space-y-3">
              {applicationInsights.map((app, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{app.app}</div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-blue-400">{app.requests.toLocaleString()} req</div>
                    <div className="text-yellow-400">{app.responseTime}ms avg</div>
                    <div className={getAvailabilityColor(app.availability)}>{app.availability.toFixed(2)}% up</div>
                    <div className="text-red-400">{app.exceptions} exceptions</div>
                  </div>
                  {app.pageViews > 0 && (
                    <div className="grid grid-cols-3 gap-2 text-xs mt-2">
                      <div className="text-green-400">{app.pageViews.toLocaleString()} views</div>
                      <div className="text-cyan-400">{app.users.toLocaleString()} users</div>
                      <div className="text-purple-400">{app.sessions.toLocaleString()} sessions</div>
                    </div>
                  )}
                  <div className="text-xs text-indigo-300 mt-2">Dependencies: {app.dependencies.toFixed(1)}% healthy</div>
                </div>
              ))}
            </div>
          </div>

          {/* Log Analytics Workspaces */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📋 Log Analytics Workspaces
            </h3>
            <div className="space-y-4">
              {logAnalytics.map((workspace, index) => (
                <div key={index} className="p-4 bg-gray-700 rounded-lg">
                  <div className="text-sm font-bold text-white mb-2">{workspace.workspace}</div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="text-blue-400">{workspace.ingestion} ingestion</div>
                    <div className="text-indigo-400">{workspace.retention} retention</div>
                    <div className="text-cyan-400">{workspace.queries.toLocaleString()} queries</div>
                    <div className="text-purple-400">{workspace.tables} tables</div>
                  </div>
                  <div className="flex justify-between text-xs mt-2">
                    <span className="text-green-400">${workspace.cost.toFixed(2)}/month</span>
                    <span className={workspace.alerts > 0 ? 'text-red-400' : 'text-gray-400'}>{workspace.alerts} alerts</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Last update: {workspace.lastUpdate}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Regional Distribution */}
        <div className="bg-gray-800 rounded-xl p-6 border border-blue-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            🌍 Azure Regional Distribution & Performance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {azureRegions.map((region, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="text-sm font-bold text-white mb-2">{region.region}</div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Resources:</span>
                    <span className="text-blue-400">{region.resources}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Cost:</span>
                    <span className="text-green-400">${region.cost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Latency:</span>
                    <span className="text-yellow-400">{region.latency.toFixed(1)}ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Uptime:</span>
                    <span className={getAvailabilityColor(region.availability)}>{region.availability.toFixed(2)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Utilization:</span>
                    <span className={getUtilizationColor(region.utilization)}>{region.utilization.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Alerts:</span>
                    <span className={region.alerts > 0 ? 'text-red-400' : 'text-gray-400'}>{region.alerts}</span>
                  </div>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2 mt-3">
                  <div 
                    className="bg-blue-400 h-2 rounded-full" 
                    style={{ width: `${(region.utilization)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            AZURE MONITOR | ALEKSANDRA AI CLOUD OPERATIONS | MICROSOFT AZURE INFRASTRUCTURE MONITORING
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Cloud Infrastructure | Application Performance | Log Analytics | Cost Management | Security & Compliance | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}