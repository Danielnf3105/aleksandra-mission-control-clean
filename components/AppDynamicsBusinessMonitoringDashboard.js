// AppDynamics Business Monitoring Dashboard - March 2026
// Comprehensive AppDynamics-inspired business transaction monitoring dashboard for application performance and business impact analysis
import { useState, useEffect } from 'react';
import { LineChart, AreaChart, BarChart, ScatterChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line, Area, Bar, Scatter, ResponsiveContainer, ComposedChart, PieChart, Pie, Cell, TreemapChart, Treemap, RadialBarChart, RadialBar, FunnelChart, Funnel, LabelList } from 'recharts';

export default function AppDynamicsBusinessMonitoringDashboard() {
  const [appDynamicsMetrics, setAppDynamicsMetrics] = useState({
    totalApplications: 28,
    healthyApplications: 25,
    warningApplications: 2,
    criticalApplications: 1,
    businessTransactions: 1456,
    avgResponseTime: 345.7,
    throughput: 4567,
    errorRate: 2.1,
    stall: 8.9,
    totalErrors: 234,
    infraHealth: 94.2,
    businessImpact: 87.6
  });

  const [businessTransactions, setBusinessTransactions] = useState([
    {
      transaction: 'User Login Flow',
      application: 'aleksandra-web-app',
      tier: 'Web Tier',
      responseTime: 234.5,
      callsPerMin: 567,
      errorsPerMin: 3,
      stallCount: 12,
      businessValue: 'high',
      sla: 99.5,
      apdex: 0.92,
      conversionImpact: 15.6
    },
    {
      transaction: 'Checkout Process',
      application: 'aleksandra-ecommerce',
      tier: 'Business Logic',
      responseTime: 456.8,
      callsPerMin: 234,
      errorsPerMin: 8,
      stallCount: 23,
      businessValue: 'critical',
      sla: 97.3,
      apdex: 0.78,
      conversionImpact: 34.7
    },
    {
      transaction: 'Content Upload',
      application: 'aleksandra-content-service',
      tier: 'Content Processing',
      responseTime: 1234.6,
      callsPerMin: 123,
      errorsPerMin: 15,
      stallCount: 45,
      businessValue: 'high',
      sla: 95.8,
      apdex: 0.65,
      conversionImpact: 8.9
    },
    {
      transaction: 'Search & Discovery',
      application: 'aleksandra-search-api',
      tier: 'Search Tier',
      responseTime: 123.4,
      callsPerMin: 890,
      errorsPerMin: 2,
      stallCount: 5,
      businessValue: 'medium',
      sla: 99.2,
      apdex: 0.95,
      conversionImpact: 12.3
    },
    {
      transaction: 'User Profile Management',
      application: 'aleksandra-user-service',
      tier: 'User Management',
      responseTime: 345.7,
      callsPerMin: 456,
      errorsPerMin: 6,
      stallCount: 18,
      businessValue: 'medium',
      sla: 98.7,
      apdex: 0.84,
      conversionImpact: 6.2
    }
  ]);

  const [applicationFlow, setApplicationFlow] = useState([
    {
      application: 'aleksandra-web-frontend',
      status: 'normal',
      responseTime: 234.5,
      throughput: 1234,
      errorRate: 1.2,
      nodes: 4,
      tiers: ['Web Server', 'App Server'],
      databases: ['User DB', 'Session Store'],
      externalServices: ['Payment Gateway', 'Email Service'],
      businessImpact: 'high'
    },
    {
      application: 'aleksandra-api-backend',
      status: 'warning',
      responseTime: 567.8,
      throughput: 890,
      errorRate: 3.4,
      nodes: 8,
      tiers: ['API Gateway', 'Business Logic', 'Data Access'],
      databases: ['Main DB', 'Analytics DB', 'Cache'],
      externalServices: ['AI Service', 'Notification Service'],
      businessImpact: 'critical'
    },
    {
      application: 'aleksandra-mobile-backend',
      status: 'normal',
      responseTime: 189.3,
      throughput: 567,
      errorRate: 0.8,
      nodes: 6,
      tiers: ['Mobile API', 'Push Services'],
      databases: ['Mobile DB', 'Device Registry'],
      externalServices: ['Push Notifications', 'Analytics'],
      businessImpact: 'high'
    },
    {
      application: 'aleksandra-analytics-engine',
      status: 'critical',
      responseTime: 2345.9,
      throughput: 123,
      errorRate: 8.7,
      nodes: 12,
      tiers: ['Data Ingestion', 'Processing Engine', 'ML Pipeline'],
      databases: ['Data Warehouse', 'Feature Store'],
      externalServices: ['External Data', 'ML APIs'],
      businessImpact: 'medium'
    }
  ]);

  const [serverHealth, setServerHealth] = useState([
    {
      server: 'aleksandra-web-01.prod',
      application: 'Web Frontend',
      cpuUsage: 67.8,
      memoryUsage: 73.4,
      diskUsage: 45.2,
      networkIO: 234.5,
      jvmHeap: 78.9,
      gcTime: 123.4,
      threadCount: 89,
      connectionPool: 75.6,
      status: 'healthy'
    },
    {
      server: 'aleksandra-api-02.prod',
      application: 'API Backend',
      cpuUsage: 89.3,
      memoryUsage: 91.7,
      diskUsage: 67.8,
      networkIO: 567.8,
      jvmHeap: 94.2,
      gcTime: 456.7,
      threadCount: 234,
      connectionPool: 89.3,
      status: 'warning'
    },
    {
      server: 'aleksandra-worker-03.prod',
      application: 'Background Processing',
      cpuUsage: 95.4,
      memoryUsage: 97.1,
      diskUsage: 89.6,
      networkIO: 123.4,
      jvmHeap: 98.7,
      gcTime: 1234.5,
      threadCount: 456,
      connectionPool: 95.8,
      status: 'critical'
    },
    {
      server: 'aleksandra-db-01.prod',
      application: 'Database',
      cpuUsage: 56.7,
      memoryUsage: 78.9,
      diskUsage: 67.3,
      networkIO: 890.1,
      jvmHeap: 0,
      gcTime: 0,
      threadCount: 67,
      connectionPool: 67.8,
      status: 'healthy'
    }
  ]);

  const [businessMetrics, setBusinessMetrics] = useState([
    {
      metric: 'Revenue per Hour',
      value: '$45,678',
      trend: '+3.4%',
      target: '$50,000',
      impact: 'Application slowdown reducing conversion rate',
      status: 'warning'
    },
    {
      metric: 'Conversion Rate',
      value: '12.3%',
      trend: '-2.1%',
      target: '15.0%',
      impact: 'Checkout errors affecting purchase completion',
      status: 'critical'
    },
    {
      metric: 'User Satisfaction',
      value: '4.2/5.0',
      trend: '-0.3',
      target: '4.5/5.0',
      impact: 'Increased response times degrading user experience',
      status: 'warning'
    },
    {
      metric: 'Active Users',
      value: '28,456',
      trend: '+5.7%',
      target: '30,000',
      impact: 'Growing user base putting pressure on infrastructure',
      status: 'normal'
    },
    {
      metric: 'SLA Compliance',
      value: '96.8%',
      trend: '-1.2%',
      target: '99.0%',
      impact: 'Performance issues causing SLA violations',
      status: 'critical'
    }
  ]);

  const [dbConnections, setDbConnections] = useState([
    {
      database: 'aleksandra-main-db',
      type: 'PostgreSQL',
      activeConnections: 67,
      maxConnections: 100,
      avgResponseTime: 45.6,
      slowQueries: 12,
      lockWaits: 3,
      deadlocks: 0,
      cacheHitRatio: 94.7,
      status: 'healthy'
    },
    {
      database: 'aleksandra-analytics-db',
      type: 'ClickHouse',
      activeConnections: 23,
      maxConnections: 50,
      avgResponseTime: 234.5,
      slowQueries: 45,
      lockWaits: 8,
      deadlocks: 1,
      cacheHitRatio: 67.8,
      status: 'warning'
    },
    {
      database: 'aleksandra-session-store',
      type: 'Redis',
      activeConnections: 89,
      maxConnections: 200,
      avgResponseTime: 1.2,
      slowQueries: 0,
      lockWaits: 0,
      deadlocks: 0,
      cacheHitRatio: 99.8,
      status: 'healthy'
    },
    {
      database: 'aleksandra-cache-cluster',
      type: 'Memcached',
      activeConnections: 45,
      maxConnections: 100,
      avgResponseTime: 0.8,
      slowQueries: 2,
      lockWaits: 0,
      deadlocks: 0,
      cacheHitRatio: 96.3,
      status: 'healthy'
    }
  ]);

  const [performanceMetrics, setPerformanceMetrics] = useState([
    { time: '20:02', responseTime: 345.7, throughput: 4567, errorRate: 2.1, stall: 8.9, businessImpact: 87.6, apdex: 0.84 },
    { time: '20:01', responseTime: 342.3, throughput: 4456, errorRate: 2.0, stall: 8.2, businessImpact: 88.1, apdex: 0.85 },
    { time: '20:00', responseTime: 349.1, throughput: 4678, errorRate: 2.3, stall: 9.4, businessImpact: 86.9, apdex: 0.82 },
    { time: '19:59', responseTime: 338.9, throughput: 4334, errorRate: 1.8, stall: 7.6, businessImpact: 89.2, apdex: 0.87 },
    { time: '19:58', responseTime: 351.4, throughput: 4789, errorRate: 2.4, stall: 9.8, businessImpact: 86.3, apdex: 0.81 },
    { time: '19:57', responseTime: 344.2, throughput: 4523, errorRate: 2.1, stall: 8.7, businessImpact: 87.8, apdex: 0.84 }
  ]);

  const [alerts, setAlerts] = useState([
    {
      id: 'APPDYN-001',
      severity: 'critical',
      title: 'High Response Time - Checkout Process',
      description: 'Business transaction exceeding SLA threshold',
      application: 'aleksandra-ecommerce',
      transaction: 'Checkout Process',
      threshold: '< 500ms',
      currentValue: '756ms',
      businessImpact: 'Revenue loss estimated at $234/hour',
      fired: '19:58:45',
      duration: '4m 17s',
      status: 'active'
    },
    {
      id: 'APPDYN-002',
      severity: 'warning',
      title: 'Memory Pressure - API Backend',
      description: 'JVM heap usage approaching critical levels',
      application: 'aleksandra-api-backend',
      server: 'aleksandra-api-02.prod',
      threshold: '< 85%',
      currentValue: '91.7%',
      businessImpact: 'Potential service degradation',
      fired: '19:55:30',
      duration: '7m 32s',
      status: 'acknowledged'
    },
    {
      id: 'APPDYN-003',
      severity: 'critical',
      title: 'Database Connection Pool Exhaustion',
      description: 'Connection pool utilization at maximum capacity',
      application: 'aleksandra-analytics-engine',
      database: 'aleksandra-analytics-db',
      threshold: '< 80%',
      currentValue: '95.8%',
      businessImpact: 'Analytics reporting delays affecting business decisions',
      fired: '19:52:15',
      duration: '10m 47s',
      status: 'active'
    }
  ]);

  const [codeHotspots, setCodeHotspots] = useState([
    {
      method: 'PaymentProcessor.processPayment()',
      application: 'aleksandra-ecommerce',
      avgExecutionTime: 1234.5,
      callsPerMin: 123,
      errorPercent: 8.7,
      codeType: 'Java Method',
      businessImpact: 'high',
      recommendation: 'Optimize database query and implement caching'
    },
    {
      method: 'UserService.authenticateUser()',
      application: 'aleksandra-api-backend',
      avgExecutionTime: 567.8,
      callsPerMin: 456,
      errorPercent: 3.2,
      codeType: 'REST Endpoint',
      businessImpact: 'medium',
      recommendation: 'Cache authentication tokens and optimize LDAP queries'
    },
    {
      method: 'AnalyticsEngine.processEvents()',
      application: 'aleksandra-analytics-engine',
      avgExecutionTime: 2345.6,
      callsPerMin: 89,
      errorPercent: 12.4,
      codeType: 'Background Job',
      businessImpact: 'medium',
      recommendation: 'Implement batch processing and error handling improvements'
    },
    {
      method: 'ContentUpload.validateAndStore()',
      application: 'aleksandra-content-service',
      avgExecutionTime: 789.1,
      callsPerMin: 234,
      errorPercent: 5.6,
      codeType: 'File Processing',
      businessImpact: 'high',
      recommendation: 'Async processing and storage optimization'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update AppDynamics metrics
      setAppDynamicsMetrics(prev => ({
        ...prev,
        healthyApplications: Math.max(prev.totalApplications * 0.8, prev.healthyApplications + Math.floor((Math.random() - 0.4) * 3)),
        warningApplications: Math.max(0, Math.min(5, prev.warningApplications + Math.floor((Math.random() - 0.6) * 2))),
        criticalApplications: Math.max(0, Math.min(3, prev.criticalApplications + Math.floor((Math.random() - 0.8) * 1))),
        avgResponseTime: Math.max(200, prev.avgResponseTime + (Math.random() - 0.5) * 100),
        throughput: Math.max(3000, prev.throughput + Math.floor((Math.random() - 0.5) * 1000)),
        errorRate: Math.max(0.5, prev.errorRate + (Math.random() - 0.5) * 1),
        stall: Math.max(5, prev.stall + (Math.random() - 0.5) * 3),
        totalErrors: Math.max(100, prev.totalErrors + Math.floor((Math.random() - 0.5) * 50)),
        infraHealth: Math.max(85, Math.min(99, prev.infraHealth + (Math.random() - 0.5) * 3)),
        businessImpact: Math.max(70, Math.min(95, prev.businessImpact + (Math.random() - 0.5) * 5))
      }));

      // Update performance metrics timeline
      const now = new Date();
      const currentTime = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
      
      setPerformanceMetrics(prev => {
        const newData = {
          time: currentTime,
          responseTime: Math.max(200, prev[0]?.responseTime + (Math.random() - 0.5) * 100) || 345.7,
          throughput: Math.max(3000, prev[0]?.throughput + Math.floor((Math.random() - 0.5) * 1000)) || 4567,
          errorRate: Math.max(0.5, prev[0]?.errorRate + (Math.random() - 0.5) * 1) || 2.1,
          stall: Math.max(5, prev[0]?.stall + (Math.random() - 0.5) * 3) || 8.9,
          businessImpact: Math.max(70, Math.min(95, prev[0]?.businessImpact + (Math.random() - 0.5) * 5)) || 87.6,
          apdex: Math.max(0.5, Math.min(1.0, prev[0]?.apdex + (Math.random() - 0.5) * 0.1)) || 0.84
        };
        
        return [newData, ...prev.slice(0, 19)]; // Keep last 20 points
      });

      // Update business transactions
      setBusinessTransactions(prev => prev.map(transaction => ({
        ...transaction,
        responseTime: Math.max(50, transaction.responseTime + (Math.random() - 0.5) * 100),
        callsPerMin: Math.max(50, transaction.callsPerMin + Math.floor((Math.random() - 0.5) * 100)),
        errorsPerMin: Math.max(0, transaction.errorsPerMin + Math.floor((Math.random() - 0.7) * 5)),
        stallCount: Math.max(0, transaction.stallCount + Math.floor((Math.random() - 0.7) * 10)),
        apdex: Math.max(0.3, Math.min(1.0, transaction.apdex + (Math.random() - 0.5) * 0.1)),
        sla: Math.max(90, Math.min(100, transaction.sla + (Math.random() - 0.5) * 2))
      })));

      // Update application flow
      setApplicationFlow(prev => prev.map(app => ({
        ...app,
        responseTime: Math.max(100, app.responseTime + (Math.random() - 0.5) * 150),
        throughput: Math.max(100, app.throughput + Math.floor((Math.random() - 0.5) * 200)),
        errorRate: Math.max(0.1, app.errorRate + (Math.random() - 0.5) * 2),
        status: app.responseTime > 1500 || app.errorRate > 5 ? 'critical' : 
               app.responseTime > 800 || app.errorRate > 3 ? 'warning' : 'normal'
      })));

      // Update server health
      setServerHealth(prev => prev.map(server => ({
        ...server,
        cpuUsage: Math.max(30, Math.min(100, server.cpuUsage + (Math.random() - 0.5) * 10)),
        memoryUsage: Math.max(40, Math.min(100, server.memoryUsage + (Math.random() - 0.5) * 8)),
        diskUsage: Math.max(30, Math.min(95, server.diskUsage + (Math.random() - 0.5) * 5)),
        networkIO: Math.max(100, server.networkIO + (Math.random() - 0.5) * 200),
        jvmHeap: server.jvmHeap > 0 ? Math.max(50, Math.min(100, server.jvmHeap + (Math.random() - 0.5) * 8)) : 0,
        gcTime: server.gcTime > 0 ? Math.max(50, server.gcTime + (Math.random() - 0.5) * 100) : 0,
        threadCount: Math.max(20, server.threadCount + Math.floor((Math.random() - 0.5) * 20)),
        connectionPool: Math.max(30, Math.min(100, server.connectionPool + (Math.random() - 0.5) * 8)),
        status: server.cpuUsage > 90 || server.memoryUsage > 90 || server.jvmHeap > 95 ? 'critical' :
               server.cpuUsage > 80 || server.memoryUsage > 80 || server.jvmHeap > 85 ? 'warning' : 'healthy'
      })));

      // Update database connections
      setDbConnections(prev => prev.map(db => ({
        ...db,
        activeConnections: Math.max(10, Math.min(db.maxConnections * 0.95, db.activeConnections + Math.floor((Math.random() - 0.5) * 10))),
        avgResponseTime: Math.max(0.5, db.avgResponseTime + (Math.random() - 0.5) * (db.type === 'Redis' ? 0.5 : 50)),
        slowQueries: Math.max(0, db.slowQueries + Math.floor((Math.random() - 0.7) * 5)),
        lockWaits: Math.max(0, db.lockWaits + Math.floor((Math.random() - 0.8) * 3)),
        deadlocks: Math.max(0, db.deadlocks + Math.floor((Math.random() - 0.95) * 1)),
        cacheHitRatio: Math.max(60, Math.min(100, db.cacheHitRatio + (Math.random() - 0.5) * 3)),
        status: db.activeConnections / db.maxConnections > 0.9 || db.slowQueries > 20 ? 'warning' :
               db.avgResponseTime > (db.type === 'Redis' ? 5 : 500) ? 'warning' : 'healthy'
      })));

      // Update business metrics trends
      setBusinessMetrics(prev => prev.map(metric => {
        const change = (Math.random() - 0.5) * 2;
        return {
          ...metric,
          trend: change >= 0 ? `+${Math.abs(change).toFixed(1)}%` : `-${Math.abs(change).toFixed(1)}%`
        };
      }));

      // Update code hotspots
      setCodeHotspots(prev => prev.map(hotspot => ({
        ...hotspot,
        avgExecutionTime: Math.max(100, hotspot.avgExecutionTime + (Math.random() - 0.5) * 200),
        callsPerMin: Math.max(50, hotspot.callsPerMin + Math.floor((Math.random() - 0.5) * 50)),
        errorPercent: Math.max(1, hotspot.errorPercent + (Math.random() - 0.5) * 2)
      })));

      // Occasionally update alert status
      if (Math.random() < 0.3) {
        setAlerts(prev => prev.map(alert => {
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
    }, 47000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'normal': case 'healthy': case 'resolved': return 'text-green-400';
      case 'critical': case 'active': return 'text-red-400';
      case 'warning': case 'acknowledged': return 'text-yellow-400';
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

  const getBusinessValueColor = (value) => {
    switch(value.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getUtilizationColor = (utilization, threshold = 80) => {
    if (utilization >= threshold + 10) return 'text-red-400';
    if (utilization >= threshold) return 'text-yellow-400';
    return 'text-green-400';
  };

  const getApdexColor = (apdex) => {
    if (apdex >= 0.85) return 'text-green-400';
    if (apdex >= 0.7) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getTrendColor = (trend) => {
    if (trend.startsWith('+')) return 'text-red-400';
    if (trend.startsWith('-')) return 'text-green-400';
    return 'text-gray-400';
  };

  const getBusinessImpactColor = (impact) => {
    switch(impact.toLowerCase()) {
      case 'critical': return 'text-red-400';
      case 'high': return 'text-orange-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-teal-900 text-white p-4">
      <div className="max-w-[1800px] mx-auto">
        {/* AppDynamics Business Monitoring Header */}
        <div className="border-b border-gray-700 pb-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                📊 AppDynamics Business Monitoring
              </h1>
              <div className="flex space-x-8 text-sm">
                <div>APPLICATIONS: <span className="text-blue-400 font-mono">{appDynamicsMetrics.healthyApplications}/{appDynamicsMetrics.totalApplications}</span></div>
                <div>TRANSACTIONS: <span className="text-teal-400">{appDynamicsMetrics.businessTransactions.toLocaleString()}</span></div>
                <div>THROUGHPUT: <span className="text-cyan-400">{appDynamicsMetrics.throughput.toLocaleString()}/min</span></div>
                <div>ERRORS: <span className="text-red-400">{appDynamicsMetrics.totalErrors}</span></div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">{appDynamicsMetrics.businessImpact.toFixed(1)}%</div>
              <div className="text-sm text-gray-300">Business Impact Score</div>
              <div className="text-xs text-blue-300">{appDynamicsMetrics.avgResponseTime.toFixed(1)}ms avg response</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
          {/* Key AppDynamics Indicators */}
          <div className="bg-gray-800 rounded-xl p-4 border border-blue-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Avg Response Time</span>
              <span className="text-2xl">⏱️</span>
            </div>
            <div className="text-2xl font-bold text-blue-400 mb-1">{appDynamicsMetrics.avgResponseTime.toFixed(1)}ms</div>
            <div className="text-xs text-gray-400">Application performance</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-teal-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Throughput</span>
              <span className="text-2xl">🚀</span>
            </div>
            <div className="text-2xl font-bold text-teal-400 mb-1">{appDynamicsMetrics.throughput.toLocaleString()}</div>
            <div className="text-xs text-gray-400">Calls per minute</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-yellow-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Error Rate</span>
              <span className="text-2xl">🐛</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-1">{appDynamicsMetrics.errorRate.toFixed(1)}%</div>
            <div className="text-xs text-gray-400">Failed transactions</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 border border-red-500">
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-300">Stall Count</span>
              <span className="text-2xl">⏸️</span>
            </div>
            <div className="text-2xl font-bold text-red-400 mb-1">{appDynamicsMetrics.stall.toFixed(1)}</div>
            <div className="text-xs text-gray-400">Stalled transactions</div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          {/* Business Transaction Performance Timeline */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              📊 Business Transaction Performance Timeline
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
                <Area yAxisId="left" type="monotone" dataKey="responseTime" fill="#3b82f6" fillOpacity={0.3} stroke="#3b82f6" name="Response Time (ms)" />
                <Line yAxisId="right" type="monotone" dataKey="throughput" stroke="#14b8a6" strokeWidth={2} name="Throughput" />
                <Line yAxisId="left" type="monotone" dataKey="errorRate" stroke="#ef4444" strokeWidth={2} name="Error Rate %" />
                <Line yAxisId="right" type="monotone" dataKey="businessImpact" stroke="#22c55e" strokeWidth={2} name="Business Impact %" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Business Transaction Overview */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              💼 Business Transaction Overview
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {businessTransactions.map((transaction, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{transaction.transaction}</span>
                    <span className={`text-xs font-bold ${getBusinessValueColor(transaction.businessValue)}`}>{transaction.businessValue}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{transaction.application} • {transaction.tier}</div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className="text-teal-400">{transaction.responseTime.toFixed(1)}ms</div>
                    <div className="text-cyan-400">{transaction.callsPerMin}/min</div>
                    <div className="text-red-400">{transaction.errorsPerMin} err/min</div>
                    <div className="text-yellow-400">{transaction.stallCount} stalls</div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className={getApdexColor(transaction.apdex)}>Apdex: {transaction.apdex.toFixed(2)}</span>
                    <span className="text-green-400">SLA: {transaction.sla.toFixed(1)}%</span>
                  </div>
                  <div className="text-xs text-orange-300 mt-1">
                    Conv. Impact: {transaction.conversionImpact.toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Application Flow Map */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔗 Application Flow Map
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {applicationFlow.map((app, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-teal-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{app.application}</span>
                    <span className={`text-xs font-bold ${getStatusColor(app.status)}`}>{app.status}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-blue-400">{app.responseTime.toFixed(1)}ms</div>
                    <div className="text-teal-400">{app.throughput}/min</div>
                    <div className="text-red-400">{app.errorRate.toFixed(1)}% err</div>
                  </div>
                  <div className="text-xs text-cyan-300 mb-1">{app.nodes} nodes</div>
                  <div className="text-xs text-yellow-300 mb-1">
                    Tiers: {app.tiers.slice(0, 2).join(', ')}{app.tiers.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-xs text-blue-300 mb-1">
                    DB: {app.databases.slice(0, 2).join(', ')}{app.databases.length > 2 ? '...' : ''}
                  </div>
                  <div className="text-xs text-purple-300 truncate">
                    Ext: {app.externalServices.slice(0, 2).join(', ')}{app.externalServices.length > 2 ? '...' : ''}
                  </div>
                  <div className={`text-xs font-bold mt-1 ${getBusinessImpactColor(app.businessImpact)}`}>
                    Business: {app.businessImpact} impact
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Server Health Monitoring */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🖥️ Server Health & JVM Monitoring
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {serverHealth.map((server, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{server.server}</span>
                    <span className={`text-xs font-bold ${getStatusColor(server.status)}`}>{server.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{server.application}</div>
                  <div className="grid grid-cols-4 gap-1 text-xs">
                    <div className={getUtilizationColor(server.cpuUsage)}>CPU: {server.cpuUsage.toFixed(1)}%</div>
                    <div className={getUtilizationColor(server.memoryUsage)}>MEM: {server.memoryUsage.toFixed(1)}%</div>
                    <div className={getUtilizationColor(server.diskUsage, 70)}>DISK: {server.diskUsage.toFixed(1)}%</div>
                    <div className="text-cyan-400">NET: {(server.networkIO / 1024).toFixed(1)}GB/s</div>
                  </div>
                  {server.jvmHeap > 0 && (
                    <div className="grid grid-cols-4 gap-1 text-xs mt-1">
                      <div className={getUtilizationColor(server.jvmHeap, 85)}>JVM: {server.jvmHeap.toFixed(1)}%</div>
                      <div className="text-orange-400">GC: {server.gcTime.toFixed(0)}ms</div>
                      <div className="text-purple-400">Threads: {server.threadCount}</div>
                      <div className={getUtilizationColor(server.connectionPool, 75)}>Pool: {server.connectionPool.toFixed(1)}%</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🚨 Active Business Impact Alerts
            </h3>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {alerts.map((alert, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg border-l-4 border-red-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400 font-mono">{alert.id}</span>
                    <span className={`text-xs font-bold ${getSeverityColor(alert.severity)}`}>{alert.severity}</span>
                  </div>
                  <div className="text-sm font-bold text-white mb-1 line-clamp-2">{alert.title}</div>
                  <div className="text-xs text-blue-300 mb-1">{alert.application}</div>
                  <div className="text-xs text-yellow-300 mb-1">
                    {alert.threshold} | Current: {alert.currentValue}
                  </div>
                  <div className="text-xs text-red-300 mb-2 line-clamp-2">
                    💼 {alert.businessImpact}
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className={getStatusColor(alert.status)}>{alert.status}</span>
                    <span className="text-gray-400">{alert.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Database Connections & Code Hotspots */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Database Connection Monitoring */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🗃️ Database Connection Monitoring
            </h3>
            <div className="space-y-3">
              {dbConnections.map((db, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white">{db.database}</span>
                    <span className={`text-xs font-bold ${getStatusColor(db.status)}`}>{db.status}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-2">{db.type}</div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-1">
                    <div className="text-teal-400">{db.activeConnections}/{db.maxConnections} conn</div>
                    <div className="text-cyan-400">{db.avgResponseTime.toFixed(1)}ms avg</div>
                    <div className="text-green-400">{db.cacheHitRatio.toFixed(1)}% cache hit</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className={db.slowQueries > 10 ? 'text-red-400' : 'text-yellow-400'}>{db.slowQueries} slow queries</div>
                    <div className={db.lockWaits > 5 ? 'text-red-400' : 'text-yellow-400'}>{db.lockWaits} lock waits</div>
                    <div className={db.deadlocks > 0 ? 'text-red-400' : 'text-green-400'}>{db.deadlocks} deadlocks</div>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2 mt-2">
                    <div 
                      className={`h-2 rounded-full ${getUtilizationColor(db.activeConnections / db.maxConnections * 100, 70) === 'text-green-400' ? 'bg-green-400' : 
                                                      getUtilizationColor(db.activeConnections / db.maxConnections * 100, 70) === 'text-yellow-400' ? 'bg-yellow-400' : 'bg-red-400'}`}
                      style={{ width: `${(db.activeConnections / db.maxConnections) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Hotspots Analysis */}
          <div className="bg-gray-800 rounded-xl p-6 border border-blue-500">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              🔥 Code Hotspots & Method Analysis
            </h3>
            <div className="space-y-3">
              {codeHotspots.map((hotspot, index) => (
                <div key={index} className="p-3 bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-bold text-white truncate">{hotspot.method}</span>
                    <span className={`text-xs font-bold ${getBusinessImpactColor(hotspot.businessImpact)}`}>{hotspot.businessImpact}</span>
                  </div>
                  <div className="text-xs text-blue-300 mb-1">{hotspot.application} • {hotspot.codeType}</div>
                  <div className="grid grid-cols-3 gap-1 text-xs mb-1">
                    <div className="text-teal-400">{hotspot.avgExecutionTime.toFixed(1)}ms avg</div>
                    <div className="text-cyan-400">{hotspot.callsPerMin}/min calls</div>
                    <div className="text-red-400">{hotspot.errorPercent.toFixed(1)}% errors</div>
                  </div>
                  <div className="text-xs text-green-300 line-clamp-2">
                    💡 {hotspot.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Impact Metrics */}
        <div className="bg-gray-800 rounded-xl p-6 border border-blue-500 mb-6">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            💼 Business Impact & KPI Correlation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {businessMetrics.map((metric, index) => (
              <div key={index} className="p-4 bg-gray-700 rounded-lg">
                <div className="text-lg font-bold text-white mb-1">{metric.metric}</div>
                <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                <div className={`text-sm font-bold mb-2 ${getTrendColor(metric.trend)}`}>{metric.trend}</div>
                <div className="text-xs text-gray-400 mb-1">Target: {metric.target}</div>
                <div className="text-xs text-yellow-300 line-clamp-2">{metric.impact}</div>
                <div className={`text-xs font-bold mt-1 ${getStatusColor(metric.status)}`}>{metric.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <div className="text-gray-300">
            APPDYNAMICS BUSINESS MONITORING | ALEKSANDRA AI APPLICATION INTELLIGENCE | BUSINESS TRANSACTION ANALYTICS
          </div>
          <div className="text-sm text-gray-500 mt-2">
            Business Transaction Monitoring | Application Flow Mapping | Code Hotspots | Server Health | Database Performance | Last update: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>
    </div>
  );
}