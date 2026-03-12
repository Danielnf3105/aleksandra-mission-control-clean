// API Health Monitor - Real-time API endpoint monitoring and performance tracking
import { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock, Zap, TrendingUp, TrendingDown, Server, Wifi, WifiOff } from 'lucide-react';

export default function APIHealthMonitor() {
  const [apiData, setApiData] = useState({
    endpoints: [
      {
        name: 'Assembly AI Transcription',
        url: 'https://api.assemblyai.com',
        status: 'healthy',
        responseTime: 245,
        uptime: 99.97,
        lastCheck: '2s ago',
        dailyCalls: 1847,
        monthlyQuota: 50000,
        errorRate: 0.1,
        region: 'US-East',
        version: 'v2'
      },
      {
        name: 'OpenAI GPT API',
        url: 'https://api.openai.com',
        status: 'healthy',
        responseTime: 156,
        uptime: 99.92,
        lastCheck: '1s ago',
        dailyCalls: 3264,
        monthlyQuota: 100000,
        errorRate: 0.3,
        region: 'US-West',
        version: 'v1'
      },
      {
        name: 'LinkedIn API',
        url: 'https://api.linkedin.com',
        status: 'warning',
        responseTime: 890,
        uptime: 98.45,
        lastCheck: '5s ago',
        dailyCalls: 456,
        monthlyQuota: 10000,
        errorRate: 2.1,
        region: 'EU-West',
        version: 'v2'
      },
      {
        name: 'Instagram Basic Display',
        url: 'https://graph.instagram.com',
        status: 'healthy',
        responseTime: 234,
        uptime: 99.89,
        lastCheck: '3s ago',
        dailyCalls: 789,
        monthlyQuota: 25000,
        errorRate: 0.5,
        region: 'Global',
        version: 'v18.0'
      },
      {
        name: 'Vercel Deployment API',
        url: 'https://api.vercel.com',
        status: 'healthy',
        responseTime: 123,
        uptime: 99.94,
        lastCheck: '1s ago',
        dailyCalls: 127,
        monthlyQuota: 5000,
        errorRate: 0.2,
        region: 'Global',
        version: 'v9'
      },
      {
        name: 'ElevenLabs TTS',
        url: 'https://api.elevenlabs.io',
        status: 'degraded',
        responseTime: 1456,
        uptime: 97.23,
        lastCheck: '8s ago',
        dailyCalls: 234,
        monthlyQuota: 15000,
        errorRate: 4.7,
        region: 'US-East',
        version: 'v1'
      },
      {
        name: 'Brave Search API',
        url: 'https://api.search.brave.com',
        status: 'healthy',
        responseTime: 312,
        uptime: 99.76,
        lastCheck: '2s ago',
        dailyCalls: 892,
        monthlyQuota: 30000,
        errorRate: 0.8,
        region: 'Global',
        version: 'v1'
      },
      {
        name: 'Telegram Bot API',
        url: 'https://api.telegram.org',
        status: 'healthy',
        responseTime: 189,
        uptime: 99.98,
        lastCheck: '1s ago',
        dailyCalls: 1567,
        monthlyQuota: 'Unlimited',
        errorRate: 0.1,
        region: 'Global',
        version: 'Bot API 6.0'
      }
    ],
    overallMetrics: {
      totalAPIs: 8,
      healthyAPIs: 5,
      warningAPIs: 1,
      degradedAPIs: 1,
      criticalAPIs: 0,
      averageResponseTime: 324,
      totalDailyCalls: 9176,
      overallUptime: 99.27,
      totalErrors: 47
    },
    recentIncidents: [
      {
        id: 'inc-001',
        api: 'ElevenLabs TTS',
        type: 'Performance Degradation',
        severity: 'medium',
        startTime: '12:45 PM',
        duration: '18m',
        status: 'investigating',
        impact: 'Increased response times for voice generation'
      },
      {
        id: 'inc-002',
        api: 'LinkedIn API',
        type: 'Rate Limiting',
        severity: 'low',
        startTime: '11:30 AM',
        duration: '5m',
        status: 'resolved',
        impact: 'Temporary connection request delays'
      },
      {
        id: 'inc-003',
        api: 'Assembly AI',
        type: 'Brief Timeout',
        severity: 'low',
        startTime: '10:15 AM',
        duration: '2m',
        status: 'resolved',
        impact: 'Minor transcription processing delay'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setApiData(prev => ({
        ...prev,
        endpoints: prev.endpoints.map(endpoint => ({
          ...endpoint,
          responseTime: Math.max(50, endpoint.responseTime + (Math.random() - 0.5) * 100),
          dailyCalls: endpoint.dailyCalls + Math.floor(Math.random() * 5),
          uptime: Math.min(100, endpoint.uptime + (Math.random() - 0.3) * 0.1),
          errorRate: Math.max(0, endpoint.errorRate + (Math.random() - 0.7) * 0.2)
        })),
        overallMetrics: {
          ...prev.overallMetrics,
          averageResponseTime: prev.overallMetrics.averageResponseTime + (Math.random() - 0.5) * 50,
          totalDailyCalls: prev.overallMetrics.totalDailyCalls + Math.floor(Math.random() * 20)
        }
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy': return 'text-green-400 bg-green-400/10 border-green-400/30';
      case 'warning': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30';
      case 'degraded': return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'critical': return 'text-red-400 bg-red-400/10 border-red-400/30';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />;
      case 'degraded': return <TrendingDown className="w-4 h-4 text-orange-400" />;
      case 'critical': return <WifiOff className="w-4 h-4 text-red-400" />;
      default: return <Wifi className="w-4 h-4 text-gray-400" />;
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-orange-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getResponseTimeColor = (responseTime) => {
    if (responseTime < 200) return 'text-green-400';
    if (responseTime < 500) return 'text-yellow-400';
    if (responseTime < 1000) return 'text-orange-400';
    return 'text-red-400';
  };

  const getQuotaUsage = (dailyCalls, monthlyQuota) => {
    if (monthlyQuota === 'Unlimited') return 0;
    return (dailyCalls * 30 / monthlyQuota) * 100; // Estimate monthly usage
  };

  const getQuotaColor = (usage) => {
    if (usage < 50) return 'text-green-400';
    if (usage < 75) return 'text-yellow-400';
    if (usage < 90) return 'text-orange-400';
    return 'text-red-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Server className="w-8 h-8 text-blue-400" />
          <div>
            <h2 className="text-2xl font-bold text-white">API Health Monitor</h2>
            <p className="text-gray-400">Real-time API endpoint monitoring and performance tracking</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{apiData.overallMetrics.healthyAPIs}/{apiData.overallMetrics.totalAPIs}</div>
            <div className="text-xs text-gray-400">Healthy APIs</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-400">{apiData.overallMetrics.overallUptime.toFixed(2)}%</div>
            <div className="text-xs text-gray-400">Overall Uptime</div>
          </div>
        </div>
      </div>

      {/* Overall Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-green-400">{apiData.overallMetrics.healthyAPIs}</div>
          <div className="text-xs text-gray-400">Healthy</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{apiData.overallMetrics.warningAPIs}</div>
          <div className="text-xs text-gray-400">Warning</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-orange-400">{apiData.overallMetrics.degradedAPIs}</div>
          <div className="text-xs text-gray-400">Degraded</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-red-400">{apiData.overallMetrics.criticalAPIs}</div>
          <div className="text-xs text-gray-400">Critical</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-cyan-400">{apiData.overallMetrics.averageResponseTime.toFixed(0)}ms</div>
          <div className="text-xs text-gray-400">Avg Response</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-purple-400">{apiData.overallMetrics.totalDailyCalls.toLocaleString()}</div>
          <div className="text-xs text-gray-400">Daily Calls</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-blue-400">{apiData.overallMetrics.overallUptime.toFixed(2)}%</div>
          <div className="text-xs text-gray-400">Uptime</div>
        </div>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 text-center">
          <div className="text-lg font-bold text-yellow-400">{apiData.overallMetrics.totalErrors}</div>
          <div className="text-xs text-gray-400">Total Errors</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* API Endpoints Status */}
        <div className="lg:col-span-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white">API Endpoints</h3>
            <div className="ml-auto flex items-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="text-xs text-cyan-400">MONITORING</div>
            </div>
          </div>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {apiData.endpoints.map((endpoint, index) => (
              <div key={index} className="p-4 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {getStatusIcon(endpoint.status)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{endpoint.name}</div>
                      <div className="text-gray-400 text-xs">{endpoint.url}</div>
                    </div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded border ${getStatusColor(endpoint.status)}`}>
                    {endpoint.status.toUpperCase()}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className={`text-sm font-bold ${getResponseTimeColor(endpoint.responseTime)}`}>
                      {endpoint.responseTime.toFixed(0)}ms
                    </div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-green-400">{endpoint.uptime.toFixed(2)}%</div>
                    <div className="text-xs text-gray-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-purple-400">{endpoint.dailyCalls.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">Daily Calls</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-red-400">{endpoint.errorRate.toFixed(1)}%</div>
                    <div className="text-xs text-gray-400">Error Rate</div>
                  </div>
                </div>

                {/* Quota Usage Bar */}
                {endpoint.monthlyQuota !== 'Unlimited' && (
                  <div className="mt-3 pt-3 border-t border-gray-600/30">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-gray-400">Monthly Quota Usage</span>
                      <span className={`font-bold ${getQuotaColor(getQuotaUsage(endpoint.dailyCalls, endpoint.monthlyQuota))}`}>
                        {getQuotaUsage(endpoint.dailyCalls, endpoint.monthlyQuota).toFixed(1)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-green-400 to-yellow-400"
                        style={{ width: `${Math.min(100, getQuotaUsage(endpoint.dailyCalls, endpoint.monthlyQuota))}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between text-xs mt-2">
                  <div className="text-gray-500">{endpoint.region} • {endpoint.version}</div>
                  <div className="text-gray-400">Last check: {endpoint.lastCheck}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white">Recent Incidents</h3>
          </div>
          <div className="space-y-3">
            {apiData.recentIncidents.map((incident, index) => (
              <div key={index} className="p-3 bg-gray-700/30 rounded-lg border border-gray-600/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white text-sm font-medium">{incident.api}</div>
                  <div className={`text-xs px-2 py-1 rounded ${incident.status === 'resolved' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'}`}>
                    {incident.status.toUpperCase()}
                  </div>
                </div>
                <div className="text-gray-300 text-sm mb-2">{incident.type}</div>
                <div className="flex items-center space-x-3 text-xs">
                  <div className={`${getSeverityColor(incident.severity)}`}>
                    {incident.severity.toUpperCase()}
                  </div>
                  <div className="text-gray-400">•</div>
                  <div className="text-gray-400">{incident.startTime}</div>
                  <div className="text-gray-400">•</div>
                  <div className="text-gray-400">{incident.duration}</div>
                </div>
                <div className="text-gray-400 text-xs mt-1">{incident.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* API Performance Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 backdrop-blur-sm rounded-lg border border-green-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-400/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{apiData.overallMetrics.overallUptime.toFixed(2)}%</div>
              <div className="text-sm text-gray-300">Overall System Uptime</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-cyan-600/20 to-cyan-400/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-cyan-400/20 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-cyan-400">{apiData.overallMetrics.averageResponseTime.toFixed(0)}ms</div>
              <div className="text-sm text-gray-300">Average Response Time</div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600/20 to-purple-400/20 backdrop-blur-sm rounded-lg border border-purple-400/30 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-400/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">{apiData.overallMetrics.totalDailyCalls.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Total Daily API Calls</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}