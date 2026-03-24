// Virtual & Augmented Reality Intelligence Center - VR/AR Operations, Metaverse Analytics & Immersive Technology Monitoring
import { useState, useEffect } from 'react';
import { Eye, TrendingUp, TrendingDown, Users, Star, AlertTriangle, CheckCircle, Target, BarChart3, Gamepad2, Activity, Monitor } from 'lucide-react';

export default function VirtualAugmentedRealityIntelligenceCenter() {
  const [vrArData, setVrArData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    industryOverview: {
      globalVrArMarket: 123456789012, // EUR annually
      virtualRealityMarket: 67890123456,
      augmentedRealityMarket: 55566666666,
      metaverseMarket: 234567890123,
      totalVrArDevices: 234567890, // devices globally
      activeVrUsers: 123456789,
      activeArUsers: 345678901,
      vrArProfessionals: 1234567,
      immersiveContent: 89012345, // content pieces globally
      virtualWorlds: 2345678,
      arApplications: 12345678,
      metaverseUsers: 567890123,
      digitalAdoption: 67.8, // percentage
      immersionLevel: 84.6
    },
    majorVrArCompanies: [
      {
        company: 'Meta (Reality Labs)',
        category: 'VR/AR Platform',
        revenue: 13720000000, // EUR annual
        devicesShipped: 15000000, // annually
        activeUsers: 200000000,
        employees: 17000,
        countries: 25,
        services: ['Quest VR', 'Horizon Worlds', 'AR glasses', 'Developer tools'],
        digitalMaturity: 96.8,
        sustainabilityScore: 7.9,
        operationalEfficiency: 89.4,
        innovationScore: 9.6,
        stockPerformance: '+156.7%'
      },
      {
        company: 'Apple (Vision Pro)',
        category: 'Mixed Reality',
        revenue: 3500000000, // estimated AR/VR revenue
        devicesShipped: 500000,
        activeUsers: 450000,
        employees: 2500,
        countries: 40,
        services: ['Vision Pro', 'ARKit', 'visionOS', 'Spatial computing'],
        digitalMaturity: 98.9,
        sustainabilityScore: 9.4,
        operationalEfficiency: 94.7,
        innovationScore: 9.8,
        stockPerformance: '+48.2%'
      },
      {
        company: 'Microsoft (HoloLens)',
        category: 'Enterprise AR',
        revenue: 2345678901,
        devicesShipped: 300000,
        activeUsers: 275000,
        employees: 3200,
        countries: 35,
        services: ['HoloLens', 'Mixed Reality', 'Mesh', 'Enterprise solutions'],
        digitalMaturity: 94.3,
        sustainabilityScore: 8.7,
        operationalEfficiency: 91.8,
        innovationScore: 9.2,
        stockPerformance: '+31.5%'
      },
      {
        company: 'ByteDance (Pico)',
        category: 'VR Hardware',
        revenue: 1234567890,
        devicesShipped: 2000000,
        activeUsers: 18000000,
        employees: 1500,
        countries: 15,
        services: ['Pico VR', 'VR content', 'Enterprise VR', 'Social VR'],
        digitalMaturity: 87.6,
        sustainabilityScore: 7.4,
        operationalEfficiency: 84.9,
        innovationScore: 8.3,
        stockPerformance: 'Private'
      }
    ],
    vrArTechnologies: [
      {
        type: 'Virtual Reality (VR)',
        activeDevices: 78901234,
        totalSessions: 5678901234, // sessions annually
        averageSessionTime: 45.6, // minutes
        utilizationRate: 67.8, // percentage
        applications: ['Gaming', 'Training', 'Social VR', 'Entertainment'],
        immersionQuality: 89.4,
        userSatisfaction: 84.7,
        digitalAdoption: 78.9
      },
      {
        type: 'Augmented Reality (AR)',
        activeDevices: 345678901,
        totalSessions: 12345678901,
        averageSessionTime: 12.3,
        utilizationRate: 89.7,
        applications: ['Mobile AR', 'Navigation', 'Shopping', 'Industrial'],
        immersionQuality: 76.8,
        userSatisfaction: 81.4,
        digitalAdoption: 94.6
      },
      {
        type: 'Mixed Reality (MR)',
        activeDevices: 12345678,
        totalSessions: 234567890,
        averageSessionTime: 67.8,
        utilizationRate: 72.4,
        applications: ['Enterprise', 'Design', 'Collaboration', 'Training'],
        immersionQuality: 94.6,
        userSatisfaction: 91.2,
        digitalAdoption: 67.8
      },
      {
        type: 'Extended Reality (XR)',
        activeDevices: 23456789,
        totalSessions: 678901234,
        averageSessionTime: 34.5,
        utilizationRate: 81.3,
        applications: ['Cross-platform', 'Metaverse', 'Digital twins', 'Simulation'],
        immersionQuality: 87.9,
        userSatisfaction: 86.7,
        digitalAdoption: 84.2
      }
    ],
    immersiveOperations: {
      gaming: {
        activeUsers: 123456789,
        revenueGenerated: 45678901234, // EUR annually
        averagePlaytime: 78.9, // minutes per session
        engagementRate: 89.4, // percentage
        retentionRate: 67.8, // 30-day retention
        digitalIntegration: 94.6
      },
      enterprise: {
        activeUsers: 23456789,
        revenueGenerated: 12345678901,
        averageSessionTime: 124.5,
        productivityGains: 34.5, // percentage improvement
        trainingEffectiveness: 78.9, // percentage improvement
        digitalIntegration: 87.3
      },
      social: {
        activeUsers: 89012345,
        revenueGenerated: 6789012345,
        averageSessionTime: 56.7,
        socialInteractions: 234567890, // interactions per day
        communityGrowth: 45.6, // percentage annually
        digitalIntegration: 91.8
      },
      education: {
        activeUsers: 34567890,
        revenueGenerated: 2345678901,
        averageSessionTime: 89.4,
        learningImprovement: 56.7, // percentage
        engagementIncrease: 123.4, // percentage vs traditional
        digitalIntegration: 76.8
      }
    },
    immersivePerformance: {
      frameRate: 90.0, // FPS average
      latency: 20.0, // milliseconds
      resolutionQuality: 94.6, // percentage of optimal
      trackingAccuracy: 99.1, // percentage
      batteryLife: 2.4, // hours average
      thermalManagement: 87.9, // percentage optimal
      processingPower: 89.4, // percentage utilization
      memoryUsage: 78.9, // percentage
      networkBandwidth: 123.4, // Mbps average
      cloudRendering: 67.8, // percentage cloud-rendered
      edgeComputing: 45.6, // percentage edge-processed
      systemReliability: 94.7 // percentage uptime
    },
    sustainabilityMetrics: {
      energyEfficiency: 23.4, // percentage improvement
      carbonFootprint: 45.6, // percentage reduction
      sustainableMaterials: 34.5, // percentage of components
      deviceRecycling: 67.8, // percentage
      cloudEfficiency: 56.7, // percentage improvement
      greenDataCenters: 78.9, // percentage renewable energy
      virtualCommuting: 234.5, // percentage reduction in travel
      digitalReplacement: 123.4, // percentage physical events replaced
      sustainableDesign: 89.4, // percentage eco-friendly products
      carbonOffset: 12345678, // tonnes CO2 equivalent
      sustainabilityInvestment: 1234567890, // EUR annually
      circularEconomy: 45.6 // percentage adoption
    },
    metaverseApplications: {
      virtualCommerce: {
        transactions: 234567890, // annually
        revenue: 23456789012, // EUR
        averageSpend: 67.8, // EUR per user
        conversionRate: 12.3, // percentage
        virtualAssets: 89012345, // NFTs/digital goods
        platformGrowth: 156.7 // percentage annually
      },
      virtualEvents: {
        eventsHosted: 2345678,
        attendees: 123456789,
        averageAttendance: 567,
        engagementRate: 78.9, // percentage
        revenuePerEvent: 12345, // EUR average
        platformAdoption: 89.4
      },
      virtualWorkspaces: {
        activeWorkspaces: 345678,
        users: 23456789,
        meetingsPerDay: 1234567,
        productivityGain: 23.4, // percentage
        collaborationIncrease: 67.8, // percentage
        costReduction: 45.6
      },
      virtualEducation: {
        institutions: 23456,
        students: 12345678,
        courses: 234567,
        completionRate: 89.4, // percentage
        learningEffectiveness: 145.6, // percentage vs traditional
        accessibilityIncrease: 234.5
      }
    },
    innovationTrends: {
      spatialComputing: 89.4, // adoption percentage
      hapticFeedback: 67.8,
      eyeTracking: 56.7,
      brainInterface: 12.3,
      aiAssistants: 94.6,
      photorealisticRendering: 78.9,
      realTimeRaytracing: 45.6,
      neuralRendering: 34.5,
      volumetricCapture: 67.8,
      cloudStreaming: 89.7,
      edgeRendering: 72.4,
      quantumVisualization: 8.9
    },
    vrArAlerts: [
      {
        type: 'CRITICAL',
        category: 'Performance',
        message: 'VR headset overheating detected in 15% of devices - thermal management failure',
        location: 'Consumer VR Devices',
        impact: 'HIGH',
        actionRequired: true,
        timestamp: '08:25',
        recommendations: ['Thermal redesign', 'Firmware update', 'Usage guidelines', 'Hardware recall consideration']
      },
      {
        type: 'WARNING',
        category: 'User Experience',
        message: 'Motion sickness reports increased 8% - tracking accuracy degradation detected',
        location: 'VR Gaming Platforms',
        impact: 'MEDIUM',
        actionRequired: true,
        timestamp: '08:22',
        recommendations: ['Tracking calibration', 'Comfort settings', 'Frame rate optimization', 'User education']
      },
      {
        type: 'SUCCESS',
        category: 'Innovation',
        message: 'New spatial computing breakthrough - hand tracking accuracy improved to 99.8%',
        location: 'Apple Vision Pro',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '08:19',
        recommendations: ['Technology integration', 'Developer documentation', 'API updates', 'Feature rollout']
      },
      {
        type: 'INFO',
        category: 'Market',
        message: 'Metaverse user engagement reaches all-time high - 2.3B hours monthly',
        location: 'Global Platforms',
        impact: 'POSITIVE',
        actionRequired: false,
        timestamp: '08:16',
        recommendations: ['Infrastructure scaling', 'Content expansion', 'Monetization optimization', 'Quality maintenance']
      }
    ]
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setVrArData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        immersivePerformance: {
          ...prev.immersivePerformance,
          frameRate: Math.max(75, Math.min(120, prev.immersivePerformance.frameRate + (Math.random() - 0.5) * 5)),
          latency: Math.max(15, Math.min(35, prev.immersivePerformance.latency + (Math.random() - 0.5) * 3))
        },
        immersiveOperations: {
          ...prev.immersiveOperations,
          gaming: {
            ...prev.immersiveOperations.gaming,
            engagementRate: Math.max(85, Math.min(95, prev.immersiveOperations.gaming.engagementRate + (Math.random() - 0.5) * 2)),
            averagePlaytime: Math.max(70, Math.min(90, prev.immersiveOperations.gaming.averagePlaytime + (Math.random() - 0.5) * 3))
          }
        }
      }));
    }, 8000);

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
      case 'VR/AR Platform': return 'text-purple-400 bg-purple-400/20';
      case 'Mixed Reality': return 'text-green-400 bg-green-400/20';
      case 'Enterprise AR': return 'text-blue-400 bg-blue-400/20';
      case 'VR Hardware': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getTechnologyColor = (technology) => {
    switch (technology) {
      case 'Virtual Reality (VR)': return 'text-purple-400';
      case 'Augmented Reality (AR)': return 'text-green-400';
      case 'Mixed Reality (MR)': return 'text-blue-400';
      case 'Extended Reality (XR)': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getApplicationColor = (application) => {
    switch (application) {
      case 'virtualCommerce': return 'text-green-400 bg-green-400/20';
      case 'virtualEvents': return 'text-blue-400 bg-blue-400/20';
      case 'virtualWorkspaces': return 'text-purple-400 bg-purple-400/20';
      case 'virtualEducation': return 'text-orange-400 bg-orange-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
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
    <div className="h-full bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-purple-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">VR/AR Intelligence Center</h1>
              <p className="text-purple-300">Virtual/Augmented reality operations, metaverse analytics & immersive technology monitoring</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-purple-400">{vrArData.currentTime}</div>
            <div className="text-purple-300">Immersive Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Industry Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                VR/AR Market
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatCurrency(vrArData.industryOverview.globalVrArMarket)}</div>
            <div className="text-purple-300 text-sm">VR: {formatCurrency(vrArData.industryOverview.virtualRealityMarket)}</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Eye className="w-5 h-5 text-blue-400 mr-2" />
                Active Devices
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(vrArData.industryOverview.totalVrArDevices)}</div>
            <div className="text-blue-300 text-sm">VR/AR Devices</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Users className="w-5 h-5 text-green-400 mr-2" />
                VR Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(vrArData.industryOverview.activeVrUsers)}</div>
            <div className="text-green-300 text-sm">Active Users</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Monitor className="w-5 h-5 text-cyan-400 mr-2" />
                AR Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(vrArData.industryOverview.activeArUsers)}</div>
            <div className="text-cyan-300 text-sm">Active Users</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-orange-400 mr-2" />
                Digital Adoption
              </h3>
            </div>
            <div className="text-3xl font-bold text-orange-400">{formatPercentage(vrArData.industryOverview.digitalAdoption)}</div>
            <div className="text-orange-300 text-sm">Industry Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Gamepad2 className="w-5 h-5 text-yellow-400 mr-2" />
                Metaverse Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatNumber(vrArData.industryOverview.metaverseUsers)}</div>
            <div className="text-yellow-300 text-sm">Global Users</div>
          </div>
        </div>

        {/* Major VR/AR Companies */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Eye className="w-5 h-5 text-purple-400 mr-2" />
            Major VR/AR Companies Intelligence
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-600/50">
                  <th className="text-left p-3 text-slate-300">Company</th>
                  <th className="text-center p-3 text-slate-300">Category</th>
                  <th className="text-center p-3 text-slate-300">Revenue</th>
                  <th className="text-center p-3 text-slate-300">Devices Shipped</th>
                  <th className="text-center p-3 text-slate-300">Active Users</th>
                  <th className="text-center p-3 text-slate-300">Efficiency</th>
                  <th className="text-center p-3 text-slate-300">Innovation</th>
                </tr>
              </thead>
              <tbody>
                {vrArData.majorVrArCompanies.map((company, index) => (
                  <tr key={index} className="border-b border-slate-700/30 hover:bg-slate-700/20">
                    <td className="p-3">
                      <div className="text-white font-medium">{company.company}</div>
                      <div className="text-slate-400 text-xs">{formatNumber(company.employees)} employees • {company.countries} countries • {company.stockPerformance}</div>
                    </td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${getCategoryColor(company.category)}`}>
                        {company.category}
                      </span>
                    </td>
                    <td className="p-3 text-center text-green-400">{formatCurrency(company.revenue)}</td>
                    <td className="p-3 text-center text-blue-400">{formatNumber(company.devicesShipped)}/year</td>
                    <td className="p-3 text-center text-purple-400">{formatNumber(company.activeUsers)}</td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.operationalEfficiency, 85, 90)}`}>
                      {formatPercentage(company.operationalEfficiency)}
                    </td>
                    <td className={`p-3 text-center font-medium ${getPerformanceColor(company.innovationScore, 8.0, 9.0)}`}>
                      {company.innovationScore.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* VR/AR Technologies & Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Monitor className="w-5 h-5 text-green-400 mr-2" />
              VR/AR Technologies Intelligence
            </h3>
            <div className="space-y-4">
              {vrArData.vrArTechnologies.map((tech, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`text-white font-medium text-sm ${getTechnologyColor(tech.type)}`}>{tech.type}</span>
                      <span className={`text-sm ${getPerformanceColor(tech.utilizationRate, 70, 85)}`}>
                        {formatPercentage(tech.utilizationRate)}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(tech.activeDevices)} devices</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-purple-400">Sessions: {formatNumber(tech.totalSessions)}/year</div>
                      <div className="text-cyan-400">Avg Time: {tech.averageSessionTime.toFixed(1)}min</div>
                      <div className="text-blue-400">Immersion: {formatPercentage(tech.immersionQuality)}</div>
                    </div>
                    <div>
                      <div className="text-green-400">Satisfaction: {formatPercentage(tech.userSatisfaction)}</div>
                      <div className="text-orange-400">Digital: {formatPercentage(tech.digitalAdoption)}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {tech.applications.map((app, aIndex) => (
                      <span key={aIndex} className="px-2 py-1 bg-slate-600/50 text-slate-300 rounded text-xs">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Activity className="w-5 h-5 text-cyan-400 mr-2" />
              Immersive Operations Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(vrArData.immersiveOperations).map(([operation, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-white text-sm font-medium capitalize">{operation}</span>
                    </div>
                    <span className="text-green-400 text-sm">{formatNumber(data.activeUsers)} users</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <div className="text-blue-400">Revenue: {formatCurrency(data.revenueGenerated)}</div>
                      <div className="text-purple-400">Session: {data.averageSessionTime.toFixed(1)}min</div>
                      <div className="text-cyan-400">
                        {operation.includes('gaming') ? 'Engagement: ' + formatPercentage(data.engagementRate) :
                         operation.includes('enterprise') ? 'Productivity: +' + formatPercentage(data.productivityGains) :
                         operation.includes('social') ? 'Interactions: ' + formatNumber(data.socialInteractions) + '/day' :
                         operation.includes('education') ? 'Learning: +' + formatPercentage(data.learningImprovement) : 'Metric'}
                      </div>
                    </div>
                    <div>
                      <div className="text-green-400">
                        {operation.includes('gaming') ? 'Retention: ' + formatPercentage(data.retentionRate) :
                         operation.includes('enterprise') ? 'Training: +' + formatPercentage(data.trainingEffectiveness) :
                         operation.includes('social') ? 'Growth: +' + formatPercentage(data.communityGrowth) :
                         operation.includes('education') ? 'Engagement: +' + formatPercentage(data.engagementIncrease) : 'Performance'}
                      </div>
                      <div className="text-orange-400">Digital: {formatPercentage(data.digitalIntegration)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance & Sustainability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <BarChart3 className="w-5 h-5 text-yellow-400 mr-2" />
              Immersive Performance Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{vrArData.immersivePerformance.frameRate.toFixed(0)} FPS</div>
                <div className="text-yellow-300 text-sm">Frame Rate</div>
                <div className="text-gray-400 text-xs mt-1">{vrArData.immersivePerformance.latency.toFixed(1)}ms latency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(vrArData.immersivePerformance.trackingAccuracy)}</div>
                <div className="text-green-300 text-sm">Tracking Accuracy</div>
                <div className="text-gray-400 text-xs mt-1">{vrArData.immersivePerformance.batteryLife.toFixed(1)}h battery</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Resolution Quality</span>
                  <span className="text-green-400">{formatPercentage(vrArData.immersivePerformance.resolutionQuality)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Thermal Management</span>
                  <span className="text-blue-400">{formatPercentage(vrArData.immersivePerformance.thermalManagement)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Processing Power</span>
                  <span className="text-purple-400">{formatPercentage(vrArData.immersivePerformance.processingPower)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Memory Usage</span>
                  <span className="text-cyan-400">{formatPercentage(vrArData.immersivePerformance.memoryUsage)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cloud Rendering</span>
                  <span className="text-indigo-400">{formatPercentage(vrArData.immersivePerformance.cloudRendering)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Edge Computing</span>
                  <span className="text-pink-400">{formatPercentage(vrArData.immersivePerformance.edgeComputing)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-orange-400">{vrArData.immersivePerformance.networkBandwidth.toFixed(0)} Mbps</div>
                <div className="text-slate-300">Network Bandwidth</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatPercentage(vrArData.immersivePerformance.systemReliability)}</div>
                <div className="text-slate-300">System Reliability</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
              VR/AR Sustainability Intelligence
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(vrArData.sustainabilityMetrics.energyEfficiency)}</div>
                <div className="text-green-300 text-sm">Energy Efficiency</div>
                <div className="text-gray-400 text-xs mt-1">improvement rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{formatPercentage(vrArData.sustainabilityMetrics.carbonFootprint)}</div>
                <div className="text-blue-300 text-sm">Carbon Reduction</div>
                <div className="text-gray-400 text-xs mt-1">vs baseline</div>
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <h4 className="text-white text-sm font-medium">Environmental Metrics</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Sustainable Materials</span>
                  <span className="text-green-400">{formatPercentage(vrArData.sustainabilityMetrics.sustainableMaterials)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Device Recycling</span>
                  <span className="text-blue-400">{formatPercentage(vrArData.sustainabilityMetrics.deviceRecycling)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cloud Efficiency</span>
                  <span className="text-purple-400">{formatPercentage(vrArData.sustainabilityMetrics.cloudEfficiency)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Green Data Centers</span>
                  <span className="text-cyan-400">{formatPercentage(vrArData.sustainabilityMetrics.greenDataCenters)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Virtual Commuting</span>
                  <span className="text-emerald-400">{formatPercentage(vrArData.sustainabilityMetrics.virtualCommuting)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Digital Replacement</span>
                  <span className="text-indigo-400">{formatPercentage(vrArData.sustainabilityMetrics.digitalReplacement)}</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-emerald-400">{formatNumber(vrArData.sustainabilityMetrics.carbonOffset)}</div>
                <div className="text-slate-300">Carbon Offset (t CO₂)</div>
              </div>
              <div className="bg-slate-700/30 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-400">{formatCurrency(vrArData.sustainabilityMetrics.sustainabilityInvestment)}</div>
                <div className="text-slate-300">Green Investment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metaverse Applications & Innovation Trends */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Gamepad2 className="w-5 h-5 text-orange-400 mr-2" />
              Metaverse Applications Intelligence
            </h3>
            <div className="space-y-3">
              {Object.entries(vrArData.metaverseApplications).map(([application, data], index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className={`px-2 py-1 rounded text-sm ${getApplicationColor(application)}`}>
                        {application.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                    </div>
                    <span className="text-green-400 text-sm">{formatCurrency(data.revenue || data.revenuePerEvent || 0)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-xs mb-2">
                    <div>
                      <div className="text-blue-400">
                        {application.includes('Commerce') ? 'Transactions: ' + formatNumber(data.transactions) :
                         application.includes('Events') ? 'Events: ' + formatNumber(data.eventsHosted) :
                         application.includes('Workspaces') ? 'Workspaces: ' + formatNumber(data.activeWorkspaces) :
                         application.includes('Education') ? 'Institutions: ' + formatNumber(data.institutions) : 'Volume'}
                      </div>
                      <div className="text-purple-400">
                        {application.includes('Commerce') ? 'Avg Spend: €' + data.averageSpend.toFixed(0) :
                         application.includes('Events') ? 'Avg Attendance: ' + data.averageAttendance :
                         application.includes('Workspaces') ? 'Users: ' + formatNumber(data.users) :
                         application.includes('Education') ? 'Students: ' + formatNumber(data.students) : 'Users'}
                      </div>
                    </div>
                    <div>
                      <div className="text-green-400">
                        {application.includes('Commerce') ? 'Growth: +' + formatPercentage(data.platformGrowth) :
                         application.includes('Events') ? 'Engagement: ' + formatPercentage(data.engagementRate) :
                         application.includes('Workspaces') ? 'Productivity: +' + formatPercentage(data.productivityGain) :
                         application.includes('Education') ? 'Completion: ' + formatPercentage(data.completionRate) : 'Performance'}
                      </div>
                      <div className="text-orange-400">
                        {application.includes('Commerce') ? 'Conversion: ' + formatPercentage(data.conversionRate) :
                         application.includes('Events') ? 'Adoption: ' + formatPercentage(data.platformAdoption) :
                         application.includes('Workspaces') ? 'Cost Reduction: -' + formatPercentage(data.costReduction) :
                         application.includes('Education') ? 'Effectiveness: +' + formatPercentage(data.learningEffectiveness) : 'Efficiency'}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Eye className="w-5 h-5 text-cyan-400 mr-2" />
              VR/AR Innovation Trends Intelligence
            </h3>
            <div className="space-y-2">
              <h4 className="text-white text-sm font-medium">Technology Adoption</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">AI Assistants</span>
                  <span className="text-green-400">{formatPercentage(vrArData.innovationTrends.aiAssistants)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Spatial Computing</span>
                  <span className="text-blue-400">{formatPercentage(vrArData.innovationTrends.spatialComputing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Cloud Streaming</span>
                  <span className="text-purple-400">{formatPercentage(vrArData.innovationTrends.cloudStreaming)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Photorealistic Rendering</span>
                  <span className="text-cyan-400">{formatPercentage(vrArData.innovationTrends.photorealisticRendering)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Edge Rendering</span>
                  <span className="text-emerald-400">{formatPercentage(vrArData.innovationTrends.edgeRendering)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Volumetric Capture</span>
                  <span className="text-pink-400">{formatPercentage(vrArData.innovationTrends.volumetricCapture)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Haptic Feedback</span>
                  <span className="text-orange-400">{formatPercentage(vrArData.innovationTrends.hapticFeedback)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Eye Tracking</span>
                  <span className="text-indigo-400">{formatPercentage(vrArData.innovationTrends.eyeTracking)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Real-Time Raytracing</span>
                  <span className="text-lime-400">{formatPercentage(vrArData.innovationTrends.realTimeRaytracing)}</span>
                </div>
                <div className="flex items-center justify-between bg-slate-700/30 rounded p-2">
                  <span className="text-slate-300">Neural Rendering</span>
                  <span className="text-violet-400">{formatPercentage(vrArData.innovationTrends.neuralRendering)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VR/AR Intelligence Alerts */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
            VR/AR Intelligence Alerts
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {vrArData.vrArAlerts.map((alert, index) => (
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