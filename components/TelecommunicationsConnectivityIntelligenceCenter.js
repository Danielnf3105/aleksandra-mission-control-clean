// Telecommunications & Connectivity Intelligence Center - Network Operations, Infrastructure Monitoring, Connectivity Analytics & Telecom Intelligence
import { useState, useEffect } from 'react';
import { Wifi, Smartphone, Satellite, Router, Signal, TrendingUp, TrendingDown, Users, AlertTriangle, CheckCircle, Target, BarChart3, Globe } from 'lucide-react';

export default function TelecommunicationsConnectivityIntelligenceCenter() {
  const [telecomData, setTelecomData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    networkOverview: {
      totalConnections: 45678901,
      activeCalls: 234567,
      dataTraffic: 12345678, // GB/hour
      networkUptime: 99.97,
      averageLatency: 12.4, // ms
      bandwidthUtilization: 67.8,
      totalBaseStations: 23456,
      fiberCoverage: 89.7, // percentage
      mobilePenetration: 156.8, // percentage (includes multiple SIMs)
      internetUsers: 8765432,
      emergencyCalls: 123,
      networkCapacity: 2345678, // Gbps
      roamingUsers: 234567,
      iotConnections: 1234567
    },
    mobileNetworks: [
      {
        operator: 'MEO Portugal',
        technology: '5G/4G/3G',
        subscribers: 2876543,
        coverage: 98.7, // percentage
        baseStations: 8765,
        networkQuality: 94.2,
        dataUsage: 3456789, // GB/day
        voiceMinutes: 12345678,
        revenue: 145678901, // EUR/month
        marketShare: 39.7,
        avgSpeed: 87.4, // Mbps
        customerSatisfaction: 8.3
      },
      {
        operator: 'Vodafone Portugal',
        technology: '5G/4G/3G',
        subscribers: 2543210,
        coverage: 97.9,
        baseStations: 7654,
        networkQuality: 92.8,
        dataUsage: 2987654,
        voiceMinutes: 10987654,
        revenue: 123456789,
        marketShare: 35.1,
        avgSpeed: 82.7,
        customerSatisfaction: 8.1
      },
      {
        operator: 'NOS',
        technology: '5G/4G/3G',
        subscribers: 1876543,
        coverage: 96.4,
        baseStations: 5432,
        networkQuality: 90.5,
        dataUsage: 1876543,
        voiceMinutes: 8765432,
        revenue: 87654321,
        marketShare: 25.9,
        avgSpeed: 75.6,
        customerSatisfaction: 7.9
      }
    ],
    internetInfrastructure: {
      fiberNetwork: {
        totalLength: 123456, // km
        connections: 3456789,
        speed: 1000, // Mbps average
        availability: 89.7,
        uptimePercentage: 99.94,
        maintenanceWindows: 12
      },
      cableNetwork: {
        totalLength: 87654, // km
        connections: 2345678,
        speed: 200, // Mbps average
        availability: 76.8,
        uptimePercentage: 99.87,
        maintenanceWindows: 8
      },
      dslNetwork: {
        totalLength: 234567, // km
        connections: 1234567,
        speed: 24, // Mbps average
        availability: 92.3,
        uptimePercentage: 99.76,
        maintenanceWindows: 15
      },
      satelliteInternet: {
        activeConnections: 123456,
        coverage: 100.0,
        speed: 25, // Mbps average
        latency: 650, // ms
        reliability: 94.5,
        subscribers: 98765
      }
    },
    networkPerformance: {
      nationalAverages: {
        downloadSpeed: 67.8, // Mbps
        uploadSpeed: 23.4, // Mbps
        latency: 12.4, // ms
        packetLoss: 0.02, // percentage
        jitter: 1.8, // ms
        reliability: 99.7 // percentage
      },
      regionalPerformance: [
        {
          region: 'Lisbon Metro',
          downloadSpeed: 89.7,
          uploadSpeed: 34.6,
          latency: 8.9,
          population: 2876543,
          coverage5G: 92.4,
          fiberAvailability: 97.8
        },
        {
          region: 'Porto Metro',
          downloadSpeed: 82.3,
          uploadSpeed: 29.7,
          latency: 10.2,
          population: 1987654,
          coverage5G: 89.1,
          fiberAvailability: 94.5
        },
        {
          region: 'Algarve',
          downloadSpeed: 71.4,
          uploadSpeed: 24.8,
          latency: 15.6,
          population: 456789,
          coverage5G: 78.9,
          fiberAvailability: 87.2
        },
        {
          region: 'Central Portugal',
          downloadSpeed: 58.9,
          uploadSpeed: 19.3,
          latency: 18.7,
          population: 1234567,
          coverage5G: 67.4,
          fiberAvailability: 76.8
        }
      ]
    },
    trafficAnalytics: {
      hourlyTraffic: [
        { hour: '00:00', voice: 12.4, data: 234.5, video: 567.8, total: 814.7 },
        { hour: '06:00', voice: 23.7, data: 345.6, video: 678.9, total: 1048.2 },
        { hour: '12:00', voice: 45.8, data: 567.8, video: 890.1, total: 1503.7 },
        { hour: '18:00', voice: 67.9, data: 789.0, video: 1234.5, total: 2091.4 },
        { hour: '21:00', voice: 34.5, data: 456.7, video: 1567.8, total: 2059.0 }
      ],
      applicationUsage: [
        { app: 'Video Streaming', percentage: 34.7, traffic: '2.3TB/hour' },
        { app: 'Social Media', percentage: 23.4, traffic: '1.6TB/hour' },
        { app: 'Web Browsing', percentage: 18.9, traffic: '1.3TB/hour' },
        { app: 'Gaming', percentage: 12.6, traffic: '850GB/hour' },
        { app: 'Video Calls', percentage: 6.8, traffic: '460GB/hour' },
        { app: 'File Downloads', percentage: 3.6, traffic: '240GB/hour' }
      ],
      contentDelivery: {
        cdnNodes: 234,
        cacheHitRate: 89.7,
        bandwidth: 23456, // Gbps
        latencyReduction: 67.8, // percentage
        costSavings: 2345678 // EUR/month
      }
    },
    infrastructure: {
      datacenters: [
        {
          location: 'Lisbon DC1',
          capacity: 50, // MW
          utilization: 78.9,
          uptime: 100.0,
          temperature: 22.4, // °C
          powerUsage: 39.5, // MW
          servers: 12456,
          storage: 2345, // TB
          networkConnections: 567890
        },
        {
          location: 'Porto DC2',
          capacity: 35,
          utilization: 67.8,
          uptime: 99.98,
          temperature: 21.8,
          powerUsage: 23.7,
          servers: 8765,
          storage: 1678, // TB
          networkConnections: 345678
        },
        {
          location: 'Coimbra DC3',
          capacity: 25,
          utilization: 56.3,
          uptime: 99.95,
          temperature: 23.1,
          powerUsage: 14.1,
          servers: 5432,
          storage: 987, // TB
          networkConnections: 234567
        }
      ],
      submarine_cables: [
        {
          cable: 'EllaLink',
          route: 'Portugal-Brazil',
          capacity: 72, // Tbps
          utilization: 45.6,
          status: 'OPERATIONAL',
          length: 9200, // km
          latency: 138 // ms
        },
        {
          cable: 'Marea',
          route: 'Portugal-USA',
          capacity: 200,
          utilization: 67.8,
          status: 'OPERATIONAL',
          length: 6600,
          latency: 65
        },
        {
          cable: 'WACS',
          route: 'Portugal-West Africa',
          capacity: 14.5,
          utilization: 34.2,
          status: 'OPERATIONAL',
          length: 14530,
          latency: 245
        }
      ],
      satellites: [
        {
          name: 'Hispasat 30W-6',
          coverage: 'Iberian Peninsula',
          capacity: 60, // Gbps
          utilization: 78.9,
          status: 'ACTIVE',
          orbital_position: '30°W',
          users: 234567
        },
        {
          name: 'Eutelsat 16A',
          coverage: 'Europe/MENA',
          capacity: 40,
          utilization: 56.7,
          status: 'ACTIVE',
          orbital_position: '16°E',
          users: 123456
        }
      ]
    },
    qualityMetrics: {
      callQuality: {
        voiceCallSuccess: 99.7, // percentage
        videoCallSuccess: 98.4,
        averageMOS: 4.3, // Mean Opinion Score
        dropCallRate: 0.3,
        blockCallRate: 0.2,
        handoverSuccess: 99.5
      },
      dataServices: {
        webPageLoad: 1.8, // seconds average
        videoStartTime: 2.4,
        downloadThroughput: 67.8, // Mbps average
        uploadThroughput: 23.4,
        availability: 99.94,
        responseTime: 12.4 // ms
      },
      customerExperience: {
        nps: 67, // Net Promoter Score
        csat: 8.3, // Customer Satisfaction (1-10)
        churnRate: 2.1, // percentage monthly
        complaintRate: 0.8, // per 1000 customers
        serviceResolution: 89.7, // percentage first call
        supportWaitTime: 2.4 // minutes average
      }
    },
    securityOperations: {
      networkSecurity: {
        ddosAttacks: 234, // daily average
        malwareBlocked: 12456,
        phishingBlocked: 3456,
        intrusionAttempts: 987,
        firewallBlocks: 234567,
        vpnConnections: 123456
      },
      incidentResponse: {
        activeIncidents: 12,
        resolvedToday: 45,
        avgResolutionTime: 23.4, // minutes
        criticalIncidents: 2,
        securityBreaches: 0,
        uptimeImpact: 0.003 // percentage
      }
    },
    emergencyServices: {
      e112Calls: {
        totalCalls: 2345,
        successRate: 99.8,
        averageResponse: 8.9, // seconds
        locationAccuracy: 94.7, // percentage within 100m
        falseAlarms: 12.4, // percentage
        criticalCalls: 156
      },
      disasterResponse: {
        backupSites: 12,
        emergencyPower: 99.9, // availability
        satelliteBackup: 100.0,
        redundantPaths: 234,
        recoveryTime: 4.2, // minutes average
        businessContinuity: 99.7
      }
    },
    telecomAlerts: [
      {
        type: 'WARNING',
        category: 'Network Congestion',
        message: 'High traffic detected in Lisbon metro area - 87% capacity utilization during peak hours',
        operator: 'MEO Portugal',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '02:55',
        recommendations: ['Scale network capacity', 'Traffic load balancing', 'Peak hour optimization']
      },
      {
        type: 'CRITICAL',
        category: 'Infrastructure Failure',
        message: 'Fiber cable cut detected on Porto-Coimbra route - 15% service degradation',
        operator: 'NOS',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '03:01',
        recommendations: ['Emergency rerouting', 'Field repair dispatch', 'Customer communications']
      },
      {
        type: 'SUCCESS',
        category: '5G Deployment',
        message: 'New 5G base station activated in Algarve region - coverage increased to 78.9%',
        operator: 'Vodafone',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '02:45',
        recommendations: ['Monitor performance', 'Optimize parameters', 'Plan next deployment phase']
      },
      {
        type: 'INFO',
        category: 'Maintenance Window',
        message: 'Scheduled submarine cable maintenance EllaLink - minimal impact expected',
        operator: 'Multiple',
        impact: 'LOW',
        actionRequired: false,
        timestamp: '03:00',
        recommendations: ['Monitor traffic rerouting', 'Customer notification', 'Performance tracking']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelecomData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        networkOverview: {
          ...prev.networkOverview,
          activeCalls: Math.max(200000, Math.min(300000, prev.networkOverview.activeCalls + Math.floor((Math.random() - 0.5) * 10000))),
          dataTraffic: Math.max(10000000, Math.min(15000000, prev.networkOverview.dataTraffic + Math.floor((Math.random() - 0.5) * 200000)))
        },
        networkPerformance: {
          ...prev.networkPerformance,
          nationalAverages: {
            ...prev.networkPerformance.nationalAverages,
            latency: Math.max(8.0, Math.min(20.0, prev.networkPerformance.nationalAverages.latency + (Math.random() - 0.5) * 2))
          }
        }
      }));
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getAlertColor = (type) => {
    switch (type) {
      case 'CRITICAL': return 'border-red-500 bg-red-900/30 text-red-400';
      case 'WARNING': return 'border-yellow-500 bg-yellow-900/30 text-yellow-400';
      case 'SUCCESS': return 'border-green-500 bg-green-900/30 text-green-400';
      case 'INFO': return 'border-blue-500 bg-blue-900/30 text-blue-400';
      default: return 'border-gray-500 bg-gray-900/30 text-gray-400';
    }
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
      case 'HIGH': return 'text-orange-400 bg-orange-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'OPERATIONAL': return 'text-green-400';
      case 'ACTIVE': return 'text-green-400';
      case 'DEGRADED': return 'text-yellow-400';
      case 'DOWN': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90, reverse = false) => {
    if (reverse) {
      if (value <= excellent / 10) return 'text-green-400';
      if (value <= good / 10) return 'text-blue-400';
      if (value <= good / 5) return 'text-yellow-400';
      return 'text-red-400';
    } else {
      if (value >= excellent) return 'text-green-400';
      if (value >= good) return 'text-blue-400';
      if (value >= good * 0.8) return 'text-yellow-400';
      return 'text-red-400';
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

  const formatCurrency = (amount) => {
    if (amount >= 1000000000) {
      return `€${(amount / 1000000000).toFixed(1)}B`;
    }
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`;
    }
    if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`;
    }
    return `€${amount.toLocaleString()}`;
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;

  return (
    <div className="h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-teal-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Telecommunications & Connectivity Intelligence Center</h1>
              <p className="text-cyan-300">Network operations, infrastructure monitoring, connectivity analytics & telecom intelligence</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{telecomData.currentTime}</div>
            <div className="text-cyan-300">Telecom Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Network Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                Total Connections
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(telecomData.networkOverview.totalConnections)}</div>
            <div className="text-cyan-300 text-sm">Internet Users: {formatNumber(telecomData.networkOverview.internetUsers)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
                Active Calls
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(telecomData.networkOverview.activeCalls)}</div>
            <div className="text-blue-300 text-sm">Emergency: {telecomData.networkOverview.emergencyCalls}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
                Data Traffic
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(telecomData.networkOverview.dataTraffic)} GB/h</div>
            <div className="text-green-300 text-sm">Capacity: {formatNumber(telecomData.networkOverview.networkCapacity)} Gbps</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Signal className="w-5 h-5 text-purple-400 mr-2" />
                Network Uptime
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(telecomData.networkOverview.networkUptime)}</div>
            <div className="text-purple-300 text-sm">Latency: {telecomData.networkOverview.averageLatency.toFixed(1)}ms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Router className="w-5 h-5 text-orange-400 mr-2" />
                Base Stations
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatNumber(telecomData.networkOverview.totalBaseStations)}</div>
            <div className="text-orange-300 text-sm">Fiber Coverage: {formatPercentage(telecomData.networkOverview.fiberCoverage)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Globe className="w-5 h-5 text-teal-400 mr-2" />
                IoT Connections
              </h3>
            </div>
            <div className="text-3xl font-bold text-teal-400">{formatNumber(telecomData.networkOverview.iotConnections)}</div>
            <div className="text-teal-300 text-sm">Roaming: {formatNumber(telecomData.networkOverview.roamingUsers)}</div>
          </div>
        </div>

        {/* Mobile Networks Performance */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
            Mobile Network Operators Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Operator</th>
                  <th className="text-center p-3 text-slate-300">Subscribers</th>
                  <th className="text-center p-3 text-slate-300">Coverage</th>
                  <th className="text-center p-3 text-slate-300">Avg Speed</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                  <th className="text-center p-3 text-slate-300">Quality</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                </tr>
              </thead>
              <tbody>
                {telecomData.mobileNetworks.map((network, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{network.operator}</div>
                      <div className="text-slate-400 text-xs">{network.technology}</div>
                    </td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(network.subscribers)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(network.coverage, 90, 95)}`}>
                      {formatPercentage(network.coverage)}
                    </td>
                    <td className="p-3 text-center text-green-400">{network.avgSpeed.toFixed(1)} Mbps</td>
                    <td className="p-3 text-center text-purple-400">{formatPercentage(network.marketShare)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(network.networkQuality, 85, 92)}`}>
                      {formatPercentage(network.networkQuality)}
                    </td>
                    <td className="p-3 text-center text-emerald-400">{formatCurrency(network.revenue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Regional Performance & Infrastructure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-teal-400 mr-2" />
              Regional Network Performance
            </h3>
            <div className="space-y-4">
              {telecomData.networkPerformance.regionalPerformance.map((region, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-white font-medium text-sm">{region.region}</span>
                      <span className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {formatNumber(region.population)} pop
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{region.downloadSpeed.toFixed(1)} Mbps</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-cyan-400">Download: {region.downloadSpeed.toFixed(1)} Mbps</div>
                      <div className="text-blue-400">Upload: {region.uploadSpeed.toFixed(1)} Mbps</div>
                      <div className="text-purple-400">Latency: {region.latency.toFixed(1)}ms</div>
                    </div>
                    <div>
                      <div className="text-orange-400">5G Coverage: {formatPercentage(region.coverage5G)}</div>
                      <div className="text-green-400">Fiber: {formatPercentage(region.fiberAvailability)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Satellite className="w-5 h-5 text-purple-400 mr-2" />
              Critical Infrastructure Status
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Data Centers</h4>
                {telecomData.infrastructure.datacenters.slice(0, 3).map((dc, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">{dc.location}</span>
                    <div className="text-xs space-x-2">
                      <span className={`${getPerformanceColor(dc.uptime, 99.9, 99.95)}`}>
                        {formatPercentage(dc.uptime)}
                      </span>
                      <span className="text-green-400">{formatPercentage(dc.utilization)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Submarine Cables</h4>
                {telecomData.infrastructure.submarine_cables.map((cable, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">{cable.cable}</span>
                    <div className="text-xs space-x-2">
                      <span className={`${getStatusColor(cable.status)}`}>
                        {cable.status}
                      </span>
                      <span className="text-cyan-400">{formatPercentage(cable.utilization)}</span>
                      <span className="text-orange-400">{cable.latency}ms</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Satellites</h4>
                {telecomData.infrastructure.satellites.map((satellite, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">{satellite.name}</span>
                    <div className="text-xs space-x-2">
                      <span className={`${getStatusColor(satellite.status)}`}>
                        {satellite.status}
                      </span>
                      <span className="text-blue-400">{formatNumber(satellite.users)}</span>
                      <span className="text-purple-400">{formatPercentage(satellite.utilization)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Analytics & Quality Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Traffic Analytics Intelligence
            </h3>
            <div className="space-y-4 mb-6">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Application Usage</h4>
                {telecomData.trafficAnalytics.applicationUsage.slice(0, 4).map((app, index) => (
                  <div key={index} className="flex items-center justify-between mb-2">
                    <span className="text-slate-300 text-sm">{app.app}</span>
                    <div className="text-xs space-x-2">
                      <span className="text-cyan-400">{formatPercentage(app.percentage)}</span>
                      <span className="text-green-400">{app.traffic}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Content Delivery Network</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">CDN Nodes: {telecomData.trafficAnalytics.contentDelivery.cdnNodes}</div>
                    <div className="text-slate-300">Cache Hit: {formatPercentage(telecomData.trafficAnalytics.contentDelivery.cacheHitRate)}</div>
                    <div className="text-slate-300">Bandwidth: {formatNumber(telecomData.trafficAnalytics.contentDelivery.bandwidth)} Gbps</div>
                  </div>
                  <div>
                    <div className="text-green-400">Latency Reduction: {formatPercentage(telecomData.trafficAnalytics.contentDelivery.latencyReduction)}</div>
                    <div className="text-blue-400">Cost Savings: {formatCurrency(telecomData.trafficAnalytics.contentDelivery.costSavings)}/mo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
              Service Quality Intelligence
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Call Quality</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-green-400">Voice Success: {formatPercentage(telecomData.qualityMetrics.callQuality.voiceCallSuccess)}</div>
                    <div className="text-blue-400">Video Success: {formatPercentage(telecomData.qualityMetrics.callQuality.videoCallSuccess)}</div>
                    <div className="text-purple-400">Average MOS: {telecomData.qualityMetrics.callQuality.averageMOS.toFixed(1)}</div>
                  </div>
                  <div>
                    <div className="text-orange-400">Drop Rate: {formatPercentage(telecomData.qualityMetrics.callQuality.dropCallRate)}</div>
                    <div className="text-cyan-400">Handover: {formatPercentage(telecomData.qualityMetrics.callQuality.handoverSuccess)}</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Data Services</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-green-400">Web Load: {telecomData.qualityMetrics.dataServices.webPageLoad.toFixed(1)}s</div>
                    <div className="text-blue-400">Video Start: {telecomData.qualityMetrics.dataServices.videoStartTime.toFixed(1)}s</div>
                    <div className="text-purple-400">Availability: {formatPercentage(telecomData.qualityMetrics.dataServices.availability)}</div>
                  </div>
                  <div>
                    <div className="text-cyan-400">Download: {telecomData.qualityMetrics.dataServices.downloadThroughput.toFixed(1)} Mbps</div>
                    <div className="text-orange-400">Response: {telecomData.qualityMetrics.dataServices.responseTime.toFixed(1)}ms</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Customer Experience</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-green-400">NPS: {telecomData.qualityMetrics.customerExperience.nps}</div>
                    <div className="text-blue-400">CSAT: {telecomData.qualityMetrics.customerExperience.csat.toFixed(1)}/10</div>
                    <div className="text-purple-400">Churn: {formatPercentage(telecomData.qualityMetrics.customerExperience.churnRate)}/mo</div>
                  </div>
                  <div>
                    <div className="text-orange-400">Resolution: {formatPercentage(telecomData.qualityMetrics.customerExperience.serviceResolution)}</div>
                    <div className="text-cyan-400">Wait Time: {telecomData.qualityMetrics.customerExperience.supportWaitTime.toFixed(1)}min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telecom Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            Telecommunications Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {telecomData.telecomAlerts.map((alert, index) => (
              <div key={index} className={`rounded-lg p-4 border-l-4 ${getAlertColor(alert.type)}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium">{alert.type}</span>
                    <span className="text-slate-300 text-xs">{alert.category}</span>
                  </div>
                  <span className="text-slate-400 text-xs">{alert.timestamp}</span>
                </div>
                <div className="text-white font-medium text-sm mb-1">{alert.message}</div>
                <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                  <div>
                    <div className="text-slate-300">Operator: {alert.operator}</div>
                    <div className="text-slate-300">Action: {alert.actionRequired ? 'Required' : 'Monitoring'}</div>
                  </div>
                  <div>
                    <div className={`${getImpactColor(alert.impact).split(' ')[0]} text-xs`}>
                      Impact: {alert.impact}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {alert.recommendations.map((rec, recIndex) => (
                    <span key={recIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                      {rec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Services & Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-red-400 mr-2" />
              Emergency Services Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{telecomData.emergencyServices.e112Calls.totalCalls}</div>
                <div className="text-red-300 text-sm">E112 Calls Today</div>
                <div className="text-gray-400 text-xs mt-1">Success: {formatPercentage(telecomData.emergencyServices.e112Calls.successRate)}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{telecomData.emergencyServices.e112Calls.averageResponse.toFixed(1)}s</div>
                <div className="text-green-300 text-sm">Avg Response</div>
                <div className="text-gray-400 text-xs mt-1">Location Accuracy: {formatPercentage(telecomData.emergencyServices.e112Calls.locationAccuracy)}</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Disaster Response</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Backup Sites: {telecomData.emergencyServices.disasterResponse.backupSites}</div>
                    <div className="text-slate-300">Emergency Power: {formatPercentage(telecomData.emergencyServices.disasterResponse.emergencyPower)}</div>
                    <div className="text-slate-300">Satellite Backup: {formatPercentage(telecomData.emergencyServices.disasterResponse.satelliteBackup)}</div>
                  </div>
                  <div>
                    <div className="text-green-400">Recovery Time: {telecomData.emergencyServices.disasterResponse.recoveryTime.toFixed(1)}min</div>
                    <div className="text-blue-400">Business Continuity: {formatPercentage(telecomData.emergencyServices.disasterResponse.businessContinuity)}</div>
                    <div className="text-purple-400">Redundant Paths: {telecomData.emergencyServices.disasterResponse.redundantPaths}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              Network Security Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{telecomData.securityOperations.networkSecurity.ddosAttacks}</div>
                <div className="text-orange-300 text-sm">DDoS Attacks</div>
                <div className="text-gray-400 text-xs mt-1">Daily Average</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(telecomData.securityOperations.networkSecurity.malwareBlocked)}</div>
                <div className="text-green-300 text-sm">Malware Blocked</div>
                <div className="text-gray-400 text-xs mt-1">Today</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                <h4 className="text-white text-sm font-medium mb-2">Security Metrics</h4>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-slate-300">Phishing Blocked: {formatNumber(telecomData.securityOperations.networkSecurity.phishingBlocked)}</div>
                    <div className="text-slate-300">Intrusion Attempts: {telecomData.securityOperations.networkSecurity.intrusionAttempts}</div>
                    <div className="text-slate-300">Firewall Blocks: {formatNumber(telecomData.securityOperations.networkSecurity.firewallBlocks)}</div>
                  </div>
                  <div>
                    <div className="text-blue-400">VPN Connections: {formatNumber(telecomData.securityOperations.networkSecurity.vpnConnections)}</div>
                    <div className="text-green-400">Active Incidents: {telecomData.securityOperations.incidentResponse.activeIncidents}</div>
                    <div className="text-purple-400">Avg Resolution: {telecomData.securityOperations.incidentResponse.avgResolutionTime.toFixed(1)}min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}