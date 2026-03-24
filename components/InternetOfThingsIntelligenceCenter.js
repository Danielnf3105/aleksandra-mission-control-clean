// Internet of Things (IoT) Intelligence Center - IoT Operations, Smart Device Analytics & Connected Infrastructure Monitoring
import { useState, useEffect } from 'react';
import { Wifi, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Shield, Activity, Zap } from 'lucide-react';

export default function InternetOfThingsIntelligenceCenter() {
  const [iotData, setIotData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalIotMarket: 567890123456, // EUR market size
      connectedDevices: 89012345678, // globally
      iotPlatforms: 12345,
      dailyDataGenerated: 234567890, // GB per day
      iotInvestment: 123456789012, // EUR annually
      industrialIotMarket: 234567890123,
      consumerIotMarket: 178901234567,
      iotSecurityMarket: 45678901234,
      edgeComputingMarket: 89012345678,
      iotConnectivity: 34567890123,
      smartCityInvestment: 67890123456,
      iotGrowthRate: 23.4, // percentage annually
      devicePenetration: 78.9, // percentage of households
      enterpriseAdoption: 89.4 // percentage
    },
    majorIotPlatforms: [
      {
        platform: 'AWS IoT Core',
        category: 'Cloud IoT Platform',
        connectedDevices: 23456789012,
        dailyMessages: 567890123456,
        supportedProtocols: 15,
        regions: 25,
        customers: 45678,
        services: ['Device Management', 'Analytics', 'Security', 'Edge Computing', 'Machine Learning'],
        securityScore: 96.8,
        scalabilityScore: 98.7,
        reliabilityScore: 97.4,
        performanceRating: 9.6,
        marketShare: 32.4
      },
      {
        platform: 'Microsoft Azure IoT Central',
        category: 'Enterprise IoT',
        connectedDevices: 12345678901,
        dailyMessages: 234567890123,
        supportedProtocols: 12,
        regions: 60,
        customers: 34567,
        services: ['SaaS Platform', 'Device Templates', 'Analytics', 'Integration', 'Security'],
        securityScore: 95.7,
        scalabilityScore: 94.2,
        reliabilityScore: 96.1,
        performanceRating: 9.3,
        marketShare: 18.7
      },
      {
        platform: 'Google Cloud IoT',
        category: 'AI-Powered IoT',
        connectedDevices: 8901234567,
        dailyMessages: 123456789012,
        supportedProtocols: 10,
        regions: 24,
        customers: 23456,
        services: ['AI/ML Integration', 'Edge TPU', 'Analytics', 'Pub/Sub', 'Security'],
        securityScore: 94.8,
        scalabilityScore: 97.5,
        reliabilityScore: 95.3,
        performanceRating: 9.4,
        marketShare: 14.2
      },
      {
        platform: 'Cisco IoT Operations',
        category: 'Industrial IoT',
        connectedDevices: 5678901234,
        dailyMessages: 89012345678,
        supportedProtocols: 20,
        regions: 18,
        customers: 12345,
        services: ['Networking', 'Security', 'Edge Computing', 'Analytics', 'Asset Management'],
        securityScore: 97.9,
        scalabilityScore: 91.6,
        reliabilityScore: 94.8,
        performanceRating: 9.1,
        marketShare: 11.3
      }
    ],
    iotVerticals: [
      {
        vertical: 'Smart Cities',
        connectedDevices: 12345678901,
        investmentSize: 67890123456, // EUR
        activeProjects: 23456,
        citizensImpacted: 234567890,
        applications: ['Traffic Management', 'Smart Lighting', 'Waste Management', 'Environmental Monitoring'],
        efficiency: 89.4, // percentage improvement
        costSavings: 23.4, // percentage
        sustainabilityImpact: 45.6,
        citizenSatisfaction: 78.9
      },
      {
        vertical: 'Industrial IoT (IIoT)',
        connectedDevices: 8901234567,
        investmentSize: 234567890123,
        activeProjects: 45678,
        industriesServed: 234,
        applications: ['Predictive Maintenance', 'Asset Tracking', 'Quality Control', 'Process Optimization'],
        efficiency: 67.8,
        costSavings: 34.5,
        sustainabilityImpact: 28.9,
        operationalExcellence: 91.2
      },
      {
        vertical: 'Smart Healthcare',
        connectedDevices: 5678901234,
        investmentSize: 45678901234,
        activeProjects: 12345,
        patientsMonitored: 89012345,
        applications: ['Remote Monitoring', 'Wearables', 'Telemedicine', 'Smart Hospitals'],
        efficiency: 78.9,
        costSavings: 23.4,
        sustainabilityImpact: 34.5,
        patientOutcomes: 87.6
      },
      {
        vertical: 'Smart Agriculture',
        connectedDevices: 3456789012,
        investmentSize: 23456789012,
        activeProjects: 8901,
        farmsConnected: 567890,
        applications: ['Precision Farming', 'Livestock Monitoring', 'Crop Management', 'Environmental Sensing'],
        efficiency: 89.7,
        costSavings: 45.6,
        sustainabilityImpact: 67.8,
        yieldImprovement: 23.4
      }
    ],
    iotSecurity: {
      securityIncidents: 23456, // annually
      vulnerableDevices: 123456789, // estimated globally
      securityUpdates: 234567, // patches annually
      encryptedConnections: 67.8, // percentage
      authenticationEnabled: 78.9, // percentage
      securityAudits: 12345,
      threatDetections: 2345678,
      breachesAvoided: 567890,
      securityInvestment: 45678901234, // EUR annually
      complianceScore: 72.4, // industry average
      securityMaturity: 68.9,
      incidentResponseTime: 4.2 // hours average
    },
    edgeComputing: {
      edgeDevices: 23456789012,
      edgeDataCenters: 234567,
      dataProcessedLocally: 78.9, // percentage
      latencyReduction: 89.4, // percentage improvement
      bandwidthSavings: 67.8, // percentage
      edgeInvestment: 89012345678, // EUR annually
      edgeApplications: 234567,
      realTimeProcessing: 94.6, // percentage
      edgeSecurityScore: 76.8,
      autonomousOperations: 45.6,
      energyEfficiency: 34.5,
      edgeReliability: 91.2
    },
    deviceAnalytics: {
      dailyDataPoints: 567890123456, // globally
      activelyMonitored: 89.4, // percentage of devices
      predictiveModels: 234567,
      anomalyDetection: 78.9, // accuracy percentage
      deviceUptime: 94.6, // average percentage
      maintenanceReduction: 45.6, // percentage
      energyOptimization: 23.4, // percentage savings
      performanceGains: 67.8, // percentage improvement
      dataQuality: 87.9, // percentage
      insightsGenerated: 2345678, // daily
      automatedActions: 1234567, // daily
      businessValue: 123456789012 // EUR annually
    },
    connectivityTechnologies: {
      wifi: {
        devices: 34567890123,
        marketShare: 45.6,
        reliability: 89.4,
        energyEfficiency: 67.8
      },
      bluetooth: {
        devices: 23456789012,
        marketShare: 28.9,
        reliability: 78.9,
        energyEfficiency: 89.4
      },
      cellular: {
        devices: 12345678901,
        marketShare: 15.2,
        reliability: 96.7,
        energyEfficiency: 56.7
      },
      lora: {
        devices: 5678901234,
        marketShare: 7.3,
        reliability: 91.2,
        energyEfficiency: 94.6
      },
      zigbee: {
        devices: 2345678901,
        marketShare: 3.0,
        reliability: 87.9,
        energyEfficiency: 91.2
      }
    },
    sustainabilityMetrics: {
      energyOptimization: 34.5, // percentage reduction
      carbonFootprintReduction: 23.4, // percentage
      wasteReduction: 45.6, // percentage
      resourceEfficiency: 67.8, // percentage improvement
      smartGridIntegration: 78.9, // percentage
      renewableEnergyUsage: 56.7, // percentage
      environmentalMonitoring: 89.4, // devices deployed
      sustainabilityReporting: 72.4, // percentage automation
      greenIotDevices: 34.5, // percentage of total
      circularEconomy: 23.4, // percentage adoption
      sustainabilityInvestment: 45678901234, // EUR annually
      environmentalCompliance: 87.9 // percentage
    },
    iotAlerts: [
      {
        type: 'CRITICAL',
        category: 'Security',
        message: 'Mass IoT botnet attack detected - 2.3M devices compromised across 45 countries',
        location: 'Global Consumer IoT Devices',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '08:25',
        recommendations: ['Device isolation', 'Security patches', 'User notification', 'Traffic blocking']
      },
      {
        type: 'WARNING',
        category: 'Infrastructure',
        message: 'Smart city traffic management system showing 23% increase in response time',
        location: 'European Smart Cities',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:22',
        recommendations: ['System optimization', 'Load balancing', 'Infrastructure scaling', 'Performance analysis']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'Industrial IoT deployment achieves 45% energy savings in manufacturing',
        location: 'German Manufacturing Plants',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '08:19',
        recommendations: ['Best practices sharing', 'Case study development', 'Expansion planning', 'ROI documentation']
      },
      {
        type: 'INFO',
        category: 'Regulation',
        message: 'New EU IoT cybersecurity certification scheme enters force',
        location: 'European Union',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:16',
        recommendations: ['Compliance assessment', 'Certification planning', 'Security review', 'Standard adoption']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIotData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        industryOverview: {
          ...prev.industryOverview,
          connectedDevices: Math.max(85000000000, Math.min(95000000000, prev.industryOverview.connectedDevices + Math.floor((Math.random() - 0.5) * 1000000))),
          dailyDataGenerated: Math.max(200000000, Math.min(300000000, prev.industryOverview.dailyDataGenerated + Math.floor((Math.random() - 0.5) * 5000000)))
        },
        deviceAnalytics: {
          ...prev.deviceAnalytics,
          dailyDataPoints: Math.max(500000000000, Math.min(600000000000, prev.deviceAnalytics.dailyDataPoints + Math.floor((Math.random() - 0.5) * 10000000))),
          deviceUptime: Math.max(92, Math.min(97, prev.deviceAnalytics.deviceUptime + (Math.random() - 0.5) * 1))
        }
      }));
    }, 10000);

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
      case 'HIGH': return 'text-red-400 bg-red-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'LOW': return 'text-green-400 bg-green-400/20';
      case 'POSITIVE': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPerformanceColor = (value, good = 80, excellent = 90) => {
    if (value >= excellent) return 'text-green-400';
    if (value >= good) return 'text-blue-400';
    if (value >= good * 0.8) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Cloud IoT Platform': return 'text-blue-400 bg-blue-400/20';
      case 'Enterprise IoT': return 'text-green-400 bg-green-400/20';
      case 'AI-Powered IoT': return 'text-purple-400 bg-purple-400/20';
      case 'Industrial IoT': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getVerticalColor = (vertical) => {
    switch (vertical) {
      case 'Smart Cities': return 'text-cyan-400';
      case 'Industrial IoT (IIoT)': return 'text-orange-400';
      case 'Smart Healthcare': return 'text-green-400';
      case 'Smart Agriculture': return 'text-yellow-400';
      default: return 'text-gray-400';
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000000000) {
      return `${(num / 1000000000000).toFixed(1)}T`;
    }
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
    if (amount >= 1000000000000) {
      return `€${(amount / 1000000000000).toFixed(1)}T`;
    }
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
    <div className="h-full bg-gradient-to-br from-cyan-900 via-slate-900 to-blue-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-cyan-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Internet of Things Intelligence Center</h1>
              <p className="text-cyan-300">IoT operations, smart device analytics & connected infrastructure monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-cyan-400">{iotData.currentTime}</div>
            <div className="text-cyan-300">IoT Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Wifi className="w-5 h-5 text-cyan-400 mr-2" />
                IoT Market Size
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(iotData.industryOverview.globalIotMarket)}</div>
            <div className="text-cyan-300 text-sm">IIoT: {formatCurrency(iotData.industryOverview.industrialIotMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-green-400 mr-2" />
                Connected Devices
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(iotData.industryOverview.connectedDevices)}</div>
            <div className="text-green-300 text-sm">Global Devices</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <BarChart3 className="w-5 h-5 text-blue-400 mr-2" />
                Daily Data
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(iotData.industryOverview.dailyDataGenerated)}GB</div>
            <div className="text-blue-300 text-sm">Generated Daily</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                IoT Platforms
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(iotData.industryOverview.iotPlatforms)}</div>
            <div className="text-purple-300 text-sm">Active Platforms</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
                Growth Rate
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(iotData.industryOverview.iotGrowthRate)}</div>
            <div className="text-orange-300 text-sm">Annual Growth</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-yellow-400 mr-2" />
                Enterprise Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatPercentage(iotData.industryOverview.enterpriseAdoption)}</div>
            <div className="text-yellow-300 text-sm">Enterprise</div>
          </div>
        </div>

        {/* Major IoT Platforms */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Wifi className="w-5 h-5 text-cyan-400 mr-2" />
            Major IoT Platforms Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Platform</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Connected Devices</th>
                  <th className="text-center p-3 text-slate-300">Daily Messages</th>
                  <th className="text-center p-3 text-slate-300">Security</th>
                  <th className="text-center p-3 text-slate-300">Performance</th>
                  <th className="text-center p-3 text-slate-300">Market Share</th>
                </tr>
              </thead>
              <tbody>
                {iotData.majorIotPlatforms.map((platform, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{platform.platform}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(platform.customers)} customers • {platform.regions} regions • {platform.supportedProtocols} protocols</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(platform.category)}`}>
                        {platform.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatNumber(platform.connectedDevices)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(platform.dailyMessages)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(platform.securityScore, 85, 95)}`}>
                      {formatPercentage(platform.securityScore)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(platform.performanceRating, 8.0, 9.0)}`}>
                      {platform.performanceRating.toFixed(1)}/10
                    </td>
                    <td className="p-3 text-center text-cyan-400">{formatPercentage(platform.marketShare)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* IoT Verticals & Security */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Target className="w-5 h-5 text-orange-400 mr-2" />
              IoT Verticals Intelligence
            </h3>
            <div className="space-y-4">
              {iotData.iotVerticals.map((vertical, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`text-white font-medium text-sm ${getVerticalColor(vertical.vertical)}`}>{vertical.vertical}</span>
                      <span className={`text-sm ${getPerformanceColor(vertical.efficiency, 70, 85)}`}>
                        {formatPercentage(vertical.efficiency)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(vertical.investmentSize)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">Devices: {formatNumber(vertical.connectedDevices)}</div>
                      <div className="text-purple-400">Projects: {formatNumber(vertical.activeProjects)}</div>
                      <div className="text-cyan-400">Cost Savings: {formatPercentage(vertical.costSavings)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">
                        {vertical.vertical.includes('Cities') ? 'Citizens: ' + formatNumber(vertical.citizensImpacted) :
                         vertical.vertical.includes('Industrial') ? 'Industries: ' + vertical.industriesServed :
                         vertical.vertical.includes('Healthcare') ? 'Patients: ' + formatNumber(vertical.patientsMonitored) :
                         vertical.vertical.includes('Agriculture') ? 'Farms: ' + formatNumber(vertical.farmsConnected) : 'Impact'}
                      </div>
                      <div className="text-orange-400">Sustainability: {formatPercentage(vertical.sustainabilityImpact)}</div>
                      <div className="text-yellow-400">
                        {vertical.vertical.includes('Cities') ? 'Satisfaction: ' + formatPercentage(vertical.citizenSatisfaction) :
                         vertical.vertical.includes('Industrial') ? 'Excellence: ' + formatPercentage(vertical.operationalExcellence) :
                         vertical.vertical.includes('Healthcare') ? 'Outcomes: ' + formatPercentage(vertical.patientOutcomes) :
                         vertical.vertical.includes('Agriculture') ? 'Yield: +' + formatPercentage(vertical.yieldImprovement) : 'Quality'}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {vertical.applications.map((app, aIndex) => (
                      <span key={aIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Shield className="w-5 h-5 text-red-400 mr-2" />
              IoT Security Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{formatNumber(iotData.iotSecurity.vulnerableDevices)}</div>
                <div className="text-red-300 text-sm">Vulnerable Devices</div>
                <div className="text-gray-400 text-xs mt-1">{iotData.iotSecurity.securityIncidents} incidents/year</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400">{formatPercentage(iotData.iotSecurity.securityMaturity)}</div>
                <div className="text-orange-300 text-sm">Security Maturity</div>
                <div className="text-gray-400 text-xs mt-1">industry average</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Security Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Encrypted Connections</span>
                  <span className="text-green-400">{formatPercentage(iotData.iotSecurity.encryptedConnections)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Authentication Enabled</span>
                  <span className="text-blue-400">{formatPercentage(iotData.iotSecurity.authenticationEnabled)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Security Updates</span>
                  <span className="text-purple-400">{formatNumber(iotData.iotSecurity.securityUpdates)}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Threat Detections</span>
                  <span className="text-cyan-400">{formatNumber(iotData.iotSecurity.threatDetections)}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Security Audits</span>
                  <span className="text-orange-400">{formatNumber(iotData.iotSecurity.securityAudits)}/year</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Response Time</span>
                  <span className="text-yellow-400">{iotData.iotSecurity.incidentResponseTime.toFixed(1)}h avg</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatNumber(iotData.iotSecurity.breachesAvoided)}</div>
                <div className="text-slate-300">Breaches Avoided</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-400">{formatCurrency(iotData.iotSecurity.securityInvestment)}</div>
                <div className="text-slate-300">Security Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Edge Computing & Device Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Zap className="w-5 h-5 text-purple-400 mr-2" />
              Edge Computing Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatNumber(iotData.edgeComputing.edgeDevices)}</div>
                <div className="text-purple-300 text-sm">Edge Devices</div>
                <div className="text-gray-400 text-xs mt-1">{formatNumber(iotData.edgeComputing.edgeDataCenters)} data centers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(iotData.edgeComputing.latencyReduction)}</div>
                <div className="text-green-300 text-sm">Latency Reduction</div>
                <div className="text-gray-400 text-xs mt-1">performance improvement</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Edge Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Local Processing</span>
                  <span className="text-green-400">{formatPercentage(iotData.edgeComputing.dataProcessedLocally)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Bandwidth Savings</span>
                  <span className="text-blue-400">{formatPercentage(iotData.edgeComputing.bandwidthSavings)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Real-Time Processing</span>
                  <span className="text-purple-400">{formatPercentage(iotData.edgeComputing.realTimeProcessing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Autonomous Operations</span>
                  <span className="text-cyan-400">{formatPercentage(iotData.edgeComputing.autonomousOperations)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Energy Efficiency</span>
                  <span className="text-green-400">{formatPercentage(iotData.edgeComputing.energyEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Edge Reliability</span>
                  <span className="text-orange-400">{formatPercentage(iotData.edgeComputing.edgeReliability)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-cyan-400">{formatCurrency(iotData.edgeComputing.edgeInvestment)}</div>
                <div className="text-slate-300">Edge Investment</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-indigo-400">{formatNumber(iotData.edgeComputing.edgeApplications)}</div>
                <div className="text-slate-300">Edge Applications</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-green-400 mr-2" />
              Device Analytics Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatNumber(iotData.deviceAnalytics.dailyDataPoints)}</div>
                <div className="text-green-300 text-sm">Daily Data Points</div>
                <div className="text-gray-400 text-xs mt-1">global collection</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(iotData.deviceAnalytics.deviceUptime)}</div>
                <div className="text-blue-300 text-sm">Device Uptime</div>
                <div className="text-gray-400 text-xs mt-1">average reliability</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Analytics Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Actively Monitored</span>
                  <span className="text-green-400">{formatPercentage(iotData.deviceAnalytics.activelyMonitored)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Anomaly Detection</span>
                  <span className="text-blue-400">{formatPercentage(iotData.deviceAnalytics.anomalyDetection)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Maintenance Reduction</span>
                  <span className="text-purple-400">{formatPercentage(iotData.deviceAnalytics.maintenanceReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Energy Optimization</span>
                  <span className="text-cyan-400">{formatPercentage(iotData.deviceAnalytics.energyOptimization)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Performance Gains</span>
                  <span className="text-orange-400">{formatPercentage(iotData.deviceAnalytics.performanceGains)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Data Quality</span>
                  <span className="text-yellow-400">{formatPercentage(iotData.deviceAnalytics.dataQuality)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-indigo-400">{formatNumber(iotData.deviceAnalytics.insightsGenerated)}</div>
                <div className="text-slate-300">Daily Insights</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatCurrency(iotData.deviceAnalytics.businessValue)}</div>
                <div className="text-slate-300">Business Value</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connectivity Technologies & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wifi className="w-5 h-5 text-blue-400 mr-2" />
              Connectivity Technologies Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(iotData.connectivityTechnologies).map(([tech, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-white text-sm font-medium uppercase">{tech}</span>
                      <span className="text-cyan-400 text-sm">{formatPercentage(data.marketShare)}</span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(data.devices)} devices</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <div className="text-blue-400">Reliability: {formatPercentage(data.reliability)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Energy Efficiency: {formatPercentage(data.energyEfficiency)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              IoT Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(iotData.sustainabilityMetrics.energyOptimization)}</div>
                <div className="text-green-300 text-sm">Energy Optimization</div>
                <div className="text-gray-400 text-xs mt-1">reduction achieved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(iotData.sustainabilityMetrics.resourceEfficiency)}</div>
                <div className="text-blue-300 text-sm">Resource Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">improvement rate</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Sustainability Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Carbon Reduction</span>
                  <span className="text-green-400">{formatPercentage(iotData.sustainabilityMetrics.carbonFootprintReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Waste Reduction</span>
                  <span className="text-blue-400">{formatPercentage(iotData.sustainabilityMetrics.wasteReduction)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Smart Grid Integration</span>
                  <span className="text-purple-400">{formatPercentage(iotData.sustainabilityMetrics.smartGridIntegration)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Renewable Energy</span>
                  <span className="text-cyan-400">{formatPercentage(iotData.sustainabilityMetrics.renewableEnergyUsage)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Green IoT Devices</span>
                  <span className="text-emerald-400">{formatPercentage(iotData.sustainabilityMetrics.greenIotDevices)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Circular Economy</span>
                  <span className="text-orange-400">{formatPercentage(iotData.sustainabilityMetrics.circularEconomy)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatCurrency(iotData.sustainabilityMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Sustainability Investment</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatPercentage(iotData.sustainabilityMetrics.environmentalCompliance)}</div>
                <div className="text-slate-300">Environmental Compliance</div>
              </div>
            </div>
          </div>
        </div>

        {/* IoT Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            IoT Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {iotData.iotAlerts.map((alert, index) => (
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
                    <div className="text-slate-300">Location: {alert.location}</div>
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
      </div>
    </div>
  );
}