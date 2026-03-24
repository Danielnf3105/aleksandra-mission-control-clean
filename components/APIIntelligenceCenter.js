// API Intelligence Center - API Analytics & Endpoint Performance Optimization
import { useState, useEffect } from 'react';
import { Globe, Zap, Shield, Activity, TrendingUp, AlertTriangle, CheckCircle, Clock, Users, BarChart3, Settings, Target } from 'lucide-react';

export default function APIIntelligenceCenter() {
  const [apiData, setApiData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    apiOverview: {
      totalAPIs: 234,
      activeAPIs: 198,
      totalEndpoints: 1567,
      activeEndpoints: 1423,
      dailyRequests: 12345678,
      avgResponseTime: 287,
      successRate: 99.7,
      errorRate: 0.3,
      dataTransfer: 567890123,
      rateLimitHits: 23456,
      apiKeys: 5678,
      developers: 1234,
      webhooks: 456,
      cacheHitRate: 78.9,
      availability: 99.98,
      documentation: 92.3
    },
    endpointPerformance: [
      {
        endpoint: '/api/v1/users',
        method: 'GET',
        dailyRequests: 2345678,
        avgResponseTime: 156,
        p95ResponseTime: 289,
        p99ResponseTime: 456,
        successRate: 99.8,
        errorRate: 0.2,
        dataTransfer: 123456789,
        cacheHitRate: 89.4,
        rateLimitHits: 567,
        status: 'HEALTHY',
        popularParams: ['limit', 'offset', 'sort'],
        topConsumers: ['Mobile App', 'Web Dashboard', 'Analytics Service'],
        peakHours: ['9 AM - 11 AM', '2 PM - 4 PM'],
        optimization: {
          caching: true,
          compression: true,
          indexing: true,
          pagination: true
        },
        sla: {
          target: '< 200ms',
          availability: '99.9%',
          compliance: 98.7
        },
        security: {
          authRequired: true,
          rateLimited: true,
          encrypted: true,
          validated: true
        }
      },
      {
        endpoint: '/api/v1/orders',
        method: 'POST',
        dailyRequests: 876543,
        avgResponseTime: 423,
        p95ResponseTime: 789,
        p99ResponseTime: 1234,
        successRate: 99.2,
        errorRate: 0.8,
        dataTransfer: 234567890,
        cacheHitRate: 0,
        rateLimitHits: 1234,
        status: 'WARNING',
        popularParams: ['user_id', 'items', 'payment_method'],
        topConsumers: ['E-commerce App', 'POS System', 'Partner API'],
        peakHours: ['11 AM - 1 PM', '7 PM - 9 PM'],
        optimization: {
          caching: false,
          compression: true,
          indexing: true,
          validation: true
        },
        sla: {
          target: '< 300ms',
          availability: '99.5%',
          compliance: 96.2
        },
        security: {
          authRequired: true,
          rateLimited: true,
          encrypted: true,
          validated: true
        }
      },
      {
        endpoint: '/api/v1/analytics/reports',
        method: 'GET',
        dailyRequests: 345678,
        avgResponseTime: 1234,
        p95ResponseTime: 2345,
        p99ResponseTime: 3456,
        successRate: 98.7,
        errorRate: 1.3,
        dataTransfer: 456789012,
        cacheHitRate: 67.8,
        rateLimitHits: 89,
        status: 'CRITICAL',
        popularParams: ['date_range', 'metrics', 'format'],
        topConsumers: ['Business Dashboard', 'Reporting Service', 'Data Export'],
        peakHours: ['8 AM - 10 AM', '5 PM - 7 PM'],
        optimization: {
          caching: true,
          compression: true,
          indexing: false,
          aggregation: true
        },
        sla: {
          target: '< 800ms',
          availability: '99.0%',
          compliance: 87.9
        },
        security: {
          authRequired: true,
          rateLimited: true,
          encrypted: true,
          authorized: true
        }
      },
      {
        endpoint: '/api/v2/search',
        method: 'GET',
        dailyRequests: 1234567,
        avgResponseTime: 234,
        p95ResponseTime: 445,
        p99ResponseTime: 678,
        successRate: 99.6,
        errorRate: 0.4,
        dataTransfer: 345678901,
        cacheHitRate: 92.3,
        rateLimitHits: 345,
        status: 'EXCELLENT',
        popularParams: ['query', 'filters', 'page'],
        topConsumers: ['Search UI', 'Autocomplete', 'Filter System'],
        peakHours: ['10 AM - 12 PM', '3 PM - 5 PM'],
        optimization: {
          caching: true,
          compression: true,
          indexing: true,
          elasticsearch: true
        },
        sla: {
          target: '< 250ms',
          availability: '99.95%',
          compliance: 99.2
        },
        security: {
          authRequired: false,
          rateLimited: true,
          encrypted: true,
          sanitized: true
        }
      },
      {
        endpoint: '/api/v1/notifications/send',
        method: 'POST',
        dailyRequests: 567890,
        avgResponseTime: 89,
        p95ResponseTime: 156,
        p99ResponseTime: 234,
        successRate: 99.9,
        errorRate: 0.1,
        dataTransfer: 78901234,
        cacheHitRate: 0,
        rateLimitHits: 2345,
        status: 'EXCELLENT',
        popularParams: ['recipients', 'message', 'channel'],
        topConsumers: ['Notification Service', 'Email System', 'Push Service'],
        peakHours: ['6 AM - 8 AM', '6 PM - 8 PM'],
        optimization: {
          caching: false,
          compression: true,
          queuing: true,
          batching: true
        },
        sla: {
          target: '< 100ms',
          availability: '99.99%',
          compliance: 99.8
        },
        security: {
          authRequired: true,
          rateLimited: true,
          encrypted: true,
          tokenized: true
        }
      }
    ],
    apiVersions: [
      {
        version: 'v1',
        status: 'DEPRECATED',
        endpoints: 89,
        dailyRequests: 2345678,
        adoptionRate: 23.4,
        deprecationDate: '2026-06-01',
        migrationProgress: 67.8,
        supportLevel: 'Maintenance Only',
        breakingChanges: 0,
        securityUpdates: 12,
        performanceScore: 78.9,
        documentationStatus: 'Complete',
        migrationGuide: 'Available'
      },
      {
        version: 'v2',
        status: 'STABLE',
        endpoints: 156,
        dailyRequests: 7890123,
        adoptionRate: 64.2,
        releaseDate: '2025-03-15',
        supportLevel: 'Full Support',
        breakingChanges: 3,
        featureAdditions: 23,
        performanceScore: 94.6,
        documentationStatus: 'Complete',
        backwardCompatibility: 89.4
      },
      {
        version: 'v3',
        status: 'BETA',
        endpoints: 67,
        dailyRequests: 1234567,
        adoptionRate: 12.4,
        releaseDate: '2026-01-20',
        supportLevel: 'Beta Support',
        breakingChanges: 8,
        featureAdditions: 45,
        performanceScore: 96.8,
        documentationStatus: 'In Progress',
        betaParticipants: 234
      }
    ],
    apiConsumers: [
      {
        consumer: 'Mobile Application',
        apiKeys: 1234,
        dailyRequests: 4567890,
        successRate: 99.6,
        avgResponseTime: 234,
        dataTransfer: 234567890,
        rateLimitHits: 8901,
        topEndpoints: ['/api/v2/users', '/api/v2/search', '/api/v1/orders'],
        usagePattern: 'Peak: 8 AM - 10 PM',
        plan: 'Enterprise',
        quota: 10000000,
        quotaUsed: 45.7,
        lastActive: '2026-03-18 10:29',
        geography: ['North America', 'Europe', 'Asia'],
        platform: 'iOS/Android',
        sdkVersion: '2.4.1'
      },
      {
        consumer: 'Web Dashboard',
        apiKeys: 567,
        dailyRequests: 2345678,
        successRate: 99.8,
        avgResponseTime: 189,
        dataTransfer: 123456789,
        rateLimitHits: 345,
        topEndpoints: ['/api/v1/analytics/reports', '/api/v2/users', '/api/v1/settings'],
        usagePattern: 'Business hours: 9 AM - 5 PM',
        plan: 'Professional',
        quota: 5000000,
        quotaUsed: 46.9,
        lastActive: '2026-03-18 10:30',
        geography: ['North America', 'Europe'],
        platform: 'Web Browser',
        framework: 'React 18.2'
      },
      {
        consumer: 'Partner Integration',
        apiKeys: 89,
        dailyRequests: 1234567,
        successRate: 98.9,
        avgResponseTime: 345,
        dataTransfer: 456789012,
        rateLimitHits: 1234,
        topEndpoints: ['/api/v1/orders', '/api/v1/products', '/api/v1/webhooks'],
        usagePattern: 'Continuous: 24/7',
        plan: 'Partner',
        quota: 20000000,
        quotaUsaged: 6.2,
        lastActive: '2026-03-18 10:28',
        geography: ['Global'],
        platform: 'Server-to-Server',
        authentication: 'OAuth 2.0'
      },
      {
        consumer: 'Internal Services',
        apiKeys: 234,
        dailyRequests: 3456789,
        successRate: 99.9,
        avgResponseTime: 123,
        dataTransfer: 567890123,
        rateLimitHits: 56,
        topEndpoints: ['/api/v2/search', '/api/v1/notifications/send', '/api/v1/users'],
        usagePattern: 'Variable: Load-based',
        plan: 'Internal',
        quota: 'Unlimited',
        quotaUsed: 0,
        lastActive: '2026-03-18 10:30',
        geography: ['Data Centers'],
        platform: 'Microservices',
        authentication: 'Service Token'
      },
      {
        consumer: 'Third-party Developers',
        apiKeys: 2345,
        dailyRequests: 987654,
        successRate: 97.8,
        avgResponseTime: 456,
        dataTransfer: 234567890,
        rateLimitHits: 5678,
        topEndpoints: ['/api/v2/search', '/api/v1/users', '/api/v1/webhooks'],
        usagePattern: 'Development: Irregular',
        plan: 'Developer',
        quota: 100000,
        quotaUsed: 98.7,
        lastActive: '2026-03-18 09:45',
        geography: ['Global'],
        platform: 'Various',
        supportLevel: 'Community'
      }
    ],
    securityAnalytics: {
      authenticationMethods: {
        apiKey: 67.8,
        oauth2: 23.4,
        jwt: 6.7,
        basicAuth: 2.1
      },
      threatDetection: {
        suspiciousRequests: 12345,
        blockedRequests: 8901,
        ddosAttempts: 234,
        bruteForceAttempts: 567,
        malformedRequests: 1234,
        unauthorizedAccess: 89
      },
      rateLimiting: {
        totalLimits: 5678,
        violationsDetected: 23456,
        temporaryBlocks: 567,
        permanentBlocks: 89,
        whitelistedIPs: 234,
        blacklistedIPs: 45
      },
      dataProtection: {
        encryptedRequests: 99.8,
        piiDetection: 234,
        dataLeakPrevention: 12,
        gdprCompliance: 98.7,
        auditLogs: 567890,
        retentionPolicy: '90 days'
      }
    },
    apiAlerts: [
      {
        type: 'CRITICAL',
        category: 'Performance',
        message: 'Analytics Reports API response time exceeded SLA threshold - 1.2s avg vs 800ms target',
        endpoint: '/api/v1/analytics/reports',
        currentValue: '1234ms',
        threshold: '800ms',
        impact: 'Business dashboard performance severely affected, user complaints increasing',
        affectedConsumers: ['Web Dashboard', 'Business Dashboard', 'Reporting Service'],
        severity: 'HIGH',
        timestamp: '10:29',
        trendDirection: 'WORSENING',
        detectedBy: 'Performance Monitor',
        recommendation: 'Implement query optimization, add database indexing, consider response caching',
        urgency: 'IMMEDIATE',
        escalation: 'API_TEAM',
        slaViolation: true,
        requestVolume: '345,678/day',
        errorSpike: '+45% in last hour'
      },
      {
        type: 'HIGH',
        category: 'Security',
        message: 'Unusual API key usage pattern detected - potential credential compromise',
        endpoint: 'Multiple endpoints',
        apiKey: 'ak_live_2Xs9KjH...',
        anomalyScore: 8.7,
        impact: 'Potential data breach, unauthorized access to user information',
        suspiciousActivity: ['Geo-location jump', 'Unusual request patterns', 'High volume spike'],
        severity: 'MEDIUM',
        timestamp: '10:25',
        detectedBy: 'Security Monitor',
        recommendation: 'Revoke API key immediately, investigate access logs, notify key owner',
        urgency: 'HIGH',
        escalation: 'SECURITY_TEAM',
        affectedRequests: 23456,
        locationAnomaly: 'Russia → Brazil → Singapore (< 1 hour)'
      },
      {
        type: 'WARNING',
        category: 'Quota',
        message: 'Third-party developers approaching quota limits - 98.7% utilization detected',
        consumer: 'Third-party Developers',
        currentUsage: '987,654 requests',
        quotaLimit: '1,000,000 requests',
        impact: 'Potential service disruption for external developers, integration failures',
        timeToLimit: '2.3 hours at current rate',
        severity: 'MEDIUM',
        timestamp: '10:20',
        detectedBy: 'Quota Monitor',
        recommendation: 'Send quota warning notifications, offer plan upgrades, monitor closely',
        urgency: 'MEDIUM',
        escalation: 'ACCOUNT_TEAM',
        affectedDevelopers: 234,
        planUpgradeOpportunity: true
      },
      {
        type: 'INFO',
        category: 'Performance',
        message: 'Search API achieving exceptional performance - 99.6% success rate with 234ms avg response',
        endpoint: '/api/v2/search',
        currentValue: '234ms avg, 99.6% success',
        benchmarkComparison: '15% better than industry standard',
        impact: 'Excellent user experience, high customer satisfaction, competitive advantage',
        optimizations: ['Elasticsearch integration', 'Smart caching', 'Query optimization'],
        severity: 'POSITIVE',
        timestamp: '10:15',
        detectedBy: 'Performance Analytics',
        successFactors: ['Advanced indexing', 'Efficient caching strategy', 'Optimized algorithms'],
        opportunity: 'BEST_PRACTICE_REPLICATION',
        customerFeedback: 'Highly positive search experience',
        recommendation: 'Document success patterns for other endpoints'
      }
    ],
    performanceMetrics: [
      {
        period: 'Last Hour',
        totalRequests: 1234567,
        avgResponseTime: 287,
        successRate: 99.7,
        errorRate: 0.3,
        dataTransfer: 234567890,
        cacheHitRate: 78.9,
        rateLimitHits: 2345,
        topErrors: ['429 Rate Limited', '500 Internal Server', '404 Not Found'],
        peakThroughput: '5,678 req/sec',
        trends: {
          requests: '+8.7%',
          responseTime: '+23ms',
          errors: '-12.3%',
          cacheHits: '+4.2%'
        }
      },
      {
        period: 'Last 24 Hours',
        totalRequests: 29876543,
        avgResponseTime: 294,
        successRate: 99.6,
        errorRate: 0.4,
        dataTransfer: 5678901234,
        cacheHitRate: 76.4,
        rateLimitHits: 56789,
        topErrors: ['429 Rate Limited', '502 Bad Gateway', '503 Service Unavailable'],
        peakThroughput: '8,901 req/sec',
        trends: {
          requests: '+15.6%',
          responseTime: '+31ms',
          errors: '-8.9%',
          cacheHits: '+2.1%'
        }
      },
      {
        period: 'Last 7 Days',
        totalRequests: 198765432,
        avgResponseTime: 301,
        successRate: 99.4,
        errorRate: 0.6,
        dataTransfer: 34567890123,
        cacheHitRate: 74.7,
        rateLimitHits: 345678,
        topErrors: ['429 Rate Limited', '500 Internal Server', '408 Request Timeout'],
        peakThroughput: '12,345 req/sec',
        trends: {
          requests: '+22.4%',
          responseTime: '+47ms',
          errors: '-15.7%',
          cacheHits: '+6.8%'
        }
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setApiData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        apiOverview: {
          ...prev.apiOverview,
          dailyRequests: Math.max(12000000, Math.min(13000000, prev.apiOverview.dailyRequests + Math.floor((Math.random() - 0.5) * 100000))),
          avgResponseTime: Math.max(250, Math.min(350, prev.apiOverview.avgResponseTime + (Math.random() - 0.5) * 20)),
          successRate: Math.max(99.0, Math.min(99.9, prev.apiOverview.successRate + (Math.random() - 0.5) * 0.2)),
          cacheHitRate: Math.max(75.0, Math.min(85.0, prev.apiOverview.cacheHitRate + (Math.random() - 0.5) * 2.0))
        }
      }));
    }, 30000);

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
      case 'DEPRECATED': return 'text-gray-400 bg-gray-400/20';
      case 'STABLE': return 'text-blue-400 bg-blue-400/20';
      case 'BETA': return 'text-purple-400 bg-purple-400/20';
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
    if (bytes >= 1000000000) return `${(bytes / 1000000000).toFixed(1)}GB`;
    if (bytes >= 1000000) return `${(bytes / 1000000).toFixed(1)}MB`;
    if (bytes >= 1000) return `${(bytes / 1000).toFixed(0)}KB`;
    return `${bytes}B`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-emerald-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">API Intelligence Center</h1>
              <p className="text-emerald-300">API analytics & endpoint performance optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-emerald-400">{apiData.currentTime}</div>
            <div className="text-emerald-300">API Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* API Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-emerald-400 mr-2" />
                Active APIs
              </h3>
            </div>
            <div className="text-3xl font-bold text-emerald-400">{apiData.apiOverview.activeAPIs}</div>
            <div className="text-emerald-300 text-sm">{apiData.apiOverview.totalAPIs} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Requests
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(apiData.apiOverview.dailyRequests)}</div>
            <div className="text-cyan-300 text-sm">Daily</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Response Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{apiData.apiOverview.avgResponseTime}ms</div>
            <div className="text-yellow-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                Success Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatPercentage(apiData.apiOverview.successRate)}</div>
            <div className="text-green-300 text-sm">Success</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-blue-400 mr-2" />
                Cache Hit
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatPercentage(apiData.apiOverview.cacheHitRate)}</div>
            <div className="text-blue-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-purple-400 mr-2" />
                Developers
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(apiData.apiOverview.developers)}</div>
            <div className="text-purple-300 text-sm">Active</div>
          </div>
        </div>

        {/* Endpoint Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 text-emerald-400 mr-2" />
            Endpoint Performance Analytics
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Endpoint</th>
                  <th className="text-center p-3 text-slate-300">Requests/Day</th>
                  <th className="text-center p-3 text-slate-300">Response Time</th>
                  <th className="text-center p-3 text-slate-300">Success Rate</th>
                  <th className="text-center p-3 text-slate-300">Status</th>
                  <th className="text-center p-3 text-slate-300">Top Consumers</th>
                </tr>
              </thead>
              <tbody>
                {apiData.endpointPerformance.map((endpoint, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium text-sm">{endpoint.endpoint}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {endpoint.method} • Cache: {formatPercentage(endpoint.cacheHitRate)} • SLA: {endpoint.sla.target}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{formatNumber(endpoint.dailyRequests)}</div>
                      <div className="text-slate-400 text-xs">{formatBytes(endpoint.dataTransfer)}</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className={`font-medium ${endpoint.avgResponseTime < 200 ? 'text-green-400' : endpoint.avgResponseTime < 500 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {endpoint.avgResponseTime}ms
                      </div>
                      <div className="text-slate-400 text-xs">P95: {endpoint.p95ResponseTime}ms</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${endpoint.successRate >= 99.5 ? 'text-green-400' : endpoint.successRate >= 98 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {formatPercentage(endpoint.successRate)}
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(endpoint.status)}`}>
                        {endpoint.status}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="text-slate-300 text-xs">
                        {endpoint.topConsumers.slice(0, 2).map(consumer => (
                          <div key={consumer}>{consumer}</div>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* API Versions & API Consumers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Settings className="w-5 h-5 text-blue-400 mr-2" />
              API Version Analytics
            </h3>
            <div className="space-y-4">
              {apiData.apiVersions.map((version, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">API {version.version}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(version.status)}`}>
                        {version.status}
                      </span>
                      <span className="text-slate-400 text-xs">{formatPercentage(version.adoptionRate)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-emerald-400">Endpoints: {version.endpoints}</div>
                    <div className="text-cyan-400">Requests: {formatNumber(version.dailyRequests)}</div>
                    <div className="text-yellow-400">Score: {version.performanceScore}</div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Support: {version.supportLevel}</div>
                    <div className="text-purple-400">Docs: {version.documentationStatus}</div>
                  </div>
                  
                  {version.status === 'DEPRECATED' && (
                    <div className="text-red-400 text-xs">
                      <strong>Deprecation:</strong> {version.deprecationDate} • Migration: {formatPercentage(version.migrationProgress)}
                    </div>
                  )}
                  
                  {version.status === 'BETA' && (
                    <div className="text-purple-400 text-xs">
                      <strong>Beta:</strong> {version.betaParticipants} participants • {version.featureAdditions} new features
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              API Consumer Analytics
            </h3>
            <div className="space-y-4">
              {apiData.apiConsumers.map((consumer, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{consumer.consumer}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${consumer.successRate >= 99 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {formatPercentage(consumer.successRate)}
                      </span>
                      <span className="text-slate-400 text-xs">{consumer.avgResponseTime}ms</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-emerald-400">Keys: {consumer.apiKeys}</div>
                    <div className="text-cyan-400">Requests: {formatNumber(consumer.dailyRequests)}</div>
                    <div className="text-blue-400">Plan: {consumer.plan}</div>
                  </div>
                  
                  {consumer.quota !== 'Unlimited' && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      <div className="text-yellow-400">Quota: {formatNumber(consumer.quota)}</div>
                      <div className={`${consumer.quotaUsed > 90 ? 'text-red-400' : consumer.quotaUsed > 75 ? 'text-yellow-400' : 'text-green-400'}`}>
                        Used: {formatPercentage(consumer.quotaUsed)}
                      </div>
                    </div>
                  )}
                  
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Platform:</strong> {consumer.platform} • <strong>Usage:</strong> {consumer.usagePattern}
                  </div>
                  
                  <div className="text-slate-400 text-xs">
                    <strong>Top APIs:</strong> {consumer.topEndpoints.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Analytics & Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              API Security Analytics
            </h3>
            
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white font-semibold mb-3 text-sm">Authentication Methods</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {Object.entries(apiData.securityAnalytics.authenticationMethods).map(([method, percentage]) => (
                    <div key={method} className="flex justify-between">
                      <span className="text-slate-300 capitalize">{method.replace(/([A-Z])/g, ' $1')}:</span>
                      <span className="text-blue-400">{formatPercentage(percentage)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white font-semibold mb-3 text-sm">Threat Detection</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-red-400">Suspicious: {formatNumber(apiData.securityAnalytics.threatDetection.suspiciousRequests)}</div>
                  <div className="text-orange-400">Blocked: {formatNumber(apiData.securityAnalytics.threatDetection.blockedRequests)}</div>
                  <div className="text-yellow-400">DDoS: {apiData.securityAnalytics.threatDetection.ddosAttempts}</div>
                  <div className="text-purple-400">Brute Force: {apiData.securityAnalytics.threatDetection.bruteForceAttempts}</div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white font-semibold mb-3 text-sm">Rate Limiting</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="text-blue-400">Total Limits: {formatNumber(apiData.securityAnalytics.rateLimiting.totalLimits)}</div>
                  <div className="text-yellow-400">Violations: {formatNumber(apiData.securityAnalytics.rateLimiting.violationsDetected)}</div>
                  <div className="text-orange-400">Temp Blocks: {apiData.securityAnalytics.rateLimiting.temporaryBlocks}</div>
                  <div className="text-red-400">Perm Blocks: {apiData.securityAnalytics.rateLimiting.permanentBlocks}</div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                <h4 className="text-white font-semibold mb-3 text-sm">Data Protection</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Encrypted Requests:</span>
                    <span className="text-green-400">{formatPercentage(apiData.securityAnalytics.dataProtection.encryptedRequests)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">GDPR Compliance:</span>
                    <span className="text-green-400">{formatPercentage(apiData.securityAnalytics.dataProtection.gdprCompliance)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Audit Logs:</span>
                    <span className="text-blue-400">{formatNumber(apiData.securityAnalytics.dataProtection.auditLogs)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Performance Timeline
            </h3>
            <div className="space-y-4">
              {apiData.performanceMetrics.map((metrics, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metrics.period}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${metrics.successRate >= 99.5 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {formatPercentage(metrics.successRate)}
                      </span>
                      <span className="text-slate-400 text-xs">{formatNumber(metrics.totalRequests)} req</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Avg: {metrics.avgResponseTime}ms</div>
                    <div className="text-blue-400">Cache: {formatPercentage(metrics.cacheHitRate)}</div>
                    <div className="text-purple-400">Peak: {metrics.peakThroughput}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-emerald-400">Data: {formatBytes(metrics.dataTransfer)}</div>
                    <div className="text-orange-400">Errors: {formatPercentage(metrics.errorRate)}</div>
                    <div className="text-red-400">Rate Limits: {formatNumber(metrics.rateLimitHits)}</div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-green-400">Req: {metrics.trends.requests}</div>
                    <div className="text-yellow-400">RT: {metrics.trends.responseTime}</div>
                    <div className="text-red-400">Err: {metrics.trends.errors}</div>
                    <div className="text-blue-400">Cache: {metrics.trends.cacheHits}</div>
                  </div>
                  
                  <div className="text-slate-400 text-xs mt-2">
                    <strong>Top Errors:</strong> {metrics.topErrors.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* API Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            API System Alerts
          </h3>
          <div className="space-y-4">
            {apiData.apiAlerts.map((alert, index) => (
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
                  {alert.endpoint && <div className="text-slate-300">Endpoint: {alert.endpoint}</div>}
                  {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                  {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                  {alert.affectedConsumers && <div className="text-slate-300">Consumers: {alert.affectedConsumers.slice(0, 2).join(', ')}</div>}
                  {alert.requestVolume && <div className="text-slate-300">Volume: {alert.requestVolume}</div>}
                  {alert.locationAnomaly && <div className="text-red-400">Geo Anomaly: {alert.locationAnomaly}</div>}
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
    </div>
  );
}