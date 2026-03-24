// Mobile Intelligence Center - Mobile Analytics & App Performance Optimization
import { useState, useEffect } from 'react';
import { Smartphone, Tablet, Wifi, Battery, Signal, Download, Users, TrendingUp, AlertTriangle, CheckCircle, Activity, Target } from 'lucide-react';

export default function MobileIntelligenceCenter() {
  const [mobileData, setMobileData] = useState({
    currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
    mobileOverview: {
      totalMobileUsers: 892456,
      activeMobileUsers: 234567,
      mobileSessionsToday: 567890,
      appInstalls: 123456,
      appUninstalls: 8901,
      pushNotificationsSent: 345678,
      pushOpenRate: 34.7,
      inAppPurchases: 23456,
      averageSessionLength: 298,
      screenTime: 456,
      crashRate: 0.12,
      anrRate: 0.08,
      loadTime: 2.3,
      batteryImpact: 'Low',
      dataUsage: 45.7,
      offlineCapability: 78.9
    },
    deviceBreakdown: [
      {
        type: 'Smartphones',
        count: 745623,
        percentage: 83.5,
        operatingSystems: {
          android: {
            percentage: 64.2,
            versions: {
              'Android 14': 28.9,
              'Android 13': 23.7,
              'Android 12': 18.4,
              'Android 11': 12.3,
              'Older': 16.7
            },
            performance: {
              avgLoadTime: 2.1,
              crashRate: 0.15,
              batteryDrain: 'Medium',
              memoryUsage: 234
            },
            topDevices: ['Samsung Galaxy S24', 'Google Pixel 8', 'OnePlus 12']
          },
          ios: {
            percentage: 35.8,
            versions: {
              'iOS 17.4': 45.6,
              'iOS 17.3': 23.4,
              'iOS 16.x': 18.9,
              'iOS 15.x': 8.7,
              'Older': 3.4
            },
            performance: {
              avgLoadTime: 1.8,
              crashRate: 0.08,
              batteryDrain: 'Low',
              memoryUsage: 198
            },
            topDevices: ['iPhone 15 Pro', 'iPhone 15', 'iPhone 14 Pro']
          }
        },
        screenSizes: [
          { size: '6.0" - 6.5"', percentage: 45.6, performance: 'Excellent' },
          { size: '6.5" - 7.0"', percentage: 28.9, performance: 'Good' },
          { size: '5.5" - 6.0"', percentage: 18.7, performance: 'Good' },
          { size: '< 5.5"', percentage: 6.8, performance: 'Fair' }
        ],
        connectivity: {
          wifi: 67.8,
          cellular5G: 34.5,
          cellular4G: 52.3,
          cellular3G: 13.2,
          offline: 8.9
        },
        engagement: {
          avgSessionDuration: 312,
          dailyActiveUsers: 567890,
          weeklyRetention: 78.9,
          monthlyRetention: 45.6,
          pushOptInRate: 67.8
        }
      },
      {
        type: 'Tablets',
        count: 146833,
        percentage: 16.5,
        operatingSystems: {
          ios: {
            percentage: 72.3,
            versions: {
              'iPadOS 17.4': 52.3,
              'iPadOS 17.3': 25.7,
              'iPadOS 16.x': 15.6,
              'iPadOS 15.x': 4.8,
              'Older': 1.6
            },
            performance: {
              avgLoadTime: 1.4,
              crashRate: 0.05,
              batteryDrain: 'Low',
              memoryUsage: 345
            },
            topDevices: ['iPad Pro 12.9"', 'iPad Air', 'iPad Pro 11"']
          },
          android: {
            percentage: 27.7,
            versions: {
              'Android 14': 34.5,
              'Android 13': 28.9,
              'Android 12': 21.2,
              'Android 11': 10.4,
              'Older': 5.0
            },
            performance: {
              avgLoadTime: 1.9,
              crashRate: 0.09,
              batteryDrain: 'Medium',
              memoryUsage: 278
            },
            topDevices: ['Samsung Galaxy Tab S9', 'Lenovo Tab P12', 'Google Pixel Tablet']
          }
        },
        screenSizes: [
          { size: '10" - 13"', percentage: 78.9, performance: 'Excellent' },
          { size: '8" - 10"', percentage: 15.6, performance: 'Good' },
          { size: '7" - 8"', percentage: 5.5, performance: 'Fair' }
        ],
        connectivity: {
          wifi: 89.4,
          cellularBuiltIn: 23.4,
          hotspot: 34.7,
          offline: 12.3
        },
        engagement: {
          avgSessionDuration: 567,
          dailyActiveUsers: 89012,
          weeklyRetention: 82.4,
          monthlyRetention: 52.1,
          pushOptInRate: 45.6
        }
      }
    ],
    appPerformance: [
      {
        metric: 'App Launch Time',
        value: 2.3,
        target: 2.0,
        status: 'WARNING',
        trend: '+0.2s',
        deviceBreakdown: {
          'High-end': 1.8,
          'Mid-range': 2.1,
          'Low-end': 3.2,
          'Tablets': 1.6
        },
        optimizations: ['Code splitting', 'Image optimization', 'Lazy loading'],
        impact: 'User retention affected by 8%',
        recommendation: 'Implement progressive loading for heavy components'
      },
      {
        metric: 'Crash Rate',
        value: 0.12,
        target: 0.1,
        status: 'WARNING',
        trend: '+0.02%',
        deviceBreakdown: {
          'Android': 0.15,
          'iOS': 0.08,
          'Tablets': 0.07,
          'Legacy': 0.23
        },
        topCauses: ['Memory leaks', 'Network timeouts', 'UI thread blocking'],
        impact: 'User experience degradation, negative reviews',
        recommendation: 'Focus on Android memory management optimization'
      },
      {
        metric: 'ANR Rate',
        value: 0.08,
        target: 0.05,
        status: 'CRITICAL',
        trend: '+0.03%',
        deviceBreakdown: {
          'Android': 0.08,
          'iOS': 0,
          'Low-end Android': 0.15,
          'Mid-range Android': 0.05
        },
        causes: ['Main thread blocking', 'Heavy computations', 'Synchronous I/O'],
        impact: 'App responsiveness severely impacted',
        recommendation: 'Move heavy operations to background threads'
      },
      {
        metric: 'Battery Impact',
        value: 'Low',
        target: 'Low',
        status: 'EXCELLENT',
        trend: 'Stable',
        breakdown: {
          'Screen': '45%',
          'CPU': '25%',
          'Network': '20%',
          'GPS': '10%'
        },
        optimizations: ['Background task optimization', 'Location efficiency'],
        comparison: '30% better than category average',
        recommendation: 'Maintain current optimization strategies'
      },
      {
        metric: 'Memory Usage',
        value: 234,
        target: 200,
        status: 'WARNING',
        trend: '+12MB',
        deviceBreakdown: {
          '4GB RAM': 289,
          '6GB RAM': 234,
          '8GB+ RAM': 198,
          'Tablets': 345
        },
        leaks: ['Image cache', 'Event listeners', 'Background services'],
        impact: 'Potential app kills on low-memory devices',
        recommendation: 'Implement aggressive memory cleanup strategies'
      },
      {
        metric: 'Network Performance',
        value: 1.2,
        target: 1.5,
        status: 'GOOD',
        trend: '-0.3s',
        connectionTypes: {
          'WiFi': 0.8,
          '5G': 1.0,
          '4G': 1.4,
          '3G': 2.8,
          'Slow': 4.5
        },
        optimizations: ['Request batching', 'Compression', 'CDN usage'],
        cacheHitRate: 78.9,
        recommendation: 'Expand offline capability coverage'
      }
    ],
    userBehaviorMobile: [
      {
        pattern: 'Power Mobile Users',
        userCount: 89234,
        percentage: 10.0,
        sessionLength: 892,
        screenTime: 234,
        features: ['Push notifications', 'Offline mode', 'Dark mode', 'Widgets'],
        revenue: 234567,
        pushEngagement: 67.8,
        inAppPurchases: 8.9,
        devicePreference: 'High-end smartphones',
        timeOfUse: ['Morning commute', 'Lunch break', 'Evening'],
        satisfaction: 9.1,
        retention: 94.7,
        supportTickets: 0.3,
        churnRisk: 'LOW'
      },
      {
        pattern: 'Casual Mobile Users',
        userCount: 534567,
        percentage: 59.9,
        sessionLength: 189,
        screenTime: 78,
        features: ['Basic functionality', 'Social sharing', 'Search'],
        revenue: 123456,
        pushEngagement: 23.4,
        inAppPurchases: 2.3,
        devicePreference: 'Mid-range smartphones',
        timeOfUse: ['Evening', 'Weekends'],
        satisfaction: 7.8,
        retention: 67.8,
        supportTickets: 1.2,
        churnRisk: 'MEDIUM'
      },
      {
        pattern: 'Tablet Enthusiasts',
        userCount: 123456,
        percentage: 13.8,
        sessionLength: 456,
        screenTime: 189,
        features: ['Multi-tasking', 'Media consumption', 'Productivity'],
        revenue: 189012,
        pushEngagement: 45.6,
        inAppPurchases: 5.7,
        devicePreference: 'Large screen tablets',
        timeOfUse: ['Home evening', 'Weekends'],
        satisfaction: 8.6,
        retention: 78.9,
        supportTickets: 0.8,
        churnRisk: 'LOW'
      },
      {
        pattern: 'Quick Task Users',
        userCount: 145199,
        percentage: 16.3,
        sessionLength: 67,
        screenTime: 23,
        features: ['Quick actions', 'Notifications', 'Widgets'],
        revenue: 45678,
        pushEngagement: 12.3,
        inAppPurchases: 1.2,
        devicePreference: 'Any device',
        timeOfUse: ['Throughout day', 'Brief sessions'],
        satisfaction: 6.9,
        retention: 43.2,
        supportTickets: 2.1,
        churnRisk: 'HIGH'
      }
    ],
    mobileAlerts: [
      {
        type: 'CRITICAL',
        category: 'Performance',
        message: 'ANR rate exceeded 0.05% threshold - app responsiveness severely impacted',
        metric: 'ANR Rate',
        currentValue: '0.08%',
        threshold: '0.05%',
        impact: 'App becomes unresponsive, potential force closes, negative user reviews',
        affectedDevices: 'Android devices, especially low-end',
        severity: 'HIGH',
        timestamp: '10:22',
        trendDirection: 'WORSENING',
        detectedBy: 'Performance Monitor',
        recommendation: 'Move heavy operations off main thread, implement async processing',
        urgency: 'IMMEDIATE',
        escalation: 'MOBILE_TEAM',
        estimatedUserImpact: '145,000 users',
        technicalDetails: 'Main thread blocking operations detected in image processing',
        rollbackPlan: 'Revert to v2.1.3 if no fix within 2 hours'
      },
      {
        type: 'HIGH',
        category: 'Stability',
        message: 'Mobile crash rate increased 20% in last 24 hours - user retention at risk',
        metric: 'Crash Rate',
        currentValue: '0.12%',
        threshold: '0.10%',
        impact: 'Reduced user satisfaction, app store rating decline, churn increase',
        affectedDevices: 'Primarily Android 12 and below',
        severity: 'MEDIUM',
        timestamp: '10:20',
        trendDirection: 'INCREASING',
        detectedBy: 'Stability Monitor',
        recommendation: 'Prioritize memory leak fixes, implement graceful error handling',
        urgency: 'HIGH',
        escalation: 'STABILITY_TEAM',
        estimatedUserImpact: '89,000 users',
        topCrashCause: 'OutOfMemoryError in image cache',
        hotfixAvailable: true
      },
      {
        type: 'WARNING',
        category: 'Battery',
        message: 'Background battery usage increased - potential app store policy violation',
        metric: 'Battery Impact',
        currentValue: 'Medium',
        previousValue: 'Low',
        impact: 'User complaints, potential app store removal, device performance impact',
        affectedDevices: 'All devices with background refresh enabled',
        severity: 'MEDIUM',
        timestamp: '10:18',
        trendDirection: 'WORSENING',
        detectedBy: 'Battery Monitor',
        recommendation: 'Audit background tasks, implement smart sync scheduling',
        urgency: 'MEDIUM',
        escalation: 'OPTIMIZATION_TEAM',
        policyRisk: 'App store review required',
        backgroundTasks: '15% increase in CPU usage'
      },
      {
        type: 'INFO',
        category: 'Growth',
        message: 'iOS user engagement reached all-time high - 94.7% retention achieved',
        metric: 'User Retention',
        currentValue: '94.7%',
        previousBest: '91.2%',
        impact: 'Increased revenue potential, improved app store visibility, positive reviews',
        platform: 'iOS',
        severity: 'POSITIVE',
        timestamp: '10:15',
        trendDirection: 'IMPROVING',
        detectedBy: 'Engagement Analytics',
        successFactors: ['New onboarding flow', 'Personalized content', 'Push optimization'],
        opportunity: 'CROSS_PLATFORM_OPTIMIZATION',
        revenueImpact: '+$45,000/month projected',
        recommendation: 'Apply iOS success patterns to Android platform'
      }
    ],
    pushNotifications: {
      totalSent: 345678,
      delivered: 321456,
      opened: 111567,
      deliveryRate: 93.0,
      openRate: 34.7,
      clickThroughRate: 8.9,
      optInRate: 67.8,
      optOutRate: 2.3,
      byCategory: [
        {
          category: 'Promotional',
          sent: 156789,
          openRate: 23.4,
          ctr: 5.6,
          revenue: 89012,
          bestTime: '7 PM - 9 PM',
          frequency: 'Weekly'
        },
        {
          category: 'Transactional',
          sent: 98765,
          openRate: 67.8,
          ctr: 23.4,
          revenue: 45678,
          bestTime: 'Immediate',
          frequency: 'Event-driven'
        },
        {
          category: 'News/Updates',
          sent: 67890,
          openRate: 34.5,
          ctr: 12.3,
          revenue: 23456,
          bestTime: '9 AM - 11 AM',
          frequency: 'Daily'
        },
        {
          category: 'Reminders',
          sent: 22234,
          openRate: 45.6,
          ctr: 15.7,
          revenue: 12345,
          bestTime: '6 PM - 8 PM',
          frequency: 'Bi-weekly'
        }
      ],
      devicePerformance: {
        ios: {
          deliveryRate: 96.7,
          openRate: 42.1,
          optInRate: 78.9
        },
        android: {
          deliveryRate: 89.4,
          openRate: 28.7,
          optInRate: 58.9
        }
      }
    },
    appStoreMetrics: {
      ratings: {
        average: 4.6,
        total: 234567,
        distribution: {
          5: 67.8,
          4: 18.9,
          3: 8.7,
          2: 2.8,
          1: 1.8
        }
      },
      reviews: {
        total: 45678,
        positive: 78.9,
        neutral: 15.6,
        negative: 5.5,
        sentiment: 'Positive',
        topKeywords: ['fast', 'useful', 'intuitive', 'reliable']
      },
      downloads: {
        total: 2345678,
        organic: 1876543,
        paid: 234567,
        referral: 234568,
        conversionRate: 23.4
      },
      updates: {
        adoptionRate: 78.9,
        averageAdoptionTime: '5.2 days',
        forceUpdateCompliance: 94.6
      }
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileData(prev => ({
        ...prev,
        currentTime: new Date().toLocaleString('en-GB', { timeZone: 'Europe/Lisbon' }),
        mobileOverview: {
          ...prev.mobileOverview,
          activeMobileUsers: Math.max(220000, Math.min(250000, prev.mobileOverview.activeMobileUsers + Math.floor((Math.random() - 0.5) * 5000))),
          pushOpenRate: Math.max(30.0, Math.min(40.0, prev.mobileOverview.pushOpenRate + (Math.random() - 0.5) * 2.0)),
          loadTime: Math.max(2.0, Math.min(3.0, prev.mobileOverview.loadTime + (Math.random() - 0.5) * 0.3))
        }
      }));
    }, 45000);

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
      case 'GOOD': return 'text-green-400 bg-green-400/20';
      case 'WARNING': return 'text-yellow-400 bg-yellow-400/20';
      case 'CRITICAL': return 'text-red-400 bg-red-400/20';
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

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(0)}K`;
    }
    return num.toLocaleString();
  };

  const formatPercentage = (value) => `${value.toFixed(1)}%`;
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-900 via-slate-900 to-cyan-900 text-white overflow-auto">
      {/* Header */}
      <div className="p-6 border-b border-blue-800/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Mobile Intelligence Center</h1>
              <p className="text-blue-300">Mobile analytics & app performance optimization</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-mono text-blue-400">{mobileData.currentTime}</div>
            <div className="text-blue-300">Mobile Command</div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Mobile Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
                Mobile Users
              </h3>
            </div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(mobileData.mobileOverview.activeMobileUsers)}</div>
            <div className="text-blue-300 text-sm">{formatNumber(mobileData.mobileOverview.totalMobileUsers)} Total</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Activity className="w-5 h-5 text-cyan-400 mr-2" />
                Sessions
              </h3>
            </div>
            <div className="text-3xl font-bold text-cyan-400">{formatNumber(mobileData.mobileOverview.mobileSessionsToday)}</div>
            <div className="text-cyan-300 text-sm">Today</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Download className="w-5 h-5 text-green-400 mr-2" />
                Installs
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{formatNumber(mobileData.mobileOverview.appInstalls)}</div>
            <div className="text-red-300 text-sm">{formatNumber(mobileData.mobileOverview.appUninstalls)} uninstalls</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Target className="w-5 h-5 text-purple-400 mr-2" />
                Push Open
              </h3>
            </div>
            <div className="text-3xl font-bold text-purple-400">{formatPercentage(mobileData.mobileOverview.pushOpenRate)}</div>
            <div className="text-purple-300 text-sm">Rate</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <TrendingUp className="w-5 h-5 text-yellow-400 mr-2" />
                Session Time
              </h3>
            </div>
            <div className="text-3xl font-bold text-yellow-400">{formatDuration(mobileData.mobileOverview.averageSessionLength)}</div>
            <div className="text-yellow-300 text-sm">Average</div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Battery className="w-5 h-5 text-orange-400 mr-2" />
                Battery Impact
              </h3>
            </div>
            <div className="text-3xl font-bold text-green-400">{mobileData.mobileOverview.batteryImpact}</div>
            <div className="text-orange-300 text-sm">Impact</div>
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <Tablet className="w-5 h-5 text-blue-400 mr-2" />
            Device Analytics Breakdown
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mobileData.deviceBreakdown.map((deviceType, index) => (
              <div key={index} className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold text-lg">{deviceType.type}</h4>
                  <div className="text-blue-400 font-medium">{formatNumber(deviceType.count)} ({formatPercentage(deviceType.percentage)})</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {Object.entries(deviceType.operatingSystems).map(([os, data]) => (
                    <div key={os} className="bg-slate-600/30 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-medium capitalize">{os}</span>
                        <span className="text-cyan-400">{formatPercentage(data.percentage)}</span>
                      </div>
                      <div className="space-y-1 text-xs">
                        <div className="text-slate-300">Load: {data.performance.avgLoadTime}s</div>
                        <div className="text-slate-300">Crash: {formatPercentage(data.performance.crashRate)}</div>
                        <div className="text-slate-300">Battery: {data.performance.batteryDrain}</div>
                        <div className="text-slate-300">Memory: {data.performance.memoryUsage}MB</div>
                      </div>
                      <div className="mt-2 text-xs text-slate-400">
                        Top: {data.topDevices.slice(0, 2).join(', ')}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs mb-3">
                  <div className="text-purple-400">Session: {formatDuration(deviceType.engagement.avgSessionDuration)}</div>
                  <div className="text-green-400">Weekly: {formatPercentage(deviceType.engagement.weeklyRetention)}</div>
                  <div className="text-blue-400">Push: {formatPercentage(deviceType.engagement.pushOptInRate)}</div>
                </div>

                <div className="text-xs text-slate-400 mb-2">
                  <strong>Connectivity:</strong> WiFi {formatPercentage(deviceType.connectivity.wifi)}, 
                  {deviceType.connectivity.cellular5G && ` 5G ${formatPercentage(deviceType.connectivity.cellular5G)}, `}
                  {deviceType.connectivity.cellular4G && ` 4G ${formatPercentage(deviceType.connectivity.cellular4G)}`}
                </div>
                
                <div className="text-xs text-slate-400">
                  <strong>Screen Sizes:</strong> {deviceType.screenSizes.slice(0, 2).map(screen => `${screen.size} (${formatPercentage(screen.percentage)})`).join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* App Performance & User Behavior */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Signal className="w-5 h-5 text-green-400 mr-2" />
              App Performance Metrics
            </h3>
            <div className="space-y-4">
              {mobileData.appPerformance.map((metric, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{metric.metric}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded text-xs ${getStatusColor(metric.status)}`}>
                        {metric.status}
                      </span>
                      <span className="text-slate-400 text-xs">{typeof metric.value === 'number' ? (metric.value < 1 ? formatPercentage(metric.value) : `${metric.value}${metric.metric.includes('Time') ? 's' : metric.metric.includes('Memory') ? 'MB' : ''}`) : metric.value}</span>
                    </div>
                  </div>
                  
                  {metric.deviceBreakdown && (
                    <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                      {Object.entries(metric.deviceBreakdown).slice(0, 4).map(([device, value]) => (
                        <div key={device} className="text-slate-300">
                          {device}: {typeof value === 'number' ? (value < 1 ? formatPercentage(value) : `${value}${metric.metric.includes('Time') ? 's' : metric.metric.includes('Memory') ? 'MB' : ''}`) : value}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {metric.optimizations && (
                    <div className="text-slate-400 text-xs mb-2">
                      <strong>Optimizations:</strong> {metric.optimizations.slice(0, 2).join(', ')}
                    </div>
                  )}
                  
                  <div className="text-slate-400 text-xs mb-1">
                    <strong>Impact:</strong> {metric.impact}
                  </div>
                  
                  <div className="text-blue-400 text-xs">
                    <strong>Action:</strong> {metric.recommendation}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Users className="w-5 h-5 text-purple-400 mr-2" />
              Mobile User Behavior Patterns
            </h3>
            <div className="space-y-4">
              {mobileData.userBehaviorMobile.map((pattern, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{pattern.pattern}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 text-sm">{pattern.satisfaction.toFixed(1)} Sat</span>
                      <span className="text-slate-400 text-xs">{formatPercentage(pattern.percentage)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-blue-400">Users: {formatNumber(pattern.userCount)}</div>
                    <div className="text-green-400">Session: {formatDuration(pattern.sessionLength)}</div>
                    <div className="text-purple-400">Revenue: ${formatNumber(pattern.revenue)}</div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-xs mb-2">
                    <div className="text-yellow-400">Retention: {formatPercentage(pattern.retention)}</div>
                    <div className="text-orange-400">Push: {formatPercentage(pattern.pushEngagement)}</div>
                    <div className={`${pattern.churnRisk === 'LOW' ? 'text-green-400' : pattern.churnRisk === 'MEDIUM' ? 'text-yellow-400' : 'text-red-400'}`}>
                      Risk: {pattern.churnRisk}
                    </div>
                  </div>
                  
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Device:</strong> {pattern.devicePreference}
                  </div>
                  
                  <div className="text-slate-400 text-xs mb-2">
                    <strong>Usage:</strong> {pattern.timeOfUse.slice(0, 2).join(', ')}
                  </div>
                  
                  <div className="text-slate-400 text-xs">
                    <strong>Features:</strong> {pattern.features.slice(0, 3).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Push Notifications & Mobile Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Wifi className="w-5 h-5 text-cyan-400 mr-2" />
              Push Notification Analytics
            </h3>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400">{formatNumber(mobileData.pushNotifications.totalSent)}</div>
                <div className="text-slate-400 text-xs">Sent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(mobileData.pushNotifications.deliveryRate)}</div>
                <div className="text-slate-400 text-xs">Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{formatPercentage(mobileData.pushNotifications.openRate)}</div>
                <div className="text-slate-400 text-xs">Opened</div>
              </div>
            </div>
            
            <div className="space-y-3">
              {mobileData.pushNotifications.byCategory.map((category, index) => (
                <div key={index} className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{category.category}</span>
                    <span className="text-blue-400 text-xs">{formatNumber(category.sent)} sent</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-green-400">Open: {formatPercentage(category.openRate)}</div>
                    <div className="text-purple-400">CTR: {formatPercentage(category.ctr)}</div>
                    <div className="text-yellow-400">Revenue: ${formatNumber(category.revenue)}</div>
                    <div className="text-slate-400">Best: {category.bestTime}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2" />
              Mobile System Alerts
            </h3>
            <div className="space-y-4">
              {mobileData.mobileAlerts.map((alert, index) => (
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
                    {alert.currentValue && <div className="text-slate-300">Current: {alert.currentValue}</div>}
                    {alert.threshold && <div className="text-slate-300">Threshold: {alert.threshold}</div>}
                    {alert.affectedDevices && <div className="text-slate-300">Devices: {alert.affectedDevices}</div>}
                    {alert.estimatedUserImpact && <div className="text-red-400">Impact: {alert.estimatedUserImpact}</div>}
                    {alert.revenueImpact && <div className="text-green-400">Revenue: {alert.revenueImpact}</div>}
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

        {/* App Store Metrics */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            App Store Performance Analytics
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="text-white font-semibold mb-3">Ratings & Reviews</h4>
              <div className="text-center mb-3">
                <div className="text-3xl font-bold text-green-400">{mobileData.appStoreMetrics.ratings.average}</div>
                <div className="text-slate-400 text-xs">{formatNumber(mobileData.appStoreMetrics.ratings.total)} ratings</div>
              </div>
              <div className="space-y-1 text-xs">
                {Object.entries(mobileData.appStoreMetrics.ratings.distribution).reverse().map(([stars, percentage]) => (
                  <div key={stars} className="flex justify-between">
                    <span className="text-slate-300">{stars}⭐</span>
                    <span className="text-blue-400">{formatPercentage(percentage)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="text-white font-semibold mb-3">Review Sentiment</h4>
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-green-400">{formatPercentage(mobileData.appStoreMetrics.reviews.positive)}</div>
                <div className="text-slate-400 text-xs">Positive</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-300">Positive:</span>
                  <span className="text-green-400">{formatPercentage(mobileData.appStoreMetrics.reviews.positive)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Neutral:</span>
                  <span className="text-yellow-400">{formatPercentage(mobileData.appStoreMetrics.reviews.neutral)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Negative:</span>
                  <span className="text-red-400">{formatPercentage(mobileData.appStoreMetrics.reviews.negative)}</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-400">
                <strong>Keywords:</strong> {mobileData.appStoreMetrics.reviews.topKeywords.slice(0, 3).join(', ')}
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="text-white font-semibold mb-3">Downloads</h4>
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-blue-400">{formatNumber(mobileData.appStoreMetrics.downloads.total)}</div>
                <div className="text-slate-400 text-xs">Total</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-300">Organic:</span>
                  <span className="text-green-400">{formatNumber(mobileData.appStoreMetrics.downloads.organic)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Paid:</span>
                  <span className="text-purple-400">{formatNumber(mobileData.appStoreMetrics.downloads.paid)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Referral:</span>
                  <span className="text-blue-400">{formatNumber(mobileData.appStoreMetrics.downloads.referral)}</span>
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-400">
                <strong>Conversion:</strong> {formatPercentage(mobileData.appStoreMetrics.downloads.conversionRate)}
              </div>
            </div>

            <div className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/30">
              <h4 className="text-white font-semibold mb-3">Update Metrics</h4>
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-cyan-400">{formatPercentage(mobileData.appStoreMetrics.updates.adoptionRate)}</div>
                <div className="text-slate-400 text-xs">Adoption</div>
              </div>
              <div className="space-y-2 text-xs">
                <div className="text-slate-300">
                  <strong>Avg Adoption:</strong> {mobileData.appStoreMetrics.updates.averageAdoptionTime}
                </div>
                <div className="text-slate-300">
                  <strong>Force Update:</strong> {formatPercentage(mobileData.appStoreMetrics.updates.forceUpdateCompliance)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}