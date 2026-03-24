// Edge Computing & CDN Performance Monitoring Center - 2026 Global Edge Network Intelligence
// Based on Cloudflare, Fastly, AWS CloudFront, Akamai real-time performance analytics
import { useState, useEffect } from 'react';
import { 
  Globe, Zap, Activity, BarChart3, TrendingUp, TrendingDown, Target,
  Monitor, Server, Network, Clock, Eye, Gauge, Settings, RefreshCw,
  AlertTriangle, CheckCircle, Info, Search, Play, Pause, StopCircle,
  ArrowRight, ArrowLeft, Minus, Plus, Brain, Shield, Key, Lock,
  Users, Code2, GitBranch, Package, Terminal, Database, HardDrive,
  Cpu, MemoryStick, Layers, FileCode, FileCheck, MapPin, Radar
} from 'lucide-react';

export default function EdgeComputingCDNCenter() {
  const [edgeData, setEdgeData] = useState({
    currentTime: new Date().toISOString(),
    globalPerformanceScore: 94.7,
    totalEdgeNodes: 2847,
    activeEdgeNodes: 2798,
    globalLatency: 23.4, // ms
    cacheHitRate: 94.2,
    dataTransferred: 847.2, // TB today
    edgeProviders: [
      {
        name: 'Cloudflare',
        nodes: 330,
        coverage: '95+ countries',
        avgLatency: 15.2,
        cacheHitRate: 96.8,
        uptime: 99.99,
        ttfb: 332.6,
        status: 'OPTIMAL',
        traffic: 387.4,
        cost: '$12,456',
        regions: ['US-East', 'US-West', 'EU-West', 'APAC', 'LATAM']
      },
      {
        name: 'Fastly',
        nodes: 89,
        coverage: '28 countries',
        avgLatency: 18.7,
        cacheHitRate: 93.4,
        uptime: 99.97,
        ttfb: 357.6,
        status: 'GOOD',
        traffic: 156.8,
        cost: '$8,923',
        regions: ['US-East', 'US-West', 'EU-West', 'APAC']
      },
      {
        name: 'AWS CloudFront',
        nodes: 450,
        coverage: '90+ countries',
        avgLatency: 22.1,
        cacheHitRate: 91.7,
        uptime: 99.95,
        ttfb: 404.4,
        status: 'GOOD',
        traffic: 234.7,
        cost: '$15,234',
        regions: ['Global']
      },
      {
        name: 'Akamai',
        nodes: 380,
        coverage: '135 countries',
        avgLatency: 26.8,
        cacheHitRate: 89.3,
        uptime: 99.92,
        ttfb: 441.5,
        status: 'SUBOPTIMAL',
        traffic: 68.3,
        cost: '$6,789',
        regions: ['US-East', 'EU-West', 'APAC']
      }
    ],
    regionalPerformance: [
      {
        region: 'US-East',
        latency: 12.4,
        cacheHitRate: 95.7,
        bandwidth: 234.5,
        activeNodes: 89,
        topProvider: 'Cloudflare',
        issues: 0,
        trend: 'improving'
      },
      {
        region: 'US-West', 
        latency: 14.8,
        cacheHitRate: 94.2,
        bandwidth: 187.3,
        activeNodes: 67,
        topProvider: 'Fastly',
        issues: 1,
        trend: 'stable'
      },
      {
        region: 'EU-West',
        latency: 18.3,
        cacheHitRate: 96.1,
        bandwidth: 345.2,
        activeNodes: 134,
        topProvider: 'Cloudflare',
        issues: 0,
        trend: 'improving'
      },
      {
        region: 'APAC',
        latency: 28.7,
        cacheHitRate: 92.8,
        bandwidth: 156.9,
        activeNodes: 78,
        topProvider: 'AWS CloudFront',
        issues: 2,
        trend: 'declining'
      },
      {
        region: 'LATAM',
        latency: 35.2,
        cacheHitRate: 89.4,
        bandwidth: 89.3,
        activeNodes: 45,
        topProvider: 'Cloudflare',
        issues: 3,
        trend: 'stable'
      }
    ],
    rumMetrics: [
      {
        metric: 'First Contentful Paint',
        value: 756,
        unit: 'ms',
        p95: 1240,
        target: 1000,
        trend: 'improving'
      },
      {
        metric: 'Largest Contentful Paint',
        value: 1456,
        unit: 'ms', 
        p95: 2890,
        target: 2000,
        trend: 'stable'
      },
      {
        metric: 'Time to First Byte',
        value: 234,
        unit: 'ms',
        p95: 567,
        target: 300,
        trend: 'improving'
      },
      {
        metric: 'Cumulative Layout Shift',
        value: 0.08,
        unit: 'score',
        p95: 0.15,
        target: 0.10,
        trend: 'improving'
      }
    ],
    edgeIncidents: [
      {
        id: 'edge-001',
        timestamp: '13:48',
        severity: 'MEDIUM',
        provider: 'Akamai',
        region: 'APAC-South',
        issue: 'Edge node connectivity degradation',
        impact: '15% increased latency in Sydney region',
        status: 'MITIGATING',
        eta: '2h 15m',
        affectedUsers: 12500
      },
      {
        id: 'edge-002',
        timestamp: '13:35',
        severity: 'LOW',
        provider: 'AWS CloudFront',
        region: 'EU-Central',
        issue: 'Cache invalidation delays',
        impact: 'Temporary cache miss increase',
        status: 'RESOLVED',
        eta: null,
        affectedUsers: 3400
      },
      {
        id: 'edge-003',
        timestamp: '13:22',
        severity: 'HIGH',
        provider: 'Fastly',
        region: 'US-Central',
        issue: 'Edge compute function failures',
        impact: 'API response degradation',
        status: 'MONITORING',
        eta: '45m',
        affectedUsers: 8900
      }
    ],
    streamingMetrics: [
      {
        protocol: 'WebRTC',
        activeStreams: 12547,
        avgLatency: 89.3,
        packetLoss: 0.12,
        jitter: 3.4,
        quality: 'HD',
        bitrate: 2.4,
        concurrentUsers: 45678
      },
      {
        protocol: 'HLS',
        activeStreams: 34567,
        avgLatency: 2340,
        bufferHealth: 97.8,
        rebufferRate: 0.8,
        quality: '4K',
        bitrate: 8.9,
        concurrentUsers: 123456
      },
      {
        protocol: 'DASH',
        activeStreams: 23456,
        avgLatency: 1890,
        bufferHealth: 96.2,
        rebufferRate: 1.2,
        quality: '1080p',
        bitrate: 5.2,
        concurrentUsers: 89012
      }
    ],
    aiOptimizations: [
      {
        timestamp: '13:50',
        type: 'TRAFFIC_ROUTING',
        action: 'Redirected 15% of APAC traffic from Akamai to Cloudflare',
        impact: '24% latency improvement',
        confidence: 96.7,
        savings: '$234/hour',
        status: 'ACTIVE'
      },
      {
        timestamp: '13:42',
        type: 'CACHE_OPTIMIZATION',
        action: 'Preloaded trending content to EU-West edge nodes',
        impact: '12% cache hit rate increase',
        confidence: 89.4,
        savings: '$156/hour',
        status: 'ACTIVE'
      },
      {
        timestamp: '13:38',
        type: 'EDGE_SCALING',
        action: 'Auto-scaled Fastly nodes in US-West for peak traffic',
        impact: '18% capacity increase',
        confidence: 94.2,
        savings: '$89/hour',
        status: 'COMPLETED'
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setEdgeData(prev => ({
        ...prev,
        currentTime: new Date().toISOString(),
        globalPerformanceScore: Math.max(85, Math.min(98, prev.globalPerformanceScore + (Math.random() - 0.5) * 1)),
        globalLatency: Math.max(15, Math.min(35, prev.globalLatency + (Math.random() - 0.5) * 2)),
        cacheHitRate: Math.max(85, Math.min(98, prev.cacheHitRate + (Math.random() - 0.5) * 1)),
        dataTransferred: prev.dataTransferred + Math.random() * 10,
        edgeProviders: prev.edgeProviders.map(provider => ({
          ...provider,
          avgLatency: Math.max(10, Math.min(50, provider.avgLatency + (Math.random() - 0.5) * 2)),
          cacheHitRate: Math.max(85, Math.min(98, provider.cacheHitRate + (Math.random() - 0.5) * 1)),
          traffic: Math.max(50, provider.traffic + (Math.random() - 0.5) * 20)
        })),
        regionalPerformance: prev.regionalPerformance.map(region => ({
          ...region,
          latency: Math.max(8, Math.min(50, region.latency + (Math.random() - 0.5) * 3)),
          cacheHitRate: Math.max(85, Math.min(98, region.cacheHitRate + (Math.random() - 0.5) * 1))
        }))
      }));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'GOOD': case 'RESOLVED': case 'ACTIVE': case 'COMPLETED': return 'text-green-400';
      case 'SUBOPTIMAL': case 'MEDIUM': case 'MITIGATING': case 'MONITORING': return 'text-yellow-400';
      case 'POOR': case 'HIGH': case 'CRITICAL': case 'DEGRADED': return 'text-red-400';
      case 'LOW': return 'text-blue-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'OPTIMAL': case 'GOOD': case 'RESOLVED': case 'ACTIVE': case 'COMPLETED': return 'bg-green-400/20';
      case 'SUBOPTIMAL': case 'MEDIUM': case 'MITIGATING': case 'MONITORING': return 'bg-yellow-400/20';
      case 'POOR': case 'HIGH': case 'CRITICAL': case 'DEGRADED': return 'bg-red-400/20';
      case 'LOW': return 'bg-blue-400/20';
      default: return 'bg-gray-400/20';
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'improving': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'declining': return <TrendingDown className="w-4 h-4 text-red-400" />;
      case 'stable': return <Minus className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  const getProviderIcon = (provider) => {
    const iconClass = "w-4 h-4";
    switch (provider) {
      case 'Cloudflare': return <Zap className={`${iconClass} text-orange-400`} />;
      case 'Fastly': return <Globe className={`${iconClass} text-red-400`} />;
      case 'AWS CloudFront': return <Network className={`${iconClass} text-yellow-400`} />;
      case 'Akamai': return <Server className={`${iconClass} text-blue-400`} />;
      default: return <Monitor className={`${iconClass} text-gray-400`} />;
    }
  };

  const getPerformanceColor = (value, target, isReverse = false) => {
    if (isReverse) {
      if (value <= target * 0.8) return 'text-green-400';
      if (value <= target) return 'text-blue-400';
      if (value <= target * 1.2) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= target * 1.2) return 'text-green-400';
      if (value >= target) return 'text-blue-400';
      if (value >= target * 0.8) return 'text-yellow-400';
      return 'text-red-400';
    }
  };

  const formatBytes = (bytes) => {
    if (bytes >= 1024) return (bytes / 1024).toFixed(1) + ' PB';
    return bytes.toFixed(1) + ' TB';
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="space-y-6">
      {/* Edge Computing Header */}
      <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Globe className="w-8 h-8 text-cyan-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Edge Computing & CDN Performance Center</h2>
              <div className="text-sm text-gray-400">Cloudflare • Fastly • AWS CloudFront • Akamai • Real User Measurements</div>
            </div>
            <div className="flex items-center space-x-2">
              <Radar className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-semibold">GLOBAL MONITORING</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Performance Score</div>
            <div className={`text-2xl font-mono font-bold ${getPerformanceColor(edgeData.globalPerformanceScore, 90)}`}>
              {edgeData.globalPerformanceScore.toFixed(1)}%
            </div>
            <div className="text-xs text-emerald-400">
              {edgeData.activeEdgeNodes}/{edgeData.totalEdgeNodes} nodes active
            </div>
          </div>
        </div>
        
        {/* Global Edge Metrics */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Global Latency</span>
              <Clock className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {edgeData.globalLatency.toFixed(1)}<span className="text-sm text-gray-400 ml-1">ms</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  edgeData.globalLatency < 20 ? 'bg-green-400' : 
                  edgeData.globalLatency < 30 ? 'bg-blue-400' : 'bg-yellow-400'
                }`}
                style={{ width: `${Math.min(100, (50 - edgeData.globalLatency) / 50 * 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Cache Hit Rate</span>
              <Target className="w-4 h-4 text-green-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {edgeData.cacheHitRate.toFixed(1)}<span className="text-sm text-gray-400 ml-1">%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className={`h-full rounded-full transition-all duration-300 ${
                  edgeData.cacheHitRate >= 95 ? 'bg-green-400' : 
                  edgeData.cacheHitRate >= 90 ? 'bg-blue-400' : 'bg-yellow-400'
                }`}
                style={{ width: `${Math.min(100, edgeData.cacheHitRate)}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Data Transferred</span>
              <BarChart3 className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {formatBytes(edgeData.dataTransferred)}<span className="text-sm text-gray-400 ml-1">today</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-1.5 mt-2">
              <div 
                className="h-full rounded-full bg-purple-400 transition-all duration-300"
                style={{ width: `${Math.min(100, (edgeData.dataTransferred / 1000) * 100)}%` }}
              />
            </div>
          </div>

          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Edge Providers</span>
              <Network className="w-4 h-4 text-orange-400" />
            </div>
            <div className="text-lg font-mono text-white">
              {edgeData.edgeProviders.length}<span className="text-sm text-gray-400 ml-1">active</span>
            </div>
            <div className="text-xs text-cyan-400 mt-1">
              {edgeData.edgeProviders.filter(p => p.status === 'OPTIMAL').length} optimal
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Edge Provider Performance */}
        <div className="lg:col-span-2 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-orange-400" />
            <h3 className="text-lg font-semibold text-white">Edge Provider Performance</h3>
            <div className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs font-semibold rounded">
              4 PROVIDERS
            </div>
          </div>
          
          <div className="space-y-4">
            {edgeData.edgeProviders.map((provider, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    {getProviderIcon(provider.name)}
                    <div>
                      <h4 className="text-white font-medium">{provider.name}</h4>
                      <div className="text-xs text-gray-400">{provider.nodes} nodes • {provider.coverage}</div>
                    </div>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(provider.status)} ${getStatusBg(provider.status)}`}>
                      {provider.status}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">TTFB</div>
                    <div className="text-lg font-mono text-white">{provider.ttfb.toFixed(1)}ms</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Latency</div>
                    <div className="text-blue-400 text-sm">{provider.avgLatency.toFixed(1)}ms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Cache Hit</div>
                    <div className="text-green-400 text-sm">{provider.cacheHitRate.toFixed(1)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Uptime</div>
                    <div className="text-purple-400 text-sm">{provider.uptime.toFixed(2)}%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Traffic</div>
                    <div className="text-cyan-400 text-sm">{provider.traffic.toFixed(1)}GB/s</div>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="text-xs text-gray-400 mb-1">Active Regions:</div>
                  <div className="flex flex-wrap gap-1">
                    {provider.regions.slice(0, 4).map((region, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs bg-cyan-400/20 text-cyan-400 rounded">
                        {region}
                      </span>
                    ))}
                    {provider.regions.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-gray-400/20 text-gray-400 rounded">
                        +{provider.regions.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">Cost: <span className="text-yellow-400">{provider.cost}/month</span></span>
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${
                        provider.status === 'OPTIMAL' ? 'bg-green-400' :
                        provider.status === 'GOOD' ? 'bg-blue-400' : 'bg-yellow-400'
                      }`}
                      style={{ width: `${Math.min(100, provider.uptime)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Performance */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-5 h-5 text-green-400" />
            <h3 className="text-lg font-semibold text-white">Regional Performance</h3>
          </div>
          
          <div className="space-y-3">
            {edgeData.regionalPerformance.map((region, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-3 bg-slate-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium text-sm">{region.region}</span>
                    {getTrendIcon(region.trend)}
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${
                    region.issues === 0 ? 'bg-green-400/20 text-green-400' :
                    region.issues <= 2 ? 'bg-yellow-400/20 text-yellow-400' : 'bg-red-400/20 text-red-400'
                  }`}>
                    {region.issues} ISSUES
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                  <div>
                    <span className="text-gray-400">Latency:</span>
                    <span className="text-blue-400 ml-1">{region.latency.toFixed(1)}ms</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Cache Hit:</span>
                    <span className="text-green-400 ml-1">{region.cacheHitRate.toFixed(1)}%</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Bandwidth:</span>
                    <span className="text-purple-400 ml-1">{region.bandwidth.toFixed(1)}GB/s</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Nodes:</span>
                    <span className="text-cyan-400 ml-1">{region.activeNodes}</span>
                  </div>
                </div>

                <div className="text-xs text-orange-400">
                  Top Provider: {region.topProvider}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Real User Measurements */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Monitor className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Real User Measurements</h3>
          </div>
          
          <div className="space-y-4">
            {edgeData.rumMetrics.map((metric, index) => (
              <div key={index} className="border border-slate-600/30 rounded p-4 bg-slate-800/30">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{metric.metric}</span>
                  <div className="flex items-center space-x-2">
                    {getTrendIcon(metric.trend)}
                    <div className={`text-lg font-mono ${getPerformanceColor(metric.value, metric.target, true)}`}>
                      {metric.unit === 'score' ? metric.value.toFixed(2) : metric.value.toFixed(0)}{metric.unit}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                  <div>
                    <div className="text-xs text-gray-400">P95</div>
                    <div className="text-yellow-400 font-mono">
                      {metric.unit === 'score' ? metric.p95.toFixed(2) : metric.p95.toFixed(0)}{metric.unit}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Target</div>
                    <div className="text-green-400 font-mono">
                      {metric.unit === 'score' ? metric.target.toFixed(2) : metric.target.toFixed(0)}{metric.unit}
                    </div>
                  </div>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full transition-all duration-300 ${
                      metric.unit === 'score' 
                        ? (metric.value <= metric.target ? 'bg-green-400' : 'bg-yellow-400')
                        : metric.value <= metric.target ? 'bg-green-400' : 
                          metric.value <= metric.target * 1.5 ? 'bg-blue-400' : 'bg-red-400'
                    }`}
                    style={{ 
                      width: metric.unit === 'score' 
                        ? `${Math.min(100, (1 - metric.value) * 100)}%`
                        : `${Math.min(100, (metric.target / Math.max(metric.value, metric.target)) * 100)}%` 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Edge Incidents & Streaming */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <h3 className="text-lg font-semibold text-white">Edge Incidents</h3>
          </div>
          
          <div className="space-y-3 mb-4">
            {edgeData.edgeIncidents.map((incident, index) => (
              <div key={index} className={`border rounded p-3 transition-all ${
                incident.severity === 'HIGH' ? 'border-red-400/50 bg-red-400/10' :
                incident.severity === 'MEDIUM' ? 'border-yellow-400/50 bg-yellow-400/10' :
                'border-blue-400/50 bg-blue-400/10'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-400 font-mono">{incident.timestamp}</span>
                    <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(incident.severity)} ${getStatusBg(incident.severity)}`}>
                      {incident.severity}
                    </div>
                  </div>
                  <div className={`px-2 py-1 text-xs font-semibold rounded ${getStatusColor(incident.status)} ${getStatusBg(incident.status)}`}>
                    {incident.status.replace('_', ' ')}
                  </div>
                </div>
                
                <div className="text-sm text-gray-300 mb-2">
                  <strong>{incident.provider} - {incident.region}:</strong> {incident.issue}
                </div>
                
                <div className="text-xs mb-2">
                  <div className="text-blue-400">{incident.impact}</div>
                  <div className="text-gray-400">
                    Affected users: <span className="text-red-400">{formatNumber(incident.affectedUsers)}</span>
                    {incident.eta && <span className="ml-2">ETA: <span className="text-yellow-400">{incident.eta}</span></span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Streaming Metrics Summary */}
          <div className="bg-slate-800/50 p-3 rounded border border-slate-600/30">
            <div className="text-sm text-gray-400 mb-2">Streaming Performance</div>
            <div className="space-y-2">
              {edgeData.streamingMetrics.map((stream, index) => (
                <div key={index} className="flex justify-between items-center text-xs">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-300">{stream.protocol}</span>
                    <span className="text-cyan-400">{formatNumber(stream.activeStreams)} streams</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-400">{stream.avgLatency}ms</span>
                    <span className="text-purple-400">{stream.quality}</span>
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