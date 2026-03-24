// Content Delivery Intelligence Center - CDN & Content Performance Analytics
import { useState, useEffect } from 'react';
import { Globe, TrendingUp, Zap, Shield, Server, BarChart3, CheckCircle, AlertTriangle, Target, Settings, Activity, Eye } from 'lucide-react';

export default function ContentDeliveryCenter() {
  const [cdnData, setCdnData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    cdnOverview: {
      totalRequests: 45678901,
      cachedRequests: 39876543,
      originRequests: 5802358,
      bandwidth: 2345678901,
      cacheHitRate: 87.3,
      avgResponseTime: 142,
      uptime: 99.97,
      globalEdges: 245,
      activeEdges: 238,
      contentSize: 1234567,
      compressionRatio: 68.4,
      securityThreats: 12345,
      blockedRequests: 56789,
      peakBandwidth: 3456789,
      dataTransferred: 9876543
    },
    globalRegions: [
      {
        region: 'North America',
        edges: 89,
        requests: 15678901,
        bandwidth: 789012345,
        hitRate: 91.2,
        responseTime: 98,
        uptime: 99.98,
        traffic: 34.3,
        users: 5678901,
        topCountries: ['United States', 'Canada', 'Mexico'],
        peakHour: '20:00 EST',
        threatLevel: 'LOW',
        securityEvents: 2345,
        contentTypes: {
          static: 67.8,
          dynamic: 23.4,
          streaming: 8.8
        },
        protocols: {
          http2: 78.9,
          http3: 12.3,
          http1: 8.8
        },
        devices: {
          desktop: 45.6,
          mobile: 43.2,
          tablet: 11.2
        }
      },
      {
        region: 'Europe',
        edges: 67,
        requests: 12345678,
        bandwidth: 567890123,
        hitRate: 89.7,
        responseTime: 134,
        uptime: 99.95,
        traffic: 27.0,
        users: 4567890,
        topCountries: ['United Kingdom', 'Germany', 'France'],
        peakHour: '19:00 CET',
        threatLevel: 'MEDIUM',
        securityEvents: 3456,
        contentTypes: {
          static: 72.1,
          dynamic: 19.8,
          streaming: 8.1
        },
        protocols: {
          http2: 82.4,
          http3: 9.7,
          http1: 7.9
        },
        devices: {
          desktop: 52.3,
          mobile: 38.9,
          tablet: 8.8
        }
      },
      {
        region: 'Asia Pacific',
        edges: 78,
        requests: 13456789,
        bandwidth: 678901234,
        hitRate: 84.6,
        responseTime: 178,
        uptime: 99.93,
        traffic: 29.4,
        users: 6789012,
        topCountries: ['Japan', 'Singapore', 'Australia'],
        peakHour: '21:00 JST',
        threatLevel: 'HIGH',
        securityEvents: 5678,
        contentTypes: {
          static: 59.3,
          dynamic: 28.7,
          streaming: 12.0
        },
        protocols: {
          http2: 71.5,
          http3: 15.8,
          http1: 12.7
        },
        devices: {
          desktop: 34.7,
          mobile: 56.8,
          tablet: 8.5
        }
      },
      {
        region: 'South America',
        edges: 34,
        requests: 2345678,
        bandwidth: 234567890,
        hitRate: 82.1,
        responseTime: 198,
        uptime: 99.89,
        traffic: 5.1,
        users: 1234567,
        topCountries: ['Brazil', 'Argentina', 'Chile'],
        peakHour: '22:00 BRT',
        threatLevel: 'MEDIUM',
        securityEvents: 1234,
        contentTypes: {
          static: 65.4,
          dynamic: 24.6,
          streaming: 10.0
        },
        protocols: {
          http2: 68.9,
          http3: 8.4,
          http1: 22.7
        },
        devices: {
          desktop: 41.2,
          mobile: 49.6,
          tablet: 9.2
        }
      },
      {
        region: 'Africa & Middle East',
        edges: 23,
        requests: 1890123,
        bandwidth: 189012345,
        hitRate: 79.8,
        responseTime: 234,
        uptime: 99.87,
        traffic: 4.1,
        users: 890123,
        topCountries: ['South Africa', 'UAE', 'Egypt'],
        peakHour: '20:00 CAT',
        threatLevel: 'HIGH',
        securityEvents: 2890,
        contentTypes: {
          static: 71.2,
          dynamic: 21.3,
          streaming: 7.5
        },
        protocols: {
          http2: 62.7,
          http3: 6.8,
          http1: 30.5
        },
        devices: {
          desktop: 38.9,
          mobile: 52.4,
          tablet: 8.7
        }
      }
    ],
    contentPerformance: [
      {
        contentType: 'Static Assets',
        requests: 23456789,
        bandwidth: 1234567890,
        hitRate: 94.7,
        responseTime: 87,
        compression: 72.3,
        cacheControl: 'max-age=31536000',
        popularFormats: ['CSS', 'JS', 'Images', 'Fonts'],
        avgFileSize: '245 KB',
        optimization: {
          minification: 89.7,
          compression: 94.3,
          webp: 67.8,
          lazy_loading: 78.9
        },
        performance: {
          lcp: '1.2s',
          fid: '45ms',
          cls: '0.08'
        },
        trends: {
          requests: '+8.9%',
          bandwidth: '+12.4%',
          performance: '+15.7%'
        }
      },
      {
        contentType: 'Dynamic Content',
        requests: 12345678,
        bandwidth: 567890123,
        hitRate: 76.4,
        responseTime: 234,
        compression: 45.7,
        cacheControl: 'max-age=300',
        popularFormats: ['HTML', 'JSON', 'API', 'Database'],
        avgFileSize: '89 KB',
        optimization: {
          minification: 67.8,
          compression: 78.9,
          webp: 34.5,
          lazy_loading: 45.6
        },
        performance: {
          lcp: '2.8s',
          fid: '89ms',
          cls: '0.12'
        },
        trends: {
          requests: '+15.3%',
          bandwidth: '+18.7%',
          performance: '+9.2%'
        }
      },
      {
        contentType: 'Video Streaming',
        requests: 4567890,
        bandwidth: 890123456,
        hitRate: 67.8,
        responseTime: 156,
        compression: 89.4,
        cacheControl: 'max-age=86400',
        popularFormats: ['MP4', 'HLS', 'DASH', 'WebM'],
        avgFileSize: '15.6 MB',
        optimization: {
          minification: 0,
          compression: 94.7,
          webp: 0,
          lazy_loading: 89.3
        },
        performance: {
          lcp: '1.8s',
          fid: '23ms',
          cls: '0.05'
        },
        trends: {
          requests: '+34.7%',
          bandwidth: '+45.2%',
          performance: '+23.8%'
        }
      },
      {
        contentType: 'API Responses',
        requests: 8901234,
        bandwidth: 234567890,
        hitRate: 45.3,
        responseTime: 289,
        compression: 34.2,
        cacheControl: 'max-age=60',
        popularFormats: ['JSON', 'XML', 'GraphQL', 'REST'],
        avgFileSize: '12 KB',
        optimization: {
          minification: 78.9,
          compression: 67.4,
          webp: 0,
          lazy_loading: 0
        },
        performance: {
          lcp: 'N/A',
          fid: '67ms',
          cls: 'N/A'
        },
        trends: {
          requests: '+23.6%',
          bandwidth: '+19.8%',
          performance: '+12.4%'
        }
      }
    ],
    securityMetrics: [
      {
        threatType: 'DDoS Attacks',
        detected: 2345,
        blocked: 2298,
        successRate: 98.0,
        peakIntensity: '45.6 Gbps',
        avgDuration: '12.4 min',
        topOrigins: ['Botnet-A', 'Malicious-IPs', 'Amplification'],
        mitigation: 'AUTOMATIC',
        responseTime: '1.2 sec',
        impact: 'MINIMAL',
        countermeasures: ['Rate Limiting', 'Geo Blocking', 'Challenge Pages']
      },
      {
        threatType: 'Web Application Attacks',
        detected: 5678,
        blocked: 5543,
        successRate: 97.6,
        peakIntensity: 'N/A',
        avgDuration: '2.8 min',
        topOrigins: ['SQL Injection', 'XSS', 'CSRF'],
        mitigation: 'WAF_RULES',
        responseTime: '0.3 sec',
        impact: 'BLOCKED',
        countermeasures: ['WAF Rules', 'Input Validation', 'Bot Detection']
      },
      {
        threatType: 'Bot Traffic',
        detected: 8901,
        blocked: 7823,
        successRate: 87.9,
        peakIntensity: 'N/A',
        avgDuration: '45.2 min',
        topOrigins: ['Scrapers', 'Bad Bots', 'Click Fraud'],
        mitigation: 'BEHAVIORAL',
        responseTime: '0.8 sec',
        impact: 'REDUCED',
        countermeasures: ['Behavioral Analysis', 'CAPTCHA', 'JS Challenge']
      },
      {
        threatType: 'Data Exfiltration',
        detected: 234,
        blocked: 227,
        successRate: 97.0,
        peakIntensity: 'N/A',
        avgDuration: '8.7 min',
        topOrigins: ['Insider Threat', 'Compromised Accounts', 'APT'],
        mitigation: 'DLP_RULES',
        responseTime: '2.1 sec',
        impact: 'PREVENTED',
        countermeasures: ['DLP Rules', 'Access Control', 'Monitoring']
      }
    ],
    performanceMetrics: [
      {
        metric: 'First Contentful Paint',
        value: '0.8s',
        target: '<1.8s',
        status: 'GOOD',
        percentile_75: '1.2s',
        percentile_95: '2.1s',
        trend: '-8.4%',
        regions: {
          'North America': '0.6s',
          'Europe': '0.9s',
          'Asia Pacific': '1.1s',
          'South America': '1.4s',
          'Africa & Middle East': '1.7s'
        }
      },
      {
        metric: 'Largest Contentful Paint',
        value: '1.4s',
        target: '<2.5s',
        status: 'GOOD',
        percentile_75: '1.9s',
        percentile_95: '3.2s',
        trend: '-12.7%',
        regions: {
          'North America': '1.1s',
          'Europe': '1.3s',
          'Asia Pacific': '1.6s',
          'South America': '2.1s',
          'Africa & Middle East': '2.4s'
        }
      },
      {
        metric: 'First Input Delay',
        value: '23ms',
        target: '<100ms',
        status: 'EXCELLENT',
        percentile_75: '45ms',
        percentile_95: '89ms',
        trend: '-15.6%',
        regions: {
          'North America': '18ms',
          'Europe': '21ms',
          'Asia Pacific': '28ms',
          'South America': '34ms',
          'Africa & Middle East': '42ms'
        }
      },
      {
        metric: 'Time to Interactive',
        value: '2.1s',
        target: '<3.8s',
        status: 'GOOD',
        percentile_75: '2.8s',
        percentile_95: '4.2s',
        trend: '-9.3%',
        regions: {
          'North America': '1.8s',
          'Europe': '2.0s',
          'Asia Pacific': '2.4s',
          'South America': '2.9s',
          'Africa & Middle East': '3.1s'
        }
      }
    ],
    cdnAlerts: [
      {
        type: 'CRITICAL',
        category: 'Performance',
        message: 'Response time spike detected in Asia Pacific region - 300% above baseline',
        region: 'Asia Pacific',
        severity: 'HIGH',
        impact: 'User experience degradation, potential revenue impact',
        timestamp: '10:00',
        responseTime: '534ms',
        baseline: '178ms',
        affectedEdges: 12,
        detectedBy: 'Performance Monitor',
        recommendation: 'Investigate edge server performance, consider traffic rerouting',
        urgency: 'IMMEDIATE',
        escalation: 'CDN_OPERATIONS',
        estimatedUsers: 234567
      },
      {
        type: 'HIGH',
        category: 'Security',
        message: 'DDoS attack targeting European edges - 23.4 Gbps peak intensity detected',
        region: 'Europe',
        severity: 'MEDIUM',
        impact: 'Partial service degradation, automatic mitigation active',
        timestamp: '09:58',
        attackIntensity: '23.4 Gbps',
        mitigationStatus: 'ACTIVE',
        blockedRequests: 2345678,
        detectedBy: 'Security Engine',
        recommendation: 'Monitor mitigation effectiveness, prepare manual intervention if needed',
        urgency: 'HIGH',
        escalation: 'SECURITY_TEAM',
        attackVector: 'UDP Amplification'
      },
      {
        type: 'WARNING',
        category: 'Capacity',
        message: 'Bandwidth utilization approaching 80% threshold in North America',
        region: 'North America',
        severity: 'MEDIUM',
        impact: 'Potential service slowdown during peak hours',
        timestamp: '09:57',
        currentUtilization: '78.4%',
        threshold: '80%',
        projectedPeak: '92.3%',
        detectedBy: 'Capacity Monitor',
        recommendation: 'Scale additional edge capacity, optimize cache strategies',
        urgency: 'MEDIUM',
        escalation: 'CAPACITY_PLANNING',
        peakTime: '20:00-22:00 EST'
      },
      {
        type: 'INFO',
        category: 'Optimization',
        message: 'Static assets showing exceptional cache hit rate - 94.7% across all regions',
        region: 'Global',
        severity: 'POSITIVE',
        impact: 'Reduced origin load, improved performance, cost optimization',
        timestamp: '09:56',
        hitRate: '94.7%',
        improvement: '+3.2%',
        savingsBandwidth: '1.23 TB',
        detectedBy: 'Cache Analytics',
        recommendation: 'Apply similar caching strategies to other content types',
        priority: 'LOW',
        opportunity: 'COST_OPTIMIZATION'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCdnData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        cdnOverview: {
          ...prev.cdnOverview,
          cacheHitRate: Math.max(85.0, Math.min(92.0, prev.cdnOverview.cacheHitRate + (Math.random() - 0.5) * 1.5)),
          avgResponseTime: Math.max(120, Math.min(180, prev.cdnOverview.avgResponseTime + (Math.random() - 0.5) * 20)),
          uptime: Math.max(99.9, Math.min(100.0, prev.cdnOverview.uptime + (Math.random() - 0.5) * 0.05))
        }
      }));
    }, 73000);

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

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'EXCELLENT': return 'text-green-500 bg-green-500/20';
      case 'GOOD': return 'text-green-400 bg-green-400/20';
      case 'NEEDS_IMPROVEMENT': return 'text-yellow-400 bg-yellow-400/20';
      case 'POOR': return 'text-red-400 bg-red-400/20';
      default: return 'text-blue-400 bg-blue-400/20';
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

  const getScoreColor = (score, good = 70, excellent = 85) => {
    if (score >= excellent) return 'text-green-400';
    if (score >= good) return 'text-blue-400';
    if (score >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
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

  const formatBytes = (bytes) => {
    if (bytes >= 1000000000000) {
      return `${(bytes / 1000000000000).toFixed(1)} TB`;
    }
    if (bytes >= 1000000000) {
      return `${(bytes / 1000000000).toFixed(1)} GB`;
    }
    if (bytes >= 1000000) {
      return `${(bytes / 1000000).toFixed(1)} MB`;
    }
    if (bytes >= 1000) {
      return `${(bytes / 1000).toFixed(0)} KB`;
    }
    return `${bytes} B`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Content Delivery Intelligence Center</h1>
              <p className="text-cyan-300">CDN & content performance analytics</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{cdnData.currentTime}</div>
            <div className="text-cyan-300">CDN Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* CDN Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-cyan-400 mr-2" />
                Requests
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(cdnData.cdnOverview.totalRequests)}</div>
            <div className="text-cyan-300 text-sm">{formatNumber(cdnData.cdnOverview.cachedRequests)} Cached</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                Hit Rate
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(cdnData.cdnOverview.cacheHitRate)}`}>
              {formatPercentage(cdnData.cdnOverview.cacheHitRate)}
            </div>
            <div className="text-yellow-300 text-sm">Cache</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Response
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{cdnData.cdnOverview.avgResponseTime}ms</div>
            <div className="text-green-300 text-sm">Avg</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Server className="w-5 h-5 text-blue-400 mr-2" />
                Edges
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{cdnData.cdnOverview.activeEdges}</div>
            <div className="text-blue-300 text-sm">{cdnData.cdnOverview.globalEdges} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <CheckCircle className="w-5 h-5 text-purple-400 mr-2" />
                Uptime
              </h3>
            </div>
            <div className={`text-3xl font-bold ${getScoreColor(cdnData.cdnOverview.uptime, 99.0, 99.9)}`}>
              {formatPercentage(cdnData.cdnOverview.uptime)}
            </div>
            <div className="text-purple-300 text-sm">Global</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Shield className="w-5 h-5 text-red-400 mr-2" />
                Security
              </h3>
            </div>
            <div className="text-3xl font-bold text-red-400">{formatNumber(cdnData.cdnOverview.blockedRequests)}</div>
            <div className="text-red-300 text-sm">Blocked</div>
          </div>
        </div>

        {/* Global Regions */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Globe className="w-5 h-5 text-cyan-400 mr-2" />
            Global Region Performance
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Region</th>
                  <th className="text-center p-3 text-slate-300">Edges</th>
                  <th className="text-center p-3 text-slate-300">Traffic</th>
                  <th className="text-center p-3 text-slate-300">Hit Rate</th>
                  <th className="text-center p-3 text-slate-300">Response</th>
                  <th className="text-center p-3 text-slate-300">Threats</th>
                </tr>
              </thead>
              <tbody>
                {cdnData.globalRegions.map((region, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{region.region}</div>
                      <div className="text-slate-400 text-xs mt-1">
                        {formatNumber(region.users)} users • Peak: {region.peakHour}
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-blue-400 font-medium">{region.edges}</div>
                      <div className="text-slate-400 text-xs">{formatPercentage(region.uptime)} uptime</div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="text-cyan-400 font-medium">{formatPercentage(region.traffic)}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(region.requests)} req</div>
                    </td>
                    <td className={`p-3 text-center font-medium ${getScoreColor(region.hitRate)}`}>
                      {formatPercentage(region.hitRate)}
                    </td>
                    <td className="p-3 text-center">
                      <div className={`font-medium ${region.responseTime < 150 ? 'text-green-400' : region.responseTime < 250 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {region.responseTime}ms
                      </div>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex flex-col items-center">
                        <span className={`px-2 py-1 rounded text-xs ${getThreatLevelColor(region.threatLevel)}`}>
                          {region.threatLevel}
                        </span>
                        <span className="text-slate-400 text-xs mt-1">{formatNumber(region.securityEvents)}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Content Performance & Security Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Content Type Performance
            </h3>
            <div className="space-y-4">
              {cdnData.contentPerformance.map((content, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{content.contentType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(content.hitRate)}`}>
                        {formatPercentage(content.hitRate)} Hit
                      </span>
                      <span className="text-slate-400 text-xs">{content.responseTime}ms</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Req: {formatNumber(content.requests)}</div>
                    <div className="text-purple-400">Size: {content.avgFileSize}</div>
                    <div className="text-green-400">Comp: {formatPercentage(content.compression)}</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">LCP: {content.performance.lcp}</div>
                    <div className="text-blue-400">FID: {content.performance.fid}</div>
                    <div className="text-orange-400">CLS: {content.performance.cls}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Cache:</strong> {content.cacheControl} • <strong>Formats:</strong> {content.popularFormats.slice(0, 2).join(', ')}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-green-400">Req: {content.trends.requests}</div>
                    <div className="text-blue-400">BW: {content.trends.bandwidth}</div>
                    <div className="text-purple-400">Perf: {content.trends.performance}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              Security Analytics Dashboard
            </h3>
            <div className="space-y-4">
              {cdnData.securityMetrics.map((security, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{security.threatType}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getScoreColor(security.successRate)}`}>
                        {formatPercentage(security.successRate)} Block
                      </span>
                      <span className="text-slate-400 text-xs">{security.responseTime}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-red-400">Detected: {formatNumber(security.detected)}</div>
                    <div className="text-green-400">Blocked: {formatNumber(security.blocked)}</div>
                    <div className="text-purple-400">Duration: {security.avgDuration}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Mitigation:</strong> {security.mitigation} • <strong>Impact:</strong> {security.impact}
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Top Sources:</strong> {security.topOrigins.slice(0, 2).join(', ')}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Countermeasures:</strong> {security.countermeasures.slice(0, 2).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Metrics & CDN Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-blue-400 mr-2" />
              Core Web Vitals Performance
            </h3>
            <div className="space-y-4">
              {cdnData.performanceMetrics.map((metric, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                      <span className="text-slate-400 text-xs">{metric.trend}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-cyan-400">Current: {metric.value}</div>
                    <div className="text-green-400">Target: {metric.target}</div>
                    <div className="text-purple-400">P95: {metric.percentile_95}</div>
                  </div>
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>P75:</strong> {metric.percentile_75} • <strong>Best Region:</strong> {Object.keys(metric.regions)[0]}
                  </div>
                  <div className="text-slate-400 text-xs">
                    <strong>Regional Range:</strong> {Object.values(metric.regions)[0]} - {Object.values(metric.regions)[4]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              CDN Operations Alerts
            </h3>
            <div className="space-y-4">
              {cdnData.cdnAlerts.map((alert, index) => (
                <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium">{alert.type}</span>
                      <span className="text-slate-300 text-xs">{alert.category}</span>
                      <span className={`text-xs ${getUrgencyColor(alert.urgency)}`}>
                        {alert.urgency}
                      </span>
                    </div>
                    <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                  </div>
                  <div className="text-white font-medium text-sm mb-2">{alert.message}</div>
                  <div className="grid grid-cols-1 gap-2 text-xs mb-2">
                    <div className="text-slate-300">Region: {alert.region}</div>
                    {alert.responseTime && <div className="text-slate-300">Response Time: {alert.responseTime}</div>}
                    {alert.attackIntensity && <div className="text-slate-300">Attack Intensity: {alert.attackIntensity}</div>}
                    {alert.currentUtilization && <div className="text-slate-300">Utilization: {alert.currentUtilization}</div>}
                    {alert.hitRate && <div className="text-slate-300">Hit Rate: {alert.hitRate}</div>}
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
    </div>
  );
}