// Database Intelligence Center - Database Analytics & Query Performance Optimization
import { useState, useEffect } from 'react';
import { Database, Activity, Zap, Shield, Users, TrendingUp, AlertTriangle, CheckCircle, Clock, BarChart3, HardDrive, Cpu } from 'lucide-react';

export default function DatabaseIntelligenceCenter() {
  const [dbData, setDbData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    databaseOverview: {
      totalDatabases: 47,
      activeDatabases: 43,
      totalConnections: 2456,
      activeConnections: 1987,
      dailyQueries: 45678901,
      avgQueryTime: 45.7,
      slowQueries: 234567,
      failedQueries: 8901,
      dataSize: 2345678901234,
      indexSize: 234567890123,
      cacheHitRatio: 94.7,
      replicationLag: 12.3,
      availability: 99.97,
      backupStatus: 'HEALTHY',
      storageUsed: 78.9,
      connectionPoolUtilization: 67.8
    },
    databaseInstances: [
      {
        name: 'PostgreSQL Primary',
        type: 'PostgreSQL',
        version: '15.4',
        role: 'Primary',
        status: 'HEALTHY',
        connections: 456,
        maxConnections: 500,
        cpuUsage: 34.7,
        memoryUsage: 67.8,
        diskUsage: 78.9,
        diskSize: 500,
        queriesPerSecond: 1234,
        avgQueryTime: 23.4,
        slowQueries: 45678,
        cacheHitRatio: 96.8,
        replicationLag: 0,
        lastBackup: '2026-03-18 06:00:00',
        backupSize: 123456789012,
        uptime: '45 days 12 hours',
        dataDirectory: '/var/lib/postgresql/data',
        configOptimization: 95.6,
        indexHealthScore: 89.4,
        vacuumStatus: 'RECENT',
        lockWaitTime: 1.2,
        deadlocks: 0,
        extensions: ['pg_stat_statements', 'pg_buffercache', 'pgcrypto']
      },
      {
        name: 'PostgreSQL Read Replica 1',
        type: 'PostgreSQL',
        version: '15.4',
        role: 'Read Replica',
        status: 'HEALTHY',
        connections: 234,
        maxConnections: 300,
        cpuUsage: 18.9,
        memoryUsage: 45.6,
        diskUsage: 78.9,
        diskSize: 500,
        queriesPerSecond: 567,
        avgQueryTime: 19.8,
        slowQueries: 12345,
        cacheHitRatio: 94.2,
        replicationLag: 12.3,
        lastBackup: 'N/A (Replica)',
        backupSize: 0,
        uptime: '45 days 12 hours',
        dataDirectory: '/var/lib/postgresql/data',
        configOptimization: 92.1,
        indexHealthScore: 89.4,
        vacuumStatus: 'N/A',
        lockWaitTime: 0.8,
        deadlocks: 0,
        extensions: ['pg_stat_statements', 'pg_buffercache']
      },
      {
        name: 'Redis Cache',
        type: 'Redis',
        version: '7.0.8',
        role: 'Cache',
        status: 'EXCELLENT',
        connections: 789,
        maxConnections: 1000,
        cpuUsage: 12.3,
        memoryUsage: 56.7,
        diskUsage: 23.4,
        diskSize: 100,
        queriesPerSecond: 8901,
        avgQueryTime: 0.8,
        slowQueries: 0,
        cacheHitRatio: 98.9,
        replicationLag: 0,
        lastBackup: '2026-03-18 09:00:00',
        backupSize: 2345678901,
        uptime: '67 days 8 hours',
        dataDirectory: '/data',
        configOptimization: 97.8,
        indexHealthScore: 100,
        keyExpirations: 456789,
        evictedKeys: 12345,
        memoryFragmentation: 1.12,
        modules: ['RedisJSON', 'RedisTimeSeries', 'RedisSearch']
      },
      {
        name: 'MongoDB Analytics',
        type: 'MongoDB',
        version: '7.0.2',
        role: 'Analytics',
        status: 'WARNING',
        connections: 345,
        maxConnections: 500,
        cpuUsage: 67.8,
        memoryUsage: 89.4,
        diskUsage: 85.6,
        diskSize: 1000,
        queriesPerSecond: 234,
        avgQueryTime: 156.7,
        slowQueries: 89012,
        cacheHitRatio: 78.9,
        replicationLag: 45.6,
        lastBackup: '2026-03-18 03:00:00',
        backupSize: 567890123456,
        uptime: '23 days 16 hours',
        dataDirectory: '/data/db',
        configOptimization: 67.8,
        indexHealthScore: 56.7,
        lockUtilization: 34.5,
        oplogSize: 10240,
        collectionCount: 234,
        shardCount: 3,
        replicaSetMembers: 3
      },
      {
        name: 'Elasticsearch Logs',
        type: 'Elasticsearch',
        version: '8.11.1',
        role: 'Search/Logs',
        status: 'HEALTHY',
        connections: 123,
        maxConnections: 200,
        cpuUsage: 45.6,
        memoryUsage: 78.9,
        diskUsage: 67.8,
        diskSize: 2000,
        queriesPerSecond: 456,
        avgQueryTime: 67.8,
        slowQueries: 23456,
        cacheHitRatio: 89.4,
        replicationLag: 0,
        lastBackup: '2026-03-18 04:00:00',
        backupSize: 345678901234,
        uptime: '34 days 5 hours',
        dataDirectory: '/var/lib/elasticsearch',
        configOptimization: 87.6,
        indexHealthScore: 92.3,
        clusterHealth: 'GREEN',
        nodeCount: 5,
        shardCount: 1234,
        unassignedShards: 0,
        indexCount: 345
      }
    ],
    queryAnalytics: [
      {
        database: 'PostgreSQL Primary',
        queryType: 'SELECT',
        queryCount: 23456789,
        avgExecutionTime: 23.4,
        p95ExecutionTime: 89.7,
        p99ExecutionTime: 234.5,
        slowestQuery: 'SELECT * FROM user_analytics WHERE date >= ? AND date <= ?',
        slowestTime: 2345,
        mostFrequentQuery: 'SELECT id, name FROM users WHERE id = ?',
        frequency: 567890,
        indexUsage: 89.4,
        cacheHitRate: 96.8,
        lockWaitTime: 1.2,
        totalBuffersHit: 234567890,
        totalBuffersRead: 12345678,
        optimization: {
          suggestedIndexes: ['user_analytics_date_idx', 'users_email_idx'],
          queryRewriting: 'Available',
          cacheOptimization: 'Implemented',
          partitioning: 'Recommended'
        }
      },
      {
        database: 'PostgreSQL Primary',
        queryType: 'INSERT',
        queryCount: 5678901,
        avgExecutionTime: 34.7,
        p95ExecutionTime: 123.4,
        p99ExecutionTime: 456.7,
        slowestQuery: 'INSERT INTO activity_logs (user_id, action, timestamp, data) VALUES (?, ?, ?, ?)',
        slowestTime: 567,
        mostFrequentQuery: 'INSERT INTO events (type, data) VALUES (?, ?)',
        frequency: 123456,
        indexUsage: 67.8,
        cacheHitRate: 0,
        lockWaitTime: 2.3,
        totalBuffersHit: 12345678,
        totalBuffersRead: 5678901,
        optimization: {
          suggestedIndexes: [],
          queryRewriting: 'N/A',
          batchInserts: 'Recommended',
          connectionPooling: 'Optimized'
        }
      },
      {
        database: 'MongoDB Analytics',
        queryType: 'AGGREGATE',
        queryCount: 234567,
        avgExecutionTime: 234.5,
        p95ExecutionTime: 789.1,
        p99ExecutionTime: 1234.6,
        slowestQuery: 'db.analytics.aggregate([{$match: {date: {$gte: ?, $lte: ?}}}, {$group: {...}}])',
        slowestTime: 5678,
        mostFrequentQuery: 'db.users.aggregate([{$match: {status: "active"}}, {$count: "total"}])',
        frequency: 12345,
        indexUsage: 45.6,
        cacheHitRate: 23.4,
        lockWaitTime: 15.6,
        optimization: {
          suggestedIndexes: ['analytics_date_status_idx', 'users_status_created_idx'],
          pipelineOptimization: 'Available',
          shardKeyOptimization: 'Required',
          readPreference: 'Secondary Preferred'
        }
      },
      {
        database: 'Redis Cache',
        queryType: 'GET',
        queryCount: 45678901,
        avgExecutionTime: 0.8,
        p95ExecutionTime: 1.2,
        p99ExecutionTime: 2.3,
        slowestQuery: 'GET user:analytics:2026-03-18',
        slowestTime: 4.5,
        mostFrequentQuery: 'GET session:*',
        frequency: 8901234,
        indexUsage: 100,
        cacheHitRate: 98.9,
        lockWaitTime: 0,
        keyTypes: {
          'string': 67.8,
          'hash': 23.4,
          'list': 5.6,
          'set': 2.1,
          'zset': 1.1
        },
        optimization: {
          keyExpiration: 'Optimized',
          memoryUsage: 'Efficient',
          persistence: 'RDB + AOF',
          clustering: 'Not Required'
        }
      }
    ],
    connectionPooling: [
      {
        poolName: 'Web Application Pool',
        database: 'PostgreSQL Primary',
        minConnections: 10,
        maxConnections: 50,
        currentConnections: 34,
        activeConnections: 28,
        idleConnections: 6,
        waitingRequests: 2,
        avgWaitTime: 12.3,
        maxWaitTime: 45.6,
        connectionUtilization: 68.0,
        poolEfficiency: 94.7,
        leakedConnections: 0,
        connectionTurnover: 234,
        status: 'HEALTHY',
        lastOptimized: '2026-03-18 08:00:00'
      },
      {
        poolName: 'Analytics Service Pool',
        database: 'MongoDB Analytics',
        minConnections: 5,
        maxConnections: 25,
        currentConnections: 18,
        activeConnections: 16,
        idleConnections: 2,
        waitingRequests: 5,
        avgWaitTime: 67.8,
        maxWaitTime: 234.5,
        connectionUtilization: 72.0,
        poolEfficiency: 78.9,
        leakedConnections: 1,
        connectionTurnover: 89,
        status: 'WARNING',
        lastOptimized: '2026-03-17 14:00:00'
      },
      {
        poolName: 'Cache Service Pool',
        database: 'Redis Cache',
        minConnections: 20,
        maxConnections: 100,
        currentConnections: 67,
        activeConnections: 58,
        idleConnections: 9,
        waitingRequests: 0,
        avgWaitTime: 1.2,
        maxWaitTime: 3.4,
        connectionUtilization: 67.0,
        poolEfficiency: 97.8,
        leakedConnections: 0,
        connectionTurnover: 456,
        status: 'EXCELLENT',
        lastOptimized: '2026-03-18 09:00:00'
      }
    ],
    dbAlerts: [
      {
        type: 'CRITICAL',
        category: 'Performance',
        message: 'MongoDB Analytics experiencing severe performance degradation - average query time 156ms vs 50ms target',
        database: 'MongoDB Analytics',
        metric: 'Query Performance',
        currentValue: '156.7ms avg',
        threshold: '50ms',
        impact: 'Analytics dashboard severely slow, business intelligence reporting affected',
        rootCause: 'Missing compound indexes on frequently queried collections',
        affectedQueries: 89012,
        severity: 'HIGH',
        timestamp: '10:37',
        trendDirection: 'WORSENING',
        detectedBy: 'Performance Monitor',
        recommendation: 'Create compound indexes on analytics collections, optimize aggregation pipelines',
        urgency: 'IMMEDIATE',
        escalation: 'DBA_TEAM',
        slaViolation: true,
        businessImpact: 'Critical reporting delays affecting decision making',
        estimatedDowntime: 'N/A - Performance degradation',
        autoRemediation: 'Index suggestion service active'
      },
      {
        type: 'HIGH',
        category: 'Storage',
        message: 'PostgreSQL Primary approaching storage capacity - 78.9% disk utilization detected',
        database: 'PostgreSQL Primary',
        metric: 'Disk Usage',
        currentValue: '78.9%',
        threshold: '75%',
        impact: 'Risk of database writes failing, potential service disruption within 48 hours',
        projectedFull: '2026-03-20 estimated',
        growthRate: '2.3% per day',
        severity: 'MEDIUM',
        timestamp: '10:35',
        trendDirection: 'INCREASING',
        detectedBy: 'Storage Monitor',
        recommendation: 'Provision additional storage, archive old data, implement data retention policies',
        urgency: 'HIGH',
        escalation: 'INFRASTRUCTURE_TEAM',
        availableSpace: '105.5GB remaining',
        largestTables: ['activity_logs (45GB)', 'user_analytics (32GB)', 'events (18GB)'],
        archivalCandidates: 'activity_logs older than 90 days (12GB)'
      },
      {
        type: 'WARNING',
        category: 'Connections',
        message: 'Analytics Service connection pool showing signs of stress - 72% utilization with wait times',
        database: 'MongoDB Analytics',
        poolName: 'Analytics Service Pool',
        currentValue: '72% utilization',
        threshold: '70%',
        impact: 'Increased response times for analytics queries, potential timeout errors',
        waitingRequests: 5,
        avgWaitTime: '67.8ms',
        severity: 'MEDIUM',
        timestamp: '10:33',
        trendDirection: 'STABLE',
        detectedBy: 'Connection Monitor',
        recommendation: 'Increase pool size, optimize long-running queries, implement query timeout',
        urgency: 'MEDIUM',
        escalation: 'APPLICATION_TEAM',
        poolConfiguration: 'max: 25, current: 18',
        leakedConnections: 1,
        optimizationOpportunity: 'Query optimization could reduce connection time'
      },
      {
        type: 'INFO',
        category: 'Performance',
        message: 'Redis Cache achieving exceptional performance - 98.9% hit rate with sub-millisecond response',
        database: 'Redis Cache',
        metric: 'Cache Performance',
        currentValue: '98.9% hit rate, 0.8ms avg',
        benchmarkComparison: '12% better than industry standard',
        impact: 'Excellent application performance, minimal database load, optimal user experience',
        optimization: 'Advanced key expiration strategies, memory defragmentation',
        severity: 'POSITIVE',
        timestamp: '10:30',
        detectedBy: 'Performance Analytics',
        successFactors: ['Optimal key design', 'Smart expiration policies', 'Efficient data structures'],
        opportunity: 'BEST_PRACTICE_SHARING',
        memoryEfficiency: 'High - 1.12 fragmentation ratio',
        recommendation: 'Document cache patterns for other services'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        totalQueries: 5678901,
        avgQueryTime: 45.7,
        slowQueries: 23456,
        failedQueries: 345,
        cacheHitRatio: 94.7,
        connectionUtilization: 67.8,
        storageGrowth: '+234MB',
        topSlowQueries: ['Analytics aggregation', 'User report generation', 'Log analysis'],
        errorTypes: ['Connection timeout', 'Lock wait timeout', 'Out of memory'],
        trends: {
          queryTime: '+12.3ms',
          slowQueries: '+15.7%',
          cacheHits: '+2.1%',
          connections: '+8.9%'
        }
      },
      {
        period: 'Last 24 Hours',
        totalQueries: 123456789,
        avgQueryTime: 42.3,
        slowQueries: 456789,
        failedQueries: 8901,
        cacheHitRatio: 93.4,
        connectionUtilization: 64.5,
        storageGrowth: '+5.7GB',
        topSlowQueries: ['Complex analytics', 'Batch operations', 'Data migrations'],
        errorTypes: ['Connection pool exhaustion', 'Query timeout', 'Deadlock'],
        trends: {
          queryTime: '+8.7ms',
          slowQueries: '+22.4%',
          cacheHits: '+1.8%',
          connections: '+12.3%'
        }
      },
      {
        period: 'Last 7 Days',
        totalQueries: 789012345,
        avgQueryTime: 39.8,
        slowQueries: 2345678,
        failedQueries: 45678,
        cacheHitRatio: 92.1,
        connectionUtilization: 61.2,
        storageGrowth: '+34.5GB',
        topSlowQueries: ['Weekly reports', 'Data aggregations', 'Index rebuilds'],
        errorTypes: ['Storage full warnings', 'Replication lag', 'Connection limits'],
        trends: {
          queryTime: '+5.4ms',
          slowQueries: '+34.6%',
          cacheHits: '+3.2%',
          connections: '+18.9%'
        }
      }
    ],
    backupStatus: [
      {
        database: 'PostgreSQL Primary',
        type: 'Full Backup',
        status: 'COMPLETED',
        lastRun: '2026-03-18 06:00:00',
        duration: '1h 23m',
        size: 123456789012,
        location: 's3://backups/postgresql/2026-03-18/',
        retention: '30 days',
        compression: 'GZIP',
        encryption: 'AES-256',
        verificationStatus: 'VERIFIED',
        nextScheduled: '2026-03-19 06:00:00',
        backupWindow: '06:00-08:00 UTC',
        rpoTarget: '4 hours',
        rtoTarget: '2 hours',
        lastRestore: '2026-02-15 (Test)',
        restoreTime: '45 minutes'
      },
      {
        database: 'MongoDB Analytics',
        type: 'Incremental Backup',
        status: 'COMPLETED',
        lastRun: '2026-03-18 03:00:00',
        duration: '45m',
        size: 567890123456,
        location: 's3://backups/mongodb/2026-03-18/',
        retention: '14 days',
        compression: 'SNAPPY',
        encryption: 'AES-256',
        verificationStatus: 'VERIFIED',
        nextScheduled: '2026-03-19 03:00:00',
        backupWindow: '03:00-04:00 UTC',
        rpoTarget: '8 hours',
        rtoTarget: '4 hours',
        lastRestore: 'Never',
        pointInTimeRecovery: 'Available'
      },
      {
        database: 'Redis Cache',
        type: 'RDB Snapshot',
        status: 'COMPLETED',
        lastRun: '2026-03-18 09:00:00',
        duration: '5m',
        size: 2345678901,
        location: 's3://backups/redis/2026-03-18/',
        retention: '7 days',
        compression: 'LZ4',
        encryption: 'AES-256',
        verificationStatus: 'VERIFIED',
        nextScheduled: '2026-03-18 15:00:00',
        backupWindow: 'Every 6 hours',
        rpoTarget: '6 hours',
        rtoTarget: '30 minutes',
        lastRestore: '2026-03-10 (Failover)',
        aofStatus: 'ENABLED'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setDbData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        databaseOverview: {
          ...prev.databaseOverview,
          activeConnections: Math.max(1800, Math.min(2200, prev.databaseOverview.activeConnections + Math.floor((Math.random() - 0.5) * 50))),
          avgQueryTime: Math.max(40.0, Math.min(55.0, prev.databaseOverview.avgQueryTime + (Math.random() - 0.5) * 5.0)),
          cacheHitRatio: Math.max(92.0, Math.min(97.0, prev.databaseOverview.cacheHitRatio + (Math.random() - 0.5) * 1.0)),
          connectionPoolUtilization: Math.max(60.0, Math.min(75.0, prev.databaseOverview.connectionPoolUtilization + (Math.random() - 0.5) * 3.0))
        }
      }));
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'HIGH': return 'border-orange-500 bg-orange-900/30 text-orange-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'EXCELLENT': return 'text-green-400 bg-green-400/20';
      case 'HEALTHY': return 'text-green-400 bg-green-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'COMPLETED': return 'text-green-400 bg-green-400/20';
      case 'FAILED': return 'text-red-400 bg-red-400/20';
      case 'RUNNING': return 'text-blue-400 bg-blue-400/20';
      case 'VERIFIED': return 'text-green-400 bg-green-400/20';
      default: return 'text-slate-400 bg-slate-400/20';
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'IMMEDIATE': return 'text-red-500';
      case 'HIGH': return 'text-red-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'LOW': return 'text-green-400';
      default: return 'text-blue-400';
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

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatBytes = (bytes) => {
    if (bytes >= 1000000000000) return `${(bytes / 1000000000000).toFixed(1)}TB`;
    if (bytes >= 1000000000) return `${(bytes / 1000000000).toFixed(1)}GB`;
    if (bytes >= 1000000) return `${(bytes / 1000000).toFixed(1)}MB`;
    if (bytes >= 1000) return `${(bytes / 1000).toFixed(0)}KB`;
    return `${bytes}B`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-indigo-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Database Intelligence Center</h1>
              <p className="text-indigo-300">Database analytics & query performance optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-indigo-400">{dbData.currentTime}</div>
            <div className="text-indigo-300">Database Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Database Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Database className="w-5 h-5 text-indigo-400 mr-2" />
                Databases
              </h3>
            </div>
            <div className="text-3xl font-bold text-indigo-400">{dbData.databaseOverview.activeDatabases}</div>
            <div className="text-indigo-300 text-sm">{dbData.databaseOverview.totalDatabases} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Connections
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(dbData.databaseOverview.activeConnections)}</div>
            <div className="text-cyan-300 text-sm">{formatPercentage(dbData.databaseOverview.connectionPoolUtilization)} Pool</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Queries/Day
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(dbData.databaseOverview.dailyQueries)}</div>
            <div className="text-green-300 text-sm">Daily</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Clock className="w-5 h-5 text-yellow-400 mr-2" />
                Query Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{dbData.databaseOverview.avgQueryTime.toFixed(1)}ms</div>
            <div className="text-yellow-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                Cache Hit
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(dbData.databaseOverview.cacheHitRatio)}</div>
            <div className="text-purple-300 text-sm">Ratio</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <HardDrive className="w-5 h-5 text-orange-400 mr-2" />
                Storage
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(dbData.databaseOverview.storageUsed)}</div>
            <div className="text-orange-300 text-sm">Used</div>
          </div>
        </div>

        {/* Database Instances */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Database className="w-5 h-5 text-indigo-400 mr-2" />
            Database Instance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Instance</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                  <th className="text-center p-3 text-slate-300">Connections</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Resources</th>
                  <th className="text-center p-3 text-slate-300">Cache</th>
                </tr>
              </thead>
              <tbody>
                {dbData.databaseInstances.map((db, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium text-sm">{db.name}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {db.type} {db.version} • {db.role} • Uptime: {db.uptime}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(db.status)}`}>
                        {db.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{db.connections}/{db.maxConnections}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage((db.connections / db.maxConnections) * 100)}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className={`font-medium ${db.avgQueryTime < 25 ? 'text-green-400' : db.avgQueryTime < 100 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {db.avgQueryTime}ms
                      </div>
                      <div className="text-slate-400 text-xs">{formatNumber(db.queriesPerSecond)}/sec</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-xs space-y-1">
                        <div className={`${db.cpuUsage > 70 ? 'text-red-400' : db.cpuUsage > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
                          CPU: {formatPercentage(db.cpuUsage)}
                        </div>
                        <div className={`${db.memoryUsage > 85 ? 'text-red-400' : db.memoryUsage > 70 ? 'text-yellow-400' : 'text-green-400'}`}>
                          MEM: {formatPercentage(db.memoryUsage)}
                        </div>
                        <div className={`${db.diskUsage > 80 ? 'text-red-400' : db.diskUsage > 65 ? 'text-yellow-400' : 'text-green-400'}`}>
                          DISK: {formatPercentage(db.diskUsage)}
                        </div>
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className={`text-sm font-medium ${db.cacheHitRatio >= 95 ? 'text-green-400' : db.cacheHitRatio >= 85 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {formatPercentage(db.cacheHitRatio)}
                      </div>
                      <div className="text-slate-400 text-xs">Hit Rate</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Query Analytics & Connection Pooling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Query Performance Analytics
            </h3>
            <div className="space-y-4">
              {dbData.queryAnalytics.map((query, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{query.database} - {query.queryType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${query.avgExecutionTime < 50 ? 'text-green-400' : query.avgExecutionTime < 150 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {query.avgExecutionTime}ms avg
                      </span>
                      <span className="text-slate-400 text-xs">{formatNumber(query.queryCount)} queries</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">P95: {query.p95ExecutionTime}ms</div>
                    <div className="text-cyan-400">P99: {query.p99ExecutionTime}ms</div>
                    <div className="text-purple-400">Index: {formatPercentage(query.indexUsage)}</div>
                  </div>
                  
                  {query.cacheHitRate > 0 && (
                    <div className="text-xs mb-2">
                      <span className="text-green-400">Cache Hit: {formatPercentage(query.cacheHitRate)}</span>
                      {query.lockWaitTime > 0 && <span className="text-yellow-400 ml-3">Lock Wait: {query.lockWaitTime}ms</span>}
                    </div>
                  )}
                  
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Slowest:</strong> {query.slowestQuery.substring(0, 80)}...
                  </div>
                  
                  {query.optimization && (
                    <div className="text-blue-400 text-xs">
                      <strong>Optimization:</strong> {Object.entries(query.optimization).slice(0, 2).map(([key, value]) => 
                        `${key.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${Array.isArray(value) ? value.length + ' available' : value}`
                      ).join(', ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-cyan-400 mr-2" />
              Connection Pool Analytics
            </h3>
            <div className="space-y-4">
              {dbData.connectionPooling.map((pool, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{pool.poolName}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(pool.status)}`}>
                        {pool.status}
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(pool.connectionUtilization)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-indigo-400">Pool: {pool.currentConnections}/{pool.maxConnections}</div>
                    <div className="text-green-400">Active: {pool.activeConnections}</div>
                    <div className="text-yellow-400">Idle: {pool.idleConnections}</div>
                  </div>
                  
                  {pool.waitingRequests > 0 && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-orange-400">Waiting: {pool.waitingRequests}</div>
                      <div className="text-red-400">Wait Time: {pool.avgWaitTime}ms</div>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-purple-400">Efficiency: {formatPercentage(pool.poolEfficiency)}</div>
                    <div className="text-blue-400">Turnover: {pool.connectionTurnover}</div>
                    <div className={`${pool.leakedConnections > 0 ? 'text-red-400' : 'text-green-400'}`}>
                      Leaks: {pool.leakedConnections}
                    </div>
                  </div>
                  
                  <div className="text-slate-400 text-xs">
                    <strong>Database:</strong> {pool.database} • <strong>Optimized:</strong> {pool.lastOptimized}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics & Database Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
              Performance Timeline
            </h3>
            <div className="space-y-4">
              {dbData.performanceMetrics.map((metrics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metrics.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${metrics.avgQueryTime < 50 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {metrics.avgQueryTime}ms avg
                      </span>
                      <span className="text-slate-400 text-xs">{formatNumber(metrics.totalQueries)} queries</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-red-400">Slow: {formatNumber(metrics.slowQueries)}</div>
                    <div className="text-orange-400">Failed: {formatNumber(metrics.failedQueries)}</div>
                    <div className="text-purple-400">Cache: {formatPercentage(metrics.cacheHitRatio)}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Pool: {formatPercentage(metrics.connectionUtilization)}</div>
                    <div className="text-yellow-400">Storage: {metrics.storageGrowth}</div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs mb-2">
                    <div className="text-green-400">Time: {metrics.trends.queryTime}</div>
                    <div className="text-red-400">Slow: {metrics.trends.slowQueries}</div>
                    <div className="text-blue-400">Cache: {metrics.trends.cacheHits}</div>
                    <div className="text-purple-400">Conn: {metrics.trends.connections}</div>
                  </div>
                  
                  <div className="text-slate-400 text-xs">
                    <strong>Top Issues:</strong> {metrics.topSlowQueries.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Database System Alerts
            </h3>
            <div className="space-y-4">
              {dbData.dbAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      {alert.urgency && <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>{alert.urgency}</span>}
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    {alert.database && <div className="text-slate-300">Database: {alert.database}</div>}
                    {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                    {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                    {alert.projectedFull && <div className="text-orange-400">Projected Full: {alert.projectedFull}</div>}
                    {alert.benchmarkComparison && <div className="text-green-400">Benchmark: {alert.benchmarkComparison}</div>}
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

        {/* Backup Status */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-indigo-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Shield className="w-5 h-5 text-green-400 mr-2" />
            Backup & Recovery Status
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {dbData.backupStatus.map((backup, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium text-sm">{backup.database}</span>
                  <span className={`px-2 py-1 rounded text-xs ${getStatusColor(backup.status)}`}>
                    {backup.status}
                  </span>
                </div>
                
                <div className="text-slate-400 text-xs mb-3">{backup.type} • {backup.compression} • {backup.encryption}</div>
                
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Last Run:</span>
                    <span className="text-indigo-400">{backup.lastRun}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Duration:</span>
                    <span className="text-cyan-400">{backup.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Size:</span>
                    <span className="text-yellow-400">{formatBytes(backup.size)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Retention:</span>
                    <span className="text-purple-400">{backup.retention}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">RPO/RTO:</span>
                    <span className="text-green-400">{backup.rpoTarget}/{backup.rtoTarget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Verified:</span>
                    <span className={`${backup.verificationStatus === 'VERIFIED' ? 'text-green-400' : 'text-red-400'}`}>
                      {backup.verificationStatus}
                    </span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-slate-600/30 text-xs">
                  <div className="text-slate-400">
                    <strong>Next:</strong> {backup.nextScheduled}
                  </div>
                  <div className="text-slate-400 mt-1">
                    <strong>Window:</strong> {backup.backupWindow}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}